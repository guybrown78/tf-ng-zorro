import { Component, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { RouteDataService } from '../../appServices/route-data.service';
import { Subscription } from 'rxjs';
import { TfNgClientLogoComponent } from 'tf-ng-core/lib/tf-ng-client-logo/tf-ng-client-logo.component';



@Component({
  selector: 'tf-app-header',
  templateUrl: './tf-app-header.component.html',
  styleUrls: ['./tf-app-header.component.css']
})
export class TfAppHeaderComponent implements OnInit {

  routeData:any;
	routeDataChage:any;
	routeDataSubscription: Subscription;
	isUserAccountsMenuOpen:boolean = false;
  isSignOutModalVisible = false;

  @ViewChild("tfAppHeaderClientLogo") tfAppHeaderClientLogo:ElementRef<TfNgClientLogoComponent>

  private _isLogoClickable:boolean = false
  @Input() set isLogoClickable(value:boolean){
    this._isLogoClickable = value;
  }
  get isLogoClickable():boolean{
    return this._isLogoClickable;
  }

  private _appCode:string;
  @Input() set appCode(value:string){
    this._appCode = value;
  }
  get appCode():string{
    return this._appCode;
  }


  private _appTitle:string;
  @Input() set appTitle(value:string){
    this._appTitle = value;
  }
  get appTitle():string{
    return this._appTitle;
  }

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
    document.addEventListener("click", (event:MouseEvent) => this.handleClickOutside(event));
  }
	onRouteDataChanged(data:any){
		this.routeData = { ...data }
	}
	onUserAccountsMenuToggle(isOpen:boolean){
    console.log(" -- onUserAccountsMenuToggle -- ", isOpen );
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

  handleClickOutside(event:MouseEvent){
    if(this.isUserAccountsMenuOpen){
      const isInEl:boolean = this.isNodeWithinAppHeaderClientLogo(event.target);
      if(!isInEl){
        this.isUserAccountsMenuOpen = false;
      }
    }
  }
  isNodeWithinAppHeaderClientLogo(child):boolean{
    let node = child.parentNode;
    while (node != null) {
        if (node.id === "tfAppHeaderClientLogo") {
          return true;
        }
        node = node.parentNode;
    }
    return false;
  }

	ngOnDestroy() {
    document.removeEventListener("click", (event:MouseEvent) => this.handleClickOutside(event));
    this.routeDataSubscription.unsubscribe();
  }
}
