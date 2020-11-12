import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuickLinkItemModel } from './common/models/QuickLinkItem.model'

// forms
import { InputsComponent } from './forms/inputs/inputs.component';
import { FileSelectComponent } from './forms/file-select/file-select.component'
import { DatePickerComponent } from './forms/date-picker/date-picker.component'
import { FormElementsComponent } from './forms/form-elements/form-elements.component'
import { LoginComponent } from './forms/login/login.component'
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component'

// elements
import { PageTitleBreadcrumbsComponent } from './elements/page-title-breadcrumbs/page-title-breadcrumbs.component'
import { AppHeaderComponent } from './elements/app-header/app-header.component'
import { ButtonsComponent } from './elements/buttons/buttons.component'
import { IconsComponent } from './elements/icons/icons.component'
import { StatsComponent } from './elements/stats/stats.component'
import { DropdownsComponent } from './elements/dropdowns/dropdowns.component'
import { CalendarComponent } from './elements/calendar/calendar.component'

// layouts
import { CardsComponent } from './layout/cards/cards.component';
import { ListsComponent } from './layout/lists/lists.component';
import { TablesComponent } from './layout/tables/tables.component';
import { TabsComponent } from './layout/tabs/tabs.component';

// examples
import { OneComponent } from './example/one/one.component';
import { TwoComponent } from './example/two/two.component';

// Design Sustem
import { TypographyComponent } from './design-system/typography/typography.component';
import { ColourPalleteComponent } from './design-system/colour-pallete/colour-pallete.component';
import { ProductLogosComponent } from './design-system/product-logos/product-logos.component';
import { BrowserIconsComponent } from './design-system/browser-icons/browser-icons.component';

// Products
// TH Tennant Hub
import { ThDashboardComponent } from './example/tennantHub/th-dashboard/th-dashboard.component';
import { ThUsersComponent } from './example/tennantHub/th-users/th-users.component';
import { ThUserDetailComponent } from './example/tennantHub/th-user-detail/th-user-detail.component';
// LMS Learning Management
import { LmsDashboardComponent } from './example/lms/lms-dashboard/lms-dashboard.component';
const routes: Routes = [
	{
		path: '',
		component: OneComponent,
		data: {}
	},
	{
		path: 'one',
		component: OneComponent,
		data: {}
	},
	{
		path: 'two',
		component: TwoComponent,
		data: {}
	},
	{ path: 'modals', component: TwoComponent, data:{} },

	{ path: 'inputs', component: InputsComponent, data:{} },
	{ path: 'file-select', component: FileSelectComponent, data:{} },
	{ path: 'date-picker', component: DatePickerComponent, data:{} },
	{ path: 'form-elements', component: FormElementsComponent, data:{} },
	{ path: 'login', component: LoginComponent, data:{
		appTitle : 'Transform',
		appCode : 't',
		isLogoClickable:false,
    showAppLogo:true,
    quickLinks:[]
	}},
	{ path: 'reactive-form', component: ReactiveFormComponent, data:{} },
	// { path: 'decoupled-login', component: TwoComponent },
	// { path: 'reactive-login', component: TwoComponent },


	{ path: 'header', component: AppHeaderComponent, data:{} },
	{ path: 'title-breadcrumbs', component: PageTitleBreadcrumbsComponent, data:{} },
	{ path: 'buttons', component: ButtonsComponent, data:{}},
	{ path: 'icons', component: IconsComponent, data:{} },
	{ path: 'stats', component: StatsComponent, data:{} },
  { path: 'dropdowns', component: DropdownsComponent, data:{} },
  { path: 'calandar', component: CalendarComponent, data:{} },


	{ path: 'statuses', component: TwoComponent, data:{} },
	{ path: 'search', component: TwoComponent, data:{} },
	{ path: 'modals', component: TwoComponent, data:{} },
	{ path: 'alerts', component: TwoComponent, data:{} },
	{ path: 'layouts', component: TwoComponent, data:{} },

	{ path: 'cards', component: CardsComponent, data:{} },
	{ path: 'tables', component: TablesComponent, data:{} },
	{ path: 'lists', component: ListsComponent, data:{} },
	{ path: 'tabs', component: TabsComponent, data:{} },

	{ path: 'nodes', component: TwoComponent, data:{} },
	{ path: 'node-flex', component: TwoComponent, data:{} },
	{ path: 'node-row', component: TwoComponent, data:{} },


	{ path: 'example-one', component: TwoComponent, data:{} },
	{ path: 'example-two', component: TwoComponent, data:{} },
	{ path: 'example-three', component: TwoComponent, data:{} },
	{ path: 'example-four', component: TwoComponent, data:{} },
	{ path: 'product-hub', component: TwoComponent, data:{} },
	{ path: 'ngform', component: TwoComponent, data:{} },

	// Design system
	{ path: 'typography', component: TypographyComponent, data:{} },
	{ path: 'colour-pallete', component: ColourPalleteComponent, data:{} },
	{ path: 'product-logos', component: ProductLogosComponent, data:{} },
	{ path: 'browser-icons', component: BrowserIconsComponent, data:{} },

	//Product examples
	// TH
	{ path: 'th', component: ThDashboardComponent, data: {
		appTitle : 'Welcome to your Transform Platform',
		appCode : 'T',
		isLogoClickable:true,
		showAppLogo:true,
    clientLogoSrc:'https://www.3t-transform.com/wp-content/uploads/2019/09/Transform.png',
    quickLinks:  [
      {
        value:"qlAddUser",
        title:"Add User",
        routePaths:["th", "users"]
      }
    ]}
	},
	{ path: 'th/dashboard', component: ThDashboardComponent, data: {
		appTitle : 'Welcome to your Transform Platform',
		appCode : 'T',
		isLogoClickable:true,
		showAppLogo:true,
    clientLogoSrc:'https://www.3t-transform.com/wp-content/uploads/2019/09/Transform.png',
    quickLinks:  [
      {
        value:"qlAddUser",
        title:"Add User",
        routePaths:["th", "users"]
      }
    ]}
	},
	{ path: 'th/users', component: ThUsersComponent, data: {
		appTitle : 'Tennant Hub',
		appCode : 'T',
		isLogoClickable:true,
		showAppLogo:true,
    clientLogoSrc:'https://www.3t-transform.com/wp-content/uploads/2019/09/Transform.png',
    quickLinks:  [
      {
        value:"qlAddUser",
        title:"Add User",
        routePaths:["th", "users"]
      }
    ]}
	},
	{ path: 'th/user/:id', component: ThUserDetailComponent, data: {
		appTitle : 'Tennant Hub',
		appCode : 'T',
		isLogoClickable:true,
		showAppLogo:true,
    clientLogoSrc:'https://www.3t-transform.com/wp-content/uploads/2019/09/Transform.png',
    quickLinks:  [
      {
        value:"qlAddUser",
        title:"Add User",
        routePaths:["th", "users"]
      }
    ]}
	},
	// LMS
	{ path: 'lms', component: LmsDashboardComponent, data: {
		appTitle : 'Learning Management',
		appCode : 'lm',
		isLogoClickable:true,
		showAppLogo:true,
		clientLogoSrc:'https://www.3t-transform.com/wp-content/uploads/2019/09/Transform.png'
	}},
	{ path: 'lms/dashboard', component: LmsDashboardComponent, data: {
		appTitle : 'Learning Management',
		appCode : 'lm',
		isLogoClickable:true,
		showAppLogo:true,
		clientLogoSrc:'https://www.3t-transform.com/wp-content/uploads/2019/09/Transform.png'
	}},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
