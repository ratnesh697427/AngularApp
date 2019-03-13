import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
  { path: 'signUp', component: SignUpComponent }, 
	{ path: '', redirectTo: '/home ', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
