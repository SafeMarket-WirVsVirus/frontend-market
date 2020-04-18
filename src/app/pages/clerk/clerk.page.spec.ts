import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClerkPage } from './clerk.page';

describe('ClerkPage', () => {
  let component: ClerkPage;
  let fixture: ComponentFixture<ClerkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClerkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClerkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
