import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ContactComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  public name: string | null | 'Ditmemay' | 'Concac' | number = null;
  private _address: string = 'Vietnam';

  /**
   * thang chay dau tien
   */
  constructor() {
    console.log('tao ra truoc');
  }
  //khi bo m dc sinh ra
  ngOnInit(): void {
    console.log('hihihaha');
    setTimeout(() => {
      this.name = 7;
    }, 3000);
  }

  // khi tao da render noi dung
  ngAfterViewInit(): void {
    console.warn('hihihuhu');
  }
}
