import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, catchError, map, merge, startWith, switchMap } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialDesignModule } from 'src/app/shared/material-design.module';
import { AddUserComponent } from '../add-user/add-user.component';
import { CredentialsService } from 'src/app/core/authentication/credentials.service';
import { RepositoryService } from 'src/app/core/http/repository.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterOutlet,
    FlexLayoutModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  displayedColumns: string[] = [
    'name',
    'age',

    'action',
  ];

  totalRecords = 0;

  dataSource = new MatTableDataSource<any>();
  dataSourceChangeSubject = new Subject();

  constructor(
    private dialog: MatDialog,
    private rep: RepositoryService,
    // public dialogRef: MatDialogRef<AddUserComponent>,
    public credit: CredentialsService,
  ) { }

  addUserDialog(){
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '50%',
      height: 'auto',
      // disableClose: true,
    });

  }
}
