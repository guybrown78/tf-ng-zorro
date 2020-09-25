import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteDataService } from '../../appServices/route-data.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	routeDataChageSubscription:Subscription;
	loginForm: FormGroup;
	showFormHeroError:boolean = false;
	formLoading:boolean = false;

  submitForm(): void {
		// fake load flow
		this.showFormHeroError = false;
		this.formLoading = true;
		setTimeout(() => {
			this.formLoading = false;
			this.showFormHeroError = true;
		}, 2500);
	}
	
  constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private routeDataService: RouteDataService,
	) {}

  ngOnInit(): void {
		this.routeDataChageSubscription = this.route.data.subscribe(data => {
			this.routeDataService.announceRouteData(data)
		})

    this.loginForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

	ngOnDestroy() {
		this.routeDataChageSubscription.unsubscribe();
		this.routeDataService.announceRouteData(this.routeDataService.defaultRoutData)
	}
}
