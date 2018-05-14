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
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  imports: [UIRouterModule.forRoot({
    states: [
        {name: "about.first", url: "/first", component: FirstComponent},
        {name:"login",url:"/",component:LoginComponent},
        {name:"about",url:"/about",component:AboutComponent},
        {name:"about.alert",url:"/alert",component:AlertComponent},
        {name:"about.accordion",url:"/accordion",component:AccordionComponent}, 
        {name:"about.pagination",url:"/pagination",component:PaginationComponent},
        {name:"about.rating",url:"/rating",component:RatingComponent},
        {name:"about.button",url:"/button",component:ButtonComponent},
        {name:"about.carousel",url:"/carousel",component:CarouselComponent},
        {name:"about.collapse",url:"/collapse",component:CollapseComponent},
        {name:"about.dropdown",url:"/dropdown",component:DropdownComponent},
        {name:"about.modal",url:"/modal",component:ModalComponent},
        {name:"about.popover",url:"/popover",component:PopoverComponent},
        {name:"about.progressbar",url:"/progressbar",component:ProgressbarComponent},
        {name:"about.sortable",url:"/sortable",component:SortableComponent},
        {name:"about.tabs",url:"/tabs",component:TabsComponent},
        {name:"about.timepicker",url:"/timepicker",component:TimepickerComponent},
        {name:"about.tooltip",url:"/tooltip",component:TooltipComponent},
        {name:"about.typeahead",url:"/typeahead",component:TypeaheadComponent},
        {name:"login.logout",url:"/logout",component:LogoutComponent}
      ], useHash: false
  })],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
