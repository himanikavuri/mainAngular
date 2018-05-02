import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import {FirstComponent} from './first/first.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [UIRouterModule.forRoot({
    states: [
        {name: "first", url: "/first", component: FirstComponent},
        {name:"login",url:"/login",component:LoginComponent},
        {name:"about",url:"/about",component:AboutComponent}
      ], useHash: false
  })],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
