import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe({
        next: response => {
            console.log("response: " + response);
        },
        error: error => { console.log(error); }
    });
  }

  logout() {
      this.accountService.logout();
  }

  getCurrentUser() {
      this.accountService.currentUser$.subscribe({
          error: error => { console.log(error); }
      });
  }

}
