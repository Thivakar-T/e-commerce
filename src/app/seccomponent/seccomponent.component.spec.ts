import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccomponentComponent } from './seccomponent.component';

describe('SeccomponentComponent', () => {
  let component: SeccomponentComponent;
  let fixture: ComponentFixture<SeccomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
