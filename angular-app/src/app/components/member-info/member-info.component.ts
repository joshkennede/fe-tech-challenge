import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IMemberDto } from 'src/app/models/dto/member-dto.model';
import { IMemberApiServiceProvider } from 'src/app/services/api/member/member-api.config';
import { IMemberApiService } from 'src/app/services/api/member/member-api.service';
import { validationMessage } from 'src/app/app.component';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.css']
})
export class MemberInfoComponent implements OnInit {

	public member: BehaviorSubject<IMemberDto | undefined> = new BehaviorSubject<IMemberDto | undefined>(undefined);
	public newFirstName: string = '';
	public newLastName: string = '';
	public newSsn: string = '';
	public newDateOfBirth: Date | undefined;
	public validationMessage: string = '';
	public canUpdate: boolean = false;
	
  constructor(
		@Inject(IMemberApiServiceProvider)
		private memberService: IMemberApiService,
		private route: ActivatedRoute,
		private router: Router
	) { }

  ngOnInit(): void {
		this.route.params.subscribe((parameters: Params) => {
			this.memberService.get(parseInt(parameters["id"])).subscribe((member: any) => this.member.next(member));
		});
  }

	updateMember(): void {
		if (this.isValidUpdate()) {
			this.memberService.update(
			{
				...this.member.value!,
				firstName: this.newFirstName,
				lastName: this.newLastName,
				ssn: this.newSsn,
				dateOfBirth: this.newDateOfBirth!
			}).subscribe((member: any) => { this.member.next(member)});
			this.canUpdate = false;
		} else {
			this.validationMessage = validationMessage;
		}
	}

	editMember(): void {
		this.canUpdate = true;
		this.newFirstName = this.member.value?.firstName!;
		this.newLastName = this.member.value?.lastName!;
		this.newSsn = this.member.value?.ssn!;
		this.newDateOfBirth = this.member.value?.dateOfBirth!;
	}

	goBack() {
		this.router.navigate(['/']);
	}

	isValidUpdate(): boolean {
		if (!this.newFirstName || !this.newLastName) {
			return false;
		}
		return true;
	}
}