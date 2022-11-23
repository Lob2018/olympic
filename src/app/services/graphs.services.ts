import { Injectable } from '@angular/core';
import { Graph } from '../models/graph.model';

@Injectable({
  providedIn: 'root',
})
export class GraphsService {
  graphs: Graph[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 6,
      location: 'Jardin',
    },
    {
      id: 2,
      title: 'ArchibaldInArray',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 150,
      location: 'Jardin',
    },
    {
      id: 3,
      title: 'TotoInArray',
      description: "C'est Toto !",
      imageUrl: 'https://www.bedetheque.com/media/Couvertures/Couv_408345.jpg',
      createdDate: new Date(),
      snaps: 200,
    },
  ];

  getAllGraphs(): Graph[] {
    return this.graphs;
  }

  getGraphById(graphId: number): Graph {
    const graph = this.graphs.find((graph) => graph.id === graphId);
    // possible undefined id ne correspond pas
    if (!graph) {
      throw new Error('Graph non trouvé');
    } else {
      return graph;
    }
  }

  graphSnappedById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getGraphById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
