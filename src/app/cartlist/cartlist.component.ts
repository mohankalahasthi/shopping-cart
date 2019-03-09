import { Component, OnInit } from '@angular/core';
import { User } from '../entites/User';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.scss']
})
export class CartlistComponent implements OnInit {
  user:User;
  items = ["Angular","React"];
  newItem = "";
  pushItem = function(){
    if(this.newItem !=""){
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }
  removeItem = function(index){
    this.items.splice(index,1);

  }

  dateMessage: string;

  constructor() { 
// date display method
    setInterval (()=>{
      let currentDate = new Date();
  this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();

    } , 1000);
  
  }
  ngOnInit() {
  }

}
