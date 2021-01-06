import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAndStatisticsComponent } from './history-and-statistics.component';

describe('HistoryAndStatisticsComponent', () => {
  let component: HistoryAndStatisticsComponent;
  let fixture: ComponentFixture<HistoryAndStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryAndStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAndStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
