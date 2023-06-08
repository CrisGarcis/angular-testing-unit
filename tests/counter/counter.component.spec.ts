import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../../src/app/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a variable called "counter" with value 10 as default', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const counter = fixture.componentInstance;
    expect(counter.counter).toBeTruthy();
    expect(counter.counter).toEqual(10);
  });
});
