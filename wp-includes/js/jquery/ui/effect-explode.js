/*!
 * jQuery UI Effects Explode 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}(function(e){"use strict";return e.effects.define("explode","hide",function(i,t){var o,s,n,f,d,c,a=i.pieces?Math.round(Math.sqrt(i.pieces)):3,l=a,r=e(this),h="show"===i.mode,p=r.show().css("visibility","hidden").offset(),u=Math.ceil(r.outerWidth()/l),v=Math.ceil(r.outerHeight()/a),y=[];function b(){y.push(this),y.length===a*l&&(r.css({visibility:"visible"}),e(y).remove(),t())}for(s=0;s<a;s++)for(f=p.top+s*v,c=s-(a-1)/2,o=0;o<l;o++)d=p.left+o*u,n=o-(l-1)/2,r.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*u,top:-s*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:u,height:v,left:d+(h?n*u:0),top:f+(h?c*v:0),opacity:h?0:1}).animate({left:d+(h?0:n*u),top:f+(h?0:c*v),opacity:h?1:0},i.duration||500,i.easing,b)})});