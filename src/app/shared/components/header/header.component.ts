import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderItem } from '../../models/HeaderItem';
import { SharedModule } from '../../shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from '../../material-design.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, FlexLayoutModule, RouterModule, MaterialDesignModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() items: HeaderItem[];

  constructor(private router: Router) {}

  get(id: any) {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
