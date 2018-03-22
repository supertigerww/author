import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  addauthor(newauthor){
    return this._http.post('/author',newauthor);
  }
  editauthor(id,updatedauthor){
    return this._http.put('/author/'+id,updatedauthor);
  }
  deleteauthor(id){
    return this._http.delete('/author/'+id);
  }
  getauthors(){
    return this._http.get('/author')
  }
  getauthor(id){
    return this._http.get('/author/'+id)
  }
}
