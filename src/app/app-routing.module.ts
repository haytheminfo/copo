import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinComponent } from './medecin/medecin.component';
import { ListusersComponent } from './listusers/listusers.component';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { UpdateproviderComponent } from './updateprovider/updateprovider.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path:'medecin',component:MedecinComponent,canActivate: [AuthGaurdService]},
  {path:'user',component:ListusersComponent,canActivate: [AuthGaurdService]},
  {path:'listproviders',component:ListProvidersComponent,canActivate: [AuthGaurdService]},
  {path:'addproviders',component:AddProvidersComponent,canActivate: [AuthGaurdService]},
  {path:'UpdateProvider/:id',component:UpdateproviderComponent,canActivate: [AuthGaurdService]},
  {path:'listarticle',component:ListArticleComponent,canActivate: [AuthGaurdService]},
  {path:'ajoutarticle',component:AjoutArticleComponent,canActivate: [AuthGaurdService]},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate: [AuthGaurdService]},
  {path:'contact',component:ContactComponent,canActivate: [AuthGaurdService]},

  {
    path: 'dashbaordAdmin',
    loadChildren: () => import('./dashboard-admin/dashboard-admin.module').then(m => m.DashboardAdminModule)
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
