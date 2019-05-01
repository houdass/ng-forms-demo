import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  emails: Array<String>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.genders = [{ id: 0, label: 'Female' }, { id: 1, label: 'Male' }];
    this.emails = ['houd.youness@gmail.com', 'angular@google.com'];
    this.userForm = this.fb.group({
      user: this.fb.group({
        name: this.fb.control('', [Validators.required, Validators.maxLength(7)]),
        email: this.fb.control('', [Validators.required, Validators.email], [this.isUniqueAsync.bind(this)])
      }),
      gender: this.fb.control('', Validators.required),
      hobbies: this.fb.array([])
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  get name() {
    return this.userForm.get('user.name');
  }

  get email() {
    return this.userForm.get('user.email');
  }

  isUniqueSync(control: FormControl): any {
    if (this.emails.find((email: string) => email === control.value)) {
      return { exists: true };
    }
    return null;
  }

  isUniqueAsync(control: FormControl): any {
    return new Promise<any>(resolve => {
      setTimeout(() => {
        if (this.emails.find((email: string) => email === control.value)) {
          resolve({ exists: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.userForm.get('hobbies') as FormArray).push(control);
  }
}
