import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  template: `
  <h1 *ngIf="value">Loading... #waititaminut#</h1>
  <div *ngFor=" let user of users; let i = index; let dispari = odd; let last = last;">
  {{i + 1}}. {{user.name | json}} - {{user.company.name}}
  <button (click)="delete(user)">DELETE</button>
  <hr>
  <div *ngIf="last">END OF LIST</div>
</div>
  `,
  styles: []
})
export class AppComponent {
  value: boolean = true;
  users: User[] = [];
  soldi: number = 2;

  constructor(http: HttpClient){
    setTimeout(() => {
      http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((result: User[]) => this.users = result)
      this.value = false;
    }, 2500);
    
  }

  delete(user: User) {
    /* this aproach is risky cause' you directly modify the data 
    const index = this.users.indexOf(user);
    this.users.splice(index, 1)
    */
   this.users = this.users.filter(item => item.id !== user.id);
   console.log(this.users);
   console.log(user);
  }

}
