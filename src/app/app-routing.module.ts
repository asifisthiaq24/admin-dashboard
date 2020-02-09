import { NgModule } from '@angular/core';
import "@angular/compiler"; // ei line er jonno error khassilo
import { Routes, RouterModule } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './login/login.component';

//const routes: Routes = [];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin-dashboard' },
  {
  path: 'admin-dashboard',
  component: CommonLayoutComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }]
}

  , {
  path: 'admin-dashboard',
  component: FullwidthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// ,
//   , {
//   path: '',
//   component: FullwidthComponent,
//   children: [
//     {
//       path: 'login',
//       component: LoginComponent
//     }
//   ]
// }