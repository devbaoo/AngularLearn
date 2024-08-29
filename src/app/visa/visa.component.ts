import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'visa',
  templateUrl: './visa.component.html',
  standalone: true,
  // styleUrls: ['./name.component.scss']
  imports: [CommonModule, RouterModule],
})
export class VisaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
