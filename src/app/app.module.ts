import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RxjsBasicsComponent } from './rxjs-basics/rxjs-basics.component';
import { TemplateBasicsComponent } from './template-basics/template-basics.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsBasicsComponent,
    TemplateBasicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
