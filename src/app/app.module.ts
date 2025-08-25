import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule } from '@angular/forms';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FiltreUserPipe } from './pipe/filtre-user.pipe';
import { RoleComponent } from './role/role.component';
import { FiltreRolePipe } from './pipe2/filter-role.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    UtilisateurComponent,
    FiltreUserPipe,
    RoleComponent,
    FiltreRolePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


