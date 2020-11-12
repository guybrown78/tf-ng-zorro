
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuickLinkItemModel } from '../../common/models/QuickLinkItem.model';

@Component({
  selector: 'tf-app-header',
  templateUrl: './tf-app-header.component.html',
  styleUrls: ['./tf-app-header.component.css']
})
export class TfAppHeaderComponent implements OnInit {

	isUserAccountsMenuOpen:boolean = false;
  isSignOutModalVisible = false;

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

  private _clientLogoSource:string;
  @Input() set clientLogoSource(value:string){
    this._clientLogoSource = value;
  }
  get clientLogoSource():string{
    return this._clientLogoSource;
  }

  private _showUserAccount:boolean = false
  @Input() set showUserAccount(value:boolean){
    this._showUserAccount = value;
  }
  get showUserAccount():boolean{
    return this._showUserAccount;
  }

  private _quickLinks:QuickLinkItemModel[]
  @Input() set quickLinks(values:QuickLinkItemModel[]){
    values = !values.length
      ? this._quickLinks = null
      : this._quickLinks = [ ...values ];
  }
  get quickLinks():QuickLinkItemModel[]{
    return this._quickLinks;
  }

  constructor(
    private router:Router
	) {}

  ngOnInit(){
    document.addEventListener("click", (event:MouseEvent) => this.handleClickOutside(event));
  }

	onUserAccountsMenuToggle(isOpen:boolean){
		this.isUserAccountsMenuOpen = isOpen;
	}
	onUserAccountItemSelected(item:string){
		if(item === 'signout'){
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

  onQuickLinkItemClicked(item:QuickLinkItemModel){
    if(item.actionHandler){
      item.actionHandler(item);
      return;
    }
    if(item.routePaths){
      this.router.navigate(item.routePaths)
      return;
    }
    if(item.url){
      window.open(item.url);
      return;
    }
  }

	ngOnDestroy() {
    document.removeEventListener("click", (event:MouseEvent) => this.handleClickOutside(event));
  }
}
