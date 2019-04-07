import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'blog-angular';
  post1 = new Post("Mon premier Post", 
  "du contenu de grande qualité pour un TP de qualité");
  post2 = new Post("Mon deuxième Post", 
  " aujourd'hui je vais apprendre Angular, c'est rigolo");
  post3 = new Post("Un autre Post", 
  " c'est rigolo mais c'est salop! Et il faut d'abord connaitre TypeScript!");

  posts = [ this.post1, this.post2, this.post3];
}

class Post {
  title : string;
  content : string;
  loveIts : number;
  created_at : Date;

  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.loveIts=0;
    this.created_at= new Date();
  }
}
