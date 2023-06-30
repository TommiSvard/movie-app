import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movie-search', loadChildren: () => import('./pages/movie-search/movie-search.module').then(m => m.MovieSearchModule) },
  { path: 'actor', loadChildren: () => import('./pages/actor/actor.module').then(m => m.ActorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
