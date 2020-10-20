import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmformComponent } from './kmform.component';

describe('KmformComponent', () => {
  let component: KmformComponent;
  let fixture: ComponentFixture<KmformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KmformComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KmformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
