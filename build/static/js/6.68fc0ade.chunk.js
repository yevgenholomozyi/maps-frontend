(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{42:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(49);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(45);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},45:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},46:function(e,t,n){"use strict";var a=n(16);n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l}));var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},l=function(e,t){var n,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;"REQUIRE"===c.type&&(r=r&&e.trim().length>0),"MINLENGTH"===c.type&&(r=r&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.trim().length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){i.e(l)}finally{i.f()}return r}},49:function(e,t,n){},52:function(e,t,n){"use strict";var a=n(10),r=n(43),i=n(0),c=n.n(i),l=n(46),u=(n(53),function(e,t){switch(t.type){case"CHANGE":var n=t.val,a=t.validators;return Object(r.a)(Object(r.a)({},e),{},{value:n,isValid:Object(l.d)(n,a)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=e.id,n=e.onInput,r=e.validators,l=e.element,o=e.label,s=e.rows,p=e.type,d=e.placeholder,f=e.errorText,v=e.initialValid,b=e.valueProp,m=Object(i.useReducer)(u,{value:b||"",isTouched:!1,isValid:v||!1}),O=Object(a.a)(m,2),y=O[0],h=O[1],j=y.value,E=y.isValid;Object(i.useEffect)((function(){n(t,j,E)}),[t,j,E,n]);var T=function(e){h({type:"CHANGE",val:e.target.value,validators:r})},V=function(){h({type:"TOUCH"})},w="input"===l?c.a.createElement("input",{id:t,type:p,placeholder:d,onChange:T,onBlur:V,value:y.value}):c.a.createElement("textarea",{id:t,rows:s||3,onChange:T,onBlur:V,value:y.value,placeholder:d});return c.a.createElement("div",{className:"form-control ".concat(!y.isValid&&y.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:t},o),w,!y.isValid&&y.isTouched&&c.a.createElement("p",null,f))}},53:function(e,t,n){},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(10),r=n(45),i=n(43),c=n(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var n=Object(c.useReducer)(l,{inputs:e,isValid:t}),r=Object(a.a)(n,2),i=r[0],u=r[1];return[i,Object(c.useCallback)((function(e,t,n){u({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},57:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(47),r=n.n(a),i=n(48),c=n(10),l=n(0),u=n.n(l),o=n(1),s=n(52),p=n(44),d=n(46),f=n(42),v=n(54),b=n(51),m=n(15),O=n(50),y=n(11);n(57);t.default=function(){var e=Object(l.useContext)(y.a),t=e.userId,n=e.token,a=Object(b.a)(),h=a.isLoading,j=a.error,E=a.sendRequest,T=a.clearError,V=Object(l.useState)(),w=Object(c.a)(V,2),I=w[0],g=w[1],N=Object(o.h)().placeId,A=Object(o.g)(),P=Object(v.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),C=Object(c.a)(P,3),x=C[0],S=C[1],k=C[2];Object(l.useEffect)((function(){(function(){var e=Object(i.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("".concat("https://locationslist.herokuapp.com/api","/places/").concat(N));case 3:t=e.sent,n=t.place,g(n),k({title:{value:n.title,isValid:!0},description:{value:n.description,isValid:!0}},!0),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[E,N,k]);var H=function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,E("".concat("https://locationslist.herokuapp.com/api","/places/").concat(N),"PATCH",JSON.stringify({title:x.inputs.title.value,description:x.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)});case 4:A.push("/"+t+"/places"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return h?u.a.createElement("div",{className:"center"},u.a.createElement(m.a,null)):I||j?u.a.createElement(l.Fragment,null,u.a.createElement(O.a,{error:j,onClear:T}),!h&&I&&u.a.createElement("form",{className:"place-form",onSubmit:H},u.a.createElement(s.a,{element:"input",type:"text",label:"Title",id:"title",validators:[Object(d.c)()],valueProp:I.title,initialValid:!0,onInput:S,errorText:"".concat("please enter a valid"," title")}),u.a.createElement(s.a,{element:"textarea",label:"Description",id:"description",validators:[Object(d.b)(5)],valueProp:I.description,initialValid:!0,onInput:S,errorText:"".concat("please enter a valid"," description which should not be shorter than 5 symbols")}),u.a.createElement(p.a,{type:"submit",disabled:!x.isValid},"UPDATE PLACE"))):u.a.createElement("div",{className:"center"},u.a.createElement(f.a,null,u.a.createElement("h2",null,"Could not find place!")))}}}]);
//# sourceMappingURL=6.68fc0ade.chunk.js.map