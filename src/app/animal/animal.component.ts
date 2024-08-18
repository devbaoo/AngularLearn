import { P } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { FeatureModule } from './pipe.module';

@Component({
  selector: 'animal',
  standalone: true,
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
  imports: [CommonModule, FeatureModule],
})
export class AnimalComponent implements OnInit {
  //Ngay
  dateTime = new Date();
  //Number
  salary: number = 10000000;
  constructor() {}
  animals: any[] = [
    { name: 'Lion', status: 'Endangered', age: 8 },
    { name: 'Elephant', status: 'Vulnerable', age: 15 },
    { name: 'Panda', status: 'Endangered', age: 5 },
    { name: 'Kangaroo', status: 'Least Concern', age: 3 },
    { name: 'Dolphin', status: 'Near Threatened', age: 10 },
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.dateTime = new Date();
    }, 1000);
  }
}
