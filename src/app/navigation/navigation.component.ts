import { Component, OnInit } from '@angular/core';

export class NavigationDataItem{
  label: string
  title: string
  hasSub: boolean | null
  routerLink: string | null
  subItems:NavigationDataItem[] | null
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	isOpened:boolean = false;
  navData:NavigationDataItem[] = [{
    label:"Forms",
    title: "tring",
    hasSub: null,
    routerLink: null,
    subItems: null
  }]
	navigationData:NavigationDataItem[] = [
		{
			label:"Forms",
			title:"",
      hasSub:true,
      routerLink: null,
			subItems:[
				{
					routerLink:"/inputs",
					title:"Form input components",
          label:"Input Form Components",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/file-select",
					title:"File select input components",
					label:"File Select/DragDrop",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/date-picker",
					title:"Date Picker",
					label:"Date Picker",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/form-elements",
					title:"Form components",
					label:"Other Form Components",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/login",
					title:"Opinionated Login Form",
					label:"Login form",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/reactive-form",
					title:"Angular Reactive Form (FormGroup, FormBuilder, Validators)",
					label:"Reactive Form",
          hasSub: null,
          subItems: null
				},
			]
		},
		{
			label:"Elements",
			title:"",
      hasSub:true,
      routerLink: null,
			subItems:[
				{
					routerLink:"/header",
					title:"Application header",
					label:"Application Header / Masthead",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/title-breadcrumbs",
					title:"Page Title and Breadcrumbs",
					label:"Page Title / Breadcrumbs",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/buttons",
					title:"Simple button components",
					label:"Buttons",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/icons",
					title:"Available svg icons",
					label:"Icons",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/stats",
					title:"Page statistics cards",
					label:"Statistic Cards",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/dropdowns",
					title:"Simple dropdown components",
					label:"Dropdown",
          hasSub: null,
          subItems: null
        },

        {
					routerLink:"/calandar",
					title:"Calandar",
					label:"Calandar",
          hasSub: null,
          subItems: null
				},
				// {
				// 	routerLink:"/statuses",
				// 	title:"Status components",
				// 	label:"Status"
				// },
				// {
				// 	routerLink:"/search",
				// 	title:"Search autocomplete components",
				// 	label:"Search Autocomplete"
				// }
			]
		},
		{
			label:"Page Layouts",
			title:"",
      hasSub:true,
      routerLink: null,
			subItems:[
				{
					routerLink:"/cards",
					title:"Card layout examples",
					label:"Cards",
          hasSub: null,
          subItems: null
				},
				// {
				// 	routerLink:"/nodes",
				// 	title:"Nodes elements examples",
				// 	label:"node"
				// },
				// {
				// 	routerLink:"/node-flex",
				// 	title:"Node-flex examples",
				// 	label:"Node-flex"
				// },
				// {
				// 	routerLink:"/node-row",
				// 	title:"Node Responsive Row examples",
				// 	label:"Node Responsive Row"
				// },
				{
					routerLink:"/lists",
					title:"List examples",
					label:"Lists",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/tables",
					title:"Table examples",
					label:"Tables",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/tabs",
					title:"Tab examples",
					label:"Tabs",
          hasSub: null,
          subItems: null
				},
			]
		},
		// {
		// 	routerLink:"/modals",
		// 	title:"Modals pop-up components",
		// 	label:"Modals",
		// 	hasSub:false,
		// 	subItems:null
		// },
		// {
		// 	label:"Feedback",
		// 	title:"",
		// 	hasSub:true,
		// 	subItems:[
		// 		{
		// 			routerLink:"/alerts",
		// 			title:"Feedback - alerts",
		// 			label:"Alerts"
		// 		}
		// 	]
		// },
		{
			label:"Example Pages",
			title:"",
      hasSub:true,
      routerLink: null,
			subItems:[
				{
					routerLink:"/one",
					title:"",
					label:"Page one",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/two",
					title:"",
					label:"Page Two",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/th",
					title:"",
					label:"Tennant Hub (TH)",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/lms",
					title:"",
					label:"Learning Management (LMS)",
          hasSub: null,
          subItems: null
				},
			]
		},
		{
			label:"Design System",
			title:"",
      hasSub:true,
      routerLink: null,
			subItems:[
				{
					routerLink:"/colour-pallete",
					title:"Colour Pallete",
					label:"Colour Pallete",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/typography",
					title:"Typography",
					label:"Typography",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/product-logos",
					title:"Product Logos",
					label:"Product Logos",
          hasSub: null,
          subItems: null
				},
				{
					routerLink:"/browser-icons",
					title:"Broswer Icons & Page Titles",
					label:"Broswer Icons & Page Titles",
          hasSub: null,
          subItems: null
				},
			]
		},
	]
  constructor() { }

  ngOnInit() {
  }
	onItemSelected(){
		this.isOpened = !this.isOpened;
	}
}
