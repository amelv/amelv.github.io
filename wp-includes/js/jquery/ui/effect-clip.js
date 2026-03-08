/*!
 * jQuery UI Effects Clip 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],t):t(jQuery)}(function(t){"use strict";return t.effects.define("clip","hide",function(e,i){var o={},c=t(this),n=e.direction||"vertical",r="both"===n,f=r||"horizontal"===n,l=r||"vertical"===n,s=c.cssClip();o.clip={top:l?(s.bottom-s.top)/2:s.top,right:f?(s.right-s.left)/2:s.right,bottom:l?(s.bottom-s.top)/2:s.bottom,left:f?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(c),"show"===e.mode&&(c.cssClip(o.clip),o.clip=s),c.animate(o,{queue:!1,duration:e.duration,easing:e.easing,complete:i})})});