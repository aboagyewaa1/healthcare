import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit {

  constructor(private route: Router){}
  ngOnInit(): void {
      
  }

  addNew():void{
    this.route.navigate(['admin/add-doctors'])
  }

}
