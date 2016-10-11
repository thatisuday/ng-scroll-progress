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