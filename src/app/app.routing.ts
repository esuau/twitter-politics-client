import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { AuthComponent } from './components/auth/auth.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/feed", pathMatch: "full" },
  { path: "feed", component: FeedComponent },
  { path: "auth", component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
