import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteDataService {
	defaultRoutData:any = {
		appTitle:"Transform / NGZorro",
		appCode:'T',
		isLogoClickable:true,
		showAppLogo:true,
		quickLinks:[
			{value:"addCourse", title:"Add Course"},
			{value:"assignCourse", title:"Assign Course"},
			{value:"assignCategory", title:"Assign Category"}
		],
		clientLogoSrc:'https://logodix.com/logo/80482.png'
	}
	// Observable string sources
	private routeDataAnnouncedSource = new Subject<any>();
	private routeDataConfirmedSource = new Subject<any>();

	// Observable string streams
	routeDataAnnounced$ = this.routeDataAnnouncedSource.asObservable();
	routeDataConfirmed$ = this.routeDataConfirmedSource.asObservable();

	// Service message commands
	announceRouteData(data: any) {
		this.routeDataAnnouncedSource.next(data);
	}

	confirmRouteData(data: any) {
		this.routeDataConfirmedSource.next(data);
	}


}
