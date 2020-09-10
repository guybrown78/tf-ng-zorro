import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { userData } from '../userData';

@Component({
  selector: 'app-th-user-detail',
  templateUrl: './th-user-detail.component.html',
  styleUrls: ['./th-user-detail.component.css']
})
export class ThUserDetailComponent implements OnInit {

	user:any
  constructor(
		private router: Router,
		private route: ActivatedRoute,
	) {

	}

  ngOnInit() {
		const userId = this.route.snapshot.paramMap.get('id');
		const matchedUser = userData.filter(u => u.sub === userId);
		if(matchedUser.length){
			this.user = matchedUser[0];
		}
  }

}
