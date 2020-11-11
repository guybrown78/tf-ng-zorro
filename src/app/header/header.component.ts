import { Component, OnInit } from '@angular/core';
import { RouteDataService } from '../appServices/route-data.service';
import { Subscription } from 'rxjs';
// import { TfNgClientLogoComponent } from 'tf-ng-core/lib/tf-ng-client-logo/tf-ng-client-logo.component';


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

  // @ViewChild("tfAppHeaderClientLogo") tfAppHeaderClientLogo:ElementRef<TfNgClientLogoComponent>

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

  ngOnInit(){
    // document.addEventListener("click", (event:MouseEvent) => this.handleClickOutside(event));
  }
	onRouteDataChanged(data:any){
		this.routeData = { ...data }
	}
	// onUserAccountsMenuToggle(isOpen:boolean){
  //   console.log(" -- onUserAccountsMenuToggle -- ", isOpen );
	// 	this.isUserAccountsMenuOpen = isOpen;
	// }
	// onUserAccountItemSelected(item:string){
	// 	if(item === 'signout'){
  //     console.log("Sign out")
	// 		this.isSignOutModalVisible = true;
	// 	}
	// 	this.isUserAccountsMenuOpen = false;
	// }

	// handleCancelSignOut(){
	// 	this.isSignOutModalVisible = false;
	// }
	// handleOkSignOut(){
	// 	this.isSignOutModalVisible = false;
	// }

  // handleClickOutside(event:MouseEvent){
  //   if(this.isUserAccountsMenuOpen){
  //     const isInEl:boolean = this.isNodeWithinAppHeaderClientLogo(event.target);
  //     if(!isInEl){
  //       this.isUserAccountsMenuOpen = false;
  //     }
  //   }
  // }
  // isNodeWithinAppHeaderClientLogo(child):boolean{
  //   let node = child.parentNode;
  //   while (node != null) {
  //       if (node.id === "tfAppHeaderClientLogo") {
  //         return true;
  //       }
  //       node = node.parentNode;
  //   }
  //   return false;
  // }

	ngOnDestroy() {
    // document.removeEventListener("click", (event:MouseEvent) => this.handleClickOutside(event));
    this.routeDataSubscription.unsubscribe();
  }

}
