import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface Gender {
  id: number;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  genders: Array<Gender>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.genders = [{ id: 0, label: 'Female' }, { id: 1, label: 'Male' }];
    this.userForm = this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control(''),
      gender: this.fb.control('')
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
