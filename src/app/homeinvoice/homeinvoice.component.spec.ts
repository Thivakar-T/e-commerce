import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeinvoiceComponent } from './homeinvoice.component';

describe('HomeinvoiceComponent', () => {
  let component: HomeinvoiceComponent;
  let fixture: ComponentFixture<HomeinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
