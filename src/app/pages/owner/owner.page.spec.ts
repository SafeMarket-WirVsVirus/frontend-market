import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnerPage } from './owner.page';

describe('OwnerPage', () => {
  let component: OwnerPage;
  let fixture: ComponentFixture<OwnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
