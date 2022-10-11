import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { TableComponent } from './table/table.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToolbarComponent,
    DialogComponent,
    TableComponent
  ],
  exports: [
    ToolbarComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
