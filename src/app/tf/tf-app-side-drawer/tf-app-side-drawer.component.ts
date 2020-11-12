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
}
