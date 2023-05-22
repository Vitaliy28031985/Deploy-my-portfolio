(()=>{var t={711:function(t,e,i){t.exports=function(){"use strict";var t="undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{},e="Expected a function",n=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=p||l||Function("return this")(),m=Object.prototype.toString,f=Math.max,h=Math.min,g=function(){return u.Date.now()};function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&m.call(t)==o}(t))return n;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=c.test(t);return i||s.test(t)?d(t.slice(2),i?2:8):r.test(t)?n:+t}var v=function(t,i,n){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError(e);return b(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),function(t,i,n){var o,a,r,c,s,d,p=0,l=!1,u=!1,m=!0;if("function"!=typeof t)throw new TypeError(e);function v(e){var i=o,n=a;return o=a=void 0,p=e,c=t.apply(n,i)}function w(t){var e=t-d;return void 0===d||e>=i||e<0||u&&t-p>=r}function y(){var t=g();if(w(t))return k(t);s=setTimeout(y,function(t){var e=i-(t-d);return u?h(e,r-(t-p)):e}(t))}function k(t){return s=void 0,m&&o?v(t):(o=a=void 0,c)}function j(){var t=g(),e=w(t);if(o=arguments,a=this,d=t,e){if(void 0===s)return function(t){return p=t,s=setTimeout(y,i),l?v(t):c}(d);if(u)return s=setTimeout(y,i),v(d)}return void 0===s&&(s=setTimeout(y,i)),c}return i=x(i)||0,b(n)&&(l=!!n.leading,r=(u="maxWait"in n)?f(x(n.maxWait)||0,i):r,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==s&&clearTimeout(s),p=0,o=d=a=s=void 0},j.flush=function(){return void 0===s?c:k(g())},j}(t,i,{leading:o,maxWait:i,trailing:a})},w=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,j=/^0o[0-7]+$/i,S=parseInt,z="object"==typeof t&&t&&t.Object===Object&&t,E="object"==typeof self&&self&&self.Object===Object&&self,O=z||E||Function("return this")(),C=Object.prototype.toString,N=Math.max,T=Math.min,M=function(){return O.Date.now()};function L(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function B(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==C.call(t)}(t))return NaN;if(L(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=L(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(w,"");var i=k.test(t);return i||j.test(t)?S(t.slice(2),i?2:8):y.test(t)?NaN:+t}var I=function(t,e,i){var n,o,a,r,c,s,d=0,p=!1,l=!1,u=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var i=n,a=o;return n=o=void 0,d=e,r=t.apply(a,i)}function f(t){var i=t-s;return void 0===s||i>=e||i<0||l&&t-d>=a}function h(){var t=M();if(f(t))return g(t);c=setTimeout(h,function(t){var i=e-(t-s);return l?T(i,a-(t-d)):i}(t))}function g(t){return c=void 0,u&&n?m(t):(n=o=void 0,r)}function b(){var t=M(),i=f(t);if(n=arguments,o=this,s=t,i){if(void 0===c)return function(t){return d=t,c=setTimeout(h,e),p?m(t):r}(s);if(l)return c=setTimeout(h,e),m(s)}return void 0===c&&(c=setTimeout(h,e)),r}return e=B(e)||0,L(i)&&(p=!!i.leading,a=(l="maxWait"in i)?N(B(i.maxWait)||0,e):a,u="trailing"in i?!!i.trailing:u),b.cancel=function(){void 0!==c&&clearTimeout(c),d=0,n=s=o=c=void 0},b.flush=function(){return void 0===c?r:g(M())},b},A=function(){};function H(t){t&&t.forEach((function(t){var e=Array.prototype.slice.call(t.addedNodes),i=Array.prototype.slice.call(t.removedNodes);if(function t(e){var i=void 0,n=void 0;for(i=0;i<e.length;i+=1){if((n=e[i]).dataset&&n.dataset.aos)return!0;if(n.children&&t(n.children))return!0}return!1}(e.concat(i)))return A()}))}function q(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var D=function(){return!!q()},$=function(t,e){var i=window.document,n=new(q())(H);A=e,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})},P=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},G=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,_=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,F=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,J=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var Z=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return P(t,[{key:"phone",value:function(){var t=R();return!(!G.test(t)&&!_.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=R();return!(!F.test(t)&&!J.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}()),Y=function(t,e){var i=void 0;return Z.ie11()?(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,{detail:e}):i=new CustomEvent(t,{detail:e}),document.dispatchEvent(i)},K=function(t){return t.forEach((function(t,e){return function(t,e){var i=t.options,n=t.position,o=t.node,a=(t.data,function(){t.animated&&(function(t,e){e&&e.forEach((function(e){return t.classList.remove(e)}))}(o,i.animatedClassNames),Y("aos:out",o),t.options.id&&Y("aos:in:"+t.options.id,o),t.animated=!1)});i.mirror&&e>=n.out&&!i.once?a():e>=n.in?t.animated||(function(t,e){e&&e.forEach((function(e){return t.classList.add(e)}))}(o,i.animatedClassNames),Y("aos:in",o),t.options.id&&Y("aos:in:"+t.options.id,o),t.animated=!0):t.animated&&!i.once&&a()}(t,window.pageYOffset)}))},Q=function(t){for(var e=0,i=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),i+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:i,left:e}},U=function(t,e,i){var n=t.getAttribute("data-aos-"+e);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||i},V=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,(function(t){return{node:t}}))},X=[],tt=!1,et={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},it=function(){return document.all&&!window.atob},nt=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(tt=!0),tt&&(X=function(t,e){return t.forEach((function(t,i){var n=U(t.node,"mirror",e.mirror),o=U(t.node,"once",e.once),a=U(t.node,"id"),r=e.useClassNames&&t.node.getAttribute("data-aos"),c=[e.animatedClassName].concat(r?r.split(" "):[]).filter((function(t){return"string"==typeof t}));e.initClassName&&t.node.classList.add(e.initClassName),t.position={in:function(t,e,i){var n=window.innerHeight,o=U(t,"anchor"),a=U(t,"anchor-placement"),r=Number(U(t,"offset",a?0:e)),c=a||i,s=t;o&&document.querySelectorAll(o)&&(s=document.querySelectorAll(o)[0]);var d=Q(s).top-n;switch(c){case"top-bottom":break;case"center-bottom":d+=s.offsetHeight/2;break;case"bottom-bottom":d+=s.offsetHeight;break;case"top-center":d+=n/2;break;case"center-center":d+=n/2+s.offsetHeight/2;break;case"bottom-center":d+=n/2+s.offsetHeight;break;case"top-top":d+=n;break;case"bottom-top":d+=n+s.offsetHeight;break;case"center-top":d+=n+s.offsetHeight/2}return d+r}(t.node,e.offset,e.anchorPlacement),out:n&&function(t,e){window.innerHeight;var i=U(t,"anchor"),n=U(t,"offset",e),o=t;return i&&document.querySelectorAll(i)&&(o=document.querySelectorAll(i)[0]),Q(o).top+o.offsetHeight-n}(t.node,e.offset)},t.options={once:o,mirror:n,animatedClassNames:c,id:a}})),t}(X,et),K(X),window.addEventListener("scroll",v((function(){K(X,et.once)}),et.throttleDelay)))},ot=function(){if(X=V(),rt(et.disable)||it())return at();nt()},at=function(){X.forEach((function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),et.initClassName&&t.node.classList.remove(et.initClassName),et.animatedClassName&&t.node.classList.remove(et.animatedClassName)}))},rt=function(t){return!0===t||"mobile"===t&&Z.mobile()||"phone"===t&&Z.phone()||"tablet"===t&&Z.tablet()||"function"==typeof t&&!0===t()};return{init:function(t){return et=W(et,t),X=V(),et.disableMutationObserver||D()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),et.disableMutationObserver=!0),et.disableMutationObserver||$("[data-aos]",ot),rt(et.disable)||it()?at():(document.querySelector("body").setAttribute("data-aos-easing",et.easing),document.querySelector("body").setAttribute("data-aos-duration",et.duration),document.querySelector("body").setAttribute("data-aos-delay",et.delay),-1===["DOMContentLoaded","load"].indexOf(et.startEvent)?document.addEventListener(et.startEvent,(function(){nt(!0)})):window.addEventListener("load",(function(){nt(!0)})),"DOMContentLoaded"===et.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&nt(!0),window.addEventListener("resize",I(nt,et.debounceDelay,!0)),window.addEventListener("orientationchange",I(nt,et.debounceDelay,!0)),X)},refresh:nt,refreshHard:ot}}()},151:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var n=i(81),o=i.n(n),a=i(645),r=i.n(a)()(o());r.push([t.id,'h1,h2,h3,h4,h5,h6,ul,a,p,li{margin:0px;padding:0px}ul{list-style:none}img{width:100%;display:block}a{text-decoration:none;display:block;padding:0}body{font-family:"Roboto";background-color:#202020}.container{position:relative;margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px}@media screen and (min-width: 320px){.container{width:320px}}@media screen and (min-width: 768px){.container{width:768px;display:flex;justify-content:center}}@media screen and (min-width: 1213px){.container{width:1300px;justify-content:center}}.page-content-container{margin-left:auto;margin-top:auto}@keyframes opacity{0%{opacity:.9}25%{opacity:.7}50%{opacity:.5}75%{opacity:.7}100%{opacity:1}}@keyframes opacity-two{10%{opacity:0}50%{opacity:.5}100%{opacity:1}}.author{width:300px;margin-left:auto;margin-right:auto;position:relative;padding-bottom:60px;background-color:#202020}#author{width:300px;opacity:1;animation-name:opacity-two;animation-duration:8000ms}.author-avatar-container{position:absolute;top:153px;left:15px;overflow:hidden;width:67px;height:66px;border-radius:50%;background-color:#fff}@media screen and (min-width: 768px){.author-avatar-container{top:111px;width:102px;height:101px;margin-left:83px}}.author-avatar{width:65px;height:65px;margin-left:1px;margin-top:1px}@media screen and (min-width: 768px){.author-avatar{width:100px;height:100px}}.author-title-one{position:absolute;top:180px;left:90px;color:#fff;margin-bottom:3px;font-family:"Roboto";font-weight:400;font-size:15px;line-height:1.2}@media screen and (min-width: 768px){.author-title-one{position:static;margin-top:69px;font-size:18px;text-align:center}}.author-title-two{margin-top:20px;color:#d2d2d2;font-weight:300;font-size:12px;line-height:1.1;text-align:center}@media screen and (min-width: 768px){.author-title-two{margin-top:0;font-size:14px}}.author-text{color:#fff;margin-left:20px;margin-right:20px;font-weight:400;font-size:12px;line-height:1.5;text-align:center;text-align:center}.author-social{width:320px;display:flex;gap:15px;margin-top:70px;margin-bottom:60px;justify-content:center}@media screen and (min-width: 768px){.author-social{margin-top:18px}}.icon{width:25px;height:25px}.author-social li{animation-duration:1000ms}.author-social li:focus,.author-social li:hover{animation-name:opacity;filter:drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25))}.author-buttons{display:flex;margin-top:60px;justify-content:center}.author-button{width:120px;padding-top:16px;padding-bottom:16px;background-color:#ed3024;font-weight:500;font-size:12px;line-height:1.2;text-align:center;color:#fff;border-radius:25px;box-shadow:0px 7px 17px -10px rgba(242,63,63,.2)}.author-button:focus,.author-button:hover{color:#d2d2d2;animation-name:opacity;animation-duration:1000ms}.author-button-two{margin-left:20px;background-color:#3137c9;box-shadow:0px 7px 17px -10px rgba(32,84,219,.35)}.header{width:285px;position:absolute;top:0;padding-right:15px;background-color:#0d0d0d;box-shadow:rgba(0,0,0,.25);border-radius:5px;z-index:1111}@media screen and (min-width: 768px){.header{position:static;width:480px}}@media screen and (min-width: 1213px){.header{width:100%;padding-left:15px;padding-right:35px;padding-bottom:10px}}.burger{background-color:#0d0d0d;border:0}@media screen and (min-width: 768px){.burger{display:none}}.burger img{padding-top:10px;width:30px;height:20px}.header-container{position:absolute;top:230px;left:21px;padding-top:15px;padding-bottom:15px;padding-left:20px;padding-right:20px;background-color:#0d0d0d}@media screen and (min-width: 768px){.header-container{background-color:rgba(0,0,0,0);opacity:1;padding-top:0;padding-bottom:0;padding-left:0;padding-right:0;position:static}}@media screen and (min-width: 1213px){.header-container{display:flex;justify-content:space-between;align-items:center}}.header-nav{margin-bottom:25px}@media screen and (min-width: 768px){.header-nav{display:flex;gap:15px;margin-bottom:0;padding-top:14px;padding-bottom:14px;justify-content:center}}@media screen and (min-width: 1213px){.header-nav{margin-left:25px;gap:15px}}.header-nav a{font-weight:300;font-size:15px;line-height:2.1;color:#fff;transition:color 250ms cubic-bezier(0.4, 0, 0.2, 1)}@media screen and (min-width: 768px){.header-nav a{font-weight:200;font-size:15px;line-height:1}}@media screen and (min-width: 1213px){.header-nav a{font-weight:400;font-size:11px;text-transform:uppercase}}.header-nav a:hover,.header-nav a:focus{color:#828282}@media screen and (min-width: 768px){.header-contacts{display:flex;gap:20px;margin-right:10px;padding-top:14px;padding-bottom:14px;justify-content:center}}@media screen and (min-width: 768px)and (min-width: 1213px){.header-contacts{gap:15px;margin-right:25px;margin-left:50px}}.header-contacts a{font-weight:300;font-size:15px;line-height:2.1;color:#fff;transition:color 250ms cubic-bezier(0.4, 0, 0.2, 1)}@media screen and (min-width: 768px){.header-contacts a{font-weight:200;font-size:15px}}@media screen and (min-width: 1213px){.header-contacts a{font-weight:400;font-size:11px;text-transform:uppercase}}.header-contacts a:hover,.header-contacts a:focus{color:#828282}.is-open{opacity:0}@media screen and (min-width: 768px){.is-open{opacity:1}}.remove-button{display:none}@media screen and (min-width: 768px){.header-mobile{display:none}}@media screen and (max-width: 767px){.header-computer{display:none}}.video-gallery{width:305px;margin-top:25px;margin-left:auto;margin-right:auto;padding:25px;background-color:#0d0d0d;box-shadow:0px 15px 25px rgba(0,0,0,.35);border-radius:5px}@media screen and (min-width: 768px){.video-gallery{width:400px}}@media screen and (min-width: 1213px){.video-gallery{width:100%}}.video-gallery-video{display:flex;flex-wrap:wrap;justify-content:center}.video-gallery h3{margin-bottom:7px;font-weight:400;font-size:16px;line-height:1.3;text-transform:uppercase;color:#fff}@media screen and (min-width: 768px){.video-gallery h3{font-size:18px}}.video-gallery a{margin-bottom:25px;font-weight:400;font-size:12px;line-height:1.1;color:#fff;transition:color 250ms cubic-bezier(0.4, 0, 0.2, 1)}@media screen and (min-width: 768px){.video-gallery a{font-size:14px}}.video-gallery a:hover,.video-gallery a:focus{color:#828282}.video-gallery iframe{width:235px;height:160px;border-radius:5px}@media screen and (min-width: 768px){.video-gallery iframe{width:370px;height:170px}}@media screen and (min-width: 1213px){.video-gallery iframe{width:800px;height:400px}}.video-gallery-label-container{display:flex;gap:50px;justify-content:center;margin-top:15px}.video-gallery-label-text{font-weight:400;font-size:12px;line-height:1.1;color:#fff;cursor:pointer;transition:color 250ms cubic-bezier(0.4, 0, 0.2, 1)}@media screen and (min-width: 768px){.video-gallery-label-text{font-size:14px}}.video-gallery-label-text:hover,.video-gallery-label-text:focus{color:#828282}.about{width:305px;margin-top:25px;margin-left:auto;margin-right:auto;padding:25px;background-color:#0d0d0d;box-shadow:0px 15px 25px rgba(0,0,0,.35);border-radius:5px}@media screen and (min-width: 768px){.about{width:400px}}@media screen and (min-width: 1213px){.about{width:100%}}.about-title{margin-bottom:15px;font-weight:400;font-size:16px;line-height:1.3;text-transform:uppercase;color:#fff}@media screen and (min-width: 768px){.about-title{font-size:18px}}.about-text-container{font-weight:400;font-size:12px;line-height:1.2;color:#d2d2d2}@media screen and (min-width: 768px){.about-text-container{font-size:14px;line-height:1.5}}.about-text-container p{margin-bottom:15px}.projects{width:305px;margin-left:auto;margin-right:auto;margin-top:25px;padding:25px;background-color:#0d0d0d;box-shadow:0px 15px 25px rgba(0,0,0,.35);border-radius:5px}@media screen and (min-width: 768px){.projects{width:400px}}@media screen and (min-width: 1213px){.projects{width:100%}}.projects-title{margin-bottom:15px;font-weight:400;font-size:16px;line-height:1.3;text-transform:uppercase;color:#fff}@media screen and (min-width: 768px){.projects-title{font-size:18px}}.projects-list{width:305px;display:flex;flex-wrap:wrap;margin-left:auto;margin-right:auto;margin-top:25px}@media screen and (min-width: 768px){.projects-list{width:400px}}@media screen and (min-width: 1213px){.projects-list{width:650px}}.projects-list li{width:250px;padding:15px;margin-bottom:25px;flex-basis:100%;background-color:#202020;border-radius:5px;box-shadow:0px 15px 25px rgba(0,0,0,.35)}@media screen and (min-width: 768px){.projects-list li{width:340px}}@media screen and (min-width: 1213px){.projects-list li{width:620px}}.projects-list div{margin-left:7.5px}.projects-list img{width:275px;margin-left:auto;margin-right:auto;border-radius:5px}@media screen and (min-width: 768px){.projects-list img{width:365px}}@media screen and (min-width: 1213px){.projects-list img{width:600px}}.projects-list h3{margin-top:25px;margin-bottom:15px;margin-left:7.5px;font-weight:500;font-size:16px;line-height:1.2;color:#fff}@media screen and (min-width: 768px){.projects-list h3{font-size:18px}}.projects-list p{margin-bottom:15px;color:#d2d2d2;font-weight:400;font-size:12px;line-height:1.5}@media screen and (min-width: 768px){.projects-list p{font-size:14px}}.projects-list a{color:#fff;margin-bottom:10px;font-family:"Roboto";font-weight:400;font-size:15px;line-height:1.2;text-transform:uppercase;transition:color 250ms cubic-bezier(0.4, 0, 0.2, 1)}@media screen and (min-width: 768px){.projects-list a{font-size:18px}}.projects-list a:hover,.projects-list a:focus{color:#828282}',""]);const c=r},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",n=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),n&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),n&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<t.length;d++){var p=[].concat(t[d]);n&&r[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),i&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=i):p[2]=i),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function i(t){for(var i=-1,n=0;n<e.length;n++)if(e[n].identifier===t){i=n;break}return i}function n(t,n){for(var a={},r=[],c=0;c<t.length;c++){var s=t[c],d=n.base?s[0]+n.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=i(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,n);n.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}r.push(l)}return r}function o(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var r=0;r<a.length;r++){var c=i(a[r]);e[c].references--}for(var s=n(t,o),d=0;d<a.length;d++){var p=i(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:t=>{"use strict";var e={};t.exports=function(t,i){var n=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{"use strict";t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var o=void 0!==i.layer;o&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,o&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var a=i.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},165:(t,e,i)=>{"use strict";i.r(e);var n=i(711);i.n(n)().init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:100,delay:0,duration:900,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"})},152:(t,e,i)=>{"use strict";i.d(e,{B:()=>n});const n={count:0,counterIncrement(t){this.count<t?this.count+=1:this.count=0},counterDecrement(t,e){this.count=t,this.count>0?this.count-=1:this.count=e},addOpacity(t,e){t.classList.add(e)},removeOpacity(t,e){t.classList.remove(e)}}},640:(t,e,i)=>{"use strict";i.r(e);const n=i.p+"IMG_2440.jpeg",o=i.p+"github.svg",a=i.p+"facebook.svg",r=i.p+"linkedin.svg",c=i.p+"author.jpg",s=i.p+"projectsImg.jpg",d=i.p+"telegram.svg",p=i.p+"multipleline.svg",l=i.p+"close.svg",u=document.getElementById("mainImage"),m=document.getElementById("github"),f=document.getElementById("facebook"),h=document.getElementById("linkedin"),g=document.getElementById("author"),b=document.getElementById("projectsImg"),x=document.getElementById("telegram"),v=document.getElementById("burger"),w=document.getElementById("close");u.src=n,m.src=o,f.src=a,h.src=r,g.src=c,b.src=s,x.src=d,v.src=p,w.src=l},944:(t,e,i)=>{"use strict";i.r(e);var n=i(152);const o=document.getElementById("burger-button"),a=document.getElementById("close"),r=document.getElementById("header-container");n.B.addOpacity(r,"is-open"),n.B.addOpacity(a,"remove-button"),o.addEventListener("click",(function(){n.B.removeOpacity(r,"is-open"),n.B.removeOpacity(a,"remove-button"),n.B.addOpacity(o,"remove-button")})),a.addEventListener("click",(function(){n.B.addOpacity(r,"is-open"),n.B.addOpacity(a,"remove-button"),n.B.removeOpacity(o,"remove-button")}))},483:(t,e,i)=>{"use strict";i.r(e);const n=[{id:"1",avatar:i.p+"web_studio.jpeg",title:"WebStudio",description:"Верстка веб-сайту для Веб Студії. Метою сайту є залучення клієнтів",technologies:"HTML, CSS, SCSS Java Script, GitHub",linkWeb:"https://vitaliy28031985.github.io/goit-markup-hw-08/index.html",linkGit:"https://github.com/Vitaliy28031985/goit-markup-hw-08"},{id:"2",avatar:i.p+"ice-cream.jpeg",title:"IceCream",description:"Верстка веб-сайту для фірми яка займається виробництвом унікального морозива. Метою сайту є як залучення клієнтів так і продаж морозива онлайн.",technologies:"HTML, CSS, SCSS Java Script, GitHub",linkWeb:"https://slavikidak.github.io/project-pink/",linkGit:"https://github.com/slavikidak/project-pink"},{id:"3",avatar:i.p+"filmoteka.jpeg",title:"Filmoteka",description:"Створено веб-сайт для пошуку новинок кіно. Метою сайту є надання користувачеві можливості підбору фільму для перегляду. З допомогою веб-застосунку користувач може: прочитати коротку інформацію про фільм переглянути його трейлер та прийняти рішення чи варто цей фільм переглядати.",technologies:"HTML, CSS, SCSS Java Script, GitHub, Webpack",linkWeb:"https://maksmaximusmaxim.github.io/-team-project/index.html",linkGit:"https://github.com/Maksmaximusmaxim/-team-project"},{id:"4",avatar:i.p+"petly.jpeg",title:"Petly",description:"Веб-застосунок створений для власників домашніх тварин. З його допомогою можна придбати домашнього улюбленця. Якщо хтось знайшов загублену тваринку то він може подати оголошення про знахідку. Також з допомогою застосунку можна віддати в добрі руки домашню тваринку.",technologies:"HTML, CSS, SASS , Java Script, React, Reduxtoolk, RTK Query, Netlify Service, Node.JS, Express, Mongoose, Cloudinary, Webpack, GitHub",linkWeb:"https://sk-care-pets.netlify.app/",linkGit:"https://github.com/serg-rsv/team-project-care-pets"},{id:"5",avatar:i.p+"FinanceLedger.jpg",title:"Finance Ledger",description:"Верстка веб-сайту для фірми яка займається наданням фінансових послуг. Метою сайту є залучення клієнтів.",technologies:"HTML, CSS, SCSS Java Script, GitHub, Webpack",linkWeb:"https://ornate-tiramisu-a67827.netlify.app",linkGit:"https://github.com/Vitaliy28031985/finance-ledger"}],o=document.querySelector(".projects-list");(()=>{const t=n.map((({avatar:t,title:e,description:i,technologies:n,linkWeb:o,linkGit:a})=>`<li data-aos="fade-in">\n         <div><img src=${t} alt="${e}" /></div>\n         <h3>${e}</h3>\n         <p>${i}</p>\n         <p>${n}</p>\n         <a href="${o}">Перейти на сторінку застосунку</a>\n         <a href="${a}">Переглянути код</a>\n         </li>`)).join("");o.insertAdjacentHTML("afterbegin",t)})()},354:(t,e,i)=>{"use strict";i.r(e);var n=i(152);const o=[{link:"https://www.youtube.com/embed/A6P1-kr9GHQ?controls"},{link:"https://www.youtube.com/embed/tnpX9AkP2Jc"}],a=document.getElementById("return"),r=document.getElementById("next"),c=document.getElementById("video");a.addEventListener("click",(function(){n.B.counterDecrement(n.B.count,1),c.src=o[n.B.count].link})),r.addEventListener("click",(function(){n.B.counterIncrement(1),c.src=o[n.B.count].link}))}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),i.nc=void 0,(()=>{"use strict";var t=i(379),e=i.n(t),n=i(795),o=i.n(n),a=i(569),r=i.n(a),c=i(565),s=i.n(c),d=i(216),p=i.n(d),l=i(589),u=i.n(l),m=i(151),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=r().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,i(165),i(483),i(640),i(483),i(354),i(944)})()})();