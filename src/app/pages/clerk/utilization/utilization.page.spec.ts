import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtilizationPage } from './utilization.page';

describe('UtilizationPage', () => {
  let component: UtilizationPage;
  let fixture: ComponentFixture<UtilizationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilizationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtilizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
