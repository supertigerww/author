import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newauthor:any;
  error:any;
  existerror:any;

  constructor(
    private _httpService:HttpService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit() {
    this.newauthor={name:""}
  }

  addauthor(){
    let observable =this._httpService.addauthor(this.newauthor);
    observable.subscribe(data=> {
      console.log("Add Success!",data);
      if (data['message'] == "Error"){
        this.error=data['errors']
        this._router.navigate(['/new'])
        this.existerror=""
      }
      else if(data['message'] == "ExistError"){
        this.existerror = data
        this._router.navigate(['/new'])
        this.error=""
      }
      else{
        this._router.navigate(['/'])

      }
      
    })
  }

}
