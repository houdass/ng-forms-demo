import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Gender {
  id: number;
  label: string;
}

interface User {
  name: string;
  email: string;
  gender: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;
  genders: Array<Gender>;

  defaultGender: Gender;
  defaultName = 'Angular';
  data: User;
  submitted: boolean;

  ngOnInit() {
    this.genders = [{ id: 0, label: 'Female' }, { id: 1, label: 'Male' }];
    this.defaultGender = this.genders[0];
  }

  onSubmit() {
    this.data = {
      name: this.userForm.value.user.name,
      email: this.userForm.value.user.email,
      gender: this.userForm.value.gender.label
    };
    this.submitted = true;
  }

  setForm() {
    /* this.userForm.setValue({
      user: { name: 'Youness', email: 'houd.youness@gmail.com' },
      gender: this.genders[1]
    }); */
    this.userForm.form.patchValue({
      user: { name: 'Youness' }
    });
  }

  resetForm() {
    this.userForm.reset();
  }
}
