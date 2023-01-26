import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-user-recommendations',
  templateUrl: './user-recommendations.component.html',
  styleUrls: ['./user-recommendations.component.css']
})
export class UserRecommendationsComponent {

articles : Article[] = [];

  constructor(){
    this.articles = [
      new Article('Titulo 1','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem commodi tempore at aliquam qui ad voluptate ut quae odit, vero deserunt, quod repellat iure nostrum expedita voluptatum consectetur asperiores?', 'Descripcion del articulo 1', 'https://cdn.pixabay.com/photo/2023/01/08/21/05/squirrel-7706132_960_720.jpg' ),
      new Article('Titulo 2','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem commodi tempore at aliquam qui ad voluptate ut quae odit, vero deserunt, quod repellat iure nostrum expedita voluptatum consectetur asperiores?', 'Descripcion del articulo 2', 'https://cdn.pixabay.com/photo/2023/01/08/21/05/squirrel-7706132_960_720.jpg' ),
      new Article('Titulo 3','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem commodi tempore at aliquam qui ad voluptate ut quae odit, vero deserunt, quod repellat iure nostrum expedita voluptatum consectetur asperiores?', 'Descripcion del articulo 3', 'https://cdn.pixabay.com/photo/2023/01/08/21/05/squirrel-7706132_960_720.jpg' ),
      new Article('Titulo 4','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem commodi tempore at aliquam qui ad voluptate ut quae odit, vero deserunt, quod repellat iure nostrum expedita voluptatum consectetur asperiores?', 'Descripcion del articulo 4', 'https://cdn.pixabay.com/photo/2023/01/08/21/05/squirrel-7706132_960_720.jpg' ),
      new Article('Titulo 5','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem commodi tempore at aliquam qui ad voluptate ut quae odit, vero deserunt, quod repellat iure nostrum expedita voluptatum consectetur asperiores?', 'Descripcion del articulo 5', 'https://cdn.pixabay.com/photo/2023/01/08/21/05/squirrel-7706132_960_720.jpg' ),
      new Article('Titulo 6','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem commodi tempore at aliquam qui ad voluptate ut quae odit, vero deserunt, quod repellat iure nostrum expedita voluptatum consectetur asperiores?', 'Descripcion del articulo 6', 'https://cdn.pixabay.com/photo/2023/01/08/21/05/squirrel-7706132_960_720.jpg' ),
      new Article('Titulo 7','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem commodi tempore at aliquam qui ad voluptate ut quae odit, vero deserunt, quod repellat iure nostrum expedita voluptatum consectetur asperiores?', 'Descripcion del articulo 7', 'https://cdn.pixabay.com/photo/2023/01/08/21/05/squirrel-7706132_960_720.jpg' ),
      new Article('Titulo 8','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem commodi tempore at aliquam qui ad voluptate ut quae odit, vero deserunt, quod repellat iure nostrum expedita voluptatum consectetur asperiores?', 'Descripcion del articulo 8', 'https://cdn.pixabay.com/photo/2023/01/08/21/05/squirrel-7706132_960_720.jpg' ),
      new Article('Titulo 9','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem commodi tempore at aliquam qui ad voluptate ut quae odit, vero deserunt, quod repellat iure nostrum expedita voluptatum consectetur asperiores?', 'Descripcion del articulo 9', 'https://cdn.pixabay.com/photo/2023/01/08/21/05/squirrel-7706132_960_720.jpg' ),
      new Article('Titulo 10','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem commodi tempore at aliquam qui ad voluptate ut quae odit, vero deserunt, quod repellat iure nostrum expedita voluptatum consectetur asperiores?', 'Descripcion del articulo 10', 'https://cdn.pixabay.com/photo/2023/01/08/21/05/squirrel-7706132_960_720.jpg' )
    ]
  }

}

