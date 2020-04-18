import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginpageOwnerPage } from './loginpage-owner.page';

describe('LandingpageOwnerPage', () => {
  let component: LoginpageOwnerPage;
  let fixture: ComponentFixture<LoginpageOwnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpageOwnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginpageOwnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
