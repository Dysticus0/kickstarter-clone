import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import { UserRecommendationsComponent } from './user-recommendations/user-recommendations.component';
import { NewProjectComponent } from './new-project/new-project.component';


const routes : Routes = [
  {path : '' , component: MainContentComponent},
  {path : 'login', component: LoginComponent },
  {path : 'recommendations' , component : UserRecommendationsComponent},
  {path : 'new-project', component : NewProjectComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
