import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit-dialog-component',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './edit-dialog-component.html',
  styleUrl: './edit-dialog-component.scss',
})
export class EditDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<EditDialogComponent>);
  userData = inject<DialogData>(MAT_DIALOG_DATA);
  userForm!: FormGroup;
  submitted!: boolean;
  isAmountValid: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = new FormGroup({ 
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
    });

    // this.userForm = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   zipCode: ['', Validators.required],
    // })
  }

  onCancelClick(): void {
    this.userData.action = 'cancel';
    this.dialogRef.close();
  }

  onSaveClick(action: any) {
    this.submitted = true;
    if (this.userForm.valid) {
      if (action === 'edit') {
        this.userData.data.firstName = this.userForm.value.firstName;
        this.userData.data.lastName = this.userForm.value.lastName;
        this.userData.data.zipCode = this.userForm.value.zipCode;
        this.userData.action = action;
      } else {
        let data = {
          firstName: this.userForm.value.firstName,
          lastName: this.userForm.value.lastName,
          zipCode: this.userForm.value.zipCode,
        };
        this.userData.data = data;
      }
      this.dialogRef.close(this.userData);
    }
  }

  customAmountValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value >= 10) {
      this.isAmountValid = false;
    }
    return null
  }
}

export interface DialogData {
  action: string;
  data: {
    firstName: string;
    lastName: string;
    zipCode: string;
  };
}
