angular.module('rezTrip')
  .filter('isArray', [function() {
    return function(input) {
      return angular.isArray(input);
    };
  }])
.filter('formatpolicydescription', function() {
    return function(text) {
      return  text ? String(text).replace('["', '<p>').replace('"]', '</p>').replace(',',' ') : '';
    }
  }
)
.filter('ampersand', function(){
    return function(input){
        return input ? input.replace(/&amp;/, '&') : '';
    }

})
.filter('spacetohyphen', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/\s+/g, '-');
    };
}).filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/^\s\s*/, '').replace(/\s\s*$/, '');

    };
}).filter('replacePercent', function () {
    return function (value) {
        return (!value) ? '' : String(value).replace('%', 'percent');
    };
}).filter('replacePipe', function () {
    return function (value) {
        return (!value) ? '' : String(value).replace('|', '');
    };

}).filter('renderHTMLCorrectly', function($sce){
	return function(stringToParse)
	{
		return $sce.trustAsHtml(stringToParse);
	}
}).filter('replaceNewline', function () {
    return function (value) {
        return (!value) ? '' : String(value).replace(/\n+/g, '<br>');
    };
});
