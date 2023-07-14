import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportRequestFormComponent } from './characters/views/support-request-form/support-request-form.component';
import { EditSupportRequestComponent } from './characters/views/edit-support-request/edit-support-request.component';
import { ListSupportRequestComponent } from './characters/views/list-support-request/list-support-request.component';

const routes: Routes = [
  { path: '', component: ListSupportRequestComponent },
  { path: 'support-request-form', component: SupportRequestFormComponent },
  { path: 'edit-support-request', component: EditSupportRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
