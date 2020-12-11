import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [ CommonModule ],
  exports: [],
  providers: [],
})
export class SharedModule {}
