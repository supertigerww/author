import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author:any;
  id:string;
  error:any;
  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService:HttpService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id=params['id']);
    console.log(this.id);
    this.showauthor(this.id);
    
}
  showauthor(id){
    let observable = this._httpService.getauthor(this.id);
    observable.subscribe(data =>{
      console.log("got this name",data)
      this.author=data['data']
    })
  }
  
  editauthor(id,author){
    let observable = this._httpService.editauthor(id,this.author);
    observable.subscribe(data => {console.log("Edit Success",data);
    if (data['message'] == "Error"){
      this.error=data['errors']
      this._router.navigate(['/edit/'+id])
    }
    else{
      this._router.navigate(['/'])

    }
  })
}

}

