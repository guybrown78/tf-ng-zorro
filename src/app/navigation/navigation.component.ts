import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	isOpened:boolean = false;

	navigationData = [
		{
			label:"Forms",
			title:"",
			hasSub:true,
			subItems:[
				{
					routerLink:"/inputs",
					title:"Form input components",
					label:"Input Form Components"
				},
				{
					routerLink:"/file-select",
					title:"File select input components",
					label:"File Select/DragDrop"
				},
				{
					routerLink:"/date-picker",
					title:"Date Picker",
					label:"Date Picker"
				},
				{
					routerLink:"/form-elements",
					title:"Form components",
					label:"Other Form Components"
				},
				// {
				// 	routerLink:"/login",
				// 	title:"Opinionated Login Form",
				// 	label:"Login form"
				// },
				{
					routerLink:"/reactive-form",
					title:"Angular Reactive Form (FormGroup, FormBuilder, Validators)",
					label:"Reactive Form"
				},
			]
		},
		{
			label:"Elements",
			title:"",
			hasSub:true,
			subItems:[
				{
					routerLink:"/header",
					title:"Application header",
					label:"Application Header / Masthead"
				},
				{
					routerLink:"/title-breadcrumbs",
					title:"Page Title and Breadcrumbs",
					label:"Page Title / Breadcrumbs"
				},
				// {
				// 	routerLink:"/buttons",
				// 	title:"Simple button components",
				// 	label:"Buttons"
				// },
				// {
				// 	routerLink:"/icons",
				// 	title:"Available svg icons",
				// 	label:"Icons"
				// },
				// {
				// 	routerLink:"/stats",
				// 	title:"Page statistics cards",
				// 	label:"Statistic Cards"
				// },
				// {
				// 	routerLink:"/dropdowns",
				// 	title:"Simple dropdown components",
				// 	label:"Dropdown"
				// },
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
			subItems:[
				{
					routerLink:"/cards",
					title:"Card layout examples",
					label:"Cards"
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
					label:"Lists"
				},
				{
					routerLink:"/tables",
					title:"Table examples",
					label:"Tables"
				},
				// {
				// 	routerLink:"/tabs",
				// 	title:"Tab examples",
				// 	label:"Tabs"
				// },
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
			subItems:[
				{
					routerLink:"/one",
					title:"",
					label:"Page one"
				},
				{
					routerLink:"/two",
					title:"",
					label:"Page Two"
				},
			]
		},
		{
			label:"Design System",
			title:"",
			hasSub:true,
			subItems:[
				{
					routerLink:"/colour-pallete",
					title:"Colour Pallete",
					label:"Colour Pallete"
				},
				{
					routerLink:"/typography",
					title:"Typography",
					label:"Typography"
				},
				{
					routerLink:"/product-logos",
					title:"Product Logos",
					label:"Product Logos"
				},
				{
					routerLink:"/browser-icons",
					title:"Broswer Icons & Page Titles",
					label:"Broswer Icons & Page Titles"
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
