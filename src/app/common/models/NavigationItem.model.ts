export class NavigationItemModel {
  label: string;
  title: string;
  hasSub?: boolean;
  routerLink?: string;
  subItems?:NavigationItemModel[];
}
