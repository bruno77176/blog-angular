export class Post {
    private title : string;
    private content : string;
    private loveIts : number;
    private created_at : Date;
  
    constructor(title, content) {
      this.title = title;
      this.content = content;
      this.loveIts=0;
      this.created_at= new Date();
    }
}