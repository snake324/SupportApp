import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportRequestFormComponent } from './characters/views/support-request-form/support-request-form.component';

const routes: Routes = [
  { path: 'support-request-form', component: SupportRequestFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
