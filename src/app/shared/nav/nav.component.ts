import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
@Input() item1!:string
@Input() item2!:string
@Input() item3!:string
@Input() route1!:string
@Input() navData:Array<{title:string,route:string}>= []
  constructor(){}

  ngOnInit():void{
    
  }

}
