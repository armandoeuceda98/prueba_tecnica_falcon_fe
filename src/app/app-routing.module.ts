import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrearTareaFormComponent } from './crear-tarea-form/crear-tarea-form.component';
import { EditarTareaFormComponent } from './editar-tarea-form/editar-tarea-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'crear', component: CrearTareaFormComponent},
  { path: 'editar/:id', component: EditarTareaFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
