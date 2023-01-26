import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { UserRecommendationsComponent } from './user-recommendations/user-recommendations.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { NewProjectComponent } from './new-project/new-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    LoginComponent,
    UserRecommendationsComponent,
    UserPanelComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
