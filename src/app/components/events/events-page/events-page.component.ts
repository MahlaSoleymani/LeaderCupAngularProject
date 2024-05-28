import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { CredentialsService } from '../../../core/authentication/credentials.service';
import { RepositoryService } from '../../../core/http/repository.service';
import { MaterialDesignModule } from '../../../shared/material-design.module';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
      MaterialDesignModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      RouterOutlet,
      FlexLayoutModule,
  ],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css',
})
export class EventsPageComponent {
  displayedColumns: string[] = ['title', 'description', '', 'action'];

  totalRecords = 0;

  dataSource = new MatTableDataSource<any>();
  dataSourceChangeSubject = new Subject();

  constructor(
    // private dialog: MatDialog,
    private rep: RepositoryService,
    // public dialogRef: MatDialogRef<AddUserComponent>,
    public credit: CredentialsService
  ) {}
}
