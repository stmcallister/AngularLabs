import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeService } from './joke.service';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';
import { VoteComponent } from './vote/vote.component';

const appRoutes: Routes = [
  { path: 'jokes', component: JokeListComponent },
  { path: 'jokes/:jokeId', component: JokeDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'jokes' }
];

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeDetailComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }



