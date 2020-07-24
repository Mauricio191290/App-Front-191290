import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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