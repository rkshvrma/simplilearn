import {Component} from '@angular/core'

@Component({
     
    templateUrl: './mycomp.component.html'
})
export class MycompComponent   {
     
  name : string;
  email : string;
  password : string;
  constructor() { 
  }
  
  
  ngOnInit() {
  }
 
  
  login(){
      
      console.log('wusup')
      
      
  }
}
