(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{43:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(45);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},45:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},46:function(e,t,a){"use strict";var n=a(16);a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return l}));var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},l=function(e,t){var a,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(t);try{for(i.s();!(a=i.n()).done;){var c=a.value;"REQUIRE"===c.type&&(r=r&&e.trim().length>0),"MINLENGTH"===c.type&&(r=r&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.trim().length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){i.e(l)}finally{i.f()}return r}},52:function(e,t,a){"use strict";var n=a(10),r=a(43),i=a(0),c=a.n(i),l=a(46),u=(a(53),function(e,t){switch(t.type){case"CHANGE":var a=t.val,n=t.validators;return Object(r.a)(Object(r.a)({},e),{},{value:a,isValid:Object(l.d)(a,n)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=e.id,a=e.onInput,r=e.validators,l=e.element,o=e.label,s=e.rows,p=e.type,d=e.placeholder,f=e.errorText,v=e.initialValid,b=e.valueProp,m=Object(i.useReducer)(u,{value:b||"",isTouched:!1,isValid:v||!1}),O=Object(n.a)(m,2),y=O[0],j=O[1],E=y.value,h=y.isValid;Object(i.useEffect)((function(){a(t,E,h)}),[t,E,h,a]);var g=function(e){j({type:"CHANGE",val:e.target.value,validators:r})},I=function(){j({type:"TOUCH"})},w="input"===l?c.a.createElement("input",{id:t,type:p,placeholder:d,onChange:g,onBlur:I,value:y.value}):c.a.createElement("textarea",{id:t,rows:s||3,onChange:g,onBlur:I,value:y.value,placeholder:d});return c.a.createElement("div",{className:"form-control ".concat(!y.isValid&&y.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:t},o),w,!y.isValid&&y.isTouched&&c.a.createElement("p",null,f))}},53:function(e,t,a){},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(10),r=a(45),i=a(43),c=a(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var a=Object(c.useReducer)(l,{inputs:e,isValid:t}),r=Object(n.a)(a,2),i=r[0],u=r[1];return[i,Object(c.useCallback)((function(e,t,a){u({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},55:function(e,t,a){"use strict";var n=a(10),r=a(0),i=a.n(r),c=a(44);a(56);t.a=function(e){var t=e.id,a=e.errorText,l=e.onInput,u=e.center,o=Object(r.useState)(),s=Object(n.a)(o,2),p=s[0],d=s[1],f=Object(r.useState)(),v=Object(n.a)(f,2),b=v[0],m=v[1],O=Object(r.useState)(!1),y=Object(n.a)(O,2),j=y[0],E=y[1],h=Object(r.useRef)();Object(r.useEffect)((function(){if(p){var e=new FileReader;e.onload=function(){m(e.result)},e.readAsDataURL(p)}}),[p]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{id:t,ref:h,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(e){var a,n=j;e.target.files&&1===e.target.files.length?(a=e.target.files[0],d(a),E(!0),n=!0):(E(!1),n=!1),l(t,a,n)}}),i.a.createElement("div",{className:"image-upload ".concat(u&&"center")},i.a.createElement("div",{className:"image-upload__preview"},b&&i.a.createElement("img",{src:b,alt:"Preview"}),!b&&i.a.createElement("p",null,"Please pick an image.")),i.a.createElement(c.a,{type:"button",onClick:function(){h.current.click()}},"PICK IMAGE")),!j&&i.a.createElement("p",null,a))}},56:function(e,t,a){},57:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a.n(n),i=a(48),c=a(10),l=a(0),u=a.n(l),o=a(1),s=a(11),p=a(52),d=a(44),f=a(54),v=a(51),b=a(46),m=a(55),O=a(15),y=a(50);a(57);t.default=function(){var e=Object(l.useContext)(s.a).token,t=Object(v.a)(),a=t.isLoading,n=t.error,j=t.sendRequest,E=t.clearError,h=Object(f.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),g=Object(c.a)(h,2),I=g[0],w=I.inputs,T=I.isValid,V=g[1],A=w.title,P=w.description,N=w.address,C=w.image,S=Object(o.g)(),k=function(){var t=Object(i.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,(n=new FormData).append("title",A.value),n.append("description",P.value),n.append("address",N.value),n.append("image",C.value),t.next=9,j("".concat("https://locationslist.herokuapp.com/api","/places"),"POST",n,{Authorization:"Bearer ".concat(e)});case 9:S.push("/"),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement(l.Fragment,null,u.a.createElement(y.a,{error:n,onClear:E}),u.a.createElement("form",{className:"place-form",error:n,onSubmit:k},a&&u.a.createElement(O.a,{asOverlay:!0}),u.a.createElement(p.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(b.c)()],placeholder:"please enter a title.",errorText:"please enter a valid title",onInput:V}),u.a.createElement(p.a,{id:"description",element:"textarea",label:"Description",validators:[Object(b.b)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:V,placeholder:"enter a valid description"}),u.a.createElement(p.a,{id:"address",element:"input",label:"Address",validators:[Object(b.c)()],placeholder:"please type your address",onInput:V}),u.a.createElement(m.a,{id:"image",onInput:V}),u.a.createElement(d.a,{type:"submit",disabled:!T},"ADD PLACE")))}}}]);
//# sourceMappingURL=5.b5eceda9.chunk.js.map