import { Component, Input } from '@angular/core';
import { StatDataItem } from '../../../common/models/StatDataItem'

@Component({
  selector: 'stats-responsive-example',
  templateUrl: './responsive-example.component.html',
  styleUrls: ['./responsive-example.component.css']
})
export class ResponsiveExampleComponent{
	@Input('statsData') appStatsData:StatDataItem[] = [
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
