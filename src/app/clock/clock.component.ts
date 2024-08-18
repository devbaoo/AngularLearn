import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clock',
  standalone: true,
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  currentTime: string;
  currentPeriod: string;
  currentDay: string;

  rotateHour: string;
  rotateMinute: string;
  rotateSecond: string;

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // Tính góc quay cho các kim
    const hourAngle = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour, 0.5 degrees per minute
    const minuteAngle = minutes * 6; // 6 degrees per minute
    const secondAngle = seconds * 6; // 6 degrees per second

    // Cập nhật giá trị transform
    this.rotateHour = `rotate(${hourAngle}deg)`;
    this.rotateMinute = `rotate(${minuteAngle}deg)`;
    this.rotateSecond = `rotate(${secondAngle}deg)`;

    // Format giờ, phút, giây
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    this.currentTime = `${formattedHours}:${formattedMinutes} : ${formattedSeconds}`;
    this.currentPeriod = period;
    this.currentDay = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  }
}
