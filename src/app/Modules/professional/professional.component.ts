import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  navLinks = [
    {
      label: "Summary",
      link: "summary"
    },
    {
      label: "Work Experience",
      link: "work-experience"
    },
    {
      label: "Education",
      link: "education"
    },
    {
      label: "Achievements",
      link: "achievements"
    }
  ];
  activeLink = this.navLinks[0].label
  constructor() { }

  ngOnInit(): void {
  }

}
