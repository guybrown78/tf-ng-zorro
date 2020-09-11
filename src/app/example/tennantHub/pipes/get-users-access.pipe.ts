import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'getUsersAccess',
	pure:true
})
export class GetUsersAccessPipe implements PipeTransform {

  transform(value: any, args?: any): any {
		return this.getUsersAccess(value);
  }

	getUsersAccess(userObj):any{
		// use this to parse the user data and determine what access that user has. returns an object that can populate a status component. This example looks for s 'dummy' property of hasAccess on the object. if it doesn't find it it defaults to grey:unknown
		let colour = userObj.hasAccess ? 'green' : 'grey';
		let status = userObj.hasAccess ? 'FULL' : 'UNKNOWN';
		return { colour, status }
	}
}
