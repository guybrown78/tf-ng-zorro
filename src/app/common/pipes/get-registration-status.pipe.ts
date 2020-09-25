import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'getRegistrationStatus',
	pure: true
})
export class GetRegistrationStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.getRegistrationStatus(value);
  }

	getRegistrationStatus(statusObj):any{
		let colour = 'grey';
		let status = 'UNKNOWN';
		switch(statusObj.id){
			case 1:
				colour = 'grey';
				status = 'Not Started';
				break;
			case 2:
				colour = 'amber';
				status = 'In Progress';
				break;
			case 3:
				colour = 'green';
				status = 'Completed';
				break;
			case 4:
				colour = 'red';
				status = 'Failed';
				break;
			default:
				colour = 'grey';
				status = 'UNKNOWN';
		}
		return { colour, status }
	}


}
