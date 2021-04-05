import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { EducationComponent } from './education/education.component';

import { ProfessionalComponent } from './professional.component';
import { SummaryComponent } from './summary/summary.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [{
  path: '', component: ProfessionalComponent,
  children: [
    { path: '', component: SummaryComponent },
    { path: 'summary', component: SummaryComponent },
    { path: 'work-experience', component: WorkExperienceComponent },
    { path: 'education', component: EducationComponent },
    { path: 'achievements', component: AchievementsComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalRoutingModule { }
