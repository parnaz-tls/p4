import { Routes } from '@angular/router';
import { PublicNavigationComponent } from './+pages/public-navigation/public-navigation.component';
import { AdminNavigationComponent } from './+pages/admin/admin-navigation/admin-navigation.component';
import { ProductsManagementComponent } from './+pages/admin/products-management/products-management.component';
import { HomeComponent } from './+pages/home/home.component';
import { AboutComponent } from './+pages/about/about.component';
import { ProductsComponent } from './+pages/products/products.component';
import { DetailsComponent } from './+pages/products/product/details/details.component';
import { ServicesComponent } from './+pages/services/services.component';
import { LoginComponent } from './+pages/login/login.component';


export const routes: Routes = [
    {path: 'public',component:PublicNavigationComponent, children:[
        {path:'home',component:HomeComponent},
        {path:'about',component:AboutComponent},
        {path:'products',component:ProductsComponent},
        {path:'product/:id',component:DetailsComponent},
        {path:'services',component:ServicesComponent},
        {path:'login',component:LoginComponent},
    ]},

    {path: 'admin',component:AdminNavigationComponent, children:[{
        path:'products',component:ProductsManagementComponent}
    ]},


    {path:'',redirectTo:'/public/home',pathMatch:'full'},
    {path:'**', redirectTo:'/public/home'},

];
