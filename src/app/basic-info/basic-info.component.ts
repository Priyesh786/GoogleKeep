import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  template: `
  <div class="dob">
      <div class="month">
        <mat-form-field appearance="outline" color="primary">
          <mat-select placeholder="Month" formControlName="month">
{{month.name}}</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="month">
        <mat-form-field appearance="outline" color="primary">
          <mat-label>Day</mat-label>
          <input matInput formControlName="day">
          <mat-error *ngIf="registerForm.get('day')?.hasError('required')">Day is required</mat-error>
          <mat-error *ngIf="registerForm.get('day')?.hasError('invalidDay')">Invalid Day</mat-error>
        </mat-form-field>
      </div>
      <div class="month">
        <mat-form-field appearance="outline" color="primary">
          <mat-label>Year</mat-label>
          <input matInput formControlName="year">
        </mat-form-field>
      </div>
    </div>
  `
})
export class BasicInfoComponent {
  // registerForm!: FormGroup;
  months = [
    { value: 1, name: 'January' },
    { value: 2, name: 'February' },
    { value: 3, name: 'March' },
    { value: 4, name: 'April' },
    { value: 5, name: 'May' },
    { value: 6, name: 'June' },
    { value: 7, name: 'July' },
    { value: 8, name: 'August' },
    { value: 9, name: 'September' },
    { value: 10, name: 'October' },
    { value: 11, name: 'November' },
    { value: 12, name: 'December' }
  ];
  genders = [
    { value: 'Male', name: 'Male' },
    { value: 'Female', name: 'Female' }
  ];
 
  }


