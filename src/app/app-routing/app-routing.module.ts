import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { HomeComponent } from '../home/home.component'
    import{SigninUpComponent} from '../signin-up/signin-up.component';
    import{CoursesComponent} from '../courses/courses.component';


    const routes: Routes = [
      {
          path: '',
          component: HomeComponent,
          pathMatch: 'full'
      },
      {
        path: 'signinup',
        component: SigninUpComponent,
        pathMatch: 'full'
    },
    {
      path: 'courses',
      component: CoursesComponent,
      pathMatch: 'full'
  },{
    path: '**',
    component: HomeComponent
  }
  ];

  @NgModule({
      imports: [
          RouterModule.forRoot(routes)
      ],
      exports: [
          RouterModule
      ],
      declarations: []
  })
  export class AppRoutingModule { }
  