import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
	dataMostPopular = [
		{
			id: 1,
			code: "CS_001",
			name: "Cold Water Survival",
			registered:164
		},
		{
			id: 2,
			code: "CS_020",
			name: "Optito Bosiet with CA-EBS",
			registered:98
		},
		{
			id: 3,
			code: "CS_300",
			name: "Course Three",
			registered:12
		},
		{
			id: 4,
			code: "CS_444",
			name: "Course Four",
			registered:564
		},
		{
			id: 6,
			code: "CS_666",
			name: "Course Six",
			registered:10666
		}
	];
	dataLeastPopular = [
		{
			id: 11,
			code: "CS_011",
			name: "Course Eleven",
			registered:16
		},
		{
			id: 12,
			code: "CS_020",
			name: "Course Twelve",
			registered:8
		},
		{
			id: 13,
			code: "CS_130",
			name: "Course Thirteen",
			registered:1
		},
		{
			id: 14,
			code: "CS_144",
			name: "Course Fourteem",
			registered:23
		},
		{
			id: 15,
			code: "CS_105",
			name: "Course fifteen",
			registered:null
		}
	];
}
