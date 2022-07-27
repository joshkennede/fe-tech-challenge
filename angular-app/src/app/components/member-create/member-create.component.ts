import { Component, Inject, OnInit } from '@angular/core';
import { IMemberApiServiceProvider } from 'src/app/services/api/member/member-api.config';
import { IMemberApiService } from 'src/app/services/api/member/member-api.service';
import { IMemberDto } from 'src/app/models/dto/member-dto.model';
import { validationMessage } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {

	public validationMessage: string = '';
	public firstName: string = '';
	public lastName: string = '';
	public ssn: string = '';
	public dateOfBirth: Date | undefined;

  constructor(
		@Inject(IMemberApiServiceProvider)
		private memberService: IMemberApiService,
		private router: Router
	) { }

  ngOnInit(): void {
  }

	createMember(): void {
		const member: IMemberDto = {
			firstName: this.firstName,
			lastName: this.lastName,
			ssn: this.ssn,
			dateOfBirth: this.dateOfBirth!
		};

		if (this.isFormComplete(member)) {
			this.memberService.create(member).subscribe(() => this.router.navigate(['/']));
		} else {
			this.validationMessage = validationMessage;
		}
	}

	goBack() {
		this.router.navigate(['/']);
	}

	isFormComplete(member: IMemberDto): boolean {
		if (!member.firstName || 
				!member.lastName || 
				!member.ssn || 
				!member.dateOfBirth
				) {
			return false;
		}
		return true;
	}
}