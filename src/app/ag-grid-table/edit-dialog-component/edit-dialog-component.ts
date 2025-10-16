import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-edit-dialog-component',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule],
  templateUrl: './edit-dialog-component.html',
  styleUrl: './edit-dialog-component.scss',
})
export class EditDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<EditDialogComponent>);
  data = inject<DialogData>(MAT_DIALOG_DATA);
  firstName: any;
  lastName: any;
  zipCode: any;

  ngOnInit() {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(action: any) {
    let data;
    if (action === 'create') {
      data = {
        firstName: this.firstName,
        lastName: this.lastName,
        zipCode: this.zipCode,
      };
    } else {
      this.data.action = 'edit';
      data = this.data;
    }
    this.dialogRef.close(data);
  }
}

export interface DialogData {
  action: string;
  firstName: string;
  lastName: string;
  zipCode: string;
}
