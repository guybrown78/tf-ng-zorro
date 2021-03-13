import { Component, OnInit } from '@angular/core';
import { NavigationItemModel } from '../../common/models/NavigationItem.model'
import { TfAppSideDrawerService } from './tf-app-side-drawer.service';

@Component({
  selector: 'tf-app-side-drawer',
  templateUrl: './tf-app-side-drawer.component.html',
  styleUrls: ['./tf-app-side-drawer.component.css']
})
export class TfAppSideDrawerComponent implements OnInit {

  isOpened:boolean = false;
  navigationData:NavigationItemModel[]

  appList:any[] = [
    {name:'Home', code:'home'},
    {name:'Competance Management', code:'cm'},
    {name:'Learning Management', code:'lm'},
    {name:'Training Management', code:'tm'},
    // {name:'4Competance Management', code:'cm'},
    // {name:'5Learning Management', code:'lm'},
    // {name:'6Training Management', code:'tm'},
    // {name:'7Competance Management', code:'cm'},
    // {name:'8Learning Management', code:'lm'},
    // {name:'9Training Management', code:'tm'},
  ]

  constructor(
    private sideDrawerService: TfAppSideDrawerService
  ) {}

  ngOnInit(): void {
    this.sideDrawerService.getJSON().subscribe(data => {
      this.navigationData = data;
    });
  }

  onItemSelected(){
		this.isOpened = !this.isOpened;
	}
  onAppSelected(appCode:string){
    console.log(appCode)
    this.isOpened = !this.isOpened;
  }

}
