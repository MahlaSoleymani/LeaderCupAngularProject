import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialDesignModule } from 'src/app/shared/material-design.module';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-question-box',
  standalone: true,
  imports: [
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    SharedModule,
  ],
  templateUrl: './question-box.component.html',
  styleUrl: './question-box.component.css',
})
export class QuestionBoxComponent {}
