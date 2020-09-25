import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'getScore',
	pure:true
})
export class GetScorePipe implements PipeTransform {

  transform(score: number, args?: any): any {
		return this.getScore(score);
  }

	getScore(score:number):String{
		if(!score){
			return '-';
		}
		return score <= 0 ? '-' : String(score);
	}
}


