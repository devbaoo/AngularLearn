import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'paymentmethod',
  standalone: true,
  templateUrl: './paymentmethod.component.html',
  // styleUrls: ['./name.component.scss']
  imports: [CommonModule, RouterModule],
})
export class PaymentMethodComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
