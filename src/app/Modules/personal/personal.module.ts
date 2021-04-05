import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { MaterialModule } from "src/app/Shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    PersonalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
