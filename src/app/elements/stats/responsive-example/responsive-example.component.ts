import { Component } from '@angular/core';

@Component({
  selector: 'stats-responsive-example',
  templateUrl: './responsive-example.component.html',
  styleUrls: ['./responsive-example.component.css']
})
export class ResponsiveExampleComponent{
	appStatsData:any = [
		{
			status:"red",
			title:"Not Started",
			data:"1"
		},
		{
			status:"amber",
			title:"In Progress",
			data:"19"
		},
		{
			status:"green",
			title:"Completed",
			data:"22"
		}
	];


}
