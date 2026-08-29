(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var s_={exports:{}},Ju={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eM=Symbol.for("react.transitional.element"),tM=Symbol.for("react.fragment");function r_(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:eM,type:t,key:i,ref:e!==void 0?e:null,props:n}}Ju.Fragment=tM;Ju.jsx=r_;Ju.jsxs=r_;s_.exports=Ju;var Xt=s_.exports,l_={exports:{}},Ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=Symbol.for("react.transitional.element"),nM=Symbol.for("react.portal"),iM=Symbol.for("react.fragment"),aM=Symbol.for("react.strict_mode"),sM=Symbol.for("react.profiler"),rM=Symbol.for("react.consumer"),lM=Symbol.for("react.context"),oM=Symbol.for("react.forward_ref"),uM=Symbol.for("react.suspense"),cM=Symbol.for("react.memo"),o_=Symbol.for("react.lazy"),fM=Symbol.for("react.activity"),om=Symbol.iterator;function hM(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var u_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c_=Object.assign,f_={};function Ur(t,e,n){this.props=t,this.context=e,this.refs=f_,this.updater=n||u_}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ur.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function h_(){}h_.prototype=Ur.prototype;function Od(t,e,n){this.props=t,this.context=e,this.refs=f_,this.updater=n||u_}var Pd=Od.prototype=new h_;Pd.constructor=Od;c_(Pd,Ur.prototype);Pd.isPureReactComponent=!0;var um=Array.isArray;function kf(){}var yt={H:null,A:null,T:null,S:null},d_=Object.prototype.hasOwnProperty;function Fd(t,e,n){var i=n.ref;return{$$typeof:Nd,type:t,key:e,ref:i!==void 0?i:null,props:n}}function dM(t,e){return Fd(t.type,e,t.props)}function Id(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nd}function pM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cm=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pM(""+t.key):e.toString(36)}function mM(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(kf,kf):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ws(t,e,n,i,a){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Nd:case nM:r=!0;break;case o_:return r=t._init,Ws(r(t._payload),e,n,i,a)}}if(r)return a=a(t),r=i===""?"."+yc(t,0):i,um(a)?(n="",r!=null&&(n=r.replace(cm,"$&/")+"/"),Ws(a,e,n,"",function(u){return u})):a!=null&&(Id(a)&&(a=dM(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(cm,"$&/")+"/")+r)),e.push(a)),1;r=0;var l=i===""?".":i+":";if(um(t))for(var o=0;o<t.length;o++)i=t[o],s=l+yc(i,o),r+=Ws(i,e,n,s,a);else if(o=hM(t),typeof o=="function")for(t=o.call(t),o=0;!(i=t.next()).done;)i=i.value,s=l+yc(i,o++),r+=Ws(i,e,n,s,a);else if(s==="object"){if(typeof t.then=="function")return Ws(mM(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function io(t,e,n){if(t==null)return t;var i=[],a=0;return Ws(t,i,"","",function(s){return e.call(n,s,a++)}),i}function gM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fm=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_M={map:io,forEach:function(t,e,n){io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return io(t,function(){e++}),e},toArray:function(t){return io(t,function(e){return e})||[]},only:function(t){if(!Id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ie.Activity=fM;Ie.Children=_M;Ie.Component=Ur;Ie.Fragment=iM;Ie.Profiler=sM;Ie.PureComponent=Od;Ie.StrictMode=aM;Ie.Suspense=uM;Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=yt;Ie.__COMPILER_RUNTIME={__proto__:null,c:function(t){return yt.H.useMemoCache(t)}};Ie.cache=function(t){return function(){return t.apply(null,arguments)}};Ie.cacheSignal=function(){return null};Ie.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=c_({},t.props),a=t.key;if(e!=null)for(s in e.key!==void 0&&(a=""+e.key),e)!d_.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),l=0;l<s;l++)r[l]=arguments[l+2];i.children=r}return Fd(t.type,a,i)};Ie.createContext=function(t){return t={$$typeof:lM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:rM,_context:t},t};Ie.createElement=function(t,e,n){var i,a={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)d_.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var l=Array(r),o=0;o<r;o++)l[o]=arguments[o+2];a.children=l}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Fd(t,s,a)};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(t){return{$$typeof:oM,render:t}};Ie.isValidElement=Id;Ie.lazy=function(t){return{$$typeof:o_,_payload:{_status:-1,_result:t},_init:gM}};Ie.memo=function(t,e){return{$$typeof:cM,type:t,compare:e===void 0?null:e}};Ie.startTransition=function(t){var e=yt.T,n={};yt.T=n;try{var i=t(),a=yt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(kf,fm)}catch(s){fm(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),yt.T=e}};Ie.unstable_useCacheRefresh=function(){return yt.H.useCacheRefresh()};Ie.use=function(t){return yt.H.use(t)};Ie.useActionState=function(t,e,n){return yt.H.useActionState(t,e,n)};Ie.useCallback=function(t,e){return yt.H.useCallback(t,e)};Ie.useContext=function(t){return yt.H.useContext(t)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(t,e){return yt.H.useDeferredValue(t,e)};Ie.useEffect=function(t,e){return yt.H.useEffect(t,e)};Ie.useEffectEvent=function(t){return yt.H.useEffectEvent(t)};Ie.useId=function(){return yt.H.useId()};Ie.useImperativeHandle=function(t,e,n){return yt.H.useImperativeHandle(t,e,n)};Ie.useInsertionEffect=function(t,e){return yt.H.useInsertionEffect(t,e)};Ie.useLayoutEffect=function(t,e){return yt.H.useLayoutEffect(t,e)};Ie.useMemo=function(t,e){return yt.H.useMemo(t,e)};Ie.useOptimistic=function(t,e){return yt.H.useOptimistic(t,e)};Ie.useReducer=function(t,e,n){return yt.H.useReducer(t,e,n)};Ie.useRef=function(t){return yt.H.useRef(t)};Ie.useState=function(t){return yt.H.useState(t)};Ie.useSyncExternalStore=function(t,e,n){return yt.H.useSyncExternalStore(t,e,n)};Ie.useTransition=function(){return yt.H.useTransition()};Ie.version="19.2.8";l_.exports=Ie;var bt=l_.exports,p_={exports:{}},$u={},m_={exports:{}},g_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,U){var G=O.length;O.push(U);e:for(;0<G;){var k=G-1>>>1,ee=O[k];if(0<a(ee,U))O[k]=U,O[G]=ee,G=k;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var U=O[0],G=O.pop();if(G!==U){O[0]=G;e:for(var k=0,ee=O.length,se=ee>>>1;k<se;){var fe=2*(k+1)-1,Ve=O[fe],Ye=fe+1,Be=O[Ye];if(0>a(Ve,G))Ye<ee&&0>a(Be,Ve)?(O[k]=Be,O[Ye]=G,k=Ye):(O[k]=Ve,O[fe]=G,k=fe);else if(Ye<ee&&0>a(Be,G))O[k]=Be,O[Ye]=G,k=Ye;else break e}}return U}function a(O,U){var G=O.sortIndex-U.sortIndex;return G!==0?G:O.id-U.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var r=Date,l=r.now();t.unstable_now=function(){return r.now()-l}}var o=[],u=[],h=1,d=null,c=3,p=!1,g=!1,y=!1,m=!1,f=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function _(O){for(var U=n(u);U!==null;){if(U.callback===null)i(u);else if(U.startTime<=O)i(u),U.sortIndex=U.expirationTime,e(o,U);else break;U=n(u)}}function b(O){if(y=!1,_(O),!g)if(n(o)!==null)g=!0,T||(T=!0,L());else{var U=n(u);U!==null&&F(b,U.startTime-O)}}var T=!1,R=-1,v=5,A=-1;function w(){return m?!0:!(t.unstable_now()-A<v)}function D(){if(m=!1,T){var O=t.unstable_now();A=O;var U=!0;try{e:{g=!1,y&&(y=!1,x(R),R=-1),p=!0;var G=c;try{t:{for(_(O),d=n(o);d!==null&&!(d.expirationTime>O&&w());){var k=d.callback;if(typeof k=="function"){d.callback=null,c=d.priorityLevel;var ee=k(d.expirationTime<=O);if(O=t.unstable_now(),typeof ee=="function"){d.callback=ee,_(O),U=!0;break t}d===n(o)&&i(o),_(O)}else i(o);d=n(o)}if(d!==null)U=!0;else{var se=n(u);se!==null&&F(b,se.startTime-O),U=!1}}break e}finally{d=null,c=G,p=!1}U=void 0}}finally{U?L():T=!1}}}var L;if(typeof M=="function")L=function(){M(D)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,H=N.port2;N.port1.onmessage=D,L=function(){H.postMessage(null)}}else L=function(){f(D,0)};function F(O,U){R=f(function(){O(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_next=function(O){switch(c){case 1:case 2:case 3:var U=3;break;default:U=c}var G=c;c=U;try{return O()}finally{c=G}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(O,U){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var G=c;c=O;try{return U()}finally{c=G}},t.unstable_scheduleCallback=function(O,U,G){var k=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?k+G:k):G=k,O){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=G+ee,O={id:h++,callback:U,priorityLevel:O,startTime:G,expirationTime:ee,sortIndex:-1},G>k?(O.sortIndex=G,e(u,O),n(o)===null&&O===n(u)&&(y?(x(R),R=-1):y=!0,F(b,G-k))):(O.sortIndex=ee,e(o,O),g||p||(g=!0,T||(T=!0,L()))),O},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(O){var U=c;return function(){var G=c;c=U;try{return O.apply(this,arguments)}finally{c=G}}}})(g_);m_.exports=g_;var vM=m_.exports,__={exports:{}},gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xM=bt;function v_(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fa(){}var pn={d:{f:fa,r:function(){throw Error(v_(522))},D:fa,C:fa,L:fa,m:fa,X:fa,S:fa,M:fa},p:0,findDOMNode:null},SM=Symbol.for("react.portal");function MM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:SM,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var ol=xM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ju(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pn;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(v_(299));return MM(t,e,null,n)};gn.flushSync=function(t){var e=ol.T,n=pn.p;try{if(ol.T=null,pn.p=2,t)return t()}finally{ol.T=e,pn.p=n,pn.d.f()}};gn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,pn.d.C(t,e))};gn.prefetchDNS=function(t){typeof t=="string"&&pn.d.D(t)};gn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=ju(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?pn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&pn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};gn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=ju(e.as,e.crossOrigin);pn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&pn.d.M(t)};gn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=ju(n,e.crossOrigin);pn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};gn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=ju(e.as,e.crossOrigin);pn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else pn.d.m(t)};gn.requestFormReset=function(t){pn.d.r(t)};gn.unstable_batchedUpdates=function(t,e){return t(e)};gn.useFormState=function(t,e,n){return ol.H.useFormState(t,e,n)};gn.useFormStatus=function(){return ol.H.useHostTransitionStatus()};gn.version="19.2.8";function x_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x_)}catch(t){console.error(t)}}x_(),__.exports=gn;var yM=__.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wt=vM,S_=bt,EM=yM;function j(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zl(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function y_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function E_(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hm(t){if(zl(t)!==t)throw Error(j(188))}function TM(t){var e=t.alternate;if(!e){if(e=zl(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return hm(a),t;if(s===i)return hm(a),e;s=s.sibling}throw Error(j(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,l=a.child;l;){if(l===n){r=!0,n=a,i=s;break}if(l===i){r=!0,i=a,n=s;break}l=l.sibling}if(!r){for(l=s.child;l;){if(l===n){r=!0,n=s,i=a;break}if(l===i){r=!0,i=s,n=a;break}l=l.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function T_(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=T_(t),e!==null)return e;t=t.sibling}return null}var Et=Object.assign,bM=Symbol.for("react.element"),ao=Symbol.for("react.transitional.element"),tl=Symbol.for("react.portal"),Zs=Symbol.for("react.fragment"),b_=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),A_=Symbol.for("react.consumer"),Xi=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),qf=Symbol.for("react.suspense"),Yf=Symbol.for("react.suspense_list"),zd=Symbol.for("react.memo"),va=Symbol.for("react.lazy"),Zf=Symbol.for("react.activity"),AM=Symbol.for("react.memo_cache_sentinel"),dm=Symbol.iterator;function Gr(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var RM=Symbol.for("react.client.reference");function Kf(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===RM?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zs:return"Fragment";case Wf:return"Profiler";case b_:return"StrictMode";case qf:return"Suspense";case Yf:return"SuspenseList";case Zf:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case tl:return"Portal";case Xi:return t.displayName||"Context";case A_:return(t._context.displayName||"Context")+".Consumer";case Bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zd:return e=t.displayName||null,e!==null?e:Kf(t.type)||"Memo";case va:e=t._payload,t=t._init;try{return Kf(t(e))}catch{}}return null}var nl=Array.isArray,Le=S_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=EM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,os={pending:!1,data:null,method:null,action:null},Qf=[],Ks=-1;function Ci(t){return{current:t}}function $t(t){0>Ks||(t.current=Qf[Ks],Qf[Ks]=null,Ks--)}function xt(t,e){Ks++,Qf[Ks]=t.current,t.current=e}var yi=Ci(null),El=Ci(null),Ua=Ci(null),fu=Ci(null);function hu(t,e){switch(xt(Ua,e),xt(El,t),xt(yi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?x0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=x0(e),t=qx(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$t(yi),xt(yi,t)}function gr(){$t(yi),$t(El),$t(Ua)}function Jf(t){t.memoizedState!==null&&xt(fu,t);var e=yi.current,n=qx(e,t.type);e!==n&&(xt(El,t),xt(yi,n))}function du(t){El.current===t&&($t(yi),$t(El)),fu.current===t&&($t(fu),Ol._currentValue=os)}var Ec,pm;function ja(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||"",pm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ec+t+pm}var Tc=!1;function bc(t,e){if(!t||Tc)return"";Tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var c=p}Reflect.construct(t,[],d)}else{try{d.call()}catch(p){c=p}t.call(d.prototype)}}else{try{throw Error()}catch(p){c=p}(d=t())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&c&&typeof p.stack=="string")return[p.stack,c.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],l=s[1];if(r&&l){var o=r.split(`
`),u=l.split(`
`);for(a=i=0;i<o.length&&!o[i].includes("DetermineComponentFrameRoot");)i++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(i===o.length||a===u.length)for(i=o.length-1,a=u.length-1;1<=i&&0<=a&&o[i]!==u[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==u[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==u[a]){var h=`
`+o[i].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=i&&0<=a);break}}}finally{Tc=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ja(n):""}function CM(t,e){switch(t.tag){case 26:case 27:case 5:return ja(t.type);case 16:return ja("Lazy");case 13:return t.child!==e&&e!==null?ja("Suspense Fallback"):ja("Suspense");case 19:return ja("SuspenseList");case 0:case 15:return bc(t.type,!1);case 11:return bc(t.type.render,!1);case 1:return bc(t.type,!0);case 31:return ja("Activity");default:return""}}function mm(t){try{var e="",n=null;do e+=CM(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var $f=Object.prototype.hasOwnProperty,Hd=Wt.unstable_scheduleCallback,Ac=Wt.unstable_cancelCallback,wM=Wt.unstable_shouldYield,DM=Wt.unstable_requestPaint,On=Wt.unstable_now,UM=Wt.unstable_getCurrentPriorityLevel,R_=Wt.unstable_ImmediatePriority,C_=Wt.unstable_UserBlockingPriority,pu=Wt.unstable_NormalPriority,LM=Wt.unstable_LowPriority,w_=Wt.unstable_IdlePriority,NM=Wt.log,OM=Wt.unstable_setDisableYieldValue,Hl=null,Pn=null;function ba(t){if(typeof NM=="function"&&OM(t),Pn&&typeof Pn.setStrictMode=="function")try{Pn.setStrictMode(Hl,t)}catch{}}var Fn=Math.clz32?Math.clz32:IM,PM=Math.log,FM=Math.LN2;function IM(t){return t>>>=0,t===0?32:31-(PM(t)/FM|0)|0}var so=256,ro=262144,lo=4194304;function es(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ec(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var l=i&134217727;return l!==0?(i=l&~s,i!==0?a=es(i):(r&=l,r!==0?a=es(r):n||(n=l&~t,n!==0&&(a=es(n))))):(l=i&~s,l!==0?a=es(l):r!==0?a=es(r):n||(n=i&~t,n!==0&&(a=es(n)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function Gl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function BM(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D_(){var t=lo;return lo<<=1,!(lo&62914560)&&(lo=4194304),t}function Rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function zM(t,e,n,i,a,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var l=t.entanglements,o=t.expirationTimes,u=t.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Fn(n),d=1<<h;l[h]=0,o[h]=-1;var c=u[h];if(c!==null)for(u[h]=null,h=0;h<c.length;h++){var p=c[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&U_(t,i,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function U_(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Fn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function L_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function N_(t,e){var n=e&-e;return n=n&42?1:Gd(n),n&(t.suspendedLanes|e)?0:n}function Gd(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Vd(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function O_(){var t=at.p;return t!==0?t:(t=window.event,t===void 0?32:iS(t.type))}function gm(t,e){var n=at.p;try{return at.p=t,e()}finally{at.p=n}}var Wa=Math.random().toString(36).slice(2),tn="__reactFiber$"+Wa,bn="__reactProps$"+Wa,Lr="__reactContainer$"+Wa,jf="__reactEvents$"+Wa,HM="__reactListeners$"+Wa,GM="__reactHandles$"+Wa,_m="__reactResources$"+Wa,Xl="__reactMarker$"+Wa;function Xd(t){delete t[tn],delete t[bn],delete t[jf],delete t[HM],delete t[GM]}function Qs(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lr]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=T0(t);t!==null;){if(n=t[tn])return n;t=T0(t)}return e}t=n,n=t.parentNode}return null}function Nr(t){if(t=t[tn]||t[Lr]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function il(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(j(33))}function rr(t){var e=t[_m];return e||(e=t[_m]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jt(t){t[Xl]=!0}var P_=new Set,F_={};function Ms(t,e){_r(t,e),_r(t+"Capture",e)}function _r(t,e){for(F_[t]=e,t=0;t<e.length;t++)P_.add(e[t])}var VM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vm={},xm={};function XM(t){return $f.call(xm,t)?!0:$f.call(vm,t)?!1:VM.test(t)?xm[t]=!0:(vm[t]=!0,!1)}function ko(t,e,n){if(XM(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function oo(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Di(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function Wn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function I_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kM(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eh(t){if(!t._valueTracker){var e=I_(t)?"checked":"value";t._valueTracker=kM(t,e,""+t[e])}}function B_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=I_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function mu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var WM=/[\n"\\]/g;function Zn(t){return t.replace(WM,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function th(t,e,n,i,a,s,r,l){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Wn(e)):t.value!==""+Wn(e)&&(t.value=""+Wn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?nh(t,r,Wn(e)):n!=null?nh(t,r,Wn(n)):i!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+Wn(l):t.removeAttribute("name")}function z_(t,e,n,i,a,s,r,l){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){eh(t);return}n=n!=null?""+Wn(n):"",e=e!=null?""+Wn(e):n,l||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=l?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),eh(t)}function nh(t,e,n){e==="number"&&mu(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function lr(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function H_(t,e,n){if(e!=null&&(e=""+Wn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Wn(n):""}function G_(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(j(92));if(nl(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Wn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),eh(t)}function vr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sm(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||qM.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function V_(t,e,n){if(e!=null&&typeof e!="object")throw Error(j(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&Sm(t,a,i)}else for(var s in e)e.hasOwnProperty(s)&&Sm(t,s,e[s])}function kd(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var YM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ZM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(t){return ZM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var ih=null;function Wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Js=null,or=null;function Mm(t){var e=Nr(t);if(e&&(t=e.stateNode)){var n=t[bn]||null;e:switch(t=e.stateNode,e.type){case"input":if(th(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Zn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[bn]||null;if(!a)throw Error(j(90));th(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&B_(i)}break e;case"textarea":H_(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&lr(t,!!n.multiple,e,!1)}}}var Cc=!1;function X_(t,e,n){if(Cc)return t(e,n);Cc=!0;try{var i=t(e);return i}finally{if(Cc=!1,(Js!==null||or!==null)&&(hc(),Js&&(e=Js,t=or,or=Js=null,Mm(e),t)))for(e=0;e<t.length;e++)Mm(t[e])}}function Tl(t,e){var n=t.stateNode;if(n===null)return null;var i=n[bn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ah=!1;if(ji)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){ah=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{ah=!1}var Aa=null,qd=null,qo=null;function k_(){if(qo)return qo;var t,e=qd,n=e.length,i,a="value"in Aa?Aa.value:Aa.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===a[s-i];i++);return qo=a.slice(t,1<i?1-i:void 0)}function Yo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uo(){return!0}function ym(){return!1}function An(t){function e(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uo:ym,this.isPropagationStopped=ym,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=An(ys),kl=Et({},ys,{view:0,detail:0}),KM=An(kl),wc,Dc,Xr,nc=Et({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(wc=t.screenX-Xr.screenX,Dc=t.screenY-Xr.screenY):Dc=wc=0,Xr=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),Em=An(nc),QM=Et({},nc,{dataTransfer:0}),JM=An(QM),$M=Et({},kl,{relatedTarget:0}),Uc=An($M),jM=Et({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),ey=An(jM),ty=Et({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ny=An(ty),iy=Et({},ys,{data:0}),Tm=An(iy),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ly(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ry[t])?!!e[t]:!1}function Yd(){return ly}var oy=Et({},kl,{key:function(t){if(t.key){var e=ay[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yd,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uy=An(oy),cy=Et({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=An(cy),fy=Et({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yd}),hy=An(fy),dy=Et({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),py=An(dy),my=Et({},nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gy=An(my),_y=Et({},ys,{newState:0,oldState:0}),vy=An(_y),xy=[9,13,27,32],Zd=ji&&"CompositionEvent"in window,ul=null;ji&&"documentMode"in document&&(ul=document.documentMode);var Sy=ji&&"TextEvent"in window&&!ul,W_=ji&&(!Zd||ul&&8<ul&&11>=ul),Am=" ",Rm=!1;function q_(t,e){switch(t){case"keyup":return xy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function My(t,e){switch(t){case"compositionend":return Y_(e);case"keypress":return e.which!==32?null:(Rm=!0,Am);case"textInput":return t=e.data,t===Am&&Rm?null:t;default:return null}}function yy(t,e){if($s)return t==="compositionend"||!Zd&&q_(t,e)?(t=k_(),qo=qd=Aa=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W_&&e.locale!=="ko"?null:e.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ey[t.type]:e==="textarea"}function Z_(t,e,n,i){Js?or?or.push(i):or=[i]:Js=i,e=Nu(e,"onChange"),0<e.length&&(n=new tc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var cl=null,bl=null;function Ty(t){Xx(t,0)}function ic(t){var e=il(t);if(B_(e))return t}function wm(t,e){if(t==="change")return e}var K_=!1;if(ji){var Lc;if(ji){var Nc="oninput"in document;if(!Nc){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),Nc=typeof Dm.oninput=="function"}Lc=Nc}else Lc=!1;K_=Lc&&(!document.documentMode||9<document.documentMode)}function Um(){cl&&(cl.detachEvent("onpropertychange",Q_),bl=cl=null)}function Q_(t){if(t.propertyName==="value"&&ic(bl)){var e=[];Z_(e,bl,t,Wd(t)),X_(Ty,e)}}function by(t,e,n){t==="focusin"?(Um(),cl=e,bl=n,cl.attachEvent("onpropertychange",Q_)):t==="focusout"&&Um()}function Ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ic(bl)}function Ry(t,e){if(t==="click")return ic(e)}function Cy(t,e){if(t==="input"||t==="change")return ic(e)}function wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:wy;function Al(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!$f.call(e,a)||!zn(t[a],e[a]))return!1}return!0}function Lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nm(t,e){var n=Lm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lm(n)}}function J_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=mu(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mu(t.document)}return e}function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Dy=ji&&"documentMode"in document&&11>=document.documentMode,js=null,sh=null,fl=null,rh=!1;function Om(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rh||js==null||js!==mu(i)||(i=js,"selectionStart"in i&&Kd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fl&&Al(fl,i)||(fl=i,i=Nu(sh,"onSelect"),0<i.length&&(e=new tc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=js)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var er={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},Oc={},j_={};ji&&(j_=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Es(t){if(Oc[t])return Oc[t];if(!er[t])return t;var e=er[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in j_)return Oc[t]=e[n];return t}var ev=Es("animationend"),tv=Es("animationiteration"),nv=Es("animationstart"),Uy=Es("transitionrun"),Ly=Es("transitionstart"),Ny=Es("transitioncancel"),iv=Es("transitionend"),av=new Map,lh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lh.push("scrollEnd");function ci(t,e){av.set(t,e),Ms(e,[t])}var gu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Xn=[],tr=0,Qd=0;function ac(){for(var t=tr,e=Qd=tr=0;e<t;){var n=Xn[e];Xn[e++]=null;var i=Xn[e];Xn[e++]=null;var a=Xn[e];Xn[e++]=null;var s=Xn[e];if(Xn[e++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&sv(n,a,s)}}function sc(t,e,n,i){Xn[tr++]=t,Xn[tr++]=e,Xn[tr++]=n,Xn[tr++]=i,Qd|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Jd(t,e,n,i){return sc(t,e,n,i),_u(t)}function Ts(t,e){return sc(t,null,null,e),_u(t)}function sv(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-Fn(n),t=s.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),s):null}function _u(t){if(50<Sl)throw Sl=0,Ch=null,Error(j(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var nr={};function Oy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new Oy(t,e,n,i)}function $d(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function rv(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Zo(t,e,n,i,a,s){var r=0;if(i=t,typeof t=="function")$d(t)&&(r=1);else if(typeof t=="string")r=z1(t,n,yi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Zf:return t=Ln(31,n,e,a),t.elementType=Zf,t.lanes=s,t;case Zs:return us(n.children,a,s,e);case b_:r=8,a|=24;break;case Wf:return t=Ln(12,n,e,a|2),t.elementType=Wf,t.lanes=s,t;case qf:return t=Ln(13,n,e,a),t.elementType=qf,t.lanes=s,t;case Yf:return t=Ln(19,n,e,a),t.elementType=Yf,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xi:r=10;break e;case A_:r=9;break e;case Bd:r=11;break e;case zd:r=14;break e;case va:r=16,i=null;break e}r=29,n=Error(j(130,t===null?"null":typeof t,"")),i=null}return e=Ln(r,n,e,a),e.elementType=t,e.type=i,e.lanes=s,e}function us(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function Pc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function lv(t){var e=Ln(18,null,null,0);return e.stateNode=t,e}function Fc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Pm=new WeakMap;function Kn(t,e){if(typeof t=="object"&&t!==null){var n=Pm.get(t);return n!==void 0?n:(e={value:t,source:e,stack:mm(e)},Pm.set(t,e),e)}return{value:t,source:e,stack:mm(e)}}var ir=[],ar=0,vu=null,Rl=0,qn=[],Yn=0,Ha=null,_i=1,vi="";function Hi(t,e){ir[ar++]=Rl,ir[ar++]=vu,vu=t,Rl=e}function ov(t,e,n){qn[Yn++]=_i,qn[Yn++]=vi,qn[Yn++]=Ha,Ha=t;var i=_i;t=vi;var a=32-Fn(i)-1;i&=~(1<<a),n+=1;var s=32-Fn(e)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,_i=1<<32-Fn(e)+a|n<<a|i,vi=s+t}else _i=1<<s|n<<a|i,vi=t}function jd(t){t.return!==null&&(Hi(t,1),ov(t,1,0))}function ep(t){for(;t===vu;)vu=ir[--ar],ir[ar]=null,Rl=ir[--ar],ir[ar]=null;for(;t===Ha;)Ha=qn[--Yn],qn[Yn]=null,vi=qn[--Yn],qn[Yn]=null,_i=qn[--Yn],qn[Yn]=null}function uv(t,e){qn[Yn++]=_i,qn[Yn++]=vi,qn[Yn++]=Ha,_i=e.id,vi=e.overflow,Ha=t}var nn=null,Mt=null,Je=!1,La=null,Qn=!1,oh=Error(j(519));function Ga(t){var e=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Cl(Kn(e,t)),oh}function Fm(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[tn]=t,e[bn]=i,n){case"dialog":We("cancel",e),We("close",e);break;case"iframe":case"object":case"embed":We("load",e);break;case"video":case"audio":for(n=0;n<Ll.length;n++)We(Ll[n],e);break;case"source":We("error",e);break;case"img":case"image":case"link":We("error",e),We("load",e);break;case"details":We("toggle",e);break;case"input":We("invalid",e),z_(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":We("invalid",e);break;case"textarea":We("invalid",e),G_(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Wx(e.textContent,n)?(i.popover!=null&&(We("beforetoggle",e),We("toggle",e)),i.onScroll!=null&&We("scroll",e),i.onScrollEnd!=null&&We("scrollend",e),i.onClick!=null&&(e.onclick=ki),e=!0):e=!1,e||Ga(t,!0)}function Im(t){for(nn=t.return;nn;)switch(nn.tag){case 5:case 31:case 13:Qn=!1;return;case 27:case 3:Qn=!0;return;default:nn=nn.return}}function ws(t){if(t!==nn)return!1;if(!Je)return Im(t),Je=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Nh(t.type,t.memoizedProps)),n=!n),n&&Mt&&Ga(t),Im(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));Mt=E0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));Mt=E0(t)}else e===27?(e=Mt,qa(t.type)?(t=Ih,Ih=null,Mt=t):Mt=e):Mt=nn?jn(t.stateNode.nextSibling):null;return!0}function ds(){Mt=nn=null,Je=!1}function Ic(){var t=La;return t!==null&&(yn===null?yn=t:yn.push.apply(yn,t),La=null),t}function Cl(t){La===null?La=[t]:La.push(t)}var uh=Ci(null),bs=null,Wi=null;function Sa(t,e,n){xt(uh,e._currentValue),e._currentValue=n}function Zi(t){t._currentValue=uh.current,$t(uh)}function ch(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fh(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;e:for(;s!==null;){var l=s;s=a;for(var o=0;o<e.length;o++)if(l.context===e[o]){s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ch(s.return,n,t),i||(r=null);break e}s=l.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(j(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),ch(r,n,t),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Or(t,e,n,i){t=null;for(var a=e,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var l=a.type;zn(a.pendingProps.value,r.value)||(t!==null?t.push(l):t=[l])}}else if(a===fu.current){if(r=a.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Ol):t=[Ol])}a=a.return}t!==null&&fh(e,t,n,i),e.flags|=262144}function xu(t){for(t=t.firstContext;t!==null;){if(!zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ps(t){bs=t,Wi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function an(t){return cv(bs,t)}function co(t,e){return bs===null&&ps(t),cv(t,e)}function cv(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Wi===null){if(t===null)throw Error(j(308));Wi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Wi=Wi.next=e;return n}var Py=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Fy=Wt.unstable_scheduleCallback,Iy=Wt.unstable_NormalPriority,Ht={$$typeof:Xi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tp(){return{controller:new Py,data:new Map,refCount:0}}function Wl(t){t.refCount--,t.refCount===0&&Fy(Iy,function(){t.controller.abort()})}var hl=null,hh=0,xr=0,ur=null;function By(t,e){if(hl===null){var n=hl=[];hh=0,xr=Ap(),ur={status:"pending",value:void 0,then:function(i){n.push(i)}}}return hh++,e.then(Bm,Bm),e}function Bm(){if(--hh===0&&hl!==null){ur!==null&&(ur.status="fulfilled");var t=hl;hl=null,xr=0,ur=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function zy(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var zm=Le.S;Le.S=function(t,e){Tx=On(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&By(t,e),zm!==null&&zm(t,e)};var cs=Ci(null);function np(){var t=cs.current;return t!==null?t:gt.pooledCache}function Ko(t,e){e===null?xt(cs,cs.current):xt(cs,e.pool)}function fv(){var t=np();return t===null?null:{parent:Ht._currentValue,pool:t}}var Pr=Error(j(460)),ip=Error(j(474)),rc=Error(j(542)),Su={then:function(){}};function Hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hv(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ki,ki),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Vm(t),t;default:if(typeof e.status=="string")e.then(ki,ki);else{if(t=gt,t!==null&&100<t.shellSuspendCounter)throw Error(j(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Vm(t),t}throw fs=e,Pr}}function ts(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fs=n,Pr):n}}var fs=null;function Gm(){if(fs===null)throw Error(j(459));var t=fs;return fs=null,t}function Vm(t){if(t===Pr||t===rc)throw Error(j(483))}var cr=null,wl=0;function fo(t){var e=wl;return wl+=1,cr===null&&(cr=[]),hv(cr,t,e)}function kr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ho(t,e){throw e.$$typeof===bM?Error(j(525)):(t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function dv(t){function e(f,x){if(t){var M=f.deletions;M===null?(f.deletions=[x],f.flags|=16):M.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f){for(var x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function a(f,x){return f=Yi(f,x),f.index=0,f.sibling=null,f}function s(f,x,M){return f.index=M,t?(M=f.alternate,M!==null?(M=M.index,M<x?(f.flags|=67108866,x):M):(f.flags|=67108866,x)):(f.flags|=1048576,x)}function r(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function l(f,x,M,_){return x===null||x.tag!==6?(x=Pc(M,f.mode,_),x.return=f,x):(x=a(x,M),x.return=f,x)}function o(f,x,M,_){var b=M.type;return b===Zs?h(f,x,M.props.children,_,M.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===va&&ts(b)===x.type)?(x=a(x,M.props),kr(x,M),x.return=f,x):(x=Zo(M.type,M.key,M.props,null,f.mode,_),kr(x,M),x.return=f,x)}function u(f,x,M,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==M.containerInfo||x.stateNode.implementation!==M.implementation?(x=Fc(M,f.mode,_),x.return=f,x):(x=a(x,M.children||[]),x.return=f,x)}function h(f,x,M,_,b){return x===null||x.tag!==7?(x=us(M,f.mode,_,b),x.return=f,x):(x=a(x,M),x.return=f,x)}function d(f,x,M){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Pc(""+x,f.mode,M),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ao:return M=Zo(x.type,x.key,x.props,null,f.mode,M),kr(M,x),M.return=f,M;case tl:return x=Fc(x,f.mode,M),x.return=f,x;case va:return x=ts(x),d(f,x,M)}if(nl(x)||Gr(x))return x=us(x,f.mode,M,null),x.return=f,x;if(typeof x.then=="function")return d(f,fo(x),M);if(x.$$typeof===Xi)return d(f,co(f,x),M);ho(f,x)}return null}function c(f,x,M,_){var b=x!==null?x.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return b!==null?null:l(f,x,""+M,_);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ao:return M.key===b?o(f,x,M,_):null;case tl:return M.key===b?u(f,x,M,_):null;case va:return M=ts(M),c(f,x,M,_)}if(nl(M)||Gr(M))return b!==null?null:h(f,x,M,_,null);if(typeof M.then=="function")return c(f,x,fo(M),_);if(M.$$typeof===Xi)return c(f,x,co(f,M),_);ho(f,M)}return null}function p(f,x,M,_,b){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return f=f.get(M)||null,l(x,f,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ao:return f=f.get(_.key===null?M:_.key)||null,o(x,f,_,b);case tl:return f=f.get(_.key===null?M:_.key)||null,u(x,f,_,b);case va:return _=ts(_),p(f,x,M,_,b)}if(nl(_)||Gr(_))return f=f.get(M)||null,h(x,f,_,b,null);if(typeof _.then=="function")return p(f,x,M,fo(_),b);if(_.$$typeof===Xi)return p(f,x,M,co(x,_),b);ho(x,_)}return null}function g(f,x,M,_){for(var b=null,T=null,R=x,v=x=0,A=null;R!==null&&v<M.length;v++){R.index>v?(A=R,R=null):A=R.sibling;var w=c(f,R,M[v],_);if(w===null){R===null&&(R=A);break}t&&R&&w.alternate===null&&e(f,R),x=s(w,x,v),T===null?b=w:T.sibling=w,T=w,R=A}if(v===M.length)return n(f,R),Je&&Hi(f,v),b;if(R===null){for(;v<M.length;v++)R=d(f,M[v],_),R!==null&&(x=s(R,x,v),T===null?b=R:T.sibling=R,T=R);return Je&&Hi(f,v),b}for(R=i(R);v<M.length;v++)A=p(R,f,v,M[v],_),A!==null&&(t&&A.alternate!==null&&R.delete(A.key===null?v:A.key),x=s(A,x,v),T===null?b=A:T.sibling=A,T=A);return t&&R.forEach(function(D){return e(f,D)}),Je&&Hi(f,v),b}function y(f,x,M,_){if(M==null)throw Error(j(151));for(var b=null,T=null,R=x,v=x=0,A=null,w=M.next();R!==null&&!w.done;v++,w=M.next()){R.index>v?(A=R,R=null):A=R.sibling;var D=c(f,R,w.value,_);if(D===null){R===null&&(R=A);break}t&&R&&D.alternate===null&&e(f,R),x=s(D,x,v),T===null?b=D:T.sibling=D,T=D,R=A}if(w.done)return n(f,R),Je&&Hi(f,v),b;if(R===null){for(;!w.done;v++,w=M.next())w=d(f,w.value,_),w!==null&&(x=s(w,x,v),T===null?b=w:T.sibling=w,T=w);return Je&&Hi(f,v),b}for(R=i(R);!w.done;v++,w=M.next())w=p(R,f,v,w.value,_),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?v:w.key),x=s(w,x,v),T===null?b=w:T.sibling=w,T=w);return t&&R.forEach(function(L){return e(f,L)}),Je&&Hi(f,v),b}function m(f,x,M,_){if(typeof M=="object"&&M!==null&&M.type===Zs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case ao:e:{for(var b=M.key;x!==null;){if(x.key===b){if(b=M.type,b===Zs){if(x.tag===7){n(f,x.sibling),_=a(x,M.props.children),_.return=f,f=_;break e}}else if(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===va&&ts(b)===x.type){n(f,x.sibling),_=a(x,M.props),kr(_,M),_.return=f,f=_;break e}n(f,x);break}else e(f,x);x=x.sibling}M.type===Zs?(_=us(M.props.children,f.mode,_,M.key),_.return=f,f=_):(_=Zo(M.type,M.key,M.props,null,f.mode,_),kr(_,M),_.return=f,f=_)}return r(f);case tl:e:{for(b=M.key;x!==null;){if(x.key===b)if(x.tag===4&&x.stateNode.containerInfo===M.containerInfo&&x.stateNode.implementation===M.implementation){n(f,x.sibling),_=a(x,M.children||[]),_.return=f,f=_;break e}else{n(f,x);break}else e(f,x);x=x.sibling}_=Fc(M,f.mode,_),_.return=f,f=_}return r(f);case va:return M=ts(M),m(f,x,M,_)}if(nl(M))return g(f,x,M,_);if(Gr(M)){if(b=Gr(M),typeof b!="function")throw Error(j(150));return M=b.call(M),y(f,x,M,_)}if(typeof M.then=="function")return m(f,x,fo(M),_);if(M.$$typeof===Xi)return m(f,x,co(f,M),_);ho(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,x!==null&&x.tag===6?(n(f,x.sibling),_=a(x,M),_.return=f,f=_):(n(f,x),_=Pc(M,f.mode,_),_.return=f,f=_),r(f)):n(f,x)}return function(f,x,M,_){try{wl=0;var b=m(f,x,M,_);return cr=null,b}catch(R){if(R===Pr||R===rc)throw R;var T=Ln(29,R,null,f.mode);return T.lanes=_,T.return=f,T}finally{}}}var ms=dv(!0),pv=dv(!1),xa=!1;function ap(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Na(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Oa(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=_u(t),sv(t,null,n),e}return sc(t,i,e,n),_u(t)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,L_(t,n)}}function Bc(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var ph=!1;function pl(){if(ph){var t=ur;if(t!==null)throw t}}function ml(t,e,n,i){ph=!1;var a=t.updateQueue;xa=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var o=l,u=o.next;o.next=null,r===null?s=u:r.next=u,r=o;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==r&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=o))}if(s!==null){var d=a.baseState;r=0,h=u=o=null,l=s;do{var c=l.lane&-536870913,p=c!==l.lane;if(p?(Ze&c)===c:(i&c)===c){c!==0&&c===xr&&(ph=!0),h!==null&&(h=h.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var g=t,y=l;c=e;var m=n;switch(y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(m,d,c);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,c=typeof g=="function"?g.call(m,d,c):g,c==null)break e;d=Et({},d,c);break e;case 2:xa=!0}}c=l.callback,c!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[c]:p.push(c))}else p={lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=p,o=d):h=h.next=p,r|=c;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;p=l,l=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(o=d),a.baseState=o,a.firstBaseUpdate=u,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),Xa|=r,t.lanes=r,t.memoizedState=d}}function mv(t,e){if(typeof t!="function")throw Error(j(191,t));t.call(e)}function gv(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)mv(n[t],e)}var Sr=Ci(null),Mu=Ci(0);function Xm(t,e){t=ia,xt(Mu,t),xt(Sr,e),ia=t|e.baseLanes}function mh(){xt(Mu,ia),xt(Sr,Sr.current)}function sp(){ia=Mu.current,$t(Sr),$t(Mu)}var Hn=Ci(null),$n=null;function Ma(t){var e=t.alternate;xt(Ot,Ot.current&1),xt(Hn,t),$n===null&&(e===null||Sr.current!==null||e.memoizedState!==null)&&($n=t)}function gh(t){xt(Ot,Ot.current),xt(Hn,t),$n===null&&($n=t)}function _v(t){t.tag===22?(xt(Ot,Ot.current),xt(Hn,t),$n===null&&($n=t)):ya()}function ya(){xt(Ot,Ot.current),xt(Hn,Hn.current)}function Un(t){$t(Hn),$n===t&&($n=null),$t(Ot)}var Ot=Ci(0);function yu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ph(n)||Fh(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ea=0,Ge=null,dt=null,Bt=null,Eu=!1,fr=!1,gs=!1,Tu=0,Dl=0,hr=null,Hy=0;function wt(){throw Error(j(321))}function rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function lp(t,e,n,i,a,s){return ea=s,Ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Le.H=t===null||t.memoizedState===null?Zv:vp,gs=!1,s=n(i,a),gs=!1,fr&&(s=xv(e,n,i,a)),vv(t),s}function vv(t){Le.H=Ul;var e=dt!==null&&dt.next!==null;if(ea=0,Bt=dt=Ge=null,Eu=!1,Dl=0,hr=null,e)throw Error(j(300));t===null||Gt||(t=t.dependencies,t!==null&&xu(t)&&(Gt=!0))}function xv(t,e,n,i){Ge=t;var a=0;do{if(fr&&(hr=null),Dl=0,fr=!1,25<=a)throw Error(j(301));if(a+=1,Bt=dt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Le.H=Kv,s=e(n,i)}while(fr);return s}function Gy(){var t=Le.H,e=t.useState()[0];return e=typeof e.then=="function"?ql(e):e,t=t.useState()[0],(dt!==null?dt.memoizedState:null)!==t&&(Ge.flags|=1024),e}function op(){var t=Tu!==0;return Tu=0,t}function up(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function cp(t){if(Eu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Eu=!1}ea=0,Bt=dt=Ge=null,fr=!1,Dl=Tu=0,hr=null}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Ge.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Pt(){if(dt===null){var t=Ge.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var e=Bt===null?Ge.memoizedState:Bt.next;if(e!==null)Bt=e,dt=t;else{if(t===null)throw Ge.alternate===null?Error(j(467)):Error(j(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Bt===null?Ge.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(t){var e=Dl;return Dl+=1,hr===null&&(hr=[]),t=hv(hr,t,e),e=Ge,(Bt===null?e.memoizedState:Bt.next)===null&&(e=e.alternate,Le.H=e===null||e.memoizedState===null?Zv:vp),t}function oc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ql(t);if(t.$$typeof===Xi)return an(t)}throw Error(j(438,String(t)))}function fp(t){var e=null,n=Ge.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Ge.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=lc(),Ge.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=AM;return e.index++,n}function ta(t,e){return typeof e=="function"?e(t):e}function Qo(t){var e=Pt();return hp(e,dt,t)}function hp(t,e,n){var i=t.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var a=t.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}e.baseQueue=a=s,i.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var l=r=null,o=null,u=e,h=!1;do{var d=u.lane&-536870913;if(d!==u.lane?(Ze&d)===d:(ea&d)===d){var c=u.revertLane;if(c===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),d===xr&&(h=!0);else if((ea&c)===c){u=u.next,c===xr&&(h=!0);continue}else d={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},o===null?(l=o=d,r=s):o=o.next=d,Ge.lanes|=c,Xa|=c;d=u.action,gs&&n(s,d),s=u.hasEagerState?u.eagerState:n(s,d)}else c={lane:d,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},o===null?(l=o=c,r=s):o=o.next=c,Ge.lanes|=d,Xa|=d;u=u.next}while(u!==null&&u!==e);if(o===null?r=s:o.next=l,!zn(s,t.memoizedState)&&(Gt=!0,h&&(n=ur,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=o,i.lastRenderedState=s}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function zc(t){var e=Pt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=t(s,r.action),r=r.next;while(r!==a);zn(s,e.memoizedState)||(Gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sv(t,e,n){var i=Ge,a=Pt(),s=Je;if(s){if(n===void 0)throw Error(j(407));n=n()}else n=e();var r=!zn((dt||a).memoizedState,n);if(r&&(a.memoizedState=n,Gt=!0),a=a.queue,dp(Ev.bind(null,i,a,t),[t]),a.getSnapshot!==e||r||Bt!==null&&Bt.memoizedState.tag&1){if(i.flags|=2048,Mr(9,{destroy:void 0},yv.bind(null,i,a,n,e),null),gt===null)throw Error(j(349));s||ea&127||Mv(i,e,n)}return n}function Mv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ge.updateQueue,e===null?(e=lc(),Ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yv(t,e,n,i){e.value=n,e.getSnapshot=i,Tv(e)&&bv(t)}function Ev(t,e,n){return n(function(){Tv(e)&&bv(t)})}function Tv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function bv(t){var e=Ts(t,2);e!==null&&En(e,t,2)}function _h(t){var e=dn();if(typeof t=="function"){var n=t;if(t=n(),gs){ba(!0);try{n()}finally{ba(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e}function Av(t,e,n,i){return t.baseState=n,hp(t,dt,typeof i=="function"?i:ta)}function Vy(t,e,n,i,a){if(cc(t))throw Error(j(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Le.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,Rv(e,s)):(s.next=n.next,e.pending=n.next=s)}}function Rv(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var s=Le.T,r={};Le.T=r;try{var l=n(a,i),o=Le.S;o!==null&&o(r,l),km(t,e,l)}catch(u){vh(t,e,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),Le.T=s}}else try{s=n(a,i),km(t,e,s)}catch(u){vh(t,e,u)}}function km(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Wm(t,e,i)},function(i){return vh(t,e,i)}):Wm(t,e,n)}function Wm(t,e,n){e.status="fulfilled",e.value=n,Cv(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Rv(t,n)))}function vh(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Cv(e),e=e.next;while(e!==i)}t.action=null}function Cv(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function wv(t,e){return e}function qm(t,e){if(Je){var n=gt.formState;if(n!==null){e:{var i=Ge;if(Je){if(Mt){t:{for(var a=Mt,s=Qn;a.nodeType!==8;){if(!s){a=null;break t}if(a=jn(a.nextSibling),a===null){a=null;break t}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Mt=jn(a.nextSibling),i=a.data==="F!";break e}}Ga(i)}i=!1}i&&(e=n[0])}}return n=dn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wv,lastRenderedState:e},n.queue=i,n=Wv.bind(null,Ge,i),i.dispatch=n,i=_h(!1),s=_p.bind(null,Ge,!1,i.queue),i=dn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=Vy.bind(null,Ge,a,s,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function Ym(t){var e=Pt();return Dv(e,dt,t)}function Dv(t,e,n){if(e=hp(t,e,wv)[0],t=Qo(ta)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=ql(e)}catch(r){throw r===Pr?rc:r}else i=e;e=Pt();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&(Ge.flags|=2048,Mr(9,{destroy:void 0},Xy.bind(null,a,n),null)),[i,s,t]}function Xy(t,e){t.action=e}function Zm(t){var e=Pt(),n=dt;if(n!==null)return Dv(e,n,t);Pt(),e=e.memoizedState,n=Pt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Mr(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Ge.updateQueue,e===null&&(e=lc(),Ge.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Uv(){return Pt().memoizedState}function Jo(t,e,n,i){var a=dn();Ge.flags|=t,a.memoizedState=Mr(1|e,{destroy:void 0},n,i===void 0?null:i)}function uc(t,e,n,i){var a=Pt();i=i===void 0?null:i;var s=a.memoizedState.inst;dt!==null&&i!==null&&rp(i,dt.memoizedState.deps)?a.memoizedState=Mr(e,s,n,i):(Ge.flags|=t,a.memoizedState=Mr(1|e,s,n,i))}function Km(t,e){Jo(8390656,8,t,e)}function dp(t,e){uc(2048,8,t,e)}function ky(t){Ge.flags|=4;var e=Ge.updateQueue;if(e===null)e=lc(),Ge.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Lv(t){var e=Pt().memoizedState;return ky({ref:e,nextImpl:t}),function(){if(it&2)throw Error(j(440));return e.impl.apply(void 0,arguments)}}function Nv(t,e){return uc(4,2,t,e)}function Ov(t,e){return uc(4,4,t,e)}function Pv(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fv(t,e,n){n=n!=null?n.concat([t]):null,uc(4,4,Pv.bind(null,e,t),n)}function pp(){}function Iv(t,e){var n=Pt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&rp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Bv(t,e){var n=Pt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&rp(e,i[1]))return i[0];if(i=t(),gs){ba(!0);try{t()}finally{ba(!1)}}return n.memoizedState=[i,e],i}function mp(t,e,n){return n===void 0||ea&1073741824&&!(Ze&261930)?t.memoizedState=e:(t.memoizedState=n,t=Ax(),Ge.lanes|=t,Xa|=t,n)}function zv(t,e,n,i){return zn(n,e)?n:Sr.current!==null?(t=mp(t,n,i),zn(t,e)||(Gt=!0),t):!(ea&42)||ea&1073741824&&!(Ze&261930)?(Gt=!0,t.memoizedState=n):(t=Ax(),Ge.lanes|=t,Xa|=t,e)}function Hv(t,e,n,i,a){var s=at.p;at.p=s!==0&&8>s?s:8;var r=Le.T,l={};Le.T=l,_p(t,!1,e,n);try{var o=a(),u=Le.S;if(u!==null&&u(l,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var h=zy(o,i);gl(t,e,h,In(t))}else gl(t,e,i,In(t))}catch(d){gl(t,e,{then:function(){},status:"rejected",reason:d},In())}finally{at.p=s,r!==null&&l.types!==null&&(r.types=l.types),Le.T=r}}function Wy(){}function xh(t,e,n,i){if(t.tag!==5)throw Error(j(476));var a=Gv(t).queue;Hv(t,a,e,os,n===null?Wy:function(){return Vv(t),n(i)})}function Gv(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:os,baseState:os,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:os},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Vv(t){var e=Gv(t);e.next===null&&(e=t.alternate.memoizedState),gl(t,e.next.queue,{},In())}function gp(){return an(Ol)}function Xv(){return Pt().memoizedState}function kv(){return Pt().memoizedState}function qy(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=In();t=Na(n);var i=Oa(e,t,n);i!==null&&(En(i,e,n),dl(i,e,n)),e={cache:tp()},t.payload=e;return}e=e.return}}function Yy(t,e,n){var i=In();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},cc(t)?qv(e,n):(n=Jd(t,e,n,i),n!==null&&(En(n,t,i),Yv(n,e,i)))}function Wv(t,e,n){var i=In();gl(t,e,n,i)}function gl(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(cc(t))qv(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,l=s(r,n);if(a.hasEagerState=!0,a.eagerState=l,zn(l,r))return sc(t,e,a,0),gt===null&&ac(),!1}catch{}finally{}if(n=Jd(t,e,a,i),n!==null)return En(n,t,i),Yv(n,e,i),!0}return!1}function _p(t,e,n,i){if(i={lane:2,revertLane:Ap(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},cc(t)){if(e)throw Error(j(479))}else e=Jd(t,n,i,2),e!==null&&En(e,t,2)}function cc(t){var e=t.alternate;return t===Ge||e!==null&&e===Ge}function qv(t,e){fr=Eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yv(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,L_(t,n)}}var Ul={readContext:an,use:oc,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt};Ul.useEffectEvent=wt;var Zv={readContext:an,use:oc,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:Km,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Jo(4194308,4,Pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jo(4194308,4,t,e)},useInsertionEffect:function(t,e){Jo(4,2,t,e)},useMemo:function(t,e){var n=dn();e=e===void 0?null:e;var i=t();if(gs){ba(!0);try{t()}finally{ba(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=dn();if(n!==void 0){var a=n(e);if(gs){ba(!0);try{n(e)}finally{ba(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=Yy.bind(null,Ge,t),[i.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:function(t){t=_h(t);var e=t.queue,n=Wv.bind(null,Ge,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:pp,useDeferredValue:function(t,e){var n=dn();return mp(n,t,e)},useTransition:function(){var t=_h(!1);return t=Hv.bind(null,Ge,t.queue,!0,!1),dn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Ge,a=dn();if(Je){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),gt===null)throw Error(j(349));Ze&127||Mv(i,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,Km(Ev.bind(null,i,s,t),[t]),i.flags|=2048,Mr(9,{destroy:void 0},yv.bind(null,i,s,n,e),null),n},useId:function(){var t=dn(),e=gt.identifierPrefix;if(Je){var n=vi,i=_i;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Tu++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=Hy++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:gp,useFormState:qm,useActionState:qm,useOptimistic:function(t){var e=dn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=_p.bind(null,Ge,!0,n),n.dispatch=e,[t,e]},useMemoCache:fp,useCacheRefresh:function(){return dn().memoizedState=qy.bind(null,Ge)},useEffectEvent:function(t){var e=dn(),n={impl:t};return e.memoizedState=n,function(){if(it&2)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},vp={readContext:an,use:oc,useCallback:Iv,useContext:an,useEffect:dp,useImperativeHandle:Fv,useInsertionEffect:Nv,useLayoutEffect:Ov,useMemo:Bv,useReducer:Qo,useRef:Uv,useState:function(){return Qo(ta)},useDebugValue:pp,useDeferredValue:function(t,e){var n=Pt();return zv(n,dt.memoizedState,t,e)},useTransition:function(){var t=Qo(ta)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:ql(t),e]},useSyncExternalStore:Sv,useId:Xv,useHostTransitionStatus:gp,useFormState:Ym,useActionState:Ym,useOptimistic:function(t,e){var n=Pt();return Av(n,dt,t,e)},useMemoCache:fp,useCacheRefresh:kv};vp.useEffectEvent=Lv;var Kv={readContext:an,use:oc,useCallback:Iv,useContext:an,useEffect:dp,useImperativeHandle:Fv,useInsertionEffect:Nv,useLayoutEffect:Ov,useMemo:Bv,useReducer:zc,useRef:Uv,useState:function(){return zc(ta)},useDebugValue:pp,useDeferredValue:function(t,e){var n=Pt();return dt===null?mp(n,t,e):zv(n,dt.memoizedState,t,e)},useTransition:function(){var t=zc(ta)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:ql(t),e]},useSyncExternalStore:Sv,useId:Xv,useHostTransitionStatus:gp,useFormState:Zm,useActionState:Zm,useOptimistic:function(t,e){var n=Pt();return dt!==null?Av(n,dt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:fp,useCacheRefresh:kv};Kv.useEffectEvent=Lv;function Hc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sh={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=In(),a=Na(i);a.payload=e,n!=null&&(a.callback=n),e=Oa(t,a,i),e!==null&&(En(e,t,i),dl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=In(),a=Na(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Oa(t,a,i),e!==null&&(En(e,t,i),dl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=In(),i=Na(n);i.tag=2,e!=null&&(i.callback=e),e=Oa(t,i,n),e!==null&&(En(e,t,n),dl(e,t,n))}};function Qm(t,e,n,i,a,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,r):e.prototype&&e.prototype.isPureReactComponent?!Al(n,i)||!Al(a,s):!0}function Jm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Sh.enqueueReplaceState(e,e.state,null)}function _s(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Et({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function Qv(t){gu(t)}function Jv(t){console.error(t)}function $v(t){gu(t)}function bu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function $m(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Mh(t,e,n){return n=Na(n),n.tag=3,n.payload={element:null},n.callback=function(){bu(t,e)},n}function jv(t){return t=Na(t),t.tag=3,t}function ex(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;t.payload=function(){return a(s)},t.callback=function(){$m(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){$m(e,n,i),typeof a!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var l=i.stack;this.componentDidCatch(i.value,{componentStack:l!==null?l:""})})}function Zy(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Or(e,n,a,!0),n=Hn.current,n!==null){switch(n.tag){case 31:case 13:return $n===null?Du():n.alternate===null&&Dt===0&&(Dt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Su?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Jc(t,i,a)),!1;case 22:return n.flags|=65536,i===Su?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Jc(t,i,a)),!1}throw Error(j(435,n.tag))}return Jc(t,i,a),Du(),!1}if(Je)return e=Hn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==oh&&(t=Error(j(422),{cause:i}),Cl(Kn(t,n)))):(i!==oh&&(e=Error(j(423),{cause:i}),Cl(Kn(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=Kn(i,n),a=Mh(t.stateNode,i,a),Bc(t,a),Dt!==4&&(Dt=2)),!1;var s=Error(j(520),{cause:i});if(s=Kn(s,n),xl===null?xl=[s]:xl.push(s),Dt!==4&&(Dt=2),e===null)return!0;i=Kn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Mh(n.stateNode,i,t),Bc(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=jv(a),ex(a,t,n,i),Bc(n,a),!1}n=n.return}while(n!==null);return!1}var xp=Error(j(461)),Gt=!1;function en(t,e,n,i){e.child=t===null?pv(e,null,n,i):ms(e,t.child,n,i)}function jm(t,e,n,i,a){n=n.render;var s=e.ref;if("ref"in i){var r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}else r=i;return ps(e),i=lp(t,e,n,r,s,a),l=op(),t!==null&&!Gt?(up(t,e,a),na(t,e,a)):(Je&&l&&jd(e),e.flags|=1,en(t,e,i,a),e.child)}function e0(t,e,n,i,a){if(t===null){var s=n.type;return typeof s=="function"&&!$d(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,tx(t,e,s,i,a)):(t=Zo(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Sp(t,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Al,n(r,i)&&t.ref===e.ref)return na(t,e,a)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function tx(t,e,n,i,a){if(t!==null){var s=t.memoizedProps;if(Al(s,i)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=i=s,Sp(t,a))t.flags&131072&&(Gt=!0);else return e.lanes=t.lanes,na(t,e,a)}return yh(t,e,n,i,a)}function nx(t,e,n,i){var a=i.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,e.child=null;return t0(t,e,s,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ko(e,s!==null?s.cachePool:null),s!==null?Xm(e,s):mh(),_v(e);else return i=e.lanes=536870912,t0(t,e,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Ko(e,s.cachePool),Xm(e,s),ya(),e.memoizedState=null):(t!==null&&Ko(e,null),mh(),ya());return en(t,e,a,n),e.child}function al(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function t0(t,e,n,i,a){var s=np();return s=s===null?null:{parent:Ht._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&Ko(e,null),mh(),_v(e),t!==null&&Or(t,e,i,!0),e.childLanes=a,null}function $o(t,e){return e=Au({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function n0(t,e,n){return ms(e,t.child,null,n),t=$o(e,e.pendingProps),t.flags|=2,Un(e),e.memoizedState=null,t}function Ky(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Je){if(i.mode==="hidden")return t=$o(e,i),e.lanes=536870912,al(null,t);if(gh(e),(t=Mt)?(t=Zx(t,Qn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=lv(t),n.return=e,e.child=n,nn=e,Mt=null)):t=null,t===null)throw Ga(e);return e.lanes=536870912,null}return $o(e,i)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(gh(e),a)if(e.flags&256)e.flags&=-257,e=n0(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(j(558));else if(Gt||Or(t,e,n,!1),a=(n&t.childLanes)!==0,Gt||a){if(i=gt,i!==null&&(r=N_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Ts(t,r),En(i,t,r),xp;Du(),e=n0(t,e,n)}else t=s.treeContext,Mt=jn(r.nextSibling),nn=e,Je=!0,La=null,Qn=!1,t!==null&&uv(e,t),e=$o(e,i),e.flags|=4096;return e}return t=Yi(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function jo(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function yh(t,e,n,i,a){return ps(e),n=lp(t,e,n,i,void 0,a),i=op(),t!==null&&!Gt?(up(t,e,a),na(t,e,a)):(Je&&i&&jd(e),e.flags|=1,en(t,e,n,a),e.child)}function i0(t,e,n,i,a,s){return ps(e),e.updateQueue=null,n=xv(e,i,n,a),vv(t),i=op(),t!==null&&!Gt?(up(t,e,s),na(t,e,s)):(Je&&i&&jd(e),e.flags|=1,en(t,e,n,s),e.child)}function a0(t,e,n,i,a){if(ps(e),e.stateNode===null){var s=nr,r=n.contextType;typeof r=="object"&&r!==null&&(s=an(r)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Sh,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},ap(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?an(r):nr,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Hc(e,n,r,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Sh.enqueueReplaceState(s,s.state,null),ml(e,i,s,a),pl(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var l=e.memoizedProps,o=_s(n,l);s.props=o;var u=s.context,h=n.contextType;r=nr,typeof h=="object"&&h!==null&&(r=an(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",l=e.pendingProps!==l,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l||u!==r)&&Jm(e,s,i,r),xa=!1;var c=e.memoizedState;s.state=c,ml(e,i,s,a),pl(),u=e.memoizedState,l||c!==u||xa?(typeof d=="function"&&(Hc(e,n,d,i),u=e.memoizedState),(o=xa||Qm(e,n,o,i,c,u,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),s.props=i,s.state=u,s.context=r,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,dh(t,e),r=e.memoizedProps,h=_s(n,r),s.props=h,d=e.pendingProps,c=s.context,u=n.contextType,o=nr,typeof u=="object"&&u!==null&&(o=an(u)),l=n.getDerivedStateFromProps,(u=typeof l=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||c!==o)&&Jm(e,s,i,o),xa=!1,c=e.memoizedState,s.state=c,ml(e,i,s,a),pl();var p=e.memoizedState;r!==d||c!==p||xa||t!==null&&t.dependencies!==null&&xu(t.dependencies)?(typeof l=="function"&&(Hc(e,n,l,i),p=e.memoizedState),(h=xa||Qm(e,n,h,i,c,p,o)||t!==null&&t.dependencies!==null&&xu(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,o)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),s.props=i,s.state=p,s.context=o,i=h):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,jo(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=ms(e,t.child,null,a),e.child=ms(e,null,n,a)):en(t,e,n,a),e.memoizedState=s.state,t=e.child):t=na(t,e,a),t}function s0(t,e,n,i){return ds(),e.flags|=256,en(t,e,n,i),e.child}var Gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vc(t){return{baseLanes:t,cachePool:fv()}}function Xc(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Nn),t}function ix(t,e,n){var i=e.pendingProps,a=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Ot.current&2)!==0),r&&(a=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(Je){if(a?Ma(e):ya(),(t=Mt)?(t=Zx(t,Qn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=lv(t),n.return=e,e.child=n,nn=e,Mt=null)):t=null,t===null)throw Ga(e);return Fh(t)?e.lanes=32:e.lanes=536870912,null}var l=i.children;return i=i.fallback,a?(ya(),a=e.mode,l=Au({mode:"hidden",children:l},a),i=us(i,a,n,null),l.return=e,i.return=e,l.sibling=i,e.child=l,i=e.child,i.memoizedState=Vc(n),i.childLanes=Xc(t,r,n),e.memoizedState=Gc,al(null,i)):(Ma(e),Eh(e,l))}var o=t.memoizedState;if(o!==null&&(l=o.dehydrated,l!==null)){if(s)e.flags&256?(Ma(e),e.flags&=-257,e=kc(t,e,n)):e.memoizedState!==null?(ya(),e.child=t.child,e.flags|=128,e=null):(ya(),l=i.fallback,a=e.mode,i=Au({mode:"visible",children:i.children},a),l=us(l,a,n,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,ms(e,t.child,null,n),i=e.child,i.memoizedState=Vc(n),i.childLanes=Xc(t,r,n),e.memoizedState=Gc,e=al(null,i));else if(Ma(e),Fh(l)){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;r=u,i=Error(j(419)),i.stack="",i.digest=r,Cl({value:i,source:null,stack:null}),e=kc(t,e,n)}else if(Gt||Or(t,e,n,!1),r=(n&t.childLanes)!==0,Gt||r){if(r=gt,r!==null&&(i=N_(r,n),i!==0&&i!==o.retryLane))throw o.retryLane=i,Ts(t,i),En(r,t,i),xp;Ph(l)||Du(),e=kc(t,e,n)}else Ph(l)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,Mt=jn(l.nextSibling),nn=e,Je=!0,La=null,Qn=!1,t!==null&&uv(e,t),e=Eh(e,i.children),e.flags|=4096);return e}return a?(ya(),l=i.fallback,a=e.mode,o=t.child,u=o.sibling,i=Yi(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&65011712,u!==null?l=Yi(u,l):(l=us(l,a,n,null),l.flags|=2),l.return=e,i.return=e,i.sibling=l,e.child=i,al(null,i),i=e.child,l=t.child.memoizedState,l===null?l=Vc(n):(a=l.cachePool,a!==null?(o=Ht._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=fv(),l={baseLanes:l.baseLanes|n,cachePool:a}),i.memoizedState=l,i.childLanes=Xc(t,r,n),e.memoizedState=Gc,al(t.child,i)):(Ma(e),n=t.child,t=n.sibling,n=Yi(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function Eh(t,e){return e=Au({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Au(t,e){return t=Ln(22,t,null,e),t.lanes=0,t}function kc(t,e,n){return ms(e,t.child,null,n),t=Eh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function r0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ch(t.return,e,n)}function Wc(t,e,n,i,a,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function ax(t,e,n){var i=e.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Ot.current,l=(r&2)!==0;if(l?(r=r&1|2,e.flags|=128):r&=1,xt(Ot,r),en(t,e,i,n),i=Je?Rl:0,!l&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r0(t,n,e);else if(t.tag===19)r0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&yu(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Wc(e,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&yu(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Wc(e,!0,n,null,s,i);break;case"together":Wc(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function na(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xa|=e.lanes,!(n&e.childLanes))if(t!==null){if(Or(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&xu(t)))}function Qy(t,e,n){switch(e.tag){case 3:hu(e,e.stateNode.containerInfo),Sa(e,Ht,t.memoizedState.cache),ds();break;case 27:case 5:Jf(e);break;case 4:hu(e,e.stateNode.containerInfo);break;case 10:Sa(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,gh(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Ma(e),e.flags|=128,null):n&e.child.childLanes?ix(t,e,n):(Ma(e),t=na(t,e,n),t!==null?t.sibling:null);Ma(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Or(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return ax(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),xt(Ot,Ot.current),i)break;return null;case 22:return e.lanes=0,nx(t,e,n,e.pendingProps);case 24:Sa(e,Ht,t.memoizedState.cache)}return na(t,e,n)}function sx(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Gt=!0;else{if(!Sp(t,n)&&!(e.flags&128))return Gt=!1,Qy(t,e,n);Gt=!!(t.flags&131072)}else Gt=!1,Je&&e.flags&1048576&&ov(e,Rl,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=ts(e.elementType),e.type=t,typeof t=="function")$d(t)?(i=_s(t,i),e.tag=1,e=a0(null,e,t,i,n)):(e.tag=0,e=yh(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Bd){e.tag=11,e=jm(null,e,t,i,n);break e}else if(a===zd){e.tag=14,e=e0(null,e,t,i,n);break e}}throw e=Kf(t)||t,Error(j(306,e,""))}}return e;case 0:return yh(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=_s(i,e.pendingProps),a0(t,e,i,a,n);case 3:e:{if(hu(e,e.stateNode.containerInfo),t===null)throw Error(j(387));i=e.pendingProps;var s=e.memoizedState;a=s.element,dh(t,e),ml(e,i,null,n);var r=e.memoizedState;if(i=r.cache,Sa(e,Ht,i),i!==s.cache&&fh(e,[Ht],n,!0),pl(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=s0(t,e,i,n);break e}else if(i!==a){a=Kn(Error(j(424)),e),Cl(a),e=s0(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Mt=jn(t.firstChild),nn=e,Je=!0,La=null,Qn=!0,n=pv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ds(),i===a){e=na(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 26:return jo(t,e),t===null?(n=A0(e.type,null,e.pendingProps,null))?e.memoizedState=n:Je||(n=e.type,t=e.pendingProps,i=Ou(Ua.current).createElement(n),i[tn]=e,i[bn]=t,rn(i,n,t),Jt(i),e.stateNode=i):e.memoizedState=A0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Jf(e),t===null&&Je&&(i=e.stateNode=Kx(e.type,e.pendingProps,Ua.current),nn=e,Qn=!0,a=Mt,qa(e.type)?(Ih=a,Mt=jn(i.firstChild)):Mt=a),en(t,e,e.pendingProps.children,n),jo(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Je&&((a=i=Mt)&&(i=A1(i,e.type,e.pendingProps,Qn),i!==null?(e.stateNode=i,nn=e,Mt=jn(i.firstChild),Qn=!1,a=!0):a=!1),a||Ga(e)),Jf(e),a=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,i=s.children,Nh(a,s)?i=null:r!==null&&Nh(a,r)&&(e.flags|=32),e.memoizedState!==null&&(a=lp(t,e,Gy,null,null,n),Ol._currentValue=a),jo(t,e),en(t,e,i,n),e.child;case 6:return t===null&&Je&&((t=n=Mt)&&(n=R1(n,e.pendingProps,Qn),n!==null?(e.stateNode=n,nn=e,Mt=null,t=!0):t=!1),t||Ga(e)),null;case 13:return ix(t,e,n);case 4:return hu(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ms(e,null,i,n):en(t,e,i,n),e.child;case 11:return jm(t,e,e.type,e.pendingProps,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Sa(e,e.type,i.value),en(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,ps(e),a=an(a),i=i(a),e.flags|=1,en(t,e,i,n),e.child;case 14:return e0(t,e,e.type,e.pendingProps,n);case 15:return tx(t,e,e.type,e.pendingProps,n);case 19:return ax(t,e,n);case 31:return Ky(t,e,n);case 22:return nx(t,e,n,e.pendingProps);case 24:return ps(e),i=an(Ht),t===null?(a=np(),a===null&&(a=gt,s=tp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:i,cache:a},ap(e),Sa(e,Ht,a)):(t.lanes&n&&(dh(t,e),ml(e,null,null,n),pl()),a=t.memoizedState,s=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),Sa(e,Ht,i)):(i=s.cache,Sa(e,Ht,i),i!==a.cache&&fh(e,[Ht],n,!0))),en(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(j(156,e.tag))}function Ui(t){t.flags|=4}function qc(t,e,n,i,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(wx())t.flags|=8192;else throw fs=Su,ip}else t.flags&=-16777217}function l0(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!$x(e))if(wx())t.flags|=8192;else throw fs=Su,ip}function po(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?D_():536870912,t.lanes|=e,yr|=e)}function Wr(t,e){if(!Je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Jy(t,e,n){var i=e.pendingProps;switch(ep(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return St(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Zi(Ht),gr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ws(e)?Ui(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ic())),St(e),null;case 26:var a=e.type,s=e.memoizedState;return t===null?(Ui(e),s!==null?(St(e),l0(e,s)):(St(e),qc(e,a,null,i,n))):s?s!==t.memoizedState?(Ui(e),St(e),l0(e,s)):(St(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Ui(e),St(e),qc(e,a,t,i,n)),null;case 27:if(du(e),n=Ua.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ui(e);else{if(!i){if(e.stateNode===null)throw Error(j(166));return St(e),null}t=yi.current,ws(e)?Fm(e):(t=Kx(a,i,n),e.stateNode=t,Ui(e))}return St(e),null;case 5:if(du(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ui(e);else{if(!i){if(e.stateNode===null)throw Error(j(166));return St(e),null}if(s=yi.current,ws(e))Fm(e);else{var r=Ou(Ua.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[tn]=e,s[bn]=i;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(rn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ui(e)}}return St(e),qc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Ui(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(j(166));if(t=Ua.current,ws(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=nn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[tn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Wx(t.nodeValue,n)),t||Ga(e,!0)}else t=Ou(t).createTextNode(i),t[tn]=e,e.stateNode=t}return St(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=ws(e),n!==null){if(t===null){if(!i)throw Error(j(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(557));t[tn]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),t=!1}else n=Ic(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Un(e),e):(Un(e),null);if(e.flags&128)throw Error(j(558))}return St(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=ws(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(j(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(j(317));a[tn]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),a=!1}else a=Ic(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Un(e),e):(Un(e),null)}return Un(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),po(e,e.updateQueue),St(e),null);case 4:return gr(),t===null&&Rp(e.stateNode.containerInfo),St(e),null;case 10:return Zi(e.type),St(e),null;case 19:if($t(Ot),i=e.memoizedState,i===null)return St(e),null;if(a=(e.flags&128)!==0,s=i.rendering,s===null)if(a)Wr(i,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=yu(t),s!==null){for(e.flags|=128,Wr(i,!1),t=s.updateQueue,e.updateQueue=t,po(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)rv(n,t),n=n.sibling;return xt(Ot,Ot.current&1|2),Je&&Hi(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&On()>Cu&&(e.flags|=128,a=!0,Wr(i,!1),e.lanes=4194304)}else{if(!a)if(t=yu(s),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,po(e,t),Wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Je)return St(e),null}else 2*On()-i.renderingStartTime>Cu&&n!==536870912&&(e.flags|=128,a=!0,Wr(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=On(),t.sibling=null,n=Ot.current,xt(Ot,a?n&1|2:n&1),Je&&Hi(e,i.treeForkCount),t):(St(e),null);case 22:case 23:return Un(e),sp(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),n=e.updateQueue,n!==null&&po(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&$t(cs),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Zi(Ht),St(e),null;case 25:return null;case 30:return null}throw Error(j(156,e.tag))}function $y(t,e){switch(ep(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zi(Ht),gr(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return du(e),null;case 31:if(e.memoizedState!==null){if(Un(e),e.alternate===null)throw Error(j(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Un(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $t(Ot),null;case 4:return gr(),null;case 10:return Zi(e.type),null;case 22:case 23:return Un(e),sp(),t!==null&&$t(cs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Zi(Ht),null;case 25:return null;default:return null}}function rx(t,e){switch(ep(e),e.tag){case 3:Zi(Ht),gr();break;case 26:case 27:case 5:du(e);break;case 4:gr();break;case 31:e.memoizedState!==null&&Un(e);break;case 13:Un(e);break;case 19:$t(Ot);break;case 10:Zi(e.type);break;case 22:case 23:Un(e),sp(),t!==null&&$t(cs);break;case 24:Zi(Ht)}}function Yl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(l){ut(e,e.return,l)}}function Va(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&t)===t){var r=i.inst,l=r.destroy;if(l!==void 0){r.destroy=void 0,a=e;var o=n,u=l;try{u()}catch(h){ut(a,o,h)}}}i=i.next}while(i!==s)}}catch(h){ut(e,e.return,h)}}function lx(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{gv(e,n)}catch(i){ut(t,t.return,i)}}}function ox(t,e,n){n.props=_s(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){ut(t,e,i)}}function _l(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){ut(t,e,a)}}function xi(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ut(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ut(t,e,a)}else n.current=null}function ux(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ut(t,t.return,a)}}function Yc(t,e,n){try{var i=t.stateNode;S1(i,t.type,n,e),i[bn]=e}catch(a){ut(t,t.return,a)}}function cx(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function Zc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ki));else if(i!==4&&(i===27&&qa(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}function Ru(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&qa(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Ru(t,e,n),t=t.sibling;t!==null;)Ru(t,e,n),t=t.sibling}function fx(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);rn(e,i,n),e[tn]=t,e[bn]=n}catch(s){ut(t,t.return,s)}}var Gi=!1,zt=!1,Kc=!1,o0=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function jy(t,e){if(t=t.containerInfo,Uh=Bu,t=$_(t),Kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,l=-1,o=-1,u=0,h=0,d=t,c=null;t:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(l=r+a),d!==s||i!==0&&d.nodeType!==3||(o=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)c=d,d=p;for(;;){if(d===t)break t;if(c===n&&++u===a&&(l=r),c===s&&++h===i&&(o=r),(p=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=p}n=l===-1||o===-1?null:{start:l,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lh={focusedElem:t,selectionRange:n},Bu=!1,Qt=e;Qt!==null;)if(e=Qt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Qt=t;else for(;Qt!==null;){switch(e=Qt,s=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var g=_s(n.type,a);t=i.getSnapshotBeforeUpdate(g,s),i.__reactInternalSnapshotBeforeUpdate=t}catch(y){ut(n,n.return,y)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Oh(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Oh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(j(163))}if(t=e.sibling,t!==null){t.return=e.return,Qt=t;break}Qt=e.return}}function hx(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n),i&4&&Yl(5,n);break;case 1:if(Ni(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){ut(n,n.return,r)}else{var a=_s(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){ut(n,n.return,r)}}i&64&&lx(n),i&512&&_l(n,n.return);break;case 3:if(Ni(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{gv(t,e)}catch(r){ut(n,n.return,r)}}break;case 27:e===null&&i&4&&fx(n);case 26:case 5:Ni(t,n),e===null&&i&4&&ux(n),i&512&&_l(n,n.return);break;case 12:Ni(t,n);break;case 31:Ni(t,n),i&4&&mx(t,n);break;case 13:Ni(t,n),i&4&&gx(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=o1.bind(null,n),C1(t,n))));break;case 22:if(i=n.memoizedState!==null||Gi,!i){e=e!==null&&e.memoizedState!==null||zt,a=Gi;var s=zt;Gi=i,(zt=e)&&!s?zi(t,n,(n.subtreeFlags&8772)!==0):Ni(t,n),Gi=a,zt=s}break;case 30:break;default:Ni(t,n)}}function dx(t){var e=t.alternate;e!==null&&(t.alternate=null,dx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Xd(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Tt=null,Mn=!1;function Li(t,e,n){for(n=n.child;n!==null;)px(t,e,n),n=n.sibling}function px(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 26:zt||xi(n,e),Li(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:zt||xi(n,e);var i=Tt,a=Mn;qa(n.type)&&(Tt=n.stateNode,Mn=!1),Li(t,e,n),Ml(n.stateNode),Tt=i,Mn=a;break;case 5:zt||xi(n,e);case 6:if(i=Tt,a=Mn,Tt=null,Li(t,e,n),Tt=i,Mn=a,Tt!==null)if(Mn)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(n.stateNode)}catch(s){ut(n,e,s)}else try{Tt.removeChild(n.stateNode)}catch(s){ut(n,e,s)}break;case 18:Tt!==null&&(Mn?(t=Tt,M0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Ar(t)):M0(Tt,n.stateNode));break;case 4:i=Tt,a=Mn,Tt=n.stateNode.containerInfo,Mn=!0,Li(t,e,n),Tt=i,Mn=a;break;case 0:case 11:case 14:case 15:Va(2,n,e),zt||Va(4,n,e),Li(t,e,n);break;case 1:zt||(xi(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&ox(n,e,i)),Li(t,e,n);break;case 21:Li(t,e,n);break;case 22:zt=(i=zt)||n.memoizedState!==null,Li(t,e,n),zt=i;break;default:Li(t,e,n)}}function mx(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ar(t)}catch(n){ut(e,e.return,n)}}}function gx(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ar(t)}catch(n){ut(e,e.return,n)}}function e1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new o0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new o0),e;default:throw Error(j(435,t.tag))}}function mo(t,e){var n=e1(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=u1.bind(null,t,i);i.then(a,a)}})}function vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=t,r=e,l=r;e:for(;l!==null;){switch(l.tag){case 27:if(qa(l.type)){Tt=l.stateNode,Mn=!1;break e}break;case 5:Tt=l.stateNode,Mn=!1;break e;case 3:case 4:Tt=l.stateNode.containerInfo,Mn=!0;break e}l=l.return}if(Tt===null)throw Error(j(160));px(s,r,a),Tt=null,Mn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)_x(e,t),e=e.sibling}var si=null;function _x(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:vn(e,t),xn(t),i&4&&(Va(3,t,t.return),Yl(3,t),Va(5,t,t.return));break;case 1:vn(e,t),xn(t),i&512&&(zt||n===null||xi(n,n.return)),i&64&&Gi&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=si;if(vn(e,t),xn(t),i&512&&(zt||n===null||xi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Xl]||s[tn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),rn(s,i,n),s[tn]=t,Jt(s),i=s;break e;case"link":var r=C0("link","href",a).get(i+(n.href||""));if(r){for(var l=0;l<r.length;l++)if(s=r[l],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(l,1);break t}}s=a.createElement(i),rn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=C0("meta","content",a).get(i+(n.content||""))){for(l=0;l<r.length;l++)if(s=r[l],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(l,1);break t}}s=a.createElement(i),rn(s,i,n),a.head.appendChild(s);break;default:throw Error(j(468,i))}s[tn]=t,Jt(s),i=s}t.stateNode=i}else w0(a,t.type,t.stateNode);else t.stateNode=R0(a,i,t.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?w0(a,t.type,t.stateNode):R0(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Yc(t,t.memoizedProps,n.memoizedProps)}break;case 27:vn(e,t),xn(t),i&512&&(zt||n===null||xi(n,n.return)),n!==null&&i&4&&Yc(t,t.memoizedProps,n.memoizedProps);break;case 5:if(vn(e,t),xn(t),i&512&&(zt||n===null||xi(n,n.return)),t.flags&32){a=t.stateNode;try{vr(a,"")}catch(g){ut(t,t.return,g)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,Yc(t,a,n!==null?n.memoizedProps:a)),i&1024&&(Kc=!0);break;case 6:if(vn(e,t),xn(t),i&4){if(t.stateNode===null)throw Error(j(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(g){ut(t,t.return,g)}}break;case 3:if(nu=null,a=si,si=Pu(e.containerInfo),vn(e,t),si=a,xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ar(e.containerInfo)}catch(g){ut(t,t.return,g)}Kc&&(Kc=!1,vx(t));break;case 4:i=si,si=Pu(t.stateNode.containerInfo),vn(e,t),xn(t),si=i;break;case 12:vn(e,t),xn(t);break;case 31:vn(e,t),xn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,mo(t,i)));break;case 13:vn(e,t),xn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(fc=On()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,mo(t,i)));break;case 22:a=t.memoizedState!==null;var o=n!==null&&n.memoizedState!==null,u=Gi,h=zt;if(Gi=u||a,zt=h||o,vn(e,t),zt=h,Gi=u,xn(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||o||Gi||zt||ns(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){o=n=e;try{if(s=o.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{l=o.stateNode;var d=o.memoizedProps.style,c=d!=null&&d.hasOwnProperty("display")?d.display:null;l.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(g){ut(o,o.return,g)}}}else if(e.tag===6){if(n===null){o=e;try{o.stateNode.nodeValue=a?"":o.memoizedProps}catch(g){ut(o,o.return,g)}}}else if(e.tag===18){if(n===null){o=e;try{var p=o.stateNode;a?y0(p,!0):y0(o.stateNode,!1)}catch(g){ut(o,o.return,g)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,mo(t,n))));break;case 19:vn(e,t),xn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,mo(t,i)));break;case 30:break;case 21:break;default:vn(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(cx(i)){n=i;break}i=i.return}if(n==null)throw Error(j(160));switch(n.tag){case 27:var a=n.stateNode,s=Zc(t);Ru(t,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(vr(r,""),n.flags&=-33);var l=Zc(t);Ru(t,l,r);break;case 3:case 4:var o=n.stateNode.containerInfo,u=Zc(t);Th(t,u,o);break;default:throw Error(j(161))}}catch(h){ut(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vx(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;vx(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ni(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)hx(t,e.alternate,e),e=e.sibling}function ns(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Va(4,e,e.return),ns(e);break;case 1:xi(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&ox(e,e.return,n),ns(e);break;case 27:Ml(e.stateNode);case 26:case 5:xi(e,e.return),ns(e);break;case 22:e.memoizedState===null&&ns(e);break;case 30:ns(e);break;default:ns(e)}t=t.sibling}}function zi(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:zi(a,s,n),Yl(4,s);break;case 1:if(zi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(u){ut(i,i.return,u)}if(i=s,a=i.updateQueue,a!==null){var l=i.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)mv(o[a],l)}catch(u){ut(i,i.return,u)}}n&&r&64&&lx(s),_l(s,s.return);break;case 27:fx(s);case 26:case 5:zi(a,s,n),n&&i===null&&r&4&&ux(s),_l(s,s.return);break;case 12:zi(a,s,n);break;case 31:zi(a,s,n),n&&r&4&&mx(a,s);break;case 13:zi(a,s,n),n&&r&4&&gx(a,s);break;case 22:s.memoizedState===null&&zi(a,s,n),_l(s,s.return);break;case 30:break;default:zi(a,s,n)}e=e.sibling}}function Mp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Wl(n))}function yp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wl(t))}function ti(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xx(t,e,n,i),e=e.sibling}function xx(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ti(t,e,n,i),a&2048&&Yl(9,e);break;case 1:ti(t,e,n,i);break;case 3:ti(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wl(t)));break;case 12:if(a&2048){ti(t,e,n,i),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,l=s.onPostCommit;typeof l=="function"&&l(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){ut(e,e.return,o)}}else ti(t,e,n,i);break;case 31:ti(t,e,n,i);break;case 13:ti(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?ti(t,e,n,i):vl(t,e):s._visibility&2?ti(t,e,n,i):(s._visibility|=2,qs(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Mp(r,e);break;case 24:ti(t,e,n,i),a&2048&&yp(e.alternate,e);break;default:ti(t,e,n,i)}}function qs(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,l=n,o=i,u=r.flags;switch(r.tag){case 0:case 11:case 15:qs(s,r,l,o,a),Yl(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?qs(s,r,l,o,a):vl(s,r):(h._visibility|=2,qs(s,r,l,o,a)),a&&u&2048&&Mp(r.alternate,r);break;case 24:qs(s,r,l,o,a),a&&u&2048&&yp(r.alternate,r);break;default:qs(s,r,l,o,a)}e=e.sibling}}function vl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:vl(n,i),a&2048&&Mp(i.alternate,i);break;case 24:vl(n,i),a&2048&&yp(i.alternate,i);break;default:vl(n,i)}e=e.sibling}}var sl=8192;function Ds(t,e,n){if(t.subtreeFlags&sl)for(t=t.child;t!==null;)Sx(t,e,n),t=t.sibling}function Sx(t,e,n){switch(t.tag){case 26:Ds(t,e,n),t.flags&sl&&t.memoizedState!==null&&H1(n,si,t.memoizedState,t.memoizedProps);break;case 5:Ds(t,e,n);break;case 3:case 4:var i=si;si=Pu(t.stateNode.containerInfo),Ds(t,e,n),si=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=sl,sl=16777216,Ds(t,e,n),sl=i):Ds(t,e,n));break;default:Ds(t,e,n)}}function Mx(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function qr(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Qt=i,Ex(i,t)}Mx(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yx(t),t=t.sibling}function yx(t){switch(t.tag){case 0:case 11:case 15:qr(t),t.flags&2048&&Va(9,t,t.return);break;case 3:qr(t);break;case 12:qr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,eu(t)):qr(t);break;default:qr(t)}}function eu(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Qt=i,Ex(i,t)}Mx(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Va(8,e,e.return),eu(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,eu(e));break;default:eu(e)}t=t.sibling}}function Ex(t,e){for(;Qt!==null;){var n=Qt;switch(n.tag){case 0:case 11:case 15:Va(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Wl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qt=i;else e:for(n=t;Qt!==null;){i=Qt;var a=i.sibling,s=i.return;if(dx(i),i===n){Qt=null;break e}if(a!==null){a.return=s,Qt=a;break e}Qt=s}}}var t1={getCacheForType:function(t){var e=an(Ht),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return an(Ht).controller.signal}},n1=typeof WeakMap=="function"?WeakMap:Map,it=0,gt=null,qe=null,Ze=0,ot=0,Dn=null,Ra=!1,Fr=!1,Ep=!1,ia=0,Dt=0,Xa=0,hs=0,Tp=0,Nn=0,yr=0,xl=null,yn=null,bh=!1,fc=0,Tx=0,Cu=1/0,wu=null,Pa=null,kt=0,Fa=null,Er=null,Ki=0,Ah=0,Rh=null,bx=null,Sl=0,Ch=null;function In(){return it&2&&Ze!==0?Ze&-Ze:Le.T!==null?Ap():O_()}function Ax(){if(Nn===0)if(!(Ze&536870912)||Je){var t=ro;ro<<=1,!(ro&3932160)&&(ro=262144),Nn=t}else Nn=536870912;return t=Hn.current,t!==null&&(t.flags|=32),Nn}function En(t,e,n){(t===gt&&(ot===2||ot===9)||t.cancelPendingCommit!==null)&&(Tr(t,0),Ca(t,Ze,Nn,!1)),Vl(t,n),(!(it&2)||t!==gt)&&(t===gt&&(!(it&2)&&(hs|=n),Dt===4&&Ca(t,Ze,Nn,!1)),wi(t))}function Rx(t,e,n){if(it&6)throw Error(j(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Gl(t,e),a=i?s1(t,e):Qc(t,e,!0),s=i;do{if(a===0){Fr&&!i&&Ca(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!i1(n)){a=Qc(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var l=t;a=xl;var o=l.current.memoizedState.isDehydrated;if(o&&(Tr(l,r).flags|=256),r=Qc(l,r,!1),r!==2){if(Ep&&!o){l.errorRecoveryDisabledLanes|=s,hs|=s,a=4;break e}s=yn,yn=a,s!==null&&(yn===null?yn=s:yn.push.apply(yn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Tr(t,0),Ca(t,e,0,!0);break}e:{switch(i=t,s=a,s){case 0:case 1:throw Error(j(345));case 4:if((e&4194048)!==e)break;case 6:Ca(i,e,Nn,!Ra);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((e&62914560)===e&&(a=fc+300-On(),10<a)){if(Ca(i,e,Nn,!Ra),ec(i,0,!0)!==0)break e;Ki=e,i.timeoutHandle=Yx(u0.bind(null,i,n,yn,wu,bh,e,Nn,hs,yr,Ra,s,"Throttled",-0,0),a);break e}u0(i,n,yn,wu,bh,e,Nn,hs,yr,Ra,s,null,-0,0)}}break}while(!0);wi(t)}function u0(t,e,n,i,a,s,r,l,o,u,h,d,c,p){if(t.timeoutHandle=-1,d=e.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},Sx(e,s,d);var g=(s&62914560)===s?fc-On():(s&4194048)===s?Tx-On():0;if(g=G1(d,g),g!==null){Ki=s,t.cancelPendingCommit=g(f0.bind(null,t,e,s,n,i,a,r,l,o,h,d,null,c,p)),Ca(t,s,r,!u);return}}f0(t,e,s,n,i,a,r,l,o)}function i1(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!zn(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ca(t,e,n,i){e&=~Tp,e&=~hs,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var s=31-Fn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&U_(t,n,e)}function hc(){return it&6?!0:(Zl(0),!1)}function bp(){if(qe!==null){if(ot===0)var t=qe.return;else t=qe,Wi=bs=null,cp(t),cr=null,wl=0,t=qe;for(;t!==null;)rx(t.alternate,t),t=t.return;qe=null}}function Tr(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,E1(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Ki=0,bp(),gt=t,qe=n=Yi(t.current,null),Ze=e,ot=0,Dn=null,Ra=!1,Fr=Gl(t,e),Ep=!1,yr=Nn=Tp=hs=Xa=Dt=0,yn=xl=null,bh=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-Fn(i),s=1<<a;e|=t[a],i&=~s}return ia=e,ac(),n}function Cx(t,e){Ge=null,Le.H=Ul,e===Pr||e===rc?(e=Gm(),ot=3):e===ip?(e=Gm(),ot=4):ot=e===xp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Dn=e,qe===null&&(Dt=1,bu(t,Kn(e,t.current)))}function wx(){var t=Hn.current;return t===null?!0:(Ze&4194048)===Ze?$n===null:(Ze&62914560)===Ze||Ze&536870912?t===$n:!1}function Dx(){var t=Le.H;return Le.H=Ul,t===null?Ul:t}function Ux(){var t=Le.A;return Le.A=t1,t}function Du(){Dt=4,Ra||(Ze&4194048)!==Ze&&Hn.current!==null||(Fr=!0),!(Xa&134217727)&&!(hs&134217727)||gt===null||Ca(gt,Ze,Nn,!1)}function Qc(t,e,n){var i=it;it|=2;var a=Dx(),s=Ux();(gt!==t||Ze!==e)&&(wu=null,Tr(t,e)),e=!1;var r=Dt;e:do try{if(ot!==0&&qe!==null){var l=qe,o=Dn;switch(ot){case 8:bp(),r=6;break e;case 3:case 2:case 9:case 6:Hn.current===null&&(e=!0);var u=ot;if(ot=0,Dn=null,sr(t,l,o,u),n&&Fr){r=0;break e}break;default:u=ot,ot=0,Dn=null,sr(t,l,o,u)}}a1(),r=Dt;break}catch(h){Cx(t,h)}while(!0);return e&&t.shellSuspendCounter++,Wi=bs=null,it=i,Le.H=a,Le.A=s,qe===null&&(gt=null,Ze=0,ac()),r}function a1(){for(;qe!==null;)Lx(qe)}function s1(t,e){var n=it;it|=2;var i=Dx(),a=Ux();gt!==t||Ze!==e?(wu=null,Cu=On()+500,Tr(t,e)):Fr=Gl(t,e);e:do try{if(ot!==0&&qe!==null){e=qe;var s=Dn;t:switch(ot){case 1:ot=0,Dn=null,sr(t,e,s,1);break;case 2:case 9:if(Hm(s)){ot=0,Dn=null,c0(e);break}e=function(){ot!==2&&ot!==9||gt!==t||(ot=7),wi(t)},s.then(e,e);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:Hm(s)?(ot=0,Dn=null,c0(e)):(ot=0,Dn=null,sr(t,e,s,7));break;case 5:var r=null;switch(qe.tag){case 26:r=qe.memoizedState;case 5:case 27:var l=qe;if(r?$x(r):l.stateNode.complete){ot=0,Dn=null;var o=l.sibling;if(o!==null)qe=o;else{var u=l.return;u!==null?(qe=u,dc(u)):qe=null}break t}}ot=0,Dn=null,sr(t,e,s,5);break;case 6:ot=0,Dn=null,sr(t,e,s,6);break;case 8:bp(),Dt=6;break e;default:throw Error(j(462))}}r1();break}catch(h){Cx(t,h)}while(!0);return Wi=bs=null,Le.H=i,Le.A=a,it=n,qe!==null?0:(gt=null,Ze=0,ac(),Dt)}function r1(){for(;qe!==null&&!wM();)Lx(qe)}function Lx(t){var e=sx(t.alternate,t,ia);t.memoizedProps=t.pendingProps,e===null?dc(t):qe=e}function c0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=i0(n,e,e.pendingProps,e.type,void 0,Ze);break;case 11:e=i0(n,e,e.pendingProps,e.type.render,e.ref,Ze);break;case 5:cp(e);default:rx(n,e),e=qe=rv(e,ia),e=sx(n,e,ia)}t.memoizedProps=t.pendingProps,e===null?dc(t):qe=e}function sr(t,e,n,i){Wi=bs=null,cp(e),cr=null,wl=0;var a=e.return;try{if(Zy(t,a,e,n,Ze)){Dt=1,bu(t,Kn(n,t.current)),qe=null;return}}catch(s){if(a!==null)throw qe=a,s;Dt=1,bu(t,Kn(n,t.current)),qe=null;return}e.flags&32768?(Je||i===1?t=!0:Fr||Ze&536870912?t=!1:(Ra=t=!0,(i===2||i===9||i===3||i===6)&&(i=Hn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Nx(e,t)):dc(e)}function dc(t){var e=t;do{if(e.flags&32768){Nx(e,Ra);return}t=e.return;var n=Jy(e.alternate,e,ia);if(n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Dt===0&&(Dt=5)}function Nx(t,e){do{var n=$y(t.alternate,t);if(n!==null){n.flags&=32767,qe=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){qe=t;return}qe=t=n}while(t!==null);Dt=6,qe=null}function f0(t,e,n,i,a,s,r,l,o){t.cancelPendingCommit=null;do pc();while(kt!==0);if(it&6)throw Error(j(327));if(e!==null){if(e===t.current)throw Error(j(177));if(s=e.lanes|e.childLanes,s|=Qd,zM(t,n,s,r,l,o),t===gt&&(qe=gt=null,Ze=0),Er=e,Fa=t,Ki=n,Ah=s,Rh=a,bx=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,c1(pu,function(){return Bx(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Le.T,Le.T=null,a=at.p,at.p=2,r=it,it|=4;try{jy(t,e,n)}finally{it=r,at.p=a,Le.T=i}}kt=1,Ox(),Px(),Fx()}}function Ox(){if(kt===1){kt=0;var t=Fa,e=Er,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Le.T,Le.T=null;var i=at.p;at.p=2;var a=it;it|=4;try{_x(e,t);var s=Lh,r=$_(t.containerInfo),l=s.focusedElem,o=s.selectionRange;if(r!==l&&l&&l.ownerDocument&&J_(l.ownerDocument.documentElement,l)){if(o!==null&&Kd(l)){var u=o.start,h=o.end;if(h===void 0&&(h=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(h,l.value.length);else{var d=l.ownerDocument||document,c=d&&d.defaultView||window;if(c.getSelection){var p=c.getSelection(),g=l.textContent.length,y=Math.min(o.start,g),m=o.end===void 0?y:Math.min(o.end,g);!p.extend&&y>m&&(r=m,m=y,y=r);var f=Nm(l,y),x=Nm(l,m);if(f&&x&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==x.node||p.focusOffset!==x.offset)){var M=d.createRange();M.setStart(f.node,f.offset),p.removeAllRanges(),y>m?(p.addRange(M),p.extend(x.node,x.offset)):(M.setEnd(x.node,x.offset),p.addRange(M))}}}}for(d=[],p=l;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<d.length;l++){var _=d[l];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Bu=!!Uh,Lh=Uh=null}finally{it=a,at.p=i,Le.T=n}}t.current=e,kt=2}}function Px(){if(kt===2){kt=0;var t=Fa,e=Er,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Le.T,Le.T=null;var i=at.p;at.p=2;var a=it;it|=4;try{hx(t,e.alternate,e)}finally{it=a,at.p=i,Le.T=n}}kt=3}}function Fx(){if(kt===4||kt===3){kt=0,DM();var t=Fa,e=Er,n=Ki,i=bx;e.subtreeFlags&10256||e.flags&10256?kt=5:(kt=0,Er=Fa=null,Ix(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Pa=null),Vd(n),e=e.stateNode,Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Hl,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Le.T,a=at.p,at.p=2,Le.T=null;try{for(var s=t.onRecoverableError,r=0;r<i.length;r++){var l=i[r];s(l.value,{componentStack:l.stack})}}finally{Le.T=e,at.p=a}}Ki&3&&pc(),wi(t),a=t.pendingLanes,n&261930&&a&42?t===Ch?Sl++:(Sl=0,Ch=t):Sl=0,Zl(0)}}function Ix(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Wl(e)))}function pc(){return Ox(),Px(),Fx(),Bx()}function Bx(){if(kt!==5)return!1;var t=Fa,e=Ah;Ah=0;var n=Vd(Ki),i=Le.T,a=at.p;try{at.p=32>n?32:n,Le.T=null,n=Rh,Rh=null;var s=Fa,r=Ki;if(kt=0,Er=Fa=null,Ki=0,it&6)throw Error(j(331));var l=it;if(it|=4,yx(s.current),xx(s,s.current,r,n),it=l,Zl(0,!1),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Hl,s)}catch{}return!0}finally{at.p=a,Le.T=i,Ix(t,e)}}function h0(t,e,n){e=Kn(n,e),e=Mh(t.stateNode,e,2),t=Oa(t,e,2),t!==null&&(Vl(t,2),wi(t))}function ut(t,e,n){if(t.tag===3)h0(t,t,n);else for(;e!==null;){if(e.tag===3){h0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pa===null||!Pa.has(i))){t=Kn(n,t),n=jv(2),i=Oa(e,n,2),i!==null&&(ex(n,i,e,t),Vl(i,2),wi(i));break}}e=e.return}}function Jc(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new n1;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Ep=!0,a.add(n),t=l1.bind(null,t,e,n),e.then(t,t))}function l1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,gt===t&&(Ze&n)===n&&(Dt===4||Dt===3&&(Ze&62914560)===Ze&&300>On()-fc?!(it&2)&&Tr(t,0):Tp|=n,yr===Ze&&(yr=0)),wi(t)}function zx(t,e){e===0&&(e=D_()),t=Ts(t,e),t!==null&&(Vl(t,e),wi(t))}function o1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zx(t,n)}function u1(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(e),zx(t,n)}function c1(t,e){return Hd(t,e)}var Uu=null,Ys=null,wh=!1,Lu=!1,$c=!1,wa=0;function wi(t){t!==Ys&&t.next===null&&(Ys===null?Uu=Ys=t:Ys=Ys.next=t),Lu=!0,wh||(wh=!0,h1())}function Zl(t,e){if(!$c&&Lu){$c=!0;do for(var n=!1,i=Uu;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,l=i.pingedLanes;s=(1<<31-Fn(42|t)+1)-1,s&=a&~(r&~l),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,d0(i,s))}else s=Ze,s=ec(i,i===gt?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Gl(i,s)||(n=!0,d0(i,s));i=i.next}while(n);$c=!1}}function f1(){Hx()}function Hx(){Lu=wh=!1;var t=0;wa!==0&&y1()&&(t=wa);for(var e=On(),n=null,i=Uu;i!==null;){var a=i.next,s=Gx(i,e);s===0?(i.next=null,n===null?Uu=a:n.next=a,a===null&&(Ys=n)):(n=i,(t!==0||s&3)&&(Lu=!0)),i=a}kt!==0&&kt!==5||Zl(t),wa!==0&&(wa=0)}function Gx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-Fn(s),l=1<<r,o=a[r];o===-1?(!(l&n)||l&i)&&(a[r]=BM(l,e)):o<=e&&(t.expiredLanes|=l),s&=~l}if(e=gt,n=Ze,n=ec(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ot===2||ot===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Ac(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Gl(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Ac(i),Vd(n)){case 2:case 8:n=C_;break;case 32:n=pu;break;case 268435456:n=w_;break;default:n=pu}return i=Vx.bind(null,t),n=Hd(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Ac(i),t.callbackPriority=2,t.callbackNode=null,2}function Vx(t,e){if(kt!==0&&kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(pc()&&t.callbackNode!==n)return null;var i=Ze;return i=ec(t,t===gt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Rx(t,i,e),Gx(t,On()),t.callbackNode!=null&&t.callbackNode===n?Vx.bind(null,t):null)}function d0(t,e){if(pc())return null;Rx(t,e,!0)}function h1(){T1(function(){it&6?Hd(R_,f1):Hx()})}function Ap(){if(wa===0){var t=xr;t===0&&(t=so,so<<=1,!(so&261888)&&(so=256)),wa=t}return wa}function p0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Wo(""+t)}function m0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function d1(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var s=p0((a[bn]||null).action),r=i.submitter;r&&(e=(e=r[bn]||null)?p0(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var l=new tc("action","action",null,i,a);t.push({event:l,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(wa!==0){var o=r?m0(a,r):new FormData(a);xh(n,{pending:!0,data:o,method:a.method,action:s},null,o)}}else typeof s=="function"&&(l.preventDefault(),o=r?m0(a,r):new FormData(a),xh(n,{pending:!0,data:o,method:a.method,action:s},s,o))},currentTarget:a}]})}}for(var jc=0;jc<lh.length;jc++){var ef=lh[jc],p1=ef.toLowerCase(),m1=ef[0].toUpperCase()+ef.slice(1);ci(p1,"on"+m1)}ci(ev,"onAnimationEnd");ci(tv,"onAnimationIteration");ci(nv,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(Uy,"onTransitionRun");ci(Ly,"onTransitionStart");ci(Ny,"onTransitionCancel");ci(iv,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ll));function Xx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var r=i.length-1;0<=r;r--){var l=i[r],o=l.instance,u=l.currentTarget;if(l=l.listener,o!==s&&a.isPropagationStopped())break e;s=l,a.currentTarget=u;try{s(a)}catch(h){gu(h)}a.currentTarget=null,s=o}else for(r=0;r<i.length;r++){if(l=i[r],o=l.instance,u=l.currentTarget,l=l.listener,o!==s&&a.isPropagationStopped())break e;s=l,a.currentTarget=u;try{s(a)}catch(h){gu(h)}a.currentTarget=null,s=o}}}}function We(t,e){var n=e[jf];n===void 0&&(n=e[jf]=new Set);var i=t+"__bubble";n.has(i)||(kx(e,t,2,!1),n.add(i))}function tf(t,e,n){var i=0;e&&(i|=4),kx(n,t,i,e)}var go="_reactListening"+Math.random().toString(36).slice(2);function Rp(t){if(!t[go]){t[go]=!0,P_.forEach(function(n){n!=="selectionchange"&&(g1.has(n)||tf(n,!1,t),tf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[go]||(e[go]=!0,tf("selectionchange",!1,e))}}function kx(t,e,n,i){switch(iS(e)){case 2:var a=k1;break;case 8:a=W1;break;default:a=Up}n=a.bind(null,e,n,t),a=void 0,!ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function nf(t,e,n,i,a){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var l=i.stateNode.containerInfo;if(l===a)break;if(r===4)for(r=i.return;r!==null;){var o=r.tag;if((o===3||o===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;l!==null;){if(r=Qs(l),r===null)return;if(o=r.tag,o===5||o===6||o===26||o===27){i=s=r;continue e}l=l.parentNode}}i=i.return}X_(function(){var u=s,h=Wd(n),d=[];e:{var c=av.get(t);if(c!==void 0){var p=tc,g=t;switch(t){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":p=uy;break;case"focusin":g="focus",p=Uc;break;case"focusout":g="blur",p=Uc;break;case"beforeblur":case"afterblur":p=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=JM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=hy;break;case ev:case tv:case nv:p=ey;break;case iv:p=py;break;case"scroll":case"scrollend":p=KM;break;case"wheel":p=gy;break;case"copy":case"cut":case"paste":p=ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bm;break;case"toggle":case"beforetoggle":p=vy}var y=(e&4)!==0,m=!y&&(t==="scroll"||t==="scrollend"),f=y?c!==null?c+"Capture":null:c;y=[];for(var x=u,M;x!==null;){var _=x;if(M=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||M===null||f===null||(_=Tl(x,f),_!=null&&y.push(Nl(x,_,M))),m)break;x=x.return}0<y.length&&(c=new p(c,g,null,n,h),d.push({event:c,listeners:y}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",c&&n!==ih&&(g=n.relatedTarget||n.fromElement)&&(Qs(g)||g[Lr]))break e;if((p||c)&&(c=h.window===h?h:(c=h.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Qs(g):null,g!==null&&(m=zl(g),y=g.tag,g!==m||y!==5&&y!==27&&y!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Em,_="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=bm,_="onPointerLeave",f="onPointerEnter",x="pointer"),m=p==null?c:il(p),M=g==null?c:il(g),c=new y(_,x+"leave",p,n,h),c.target=m,c.relatedTarget=M,_=null,Qs(h)===u&&(y=new y(f,x+"enter",g,n,h),y.target=M,y.relatedTarget=m,_=y),m=_,p&&g)t:{for(y=_1,f=p,x=g,M=0,_=f;_;_=y(_))M++;_=0;for(var b=x;b;b=y(b))_++;for(;0<M-_;)f=y(f),M--;for(;0<_-M;)x=y(x),_--;for(;M--;){if(f===x||x!==null&&f===x.alternate){y=f;break t}f=y(f),x=y(x)}y=null}else y=null;p!==null&&g0(d,c,p,y,!1),g!==null&&m!==null&&g0(d,m,g,y,!0)}}e:{if(c=u?il(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var T=wm;else if(Cm(c))if(K_)T=Cy;else{T=Ay;var R=by}else p=c.nodeName,!p||p.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&kd(u.elementType)&&(T=wm):T=Ry;if(T&&(T=T(t,u))){Z_(d,T,n,h);break e}R&&R(t,c,u),t==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&nh(c,"number",c.value)}switch(R=u?il(u):window,t){case"focusin":(Cm(R)||R.contentEditable==="true")&&(js=R,sh=u,fl=null);break;case"focusout":fl=sh=js=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,Om(d,n,h);break;case"selectionchange":if(Dy)break;case"keydown":case"keyup":Om(d,n,h)}var v;if(Zd)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else $s?q_(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(W_&&n.locale!=="ko"&&($s||A!=="onCompositionStart"?A==="onCompositionEnd"&&$s&&(v=k_()):(Aa=h,qd="value"in Aa?Aa.value:Aa.textContent,$s=!0)),R=Nu(u,A),0<R.length&&(A=new Tm(A,t,null,n,h),d.push({event:A,listeners:R}),v?A.data=v:(v=Y_(n),v!==null&&(A.data=v)))),(v=Sy?My(t,n):yy(t,n))&&(A=Nu(u,"onBeforeInput"),0<A.length&&(R=new Tm("onBeforeInput","beforeinput",null,n,h),d.push({event:R,listeners:A}),R.data=v)),d1(d,t,u,n,h)}Xx(d,e)})}function Nl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nu(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Tl(t,n),a!=null&&i.unshift(Nl(t,a,s)),a=Tl(t,e),a!=null&&i.push(Nl(t,a,s))),t.tag===3)return i;t=t.return}return[]}function _1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function g0(t,e,n,i,a){for(var s=e._reactName,r=[];n!==null&&n!==i;){var l=n,o=l.alternate,u=l.stateNode;if(l=l.tag,o!==null&&o===i)break;l!==5&&l!==26&&l!==27||u===null||(o=u,a?(u=Tl(n,s),u!=null&&r.unshift(Nl(n,u,o))):a||(u=Tl(n,s),u!=null&&r.push(Nl(n,u,o)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var v1=/\r\n?/g,x1=/\u0000|\uFFFD/g;function _0(t){return(typeof t=="string"?t:""+t).replace(v1,`
`).replace(x1,"")}function Wx(t,e){return e=_0(e),_0(t)===e}function ht(t,e,n,i,a,s){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||vr(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&vr(t,""+i);break;case"className":oo(t,"class",i);break;case"tabIndex":oo(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":oo(t,n,i);break;case"style":V_(t,i,s);break;case"data":if(e!=="object"){oo(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Wo(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&ht(t,e,"name",a.name,a,null),ht(t,e,"formEncType",a.formEncType,a,null),ht(t,e,"formMethod",a.formMethod,a,null),ht(t,e,"formTarget",a.formTarget,a,null)):(ht(t,e,"encType",a.encType,a,null),ht(t,e,"method",a.method,a,null),ht(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Wo(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=ki);break;case"onScroll":i!=null&&We("scroll",t);break;case"onScrollEnd":i!=null&&We("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(j(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Wo(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":We("beforetoggle",t),We("toggle",t),ko(t,"popover",i);break;case"xlinkActuate":Di(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Di(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Di(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Di(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Di(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Di(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Di(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Di(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Di(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ko(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=YM.get(n)||n,ko(t,n,i))}}function Dh(t,e,n,i,a,s){switch(n){case"style":V_(t,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(j(60));t.innerHTML=n}}break;case"children":typeof i=="string"?vr(t,i):(typeof i=="number"||typeof i=="bigint")&&vr(t,""+i);break;case"onScroll":i!=null&&We("scroll",t);break;case"onScrollEnd":i!=null&&We("scrollend",t);break;case"onClick":i!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!F_.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),s=t[bn]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):ko(t,n,i)}}}function rn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":We("error",t),We("load",t);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,e));default:ht(t,e,s,r,n,null)}}a&&ht(t,e,"srcSet",n.srcSet,n,null),i&&ht(t,e,"src",n.src,n,null);return;case"input":We("invalid",t);var l=s=r=a=null,o=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":o=h;break;case"defaultChecked":u=h;break;case"value":s=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(j(137,e));break;default:ht(t,e,i,h,n,null)}}z_(t,s,l,o,u,r,a,!1);return;case"select":We("invalid",t),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(l=n[a],l!=null))switch(a){case"value":s=l;break;case"defaultValue":r=l;break;case"multiple":i=l;default:ht(t,e,a,l,n,null)}e=s,n=r,t.multiple=!!i,e!=null?lr(t,!!i,e,!1):n!=null&&lr(t,!!i,n,!0);return;case"textarea":We("invalid",t),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(l=n[r],l!=null))switch(r){case"value":i=l;break;case"defaultValue":a=l;break;case"children":s=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(j(91));break;default:ht(t,e,r,l,n,null)}G_(t,i,a,s);return;case"option":for(o in n)if(n.hasOwnProperty(o)&&(i=n[o],i!=null))switch(o){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ht(t,e,o,i,n,null)}return;case"dialog":We("beforetoggle",t),We("toggle",t),We("cancel",t),We("close",t);break;case"iframe":case"object":We("load",t);break;case"video":case"audio":for(i=0;i<Ll.length;i++)We(Ll[i],t);break;case"image":We("error",t),We("load",t);break;case"details":We("toggle",t);break;case"embed":case"source":case"link":We("error",t),We("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,e));default:ht(t,e,u,i,n,null)}return;default:if(kd(e)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Dh(t,e,h,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null&&ht(t,e,l,i,n,null))}function S1(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,l=null,o=null,u=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":o=d;default:i.hasOwnProperty(p)||ht(t,e,p,null,i,d)}}for(var c in i){var p=i[c];if(d=n[c],i.hasOwnProperty(c)&&(p!=null||d!=null))switch(c){case"type":s=p;break;case"name":a=p;break;case"checked":u=p;break;case"defaultChecked":h=p;break;case"value":r=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(j(137,e));break;default:p!==d&&ht(t,e,c,p,i,d)}}th(t,r,l,o,u,h,s,a);return;case"select":p=r=l=c=null;for(s in n)if(o=n[s],n.hasOwnProperty(s)&&o!=null)switch(s){case"value":break;case"multiple":p=o;default:i.hasOwnProperty(s)||ht(t,e,s,null,i,o)}for(a in i)if(s=i[a],o=n[a],i.hasOwnProperty(a)&&(s!=null||o!=null))switch(a){case"value":c=s;break;case"defaultValue":l=s;break;case"multiple":r=s;default:s!==o&&ht(t,e,a,s,i,o)}e=l,n=r,i=p,c!=null?lr(t,!!n,c,!1):!!i!=!!n&&(e!=null?lr(t,!!n,e,!0):lr(t,!!n,n?[]:"",!1));return;case"textarea":p=c=null;for(l in n)if(a=n[l],n.hasOwnProperty(l)&&a!=null&&!i.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:ht(t,e,l,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":c=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(j(91));break;default:a!==s&&ht(t,e,r,a,i,s)}H_(t,c,p);return;case"option":for(var g in n)if(c=n[g],n.hasOwnProperty(g)&&c!=null&&!i.hasOwnProperty(g))switch(g){case"selected":t.selected=!1;break;default:ht(t,e,g,null,i,c)}for(o in i)if(c=i[o],p=n[o],i.hasOwnProperty(o)&&c!==p&&(c!=null||p!=null))switch(o){case"selected":t.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ht(t,e,o,c,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)c=n[y],n.hasOwnProperty(y)&&c!=null&&!i.hasOwnProperty(y)&&ht(t,e,y,null,i,c);for(u in i)if(c=i[u],p=n[u],i.hasOwnProperty(u)&&c!==p&&(c!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(j(137,e));break;default:ht(t,e,u,c,i,p)}return;default:if(kd(e)){for(var m in n)c=n[m],n.hasOwnProperty(m)&&c!==void 0&&!i.hasOwnProperty(m)&&Dh(t,e,m,void 0,i,c);for(h in i)c=i[h],p=n[h],!i.hasOwnProperty(h)||c===p||c===void 0&&p===void 0||Dh(t,e,h,c,i,p);return}}for(var f in n)c=n[f],n.hasOwnProperty(f)&&c!=null&&!i.hasOwnProperty(f)&&ht(t,e,f,null,i,c);for(d in i)c=i[d],p=n[d],!i.hasOwnProperty(d)||c===p||c==null&&p==null||ht(t,e,d,c,i,p)}function v0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,l=a.duration;if(s&&l&&v0(r)){for(r=0,l=a.responseEnd,i+=1;i<n.length;i++){var o=n[i],u=o.startTime;if(u>l)break;var h=o.transferSize,d=o.initiatorType;h&&v0(d)&&(o=o.responseEnd,r+=h*(o<l?1:(l-u)/(o-u)))}if(--i,e+=8*(s+r)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Uh=null,Lh=null;function Ou(t){return t.nodeType===9?t:t.ownerDocument}function x0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qx(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var af=null;function y1(){var t=window.event;return t&&t.type==="popstate"?t===af?!1:(af=t,!0):(af=null,!1)}var Yx=typeof setTimeout=="function"?setTimeout:void 0,E1=typeof clearTimeout=="function"?clearTimeout:void 0,S0=typeof Promise=="function"?Promise:void 0,T1=typeof queueMicrotask=="function"?queueMicrotask:typeof S0<"u"?function(t){return S0.resolve(null).then(t).catch(b1)}:Yx;function b1(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function M0(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),Ar(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ml(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Ml(n);for(var s=n.firstChild;s;){var r=s.nextSibling,l=s.nodeName;s[Xl]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Ml(t.ownerDocument.body);n=a}while(n);Ar(e)}function y0(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Oh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Oh(n),Xd(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function A1(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Xl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=jn(t.nextSibling),t===null)break}return null}function R1(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=jn(t.nextSibling),t===null))return null;return t}function Zx(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=jn(t.nextSibling),t===null))return null;return t}function Ph(t){return t.data==="$?"||t.data==="$~"}function Fh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function C1(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ih=null;function E0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return jn(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function T0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Kx(t,e,n){switch(e=Ou(n),t){case"html":if(t=e.documentElement,!t)throw Error(j(452));return t;case"head":if(t=e.head,!t)throw Error(j(453));return t;case"body":if(t=e.body,!t)throw Error(j(454));return t;default:throw Error(j(451))}}function Ml(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Xd(t)}var ei=new Map,b0=new Set;function Pu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=at.d;at.d={f:w1,r:D1,D:U1,C:L1,L:N1,m:O1,X:F1,S:P1,M:I1};function w1(){var t=ra.f(),e=hc();return t||e}function D1(t){var e=Nr(t);e!==null&&e.tag===5&&e.type==="form"?Vv(e):ra.r(t)}var Ir=typeof document>"u"?null:document;function Qx(t,e,n){var i=Ir;if(i&&typeof e=="string"&&e){var a=Zn(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),b0.has(a)||(b0.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),rn(e,"link",t),Jt(e),i.head.appendChild(e)))}}function U1(t){ra.D(t),Qx("dns-prefetch",t,null)}function L1(t,e){ra.C(t,e),Qx("preconnect",t,e)}function N1(t,e,n){ra.L(t,e,n);var i=Ir;if(i&&t&&e){var a='link[rel="preload"][as="'+Zn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Zn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Zn(n.imageSizes)+'"]')):a+='[href="'+Zn(t)+'"]';var s=a;switch(e){case"style":s=br(t);break;case"script":s=Br(t)}ei.has(s)||(t=Et({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),ei.set(s,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(Kl(s))||e==="script"&&i.querySelector(Ql(s))||(e=i.createElement("link"),rn(e,"link",t),Jt(e),i.head.appendChild(e)))}}function O1(t,e){ra.m(t,e);var n=Ir;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Zn(i)+'"][href="'+Zn(t)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Br(t)}if(!ei.has(s)&&(t=Et({rel:"modulepreload",href:t},e),ei.set(s,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ql(s)))return}i=n.createElement("link"),rn(i,"link",t),Jt(i),n.head.appendChild(i)}}}function P1(t,e,n){ra.S(t,e,n);var i=Ir;if(i&&t){var a=rr(i).hoistableStyles,s=br(t);e=e||"default";var r=a.get(s);if(!r){var l={loading:0,preload:null};if(r=i.querySelector(Kl(s)))l.loading=5;else{t=Et({rel:"stylesheet",href:t,"data-precedence":e},n),(n=ei.get(s))&&Cp(t,n);var o=r=i.createElement("link");Jt(o),rn(o,"link",t),o._p=new Promise(function(u,h){o.onload=u,o.onerror=h}),o.addEventListener("load",function(){l.loading|=1}),o.addEventListener("error",function(){l.loading|=2}),l.loading|=4,tu(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:l},a.set(s,r)}}}function F1(t,e){ra.X(t,e);var n=Ir;if(n&&t){var i=rr(n).hoistableScripts,a=Br(t),s=i.get(a);s||(s=n.querySelector(Ql(a)),s||(t=Et({src:t,async:!0},e),(e=ei.get(a))&&wp(t,e),s=n.createElement("script"),Jt(s),rn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function I1(t,e){ra.M(t,e);var n=Ir;if(n&&t){var i=rr(n).hoistableScripts,a=Br(t),s=i.get(a);s||(s=n.querySelector(Ql(a)),s||(t=Et({src:t,async:!0,type:"module"},e),(e=ei.get(a))&&wp(t,e),s=n.createElement("script"),Jt(s),rn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function A0(t,e,n,i){var a=(a=Ua.current)?Pu(a):null;if(!a)throw Error(j(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=br(n.href),n=rr(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=br(n.href);var s=rr(a).hoistableStyles,r=s.get(t);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=a.querySelector(Kl(t)))&&!s._p&&(r.instance=s,r.state.loading=5),ei.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ei.set(t,n),s||B1(a,t,n,r.state))),e&&i===null)throw Error(j(528,""));return r}if(e&&i!==null)throw Error(j(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Br(n),n=rr(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,t))}}function br(t){return'href="'+Zn(t)+'"'}function Kl(t){return'link[rel="stylesheet"]['+t+"]"}function Jx(t){return Et({},t,{"data-precedence":t.precedence,precedence:null})}function B1(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),rn(e,"link",n),Jt(e),t.head.appendChild(e))}function Br(t){return'[src="'+Zn(t)+'"]'}function Ql(t){return"script[async]"+t}function R0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Zn(n.href)+'"]');if(i)return e.instance=i,Jt(i),i;var a=Et({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Jt(i),rn(i,"style",a),tu(i,n.precedence,t),e.instance=i;case"stylesheet":a=br(n.href);var s=t.querySelector(Kl(a));if(s)return e.state.loading|=4,e.instance=s,Jt(s),s;i=Jx(n),(a=ei.get(a))&&Cp(i,a),s=(t.ownerDocument||t).createElement("link"),Jt(s);var r=s;return r._p=new Promise(function(l,o){r.onload=l,r.onerror=o}),rn(s,"link",i),e.state.loading|=4,tu(s,n.precedence,t),e.instance=s;case"script":return s=Br(n.src),(a=t.querySelector(Ql(s)))?(e.instance=a,Jt(a),a):(i=n,(a=ei.get(s))&&(i=Et({},n),wp(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Jt(a),rn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(j(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,tu(i,n.precedence,t));return e.instance}function tu(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var l=i[r];if(l.dataset.precedence===e)s=l;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Cp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function wp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var nu=null;function C0(t,e,n){if(nu===null){var i=new Map,a=nu=new Map;a.set(n,i)}else a=nu,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[Xl]||s[tn]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var l=i.get(r);l?l.push(s):i.set(r,[s])}}return i}function w0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function z1(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function $x(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function H1(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=br(i.href),s=e.querySelector(Kl(a));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Fu.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,Jt(s);return}s=e.ownerDocument||e,i=Jx(i),(a=ei.get(a))&&Cp(i,a),s=s.createElement("link"),Jt(s);var r=s;r._p=new Promise(function(l,o){r.onload=l,r.onerror=o}),rn(s,"link",i),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Fu.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var sf=0;function G1(t,e){return t.stylesheets&&t.count===0&&iu(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&iu(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&sf===0&&(sf=62500*M1());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&iu(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>sf?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)iu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Iu=null;function iu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Iu=new Map,e.forEach(V1,t),Iu=null,Fu.call(t))}function V1(t,e){if(!(e.state.loading&4)){var n=Iu.get(t);if(n)var i=n.get(null);else{n=new Map,Iu.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=e.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Fu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Ol={$$typeof:Xi,Provider:null,Consumer:null,_currentValue:os,_currentValue2:os,_threadCount:0};function X1(t,e,n,i,a,s,r,l,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rc(0),this.hiddenUpdates=Rc(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function jx(t,e,n,i,a,s,r,l,o,u,h,d){return t=new X1(t,e,n,r,o,u,h,d,l),e=1,s===!0&&(e|=24),s=Ln(3,null,null,e),t.current=s,s.stateNode=t,e=tp(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},ap(s),t}function eS(t){return t?(t=nr,t):nr}function tS(t,e,n,i,a,s){a=eS(a),i.context===null?i.context=a:i.pendingContext=a,i=Na(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Oa(t,i,e),n!==null&&(En(n,t,e),dl(n,t,e))}function D0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dp(t,e){D0(t,e),(t=t.alternate)&&D0(t,e)}function nS(t){if(t.tag===13||t.tag===31){var e=Ts(t,67108864);e!==null&&En(e,t,67108864),Dp(t,67108864)}}function U0(t){if(t.tag===13||t.tag===31){var e=In();e=Gd(e);var n=Ts(t,e);n!==null&&En(n,t,e),Dp(t,e)}}var Bu=!0;function k1(t,e,n,i){var a=Le.T;Le.T=null;var s=at.p;try{at.p=2,Up(t,e,n,i)}finally{at.p=s,Le.T=a}}function W1(t,e,n,i){var a=Le.T;Le.T=null;var s=at.p;try{at.p=8,Up(t,e,n,i)}finally{at.p=s,Le.T=a}}function Up(t,e,n,i){if(Bu){var a=Bh(i);if(a===null)nf(t,e,i,zu,n),L0(t,i);else if(Y1(a,t,e,n,i))i.stopPropagation();else if(L0(t,i),e&4&&-1<q1.indexOf(t)){for(;a!==null;){var s=Nr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=es(s.pendingLanes);if(r!==0){var l=s;for(l.pendingLanes|=2,l.entangledLanes|=2;r;){var o=1<<31-Fn(r);l.entanglements[1]|=o,r&=~o}wi(s),!(it&6)&&(Cu=On()+500,Zl(0))}}break;case 31:case 13:l=Ts(s,2),l!==null&&En(l,s,2),hc(),Dp(s,2)}if(s=Bh(i),s===null&&nf(t,e,i,zu,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else nf(t,e,i,null,n)}}function Bh(t){return t=Wd(t),Lp(t)}var zu=null;function Lp(t){if(zu=null,t=Qs(t),t!==null){var e=zl(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=y_(e),t!==null)return t;t=null}else if(n===31){if(t=E_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return zu=t,null}function iS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(UM()){case R_:return 2;case C_:return 8;case pu:case LM:return 32;case w_:return 268435456;default:return 32}default:return 32}}var zh=!1,Ia=null,Ba=null,za=null,Pl=new Map,Fl=new Map,Ea=[],q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L0(t,e){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Pl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(e.pointerId)}}function Yr(t,e,n,i,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},e!==null&&(e=Nr(e),e!==null&&nS(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Y1(t,e,n,i,a){switch(e){case"focusin":return Ia=Yr(Ia,t,e,n,i,a),!0;case"dragenter":return Ba=Yr(Ba,t,e,n,i,a),!0;case"mouseover":return za=Yr(za,t,e,n,i,a),!0;case"pointerover":var s=a.pointerId;return Pl.set(s,Yr(Pl.get(s)||null,t,e,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Fl.set(s,Yr(Fl.get(s)||null,t,e,n,i,a)),!0}return!1}function aS(t){var e=Qs(t.target);if(e!==null){var n=zl(e);if(n!==null){if(e=n.tag,e===13){if(e=y_(n),e!==null){t.blockedOn=e,gm(t.priority,function(){U0(n)});return}}else if(e===31){if(e=E_(n),e!==null){t.blockedOn=e,gm(t.priority,function(){U0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function au(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bh(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ih=i,n.target.dispatchEvent(i),ih=null}else return e=Nr(n),e!==null&&nS(e),t.blockedOn=n,!1;e.shift()}return!0}function N0(t,e,n){au(t)&&n.delete(e)}function Z1(){zh=!1,Ia!==null&&au(Ia)&&(Ia=null),Ba!==null&&au(Ba)&&(Ba=null),za!==null&&au(za)&&(za=null),Pl.forEach(N0),Fl.forEach(N0)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,zh||(zh=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,Z1)))}var vo=null;function O0(t){vo!==t&&(vo=t,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,function(){vo===t&&(vo=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Lp(i||n)===null)continue;break}var s=Nr(n);s!==null&&(t.splice(e,3),e-=3,xh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Ar(t){function e(o){return _o(o,t)}Ia!==null&&_o(Ia,t),Ba!==null&&_o(Ba,t),za!==null&&_o(za,t),Pl.forEach(e),Fl.forEach(e);for(var n=0;n<Ea.length;n++){var i=Ea[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ea.length&&(n=Ea[0],n.blockedOn===null);)aS(n),n.blockedOn===null&&Ea.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[bn]||null;if(typeof s=="function")r||O0(n);else if(r){var l=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[bn]||null)l=r.formAction;else if(Lp(a)!==null)continue}else l=r.action;typeof l=="function"?n[i+1]=l:(n.splice(i,3),i-=3),O0(n)}}}function sS(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Np(t){this._internalRoot=t}mc.prototype.render=Np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));var n=e.current,i=In();tS(n,i,t,e,null,null)};mc.prototype.unmount=Np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;tS(t.current,2,null,t,null,null),hc(),e[Lr]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=O_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ea.length&&e!==0&&e<Ea[n].priority;n++);Ea.splice(n,0,t),n===0&&aS(t)}};var P0=S_.version;if(P0!=="19.2.8")throw Error(j(527,P0,"19.2.8"));at.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=TM(e),t=t!==null?T_(t):null,t=t===null?null:t.stateNode,t};var K1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Le,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Hl=xo.inject(K1),Pn=xo}catch{}}$u.createRoot=function(t,e){if(!M_(t))throw Error(j(299));var n=!1,i="",a=Qv,s=Jv,r=$v;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jx(t,1,!1,null,null,n,i,null,a,s,r,sS),t[Lr]=e.current,Rp(t),new Np(e)};$u.hydrateRoot=function(t,e,n){if(!M_(t))throw Error(j(299));var i=!1,a="",s=Qv,r=Jv,l=$v,o=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(o=n.formState)),e=jx(t,1,!0,e,n??null,i,a,o,s,r,l,sS),e.context=eS(null),n=e.current,i=In(),i=Gd(i),a=Na(i),a.callback=null,Oa(n,a,i),n=i,e.current.lanes=n,Vl(e,n),wi(e),t[Lr]=e.current,Rp(t),new mc(e)};$u.version="19.2.8";function rS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rS)}catch(t){console.error(t)}}rS(),p_.exports=$u;var Q1=p_.exports;function yl(t){let e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)}function Hh(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function J1(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}function F0(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function I0(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function $1(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function j1(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function rf(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function eE(t,e){let n=e[0]-t[0],i=e[1]-t[1],a=e[2]-t[2];return Math.sqrt(n*n+i*i+a*a)}function tE(t,e){let n=e[0]-t[0],i=e[1]-t[1],a=e[2]-t[2];return n*n+i*i+a*a}function B0(t){let e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i}function nE(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function iE(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function Gh(t,e){let n=e[0],i=e[1],a=e[2],s=n*n+i*i+a*a;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function lS(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function z0(t,e,n){let i=e[0],a=e[1],s=e[2],r=n[0],l=n[1],o=n[2];return t[0]=a*o-s*l,t[1]=s*r-i*o,t[2]=i*l-a*r,t}function aE(t,e,n,i){let a=e[0],s=e[1],r=e[2];return t[0]=a+i*(n[0]-a),t[1]=s+i*(n[1]-s),t[2]=r+i*(n[2]-r),t}function sE(t,e,n,i,a){const s=Math.exp(-i*a);let r=e[0],l=e[1],o=e[2];return t[0]=n[0]+(r-n[0])*s,t[1]=n[1]+(l-n[1])*s,t[2]=n[2]+(o-n[2])*s,t}function rE(t,e,n){let i=e[0],a=e[1],s=e[2],r=n[3]*i+n[7]*a+n[11]*s+n[15];return r=r||1,t[0]=(n[0]*i+n[4]*a+n[8]*s+n[12])/r,t[1]=(n[1]*i+n[5]*a+n[9]*s+n[13])/r,t[2]=(n[2]*i+n[6]*a+n[10]*s+n[14])/r,t}function lE(t,e,n){let i=e[0],a=e[1],s=e[2],r=n[3]*i+n[7]*a+n[11]*s+n[15];return r=r||1,t[0]=(n[0]*i+n[4]*a+n[8]*s)/r,t[1]=(n[1]*i+n[5]*a+n[9]*s)/r,t[2]=(n[2]*i+n[6]*a+n[10]*s)/r,t}function oE(t,e,n){let i=e[0],a=e[1],s=e[2];return t[0]=i*n[0]+a*n[3]+s*n[6],t[1]=i*n[1]+a*n[4]+s*n[7],t[2]=i*n[2]+a*n[5]+s*n[8],t}function uE(t,e,n){let i=e[0],a=e[1],s=e[2],r=n[0],l=n[1],o=n[2],u=n[3],h=l*s-o*a,d=o*i-r*s,c=r*a-l*i,p=l*c-o*d,g=o*h-r*c,y=r*d-l*h,m=u*2;return h*=m,d*=m,c*=m,p*=2,g*=2,y*=2,t[0]=i+h+p,t[1]=a+d+g,t[2]=s+c+y,t}const cE=function(){const t=[0,0,0],e=[0,0,0];return function(n,i){Hh(t,n),Hh(e,i),Gh(t,t),Gh(e,e);let a=lS(t,e);return a>1?0:a<-1?Math.PI:Math.acos(a)}}();function fE(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class cn extends Array{constructor(e=0,n=e,i=e){return super(e,n,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,i=e){return e.length?this.copy(e):(J1(this,e,n,i),this)}copy(e){return Hh(this,e),this}add(e,n){return n?F0(this,e,n):F0(this,this,e),this}sub(e,n){return n?I0(this,e,n):I0(this,this,e),this}multiply(e){return e.length?$1(this,this,e):rf(this,this,e),this}divide(e){return e.length?j1(this,this,e):rf(this,this,1/e),this}inverse(e=this){return iE(this,e),this}len(){return yl(this)}distance(e){return e?eE(this,e):yl(this)}squaredLen(){return B0(this)}squaredDistance(e){return e?tE(this,e):B0(this)}negate(e=this){return nE(this,e),this}cross(e,n){return n?z0(this,e,n):z0(this,this,e),this}scale(e){return rf(this,this,e),this}normalize(){return Gh(this,this),this}dot(e){return lS(this,e)}equals(e){return fE(this,e)}applyMatrix3(e){return oE(this,this,e),this}applyMatrix4(e){return rE(this,this,e),this}scaleRotateMatrix4(e){return lE(this,this,e),this}applyQuaternion(e){return uE(this,this,e),this}angle(e){return cE(this,e)}lerp(e,n){return aE(this,this,e,n),this}smoothLerp(e,n,i){return sE(this,this,e,n,i),this}clone(){return new cn(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){const n=this[0],i=this[1],a=this[2];return this[0]=e[0]*n+e[4]*i+e[8]*a,this[1]=e[1]*n+e[5]*i+e[9]*a,this[2]=e[2]*n+e[6]*i+e[10]*a,this.normalize()}}const H0=new cn;let hE=1,dE=1,G0=!1;class pE{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=hE++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in n)this.addAttribute(i,n[i])}addAttribute(e,n){if(this.attributes[e]=n,n.id=dE++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){const n=!e.buffer;n&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),n?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:i,type:a})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let r=1;a===35674&&(r=2),a===35675&&(r=3),a===35676&&(r=4);const l=s.size/r,o=r===1?0:r*r*4,u=r===1?0:r*4;for(let h=0;h<r;h++)this.gl.vertexAttribPointer(n+h,l,s.type,s.normalized,s.stride+o,s.offset+h*u),this.gl.enableVertexAttribArray(n+h),this.gl.renderer.vertexAttribDivisor(n+h,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){var a;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((s,{name:r})=>{const l=this.attributes[r];l.needsUpdate&&this.updateAttribute(l)});let i=2;((a=this.attributes.index)==null?void 0:a.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!G0)return console.warn("No position buffer data found to compute bounds"),G0=!0}computeBoundingBox(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||(this.bounds={min:new cn,max:new cn,center:new cn,scale:new cn,radius:1/0});const a=this.bounds.min,s=this.bounds.max,r=this.bounds.center,l=this.bounds.scale;a.set(1/0),s.set(-1/0);for(let o=0,u=n.length;o<u;o+=i){const h=n[o],d=n[o+1],c=n[o+2];a.x=Math.min(h,a.x),a.y=Math.min(d,a.y),a.z=Math.min(c,a.z),s.x=Math.max(h,s.x),s.y=Math.max(d,s.y),s.z=Math.max(c,s.z)}l.sub(s,a),r.add(a,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let a=0;for(let s=0,r=n.length;s<r;s+=i)H0.fromArray(n,s),a=Math.max(a,this.bounds.center.squaredDistance(H0));this.bounds.radius=Math.sqrt(a)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let mE=1;const V0={};class Hu{constructor(e,{vertex:n,fragment:i,uniforms:a={},transparent:s=!1,cullFace:r=e.BACK,frontFace:l=e.CCW,depthTest:o=!0,depthWrite:u=!0,depthFunc:h=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=a,this.id=mE++,n||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=r,this.frontFace=l,this.depthTest=o,this.depthWrite=u,this.depthFunc=h,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:i})}setShaders({vertex:e,fragment:n}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${X0(e)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${X0(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let r=0;r<i;r++){let l=this.gl.getActiveUniform(this.program,r);this.uniformLocations.set(l,this.gl.getUniformLocation(this.program,l.name));const o=l.name.match(/(\w+)/g);l.uniformName=o[0],l.nameComponents=o.slice(1)}this.attributeLocations=new Map;const a=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){const l=this.gl.getActiveAttrib(this.program,r),o=this.gl.getAttribLocation(this.program,l.name);o!==-1&&(a[o]=l.name,this.attributeLocations.set(l,o))}this.attributeOrder=a.join("")}setBlendFunc(e,n,i,a){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=a,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}setStencilFunc(e,n,i){this.stencilRef=n,this.stencilFunc.func=e,this.stencilFunc.ref=n,this.stencilFunc.mask=i}setStencilOp(e,n,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=n,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((a,s)=>{let r=this.uniforms[s.uniformName];for(const l of s.nameComponents){if(!r)break;if(l in r)r=r[l];else{if(Array.isArray(r.value))break;r=void 0;break}}if(!r)return k0(`Active uniform ${s.name} has not been supplied`);if(r&&r.value===void 0)return k0(`${s.name} uniform is missing a value parameter`);if(r.value.texture)return n=n+1,r.value.update(n),lf(this.gl,s.type,a,n);if(r.value.length&&r.value[0].texture){const l=[];return r.value.forEach(o=>{n=n+1,o.update(n),l.push(n)}),lf(this.gl,s.type,a,l)}lf(this.gl,s.type,a,r.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function lf(t,e,n,i){i=i.length?gE(i):i;const a=t.renderer.state.uniformLocations.get(n);if(i.length)if(a===void 0||a.length!==i.length)t.renderer.state.uniformLocations.set(n,i.slice(0));else{if(_E(a,i))return;a.set?a.set(i):vE(a,i),t.renderer.state.uniformLocations.set(n,a)}else{if(a===i)return;t.renderer.state.uniformLocations.set(n,i)}switch(e){case 5126:return i.length?t.uniform1fv(n,i):t.uniform1f(n,i);case 35664:return t.uniform2fv(n,i);case 35665:return t.uniform3fv(n,i);case 35666:return t.uniform4fv(n,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?t.uniform1iv(n,i):t.uniform1i(n,i);case 35671:case 35667:return t.uniform2iv(n,i);case 35672:case 35668:return t.uniform3iv(n,i);case 35673:case 35669:return t.uniform4iv(n,i);case 35674:return t.uniformMatrix2fv(n,!1,i);case 35675:return t.uniformMatrix3fv(n,!1,i);case 35676:return t.uniformMatrix4fv(n,!1,i)}}function X0(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function gE(t){const e=t.length,n=t[0].length;if(n===void 0)return t;const i=e*n;let a=V0[i];a||(V0[i]=a=new Float32Array(i));for(let s=0;s<e;s++)a.set(t[s],s*n);return a}function _E(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function vE(t,e){for(let n=0,i=t.length;n<i;n++)t[n]=e[n]}let of=0;function k0(t){of>100||(console.warn(t),of++,of>100&&console.warn("More than 100 program warnings - stopping logs."))}const uf=new cn;let xE=1;class Op{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:i=150,dpr:a=1,alpha:s=!1,depth:r=!0,stencil:l=!1,antialias:o=!1,premultipliedAlpha:u=!1,preserveDrawingBuffer:h=!1,powerPreference:d="default",autoClear:c=!0,webgl:p=2}={}){const g={alpha:s,depth:r,stencil:l,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d};this.dpr=a,this.alpha=s,this.color=!0,this.depth=r,this.stencil=l,this.premultipliedAlpha=u,this.autoClear=c,this.id=xE++,p===2&&(this.gl=e.getContext("webgl2",g)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",g)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n,i=0,a=0){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.state.viewport.x=i,this.state.viewport.y=a,this.gl.viewport(i,a,e,n))}setScissor(e,n,i=0,a=0){this.gl.scissor(i,a,e,n)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,i,a){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===a||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=a,i!==void 0?this.gl.blendFuncSeparate(e,n,i,a):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,n,i){this.state.stencilFunc===e&&this.state.stencilRef===n&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,n||0,i||0))}setStencilOp(e,n,i){this.state.stencilFail===e&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=n,this.state.stencilDepthPass=i,this.gl.stencilOp(e,n,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,i){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:i,sort:a}){let s=[];if(n&&i&&n.updateFrustum(),e.traverse(r=>{if(!r.visible)return!0;r.draw&&(i&&r.frustumCulled&&n&&!n.frustumIntersectsMesh(r)||s.push(r))}),a){const r=[],l=[],o=[];s.forEach(u=>{u.program.transparent?u.program.depthTest?l.push(u):o.push(u):r.push(u),u.zDepth=0,!(u.renderOrder!==0||!u.program.depthTest||!n)&&(u.worldMatrix.getTranslation(uf),uf.applyMatrix4(n.projectionViewMatrix),u.zDepth=uf.z)}),r.sort(this.sortOpaque),l.sort(this.sortTransparent),o.sort(this.sortUI),s=r.concat(l,o)}return s}render({scene:e,camera:n,target:i=null,update:a=!0,sort:s=!0,frustumCull:r=!0,clear:l}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(l||this.autoClear&&l!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),a&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:e,camera:n,frustumCull:r,sort:s}).forEach(u=>{u.draw({camera:n})})}}function SE(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function ME(t,e,n,i,a){return t[0]=e,t[1]=n,t[2]=i,t[3]=a,t}function yE(t,e){let n=e[0],i=e[1],a=e[2],s=e[3],r=n*n+i*i+a*a+s*s;return r>0&&(r=1/Math.sqrt(r)),t[0]=n*r,t[1]=i*r,t[2]=a*r,t[3]=s*r,t}function EE(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function TE(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function bE(t,e,n){n=n*.5;let i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function W0(t,e,n){let i=e[0],a=e[1],s=e[2],r=e[3],l=n[0],o=n[1],u=n[2],h=n[3];return t[0]=i*h+r*l+a*u-s*o,t[1]=a*h+r*o+s*l-i*u,t[2]=s*h+r*u+i*o-a*l,t[3]=r*h-i*l-a*o-s*u,t}function AE(t,e,n){n*=.5;let i=e[0],a=e[1],s=e[2],r=e[3],l=Math.sin(n),o=Math.cos(n);return t[0]=i*o+r*l,t[1]=a*o+s*l,t[2]=s*o-a*l,t[3]=r*o-i*l,t}function RE(t,e,n){n*=.5;let i=e[0],a=e[1],s=e[2],r=e[3],l=Math.sin(n),o=Math.cos(n);return t[0]=i*o-s*l,t[1]=a*o+r*l,t[2]=s*o+i*l,t[3]=r*o-a*l,t}function CE(t,e,n){n*=.5;let i=e[0],a=e[1],s=e[2],r=e[3],l=Math.sin(n),o=Math.cos(n);return t[0]=i*o+a*l,t[1]=a*o-i*l,t[2]=s*o+r*l,t[3]=r*o-s*l,t}function wE(t,e,n,i){let a=e[0],s=e[1],r=e[2],l=e[3],o=n[0],u=n[1],h=n[2],d=n[3],c,p,g,y,m;return p=a*o+s*u+r*h+l*d,p<0&&(p=-p,o=-o,u=-u,h=-h,d=-d),1-p>1e-6?(c=Math.acos(p),g=Math.sin(c),y=Math.sin((1-i)*c)/g,m=Math.sin(i*c)/g):(y=1-i,m=i),t[0]=y*a+m*o,t[1]=y*s+m*u,t[2]=y*r+m*h,t[3]=y*l+m*d,t}function DE(t,e){let n=e[0],i=e[1],a=e[2],s=e[3],r=n*n+i*i+a*a+s*s,l=r?1/r:0;return t[0]=-n*l,t[1]=-i*l,t[2]=-a*l,t[3]=s*l,t}function UE(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function LE(t,e){let n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let a=0;e[4]>e[0]&&(a=1),e[8]>e[a*3+a]&&(a=2);let s=(a+1)%3,r=(a+2)%3;i=Math.sqrt(e[a*3+a]-e[s*3+s]-e[r*3+r]+1),t[a]=.5*i,i=.5/i,t[3]=(e[s*3+r]-e[r*3+s])*i,t[s]=(e[s*3+a]+e[a*3+s])*i,t[r]=(e[r*3+a]+e[a*3+r])*i}return t}function NE(t,e,n="YXZ"){let i=Math.sin(e[0]*.5),a=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),r=Math.cos(e[1]*.5),l=Math.sin(e[2]*.5),o=Math.cos(e[2]*.5);return n==="XYZ"?(t[0]=i*r*o+a*s*l,t[1]=a*s*o-i*r*l,t[2]=a*r*l+i*s*o,t[3]=a*r*o-i*s*l):n==="YXZ"?(t[0]=i*r*o+a*s*l,t[1]=a*s*o-i*r*l,t[2]=a*r*l-i*s*o,t[3]=a*r*o+i*s*l):n==="ZXY"?(t[0]=i*r*o-a*s*l,t[1]=a*s*o+i*r*l,t[2]=a*r*l+i*s*o,t[3]=a*r*o-i*s*l):n==="ZYX"?(t[0]=i*r*o-a*s*l,t[1]=a*s*o+i*r*l,t[2]=a*r*l-i*s*o,t[3]=a*r*o+i*s*l):n==="YZX"?(t[0]=i*r*o+a*s*l,t[1]=a*s*o+i*r*l,t[2]=a*r*l-i*s*o,t[3]=a*r*o-i*s*l):n==="XZY"&&(t[0]=i*r*o-a*s*l,t[1]=a*s*o-i*r*l,t[2]=a*r*l+i*s*o,t[3]=a*r*o+i*s*l),t}const OE=SE,PE=ME,FE=EE,IE=yE;class BE extends Array{constructor(e=0,n=0,i=0,a=1){super(e,n,i,a),this.onChange=()=>{},this._target=this;const s=["0","1","2","3"];return new Proxy(this,{set(r,l){const o=Reflect.set(...arguments);return o&&s.includes(l)&&r.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return TE(this._target),this.onChange(),this}set(e,n,i,a){return e.length?this.copy(e):(PE(this._target,e,n,i,a),this.onChange(),this)}rotateX(e){return AE(this._target,this._target,e),this.onChange(),this}rotateY(e){return RE(this._target,this._target,e),this.onChange(),this}rotateZ(e){return CE(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return DE(this._target,e),this.onChange(),this}conjugate(e=this._target){return UE(this._target,e),this.onChange(),this}copy(e){return OE(this._target,e),this.onChange(),this}normalize(e=this._target){return IE(this._target,e),this.onChange(),this}multiply(e,n){return n?W0(this._target,e,n):W0(this._target,this._target,e),this.onChange(),this}dot(e){return FE(this._target,e)}fromMatrix3(e){return LE(this._target,e),this.onChange(),this}fromEuler(e,n){return NE(this._target,e,e.order),n||this.onChange(),this}fromAxisAngle(e,n){return bE(this._target,e,n),this.onChange(),this}slerp(e,n){return wE(this._target,this._target,e,n),this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this._target[3]=e[n+3],this.onChange(),this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}}const zE=1e-6;function HE(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function GE(t,e,n,i,a,s,r,l,o,u,h,d,c,p,g,y,m){return t[0]=e,t[1]=n,t[2]=i,t[3]=a,t[4]=s,t[5]=r,t[6]=l,t[7]=o,t[8]=u,t[9]=h,t[10]=d,t[11]=c,t[12]=p,t[13]=g,t[14]=y,t[15]=m,t}function VE(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function XE(t,e){let n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],l=e[5],o=e[6],u=e[7],h=e[8],d=e[9],c=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],x=n*l-i*r,M=n*o-a*r,_=n*u-s*r,b=i*o-a*l,T=i*u-s*l,R=a*u-s*o,v=h*y-d*g,A=h*m-c*g,w=h*f-p*g,D=d*m-c*y,L=d*f-p*y,N=c*f-p*m,H=x*N-M*L+_*D+b*w-T*A+R*v;return H?(H=1/H,t[0]=(l*N-o*L+u*D)*H,t[1]=(a*L-i*N-s*D)*H,t[2]=(y*R-m*T+f*b)*H,t[3]=(c*T-d*R-p*b)*H,t[4]=(o*w-r*N-u*A)*H,t[5]=(n*N-a*w+s*A)*H,t[6]=(m*_-g*R-f*M)*H,t[7]=(h*R-c*_+p*M)*H,t[8]=(r*L-l*w+u*v)*H,t[9]=(i*w-n*L-s*v)*H,t[10]=(g*T-y*_+f*x)*H,t[11]=(d*_-h*T-p*x)*H,t[12]=(l*A-r*D-o*v)*H,t[13]=(n*D-i*A+a*v)*H,t[14]=(y*M-g*b-m*x)*H,t[15]=(h*b-d*M+c*x)*H,t):null}function oS(t){let e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],r=t[5],l=t[6],o=t[7],u=t[8],h=t[9],d=t[10],c=t[11],p=t[12],g=t[13],y=t[14],m=t[15],f=e*r-n*s,x=e*l-i*s,M=e*o-a*s,_=n*l-i*r,b=n*o-a*r,T=i*o-a*l,R=u*g-h*p,v=u*y-d*p,A=u*m-c*p,w=h*y-d*g,D=h*m-c*g,L=d*m-c*y;return f*L-x*D+M*w+_*A-b*v+T*R}function q0(t,e,n){let i=e[0],a=e[1],s=e[2],r=e[3],l=e[4],o=e[5],u=e[6],h=e[7],d=e[8],c=e[9],p=e[10],g=e[11],y=e[12],m=e[13],f=e[14],x=e[15],M=n[0],_=n[1],b=n[2],T=n[3];return t[0]=M*i+_*l+b*d+T*y,t[1]=M*a+_*o+b*c+T*m,t[2]=M*s+_*u+b*p+T*f,t[3]=M*r+_*h+b*g+T*x,M=n[4],_=n[5],b=n[6],T=n[7],t[4]=M*i+_*l+b*d+T*y,t[5]=M*a+_*o+b*c+T*m,t[6]=M*s+_*u+b*p+T*f,t[7]=M*r+_*h+b*g+T*x,M=n[8],_=n[9],b=n[10],T=n[11],t[8]=M*i+_*l+b*d+T*y,t[9]=M*a+_*o+b*c+T*m,t[10]=M*s+_*u+b*p+T*f,t[11]=M*r+_*h+b*g+T*x,M=n[12],_=n[13],b=n[14],T=n[15],t[12]=M*i+_*l+b*d+T*y,t[13]=M*a+_*o+b*c+T*m,t[14]=M*s+_*u+b*p+T*f,t[15]=M*r+_*h+b*g+T*x,t}function kE(t,e,n){let i=n[0],a=n[1],s=n[2],r,l,o,u,h,d,c,p,g,y,m,f;return e===t?(t[12]=e[0]*i+e[4]*a+e[8]*s+e[12],t[13]=e[1]*i+e[5]*a+e[9]*s+e[13],t[14]=e[2]*i+e[6]*a+e[10]*s+e[14],t[15]=e[3]*i+e[7]*a+e[11]*s+e[15]):(r=e[0],l=e[1],o=e[2],u=e[3],h=e[4],d=e[5],c=e[6],p=e[7],g=e[8],y=e[9],m=e[10],f=e[11],t[0]=r,t[1]=l,t[2]=o,t[3]=u,t[4]=h,t[5]=d,t[6]=c,t[7]=p,t[8]=g,t[9]=y,t[10]=m,t[11]=f,t[12]=r*i+h*a+g*s+e[12],t[13]=l*i+d*a+y*s+e[13],t[14]=o*i+c*a+m*s+e[14],t[15]=u*i+p*a+f*s+e[15]),t}function WE(t,e,n){let i=n[0],a=n[1],s=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*a,t[5]=e[5]*a,t[6]=e[6]*a,t[7]=e[7]*a,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function qE(t,e,n,i){let a=i[0],s=i[1],r=i[2],l=Math.hypot(a,s,r),o,u,h,d,c,p,g,y,m,f,x,M,_,b,T,R,v,A,w,D,L,N,H,F;return Math.abs(l)<zE?null:(l=1/l,a*=l,s*=l,r*=l,o=Math.sin(n),u=Math.cos(n),h=1-u,d=e[0],c=e[1],p=e[2],g=e[3],y=e[4],m=e[5],f=e[6],x=e[7],M=e[8],_=e[9],b=e[10],T=e[11],R=a*a*h+u,v=s*a*h+r*o,A=r*a*h-s*o,w=a*s*h-r*o,D=s*s*h+u,L=r*s*h+a*o,N=a*r*h+s*o,H=s*r*h-a*o,F=r*r*h+u,t[0]=d*R+y*v+M*A,t[1]=c*R+m*v+_*A,t[2]=p*R+f*v+b*A,t[3]=g*R+x*v+T*A,t[4]=d*w+y*D+M*L,t[5]=c*w+m*D+_*L,t[6]=p*w+f*D+b*L,t[7]=g*w+x*D+T*L,t[8]=d*N+y*H+M*F,t[9]=c*N+m*H+_*F,t[10]=p*N+f*H+b*F,t[11]=g*N+x*H+T*F,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function YE(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function uS(t,e){let n=e[0],i=e[1],a=e[2],s=e[4],r=e[5],l=e[6],o=e[8],u=e[9],h=e[10];return t[0]=Math.hypot(n,i,a),t[1]=Math.hypot(s,r,l),t[2]=Math.hypot(o,u,h),t}function ZE(t){let e=t[0],n=t[1],i=t[2],a=t[4],s=t[5],r=t[6],l=t[8],o=t[9],u=t[10];const h=e*e+n*n+i*i,d=a*a+s*s+r*r,c=l*l+o*o+u*u;return Math.sqrt(Math.max(h,d,c))}const cS=function(){const t=[1,1,1];return function(e,n){let i=t;uS(i,n);let a=1/i[0],s=1/i[1],r=1/i[2],l=n[0]*a,o=n[1]*s,u=n[2]*r,h=n[4]*a,d=n[5]*s,c=n[6]*r,p=n[8]*a,g=n[9]*s,y=n[10]*r,m=l+d+y,f=0;return m>0?(f=Math.sqrt(m+1)*2,e[3]=.25*f,e[0]=(c-g)/f,e[1]=(p-u)/f,e[2]=(o-h)/f):l>d&&l>y?(f=Math.sqrt(1+l-d-y)*2,e[3]=(c-g)/f,e[0]=.25*f,e[1]=(o+h)/f,e[2]=(p+u)/f):d>y?(f=Math.sqrt(1+d-l-y)*2,e[3]=(p-u)/f,e[0]=(o+h)/f,e[1]=.25*f,e[2]=(c+g)/f):(f=Math.sqrt(1+y-l-d)*2,e[3]=(o-h)/f,e[0]=(p+u)/f,e[1]=(c+g)/f,e[2]=.25*f),e}}();function KE(t,e,n,i){let a=yl([t[0],t[1],t[2]]);const s=yl([t[4],t[5],t[6]]),r=yl([t[8],t[9],t[10]]);oS(t)<0&&(a=-a),n[0]=t[12],n[1]=t[13],n[2]=t[14];const o=t.slice(),u=1/a,h=1/s,d=1/r;o[0]*=u,o[1]*=u,o[2]*=u,o[4]*=h,o[5]*=h,o[6]*=h,o[8]*=d,o[9]*=d,o[10]*=d,cS(e,o),i[0]=a,i[1]=s,i[2]=r}function QE(t,e,n,i){const a=t,s=e[0],r=e[1],l=e[2],o=e[3],u=s+s,h=r+r,d=l+l,c=s*u,p=s*h,g=s*d,y=r*h,m=r*d,f=l*d,x=o*u,M=o*h,_=o*d,b=i[0],T=i[1],R=i[2];return a[0]=(1-(y+f))*b,a[1]=(p+_)*b,a[2]=(g-M)*b,a[3]=0,a[4]=(p-_)*T,a[5]=(1-(c+f))*T,a[6]=(m+x)*T,a[7]=0,a[8]=(g+M)*R,a[9]=(m-x)*R,a[10]=(1-(c+y))*R,a[11]=0,a[12]=n[0],a[13]=n[1],a[14]=n[2],a[15]=1,a}function JE(t,e){let n=e[0],i=e[1],a=e[2],s=e[3],r=n+n,l=i+i,o=a+a,u=n*r,h=i*r,d=i*l,c=a*r,p=a*l,g=a*o,y=s*r,m=s*l,f=s*o;return t[0]=1-d-g,t[1]=h+f,t[2]=c-m,t[3]=0,t[4]=h-f,t[5]=1-u-g,t[6]=p+y,t[7]=0,t[8]=c+m,t[9]=p-y,t[10]=1-u-d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function $E(t,e,n,i,a){let s=1/Math.tan(e/2),r=1/(i-a);return t[0]=s/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(a+i)*r,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*a*i*r,t[15]=0,t}function jE(t,e,n,i,a,s,r){let l=1/(e-n),o=1/(i-a),u=1/(s-r);return t[0]=-2*l,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+n)*l,t[13]=(a+i)*o,t[14]=(r+s)*u,t[15]=1,t}function eT(t,e,n,i){let a=e[0],s=e[1],r=e[2],l=i[0],o=i[1],u=i[2],h=a-n[0],d=s-n[1],c=r-n[2],p=h*h+d*d+c*c;p===0?c=1:(p=1/Math.sqrt(p),h*=p,d*=p,c*=p);let g=o*c-u*d,y=u*h-l*c,m=l*d-o*h;return p=g*g+y*y+m*m,p===0&&(u?l+=1e-6:o?u+=1e-6:o+=1e-6,g=o*c-u*d,y=u*h-l*c,m=l*d-o*h,p=g*g+y*y+m*m),p=1/Math.sqrt(p),g*=p,y*=p,m*=p,t[0]=g,t[1]=y,t[2]=m,t[3]=0,t[4]=d*m-c*y,t[5]=c*g-h*m,t[6]=h*y-d*g,t[7]=0,t[8]=h,t[9]=d,t[10]=c,t[11]=0,t[12]=a,t[13]=s,t[14]=r,t[15]=1,t}function Y0(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t}function Z0(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function tT(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t}class Gu extends Array{constructor(e=1,n=0,i=0,a=0,s=0,r=1,l=0,o=0,u=0,h=0,d=1,c=0,p=0,g=0,y=0,m=1){return super(e,n,i,a,s,r,l,o,u,h,d,c,p,g,y,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,i,a,s,r,l,o,u,h,d,c,p,g,y,m){return e.length?this.copy(e):(GE(this,e,n,i,a,s,r,l,o,u,h,d,c,p,g,y,m),this)}translate(e,n=this){return kE(this,n,e),this}rotate(e,n,i=this){return qE(this,i,e,n),this}scale(e,n=this){return WE(this,n,typeof e=="number"?[e,e,e]:e),this}add(e,n){return n?Y0(this,e,n):Y0(this,this,e),this}sub(e,n){return n?Z0(this,e,n):Z0(this,this,e),this}multiply(e,n){return e.length?n?q0(this,e,n):q0(this,this,e):tT(this,this,e),this}identity(){return VE(this),this}copy(e){return HE(this,e),this}fromPerspective({fov:e,aspect:n,near:i,far:a}={}){return $E(this,e,n,i,a),this}fromOrthogonal({left:e,right:n,bottom:i,top:a,near:s,far:r}){return jE(this,e,n,i,a,s,r),this}fromQuaternion(e){return JE(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return XE(this,e),this}compose(e,n,i){return QE(this,e,n,i),this}decompose(e,n,i){return KE(this,e,n,i),this}getRotation(e){return cS(e,this),this}getTranslation(e){return YE(e,this),this}getScaling(e){return uS(e,this),this}getMaxScaleOnAxis(){return ZE(this)}lookAt(e,n,i){return eT(this,e,n,i),this}determinant(){return oS(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}}function nT(t,e,n="YXZ"){return n==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):n==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):n==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const K0=new Gu;let iT=class extends Array{constructor(e=0,n=e,i=e,a="YXZ"){super(e,n,i),this.order=a,this.onChange=()=>{},this._target=this;const s=["0","1","2"];return new Proxy(this,{set(r,l){const o=Reflect.set(...arguments);return o&&s.includes(l)&&r.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,n=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=n,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return nT(this._target,e,n),this.onChange(),this}fromQuaternion(e,n=this.order,i){return K0.fromQuaternion(e),this._target.fromRotationMatrix(K0,n),i||this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}};class aT{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Gu,this.worldMatrix=new Gu,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new cn,this.quaternion=new BE,this.scale=new cn(1),this.rotation=new iT,this.up=new cn(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let n=0,i=this.children.length;n<i;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,i=this.children.length;n<i;n++)this.children[n].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function sT(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function rT(t,e){let n=e[0],i=e[1],a=e[2],s=e[3],r=n+n,l=i+i,o=a+a,u=n*r,h=i*r,d=i*l,c=a*r,p=a*l,g=a*o,y=s*r,m=s*l,f=s*o;return t[0]=1-d-g,t[3]=h-f,t[6]=c+m,t[1]=h+f,t[4]=1-u-g,t[7]=p-y,t[2]=c-m,t[5]=p+y,t[8]=1-u-d,t}function lT(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function oT(t,e,n,i,a,s,r,l,o,u){return t[0]=e,t[1]=n,t[2]=i,t[3]=a,t[4]=s,t[5]=r,t[6]=l,t[7]=o,t[8]=u,t}function uT(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function cT(t,e){let n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],l=e[5],o=e[6],u=e[7],h=e[8],d=h*r-l*u,c=-h*s+l*o,p=u*s-r*o,g=n*d+i*c+a*p;return g?(g=1/g,t[0]=d*g,t[1]=(-h*i+a*u)*g,t[2]=(l*i-a*r)*g,t[3]=c*g,t[4]=(h*n-a*o)*g,t[5]=(-l*n+a*s)*g,t[6]=p*g,t[7]=(-u*n+i*o)*g,t[8]=(r*n-i*s)*g,t):null}function Q0(t,e,n){let i=e[0],a=e[1],s=e[2],r=e[3],l=e[4],o=e[5],u=e[6],h=e[7],d=e[8],c=n[0],p=n[1],g=n[2],y=n[3],m=n[4],f=n[5],x=n[6],M=n[7],_=n[8];return t[0]=c*i+p*r+g*u,t[1]=c*a+p*l+g*h,t[2]=c*s+p*o+g*d,t[3]=y*i+m*r+f*u,t[4]=y*a+m*l+f*h,t[5]=y*s+m*o+f*d,t[6]=x*i+M*r+_*u,t[7]=x*a+M*l+_*h,t[8]=x*s+M*o+_*d,t}function fT(t,e,n){let i=e[0],a=e[1],s=e[2],r=e[3],l=e[4],o=e[5],u=e[6],h=e[7],d=e[8],c=n[0],p=n[1];return t[0]=i,t[1]=a,t[2]=s,t[3]=r,t[4]=l,t[5]=o,t[6]=c*i+p*r+u,t[7]=c*a+p*l+h,t[8]=c*s+p*o+d,t}function hT(t,e,n){let i=e[0],a=e[1],s=e[2],r=e[3],l=e[4],o=e[5],u=e[6],h=e[7],d=e[8],c=Math.sin(n),p=Math.cos(n);return t[0]=p*i+c*r,t[1]=p*a+c*l,t[2]=p*s+c*o,t[3]=p*r-c*i,t[4]=p*l-c*a,t[5]=p*o-c*s,t[6]=u,t[7]=h,t[8]=d,t}function dT(t,e,n){let i=n[0],a=n[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=a*e[3],t[4]=a*e[4],t[5]=a*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function pT(t,e){let n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],l=e[5],o=e[6],u=e[7],h=e[8],d=e[9],c=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],x=n*l-i*r,M=n*o-a*r,_=n*u-s*r,b=i*o-a*l,T=i*u-s*l,R=a*u-s*o,v=h*y-d*g,A=h*m-c*g,w=h*f-p*g,D=d*m-c*y,L=d*f-p*y,N=c*f-p*m,H=x*N-M*L+_*D+b*w-T*A+R*v;return H?(H=1/H,t[0]=(l*N-o*L+u*D)*H,t[1]=(o*w-r*N-u*A)*H,t[2]=(r*L-l*w+u*v)*H,t[3]=(a*L-i*N-s*D)*H,t[4]=(n*N-a*w+s*A)*H,t[5]=(i*w-n*L-s*v)*H,t[6]=(y*R-m*T+f*b)*H,t[7]=(m*_-g*R-f*M)*H,t[8]=(g*T-y*_+f*x)*H,t):null}class mT extends Array{constructor(e=1,n=0,i=0,a=0,s=1,r=0,l=0,o=0,u=1){return super(e,n,i,a,s,r,l,o,u),this}set(e,n,i,a,s,r,l,o,u){return e.length?this.copy(e):(oT(this,e,n,i,a,s,r,l,o,u),this)}translate(e,n=this){return fT(this,n,e),this}rotate(e,n=this){return hT(this,n,e),this}scale(e,n=this){return dT(this,n,e),this}multiply(e,n){return n?Q0(this,e,n):Q0(this,this,e),this}identity(){return uT(this),this}copy(e){return lT(this,e),this}fromMatrix4(e){return sT(this,e),this}fromQuaternion(e){return rT(this,e),this}fromBasis(e,n,i){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],i[0],i[1],i[2]),this}inverse(e=this){return cT(this,e),this}getNormalMatrix(e){return pT(this,e),this}}let gT=0,Vu=class extends aT{constructor(e,{geometry:n,program:i,mode:a=e.TRIANGLES,frustumCulled:s=!0,renderOrder:r=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=gT++,this.geometry=n,this.program=i,this.mode=a,this.frustumCulled=s,this.renderOrder=r,this.modelViewMatrix=new Gu,this.normalMatrix=new mT,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}};const J0=new Uint8Array(4);function $0(t){return(t&t-1)===0}let _T=1,j0=class{constructor(e,{image:n,target:i=e.TEXTURE_2D,type:a=e.UNSIGNED_BYTE,format:s=e.RGBA,internalFormat:r=s,wrapS:l=e.CLAMP_TO_EDGE,wrapT:o=e.CLAMP_TO_EDGE,wrapR:u=e.CLAMP_TO_EDGE,generateMipmaps:h=i===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:d=h?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:c=e.LINEAR,premultiplyAlpha:p=!1,unpackAlignment:g=4,flipY:y=i==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:m=0,level:f=0,width:x,height:M=x,length:_=1}={}){this.gl=e,this.id=_T++,this.image=n,this.target=i,this.type=a,this.format=s,this.internalFormat=r,this.minFilter=d,this.magFilter=c,this.wrapS=l,this.wrapT=o,this.wrapR=u,this.generateMipmaps=h,this.premultiplyAlpha=p,this.unpackAlignment=g,this.flipY=y,this.anisotropy=Math.min(m,this.gl.renderer.parameters.maxAnisotropy),this.level=f,this.width=x,this.height=M,this.length=_,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){const n=!(this.image===this.store.image&&!this.needsUpdate);if((n||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!n){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,this.level,this.internalFormat,this.format,this.type,this.image[i]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let i=0;i<this.image.length;i++)this.gl.compressedTexImage2D(this.target,i,this.internalFormat,this.image[i].width,this.image[i].height,0,this.image[i].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!$0(this.image.width)||!$0(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,J0);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,J0);this.store.image=this.image}}},vT=class{constructor(e,{width:n=e.canvas.width,height:i=e.canvas.height,target:a=e.FRAMEBUFFER,color:s=1,depth:r=!0,stencil:l=!1,depthTexture:o=!1,wrapS:u=e.CLAMP_TO_EDGE,wrapT:h=e.CLAMP_TO_EDGE,wrapR:d=e.CLAMP_TO_EDGE,minFilter:c=e.LINEAR,magFilter:p=c,type:g=e.UNSIGNED_BYTE,format:y=e.RGBA,internalFormat:m=y,unpackAlignment:f,premultiplyAlpha:x}={}){this.gl=e,this.width=n,this.height=i,this.depth=r,this.stencil=l,this.buffer=this.gl.createFramebuffer(),this.target=a,this.gl.renderer.bindFramebuffer(this),this.textures=[];const M=[];for(let _=0;_<s;_++)this.textures.push(new j0(e,{width:n,height:i,wrapS:u,wrapT:h,wrapR:d,minFilter:c,magFilter:p,type:g,format:y,internalFormat:m,unpackAlignment:f,premultiplyAlpha:x,flipY:!1,generateMipmaps:!1})),this.textures[_].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+_,this.gl.TEXTURE_2D,this.textures[_].texture,0),M.push(this.gl.COLOR_ATTACHMENT0+_);M.length>1&&this.gl.renderer.drawBuffers(M),this.texture=this.textures[0],o&&(this.gl.renderer.isWebgl2||this.gl.renderer.getExtension("WEBGL_depth_texture"))?(this.depthTexture=new j0(e,{width:n,height:i,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,format:this.stencil?this.gl.DEPTH_STENCIL:this.gl.DEPTH_COMPONENT,internalFormat:e.renderer.isWebgl2?this.stencil?this.gl.DEPTH24_STENCIL8:this.gl.DEPTH_COMPONENT16:this.gl.DEPTH_COMPONENT,type:this.stencil?this.gl.UNSIGNED_INT_24_8:this.gl.UNSIGNED_INT}),this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.stencil?this.gl.DEPTH_STENCIL_ATTACHMENT:this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(r&&!l&&(this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,n,i),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)),l&&!r&&(this.stencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,n,i),this.gl.framebufferRenderbuffer(this.target,this.gl.STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.stencilBuffer)),r&&l&&(this.depthStencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,n,i),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.depthStencilBuffer))),this.gl.renderer.bindFramebuffer({target:this.target})}setSize(e,n){if(!(this.width===e&&this.height===n)){this.width=e,this.height=n,this.gl.renderer.bindFramebuffer(this);for(let i=0;i<this.textures.length;i++)this.textures[i].width=e,this.textures[i].height=n,this.textures[i].needsUpdate=!0,this.textures[i].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+i,this.gl.TEXTURE_2D,this.textures[i].texture,0);this.depthTexture?(this.depthTexture.width=e,this.depthTexture.height=n,this.depthTexture.needsUpdate=!0,this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(this.depthBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,e,n)),this.stencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,e,n)),this.depthStencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,e,n))),this.gl.renderer.bindFramebuffer({target:this.target})}}};const eg={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function tg(t){t.length===4&&(t=t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e||console.warn(`Unable to convert hex string ${t} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function xT(t){return t=parseInt(t),[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function ng(t){return t===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(t)?t[0]==="#"?tg(t):eg[t.toLowerCase()]?tg(eg[t.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):xT(t)}let ST=class extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...ng(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(ng(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}},Pp=class extends pE{constructor(e,{attributes:n={}}={}){Object.assign(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,n)}};function MT({hue:t=0,hoverIntensity:e=.2,rotateOnHover:n=!0,forceHoverState:i=!1,backgroundColor:a="#000000"}){const s=bt.useRef(null),r=`
    precision highp float;
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `,l=`
    precision highp float;

    uniform float iTime;
    uniform vec3 iResolution;
    uniform float hue;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    uniform vec3 backgroundColor;
    varying vec2 vUv;

    vec3 rgb2yiq(vec3 c) {
      float y = dot(c, vec3(0.299, 0.587, 0.114));
      float i = dot(c, vec3(0.596, -0.274, -0.322));
      float q = dot(c, vec3(0.211, -0.523, 0.312));
      return vec3(y, i, q);
    }
    
    vec3 yiq2rgb(vec3 c) {
      float r = c.x + 0.956 * c.y + 0.621 * c.z;
      float g = c.x - 0.272 * c.y - 0.647 * c.z;
      float b = c.x - 1.106 * c.y + 1.703 * c.z;
      return vec3(r, g, b);
    }
    
    vec3 adjustHue(vec3 color, float hueDeg) {
      float hueRad = hueDeg * 3.14159265 / 180.0;
      vec3 yiq = rgb2yiq(color);
      float cosA = cos(hueRad);
      float sinA = sin(hueRad);
      float i = yiq.y * cosA - yiq.z * sinA;
      float q = yiq.y * sinA + yiq.z * cosA;
      yiq.y = i;
      yiq.z = q;
      return yiq2rgb(yiq);
    }

    vec3 hash33(vec3 p3) {
      p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
      p3 += dot(p3, p3.yxz + 19.19);
      return -1.0 + 2.0 * fract(vec3(
        p3.x + p3.y,
        p3.x + p3.z,
        p3.y + p3.z
      ) * p3.zyx);
    }

    float snoise3(vec3 p) {
      const float K1 = 0.333333333;
      const float K2 = 0.166666667;
      vec3 i = floor(p + (p.x + p.y + p.z) * K1);
      vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
      vec3 e = step(vec3(0.0), d0 - d0.yzx);
      vec3 i1 = e * (1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy * (1.0 - e);
      vec3 d1 = d0 - (i1 - K2);
      vec3 d2 = d0 - (i2 - K1);
      vec3 d3 = d0 - 0.5;
      vec4 h = max(0.6 - vec4(
        dot(d0, d0),
        dot(d1, d1),
        dot(d2, d2),
        dot(d3, d3)
      ), 0.0);
      vec4 n = h * h * h * h * vec4(
        dot(d0, hash33(i)),
        dot(d1, hash33(i + i1)),
        dot(d2, hash33(i + i2)),
        dot(d3, hash33(i + 1.0))
      );
      return dot(vec4(31.316), n);
    }

    vec4 extractAlpha(vec3 colorIn) {
      float a = max(max(colorIn.r, colorIn.g), colorIn.b);
      return vec4(colorIn.rgb / (a + 1e-5), a);
    }

    const vec3 baseColor1 = vec3(0.611765, 0.262745, 0.996078);
    const vec3 baseColor2 = vec3(0.298039, 0.760784, 0.913725);
    const vec3 baseColor3 = vec3(0.062745, 0.078431, 0.600000);
    const float innerRadius = 0.6;
    const float noiseScale = 0.65;

    float light1(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * attenuation);
    }
    float light2(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * dist * attenuation);
    }

    vec4 draw(vec2 uv) {
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);
      
      float ang = atan(uv.y, uv.x);
      float len = length(uv);
      float invLen = len > 0.0 ? 1.0 / len : 0.0;

      float bgLuminance = dot(backgroundColor, vec3(0.299, 0.587, 0.114));
      
      float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5)) * 0.5 + 0.5;
      float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
      float d0 = distance(uv, (r0 * invLen) * uv);
      float v0 = light1(1.0, 10.0, d0);

      v0 *= smoothstep(r0 * 1.05, r0, len);
      float innerFade = smoothstep(r0 * 0.8, r0 * 0.95, len);
      v0 *= mix(innerFade, 1.0, bgLuminance * 0.7);
      float cl = cos(ang + iTime * 2.0) * 0.5 + 0.5;
      
      float a = iTime * -1.0;
      vec2 pos = vec2(cos(a), sin(a)) * r0;
      float d = distance(uv, pos);
      float v1 = light2(1.5, 5.0, d);
      v1 *= light1(1.0, 50.0, d0);
      
      float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
      float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);
      
      vec3 colBase = mix(color1, color2, cl);
      float fadeAmount = mix(1.0, 0.1, bgLuminance);
      
      vec3 darkCol = mix(color3, colBase, v0);
      darkCol = (darkCol + v1) * v2 * v3;
      darkCol = clamp(darkCol, 0.0, 1.0);
      
      vec3 lightCol = (colBase + v1) * mix(1.0, v2 * v3, fadeAmount);
      lightCol = mix(backgroundColor, lightCol, v0);
      lightCol = clamp(lightCol, 0.0, 1.0);
      
      vec3 finalCol = mix(darkCol, lightCol, bgLuminance);
      
      return extractAlpha(finalCol);
    }

    vec4 mainImage(vec2 fragCoord) {
      vec2 center = iResolution.xy * 0.5;
      float size = min(iResolution.x, iResolution.y);
      vec2 uv = (fragCoord - center) / size * 2.0;
      
      float angle = rot;
      float s = sin(angle);
      float c = cos(angle);
      uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);
      
      uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
      uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime);
      
      return draw(uv);
    }

    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      vec4 col = mainImage(fragCoord);
      gl_FragColor = vec4(col.rgb * col.a, col.a);
    }
  `;return bt.useEffect(()=>{const o=s.current;if(!o)return;const u=new Op({alpha:!0,premultipliedAlpha:!1}),h=u.gl;h.clearColor(0,0,0,0),o.appendChild(h.canvas);const d=new Pp(h),c=new Hu(h,{vertex:r,fragment:l,uniforms:{iTime:{value:0},iResolution:{value:new cn(h.canvas.width,h.canvas.height,h.canvas.width/h.canvas.height)},hue:{value:t},hover:{value:0},rot:{value:0},hoverIntensity:{value:e},backgroundColor:{value:ig(a)}}}),p=new Vu(h,{geometry:d,program:c});function g(){if(!o)return;const R=window.devicePixelRatio||1,v=o.clientWidth,A=o.clientHeight;u.setSize(v*R,A*R),h.canvas.style.width=v+"px",h.canvas.style.height=A+"px",c.uniforms.iResolution.value.set(h.canvas.width,h.canvas.height,h.canvas.width/h.canvas.height)}window.addEventListener("resize",g),g();let y=0,m=0,f=0;const x=.3,M=R=>{const v=o.getBoundingClientRect(),A=R.clientX-v.left,w=R.clientY-v.top,D=v.width,L=v.height,N=Math.min(D,L),H=D/2,F=L/2,O=(A-H)/N*2,U=(w-F)/N*2;Math.sqrt(O*O+U*U)<.8?y=1:y=0},_=()=>{y=0};o.addEventListener("mousemove",M),o.addEventListener("mouseleave",_);let b;const T=R=>{b=requestAnimationFrame(T);const v=(R-m)*.001;m=R,c.uniforms.iTime.value=R*.001,c.uniforms.hue.value=t,c.uniforms.hoverIntensity.value=e,c.uniforms.backgroundColor.value=ig(a);const A=i?1:y;c.uniforms.hover.value+=(A-c.uniforms.hover.value)*.1,n&&A>.5&&(f+=v*x),c.uniforms.rot.value=f,u.render({scene:p})};return b=requestAnimationFrame(T),()=>{var R;cancelAnimationFrame(b),window.removeEventListener("resize",g),o.removeEventListener("mousemove",M),o.removeEventListener("mouseleave",_),o.removeChild(h.canvas),(R=h.getExtension("WEBGL_lose_context"))==null||R.loseContext()}},[t,e,n,i,a]),Xt.jsx("div",{ref:s,className:"orb-container"})}function yT(t,e,n){let i,a,s;if(e===0)i=a=s=n;else{const r=(u,h,d)=>(d<0&&(d+=1),d>1&&(d-=1),d<.16666666666666666?u+(h-u)*6*d:d<.5?h:d<.6666666666666666?u+(h-u)*(.6666666666666666-d)*6:u),l=n<.5?n*(1+e):n+e-n*e,o=2*n-l;i=r(o,l,t+1/3),a=r(o,l,t),s=r(o,l,t-1/3)}return new cn(i,a,s)}function ig(t){if(t.startsWith("#")){const i=parseInt(t.slice(1,3),16)/255,a=parseInt(t.slice(3,5),16)/255,s=parseInt(t.slice(5,7),16)/255;return new cn(i,a,s)}const e=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(e)return new cn(parseInt(e[1])/255,parseInt(e[2])/255,parseInt(e[3])/255);const n=t.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%/);if(n){const i=parseInt(n[1])/360,a=parseInt(n[2])/100,s=parseInt(n[3])/100;return yT(i,a,s)}return new cn(0,0,0)}const Vh=12,Xu=8,ag=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,ET=`#version 300 es
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColors[${Xu}];
uniform int uColorCount;
uniform int uStrandCount;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uWaviness;
uniform float uThickness;
uniform float uGlow;
uniform float uTaper;
uniform float uSpread;
uniform float uHueShift;
uniform float uIntensity;
uniform float uOpacity;
uniform float uScale;
uniform float uSaturation;

out vec4 fragColor;

const float PI = 3.14159265;

vec3 spectrum(float t) {
  return 0.5 + 0.5 * cos(2.0 * PI * (t + vec3(0.00, 0.33, 0.67)));
}

vec3 samplePalette(float t) {
  t = fract(t);
  float scaled = t * float(uColorCount);
  int idx = int(floor(scaled));
  float blend = fract(scaled);
  int nextIdx = idx + 1;
  if (nextIdx >= uColorCount) nextIdx = 0;
  return mix(uColors[idx], uColors[nextIdx], blend);
}

vec3 strandColor(float t) {
  if (uColorCount > 0) return samplePalette(t);
  return spectrum(t);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  uv /= max(uScale, 0.0001);

  float e = 0.06 + uIntensity * 0.94;
  float env = pow(max(cos(uv.x * PI * 1.3), 0.0), uTaper);

  vec3 col = vec3(0.0);

  for (int i = 0; i < ${Vh}; i++) {
    if (i >= uStrandCount) break;

    float fi = float(i);
    float ph = fi * 1.7 * uSpread;
    float freq = (2.0 + fi * 0.35) * uWaviness;
    float spd = 1.4 + fi * 1.2;

    float tt = uTime * uSpeed;
    float w = sin(uv.x * freq + tt * spd + ph) * 0.60
            + sin(uv.x * freq * 1.1 - tt * spd * 0.7 + ph * 1.7) * 0.40;

    float amp = (0.1 + 0.02 * e) * env * uAmplitude;
    float y = w * amp;

    float d = abs(uv.y - y);
    float thick = (0.001 + 0.05 * e) * (0.35 + env) * uThickness;
    float g = thick / (d + thick * 0.45);
    g = g * g;

    float h = fi / float(uStrandCount) + uv.x * 0.30 + uTime * 0.04 + uHueShift;
    col += strandColor(h) * g * env;
  }

  col *= 0.45 + 0.7 * e;
  col = 1.0 - exp(-col * uGlow);

  float gray = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = max(mix(vec3(gray), col, uSaturation), 0.0);

  float lum = max(max(col.r, col.g), col.b);
  float alpha = clamp(lum, 0.0, 1.0) * uOpacity;

  fragColor = vec4(col * uOpacity, alpha);
}
`,TT=`#version 300 es
precision highp float;

uniform sampler2D uScene;
uniform vec2 uResolution;
uniform float uRadius;
uniform float uRefraction;
uniform float uDispersion;

out vec4 fragColor;

vec2 toUv(vec2 p) {
  return p * (uResolution.y / uResolution) + 0.5;
}

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  float d = length(p);
  float r = uRadius;

  float edge = fwidth(d) * 1.5;
  float mask = 1.0 - smoothstep(r - edge, r + edge, d);
  if (mask <= 0.0) {
    fragColor = vec4(0.0);
    return;
  }

  // sphere height: 0 at the rim, 1 at the center
  float z = sqrt(max(r * r - d * d, 0.0)) / r;
  float nd = d / r; // 0 at the center, 1 at the rim

  // refraction is confined to a narrow band near the rim; the rest stays undistorted
  vec2 dir = d > 0.0 ? p / d : vec2(0.0);
  float lens = smoothstep(0.85, 1.0, nd) * pow(nd, 6.0);
  vec2 offset = -dir * lens * uRefraction * 0.15;
  vec2 disp = -dir * lens * uDispersion * 0.012;

  vec3 light;
  light.r = texture(uScene, toUv(p + offset - disp)).r;
  light.g = texture(uScene, toUv(p + offset)).g;
  light.b = texture(uScene, toUv(p + offset + disp)).b;

  // neutral fresnel rim (no color tint so the glass stays clear)
  float fres = pow(1.0 - z, 3.0);
  vec3 rim = vec3(1.0) * fres * 0.18;

  // specular highlight from the upper-left
  vec2 lightDir = normalize(vec2(-0.55, 0.6));
  float spec = pow(max(dot(p / max(r, 1e-4), lightDir), 0.0), 6.0);
  spec *= smoothstep(r, r * 0.55, d);

  vec3 emissive = light + rim + vec3(spec) * 0.4;
  float emissiveA = clamp(max(max(emissive.r, emissive.g), emissive.b), 0.0, 1.0);

  // almost clear glass body: only a faint neutral darkening, mostly near the rim
  float bodyA = 0.05 + fres * 0.05;

  // composite emissive light over the clear body (premultiplied)
  float outA = emissiveA + bodyA * (1.0 - emissiveA);
  vec3 outRGB = emissive;

  outRGB *= mask;
  outA *= mask;

  fragColor = vec4(outRGB, outA);
}
`,sg=t=>{const e=t&&t.length?t:["#ffffff"],n=[];for(let i=0;i<Xu;i++){const a=e[i]??e[e.length-1],s=new ST(a);n.push([s.r,s.g,s.b])}return n};function bT({colors:t=["#FF4242","#7C3AED","#06B6D4","#EAB308"],count:e=3,speed:n=.5,amplitude:i=1,waviness:a=1,thickness:s=.7,glow:r=2.6,taper:l=3,spread:o=1,hueShift:u=0,intensity:h=.6,saturation:d=1.5,opacity:c=1,scale:p=1.5,glass:g=!1,refraction:y=1,dispersion:m=1,glassSize:f=1,className:x="",style:M}){const _=bt.useRef({});_.current={colors:t,count:e,speed:n,amplitude:i,waviness:a,thickness:s,glow:r,taper:l,spread:o,hueShift:u,intensity:h,saturation:d,opacity:c,scale:p,glass:g,refraction:y,dispersion:m,glassSize:f};const b=bt.useRef(null);return bt.useEffect(()=>{const T=b.current;if(!T)return;const R=new Op({alpha:!0,premultipliedAlpha:!0,antialias:!0}),v=R.gl;v.clearColor(0,0,0,0),v.enable(v.BLEND),v.blendFunc(v.ONE,v.ONE_MINUS_SRC_ALPHA),v.canvas.style.backgroundColor="transparent";const A=new Pp(v);A.attributes.uv&&delete A.attributes.uv;const w=new Hu(v,{vertex:ag,fragment:ET,uniforms:{uTime:{value:0},uResolution:{value:[T.offsetWidth,T.offsetHeight]},uColors:{value:sg(_.current.colors)},uColorCount:{value:Math.min(_.current.colors.length,Xu)},uStrandCount:{value:Math.min(_.current.count,Vh)},uSpeed:{value:n},uAmplitude:{value:i},uWaviness:{value:a},uThickness:{value:s},uGlow:{value:r},uTaper:{value:l},uSpread:{value:o},uHueShift:{value:u},uIntensity:{value:h},uOpacity:{value:c},uScale:{value:p},uSaturation:{value:d}}}),D=new Vu(v,{geometry:A,program:w}),L=new vT(v,{width:T.offsetWidth,height:T.offsetHeight}),N=new Hu(v,{vertex:ag,fragment:TT,uniforms:{uScene:{value:L.texture},uResolution:{value:[T.offsetWidth,T.offsetHeight]},uRadius:{value:.46*f},uRefraction:{value:y},uDispersion:{value:m}}}),H=new Vu(v,{geometry:A,program:N});T.appendChild(v.canvas);function F(){if(!T)return;const G=T.offsetWidth,k=T.offsetHeight;R.setSize(G,k),w.uniforms.uResolution.value=[G,k],L.setSize(G,k),N.uniforms.uResolution.value=[G,k]}window.addEventListener("resize",F),F();let O=0;const U=G=>{O=requestAnimationFrame(U);const k=_.current;w.uniforms.uTime.value=G*.001,w.uniforms.uColors.value=sg(k.colors),w.uniforms.uColorCount.value=Math.min(k.colors.length,Xu),w.uniforms.uStrandCount.value=Math.min(Math.max(Math.round(k.count),1),Vh),w.uniforms.uSpeed.value=k.speed,w.uniforms.uAmplitude.value=k.amplitude,w.uniforms.uWaviness.value=k.waviness,w.uniforms.uThickness.value=k.thickness,w.uniforms.uGlow.value=k.glow,w.uniforms.uTaper.value=k.taper,w.uniforms.uSpread.value=k.spread,w.uniforms.uHueShift.value=k.hueShift,w.uniforms.uIntensity.value=k.intensity,w.uniforms.uOpacity.value=k.opacity,w.uniforms.uScale.value=k.scale,w.uniforms.uSaturation.value=k.saturation,k.glass?(R.render({scene:D,target:L}),N.uniforms.uScene.value=L.texture,N.uniforms.uRefraction.value=k.refraction,N.uniforms.uDispersion.value=k.dispersion,N.uniforms.uRadius.value=.46*k.glassSize,R.render({scene:H})):R.render({scene:D})};return O=requestAnimationFrame(U),()=>{var G;cancelAnimationFrame(O),window.removeEventListener("resize",F),T&&v.canvas.parentNode===T&&T.removeChild(v.canvas),(G=v.getExtension("WEBGL_lose_context"))==null||G.loseContext()}},[]),Xt.jsx("div",{ref:b,className:`strands-container ${x}`,style:M})}const So=t=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]},AT={center:0,left:1,right:2},RT=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,CT=`#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uThreadCount;
uniform float uFrequency;
uniform float uSpread;
uniform float uTaper;
uniform float uPosition;
uniform float uFanMode;
uniform float uGlow;
uniform float uFalloff;
uniform float uThickness;
uniform float uBrightness;
uniform float uOpacity;
uniform float uMirror;
uniform float uShimmer;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uBackgroundColor;
uniform bool uLightMode;
uniform vec2 uMouse;
uniform float uMouseStrength;
uniform float uEnableMouse;
uniform float uMouseActive;
out vec4 fragColor;

#define TAU 6.28318530718
#define MAX_THREADS 10

float glow(float x, float str, float dist) {
  return dist / pow(max(x, 1e-4), str);
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  float n = max(uThreadCount, 1.0);

  float pinchX = uFanMode < 0.5 ? 0.5 : (uFanMode < 1.5 ? 0.0 : 1.0);
  if (uEnableMouse > 0.5) {
    pinchX = mix(pinchX, uMouse.x, clamp(uMouseStrength, 0.0, 1.0) * uMouseActive);
  }

  float spreadDx = uSpread * abs(uv.x - pinchX);
  float baseT = iTime * uSpeed;
  float tauOverN = TAU / n;
  float mirror = uMirror > 0.5 ? sign(pinchX - uv.x) : 1.0;
  bool doShimmer = uShimmer > 0.5;
  float shimmerT = iTime * 1.7;
  float invThickness = 1.0 / max(uThickness, 0.01);
  float xFreq = uv.x * uFrequency;
  float yOff = uv.y - uPosition;
  float ciScale = n > 1.0 ? 1.0 / (n - 1.0) : 0.0;

  vec3 col = vec3(0.0);
  float gsum = 0.0;

  for (int idx = 0; idx < MAX_THREADS; idx++) {
    float i = float(idx);
    if (i >= n) break;

    float amplitude = spreadDx * (1.0 + i * uTaper);
    float shimmer = doShimmer ? sin(shimmerT + i * 1.3) * 0.35 : 0.0;
    float phase = (baseT + i * tauOverN) * mirror + shimmer;

    float sdf = abs(yOff + sin(xFreq + phase) * amplitude) * invThickness;

    float g = glow(sdf, uFalloff, uGlow);
    float ci = i * ciScale;
    vec3 threadCol = mix(uColor1, uColor2, ci);

    col += g * threadCol;
    gsum += g;
  }

  float coreAmt = smoothstep(0.5, 2.2, gsum);
  col = mix(col, uColor3 * gsum, coreAmt * 0.5);

  float bright = uBrightness;
  if (uEnableMouse > 0.5) {
    vec2 md = uv - uMouse;
    float d2 = dot(md, md);
    bright += clamp(uMouseStrength, 0.0, 1.0) * uMouseActive * exp(-d2 * 6.0) * 0.6;
  }
  col *= bright;

  float alpha = clamp(gsum, 0.0, 1.0) * uOpacity;

  vec3 outRgb = col * alpha;

  if (uGrain > 0.5) {
    float gv = (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + iTime) * 43758.5453) - 0.5) * uGrainIntensity;
    outRgb = clamp(outRgb + gv, 0.0, 1.0);
    alpha = clamp(alpha + gv, 0.0, 1.0);
  }

  if (uLightMode) {
    vec3 mapped = vec3(1.0) - exp(-max(col, vec3(0.0)) * 1.3);
    float rawEnergy = clamp(max(mapped.r, max(mapped.g, mapped.b)) * uOpacity, 0.0, 1.0);
    float coverage = smoothstep(0.18, 0.72, rawEnergy);
    coverage *= coverage;
    vec3 hue = mapped / max(max(mapped.r, max(mapped.g, mapped.b)), 1e-4);
    vec3 chroma = pow(clamp(hue, 0.0, 1.0), vec3(0.78));
    vec3 pigment = mix(chroma, vec3(0.08), 0.12);
    vec3 ink = mix(vec3(0.9), pigment, 0.82 + coverage * 0.18);
    fragColor = vec4(mix(uBackgroundColor, ink, coverage), 1.0);
  } else {
    fragColor = vec4(outRgb, alpha);
  }
}
`,cf=new WeakMap,wT=({color1:t="#5227FF",color2:e="#FF9FFC",color3:n="#FFFFFF",speed:i=.2,threadCount:a=6,frequency:s=5,spread:r=.18,taper:l=1,position:o=.5,fanMode:u="center",glow:h=.02,falloff:d=.6,thickness:c=1.1,brightness:p=.6,opacity:g=1,mirror:y=!0,shimmer:m=!1,grain:f=!0,grainIntensity:x=.05,mouseInteraction:M=!0,mouseStrength:_=.3,backgroundColor:b="#FFFFFF",lightMode:T=!1,className:R=""})=>{const v=bt.useRef(null),A=bt.useRef({enabled:!0,strength:.3});return bt.useEffect(()=>{const w=v.current;if(!w)return;const D=new Op({webgl:2,alpha:!0,premultipliedAlpha:!0,antialias:!1,dpr:Math.min(window.devicePixelRatio||1,2)}),L=D.gl;L.clearColor(0,0,0,0);const N=L.canvas;N.style.width="100%",N.style.height="100%",N.style.display="block",w.appendChild(N);const H=new Pp(L),F=new Hu(L,{vertex:RT,fragment:CT,uniforms:{iTime:{value:0},iResolution:{value:new Float32Array([1,1])},uSpeed:{value:.2},uThreadCount:{value:6},uFrequency:{value:5},uSpread:{value:.18},uTaper:{value:1},uPosition:{value:.5},uFanMode:{value:0},uGlow:{value:.02},uFalloff:{value:.6},uThickness:{value:1.1},uBrightness:{value:.6},uOpacity:{value:1},uMirror:{value:1},uShimmer:{value:0},uGrain:{value:1},uGrainIntensity:{value:.05},uColor1:{value:new Float32Array([1,1,1])},uColor2:{value:new Float32Array([1,1,1])},uColor3:{value:new Float32Array([1,1,1])},uBackgroundColor:{value:new Float32Array([1,1,1])},uLightMode:{value:!1},uMouse:{value:new Float32Array([.5,.5])},uMouseStrength:{value:.3},uEnableMouse:{value:1},uMouseActive:{value:0}}}),O=new Vu(L,{geometry:H,program:F});cf.set(w,{renderer:D,program:F,mesh:O});const U=()=>{const Ne=w.getBoundingClientRect(),we=Math.max(1,Math.floor(Ne.width)),Re=Math.max(1,Math.floor(Ne.height));D.setSize(we,Re);const ct=F.uniforms.iResolution.value;ct[0]=L.drawingBufferWidth,ct[1]=L.drawingBufferHeight,D.render({scene:O})},G=new ResizeObserver(U);G.observe(w),U();const k=[.5,.5],ee=[.5,.5];let se=0,fe=0;const Ve=Ne=>{const we=N.getBoundingClientRect();ee[0]=(Ne.clientX-we.left)/we.width,ee[1]=1-(Ne.clientY-we.top)/we.height,fe=1},Ye=()=>{fe=1},Be=()=>{fe=0};N.addEventListener("mousemove",Ve),N.addEventListener("mouseenter",Ye),N.addEventListener("mouseleave",Be);let Z=0,ie=!0,ne=!document.hidden;const Ce=performance.now(),De=Ne=>{F.uniforms.iTime.value=(Ne-Ce)*.001,k[0]+=.05*(ee[0]-k[0]),k[1]+=.05*(ee[1]-k[1]),se+=.05*(fe-se),F.uniforms.uMouse.value[0]=k[0],F.uniforms.uMouse.value[1]=k[1],F.uniforms.uMouseActive.value=se,F.uniforms.uEnableMouse.value=A.current.enabled?1:0,F.uniforms.uMouseStrength.value=A.current.strength,D.render({scene:O}),Z=requestAnimationFrame(De)},ye=()=>{ie&&ne&&Z===0&&(Z=requestAnimationFrame(De))},st=()=>{Z!==0&&(cancelAnimationFrame(Z),Z=0)},Fe=new IntersectionObserver(([Ne])=>{ie=Ne.isIntersecting,ie?ye():st()},{threshold:0});Fe.observe(w);const $e=()=>{ne=!document.hidden,ne?ye():st()};return document.addEventListener("visibilitychange",$e),ye(),()=>{var Ne;st(),G.disconnect(),Fe.disconnect(),document.removeEventListener("visibilitychange",$e),N.removeEventListener("mousemove",Ve),N.removeEventListener("mouseenter",Ye),N.removeEventListener("mouseleave",Be),cf.delete(w);try{w.removeChild(N)}catch{}(Ne=L.getExtension("WEBGL_lose_context"))==null||Ne.loseContext()}},[]),bt.useEffect(()=>{const w=v.current;if(!w)return;const D=cf.get(w);if(!D)return;const{program:L}=D,N=L.uniforms;N.uSpeed.value=i,N.uThreadCount.value=Math.round(a),N.uFrequency.value=s,N.uSpread.value=r,N.uTaper.value=l,N.uPosition.value=o,N.uFanMode.value=AT[u]??0,N.uGlow.value=h,N.uFalloff.value=d,N.uThickness.value=c,N.uBrightness.value=p,N.uOpacity.value=g,N.uMirror.value=y?1:0,N.uShimmer.value=m?1:0,N.uGrain.value=f?1:0,N.uGrainIntensity.value=x;const H=N.uColor1.value,F=So(t);H[0]=F[0],H[1]=F[1],H[2]=F[2];const O=N.uColor2.value,U=So(e);O[0]=U[0],O[1]=U[1],O[2]=U[2];const G=N.uColor3.value,k=So(n);G[0]=k[0],G[1]=k[1],G[2]=k[2];const ee=So(b);N.uBackgroundColor.value[0]=ee[0],N.uBackgroundColor.value[1]=ee[1],N.uBackgroundColor.value[2]=ee[2],N.uLightMode.value=T,N.uMouseStrength.value=_,N.uEnableMouse.value=M?1:0,A.current.enabled=M,A.current.strength=_},[t,e,n,i,a,s,r,l,o,u,h,d,c,p,g,y,m,f,x,M,_,b,T]),Xt.jsx("div",{ref:v,className:`web-threads-container ${R}`.trim()})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="185",DT=0,rg=1,UT=2,su=1,LT=2,rl=3,ka=0,Tn=1,Vi=2,Qi=0,dr=1,lg=2,og=3,ug=4,NT=5,as=100,OT=101,PT=102,FT=103,IT=104,BT=200,zT=201,HT=202,GT=203,Xh=204,kh=205,VT=206,XT=207,kT=208,WT=209,qT=210,YT=211,ZT=212,KT=213,QT=214,Wh=0,qh=1,Yh=2,Rr=3,Zh=4,Kh=5,Qh=6,Jh=7,fS=0,JT=1,$T=2,Ei=0,hS=1,dS=2,pS=3,mS=4,gS=5,_S=6,vS=7,xS=300,vs=301,Cr=302,ff=303,hf=304,gc=306,$h=1e3,qi=1001,jh=1002,sn=1003,jT=1004,Mo=1005,fn=1006,df=1007,rs=1008,Jn=1009,SS=1010,MS=1011,Il=1012,Ip=1013,Ai=1014,Si=1015,aa=1016,Bp=1017,zp=1018,Bl=1020,yS=35902,ES=35899,TS=1021,bS=1022,oi=1023,sa=1026,ls=1027,AS=1028,Hp=1029,xs=1030,Gp=1031,Vp=1033,ru=33776,lu=33777,ou=33778,uu=33779,ed=35840,td=35841,nd=35842,id=35843,ad=36196,sd=37492,rd=37496,ld=37488,od=37489,ku=37490,ud=37491,cd=37808,fd=37809,hd=37810,dd=37811,pd=37812,md=37813,gd=37814,_d=37815,vd=37816,xd=37817,Sd=37818,Md=37819,yd=37820,Ed=37821,Td=36492,bd=36494,Ad=36495,Rd=36283,Cd=36284,Wu=36285,wd=36286,eb=3200,cg=0,tb=1,Ta="",kn="srgb",qu="srgb-linear",Yu="linear",lt="srgb",Us=7680,fg=519,nb=512,ib=513,ab=514,Xp=515,sb=516,rb=517,kp=518,lb=519,hg=35044,dg="300 es",Mi=2e3,Zu=2001;function ob(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ku(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ub(){const t=Ku("canvas");return t.style.display="block",t}const pg={};function mg(...t){const e="THREE."+t.shift();console.log(e,...t)}function RS(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=RS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function et(...t){t=RS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function pr(...t){const e=t.join(" ");e in pg||(pg[e]=!0,Oe(...t))}function cb(t,e,n){return new Promise(function(i,a){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const fb={[Wh]:qh,[Yh]:Qh,[Zh]:Jh,[Rr]:Kh,[qh]:Wh,[Qh]:Yh,[Jh]:Zh,[Kh]:Rr};class As{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pf=Math.PI/180,Dd=180/Math.PI;function Jl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function hb(t,e){return(t%e+e)%e}function mf(t,e,n){return(1-n)*t+n*e}function Zr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Zp=class Zp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zp.prototype.isVector2=!0;let tt=Zp;class zr{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,s,r,l){let o=i[a+0],u=i[a+1],h=i[a+2],d=i[a+3],c=s[r+0],p=s[r+1],g=s[r+2],y=s[r+3];if(d!==y||o!==c||u!==p||h!==g){let m=o*c+u*p+h*g+d*y;m<0&&(c=-c,p=-p,g=-g,y=-y,m=-m);let f=1-l;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);f=Math.sin(f*x)/M,l=Math.sin(l*x)/M,o=o*f+c*l,u=u*f+p*l,h=h*f+g*l,d=d*f+y*l}else{o=o*f+c*l,u=u*f+p*l,h=h*f+g*l,d=d*f+y*l;const x=1/Math.sqrt(o*o+u*u+h*h+d*d);o*=x,u*=x,h*=x,d*=x}}e[n]=o,e[n+1]=u,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,a,s,r){const l=i[a],o=i[a+1],u=i[a+2],h=i[a+3],d=s[r],c=s[r+1],p=s[r+2],g=s[r+3];return e[n]=l*g+h*d+o*p-u*c,e[n+1]=o*g+h*c+u*d-l*p,e[n+2]=u*g+h*p+l*c-o*d,e[n+3]=h*g-l*d-o*c-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,s=e._z,r=e._order,l=Math.cos,o=Math.sin,u=l(i/2),h=l(a/2),d=l(s/2),c=o(i/2),p=o(a/2),g=o(s/2);switch(r){case"XYZ":this._x=c*h*d+u*p*g,this._y=u*p*d-c*h*g,this._z=u*h*g+c*p*d,this._w=u*h*d-c*p*g;break;case"YXZ":this._x=c*h*d+u*p*g,this._y=u*p*d-c*h*g,this._z=u*h*g-c*p*d,this._w=u*h*d+c*p*g;break;case"ZXY":this._x=c*h*d-u*p*g,this._y=u*p*d+c*h*g,this._z=u*h*g+c*p*d,this._w=u*h*d-c*p*g;break;case"ZYX":this._x=c*h*d-u*p*g,this._y=u*p*d+c*h*g,this._z=u*h*g-c*p*d,this._w=u*h*d+c*p*g;break;case"YZX":this._x=c*h*d+u*p*g,this._y=u*p*d+c*h*g,this._z=u*h*g-c*p*d,this._w=u*h*d-c*p*g;break;case"XZY":this._x=c*h*d-u*p*g,this._y=u*p*d-c*h*g,this._z=u*h*g+c*p*d,this._w=u*h*d+c*p*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],s=n[8],r=n[1],l=n[5],o=n[9],u=n[2],h=n[6],d=n[10],c=i+l+d;if(c>0){const p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(h-o)*p,this._y=(s-u)*p,this._z=(r-a)*p}else if(i>l&&i>d){const p=2*Math.sqrt(1+i-l-d);this._w=(h-o)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+u)/p}else if(l>d){const p=2*Math.sqrt(1+l-i-d);this._w=(s-u)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(o+h)/p}else{const p=2*Math.sqrt(1+d-i-l);this._w=(r-a)/p,this._x=(s+u)/p,this._y=(o+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,s=e._z,r=e._w,l=n._x,o=n._y,u=n._z,h=n._w;return this._x=i*h+r*l+a*u-s*o,this._y=a*h+r*o+s*l-i*u,this._z=s*h+r*u+i*o-a*l,this._w=r*h-i*l-a*o-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,s=e._z,r=e._w,l=this.dot(e);l<0&&(i=-i,a=-a,s=-s,r=-r,l=-l);let o=1-n;if(l<.9995){const u=Math.acos(l),h=Math.sin(u);o=Math.sin(o*u)/h,n=Math.sin(n*u)/h,this._x=this._x*o+i*n,this._y=this._y*o+a*n,this._z=this._z*o+s*n,this._w=this._w*o+r*n,this._onChangeCallback()}else this._x=this._x*o+i*n,this._y=this._y*o+a*n,this._z=this._z*o+s*n,this._w=this._w*o+r*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kp=class Kp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,s=e.x,r=e.y,l=e.z,o=e.w,u=2*(r*a-l*i),h=2*(l*n-s*a),d=2*(s*i-r*n);return this.x=n+o*u+r*d-l*h,this.y=i+o*h+l*u-s*d,this.z=a+o*d+s*h-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,s=e.z,r=n.x,l=n.y,o=n.z;return this.x=a*o-s*l,this.y=s*r-i*o,this.z=i*l-a*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gf.copy(this).projectOnVector(e),this.sub(gf)}reflect(e){return this.sub(gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kp.prototype.isVector3=!0;let q=Kp;const gf=new q,gg=new zr,Qp=class Qp{constructor(e,n,i,a,s,r,l,o,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,l,o,u)}set(e,n,i,a,s,r,l,o,u){const h=this.elements;return h[0]=e,h[1]=a,h[2]=l,h[3]=n,h[4]=s,h[5]=o,h[6]=i,h[7]=r,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],l=i[3],o=i[6],u=i[1],h=i[4],d=i[7],c=i[2],p=i[5],g=i[8],y=a[0],m=a[3],f=a[6],x=a[1],M=a[4],_=a[7],b=a[2],T=a[5],R=a[8];return s[0]=r*y+l*x+o*b,s[3]=r*m+l*M+o*T,s[6]=r*f+l*_+o*R,s[1]=u*y+h*x+d*b,s[4]=u*m+h*M+d*T,s[7]=u*f+h*_+d*R,s[2]=c*y+p*x+g*b,s[5]=c*m+p*M+g*T,s[8]=c*f+p*_+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],l=e[5],o=e[6],u=e[7],h=e[8];return n*r*h-n*l*u-i*s*h+i*l*o+a*s*u-a*r*o}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],l=e[5],o=e[6],u=e[7],h=e[8],d=h*r-l*u,c=l*o-h*s,p=u*s-r*o,g=n*d+i*c+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(a*u-h*i)*y,e[2]=(l*i-a*r)*y,e[3]=c*y,e[4]=(h*n-a*o)*y,e[5]=(a*s-l*n)*y,e[6]=p*y,e[7]=(i*o-u*n)*y,e[8]=(r*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,s,r,l){const o=Math.cos(s),u=Math.sin(s);return this.set(i*o,i*u,-i*(o*r+u*l)+r+e,-a*u,a*o,-a*(-u*r+o*l)+l+n,0,0,1),this}scale(e,n){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_f.makeScale(e,n)),this}rotate(e){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_f.makeRotation(-e)),this}translate(e,n){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_f.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qp.prototype.isMatrix3=!0;let Pe=Qp;const _f=new Pe,_g=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vg=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function db(){const t={enabled:!0,workingColorSpace:qu,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===lt&&(a.r=Ji(a.r),a.g=Ji(a.g),a.b=Ji(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===lt&&(a.r=mr(a.r),a.g=mr(a.g),a.b=mr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ta?Yu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[qu]:{primaries:e,whitePoint:i,transfer:Yu,toXYZ:_g,fromXYZ:vg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:_g,fromXYZ:vg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const Ke=db();function Ji(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ls;class pb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ls===void 0&&(Ls=Ku("canvas")),Ls.width=e.width,Ls.height=e.height;const a=Ls.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ls}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ku("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Ji(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ji(n[i]/255)*255):n[i]=Ji(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mb=0;class Wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Jl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,l=a.length;r<l;r++)a[r].isDataTexture?s.push(vf(a[r].image)):s.push(vf(a[r]))}else s=vf(a);i.url=s}return n||(e.images[this.uuid]=i),i}}function vf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?pb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let gb=0;const xf=new q;class mn extends As{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=qi,a=qi,s=fn,r=rs,l=oi,o=Jn,u=mn.DEFAULT_ANISOTROPY,h=Ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Jl(),this.name="",this.source=new Wp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=o,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xf).x}get height(){return this.source.getSize(xf).y}get depth(){return this.source.getSize(xf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $h:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $h:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=xS;mn.DEFAULT_ANISOTROPY=1;const Jp=class Jp{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,s;const o=e.elements,u=o[0],h=o[4],d=o[8],c=o[1],p=o[5],g=o[9],y=o[2],m=o[6],f=o[10];if(Math.abs(h-c)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+c)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,_=(p+1)/2,b=(f+1)/2,T=(h+c)/4,R=(d+y)/4,v=(g+m)/4;return M>_&&M>b?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=T/i,s=R/i):_>b?_<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(_),i=T/a,s=v/a):b<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(b),i=R/s,a=v/s),this.set(i,a,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(c-h)*(c-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-y)/x,this.z=(c-h)/x,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jp.prototype.isVector4=!0;let Ut=Jp;class _b extends As{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},s=new mn(a),r=i.count;for(let l=0;l<r;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Wp(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends _b{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class CS extends mn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=sn,this.minFilter=sn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vb extends mn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=sn,this.minFilter=sn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qu=class Qu{constructor(e,n,i,a,s,r,l,o,u,h,d,c,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,l,o,u,h,d,c,p,g,y,m)}set(e,n,i,a,s,r,l,o,u,h,d,c,p,g,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=l,f[13]=o,f[2]=u,f[6]=h,f[10]=d,f[14]=c,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),r=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),l=Math.sin(i),o=Math.cos(a),u=Math.sin(a),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const c=r*h,p=r*d,g=l*h,y=l*d;n[0]=o*h,n[4]=-o*d,n[8]=u,n[1]=p+g*u,n[5]=c-y*u,n[9]=-l*o,n[2]=y-c*u,n[6]=g+p*u,n[10]=r*o}else if(e.order==="YXZ"){const c=o*h,p=o*d,g=u*h,y=u*d;n[0]=c+y*l,n[4]=g*l-p,n[8]=r*u,n[1]=r*d,n[5]=r*h,n[9]=-l,n[2]=p*l-g,n[6]=y+c*l,n[10]=r*o}else if(e.order==="ZXY"){const c=o*h,p=o*d,g=u*h,y=u*d;n[0]=c-y*l,n[4]=-r*d,n[8]=g+p*l,n[1]=p+g*l,n[5]=r*h,n[9]=y-c*l,n[2]=-r*u,n[6]=l,n[10]=r*o}else if(e.order==="ZYX"){const c=r*h,p=r*d,g=l*h,y=l*d;n[0]=o*h,n[4]=g*u-p,n[8]=c*u+y,n[1]=o*d,n[5]=y*u+c,n[9]=p*u-g,n[2]=-u,n[6]=l*o,n[10]=r*o}else if(e.order==="YZX"){const c=r*o,p=r*u,g=l*o,y=l*u;n[0]=o*h,n[4]=y-c*d,n[8]=g*d+p,n[1]=d,n[5]=r*h,n[9]=-l*h,n[2]=-u*h,n[6]=p*d+g,n[10]=c-y*d}else if(e.order==="XZY"){const c=r*o,p=r*u,g=l*o,y=l*u;n[0]=o*h,n[4]=-d,n[8]=u*h,n[1]=c*d+y,n[5]=r*h,n[9]=p*d-g,n[2]=g*d-p,n[6]=l*h,n[10]=y*d+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xb,e,Sb)}lookAt(e,n,i){const a=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),ha.crossVectors(i,Cn),ha.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),ha.crossVectors(i,Cn)),ha.normalize(),yo.crossVectors(Cn,ha),a[0]=ha.x,a[4]=yo.x,a[8]=Cn.x,a[1]=ha.y,a[5]=yo.y,a[9]=Cn.y,a[2]=ha.z,a[6]=yo.z,a[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],l=i[4],o=i[8],u=i[12],h=i[1],d=i[5],c=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],x=i[3],M=i[7],_=i[11],b=i[15],T=a[0],R=a[4],v=a[8],A=a[12],w=a[1],D=a[5],L=a[9],N=a[13],H=a[2],F=a[6],O=a[10],U=a[14],G=a[3],k=a[7],ee=a[11],se=a[15];return s[0]=r*T+l*w+o*H+u*G,s[4]=r*R+l*D+o*F+u*k,s[8]=r*v+l*L+o*O+u*ee,s[12]=r*A+l*N+o*U+u*se,s[1]=h*T+d*w+c*H+p*G,s[5]=h*R+d*D+c*F+p*k,s[9]=h*v+d*L+c*O+p*ee,s[13]=h*A+d*N+c*U+p*se,s[2]=g*T+y*w+m*H+f*G,s[6]=g*R+y*D+m*F+f*k,s[10]=g*v+y*L+m*O+f*ee,s[14]=g*A+y*N+m*U+f*se,s[3]=x*T+M*w+_*H+b*G,s[7]=x*R+M*D+_*F+b*k,s[11]=x*v+M*L+_*O+b*ee,s[15]=x*A+M*N+_*U+b*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[12],r=e[1],l=e[5],o=e[9],u=e[13],h=e[2],d=e[6],c=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15],x=o*p-u*c,M=l*p-u*d,_=l*c-o*d,b=r*p-u*h,T=r*c-o*h,R=r*d-l*h;return n*(y*x-m*M+f*_)-i*(g*x-m*b+f*T)+a*(g*M-y*b+f*R)-s*(g*_-y*T+m*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[1],r=e[5],l=e[9],o=e[2],u=e[6],h=e[10];return n*(r*h-l*u)-i*(s*h-l*o)+a*(s*u-r*o)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],l=e[5],o=e[6],u=e[7],h=e[8],d=e[9],c=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],x=n*l-i*r,M=n*o-a*r,_=n*u-s*r,b=i*o-a*l,T=i*u-s*l,R=a*u-s*o,v=h*y-d*g,A=h*m-c*g,w=h*f-p*g,D=d*m-c*y,L=d*f-p*y,N=c*f-p*m,H=x*N-M*L+_*D+b*w-T*A+R*v;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return e[0]=(l*N-o*L+u*D)*F,e[1]=(a*L-i*N-s*D)*F,e[2]=(y*R-m*T+f*b)*F,e[3]=(c*T-d*R-p*b)*F,e[4]=(o*w-r*N-u*A)*F,e[5]=(n*N-a*w+s*A)*F,e[6]=(m*_-g*R-f*M)*F,e[7]=(h*R-c*_+p*M)*F,e[8]=(r*L-l*w+u*v)*F,e[9]=(i*w-n*L-s*v)*F,e[10]=(g*T-y*_+f*x)*F,e[11]=(d*_-h*T-p*x)*F,e[12]=(l*A-r*D-o*v)*F,e[13]=(n*D-i*A+a*v)*F,e[14]=(y*M-g*b-m*x)*F,e[15]=(h*b-d*M+c*x)*F,this}scale(e){const n=this.elements,i=e.x,a=e.y,s=e.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=e.x,l=e.y,o=e.z,u=s*r,h=s*l;return this.set(u*r+i,u*l-a*o,u*o+a*l,0,u*l+a*o,h*l+i,h*o-a*r,0,u*o-a*l,h*o+a*r,s*o*o+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,s=n._x,r=n._y,l=n._z,o=n._w,u=s+s,h=r+r,d=l+l,c=s*u,p=s*h,g=s*d,y=r*h,m=r*d,f=l*d,x=o*u,M=o*h,_=o*d,b=i.x,T=i.y,R=i.z;return a[0]=(1-(y+f))*b,a[1]=(p+_)*b,a[2]=(g-M)*b,a[3]=0,a[4]=(p-_)*T,a[5]=(1-(c+f))*T,a[6]=(m+x)*T,a[7]=0,a[8]=(g+M)*R,a[9]=(m-x)*R,a[10]=(1-(c+y))*R,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Ns.set(a[0],a[1],a[2]).length();const l=Ns.set(a[4],a[5],a[6]).length(),o=Ns.set(a[8],a[9],a[10]).length();s<0&&(r=-r),ni.copy(this);const u=1/r,h=1/l,d=1/o;return ni.elements[0]*=u,ni.elements[1]*=u,ni.elements[2]*=u,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,n.setFromRotationMatrix(ni),i.x=r,i.y=l,i.z=o,this}makePerspective(e,n,i,a,s,r,l=Mi,o=!1){const u=this.elements,h=2*s/(n-e),d=2*s/(i-a),c=(n+e)/(n-e),p=(i+a)/(i-a);let g,y;if(o)g=s/(r-s),y=r*s/(r-s);else if(l===Mi)g=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(l===Zu)g=-r/(r-s),y=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,a,s,r,l=Mi,o=!1){const u=this.elements,h=2/(n-e),d=2/(i-a),c=-(n+e)/(n-e),p=-(i+a)/(i-a);let g,y;if(o)g=1/(r-s),y=r/(r-s);else if(l===Mi)g=-2/(r-s),y=-(r+s)/(r-s);else if(l===Zu)g=-1/(r-s),y=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Qu.prototype.isMatrix4=!0;let Vt=Qu;const Ns=new q,ni=new Vt,xb=new q(0,0,0),Sb=new q(1,1,1),ha=new q,yo=new q,Cn=new q,xg=new Vt,Sg=new zr;class Ss{constructor(e=0,n=0,i=0,a=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],l=a[8],o=a[1],u=a[5],h=a[9],d=a[2],c=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class wS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mb=0;const Mg=new q,Os=new zr,Oi=new Vt,Eo=new q,Kr=new q,yb=new q,Eb=new zr,yg=new q(1,0,0),Eg=new q(0,1,0),Tg=new q(0,0,1),bg={type:"added"},Tb={type:"removed"},Ps={type:"childadded",child:null},Sf={type:"childremoved",child:null};class Bn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Jl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new q,n=new Ss,i=new zr,a=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Pe}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(yg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,n){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(yg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Eo.copy(e):Eo.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Kr,Eo,this.up):Oi.lookAt(Eo,Kr,this.up),this.quaternion.setFromRotationMatrix(Oi),a&&(Oi.extractRotation(a.matrixWorld),Os.setFromRotationMatrix(Oi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bg),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Tb),Sf.child=e,this.dispatchEvent(Sf),Sf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bg),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,yb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Eb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let r=0,l=s.length;r<l;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(l=>({...l})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let u=0,h=o.length;u<h;u++){const d=o[u];s(e.shapes,d)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,u=this.material.length;o<u;o++)l.push(s(e.materials,this.material[o]));a.material=l}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let l=0;l<this.children.length;l++)a.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];a.animations.push(s(e.animations,o))}}if(n){const l=r(e.geometries),o=r(e.materials),u=r(e.textures),h=r(e.images),d=r(e.shapes),c=r(e.skeletons),p=r(e.animations),g=r(e.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),c.length>0&&(i.skeletons=c),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function r(l){const o=[];for(const u in l){const h=l[u];delete h.metadata,o.push(h)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Bn.DEFAULT_UP=new q(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class To extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bb={type:"move"};class Mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,s=null,r=null;const l=this._targetRay,o=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(u,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],c=h.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&c>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(bb)))}return l!==null&&(l.visible=a!==null),o!==null&&(o.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new To;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const DS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},bo={h:0,s:0,l:0};function yf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=Ke.workingColorSpace){if(e=hb(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=yf(r,s,e+1/3),this.g=yf(r,s,e),this.b=yf(r,s,e-1/3)}return Ke.colorSpaceToWorking(this,a),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],l=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=DS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Ke.workingToColorSpace(un.copy(this),e),Math.round(Qe(un.r*255,0,255))*65536+Math.round(Qe(un.g*255,0,255))*256+Math.round(Qe(un.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(un.copy(this),n);const i=un.r,a=un.g,s=un.b,r=Math.max(i,a,s),l=Math.min(i,a,s);let o,u;const h=(l+r)/2;if(l===r)o=0,u=0;else{const d=r-l;switch(u=h<=.5?d/(r+l):d/(2-r-l),r){case i:o=(a-s)/d+(a<s?6:0);break;case a:o=(s-i)/d+2;break;case s:o=(i-a)/d+4;break}o/=6}return e.h=o,e.s=u,e.l=h,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=kn){Ke.workingToColorSpace(un.copy(this),e);const n=un.r,i=un.g,a=un.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(da),this.setHSL(da.h+e,da.s+n,da.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(da),e.getHSL(bo);const i=mf(da.h,bo.h,n),a=mf(da.s,bo.s,n),s=mf(da.l,bo.l,n);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new nt;nt.NAMES=DS;class Ab extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ii=new q,Pi=new q,Ef=new q,Fi=new q,Fs=new q,Is=new q,Ag=new q,Tf=new q,bf=new q,Af=new q,Rf=new Ut,Cf=new Ut,wf=new Ut;class li{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),ii.subVectors(e,n),a.cross(ii);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,n,i,a,s){ii.subVectors(a,n),Pi.subVectors(i,n),Ef.subVectors(e,n);const r=ii.dot(ii),l=ii.dot(Pi),o=ii.dot(Ef),u=Pi.dot(Pi),h=Pi.dot(Ef),d=r*u-l*l;if(d===0)return s.set(0,0,0),null;const c=1/d,p=(u*o-l*h)*c,g=(r*h-l*o)*c;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,a,s,r,l,o){return this.getBarycoord(e,n,i,a,Fi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,Fi.x),o.addScaledVector(r,Fi.y),o.addScaledVector(l,Fi.z),o)}static getInterpolatedAttribute(e,n,i,a,s,r){return Rf.setScalar(0),Cf.setScalar(0),wf.setScalar(0),Rf.fromBufferAttribute(e,n),Cf.fromBufferAttribute(e,i),wf.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Rf,s.x),r.addScaledVector(Cf,s.y),r.addScaledVector(wf,s.z),r}static isFrontFacing(e,n,i,a){return ii.subVectors(i,n),Pi.subVectors(e,n),ii.cross(Pi).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ii.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,s){return li.getInterpolation(e,this.a,this.b,this.c,n,i,a,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,s=this.c;let r,l;Fs.subVectors(a,i),Is.subVectors(s,i),Tf.subVectors(e,i);const o=Fs.dot(Tf),u=Is.dot(Tf);if(o<=0&&u<=0)return n.copy(i);bf.subVectors(e,a);const h=Fs.dot(bf),d=Is.dot(bf);if(h>=0&&d<=h)return n.copy(a);const c=o*d-h*u;if(c<=0&&o>=0&&h<=0)return r=o/(o-h),n.copy(i).addScaledVector(Fs,r);Af.subVectors(e,s);const p=Fs.dot(Af),g=Is.dot(Af);if(g>=0&&p<=g)return n.copy(s);const y=p*u-o*g;if(y<=0&&u>=0&&g<=0)return l=u/(u-g),n.copy(i).addScaledVector(Is,l);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Ag.subVectors(s,a),l=(d-h)/(d-h+(p-g)),n.copy(a).addScaledVector(Ag,l);const f=1/(m+y+c);return r=y*f,l=c*f,n.copy(i).addScaledVector(Fs,r).addScaledVector(Is,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $l{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,l=s.count;r<l;r++)e.isMesh===!0?e.getVertexPosition(r,ai):ai.fromBufferAttribute(s,r),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Ro.subVectors(this.max,Qr),Bs.subVectors(e.a,Qr),zs.subVectors(e.b,Qr),Hs.subVectors(e.c,Qr),pa.subVectors(zs,Bs),ma.subVectors(Hs,zs),Ka.subVectors(Bs,Hs);let n=[0,-pa.z,pa.y,0,-ma.z,ma.y,0,-Ka.z,Ka.y,pa.z,0,-pa.x,ma.z,0,-ma.x,Ka.z,0,-Ka.x,-pa.y,pa.x,0,-ma.y,ma.x,0,-Ka.y,Ka.x,0];return!Df(n,Bs,zs,Hs,Ro)||(n=[1,0,0,0,1,0,0,0,1],!Df(n,Bs,zs,Hs,Ro))?!1:(Co.crossVectors(pa,ma),n=[Co.x,Co.y,Co.z],Df(n,Bs,zs,Hs,Ro))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new q,new q,new q,new q,new q,new q,new q,new q],ai=new q,Ao=new $l,Bs=new q,zs=new q,Hs=new q,pa=new q,ma=new q,Ka=new q,Qr=new q,Ro=new q,Co=new q,Qa=new q;function Df(t,e,n,i,a){for(let s=0,r=t.length-3;s<=r;s+=3){Qa.fromArray(t,s);const l=a.x*Math.abs(Qa.x)+a.y*Math.abs(Qa.y)+a.z*Math.abs(Qa.z),o=e.dot(Qa),u=n.dot(Qa),h=i.dot(Qa);if(Math.max(-Math.max(o,u,h),Math.min(o,u,h))>l)return!1}return!0}const It=new q,wo=new tt;let Rb=0;class bi extends As{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=hg,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wo.fromBufferAttribute(this,n),wo.applyMatrix3(e),this.setXY(n,wo.x,wo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Zr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),a=Sn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),a=Sn(a,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class US extends bi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class LS extends bi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $i extends bi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Cb=new $l,Jr=new q,Uf=new q;class qp{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Cb.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const n=Jr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Jr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Uf)),this.expandByPoint(Jr.copy(e.center).sub(Uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wb=0;const Vn=new Vt,Lf=new Bn,Gs=new q,wn=new $l,$r=new $l,Kt=new q;class la extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Jl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ob(e)?LS:US)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return Lf.lookAt(e),Lf.updateMatrix(),this.applyMatrix4(Lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new $i(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const s=e[a];n.setXYZ(a,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $l);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){const l=n[s];$r.setFromBufferAttribute(l),this.morphTargetsRelative?(Kt.addVectors(wn.min,$r.min),wn.expandByPoint(Kt),Kt.addVectors(wn.max,$r.max),wn.expandByPoint(Kt)):(wn.expandByPoint($r.min),wn.expandByPoint($r.max))}wn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Kt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Kt));if(n)for(let s=0,r=n.length;s<r;s++){const l=n[s],o=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Kt.fromBufferAttribute(l,u),o&&(Gs.fromBufferAttribute(e,u),Kt.add(Gs)),a=Math.max(a,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new bi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const l=[],o=[];for(let v=0;v<i.count;v++)l[v]=new q,o[v]=new q;const u=new q,h=new q,d=new q,c=new tt,p=new tt,g=new tt,y=new q,m=new q;function f(v,A,w){u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,w),c.fromBufferAttribute(s,v),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,w),h.sub(u),d.sub(u),p.sub(c),g.sub(c);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),l[v].add(y),l[A].add(y),l[w].add(y),o[v].add(m),o[A].add(m),o[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,A=x.length;v<A;++v){const w=x[v],D=w.start,L=w.count;for(let N=D,H=D+L;N<H;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const M=new q,_=new q,b=new q,T=new q;function R(v){b.fromBufferAttribute(a,v),T.copy(b);const A=l[v];M.copy(A),M.sub(b.multiplyScalar(b.dot(A))).normalize(),_.crossVectors(T,A);const D=_.dot(o[v])<0?-1:1;r.setXYZW(v,M.x,M.y,M.z,D)}for(let v=0,A=x.length;v<A;++v){const w=x[v],D=w.start,L=w.count;for(let N=D,H=D+L;N<H;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new bi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,p=i.count;c<p;c++)i.setXYZ(c,0,0,0);const a=new q,s=new q,r=new q,l=new q,o=new q,u=new q,h=new q,d=new q;if(e)for(let c=0,p=e.count;c<p;c+=3){const g=e.getX(c+0),y=e.getX(c+1),m=e.getX(c+2);a.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),r.fromBufferAttribute(n,m),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),l.fromBufferAttribute(i,g),o.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),l.add(h),o.add(h),u.add(h),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let c=0,p=n.count;c<p;c+=3)a.fromBufferAttribute(n,c+0),s.fromBufferAttribute(n,c+1),r.fromBufferAttribute(n,c+2),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),i.setXYZ(c+0,h.x,h.y,h.z),i.setXYZ(c+1,h.x,h.y,h.z),i.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Kt.fromBufferAttribute(e,n),Kt.normalize(),e.setXYZ(n,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(l,o){const u=l.array,h=l.itemSize,d=l.normalized,c=new u.constructor(o.length*h);let p=0,g=0;for(let y=0,m=o.length;y<m;y++){l.isInterleavedBufferAttribute?p=o[y]*l.data.stride+l.offset:p=o[y]*h;for(let f=0;f<h;f++)c[g++]=u[p++]}return new bi(c,h,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new la,i=this.index.array,a=this.attributes;for(const l in a){const o=a[l],u=e(o,i);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const o=[],u=s[l];for(let h=0,d=u.length;h<d;h++){const c=u[h],p=e(c,i);o.push(p)}n.morphAttributes[l]=o}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let l=0,o=r.length;l<o;l++){const u=r[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const u in o)o[u]!==void 0&&(e[u]=o[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const o in i){const u=i[o];e.data.attributes[o]=u.toJSON(e.data)}const a={};let s=!1;for(const o in this.morphAttributes){const u=this.morphAttributes[o],h=[];for(let d=0,c=u.length;d<c;d++){const p=u[d];h.push(p.toJSON(e.data))}h.length>0&&(a[o]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const u in a){const h=a[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let c=0,p=d.length;c<p;c++)h.push(d[c].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let u=0,h=r.length;u<h;u++){const d=r[u];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Db=0;class _c extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Jl(),this.name="",this.type="Material",this.blending=dr,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=kh,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==ka&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xh&&(i.blendSrc=this.blendSrc),this.blendDst!==kh&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const l in s){const o=s[l];delete o.metadata,r.push(o)}return r}if(n){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new tt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bi=new q,Nf=new q,Do=new q,ga=new q,Of=new q,Uo=new q,Pf=new q;class Ub{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,n),Bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Nf.copy(e).add(n).multiplyScalar(.5),Do.copy(n).sub(e).normalize(),ga.copy(this.origin).sub(Nf);const s=e.distanceTo(n)*.5,r=-this.direction.dot(Do),l=ga.dot(this.direction),o=-ga.dot(Do),u=ga.lengthSq(),h=Math.abs(1-r*r);let d,c,p,g;if(h>0)if(d=r*o-l,c=r*l-o,g=s*h,d>=0)if(c>=-g)if(c<=g){const y=1/h;d*=y,c*=y,p=d*(d+r*c+2*l)+c*(r*d+c+2*o)+u}else c=s,d=Math.max(0,-(r*c+l)),p=-d*d+c*(c+2*o)+u;else c=-s,d=Math.max(0,-(r*c+l)),p=-d*d+c*(c+2*o)+u;else c<=-g?(d=Math.max(0,-(-r*s+l)),c=d>0?-s:Math.min(Math.max(-s,-o),s),p=-d*d+c*(c+2*o)+u):c<=g?(d=0,c=Math.min(Math.max(-s,-o),s),p=c*(c+2*o)+u):(d=Math.max(0,-(r*s+l)),c=d>0?s:Math.min(Math.max(-s,-o),s),p=-d*d+c*(c+2*o)+u);else c=r>0?-s:s,d=Math.max(0,-(r*c+l)),p=-d*d+c*(c+2*o)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Nf).addScaledVector(Do,c),p}intersectSphere(e,n){Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),a=Bi.dot(Bi)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),l=i-r,o=i+r;return o<0?null:l<0?this.at(o,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,s,r,l,o;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,c=this.origin;return u>=0?(i=(e.min.x-c.x)*u,a=(e.max.x-c.x)*u):(i=(e.max.x-c.x)*u,a=(e.min.x-c.x)*u),h>=0?(s=(e.min.y-c.y)*h,r=(e.max.y-c.y)*h):(s=(e.max.y-c.y)*h,r=(e.min.y-c.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(l=(e.min.z-c.z)*d,o=(e.max.z-c.z)*d):(l=(e.max.z-c.z)*d,o=(e.min.z-c.z)*d),i>o||l>a)||((l>i||i!==i)&&(i=l),(o<a||a!==a)&&(a=o),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,n,i,a,s){Of.subVectors(n,e),Uo.subVectors(i,e),Pf.crossVectors(Of,Uo);let r=this.direction.dot(Pf),l;if(r>0){if(a)return null;l=1}else if(r<0)l=-1,r=-r;else return null;ga.subVectors(this.origin,e);const o=l*this.direction.dot(Uo.crossVectors(ga,Uo));if(o<0)return null;const u=l*this.direction.dot(Of.cross(ga));if(u<0||o+u>r)return null;const h=-l*ga.dot(Pf);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class NS extends _c{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=fS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rg=new Vt,Ja=new Ub,Lo=new qp,Cg=new q,No=new q,Oo=new q,Po=new q,Ff=new q,Fo=new q,wg=new q,Io=new q;class Ri extends Bn{constructor(e=new la,n=new NS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const l=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const l=this.morphTargetInfluences;if(s&&l){Fo.set(0,0,0);for(let o=0,u=s.length;o<u;o++){const h=l[o],d=s[o];h!==0&&(Ff.fromBufferAttribute(d,e),r?Fo.addScaledVector(Ff,h):Fo.addScaledVector(Ff.sub(n),h))}n.add(Fo)}return n}raycast(e,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(s),Ja.copy(e.ray).recast(e.near),!(Lo.containsPoint(Ja.origin)===!1&&(Ja.intersectSphere(Lo,Cg)===null||Ja.origin.distanceToSquared(Cg)>(e.far-e.near)**2))&&(Rg.copy(s).invert(),Ja.copy(e.ray).applyMatrix4(Rg),!(i.boundingBox!==null&&Ja.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ja)))}_computeIntersections(e,n,i){let a;const s=this.geometry,r=this.material,l=s.index,o=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,c=s.groups,p=s.drawRange;if(l!==null)if(Array.isArray(r))for(let g=0,y=c.length;g<y;g++){const m=c[g],f=r[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,b=M;_<b;_+=3){const T=l.getX(_),R=l.getX(_+1),v=l.getX(_+2);a=Bo(this,f,e,i,u,h,d,T,R,v),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const x=l.getX(m),M=l.getX(m+1),_=l.getX(m+2);a=Bo(this,r,e,i,u,h,d,x,M,_),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(o!==void 0)if(Array.isArray(r))for(let g=0,y=c.length;g<y;g++){const m=c[g],f=r[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,b=M;_<b;_+=3){const T=_,R=_+1,v=_+2;a=Bo(this,f,e,i,u,h,d,T,R,v),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const x=m,M=m+1,_=m+2;a=Bo(this,r,e,i,u,h,d,x,M,_),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function Lb(t,e,n,i,a,s,r,l){let o;if(e.side===Tn?o=i.intersectTriangle(r,s,a,!0,l):o=i.intersectTriangle(a,s,r,e.side===ka,l),o===null)return null;Io.copy(l),Io.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Io);return u<n.near||u>n.far?null:{distance:u,point:Io.clone(),object:t}}function Bo(t,e,n,i,a,s,r,l,o,u){t.getVertexPosition(l,No),t.getVertexPosition(o,Oo),t.getVertexPosition(u,Po);const h=Lb(t,e,n,i,No,Oo,Po,wg);if(h){const d=new q;li.getBarycoord(wg,No,Oo,Po,d),a&&(h.uv=li.getInterpolatedAttribute(a,l,o,u,d,new tt)),s&&(h.uv1=li.getInterpolatedAttribute(s,l,o,u,d,new tt)),r&&(h.normal=li.getInterpolatedAttribute(r,l,o,u,d,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const c={a:l,b:o,c:u,normal:new q,materialIndex:0};li.getNormal(No,Oo,Po,c.normal),h.face=c,h.barycoord=d}return h}class Nb extends mn{constructor(e=null,n=1,i=1,a,s,r,l,o,u=sn,h=sn,d,c){super(null,r,l,o,u,h,a,s,d,c),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const If=new q,Ob=new q,Pb=new Pe;class is{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=If.subVectors(i,n).cross(Ob.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(If),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Pb.getNormalMatrix(e),a=this.coplanarPoint(If).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $a=new qp,Fb=new tt(.5,.5),zo=new q;class OS{constructor(e=new is,n=new is,i=new is,a=new is,s=new is,r=new is){this.planes=[e,n,i,a,s,r]}set(e,n,i,a,s,r){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(a),l[4].copy(s),l[5].copy(r),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi,i=!1){const a=this.planes,s=e.elements,r=s[0],l=s[1],o=s[2],u=s[3],h=s[4],d=s[5],c=s[6],p=s[7],g=s[8],y=s[9],m=s[10],f=s[11],x=s[12],M=s[13],_=s[14],b=s[15];if(a[0].setComponents(u-r,p-h,f-g,b-x).normalize(),a[1].setComponents(u+r,p+h,f+g,b+x).normalize(),a[2].setComponents(u+l,p+d,f+y,b+M).normalize(),a[3].setComponents(u-l,p-d,f-y,b-M).normalize(),i)a[4].setComponents(o,c,m,_).normalize(),a[5].setComponents(u-o,p-c,f-m,b-_).normalize();else if(a[4].setComponents(u-o,p-c,f-m,b-_).normalize(),n===Mi)a[5].setComponents(u+o,p+c,f+m,b+_).normalize();else if(n===Zu)a[5].setComponents(o,c,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$a.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($a)}intersectsSprite(e){$a.center.set(0,0,0);const n=Fb.distanceTo(e.center);return $a.radius=.7071067811865476+n,$a.applyMatrix4(e.matrixWorld),this.intersectsSphere($a)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(zo.x=a.normal.x>0?e.max.x:e.min.x,zo.y=a.normal.y>0?e.max.y:e.min.y,zo.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class PS extends mn{constructor(e=[],n=vs,i,a,s,r,l,o,u,h){super(e,n,i,a,s,r,l,o,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wr extends mn{constructor(e,n,i=Ai,a,s,r,l=sn,o=sn,u,h=sa,d=1){if(h!==sa&&h!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:n,depth:d};super(c,a,s,r,l,o,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ib extends wr{constructor(e,n=Ai,i=vs,a,s,r=sn,l=sn,o,u=sa){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,a,s,r,l,o,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class FS extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jl extends la{constructor(e=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const l=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const o=[],u=[],h=[],d=[];let c=0,p=0;g("z","y","x",-1,-1,i,n,e,r,s,0),g("z","y","x",1,-1,i,n,-e,r,s,1),g("x","z","y",1,1,e,i,n,a,r,2),g("x","z","y",1,-1,e,i,-n,a,r,3),g("x","y","z",1,-1,e,n,i,a,s,4),g("x","y","z",-1,-1,e,n,-i,a,s,5),this.setIndex(o),this.setAttribute("position",new $i(u,3)),this.setAttribute("normal",new $i(h,3)),this.setAttribute("uv",new $i(d,2));function g(y,m,f,x,M,_,b,T,R,v,A){const w=_/R,D=b/v,L=_/2,N=b/2,H=T/2,F=R+1,O=v+1;let U=0,G=0;const k=new q;for(let ee=0;ee<O;ee++){const se=ee*D-N;for(let fe=0;fe<F;fe++){const Ve=fe*w-L;k[y]=Ve*x,k[m]=se*M,k[f]=H,u.push(k.x,k.y,k.z),k[y]=0,k[m]=0,k[f]=T>0?1:-1,h.push(k.x,k.y,k.z),d.push(fe/R),d.push(1-ee/v),U+=1}}for(let ee=0;ee<v;ee++)for(let se=0;se<R;se++){const fe=c+se+F*ee,Ve=c+se+F*(ee+1),Ye=c+(se+1)+F*(ee+1),Be=c+(se+1)+F*ee;o.push(fe,Ve,Be),o.push(Ve,Ye,Be),G+=6}l.addGroup(p,G,A),p+=G,c+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class eo extends la{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const s=e/2,r=n/2,l=Math.floor(i),o=Math.floor(a),u=l+1,h=o+1,d=e/l,c=n/o,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){const x=f*c-r;for(let M=0;M<u;M++){const _=M*d-s;g.push(_,-x,0),y.push(0,0,1),m.push(M/l),m.push(1-f/o)}}for(let f=0;f<o;f++)for(let x=0;x<l;x++){const M=x+u*f,_=x+u*(f+1),b=x+1+u*(f+1),T=x+1+u*f;p.push(M,_,T),p.push(_,b,T)}this.setIndex(p),this.setAttribute("position",new $i(g,3)),this.setAttribute("normal",new $i(y,3)),this.setAttribute("uv",new $i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Dr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(Dg(a))a.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(Dg(a[0])){const s=[];for(let r=0,l=a.length;r<l;r++)s[r]=a[r].clone();e[n][i]=s}else e[n][i]=a.slice();else e[n][i]=a}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=Dr(t[n]);for(const a in i)e[a]=i[a]}return e}function Dg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Bb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function IS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const zb={clone:Dr,merge:hn};var Hb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends _c{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hb,this.fragmentShader=Gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=Bb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new nt().setHex(a.value);break;case"v2":this.uniforms[i].value=new tt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new q().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Ut().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Pe().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Vt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vb extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xb extends _c{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kb extends _c{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ho=new q,Go=new zr,pi=new q;class BS extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ho,Go,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,pi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ho,Go,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _a=new q,Ug=new tt,Lg=new tt;class ri extends BS{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(pf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){_a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_a.x,_a.y).multiplyScalar(-e/_a.z),_a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_a.x,_a.y).multiplyScalar(-e/_a.z)}getViewSize(e,n){return this.getViewBounds(e,Ug,Lg),n.subVectors(Lg,Ug)}setViewOffset(e,n,i,a,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pf*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const o=r.fullWidth,u=r.fullHeight;s+=r.offsetX*a/o,n-=r.offsetY*i/u,a*=r.width/o,i*=r.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Yp extends BS{constructor(e=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,l=a+n,o=a-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,l-=h*this.view.offsetY,o=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vs=-90,Xs=1;class Wb extends Bn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ri(Vs,Xs,e,n);a.layers=this.layers,this.add(a);const s=new ri(Vs,Xs,e,n);s.layers=this.layers,this.add(s);const r=new ri(Vs,Xs,e,n);r.layers=this.layers,this.add(r);const l=new ri(Vs,Xs,e,n);l.layers=this.layers,this.add(l);const o=new ri(Vs,Xs,e,n);o.layers=this.layers,this.add(o);const u=new ri(Vs,Xs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,l,o]=n;for(const u of n)this.remove(u);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Zu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,l,o,u,h]=this.children,d=e.getRenderTarget(),c=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,c,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class qb extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $p=class $p{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=a,this}};$p.prototype.isMatrix2=!0;let Ng=$p;function Og(t,e,n,i){const a=Yb(i);switch(n){case TS:return t*e;case AS:return t*e/a.components*a.byteLength;case Hp:return t*e/a.components*a.byteLength;case xs:return t*e*2/a.components*a.byteLength;case Gp:return t*e*2/a.components*a.byteLength;case bS:return t*e*3/a.components*a.byteLength;case oi:return t*e*4/a.components*a.byteLength;case Vp:return t*e*4/a.components*a.byteLength;case ru:case lu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ou:case uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case td:case id:return Math.max(t,16)*Math.max(e,8)/4;case ed:case nd:return Math.max(t,8)*Math.max(e,8)/2;case ad:case sd:case ld:case od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rd:case ku:case ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case pd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case md:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case gd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _d:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case xd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Md:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Td:case bd:case Ad:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Rd:case Cd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wu:case wd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Yb(t){switch(t){case Jn:case SS:return{byteLength:1,components:1};case Il:case MS:case aa:return{byteLength:2,components:1};case Bp:case zp:return{byteLength:2,components:4};case Ai:case Ip:case Si:return{byteLength:4,components:1};case yS:case ES:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zS(){let t=null,e=!1,n=null,i=null;function a(s,r){n(s,r),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Zb(t){const e=new WeakMap;function n(l,o){const u=l.array,h=l.usage,d=u.byteLength,c=t.createBuffer();t.bindBuffer(o,c),t.bufferData(o,u,h),l.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,o,u){const h=o.array,d=o.updateRanges;if(t.bindBuffer(u,l),d.length===0)t.bufferSubData(u,0,h);else{d.sort((p,g)=>p.start-g.start);let c=0;for(let p=1;p<d.length;p++){const g=d[c],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++c,d[c]=y)}d.length=c+1;for(let p=0,g=d.length;p<g;p++){const y=d[p];t.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}o.clearUpdateRanges()}o.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=e.get(l);o&&(t.deleteBuffer(o.buffer),e.delete(l))}function r(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,n(l,o));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,o),u.version=l.version}}return{get:a,remove:s,update:r}}var Kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qb=`#ifdef USE_ALPHAHASH
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
#endif`,Jb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tA=`#ifdef USE_AOMAP
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
#endif`,nA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,aA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oA=`#ifdef USE_IRIDESCENCE
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
#endif`,uA=`#ifdef USE_BUMPMAP
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
#endif`,cA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,fA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_A=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vA=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,xA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,SA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,MA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bA="gl_FragColor = linearToOutputTexel( gl_FragColor );",AA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,CA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wA=`#ifdef USE_ENVMAP
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
#endif`,DA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FA=`#ifdef USE_GRADIENTMAP
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
}`,IA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HA=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,GA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,VA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,QA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$A=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s2=`#if defined( USE_POINTS_UV )
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
#endif`,r2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,h2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,v2=`#ifdef USE_NORMALMAP
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
#endif`,x2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,b2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,L2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,O2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B2=`#ifdef USE_SKINNING
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
#endif`,z2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V2=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X2=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k2=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q2=`uniform sampler2D t2D;
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
}`,J2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,n3=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,a3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,s3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l3=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u3=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,c3=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,f3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,h3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,d3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,p3=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,m3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,g3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,v3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,x3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,S3=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,M3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,y3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,E3=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,T3=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,b3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,A3=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,R3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,C3=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Xe={alphahash_fragment:Kb,alphahash_pars_fragment:Qb,alphamap_fragment:Jb,alphamap_pars_fragment:$b,alphatest_fragment:jb,alphatest_pars_fragment:eA,aomap_fragment:tA,aomap_pars_fragment:nA,batching_pars_vertex:iA,batching_vertex:aA,begin_vertex:sA,beginnormal_vertex:rA,bsdfs:lA,iridescence_fragment:oA,bumpmap_pars_fragment:uA,clipping_planes_fragment:cA,clipping_planes_pars_fragment:fA,clipping_planes_pars_vertex:hA,clipping_planes_vertex:dA,color_fragment:pA,color_pars_fragment:mA,color_pars_vertex:gA,color_vertex:_A,common:vA,cube_uv_reflection_fragment:xA,defaultnormal_vertex:SA,displacementmap_pars_vertex:MA,displacementmap_vertex:yA,emissivemap_fragment:EA,emissivemap_pars_fragment:TA,colorspace_fragment:bA,colorspace_pars_fragment:AA,envmap_fragment:RA,envmap_common_pars_fragment:CA,envmap_pars_fragment:wA,envmap_pars_vertex:DA,envmap_physical_pars_fragment:GA,envmap_vertex:UA,fog_vertex:LA,fog_pars_vertex:NA,fog_fragment:OA,fog_pars_fragment:PA,gradientmap_pars_fragment:FA,lightmap_pars_fragment:IA,lights_lambert_fragment:BA,lights_lambert_pars_fragment:zA,lights_pars_begin:HA,lights_toon_fragment:VA,lights_toon_pars_fragment:XA,lights_phong_fragment:kA,lights_phong_pars_fragment:WA,lights_physical_fragment:qA,lights_physical_pars_fragment:YA,lights_fragment_begin:ZA,lights_fragment_maps:KA,lights_fragment_end:QA,lightprobes_pars_fragment:JA,logdepthbuf_fragment:$A,logdepthbuf_pars_fragment:jA,logdepthbuf_pars_vertex:e2,logdepthbuf_vertex:t2,map_fragment:n2,map_pars_fragment:i2,map_particle_fragment:a2,map_particle_pars_fragment:s2,metalnessmap_fragment:r2,metalnessmap_pars_fragment:l2,morphinstance_vertex:o2,morphcolor_vertex:u2,morphnormal_vertex:c2,morphtarget_pars_vertex:f2,morphtarget_vertex:h2,normal_fragment_begin:d2,normal_fragment_maps:p2,normal_pars_fragment:m2,normal_pars_vertex:g2,normal_vertex:_2,normalmap_pars_fragment:v2,clearcoat_normal_fragment_begin:x2,clearcoat_normal_fragment_maps:S2,clearcoat_pars_fragment:M2,iridescence_pars_fragment:y2,opaque_fragment:E2,packing:T2,premultiplied_alpha_fragment:b2,project_vertex:A2,dithering_fragment:R2,dithering_pars_fragment:C2,roughnessmap_fragment:w2,roughnessmap_pars_fragment:D2,shadowmap_pars_fragment:U2,shadowmap_pars_vertex:L2,shadowmap_vertex:N2,shadowmask_pars_fragment:O2,skinbase_vertex:P2,skinning_pars_vertex:F2,skinning_vertex:I2,skinnormal_vertex:B2,specularmap_fragment:z2,specularmap_pars_fragment:H2,tonemapping_fragment:G2,tonemapping_pars_fragment:V2,transmission_fragment:X2,transmission_pars_fragment:k2,uv_pars_fragment:W2,uv_pars_vertex:q2,uv_vertex:Y2,worldpos_vertex:Z2,background_vert:K2,background_frag:Q2,backgroundCube_vert:J2,backgroundCube_frag:$2,cube_vert:j2,cube_frag:e3,depth_vert:t3,depth_frag:n3,distance_vert:i3,distance_frag:a3,equirect_vert:s3,equirect_frag:r3,linedashed_vert:l3,linedashed_frag:o3,meshbasic_vert:u3,meshbasic_frag:c3,meshlambert_vert:f3,meshlambert_frag:h3,meshmatcap_vert:d3,meshmatcap_frag:p3,meshnormal_vert:m3,meshnormal_frag:g3,meshphong_vert:_3,meshphong_frag:v3,meshphysical_vert:x3,meshphysical_frag:S3,meshtoon_vert:M3,meshtoon_frag:y3,points_vert:E3,points_frag:T3,shadow_vert:b3,shadow_frag:A3,sprite_vert:R3,sprite_frag:C3},de={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},gi={basic:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:hn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:hn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new nt(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:hn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:hn([de.points,de.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:hn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:hn([de.common,de.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:hn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:hn([de.sprite,de.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:hn([de.common,de.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:hn([de.lights,de.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};gi.physical={uniforms:hn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Vo={r:0,b:0,g:0},w3=new Vt,HS=new Pe;HS.set(-1,0,0,0,1,0,0,0,1);function D3(t,e,n,i,a,s){const r=new nt(0);let l=a===!0?0:1,o,u,h=null,d=0,c=null;function p(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const _=x.backgroundBlurriness>0;M=e.get(M,_)}return M}function g(x){let M=!1;const _=p(x);_===null?m(r,l):_&&_.isColor&&(m(_,1),M=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(x,M){const _=p(M);_&&(_.isCubeTexture||_.mapping===gc)?(u===void 0&&(u=new Ri(new jl(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Dr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(w3.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(HS),u.material.toneMapped=Ke.getTransfer(_.colorSpace)!==lt,(h!==_||d!==_.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,c=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new Ri(new eo(2,2),new ui({name:"BackgroundMaterial",uniforms:Dr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,o.material.toneMapped=Ke.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||c!==t.toneMapping)&&(o.material.needsUpdate=!0,h=_,d=_.version,c=t.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function m(x,M){x.getRGB(Vo,IS(t)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,M,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,M=1){r.set(x),l=M,m(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(r,l)},render:g,addToRenderList:y,dispose:f}}function U3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=c(null);let s=a,r=!1;function l(D,L,N,H,F){let O=!1;const U=d(D,H,N,L);s!==U&&(s=U,u(s.object)),O=p(D,H,N,F),O&&g(D,H,N,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(O||r)&&(r=!1,_(D,L,N,H),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function o(){return t.createVertexArray()}function u(D){return t.bindVertexArray(D)}function h(D){return t.deleteVertexArray(D)}function d(D,L,N,H){const F=H.wireframe===!0;let O=i[L.id];O===void 0&&(O={},i[L.id]=O);const U=D.isInstancedMesh===!0?D.id:0;let G=O[U];G===void 0&&(G={},O[U]=G);let k=G[N.id];k===void 0&&(k={},G[N.id]=k);let ee=k[F];return ee===void 0&&(ee=c(o()),k[F]=ee),ee}function c(D){const L=[],N=[],H=[];for(let F=0;F<n;F++)L[F]=0,N[F]=0,H[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:H,object:D,attributes:{},index:null}}function p(D,L,N,H){const F=s.attributes,O=L.attributes;let U=0;const G=N.getAttributes();for(const k in G)if(G[k].location>=0){const se=F[k];let fe=O[k];if(fe===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),se===void 0||se.attribute!==fe||fe&&se.data!==fe.data)return!0;U++}return s.attributesNum!==U||s.index!==H}function g(D,L,N,H){const F={},O=L.attributes;let U=0;const G=N.getAttributes();for(const k in G)if(G[k].location>=0){let se=O[k];se===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(se=D.instanceColor));const fe={};fe.attribute=se,se&&se.data&&(fe.data=se.data),F[k]=fe,U++}s.attributes=F,s.attributesNum=U,s.index=H}function y(){const D=s.newAttributes;for(let L=0,N=D.length;L<N;L++)D[L]=0}function m(D){f(D,0)}function f(D,L){const N=s.newAttributes,H=s.enabledAttributes,F=s.attributeDivisors;N[D]=1,H[D]===0&&(t.enableVertexAttribArray(D),H[D]=1),F[D]!==L&&(t.vertexAttribDivisor(D,L),F[D]=L)}function x(){const D=s.newAttributes,L=s.enabledAttributes;for(let N=0,H=L.length;N<H;N++)L[N]!==D[N]&&(t.disableVertexAttribArray(N),L[N]=0)}function M(D,L,N,H,F,O,U){U===!0?t.vertexAttribIPointer(D,L,N,F,O):t.vertexAttribPointer(D,L,N,H,F,O)}function _(D,L,N,H){y();const F=H.attributes,O=N.getAttributes(),U=L.defaultAttributeValues;for(const G in O){const k=O[G];if(k.location>=0){let ee=F[G];if(ee===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const se=ee.normalized,fe=ee.itemSize,Ve=e.get(ee);if(Ve===void 0)continue;const Ye=Ve.buffer,Be=Ve.type,Z=Ve.bytesPerElement,ie=Be===t.INT||Be===t.UNSIGNED_INT||ee.gpuType===Ip;if(ee.isInterleavedBufferAttribute){const ne=ee.data,Ce=ne.stride,De=ee.offset;if(ne.isInstancedInterleavedBuffer){for(let ye=0;ye<k.locationSize;ye++)f(k.location+ye,ne.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ye=0;ye<k.locationSize;ye++)m(k.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let ye=0;ye<k.locationSize;ye++)M(k.location+ye,fe/k.locationSize,Be,se,Ce*Z,(De+fe/k.locationSize*ye)*Z,ie)}else{if(ee.isInstancedBufferAttribute){for(let ne=0;ne<k.locationSize;ne++)f(k.location+ne,ee.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ne=0;ne<k.locationSize;ne++)m(k.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let ne=0;ne<k.locationSize;ne++)M(k.location+ne,fe/k.locationSize,Be,se,fe*Z,fe/k.locationSize*ne*Z,ie)}}else if(U!==void 0){const se=U[G];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(k.location,se);break;case 3:t.vertexAttrib3fv(k.location,se);break;case 4:t.vertexAttrib4fv(k.location,se);break;default:t.vertexAttrib1fv(k.location,se)}}}}x()}function b(){A();for(const D in i){const L=i[D];for(const N in L){const H=L[N];for(const F in H){const O=H[F];for(const U in O)h(O[U].object),delete O[U];delete H[F]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const L=i[D.id];for(const N in L){const H=L[N];for(const F in H){const O=H[F];for(const U in O)h(O[U].object),delete O[U];delete H[F]}}delete i[D.id]}function R(D){for(const L in i){const N=i[L];for(const H in N){const F=N[H];if(F[D.id]===void 0)continue;const O=F[D.id];for(const U in O)h(O[U].object),delete O[U];delete F[D.id]}}}function v(D){for(const L in i){const N=i[L],H=D.isInstancedMesh===!0?D.id:0,F=N[H];if(F!==void 0){for(const O in F){const U=F[O];for(const G in U)h(U[G].object),delete U[G];delete F[O]}delete N[H],Object.keys(N).length===0&&delete i[L]}}}function A(){w(),r=!0,s!==a&&(s=a,u(s.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:l,reset:A,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function L3(t,e,n){let i;function a(o){i=o}function s(o,u){t.drawArrays(i,o,u),n.update(u,i,1)}function r(o,u,h){h!==0&&(t.drawArraysInstanced(i,o,u,h),n.update(u,i,h))}function l(o,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,u,0,h);let c=0;for(let p=0;p<h;p++)c+=u[p];n.update(c,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=l}function N3(t,e,n,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==oi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const v=R===aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Jn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Si&&!v)}function o(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=o(u);h!==u&&(Oe("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=n.logarithmicDepthBuffer===!0,c=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&c===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:r,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,maxSamples:b,samples:T}}function O3(t){const e=this;let n=null,i=0,a=!1,s=!1;const r=new is,l=new Pe,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){const p=d.length!==0||c||i!==0||a;return a=c,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,c){n=h(d,c,0)},this.setState=function(d,c,p){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!a||g===null||g.length===0||s&&!m)s?h(null):u();else{const x=s?0:i,M=x*4;let _=f.clippingState||null;o.value=_,_=h(g,c,M,p);for(let b=0;b!==M;++b)_[b]=n[b];f.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){o.value!==n&&(o.value=n,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,c,p,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=o.value,g!==!0||m===null){const f=p+y*4,x=c.matrixWorldInverse;l.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,_=p;M!==y;++M,_+=4)r.copy(d[M]).applyMatrix4(x,l),r.normal.toArray(m,_),m[_+3]=r.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Da=4,Pg=[.125,.215,.35,.446,.526,.582],ss=20,P3=256,jr=new Yp,Fg=new nt;let Bf=null,zf=0,Hf=0,Gf=!1;const F3=new q;class Ig{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,s={}){const{size:r=256,position:l=F3}=s;Bf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,a,o,l),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bf,zf,Hf),this._renderer.xr.enabled=Gf,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:aa,format:oi,colorSpace:qu,depthBuffer:!1},a=Bg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=I3(s)),this._blurMaterial=z3(s,e,n),this._ggxMaterial=B3(s,e,n)}return a}_compileMaterial(e){const n=new Ri(new la,e);this._renderer.compile(n,jr)}_sceneToCubeUV(e,n,i,a,s){const o=new ri(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,c=d.autoClear,p=d.toneMapping;d.getClearColor(Fg),d.toneMapping=Ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new jl,new NS({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let f=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,f=!0):(m.color.copy(Fg),f=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(o.up.set(0,u[M],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+h[M],s.y,s.z)):_===1?(o.up.set(0,0,u[M]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+h[M],s.z)):(o.up.set(0,u[M],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+h[M]));const b=this._cubeSize;ks(a,_*b,M>2?b:0,b,b),d.setRenderTarget(a),f&&d.render(y,o),d.render(e,o)}d.toneMapping=p,d.autoClear=c,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===vs||e.mapping===Cr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zg());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const l=s.uniforms;l.envMap.value=e;const o=this._cubeSize;ks(n,0,0,3*o,2*o),i.setRenderTarget(n),i.render(r,jr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,l=this._lodMeshes[i];l.material=r;const o=r.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-h*h),c=0+u*1.25,p=d*c,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Da?i-g+Da:0),f=4*(this._cubeSize-y);o.envMap.value=e.texture,o.roughness.value=p,o.mipInt.value=g-n,ks(s,m,f,3*y,2*y),a.setRenderTarget(s),a.render(l,jr),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=g-i,ks(e,m,f,3*y,2*y),a.setRenderTarget(e),a.render(l,jr)}_blur(e,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,n,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,n,i,a,s,r,l){const o=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[a];d.material=u;const c=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ss-1),y=s/g,m=isFinite(s)?1+Math.floor(h*y):ss;m>ss&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);const f=[];let x=0;for(let R=0;R<ss;++R){const v=R/y,A=Math.exp(-v*v/2);f.push(A),R===0?x+=A:R<m&&(x+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=f,c.latitudinal.value=r==="latitudinal",l&&(c.poleAxis.value=l);const{_lodMax:M}=this;c.dTheta.value=g,c.mipInt.value=M-i;const _=this._sizeLods[a],b=3*_*(a>M-Da?a-M+Da:0),T=4*(this._cubeSize-_);ks(n,b,T,3*_,2*_),o.setRenderTarget(n),o.render(d,jr)}}function I3(t){const e=[],n=[],i=[];let a=t;const s=t-Da+1+Pg.length;for(let r=0;r<s;r++){const l=Math.pow(2,a);e.push(l);let o=1/l;r>t-Da?o=Pg[r-t+Da-1]:r===0&&(o=0),n.push(o);const u=1/(l-2),h=-u,d=1+u,c=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,y=3,m=2,f=1,x=new Float32Array(y*g*p),M=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,v=T>2?0:-1,A=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];x.set(A,y*g*T),M.set(c,m*g*T);const w=[T,T,T,T,T,T];_.set(w,f*g*T)}const b=new la;b.setAttribute("position",new bi(x,y)),b.setAttribute("uv",new bi(M,m)),b.setAttribute("faceIndex",new bi(_,f)),i.push(new Ri(b,null)),a>Da&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Bg(t,e,n){const i=new Ti(t,e,n);return i.texture.mapping=gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function B3(t,e,n){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function z3(t,e,n){const i=new Float32Array(ss),a=new q(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function zg(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Hg(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}class GS extends Ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new PS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new jl(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Qi});s.uniforms.tEquirect.value=n;const r=new Ri(a,s),l=n.minFilter;return n.minFilter===rs&&(n.minFilter=fn),new Wb(1,10,this).update(e,r),n.minFilter=l,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,a);e.setRenderTarget(s)}}function H3(t){let e=new WeakMap,n=new WeakMap,i=null;function a(c,p=!1){return c==null?null:p?r(c):s(c)}function s(c){if(c&&c.isTexture){const p=c.mapping;if(p===ff||p===hf)if(e.has(c)){const g=e.get(c).texture;return l(g,c.mapping)}else{const g=c.image;if(g&&g.height>0){const y=new GS(g.height);return y.fromEquirectangularTexture(t,c),e.set(c,y),c.addEventListener("dispose",u),l(y.texture,c.mapping)}else return null}}return c}function r(c){if(c&&c.isTexture){const p=c.mapping,g=p===ff||p===hf,y=p===vs||p===Cr;if(g||y){let m=n.get(c);const f=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new Ig(t)),m=g?i.fromEquirectangular(c,m):i.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,n.set(c,m),m.texture;if(m!==void 0)return m.texture;{const x=c.image;return g&&x&&x.height>0||y&&x&&o(x)?(i===null&&(i=new Ig(t)),m=g?i.fromEquirectangular(c):i.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,n.set(c,m),c.addEventListener("dispose",h),m.texture):null}}}return c}function l(c,p){return p===ff?c.mapping=vs:p===hf&&(c.mapping=Cr),c}function o(c){let p=0;const g=6;for(let y=0;y<g;y++)c[y]!==void 0&&p++;return p===g}function u(c){const p=c.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(c){const p=c.target;p.removeEventListener("dispose",h);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:d}}function G3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&pr("WebGLRenderer: "+i+" extension not supported."),a}}}function V3(t,e,n,i){const a={},s=new WeakMap;function r(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const g in c.attributes)e.remove(c.attributes[g]);c.removeEventListener("dispose",r),delete a[c.id];const p=s.get(c);p&&(e.remove(p),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function l(d,c){return a[c.id]===!0||(c.addEventListener("dispose",r),a[c.id]=!0,n.memory.geometries++),c}function o(d){const c=d.attributes;for(const p in c)e.update(c[p],t.ARRAY_BUFFER)}function u(d){const c=[],p=d.index,g=d.attributes.position;let y=0;if(g===void 0)return;if(p!==null){const x=p.array;y=p.version;for(let M=0,_=x.length;M<_;M+=3){const b=x[M+0],T=x[M+1],R=x[M+2];c.push(b,T,T,R,R,b)}}else{const x=g.array;y=g.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const b=M+0,T=M+1,R=M+2;c.push(b,T,T,R,R,b)}}const m=new(g.count>=65535?LS:US)(c,1);m.version=y;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const c=s.get(d);if(c){const p=d.index;p!==null&&c.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:l,update:o,getWireframeAttribute:h}}function X3(t,e,n){let i;function a(d){i=d}let s,r;function l(d){s=d.type,r=d.bytesPerElement}function o(d,c){t.drawElements(i,c,s,d*r),n.update(c,i,1)}function u(d,c,p){p!==0&&(t.drawElementsInstanced(i,c,s,d*r,p),n.update(c,i,p))}function h(d,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,s,d,0,p);let y=0;for(let m=0;m<p;m++)y+=c[m];n.update(y,i,1)}this.setMode=a,this.setIndex=l,this.render=o,this.renderInstances=u,this.renderMultiDraw=h}function k3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,l){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:et("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function W3(t,e,n){const i=new WeakMap,a=new Ut;function s(r,l,o){const u=r.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0;let c=i.get(l);if(c===void 0||c.count!==d){let w=function(){v.dispose(),i.delete(l),l.removeEventListener("dispose",w)};var p=w;c!==void 0&&c.texture.dispose();const g=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let _=0;g===!0&&(_=1),y===!0&&(_=2),m===!0&&(_=3);let b=l.attributes.position.count*_,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*T*4*d),v=new CS(R,b,T,d);v.type=Si,v.needsUpdate=!0;const A=_*4;for(let D=0;D<d;D++){const L=f[D],N=x[D],H=M[D],F=b*T*4*D;for(let O=0;O<L.count;O++){const U=O*A;g===!0&&(a.fromBufferAttribute(L,O),R[F+U+0]=a.x,R[F+U+1]=a.y,R[F+U+2]=a.z,R[F+U+3]=0),y===!0&&(a.fromBufferAttribute(N,O),R[F+U+4]=a.x,R[F+U+5]=a.y,R[F+U+6]=a.z,R[F+U+7]=0),m===!0&&(a.fromBufferAttribute(H,O),R[F+U+8]=a.x,R[F+U+9]=a.y,R[F+U+10]=a.z,R[F+U+11]=H.itemSize===4?a.w:1)}}c={count:d,texture:v,size:new tt(b,T)},i.set(l,c),l.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const y=l.morphTargetsRelative?1:1-g;o.getUniforms().setValue(t,"morphTargetBaseInfluence",y),o.getUniforms().setValue(t,"morphTargetInfluences",u)}o.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),o.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function q3(t,e,n,i,a){let s=new WeakMap;function r(u){const h=a.render.frame,d=u.geometry,c=e.get(u,d);if(s.get(c)!==h&&(e.update(c),s.set(c,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return c}function l(){s=new WeakMap}function o(u){const h=u.target;h.removeEventListener("dispose",o),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:l}}const Y3={[hS]:"LINEAR_TONE_MAPPING",[dS]:"REINHARD_TONE_MAPPING",[pS]:"CINEON_TONE_MAPPING",[mS]:"ACES_FILMIC_TONE_MAPPING",[_S]:"AGX_TONE_MAPPING",[vS]:"NEUTRAL_TONE_MAPPING",[gS]:"CUSTOM_TONE_MAPPING"};function Z3(t,e,n,i,a,s){const r=new Ti(e,n,{type:t,depthBuffer:a,stencilBuffer:s,samples:i?4:0,depthTexture:a?new wr(e,n):void 0}),l=new Ti(e,n,{type:aa,depthBuffer:!1,stencilBuffer:!1}),o=new la;o.setAttribute("position",new $i([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new $i([0,2,0,0,2,0],2));const u=new Vb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ri(o,u),d=new Yp(-1,1,1,-1,0,1);let c=null,p=null,g=!1,y,m=null,f=[],x=!1;this.setSize=function(M,_){r.setSize(M,_),l.setSize(M,_);for(let b=0;b<f.length;b++){const T=f[b];T.setSize&&T.setSize(M,_)}},this.setEffects=function(M){f=M,x=f.length>0&&f[0].isRenderPass===!0;const _=r.width,b=r.height;for(let T=0;T<f.length;T++){const R=f[T];R.setSize&&R.setSize(_,b)}},this.begin=function(M,_){if(g||M.toneMapping===Ei&&f.length===0)return!1;if(m=_,_!==null){const b=_.width,T=_.height;(r.width!==b||r.height!==T)&&this.setSize(b,T)}return x===!1&&M.setRenderTarget(r),y=M.toneMapping,M.toneMapping=Ei,!0},this.hasRenderPass=function(){return x},this.end=function(M,_){M.toneMapping=y,g=!0;let b=r,T=l;for(let R=0;R<f.length;R++){const v=f[R];if(v.enabled!==!1&&(v.render(M,T,b,_),v.needsSwap!==!1)){const A=b;b=T,T=A}}if(c!==M.outputColorSpace||p!==M.toneMapping){c=M.outputColorSpace,p=M.toneMapping,u.defines={},Ke.getTransfer(c)===lt&&(u.defines.SRGB_TRANSFER="");const R=Y3[p];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(m),M.render(h,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),l.dispose(),o.dispose(),u.dispose()}}const VS=new mn,Ud=new wr(1,1),XS=new CS,kS=new vb,WS=new PS,Gg=[],Vg=[],Xg=new Float32Array(16),kg=new Float32Array(9),Wg=new Float32Array(4);function Hr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let s=Gg[a];if(s===void 0&&(s=new Float32Array(a),Gg[a]=s),e!==0){i.toArray(s,0);for(let r=1,l=0;r!==e;++r)l+=n,t[r].toArray(s,l)}return s}function qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xc(t,e){let n=Vg[e];n===void 0&&(n=new Int32Array(e),Vg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function K3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Q3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2fv(this.addr,e),Yt(n,e)}}function J3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;t.uniform3fv(this.addr,e),Yt(n,e)}}function $3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4fv(this.addr,e),Yt(n,e)}}function j3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if(qt(n,i))return;Wg.set(i),t.uniformMatrix2fv(this.addr,!1,Wg),Yt(n,i)}}function eR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if(qt(n,i))return;kg.set(i),t.uniformMatrix3fv(this.addr,!1,kg),Yt(n,i)}}function tR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if(qt(n,i))return;Xg.set(i),t.uniformMatrix4fv(this.addr,!1,Xg),Yt(n,i)}}function nR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2iv(this.addr,e),Yt(n,e)}}function aR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3iv(this.addr,e),Yt(n,e)}}function sR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4iv(this.addr,e),Yt(n,e)}}function rR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function lR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2uiv(this.addr,e),Yt(n,e)}}function oR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3uiv(this.addr,e),Yt(n,e)}}function uR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4uiv(this.addr,e),Yt(n,e)}}function cR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let s;this.type===t.SAMPLER_2D_SHADOW?(Ud.compareFunction=n.isReversedDepthBuffer()?kp:Xp,s=Ud):s=VS,n.setTexture2D(e||s,a)}function fR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||kS,a)}function hR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||WS,a)}function dR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||XS,a)}function pR(t){switch(t){case 5126:return K3;case 35664:return Q3;case 35665:return J3;case 35666:return $3;case 35674:return j3;case 35675:return eR;case 35676:return tR;case 5124:case 35670:return nR;case 35667:case 35671:return iR;case 35668:case 35672:return aR;case 35669:case 35673:return sR;case 5125:return rR;case 36294:return lR;case 36295:return oR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return cR;case 35679:case 36299:case 36307:return fR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return dR}}function mR(t,e){t.uniform1fv(this.addr,e)}function gR(t,e){const n=Hr(e,this.size,2);t.uniform2fv(this.addr,n)}function _R(t,e){const n=Hr(e,this.size,3);t.uniform3fv(this.addr,n)}function vR(t,e){const n=Hr(e,this.size,4);t.uniform4fv(this.addr,n)}function xR(t,e){const n=Hr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function SR(t,e){const n=Hr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function MR(t,e){const n=Hr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yR(t,e){t.uniform1iv(this.addr,e)}function ER(t,e){t.uniform2iv(this.addr,e)}function TR(t,e){t.uniform3iv(this.addr,e)}function bR(t,e){t.uniform4iv(this.addr,e)}function AR(t,e){t.uniform1uiv(this.addr,e)}function RR(t,e){t.uniform2uiv(this.addr,e)}function CR(t,e){t.uniform3uiv(this.addr,e)}function wR(t,e){t.uniform4uiv(this.addr,e)}function DR(t,e,n){const i=this.cache,a=e.length,s=xc(n,a);qt(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=Ud:r=VS;for(let l=0;l!==a;++l)n.setTexture2D(e[l]||r,s[l])}function UR(t,e,n){const i=this.cache,a=e.length,s=xc(n,a);qt(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let r=0;r!==a;++r)n.setTexture3D(e[r]||kS,s[r])}function LR(t,e,n){const i=this.cache,a=e.length,s=xc(n,a);qt(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let r=0;r!==a;++r)n.setTextureCube(e[r]||WS,s[r])}function NR(t,e,n){const i=this.cache,a=e.length,s=xc(n,a);qt(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(e[r]||XS,s[r])}function OR(t){switch(t){case 5126:return mR;case 35664:return gR;case 35665:return _R;case 35666:return vR;case 35674:return xR;case 35675:return SR;case 35676:return MR;case 5124:case 35670:return yR;case 35667:case 35671:return ER;case 35668:case 35672:return TR;case 35669:case 35673:return bR;case 5125:return AR;case 36294:return RR;case 36295:return CR;case 36296:return wR;case 35678:case 36198:case 36298:case 36306:case 35682:return DR;case 35679:case 36299:case 36307:return UR;case 35680:case 36300:case 36308:case 36293:return LR;case 36289:case 36303:case 36311:case 36292:return NR}}class PR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=pR(n.type)}}class FR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OR(n.type)}}class IR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const l=a[s];l.setValue(e,n[l.id],i)}}}const Vf=/(\w+)(\])?(\[|\.)?/g;function qg(t,e){t.seq.push(e),t.map[e.id]=e}function BR(t,e,n){const i=t.name,a=i.length;for(Vf.lastIndex=0;;){const s=Vf.exec(i),r=Vf.lastIndex;let l=s[1];const o=s[2]==="]",u=s[3];if(o&&(l=l|0),u===void 0||u==="["&&r+2===a){qg(n,u===void 0?new PR(l,t,e):new FR(l,t,e));break}else{let d=n.map[l];d===void 0&&(d=new IR(l),qg(n,d)),n=d}}}class cu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const l=e.getActiveUniform(n,r),o=e.getUniformLocation(n,l.name);BR(l,o,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let s=0,r=n.length;s!==r;++s){const l=n[s],o=i[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in n&&i.push(r)}return i}}function Yg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const zR=37297;let HR=0;function GR(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=a;r<s;r++){const l=r+1;i.push(`${l===e?">":" "} ${l}: ${n[r]}`)}return i.join(`
`)}const Zg=new Pe;function VR(t){Ke._getMatrix(Zg,Ke.workingColorSpace,t);const e=`mat3( ${Zg.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case Yu:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Kg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const l=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+GR(t.getShaderSource(e),l)}else return s}function XR(t,e){const n=VR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const kR={[hS]:"Linear",[dS]:"Reinhard",[pS]:"Cineon",[mS]:"ACESFilmic",[_S]:"AgX",[vS]:"Neutral",[gS]:"Custom"};function WR(t,e){const n=kR[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xo=new q;function qR(){Ke.getLuminanceCoefficients(Xo);const t=Xo.x.toFixed(4),e=Xo.y.toFixed(4),n=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function ZR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function KR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=t.getActiveAttrib(e,a),r=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:l}}return n}function ll(t){return t!==""}function Qg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(t){return t.replace(QR,$R)}const JR=new Map;function $R(t,e){let n=Xe[e];if(n===void 0){const i=JR.get(e);if(i!==void 0)n=Xe[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ld(n)}const jR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $g(t){return t.replace(jR,eC)}function eC(t,e,n,i){let a="";for(let s=parseInt(e);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function jg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const tC={[su]:"SHADOWMAP_TYPE_PCF",[rl]:"SHADOWMAP_TYPE_VSM"};function nC(t){return tC[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iC={[vs]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[gc]:"ENVMAP_TYPE_CUBE_UV"};function aC(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":iC[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const sC={[Cr]:"ENVMAP_MODE_REFRACTION"};function rC(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":sC[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lC={[fS]:"ENVMAP_BLENDING_MULTIPLY",[JT]:"ENVMAP_BLENDING_MIX",[$T]:"ENVMAP_BLENDING_ADD"};function oC(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":lC[t.combine]||"ENVMAP_BLENDING_NONE"}function uC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function cC(t,e,n,i){const a=t.getContext(),s=n.defines;let r=n.vertexShader,l=n.fragmentShader;const o=nC(n),u=aC(n),h=rC(n),d=oC(n),c=uC(n),p=YR(n),g=ZR(s),y=a.createProgram();let m,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ll).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ll).join(`
`),f.length>0&&(f+=`
`)):(m=[jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+o:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),f=[jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+o:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Ei?WR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,XR("linearToOutputTexel",n.outputColorSpace),qR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ll).join(`
`)),r=Ld(r),r=Qg(r,n),r=Jg(r,n),l=Ld(l),l=Qg(l,n),l=Jg(l,n),r=$g(r),l=$g(l),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=x+m+r,_=x+f+l,b=Yg(a,a.VERTEX_SHADER,M),T=Yg(a,a.FRAGMENT_SHADER,_);a.attachShader(y,b),a.attachShader(y,T),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function R(D){if(t.debug.checkShaderErrors){const L=a.getProgramInfoLog(y)||"",N=a.getShaderInfoLog(b)||"",H=a.getShaderInfoLog(T)||"",F=L.trim(),O=N.trim(),U=H.trim();let G=!0,k=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,y,b,T);else{const ee=Kg(a,b,"vertex"),se=Kg(a,T,"fragment");et("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+ee+`
`+se)}else F!==""?Oe("WebGLProgram: Program Info Log:",F):(O===""||U==="")&&(k=!1);k&&(D.diagnostics={runnable:G,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:U,prefix:f}})}a.deleteShader(b),a.deleteShader(T),v=new cu(a,y),A=KR(a,y)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(y,zR)),w},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HR++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=T,this}let fC=0;class hC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new dC(e),n.set(e,i)),i}}class dC{constructor(e){this.id=fC++,this.code=e,this.usedTimes=0}}function pC(t){return t===xs||t===ku||t===Wu}function mC(t,e,n,i,a,s){const r=new wS,l=new hC,o=new Set,u=[],h=new Map,d=i.logarithmicDepthBuffer;let c=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return o.add(v),v===0?"uv":`uv${v}`}function y(v,A,w,D,L,N){const H=D.fog,F=L.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=e.get(v.envMap||O,U),k=G&&G.mapping===gc?G.image.height:null,ee=p[v.type];v.precision!==null&&(c=i.getMaxPrecision(v.precision),c!==v.precision&&Oe("WebGLProgram.getParameters:",v.precision,"not supported, using",c,"instead."));const se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=se!==void 0?se.length:0;let Ve=0;F.morphAttributes.position!==void 0&&(Ve=1),F.morphAttributes.normal!==void 0&&(Ve=2),F.morphAttributes.color!==void 0&&(Ve=3);let Ye,Be,Z,ie;if(ee){const xe=gi[ee];Ye=xe.vertexShader,Be=xe.fragmentShader}else{Ye=v.vertexShader,Be=v.fragmentShader;const xe=l.getVertexShaderStage(v),Rt=l.getFragmentShaderStage(v);l.update(v,xe,Rt),Z=xe.id,ie=Rt.id}const ne=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),De=L.isInstancedMesh===!0,ye=L.isBatchedMesh===!0,st=!!v.map,Fe=!!v.matcap,$e=!!G,Ne=!!v.aoMap,we=!!v.lightMap,Re=!!v.bumpMap&&v.wireframe===!1,ct=!!v.normalMap,Zt=!!v.displacementMap,jt=!!v.emissiveMap,At=!!v.metalnessMap,Ft=!!v.roughnessMap,I=v.anisotropy>0,_n=v.clearcoat>0,rt=v.dispersion>0,C=v.iridescence>0,S=v.sheen>0,z=v.transmission>0,W=I&&!!v.anisotropyMap,K=_n&&!!v.clearcoatMap,ae=_n&&!!v.clearcoatNormalMap,le=_n&&!!v.clearcoatRoughnessMap,Q=C&&!!v.iridescenceMap,$=C&&!!v.iridescenceThicknessMap,oe=S&&!!v.sheenColorMap,Ee=S&&!!v.sheenRoughnessMap,he=!!v.specularMap,ue=!!v.specularColorMap,Ae=!!v.specularIntensityMap,Ue=z&&!!v.transmissionMap,ze=z&&!!v.thicknessMap,P=!!v.gradientMap,re=!!v.alphaMap,J=v.alphaTest>0,ce=!!v.alphaHash,ge=!!v.extensions;let te=Ei;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(te=t.toneMapping);const Me={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:Ye,fragmentShader:Be,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:ie,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:c,batching:ye,batchingColor:ye&&L._colorsTexture!==null,instancing:De,instancingColor:De&&L.instanceColor!==null,instancingMorph:De&&L.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:st,matcap:Fe,envMap:$e,envMapMode:$e&&G.mapping,envMapCubeUVHeight:k,aoMap:Ne,lightMap:we,bumpMap:Re,normalMap:ct,displacementMap:Zt,emissiveMap:jt,normalMapObjectSpace:ct&&v.normalMapType===tb,normalMapTangentSpace:ct&&v.normalMapType===cg,packedNormalMap:ct&&v.normalMapType===cg&&pC(v.normalMap.format),metalnessMap:At,roughnessMap:Ft,anisotropy:I,anisotropyMap:W,clearcoat:_n,clearcoatMap:K,clearcoatNormalMap:ae,clearcoatRoughnessMap:le,dispersion:rt,iridescence:C,iridescenceMap:Q,iridescenceThicknessMap:$,sheen:S,sheenColorMap:oe,sheenRoughnessMap:Ee,specularMap:he,specularColorMap:ue,specularIntensityMap:Ae,transmission:z,transmissionMap:Ue,thicknessMap:ze,gradientMap:P,opaque:v.transparent===!1&&v.blending===dr&&v.alphaToCoverage===!1,alphaMap:re,alphaTest:J,alphaHash:ce,combine:v.combine,mapUv:st&&g(v.map.channel),aoMapUv:Ne&&g(v.aoMap.channel),lightMapUv:we&&g(v.lightMap.channel),bumpMapUv:Re&&g(v.bumpMap.channel),normalMapUv:ct&&g(v.normalMap.channel),displacementMapUv:Zt&&g(v.displacementMap.channel),emissiveMapUv:jt&&g(v.emissiveMap.channel),metalnessMapUv:At&&g(v.metalnessMap.channel),roughnessMapUv:Ft&&g(v.roughnessMap.channel),anisotropyMapUv:W&&g(v.anisotropyMap.channel),clearcoatMapUv:K&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:$&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(v.sheenRoughnessMap.channel),specularMapUv:he&&g(v.specularMap.channel),specularColorMapUv:ue&&g(v.specularColorMap.channel),specularIntensityMapUv:Ae&&g(v.specularIntensityMap.channel),transmissionMapUv:Ue&&g(v.transmissionMap.channel),thicknessMapUv:ze&&g(v.thicknessMap.channel),alphaMapUv:re&&g(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ct||I),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(st||re),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&ct===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ce,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:st&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:jt&&v.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vi,flipSided:v.side===Tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Me.vertexUv1s=o.has(1),Me.vertexUv2s=o.has(2),Me.vertexUv3s=o.has(3),o.clear(),Me}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const w in v.defines)A.push(w),A.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(f(A,v),x(A,v),A.push(t.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function f(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function x(v,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function M(v){const A=p[v.type];let w;if(A){const D=gi[A];w=zb.clone(D.uniforms)}else w=v.uniforms;return w}function _(v,A){let w=h.get(A);return w!==void 0?++w.usedTimes:(w=new cC(t,A,v,a),u.push(w),h.set(A,w)),w}function b(v){if(--v.usedTimes===0){const A=u.indexOf(v);u[A]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){l.remove(v)}function R(){l.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:M,acquireProgram:_,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:R}}function gC(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let l=t.get(r);return l===void 0&&(l={},t.set(r,l)),l}function i(r){t.delete(r)}function a(r,l,o){t.get(r)[l]=o}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:s}}function _C(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function e_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function t_(){const t=[];let e=0;const n=[],i=[],a=[];function s(){e=0,n.length=0,i.length=0,a.length=0}function r(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function l(c,p,g,y,m,f){let x=t[e];return x===void 0?(x={id:c.id,object:c,geometry:p,material:g,materialVariant:r(c),groupOrder:y,renderOrder:c.renderOrder,z:m,group:f},t[e]=x):(x.id=c.id,x.object=c,x.geometry=p,x.material=g,x.materialVariant=r(c),x.groupOrder=y,x.renderOrder=c.renderOrder,x.z=m,x.group=f),e++,x}function o(c,p,g,y,m,f){const x=l(c,p,g,y,m,f);g.transmission>0?i.push(x):g.transparent===!0?a.push(x):n.push(x)}function u(c,p,g,y,m,f){const x=l(c,p,g,y,m,f);g.transmission>0?i.unshift(x):g.transparent===!0?a.unshift(x):n.unshift(x)}function h(c,p,g){n.length>1&&n.sort(c||_C),i.length>1&&i.sort(p||e_),a.length>1&&a.sort(p||e_),g&&(n.reverse(),i.reverse(),a.reverse())}function d(){for(let c=e,p=t.length;c<p;c++){const g=t[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:u,finish:d,sort:h}}function vC(){let t=new WeakMap;function e(i,a){const s=t.get(i);let r;return s===void 0?(r=new t_,t.set(i,[r])):a>=s.length?(r=new t_,s.push(r)):r=s[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function xC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new nt};break;case"SpotLight":n={position:new q,direction:new q,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function SC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let MC=0;function yC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function EC(t){const e=new xC,n=SC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new q);const a=new q,s=new Vt,r=new Vt;function l(u){let h=0,d=0,c=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,x=0,M=0,_=0,b=0,T=0,R=0;u.sort(yC);for(let A=0,w=u.length;A<w;A++){const D=u[A],L=D.color,N=D.intensity,H=D.distance;let F=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===xs?F=D.shadow.map.texture:F=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=L.r*N,d+=L.g*N,c+=L.b*N;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],N);R++}else if(D.isDirectionalLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const U=D.shadow,G=n.get(D);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=D.shadow.matrix,x++}i.directional[p]=O,p++}else if(D.isSpotLight){const O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(L).multiplyScalar(N),O.distance=H,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[y]=O;const U=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,U.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[y]=U.matrix,D.castShadow){const G=n.get(D);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=F,_++}y++}else if(D.isRectAreaLight){const O=e.get(D);O.color.copy(L).multiplyScalar(N),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=O,m++}else if(D.isPointLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const U=D.shadow,G=n.get(D);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,G.shadowCameraNear=U.camera.near,G.shadowCameraFar=U.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=D.shadow.matrix,M++}i.point[g]=O,g++}else if(D.isHemisphereLight){const O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(N),O.groundColor.copy(D.groundColor).multiplyScalar(N),i.hemi[f]=O,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=c;const v=i.hash;(v.directionalLength!==p||v.pointLength!==g||v.spotLength!==y||v.rectAreaLength!==m||v.hemiLength!==f||v.numDirectionalShadows!==x||v.numPointShadows!==M||v.numSpotShadows!==_||v.numSpotMaps!==b||v.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,v.directionalLength=p,v.pointLength=g,v.spotLength=y,v.rectAreaLength=m,v.hemiLength=f,v.numDirectionalShadows=x,v.numPointShadows=M,v.numSpotShadows=_,v.numSpotMaps=b,v.numLightProbes=R,i.version=MC++)}function o(u,h){let d=0,c=0,p=0,g=0,y=0;const m=h.matrixWorldInverse;for(let f=0,x=u.length;f<x;f++){const M=u[f];if(M.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),d++}else if(M.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),r.identity(),s.copy(M.matrixWorld),s.premultiply(m),r.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const _=i.point[c];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),c++}else if(M.isHemisphereLight){const _=i.hemi[y];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:l,setupView:o,state:i}}function n_(t){const e=new EC(t),n=[],i=[],a=[];function s(c){d.camera=c,n.length=0,i.length=0,a.length=0}function r(c){n.push(c)}function l(c){i.push(c)}function o(c){a.push(c)}function u(){e.setup(n)}function h(c){e.setupView(n,c)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:h,pushLight:r,pushShadow:l,pushLightProbeGrid:o}}function TC(t){let e=new WeakMap;function n(a,s=0){const r=e.get(a);let l;return r===void 0?(l=new n_(t),e.set(a,[l])):s>=r.length?(l=new n_(t),r.push(l)):l=r[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const bC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,RC=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],CC=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],i_=new Vt,el=new q,Xf=new q;function wC(t,e,n){let i=new OS;const a=new tt,s=new tt,r=new Ut,l=new Xb,o=new kb,u={},h=n.maxTextureSize,d={[ka]:Tn,[Tn]:ka,[Vi]:Vi},c=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:bC,fragmentShader:AC}),p=c.clone();p.defines.HORIZONTAL_PASS=1;const g=new la;g.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ri(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let f=this.type;this.render=function(T,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===LT&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=su);const A=t.getRenderTarget(),w=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),L=t.state;L.setBlending(Qi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=f!==this.type;N&&R.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(F=>F.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,F=T.length;H<F;H++){const O=T[H],U=O.shadow;if(U===void 0){Oe("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;a.copy(U.mapSize);const G=U.getFrameExtents();a.multiply(G),s.copy(U.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/G.x),a.x=s.x*G.x,U.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/G.y),a.y=s.y*G.y,U.mapSize.y=s.y));const k=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=k,U.map===null||N===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===rl){if(O.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Ti(a.x,a.y,{format:xs,type:aa,minFilter:fn,magFilter:fn,generateMipmaps:!1}),U.map.texture.name=O.name+".shadowMap",U.map.depthTexture=new wr(a.x,a.y,Si),U.map.depthTexture.name=O.name+".shadowMapDepth",U.map.depthTexture.format=sa,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=sn,U.map.depthTexture.magFilter=sn}else O.isPointLight?(U.map=new GS(a.x),U.map.depthTexture=new Ib(a.x,Ai)):(U.map=new Ti(a.x,a.y),U.map.depthTexture=new wr(a.x,a.y,Ai)),U.map.depthTexture.name=O.name+".shadowMap",U.map.depthTexture.format=sa,this.type===su?(U.map.depthTexture.compareFunction=k?kp:Xp,U.map.depthTexture.minFilter=fn,U.map.depthTexture.magFilter=fn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=sn,U.map.depthTexture.magFilter=sn);U.camera.updateProjectionMatrix()}const ee=U.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<ee;se++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,se),t.clear();else{se===0&&(t.setRenderTarget(U.map),t.clear());const fe=U.getViewport(se);r.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),L.viewport(r)}if(O.isPointLight){const fe=U.camera,Ve=U.matrix,Ye=O.distance||fe.far;Ye!==fe.far&&(fe.far=Ye,fe.updateProjectionMatrix()),el.setFromMatrixPosition(O.matrixWorld),fe.position.copy(el),Xf.copy(fe.position),Xf.add(RC[se]),fe.up.copy(CC[se]),fe.lookAt(Xf),fe.updateMatrixWorld(),Ve.makeTranslation(-el.x,-el.y,-el.z),i_.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),U._frustum.setFromProjectionMatrix(i_,fe.coordinateSystem,fe.reversedDepth)}else U.updateMatrices(O);i=U.getFrustum(),_(R,v,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===rl&&x(U,v),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(A,w,D)};function x(T,R){const v=e.update(y);c.defines.VSM_SAMPLES!==T.blurSamples&&(c.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(a.x,a.y,{format:xs,type:aa})),c.uniforms.shadow_pass.value=T.map.depthTexture,c.uniforms.resolution.value=T.mapSize,c.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,v,c,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,v,p,y,null)}function M(T,R,v,A){let w=null;const D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)w=D;else if(w=v.isPointLight===!0?o:l,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=w.uuid,N=R.uuid;let H=u[L];H===void 0&&(H={},u[L]=H);let F=H[N];F===void 0&&(F=w.clone(),H[N]=F,R.addEventListener("dispose",b)),w=F}if(w.visible=R.visible,w.wireframe=R.wireframe,A===rl?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:d[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const L=t.properties.get(w);L.light=v}return w}function _(T,R,v,A,w){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===rl)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const N=e.update(T),H=T.material;if(Array.isArray(H)){const F=N.groups;for(let O=0,U=F.length;O<U;O++){const G=F[O],k=H[G.materialIndex];if(k&&k.visible){const ee=M(T,k,A,w);T.onBeforeShadow(t,T,R,v,N,ee,G),t.renderBufferDirect(v,null,N,ee,T,G),T.onAfterShadow(t,T,R,v,N,ee,G)}}}else if(H.visible){const F=M(T,H,A,w);T.onBeforeShadow(t,T,R,v,N,F,null),t.renderBufferDirect(v,null,N,F,T,null),T.onAfterShadow(t,T,R,v,N,F,null)}}const L=T.children;for(let N=0,H=L.length;N<H;N++)_(L[N],R,v,A,w)}function b(T){T.target.removeEventListener("dispose",b);for(const v in u){const A=u[v],w=T.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}function DC(t,e){function n(){let P=!1;const re=new Ut;let J=null;const ce=new Ut(0,0,0,0);return{setMask:function(ge){J!==ge&&!P&&(t.colorMask(ge,ge,ge,ge),J=ge)},setLocked:function(ge){P=ge},setClear:function(ge,te,Me,xe,Rt){Rt===!0&&(ge*=xe,te*=xe,Me*=xe),re.set(ge,te,Me,xe),ce.equals(re)===!1&&(t.clearColor(ge,te,Me,xe),ce.copy(re))},reset:function(){P=!1,J=null,ce.set(-1,0,0,0)}}}function i(){let P=!1,re=!1,J=null,ce=null,ge=null;return{setReversed:function(te){if(re!==te){const Me=e.get("EXT_clip_control");te?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),re=te;const xe=ge;ge=null,this.setClear(xe)}},getReversed:function(){return re},setTest:function(te){te?ne(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(te){J!==te&&!P&&(t.depthMask(te),J=te)},setFunc:function(te){if(re&&(te=fb[te]),ce!==te){switch(te){case Wh:t.depthFunc(t.NEVER);break;case qh:t.depthFunc(t.ALWAYS);break;case Yh:t.depthFunc(t.LESS);break;case Rr:t.depthFunc(t.LEQUAL);break;case Zh:t.depthFunc(t.EQUAL);break;case Kh:t.depthFunc(t.GEQUAL);break;case Qh:t.depthFunc(t.GREATER);break;case Jh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=te}},setLocked:function(te){P=te},setClear:function(te){ge!==te&&(ge=te,re&&(te=1-te),t.clearDepth(te))},reset:function(){P=!1,J=null,ce=null,ge=null,re=!1}}}function a(){let P=!1,re=null,J=null,ce=null,ge=null,te=null,Me=null,xe=null,Rt=null;return{setTest:function(_t){P||(_t?ne(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(_t){re!==_t&&!P&&(t.stencilMask(_t),re=_t)},setFunc:function(_t,fi,hi){(J!==_t||ce!==fi||ge!==hi)&&(t.stencilFunc(_t,fi,hi),J=_t,ce=fi,ge=hi)},setOp:function(_t,fi,hi){(te!==_t||Me!==fi||xe!==hi)&&(t.stencilOp(_t,fi,hi),te=_t,Me=fi,xe=hi)},setLocked:function(_t){P=_t},setClear:function(_t){Rt!==_t&&(t.clearStencil(_t),Rt=_t)},reset:function(){P=!1,re=null,J=null,ce=null,ge=null,te=null,Me=null,xe=null,Rt=null}}}const s=new n,r=new i,l=new a,o=new WeakMap,u=new WeakMap;let h={},d={},c={},p=new WeakMap,g=[],y=null,m=!1,f=null,x=null,M=null,_=null,b=null,T=null,R=null,v=new nt(0,0,0),A=0,w=!1,D=null,L=null,N=null,H=null,F=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,G=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=G>=1):k.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=G>=2);let ee=null,se={};const fe=t.getParameter(t.SCISSOR_BOX),Ve=t.getParameter(t.VIEWPORT),Ye=new Ut().fromArray(fe),Be=new Ut().fromArray(Ve);function Z(P,re,J,ce){const ge=new Uint8Array(4),te=t.createTexture();t.bindTexture(P,te),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Me=0;Me<J;Me++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(re+Me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return te}const ie={};ie[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),l.setClear(0),ne(t.DEPTH_TEST),r.setFunc(Rr),Re(!1),ct(rg),ne(t.CULL_FACE),Ne(Qi);function ne(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Ce(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function De(P,re){return c[P]!==re?(t.bindFramebuffer(P,re),c[P]=re,P===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=re),P===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=re),!0):!1}function ye(P,re){let J=g,ce=!1;if(P){J=p.get(re),J===void 0&&(J=[],p.set(re,J));const ge=P.textures;if(J.length!==ge.length||J[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Me=ge.length;te<Me;te++)J[te]=t.COLOR_ATTACHMENT0+te;J.length=ge.length,ce=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,ce=!0);ce&&t.drawBuffers(J)}function st(P){return y!==P?(t.useProgram(P),y=P,!0):!1}const Fe={[as]:t.FUNC_ADD,[OT]:t.FUNC_SUBTRACT,[PT]:t.FUNC_REVERSE_SUBTRACT};Fe[FT]=t.MIN,Fe[IT]=t.MAX;const $e={[BT]:t.ZERO,[zT]:t.ONE,[HT]:t.SRC_COLOR,[Xh]:t.SRC_ALPHA,[qT]:t.SRC_ALPHA_SATURATE,[kT]:t.DST_COLOR,[VT]:t.DST_ALPHA,[GT]:t.ONE_MINUS_SRC_COLOR,[kh]:t.ONE_MINUS_SRC_ALPHA,[WT]:t.ONE_MINUS_DST_COLOR,[XT]:t.ONE_MINUS_DST_ALPHA,[YT]:t.CONSTANT_COLOR,[ZT]:t.ONE_MINUS_CONSTANT_COLOR,[KT]:t.CONSTANT_ALPHA,[QT]:t.ONE_MINUS_CONSTANT_ALPHA};function Ne(P,re,J,ce,ge,te,Me,xe,Rt,_t){if(P===Qi){m===!0&&(Ce(t.BLEND),m=!1);return}if(m===!1&&(ne(t.BLEND),m=!0),P!==NT){if(P!==f||_t!==w){if((x!==as||b!==as)&&(t.blendEquation(t.FUNC_ADD),x=as,b=as),_t)switch(P){case dr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lg:t.blendFunc(t.ONE,t.ONE);break;case og:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ug:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",P);break}else switch(P){case dr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case og:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ug:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",P);break}M=null,_=null,T=null,R=null,v.set(0,0,0),A=0,f=P,w=_t}return}ge=ge||re,te=te||J,Me=Me||ce,(re!==x||ge!==b)&&(t.blendEquationSeparate(Fe[re],Fe[ge]),x=re,b=ge),(J!==M||ce!==_||te!==T||Me!==R)&&(t.blendFuncSeparate($e[J],$e[ce],$e[te],$e[Me]),M=J,_=ce,T=te,R=Me),(xe.equals(v)===!1||Rt!==A)&&(t.blendColor(xe.r,xe.g,xe.b,Rt),v.copy(xe),A=Rt),f=P,w=!1}function we(P,re){P.side===Vi?Ce(t.CULL_FACE):ne(t.CULL_FACE);let J=P.side===Tn;re&&(J=!J),Re(J),P.blending===dr&&P.transparent===!1?Ne(Qi):Ne(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const ce=P.stencilWrite;l.setTest(ce),ce&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),jt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(P){D!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),D=P)}function ct(P){P!==DT?(ne(t.CULL_FACE),P!==L&&(P===rg?t.cullFace(t.BACK):P===UT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),L=P}function Zt(P){P!==N&&(U&&t.lineWidth(P),N=P)}function jt(P,re,J){P?(ne(t.POLYGON_OFFSET_FILL),(H!==re||F!==J)&&(H=re,F=J,r.getReversed()&&(re=-re),t.polygonOffset(re,J))):Ce(t.POLYGON_OFFSET_FILL)}function At(P){P?ne(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Ft(P){P===void 0&&(P=t.TEXTURE0+O-1),ee!==P&&(t.activeTexture(P),ee=P)}function I(P,re,J){J===void 0&&(ee===null?J=t.TEXTURE0+O-1:J=ee);let ce=se[J];ce===void 0&&(ce={type:void 0,texture:void 0},se[J]=ce),(ce.type!==P||ce.texture!==re)&&(ee!==J&&(t.activeTexture(J),ee=J),t.bindTexture(P,re||ie[P]),ce.type=P,ce.texture=re)}function _n(){const P=se[ee];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function rt(){try{t.compressedTexImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function S(){try{t.texSubImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function z(){try{t.texSubImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function ae(){try{t.texStorage2D(...arguments)}catch(P){et("WebGLState:",P)}}function le(){try{t.texStorage3D(...arguments)}catch(P){et("WebGLState:",P)}}function Q(){try{t.texImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function $(){try{t.texImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function oe(P){return d[P]!==void 0?d[P]:t.getParameter(P)}function Ee(P,re){d[P]!==re&&(t.pixelStorei(P,re),d[P]=re)}function he(P){Ye.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Ye.copy(P))}function ue(P){Be.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),Be.copy(P))}function Ae(P,re){let J=u.get(re);J===void 0&&(J=new WeakMap,u.set(re,J));let ce=J.get(P);ce===void 0&&(ce=t.getUniformBlockIndex(re,P.name),J.set(P,ce))}function Ue(P,re){const ce=u.get(re).get(P);o.get(re)!==ce&&(t.uniformBlockBinding(re,ce,P.__bindingPointIndex),o.set(re,ce))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},ee=null,se={},c={},p=new WeakMap,g=[],y=null,m=!1,f=null,x=null,M=null,_=null,b=null,T=null,R=null,v=new nt(0,0,0),A=0,w=!1,D=null,L=null,N=null,H=null,F=null,Ye.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),l.reset()}return{buffers:{color:s,depth:r,stencil:l},enable:ne,disable:Ce,bindFramebuffer:De,drawBuffers:ye,useProgram:st,setBlending:Ne,setMaterial:we,setFlipSided:Re,setCullFace:ct,setLineWidth:Zt,setPolygonOffset:jt,setScissorTest:At,activeTexture:Ft,bindTexture:I,unbindTexture:_n,compressedTexImage2D:rt,compressedTexImage3D:C,texImage2D:Q,texImage3D:$,pixelStorei:Ee,getParameter:oe,updateUBOMapping:Ae,uniformBlockBinding:Ue,texStorage2D:ae,texStorage3D:le,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:he,viewport:ue,reset:ze}}function UC(t,e,n,i,a,s,r){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new tt,h=new WeakMap,d=new Set;let c;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,S){return g?new OffscreenCanvas(C,S):Ku("canvas")}function m(C,S,z){let W=1;const K=rt(C);if((K.width>z||K.height>z)&&(W=z/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ae=Math.floor(W*K.width),le=Math.floor(W*K.height);c===void 0&&(c=y(ae,le));const Q=S?y(ae,le):c;return Q.width=ae,Q.height=le,Q.getContext("2d").drawImage(C,0,0,ae,le),Oe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ae+"x"+le+")."),Q}else return"data"in C&&Oe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function f(C){return C.generateMipmaps}function x(C){t.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(C,S,z,W,K,ae=!1){if(C!==null){if(t[C]!==void 0)return t[C];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le;W&&(le=e.get("EXT_texture_norm16"),le||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=S;if(S===t.RED&&(z===t.FLOAT&&(Q=t.R32F),z===t.HALF_FLOAT&&(Q=t.R16F),z===t.UNSIGNED_BYTE&&(Q=t.R8),z===t.UNSIGNED_SHORT&&le&&(Q=le.R16_EXT),z===t.SHORT&&le&&(Q=le.R16_SNORM_EXT)),S===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.R8UI),z===t.UNSIGNED_SHORT&&(Q=t.R16UI),z===t.UNSIGNED_INT&&(Q=t.R32UI),z===t.BYTE&&(Q=t.R8I),z===t.SHORT&&(Q=t.R16I),z===t.INT&&(Q=t.R32I)),S===t.RG&&(z===t.FLOAT&&(Q=t.RG32F),z===t.HALF_FLOAT&&(Q=t.RG16F),z===t.UNSIGNED_BYTE&&(Q=t.RG8),z===t.UNSIGNED_SHORT&&le&&(Q=le.RG16_EXT),z===t.SHORT&&le&&(Q=le.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RG8UI),z===t.UNSIGNED_SHORT&&(Q=t.RG16UI),z===t.UNSIGNED_INT&&(Q=t.RG32UI),z===t.BYTE&&(Q=t.RG8I),z===t.SHORT&&(Q=t.RG16I),z===t.INT&&(Q=t.RG32I)),S===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),z===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),z===t.UNSIGNED_INT&&(Q=t.RGB32UI),z===t.BYTE&&(Q=t.RGB8I),z===t.SHORT&&(Q=t.RGB16I),z===t.INT&&(Q=t.RGB32I)),S===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),z===t.UNSIGNED_INT&&(Q=t.RGBA32UI),z===t.BYTE&&(Q=t.RGBA8I),z===t.SHORT&&(Q=t.RGBA16I),z===t.INT&&(Q=t.RGBA32I)),S===t.RGB&&(z===t.UNSIGNED_SHORT&&le&&(Q=le.RGB16_EXT),z===t.SHORT&&le&&(Q=le.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),S===t.RGBA){const $=ae?Yu:Ke.getTransfer(K);z===t.FLOAT&&(Q=t.RGBA32F),z===t.HALF_FLOAT&&(Q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Q=$===lt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&le&&(Q=le.RGBA16_EXT),z===t.SHORT&&le&&(Q=le.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(C,S){let z;return C?S===null||S===Ai||S===Bl?z=t.DEPTH24_STENCIL8:S===Si?z=t.DEPTH32F_STENCIL8:S===Il&&(z=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===Bl?z=t.DEPTH_COMPONENT24:S===Si?z=t.DEPTH_COMPONENT32F:S===Il&&(z=t.DEPTH_COMPONENT16),z}function T(C,S){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){const S=C.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function v(C){const S=C.target;S.removeEventListener("dispose",v),D(S)}function A(C){const S=i.get(C);if(S.__webglInit===void 0)return;const z=C.source,W=p.get(z);if(W){const K=W[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(C),Object.keys(W).length===0&&p.delete(z)}i.remove(C)}function w(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const z=C.source,W=p.get(z);delete W[S.__cacheKey],r.memory.textures--}function D(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let K=0;K<S.__webglFramebuffer[W].length;K++)t.deleteFramebuffer(S.__webglFramebuffer[W][K]);else t.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)t.deleteFramebuffer(S.__webglFramebuffer[W]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let W=0,K=z.length;W<K;W++){const ae=i.get(z[W]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),r.memory.textures--),i.remove(z[W])}i.remove(C)}let L=0;function N(){L=0}function H(){return L}function F(C){L=C}function O(){const C=L;return C>=a.maxTextures&&Oe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),L+=1,C}function U(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function G(C,S){const z=i.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const W=C.image;if(W===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(z,C,S);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+S)}function k(C,S){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Ce(z,C,S);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+S)}function ee(C,S){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Ce(z,C,S);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+S)}function se(C,S){const z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){De(z,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+S)}const fe={[$h]:t.REPEAT,[qi]:t.CLAMP_TO_EDGE,[jh]:t.MIRRORED_REPEAT},Ve={[sn]:t.NEAREST,[jT]:t.NEAREST_MIPMAP_NEAREST,[Mo]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[df]:t.LINEAR_MIPMAP_NEAREST,[rs]:t.LINEAR_MIPMAP_LINEAR},Ye={[nb]:t.NEVER,[lb]:t.ALWAYS,[ib]:t.LESS,[Xp]:t.LEQUAL,[ab]:t.EQUAL,[kp]:t.GEQUAL,[sb]:t.GREATER,[rb]:t.NOTEQUAL};function Be(C,S){if(S.type===Si&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===df||S.magFilter===Mo||S.magFilter===rs||S.minFilter===fn||S.minFilter===df||S.minFilter===Mo||S.minFilter===rs)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,fe[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,fe[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,fe[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Ve[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Ve[S.minFilter]),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==Mo&&S.minFilter!==rs||S.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Z(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const W=S.source;let K=p.get(W);K===void 0&&(K={},p.set(W,K));const ae=U(S);if(ae!==C.__cacheKey){K[ae]===void 0&&(K[ae]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,z=!0),K[ae].usedTimes++;const le=K[C.__cacheKey];le!==void 0&&(K[C.__cacheKey].usedTimes--,le.usedTimes===0&&w(S)),C.__cacheKey=ae,C.__webglTexture=K[ae].texture}return z}function ie(C,S,z){return Math.floor(Math.floor(C/z)/S)}function ne(C,S,z,W){const ae=C.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,z,W,S.data);else{ae.sort((Ee,he)=>Ee.start-he.start);let le=0;for(let Ee=1;Ee<ae.length;Ee++){const he=ae[le],ue=ae[Ee],Ae=he.start+he.count,Ue=ie(ue.start,S.width,4),ze=ie(he.start,S.width,4);ue.start<=Ae+1&&Ue===ze&&ie(ue.start+ue.count-1,S.width,4)===Ue?he.count=Math.max(he.count,ue.start+ue.count-he.start):(++le,ae[le]=ue)}ae.length=le+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),$=n.getParameter(t.UNPACK_SKIP_PIXELS),oe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Ee=0,he=ae.length;Ee<he;Ee++){const ue=ae[Ee],Ae=Math.floor(ue.start/4),Ue=Math.ceil(ue.count/4),ze=Ae%S.width,P=Math.floor(Ae/S.width),re=Ue,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,ze,P,re,J,z,W,S.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,$),n.pixelStorei(t.UNPACK_SKIP_ROWS,oe)}}function Ce(C,S,z){let W=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=t.TEXTURE_3D);const K=Z(C,S),ae=S.source;n.bindTexture(W,C.__webglTexture,t.TEXTURE0+z);const le=i.get(ae);if(ae.version!==le.__version||K===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const J=Ke.getPrimaries(Ke.workingColorSpace),ce=S.colorSpace===Ta?null:Ke.getPrimaries(S.colorSpace),ge=S.colorSpace===Ta||J===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let $=m(S.image,!1,a.maxTextureSize);$=_n(S,$);const oe=s.convert(S.format,S.colorSpace),Ee=s.convert(S.type);let he=_(S.internalFormat,oe,Ee,S.normalized,S.colorSpace,S.isVideoTexture);Be(W,S);let ue;const Ae=S.mipmaps,Ue=S.isVideoTexture!==!0,ze=le.__version===void 0||K===!0,P=ae.dataReady,re=T(S,$);if(S.isDepthTexture)he=b(S.format===ls,S.type),ze&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,he,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,he,$.width,$.height,0,oe,Ee,null));else if(S.isDataTexture)if(Ae.length>0){Ue&&ze&&n.texStorage2D(t.TEXTURE_2D,re,he,Ae[0].width,Ae[0].height);for(let J=0,ce=Ae.length;J<ce;J++)ue=Ae[J],Ue?P&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ue.width,ue.height,oe,Ee,ue.data):n.texImage2D(t.TEXTURE_2D,J,he,ue.width,ue.height,0,oe,Ee,ue.data);S.generateMipmaps=!1}else Ue?(ze&&n.texStorage2D(t.TEXTURE_2D,re,he,$.width,$.height),P&&ne(S,$,oe,Ee)):n.texImage2D(t.TEXTURE_2D,0,he,$.width,$.height,0,oe,Ee,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ue&&ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,he,Ae[0].width,Ae[0].height,$.depth);for(let J=0,ce=Ae.length;J<ce;J++)if(ue=Ae[J],S.format!==oi)if(oe!==null)if(Ue){if(P)if(S.layerUpdates.size>0){const ge=Og(ue.width,ue.height,S.format,S.type);for(const te of S.layerUpdates){const Me=ue.data.subarray(te*ge/ue.data.BYTES_PER_ELEMENT,(te+1)*ge/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,te,ue.width,ue.height,1,oe,Me)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,$.depth,oe,ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,he,ue.width,ue.height,$.depth,0,ue.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,$.depth,oe,Ee,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,he,ue.width,ue.height,$.depth,0,oe,Ee,ue.data)}else{Ue&&ze&&n.texStorage2D(t.TEXTURE_2D,re,he,Ae[0].width,Ae[0].height);for(let J=0,ce=Ae.length;J<ce;J++)ue=Ae[J],S.format!==oi?oe!==null?Ue?P&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,ue.width,ue.height,oe,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,J,he,ue.width,ue.height,0,ue.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?P&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ue.width,ue.height,oe,Ee,ue.data):n.texImage2D(t.TEXTURE_2D,J,he,ue.width,ue.height,0,oe,Ee,ue.data)}else if(S.isDataArrayTexture)if(Ue){if(ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,he,$.width,$.height,$.depth),P)if(S.layerUpdates.size>0){const J=Og($.width,$.height,S.format,S.type);for(const ce of S.layerUpdates){const ge=$.data.subarray(ce*J/$.data.BYTES_PER_ELEMENT,(ce+1)*J/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,$.width,$.height,1,oe,Ee,ge)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,oe,Ee,$.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,$.width,$.height,$.depth,0,oe,Ee,$.data);else if(S.isData3DTexture)Ue?(ze&&n.texStorage3D(t.TEXTURE_3D,re,he,$.width,$.height,$.depth),P&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,oe,Ee,$.data)):n.texImage3D(t.TEXTURE_3D,0,he,$.width,$.height,$.depth,0,oe,Ee,$.data);else if(S.isFramebufferTexture){if(ze)if(Ue)n.texStorage2D(t.TEXTURE_2D,re,he,$.width,$.height);else{let J=$.width,ce=$.height;for(let ge=0;ge<re;ge++)n.texImage2D(t.TEXTURE_2D,ge,he,J,ce,0,oe,Ee,null),J>>=1,ce>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),$.parentNode!==J){J.appendChild($),d.add(S),J.onpaint=ce=>{const ge=ce.changedElements;for(const te of d)ge.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,$);else{const ge=t.RGBA,te=t.RGBA,Me=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ge,te,Me,$)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ue&&ze){const J=rt(Ae[0]);n.texStorage2D(t.TEXTURE_2D,re,he,J.width,J.height)}for(let J=0,ce=Ae.length;J<ce;J++)ue=Ae[J],Ue?P&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,oe,Ee,ue):n.texImage2D(t.TEXTURE_2D,J,he,oe,Ee,ue);S.generateMipmaps=!1}else if(Ue){if(ze){const J=rt($);n.texStorage2D(t.TEXTURE_2D,re,he,J.width,J.height)}P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe,Ee,$)}else n.texImage2D(t.TEXTURE_2D,0,he,oe,Ee,$);f(S)&&x(W),le.__version=ae.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function De(C,S,z){if(S.image.length!==6)return;const W=Z(C,S),K=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+z);const ae=i.get(K);if(K.version!==ae.__version||W===!0){n.activeTexture(t.TEXTURE0+z);const le=Ke.getPrimaries(Ke.workingColorSpace),Q=S.colorSpace===Ta?null:Ke.getPrimaries(S.colorSpace),$=S.colorSpace===Ta||le===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const oe=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!oe&&!Ee?he[te]=m(S.image[te],!0,a.maxCubemapSize):he[te]=Ee?S.image[te].image:S.image[te],he[te]=_n(S,he[te]);const ue=he[0],Ae=s.convert(S.format,S.colorSpace),Ue=s.convert(S.type),ze=_(S.internalFormat,Ae,Ue,S.normalized,S.colorSpace),P=S.isVideoTexture!==!0,re=ae.__version===void 0||W===!0,J=K.dataReady;let ce=T(S,ue);Be(t.TEXTURE_CUBE_MAP,S);let ge;if(oe){P&&re&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,ue.width,ue.height);for(let te=0;te<6;te++){ge=he[te].mipmaps;for(let Me=0;Me<ge.length;Me++){const xe=ge[Me];S.format!==oi?Ae!==null?P?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,xe.width,xe.height,Ae,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,ze,xe.width,xe.height,0,xe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,xe.width,xe.height,Ae,Ue,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,ze,xe.width,xe.height,0,Ae,Ue,xe.data)}}}else{if(ge=S.mipmaps,P&&re){ge.length>0&&ce++;const te=rt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){P?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,Ae,Ue,he[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ze,he[te].width,he[te].height,0,Ae,Ue,he[te].data);for(let Me=0;Me<ge.length;Me++){const Rt=ge[Me].image[te].image;P?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,Rt.width,Rt.height,Ae,Ue,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,ze,Rt.width,Rt.height,0,Ae,Ue,Rt.data)}}else{P?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ae,Ue,he[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ze,Ae,Ue,he[te]);for(let Me=0;Me<ge.length;Me++){const xe=ge[Me];P?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,Ae,Ue,xe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,ze,Ae,Ue,xe.image[te])}}}f(S)&&x(t.TEXTURE_CUBE_MAP),ae.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ye(C,S,z,W,K,ae){const le=s.convert(z.format,z.colorSpace),Q=s.convert(z.type),$=_(z.internalFormat,le,Q,z.normalized,z.colorSpace),oe=i.get(S),Ee=i.get(z);if(Ee.__renderTarget=S,!oe.__hasExternalTextures){const he=Math.max(1,S.width>>ae),ue=Math.max(1,S.height>>ae);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,ae,$,he,ue,S.depth,0,le,Q,null):n.texImage2D(K,ae,$,he,ue,0,le,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ft(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,K,Ee.__webglTexture,0,At(S)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,K,Ee.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function st(C,S,z){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer){const W=S.depthTexture,K=W&&W.isDepthTexture?W.type:null,ae=b(S.stencilBuffer,K),le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ft(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,At(S),ae,S.width,S.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,At(S),ae,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ae,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,C)}else{const W=S.textures;for(let K=0;K<W.length;K++){const ae=W[K],le=s.convert(ae.format,ae.colorSpace),Q=s.convert(ae.type),$=_(ae.internalFormat,le,Q,ae.normalized,ae.colorSpace);Ft(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,At(S),$,S.width,S.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,At(S),$,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,$,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Fe(C,S,z){const W=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Be(t.TEXTURE_CUBE_MAP,S.depthTexture);const oe=s.convert(S.depthTexture.format),Ee=s.convert(S.depthTexture.type);let he;S.depthTexture.format===sa?he=t.DEPTH_COMPONENT24:S.depthTexture.format===ls&&(he=t.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,S.width,S.height,0,oe,Ee,null)}}else G(S.depthTexture,0);const ae=K.__webglTexture,le=At(S),Q=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,$=S.depthTexture.format===ls?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===sa)Ft(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,Q,ae,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,$,Q,ae,0);else if(S.depthTexture.format===ls)Ft(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,Q,ae,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,$,Q,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(C){const S=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=W}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)Fe(S.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?Fe(S.__webglFramebuffer[0],C,0):Fe(S.__webglFramebuffer,C,0)}else if(z){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=t.createRenderbuffer(),st(S.__webglDepthbuffer[W],C,!1);else{const K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ae)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),st(S.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(C,S,z){const W=i.get(C);S!==void 0&&ye(W.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&$e(C)}function we(C){const S=C.texture,z=i.get(C),W=i.get(S);C.addEventListener("dispose",v);const K=C.textures,ae=C.isWebGLCubeRenderTarget===!0,le=K.length>1;if(le||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=S.version,r.memory.textures++),ae){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let $=0;$<S.mipmaps.length;$++)z.__webglFramebuffer[Q][$]=t.createFramebuffer()}else z.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<S.mipmaps.length;Q++)z.__webglFramebuffer[Q]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(le)for(let Q=0,$=K.length;Q<$;Q++){const oe=i.get(K[Q]);oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture(),r.memory.textures++)}if(C.samples>0&&Ft(C)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<K.length;Q++){const $=K[Q];z.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);const oe=s.convert($.format,$.colorSpace),Ee=s.convert($.type),he=_($.internalFormat,oe,Ee,$.normalized,$.colorSpace,C.isXRRenderTarget===!0),ue=At(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,he,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),st(z.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Be(t.TEXTURE_CUBE_MAP,S);for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0)for(let $=0;$<S.mipmaps.length;$++)ye(z.__webglFramebuffer[Q][$],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,$);else ye(z.__webglFramebuffer[Q],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);f(S)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let Q=0,$=K.length;Q<$;Q++){const oe=K[Q],Ee=i.get(oe);let he=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Ee.__webglTexture),Be(he,oe),ye(z.__webglFramebuffer,C,oe,t.COLOR_ATTACHMENT0+Q,he,0),f(oe)&&x(he)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,W.__webglTexture),Be(Q,S),S.mipmaps&&S.mipmaps.length>0)for(let $=0;$<S.mipmaps.length;$++)ye(z.__webglFramebuffer[$],C,S,t.COLOR_ATTACHMENT0,Q,$);else ye(z.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,Q,0);f(S)&&x(Q),n.unbindTexture()}C.depthBuffer&&$e(C)}function Re(C){const S=C.textures;for(let z=0,W=S.length;z<W;z++){const K=S[z];if(f(K)){const ae=M(C),le=i.get(K).__webglTexture;n.bindTexture(ae,le),x(ae),n.unbindTexture()}}}const ct=[],Zt=[];function jt(C){if(C.samples>0){if(Ft(C)===!1){const S=C.textures,z=C.width,W=C.height;let K=t.COLOR_BUFFER_BIT;const ae=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(C),Q=S.length>1;if(Q)for(let oe=0;oe<S.length;oe++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const $=C.texture.mipmaps;$&&$.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let oe=0;oe<S.length;oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[oe]);const Ee=i.get(S[oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ee,0)}t.blitFramebuffer(0,0,z,W,0,0,z,W,K,t.NEAREST),o===!0&&(ct.length=0,Zt.length=0,ct.push(t.COLOR_ATTACHMENT0+oe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ct.push(ae),Zt.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Zt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let oe=0;oe<S.length;oe++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,le.__webglColorRenderbuffer[oe]);const Ee=i.get(S[oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,Ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&o){const S=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function At(C){return Math.min(a.maxSamples,C.samples)}function Ft(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function I(C){const S=r.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function _n(C,S){const z=C.colorSpace,W=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==qu&&z!==Ta&&(Ke.getTransfer(z)===lt?(W!==oi||K!==Jn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",z)),S}function rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.getTextureUnits=H,this.setTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=ee,this.setTextureCube=se,this.rebindTextures=Ne,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function LC(t,e){function n(i,a=Ta){let s;const r=Ke.getTransfer(a);if(i===Jn)return t.UNSIGNED_BYTE;if(i===Bp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===yS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ES)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===SS)return t.BYTE;if(i===MS)return t.SHORT;if(i===Il)return t.UNSIGNED_SHORT;if(i===Ip)return t.INT;if(i===Ai)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===aa)return t.HALF_FLOAT;if(i===TS)return t.ALPHA;if(i===bS)return t.RGB;if(i===oi)return t.RGBA;if(i===sa)return t.DEPTH_COMPONENT;if(i===ls)return t.DEPTH_STENCIL;if(i===AS)return t.RED;if(i===Hp)return t.RED_INTEGER;if(i===xs)return t.RG;if(i===Gp)return t.RG_INTEGER;if(i===Vp)return t.RGBA_INTEGER;if(i===ru||i===lu||i===ou||i===uu)if(r===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ru)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ou)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ru)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ou)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ed||i===td||i===nd||i===id)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ed)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===td)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===id)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ad||i===sd||i===rd||i===ld||i===od||i===ku||i===ud)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ad||i===sd)return r===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ld)return s.COMPRESSED_R11_EAC;if(i===od)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ku)return s.COMPRESSED_RG11_EAC;if(i===ud)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cd||i===fd||i===hd||i===dd||i===pd||i===md||i===gd||i===_d||i===vd||i===xd||i===Sd||i===Md||i===yd||i===Ed)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===md)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_d)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Md)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ed)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Td||i===bd||i===Ad)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Td)return r===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ad)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rd||i===Cd||i===Wu||i===wd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Cd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const NC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new FS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ui({vertexShader:NC,fragmentShader:OC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ri(new eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FC extends As{constructor(e,n){super();const i=this;let a=null,s=1,r=null,l="local-floor",o=1,u=null,h=null,d=null,c=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",m=new PC,f={},x=n.getContextAttributes();let M=null,_=null;const b=[],T=[],R=new tt;let v=null;const A=new ri;A.viewport=new Ut;const w=new ri;w.viewport=new Ut;const D=[A,w],L=new qb;let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=b[Z];return ie===void 0&&(ie=new Mf,b[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=b[Z];return ie===void 0&&(ie=new Mf,b[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=b[Z];return ie===void 0&&(ie=new Mf,b[Z]=ie),ie.getHandSpace()};function F(Z){const ie=T.indexOf(Z.inputSource);if(ie===-1)return;const ne=b[ie];ne!==void 0&&(ne.update(Z.inputSource,Z.frame,u||r),ne.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){a.removeEventListener("select",F),a.removeEventListener("selectstart",F),a.removeEventListener("selectend",F),a.removeEventListener("squeeze",F),a.removeEventListener("squeezestart",F),a.removeEventListener("squeezeend",F),a.removeEventListener("end",O),a.removeEventListener("inputsourceschange",U);for(let Z=0;Z<b.length;Z++){const ie=T[Z];ie!==null&&(T[Z]=null,b[Z].disconnect(ie))}N=null,H=null,m.reset();for(const Z in f)delete f[Z];e.setRenderTarget(M),p=null,c=null,d=null,a=null,_=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(a,n)),d},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(M=e.getRenderTarget(),a.addEventListener("select",F),a.addEventListener("selectstart",F),a.addEventListener("selectend",F),a.addEventListener("squeeze",F),a.addEventListener("squeezestart",F),a.addEventListener("squeezeend",F),a.addEventListener("end",O),a.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Ce=null,De=null;x.depth&&(De=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=x.stencil?ls:sa,Ce=x.stencil?Bl:Ai);const ye={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};d=this.getBinding(),c=d.createProjectionLayer(ye),a.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),_=new Ti(c.textureWidth,c.textureHeight,{format:oi,type:Jn,depthTexture:new wr(c.textureWidth,c.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const ne={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,ne),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ti(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),u=null,r=await a.requestReferenceSpace(l),Be.setContext(a),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(Z){for(let ie=0;ie<Z.removed.length;ie++){const ne=Z.removed[ie],Ce=T.indexOf(ne);Ce>=0&&(T[Ce]=null,b[Ce].disconnect(ne))}for(let ie=0;ie<Z.added.length;ie++){const ne=Z.added[ie];let Ce=T.indexOf(ne);if(Ce===-1){for(let ye=0;ye<b.length;ye++)if(ye>=T.length){T.push(ne),Ce=ye;break}else if(T[ye]===null){T[ye]=ne,Ce=ye;break}if(Ce===-1)break}const De=b[Ce];De&&De.connect(ne)}}const G=new q,k=new q;function ee(Z,ie,ne){G.setFromMatrixPosition(ie.matrixWorld),k.setFromMatrixPosition(ne.matrixWorld);const Ce=G.distanceTo(k),De=ie.projectionMatrix.elements,ye=ne.projectionMatrix.elements,st=De[14]/(De[10]-1),Fe=De[14]/(De[10]+1),$e=(De[9]+1)/De[5],Ne=(De[9]-1)/De[5],we=(De[8]-1)/De[0],Re=(ye[8]+1)/ye[0],ct=st*we,Zt=st*Re,jt=Ce/(-we+Re),At=jt*-we;if(ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(At),Z.translateZ(jt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),De[10]===-1)Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ft=st+jt,I=Fe+jt,_n=ct-At,rt=Zt+(Ce-At),C=$e*Fe/I*Ft,S=Ne*Fe/I*Ft;Z.projectionMatrix.makePerspective(_n,rt,C,S,Ft,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ie=Z.near,ne=Z.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),L.near=w.near=A.near=ie,L.far=w.far=A.far=ne,(N!==L.near||H!==L.far)&&(a.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,H=L.far),L.layers.mask=Z.layers.mask|6,A.layers.mask=L.layers.mask&-5,w.layers.mask=L.layers.mask&-3;const Ce=Z.parent,De=L.cameras;se(L,Ce);for(let ye=0;ye<De.length;ye++)se(De[ye],Ce);De.length===2?ee(L,A,w):L.projectionMatrix.copy(A.projectionMatrix),fe(Z,L,Ce)};function fe(Z,ie,ne){ne===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(ne.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Dd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(c===null&&p===null))return o},this.setFoveation=function(Z){o=Z,c!==null&&(c.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Z){return f[Z]};let Ve=null;function Ye(Z,ie){if(h=ie.getViewerPose(u||r),g=ie,h!==null){const ne=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Ce=!1;ne.length!==L.cameras.length&&(L.cameras.length=0,Ce=!0);for(let Fe=0;Fe<ne.length;Fe++){const $e=ne[Fe];let Ne=null;if(p!==null)Ne=p.getViewport($e);else{const Re=d.getViewSubImage(c,$e);Ne=Re.viewport,Fe===0&&(e.setRenderTargetTextures(_,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(_))}let we=D[Fe];we===void 0&&(we=new ri,we.layers.enable(Fe),we.viewport=new Ut,D[Fe]=we),we.matrix.fromArray($e.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray($e.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Fe===0&&(L.matrix.copy(we.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ce===!0&&L.cameras.push(we)}const De=a.enabledFeatures;if(De&&De.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Fe=d.getDepthInformation(ne[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,a.renderState)}if(De&&De.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Fe=0;Fe<ne.length;Fe++){const $e=ne[Fe].camera;if($e){let Ne=f[$e];Ne||(Ne=new FS,f[$e]=Ne);const we=d.getCameraImage($e);Ne.sourceTexture=we}}}}for(let ne=0;ne<b.length;ne++){const Ce=T[ne],De=b[ne];Ce!==null&&De!==void 0&&De.update(Ce,ie,u||r)}Ve&&Ve(Z,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Be=new zS;Be.setAnimationLoop(Ye),this.setAnimationLoop=function(Z){Ve=Z},this.dispose=function(){}}}const IC=new Vt,qS=new Pe;qS.set(-1,0,0,0,1,0,0,0,1);function BC(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,IS(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,x,M,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),c(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?o(m,f,x,M):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(IC.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(qS),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,x,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=M*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function zC(t,e,n,i){let a={},s={},r=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function o(_,b){const T=b.program;i.uniformBlockBinding(_,T)}function u(_,b){let T=a[_.id];T===void 0&&(m(_),T=h(_),a[_.id]=T,_.addEventListener("dispose",x));const R=b.program;i.updateUBOMapping(_,R);const v=e.render.frame;s[_.id]!==v&&(c(_),s[_.id]=v)}function h(_){const b=d();_.__bindingPointIndex=b;const T=t.createBuffer(),R=_.__size,v=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,R,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,T),T}function d(){for(let _=0;_<l;_++)if(r.indexOf(_)===-1)return r.push(_),_;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(_){const b=a[_.id],T=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let v=0,A=T.length;v<A;v++){const w=T[v];if(Array.isArray(w))for(let D=0,L=w.length;D<L;D++)p(w[D],v,D,R);else p(w,v,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,b,T,R){if(y(_,b,T,R)===!0){const v=_.__offset,A=_.value;if(Array.isArray(A)){let w=0;for(let D=0;D<A.length;D++){const L=A[D],N=f(L);g(L,_.__data,w),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(w+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,_.__data)}}function g(_,b,T){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,T)}function y(_,b,T,R){const v=_.value,A=b+"_"+T;if(R[A]===void 0)return typeof v=="number"||typeof v=="boolean"?R[A]=v:ArrayBuffer.isView(v)?R[A]=v.slice():R[A]=v.clone(),!0;{const w=R[A];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return R[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function m(_){const b=_.uniforms;let T=0;const R=16;for(let A=0,w=b.length;A<w;A++){const D=Array.isArray(b[A])?b[A]:[b[A]];for(let L=0,N=D.length;L<N;L++){const H=D[L],F=Array.isArray(H.value)?H.value:[H.value];for(let O=0,U=F.length;O<U;O++){const G=F[O],k=f(G),ee=T%R,se=ee%k.boundary,fe=ee+se;T+=se,fe!==0&&R-fe<k.storage&&(T+=R-fe),H.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=k.storage}}}const v=T%R;return v>0&&(T+=R-v),_.__size=T,_.__cache={},this}function f(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",_),b}function x(_){const b=_.target;b.removeEventListener("dispose",x);const T=r.indexOf(b.__bindingPointIndex);r.splice(T,1),t.deleteBuffer(a[b.id]),delete a[b.id],delete s[b.id]}function M(){for(const _ in a)t.deleteBuffer(a[_]);r=[],a={},s={}}return{bind:o,update:u,dispose:M}}const HC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function GC(){return mi===null&&(mi=new Nb(HC,16,16,xs,aa),mi.name="DFG_LUT",mi.minFilter=fn,mi.magFilter=fn,mi.wrapS=qi,mi.wrapT=qi,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class VC{constructor(e={}){const{canvas:n=ub(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:c=!1,outputBufferType:p=Jn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;const y=p,m=new Set([Vp,Gp,Hp]),f=new Set([Jn,Ai,Il,Bl,Bp,zp]),x=new Uint32Array(4),M=new Int32Array(4),_=new q;let b=null,T=null;const R=[],v=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let D=!1,L=null,N=null,H=null,F=null;this._outputColorSpace=kn;let O=0,U=0,G=null,k=-1,ee=null;const se=new Ut,fe=new Ut;let Ve=null;const Ye=new nt(0);let Be=0,Z=n.width,ie=n.height,ne=1,Ce=null,De=null;const ye=new Ut(0,0,Z,ie),st=new Ut(0,0,Z,ie);let Fe=!1;const $e=new OS;let Ne=!1,we=!1;const Re=new Vt,ct=new q,Zt=new Ut,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Ft(){return G===null?ne:1}let I=i;function _n(E,B){return n.getContext(E,B)}try{const E={alpha:!0,depth:a,stencil:s,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fp}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",_t,!1),n.addEventListener("webglcontextcreationerror",fi,!1),I===null){const B="webgl2";if(I=_n(B,E),I===null)throw _n(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw et("WebGLRenderer: "+E.message),E}let rt,C,S,z,W,K,ae,le,Q,$,oe,Ee,he,ue,Ae,Ue,ze,P,re,J,ce,ge,te;function Me(){rt=new G3(I),rt.init(),ce=new LC(I,rt),C=new N3(I,rt,e,ce),S=new DC(I,rt),C.reversedDepthBuffer&&c&&S.buffers.depth.setReversed(!0),N=I.createFramebuffer(),H=I.createFramebuffer(),F=I.createFramebuffer(),z=new k3(I),W=new gC,K=new UC(I,rt,S,W,C,ce,z),ae=new H3(w),le=new Zb(I),ge=new U3(I,le),Q=new V3(I,le,z,ge),$=new q3(I,Q,le,ge,z),P=new W3(I,C,K),Ae=new O3(W),oe=new mC(w,ae,rt,C,ge,Ae),Ee=new BC(w,W),he=new vC,ue=new TC(rt),ze=new D3(w,ae,S,$,g,o),Ue=new wC(w,$,C),te=new zC(I,z,C,S),re=new L3(I,rt,z),J=new X3(I,rt,z),z.programs=oe.programs,w.capabilities=C,w.extensions=rt,w.properties=W,w.renderLists=he,w.shadowMap=Ue,w.state=S,w.info=z}Me(),y!==Jn&&(A=new Z3(y,n.width,n.height,l,a,s));const xe=new FC(w,I);this.xr=xe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(Z,ie,!1))},this.getSize=function(E){return E.set(Z,ie)},this.setSize=function(E,B,Y=!0){if(xe.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,ie=B,n.width=Math.floor(E*ne),n.height=Math.floor(B*ne),Y===!0&&(n.style.width=E+"px",n.style.height=B+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Z*ne,ie*ne).floor()},this.setDrawingBufferSize=function(E,B,Y){Z=E,ie=B,ne=Y,n.width=Math.floor(E*Y),n.height=Math.floor(B*Y),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(y===Jn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(se)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,B,Y,V){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,B,Y,V),S.viewport(se.copy(ye).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(st)},this.setScissor=function(E,B,Y,V){E.isVector4?st.set(E.x,E.y,E.z,E.w):st.set(E,B,Y,V),S.scissor(fe.copy(st).multiplyScalar(ne).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(E){S.setScissorTest(Fe=E)},this.setOpaqueSort=function(E){Ce=E},this.setTransparentSort=function(E){De=E},this.getClearColor=function(E){return E.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,Y=!0){let V=0;if(E){let X=!1;if(G!==null){const me=G.texture.format;X=m.has(me)}if(X){const me=G.texture.type,ve=f.has(me),pe=ze.getClearColor(),Se=ze.getClearAlpha(),Te=pe.r,He=pe.g,ke=pe.b;ve?(x[0]=Te,x[1]=He,x[2]=ke,x[3]=Se,I.clearBufferuiv(I.COLOR,0,x)):(M[0]=Te,M[1]=He,M[2]=ke,M[3]=Se,I.clearBufferiv(I.COLOR,0,M))}else V|=I.COLOR_BUFFER_BIT}B&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",_t,!1),n.removeEventListener("webglcontextcreationerror",fi,!1),ze.dispose(),he.dispose(),ue.dispose(),W.dispose(),ae.dispose(),$.dispose(),ge.dispose(),te.dispose(),oe.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",em),xe.removeEventListener("sessionend",tm),Ya.stop()};function Rt(E){E.preventDefault(),mg("WebGLRenderer: Context Lost."),D=!0}function _t(){mg("WebGLRenderer: Context Restored."),D=!1;const E=z.autoReset,B=Ue.enabled,Y=Ue.autoUpdate,V=Ue.needsUpdate,X=Ue.type;Me(),z.autoReset=E,Ue.enabled=B,Ue.autoUpdate=Y,Ue.needsUpdate=V,Ue.type=X}function fi(E){et("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function hi(E){const B=E.target;B.removeEventListener("dispose",hi),YS(B)}function YS(E){ZS(E),W.remove(E)}function ZS(E){const B=W.get(E).programs;B!==void 0&&(B.forEach(function(Y){oe.releaseProgram(Y)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Y,V,X,me){B===null&&(B=jt);const ve=X.isMesh&&X.matrixWorld.determinantAffine()<0,pe=JS(E,B,Y,V,X);S.setMaterial(V,ve);let Se=Y.index,Te=1;if(V.wireframe===!0){if(Se=Q.getWireframeAttribute(Y),Se===void 0)return;Te=2}const He=Y.drawRange,ke=Y.attributes.position;let be=He.start*Te,ft=(He.start+He.count)*Te;me!==null&&(be=Math.max(be,me.start*Te),ft=Math.min(ft,(me.start+me.count)*Te)),Se!==null?(be=Math.max(be,0),ft=Math.min(ft,Se.count)):ke!=null&&(be=Math.max(be,0),ft=Math.min(ft,ke.count));const Lt=ft-be;if(Lt<0||Lt===1/0)return;ge.setup(X,V,pe,Y,Se);let Ct,pt=re;if(Se!==null&&(Ct=le.get(Se),pt=J,pt.setIndex(Ct)),X.isMesh)V.wireframe===!0?(S.setLineWidth(V.wireframeLinewidth*Ft()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(X.isLine){let ln=V.linewidth;ln===void 0&&(ln=1),S.setLineWidth(ln*Ft()),X.isLineSegments?pt.setMode(I.LINES):X.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else X.isPoints?pt.setMode(I.POINTS):X.isSprite&&pt.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))pt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ln=X._multiDrawStarts,_e=X._multiDrawCounts,Rn=X._multiDrawCount,je=Se?le.get(Se).bytesPerElement:1,Gn=W.get(V).currentProgram.getUniforms();for(let di=0;di<Rn;di++)Gn.setValue(I,"_gl_DrawID",di),pt.render(ln[di]/je,_e[di])}else if(X.isInstancedMesh)pt.renderInstances(be,Lt,X.count);else if(Y.isInstancedBufferGeometry){const ln=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,_e=Math.min(Y.instanceCount,ln);pt.renderInstances(be,Lt,_e)}else pt.render(be,Lt)};function jp(E,B,Y){E.transparent===!0&&E.side===Vi&&E.forceSinglePass===!1?(E.side=Tn,E.needsUpdate=!0,no(E,B,Y),E.side=ka,E.needsUpdate=!0,no(E,B,Y),E.side=Vi):no(E,B,Y)}this.compile=function(E,B,Y=null){Y===null&&(Y=E),T=ue.get(Y),T.init(B),v.push(T),Y.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),E!==Y&&E.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights();const V=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const me=X.material;if(me)if(Array.isArray(me))for(let ve=0;ve<me.length;ve++){const pe=me[ve];jp(pe,Y,X),V.add(pe)}else jp(me,Y,X),V.add(me)}),T=v.pop(),V},this.compileAsync=function(E,B,Y=null){const V=this.compile(E,B,Y);return new Promise(X=>{function me(){if(V.forEach(function(ve){W.get(ve).currentProgram.isReady()&&V.delete(ve)}),V.size===0){X(E);return}setTimeout(me,10)}rt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Sc=null;function KS(E){Sc&&Sc(E)}function em(){Ya.stop()}function tm(){Ya.start()}const Ya=new zS;Ya.setAnimationLoop(KS),typeof self<"u"&&Ya.setContext(self),this.setAnimationLoop=function(E){Sc=E,xe.setAnimationLoop(E),E===null?Ya.stop():Ya.start()},xe.addEventListener("sessionstart",em),xe.addEventListener("sessionend",tm),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(E,B);const Y=xe.enabled===!0&&xe.isPresenting===!0,V=A!==null&&(G===null||Y)&&A.begin(w,G);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(B),B=xe.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,B,G),T=ue.get(E,v.length),T.init(B),T.state.textureUnits=K.getTextureUnits(),v.push(T),Re.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$e.setFromProjectionMatrix(Re,Mi,B.reversedDepth),we=this.localClippingEnabled,Ne=Ae.init(this.clippingPlanes,we),b=he.get(E,R.length),b.init(),R.push(b),xe.enabled===!0&&xe.isPresenting===!0){const ve=w.xr.getDepthSensingMesh();ve!==null&&Mc(ve,B,-1/0,w.sortObjects)}Mc(E,B,0,w.sortObjects),b.finish(),w.sortObjects===!0&&b.sort(Ce,De,B.reversedDepth),At=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,At&&ze.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ne===!0&&Ae.beginShadows();const X=T.state.shadowsArray;if(Ue.render(X,E,B),Ne===!0&&Ae.endShadows(),(V&&A.hasRenderPass())===!1){const ve=b.opaque,pe=b.transmissive;if(T.setupLights(),B.isArrayCamera){const Se=B.cameras;if(pe.length>0)for(let Te=0,He=Se.length;Te<He;Te++){const ke=Se[Te];im(ve,pe,E,ke)}At&&ze.render(E);for(let Te=0,He=Se.length;Te<He;Te++){const ke=Se[Te];nm(b,E,ke,ke.viewport)}}else pe.length>0&&im(ve,pe,E,B),At&&ze.render(E),nm(b,E,B)}G!==null&&U===0&&(K.updateMultisampleRenderTarget(G),K.updateRenderTargetMipmap(G)),V&&A.end(w),E.isScene===!0&&E.onAfterRender(w,E,B),ge.resetDefaultState(),k=-1,ee=null,v.pop(),v.length>0?(T=v[v.length-1],K.setTextureUnits(T.state.textureUnits),Ne===!0&&Ae.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,L!==null&&L.renderEnd()};function Mc(E,B,Y,V){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$e.intersectsSprite(E)){V&&Zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);const ve=$.update(E),pe=E.material;pe.visible&&b.push(E,ve,pe,Y,Zt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$e.intersectsObject(E))){const ve=$.update(E),pe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Zt.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Zt.copy(ve.boundingSphere.center)),Zt.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(pe)){const Se=ve.groups;for(let Te=0,He=Se.length;Te<He;Te++){const ke=Se[Te],be=pe[ke.materialIndex];be&&be.visible&&b.push(E,ve,be,Y,Zt.z,ke)}}else pe.visible&&b.push(E,ve,pe,Y,Zt.z,null)}}const me=E.children;for(let ve=0,pe=me.length;ve<pe;ve++)Mc(me[ve],B,Y,V)}function nm(E,B,Y,V){const{opaque:X,transmissive:me,transparent:ve}=E;T.setupLightsView(Y),Ne===!0&&Ae.setGlobalState(w.clippingPlanes,Y),V&&S.viewport(se.copy(V)),X.length>0&&to(X,B,Y),me.length>0&&to(me,B,Y),ve.length>0&&to(ve,B,Y),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function im(E,B,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const be=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Ti(1,1,{generateMipmaps:!0,type:be?aa:Jn,minFilter:rs,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const me=T.state.transmissionRenderTarget[V.id],ve=V.viewport||se;me.setSize(ve.z*w.transmissionResolutionScale,ve.w*w.transmissionResolutionScale);const pe=w.getRenderTarget(),Se=w.getActiveCubeFace(),Te=w.getActiveMipmapLevel();w.setRenderTarget(me),w.getClearColor(Ye),Be=w.getClearAlpha(),Be<1&&w.setClearColor(16777215,.5),w.clear(),At&&ze.render(Y);const He=w.toneMapping;w.toneMapping=Ei;const ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Ne===!0&&Ae.setGlobalState(w.clippingPlanes,V),to(E,Y,V),K.updateMultisampleRenderTarget(me),K.updateRenderTargetMipmap(me),rt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ft=0,Lt=B.length;ft<Lt;ft++){const Ct=B[ft],{object:pt,geometry:ln,material:_e,group:Rn}=Ct;if(_e.side===Vi&&pt.layers.test(V.layers)){const je=_e.side;_e.side=Tn,_e.needsUpdate=!0,am(pt,Y,V,ln,_e,Rn),_e.side=je,_e.needsUpdate=!0,be=!0}}be===!0&&(K.updateMultisampleRenderTarget(me),K.updateRenderTargetMipmap(me))}w.setRenderTarget(pe,Se,Te),w.setClearColor(Ye,Be),ke!==void 0&&(V.viewport=ke),w.toneMapping=He}function to(E,B,Y){const V=B.isScene===!0?B.overrideMaterial:null;for(let X=0,me=E.length;X<me;X++){const ve=E[X],{object:pe,geometry:Se,group:Te}=ve;let He=ve.material;He.allowOverride===!0&&V!==null&&(He=V),pe.layers.test(Y.layers)&&am(pe,B,Y,Se,He,Te)}}function am(E,B,Y,V,X,me){E.onBeforeRender(w,B,Y,V,X,me),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(w,B,Y,V,E,me),X.transparent===!0&&X.side===Vi&&X.forceSinglePass===!1?(X.side=Tn,X.needsUpdate=!0,w.renderBufferDirect(Y,B,V,X,E,me),X.side=ka,X.needsUpdate=!0,w.renderBufferDirect(Y,B,V,X,E,me),X.side=Vi):w.renderBufferDirect(Y,B,V,X,E,me),E.onAfterRender(w,B,Y,V,X,me)}function no(E,B,Y){B.isScene!==!0&&(B=jt);const V=W.get(E),X=T.state.lights,me=T.state.shadowsArray,ve=X.state.version,pe=oe.getParameters(E,X.state,me,B,Y,T.state.lightProbeGridArray),Se=oe.getProgramCacheKey(pe);let Te=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;const He=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=ae.get(E.envMap||V.environment,He),V.envMapRotation=V.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",hi),Te=new Map,V.programs=Te);let ke=Te.get(Se);if(ke!==void 0){if(V.currentProgram===ke&&V.lightsStateVersion===ve)return rm(E,pe),ke}else pe.uniforms=oe.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,Y,pe),E.onBeforeCompile(pe,w),ke=oe.acquireProgram(pe,Se),Te.set(Se,ke),V.uniforms=pe.uniforms;const be=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(be.clippingPlanes=Ae.uniform),rm(E,pe),V.needsLights=jS(E),V.lightsStateVersion=ve,V.needsLights&&(be.ambientLightColor.value=X.state.ambient,be.lightProbe.value=X.state.probe,be.directionalLights.value=X.state.directional,be.directionalLightShadows.value=X.state.directionalShadow,be.spotLights.value=X.state.spot,be.spotLightShadows.value=X.state.spotShadow,be.rectAreaLights.value=X.state.rectArea,be.ltc_1.value=X.state.rectAreaLTC1,be.ltc_2.value=X.state.rectAreaLTC2,be.pointLights.value=X.state.point,be.pointLightShadows.value=X.state.pointShadow,be.hemisphereLights.value=X.state.hemi,be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,be.spotLightMatrix.value=X.state.spotLightMatrix,be.spotLightMap.value=X.state.spotLightMap,be.pointShadowMatrix.value=X.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=ke,V.uniformsList=null,ke}function sm(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=cu.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function rm(E,B){const Y=W.get(E);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function QS(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(B.matrixWorld);for(let Y=0,V=E.length;Y<V;Y++){const X=E[Y];if(X.texture!==null&&X.boundingBox.containsPoint(_))return X}return null}function JS(E,B,Y,V,X){B.isScene!==!0&&(B=jt),K.resetTextureUnits();const me=B.fog,ve=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,pe=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ke.workingColorSpace,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Te=ae.get(V.envMap||ve,Se),He=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ke=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!Y.morphAttributes.position,ft=!!Y.morphAttributes.normal,Lt=!!Y.morphAttributes.color;let Ct=Ei;V.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ct=w.toneMapping);const pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ln=pt!==void 0?pt.length:0,_e=W.get(V),Rn=T.state.lights;if(Ne===!0&&(we===!0||E!==ee)){const vt=E===ee&&V.id===k;Ae.setState(V,E,vt)}let je=!1;V.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Rn.state.version||_e.outputColorSpace!==pe||X.isBatchedMesh&&_e.batching===!1||!X.isBatchedMesh&&_e.batching===!0||X.isBatchedMesh&&_e.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&_e.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&_e.instancing===!1||!X.isInstancedMesh&&_e.instancing===!0||X.isSkinnedMesh&&_e.skinning===!1||!X.isSkinnedMesh&&_e.skinning===!0||X.isInstancedMesh&&_e.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&_e.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&_e.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&_e.instancingMorph===!1&&X.morphTexture!==null||_e.envMap!==Te||V.fog===!0&&_e.fog!==me||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ae.numPlanes||_e.numIntersection!==Ae.numIntersection)||_e.vertexAlphas!==He||_e.vertexTangents!==ke||_e.morphTargets!==be||_e.morphNormals!==ft||_e.morphColors!==Lt||_e.toneMapping!==Ct||_e.morphTargetsCount!==ln||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,_e.__version=V.version);let Gn=_e.currentProgram;je===!0&&(Gn=no(V,B,X),L&&V.isNodeMaterial&&L.onUpdateProgram(V,Gn,_e));let di=!1,oa=!1,Rs=!1;const mt=Gn.getUniforms(),Nt=_e.uniforms;if(S.useProgram(Gn.program)&&(di=!0,oa=!0,Rs=!0),V.id!==k&&(k=V.id,oa=!0),_e.needsLights){const vt=QS(T.state.lightProbeGridArray,X);_e.lightProbeGrid!==vt&&(_e.lightProbeGrid=vt,oa=!0)}if(di||ee!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),mt.setValue(I,"projectionMatrix",E.projectionMatrix),mt.setValue(I,"viewMatrix",E.matrixWorldInverse);const ca=mt.map.cameraPosition;ca!==void 0&&ca.setValue(I,ct.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&mt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),ee!==E&&(ee=E,oa=!0,Rs=!0)}if(_e.needsLights&&(Rn.state.directionalShadowMap.length>0&&mt.setValue(I,"directionalShadowMap",Rn.state.directionalShadowMap,K),Rn.state.spotShadowMap.length>0&&mt.setValue(I,"spotShadowMap",Rn.state.spotShadowMap,K),Rn.state.pointShadowMap.length>0&&mt.setValue(I,"pointShadowMap",Rn.state.pointShadowMap,K)),X.isSkinnedMesh){mt.setOptional(I,X,"bindMatrix"),mt.setOptional(I,X,"bindMatrixInverse");const vt=X.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),mt.setValue(I,"boneTexture",vt.boneTexture,K))}X.isBatchedMesh&&(mt.setOptional(I,X,"batchingTexture"),mt.setValue(I,"batchingTexture",X._matricesTexture,K),mt.setOptional(I,X,"batchingIdTexture"),mt.setValue(I,"batchingIdTexture",X._indirectTexture,K),mt.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&mt.setValue(I,"batchingColorTexture",X._colorsTexture,K));const ua=Y.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0)&&P.update(X,Y,Gn),(oa||_e.receiveShadow!==X.receiveShadow)&&(_e.receiveShadow=X.receiveShadow,mt.setValue(I,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(Nt.envMapIntensity.value=B.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=GC()),oa){if(mt.setValue(I,"toneMappingExposure",w.toneMappingExposure),_e.needsLights&&$S(Nt,Rs),me&&V.fog===!0&&Ee.refreshFogUniforms(Nt,me),Ee.refreshMaterialUniforms(Nt,V,ne,ie,T.state.transmissionRenderTarget[E.id]),_e.needsLights&&_e.lightProbeGrid){const vt=_e.lightProbeGrid;Nt.probesSH.value=vt.texture,Nt.probesMin.value.copy(vt.boundingBox.min),Nt.probesMax.value.copy(vt.boundingBox.max),Nt.probesResolution.value.copy(vt.resolution)}cu.upload(I,sm(_e),Nt,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(cu.upload(I,sm(_e),Nt,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&mt.setValue(I,"center",X.center),mt.setValue(I,"modelViewMatrix",X.modelViewMatrix),mt.setValue(I,"normalMatrix",X.normalMatrix),mt.setValue(I,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){const vt=V.uniformsGroups;for(let ca=0,Cs=vt.length;ca<Cs;ca++){const lm=vt[ca];te.update(lm,Gn),te.bind(lm,Gn)}}return Gn}function $S(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function jS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(E,B,Y){const V=W.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=B,W.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const Y=W.get(E);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Y=0){G=E,O=B,U=Y;let V=null,X=!1,me=!1;if(E){const pe=W.get(E);if(pe.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(I.FRAMEBUFFER,pe.__webglFramebuffer),se.copy(E.viewport),fe.copy(E.scissor),Ve=E.scissorTest,S.viewport(se),S.scissor(fe),S.setScissorTest(Ve),k=-1;return}else if(pe.__webglFramebuffer===void 0)K.setupRenderTarget(E);else if(pe.__hasExternalTextures)K.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(pe.__boundDepthTexture!==He){if(He!==null&&W.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(E)}}const Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);const Te=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Te[B])?V=Te[B][Y]:V=Te[B],X=!0):E.samples>0&&K.useMultisampledRTT(E)===!1?V=W.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?V=Te[Y]:V=Te,se.copy(E.viewport),fe.copy(E.scissor),Ve=E.scissorTest}else se.copy(ye).multiplyScalar(ne).floor(),fe.copy(st).multiplyScalar(ne).floor(),Ve=Fe;if(Y!==0&&(V=N),S.bindFramebuffer(I.FRAMEBUFFER,V)&&S.drawBuffers(E,V),S.viewport(se),S.scissor(fe),S.setScissorTest(Ve),X){const pe=W.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,pe.__webglTexture,Y)}else if(me){const pe=B;for(let Se=0;Se<E.textures.length;Se++){const Te=W.get(E.textures[Se]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Se,Te.__webglTexture,Y,pe)}}else if(E!==null&&Y!==0){const pe=W.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,Y)}k=-1},this.readRenderTargetPixels=function(E,B,Y,V,X,me,ve,pe=0){if(!(E&&E.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){S.bindFramebuffer(I.FRAMEBUFFER,Se);try{const Te=E.textures[pe],He=Te.format,ke=Te.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),!C.textureFormatReadable(He)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(ke)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-V&&Y>=0&&Y<=E.height-X&&I.readPixels(B,Y,V,X,ce.convert(He),ce.convert(ke),me)}finally{const Te=G!==null?W.get(G).__webglFramebuffer:null;S.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,B,Y,V,X,me,ve,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se)if(B>=0&&B<=E.width-V&&Y>=0&&Y<=E.height-X){S.bindFramebuffer(I.FRAMEBUFFER,Se);const Te=E.textures[pe],He=Te.format,ke=Te.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),!C.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.bufferData(I.PIXEL_PACK_BUFFER,me.byteLength,I.STREAM_READ),I.readPixels(B,Y,V,X,ce.convert(He),ce.convert(ke),0);const ft=G!==null?W.get(G).__webglFramebuffer:null;S.bindFramebuffer(I.FRAMEBUFFER,ft);const Lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await cb(I,Lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,me),I.deleteBuffer(be),I.deleteSync(Lt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,Y=0){const V=Math.pow(2,-Y),X=Math.floor(E.image.width*V),me=Math.floor(E.image.height*V),ve=B!==null?B.x:0,pe=B!==null?B.y:0;K.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,ve,pe,X,me),S.unbindTexture()},this.copyTextureToTexture=function(E,B,Y=null,V=null,X=0,me=0){let ve,pe,Se,Te,He,ke,be,ft,Lt;const Ct=E.isCompressedTexture?E.mipmaps[me]:E.image;if(Y!==null)ve=Y.max.x-Y.min.x,pe=Y.max.y-Y.min.y,Se=Y.isBox3?Y.max.z-Y.min.z:1,Te=Y.min.x,He=Y.min.y,ke=Y.isBox3?Y.min.z:0;else{const Nt=Math.pow(2,-X);ve=Math.floor(Ct.width*Nt),pe=Math.floor(Ct.height*Nt),E.isDataArrayTexture?Se=Ct.depth:E.isData3DTexture?Se=Math.floor(Ct.depth*Nt):Se=1,Te=0,He=0,ke=0}V!==null?(be=V.x,ft=V.y,Lt=V.z):(be=0,ft=0,Lt=0);const pt=ce.convert(B.format),ln=ce.convert(B.type);let _e;B.isData3DTexture?(K.setTexture3D(B,0),_e=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),_e=I.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),_e=I.TEXTURE_2D),S.activeTexture(I.TEXTURE0),S.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Rn=S.getParameter(I.UNPACK_ROW_LENGTH),je=S.getParameter(I.UNPACK_IMAGE_HEIGHT),Gn=S.getParameter(I.UNPACK_SKIP_PIXELS),di=S.getParameter(I.UNPACK_SKIP_ROWS),oa=S.getParameter(I.UNPACK_SKIP_IMAGES);S.pixelStorei(I.UNPACK_ROW_LENGTH,Ct.width),S.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ct.height),S.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),S.pixelStorei(I.UNPACK_SKIP_ROWS,He),S.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const Rs=E.isDataArrayTexture||E.isData3DTexture,mt=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Nt=W.get(E),ua=W.get(B),vt=W.get(Nt.__renderTarget),ca=W.get(ua.__renderTarget);S.bindFramebuffer(I.READ_FRAMEBUFFER,vt.__webglFramebuffer),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,ca.__webglFramebuffer);for(let Cs=0;Cs<Se;Cs++)Rs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(E).__webglTexture,X,ke+Cs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(B).__webglTexture,me,Lt+Cs)),I.blitFramebuffer(Te,He,ve,pe,be,ft,ve,pe,I.DEPTH_BUFFER_BIT,I.NEAREST);S.bindFramebuffer(I.READ_FRAMEBUFFER,null),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||W.has(E)){const Nt=W.get(E),ua=W.get(B);S.bindFramebuffer(I.READ_FRAMEBUFFER,H),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,F);for(let vt=0;vt<Se;vt++)Rs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nt.__webglTexture,X,ke+vt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nt.__webglTexture,X),mt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ua.__webglTexture,me,Lt+vt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ua.__webglTexture,me),X!==0?I.blitFramebuffer(Te,He,ve,pe,be,ft,ve,pe,I.COLOR_BUFFER_BIT,I.NEAREST):mt?I.copyTexSubImage3D(_e,me,be,ft,Lt+vt,Te,He,ve,pe):I.copyTexSubImage2D(_e,me,be,ft,Te,He,ve,pe);S.bindFramebuffer(I.READ_FRAMEBUFFER,null),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else mt?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(_e,me,be,ft,Lt,ve,pe,Se,pt,ln,Ct.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(_e,me,be,ft,Lt,ve,pe,Se,pt,Ct.data):I.texSubImage3D(_e,me,be,ft,Lt,ve,pe,Se,pt,ln,Ct):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,me,be,ft,ve,pe,pt,ln,Ct.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,me,be,ft,Ct.width,Ct.height,pt,Ct.data):I.texSubImage2D(I.TEXTURE_2D,me,be,ft,ve,pe,pt,ln,Ct);S.pixelStorei(I.UNPACK_ROW_LENGTH,Rn),S.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je),S.pixelStorei(I.UNPACK_SKIP_PIXELS,Gn),S.pixelStorei(I.UNPACK_SKIP_ROWS,di),S.pixelStorei(I.UNPACK_SKIP_IMAGES,oa),me===0&&B.generateMipmaps&&I.generateMipmap(_e),S.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&K.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?K.setTextureCube(E,0):E.isData3DTexture?K.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?K.setTexture2DArray(E,0):K.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){O=0,U=0,G=null,S.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}const XC=`
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,kC=`
precision highp float;

uniform float uTime, uAttenuation, uLineThickness;
uniform float uBaseRadius, uRadiusStep, uScaleRate;
uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;
uniform float uFadeIn, uFadeOut;
uniform float uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst;
uniform float uCoverageAlpha;
uniform vec2 uResolution, uMouse;
uniform vec3 uColor, uColorTwo;
uniform int uRingCount;

const float HP = 1.5707963;
const float CYCLE = 3.45;

float fade(float t) {
  return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
}

float ring(vec2 p, float ri, float cut, float t0, float px) {
  float t = mod(uTime + t0, CYCLE);
  float r = ri + t / CYCLE * uScaleRate;
  float d = abs(length(p) - r);
  float a = atan(abs(p.y), abs(p.x)) / HP;
  float th = max(1.0 - a, 0.5) * px * uLineThickness;
  float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;
  d += pow(cut * a, 3.0) * r;
  return h * exp(-uAttenuation * d) * fade(t);
}

void main() {
  float px = 1.0 / min(uResolution.x, uResolution.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;
  float cr = cos(uRotation), sr = sin(uRotation);
  p = mat2(cr, -sr, sr, cr) * p;
  p -= uMouse * uMouseInfluence;
  float sc = mix(1.0, uHoverScale, uHoverAmount) + uBurst * 0.3;
  p /= sc;
  vec3 c = vec3(0.0);
  float coverage = 0.0;
  float rcf = max(float(uRingCount) - 1.0, 1.0);
  for (int i = 0; i < 10; i++) {
    if (i >= uRingCount) break;
    float fi = float(i);
    vec2 pr = p - fi * uParallax * uMouse;
    vec3 rc = mix(uColor, uColorTwo, fi / rcf);
    float ringAmount = ring(pr, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px);
    c = mix(c, rc, vec3(ringAmount));
    coverage = max(coverage, ringAmount);
  }
  c *= 1.0 + uBurst * 2.0;
  float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
  c += (n - 0.5) * uNoiseAmount;
  float intensity = max(c.r, max(c.g, c.b));
  vec3 emissiveColor = intensity > 0.0001 ? clamp(c / intensity, 0.0, 1.0) : vec3(0.0);
  vec3 outputColor = mix(emissiveColor, clamp(c, 0.0, 1.0), uCoverageAlpha);
  float outputAlpha = mix(intensity, coverage, uCoverageAlpha);
  gl_FragColor = vec4(outputColor, clamp(outputAlpha * uOpacity, 0.0, 1.0));
}
`;function WC({color:t="#fc42ff",colorTwo:e="#42fcff",speed:n=1,ringCount:i=6,attenuation:a=10,lineThickness:s=2,baseRadius:r=.35,radiusStep:l=.1,scaleRate:o=.1,opacity:u=1,blur:h=0,noiseAmount:d=.1,rotation:c=0,ringGap:p=1.5,fadeIn:g=.7,fadeOut:y=.5,followMouse:m=!1,mouseInfluence:f=.2,hoverScale:x=1.2,parallax:M=.05,clickBurst:_=!1,alphaMode:b="luminance"}){const T=bt.useRef(null),R=bt.useRef(null),v=bt.useRef([0,0]),A=bt.useRef([0,0]),w=bt.useRef(0),D=bt.useRef(!1),L=bt.useRef(0);return R.current={color:t,colorTwo:e,speed:n,ringCount:i,attenuation:a,lineThickness:s,baseRadius:r,radiusStep:l,scaleRate:o,opacity:u,noiseAmount:d,rotation:c,ringGap:p,fadeIn:g,fadeOut:y,followMouse:m,mouseInfluence:f,hoverScale:x,parallax:M,clickBurst:_,alphaMode:b},bt.useEffect(()=>{const N=T.current;if(!N)return;let H;try{H=new VC({alpha:!0})}catch{return}if(!H.capabilities.isWebGL2){H.dispose();return}H.setClearColor(0,0),N.appendChild(H.domElement);const F=new Ab,O=new Yp(-.5,.5,.5,-.5,.1,10);O.position.z=1;const U={uTime:{value:0},uAttenuation:{value:0},uResolution:{value:new tt},uColor:{value:new nt},uColorTwo:{value:new nt},uLineThickness:{value:0},uBaseRadius:{value:0},uRadiusStep:{value:0},uScaleRate:{value:0},uRingCount:{value:0},uOpacity:{value:1},uNoiseAmount:{value:0},uRotation:{value:0},uRingGap:{value:1.6},uFadeIn:{value:.5},uFadeOut:{value:.75},uMouse:{value:new tt},uMouseInfluence:{value:0},uHoverAmount:{value:0},uHoverScale:{value:1},uParallax:{value:0},uBurst:{value:0},uCoverageAlpha:{value:0}},G=new ui({vertexShader:XC,fragmentShader:kC,uniforms:U,transparent:!0}),k=new Ri(new eo(1,1),G);F.add(k);const ee=()=>{const we=N.clientWidth,Re=N.clientHeight,ct=Math.min(window.devicePixelRatio,2);H.setSize(we,Re),H.setPixelRatio(ct),U.uResolution.value.set(we*ct,Re*ct)};ee(),window.addEventListener("resize",ee);const se=new ResizeObserver(ee);se.observe(N);const fe=we=>{const Re=N.getBoundingClientRect();v.current[0]=(we.clientX-Re.left)/Re.width-.5,v.current[1]=-((we.clientY-Re.top)/Re.height-.5)},Ve=()=>{D.current=!0},Ye=()=>{D.current=!1,v.current[0]=0,v.current[1]=0},Be=()=>{L.current=1};N.addEventListener("mousemove",fe),N.addEventListener("mouseenter",Ve),N.addEventListener("mouseleave",Ye),N.addEventListener("click",Be);let Z=0,ie=!1,ne=!document.hidden,Ce=0,De=0;const ye=we=>{Z=requestAnimationFrame(ye);const Re=R.current,ct=De===0?0:Math.min(we-De,100);De=we,Ce+=ct*.001*Re.speed,A.current[0]+=(v.current[0]-A.current[0])*.08,A.current[1]+=(v.current[1]-A.current[1])*.08,w.current+=((D.current?1:0)-w.current)*.08,L.current*=.95,L.current<.001&&(L.current=0),U.uTime.value=Ce,U.uAttenuation.value=Re.attenuation,U.uColor.value.set(Re.color),U.uColorTwo.value.set(Re.colorTwo),U.uLineThickness.value=Re.lineThickness,U.uBaseRadius.value=Re.baseRadius,U.uRadiusStep.value=Re.radiusStep,U.uScaleRate.value=Re.scaleRate,U.uRingCount.value=Re.ringCount,U.uOpacity.value=Re.opacity,U.uNoiseAmount.value=Re.noiseAmount,U.uRotation.value=Re.rotation*Math.PI/180,U.uRingGap.value=Re.ringGap,U.uFadeIn.value=Re.fadeIn,U.uFadeOut.value=Re.fadeOut,U.uMouse.value.set(A.current[0],A.current[1]),U.uMouseInfluence.value=Re.followMouse?Re.mouseInfluence:0,U.uHoverAmount.value=w.current,U.uHoverScale.value=Re.hoverScale,U.uParallax.value=Re.parallax,U.uBurst.value=Re.clickBurst?L.current:0,U.uCoverageAlpha.value=Re.alphaMode==="coverage"?1:0,H.render(F,O)};Z=0;const st=()=>{ie&&ne&&Z===0&&(De=0,Z=requestAnimationFrame(ye))},Fe=()=>{Z!==0&&(cancelAnimationFrame(Z),Z=0)},$e=new IntersectionObserver(([we])=>{ie=we.isIntersecting,ie?st():Fe()},{threshold:0});$e.observe(N);const Ne=()=>{ne=!document.hidden,ne?st():Fe()};return document.addEventListener("visibilitychange",Ne),st(),()=>{Fe(),$e.disconnect(),document.removeEventListener("visibilitychange",Ne),window.removeEventListener("resize",ee),se.disconnect(),N.removeEventListener("mousemove",fe),N.removeEventListener("mouseenter",Ve),N.removeEventListener("mouseleave",Ye),N.removeEventListener("click",Be),N.removeChild(H.domElement),H.dispose(),G.dispose()}},[]),Xt.jsx("div",{ref:T,className:"magic-rings-container",style:h>0?{filter:`blur(${h}px)`}:void 0})}const qC="/motion/assets/UP-Logo-white-DTWzi9SC.svg",a_=[MT,bT,wT,WC],YC=5e3,ZC=1e3;function KC(){const[t,e]=bt.useState([{id:0,effectIndex:0,leaving:!1}]),n=bt.useRef(0),i=bt.useRef(1);return bt.useEffect(()=>{const a=new Set,s=window.setInterval(()=>{n.current=(n.current+1)%a_.length;const r={id:i.current,effectIndex:n.current,leaving:!1};i.current+=1,e(o=>[...o.map(u=>({...u,leaving:!0})),r]);const l=window.setTimeout(()=>{e(o=>o.filter(u=>!u.leaving)),a.delete(l)},ZC);a.add(l)},YC);return()=>{window.clearInterval(s),a.forEach(r=>window.clearTimeout(r))}},[]),Xt.jsxs("div",{className:"stage",children:[Xt.jsx("div",{className:"effects","aria-hidden":"true",children:t.map(a=>{const s=a_[a.effectIndex];return Xt.jsx("div",{className:`effect-layer ${a.leaving?"is-leaving":"is-entering"}`,children:Xt.jsx(s,{})},a.id)})}),Xt.jsxs("main",{className:"brand","aria-label":"Unlimited Power",children:[Xt.jsx("img",{className:"logo",src:qC,alt:"Unlimited Power"}),Xt.jsxs("p",{className:"tagline",children:[Xt.jsx("span",{className:"sr-only",children:"Building your future..."}),Xt.jsx("span",{"aria-hidden":"true",children:"Building your future"}),Xt.jsxs("span",{className:"loading-dots","aria-hidden":"true",children:[Xt.jsx("span",{children:"."}),Xt.jsx("span",{children:"."}),Xt.jsx("span",{children:"."})]})]})]})]})}Q1.createRoot(document.getElementById("root")).render(Xt.jsx(bt.StrictMode,{children:Xt.jsx(KC,{})}));
