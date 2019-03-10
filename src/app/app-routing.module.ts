import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { RefreshComponent } from './refresh/refresh.component';



const routes: Routes = [
 {
   path:"test",
   component:TestComponent
 },
 {
  path:"refresh",
  component:RefreshComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
