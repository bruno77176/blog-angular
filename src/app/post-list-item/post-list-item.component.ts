import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

    @Input() post: Post;
  

  increaseLove() {
    this.post['loveIts'] ++;
  }

  decreaseLove() {
    this.post['loveIts'] --;
  }

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  supprimerPost(post: Post) {
    this.postsService.removePost(post);
  }

}
