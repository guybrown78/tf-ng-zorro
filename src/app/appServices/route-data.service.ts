import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { QuickLinkItemModel } from '../common/models/QuickLinkItem.model'
import { NzModalService } from 'ng-zorro-antd/modal';
@Injectable({
  providedIn: 'root'
})
export class RouteDataService {



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

	defaultRoutData:any = {
		appTitle:"Transform / NGZorro",
		appCode:'T',
		isLogoClickable:true,
		showAppLogo:true,
		quickLinks:this.quickLinks,
		clientLogoSrc:'https://logodix.com/logo/80482.png'
	}
	// Observable string sources
	private routeDataAnnouncedSource = new Subject<any>();
	private routeDataConfirmedSource = new Subject<any>();

	// Observable string streams
	routeDataAnnounced$ = this.routeDataAnnouncedSource.asObservable();
	routeDataConfirmed$ = this.routeDataConfirmedSource.asObservable();

  constructor(
    private modal:NzModalService
  ){}

	// Service message commands
	announceRouteData(data: any) {
		this.routeDataAnnouncedSource.next(data);
	}

	confirmRouteData(data: any) {
		this.routeDataConfirmedSource.next(data);
	}

  onActionHandler(quickLinkItem?:QuickLinkItemModel){
    this.modal.create({
      nzTitle: 'Quick Link Action',
      nzContent: '<p>Action from quick link in header...</p>',
      nzCancelText:null,
      nzOnOk: () => console.log('OK')
    })
  }
}
