import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-create-task-dialogue',
  templateUrl: './create-task-dialogue.component.html',
  styleUrls: ['./create-task-dialogue.component.css']
})
export class CreateTaskDialogueComponent implements OnInit {


  statusArray = [
    { name: "To Do", value: "todo" },
    { name: "In Progress", value: "in progress" },
    { name: "Completed", value: "completed" }
  ];
  assignedToArray :Array<any> = [];

  constructor(
    public dialogRef: MatDialogRef<CreateTaskDialogueComponent>,
    private fb: FormBuilder,
    private api: AppService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  taskForm: FormGroup = this.fb.group({
    name: ["", Validators.required],
    description: ["", Validators.required],
    status: ["", Validators.required],
    due_date: ["", Validators.required],
    assignedTo: ["", Validators.required]

  });
  close(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.api.getUsers().subscribe((res: any) => {
      if (res && res.data && res.data.length > 0) {
        this.assignedToArray = res.data;
      }
    });
  }
  onSubmit() {
    if(this.taskForm.valid){
      this.api.saveTask(this.taskForm.value).subscribe((res:any)=>{
        if(res && res.res.affectedRows == 1){
          this.close();
        }
      });
    }
  }
}
