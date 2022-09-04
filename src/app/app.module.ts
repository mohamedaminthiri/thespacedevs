import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { DetailLancementComponent } from './composants/detail-lancement/detail-lancement.component';
import { PageErreurComponent } from './composants/page-erreur/page-erreur.component';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { InitialState, initialState } from './store/reducer';

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
export class AppModule {
  constructor(ngRedux: NgRedux<InitialState>) {
    ngRedux.configureStore(initialState);
  }
}
