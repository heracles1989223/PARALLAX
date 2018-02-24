import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-signin-up',
  templateUrl: './signin-up.component.html',
  styleUrls: ['./signin-up.component.css']
})
export class SigninUpComponent implements OnInit {

  constructor() { 
    $('html').removeClass("fp-enabled")
   $("#fp-nav").remove()
    
  }

  ngOnInit() {
  }

}
