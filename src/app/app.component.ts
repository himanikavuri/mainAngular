import { Component } from '@angular/core';
import { StateService } from '@uirouter/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public $state: StateService) { }

  handleClick(){
    this.$state.go('about');   
  }
  ngOnInit() {

  }
  
}
