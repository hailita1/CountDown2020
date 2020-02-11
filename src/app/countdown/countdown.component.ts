import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  private intervalId = 0;
  remainingTime: number;
  isStart = true;
  @Input()
  second: number;


  constructor() {
  }

  ngOnInit(): void {
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  start() {
    this.clearTimer();
    this.isStart = false;
    this.intervalId = window.setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      }
    }, 1000);
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.second;
    this.start();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  onChange(value) {
    this.second = value;
    this.remainingTime = value;
  }
}
