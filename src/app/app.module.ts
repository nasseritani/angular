import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { DBServiceService } from './dbService.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PostService } from './post.service';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TemplateBindingComponent } from './templateBinding/templateBinding.component';
import { TwoWayComponent } from './twoWay/twoWay.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PipeComponent } from './pipe/pipe.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { HttpComponent } from './http/http.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
   declarations: [
      AppComponent,
      MyComponentComponent,
      TemplateBindingComponent,
      TwoWayComponent,
      FavoriteComponent,
      PipeComponent,
      CoursesComponent,
      LoginComponent,
      HttpComponent
   ],
   imports: [
   BrowserModule,
      FormsModule,
      AngularFontAwesomeModule,
      ReactiveFormsModule,
      HttpModule,
      AppRoutingModule
   ],
   providers: [
      DBServiceService,
      PostService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
