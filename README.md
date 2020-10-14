# MarketplaceBooking

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## ADD NG-ZORRO

In an existing angular project, install the zorro components

`ng add ng-zorro-antd`

During installation, there are a number of config questions that aid setup, these are the answers that have been selected for this setup;

	1. Enable icon dynamic loading [ Detail: https://ng.ant.design/components/icon/en ] `Yes`

	2. Set up custom theme file [ Detail: https://ng.ant.design/docs/customize-theme/en ] `Yes`

	3. Choose your locale code: `en_GB`

	4. Choose template to create project: `blank`



Once the zorro coponents are installed, you can then start the server

`ng serve --port 0 --open`

## ADD Zorro styles / Transform theme

First, we create some global styles for our theme and add the  transform font 'Roboto Condensed'

Add the Roboto condensed font to index.html

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@100;300;400;700;900&display=swap" rel="stylesheet">
```

Add the global styles to the styles.css

```css
html {
	box-sizing: border-box;
}
*, *:before, *:after {
	box-sizing: inherit;
}
body {
	padding: 0;
	margin: 0;
	font-family: 'Roboto Condensed', sans-serif;
	background-color: #224595;
	width: 100%;
	height: 100vh;
}
```

When we were adding the zorro components (`ng add ng-zorro-antd`) it asked us if we wanted to add a theme. Answering yes exposed `src/theme.less`. 

Even if we initially created our angular project with basic css, Zorro will still display a `less` file as it is built upon less. In `src/theme.less` we need to add the variables and the overriding styles that make the zorro components look and feel like they belong to Transform.

replace all that is in the `src/theme.less` with this....

...to do, get a link for the styles


## ADD TF-NG-CORE

To help out the zorro components and achieve the Transform UI, we need to add a library of prebuilt Angular components. 

Install the Transform Angular Components [tf-ng-core](https://www.npmjs.com/package/tf-ng-core)  from npm

`npm i tf-ng-core`

add to the app.module.ts imports;

`import { TfNgCoreModule } from 'tf-ng-core';`

and then finally ads `TfNgCoreModule` to the NgModule imports list

## POLYFILLS 

To get the application working in IE 11, we need to follow the angular standar procedure and alter the shipped/default polyfill.ts.

`src/polyfill.ts`

1. Uncomment `import 'classlist.js';` (roughly line:22)
2. Run `npm install --save classlist.js`
3. Uncomment `import 'web-animations-js';` (roughly line:29)
4. Run `npm install --save web-animations-js`
5. Ensure `import 'zone.js/dist/zone';` is uncommented (roughly line:58)

Test a production build, `ng build --prod`

Once built and tested in IE11, there maybe a few additional tweaks needed to get it going, depending on your angular versions and build scripts etc...

One of this is installing [core-js](https://github.com/zloirock/core-js) 

`npm i core-js`

and then adding it entirely to the polyfil.ts or adding just the parts you require;

all:

```javascript
import 'core-js';
```

or seperate polyfils, eg:

```javascript
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/weak-map';
import 'core-js/es6/set';
import 'core-js/es6/array';
```

Note
> In the past, i have also had to experiment with core-js version and also the dev dependancy angular-devkit/build-angular version in package.json. This doesn't seem necessary anymore but it is worth noting that if you do run into trouble it is always worth searching for the errors that are printed out and matching them up to package versions

Finally, with angular 10 I found that an additional nodeList polyfil is required after new errors were printed out in the console after updating. These errors were to do with a [forEach](https://gist.github.com/bob-lee/e7520bfcdac266e5490f40c2759cc955) which basically is slotted in the browser polyfils...

```javascript
if ('NodeList' in window && !NodeList.prototype.forEach) {
	console.info('polyfill for IE11');
	NodeList.prototype.forEach = function (callback, thisArg) {
		 thisArg = thisArg || window;
		 for (var i = 0; i < this.length; i++) {
				callback.call(thisArg, this[i], i, this);
		 }
	};
}
```
---

ng serve --port 0 --open

---
