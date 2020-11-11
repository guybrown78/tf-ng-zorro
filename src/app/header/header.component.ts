import { Component, OnInit } from '@angular/core';
import { RouteDataService } from '../appServices/route-data.service';
import { Subscription } from 'rxjs';
import { QuickLinkItemModel } from '../common/models/QuickLinkItem.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	routeData:any;
	routeDataChage:any;
	routeDataSubscription: Subscription;
	isUserAccountsMenuOpen:boolean = false;
  isSignOutModalVisible = false;
  // showUserAccount only set this to true if the user is logedin
  showUserAccount = true;

  quickLinks:QuickLinkItemModel[] = [
    {
      value:"ql1",
      title:"Use Action Handler",
      actionHandler: (item:QuickLinkItemModel) => this.onActionHandler(item)
    },
    {
      value:"ql2",
      title:"Specific App Route",
      routePaths:["th", "user", "d62b15c7-21ef-40e3-a4a4-08d7d9fd5239"]
    },
    {
      value:"ql3",
      title:"External URL",
      url:"https://www.3t-transform.com/"
    }
  ]

  constructor(
		private routeDataService: RouteDataService,
	) {
		this.routeDataSubscription = routeDataService.routeDataAnnounced$.subscribe(
			(data) => {
				this.onRouteDataChanged(data);
			}
		)
		this.routeData = routeDataService.defaultRoutData;
	}

  ngOnInit(){}

	onRouteDataChanged(data:any){
		this.routeData = { ...data }
	}

  onActionHandler(quickLinkItem?:QuickLinkItemModel){
    console.log(" ---- onActionHandler !!! !!! ", quickLinkItem.value)
  }

	ngOnDestroy() {
    this.routeDataSubscription.unsubscribe();
  }

}
