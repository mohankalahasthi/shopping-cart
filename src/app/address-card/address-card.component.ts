import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  user: any;
  @Input('name') userName:string;
  isCollapsed : boolean=true;
  
  constructor() { 
    // ngFor object example
  }

    toggleCollapse(){
      this.isCollapsed = !this.isCollapsed;
    }
    

  ngOnInit() {
    this.user = {
      name: this.userName,
      title:'software develope',
      address:'1234 ,k v r swamy road , rjy,ap,533101',
    phone:[
        '9848152102',
         '8801799750'
    ],
    officecontact:[
      
    ]

  }
  }

}
