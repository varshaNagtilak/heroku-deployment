import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouirtComponent } from './favouirt.component';

describe('FavouirtComponent', () => {
  let component: FavouirtComponent;
  let fixture: ComponentFixture<FavouirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
