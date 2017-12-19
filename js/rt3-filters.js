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
}).filter('formatNameForLink', function () {
    return function (value) {
        var retString = String(value).toLowerCase();
        retString = retString.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); // replace leading and trailing spaces
        retString = retString.replace('%', 'percent');
        retString = retString.replace(/[^A-Z0-9]+/ig, "-");
        retString = retString.replace(/^--s*/, '').replace(/--*$/, ''); // replace leading and trailing hyphen
        return (!value) ? '' : retString;
    };
}).filter('addDayInDate', function () {
    return function (value, days) {
        var newDate, retDate;
        if(value) {
            newDate = new Date(value);
            retDate = new Date(newDate.setDate(newDate.getDate() +days));
            retDate = retDate.toISOString().slice(0,10)
        }
        return (!value) ? '' : retDate;
    };
}).filter('ifOldRetTodayDate', function () {
    return function (value, leadDay) {
        var newDate, retDate, today = new Date();
        if(value) {
            newDate = new Date(value);
            if(newDate < today) {
                today   = leadDay != null ? new Date(today.setDate(today.getDate() + leadDay)) : today;
                retDate = today.toISOString().slice(0,10) ;
            } else {
                retDate = value;
            }

        }
        return (!value) ? '' : retDate;
    };
});
