import { Component, OnInit, Input } from '@angular/core';
import { BranchTimeSlot } from 'src/app/services/ui-models/branch-ui-model';

@Component({
  selector: 'app-open-time-view',
  templateUrl: './open-time-view.component.html',
  styleUrls: ['./open-time-view.component.scss'],
})
export class OpenTimeViewComponent implements OnInit {
  @Input() openingTimes: BranchTimeSlot[];
  @Input() title: string;
  constructor() { }
  ngOnInit() {}
}
