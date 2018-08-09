import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {IframeComponent} from './iframe/iframe.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {
        path: 'portal/home', component: IframeComponent,
        data: {
            title: 'Home',
            url: 'http://test-bluenet.scg.com/dashboard/#/home'
        }
    },
    {
        path: 'portal/dashboard', component: IframeComponent,
        data: {
            title: 'CPAC GPS Dashboard',
            url: 'https://test-bluenet.scg.com/gps-dashboard/#/dashboard'
        }
    },
    {
        path: 'portal/empupload', component: IframeComponent,
        data: {
            title: 'อัพโหลดไฟล์ของคุณ',
            url: 'https://test-bluenet.scg.com/dashboard/#/empupload/edit',
        }
    },
    {
        path: 'portal/delegation', component: IframeComponent,
        data: {
            title: 'กำหนดตัวแทน',
            url: 'https://test-bluenet.scg.com/dashboard/#/delegation',
        }
    },
    {
        path: 'bamossza', component: IframeComponent,
        data: {
            title: 'Bamossza',
            url: 'https://www.bamossza.com',
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
