import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../post.service';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
posts:any[]=[];
  constructor(private http: Http,private service:PostService) { }

  ngOnInit() {
   this.service.getPost()
   .subscribe(res => {
        this.posts = res.json();
    })
  }
  createPost(input:HTMLInputElement){
    let post={ title: input.value, id:''};
   this.service.createPost(post)
    .subscribe(res=>{
      console.log(res);
      console.log(JSON.parse(res._body));
      post.id=JSON.parse(res._body).id;
      this.posts.push(post);
        });
  }

}
