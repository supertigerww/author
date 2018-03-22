import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(
    private _httpService:HttpService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit() {
  }

}
