import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name: 'getLastLogin',
	pure:true
})
export class GetLastLoginPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.getLastLogin(value);
  }

	getLastLogin(lastLogin):String{
		if(!lastLogin){
			return "never";
		}
		return moment(lastLogin).fromNow();
	}
}
