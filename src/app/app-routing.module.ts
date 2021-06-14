import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HerosComponent} from '../app/Componets/heros/heros.component';
import { DashboardComponent } from '../app/Componets/dashboard/dashboard.component';
import {HeroDetailComponent} from '../app/Componets/hero-detail/hero-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HerosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
