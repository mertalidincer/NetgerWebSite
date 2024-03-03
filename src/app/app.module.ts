import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ArticleWithMediaComponent } from './article-with-media/article-with-media.component';
import { TagsBarComponent } from './tags-bar/tags-bar.component';
import { CardsComponent } from './cards/cards.component';
import { HorizonToolCardsComponent } from './horizon-tool-cards/horizon-tool-cards.component';
import { GridGaleryComponent } from './grid-galery/grid-galery.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    BannerComponent,
    NavigationBarComponent,
    ArticleWithMediaComponent,
    TagsBarComponent,
    CardsComponent,
    HorizonToolCardsComponent,
    GridGaleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
