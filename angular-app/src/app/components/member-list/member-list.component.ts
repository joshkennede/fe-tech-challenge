import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IMemberDto } from 'src/app/models/dto/member-dto.model';
import { IMemberApiServiceProvider } from 'src/app/services/api/member/member-api.config';
import { IMemberApiService } from 'src/app/services/api/member/member-api.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
	
	members: IMemberDto[] = [];

  constructor(
		@Inject(IMemberApiServiceProvider)
		private memberService: IMemberApiService
	) { }

  ngOnInit(): void {
		this.getMembers().subscribe((members: IMemberDto[]) => {
			this.members = members;
		});
  }

	getMembers(): Observable<IMemberDto[]> {
		return this.memberService.getCollection();
	}

	deleteMember(memberId: number): void {
		this.memberService.delete(memberId);
		this.getMembers();
	}
}

// I had pagination working but ran into an issue with keeping the member list current
// so I removed it (see commits)