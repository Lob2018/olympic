import { Component, OnInit } from '@angular/core';
import { Graph } from '../models/graph.model';
import { GraphsService } from '../services/graphs.services';

@Component({
  selector: 'app-graph-list',
  templateUrl: './graph-list.component.html',
  styleUrls: ['./graph-list.component.scss'],
})
export class GraphListComponent implements OnInit {
  graphs!: Graph[]; // *ngFor

  constructor(private graphService:GraphsService) {}

  ngOnInit(): void {
    this.graphs = this.graphService.getAllGraphs();
  }
}
