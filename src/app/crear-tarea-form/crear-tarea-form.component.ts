import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea/tarea.interface';
import { TareaService } from '../service/tarea.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-tarea-form',
  templateUrl: './crear-tarea-form.component.html',
  styleUrls: ['./crear-tarea-form.component.css']
})
export class CrearTareaFormComponent implements OnInit {

  constructor(private tareaService: TareaService, private router: Router) { }

  ngOnInit(): void {
  }


  addTarea(tarea: Tarea) {
    this.tareaService.addTarea(tarea).subscribe(tarea => this.router.navigate(['']));
  }
}
