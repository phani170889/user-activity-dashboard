import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-custom-cell-component',
  imports: [MatButtonModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './custom-cell-component.html',
  styleUrl: './custom-cell-component.scss',
})
export class CustomCellComponent implements ICellRendererAngularComp {
  params!: ICellRendererParams & { label: string; action: (data: any) => void };
  label: string = '';

  agInit(params: ICellRendererParams & { label: string; action: (data: any) => void }) {
    this.params = params;
    this.label = params.label;
  }

  onClick() {
    if (this.params.action) {
      this.params.action(this.params.data); // Pass the row data to the action
    }
  }

  refresh(params: ICellRendererParams): boolean {
    return false; // Return false to re-create the component on refresh
  }
}
