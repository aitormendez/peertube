(window.webpackJsonp_peertube=window.webpackJsonp_peertube||[]).push([[1],{5:function(e,t,n){}}]),function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp_peertube=window.webpackJsonp_peertube||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;i.push([7,1]),n()}([function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n(0),i=(n(5),n(1)),a=(n(3),n(6),n(2));Object(r.registerBlockType)("e451/peertube",{attributes:{identificador:{type:"string",selector:"div"},instancia:{type:"string",selector:"div"}},apiVersion:2,title:Object(o.__)("Peertube video","peertube"),description:Object(o.__)("Insertar contenido de peertube","peertube"),category:"embed",icon:"video-alt3",supports:{html:!1},edit:function(e){var t=e.attributes,n=e.className,r=e.setAttributes;return Object(i.createElement)("div",{className:n},Object(i.createElement)(a.TextControl,{label:Object(o.__)("Identificador","peertube"),value:t.identificador,onChange:function(e){return r({identificador:e})}}),Object(i.createElement)(a.TextControl,{label:Object(o.__)("Instancia","peertube"),value:t.instancia,onChange:function(e){return r({instancia:e})}}))},save:function(e){var t=e.attributes,n=e.className,r=t.instancia+"/videos/embed/"+t.identificador;return Object(i.createElement)("iframe",{className:n,width:"560",height:"315",sandbox:"allow-same-origin allow-scripts allow-popups",src:r,frameborder:"0",allowfullscreen:!0})}})}]);