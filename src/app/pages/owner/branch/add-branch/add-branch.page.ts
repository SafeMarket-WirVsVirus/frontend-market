import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

enum PageState {
  Edit = 1,
  Add = 2
}

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.page.html',
  styleUrls: ['./add-branch.page.scss'],
})
export class AddBranchPage implements OnInit {

  PageState = PageState;
  public pageState = PageState.Add;

  public activeBranch; // TODO: Infer actual type
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(map(() => window.history.state)).subscribe((state => {
      if (state.hasOwnProperty('branch')) {
        this.activeBranch = state.branch;
        this.pageState = PageState.Edit;
      } else {
        this.activeBranch = {/* TODO: Init */};
        this.pageState = PageState.Add;
      }
    }));
  }

}
