import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Graph } from '../models/graph.model';
import { GraphsService } from '../services/graphs.services';

@Component({
  selector: 'app-single-graph',
  templateUrl: './single-graph.component.html',
  styleUrls: ['./single-graph.component.scss'],
})
export class SingleGraphComponent implements OnInit {
  graph!: Graph;
  buttonText!: string;

  // service d'injection de dépendance injecte le service ET récupérer les informations de la route activée
  constructor(
    private graphService: GraphsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    // récupérer l'id
    const graphId = +this.route.snapshot.params['id']; // accès string litteral, + sting to number
    this.graph = this.graphService.getGraphById(graphId);
  }
  onAddSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.graphService.graphSnappedById(this.graph.id, 'snap');
      this.buttonText = 'Oops, unsnap!';
    } else {
      this.graphService.graphSnappedById(this.graph.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}
