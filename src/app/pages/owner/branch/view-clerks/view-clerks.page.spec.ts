import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewClerksPage } from './view-clerks.page';

describe('ViewClerksPage', () => {
  let component: ViewClerksPage;
  let fixture: ComponentFixture<ViewClerksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClerksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewClerksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
