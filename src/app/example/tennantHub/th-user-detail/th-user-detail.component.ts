import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteDataService } from '../../../appServices/route-data.service'
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { userData, productData } from '../userData';
import { GetUsersFullNamePipe } from '../../../common/pipes/get-users-full-name.pipe';

@Component({
  selector: 'app-th-user-detail',
  templateUrl: './th-user-detail.component.html',
	styleUrls: ['./th-user-detail.component.css'],
	providers:[
		GetUsersFullNamePipe,
	]
})
export class ThUserDetailComponent implements OnInit {
	user:any
	availableProducts:any = [ ...productData ];
	userDetailsForm: FormGroup;
	userPasswordResetSent:boolean = false;
	routeDataChageSubscription:Subscription;
  constructor(
		private router: Router,
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private getUsersFullName: GetUsersFullNamePipe,
		private message: NzMessageService,
		private routeDataService: RouteDataService,
	) {

	}

  ngOnInit() {
		this.routeDataChageSubscription = this.route.data.subscribe(data => {
			this.routeDataService.announceRouteData(data)
		})
		// get the user id from the route
		const userId = this.route.snapshot.paramMap.get('id');
		// filter the selected user details by the userID
		const matchedUser = userData.filter(u => u.sub === userId);
		if(matchedUser.length){
			// assume only one id is found and set that to the selected user
			this.user = matchedUser[0];
		}
		//enabledProducts
		let enabledProductIds = this.user.enabledProducts.map(({ productId }) => productId)
		// create the form data
		this.userDetailsForm = this.fb.group({
      firstName: [this.user.firstName, [Validators.required]],
			lastName: [this.user.lastName, [Validators.required]],
      email: [this.user.emailAddress, [Validators.email, Validators.required]],
			enabled: [this.user.enabled],
			enabledProducts: [enabledProductIds]
    });
  }

	onBackButtonClicked(){
		this.router.navigate(["/th/users"]);
	}

	submitForm(): void {
		if(this.userDetailsForm.valid){
			// mimick success
			this.message.success(
				`The details for ${this.getUsersFullName.transform(this.user)} have been saved`,
			);
			this.userDetailsForm.markAsPristine();
		}
	}
	
	sendUserPasswordReset(){
		this.message.success(
			`Password reset email has been sent to ${this.getUsersFullName.transform(this.user)}.`,
		);
		this.userPasswordResetSent = true;
	}

	ngOnDestroy() {
		this.routeDataChageSubscription.unsubscribe();
		this.routeDataService.announceRouteData(this.routeDataService.defaultRoutData)
	}
}
