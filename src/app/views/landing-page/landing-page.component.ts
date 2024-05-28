import { Component, ElementRef } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HeaderItem } from 'src/app/shared/models/HeaderItem';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialDesignModule } from 'src/app/shared/material-design.module';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { Router, RouterModule } from '@angular/router';
import { eventNames } from 'node:process';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    SharedModule,
    HeaderComponent,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    MaterialDesignModule,
    SidebarComponent,
    CommonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls:[ './landing-page.component.css', 'responsive.component.scss']
})
export class LandingPageComponent {
  panelOpenState = false;
  isExpanded_insta:boolean;
  isExpanded_tel:boolean;
  isExpanded_eitaa:boolean;
  headerItems: HeaderItem[] = [
    {
      name: 'خانه',
      id: 'home',
      icon: '',
      actionName: '',
      data: null,
      menu: null,
    },
    {
      name: 'توضیحات',
      id: 'disc',
      icon: '',
      actionName: '',
      data: null,
      menu: null,
    },
  ];

  sponsers = [
    {
      text: '',
      url: '../../../assets/images/sponsers/4gndnnx9x.png',
      name: '',
    },
    {
      text: '',
      url: '../../../assets/images/sponsers/SAMinno-Logo-01.png',
      name: '',
    }
  ];

  constructor(private router: Router) {
  }

  get(id) {
    this.router.navigate(['/'], { fragment: id });
  }

  copy(eventId){
    var data=document.getElementById(eventId).innerHTML;
    navigator.clipboard.writeText(data);
  }

  copyAddress(data){
    // var data=document.getElementById(eventId);
    // console.log(data.attributes.getNamedItem('href').value);

    navigator.clipboard.writeText(data)
  }
  toggleExpansion(cond): void {
    if(cond=="tel")
    this.isExpanded_tel = !this.isExpanded_tel;
    else if(cond =="insta")
      this.isExpanded_insta = !this.isExpanded_insta;
    else if(cond == "eitaa")
      this.isExpanded_eitaa = ! this.isExpanded_eitaa;
  }

}
