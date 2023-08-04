import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicRenderingComponent } from "./components/dynamic-rendering/dynamic-rendering.component";
import {LazyRenderIntersectionComponent} from "./components/lazy-render-intersection/lazy-render-intersection.component";
import {ScrollAnimationComponent} from "./components/scroll-animation/scroll-animation.component";
import {UnitTestComponent} from "./components/unit-test/unit-test.component";

const routes: Routes = [
  // { path: '', component: LoginComponent, canActivate: [AlreadyLoggedInGuard, SSOGuard], title: PageTitle.LoginPage },
  // { path: 'login', component: LoginComponent, canActivate: [AlreadyLoggedInGuard], title: PageTitle.LoginPage  },
  {
    path: 'dynamic',
    component: DynamicRenderingComponent,
  },
  {
    path: 'intersection',
    component: LazyRenderIntersectionComponent,
  },
  {
    path: 'scroll_demo',
    component: ScrollAnimationComponent,
  },
  {
    path: 'test',
    component: UnitTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
