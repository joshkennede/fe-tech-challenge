import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberCreateComponent } from './components/member-create/member-create.component';
import { MemberInfoComponent } from './components/member-info/member-info.component';
import { MemberListComponent } from './components/member-list/member-list.component';

const routes: Routes = 
[
	{ path: '', component: MemberListComponent },
	{ path: 'member/create', component: MemberCreateComponent },
	{ path: 'member/:id', component: MemberInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
