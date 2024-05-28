import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workExperience',
  templateUrl: './workExperience.component.html',
  styleUrls: ['./workExperience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExp = [
    {
      id: 1,
      time: "MARCH 2016 - PRESENET", 
      name: "CREATIVEN", 
      title: "Front End Developer", 
      subTitle: "",
      description: "Front End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End Developer"
    },
    {
      id: 2,
      time: "APRIL 2014 - MARCH 2016", 
      name: "WEBNOTE", 
      title: "Web Developer", 
      subTitle: "",
      description: "Front End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End Developer"
    },
    {
      id: 3,
      time: "APRIL 2013 - FEBRUARY 2014", 
      name: "WEBM", 
      title: "Intern", 
      subTitle: "",
      description: "Front End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End Developer"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
