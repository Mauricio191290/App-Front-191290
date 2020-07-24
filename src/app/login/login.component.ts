import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any [] = []
  tittle = 'Mauricio Morales Martínez'

  constructor(protected userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser()
    .subscribe(
        (userdata) => { //Succes
          console.log(userdata)
          this.users = userdata['results']
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
