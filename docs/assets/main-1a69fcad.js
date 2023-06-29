var Ev=Object.defineProperty;var Tv=(e,a,n)=>a in e?Ev(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n;var le=(e,a,n)=>(Tv(e,typeof a!="symbol"?a+"":a,n),n);var Xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ef(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tf={exports:{}},xi={},$f={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=Symbol.for("react.element"),$v=Symbol.for("react.portal"),Nv=Symbol.for("react.fragment"),bv=Symbol.for("react.strict_mode"),Lv=Symbol.for("react.profiler"),Rv=Symbol.for("react.provider"),Pv=Symbol.for("react.context"),Bv=Symbol.for("react.forward_ref"),Kv=Symbol.for("react.suspense"),Dv=Symbol.for("react.memo"),Iv=Symbol.for("react.lazy"),qu=Symbol.iterator;function _v(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var Nf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bf=Object.assign,Lf={};function Xn(e,a,n){this.props=e,this.context=a,this.refs=Lf,this.updater=n||Nf}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,a){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rf(){}Rf.prototype=Xn.prototype;function Is(e,a,n){this.props=e,this.context=a,this.refs=Lf,this.updater=n||Nf}var _s=Is.prototype=new Rf;_s.constructor=Is;bf(_s,Xn.prototype);_s.isPureReactComponent=!0;var ec=Array.isArray,Pf=Object.prototype.hasOwnProperty,Os={current:null},Bf={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,a,n){var r,t={},i=null,o=null;if(a!=null)for(r in a.ref!==void 0&&(o=a.ref),a.key!==void 0&&(i=""+a.key),a)Pf.call(a,r)&&!Bf.hasOwnProperty(r)&&(t[r]=a[r]);var l=arguments.length-2;if(l===1)t.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];t.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)t[r]===void 0&&(t[r]=l[r]);return{$$typeof:rt,type:e,key:i,ref:o,props:t,_owner:Os.current}}function Ov(e,a){return{$$typeof:rt,type:e.type,key:a,ref:e.ref,props:e.props,_owner:e._owner}}function js(e){return typeof e=="object"&&e!==null&&e.$$typeof===rt}function jv(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return a[n]})}var ac=/\/+/g;function Co(e,a){return typeof e=="object"&&e!==null&&e.key!=null?jv(""+e.key):a.toString(36)}function Zt(e,a,n,r,t){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case rt:case $v:o=!0}}if(o)return o=e,t=t(o),e=r===""?"."+Co(o,0):r,ec(t)?(n="",e!=null&&(n=e.replace(ac,"$&/")+"/"),Zt(t,a,n,"",function(u){return u})):t!=null&&(js(t)&&(t=Ov(t,n+(!t.key||o&&o.key===t.key?"":(""+t.key).replace(ac,"$&/")+"/")+e)),a.push(t)),1;if(o=0,r=r===""?".":r+":",ec(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Co(i,l);o+=Zt(i,a,n,s,t)}else if(s=_v(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Co(i,l++),o+=Zt(i,a,n,s,t);else if(i==="object")throw a=String(e),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return o}function pt(e,a,n){if(e==null)return e;var r=[],t=0;return Zt(e,r,"","",function(i){return a.call(n,i,t++)}),r}function zv(e){if(e._status===-1){var a=e._result;a=a(),a.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=a)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Yt={transition:null},xv={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Yt,ReactCurrentOwner:Os};R.Children={map:pt,forEach:function(e,a,n){pt(e,function(){a.apply(this,arguments)},n)},count:function(e){var a=0;return pt(e,function(){a++}),a},toArray:function(e){return pt(e,function(a){return a})||[]},only:function(e){if(!js(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Xn;R.Fragment=Nv;R.Profiler=Lv;R.PureComponent=Is;R.StrictMode=bv;R.Suspense=Kv;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xv;R.cloneElement=function(e,a,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bf({},e.props),t=e.key,i=e.ref,o=e._owner;if(a!=null){if(a.ref!==void 0&&(i=a.ref,o=Os.current),a.key!==void 0&&(t=""+a.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in a)Pf.call(a,s)&&!Bf.hasOwnProperty(s)&&(r[s]=a[s]===void 0&&l!==void 0?l[s]:a[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:rt,type:e.type,key:t,ref:i,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:Pv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rv,_context:e},e.Consumer=e};R.createElement=Kf;R.createFactory=function(e){var a=Kf.bind(null,e);return a.type=e,a};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Bv,render:e}};R.isValidElement=js;R.lazy=function(e){return{$$typeof:Iv,_payload:{_status:-1,_result:e},_init:zv}};R.memo=function(e,a){return{$$typeof:Dv,type:e,compare:a===void 0?null:a}};R.startTransition=function(e){var a=Yt.transition;Yt.transition={};try{e()}finally{Yt.transition=a}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,a){return me.current.useCallback(e,a)};R.useContext=function(e){return me.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return me.current.useDeferredValue(e)};R.useEffect=function(e,a){return me.current.useEffect(e,a)};R.useId=function(){return me.current.useId()};R.useImperativeHandle=function(e,a,n){return me.current.useImperativeHandle(e,a,n)};R.useInsertionEffect=function(e,a){return me.current.useInsertionEffect(e,a)};R.useLayoutEffect=function(e,a){return me.current.useLayoutEffect(e,a)};R.useMemo=function(e,a){return me.current.useMemo(e,a)};R.useReducer=function(e,a,n){return me.current.useReducer(e,a,n)};R.useRef=function(e){return me.current.useRef(e)};R.useState=function(e){return me.current.useState(e)};R.useSyncExternalStore=function(e,a,n){return me.current.useSyncExternalStore(e,a,n)};R.useTransition=function(){return me.current.useTransition()};R.version="18.2.0";$f.exports=R;var be=$f.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=be,Gv=Symbol.for("react.element"),Jv=Symbol.for("react.fragment"),Hv=Object.prototype.hasOwnProperty,Vv=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wv={key:!0,ref:!0,__self:!0,__source:!0};function Df(e,a,n){var r,t={},i=null,o=null;n!==void 0&&(i=""+n),a.key!==void 0&&(i=""+a.key),a.ref!==void 0&&(o=a.ref);for(r in a)Hv.call(a,r)&&!Wv.hasOwnProperty(r)&&(t[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps,a)t[r]===void 0&&(t[r]=a[r]);return{$$typeof:Gv,type:e,key:i,ref:o,props:t,_owner:Vv.current}}xi.Fragment=Jv;xi.jsx=Df;xi.jsxs=Df;Tf.exports=xi;var p=Tf.exports,Sl={},If={exports:{}},Be={},_f={exports:{}},Of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function a(E,b){var L=E.length;E.push(b);e:for(;0<L;){var V=L-1>>>1,q=E[V];if(0<t(q,b))E[V]=b,E[L]=q,L=V;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var b=E[0],L=E.pop();if(L!==b){E[0]=L;e:for(var V=0,q=E.length,mt=q>>>1;V<mt;){var Wa=2*(V+1)-1,wo=E[Wa],Ua=Wa+1,vt=E[Ua];if(0>t(wo,L))Ua<q&&0>t(vt,wo)?(E[V]=vt,E[Ua]=L,V=Ua):(E[V]=wo,E[Wa]=L,V=Wa);else if(Ua<q&&0>t(vt,L))E[V]=vt,E[Ua]=L,V=Ua;else break e}}return b}function t(E,b){var L=E.sortIndex-b.sortIndex;return L!==0?L:E.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],c=1,d=null,f=3,m=!1,g=!1,k=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=E)r(u),b.sortIndex=b.expirationTime,a(s,b);else break;b=n(u)}}function S(E){if(k=!1,v(E),!g)if(n(s)!==null)g=!0,Ao(C);else{var b=n(u);b!==null&&ko(S,b.startTime-E)}}function C(E,b){g=!1,k&&(k=!1,h(N),N=-1),m=!0;var L=f;try{for(v(b),d=n(s);d!==null&&(!(d.expirationTime>b)||E&&!Ge());){var V=d.callback;if(typeof V=="function"){d.callback=null,f=d.priorityLevel;var q=V(d.expirationTime<=b);b=e.unstable_now(),typeof q=="function"?d.callback=q:d===n(s)&&r(s),v(b)}else r(s);d=n(s)}if(d!==null)var mt=!0;else{var Wa=n(u);Wa!==null&&ko(S,Wa.startTime-b),mt=!1}return mt}finally{d=null,f=L,m=!1}}var T=!1,$=null,N=-1,H=5,P=-1;function Ge(){return!(e.unstable_now()-P<H)}function sr(){if($!==null){var E=e.unstable_now();P=E;var b=!0;try{b=$(!0,E)}finally{b?ur():(T=!1,$=null)}}else T=!1}var ur;if(typeof y=="function")ur=function(){y(sr)};else if(typeof MessageChannel<"u"){var Qu=new MessageChannel,Mv=Qu.port2;Qu.port1.onmessage=sr,ur=function(){Mv.postMessage(null)}}else ur=function(){w(sr,0)};function Ao(E){$=E,T||(T=!0,ur())}function ko(E,b){N=w(function(){E(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,Ao(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(f){case 1:case 2:case 3:var b=3;break;default:b=f}var L=f;f=b;try{return E()}finally{f=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,b){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=f;f=E;try{return b()}finally{f=L}},e.unstable_scheduleCallback=function(E,b,L){var V=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?V+L:V):L=V,E){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=L+q,E={id:c++,callback:b,priorityLevel:E,startTime:L,expirationTime:q,sortIndex:-1},L>V?(E.sortIndex=L,a(u,E),n(s)===null&&E===n(u)&&(k?(h(N),N=-1):k=!0,ko(S,L-V))):(E.sortIndex=q,a(s,E),g||m||(g=!0,Ao(C))),E},e.unstable_shouldYield=Ge,e.unstable_wrapCallback=function(E){var b=f;return function(){var L=f;f=b;try{return E.apply(this,arguments)}finally{f=L}}}})(Of);_f.exports=Of;var Uv=_f.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf=be,Pe=Uv;function A(e){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zf=new Set,zr={};function fn(e,a){xn(e,a),xn(e+"Capture",a)}function xn(e,a){for(zr[e]=a,e=0;e<a.length;e++)zf.add(a[e])}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=Object.prototype.hasOwnProperty,Zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nc={},rc={};function Yv(e){return Al.call(rc,e)?!0:Al.call(nc,e)?!1:Zv.test(e)?rc[e]=!0:(nc[e]=!0,!1)}function Qv(e,a,n,r){if(n!==null&&n.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xv(e,a,n,r){if(a===null||typeof a>"u"||Qv(e,a,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function ve(e,a,n,r,t,i,o){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=r,this.attributeNamespace=t,this.mustUseProperty=n,this.propertyName=e,this.type=a,this.sanitizeURL=i,this.removeEmptyString=o}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var a=e[0];oe[a]=new ve(a,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var zs=/[\-:]([a-z])/g;function xs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var a=e.replace(zs,xs);oe[a]=new ve(a,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var a=e.replace(zs,xs);oe[a]=new ve(a,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var a=e.replace(zs,xs);oe[a]=new ve(a,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fs(e,a,n,r){var t=oe.hasOwnProperty(a)?oe[a]:null;(t!==null?t.type!==0:r||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(Xv(a,n,t,r)&&(n=null),r||t===null?Yv(a)&&(n===null?e.removeAttribute(a):e.setAttribute(a,""+n)):t.mustUseProperty?e[t.propertyName]=n===null?t.type===3?!1:"":n:(a=t.attributeName,r=t.attributeNamespace,n===null?e.removeAttribute(a):(t=t.type,n=t===3||t===4&&n===!0?"":""+n,r?e.setAttributeNS(r,a,n):e.setAttribute(a,n))))}var va=jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gt=Symbol.for("react.element"),kn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Gs=Symbol.for("react.strict_mode"),kl=Symbol.for("react.profiler"),xf=Symbol.for("react.provider"),Ff=Symbol.for("react.context"),Js=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),Hs=Symbol.for("react.memo"),ka=Symbol.for("react.lazy"),Gf=Symbol.for("react.offscreen"),tc=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var x=Object.assign,Mo;function Mr(e){if(Mo===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Mo=a&&a[1]||""}return`
`+Mo+e}var Eo=!1;function To(e,a){if(!e||Eo)return"";Eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(u){var r=u}Reflect.construct(e,[],a)}else{try{a.call()}catch(u){r=u}e.call(a.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var t=u.stack.split(`
`),i=r.stack.split(`
`),o=t.length-1,l=i.length-1;1<=o&&0<=l&&t[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(t[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||t[o]!==i[l]){var s=`
`+t[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Eo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mr(e):""}function qv(e){switch(e.tag){case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return e=To(e.type,!1),e;case 11:return e=To(e.type.render,!1),e;case 1:return e=To(e.type,!0),e;default:return""}}function Ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case kn:return"Portal";case kl:return"Profiler";case Gs:return"StrictMode";case wl:return"Suspense";case Cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ff:return(e.displayName||"Context")+".Consumer";case xf:return(e._context.displayName||"Context")+".Provider";case Js:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hs:return a=e.displayName||null,a!==null?a:Ml(e.type)||"Memo";case ka:a=e._payload,e=e._init;try{return Ml(e(a))}catch{}}return null}function ep(e){var a=e.type;switch(e.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=a.render,e=e.displayName||e.name||"",a.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(a);case 8:return a===Gs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function _a(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jf(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ap(e){var a=Jf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),r=""+e[a];if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var t=n.get,i=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return t.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function St(e){e._valueTracker||(e._valueTracker=ap(e))}function Hf(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),r="";return e&&(r=Jf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(a.setValue(e),!0):!1}function ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function El(e,a){var n=a.checked;return x({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ic(e,a){var n=a.defaultValue==null?"":a.defaultValue,r=a.checked!=null?a.checked:a.defaultChecked;n=_a(a.value!=null?a.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Vf(e,a){a=a.checked,a!=null&&Fs(e,"checked",a,!1)}function Tl(e,a){Vf(e,a);var n=_a(a.value),r=a.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}a.hasOwnProperty("value")?$l(e,a.type,n):a.hasOwnProperty("defaultValue")&&$l(e,a.type,_a(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(e.defaultChecked=!!a.defaultChecked)}function oc(e,a,n){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var r=a.type;if(!(r!=="submit"&&r!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+e._wrapperState.initialValue,n||a===e.value||(e.value=a),e.defaultValue=a}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $l(e,a,n){(a!=="number"||ui(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Er=Array.isArray;function Bn(e,a,n,r){if(e=e.options,a){a={};for(var t=0;t<n.length;t++)a["$"+n[t]]=!0;for(n=0;n<e.length;n++)t=a.hasOwnProperty("$"+e[n].value),e[n].selected!==t&&(e[n].selected=t),t&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_a(n),a=null,t=0;t<e.length;t++){if(e[t].value===n){e[t].selected=!0,r&&(e[t].defaultSelected=!0);return}a!==null||e[t].disabled||(a=e[t])}a!==null&&(a.selected=!0)}}function Nl(e,a){if(a.dangerouslySetInnerHTML!=null)throw Error(A(91));return x({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lc(e,a){var n=a.value;if(n==null){if(n=a.children,a=a.defaultValue,n!=null){if(a!=null)throw Error(A(92));if(Er(n)){if(1<n.length)throw Error(A(93));n=n[0]}a=n}a==null&&(a=""),n=a}e._wrapperState={initialValue:_a(n)}}function Wf(e,a){var n=_a(a.value),r=_a(a.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),a.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sc(e){var a=e.textContent;a===e._wrapperState.initialValue&&a!==""&&a!==null&&(e.value=a)}function Uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bl(e,a){return e==null||e==="http://www.w3.org/1999/xhtml"?Uf(a):e==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var At,Zf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,n,r,t){MSApp.execUnsafeLocalFunction(function(){return e(a,n,r,t)})}:e}(function(e,a){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=a;else{for(At=At||document.createElement("div"),At.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=At.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;a.firstChild;)e.appendChild(a.firstChild)}});function xr(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var Nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},np=["Webkit","ms","Moz","O"];Object.keys(Nr).forEach(function(e){np.forEach(function(a){a=a+e.charAt(0).toUpperCase()+e.substring(1),Nr[a]=Nr[e]})});function Yf(e,a,n){return a==null||typeof a=="boolean"||a===""?"":n||typeof a!="number"||a===0||Nr.hasOwnProperty(e)&&Nr[e]?(""+a).trim():a+"px"}function Qf(e,a){e=e.style;for(var n in a)if(a.hasOwnProperty(n)){var r=n.indexOf("--")===0,t=Yf(n,a[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,t):e[n]=t}}var rp=x({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ll(e,a){if(a){if(rp[e]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(A(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(A(61))}if(a.style!=null&&typeof a.style!="object")throw Error(A(62))}}function Rl(e,a){if(e.indexOf("-")===-1)return typeof a.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pl=null;function Vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Kn=null,Dn=null;function uc(e){if(e=ot(e)){if(typeof Bl!="function")throw Error(A(280));var a=e.stateNode;a&&(a=Vi(a),Bl(e.stateNode,e.type,a))}}function Xf(e){Kn?Dn?Dn.push(e):Dn=[e]:Kn=e}function qf(){if(Kn){var e=Kn,a=Dn;if(Dn=Kn=null,uc(e),a)for(e=0;e<a.length;e++)uc(a[e])}}function eh(e,a){return e(a)}function ah(){}var $o=!1;function nh(e,a,n){if($o)return e(a,n);$o=!0;try{return eh(e,a,n)}finally{$o=!1,(Kn!==null||Dn!==null)&&(ah(),qf())}}function Fr(e,a){var n=e.stateNode;if(n===null)return null;var r=Vi(n);if(r===null)return null;n=r[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,a,typeof n));return n}var Kl=!1;if(fa)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Kl=!1}function tp(e,a,n,r,t,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{a.apply(n,u)}catch(c){this.onError(c)}}var br=!1,ci=null,di=!1,Dl=null,ip={onError:function(e){br=!0,ci=e}};function op(e,a,n,r,t,i,o,l,s){br=!1,ci=null,tp.apply(ip,arguments)}function lp(e,a,n,r,t,i,o,l,s){if(op.apply(this,arguments),br){if(br){var u=ci;br=!1,ci=null}else throw Error(A(198));di||(di=!0,Dl=u)}}function hn(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,a.flags&4098&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function rh(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function cc(e){if(hn(e)!==e)throw Error(A(188))}function sp(e){var a=e.alternate;if(!a){if(a=hn(e),a===null)throw Error(A(188));return a!==e?null:e}for(var n=e,r=a;;){var t=n.return;if(t===null)break;var i=t.alternate;if(i===null){if(r=t.return,r!==null){n=r;continue}break}if(t.child===i.child){for(i=t.child;i;){if(i===n)return cc(t),e;if(i===r)return cc(t),a;i=i.sibling}throw Error(A(188))}if(n.return!==r.return)n=t,r=i;else{for(var o=!1,l=t.child;l;){if(l===n){o=!0,n=t,r=i;break}if(l===r){o=!0,r=t,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=t;break}if(l===r){o=!0,r=i,n=t;break}l=l.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:a}function th(e){return e=sp(e),e!==null?ih(e):null}function ih(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var a=ih(e);if(a!==null)return a;e=e.sibling}return null}var oh=Pe.unstable_scheduleCallback,dc=Pe.unstable_cancelCallback,up=Pe.unstable_shouldYield,cp=Pe.unstable_requestPaint,W=Pe.unstable_now,dp=Pe.unstable_getCurrentPriorityLevel,Ws=Pe.unstable_ImmediatePriority,lh=Pe.unstable_UserBlockingPriority,fi=Pe.unstable_NormalPriority,fp=Pe.unstable_LowPriority,sh=Pe.unstable_IdlePriority,Fi=null,ea=null;function hp(e){if(ea&&typeof ea.onCommitFiberRoot=="function")try{ea.onCommitFiberRoot(Fi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:vp,yp=Math.log,mp=Math.LN2;function vp(e){return e>>>=0,e===0?32:31-(yp(e)/mp|0)|0}var kt=64,wt=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hi(e,a){var n=e.pendingLanes;if(n===0)return 0;var r=0,t=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~t;l!==0?r=Tr(l):(i&=o,i!==0&&(r=Tr(i)))}else o=n&~t,o!==0?r=Tr(o):i!==0&&(r=Tr(i));if(r===0)return 0;if(a!==0&&a!==r&&!(a&t)&&(t=r&-r,i=a&-a,t>=i||t===16&&(i&4194240)!==0))return a;if(r&4&&(r|=n&16),a=e.entangledLanes,a!==0)for(e=e.entanglements,a&=r;0<a;)n=31-Ue(a),t=1<<n,r|=e[n],a&=~t;return r}function pp(e,a){switch(e){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gp(e,a){for(var n=e.suspendedLanes,r=e.pingedLanes,t=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ue(i),l=1<<o,s=t[o];s===-1?(!(l&n)||l&r)&&(t[o]=pp(l,a)):s<=a&&(e.expiredLanes|=l),i&=~l}}function Il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uh(){var e=kt;return kt<<=1,!(kt&4194240)&&(kt=64),e}function No(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function tt(e,a,n){e.pendingLanes|=a,a!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,a=31-Ue(a),e[a]=n}function Sp(e,a){var n=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var t=31-Ue(n),i=1<<t;a[t]=0,r[t]=-1,e[t]=-1,n&=~i}}function Us(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var r=31-Ue(n),t=1<<r;t&a|e[r]&a&&(e[r]|=a),n&=~t}}var K=0;function ch(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dh,Zs,fh,hh,yh,_l=!1,Ct=[],ba=null,La=null,Ra=null,Gr=new Map,Jr=new Map,Ea=[],Ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fc(e,a){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Gr.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(a.pointerId)}}function fr(e,a,n,r,t,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[t]},a!==null&&(a=ot(a),a!==null&&Zs(a)),e):(e.eventSystemFlags|=r,a=e.targetContainers,t!==null&&a.indexOf(t)===-1&&a.push(t),e)}function kp(e,a,n,r,t){switch(a){case"focusin":return ba=fr(ba,e,a,n,r,t),!0;case"dragenter":return La=fr(La,e,a,n,r,t),!0;case"mouseover":return Ra=fr(Ra,e,a,n,r,t),!0;case"pointerover":var i=t.pointerId;return Gr.set(i,fr(Gr.get(i)||null,e,a,n,r,t)),!0;case"gotpointercapture":return i=t.pointerId,Jr.set(i,fr(Jr.get(i)||null,e,a,n,r,t)),!0}return!1}function mh(e){var a=Qa(e.target);if(a!==null){var n=hn(a);if(n!==null){if(a=n.tag,a===13){if(a=rh(n),a!==null){e.blockedOn=a,yh(e.priority,function(){fh(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qt(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=Ol(e.domEventName,e.eventSystemFlags,a[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pl=r,n.target.dispatchEvent(r),Pl=null}else return a=ot(n),a!==null&&Zs(a),e.blockedOn=n,!1;a.shift()}return!0}function hc(e,a,n){Qt(e)&&n.delete(a)}function wp(){_l=!1,ba!==null&&Qt(ba)&&(ba=null),La!==null&&Qt(La)&&(La=null),Ra!==null&&Qt(Ra)&&(Ra=null),Gr.forEach(hc),Jr.forEach(hc)}function hr(e,a){e.blockedOn===a&&(e.blockedOn=null,_l||(_l=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,wp)))}function Hr(e){function a(t){return hr(t,e)}if(0<Ct.length){hr(Ct[0],e);for(var n=1;n<Ct.length;n++){var r=Ct[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ba!==null&&hr(ba,e),La!==null&&hr(La,e),Ra!==null&&hr(Ra,e),Gr.forEach(a),Jr.forEach(a),n=0;n<Ea.length;n++)r=Ea[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ea.length&&(n=Ea[0],n.blockedOn===null);)mh(n),n.blockedOn===null&&Ea.shift()}var In=va.ReactCurrentBatchConfig,yi=!0;function Cp(e,a,n,r){var t=K,i=In.transition;In.transition=null;try{K=1,Ys(e,a,n,r)}finally{K=t,In.transition=i}}function Mp(e,a,n,r){var t=K,i=In.transition;In.transition=null;try{K=4,Ys(e,a,n,r)}finally{K=t,In.transition=i}}function Ys(e,a,n,r){if(yi){var t=Ol(e,a,n,r);if(t===null)Oo(e,a,r,mi,n),fc(e,r);else if(kp(t,e,a,n,r))r.stopPropagation();else if(fc(e,r),a&4&&-1<Ap.indexOf(e)){for(;t!==null;){var i=ot(t);if(i!==null&&dh(i),i=Ol(e,a,n,r),i===null&&Oo(e,a,r,mi,n),i===t)break;t=i}t!==null&&r.stopPropagation()}else Oo(e,a,r,null,n)}}var mi=null;function Ol(e,a,n,r){if(mi=null,e=Vs(r),e=Qa(e),e!==null)if(a=hn(e),a===null)e=null;else if(n=a.tag,n===13){if(e=rh(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null);return mi=e,null}function vh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dp()){case Ws:return 1;case lh:return 4;case fi:case fp:return 16;case sh:return 536870912;default:return 16}default:return 16}}var $a=null,Qs=null,Xt=null;function ph(){if(Xt)return Xt;var e,a=Qs,n=a.length,r,t="value"in $a?$a.value:$a.textContent,i=t.length;for(e=0;e<n&&a[e]===t[e];e++);var o=n-e;for(r=1;r<=o&&a[n-r]===t[i-r];r++);return Xt=t.slice(e,1<r?1-r:void 0)}function qt(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Mt(){return!0}function yc(){return!1}function Ke(e){function a(n,r,t,i,o){this._reactName=n,this._targetInst=t,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Mt:yc,this.isPropagationStopped=yc,this}return x(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mt)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mt)},persist:function(){},isPersistent:Mt}),a}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=Ke(qn),it=x({},qn,{view:0,detail:0}),Ep=Ke(it),bo,Lo,yr,Gi=x({},it,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(bo=e.screenX-yr.screenX,Lo=e.screenY-yr.screenY):Lo=bo=0,yr=e),bo)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),mc=Ke(Gi),Tp=x({},Gi,{dataTransfer:0}),$p=Ke(Tp),Np=x({},it,{relatedTarget:0}),Ro=Ke(Np),bp=x({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=Ke(bp),Rp=x({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pp=Ke(Rp),Bp=x({},qn,{data:0}),vc=Ke(Bp),Kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _p(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Ip[e])?!!a[e]:!1}function qs(){return _p}var Op=x({},it,{key:function(e){if(e.key){var a=Kp[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=qt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qs,charCode:function(e){return e.type==="keypress"?qt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jp=Ke(Op),zp=x({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pc=Ke(zp),xp=x({},it,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qs}),Fp=Ke(xp),Gp=x({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=Ke(Gp),Hp=x({},Gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vp=Ke(Hp),Wp=[9,13,27,32],eu=fa&&"CompositionEvent"in window,Lr=null;fa&&"documentMode"in document&&(Lr=document.documentMode);var Up=fa&&"TextEvent"in window&&!Lr,gh=fa&&(!eu||Lr&&8<Lr&&11>=Lr),gc=String.fromCharCode(32),Sc=!1;function Sh(e,a){switch(e){case"keyup":return Wp.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ah(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Zp(e,a){switch(e){case"compositionend":return Ah(a);case"keypress":return a.which!==32?null:(Sc=!0,gc);case"textInput":return e=a.data,e===gc&&Sc?null:e;default:return null}}function Yp(e,a){if(Cn)return e==="compositionend"||!eu&&Sh(e,a)?(e=ph(),Xt=Qs=$a=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return gh&&a.locale!=="ko"?null:a.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Qp[e.type]:a==="textarea"}function kh(e,a,n,r){Xf(r),a=vi(a,"onChange"),0<a.length&&(n=new Xs("onChange","change",null,n,r),e.push({event:n,listeners:a}))}var Rr=null,Vr=null;function Xp(e){Ph(e,0)}function Ji(e){var a=Tn(e);if(Hf(a))return e}function qp(e,a){if(e==="change")return a}var wh=!1;if(fa){var Po;if(fa){var Bo="oninput"in document;if(!Bo){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),Bo=typeof kc.oninput=="function"}Po=Bo}else Po=!1;wh=Po&&(!document.documentMode||9<document.documentMode)}function wc(){Rr&&(Rr.detachEvent("onpropertychange",Ch),Vr=Rr=null)}function Ch(e){if(e.propertyName==="value"&&Ji(Vr)){var a=[];kh(a,Vr,e,Vs(e)),nh(Xp,a)}}function eg(e,a,n){e==="focusin"?(wc(),Rr=a,Vr=n,Rr.attachEvent("onpropertychange",Ch)):e==="focusout"&&wc()}function ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ji(Vr)}function ng(e,a){if(e==="click")return Ji(a)}function rg(e,a){if(e==="input"||e==="change")return Ji(a)}function tg(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Ye=typeof Object.is=="function"?Object.is:tg;function Wr(e,a){if(Ye(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),r=Object.keys(a);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var t=n[r];if(!Al.call(a,t)||!Ye(e[t],a[t]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mc(e,a){var n=Cc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=a&&r>=a)return{node:n,offset:a-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cc(n)}}function Mh(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Mh(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Eh(){for(var e=window,a=ui();a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=ui(e.document)}return a}function au(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function ig(e){var a=Eh(),n=e.focusedElem,r=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&Mh(n.ownerDocument.documentElement,n)){if(r!==null&&au(n)){if(a=r.start,e=r.end,e===void 0&&(e=a),"selectionStart"in n)n.selectionStart=a,n.selectionEnd=Math.min(e,n.value.length);else if(e=(a=n.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var t=n.textContent.length,i=Math.min(r.start,t);r=r.end===void 0?i:Math.min(r.end,t),!e.extend&&i>r&&(t=r,r=i,i=t),t=Mc(n,i);var o=Mc(n,r);t&&o&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(a=a.createRange(),a.setStart(t.node,t.offset),e.removeAllRanges(),i>r?(e.addRange(a),e.extend(o.node,o.offset)):(a.setEnd(o.node,o.offset),e.addRange(a)))}}for(a=[],e=n;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<a.length;n++)e=a[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var og=fa&&"documentMode"in document&&11>=document.documentMode,Mn=null,jl=null,Pr=null,zl=!1;function Ec(e,a,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zl||Mn==null||Mn!==ui(r)||(r=Mn,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Wr(Pr,r)||(Pr=r,r=vi(jl,"onSelect"),0<r.length&&(a=new Xs("onSelect","select",null,a,n),e.push({event:a,listeners:r}),a.target=Mn)))}function Et(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var En={animationend:Et("Animation","AnimationEnd"),animationiteration:Et("Animation","AnimationIteration"),animationstart:Et("Animation","AnimationStart"),transitionend:Et("Transition","TransitionEnd")},Ko={},Th={};fa&&(Th=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function Hi(e){if(Ko[e])return Ko[e];if(!En[e])return e;var a=En[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in Th)return Ko[e]=a[n];return e}var $h=Hi("animationend"),Nh=Hi("animationiteration"),bh=Hi("animationstart"),Lh=Hi("transitionend"),Rh=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xa(e,a){Rh.set(e,a),fn(a,[e])}for(var Do=0;Do<Tc.length;Do++){var Io=Tc[Do],lg=Io.toLowerCase(),sg=Io[0].toUpperCase()+Io.slice(1);xa(lg,"on"+sg)}xa($h,"onAnimationEnd");xa(Nh,"onAnimationIteration");xa(bh,"onAnimationStart");xa("dblclick","onDoubleClick");xa("focusin","onFocus");xa("focusout","onBlur");xa(Lh,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function $c(e,a,n){var r=e.type||"unknown-event";e.currentTarget=n,lp(r,a,void 0,e),e.currentTarget=null}function Ph(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],t=r.event;r=r.listeners;e:{var i=void 0;if(a)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&t.isPropagationStopped())break e;$c(t,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&t.isPropagationStopped())break e;$c(t,l,u),i=s}}}if(di)throw e=Dl,di=!1,Dl=null,e}function I(e,a){var n=a[Hl];n===void 0&&(n=a[Hl]=new Set);var r=e+"__bubble";n.has(r)||(Bh(a,e,2,!1),n.add(r))}function _o(e,a,n){var r=0;a&&(r|=4),Bh(n,e,r,a)}var Tt="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Tt]){e[Tt]=!0,zf.forEach(function(n){n!=="selectionchange"&&(ug.has(n)||_o(n,!1,e),_o(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Tt]||(a[Tt]=!0,_o("selectionchange",!1,a))}}function Bh(e,a,n,r){switch(vh(a)){case 1:var t=Cp;break;case 4:t=Mp;break;default:t=Ys}n=t.bind(null,a,n,e),t=void 0,!Kl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(t=!0),r?t!==void 0?e.addEventListener(a,n,{capture:!0,passive:t}):e.addEventListener(a,n,!0):t!==void 0?e.addEventListener(a,n,{passive:t}):e.addEventListener(a,n,!1)}function Oo(e,a,n,r,t){var i=r;if(!(a&1)&&!(a&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===t||l.nodeType===8&&l.parentNode===t)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===t||s.nodeType===8&&s.parentNode===t))return;o=o.return}for(;l!==null;){if(o=Qa(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}nh(function(){var u=i,c=Vs(n),d=[];e:{var f=Rh.get(e);if(f!==void 0){var m=Xs,g=e;switch(e){case"keypress":if(qt(n)===0)break e;case"keydown":case"keyup":m=jp;break;case"focusin":g="focus",m=Ro;break;case"focusout":g="blur",m=Ro;break;case"beforeblur":case"afterblur":m=Ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=$p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Fp;break;case $h:case Nh:case bh:m=Lp;break;case Lh:m=Jp;break;case"scroll":m=Ep;break;case"wheel":m=Vp;break;case"copy":case"cut":case"paste":m=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=pc}var k=(a&4)!==0,w=!k&&e==="scroll",h=k?f!==null?f+"Capture":null:f;k=[];for(var y=u,v;y!==null;){v=y;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=Fr(y,h),S!=null&&k.push(Zr(y,S,v)))),w)break;y=y.return}0<k.length&&(f=new m(f,g,null,n,c),d.push({event:f,listeners:k}))}}if(!(a&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Pl&&(g=n.relatedTarget||n.fromElement)&&(Qa(g)||g[ha]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Qa(g):null,g!==null&&(w=hn(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(k=mc,S="onMouseLeave",h="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(k=pc,S="onPointerLeave",h="onPointerEnter",y="pointer"),w=m==null?f:Tn(m),v=g==null?f:Tn(g),f=new k(S,y+"leave",m,n,c),f.target=w,f.relatedTarget=v,S=null,Qa(c)===u&&(k=new k(h,y+"enter",g,n,c),k.target=v,k.relatedTarget=w,S=k),w=S,m&&g)a:{for(k=m,h=g,y=0,v=k;v;v=pn(v))y++;for(v=0,S=h;S;S=pn(S))v++;for(;0<y-v;)k=pn(k),y--;for(;0<v-y;)h=pn(h),v--;for(;y--;){if(k===h||h!==null&&k===h.alternate)break a;k=pn(k),h=pn(h)}k=null}else k=null;m!==null&&Nc(d,f,m,k,!1),g!==null&&w!==null&&Nc(d,w,g,k,!0)}}e:{if(f=u?Tn(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=qp;else if(Ac(f))if(wh)C=rg;else{C=ag;var T=eg}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=ng);if(C&&(C=C(e,u))){kh(d,C,n,c);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&$l(f,"number",f.value)}switch(T=u?Tn(u):window,e){case"focusin":(Ac(T)||T.contentEditable==="true")&&(Mn=T,jl=u,Pr=null);break;case"focusout":Pr=jl=Mn=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,Ec(d,n,c);break;case"selectionchange":if(og)break;case"keydown":case"keyup":Ec(d,n,c)}var $;if(eu)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Cn?Sh(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(gh&&n.locale!=="ko"&&(Cn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Cn&&($=ph()):($a=c,Qs="value"in $a?$a.value:$a.textContent,Cn=!0)),T=vi(u,N),0<T.length&&(N=new vc(N,e,null,n,c),d.push({event:N,listeners:T}),$?N.data=$:($=Ah(n),$!==null&&(N.data=$)))),($=Up?Zp(e,n):Yp(e,n))&&(u=vi(u,"onBeforeInput"),0<u.length&&(c=new vc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=$))}Ph(d,a)})}function Zr(e,a,n){return{instance:e,listener:a,currentTarget:n}}function vi(e,a){for(var n=a+"Capture",r=[];e!==null;){var t=e,i=t.stateNode;t.tag===5&&i!==null&&(t=i,i=Fr(e,n),i!=null&&r.unshift(Zr(e,i,t)),i=Fr(e,a),i!=null&&r.push(Zr(e,i,t))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nc(e,a,n,r,t){for(var i=a._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,t?(s=Fr(n,i),s!=null&&o.unshift(Zr(n,s,l))):t||(s=Fr(n,i),s!=null&&o.push(Zr(n,s,l)))),n=n.return}o.length!==0&&e.push({event:a,listeners:o})}var cg=/\r\n?/g,dg=/\u0000|\uFFFD/g;function bc(e){return(typeof e=="string"?e:""+e).replace(cg,`
`).replace(dg,"")}function $t(e,a,n){if(a=bc(a),bc(e)!==a&&n)throw Error(A(425))}function pi(){}var xl=null,Fl=null;function Gl(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,fg=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,hg=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc<"u"?function(e){return Lc.resolve(null).then(e).catch(yg)}:Jl;function yg(e){setTimeout(function(){throw e})}function jo(e,a){var n=a,r=0;do{var t=n.nextSibling;if(e.removeChild(n),t&&t.nodeType===8)if(n=t.data,n==="/$"){if(r===0){e.removeChild(t),Hr(a);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=t}while(n);Hr(a)}function Pa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return e}function Rc(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(a===0)return e;a--}else n==="/$"&&a++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),qe="__reactFiber$"+er,Yr="__reactProps$"+er,ha="__reactContainer$"+er,Hl="__reactEvents$"+er,mg="__reactListeners$"+er,vg="__reactHandles$"+er;function Qa(e){var a=e[qe];if(a)return a;for(var n=e.parentNode;n;){if(a=n[ha]||n[qe]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=Rc(e);e!==null;){if(n=e[qe])return n;e=Rc(e)}return a}e=n,n=e.parentNode}return null}function ot(e){return e=e[qe]||e[ha],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Vi(e){return e[Yr]||null}var Vl=[],$n=-1;function Fa(e){return{current:e}}function _(e){0>$n||(e.current=Vl[$n],Vl[$n]=null,$n--)}function D(e,a){$n++,Vl[$n]=e.current,e.current=a}var Oa={},de=Fa(Oa),Ce=Fa(!1),on=Oa;function Fn(e,a){var n=e.type.contextTypes;if(!n)return Oa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===a)return r.__reactInternalMemoizedMaskedChildContext;var t={},i;for(i in n)t[i]=a[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=t),t}function Me(e){return e=e.childContextTypes,e!=null}function gi(){_(Ce),_(de)}function Pc(e,a,n){if(de.current!==Oa)throw Error(A(168));D(de,a),D(Ce,n)}function Kh(e,a,n){var r=e.stateNode;if(a=a.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var t in r)if(!(t in a))throw Error(A(108,ep(e)||"Unknown",t));return x({},n,r)}function Si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Oa,on=de.current,D(de,e),D(Ce,Ce.current),!0}function Bc(e,a,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Kh(e,a,on),r.__reactInternalMemoizedMergedChildContext=e,_(Ce),_(de),D(de,e)):_(Ce),D(Ce,n)}var sa=null,Wi=!1,zo=!1;function Dh(e){sa===null?sa=[e]:sa.push(e)}function pg(e){Wi=!0,Dh(e)}function Ga(){if(!zo&&sa!==null){zo=!0;var e=0,a=K;try{var n=sa;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sa=null,Wi=!1}catch(t){throw sa!==null&&(sa=sa.slice(e+1)),oh(Ws,Ga),t}finally{K=a,zo=!1}}return null}var Nn=[],bn=0,Ai=null,ki=0,_e=[],Oe=0,ln=null,ua=1,ca="";function Za(e,a){Nn[bn++]=ki,Nn[bn++]=Ai,Ai=e,ki=a}function Ih(e,a,n){_e[Oe++]=ua,_e[Oe++]=ca,_e[Oe++]=ln,ln=e;var r=ua;e=ca;var t=32-Ue(r)-1;r&=~(1<<t),n+=1;var i=32-Ue(a)+t;if(30<i){var o=t-t%5;i=(r&(1<<o)-1).toString(32),r>>=o,t-=o,ua=1<<32-Ue(a)+t|n<<t|r,ca=i+e}else ua=1<<i|n<<t|r,ca=e}function nu(e){e.return!==null&&(Za(e,1),Ih(e,1,0))}function ru(e){for(;e===Ai;)Ai=Nn[--bn],Nn[bn]=null,ki=Nn[--bn],Nn[bn]=null;for(;e===ln;)ln=_e[--Oe],_e[Oe]=null,ca=_e[--Oe],_e[Oe]=null,ua=_e[--Oe],_e[Oe]=null}var Re=null,Le=null,O=!1,We=null;function _h(e,a){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=a,n.return=e,a=e.deletions,a===null?(e.deletions=[n],e.flags|=16):a.push(n)}function Kc(e,a){switch(e.tag){case 5:var n=e.type;return a=a.nodeType!==1||n.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(e.stateNode=a,Re=e,Le=Pa(a.firstChild),!0):!1;case 6:return a=e.pendingProps===""||a.nodeType!==3?null:a,a!==null?(e.stateNode=a,Re=e,Le=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(n=ln!==null?{id:ua,overflow:ca}:null,e.memoizedState={dehydrated:a,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=a,n.return=e,e.child=n,Re=e,Le=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ul(e){if(O){var a=Le;if(a){var n=a;if(!Kc(e,a)){if(Wl(e))throw Error(A(418));a=Pa(n.nextSibling);var r=Re;a&&Kc(e,a)?_h(r,n):(e.flags=e.flags&-4097|2,O=!1,Re=e)}}else{if(Wl(e))throw Error(A(418));e.flags=e.flags&-4097|2,O=!1,Re=e}}}function Dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Nt(e){if(e!==Re)return!1;if(!O)return Dc(e),O=!0,!1;var a;if((a=e.tag!==3)&&!(a=e.tag!==5)&&(a=e.type,a=a!=="head"&&a!=="body"&&!Gl(e.type,e.memoizedProps)),a&&(a=Le)){if(Wl(e))throw Oh(),Error(A(418));for(;a;)_h(e,a),a=Pa(a.nextSibling)}if(Dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(a===0){Le=Pa(e.nextSibling);break e}a--}else n!=="$"&&n!=="$!"&&n!=="$?"||a++}e=e.nextSibling}Le=null}}else Le=Re?Pa(e.stateNode.nextSibling):null;return!0}function Oh(){for(var e=Le;e;)e=Pa(e.nextSibling)}function Gn(){Le=Re=null,O=!1}function tu(e){We===null?We=[e]:We.push(e)}var gg=va.ReactCurrentBatchConfig;function He(e,a){if(e&&e.defaultProps){a=x({},a),e=e.defaultProps;for(var n in e)a[n]===void 0&&(a[n]=e[n]);return a}return a}var wi=Fa(null),Ci=null,Ln=null,iu=null;function ou(){iu=Ln=Ci=null}function lu(e){var a=wi.current;_(wi),e._currentValue=a}function Zl(e,a,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,r!==null&&(r.childLanes|=a)):r!==null&&(r.childLanes&a)!==a&&(r.childLanes|=a),e===n)break;e=e.return}}function _n(e,a){Ci=e,iu=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&a&&(Ae=!0),e.firstContext=null)}function xe(e){var a=e._currentValue;if(iu!==e)if(e={context:e,memoizedValue:a,next:null},Ln===null){if(Ci===null)throw Error(A(308));Ln=e,Ci.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return a}var Xa=null;function su(e){Xa===null?Xa=[e]:Xa.push(e)}function jh(e,a,n,r){var t=a.interleaved;return t===null?(n.next=n,su(a)):(n.next=t.next,t.next=n),a.interleaved=n,ya(e,r)}function ya(e,a){e.lanes|=a;var n=e.alternate;for(n!==null&&(n.lanes|=a),n=e,e=e.return;e!==null;)e.childLanes|=a,n=e.alternate,n!==null&&(n.childLanes|=a),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wa=!1;function uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zh(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function da(e,a){return{eventTime:e,lane:a,tag:0,payload:null,callback:null,next:null}}function Ba(e,a,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var t=r.pending;return t===null?a.next=a:(a.next=t.next,t.next=a),r.pending=a,ya(e,n)}return t=r.interleaved,t===null?(a.next=a,su(r)):(a.next=t.next,t.next=a),r.interleaved=a,ya(e,n)}function ei(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194240)!==0)){var r=a.lanes;r&=e.pendingLanes,n|=r,a.lanes=n,Us(e,n)}}function Ic(e,a){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var t=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?t=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?t=i=a:i=i.next=a}else t=i=a;n={baseState:r.baseState,firstBaseUpdate:t,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}function Mi(e,a,n,r){var t=e.updateQueue;wa=!1;var i=t.firstBaseUpdate,o=t.lastBaseUpdate,l=t.shared.pending;if(l!==null){t.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(i!==null){var d=t.baseState;o=0,c=u=s=null,l=i;do{var f=l.lane,m=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,k=l;switch(f=a,m=n,k.tag){case 1:if(g=k.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=k.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=x({},d,f);break e;case 2:wa=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=t.effects,f===null?t.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,s=d):c=c.next=m,o|=f;if(l=l.next,l===null){if(l=t.shared.pending,l===null)break;f=l,l=f.next,f.next=null,t.lastBaseUpdate=f,t.shared.pending=null}}while(1);if(c===null&&(s=d),t.baseState=s,t.firstBaseUpdate=u,t.lastBaseUpdate=c,a=t.shared.interleaved,a!==null){t=a;do o|=t.lane,t=t.next;while(t!==a)}else i===null&&(t.shared.lanes=0);un|=o,e.lanes=o,e.memoizedState=d}}function _c(e,a,n){if(e=a.effects,a.effects=null,e!==null)for(a=0;a<e.length;a++){var r=e[a],t=r.callback;if(t!==null){if(r.callback=null,r=n,typeof t!="function")throw Error(A(191,t));t.call(r)}}}var xh=new jf.Component().refs;function Yl(e,a,n,r){a=e.memoizedState,n=n(r,a),n=n==null?a:x({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ui={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,a,n){e=e._reactInternals;var r=ye(),t=Da(e),i=da(r,t);i.payload=a,n!=null&&(i.callback=n),a=Ba(e,i,t),a!==null&&(Ze(a,e,t,r),ei(a,e,t))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var r=ye(),t=Da(e),i=da(r,t);i.tag=1,i.payload=a,n!=null&&(i.callback=n),a=Ba(e,i,t),a!==null&&(Ze(a,e,t,r),ei(a,e,t))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=ye(),r=Da(e),t=da(n,r);t.tag=2,a!=null&&(t.callback=a),a=Ba(e,t,r),a!==null&&(Ze(a,e,r,n),ei(a,e,r))}};function Oc(e,a,n,r,t,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):a.prototype&&a.prototype.isPureReactComponent?!Wr(n,r)||!Wr(t,i):!0}function Fh(e,a,n){var r=!1,t=Oa,i=a.contextType;return typeof i=="object"&&i!==null?i=xe(i):(t=Me(a)?on:de.current,r=a.contextTypes,i=(r=r!=null)?Fn(e,t):Oa),a=new a(n,i),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ui,e.stateNode=a,a._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),a}function jc(e,a,n,r){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,r),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,r),a.state!==e&&Ui.enqueueReplaceState(a,a.state,null)}function Ql(e,a,n,r){var t=e.stateNode;t.props=n,t.state=e.memoizedState,t.refs=xh,uu(e);var i=a.contextType;typeof i=="object"&&i!==null?t.context=xe(i):(i=Me(a)?on:de.current,t.context=Fn(e,i)),t.state=e.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(Yl(e,a,i,n),t.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(a=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),a!==t.state&&Ui.enqueueReplaceState(t,t.state,null),Mi(e,n,t,r),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,a,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var t=r,i=""+e;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===i?a.ref:(a=function(o){var l=t.refs;l===xh&&(l=t.refs={}),o===null?delete l[i]:l[i]=o},a._stringRef=i,a)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function bt(e,a){throw e=Object.prototype.toString.call(a),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function zc(e){var a=e._init;return a(e._payload)}function Gh(e){function a(h,y){if(e){var v=h.deletions;v===null?(h.deletions=[y],h.flags|=16):v.push(y)}}function n(h,y){if(!e)return null;for(;y!==null;)a(h,y),y=y.sibling;return null}function r(h,y){for(h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function t(h,y){return h=Ia(h,y),h.index=0,h.sibling=null,h}function i(h,y,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<y?(h.flags|=2,y):v):(h.flags|=2,y)):(h.flags|=1048576,y)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,y,v,S){return y===null||y.tag!==6?(y=Wo(v,h.mode,S),y.return=h,y):(y=t(y,v),y.return=h,y)}function s(h,y,v,S){var C=v.type;return C===wn?c(h,y,v.props.children,S,v.key):y!==null&&(y.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ka&&zc(C)===y.type)?(S=t(y,v.props),S.ref=mr(h,y,v),S.return=h,S):(S=oi(v.type,v.key,v.props,null,h.mode,S),S.ref=mr(h,y,v),S.return=h,S)}function u(h,y,v,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Uo(v,h.mode,S),y.return=h,y):(y=t(y,v.children||[]),y.return=h,y)}function c(h,y,v,S,C){return y===null||y.tag!==7?(y=tn(v,h.mode,S,C),y.return=h,y):(y=t(y,v),y.return=h,y)}function d(h,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Wo(""+y,h.mode,v),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case gt:return v=oi(y.type,y.key,y.props,null,h.mode,v),v.ref=mr(h,null,y),v.return=h,v;case kn:return y=Uo(y,h.mode,v),y.return=h,y;case ka:var S=y._init;return d(h,S(y._payload),v)}if(Er(y)||cr(y))return y=tn(y,h.mode,v,null),y.return=h,y;bt(h,y)}return null}function f(h,y,v,S){var C=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(h,y,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gt:return v.key===C?s(h,y,v,S):null;case kn:return v.key===C?u(h,y,v,S):null;case ka:return C=v._init,f(h,y,C(v._payload),S)}if(Er(v)||cr(v))return C!==null?null:c(h,y,v,S,null);bt(h,v)}return null}function m(h,y,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,l(y,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case gt:return h=h.get(S.key===null?v:S.key)||null,s(y,h,S,C);case kn:return h=h.get(S.key===null?v:S.key)||null,u(y,h,S,C);case ka:var T=S._init;return m(h,y,v,T(S._payload),C)}if(Er(S)||cr(S))return h=h.get(v)||null,c(y,h,S,C,null);bt(y,S)}return null}function g(h,y,v,S){for(var C=null,T=null,$=y,N=y=0,H=null;$!==null&&N<v.length;N++){$.index>N?(H=$,$=null):H=$.sibling;var P=f(h,$,v[N],S);if(P===null){$===null&&($=H);break}e&&$&&P.alternate===null&&a(h,$),y=i(P,y,N),T===null?C=P:T.sibling=P,T=P,$=H}if(N===v.length)return n(h,$),O&&Za(h,N),C;if($===null){for(;N<v.length;N++)$=d(h,v[N],S),$!==null&&(y=i($,y,N),T===null?C=$:T.sibling=$,T=$);return O&&Za(h,N),C}for($=r(h,$);N<v.length;N++)H=m($,h,N,v[N],S),H!==null&&(e&&H.alternate!==null&&$.delete(H.key===null?N:H.key),y=i(H,y,N),T===null?C=H:T.sibling=H,T=H);return e&&$.forEach(function(Ge){return a(h,Ge)}),O&&Za(h,N),C}function k(h,y,v,S){var C=cr(v);if(typeof C!="function")throw Error(A(150));if(v=C.call(v),v==null)throw Error(A(151));for(var T=C=null,$=y,N=y=0,H=null,P=v.next();$!==null&&!P.done;N++,P=v.next()){$.index>N?(H=$,$=null):H=$.sibling;var Ge=f(h,$,P.value,S);if(Ge===null){$===null&&($=H);break}e&&$&&Ge.alternate===null&&a(h,$),y=i(Ge,y,N),T===null?C=Ge:T.sibling=Ge,T=Ge,$=H}if(P.done)return n(h,$),O&&Za(h,N),C;if($===null){for(;!P.done;N++,P=v.next())P=d(h,P.value,S),P!==null&&(y=i(P,y,N),T===null?C=P:T.sibling=P,T=P);return O&&Za(h,N),C}for($=r(h,$);!P.done;N++,P=v.next())P=m($,h,N,P.value,S),P!==null&&(e&&P.alternate!==null&&$.delete(P.key===null?N:P.key),y=i(P,y,N),T===null?C=P:T.sibling=P,T=P);return e&&$.forEach(function(sr){return a(h,sr)}),O&&Za(h,N),C}function w(h,y,v,S){if(typeof v=="object"&&v!==null&&v.type===wn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case gt:e:{for(var C=v.key,T=y;T!==null;){if(T.key===C){if(C=v.type,C===wn){if(T.tag===7){n(h,T.sibling),y=t(T,v.props.children),y.return=h,h=y;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ka&&zc(C)===T.type){n(h,T.sibling),y=t(T,v.props),y.ref=mr(h,T,v),y.return=h,h=y;break e}n(h,T);break}else a(h,T);T=T.sibling}v.type===wn?(y=tn(v.props.children,h.mode,S,v.key),y.return=h,h=y):(S=oi(v.type,v.key,v.props,null,h.mode,S),S.ref=mr(h,y,v),S.return=h,h=S)}return o(h);case kn:e:{for(T=v.key;y!==null;){if(y.key===T)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(h,y.sibling),y=t(y,v.children||[]),y.return=h,h=y;break e}else{n(h,y);break}else a(h,y);y=y.sibling}y=Uo(v,h.mode,S),y.return=h,h=y}return o(h);case ka:return T=v._init,w(h,y,T(v._payload),S)}if(Er(v))return g(h,y,v,S);if(cr(v))return k(h,y,v,S);bt(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(h,y.sibling),y=t(y,v),y.return=h,h=y):(n(h,y),y=Wo(v,h.mode,S),y.return=h,h=y),o(h)):n(h,y)}return w}var Jn=Gh(!0),Jh=Gh(!1),lt={},aa=Fa(lt),Qr=Fa(lt),Xr=Fa(lt);function qa(e){if(e===lt)throw Error(A(174));return e}function cu(e,a){switch(D(Xr,a),D(Qr,e),D(aa,lt),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:bl(null,"");break;default:e=e===8?a.parentNode:a,a=e.namespaceURI||null,e=e.tagName,a=bl(a,e)}_(aa),D(aa,a)}function Hn(){_(aa),_(Qr),_(Xr)}function Hh(e){qa(Xr.current);var a=qa(aa.current),n=bl(a,e.type);a!==n&&(D(Qr,e),D(aa,n))}function du(e){Qr.current===e&&(_(aa),_(Qr))}var j=Fa(0);function Ei(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var xo=[];function fu(){for(var e=0;e<xo.length;e++)xo[e]._workInProgressVersionPrimary=null;xo.length=0}var ai=va.ReactCurrentDispatcher,Fo=va.ReactCurrentBatchConfig,sn=0,z=null,Y=null,ee=null,Ti=!1,Br=!1,qr=0,Sg=0;function se(){throw Error(A(321))}function hu(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!Ye(e[n],a[n]))return!1;return!0}function yu(e,a,n,r,t,i){if(sn=i,z=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,ai.current=e===null||e.memoizedState===null?Cg:Mg,e=n(r,t),Br){i=0;do{if(Br=!1,qr=0,25<=i)throw Error(A(301));i+=1,ee=Y=null,a.updateQueue=null,ai.current=Eg,e=n(r,t)}while(Br)}if(ai.current=$i,a=Y!==null&&Y.next!==null,sn=0,ee=Y=z=null,Ti=!1,a)throw Error(A(300));return e}function mu(){var e=qr!==0;return qr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?z.memoizedState=ee=e:ee=ee.next=e,ee}function Fe(){if(Y===null){var e=z.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var a=ee===null?z.memoizedState:ee.next;if(a!==null)ee=a,Y=e;else{if(e===null)throw Error(A(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ee===null?z.memoizedState=ee=e:ee=ee.next=e}return ee}function et(e,a){return typeof a=="function"?a(e):a}function Go(e){var a=Fe(),n=a.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Y,t=r.baseQueue,i=n.pending;if(i!==null){if(t!==null){var o=t.next;t.next=i.next,i.next=o}r.baseQueue=t=i,n.pending=null}if(t!==null){i=t.next,r=r.baseState;var l=o=null,s=null,u=i;do{var c=u.lane;if((sn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,z.lanes|=c,un|=c}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,Ye(r,a.memoizedState)||(Ae=!0),a.memoizedState=r,a.baseState=o,a.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){t=e;do i=t.lane,z.lanes|=i,un|=i,t=t.next;while(t!==e)}else t===null&&(n.lanes=0);return[a.memoizedState,n.dispatch]}function Jo(e){var a=Fe(),n=a.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,t=n.pending,i=a.memoizedState;if(t!==null){n.pending=null;var o=t=t.next;do i=e(i,o.action),o=o.next;while(o!==t);Ye(i,a.memoizedState)||(Ae=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),n.lastRenderedState=i}return[i,r]}function Vh(){}function Wh(e,a){var n=z,r=Fe(),t=a(),i=!Ye(r.memoizedState,t);if(i&&(r.memoizedState=t,Ae=!0),r=r.queue,vu(Yh.bind(null,n,r,e),[e]),r.getSnapshot!==a||i||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,at(9,Zh.bind(null,n,r,t,a),void 0,null),ae===null)throw Error(A(349));sn&30||Uh(n,a,t)}return t}function Uh(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=z.updateQueue,a===null?(a={lastEffect:null,stores:null},z.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function Zh(e,a,n,r){a.value=n,a.getSnapshot=r,Qh(a)&&Xh(e)}function Yh(e,a,n){return n(function(){Qh(a)&&Xh(e)})}function Qh(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!Ye(e,n)}catch{return!0}}function Xh(e){var a=ya(e,1);a!==null&&Ze(a,e,1,-1)}function xc(e){var a=Xe();return typeof e=="function"&&(e=e()),a.memoizedState=a.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:e},a.queue=e,e=e.dispatch=wg.bind(null,z,e),[a.memoizedState,e]}function at(e,a,n,r){return e={tag:e,create:a,destroy:n,deps:r,next:null},a=z.updateQueue,a===null?(a={lastEffect:null,stores:null},z.updateQueue=a,a.lastEffect=e.next=e):(n=a.lastEffect,n===null?a.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,a.lastEffect=e)),e}function qh(){return Fe().memoizedState}function ni(e,a,n,r){var t=Xe();z.flags|=e,t.memoizedState=at(1|a,n,void 0,r===void 0?null:r)}function Zi(e,a,n,r){var t=Fe();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&hu(r,o.deps)){t.memoizedState=at(a,n,i,r);return}}z.flags|=e,t.memoizedState=at(1|a,n,i,r)}function Fc(e,a){return ni(8390656,8,e,a)}function vu(e,a){return Zi(2048,8,e,a)}function ey(e,a){return Zi(4,2,e,a)}function ay(e,a){return Zi(4,4,e,a)}function ny(e,a){if(typeof a=="function")return e=e(),a(e),function(){a(null)};if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function ry(e,a,n){return n=n!=null?n.concat([e]):null,Zi(4,4,ny.bind(null,a,e),n)}function pu(){}function ty(e,a){var n=Fe();a=a===void 0?null:a;var r=n.memoizedState;return r!==null&&a!==null&&hu(a,r[1])?r[0]:(n.memoizedState=[e,a],e)}function iy(e,a){var n=Fe();a=a===void 0?null:a;var r=n.memoizedState;return r!==null&&a!==null&&hu(a,r[1])?r[0]:(e=e(),n.memoizedState=[e,a],e)}function oy(e,a,n){return sn&21?(Ye(n,a)||(n=uh(),z.lanes|=n,un|=n,e.baseState=!0),a):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function Ag(e,a){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Fo.transition;Fo.transition={};try{e(!1),a()}finally{K=n,Fo.transition=r}}function ly(){return Fe().memoizedState}function kg(e,a,n){var r=Da(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sy(e))uy(a,n);else if(n=jh(e,a,n,r),n!==null){var t=ye();Ze(n,e,r,t),cy(n,a,r)}}function wg(e,a,n){var r=Da(e),t={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sy(e))uy(a,t);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var o=a.lastRenderedState,l=i(o,n);if(t.hasEagerState=!0,t.eagerState=l,Ye(l,o)){var s=a.interleaved;s===null?(t.next=t,su(a)):(t.next=s.next,s.next=t),a.interleaved=t;return}}catch{}finally{}n=jh(e,a,t,r),n!==null&&(t=ye(),Ze(n,e,r,t),cy(n,a,r))}}function sy(e){var a=e.alternate;return e===z||a!==null&&a===z}function uy(e,a){Br=Ti=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function cy(e,a,n){if(n&4194240){var r=a.lanes;r&=e.pendingLanes,n|=r,a.lanes=n,Us(e,n)}}var $i={readContext:xe,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Cg={readContext:xe,useCallback:function(e,a){return Xe().memoizedState=[e,a===void 0?null:a],e},useContext:xe,useEffect:Fc,useImperativeHandle:function(e,a,n){return n=n!=null?n.concat([e]):null,ni(4194308,4,ny.bind(null,a,e),n)},useLayoutEffect:function(e,a){return ni(4194308,4,e,a)},useInsertionEffect:function(e,a){return ni(4,2,e,a)},useMemo:function(e,a){var n=Xe();return a=a===void 0?null:a,e=e(),n.memoizedState=[e,a],e},useReducer:function(e,a,n){var r=Xe();return a=n!==void 0?n(a):a,r.memoizedState=r.baseState=a,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=kg.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var a=Xe();return e={current:e},a.memoizedState=e},useState:xc,useDebugValue:pu,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=xc(!1),a=e[0];return e=Ag.bind(null,e[1]),Xe().memoizedState=e,[a,e]},useMutableSource:function(){},useSyncExternalStore:function(e,a,n){var r=z,t=Xe();if(O){if(n===void 0)throw Error(A(407));n=n()}else{if(n=a(),ae===null)throw Error(A(349));sn&30||Uh(r,a,n)}t.memoizedState=n;var i={value:n,getSnapshot:a};return t.queue=i,Fc(Yh.bind(null,r,i,e),[e]),r.flags|=2048,at(9,Zh.bind(null,r,i,n,a),void 0,null),n},useId:function(){var e=Xe(),a=ae.identifierPrefix;if(O){var n=ca,r=ua;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,a=":"+a+"R"+n,n=qr++,0<n&&(a+="H"+n.toString(32)),a+=":"}else n=Sg++,a=":"+a+"r"+n.toString(32)+":";return e.memoizedState=a},unstable_isNewReconciler:!1},Mg={readContext:xe,useCallback:ty,useContext:xe,useEffect:vu,useImperativeHandle:ry,useInsertionEffect:ey,useLayoutEffect:ay,useMemo:iy,useReducer:Go,useRef:qh,useState:function(){return Go(et)},useDebugValue:pu,useDeferredValue:function(e){var a=Fe();return oy(a,Y.memoizedState,e)},useTransition:function(){var e=Go(et)[0],a=Fe().memoizedState;return[e,a]},useMutableSource:Vh,useSyncExternalStore:Wh,useId:ly,unstable_isNewReconciler:!1},Eg={readContext:xe,useCallback:ty,useContext:xe,useEffect:vu,useImperativeHandle:ry,useInsertionEffect:ey,useLayoutEffect:ay,useMemo:iy,useReducer:Jo,useRef:qh,useState:function(){return Jo(et)},useDebugValue:pu,useDeferredValue:function(e){var a=Fe();return Y===null?a.memoizedState=e:oy(a,Y.memoizedState,e)},useTransition:function(){var e=Jo(et)[0],a=Fe().memoizedState;return[e,a]},useMutableSource:Vh,useSyncExternalStore:Wh,useId:ly,unstable_isNewReconciler:!1};function Vn(e,a){try{var n="",r=a;do n+=qv(r),r=r.return;while(r);var t=n}catch(i){t=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:a,stack:t,digest:null}}function Ho(e,a,n){return{value:e,source:null,stack:n??null,digest:a??null}}function Xl(e,a){try{console.error(a.value)}catch(n){setTimeout(function(){throw n})}}var Tg=typeof WeakMap=="function"?WeakMap:Map;function dy(e,a,n){n=da(-1,n),n.tag=3,n.payload={element:null};var r=a.value;return n.callback=function(){bi||(bi=!0,ss=r),Xl(e,a)},n}function fy(e,a,n){n=da(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var t=a.value;n.payload=function(){return r(t)},n.callback=function(){Xl(e,a)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xl(e,a),typeof r!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})}),n}function Gc(e,a,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tg;var t=new Set;r.set(a,t)}else t=r.get(a),t===void 0&&(t=new Set,r.set(a,t));t.has(n)||(t.add(n),e=zg.bind(null,e,a,n),a.then(e,e))}function Jc(e){do{var a;if((a=e.tag===13)&&(a=e.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return e;e=e.return}while(e!==null);return null}function Hc(e,a,n,r,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===a?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(a=da(-1,1),a.tag=2,Ba(n,a,1))),n.lanes|=1),e)}var $g=va.ReactCurrentOwner,Ae=!1;function he(e,a,n,r){a.child=e===null?Jh(a,null,n,r):Jn(a,e.child,n,r)}function Vc(e,a,n,r,t){n=n.render;var i=a.ref;return _n(a,t),r=yu(e,a,n,r,i,t),n=mu(),e!==null&&!Ae?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t,ma(e,a,t)):(O&&n&&nu(a),a.flags|=1,he(e,a,r,t),a.child)}function Wc(e,a,n,r,t){if(e===null){var i=n.type;return typeof i=="function"&&!Eu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(a.tag=15,a.type=i,hy(e,a,i,r,t)):(e=oi(n.type,null,r,a,a.mode,t),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!(e.lanes&t)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Wr,n(o,r)&&e.ref===a.ref)return ma(e,a,t)}return a.flags|=1,e=Ia(i,r),e.ref=a.ref,e.return=a,a.child=e}function hy(e,a,n,r,t){if(e!==null){var i=e.memoizedProps;if(Wr(i,r)&&e.ref===a.ref)if(Ae=!1,a.pendingProps=r=i,(e.lanes&t)!==0)e.flags&131072&&(Ae=!0);else return a.lanes=e.lanes,ma(e,a,t)}return ql(e,a,n,r,t)}function yy(e,a,n){var r=a.pendingProps,t=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Pn,Te),Te|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:e,cachePool:null,transitions:null},a.updateQueue=null,D(Pn,Te),Te|=e,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(Pn,Te),Te|=r}else i!==null?(r=i.baseLanes|n,a.memoizedState=null):r=n,D(Pn,Te),Te|=r;return he(e,a,t,n),a.child}function my(e,a){var n=a.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(a.flags|=512,a.flags|=2097152)}function ql(e,a,n,r,t){var i=Me(n)?on:de.current;return i=Fn(a,i),_n(a,t),n=yu(e,a,n,r,i,t),r=mu(),e!==null&&!Ae?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t,ma(e,a,t)):(O&&r&&nu(a),a.flags|=1,he(e,a,n,t),a.child)}function Uc(e,a,n,r,t){if(Me(n)){var i=!0;Si(a)}else i=!1;if(_n(a,t),a.stateNode===null)ri(e,a),Fh(a,n,r),Ql(a,n,r,t),r=!0;else if(e===null){var o=a.stateNode,l=a.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=xe(u):(u=Me(n)?on:de.current,u=Fn(a,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&jc(a,o,r,u),wa=!1;var f=a.memoizedState;o.state=f,Mi(a,r,o,t),s=a.memoizedState,l!==r||f!==s||Ce.current||wa?(typeof c=="function"&&(Yl(a,n,c,r),s=a.memoizedState),(l=wa||Oc(a,n,l,r,f,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(a.flags|=4194308)):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=r,a.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),r=!1)}else{o=a.stateNode,zh(e,a),l=a.memoizedProps,u=a.type===a.elementType?l:He(a.type,l),o.props=u,d=a.pendingProps,f=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=xe(s):(s=Me(n)?on:de.current,s=Fn(a,s));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==s)&&jc(a,o,r,s),wa=!1,f=a.memoizedState,o.state=f,Mi(a,r,o,t);var g=a.memoizedState;l!==d||f!==g||Ce.current||wa?(typeof m=="function"&&(Yl(a,n,m,r),g=a.memoizedState),(u=wa||Oc(a,n,u,r,f,g,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,s)),typeof o.componentDidUpdate=="function"&&(a.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(a.flags|=1024),a.memoizedProps=r,a.memoizedState=g),o.props=r,o.state=g,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(a.flags|=1024),r=!1)}return es(e,a,n,r,i,t)}function es(e,a,n,r,t,i){my(e,a);var o=(a.flags&128)!==0;if(!r&&!o)return t&&Bc(a,n,!1),ma(e,a,i);r=a.stateNode,$g.current=a;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return a.flags|=1,e!==null&&o?(a.child=Jn(a,e.child,null,i),a.child=Jn(a,null,l,i)):he(e,a,l,i),a.memoizedState=r.state,t&&Bc(a,n,!0),a.child}function vy(e){var a=e.stateNode;a.pendingContext?Pc(e,a.pendingContext,a.pendingContext!==a.context):a.context&&Pc(e,a.context,!1),cu(e,a.containerInfo)}function Zc(e,a,n,r,t){return Gn(),tu(t),a.flags|=256,he(e,a,n,r),a.child}var as={dehydrated:null,treeContext:null,retryLane:0};function ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function py(e,a,n){var r=a.pendingProps,t=j.current,i=!1,o=(a.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(t&2)!==0),l?(i=!0,a.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),D(j,t&1),e===null)return Ul(a),e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(a.mode&1?e.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(o=r.children,e=r.fallback,i?(r=a.mode,i=a.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Xi(o,r,0,null),e=tn(e,r,n,null),i.return=a,e.return=a,i.sibling=e,a.child=i,a.child.memoizedState=ns(n),a.memoizedState=as,e):gu(a,o));if(t=e.memoizedState,t!==null&&(l=t.dehydrated,l!==null))return Ng(e,a,o,r,l,t,n);if(i){i=r.fallback,o=a.mode,t=e.child,l=t.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&a.child!==t?(r=a.child,r.childLanes=0,r.pendingProps=s,a.deletions=null):(r=Ia(t,s),r.subtreeFlags=t.subtreeFlags&14680064),l!==null?i=Ia(l,i):(i=tn(i,o,n,null),i.flags|=2),i.return=a,r.return=a,r.sibling=i,a.child=r,r=i,i=a.child,o=e.child.memoizedState,o=o===null?ns(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,a.memoizedState=as,r}return i=e.child,e=i.sibling,r=Ia(i,{mode:"visible",children:r.children}),!(a.mode&1)&&(r.lanes=n),r.return=a,r.sibling=null,e!==null&&(n=a.deletions,n===null?(a.deletions=[e],a.flags|=16):n.push(e)),a.child=r,a.memoizedState=null,r}function gu(e,a){return a=Xi({mode:"visible",children:a},e.mode,0,null),a.return=e,e.child=a}function Lt(e,a,n,r){return r!==null&&tu(r),Jn(a,e.child,null,n),e=gu(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Ng(e,a,n,r,t,i,o){if(n)return a.flags&256?(a.flags&=-257,r=Ho(Error(A(422))),Lt(e,a,o,r)):a.memoizedState!==null?(a.child=e.child,a.flags|=128,null):(i=r.fallback,t=a.mode,r=Xi({mode:"visible",children:r.children},t,0,null),i=tn(i,t,o,null),i.flags|=2,r.return=a,i.return=a,r.sibling=i,a.child=r,a.mode&1&&Jn(a,e.child,null,o),a.child.memoizedState=ns(o),a.memoizedState=as,i);if(!(a.mode&1))return Lt(e,a,o,null);if(t.data==="$!"){if(r=t.nextSibling&&t.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(A(419)),r=Ho(i,r,void 0),Lt(e,a,o,r)}if(l=(o&e.childLanes)!==0,Ae||l){if(r=ae,r!==null){switch(o&-o){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(r.suspendedLanes|o)?0:t,t!==0&&t!==i.retryLane&&(i.retryLane=t,ya(e,t),Ze(r,e,t,-1))}return Mu(),r=Ho(Error(A(421))),Lt(e,a,o,r)}return t.data==="$?"?(a.flags|=128,a.child=e.child,a=xg.bind(null,e),t._reactRetry=a,null):(e=i.treeContext,Le=Pa(t.nextSibling),Re=a,O=!0,We=null,e!==null&&(_e[Oe++]=ua,_e[Oe++]=ca,_e[Oe++]=ln,ua=e.id,ca=e.overflow,ln=a),a=gu(a,r.children),a.flags|=4096,a)}function Yc(e,a,n){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a),Zl(e.return,a,n)}function Vo(e,a,n,r,t){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:t}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=t)}function gy(e,a,n){var r=a.pendingProps,t=r.revealOrder,i=r.tail;if(he(e,a,r.children,n),r=j.current,r&2)r=r&1|2,a.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,n,a);else if(e.tag===19)Yc(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(j,r),!(a.mode&1))a.memoizedState=null;else switch(t){case"forwards":for(n=a.child,t=null;n!==null;)e=n.alternate,e!==null&&Ei(e)===null&&(t=n),n=n.sibling;n=t,n===null?(t=a.child,a.child=null):(t=n.sibling,n.sibling=null),Vo(a,!1,t,n,i);break;case"backwards":for(n=null,t=a.child,a.child=null;t!==null;){if(e=t.alternate,e!==null&&Ei(e)===null){a.child=t;break}e=t.sibling,t.sibling=n,n=t,t=e}Vo(a,!0,n,null,i);break;case"together":Vo(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ri(e,a){!(a.mode&1)&&e!==null&&(e.alternate=null,a.alternate=null,a.flags|=2)}function ma(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),un|=a.lanes,!(n&a.childLanes))return null;if(e!==null&&a.child!==e.child)throw Error(A(153));if(a.child!==null){for(e=a.child,n=Ia(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=Ia(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function bg(e,a,n){switch(a.tag){case 3:vy(a),Gn();break;case 5:Hh(a);break;case 1:Me(a.type)&&Si(a);break;case 4:cu(a,a.stateNode.containerInfo);break;case 10:var r=a.type._context,t=a.memoizedProps.value;D(wi,r._currentValue),r._currentValue=t;break;case 13:if(r=a.memoizedState,r!==null)return r.dehydrated!==null?(D(j,j.current&1),a.flags|=128,null):n&a.child.childLanes?py(e,a,n):(D(j,j.current&1),e=ma(e,a,n),e!==null?e.sibling:null);D(j,j.current&1);break;case 19:if(r=(n&a.childLanes)!==0,e.flags&128){if(r)return gy(e,a,n);a.flags|=128}if(t=a.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),D(j,j.current),r)break;return null;case 22:case 23:return a.lanes=0,yy(e,a,n)}return ma(e,a,n)}var Sy,rs,Ay,ky;Sy=function(e,a){for(var n=a.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break;for(;n.sibling===null;){if(n.return===null||n.return===a)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rs=function(){};Ay=function(e,a,n,r){var t=e.memoizedProps;if(t!==r){e=a.stateNode,qa(aa.current);var i=null;switch(n){case"input":t=El(e,t),r=El(e,r),i=[];break;case"select":t=x({},t,{value:void 0}),r=x({},r,{value:void 0}),i=[];break;case"textarea":t=Nl(e,t),r=Nl(e,r),i=[];break;default:typeof t.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pi)}Ll(n,r);var o;n=null;for(u in t)if(!r.hasOwnProperty(u)&&t.hasOwnProperty(u)&&t[u]!=null)if(u==="style"){var l=t[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=t!=null?t[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&I("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(a.updateQueue=u)&&(a.flags|=4)}};ky=function(e,a,n,r){n!==r&&(a.flags|=4)};function vr(e,a){if(!O)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(a)for(var t=e.child;t!==null;)n|=t.lanes|t.childLanes,r|=t.subtreeFlags&14680064,r|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)n|=t.lanes|t.childLanes,r|=t.subtreeFlags,r|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=r,e.childLanes=n,a}function Lg(e,a,n){var r=a.pendingProps;switch(ru(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(a),null;case 1:return Me(a.type)&&gi(),ue(a),null;case 3:return r=a.stateNode,Hn(),_(Ce),_(de),fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nt(a)?a.flags|=4:e===null||e.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,We!==null&&(ds(We),We=null))),rs(e,a),ue(a),null;case 5:du(a);var t=qa(Xr.current);if(n=a.type,e!==null&&a.stateNode!=null)Ay(e,a,n,r,t),e.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!r){if(a.stateNode===null)throw Error(A(166));return ue(a),null}if(e=qa(aa.current),Nt(a)){r=a.stateNode,n=a.type;var i=a.memoizedProps;switch(r[qe]=a,r[Yr]=i,e=(a.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(t=0;t<$r.length;t++)I($r[t],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":ic(r,i),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},I("invalid",r);break;case"textarea":lc(r,i),I("invalid",r)}Ll(n,i),t=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&$t(r.textContent,l,e),t=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&$t(r.textContent,l,e),t=["children",""+l]):zr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&I("scroll",r)}switch(n){case"input":St(r),oc(r,i,!0);break;case"textarea":St(r),sc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pi)}r=t,a.updateQueue=r,r!==null&&(a.flags|=4)}else{o=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qe]=a,e[Yr]=r,Sy(e,a,!1,!1),a.stateNode=e;e:{switch(o=Rl(n,r),n){case"dialog":I("cancel",e),I("close",e),t=r;break;case"iframe":case"object":case"embed":I("load",e),t=r;break;case"video":case"audio":for(t=0;t<$r.length;t++)I($r[t],e);t=r;break;case"source":I("error",e),t=r;break;case"img":case"image":case"link":I("error",e),I("load",e),t=r;break;case"details":I("toggle",e),t=r;break;case"input":ic(e,r),t=El(e,r),I("invalid",e);break;case"option":t=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},t=x({},r,{value:void 0}),I("invalid",e);break;case"textarea":lc(e,r),t=Nl(e,r),I("invalid",e);break;default:t=r}Ll(n,t),l=t;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Qf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Zf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&xr(e,s):typeof s=="number"&&xr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&I("scroll",e):s!=null&&Fs(e,i,s,o))}switch(n){case"input":St(e),oc(e,r,!1);break;case"textarea":St(e),sc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_a(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Bn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Bn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=pi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return ue(a),null;case 6:if(e&&a.stateNode!=null)ky(e,a,e.memoizedProps,r);else{if(typeof r!="string"&&a.stateNode===null)throw Error(A(166));if(n=qa(Xr.current),qa(aa.current),Nt(a)){if(r=a.stateNode,n=a.memoizedProps,r[qe]=a,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:$t(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$t(r.nodeValue,n,(e.mode&1)!==0)}i&&(a.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=a,a.stateNode=r}return ue(a),null;case 13:if(_(j),r=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&Le!==null&&a.mode&1&&!(a.flags&128))Oh(),Gn(),a.flags|=98560,i=!1;else if(i=Nt(a),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[qe]=a}else Gn(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;ue(a),i=!1}else We!==null&&(ds(We),We=null),i=!0;if(!i)return a.flags&65536?a:null}return a.flags&128?(a.lanes=n,a):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(a.child.flags|=8192,a.mode&1&&(e===null||j.current&1?Q===0&&(Q=3):Mu())),a.updateQueue!==null&&(a.flags|=4),ue(a),null);case 4:return Hn(),rs(e,a),e===null&&Ur(a.stateNode.containerInfo),ue(a),null;case 10:return lu(a.type._context),ue(a),null;case 17:return Me(a.type)&&gi(),ue(a),null;case 19:if(_(j),i=a.memoizedState,i===null)return ue(a),null;if(r=(a.flags&128)!==0,o=i.rendering,o===null)if(r)vr(i,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=a.child;e!==null;){if(o=Ei(e),o!==null){for(a.flags|=128,vr(i,!1),r=o.updateQueue,r!==null&&(a.updateQueue=r,a.flags|=4),a.subtreeFlags=0,r=n,n=a.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(j,j.current&1|2),a.child}e=e.sibling}i.tail!==null&&W()>Wn&&(a.flags|=128,r=!0,vr(i,!1),a.lanes=4194304)}else{if(!r)if(e=Ei(o),e!==null){if(a.flags|=128,r=!0,n=e.updateQueue,n!==null&&(a.updateQueue=n,a.flags|=4),vr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!O)return ue(a),null}else 2*W()-i.renderingStartTime>Wn&&n!==1073741824&&(a.flags|=128,r=!0,vr(i,!1),a.lanes=4194304);i.isBackwards?(o.sibling=a.child,a.child=o):(n=i.last,n!==null?n.sibling=o:a.child=o,i.last=o)}return i.tail!==null?(a=i.tail,i.rendering=a,i.tail=a.sibling,i.renderingStartTime=W(),a.sibling=null,n=j.current,D(j,r?n&1|2:n&1),a):(ue(a),null);case 22:case 23:return Cu(),r=a.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(a.flags|=8192),r&&a.mode&1?Te&1073741824&&(ue(a),a.subtreeFlags&6&&(a.flags|=8192)):ue(a),null;case 24:return null;case 25:return null}throw Error(A(156,a.tag))}function Rg(e,a){switch(ru(a),a.tag){case 1:return Me(a.type)&&gi(),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Hn(),_(Ce),_(de),fu(),e=a.flags,e&65536&&!(e&128)?(a.flags=e&-65537|128,a):null;case 5:return du(a),null;case 13:if(_(j),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(A(340));Gn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return _(j),null;case 4:return Hn(),null;case 10:return lu(a.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var Rt=!1,ce=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,M=null;function Rn(e,a){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){F(e,a,r)}else n.current=null}function ts(e,a,n){try{n()}catch(r){F(e,a,r)}}var Qc=!1;function Bg(e,a){if(xl=yi,e=Eh(),au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var t=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,c=0,d=e,f=null;a:for(;;){for(var m;d!==n||t!==0&&d.nodeType!==3||(l=o+t),d!==i||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break a;if(f===n&&++u===t&&(l=o),f===i&&++c===r&&(s=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fl={focusedElem:e,selectionRange:n},yi=!1,M=a;M!==null;)if(a=M,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,M=e;else for(;M!==null;){a=M;try{var g=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var k=g.memoizedProps,w=g.memoizedState,h=a.stateNode,y=h.getSnapshotBeforeUpdate(a.elementType===a.type?k:He(a.type,k),w);h.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=a.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(S){F(a,a.return,S)}if(e=a.sibling,e!==null){e.return=a.return,M=e;break}M=a.return}return g=Qc,Qc=!1,g}function Kr(e,a,n){var r=a.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var i=t.destroy;t.destroy=void 0,i!==void 0&&ts(a,n,i)}t=t.next}while(t!==r)}}function Yi(e,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var n=a=a.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==a)}}function is(e){var a=e.ref;if(a!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof a=="function"?a(e):a.current=e}}function wy(e){var a=e.alternate;a!==null&&(e.alternate=null,wy(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&(delete a[qe],delete a[Yr],delete a[Hl],delete a[mg],delete a[vg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cy(e){return e.tag===5||e.tag===3||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function os(e,a,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,a?n.nodeType===8?n.parentNode.insertBefore(e,a):n.insertBefore(e,a):(n.nodeType===8?(a=n.parentNode,a.insertBefore(e,n)):(a=n,a.appendChild(e)),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=pi));else if(r!==4&&(e=e.child,e!==null))for(os(e,a,n),e=e.sibling;e!==null;)os(e,a,n),e=e.sibling}function ls(e,a,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ls(e,a,n),e=e.sibling;e!==null;)ls(e,a,n),e=e.sibling}var te=null,Ve=!1;function ga(e,a,n){for(n=n.child;n!==null;)My(e,a,n),n=n.sibling}function My(e,a,n){if(ea&&typeof ea.onCommitFiberUnmount=="function")try{ea.onCommitFiberUnmount(Fi,n)}catch{}switch(n.tag){case 5:ce||Rn(n,a);case 6:var r=te,t=Ve;te=null,ga(e,a,n),te=r,Ve=t,te!==null&&(Ve?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Ve?(e=te,n=n.stateNode,e.nodeType===8?jo(e.parentNode,n):e.nodeType===1&&jo(e,n),Hr(e)):jo(te,n.stateNode));break;case 4:r=te,t=Ve,te=n.stateNode.containerInfo,Ve=!0,ga(e,a,n),te=r,Ve=t;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){t=r=r.next;do{var i=t,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ts(n,a,o),t=t.next}while(t!==r)}ga(e,a,n);break;case 1:if(!ce&&(Rn(n,a),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){F(n,a,l)}ga(e,a,n);break;case 21:ga(e,a,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,ga(e,a,n),ce=r):ga(e,a,n);break;default:ga(e,a,n)}}function qc(e){var a=e.updateQueue;if(a!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pg),a.forEach(function(r){var t=Fg.bind(null,e,r);n.has(r)||(n.add(r),r.then(t,t))})}}function Je(e,a){var n=a.deletions;if(n!==null)for(var r=0;r<n.length;r++){var t=n[r];try{var i=e,o=a,l=o;e:for(;l!==null;){switch(l.tag){case 5:te=l.stateNode,Ve=!1;break e;case 3:te=l.stateNode.containerInfo,Ve=!0;break e;case 4:te=l.stateNode.containerInfo,Ve=!0;break e}l=l.return}if(te===null)throw Error(A(160));My(i,o,t),te=null,Ve=!1;var s=t.alternate;s!==null&&(s.return=null),t.return=null}catch(u){F(t,a,u)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)Ey(a,e),a=a.sibling}function Ey(e,a){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(a,e),Qe(e),r&4){try{Kr(3,e,e.return),Yi(3,e)}catch(k){F(e,e.return,k)}try{Kr(5,e,e.return)}catch(k){F(e,e.return,k)}}break;case 1:Je(a,e),Qe(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(Je(a,e),Qe(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var t=e.stateNode;try{xr(t,"")}catch(k){F(e,e.return,k)}}if(r&4&&(t=e.stateNode,t!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Vf(t,i),Rl(l,o);var u=Rl(l,i);for(o=0;o<s.length;o+=2){var c=s[o],d=s[o+1];c==="style"?Qf(t,d):c==="dangerouslySetInnerHTML"?Zf(t,d):c==="children"?xr(t,d):Fs(t,c,d,u)}switch(l){case"input":Tl(t,i);break;case"textarea":Wf(t,i);break;case"select":var f=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Bn(t,!!i.multiple,m,!1):f!==!!i.multiple&&(i.defaultValue!=null?Bn(t,!!i.multiple,i.defaultValue,!0):Bn(t,!!i.multiple,i.multiple?[]:"",!1))}t[Yr]=i}catch(k){F(e,e.return,k)}}break;case 6:if(Je(a,e),Qe(e),r&4){if(e.stateNode===null)throw Error(A(162));t=e.stateNode,i=e.memoizedProps;try{t.nodeValue=i}catch(k){F(e,e.return,k)}}break;case 3:if(Je(a,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(a.containerInfo)}catch(k){F(e,e.return,k)}break;case 4:Je(a,e),Qe(e);break;case 13:Je(a,e),Qe(e),t=e.child,t.flags&8192&&(i=t.memoizedState!==null,t.stateNode.isHidden=i,!i||t.alternate!==null&&t.alternate.memoizedState!==null||(ku=W())),r&4&&qc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(u=ce)||c,Je(a,e),ce=u):Je(a,e),Qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(d=M=c;M!==null;){switch(f=M,m=f.child,f.tag){case 0:case 11:case 14:case 15:Kr(4,f,f.return);break;case 1:Rn(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{a=r,g.props=a.memoizedProps,g.state=a.memoizedState,g.componentWillUnmount()}catch(k){F(r,n,k)}}break;case 5:Rn(f,f.return);break;case 22:if(f.memoizedState!==null){ad(d);continue}}m!==null?(m.return=f,M=m):ad(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{t=d.stateNode,u?(i=t.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Yf("display",o))}catch(k){F(e,e.return,k)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(k){F(e,e.return,k)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Je(a,e),Qe(e),r&4&&qc(e);break;case 21:break;default:Je(a,e),Qe(e)}}function Qe(e){var a=e.flags;if(a&2){try{e:{for(var n=e.return;n!==null;){if(Cy(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var t=r.stateNode;r.flags&32&&(xr(t,""),r.flags&=-33);var i=Xc(e);ls(e,i,t);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Xc(e);os(e,l,o);break;default:throw Error(A(161))}}catch(s){F(e,e.return,s)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Kg(e,a,n){M=e,Ty(e)}function Ty(e,a,n){for(var r=(e.mode&1)!==0;M!==null;){var t=M,i=t.child;if(t.tag===22&&r){var o=t.memoizedState!==null||Rt;if(!o){var l=t.alternate,s=l!==null&&l.memoizedState!==null||ce;l=Rt;var u=ce;if(Rt=o,(ce=s)&&!u)for(M=t;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?nd(t):s!==null?(s.return=o,M=s):nd(t);for(;i!==null;)M=i,Ty(i),i=i.sibling;M=t,Rt=l,ce=u}ed(e)}else t.subtreeFlags&8772&&i!==null?(i.return=t,M=i):ed(e)}}function ed(e){for(;M!==null;){var a=M;if(a.flags&8772){var n=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:ce||Yi(5,a);break;case 1:var r=a.stateNode;if(a.flags&4&&!ce)if(n===null)r.componentDidMount();else{var t=a.elementType===a.type?n.memoizedProps:He(a.type,n.memoizedProps);r.componentDidUpdate(t,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=a.updateQueue;i!==null&&_c(a,i,r);break;case 3:var o=a.updateQueue;if(o!==null){if(n=null,a.child!==null)switch(a.child.tag){case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}_c(a,o,n)}break;case 5:var l=a.stateNode;if(n===null&&a.flags&4){n=l;var s=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var u=a.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Hr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ce||a.flags&512&&is(a)}catch(f){F(a,a.return,f)}}if(a===e){M=null;break}if(n=a.sibling,n!==null){n.return=a.return,M=n;break}M=a.return}}function ad(e){for(;M!==null;){var a=M;if(a===e){M=null;break}var n=a.sibling;if(n!==null){n.return=a.return,M=n;break}M=a.return}}function nd(e){for(;M!==null;){var a=M;try{switch(a.tag){case 0:case 11:case 15:var n=a.return;try{Yi(4,a)}catch(s){F(a,n,s)}break;case 1:var r=a.stateNode;if(typeof r.componentDidMount=="function"){var t=a.return;try{r.componentDidMount()}catch(s){F(a,t,s)}}var i=a.return;try{is(a)}catch(s){F(a,i,s)}break;case 5:var o=a.return;try{is(a)}catch(s){F(a,o,s)}}}catch(s){F(a,a.return,s)}if(a===e){M=null;break}var l=a.sibling;if(l!==null){l.return=a.return,M=l;break}M=a.return}}var Dg=Math.ceil,Ni=va.ReactCurrentDispatcher,Su=va.ReactCurrentOwner,ze=va.ReactCurrentBatchConfig,B=0,ae=null,U=null,ie=0,Te=0,Pn=Fa(0),Q=0,nt=null,un=0,Qi=0,Au=0,Dr=null,Se=null,ku=0,Wn=1/0,la=null,bi=!1,ss=null,Ka=null,Pt=!1,Na=null,Li=0,Ir=0,us=null,ti=-1,ii=0;function ye(){return B&6?W():ti!==-1?ti:ti=W()}function Da(e){return e.mode&1?B&2&&ie!==0?ie&-ie:gg.transition!==null?(ii===0&&(ii=uh()),ii):(e=K,e!==0||(e=window.event,e=e===void 0?16:vh(e.type)),e):1}function Ze(e,a,n,r){if(50<Ir)throw Ir=0,us=null,Error(A(185));tt(e,n,r),(!(B&2)||e!==ae)&&(e===ae&&(!(B&2)&&(Qi|=n),Q===4&&Ta(e,ie)),Ee(e,r),n===1&&B===0&&!(a.mode&1)&&(Wn=W()+500,Wi&&Ga()))}function Ee(e,a){var n=e.callbackNode;gp(e,a);var r=hi(e,e===ae?ie:0);if(r===0)n!==null&&dc(n),e.callbackNode=null,e.callbackPriority=0;else if(a=r&-r,e.callbackPriority!==a){if(n!=null&&dc(n),a===1)e.tag===0?pg(rd.bind(null,e)):Dh(rd.bind(null,e)),hg(function(){!(B&6)&&Ga()}),n=null;else{switch(ch(r)){case 1:n=Ws;break;case 4:n=lh;break;case 16:n=fi;break;case 536870912:n=sh;break;default:n=fi}n=Ky(n,$y.bind(null,e))}e.callbackPriority=a,e.callbackNode=n}}function $y(e,a){if(ti=-1,ii=0,B&6)throw Error(A(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=hi(e,e===ae?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||a)a=Ri(e,r);else{a=r;var t=B;B|=2;var i=by();(ae!==e||ie!==a)&&(la=null,Wn=W()+500,rn(e,a));do try{Og();break}catch(l){Ny(e,l)}while(1);ou(),Ni.current=i,B=t,U!==null?a=0:(ae=null,ie=0,a=Q)}if(a!==0){if(a===2&&(t=Il(e),t!==0&&(r=t,a=cs(e,t))),a===1)throw n=nt,rn(e,0),Ta(e,r),Ee(e,W()),n;if(a===6)Ta(e,r);else{if(t=e.current.alternate,!(r&30)&&!Ig(t)&&(a=Ri(e,r),a===2&&(i=Il(e),i!==0&&(r=i,a=cs(e,i))),a===1))throw n=nt,rn(e,0),Ta(e,r),Ee(e,W()),n;switch(e.finishedWork=t,e.finishedLanes=r,a){case 0:case 1:throw Error(A(345));case 2:Ya(e,Se,la);break;case 3:if(Ta(e,r),(r&130023424)===r&&(a=ku+500-W(),10<a)){if(hi(e,0)!==0)break;if(t=e.suspendedLanes,(t&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=Jl(Ya.bind(null,e,Se,la),a);break}Ya(e,Se,la);break;case 4:if(Ta(e,r),(r&4194240)===r)break;for(a=e.eventTimes,t=-1;0<r;){var o=31-Ue(r);i=1<<o,o=a[o],o>t&&(t=o),r&=~i}if(r=t,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dg(r/1960))-r,10<r){e.timeoutHandle=Jl(Ya.bind(null,e,Se,la),r);break}Ya(e,Se,la);break;case 5:Ya(e,Se,la);break;default:throw Error(A(329))}}}return Ee(e,W()),e.callbackNode===n?$y.bind(null,e):null}function cs(e,a){var n=Dr;return e.current.memoizedState.isDehydrated&&(rn(e,a).flags|=256),e=Ri(e,a),e!==2&&(a=Se,Se=n,a!==null&&ds(a)),e}function ds(e){Se===null?Se=e:Se.push.apply(Se,e)}function Ig(e){for(var a=e;;){if(a.flags&16384){var n=a.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var t=n[r],i=t.getSnapshot;t=t.value;try{if(!Ye(i(),t))return!1}catch{return!1}}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ta(e,a){for(a&=~Au,a&=~Qi,e.suspendedLanes|=a,e.pingedLanes&=~a,e=e.expirationTimes;0<a;){var n=31-Ue(a),r=1<<n;e[n]=-1,a&=~r}}function rd(e){if(B&6)throw Error(A(327));On();var a=hi(e,0);if(!(a&1))return Ee(e,W()),null;var n=Ri(e,a);if(e.tag!==0&&n===2){var r=Il(e);r!==0&&(a=r,n=cs(e,r))}if(n===1)throw n=nt,rn(e,0),Ta(e,a),Ee(e,W()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=a,Ya(e,Se,la),Ee(e,W()),null}function wu(e,a){var n=B;B|=1;try{return e(a)}finally{B=n,B===0&&(Wn=W()+500,Wi&&Ga())}}function cn(e){Na!==null&&Na.tag===0&&!(B&6)&&On();var a=B;B|=1;var n=ze.transition,r=K;try{if(ze.transition=null,K=1,e)return e()}finally{K=r,ze.transition=n,B=a,!(B&6)&&Ga()}}function Cu(){Te=Pn.current,_(Pn)}function rn(e,a){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fg(n)),U!==null)for(n=U.return;n!==null;){var r=n;switch(ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gi();break;case 3:Hn(),_(Ce),_(de),fu();break;case 5:du(r);break;case 4:Hn();break;case 13:_(j);break;case 19:_(j);break;case 10:lu(r.type._context);break;case 22:case 23:Cu()}n=n.return}if(ae=e,U=e=Ia(e.current,null),ie=Te=a,Q=0,nt=null,Au=Qi=un=0,Se=Dr=null,Xa!==null){for(a=0;a<Xa.length;a++)if(n=Xa[a],r=n.interleaved,r!==null){n.interleaved=null;var t=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=t,r.next=o}n.pending=r}Xa=null}return e}function Ny(e,a){do{var n=U;try{if(ou(),ai.current=$i,Ti){for(var r=z.memoizedState;r!==null;){var t=r.queue;t!==null&&(t.pending=null),r=r.next}Ti=!1}if(sn=0,ee=Y=z=null,Br=!1,qr=0,Su.current=null,n===null||n.return===null){Q=1,nt=a,U=null;break}e:{var i=e,o=n.return,l=n,s=a;if(a=ie,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Jc(o);if(m!==null){m.flags&=-257,Hc(m,o,l,i,a),m.mode&1&&Gc(i,u,a),a=m,s=u;var g=a.updateQueue;if(g===null){var k=new Set;k.add(s),a.updateQueue=k}else g.add(s);break e}else{if(!(a&1)){Gc(i,u,a),Mu();break e}s=Error(A(426))}}else if(O&&l.mode&1){var w=Jc(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Hc(w,o,l,i,a),tu(Vn(s,l));break e}}i=s=Vn(s,l),Q!==4&&(Q=2),Dr===null?Dr=[i]:Dr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,a&=-a,i.lanes|=a;var h=dy(i,s,a);Ic(i,h);break e;case 1:l=s;var y=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ka===null||!Ka.has(v)))){i.flags|=65536,a&=-a,i.lanes|=a;var S=fy(i,l,a);Ic(i,S);break e}}i=i.return}while(i!==null)}Ry(n)}catch(C){a=C,U===n&&n!==null&&(U=n=n.return);continue}break}while(1)}function by(){var e=Ni.current;return Ni.current=$i,e===null?$i:e}function Mu(){(Q===0||Q===3||Q===2)&&(Q=4),ae===null||!(un&268435455)&&!(Qi&268435455)||Ta(ae,ie)}function Ri(e,a){var n=B;B|=2;var r=by();(ae!==e||ie!==a)&&(la=null,rn(e,a));do try{_g();break}catch(t){Ny(e,t)}while(1);if(ou(),B=n,Ni.current=r,U!==null)throw Error(A(261));return ae=null,ie=0,Q}function _g(){for(;U!==null;)Ly(U)}function Og(){for(;U!==null&&!up();)Ly(U)}function Ly(e){var a=By(e.alternate,e,Te);e.memoizedProps=e.pendingProps,a===null?Ry(e):U=a,Su.current=null}function Ry(e){var a=e;do{var n=a.alternate;if(e=a.return,a.flags&32768){if(n=Rg(n,a),n!==null){n.flags&=32767,U=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,U=null;return}}else if(n=Lg(n,a,Te),n!==null){U=n;return}if(a=a.sibling,a!==null){U=a;return}U=a=e}while(a!==null);Q===0&&(Q=5)}function Ya(e,a,n){var r=K,t=ze.transition;try{ze.transition=null,K=1,jg(e,a,n,r)}finally{ze.transition=t,K=r}return null}function jg(e,a,n,r){do On();while(Na!==null);if(B&6)throw Error(A(327));n=e.finishedWork;var t=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Sp(e,i),e===ae&&(U=ae=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pt||(Pt=!0,Ky(fi,function(){return On(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var o=K;K=1;var l=B;B|=4,Su.current=null,Bg(e,n),Ey(n,e),ig(Fl),yi=!!xl,Fl=xl=null,e.current=n,Kg(n),cp(),B=l,K=o,ze.transition=i}else e.current=n;if(Pt&&(Pt=!1,Na=e,Li=t),i=e.pendingLanes,i===0&&(Ka=null),hp(n.stateNode),Ee(e,W()),a!==null)for(r=e.onRecoverableError,n=0;n<a.length;n++)t=a[n],r(t.value,{componentStack:t.stack,digest:t.digest});if(bi)throw bi=!1,e=ss,ss=null,e;return Li&1&&e.tag!==0&&On(),i=e.pendingLanes,i&1?e===us?Ir++:(Ir=0,us=e):Ir=0,Ga(),null}function On(){if(Na!==null){var e=ch(Li),a=ze.transition,n=K;try{if(ze.transition=null,K=16>e?16:e,Na===null)var r=!1;else{if(e=Na,Na=null,Li=0,B&6)throw Error(A(331));var t=B;for(B|=4,M=e.current;M!==null;){var i=M,o=i.child;if(M.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Kr(8,c,i)}var d=c.child;if(d!==null)d.return=c,M=d;else for(;M!==null;){c=M;var f=c.sibling,m=c.return;if(wy(c),c===u){M=null;break}if(f!==null){f.return=m,M=f;break}M=m}}}var g=i.alternate;if(g!==null){var k=g.child;if(k!==null){g.child=null;do{var w=k.sibling;k.sibling=null,k=w}while(k!==null)}}M=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,M=o;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Kr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,M=h;break e}M=i.return}}var y=e.current;for(M=y;M!==null;){o=M;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,M=v;else e:for(o=y;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Yi(9,l)}}catch(C){F(l,l.return,C)}if(l===o){M=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,M=S;break e}M=l.return}}if(B=t,Ga(),ea&&typeof ea.onPostCommitFiberRoot=="function")try{ea.onPostCommitFiberRoot(Fi,e)}catch{}r=!0}return r}finally{K=n,ze.transition=a}}return!1}function td(e,a,n){a=Vn(n,a),a=dy(e,a,1),e=Ba(e,a,1),a=ye(),e!==null&&(tt(e,1,a),Ee(e,a))}function F(e,a,n){if(e.tag===3)td(e,e,n);else for(;a!==null;){if(a.tag===3){td(a,e,n);break}else if(a.tag===1){var r=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ka===null||!Ka.has(r))){e=Vn(n,e),e=fy(a,e,1),a=Ba(a,e,1),e=ye(),a!==null&&(tt(a,1,e),Ee(a,e));break}}a=a.return}}function zg(e,a,n){var r=e.pingCache;r!==null&&r.delete(a),a=ye(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ie&n)===n&&(Q===4||Q===3&&(ie&130023424)===ie&&500>W()-ku?rn(e,0):Au|=n),Ee(e,a)}function Py(e,a){a===0&&(e.mode&1?(a=wt,wt<<=1,!(wt&130023424)&&(wt=4194304)):a=1);var n=ye();e=ya(e,a),e!==null&&(tt(e,a,n),Ee(e,n))}function xg(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),Py(e,n)}function Fg(e,a){var n=0;switch(e.tag){case 13:var r=e.stateNode,t=e.memoizedState;t!==null&&(n=t.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(a),Py(e,n)}var By;By=function(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps||Ce.current)Ae=!0;else{if(!(e.lanes&n)&&!(a.flags&128))return Ae=!1,bg(e,a,n);Ae=!!(e.flags&131072)}else Ae=!1,O&&a.flags&1048576&&Ih(a,ki,a.index);switch(a.lanes=0,a.tag){case 2:var r=a.type;ri(e,a),e=a.pendingProps;var t=Fn(a,de.current);_n(a,n),t=yu(null,a,r,e,t,n);var i=mu();return a.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Me(r)?(i=!0,Si(a)):i=!1,a.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,uu(a),t.updater=Ui,a.stateNode=t,t._reactInternals=a,Ql(a,r,e,n),a=es(null,a,r,!0,i,n)):(a.tag=0,O&&i&&nu(a),he(null,a,t,n),a=a.child),a;case 16:r=a.elementType;e:{switch(ri(e,a),e=a.pendingProps,t=r._init,r=t(r._payload),a.type=r,t=a.tag=Jg(r),e=He(r,e),t){case 0:a=ql(null,a,r,e,n);break e;case 1:a=Uc(null,a,r,e,n);break e;case 11:a=Vc(null,a,r,e,n);break e;case 14:a=Wc(null,a,r,He(r.type,e),n);break e}throw Error(A(306,r,""))}return a;case 0:return r=a.type,t=a.pendingProps,t=a.elementType===r?t:He(r,t),ql(e,a,r,t,n);case 1:return r=a.type,t=a.pendingProps,t=a.elementType===r?t:He(r,t),Uc(e,a,r,t,n);case 3:e:{if(vy(a),e===null)throw Error(A(387));r=a.pendingProps,i=a.memoizedState,t=i.element,zh(e,a),Mi(a,r,null,n);var o=a.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){t=Vn(Error(A(423)),a),a=Zc(e,a,r,n,t);break e}else if(r!==t){t=Vn(Error(A(424)),a),a=Zc(e,a,r,n,t);break e}else for(Le=Pa(a.stateNode.containerInfo.firstChild),Re=a,O=!0,We=null,n=Jh(a,null,r,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===t){a=ma(e,a,n);break e}he(e,a,r,n)}a=a.child}return a;case 5:return Hh(a),e===null&&Ul(a),r=a.type,t=a.pendingProps,i=e!==null?e.memoizedProps:null,o=t.children,Gl(r,t)?o=null:i!==null&&Gl(r,i)&&(a.flags|=32),my(e,a),he(e,a,o,n),a.child;case 6:return e===null&&Ul(a),null;case 13:return py(e,a,n);case 4:return cu(a,a.stateNode.containerInfo),r=a.pendingProps,e===null?a.child=Jn(a,null,r,n):he(e,a,r,n),a.child;case 11:return r=a.type,t=a.pendingProps,t=a.elementType===r?t:He(r,t),Vc(e,a,r,t,n);case 7:return he(e,a,a.pendingProps,n),a.child;case 8:return he(e,a,a.pendingProps.children,n),a.child;case 12:return he(e,a,a.pendingProps.children,n),a.child;case 10:e:{if(r=a.type._context,t=a.pendingProps,i=a.memoizedProps,o=t.value,D(wi,r._currentValue),r._currentValue=o,i!==null)if(Ye(i.value,o)){if(i.children===t.children&&!Ce.current){a=ma(e,a,n);break e}}else for(i=a.child,i!==null&&(i.return=a);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=da(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Zl(i.return,n,a),l.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===a.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(A(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Zl(o,n,a),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===a){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}he(e,a,t.children,n),a=a.child}return a;case 9:return t=a.type,r=a.pendingProps.children,_n(a,n),t=xe(t),r=r(t),a.flags|=1,he(e,a,r,n),a.child;case 14:return r=a.type,t=He(r,a.pendingProps),t=He(r.type,t),Wc(e,a,r,t,n);case 15:return hy(e,a,a.type,a.pendingProps,n);case 17:return r=a.type,t=a.pendingProps,t=a.elementType===r?t:He(r,t),ri(e,a),a.tag=1,Me(r)?(e=!0,Si(a)):e=!1,_n(a,n),Fh(a,r,t),Ql(a,r,t,n),es(null,a,r,!0,e,n);case 19:return gy(e,a,n);case 22:return yy(e,a,n)}throw Error(A(156,a.tag))};function Ky(e,a){return oh(e,a)}function Gg(e,a,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,a,n,r){return new Gg(e,a,n,r)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jg(e){if(typeof e=="function")return Eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Js)return 11;if(e===Hs)return 14}return 2}function Ia(e,a){var n=e.alternate;return n===null?(n=je(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oi(e,a,n,r,t,i){var o=2;if(r=e,typeof e=="function")Eu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case wn:return tn(n.children,t,i,a);case Gs:o=8,t|=8;break;case kl:return e=je(12,n,a,t|2),e.elementType=kl,e.lanes=i,e;case wl:return e=je(13,n,a,t),e.elementType=wl,e.lanes=i,e;case Cl:return e=je(19,n,a,t),e.elementType=Cl,e.lanes=i,e;case Gf:return Xi(n,t,i,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xf:o=10;break e;case Ff:o=9;break e;case Js:o=11;break e;case Hs:o=14;break e;case ka:o=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return a=je(o,n,a,t),a.elementType=e,a.type=r,a.lanes=i,a}function tn(e,a,n,r){return e=je(7,e,r,a),e.lanes=n,e}function Xi(e,a,n,r){return e=je(22,e,r,a),e.elementType=Gf,e.lanes=n,e.stateNode={isHidden:!1},e}function Wo(e,a,n){return e=je(6,e,null,a),e.lanes=n,e}function Uo(e,a,n){return a=je(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function Hg(e,a,n,r,t){this.tag=a,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=No(0),this.expirationTimes=No(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.identifierPrefix=r,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function Tu(e,a,n,r,t,i,o,l,s){return e=new Hg(e,a,n,l,s),a===1?(a=1,i===!0&&(a|=8)):a=0,i=je(3,null,null,a),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(i),e}function Vg(e,a,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:a,implementation:n}}function Dy(e){if(!e)return Oa;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(A(170));var a=e;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Me(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Me(n))return Kh(e,n,a)}return a}function Iy(e,a,n,r,t,i,o,l,s){return e=Tu(n,r,!0,e,t,i,o,l,s),e.context=Dy(null),n=e.current,r=ye(),t=Da(n),i=da(r,t),i.callback=a??null,Ba(n,i,t),e.current.lanes=t,tt(e,t,r),Ee(e,r),e}function qi(e,a,n,r){var t=a.current,i=ye(),o=Da(t);return n=Dy(n),a.context===null?a.context=n:a.pendingContext=n,a=da(i,o),a.payload={element:e},r=r===void 0?null:r,r!==null&&(a.callback=r),e=Ba(t,a,o),e!==null&&(Ze(e,t,o,i),ei(e,t,o)),o}function Pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function id(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function $u(e,a){id(e,a),(e=e.alternate)&&id(e,a)}function Wg(){return null}var _y=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nu(e){this._internalRoot=e}eo.prototype.render=Nu.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(A(409));qi(e,a,null,null)};eo.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;cn(function(){qi(null,e,null,null)}),a[ha]=null}};function eo(e){this._internalRoot=e}eo.prototype.unstable_scheduleHydration=function(e){if(e){var a=hh();e={blockedOn:null,target:e,priority:a};for(var n=0;n<Ea.length&&a!==0&&a<Ea[n].priority;n++);Ea.splice(n,0,e),n===0&&mh(e)}};function bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function od(){}function Ug(e,a,n,r,t){if(t){if(typeof r=="function"){var i=r;r=function(){var u=Pi(o);i.call(u)}}var o=Iy(a,r,e,0,null,!1,!1,"",od);return e._reactRootContainer=o,e[ha]=o.current,Ur(e.nodeType===8?e.parentNode:e),cn(),o}for(;t=e.lastChild;)e.removeChild(t);if(typeof r=="function"){var l=r;r=function(){var u=Pi(s);l.call(u)}}var s=Tu(e,0,!1,null,null,!1,!1,"",od);return e._reactRootContainer=s,e[ha]=s.current,Ur(e.nodeType===8?e.parentNode:e),cn(function(){qi(a,s,n,r)}),s}function no(e,a,n,r,t){var i=n._reactRootContainer;if(i){var o=i;if(typeof t=="function"){var l=t;t=function(){var s=Pi(o);l.call(s)}}qi(a,o,e,t)}else o=Ug(n,a,e,t,r);return Pi(o)}dh=function(e){switch(e.tag){case 3:var a=e.stateNode;if(a.current.memoizedState.isDehydrated){var n=Tr(a.pendingLanes);n!==0&&(Us(a,n|1),Ee(a,W()),!(B&6)&&(Wn=W()+500,Ga()))}break;case 13:cn(function(){var r=ya(e,1);if(r!==null){var t=ye();Ze(r,e,1,t)}}),$u(e,1)}};Zs=function(e){if(e.tag===13){var a=ya(e,134217728);if(a!==null){var n=ye();Ze(a,e,134217728,n)}$u(e,134217728)}};fh=function(e){if(e.tag===13){var a=Da(e),n=ya(e,a);if(n!==null){var r=ye();Ze(n,e,a,r)}$u(e,a)}};hh=function(){return K};yh=function(e,a){var n=K;try{return K=e,a()}finally{K=n}};Bl=function(e,a,n){switch(a){case"input":if(Tl(e,n),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<n.length;a++){var r=n[a];if(r!==e&&r.form===e.form){var t=Vi(r);if(!t)throw Error(A(90));Hf(r),Tl(r,t)}}}break;case"textarea":Wf(e,n);break;case"select":a=n.value,a!=null&&Bn(e,!!n.multiple,a,!1)}};eh=wu;ah=cn;var Zg={usingClientEntryPoint:!1,Events:[ot,Tn,Vi,Xf,qf,wu]},pr={findFiberByHostInstance:Qa,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yg={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:va.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=th(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||Wg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bt.isDisabled&&Bt.supportsFiber)try{Fi=Bt.inject(Yg),ea=Bt}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zg;Be.createPortal=function(e,a){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bu(a))throw Error(A(200));return Vg(e,a,null,n)};Be.createRoot=function(e,a){if(!bu(e))throw Error(A(299));var n=!1,r="",t=_y;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onRecoverableError!==void 0&&(t=a.onRecoverableError)),a=Tu(e,1,!1,null,null,n,!1,r,t),e[ha]=a.current,Ur(e.nodeType===8?e.parentNode:e),new Nu(a)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=th(a),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return cn(e)};Be.hydrate=function(e,a,n){if(!ao(a))throw Error(A(200));return no(null,e,a,!0,n)};Be.hydrateRoot=function(e,a,n){if(!bu(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,t=!1,i="",o=_y;if(n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),a=Iy(a,null,e,1,n??null,t,!1,i,o),e[ha]=a.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],t=n._getVersion,t=t(n._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[n,t]:a.mutableSourceEagerHydrationData.push(n,t);return new eo(a)};Be.render=function(e,a,n){if(!ao(a))throw Error(A(200));return no(null,e,a,!1,n)};Be.unmountComponentAtNode=function(e){if(!ao(e))throw Error(A(40));return e._reactRootContainer?(cn(function(){no(null,null,e,!1,function(){e._reactRootContainer=null,e[ha]=null})}),!0):!1};Be.unstable_batchedUpdates=wu;Be.unstable_renderSubtreeIntoContainer=function(e,a,n,r){if(!ao(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return no(e,a,n,!1,r)};Be.version="18.2.0-next-9e3b772b8-20220608";function Oy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oy)}catch(e){console.error(e)}}Oy(),If.exports=Be;var Qg=If.exports,ld=Qg;Sl.createRoot=ld.createRoot,Sl.hydrateRoot=ld.hydrateRoot;let Kt;const Xg=new Uint8Array(16);function qg(){if(!Kt&&(Kt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Kt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Kt(Xg)}const re=[];for(let e=0;e<256;++e)re.push((e+256).toString(16).slice(1));function e0(e,a=0){return(re[e[a+0]]+re[e[a+1]]+re[e[a+2]]+re[e[a+3]]+"-"+re[e[a+4]]+re[e[a+5]]+"-"+re[e[a+6]]+re[e[a+7]]+"-"+re[e[a+8]]+re[e[a+9]]+"-"+re[e[a+10]]+re[e[a+11]]+re[e[a+12]]+re[e[a+13]]+re[e[a+14]]+re[e[a+15]]).toLowerCase()}const a0=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),sd={randomUUID:a0};function jy(e,a,n){if(sd.randomUUID&&!a&&!e)return sd.randomUUID();e=e||{};const r=e.random||(e.rng||qg)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,a){n=n||0;for(let t=0;t<16;++t)a[n+t]=r[t];return a}return e0(r)}class zy{constructor(a,n,r,t,i,o,l){le(this,"id",jy());this.firstName=a,this.lastName=n,this.age=r,this.position=t,this.goals=i,this.matchesPlayed=o,this.attributes=l}progress(){this.age+=1}get rating(){return 0}}class ro extends zy{constructor(a,n,r,t,i,o){super(a,n,r,"GK",t,i,o)}progress(){super.progress()}get rating(){return this.attributes.goalkeeping}}class ja extends zy{constructor(a,n,r,t,i,o,l){super(a,n,r,t,i,o,l)}progress(){super.progress()}}class xy{constructor(a,n,r,t,i,o){this.id=a,this.name=n,this.stadium=r,this.reputation=t,this.roster=i,this.standingsInfo=o}get points(){return this.standingsInfo.wins*3+this.standingsInfo.draws}get goalDiff(){return this.standingsInfo.goalsFor-this.standingsInfo.goalsAgainst}addPlayer(a){this.roster.push(a)}get teamOffenseTotal(){let a=0;for(const n of this.roster)n instanceof ja&&(a+=n.attributes.attacking);return a}get teamDefenseTotal(){let a=0;for(const n of this.roster)n instanceof ro&&(a+=n.attributes.goalkeeping),n instanceof ja&&(a+=n.attributes.defending);return a}}const n0=[{name:"Arsenal",stadium:"Emirates Stadium",reputation:81},{name:"Aston Villa",stadium:"Villa Park",reputation:69},{name:"Bournemouth",stadium:"Dean Court",reputation:63},{name:"Brentford",stadium:"Brentford Community Stadium",reputation:63},{name:"Brighton",stadium:"Falmer Stadium",reputation:66},{name:"Burnley",stadium:"Turf Moor",reputation:60},{name:"Chelsea",stadium:"Stamford Bridge",reputation:88},{name:"Crystal Palace",stadium:"Selhurst Park",reputation:66},{name:"Everton",stadium:"Goodison Park",reputation:67},{name:"Fulham",stadium:"Craven Cottage",reputation:64},{name:"Liverpool",stadium:"Anfield",reputation:90},{name:"Luton Town",stadium:"Kenilworth Road",reputation:56},{name:"Man City",stadium:"City of Manchester Stadium",reputation:91},{name:"Man United",stadium:"Old Trafford",reputation:84},{name:"Newcastle",stadium:"St. James' Park",reputation:74},{name:"Nottm Forest",stadium:"City Ground",reputation:62},{name:"Sheffield United",stadium:"Bramall Lane",reputation:61},{name:"Tottenham",stadium:"Tottenham Hotspur Stadium",reputation:81},{name:"West Ham",stadium:"London Stadium",reputation:70},{name:"Wolves",stadium:"Molineux Stadium",reputation:66}],r0={firstName:e=>{let a=[];switch(e){case"male":a=["Jacob","Michael","Ethan","Joshua","Daniel","Alexander","Anthony","William","Christopher","Matthew","Jayden","Andrew","Joseph","David","Noah","Aiden","James","Ryan","Logan","John","Nathan","Elijah","Christian","Gabriel","Benjamin","Jonathan","Tyler","Samuel","Nicholas","Gavin","Dylan","Jackson","Brandon","Caleb","Mason","Angel","Isaac","Evan","Jack","Kevin","Jose","Isaiah","Luke","Landon","Justin","Lucas","Zachary","Jordan","Robert","Aaron","Brayden","Thomas","Cameron","Hunter","Austin","Adrian","Connor","Owen","Aidan","Jason","Julian","Wyatt","Charles","Luis","Carter","Juan","Chase","Diego","Jeremiah","Brody","Xavier","Adam","Carlos","Sebastian","Liam","Hayden","Nathaniel","Henry","Jesus","Ian","Tristan","Bryan","Sean","Cole","Alex","Eric","Brian","Jaden","Carson","Blake","Ayden","Cooper","Dominic","Brady","Caden","Josiah","Kyle","Colton","Kaden","Eli","Miguel","Antonio","Parker","Steven","Alejandro","Riley","Richard","Timothy","Devin","Jesse","Victor","Jake","Joel","Colin","Kaleb","Bryce","Levi","Oliver","Oscar","Vincent","Ashton","Cody","Micah","Preston","Marcus","Max","Patrick","Seth","Jeremy","Peyton","Nolan","Ivan","Damian","Maxwell","Alan","Kenneth","Jonah","Jorge","Mark","Giovanni","Eduardo","Grant","Collin","Gage","Omar","Emmanuel","Trevor","Edward","Ricardo","Cristian","Nicolas","Kayden","George","Jaxon","Paul","Braden","Elias","Andres","Derek","Garrett","Tanner","Malachi","Conner","Fernando","Cesar","Javier","Miles","Jaiden","Alexis","Leonardo","Santiago","Francisco","Cayden","Shane","Edwin","Hudson","Travis","Bryson","Erick","Jace","Hector","Josue","Peter","Jaylen","Mario","Manuel","Abraham","Grayson","Damien","Kaiden","Spencer","Stephen","Edgar","Wesley","Shawn","Trenton","Jared","Jeffrey","Landen","Johnathan","Bradley","Braxton","Ryder","Camden","Roman","Asher","Brendan","Maddox","Sergio","Israel","Andy","Lincoln","Erik","Donovan","Raymond","Avery","Rylan","Dalton","Harrison","Andre","Martin","Keegan","Marco","Jude","Sawyer","Dakota","Leo","Calvin","Kai","Drake","Troy","Zion","Clayton","Roberto","Zane","Gregory","Tucker","Rafael","Kingston","Dominick","Ezekiel","Griffin","Devon","Drew","Lukas","Johnny","Ty","Pedro","Tyson","Caiden","Mateo","Braylon","Cash","Aden","Chance","Taylor","Marcos","Maximus","Ruben","Emanuel","Simon","Corbin","Brennan","Dillon","Skyler","Myles","Xander","Jaxson","Dawson","Kameron","Kyler","Axel","Colby","Jonas","Joaquin","Payton","Brock","Frank","Enrique","Quinn","Emilio","Malik","Grady","Angelo","Julio","Derrick","Raul","Fabian","Corey","Gerardo","Dante","Ezra","Armando","Allen","Theodore","Gael","Amir","Zander","Adan","Maximilian","Randy","Easton","Dustin","Luca","Phillip","Julius","Charlie","Ronald","Jakob","Cade","Brett","Trent","Silas","Keith","Emiliano","Trey","Jalen","Darius","Lane","Jerry","Jaime","Scott","Graham","Weston","Braydon","Anderson","Rodrigo","Pablo","Saul","Danny","Donald","Elliot","Brayan","Dallas","Lorenzo","Casey","Mitchell","Alberto","Tristen","Rowan","Jayson","Gustavo","Aaden","Amari","Dean","Braeden","Declan","Chris","Ismael","Dane","Louis","Arturo","Brenden","Felix","Jimmy","Cohen","Tony","Holden","Reid","Abel","Bennett","Zackary","Arthur","Nehemiah","Ricky","Esteban","Cruz","Finn","Mauricio","Dennis","Keaton","Albert","Marvin","Mathew","Larry","Moises","Issac","Philip","Quentin","Curtis","Greyson","Jameson","Everett","Jayce","Darren","Elliott","Uriel","Alfredo","Hugo","Alec","Jamari","Marshall","Walter","Judah","Jay","Lance","Beau","Ali","Landyn","Yahir","Phoenix","Nickolas","Kobe","Bryant","Maurice","Russell","Leland","Colten","Reed","Davis","Joe","Ernesto","Desmond","Kade","Reece","Morgan","Ramon","Rocco","Orlando","Ryker","Brodie","Paxton","Jacoby","Douglas","Kristopher","Gary","Lawrence","Izaiah","Solomon","Nikolas","Mekhi","Justice","Tate","Jaydon","Salvador","Shaun","Alvin","Eddie","Kane","Davion","Zachariah","Dorian","Titus","Kellen","Camron","Isiah","Javon","Nasir","Milo","Johan","Byron","Jasper","Jonathon","Chad","Marc","Kelvin","Chandler","Sam","Cory","Deandre","River","Reese","Roger","Quinton","Talon","Romeo","Franklin","Noel","Alijah","Guillermo","Gunner","Damon","Jadon","Emerson","Micheal","Bruce","Terry","Kolton","Melvin","Beckett","Porter","August","Brycen","Dayton","Jamarion","Leonel","Karson","Zayden","Keagan","Carl","Khalil","Cristopher","Nelson","Braiden","Moses","Isaias","Roy","Triston","Walker","Kale","Jermaine","Leon","Rodney","Kristian","Mohamed","Ronan","Pierce","Trace","Warren","Jeffery","Maverick","Cyrus","Quincy","Nathanael","Skylar","Tommy","Conor","Noe","Ezequiel","Demetrius","Jaylin","Kendrick","Frederick","Terrance","Bobby","Jamison","Jon","Rohan","Jett","Kieran","Tobias","Ari","Colt","Gideon","Felipe","Kenny","Wilson","Orion","Kamari","Gunnar","Jessie","Alonzo","Gianni","Omari","Waylon","Malcolm","Emmett","Abram","Julien","London","Tomas","Allan","Terrell","Matteo","Tristin","Jairo","Reginald","Brent","Ahmad","Yandel","Rene","Willie","Boston","Billy","Marlon","Trevon","Aydan","Jamal","Aldo","Ariel","Cason","Braylen","Javion","Joey","Rogelio","Ahmed","Dominik","Brendon","Toby","Kody","Marquis","Ulises","Armani","Adriel","Alfonso","Branden","Will","Craig","Ibrahim","Osvaldo","Wade","Harley","Steve","Davin","Deshawn","Kason","Damion","Jaylon","Jefferson","Aron","Brooks","Darian","Gerald","Rolando","Terrence","Enzo","Kian","Ryland","Barrett","Jaeden","Ben","Bradyn","Giovani","Blaine","Madden","Jerome","Muhammad","Ronnie","Layne","Kolby","Leonard","Vicente","Cale","Alessandro","Zachery","Gavyn","Aydin","Xzavier","Malakai","Raphael","Cannon","Rudy","Asa","Darrell","Giancarlo","Elisha","Junior","Zackery","Alvaro","Lewis","Valentin","Deacon","Jase","Harry","Kendall","Rashad","Finnegan","Mohammed","Ramiro","Cedric","Brennen","Santino","Stanley","Tyrone","Chace","Francis","Johnathon","Teagan","Zechariah","Alonso","Kaeden","Kamden","Gilberto","Ray","Karter","Luciano","Nico","Kole","Aryan","Draven","Jamie","Misael","Lee","Alexzander","Camren","Giovanny","Amare","Rhett","Rhys","Rodolfo","Nash","Markus","Deven","Mohammad","Moshe","Quintin","Dwayne","Memphis","Atticus","Davian","Eugene","Jax","Antoine","Wayne","Randall","Semaj","Uriah","Clark","Aidyn","Jorden","Maxim","Aditya","Lawson","Messiah","Korbin","Sullivan","Freddy","Demarcus","Neil","Brice","King","Davon","Elvis","Ace","Dexter","Heath","Duncan","Jamar","Sincere","Irvin","Remington","Kadin","Soren","Tyree","Damarion","Talan","Adrien","Gilbert","Keenan","Darnell","Adolfo","Tristian","Derick","Isai","Rylee","Gauge","Harold","Kareem","Deangelo","Agustin","Coleman","Zavier","Lamar","Emery","Jaydin","Devan","Jordyn","Mathias","Prince","Sage","Seamus","Jasiah","Efrain","Darryl","Arjun","Mike","Roland","Conrad","Kamron","Hamza","Santos","Frankie","Dominique","Marley","Vance","Dax","Jamir","Kylan","Todd","Maximo","Jabari","Matthias","Haiden","Luka","Marcelo","Keon","Layton","Tyrell","Kash","Raiden","Cullen","Donte","Jovani","Cordell","Kasen","Rory","Alfred","Darwin","Ernest","Bailey","Gaige","Hassan","Jamarcus","Killian","Augustus","Trevin","Zain","Ellis","Rex","Yusuf","Bruno","Jaidyn","Justus","Ronin","Humberto","Jaquan","Josh","Kasey","Winston","Dashawn","Lucian","Matias","Sidney","Ignacio","Nigel","Van","Elian","Finley","Jaron","Addison","Aedan","Braedon","Jadyn","Konner","Zayne","Franco","Niko","Savion","Cristofer","Deon","Krish","Anton","Brogan","Cael","Coby","Kymani","Marcel","Yair","Dale","Bo","Jordon","Samir","Darien","Zaire","Ross","Vaughn","Devyn","Kenyon","Clay","Dario","Ishaan","Jair","Kael","Adonis","Jovanny","Clinton","Rey","Chaim","German","Harper","Nathen","Rigoberto","Sonny","Glenn","Octavio","Blaze","Keshawn","Ralph","Ean","Nikhil","Rayan","Sterling","Branson","Jadiel","Dillan","Jeramiah","Koen","Konnor","Antwan","Houston","Tyrese","Dereon","Leonidas","Zack","Fisher","Jaydan","Quinten","Nick","Urijah","Darion","Jovan","Salvatore","Beckham","Jarrett","Antony","Eden","Makai","Zaiden","Broderick","Camryn","Malaki","Nikolai","Howard","Immanuel","Demarion","Valentino","Jovanni","Ayaan","Ethen","Leandro","Royce","Yael","Yosef","Jean","Marquise","Alden","Leroy","Gaven","Jovany","Tyshawn","Aarav","Kadyn","Milton","Zaid","Kelton","Tripp","Kamren","Slade","Hezekiah","Jakobe","Nathanial","Rishi","Shamar","Geovanni","Pranav","Roderick","Bentley","Clarence","Lyric","Bernard","Carmelo","Denzel","Maximillian","Reynaldo","Cassius","Gordon","Reuben","Samson","Yadiel","Jayvon","Reilly","Sheldon","Abdullah","Jagger","Thaddeus","Case","Kyson","Lamont","Chaz","Makhi","Jan","Marques","Oswaldo","Donavan","Keyon","Kyan","Simeon","Trystan","Andreas","Dangelo","Landin","Reagan","Turner","Arnav","Brenton","Callum","Jayvion","Bridger","Sammy","Deegan","Jaylan","Lennon","Odin","Abdiel","Jerimiah","Eliezer","Bronson","Cornelius","Pierre","Cortez","Baron","Carlo","Carsen","Fletcher","Izayah","Kolten","Damari","Hugh","Jensen","Yurem"];break;case"female":a=["Emma","Isabella","Emily","Madison","Ava","Olivia","Sophia","Abigail","Elizabeth","Chloe","Samantha","Addison","Natalie","Mia","Alexis","Alyssa","Hannah","Ashley","Ella","Sarah","Grace","Taylor","Brianna","Lily","Hailey","Anna","Victoria","Kayla","Lillian","Lauren","Kaylee","Allison","Savannah","Nevaeh","Gabriella","Sofia","Makayla","Avery","Riley","Julia","Leah","Aubrey","Jasmine","Audrey","Katherine","Morgan","Brooklyn","Destiny","Sydney","Alexa","Kylie","Brooke","Kaitlyn","Evelyn","Layla","Madeline","Kimberly","Zoe","Jessica","Peyton","Alexandra","Claire","Madelyn","Maria","Mackenzie","Arianna","Jocelyn","Amelia","Angelina","Trinity","Andrea","Maya","Valeria","Sophie","Rachel","Vanessa","Aaliyah","Mariah","Gabrielle","Katelyn","Ariana","Bailey","Camila","Jennifer","Melanie","Gianna","Charlotte","Paige","Autumn","Payton","Faith","Sara","Isabelle","Caroline","Genesis","Isabel","Mary","Zoey","Gracie","Megan","Haley","Mya","Michelle","Molly","Stephanie","Nicole","Jenna","Natalia","Sadie","Jada","Serenity","Lucy","Ruby","Eva","Kennedy","Rylee","Jayla","Naomi","Rebecca","Lydia","Daniela","Bella","Keira","Adriana","Lilly","Hayden","Miley","Katie","Jade","Jordan","Gabriela","Amy","Angela","Melissa","Valerie","Giselle","Diana","Amanda","Kate","Laila","Reagan","Jordyn","Kylee","Danielle","Briana","Marley","Leslie","Kendall","Catherine","Liliana","Mckenzie","Jacqueline","Ashlyn","Reese","Marissa","London","Juliana","Shelby","Cheyenne","Angel","Daisy","Makenzie","Miranda","Erin","Amber","Alana","Ellie","Breanna","Ana","Mikayla","Summer","Piper","Adrianna","Jillian","Sierra","Jayden","Sienna","Alicia","Lila","Margaret","Alivia","Brooklynn","Karen","Violet","Sabrina","Stella","Aniyah","Annabelle","Alexandria","Kathryn","Skylar","Aliyah","Delilah","Julianna","Kelsey","Khloe","Carly","Amaya","Mariana","Christina","Alondra","Tessa","Eliana","Bianca","Jazmin","Clara","Vivian","Josephine","Delaney","Scarlett","Elena","Cadence","Alexia","Maggie","Laura","Nora","Ariel","Elise","Nadia","Mckenna","Chelsea","Lyla","Alaina","Jasmin","Hope","Leila","Caitlyn","Cassidy","Makenna","Allie","Izabella","Eden","Callie","Haylee","Caitlin","Kendra","Karina","Kyra","Kayleigh","Addyson","Kiara","Jazmine","Karla","Camryn","Alina","Lola","Kyla","Kelly","Fatima","Tiffany","Kira","Crystal","Mallory","Esmeralda","Alejandra","Eleanor","Angelica","Jayda","Abby","Kara","Veronica","Carmen","Jamie","Ryleigh","Valentina","Allyson","Dakota","Kamryn","Courtney","Cecilia","Madeleine","Aniya","Alison","Esther","Heaven","Aubree","Lindsey","Leilani","Nina","Melody","Macy","Ashlynn","Joanna","Cassandra","Alayna","Kaydence","Madilyn","Aurora","Heidi","Emerson","Kimora","Madalyn","Erica","Josie","Katelynn","Guadalupe","Harper","Ivy","Lexi","Camille","Savanna","Dulce","Daniella","Lucia","Emely","Joselyn","Kiley","Kailey","Miriam","Cynthia","Rihanna","Georgia","Rylie","Harmony","Kiera","Kyleigh","Monica","Bethany","Kaylie","Cameron","Teagan","Cora","Brynn","Ciara","Genevieve","Alice","Maddison","Eliza","Tatiana","Jaelyn","Erika","Ximena","April","Marely","Julie","Danica","Presley","Brielle","Julissa","Angie","Iris","Brenda","Hazel","Rose","Malia","Shayla","Fiona","Phoebe","Nayeli","Paola","Kaelyn","Selena","Audrina","Rebekah","Carolina","Janiyah","Michaela","Penelope","Janiya","Anastasia","Adeline","Ruth","Sasha","Denise","Holly","Madisyn","Hanna","Tatum","Marlee","Nataly","Helen","Janelle","Lizbeth","Serena","Anya","Jaslene","Kaylin","Jazlyn","Nancy","Lindsay","Desiree","Hayley","Itzel","Imani","Madelynn","Asia","Kadence","Madyson","Talia","Jane","Kayden","Annie","Amari","Bridget","Raegan","Jadyn","Celeste","Jimena","Luna","Yasmin","Emilia","Annika","Estrella","Sarai","Lacey","Ayla","Alessandra","Willow","Nyla","Dayana","Lilah","Lilliana","Natasha","Hadley","Harley","Priscilla","Claudia","Allisson","Baylee","Brenna","Brittany","Skyler","Fernanda","Danna","Melany","Cali","Lia","Macie","Lyric","Logan","Gloria","Lana","Mylee","Cindy","Lilian","Amira","Anahi","Alissa","Anaya","Lena","Ainsley","Sandra","Noelle","Marisol","Meredith","Kailyn","Lesly","Johanna","Diamond","Evangeline","Juliet","Kathleen","Meghan","Paisley","Athena","Hailee","Rosa","Wendy","Emilee","Sage","Alanna","Elaina","Cara","Nia","Paris","Casey","Dana","Emery","Rowan","Aubrie","Kaitlin","Jaden","Kenzie","Kiana","Viviana","Norah","Lauryn","Perla","Amiyah","Alyson","Rachael","Shannon","Aileen","Miracle","Lillie","Danika","Heather","Kassidy","Taryn","Tori","Francesca","Kristen","Amya","Elle","Kristina","Cheyanne","Haylie","Patricia","Anne","Samara","Skye","Kali","America","Lexie","Parker","Halle","Londyn","Abbigail","Linda","Hallie","Saniya","Bryanna","Bailee","Jaylynn","Mckayla","Quinn","Jaelynn","Jaida","Caylee","Jaiden","Melina","Abril","Sidney","Kassandra","Elisabeth","Adalyn","Kaylynn","Mercedes","Yesenia","Elliana","Brylee","Dylan","Isabela","Ryan","Ashlee","Daphne","Kenya","Marina","Christine","Mikaela","Kaitlynn","Justice","Saniyah","Jaliyah","Ingrid","Marie","Natalee","Joy","Juliette","Simone","Adelaide","Krystal","Kennedi","Mila","Tamia","Addisyn","Aylin","Dayanara","Sylvia","Clarissa","Maritza","Virginia","Braelyn","Jolie","Jaidyn","Kinsley","Kirsten","Laney","Marilyn","Whitney","Janessa","Raquel","Anika","Kamila","Aria","Rubi","Adelyn","Amara","Ayanna","Teresa","Zariah","Kaleigh","Amani","Carla","Yareli","Gwendolyn","Paulina","Nathalie","Annabella","Jaylin","Tabitha","Deanna","Madalynn","Journey","Aiyana","Skyla","Yaretzi","Ada","Liana","Karlee","Jenny","Myla","Cristina","Myah","Lisa","Tania","Isis","Jayleen","Jordin","Arely","Azul","Helena","Aryanna","Jaqueline","Lucille","Destinee","Martha","Zoie","Arielle","Liberty","Marlene","Elisa","Isla","Noemi","Raven","Jessie","Aleah","Kailee","Kaliyah","Lilyana","Haven","Tara","Giana","Camilla","Maliyah","Irene","Carley","Maeve","Lea","Macey","Sharon","Alisha","Marisa","Jaylene","Kaya","Scarlet","Siena","Adyson","Maia","Shiloh","Tiana","Jaycee","Gisselle","Yazmin","Eve","Shyanne","Arabella","Sherlyn","Sariah","Amiya","Kiersten","Madilynn","Shania","Aleena","Finley","Kinley","Kaia","Aliya","Taliyah","Pamela","Yoselin","Ellen","Carlie","Monserrat","Jakayla","Reyna","Yaritza","Carolyn","Clare","Lorelei","Paula","Zaria","Gracelyn","Kasey","Regan","Alena","Angelique","Regina","Britney","Emilie","Mariam","Jaylee","Julianne","Greta","Elyse","Lainey","Kallie","Felicity","Zion","Aspen","Carlee","Annalise","Iliana","Larissa","Akira","Sonia","Catalina","Phoenix","Joslyn","Anabelle","Mollie","Susan","Judith","Destiney","Hillary","Janet","Katrina","Mareli","Ansley","Kaylyn","Alexus","Gia","Maci","Elsa","Stacy","Kaylen","Carissa","Haleigh","Lorena","Jazlynn","Milagros","Luz","Leanna","Renee","Shaniya","Charlie","Abbie","Cailyn","Cherish","Elsie","Jazmyn","Elaine","Emmalee","Luciana","Dahlia","Jamya","Belinda","Mariyah","Chaya","Dayami","Rhianna","Yadira","Aryana","Rosemary","Armani","Cecelia","Celia","Barbara","Cristal","Eileen","Rayna","Campbell","Amina","Aisha","Amirah","Ally","Araceli","Averie","Mayra","Sanaa","Patience","Leyla","Selah","Zara","Chanel","Kaiya","Keyla","Miah","Aimee","Giovanna","Amelie","Kelsie","Alisson","Angeline","Dominique","Adrienne","Brisa","Cierra","Paloma","Isabell","Precious","Alma","Charity","Jacquelyn","Janae","Frances","Shyla","Janiah","Kierra","Karlie","Annabel","Jacey","Karissa","Jaylah","Xiomara","Edith","Marianna","Damaris","Deborah","Jaylyn","Evelin","Mara","Olive","Ayana","India","Kendal","Kayley","Tamara","Briley","Charlee","Nylah","Abbey","Moriah","Saige","Savanah","Giada","Hana","Lizeth","Matilda","Ann","Jazlene","Gillian","Beatrice","Ireland","Karly","Mylie","Yasmine","Ashly","Kenna","Maleah","Corinne","Keely","Tanya","Tianna","Adalynn","Ryann","Salma","Areli","Karma","Shyann","Kaley","Theresa","Evie","Gina","Roselyn","Kaila","Jaylen","Natalya","Meadow","Rayne","Aliza","Yuliana","June","Lilianna","Nathaly","Ali","Alisa","Aracely","Belen","Tess","Jocelynn","Litzy","Makena","Abagail","Giuliana","Joyce","Libby","Lillianna","Thalia","Tia","Sarahi","Zaniyah","Kristin","Lorelai","Mattie","Taniya","Jaslyn","Gemma","Valery","Lailah","Mckinley","Micah","Deja","Frida","Brynlee","Jewel","Krista","Mira","Yamilet","Adison","Carina","Karli","Magdalena","Stephany","Charlize","Raelynn","Aliana","Cassie","Mina","Karley","Shirley","Marlie","Alani","Taniyah","Cloe","Sanai","Lina","Nola","Anabella","Dalia","Raina","Mariela","Ariella","Bria","Kamari","Monique","Ashleigh","Reina","Alia","Ashanti","Lara","Lilia","Justine","Leia","Maribel","Abigayle","Tiara","Alannah","Princess","Sydnee","Kamora","Paityn","Payten","Naima","Gretchen","Heidy","Nyasia","Livia","Marin","Shaylee","Maryjane","Laci","Nathalia","Azaria","Anabel","Chasity","Emmy","Izabelle","Denisse","Emelia","Mireya","Shea","Amiah","Dixie","Maren","Averi","Esperanza","Micaela","Selina","Alyvia","Chana","Avah","Donna","Kaylah","Ashtyn","Karsyn","Makaila","Shayna","Essence","Leticia","Miya","Rory","Desirae","Kianna","Laurel","Neveah","Amaris","Hadassah","Dania","Hailie","Jamiya","Kathy","Laylah","Riya","Diya","Carleigh","Iyana","Kenley","Sloane","Elianna"];break;case void 0:a=["Jacob","Michael","Ethan","Joshua","Daniel","Alexander","Anthony","William","Christopher","Matthew","Jayden","Andrew","Joseph","David","Noah","Aiden","James","Ryan","Logan","John","Nathan","Elijah","Christian","Gabriel","Benjamin","Jonathan","Tyler","Samuel","Nicholas","Gavin","Dylan","Jackson","Brandon","Caleb","Mason","Angel","Isaac","Evan","Jack","Kevin","Jose","Isaiah","Luke","Landon","Justin","Lucas","Zachary","Jordan","Robert","Aaron","Brayden","Thomas","Cameron","Hunter","Austin","Adrian","Connor","Owen","Aidan","Jason","Julian","Wyatt","Charles","Luis","Carter","Juan","Chase","Diego","Jeremiah","Brody","Xavier","Adam","Carlos","Sebastian","Liam","Hayden","Nathaniel","Henry","Jesus","Ian","Tristan","Bryan","Sean","Cole","Alex","Eric","Brian","Jaden","Carson","Blake","Ayden","Cooper","Dominic","Brady","Caden","Josiah","Kyle","Colton","Kaden","Eli","Miguel","Antonio","Parker","Steven","Alejandro","Riley","Richard","Timothy","Devin","Jesse","Victor","Jake","Joel","Colin","Kaleb","Bryce","Levi","Oliver","Oscar","Vincent","Ashton","Cody","Micah","Preston","Marcus","Max","Patrick","Seth","Jeremy","Peyton","Nolan","Ivan","Damian","Maxwell","Alan","Kenneth","Jonah","Jorge","Mark","Giovanni","Eduardo","Grant","Collin","Gage","Omar","Emmanuel","Trevor","Edward","Ricardo","Cristian","Nicolas","Kayden","George","Jaxon","Paul","Braden","Elias","Andres","Derek","Garrett","Tanner","Malachi","Conner","Fernando","Cesar","Javier","Miles","Jaiden","Alexis","Leonardo","Santiago","Francisco","Cayden","Shane","Edwin","Hudson","Travis","Bryson","Erick","Jace","Hector","Josue","Peter","Jaylen","Mario","Manuel","Abraham","Grayson","Damien","Kaiden","Spencer","Stephen","Edgar","Wesley","Shawn","Trenton","Jared","Jeffrey","Landen","Johnathan","Bradley","Braxton","Ryder","Camden","Roman","Asher","Brendan","Maddox","Sergio","Israel","Andy","Lincoln","Erik","Donovan","Raymond","Avery","Rylan","Dalton","Harrison","Andre","Martin","Keegan","Marco","Jude","Sawyer","Dakota","Leo","Calvin","Kai","Drake","Troy","Zion","Clayton","Roberto","Zane","Gregory","Tucker","Rafael","Kingston","Dominick","Ezekiel","Griffin","Devon","Drew","Lukas","Johnny","Ty","Pedro","Tyson","Caiden","Mateo","Braylon","Cash","Aden","Chance","Taylor","Marcos","Maximus","Ruben","Emanuel","Simon","Corbin","Brennan","Dillon","Skyler","Myles","Xander","Jaxson","Dawson","Kameron","Kyler","Axel","Colby","Jonas","Joaquin","Payton","Brock","Frank","Enrique","Quinn","Emilio","Malik","Grady","Angelo","Julio","Derrick","Raul","Fabian","Corey","Gerardo","Dante","Ezra","Armando","Allen","Theodore","Gael","Amir","Zander","Adan","Maximilian","Randy","Easton","Dustin","Luca","Phillip","Julius","Charlie","Ronald","Jakob","Cade","Brett","Trent","Silas","Keith","Emiliano","Trey","Jalen","Darius","Lane","Jerry","Jaime","Scott","Graham","Weston","Braydon","Anderson","Rodrigo","Pablo","Saul","Danny","Donald","Elliot","Brayan","Dallas","Lorenzo","Casey","Mitchell","Alberto","Tristen","Rowan","Jayson","Gustavo","Aaden","Amari","Dean","Braeden","Declan","Chris","Ismael","Dane","Louis","Arturo","Brenden","Felix","Jimmy","Cohen","Tony","Holden","Reid","Abel","Bennett","Zackary","Arthur","Nehemiah","Ricky","Esteban","Cruz","Finn","Mauricio","Dennis","Keaton","Albert","Marvin","Mathew","Larry","Moises","Issac","Philip","Quentin","Curtis","Greyson","Jameson","Everett","Jayce","Darren","Elliott","Uriel","Alfredo","Hugo","Alec","Jamari","Marshall","Walter","Judah","Jay","Lance","Beau","Ali","Landyn","Yahir","Phoenix","Nickolas","Kobe","Bryant","Maurice","Russell","Leland","Colten","Reed","Davis","Joe","Ernesto","Desmond","Kade","Reece","Morgan","Ramon","Rocco","Orlando","Ryker","Brodie","Paxton","Jacoby","Douglas","Kristopher","Gary","Lawrence","Izaiah","Solomon","Nikolas","Mekhi","Justice","Tate","Jaydon","Salvador","Shaun","Alvin","Eddie","Kane","Davion","Zachariah","Dorian","Titus","Kellen","Camron","Isiah","Javon","Nasir","Milo","Johan","Byron","Jasper","Jonathon","Chad","Marc","Kelvin","Chandler","Sam","Cory","Deandre","River","Reese","Roger","Quinton","Talon","Romeo","Franklin","Noel","Alijah","Guillermo","Gunner","Damon","Jadon","Emerson","Micheal","Bruce","Terry","Kolton","Melvin","Beckett","Porter","August","Brycen","Dayton","Jamarion","Leonel","Karson","Zayden","Keagan","Carl","Khalil","Cristopher","Nelson","Braiden","Moses","Isaias","Roy","Triston","Walker","Kale","Jermaine","Leon","Rodney","Kristian","Mohamed","Ronan","Pierce","Trace","Warren","Jeffery","Maverick","Cyrus","Quincy","Nathanael","Skylar","Tommy","Conor","Noe","Ezequiel","Demetrius","Jaylin","Kendrick","Frederick","Terrance","Bobby","Jamison","Jon","Rohan","Jett","Kieran","Tobias","Ari","Colt","Gideon","Felipe","Kenny","Wilson","Orion","Kamari","Gunnar","Jessie","Alonzo","Gianni","Omari","Waylon","Malcolm","Emmett","Abram","Julien","London","Tomas","Allan","Terrell","Matteo","Tristin","Jairo","Reginald","Brent","Ahmad","Yandel","Rene","Willie","Boston","Billy","Marlon","Trevon","Aydan","Jamal","Aldo","Ariel","Cason","Braylen","Javion","Joey","Rogelio","Ahmed","Dominik","Brendon","Toby","Kody","Marquis","Ulises","Armani","Adriel","Alfonso","Branden","Will","Craig","Ibrahim","Osvaldo","Wade","Harley","Steve","Davin","Deshawn","Kason","Damion","Jaylon","Jefferson","Aron","Brooks","Darian","Gerald","Rolando","Terrence","Enzo","Kian","Ryland","Barrett","Jaeden","Ben","Bradyn","Giovani","Blaine","Madden","Jerome","Muhammad","Ronnie","Layne","Kolby","Leonard","Vicente","Cale","Alessandro","Zachery","Gavyn","Aydin","Xzavier","Malakai","Raphael","Cannon","Rudy","Asa","Darrell","Giancarlo","Elisha","Junior","Zackery","Alvaro","Lewis","Valentin","Deacon","Jase","Harry","Kendall","Rashad","Finnegan","Mohammed","Ramiro","Cedric","Brennen","Santino","Stanley","Tyrone","Chace","Francis","Johnathon","Teagan","Zechariah","Alonso","Kaeden","Kamden","Gilberto","Ray","Karter","Luciano","Nico","Kole","Aryan","Draven","Jamie","Misael","Lee","Alexzander","Camren","Giovanny","Amare","Rhett","Rhys","Rodolfo","Nash","Markus","Deven","Mohammad","Moshe","Quintin","Dwayne","Memphis","Atticus","Davian","Eugene","Jax","Antoine","Wayne","Randall","Semaj","Uriah","Clark","Aidyn","Jorden","Maxim","Aditya","Lawson","Messiah","Korbin","Sullivan","Freddy","Demarcus","Neil","Brice","King","Davon","Elvis","Ace","Dexter","Heath","Duncan","Jamar","Sincere","Irvin","Remington","Kadin","Soren","Tyree","Damarion","Talan","Adrien","Gilbert","Keenan","Darnell","Adolfo","Tristian","Derick","Isai","Rylee","Gauge","Harold","Kareem","Deangelo","Agustin","Coleman","Zavier","Lamar","Emery","Jaydin","Devan","Jordyn","Mathias","Prince","Sage","Seamus","Jasiah","Efrain","Darryl","Arjun","Mike","Roland","Conrad","Kamron","Hamza","Santos","Frankie","Dominique","Marley","Vance","Dax","Jamir","Kylan","Todd","Maximo","Jabari","Matthias","Haiden","Luka","Marcelo","Keon","Layton","Tyrell","Kash","Raiden","Cullen","Donte","Jovani","Cordell","Kasen","Rory","Alfred","Darwin","Ernest","Bailey","Gaige","Hassan","Jamarcus","Killian","Augustus","Trevin","Zain","Ellis","Rex","Yusuf","Bruno","Jaidyn","Justus","Ronin","Humberto","Jaquan","Josh","Kasey","Winston","Dashawn","Lucian","Matias","Sidney","Ignacio","Nigel","Van","Elian","Finley","Jaron","Addison","Aedan","Braedon","Jadyn","Konner","Zayne","Franco","Niko","Savion","Cristofer","Deon","Krish","Anton","Brogan","Cael","Coby","Kymani","Marcel","Yair","Dale","Bo","Jordon","Samir","Darien","Zaire","Ross","Vaughn","Devyn","Kenyon","Clay","Dario","Ishaan","Jair","Kael","Adonis","Jovanny","Clinton","Rey","Chaim","German","Harper","Nathen","Rigoberto","Sonny","Glenn","Octavio","Blaze","Keshawn","Ralph","Ean","Nikhil","Rayan","Sterling","Branson","Jadiel","Dillan","Jeramiah","Koen","Konnor","Antwan","Houston","Tyrese","Dereon","Leonidas","Zack","Fisher","Jaydan","Quinten","Nick","Urijah","Darion","Jovan","Salvatore","Beckham","Jarrett","Antony","Eden","Makai","Zaiden","Broderick","Camryn","Malaki","Nikolai","Howard","Immanuel","Demarion","Valentino","Jovanni","Ayaan","Ethen","Leandro","Royce","Yael","Yosef","Jean","Marquise","Alden","Leroy","Gaven","Jovany","Tyshawn","Aarav","Kadyn","Milton","Zaid","Kelton","Tripp","Kamren","Slade","Hezekiah","Jakobe","Nathanial","Rishi","Shamar","Geovanni","Pranav","Roderick","Bentley","Clarence","Lyric","Bernard","Carmelo","Denzel","Maximillian","Reynaldo","Cassius","Gordon","Reuben","Samson","Yadiel","Jayvon","Reilly","Sheldon","Abdullah","Jagger","Thaddeus","Case","Kyson","Lamont","Chaz","Makhi","Jan","Marques","Oswaldo","Donavan","Keyon","Kyan","Simeon","Trystan","Andreas","Dangelo","Landin","Reagan","Turner","Arnav","Brenton","Callum","Jayvion","Bridger","Sammy","Deegan","Jaylan","Lennon","Odin","Abdiel","Jerimiah","Eliezer","Bronson","Cornelius","Pierre","Cortez","Baron","Carlo","Carsen","Fletcher","Izayah","Kolten","Damari","Hugh","Jensen","Yurem","Emma","Isabella","Emily","Madison","Ava","Olivia","Sophia","Abigail","Elizabeth","Chloe","Samantha","Addison","Natalie","Mia","Alexis","Alyssa","Hannah","Ashley","Ella","Sarah","Grace","Taylor","Brianna","Lily","Hailey","Anna","Victoria","Kayla","Lillian","Lauren","Kaylee","Allison","Savannah","Nevaeh","Gabriella","Sofia","Makayla","Avery","Riley","Julia","Leah","Aubrey","Jasmine","Audrey","Katherine","Morgan","Brooklyn","Destiny","Sydney","Alexa","Kylie","Brooke","Kaitlyn","Evelyn","Layla","Madeline","Kimberly","Zoe","Jessica","Peyton","Alexandra","Claire","Madelyn","Maria","Mackenzie","Arianna","Jocelyn","Amelia","Angelina","Trinity","Andrea","Maya","Valeria","Sophie","Rachel","Vanessa","Aaliyah","Mariah","Gabrielle","Katelyn","Ariana","Bailey","Camila","Jennifer","Melanie","Gianna","Charlotte","Paige","Autumn","Payton","Faith","Sara","Isabelle","Caroline","Genesis","Isabel","Mary","Zoey","Gracie","Megan","Haley","Mya","Michelle","Molly","Stephanie","Nicole","Jenna","Natalia","Sadie","Jada","Serenity","Lucy","Ruby","Eva","Kennedy","Rylee","Jayla","Naomi","Rebecca","Lydia","Daniela","Bella","Keira","Adriana","Lilly","Hayden","Miley","Katie","Jade","Jordan","Gabriela","Amy","Angela","Melissa","Valerie","Giselle","Diana","Amanda","Kate","Laila","Reagan","Jordyn","Kylee","Danielle","Briana","Marley","Leslie","Kendall","Catherine","Liliana","Mckenzie","Jacqueline","Ashlyn","Reese","Marissa","London","Juliana","Shelby","Cheyenne","Angel","Daisy","Makenzie","Miranda","Erin","Amber","Alana","Ellie","Breanna","Ana","Mikayla","Summer","Piper","Adrianna","Jillian","Sierra","Jayden","Sienna","Alicia","Lila","Margaret","Alivia","Brooklynn","Karen","Violet","Sabrina","Stella","Aniyah","Annabelle","Alexandria","Kathryn","Skylar","Aliyah","Delilah","Julianna","Kelsey","Khloe","Carly","Amaya","Mariana","Christina","Alondra","Tessa","Eliana","Bianca","Jazmin","Clara","Vivian","Josephine","Delaney","Scarlett","Elena","Cadence","Alexia","Maggie","Laura","Nora","Ariel","Elise","Nadia","Mckenna","Chelsea","Lyla","Alaina","Jasmin","Hope","Leila","Caitlyn","Cassidy","Makenna","Allie","Izabella","Eden","Callie","Haylee","Caitlin","Kendra","Karina","Kyra","Kayleigh","Addyson","Kiara","Jazmine","Karla","Camryn","Alina","Lola","Kyla","Kelly","Fatima","Tiffany","Kira","Crystal","Mallory","Esmeralda","Alejandra","Eleanor","Angelica","Jayda","Abby","Kara","Veronica","Carmen","Jamie","Ryleigh","Valentina","Allyson","Dakota","Kamryn","Courtney","Cecilia","Madeleine","Aniya","Alison","Esther","Heaven","Aubree","Lindsey","Leilani","Nina","Melody","Macy","Ashlynn","Joanna","Cassandra","Alayna","Kaydence","Madilyn","Aurora","Heidi","Emerson","Kimora","Madalyn","Erica","Josie","Katelynn","Guadalupe","Harper","Ivy","Lexi","Camille","Savanna","Dulce","Daniella","Lucia","Emely","Joselyn","Kiley","Kailey","Miriam","Cynthia","Rihanna","Georgia","Rylie","Harmony","Kiera","Kyleigh","Monica","Bethany","Kaylie","Cameron","Teagan","Cora","Brynn","Ciara","Genevieve","Alice","Maddison","Eliza","Tatiana","Jaelyn","Erika","Ximena","April","Marely","Julie","Danica","Presley","Brielle","Julissa","Angie","Iris","Brenda","Hazel","Rose","Malia","Shayla","Fiona","Phoebe","Nayeli","Paola","Kaelyn","Selena","Audrina","Rebekah","Carolina","Janiyah","Michaela","Penelope","Janiya","Anastasia","Adeline","Ruth","Sasha","Denise","Holly","Madisyn","Hanna","Tatum","Marlee","Nataly","Helen","Janelle","Lizbeth","Serena","Anya","Jaslene","Kaylin","Jazlyn","Nancy","Lindsay","Desiree","Hayley","Itzel","Imani","Madelynn","Asia","Kadence","Madyson","Talia","Jane","Kayden","Annie","Amari","Bridget","Raegan","Jadyn","Celeste","Jimena","Luna","Yasmin","Emilia","Annika","Estrella","Sarai","Lacey","Ayla","Alessandra","Willow","Nyla","Dayana","Lilah","Lilliana","Natasha","Hadley","Harley","Priscilla","Claudia","Allisson","Baylee","Brenna","Brittany","Skyler","Fernanda","Danna","Melany","Cali","Lia","Macie","Lyric","Logan","Gloria","Lana","Mylee","Cindy","Lilian","Amira","Anahi","Alissa","Anaya","Lena","Ainsley","Sandra","Noelle","Marisol","Meredith","Kailyn","Lesly","Johanna","Diamond","Evangeline","Juliet","Kathleen","Meghan","Paisley","Athena","Hailee","Rosa","Wendy","Emilee","Sage","Alanna","Elaina","Cara","Nia","Paris","Casey","Dana","Emery","Rowan","Aubrie","Kaitlin","Jaden","Kenzie","Kiana","Viviana","Norah","Lauryn","Perla","Amiyah","Alyson","Rachael","Shannon","Aileen","Miracle","Lillie","Danika","Heather","Kassidy","Taryn","Tori","Francesca","Kristen","Amya","Elle","Kristina","Cheyanne","Haylie","Patricia","Anne","Samara","Skye","Kali","America","Lexie","Parker","Halle","Londyn","Abbigail","Linda","Hallie","Saniya","Bryanna","Bailee","Jaylynn","Mckayla","Quinn","Jaelynn","Jaida","Caylee","Jaiden","Melina","Abril","Sidney","Kassandra","Elisabeth","Adalyn","Kaylynn","Mercedes","Yesenia","Elliana","Brylee","Dylan","Isabela","Ryan","Ashlee","Daphne","Kenya","Marina","Christine","Mikaela","Kaitlynn","Justice","Saniyah","Jaliyah","Ingrid","Marie","Natalee","Joy","Juliette","Simone","Adelaide","Krystal","Kennedi","Mila","Tamia","Addisyn","Aylin","Dayanara","Sylvia","Clarissa","Maritza","Virginia","Braelyn","Jolie","Jaidyn","Kinsley","Kirsten","Laney","Marilyn","Whitney","Janessa","Raquel","Anika","Kamila","Aria","Rubi","Adelyn","Amara","Ayanna","Teresa","Zariah","Kaleigh","Amani","Carla","Yareli","Gwendolyn","Paulina","Nathalie","Annabella","Jaylin","Tabitha","Deanna","Madalynn","Journey","Aiyana","Skyla","Yaretzi","Ada","Liana","Karlee","Jenny","Myla","Cristina","Myah","Lisa","Tania","Isis","Jayleen","Jordin","Arely","Azul","Helena","Aryanna","Jaqueline","Lucille","Destinee","Martha","Zoie","Arielle","Liberty","Marlene","Elisa","Isla","Noemi","Raven","Jessie","Aleah","Kailee","Kaliyah","Lilyana","Haven","Tara","Giana","Camilla","Maliyah","Irene","Carley","Maeve","Lea","Macey","Sharon","Alisha","Marisa","Jaylene","Kaya","Scarlet","Siena","Adyson","Maia","Shiloh","Tiana","Jaycee","Gisselle","Yazmin","Eve","Shyanne","Arabella","Sherlyn","Sariah","Amiya","Kiersten","Madilynn","Shania","Aleena","Finley","Kinley","Kaia","Aliya","Taliyah","Pamela","Yoselin","Ellen","Carlie","Monserrat","Jakayla","Reyna","Yaritza","Carolyn","Clare","Lorelei","Paula","Zaria","Gracelyn","Kasey","Regan","Alena","Angelique","Regina","Britney","Emilie","Mariam","Jaylee","Julianne","Greta","Elyse","Lainey","Kallie","Felicity","Zion","Aspen","Carlee","Annalise","Iliana","Larissa","Akira","Sonia","Catalina","Phoenix","Joslyn","Anabelle","Mollie","Susan","Judith","Destiney","Hillary","Janet","Katrina","Mareli","Ansley","Kaylyn","Alexus","Gia","Maci","Elsa","Stacy","Kaylen","Carissa","Haleigh","Lorena","Jazlynn","Milagros","Luz","Leanna","Renee","Shaniya","Charlie","Abbie","Cailyn","Cherish","Elsie","Jazmyn","Elaine","Emmalee","Luciana","Dahlia","Jamya","Belinda","Mariyah","Chaya","Dayami","Rhianna","Yadira","Aryana","Rosemary","Armani","Cecelia","Celia","Barbara","Cristal","Eileen","Rayna","Campbell","Amina","Aisha","Amirah","Ally","Araceli","Averie","Mayra","Sanaa","Patience","Leyla","Selah","Zara","Chanel","Kaiya","Keyla","Miah","Aimee","Giovanna","Amelie","Kelsie","Alisson","Angeline","Dominique","Adrienne","Brisa","Cierra","Paloma","Isabell","Precious","Alma","Charity","Jacquelyn","Janae","Frances","Shyla","Janiah","Kierra","Karlie","Annabel","Jacey","Karissa","Jaylah","Xiomara","Edith","Marianna","Damaris","Deborah","Jaylyn","Evelin","Mara","Olive","Ayana","India","Kendal","Kayley","Tamara","Briley","Charlee","Nylah","Abbey","Moriah","Saige","Savanah","Giada","Hana","Lizeth","Matilda","Ann","Jazlene","Gillian","Beatrice","Ireland","Karly","Mylie","Yasmine","Ashly","Kenna","Maleah","Corinne","Keely","Tanya","Tianna","Adalynn","Ryann","Salma","Areli","Karma","Shyann","Kaley","Theresa","Evie","Gina","Roselyn","Kaila","Jaylen","Natalya","Meadow","Rayne","Aliza","Yuliana","June","Lilianna","Nathaly","Ali","Alisa","Aracely","Belen","Tess","Jocelynn","Litzy","Makena","Abagail","Giuliana","Joyce","Libby","Lillianna","Thalia","Tia","Sarahi","Zaniyah","Kristin","Lorelai","Mattie","Taniya","Jaslyn","Gemma","Valery","Lailah","Mckinley","Micah","Deja","Frida","Brynlee","Jewel","Krista","Mira","Yamilet","Adison","Carina","Karli","Magdalena","Stephany","Charlize","Raelynn","Aliana","Cassie","Mina","Karley","Shirley","Marlie","Alani","Taniyah","Cloe","Sanai","Lina","Nola","Anabella","Dalia","Raina","Mariela","Ariella","Bria","Kamari","Monique","Ashleigh","Reina","Alia","Ashanti","Lara","Lilia","Justine","Leia","Maribel","Abigayle","Tiara","Alannah","Princess","Sydnee","Kamora","Paityn","Payten","Naima","Gretchen","Heidy","Nyasia","Livia","Marin","Shaylee","Maryjane","Laci","Nathalia","Azaria","Anabel","Chasity","Emmy","Izabelle","Denisse","Emelia","Mireya","Shea","Amiah","Dixie","Maren","Averi","Esperanza","Micaela","Selina","Alyvia","Chana","Avah","Donna","Kaylah","Ashtyn","Karsyn","Makaila","Shayna","Essence","Leticia","Miya","Rory","Desirae","Kianna","Laurel","Neveah","Amaris","Hadassah","Dania","Hailie","Jamiya","Kathy","Laylah","Riya","Diya","Carleigh","Iyana","Kenley","Sloane","Elianna"];break}return a[Math.floor(Math.random()*a.length)]},lastName:()=>{let e=[];return e=["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen","Sanchez","Wright","King","Scott","Green","Baker","Adams","Nelson","Hill","Ramirez","Campbell","Mitchell","Roberts","Carter","Phillips","Evans","Turner","Torres","Parker","Collins","Edwards","Stewart","Flores","Morris","Nguyen","Murphy","Rivera","Cook","Rogers","Morgan","Peterson","Cooper","Reed","Bailey","Bell","Gomez","Kelly","Howard","Ward","Cox","Diaz","Richardson","Wood","Watson","Brooks","Bennett","Gray","James","Reyes","Cruz","Hughes","Price","Myers","Long","Foster","Sanders","Ross","Morales","Powell","Sullivan","Russell","Ortiz","Jenkins","Gutierrez","Perry","Butler","Barnes","Fisher","Henderson","Coleman","Simmons","Patterson","Jordan","Reynolds","Hamilton","Graham","Kim","Gonzales","Alexander","Ramos","Wallace","Griffin","West","Cole","Hayes","Chavez","Gibson","Bryant","Ellis","Stevens","Murray","Ford","Marshall","Owens","Mcdonald","Harrison","Ruiz","Kennedy","Wells","Alvarez","Woods","Mendoza","Castillo","Olson","Webb","Washington","Tucker","Freeman","Burns","Henry","Vasquez","Snyder","Simpson","Crawford","Jimenez","Porter","Mason","Shaw","Gordon","Wagner","Hunter","Romero","Hicks","Dixon","Hunt","Palmer","Robertson","Black","Holmes","Stone","Meyer","Boyd","Mills","Warren","Fox","Rose","Rice","Moreno","Schmidt","Patel","Ferguson","Nichols","Herrera","Medina","Ryan","Fernandez","Weaver","Daniels","Stephens","Gardner","Payne","Kelley","Dunn","Pierce","Arnold","Tran","Spencer","Peters","Hawkins","Grant","Hansen","Castro","Hoffman","Hart","Elliott","Cunningham","Knight","Bradley","Carroll","Hudson","Duncan","Armstrong","Berry","Andrews","Johnston","Ray","Lane","Riley","Carpenter","Perkins","Aguilar","Silva","Richards","Willis","Matthews","Chapman","Lawrence","Garza","Vargas","Watkins","Wheeler","Larson","Carlson","Harper","George","Greene","Burke","Guzman","Morrison","Munoz","Jacobs","Obrien","Lawson","Franklin","Lynch","Bishop","Carr","Salazar","Austin","Mendez","Gilbert","Jensen","Williamson","Montgomery","Harvey","Oliver","Howell","Dean","Hanson","Weber","Garrett","Sims","Burton","Fuller","Soto","Mccoy","Welch","Chen","Schultz","Walters","Reid","Fields","Walsh","Little","Fowler","Bowman","Davidson","May","Day","Schneider","Newman","Brewer","Lucas","Holland","Wong","Banks","Santos","Curtis","Pearson","Delgado","Valdez","Pena","Rios","Douglas","Sandoval","Barrett","Hopkins","Keller","Guerrero","Stanley","Bates","Alvarado","Beck","Ortega","Wade","Estrada","Contreras","Barnett","Caldwell","Santiago","Lambert","Powers","Chambers","Nunez","Craig","Leonard","Lowe","Rhodes","Byrd","Gregory","Shelton","Frazier","Becker","Maldonado","Fleming","Vega","Sutton","Cohen","Jennings","Parks","Mcdaniel","Watts","Barker","Norris","Vaughn","Vazquez","Holt","Schwartz","Steele","Benson","Neal","Dominguez","Horton","Terry","Wolfe","Hale","Lyons","Graves","Haynes","Miles","Park","Warner","Padilla","Bush","Thornton","Mccarthy","Mann","Zimmerman","Erickson","Fletcher","Mckinney","Page","Dawson","Joseph","Marquez","Reeves","Klein","Espinoza","Baldwin","Moran","Love","Robbins","Higgins","Ball","Cortez","Le","Griffith","Bowen","Sharp","Cummings","Ramsey","Hardy","Swanson","Barber","Acosta","Luna","Chandler","Blair","Daniel","Cross","Simon","Dennis","Oconnor","Quinn","Gross","Navarro","Moss","Fitzgerald","Doyle","Mclaughlin","Rojas","Rodgers","Stevenson","Singh","Yang","Figueroa","Harmon","Newton","Paul","Manning","Garner","Mcgee","Reese","Francis","Burgess","Adkins","Goodman","Curry","Brady","Christensen","Potter","Walton","Goodwin","Mullins","Molina","Webster","Fischer","Campos","Avila","Sherman","Todd","Chang","Blake","Malone","Wolf","Hodges","Juarez","Gill","Farmer","Hines","Gallagher","Duran","Hubbard","Cannon","Miranda","Wang","Saunders","Tate","Mack","Hammond","Carrillo","Townsend","Wise","Ingram","Barton","Mejia","Ayala","Schroeder","Hampton","Rowe","Parsons","Frank","Waters","Strickland","Osborne","Maxwell","Chan","Deleon","Norman","Harrington","Casey","Patton","Logan","Bowers","Mueller","Glover","Floyd","Hartman","Buchanan","Cobb","French","Kramer","Mccormick","Clarke","Tyler","Gibbs","Moody","Conner","Sparks","Mcguire","Leon","Bauer","Norton","Pope","Flynn","Hogan","Robles","Salinas","Yates","Lindsey","Lloyd","Marsh","Mcbride","Owen","Solis","Pham","Lang","Pratt","Lara","Brock","Ballard","Trujillo","Shaffer","Drake","Roman","Aguirre","Morton","Stokes","Lamb","Pacheco","Patrick","Cochran","Shepherd","Cain","Burnett","Hess","Li","Cervantes","Olsen","Briggs","Ochoa","Cabrera","Velasquez","Montoya","Roth","Meyers","Cardenas","Fuentes","Weiss","Hoover","Wilkins","Nicholson","Underwood","Short","Carson","Morrow","Colon","Holloway","Summers","Bryan","Petersen","Mckenzie","Serrano","Wilcox","Carey","Clayton","Poole","Calderon","Gallegos","Greer","Rivas","Guerra","Decker","Collier","Wall","Whitaker","Bass","Flowers","Davenport","Conley","Houston","Huff","Copeland","Hood","Monroe","Massey","Roberson","Combs","Franco","Larsen","Pittman","Randall","Skinner","Wilkinson","Kirby","Cameron","Bridges","Anthony","Richard","Kirk","Bruce","Singleton","Mathis","Bradford","Boone","Abbott","Charles","Allison","Sweeney","Atkinson","Horn","Jefferson","Rosales","York","Christian","Phelps","Farrell","Castaneda","Nash","Dickerson","Bond","Wyatt","Foley","Chase","Gates","Vincent","Mathews","Hodge","Garrison","Trevino","Villarreal","Heath","Dalton","Valencia","Callahan","Hensley","Atkins","Huffman","Roy","Boyer","Shields","Lin","Hancock","Grimes","Glenn","Cline","Delacruz","Camacho","Dillon","Parrish","Oneill","Melton","Booth","Kane","Berg","Harrell","Pitts","Savage","Wiggins","Brennan","Salas","Marks","Russo","Sawyer","Baxter","Golden","Hutchinson","Liu","Walter","Mcdowell","Wiley","Rich","Humphrey","Johns","Koch","Suarez","Hobbs","Beard","Gilmore","Ibarra","Keith","Macias","Khan","Andrade","Ware","Stephenson","Henson","Wilkerson","Dyer","Mcclure","Blackwell","Mercado","Tanner","Eaton","Clay","Barron","Beasley","Oneal","Preston","Small","Wu","Zamora","Macdonald","Vance","Snow","Mcclain","Stafford","Orozco","Barry","English","Shannon","Kline","Jacobson","Woodard","Huang","Kemp","Mosley","Prince","Merritt","Hurst","Villanueva","Roach","Nolan","Lam","Yoder","Mccullough","Lester","Santana","Valenzuela","Winters","Barrera","Leach","Orr","Berger","Mckee","Strong","Conway","Stein","Whitehead","Bullock","Escobar","Knox","Meadows","Solomon","Velez","Odonnell","Kerr","Stout","Blankenship","Browning","Kent","Lozano","Bartlett","Pruitt","Buck","Barr","Gaines","Durham","Gentry","Mcintyre","Sloan","Melendez","Rocha","Herman","Sexton","Moon","Hendricks","Rangel","Stark","Lowery","Hardin","Hull","Sellers","Ellison","Calhoun","Gillespie","Mora","Knapp","Mccall","Morse","Dorsey","Weeks","Nielsen","Livingston","Leblanc","Mclean","Bradshaw","Glass","Middleton","Buckley","Schaefer","Frost","Howe","House","Mcintosh","Ho","Pennington","Reilly","Hebert","Mcfarland","Hickman","Noble","Spears","Conrad","Arias","Galvan","Velazquez","Huynh","Frederick","Randolph","Cantu","Fitzpatrick","Mahoney","Peck","Villa","Michael","Donovan","Mcconnell","Walls","Boyle","Mayer","Zuniga","Giles","Pineda","Pace","Hurley","Mays","Mcmillan","Crosby","Ayers","Case","Bentley","Shepard","Everett","Pugh","David","Mcmahon","Dunlap","Bender","Hahn","Harding","Acevedo","Raymond","Blackburn","Duffy","Landry","Dougherty","Bautista","Shah","Potts","Arroyo","Valentine","Meza","Gould","Vaughan","Fry","Rush","Avery","Herring","Dodson","Clements","Sampson","Tapia","Bean","Lynn","Crane","Farley","Cisneros","Benton","Ashley","Mckay","Finley","Best","Blevins","Friedman","Moses","Sosa","Blanchard","Huber","Frye","Krueger","Bernard","Rosario","Rubio","Mullen","Benjamin","Haley","Chung","Moyer","Choi","Horne","Yu","Woodward","Ali","Nixon","Hayden","Rivers","Estes","Mccarty","Richmond","Stuart","Maynard","Brandt","Oconnell","Hanna","Sanford","Sheppard","Church","Burch","Levy","Rasmussen","Coffey","Ponce","Faulkner","Donaldson","Schmitt","Novak","Costa","Montes","Booker","Cordova","Waller","Arellano","Maddox","Mata","Bonilla","Stanton","Compton","Kaufman","Dudley","Mcpherson","Beltran","Dickson","Mccann","Villegas","Proctor","Hester","Cantrell","Daugherty","Cherry","Bray","Davila","Rowland","Levine","Madden","Spence","Good","Irwin","Werner","Krause","Petty","Whitney","Baird","Hooper","Pollard","Zavala","Jarvis","Holden","Haas","Hendrix","Mcgrath","Bird","Lucero","Terrell","Riggs","Joyce","Mercer","Rollins","Galloway","Duke","Odom","Andersen","Downs","Hatfield","Benitez","Archer","Huerta","Travis","Mcneil","Hinton","Zhang","Hays","Mayo","Fritz","Branch","Mooney","Ewing","Ritter","Esparza","Frey","Braun","Gay","Riddle","Haney","Kaiser","Holder","Chaney","Mcknight","Gamble","Vang","Cooley","Carney","Cowan","Forbes","Ferrell","Davies","Barajas","Shea","Osborn","Bright","Cuevas","Bolton","Murillo","Lutz","Duarte","Kidd","Key","Cooke"],e[Math.floor(Math.random()*e.length)]},country:()=>{let e=[];return e=["United States","Canada","Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and/or Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecudaor","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France, Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kosovo","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfork Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia South Sandwich Islands","South Sudan","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbarn and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States minor outlying islands","Uruguay","Uzbekistan","Vanuatu","Vatican City State","Venezuela","Vietnam","Virigan Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zaire","Zambia","Zimbabwe"],e[Math.floor(Math.random()*e.length)]},province:e=>{let a=[];a={Afghanistan:["Badakhshan","Badghis","Baghlan","Balkh","Bamian","Daykondi","Farah","Faryab","Ghazni","Ghowr","Helmand","Herat","Jowzjan","Kabul","Kandahar","Kapisa","Khost","Konar","Kondoz","Laghman","Lowgar","Nangarhar","Nimruz","Nurestan","Oruzgan","Paktia","Paktika","Panjshir","Parvan","Samangan","Sar-e Pol","Takhar","Vardak","Zabol"],Albania:["Berat","Dibres","Durres","Elbasan","Fier","Gjirokastre","Korce","Kukes","Lezhe","Shkoder","Tirane","Vlore"],Algeria:["Adrar","Ain Defla","Ain Temouchent","Alger","Annaba","Batna","Bechar","Bejaia","Biskra","Blida","Bordj Bou Arreridj","Bouira","Boumerdes","Chlef","Constantine","Djelfa","El Bayadh","El Oued","El Tarf","Ghardaia","Guelma","Illizi","Jijel","Khenchela","Laghouat","Muaskar","Medea","Mila","Mostaganem","M'Sila","Naama","Oran","Ouargla","Oum el Bouaghi","Relizane","Saida","Setif","Sidi Bel Abbes","Skikda","Souk Ahras","Tamanghasset","Tebessa","Tiaret","Tindouf","Tipaza","Tissemsilt","Tizi Ouzou","Tlemcen"],"American Samoa":["n/a"],Andorra:["Andorra la Vella","Canillo","Encamp","Escaldes-Engordany","La Massana","Ordino","Sant Julia de Loria"],Angola:["Bengo","Benguela","Bie","Cabinda","Cuando Cubango","Cuanza Norte","Cuanza Sul","Cunene","Huambo","Huila","Luanda","Lunda Norte","Lunda Sul","Malanje","Moxico","Namibe","Uige","Zaire"],Anguilla:["n/a"],Antarctica:["n/a"],"Antigua and Barbuda":["Barbuda","Redonda","Saint George","Saint John","Saint Mary","Saint Paul","Saint Peter","Saint Philip"],Argentina:["Buenos Aires","Buenos Aires Capital","Catamarca","Chaco","Chubut","Cordoba","Corrientes","Entre Rios","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquen","Rio Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucuman"],Armenia:["Aragatsotn","Ararat","Armavir","Geghark'unik'","Kotayk'","Lorri","Shirak","Syunik'","Tavush","Vayots' Dzor","Yerevan"],Aruba:["n/a"],Australia:["Australian Capital Territory","New South Wales","Northern Territory","Queensland","South Australia","Tasmania","Victoria","Western Australia"],Austria:["Burgenland","Kaernten","Niederoesterreich","Oberoesterreich","Salzburg","Steiermark","Tirol","Vorarlberg","Wien"],Azerbaijan:["Abseron Rayonu","Agcabadi Rayonu","Agdam Rayonu","Agdas Rayonu","Agstafa Rayonu","Agsu Rayonu","Astara Rayonu","Balakan Rayonu","Barda Rayonu","Beylaqan Rayonu","Bilasuvar Rayonu","Cabrayil Rayonu","Calilabad Rayonu","Daskasan Rayonu","Davaci Rayonu","Fuzuli Rayonu","Gadabay Rayonu","Goranboy Rayonu","Goycay Rayonu","Haciqabul Rayonu","Imisli Rayonu","Ismayilli Rayonu","Kalbacar Rayonu","Kurdamir Rayonu","Lacin Rayonu","Lankaran Rayonu","Lerik Rayonu","Masalli Rayonu","Neftcala Rayonu","Oguz Rayonu","Qabala Rayonu","Qax Rayonu","Qazax Rayonu","Qobustan Rayonu","Quba Rayonu","Qubadli Rayonu","Qusar Rayonu","Saatli Rayonu","Sabirabad Rayonu","Saki Rayonu","Salyan Rayonu","Samaxi Rayonu","Samkir Rayonu","Samux Rayonu","Siyazan Rayonu","Susa Rayonu","Tartar Rayonu","Tovuz Rayonu","Ucar Rayonu","Xacmaz Rayonu","Xanlar Rayonu","Xizi Rayonu","Xocali Rayonu","Xocavand Rayonu","Yardimli Rayonu","Yevlax Rayonu","Zangilan Rayonu","Zaqatala Rayonu","Zardab Rayonu","Ali Bayramli Sahari","Baki Sahari","Ganca Sahari","Lankaran Sahari","Mingacevir Sahari","Naftalan Sahari","Saki Sahari","Sumqayit Sahari","Susa Sahari","Xankandi Sahari","Yevlax Sahari","Naxcivan Muxtar"],"Bahamas (the)":["Acklins and Crooked Islands","Bimini","Cat Island","Exuma","Freeport","Fresh Creek","Governor's Harbour","Green Turtle Cay","Harbour Island","High Rock","Inagua","Kemps Bay","Long Island","Marsh Harbour","Mayaguana","New Providence","Nichollstown and Berry Islands","Ragged Island","Rock Sound","Sandy Point","San Salvador and Rum Cay"],Bahrain:["Al Hadd","Al Manamah","Al Mintaqah al Gharbiyah","Al Mintaqah al Wusta","Al Mintaqah ash Shamaliyah","Al Muharraq","Ar Rifa' wa al Mintaqah al Janubiyah","Jidd Hafs","Madinat Hamad","Madinat 'Isa","Juzur Hawar","Sitrah"],Bangladesh:["Barisal","Chittagong","Dhaka","Khulna","Rajshahi","Sylhet"],Barbados:["Christ Church","Saint Andrew","Saint George","Saint James","Saint John","Saint Joseph","Saint Lucy","Saint Michael","Saint Peter","Saint Philip","Saint Thomas"],Belarus:["Brest","Homyel","Horad Minsk","Hrodna","Mahilyow","Minsk","Vitsyebsk"],Belgium:["Antwerpen","Brabant Wallon","Brussels","Flanders","Hainaut","Liege","Limburg","Luxembourg","Namur","Oost-Vlaanderen","Vlaams-Brabant","Wallonia","West-Vlaanderen"],Belize:["Belize","Cayo","Corozal","Orange Walk","Stann Creek","Toledo"],Benin:["Alibori","Atakora","Atlantique","Borgou","Collines","Donga","Kouffo","Littoral","Mono","Oueme","Plateau","Zou"],Bermuda:["Devonshire","Hamilton","Hamilton","Paget","Pembroke","Saint George","Saint George's","Sandys","Smith's","Southampton","Warwick"],Bhutan:["Bumthang","Chukha","Dagana","Gasa","Haa","Lhuntse","Mongar","Paro","Pemagatshel","Punakha","Samdrup Jongkhar","Samtse","Sarpang","Thimphu","Trashigang","Trashiyangste","Trongsa","Tsirang","Wangdue Phodrang","Zhemgang"],"Bolivia (Plurinational State of)":["Chuquisaca","Cochabamba","Beni","La Paz","Oruro","Pando","Potosi","Santa Cruz","Tarija"],"Bonaire, Sint Eustatius and Saba":["n/a"],"Bosnia and Herzegovina":["Una-Sana [Federation]","Posavina [Federation]","Tuzla [Federation]","Zenica-Doboj [Federation]","Bosnian Podrinje [Federation]","Central Bosnia [Federation]","Herzegovina-Neretva [Federation]","West Herzegovina [Federation]","Sarajevo [Federation]"," West Bosnia [Federation]","Banja Luka [RS]","Bijeljina [RS]","Doboj [RS]","Fo?a [RS]","Sarajevo-Romanija [RS]","Trebinje [RS]","Vlasenica [RS]"],Botswana:["Central","Ghanzi","Kgalagadi","Kgatleng","Kweneng","North East","North West","South East","Southern"],"Bouvet Island":["n/a"],Brazil:["Acre","Alagoas","Amapa","Amazonas","Bahia","Ceara","Distrito Federal","Espirito Santo","Goias","Maranhao","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Para","Paraiba","Parana","Pernambuco","Piaui","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondonia","Roraima","Santa Catarina","Sao Paulo","Sergipe","Tocantins"],"British Indian Ocean Territory (the)":["Belait","Brunei and Muara","Temburong","Tutong"],"Brunei Darussalam":["n/a"],Bulgaria:["Blagoevgrad","Burgas","Dobrich","Gabrovo","Khaskovo","Kurdzhali","Kyustendil","Lovech","Montana","Pazardzhik","Pernik","Pleven","Plovdiv","Razgrad","Ruse","Shumen","Silistra","Sliven","Smolyan","Sofiya","Sofiya-Grad","Stara Zagora","Turgovishte","Varna","Veliko Turnovo","Vidin","Vratsa","Yambol"],"Burkina Faso":["Bale","Bam","Banwa","Bazega","Bougouriba","Boulgou","Boulkiemde","Comoe","Ganzourgou","Gnagna","Gourma","Houet","Ioba","Kadiogo","Kenedougou","Komondjari","Kompienga","Kossi","Koulpelogo","Kouritenga","Kourweogo","Leraba","Loroum","Mouhoun","Namentenga","Nahouri","Nayala","Noumbiel","Oubritenga","Oudalan","Passore","Poni","Sanguie","Sanmatenga","Seno","Sissili","Soum","Sourou","Tapoa","Tuy","Yagha","Yatenga","Ziro","Zondoma","Zoundweogo"],Burma:["Ayeyarwady","Bago","Magway","Mandalay","Sagaing","Tanintharyi","Yangon","Chin State","Kachin State","Kayin State","Kayah State","Mon State","Rakhine State","Shan State"],Burundi:["Bubanza","Bujumbura Mairie","Bujumbura Rural","Bururi","Cankuzo","Cibitoke","Gitega","Karuzi","Kayanza","Kirundo","Makamba","Muramvya","Muyinga","Mwaro","Ngozi","Rutana","Ruyigi"],Cambodia:["Banteay Mean Chey","Batdambang","Kampong Cham","Kampong Chhnang","Kampong Spoe","Kampong Thum","Kampot","Kandal","Koh Kong","Kracheh","Mondol Kiri","Otdar Mean Chey","Pouthisat","Preah Vihear","Prey Veng","Rotanakir","Siem Reab","Stoeng Treng","Svay Rieng","Takao","Keb","Pailin","Phnom Penh","Preah Seihanu"],Cameroon:["Adamaoua","Centre","Est","Extreme-Nord","Littoral","Nord","Nord-Ouest","Ouest","Sud","Sud-Ouest"],Canada:["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon Territory"],"Cape Verde":["Santo Antão","São Vicente","Santa Luzia,","São Nicolau","Sal","Boa Vista","Maio","Santiago","Fogo","Brava"],"Cayman Islands (the)":["n/a"],"Central African Republic (the)":["Bamingui-Bangoran","Bangui","Basse-Kotto","Haute-Kotto","Haut-Mbomou","Kemo","Lobaye","Mambere-Kadei","Mbomou","Nana-Grebizi","Nana-Mambere","Ombella-Mpoko","Ouaka","Ouham","Ouham-Pende","Sangha-Mbaere","Vakaga"],Chad:["Batha","Biltine","Borkou-Ennedi-Tibesti","Chari-Baguirmi","Guéra","Kanem","Lac","Logone Occidental","Logone Oriental","Mayo-Kebbi","Moyen-Chari","Ouaddaï","Salamat","Tandjile"],Chile:["Aysen","Antofagasta","Araucania","Atacama","Bio-Bio","Coquimbo","O'Higgins","Los Lagos","Magallanes y la Antartica Chilena","Maule","Santiago Region Metropolitana","Tarapaca","Valparaiso"],China:["Anhui","Fujian","Gansu","Guangdong","Guizhou","Hainan","Hebei","Heilongjiang","Henan","Hubei","Hunan","Jiangsu","Jiangxi","Jilin","Liaoning","Qinghai","Shaanxi","Shandong","Shanxi","Sichuan","Yunnan","Zhejiang","Guangxi","Nei Mongol","Ningxia","Xinjiang","Xizang (Tibet)","Beijing","Chongqing","Shanghai","Tianjin"],"Christmas Island":["n/a"],"Cocos (Keeling) Islands (the)":["n/a"],Colombia:["Amazonas","Antioquia","Arauca","Atlantico","Bogota District Capital","Bolivar","Boyaca","Caldas","Caqueta","Casanare","Cauca","Cesar","Choco","Cordoba","Cundinamarca","Guainia","Guaviare","Huila","La Guajira","Magdalena","Meta","Narino","Norte de Santander","Putumayo","Quindio","Risaralda","San Andres & Providencia","Santander","Sucre","Tolima","Valle del Cauca","Vaupes","Vichada"],"Comoros (the)":["Grande Comore (Njazidja)","Anjouan (Nzwani)","Moheli (Mwali)"],"Congo (the Democratic Republic)":["Bandundu","Bas-Congo","Equateur","Kasai-Occidental","Kasai-Oriental","Katanga","Kinshasa","Maniema","Nord-Kivu","Orientale","Sud-Kivu"],"Congo (the)":["Bouenza","Brazzaville","Cuvette","Cuvette-Ouest","Kouilou","Lekoumou","Likouala","Niari","Plateaux","Pool","Sangha"],"Cook Islands (the)":["n/a"],"Costa Rica":["Alajuela","Cartago","Guanacaste","Heredia","Limon","Puntarenas","San Jose"],Croatia:["Bjelovarsko-Bilogorska","Brodsko-Posavska","Dubrovacko-Neretvanska","Istarska","Karlovacka","Koprivnicko-Krizevacka","Krapinsko-Zagorska","Licko-Senjska","Medimurska","Osjecko-Baranjska","Pozesko-Slavonska","Primorsko-Goranska","Sibensko-Kninska","Sisacko-Moslavacka","Splitsko-Dalmatinska","Varazdinska","Viroviticko-Podravska","Vukovarsko-Srijemska","Zadarska","Zagreb","Zagrebacka"],Cuba:["Camaguey","Ciego de Avila","Cienfuegos","Ciudad de La Habana","Granma","Guantanamo","Holguin","Isla de la Juventud","La Habana","Las Tunas","Matanzas","Pinar del Rio","Sancti Spiritus","Santiago de Cuba","Villa Clara"],Curaçao:["n/a"],Cyprus:["Famagusta","Kyrenia","Larnaca","Limassol","Nicosia","Paphos"],Czechia:["Jihocesky Kraj","Jihomoravsky Kraj","Karlovarsky Kraj","Kralovehradecky Kraj","Liberecky Kraj","Moravskoslezsky Kraj","Olomoucky Kraj","Pardubicky Kraj","Plzensky Kraj","Praha","Stredocesky Kraj","Ustecky Kraj","Vysocina","Zlinsky Kraj"],"Côte d'Ivoire":["Abidjan","Bas-Sassandra","Comoé","Denguélé","Gôh-Djiboua","Lacs","Lagunes","Montagnes","Sassandra-Marahoué","Savanes","Vallée du Bandama","Woroba","Yamoussoukro","Zanzan"],Denmark:["Arhus","Bornholm","Frederiksberg","Frederiksborg","Fyn","Kobenhavn","Kobenhavns","Nordjylland","Ribe","Ringkobing","Roskilde","Sonderjylland","Storstrom","Vejle","Vestsjalland","Viborg"],Djibouti:["Ali Sabih","Dikhil","Djibouti","Obock","Tadjoura"],Dominica:["Saint Andrew","Saint David","Saint George","Saint John","Saint Joseph","Saint Luke","Saint Mark","Saint Patrick","Saint Paul","Saint Peter"],"Dominican Republic (the)":["Azua","Baoruco","Barahona","Dajabon","Distrito Nacional","Duarte","Elias Pina","El Seibo","Espaillat","Hato Mayor","Independencia","La Altagracia","La Romana","La Vega","Maria Trinidad Sanchez","Monsenor Nouel","Monte Cristi","Monte Plata","Pedernales","Peravia","Puerto Plata","Salcedo","Samana","Sanchez Ramirez","San Cristobal","San Jose de Ocoa","San Juan","San Pedro de Macoris","Santiago","Santiago Rodriguez","Santo Domingo","Valverde"],"East Timor":["Aileu","Ainaro","Baucau","Bobonaro","Cova-Lima","Dili","Ermera","Lautem","Liquica","Manatuto","Manufahi","Oecussi","Viqueque"],Ecuador:["Azuay","Bolivar","Canar","Carchi","Chimborazo","Cotopaxi","El Oro","Esmeraldas","Galapagos","Guayas","Imbabura","Loja","Los Rios","Manabi","Morona-Santiago","Napo","Orellana","Pastaza","Pichincha","Sucumbios","Tungurahua","Zamora-Chinchipe"],Egypt:["Ad Daqahliyah","Al Bahr al Ahmar","Al Buhayrah","Al Fayyum","Al Gharbiyah","Al Iskandariyah","Al Isma'iliyah","Al Jizah","Al Minufiyah","Al Minya","Al Qahirah","Al Qalyubiyah","Al Wadi al Jadid","Ash Sharqiyah","As Suways","Aswan","Asyut","Bani Suwayf","Bur Sa'id","Dumyat","Janub Sina'","Kafr ash Shaykh","Matruh","Qina","Shamal Sina'","Suhaj"],"El Salvador":["Ahuachapan","Cabanas","Chalatenango","Cuscatlan","La Libertad","La Paz","La Union","Morazan","San Miguel","San Salvador","Santa Ana","San Vicente","Sonsonate","Usulutan"],"Equatorial Guinea":["Annobon","Bioko Norte","Bioko Sur","Centro Sur","Kie-Ntem","Litoral","Wele-Nzas"],Eritrea:["Anseba","Debub","Debubawi K'eyih Bahri","Gash Barka","Ma'akel","Semenawi Keyih Bahri"],Estonia:["Harjumaa (Tallinn)","Hiiumaa (Kardla)","Ida-Virumaa (Johvi)","Jarvamaa (Paide)","Jogevamaa (Jogeva)","Laanemaa (Haapsalu)","Laane-Virumaa (Rakvere)","Parnumaa (Parnu)","Polvamaa (Polva)","Raplamaa (Rapla)","Saaremaa (Kuressaare)","Tartumaa (Tartu)","Valgamaa (Valga)","Viljandimaa (Viljandi)","Vorumaa (Voru)"],Eswatini:["n/a"],Ethiopia:["Addis Ababa","Afar","Amhara","Binshangul Gumuz","Dire Dawa","Gambela Hizboch","Harari","Oromia","Somali","Tigray","Southern Nations, Nationalities, and Peoples Region"],"Falkland Islands (the) [Malvinas]":["n/a"],"Faroe Islands (the)":["n/a"],Fiji:["Central (Suva)","Eastern (Levuka)","Northern (Labasa)","Rotuma","Western (Lautoka)"],Finland:["Aland","Etela-Suomen Laani","Ita-Suomen Laani","Lansi-Suomen Laani","Lappi","Oulun Laani"],France:["Alsace","Aquitaine","Auvergne","Basse-Normandie","Bourgogne","Bretagne","Centre","Champagne-Ardenne","Corse","Franche-Comte","Haute-Normandie","Ile-de-France","Languedoc-Roussillon","Limousin","Lorraine","Midi-Pyrenees","Nord-Pas-de-Calais","Pays de la Loire","Picardie","Poitou-Charentes","Provence-Alpes-Cote d'Azur","Rhone-Alpes"],"French Guiana":["n/a"],"French Polynesia":["n/a"],"French Southern Territories (the)":["n/a"],Gabon:["Estuaire","Haut-Ogooue","Moyen-Ogooue","Ngounie","Nyanga","Ogooue-Ivindo","Ogooue-Lolo","Ogooue-Maritime","Woleu-Ntem"],"Gambia (the)":["Banjul","Central River","Lower River","North Bank","Upper River","Western"],Georgia:["Abkhazia","Adjara","Guria","Imereti","Kakheti","Kvemo Kartli","Mtskheta-Mtianeti","Racha-Lechkhumi and Kvemo Svaneti","Samegrelo-Zemo Svaneti","Samtskhe-Javakheti","Shida Kartli","Tbilisi"],Germany:["Baden-Wuerttemberg","Bayern","Berlin","Brandenburg","Bremen","Hamburg","Hessen","Mecklenburg-Vorpommern","Niedersachsen","Nordrhein-Westfalen","Rheinland-Pfalz","Saarland","Sachsen","Sachsen-Anhalt","Schleswig-Holstein","Thueringen"],Ghana:["Ashanti","Brong-Ahafo","Central","Eastern","Greater Accra","Northern","Upper East","Upper West","Volta","Western"],Gibraltar:["n/a"],Greece:["Agion Oros","Achaia","Aitolia kai Akarmania","Argolis","Arkadia","Arta","Attiki","Chalkidiki","Chanion","Chios","Dodekanisos","Drama","Evros","Evrytania","Evvoia","Florina","Fokidos","Fthiotis","Grevena","Ileia","Imathia","Ioannina","Irakleion","Karditsa","Kastoria","Kavala","Kefallinia","Kerkyra","Kilkis","Korinthia","Kozani","Kyklades","Lakonia","Larisa","Lasithi","Lefkas","Lesvos","Magnisia","Messinia","Pella","Pieria","Preveza","Rethynnis","Rodopi","Samos","Serrai","Thesprotia","Thessaloniki","Trikala","Voiotia","Xanthi","Zakynthos"],Greenland:["Avannaa (Nordgronland)","Tunu (Ostgronland)","Kitaa (Vestgronland)"],Grenada:["Carriacou and Petit Martinique","Saint Andrew","Saint David","Saint George","Saint John","Saint Mark","Saint Patrick"],Guadeloupe:["n/a"],Guam:["n/a"],Guatemala:["Alta Verapaz","Baja Verapaz","Chimaltenango","Chiquimula","El Progreso","Escuintla","Guatemala","Huehuetenango","Izabal","Jalapa","Jutiapa","Peten","Quetzaltenango","Quiche","Retalhuleu","Sacatepequez","San Marcos","Santa Rosa","Solola","Suchitepequez","Totonicapan","Zacapa"],Guernsey:["n/a"],Guinea:["Beyla","Boffa","Boke","Conakry","Coyah","Dabola","Dalaba","Dinguiraye","Dubreka","Faranah","Forecariah","Fria","Gaoual","Gueckedou","Kankan","Kerouane","Kindia","Kissidougou","Koubia","Koundara","Kouroussa","Labe","Lelouma","Lola","Macenta","Mali","Mamou","Mandiana","Nzerekore","Pita","Siguiri","Telimele","Tougue","Yomou"],"Guinea-Bissau":["Bafata","Biombo","Bissau","Bolama","Cacheu","Gabu","Oio","Quinara","Tombali"],Guyana:["Barima-Waini","Cuyuni-Mazaruni","Demerara-Mahaica","East Berbice-Corentyne","Essequibo Islands-West Demerara","Mahaica-Berbice","Pomeroon-Supenaam","Potaro-Siparuni","Upper Demerara-Berbice","Upper Takutu-Upper Essequibo"],Haiti:["Artibonite","Centre","Grand 'Anse","Nord","Nord-Est","Nord-Ouest","Ouest","Sud","Sud-Est"],"Heard Island and McDonald Islands":["n/a"],"Holy See (the)":["n/a"],Honduras:["Atlantida","Choluteca","Colon","Comayagua","Copan","Cortes","El Paraiso","Francisco Morazan","Gracias a Dios","Intibuca","Islas de la Bahia","La Paz","Lempira","Ocotepeque","Olancho","Santa Barbara","Valle","Yoro"],"Hong Kong":["Yuen Long District","Tsuen Wan District","Tai Po District","Sai Kung District","Islands District","Central and Western District","Wan Chai","Eastern","Southern","North","Yau Tsim Mong","Sham Shui Po","Kowloon City","Wong Tai Sin","Kwun Tong","Kwai Tsing","Tuen Mun","Sha Tin"],Hungary:["Bacs-Kiskun","Baranya","Bekes","Borsod-Abauj-Zemplen","Csongrad","Fejer","Gyor-Moson-Sopron","Hajdu-Bihar","Heves","Jasz-Nagykun-Szolnok","Komarom-Esztergom","Nograd","Pest","Somogy","Szabolcs-Szatmar-Bereg","Tolna","Vas","Veszprem","Zala","Bekescsaba","Debrecen","Dunaujvaros","Eger","Gyor","Hodmezovasarhely","Kaposvar","Kecskemet","Miskolc","Nagykanizsa","Nyiregyhaza","Pecs","Sopron","Szeged","Szekesfehervar","Szolnok","Szombathely","Tatabanya","Veszprem","Zalaegerszeg"],Iceland:["Austurland","Hofudhborgarsvaedhi","Nordhurland Eystra","Nordhurland Vestra","Sudhurland","Sudhurnes","Vestfirdhir","Vesturland"],India:["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Ladakh","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Pondicherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttaranchal","Uttar Pradesh","West Bengal"],Indonesia:["Aceh","Bali","Banten","Bengkulu","Gorontalo","Irian Jaya Barat","Jakarta Raya","Jambi","Jawa Barat","Jawa Tengah","Jawa Timur","Kalimantan Barat","Kalimantan Selatan","Kalimantan Tengah","Kalimantan Timur","Kepulauan Bangka Belitung","Kepulauan Riau","Lampung","Maluku","Maluku Utara","Nusa Tenggara Barat","Nusa Tenggara Timur","Papua","Riau","Sulawesi Barat","Sulawesi Selatan","Sulawesi Tengah","Sulawesi Tenggara","Sulawesi Utara","Sumatera Barat","Sumatera Selatan","Sumatera Utara","Yogyakarta"],"Iran (Islamic Republic of)":["Ardabil","Azarbayjan-e Gharbi","Azarbayjan-e Sharqi","Bushehr","Chahar Mahall va Bakhtiari","Esfahan","Fars","Gilan","Golestan","Hamadan","Hormozgan","Ilam","Kerman","Kermanshah","Khorasan-e Janubi","Khorasan-e Razavi","Khorasan-e Shemali","Khuzestan","Kohgiluyeh va Buyer Ahmad","Kordestan","Lorestan","Markazi","Mazandaran","Qazvin","Qom","Semnan","Sistan va Baluchestan","Tehran","Yazd","Zanjan"],Iraq:["Al Anbar","Al Basrah","Al Muthanna","Al Qadisiyah","An Najaf","Arbil","As Sulaymaniyah","At Ta'mim","Babil","Baghdad","Dahuk","Dhi Qar","Diyala","Karbala'","Maysan","Ninawa","Salah ad Din","Wasit"],Ireland:["Carlow","Cavan","Clare","Cork","Donegal","Dublin","Galway","Kerry","Kildare","Kilkenny","Laois","Leitrim","Limerick","Longford","Louth","Mayo","Meath","Monaghan","Offaly","Roscommon","Sligo","Tipperary","Waterford","Westmeath","Wexford","Wicklow"],"Isle of Man":["n/a"],Israel:["Central","Haifa","Jerusalem","Northern","Southern","Tel Aviv"],Italy:["Abruzzo","Basilicata","Calabria","Campania","Emilia-Romagna","Friuli-Venezia Giulia","Lazio","Liguria","Lombardia","Marche","Molise","Piemonte","Puglia","Sardegna","Sicilia","Toscana","Trentino-Alto Adige","Umbria","Valle d'Aosta","Veneto"],Jamaica:["Clarendon","Hanover","Kingston","Manchester","Portland","Saint Andrew","Saint Ann","Saint Catherine","Saint Elizabeth","Saint James","Saint Mary","Saint Thomas","Trelawny","Westmoreland"],Japan:["Aichi","Akita","Aomori","Chiba","Ehime","Fukui","Fukuoka","Fukushima","Gifu","Gumma","Hiroshima","Hokkaido","Hyogo","Ibaraki","Ishikawa","Iwate","Kagawa","Kagoshima","Kanagawa","Kochi","Kumamoto","Kyoto","Mie","Miyagi","Miyazaki","Nagano","Nagasaki","Nara","Niigata","Oita","Okayama","Okinawa","Osaka","Saga","Saitama","Shiga","Shimane","Shizuoka","Tochigi","Tokushima","Tokyo","Tottori","Toyama","Wakayama","Yamagata","Yamaguchi","Yamanashi"],Jersey:["n/a"],Jordan:["Ajlun","Al 'Aqabah","Al Balqa'","Al Karak","Al Mafraq","'Amman","At Tafilah","Az Zarqa'","Irbid","Jarash","Ma'an","Madaba"],Kazakhstan:["Almaty Oblysy","Almaty Qalasy","Aqmola Oblysy","Aqtobe Oblysy","Astana Qalasy","Atyrau Oblysy","Batys Qazaqstan Oblysy","Bayqongyr Qalasy","Mangghystau Oblysy","Ongtustik Qazaqstan Oblysy","Pavlodar Oblysy","Qaraghandy Oblysy","Qostanay Oblysy","Qyzylorda Oblysy","Shyghys Qazaqstan Oblysy","Soltustik Qazaqstan Oblysy","Zhambyl Oblysy"],Kenya:["Central","Coast","Eastern","Nairobi Area","North Eastern","Nyanza","Rift Valley","Western"],Kiribati:["Banaba","Tarawa","Northern Gilbert Islands","Central Gilbert Island","Southern Gilbert Islands","Line Islands"],"Korea (the Democratic People's Republic of)":["Chagang","North Hamgyong","South Hamgyong","North Hwanghae","South Hwanghae","Kangwon","North P'yongan","South P'yongan","Yanggang","Kaesong","Najin","Namp'o","Pyongyang"],"Korea (the Republic of)":["Seoul","Busan City","Daegu City","Incheon City","Gwangju City","Daejeon City","Ulsan","Gyeonggi Province","Gangwon Province","North Chungcheong Province","South Chungcheong Province","North Jeolla Province","South Jeolla Province","North Gyeongsang Province","South Gyeongsang Province","Jeju"],Kosovo:["Ferizaj","Gjakova","Gjilan","Mitrovica","Peja","Pristina","Prizren"],Kuwait:["Al Ahmadi","Al Farwaniyah","Al Asimah","Al Jahra","Hawalli","Mubarak Al-Kabeer"],Kyrgyzstan:["Batken Oblasty","Bishkek Shaary","Chuy Oblasty","Jalal-Abad Oblasty","Naryn Oblasty","Osh Oblasty","Talas Oblasty","Ysyk-Kol Oblasty"],"Lao People's Democratic Republic (the)":["Attapu","Bokeo","Bolikhamxai","Champasak","Houaphan","Khammouan","Louangnamtha","Louangphrabang","Oudomxai","Phongsali","Salavan","Savannakhet","Viangchan","Viangchan","Xaignabouli","Xaisomboun","Xekong","Xiangkhoang"],Latvia:["Aizkraukles Rajons","Aluksnes Rajons","Balvu Rajons","Bauskas Rajons","Cesu Rajons","Daugavpils","Daugavpils Rajons","Dobeles Rajons","Gulbenes Rajons","Jekabpils Rajons","Jelgava","Jelgavas Rajons","Jurmala","Kraslavas Rajons","Kuldigas Rajons","Liepaja","Liepajas Rajons","Limbazu Rajons","Ludzas Rajons","Madonas Rajons","Ogres Rajons","Preilu Rajons","Rezekne","Rezeknes Rajons","Riga","Rigas Rajons","Saldus Rajons","Talsu Rajons","Tukuma Rajons","Valkas Rajons","Valmieras Rajons","Ventspils","Ventspils Rajons"],Lebanon:["Beyrouth","Beqaa","Liban-Nord","Liban-Sud","Mont-Liban","Nabatiye"],Lesotho:["Berea","Butha-Buthe","Leribe","Mafeteng","Maseru","Mohale's Hoek","Mokhotlong","Qacha's Nek","Quthing","Thaba-Tseka"],Liberia:["Bomi","Bong","Gbarpolu","Grand Bassa","Grand Cape Mount","Grand Gedeh","Grand Kru","Lofa","Margibi","Maryland","Montserrado","Nimba","River Cess","River Gee","Sinoe"],Libya:["Ajdabiya","Al 'Aziziyah","Al Fatih","Al Jabal al Akhdar","Al Jufrah","Al Khums","Al Kufrah","An Nuqat al Khams","Ash Shati'","Awbari","Az Zawiyah","Banghazi","Darnah","Ghadamis","Gharyan","Misratah","Murzuq","Sabha","Sawfajjin","Surt","Tarabulus","Tarhunah","Tubruq","Yafran","Zlitan"],Liechtenstein:["Balzers","Eschen","Gamprin","Mauren","Planken","Ruggell","Schaan","Schellenberg","Triesen","Triesenberg","Vaduz"],Lithuania:["Alytaus","Kauno","Klaipedos","Marijampoles","Panevezio","Siauliu","Taurages","Telsiu","Utenos","Vilniaus"],Luxembourg:["Diekirch","Grevenmacher","Luxembourg"],Macao:["n/a"],Macedonia:["Aerodrom","Aracinovo","Berovo","Bitola","Bogdanci","Bogovinje","Bosilovo","Brvenica","Butel","Cair","Caska","Centar","Centar Zupa","Cesinovo","Cucer-Sandevo","Debar","Debartsa","Delcevo","Demir Hisar","Demir Kapija","Dojran","Dolneni","Drugovo","Gazi Baba","Gevgelija","Gjorce Petrov","Gostivar","Gradsko","Ilinden","Jegunovce","Karbinci","Karpos","Kavadarci","Kicevo","Kisela Voda","Kocani","Konce","Kratovo","Kriva Palanka","Krivogastani","Krusevo","Kumanovo","Lipkovo","Lozovo","Makedonska Kamenica","Makedonski Brod","Mavrovo i Rastusa","Mogila","Negotino","Novaci","Novo Selo","Ohrid","Oslomej","Pehcevo","Petrovec","Plasnica","Prilep","Probistip","Radovis","Rankovce","Resen","Rosoman","Saraj","Skopje","Sopiste","Staro Nagoricane","Stip","Struga","Strumica","Studenicani","Suto Orizari","Sveti Nikole","Tearce","Tetovo","Valandovo","Vasilevo","Veles","Vevcani","Vinica","Vranestica","Vrapciste","Zajas","Zelenikovo","Zelino","Zrnovci"],Madagascar:["Antananarivo","Antsiranana","Fianarantsoa","Mahajanga","Toamasina","Toliara"],Malawi:["Balaka","Blantyre","Chikwawa","Chiradzulu","Chitipa","Dedza","Dowa","Karonga","Kasungu","Likoma","Lilongwe","Machinga","Mangochi","Mchinji","Mulanje","Mwanza","Mzimba","Ntcheu","Nkhata Bay","Nkhotakota","Nsanje","Ntchisi","Phalombe","Rumphi","Salima","Thyolo","Zomba"],Malaysia:["Johor","Kedah","Kelantan","Kuala Lumpur","Labuan","Malacca","Negeri Sembilan","Pahang","Perak","Perlis","Penang","Sabah","Sarawak","Selangor","Terengganu"],Maldives:["Alifu","Baa","Dhaalu","Faafu","Gaafu Alifu","Gaafu Dhaalu","Gnaviyani","Haa Alifu","Haa Dhaalu","Kaafu","Laamu","Lhaviyani","Maale","Meemu","Noonu","Raa","Seenu","Shaviyani","Thaa","Vaavu"],Mali:["Bamako (Capital)","Gao","Kayes","Kidal","Koulikoro","Mopti","Segou","Sikasso","Tombouctou"],Malta:["Southern Harbour","Northern Harbour","Western District","Northern District","Gozo and Comino"],"Marshall Islands (the)":["Ailuk","Ailinglaplap","Arno","Aur","Ebon","Enewetak","Jabat","Jaluit","Kili","Kwajalein","Lae","Lib","Likiep","Majuro","Maloelap","Mejit","Mili","Namorik","Namu","Rongelap","Ujae","Utirik","Wotho","Wotje","Ailinginae","Bikar","Bikini","Bokak","Erikub","Jemo","Rongrik","Toke","Ujelang"],Martinique:["n/a"],Mauritania:["Adrar","Assaba","Brakna","Dakhlet Nouadhibou","Gorgol","Guidimaka","Hodh Ech Chargui","Hodh El Gharbi","Inchiri","Nouakchott","Tagant","Tiris Zemmour","Trarza"],Mauritius:["Agalega Islands","Black River","Cargados Carajos Shoals","Flacq","Grand Port","Moka","Pamplemousses","Plaines Wilhems","Port Louis","Riviere du Rempart","Rodrigues","Savanne"],Mayotte:["n/a"],Mexico:["Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Coahuila de Zaragoza","Colima","Distrito Federal","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","Mexico","Michoacan de Ocampo","Morelos","Nayarit","Nuevo Leon","Oaxaca","Puebla","Queretaro de Arteaga","Quintana Roo","San Luis Potosi","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz-Llave","Yucatan","Zacatecas"],"Micronesia (Federated States of)":["n/a"],"Moldova (the Republic of)":["Anenii Noi","Basarabeasca","Briceni","Cahul","Cantemir","Calarasi","Causeni","Cimislia","Criuleni","Donduseni","Drochia","Dubasari","Edinet","Falesti","Floresti","Glodeni","Hincesti","Ialoveni","Leova","Nisporeni","Ocnita","Orhei","Rezina","Riscani","Singerei","Soldanesti","Soroca","Stefan-Voda","Straseni","Taraclia","Telenesti","Ungheni","Balti","Bender","Chisinau","Gagauzia","Stinga Nistrului"],Monaco:["Monaco-Ville","La Condamine","Monte Carlo","Fontvieille"],Mongolia:["Arhangay","Bayanhongor","Bayan-Olgiy","Bulgan","Darhan Uul","Dornod","Dornogovi","Dundgovi","Dzavhan","Govi-Altay","Govi-Sumber","Hentiy","Hovd","Hovsgol","Omnogovi","Orhon","Ovorhangay","Selenge","Suhbaatar","Tov","Ulaanbaatar","Uvs"],Montenegro:["Andrijevica","Bar","Berane","Berane","Bijelo Polje","Budva","Cetinje","Danilovgrad","Gusinje","Herceg Novi","Kolašin","Kotor","Mojkovac","Nikšić","Petnjica","Plav","Pljevlja","Plužine","Podgorica","Rožaje","Šavnik","Tivat","Tuzi","Ulcinj","Žabljak"],Montserrat:["n/a"],Morocco:["Agadir","Al Hoceima","Azilal","Beni Mellal","Ben Slimane","Boulemane","Casablanca","Chaouen","El Jadida","El Kelaa des Sraghna","Er Rachidia","Essaouira","Fes","Figuig","Guelmim","Ifrane","Kenitra","Khemisset","Khenifra","Khouribga","Laayoune","Larache","Marrakech","Meknes","Nador","Ouarzazate","Oujda","Rabat-Sale","Safi","Settat","Sidi Kacem","Tangier","Tan-Tan","Taounate","Taroudannt","Tata","Taza","Tetouan","Tiznit"],Mozambique:["Cabo Delgado","Gaza","Inhambane","Manica","Maputo","Cidade de Maputo","Nampula","Niassa","Sofala","Tete","Zambezia"],Myanmar:["n/a"],Namibia:["Caprivi","Erongo","Hardap","Karas","Khomas","Kunene","Ohangwena","Okavango","Omaheke","Omusati","Oshana","Oshikoto","Otjozondjupa"],Nauru:["Aiwo","Anabar","Anetan","Anibare"],Nepal:["Bagmati","Bheri","Dhawalagiri","Gandaki","Janakpur","Karnali","Kosi","Lumbini","Mahakali","Mechi","Narayani","Rapti","Sagarmatha","Seti"],"Netherlands (the)":["Drenthe","Flevoland","Friesland","Gelderland","Groningen","Limburg","Noord-Brabant","Noord-Holland","Overijssel","Utrecht","Zeeland","Zuid-Holland"],"New Caledonia":["n/a"],"New Zealand":["Auckland","Bay of Plenty","Canterbury","Chatham Islands","Gisborne","Hawke's Bay","Manawatu-Wanganui","Marlborough","Nelson","Northland","Otago","Southland","Taranaki","Tasman","Waikato","Wellington","West Coast"],Nicaragua:["Atlantico Norte","Atlantico Sur","Boaco","Carazo","Chinandega","Chontales","Esteli","Granada","Jinotega","Leon","Madriz","Managua","Masaya","Matagalpa","Nueva Segovia","Rio San Juan","Rivas"],"Niger (the)":["Agadez","Diffa","Dosso","Maradi","Niamey","Tahoua","Tillaberi","Zinder"],Nigeria:["Abia","Abuja Federal Capital","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nassarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"],Niue:["n/a"],"Norfolk Island":["n/a"],"Northern Mariana Islands (the)":["n/a"],Norway:["Akershus","Aust-Agder","Buskerud","Finnmark","Hedmark","Hordaland","More og Romsdal","Nordland","Nord-Trondelag","Oppland","Oslo","Ostfold","Rogaland","Sogn og Fjordane","Sor-Trondelag","Telemark","Troms","Vest-Agder","Vestfold"],Oman:["Ad Dakhiliyah","Al Batinah","Al Wusta","Ash Sharqiyah","Az Zahirah","Masqat","Musandam","Dhofar"],Pakistan:["Balochistan","North-West Frontier Province","Punjab","Sindh","Islamabad Capital Territory","Federally Administered Tribal Areas"],Palau:["n/a"],"Palestine, State of":["n/a"],Panama:["Bocas del Toro","Chiriqui","Cocle","Colon","Darien","Herrera","Los Santos","Panama","San Blas","Veraguas"],"Papua New Guinea":["Bougainville","Central","Chimbu","Eastern Highlands","East New Britain","East Sepik","Enga","Gulf","Madang","Manus","Milne Bay","Morobe","National Capital","New Ireland","Northern","Sandaun","Southern Highlands","Western","Western Highlands","West New Britain"],Paraguay:["Alto Paraguay","Alto Parana","Amambay","Asuncion","Boqueron","Caaguazu","Caazapa","Canindeyu","Central","Concepcion","Cordillera","Guaira","Itapua","Misiones","Neembucu","Paraguari","Presidente Hayes","San Pedro"],Peru:["Amazonas","Ancash","Apurimac","Arequipa","Ayacucho","Cajamarca","Callao","Cusco","Huancavelica","Huanuco","Ica","Junin","La Libertad","Lambayeque","Lima","Loreto","Madre de Dios","Moquegua","Pasco","Piura","Puno","San Martin","Tacna","Tumbes","Ucayali"],"Philippines (the)":["Abra","Agusan del Norte","Agusan del Sur","Aklan","Albay","Antique","Apayao","Aurora","Basilan","Bataan","Batanes","Batangas","Biliran","Benguet","Bohol","Bukidnon","Bulacan","Cagayan","Camarines Norte","Camarines Sur","Camiguin","Capiz","Catanduanes","Cavite","Cebu","Compostela","Davao del Norte","Davao del Sur","Davao Oriental","Eastern Samar","Guimaras","Ifugao","Ilocos Norte","Ilocos Sur","Iloilo","Isabela","Kalinga","Laguna","Lanao del Norte","Lanao del Sur","La Union","Leyte","Maguindanao","Marinduque","Masbate","Mindoro Occidental","Mindoro Oriental","Misamis Occidental","Misamis Oriental","Mountain Province","Negros Occidental","Negros Oriental","North Cotabato","Northern Samar","Nueva Ecija","Nueva Vizcaya","Palawan","Pampanga","Pangasinan","Quezon","Quirino","Rizal","Romblon","Samar","Sarangani","Siquijor","Sorsogon","South Cotabato","Southern Leyte","Sultan Kudarat","Sulu","Surigao del Norte","Surigao del Sur","Tarlac","Tawi-Tawi","Zambales","Zamboanga del Norte","Zamboanga del Sur","Zamboanga Sibugay"],Pitcairn:["n/a"],Poland:["Greater Poland (Wielkopolskie)","Kuyavian-Pomeranian (Kujawsko-Pomorskie)","Lesser Poland (Malopolskie)","Lodz (Lodzkie)","Lower Silesian (Dolnoslaskie)","Lublin (Lubelskie)","Lubusz (Lubuskie)","Masovian (Mazowieckie)","Opole (Opolskie)","Podlasie (Podlaskie)","Pomeranian (Pomorskie)","Silesian (Slaskie)","Subcarpathian (Podkarpackie)","Swietokrzyskie (Swietokrzyskie)","Warmian-Masurian (Warminsko-Mazurskie)","West Pomeranian (Zachodniopomorskie)"],Portugal:["Aveiro","Acores","Beja","Braga","Braganca","Castelo Branco","Coimbra","Evora","Faro","Guarda","Leiria","Lisboa","Madeira","Portalegre","Porto","Santarem","Setubal","Viana do Castelo","Vila Real","Viseu"],"Puerto Rico":["n/a"],Qatar:["Ad Dawhah","Al Ghuwayriyah","Al Jumayliyah","Al Khawr","Al Wakrah","Ar Rayyan","Jarayan al Batinah","Madinat ash Shamal","Umm Sa'id","Umm Salal"],"Republic of North Macedonia":["n/a"],Romania:["Alba","Arad","Arges","Bacau","Bihor","Bistrita-Nasaud","Botosani","Braila","Brasov","Bucuresti","Buzau","Calarasi","Caras-Severin","Cluj","Constanta","Covasna","Dimbovita","Dolj","Galati","Gorj","Giurgiu","Harghita","Hunedoara","Ialomita","Iasi","Ilfov","Maramures","Mehedinti","Mures","Neamt","Olt","Prahova","Salaj","Satu Mare","Sibiu","Suceava","Teleorman","Timis","Tulcea","Vaslui","Vilcea","Vrancea"],"Russian Federation (the)":["Amur","Arkhangel'sk","Astrakhan'","Belgorod","Bryansk","Chelyabinsk","Chita","Irkutsk","Ivanovo","Kaliningrad","Kaluga","Kamchatka","Kemerovo","Kirov","Kostroma","Kurgan","Kursk","Leningrad","Lipetsk","Magadan","Moscow","Murmansk","Nizhniy Novgorod","Novgorod","Novosibirsk","Omsk","Orenburg","Orel","Penza","Perm'","Pskov","Rostov","Ryazan'","Sakhalin","Samara","Saratov","Smolensk","Sverdlovsk","Tambov","Tomsk","Tula","Tver'","Tyumen'","Ul'yanovsk","Vladimir","Volgograd","Vologda","Voronezh","Yaroslavl'","Adygeya","Altay","Bashkortostan","Buryatiya","Chechnya","Chuvashiya","Dagestan","Ingushetiya","Kabardino-Balkariya","Kalmykiya","Karachayevo-Cherkesiya","Kareliya","Khakasiya","Komi","Mariy-El","Mordoviya","Sakha","North Ossetia","Tatarstan","Tyva","Udmurtiya","Aga Buryat","Chukotka","Evenk","Khanty-Mansi","Komi-Permyak","Koryak","Nenets","Taymyr","Ust'-Orda Buryat","Yamalo-Nenets","Altay","Khabarovsk","Krasnodar","Krasnoyarsk","Primorskiy","Stavropol'","Moscow","St. Petersburg","Yevrey"],Rwanda:["Butare","Byumba","Cyangugu","Gikongoro","Gisenyi","Gitarama","Kibungo","Kibuye","Kigali Rurale","Kigali-ville","Umutara","Ruhengeri"],Réunion:["n/a"],"Saint Barthélemy":["n/a"],"Saint Helena, Ascension and Tristan da Cunha":["n/a"],"Saint Kitts and Nevis":["n/a"],"Saint Lucia":["n/a"],"Saint Martin (French part)":["n/a"],"Saint Pierre and Miquelon":["n/a"],"Saint Vincent and the Grenadines":["n/a"],Samoa:["A'ana","Aiga-i-le-Tai","Atua","Fa'asaleleaga","Gaga'emauga","Gagaifomauga","Palauli","Satupa'itea","Tuamasaga","Va'a-o-Fonoti","Vaisigano"],"San Marino":["Acquaviva","Borgo Maggiore","Chiesanuova","Domagnano","Faetano","Fiorentino","Montegiardino","San Marino Citta","Serravalle"],"Sao Tome and Principe":["Água Grande","Cantagalo","Caué","Lembá","Lobata","Mé-Zóchi","Autonomous Region of Príncipe"],"Saudi Arabia":["Al Bahah","Al Hudud ash Shamaliyah","Al Jawf","Al Madinah","Al Qasim","Ar Riyad","Ash Sharqiyah","'Asir","Ha'il","Jizan","Makkah","Najran","Tabuk"],Senegal:["Dakar","Diourbel","Fatick","Kaolack","Kolda","Louga","Matam","Saint-Louis","Tambacounda","Thies","Ziguinchor"],Serbia:["Valjevo","Šabac","Čačak","Jagodina","Kruševac","Kraljevo","Kragujevac","Užice","Bor","Požarevac","Leskovac","Niš","Vranje","Pirot","Smederevo","Prokuplje","Zaječar","Zrenjanin","Subotica","Kikinda","Novi Sad","Pančevo","Sremska Mitrovica","Sombor"],Seychelles:["Anse aux Pins","Anse Boileau","Anse Etoile","Anse Louis","Anse Royale","Baie Lazare","Baie Sainte Anne","Beau Vallon","Bel Air","Bel Ombre","Cascade","Glacis","Grand' Anse","Grand' Anse","La Digue","La Riviere Anglaise","Mont Buxton","Mont Fleuri","Plaisance","Pointe La Rue","Port Glaud","Saint Louis","Takamaka"],"Sierra Leone":["Eastern Province","Northern Province","Southern Province","North West Province","Western Area"],Singapore:["Aljunied Group Representation Constituency","Ang Mo Kio Group Representation Constituency","Bishan–Toa Payoh Group Representation Constituency","Chua Chu Kang Group Representation Constituency","East Coast Group Representation Constituency","Holland–Bukit Timah Group Representation Constituency","Jalan Besar Group Representation Constituency","Jurong Group Representation Constituency","Marine Parade Group Representation Constituency","Marsiling–Yew Tee Group Representation Constituency","Nee Soon Group Representation Constituency","Pasir Ris–Punggol Group Representation Constituency","Sengkang Group Representation Constituency","Tampines Group Representation Constituency","Tanjong Pagar Group Representation Constituency","West Coast Group Representation Constituency"],"Sint Maarten (Dutch part)":["n/a"],Slovakia:["Banskobystricky","Bratislavsky","Kosicky","Nitriansky","Presovsky","Trenciansky","Trnavsky","Zilinsky"],Slovenia:["Ajdovscina","Beltinci","Benedikt","Bistrica ob Sotli","Bled","Bloke","Bohinj","Borovnica","Bovec","Braslovce","Brda","Brezice","Brezovica","Cankova","Celje","Cerklje na Gorenjskem","Cerknica","Cerkno","Cerkvenjak","Crensovci","Crna na Koroskem","Crnomelj","Destrnik","Divaca","Dobje","Dobrepolje","Dobrna","Dobrova-Horjul-Polhov Gradec","Dobrovnik-Dobronak","Dolenjske Toplice","Dol pri Ljubljani","Domzale","Dornava","Dravograd","Duplek","Gorenja Vas-Poljane","Gorisnica","Gornja Radgona","Gornji Grad","Gornji Petrovci","Grad","Grosuplje","Hajdina","Hoce-Slivnica","Hodos-Hodos","Horjul","Hrastnik","Hrpelje-Kozina","Idrija","Ig","Ilirska Bistrica","Ivancna Gorica","Izola-Isola","Jesenice","Jezersko","Jursinci","Kamnik","Kanal","Kidricevo","Kobarid","Kobilje","Kocevje","Komen","Komenda","Koper-Capodistria","Kostel","Kozje","Kranj","Kranjska Gora","Krizevci","Krsko","Kungota","Kuzma","Lasko","Lenart","Lendava-Lendva","Litija","Ljubljana","Ljubno","Ljutomer","Logatec","Loska Dolina","Loski Potok","Lovrenc na Pohorju","Luce","Lukovica","Majsperk","Maribor","Markovci","Medvode","Menges","Metlika","Mezica","Miklavz na Dravskem Polju","Miren-Kostanjevica","Mirna Pec","Mislinja","Moravce","Moravske Toplice","Mozirje","Murska Sobota","Muta","Naklo","Nazarje","Nova Gorica","Novo Mesto","Odranci","Oplotnica","Ormoz","Osilnica","Pesnica","Piran-Pirano","Pivka","Podcetrtek","Podlehnik","Podvelka","Polzela","Postojna","Prebold","Preddvor","Prevalje","Ptuj","Puconci","Race-Fram","Radece","Radenci","Radlje ob Dravi","Radovljica","Ravne na Koroskem","Razkrizje","Ribnica","Ribnica na Pohorju","Rogasovci","Rogaska Slatina","Rogatec","Ruse","Salovci","Selnica ob Dravi","Semic","Sempeter-Vrtojba","Sencur","Sentilj","Sentjernej","Sentjur pri Celju","Sevnica","Sezana","Skocjan","Skofja Loka","Skofljica","Slovenj Gradec","Slovenska Bistrica","Slovenske Konjice","Smarje pri Jelsah","Smartno ob Paki","Smartno pri Litiji","Sodrazica","Solcava","Sostanj","Starse","Store","Sveta Ana","Sveti Andraz v Slovenskih Goricah","Sveti Jurij","Tabor","Tisina","Tolmin","Trbovlje","Trebnje","Trnovska Vas","Trzic","Trzin","Turnisce","Velenje","Velika Polana","Velike Lasce","Verzej","Videm","Vipava","Vitanje","Vodice","Vojnik","Vransko","Vrhnika","Vuzenica","Zagorje ob Savi","Zalec","Zavrc","Zelezniki","Zetale","Ziri","Zirovnica","Zuzemberk","Zrece"],"Solomon Islands":["Central","Choiseul","Guadalcanal","Honiara","Isabel","Makira","Malaita","Rennell and Bellona","Temotu","Western"],Somalia:["Awdal","Bakool","Banaadir","Bari","Bay","Galguduud","Gedo","Hiiraan","Jubbada Dhexe","Jubbada Hoose","Mudug","Nugaal","Sanaag","Shabeellaha Dhexe","Shabeellaha Hoose","Sool","Togdheer","Woqooyi Galbeed"],"South Africa":["Eastern Cape","Free State","Gauteng","KwaZulu-Natal","Limpopo","Mpumalanga","North-West","Northern Cape","Western Cape"],"South Georgia and the South Sandwich Islands":["n/a"],"South Sudan":["n/a"],Spain:["Andalucia","Aragon","Asturias","Baleares","Ceuta","Canarias","Cantabria","Castilla-La Mancha","Castilla y Leon","Cataluna","Comunidad Valenciana","Extremadura","Galicia","La Rioja","Madrid","Melilla","Murcia","Navarra","Pais Vasco"],"Sri Lanka":["Central","North Central","North Eastern","North Western","Sabaragamuwa","Southern","Uva","Western"],"Sudan (the)":["A'ali an Nil","Al Bahr al Ahmar","Al Buhayrat","Al Jazirah","Al Khartum","Al Qadarif","Al Wahdah","An Nil al Abyad","An Nil al Azraq","Ash Shamaliyah","Bahr al Jabal","Gharb al Istiwa'iyah","Gharb Bahr al Ghazal","Gharb Darfur","Gharb Kurdufan","Janub Darfur","Janub Kurdufan","Junqali","Kassala","Nahr an Nil","Shamal Bahr al Ghazal","Shamal Darfur","Shamal Kurdufan","Sharq al Istiwa'iyah","Sinnar","Warab"],Suriname:["Brokopondo","Commewijne","Coronie","Marowijne","Nickerie","Para","Paramaribo","Saramacca","Sipaliwini","Wanica"],"Svalbard and Jan Mayen":["n/a"],Swaziland:["Hhohho","Lubombo","Manzini","Shiselweni"],Sweden:["Blekinge","Dalarna","Gävleborg","Gotland","Halland","Jämtland","Jönköping","Kalmar","Kronoberg","Norrbotten","Örebro","Östergötland","Skåne","Södermanland","Stockholm","Uppsala","Värmland","Västerbotten","Västernorrland","Västmanland","Västra Götaland"],Switzerland:["Aargau","Appenzell Ausser-Rhoden","Appenzell Inner-Rhoden","Basel-Landschaft","Basel-Stadt","Bern","Fribourg","Geneve","Glarus","Graubunden","Jura","Luzern","Neuchatel","Nidwalden","Obwalden","Sankt Gallen","Schaffhausen","Schwyz","Solothurn","Thurgau","Ticino","Uri","Valais","Vaud","Zug","Zurich"],"Syrian Arab Republic":["Al Hasakah","Al Ladhiqiyah","Al Qunaytirah","Ar Raqqah","As Suwayda'","Dar'a","Dayr az Zawr","Dimashq","Halab","Hamah","Hims","Idlib","Rif Dimashq","Tartus"],Taiwan:["Chang-hua","Chia-i","Hsin-chu","Hua-lien","I-lan","Kao-hsiung","Kin-men","Lien-chiang","Miao-li","Nan-t'ou","P'eng-hu","P'ing-tung","T'ai-chung","T'ai-nan","T'ai-pei","T'ai-tung","T'ao-yuan","Yun-lin","Chia-i","Chi-lung","Hsin-chu","T'ai-chung","T'ai-nan","Kao-hsiung city","T'ai-pei city"],Tajikistan:["n/a"],"Tanzania, United Republic of":["Arusha","Dar es Salaam","Dodoma","Districts of Republican Subordination","Dushanbe","Gorno-Badakhshan Autonomous Region","Iringa","Kagera","Khatlon Region","Kigoma","Kilimanjaro","Lindi","Manyara","Mara","Mbeya","Morogoro","Mtwara","Mwanza","Pemba North","Pemba South","Pwani","Rukwa","Ruvuma","Shinyanga","Singida","Sughd Region","Tabora","Tanga","Zanzibar Central/South","Zanzibar North","Zanzibar Urban/West"],Thailand:["Amnat Charoen","Ang Thong","Buriram","Chachoengsao","Chai Nat","Chaiyaphum","Chanthaburi","Chiang Mai","Chiang Rai","Chon Buri","Chumphon","Kalasin","Kamphaeng Phet","Kanchanaburi","Khon Kaen","Krabi","Krung Thep Mahanakhon","Lampang","Lamphun","Loei","Lop Buri","Mae Hong Son","Maha Sarakham","Mukdahan","Nakhon Nayok","Nakhon Pathom","Nakhon Phanom","Nakhon Ratchasima","Nakhon Sawan","Nakhon Si Thammarat","Nan","Narathiwat","Nong Bua Lamphu","Nong Khai","Nonthaburi","Pathum Thani","Pattani","Phangnga","Phatthalung","Phayao","Phetchabun","Phetchaburi","Phichit","Phitsanulok","Phra Nakhon Si Ayutthaya","Phrae","Phuket","Prachin Buri","Prachuap Khiri Khan","Ranong","Ratchaburi","Rayong","Roi Et","Sa Kaeo","Sakon Nakhon","Samut Prakan","Samut Sakhon","Samut Songkhram","Sara Buri","Satun","Sing Buri","Sisaket","Songkhla","Sukhothai","Suphan Buri","Surat Thani","Surin","Tak","Trang","Trat","Ubon Ratchathani","Udon Thani","Uthai Thani","Uttaradit","Yala","Yasothon"],"Timor-Leste":["n/a"],Togo:["Kara","Plateaux","Savanes","Centrale","Maritime"],Tokelau:["n/a"],Tonga:["Tongatapu","Vavaʻu","Haʻapai","ʻEua","Ongo Niua","Tonga"],"Trinidad and Tobago":["Couva","Diego Martin","Mayaro","Penal","Princes Town","Sangre Grande","San Juan","Siparia","Tunapuna","Port-of-Spain","San Fernando","Arima","Point Fortin","Chaguanas","Tobago"],Tunisia:["Ariana (Aryanah)","Beja (Bajah)","Ben Arous (Bin 'Arus)","Bizerte (Banzart)","Gabes (Qabis)","Gafsa (Qafsah)","Jendouba (Jundubah)","Kairouan (Al Qayrawan)","Kasserine (Al Qasrayn)","Kebili (Qibili)","Kef (Al Kaf)","Mahdia (Al Mahdiyah)","Manouba (Manubah)","Medenine (Madanin)","Monastir (Al Munastir)","Nabeul (Nabul)","Sfax (Safaqis)","Sidi Bou Zid (Sidi Bu Zayd)","Siliana (Silyanah)","Sousse (Susah)","Tataouine (Tatawin)","Tozeur (Tawzar)","Tunis","Zaghouan (Zaghwan)"],Turkey:["Adana","Adiyaman","Afyonkarahisar","Agri","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin","Aydin","Balikesir","Bartin","Batman","Bayburt","Bilecik","Bingol","Bitlis","Bolu","Burdur","Bursa","Canakkale","Cankiri","Corum","Denizli","Diyarbakir","Duzce","Edirne","Elazig","Erzincan","Erzurum","Eskisehir","Gaziantep","Giresun","Gumushane","Hakkari","Hatay","Igdir","Isparta","Istanbul","Izmir","Kahramanmaras","Karabuk","Karaman","Kars","Kastamonu","Kayseri","Kilis","Kirikkale","Kirklareli","Kirsehir","Kocaeli","Konya","Kutahya","Malatya","Manisa","Mardin","Mersin","Mugla","Mus","Nevsehir","Nigde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Sanliurfa","Siirt","Sinop","Sirnak","Sivas","Tekirdag","Tokat","Trabzon","Tunceli","Usak","Van","Yalova","Yozgat","Zonguldak"],Turkmenistan:["Ahal Welayaty (Ashgabat)","Balkan Welayaty (Balkanabat)","Dashoguz Welayaty","Lebap Welayaty (Turkmenabat)","Mary Welayaty"],"Turks and Caicos Islands (the)":["n/a"],Tuvalu:["n/a"],Uganda:["Adjumani","Apac","Arua","Bugiri","Bundibugyo","Bushenyi","Busia","Gulu","Hoima","Iganga","Jinja","Kabale","Kabarole","Kaberamaido","Kalangala","Kampala","Kamuli","Kamwenge","Kanungu","Kapchorwa","Kasese","Katakwi","Kayunga","Kibale","Kiboga","Kisoro","Kitgum","Kotido","Kumi","Kyenjojo","Lira","Luwero","Masaka","Masindi","Mayuge","Mbale","Mbarara","Moroto","Moyo","Mpigi","Mubende","Mukono","Nakapiripirit","Nakasongola","Nebbi","Ntungamo","Pader","Pallisa","Rakai","Rukungiri","Sembabule","Sironko","Soroti","Tororo","Wakiso","Yumbe"],Ukraine:["Cherkasy","Chernihiv","Chernivtsi","Crimea","Dnipropetrovs'k","Donets'k","Ivano-Frankivs'k","Kharkiv","Kherson","Khmel'nyts'kyy","Kirovohrad","Kiev","Kyyiv","Luhans'k","L'viv","Mykolayiv","Odesa","Poltava","Rivne","Sevastopol'","Sumy","Ternopil'","Vinnytsya","Volyn'","Zakarpattya","Zaporizhzhya","Zhytomyr"],"United Arab Emirates (the)":["Abu Dhabi","'Ajman","Al Fujayrah","Sharjah","Dubai","Ra's al Khaymah","Umm al Qaywayn"],"United Kingdom of Great Britain and Northern Ireland (the)":["Aberconwy and Colwyn","Aberdeen City","Aberdeenshire","Anglesey","Angus","Antrim","Argyll and Bute","Armagh","Avon","Ayrshire","Bath and NE Somerset","Bedfordshire","Belfast","Berkshire","Berwickshire","BFPO","Blaenau Gwent","Buckinghamshire","Caernarfonshire","Caerphilly","Caithness","Cambridgeshire","Cardiff","Cardiganshire","Carmarthenshire","Ceredigion","Channel Islands","Cheshire","City of Bristol","Clackmannanshire","Clwyd","Conwy","Cornwall/Scilly","Cumbria","Denbighshire","Derbyshire","Derry/Londonderry","Devon","Dorset","Down","Dumfries and Galloway","Dunbartonshire","Dundee","Durham","Dyfed","East Ayrshire","East Dunbartonshire","East Lothian","East Renfrewshire","East Riding Yorkshire","East Sussex","Edinburgh","England","Essex","Falkirk","Fermanagh","Fife","Flintshire","Glasgow","Gloucestershire","Greater London","Greater Manchester","Gwent","Gwynedd","Hampshire","Hartlepool","Hereford and Worcester","Hertfordshire","Highlands","Inverclyde","Inverness-Shire","Isle of Man","Isle of Wight","Kent","Kincardinshire","Kingston Upon Hull","Kinross-Shire","Kirklees","Lanarkshire","Lancashire","Leicestershire","Lincolnshire","Londonderry","Merseyside","Merthyr Tydfil","Mid Glamorgan","Mid Lothian","Middlesex","Monmouthshire","Moray","Neath & Port Talbot","Newport","Norfolk","North Ayrshire","North East Lincolnshire","North Lanarkshire","North Lincolnshire","North Somerset","North Yorkshire","Northamptonshire","Northern Ireland","Northumberland","Nottinghamshire","Orkney and Shetland Isles","Oxfordshire","Pembrokeshire","Perth and Kinross","Powys","Redcar and Cleveland","Renfrewshire","Rhonda Cynon Taff","Rutland","Scottish Borders","Shetland","Shropshire","Somerset","South Ayrshire","South Glamorgan","South Gloucesteshire","South Lanarkshire","South Yorkshire","Staffordshire","Stirling","Stockton On Tees","Suffolk","Surrey","Swansea","Torfaen","Tyne and Wear","Tyrone","Vale Of Glamorgan","Wales","Warwickshire","West Berkshire","West Dunbartonshire","West Glamorgan","West Lothian","West Midlands","West Sussex","West Yorkshire","Western Isles","Wiltshire","Wirral","Worcestershire","Wrexham","York"],"United States Minor Outlying Islands (the)":["n/a"],"United States of America (the)":["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],Uruguay:["Artigas","Canelones","Cerro Largo","Colonia","Durazno","Flores","Florida","Lavalleja","Maldonado","Montevideo","Paysandu","Rio Negro","Rivera","Rocha","Salto","San Jose","Soriano","Tacuarembo","Treinta y Tres"],Uzbekistan:["Andijon Viloyati","Buxoro Viloyati","Farg'ona Viloyati","Jizzax Viloyati","Namangan Viloyati","Navoiy Viloyati","Qashqadaryo Viloyati","Qaraqalpog'iston Respublikasi","Samarqand Viloyati","Sirdaryo Viloyati","Surxondaryo Viloyati","Toshkent Shahri","Toshkent Viloyati","Xorazm Viloyati"],Vanuatu:["Malampa","Penama","Sanma","Shefa","Tafea","Torba"],"Venezuela (Bolivarian Republic of)":["Amazonas","Anzoategui","Apure","Aragua","Barinas","Bolivar","Carabobo","Cojedes","Delta Amacuro","Dependencias Federales","Distrito Federal","Falcon","Guarico","Lara","Merida","Miranda","Monagas","Nueva Esparta","Portuguesa","Sucre","Tachira","Trujillo","Vargas","Yaracuy","Zulia"],"Viet Nam":["An Giang","Bac Giang","Bac Kan","Bac Lieu","Bac Ninh","Ba Ria-Vung Tau","Ben Tre","Binh Dinh","Binh Duong","Binh Phuoc","Binh Thuan","Ca Mau","Cao Bang","Dac Lak","Dac Nong","Dien Bien","Dong Nai","Dong Thap","Gia Lai","Ha Giang","Hai Duong","Ha Nam","Ha Tay","Ha Tinh","Hau Giang","Hoa Binh","Hung Yen","Khanh Hoa","Kien Giang","Kon Tum","Lai Chau","Lam Dong","Lang Son","Lao Cai","Long An","Nam Dinh","Nghe An","Ninh Binh","Ninh Thuan","Phu Tho","Phu Yen","Quang Binh","Quang Nam","Quang Ngai","Quang Ninh","Quang Tri","Soc Trang","Son La","Tay Ninh","Thai Binh","Thai Nguyen","Thanh Hoa","Thua Thien-Hue","Tien Giang","Tra Vinh","Tuyen Quang","Vinh Long","Vinh Phuc","Yen Bai","Can Tho","Da Nang","Hai Phong","Hanoi","Ho Chi Minh"],"Virgin Islands (British)":["n/a"],"Virgin Islands (U.S.)":["n/a"],"Wallis and Futuna":["n/a"],"Western Sahara":["n/a"],Yemen:["Abyan","'Adan","Ad Dali'","Al Bayda'","Al Hudaydah","Al Jawf","Al Mahrah","Al Mahwit","'Amran","Dhamar","Hadramawt","Hajjah","Ibb","Lahij","Ma'rib","Sa'dah","San'a'","Shabwah","Ta'izz"],Zambia:["Central","Copperbelt","Eastern","Luapula","Lusaka","Northern","North-Western","Southern","Western"],Zimbabwe:["Bulawayo","Harare","Manicaland","Mashonaland Central","Mashonaland East","Mashonaland West","Masvingo","Matabeleland North","Matabeleland South","Midlands"],"Åland Islands":["n/a"]};let n=e,r,t;if(n===void 0){t=Object.keys(a);let i=a[t[t.length*Math.random()<<0]];return r=i[Math.floor(Math.random()*i.length)],r}else if(n!=null){let i=a[n];try{return r=i[Math.floor(Math.random()*i.length)],r}catch{return"n/a"}}}};var t0=r0;const za=Ef(t0);function i0(){const e=[];let a=0;return n0.map(n=>{a++;const r=Math.floor(Math.random()*7)-3;let t=new xy(a,n.name,n.stadium,n.reputation+r,[],{wins:0,losses:0,draws:0,goalsFor:0,goalsAgainst:0});t.roster=o0(t),e.push(t)}),e}function o0(e){const a=[],n=l0(e.reputation);a.push(n);for(let r=0;r<4;r++){let t=s0(e.reputation);a.push(t)}for(let r=0;r<4;r++){let t=u0(e.reputation);a.push(t)}for(let r=0;r<2;r++){let t=c0(e.reputation);a.push(t)}return a}function l0(e){const a=Math.floor(e**.99),n=dn(a,10),r=to();return new ro(za.firstName("male"),za.lastName(),r,0,0,{goalkeeping:n})}function s0(e){const a=Math.floor(e**.99),n=Math.floor(a/2),r=dn(a,10),t=dn(n,10),i=to();return new ja(za.firstName("male"),za.lastName(),i,"DF",0,0,{attacking:t,defending:r})}function u0(e){const a=Math.floor(e**.95),n=Math.floor(e**.95),r=dn(a,10),t=dn(n,10),i=to();return new ja(za.firstName("male"),za.lastName(),i,"MF",0,0,{attacking:r,defending:t})}function c0(e){const a=Math.floor(e**.99),n=Math.floor(a/2),r=dn(a,10),t=dn(n,10),i=to();return new ja(za.firstName("male"),za.lastName(),i,"FW",0,0,{attacking:r,defending:t})}function dn(e,a){const n=Math.max(1,e-a),r=Math.min(100,e+a);return Math.floor(Math.random()*(r-n+1))+n}function to(){return Math.floor(Math.random()*17)+18}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d0=typeof Object.defineProperty=="function"?Object.defineProperty:null,f0=d0;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h0=f0;function y0(){try{return h0({},"x",{}),!0}catch{return!1}}var m0=y0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v0=Object.defineProperty,p0=v0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ar=Object.prototype,ud=ar.toString,cd=ar.__defineGetter__,dd=ar.__defineSetter__,g0=ar.__lookupGetter__,S0=ar.__lookupSetter__;function A0(e,a,n){var r,t,i,o;if(typeof e!="object"||e===null||ud.call(e)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if(typeof n!="object"||n===null||ud.call(n)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if(t="value"in n,t&&(g0.call(e,a)||S0.call(e,a)?(r=e.__proto__,e.__proto__=ar,delete e[a],e[a]=n.value,e.__proto__=r):e[a]=n.value),i="get"in n,o="set"in n,t&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&cd&&cd.call(e,a,n.get),o&&dd&&dd.call(e,a,n.set),e}var k0=A0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0=m0,C0=p0,M0=k0,fs;w0()?fs=C0:fs=M0;var st=fs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0=st;function T0(e,a,n){E0(e,a,{configurable:!1,enumerable:!1,writable:!1,value:n})}var $0=T0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0=$0,X=N0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0=st;function L0(e,a,n){b0(e,a,{configurable:!1,enumerable:!1,get:n})}var R0=L0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0=R0,io=P0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0=st;function K0(e,a,n,r){B0(e,a,{configurable:!1,enumerable:!1,get:n,set:r})}var D0=K0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0=D0,Fy=I0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _0(e){return typeof e=="number"}var Gy=_0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function O0(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var j0=O0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0=j0,x0=z0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0=x0,G0=F0();function J0(){return G0&&typeof Symbol.toStringTag=="symbol"}var H0=J0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0=H0,Lu=V0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0=Object.prototype.toString,Jy=W0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0=Jy;function Z0(e){return U0.call(e)}var Y0=Z0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0=Object.prototype.hasOwnProperty;function X0(e,a){return e==null?!1:Q0.call(e,a)}var q0=X0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e1=q0,ut=e1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1=typeof Symbol=="function"?Symbol.toStringTag:"",n1=a1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1=ut,gr=n1,Zo=Jy;function t1(e){var a,n,r;if(e==null)return Zo.call(e);n=e[gr],a=r1(e,gr);try{e[gr]=void 0}catch{return Zo.call(e)}return r=Zo.call(e),a?e[gr]=n:delete e[gr],r}var i1=t1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1=Lu,l1=Y0,s1=i1,hs;o1()?hs=s1:hs=l1;var fe=hs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1=u1,Ru=c1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d1=Ru,f1=d1.prototype.toString,h1=f1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1=h1;function m1(e){try{return y1.call(e),!0}catch{return!1}}var v1=m1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1=Lu,g1=fe,S1=Ru,A1=v1,k1=p1();function w1(e){return typeof e=="object"?e instanceof S1?!0:k1?A1(e):g1(e)==="[object Number]":!1}var Hy=w1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1=Gy,M1=Hy;function E1(e){return C1(e)||M1(e)}var T1=E1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vy=X,Pu=T1,$1=Gy,N1=Hy;Vy(Pu,"isPrimitive",$1);Vy(Pu,"isObject",N1);var nr=Pu;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1=nr.isPrimitive;function L1(e){return b1(e)&&e>0}var Wy=L1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1=nr.isObject;function P1(e){return R1(e)&&e.valueOf()>0}var Uy=P1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1=Wy,K1=Uy;function D1(e){return B1(e)||K1(e)}var I1=D1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zy=X,Bu=I1,_1=Wy,O1=Uy;Zy(Bu,"isPrimitive",_1);Zy(Bu,"isObject",O1);var j1=Bu;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1=fe,ys;function x1(e){return z1(e)==="[object Array]"}Array.isArray?ys=Array.isArray:ys=x1;var F1=ys;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G1=F1,oo=G1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J1=oo;function H1(e){return typeof e=="object"&&e!==null&&!J1(e)}var V1=H1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W1=V1,Ku=W1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1=/./,Z1=U1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Y1(e){return typeof e=="boolean"}var Yy=Y1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1=Boolean.prototype.toString,X1=Q1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1=X1;function eS(e){try{return q1.call(e),!0}catch{return!1}}var aS=eS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nS=Lu,rS=fe,tS=aS,iS=nS();function oS(e){return typeof e=="object"?e instanceof Boolean?!0:iS?tS(e):rS(e)==="[object Boolean]":!1}var Qy=oS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lS=Yy,sS=Qy;function uS(e){return lS(e)||sS(e)}var cS=uS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xy=X,Du=cS,dS=Yy,fS=Qy;Xy(Du,"isPrimitive",dS);Xy(Du,"isObject",fS);var qy=Du;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function hS(){return new Function("return this;")()}var yS=hS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mS=typeof self=="object"?self:null,vS=mS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pS=typeof window=="object"?window:null,gS=pS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SS=typeof Xu=="object"?Xu:null,AS=SS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kS=qy.isPrimitive,wS=yS,fd=vS,hd=gS,yd=AS;function CS(e){if(arguments.length){if(!kS(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return wS()}if(fd)return fd;if(hd)return hd;if(yd)return yd;throw new Error("unexpected error. Unable to resolve global object.")}var MS=CS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ES=MS,TS=ES;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $S=TS,md=$S(),NS=md.document&&md.document.childNodes,bS=NS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LS=Int8Array,RS=LS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PS=Z1,BS=bS,KS=RS;function DS(){return typeof PS=="function"||typeof KS=="object"||typeof BS=="function"}var IS=DS;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _S(){return/^\s*function\s*([^(]*)/i}var em=_S;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OS=em,jS=OS(),zS=jS;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xS=X,am=em,FS=zS;xS(am,"REGEXP",FS);var nm=am;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GS=oo;function JS(e){if(typeof e!="function")throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return a;function a(n){var r,t;if(!GS(n)||(r=n.length,r===0))return!1;for(t=0;t<r;t++)if(e(n[t])===!1)return!1;return!0}}var HS=JS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VS=HS,WS=VS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function US(e){return e!==null&&typeof e=="object"}var ZS=US;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YS=X,QS=WS,Iu=ZS,XS=QS(Iu);YS(Iu,"isObjectLikeArray",XS);var qS=Iu;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eA=qS;function aA(e){return eA(e)&&(e._isBuffer||e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e))}var nA=aA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rA=nA,tA=rA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iA=fe,oA=nm.REGEXP,lA=tA;function sA(e){var a,n,r;if(n=iA(e).slice(8,-1),(n==="Object"||n==="Error")&&e.constructor){if(r=e.constructor,typeof r.name=="string")return r.name;if(a=oA.exec(r.toString()),a)return a[1]}return lA(e)?"Buffer":n}var uA=sA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cA=uA,ct=cA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dA=ct;function fA(e){var a;return e===null?"null":(a=typeof e,a==="object"?dA(e).toLowerCase():a)}var hA=fA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yA=ct;function mA(e){return yA(e).toLowerCase()}var vA=mA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pA=IS,gA=hA,SA=vA,AA=pA()?SA:gA,kA=AA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wA=kA;function CA(e){return wA(e)==="function"}var MA=CA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EA=MA,rr=EA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TA=Object.getPrototypeOf,$A=TA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function NA(e){return e.__proto__}var bA=NA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LA=fe,RA=bA;function PA(e){var a=RA(e);return a||a===null?a:LA(e.constructor)==="[object Function]"?e.constructor.prototype:e instanceof Object?Object.prototype:null}var BA=PA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KA=rr,DA=$A,IA=BA,ms;KA(Object.getPrototypeOf)?ms=DA:ms=IA;var _A=ms;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OA=_A;function jA(e){return e==null?null:(e=Object(e),OA(e))}var zA=jA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xA=zA,lo=xA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FA=Ku,vd=rr,GA=lo,li=ut,JA=fe,HA=Object.prototype;function VA(e){var a;for(a in e)if(!li(e,a))return!1;return!0}function WA(e){var a;return FA(e)?(a=GA(e),a?!li(e,"constructor")&&li(a,"constructor")&&vd(a.constructor)&&JA(a.constructor)==="[object Function]"&&li(a,"isPrototypeOf")&&vd(a.isPrototypeOf)&&(a===HA||VA(e)):!0):!1}var UA=WA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZA=UA,rm=ZA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function YA(e){return a;function a(){return e}}var QA=YA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XA=QA,qA=XA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ek(){}var ak=ek;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nk=ak,rk=nk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tk=Math.floor,ik=tk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ok=ik,tr=ok;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lk=tr;function sk(e){return lk(e)===e}var uk=sk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ck=uk,ir=ck;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dk=9007199254740991,fk=dk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hk=ir,yk=fk;function mk(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&hk(e.length)&&e.length>=0&&e.length<=yk}var vk=mk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pk=vk,_u=pk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gk=fe,Sk=typeof Uint32Array=="function";function Ak(e){return Sk&&e instanceof Uint32Array||gk(e)==="[object Uint32Array]"}var kk=Ak;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wk=kk,tm=wk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ck=Number.POSITIVE_INFINITY,Ja=Ck;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mk=Ru,Ek=Mk.NEGATIVE_INFINITY,or=Ek;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tk=Ja,$k=or,Nk=ir;function bk(e){return e<Tk&&e>$k&&Nk(e)}var im=bk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lk=nr.isPrimitive,Rk=im;function Pk(e){return Lk(e)&&Rk(e)}var om=Pk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bk=nr.isObject,Kk=im;function Dk(e){return Bk(e)&&Kk(e.valueOf())}var lm=Dk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ik=om,_k=lm;function Ok(e){return Ik(e)||_k(e)}var jk=Ok;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sm=X,Ou=jk,zk=om,xk=lm;sm(Ou,"isPrimitive",zk);sm(Ou,"isObject",xk);var so=Ou;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fk=so.isPrimitive;function Gk(e){return Fk(e)&&e>0}var um=Gk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jk=so.isObject;function Hk(e){return Jk(e)&&e.valueOf()>0}var cm=Hk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vk=um,Wk=cm;function Uk(e){return Vk(e)||Wk(e)}var Zk=Uk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dm=X,ju=Zk,Yk=um,Qk=cm;dm(ju,"isPrimitive",Yk);dm(ju,"isObject",Qk);var Xk=ju;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qk=9007199254740991,ew=qk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aw=4294967295,zu=aw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nw=typeof Uint32Array=="function"?Uint32Array:null,rw=nw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tw=tm,Yo=zu,pd=rw;function iw(){var e,a;if(typeof pd!="function")return!1;try{a=[1,3.14,-3.14,Yo+1,Yo+2],a=new pd(a),e=tw(a)&&a[0]===1&&a[1]===3&&a[2]===Yo-2&&a[3]===0&&a[4]===1}catch{e=!1}return e}var ow=iw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lw=ow,sw=lw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uw=typeof Uint32Array=="function"?Uint32Array:void 0,cw=uw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dw(){throw new Error("not implemented")}var fw=dw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hw=sw,yw=cw,mw=fw,vs;hw()?vs=yw:vs=mw;var Ha=vs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vw=Ja;function pw(e){return e===0&&1/e===vw}var gw=pw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sw=gw,Aw=Sw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kw(e){return e!==e}var ww=kw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cw=ww,pa=Cw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gd=Aw,Qo=pa,Mw=or,Dt=Ja;function Ew(e,a){var n,r,t,i;if(n=arguments.length,n===2)return Qo(e)||Qo(a)?NaN:e===Dt||a===Dt?Dt:e===a&&e===0?gd(e)?e:a:e>a?e:a;for(r=Mw,i=0;i<n;i++){if(t=arguments[i],Qo(t)||t===Dt)return t;(t>r||t===r&&t===0&&gd(t))&&(r=t)}return r}var Tw=Ew;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $w=Tw,Nw=$w;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sd=65535;function bw(e,a){var n,r,t,i,o,l;return e>>>=0,a>>>=0,t=e>>>16>>>0,i=a>>>16>>>0,o=(e&Sd)>>>0,l=(a&Sd)>>>0,n=o*l>>>0,r=t*l+o*i<<16>>>0,n+r>>>0}var Lw=bw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rw=Lw,Pw=Rw;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Bw(e,a){return e[a]}var Kw=Bw;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Dw(e,a){return e.get(a)}var Iw=Dw;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _w(e,a,n){e[a]=n}var Ow=_w;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jw(e,a,n){e.set(n,a)}var zw=jw;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xw=Kw,Fw=Iw,Gw=Ow,Jw=zw;function Hw(e){var a=!!(e.get&&e.set);return{data:e,accessors:a,getter:a?Fw:xw,setter:a?Jw:Gw}}var Vw=Hw;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ww=Vw,uo=Ww;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Uw(e,a,n,r,t,i,o){var l,s,u,c,d,f,m;for(l=a.data,s=t.data,c=a.getter,u=t.setter,d=r,f=o,m=0;m<e;m++)u(s,f,c(l,d)),d+=n,f+=i;return a}var fm=Uw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ad=uo,Zw=fm,Xo=8;function Yw(e,a,n,r,t){var i,o,l,s,u,c;if(e<=0)return r;if(l=Ad(a),s=Ad(r),l.accessors||s.accessors)return n<0?i=(1-e)*n:i=0,t<0?o=(1-e)*t:o=0,Zw(e,l,n,i,s,t,o),s.data;if(n===1&&t===1){if(u=e%Xo,u>0)for(c=0;c<u;c++)r[c]=a[c];if(e<Xo)return r;for(c=u;c<e;c+=Xo)r[c]=a[c],r[c+1]=a[c+1],r[c+2]=a[c+2],r[c+3]=a[c+3],r[c+4]=a[c+4],r[c+5]=a[c+5],r[c+6]=a[c+6],r[c+7]=a[c+7];return r}for(n<0?i=(1-e)*n:i=0,t<0?o=(1-e)*t:o=0,c=0;c<e;c++)r[o]=a[i],i+=n,o+=t;return r}var Qw=Yw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kd=uo,Xw=fm,Sr=8;function qw(e,a,n,r,t,i,o){var l,s,u,c,d,f;if(e<=0)return t;if(u=kd(a),c=kd(t),u.accessors||c.accessors)return Xw(e,u,n,r,c,i,o),c.data;if(l=r,s=o,n===1&&i===1){if(d=e%Sr,d>0)for(f=0;f<d;f++)t[s]=a[l],l+=n,s+=i;if(e<Sr)return t;for(f=d;f<e;f+=Sr)t[s]=a[l],t[s+1]=a[l+1],t[s+2]=a[l+2],t[s+3]=a[l+3],t[s+4]=a[l+4],t[s+5]=a[l+5],t[s+6]=a[l+6],t[s+7]=a[l+7],l+=Sr,s+=Sr;return t}for(f=0;f<e;f++)t[s]=a[l],l+=n,s+=i;return t}var e2=qw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a2=X,hm=Qw,n2=e2;a2(hm,"ndarray",n2);var r2=hm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t2(){}var i2=t2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o2=i2;function l2(){return o2.name==="foo"}var s2=l2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u2=s2,c2=u2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d2=rr,f2=c2,h2=nm.REGEXP,y2=f2();function m2(e){if(d2(e)===!1)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return y2?e.name:h2.exec(e.toString())[1]}var v2=m2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p2=v2,g2=p2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S2=fe,A2=typeof Float64Array=="function";function k2(e){return A2&&e instanceof Float64Array||S2(e)==="[object Float64Array]"}var w2=k2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C2=w2,M2=C2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E2=typeof Float64Array=="function"?Float64Array:null,T2=E2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $2=M2,wd=T2;function N2(){var e,a;if(typeof wd!="function")return!1;try{a=new wd([1,3.14,-3.14,NaN]),e=$2(a)&&a[0]===1&&a[1]===3.14&&a[2]===-3.14&&a[3]!==a[3]}catch{e=!1}return e}var b2=N2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L2=b2,ym=L2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R2=typeof Float64Array=="function"?Float64Array:void 0,P2=R2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function B2(){throw new Error("not implemented")}var K2=B2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D2=ym,I2=P2,_2=K2,ps;D2()?ps=I2:ps=_2;var na=ps;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O2=fe,j2=typeof Int8Array=="function";function z2(e){return j2&&e instanceof Int8Array||O2(e)==="[object Int8Array]"}var x2=z2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F2=x2,G2=F2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J2=127,H2=J2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V2=-128,W2=V2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U2=typeof Int8Array=="function"?Int8Array:null,Z2=U2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y2=G2,Q2=H2,X2=W2,Cd=Z2;function q2(){var e,a;if(typeof Cd!="function")return!1;try{a=new Cd([1,3.14,-3.14,Q2+1]),e=Y2(a)&&a[0]===1&&a[1]===3&&a[2]===-3&&a[3]===X2}catch{e=!1}return e}var eC=q2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aC=eC,nC=aC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rC=typeof Int8Array=="function"?Int8Array:void 0,tC=rC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function iC(){throw new Error("not implemented")}var oC=iC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lC=nC,sC=tC,uC=oC,gs;lC()?gs=sC:gs=uC;var mm=gs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cC=fe,dC=typeof Uint8Array=="function";function fC(e){return dC&&e instanceof Uint8Array||cC(e)==="[object Uint8Array]"}var hC=fC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yC=hC,mC=yC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vC=255,pC=vC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gC=typeof Uint8Array=="function"?Uint8Array:null,SC=gC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AC=mC,qo=pC,Md=SC;function kC(){var e,a;if(typeof Md!="function")return!1;try{a=[1,3.14,-3.14,qo+1,qo+2],a=new Md(a),e=AC(a)&&a[0]===1&&a[1]===3&&a[2]===qo-2&&a[3]===0&&a[4]===1}catch{e=!1}return e}var wC=kC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CC=wC,MC=CC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EC=typeof Uint8Array=="function"?Uint8Array:void 0,TC=EC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $C(){throw new Error("not implemented")}var NC=$C;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bC=MC,LC=TC,RC=NC,Ss;bC()?Ss=LC:Ss=RC;var xu=Ss;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PC=fe,BC=typeof Uint8ClampedArray=="function";function KC(e){return BC&&e instanceof Uint8ClampedArray||PC(e)==="[object Uint8ClampedArray]"}var DC=KC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IC=DC,_C=IC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OC=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null,jC=OC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zC=_C,Ed=jC;function xC(){var e,a;if(typeof Ed!="function")return!1;try{a=new Ed([-1,0,1,3.14,4.99,255,256]),e=zC(a)&&a[0]===0&&a[1]===0&&a[2]===1&&a[3]===3&&a[4]===5&&a[5]===255&&a[6]===255}catch{e=!1}return e}var FC=xC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GC=FC,JC=GC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HC=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0,VC=HC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function WC(){throw new Error("not implemented")}var UC=WC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZC=JC,YC=VC,QC=UC,As;ZC()?As=YC:As=QC;var vm=As;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XC=fe,qC=typeof Int16Array=="function";function eM(e){return qC&&e instanceof Int16Array||XC(e)==="[object Int16Array]"}var aM=eM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nM=aM,rM=nM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tM=32767,iM=tM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oM=-32768,lM=oM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sM=typeof Int16Array=="function"?Int16Array:null,uM=sM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cM=rM,dM=iM,fM=lM,Td=uM;function hM(){var e,a;if(typeof Td!="function")return!1;try{a=new Td([1,3.14,-3.14,dM+1]),e=cM(a)&&a[0]===1&&a[1]===3&&a[2]===-3&&a[3]===fM}catch{e=!1}return e}var yM=hM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mM=yM,vM=mM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pM=typeof Int16Array=="function"?Int16Array:void 0,gM=pM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function SM(){throw new Error("not implemented")}var AM=SM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kM=vM,wM=gM,CM=AM,ks;kM()?ks=wM:ks=CM;var pm=ks;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MM=fe,EM=typeof Uint16Array=="function";function TM(e){return EM&&e instanceof Uint16Array||MM(e)==="[object Uint16Array]"}var $M=TM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NM=$M,bM=NM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LM=65535,RM=LM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PM=typeof Uint16Array=="function"?Uint16Array:null,BM=PM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KM=bM,el=RM,$d=BM;function DM(){var e,a;if(typeof $d!="function")return!1;try{a=[1,3.14,-3.14,el+1,el+2],a=new $d(a),e=KM(a)&&a[0]===1&&a[1]===3&&a[2]===el-2&&a[3]===0&&a[4]===1}catch{e=!1}return e}var IM=DM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _M=IM,OM=_M;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jM=typeof Uint16Array=="function"?Uint16Array:void 0,zM=jM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function xM(){throw new Error("not implemented")}var FM=xM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GM=OM,JM=zM,HM=FM,ws;GM()?ws=JM:ws=HM;var Fu=ws;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VM=fe,WM=typeof Int32Array=="function";function UM(e){return WM&&e instanceof Int32Array||VM(e)==="[object Int32Array]"}var ZM=UM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YM=ZM,QM=YM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XM=2147483647,qM=XM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eE=-2147483648,aE=eE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nE=typeof Int32Array=="function"?Int32Array:null,rE=nE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tE=QM,iE=qM,oE=aE,Nd=rE;function lE(){var e,a;if(typeof Nd!="function")return!1;try{a=new Nd([1,3.14,-3.14,iE+1]),e=tE(a)&&a[0]===1&&a[1]===3&&a[2]===-3&&a[3]===oE}catch{e=!1}return e}var sE=lE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uE=sE,cE=uE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dE=typeof Int32Array=="function"?Int32Array:void 0,fE=dE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function hE(){throw new Error("not implemented")}var yE=hE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mE=cE,vE=fE,pE=yE,Cs;mE()?Cs=vE:Cs=pE;var gm=Cs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gE=fe,SE=typeof Float32Array=="function";function AE(e){return SE&&e instanceof Float32Array||gE(e)==="[object Float32Array]"}var kE=AE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wE=kE,CE=wE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ME=typeof Float32Array=="function"?Float32Array:null,EE=ME;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TE=CE,$E=Ja,bd=EE;function NE(){var e,a;if(typeof bd!="function")return!1;try{a=new bd([1,3.14,-3.14,5e40]),e=TE(a)&&a[0]===1&&a[1]===3.140000104904175&&a[2]===-3.140000104904175&&a[3]===$E}catch{e=!1}return e}var bE=NE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LE=bE,RE=LE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PE=typeof Float32Array=="function"?Float32Array:void 0,BE=PE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function KE(){throw new Error("not implemented")}var DE=KE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IE=RE,_E=BE,OE=DE,Ms;IE()?Ms=_E:Ms=OE;var dt=Ms;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jE=mm,zE=xu,xE=vm,FE=pm,GE=Fu,JE=gm,HE=Ha,VE=dt,WE=na,UE=[WE,VE,JE,HE,FE,GE,jE,zE,xE],ZE=UE;const YE=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QE=ct,XE=g2,Sm=lo,qE=ym,eT=na,Ld=ZE,Rd=YE,si=qE()?Sm(eT):Am;si=XE(si)==="TypedArray"?si:Am;function Am(){}function aT(e){var a,n;if(typeof e!="object"||e===null)return!1;if(e instanceof si)return!0;for(n=0;n<Ld.length;n++)if(e instanceof Ld[n])return!0;for(;e;){for(a=QE(e),n=0;n<Rd.length;n++)if(Rd[n]===a)return!0;e=Sm(e)}return!1}var nT=aT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rT=nT,tT=rT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iT=so.isPrimitive;function oT(e){return iT(e)&&e>=0}var km=oT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lT=so.isObject;function sT(e){return lT(e)&&e.valueOf()>=0}var wm=sT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uT=km,cT=wm;function dT(e){return uT(e)||cT(e)}var fT=dT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cm=X,Gu=fT,hT=km,yT=wm;Cm(Gu,"isPrimitive",hT);Cm(Gu,"isObject",yT);var Mm=Gu;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mT=4294967295,vT=mT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pT=ir,gT=vT;function ST(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&pT(e.length)&&e.length>=0&&e.length<=gT}var AT=ST;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kT=AT,lr=kT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wT=fe,CT=typeof ArrayBuffer=="function";function MT(e){return CT&&e instanceof ArrayBuffer||wT(e)==="[object ArrayBuffer]"}var ET=MT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TT=ET,Em=TT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $T(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var NT=$T;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function bT(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}var LT=bT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pd=nr.isPrimitive,Bd=st,ft=X,RT=NT,PT=LT;function yn(e,a){if(!(this instanceof yn))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Pd(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!Pd(a))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+a+"`.");return Bd(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Bd(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:a}),this}ft(yn,"BYTES_PER_ELEMENT",8);ft(yn.prototype,"BYTES_PER_ELEMENT",8);ft(yn.prototype,"byteLength",16);ft(yn.prototype,"toString",RT);ft(yn.prototype,"toJSON",PT);var BT=yn;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KT=BT,Tm=KT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DT=typeof Math.fround=="function"?Math.fround:null,IT=DT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _T=dt,Kd=new _T(1);function OT(e){return Kd[0]=e,Kd[0]}var jT=OT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dd=IT,zT=jT,Es;typeof Dd=="function"?Es=Dd:Es=zT;var xT=Es;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function FT(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var GT=FT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function JT(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}var HT=JT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Id=nr.isPrimitive,_d=st,ht=X,Od=xT,VT=GT,WT=HT;function mn(e,a){if(!(this instanceof mn))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Id(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!Id(a))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+a+"`.");return _d(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Od(e)}),_d(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Od(a)}),this}ht(mn,"BYTES_PER_ELEMENT",4);ht(mn.prototype,"BYTES_PER_ELEMENT",4);ht(mn.prototype,"byteLength",8);ht(mn.prototype,"toString",VT);ht(mn.prototype,"toJSON",WT);var UT=mn;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZT=UT,$m=ZT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YT=Tm,QT=$m;function XT(e){return e instanceof YT||e instanceof QT?!0:typeof e=="object"&&e!==null&&typeof e.re=="number"&&typeof e.im=="number"}var qT=XT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e$=qT,Va=e$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a$=ir;function n$(e){return a$(e/2)}var r$=n$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t$=r$,Nm=t$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i$=ut;function o$(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"&&i$(Symbol,"iterator")&&typeof Symbol.iterator=="symbol"}var l$=o$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s$=l$,Ju=s$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u$=Ju,c$=u$()?Symbol.iterator:null,d$=c$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f$=d$,bm=f$;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function h$(e){return e.re}var y$=h$;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m$=y$,co=m$;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function v$(e){return e.im}var p$=v$;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g$=p$,fo=g$;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S$=dt;function A$(e,a){return new S$(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*a,2*(e.length-a))}var k$=A$;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w$=k$,Hu=w$;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C$=na;function M$(e,a){return new C$(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*a,2*(e.length-a))}var E$=M$;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T$=E$,Vu=T$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $$=lr,N$=Va,b$=co,L$=fo;function R$(e){var a,n,r;for(a=[];n=e.next(),!n.done;)if(r=n.value,$$(r)&&r.length>=2)a.push(r[0],r[1]);else if(N$(r))a.push(b$(r),L$(r));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+r+"`.");return a}var P$=R$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B$=lr,K$=Va,D$=co,I$=fo;function _$(e,a,n){var r,t,i,o;for(r=[],o=-1;t=e.next(),!t.done;)if(o+=1,i=a.call(n,t.value,o),B$(i)&&i.length>=2)r.push(i[0],i[1]);else if(K$(i))r.push(D$(i),I$(i));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return r}var O$=_$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j$=Va,z$=co,x$=fo;function F$(e,a){var n,r,t,i;for(n=a.length,i=0,t=0;t<n;t++){if(r=a[t],!j$(r))return null;e[i]=z$(r),e[i+1]=x$(r),i+=2}return e}var G$=F$,_r=Mm.isPrimitive,jd=lr,Wu=_u,zd=Em,Lm=Ku,J$=oo,en=rr,jn=Va,Bi=Nm,al=ir,H$=Ju,Un=bm,ke=X,ho=io,De=dt,Rm=$m,Ki=co,Di=fo,V$=Hu,W$=Vu,U$=uo,Pm=P$,Z$=O$,Y$=G$,$e=De.BYTES_PER_ELEMENT*2,Bm=H$();function Zn(e){return e instanceof G||typeof e=="object"&&e!==null&&(e.constructor.name==="Complex64Array"||e.constructor.name==="Complex128Array")&&typeof e._length=="number"&&typeof e._buffer=="object"}function Km(e){return e===G||e.name==="Complex128Array"}function Q$(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex64Array"&&e.BYTES_PER_ELEMENT===$e}function X$(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex128Array"&&e.BYTES_PER_ELEMENT===$e*2}function G(){var e,a,n,r;if(a=arguments.length,!(this instanceof G))return a===0?new G:a===1?new G(arguments[0]):a===2?new G(arguments[0],arguments[1]):new G(arguments[0],arguments[1],arguments[2]);if(a===0)n=new De(0);else if(a===1)if(_r(arguments[0]))n=new De(arguments[0]*2);else if(Wu(arguments[0]))if(n=arguments[0],r=n.length,r&&J$(n)&&jn(n[0])){if(n=Y$(new De(r*2),n),n===null){if(!Bi(r))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+r+"`.");n=new De(arguments[0])}}else{if(Q$(n))n=V$(n,0);else if(X$(n))n=W$(n,0);else if(!Bi(r))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+r+"`.");n=new De(n)}else if(zd(arguments[0])){if(n=arguments[0],!al(n.byteLength/$e))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+$e+". Byte length: `"+n.byteLength+"`.");n=new De(n)}else if(Lm(arguments[0])){if(n=arguments[0],Bm===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+n+"`.");if(!en(n[Un]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+n+"`.");if(n=n[Un](),!en(n.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(n=Pm(n),n instanceof Error)throw n;n=new De(n)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(n=arguments[0],!zd(n))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+n+"`.");if(e=arguments[1],!_r(e))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!al(e/$e))throw new RangeError("invalid argument. Byte offset must be a multiple of "+$e+". Value: `"+e+"`.");if(a===2){if(r=n.byteLength-e,!al(r/$e))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+$e+". View byte length: `"+r+"`.");n=new De(n,e)}else{if(r=arguments[2],!_r(r))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+r+"`.");if(r*$e>n.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+r*$e+"`.");n=new De(n,e,r*2)}}return ke(this,"_buffer",n),ke(this,"_length",n.length/2),this}ke(G,"BYTES_PER_ELEMENT",$e);ke(G,"name","Complex64Array");ke(G,"from",function(a){var n,r,t,i,o,l,s,u,c,d,f;if(!en(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Km(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(r=arguments.length,r>1){if(t=arguments[1],!en(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");r>2&&(n=arguments[2])}if(Zn(a)){if(s=a.length,t){for(i=new this(s),o=i._buffer,f=0,d=0;d<s;d++){if(c=t.call(n,a.get(d),d),jn(c))o[f]=Ki(c),o[f+1]=Di(c);else if(jd(c)&&c.length>=2)o[f]=c[0],o[f+1]=c[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+c+"`.");f+=2}return i}return new this(a)}if(Wu(a)){if(t){for(s=a.length,l=U$(a),d=0;d<s;d++)if(!jn(l.getter(a,d))){u=!0;break}if(u){if(!Bi(s))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+s+"`.");for(i=new this(s/2),o=i._buffer,d=0;d<s;d++)o[d]=t.call(n,l.getter(a,d),d);return i}for(i=new this(s),o=i._buffer,f=0,d=0;d<s;d++){if(c=t.call(n,l.getter(a,d),d),jn(c))o[f]=Ki(c),o[f+1]=Di(c);else if(jd(c)&&c.length>=2)o[f]=c[0],o[f+1]=c[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+c+"`.");f+=2}return i}return new this(a)}if(Lm(a)&&Bm&&en(a[Un])){if(o=a[Un](),!en(o.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(t?l=Z$(o,t,n):l=Pm(o),l instanceof Error)throw l;for(s=l.length/2,i=new this(s),o=i._buffer,d=0;d<s;d++)o[d]=l[d];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+a+"`.")});ke(G,"of",function(){var a,n;if(!en(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Km(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(a=[],n=0;n<arguments.length;n++)a.push(arguments[n]);return new this(a)});ho(G.prototype,"buffer",function(){return this._buffer.buffer});ho(G.prototype,"byteLength",function(){return this._buffer.byteLength});ho(G.prototype,"byteOffset",function(){return this._buffer.byteOffset});ke(G.prototype,"BYTES_PER_ELEMENT",G.BYTES_PER_ELEMENT);ke(G.prototype,"copyWithin",function(a,n){if(!Zn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(a*2,n*2):this._buffer.copyWithin(a*2,n*2,arguments[2]*2),this});ke(G.prototype,"entries",function(){var a,n,r,t,i,o,l;if(!Zn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return n=this,a=this._buffer,t=this._length,o=-1,l=-2,r={},ke(r,"next",s),ke(r,"return",u),Un&&ke(r,Un,c),r;function s(){var d;return o+=1,i||o>=t?{done:!0}:(l+=2,d=new Rm(a[l],a[l+1]),{value:[o,d],done:!1})}function u(d){return i=!0,arguments.length?{value:d,done:!0}:{done:!0}}function c(){return n.entries()}});ke(G.prototype,"get",function(a){var n;if(!Zn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!_r(a))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+a+"`.");if(!(a>=this._length))return n=this._buffer,a*=2,new Rm(n[a],n[a+1])});ho(G.prototype,"length",function(){return this._length});ke(G.prototype,"set",function(a){var n,r,t,i,o,l,s,u,c;if(!Zn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=this._buffer,arguments.length>1){if(r=arguments[1],!_r(r))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+r+"`.")}else r=0;if(jn(a)){if(r>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+r+"`.");r*=2,t[r]=Ki(a),t[r+1]=Di(a);return}if(Zn(a)){if(l=a._length,r+l>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=a._buffer,c=t.byteOffset+r*$e,n.buffer===t.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(i=new De(n.length),u=0;u<n.length;u++)i[u]=n[u];n=i}for(r*=2,c=0,u=0;u<l;u++)t[r]=n[c],t[r+1]=n[c+1],r+=2,c+=2;return}if(Wu(a)){for(l=a.length,u=0;u<l;u++)if(!jn(a[u])){o=!0;break}if(o){if(!Bi(l))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+l+"`.");if(r+l/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=a,c=t.byteOffset+r*$e,n.buffer===t.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(i=new De(l),u=0;u<l;u++)i[u]=n[u];n=i}for(r*=2,l/=2,c=0,u=0;u<l;u++)t[r]=n[c],t[r+1]=n[c+1],r+=2,c+=2;return}if(r+l>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(r*=2,u=0;u<l;u++)s=a[u],t[r]=Ki(s),t[r+1]=Di(s),r+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+a+"`.")});var q$=G;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eN=q$,Dm=eN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function aN(e){return e.re}var nN=aN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rN=nN,yo=rN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function tN(e){return e.im}var iN=tN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oN=iN,mo=oN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lN=lr,sN=Va,uN=yo,cN=mo;function dN(e){var a,n,r;for(a=[];n=e.next(),!n.done;)if(r=n.value,lN(r)&&r.length>=2)a.push(r[0],r[1]);else if(sN(r))a.push(uN(r),cN(r));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+r+"`.");return a}var fN=dN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hN=lr,yN=Va,mN=yo,vN=mo;function pN(e,a,n){var r,t,i,o;for(r=[],o=-1;t=e.next(),!t.done;)if(o+=1,i=a.call(n,t.value,o),hN(i)&&i.length>=2)r.push(i[0],i[1]);else if(yN(i))r.push(mN(i),vN(i));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return r}var gN=pN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SN=Va,AN=yo,kN=mo;function wN(e,a){var n,r,t,i;for(n=a.length,i=0,t=0;t<n;t++){if(r=a[t],!SN(r))return null;e[i]=AN(r),e[i+1]=kN(r),i+=2}return e}var CN=wN,Or=Mm.isPrimitive,xd=lr,Uu=_u,Fd=Em,Im=Ku,MN=oo,an=rr,zn=Va,Ii=Nm,nl=ir,EN=Ju,Yn=bm,we=X,vo=io,Ie=na,_m=Tm,_i=yo,Oi=mo,TN=Hu,$N=Vu,NN=uo,Om=fN,bN=gN,LN=CN,Ne=Ie.BYTES_PER_ELEMENT*2,jm=EN();function Qn(e){return e instanceof J||typeof e=="object"&&e!==null&&(e.constructor.name==="Complex64Array"||e.constructor.name==="Complex128Array")&&typeof e._length=="number"&&typeof e._buffer=="object"}function zm(e){return e===J||e.name==="Complex64Array"}function RN(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex64Array"&&e.BYTES_PER_ELEMENT===Ne/2}function PN(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex128Array"&&e.BYTES_PER_ELEMENT===Ne}function J(){var e,a,n,r;if(a=arguments.length,!(this instanceof J))return a===0?new J:a===1?new J(arguments[0]):a===2?new J(arguments[0],arguments[1]):new J(arguments[0],arguments[1],arguments[2]);if(a===0)n=new Ie(0);else if(a===1)if(Or(arguments[0]))n=new Ie(arguments[0]*2);else if(Uu(arguments[0]))if(n=arguments[0],r=n.length,r&&MN(n)&&zn(n[0])){if(n=LN(new Ie(r*2),n),n===null){if(!Ii(r))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+r+"`.");n=new Ie(arguments[0])}}else{if(RN(n))n=TN(n,0);else if(PN(n))n=$N(n,0);else if(!Ii(r))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+r+"`.");n=new Ie(n)}else if(Fd(arguments[0])){if(n=arguments[0],!nl(n.byteLength/Ne))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Ne+". Byte length: `"+n.byteLength+"`.");n=new Ie(n)}else if(Im(arguments[0])){if(n=arguments[0],jm===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+n+"`.");if(!an(n[Yn]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+n+"`.");if(n=n[Yn](),!an(n.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(n=Om(n),n instanceof Error)throw n;n=new Ie(n)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(n=arguments[0],!Fd(n))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+n+"`.");if(e=arguments[1],!Or(e))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!nl(e/Ne))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Ne+". Value: `"+e+"`.");if(a===2){if(r=n.byteLength-e,!nl(r/Ne))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Ne+". View byte length: `"+r+"`.");n=new Ie(n,e)}else{if(r=arguments[2],!Or(r))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+r+"`.");if(r*Ne>n.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+r*Ne+"`.");n=new Ie(n,e,r*2)}}return we(this,"_buffer",n),we(this,"_length",n.length/2),this}we(J,"BYTES_PER_ELEMENT",Ne);we(J,"name","Complex128Array");we(J,"from",function(a){var n,r,t,i,o,l,s,u,c,d,f;if(!an(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zm(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(r=arguments.length,r>1){if(t=arguments[1],!an(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");r>2&&(n=arguments[2])}if(Qn(a)){if(s=a.length,t){for(i=new this(s),o=i._buffer,f=0,d=0;d<s;d++){if(c=t.call(n,a.get(d),d),zn(c))o[f]=_i(c),o[f+1]=Oi(c);else if(xd(c)&&c.length>=2)o[f]=c[0],o[f+1]=c[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+c+"`.");f+=2}return i}return new this(a)}if(Uu(a)){if(t){for(s=a.length,l=NN(a),d=0;d<s;d++)if(!zn(l.getter(a,d))){u=!0;break}if(u){if(!Ii(s))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+s+"`.");for(i=new this(s/2),o=i._buffer,d=0;d<s;d++)o[d]=t.call(n,l.getter(a,d),d);return i}for(i=new this(s),o=i._buffer,f=0,d=0;d<s;d++){if(c=t.call(n,l.getter(a,d),d),zn(c))o[f]=_i(c),o[f+1]=Oi(c);else if(xd(c)&&c.length>=2)o[f]=c[0],o[f+1]=c[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+c+"`.");f+=2}return i}return new this(a)}if(Im(a)&&jm&&an(a[Yn])){if(o=a[Yn](),!an(o.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(t?l=bN(o,t,n):l=Om(o),l instanceof Error)throw l;for(s=l.length/2,i=new this(s),o=i._buffer,d=0;d<s;d++)o[d]=l[d];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+a+"`.")});we(J,"of",function(){var a,n;if(!an(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zm(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(a=[],n=0;n<arguments.length;n++)a.push(arguments[n]);return new this(a)});vo(J.prototype,"buffer",function(){return this._buffer.buffer});vo(J.prototype,"byteLength",function(){return this._buffer.byteLength});vo(J.prototype,"byteOffset",function(){return this._buffer.byteOffset});we(J.prototype,"BYTES_PER_ELEMENT",J.BYTES_PER_ELEMENT);we(J.prototype,"copyWithin",function(a,n){if(!Qn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(a*2,n*2):this._buffer.copyWithin(a*2,n*2,arguments[2]*2),this});we(J.prototype,"entries",function(){var a,n,r,t,i,o,l;if(!Qn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return n=this,a=this._buffer,t=this._length,o=-1,l=-2,r={},we(r,"next",s),we(r,"return",u),Yn&&we(r,Yn,c),r;function s(){var d;return o+=1,i||o>=t?{done:!0}:(l+=2,d=new _m(a[l],a[l+1]),{value:[o,d],done:!1})}function u(d){return i=!0,arguments.length?{value:d,done:!0}:{done:!0}}function c(){return n.entries()}});we(J.prototype,"get",function(a){var n;if(!Qn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Or(a))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+a+"`.");if(!(a>=this._length))return n=this._buffer,a*=2,new _m(n[a],n[a+1])});vo(J.prototype,"length",function(){return this._length});we(J.prototype,"set",function(a){var n,r,t,i,o,l,s,u,c;if(!Qn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=this._buffer,arguments.length>1){if(r=arguments[1],!Or(r))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+r+"`.")}else r=0;if(zn(a)){if(r>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+r+"`.");r*=2,t[r]=_i(a),t[r+1]=Oi(a);return}if(Qn(a)){if(l=a._length,r+l>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=a._buffer,c=t.byteOffset+r*Ne,n.buffer===t.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(i=new Ie(n.length),u=0;u<n.length;u++)i[u]=n[u];n=i}for(r*=2,c=0,u=0;u<l;u++)t[r]=n[c],t[r+1]=n[c+1],r+=2,c+=2;return}if(Uu(a)){for(l=a.length,u=0;u<l;u++)if(!zn(a[u])){o=!0;break}if(o){if(!Ii(l))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+l+"`.");if(r+l/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=a,c=t.byteOffset+r*Ne,n.buffer===t.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(i=new Ie(l),u=0;u<l;u++)i[u]=n[u];n=i}for(r*=2,l/=2,c=0,u=0;u<l;u++)t[r]=n[c],t[r+1]=n[c+1],r+=2,c+=2;return}if(r+l>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(r*=2,u=0;u<l;u++)s=a[u],t[r]=_i(s),t[r+1]=Oi(s),r+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+a+"`.")});var BN=J;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KN=BN,xm=KN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DN=Dm,IN=xm,_N=[IN,DN],ON=_N;const jN=["Complex64Array","Complex128Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zN=ct,xN=lo,Gd=ON,Jd=jN;function FN(e){var a,n;if(typeof e!="object"||e===null)return!1;for(n=0;n<Gd.length;n++)if(e instanceof Gd[n])return!0;for(;e;){for(a=zN(e),n=0;n<Jd.length;n++)if(Jd[n]===a)return!0;e=xN(e)}return!1}var GN=FN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JN=GN,HN=JN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function VN(e,a){if(typeof a!="function")throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+a+"`.");return e instanceof a}var WN=VN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UN=WN,ZN=UN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YN=mm,QN=xu,XN=vm,qN=pm,e3=Fu,a3=gm,n3=Ha,r3=dt,t3=na,i3=Dm,o3=xm,l3=[[t3,"Float64Array"],[r3,"Float32Array"],[a3,"Int32Array"],[n3,"Uint32Array"],[qN,"Int16Array"],[e3,"Uint16Array"],[YN,"Int8Array"],[QN,"Uint8Array"],[XN,"Uint8ClampedArray"],[i3,"Complex64Array"],[o3,"Complex128Array"]],s3=l3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u3=ZN,c3=ct,d3=lo,gn=s3;function f3(e){var a,n;for(n=0;n<gn.length;n++)if(u3(e,gn[n][0]))return gn[n][1];for(;e;){for(a=c3(e),n=0;n<gn.length;n++)if(a===gn[n][1])return gn[n][1];e=d3(e)}}var h3=f3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y3=tT,m3=HN,v3=Hu,p3=Vu,g3=h3;function S3(e){var a,n,r;if(y3(e))a=e;else if(m3(e))e.BYTES_PER_ELEMENT===8?a=v3(e,0):a=p3(e,0);else throw new TypeError("invalid argument. Must provide a typed array. Value: `"+e+"`.");for(n={type:g3(e),data:[]},r=0;r<a.length;r++)n.data.push(a[r]);return n}var A3=S3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k3=A3,Fm=k3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w3=zu,C3=tr,M3=w3-1;function E3(){var e=C3(1+M3*Math.random());return e>>>0}var Gm=E3,ra=X,Sa=io,Hd=Fy,rl=ut,T3=rm,$3=_u,Vd=tm,N3=qy.isPrimitive,Wd=Xk.isPrimitive,Jm=ew,Hm=zu,pe=Ha,b3=Nw,Ts=Pw,Sn=r2,L3=Fm,Ud=Gm,Z=624,tl=397,Zd=Hm>>>0,R3=19650218,il=2147483648,ol=2147483647,P3=1812433253,B3=1664525,K3=1566083941,D3=2636928640,I3=4022730752,_3=2567483615,ll=[0,_3>>>0],Vm=1/(Jm+1),O3=67108864,j3=2147483648,sl=1,z3=Jm*Vm,ji=1,zi=3,Ca=2,Ma=Z+3,ge=Z+5,jr=Z+6;function Yd(e,a){var n;return a?n="option":n="argument",e.length<jr+1?new RangeError("invalid "+n+". `state` array has insufficient length."):e[0]!==ji?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: "+ji+". Actual: "+e[0]+"."):e[1]!==zi?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: "+zi+". Actual: "+e[1]+"."):e[Ca]!==Z?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+Z+". Actual: "+e[Ca]+"."):e[Ma]!==1?new RangeError("invalid "+n+". `state` array has an incompatible section length. Expected: "+1 .toString()+". Actual: "+e[Ma]+"."):e[ge]!==e.length-jr?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(e.length-jr)+". Actual: "+e[ge]+"."):null}function Qd(e,a,n){var r;for(e[0]=n>>>0,r=1;r<a;r++)n=e[r-1]>>>0,n=(n^n>>>30)>>>0,e[r]=Ts(n,P3)+r>>>0;return e}function x3(e,a,n,r){var t,i,o,l;for(i=1,o=0,l=b3(a,r);l>0;l--)t=e[i-1]>>>0,t=(t^t>>>30)>>>0,t=Ts(t,B3)>>>0,e[i]=(e[i]>>>0^t)+n[o]+o>>>0,i+=1,o+=1,i>=a&&(e[0]=e[a-1],i=1),o>=r&&(o=0);for(l=a-1;l>0;l--)t=e[i-1]>>>0,t=(t^t>>>30)>>>0,t=Ts(t,K3)>>>0,e[i]=(e[i]>>>0^t)-i>>>0,i+=1,i>=a&&(e[0]=e[a-1],i=1);return e[0]=j3,e}function F3(e){var a,n,r,t;for(t=Z-tl,n=0;n<t;n++)a=e[n]&il|e[n+1]&ol,e[n]=e[n+tl]^a>>>1^ll[a&sl];for(r=Z-1;n<r;n++)a=e[n]&il|e[n+1]&ol,e[n]=e[n-t]^a>>>1^ll[a&sl];return a=e[r]&il|e[0]&ol,e[r]=e[tl-1]^a>>>1^ll[a&sl],e}function G3(e){var a,n,r,t,i,o;if(r={},arguments.length){if(!T3(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(rl(e,"copy")&&(r.copy=e.copy,!N3(e.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+e.copy+"`.");if(rl(e,"state")){if(n=e.state,r.state=!0,!Vd(n))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n+"`.");if(o=Yd(n,!0),o)throw o;r.copy===!1?a=n:(a=new pe(n.length),Sn(n.length,n,1,a,1)),n=new pe(a.buffer,a.byteOffset+(Ca+1)*a.BYTES_PER_ELEMENT,Z),t=new pe(a.buffer,a.byteOffset+(ge+1)*a.BYTES_PER_ELEMENT,n[ge])}if(t===void 0)if(rl(e,"seed"))if(t=e.seed,r.seed=!0,Wd(t)){if(t>Zd)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+t+"`.");t>>>=0}else{if($3(t)===!1||t.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+t+"`.");if(t.length===1){if(t=t[0],!Wd(t))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+t+"`.");if(t>Zd)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+t+"`.");t>>>=0}else i=t.length,a=new pe(jr+i),a[0]=ji,a[1]=zi,a[Ca]=Z,a[Ma]=1,a[Ma+1]=Z,a[ge]=i,Sn.ndarray(i,t,1,0,a,1,ge+1),n=new pe(a.buffer,a.byteOffset+(Ca+1)*a.BYTES_PER_ELEMENT,Z),t=new pe(a.buffer,a.byteOffset+(ge+1)*a.BYTES_PER_ELEMENT,i),n=Qd(n,Z,R3),n=x3(n,Z,t,i)}else t=Ud()>>>0}else t=Ud()>>>0;return n===void 0&&(a=new pe(jr+1),a[0]=ji,a[1]=zi,a[Ca]=Z,a[Ma]=1,a[Ma+1]=Z,a[ge]=1,a[ge+1]=t,n=new pe(a.buffer,a.byteOffset+(Ca+1)*a.BYTES_PER_ELEMENT,Z),t=new pe(a.buffer,a.byteOffset+(ge+1)*a.BYTES_PER_ELEMENT,1),n=Qd(n,Z,t)),ra(g,"NAME","mt19937"),Sa(g,"seed",l),Sa(g,"seedLength",s),Hd(g,"state",d,f),Sa(g,"stateLength",u),Sa(g,"byteLength",c),ra(g,"toJSON",m),ra(g,"MIN",1),ra(g,"MAX",Hm),ra(g,"normalized",k),ra(k,"NAME",g.NAME),Sa(k,"seed",l),Sa(k,"seedLength",s),Hd(k,"state",d,f),Sa(k,"stateLength",u),Sa(k,"byteLength",c),ra(k,"toJSON",m),ra(k,"MIN",0),ra(k,"MAX",z3),g;function l(){var w=a[ge];return Sn(w,t,1,new pe(w),1)}function s(){return a[ge]}function u(){return a.length}function c(){return a.byteLength}function d(){var w=a.length;return Sn(w,a,1,new pe(w),1)}function f(w){var h;if(!Vd(w))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+w+"`.");if(h=Yd(w,!1),h)throw h;r.copy===!1?r.state&&w.length===a.length?Sn(w.length,w,1,a,1):(a=w,r.state=!0):(w.length!==a.length&&(a=new pe(w.length)),Sn(w.length,w,1,a,1)),n=new pe(a.buffer,a.byteOffset+(Ca+1)*a.BYTES_PER_ELEMENT,Z),t=new pe(a.buffer,a.byteOffset+(ge+1)*a.BYTES_PER_ELEMENT,a[ge])}function m(){var w={};return w.type="PRNG",w.name=g.NAME,w.state=L3(a),w.params=[],w}function g(){var w,h;return h=a[Ma+1],h>=Z&&(n=F3(n),h=0),w=n[h],a[Ma+1]=h+1,w^=w>>>11,w^=w<<7&D3,w^=w<<15&I3,w^=w>>>18,w>>>0}function k(){var w=g()>>>5,h=g()>>>6;return(w*O3+h)*Vm}}var Wm=G3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J3=Wm,H3=Gm,V3=J3({seed:H3()}),W3=V3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U3=X,Um=W3,Z3=Wm;U3(Um,"factory",Z3);var Y3=Um;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q3=Math.ceil,X3=Q3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q3=X3,eb=q3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ab=tr,nb=eb;function rb(e){return e<0?nb(e):ab(e)}var tb=rb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ib=tb,Zm=ib;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ob=1023,Zu=ob;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lb=1023,sb=lb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ub=-1023,cb=ub;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var db=-1074,fb=db;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hb=Ja,yb=or;function mb(e){return e===hb||e===yb}var vb=mb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pb=vb,po=pb;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gb=2147483648,Sb=gb;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ab=2147483647,kb=Ab;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wb=xu,Cb=Fu,Mb={uint16:Cb,uint8:wb},Eb=Mb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xd=Eb,Ym;function Tb(){var e,a;return e=new Xd.uint16(1),e[0]=4660,a=new Xd.uint8(e.buffer),a[0]===52}Ym=Tb();var $b=Ym;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nb=$b,yt=Nb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bb=yt,Qm,$s,Ns;bb===!0?($s=1,Ns=0):($s=0,Ns=1);Qm={HIGH:$s,LOW:Ns};var Lb=Qm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rb=Ha,Pb=na,Xm=Lb,qm=new Pb(1),qd=new Rb(qm.buffer),Bb=Xm.HIGH,Kb=Xm.LOW;function Db(e,a,n,r){return qm[0]=e,a[r]=qd[Bb],a[r+n]=qd[Kb],a}var ev=Db;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ib=ev;function _b(e){return Ib(e,[0,0],1,0)}var Ob=_b;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jb=X,av=Ob,zb=ev;jb(av,"assign",zb);var nv=av;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xb=yt,bs;xb===!0?bs=1:bs=0;var Fb=bs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gb=Ha,Jb=na,Hb=Fb,rv=new Jb(1),Vb=new Gb(rv.buffer);function Wb(e){return rv[0]=e,Vb[Hb]}var Ub=Wb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zb=Ub,vn=Zb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yb=yt,tv,Ls,Rs;Yb===!0?(Ls=1,Rs=0):(Ls=0,Rs=1);tv={HIGH:Ls,LOW:Rs};var Qb=tv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xb=Ha,qb=na,iv=Qb,ov=new qb(1),ef=new Xb(ov.buffer),eL=iv.HIGH,aL=iv.LOW;function nL(e,a){return ef[eL]=e,ef[aL]=a,ov[0]}var rL=nL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tL=rL,Yu=tL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iL=Sb,oL=kb,lL=nv,sL=vn,uL=Yu,ul=[0,0];function cL(e,a){var n,r;return lL.assign(e,ul,1,0),n=ul[0],n&=oL,r=sL(a),r&=iL,n|=r,uL(n,ul[1])}var dL=cL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fL=dL,lv=fL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hL=22250738585072014e-324,yL=hL;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function mL(e){return Math.abs(e)}var vL=mL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pL=vL,go=pL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gL=yL,SL=po,AL=pa,kL=go,wL=4503599627370496;function CL(e,a,n,r){return AL(e)||SL(e)?(a[r]=e,a[r+n]=0,a):e!==0&&kL(e)<gL?(a[r]=e*wL,a[r+n]=-52,a):(a[r]=e,a[r+n]=0,a)}var sv=CL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ML=sv;function EL(e){return ML(e,[0,0],1,0)}var TL=EL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $L=X,uv=TL,NL=sv;$L(uv,"assign",NL);var bL=uv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LL=2146435072,RL=LL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PL=vn,BL=RL,KL=Zu;function DL(e){var a=PL(e);return a=(a&BL)>>>20,a-KL|0}var IL=DL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _L=IL,OL=_L;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jL=Ja,zL=or,xL=Zu,FL=sb,GL=cb,JL=fb,HL=pa,VL=po,WL=lv,UL=bL.assign,ZL=OL,YL=nv,QL=Yu,XL=2220446049250313e-31,qL=2148532223,cl=[0,0],dl=[0,0];function eR(e,a){var n,r;return a===0||e===0||HL(e)||VL(e)?e:(UL(e,cl,1,0),e=cl[0],a+=cl[1],a+=ZL(e),a<JL?WL(0,e):a>FL?e<0?zL:jL:(a<=GL?(a+=52,r=XL):r=1,YL.assign(e,dl,1,0),n=dl[0],n&=qL,n|=a+xL<<20,r*QL(n,dl[1])))}var aR=eR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nR=aR,cv=nR;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rR(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var tR=rR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var iR=cv,oR=tR;function lR(e,a,n){var r,t,i,o;return r=e-a,t=r*r,i=r-t*oR(t),o=1-(a-r*i/(2-i)-e),iR(o,n)}var sR=lR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var uR=pa,af=Zm,cR=or,nf=Ja,dR=sR,fR=.6931471803691238,hR=19082149292705877e-26,rf=1.4426950408889634,yR=709.782712893384,mR=-745.1332191019411,dv=1/(1<<28),vR=-dv;function pR(e){var a,n,r;return uR(e)||e===nf?e:e===cR?0:e>yR?nf:e<mR?0:e>vR&&e<dv?1+e:(e<0?r=af(rf*e-.5):r=af(rf*e+.5),a=e-r*fR,n=r*hR,dR(a,n,r))}var gR=pR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SR=gR,AR=SR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kR=AR;function wR(e,a){for(var n=e(),r=1;n>kR(-a);)r+=1,n*=e();return r-1}var CR=wR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MR=tr;function ER(e){return MR(e)===e&&e<0}var TR=ER;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $R=TR,NR=$R;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bR=yt,Ps;bR===!0?Ps=1:Ps=0;var LR=Ps;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RR=Ha,PR=na,BR=LR,Bs=new PR(1),KR=new RR(Bs.buffer);function DR(e,a){return Bs[0]=e,KR[BR]=a>>>0,Bs[0]}var IR=DR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _R=IR,OR=_R;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jR(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var zR=jR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function xR(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var FR=xR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var tf=vn,GR=OR,JR=pa,HR=Zu,VR=or,WR=zR,UR=FR,It=.6931471803691238,_t=19082149292705877e-26,ZR=0x40000000000000,YR=.3333333333333333,of=1048575,QR=2146435072,XR=1048576,qR=1072693248;function eP(e){var a,n,r,t,i,o,l,s,u,c,d,f;return e===0?VR:JR(e)||e<0?NaN:(n=tf(e),i=0,n<XR&&(i-=54,e*=ZR,n=tf(e)),n>=QR?e+e:(i+=(n>>20)-HR|0,n&=of,s=n+614244&1048576|0,e=GR(e,n|s^qR),i+=s>>20|0,l=e-1,(of&2+n)<3?l===0?i===0?0:i*It+i*_t:(o=l*l*(.5-YR*l),i===0?l-o:i*It-(o-i*_t-l)):(c=l/(2+l),f=c*c,s=n-398458|0,d=f*f,u=440401-n|0,t=d*WR(d),r=f*UR(d),s|=u,o=r+t,s>0?(a=.5*l*l,i===0?l-(a-c*(a+o)):i*It-(a-(c*(a+o)+i*_t)-l)):i===0?l-c*(l-o):i*It-(c*(l-o)-i*_t-l))))}var aP=eP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nP=aP,fv=nP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rP(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}var tP=rP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function iP(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var oP=iP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var lP=tP,sP=oP;function uP(e,a){var n,r,t,i;return i=e*e,t=i*i,r=i*lP(i),r+=t*t*sP(i),n=.5*i,t=1-n,t+(1-t-n+(i*r-e*a))}var cP=uP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dP=cP,hv=dP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var lf=-.16666666666666632,fP=.00833333333332249,hP=-.0001984126982985795,yP=27557313707070068e-22,mP=-25050760253406863e-24,vP=158969099521155e-24;function pP(e,a){var n,r,t,i;return i=e*e,t=i*i,n=fP+i*(hP+i*yP)+i*t*(mP+i*vP),r=i*e,a===0?e+r*(lf+i*n):e-(i*(.5*a-r*n)-a-r*lf)}var gP=pP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SP=gP,yv=SP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AP=yt,Ks;AP===!0?Ks=0:Ks=1;var kP=Ks;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wP=Ha,CP=na,MP=kP,mv=new CP(1),EP=new wP(mv.buffer);function TP(e){return mv[0]=e,EP[MP]}var $P=TP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NP=$P,bP=NP;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function LP(e,a){var n,r;for(n=[],r=0;r<a;r++)n.push(e);return n}var RP=LP;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PP=RP,BP=PP;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KP=BP;function DP(e){return KP(0,e)}var IP=DP;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _P=IP,OP=_P;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var jP=tr,Ot=cv,So=OP,vv=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],zP=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],fl=16777216,hl=5960464477539063e-23,jt=So(20),sf=So(20),zt=So(20),ne=So(20);function pv(e,a,n,r,t,i,o,l,s){var u,c,d,f,m,g,k,w,h;for(f=i,h=r[n],w=n,m=0;w>0;m++)c=hl*h|0,ne[m]=h-fl*c|0,h=r[w-1]+c,w-=1;if(h=Ot(h,t),h-=8*jP(h*.125),k=h|0,h-=k,d=0,t>0?(m=ne[n-1]>>24-t,k+=m,ne[n-1]-=m<<24-t,d=ne[n-1]>>23-t):t===0?d=ne[n-1]>>23:h>=.5&&(d=2),d>0){for(k+=1,u=0,m=0;m<n;m++)w=ne[m],u===0?w!==0&&(u=1,ne[m]=16777216-w):ne[m]=16777215-w;if(t>0)switch(t){case 1:ne[n-1]&=8388607;break;case 2:ne[n-1]&=4194303;break}d===2&&(h=1-h,u!==0&&(h-=Ot(1,t)))}if(h===0){for(w=0,m=n-1;m>=i;m--)w|=ne[m];if(w===0){for(g=1;ne[i-g]===0;g++);for(m=n+1;m<=n+g;m++){for(s[l+m]=vv[o+m],c=0,w=0;w<=l;w++)c+=e[w]*s[l+(m-w)];r[m]=c}return n+=g,pv(e,a,n,r,t,i,o,l,s)}}if(h===0)for(n-=1,t-=24;ne[n]===0;)n-=1,t-=24;else h=Ot(h,-t),h>=fl?(c=hl*h|0,ne[n]=h-fl*c|0,n+=1,t+=24,ne[n]=c):ne[n]=h|0;for(c=Ot(1,t),m=n;m>=0;m--)r[m]=c*ne[m],c*=hl;for(m=n;m>=0;m--){for(c=0,g=0;g<=f&&g<=n-m;g++)c+=zP[g]*r[m+g];zt[n-m]=c}for(c=0,m=n;m>=0;m--)c+=zt[m];for(d===0?a[0]=c:a[0]=-c,c=zt[0]-c,m=1;m<=n;m++)c+=zt[m];return d===0?a[1]=c:a[1]=-c,k&7}function xP(e,a,n,r){var t,i,o,l,s,u,c,d,f;for(i=4,l=r-1,o=(n-3)/24|0,o<0&&(o=0),u=n-24*(o+1),d=o-l,f=l+i,c=0;c<=f;c++)d<0?jt[c]=0:jt[c]=vv[d],d+=1;for(c=0;c<=i;c++){for(t=0,d=0;d<=l;d++)t+=e[d]*jt[l+(c-d)];sf[c]=t}return s=i,pv(e,a,s,sf,u,i,o,l,jt)}var FP=xP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GP=Math.round,JP=GP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HP=JP,VP=HP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var WP=VP,uf=vn,UP=.6366197723675814,ZP=1.5707963267341256,YP=6077100506506192e-26,QP=6077100506303966e-26,XP=20222662487959506e-37,qP=20222662487111665e-37,eB=84784276603689e-45,cf=2047;function aB(e,a,n){var r,t,i,o,l,s,u;return t=WP(e*UP),o=e-t*ZP,l=t*YP,u=a>>20|0,n[0]=o-l,r=uf(n[0]),s=u-(r>>20&cf),s>16&&(i=o,l=t*QP,o=i-l,l=t*XP-(i-o-l),n[0]=o-l,r=uf(n[0]),s=u-(r>>20&cf),s>49&&(i=o,l=t*qP,o=i-l,l=t*eB-(i-o-l),n[0]=o-l)),n[1]=o-n[0]-l,t}var nB=aB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
*
* Optimized by Bruce D. Evans.
* ```
*/var rB=vn,tB=bP,iB=Yu,oB=FP,xt=nB,lB=0,sB=16777216,Aa=1.5707963267341256,nn=6077100506506192e-26,Ft=2*nn,Gt=3*nn,Jt=4*nn,uB=2147483647,cB=2146435072,dB=1048575,fB=598523,hB=1072243195,yB=1073928572,mB=1074752122,vB=1074977148,pB=1075183036,gB=1075388923,SB=1075594811,AB=1094263291,Ar=[0,0,0],kr=[0,0];function kB(e,a){var n,r,t,i,o,l,s,u;if(t=rB(e),i=t&uB|0,i<=hB)return a[0]=e,a[1]=0,0;if(i<=mB)return(i&dB)===fB?xt(e,i,a):i<=yB?e>0?(u=e-Aa,a[0]=u-nn,a[1]=u-a[0]-nn,1):(u=e+Aa,a[0]=u+nn,a[1]=u-a[0]+nn,-1):e>0?(u=e-2*Aa,a[0]=u-Ft,a[1]=u-a[0]-Ft,2):(u=e+2*Aa,a[0]=u+Ft,a[1]=u-a[0]+Ft,-2);if(i<=SB)return i<=pB?i===vB?xt(e,i,a):e>0?(u=e-3*Aa,a[0]=u-Gt,a[1]=u-a[0]-Gt,3):(u=e+3*Aa,a[0]=u+Gt,a[1]=u-a[0]+Gt,-3):i===gB?xt(e,i,a):e>0?(u=e-4*Aa,a[0]=u-Jt,a[1]=u-a[0]-Jt,4):(u=e+4*Aa,a[0]=u+Jt,a[1]=u-a[0]+Jt,-4);if(i<AB)return xt(e,i,a);if(i>=cB)return a[0]=NaN,a[1]=NaN,0;for(n=tB(e),r=(i>>20)-1046,u=iB(i-(r<<20|0),n),l=0;l<2;l++)Ar[l]=u|0,u=(u-Ar[l])*sB;for(Ar[2]=u,o=3;Ar[o-1]===lB;)o-=1;return s=oB(Ar,kr,r,o),e<0?(a[0]=-kr[0],a[1]=-kr[1],-s):(a[0]=kr[0],a[1]=kr[1],s)}var wB=kB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CB=wB,gv=CB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var MB=vn,yl=hv,df=yv,EB=gv,ta=[0,0],TB=2147483647,$B=1072243195,NB=1044381696,bB=2146435072;function LB(e){var a,n;if(a=MB(e),a&=TB,a<=$B)return a<NB?1:yl(e,0);if(a>=bB)return NaN;switch(n=EB(e,ta),n&3){case 0:return yl(ta[0],ta[1]);case 1:return-df(ta[0],ta[1]);case 2:return-yl(ta[0],ta[1]);default:return df(ta[0],ta[1])}}var RB=LB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PB=RB,BB=PB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var KB=vn,ff=hv,ml=yv,DB=gv,IB=2147483647,_B=2146435072,OB=1072243195,jB=1045430272,ia=[0,0];function zB(e){var a,n;if(a=KB(e),a&=IB,a<=OB)return a<jB?e:ml(e,0);if(a>=_B)return NaN;switch(n=DB(e,ia),n&3){case 0:return ml(ia[0],ia[1]);case 1:return ff(ia[0],ia[1]);case 2:return-ml(ia[0],ia[1]);default:return-ff(ia[0],ia[1])}}var xB=zB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FB=xB,GB=FB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JB=3.141592653589793,Sv=JB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HB=pa,VB=po,hf=BB,vl=GB,WB=go,wr=lv,Cr=Sv;function UB(e){var a,n;return HB(e)?NaN:VB(e)?NaN:(n=e%2,a=WB(n),a===0||a===1?wr(0,n):a<.25?vl(Cr*n):a<.75?(a=.5-a,wr(hf(Cr*a),n)):a<1.25?(n=wr(1,n)-n,vl(Cr*n)):a<1.75?(a-=1.5,-wr(hf(Cr*a),n)):(n-=wr(2,n),vl(Cr*n)))}var ZB=UB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YB=ZB,QB=YB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function XB(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}var qB=XB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function e4(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}var a4=e4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function n4(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}var r4=n4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t4(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}var i4=t4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function o4(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}var l4=o4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function s4(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}var u4=s4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function c4(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var d4=c4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function f4(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var h4=f4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function y4(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}var m4=y4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function v4(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}var p4=v4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_lgamma_r.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var g4=pa,S4=po,A4=go,An=fv,k4=Zm,w4=QB,C4=Sv,pl=Ja,M4=qB,E4=a4,T4=r4,$4=i4,N4=l4,b4=u4,L4=d4,R4=h4,P4=m4,B4=p4,K4=.07721566490153287,D4=.3224670334241136,I4=1,_4=-.07721566490153287,O4=.48383612272381005,j4=-.1475877229945939,z4=.06462494023913339,x4=-.07721566490153287,F4=1,G4=.4189385332046727,Ht=1.4616321449683622,J4=4503599627370496,H4=0x400000000000000,V4=8470329472543003e-37,yf=1.4616321449683622,W4=-.12148629053584961,U4=-3638676997039505e-33;function Z4(e){var a,n,r,t,i,o,l,s,u,c,d,f,m;if(g4(e)||S4(e))return e;if(e===0)return pl;if(e<0?(a=!0,e=-e):a=!1,e<V4)return-An(e);if(a){if(e>=J4||(u=w4(e),u===0))return pl;n=An(C4/A4(u*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(m=-An(e),e>=Ht-1+.27?(d=1-e,r=0):e>=Ht-1-.27?(d=e-(yf-1),r=1):(d=e,r=2)):(m=0,e>=Ht+.27?(d=2-e,r=0):e>=Ht-.27?(d=e-yf,r=1):(d=e-1,r=2)),r){case 0:f=d*d,o=K4+f*M4(f),i=f*(D4+f*E4(f)),l=d*o+i,m+=l-.5*d;break;case 1:f=d*d,c=f*d,o=O4+c*N4(c),i=j4+c*b4(c),t=z4+c*L4(c),l=f*o-(U4-c*(i+d*t)),m+=W4+l;break;case 2:o=d*(x4+d*R4(d)),i=F4+d*P4(d),m+=-.5*d+o/i;break}else if(e<8)switch(r=k4(e),d=e-r,l=d*(_4+d*$4(d)),s=I4+d*T4(d),m=.5*d+l/s,f=1,r){case 7:f*=d+6;case 6:f*=d+5;case 5:f*=d+4;case 4:f*=d+3;case 3:f*=d+2,m+=An(f)}else e<H4?(u=An(e),f=1/e,d=f*f,c=G4+f*B4(d),m=(e-.5)*(u-1)+c):m=e*(An(e)-1);return a&&(m=n-m),m}var Y4=Z4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q4=Y4,X4=Q4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q4=NR,e6=X4;function a6(e){return q4(e)?NaN:e6(e+1)}var n6=a6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r6=n6,t6=r6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i6=pa;function o6(e){return e===0||i6(e)?e:e<0?-1:1}var l6=o6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s6=l6,u6=s6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c6=Math.sqrt,d6=c6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f6=d6,h6=f6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y6=.9189385332046728,m6=y6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v6=t6,mf=tr,p6=u6,g6=h6,vf=go,Vt=fv,S6=m6,A6=1/12,k6=1/360;function w6(e,a){var n,r,t,i,o,l,s,u,c,d;for(n=g6(a),s=2.53*n+.931,l=.02483*s-.059,r=1.1328/(s-3.4)+1.1239,o=-3.6224/(s-2)+.9277,t=.86*o;;){if(d=e(),d<=t)return c=d/o-.43,c*=2*l/(.5-vf(c))+s,c+=a+.445,mf(c);if(d>=o?c=e()-.5:(c=d/o-.93,c=p6(c)*.5-c,d=o*e()),i=.5-vf(c),(i>=.013||i>=d)&&(u=mf((2*l/i+s)*c+a+.445),d*=r/(l/(i*i)+s),c=(u+.5)*Vt(a/u),c+=-a-S6+u,c-=(A6-k6/(u*u))/u,u>=10&&c>=Vt(d*n)||(c=u*Vt(a)-a-v6(u),u>=0&&u<=9&&c>=Vt(d))))return u}}var C6=w6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M6=CR,E6=C6;function T6(e,a){return a<30?M6(e,a):E6(e,a)}var $6=T6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oa=X,Wt=io,pf=Fy,N6=j1.isPrimitive,gf=rm,Sf=rr,Af=ut,kf=qA,b6=rk,Ut=Y3.factory,L6=pa,R6=Fm,wf=$6;function P6(){var e,a,n,r;if(arguments.length===0)n=Ut();else if(arguments.length===1&&gf(arguments[0]))if(a=arguments[0],Af(a,"prng")){if(!Sf(a.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+a.prng+"`.");n=a.prng}else n=Ut(a);else{if(e=arguments[0],!N6(e))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+e+"`.");if(arguments.length>1){if(a=arguments[1],!gf(a))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+a+"`.");if(Af(a,"prng")){if(!Sf(a.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+a.prng+"`.");n=a.prng}else n=Ut(a)}else n=Ut()}return e===void 0?r=f:r=d,oa(r,"NAME","poisson"),a&&a.prng?(oa(r,"seed",null),oa(r,"seedLength",null),pf(r,"state",kf(null),b6),oa(r,"stateLength",null),oa(r,"byteLength",null),oa(r,"toJSON",kf(null)),oa(r,"PRNG",n)):(Wt(r,"seed",t),Wt(r,"seedLength",i),pf(r,"state",s,u),Wt(r,"stateLength",o),Wt(r,"byteLength",l),oa(r,"toJSON",c),oa(r,"PRNG",n),n=n.normalized),r;function t(){return n.seed}function i(){return n.seedLength}function o(){return n.stateLength}function l(){return n.byteLength}function s(){return n.state}function u(m){n.state=m}function c(){var m={};return m.type="PRNG",m.name=r.NAME,m.state=R6(n.state),e===void 0?m.params=[]:m.params=[e],m}function d(){return wf(n,e)}function f(m){return L6(m)||m<=0?NaN:wf(n,m)}}var Av=P6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B6=Av,K6=B6(),D6=K6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I6=X,kv=D6,_6=Av;I6(kv,"factory",_6);var O6=kv;const Cf=Ef(O6);class Ds{constructor(a,n,r,t,i,o){le(this,"homeTeam");le(this,"awayTeam");le(this,"league");le(this,"played");le(this,"homeScore");le(this,"awayScore");le(this,"id",parseInt(jy()));le(this,"homeGoalscorers",[]);le(this,"awayGoalscorers",[]);this.homeTeam=a,this.awayTeam=n,this.league=r,this.played=t,this.homeScore=i,this.awayScore=o}playMatch(){const n=(this.homeTeam.teamOffenseTotal/this.league.averageOffense)**1.618,r=(this.league.averageDefense/this.homeTeam.teamDefenseTotal)**1.618,t=(this.awayTeam.teamOffenseTotal/this.league.averageOffense)**1.618,i=(this.league.averageDefense/this.awayTeam.teamDefenseTotal)**1.618,o=this.league.avgGoals*n*i*1.05,l=this.league.avgGoals*t*r/1.05,s=Cf(o),u=Cf(l);this.homeScore=s,this.awayScore=u,this.homeTeam.standingsInfo.goalsFor+=this.homeScore,this.awayTeam.standingsInfo.goalsFor+=this.awayScore,this.homeTeam.standingsInfo.goalsAgainst+=this.awayScore,this.awayTeam.standingsInfo.goalsAgainst+=this.homeScore,this.homeScore==this.awayScore?(this.homeTeam.standingsInfo.draws++,this.awayTeam.standingsInfo.draws++):this.homeScore>this.awayScore?(this.homeTeam.standingsInfo.wins++,this.awayTeam.standingsInfo.losses++):(this.homeTeam.standingsInfo.losses++,this.awayTeam.standingsInfo.wins++);for(const c of this.homeTeam.roster)c.matchesPlayed++;for(const c of this.awayTeam.roster)c.matchesPlayed++;this.homeGoalscorers=this.selectGoalscorers(this.homeScore,this.homeTeam),this.awayGoalscorers=this.selectGoalscorers(this.awayScore,this.awayTeam),this.played=!0}selectGoalscorers(a,n){const r=n.roster.filter(l=>l instanceof ja),t=[],o=r.map(l=>l.attributes.attacking**3).reduce((l,s)=>l+s,0);for(let l=0;l<a;l++){let s=Math.random()*o,u;for(let c=0;c<r.length;c++){const d=r[c];if(s-=d.attributes.attacking**3,s<=0){u=d;break}}u&&(u.goals++,t.push(u))}return t}}class wv{constructor(a){le(this,"avgGoals",1.43);le(this,"schedule",[]);this.teams=a}get averageOffense(){let a=0;for(const n of this.teams)a+=n.teamOffenseTotal;return a/this.teams.length}get averageDefense(){let a=0;for(const n of this.teams)a+=n.teamDefenseTotal;return a/this.teams.length}generateSchedule(){const a=[],n=this.teams.length,r=n-1;for(let o=0;o<r;o++){const l=[];for(let u=0;u<n/2;u++){const c=u,d=n-1-u,f=this.teams[c],m=this.teams[d],g=new Ds(f,m,this,!1,void 0,void 0);l.push(g)}a.push(l);const s=this.teams.pop();s&&this.teams.splice(1,0,s)}const t=a.map(o=>o.map(l=>new Ds(l.awayTeam,l.homeTeam,this,!1,void 0,void 0))),i=[...a,...t];for(let o=i.length-1;o>0;o--){const l=Math.floor(Math.random()*(o+1)),s=i[o];i[o]=i[l],i[l]=s}return i}}class gl{constructor(a,n,r){le(this,"name");le(this,"selectedTeam");le(this,"difficulty");this.name=a,this.selectedTeam=n,this.difficulty=r}}const Mf=({matchup:e})=>{const{homeTeam:a,awayTeam:n,homeScore:r,awayScore:t,played:i}=e;return p.jsxs("div",{className:"matchup",children:[p.jsxs("div",{className:"team-info",children:[p.jsx("span",{className:"team-name",children:a.name}),i&&p.jsx("span",{className:"team-score",children:r})]}),p.jsxs("div",{className:"team-info",children:[p.jsx("span",{className:"team-name",children:n.name}),i&&p.jsx("span",{className:"team-score",children:t})]})]})};const j6=({matchups:e,week:a})=>{const n=e.slice(0,5),r=e.slice(5,10);return p.jsxs("div",{className:"matchweek-container",children:[p.jsxs("h3",{children:["Matchweek ",a]}),p.jsxs("div",{className:"matchweek-column-container",children:[p.jsx("div",{className:"matchweek-column",children:n.map(t=>p.jsx(Mf,{matchup:t},t.id))}),p.jsx("div",{className:"matchweek-column",children:r.map(t=>p.jsx(Mf,{matchup:t},t.id))})]})]})};const z6=({league:e,userTeamID:a})=>{const n=[...e.teams].sort((r,t)=>r.points!==t.points?t.points-r.points:r.goalDiff!==t.goalDiff?t.goalDiff-r.goalDiff:t.standingsInfo.goalsFor-r.standingsInfo.goalsFor);return p.jsxs("table",{className:"standings-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{className:"team-name-col",children:"Team"}),p.jsx("th",{className:"stat-col",children:"MP"}),p.jsx("th",{className:"stat-col",children:"W"}),p.jsx("th",{className:"stat-col",children:"D"}),p.jsx("th",{className:"stat-col",children:"L"}),p.jsx("th",{className:"stat-col",children:"GF"}),p.jsx("th",{className:"stat-col",children:"GA"}),p.jsx("th",{className:"stat-col",children:"GD"}),p.jsx("th",{className:"stat-col",children:"Pts"})]})}),p.jsx("tbody",{children:n.map((r,t)=>p.jsxs("tr",{className:`${t===0?"champion-row":t>=1&&t<=3?"champions-league-row":t>=e.teams.length-3?"relegation-row":t>=4&&t<=5?"europa-league-row":"neutral-row"} ${r.id===a?"user-team-row":""}`,children:[p.jsx("td",{className:"team-name-col",children:r.name}),p.jsx("td",{className:"stat-col",children:r.standingsInfo.wins+r.standingsInfo.draws+r.standingsInfo.losses}),p.jsx("td",{className:"stat-col",children:r.standingsInfo.wins}),p.jsx("td",{className:"stat-col",children:r.standingsInfo.draws}),p.jsx("td",{className:"stat-col",children:r.standingsInfo.losses}),p.jsx("td",{className:"stat-col",children:r.standingsInfo.goalsFor}),p.jsx("td",{className:"stat-col",children:r.standingsInfo.goalsAgainst}),p.jsx("td",{className:"stat-col",children:r.goalDiff}),p.jsx("td",{className:"stat-col",children:r.points})]},r.id))})]})};const x6=({team:e})=>{if(!e)return p.jsx("div",{children:"No team selected"});const a=e.roster.filter(i=>i.position==="GK"),n=e.roster.filter(i=>i.position==="DF"),r=e.roster.filter(i=>i.position==="MF"),t=e.roster.filter(i=>i.position==="FW");return p.jsxs("div",{className:"roster-container",children:[p.jsxs("h3",{children:[e.name," Roster"]}),p.jsxs("table",{className:"roster-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Position"}),p.jsx("th",{children:"Name"}),p.jsx("th",{children:"Age"}),p.jsx("th",{children:"MP"}),p.jsx("th",{children:"Goals"})]})}),p.jsxs("tbody",{children:[a.map(i=>p.jsxs("tr",{children:[p.jsx("td",{children:i.position}),p.jsxs("td",{children:[i.firstName.charAt(0),". ",i.lastName]}),p.jsx("td",{children:i.age}),p.jsx("td",{children:i.matchesPlayed}),p.jsx("td",{children:i.goals})]},i.id)),p.jsx("tr",{className:"section-divider"}),n.map(i=>p.jsxs("tr",{children:[p.jsx("td",{children:i.position}),p.jsxs("td",{children:[i.firstName.charAt(0),". ",i.lastName]}),p.jsx("td",{children:i.age}),p.jsx("td",{children:i.matchesPlayed}),p.jsx("td",{children:i.goals})]},i.id)),p.jsx("tr",{className:"section-divider"}),r.map(i=>p.jsxs("tr",{children:[p.jsx("td",{children:i.position}),p.jsxs("td",{children:[i.firstName.charAt(0),". ",i.lastName]}),p.jsx("td",{children:i.age}),p.jsx("td",{children:i.matchesPlayed}),p.jsx("td",{children:i.goals})]},i.id)),p.jsx("tr",{className:"section-divider"}),t.map(i=>p.jsxs("tr",{children:[p.jsx("td",{children:i.position}),p.jsxs("td",{children:[i.firstName.charAt(0),". ",i.lastName]}),p.jsx("td",{children:i.age}),p.jsx("td",{children:i.matchesPlayed}),p.jsx("td",{children:i.goals})]},i.id))]})]})]})};const F6=({user:e,onExitGame:a,year:n,week:r})=>p.jsxs("div",{className:"user-bar",children:[p.jsxs("div",{className:"user-info",children:[p.jsx("span",{className:"user-year",children:n}),p.jsxs("span",{className:"user-week",children:["Week ",r]})]}),p.jsxs("div",{className:"user-details",children:[p.jsx("span",{className:"user-name",children:e.name}),p.jsx("span",{className:"divider",children:"|"}),p.jsx("span",{className:"user-team-name",children:e.selectedTeam.name})]}),p.jsx("button",{className:"exit-button",onClick:a,children:"Exit Game"})]});function Cv(e){const a=e.teams.map(r=>({id:r.id,name:r.name,stadium:r.stadium,reputation:r.reputation,standingsInfo:{wins:r.standingsInfo.wins,losses:r.standingsInfo.losses,draws:r.standingsInfo.draws,goalsFor:r.standingsInfo.goalsFor,goalsAgainst:r.standingsInfo.goalsAgainst},roster:r.roster.map(t=>{const i={firstName:t.firstName,lastName:t.lastName,age:t.age,position:t.position,goals:t.goals,matchesPlayed:t.matchesPlayed};return t instanceof ro?i.attributes={goalkeeping:t.attributes.goalkeeping}:t instanceof ja&&(i.attributes={attacking:t.attributes.attacking,defending:t.attributes.defending}),i})}));localStorage.setItem("teamsData",JSON.stringify(a));const n=e.schedule.map(r=>r.map(t=>({homeTeamID:t.homeTeam.id,awayTeamID:t.awayTeam.id,homeScore:t.homeScore,awayScore:t.awayScore,played:t.played,id:t.id})));localStorage.setItem("scheduleData",JSON.stringify(n))}function G6(e,a){const n=e.map(i=>{const{id:o,name:l,stadium:s,reputation:u,roster:c,standingsInfo:d}=i,f=c.map(m=>{const{firstName:g,lastName:k,age:w,position:h,goals:y,matchesPlayed:v,attributes:S}=m;let C;if(h==="GK"){const{goalkeeping:T}=S;C=new ro(g,k,w,y,v,{goalkeeping:T})}else{const{attacking:T,defending:$}=S;C=new ja(g,k,w,h,y,v,{attacking:T,defending:$})}return C});return new xy(o,l,s,u,f,d)}),r=new wv(n),t=a.map(i=>i.map(o=>{const{homeTeamID:l,awayTeamID:s,played:u,homeScore:c,awayScore:d}=o;let f=n.find(g=>g.id===l),m=n.find(g=>g.id===s);if(!f||!m)throw new Error("Invalid team data in scheduleData");return new Ds(f,m,r,u,c,d)}));return r.schedule=t,r}const J6=({user:e,league:a,onUserLogout:n,saveGameDate:r})=>{const t=()=>{const h=localStorage.getItem("gameDate");if(h)return JSON.parse(h)};t();const[i]=be.useState(t().year),[o,l]=be.useState(t().week),[s,u]=be.useState([...a.schedule]),[c,d]=be.useState(s[o-1][0].played),[f,m]=be.useState(a.teams.find(h=>h.id===e.selectedTeam.id)),g=h=>{const y=parseInt(h.target.value),v=a.teams.find(S=>S.id===y);v&&m(v)},k=()=>{o<s.length&&(l(o+1),r(i,o),d(!1))};window.onbeforeunload=()=>{Cv(a),r(i,o)};const w=()=>{const h=s[o-1];if(h.some(v=>!v.played)){const v=h.map(C=>(C.played||C.playMatch(),C)),S=[...s];S[o-1]=v,d(!0),u(S)}};return p.jsxs("div",{className:"season-container",children:[p.jsx(F6,{user:e,onExitGame:n,year:i,week:o}),p.jsxs("div",{className:"season-container-grid",children:[p.jsxs("div",{className:"standings-wrapper grid-item",children:[p.jsx("h3",{children:"Standings"}),p.jsx(z6,{league:a,userTeamID:e.selectedTeam.id})]}),p.jsxs("div",{className:"fixtures-wrapper grid-item",children:[p.jsx(j6,{matchups:s[o-1],week:o},o),p.jsx("button",{onClick:w,disabled:c,children:"Play Matches"}),p.jsx("button",{onClick:k,disabled:!c||o===s.length,children:"Next Week"})]}),p.jsxs("div",{className:"roster-wrapper grid-item",children:[p.jsx(x6,{team:f},o),p.jsxs("div",{className:"dropdown",children:[p.jsx("p",{children:"View other team rosters:"}),p.jsx("select",{value:f==null?void 0:f.id,onChange:g,children:a.teams.map(h=>p.jsx("option",{value:h.id,children:h.name},h.id))})]})]})]})]})};const H6=({teams:e,onTeamSelect:a})=>{const n=()=>{const r=[];for(let t=0;t<e.length;t+=5){const i=e.slice(t,t+5),o=p.jsx("div",{className:"team-row",children:i.map(l=>p.jsx("div",{className:"team-item",children:p.jsx("button",{onClick:()=>a(l),children:l.name})},l.id))},t);r.push(o)}return r};return p.jsxs("div",{children:[p.jsx("h2",{children:"Select Your Team"}),p.jsx("div",{className:"team-grid",children:n()})]})},V6=({onSubmit:e})=>{const[a,n]=be.useState(""),[r,t]=be.useState("Standard"),i=s=>{n(s.target.value)},o=s=>{t(s.target.value)},l=()=>{e(a,r)};return p.jsxs("div",{className:"user-details",children:[p.jsx("h2",{children:"Enter Your Name and Select Difficulty"}),p.jsx("label",{htmlFor:"name",children:"Name:"}),p.jsx("input",{type:"text",id:"name",value:a,onChange:i}),p.jsx("label",{htmlFor:"difficulty",children:"Difficulty:"}),p.jsxs("select",{id:"difficulty",value:r,onChange:o,children:[p.jsx("option",{value:"Standard",children:"Standard"}),p.jsx("option",{value:"Hard",children:"Hard"})]}),p.jsx("button",{onClick:l,children:"Start"})]})};function W6(){const[e,a]=be.useState(!0),[n,r]=be.useState(null),[t,i]=be.useState(null),o=(f,m)=>{const g={year:f,week:m};localStorage.setItem("gameDate",JSON.stringify(g))};let l;(f=>{f.Standard="Standard",f.Hard="Hard"})(l||(l={}));const s=()=>{const f=new wv(i0());f.schedule=f.generateSchedule();const m=new gl("",null,"Standard");r(m),Cv(f),o(2023,1),localStorage.setItem("user",JSON.stringify(m)),a(!1)};be.useEffect(()=>{const f=localStorage.getItem("user"),m=localStorage.getItem("teamsData"),g=localStorage.getItem("scheduleData");if(f&&m&&g){r(JSON.parse(f));const k=JSON.parse(m),w=JSON.parse(g),h=G6(k,w);i(h),a(!1)}else s()},[]);const u=f=>{const m=new gl("",f,"Standard");r(m),localStorage.setItem("user",JSON.stringify(m))},c=(f,m)=>{const g=new gl(f,n==null?void 0:n.selectedTeam,m);r(g),localStorage.setItem("user",JSON.stringify(g))},d=()=>{a(!0),r(null),i(null),localStorage.removeItem("user"),localStorage.removeItem("teamsData"),localStorage.removeItem("scheduleData"),window.location.reload(),s()};return e?p.jsx("div",{children:"Loading..."}):p.jsxs("div",{className:"app",children:[p.jsx("h1",{children:p.jsx("i",{children:"Soul in the Game Soccer"})}),!(n!=null&&n.selectedTeam)&&t&&p.jsx(H6,{teams:t.teams,onTeamSelect:u}),(n==null?void 0:n.selectedTeam)&&!n.name&&p.jsx(V6,{onSubmit:c}),n&&n.name&&t&&p.jsx(J6,{user:n,league:t,onUserLogout:d,saveGameDate:o})]})}Sl.createRoot(document.getElementById("root")).render(p.jsx(W6,{}));
