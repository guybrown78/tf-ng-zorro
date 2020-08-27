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
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

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
import { PageTitleBreadcrumbsComponent } from './elements/page-title-breadcrumbs/page-title-breadcrumbs.component';
import { AppHeaderComponent } from './elements/app-header/app-header.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { FormElementsComponent } from './forms/form-elements/form-elements.component';
import { FileSelectComponent } from './forms/file-select/file-select.component';
import { DatePickerComponent } from './forms/date-picker/date-picker.component';
import { LoginComponent } from './forms/login/login.component';
import { ButtonsComponent } from './elements/buttons/buttons.component';
import { IconsComponent } from './elements/icons/icons.component';
import { StatsComponent } from './elements/stats/stats.component';
import { ResponsiveExampleComponent } from './elements/stats/responsive-example/responsive-example.component';
import { CoursesComponent } from './example/two/courses/courses.component';
import { DropdownsComponent } from './elements/dropdowns/dropdowns.component';

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
    TabsComponent,
    PageTitleBreadcrumbsComponent,
    AppHeaderComponent,
    ReactiveFormComponent,
    FormElementsComponent,
    FileSelectComponent,
    DatePickerComponent,
    LoginComponent,
    ButtonsComponent,
    IconsComponent,
    StatsComponent,
    ResponsiveExampleComponent,
    CoursesComponent,
    DropdownsComponent,
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
		NzDropDownModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_GB }],
  bootstrap: [AppComponent]
})
export class AppModule { }
