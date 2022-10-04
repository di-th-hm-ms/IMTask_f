import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
