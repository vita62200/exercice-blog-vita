export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: number;
  constructor( ti: string, co: string ) {
      this.title = ti;
      this.content = co;
      this.loveIts = 0;
      this.createdAt = Date.now();
  }
}
