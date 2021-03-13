import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationItemModel } from '../../common/models/NavigationItem.model'

@Injectable({
  providedIn: 'root'
})
export class TfAppSideDrawerService {
  private _navigationJSON = 'assets/navigation.json';
  private _navigationData:NavigationItemModel[];

  get navigationData():NavigationItemModel[]{
    return [ ...this._navigationData ];
  }
  set navigationData(values:NavigationItemModel[]){
    this._navigationData = [ ...values ]
  }


  constructor(private http: HttpClient) {

  }


  public getJSON(): Observable<any> {
    return this.http.get(this._navigationJSON);
  }
}
