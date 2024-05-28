import { Component } from '@angular/core';
import { QuestionBoxComponent } from '../question-box/question-box.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialDesignModule } from 'src/app/shared/material-design.module';
import { slideInOutAnimation } from 'src/app/shared/animations/slideInOutAnimation';

@Component({
  selector: 'app-question-layout',
  standalone: true,
  imports: [QuestionBoxComponent,
    SharedModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,],
  templateUrl: './question-layout.component.html',
  styleUrl: './question-layout.component.css',
  animations: [slideInOutAnimation]
})
export class QuestionLayoutComponent {

}
