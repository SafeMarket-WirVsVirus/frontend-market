import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export enum BranchUtilization {
  High = 3,
  Medium = 2,
  Low = 1
}

@Component({
  selector: 'app-branch',
  templateUrl: './branch.page.html',
  styleUrls: ['./branch.page.scss'],
})
export class BranchPage implements OnInit {
  BranchUtilization = BranchUtilization;

  // TODO: Mock. Fill with service call
  public branchEntries = [
    {
      name: 'REWE Göttingen',
      clerkCount: 5,
      maxUtilization: 80,
      currentUtilization: 70,
      utilization: BranchUtilization.High
    },
    {
      name: 'REWE Göt. Süd',
      clerkCount: 5,
      maxUtilization: 60,
      currentUtilization: 30,
      utilization: BranchUtilization.Medium
    },
    {
      name: 'REWE Neustatt',
      clerkCount: 5,
      maxUtilization: 30,
      currentUtilization: 5,
      utilization: BranchUtilization.Low
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
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
}
