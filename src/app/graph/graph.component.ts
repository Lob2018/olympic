import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Graph } from '../models/graph.model';
import { GraphsService } from '../services/graphs.services';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @Input() graph!: Graph; // injecté depuis le parent (liste)
  buttonText!: string;

  // service d'injection de dépendance injecte le service, ET le router
  constructor(private graphService: GraphsService, private router: Router) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
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
  onViewGraph() {
    this.router.navigateByUrl(`graphs/${this.graph.id}`); // backticks pour passer l'id
  }
}
