// module
angular.module('thatisuday.ng-scroll-progress', []);

// directive
angular
.module('thatisuday.ng-scroll-progress')
.directive('ngScrollProgress', ['$rootScope', '$scrollProgressOps', function($rootScope, $scrollProgressOps){
	return {
		restrict : 'E',
		scope : {},
		priority: 1000,
		template : '<div id="scroll-progress" style="width: {{ width + \'%\'}}; background : {{background}}" ng-show="visible"></div>',
		replace : true,
		link : function(scope, elem, attr){
			var
				background 		= 	$scrollProgressOps.background
			;

			/******************************************************************************/
			
			scope.visible = false;
			scope.width = 0;
			scope.background = background;

			/******************************************************************************/
			
			// show progress bar
			$rootScope.$on('$scrollProgressOn', function(){
				scope.visible = true;
			});

			// increment progress bar
			$rootScope.$on('$scrollProgress', function(event, width){
				scope.width = width;
			});

			// hide progress bar
			$rootScope.$on('$scrollProgressOff', function(){
				scope.visible = false;
			});
		}
	}
}])
;

angular
.module('thatisuday.ng-scroll-progress')
.directive('ngScrollElement', ['$rootScope', '$timeout', '$window', function($rootScope, $timeout, $window){
	return {
		restrict : 'A',
		priority: 999,
		link : function(scope, elem, attr){
			$timeout(function(){
				$rootScope.$emit('$scrollProgressOn');

				var $elem = jQuery(elem[0]);
				var elemOffsetTop = $elem.offset().top;
				var elemHeight = $elem.outerHeight();
				var windowHeight = window.innerHeight;

				// $(window).scrollTop() >= elemHeight // top started
				// $(window).scrollTop() >= elemOffsetTop + elemHeight - windowHeight // bottom reached

				$(window).bind('scroll', function() {
					if($(window).scrollTop() >= elemOffsetTop){
						var percentage =  ($(window).scrollTop() - elemOffsetTop) / (elemHeight - windowHeight);
						percentage = Math.round(percentage * 100);
						percentage = (percentage > 100) ? 100 : percentage;

						$timeout(function(){
							$rootScope.$emit('$scrollProgress', percentage);
						});
					}
					else{
						$timeout(function(){
							$rootScope.$emit('$scrollProgress', 0);
						});
					}
				});
			});
		}
	}
}])
;

// provider
angular
.module('thatisuday.ng-scroll-progress')
.provider('$scrollProgressOps', function(){
	var defOps = {
		background 	: '#b91f1f'
	};

	return {
		setOps : function(newOps){
			angular.extend(defOps, newOps);
		},
		$get : function(){
			return defOps;
		}
	}
});

// run
angular
.module('thatisuday.ng-scroll-progress')
.run(['$document', function($document){
	if($document.find('#scroll-progress').length == 0){
		$document.find('body').append('<ng-scroll-progress></ng-scroll-progress>');
	}
}])
;