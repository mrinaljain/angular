// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>`,
// })
// export class AppComponent  { name = 'Angular 2'; }

import {Component} from '@angular/core';  //  Decorater

@Component ({
  selector : 'my-app',                   // Template
  //template : `<h1>Hello {{name}}</h1>`
  templateUrl : 'app/app.component.html',
  //styles: ['table{color: #369;font-family: Arial,Helvetica,sans-serif;font-size: large;border-collapse: collapse;}' , 'h1 {color: #369;font-family: Arial, Helvetica, sans-serif;font-size: 250%;}', ' td { border: solid 2px red;}']
})
export class AppComponent{               // Class
  pageHeader : string = "Employee Details";
  pageLogo: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  firstname: string = 'Mrinal';
  lastname: string = 'Jain';
  gender: string = 'Male';
  age: number = 25;
  makeIntro() : string{
    return this.firstname + ' ' + this.lastname + ' is a ' + this.gender + ' with an age of ' + this.age ;
  };
  badHtml : string = '<script>alert("Hacked");</script>';
  classToReplace : string = 'btn btn-primary d-block';
  toggleClass: boolean = false;
  fontSize : number = 22;
  addClass (){
    let classes = {
        'btn-info' : true,
        'd-block' : true
    }
    return classes;
  }
  addStyle() {
    let styles = {
      'marginTop.px' : 20 ,
      'backgroundColor' : 'black'
    }
    return styles;
  }

}