import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteDataService } from '../../../appServices/route-data.service'
import { Subscription } from 'rxjs';

import { userData } from '../userData';
import { GetLastLoginPipe } from '../pipes/get-last-login.pipe';
import { GetUsersFullNamePipe } from '../pipes/get-users-full-name.pipe';
import { GetUsersAccessPipe } from '../pipes/get-users-access.pipe';
import { GetPaginationMessagePipe } from '../pipes/get-pagination-message.pipe';
@Component({
  selector: 'app-th-users',
  templateUrl: './th-users.component.html',
	styleUrls: ['./th-users.component.css'],
	providers:[
		GetUsersFullNamePipe,
		GetLastLoginPipe,
		GetUsersAccessPipe,
		GetPaginationMessagePipe,
	]
})

export class ThUsersComponent implements OnInit  {
	data:any = []
	currentPage:number = 1
	itemsPerPage:number = 10
	totalItems:number;
	routeDataChageSubscription:Subscription;
  constructor(
		private router: Router,
		private route: ActivatedRoute,
		private getUsersFullName: GetUsersFullNamePipe,
		private getLastLogin: GetLastLoginPipe,
		private getUsersAccess: GetUsersAccessPipe,
		private getPaginationMessage: GetPaginationMessagePipe,
		private routeDataService: RouteDataService,
	) { 
		this.data = [ ...userData ]
		this.totalItems = this.data.length;
	}

	ngOnInit() {
		this.routeDataChageSubscription = this.route.data.subscribe(data => {
				this.routeDataService.announceRouteData(data)
		})
	}

	onBackButtonClicked(){
		this.router.navigate(["/th/dashboard"]);
	}
	onTitleBarAction(){
		console.log("Add User")
	}

	onChange(event){
		const str = String(event.target.value).toLowerCase();
		const updatedData = userData.filter(
			u => u.firstName.toLowerCase().includes(str) || u.lastName.toLowerCase().includes(str)
		);
		this.totalItems = updatedData.length;
		this.data = [ ...updatedData ];
	}

	onUserDetailsSelected(user:any){
		this.router.navigate([`/th/user/${user.sub}`]);
	}

	ngOnDestroy() {
		this.routeDataChageSubscription.unsubscribe();
		this.routeDataService.announceRouteData(this.routeDataService.defaultRoutData)
	}
}
