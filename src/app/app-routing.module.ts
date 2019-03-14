import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TraineeHomeComponent } from './components/trainee-home/trainee-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'traineeHome', component: TraineeHomeComponent },
  { path: 'signUp', component: SignUpComponent }, 
	{ path: '', redirectTo: '/home ', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
