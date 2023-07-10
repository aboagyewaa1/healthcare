import { Component, Input, OnInit } from '@angular/core';
import { Slides } from '../slides.model';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  animations:[
    trigger('carousel',[
      transition('void => *', [
        style({ opacity: 0}),
        animate('300ms', style({ opacity: 1}))
      ]),
      transition('* => void', [
        animate('300ms', style({opacity : 0}))
      ])
    ])
  ]
})
export class ReviewsComponent implements OnInit{
@Input() slides:Slides[]= [
  {src:"../../../assets/images/profile.jpg",
  name: "Yaw Antwi",
  occupation: "Carpenter",
  message:"Thanks to Ayeboafo, I am able to connect with trusted health professionals remotely for medical assistance"
},
{src:"../../../assets/images/profile.jpg",
name: "Akosua Kankam",
occupation: "Seamstress",
message: "I can't thank this health app enough for transforming my life. It has become an integral part of my daily routine."


}
]


currentSlide = 0

  constructor(){}

  ngOnInit(): void {
      
  }

  onPreviousClick(){
    const previous = this.currentSlide - 1 ;
    this.currentSlide = previous < 0 ? this.slides.length -1 : previous
    console.log('previous')
  }

  onNextClick(){
    const next = this.currentSlide + 1 ;
    this.currentSlide = next === this.slides.length ? 0 : next
    console.log('next')
  }

}
