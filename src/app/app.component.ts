import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from './employee';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  emp = new Employee('Mahesh', 20);	
  msg: string = 'Hello World!';
  ninja = {
	  name: 'aaa',
	  belt: 'vvv' 
  };
  hello = "ddddd";
  alertval(val,selectedValue){
	  alert(val+selectedValue);
  }
  countries = [
       {id: 1, name: "United States"},
       {id: 2, name: "Australia"}
       {id: 3, name: "Canada"}
       {id: 4, name: "Brazil"}
       {id: 5, name: "England"}
     ];
	 selectedValue = null;
  onFormSubmit(empForm: NgForm) {
	  let name = empForm.controls['name'].value;
	  let age = empForm.controls['age'].value;
	  this.emp = new Employee(name, age);
  }  
}