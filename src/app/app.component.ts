import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NikitaJagtap-Portfolio';
  navLinks = [
    {
      label: 'Professional',
      link: '/professional',
    },
    {
      label: 'Want to know more about me?',
      link: '/personal',
    },
  ];
  activeLink = this.navLinks[0].label;
  // On Init
  ngOnInit() {

  }
}
