import { Component, Input } from '@angular/core';

// import { NzMessageService } from 'ng-zorro-antd/message';

// import { NzTableSortOrder, NzTableSortFn } from 'ng-zorro-antd/table';
// import { NzThFilterType } from 'ng-zorro-antd/table';

import { RegistrationDataItem } from '../../../common/models/RegistrationDataItem';
import { GetScorePipe } from '../../../common/pipes/get-score.pipe';
import { GetRegistrationStatusPipe } from '../../../common/pipes/get-registration-status.pipe'
import { GetSecondsToHMSPipe } from '../../../common/pipes/get-seconds-to-h-m-s.pipe'


// interface ColumnItem {
//   name: string;
//   sortOrder?: NzTableSortOrder;
//   sortFn?: NzTableSortFn;
// }

@Component({
  selector: 'lms-registrations',
  templateUrl: './lms-registrations.component.html',
	styleUrls: ['./lms-registrations.component.css'],
	providers:[
		GetRegistrationStatusPipe,
		GetScorePipe,
		GetSecondsToHMSPipe
	]
})
export class LmsRegistrationsComponent {

	// listOfColumns: ColumnItem[] = [
  //   {
  //     name: 'Course Name',
  //     sortOrder: null,
  //     sortFn: (a: RegistrationDataItem, b: RegistrationDataItem) => a.course.name.localeCompare(b.course.name),
    
	// 	},
	// 	{
	// 		name: 'Status',
	// 		sortOrder: null,
  //   },
  //   {
  //     name: 'Total Time',
  //     sortOrder: null,
  //     sortFn: (a: RegistrationDataItem, b: RegistrationDataItem) => a.totalSeconds - b.totalSeconds
  //   },
  //   {
  //     name: 'Score',
	// 		sortOrder: null,
  //     sortFn: (a: RegistrationDataItem, b: RegistrationDataItem) => a.score - b.score
	// 	},
	// 	{
	// 		name: '',
	// 		sortOrder: null,
  //   }
  // ];

	currentPage:number = 1
	itemsPerPage:number = 10
	totalItems:number;

	private _data:RegistrationDataItem[] = [];
	@Input("data") set data(dataItemsArray:RegistrationDataItem[]) {
		this._data = [ ...dataItemsArray];
		this.totalItems = this._data.length;
	}
	get data(): RegistrationDataItem[] {
		return this._data;
	}

	// trackByName(_: number, item: ColumnItem): string {
  //   return item.name;
	// }
	
  constructor(
		private getRegistrationStatus: GetRegistrationStatusPipe,
		private getScore: GetScorePipe,
		private getSecondsToHMS: GetSecondsToHMSPipe,
	) { }
	
	
	onStartCourse(data){
		console.log("start", data.course.name)
	}
	onReumeCourse(data){
		console.log("resume", data.course.name)
	}
	onDownloadCert(data){
		console.log("download certificate for", data.course.name)
	}
	onRestartCourse(data){
		console.log("re-start", data.course.name)
	}
 

}
