import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphListComponent } from './graph-list/graph-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleGraphComponent } from './single-graph/single-graph.component';

const routes: Routes = [
    {path:'graphs/:id', component:SingleGraphComponent},
    { path: 'graphs', component: GraphListComponent },
    { path:'',component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
