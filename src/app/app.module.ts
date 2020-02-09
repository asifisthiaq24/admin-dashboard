import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './login/login.component';
// import { CommonLayoutModule } from './layouts/common-layout/common-layout.module';
// import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';


@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent,
    HomeComponent,
    PostsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FullwidthComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// FullwidthModule,
// CommonLayoutModule
