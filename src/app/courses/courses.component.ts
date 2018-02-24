import { Component, ViewChild, OnInit } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  implements OnInit {
selected:number=0;

tabs: any[] = [
  { title: 'Course 01', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, labore, magni illum nemo ipsum quod voluptates ab natus nulla possimus incidunt aut neque quaerat mollitia perspiciatis assumenda asperiores consequatur soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, labore, magni illum nemo ipsum quod voluptates ab natus nulla possimus incidunt aut neque quaerat mollitia perspiciatis assumenda asperiores consequatur soluta.',active:true },
  { title: 'Course 02', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, labore, magni illum nemo ipsum quod voluptates ab natus nulla possimus incidunt aut neque quaerat mollitia perspiciatis assumenda asperiores consequatur soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, labore, magni illum nemo ipsum quod voluptates ab natus nulla possimus incidunt aut neque quaerat mollitia perspiciatis assumenda asperiores consequatur soluta.' },
  { title: 'Course 03', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, labore, magni illum nemo ipsum quod voluptates ab natus nulla possimus incidunt aut neque quaerat mollitia perspiciatis assumenda asperiores consequatur soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, labore, magni illum nemo ipsum quod voluptates ab natus nulla possimus incidunt aut neque quaerat mollitia perspiciatis assumenda asperiores consequatur soluta.' }
];
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
 
  constructor() {
    $('html').removeClass("fp-enabled")
    $("#fp-nav").remove()
   }

  ngOnInit() {
   
  }

  selectedTab(selectedTab:number){
    this.selected=selectedTab;
  }

  prev(){
    if(this.selected==0){
      this.selected=(this.tabs.length-1);
    }else{
      this.selected--;
    }
    
    this.selectTab(this.selected);
  }

  next(){
    if(this.selected==(this.tabs.length-1)){
      this.selected=0;
    }else{
      this.selected++;
    }
    
    this.selectTab(this.selected);
  }

  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }



}
