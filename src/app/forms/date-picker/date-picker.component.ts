import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

	dateFormat = 'dd/MM/yyyy';
	monthFormat = 'MM/yy';
	
  constructor() { }

  ngOnInit() {
  }

}
