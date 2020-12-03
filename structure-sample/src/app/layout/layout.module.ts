import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';



@NgModule({
  declarations: [SidebarComponent, TopnavComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
