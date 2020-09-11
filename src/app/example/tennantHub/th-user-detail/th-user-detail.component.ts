import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { userData } from '../userData';
import { GetUsersFullNamePipe } from '../pipes/get-users-full-name.pipe';

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
	userDetailsForm: FormGroup;
	userPasswordResetSent:boolean = false;
  constructor(
		private router: Router,
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private getUsersFullName: GetUsersFullNamePipe,
		private message: NzMessageService
	) {

	}

  ngOnInit() {
		// get the user id from the route
		const userId = this.route.snapshot.paramMap.get('id');
		// filter the selected user details by the userID
		const matchedUser = userData.filter(u => u.sub === userId);
		if(matchedUser.length){
			// assume only one id is found and set that to the selected user
			this.user = matchedUser[0];
		}
		// create the form data
		this.userDetailsForm = this.fb.group({
      firstName: [this.user.firstName, [Validators.required]],
			lastName: [this.user.lastName, [Validators.required]],
      email: [this.user.emailAddress, [Validators.email, Validators.required]],
      enabled: [this.user.enabled]
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
}
