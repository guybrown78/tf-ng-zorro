import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'getPaginationMessage',
	pure: true
})
export class GetPaginationMessagePipe implements PipeTransform {

  transform(currentPage: number, totalItems: number, itemsPerPage:number, dataType:string): String {
		return this.getPagintationMessage(currentPage, totalItems, itemsPerPage, dataType);
  }

	getPagintationMessage(currentPage: number, totalItems: number, itemsPerPage:number, dataType:string):String{
		// return `${userObj.firstName} ${userObj.lastName}`
		let pageStartIndex = ((currentPage - 1) * itemsPerPage) + 1;
		let pageEndIndex = (currentPage * itemsPerPage);
		if(pageEndIndex > totalItems){
			pageEndIndex = totalItems;
		}
		if(pageStartIndex < 0 ){
			pageStartIndex = 0;
		}
		return `Showing ${pageStartIndex} - ${pageEndIndex} of ${totalItems} ${dataType}`;
	}

}
