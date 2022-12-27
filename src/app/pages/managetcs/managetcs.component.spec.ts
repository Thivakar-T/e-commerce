import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetcsComponent } from './managetcs.component';

describe('ManagetcsComponent', () => {
  let component: ManagetcsComponent;
  let fixture: ComponentFixture<ManagetcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagetcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagetcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
