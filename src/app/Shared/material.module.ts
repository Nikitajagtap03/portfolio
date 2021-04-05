import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatStepperModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatStepperModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule
  ]
})
export class MaterialModule { }
