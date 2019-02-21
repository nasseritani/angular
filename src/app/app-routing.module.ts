import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  { path: 'heroes', component: FavoriteComponent }
];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})

export class AppRoutingModule { }
