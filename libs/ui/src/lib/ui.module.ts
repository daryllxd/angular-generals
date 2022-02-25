import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, HeaderComponent, BoardComponent],
  exports: [BoardComponent, ButtonComponent, HeaderComponent],
})
export class UiModule {}
