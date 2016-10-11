angular
.module('thatisuday.ng-scroll-progress')
.directive('ngScrollElement', ['$rootScope', '$timeout', '$window', '$scrollProgressOps', function($rootScope, $timeout, $window, $scrollProgressOps){
	return {
		restrict : 'A',
		priority: 999,
		link : function(scope, elem, attr){
			var domElem = elem[0];
			var elemOffsetTop = domElem.offsetTop;
			var elemHeight = domElem.offsetHeight;
			var windowHeight = window.innerHeight;

			angular.element($window).bind('scroll', function() {
				var scrollTop = document.body.scrollTop;

				if(scrollTop >= elemOffsetTop){
					var percentage =  (scrollTop - elemOffsetTop) / (elemHeight - windowHeight);
					percentage = Math.round(percentage * 100);
					percentage = (percentage > 100) ? 100 : percentage;

					document.getElementById('scroll-progress').style.width = percentage + '%';
				}
				else{
					document.getElementById('scroll-progress').style.width = '0%';
				}

				// set background color of bar
				document.getElementById('scroll-progress').style.background = $scrollProgressOps.background;
			});
		}
	}
}])
;