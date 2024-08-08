import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}
  name: string = 'Ditmemay';
  ngOnInit(): void {}
}
