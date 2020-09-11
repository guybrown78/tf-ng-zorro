import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

export class ThUsersComponent  {
	data:any = []
	currentPage:number = 1
	itemsPerPage:number = 10
	totalItems:number;
  constructor(
		private router: Router,
		private getUsersFullName: GetUsersFullNamePipe,
		private getLastLogin: GetLastLoginPipe,
		private getUsersAccess: GetUsersAccessPipe,
		private getPaginationMessage: GetPaginationMessagePipe,
	) { 
		this.data = [ ...userData ]
		this.totalItems = this.data.length;
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
		console.log(user)
		this.router.navigate([`/th/user/${user.sub}`]);
	}
}
