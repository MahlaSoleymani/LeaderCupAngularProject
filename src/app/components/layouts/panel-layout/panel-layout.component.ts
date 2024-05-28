import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ProfileComponent } from 'src/app/shared/components/profile/profile.component';

import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { MaterialDesignModule } from 'src/app/shared/material-design.module';
import { HeaderItem } from 'src/app/shared/models/HeaderItem';
import { item } from 'src/app/shared/models/item';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    SidebarComponent,
    RouterModule,
    RouterOutlet,
    FlexLayoutModule
  ],
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent {
  items: item[] =
    [
      { name: 'داشبورد', id: '/panel/dashboard', icon: 'dashboard' },
      { name: 'رویداد ها', id: '/panel/events', icon: 'event' },
      { name: 'مدیریت کاربر', id: '/panel/user-management', icon: 'manage_accounts' },
      // { name: 'مدیریت کاربر', id: '/panel/user-management', icon: 'manage_accounts' },
    ]

  headerItems: HeaderItem[] =
    [
      { name: 'profile', id: '#', icon: 'person', actionName: 'openDialog', data: { component: ProfileComponent, methodType: 'get', url: 'User/GetProfile' }, menu: null }
    ]
}
