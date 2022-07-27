import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MemberCreateComponent } from './components/member-create/member-create.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberInfoComponent } from './components/member-info/member-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MemberCreateComponent,
    MemberListComponent,
    MemberInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
