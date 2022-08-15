import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsBasicsComponent } from './rxjs-basics/rxjs-basics.component';
import { TemplateBasicsComponent } from './template-basics/template-basics.component';

const routes: Routes = [
  { path: 'rxjs-basics', component: RxjsBasicsComponent },
  { path: 'template-basics', component: TemplateBasicsComponent },
  { path: '', redirectTo: 'rxjs-basics', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
