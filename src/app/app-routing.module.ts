import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';

const routes: Routes = [
  { path: '',redirectTo:'list-empleado', pathMatch: 'full'},
  { path: 'list-empleado', component: ListEmpleadosComponent},
  {path: 'create-empleado', component:CreateEmpleadoComponent},
  {path: 'editEmpleado/:id', component:CreateEmpleadoComponent},
  { path: '**',redirectTo:'list-empleado', pathMatch: 'full'},/*culquier cosa envia a list-empleado, debe ir de ultimo */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
