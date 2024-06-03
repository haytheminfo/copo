import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedecinComponent } from './medecin/medecin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListusersComponent } from './listusers/listusers.component';
import { PostusersComponent } from './postusers/postusers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { UpdateproviderComponent } from './updateprovider/updateprovider.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AproposComponent } from './apropos/apropos.component';
import { MessageComponent } from './message/message.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    MedecinComponent,
    ListusersComponent,
    PostusersComponent,
    NavbarComponent,
    AddProvidersComponent,
    ListProvidersComponent,
    UpdateproviderComponent,
    ListArticleComponent,
    AjoutArticleComponent,
    LoginComponent,
    LogoutComponent,
    AproposComponent,
    MessageComponent,
    ContactComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
