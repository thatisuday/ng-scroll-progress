# Angular Scroll Progress
Angular progress bar for amount of page scrolled


![bower](https://img.shields.io/bower/v/ng-scroll-progress.svg?style=flat-square) [![npm downloads](https://img.shields.io/npm/dt/ng-scroll-progress.svg?style=flat-square)](https://www.npmjs.com/package/ng-scroll-progress) [![preview](https://img.shields.io/badge/preview-click here-green.svg?style=flat-square)](https://rawgit.com/thatisuday/ng-scroll-progress/master/demo/main.html)

***

## Install

#### bower
```
bower install --save ng-scroll-progress
```

#### npm install
```
npm install --save ng-scroll-progress
```

> include `ng-scroll-progress.js` and `ng-scroll-progress.css` below `angular.js`

> add `thatisuday.ng-scroll-progress` to your app's dependencies

***

## Configure

You can change background color of progress bar in `config` block as below
```
angular
.module('demo', ['thatisuday.ng-scroll-progress'])
.config(function($scrollProgressOpsProvider){
	$scrollProgressOpsProvider.setOps({
		background: '#2196f3',
	});
})
```

***

## Set scroll watch element
```
<div ng-scroll-element></div>
```

`ng-scroll-element` attribute helps progress bar to change as it moves up and down in viewport. See preview for demo.