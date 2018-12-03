import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
photoUrl: any;
name: any;
email: any;

  ngOnInit() {
this.photoUrl = localStorage.getItem('currentUserPic');
this.name = localStorage.getItem('currentUserName');
this.email = localStorage.getItem('currentUserEmail');
  }

}
