import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { AnimalComponent } from './animal/animal.component';
import { ProductComponent } from './product/product.component';
import { ClockComponent } from './clock/clock.component';
import { StudentComponent } from './student/student.component';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { StudentProComponent } from './student-pro/student-pro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaymentMethodComponent } from './paymentmethod/paymentmethod.component';
import { VisaComponent } from './visa/visa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    UserComponent,
    ContactComponent,
    LoginComponent,
    EmployeesComponent,
    AnimalComponent,
    ProductComponent,
    ClockComponent,
    StudentComponent,
    StudentDialogComponent,
    StudentProComponent,
    SidebarComponent,
    PaymentMethodComponent,
    VisaComponent,
  ],
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
