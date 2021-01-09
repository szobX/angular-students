import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  now!: Date;

  setTime(): Date {
    const currentTime = new Date();
    this.now = currentTime;
  }

  constructor() {
    setInterval(() => {
      this.setTime();
    });
  }

  ngOnInit(): void {}
}
