import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CrearTareaFormComponent } from './crear-tarea-form/crear-tarea-form.component';
import { EditarTareaFormComponent } from './editar-tarea-form/editar-tarea-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearTareaFormComponent,
    EditarTareaFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
