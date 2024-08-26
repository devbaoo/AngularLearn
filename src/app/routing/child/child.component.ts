import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'child',
  standalone: true,
  templateUrl: './child.component.html',
  // styleUrls: ['./name.component.scss']
  imports: [RouterModule],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
