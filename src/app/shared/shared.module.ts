import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MdIconModule } from '@angular/material/icon';

import { BackdropComponent } from './backdrop/backdrop.component';
import { FlexComponent } from './flex/flex.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    MdIconModule.forRoot()
  ],
  declarations: [
    BackdropComponent,
    FlexComponent,
    SidenavComponent,
    PanelComponent
  ],
  exports: [
    CommonModule,
    FormsModule,

    MaterialModule,
    MdIconModule,
    BackdropComponent,
    FlexComponent,
    SidenavComponent,
    PanelComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
