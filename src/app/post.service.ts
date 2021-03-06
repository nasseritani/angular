import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
posts:any[];
    url = "https://jsonplaceholder.typicode.com/posts";

constructor(private http:Http) { }

getPost(){
    return this.http.get(this.url);
}
createPost(post){
    return this.http.post(this.url, JSON.stringify(post));
}
}
