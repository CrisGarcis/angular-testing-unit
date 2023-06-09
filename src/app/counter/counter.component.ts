import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter: number = 10;
  constructor() {}
  ngOnInit(): void {}
  increaseBy(value: number) {
    this.counter += value;
  }
  sum(num1: number, num2: number) {
    return num1 + num2;
  }
}
