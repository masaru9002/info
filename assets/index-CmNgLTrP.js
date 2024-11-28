var Iy=Object.defineProperty;var Oy=(n,e,t)=>e in n?Iy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var hl=(n,e,t)=>Oy(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function O_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var F_={exports:{}},ac={},k_={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),ky=Symbol.for("react.portal"),zy=Symbol.for("react.fragment"),By=Symbol.for("react.strict_mode"),Hy=Symbol.for("react.profiler"),Vy=Symbol.for("react.provider"),Gy=Symbol.for("react.context"),Wy=Symbol.for("react.forward_ref"),jy=Symbol.for("react.suspense"),Xy=Symbol.for("react.memo"),Yy=Symbol.for("react.lazy"),Fp=Symbol.iterator;function qy(n){return n===null||typeof n!="object"?null:(n=Fp&&n[Fp]||n["@@iterator"],typeof n=="function"?n:null)}var z_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B_=Object.assign,H_={};function Bo(n,e,t){this.props=n,this.context=e,this.refs=H_,this.updater=t||z_}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Bo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function V_(){}V_.prototype=Bo.prototype;function dh(n,e,t){this.props=n,this.context=e,this.refs=H_,this.updater=t||z_}var hh=dh.prototype=new V_;hh.constructor=dh;B_(hh,Bo.prototype);hh.isPureReactComponent=!0;var kp=Array.isArray,G_=Object.prototype.hasOwnProperty,ph={current:null},W_={key:!0,ref:!0,__self:!0,__source:!0};function j_(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)G_.call(e,i)&&!W_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:nl,type:n,key:s,ref:a,props:r,_owner:ph.current}}function $y(n,e){return{$$typeof:nl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function mh(n){return typeof n=="object"&&n!==null&&n.$$typeof===nl}function Ky(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var zp=/\/+/g;function Oc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Ky(""+n.key):e.toString(36)}function su(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case nl:case ky:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Oc(a,0):i,kp(r)?(t="",n!=null&&(t=n.replace(zp,"$&/")+"/"),su(r,e,t,"",function(u){return u})):r!=null&&(mh(r)&&(r=$y(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(zp,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",kp(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Oc(s,o);a+=su(s,e,t,l,r)}else if(l=qy(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Oc(s,o++),a+=su(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function pl(n,e,t){if(n==null)return n;var i=[],r=0;return su(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Zy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var dn={current:null},ou={transition:null},Qy={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:ou,ReactCurrentOwner:ph};function X_(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:pl,forEach:function(n,e,t){pl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return pl(n,function(){e++}),e},toArray:function(n){return pl(n,function(e){return e})||[]},only:function(n){if(!mh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};We.Component=Bo;We.Fragment=zy;We.Profiler=Hy;We.PureComponent=dh;We.StrictMode=By;We.Suspense=jy;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qy;We.act=X_;We.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=B_({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ph.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)G_.call(e,l)&&!W_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:nl,type:n.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(n){return n={$$typeof:Gy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Vy,_context:n},n.Consumer=n};We.createElement=j_;We.createFactory=function(n){var e=j_.bind(null,n);return e.type=n,e};We.createRef=function(){return{current:null}};We.forwardRef=function(n){return{$$typeof:Wy,render:n}};We.isValidElement=mh;We.lazy=function(n){return{$$typeof:Yy,_payload:{_status:-1,_result:n},_init:Zy}};We.memo=function(n,e){return{$$typeof:Xy,type:n,compare:e===void 0?null:e}};We.startTransition=function(n){var e=ou.transition;ou.transition={};try{n()}finally{ou.transition=e}};We.unstable_act=X_;We.useCallback=function(n,e){return dn.current.useCallback(n,e)};We.useContext=function(n){return dn.current.useContext(n)};We.useDebugValue=function(){};We.useDeferredValue=function(n){return dn.current.useDeferredValue(n)};We.useEffect=function(n,e){return dn.current.useEffect(n,e)};We.useId=function(){return dn.current.useId()};We.useImperativeHandle=function(n,e,t){return dn.current.useImperativeHandle(n,e,t)};We.useInsertionEffect=function(n,e){return dn.current.useInsertionEffect(n,e)};We.useLayoutEffect=function(n,e){return dn.current.useLayoutEffect(n,e)};We.useMemo=function(n,e){return dn.current.useMemo(n,e)};We.useReducer=function(n,e,t){return dn.current.useReducer(n,e,t)};We.useRef=function(n){return dn.current.useRef(n)};We.useState=function(n){return dn.current.useState(n)};We.useSyncExternalStore=function(n,e,t){return dn.current.useSyncExternalStore(n,e,t)};We.useTransition=function(){return dn.current.useTransition()};We.version="18.3.1";k_.exports=We;var Ze=k_.exports;const os=O_(Ze);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=Ze,e1=Symbol.for("react.element"),t1=Symbol.for("react.fragment"),n1=Object.prototype.hasOwnProperty,i1=Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r1={key:!0,ref:!0,__self:!0,__source:!0};function Y_(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)n1.call(e,i)&&!r1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:e1,type:n,key:s,ref:a,props:r,_owner:i1.current}}ac.Fragment=t1;ac.jsx=Y_;ac.jsxs=Y_;F_.exports=ac;var ee=F_.exports,q_={exports:{}},Bn={},$_={exports:{}},K_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(H,k){var I=H.length;H.push(k);e:for(;0<I;){var P=I-1>>>1,O=H[P];if(0<r(O,k))H[P]=k,H[I]=O,I=P;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var k=H[0],I=H.pop();if(I!==k){H[0]=I;e:for(var P=0,O=H.length,oe=O>>>1;P<oe;){var N=2*(P+1)-1,de=H[N],J=N+1,me=H[J];if(0>r(de,I))J<O&&0>r(me,de)?(H[P]=me,H[J]=I,P=J):(H[P]=de,H[N]=I,P=N);else if(J<O&&0>r(me,I))H[P]=me,H[J]=I,P=J;else break e}}return k}function r(H,k){var I=H.sortIndex-k.sortIndex;return I!==0?I:H.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,f=null,d=3,p=!1,_=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(H){for(var k=t(u);k!==null;){if(k.callback===null)i(u);else if(k.startTime<=H)i(u),k.sortIndex=k.expirationTime,e(l,k);else break;k=t(u)}}function y(H){if(m=!1,x(H),!_)if(t(l)!==null)_=!0,V(S);else{var k=t(u);k!==null&&Y(y,k.startTime-H)}}function S(H,k){_=!1,m&&(m=!1,h(C),C=-1),p=!0;var I=d;try{for(x(k),f=t(l);f!==null&&(!(f.expirationTime>k)||H&&!U());){var P=f.callback;if(typeof P=="function"){f.callback=null,d=f.priorityLevel;var O=P(f.expirationTime<=k);k=n.unstable_now(),typeof O=="function"?f.callback=O:f===t(l)&&i(l),x(k)}else i(l);f=t(l)}if(f!==null)var oe=!0;else{var N=t(u);N!==null&&Y(y,N.startTime-k),oe=!1}return oe}finally{f=null,d=I,p=!1}}var T=!1,E=null,C=-1,M=5,w=-1;function U(){return!(n.unstable_now()-w<M)}function z(){if(E!==null){var H=n.unstable_now();w=H;var k=!0;try{k=E(!0,H)}finally{k?G():(T=!1,E=null)}}else T=!1}var G;if(typeof v=="function")G=function(){v(z)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,B=L.port2;L.port1.onmessage=z,G=function(){B.postMessage(null)}}else G=function(){g(z,0)};function V(H){E=H,T||(T=!0,G())}function Y(H,k){C=g(function(){H(n.unstable_now())},k)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,V(S))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(H){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var I=d;d=k;try{return H()}finally{d=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,k){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var I=d;d=H;try{return k()}finally{d=I}},n.unstable_scheduleCallback=function(H,k,I){var P=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?P+I:P):I=P,H){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=I+O,H={id:c++,callback:k,priorityLevel:H,startTime:I,expirationTime:O,sortIndex:-1},I>P?(H.sortIndex=I,e(u,H),t(l)===null&&H===t(u)&&(m?(h(C),C=-1):m=!0,Y(y,I-P))):(H.sortIndex=O,e(l,H),_||p||(_=!0,V(S))),H},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(H){var k=d;return function(){var I=d;d=k;try{return H.apply(this,arguments)}finally{d=I}}}})(K_);$_.exports=K_;var s1=$_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1=Ze,kn=s1;function re(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z_=new Set,Ca={};function As(n,e){To(n,e),To(n+"Capture",e)}function To(n,e){for(Ca[n]=e,n=0;n<e.length;n++)Z_.add(e[n])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qf=Object.prototype.hasOwnProperty,a1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bp={},Hp={};function l1(n){return qf.call(Hp,n)?!0:qf.call(Bp,n)?!1:a1.test(n)?Hp[n]=!0:(Bp[n]=!0,!1)}function u1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function c1(n,e,t,i){if(e===null||typeof e>"u"||u1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){jt[n]=new hn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];jt[e]=new hn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){jt[n]=new hn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){jt[n]=new hn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){jt[n]=new hn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){jt[n]=new hn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){jt[n]=new hn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){jt[n]=new hn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){jt[n]=new hn(n,5,!1,n.toLowerCase(),null,!1,!1)});var gh=/[\-:]([a-z])/g;function _h(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(gh,_h);jt[e]=new hn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(gh,_h);jt[e]=new hn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(gh,_h);jt[e]=new hn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){jt[n]=new hn(n,1,!1,n.toLowerCase(),null,!1,!1)});jt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){jt[n]=new hn(n,1,!1,n.toLowerCase(),null,!0,!0)});function vh(n,e,t,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(c1(e,t,r,i)&&(t=null),i||r===null?l1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var er=o1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),xh=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),Q_=Symbol.for("react.provider"),J_=Symbol.for("react.context"),yh=Symbol.for("react.forward_ref"),Kf=Symbol.for("react.suspense"),Zf=Symbol.for("react.suspense_list"),Sh=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),e0=Symbol.for("react.offscreen"),Vp=Symbol.iterator;function Xo(n){return n===null||typeof n!="object"?null:(n=Vp&&n[Vp]||n["@@iterator"],typeof n=="function"?n:null)}var mt=Object.assign,Fc;function sa(n){if(Fc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Fc=e&&e[1]||""}return`
`+Fc+n}var kc=!1;function zc(n,e){if(!n||kc)return"";kc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{kc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?sa(n):""}function f1(n){switch(n.tag){case 5:return sa(n.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return n=zc(n.type,!1),n;case 11:return n=zc(n.type.render,!1),n;case 1:return n=zc(n.type,!0),n;default:return""}}function Qf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Qs:return"Fragment";case Zs:return"Portal";case $f:return"Profiler";case xh:return"StrictMode";case Kf:return"Suspense";case Zf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case J_:return(n.displayName||"Context")+".Consumer";case Q_:return(n._context.displayName||"Context")+".Provider";case yh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Sh:return e=n.displayName||null,e!==null?e:Qf(n.type)||"Memo";case ar:e=n._payload,n=n._init;try{return Qf(n(e))}catch{}}return null}function d1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qf(e);case 8:return e===xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function t0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h1(n){var e=t0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function gl(n){n._valueTracker||(n._valueTracker=h1(n))}function n0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=t0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Su(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Jf(n,e){var t=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Gp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Nr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function i0(n,e){e=e.checked,e!=null&&vh(n,"checked",e,!1)}function ed(n,e){i0(n,e);var t=Nr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?td(n,e.type,t):e.hasOwnProperty("defaultValue")&&td(n,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Wp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function td(n,e,t){(e!=="number"||Su(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var oa=Array.isArray;function ho(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Nr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function nd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function jp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(re(92));if(oa(t)){if(1<t.length)throw Error(re(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Nr(t)}}function r0(n,e){var t=Nr(e.value),i=Nr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Xp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function s0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function id(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?s0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var _l,o0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_l.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ra(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p1=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(n){p1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),da[e]=da[n]})});function a0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||da.hasOwnProperty(n)&&da[n]?(""+e).trim():e+"px"}function l0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=a0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var m1=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rd(n,e){if(e){if(m1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function sd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var od=null;function Mh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ad=null,po=null,mo=null;function Yp(n){if(n=sl(n)){if(typeof ad!="function")throw Error(re(280));var e=n.stateNode;e&&(e=dc(e),ad(n.stateNode,n.type,e))}}function u0(n){po?mo?mo.push(n):mo=[n]:po=n}function c0(){if(po){var n=po,e=mo;if(mo=po=null,Yp(n),e)for(n=0;n<e.length;n++)Yp(e[n])}}function f0(n,e){return n(e)}function d0(){}var Bc=!1;function h0(n,e,t){if(Bc)return n(e,t);Bc=!0;try{return f0(n,e,t)}finally{Bc=!1,(po!==null||mo!==null)&&(d0(),c0())}}function Pa(n,e){var t=n.stateNode;if(t===null)return null;var i=dc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(re(231,e,typeof t));return t}var ld=!1;if(Yi)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){ld=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{ld=!1}function g1(n,e,t,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ha=!1,Mu=null,Eu=!1,ud=null,_1={onError:function(n){ha=!0,Mu=n}};function v1(n,e,t,i,r,s,a,o,l){ha=!1,Mu=null,g1.apply(_1,arguments)}function x1(n,e,t,i,r,s,a,o,l){if(v1.apply(this,arguments),ha){if(ha){var u=Mu;ha=!1,Mu=null}else throw Error(re(198));Eu||(Eu=!0,ud=u)}}function bs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function p0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function qp(n){if(bs(n)!==n)throw Error(re(188))}function y1(n){var e=n.alternate;if(!e){if(e=bs(n),e===null)throw Error(re(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return qp(r),n;if(s===i)return qp(r),e;s=s.sibling}throw Error(re(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(t.alternate!==i)throw Error(re(190))}if(t.tag!==3)throw Error(re(188));return t.stateNode.current===t?n:e}function m0(n){return n=y1(n),n!==null?g0(n):null}function g0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=g0(n);if(e!==null)return e;n=n.sibling}return null}var _0=kn.unstable_scheduleCallback,$p=kn.unstable_cancelCallback,S1=kn.unstable_shouldYield,M1=kn.unstable_requestPaint,Et=kn.unstable_now,E1=kn.unstable_getCurrentPriorityLevel,Eh=kn.unstable_ImmediatePriority,v0=kn.unstable_UserBlockingPriority,Tu=kn.unstable_NormalPriority,T1=kn.unstable_LowPriority,x0=kn.unstable_IdlePriority,lc=null,Ai=null;function w1(n){if(Ai&&typeof Ai.onCommitFiberRoot=="function")try{Ai.onCommitFiberRoot(lc,n,void 0,(n.current.flags&128)===128)}catch{}}var hi=Math.clz32?Math.clz32:C1,A1=Math.log,b1=Math.LN2;function C1(n){return n>>>=0,n===0?32:31-(A1(n)/b1|0)|0}var vl=64,xl=4194304;function aa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=aa(o):(s&=a,s!==0&&(i=aa(s)))}else a=t&~r,a!==0?i=aa(a):s!==0&&(i=aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-hi(e),r=1<<t,i|=n[t],e&=~r;return i}function R1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-hi(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=R1(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function cd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function y0(){var n=vl;return vl<<=1,!(vl&4194240)&&(vl=64),n}function Hc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function il(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-hi(e),n[e]=t}function L1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-hi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Th(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-hi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Qe=0;function S0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var M0,wh,E0,T0,w0,fd=!1,yl=[],yr=null,Sr=null,Mr=null,La=new Map,Da=new Map,cr=[],D1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kp(n,e){switch(n){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function qo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=sl(e),e!==null&&wh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function N1(n,e,t,i,r){switch(e){case"focusin":return yr=qo(yr,n,e,t,i,r),!0;case"dragenter":return Sr=qo(Sr,n,e,t,i,r),!0;case"mouseover":return Mr=qo(Mr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return La.set(s,qo(La.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Da.set(s,qo(Da.get(s)||null,n,e,t,i,r)),!0}return!1}function A0(n){var e=ns(n.target);if(e!==null){var t=bs(e);if(t!==null){if(e=t.tag,e===13){if(e=p0(t),e!==null){n.blockedOn=e,w0(n.priority,function(){E0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function au(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=dd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);od=i,t.target.dispatchEvent(i),od=null}else return e=sl(t),e!==null&&wh(e),n.blockedOn=t,!1;e.shift()}return!0}function Zp(n,e,t){au(n)&&t.delete(e)}function U1(){fd=!1,yr!==null&&au(yr)&&(yr=null),Sr!==null&&au(Sr)&&(Sr=null),Mr!==null&&au(Mr)&&(Mr=null),La.forEach(Zp),Da.forEach(Zp)}function $o(n,e){n.blockedOn===e&&(n.blockedOn=null,fd||(fd=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,U1)))}function Na(n){function e(r){return $o(r,n)}if(0<yl.length){$o(yl[0],n);for(var t=1;t<yl.length;t++){var i=yl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(yr!==null&&$o(yr,n),Sr!==null&&$o(Sr,n),Mr!==null&&$o(Mr,n),La.forEach(e),Da.forEach(e),t=0;t<cr.length;t++)i=cr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<cr.length&&(t=cr[0],t.blockedOn===null);)A0(t),t.blockedOn===null&&cr.shift()}var go=er.ReactCurrentBatchConfig,Au=!0;function I1(n,e,t,i){var r=Qe,s=go.transition;go.transition=null;try{Qe=1,Ah(n,e,t,i)}finally{Qe=r,go.transition=s}}function O1(n,e,t,i){var r=Qe,s=go.transition;go.transition=null;try{Qe=4,Ah(n,e,t,i)}finally{Qe=r,go.transition=s}}function Ah(n,e,t,i){if(Au){var r=dd(n,e,t,i);if(r===null)Zc(n,e,i,bu,t),Kp(n,i);else if(N1(r,n,e,t,i))i.stopPropagation();else if(Kp(n,i),e&4&&-1<D1.indexOf(n)){for(;r!==null;){var s=sl(r);if(s!==null&&M0(s),s=dd(n,e,t,i),s===null&&Zc(n,e,i,bu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zc(n,e,i,null,t)}}var bu=null;function dd(n,e,t,i){if(bu=null,n=Mh(i),n=ns(n),n!==null)if(e=bs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=p0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return bu=n,null}function b0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E1()){case Eh:return 1;case v0:return 4;case Tu:case T1:return 16;case x0:return 536870912;default:return 16}default:return 16}}var dr=null,bh=null,lu=null;function C0(){if(lu)return lu;var n,e=bh,t=e.length,i,r="value"in dr?dr.value:dr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return lu=r.slice(n,1<i?1-i:void 0)}function uu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Sl(){return!0}function Qp(){return!1}function Hn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sl:Qp,this.isPropagationStopped=Qp,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),e}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=Hn(Ho),rl=mt({},Ho,{view:0,detail:0}),F1=Hn(rl),Vc,Gc,Ko,uc=mt({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ko&&(Ko&&n.type==="mousemove"?(Vc=n.screenX-Ko.screenX,Gc=n.screenY-Ko.screenY):Gc=Vc=0,Ko=n),Vc)},movementY:function(n){return"movementY"in n?n.movementY:Gc}}),Jp=Hn(uc),k1=mt({},uc,{dataTransfer:0}),z1=Hn(k1),B1=mt({},rl,{relatedTarget:0}),Wc=Hn(B1),H1=mt({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),V1=Hn(H1),G1=mt({},Ho,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),W1=Hn(G1),j1=mt({},Ho,{data:0}),em=Hn(j1),X1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=q1[n])?!!e[n]:!1}function Rh(){return $1}var K1=mt({},rl,{key:function(n){if(n.key){var e=X1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=uu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Y1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rh,charCode:function(n){return n.type==="keypress"?uu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?uu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Z1=Hn(K1),Q1=mt({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=Hn(Q1),J1=mt({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rh}),eS=Hn(J1),tS=mt({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=Hn(tS),iS=mt({},uc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=Hn(iS),sS=[9,13,27,32],Ph=Yi&&"CompositionEvent"in window,pa=null;Yi&&"documentMode"in document&&(pa=document.documentMode);var oS=Yi&&"TextEvent"in window&&!pa,R0=Yi&&(!Ph||pa&&8<pa&&11>=pa),nm=" ",im=!1;function P0(n,e){switch(n){case"keyup":return sS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Js=!1;function aS(n,e){switch(n){case"compositionend":return L0(e);case"keypress":return e.which!==32?null:(im=!0,nm);case"textInput":return n=e.data,n===nm&&im?null:n;default:return null}}function lS(n,e){if(Js)return n==="compositionend"||!Ph&&P0(n,e)?(n=C0(),lu=bh=dr=null,Js=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R0&&e.locale!=="ko"?null:e.data;default:return null}}var uS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!uS[n.type]:e==="textarea"}function D0(n,e,t,i){u0(i),e=Cu(e,"onChange"),0<e.length&&(t=new Ch("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ma=null,Ua=null;function cS(n){G0(n,0)}function cc(n){var e=no(n);if(n0(e))return n}function fS(n,e){if(n==="change")return e}var N0=!1;if(Yi){var jc;if(Yi){var Xc="oninput"in document;if(!Xc){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),Xc=typeof sm.oninput=="function"}jc=Xc}else jc=!1;N0=jc&&(!document.documentMode||9<document.documentMode)}function om(){ma&&(ma.detachEvent("onpropertychange",U0),Ua=ma=null)}function U0(n){if(n.propertyName==="value"&&cc(Ua)){var e=[];D0(e,Ua,n,Mh(n)),h0(cS,e)}}function dS(n,e,t){n==="focusin"?(om(),ma=e,Ua=t,ma.attachEvent("onpropertychange",U0)):n==="focusout"&&om()}function hS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return cc(Ua)}function pS(n,e){if(n==="click")return cc(e)}function mS(n,e){if(n==="input"||n==="change")return cc(e)}function gS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var mi=typeof Object.is=="function"?Object.is:gS;function Ia(n,e){if(mi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!qf.call(e,r)||!mi(n[r],e[r]))return!1}return!0}function am(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function lm(n,e){var t=am(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=am(t)}}function I0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?I0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function O0(){for(var n=window,e=Su();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Su(n.document)}return e}function Lh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function _S(n){var e=O0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&I0(t.ownerDocument.documentElement,t)){if(i!==null&&Lh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=lm(t,s);var a=lm(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var vS=Yi&&"documentMode"in document&&11>=document.documentMode,eo=null,hd=null,ga=null,pd=!1;function um(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pd||eo==null||eo!==Su(i)||(i=eo,"selectionStart"in i&&Lh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ga&&Ia(ga,i)||(ga=i,i=Cu(hd,"onSelect"),0<i.length&&(e=new Ch("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=eo)))}function Ml(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var to={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},Yc={},F0={};Yi&&(F0=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function fc(n){if(Yc[n])return Yc[n];if(!to[n])return n;var e=to[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in F0)return Yc[n]=e[t];return n}var k0=fc("animationend"),z0=fc("animationiteration"),B0=fc("animationstart"),H0=fc("transitionend"),V0=new Map,cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(n,e){V0.set(n,e),As(e,[n])}for(var qc=0;qc<cm.length;qc++){var $c=cm[qc],xS=$c.toLowerCase(),yS=$c[0].toUpperCase()+$c.slice(1);kr(xS,"on"+yS)}kr(k0,"onAnimationEnd");kr(z0,"onAnimationIteration");kr(B0,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(H0,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SS=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function fm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,x1(i,e,void 0,n),n.currentTarget=null}function G0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;fm(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;fm(r,o,u),s=l}}}if(Eu)throw n=ud,Eu=!1,ud=null,n}function st(n,e){var t=e[xd];t===void 0&&(t=e[xd]=new Set);var i=n+"__bubble";t.has(i)||(W0(e,n,2,!1),t.add(i))}function Kc(n,e,t){var i=0;e&&(i|=4),W0(t,n,i,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function Oa(n){if(!n[El]){n[El]=!0,Z_.forEach(function(t){t!=="selectionchange"&&(SS.has(t)||Kc(t,!1,n),Kc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[El]||(e[El]=!0,Kc("selectionchange",!1,e))}}function W0(n,e,t,i){switch(b0(e)){case 1:var r=I1;break;case 4:r=O1;break;default:r=Ah}t=r.bind(null,e,t,n),r=void 0,!ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Zc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=ns(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}h0(function(){var u=s,c=Mh(t),f=[];e:{var d=V0.get(n);if(d!==void 0){var p=Ch,_=n;switch(n){case"keypress":if(uu(t)===0)break e;case"keydown":case"keyup":p=Z1;break;case"focusin":_="focus",p=Wc;break;case"focusout":_="blur",p=Wc;break;case"beforeblur":case"afterblur":p=Wc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=z1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=eS;break;case k0:case z0:case B0:p=V1;break;case H0:p=nS;break;case"scroll":p=F1;break;case"wheel":p=rS;break;case"copy":case"cut":case"paste":p=W1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=tm}var m=(e&4)!==0,g=!m&&n==="scroll",h=m?d!==null?d+"Capture":null:d;m=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=Pa(v,h),y!=null&&m.push(Fa(v,y,x)))),g)break;v=v.return}0<m.length&&(d=new p(d,_,null,t,c),f.push({event:d,listeners:m}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==od&&(_=t.relatedTarget||t.fromElement)&&(ns(_)||_[qi]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?ns(_):null,_!==null&&(g=bs(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(m=Jp,y="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(m=tm,y="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?d:no(p),x=_==null?d:no(_),d=new m(y,v+"leave",p,t,c),d.target=g,d.relatedTarget=x,y=null,ns(c)===u&&(m=new m(h,v+"enter",_,t,c),m.target=x,m.relatedTarget=g,y=m),g=y,p&&_)t:{for(m=p,h=_,v=0,x=m;x;x=Ps(x))v++;for(x=0,y=h;y;y=Ps(y))x++;for(;0<v-x;)m=Ps(m),v--;for(;0<x-v;)h=Ps(h),x--;for(;v--;){if(m===h||h!==null&&m===h.alternate)break t;m=Ps(m),h=Ps(h)}m=null}else m=null;p!==null&&dm(f,d,p,m,!1),_!==null&&g!==null&&dm(f,g,_,m,!0)}}e:{if(d=u?no(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=fS;else if(rm(d))if(N0)S=mS;else{S=hS;var T=dS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=pS);if(S&&(S=S(n,u))){D0(f,S,t,c);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&td(d,"number",d.value)}switch(T=u?no(u):window,n){case"focusin":(rm(T)||T.contentEditable==="true")&&(eo=T,hd=u,ga=null);break;case"focusout":ga=hd=eo=null;break;case"mousedown":pd=!0;break;case"contextmenu":case"mouseup":case"dragend":pd=!1,um(f,t,c);break;case"selectionchange":if(vS)break;case"keydown":case"keyup":um(f,t,c)}var E;if(Ph)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Js?P0(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(R0&&t.locale!=="ko"&&(Js||C!=="onCompositionStart"?C==="onCompositionEnd"&&Js&&(E=C0()):(dr=c,bh="value"in dr?dr.value:dr.textContent,Js=!0)),T=Cu(u,C),0<T.length&&(C=new em(C,n,null,t,c),f.push({event:C,listeners:T}),E?C.data=E:(E=L0(t),E!==null&&(C.data=E)))),(E=oS?aS(n,t):lS(n,t))&&(u=Cu(u,"onBeforeInput"),0<u.length&&(c=new em("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=E))}G0(f,e)})}function Fa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Cu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pa(n,t),s!=null&&i.unshift(Fa(n,s,r)),s=Pa(n,e),s!=null&&i.push(Fa(n,s,r))),n=n.return}return i}function Ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dm(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Pa(t,s),l!=null&&a.unshift(Fa(t,l,o))):r||(l=Pa(t,s),l!=null&&a.push(Fa(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var MS=/\r\n?/g,ES=/\u0000|\uFFFD/g;function hm(n){return(typeof n=="string"?n:""+n).replace(MS,`
`).replace(ES,"")}function Tl(n,e,t){if(e=hm(e),hm(n)!==e&&t)throw Error(re(425))}function Ru(){}var md=null,gd=null;function _d(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vd=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,wS=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(n){return pm.resolve(null).then(n).catch(AS)}:vd;function AS(n){setTimeout(function(){throw n})}function Qc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Na(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Na(e)}function Er(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function mm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Vo=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Vo,ka="__reactProps$"+Vo,qi="__reactContainer$"+Vo,xd="__reactEvents$"+Vo,bS="__reactListeners$"+Vo,CS="__reactHandles$"+Vo;function ns(n){var e=n[Ei];if(e)return e;for(var t=n.parentNode;t;){if(e=t[qi]||t[Ei]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=mm(n);n!==null;){if(t=n[Ei])return t;n=mm(n)}return e}n=t,t=n.parentNode}return null}function sl(n){return n=n[Ei]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function no(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(re(33))}function dc(n){return n[ka]||null}var yd=[],io=-1;function zr(n){return{current:n}}function at(n){0>io||(n.current=yd[io],yd[io]=null,io--)}function rt(n,e){io++,yd[io]=n.current,n.current=e}var Ur={},tn=zr(Ur),gn=zr(!1),_s=Ur;function wo(n,e){var t=n.type.contextTypes;if(!t)return Ur;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function _n(n){return n=n.childContextTypes,n!=null}function Pu(){at(gn),at(tn)}function gm(n,e,t){if(tn.current!==Ur)throw Error(re(168));rt(tn,e),rt(gn,t)}function j0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,d1(n)||"Unknown",r));return mt({},t,i)}function Lu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,_s=tn.current,rt(tn,n),rt(gn,gn.current),!0}function _m(n,e,t){var i=n.stateNode;if(!i)throw Error(re(169));t?(n=j0(n,e,_s),i.__reactInternalMemoizedMergedChildContext=n,at(gn),at(tn),rt(tn,n)):at(gn),rt(gn,t)}var Bi=null,hc=!1,Jc=!1;function X0(n){Bi===null?Bi=[n]:Bi.push(n)}function RS(n){hc=!0,X0(n)}function Br(){if(!Jc&&Bi!==null){Jc=!0;var n=0,e=Qe;try{var t=Bi;for(Qe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Bi=null,hc=!1}catch(r){throw Bi!==null&&(Bi=Bi.slice(n+1)),_0(Eh,Br),r}finally{Qe=e,Jc=!1}}return null}var ro=[],so=0,Du=null,Nu=0,jn=[],Xn=0,vs=null,Gi=1,Wi="";function Kr(n,e){ro[so++]=Nu,ro[so++]=Du,Du=n,Nu=e}function Y0(n,e,t){jn[Xn++]=Gi,jn[Xn++]=Wi,jn[Xn++]=vs,vs=n;var i=Gi;n=Wi;var r=32-hi(i)-1;i&=~(1<<r),t+=1;var s=32-hi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Gi=1<<32-hi(e)+r|t<<r|i,Wi=s+n}else Gi=1<<s|t<<r|i,Wi=n}function Dh(n){n.return!==null&&(Kr(n,1),Y0(n,1,0))}function Nh(n){for(;n===Du;)Du=ro[--so],ro[so]=null,Nu=ro[--so],ro[so]=null;for(;n===vs;)vs=jn[--Xn],jn[Xn]=null,Wi=jn[--Xn],jn[Xn]=null,Gi=jn[--Xn],jn[Xn]=null}var In=null,Nn=null,lt=!1,ui=null;function q0(n,e){var t=Kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function vm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,In=n,Nn=Er(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,In=n,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=vs!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,In=n,Nn=null,!0):!1;default:return!1}}function Sd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Md(n){if(lt){var e=Nn;if(e){var t=e;if(!vm(n,e)){if(Sd(n))throw Error(re(418));e=Er(t.nextSibling);var i=In;e&&vm(n,e)?q0(i,t):(n.flags=n.flags&-4097|2,lt=!1,In=n)}}else{if(Sd(n))throw Error(re(418));n.flags=n.flags&-4097|2,lt=!1,In=n}}}function xm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;In=n}function wl(n){if(n!==In)return!1;if(!lt)return xm(n),lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!_d(n.type,n.memoizedProps)),e&&(e=Nn)){if(Sd(n))throw $0(),Error(re(418));for(;e;)q0(n,e),e=Er(e.nextSibling)}if(xm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(re(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Nn=Er(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Nn=null}}else Nn=In?Er(n.stateNode.nextSibling):null;return!0}function $0(){for(var n=Nn;n;)n=Er(n.nextSibling)}function Ao(){Nn=In=null,lt=!1}function Uh(n){ui===null?ui=[n]:ui.push(n)}var PS=er.ReactCurrentBatchConfig;function Zo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(re(309));var i=t.stateNode}if(!i)throw Error(re(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(re(284));if(!t._owner)throw Error(re(290,n))}return n}function Al(n,e){throw n=Object.prototype.toString.call(e),Error(re(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function ym(n){var e=n._init;return e(n._payload)}function K0(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=br(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return n&&h.alternate===null&&(h.flags|=2),h}function o(h,v,x,y){return v===null||v.tag!==6?(v=af(x,h.mode,y),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,y){var S=x.type;return S===Qs?c(h,v,x.props.children,y,x.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ar&&ym(S)===v.type)?(y=r(v,x.props),y.ref=Zo(h,v,x),y.return=h,y):(y=gu(x.type,x.key,x.props,null,h.mode,y),y.ref=Zo(h,v,x),y.return=h,y)}function u(h,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=lf(x,h.mode,y),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,y,S){return v===null||v.tag!==7?(v=ls(x,h.mode,y,S),v.return=h,v):(v=r(v,x),v.return=h,v)}function f(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=af(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ml:return x=gu(v.type,v.key,v.props,null,h.mode,x),x.ref=Zo(h,null,v),x.return=h,x;case Zs:return v=lf(v,h.mode,x),v.return=h,v;case ar:var y=v._init;return f(h,y(v._payload),x)}if(oa(v)||Xo(v))return v=ls(v,h.mode,x,null),v.return=h,v;Al(h,v)}return null}function d(h,v,x,y){var S=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:o(h,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ml:return x.key===S?l(h,v,x,y):null;case Zs:return x.key===S?u(h,v,x,y):null;case ar:return S=x._init,d(h,v,S(x._payload),y)}if(oa(x)||Xo(x))return S!==null?null:c(h,v,x,y,null);Al(h,x)}return null}function p(h,v,x,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,o(v,h,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ml:return h=h.get(y.key===null?x:y.key)||null,l(v,h,y,S);case Zs:return h=h.get(y.key===null?x:y.key)||null,u(v,h,y,S);case ar:var T=y._init;return p(h,v,x,T(y._payload),S)}if(oa(y)||Xo(y))return h=h.get(x)||null,c(v,h,y,S,null);Al(v,y)}return null}function _(h,v,x,y){for(var S=null,T=null,E=v,C=v=0,M=null;E!==null&&C<x.length;C++){E.index>C?(M=E,E=null):M=E.sibling;var w=d(h,E,x[C],y);if(w===null){E===null&&(E=M);break}n&&E&&w.alternate===null&&e(h,E),v=s(w,v,C),T===null?S=w:T.sibling=w,T=w,E=M}if(C===x.length)return t(h,E),lt&&Kr(h,C),S;if(E===null){for(;C<x.length;C++)E=f(h,x[C],y),E!==null&&(v=s(E,v,C),T===null?S=E:T.sibling=E,T=E);return lt&&Kr(h,C),S}for(E=i(h,E);C<x.length;C++)M=p(E,h,C,x[C],y),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?C:M.key),v=s(M,v,C),T===null?S=M:T.sibling=M,T=M);return n&&E.forEach(function(U){return e(h,U)}),lt&&Kr(h,C),S}function m(h,v,x,y){var S=Xo(x);if(typeof S!="function")throw Error(re(150));if(x=S.call(x),x==null)throw Error(re(151));for(var T=S=null,E=v,C=v=0,M=null,w=x.next();E!==null&&!w.done;C++,w=x.next()){E.index>C?(M=E,E=null):M=E.sibling;var U=d(h,E,w.value,y);if(U===null){E===null&&(E=M);break}n&&E&&U.alternate===null&&e(h,E),v=s(U,v,C),T===null?S=U:T.sibling=U,T=U,E=M}if(w.done)return t(h,E),lt&&Kr(h,C),S;if(E===null){for(;!w.done;C++,w=x.next())w=f(h,w.value,y),w!==null&&(v=s(w,v,C),T===null?S=w:T.sibling=w,T=w);return lt&&Kr(h,C),S}for(E=i(h,E);!w.done;C++,w=x.next())w=p(E,h,C,w.value,y),w!==null&&(n&&w.alternate!==null&&E.delete(w.key===null?C:w.key),v=s(w,v,C),T===null?S=w:T.sibling=w,T=w);return n&&E.forEach(function(z){return e(h,z)}),lt&&Kr(h,C),S}function g(h,v,x,y){if(typeof x=="object"&&x!==null&&x.type===Qs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ml:e:{for(var S=x.key,T=v;T!==null;){if(T.key===S){if(S=x.type,S===Qs){if(T.tag===7){t(h,T.sibling),v=r(T,x.props.children),v.return=h,h=v;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ar&&ym(S)===T.type){t(h,T.sibling),v=r(T,x.props),v.ref=Zo(h,T,x),v.return=h,h=v;break e}t(h,T);break}else e(h,T);T=T.sibling}x.type===Qs?(v=ls(x.props.children,h.mode,y,x.key),v.return=h,h=v):(y=gu(x.type,x.key,x.props,null,h.mode,y),y.ref=Zo(h,v,x),y.return=h,h=y)}return a(h);case Zs:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=lf(x,h.mode,y),v.return=h,h=v}return a(h);case ar:return T=x._init,g(h,v,T(x._payload),y)}if(oa(x))return _(h,v,x,y);if(Xo(x))return m(h,v,x,y);Al(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=af(x,h.mode,y),v.return=h,h=v),a(h)):t(h,v)}return g}var bo=K0(!0),Z0=K0(!1),Uu=zr(null),Iu=null,oo=null,Ih=null;function Oh(){Ih=oo=Iu=null}function Fh(n){var e=Uu.current;at(Uu),n._currentValue=e}function Ed(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function _o(n,e){Iu=n,Ih=oo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function ei(n){var e=n._currentValue;if(Ih!==n)if(n={context:n,memoizedValue:e,next:null},oo===null){if(Iu===null)throw Error(re(308));oo=n,Iu.dependencies={lanes:0,firstContext:n}}else oo=oo.next=n;return e}var is=null;function kh(n){is===null?is=[n]:is.push(n)}function Q0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,kh(e)):(t.next=r.next,r.next=t),e.interleaved=t,$i(n,i)}function $i(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var lr=!1;function zh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(n,t)}return r=i.interleaved,r===null?(e.next=e,kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(n,t)}function cu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Th(n,t)}}function Sm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ou(n,e,t,i){var r=n.updateQueue;lr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=n.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,c=u=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=n,m=o;switch(d=e,p=t,m.tag){case 1:if(_=m.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=m.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=mt({},f,d);break e;case 2:lr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ys|=a,n.lanes=a,n.memoizedState=f}}function Mm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var ol={},bi=zr(ol),za=zr(ol),Ba=zr(ol);function rs(n){if(n===ol)throw Error(re(174));return n}function Bh(n,e){switch(rt(Ba,e),rt(za,n),rt(bi,ol),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:id(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=id(e,n)}at(bi),rt(bi,e)}function Co(){at(bi),at(za),at(Ba)}function ev(n){rs(Ba.current);var e=rs(bi.current),t=id(e,n.type);e!==t&&(rt(za,n),rt(bi,t))}function Hh(n){za.current===n&&(at(bi),at(za))}var ft=zr(0);function Fu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ef=[];function Vh(){for(var n=0;n<ef.length;n++)ef[n]._workInProgressVersionPrimary=null;ef.length=0}var fu=er.ReactCurrentDispatcher,tf=er.ReactCurrentBatchConfig,xs=0,pt=null,Rt=null,Ot=null,ku=!1,_a=!1,Ha=0,LS=0;function Xt(){throw Error(re(321))}function Gh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!mi(n[t],e[t]))return!1;return!0}function Wh(n,e,t,i,r,s){if(xs=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fu.current=n===null||n.memoizedState===null?IS:OS,n=t(i,r),_a){s=0;do{if(_a=!1,Ha=0,25<=s)throw Error(re(301));s+=1,Ot=Rt=null,e.updateQueue=null,fu.current=FS,n=t(i,r)}while(_a)}if(fu.current=zu,e=Rt!==null&&Rt.next!==null,xs=0,Ot=Rt=pt=null,ku=!1,e)throw Error(re(300));return n}function jh(){var n=Ha!==0;return Ha=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?pt.memoizedState=Ot=n:Ot=Ot.next=n,Ot}function ti(){if(Rt===null){var n=pt.alternate;n=n!==null?n.memoizedState:null}else n=Rt.next;var e=Ot===null?pt.memoizedState:Ot.next;if(e!==null)Ot=e,Rt=n;else{if(n===null)throw Error(re(310));Rt=n,n={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ot===null?pt.memoizedState=Ot=n:Ot=Ot.next=n}return Ot}function Va(n,e){return typeof e=="function"?e(n):e}function nf(n){var e=ti(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=Rt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((xs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,pt.lanes|=c,ys|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,mi(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,pt.lanes|=s,ys|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function rf(n){var e=ti(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);mi(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function tv(){}function nv(n,e){var t=pt,i=ti(),r=e(),s=!mi(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,Xh(sv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(t.flags|=2048,Ga(9,rv.bind(null,t,i,r,e),void 0,null),kt===null)throw Error(re(349));xs&30||iv(t,e,r)}return r}function iv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function rv(n,e,t,i){e.value=t,e.getSnapshot=i,ov(e)&&av(n)}function sv(n,e,t){return t(function(){ov(e)&&av(n)})}function ov(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!mi(n,t)}catch{return!0}}function av(n){var e=$i(n,1);e!==null&&pi(e,n,1,-1)}function Em(n){var e=yi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},e.queue=n,n=n.dispatch=US.bind(null,pt,n),[e.memoizedState,n]}function Ga(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function lv(){return ti().memoizedState}function du(n,e,t,i){var r=yi();pt.flags|=n,r.memoizedState=Ga(1|e,t,void 0,i===void 0?null:i)}function pc(n,e,t,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var a=Rt.memoizedState;if(s=a.destroy,i!==null&&Gh(i,a.deps)){r.memoizedState=Ga(e,t,s,i);return}}pt.flags|=n,r.memoizedState=Ga(1|e,t,s,i)}function Tm(n,e){return du(8390656,8,n,e)}function Xh(n,e){return pc(2048,8,n,e)}function uv(n,e){return pc(4,2,n,e)}function cv(n,e){return pc(4,4,n,e)}function fv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function dv(n,e,t){return t=t!=null?t.concat([n]):null,pc(4,4,fv.bind(null,e,n),t)}function Yh(){}function hv(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Gh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function pv(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Gh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function mv(n,e,t){return xs&21?(mi(t,e)||(t=y0(),pt.lanes|=t,ys|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function DS(n,e){var t=Qe;Qe=t!==0&&4>t?t:4,n(!0);var i=tf.transition;tf.transition={};try{n(!1),e()}finally{Qe=t,tf.transition=i}}function gv(){return ti().memoizedState}function NS(n,e,t){var i=Ar(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},_v(n))vv(e,t);else if(t=Q0(n,e,t,i),t!==null){var r=fn();pi(t,n,i,r),xv(t,e,i)}}function US(n,e,t){var i=Ar(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(_v(n))vv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,mi(o,a)){var l=e.interleaved;l===null?(r.next=r,kh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Q0(n,e,r,i),t!==null&&(r=fn(),pi(t,n,i,r),xv(t,e,i))}}function _v(n){var e=n.alternate;return n===pt||e!==null&&e===pt}function vv(n,e){_a=ku=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function xv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Th(n,t)}}var zu={readContext:ei,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},IS={readContext:ei,useCallback:function(n,e){return yi().memoizedState=[n,e===void 0?null:e],n},useContext:ei,useEffect:Tm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,du(4194308,4,fv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return du(4194308,4,n,e)},useInsertionEffect:function(n,e){return du(4,2,n,e)},useMemo:function(n,e){var t=yi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=yi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=NS.bind(null,pt,n),[i.memoizedState,n]},useRef:function(n){var e=yi();return n={current:n},e.memoizedState=n},useState:Em,useDebugValue:Yh,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Em(!1),e=n[0];return n=DS.bind(null,n[1]),yi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=pt,r=yi();if(lt){if(t===void 0)throw Error(re(407));t=t()}else{if(t=e(),kt===null)throw Error(re(349));xs&30||iv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Tm(sv.bind(null,i,s,n),[n]),i.flags|=2048,Ga(9,rv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=yi(),e=kt.identifierPrefix;if(lt){var t=Wi,i=Gi;t=(i&~(1<<32-hi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ha++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=LS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},OS={readContext:ei,useCallback:hv,useContext:ei,useEffect:Xh,useImperativeHandle:dv,useInsertionEffect:uv,useLayoutEffect:cv,useMemo:pv,useReducer:nf,useRef:lv,useState:function(){return nf(Va)},useDebugValue:Yh,useDeferredValue:function(n){var e=ti();return mv(e,Rt.memoizedState,n)},useTransition:function(){var n=nf(Va)[0],e=ti().memoizedState;return[n,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1},FS={readContext:ei,useCallback:hv,useContext:ei,useEffect:Xh,useImperativeHandle:dv,useInsertionEffect:uv,useLayoutEffect:cv,useMemo:pv,useReducer:rf,useRef:lv,useState:function(){return rf(Va)},useDebugValue:Yh,useDeferredValue:function(n){var e=ti();return Rt===null?e.memoizedState=n:mv(e,Rt.memoizedState,n)},useTransition:function(){var n=rf(Va)[0],e=ti().memoizedState;return[n,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1};function ai(n,e){if(n&&n.defaultProps){e=mt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Td(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:mt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var mc={isMounted:function(n){return(n=n._reactInternals)?bs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=fn(),r=Ar(n),s=Xi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Tr(n,s,r),e!==null&&(pi(e,n,r,i),cu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=fn(),r=Ar(n),s=Xi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Tr(n,s,r),e!==null&&(pi(e,n,r,i),cu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=fn(),i=Ar(n),r=Xi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Tr(n,r,i),e!==null&&(pi(e,n,i,t),cu(e,n,i))}};function wm(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ia(t,i)||!Ia(r,s):!0}function yv(n,e,t){var i=!1,r=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=_n(e)?_s:tn.current,i=e.contextTypes,s=(i=i!=null)?wo(n,r):Ur),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Am(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&mc.enqueueReplaceState(e,e.state,null)}function wd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},zh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=_n(e)?_s:tn.current,r.context=wo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Td(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Ou(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ro(n,e){try{var t="",i=e;do t+=f1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function sf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ad(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var kS=typeof WeakMap=="function"?WeakMap:Map;function Sv(n,e,t){t=Xi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Hu||(Hu=!0,Od=i),Ad(n,e)},t}function Mv(n,e,t){t=Xi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ad(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ad(n,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function bm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new kS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=QS.bind(null,n,e,t),e.then(n,n))}function Cm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Rm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Xi(-1,1),e.tag=2,Tr(t,e,1))),t.lanes|=1),n)}var zS=er.ReactCurrentOwner,mn=!1;function an(n,e,t,i){e.child=n===null?Z0(e,null,t,i):bo(e,n.child,t,i)}function Pm(n,e,t,i,r){t=t.render;var s=e.ref;return _o(e,r),i=Wh(n,e,t,i,s,r),t=jh(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ki(n,e,r)):(lt&&t&&Dh(e),e.flags|=1,an(n,e,i,r),e.child)}function Lm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!tp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Ev(n,e,s,i,r)):(n=gu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ia,t(a,i)&&n.ref===e.ref)return Ki(n,e,r)}return e.flags|=1,n=br(s,i),n.ref=e.ref,n.return=e,e.child=n}function Ev(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ia(s,i)&&n.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,Ki(n,e,r)}return bd(n,e,t,i,r)}function Tv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(lo,Pn),Pn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,rt(lo,Pn),Pn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,rt(lo,Pn),Pn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,rt(lo,Pn),Pn|=i;return an(n,e,r,t),e.child}function wv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function bd(n,e,t,i,r){var s=_n(t)?_s:tn.current;return s=wo(e,s),_o(e,r),t=Wh(n,e,t,i,s,r),i=jh(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ki(n,e,r)):(lt&&i&&Dh(e),e.flags|=1,an(n,e,t,r),e.child)}function Dm(n,e,t,i,r){if(_n(t)){var s=!0;Lu(e)}else s=!1;if(_o(e,r),e.stateNode===null)hu(n,e),yv(e,t,i),wd(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=ei(u):(u=_n(t)?_s:tn.current,u=wo(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Am(e,a,i,u),lr=!1;var d=e.memoizedState;a.state=d,Ou(e,i,a,r),l=e.memoizedState,o!==i||d!==l||gn.current||lr?(typeof c=="function"&&(Td(e,t,c,i),l=e.memoizedState),(o=lr||wm(e,t,o,i,d,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,J0(n,e),o=e.memoizedProps,u=e.type===e.elementType?o:ai(e.type,o),a.props=u,f=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=_n(t)?_s:tn.current,l=wo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&Am(e,a,i,l),lr=!1,d=e.memoizedState,a.state=d,Ou(e,i,a,r);var _=e.memoizedState;o!==f||d!==_||gn.current||lr?(typeof p=="function"&&(Td(e,t,p,i),_=e.memoizedState),(u=lr||wm(e,t,u,i,d,_,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Cd(n,e,t,i,s,r)}function Cd(n,e,t,i,r,s){wv(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&_m(e,t,!1),Ki(n,e,s);i=e.stateNode,zS.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=bo(e,n.child,null,s),e.child=bo(e,null,o,s)):an(n,e,o,s),e.memoizedState=i.state,r&&_m(e,t,!0),e.child}function Av(n){var e=n.stateNode;e.pendingContext?gm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&gm(n,e.context,!1),Bh(n,e.containerInfo)}function Nm(n,e,t,i,r){return Ao(),Uh(r),e.flags|=256,an(n,e,t,i),e.child}var Rd={dehydrated:null,treeContext:null,retryLane:0};function Pd(n){return{baseLanes:n,cachePool:null,transitions:null}}function bv(n,e,t){var i=e.pendingProps,r=ft.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),rt(ft,r&1),n===null)return Md(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=vc(a,i,0,null),n=ls(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Pd(t),e.memoizedState=Rd,n):qh(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return BS(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=br(o,s):(s=ls(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Pd(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Rd,i}return s=n.child,n=s.sibling,i=br(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function qh(n,e){return e=vc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function bl(n,e,t,i){return i!==null&&Uh(i),bo(e,n.child,null,t),n=qh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function BS(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=sf(Error(re(422))),bl(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=vc({mode:"visible",children:i.children},r,0,null),s=ls(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&bo(e,n.child,null,a),e.child.memoizedState=Pd(a),e.memoizedState=Rd,s);if(!(e.mode&1))return bl(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=sf(s,i,void 0),bl(n,e,a,i)}if(o=(a&n.childLanes)!==0,mn||o){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(n,r),pi(i,n,r,-1))}return ep(),i=sf(Error(re(421))),bl(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=JS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Nn=Er(r.nextSibling),In=e,lt=!0,ui=null,n!==null&&(jn[Xn++]=Gi,jn[Xn++]=Wi,jn[Xn++]=vs,Gi=n.id,Wi=n.overflow,vs=e),e=qh(e,i.children),e.flags|=4096,e)}function Um(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ed(n.return,e,t)}function of(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Cv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(an(n,e,i.children,t),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Um(n,t,e);else if(n.tag===19)Um(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(rt(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Fu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),of(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Fu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}of(e,!0,t,null,s);break;case"together":of(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ki(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ys|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(re(153));if(e.child!==null){for(n=e.child,t=br(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=br(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function HS(n,e,t){switch(e.tag){case 3:Av(e),Ao();break;case 5:ev(e);break;case 1:_n(e.type)&&Lu(e);break;case 4:Bh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Uu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ft,ft.current&1),e.flags|=128,null):t&e.child.childLanes?bv(n,e,t):(rt(ft,ft.current&1),n=Ki(n,e,t),n!==null?n.sibling:null);rt(ft,ft.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Cv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,Tv(n,e,t)}return Ki(n,e,t)}var Rv,Ld,Pv,Lv;Rv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ld=function(){};Pv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,rs(bi.current);var s=null;switch(t){case"input":r=Jf(n,r),i=Jf(n,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=nd(n,r),i=nd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ru)}rd(t,i);var a;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",n),s||o===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Lv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Qo(n,e){if(!lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function VS(n,e,t){var i=e.pendingProps;switch(Nh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return _n(e.type)&&Pu(),Yt(e),null;case 3:return i=e.stateNode,Co(),at(gn),at(tn),Vh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(wl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ui!==null&&(zd(ui),ui=null))),Ld(n,e),Yt(e),null;case 5:Hh(e);var r=rs(Ba.current);if(t=e.type,n!==null&&e.stateNode!=null)Pv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Yt(e),null}if(n=rs(bi.current),wl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[ka]=s,n=(e.mode&1)!==0,t){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)st(la[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Gp(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":jp(i,s),st("invalid",i)}rd(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Tl(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Tl(i.textContent,o,n),r=["children",""+o]):Ca.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&st("scroll",i)}switch(t){case"input":gl(i),Wp(i,s,!0);break;case"textarea":gl(i),Xp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ru)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=s0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Ei]=e,n[ka]=i,Rv(n,e,!1,!1),e.stateNode=n;e:{switch(a=sd(t,i),t){case"dialog":st("cancel",n),st("close",n),r=i;break;case"iframe":case"object":case"embed":st("load",n),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)st(la[r],n);r=i;break;case"source":st("error",n),r=i;break;case"img":case"image":case"link":st("error",n),st("load",n),r=i;break;case"details":st("toggle",n),r=i;break;case"input":Gp(n,i),r=Jf(n,i),st("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),st("invalid",n);break;case"textarea":jp(n,i),r=nd(n,i),st("invalid",n);break;default:r=i}rd(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?l0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&o0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ra(n,l):typeof l=="number"&&Ra(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",n):l!=null&&vh(n,s,l,a))}switch(t){case"input":gl(n),Wp(n,i,!1);break;case"textarea":gl(n),Xp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Nr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ho(n,!!i.multiple,s,!1):i.defaultValue!=null&&ho(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ru)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(n&&e.stateNode!=null)Lv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=rs(Ba.current),rs(bi.current),wl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==t)&&(n=In,n!==null))switch(n.tag){case 3:Tl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Tl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return Yt(e),null;case 13:if(at(ft),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(lt&&Nn!==null&&e.mode&1&&!(e.flags&128))$0(),Ao(),e.flags|=98560,s=!1;else if(s=wl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Ei]=e}else Ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else ui!==null&&(zd(ui),ui=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ft.current&1?Lt===0&&(Lt=3):ep())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Co(),Ld(n,e),n===null&&Oa(e.stateNode.containerInfo),Yt(e),null;case 10:return Fh(e.type._context),Yt(e),null;case 17:return _n(e.type)&&Pu(),Yt(e),null;case 19:if(at(ft),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Qo(s,!1);else{if(Lt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Fu(n),a!==null){for(e.flags|=128,Qo(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return rt(ft,ft.current&1|2),e.child}n=n.sibling}s.tail!==null&&Et()>Po&&(e.flags|=128,i=!0,Qo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Fu(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!lt)return Yt(e),null}else 2*Et()-s.renderingStartTime>Po&&t!==1073741824&&(e.flags|=128,i=!0,Qo(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,t=ft.current,rt(ft,i?t&1|2:t&1),e):(Yt(e),null);case 22:case 23:return Jh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function GS(n,e){switch(Nh(e),e.tag){case 1:return _n(e.type)&&Pu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Co(),at(gn),at(tn),Vh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Hh(e),null;case 13:if(at(ft),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ao()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return at(ft),null;case 4:return Co(),null;case 10:return Fh(e.type._context),null;case 22:case 23:return Jh(),null;case 24:return null;default:return null}}var Cl=!1,Kt=!1,WS=typeof WeakSet=="function"?WeakSet:Set,ve=null;function ao(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){xt(n,e,i)}else t.current=null}function Dd(n,e,t){try{t()}catch(i){xt(n,e,i)}}var Im=!1;function jS(n,e){if(md=Au,n=O0(),Lh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++u===r&&(o=a),d===s&&++c===i&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(gd={focusedElem:n,selectionRange:t},Au=!1,ve=e;ve!==null;)if(e=ve,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ve=n;else for(;ve!==null;){e=ve;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var m=_.memoizedProps,g=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?m:ai(e.type,m),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){xt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}return _=Im,Im=!1,_}function va(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Dd(e,t,s)}r=r.next}while(r!==i)}}function gc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Nd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Dv(n){var e=n.alternate;e!==null&&(n.alternate=null,Dv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ei],delete e[ka],delete e[xd],delete e[bS],delete e[CS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Nv(n){return n.tag===5||n.tag===3||n.tag===4}function Om(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Nv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ud(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ru));else if(i!==4&&(n=n.child,n!==null))for(Ud(n,e,t),n=n.sibling;n!==null;)Ud(n,e,t),n=n.sibling}function Id(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Id(n,e,t),n=n.sibling;n!==null;)Id(n,e,t),n=n.sibling}var Ht=null,li=!1;function tr(n,e,t){for(t=t.child;t!==null;)Uv(n,e,t),t=t.sibling}function Uv(n,e,t){if(Ai&&typeof Ai.onCommitFiberUnmount=="function")try{Ai.onCommitFiberUnmount(lc,t)}catch{}switch(t.tag){case 5:Kt||ao(t,e);case 6:var i=Ht,r=li;Ht=null,tr(n,e,t),Ht=i,li=r,Ht!==null&&(li?(n=Ht,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ht.removeChild(t.stateNode));break;case 18:Ht!==null&&(li?(n=Ht,t=t.stateNode,n.nodeType===8?Qc(n.parentNode,t):n.nodeType===1&&Qc(n,t),Na(n)):Qc(Ht,t.stateNode));break;case 4:i=Ht,r=li,Ht=t.stateNode.containerInfo,li=!0,tr(n,e,t),Ht=i,li=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Dd(t,e,a),r=r.next}while(r!==i)}tr(n,e,t);break;case 1:if(!Kt&&(ao(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){xt(t,e,o)}tr(n,e,t);break;case 21:tr(n,e,t);break;case 22:t.mode&1?(Kt=(i=Kt)||t.memoizedState!==null,tr(n,e,t),Kt=i):tr(n,e,t);break;default:tr(n,e,t)}}function Fm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new WS),e.forEach(function(i){var r=eM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ii(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ht=o.stateNode,li=!1;break e;case 3:Ht=o.stateNode.containerInfo,li=!0;break e;case 4:Ht=o.stateNode.containerInfo,li=!0;break e}o=o.return}if(Ht===null)throw Error(re(160));Uv(s,a,r),Ht=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iv(e,n),e=e.sibling}function Iv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(e,n),xi(n),i&4){try{va(3,n,n.return),gc(3,n)}catch(m){xt(n,n.return,m)}try{va(5,n,n.return)}catch(m){xt(n,n.return,m)}}break;case 1:ii(e,n),xi(n),i&512&&t!==null&&ao(t,t.return);break;case 5:if(ii(e,n),xi(n),i&512&&t!==null&&ao(t,t.return),n.flags&32){var r=n.stateNode;try{Ra(r,"")}catch(m){xt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&i0(r,s),sd(o,a);var u=sd(o,s);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?l0(r,f):c==="dangerouslySetInnerHTML"?o0(r,f):c==="children"?Ra(r,f):vh(r,c,f,u)}switch(o){case"input":ed(r,s);break;case"textarea":r0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ho(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ho(r,!!s.multiple,s.defaultValue,!0):ho(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(m){xt(n,n.return,m)}}break;case 6:if(ii(e,n),xi(n),i&4){if(n.stateNode===null)throw Error(re(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){xt(n,n.return,m)}}break;case 3:if(ii(e,n),xi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(m){xt(n,n.return,m)}break;case 4:ii(e,n),xi(n);break;case 13:ii(e,n),xi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zh=Et())),i&4&&Fm(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Kt=(u=Kt)||c,ii(e,n),Kt=u):ii(e,n),xi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(ve=n,c=n.child;c!==null;){for(f=ve=c;ve!==null;){switch(d=ve,p=d.child,d.tag){case 0:case 11:case 14:case 15:va(4,d,d.return);break;case 1:ao(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(m){xt(i,t,m)}}break;case 5:ao(d,d.return);break;case 22:if(d.memoizedState!==null){zm(f);continue}}p!==null?(p.return=d,ve=p):zm(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=a0("display",a))}catch(m){xt(n,n.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){xt(n,n.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ii(e,n),xi(n),i&4&&Fm(n);break;case 21:break;default:ii(e,n),xi(n)}}function xi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Nv(t)){var i=t;break e}t=t.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ra(r,""),i.flags&=-33);var s=Om(n);Id(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Om(n);Ud(n,o,a);break;default:throw Error(re(161))}}catch(l){xt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function XS(n,e,t){ve=n,Ov(n)}function Ov(n,e,t){for(var i=(n.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Cl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Kt;o=Cl;var u=Kt;if(Cl=a,(Kt=l)&&!u)for(ve=r;ve!==null;)a=ve,l=a.child,a.tag===22&&a.memoizedState!==null?Bm(r):l!==null?(l.return=a,ve=l):Bm(r);for(;s!==null;)ve=s,Ov(s),s=s.sibling;ve=r,Cl=o,Kt=u}km(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):km(n)}}function km(n){for(;ve!==null;){var e=ve;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ai(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Mm(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Na(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Kt||e.flags&512&&Nd(e)}catch(d){xt(e,e.return,d)}}if(e===n){ve=null;break}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}}function zm(n){for(;ve!==null;){var e=ve;if(e===n){ve=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ve=t;break}ve=e.return}}function Bm(n){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{gc(4,e)}catch(l){xt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Nd(e)}catch(l){xt(e,s,l)}break;case 5:var a=e.return;try{Nd(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===n){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var YS=Math.ceil,Bu=er.ReactCurrentDispatcher,$h=er.ReactCurrentOwner,Jn=er.ReactCurrentBatchConfig,Ke=0,kt=null,Ct=null,Wt=0,Pn=0,lo=zr(0),Lt=0,Wa=null,ys=0,_c=0,Kh=0,xa=null,pn=null,Zh=0,Po=1/0,ki=null,Hu=!1,Od=null,wr=null,Rl=!1,hr=null,Vu=0,ya=0,Fd=null,pu=-1,mu=0;function fn(){return Ke&6?Et():pu!==-1?pu:pu=Et()}function Ar(n){return n.mode&1?Ke&2&&Wt!==0?Wt&-Wt:PS.transition!==null?(mu===0&&(mu=y0()),mu):(n=Qe,n!==0||(n=window.event,n=n===void 0?16:b0(n.type)),n):1}function pi(n,e,t,i){if(50<ya)throw ya=0,Fd=null,Error(re(185));il(n,t,i),(!(Ke&2)||n!==kt)&&(n===kt&&(!(Ke&2)&&(_c|=t),Lt===4&&fr(n,Wt)),vn(n,i),t===1&&Ke===0&&!(e.mode&1)&&(Po=Et()+500,hc&&Br()))}function vn(n,e){var t=n.callbackNode;P1(n,e);var i=wu(n,n===kt?Wt:0);if(i===0)t!==null&&$p(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&$p(t),e===1)n.tag===0?RS(Hm.bind(null,n)):X0(Hm.bind(null,n)),wS(function(){!(Ke&6)&&Br()}),t=null;else{switch(S0(i)){case 1:t=Eh;break;case 4:t=v0;break;case 16:t=Tu;break;case 536870912:t=x0;break;default:t=Tu}t=Wv(t,Fv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Fv(n,e){if(pu=-1,mu=0,Ke&6)throw Error(re(327));var t=n.callbackNode;if(vo()&&n.callbackNode!==t)return null;var i=wu(n,n===kt?Wt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Gu(n,i);else{e=i;var r=Ke;Ke|=2;var s=zv();(kt!==n||Wt!==e)&&(ki=null,Po=Et()+500,as(n,e));do try{KS();break}catch(o){kv(n,o)}while(!0);Oh(),Bu.current=s,Ke=r,Ct!==null?e=0:(kt=null,Wt=0,e=Lt)}if(e!==0){if(e===2&&(r=cd(n),r!==0&&(i=r,e=kd(n,r))),e===1)throw t=Wa,as(n,0),fr(n,i),vn(n,Et()),t;if(e===6)fr(n,i);else{if(r=n.current.alternate,!(i&30)&&!qS(r)&&(e=Gu(n,i),e===2&&(s=cd(n),s!==0&&(i=s,e=kd(n,s))),e===1))throw t=Wa,as(n,0),fr(n,i),vn(n,Et()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Zr(n,pn,ki);break;case 3:if(fr(n,i),(i&130023424)===i&&(e=Zh+500-Et(),10<e)){if(wu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){fn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=vd(Zr.bind(null,n,pn,ki),e);break}Zr(n,pn,ki);break;case 4:if(fr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-hi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*YS(i/1960))-i,10<i){n.timeoutHandle=vd(Zr.bind(null,n,pn,ki),i);break}Zr(n,pn,ki);break;case 5:Zr(n,pn,ki);break;default:throw Error(re(329))}}}return vn(n,Et()),n.callbackNode===t?Fv.bind(null,n):null}function kd(n,e){var t=xa;return n.current.memoizedState.isDehydrated&&(as(n,e).flags|=256),n=Gu(n,e),n!==2&&(e=pn,pn=t,e!==null&&zd(e)),n}function zd(n){pn===null?pn=n:pn.push.apply(pn,n)}function qS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!mi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(n,e){for(e&=~Kh,e&=~_c,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-hi(e),i=1<<t;n[t]=-1,e&=~i}}function Hm(n){if(Ke&6)throw Error(re(327));vo();var e=wu(n,0);if(!(e&1))return vn(n,Et()),null;var t=Gu(n,e);if(n.tag!==0&&t===2){var i=cd(n);i!==0&&(e=i,t=kd(n,i))}if(t===1)throw t=Wa,as(n,0),fr(n,e),vn(n,Et()),t;if(t===6)throw Error(re(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Zr(n,pn,ki),vn(n,Et()),null}function Qh(n,e){var t=Ke;Ke|=1;try{return n(e)}finally{Ke=t,Ke===0&&(Po=Et()+500,hc&&Br())}}function Ss(n){hr!==null&&hr.tag===0&&!(Ke&6)&&vo();var e=Ke;Ke|=1;var t=Jn.transition,i=Qe;try{if(Jn.transition=null,Qe=1,n)return n()}finally{Qe=i,Jn.transition=t,Ke=e,!(Ke&6)&&Br()}}function Jh(){Pn=lo.current,at(lo)}function as(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,TS(t)),Ct!==null)for(t=Ct.return;t!==null;){var i=t;switch(Nh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pu();break;case 3:Co(),at(gn),at(tn),Vh();break;case 5:Hh(i);break;case 4:Co();break;case 13:at(ft);break;case 19:at(ft);break;case 10:Fh(i.type._context);break;case 22:case 23:Jh()}t=t.return}if(kt=n,Ct=n=br(n.current,null),Wt=Pn=e,Lt=0,Wa=null,Kh=_c=ys=0,pn=xa=null,is!==null){for(e=0;e<is.length;e++)if(t=is[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}is=null}return n}function kv(n,e){do{var t=Ct;try{if(Oh(),fu.current=zu,ku){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ku=!1}if(xs=0,Ot=Rt=pt=null,_a=!1,Ha=0,$h.current=null,t===null||t.return===null){Lt=1,Wa=e,Ct=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=Wt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Cm(a);if(p!==null){p.flags&=-257,Rm(p,a,o,s,e),p.mode&1&&bm(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var m=new Set;m.add(l),e.updateQueue=m}else _.add(l);break e}else{if(!(e&1)){bm(s,u,e),ep();break e}l=Error(re(426))}}else if(lt&&o.mode&1){var g=Cm(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Rm(g,a,o,s,e),Uh(Ro(l,o));break e}}s=l=Ro(l,o),Lt!==4&&(Lt=2),xa===null?xa=[s]:xa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Sv(s,l,e);Sm(s,h);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(wr===null||!wr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Mv(s,o,e);Sm(s,y);break e}}s=s.return}while(s!==null)}Hv(t)}catch(S){e=S,Ct===t&&t!==null&&(Ct=t=t.return);continue}break}while(!0)}function zv(){var n=Bu.current;return Bu.current=zu,n===null?zu:n}function ep(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),kt===null||!(ys&268435455)&&!(_c&268435455)||fr(kt,Wt)}function Gu(n,e){var t=Ke;Ke|=2;var i=zv();(kt!==n||Wt!==e)&&(ki=null,as(n,e));do try{$S();break}catch(r){kv(n,r)}while(!0);if(Oh(),Ke=t,Bu.current=i,Ct!==null)throw Error(re(261));return kt=null,Wt=0,Lt}function $S(){for(;Ct!==null;)Bv(Ct)}function KS(){for(;Ct!==null&&!S1();)Bv(Ct)}function Bv(n){var e=Gv(n.alternate,n,Pn);n.memoizedProps=n.pendingProps,e===null?Hv(n):Ct=e,$h.current=null}function Hv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=GS(t,e),t!==null){t.flags&=32767,Ct=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Lt=6,Ct=null;return}}else if(t=VS(t,e,Pn),t!==null){Ct=t;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=n}while(e!==null);Lt===0&&(Lt=5)}function Zr(n,e,t){var i=Qe,r=Jn.transition;try{Jn.transition=null,Qe=1,ZS(n,e,t,i)}finally{Jn.transition=r,Qe=i}return null}function ZS(n,e,t,i){do vo();while(hr!==null);if(Ke&6)throw Error(re(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(re(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(L1(n,s),n===kt&&(Ct=kt=null,Wt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Rl||(Rl=!0,Wv(Tu,function(){return vo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Jn.transition,Jn.transition=null;var a=Qe;Qe=1;var o=Ke;Ke|=4,$h.current=null,jS(n,t),Iv(t,n),_S(gd),Au=!!md,gd=md=null,n.current=t,XS(t),M1(),Ke=o,Qe=a,Jn.transition=s}else n.current=t;if(Rl&&(Rl=!1,hr=n,Vu=r),s=n.pendingLanes,s===0&&(wr=null),w1(t.stateNode),vn(n,Et()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hu)throw Hu=!1,n=Od,Od=null,n;return Vu&1&&n.tag!==0&&vo(),s=n.pendingLanes,s&1?n===Fd?ya++:(ya=0,Fd=n):ya=0,Br(),null}function vo(){if(hr!==null){var n=S0(Vu),e=Jn.transition,t=Qe;try{if(Jn.transition=null,Qe=16>n?16:n,hr===null)var i=!1;else{if(n=hr,hr=null,Vu=0,Ke&6)throw Error(re(331));var r=Ke;for(Ke|=4,ve=n.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(ve=u;ve!==null;){var c=ve;switch(c.tag){case 0:case 11:case 15:va(8,c,s)}var f=c.child;if(f!==null)f.return=c,ve=f;else for(;ve!==null;){c=ve;var d=c.sibling,p=c.return;if(Dv(c),c===u){ve=null;break}if(d!==null){d.return=p,ve=d;break}ve=p}}}var _=s.alternate;if(_!==null){var m=_.child;if(m!==null){_.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ve=h;break e}ve=s.return}}var v=n.current;for(ve=v;ve!==null;){a=ve;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ve=x;else e:for(a=v;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:gc(9,o)}}catch(S){xt(o,o.return,S)}if(o===a){ve=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ve=y;break e}ve=o.return}}if(Ke=r,Br(),Ai&&typeof Ai.onPostCommitFiberRoot=="function")try{Ai.onPostCommitFiberRoot(lc,n)}catch{}i=!0}return i}finally{Qe=t,Jn.transition=e}}return!1}function Vm(n,e,t){e=Ro(t,e),e=Sv(n,e,1),n=Tr(n,e,1),e=fn(),n!==null&&(il(n,1,e),vn(n,e))}function xt(n,e,t){if(n.tag===3)Vm(n,n,t);else for(;e!==null;){if(e.tag===3){Vm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){n=Ro(t,n),n=Mv(e,n,1),e=Tr(e,n,1),n=fn(),e!==null&&(il(e,1,n),vn(e,n));break}}e=e.return}}function QS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=fn(),n.pingedLanes|=n.suspendedLanes&t,kt===n&&(Wt&t)===t&&(Lt===4||Lt===3&&(Wt&130023424)===Wt&&500>Et()-Zh?as(n,0):Kh|=t),vn(n,e)}function Vv(n,e){e===0&&(n.mode&1?(e=xl,xl<<=1,!(xl&130023424)&&(xl=4194304)):e=1);var t=fn();n=$i(n,e),n!==null&&(il(n,e,t),vn(n,t))}function JS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Vv(n,t)}function eM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Vv(n,t)}var Gv;Gv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,HS(n,e,t);mn=!!(n.flags&131072)}else mn=!1,lt&&e.flags&1048576&&Y0(e,Nu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hu(n,e),n=e.pendingProps;var r=wo(e,tn.current);_o(e,t),r=Wh(null,e,i,n,r,t);var s=jh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,Lu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zh(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,wd(e,i,n,t),e=Cd(null,e,i,!0,s,t)):(e.tag=0,lt&&s&&Dh(e),an(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(hu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nM(i),n=ai(i,n),r){case 0:e=bd(null,e,i,n,t);break e;case 1:e=Dm(null,e,i,n,t);break e;case 11:e=Pm(null,e,i,n,t);break e;case 14:e=Lm(null,e,i,ai(i.type,n),t);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),bd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Dm(n,e,i,r,t);case 3:e:{if(Av(e),n===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,J0(n,e),Ou(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ro(Error(re(423)),e),e=Nm(n,e,i,t,r);break e}else if(i!==r){r=Ro(Error(re(424)),e),e=Nm(n,e,i,t,r);break e}else for(Nn=Er(e.stateNode.containerInfo.firstChild),In=e,lt=!0,ui=null,t=Z0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ao(),i===r){e=Ki(n,e,t);break e}an(n,e,i,t)}e=e.child}return e;case 5:return ev(e),n===null&&Md(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,_d(i,r)?a=null:s!==null&&_d(i,s)&&(e.flags|=32),wv(n,e),an(n,e,a,t),e.child;case 6:return n===null&&Md(e),null;case 13:return bv(n,e,t);case 4:return Bh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=bo(e,null,i,t):an(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Pm(n,e,i,r,t);case 7:return an(n,e,e.pendingProps,t),e.child;case 8:return an(n,e,e.pendingProps.children,t),e.child;case 12:return an(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt(Uu,i._currentValue),i._currentValue=a,s!==null)if(mi(s.value,a)){if(s.children===r.children&&!gn.current){e=Ki(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ed(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Ed(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}an(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_o(e,t),r=ei(r),i=i(r),e.flags|=1,an(n,e,i,t),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),Lm(n,e,i,r,t);case 15:return Ev(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),hu(n,e),e.tag=1,_n(i)?(n=!0,Lu(e)):n=!1,_o(e,t),yv(e,i,r),wd(e,i,r,t),Cd(null,e,i,!0,n,t);case 19:return Cv(n,e,t);case 22:return Tv(n,e,t)}throw Error(re(156,e.tag))};function Wv(n,e){return _0(n,e)}function tM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,e,t,i){return new tM(n,e,t,i)}function tp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nM(n){if(typeof n=="function")return tp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===yh)return 11;if(n===Sh)return 14}return 2}function br(n,e){var t=n.alternate;return t===null?(t=Kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function gu(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")tp(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Qs:return ls(t.children,r,s,e);case xh:a=8,r|=8;break;case $f:return n=Kn(12,t,e,r|2),n.elementType=$f,n.lanes=s,n;case Kf:return n=Kn(13,t,e,r),n.elementType=Kf,n.lanes=s,n;case Zf:return n=Kn(19,t,e,r),n.elementType=Zf,n.lanes=s,n;case e0:return vc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Q_:a=10;break e;case J_:a=9;break e;case yh:a=11;break e;case Sh:a=14;break e;case ar:a=16,i=null;break e}throw Error(re(130,n==null?n:typeof n,""))}return e=Kn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ls(n,e,t,i){return n=Kn(7,n,i,e),n.lanes=t,n}function vc(n,e,t,i){return n=Kn(22,n,i,e),n.elementType=e0,n.lanes=t,n.stateNode={isHidden:!1},n}function af(n,e,t){return n=Kn(6,n,null,e),n.lanes=t,n}function lf(n,e,t){return e=Kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function iM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hc(0),this.expirationTimes=Hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function np(n,e,t,i,r,s,a,o,l){return n=new iM(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(s),n}function rM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function jv(n){if(!n)return Ur;n=n._reactInternals;e:{if(bs(n)!==n||n.tag!==1)throw Error(re(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(n.tag===1){var t=n.type;if(_n(t))return j0(n,t,e)}return e}function Xv(n,e,t,i,r,s,a,o,l){return n=np(t,i,!0,n,r,s,a,o,l),n.context=jv(null),t=n.current,i=fn(),r=Ar(t),s=Xi(i,r),s.callback=e??null,Tr(t,s,r),n.current.lanes=r,il(n,r,i),vn(n,i),n}function xc(n,e,t,i){var r=e.current,s=fn(),a=Ar(r);return t=jv(t),e.context===null?e.context=t:e.pendingContext=t,e=Xi(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Tr(r,e,a),n!==null&&(pi(n,r,a,s),cu(n,r,a)),a}function Wu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ip(n,e){Gm(n,e),(n=n.alternate)&&Gm(n,e)}function sM(){return null}var Yv=typeof reportError=="function"?reportError:function(n){console.error(n)};function rp(n){this._internalRoot=n}yc.prototype.render=rp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(re(409));xc(n,e,null,null)};yc.prototype.unmount=rp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ss(function(){xc(null,n,null,null)}),e[qi]=null}};function yc(n){this._internalRoot=n}yc.prototype.unstable_scheduleHydration=function(n){if(n){var e=T0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<cr.length&&e!==0&&e<cr[t].priority;t++);cr.splice(t,0,n),t===0&&A0(n)}};function sp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wm(){}function oM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Wu(a);s.call(u)}}var a=Xv(e,i,n,0,null,!1,!1,"",Wm);return n._reactRootContainer=a,n[qi]=a.current,Oa(n.nodeType===8?n.parentNode:n),Ss(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Wu(l);o.call(u)}}var l=np(n,0,!1,null,null,!1,!1,"",Wm);return n._reactRootContainer=l,n[qi]=l.current,Oa(n.nodeType===8?n.parentNode:n),Ss(function(){xc(e,l,t,i)}),l}function Mc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Wu(a);o.call(l)}}xc(e,a,n,r)}else a=oM(t,e,n,r,i);return Wu(a)}M0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=aa(e.pendingLanes);t!==0&&(Th(e,t|1),vn(e,Et()),!(Ke&6)&&(Po=Et()+500,Br()))}break;case 13:Ss(function(){var i=$i(n,1);if(i!==null){var r=fn();pi(i,n,1,r)}}),ip(n,1)}};wh=function(n){if(n.tag===13){var e=$i(n,134217728);if(e!==null){var t=fn();pi(e,n,134217728,t)}ip(n,134217728)}};E0=function(n){if(n.tag===13){var e=Ar(n),t=$i(n,e);if(t!==null){var i=fn();pi(t,n,e,i)}ip(n,e)}};T0=function(){return Qe};w0=function(n,e){var t=Qe;try{return Qe=n,e()}finally{Qe=t}};ad=function(n,e,t){switch(e){case"input":if(ed(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=dc(i);if(!r)throw Error(re(90));n0(i),ed(i,r)}}}break;case"textarea":r0(n,t);break;case"select":e=t.value,e!=null&&ho(n,!!t.multiple,e,!1)}};f0=Qh;d0=Ss;var aM={usingClientEntryPoint:!1,Events:[sl,no,dc,u0,c0,Qh]},Jo={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lM={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=m0(n),n===null?null:n.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||sM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{lc=Pl.inject(lM),Ai=Pl}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aM;Bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sp(e))throw Error(re(200));return rM(n,e,null,t)};Bn.createRoot=function(n,e){if(!sp(n))throw Error(re(299));var t=!1,i="",r=Yv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=np(n,1,!1,null,null,t,!1,i,r),n[qi]=e.current,Oa(n.nodeType===8?n.parentNode:n),new rp(e)};Bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(re(188)):(n=Object.keys(n).join(","),Error(re(268,n)));return n=m0(e),n=n===null?null:n.stateNode,n};Bn.flushSync=function(n){return Ss(n)};Bn.hydrate=function(n,e,t){if(!Sc(e))throw Error(re(200));return Mc(null,n,e,!0,t)};Bn.hydrateRoot=function(n,e,t){if(!sp(n))throw Error(re(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=Yv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=Xv(e,null,n,1,t??null,r,!1,s,a),n[qi]=e.current,Oa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new yc(e)};Bn.render=function(n,e,t){if(!Sc(e))throw Error(re(200));return Mc(null,n,e,!1,t)};Bn.unmountComponentAtNode=function(n){if(!Sc(n))throw Error(re(40));return n._reactRootContainer?(Ss(function(){Mc(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1};Bn.unstable_batchedUpdates=Qh;Bn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Sc(t))throw Error(re(200));if(n==null||n._reactInternals===void 0)throw Error(re(38));return Mc(n,e,t,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv)}catch(n){console.error(n)}}qv(),q_.exports=Bn;var uM=q_.exports,$v,jm=uM;$v=jm.createRoot,jm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="158",Ls={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cM=0,Xm=1,fM=2,Kv=1,dM=2,Fi=3,Ir=0,xn=1,Vi=2,Cr=0,xo=1,ja=2,Ym=3,qm=4,hM=5,es=100,pM=101,mM=102,$m=103,Km=104,gM=200,_M=201,vM=202,xM=203,Bd=204,Hd=205,yM=206,SM=207,MM=208,EM=209,TM=210,wM=211,AM=212,bM=213,CM=214,RM=0,PM=1,LM=2,ju=3,DM=4,NM=5,UM=6,IM=7,Zv=0,OM=1,FM=2,Rr=0,kM=1,zM=2,BM=3,HM=4,VM=5,Qv=300,Lo=301,Do=302,Vd=303,Gd=304,Ec=306,Wd=1e3,fi=1001,jd=1002,ln=1003,Zm=1004,uf=1005,Yn=1006,GM=1007,Xa=1008,Pr=1009,WM=1010,jM=1011,ap=1012,Jv=1013,pr=1014,mr=1015,Ya=1016,ex=1017,tx=1018,us=1020,XM=1021,di=1023,YM=1024,qM=1025,cs=1026,No=1027,$M=1028,nx=1029,KM=1030,ix=1031,rx=1033,cf=33776,ff=33777,df=33778,hf=33779,Qm=35840,Jm=35841,eg=35842,tg=35843,ZM=36196,ng=37492,ig=37496,rg=37808,sg=37809,og=37810,ag=37811,lg=37812,ug=37813,cg=37814,fg=37815,dg=37816,hg=37817,pg=37818,mg=37819,gg=37820,_g=37821,pf=36492,vg=36494,xg=36495,QM=36283,yg=36284,Sg=36285,Mg=36286,sx=3e3,fs=3001,JM=3200,eE=3201,tE=0,nE=1,$n="",Vt="srgb",Zi="srgb-linear",lp="display-p3",Tc="display-p3-linear",Xu="linear",ot="srgb",Yu="rec709",qu="p3",Ns=7680,Eg=519,iE=512,rE=513,sE=514,oE=515,aE=516,lE=517,uE=518,cE=519,Tg=35044,wg="300 es",Xd=1035,ji=2e3,$u=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ag=1234567;const Sa=Math.PI/180,qa=180/Math.PI;function Go(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Zt(n,e,t){return Math.max(e,Math.min(t,n))}function up(n,e){return(n%e+e)%e}function fE(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function dE(n,e,t){return n!==e?(t-n)/(e-n):0}function Ma(n,e,t){return(1-t)*n+t*e}function hE(n,e,t,i){return Ma(n,e,1-Math.exp(-t*i))}function pE(n,e=1){return e-Math.abs(up(n,e*2)-e)}function mE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function gE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _E(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vE(n,e){return n+Math.random()*(e-n)}function xE(n){return n*(.5-Math.random())}function yE(n){n!==void 0&&(Ag=n);let e=Ag+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function SE(n){return n*Sa}function ME(n){return n*qa}function Yd(n){return(n&n-1)===0&&n!==0}function EE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ku(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function TE(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+i)/2),c=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*c,l*f,l*d,o*u);break;case"YZY":n.set(l*d,o*c,l*f,o*u);break;case"ZXZ":n.set(l*f,l*d,o*c,o*u);break;case"XZX":n.set(o*c,l*_,l*p,o*u);break;case"YXY":n.set(l*p,o*c,l*_,o*u);break;case"ZYZ":n.set(l*_,l*p,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ks(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ox={DEG2RAD:Sa,RAD2DEG:qa,generateUUID:Go,clamp:Zt,euclideanModulo:up,mapLinear:fE,inverseLerp:dE,lerp:Ma,damp:hE,pingpong:pE,smoothstep:mE,smootherstep:gE,randInt:_E,randFloat:vE,randFloatSpread:xE,seededRandom:yE,degToRad:SE,radToDeg:ME,isPowerOfTwo:Yd,ceilPowerOfTwo:EE,floorPowerOfTwo:Ku,setQuaternionFromProperEuler:TE,normalize:sn,denormalize:Ks};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,a,o,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],m=r[0],g=r[3],h=r[6],v=r[1],x=r[4],y=r[7],S=r[2],T=r[5],E=r[8];return s[0]=a*m+o*v+l*S,s[3]=a*g+o*x+l*T,s[6]=a*h+o*y+l*E,s[1]=u*m+c*v+f*S,s[4]=u*g+c*x+f*T,s[7]=u*h+c*y+f*E,s[2]=d*m+p*v+_*S,s[5]=d*g+p*x+_*T,s[8]=d*h+p*y+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,d=o*l-c*s,p=u*s-a*l,_=t*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=f*m,e[1]=(r*u-c*i)*m,e[2]=(o*i-r*a)*m,e[3]=d*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mf.makeScale(e,t)),this}rotate(e){return this.premultiply(mf.makeRotation(-e)),this}translate(e,t){return this.premultiply(mf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mf=new He;function ax(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wE(){const n=Zu("canvas");return n.style.display="block",n}const bg={};function Ea(n){n in bg||(bg[n]=!0,console.warn(n))}const Cg=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rg=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ll={[Zi]:{transfer:Xu,primaries:Yu,toReference:n=>n,fromReference:n=>n},[Vt]:{transfer:ot,primaries:Yu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Tc]:{transfer:Xu,primaries:qu,toReference:n=>n.applyMatrix3(Rg),fromReference:n=>n.applyMatrix3(Cg)},[lp]:{transfer:ot,primaries:qu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Rg),fromReference:n=>n.applyMatrix3(Cg).convertLinearToSRGB()}},AE=new Set([Zi,Tc]),Je={enabled:!0,_workingColorSpace:Zi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!AE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ll[e].toReference,r=Ll[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ll[n].primaries},getTransfer:function(n){return n===$n?Xu:Ll[n].transfer}};function yo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Us;class lx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=Zu("canvas")),Us.width=e.width,Us.height=e.height;const i=Us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=yo(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yo(t[i]/255)*255):t[i]=yo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bE=0;class ux{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Go(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(_f(r[a].image)):s.push(_f(r[a]))}else s=_f(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function _f(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CE=0;class On extends Cs{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,i=fi,r=fi,s=Yn,a=Xa,o=di,l=Pr,u=On.DEFAULT_ANISOTROPY,c=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Go(),this.name="",this.source=new ux(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===fs?Vt:$n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wd:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wd:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?fs:sx}set encoding(e){Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fs?Vt:$n}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Qv;On.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,i=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],m=l[2],g=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+m)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,S=(h+1)/2,T=(c+d)/4,E=(f+m)/4,C=(_+g)/4;return x>y&&x>S?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=E/i):y>S?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=C/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=E/s,r=C/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-_)*(g-_)+(f-m)*(f-m)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(f-m)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RE extends Cs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ea("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fs?Vt:$n),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new On(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ux(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends RE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cx extends On{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class PE extends On{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=m;return}if(f!==m||l!==d||u!==p||c!==_){let g=1-o;const h=l*d+u*p+c*_+f*m,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const S=Math.sqrt(x),T=Math.atan2(S,h*v);g=Math.sin(g*T)/S,o=Math.sin(o*T)/S}const y=o*v;if(l=l*g+d*y,u=u*g+p*y,c=c*g+_*y,f=f*g+m*y,g===1-o){const S=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=S,u*=S,c*=S,f*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+c*f+l*p-u*d,e[t+1]=l*_+c*d+u*f-o*p,e[t+2]=u*_+c*p+o*d-l*f,e[t+3]=c*_-o*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vf.copy(this).projectOnVector(e),this.sub(vf)}reflect(e){return this.sub(vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vf=new X,Pg=new Es;class al{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(s,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dl.copy(i.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Nl.subVectors(this.max,ea),Is.subVectors(e.a,ea),Os.subVectors(e.b,ea),Fs.subVectors(e.c,ea),nr.subVectors(Os,Is),ir.subVectors(Fs,Os),Wr.subVectors(Is,Fs);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Wr.z,Wr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Wr.z,0,-Wr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Wr.y,Wr.x,0];return!xf(t,Is,Os,Fs,Nl)||(t=[1,0,0,0,1,0,0,0,1],!xf(t,Is,Os,Fs,Nl))?!1:(Ul.crossVectors(nr,ir),t=[Ul.x,Ul.y,Ul.z],xf(t,Is,Os,Fs,Nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new X,new X,new X,new X,new X,new X,new X,new X],ri=new X,Dl=new al,Is=new X,Os=new X,Fs=new X,nr=new X,ir=new X,Wr=new X,ea=new X,Nl=new X,Ul=new X,jr=new X;function xf(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){jr.fromArray(n,s);const o=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=e.dot(jr),u=t.dot(jr),c=i.dot(jr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const LE=new al,ta=new X,yf=new X;class wc{constructor(e=new X,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):LE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const t=ta.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(yf)),this.expandByPoint(ta.copy(e.center).sub(yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new X,Sf=new X,Il=new X,rr=new X,Mf=new X,Ol=new X,Ef=new X;class cp{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sf.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(Sf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Il),o=rr.dot(this.direction),l=-rr.dot(Il),u=rr.lengthSq(),c=Math.abs(1-a*a);let f,d,p,_;if(c>0)if(f=a*l-o,d=a*o-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const m=1/c;f*=m,d*=m,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Sf).addScaledVector(Il,d),p}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){Mf.subVectors(t,e),Ol.subVectors(i,e),Ef.crossVectors(Mf,Ol);let a=this.direction.dot(Ef),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rr.subVectors(this.origin,e);const l=o*this.direction.dot(Ol.crossVectors(rr,Ol));if(l<0)return null;const u=o*this.direction.dot(Mf.cross(rr));if(u<0||l+u>a)return null;const c=-o*rr.dot(Ef);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,i,r,s,a,o,l,u,c,f,d,p,_,m,g){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,f,d,p,_,m,g)}set(e,t,i,r,s,a,o,l,u,c,f,d,p,_,m,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=m,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*c,p=a*f,_=o*c,m=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=d-m*u,t[9]=-o*l,t[2]=m-d*u,t[6]=_+p*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,m=u*f;t[0]=d+m*o,t[4]=_*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=p*o-_,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,m=u*f;t[0]=d-m*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*c,t[9]=m-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,p=a*f,_=o*c,m=o*f;t[0]=l*c,t[4]=_*u-p,t[8]=d*u+m,t[1]=l*f,t[5]=m*u+d,t[9]=p*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*u,_=o*l,m=o*u;t[0]=l*c,t[4]=m-d*f,t[8]=_*f+p,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*f+_,t[10]=d-m*f}else if(e.order==="XZY"){const d=a*l,p=a*u,_=o*l,m=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+m,t[5]=a*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*c,t[10]=m*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DE,e,NE)}lookAt(e,t,i){const r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),sr.crossVectors(i,Cn),sr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),sr.crossVectors(i,Cn)),sr.normalize(),Fl.crossVectors(Cn,sr),r[0]=sr.x,r[4]=Fl.x,r[8]=Cn.x,r[1]=sr.y,r[5]=Fl.y,r[9]=Cn.y,r[2]=sr.z,r[6]=Fl.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],m=i[6],g=i[10],h=i[14],v=i[3],x=i[7],y=i[11],S=i[15],T=r[0],E=r[4],C=r[8],M=r[12],w=r[1],U=r[5],z=r[9],G=r[13],L=r[2],B=r[6],V=r[10],Y=r[14],H=r[3],k=r[7],I=r[11],P=r[15];return s[0]=a*T+o*w+l*L+u*H,s[4]=a*E+o*U+l*B+u*k,s[8]=a*C+o*z+l*V+u*I,s[12]=a*M+o*G+l*Y+u*P,s[1]=c*T+f*w+d*L+p*H,s[5]=c*E+f*U+d*B+p*k,s[9]=c*C+f*z+d*V+p*I,s[13]=c*M+f*G+d*Y+p*P,s[2]=_*T+m*w+g*L+h*H,s[6]=_*E+m*U+g*B+h*k,s[10]=_*C+m*z+g*V+h*I,s[14]=_*M+m*G+g*Y+h*P,s[3]=v*T+x*w+y*L+S*H,s[7]=v*E+x*U+y*B+S*k,s[11]=v*C+x*z+y*V+S*I,s[15]=v*M+x*G+y*Y+S*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],m=e[7],g=e[11],h=e[15];return _*(+s*l*f-r*u*f-s*o*d+i*u*d+r*o*p-i*l*p)+m*(+t*l*p-t*u*d+s*a*d-r*a*p+r*u*c-s*l*c)+g*(+t*u*f-t*o*p-s*a*f+i*a*p+s*o*c-i*u*c)+h*(-r*o*c-t*l*f+t*o*d+r*a*f-i*a*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],m=e[13],g=e[14],h=e[15],v=f*g*u-m*d*u+m*l*p-o*g*p-f*l*h+o*d*h,x=_*d*u-c*g*u-_*l*p+a*g*p+c*l*h-a*d*h,y=c*m*u-_*f*u+_*o*p-a*m*p-c*o*h+a*f*h,S=_*f*l-c*m*l-_*o*d+a*m*d+c*o*g-a*f*g,T=t*v+i*x+r*y+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(m*d*s-f*g*s-m*r*p+i*g*p+f*r*h-i*d*h)*E,e[2]=(o*g*s-m*l*s+m*r*u-i*g*u-o*r*h+i*l*h)*E,e[3]=(f*l*s-o*d*s-f*r*u+i*d*u+o*r*p-i*l*p)*E,e[4]=x*E,e[5]=(c*g*s-_*d*s+_*r*p-t*g*p-c*r*h+t*d*h)*E,e[6]=(_*l*s-a*g*s-_*r*u+t*g*u+a*r*h-t*l*h)*E,e[7]=(a*d*s-c*l*s+c*r*u-t*d*u-a*r*p+t*l*p)*E,e[8]=y*E,e[9]=(_*f*s-c*m*s-_*i*p+t*m*p+c*i*h-t*f*h)*E,e[10]=(a*m*s-_*o*s+_*i*u-t*m*u-a*i*h+t*o*h)*E,e[11]=(c*o*s-a*f*s-c*i*u+t*f*u+a*i*p-t*o*p)*E,e[12]=S*E,e[13]=(c*m*r-_*f*r+_*i*d-t*m*d-c*i*g+t*f*g)*E,e[14]=(_*o*r-a*m*r-_*i*l+t*m*l+a*i*g-t*o*g)*E,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*d+t*o*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,d=s*u,p=s*c,_=s*f,m=a*c,g=a*f,h=o*f,v=l*u,x=l*c,y=l*f,S=i.x,T=i.y,E=i.z;return r[0]=(1-(m+h))*S,r[1]=(p+y)*S,r[2]=(_-x)*S,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+h))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(_+x)*E,r[9]=(g-v)*E,r[10]=(1-(d+m))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ks.set(r[0],r[1],r[2]).length();const a=ks.set(r[4],r[5],r[6]).length(),o=ks.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const u=1/s,c=1/a,f=1/o;return si.elements[0]*=u,si.elements[1]*=u,si.elements[2]*=u,si.elements[4]*=c,si.elements[5]*=c,si.elements[6]*=c,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,t.setFromRotationMatrix(si),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ji){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,_;if(o===ji)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===$u)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ji){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(a-s),d=(t+e)*u,p=(i+r)*c;let _,m;if(o===ji)_=(a+s)*f,m=-2*f;else if(o===$u)_=s*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ks=new X,si=new zt,DE=new X(0,0,0),NE=new X(1,1,1),sr=new X,Fl=new X,Cn=new X,Lg=new zt,Dg=new Es;class Ac{constructor(e=0,t=0,i=0,r=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dg.setFromEuler(this),this.setFromQuaternion(Dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ac.DEFAULT_ORDER="XYZ";class fx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UE=0;const Ng=new X,zs=new Es,Ui=new zt,kl=new X,na=new X,IE=new X,OE=new Es,Ug=new X(1,0,0),Ig=new X(0,1,0),Og=new X(0,0,1),FE={type:"added"},kE={type:"removed"};class yn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new X,t=new Ac,i=new Es,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new He}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Ug,e)}rotateY(e){return this.rotateOnAxis(Ig,e)}rotateZ(e){return this.rotateOnAxis(Og,e)}translateOnAxis(e,t){return Ng.copy(e).applyQuaternion(this.quaternion),this.position.add(Ng.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ug,e)}translateY(e){return this.translateOnAxis(Ig,e)}translateZ(e){return this.translateOnAxis(Og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kl.copy(e):kl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(na,kl,this.up):Ui.lookAt(kl,na,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),zs.setFromRotationMatrix(Ui),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(FE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,IE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,OE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new X(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new X,Ii=new X,Tf=new X,Oi=new X,Bs=new X,Hs=new X,Fg=new X,wf=new X,Af=new X,bf=new X;let zl=!1;class ci{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),oi.subVectors(e,t),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){oi.subVectors(r,t),Ii.subVectors(i,t),Tf.subVectors(e,t);const a=oi.dot(oi),o=oi.dot(Ii),l=oi.dot(Tf),u=Ii.dot(Ii),c=Ii.dot(Tf),f=a*u-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(u*l-o*c)*d,_=(a*c-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Oi),Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getUV(e,t,i,r,s,a,o,l){return zl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zl=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Oi),l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l}static isFrontFacing(e,t,i,r){return oi.subVectors(i,t),Ii.subVectors(e,t),oi.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),oi.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return zl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zl=!0),ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Bs.subVectors(r,i),Hs.subVectors(s,i),wf.subVectors(e,i);const l=Bs.dot(wf),u=Hs.dot(wf);if(l<=0&&u<=0)return t.copy(i);Af.subVectors(e,r);const c=Bs.dot(Af),f=Hs.dot(Af);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Bs,a);bf.subVectors(e,s);const p=Bs.dot(bf),_=Hs.dot(bf);if(_>=0&&p<=_)return t.copy(s);const m=p*u-l*_;if(m<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(i).addScaledVector(Hs,o);const g=c*_-p*f;if(g<=0&&f-c>=0&&p-_>=0)return Fg.subVectors(s,r),o=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(Fg,o);const h=1/(g+m+d);return a=m*h,o=d*h,t.copy(i).addScaledVector(Bs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function Cf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=up(e,1),t=Zt(t,0,1),i=Zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Cf(a,s,e+1/3),this.g=Cf(a,s,e),this.b=Cf(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=dx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}copyLinearToSRGB(e){return this.r=gf(e.r),this.g=gf(e.g),this.b=gf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Je.fromWorkingColorSpace($t.copy(this),e),Math.round(Zt($t.r*255,0,255))*65536+Math.round(Zt($t.g*255,0,255))*256+Math.round(Zt($t.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,r=$t.g,s=$t.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Vt){Je.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,r=$t.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(Bl);const i=Ma(or.h,Bl.h,t),r=Ma(or.s,Bl.s,t),s=Ma(or.l,Bl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Ge;Ge.NAMES=dx;let zE=0;class ll extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Go(),this.name="",this.type="Material",this.blending=xo,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=Hd,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ju,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(i.blending=this.blending),this.side!==Ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bd&&(i.blendSrc=this.blendSrc),this.blendDst!==Hd&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ju&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hx extends ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new X,Hl=new Ve;class Pt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tg,this.updateRange={offset:0,count:-1},this.gpuType=mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hl.fromBufferAttribute(this,t),Hl.applyMatrix3(e),this.setXY(t,Hl.x,Hl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class px extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mx extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ds extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let BE=0;const Gn=new zt,Rf=new yn,Vs=new X,Rn=new al,ia=new al,It=new X;class gi extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ax(e)?mx:px)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return Rf.lookAt(e),Rf.updateMatrix(),this.applyMatrix4(Rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ds(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(Rn.min,ia.min),Rn.expandByPoint(It),It.addVectors(Rn.max,ia.max),Rn.expandByPoint(It)):(Rn.expandByPoint(ia.min),Rn.expandByPoint(ia.max))}Rn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)It.fromBufferAttribute(o,u),l&&(Vs.fromBufferAttribute(e,u),It.add(Vs)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<o;w++)u[w]=new X,c[w]=new X;const f=new X,d=new X,p=new X,_=new Ve,m=new Ve,g=new Ve,h=new X,v=new X;function x(w,U,z){f.fromArray(r,w*3),d.fromArray(r,U*3),p.fromArray(r,z*3),_.fromArray(a,w*2),m.fromArray(a,U*2),g.fromArray(a,z*2),d.sub(f),p.sub(f),m.sub(_),g.sub(_);const G=1/(m.x*g.y-g.x*m.y);isFinite(G)&&(h.copy(d).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(G),v.copy(p).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(G),u[w].add(h),u[U].add(h),u[z].add(h),c[w].add(v),c[U].add(v),c[z].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,U=y.length;w<U;++w){const z=y[w],G=z.start,L=z.count;for(let B=G,V=G+L;B<V;B+=3)x(i[B+0],i[B+1],i[B+2])}const S=new X,T=new X,E=new X,C=new X;function M(w){E.fromArray(s,w*3),C.copy(E);const U=u[w];S.copy(U),S.sub(E.multiplyScalar(E.dot(U))).normalize(),T.crossVectors(C,U);const G=T.dot(c[w])<0?-1:1;l[w*4]=S.x,l[w*4+1]=S.y,l[w*4+2]=S.z,l[w*4+3]=G}for(let w=0,U=y.length;w<U;++w){const z=y[w],G=z.start,L=z.count;for(let B=G,V=G+L;B<V;B+=3)M(i[B+0]),M(i[B+1]),M(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,u=new X,c=new X,f=new X;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,g),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,g),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let m=0,g=l.length;m<g;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new Pt(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kg=new zt,Xr=new cp,Vl=new wc,zg=new X,Gs=new X,Ws=new X,js=new X,Pf=new X,Gl=new X,Wl=new Ve,jl=new Ve,Xl=new Ve,Bg=new X,Hg=new X,Vg=new X,Yl=new X,ql=new X;class gr extends yn{constructor(e=new gi,t=new hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Gl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(Pf.fromBufferAttribute(f,e),a?Gl.addScaledVector(Pf,c):Gl.addScaledVector(Pf.sub(t),c))}t.add(Gl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(s),Xr.copy(e.ray).recast(e.near),!(Vl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Vl,zg)===null||Xr.origin.distanceToSquared(zg)>(e.far-e.near)**2))&&(kg.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(kg),!(i.boundingBox!==null&&Xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,m=d.length;_<m;_++){const g=d[_],h=a[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,S=x;y<S;y+=3){const T=o.getX(y),E=o.getX(y+1),C=o.getX(y+2);r=$l(this,h,e,i,u,c,f,T,E,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let g=_,h=m;g<h;g+=3){const v=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);r=$l(this,a,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,m=d.length;_<m;_++){const g=d[_],h=a[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,S=x;y<S;y+=3){const T=y,E=y+1,C=y+2;r=$l(this,h,e,i,u,c,f,T,E,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let g=_,h=m;g<h;g+=3){const v=g,x=g+1,y=g+2;r=$l(this,a,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function HE(n,e,t,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ir,o),l===null)return null;ql.copy(o),ql.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ql);return u<t.near||u>t.far?null:{distance:u,point:ql.clone(),object:n}}function $l(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,Gs),n.getVertexPosition(l,Ws),n.getVertexPosition(u,js);const c=HE(n,e,t,i,Gs,Ws,js,Yl);if(c){r&&(Wl.fromBufferAttribute(r,o),jl.fromBufferAttribute(r,l),Xl.fromBufferAttribute(r,u),c.uv=ci.getInterpolation(Yl,Gs,Ws,js,Wl,jl,Xl,new Ve)),s&&(Wl.fromBufferAttribute(s,o),jl.fromBufferAttribute(s,l),Xl.fromBufferAttribute(s,u),c.uv1=ci.getInterpolation(Yl,Gs,Ws,js,Wl,jl,Xl,new Ve),c.uv2=c.uv1),a&&(Bg.fromBufferAttribute(a,o),Hg.fromBufferAttribute(a,l),Vg.fromBufferAttribute(a,u),c.normal=ci.getInterpolation(Yl,Gs,Ws,js,Bg,Hg,Vg,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new X,materialIndex:0};ci.getNormal(Gs,Ws,js,f.normal),c.face=f}return c}class ul extends gi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ds(u,3)),this.setAttribute("normal",new ds(c,3)),this.setAttribute("uv",new ds(f,2));function _(m,g,h,v,x,y,S,T,E,C,M){const w=y/E,U=S/C,z=y/2,G=S/2,L=T/2,B=E+1,V=C+1;let Y=0,H=0;const k=new X;for(let I=0;I<V;I++){const P=I*U-G;for(let O=0;O<B;O++){const oe=O*w-z;k[m]=oe*v,k[g]=P*x,k[h]=L,u.push(k.x,k.y,k.z),k[m]=0,k[g]=0,k[h]=T>0?1:-1,c.push(k.x,k.y,k.z),f.push(O/E),f.push(1-I/C),Y+=1}}for(let I=0;I<C;I++)for(let P=0;P<E;P++){const O=d+P+B*I,oe=d+P+B*(I+1),N=d+(P+1)+B*(I+1),de=d+(P+1)+B*I;l.push(O,oe,de),l.push(oe,N,de),H+=6}o.addGroup(p,H,M),p+=H,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=Uo(n[t]);for(const r in i)e[r]=i[r]}return e}function VE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gx(n){return n.getRenderTarget()===null?n.outputColorSpace:Je.workingColorSpace}const GE={clone:Uo,merge:on};var WE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WE,this.fragmentShader=jE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=VE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _x extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qn extends _x{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,Ys=1;class XE extends yn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(Xs,Ys,e,t);r.layers=this.layers,this.add(r);const s=new qn(Xs,Ys,e,t);s.layers=this.layers,this.add(s);const a=new qn(Xs,Ys,e,t);a.layers=this.layers,this.add(a);const o=new qn(Xs,Ys,e,t);o.layers=this.layers,this.add(o);const l=new qn(Xs,Ys,e,t);l.layers=this.layers,this.add(l);const u=new qn(Xs,Ys,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$u)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class vx extends On{constructor(e,t,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Lo,super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YE extends Ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ea("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fs?Vt:$n),this.texture=new vx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ul(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:Uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Cr});s.uniforms.tEquirect.value=t;const a=new gr(r,s),o=t.minFilter;return t.minFilter===Xa&&(t.minFilter=Yn),new XE(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Lf=new X,qE=new X,$E=new He;class ur{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Lf.subVectors(i,t).cross(qE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$E.getNormalMatrix(e),r=this.coplanarPoint(Lf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new wc,Kl=new X;class xx{constructor(e=new ur,t=new ur,i=new ur,r=new ur,s=new ur,a=new ur){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ji){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],h=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,g-p,y-h).normalize(),i[1].setComponents(l+s,d+u,g+p,y+h).normalize(),i[2].setComponents(l+a,d+c,g+_,y+v).normalize(),i[3].setComponents(l-a,d-c,g-_,y-v).normalize(),i[4].setComponents(l-o,d-f,g-m,y-x).normalize(),t===ji)i[5].setComponents(l+o,d+f,g+m,y+x).normalize();else if(t===$u)i[5].setComponents(o,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Kl.x=r.normal.x>0?e.max.x:e.min.x,Kl.y=r.normal.y>0?e.max.y:e.min.y,Kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yx(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function KE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,p=c.updateRange;n.bindBuffer(f,u),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:a,remove:o,update:l}}class fp extends gi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,d=t/l,p=[],_=[],m=[],g=[];for(let h=0;h<c;h++){const v=h*d-a;for(let x=0;x<u;x++){const y=x*f-s;_.push(y,-v,0),m.push(0,0,1),g.push(x/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const x=v+u*h,y=v+u*(h+1),S=v+1+u*(h+1),T=v+1+u*h;p.push(x,y,T),p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new ds(_,3)),this.setAttribute("normal",new ds(m,3)),this.setAttribute("uv",new ds(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fp(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yT=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ST=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wT="gl_FragColor = linearToOutputTexel( gl_FragColor );",AT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,PT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,qT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$T=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ew=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ow=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_w=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ew=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ow=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$w=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,nA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lA=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TA=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,AA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:ZE,alphahash_pars_fragment:QE,alphamap_fragment:JE,alphamap_pars_fragment:eT,alphatest_fragment:tT,alphatest_pars_fragment:nT,aomap_fragment:iT,aomap_pars_fragment:rT,begin_vertex:sT,beginnormal_vertex:oT,bsdfs:aT,iridescence_fragment:lT,bumpmap_pars_fragment:uT,clipping_planes_fragment:cT,clipping_planes_pars_fragment:fT,clipping_planes_pars_vertex:dT,clipping_planes_vertex:hT,color_fragment:pT,color_pars_fragment:mT,color_pars_vertex:gT,color_vertex:_T,common:vT,cube_uv_reflection_fragment:xT,defaultnormal_vertex:yT,displacementmap_pars_vertex:ST,displacementmap_vertex:MT,emissivemap_fragment:ET,emissivemap_pars_fragment:TT,colorspace_fragment:wT,colorspace_pars_fragment:AT,envmap_fragment:bT,envmap_common_pars_fragment:CT,envmap_pars_fragment:RT,envmap_pars_vertex:PT,envmap_physical_pars_fragment:VT,envmap_vertex:LT,fog_vertex:DT,fog_pars_vertex:NT,fog_fragment:UT,fog_pars_fragment:IT,gradientmap_pars_fragment:OT,lightmap_fragment:FT,lightmap_pars_fragment:kT,lights_lambert_fragment:zT,lights_lambert_pars_fragment:BT,lights_pars_begin:HT,lights_toon_fragment:GT,lights_toon_pars_fragment:WT,lights_phong_fragment:jT,lights_phong_pars_fragment:XT,lights_physical_fragment:YT,lights_physical_pars_fragment:qT,lights_fragment_begin:$T,lights_fragment_maps:KT,lights_fragment_end:ZT,logdepthbuf_fragment:QT,logdepthbuf_pars_fragment:JT,logdepthbuf_pars_vertex:ew,logdepthbuf_vertex:tw,map_fragment:nw,map_pars_fragment:iw,map_particle_fragment:rw,map_particle_pars_fragment:sw,metalnessmap_fragment:ow,metalnessmap_pars_fragment:aw,morphcolor_vertex:lw,morphnormal_vertex:uw,morphtarget_pars_vertex:cw,morphtarget_vertex:fw,normal_fragment_begin:dw,normal_fragment_maps:hw,normal_pars_fragment:pw,normal_pars_vertex:mw,normal_vertex:gw,normalmap_pars_fragment:_w,clearcoat_normal_fragment_begin:vw,clearcoat_normal_fragment_maps:xw,clearcoat_pars_fragment:yw,iridescence_pars_fragment:Sw,opaque_fragment:Mw,packing:Ew,premultiplied_alpha_fragment:Tw,project_vertex:ww,dithering_fragment:Aw,dithering_pars_fragment:bw,roughnessmap_fragment:Cw,roughnessmap_pars_fragment:Rw,shadowmap_pars_fragment:Pw,shadowmap_pars_vertex:Lw,shadowmap_vertex:Dw,shadowmask_pars_fragment:Nw,skinbase_vertex:Uw,skinning_pars_vertex:Iw,skinning_vertex:Ow,skinnormal_vertex:Fw,specularmap_fragment:kw,specularmap_pars_fragment:zw,tonemapping_fragment:Bw,tonemapping_pars_fragment:Hw,transmission_fragment:Vw,transmission_pars_fragment:Gw,uv_pars_fragment:Ww,uv_pars_vertex:jw,uv_vertex:Xw,worldpos_vertex:Yw,background_vert:qw,background_frag:$w,backgroundCube_vert:Kw,backgroundCube_frag:Zw,cube_vert:Qw,cube_frag:Jw,depth_vert:eA,depth_frag:tA,distanceRGBA_vert:nA,distanceRGBA_frag:iA,equirect_vert:rA,equirect_frag:sA,linedashed_vert:oA,linedashed_frag:aA,meshbasic_vert:lA,meshbasic_frag:uA,meshlambert_vert:cA,meshlambert_frag:fA,meshmatcap_vert:dA,meshmatcap_frag:hA,meshnormal_vert:pA,meshnormal_frag:mA,meshphong_vert:gA,meshphong_frag:_A,meshphysical_vert:vA,meshphysical_frag:xA,meshtoon_vert:yA,meshtoon_frag:SA,points_vert:MA,points_frag:EA,shadow_vert:TA,shadow_frag:wA,sprite_vert:AA,sprite_frag:bA},he={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Mi={basic:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:on([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:on([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:on([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:on([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:on([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:on([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:on([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:on([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:on([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:on([he.lights,he.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Mi.physical={uniforms:on([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Zl={r:0,b:0,g:0};function CA(n,e,t,i,r,s,a){const o=new Ge(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function _(g,h){let v=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?m(o,l):x&&x.isColor&&(m(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ec)?(c===void 0&&(c=new gr(new ul(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Uo(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==ot,(f!==x||d!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new gr(new fp(2,2),new Ri({name:"BackgroundMaterial",uniforms:Uo(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Je.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function m(g,h){g.getRGB(Zl,gx(n)),i.buffers.color.setClear(Zl.r,Zl.g,Zl.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(g,h=1){o.set(g),l=h,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(o,l)},render:_}}function RA(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=g(null);let u=l,c=!1;function f(L,B,V,Y,H){let k=!1;if(a){const I=m(Y,V,B);u!==I&&(u=I,p(u.object)),k=h(L,Y,V,H),k&&v(L,Y,V,H)}else{const I=B.wireframe===!0;(u.geometry!==Y.id||u.program!==V.id||u.wireframe!==I)&&(u.geometry=Y.id,u.program=V.id,u.wireframe=I,k=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(k||c)&&(c=!1,C(L,B,V,Y),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function m(L,B,V){const Y=V.wireframe===!0;let H=o[L.id];H===void 0&&(H={},o[L.id]=H);let k=H[B.id];k===void 0&&(k={},H[B.id]=k);let I=k[Y];return I===void 0&&(I=g(d()),k[Y]=I),I}function g(L){const B=[],V=[],Y=[];for(let H=0;H<r;H++)B[H]=0,V[H]=0,Y[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:Y,object:L,attributes:{},index:null}}function h(L,B,V,Y){const H=u.attributes,k=B.attributes;let I=0;const P=V.getAttributes();for(const O in P)if(P[O].location>=0){const N=H[O];let de=k[O];if(de===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),N===void 0||N.attribute!==de||de&&N.data!==de.data)return!0;I++}return u.attributesNum!==I||u.index!==Y}function v(L,B,V,Y){const H={},k=B.attributes;let I=0;const P=V.getAttributes();for(const O in P)if(P[O].location>=0){let N=k[O];N===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(N=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(N=L.instanceColor));const de={};de.attribute=N,N&&N.data&&(de.data=N.data),H[O]=de,I++}u.attributes=H,u.attributesNum=I,u.index=Y}function x(){const L=u.newAttributes;for(let B=0,V=L.length;B<V;B++)L[B]=0}function y(L){S(L,0)}function S(L,B){const V=u.newAttributes,Y=u.enabledAttributes,H=u.attributeDivisors;V[L]=1,Y[L]===0&&(n.enableVertexAttribArray(L),Y[L]=1),H[L]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),H[L]=B)}function T(){const L=u.newAttributes,B=u.enabledAttributes;for(let V=0,Y=B.length;V<Y;V++)B[V]!==L[V]&&(n.disableVertexAttribArray(V),B[V]=0)}function E(L,B,V,Y,H,k,I){I===!0?n.vertexAttribIPointer(L,B,V,H,k):n.vertexAttribPointer(L,B,V,Y,H,k)}function C(L,B,V,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const H=Y.attributes,k=V.getAttributes(),I=B.defaultAttributeValues;for(const P in k){const O=k[P];if(O.location>=0){let oe=H[P];if(oe===void 0&&(P==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),P==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),oe!==void 0){const N=oe.normalized,de=oe.itemSize,J=t.get(oe);if(J===void 0)continue;const me=J.buffer,xe=J.type,ye=J.bytesPerElement,Pe=i.isWebGL2===!0&&(xe===n.INT||xe===n.UNSIGNED_INT||oe.gpuType===Jv);if(oe.isInterleavedBufferAttribute){const be=oe.data,j=be.stride,gt=oe.offset;if(be.isInstancedInterleavedBuffer){for(let Se=0;Se<O.locationSize;Se++)S(O.location+Se,be.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Se=0;Se<O.locationSize;Se++)y(O.location+Se);n.bindBuffer(n.ARRAY_BUFFER,me);for(let Se=0;Se<O.locationSize;Se++)E(O.location+Se,de/O.locationSize,xe,N,j*ye,(gt+de/O.locationSize*Se)*ye,Pe)}else{if(oe.isInstancedBufferAttribute){for(let be=0;be<O.locationSize;be++)S(O.location+be,oe.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let be=0;be<O.locationSize;be++)y(O.location+be);n.bindBuffer(n.ARRAY_BUFFER,me);for(let be=0;be<O.locationSize;be++)E(O.location+be,de/O.locationSize,xe,N,de*ye,de/O.locationSize*be*ye,Pe)}}else if(I!==void 0){const N=I[P];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(O.location,N);break;case 3:n.vertexAttrib3fv(O.location,N);break;case 4:n.vertexAttrib4fv(O.location,N);break;default:n.vertexAttrib1fv(O.location,N)}}}}T()}function M(){z();for(const L in o){const B=o[L];for(const V in B){const Y=B[V];for(const H in Y)_(Y[H].object),delete Y[H];delete B[V]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;const B=o[L.id];for(const V in B){const Y=B[V];for(const H in Y)_(Y[H].object),delete Y[H];delete B[V]}delete o[L.id]}function U(L){for(const B in o){const V=o[B];if(V[L.id]===void 0)continue;const Y=V[L.id];for(const H in Y)_(Y[H].object),delete Y[H];delete V[L.id]}}function z(){G(),c=!0,u!==l&&(u=l,p(u.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:G,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:y,disableUnusedAttributes:T}}function PA(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,c,f),t.update(c,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function LA(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=a||e.has("OES_texture_float"),S=x&&y,T=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:T}}function DA(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ur,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const v=s?0:i,x=v*4;let y=h.clippingState||null;l.value=y,y=c(_,d,x,p);for(let S=0;S!==x;++S)y[S]=t[S];h.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,_){const m=f!==null?f.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const h=p+m*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,y=p;x!==m;++x,y+=4)a.copy(f[x]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function NA(n){let e=new WeakMap;function t(a,o){return o===Vd?a.mapping=Lo:o===Gd&&(a.mapping=Do),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Vd||o===Gd)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new YE(l.height/2);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class UA extends _x{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const uo=4,Gg=[.125,.215,.35,.446,.526,.582],ts=20,Df=new UA,Wg=new Ge;let Nf=null,Uf=0,If=0;const Qr=(1+Math.sqrt(5))/2,qs=1/Qr,jg=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Qr,qs),new X(0,Qr,-qs),new X(qs,0,Qr),new X(-qs,0,Qr),new X(Qr,qs,0),new X(-Qr,qs,0)];class Xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Nf=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nf,Uf,If),e.scissorTest=!1,Ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lo||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nf=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Ya,format:di,colorSpace:Zi,depthBuffer:!1},r=Yg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IA(s)),this._blurMaterial=OA(s,e,t)}return r}_compileMaterial(e){const t=new gr(this._lodPlanes[0],e);this._renderer.compile(t,Df)}_sceneToCubeUV(e,t,i,r){const o=new qn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Wg),c.toneMapping=Rr,c.autoClear=!1;const p=new hx({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),_=new gr(new ul,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(Wg),m=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):v===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const x=this._cubeSize;Ql(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),m&&c.render(_,o),c.render(e,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Lo||e.mapping===Do;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new gr(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ql(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Df)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jg[(r-1)%jg.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new gr(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ts-1),m=s/_,g=isFinite(s)?1+Math.floor(c*m):ts;g>ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ts}`);const h=[];let v=0;for(let E=0;E<ts;++E){const C=E/m,M=Math.exp(-C*C/2);h.push(M),E===0?v+=M:E<g&&(v+=2*M)}for(let E=0;E<h.length;E++)h[E]=h[E]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const y=this._sizeLods[r],S=3*y*(r>x-uo?r-x+uo:0),T=4*(this._cubeSize-y);Ql(t,S,T,3*y,2*y),l.setRenderTarget(t),l.render(f,Df)}}function IA(n){const e=[],t=[],i=[];let r=n;const s=n-uo+1+Gg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-uo?l=Gg[a-n+uo-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,m=3,g=2,h=1,v=new Float32Array(m*_*p),x=new Float32Array(g*_*p),y=new Float32Array(h*_*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,C=T>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(M,m*_*T),x.set(d,g*_*T);const w=[T,T,T,T,T,T];y.set(w,h*_*T)}const S=new gi;S.setAttribute("position",new Pt(v,m)),S.setAttribute("uv",new Pt(x,g)),S.setAttribute("faceIndex",new Pt(y,h)),e.push(S),r>uo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yg(n,e,t){const i=new Ms(n,e,t);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ql(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function OA(n,e,t){const i=new Float32Array(ts),r=new X(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function qg(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function $g(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function dp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FA(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Vd||l===Gd,c=l===Lo||l===Do;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Xg(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Xg(n));const d=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function kA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zA(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const m=d.morphAttributes[_];for(let g=0,h=m.length;g<h;g++)e.remove(m[g])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const m=p[_];for(let g=0,h=m.length;g<h;g++)e.update(m[g],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let m=0;if(p!==null){const v=p.array;m=p.version;for(let x=0,y=v.length;x<y;x+=3){const S=v[x+0],T=v[x+1],E=v[x+2];d.push(S,T,T,E,E,S)}}else if(_!==void 0){const v=_.array;m=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const S=x+0,T=x+1,E=x+2;d.push(S,T,T,E,E,S)}}else return;const g=new(ax(d)?mx:px)(d,1);g.version=m;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function BA(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function u(d){o=d.type,l=d.bytesPerElement}function c(d,p){n.drawElements(s,p,o,d*l),t.update(p,s,1)}function f(d,p,_){if(_===0)return;let m,g;if(r)m=n,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,p,o,d*l,_),t.update(p,s,_)}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=f}function HA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function VA(n,e){return n[0]-e[0]}function GA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function WA(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Gt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=_!==void 0?_.length:0;let g=s.get(c);if(g===void 0||g.count!==m){let B=function(){G.dispose(),s.delete(c),c.removeEventListener("dispose",B)};var p=B;g!==void 0&&g.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),S===!0&&(M=3);let w=c.attributes.position.count*M,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const z=new Float32Array(w*U*4*m),G=new cx(z,w,U,m);G.type=mr,G.needsUpdate=!0;const L=M*4;for(let V=0;V<m;V++){const Y=T[V],H=E[V],k=C[V],I=w*U*4*V;for(let P=0;P<Y.count;P++){const O=P*L;x===!0&&(a.fromBufferAttribute(Y,P),z[I+O+0]=a.x,z[I+O+1]=a.y,z[I+O+2]=a.z,z[I+O+3]=0),y===!0&&(a.fromBufferAttribute(H,P),z[I+O+4]=a.x,z[I+O+5]=a.y,z[I+O+6]=a.z,z[I+O+7]=0),S===!0&&(a.fromBufferAttribute(k,P),z[I+O+8]=a.x,z[I+O+9]=a.y,z[I+O+10]=a.z,z[I+O+11]=k.itemSize===4?a.w:1)}}g={count:m,texture:G,size:new Ve(w,U)},s.set(c,g),c.addEventListener("dispose",B)}let h=0;for(let x=0;x<d.length;x++)h+=d[x];const v=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const _=d===void 0?0:d.length;let m=i[c.id];if(m===void 0||m.length!==_){m=[];for(let y=0;y<_;y++)m[y]=[y,0];i[c.id]=m}for(let y=0;y<_;y++){const S=m[y];S[0]=y,S[1]=d[y]}m.sort(GA);for(let y=0;y<8;y++)y<_&&m[y][1]?(o[y][0]=m[y][0],o[y][1]=m[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(VA);const g=c.morphAttributes.position,h=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const S=o[y],T=S[0],E=S[1];T!==Number.MAX_SAFE_INTEGER&&E?(g&&c.getAttribute("morphTarget"+y)!==g[T]&&c.setAttribute("morphTarget"+y,g[T]),h&&c.getAttribute("morphNormal"+y)!==h[T]&&c.setAttribute("morphNormal"+y,h[T]),r[y]=E,v+=E):(g&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),h&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function jA(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const Sx=new On,Mx=new cx,Ex=new PE,Tx=new vx,Kg=[],Zg=[],Qg=new Float32Array(16),Jg=new Float32Array(9),e_=new Float32Array(4);function Wo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Kg[r];if(s===void 0&&(s=new Float32Array(r),Kg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bc(n,e){let t=Zg[e];t===void 0&&(t=new Int32Array(e),Zg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function XA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function YA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function qA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function $A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function KA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;e_.set(i),n.uniformMatrix2fv(this.addr,!1,e_),Nt(t,i)}}function ZA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;Jg.set(i),n.uniformMatrix3fv(this.addr,!1,Jg),Nt(t,i)}}function QA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;Qg.set(i),n.uniformMatrix4fv(this.addr,!1,Qg),Nt(t,i)}}function JA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function t2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function n2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function i2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function r2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function s2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function o2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function a2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Sx,r)}function l2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ex,r)}function u2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Tx,r)}function c2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mx,r)}function f2(n){switch(n){case 5126:return XA;case 35664:return YA;case 35665:return qA;case 35666:return $A;case 35674:return KA;case 35675:return ZA;case 35676:return QA;case 5124:case 35670:return JA;case 35667:case 35671:return e2;case 35668:case 35672:return t2;case 35669:case 35673:return n2;case 5125:return i2;case 36294:return r2;case 36295:return s2;case 36296:return o2;case 35678:case 36198:case 36298:case 36306:case 35682:return a2;case 35679:case 36299:case 36307:return l2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return c2}}function d2(n,e){n.uniform1fv(this.addr,e)}function h2(n,e){const t=Wo(e,this.size,2);n.uniform2fv(this.addr,t)}function p2(n,e){const t=Wo(e,this.size,3);n.uniform3fv(this.addr,t)}function m2(n,e){const t=Wo(e,this.size,4);n.uniform4fv(this.addr,t)}function g2(n,e){const t=Wo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _2(n,e){const t=Wo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function v2(n,e){const t=Wo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x2(n,e){n.uniform1iv(this.addr,e)}function y2(n,e){n.uniform2iv(this.addr,e)}function S2(n,e){n.uniform3iv(this.addr,e)}function M2(n,e){n.uniform4iv(this.addr,e)}function E2(n,e){n.uniform1uiv(this.addr,e)}function T2(n,e){n.uniform2uiv(this.addr,e)}function w2(n,e){n.uniform3uiv(this.addr,e)}function A2(n,e){n.uniform4uiv(this.addr,e)}function b2(n,e,t){const i=this.cache,r=e.length,s=bc(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Sx,s[a])}function C2(n,e,t){const i=this.cache,r=e.length,s=bc(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ex,s[a])}function R2(n,e,t){const i=this.cache,r=e.length,s=bc(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Tx,s[a])}function P2(n,e,t){const i=this.cache,r=e.length,s=bc(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Mx,s[a])}function L2(n){switch(n){case 5126:return d2;case 35664:return h2;case 35665:return p2;case 35666:return m2;case 35674:return g2;case 35675:return _2;case 35676:return v2;case 5124:case 35670:return x2;case 35667:case 35671:return y2;case 35668:case 35672:return S2;case 35669:case 35673:return M2;case 5125:return E2;case 36294:return T2;case 36295:return w2;case 36296:return A2;case 35678:case 36198:case 36298:case 36306:case 35682:return b2;case 35679:case 36299:case 36307:return C2;case 35680:case 36300:case 36308:case 36293:return R2;case 36289:case 36303:case 36311:case 36292:return P2}}class D2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=f2(t.type)}}class N2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=L2(t.type)}}class U2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Of=/(\w+)(\])?(\[|\.)?/g;function t_(n,e){n.seq.push(e),n.map[e.id]=e}function I2(n,e,t){const i=n.name,r=i.length;for(Of.lastIndex=0;;){const s=Of.exec(i),a=Of.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){t_(t,u===void 0?new D2(o,n,e):new N2(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new U2(o),t_(t,f)),t=f}}}class _u{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);I2(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function n_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const O2=37297;let F2=0;function k2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function z2(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===qu&&t===Yu?i="LinearDisplayP3ToLinearSRGB":e===Yu&&t===qu&&(i="LinearSRGBToLinearDisplayP3"),n){case Zi:case Tc:return[i,"LinearTransferOETF"];case Vt:case lp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function i_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+k2(n.getShaderSource(e),a)}else return r}function B2(n,e){const t=z2(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function H2(n,e){let t;switch(e){case kM:t="Linear";break;case zM:t="Reinhard";break;case BM:t="OptimizedCineon";break;case HM:t="ACESFilmic";break;case VM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function V2(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ua).join(`
`)}function G2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function W2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ua(n){return n!==""}function r_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j2=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(n){return n.replace(j2,Y2)}const X2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Y2(n,e){let t=ze[e];if(t===void 0){const i=X2.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qd(t)}const q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o_(n){return n.replace(q2,$2)}function $2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function a_(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function Z2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Lo:case Do:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Do:e="ENVMAP_MODE_REFRACTION";break}return e}function J2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zv:e="ENVMAP_BLENDING_MULTIPLY";break;case OM:e="ENVMAP_BLENDING_MIX";break;case FM:e="ENVMAP_BLENDING_ADD";break}return e}function eb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=K2(t),u=Z2(t),c=Q2(t),f=J2(t),d=eb(t),p=t.isWebGL2?"":V2(t),_=G2(s),m=r.createProgram();let g,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ua).join(`
`),g.length>0&&(g+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ua).join(`
`),h.length>0&&(h+=`
`)):(g=[a_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),h=[p,a_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?ze.tonemapping_pars_fragment:"",t.toneMapping!==Rr?H2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,B2("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),a=qd(a),a=r_(a,t),a=s_(a,t),o=qd(o),o=r_(o,t),o=s_(o,t),a=o_(a),o=o_(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+g+a,y=v+h+o,S=n_(r,r.VERTEX_SHADER,x),T=n_(r,r.FRAGMENT_SHADER,y);r.attachShader(m,S),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function E(U){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(m).trim(),G=r.getShaderInfoLog(S).trim(),L=r.getShaderInfoLog(T).trim();let B=!0,V=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,S,T);else{const Y=i_(r,S,"vertex"),H=i_(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+Y+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||L==="")&&(V=!1);V&&(U.diagnostics={runnable:B,programLog:z,vertexShader:{log:G,prefix:g},fragmentShader:{log:L,prefix:h}})}r.deleteShader(S),r.deleteShader(T),C=new _u(r,m),M=W2(r,m)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(m,O2)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=T,this}let nb=0;class ib{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rb(e),t.set(e,i)),i}}class rb{constructor(e){this.id=nb++,this.code=e,this.usedTimes=0}}function sb(n,e,t,i,r,s,a){const o=new fx,l=new ib,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return M===0?"uv":`uv${M}`}function g(M,w,U,z,G){const L=z.fog,B=G.geometry,V=M.isMeshStandardMaterial?z.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),H=Y&&Y.mapping===Ec?Y.image.height:null,k=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const I=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,P=I!==void 0?I.length:0;let O=0;B.morphAttributes.position!==void 0&&(O=1),B.morphAttributes.normal!==void 0&&(O=2),B.morphAttributes.color!==void 0&&(O=3);let oe,N,de,J;if(k){const Tt=Mi[k];oe=Tt.vertexShader,N=Tt.fragmentShader}else oe=M.vertexShader,N=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);const me=n.getRenderTarget(),xe=G.isInstancedMesh===!0,ye=!!M.map,Pe=!!M.matcap,be=!!Y,j=!!M.aoMap,gt=!!M.lightMap,Se=!!M.bumpMap,Le=!!M.normalMap,Ce=!!M.displacementMap,tt=!!M.emissiveMap,Ie=!!M.metalnessMap,Oe=!!M.roughnessMap,qe=M.anisotropy>0,ct=M.clearcoat>0,_t=M.iridescence>0,R=M.sheen>0,A=M.transmission>0,q=qe&&!!M.anisotropyMap,se=ct&&!!M.clearcoatMap,ne=ct&&!!M.clearcoatNormalMap,ae=ct&&!!M.clearcoatRoughnessMap,Me=_t&&!!M.iridescenceMap,ue=_t&&!!M.iridescenceThicknessMap,pe=R&&!!M.sheenColorMap,D=R&&!!M.sheenRoughnessMap,le=!!M.specularMap,te=!!M.specularColorMap,De=!!M.specularIntensityMap,Te=A&&!!M.transmissionMap,Re=A&&!!M.thicknessMap,Ee=!!M.gradientMap,_e=!!M.alphaMap,je=M.alphaTest>0,F=!!M.alphaHash,fe=!!M.extensions,ie=!!B.attributes.uv1,Q=!!B.attributes.uv2,ce=!!B.attributes.uv3;let Ae=Rr;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ae=n.toneMapping),{isWebGL2:c,shaderID:k,shaderType:M.type,shaderName:M.name,vertexShader:oe,fragmentShader:N,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:xe,instancingColor:xe&&G.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Zi,map:ye,matcap:Pe,envMap:be,envMapMode:be&&Y.mapping,envMapCubeUVHeight:H,aoMap:j,lightMap:gt,bumpMap:Se,normalMap:Le,displacementMap:d&&Ce,emissiveMap:tt,normalMapObjectSpace:Le&&M.normalMapType===nE,normalMapTangentSpace:Le&&M.normalMapType===tE,metalnessMap:Ie,roughnessMap:Oe,anisotropy:qe,anisotropyMap:q,clearcoat:ct,clearcoatMap:se,clearcoatNormalMap:ne,clearcoatRoughnessMap:ae,iridescence:_t,iridescenceMap:Me,iridescenceThicknessMap:ue,sheen:R,sheenColorMap:pe,sheenRoughnessMap:D,specularMap:le,specularColorMap:te,specularIntensityMap:De,transmission:A,transmissionMap:Te,thicknessMap:Re,gradientMap:Ee,opaque:M.transparent===!1&&M.blending===xo,alphaMap:_e,alphaTest:je,alphaHash:F,combine:M.combine,mapUv:ye&&m(M.map.channel),aoMapUv:j&&m(M.aoMap.channel),lightMapUv:gt&&m(M.lightMap.channel),bumpMapUv:Se&&m(M.bumpMap.channel),normalMapUv:Le&&m(M.normalMap.channel),displacementMapUv:Ce&&m(M.displacementMap.channel),emissiveMapUv:tt&&m(M.emissiveMap.channel),metalnessMapUv:Ie&&m(M.metalnessMap.channel),roughnessMapUv:Oe&&m(M.roughnessMap.channel),anisotropyMapUv:q&&m(M.anisotropyMap.channel),clearcoatMapUv:se&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:D&&m(M.sheenRoughnessMap.channel),specularMapUv:le&&m(M.specularMap.channel),specularColorMapUv:te&&m(M.specularColorMap.channel),specularIntensityMapUv:De&&m(M.specularIntensityMap.channel),transmissionMapUv:Te&&m(M.transmissionMap.channel),thicknessMapUv:Re&&m(M.thicknessMap.channel),alphaMapUv:_e&&m(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Le||qe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:Q,vertexUv3s:ce,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(ye||_e),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:O,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vi,flipSided:M.side===xn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:fe&&M.extensions.derivatives===!0,extensionFragDepth:fe&&M.extensions.fragDepth===!0,extensionDrawBuffers:fe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)w.push(U),w.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(v(w,M),x(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const w=_[M.type];let U;if(w){const z=Mi[w];U=GE.clone(z.uniforms)}else U=M.uniforms;return U}function S(M,w){let U;for(let z=0,G=u.length;z<G;z++){const L=u[z];if(L.cacheKey===w){U=L,++U.usedTimes;break}}return U===void 0&&(U=new tb(n,w,M,s),u.push(U)),U}function T(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:y,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:C}}function ob(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ab(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function l_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function u_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,p,_,m,g){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=m,h.group=g),e++,h}function o(f,d,p,_,m,g){const h=a(f,d,p,_,m,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,_,m,g){const h=a(f,d,p,_,m,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||ab),i.length>1&&i.sort(d||l_),r.length>1&&r.sort(d||l_)}function c(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function lb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new u_,n.set(i,[a])):r>=s.length?(a=new u_,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ub(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Ge};break;case"SpotLight":t={position:new X,direction:new X,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function cb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fb=0;function db(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hb(n,e){const t=new ub,i=cb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new X);const s=new X,a=new zt,o=new zt;function l(c,f){let d=0,p=0,_=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let m=0,g=0,h=0,v=0,x=0,y=0,S=0,T=0,E=0,C=0,M=0;c.sort(db);const w=f===!0?Math.PI:1;for(let z=0,G=c.length;z<G;z++){const L=c[z],B=L.color,V=L.intensity,Y=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=B.r*V*w,p+=B.g*V*w,_+=B.b*V*w;else if(L.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(L.sh.coefficients[k],V);M++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const I=L.shadow,P=i.get(L);P.shadowBias=I.bias,P.shadowNormalBias=I.normalBias,P.shadowRadius=I.radius,P.shadowMapSize=I.mapSize,r.directionalShadow[m]=P,r.directionalShadowMap[m]=H,r.directionalShadowMatrix[m]=L.shadow.matrix,y++}r.directional[m]=k,m++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(B).multiplyScalar(V*w),k.distance=Y,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,r.spot[h]=k;const I=L.shadow;if(L.map&&(r.spotLightMap[E]=L.map,E++,I.updateMatrices(L),L.castShadow&&C++),r.spotLightMatrix[h]=I.matrix,L.castShadow){const P=i.get(L);P.shadowBias=I.bias,P.shadowNormalBias=I.normalBias,P.shadowRadius=I.radius,P.shadowMapSize=I.mapSize,r.spotShadow[h]=P,r.spotShadowMap[h]=H,T++}h++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(B).multiplyScalar(V),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=k,v++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*w),k.distance=L.distance,k.decay=L.decay,L.castShadow){const I=L.shadow,P=i.get(L);P.shadowBias=I.bias,P.shadowNormalBias=I.normalBias,P.shadowRadius=I.radius,P.shadowMapSize=I.mapSize,P.shadowCameraNear=I.camera.near,P.shadowCameraFar=I.camera.far,r.pointShadow[g]=P,r.pointShadowMap[g]=H,r.pointShadowMatrix[g]=L.shadow.matrix,S++}r.point[g]=k,g++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(V*w),k.groundColor.copy(L.groundColor).multiplyScalar(V*w),r.hemi[x]=k,x++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const U=r.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==h||U.rectAreaLength!==v||U.hemiLength!==x||U.numDirectionalShadows!==y||U.numPointShadows!==S||U.numSpotShadows!==T||U.numSpotMaps!==E||U.numLightProbes!==M)&&(r.directional.length=m,r.spot.length=h,r.rectArea.length=v,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=T+E-C,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=M,U.directionalLength=m,U.pointLength=g,U.spotLength=h,U.rectAreaLength=v,U.hemiLength=x,U.numDirectionalShadows=y,U.numPointShadows=S,U.numSpotShadows=T,U.numSpotMaps=E,U.numLightProbes=M,r.version=fb++)}function u(c,f){let d=0,p=0,_=0,m=0,g=0;const h=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),d++}else if(y.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const S=r.rectArea[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),o.identity(),a.copy(y.matrixWorld),a.premultiply(h),o.extractRotation(a),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const S=r.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(h),g++}}}return{setup:l,setupView:u,state:r}}function c_(n,e){const t=new hb(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function pb(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new c_(n,e),t.set(s,[l])):a>=o.length?(l=new c_(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class mb extends ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gb extends ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xb(n,e,t){let i=new xx;const r=new Ve,s=new Ve,a=new Gt,o=new mb({depthPacking:eE}),l=new gb,u={},c=t.maxTextureSize,f={[Ir]:xn,[xn]:Ir,[Vi]:Vi},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:_b,fragmentShader:vb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new gi;_.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new gr(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kv;let h=this.type;this.render=function(S,T,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const C=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Cr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=h!==Fi&&this.type===Fi,G=h===Fi&&this.type!==Fi;for(let L=0,B=S.length;L<B;L++){const V=S[L],Y=V.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const H=Y.getFrameExtents();if(r.multiply(H),s.copy(Y.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/H.x),r.x=s.x*H.x,Y.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/H.y),r.y=s.y*H.y,Y.mapSize.y=s.y)),Y.map===null||z===!0||G===!0){const I=this.type!==Fi?{minFilter:ln,magFilter:ln}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ms(r.x,r.y,I),Y.map.texture.name=V.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const k=Y.getViewportCount();for(let I=0;I<k;I++){const P=Y.getViewport(I);a.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),U.viewport(a),Y.updateMatrices(V,I),i=Y.getFrustum(),y(T,E,Y.camera,V,this.type)}Y.isPointLightShadow!==!0&&this.type===Fi&&v(Y,E),Y.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(C,M,w)};function v(S,T){const E=e.update(m);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ms(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,E,d,m,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,E,p,m,null)}function x(S,T,E,C){let M=null;const w=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)M=w;else if(M=E.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=M.uuid,z=T.uuid;let G=u[U];G===void 0&&(G={},u[U]=G);let L=G[z];L===void 0&&(L=M.clone(),G[z]=L),M=L}if(M.visible=T.visible,M.wireframe=T.wireframe,C===Fi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=E}return M}function y(S,T,E,C,M){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Fi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const z=e.update(S),G=S.material;if(Array.isArray(G)){const L=z.groups;for(let B=0,V=L.length;B<V;B++){const Y=L[B],H=G[Y.materialIndex];if(H&&H.visible){const k=x(S,H,C,M);n.renderBufferDirect(E,null,z,k,S,Y)}}}else if(G.visible){const L=x(S,G,C,M);n.renderBufferDirect(E,null,z,L,S,null)}}const U=S.children;for(let z=0,G=U.length;z<G;z++)y(U[z],T,E,C,M)}}function yb(n,e,t){const i=t.isWebGL2;function r(){let F=!1;const fe=new Gt;let ie=null;const Q=new Gt(0,0,0,0);return{setMask:function(ce){ie!==ce&&!F&&(n.colorMask(ce,ce,ce,ce),ie=ce)},setLocked:function(ce){F=ce},setClear:function(ce,Ae,Xe,Tt,Vn){Vn===!0&&(ce*=Tt,Ae*=Tt,Xe*=Tt),fe.set(ce,Ae,Xe,Tt),Q.equals(fe)===!1&&(n.clearColor(ce,Ae,Xe,Tt),Q.copy(fe))},reset:function(){F=!1,ie=null,Q.set(-1,0,0,0)}}}function s(){let F=!1,fe=null,ie=null,Q=null;return{setTest:function(ce){ce?ye(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(ce){fe!==ce&&!F&&(n.depthMask(ce),fe=ce)},setFunc:function(ce){if(ie!==ce){switch(ce){case RM:n.depthFunc(n.NEVER);break;case PM:n.depthFunc(n.ALWAYS);break;case LM:n.depthFunc(n.LESS);break;case ju:n.depthFunc(n.LEQUAL);break;case DM:n.depthFunc(n.EQUAL);break;case NM:n.depthFunc(n.GEQUAL);break;case UM:n.depthFunc(n.GREATER);break;case IM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=ce}},setLocked:function(ce){F=ce},setClear:function(ce){Q!==ce&&(n.clearDepth(ce),Q=ce)},reset:function(){F=!1,fe=null,ie=null,Q=null}}}function a(){let F=!1,fe=null,ie=null,Q=null,ce=null,Ae=null,Xe=null,Tt=null,Vn=null;return{setTest:function(nt){F||(nt?ye(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(nt){fe!==nt&&!F&&(n.stencilMask(nt),fe=nt)},setFunc:function(nt,nn,vi){(ie!==nt||Q!==nn||ce!==vi)&&(n.stencilFunc(nt,nn,vi),ie=nt,Q=nn,ce=vi)},setOp:function(nt,nn,vi){(Ae!==nt||Xe!==nn||Tt!==vi)&&(n.stencilOp(nt,nn,vi),Ae=nt,Xe=nn,Tt=vi)},setLocked:function(nt){F=nt},setClear:function(nt){Vn!==nt&&(n.clearStencil(nt),Vn=nt)},reset:function(){F=!1,fe=null,ie=null,Q=null,ce=null,Ae=null,Xe=null,Tt=null,Vn=null}}}const o=new r,l=new s,u=new a,c=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,m=[],g=null,h=!1,v=null,x=null,y=null,S=null,T=null,E=null,C=null,M=new Ge(0,0,0),w=0,U=!1,z=null,G=null,L=null,B=null,V=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(I)[1]),H=k>=1):I.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),H=k>=2);let P=null,O={};const oe=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),de=new Gt().fromArray(oe),J=new Gt().fromArray(N);function me(F,fe,ie,Q){const ce=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(F,Ae),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<ie;Xe++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(fe,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(fe+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return Ae}const xe={};xe[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ye(n.DEPTH_TEST),l.setFunc(ju),Ie(!1),Oe(Xm),ye(n.CULL_FACE),Ce(Cr);function ye(F){d[F]!==!0&&(n.enable(F),d[F]=!0)}function Pe(F){d[F]!==!1&&(n.disable(F),d[F]=!1)}function be(F,fe){return p[F]!==fe?(n.bindFramebuffer(F,fe),p[F]=fe,i&&(F===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=fe),F===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=fe)),!0):!1}function j(F,fe){let ie=m,Q=!1;if(F)if(ie=_.get(fe),ie===void 0&&(ie=[],_.set(fe,ie)),F.isWebGLMultipleRenderTargets){const ce=F.texture;if(ie.length!==ce.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,Xe=ce.length;Ae<Xe;Ae++)ie[Ae]=n.COLOR_ATTACHMENT0+Ae;ie.length=ce.length,Q=!0}}else ie[0]!==n.COLOR_ATTACHMENT0&&(ie[0]=n.COLOR_ATTACHMENT0,Q=!0);else ie[0]!==n.BACK&&(ie[0]=n.BACK,Q=!0);Q&&(t.isWebGL2?n.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function gt(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const Se={[es]:n.FUNC_ADD,[pM]:n.FUNC_SUBTRACT,[mM]:n.FUNC_REVERSE_SUBTRACT};if(i)Se[$m]=n.MIN,Se[Km]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Se[$m]=F.MIN_EXT,Se[Km]=F.MAX_EXT)}const Le={[gM]:n.ZERO,[_M]:n.ONE,[vM]:n.SRC_COLOR,[Bd]:n.SRC_ALPHA,[TM]:n.SRC_ALPHA_SATURATE,[MM]:n.DST_COLOR,[yM]:n.DST_ALPHA,[xM]:n.ONE_MINUS_SRC_COLOR,[Hd]:n.ONE_MINUS_SRC_ALPHA,[EM]:n.ONE_MINUS_DST_COLOR,[SM]:n.ONE_MINUS_DST_ALPHA,[wM]:n.CONSTANT_COLOR,[AM]:n.ONE_MINUS_CONSTANT_COLOR,[bM]:n.CONSTANT_ALPHA,[CM]:n.ONE_MINUS_CONSTANT_ALPHA};function Ce(F,fe,ie,Q,ce,Ae,Xe,Tt,Vn,nt){if(F===Cr){h===!0&&(Pe(n.BLEND),h=!1);return}if(h===!1&&(ye(n.BLEND),h=!0),F!==hM){if(F!==v||nt!==U){if((x!==es||T!==es)&&(n.blendEquation(n.FUNC_ADD),x=es,T=es),nt)switch(F){case xo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ja:n.blendFunc(n.ONE,n.ONE);break;case Ym:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case xo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ja:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ym:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,S=null,E=null,C=null,M.set(0,0,0),w=0,v=F,U=nt}return}ce=ce||fe,Ae=Ae||ie,Xe=Xe||Q,(fe!==x||ce!==T)&&(n.blendEquationSeparate(Se[fe],Se[ce]),x=fe,T=ce),(ie!==y||Q!==S||Ae!==E||Xe!==C)&&(n.blendFuncSeparate(Le[ie],Le[Q],Le[Ae],Le[Xe]),y=ie,S=Q,E=Ae,C=Xe),(Tt.equals(M)===!1||Vn!==w)&&(n.blendColor(Tt.r,Tt.g,Tt.b,Vn),M.copy(Tt),w=Vn),v=F,U=!1}function tt(F,fe){F.side===Vi?Pe(n.CULL_FACE):ye(n.CULL_FACE);let ie=F.side===xn;fe&&(ie=!ie),Ie(ie),F.blending===xo&&F.transparent===!1?Ce(Cr):Ce(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const Q=F.stencilWrite;u.setTest(Q),Q&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ct(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(F){z!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),z=F)}function Oe(F){F!==cM?(ye(n.CULL_FACE),F!==G&&(F===Xm?n.cullFace(n.BACK):F===fM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),G=F}function qe(F){F!==L&&(H&&n.lineWidth(F),L=F)}function ct(F,fe,ie){F?(ye(n.POLYGON_OFFSET_FILL),(B!==fe||V!==ie)&&(n.polygonOffset(fe,ie),B=fe,V=ie)):Pe(n.POLYGON_OFFSET_FILL)}function _t(F){F?ye(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function R(F){F===void 0&&(F=n.TEXTURE0+Y-1),P!==F&&(n.activeTexture(F),P=F)}function A(F,fe,ie){ie===void 0&&(P===null?ie=n.TEXTURE0+Y-1:ie=P);let Q=O[ie];Q===void 0&&(Q={type:void 0,texture:void 0},O[ie]=Q),(Q.type!==F||Q.texture!==fe)&&(P!==ie&&(n.activeTexture(ie),P=ie),n.bindTexture(F,fe||xe[F]),Q.type=F,Q.texture=fe)}function q(){const F=O[P];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function D(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(F){de.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),de.copy(F))}function Re(F){J.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),J.copy(F))}function Ee(F,fe){let ie=f.get(fe);ie===void 0&&(ie=new WeakMap,f.set(fe,ie));let Q=ie.get(F);Q===void 0&&(Q=n.getUniformBlockIndex(fe,F.name),ie.set(F,Q))}function _e(F,fe){const Q=f.get(fe).get(F);c.get(fe)!==Q&&(n.uniformBlockBinding(fe,Q,F.__bindingPointIndex),c.set(fe,Q))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},P=null,O={},p={},_=new WeakMap,m=[],g=null,h=!1,v=null,x=null,y=null,S=null,T=null,E=null,C=null,M=new Ge(0,0,0),w=0,U=!1,z=null,G=null,L=null,B=null,V=null,de.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:ye,disable:Pe,bindFramebuffer:be,drawBuffers:j,useProgram:gt,setBlending:Ce,setMaterial:tt,setFlipSided:Ie,setCullFace:Oe,setLineWidth:qe,setPolygonOffset:ct,setScissorTest:_t,activeTexture:R,bindTexture:A,unbindTexture:q,compressedTexImage2D:se,compressedTexImage3D:ne,texImage2D:te,texImage3D:De,updateUBOMapping:Ee,uniformBlockBinding:_e,texStorage2D:D,texStorage3D:le,texSubImage2D:ae,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:pe,scissor:Te,viewport:Re,reset:je}}function Sb(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const g=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,A){return h?new OffscreenCanvas(R,A):Zu("canvas")}function x(R,A,q,se){let ne=1;if((R.width>se||R.height>se)&&(ne=se/Math.max(R.width,R.height)),ne<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ae=A?Ku:Math.floor,Me=ae(ne*R.width),ue=ae(ne*R.height);m===void 0&&(m=v(Me,ue));const pe=q?v(Me,ue):m;return pe.width=Me,pe.height=ue,pe.getContext("2d").drawImage(R,0,0,Me,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Me+"x"+ue+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return Yd(R.width)&&Yd(R.height)}function S(R){return o?!1:R.wrapS!==fi||R.wrapT!==fi||R.minFilter!==ln&&R.minFilter!==Yn}function T(R,A){return R.generateMipmaps&&A&&R.minFilter!==ln&&R.minFilter!==Yn}function E(R){n.generateMipmap(R)}function C(R,A,q,se,ne=!1){if(o===!1)return A;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=A;if(A===n.RED&&(q===n.FLOAT&&(ae=n.R32F),q===n.HALF_FLOAT&&(ae=n.R16F),q===n.UNSIGNED_BYTE&&(ae=n.R8)),A===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ae=n.R8UI),q===n.UNSIGNED_SHORT&&(ae=n.R16UI),q===n.UNSIGNED_INT&&(ae=n.R32UI),q===n.BYTE&&(ae=n.R8I),q===n.SHORT&&(ae=n.R16I),q===n.INT&&(ae=n.R32I)),A===n.RG&&(q===n.FLOAT&&(ae=n.RG32F),q===n.HALF_FLOAT&&(ae=n.RG16F),q===n.UNSIGNED_BYTE&&(ae=n.RG8)),A===n.RGBA){const Me=ne?Xu:Je.getTransfer(se);q===n.FLOAT&&(ae=n.RGBA32F),q===n.HALF_FLOAT&&(ae=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ae=Me===ot?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function M(R,A,q){return T(R,q)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==Yn?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function w(R){return R===ln||R===Zm||R===uf?n.NEAREST:n.LINEAR}function U(R){const A=R.target;A.removeEventListener("dispose",U),G(A),A.isVideoTexture&&_.delete(A)}function z(R){const A=R.target;A.removeEventListener("dispose",z),B(A)}function G(R){const A=i.get(R);if(A.__webglInit===void 0)return;const q=R.source,se=g.get(q);if(se){const ne=se[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(R),Object.keys(se).length===0&&g.delete(q)}i.remove(R)}function L(R){const A=i.get(R);n.deleteTexture(A.__webglTexture);const q=R.source,se=g.get(q);delete se[A.__cacheKey],a.memory.textures--}function B(R){const A=R.texture,q=i.get(R),se=i.get(A);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(q.__webglFramebuffer[ne]))for(let ae=0;ae<q.__webglFramebuffer[ne].length;ae++)n.deleteFramebuffer(q.__webglFramebuffer[ne][ae]);else n.deleteFramebuffer(q.__webglFramebuffer[ne]);q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[ne])}else{if(Array.isArray(q.__webglFramebuffer))for(let ne=0;ne<q.__webglFramebuffer.length;ne++)n.deleteFramebuffer(q.__webglFramebuffer[ne]);else n.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ne=0;ne<q.__webglColorRenderbuffer.length;ne++)q.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[ne]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,ae=A.length;ne<ae;ne++){const Me=i.get(A[ne]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(A[ne])}i.remove(A),i.remove(R)}let V=0;function Y(){V=0}function H(){const R=V;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),V+=1,R}function k(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function I(R,A){const q=i.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(q,R,A);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+A)}function P(R,A){const q=i.get(R);if(R.version>0&&q.__version!==R.version){ye(q,R,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+A)}function O(R,A){const q=i.get(R);if(R.version>0&&q.__version!==R.version){ye(q,R,A);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+A)}function oe(R,A){const q=i.get(R);if(R.version>0&&q.__version!==R.version){Pe(q,R,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+A)}const N={[Wd]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[jd]:n.MIRRORED_REPEAT},de={[ln]:n.NEAREST,[Zm]:n.NEAREST_MIPMAP_NEAREST,[uf]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[GM]:n.LINEAR_MIPMAP_NEAREST,[Xa]:n.LINEAR_MIPMAP_LINEAR},J={[iE]:n.NEVER,[cE]:n.ALWAYS,[rE]:n.LESS,[oE]:n.LEQUAL,[sE]:n.EQUAL,[uE]:n.GEQUAL,[aE]:n.GREATER,[lE]:n.NOTEQUAL};function me(R,A,q){if(q?(n.texParameteri(R,n.TEXTURE_WRAP_S,N[A.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,N[A.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,N[A.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,de[A.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,de[A.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==fi||A.wrapT!==fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,w(A.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==ln&&A.minFilter!==Yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,J[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===ln||A.minFilter!==uf&&A.minFilter!==Xa||A.type===mr&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Ya&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function xe(R,A){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",U));const se=A.source;let ne=g.get(se);ne===void 0&&(ne={},g.set(se,ne));const ae=k(A);if(ae!==R.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ne[ae].usedTimes++;const Me=ne[R.__cacheKey];Me!==void 0&&(ne[R.__cacheKey].usedTimes--,Me.usedTimes===0&&L(A)),R.__cacheKey=ae,R.__webglTexture=ne[ae].texture}return q}function ye(R,A,q){let se=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(se=n.TEXTURE_3D);const ne=xe(R,A),ae=A.source;t.bindTexture(se,R.__webglTexture,n.TEXTURE0+q);const Me=i.get(ae);if(ae.version!==Me.__version||ne===!0){t.activeTexture(n.TEXTURE0+q);const ue=Je.getPrimaries(Je.workingColorSpace),pe=A.colorSpace===$n?null:Je.getPrimaries(A.colorSpace),D=A.colorSpace===$n||ue===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const le=S(A)&&y(A.image)===!1;let te=x(A.image,le,!1,c);te=_t(A,te);const De=y(te)||o,Te=s.convert(A.format,A.colorSpace);let Re=s.convert(A.type),Ee=C(A.internalFormat,Te,Re,A.colorSpace,A.isVideoTexture);me(se,A,De);let _e;const je=A.mipmaps,F=o&&A.isVideoTexture!==!0,fe=Me.__version===void 0||ne===!0,ie=M(A,te,De);if(A.isDepthTexture)Ee=n.DEPTH_COMPONENT,o?A.type===mr?Ee=n.DEPTH_COMPONENT32F:A.type===pr?Ee=n.DEPTH_COMPONENT24:A.type===us?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:A.type===mr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===cs&&Ee===n.DEPTH_COMPONENT&&A.type!==ap&&A.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=pr,Re=s.convert(A.type)),A.format===No&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,A.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=us,Re=s.convert(A.type))),fe&&(F?t.texStorage2D(n.TEXTURE_2D,1,Ee,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Ee,te.width,te.height,0,Te,Re,null));else if(A.isDataTexture)if(je.length>0&&De){F&&fe&&t.texStorage2D(n.TEXTURE_2D,ie,Ee,je[0].width,je[0].height);for(let Q=0,ce=je.length;Q<ce;Q++)_e=je[Q],F?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,_e.width,_e.height,Te,Re,_e.data):t.texImage2D(n.TEXTURE_2D,Q,Ee,_e.width,_e.height,0,Te,Re,_e.data);A.generateMipmaps=!1}else F?(fe&&t.texStorage2D(n.TEXTURE_2D,ie,Ee,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,Te,Re,te.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,te.width,te.height,0,Te,Re,te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){F&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ee,je[0].width,je[0].height,te.depth);for(let Q=0,ce=je.length;Q<ce;Q++)_e=je[Q],A.format!==di?Te!==null?F?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,te.depth,Te,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ee,_e.width,_e.height,te.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,te.depth,Te,Re,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ee,_e.width,_e.height,te.depth,0,Te,Re,_e.data)}else{F&&fe&&t.texStorage2D(n.TEXTURE_2D,ie,Ee,je[0].width,je[0].height);for(let Q=0,ce=je.length;Q<ce;Q++)_e=je[Q],A.format!==di?Te!==null?F?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ee,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,_e.width,_e.height,Te,Re,_e.data):t.texImage2D(n.TEXTURE_2D,Q,Ee,_e.width,_e.height,0,Te,Re,_e.data)}else if(A.isDataArrayTexture)F?(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ee,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Te,Re,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,Te,Re,te.data);else if(A.isData3DTexture)F?(fe&&t.texStorage3D(n.TEXTURE_3D,ie,Ee,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Te,Re,te.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,Te,Re,te.data);else if(A.isFramebufferTexture){if(fe)if(F)t.texStorage2D(n.TEXTURE_2D,ie,Ee,te.width,te.height);else{let Q=te.width,ce=te.height;for(let Ae=0;Ae<ie;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Ee,Q,ce,0,Te,Re,null),Q>>=1,ce>>=1}}else if(je.length>0&&De){F&&fe&&t.texStorage2D(n.TEXTURE_2D,ie,Ee,je[0].width,je[0].height);for(let Q=0,ce=je.length;Q<ce;Q++)_e=je[Q],F?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Te,Re,_e):t.texImage2D(n.TEXTURE_2D,Q,Ee,Te,Re,_e);A.generateMipmaps=!1}else F?(fe&&t.texStorage2D(n.TEXTURE_2D,ie,Ee,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Re,te)):t.texImage2D(n.TEXTURE_2D,0,Ee,Te,Re,te);T(A,De)&&E(se),Me.__version=ae.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Pe(R,A,q){if(A.image.length!==6)return;const se=xe(R,A),ne=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+q);const ae=i.get(ne);if(ne.version!==ae.__version||se===!0){t.activeTexture(n.TEXTURE0+q);const Me=Je.getPrimaries(Je.workingColorSpace),ue=A.colorSpace===$n?null:Je.getPrimaries(A.colorSpace),pe=A.colorSpace===$n||Me===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const D=A.isCompressedTexture||A.image[0].isCompressedTexture,le=A.image[0]&&A.image[0].isDataTexture,te=[];for(let Q=0;Q<6;Q++)!D&&!le?te[Q]=x(A.image[Q],!1,!0,u):te[Q]=le?A.image[Q].image:A.image[Q],te[Q]=_t(A,te[Q]);const De=te[0],Te=y(De)||o,Re=s.convert(A.format,A.colorSpace),Ee=s.convert(A.type),_e=C(A.internalFormat,Re,Ee,A.colorSpace),je=o&&A.isVideoTexture!==!0,F=ae.__version===void 0||se===!0;let fe=M(A,De,Te);me(n.TEXTURE_CUBE_MAP,A,Te);let ie;if(D){je&&F&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,_e,De.width,De.height);for(let Q=0;Q<6;Q++){ie=te[Q].mipmaps;for(let ce=0;ce<ie.length;ce++){const Ae=ie[ce];A.format!==di?Re!==null?je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ae.width,Ae.height,Re,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,_e,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ae.width,Ae.height,Re,Ee,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,_e,Ae.width,Ae.height,0,Re,Ee,Ae.data)}}}else{ie=A.mipmaps,je&&F&&(ie.length>0&&fe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,_e,te[0].width,te[0].height));for(let Q=0;Q<6;Q++)if(le){je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,te[Q].width,te[Q].height,Re,Ee,te[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,_e,te[Q].width,te[Q].height,0,Re,Ee,te[Q].data);for(let ce=0;ce<ie.length;ce++){const Xe=ie[ce].image[Q].image;je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Xe.width,Xe.height,Re,Ee,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,_e,Xe.width,Xe.height,0,Re,Ee,Xe.data)}}else{je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re,Ee,te[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,_e,Re,Ee,te[Q]);for(let ce=0;ce<ie.length;ce++){const Ae=ie[ce];je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Re,Ee,Ae.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,_e,Re,Ee,Ae.image[Q])}}}T(A,Te)&&E(n.TEXTURE_CUBE_MAP),ae.__version=ne.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function be(R,A,q,se,ne,ae){const Me=s.convert(q.format,q.colorSpace),ue=s.convert(q.type),pe=C(q.internalFormat,Me,ue,q.colorSpace);if(!i.get(A).__hasExternalTextures){const le=Math.max(1,A.width>>ae),te=Math.max(1,A.height>>ae);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ae,pe,le,te,A.depth,0,Me,ue,null):t.texImage2D(ne,ae,pe,le,te,0,Me,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),qe(A)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ne,i.get(q).__webglTexture,0,Oe(A)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ne,i.get(q).__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(R,A,q){if(n.bindRenderbuffer(n.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let se=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||qe(A)){const ne=A.depthTexture;ne&&ne.isDepthTexture&&(ne.type===mr?se=n.DEPTH_COMPONENT32F:ne.type===pr&&(se=n.DEPTH_COMPONENT24));const ae=Oe(A);qe(A)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,se,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,se,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const se=Oe(A);q&&qe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,A.width,A.height):qe(A)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const se=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0;ne<se.length;ne++){const ae=se[ne],Me=s.convert(ae.format,ae.colorSpace),ue=s.convert(ae.type),pe=C(ae.internalFormat,Me,ue,ae.colorSpace),D=Oe(A);q&&qe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,D,pe,A.width,A.height):qe(A)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D,pe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,pe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),I(A.depthTexture,0);const se=i.get(A.depthTexture).__webglTexture,ne=Oe(A);if(A.depthTexture.format===cs)qe(A)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(A.depthTexture.format===No)qe(A)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Se(R){const A=i.get(R),q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");gt(A.__webglFramebuffer,R)}else if(q){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]=n.createRenderbuffer(),j(A.__webglDepthbuffer[se],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),j(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(R,A,q){const se=i.get(R);A!==void 0&&be(se.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Se(R)}function Ce(R){const A=R.texture,q=i.get(R),se=i.get(A);R.addEventListener("dispose",z),R.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=A.version,a.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,ae=R.isWebGLMultipleRenderTargets===!0,Me=y(R)||o;if(ne){q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[ue]=[];for(let pe=0;pe<A.mipmaps.length;pe++)q.__webglFramebuffer[ue][pe]=n.createFramebuffer()}else q.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let ue=0;ue<A.mipmaps.length;ue++)q.__webglFramebuffer[ue]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(ae)if(r.drawBuffers){const ue=R.texture;for(let pe=0,D=ue.length;pe<D;pe++){const le=i.get(ue[pe]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&qe(R)===!1){const ue=ae?A:[A];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let pe=0;pe<ue.length;pe++){const D=ue[pe];q.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[pe]);const le=s.convert(D.format,D.colorSpace),te=s.convert(D.type),De=C(D.internalFormat,le,te,D.colorSpace,R.isXRRenderTarget===!0),Te=Oe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,De,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,q.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),j(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),me(n.TEXTURE_CUBE_MAP,A,Me);for(let ue=0;ue<6;ue++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)be(q.__webglFramebuffer[ue][pe],R,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else be(q.__webglFramebuffer[ue],R,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);T(A,Me)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const ue=R.texture;for(let pe=0,D=ue.length;pe<D;pe++){const le=ue[pe],te=i.get(le);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),me(n.TEXTURE_2D,le,Me),be(q.__webglFramebuffer,R,le,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),T(le,Me)&&E(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ue=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,se.__webglTexture),me(ue,A,Me),o&&A.mipmaps&&A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)be(q.__webglFramebuffer[pe],R,A,n.COLOR_ATTACHMENT0,ue,pe);else be(q.__webglFramebuffer,R,A,n.COLOR_ATTACHMENT0,ue,0);T(A,Me)&&E(ue),t.unbindTexture()}R.depthBuffer&&Se(R)}function tt(R){const A=y(R)||o,q=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let se=0,ne=q.length;se<ne;se++){const ae=q[se];if(T(ae,A)){const Me=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(ae).__webglTexture;t.bindTexture(Me,ue),E(Me),t.unbindTexture()}}}function Ie(R){if(o&&R.samples>0&&qe(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],q=R.width,se=R.height;let ne=n.COLOR_BUFFER_BIT;const ae=[],Me=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(R),pe=R.isWebGLMultipleRenderTargets===!0;if(pe)for(let D=0;D<A.length;D++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let D=0;D<A.length;D++){ae.push(n.COLOR_ATTACHMENT0+D),R.depthBuffer&&ae.push(Me);const le=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(le===!1&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[D]),le===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),pe){const te=i.get(A[D]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,q,se,0,0,q,se,ne,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let D=0;D<A.length;D++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,ue.__webglColorRenderbuffer[D]);const le=i.get(A[D]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Oe(R){return Math.min(f,R.samples)}function qe(R){const A=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ct(R){const A=a.render.frame;_.get(R)!==A&&(_.set(R,A),R.update())}function _t(R,A){const q=R.colorSpace,se=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Xd||q!==Zi&&q!==$n&&(Je.getTransfer(q)===ot?o===!1?e.has("EXT_sRGB")===!0&&se===di?(R.format=Xd,R.minFilter=Yn,R.generateMipmaps=!1):A=lx.sRGBToLinear(A):(se!==di||ne!==Pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}this.allocateTextureUnit=H,this.resetTextureUnits=Y,this.setTexture2D=I,this.setTexture2DArray=P,this.setTexture3D=O,this.setTextureCube=oe,this.rebindTextures=Le,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=be,this.useMultisampledRTT=qe}function Mb(n,e,t){const i=t.isWebGL2;function r(s,a=$n){let o;const l=Je.getTransfer(a);if(s===Pr)return n.UNSIGNED_BYTE;if(s===ex)return n.UNSIGNED_SHORT_4_4_4_4;if(s===tx)return n.UNSIGNED_SHORT_5_5_5_1;if(s===WM)return n.BYTE;if(s===jM)return n.SHORT;if(s===ap)return n.UNSIGNED_SHORT;if(s===Jv)return n.INT;if(s===pr)return n.UNSIGNED_INT;if(s===mr)return n.FLOAT;if(s===Ya)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===XM)return n.ALPHA;if(s===di)return n.RGBA;if(s===YM)return n.LUMINANCE;if(s===qM)return n.LUMINANCE_ALPHA;if(s===cs)return n.DEPTH_COMPONENT;if(s===No)return n.DEPTH_STENCIL;if(s===Xd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===$M)return n.RED;if(s===nx)return n.RED_INTEGER;if(s===KM)return n.RG;if(s===ix)return n.RG_INTEGER;if(s===rx)return n.RGBA_INTEGER;if(s===cf||s===ff||s===df||s===hf)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===cf)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ff)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===df)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===cf)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ff)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===df)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hf)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qm||s===Jm||s===eg||s===tg)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Qm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===eg)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tg)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ZM)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ng||s===ig)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ng)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ig)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rg||s===sg||s===og||s===ag||s===lg||s===ug||s===cg||s===fg||s===dg||s===hg||s===pg||s===mg||s===gg||s===_g)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===rg)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sg)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===og)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ag)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lg)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ug)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cg)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fg)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dg)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hg)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pg)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mg)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gg)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_g)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pf||s===vg||s===xg)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===pf)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vg)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xg)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===QM||s===yg||s===Sg||s===Mg)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===pf)return o.COMPRESSED_RED_RGTC1_EXT;if(s===yg)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sg)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mg)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===us?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Eb extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jl extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tb={type:"move"};class Ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),h=this._getHandJoint(u,m);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class wb extends On{constructor(e,t,i,r,s,a,o,l,u,c){if(c=c!==void 0?c:cs,c!==cs&&c!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===cs&&(i=pr),i===void 0&&c===No&&(i=us),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ab extends Cs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const m=t.getContextAttributes();let g=null,h=null;const v=[],x=[],y=new qn;y.layers.enable(1),y.viewport=new Gt;const S=new qn;S.layers.enable(2),S.viewport=new Gt;const T=[y,S],E=new Eb;E.layers.enable(1),E.layers.enable(2);let C=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let O=v[P];return O===void 0&&(O=new Ff,v[P]=O),O.getTargetRaySpace()},this.getControllerGrip=function(P){let O=v[P];return O===void 0&&(O=new Ff,v[P]=O),O.getGripSpace()},this.getHand=function(P){let O=v[P];return O===void 0&&(O=new Ff,v[P]=O),O.getHandSpace()};function w(P){const O=x.indexOf(P.inputSource);if(O===-1)return;const oe=v[O];oe!==void 0&&(oe.update(P.inputSource,P.frame,u||a),oe.dispatchEvent({type:P.type,data:P.inputSource}))}function U(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",z);for(let P=0;P<v.length;P++){const O=x[P];O!==null&&(x[P]=null,v[P].disconnect(O))}C=null,M=null,e.setRenderTarget(g),p=null,d=null,f=null,r=null,h=null,I.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(P){u=P},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",U),r.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,O),r.updateRenderState({baseLayer:p}),h=new Ms(p.framebufferWidth,p.framebufferHeight,{format:di,type:Pr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let O=null,oe=null,N=null;m.depth&&(N=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=m.stencil?No:cs,oe=m.stencil?us:pr);const de={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(de),r.updateRenderState({layers:[d]}),h=new Ms(d.textureWidth,d.textureHeight,{format:di,type:Pr,depthTexture:new wb(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const J=e.properties.get(h);J.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),I.setContext(r),I.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(P){for(let O=0;O<P.removed.length;O++){const oe=P.removed[O],N=x.indexOf(oe);N>=0&&(x[N]=null,v[N].disconnect(oe))}for(let O=0;O<P.added.length;O++){const oe=P.added[O];let N=x.indexOf(oe);if(N===-1){for(let J=0;J<v.length;J++)if(J>=x.length){x.push(oe),N=J;break}else if(x[J]===null){x[J]=oe,N=J;break}if(N===-1)break}const de=v[N];de&&de.connect(oe)}}const G=new X,L=new X;function B(P,O,oe){G.setFromMatrixPosition(O.matrixWorld),L.setFromMatrixPosition(oe.matrixWorld);const N=G.distanceTo(L),de=O.projectionMatrix.elements,J=oe.projectionMatrix.elements,me=de[14]/(de[10]-1),xe=de[14]/(de[10]+1),ye=(de[9]+1)/de[5],Pe=(de[9]-1)/de[5],be=(de[8]-1)/de[0],j=(J[8]+1)/J[0],gt=me*be,Se=me*j,Le=N/(-be+j),Ce=Le*-be;O.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Ce),P.translateZ(Le),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const tt=me+Le,Ie=xe+Le,Oe=gt-Ce,qe=Se+(N-Ce),ct=ye*xe/Ie*tt,_t=Pe*xe/Ie*tt;P.projectionMatrix.makePerspective(Oe,qe,ct,_t,tt,Ie),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function V(P,O){O===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(O.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;E.near=S.near=y.near=P.near,E.far=S.far=y.far=P.far,(C!==E.near||M!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,M=E.far);const O=P.parent,oe=E.cameras;V(E,O);for(let N=0;N<oe.length;N++)V(oe[N],O);oe.length===2?B(E,y,S):E.projectionMatrix.copy(y.projectionMatrix),Y(P,E,O)};function Y(P,O,oe){oe===null?P.matrix.copy(O.matrixWorld):(P.matrix.copy(oe.matrixWorld),P.matrix.invert(),P.matrix.multiply(O.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(O.projectionMatrix),P.projectionMatrixInverse.copy(O.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=qa*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(P){l=P,d!==null&&(d.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)};let H=null;function k(P,O){if(c=O.getViewerPose(u||a),_=O,c!==null){const oe=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let N=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,N=!0);for(let de=0;de<oe.length;de++){const J=oe[de];let me=null;if(p!==null)me=p.getViewport(J);else{const ye=f.getViewSubImage(d,J);me=ye.viewport,de===0&&(e.setRenderTargetTextures(h,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(h))}let xe=T[de];xe===void 0&&(xe=new qn,xe.layers.enable(de),xe.viewport=new Gt,T[de]=xe),xe.matrix.fromArray(J.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(J.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(me.x,me.y,me.width,me.height),de===0&&(E.matrix.copy(xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),N===!0&&E.cameras.push(xe)}}for(let oe=0;oe<v.length;oe++){const N=x[oe],de=v[oe];N!==null&&de!==void 0&&de.update(N,O,u||a)}H&&H(P,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),_=null}const I=new yx;I.setAnimationLoop(k),this.setAnimationLoop=function(P){H=P},this.dispose=function(){}}}function bb(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,gx(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),c(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),m(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,v,x):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===xn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===xn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=x*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xn&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function m(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Cb(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",g));const S=x.program;i.updateUBOMapping(v,S);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function c(v){const x=f();v.__bindingPointIndex=x;const y=n.createBuffer(),S=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],y=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,E=y.length;T<E;T++){const C=y[T];if(p(C,T,S)===!0){const M=C.__offset,w=Array.isArray(C.value)?C.value:[C.value];let U=0;for(let z=0;z<w.length;z++){const G=w[z],L=m(G);typeof G=="number"?(C.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,M+U,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=G.elements[0],C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=G.elements[0],C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=G.elements[0]):(G.toArray(C.__data,U),U+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,C.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y){const S=v.value;if(y[x]===void 0){if(typeof S=="number")y[x]=S;else{const T=Array.isArray(S)?S:[S],E=[];for(let C=0;C<T.length;C++)E.push(T[C].clone());y[x]=E}return!0}else if(typeof S=="number"){if(y[x]!==S)return y[x]=S,!0}else{const T=Array.isArray(y[x])?y[x]:[y[x]],E=Array.isArray(S)?S:[S];for(let C=0;C<T.length;C++){const M=T[C];if(M.equals(E[C])===!1)return M.copy(E[C]),!0}}return!1}function _(v){const x=v.uniforms;let y=0;const S=16;let T=0;for(let E=0,C=x.length;E<C;E++){const M=x[E],w={boundary:0,storage:0},U=Array.isArray(M.value)?M.value:[M.value];for(let z=0,G=U.length;z<G;z++){const L=U[z],B=m(L);w.boundary+=B.boundary,w.storage+=B.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,E>0){T=y%S;const z=S-T;T!==0&&z-w.boundary<0&&(y+=S-T,M.__offset=y)}y+=w.storage}return T=y%S,T>0&&(y+=S-T),v.__size=y,v.__cache={},this}function m(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}class wx{constructor(e={}){const{canvas:t=wE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=Rr,this.toneMappingExposure=1;const x=this;let y=!1,S=0,T=0,E=null,C=-1,M=null;const w=new Gt,U=new Gt;let z=null;const G=new Ge(0);let L=0,B=t.width,V=t.height,Y=1,H=null,k=null;const I=new Gt(0,0,B,V),P=new Gt(0,0,B,V);let O=!1;const oe=new xx;let N=!1,de=!1,J=null;const me=new zt,xe=new Ve,ye=new X,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return E===null?Y:1}let j=i;function gt(b,W){for(let $=0;$<b.length;$++){const K=b[$],Z=t.getContext(K,W);if(Z!==null)return Z}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${op}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",fe,!1),j===null){const W=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&W.shift(),j=gt(W,b),j===null)throw gt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Se,Le,Ce,tt,Ie,Oe,qe,ct,_t,R,A,q,se,ne,ae,Me,ue,pe,D,le,te,De,Te,Re;function Ee(){Se=new kA(j),Le=new LA(j,Se,e),Se.init(Le),De=new Mb(j,Se,Le),Ce=new yb(j,Se,Le),tt=new HA(j),Ie=new ob,Oe=new Sb(j,Se,Ce,Ie,Le,De,tt),qe=new NA(x),ct=new FA(x),_t=new KE(j,Le),Te=new RA(j,Se,_t,Le),R=new zA(j,_t,tt,Te),A=new jA(j,R,_t,tt),D=new WA(j,Le,Oe),Me=new DA(Ie),q=new sb(x,qe,ct,Se,Le,Te,Me),se=new bb(x,Ie),ne=new lb,ae=new pb(Se,Le),pe=new CA(x,qe,ct,Ce,A,d,l),ue=new xb(x,A,Le),Re=new Cb(j,tt,Le,Ce),le=new PA(j,Se,tt,Le),te=new BA(j,Se,tt,Le),tt.programs=q.programs,x.capabilities=Le,x.extensions=Se,x.properties=Ie,x.renderLists=ne,x.shadowMap=ue,x.state=Ce,x.info=tt}Ee();const _e=new Ab(x,j);this.xr=_e,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const b=Se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(B,V,!1))},this.getSize=function(b){return b.set(B,V)},this.setSize=function(b,W,$=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,V=W,t.width=Math.floor(b*Y),t.height=Math.floor(W*Y),$===!0&&(t.style.width=b+"px",t.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(B*Y,V*Y).floor()},this.setDrawingBufferSize=function(b,W,$){B=b,V=W,Y=$,t.width=Math.floor(b*$),t.height=Math.floor(W*$),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(I)},this.setViewport=function(b,W,$,K){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,W,$,K),Ce.viewport(w.copy(I).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(P)},this.setScissor=function(b,W,$,K){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,W,$,K),Ce.scissor(U.copy(P).multiplyScalar(Y).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(b){Ce.setScissorTest(O=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){k=b},this.getClearColor=function(b){return b.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(b=!0,W=!0,$=!0){let K=0;if(b){let Z=!1;if(E!==null){const ge=E.texture.format;Z=ge===rx||ge===ix||ge===nx}if(Z){const ge=E.texture.type,we=ge===Pr||ge===pr||ge===ap||ge===us||ge===ex||ge===tx,Ne=pe.getClearColor(),Ue=pe.getClearAlpha(),Be=Ne.r,Fe=Ne.g,ke=Ne.b;we?(p[0]=Be,p[1]=Fe,p[2]=ke,p[3]=Ue,j.clearBufferuiv(j.COLOR,0,p)):(_[0]=Be,_[1]=Fe,_[2]=ke,_[3]=Ue,j.clearBufferiv(j.COLOR,0,_))}else K|=j.COLOR_BUFFER_BIT}W&&(K|=j.DEPTH_BUFFER_BIT),$&&(K|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ne.dispose(),ae.dispose(),Ie.dispose(),qe.dispose(),ct.dispose(),A.dispose(),Te.dispose(),Re.dispose(),q.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Vn),_e.removeEventListener("sessionend",nt),J&&(J.dispose(),J=null),nn.stop()};function je(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=tt.autoReset,W=ue.enabled,$=ue.autoUpdate,K=ue.needsUpdate,Z=ue.type;Ee(),tt.autoReset=b,ue.enabled=W,ue.autoUpdate=$,ue.needsUpdate=K,ue.type=Z}function fe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ie(b){const W=b.target;W.removeEventListener("dispose",ie),Q(W)}function Q(b){ce(b),Ie.remove(b)}function ce(b){const W=Ie.get(b).programs;W!==void 0&&(W.forEach(function($){q.releaseProgram($)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,$,K,Z,ge){W===null&&(W=Pe);const we=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=Ly(b,W,$,K,Z);Ce.setMaterial(K,we);let Ue=$.index,Be=1;if(K.wireframe===!0){if(Ue=R.getWireframeAttribute($),Ue===void 0)return;Be=2}const Fe=$.drawRange,ke=$.attributes.position;let St=Fe.start*Be,An=(Fe.start+Fe.count)*Be;ge!==null&&(St=Math.max(St,ge.start*Be),An=Math.min(An,(ge.start+ge.count)*Be)),Ue!==null?(St=Math.max(St,0),An=Math.min(An,Ue.count)):ke!=null&&(St=Math.max(St,0),An=Math.min(An,ke.count));const Ut=An-St;if(Ut<0||Ut===1/0)return;Te.setup(Z,K,Ne,$,Ue);let Li,vt=le;if(Ue!==null&&(Li=_t.get(Ue),vt=te,vt.setIndex(Li)),Z.isMesh)K.wireframe===!0?(Ce.setLineWidth(K.wireframeLinewidth*be()),vt.setMode(j.LINES)):vt.setMode(j.TRIANGLES);else if(Z.isLine){let Ye=K.linewidth;Ye===void 0&&(Ye=1),Ce.setLineWidth(Ye*be()),Z.isLineSegments?vt.setMode(j.LINES):Z.isLineLoop?vt.setMode(j.LINE_LOOP):vt.setMode(j.LINE_STRIP)}else Z.isPoints?vt.setMode(j.POINTS):Z.isSprite&&vt.setMode(j.TRIANGLES);if(Z.isInstancedMesh)vt.renderInstances(St,Ut,Z.count);else if($.isInstancedBufferGeometry){const Ye=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Dc=Math.min($.instanceCount,Ye);vt.renderInstances(St,Ut,Dc)}else vt.render(St,Ut)};function Ae(b,W,$){b.transparent===!0&&b.side===Vi&&b.forceSinglePass===!1?(b.side=xn,b.needsUpdate=!0,dl(b,W,$),b.side=Ir,b.needsUpdate=!0,dl(b,W,$),b.side=Vi):dl(b,W,$)}this.compile=function(b,W,$=null){$===null&&($=b),g=ae.get($),g.init(),v.push(g),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),b!==$&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights(x._useLegacyLights);const K=new Set;return b.traverse(function(Z){const ge=Z.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const Ne=ge[we];Ae(Ne,$,Z),K.add(Ne)}else Ae(ge,$,Z),K.add(ge)}),v.pop(),g=null,K},this.compileAsync=function(b,W,$=null){const K=this.compile(b,W,$);return new Promise(Z=>{function ge(){if(K.forEach(function(we){Ie.get(we).currentProgram.isReady()&&K.delete(we)}),K.size===0){Z(b);return}setTimeout(ge,10)}Se.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Xe=null;function Tt(b){Xe&&Xe(b)}function Vn(){nn.stop()}function nt(){nn.start()}const nn=new yx;nn.setAnimationLoop(Tt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(b){Xe=b,_e.setAnimationLoop(b),b===null?nn.stop():nn.start()},_e.addEventListener("sessionstart",Vn),_e.addEventListener("sessionend",nt),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(W),W=_e.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,W,E),g=ae.get(b,v.length),g.init(),v.push(g),me.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),oe.setFromProjectionMatrix(me),de=this.localClippingEnabled,N=Me.init(this.clippingPlanes,de),m=ne.get(b,h.length),m.init(),h.push(m),vi(b,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(H,k),this.info.render.frame++,N===!0&&Me.beginShadows();const $=g.state.shadowsArray;if(ue.render($,b,W),N===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(m,b),g.setupLights(x._useLegacyLights),W.isArrayCamera){const K=W.cameras;for(let Z=0,ge=K.length;Z<ge;Z++){const we=K[Z];Lp(m,b,we,we.viewport)}}else Lp(m,b,W);E!==null&&(Oe.updateMultisampleRenderTarget(E),Oe.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(x,b,W),Te.resetDefaultState(),C=-1,M=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,h.pop(),h.length>0?m=h[h.length-1]:m=null};function vi(b,W,$,K){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||oe.intersectsSprite(b)){K&&ye.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const we=A.update(b),Ne=b.material;Ne.visible&&m.push(b,we,Ne,$,ye.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||oe.intersectsObject(b))){const we=A.update(b),Ne=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ye.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ye.copy(we.boundingSphere.center)),ye.applyMatrix4(b.matrixWorld).applyMatrix4(me)),Array.isArray(Ne)){const Ue=we.groups;for(let Be=0,Fe=Ue.length;Be<Fe;Be++){const ke=Ue[Be],St=Ne[ke.materialIndex];St&&St.visible&&m.push(b,we,St,$,ye.z,ke)}}else Ne.visible&&m.push(b,we,Ne,$,ye.z,null)}}const ge=b.children;for(let we=0,Ne=ge.length;we<Ne;we++)vi(ge[we],W,$,K)}function Lp(b,W,$,K){const Z=b.opaque,ge=b.transmissive,we=b.transparent;g.setupLightsView($),N===!0&&Me.setGlobalState(x.clippingPlanes,$),ge.length>0&&Py(Z,ge,W,$),K&&Ce.viewport(w.copy(K)),Z.length>0&&fl(Z,W,$),ge.length>0&&fl(ge,W,$),we.length>0&&fl(we,W,$),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Py(b,W,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const ge=Le.isWebGL2;J===null&&(J=new Ms(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Ya:Pr,minFilter:Xa,samples:ge?4:0})),x.getDrawingBufferSize(xe),ge?J.setSize(xe.x,xe.y):J.setSize(Ku(xe.x),Ku(xe.y));const we=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor(G),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ne=x.toneMapping;x.toneMapping=Rr,fl(b,$,K),Oe.updateMultisampleRenderTarget(J),Oe.updateRenderTargetMipmap(J);let Ue=!1;for(let Be=0,Fe=W.length;Be<Fe;Be++){const ke=W[Be],St=ke.object,An=ke.geometry,Ut=ke.material,Li=ke.group;if(Ut.side===Vi&&St.layers.test(K.layers)){const vt=Ut.side;Ut.side=xn,Ut.needsUpdate=!0,Dp(St,$,K,An,Ut,Li),Ut.side=vt,Ut.needsUpdate=!0,Ue=!0}}Ue===!0&&(Oe.updateMultisampleRenderTarget(J),Oe.updateRenderTargetMipmap(J)),x.setRenderTarget(we),x.setClearColor(G,L),x.toneMapping=Ne}function fl(b,W,$){const K=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,ge=b.length;Z<ge;Z++){const we=b[Z],Ne=we.object,Ue=we.geometry,Be=K===null?we.material:K,Fe=we.group;Ne.layers.test($.layers)&&Dp(Ne,W,$,Ue,Be,Fe)}}function Dp(b,W,$,K,Z,ge){b.onBeforeRender(x,W,$,K,Z,ge),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(x,W,$,K,b,ge),Z.transparent===!0&&Z.side===Vi&&Z.forceSinglePass===!1?(Z.side=xn,Z.needsUpdate=!0,x.renderBufferDirect($,W,K,Z,b,ge),Z.side=Ir,Z.needsUpdate=!0,x.renderBufferDirect($,W,K,Z,b,ge),Z.side=Vi):x.renderBufferDirect($,W,K,Z,b,ge),b.onAfterRender(x,W,$,K,Z,ge)}function dl(b,W,$){W.isScene!==!0&&(W=Pe);const K=Ie.get(b),Z=g.state.lights,ge=g.state.shadowsArray,we=Z.state.version,Ne=q.getParameters(b,Z.state,ge,W,$),Ue=q.getProgramCacheKey(Ne);let Be=K.programs;K.environment=b.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(b.isMeshStandardMaterial?ct:qe).get(b.envMap||K.environment),Be===void 0&&(b.addEventListener("dispose",ie),Be=new Map,K.programs=Be);let Fe=Be.get(Ue);if(Fe!==void 0){if(K.currentProgram===Fe&&K.lightsStateVersion===we)return Up(b,Ne),Fe}else Ne.uniforms=q.getUniforms(b),b.onBuild($,Ne,x),b.onBeforeCompile(Ne,x),Fe=q.acquireProgram(Ne,Ue),Be.set(Ue,Fe),K.uniforms=Ne.uniforms;const ke=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=Me.uniform),Up(b,Ne),K.needsLights=Ny(b),K.lightsStateVersion=we,K.needsLights&&(ke.ambientLightColor.value=Z.state.ambient,ke.lightProbe.value=Z.state.probe,ke.directionalLights.value=Z.state.directional,ke.directionalLightShadows.value=Z.state.directionalShadow,ke.spotLights.value=Z.state.spot,ke.spotLightShadows.value=Z.state.spotShadow,ke.rectAreaLights.value=Z.state.rectArea,ke.ltc_1.value=Z.state.rectAreaLTC1,ke.ltc_2.value=Z.state.rectAreaLTC2,ke.pointLights.value=Z.state.point,ke.pointLightShadows.value=Z.state.pointShadow,ke.hemisphereLights.value=Z.state.hemi,ke.directionalShadowMap.value=Z.state.directionalShadowMap,ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ke.spotShadowMap.value=Z.state.spotShadowMap,ke.spotLightMatrix.value=Z.state.spotLightMatrix,ke.spotLightMap.value=Z.state.spotLightMap,ke.pointShadowMap.value=Z.state.pointShadowMap,ke.pointShadowMatrix.value=Z.state.pointShadowMatrix),K.currentProgram=Fe,K.uniformsList=null,Fe}function Np(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=_u.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Up(b,W){const $=Ie.get(b);$.outputColorSpace=W.outputColorSpace,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function Ly(b,W,$,K,Z){W.isScene!==!0&&(W=Pe),Oe.resetTextureUnits();const ge=W.fog,we=K.isMeshStandardMaterial?W.environment:null,Ne=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Zi,Ue=(K.isMeshStandardMaterial?ct:qe).get(K.envMap||we),Be=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Fe=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ke=!!$.morphAttributes.position,St=!!$.morphAttributes.normal,An=!!$.morphAttributes.color;let Ut=Rr;K.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ut=x.toneMapping);const Li=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,vt=Li!==void 0?Li.length:0,Ye=Ie.get(K),Dc=g.state.lights;if(N===!0&&(de===!0||b!==M)){const bn=b===M&&K.id===C;Me.setState(K,b,bn)}let wt=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Dc.state.version||Ye.outputColorSpace!==Ne||Z.isInstancedMesh&&Ye.instancing===!1||!Z.isInstancedMesh&&Ye.instancing===!0||Z.isSkinnedMesh&&Ye.skinning===!1||!Z.isSkinnedMesh&&Ye.skinning===!0||Z.isInstancedMesh&&Ye.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ye.instancingColor===!1&&Z.instanceColor!==null||Ye.envMap!==Ue||K.fog===!0&&Ye.fog!==ge||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==Be||Ye.vertexTangents!==Fe||Ye.morphTargets!==ke||Ye.morphNormals!==St||Ye.morphColors!==An||Ye.toneMapping!==Ut||Le.isWebGL2===!0&&Ye.morphTargetsCount!==vt)&&(wt=!0):(wt=!0,Ye.__version=K.version);let Vr=Ye.currentProgram;wt===!0&&(Vr=dl(K,W,Z));let Ip=!1,jo=!1,Nc=!1;const rn=Vr.getUniforms(),Gr=Ye.uniforms;if(Ce.useProgram(Vr.program)&&(Ip=!0,jo=!0,Nc=!0),K.id!==C&&(C=K.id,jo=!0),Ip||M!==b){rn.setValue(j,"projectionMatrix",b.projectionMatrix),rn.setValue(j,"viewMatrix",b.matrixWorldInverse);const bn=rn.map.cameraPosition;bn!==void 0&&bn.setValue(j,ye.setFromMatrixPosition(b.matrixWorld)),Le.logarithmicDepthBuffer&&rn.setValue(j,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&rn.setValue(j,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,jo=!0,Nc=!0)}if(Z.isSkinnedMesh){rn.setOptional(j,Z,"bindMatrix"),rn.setOptional(j,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(Le.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),rn.setValue(j,"boneTexture",bn.boneTexture,Oe),rn.setValue(j,"boneTextureSize",bn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Uc=$.morphAttributes;if((Uc.position!==void 0||Uc.normal!==void 0||Uc.color!==void 0&&Le.isWebGL2===!0)&&D.update(Z,$,Vr),(jo||Ye.receiveShadow!==Z.receiveShadow)&&(Ye.receiveShadow=Z.receiveShadow,rn.setValue(j,"receiveShadow",Z.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Gr.envMap.value=Ue,Gr.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),jo&&(rn.setValue(j,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&Dy(Gr,Nc),ge&&K.fog===!0&&se.refreshFogUniforms(Gr,ge),se.refreshMaterialUniforms(Gr,K,Y,V,J),_u.upload(j,Np(Ye),Gr,Oe)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(_u.upload(j,Np(Ye),Gr,Oe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&rn.setValue(j,"center",Z.center),rn.setValue(j,"modelViewMatrix",Z.modelViewMatrix),rn.setValue(j,"normalMatrix",Z.normalMatrix),rn.setValue(j,"modelMatrix",Z.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const bn=K.uniformsGroups;for(let Ic=0,Uy=bn.length;Ic<Uy;Ic++)if(Le.isWebGL2){const Op=bn[Ic];Re.update(Op,Vr),Re.bind(Op,Vr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vr}function Dy(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Ny(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,W,$){Ie.get(b.texture).__webglTexture=W,Ie.get(b.depthTexture).__webglTexture=$;const K=Ie.get(b);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,W){const $=Ie.get(b);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,$=0){E=b,S=W,T=$;let K=!0,Z=null,ge=!1,we=!1;if(b){const Ue=Ie.get(b);Ue.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(j.FRAMEBUFFER,null),K=!1):Ue.__webglFramebuffer===void 0?Oe.setupRenderTarget(b):Ue.__hasExternalTextures&&Oe.rebindTextures(b,Ie.get(b.texture).__webglTexture,Ie.get(b.depthTexture).__webglTexture);const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);const Fe=Ie.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[W])?Z=Fe[W][$]:Z=Fe[W],ge=!0):Le.isWebGL2&&b.samples>0&&Oe.useMultisampledRTT(b)===!1?Z=Ie.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?Z=Fe[$]:Z=Fe,w.copy(b.viewport),U.copy(b.scissor),z=b.scissorTest}else w.copy(I).multiplyScalar(Y).floor(),U.copy(P).multiplyScalar(Y).floor(),z=O;if(Ce.bindFramebuffer(j.FRAMEBUFFER,Z)&&Le.drawBuffers&&K&&Ce.drawBuffers(b,Z),Ce.viewport(w),Ce.scissor(U),Ce.setScissorTest(z),ge){const Ue=Ie.get(b.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ue.__webglTexture,$)}else if(we){const Ue=Ie.get(b.texture),Be=W||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ue.__webglTexture,$||0,Be)}C=-1},this.readRenderTargetPixels=function(b,W,$,K,Z,ge,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Ne=Ne[we]),Ne){Ce.bindFramebuffer(j.FRAMEBUFFER,Ne);try{const Ue=b.texture,Be=Ue.format,Fe=Ue.type;if(Be!==di&&De.convert(Be)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===Ya&&(Se.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Fe!==Pr&&De.convert(Fe)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===mr&&(Le.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-K&&$>=0&&$<=b.height-Z&&j.readPixels(W,$,K,Z,De.convert(Be),De.convert(Fe),ge)}finally{const Ue=E!==null?Ie.get(E).__webglFramebuffer:null;Ce.bindFramebuffer(j.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(b,W,$=0){const K=Math.pow(2,-$),Z=Math.floor(W.image.width*K),ge=Math.floor(W.image.height*K);Oe.setTexture2D(W,0),j.copyTexSubImage2D(j.TEXTURE_2D,$,0,0,b.x,b.y,Z,ge),Ce.unbindTexture()},this.copyTextureToTexture=function(b,W,$,K=0){const Z=W.image.width,ge=W.image.height,we=De.convert($.format),Ne=De.convert($.type);Oe.setTexture2D($,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment),W.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,K,b.x,b.y,Z,ge,we,Ne,W.image.data):W.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,K,b.x,b.y,W.mipmaps[0].width,W.mipmaps[0].height,we,W.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,K,b.x,b.y,we,Ne,W.image),K===0&&$.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(b,W,$,K,Z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=b.max.x-b.min.x+1,we=b.max.y-b.min.y+1,Ne=b.max.z-b.min.z+1,Ue=De.convert(K.format),Be=De.convert(K.type);let Fe;if(K.isData3DTexture)Oe.setTexture3D(K,0),Fe=j.TEXTURE_3D;else if(K.isDataArrayTexture)Oe.setTexture2DArray(K,0),Fe=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,K.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,K.unpackAlignment);const ke=j.getParameter(j.UNPACK_ROW_LENGTH),St=j.getParameter(j.UNPACK_IMAGE_HEIGHT),An=j.getParameter(j.UNPACK_SKIP_PIXELS),Ut=j.getParameter(j.UNPACK_SKIP_ROWS),Li=j.getParameter(j.UNPACK_SKIP_IMAGES),vt=$.isCompressedTexture?$.mipmaps[0]:$.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,vt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,vt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,b.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,b.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,b.min.z),$.isDataTexture||$.isData3DTexture?j.texSubImage3D(Fe,Z,W.x,W.y,W.z,ge,we,Ne,Ue,Be,vt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Fe,Z,W.x,W.y,W.z,ge,we,Ne,Ue,vt.data)):j.texSubImage3D(Fe,Z,W.x,W.y,W.z,ge,we,Ne,Ue,Be,vt),j.pixelStorei(j.UNPACK_ROW_LENGTH,ke),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,St),j.pixelStorei(j.UNPACK_SKIP_PIXELS,An),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ut),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Li),Z===0&&K.generateMipmaps&&j.generateMipmap(Fe),Ce.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Oe.setTextureCube(b,0):b.isData3DTexture?Oe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Oe.setTexture2DArray(b,0):Oe.setTexture2D(b,0),Ce.unbindTexture()},this.resetState=function(){S=0,T=0,E=null,Ce.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===lp?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Tc?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?fs:sx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fs?Vt:Zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Rb extends wx{}Rb.prototype.isWebGL1Renderer=!0;class Pb extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ax extends ll{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const f_=new zt,$d=new cp,eu=new wc,tu=new X;class Kd extends yn{constructor(e=new gi,t=new Ax){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eu.copy(i.boundingSphere),eu.applyMatrix4(r),eu.radius+=s,e.ray.intersectsSphere(eu)===!1)return;f_.copy(r).invert(),$d.copy(e.ray).applyMatrix4(f_);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,m=p;_<m;_++){const g=u.getX(_);tu.fromBufferAttribute(f,g),d_(tu,g,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,m=p;_<m;_++)tu.fromBufferAttribute(f,_),d_(tu,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function d_(n,e,t,i,r,s,a){const o=$d.distanceSqToPoint(n);if(o<t){const l=new X;$d.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Lb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=h_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=h_();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function h_(){return(typeof performance>"u"?Date:performance).now()}class p_{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);const m_={type:"change"},kf={type:"start"},g_={type:"end"},nu=new cp,__=new ur,Db=Math.cos(70*ox.DEG2RAD);class Nb extends Cs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:Ds.ROTATE,TWO:Ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",A),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(m_),i.update(),s=r.NONE},this.update=function(){const D=new X,le=new Es().setFromUnitVectors(e.up,new X(0,1,0)),te=le.clone().invert(),De=new X,Te=new Es,Re=new X,Ee=2*Math.PI;return function(je=null){const F=i.object.position;D.copy(F).sub(i.target),D.applyQuaternion(le),o.setFromVector3(D),i.autoRotate&&s===r.NONE&&U(M(je)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let fe=i.minAzimuthAngle,ie=i.maxAzimuthAngle;isFinite(fe)&&isFinite(ie)&&(fe<-Math.PI?fe+=Ee:fe>Math.PI&&(fe-=Ee),ie<-Math.PI?ie+=Ee:ie>Math.PI&&(ie-=Ee),fe<=ie?o.theta=Math.max(fe,Math.min(ie,o.theta)):o.theta=o.theta>(fe+ie)/2?Math.max(fe,o.theta):Math.min(ie,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?o.radius=k(o.radius):o.radius=k(o.radius*u),D.setFromSpherical(o),D.applyQuaternion(te),F.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let Q=!1;if(i.zoomToCursor&&T){let ce=null;if(i.object.isPerspectiveCamera){const Ae=D.length();ce=k(Ae*u);const Xe=Ae-ce;i.object.position.addScaledVector(y,Xe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ae=new X(S.x,S.y,0);Ae.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Q=!0;const Xe=new X(S.x,S.y,0);Xe.unproject(i.object),i.object.position.sub(Xe).add(Ae),i.object.updateMatrixWorld(),ce=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ce!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ce).add(i.object.position):(nu.origin.copy(i.object.position),nu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(nu.direction))<Db?e.lookAt(i.target):(__.setFromNormalAndCoplanarPoint(i.object.up,i.target),nu.intersectPlane(__,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Q=!0);return u=1,T=!1,Q||De.distanceToSquared(i.object.position)>a||8*(1-Te.dot(i.object.quaternion))>a||Re.distanceToSquared(i.target)>0?(i.dispatchEvent(m_),De.copy(i.object.position),Te.copy(i.object.quaternion),Re.copy(i.target),Q=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ne),i.domElement.removeEventListener("pointerdown",Ie),i.domElement.removeEventListener("pointercancel",qe),i.domElement.removeEventListener("wheel",R),i.domElement.removeEventListener("pointermove",Oe),i.domElement.removeEventListener("pointerup",qe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",A),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new p_,l=new p_;let u=1;const c=new X,f=new Ve,d=new Ve,p=new Ve,_=new Ve,m=new Ve,g=new Ve,h=new Ve,v=new Ve,x=new Ve,y=new X,S=new Ve;let T=!1;const E=[],C={};function M(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function U(D){l.theta-=D}function z(D){l.phi-=D}const G=function(){const D=new X;return function(te,De){D.setFromMatrixColumn(De,0),D.multiplyScalar(-te),c.add(D)}}(),L=function(){const D=new X;return function(te,De){i.screenSpacePanning===!0?D.setFromMatrixColumn(De,1):(D.setFromMatrixColumn(De,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(te),c.add(D)}}(),B=function(){const D=new X;return function(te,De){const Te=i.domElement;if(i.object.isPerspectiveCamera){const Re=i.object.position;D.copy(Re).sub(i.target);let Ee=D.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),G(2*te*Ee/Te.clientHeight,i.object.matrix),L(2*De*Ee/Te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(G(te*(i.object.right-i.object.left)/i.object.zoom/Te.clientWidth,i.object.matrix),L(De*(i.object.top-i.object.bottom)/i.object.zoom/Te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(D){if(!i.zoomToCursor)return;T=!0;const le=i.domElement.getBoundingClientRect(),te=D.clientX-le.left,De=D.clientY-le.top,Te=le.width,Re=le.height;S.x=te/Te*2-1,S.y=-(De/Re)*2+1,y.set(S.x,S.y,1).unproject(i.object).sub(i.object.position).normalize()}function k(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function I(D){f.set(D.clientX,D.clientY)}function P(D){H(D),h.set(D.clientX,D.clientY)}function O(D){_.set(D.clientX,D.clientY)}function oe(D){d.set(D.clientX,D.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const le=i.domElement;U(2*Math.PI*p.x/le.clientHeight),z(2*Math.PI*p.y/le.clientHeight),f.copy(d),i.update()}function N(D){v.set(D.clientX,D.clientY),x.subVectors(v,h),x.y>0?V(w()):x.y<0&&Y(w()),h.copy(v),i.update()}function de(D){m.set(D.clientX,D.clientY),g.subVectors(m,_).multiplyScalar(i.panSpeed),B(g.x,g.y),_.copy(m),i.update()}function J(D){H(D),D.deltaY<0?Y(w()):D.deltaY>0&&V(w()),i.update()}function me(D){let le=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),le=!0;break}le&&(D.preventDefault(),i.update())}function xe(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const D=.5*(E[0].pageX+E[1].pageX),le=.5*(E[0].pageY+E[1].pageY);f.set(D,le)}}function ye(){if(E.length===1)_.set(E[0].pageX,E[0].pageY);else{const D=.5*(E[0].pageX+E[1].pageX),le=.5*(E[0].pageY+E[1].pageY);_.set(D,le)}}function Pe(){const D=E[0].pageX-E[1].pageX,le=E[0].pageY-E[1].pageY,te=Math.sqrt(D*D+le*le);h.set(0,te)}function be(){i.enableZoom&&Pe(),i.enablePan&&ye()}function j(){i.enableZoom&&Pe(),i.enableRotate&&xe()}function gt(D){if(E.length==1)d.set(D.pageX,D.pageY);else{const te=pe(D),De=.5*(D.pageX+te.x),Te=.5*(D.pageY+te.y);d.set(De,Te)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const le=i.domElement;U(2*Math.PI*p.x/le.clientHeight),z(2*Math.PI*p.y/le.clientHeight),f.copy(d)}function Se(D){if(E.length===1)m.set(D.pageX,D.pageY);else{const le=pe(D),te=.5*(D.pageX+le.x),De=.5*(D.pageY+le.y);m.set(te,De)}g.subVectors(m,_).multiplyScalar(i.panSpeed),B(g.x,g.y),_.copy(m)}function Le(D){const le=pe(D),te=D.pageX-le.x,De=D.pageY-le.y,Te=Math.sqrt(te*te+De*De);v.set(0,Te),x.set(0,Math.pow(v.y/h.y,i.zoomSpeed)),V(x.y),h.copy(v)}function Ce(D){i.enableZoom&&Le(D),i.enablePan&&Se(D)}function tt(D){i.enableZoom&&Le(D),i.enableRotate&&gt(D)}function Ie(D){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",Oe),i.domElement.addEventListener("pointerup",qe)),ae(D),D.pointerType==="touch"?q(D):ct(D))}function Oe(D){i.enabled!==!1&&(D.pointerType==="touch"?se(D):_t(D))}function qe(D){Me(D),E.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",Oe),i.domElement.removeEventListener("pointerup",qe)),i.dispatchEvent(g_),s=r.NONE}function ct(D){let le;switch(D.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Ls.DOLLY:if(i.enableZoom===!1)return;P(D),s=r.DOLLY;break;case Ls.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;O(D),s=r.PAN}else{if(i.enableRotate===!1)return;I(D),s=r.ROTATE}break;case Ls.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;I(D),s=r.ROTATE}else{if(i.enablePan===!1)return;O(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(kf)}function _t(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;oe(D);break;case r.DOLLY:if(i.enableZoom===!1)return;N(D);break;case r.PAN:if(i.enablePan===!1)return;de(D);break}}function R(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(kf),J(D),i.dispatchEvent(g_))}function A(D){i.enabled===!1||i.enablePan===!1||me(D)}function q(D){switch(ue(D),E.length){case 1:switch(i.touches.ONE){case Ds.ROTATE:if(i.enableRotate===!1)return;xe(),s=r.TOUCH_ROTATE;break;case Ds.PAN:if(i.enablePan===!1)return;ye(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ds.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;be(),s=r.TOUCH_DOLLY_PAN;break;case Ds.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;j(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(kf)}function se(D){switch(ue(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;gt(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Se(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;tt(D),i.update();break;default:s=r.NONE}}function ne(D){i.enabled!==!1&&D.preventDefault()}function ae(D){E.push(D)}function Me(D){delete C[D.pointerId];for(let le=0;le<E.length;le++)if(E[le].pointerId==D.pointerId){E.splice(le,1);return}}function ue(D){let le=C[D.pointerId];le===void 0&&(le=new Ve,C[D.pointerId]=le),le.set(D.pageX,D.pageY)}function pe(D){const le=D.pointerId===E[0].pointerId?E[1]:E[0];return C[le.pointerId]}i.domElement.addEventListener("contextmenu",ne),i.domElement.addEventListener("pointerdown",Ie),i.domElement.addEventListener("pointercancel",qe),i.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}const Ta=()=>{const n=window.innerWidth<768,e=Math.min(window.devicePixelRatio,2);return{isMobile:n,pixelRatio:e,aspectRatio:window.innerWidth/window.innerHeight,width:window.innerWidth,height:window.innerHeight}},Ub=()=>{const{isMobile:n}=Ta();return{starCount:n?3e4:5e4,galaxyRadius:n?80:100,arms:n?4:5,spin:1.5,randomness:n?.15:.2,randomnessPower:3,insideColor:new Ge("#ff3080").multiplyScalar(n?1.5:1),outsideColor:new Ge("#4560ff").multiplyScalar(n?1.5:1),particleSize:n?.15:.125,cameraDistance:n?300:400,nebulaCount:n?3:5,nebulaParticleCount:n?2e3:3e3,starFieldCount:n?7e3:1e4}},Ib=`
attribute float size;
varying vec3 vColor;

void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}`,Ob=`
varying vec3 vColor;

void main() {
    vec2 xy = gl_PointCoord.xy - vec2(0.5);
    float r = length(xy);
    float alpha = 1.0 - smoothstep(0.0, 0.5, r);
    float intensity = 1.0 - (r * 2.0);
    vec3 glow = vColor * intensity;
    gl_FragColor = vec4(glow, alpha);
    if (alpha < 0.01) discard;
}`;class Fb{constructor(e=1e4){hl(this,"geometry");hl(this,"material",new Ri);hl(this,"points");this.geometry=new gi,this.createStarField(e)}createStarField(e){const{isMobile:t}=Ta(),i=new Float32Array(e*3),r=new Float32Array(e*3),s=new Float32Array(e);for(let a=0;a<e;a++){const o=a*3,l=Math.random()*(t?300:400),u=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1);i[o]=l*Math.sin(c)*Math.cos(u),i[o+1]=l*Math.sin(c)*Math.sin(u),i[o+2]=l*Math.cos(c);const f=new Ge;f.setHSL(.5+Math.random()*.1,.3+Math.random()*.3,.8+Math.random()*.2),r[o]=f.r,r[o+1]=f.g,r[o+2]=f.b,s[a]=Math.random()*(t?3:2)+(t?1:.5)}this.geometry.setAttribute("position",new Pt(i,3)),this.geometry.setAttribute("color",new Pt(r,3)),this.geometry.setAttribute("size",new Pt(s,1)),this.material=new Ri({vertexShader:Ib,fragmentShader:Ob,transparent:!0,vertexColors:!0,blending:ja,depthWrite:!1,depthTest:!0}),this.points=new Kd(this.geometry,this.material)}getPoints(){return this.points}dispose(){this.geometry.dispose(),this.material.dispose()}update(e){this.points.rotation.y=e*.02}}function zi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function bx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Io={duration:.5,overwrite:!1,delay:0},hp,Jt,ut,Zn=1e8,it=1/Zn,Zd=Math.PI*2,kb=Zd/4,zb=0,Cx=Math.sqrt,Bb=Math.cos,Hb=Math.sin,Bt=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},Qi=function(e){return typeof e=="number"},pp=function(e){return typeof e>"u"},Pi=function(e){return typeof e=="object"},Sn=function(e){return e!==!1},mp=function(){return typeof window<"u"},iu=function(e){return yt(e)||Bt(e)},Rx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},en=Array.isArray,Qd=/(?:-?\.?\d|\.)+/gi,Px=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,co=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lx=/[+-]=-?[.\d]+/,Dx=/[^,'"\[\]\s]+/gi,Vb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dt,Si,Jd,gp,zn={},Qu={},Nx,Ux=function(e){return(Qu=Ts(e,zn))&&wn},_p=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$a=function(e,t){return!t&&console.warn(e)},Ix=function(e,t){return e&&(zn[e]=t)&&Qu&&(Qu[e]=t)||zn},Ka=function(){return 0},Gb={suppressEvents:!0,isStart:!0,kill:!1},vu={suppressEvents:!0,kill:!1},Wb={suppressEvents:!0},vp={},Lr=[],eh={},Ox,Ln={},Bf={},v_=30,xu=[],xp="",yp=function(e){var t=e[0],i,r;if(Pi(t)||yt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=xu.length;r--&&!xu[r].targetTest(t););i=xu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new oy(e[r],i)))||e.splice(r,1);return e},hs=function(e){return e._gsap||yp(Qn(e))[0]._gsap},Fx=function(e,t,i){return(i=e[t])&&yt(i)?e[t]():pp(i)&&e.getAttribute&&e.getAttribute(t)||i},Mn=function(e,t){return(e=e.split(",")).forEach(t)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},So=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},jb=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Ju=function(){var e=Lr.length,t=Lr.slice(0),i,r;for(eh={},Lr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},kx=function(e,t,i,r){Lr.length&&!Jt&&Ju(),e.render(t,i,Jt&&t<0&&(e._initted||e._startAt)),Lr.length&&!Jt&&Ju()},zx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Dx).length<2?t:Bt(e)?e.trim():e},Bx=function(e){return e},ni=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Xb=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ts=function(e,t){for(var i in t)e[i]=t[i];return e},x_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Pi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ec=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},wa=function(e){var t=e.parent||dt,i=e.keyframes?Xb(en(e.keyframes)):ni;if(Sn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Yb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Hx=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Cc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},qb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},th=function(e,t,i,r){return e._startAt&&(Jt?e._startAt.revert(vu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},$b=function n(e){return!e||e._ts&&n(e.parent)},y_=function(e){return e._repeat?Oo(e._tTime,e=e.duration()+e._rDelay)*e:0},Oo=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},tc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Rc=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},Pc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ft(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Rc(e),i._dirty||ps(i,e)),e},Vx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=tc(e.rawTime(),t),(!t._dur||cl(0,t.totalDuration(),i)-t._tTime>it)&&t.render(i,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-it}},Ti=function(e,t,i,r){return t.parent&&Or(t),t._start=Ft((Qi(i)?i:i||e!==dt?Wn(e,i,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hx(e,t,"_first","_last",e._sort?"_start":0),nh(t)||(e._recent=t),r||Vx(e,t),e._ts<0&&Pc(e,e._tTime),e},Gx=function(e,t){return(zn.ScrollTrigger||_p("scrollTrigger",t))&&zn.ScrollTrigger.create(t,e)},Wx=function(e,t,i,r,s){if(Mp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ox!==Dn.frame)return Lr.push(e),e._lazy=[s,r],1},Kb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},nh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Zb=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&Kb(e)&&!(!e._initted&&nh(e))||(e._ts<0||e._dp._ts<0)&&!nh(e))?0:1,o=e._rDelay,l=0,u,c,f;if(o&&e._repeat&&(l=cl(0,e._tDur,t),c=Oo(l,o),e._yoyo&&c&1&&(a=1-a),c!==Oo(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Jt||r||e._zTime===it||!t&&e._zTime){if(!e._initted&&Wx(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?it:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&th(e,t,i,!0),e._onUpdate&&!i&&Un(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Or(e,1),!i&&!Jt&&(Un(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Qb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Fo=function(e,t,i,r){var s=e._repeat,a=Ft(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ft(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Pc(e,e._tTime=e._tDur*o),e.parent&&Rc(e),i||ps(e.parent,e),e},S_=function(e){return e instanceof un?ps(e):Fo(e,e._dur)},Jb={_start:0,endTime:Ka,totalDuration:Ka},Wn=function n(e,t,i){var r=e.labels,s=e._recent||Jb,a=e.duration()>=Zn?s.endTime(!1):e._dur,o,l,u;return Bt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&i&&(l=l/100*(en(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Aa=function(e,t,i){var r=Qi(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Sn(l.vars.inherit)&&l.parent;a.immediateRender=Sn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new bt(t[0],a,t[s+1])},Hr=function(e,t){return e||e===0?t(e):t},cl=function(e,t,i){return i<e?e:i>t?t:i},Qt=function(e,t){return!Bt(e)||!(t=Vb.exec(e))?"":t[1]},eC=function(e,t,i){return Hr(i,function(r){return cl(e,t,r)})},ih=[].slice,jx=function(e,t){return e&&Pi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pi(e[0]))&&!e.nodeType&&e!==Si},tC=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Bt(r)&&!t||jx(r,1)?(s=i).push.apply(s,Qn(r)):i.push(r)})||i},Qn=function(e,t,i){return ut&&!t&&ut.selector?ut.selector(e):Bt(e)&&!i&&(Jd||!ko())?ih.call((t||gp).querySelectorAll(e),0):en(e)?tC(e,i):jx(e)?ih.call(e,0):e?[e]:[]},rh=function(e){return e=Qn(e)[0]||$a("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Qn(t,i.querySelectorAll?i:i===e?$a("Invalid scope")||gp.createElement("div"):e)}},Xx=function(e){return e.sort(function(){return .5-Math.random()})},Yx=function(e){if(yt(e))return e;var t=Pi(e)?e:{each:e},i=ms(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,u=t.axis,c=r,f=r;return Bt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(c=r[0],f=r[1]),function(d,p,_){var m=(_||t).length,g=a[m],h,v,x,y,S,T,E,C,M;if(!g){if(M=t.grid==="auto"?0:(t.grid||[1,Zn])[1],!M){for(E=-Zn;E<(E=_[M++].getBoundingClientRect().left)&&M<m;);M<m&&M--}for(g=a[m]=[],h=l?Math.min(M,m)*c-.5:r%M,v=M===Zn?0:l?m*f/M-.5:r/M|0,E=0,C=Zn,T=0;T<m;T++)x=T%M-h,y=v-(T/M|0),g[T]=S=u?Math.abs(u==="y"?y:x):Cx(x*x+y*y),S>E&&(E=S),S<C&&(C=S);r==="random"&&Xx(g),g.max=E-C,g.min=C,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(M>m?m-1:u?u==="y"?m/M:M:Math.max(M,m/M))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=Qt(t.amount||t.each)||0,i=i&&m<0?iy(i):i}return m=(g[d]-g.min)/g.max||0,Ft(g.b+(i?i(m):m)*g.v)+g.u}},sh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ft(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Qi(i)?0:Qt(i))}},qx=function(e,t){var i=en(e),r,s;return!i&&Pi(e)&&(r=i=e.radius||Zn,e.values?(e=Qn(e.values),(s=!Qi(e[0]))&&(r*=r)):e=sh(e.increment)),Hr(t,i?yt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=Zn,c=0,f=e.length,d,p;f--;)s?(d=e[f].x-o,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-o),d<u&&(u=d,c=f);return c=!r||u<=r?e[c]:a,s||c===a||Qi(a)?c:c+Qt(a)}:sh(e))},$x=function(e,t,i,r){return Hr(en(e)?!t:i===!0?!!(i=0):!r,function(){return en(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},nC=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},iC=function(e,t){return function(i){return e(parseFloat(i))+(t||Qt(i))}},rC=function(e,t,i){return Zx(e,t,0,1,i)},Kx=function(e,t,i){return Hr(i,function(r){return e[~~t(r)]})},sC=function n(e,t,i){var r=t-e;return en(e)?Kx(e,n(0,e.length),t):Hr(i,function(s){return(r+(s-e)%r)%r+e})},oC=function n(e,t,i){var r=t-e,s=r*2;return en(e)?Kx(e,n(0,e.length-1),t):Hr(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Za=function(e){for(var t=0,i="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?Dx:Qd),i+=e.substr(t,r-t)+$x(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},Zx=function(e,t,i,r,s){var a=t-e,o=r-i;return Hr(s,function(l){return i+((l-e)/a*o||0)})},aC=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Bt(e),o={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(en(e)&&!en(t)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(_){_*=f;var m=Math.min(d,~~_);return c[m](_-m)},i=t}else r||(e=Ts(en(e)?[]:{},e));if(!c){for(l in t)Sp.call(o,e,l,"get",t[l]);s=function(_){return wp(_,o)||(a?e.p:e)}}}return Hr(i,s)},M_=function(e,t,i){var r=e.labels,s=Zn,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Un=function(e,t,i){var r=e.vars,s=r[t],a=ut,o=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Lr.length&&Ju(),o&&(ut=o),c=l?s.apply(u,l):s.call(u),ut=a,c},ca=function(e){return Or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Jt),e.progress()<1&&Un(e,"onInterrupt"),e},fo,Qx=[],Jx=function(e){if(e)if(e=!e.name&&e.default||e,mp()||e.headless){var t=e.name,i=yt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ka,render:wp,add:Sp,kill:EC,modifier:MC,rawVars:0},a={targetTest:0,get:0,getSetter:Tp,aliases:{},register:0};if(ko(),e!==r){if(Ln[t])return;ni(r,ni(ec(e,s),a)),Ts(r.prototype,Ts(s,ec(e,a))),Ln[r.prop=t]=r,e.targetTest&&(xu.push(r),vp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ix(t,r),e.register&&e.register(wn,r,En)}else Qx.push(e)},et=255,fa={aqua:[0,et,et],lime:[0,et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,et],navy:[0,0,128],white:[et,et,et],olive:[128,128,0],yellow:[et,et,0],orange:[et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[et,0,0],pink:[et,192,203],cyan:[0,et,et],transparent:[et,et,et,0]},Hf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*et+.5|0},ey=function(e,t,i){var r=e?Qi(e)?[e>>16,e>>8&et,e&et]:0:fa.black,s,a,o,l,u,c,f,d,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fa[e])r=fa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&et,r&et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&et,e&et]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Qd),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,r.length>3&&(r[3]*=1),r[0]=Hf(l+1/3,s,a),r[1]=Hf(l,s,a),r[2]=Hf(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Px),i&&r.length<4&&(r[3]=1),r}else r=e.match(Qd)||fa.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/et,a=r[1]/et,o=r[2]/et,f=Math.max(s,a,o),d=Math.min(s,a,o),c=(f+d)/2,f===d?l=u=0:(p=f-d,u=c>.5?p/(2-f-d):p/(f+d),l=f===s?(a-o)/p+(a<o?6:0):f===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},ty=function(e){var t=[],i=[],r=-1;return e.split(Dr).forEach(function(s){var a=s.match(co)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},E_=function(e,t,i){var r="",s=(e+r).match(Dr),a=t?"hsla(":"rgba(",o=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=ey(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=ty(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Dr,"1").split(co),f=u.length-1;o<f;o++)r+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Dr),f=u.length-1;o<f;o++)r+=u[o]+s[o];return r+u[f]},Dr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fa)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),lC=/hsl[a]?\(/,ny=function(e){var t=e.join(" "),i;if(Dr.lastIndex=0,Dr.test(t))return i=lC.test(t),e[1]=E_(e[1],i),e[0]=E_(e[0],i,ty(e[1])),!0},Qa,Dn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,u,c,f,d,p,_=function m(g){var h=n()-r,v=g===!0,x,y,S,T;if((h>e||h<0)&&(i+=h-t),r+=h,S=r-i,x=S-a,(x>0||v)&&(T=++f.frame,d=S-f.time*1e3,f.time=S=S/1e3,a+=x+(x>=s?4:s-x),y=1),v||(l=u(m)),y)for(p=0;p<o.length;p++)o[p](S,d,T,g)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){Nx&&(!Jd&&mp()&&(Si=Jd=window,gp=Si.document||{},zn.gsap=wn,(Si.gsapVersions||(Si.gsapVersions=[])).push(wn.version),Ux(Qu||Si.GreenSockGlobals||!Si.gsap&&Si||{}),Qx.forEach(Jx)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(g){return setTimeout(g,a-f.time*1e3+1|0)},Qa=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Qa=0,u=Ka},lagSmoothing:function(g,h){e=g||1/0,t=Math.min(h||33,e)},fps:function(g){s=1e3/(g||240),a=f.time*1e3+s},add:function(g,h,v){var x=h?function(y,S,T,E){g(y,S,T,E),f.remove(x)}:g;return f.remove(g),o[v?"unshift":"push"](x),ko(),x},remove:function(g,h){~(h=o.indexOf(g))&&o.splice(h,1)&&p>=h&&p--},_listeners:o},f}(),ko=function(){return!Qa&&Dn.wake()},$e={},uC=/^[\d.\-M][\d.\-,\s]/,cC=/["']/g,fC=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,u;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),t[r]=isNaN(u)?u.replace(cC,"").trim():+u,r=l.substr(o+1).trim();return t},dC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},hC=function(e){var t=(e+"").split("("),i=$e[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[fC(t[1])]:dC(e).split(",").map(zx)):$e._CE&&uC.test(e)?$e._CE("",e):i},iy=function(e){return function(t){return 1-e(1-t)}},ry=function n(e,t){for(var i=e._first,r;i;)i instanceof un?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},ms=function(e,t){return e&&(yt(e)?e:$e[e]||hC(e))||t},Rs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return Mn(e,function(o){$e[o]=zn[o]=s,$e[a=o.toLowerCase()]=i;for(var l in s)$e[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[o+"."+l]=s[l]}),s},sy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Vf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Zd*(Math.asin(1/r)||0),o=function(c){return c===1?1:r*Math.pow(2,-10*c)*Hb((c-a)*s)+1},l=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:sy(o);return s=Zd/s,l.config=function(u,c){return n(e,u,c)},l},Gf=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:sy(i);return r.config=function(s){return n(e,s)},r};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Rs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;Rs("Elastic",Vf("in"),Vf("out"),Vf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Rs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Rs("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Rs("Circ",function(n){return-(Cx(1-n*n)-1)});Rs("Sine",function(n){return n===1?1:-Bb(n*kb)+1});Rs("Back",Gf("in"),Gf("out"),Gf());$e.SteppedEase=$e.steps=zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-it;return function(o){return((r*cl(0,a,o)|0)+s)*i}}};Io.ease=$e["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return xp+=n+","+n+"Params,"});var oy=function(e,t){this.id=zb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Fx,this.set=t?t.getSetter:Tp},Ja=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Fo(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),Qa||Dn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Fo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ko(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Pc(this,i),!s._dp||s.parent||Vx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ti(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===it||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),kx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+y_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+y_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Oo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?tc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-it?0:this._rts,this.totalTime(cl(-Math.abs(this._delay),this._tDur,s),r!==!1),Rc(this),qb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ko(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ti(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Sn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Wb);var r=Jt;return Jt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Jt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,S_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,S_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Wn(this,i),Sn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Sn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-it)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this;return new Promise(function(s){var a=yt(i)?i:Bx,o=function(){var u=r.then;r.then=null,yt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),s(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){ca(this)},n}();ni(Ja.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var un=function(n){bx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Sn(i.sortChildren),dt&&Ti(i.parent||dt,zi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Gx(zi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Aa(0,arguments,this),this},t.from=function(r,s,a){return Aa(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Aa(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,wa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new bt(r,s,Wn(this,a),1),this},t.call=function(r,s,a){return Ti(this,bt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new bt(r,a,Wn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,u,c){return a.runBackwards=1,wa(a).immediateRender=Sn(a.immediateRender),this.staggerTo(r,s,a,o,l,u,c)},t.staggerFromTo=function(r,s,a,o,l,u,c,f){return o.startAt=a,wa(o).immediateRender=Sn(o.immediateRender),this.staggerTo(r,s,o,l,u,c,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ft(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,p,_,m,g,h,v,x,y,S,T,E;if(this!==dt&&c>l&&r>=0&&(c=l),c!==this._tTime||a||f){if(o!==this._time&&u&&(c+=this._time-o,r+=this._time-o),d=c,y=this._start,x=this._ts,h=!x,f&&(u||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(d=Ft(c%g),c===l?(m=this._repeat,d=u):(m=~~(c/g),m&&m===c/g&&(d=u,m--),d>u&&(d=u)),S=Oo(this._tTime,g),!o&&this._tTime&&S!==m&&this._tTime-S*g-this._dur<=0&&(S=m),T&&m&1&&(d=u-d,E=1),m!==S&&!this._lock){var C=T&&S&1,M=C===(T&&m&1);if(m<S&&(C=!C),o=C?0:c%u?u:c,this._lock=1,this.render(o||(E?0:Ft(m*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,o=C?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;ry(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Qb(this,Ft(o),Ft(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&d&&!s&&!m&&(Un(this,"onStart"),this._tTime!==c))return this;if(d>=o&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,a),d!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=-it);break}}p=_}else{p=this._last;for(var w=r<0?r:d;p;){if(_=p._prev,(p._act||w<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(w-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(w-p._start)*p._ts,s,a||Jt&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=w?-it:it);break}}p=_}}if(v&&!s&&(this.pause(),v.render(d>=o?0:-it)._zTime=d>=o?1:-1,this._ts))return this._start=y,Rc(this),this.render(r,s,a);this._onUpdate&&!s&&Un(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Or(this,1),!s&&!(r<0&&!o)&&(c||o||!l)&&(Un(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Qi(s)||(s=Wn(this,s,r)),!(r instanceof Ja)){if(en(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Bt(r))return this.addLabel(r,s);if(yt(r))r=bt.delayedCall(0,r);else return this}return this!==r?Ti(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Zn);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof bt?s&&l.push(u):(a&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Bt(r)?this.removeLabel(r):yt(r)?this.killTweensOf(r):(Cc(this,r),r===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(Dn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Wn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=bt.delayedCall(0,s||Ka,a);return o.data="isPause",this._hasPause=1,Ti(this,o,Wn(this,r))},t.removePause=function(r){var s=this._first;for(r=Wn(this,r);s;)s._start===r&&s.data==="isPause"&&Or(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)_r!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Qn(r),l=this._first,u=Qi(s),c;l;)l instanceof bt?jb(l._targets,o)&&(u?(!_r||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Wn(a,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,p,_=bt.to(a,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||it,onStart:function(){if(a.pause(),!p){var g=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());_._dur!==g&&Fo(_,g,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,f||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,ni({startAt:{time:Wn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),M_(this,Wn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),M_(this,Wn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,u;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=r);return ps(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ps(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Zn,u,c,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ti(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=c/a._ts,a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;Fo(a,a===dt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(dt._ts&&(kx(dt,tc(r,dt)),Ox=Dn.frame),Dn.frame>=v_){v_+=Fn.autoSleep||120;var s=dt._first;if((!s||!s._ts)&&Fn.autoSleep&&Dn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Dn.sleep()}}},e}(Ja);ni(un.prototype,{_lock:0,_hasPause:0,_forcing:0});var pC=function(e,t,i,r,s,a,o){var l=new En(this._pt,e,t,0,1,dy,null,s),u=0,c=0,f,d,p,_,m,g,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Za(r)),a&&(v=[i,r],a(v,e,t),i=v[0],r=v[1]),d=i.match(zf)||[];f=zf.exec(r);)_=f[0],m=r.substring(u,f.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),_!==d[c++]&&(g=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:g,c:_.charAt(1)==="="?So(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},u=zf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=o,(Lx.test(r)||h)&&(l.e=0),this._pt=l,l},Sp=function(e,t,i,r,s,a,o,l,u,c){yt(r)&&(r=r(s||0,e,a));var f=e[t],d=i!=="get"?i:yt(f)?u?e[t.indexOf("set")||!yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=yt(f)?u?xC:cy:Ep,_;if(Bt(r)&&(~r.indexOf("random(")&&(r=Za(r)),r.charAt(1)==="="&&(_=So(d,r)+(Qt(d)||0),(_||_===0)&&(r=_))),!c||d!==r||oh)return!isNaN(d*r)&&r!==""?(_=new En(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?SC:fy,0,p),u&&(_.fp=u),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&_p(t,r),pC.call(this,e,t,d,r,p,l||Fn.stringFilter,u))},mC=function(e,t,i,r,s){if(yt(e)&&(e=ba(e,s,t,i,r)),!Pi(e)||e.style&&e.nodeType||en(e)||Rx(e))return Bt(e)?ba(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=ba(e[o],s,t,i,r);return a},ay=function(e,t,i,r,s,a){var o,l,u,c;if(Ln[e]&&(o=new Ln[e]).init(s,o.rawVars?t[e]:mC(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new En(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==fo))for(u=i._ptLookup[i._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},_r,oh,Mp=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,p=r.autoRevert,_=e._dur,m=e._startAt,g=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:g,x=e._overwrite==="auto"&&!hp,y=e.timeline,S,T,E,C,M,w,U,z,G,L,B,V,Y;if(y&&(!d||!s)&&(s="none"),e._ease=ms(s,Io.ease),e._yEase=f?iy(ms(f===!0?s:f,Io.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||d&&!r.stagger){if(z=g[0]?hs(g[0]).harness:0,V=z&&r[z.prop],S=ec(r,vp),m&&(m._zTime<0&&m.progress(1),t<0&&c&&o&&!p?m.render(-1,!0):m.revert(c&&_?vu:Gb),m._lazy=0),a){if(Or(e._startAt=bt.set(g,ni({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!m&&Sn(l),startAt:null,delay:0,onUpdate:u&&function(){return Un(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Jt||!o&&!p)&&e._startAt.revert(vu),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!m){if(t&&(o=!1),E=ni({overwrite:!1,data:"isFromStart",lazy:o&&!m&&Sn(l),immediateRender:o,stagger:0,parent:h},S),V&&(E[z.prop]=V),Or(e._startAt=bt.set(g,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Jt?e._startAt.revert(vu):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,it,it);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Sn(l)||l&&!_,T=0;T<g.length;T++){if(M=g[T],U=M._gsap||yp(g)[T]._gsap,e._ptLookup[T]=L={},eh[U.id]&&Lr.length&&Ju(),B=v===g?T:v.indexOf(M),z&&(G=new z).init(M,V||S,e,B,v)!==!1&&(e._pt=C=new En(e._pt,M,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(H){L[H]=C}),G.priority&&(w=1)),!z||V)for(E in S)Ln[E]&&(G=ay(E,S,e,B,M,v))?G.priority&&(w=1):L[E]=C=Sp.call(e,M,E,"get",S[E],B,v,0,r.stringFilter);e._op&&e._op[T]&&e.kill(M,e._op[T]),x&&e._pt&&(_r=e,dt.killTweensOf(M,L,e.globalTime(t)),Y=!e.parent,_r=0),e._pt&&l&&(eh[U.id]=1)}w&&hy(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&y.render(Zn,!0,!0)},gC=function(e,t,i,r,s,a,o,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return oh=1,e.vars[t]="+=0",Mp(e,o),oh=0,l?$a(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+a*c.c,c.c=i-c.s,f.e&&(f.e=Mt(i)+Qt(f.e)),f.b&&(f.b=c.s+Qt(f.b))},_C=function(e,t){var i=e[0]?hs(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=Ts({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},vC=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(en(t))o=i[e]||(i[e]=[]),t.forEach(function(l,u){return o.push({t:u/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ba=function(e,t,i,r,s){return yt(e)?e.call(t,i,r,s):Bt(e)&&~e.indexOf("random(")?Za(e):e},ly=xp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",uy={};Mn(ly+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return uy[n]=1});var bt=function(n){bx(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:wa(r))||this;var l=o.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,h=l.yoyoEase,v=r.parent||dt,x=(en(i)||Rx(i)?Qi(i[0]):"length"in r)?[i]:Qn(i),y,S,T,E,C,M,w,U;if(o._targets=x.length?yp(x):$a("GSAP target "+i+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||d||iu(u)||iu(c)){if(r=o.vars,y=o.timeline=new un({data:"nested",defaults:m||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=zi(o),y._start=0,d||iu(u)||iu(c)){if(E=x.length,w=d&&Yx(d),Pi(d))for(C in d)~ly.indexOf(C)&&(U||(U={}),U[C]=d[C]);for(S=0;S<E;S++)T=ec(r,uy),T.stagger=0,h&&(T.yoyoEase=h),U&&Ts(T,U),M=x[S],T.duration=+ba(u,zi(o),S,M,x),T.delay=(+ba(c,zi(o),S,M,x)||0)-o._delay,!d&&E===1&&T.delay&&(o._delay=c=T.delay,o._start+=c,T.delay=0),y.to(M,T,w?w(S,M,x):0),y._ease=$e.none;y.duration()?u=c=0:o.timeline=0}else if(_){wa(ni(y.vars.defaults,{ease:"none"})),y._ease=ms(_.ease||r.ease||"none");var z=0,G,L,B;if(en(_))_.forEach(function(V){return y.to(x,V,">")}),y.duration();else{T={};for(C in _)C==="ease"||C==="easeEach"||vC(C,_[C],T,_.easeEach);for(C in T)for(G=T[C].sort(function(V,Y){return V.t-Y.t}),z=0,S=0;S<G.length;S++)L=G[S],B={ease:L.e,duration:(L.t-(S?G[S-1].t:0))/100*u},B[C]=L.v,y.to(x,B,z),z+=B.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||o.duration(u=y.duration())}else o.timeline=0;return p===!0&&!hp&&(_r=zi(o),dt.killTweensOf(x),_r=0),Ti(v,zi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!u&&!_&&o._start===Ft(v._time)&&Sn(f)&&$b(zi(o))&&v.data!=="nested")&&(o._tTime=-it,o.render(Math.max(0,-c)||0)),g&&Gx(zi(o),g),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-it&&!c?l:r<it?0:r,d,p,_,m,g,h,v,x,y;if(!u)Zb(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(d=f,x=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,a);if(d=Ft(f%m),f===l?(_=this._repeat,d=u):(_=~~(f/m),_&&_===Ft(f/m)&&(d=u,_--),d>u&&(d=u)),h=this._yoyo&&_&1,h&&(y=this._yEase,d=u-d),g=Oo(this._tTime,m),d===o&&!a&&this._initted&&_===g)return this._tTime=f,this;_!==g&&(x&&this._yEase&&ry(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&this._time!==m&&this._initted&&(this._lock=a=1,this.render(Ft(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(Wx(this,c?r:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(u!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(d/u),this._from&&(this.ratio=v=1-v),d&&!o&&!s&&!_&&(Un(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&th(this,r,s,a),Un(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Un(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&th(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Or(this,1),!s&&!(c&&!o)&&(f||o||h)&&(Un(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Qa||Dn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Mp(this,u),c=this._ease(u/this._dur),gC(this,r,s,a,o,c,u,l)?this.resetTo(r,s,a,o,1):(Pc(this,0),this.parent||Hx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ca(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,_r&&_r.vars.overwrite!==!0)._first||ca(this),this.parent&&a!==this.timeline.totalDuration()&&Fo(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Qn(r):o,u=this._ptLookup,c=this._pt,f,d,p,_,m,g,h;if((!s||s==="all")&&Yb(o,l))return s==="all"&&(this._pt=0),ca(this);for(f=this._op=this._op||[],s!=="all"&&(Bt(s)&&(m={},Mn(s,function(v){return m[v]=1}),s=m),s=_C(o,s)),h=o.length;h--;)if(~l.indexOf(o[h])){d=u[h],s==="all"?(f[h]=s,_=d,p={}):(p=f[h]=f[h]||{},_=s);for(m in _)g=d&&d[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Cc(this,g,"_pt"),delete d[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&ca(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Aa(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Aa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return dt.killTweensOf(r,s,a)},e}(Ja);ni(bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(n){bt[n]=function(){var e=new un,t=ih.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Ep=function(e,t,i){return e[t]=i},cy=function(e,t,i){return e[t](i)},xC=function(e,t,i,r){return e[t](r.fp,i)},yC=function(e,t,i){return e.setAttribute(t,i)},Tp=function(e,t){return yt(e[t])?cy:pp(e[t])&&e.setAttribute?yC:Ep},fy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},SC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},dy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},wp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},MC=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},EC=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Cc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},TC=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},hy=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},En=function(){function n(t,i,r,s,a,o,l,u,c){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||fy,this.d=l||this,this.set=u||Ep,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=TC,this.m=i,this.mt=s,this.tween=r},n}();Mn(xp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return vp[n]=1});zn.TweenMax=zn.TweenLite=bt;zn.TimelineLite=zn.TimelineMax=un;dt=new un({sortChildren:!1,defaults:Io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=ny;var gs=[],yu={},wC=[],T_=0,AC=0,Wf=function(e){return(yu[e]||wC).map(function(t){return t()})},ah=function(){var e=Date.now(),t=[];e-T_>2&&(Wf("matchMediaInit"),gs.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,u;for(o in r)a=Si.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(i.revert(),l&&t.push(i))}),Wf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),T_=e,Wf("matchMedia"))},py=function(){function n(t,i){this.selector=i&&rh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=AC++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){yt(i)&&(s=r,r=i,i=yt);var a=this,o=function(){var u=ut,c=a.selector,f;return u&&u!==a&&u.data.push(a),s&&(a.selector=rh(s)),ut=a,f=r.apply(a,arguments),yt(f)&&a._r.push(f),ut=u,a.selector=c,a.isReverted=!1,f};return a.last=o,i===yt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=ut;ut=null,i(this),ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof bt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof un?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof bt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=gs.length;a--;)gs[a].id===this.id&&gs.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),bC=function(){function n(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Pi(i)||(i={matches:i});var a=new py(0,s||this.scope),o=a.conditions={},l,u,c;ut&&!a.selector&&(a.selector=ut.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(u in i)u==="all"?c=1:(l=Si.matchMedia(i[u]),l&&(gs.indexOf(a)<0&&gs.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(ah):l.addEventListener("change",ah)));return c&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),nc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Jx(r)})},timeline:function(e){return new un(e)},getTweensOf:function(e,t){return dt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Bt(e)&&(e=Qn(e)[0]);var s=hs(e||{}).get,a=i?Bx:zx;return i==="native"&&(i=""),e&&(t?a((Ln[t]&&Ln[t].get||s)(e,t,i,r)):function(o,l,u){return a((Ln[o]&&Ln[o].get||s)(e,o,l,u))})},quickSetter:function(e,t,i){if(e=Qn(e),e.length>1){var r=e.map(function(c){return wn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var a=Ln[t],o=hs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(c){var f=new a;fo._pt=0,f.init(e,i?c+i:c,fo,0,[e]),f.render(1,f),fo._pt&&wp(1,fo)}:o.set(e,l);return a?u:function(c){return u(e,l,i?c+i:c,o,1)}},quickTo:function(e,t,i){var r,s=wn.to(e,Ts((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),a=function(l,u,c){return s.resetTo(t,l,u,c)};return a.tween=s,a},isTweening:function(e){return dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,Io.ease)),x_(Io,e||{})},config:function(e){return x_(Fn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Ln[o]&&!zn[o]&&$a(t+" effect requires "+o+" plugin.")}),Bf[t]=function(o,l,u){return i(Qn(o),ni(l||{},s),u)},a&&(un.prototype[t]=function(o,l,u){return this.add(Bf[t](o,Pi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){$e[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):$e},getById:function(e){return dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new un(e),r,s;for(i.smoothChildTiming=Sn(e.smoothChildTiming),dt.remove(i),i._dp=0,i._time=i._tTime=dt._time,r=dt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof bt&&r.vars.onComplete===r._targets[0]))&&Ti(i,r,r._start-r._delay),r=s;return Ti(dt,i,0),i},context:function(e,t){return e?new py(e,t):ut},matchMedia:function(e){return new bC(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||ah()},addEventListener:function(e,t){var i=yu[e]||(yu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=yu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:sC,wrapYoyo:oC,distribute:Yx,random:$x,snap:qx,normalize:rC,getUnit:Qt,clamp:eC,splitColor:ey,toArray:Qn,selector:rh,mapRange:Zx,pipe:nC,unitize:iC,interpolate:aC,shuffle:Xx},install:Ux,effects:Bf,ticker:Dn,updateRoot:un.updateRoot,plugins:Ln,globalTimeline:dt,core:{PropTween:En,globals:Ix,Tween:bt,Timeline:un,Animation:Ja,getCache:hs,_removeLinkedListItem:Cc,reverting:function(){return Jt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return hp=e}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return nc[n]=bt[n]});Dn.add(un.updateRoot);fo=nc.to({},{duration:0});var CC=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},RC=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=CC(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},jf=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,u;if(Bt(s)&&(l={},Mn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}RC(o,s)}}}},wn=nc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Jt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},jf("roundProps",sh),jf("modifiers"),jf("snap",qx))||nc;bt.version=un.version=wn.version="3.12.5";Nx=1;mp()&&ko();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var w_,vr,Mo,Ap,ss,A_,bp,PC=function(){return typeof window<"u"},Ji={},Jr=180/Math.PI,Eo=Math.PI/180,$s=Math.atan2,b_=1e8,Cp=/([A-Z])/g,LC=/(left|right|width|margin|padding|x)/i,DC=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},NC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},UC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},IC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},my=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},gy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},OC=function(e,t,i){return e.style[t]=i},FC=function(e,t,i){return e.style.setProperty(t,i)},kC=function(e,t,i){return e._gsap[t]=i},zC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},BC=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},HC=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},ht="transform",Tn=ht+"Origin",VC=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Hi(r,o)}):this.tfm[e]=a.x?a[e]:Hi(r,e),e===Tn&&(this.tfm.zOrigin=a.zOrigin);else return wi.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(ht)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Tn,t,"")),e=ht}(s||t)&&this.props.push(e,t,s[e])},_y=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},GC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Cp,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=bp(),(!s||!s.isStart)&&!i[ht]&&(_y(i),r.zOrigin&&i[Tn]&&(i[Tn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},vy=function(e,t){var i={target:e,props:[],revert:GC,save:VC};return e._gsap||wn.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},xy,uh=function(e,t){var i=vr.createElementNS?vr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vr.createElement(e);return i&&i.style?i:vr.createElement(e)},Ci=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Cp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,zo(t)||t,1)||""},C_="O,Moz,ms,Ms,Webkit".split(","),zo=function(e,t,i){var r=t||ss,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(C_[a]+e in s););return a<0?null:(a===3?"ms":a>=0?C_[a]:"")+e},ch=function(){PC()&&window.document&&(w_=window,vr=w_.document,Mo=vr.documentElement,ss=uh("div")||{style:{}},uh("div"),ht=zo(ht),Tn=ht+"Origin",ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xy=!!zo("perspective"),bp=wn.core.reverting,Ap=1)},Xf=function n(e){var t=uh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(Mo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Mo.removeChild(t),this.style.cssText=s,a},R_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},yy=function(e){var t;try{t=e.getBBox()}catch{t=Xf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Xf||(t=Xf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+R_(e,["x","cx","x1"])||0,y:+R_(e,["y","cy","y1"])||0,width:0,height:0}:t},Sy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&yy(e))},ws=function(e,t){if(t){var i=e.style,r;t in Ji&&t!==Tn&&(t=ht),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Cp,"-$1").toLowerCase())):i.removeAttribute(t)}},xr=function(e,t,i,r,s,a){var o=new En(e._pt,t,i,0,1,a?gy:my);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},P_={deg:1,rad:1,turn:1},WC={grid:1,flex:1},Fr=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=ss.style,l=LC.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",p=r==="%",_,m,g,h;if(r===a||!s||P_[r]||P_[a])return s;if(a!=="px"&&!d&&(s=n(e,t,i,"px")),h=e.getCTM&&Sy(e),(p||a==="%")&&(Ji[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Mt(p?s/_*f:s/100*_);if(o[l?"width":"height"]=f+(d?a:r),m=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===vr||!m.appendChild)&&(m=vr.body),g=m._gsap,g&&p&&g.width&&l&&g.time===Dn.time&&!g.uncache)return Mt(s/g.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,_=e[c],v?e.style[t]=v:ws(e,t)}else(p||a==="%")&&!WC[Ci(m,"display")]&&(o.position=Ci(e,"position")),m===e&&(o.position="static"),m.appendChild(ss),_=ss[c],m.removeChild(ss),o.position="absolute";return l&&p&&(g=hs(m),g.time=Dn.time,g.width=m[c]),Mt(d?_*s/f:_&&s?f/_*s:0)},Hi=function(e,t,i,r){var s;return Ap||ch(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ji[t]&&t!=="transform"?(s=tl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rc(Ci(e,Tn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ic[t]&&ic[t](e,t,i)||Ci(e,t)||Fx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Fr(e,t,s,i)+i:s},jC=function(e,t,i,r){if(!i||i==="none"){var s=zo(t,e,1),a=s&&Ci(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Ci(e,"borderTopColor"))}var o=new En(this._pt,e.style,t,0,1,dy),l=0,u=0,c,f,d,p,_,m,g,h,v,x,y,S;if(o.b=i,o.e=r,i+="",r+="",r==="auto"&&(m=e.style[t],e.style[t]=r,r=Ci(e,t)||r,m?e.style[t]=m:ws(e,t)),c=[i,r],ny(c),i=c[0],r=c[1],d=i.match(co)||[],S=r.match(co)||[],S.length){for(;f=co.exec(r);)g=f[0],v=r.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),g!==(m=d[u++]||"")&&(p=parseFloat(m)||0,y=m.substr((p+"").length),g.charAt(1)==="="&&(g=So(p,g)+y),h=parseFloat(g),x=g.substr((h+"").length),l=co.lastIndex-x.length,x||(x=x||Fn.units[t]||y,l===r.length&&(r+=x,o.e+=x)),y!==x&&(p=Fr(e,t,m,x)||0),o._pt={_next:o._pt,p:v||u===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?gy:my;return Lx.test(r)&&(o.e=0),this._pt=o,o},L_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},XC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=L_[i]||i,t[1]=L_[r]||r,t.join(" ")},YC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],Ji[o]&&(l=1,o=o==="transformOrigin"?Tn:ht),ws(i,o);l&&(ws(i,ht),a&&(a.svg&&i.removeAttribute("transform"),tl(i,1),a.uncache=1,_y(r)))}},ic={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new En(e._pt,t,i,0,0,YC);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},el=[1,0,0,1,0,0],My={},Ey=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},D_=function(e){var t=Ci(e,ht);return Ey(t)?el:t.substr(7).match(Px).map(Mt)},Rp=function(e,t){var i=e._gsap||hs(e),r=e.style,s=D_(e),a,o,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?el:s):(s===el&&!e.offsetParent&&e!==Mo&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(u=1,o=e.nextElementSibling,Mo.appendChild(e)),s=D_(e),l?r.display=l:ws(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):Mo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fh=function(e,t,i,r,s,a){var o=e._gsap,l=s||Rp(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,p=l[0],_=l[1],m=l[2],g=l[3],h=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,S=parseFloat(x[1])||0,T,E,C,M;i?l!==el&&(E=p*g-_*m)&&(C=y*(g/E)+S*(-m/E)+(m*v-g*h)/E,M=y*(-_/E)+S*(p/E)-(p*v-_*h)/E,y=C,S=M):(T=yy(e),y=T.x+(~x[0].indexOf("%")?y/100*T.width:y),S=T.y+(~(x[1]||x[0]).indexOf("%")?S/100*T.height:S)),r||r!==!1&&o.smooth?(h=y-u,v=S-c,o.xOffset=f+(h*p+v*m)-h,o.yOffset=d+(h*_+v*g)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[Tn]="0px 0px",a&&(xr(a,o,"xOrigin",u,y),xr(a,o,"yOrigin",c,S),xr(a,o,"xOffset",f,o.xOffset),xr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},tl=function(e,t){var i=e._gsap||new oy(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),u=Ci(e,Tn)||"0",c,f,d,p,_,m,g,h,v,x,y,S,T,E,C,M,w,U,z,G,L,B,V,Y,H,k,I,P,O,oe,N,de;return c=f=d=m=g=h=v=x=y=0,p=_=1,i.svg=!!(e.getCTM&&Sy(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ht]!=="none"?l[ht]:"")),r.scale=r.rotate=r.translate="none"),E=Rp(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),u=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),fh(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,E)),S=i.xOrigin||0,T=i.yOrigin||0,E!==el&&(U=E[0],z=E[1],G=E[2],L=E[3],c=B=E[4],f=V=E[5],E.length===6?(p=Math.sqrt(U*U+z*z),_=Math.sqrt(L*L+G*G),m=U||z?$s(z,U)*Jr:0,v=G||L?$s(G,L)*Jr+m:0,v&&(_*=Math.abs(Math.cos(v*Eo))),i.svg&&(c-=S-(S*U+T*G),f-=T-(S*z+T*L))):(de=E[6],oe=E[7],I=E[8],P=E[9],O=E[10],N=E[11],c=E[12],f=E[13],d=E[14],C=$s(de,O),g=C*Jr,C&&(M=Math.cos(-C),w=Math.sin(-C),Y=B*M+I*w,H=V*M+P*w,k=de*M+O*w,I=B*-w+I*M,P=V*-w+P*M,O=de*-w+O*M,N=oe*-w+N*M,B=Y,V=H,de=k),C=$s(-G,O),h=C*Jr,C&&(M=Math.cos(-C),w=Math.sin(-C),Y=U*M-I*w,H=z*M-P*w,k=G*M-O*w,N=L*w+N*M,U=Y,z=H,G=k),C=$s(z,U),m=C*Jr,C&&(M=Math.cos(C),w=Math.sin(C),Y=U*M+z*w,H=B*M+V*w,z=z*M-U*w,V=V*M-B*w,U=Y,B=H),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,h=180-h),p=Mt(Math.sqrt(U*U+z*z+G*G)),_=Mt(Math.sqrt(V*V+de*de)),C=$s(B,V),v=Math.abs(C)>2e-4?C*Jr:0,y=N?1/(N<0?-N:N):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ey(Ci(e,ht)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=Mt(p),i.scaleY=Mt(_),i.rotation=Mt(m)+o,i.rotationX=Mt(g)+o,i.rotationY=Mt(h)+o,i.skewX=v+o,i.skewY=x+o,i.transformPerspective=y+a,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Tn]=rc(u)),i.xOffset=i.yOffset=0,i.force3D=Fn.force3D,i.renderTransform=i.svg?$C:xy?Ty:qC,i.uncache=0,i},rc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Yf=function(e,t,i){var r=Qt(t);return Mt(parseFloat(t)+parseFloat(Fr(e,"x",i+"px",r)))+r},qC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ty(e,t)},qr="0deg",ra="0px",$r=") ",Ty=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,p=i.skewY,_=i.scaleX,m=i.scaleY,g=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,y="",S=h==="auto"&&e&&e!==1||h===!0;if(x&&(f!==qr||c!==qr)){var T=parseFloat(c)*Eo,E=Math.sin(T),C=Math.cos(T),M;T=parseFloat(f)*Eo,M=Math.cos(T),a=Yf(v,a,E*M*-x),o=Yf(v,o,-Math.sin(T)*-x),l=Yf(v,l,C*M*-x+x)}g!==ra&&(y+="perspective("+g+$r),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(S||a!==ra||o!==ra||l!==ra)&&(y+=l!==ra||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+$r),u!==qr&&(y+="rotate("+u+$r),c!==qr&&(y+="rotateY("+c+$r),f!==qr&&(y+="rotateX("+f+$r),(d!==qr||p!==qr)&&(y+="skew("+d+", "+p+$r),(_!==1||m!==1)&&(y+="scale("+_+", "+m+$r),v.style[ht]=y||"translate(0, 0)"},$C=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,p=i.target,_=i.xOrigin,m=i.yOrigin,g=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(a),y=parseFloat(o),S,T,E,C,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Eo,u*=Eo,S=Math.cos(l)*f,T=Math.sin(l)*f,E=Math.sin(l-u)*-d,C=Math.cos(l-u)*d,u&&(c*=Eo,M=Math.tan(u-c),M=Math.sqrt(1+M*M),E*=M,C*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),S*=M,T*=M)),S=Mt(S),T=Mt(T),E=Mt(E),C=Mt(C)):(S=f,C=d,T=E=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=Fr(p,"x",a,"px"),y=Fr(p,"y",o,"px")),(_||m||g||h)&&(x=Mt(x+_-(_*S+m*E)+g),y=Mt(y+m-(_*T+m*C)+h)),(r||s)&&(M=p.getBBox(),x=Mt(x+r/100*M.width),y=Mt(y+s/100*M.height)),M="matrix("+S+","+T+","+E+","+C+","+x+","+y+")",p.setAttribute("transform",M),v&&(p.style[ht]=M)},KC=function(e,t,i,r,s){var a=360,o=Bt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Jr:1),u=l-r,c=r+u+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),f==="cw"&&u<0?u=(u+a*b_)%a-~~(u/a)*a:f==="ccw"&&u>0&&(u=(u-a*b_)%a-~~(u/a)*a)),e._pt=d=new En(e._pt,t,i,r,u,NC),d.e=c,d.u="deg",e._props.push(i),d},N_=function(e,t){for(var i in t)e[i]=t[i];return e},ZC=function(e,t,i){var r=N_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,u,c,f,d,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),a[ht]=t,o=tl(i,1),ws(i,ht),i.setAttribute("transform",u)):(u=getComputedStyle(i)[ht],a[ht]=t,o=tl(i,1),a[ht]=u);for(l in Ji)u=r[l],c=o[l],u!==c&&s.indexOf(l)<0&&(p=Qt(u),_=Qt(c),f=p!==_?Fr(i,l,u,_):parseFloat(u),d=parseFloat(c),e._pt=new En(e._pt,o,l,f,d-f,lh),e._pt.u=_||0,e._props.push(l));N_(o,r)};Mn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});ic[e>1?"border"+n:n]=function(o,l,u,c,f){var d,p;if(arguments.length<4)return d=a.map(function(_){return Hi(o,_,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},a.forEach(function(_,m){return p[_]=d[m]=d[m]||d[(m-1)/2|0]}),o.init(l,p,f)}});var wy={name:"css",register:ch,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,u,c,f,d,p,_,m,g,h,v,x,y,S,T,E,C;Ap||ch(),this.styles=this.styles||vy(e),C=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(Ln[m]&&ay(m,t,i,r,e,s)))){if(p=typeof c,_=ic[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Za(c)),_)_(this,e,m,c,i)&&(E=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",Dr.lastIndex=0,Dr.test(u)||(g=Qt(u),h=Qt(c)),h?g!==h&&(u=Fr(e,m,u,h)+h):g&&(c+=g),this.add(o,"setProperty",u,c,r,s,0,0,m),a.push(m),C.push(m,0,o[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],Bt(u)&&~u.indexOf("random(")&&(u=Za(u)),Qt(u+"")||u==="auto"||(u+=Fn.units[m]||Qt(Hi(e,m))||""),(u+"").charAt(1)==="="&&(u=Hi(e,m))):u=Hi(e,m),d=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),m in wi&&(m==="autoAlpha"&&(d===1&&Hi(e,"visibility")==="hidden"&&f&&(d=0),C.push("visibility",0,o.visibility),xr(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=wi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in Ji,x){if(this.styles.save(m),y||(S=e._gsap,S.renderTransform&&!t.parseTransform||tl(e,t.parseTransform),T=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new En(this._pt,o,ht,0,1,S.renderTransform,S,0,-1),y.dep=1),m==="scale")this._pt=new En(this._pt,S,"scaleY",S.scaleY,(v?So(S.scaleY,v+f):f)-S.scaleY||0,lh),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){C.push(Tn,0,o[Tn]),c=XC(c),S.svg?fh(e,c,0,T,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==S.zOrigin&&xr(this,S,"zOrigin",S.zOrigin,h),xr(this,o,m,rc(u),rc(c)));continue}else if(m==="svgOrigin"){fh(e,c,1,T,0,this);continue}else if(m in My){KC(this,S,m,d,v?So(d,v+c):c);continue}else if(m==="smoothOrigin"){xr(this,S,"smooth",S.smooth,c);continue}else if(m==="force3D"){S[m]=c;continue}else if(m==="transform"){ZC(this,c,e);continue}}else m in o||(m=zo(m)||m);if(x||(f||f===0)&&(d||d===0)&&!DC.test(c)&&m in o)g=(u+"").substr((d+"").length),f||(f=0),h=Qt(c)||(m in Fn.units?Fn.units[m]:g),g!==h&&(d=Fr(e,m,u,h)),this._pt=new En(this._pt,x?S:o,m,d,(v?So(d,v+f):f)-d,!x&&(h==="px"||m==="zIndex")&&t.autoRound!==!1?IC:lh),this._pt.u=h||0,g!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=UC);else if(m in o)jC.call(this,e,m,u,v?v+c:c);else if(m in e)this.add(e,m,u||e[m],v?v+c:c,r,s);else if(m!=="parseTransform"){_p(m,c);continue}x||(m in o?C.push(m,0,o[m]):C.push(m,1,u||e[m])),a.push(m)}}E&&hy(this)},render:function(e,t){if(t.tween._time||!bp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Hi,aliases:wi,getSetter:function(e,t,i){var r=wi[t];return r&&r.indexOf(",")<0&&(t=r),t in Ji&&t!==Tn&&(e._gsap.x||Hi(e,"x"))?i&&A_===i?t==="scale"?zC:kC:(A_=i||{})&&(t==="scale"?BC:HC):e.style&&!pp(e.style[t])?OC:~t.indexOf("-")?FC:Tp(e,t)},core:{_removeProperty:ws,_getMatrix:Rp}};wn.utils.checkPrefix=zo;wn.core.getStyleSaver=vy;(function(n,e,t,i){var r=Mn(n+","+e+","+t,function(s){Ji[s]=1});Mn(e,function(s){Fn.units[s]="deg",My[s]=1}),wi[r[13]]=n+","+e,Mn(i,function(s){var a=s.split(":");wi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Fn.units[n]="px"});wn.registerPlugin(wy);var cn=wn.registerPlugin(wy)||wn;cn.core.Tween;const QC=`
varying vec3 vColor;
attribute float aScale;

void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = aScale * 15.0 * (300.0 / -mvPosition.z);
}`,JC=`
varying vec3 vColor;

void main() {
    vec2 xy = gl_PointCoord.xy - vec2(0.5);
    float r = length(xy);
    float alpha = smoothstep(0.5, 0.0, r);
    float structure = smoothstep(0.2, 0.0, r) * 0.5;
    gl_FragColor = vec4(vColor * (1.0 + structure), alpha * 0.08);
}`,eR=()=>{const n=Ze.useRef(null);return Ze.useEffect(()=>{if(!n.current)return;const{pixelRatio:e,aspectRatio:t,width:i,height:r}=Ta(),s=Ub(),a=new Pb,o=new qn(75,t,.1,1e3),l=new wx({antialias:!0,powerPreference:"high-performance"});l.setPixelRatio(e),l.setSize(i,r),n.current.appendChild(l.domElement);const u=new Nb(o,l.domElement);u.enableDamping=!0,u.dampingFactor=.05,u.maxDistance=s.cameraDistance,u.minDistance=s.cameraDistance*.25;let c=null,f=null,d=null;const p=()=>{d!==null&&(c==null||c.dispose(),f==null||f.dispose(),a.remove(d)),c=new gi;const y=new Float32Array(s.starCount*3),S=new Float32Array(s.starCount*3),T=new Float32Array(s.starCount);for(let E=0;E<s.starCount;E++){const C=E*3,M=Math.random()*s.galaxyRadius,w=M*s.spin,U=E%s.arms/s.arms*Math.PI*2,z=Math.pow(Math.random(),s.randomnessPower)*(Math.random()<.5?1:-1)*s.randomness*M,G=Math.pow(Math.random(),s.randomnessPower)*(Math.random()<.5?1:-1)*s.randomness*M,L=Math.pow(Math.random(),s.randomnessPower)*(Math.random()<.5?1:-1)*s.randomness*M;y[C]=Math.cos(U+w)*M+z,y[C+1]=G,y[C+2]=Math.sin(U+w)*M+L;const B=new Ge;B.lerpColors(s.insideColor,s.outsideColor,M/s.galaxyRadius),S[C]=B.r,S[C+1]=B.g,S[C+2]=B.b,T[E]=Math.random()}c.setAttribute("position",new Pt(y,3)),c.setAttribute("color",new Pt(S,3)),c.setAttribute("aScale",new Pt(T,1)),f=new Ax({size:s.particleSize,sizeAttenuation:!0,depthWrite:!1,blending:ja,vertexColors:!0,transparent:!0}),d=new Kd(c,f),d.rotation.x=ox.degToRad(25),a.add(d)},_=()=>{const y=[],S=[new Ge("#ff3080").multiplyScalar(.4),new Ge("#4560ff").multiplyScalar(.4),new Ge("#9932cc").multiplyScalar(.4),new Ge("#ff69b4").multiplyScalar(.4),new Ge("#4169e1").multiplyScalar(.4)];for(let T=0;T<s.nebulaCount;T++){const E=new gi,C=new Float32Array(s.nebulaParticleCount*3),M=new Float32Array(s.nebulaParticleCount*3),w=new Float32Array(s.nebulaParticleCount);for(let G=0;G<s.nebulaParticleCount;G++){const L=G*3,B=(150+Math.random()*100)*(1+Math.sin(Math.random()*Math.PI)*.3),V=Math.random()*Math.PI*2,Y=(Math.random()-.5)*.5;C[L]=B*Math.sin(V)*Math.cos(Y),C[L+1]=B*Math.sin(Y),C[L+2]=B*Math.cos(V)*Math.cos(Y);const H=Math.pow(Math.random(),1.5);M[L]=S[T%S.length].r*H,M[L+1]=S[T%S.length].g*H,M[L+2]=S[T%S.length].b*H;const{isMobile:k}=Ta();w[G]=Math.random()*(k?20:10)}E.setAttribute("position",new Pt(C,3)),E.setAttribute("color",new Pt(M,3)),E.setAttribute("aScale",new Pt(w,1));const U=new Ri({vertexShader:QC,fragmentShader:JC,transparent:!0,depthWrite:!1,blending:ja,vertexColors:!0}),z=new Kd(E,U);z.rotation.x=Math.random()*Math.PI,z.rotation.y=Math.random()*Math.PI,y.push(z),a.add(z)}return y},m=new Fb(s.starFieldCount);a.add(m.getPoints()),p();const g=_();o.position.set(s.cameraDistance*.8,s.cameraDistance*.4,s.cameraDistance*.8),o.lookAt(0,0,0),n.current&&(n.current.style.opacity="0"),cn.to(o.position,{x:s.cameraDistance*.4,y:s.cameraDistance*.2,z:s.cameraDistance*.4,duration:2.5,ease:"power2.inOut",delay:.5}),cn.to(n.current,{opacity:1,duration:2,delay:.5});const h=new Lb,v=()=>{const y=h.getElapsedTime();d&&(d.rotation.y=y*.05),m.update(y),g.forEach((S,T)=>{S.rotation.y=y*.02*(T+1),S.rotation.z=y*.01*(T+1)}),u.update(),l.render(a,o),requestAnimationFrame(v)};v();const x=()=>{const{aspectRatio:y,width:S,height:T}=Ta();o.aspect=y,o.updateProjectionMatrix(),l.setSize(S,T)};return window.addEventListener("resize",x),()=>{var y;window.removeEventListener("resize",x),m.dispose(),g.forEach(S=>{S.geometry.dispose(),S.material.dispose()}),(y=n.current)==null||y.removeChild(l.domElement)}},[]),ee.jsx("div",{ref:n,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,background:"linear-gradient(to bottom, #0a001f, #1a0b2e, #261447)",opacity:0}})};var Ay={exports:{}};(function(n,e){(function(t,i){n.exports=i(Ze)})(typeof self<"u"?self:Fy,t=>(()=>{var i={7403:(o,l,u)=>{u.d(l,{default:()=>H});var c=u(4087),f=u.n(c);const d=function(k){return new RegExp(/<[a-z][\s\S]*>/i).test(k)},p=function(k,I){return Math.floor(Math.random()*(I-k+1))+k};var _="TYPE_CHARACTER",m="REMOVE_CHARACTER",g="REMOVE_ALL",h="REMOVE_LAST_VISIBLE_NODE",v="PAUSE_FOR",x="CALL_FUNCTION",y="ADD_HTML_TAG_ELEMENT",S="CHANGE_DELETE_SPEED",T="CHANGE_DELAY",E="CHANGE_CURSOR",C="PASTE_STRING",M="HTML_TAG";function w(k){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I},w(k)}function U(k,I){var P=Object.keys(k);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(k);I&&(O=O.filter(function(oe){return Object.getOwnPropertyDescriptor(k,oe).enumerable})),P.push.apply(P,O)}return P}function z(k){for(var I=1;I<arguments.length;I++){var P=arguments[I]!=null?arguments[I]:{};I%2?U(Object(P),!0).forEach(function(O){V(k,O,P[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(k,Object.getOwnPropertyDescriptors(P)):U(Object(P)).forEach(function(O){Object.defineProperty(k,O,Object.getOwnPropertyDescriptor(P,O))})}return k}function G(k){return function(I){if(Array.isArray(I))return L(I)}(k)||function(I){if(typeof Symbol<"u"&&I[Symbol.iterator]!=null||I["@@iterator"]!=null)return Array.from(I)}(k)||function(I,P){if(I){if(typeof I=="string")return L(I,P);var O=Object.prototype.toString.call(I).slice(8,-1);return O==="Object"&&I.constructor&&(O=I.constructor.name),O==="Map"||O==="Set"?Array.from(I):O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)?L(I,P):void 0}}(k)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function L(k,I){(I==null||I>k.length)&&(I=k.length);for(var P=0,O=new Array(I);P<I;P++)O[P]=k[P];return O}function B(k,I){for(var P=0;P<I.length;P++){var O=I[P];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(k,Y(O.key),O)}}function V(k,I,P){return(I=Y(I))in k?Object.defineProperty(k,I,{value:P,enumerable:!0,configurable:!0,writable:!0}):k[I]=P,k}function Y(k){var I=function(P,O){if(w(P)!=="object"||P===null)return P;var oe=P[Symbol.toPrimitive];if(oe!==void 0){var N=oe.call(P,"string");if(w(N)!=="object")return N;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(P)}(k);return w(I)==="symbol"?I:String(I)}const H=function(){function k(O,oe){var N=this;if(function(J,me){if(!(J instanceof me))throw new TypeError("Cannot call a class as a function")}(this,k),V(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),V(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),V(this,"setupWrapperElement",function(){N.state.elements.container&&(N.state.elements.wrapper.className=N.options.wrapperClassName,N.state.elements.cursor.className=N.options.cursorClassName,N.state.elements.cursor.innerHTML=N.options.cursor,N.state.elements.container.innerHTML="",N.state.elements.container.appendChild(N.state.elements.wrapper),N.state.elements.container.appendChild(N.state.elements.cursor))}),V(this,"start",function(){return N.state.eventLoopPaused=!1,N.runEventLoop(),N}),V(this,"pause",function(){return N.state.eventLoopPaused=!0,N}),V(this,"stop",function(){return N.state.eventLoop&&((0,c.cancel)(N.state.eventLoop),N.state.eventLoop=null),N}),V(this,"pauseFor",function(J){return N.addEventToQueue(v,{ms:J}),N}),V(this,"typeOutAllStrings",function(){return typeof N.options.strings=="string"?(N.typeString(N.options.strings).pauseFor(N.options.pauseFor),N):(N.options.strings.forEach(function(J){N.typeString(J).pauseFor(N.options.pauseFor).deleteAll(N.options.deleteSpeed)}),N)}),V(this,"typeString",function(J){var me=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(d(J))return N.typeOutHTMLString(J,me);if(J){var xe=(N.options||{}).stringSplitter,ye=typeof xe=="function"?xe(J):J.split("");N.typeCharacters(ye,me)}return N}),V(this,"pasteString",function(J){var me=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return d(J)?N.typeOutHTMLString(J,me,!0):(J&&N.addEventToQueue(C,{character:J,node:me}),N)}),V(this,"typeOutHTMLString",function(J){var me=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,xe=arguments.length>2?arguments[2]:void 0,ye=function(gt){var Se=document.createElement("div");return Se.innerHTML=gt,Se.childNodes}(J);if(ye.length>0)for(var Pe=0;Pe<ye.length;Pe++){var be=ye[Pe],j=be.innerHTML;be&&be.nodeType!==3?(be.innerHTML="",N.addEventToQueue(y,{node:be,parentNode:me}),xe?N.pasteString(j,be):N.typeString(j,be)):be.textContent&&(xe?N.pasteString(be.textContent,me):N.typeString(be.textContent,me))}return N}),V(this,"deleteAll",function(){var J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return N.addEventToQueue(g,{speed:J}),N}),V(this,"changeDeleteSpeed",function(J){if(!J)throw new Error("Must provide new delete speed");return N.addEventToQueue(S,{speed:J}),N}),V(this,"changeDelay",function(J){if(!J)throw new Error("Must provide new delay");return N.addEventToQueue(T,{delay:J}),N}),V(this,"changeCursor",function(J){if(!J)throw new Error("Must provide new cursor");return N.addEventToQueue(E,{cursor:J}),N}),V(this,"deleteChars",function(J){if(!J)throw new Error("Must provide amount of characters to delete");for(var me=0;me<J;me++)N.addEventToQueue(m);return N}),V(this,"callFunction",function(J,me){if(!J||typeof J!="function")throw new Error("Callback must be a function");return N.addEventToQueue(x,{cb:J,thisArg:me}),N}),V(this,"typeCharacters",function(J){var me=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!J||!Array.isArray(J))throw new Error("Characters must be an array");return J.forEach(function(xe){N.addEventToQueue(_,{character:xe,node:me})}),N}),V(this,"removeCharacters",function(J){if(!J||!Array.isArray(J))throw new Error("Characters must be an array");return J.forEach(function(){N.addEventToQueue(m)}),N}),V(this,"addEventToQueue",function(J,me){var xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return N.addEventToStateProperty(J,me,xe,"eventQueue")}),V(this,"addReverseCalledEvent",function(J,me){var xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return N.options.loop?N.addEventToStateProperty(J,me,xe,"reverseCalledEvents"):N}),V(this,"addEventToStateProperty",function(J,me){var xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2],ye=arguments.length>3?arguments[3]:void 0,Pe={eventName:J,eventArgs:me||{}};return N.state[ye]=xe?[Pe].concat(G(N.state[ye])):[].concat(G(N.state[ye]),[Pe]),N}),V(this,"runEventLoop",function(){N.state.lastFrameTime||(N.state.lastFrameTime=Date.now());var J=Date.now(),me=J-N.state.lastFrameTime;if(!N.state.eventQueue.length){if(!N.options.loop)return;N.state.eventQueue=G(N.state.calledEvents),N.state.calledEvents=[],N.options=z({},N.state.initialOptions)}if(N.state.eventLoop=f()(N.runEventLoop),!N.state.eventLoopPaused){if(N.state.pauseUntil){if(J<N.state.pauseUntil)return;N.state.pauseUntil=null}var xe,ye=G(N.state.eventQueue),Pe=ye.shift();if(!(me<=(xe=Pe.eventName===h||Pe.eventName===m?N.options.deleteSpeed==="natural"?p(40,80):N.options.deleteSpeed:N.options.delay==="natural"?p(120,160):N.options.delay))){var be=Pe.eventName,j=Pe.eventArgs;switch(N.logInDevMode({currentEvent:Pe,state:N.state,delay:xe}),be){case C:case _:var gt=j.character,Se=j.node,Le=document.createTextNode(gt),Ce=Le;N.options.onCreateTextNode&&typeof N.options.onCreateTextNode=="function"&&(Ce=N.options.onCreateTextNode(gt,Le)),Ce&&(Se?Se.appendChild(Ce):N.state.elements.wrapper.appendChild(Ce)),N.state.visibleNodes=[].concat(G(N.state.visibleNodes),[{type:"TEXT_NODE",character:gt,node:Ce}]);break;case m:ye.unshift({eventName:h,eventArgs:{removingCharacterNode:!0}});break;case v:var tt=Pe.eventArgs.ms;N.state.pauseUntil=Date.now()+parseInt(tt);break;case x:var Ie=Pe.eventArgs,Oe=Ie.cb,qe=Ie.thisArg;Oe.call(qe,{elements:N.state.elements});break;case y:var ct=Pe.eventArgs,_t=ct.node,R=ct.parentNode;R?R.appendChild(_t):N.state.elements.wrapper.appendChild(_t),N.state.visibleNodes=[].concat(G(N.state.visibleNodes),[{type:M,node:_t,parentNode:R||N.state.elements.wrapper}]);break;case g:var A=N.state.visibleNodes,q=j.speed,se=[];q&&se.push({eventName:S,eventArgs:{speed:q,temp:!0}});for(var ne=0,ae=A.length;ne<ae;ne++)se.push({eventName:h,eventArgs:{removingCharacterNode:!1}});q&&se.push({eventName:S,eventArgs:{speed:N.options.deleteSpeed,temp:!0}}),ye.unshift.apply(ye,se);break;case h:var Me=Pe.eventArgs.removingCharacterNode;if(N.state.visibleNodes.length){var ue=N.state.visibleNodes.pop(),pe=ue.type,D=ue.node,le=ue.character;N.options.onRemoveNode&&typeof N.options.onRemoveNode=="function"&&N.options.onRemoveNode({node:D,character:le}),D&&D.parentNode.removeChild(D),pe===M&&Me&&ye.unshift({eventName:h,eventArgs:{}})}break;case S:N.options.deleteSpeed=Pe.eventArgs.speed;break;case T:N.options.delay=Pe.eventArgs.delay;break;case E:N.options.cursor=Pe.eventArgs.cursor,N.state.elements.cursor.innerHTML=Pe.eventArgs.cursor}N.options.loop&&(Pe.eventName===h||Pe.eventArgs&&Pe.eventArgs.temp||(N.state.calledEvents=[].concat(G(N.state.calledEvents),[Pe]))),N.state.eventQueue=ye,N.state.lastFrameTime=J}}}),O)if(typeof O=="string"){var de=document.querySelector(O);if(!de)throw new Error("Could not find container element");this.state.elements.container=de}else this.state.elements.container=O;oe&&(this.options=z(z({},this.options),oe)),this.state.initialOptions=z({},this.options),this.init()}var I,P;return I=k,(P=[{key:"init",value:function(){var O,oe;this.setupWrapperElement(),this.addEventToQueue(E,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(O=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(oe=document.createElement("style")).appendChild(document.createTextNode(O)),document.head.appendChild(oe),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(O){this.options.devMode&&console.log(O)}}])&&B(I.prototype,P),Object.defineProperty(I,"prototype",{writable:!1}),k}()},8552:(o,l,u)=>{var c=u(852)(u(5639),"DataView");o.exports=c},1989:(o,l,u)=>{var c=u(1789),f=u(401),d=u(7667),p=u(1327),_=u(1866);function m(g){var h=-1,v=g==null?0:g.length;for(this.clear();++h<v;){var x=g[h];this.set(x[0],x[1])}}m.prototype.clear=c,m.prototype.delete=f,m.prototype.get=d,m.prototype.has=p,m.prototype.set=_,o.exports=m},8407:(o,l,u)=>{var c=u(7040),f=u(4125),d=u(2117),p=u(7518),_=u(4705);function m(g){var h=-1,v=g==null?0:g.length;for(this.clear();++h<v;){var x=g[h];this.set(x[0],x[1])}}m.prototype.clear=c,m.prototype.delete=f,m.prototype.get=d,m.prototype.has=p,m.prototype.set=_,o.exports=m},7071:(o,l,u)=>{var c=u(852)(u(5639),"Map");o.exports=c},3369:(o,l,u)=>{var c=u(4785),f=u(1285),d=u(6e3),p=u(9916),_=u(5265);function m(g){var h=-1,v=g==null?0:g.length;for(this.clear();++h<v;){var x=g[h];this.set(x[0],x[1])}}m.prototype.clear=c,m.prototype.delete=f,m.prototype.get=d,m.prototype.has=p,m.prototype.set=_,o.exports=m},3818:(o,l,u)=>{var c=u(852)(u(5639),"Promise");o.exports=c},8525:(o,l,u)=>{var c=u(852)(u(5639),"Set");o.exports=c},8668:(o,l,u)=>{var c=u(3369),f=u(619),d=u(2385);function p(_){var m=-1,g=_==null?0:_.length;for(this.__data__=new c;++m<g;)this.add(_[m])}p.prototype.add=p.prototype.push=f,p.prototype.has=d,o.exports=p},6384:(o,l,u)=>{var c=u(8407),f=u(7465),d=u(3779),p=u(7599),_=u(4758),m=u(4309);function g(h){var v=this.__data__=new c(h);this.size=v.size}g.prototype.clear=f,g.prototype.delete=d,g.prototype.get=p,g.prototype.has=_,g.prototype.set=m,o.exports=g},2705:(o,l,u)=>{var c=u(5639).Symbol;o.exports=c},1149:(o,l,u)=>{var c=u(5639).Uint8Array;o.exports=c},577:(o,l,u)=>{var c=u(852)(u(5639),"WeakMap");o.exports=c},4963:o=>{o.exports=function(l,u){for(var c=-1,f=l==null?0:l.length,d=0,p=[];++c<f;){var _=l[c];u(_,c,l)&&(p[d++]=_)}return p}},4636:(o,l,u)=>{var c=u(2545),f=u(5694),d=u(1469),p=u(4144),_=u(5776),m=u(6719),g=Object.prototype.hasOwnProperty;o.exports=function(h,v){var x=d(h),y=!x&&f(h),S=!x&&!y&&p(h),T=!x&&!y&&!S&&m(h),E=x||y||S||T,C=E?c(h.length,String):[],M=C.length;for(var w in h)!v&&!g.call(h,w)||E&&(w=="length"||S&&(w=="offset"||w=="parent")||T&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||_(w,M))||C.push(w);return C}},2488:o=>{o.exports=function(l,u){for(var c=-1,f=u.length,d=l.length;++c<f;)l[d+c]=u[c];return l}},2908:o=>{o.exports=function(l,u){for(var c=-1,f=l==null?0:l.length;++c<f;)if(u(l[c],c,l))return!0;return!1}},8470:(o,l,u)=>{var c=u(7813);o.exports=function(f,d){for(var p=f.length;p--;)if(c(f[p][0],d))return p;return-1}},8866:(o,l,u)=>{var c=u(2488),f=u(1469);o.exports=function(d,p,_){var m=p(d);return f(d)?m:c(m,_(d))}},4239:(o,l,u)=>{var c=u(2705),f=u(9607),d=u(2333),p=c?c.toStringTag:void 0;o.exports=function(_){return _==null?_===void 0?"[object Undefined]":"[object Null]":p&&p in Object(_)?f(_):d(_)}},9454:(o,l,u)=>{var c=u(4239),f=u(7005);o.exports=function(d){return f(d)&&c(d)=="[object Arguments]"}},939:(o,l,u)=>{var c=u(2492),f=u(7005);o.exports=function d(p,_,m,g,h){return p===_||(p==null||_==null||!f(p)&&!f(_)?p!=p&&_!=_:c(p,_,m,g,d,h))}},2492:(o,l,u)=>{var c=u(6384),f=u(7114),d=u(8351),p=u(6096),_=u(4160),m=u(1469),g=u(4144),h=u(6719),v="[object Arguments]",x="[object Array]",y="[object Object]",S=Object.prototype.hasOwnProperty;o.exports=function(T,E,C,M,w,U){var z=m(T),G=m(E),L=z?x:_(T),B=G?x:_(E),V=(L=L==v?y:L)==y,Y=(B=B==v?y:B)==y,H=L==B;if(H&&g(T)){if(!g(E))return!1;z=!0,V=!1}if(H&&!V)return U||(U=new c),z||h(T)?f(T,E,C,M,w,U):d(T,E,L,C,M,w,U);if(!(1&C)){var k=V&&S.call(T,"__wrapped__"),I=Y&&S.call(E,"__wrapped__");if(k||I){var P=k?T.value():T,O=I?E.value():E;return U||(U=new c),w(P,O,C,M,U)}}return!!H&&(U||(U=new c),p(T,E,C,M,w,U))}},8458:(o,l,u)=>{var c=u(3560),f=u(5346),d=u(3218),p=u(346),_=/^\[object .+?Constructor\]$/,m=Function.prototype,g=Object.prototype,h=m.toString,v=g.hasOwnProperty,x=RegExp("^"+h.call(v).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");o.exports=function(y){return!(!d(y)||f(y))&&(c(y)?x:_).test(p(y))}},8749:(o,l,u)=>{var c=u(4239),f=u(1780),d=u(7005),p={};p["[object Float32Array]"]=p["[object Float64Array]"]=p["[object Int8Array]"]=p["[object Int16Array]"]=p["[object Int32Array]"]=p["[object Uint8Array]"]=p["[object Uint8ClampedArray]"]=p["[object Uint16Array]"]=p["[object Uint32Array]"]=!0,p["[object Arguments]"]=p["[object Array]"]=p["[object ArrayBuffer]"]=p["[object Boolean]"]=p["[object DataView]"]=p["[object Date]"]=p["[object Error]"]=p["[object Function]"]=p["[object Map]"]=p["[object Number]"]=p["[object Object]"]=p["[object RegExp]"]=p["[object Set]"]=p["[object String]"]=p["[object WeakMap]"]=!1,o.exports=function(_){return d(_)&&f(_.length)&&!!p[c(_)]}},280:(o,l,u)=>{var c=u(5726),f=u(6916),d=Object.prototype.hasOwnProperty;o.exports=function(p){if(!c(p))return f(p);var _=[];for(var m in Object(p))d.call(p,m)&&m!="constructor"&&_.push(m);return _}},2545:o=>{o.exports=function(l,u){for(var c=-1,f=Array(l);++c<l;)f[c]=u(c);return f}},1717:o=>{o.exports=function(l){return function(u){return l(u)}}},4757:o=>{o.exports=function(l,u){return l.has(u)}},4429:(o,l,u)=>{var c=u(5639)["__core-js_shared__"];o.exports=c},7114:(o,l,u)=>{var c=u(8668),f=u(2908),d=u(4757);o.exports=function(p,_,m,g,h,v){var x=1&m,y=p.length,S=_.length;if(y!=S&&!(x&&S>y))return!1;var T=v.get(p),E=v.get(_);if(T&&E)return T==_&&E==p;var C=-1,M=!0,w=2&m?new c:void 0;for(v.set(p,_),v.set(_,p);++C<y;){var U=p[C],z=_[C];if(g)var G=x?g(z,U,C,_,p,v):g(U,z,C,p,_,v);if(G!==void 0){if(G)continue;M=!1;break}if(w){if(!f(_,function(L,B){if(!d(w,B)&&(U===L||h(U,L,m,g,v)))return w.push(B)})){M=!1;break}}else if(U!==z&&!h(U,z,m,g,v)){M=!1;break}}return v.delete(p),v.delete(_),M}},8351:(o,l,u)=>{var c=u(2705),f=u(1149),d=u(7813),p=u(7114),_=u(8776),m=u(1814),g=c?c.prototype:void 0,h=g?g.valueOf:void 0;o.exports=function(v,x,y,S,T,E,C){switch(y){case"[object DataView]":if(v.byteLength!=x.byteLength||v.byteOffset!=x.byteOffset)return!1;v=v.buffer,x=x.buffer;case"[object ArrayBuffer]":return!(v.byteLength!=x.byteLength||!E(new f(v),new f(x)));case"[object Boolean]":case"[object Date]":case"[object Number]":return d(+v,+x);case"[object Error]":return v.name==x.name&&v.message==x.message;case"[object RegExp]":case"[object String]":return v==x+"";case"[object Map]":var M=_;case"[object Set]":var w=1&S;if(M||(M=m),v.size!=x.size&&!w)return!1;var U=C.get(v);if(U)return U==x;S|=2,C.set(v,x);var z=p(M(v),M(x),S,T,E,C);return C.delete(v),z;case"[object Symbol]":if(h)return h.call(v)==h.call(x)}return!1}},6096:(o,l,u)=>{var c=u(8234),f=Object.prototype.hasOwnProperty;o.exports=function(d,p,_,m,g,h){var v=1&_,x=c(d),y=x.length;if(y!=c(p).length&&!v)return!1;for(var S=y;S--;){var T=x[S];if(!(v?T in p:f.call(p,T)))return!1}var E=h.get(d),C=h.get(p);if(E&&C)return E==p&&C==d;var M=!0;h.set(d,p),h.set(p,d);for(var w=v;++S<y;){var U=d[T=x[S]],z=p[T];if(m)var G=v?m(z,U,T,p,d,h):m(U,z,T,d,p,h);if(!(G===void 0?U===z||g(U,z,_,m,h):G)){M=!1;break}w||(w=T=="constructor")}if(M&&!w){var L=d.constructor,B=p.constructor;L==B||!("constructor"in d)||!("constructor"in p)||typeof L=="function"&&L instanceof L&&typeof B=="function"&&B instanceof B||(M=!1)}return h.delete(d),h.delete(p),M}},1957:(o,l,u)=>{var c=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g;o.exports=c},8234:(o,l,u)=>{var c=u(8866),f=u(9551),d=u(3674);o.exports=function(p){return c(p,d,f)}},5050:(o,l,u)=>{var c=u(7019);o.exports=function(f,d){var p=f.__data__;return c(d)?p[typeof d=="string"?"string":"hash"]:p.map}},852:(o,l,u)=>{var c=u(8458),f=u(7801);o.exports=function(d,p){var _=f(d,p);return c(_)?_:void 0}},9607:(o,l,u)=>{var c=u(2705),f=Object.prototype,d=f.hasOwnProperty,p=f.toString,_=c?c.toStringTag:void 0;o.exports=function(m){var g=d.call(m,_),h=m[_];try{m[_]=void 0;var v=!0}catch{}var x=p.call(m);return v&&(g?m[_]=h:delete m[_]),x}},9551:(o,l,u)=>{var c=u(4963),f=u(479),d=Object.prototype.propertyIsEnumerable,p=Object.getOwnPropertySymbols,_=p?function(m){return m==null?[]:(m=Object(m),c(p(m),function(g){return d.call(m,g)}))}:f;o.exports=_},4160:(o,l,u)=>{var c=u(8552),f=u(7071),d=u(3818),p=u(8525),_=u(577),m=u(4239),g=u(346),h="[object Map]",v="[object Promise]",x="[object Set]",y="[object WeakMap]",S="[object DataView]",T=g(c),E=g(f),C=g(d),M=g(p),w=g(_),U=m;(c&&U(new c(new ArrayBuffer(1)))!=S||f&&U(new f)!=h||d&&U(d.resolve())!=v||p&&U(new p)!=x||_&&U(new _)!=y)&&(U=function(z){var G=m(z),L=G=="[object Object]"?z.constructor:void 0,B=L?g(L):"";if(B)switch(B){case T:return S;case E:return h;case C:return v;case M:return x;case w:return y}return G}),o.exports=U},7801:o=>{o.exports=function(l,u){return l==null?void 0:l[u]}},1789:(o,l,u)=>{var c=u(4536);o.exports=function(){this.__data__=c?c(null):{},this.size=0}},401:o=>{o.exports=function(l){var u=this.has(l)&&delete this.__data__[l];return this.size-=u?1:0,u}},7667:(o,l,u)=>{var c=u(4536),f=Object.prototype.hasOwnProperty;o.exports=function(d){var p=this.__data__;if(c){var _=p[d];return _==="__lodash_hash_undefined__"?void 0:_}return f.call(p,d)?p[d]:void 0}},1327:(o,l,u)=>{var c=u(4536),f=Object.prototype.hasOwnProperty;o.exports=function(d){var p=this.__data__;return c?p[d]!==void 0:f.call(p,d)}},1866:(o,l,u)=>{var c=u(4536);o.exports=function(f,d){var p=this.__data__;return this.size+=this.has(f)?0:1,p[f]=c&&d===void 0?"__lodash_hash_undefined__":d,this}},5776:o=>{var l=/^(?:0|[1-9]\d*)$/;o.exports=function(u,c){var f=typeof u;return!!(c=c??9007199254740991)&&(f=="number"||f!="symbol"&&l.test(u))&&u>-1&&u%1==0&&u<c}},7019:o=>{o.exports=function(l){var u=typeof l;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?l!=="__proto__":l===null}},5346:(o,l,u)=>{var c,f=u(4429),d=(c=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";o.exports=function(p){return!!d&&d in p}},5726:o=>{var l=Object.prototype;o.exports=function(u){var c=u&&u.constructor;return u===(typeof c=="function"&&c.prototype||l)}},7040:o=>{o.exports=function(){this.__data__=[],this.size=0}},4125:(o,l,u)=>{var c=u(8470),f=Array.prototype.splice;o.exports=function(d){var p=this.__data__,_=c(p,d);return!(_<0||(_==p.length-1?p.pop():f.call(p,_,1),--this.size,0))}},2117:(o,l,u)=>{var c=u(8470);o.exports=function(f){var d=this.__data__,p=c(d,f);return p<0?void 0:d[p][1]}},7518:(o,l,u)=>{var c=u(8470);o.exports=function(f){return c(this.__data__,f)>-1}},4705:(o,l,u)=>{var c=u(8470);o.exports=function(f,d){var p=this.__data__,_=c(p,f);return _<0?(++this.size,p.push([f,d])):p[_][1]=d,this}},4785:(o,l,u)=>{var c=u(1989),f=u(8407),d=u(7071);o.exports=function(){this.size=0,this.__data__={hash:new c,map:new(d||f),string:new c}}},1285:(o,l,u)=>{var c=u(5050);o.exports=function(f){var d=c(this,f).delete(f);return this.size-=d?1:0,d}},6e3:(o,l,u)=>{var c=u(5050);o.exports=function(f){return c(this,f).get(f)}},9916:(o,l,u)=>{var c=u(5050);o.exports=function(f){return c(this,f).has(f)}},5265:(o,l,u)=>{var c=u(5050);o.exports=function(f,d){var p=c(this,f),_=p.size;return p.set(f,d),this.size+=p.size==_?0:1,this}},8776:o=>{o.exports=function(l){var u=-1,c=Array(l.size);return l.forEach(function(f,d){c[++u]=[d,f]}),c}},4536:(o,l,u)=>{var c=u(852)(Object,"create");o.exports=c},6916:(o,l,u)=>{var c=u(5569)(Object.keys,Object);o.exports=c},1167:(o,l,u)=>{o=u.nmd(o);var c=u(1957),f=l&&!l.nodeType&&l,d=f&&o&&!o.nodeType&&o,p=d&&d.exports===f&&c.process,_=function(){try{return d&&d.require&&d.require("util").types||p&&p.binding&&p.binding("util")}catch{}}();o.exports=_},2333:o=>{var l=Object.prototype.toString;o.exports=function(u){return l.call(u)}},5569:o=>{o.exports=function(l,u){return function(c){return l(u(c))}}},5639:(o,l,u)=>{var c=u(1957),f=typeof self=="object"&&self&&self.Object===Object&&self,d=c||f||Function("return this")();o.exports=d},619:o=>{o.exports=function(l){return this.__data__.set(l,"__lodash_hash_undefined__"),this}},2385:o=>{o.exports=function(l){return this.__data__.has(l)}},1814:o=>{o.exports=function(l){var u=-1,c=Array(l.size);return l.forEach(function(f){c[++u]=f}),c}},7465:(o,l,u)=>{var c=u(8407);o.exports=function(){this.__data__=new c,this.size=0}},3779:o=>{o.exports=function(l){var u=this.__data__,c=u.delete(l);return this.size=u.size,c}},7599:o=>{o.exports=function(l){return this.__data__.get(l)}},4758:o=>{o.exports=function(l){return this.__data__.has(l)}},4309:(o,l,u)=>{var c=u(8407),f=u(7071),d=u(3369);o.exports=function(p,_){var m=this.__data__;if(m instanceof c){var g=m.__data__;if(!f||g.length<199)return g.push([p,_]),this.size=++m.size,this;m=this.__data__=new d(g)}return m.set(p,_),this.size=m.size,this}},346:o=>{var l=Function.prototype.toString;o.exports=function(u){if(u!=null){try{return l.call(u)}catch{}try{return u+""}catch{}}return""}},7813:o=>{o.exports=function(l,u){return l===u||l!=l&&u!=u}},5694:(o,l,u)=>{var c=u(9454),f=u(7005),d=Object.prototype,p=d.hasOwnProperty,_=d.propertyIsEnumerable,m=c(function(){return arguments}())?c:function(g){return f(g)&&p.call(g,"callee")&&!_.call(g,"callee")};o.exports=m},1469:o=>{var l=Array.isArray;o.exports=l},8612:(o,l,u)=>{var c=u(3560),f=u(1780);o.exports=function(d){return d!=null&&f(d.length)&&!c(d)}},4144:(o,l,u)=>{o=u.nmd(o);var c=u(5639),f=u(5062),d=l&&!l.nodeType&&l,p=d&&o&&!o.nodeType&&o,_=p&&p.exports===d?c.Buffer:void 0,m=(_?_.isBuffer:void 0)||f;o.exports=m},8446:(o,l,u)=>{var c=u(939);o.exports=function(f,d){return c(f,d)}},3560:(o,l,u)=>{var c=u(4239),f=u(3218);o.exports=function(d){if(!f(d))return!1;var p=c(d);return p=="[object Function]"||p=="[object GeneratorFunction]"||p=="[object AsyncFunction]"||p=="[object Proxy]"}},1780:o=>{o.exports=function(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=9007199254740991}},3218:o=>{o.exports=function(l){var u=typeof l;return l!=null&&(u=="object"||u=="function")}},7005:o=>{o.exports=function(l){return l!=null&&typeof l=="object"}},6719:(o,l,u)=>{var c=u(8749),f=u(1717),d=u(1167),p=d&&d.isTypedArray,_=p?f(p):c;o.exports=_},3674:(o,l,u)=>{var c=u(4636),f=u(280),d=u(8612);o.exports=function(p){return d(p)?c(p):f(p)}},479:o=>{o.exports=function(){return[]}},5062:o=>{o.exports=function(){return!1}},75:function(o){(function(){var l,u,c,f,d,p;typeof performance<"u"&&performance!==null&&performance.now?o.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(o.exports=function(){return(l()-d)/1e6},u=process.hrtime,f=(l=function(){var _;return 1e9*(_=u())[0]+_[1]})(),p=1e9*process.uptime(),d=f-p):Date.now?(o.exports=function(){return Date.now()-c},c=Date.now()):(o.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(o,l,u)=>{for(var c=u(75),f=typeof window>"u"?u.g:window,d=["moz","webkit"],p="AnimationFrame",_=f["request"+p],m=f["cancel"+p]||f["cancelRequest"+p],g=0;!_&&g<d.length;g++)_=f[d[g]+"Request"+p],m=f[d[g]+"Cancel"+p]||f[d[g]+"CancelRequest"+p];if(!_||!m){var h=0,v=0,x=[];_=function(y){if(x.length===0){var S=c(),T=Math.max(0,16.666666666666668-(S-h));h=T+S,setTimeout(function(){var E=x.slice(0);x.length=0;for(var C=0;C<E.length;C++)if(!E[C].cancelled)try{E[C].callback(h)}catch(M){setTimeout(function(){throw M},0)}},Math.round(T))}return x.push({handle:++v,callback:y,cancelled:!1}),v},m=function(y){for(var S=0;S<x.length;S++)x[S].handle===y&&(x[S].cancelled=!0)}}o.exports=function(y){return _.call(f,y)},o.exports.cancel=function(){m.apply(f,arguments)},o.exports.polyfill=function(y){y||(y=f),y.requestAnimationFrame=_,y.cancelAnimationFrame=m}},8156:o=>{o.exports=t}},r={};function s(o){var l=r[o];if(l!==void 0)return l.exports;var u=r[o]={id:o,loaded:!1,exports:{}};return i[o].call(u.exports,u,u.exports,s),u.loaded=!0,u.exports}s.n=o=>{var l=o&&o.__esModule?()=>o.default:()=>o;return s.d(l,{a:l}),l},s.d=(o,l)=>{for(var u in l)s.o(l,u)&&!s.o(o,u)&&Object.defineProperty(o,u,{enumerable:!0,get:l[u]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(o,l)=>Object.prototype.hasOwnProperty.call(o,l),s.nmd=o=>(o.paths=[],o.children||(o.children=[]),o);var a={};return(()=>{s.d(a,{default:()=>x});var o=s(8156),l=s.n(o),u=s(7403),c=s(8446),f=s.n(c);function d(y){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},d(y)}function p(y,S){for(var T=0;T<S.length;T++){var E=S[T];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(y,h(E.key),E)}}function _(y,S){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(T,E){return T.__proto__=E,T},_(y,S)}function m(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function g(y){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(S){return S.__proto__||Object.getPrototypeOf(S)},g(y)}function h(y){var S=function(T,E){if(d(T)!=="object"||T===null)return T;var C=T[Symbol.toPrimitive];if(C!==void 0){var M=C.call(T,"string");if(d(M)!=="object")return M;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(T)}(y);return d(S)==="symbol"?S:String(S)}var v=function(y){(function(U,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");U.prototype=Object.create(z&&z.prototype,{constructor:{value:U,writable:!0,configurable:!0}}),Object.defineProperty(U,"prototype",{writable:!1}),z&&_(U,z)})(w,y);var S,T,E,C,M=(E=w,C=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var U,z=g(E);if(C){var G=g(this).constructor;U=Reflect.construct(z,arguments,G)}else U=z.apply(this,arguments);return function(L,B){if(B&&(d(B)==="object"||typeof B=="function"))return B;if(B!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(L)}(this,U)});function w(){var U,z,G,L;(function(H,k){if(!(H instanceof k))throw new TypeError("Cannot call a class as a function")})(this,w);for(var B=arguments.length,V=new Array(B),Y=0;Y<B;Y++)V[Y]=arguments[Y];return z=m(U=M.call.apply(M,[this].concat(V))),L={instance:null},(G=h(G="state"))in z?Object.defineProperty(z,G,{value:L,enumerable:!0,configurable:!0,writable:!0}):z[G]=L,U}return S=w,(T=[{key:"componentDidMount",value:function(){var U=this,z=new u.default(this.typewriter,this.props.options);this.setState({instance:z},function(){var G=U.props.onInit;G&&G(z)})}},{key:"componentDidUpdate",value:function(U){f()(this.props.options,U.options)||this.setState({instance:new u.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var U=this,z=this.props.component;return l().createElement(z,{ref:function(G){return U.typewriter=G},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&p(S.prototype,T),Object.defineProperty(S,"prototype",{writable:!1}),w}(o.Component);v.defaultProps={component:"div"};const x=v})(),a.default})())})(Ay);var tR=Ay.exports;const nR=O_(tR);function iR(){const n=Ze.useRef(null),e=Ze.useRef(null);return Ze.useEffect(()=>{n.current&&e.current&&(cn.set(e.current,{opacity:0,y:30}),cn.timeline({delay:2.5}).to(e.current,{opacity:1,y:0,duration:1,ease:"power3.out"}))},[]),ee.jsx("div",{ref:n,className:"w-full flex items-center justify-center px-4 sm:px-6 lg:px-8",children:ee.jsxs("div",{ref:e,className:"max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] text-center",children:[ee.jsxs("h1",{className:"drop-shadow-[0_2px_2px_rgba(0,0,0,1)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 leading-tight tracking-tight",children:["Hello, I am ",ee.jsx("span",{className:"font-bold",children:"Masaru"}),"!"," ","/ᐠ - ˕ -マ Ⳋ"]}),ee.jsxs("div",{className:"text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex flex-wrap items-center gap-2",children:[ee.jsx("span",{className:"drop-shadow-[0_2px_2px_rgba(0,0,0,1)]",children:"I am a freelance"}),ee.jsx("span",{className:"drop-shadow-[0_2px_2px_rgba(0,0,0,1)] text-cyan-300 text-left font-bold min-w-[120px] sm:min-w-[150px] md:min-w-[180px] inline-block",children:ee.jsx(nR,{options:{strings:["Developer","Illustrator"],autoStart:!0,loop:!0,delay:150,deleteSpeed:80,cursor:"_"}})})]})]})})}const Pp=Ze.forwardRef(({text:n,href:e,isMobile:t,onClick:i},r)=>{const s=`
      text-white/90 hover:text-cyan-300/90 transition-colors duration-300
      font-bold tracking-wide
      ${t?"text-2xl py-4 px-6":"text-base sm:text-lg md:text-xl lg:text-xl px-3 py-2"}
      font-['Space_Grotesk'] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
    `;return i?ee.jsx("button",{ref:r,onClick:i,className:s,children:n}):ee.jsx("a",{ref:r,href:e,className:s,children:n})});Pp.displayName="NavItem";const by=[{text:"About",href:"#about"},{text:"Coding",href:"#coding"},{text:"Artwork",href:"#artwork"},{text:"Contact",href:"#contact"}],rR=({isOpen:n,onClose:e,onItemClick:t})=>ee.jsxs("div",{className:`
        fixed inset-0 z-50 bg-black/95 backdrop-blur-lg
        transform transition-transform duration-300 ease-in-out
        flex flex-col items-center justify-center
        ${n?"translate-x-0":"translate-x-full"}
      `,children:[ee.jsx("button",{onClick:e,className:"absolute top-6 right-6 text-white/90 hover:text-white",children:ee.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:ee.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),ee.jsx("div",{className:"flex flex-col items-center gap-8",children:by.map(i=>ee.jsx(Pp,{text:i.text,onClick:()=>t(i.text),isMobile:!0},i.text))})]}),sR=({isActive:n})=>ee.jsx("div",{className:"absolute inset-0 pointer-events-none",children:ee.jsx("div",{className:`
          absolute inset-0 
          ${n?"animate-border-chase":""}
          before:absolute before:inset-0 before:blur-[2px]
          before:animate-border-chase before:opacity-70
          after:absolute after:inset-0 after:blur-[4px]
          after:animate-border-chase after:opacity-40
        `})}),oR=({title:n,children:e})=>ee.jsxs("div",{className:"relative bg-[#0a001f]/50 backdrop-blur-xl rounded-2xl overflow-hidden",children:[ee.jsxs("div",{className:"font-['Space_Grotesk'] relative z-10 p-6 sm:p-8 border border-white/10",children:[ee.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]",children:n}),ee.jsx("div",{className:"text-white/90 text-base sm:text-lg space-y-4",children:e})]}),ee.jsx(sR,{isActive:!0}),ee.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))",filter:"blur(20px)",opacity:.5}})]}),aR=({onClose:n})=>ee.jsx("div",{onClick:n,className:"absolute inset-0 bg-black/60 backdrop-blur-md",style:{background:"radial-gradient(circle at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)"}}),Lc=({isOpen:n,onClose:e,title:t,children:i})=>{const r=Ze.useRef(null),s=Ze.useRef(null),[a,o]=Ze.useState(!1);Ze.useEffect(()=>{n&&r.current&&s.current&&(o(!1),cn.set(r.current,{opacity:0}),cn.set(s.current,{scale:.5,opacity:0,rotationX:45,y:0}),cn.timeline().to(r.current,{opacity:1,duration:.3,ease:"power2.out"}).to(s.current,{scale:1,opacity:1,rotationX:0,duration:.5,ease:"back.out(1.7)"},"-=0.1"))},[n]);const l=()=>{r.current&&s.current&&(o(!0),cn.timeline({onComplete:()=>{e(),o(!1)}}).to(s.current,{scale:.8,opacity:0,rotationX:-45,y:100,duration:.4,ease:"power2.in"}).to(r.current,{opacity:0,duration:.3,ease:"power2.in"},"-=0.2"))};return!n&&!a?null:ee.jsxs("div",{ref:r,className:"fixed inset-0 z-50 flex items-center justify-center p-4 perspective-1000",children:[ee.jsx(aR,{onClose:l}),ee.jsx("div",{ref:s,className:"relative z-10 w-full max-w-2xl",style:{transformStyle:"preserve-3d"},children:ee.jsx(oR,{title:t,children:i})})]})},lR=({isOpen:n,onClose:e})=>ee.jsxs(Lc,{isOpen:n,onClose:e,title:"✨ About Masaru (*≧ω≦*)",children:[ee.jsx("p",{children:"I'm a 21 year-old Asian Software Engineering student in his third year. I can speak both English and Japanese."}),ee.jsxs("p",{children:["I go by"," ",ee.jsx("a",{className:"font-bold text-cyan-200",href:"https://twitter.com/sillycat4725",target:"_blank",children:"@sillycat4725"})," ","as an illustrator on social media. Though I mainly work as a Fullstack Developer, art has always been my main passion. I have been drawing for technically 3 years. However, if we exclude the time I spent on classwork and hiatuses, it's roughly 1 year."]}),ee.jsx("p",{children:"You can hire me for either your tech project or for an art commission. I will happily reply to any inquiries when I'm available. My prices are flexible and provides a great balance between the Eastern and Western market. More information can be found in the other tabs!"})]});var Cy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},U_=os.createContext&&os.createContext(Cy),uR=["attr","size","title"];function cR(n,e){if(n==null)return{};var t=fR(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function fR(n,e){if(n==null)return{};var t={};for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}function sc(){return sc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},sc.apply(this,arguments)}function I_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function oc(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?I_(Object(t),!0).forEach(function(i){dR(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):I_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function dR(n,e,t){return e=hR(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function hR(n){var e=pR(n,"string");return typeof e=="symbol"?e:e+""}function pR(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Ry(n){return n&&n.map((e,t)=>os.createElement(e.tag,oc({key:t},e.attr),Ry(e.child)))}function _i(n){return e=>os.createElement(mR,sc({attr:oc({},n.attr)},e),Ry(n.child))}function mR(n){var e=t=>{var{attr:i,size:r,title:s}=n,a=cR(n,uR),o=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),os.createElement("svg",sc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,a,{className:l,style:oc(oc({color:n.color||t.color},t.style),n.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&os.createElement("title",null,s),n.children)};return U_!==void 0?os.createElement(U_.Consumer,null,t=>e(t)):e(Cy)}function gR(n){return _i({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(n)}function _R(n){return _i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(n)}function vR(n){return _i({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(n)}function xR(n){return _i({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(n)}function yR(n){return _i({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(n)}function SR(n){return _i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function MR(n){return _i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(n)}function ER(n){return _i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(n)}function TR(n){return _i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(n)}function wR(n){return _i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(n)}function AR(n){return _i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(n)}const bR=[{name:"Dori Bot (Offline)",description:"A purely for fun Genshin Impact themed Discord bot with various minigames like Poker, Trivia, Genshin Wish simulator and other utility commands",stars:320,language:"TypeScript, Node.js, Discord.js",url:"https://top.gg/bot/997892574150930523"},{name:"Three.js Portfolio",description:"Well it's this website hehe XDXD",stars:69,language:"Typescript, Tailwind, React, Vite",url:"https://github.com/masaru9002/masaru-portfolio"},{name:"Dsdle",description:"A joke project for my friend group - Wordle clone with our inside jokes as the words",stars:10,language:"HTML, CSS, Javascript",url:"https://github.com/masaru9002/dsdle"}],CR=({isOpen:n,onClose:e})=>ee.jsx(Lc,{isOpen:n,onClose:e,title:"💻 Coding Projects ( ͡⎚ ω ͡⎚)",children:ee.jsx("div",{className:"space-y-4 sm:space-y-6 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto custom-scrollbar",children:bR.map((t,i)=>ee.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"block transform-gpu",children:ee.jsxs("div",{className:"relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 group",children:[ee.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),ee.jsxs("div",{className:"relative transform-gpu transition-transform duration-300 group-hover:scale-[1.02]",children:[ee.jsxs("div",{className:"flex items-center justify-between mb-2 sm:mb-3",children:[ee.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[ee.jsx(AR,{className:"text-xl sm:text-2xl text-white/90"}),ee.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white/90 line-clamp-1",children:t.name})]}),ee.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 text-white/70",children:[ee.jsx(ER,{className:"text-red-400"}),ee.jsx("span",{className:"text-sm sm:text-base",children:t.stars})]})]}),ee.jsx("p",{className:"text-white/70 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2 sm:line-clamp-none",children:t.description}),ee.jsxs("div",{className:"flex items-center gap-2",children:[ee.jsx(yR,{className:"text-white/60 text-sm sm:text-base"}),ee.jsx("span",{className:"text-white/60 text-xs sm:text-sm",children:t.language})]})]})]})},i))})}),ru=[{id:1,title:"Konuri Maki",description:"Maki from Blue Archive on a fashion magazine!",url:"https://pbs.twimg.com/media/GdYzHxlbcAA-mhE?format=jpg&name=large",link:"https://x.com/sillycat4725/status/1861731756786987501/photo/1"},{id:2,title:"Onikata Kayoko",description:"Kayoko from Blue Archive on a fashion magazine!",url:"https://pbs.twimg.com/media/Gcqc603bUAAzHTY?format=jpg&name=4096x4096",link:"https://x.com/sillycat4725/status/1858470357700637135/photo/1"},{id:3,title:"Kuda Izuna",description:"Izuna from Blue Archive on a fashion magazine!",url:"https://pbs.twimg.com/media/GcLjq29asAE-QHg?format=jpg&name=4096x4096",link:"https://x.com/sillycat4725/status/1856296723129479630/photo/1"},{id:4,title:"Ryo and Bocchi",description:"Ryo and Bocchi in the rain meme (hit Tweet)",url:"https://pbs.twimg.com/media/Gc0n-alacAAswxf?format=jpg&name=large",link:"https://x.com/sillycat4725/status/1859187632699559942/photo/1"},{id:5,title:"Silver Wolf",description:"COMMISSION - Silver Wolf in gothic clothing",url:"https://pbs.twimg.com/media/GQ6y3wWaQAE6ypz?format=jpg&name=4096x4096",link:"https://x.com/sillycat4725/status/1805578068641431846/photo/1"},{id:6,title:"Maki Birthday Art",description:"Birthday Doodle for Maki from Blue Archive",url:"https://pbs.twimg.com/media/GT3B7CPasAAltiy?format=png&name=large",link:"https://x.com/sillycat4725/status/1818825090433421364/photo/1"},{id:7,title:"Mikamo Neru",description:"Neru (Bunny outfit) from Blue Archive - 100 day challenge",url:"https://pbs.twimg.com/media/FqXEiW7X0AAFY-g?format=jpg&name=4096x4096",link:"https://x.com/sillycat4725/status/1631926598998933504/photo/1"},{id:8,title:"Shirasu Azusa",description:"Azusa from Blue Archive - 100 day challenge",url:"https://pbs.twimg.com/media/FpVoCSraIAEdsPV?format=jpg&name=4096x4096",link:"https://x.com/sillycat4725/status/1627321471948451840/photo/1"},{id:9,title:"Kuromi Serika",description:"Serika from Blue Archive - 100 day challenge",url:"https://pbs.twimg.com/media/Fo0uY5ZakAAKtRB?format=jpg&name=4096x4096",link:"https://x.com/sillycat4725/status/1625006202869649413/photo/1"},{id:10,title:"Tokoyami Towa",description:"Towa from Hololive - Fanart",url:"https://pbs.twimg.com/media/FXEPXzQUIAAd1wk?format=jpg&name=large",link:"https://x.com/sillycat4725/status/1545033829395488768/photo/1"}],RR=3e3,PR=({isOpen:n,onClose:e})=>{const[t,i]=Ze.useState(0),r=Ze.useRef(null),[s,a]=Ze.useState(!1),[o,l]=Ze.useState(!1),[u,c]=Ze.useState(!0),f=Ze.useRef(null);Ze.useEffect(()=>{const v=()=>{l(window.innerWidth<768)};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]),Ze.useEffect(()=>(n&&u&&d(),()=>p()),[n,u,t]);const d=()=>{p(),f.current=setTimeout(()=>{s||m(t+1)},RR)},p=()=>{f.current&&clearTimeout(f.current)},_=()=>{c(!u)},m=v=>{if(s)return;a(!0);const x=(v+ru.length)%ru.length,y=v>t?-1:1;if(r.current){const S=r.current.children[t],T=r.current.children[x];cn.set(T,{x:`${-y*100}%`,opacity:0}),cn.timeline({onComplete:()=>{i(x),a(!1)}}).to(S,{x:`${y*100}%`,opacity:0,duration:.5,ease:"power2.inOut"}).to(T,{x:"0%",opacity:1,duration:.5,ease:"power2.inOut"},"-=0.5")}},g=()=>{p(),m(t+1)},h=()=>{p(),m(t-1)};return ee.jsx(Lc,{isOpen:n,onClose:e,title:"🎨 Artwork Gallery o(≧▽≦)o",children:ee.jsxs("div",{className:"relative w-full max-w-4xl mx-auto",children:[ee.jsx("div",{className:"relative overflow-hidden rounded-xl",children:ee.jsx("div",{ref:r,className:"relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]",children:ru.map((v,x)=>ee.jsx("div",{className:`absolute inset-0 w-full h-full flex items-center justify-center ${x===t?"opacity-100 z-10":"opacity-0 z-0"}`,children:ee.jsxs("a",{href:v.link,target:"_blank",rel:"noopener noreferrer",className:"relative w-full h-full flex items-center justify-center group cursor-pointer",onClick:y=>{o&&y.preventDefault()},children:[ee.jsx("img",{src:v.url,alt:v.title,className:"w-full h-full object-contain"}),ee.jsx("div",{className:`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent 
                      ${o?"opacity-100":"opacity-0 group-hover:opacity-100"} 
                      transition-opacity duration-300`}),ee.jsxs("div",{className:`absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white
                      ${o?"translate-y-0":"transform translate-y-full group-hover:translate-y-0"} 
                      transition-transform duration-300`,children:[ee.jsxs("div",{className:"flex items-center justify-between mb-2",children:[ee.jsx("h3",{className:"text-xl sm:text-2xl font-bold",children:v.title}),!o&&ee.jsx(MR,{className:"text-white/70 group-hover:text-white transition-colors duration-300"})]}),ee.jsx("p",{className:"text-white/90 text-sm sm:text-base line-clamp-2 sm:line-clamp-none",children:v.description})]})]})},v.id))})}),ee.jsx("button",{onClick:h,className:"absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white/90 hover:bg-white/20 hover:text-white transition-all duration-200 z-20",disabled:s,children:ee.jsx(vR,{className:"text-lg sm:text-xl"})}),ee.jsx("button",{onClick:g,className:"absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white/90 hover:bg-white/20 hover:text-white transition-all duration-200 z-20",disabled:s,children:ee.jsx(xR,{className:"text-lg sm:text-xl"})}),ee.jsxs("div",{className:"flex items-center justify-center gap-4 mt-4",children:[ee.jsx("div",{className:"flex justify-center gap-2",children:ru.map((v,x)=>ee.jsx("button",{onClick:()=>{p(),m(x)},className:`w-2 h-2 rounded-full transition-all duration-300 ${x===t?"bg-white scale-125":"bg-white/30 hover:bg-white/50"}`,disabled:s},x))}),ee.jsx("button",{onClick:_,className:"w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white/90 hover:bg-white/20 hover:text-white transition-all duration-200",children:u?ee.jsx(TR,{className:"text-sm"}):ee.jsx(wR,{className:"text-sm"})})]})]})})},LR=[{name:"Discord",value:"sillycat4725 (click to copy!)",icon:gR,color:"#5865F2",href:"#",onClick:()=>navigator.clipboard.writeText("sillycat4725")},{name:"Twitter",value:"@sillycat4725",icon:_R,color:"#1DA1F2",href:"https://twitter.com/sillycat4725"},{name:"Email",value:"Coming soon :>",icon:SR,color:"#EA4335",href:"#",onClick:()=>{}}],DR=({isOpen:n,onClose:e})=>ee.jsx(Lc,{isOpen:n,onClose:e,title:"💌 Text me whenever! (￣▽￣)ノ",children:ee.jsx("div",{className:"space-y-6",children:LR.map((t,i)=>ee.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"block group",onClick:r=>{t.onClick&&(r.preventDefault(),t.onClick())},children:ee.jsxs("div",{className:"relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl",style:{background:`radial-gradient(circle at center, ${t.color}10 0%, transparent 100%)`},children:[ee.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),ee.jsxs("div",{className:"relative flex items-center gap-4",children:[ee.jsx("div",{className:"p-3 rounded-full bg-white/10 backdrop-blur-sm",style:{color:t.color},children:ee.jsx(t.icon,{className:"w-6 h-6"})}),ee.jsxs("div",{children:[ee.jsx("h3",{className:"text-lg font-bold text-white/90 mb-1",children:t.name}),ee.jsx("p",{className:"text-white/70",children:t.value})]})]})]})},i))})}),NR=()=>{const[n,e]=Ze.useState(!1),[t,i]=Ze.useState(!1),[r,s]=Ze.useState(!1),[a,o]=Ze.useState(!1),[l,u]=Ze.useState(!1),c=Ze.useRef(null),f=Ze.useRef([]),d=Ze.useRef(null);Ze.useEffect(()=>{if(c.current&&d.current){cn.set([c.current,d.current],{}),cn.set(d.current,{y:-50,opacity:0}),f.current.forEach(m=>{m&&cn.set(m,{y:-50,opacity:0})});const _=cn.timeline({delay:2.5});_.to(c.current,{duration:1,ease:"power3.out"}),_.to(d.current,{y:0,opacity:1,duration:.5,ease:"back.out(1.7)"}),f.current.forEach(m=>{m&&_.to(m,{y:0,opacity:1,duration:.5,ease:"back.out(1.7)"},"-=0.4")})}},[]);const p=_=>{switch(_){case"About":i(!0);break;case"Coding":s(!0);break;case"Artwork":o(!0);break;case"Contact":u(!0);break}n&&e(!1)};return ee.jsxs(ee.Fragment,{children:[ee.jsx("nav",{ref:c,className:"fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-4",children:ee.jsx("div",{className:"max-w-7xl mx-auto",children:ee.jsxs("div",{className:"flex items-center justify-between md:justify-end",children:[ee.jsx("button",{ref:d,onClick:()=>e(!0),className:"text-white/90 hover:text-white md:hidden",children:ee.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:ee.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),ee.jsx("div",{className:"hidden md:flex items-center gap-4 lg:gap-8",children:by.map((_,m)=>ee.jsx(Pp,{ref:g=>f.current[m]=g,text:_.text,onClick:()=>p(_.text)},_.text))})]})})}),ee.jsx(rR,{isOpen:n,onClose:()=>e(!1),onItemClick:p}),ee.jsx(lR,{isOpen:t,onClose:()=>i(!1)}),ee.jsx(CR,{isOpen:r,onClose:()=>s(!1)}),ee.jsx(PR,{isOpen:a,onClose:()=>o(!1)}),ee.jsx(DR,{isOpen:l,onClose:()=>u(!1)})]})};function UR(){return ee.jsxs("div",{className:"relative min-h-screen select-none",children:[ee.jsx(eR,{}),ee.jsx(NR,{}),ee.jsx("main",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen text-white",children:ee.jsx("div",{className:"w-full max-w-4xl mx-auto min-h-screen flex items-center justify-center font-['Space_Grotesk']",children:ee.jsx(iR,{})})})]})}$v(document.getElementById("root")).render(ee.jsx(Ze.StrictMode,{children:ee.jsx(UR,{})}));
