import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {
	
  constructor(private router: Router,) { }


	onBackButtonClicked(){
		console.log("back button clicked")
		this.router.navigate(["/one"]);
	}
}
