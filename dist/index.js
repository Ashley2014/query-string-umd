!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.queryString=t():r.queryString=t()}(window,(function(){return function(r){var t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)e.d(n,o,function(t){return r[t]}.bind(null,o));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="/",e(e.s=1)}([function(r,t,e){"use strict";function n(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var e=[],n=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(r){o=!0,a=r}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return e}(r,t)||i(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(r){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function a(r){return function(r){if(Array.isArray(r))return u(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||i(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){if(r){if("string"==typeof r)return u(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(r,t):void 0}}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var c=e(2),f=e(3),l=e(4);function s(r){if("string"!=typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function y(r,t){return t.encode?t.strict?c(r):encodeURIComponent(r):r}function p(r,t){return t.decode?f(r):r}function d(r){var t=r.indexOf("#");return-1!==t&&(r=r.slice(0,t)),r}function m(r){var t=(r=d(r)).indexOf("?");return-1===t?"":r.slice(t+1)}function b(r,t){return t.parseNumbers&&!Number.isNaN(Number(r))&&"string"==typeof r&&""!==r.trim()?r=Number(r):!t.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function v(r,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var e=function(r){var t;switch(r.arrayFormat){case"index":return function(r,e,n){t=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),t?(void 0===n[r]&&(n[r]={}),n[r][t[1]]=e):n[r]=e};case"bracket":return function(r,e,n){t=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),t?void 0!==n[r]?n[r]=[].concat(n[r],e):n[r]=[e]:n[r]=e};case"comma":case"separator":return function(t,e,n){var o="string"==typeof e&&e.split("").indexOf(r.arrayFormatSeparator)>-1?e.split(r.arrayFormatSeparator).map((function(t){return p(t,r)})):null===e?e:p(e,r);n[t]=o};default:return function(r,t,e){void 0!==e[r]?e[r]=[].concat(e[r],t):e[r]=t}}}(t),a=Object.create(null);if("string"!=typeof r)return a;if(!(r=r.trim().replace(/^[?#&]/,"")))return a;var u,c=function(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=i(r))){var t=0,e=function(){};return{s:e,n:function(){return t>=r.length?{done:!0}:{done:!1,value:r[t++]}},e:function(r){throw r},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,u=!1;return{s:function(){n=r[Symbol.iterator]()},n:function(){var r=n.next();return a=r.done,r},e:function(r){u=!0,o=r},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}(r.split("&"));try{for(c.s();!(u=c.n()).done;){var f=u.value,y=n(l(t.decode?f.replace(/\+/g," "):f,"="),2),d=y[0],m=y[1];m=void 0===m?null:["comma","separator"].includes(t.arrayFormat)?m:p(m,t),e(p(d,t),m,a)}}catch(r){c.e(r)}finally{c.f()}for(var v=0,g=Object.keys(a);v<g.length;v++){var h=g[v],j=a[h];if("object"===o(j)&&null!==j)for(var S=0,x=Object.keys(j);S<x.length;S++){var O=x[S];j[O]=b(j[O],t)}else a[h]=b(j,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce((function(r,t){var e=a[t];return Boolean(e)&&"object"===o(e)&&!Array.isArray(e)?r[t]=function r(t){return Array.isArray(t)?t.sort():"object"===o(t)?r(Object.keys(t)).sort((function(r,t){return Number(r)-Number(t)})).map((function(r){return t[r]})):t}(e):r[t]=e,r}),Object.create(null))}t.extract=m,t.parse=v,t.stringify=function(r,t){if(!r)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var e=function(e){return t.skipNull&&null==r[e]||t.skipEmptyString&&""===r[e]},n=function(r){switch(r.arrayFormat){case"index":return function(t){return function(e,n){var o=e.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[y(t,r),"[",o,"]"].join("")]:[[y(t,r),"[",y(o,r),"]=",y(n,r)].join("")])}};case"bracket":return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[y(t,r),"[]"].join("")]:[[y(t,r),"[]=",y(n,r)].join("")])}};case"comma":case"separator":return function(t){return function(e,n){return null==n||0===n.length?e:0===e.length?[[y(t,r),"=",y(n,r)].join("")]:[[e,y(n,r)].join(r.arrayFormatSeparator)]}};default:return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[y(t,r)]:[[y(t,r),"=",y(n,r)].join("")])}}}}(t),o={},i=0,u=Object.keys(r);i<u.length;i++){var c=u[i];e(c)||(o[c]=r[c])}var f=Object.keys(o);return!1!==t.sort&&f.sort(t.sort),f.map((function(e){var o=r[e];return void 0===o?"":null===o?y(e,t):Array.isArray(o)?o.reduce(n(e),[]).join("&"):y(e,t)+"="+y(o,t)})).filter((function(r){return r.length>0})).join("&")},t.parseUrl=function(r,t){return{url:d(r).split("?")[0]||"",query:v(m(r),t)}},t.stringifyUrl=function(r,e){var n=d(r.url).split("?")[0]||"",o=t.extract(r.url),a=t.parse(o),i=function(r){var t="",e=r.indexOf("#");return-1!==e&&(t=r.slice(e)),t}(r.url),u=Object.assign(a,r.query),c=t.stringify(u,e);return c&&(c="?".concat(c)),"".concat(n).concat(c).concat(i)}},function(r,t,e){"use strict";e.r(t);var n=e(0),o=e.n(n);t.default=o.a},function(r,t,e){"use strict";r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}},function(r,t,e){"use strict";function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var o=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function i(r,t){try{return decodeURIComponent(r.join(""))}catch(r){}if(1===r.length)return r;t=t||1;var e=r.slice(0,t),n=r.slice(t);return Array.prototype.concat.call([],i(e),i(n))}function u(r){try{return decodeURIComponent(r)}catch(n){for(var t=r.match(o),e=1;e<t.length;e++)t=(r=i(t,e).join("")).match(o);return r}}r.exports=function(r){if("string"!=typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+n(r)+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(t){return function(r){for(var t={"%FE%FF":"��","%FF%FE":"��"},e=a.exec(r);e;){try{t[e[0]]=decodeURIComponent(e[0])}catch(r){var n=u(e[0]);n!==e[0]&&(t[e[0]]=n)}e=a.exec(r)}t["%C2"]="�";for(var o=Object.keys(t),i=0;i<o.length;i++){var c=o[i];r=r.replace(new RegExp(c,"g"),t[c])}return r}(r)}}},function(r,t,e){"use strict";r.exports=function(r,t){if("string"!=typeof r||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[r];var e=r.indexOf(t);return-1===e?[r]:[r.slice(0,e),r.slice(e+t.length)]}}])}));