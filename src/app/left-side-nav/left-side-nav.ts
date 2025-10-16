import { Component, Input, OnInit } from '@angular/core';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuPanel } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { AgGridTable } from '../ag-grid-table/ag-grid-table';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-left-side-nav',
  imports: [
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatToolbarRow,
    MatListModule,
    AgGridTable,
  ],
  templateUrl: './left-side-nav.html',
  styleUrl: './left-side-nav.scss',
})
export class LeftSideNav implements OnInit {
  openMenu: boolean = false;
  drawer: any;
  toggleDrawer() {
    this.openMenu = !this.openMenu;
  }
  ngOnInit() {}
}
