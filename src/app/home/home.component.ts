import { Component, OnInit,Output  } from '@angular/core';
import { MnFullpageOptions } from 'ngx-fullpage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() public options: MnFullpageOptions = new MnFullpageOptions({
    navigation: true,
    keyboardScrolling: true
});
  constructor() { }

  ngOnInit() {
  }

}
