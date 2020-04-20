import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BranchUIModelInterface, BranchUtilization } from 'src/app/services/ui-models/branch-ui-model';
import { Observable } from 'rxjs';
import { BackendMarketService } from 'src/app/services/backend-market.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.page.html',
  styleUrls: ['./branch.page.scss'],
})
export class BranchPage implements OnInit {
  BranchUtilization = BranchUtilization;
  public branchEntries: Observable<BranchUIModelInterface[]>;

  constructor(private router: Router, private route: ActivatedRoute, private marketService: BackendMarketService) { }

  ngOnInit() {
    // TODO: Must store OwnerID somewhere and pass it to the method
    this.branchEntries = this.marketService.getBranches();
    this.route.paramMap.pipe(map(() => window.history.state)).subscribe((state) => {
      if (state.reload) {
        this.branchEntries = this.marketService.getBranches();
      }
    });
  }

  doRefresh(event) {
    this.branchEntries = this.marketService.getBranches().pipe(
      map((res) => {
        event.target.complete();
        return res;
      })
    );
  }

  onViewClerks(sender, branch) {
    sender.preventDefault();
    this.router.navigate(['view-clerks'], { relativeTo: this.route, state: { branch } });
  }

  onViewBranch(sender, branch) {
    sender.preventDefault();
    this.router.navigate(['view-branch'], { relativeTo: this.route, state: { branch } });
  }

  onMessages(sender, branch) {
    sender.preventDefault();
    this.router.navigate(['view-messages'], { relativeTo: this.route, state: { branch } });
  }

  onEdit(sender, branch) {
    sender.preventDefault();
    this.router.navigate(['add-branch'], { relativeTo: this.route, state: { branch } });
  }

  onAddBranch(sender) {
    sender.preventDefault();
    this.router.navigate(['add-branch'], { relativeTo: this.route });
  }

  deleteBranch(sender, id) {
    sender.preventDefault();
    this.marketService.deleteBranch(id);
  }
}
