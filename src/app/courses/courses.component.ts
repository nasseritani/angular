import { Component, OnInit } from '@angular/core';
import { Courses } from './../Courses';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

obs = Observable.interval(1000)
.take(3)
.map(d => Date.now())
.subscribe(a => {console.log(a)});

  // tslint:disable-next-line:max-line-length
  courses:any[]=[new Courses(1,"Java"),new Courses(2,"C")];
 //  courses= new Courses(1,"Java");
  // tslint:disable-next-line:max-line-length
  // courses = [{ 'Id': 1, 'courseName': 'java' }, { 'Id': 2, 'courseName': 'python' }, { 'Id': 3, 'courseName': 'c' }, { 'Id': 4, 'courseName': 'C++' }];
  defaultView = 'courses';
  constructor() { }

  ngOnInit() {
  }
  trackByCourse(index, course) {
return course ? course.Id : undefined;
  }
  onAdd(courseObj:Courses) {
    this.courses.push(new Courses(this.courses.length+ 1, courseObj.value));
  }
  onRemove(courseObject) {
const index = this.courses.indexOf(courseObject);
this.courses.splice(index, 1);
  }
  setView(view) {
    this.defaultView = view;
  }



}
