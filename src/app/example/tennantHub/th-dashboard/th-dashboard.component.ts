import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteDataService } from '../../../appServices/route-data.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-th-dashboard',
  templateUrl: './th-dashboard.component.html',
  styleUrls: ['./th-dashboard.component.css']
})
export class ThDashboardComponent implements OnInit {

	userName:String = "Dinesh";
	activeProducts = [
		{
			id:"fb",
			title:"Form Builder",
			code:"FB",
		},
		{
			id:"lm",
			title:"Learning Management",
			code:"lm",
		},
		{
			id:"th",
			title:"Tennant Hub",
			code:"th",
		},
    {
			title:"Generic Large Name Hub",
      logoSource:"https://logodix.com/logo/80482.png"
		},
    {
			title:"Tennant Hub",
      logoSource:"https://www.altradservices.com/wp-content/themes/altrad/assets/svg/global/logo-altrad-v2.svg"
		},
    {
			title:"Hub",
      logoSource:"https://dwglogo.com/wp-content/uploads/2016/01/Petrofac-Logo.png"
		},
	];
	additionalProducts = [
		{
			cardTitle:"Recommended Software",
			id:"tm",
			title:"Training Management",
			code:"TM",
			desc:"Training Management is the management application to administrate your corporations training",
			cta:"Want to know more about Training Management? Request a call from your Account Manager"
		},
		{
			id:"cm",
			title:"Competence Management",
			code:"cm",
			desc:"Competence Management is the cloud based software to track your employees workplace competency",
			cta:"Find out how Competency Management can help your workforce"
		},
		{
			cardTitle:"Recently Updated",
			id:"r3",
			title:"R3",
			code:"R3",
			desc:"Bite-size learning modules are designed around the three key stages of any learning event – pre-learn, during and post learn.",
			cta:null
		},
	];
	routeDataChageSubscription:Subscription;
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private routeDataService: RouteDataService,
	) { }

	ngOnInit() {
		this.routeDataChageSubscription = this.route.data.subscribe(data => {
				this.routeDataService.announceRouteData(data)
		})
	}


	onActiveProductSelected(event){
		switch(event.productCode){
			case "th":
				this.router.navigate(["/th/users"]);
				break;
			case "lm":
				this.router.navigate(["/lms/dashboard"]);
				break;
			default:
				console.log(`The product ${event.productTitle} isn't selectable for this example`);
				break;
		}
	}

	onProductCTASelected(event){
		console.log(event)
	}

  qlAddUser(){
    console.log("ADD Tennant Hub USER");
  }

	ngOnDestroy() {
		this.routeDataChageSubscription.unsubscribe();
		this.routeDataService.announceRouteData(this.routeDataService.defaultRoutData)
	}

}
