import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from "@angular/common/http";
import {YouTubePlayerModule} from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './components/header.component';
import { SidebarComponent } from './components/sidebar.component';
import { StreamsComponent } from './components/streams.component';
import { RowsComponent } from './components/rows.component'
import { VideoComponent } from './components/video.component'

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent,
    HeaderComponent,
    SidebarComponent,
    StreamsComponent,
    RowsComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
