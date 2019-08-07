import { Component } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Posts';

  Posts = [
    new Post('Mon Premier Post !', 'Voici le contenu du 1er post'),
    new Post('Mon Deuxième Post !', 'Voici le contenu du 2ème post'),
    new Post('Mon Troisième Post !', 'Voici le contenu du 3ème post')
  ];

}
