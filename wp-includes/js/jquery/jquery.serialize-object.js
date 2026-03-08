/*!
 * jQuery serializeObject - v0.2-wp - 1/20/2010
 * http://benalman.com/projects/jquery-misc-plugins/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
!function(r){r.fn.serializeObject=function(){var a={};return r.each(this.serializeArray(),function(r,e){var i=e.name,n=e.value;a[i]=void 0===a[i]?n:Array.isArray(a[i])?a[i].concat(n):[a[i],n]}),a}}(jQuery);