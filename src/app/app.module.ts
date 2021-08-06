import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_GB } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
// add Transform Angular Core materials
import { TfNgCoreModule } from 'tf-ng-core';
//
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTreeModule } from 'ng-zorro-antd/tree';
//
import { HeaderComponent } from './header/header.component';

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
import { ThDashboardComponent } from './example/tennantHub/th-dashboard/th-dashboard.component';
import { ThUsersComponent } from './example/tennantHub/th-users/th-users.component';

import { GetLastLoginPipe } from './common/pipes/get-last-login.pipe';
import { GetUsersFullNamePipe } from './common/pipes/get-users-full-name.pipe';
import { GetUsersAccessPipe } from './common/pipes/get-users-access.pipe';
import { GetPaginationMessagePipe } from './common/pipes/get-pagination-message.pipe';
import { GetScorePipe } from './common/pipes/get-score.pipe'


import { ThUserDetailComponent } from './example/tennantHub/th-user-detail/th-user-detail.component';


import { RouteDataService } from './appServices/route-data.service';
import { LmsDashboardComponent } from './example/lms/lms-dashboard/lms-dashboard.component';
import { LmsRegistrationsComponent } from './example/lms/lms-registrations/lms-registrations.component';
import { GetRegistrationStatusPipe } from './common/pipes/get-registration-status.pipe';
import { GetSecondsToHMSPipe } from './common/pipes/get-seconds-to-h-m-s.pipe';
import { CalendarComponent } from './elements/calendar/calendar.component';
import { TfAppHeaderComponent } from './tf/tf-app-header/tf-app-header.component';
import { TfAppSideDrawerComponent } from './tf/tf-app-side-drawer/tf-app-side-drawer.component';
import { ModalComponent } from './displays/modal/modal.component';
import { MessagesComponent } from './displays/messages/messages.component';
import { ModalContentComponent } from './displays/modal/modal-content/modal-content.component';
import { NoDataComponent } from './layout/no-data/no-data.component';
import { PlaygroundComponent } from './example/playground/playground.component';
import { StatGridComponent } from './example/playground/stat-grid/stat-grid.component';
import { TreeComponent } from './layout/tree/tree.component';
import { NumberInputComponent } from './forms/number-input/number-input.component';


registerLocaleData(en);

// potentially config a few things out...
const ngZorroConfig: NzConfig = {};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    ThDashboardComponent,
    ThUsersComponent,
    GetLastLoginPipe,
    GetUsersFullNamePipe,
    GetUsersAccessPipe,
    GetPaginationMessagePipe,
    ThUserDetailComponent,
    LmsDashboardComponent,
    LmsRegistrationsComponent,
    GetScorePipe,
    GetRegistrationStatusPipe,
    GetSecondsToHMSPipe,
    CalendarComponent,
    TfAppHeaderComponent,
    TfAppSideDrawerComponent,
    ModalComponent,
    MessagesComponent,
    ModalContentComponent,
    NoDataComponent,
    PlaygroundComponent,
    StatGridComponent,
    TreeComponent,
    NumberInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
    HttpClientModule,
		BrowserAnimationsModule,
		TfNgCoreModule,
		NzGridModule,
		NzBreadCrumbModule,
		NzDividerModule,
		NzIconModule,
		NzFormModule,
		NzInputModule,
    NzInputNumberModule,
		NzAutocompleteModule,
    NzCheckboxModule,
    NzRadioModule,
    NzSwitchModule,
		NzDatePickerModule,
		NzSelectModule,
		NzUploadModule,
		NzButtonModule,
    NzDropDownModule,
    NzCalendarModule,
		NzListModule,
		NzTableModule,
		NzTabsModule,
		NzToolTipModule,
		NzCarouselModule,
		NzModalModule,
    NzMessageModule,
    NzEmptyModule,
    NzTreeModule
  ],
  providers: [
    // { provide: NZ_CONFIG, useValue: ngZorroConfig },
		{ provide: NZ_I18N, useValue: en_GB },
		RouteDataService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
