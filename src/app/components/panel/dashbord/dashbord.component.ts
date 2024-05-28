import { Component, ViewEncapsulation } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaterialDesignModule } from 'src/app/shared/material-design.module';

@Component({
  selector: 'app-user-dashbord',
  standalone: true,
  imports: [MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    // MatFormFieldModule,
    RouterModule,
    RouterOutlet,
    FlexLayoutModule
  ],
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class DashbordComponent {
  selectedDate: Date;
}
