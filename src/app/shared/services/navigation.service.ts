import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface IMenuItem {
  id?: string;
  title?: string;
  description?: string;
  type: string;       // Possible values: link/dropDown/extLink
  name?: string;      // Used as display text for item and title for separator type
  state?: string;     // Router state
  icon: string;      // Material icon name
  googleIcon?: string;      // Google icon name
  tooltip?: string;   // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
  active?: boolean;
}
export interface IChildItem {
  id?: string;
  parentId?: string;
  type?: string;
  name: string;       // Display text
  state?: string;     // Router state
  icon: string;
  sub?: IChildItem[];
  active?: boolean;
}

interface IBadge {
  color: string;      // primary/accent/warn/hex color codes(#fff000)
  value: string;      // Display text
}

interface ISidebarState {
  sidenavOpen?: boolean;
  childnavOpen?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public sidebarState: ISidebarState = {
    sidenavOpen: true,
    childnavOpen: false
  };

  selectedItem: IMenuItem;
  constructor() { }

  defaultMenu: IMenuItem[] = [
    {
      name: 'داشبورد',
      description: '',
      type: 'link',
      icon: 'heroHome',
      state: 'dashboard',
    },
    {
      name: 'ارزها',
      description: '',
      type: 'link',
      icon: 'heroCurrencyDollar',
      state: 'coins',
    },
    {
      name: 'تراکنش ها',
      description: '',
      type: 'link',
      icon: 'heroArrowsUpDown',
      state: 'transactions',
    },
    {
      name: 'سیستم',
      description: '',
      type: 'dropDown',
      icon: 'heroCog6Tooth',
      state: 'system',
      sub:[
        { icon: 'heroUsers', name: 'کاربران', state: 'system/user', type: 'link' },
        { icon: 'heroGear', name: 'تنظیمات', state: 'system/setting', type: 'link' },
      ]
    },
  ];

  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);

  menuItems$ = this.menuItems.asObservable();

}
