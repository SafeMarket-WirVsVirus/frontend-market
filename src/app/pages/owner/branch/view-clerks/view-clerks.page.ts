import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-clerks',
  templateUrl: './view-clerks.page.html',
  styleUrls: ['./view-clerks.page.scss'],
})
export class ViewClerksPage implements OnInit {

  public activeBranch; // TODO: Infer actual type
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(map(() => window.history.state.branch)).subscribe((state => {
      this.activeBranch = state;
    }));
  }

}
