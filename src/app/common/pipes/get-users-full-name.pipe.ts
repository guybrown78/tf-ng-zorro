import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'getUsersFullName',
	pure:true
})
export class GetUsersFullNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
		return this.getUsersFullName(value);
  }

	getUsersFullName(userObj):String{
		return `${userObj.firstName} ${userObj.lastName}`
	}
}
