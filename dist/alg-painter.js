!function(){"use strict";function t(t,e,i,r,o,s){var n=Math.floor(t/3),h=t%3,a=e.w,l=e.h,f=r-(a>l?a:l);switch(n){case 0:return{x:s+r*h+o*h+f,y:s-l-2};case 1:return{x:i-s+2,y:s+r*h+o*h+f};case 2:return{x:s+r*(2-h)+o*(2-h)+f,y:i-s+2};case 3:return{x:s-a-2,y:s+r*(2-h)+o*(2-h)+f}}}function e(t,e,i,r){var o=Math.floor(t/3),s=e-2*i;return 0==o||2==o?{w:s,h:e/10}:{w:e/10,h:s}}function i(t,e,i,r,o){var s=Math.atan2(o-i,r-e);t.beginPath(),t.moveTo(e,i),t.lineTo(r,o),t.lineTo(r-12*Math.cos(s-Math.PI/8),o-12*Math.sin(s-Math.PI/8)),t.lineTo(r-12*Math.cos(s+Math.PI/8),o-12*Math.sin(s+Math.PI/8)),t.lineTo(r,o),t.stroke(),t.fill()}function r(t,e,i){t.strokeStyle=t.fillStyle=i?e%2==0?"#F70D1A":"#0B24FA":"#111"}function o(t,e,i){return{x:i+(t-1)%3*e+e/2,y:i+Math.floor((t-1)/3)*e+e/2}}var s=function(t,e){var i=window.devicePixelRatio||1,r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1,o=(i||1)/r;if(i!==r){var s=t.width,n=t.height;t.width=s*o,t.height=n*o,t.style.width=s+"px",t.style.height=n+"px",e.scale(o,o)}};function n(n,h,a,l,f,u){var c=n.getContext("2d");s(n,c);var d=f/18,v=d+3;c.fillRect(v,v,f-2*v,f-2*v),c.lineWidth=3,c.strokeRect(v,v,f-2*v,f-2*v);var w=function(t,e,i,r,o){for(var s=(i-2*r-4*o)/3,n=s,h=0;h<e.length;h++){var a=e[h],l=o+r+h%3*s+o*(h%3),f=o+r+Math.floor(h/3)*n+o*Math.floor(h/3);t.fillStyle="string"==typeof a?a:0!==a?"#444":"#aaa",t.fillRect(l,f,s,n)}return s}(c,h,f,d,3);!function(i,r,o,s,n){for(var h=0;h<r.length;h++){var a=e(h,o,i.lineWidth),l=t(h,a,s,o,i.lineWidth,n),f=r[h];i.fillStyle="string"==typeof f?f:0!==f?"#444":"#ddd",i.fillRect(l.x,l.y,a.w,a.h)}}(c,a,w,f,d),l.length&&function(t,e,s,n,h){t.lineWidth=2,t.lineJoin="round";for(var a=(s-2*n)/3,l=0;l<e.length;l++){var f=e[l],u=-1;f.length&&r(t,u=f[0],h);for(var c=void 0,d=void 0,v=0;v<f.length-1;v++){c=f[v],d=f[v+1];var w=o(c,a,n),g=o(d,a,n);i(t,w.x,w.y,g.x,g.y)}if(-1!==u&&d!==u){var y=o(d,a,n),M=o(u,a,n);i(t,y.x,y.y,M.x,M.y)}}}(c,l,f,d,u)}function h(t,e,i){for(var r=[],o=e>i?function(t){return t-1}:function(t){return t+1},s=e>i?function(t,e){return t>=e}:function(t,e){return t<=e},n=e;s(n,i);n=o(n))r.push(t[n]);return r}function a(t,e,i){if(e){for(var r=0;r<t.length;r++)t[r]=i?5==t[r]?"#B8B8B8":"white":5==t[r]?"#757575":"white";return t}var o=["orange","#f31","#1d1","#06f","#ddd","yellow"];for(r=0;r<t.length;r++)t[r]=o[t[r]-1];return t}var l={render:function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"ctx",attrs:{width:this.width,height:this.width}})},staticRenderFns:[],props:{stickers:{type:Array,default:[0,0,0,0,0,0,0,0,0],validator:function(t){return 9===t.length}},edges:{type:Array,default:[0,0,0,0,0,0,0,0,0,0,0,0],validator:function(t){return 12===t.length}},arrows:{type:Array,default:[]},moves:{type:String,default:""},auf:{type:String,default:""},bw:{type:Boolean,default:!1},distinctArrows:{type:Boolean,default:!1},width:{type:Number,default:200}},computed:{size:function(){return{w:this.width,h:this.width}}},mounted:function(){if(this.moves.length){var t=new function(){var t=this;this.model=[1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6],this.U=function(t){this.arbitraryMove([36,38,44,42],[18,0,27,9],[2,29,11,20],[37,41,43,39],[1,28,10,19],t)},this.L=function(t){this.arbitraryMove([0,2,8,6],[36,18,45,35],[42,24,51,29],[1,5,7,3],[39,21,48,32],t)},this.F=function(t){this.arbitraryMove([18,20,26,24],[42,9,47,8],[44,15,45,2],[19,23,25,21],[43,12,46,5],t)},this.R=function(t){this.arbitraryMove([9,11,17,15],[44,27,53,26],[38,33,47,20],[10,14,16,12],[41,30,50,23],t)},this.D=function(t){this.arbitraryMove([45,47,53,51],[24,15,33,6],[26,17,35,8],[46,50,52,48],[25,16,34,7],t)},this.B=function(t){this.arbitraryMove([27,29,35,33],[38,0,51,17],[36,6,53,11],[28,32,34,30],[37,3,52,14],t)},this.M=function(t){var e=[37,19,46,34],i=[40,22,49,31],r=[43,25,52,28];t?(this.rotate(e.reverse()),this.rotate(i.reverse()),this.rotate(r.reverse())):(this.rotate(e),this.rotate(i),this.rotate(r))},this.E=function(t){var e=[3,21,12,30],i=[4,22,13,31],r=[5,23,14,32];t?(this.rotate(e.reverse()),this.rotate(i.reverse()),this.rotate(r.reverse())):(this.rotate(e),this.rotate(i),this.rotate(r))},this.S=function(t){var e=[39,10,50,7],i=[40,13,49,4],r=[41,16,48,1];t?(this.rotate(e.reverse()),this.rotate(i.reverse()),this.rotate(r.reverse())):(this.rotate(e),this.rotate(i),this.rotate(r))},this.x=function(t){this.R(t),this.M(!t),this.L(!t)},this.y=function(t){this.U(t),this.E(!t),this.D(!t)},this.z=function(t){this.F(t),this.S(t),this.B(!t)},"URFDLBMSExyz".split("").forEach(function(e){return t[e+"'"]=function(){t[e](!0)}}),this.arbitraryMove=function(t,e,i,r,o,s){s?(this.rotate(t.reverse()),this.rotate(e.reverse()),this.rotate(i.reverse()),this.rotate(r.reverse()),this.rotate(o.reverse())):(this.rotate(t),this.rotate(e),this.rotate(i),this.rotate(r),this.rotate(o))},this.rotate=function(t){var e=t[0],i=t[1],r=t[2],o=t[3],s=this.model[e];this.model[e]=this.model[o],this.model[o]=this.model[r],this.model[r]=this.model[i],this.model[i]=s},this.wideMove=function(t,e){this[t](e),"L"===t?this.M(e):"R"===t?this.M(!e):"D"===t?this.E(e):"U"===t?this.E(!e):"F"===t?this.S(e):this.S(!e)},this.doMoves=function(t){t=function(t){for(var e=[],i=0;i<t.length;i++){var r=t[i],o=-1!==r.indexOf("w")?2:1;r.length<o+1?e.push(r+"'"):"'"===r[r.length-1]?e.push(r.substring(0,r.length-1)):e.push(t[i])}return e.reverse()}(t);for(var e=0;e<t.length;e++){var i=t[e];if(2===i.length)"2"===i[1]?(this[i[0]](),this[i[0]]()):"'"===i[1]?this[i]():this.wideMove(i[0],!1);else if(3===i.length)"2"===i[2]?(this.wideMove(i[0],!1),this.wideMove(i[0],!1)):this.wideMove(i[0],!0);else{if(!/[URFDLBMSExyz]/.test(i))throw Error('Unrecognized move "'+i+'"');this[i]()}}}},e=this.moves.trim().split(" ");t.doMoves(e),this.auf.length&&t.doMoves([this.auf]),this.stickers=a(h(t.model,36,44),this.bw,this.arrows.length),this.edges=a([].concat(h(t.model,29,27),h(t.model,11,9),h(t.model,20,18),h(t.model,2,0)),this.bw,this.arrows.length)}n(this.$refs.ctx,this.stickers,this.edges,this.arrows,this.width,this.distinctArrows)}},f={install:function(t,e){t.component("alg",l)}};"undefined"!=typeof window&&window.Vue?window.Vue.use(f):module.exports=f}();
