import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-credentials-list',
  templateUrl: './credentials-list.component.html',
  styleUrls: ['./credentials-list.component.scss']
})
export class CredentialsListComponent implements OnInit {
  credentials : any[];
  constructor(public db: AngularFireDatabase) {
       db.list('/credentials')
       .valueChanges()
       .subscribe(credentials=>{
          this.credentials = credentials;
          console.log(this.credentials);
       })
       ;
   }
  
  ngOnInit(): void {
  }

}
