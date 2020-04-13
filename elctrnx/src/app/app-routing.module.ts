import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {LogInComponent} from './log-in/log-in.component';
import {RegisterComponent} from "./register/register.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {MyAccountComponent} from "./my-account/my-account.component";

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'my-account',component:MyAccountComponent},
  {path: '', redirectTo: '/log-in', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
