import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranscriptionModule } from './transcription/transcription.module';
import { AppRoutingRoutingModule as AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HttpErrorInterceptor } from './core/http-error.interceptor';
import { CoreModule } from './core/core.module';
import { SynthesizeModule } from './synthesize/synthesize.module';
import { MainEntryComponent } from './main-entry/main-entry.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, MainEntryComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranscriptionModule,
    SynthesizeModule,
    AuthModule,
    AppRoutingModule,
    CoreModule,
    CarouselModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
