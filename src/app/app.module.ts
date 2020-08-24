import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_GB } from 'ng-zorro-antd';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { TfNgCoreModule } from 'tf-ng-core'
import { NzButtonModule } from 'ng-zorro-antd/button';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OneComponent } from './example/one/one.component';
import { TwoComponent } from './example/two/two.component';
import { BrowserIconsComponent } from './design-system/browser-icons/browser-icons.component';
import { ColourPalleteComponent } from './design-system/colour-pallete/colour-pallete.component';
import { ProductLogosComponent } from './design-system/product-logos/product-logos.component';
import { TypographyComponent } from './design-system/typography/typography.component';
import { InputsComponent } from './forms/inputs/inputs.component';
import { CardsComponent } from './layout/cards/cards.component';
import { TablesComponent } from './layout/tables/tables.component';
import { ListsComponent } from './layout/lists/lists.component';
import { TabsComponent } from './layout/tabs/tabs.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    OneComponent,
    TwoComponent,
    BrowserIconsComponent,
    ColourPalleteComponent,
    ProductLogosComponent,
    TypographyComponent,
    InputsComponent,
    CardsComponent,
    TablesComponent,
    ListsComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
		FormsModule,
		ReactiveFormsModule,
    HttpClientModule,
		BrowserAnimationsModule,
		TfNgCoreModule,
		NzButtonModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_GB }],
  bootstrap: [AppComponent]
})
export class AppModule { }
