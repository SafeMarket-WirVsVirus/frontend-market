import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BranchUIModelInterface, BranchUIModel, BranchTimeSlot } from 'src/app/services/ui-models/branch-ui-model';
import { BackendMarketService } from 'src/app/services/backend-market.service';

enum PageState {
  Stage1 = 1,
  Stage2 = 2,
  Stage3 = 3
}

interface WeekSection {
  open?: boolean;
  name: string;
  timeslots: BranchTimeSlot[];
}

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.page.html',
  styleUrls: ['./add-branch.page.scss'],
})
export class AddBranchPage implements OnInit {

  PageState = PageState;
  public title: string;
  public pageState = PageState.Stage1;

  // Branch information given as by parameter
  private activeBranch: BranchUIModelInterface;

  public weekSections: WeekSection[];
  public stage3FormGroup = new FormGroup({
    maxUtilization: new FormControl(1, [
      Validators.required
    ]),
    maxDuration: new FormControl(15, [
      Validators.required
    ]),
    maxReservations: new FormControl(1, [
      Validators.required
    ]),
  });
  public stage1FormGroup = new FormGroup({
    branchName: new FormControl('', [
      Validators.required
    ]),
    street: new FormControl('', [
      Validators.required
    ]),
    postCode: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(private route: ActivatedRoute, private router: Router, private marketService: BackendMarketService) { }

  ngOnInit() {
    this.route.paramMap.pipe(map(() => window.history.state)).subscribe((state) => {

      if (state.hasOwnProperty('branch')) {
        this.activeBranch = state.branch;
        this.title = 'Filiale bearbeiten';
      } else {
        this.activeBranch = BranchUIModel.initDefault();
        this.title = 'Neue Filiale anlegen';
      }

      // Initialize Address Form-Data
      this.stage1FormGroup.get('branchName').setValue(this.activeBranch.name);
      this.stage1FormGroup.get('street').setValue(this.activeBranch.address.street);
      this.stage1FormGroup.get('postCode').setValue(this.activeBranch.address.postcode);

      // Initialize Timeslot data
      this.weekSections = [
        {
          name: 'Montag',
          timeslots: this.activeBranch.openingTimes.monday
        },
        {
          name: 'Dienstag',
          timeslots: this.activeBranch.openingTimes.tuesday
        },
        {
          name: 'Mittwoch',
          timeslots: this.activeBranch.openingTimes.wednesday
        },
        {
          name: 'Donnerstag',
          timeslots: this.activeBranch.openingTimes.thursday
        },
        {
          name: 'Freitag',
          timeslots: this.activeBranch.openingTimes.friday
        },
        {
          name: 'Samstag',
          timeslots: this.activeBranch.openingTimes.saturday
        },
        {
          name: 'Sonntag',
          timeslots: this.activeBranch.openingTimes.sunday
        }
      ];

      /// Initialize Capacity Form-Data
      this.stage3FormGroup.get('maxUtilization').setValue(this.activeBranch.maxUtilization);
      this.stage3FormGroup.get('maxDuration').setValue(this.activeBranch.maxDuration);
      this.stage3FormGroup.get('maxReservations').setValue(this.activeBranch.maxReservations);
    });
  }

  onSaveChanges() {
    // TODO: Rework model to separate editable branch-balues and other values (like current utilization and clerk-count)
    this.marketService.storeBranch(new BranchUIModel({
      id: this.activeBranch.id,
      name: this.stage1FormGroup.get('branchName').value,
      clerkCount: this.activeBranch.clerkCount, // Might be removed with mock
      maxUtilization: this.stage3FormGroup.get('maxUtilization').value,
      currentUtilization: this.activeBranch.currentUtilization, // Might be removed with mock
      maxReservations: this.stage3FormGroup.get('maxReservations').value,
      maxDuration: this.stage3FormGroup.get('maxDuration').value,
      utilization: this.activeBranch.utilization, // Might be removed with mock
      address: {
        street: this.stage1FormGroup.get('street').value,
        postcode: this.stage1FormGroup.get('postCode').value
      },
      openingTimes: {
        monday: this.weekSections[0].timeslots,
        tuesday: this.weekSections[1].timeslots,
        wednesday: this.weekSections[2].timeslots,
        thursday: this.weekSections[3].timeslots,
        friday: this.weekSections[4].timeslots,
        saturday: this.weekSections[5].timeslots,
        sunday: this.weekSections[6].timeslots
      }
    })).subscribe(result => {
      if (result.success) {
        this.router.navigate(['/owner/tab-branch'], {state: { reload: true }});
      }
      // TODO: Handle Error
    });
  }

  toggleWeekday(index) {
    this.weekSections[index].open = !this.weekSections[index].open;
    if (this.weekSections[index].open) { // Close others when opened
      this.weekSections
      .filter((elem, elemIndex) => elemIndex !== index)
      .map(elem => elem.open = false);
    }
  }

  onAddTimeslot(sender, index) {
    sender.preventDefault();

    // get last entry to pre-fill datepicker
    const lastEntry = this.weekSections[index].timeslots.slice(-1)[0] || { from: '00:00', to: '00:00' };
    this.weekSections[index].timeslots.push({
      from: lastEntry.to,
      to: lastEntry.to
    });
  }

  deleteTimeslot(sender, index, slotIndex) {
    sender.preventDefault();
    this.weekSections[index].timeslots.splice(slotIndex, 1);
  }
}
