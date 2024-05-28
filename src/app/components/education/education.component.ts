import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  eduExp = [
    {
      id: 1,
      time: "2013 - 2015", 
      name: "Master's Degree", 
      title: "Master of Information Technology", 
      subTitle: "UNIVERSITY OF COMPUTER SCIENCE",
      description: "Front End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End Developer"
    },
    {
      id: 2,
      time: "2009 - 2013", 
      name: "Bachelor's Degree", 
      title: "Bachelor of Computer Science", 
      subTitle: "UNIVERSITY OF COMPUTER SCIENCE",
      description: "Front End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End Developer"
    },
    {
      id: 3,
      time: "2007 - 2009", 
      name: "High School", 
      title: "Science and Mathematics", 
      subTitle: "SCHOOL OF SECONDARY BOARD",
      description: "Front End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End DeveloperFront End Developer"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
