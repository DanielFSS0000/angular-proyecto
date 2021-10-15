import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
  empleados: any[] = [];

  constructor(private _empleadoService: EmpleadoService,
              private toastr: ToastrService) {
 
  }
    

  ngOnInit(): void {
    this.getEmpleados()
  }
  getEmpleados(){
    this._empleadoService.getEmpleados().subscribe(data => {
      this.empleados = [];
      data.forEach((element:any) => {
      this.empleados.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
      });
      console.log(this.empleados);
    });
  }
  eliminarEmpleado(id: string){
    this._empleadoService.eliminarEmpleado(id).then(()=>{
      console.log('empleado eliminado con exito');
      this.toastr.error('El empleado fue elminiado con exito', 'Registro Eliminado!', {
        positionClass:'toast-bottom-right'
      })
    }).catch(error => {
      console.log(error);
    });
        
  }
}
