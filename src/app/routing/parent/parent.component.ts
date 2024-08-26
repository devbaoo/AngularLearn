import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'parent',
  standalone: true,
  templateUrl: './parent.component.html',
  //   styleUrls: ['./name.component.scss'],
  imports: [RouterModule],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
