import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecretsPage } from './secrets.page';

describe('SecretsPage', () => {
  let component: SecretsPage;
  let fixture: ComponentFixture<SecretsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecretsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
