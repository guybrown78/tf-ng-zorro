import { Component } from '@angular/core';
import { RouteDataService } from '../appServices/route-data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

	routeData:any;
	routeDataChage:any;
	routeDataSubscription: Subscription;
	isUserAccountsMenuOpen:boolean = false;
	isSignOutModalVisible = false;
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

	onRouteDataChanged(data:any){
		this.routeData = { ...data }
	}
	onUserAccountsMenuToggle(isOpen:boolean){
		this.isUserAccountsMenuOpen = isOpen;
	}
	onUserAccountItemSelected(item:string){
		if(item === 'signout'){
			console.log("Sign out")
			this.isSignOutModalVisible = true;
		}
		this.isUserAccountsMenuOpen = false;
	}

	handleCancelSignOut(){
		this.isSignOutModalVisible = false;
	}
	handleOkSignOut(){
		this.isSignOutModalVisible = false;
	}

	ngOnDestroy() {
    this.routeDataSubscription.unsubscribe();
  }

}
