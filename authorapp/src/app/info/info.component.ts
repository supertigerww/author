import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute,Params } from '@angular/router'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  authors=[];
  newauthor :any;
  author=[];

  constructor(
    private _httpService:HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAuthorFromService();
  }
  getAuthorFromService(){
    let observable = this._httpService.getauthors();
    observable.subscribe(data =>{console.log("GOT ALL AUTHORS!",data)
    this.authors = data['data']
  })
}

  deleteauthor(id){
    let observable = this._httpService.deleteauthor(id);
    observable.subscribe(data =>{
      console.log('DELETE SUCCESS',data)
      this.getAuthorFromService();
    })
  }
  showeditauthor(id){
    this._router.navigate(['/edit/'+id]);
  }

}
