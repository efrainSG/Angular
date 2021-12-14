import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiembroComponent } from './componentes/miembros/miembro/miembro.component';
import { MiembrosListComponent } from './componentes/miembros/miembros-list/miembros-list.component';
import { ArmaComponent } from './componentes/armas/arma/arma.component';
import { ArmasListComponent } from './componentes/armas/armas-list/armas-list.component';
import { ArmaduraComponent } from './componentes/armadura/armadura/armadura.component';
import { ArmadurasListComponent } from './componentes/armadura/armaduras-list/armaduras-list.component';
import { EnemigoComponent } from './componentes/enemigos/enemigo/enemigo.component';
import { EnemigosListComponent } from './componentes/enemigos/enemigos-list/enemigos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MiembroComponent,
    MiembrosListComponent,
    ArmaComponent,
    ArmasListComponent,
    ArmaduraComponent,
    ArmadurasListComponent,
    EnemigoComponent,
    EnemigosListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
