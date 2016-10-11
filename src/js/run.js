// run
angular
.module('thatisuday.ng-scroll-progress')
.run(['$document', function($document){
	if($document.find('#scroll-progress').length == 0){
		$document.find('body').append('<div id="scroll-progress"></div>');
	}
}])
;