import { Component, Input } from '@angular/core';
import { item } from '../../models/item';
import { Router, RouterModule } from '@angular/router';
import { CredentialsService } from 'src/app/core/authentication/credentials.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared.module';
import { MaterialDesignModule } from '../../material-design.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedModule,  FlexLayoutModule, RouterModule , MaterialDesignModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
@Input() items: item[];

constructor(private credit: CredentialsService, private router: Router) { }


logOut() {
  // this.credit.setCredentials();
  this.router.navigate(['/login']);
}

}
