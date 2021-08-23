import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
	tenantLogo:string = "https://logodix.com/logo/80482.png"
	index:number = 0;
	tenants:any [] = [
		{code:"Bi", title:"Business intelligence", logo:"https://logodix.com/logo/80482.png"},
		{code:"R3", title:"R3", logo:"https://www.altradservices.com/wp-content/themes/altrad/assets/svg/global/logo-altrad-v2.svg"},
		{code:"MP", title:"Global Training Marketplace", logo:"https://dwglogo.com/wp-content/uploads/2016/01/Petrofac-Logo.png"}
	]
	int = null;
  constructor() {

	}

  ngOnInit() {
		this.int = setInterval(() => {
			const t = this.tenants[this.index]
			this.tenantLogo = t.logo
			this.index = this.index >= this.tenants.length - 1 ? 0 : this.index + 1;

		}, 1500);
  }
	ngOnDestroy() {
		clearInterval(this.int);
	}
}
