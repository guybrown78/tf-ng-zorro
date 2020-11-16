import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
	// data = [
  //   'Racing car sprays burning fuel into crowd.',
  //   'Japanese princess to wed commoner.',
  //   'Australian walks 100km after outback crash.',
  //   'Man charged over missing wedding girl.',
  //   'Los Angeles battles huge wildfires.'
	// ];
	data = [
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
			id: 5,
			code: "CS_505",
			name: "Course Five",
			registered:null
		},
		{
			id: 6,
			code: "CS_666",
			name: "Course Six",
			registered:10666
		}
  ];
  data2:any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
