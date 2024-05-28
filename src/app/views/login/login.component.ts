import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaterialDesignModule } from 'src/app/shared/material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RepositoryService } from 'src/app/core/http/repository.service';
import { CredentialsService } from 'src/app/core/authentication/credentials.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
     FlexLayoutModule,
    SharedModule,
    HttpClientModule ,

  ],

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','responsive.component.scss']
})
export class LoginComponent {
  loginFrm: FormGroup;

  constructor(private fb: FormBuilder, private rep: RepositoryService,   private credite: CredentialsService) {}

  ngOnInit(): void {
    this.creatFrm();
  }

  creatFrm(){
    this.loginFrm = this.fb.group({
      phoneNumber: ['', Validators.required],
      nationalCode: ['', Validators.required],
    })
  }

  login(){
    this.rep
    .post('auth/login', this.loginFrm.value)
    .subscribe((loginRes: any) => {
      this.credite.setCredentials(loginRes.data.access_token);
    })
  }
}
