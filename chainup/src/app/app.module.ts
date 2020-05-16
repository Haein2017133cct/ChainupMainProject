import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageAddComponent } from './message-add/message-add.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  {
    path: '',
    component: MessageAddComponent,
    data: { title: 'adding message' }
  },
   

  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];




@NgModule({
  declarations: [
    AppComponent,
    MessageAddComponent

  ],
  imports: [
 
    HttpClientModule,
    BrowserModule,
     AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    { enableTracing:true, useHash: true } // <-- debugging purposes only
  )
  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




