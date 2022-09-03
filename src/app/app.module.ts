import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { DetailLancementComponent } from './composants/detail-lancement/detail-lancement.component';
import { PageErreurComponent } from './composants/page-erreur/page-erreur.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailLancementComponent,
    PageErreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
