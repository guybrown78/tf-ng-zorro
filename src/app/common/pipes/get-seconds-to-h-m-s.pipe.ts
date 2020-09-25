import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'getSecondsToHMS',
	pure:true
})
export class GetSecondsToHMSPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.getSecondsToHMS(value)
  }

	getSecondsToHMS(ts:any):any{
		let d = Number(ts);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hr, " : " hrs, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " min, " : " mins, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " secs") : "";
    return hDisplay + mDisplay + sDisplay; 
	}
}
