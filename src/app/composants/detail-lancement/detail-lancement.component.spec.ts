import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLancementComponent } from './detail-lancement.component';

describe('DetailLancementComponent', () => {
  let component: DetailLancementComponent;
  let fixture: ComponentFixture<DetailLancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLancementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
