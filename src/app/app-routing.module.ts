import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// forms
import { InputsComponent } from './forms/inputs/inputs.component';

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
	{ path: 'file-select', component: TwoComponent },
	{ path: 'form-elements', component: TwoComponent },
	{ path: 'login', component: TwoComponent },
	{ path: 'decoupled-login', component: TwoComponent },
	{ path: 'reactive-login', component: TwoComponent },
	{ path: 'header', component: TwoComponent },
	{ path: 'title-breadcrumbs', component: TwoComponent },
	{ path: 'buttons', component: TwoComponent },
	{ path: 'icons', component: TwoComponent },
	{ path: 'stats', component: TwoComponent },
	{ path: 'dropdowns', component: TwoComponent },
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
	{ path: 'reactive-form', component: TwoComponent },
	// Design system
	{ path: 'typography', component: TypographyComponent },
	{ path: 'colour-pallete', component: ColourPalleteComponent },
	{ path: 'product-logos', component: ProductLogosComponent },
	{ path: 'browser-icons', component: BrowserIconsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
