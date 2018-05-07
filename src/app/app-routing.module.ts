import { NgModule, Component } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import {FirstComponent} from './first/first.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import{AlertComponent} from './alert/alert.component';
import { AccordionComponent} from './accordion/accordion.component';
import { RatingComponent } from './rating/rating.component';
import { ButtonComponent } from './button/button.component';
import {CarouselComponent} from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import {PaginationComponent} from './pagination/pagination.component';
import {PopoverComponent} from './popover/popover.component';
import {ProgressbarComponent} from './progressbar/progressbar.component';
import { SortableComponent } from './sortable/sortable.component';
import{TabsComponent}from './tabs/tabs.component';
import { TimepickerComponent } from 'ngx-bootstrap';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
@NgModule({
  imports: [UIRouterModule.forRoot({
    states: [
        {name: "first", url: "/first", component: FirstComponent},
        {name:"login",url:"/login",component:LoginComponent},
        {name:"about",url:"/about",component:AboutComponent},
        {name:"alert",url:"/alert",component:AlertComponent},
        {name:"accordion",url:"/accordion",component:AccordionComponent}, 
        {name:"pagination",url:"/pagination",component:PaginationComponent},
        {name:"rating",url:"/rating",component:RatingComponent},
        {name:"button",url:"/button",component:ButtonComponent},
        {name:"carousel",url:"/carousel",component:CarouselComponent},
        {name:"collapse",url:"/collapse",component:CollapseComponent},
        {name:"dropdown",url:"/dropdown",component:DropdownComponent},
        {name:"modal",url:"/modal",component:ModalComponent},
        {name:"popover",url:"/popover",component:PopoverComponent},
        {name:"progressbar",url:"/progressbar",component:ProgressbarComponent},
        {name:"sortable",url:"/sortable",component:SortableComponent},
        {name:"tabs",url:"/tabs",component:TabsComponent},
        {name:"timepicker",url:"/timepicker",component:TimepickerComponent},
        {name:"tooltip",url:"/tooltip",component:TooltipComponent},
        {name:"typeahead",url:"/typeahead",component:TypeaheadComponent}
      ], useHash: false
  })],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
