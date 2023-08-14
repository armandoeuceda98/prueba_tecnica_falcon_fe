import { Component, OnInit } from '@angular/core';
import { TareaService } from '../service/tarea.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarea } from '../models/tarea/tarea.interface';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-tarea-form',
  templateUrl: './editar-tarea-form.component.html',
  styleUrls: ['./editar-tarea-form.component.css']
})
export class EditarTareaFormComponent implements OnInit {

  data: any = {};

  tarea = new FormGroup({
    idTarea: new FormControl(''),
    nombreTarea: new FormControl(''),
    descripcion: new FormControl(''),
    estado: new FormControl(''),
    fechaEntrega: new FormControl(''),
  });
  constructor(private tareaService: TareaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.tareaService.getTarea(id).subscribe(data => {
      this.data = data;
      console.log(data.tareas.nombreTarea);
      this.tarea.controls.idTarea.setValue(data.tareas.idTarea);
      this.tarea.controls.nombreTarea.setValue(data.tareas.nombreTarea);
      this.tarea.controls.descripcion.setValue(data.tareas.descripcion);
      this.tarea.controls.estado.setValue(data.tareas.estado);
      this.tarea.controls.fechaEntrega.setValue(data.tareas.fechaEntrega);
    });
  }


  getTarea() {

  }

  updateTarea() {
    
    this.tareaService.updateTarea(this.tarea.value).subscribe(tarea => this.router.navigate(['']));
  }
}
