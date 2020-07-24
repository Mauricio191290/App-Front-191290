import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
