import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class PostsService {
    posts: Post[] = [
        new Post("Mon premier Post!!!!!","du contenu de grande qualité pour un TP de qualité"),
        new Post("Mon deuxième Post"," aujourd'hui je vais apprendre Angular, c'est rigolo"),
        new Post("Un autre Post", " c'est rigolo mais c'est salop! Et il faut d'abord connaitre TypeScript!")
    ];
 
    postsSubject = new Subject<Post[]>();

    constructor() {}

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    addPost(post: Post) {
        this.posts.push(post);
    }
}