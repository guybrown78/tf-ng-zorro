import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrationDataItem } from '../../../common/models/RegistrationDataItem';
import { RouteDataService } from '../../../appServices/route-data.service'
import { Subscription } from 'rxjs';
import { registrationsData } from '../registrationsData';
import { StatDataItem } from '../../../common/models/StatDataItem'
@Component({
  selector: 'app-lms-dashboard',
  templateUrl: './lms-dashboard.component.html',
  styleUrls: ['./lms-dashboard.component.css']
})
export class LmsDashboardComponent implements OnInit {

	routeDataChageSubscription:Subscription;
	userName:String = "Dinesh";
	//
	private _notStartedData:RegistrationDataItem[];
	private _inProgData:RegistrationDataItem[];
	private _completedData:RegistrationDataItem[];
	private _failedData:RegistrationDataItem[];
	private _allData:RegistrationDataItem[];
	lmsStatsData:StatDataItem[];
	//
	constructor(
		private route: ActivatedRoute,
		private routeDataService: RouteDataService,
	) { }

  ngOnInit() {
		// gets data from the route module and passed it to the header via the routDataService
		this.routeDataChageSubscription = this.route.data.subscribe(data => {
			this.routeDataService.announceRouteData(data)
		})
		// parses the data for the page
		this._notStartedData = registrationsData.filter(r => r.status.id === 1);
		this._inProgData = registrationsData.filter(r => r.status.id === 2);
		this._completedData = registrationsData.filter(r => r.status.id === 3);
		this._failedData = registrationsData.filter(r => r.status.id === 4);
		this._allData = [ ...registrationsData ]
		// creates a stata data array of strict objects
		this.lmsStatsData = [
			{
				status:"red",
				title:"Not Started",
				data:String(this._notStartedData.length)
			},
			{
				status:"amber",
				title:"In Progress",
				data:String(this._inProgData.length)
			},
			{
				status:"green",
				title:"Completed",
				data:String(this._completedData.length)
			}
		];
	}

	ngOnDestroy() {
		this.routeDataChageSubscription.unsubscribe();
		this.routeDataService.announceRouteData(this.routeDataService.defaultRoutData)
	}
}
