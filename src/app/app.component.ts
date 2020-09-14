import { Component, OnInit } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'tf-ng-zorro';
	constructor(
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		// console.log(this.route)
		// this.route.route.subscribe(params => {
		// 	console.log(params['edit']);
		// 	console.log(params['other']);
		// });


		this.route.data.subscribe(data => {
			console.log(data)
		})

		
	}
	// prepareRoute(outlet: RouterOutlet) {
	// 	this.updateRouteData(outlet.activatedRouteData)
	// 	return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	// }
	// updateRouteData(data):void{
	// 	console.log("..........")
	// 	console.log(data);
	// }
}
