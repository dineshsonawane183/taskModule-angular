import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateTaskDialogueComponent } from '../create-task-dialogue/create-task-dialogue.component';
import { MatDialog } from '@angular/material';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private appService:AppService
  ) { }
  ngOnInit(): void {
  }
  isAuthenticated() {
    return this.appService.isAuthenticated();
  }
  logout(){
    this.appService.logout();
    this.router.navigate(['login']);
  }
  createTask() {
    const dialogRef = this.dialog.open(CreateTaskDialogueComponent, {
      width: '60%',
      height: '88%',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
}

