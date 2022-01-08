import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FormsComponent } from './forms/forms.component';


//decorator / meta data
@NgModule({
  declarations: [ // componenets / directives / pipes
    AppComponent,
    IntroComponent,
    VarComponent,
    HomeComponent,
    DirectivesComponent,
    PipeComponent,
    HexaPipe,
    ParamsPipe,
    LifeCycleComponent,
    FormsComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
