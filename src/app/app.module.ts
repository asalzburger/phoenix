import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {GeometryComponent} from './geometry/geometry.component';
import {AtlasComponent} from './atlas/atlas.component';
import {SphenixComponent} from './sphenix/sphenix.component';
import {TrackmlComponent} from './trackml/trackml.component';
import {NavComponent} from './nav/nav.component';
import {RouterModule, Routes} from '@angular/router';
import {PlaygroundComponent} from './playground/playground.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'geometry', component: GeometryComponent},
  {path: 'atlas', component: AtlasComponent},
  {path: 'sphenix', component: SphenixComponent},
  {path: 'trackml', component: TrackmlComponent},
  {path: 'playground', component: PlaygroundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeometryComponent,
    AtlasComponent,
    SphenixComponent,
    TrackmlComponent,
    NavComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
