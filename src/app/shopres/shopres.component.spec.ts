import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopresComponent } from './shopres.component';

describe('ShopresComponent', () => {
  let component: ShopresComponent;
  let fixture: ComponentFixture<ShopresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
