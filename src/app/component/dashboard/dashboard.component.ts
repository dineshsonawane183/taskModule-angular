import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashbordComponent implements OnInit {

  taskArr: Array<any> = [];
  total = 0; // total records
  currentPage = 1;
  itemsPerPage = 6;
  totalPage: Array<any> = [];

  constructor(
    private api: AppService
  ) { }

  ngOnInit(): void {
    this.getTotalTasks();
  }
  getTotalTasks() {
    this.api.totalTask().subscribe((res: any) => {
      if (res && res[0]) {
        for (let i = 0; i < Math.floor(res[0].total / this.itemsPerPage); i++) {
          this.totalPage.push(i + 1);
        }
        this.paginationChange(this.currentPage)
      }
    });
  }
  paginationChange(index: number) {
    this.currentPage = index;
    let params = {
      limit : this.currentPage -1 ,
      offset: this.itemsPerPage
    }
    this.api.getTasks(params).subscribe((res: any) => {
      if (res && res.data && res.data.length > 0) {
        this.taskArr = res.data;
      }
    });
  }
  paginationPrevChange() {
    if(this.currentPage > 1){
      this.currentPage -=1;
      this.paginationChange(this.currentPage);
    }
  }
  paginationNextChange() {
    if(this.currentPage < this.totalPage.length){
      this.currentPage +=1;
      this.paginationChange(this.currentPage);
    }
  }
}
