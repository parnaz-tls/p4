import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'products', component: ProductsComponent},
    {path:'services', component: ServicesComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'**', redirectTo:'/home'},

];
