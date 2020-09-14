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
	ngOnDestroy() {
    this.routeDataSubscription.unsubscribe();
  }

}
