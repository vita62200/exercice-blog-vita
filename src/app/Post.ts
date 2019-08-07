export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;
  constructor( ti: string, co: string ) {
      this.title = ti;
      this.content = co;
      this.loveIts = 0;
      this.createdAt = new Date();
  }
}
