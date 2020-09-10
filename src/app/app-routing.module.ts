import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

//
import { ThDashboardComponent } from './example/tennantHub/th-dashboard/th-dashboard.component';
import { ThUsersComponent } from './example/tennantHub/th-users/th-users.component';
import { ThUserDetailComponent } from './example/tennantHub/th-user-detail/th-user-detail.component';
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
	{ path: 'modals', component: TwoComponent },

	{ path: 'inputs', component: InputsComponent },
	{ path: 'file-select', component: FileSelectComponent },
	{ path: 'date-picker', component: DatePickerComponent },
	{ path: 'form-elements', component: FormElementsComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'reactive-form', component: ReactiveFormComponent },
	// { path: 'decoupled-login', component: TwoComponent },
	// { path: 'reactive-login', component: TwoComponent },
	
	
	{ path: 'header', component: AppHeaderComponent },
	{ path: 'title-breadcrumbs', component: PageTitleBreadcrumbsComponent },
	{ path: 'buttons', component: ButtonsComponent},
	{ path: 'icons', component: IconsComponent },
	{ path: 'stats', component: StatsComponent },
	{ path: 'dropdowns', component: DropdownsComponent },
	
	
	{ path: 'statuses', component: TwoComponent },
	{ path: 'search', component: TwoComponent },
	{ path: 'modals', component: TwoComponent },
	{ path: 'alerts', component: TwoComponent },
	{ path: 'layouts', component: TwoComponent },

	{ path: 'cards', component: CardsComponent },
	{ path: 'tables', component: TablesComponent },
	{ path: 'lists', component: ListsComponent },
	{ path: 'tabs', component: TabsComponent },

	{ path: 'nodes', component: TwoComponent },
	{ path: 'node-flex', component: TwoComponent },
	{ path: 'node-row', component: TwoComponent },
	

	{ path: 'example-one', component: TwoComponent },
	{ path: 'example-two', component: TwoComponent },
	{ path: 'example-three', component: TwoComponent },
	{ path: 'example-four', component: TwoComponent },
	{ path: 'product-hub', component: TwoComponent },
	{ path: 'ngform', component: TwoComponent },
	
	// Design system
	{ path: 'typography', component: TypographyComponent },
	{ path: 'colour-pallete', component: ColourPalleteComponent },
	{ path: 'product-logos', component: ProductLogosComponent },
	{ path: 'browser-icons', component: BrowserIconsComponent },

	//Product examples
	{ path: 'th', component: ThDashboardComponent },
	{ path: 'th/dashboard', component: ThDashboardComponent },
	{ path: 'th/users', component: ThUsersComponent },
	{ path: 'th/user/:id', component: ThUserDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
