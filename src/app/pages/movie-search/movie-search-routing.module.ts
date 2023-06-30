import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from './movie-search.component';

const routes: Routes = [
  { path: '', component: MovieSearchComponent, data: {animationState: 'One'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieSearchRoutingModule { }