import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './proffesional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { SummaryComponent } from './summary/summary.component';
import { MaterialModule } from 'src/app/Shared/material.module';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AchievementsComponent } from './achievements/achievements.component';


@NgModule({
  declarations: [ProfessionalComponent, SummaryComponent, WorkExperienceComponent, EducationComponent, AchievementsComponent],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ProfessionalModule { }
