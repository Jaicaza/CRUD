import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCommonModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule,
    MatTableModule,
    MatRadioModule,
    MatPaginatorModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCommonModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatBadgeModule,
    MatSelectModule

  ],
  imports: [
    CommonModule
  ]
})
export class AngularMaterialModule { }
