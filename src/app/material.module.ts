import { NgModule } from '@angular/core';
import {
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';
@NgModule({
  exports: [
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
})
export class MaterialModule { }
