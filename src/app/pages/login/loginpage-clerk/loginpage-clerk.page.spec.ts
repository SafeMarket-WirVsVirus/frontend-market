import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginpageClerkPage } from './loginpage-clerk.page';

describe('LandingpageClerkPage', () => {
  let component: LoginpageClerkPage;
  let fixture: ComponentFixture<LoginpageClerkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpageClerkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginpageClerkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
