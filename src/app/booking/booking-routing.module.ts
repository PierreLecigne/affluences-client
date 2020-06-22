import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesListComponent } from './pages/resources-list/resources-list.component';
import { ResourceComponent } from './pages/resource/resource.component';


const routes: Routes = [
  {
    path: '',
    component: ResourcesListComponent,
  },
  {
    path: ':resourceId',
    component: ResourceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
