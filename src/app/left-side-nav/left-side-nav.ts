import { Component, Input, OnInit } from '@angular/core';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-left-side-nav',
  imports: [
    MatSidenavModule,
    MatMenuModule,
    MatSidenavContainer,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    AgGridAngular,
  ],
  templateUrl: './left-side-nav.html',
  styleUrl: './left-side-nav.scss',
})
export class LeftSideNav implements OnInit {
  @Input() profileData: any;
  menu: any;
  rowData: any;
  colDefs: ColDef[] = [{ field: 'firstName' }, { field: 'lastName' }, { field: 'zipCode' }];
  tableData: any[] = [];

  ngOnInit() {}

  ngOnChanges() {
    console.log('profileData', this.profileData);
    if (this.profileData) {
      this.rowData = this.getTableRows(this.profileData);
    }
  }

  getTableRows(data: any) {
    data.forEach((ele: any) => {
      this.tableData.push({
        firstName: ele.first_name,
        lastName: ele.last_name,
        zipCode: ele.zip_code,
      });
    });
    return this.tableData;
  }
}

// Row Data: The data to be displayed.
// rowData = [
//     { make: "Tesla", model: "Model Y", price: 64950, electric: true },
//     { make: "Ford", model: "F-Series", price: 33850, electric: false },
//     { make: "Toyota", model: "Corolla", price: 29600, electric: false },
// ];

// Column Definitions: Defines the columns to be displayed.
