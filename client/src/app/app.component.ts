import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from "./_services/account.service";
import { User } from "./_models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem("user"));
    this.accountService.setCurrentUser(user);
  }

  getUser() {
    this.http.get("https://localhost:5001/api/users").subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}
