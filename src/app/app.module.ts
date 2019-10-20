import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsComponent } from './cv/details/details.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { MiniWordComponent } from './tp2/mini-word/mini-word.component';
import {FormsModule} from '@angular/forms';
import { ArcEnCielComponent } from './tp2/arc-en-ciel/arc-en-ciel.component';
import { ArcEnCielDirective } from './tp2/arc-en-ciel/arc-en-ciel.directive';
import { ThemesComponent } from './tp2/themes/themes.component';


@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    DetailsComponent,
    ItemComponent,
    ListComponent,
    DefaultImagePipe,
    MiniWordComponent,
    ArcEnCielComponent,
    ArcEnCielDirective,
    ThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
