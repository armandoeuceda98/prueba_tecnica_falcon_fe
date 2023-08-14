import { Component, OnInit } from '@angular/core';
import { TareaService } from '../service/tarea.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = {};

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.tareaService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  deleteTarea(id: string) {
    this.tareaService.deleteTarea(id).subscribe(tarea => this.llenarData());
  }
}
