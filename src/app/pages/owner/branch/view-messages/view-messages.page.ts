import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-messages',
  templateUrl: './view-messages.page.html',
  styleUrls: ['./view-messages.page.scss'],
})
export class ViewMessagesPage implements OnInit {

  public activeBranch; // TODO: Infer actual type
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(map(() => window.history.state.branch)).subscribe((state => {
      this.activeBranch = state;
    }));
  }

}
