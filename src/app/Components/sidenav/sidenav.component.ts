import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormCompComponent } from '../form-comp/form-comp.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  OpenDialogBox(){
    this.dialog.open(FormCompComponent, {
      panelClass: 'custom-modalbox'});
  }
}
