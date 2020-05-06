import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home.component';
import { ComponentComponent } from './component/component.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, SidebarComponent, ComponentComponent, GeneralSettingsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
