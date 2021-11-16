import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { User, UserService } from '../../core';


@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    constructor(
        private userService: UserService,
        private cd: ChangeDetectorRef
      ) {}
  
  items : MenuItem[];
  currentUser: User;

    ngOnInit() {

        this.userService.currentUser.subscribe(
            (userData) => {
              this.currentUser = userData;
              this.cd.markForCheck();
              this.menuInit(this.currentUser);
            }
          );
    }

    menuInit(user){
        this.items = [
            {
                label:'File',
                icon:'pi pi-fw pi-file',
                items:[
                    {
                        label:'New',
                        icon:'pi pi-fw pi-plus',
                        items:[
                        {
                            label:'Bookmark',
                            icon:'pi pi-fw pi-bookmark'
                        },
                        {
                            label:'Video',
                            icon:'pi pi-fw pi-video'
                        },

                        ]
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-trash'
                    },
                    {
                        separator:true
                    },
                    {
                        label:'Export',
                        icon:'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label:'Home',
                icon:'pi pi-fw pi-power-off',
                routerLink: ['/']
            },
            {
                label:'New Way',
                icon:'pi pi-fw pi-power-off',
                routerLink: ['/way']
            },
            {
                label:'User Setting',
                icon:'pi pi-fw pi-power-off',
                routerLink: ['/settings']
            },
            {
                label:'User Profile',
                icon:'pi pi-fw pi-power-off',
                routerLink: ['/profile', user.username]
            },
            {
                label:'Sing Up',
                icon:'pi pi-fw pi-power-off',
                routerLink: ['/register']
            },
            {
                label:'Sing In',
                icon:'pi pi-fw pi-power-off',
                routerLink: ['/login']
            }
        ];
    }
}
