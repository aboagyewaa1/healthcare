import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent implements OnInit {
  @Input() doctors:Doctor[]=[
    {name: "Bertina Ayuure",
    specialization: "Gynaecology",
    email: "ayuure56@gmail.com",
    photo:"../../../../assets/images/pinky.png"
  },
  {name: "Bertina Ayuure",
  specialization: "Gynaecology",
  email: "ayuure56@gmail.com",
  photo:"../../../../assets/images/pinky.png"
},
{name: "Bertina Ayuure",
specialization: "Gynaecology",
email: "ayuure56@gmail.com",
photo:"../../../../assets/images/pinky.png"
},
{name: "Bertina Ayuure",
specialization: "Gynaecology",
email: "ayuure56@gmail.com",
photo:"../../../../assets/images/pinky.png"
},
{name: "Bertina Ayuure",
specialization: "Gynaecology",
email: "ayuure56@gmail.com",
photo:"../../../../assets/images/pinky.png"
},
{name: "Bertina Ayuure",
specialization: "Gynaecology",
email: "ayuure56@gmail.com",
photo:"../../../../assets/images/pinky.png"
},
{name: "Bertina Ayuure",
specialization: "Gynaecology",
email: "ayuure56@gmail.com",
photo:"../../../../assets/images/pinky.png"
}
  ]

  constructor(){}

  ngOnInit(): void {
      
  }

}
