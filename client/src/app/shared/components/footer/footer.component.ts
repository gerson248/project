import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

}
