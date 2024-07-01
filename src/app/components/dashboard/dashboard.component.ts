/* import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  



  
}
 */



import { Component, OnInit } from '@angular/core';

// Declarar google como variable global
declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Llamar a la función para cargar Google Charts cuando el componente esté listo
    this.loadGoogleCharts();
  }

  loadGoogleCharts() {
    google.charts.load('current', {
      packages: ['sankey', 'corechart', 'bar', 'calendar']
    });
    google.charts.setOnLoadCallback(this.drawCharts.bind(this)); // Usar bind para mantener el contexto de this
  }

  drawCharts() {
    this.drawChartP1();
    this.drawChartP2();
    // Otros gráficos...
  }

  drawChartP1() {
    // Cargamos los datos
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows([
      ['A', 'X', 5],
      ['A', 'Y', 7],
      ['A', 'Z', 6],
      ['B', 'X', 2],
      ['B', 'Y', 9],
      ['B', 'Z', 4]
    ]);

    // Configuramos las opciones del gráfico
    var options = {};

    // Creamos la visualización en el div con id 'p1Chart'
    var chart = new google.visualization.Sankey(document.getElementById('p1Chart'));

    // Pintamos la visualización
    chart.draw(data, options);
  }

  drawChartP2() {
    // Implementación de drawChartP2
  }
}



