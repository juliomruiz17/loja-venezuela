import { MenuItem } from './../loja-detail/menu-item/menu-item.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators'


import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/toPromise';

import {Loja} from "./loja/loja.model"

import {MEAT_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'




@Injectable()

 
export class LojasService {
 

  constructor(private http: HttpClient){}

  lojas(search?: string): Observable<Loja[]> {
    let params:HttpParams = undefined
    if(search){
      params = new HttpParams().append('q', search)
    }
    return this.http.get<Loja[]>(`${MEAT_API}/lojas`, {params: params})
    
}


  lojasById(id: string): Observable<Loja>{
    return this.http.get<Loja>(`${MEAT_API}/lojas/${id}`)
  }

  reviewsOfLojas(id: string): Observable<any>{
    return this.http.get<any>(`${MEAT_API}/lojas/${id}/reviews`)
   
}

  menuOfLojas(id: string): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(`${MEAT_API}/lojas/${id}/menu`)
   
}
    }