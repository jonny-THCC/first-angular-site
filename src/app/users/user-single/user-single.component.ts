import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
    <div class="container">

      <div class="card" *ngIf="user">
        <img [src]="user.avatar_url">
        <h2>{{ user.login }}</h2>
      </div>

    </div>
    </section>
  `,
  styles: [
  ]
})
export class UserSingleComponent implements OnInit {

  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // grab the username out of URL
    this.route.params.subscribe(params =>{
      const username = params['username'];

      // use the user service to get data from github
      this.userService.getUser(username).subscribe(user => {
        // bind that to a user variable
        this.user = user;
      });

    })
    
  }

}
