import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BranchPage } from './branch.page';

describe('BranchPage', () => {
  let component: BranchPage;
  let fixture: ComponentFixture<BranchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BranchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
