import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './pages/member/member.component';
import { BukuComponent } from './pages/buku/buku.component';
import { KmformComponent } from './pages/kmform/kmform.component';
import { PublishComponent } from './pages/publish/publish.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'member', component: MemberComponent },
  { path: 'buku', component: BukuComponent },
  { path: 'kmform', component: KmformComponent },
  { path: 'publish', component: PublishComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
