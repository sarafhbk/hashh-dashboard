import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { LayoutService } from '../../../@core/data/layout.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import * as Parse from 'parse';
import { AuthServiceLocal } from '../../../auth.service';
import { AuthService, SocialUser } from "angular4-social-login";
@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';
  user:  SocialUser;
  loggedIn: boolean;
  alive = true;
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              public router: Router, public auth: AuthServiceLocal, private authService: AuthService ) {
                    Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
    Parse.serverURL = environment.serverURL;
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
logout(): void {
  this.authService.signOut().then(() => {
       localStorage.removeItem('isLoggedIn');
       localStorage.removeItem('currentUserEmail');
       localStorage.removeItem('currentUserPic');
       localStorage.removeItem('currentUserName');
this.router.navigateByUrl('/auth');
          }
        )
}
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
  ngOnDestroy(): void {
    this.alive = false;
  }
}
