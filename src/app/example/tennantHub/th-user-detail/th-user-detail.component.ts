import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { userData } from '../userData';

@Component({
  selector: 'app-th-user-detail',
  templateUrl: './th-user-detail.component.html',
  styleUrls: ['./th-user-detail.component.css']
})
export class ThUserDetailComponent implements OnInit {

	user:any
	validateForm: FormGroup;
  constructor(
		private router: Router,
		private route: ActivatedRoute,
		private fb: FormBuilder
	) {

	}

  ngOnInit() {
		const userId = this.route.snapshot.paramMap.get('id');
		const matchedUser = userData.filter(u => u.sub === userId);
		if(matchedUser.length){
			this.user = matchedUser[0];
		}
		// 
		console.log(this.user)
		this.validateForm = this.fb.group({
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
		console.log("submit")
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
}
