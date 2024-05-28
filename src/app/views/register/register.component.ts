import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RepositoryService } from 'src/app/core/http/repository.service';
import { DateTimeInputComponent } from 'src/app/shared/components/date-time-input/date-time-input.component';
import { MaterialDesignModule } from 'src/app/shared/material-design.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    // MatFormFieldModule,
    RouterModule,
    RouterOutlet,
    FlexLayoutModule,
    DateTimeInputComponent,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', 'responsive.component.scss'],
})
export class RegisterComponent {
  regFrm: FormGroup;

  data = [
    {
      value: '1',
      text: 'شبکه های اجتماعی',
    },
    {
      value: '2',
      text: 'مدارس',
    },
    {
      value: '3',
      text: 'افراد',
    },
    {
      value: '4',
      text: 'سایر',
    },
  ];

  constructor(private fb: FormBuilder, private rep: RepositoryService) {}

  ngOnInit(): void {
    this.creatFrm();
  }

  creatFrm() {
    this.regFrm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      age: ['', Validators.required],
      nationalCode: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  register() {
    this.rep.post('auth/register', this.regFrm.value).subscribe((res) => {});
  }
}
