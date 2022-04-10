import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from "../_services/account.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      this.cancel();
      console.log(response);
    }, error => {
        console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}