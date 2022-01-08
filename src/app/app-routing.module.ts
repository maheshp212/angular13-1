import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { PipeComponent } from './pipe/pipe.component';
import { VarComponent } from './var/var.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'var', component:VarComponent},
  {path:'intro', component:IntroComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'pipe', component:PipeComponent},
  {path:'lifeeee', component:LifeCycleComponent},
  {path:'form', component:FormsComponent},
  {path:'apis', component:ApiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
