import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Companies', icon: 'pi pi-fw pi-home',routerLink: ['/companies']},
            {label: 'Add Company', icon: 'pi pi-fw pi-calendar',routerLink: ['/addCompany']},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];
    }

}
