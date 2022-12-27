import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguretermsComponent } from './configureterms.component';

describe('ConfiguretermsComponent', () => {
  let component: ConfiguretermsComponent;
  let fixture: ComponentFixture<ConfiguretermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguretermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguretermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
