!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r=r||self).queryString=t()}(this,(function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(t)}function t(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var e=[],n=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(r){o=!0,a=r}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return e}(r,t)||n(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(r){return function(r){if(Array.isArray(r))return o(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||n(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(r,t){if(r){if("string"==typeof r)return o(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(r,t):void 0}}function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var a=new RegExp("%[a-f0-9]{2}","gi"),i=new RegExp("(%[a-f0-9]{2})+","gi");function u(r,t){try{return decodeURIComponent(r.join(""))}catch(r){}if(1===r.length)return r;t=t||1;var e=r.slice(0,t),n=r.slice(t);return Array.prototype.concat.call([],u(e),u(n))}function c(r){try{return decodeURIComponent(r)}catch(n){for(var t=r.match(a),e=1;e<t.length;e++)t=(r=u(t,e).join("")).match(a);return r}}var f=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+r(t)+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(r){return function(r){for(var t={"%FE%FF":"��","%FF%FE":"��"},e=i.exec(r);e;){try{t[e[0]]=decodeURIComponent(e[0])}catch(r){var n=c(e[0]);n!==e[0]&&(t[e[0]]=n)}e=i.exec(r)}t["%C2"]="�";for(var o=Object.keys(t),a=0;a<o.length;a++){var u=o[a];r=r.replace(new RegExp(u,"g"),t[u])}return r}(t)}},l=function(r,t){if("string"!=typeof r||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[r];var e=r.indexOf(t);return-1===e?[r]:[r.slice(0,e),r.slice(e+t.length)]},s=function(r,t){return r(t={exports:{}},t.exports),t.exports}((function(o,a){function i(r){if("string"!=typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function u(r,t){return t.encode?t.strict?encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())})):encodeURIComponent(r):r}function c(r,t){return t.decode?f(r):r}function s(r){var t=r.indexOf("#");return-1!==t&&(r=r.slice(0,t)),r}function y(r){var t=(r=s(r)).indexOf("?");return-1===t?"":r.slice(t+1)}function p(r,t){return t.parseNumbers&&!Number.isNaN(Number(r))&&"string"==typeof r&&""!==r.trim()?r=Number(r):!t.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function m(e,o){i((o=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},o)).arrayFormatSeparator);var a=function(r){var t;switch(r.arrayFormat){case"index":return function(r,e,n){t=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),t?(void 0===n[r]&&(n[r]={}),n[r][t[1]]=e):n[r]=e};case"bracket":return function(r,e,n){t=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),t?void 0!==n[r]?n[r]=[].concat(n[r],e):n[r]=[e]:n[r]=e};case"comma":case"separator":return function(t,e,n){var o="string"==typeof e&&e.split("").indexOf(r.arrayFormatSeparator)>-1?e.split(r.arrayFormatSeparator).map((function(t){return c(t,r)})):null===e?e:c(e,r);n[t]=o};default:return function(r,t,e){void 0!==e[r]?e[r]=[].concat(e[r],t):e[r]=t}}}(o),u=Object.create(null);if("string"!=typeof e)return u;if(!(e=e.trim().replace(/^[?#&]/,"")))return u;var f,s=function(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=n(r))){var t=0,e=function(){};return{s:e,n:function(){return t>=r.length?{done:!0}:{done:!1,value:r[t++]}},e:function(r){throw r},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,u=!1;return{s:function(){o=r[Symbol.iterator]()},n:function(){var r=o.next();return i=r.done,r},e:function(r){u=!0,a=r},f:function(){try{i||null==o.return||o.return()}finally{if(u)throw a}}}}(e.split("&"));try{for(s.s();!(f=s.n()).done;){var y=f.value,m=t(l(o.decode?y.replace(/\+/g," "):y,"="),2),d=m[0],b=m[1];b=void 0===b?null:["comma","separator"].includes(o.arrayFormat)?b:c(b,o),a(c(d,o),b,u)}}catch(r){s.e(r)}finally{s.f()}for(var g=0,v=Object.keys(u);g<v.length;g++){var h=v[g],j=u[h];if("object"===r(j)&&null!==j)for(var S=0,x=Object.keys(j);S<x.length;S++){var w=x[S];j[w]=p(j[w],o)}else u[h]=p(j,o)}return!1===o.sort?u:(!0===o.sort?Object.keys(u).sort():Object.keys(u).sort(o.sort)).reduce((function(t,e){var n=u[e];return Boolean(n)&&"object"===r(n)&&!Array.isArray(n)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"===r(e)?t(Object.keys(e)).sort((function(r,t){return Number(r)-Number(t)})).map((function(r){return e[r]})):e}(n):t[e]=n,t}),Object.create(null))}a.extract=y,a.parse=m,a.stringify=function(r,t){if(!r)return"";i((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var n=function(e){return t.skipNull&&null==r[e]||t.skipEmptyString&&""===r[e]},o=function(r){switch(r.arrayFormat){case"index":return function(t){return function(n,o){var a=n.length;return void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:[].concat(e(n),null===o?[[u(t,r),"[",a,"]"].join("")]:[[u(t,r),"[",u(a,r),"]=",u(o,r)].join("")])}};case"bracket":return function(t){return function(n,o){return void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:[].concat(e(n),null===o?[[u(t,r),"[]"].join("")]:[[u(t,r),"[]=",u(o,r)].join("")])}};case"comma":case"separator":return function(t){return function(e,n){return null==n||0===n.length?e:0===e.length?[[u(t,r),"=",u(n,r)].join("")]:[[e,u(n,r)].join(r.arrayFormatSeparator)]}};default:return function(t){return function(n,o){return void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:[].concat(e(n),null===o?[u(t,r)]:[[u(t,r),"=",u(o,r)].join("")])}}}}(t),a={},c=0,f=Object.keys(r);c<f.length;c++){var l=f[c];n(l)||(a[l]=r[l])}var s=Object.keys(a);return!1!==t.sort&&s.sort(t.sort),s.map((function(e){var n=r[e];return void 0===n?"":null===n?u(e,t):Array.isArray(n)?n.reduce(o(e),[]).join("&"):u(e,t)+"="+u(n,t)})).filter((function(r){return r.length>0})).join("&")},a.parseUrl=function(r,t){return{url:s(r).split("?")[0]||"",query:m(y(r),t)}},a.stringifyUrl=function(r,t){var e=s(r.url).split("?")[0]||"",n=a.extract(r.url),o=a.parse(n),i=function(r){var t="",e=r.indexOf("#");return-1!==e&&(t=r.slice(e)),t}(r.url),u=Object.assign(o,r.query),c=a.stringify(u,t);return c&&(c="?".concat(c)),"".concat(e).concat(c).concat(i)}}));s.extract,s.parse,s.stringify,s.parseUrl,s.stringifyUrl;return console.log(11),s}));
