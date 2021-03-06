import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class PostsService {
    posts: Post[] = [
        
    ];
 
    postsSubject = new Subject<Post[]>();

    constructor() {}

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    addPost(post: Post) {
        this.posts.push(post);
        this.emitPosts();
    }

    removePost(post: Post) {
        const postIndexToRemove = this.posts.findIndex(
            (postElt) => {
                if(postElt === post) {
                    return true;
                }
            }
        );       
        this.posts.splice(postIndexToRemove,1);
        this.emitPosts();
    }
}