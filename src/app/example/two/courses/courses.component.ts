import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'example-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
	listOfData = [
    {
      key: '1',
      name: 'Cold Water Survival',
      code: 'CS_001',
      status: 'Live'
    },
    {
      key: '2',
      name: 'Optito Bosiet with CA-EBS',
      code: 'CS_020',
      status: 'Live'
    },
    {
      key: '3',
      name: 'Course Three',
      code: 'CS_300',
      status: 'ARCHIVED'
		},
		{
      key: '4',
      name: 'Course Four',
      code: 'CS_004',
      status: 'PENDING'
		},
		{
      key: '5',
      name: 'Course Five',
      code: 'CS_050',
      status: 'PENDING'
		},
		{
      key: '6',
      name: 'Course Six',
      code: 'CS_666',
      status: 'Live'
		},
		{
			key: '7',
			name: 'Course Seven',
			code: 'CS_007',
			status: 'ARCHIVED'
		},
	];
	data:any = null;
	@Input() status:string = "all";

  ngOnInit() {
		if(this.status.toLowerCase() === "all"){
			this.data = [ ... this.listOfData ]
		}else{
			this.data = this.listOfData.filter(i => i.status.toLowerCase() === this.status.toLowerCase())
		}
  }

}
