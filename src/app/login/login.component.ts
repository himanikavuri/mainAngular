import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { validation } from '../../assets/javascript files/validation'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public $state: StateService) { }

 
  handleClick(){
    if (validation()) {
      this.$state.go('about');
    }
    
  }
  ngOnInit() {

  }
  
}
