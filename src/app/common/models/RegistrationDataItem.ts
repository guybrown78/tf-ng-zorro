export interface RegistrationDataItem {
	id:string;
	score:number;
	totalSeconds:number;
	course:CourseDataItem
  status: StatusDataItem;
}
export interface CourseDataItem {
	id:string;
	name:string;
}
export interface StatusDataItem {
	id:number;
	name:string;
}