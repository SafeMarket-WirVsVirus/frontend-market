import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { BranchUIModelInterface } from 'src/app/services/ui-models/branch-ui-model';

@Component({
  selector: 'app-view-branch',
  templateUrl: './view-branch.page.html',
  styleUrls: ['./view-branch.page.scss'],
})
export class ViewBranchPage implements OnInit {

  public activeBranch: BranchUIModelInterface;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(map(() => window.history.state.branch)).subscribe((state => {
      this.activeBranch = state;
    }));
  }

}
