import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicRenderingComponent } from './components/dynamic-rendering/dynamic-rendering.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { LazyRenderIntersectionComponent } from './components/lazy-render-intersection/lazy-render-intersection.component';
import { ScrollAnimationComponent } from './components/scroll-animation/scroll-animation.component';
import { UnitTestComponent } from './components/unit-test/unit-test.component';
import { SearchComponent } from './components/search/search.component';
import { CustomTooltipComponent } from './components/shared/custom-tooltip/custom-tooltip.component';
import { CustomTooltipDirective } from "./components/shared/custom-tooltip.directive";
import { OverlayModule } from "@angular/cdk/overlay";

const MATERIAL_SHARED_MODULES = [
  MatToolbarModule, MatButtonModule, MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    DynamicRenderingComponent,
    LazyRenderIntersectionComponent,
    ScrollAnimationComponent,
    UnitTestComponent,
    SearchComponent,
    CustomTooltipComponent,
    CustomTooltipDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    OverlayModule,
    ...MATERIAL_SHARED_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
