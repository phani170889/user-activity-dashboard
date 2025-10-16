import { Component, inject, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import {
  colorSchemeDarkBlue,
  GridReadyEvent,
  themeAlpine,
  type ColDef,
} from 'ag-grid-community'; // Column Definition Type Interface
import { CustomCellComponent } from './custom-cell-component/custom-cell-component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog-component/edit-dialog-component';
import { ApiClientService } from '../api-client-service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ag-grid-table',
  imports: [AgGridAngular, MatButtonModule],
  templateUrl: './ag-grid-table.html',
  styleUrl: './ag-grid-table.scss',
})
export class AgGridTable implements OnInit {
  isTableLoading: boolean = false;
  rowData: any;
  colDefs: ColDef[] = [
    { field: 'firstName', headerName: 'First name', sort: 'asc', unSortIcon: true },
    { field: 'lastName', headerName: 'Last name', unSortIcon: true },
    { field: 'zipCode', headerName: 'Zip code', unSortIcon: true },
    {
      field: 'actions',
      headerName: 'Actions',
      cellRenderer: CustomCellComponent,
      flex: 1,
      cellRendererParams: {
        label: 'Edit', // Custom parameter: button label
        action: (data: any) => this.addOrEditUser(data), // Custom parameter: callback function
      },
    },
  ];
  tableData: any[] = [];
  theme = themeAlpine.withPart(colorSchemeDarkBlue);
  pagination: boolean = true;
  paginationPageSize = 10;
  paginationPageSizeSelector = [10, 20, 50, 100];
  dialogRef!: MatDialogRef<EditDialogComponent, any>;
  readonly dialog = inject(MatDialog);

  constructor(private apiClientService: ApiClientService) {}
  ngOnInit() {}

  getTableRows(data: any) {
    data.forEach((ele: any) => {
      this.tableData.push({
        id: ele.id,
        firstName: ele.first_name,
        lastName: ele.last_name,
        zipCode: ele.zip_code,
      });
    });
    return this.tableData;
  }

  // Load data into grid when ready
  onGridReady(params?: GridReadyEvent) {
    this.isTableLoading = true;
    this.apiClientService.get('/api/user/profile').subscribe({
      next: (data: any) => {
        if (data) {
          this.isTableLoading = false;
          this.rowData = this.getTableRows(data);
        }
      },
      error: (err: any) => {
        this.isTableLoading = false;
        console.error(err);
      },
    });
  }

  addOrEditUser(data?: any) {
    this.dialogRef = this.dialog.open(EditDialogComponent, {
      height: '400px',
      width: '600px',
      data,
    });
    this.saveUser();
  }

  saveUser() {
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result !== undefined) {
        const uuid = crypto.randomUUID();
        const body = {
          id: result.action === 'edit' ? result.id : uuid,
          first_name: result.firstName,
          last_name: result.lastName,
          zip_code: result.zipCode,
        };
        this.apiClientService.put('/api/user/profile', body).subscribe({
          next: (data: any) => {
            if (data.status === 'SUCCESS') {
              this.onGridReady();
            }
          },
          error(err: any) {
            console.error(err);
          },
        });
      }
    });
  }
}
