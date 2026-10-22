(function(){"use strict";var Ch={exports:{}},Xl={};var xg;function SE(){if(xg)return Xl;xg=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,s,u){var f=null;if(u!==void 0&&(f=""+u),s.key!==void 0&&(f=""+s.key),"key"in s){u={};for(var d in s)d!=="key"&&(u[d]=s[d])}else u=s;return s=u.ref,{$$typeof:l,type:a,key:f,ref:s!==void 0?s:null,props:u}}return Xl.Fragment=t,Xl.jsx=i,Xl.jsxs=i,Xl}var Sg;function yE(){return Sg||(Sg=1,Ch.exports=SE()),Ch.exports}var Xi=yE(),wh={exports:{}},kl={},Dh={exports:{}},Uh={};var yg;function ME(){return yg||(yg=1,(function(l){function t(X,it){var Y=X.length;X.push(it);t:for(;0<Y;){var xt=Y-1>>>1,yt=X[xt];if(0<s(yt,it))X[xt]=it,X[Y]=yt,Y=xt;else break t}}function i(X){return X.length===0?null:X[0]}function a(X){if(X.length===0)return null;var it=X[0],Y=X.pop();if(Y!==it){X[0]=Y;t:for(var xt=0,yt=X.length,wt=yt>>>1;xt<wt;){var Wt=2*(xt+1)-1,xe=X[Wt],H=Wt+1,V=X[H];if(0>s(xe,Y))H<yt&&0>s(V,xe)?(X[xt]=V,X[H]=Y,xt=H):(X[xt]=xe,X[Wt]=Y,xt=Wt);else if(H<yt&&0>s(V,Y))X[xt]=V,X[H]=Y,xt=H;else break t}}return it}function s(X,it){var Y=X.sortIndex-it.sortIndex;return Y!==0?Y:X.id-it.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;l.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();l.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,g=null,v=3,y=!1,T=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(X){for(var it=i(p);it!==null;){if(it.callback===null)a(p);else if(it.startTime<=X)a(p),it.sortIndex=it.expirationTime,t(m,it);else break;it=i(p)}}function O(X){if(E=!1,C(X),!T)if(i(m)!==null)T=!0,P||(P=!0,rt());else{var it=i(p);it!==null&&ot(O,it.startTime-X)}}var P=!1,N=-1,B=5,A=-1;function w(){return M?!0:!(l.unstable_now()-A<B)}function z(){if(M=!1,P){var X=l.unstable_now();A=X;var it=!0;try{t:{T=!1,E&&(E=!1,L(N),N=-1),y=!0;var Y=v;try{e:{for(C(X),g=i(m);g!==null&&!(g.expirationTime>X&&w());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,v=g.priorityLevel;var yt=xt(g.expirationTime<=X);if(X=l.unstable_now(),typeof yt=="function"){g.callback=yt,C(X),it=!0;break e}g===i(m)&&a(m),C(X)}else a(m);g=i(m)}if(g!==null)it=!0;else{var wt=i(p);wt!==null&&ot(O,wt.startTime-X),it=!1}}break t}finally{g=null,v=Y,y=!1}it=void 0}}finally{it?rt():P=!1}}}var rt;if(typeof U=="function")rt=function(){U(z)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,$=Q.port2;Q.port1.onmessage=z,rt=function(){$.postMessage(null)}}else rt=function(){x(z,0)};function ot(X,it){N=x(function(){X(l.unstable_now())},it)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(X){X.callback=null},l.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<X?Math.floor(1e3/X):5},l.unstable_getCurrentPriorityLevel=function(){return v},l.unstable_next=function(X){switch(v){case 1:case 2:case 3:var it=3;break;default:it=v}var Y=v;v=it;try{return X()}finally{v=Y}},l.unstable_requestPaint=function(){M=!0},l.unstable_runWithPriority=function(X,it){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Y=v;v=X;try{return it()}finally{v=Y}},l.unstable_scheduleCallback=function(X,it,Y){var xt=l.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,X){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=Y+yt,X={id:_++,callback:it,priorityLevel:X,startTime:Y,expirationTime:yt,sortIndex:-1},Y>xt?(X.sortIndex=Y,t(p,X),i(m)===null&&X===i(p)&&(E?(L(N),N=-1):E=!0,ot(O,Y-xt))):(X.sortIndex=yt,t(m,X),T||y||(T=!0,P||(P=!0,rt()))),X},l.unstable_shouldYield=w,l.unstable_wrapCallback=function(X){var it=v;return function(){var Y=v;v=it;try{return X.apply(this,arguments)}finally{v=Y}}}})(Uh)),Uh}var Mg;function EE(){return Mg||(Mg=1,Dh.exports=ME()),Dh.exports}var Nh={exports:{}},ve={};var Eg;function TE(){if(Eg)return ve;Eg=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),y=Symbol.iterator;function T(H){return H===null||typeof H!="object"?null:(H=y&&H[y]||H["@@iterator"],typeof H=="function"?H:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function L(H,V,dt){this.props=H,this.context=V,this.refs=x,this.updater=dt||E}L.prototype.isReactComponent={},L.prototype.setState=function(H,V){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,V,"setState")},L.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function U(){}U.prototype=L.prototype;function C(H,V,dt){this.props=H,this.context=V,this.refs=x,this.updater=dt||E}var O=C.prototype=new U;O.constructor=C,M(O,L.prototype),O.isPureReactComponent=!0;var P=Array.isArray;function N(){}var B={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function w(H,V,dt){var ct=dt.ref;return{$$typeof:l,type:H,key:V,ref:ct!==void 0?ct:null,props:dt}}function z(H,V){return w(H.type,V,H.props)}function rt(H){return typeof H=="object"&&H!==null&&H.$$typeof===l}function Q(H){var V={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(dt){return V[dt]})}var $=/\/+/g;function ot(H,V){return typeof H=="object"&&H!==null&&H.key!=null?Q(""+H.key):V.toString(36)}function X(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(N,N):(H.status="pending",H.then(function(V){H.status==="pending"&&(H.status="fulfilled",H.value=V)},function(V){H.status==="pending"&&(H.status="rejected",H.reason=V)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function it(H,V,dt,ct,Ut){var Rt=typeof H;(Rt==="undefined"||Rt==="boolean")&&(H=null);var Ft=!1;if(H===null)Ft=!0;else switch(Rt){case"bigint":case"string":case"number":Ft=!0;break;case"object":switch(H.$$typeof){case l:case t:Ft=!0;break;case _:return Ft=H._init,it(Ft(H._payload),V,dt,ct,Ut)}}if(Ft)return Ut=Ut(H),Ft=ct===""?"."+ot(H,0):ct,P(Ut)?(dt="",Ft!=null&&(dt=Ft.replace($,"$&/")+"/"),it(Ut,V,dt,"",function(G){return G})):Ut!=null&&(rt(Ut)&&(Ut=z(Ut,dt+(Ut.key==null||H&&H.key===Ut.key?"":(""+Ut.key).replace($,"$&/")+"/")+Ft)),V.push(Ut)),1;Ft=0;var Pt=ct===""?".":ct+":";if(P(H))for(var zt=0;zt<H.length;zt++)ct=H[zt],Rt=Pt+ot(ct,zt),Ft+=it(ct,V,dt,Rt,Ut);else if(zt=T(H),typeof zt=="function")for(H=zt.call(H),zt=0;!(ct=H.next()).done;)ct=ct.value,Rt=Pt+ot(ct,zt++),Ft+=it(ct,V,dt,Rt,Ut);else if(Rt==="object"){if(typeof H.then=="function")return it(X(H),V,dt,ct,Ut);throw V=String(H),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Ft}function Y(H,V,dt){if(H==null)return H;var ct=[],Ut=0;return it(H,ct,"","",function(Rt){return V.call(dt,Rt,Ut++)}),ct}function xt(H){if(H._status===-1){var V=H._result,dt=V();dt.then(function(ct){(H._status===0||H._status===-1)&&(H._status=1,H._result=ct,dt.status===void 0&&(dt.status="fulfilled",dt.value=ct))},function(ct){(H._status===0||H._status===-1)&&(H._status=2,H._result=ct,dt.status===void 0&&(dt.status="rejected",dt.reason=ct))}),H._status===-1&&(H._status=0,H._result=dt)}if(H._status===1)return H._result.default;throw H._result}var yt=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function wt(H){var V=B.T,dt={};dt.types=V!==null?V.types:null,B.T=dt;try{var ct=H(),Ut=B.S;Ut!==null&&Ut(dt,ct),typeof ct=="object"&&ct!==null&&typeof ct.then=="function"&&ct.then(N,yt)}catch(Rt){yt(Rt)}finally{V!==null&&dt.types!==null&&(V.types=dt.types),B.T=V}}function Wt(H){var V=B.T;if(V!==null){var dt=V.types;dt===null?V.types=[H]:dt.indexOf(H)===-1&&dt.push(H)}else wt(Wt.bind(null,H))}var xe={map:Y,forEach:function(H,V,dt){Y(H,function(){V.apply(this,arguments)},dt)},count:function(H){var V=0;return Y(H,function(){V++}),V},toArray:function(H){return Y(H,function(V){return V})||[]},only:function(H){if(!rt(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return ve.Activity=g,ve.Children=xe,ve.Component=L,ve.Fragment=i,ve.Profiler=s,ve.PureComponent=C,ve.StrictMode=a,ve.Suspense=m,ve.ViewTransition=v,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ve.__COMPILER_RUNTIME={__proto__:null,c:function(H){return B.H.useMemoCache(H)}},ve.addTransitionType=Wt,ve.cache=function(H){return function(){return H.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(H,V,dt){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var ct=M({},H.props),Ut=H.key;if(V!=null)for(Rt in V.key!==void 0&&(Ut=""+V.key),V)!A.call(V,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&V.ref===void 0||(ct[Rt]=V[Rt]);var Rt=arguments.length-2;if(Rt===1)ct.children=dt;else if(1<Rt){for(var Ft=Array(Rt),Pt=0;Pt<Rt;Pt++)Ft[Pt]=arguments[Pt+2];ct.children=Ft}return w(H.type,Ut,ct)},ve.createContext=function(H){return H={$$typeof:f,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:u,_context:H},H},ve.createElement=function(H,V,dt){var ct,Ut={},Rt=null;if(V!=null)for(ct in V.key!==void 0&&(Rt=""+V.key),V)A.call(V,ct)&&ct!=="key"&&ct!=="__self"&&ct!=="__source"&&(Ut[ct]=V[ct]);var Ft=arguments.length-2;if(Ft===1)Ut.children=dt;else if(1<Ft){for(var Pt=Array(Ft),zt=0;zt<Ft;zt++)Pt[zt]=arguments[zt+2];Ut.children=Pt}if(H&&H.defaultProps)for(ct in Ft=H.defaultProps,Ft)Ut[ct]===void 0&&(Ut[ct]=Ft[ct]);return w(H,Rt,Ut)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(H){return{$$typeof:d,render:H}},ve.isValidElement=rt,ve.lazy=function(H){return{$$typeof:_,_payload:{_status:-1,_result:H},_init:xt}},ve.memo=function(H,V){return{$$typeof:p,type:H,compare:V===void 0?null:V}},ve.startTransition=wt,ve.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ve.use=function(H){return B.H.use(H)},ve.useActionState=function(H,V,dt){return B.H.useActionState(H,V,dt)},ve.useCallback=function(H,V){return B.H.useCallback(H,V)},ve.useContext=function(H){return B.H.useContext(H)},ve.useDebugValue=function(){},ve.useDeferredValue=function(H,V){return B.H.useDeferredValue(H,V)},ve.useEffect=function(H,V){return B.H.useEffect(H,V)},ve.useEffectEvent=function(H){return B.H.useEffectEvent(H)},ve.useId=function(){return B.H.useId()},ve.useImperativeHandle=function(H,V,dt){return B.H.useImperativeHandle(H,V,dt)},ve.useInsertionEffect=function(H,V){return B.H.useInsertionEffect(H,V)},ve.useLayoutEffect=function(H,V){return B.H.useLayoutEffect(H,V)},ve.useMemo=function(H,V){return B.H.useMemo(H,V)},ve.useOptimistic=function(H,V){return B.H.useOptimistic(H,V)},ve.useReducer=function(H,V,dt){return B.H.useReducer(H,V,dt)},ve.useRef=function(H){return B.H.useRef(H)},ve.useState=function(H){return B.H.useState(H)},ve.useSyncExternalStore=function(H,V,dt){return B.H.useSyncExternalStore(H,V,dt)},ve.useTransition=function(){return B.H.useTransition()},ve.version="19.3.0",ve}var Tg;function Lh(){return Tg||(Tg=1,Nh.exports=TE()),Nh.exports}var Oh={exports:{}},zn={};var bg;function bE(){if(bg)return zn;bg=1;var l=Lh();function t(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function d(_,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:y==null?null:y===f?f:""+y,children:_,containerInfo:g,implementation:v}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.browser=function(_){return{$$typeof:u,_reason:_}},zn.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(_,g,null,v)},zn.flushSync=function(_){var g=m.T,v=a.p;try{if(m.T=null,a.p=2,_)return _()}finally{m.T=g,a.p=v,a.d.f()}},zn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(_,g))},zn.prefetchDNS=function(_){typeof _=="string"&&a.d.D(_)},zn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,y=p(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,E=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:T,fetchPriority:E}):v==="script"&&a.d.X(_,{crossOrigin:y,integrity:T,fetchPriority:E,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},zn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);a.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&a.d.M(_)},zn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=p(v,g.crossOrigin);a.d.L(_,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},zn.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=p(g.as,g.crossOrigin);a.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else a.d.m(_)},zn.requestFormReset=function(_){a.d.r(_)},zn.unstable_batchedUpdates=function(_,g){return _(g)},zn.useFormState=function(_,g,v){return m.H.useFormState(_,g,v)},zn.useFormStatus=function(){return m.H.useHostTransitionStatus()},zn.version="19.3.0",zn}var Ag;function AE(){if(Ag)return Oh.exports;Ag=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),Oh.exports=bE(),Oh.exports}var Rg;function RE(){if(Rg)return kl;Rg=1;var l=EE(),t=Lh(),i=AE();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,r=n;r&&!r.alternate;)n=r,(n.flags&4098)!==0&&(e=n.return),r=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(a(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,o=n;;){var c=r.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===r)return m(c),e;if(h===o)return m(c),n;h=h.sibling}throw Error(a(188))}if(r.return!==o.return)r=c,o=h;else{for(var S=!1,b=c.child;b;){if(b===r){S=!0,r=c,o=h;break}if(b===o){S=!0,o=c,r=h;break}b=b.sibling}if(!S){for(b=h.child;b;){if(b===r){S=!0,r=h,o=c;break}if(b===o){S=!0,o=h,r=c;break}b=b.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function g(e,n,r,o,c,h){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&r(e,o,c,h)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,r,o,c,h))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function y(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],r=v(e);return r===null||E(n,e,r.child,{foundSelf:!1}),n}function E(e,n,r,o){for(;r!==null;){if(r===n)o.foundSelf=!0;else if(r.tag===5||r.tag===27||r.tag===6){if(o.foundSelf)return e[1]=r,!0;e[0]=r}else if((r.tag!==22||r.memoizedState===null)&&E(e,n,r.child,o))return!0;r=r.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(a(559))}}var x=null,L=null;function U(e,n,r){return e===r?!0:e===n?(x=e,!0):!1}function C(e,n,r){return e===r?(L=e,!1):e===n?(L!==null&&(x=e),!0):!1}function O(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function P(e,n,r){for(var o=0,c=e;c;c=r(c))o++;c=0;for(var h=n;h;h=r(h))c++;for(;0<o-c;)e=r(e),o--;for(;0<c-o;)n=r(n),c--;for(;o--;){if(e===n||n!==null&&e===n.alternate)return e;e=r(e),n=r(n)}return null}var N=Object.assign,B=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),rt=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),ot=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),it=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),wt=Symbol.for("react.activity"),Wt=Symbol.for("react.legacy_hidden"),xe=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),V=Symbol.for("react.recoverable"),dt=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var Ut=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case Q:return"Profiler";case rt:return"StrictMode";case it:return"Suspense";case Y:return"SuspenseList";case wt:return"Activity";case H:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case ot:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xt:return n=e.displayName||null,n!==null?n:Rt(e.type)||"Memo";case yt:n=e._payload,e=e._init;try{return Rt(e(n))}catch{}}return null}var Ft=Array.isArray,Pt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,zt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ze=[],ae=-1;function qt(e){return{current:e}}function Xt(e){0>ae||(e.current=ze[ae],ze[ae]=null,ae--)}function se(e,n){ae++,ze[ae]=e.current,e.current=n}var Lt=qt(null),he=qt(null),Ne=qt(null),Le=qt(null);function I(e,n){switch(se(Ne,n),se(he,e),se(Lt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?wM(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=wM(n),e=DM(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Xt(Lt),se(Lt,e)}function R(){Xt(Lt),Xt(he),Xt(Ne)}function at(e){var n=e.memoizedState;n!==null&&(Hl._currentValue=n.memoizedState,se(Le,e)),n=Lt.current;var r=DM(n,e.type);n!==r&&(se(he,e),se(Lt,r))}function pt(e){he.current===e&&(Xt(Lt),Xt(he)),Le.current===e&&(Xt(Le),Hl._currentValue=G)}var St,mt;function Kt(e){if(St===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);St=n&&n[1]||"",mt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+e+mt}var Dt=!1;function It(e,n){if(!e||Dt)return"";Dt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Ht){var W=Ht}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(Ht){W=Ht}gt=!1;try{var nt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new e}finally{gt&&(nt!==void 0?Object.defineProperty(e.prototype,"props",nt):delete e.prototype.props)}}}else{try{throw Error()}catch(Ht){W=Ht}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Ht){if(Ht&&W&&typeof Ht.stack=="string")return[Ht.stack,W.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],b=h[1];if(S&&b){var F=S.split(`
`),K=b.split(`
`);for(c=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;c<K.length&&!K[c].includes("DetermineComponentFrameRoot");)c++;if(o===F.length||c===K.length)for(o=F.length-1,c=K.length-1;1<=o&&0<=c&&F[o]!==K[c];)c--;for(;1<=o&&0<=c;o--,c--)if(F[o]!==K[c]){if(o!==1||c!==1)do if(o--,c--,0>c||F[o]!==K[c]){var st=`
`+F[o].replace(" at new "," at ");return e.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",e.displayName)),st}while(1<=o&&0<=c);break}}}finally{Dt=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Kt(r):""}function Qt(e,n){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return e.child!==n&&n!==null?Kt("Suspense Fallback"):Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return It(e.type,!1);case 11:return It(e.type.render,!1);case 1:return It(e.type,!0);case 31:return Kt("Activity");case 30:return Kt("ViewTransition");default:return""}}function Tt(e){try{var n="",r=null;do n+=Qt(e,r),r=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Gt=Object.prototype.hasOwnProperty,ue=l.unstable_scheduleCallback,te=l.unstable_cancelCallback,Bt=l.unstable_shouldYield,pe=l.unstable_requestPaint,k=l.unstable_now,bt=l.unstable_getCurrentPriorityLevel,Nt=l.unstable_ImmediatePriority,Zt=l.unstable_UserBlockingPriority,Et=l.unstable_NormalPriority,vt=l.unstable_LowPriority,ee=l.unstable_IdlePriority,me=l.log,Be=l.unstable_setDisableYieldValue,Te=null,je=null;function an(e){if(typeof me=="function"&&Be(e),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(Te,e)}catch{}}var fn=Math.clz32?Math.clz32:dr,da=Math.log,La=Math.LN2;function dr(e){return e>>>=0,e===0?32:31-(da(e)/La|0)|0}var Oa=256,Zi=262144,Pa=4194304;function Gn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function za(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~h,o!==0?c=Gn(o):(S&=b,S!==0?c=Gn(S):r||(r=b&~e,r!==0&&(c=Gn(r))))):(b=o&~h,b!==0?c=Gn(b):S!==0?c=Gn(S):r||(r=o&~e,r!==0&&(c=Gn(r)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:c}function pa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Zs(e,n){(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var o=31-fn(r),c=1<<o;n|=e[o],r&=~c}return n}function el(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qr(){var e=Pa;return Pa<<=1,(Pa&62914560)===0&&(Pa=4194304),e}function js(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Ia(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pr(e,n,r,o,c,h){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var b=e.entanglements,F=e.expirationTimes,K=e.hiddenUpdates;for(r=S&~r;0<r;){var st=31-fn(r),gt=1<<st;b[st]=0,F[st]=-1;var W=K[st];if(W!==null)for(K[st]=null,st=0;st<W.length;st++){var nt=W[st];nt!==null&&(nt.lane&=-536870913)}r&=~gt}o!==0&&D(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function D(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-fn(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function j(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-fn(r),c=1<<o;c&n|e[o]&n&&(e[o]|=n),r&=~c}}function lt(e,n){var r=n&-n;return r=(r&42)!==0?1:ut(r),(r&(e.suspendedLanes|n))!==0?0:r}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function J(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function At(){var e=zt.p;return e!==0?e:(e=window.event,e===void 0?32:dE(e.type))}function Vt(e,n){var r=zt.p;try{return zt.p=e,n()}finally{zt.p=r}}var Yt=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Yt,et="__reactProps$"+Yt,ft="__reactContainer$"+Yt,Mt="__reactEvents$"+Yt,Ct="__reactListeners$"+Yt,ie="__reactHandles$"+Yt,fe="__reactResources$"+Yt,ce="__reactMarker$"+Yt,Jt="__reactLoad$"+Yt;function jt(e){delete e[Ot],delete e[et],delete e[Ct],delete e[ie]}function re(e){var n;if(n=e[Ot])return n;for(var r=e.parentNode;r;){if(n=r[ft]||r[Ot]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=WM(e);e!==null;){if(r=e[Ot])return r;e=WM(e)}return n}e=r,r=e.parentNode}return null}function oe(e){if(e=e[Ot]||e[ft]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function sn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function _e(e){var n=e[fe];return n||(n=e[fe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ge(e){e[ce]=!0}function ai(e){e[Jt]=void 0}var Fe=new Set,Vn={};function hn(e,n){$e(e,n),$e(e+"Capture",n)}function $e(e,n){for(Vn[e]=n,e=0;e<n.length;e++)Fe.add(n[e])}var mn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ma={},Pi={};function uf(e){return Gt.call(Pi,e)?!0:Gt.call(ma,e)?!1:mn.test(e)?Pi[e]=!0:(ma[e]=!0,!1)}var Oe=!1;function Eu(){var e=Oe;return Oe=!1,e}function Ks(e,n,r){if(uf(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,r)}}function nl(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,r)}}function _a(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,o)}}function $n(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ba(e,n,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){r=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xn(e){if(!e._valueTracker){var n=Jr(e)?"checked":"value";e._valueTracker=Ba(e,n,""+e[n])}}function Tu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=Jr(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}var il=/[\n"\\]/g;function ti(e){return e.replace(il,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function al(e,n,r,o,c,h,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$n(n)):e.value!==""+$n(n)&&(e.value=""+$n(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?S==="number"&&e.value==n?ga(e,$n(e.value)):ga(e,$n(n)):r!=null?ga(e,$n(r)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+$n(b):e.removeAttribute("name")}function vi(e,n,r,o,c,h,S,b){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Xn(e);return}r=r!=null?""+$n(r):"",n=n!=null?""+$n(n):r,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Xn(e)}function ga(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function ji(e,n,r,o){if(e=e.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=n.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&o&&(e[r].defaultSelected=!0)}else{for(r=""+$n(r),n=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function xx(e,n,r){if(n!=null&&(n=""+$n(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+$n(r):""}function Sx(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(Ft(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=$n(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),Xn(e)}function rl(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var N2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yx(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||N2.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function Mx(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="",Oe=!0);for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&(yx(e,c,o),Oe=!0)}else for(var h in n)n.hasOwnProperty(h)&&yx(e,h,n[h])}function Jp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var L2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),O2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cf(e){return O2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fa(){}var $p=null;function tm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,ol=null;function Ex(e){var n=oe(e);if(n&&(e=n.stateNode)){var r=e[et]||null;t:switch(e=n.stateNode,n.type){case"input":if(al(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ti(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var c=o[et]||null;if(!c)throw Error(a(90));al(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&Tu(o)}break t;case"textarea":xx(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&ji(e,!!r.multiple,n,!1)}}}var em=!1;function Tx(e,n,r){if(em)return e(n,r);em=!0;try{var o=e(n);return o}finally{if(em=!1,(sl!==null||ol!==null)&&(ch(),sl&&(n=sl,e=ol,ol=sl=null,Ex(n),e)))for(n=0;n<e.length;n++)Ex(e[n])}}function bu(e,n){var r=e.stateNode;if(r===null)return null;var o=r[et]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nm=!1;if(mr)try{var Au={};Object.defineProperty(Au,"passive",{get:function(){nm=!0}}),window.addEventListener("test",Au,Au),window.removeEventListener("test",Au,Au)}catch{nm=!1}var $r=null,im=null,ff=null;function bx(){if(ff)return ff;var e,n=im,r=n.length,o,c="value"in $r?$r.value:$r.textContent,h=c.length;for(e=0;e<r&&n[e]===c[e];e++);var S=r-e;for(o=1;o<=S&&n[r-o]===c[h-o];o++);return ff=c.slice(e,1<o?1-o:void 0)}function hf(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function df(){return!0}function Ax(){return!1}function ri(e){function n(r,o,c,h,S){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(r=e[b],this[b]=r?r(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?df:Ax,this.isPropagationStopped=Ax,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=df)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=df)},persist:function(){},isPersistent:df}),n}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=ri(ts),Ru=N({},ts,{view:0,detail:0}),P2=ri(Ru),am,rm,Cu,mf=N({},Ru,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:om,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cu&&(Cu&&e.type==="mousemove"?(am=e.screenX-Cu.screenX,rm=e.screenY-Cu.screenY):rm=am=0,Cu=e),am)},movementY:function(e){return"movementY"in e?e.movementY:rm}}),Rx=ri(mf),z2=N({},mf,{dataTransfer:0}),I2=ri(z2),B2=N({},Ru,{relatedTarget:0}),sm=ri(B2),F2=N({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),H2=ri(F2),G2=N({},ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V2=ri(G2),X2=N({},ts,{data:0}),Cx=ri(X2),k2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W2(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Y2[e])?!!n[e]:!1}function om(){return W2}var Z2=N({},Ru,{key:function(e){if(e.key){var n=k2[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hf(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:om,charCode:function(e){return e.type==="keypress"?hf(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hf(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),j2=ri(Z2),K2=N({},mf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wx=ri(K2),Q2=N({},ts,{submitter:0}),J2=ri(Q2),$2=N({},Ru,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:om}),tw=ri($2),ew=N({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),nw=ri(ew),iw=N({},mf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),aw=ri(iw),rw=N({},ts,{newState:0,oldState:0,source:0}),sw=ri(rw),ow=[9,13,27,32],lm=mr&&"CompositionEvent"in window,wu=null;mr&&"documentMode"in document&&(wu=document.documentMode);var lw=mr&&"TextEvent"in window&&!wu,Dx=mr&&(!lm||wu&&8<wu&&11>=wu),Ux=" ",Nx=!1;function Lx(e,n){switch(e){case"keyup":return ow.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ox(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ll=!1;function uw(e,n){switch(e){case"compositionend":return Ox(n);case"keypress":return n.which!==32?null:(Nx=!0,Ux);case"textInput":return e=n.data,e===Ux&&Nx?null:e;default:return null}}function cw(e,n){if(ll)return e==="compositionend"||!lm&&Lx(e,n)?(e=bx(),ff=im=$r=null,ll=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dx&&n.locale!=="ko"?null:n.data;default:return null}}var fw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Px(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!fw[e.type]:n==="textarea"}function zx(e,n,r,o){sl?ol?ol.push(o):ol=[o]:sl=o,n=_h(n,"onChange"),0<n.length&&(r=new pf("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var Du=null,Uu=null;function hw(e){EM(e,0)}function _f(e){var n=sn(e);if(Tu(n))return e}function Ix(e,n){if(e==="change")return n}var Bx=!1;if(mr){var um;if(mr){var cm="oninput"in document;if(!cm){var Fx=document.createElement("div");Fx.setAttribute("oninput","return;"),cm=typeof Fx.oninput=="function"}um=cm}else um=!1;Bx=um&&(!document.documentMode||9<document.documentMode)}function Hx(){Du&&(Du.detachEvent("onpropertychange",Gx),Uu=Du=null)}function Gx(e){if(e.propertyName==="value"&&_f(Uu)){var n=[];zx(n,Uu,e,tm(e)),Tx(hw,n)}}function dw(e,n,r){e==="focusin"?(Hx(),Du=n,Uu=r,Du.attachEvent("onpropertychange",Gx)):e==="focusout"&&Hx()}function pw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _f(Uu)}function mw(e,n){if(e==="click")return _f(n)}function _w(e,n){if(e==="input"||e==="change")return _f(n)}function gw(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var zi=typeof Object.is=="function"?Object.is:gw;function Nu(e,n){if(zi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!Gt.call(n,c)||!zi(e[c],n[c]))return!1}return!0}function fm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vx(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xx(e,n){var r=Vx(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Vx(r)}}function kx(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kx(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=fm(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=fm(e.document)}return n}function hm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var vw=mr&&"documentMode"in document&&11>=document.documentMode,ul=null,dm=null,Lu=null,pm=!1;function Yx(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;pm||ul==null||ul!==fm(o)||(o=ul,"selectionStart"in o&&hm(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Lu&&Nu(Lu,o)||(Lu=o,o=_h(dm,"onSelect"),0<o.length&&(n=new pf("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=ul)))}function Qs(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var cl={animationend:Qs("Animation","AnimationEnd"),animationiteration:Qs("Animation","AnimationIteration"),animationstart:Qs("Animation","AnimationStart"),transitionrun:Qs("Transition","TransitionRun"),transitionstart:Qs("Transition","TransitionStart"),transitioncancel:Qs("Transition","TransitionCancel"),transitionend:Qs("Transition","TransitionEnd")},mm={},Wx={};mr&&(Wx=document.createElement("div").style,"AnimationEvent"in window||(delete cl.animationend.animation,delete cl.animationiteration.animation,delete cl.animationstart.animation),"TransitionEvent"in window||delete cl.transitionend.transition);function Js(e){if(mm[e])return mm[e];if(!cl[e])return e;var n=cl[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Wx)return mm[e]=n[r];return e}var Zx=Js("animationend"),jx=Js("animationiteration"),Kx=Js("animationstart"),xw=Js("transitionrun"),Sw=Js("transitionstart"),yw=Js("transitioncancel"),Qx=Js("transitionend"),Jx=new Map,_m="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_m.push("scrollEnd");function va(e,n){Jx.set(e,n),hn(n,[e])}var Mw=0;function _r(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Ma.identifierPrefix;var r=Mw++;return e="_"+e+"t_"+r.toString(32)+"_",n.autoName=e}function $x(e){if(e==null||typeof e=="string")return e;var n=null,r=Dl;if(r!==null)for(var o=0;o<r.length;o++){var c=e[r[o]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function gr(e,n){return e=$x(e),n=$x(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var gf=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ki=[],fl=0,gm=0;function vf(){for(var e=fl,n=gm=fl=0;n<e;){var r=Ki[n];Ki[n++]=null;var o=Ki[n];Ki[n++]=null;var c=Ki[n];Ki[n++]=null;var h=Ki[n];if(Ki[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}h!==0&&tS(r,c,h)}}function xf(e,n,r,o){Ki[fl++]=e,Ki[fl++]=n,Ki[fl++]=r,Ki[fl++]=o,gm|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function vm(e,n,r,o){return xf(e,n,r,o),Sf(e)}function $s(e,n){return xf(e,null,null,n),Sf(e)}function tS(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var c=!1,h=e.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-fn(r),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=r|536870912),h):null}function Sf(e){if(50<ec)throw ec=0,uh=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var hl={};function Ew(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(e,n,r,o){return new Ew(e,n,r,o)}function xm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vr(e,n){var r=e.alternate;return r===null?(r=xi(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&1206910976,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function eS(e,n){e.flags&=1206910978;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function yf(e,n,r,o,c,h){var S=0;if(o=e,typeof o=="function")xm(o)&&(S=1);else if(typeof o=="string")S=QD(e,r,Lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(o){case wt:return e=xi(31,r,n,c),e.elementType=wt,e.lanes=h,e;case z:return to(r.children,c,h,n);case rt:S=8,c|=24;break;case Q:return e=xi(12,r,n,c|2),e.elementType=Q,e.lanes=h,e;case it:return e=xi(13,r,n,c),e.elementType=it,e.lanes=h,e;case Y:return e=xi(19,r,n,c),e.elementType=Y,e.lanes=h,e;case Wt:case H:return e=c|32,e=xi(30,r,n,e),e.elementType=H,e.lanes=h,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case ot:S=10;break t;case $:S=9;break t;case X:S=11;break t;case xt:S=14;break t;case yt:S=16,o=null;break t}S=29,r=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=xi(S,r,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function to(e,n,r,o){return e=xi(7,e,o,n),e.lanes=r,e}function Sm(e,n,r){return e=xi(6,e,null,n),e.lanes=r,e}function nS(e){var n=xi(18,null,null,0);return n.stateNode=e,n}function ym(e,n,r){return n=xi(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var iS=new WeakMap;function Qi(e,n){if(typeof e=="object"&&e!==null){var r=iS.get(e);return r!==void 0?r:(n={value:e,source:n,stack:Tt(n)},iS.set(e,n),n)}return{value:e,source:n,stack:Tt(n)}}var dl=[],pl=0,Mf=null,Ou=0,Ji=[],$i=0,es=null,Ha=1,Ga="";function xr(e,n){dl[pl++]=Ou,dl[pl++]=Mf,Mf=e,Ou=n}function aS(e,n,r){Ji[$i++]=Ha,Ji[$i++]=Ga,Ji[$i++]=es,es=e;var o=Ha;e=Ga;var c=32-fn(o)-1;o&=~(1<<c),r+=1;var h=32-fn(n)+c;if(30<h){var S=c-c%5;h=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Ha=1<<32-fn(n)+c|r<<c|o,Ga=h+e}else Ha=1<<h|r<<c|o,Ga=e}function Ef(e){e.return!==null&&(xr(e,1),aS(e,1,0))}function Mm(e){for(;e===Mf;)Mf=dl[--pl],dl[pl]=null,Ou=dl[--pl],dl[pl]=null;for(;e===es;)es=Ji[--$i],Ji[$i]=null,Ga=Ji[--$i],Ji[$i]=null,Ha=Ji[--$i],Ji[$i]=null}function rS(e,n){Ji[$i++]=Ha,Ji[$i++]=Ga,Ji[$i++]=es,Ha=n.id,Ga=n.overflow,es=e}var Ln=null,en=null,be=!1,ns=null,ta=!1,Em=Error(a(519));function is(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pu(Qi(n,e)),Em}function sS(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[Ot]=e,n[et]=o,r){case"dialog":Re("cancel",n),Re("close",n);break;case"iframe":case"object":case"embed":Re("load",n);break;case"video":case"audio":for(r=0;r<ic.length;r++)Re(ic[r],n);break;case"source":Re("error",n);break;case"img":case"image":case"link":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"input":Re("invalid",n),vi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Re("invalid",n);break;case"textarea":Re("invalid",n),Sx(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||RM(n.textContent,r)?(o.popover!=null&&(Re("beforetoggle",n),Re("toggle",n)),o.onScroll!=null&&Re("scroll",n),o.onScrollEnd!=null&&Re("scrollend",n),o.onClick!=null&&(n.onclick=Fa),n=!0):n=!1,n||is(e,!0)}function Tf(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:ta=!1;return;case 27:case 3:ta=!0;return;default:Ln=Ln.return}}function ml(e){if(e!==Ln)return!1;if(!be)return Tf(e),be=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||$_(e.type,e.memoizedProps)),r=!r),r&&en&&is(e),Tf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));en=YM(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));en=YM(e)}else n===27?(n=en,xs(e.type)?(e=lg,lg=null,en=e):en=n):en=Ln?na(e.stateNode.nextSibling):null;return!0}function eo(){en=Ln=null,be=!1}function Tm(){var e=ns;return e!==null&&(Mi===null?Mi=e:Mi.push.apply(Mi,e),ns=null),e}function Pu(e){ns===null?ns=[e]:ns.push(e)}var bm=qt(null),no=null,Sr=null;function as(e,n,r){se(bm,n._currentValue),n._currentValue=r}function yr(e){e._currentValue=bm.current,Xt(bm)}function bf(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function Am(e,n,r,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var S=c.child;h=h.firstContext;t:for(;h!==null;){var b=h;h=c;for(var F=0;F<n.length;F++)if(b.context===n[F]){h.lanes|=r,b=h.alternate,b!==null&&(b.lanes|=r),bf(h.return,r,e),o||(S=null);break t}h=b.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(a(341));S.lanes|=r,h=S.alternate,h!==null&&(h.lanes|=r),bf(S,r,e),S=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=r,S=c.alternate,S!==null&&(S.lanes|=r),bf(c.return,r,e),S=c.child,S=S!==null?S.sibling:null):S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function io(e,n,r,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var b=c.type;zi(c.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(c===Le.current){if(S=c.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Hl):e=[Hl])}c=c.return}return e!==null&&Am(n,e,r,o),n.flags|=262144,e!==null}function Af(e){for(e=e.firstContext;e!==null;){if(!zi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ao(e){no=e,Sr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function kn(e){return oS(no,e)}function Rf(e,n){return no===null&&ao(e),oS(e,n)}function oS(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Sr===null){if(e===null)throw Error(a(308));Sr=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Sr=Sr.next=n;return r}var Tw=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},bw=l.unstable_scheduleCallback,Aw=l.unstable_NormalPriority,En={$$typeof:ot,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rm(){return{controller:new Tw,data:new Map,refCount:0}}function zu(e){e.refCount--,e.refCount===0&&bw(Aw,function(){e.controller.abort()})}function lS(e,n){if((e.pendingLanes&4194048)!==0){var r=e.transitionTypes;for(r===null&&(r=e.transitionTypes=[]),e=0;e<n.length;e++){var o=n[e];r.indexOf(o)===-1&&r.push(o)}}}var Iu=null;function Rw(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Bu=null,Cm=0,ro=0,_l=null;function Cw(e,n){if(Bu===null){var r=Bu=[];Cm=0,ro=k_(),_l={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Cm++,n.then(uS,uS),n}function uS(){if(--Cm===0&&(Iu=null,Bu!==null)){_l!==null&&(_l.status="fulfilled");var e=Bu;Bu=null,ro=0,_l=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ww(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var cS=Pt.S;Pt.S=function(e,n){if(nM=k(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Cw(e,n),Iu!==null)for(var r=Ol;r!==null;)lS(r,Iu),r=r.next;if(r=e.types,r!==null){for(var o=Ol;o!==null;)lS(o,r),o=o.next;if(ro!==0){o=Iu,o===null&&(o=Iu=[]);for(var c=0;c<r.length;c++){var h=r[c];o.indexOf(h)===-1&&o.push(h)}}}cS!==null&&cS(e,n)};var so=qt(null);function wm(){var e=so.current;return e!==null?e:tn.pooledCache}function Cf(e,n){n===null?se(so,so.current):se(so,n.pool)}function fS(){var e=wm();return e===null?null:{parent:En._currentValue,pool:e}}var gl=Error(a(460)),Dm=Error(a(474)),wf=Error(a(542)),Df={then:function(){}};function hS(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dS(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(Fa,Fa),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mS(e),e===void 0&&!("reason"in n)?Error(a(600)):e;default:if(typeof n.status=="string")n.then(Fa,Fa);else{if(e=tn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mS(e),e}throw lo=n,gl}}function oo(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(lo=r,gl):r}}var lo=null;function pS(){if(lo===null)throw Error(a(459));var e=lo;return lo=null,e}function mS(e){if(e===gl||e===wf)throw Error(a(483))}var vl=null,Fu=0;function Uf(e){var n=Fu;return Fu+=1,vl===null&&(vl=[]),dS(vl,e,n)}function rs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Nf(e,n){throw n.$$typeof===B?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function _S(e){function n(Z,q){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[q],Z.flags|=16):tt.push(q)}}function r(Z,q){if(!e)return null;for(;q!==null;)n(Z,q),q=q.sibling;return null}function o(Z){for(var q=new Map;Z!==null;)Z.key===null?q.set(Z.index,Z):q.set(Z.key,Z),Z=Z.sibling;return q}function c(Z,q){return Z=vr(Z,q),Z.index=0,Z.sibling=null,Z}function h(Z,q,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<q?(Z.flags|=2,q):tt):(Z.flags|=134217730,q)):(Z.flags|=1048576,q)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=134217730),Z}function b(Z,q,tt,_t){return q===null||q.tag!==6?(q=Sm(tt,Z.mode,_t),q.return=Z,q):(q=c(q,tt),q.return=Z,q)}function F(Z,q,tt,_t){var $t=tt.type;return $t===z?(Z=st(Z,q,tt.props.children,_t,tt.key),rs(Z,tt),Z):q!==null&&(q.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===yt&&oo($t)===q.type)?(q=c(q,tt.props),rs(q,tt),q.return=Z,q):(q=yf(tt.type,tt.key,tt.props,null,Z.mode,_t),rs(q,tt),q.return=Z,q)}function K(Z,q,tt,_t){return q===null||q.tag!==4||q.stateNode.containerInfo!==tt.containerInfo||q.stateNode.implementation!==tt.implementation?(q=ym(tt,Z.mode,_t),q.return=Z,q):(q=c(q,tt.children||[]),q.return=Z,q)}function st(Z,q,tt,_t,$t){return q===null||q.tag!==7?(q=to(tt,Z.mode,_t,$t),q.return=Z,q):(q=c(q,tt),q.return=Z,q)}function gt(Z,q,tt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Sm(""+q,Z.mode,tt),q.return=Z,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case A:return tt=yf(q.type,q.key,q.props,null,Z.mode,tt),rs(tt,q),tt.return=Z,tt;case w:return q=ym(q,Z.mode,tt),q.return=Z,q;case yt:return q=oo(q),gt(Z,q,tt)}if(Ft(q)||ct(q))return q=to(q,Z.mode,tt,null),q.return=Z,q;if(typeof q.then=="function")return gt(Z,Uf(q),tt);if(q.$$typeof===ot)return gt(Z,Rf(Z,q),tt);Nf(Z,q)}return null}function W(Z,q,tt,_t){var $t=q!==null?q.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return $t!==null?null:b(Z,q,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case A:return tt.key===$t?F(Z,q,tt,_t):null;case w:return tt.key===$t?K(Z,q,tt,_t):null;case yt:return tt=oo(tt),W(Z,q,tt,_t)}if(Ft(tt)||ct(tt))return $t!==null?null:st(Z,q,tt,_t,null);if(typeof tt.then=="function")return W(Z,q,Uf(tt),_t);if(tt.$$typeof===ot)return W(Z,q,Rf(Z,tt),_t);Nf(Z,tt)}return null}function nt(Z,q,tt,_t,$t){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get(tt)||null,b(q,Z,""+_t,$t);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case A:return Z=Z.get(_t.key===null?tt:_t.key)||null,F(q,Z,_t,$t);case w:return Z=Z.get(_t.key===null?tt:_t.key)||null,K(q,Z,_t,$t);case yt:return _t=oo(_t),nt(Z,q,tt,_t,$t)}if(Ft(_t)||ct(_t))return Z=Z.get(tt)||null,st(q,Z,_t,$t,null);if(typeof _t.then=="function")return nt(Z,q,tt,Uf(_t),$t);if(_t.$$typeof===ot)return nt(Z,q,tt,Rf(q,_t),$t);Nf(q,_t)}return null}function Ht(Z,q,tt,_t){for(var $t=null,we=null,le=q,de=q=0,An=null;le!==null&&de<tt.length;de++){le.index>de?(An=le,le=null):An=le.sibling;var Pe=W(Z,le,tt[de],_t);if(Pe===null){le===null&&(le=An);break}e&&le&&Pe.alternate===null&&n(Z,le),q=h(Pe,q,de),we===null?$t=Pe:we.sibling=Pe,we=Pe,le=An}if(de===tt.length)return r(Z,le),be&&xr(Z,de),$t;if(le===null){for(;de<tt.length;de++)le=gt(Z,tt[de],_t),le!==null&&(q=h(le,q,de),we===null?$t=le:we.sibling=le,we=le);return be&&xr(Z,de),$t}for(le=o(le);de<tt.length;de++)An=nt(le,Z,de,tt[de],_t),An!==null&&(e&&(Pe=An.alternate,Pe!==null&&le.delete(Pe.key===null?de:Pe.key)),q=h(An,q,de),we===null?$t=An:we.sibling=An,we=An);return e&&le.forEach(function(Ts){return n(Z,Ts)}),be&&xr(Z,de),$t}function ne(Z,q,tt,_t){if(tt==null)throw Error(a(151));for(var $t=null,we=null,le=q,de=q=0,An=null,Pe=tt.next();le!==null&&!Pe.done;de++,Pe=tt.next()){le.index>de?(An=le,le=null):An=le.sibling;var Ts=W(Z,le,Pe.value,_t);if(Ts===null){le===null&&(le=An);break}e&&le&&Ts.alternate===null&&n(Z,le),q=h(Ts,q,de),we===null?$t=Ts:we.sibling=Ts,we=Ts,le=An}if(Pe.done)return r(Z,le),be&&xr(Z,de),$t;if(le===null){for(;!Pe.done;de++,Pe=tt.next())Pe=gt(Z,Pe.value,_t),Pe!==null&&(q=h(Pe,q,de),we===null?$t=Pe:we.sibling=Pe,we=Pe);return be&&xr(Z,de),$t}for(le=o(le);!Pe.done;de++,Pe=tt.next())Pe=nt(le,Z,de,Pe.value,_t),Pe!==null&&(e&&(An=Pe.alternate,An!==null&&le.delete(An.key===null?de:An.key)),q=h(Pe,q,de),we===null?$t=Pe:we.sibling=Pe,we=Pe);return e&&le.forEach(function(u3){return n(Z,u3)}),be&&xr(Z,de),$t}function ye(Z,q,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===z&&tt.key===null&&tt.props.ref===void 0&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case A:t:{for(var $t=tt.key;q!==null;){if(q.key===$t){if($t=tt.type,$t===z){if(q.tag===7){r(Z,q.sibling),_t=c(q,tt.props.children),rs(_t,tt),_t.return=Z,Z=_t;break t}}else if(q.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===yt&&oo($t)===q.type){r(Z,q.sibling),_t=c(q,tt.props),rs(_t,tt),_t.return=Z,Z=_t;break t}r(Z,q);break}else n(Z,q);q=q.sibling}tt.type===z?(_t=to(tt.props.children,Z.mode,_t,tt.key),rs(_t,tt),_t.return=Z,Z=_t):(_t=yf(tt.type,tt.key,tt.props,null,Z.mode,_t),rs(_t,tt),_t.return=Z,Z=_t)}return S(Z);case w:t:{for($t=tt.key;q!==null;){if(q.key===$t)if(q.tag===4&&q.stateNode.containerInfo===tt.containerInfo&&q.stateNode.implementation===tt.implementation){r(Z,q.sibling),_t=c(q,tt.children||[]),_t.return=Z,Z=_t;break t}else{r(Z,q);break}else n(Z,q);q=q.sibling}_t=ym(tt,Z.mode,_t),_t.return=Z,Z=_t}return S(Z);case yt:return tt=oo(tt),ye(Z,q,tt,_t)}if(Ft(tt))return Ht(Z,q,tt,_t);if(ct(tt)){if($t=ct(tt),typeof $t!="function")throw Error(a(150));return tt=$t.call(tt),ne(Z,q,tt,_t)}if(typeof tt.then=="function")return ye(Z,q,Uf(tt),_t);if(tt.$$typeof===ot)return ye(Z,q,Rf(Z,tt),_t);Nf(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,q!==null&&q.tag===6?(r(Z,q.sibling),_t=c(q,tt),_t.return=Z,Z=_t):(r(Z,q),_t=Sm(tt,Z.mode,_t),_t.return=Z,Z=_t),S(Z)):r(Z,q)}return function(Z,q,tt,_t){try{Fu=0;var $t=ye(Z,q,tt,_t);return vl=null,$t}catch(le){if(le===gl||le===wf)throw le;var we=xi(29,le,null,Z.mode);return we.lanes=_t,we.return=Z,we}}}var uo=_S(!0),gS=_S(!1),ss=!1;function Um(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nm(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function os(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ls(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(He&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Sf(e),tS(e,null,r),n}return xf(e,o,n,r),Sf(e)}function Hu(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,j(e,r)}}function Lm(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?c=h=S:h=h.next=S,r=r.next}while(r!==null);h===null?c=h=n:h=h.next=n}else c=h=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Om=!1;function Gu(){if(Om){var e=_l;if(e!==null)throw e}}function Vu(e,n,r,o){Om=!1;var c=e.updateQueue;ss=!1;var h=c.firstBaseUpdate,S=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var F=b,K=F.next;F.next=null,S===null?h=K:S.next=K,S=F;var st=e.alternate;st!==null&&(st=st.updateQueue,b=st.lastBaseUpdate,b!==S&&(b===null?st.firstBaseUpdate=K:b.next=K,st.lastBaseUpdate=F))}if(h!==null){var gt=c.baseState;S=0,st=K=F=null,b=h;do{var W=b.lane&-536870913,nt=W!==b.lane;if(nt?(Ce&W)===W:(o&W)===W){W!==0&&W===ro&&(Om=!0),st!==null&&(st=st.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ht=e,ne=b;W=n;var ye=r;switch(ne.tag){case 1:if(Ht=ne.payload,typeof Ht=="function"){gt=Ht.call(ye,gt,W);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=ne.payload,W=typeof Ht=="function"?Ht.call(ye,gt,W):Ht,W==null)break t;gt=N({},gt,W);break t;case 2:ss=!0}}W=b.callback,W!==null&&(e.flags|=64,nt&&(e.flags|=8192),nt=c.callbacks,nt===null?c.callbacks=[W]:nt.push(W))}else nt={lane:W,tag:b.tag,payload:b.payload,callback:b.callback,next:null},st===null?(K=st=nt,F=gt):st=st.next=nt,S|=W;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;nt=b,b=nt.next,nt.next=null,c.lastBaseUpdate=nt,c.shared.pending=null}}while(!0);st===null&&(F=gt),c.baseState=F,c.firstBaseUpdate=K,c.lastBaseUpdate=st,h===null&&(c.shared.lanes=0),ms|=S,e.lanes=S,e.memoizedState=gt}}function vS(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function xS(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)vS(r[e],n)}var us=qt(null),Lf=qt(0);function SS(e,n){e=Ar,se(Lf,e),se(us,n),Ar=e|n.baseLanes}function Pm(){se(Lf,Ar),se(us,us.current)}function zm(){Ar=Lf.current,Xt(us),Xt(Lf)}var qn=qt(null),ei=null;function cs(e){var n=e.alternate;se(Yn,Yn.current&1),se(qn,e),ei===null&&(n===null||us.current!==null||n.memoizedState!==null)&&(ei=e)}function Im(e){se(Yn,Yn.current),se(qn,e),ei===null&&(ei=e)}function yS(e){e.tag===22?(se(Yn,Yn.current),se(qn,e),ei===null&&(ei=e)):fs()}function fs(){se(Yn,Yn.current),se(qn,qn.current)}function Ii(e){Xt(qn),ei===e&&(ei=null),Xt(Yn)}var Yn=qt(0);function Xu(e,n){se(qn,qn.current),se(Yn,n)}function Bm(e){Xt(Yn),Xt(qn),ei===e&&(ei=null)}function Of(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||sg(r)||og(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Mr=0,Se=null,Ke=null,Tn=null,Pf=!1,xl=!1,co=!1,zf=0,ku=0,Sl=null,Dw=0;function _n(){throw Error(a(321))}function Fm(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!zi(e[r],n[r]))return!1;return!0}function Hm(e,n,r,o,c,h){return Mr=h,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Pt.H=e===null||e.memoizedState===null?ay:ry,co=!1,h=r(o,c),co=!1,xl&&(h=ES(n,r,o,c)),MS(e),h}function MS(e){Pt.H=Xf;var n=Ke!==null&&Ke.next!==null;if(Mr=0,Tn=Ke=Se=null,Pf=!1,ku=0,Sl=null,n)throw Error(a(300));e===null||bn||(e=e.dependencies,e!==null&&Af(e)&&(bn=!0))}function ES(e,n,r,o){Se=e;var c=0;do{if(xl&&(Sl=null),ku=0,xl=!1,25<=c)throw Error(a(301));if(c+=1,Tn=Ke=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}Pt.H=Bw,h=n(r,o)}while(xl);return h}function Uw(){var e=Pt.H,n=e.useState()[0];return n=typeof n.then=="function"?qu(n):n,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(Se.flags|=1024),n}function Gm(){var e=zf!==0;return zf=0,e}function Vm(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Xm(e){if(Pf){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pf=!1}Mr=0,Tn=Ke=Se=null,xl=!1,ku=zf=0,Sl=null}function si(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?Se.memoizedState=Tn=e:Tn=Tn.next=e,Tn}function Sn(){if(Ke===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var n=Tn===null?Se.memoizedState:Tn.next;if(n!==null)Tn=n,Ke=e;else{if(e===null)throw Se.alternate===null?Error(a(467)):Error(a(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Tn===null?Se.memoizedState=Tn=e:Tn=Tn.next=e}return Tn}function If(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qu(e){var n=ku;return ku+=1,Sl===null&&(Sl=[]),e=dS(Sl,e,n),n=Se,(Tn===null?n.memoizedState:Tn.next)===null&&(n=n.alternate,Pt.H=n===null||n.memoizedState===null?ay:ry),e}function Bf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qu(e);if(e.$$typeof===V)return;if(e.$$typeof===ot)return kn(e)}throw Error(a(438,String(e)))}function km(e){var n=null,r=Se.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=Se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=If(),Se.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=xe;return n.index++,r}function Er(e,n){return typeof n=="function"?n(e):n}function Ff(e){var n=Sn();return qm(n,Ke,e)}function qm(e,n,r){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var S=c.next;c.next=h.next,h.next=S}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var b=S=null,F=null,K=n,st=!1;do{var gt=K.lane&-536870913;if(gt!==K.lane?(Ce&gt)===gt:(Mr&gt)===gt){var W=K.revertLane;if(W===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),gt===ro&&(st=!0);else if((Mr&W)===W){K=K.next,W===ro&&(st=!0);continue}else gt={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},F===null?(b=F=gt,S=h):F=F.next=gt,Se.lanes|=W,ms|=W;gt=K.action,co&&r(h,gt),h=K.hasEagerState?K.eagerState:r(h,gt)}else W={lane:gt,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},F===null?(b=F=W,S=h):F=F.next=W,Se.lanes|=gt,ms|=gt;K=K.next}while(K!==null&&K!==n);if(F===null?S=h:F.next=b,!zi(h,e.memoizedState)&&(bn=!0,st&&(r=_l,r!==null)))throw r;e.memoizedState=h,e.baseState=S,e.baseQueue=F,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ym(e){var n=Sn(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,c=r.pending,h=n.memoizedState;if(c!==null){r.pending=null;var S=c=c.next;do h=e(h,S.action),S=S.next;while(S!==c);zi(h,n.memoizedState)||(bn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function TS(e,n,r){var o=Se,c=Sn(),h=be;if(h){if(r===void 0)throw Error(a(407));r=r()}else r=n();var S=!zi((Ke||c).memoizedState,r);if(S&&(c.memoizedState=r,bn=!0),c=c.queue,jm(RS.bind(null,o,c,e),[e]),e=c.getSnapshot!==n||S||Tn!==null&&(Tn.memoizedState.tag&1)!==0,yl(e?9:8,{destroy:void 0},AS.bind(null,o,c,r,n),null),e){if(o.flags|=2048,tn===null)throw Error(a(349));h||(Mr&127)!==0||bS(o,n,r)}return r}function bS(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=Se.updateQueue,n===null?(n=If(),Se.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function AS(e,n,r,o){n.value=r,n.getSnapshot=o,CS(n)&&wS(e)}function RS(e,n,r){return r(function(){CS(n)&&wS(e)})}function CS(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!zi(e,r)}catch{return!0}}function wS(e){var n=$s(e,2);n!==null&&Ei(n,e,2)}function Wm(e){var n=si();if(typeof e=="function"){var r=e;if(e=r(),co){an(!0);try{r()}finally{an(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Er,lastRenderedState:e},n}function DS(e,n,r,o){return e.baseState=r,qm(e,Ke,typeof o=="function"?o:Er)}function Nw(e,n,r,o,c){if(Vf(e))throw Error(a(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};Pt.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,US(n,h)):(h.next=r.next,n.pending=r.next=h)}}function US(e,n){var r=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=Pt.T,S={};S.types=h!==null?h.types:null,Pt.T=S;try{var b=r(c,o),F=Pt.S;F!==null&&F(S,b),NS(e,n,b)}catch(K){Zm(e,n,K)}finally{h!==null&&S.types!==null&&(h.types=S.types),Pt.T=h}}else try{h=r(c,o),NS(e,n,h)}catch(K){Zm(e,n,K)}}function NS(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){LS(e,n,o)},function(o){return Zm(e,n,o)}):LS(e,n,r)}function LS(e,n,r){n.status="fulfilled",n.value=r,OS(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,US(e,r)))}function Zm(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,OS(n),n=n.next;while(n!==o)}e.action=null}function OS(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function PS(e,n){return n}function zS(e,n){if(be){var r=tn.formState;if(r!==null){t:{var o=Se;if(be){if(en){e:{for(var c=en,h=ta;c.nodeType!==8;){if(!h){c=null;break e}if(c=na(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){en=na(c.nextSibling),o=c.data==="F!";break t}}is(o)}o=!1}o&&(n=r[0])}}return r=si(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:PS,lastRenderedState:n},r.queue=o,r=ey.bind(null,Se,o),o.dispatch=r,o=Wm(!1),h=t_.bind(null,Se,!1,o.queue),o=si(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,r=Nw.bind(null,Se,c,h,r),c.dispatch=r,o.memoizedState=e,[n,r,!1]}function IS(e){var n=Sn();return BS(n,Ke,e)}function BS(e,n,r){if(n=qm(e,n,PS)[0],e=Ff(Er)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=qu(n)}catch(S){throw S===gl?wf:S}else o=n;n=Sn();var c=n.queue,h=c.dispatch;return r!==n.memoizedState&&(Se.flags|=2048,yl(9,{destroy:void 0},Lw.bind(null,c,r),null)),[o,h,e]}function Lw(e,n){e.action=n}function FS(e){var n=Sn(),r=Ke;if(r!==null)return BS(n,r,e);Sn(),n=n.memoizedState,r=Sn();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function yl(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=Se.updateQueue,n===null&&(n=If(),Se.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function HS(){return Sn().memoizedState}function Hf(e,n,r,o){var c=si();Se.flags|=e,c.memoizedState=yl(1|n,{destroy:void 0},r,o===void 0?null:o)}function Gf(e,n,r,o){var c=Sn();o=o===void 0?null:o;var h=c.memoizedState.inst;Ke!==null&&o!==null&&Fm(o,Ke.memoizedState.deps)?c.memoizedState=yl(n,h,r,o):(Se.flags|=e,c.memoizedState=yl(1|n,h,r,o))}function GS(e,n){Hf(8390656,8,e,n)}function jm(e,n){Gf(2048,8,e,n)}function Ow(e){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=If(),Se.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function VS(e){var n=Sn().memoizedState;return Ow({ref:n,nextImpl:e}),function(){if((He&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function XS(e,n){return Gf(4,2,e,n)}function kS(e,n){return Gf(4,4,e,n)}function qS(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function YS(e,n,r){r=r!=null?r.concat([e]):null,Gf(4,4,qS.bind(null,n,e),r)}function Km(){}function WS(e,n){var r=Sn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Fm(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function ZS(e,n){var r=Sn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Fm(n,o[1]))return o[0];if(o=e(),co){an(!0);try{e()}finally{an(!1)}}return r.memoizedState=[o,n],o}function Qm(e,n,r){return r===void 0||(Mr&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=aM(),Se.lanes|=e,ms|=e,r)}function jS(e,n,r,o){return zi(r,n)?r:us.current!==null?(e=Qm(e,r,o),zi(e,n)||(bn=!0),e):(Mr&106)===0||(Mr&1073741824)!==0&&(Ce&261930)===0?(bn=!0,e.memoizedState=r):(e=aM(),Se.lanes|=e,ms|=e,n)}function KS(e,n,r,o,c){var h=zt.p;zt.p=h!==0&&8>h?h:8;var S=Pt.T,b={};b.types=S!==null?S.types:null,Pt.T=b,t_(e,!1,n,r);try{var F=c(),K=Pt.S;if(K!==null&&K(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var st=ww(F,o);Yu(e,n,st,Gi(e))}else Yu(e,n,o,Gi(e))}catch(gt){Yu(e,n,{then:function(){},status:"rejected",reason:gt},Gi())}finally{zt.p=h,S!==null&&b.types!==null&&(S.types=b.types),Pt.T=S}}function Pw(){}function Jm(e,n,r,o){if(e.tag!==5)throw Error(a(476));var c=QS(e).queue;KS(e,c,n,G,r===null?Pw:function(){return JS(e),r(o)})}function QS(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Er,lastRenderedState:G},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Er,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function JS(e){var n=QS(e);n.next===null&&(n=e.alternate.memoizedState),Yu(e,n.next.queue,{},Gi())}function $m(){return kn(Hl)}function $S(){return Sn().memoizedState}function ty(){return Sn().memoizedState}function zw(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Gi();e=os(r);var o=ls(n,e,r);o!==null&&(Ei(o,n,r),Hu(o,n,r)),n={cache:Rm()},e.payload=n;return}n=n.return}}function Iw(e,n,r){var o=Gi();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Vf(e)?ny(n,r):(r=vm(e,n,r,o),r!==null&&(Ei(r,e,o),iy(r,n,o)))}function ey(e,n,r){var o=Gi();Yu(e,n,r,o)}function Yu(e,n,r,o){var c={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vf(e))ny(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,b=h(S,r);if(c.hasEagerState=!0,c.eagerState=b,zi(b,S))return xf(e,n,c,0),tn===null&&vf(),!1}catch{}if(r=vm(e,n,c,o),r!==null)return Ei(r,e,o),iy(r,n,o),!0}return!1}function t_(e,n,r,o){if(o={lane:2,revertLane:k_(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vf(e)){if(n)throw Error(a(479))}else n=vm(e,r,o,2),n!==null&&Ei(n,e,2)}function Vf(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function ny(e,n){xl=Pf=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function iy(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,j(e,r)}}var Xf={readContext:kn,use:Bf,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n,useEffectEvent:_n},ay={readContext:kn,use:Bf,useCallback:function(e,n){return si().memoizedState=[e,n===void 0?null:n],e},useContext:kn,useEffect:GS,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Hf(4194308,4,qS.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Hf(4194308,4,e,n)},useInsertionEffect:function(e,n){Hf(4,2,e,n)},useMemo:function(e,n){var r=si();n=n===void 0?null:n;var o=e();if(co){an(!0);try{e()}finally{an(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=si();if(r!==void 0){var c=r(n);if(co){an(!0);try{r(n)}finally{an(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Iw.bind(null,Se,e),[o.memoizedState,e]},useRef:function(e){var n=si();return e={current:e},n.memoizedState=e},useState:function(e){e=Wm(e);var n=e.queue,r=ey.bind(null,Se,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Km,useDeferredValue:function(e,n){var r=si();return Qm(r,e,n)},useTransition:function(){var e=Wm(!1);return e=KS.bind(null,Se,e.queue,!0,!1),si().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=Se,c=si();if(be){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),tn===null)throw Error(a(349));(Ce&127)!==0||bS(o,n,r)}c.memoizedState=r;var h={value:r,getSnapshot:n};return c.queue=h,GS(RS.bind(null,o,h,e),[e]),o.flags|=2048,yl(9,{destroy:void 0},AS.bind(null,o,h,r,n),null),r},useId:function(){var e=si(),n=tn.identifierPrefix;if(be){var r=Ga,o=Ha;r=(o&~(1<<32-fn(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=zf++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=Dw++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$m,useFormState:zS,useActionState:zS,useOptimistic:function(e){var n=si();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=t_.bind(null,Se,!0,r),r.dispatch=n,[e,n]},useMemoCache:km,useCacheRefresh:function(){return si().memoizedState=zw.bind(null,Se)},useEffectEvent:function(e){var n=si(),r={impl:e};return n.memoizedState=r,function(){if((He&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},ry={readContext:kn,use:Bf,useCallback:WS,useContext:kn,useEffect:jm,useImperativeHandle:YS,useInsertionEffect:XS,useLayoutEffect:kS,useMemo:ZS,useReducer:Ff,useRef:HS,useState:function(){return Ff(Er)},useDebugValue:Km,useDeferredValue:function(e,n){var r=Sn();return jS(r,Ke.memoizedState,e,n)},useTransition:function(){var e=Ff(Er)[0],n=Sn().memoizedState;return[typeof e=="boolean"?e:qu(e),n]},useSyncExternalStore:TS,useId:$S,useHostTransitionStatus:$m,useFormState:IS,useActionState:IS,useOptimistic:function(e,n){var r=Sn();return DS(r,Ke,e,n)},useMemoCache:km,useCacheRefresh:ty,useEffectEvent:VS},Bw={readContext:kn,use:Bf,useCallback:WS,useContext:kn,useEffect:jm,useImperativeHandle:YS,useInsertionEffect:XS,useLayoutEffect:kS,useMemo:ZS,useReducer:Ym,useRef:HS,useState:function(){return Ym(Er)},useDebugValue:Km,useDeferredValue:function(e,n){var r=Sn();return Ke===null?Qm(r,e,n):jS(r,Ke.memoizedState,e,n)},useTransition:function(){var e=Ym(Er)[0],n=Sn().memoizedState;return[typeof e=="boolean"?e:qu(e),n]},useSyncExternalStore:TS,useId:$S,useHostTransitionStatus:$m,useFormState:FS,useActionState:FS,useOptimistic:function(e,n){var r=Sn();return Ke!==null?DS(r,Ke,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:km,useCacheRefresh:ty,useEffectEvent:VS};function e_(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:N({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var n_={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=Gi(),c=os(o);c.payload=n,r!=null&&(c.callback=r),n=ls(e,c,o),n!==null&&(Ei(n,e,o),Hu(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=Gi(),c=os(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=ls(e,c,o),n!==null&&(Ei(n,e,o),Hu(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Gi(),o=os(r);o.tag=2,n!=null&&(o.callback=n),n=ls(e,o,r),n!==null&&(Ei(n,e,r),Hu(n,e,r))}};function sy(e,n,r,o,c,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!Nu(r,o)||!Nu(c,h):!0}function oy(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&n_.enqueueReplaceState(n,n.state,null)}function fo(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=N({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}function ly(e){gf(e)}function uy(e){console.error(e)}function cy(e){gf(e)}function kf(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function fy(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function i_(e,n,r){return r=os(r),r.tag=3,r.payload={element:null},r.callback=function(){kf(e,n)},r}function hy(e){return e=os(e),e.tag=3,e}function dy(e,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){fy(n,r,o)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){fy(n,r,o),typeof c!="function"&&(_s===null?_s=new Set([this]):_s.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Fw(e,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&io(n,r,c,!0),r=qn.current,r!==null){switch(r.tag){case 31:case 13:case 19:return ei===null?fh():r.alternate===null&&gn===0&&(gn=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===Df?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),G_(e,o,c)),!1;case 22:return r.flags|=65536,o===Df?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),G_(e,o,c)),!1}throw Error(a(435,r.tag))}return G_(e,o,c),fh(),!1}if(be)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Em&&(e=Error(a(422),{cause:o}),Pu(Qi(e,r)))):(o!==Em&&(n=Error(a(423),{cause:o}),Pu(Qi(n,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Qi(o,r),c=i_(e.stateNode,o,c),Lm(e,c),gn!==4&&(gn=2)),!1;var h=Error(a(520),{cause:o});if(h=Qi(h,r),tc===null?tc=[h]:tc.push(h),gn!==4&&(gn=2),n===null)return!0;o=Qi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=i_(r.stateNode,o,e),Lm(r,e),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(_s===null||!_s.has(h))))return r.flags|=65536,c&=-c,r.lanes|=c,c=hy(c),dy(c,e,r,o),Lm(r,c),!1;break;case 22:if(r.memoizedState!==null)return r.flags|=65536,!1}r=r.return}while(r!==null);return!1}var a_=Error(a(461)),bn=!1;function Dn(e,n,r,o){n.child=e===null?gS(n,null,r,o):uo(n,e.child,r,o)}function py(e,n,r,o,c){r=r.render;var h=n.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return ao(n),o=Hm(e,n,r,S,h,c),b=Gm(),e!==null&&!bn?(Vm(e,n,c),Tr(e,n,c)):(be&&b&&Ef(n),n.flags|=1,Dn(e,n,o,c),n.child)}function my(e,n,r,o,c){if(e===null){var h=r.type;return typeof h=="function"&&!xm(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,_y(e,n,h,o,c)):(e=yf(r.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!h_(e,c)){var S=h.memoizedProps;if(r=r.compare,r=r!==null?r:Nu,r(S,o)&&e.ref===n.ref)return Tr(e,n,c)}return n.flags|=1,e=vr(h,o),e.ref=n.ref,e.return=n,n.child=e}function _y(e,n,r,o,c){if(e!==null){var h=e.memoizedProps;if(Nu(h,o)&&e.ref===n.ref)if(bn=!1,n.pendingProps=o=h,h_(e,c))(e.flags&131072)!==0&&(bn=!0);else return n.lanes=e.lanes,Tr(e,n,c)}return r_(e,n,r,o,c)}function gy(e,n,r,o){var c=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~h}else o=0,n.child=null;return vy(e,n,h,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cf(n,h!==null?h.cachePool:null),h!==null?SS(n,h):Pm(),yS(n);else return o=n.lanes=536870912,vy(e,n,h!==null?h.baseLanes|r:r,r,o)}else h!==null?(Cf(n,h.cachePool),SS(n,h),fs(),n.memoizedState=null):(e!==null&&Cf(n,null),Pm(),fs());return Dn(e,n,c,r),n.child}function Wu(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vy(e,n,r,o,c){var h=wm();return h=h===null?null:{parent:En._currentValue,pool:h},n.memoizedState={baseLanes:r,cachePool:h},e!==null&&Cf(n,null),Pm(),yS(n),e!==null&&io(e,n,o,!0),n.childLanes=c,null}function qf(e,n){return n=Yf({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function xy(e,n,r){return uo(n,e.child,null,r),e=qf(n,n.pendingProps),e.flags|=2,Ii(n),n.memoizedState=null,e}function Hw(e,n,r){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(be){if(o.mode==="hidden")return e=qf(n,o),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Wu(null,e);if(Im(n),(e=en)?(e=qM(e,ta),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:es!==null?{id:Ha,overflow:Ga}:null,retryLane:536870912,hydrationErrors:null},r=nS(e),r.return=n,n.child=r,Ln=n,en=null)):e=null,e===null)throw is(n);return n.lanes=536870912,null}return qf(n,o)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if(Im(n),c)if(n.flags&256)n.flags&=-257,n=xy(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(bn||io(e,n,r,!1),c=(r&e.childLanes)!==0,bn||c){if(us.current===null){if(o=tn,o!==null&&(S=lt(o,r),S!==0&&S!==h.retryLane))throw h.retryLane=S,$s(e,S),Ei(o,e,S),a_;fh()}n=xy(e,n,r)}else e=h.treeContext,en=na(S.nextSibling),Ln=n,be=!0,ns=null,ta=!1,e!==null&&rS(n,e),n=qf(n,o),n.flags|=134221824;return n}return e=vr(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ml(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function r_(e,n,r,o,c){return ao(n),r=Hm(e,n,r,o,void 0,c),o=Gm(),e!==null&&!bn?(Vm(e,n,c),Tr(e,n,c)):(be&&o&&Ef(n),n.flags|=1,Dn(e,n,r,c),n.child)}function Sy(e,n,r,o,c,h){return ao(n),n.updateQueue=null,r=ES(n,o,r,c),MS(e),o=Gm(),e!==null&&!bn?(Vm(e,n,h),Tr(e,n,h)):(be&&o&&Ef(n),n.flags|=1,Dn(e,n,r,h),n.child)}function yy(e,n,r,o,c){if(ao(n),n.stateNode===null){var h=hl,S=r.contextType;typeof S=="object"&&S!==null&&(h=kn(S)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=n_,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Um(n),S=r.contextType,h.context=typeof S=="object"&&S!==null?kn(S):hl,h.state=n.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(e_(n,r,S,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&n_.enqueueReplaceState(h,h.state,null),Vu(n,o,h,c),Gu(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var b=n.memoizedProps,F=fo(r,b);h.props=F;var K=h.context,st=r.contextType;S=hl,typeof st=="object"&&st!==null&&(S=kn(st));var gt=r.getDerivedStateFromProps;st=typeof gt=="function"||typeof h.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,st||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b||K!==S)&&oy(n,h,o,S),ss=!1;var W=n.memoizedState;h.state=W,Vu(n,o,h,c),Gu(),K=n.memoizedState,b||W!==K||ss?(typeof gt=="function"&&(e_(n,r,gt,o),K=n.memoizedState),(F=ss||sy(n,r,F,o,W,K,S))?(st||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=K),h.props=o,h.state=K,h.context=S,o=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Nm(e,n),S=n.memoizedProps,st=fo(r,S),h.props=st,gt=n.pendingProps,W=h.context,K=r.contextType,F=hl,typeof K=="object"&&K!==null&&(F=kn(K)),b=r.getDerivedStateFromProps,(K=typeof b=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==gt||W!==F)&&oy(n,h,o,F),ss=!1,W=n.memoizedState,h.state=W,Vu(n,o,h,c),Gu();var nt=n.memoizedState;S!==gt||W!==nt||ss||e!==null&&e.dependencies!==null&&Af(e.dependencies)?(typeof b=="function"&&(e_(n,r,b,o),nt=n.memoizedState),(st=ss||sy(n,r,st,o,W,nt,F)||e!==null&&e.dependencies!==null&&Af(e.dependencies))?(K||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,nt,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,nt,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&W===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&W===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=F,o=st):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&W===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&W===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Ml(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=uo(n,e.child,null,c),n.child=uo(n,null,r,c)):Dn(e,n,r,c),n.memoizedState=h.state,e=n.child):e=Tr(e,n,c),e}function My(e,n,r,o){return eo(),n.flags|=256,Dn(e,n,r,o),n.child}var s_={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function o_(e){return{baseLanes:e,cachePool:fS()}}function l_(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=Hi),e}function Ey(e,n,r){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(Yn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(c?cs(n):fs(),(e=en)?(e=qM(e,ta),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:es!==null?{id:Ha,overflow:Ga}:null,retryLane:536870912,hydrationErrors:null},r=nS(e),r.return=n,n.child=r,Ln=n,en=null)):e=null,e===null)throw is(n);return og(e)?n.lanes=32:n.lanes=536870912,null}return h=o.children,o=o.fallback,c?(fs(),c=n.mode,h=Yf({mode:"hidden",children:h},c),o=to(o,c,r,null),h.return=n,o.return=n,h.sibling=o,n.child=h,o=n.child,o.memoizedState=o_(r),o.childLanes=l_(e,S,r),n.memoizedState=s_,Wu(null,o)):(cs(n),u_(n,h))}var b=e.memoizedState;if(b!==null){var F=b.dehydrated;if(F!==null)return Gw(e,n,h,S,o,F,b,r)}return c?(fs(),c=o.fallback,h=n.mode,b=e.child,F=b.sibling,o=vr(b,{mode:"hidden",children:o.children}),o.subtreeFlags=b.subtreeFlags&1206910976,F!==null?c=vr(F,c):(c=to(c,h,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,Wu(null,o),o=n.child,c=e.child.memoizedState,c===null?c=o_(r):(h=c.cachePool,h!==null?(b=En._currentValue,h=h.parent!==b?{parent:b,pool:b}:h):h=fS(),c={baseLanes:c.baseLanes|r,cachePool:h}),o.memoizedState=c,o.childLanes=l_(e,S,r),n.memoizedState=s_,Wu(e.child,o)):(cs(n),r=e.child,e=r.sibling,r=vr(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=r,n.memoizedState=null,r)}function u_(e,n){return n=Yf({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Yf(e,n){return e=xi(22,e,null,n),e.lanes=0,e}function Wf(e,n,r){return uo(n,e.child,null,r),e=u_(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Gw(e,n,r,o,c,h,S,b){if(r)return n.flags&256?(cs(n),n.flags&=-257,Wf(e,n,b)):n.memoizedState!==null?(fs(),n.child=e.child,n.flags|=128,null):(fs(),h=c.fallback,S=n.mode,c=Yf({mode:"visible",children:c.children},S),h=to(h,S,b,null),h.flags|=2,c.return=n,h.return=n,c.sibling=h,n.child=c,uo(n,e.child,null,b),c=n.child,c.memoizedState=o_(b),c.childLanes=l_(e,o,b),n.memoizedState=s_,Wu(null,c));if(cs(n),og(h)){if(o=h.nextSibling&&h.nextSibling.dataset,o)var F=o.dgst;return o=F,o!==""&&(c=Error(a(419)),c.stack="",c.digest=o,Pu({value:c,source:null,stack:null})),Wf(e,n,b)}if(bn||io(e,n,b,!1),o=(b&e.childLanes)!==0,bn||o){if(us.current!==null)return Wf(e,n,b);if(o=tn,o!==null&&(c=lt(o,b),c!==0&&c!==S.retryLane))throw S.retryLane=c,$s(e,c),Ei(o,e,c),a_;return sg(h)||fh(),Wf(e,n,b)}return sg(h)?(n.flags|=192,n.child=e.child,null):(e=S.treeContext,en=na(h.nextSibling),Ln=n,be=!0,ns=null,ta=!1,e!==null&&rS(n,e),n=u_(n,c.children),n.flags|=134221824,n)}function Ty(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),bf(e.return,n,r)}function by(e){for(var n=null;e!==null;){var r=e.alternate;r!==null&&Of(r)===null&&(n=e),e=e.sibling}return n}function Zf(e,n,r,o,c,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=r,S.tailMode=c,S.treeForkCount=h)}function c_(e){var n=e.child;for(e.child=null;n!==null;){var r=n.sibling;n.sibling=e.child,e.child=n,n=r}}function f_(e,n,r){var o=n.pendingProps,c=o.revealOrder,h=o.tail;o=o.children;var S=Yn.current;if(n.flags&128)return Xu(n,S),null;var b=(S&2)!==0;if(b?(S=S&1|2,n.flags|=128):S&=1,Xu(n,S),c==="backwards"&&e!==null?(c_(e),Dn(e,n,o,r),c_(e)):Dn(e,n,o,r),o=be?Ou:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ty(e,r,n);else if(e.tag===19)Ty(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":r=by(n.child),r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null,c_(n)),Zf(n,!0,c,null,h,o);break;case"unstable_legacy-backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Of(e)===null){n.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}Zf(n,!0,r,null,h,o);break;case"together":Zf(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:r=by(n.child),r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),Zf(n,!1,c,r,h,o)}return n.child}function Ay(e,n,r){var o=n.pendingProps;return as(n,n.type,o.value),Dn(e,n,o.children,r),n.child}function Tr(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),ms|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(io(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=vr(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=vr(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function h_(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Af(e)))}function Vw(e,n,r){switch(n.tag){case 3:I(n,n.stateNode.containerInfo),as(n,En,e.memoizedState.cache),eo();break;case 27:case 5:at(n);break;case 4:I(n,n.stateNode.containerInfo);break;case 10:as(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Im(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return cs(n),n.flags|=128,null;o=io(e,n,r,!1);var c=n.child.childLanes;return o||(r&c)!==0?Ey(e,n,r):(cs(n),e=Tr(e,n,r),e!==null?e.sibling:null)}cs(n);break;case 19:if(n.flags&128)return f_(e,n,r);if(c=(e.flags&128)!==0,o=(r&n.childLanes)!==0,o||(io(e,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return f_(e,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Xu(n,Yn.current),o)break;return null;case 22:return n.lanes=0,gy(e,n,r,n.pendingProps);case 24:as(n,En,e.memoizedState.cache)}return Tr(e,n,r)}function Ry(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)bn=!0;else{if(!h_(e,r)&&(n.flags&128)===0)return bn=!1,Vw(e,n,r);bn=(e.flags&131072)!==0}else bn=!1,be&&(n.flags&1048576)!==0&&aS(n,Ou,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=oo(n.elementType),n.type=e,typeof e=="function")xm(e)?(o=fo(e,o),n.tag=1,n=yy(null,n,e,o,r)):(n.tag=0,n=r_(null,n,e,o,r));else{if(e!=null){var c=e.$$typeof;if(c===X){n.tag=11,n=py(null,n,e,o,r);break t}else if(c===xt){n.tag=14,n=my(null,n,e,o,r);break t}else if(c===ot){n.tag=10,n.type=e,n=Ay(null,n,r);break t}}throw n=Rt(e)||e,Error(a(306,n,""))}}return n;case 0:return r_(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=fo(o,n.pendingProps),yy(e,n,o,c,r);case 3:t:{if(I(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,Nm(e,n),Vu(n,o,null,r);var S=n.memoizedState;if(o=S.cache,as(n,En,o),o!==h.cache&&Am(n,[En],r,!0),Gu(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=My(e,n,o,r);break t}else if(o!==c){c=Qi(Error(a(424)),n),Pu(c),n=My(e,n,o,r);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,en=na(e.firstChild),Ln=n,be=!0,ns=null,ta=!0,r=gS(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|134221824,r=r.sibling;else{if(eo(),o===c){n=Tr(e,n,r);break t}Dn(e,n,o,r)}n=n.child}return n;case 26:return Ml(e,n),e===null?(r=JM(n.type,null,n.pendingProps,null))?n.memoizedState=r:be||(n.stateNode=UM(n.type,n.pendingProps,Ne.current,n)):n.memoizedState=JM(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return at(n),e===null&&be&&(o=n.stateNode=ZM(n.type,n.pendingProps,Ne.current),Ln=n,ta=!0,c=en,xs(n.type)?(lg=c,en=na(o.firstChild)):en=c),Dn(e,n,n.pendingProps.children,r),Ml(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((c=o=en)&&(o=zD(o,n.type,n.pendingProps,ta),o!==null?(n.stateNode=o,Ln=n,en=na(o.firstChild),ta=!1,c=!0):c=!1),c||is(n)),at(n),c=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,$_(c,h)?o=null:S!==null&&$_(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Hm(e,n,Uw,null,null,r),Hl._currentValue=c),Ml(e,n),Dn(e,n,o,r),n.child;case 6:return e===null&&be&&((e=r=en)&&(r=ID(r,n.pendingProps,ta),r!==null?(n.stateNode=r,Ln=n,en=null,e=!0):e=!1),e||is(n)),null;case 13:return Ey(e,n,r);case 4:return I(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=uo(n,null,o,r):Dn(e,n,o,r),n.child;case 11:return py(e,n,n.type,n.pendingProps,r);case 7:return o=n.pendingProps,Ml(e,n),Dn(e,n,o,r),n.child;case 8:return Dn(e,n,n.pendingProps.children,r),n.child;case 12:return Dn(e,n,n.pendingProps.children,r),n.child;case 10:return Ay(e,n,r);case 9:return c=n.type._context,o=n.pendingProps.children,ao(n),c=kn(c),o=o(c),n.flags|=1,Dn(e,n,o,r),n.child;case 14:return my(e,n,n.type,n.pendingProps,r);case 15:return _y(e,n,n.type,n.pendingProps,r);case 19:return f_(e,n,r);case 31:return Hw(e,n,r);case 22:return gy(e,n,r,n.pendingProps);case 24:return ao(n),o=kn(En),e===null?(c=wm(),c===null&&(c=tn,h=Rm(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=r),c=h),n.memoizedState={parent:o,cache:c},Um(n),as(n,En,c)):((e.lanes&r)!==0&&(Nm(e,n),Vu(n,null,null,r),Gu()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),as(n,En,o)):(o=h.cache,as(n,En,o),o!==c.cache&&Am(n,[En],r,!0))),Dn(e,n,n.pendingProps.children,r),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=e===null?18882560:18874368:be&&Ef(n),e!==null&&e.memoizedProps.name!==o.name?n.flags|=4194816:Ml(e,n),Dn(e,n,o.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function br(e){e.flags|=4}function d_(e,n,r,o,c){var h;if((h=(e.mode&32)!==0)&&(h=r===null?nE(n,o):nE(n,o)&&(o.src!==r.src||o.srcSet!==r.srcSet)),h){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(lM())e.flags|=8192;else throw lo=Df,Dm}else e.flags&=-16777217}function Cy(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!iE(n))if(lM())e.flags|=8192;else throw lo=Df,Dm}function jf(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Qr():536870912,e.lanes|=n,Rl|=n)}function Zu(e,n){if(!be)switch(e.tailMode){case"visible":break;case"collapsed":for(var r=e.tail,o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null}}function nn(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&1206910976,o|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function Xw(e,n,r){var o=n.pendingProps;switch(Mm(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),yr(En),R(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ml(n)?br(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tm())),nn(n),null;case 26:var c=n.type,h=n.memoizedState;return e===null?(br(n),h!==null?(nn(n),Cy(n,h)):(nn(n),d_(n,c,null,o,r))):h?h!==e.memoizedState?(br(n),nn(n),Cy(n,h)):(nn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&br(n),nn(n),d_(n,c,e,o,r)),null;case 27:if(pt(n),r=Ne.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&br(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return nn(n),n.subtreeFlags&=-33554433,null}e=Lt.current,ml(n)?sS(n):(e=ZM(c,o,r),n.stateNode=e,br(n))}return nn(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&br(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return nn(n),n.subtreeFlags&=-33554433,null}if(h=Lt.current,ml(n))sS(n);else{var S=rc(Ne.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}h[Ot]=n,h[et]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(Zn(h,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&br(n)}}return nn(n),n.subtreeFlags&=-33554433,d_(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&br(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=Ne.current,ml(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Ot]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||RM(e.nodeValue,r)),e||is(n,!0)}else e=rc(e).createTextNode(o),e[Ot]=n,n.stateNode=e}return nn(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(o=ml(n),r!==null){if(e===null){if(!o)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Ot]=n}else eo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),e=!1}else r=Tm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(Ii(n),n):(Ii(n),null);if((n.flags&128)!==0)throw Error(a(558))}return nn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ml(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[Ot]=n}else eo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),c=!1}else c=Tm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Ii(n),n):(Ii(n),null)}return Ii(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),jf(n,n.updateQueue),nn(n),null);case 4:return R(),e===null&&Z_(n.stateNode.containerInfo),n.flags|=67108864,nn(n),null;case 10:return yr(n.type),nn(n),null;case 19:if(Bm(n),o=n.memoizedState,o===null)return nn(n),null;if(c=(n.flags&128)!==0,h=o.rendering,h===null)if(c)Zu(o,!1);else{if(gn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Of(e),h!==null){for(n.flags|=128,Zu(o,!1),e=h.updateQueue,n.updateQueue=e,jf(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)eS(r,e),r=r.sibling;return Xu(n,Yn.current&1|2),be&&xr(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&k()>oh&&(n.flags|=128,c=!0,Zu(o,!1),n.lanes=4194304)}else{if(!c)if(e=Of(h),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,jf(n,e),Zu(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!h.alternate&&!be)return nn(n),null}else 2*k()-o.renderingStartTime>oh&&r!==536870912&&(n.flags|=128,c=!0,Zu(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}if(o.tail!==null){e=o.tail;t:{for(r=e;r!==null;){if(r.alternate!==null){r=!1;break t}r=r.sibling}r=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=k(),e.sibling=null,h=Yn.current,h=c?h&1|2:h&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!r||be?Xu(n,h):(r=h,se(qn,n),se(Yn,r),ei===null&&(ei=n)),be&&xr(n,o.treeForkCount),e}return nn(n),null;case 22:case 23:return Ii(n),zm(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),r=n.updateQueue,r!==null&&jf(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&Xt(so),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),yr(En),nn(n),null;case 25:return null;case 30:return n.flags|=33554432,nn(n),null}throw Error(a(156,n.tag))}function kw(e,n){switch(Mm(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yr(En),R(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(Ii(n),n.alternate===null)throw Error(a(340));eo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ii(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));eo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Bm(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return R(),null;case 10:return yr(n.type),null;case 22:case 23:return Ii(n),zm(),e!==null&&Xt(so),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return yr(En),null;case 25:return null;default:return null}}function wy(e,n){switch(Mm(n),n.tag){case 3:yr(En),R();break;case 26:case 27:case 5:pt(n);break;case 4:R();break;case 31:n.memoizedState!==null&&Ii(n);break;case 13:Ii(n);break;case 19:Bm(n);break;case 10:yr(n.type);break;case 22:case 23:Ii(n),zm(),e!==null&&Xt(so);break;case 24:yr(En)}}function ju(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&e)===e){o=void 0;var h=r.create,S=r.inst;o=h(),S.destroy=o}r=r.next}while(r!==c)}}catch(b){Ye(n,n.return,b)}}function hs(e,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,c=n;var F=r,K=b;try{K()}catch(st){Ye(c,F,st)}}}o=o.next}while(o!==h)}}catch(st){Ye(n,n.return,st)}}function Dy(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{xS(n,r)}catch(o){Ye(e,e.return,o)}}}function Uy(e,n,r){r.props=fo(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Ye(e,n,o)}}function Va(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var c=e.stateNode,h=_r(e.memoizedProps,c);(c.ref===null||c.ref.name!==h)&&(c.ref=BM(h)),o=c.ref;break;case 7:if(e.stateNode===null){var S=new Vi(e);g(e.child,!1,OD,S,void 0,void 0),e.stateNode=S}o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(b){Ye(e,n,b)}}function Wn(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){Ye(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Ye(e,n,c)}else r.current=null}function Kf(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var r=0;r<n.length;r++)kM(e.stateNode,n[r])}function Ny(e){for(var n=e.return;n!==null&&(m_(n)&&kM(e.stateNode,n.stateNode),!p_(n));)n=n.return}function Ku(e){for(var n=e.return;n!==null&&(m_(n)&&PD(e.stateNode,n.stateNode),!p_(n));)n=n.return}function p_(e){return e.tag===5||e.tag===3||e.tag===27}function m_(e){return e&&e.tag===7&&e.stateNode!==null}function __(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){Ye(e,e.return,c)}}function g_(e,n,r){try{var o=e.stateNode;_D(o,e.type,r,n),o[et]=n}catch(c){Ye(e,e.return,c)}}function Ly(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xs(e.type)||e.tag===4}function v_(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ly(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function x_(e,n,r,o){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(c,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(c),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Fa)),Kf(e,o),Oe=!0;else if(c!==4&&(c===27&&(Kf(e,o),o=null,xs(e.type)&&(r=e.stateNode,n=null)),e=e.child,e!==null))for(x_(e,n,r,o),e=e.sibling;e!==null;)x_(e,n,r,o),e=e.sibling}function Qf(e,n,r,o){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?r.insertBefore(c,n):r.appendChild(c),Kf(e,o),Oe=!0;else if(c!==4&&(c===27&&(Kf(e,o),o=null,xs(e.type)&&(r=e.stateNode)),e=e.child,e!==null))for(Qf(e,n,r,o),e=e.sibling;e!==null;)Qf(e,n,r,o),e=e.sibling}function Oy(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Zn(n,o,r),n[Ot]=e,n[et]=r}catch(h){Ye(e,e.return,h)}}var Jf=!1,Bi=null;function Py(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Jf=!0)}var Xa=null;function zy(){var e=Xa;return Xa=null,e}var Si=0;function El(e,n,r,o,c){return Si=0,Iy(e.child,n,r,o,c)}function Iy(e,n,r,o,c){for(var h=!1;e!==null;){if(e.tag===5){var S=e.stateNode;if(o!==null){var b=ng(S);o.push(b),b.view&&(h=!0)}else h||ng(S).view&&(h=!0);Jf=!0,zM(S,Si===0?n:n+"_"+Si,r),Si++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||Iy(e.child,n,r,o,c)&&(h=!0));e=e.sibling}return h}function ka(e,n){for(;e!==null;)e.tag===5?IM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ka(e.child,n)),e=e.sibling}function $f(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&($f(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(a(544));var r=n.name;n=gr(n.default,n.share),n!=="none"&&(El(e,r,n,null,!1)||ka(e.child,!1))}e=e.sibling}}function S_(e,n){if(e.tag===30){var r=e.stateNode,o=e.memoizedProps,c=_r(o,r),h=gr(o.default,r.paired?o.share:o.enter);h!=="none"?El(e,c,h,null,!1)?($f(e),r.paired||n||Ul(e,o.onEnter)):ka(e.child,!1):$f(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)S_(e,n),e=e.sibling;else $f(e)}function y_(e){if(Bi!==null&&Bi.size!==0){var n=Bi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var r=e.memoizedProps,o=r.name;if(o!=null&&o!=="auto"){var c=n.get(o);if(c!==void 0){var h=gr(r.default,r.share);if(h!=="none"&&(El(e,o,h,null,!1)?(h=e.stateNode,c.paired=h,h.paired=c,Ul(e,r.onShare)):ka(e.child,!1)),n.delete(o),n.size===0)break}}}y_(e)}e=e.sibling}}}function M_(e){if(e.tag===30){var n=e.memoizedProps,r=_r(n,e.stateNode),o=Bi!==null?Bi.get(r):void 0,c=gr(n.default,o!==void 0?n.share:n.exit);c!=="none"&&(El(e,r,c,null,!1)?o!==void 0?(c=e.stateNode,o.paired=c,c.paired=o,Bi.delete(r),Ul(e,n.onShare)):Ul(e,n.onExit):ka(e.child,!1)),Bi!==null&&y_(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)M_(e),e=e.sibling;else Bi!==null&&y_(e)}function By(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=_r(n,e.stateNode);n=gr(n.default,n.update),e.flags&=-5,n!=="none"&&El(e,r,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&By(e);e=e.sibling}}function E_(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ka(e.child,!1))}E_(e)}e=e.sibling}}function th(e){if(e.tag===30)e.stateNode.paired=null,ka(e.child,!1),E_(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)th(e),e=e.sibling;else E_(e)}function Fy(e){for(e=e.child;e!==null;)e.tag===30?ka(e.child,!1):(e.subtreeFlags&33554432)!==0&&Fy(e),e=e.sibling}function T_(e,n,r,o,c,h,S){for(var b=!1;n!==null;){if(n.tag===5){var F=n.stateNode;if(h!==null&&Si<h.length){var K=h[Si],st=ng(F);(K.view||st.view)&&(b=!0);var gt;if(gt=(e.flags&4)===0)if(st.clip)gt=!0;else{gt=K.rect;var W=st.rect;gt=gt.y!==W.y||gt.x!==W.x||gt.height!==W.height||gt.width!==W.width}gt&&(e.flags|=4),st.abs?st=!K.abs:(K=K.rect,st=st.rect,st=K.height!==st.height||K.width!==st.width),st&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&zM(F,Si===0?r:r+"_"+Si,c),b&&(e.flags&4)!==0||(Xa===null&&(Xa=[]),Xa.push(F,Si===0?o:o+"_"+Si,n.memoizedProps)),Si++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&S?e.flags|=n.flags&32:T_(e,n.child,r,o,c,h,S)&&(b=!0));n=n.sibling}return b}function Hy(e,n){for(e=e.child;e!==null;){if(e.tag===30){var r=e.memoizedProps,o=e.stateNode,c=_r(r,o),h=gr(r.default,r.update),S;S=e.memoizedState,e.memoizedState=null,o=e;var b=e.child;Si=0,c=T_(o,b,c,c,h,S,!1),(e.flags&4)!==0&&c&&Ul(e,r.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Hy(e);e=e.sibling}}var On=!1,Xe=!1,qa=!1,b_=!1,Gy=typeof WeakSet=="function"?WeakSet:Set,Pn=null,Ya=!1,Qu=!1,eh=!1,A_=!1;function qw(e,n,r){if(e=e.containerInfo,Q_=Gl,e=qx(e),hm(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var h=c.anchorOffset,S=c.focusNode;c=c.focusOffset;try{o.nodeType,S.nodeType}catch{o=null;break t}var b=0,F=-1,K=-1,st=0,gt=0,W=e,nt=null;e:for(;;){for(var Ht;W!==o||h!==0&&W.nodeType!==3||(F=b+h),W!==S||c!==0&&W.nodeType!==3||(K=b+c),W.nodeType===3&&(b+=W.nodeValue.length),(Ht=W.firstChild)!==null;)nt=W,W=Ht;for(;;){if(W===e)break e;if(nt===o&&++st===h&&(F=b),nt===S&&++gt===c&&(K=b),(Ht=W.nextSibling)!==null)break;W=nt,nt=W.parentNode}W=Ht}o=F===-1||K===-1?null:{start:F,end:K}}else o=null}o=o||{start:0,end:0}}else o=null;for(J_={focusedElem:e,selectionRange:o},Gl=!1,r=(r&335544064)===r,Pn=n,n=r?9270:1024;Pn!==null;){if(e=Pn,r&&(o=e.deletions,o!==null))for(h=0;h<o.length;h++)r&&M_(o[h]);if(e.alternate===null&&(e.flags&2)!==0)r&&Py(e),nh(r);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&r&&M_(o),nh(r);continue}else if(o!==null&&o.memoizedState!==null){r&&Py(e),nh(r);continue}}o=e.child,(e.subtreeFlags&n)!==0&&o!==null?(o.return=e,Pn=o):(r&&By(e),nh(r))}}Bi=null}function nh(e){for(;Pn!==null;){var n=Pn,r=e,o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&o!==null){r=void 0,c=o.memoizedProps,o=o.memoizedState;var h=n.stateNode;try{var S=fo(n.type,c);r=h.getSnapshotBeforeUpdate(S,o),h.__reactInternalSnapshotBeforeUpdate=r}catch(b){Ye(n,n.return,b)}}break;case 3:if((c&1024)!==0){if(o=n.stateNode.containerInfo,r=o.nodeType,r===9)rg(o);else if(r===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":rg(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:r&&o!==null&&(r=_r(o.memoizedProps,o.stateNode),c=n.memoizedProps,c=gr(c.default,c.update),c!=="none"&&El(o,r,c,o.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(a(163))}if(o=n.sibling,o!==null){o.return=n.return,Pn=o;break}Pn=n.return}}function Vy(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Wa(e,r),o&4&&ju(5,r);break;case 1:if(Wa(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(S){Ye(r,r.return,S)}else{var c=fo(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ye(r,r.return,S)}}o&64&&Dy(r),o&512&&Va(r,r.return);break;case 3:if(Wa(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{xS(e,n)}catch(S){Ye(r,r.return,S)}}break;case 27:n===null&&o&4&&Oy(r);case 26:case 5:Wa(e,r),n===null&&o&4&&__(r),o&512&&Va(r,r.return);break;case 12:Wa(e,r);break;case 31:Wa(e,r),o&4&&Yy(e,r);break;case 13:Wa(e,r),o&4&&Wy(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=iD.bind(null,r),BD(e,r))));break;case 22:if(o=r.memoizedState!==null||On,!o){var h=n!==null&&n.memoizedState!==null||Xe;n=On,c=Xe,On=o,(Xe=h)&&!c?(o=2,(r.subtreeFlags&8772)!==0&&(o|=1),ya(e,r,o)):Wa(e,r),On=n,Xe=c}break;case 30:Wa(e,r),o&512&&Va(r,r.return);break;case 7:o&512&&Va(r,r.return);default:Wa(e,r)}}function R_(e,n){for(e=e.child;e!==null;)Xy(e,n),e=e.sibling}function Xy(e,n){switch(e.tag){case 5:case 26:try{var r=e.stateNode;if(n){var o=r.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var c=e.stateNode,h=e.memoizedProps.style,S=h!=null&&h.hasOwnProperty("display")?h.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(F){Ye(e,e.return,F)}C_(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Oe=!0}catch(F){Ye(e,e.return,F)}break;case 18:try{var b=e.stateNode;n?PM(b,!0):PM(e.stateNode,!1)}catch(F){Ye(e,e.return,F)}break;case 22:case 23:e.memoizedState===null&&R_(e,n);break;default:R_(e,n)}}function C_(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var r=e,o=n;switch(r.tag){case 4:Xy(r,o);break t;case 22:r.memoizedState===null&&C_(r,o);break t;default:C_(r,o)}}e=e.sibling}}function ky(e){var n=e.alternate;n!==null&&(e.alternate=null,ky(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&jt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,yi=!1;function xa(e,n,r){for(r=r.child;r!==null;)qy(e,n,r),r=r.sibling}function qy(e,n,r){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(Te,r)}catch{}switch(r.tag){case 26:Xe||Wn(r,n),xa(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&!Xe&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Xe||Wn(r,n),Ku(r);var o=on,c=yi;xs(r.type)&&(on=r.stateNode,yi=!1),xa(e,n,r),jM(r.stateNode,r.type,r.memoizedProps),on=o,yi=c;break;case 5:Xe||Wn(r,n),Ku(r);case 6:if(r.tag===6&&Ku(r),o=on,c=yi,on=null,xa(e,n,r),on=o,yi=c,on!==null)if(yi)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(r.stateNode),Oe=!0}catch(h){Ye(r,n,h)}else try{on.removeChild(r.stateNode),Oe=!0}catch(h){Ye(r,n,h)}break;case 18:on!==null&&(yi?(e=on,OM(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Vl(e)):OM(on,r.stateNode));break;case 4:o=on,c=yi,on=r.stateNode.containerInfo,yi=!0,xa(e,n,r),on=o,yi=c;break;case 0:case 11:case 14:case 15:hs(2,r,n),Xe||hs(4,r,n),xa(e,n,r);break;case 1:Xe||(Wn(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Uy(r,n,o)),xa(e,n,r);break;case 21:xa(e,n,r);break;case 22:Xe=(o=Xe)||r.memoizedState!==null,xa(e,n,r),Xe=o;break;case 30:Wn(r,n),xa(e,n,r);break;case 7:Xe||Wn(r,n),xa(e,n,r);break;default:xa(e,n,r)}}function Yy(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Vl(e)}catch(r){Ye(n,n.return,r)}}}function Wy(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vl(e)}catch(r){Ye(n,n.return,r)}}function Yw(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Gy),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Gy),n;default:throw Error(a(435,e.tag))}}function ih(e,n){var r=Yw(e);n.forEach(function(o){if(!r.has(o)){r.add(o);var c=aD.bind(null,e,o);o.then(c,c)}})}function oi(e,n,r){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var h=o[c],S=e,b=n,F=b;t:for(;F!==null;){switch(F.tag){case 27:if(xs(F.type)){on=F.stateNode,yi=!1;break t}break;case 5:on=F.stateNode,yi=!1;break t;case 3:case 4:on=F.stateNode.containerInfo,yi=!0;break t}F=F.return}if(on===null)throw Error(a(160));qy(S,b,h),on=null,yi=!1,S=h.alternate,S!==null&&(S.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zy(n,e,r),n=n.sibling}var Sa=null;function Zy(e,n,r){var o=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(o=e.updateQueue,o=o!==null?o.events:null,o!==null))for(var h=0;h<o.length;h++){var S=o[h];S.ref.impl=S.nextImpl}oi(n,e,r),li(e),c&4&&(hs(3,e,e.return),ju(3,e),hs(5,e,e.return));break;case 1:oi(n,e,r),li(e),c&512&&(Xe||o===null||Wn(o,o.return)),c&64&&On&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?n:r.concat(n))));break;case 26:if(h=Sa,oi(n,e,r),li(e),c&512&&(Xe||o===null||Wn(o,o.return)),c&4)if(c=o!==null?o.memoizedState:null,r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null)if(On)e.stateNode=UM(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,r=e.memoizedProps,c=h.ownerDocument||h;e:switch(n){case"title":o=c.getElementsByTagName("title")[0],(!o||o[ce]||o[Ot]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=c.createElement(n),c.head.insertBefore(o,c.querySelector("head > title"))),Zn(o,n,r),o[Ot]=e,ge(o),n=o;break t;case"link":if(h=eE("link","href",c).get(n+(r.href||""))){for(S=0;S<h.length;S++)if(o=h[S],o.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&o.getAttribute("rel")===(r.rel==null?null:r.rel)&&o.getAttribute("title")===(r.title==null?null:r.title)&&o.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){h.splice(S,1);break e}}o=c.createElement(n),Zn(o,n,r),c.head.appendChild(o);break;case"meta":if(h=eE("meta","content",c).get(n+(r.content||""))){for(S=0;S<h.length;S++)if(o=h[S],o.getAttribute("content")===(r.content==null?null:""+r.content)&&o.getAttribute("name")===(r.name==null?null:r.name)&&o.getAttribute("property")===(r.property==null?null:r.property)&&o.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&o.getAttribute("charset")===(r.charSet==null?null:r.charSet)){h.splice(S,1);break e}}o=c.createElement(n),Zn(o,n,r),c.head.appendChild(o);break;default:throw Error(a(468,n))}o[Ot]=e,ge(o),n=o}e.stateNode=n}else On||hg(h,e.type,e.stateNode);else e.stateNode=tE(h,r,e.memoizedProps);else c!==r?(c===null?(n=o.stateNode,n===null||Xe||n.parentNode.removeChild(n)):c.count--,r===null?On||hg(h,e.type,e.stateNode):tE(h,r,e.memoizedProps)):r===null&&e.stateNode!==null&&g_(e,e.memoizedProps,o.memoizedProps);break;case 27:oi(n,e,r),li(e),c&512&&(Xe||o===null||Wn(o,o.return)),o!==null&&c&4&&g_(e,e.memoizedProps,o.memoizedProps);break;case 5:if(h=qa,qa=!1,oi(n,e,r),qa=h,li(e),c&512&&(Xe||o===null||Wn(o,o.return)),e.flags&32){n=e.stateNode;try{rl(n,""),Oe=!0}catch(st){Ye(e,e.return,st)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,g_(e,n,o!==null?o.memoizedProps:n)),c&1024&&(b_=!0);break;case 6:if(oi(n,e,r),li(e),c&4){if(e.stateNode===null)throw Error(a(162));n=e.memoizedProps,r=e.stateNode;try{r.nodeValue=n,Oe=!0}catch(st){Ye(e,e.return,st)}}break;case 3:if(Oe=!1,vh=null,h=Sa,Sa=sc(n.containerInfo),oi(n,e,r),Sa=h,li(e),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Vl(n.containerInfo)}catch(st){Ye(e,e.return,st)}b_&&(b_=!1,jy(e)),Oe=!1;break;case 4:c=qa,qa=On,o=Eu(),h=Sa,Sa=sc(e.stateNode.containerInfo),oi(n,e,r),li(e),Sa=h,Oe&&Qu&&(eh=!0),Oe=o,qa=c;break;case 12:oi(n,e,r),li(e);break;case 31:oi(n,e,r),li(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ih(e,n)));break;case 13:oi(n,e,r),li(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(sh=k()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ih(e,n)));break;case 22:h=e.memoizedState!==null,S=o!==null&&o.memoizedState!==null;var b=On,F=Xe,K=qa;On=b||h,qa=K||h,Xe=F||S,oi(n,e,r),Xe=F,qa=K,On=b,li(e),c&8192&&(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,!h||o===null||S||On||Xe||(n=S||Xe,r=On,o=Xe,On=h||On,Xe=n,ds(e,2),On=r,Xe=o),!h&&qa||R_(e,h)),c&4&&(n=e.updateQueue,n!==null&&(r=n.retryQueue,r!==null&&(n.retryQueue=null,ih(e,r))));break;case 19:oi(n,e,r),li(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ih(e,n)));break;case 30:c&512&&(Xe||o===null||Wn(o,o.return)),c=Eu(),h=Qu,S=(r&335544064)===r,b=e.memoizedProps,Qu=S&&gr(b.default,b.update)!=="none",oi(n,e,r),li(e),S&&o!==null&&Oe&&(e.flags|=4),Qu=h,Oe=c;break;case 21:break;case 7:c&512&&(Xe||o===null||Wn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=e);default:oi(n,e,r),li(e)}}function li(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(Ly(o)){r=o;break}o=o.return}o=null;for(var c=e.return;c!==null;){if(m_(c)){var h=c.stateNode;o===null?o=[h]:o.push(h)}if(p_(c))break;c=c.return}var S=o;if(r==null)throw Error(a(160));switch(r.tag){case 27:var b=r.stateNode,F=v_(e);Qf(e,F,b,S);break;case 5:var K=r.stateNode;r.flags&32&&(rl(K,""),r.flags&=-33);var st=v_(e);Qf(e,st,K,S);break;case 3:case 4:var gt=r.stateNode.containerInfo,W=v_(e);x_(e,W,gt,S);break;default:throw Error(a(161))}}catch(nt){Ye(e,e.return,nt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function jy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;jy(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Gl=!0,n.reset(),Gl=!1),e=e.sibling}}function Tl(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Ky(n,e),n=n.sibling;else Hy(n)}function Ky(e,n){var r=e.alternate;if(r===null)S_(e,!1);else switch(e.tag){case 3:if(A_=Ya=!1,zy(),Tl(n,e),!Ya&&!eh){if(e=Xa,e!==null)for(var o=0;o<e.length;o+=3){r=e[o];var c=e[o+1];IM(r,e[o+2]),r=r.ownerDocument.documentElement,r!==null&&r.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),A_=!0}Xa=null;break;case 5:Tl(n,e);break;case 4:o=Ya,Ya=!1,Tl(n,e),Ya&&(eh=!0),Ya=o;break;case 22:e.memoizedState===null&&(r.memoizedState!==null?S_(e,!1):Tl(n,e));break;case 30:o=Ya,c=zy(),Ya=!1,Tl(n,e),Ya&&(e.flags|=4);var h=e.memoizedProps,S=e.stateNode;n=_r(h,S),S=_r(r.memoizedProps,S);var b=gr(h.default,h.update);b==="none"?n=!1:(h=r.memoizedState,r.memoizedState=null,r=e.child,Si=0,n=T_(e,r,n,S,b,h,!0),Si!==(h===null?0:h.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Ul(e,e.memoizedProps.onUpdate),Xa=c):c!==null&&(c.push.apply(c,Xa),Xa=c),Ya=(e.flags&32)!==0?!0:o;break;default:Tl(n,e)}}function Wa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vy(e,n.alternate,n),n=n.sibling}function ds(e,n){for(e=e.child;e!==null;){var r=e,o=n;switch(r.tag){case 0:case 11:case 14:case 15:hs(4,r,r.return),ds(r,o);break;case 1:Wn(r,r.return);var c=r.stateNode;typeof c.componentWillUnmount=="function"&&Uy(r,r.return,c),ds(r,o);break;case 27:(o&2)!==0&&jM(r.stateNode,r.type,r.memoizedProps);case 5:Wn(r,r.return),r.tag!==5&&r.tag!==27||Ku(r),ds(r,o);break;case 6:Ku(r);break;case 26:Wn(r,r.return),c=r.stateNode,r.memoizedState!==null||c===null||Xe||c.parentNode.removeChild(c),ds(r,o);break;case 22:r.memoizedState===null&&ds(r,o);break;case 30:Wn(r,r.return),ds(r,o);break;case 7:Wn(r,r.return);default:ds(r,o)}e=e.sibling}}function ya(e,n,r){for(r=(n.subtreeFlags&8772)!==0?r:r&-2,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,S=h.flags,b=(r&1)!==0;switch(h.tag){case 0:case 11:case 15:ya(c,h,r),ju(4,h);break;case 1:if(ya(c,h,r),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(st){Ye(o,o.return,st)}if(o=h,c=o.updateQueue,c!==null){var F=o.stateNode;try{var K=c.shared.hiddenCallbacks;if(K!==null)for(c.shared.hiddenCallbacks=null,c=0;c<K.length;c++)vS(K[c],F)}catch(st){Ye(o,o.return,st)}}b&&S&64&&Dy(h),Va(h,h.return);break;case 27:(r&2)!==0&&Oy(h);case 5:h.tag!==5&&h.tag!==27||Ny(h),ya(c,h,r),b&&o===null&&S&4&&__(h),Va(h,h.return);break;case 6:Ny(h);break;case 26:F=h.stateNode,h.memoizedState!==null||F===null||On||hg(sc(F.ownerDocument),h.type,F),ya(c,h,r),b&&o===null&&S&4&&__(h),Va(h,h.return);break;case 12:ya(c,h,r);break;case 31:ya(c,h,r),b&&S&4&&Yy(c,h);break;case 13:ya(c,h,r),b&&S&4&&Wy(c,h);break;case 22:h.memoizedState===null&&ya(c,h,r),Va(h,h.return);break;case 30:ya(c,h,r),Va(h,h.return);break;case 7:Va(h,h.return);default:ya(c,h,r)}n=n.sibling}}function w_(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&zu(r))}function D_(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&zu(e))}function ea(e,n,r,o){var c=(r&335544064)===r;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Qy(e,n,r,o),n=n.sibling;else c&&Fy(n)}function Qy(e,n,r,o){var c=(r&335544064)===r;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&th(n);var h=n.flags;switch(n.tag){case 0:case 11:case 15:ea(e,n,r,o),h&2048&&ju(9,n);break;case 1:ea(e,n,r,o);break;case 3:ea(e,n,r,o),c&&A_&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),h&2048&&(h=null,n.alternate!==null&&(h=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==h&&(n.refCount++,h!=null&&zu(h)));break;case 12:if(h&2048){ea(e,n,r,o),h=n.stateNode;try{var S=n.memoizedProps,b=S.id,F=S.onPostCommit;typeof F=="function"&&F(b,n.alternate===null?"mount":"update",h.passiveEffectDuration,-0)}catch(K){Ye(n,n.return,K)}}else ea(e,n,r,o);break;case 31:ea(e,n,r,o);break;case 13:ea(e,n,r,o);break;case 23:break;case 22:S=n.stateNode,b=n.alternate,n.memoizedState!==null?(c&&b!==null&&b.memoizedState===null&&th(b),S._visibility&2?ea(e,n,r,o):Ju(e,n)):(c&&b!==null&&b.memoizedState!==null&&th(n),S._visibility&2?ea(e,n,r,o):(S._visibility|=2,bl(e,n,r,o,(n.subtreeFlags&10256)!==0||!1))),h&2048&&w_(b,n);break;case 24:ea(e,n,r,o),h&2048&&D_(n.alternate,n);break;case 30:c&&(h=n.alternate,h!==null&&(ka(h.child,!0),ka(n.child,!0))),ea(e,n,r,o);break;default:ea(e,n,r,o)}}function bl(e,n,r,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,b=r,F=o,K=S.flags;switch(S.tag){case 0:case 11:case 15:bl(h,S,b,F,c),ju(8,S);break;case 23:break;case 22:var st=S.stateNode;S.memoizedState!==null?st._visibility&2?bl(h,S,b,F,c):Ju(h,S):(st._visibility|=2,bl(h,S,b,F,c)),c&&K&2048&&w_(S.alternate,S);break;case 24:bl(h,S,b,F,c),c&&K&2048&&D_(S.alternate,S);break;default:bl(h,S,b,F,c)}n=n.sibling}}function Ju(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,c=o.flags;switch(o.tag){case 22:Ju(r,o),c&2048&&w_(o.alternate,o);break;case 24:Ju(r,o),c&2048&&D_(o.alternate,o);break;default:Ju(r,o)}n=n.sibling}}var ho=8192;function po(e,n,r){if(e.subtreeFlags&ho)for(e=e.child;e!==null;)Jy(e,n,r),e=e.sibling}function Jy(e,n,r){switch(e.tag){case 26:po(e,n,r),e.flags&ho&&(e.memoizedState!==null?JD(r,Sa,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&rE(r,e)));break;case 5:po(e,n,r),e.flags&ho&&(e=e.stateNode,(n&335544128)===n&&rE(r,e));break;case 3:case 4:var o=Sa;Sa=sc(e.stateNode.containerInfo),po(e,n,r),Sa=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ho,ho=16777216,po(e,n,r),ho=o):po(e,n,r));break;case 30:if((e.flags&ho)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var c=e.stateNode;c.paired=null,Bi===null&&(Bi=new Map),Bi.set(o,c)}po(e,n,r);break;default:po(e,n,r)}}function $y(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function $u(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Pn=o,eM(o,e)}$y(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tM(e),e=e.sibling}function tM(e){switch(e.tag){case 0:case 11:case 15:$u(e),e.flags&2048&&hs(9,e,e.return);break;case 3:$u(e);break;case 12:$u(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ah(e)):$u(e);break;default:$u(e)}}function ah(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Pn=o,eM(o,e)}$y(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:hs(8,n,n.return),ah(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,ah(n));break;default:ah(n)}e=e.sibling}}function eM(e,n){for(;Pn!==null;){var r=Pn;switch(r.tag){case 0:case 11:case 15:hs(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:zu(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Pn=o;else t:for(r=e;Pn!==null;){o=Pn;var c=o.sibling,h=o.return;if(ky(o),o===r){Pn=null;break t}if(c!==null){c.return=h,Pn=c;break t}Pn=h}}}var Ww={getCacheForType:function(e){var n=kn(En),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return kn(En).controller.signal}},Zw=typeof WeakMap=="function"?WeakMap:Map,He=0,tn=null,Ae=null,Ce=0,qe=0,Fi=null,ps=!1,Al=!1,U_=!1,Ar=0,gn=0,ms=0,mo=0,rh=0,Hi=0,Rl=0,tc=null,Mi=null,N_=!1,sh=0,nM=0,oh=1/0,lh=null,_s=null,dn=0,Ma=null,_o=null,Za=0,L_=0,O_=null,iM=null,Cl=null,wl=null,Dl=null,ec=0,uh=null;function Gi(){return(He&2)!==0&&Ce!==0?Ce&-Ce:Pt.T!==null?k_():At()}function aM(){if(Hi===0)if((Ce&536870912)===0||be){var e=Zi;Zi<<=1,(Zi&3932160)===0&&(Zi=262144),Hi=e}else Hi=536870912;return e=qn.current,e!==null&&(e.flags|=32),Hi}function Ul(e,n){if(n!=null){var r=e.stateNode,o=r.ref;o===null&&(o=r.ref=BM(_r(e.memoizedProps,r))),wl===null&&(wl=[]),wl.push(n.bind(null,o))}}function Ei(e,n,r){(e===tn&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(Nl(e,0),gs(e,Ce,Hi,!1)),Ia(e,r),((He&2)===0||e!==tn)&&(e===tn&&((He&2)===0&&(mo|=r),gn===4&&gs(e,Ce,Hi,!1)),ja(e))}function rM(e,n,r){if((He&6)!==0)throw Error(a(327));var o=!r&&(n&127)===0&&(n&e.expiredLanes)===0||pa(e,n),c=o?Qw(e,n):z_(e,n,!0),h=o;do{if(c===0){Al&&!o&&gs(e,n,0,!1);break}else{if(r=e.current.alternate,h&&!jw(r)){c=z_(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=e;c=tc;var F=b.current.memoizedState.isDehydrated;if(F&&(Nl(b,S).flags|=256),S=z_(b,S,!1),S!==2&&S!==6){if(U_&&!F){b.errorRecoveryDisabledLanes|=h,mo|=h,c=4;break t}h=Mi,Mi=c,h!==null&&(Mi===null?Mi=h:Mi.push.apply(Mi,h))}c=S}if(h=!1,c!==2)continue}}if(c===1){Nl(e,0),gs(e,n,0,!0);break}t:{switch(o=e,h=c,h){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:gs(o,n,Hi,!ps);break t;case 2:Mi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(c=sh+300-k(),10<c)){if(gs(o,n,Hi,!ps),za(o,0,!0)!==0)break t;Za=n,o.timeoutHandle=eg(sM.bind(null,o,r,Mi,lh,N_,n,Hi,mo,Rl,ps,h,"Throttled",-0,0),c);break t}sM(o,r,Mi,lh,N_,n,Hi,mo,Rl,ps,h,null,-0,0)}}break}while(!0);ja(e)}function sM(e,n,r,o,c,h,S,b,F,K,st,gt,W,nt){e.timeoutHandle=-1;var Ht=n.subtreeFlags,ne=(h&335544064)===h;if(gt=null,(ne||Ht&8192||(Ht&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fa},Bi=null,Jy(n,h,gt),ne&&(Ht=gt,ne=e.containerInfo,ne=(ne.nodeType===9?ne:ne.ownerDocument).__reactViewTransition,ne!=null&&(Ht.count++,Ht.waitingForViewTransition=!0,Ht=uc.bind(Ht),ne.finished.then(Ht,Ht))),Ht=(h&62914560)===h?sh-k():(h&4194048)===h?nM-k():0,Ht=$D(gt,Ht),Ht!==null)){Za=h,e.cancelPendingCommit=Ht(pM.bind(null,e,n,h,r,o,c,S,b,F,K,st,gt,null,W,nt)),gs(e,h,S,!K);return}pM(e,n,h,r,o,c,S,b,F,K,st,gt)}function jw(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],h=c.getSnapshot;c=c.value;try{if(!zi(h(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gs(e,n,r,o){n=Zs(e,n),n&=~rh,n&=~mo,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-fn(c),S=1<<h;o[h]=-1,c&=~S}r!==0&&D(e,r,n)}function ch(){return(He&6)===0?(nc(0),!1):!0}function P_(){if(Ae!==null){if(qe===0)var e=Ae.return;else e=Ae,Sr=no=null,Xm(e),vl=null,Fu=0,e=Ae;for(;e!==null;)wy(e.alternate,e),e=e.return;Ae=null}}function Nl(e,n){var r=e.timeoutHandle;return r!==-1&&(e.timeoutHandle=-1,xD(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Za=0,P_(),tn=e,Ae=r=vr(e.current,null),Ce=n,qe=0,Fi=null,ps=!1,Al=pa(e,n),U_=!1,Rl=Hi=rh=mo=ms=gn=0,Mi=tc=null,N_=!1,Ar=Zs(e,n),vf(),r}function oM(e,n){Se=null,Pt.H=Xf,n===gl||n===wf?(n=pS(),qe=3):n===Dm?(n=pS(),qe=4):qe=n===a_?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Fi=n,Ae===null&&(gn=1,kf(e,Qi(n,e.current)))}function lM(){var e=qn.current;return e===null?!0:(Ce&4194048)===Ce?ei===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===ei:!1}function uM(){var e=Pt.H;return Pt.H=Xf,e===null?Xf:e}function cM(){var e=Pt.A;return Pt.A=Ww,e}function fh(){gn=4,ps||(Ce&4194048)!==Ce&&qn.current!==null||(Al=!0),(ms&134217727)===0&&(mo&134217727)===0||tn===null||gs(tn,Ce,Hi,!1)}function z_(e,n,r){var o=He;He|=2;var c=uM(),h=cM();(tn!==e||Ce!==n)&&(lh=null,Nl(e,n)),n=!1;var S=gn;t:do try{if(qe!==0&&Ae!==null){var b=Ae,F=Fi;switch(qe){case 8:P_(),S=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var K=qe;if(qe=0,Fi=null,Ll(e,b,F,K),r&&Al){S=0;break t}break;default:K=qe,qe=0,Fi=null,Ll(e,b,F,K)}}Kw(),S=gn;break}catch(st){oM(e,st)}while(!0);return n&&e.shellSuspendCounter++,Sr=no=null,He=o,Pt.H=c,Pt.A=h,Ae===null&&(tn=null,Ce=0,vf()),S}function Kw(){for(;Ae!==null;)fM(Ae)}function Qw(e,n){var r=He;He|=2;var o=uM(),c=cM();tn!==e||Ce!==n?(lh=null,oh=k()+500,Nl(e,n)):Al=pa(e,n);t:do try{if(qe!==0&&Ae!==null){n=Ae;var h=Fi;e:switch(qe){case 1:qe=0,Fi=null,Ll(e,n,h,1);break;case 2:case 9:if(hS(h)){qe=0,Fi=null,hM(n);break}n=function(){qe!==2&&qe!==9||tn!==e||(qe=7),ja(e)},h.then(n,n);break t;case 3:qe=7;break t;case 4:qe=5;break t;case 7:hS(h)?(qe=0,Fi=null,hM(n)):(qe=0,Fi=null,Ll(e,n,h,7));break;case 5:var S=null;switch(Ae.tag){case 26:S=Ae.memoizedState;case 5:case 27:var b=Ae;if(S?iE(S):b.stateNode.complete){qe=0,Fi=null;var F=b.sibling;if(F!==null)Ae=F;else{var K=b.return;K!==null?(Ae=K,hh(K)):Ae=null}break e}}qe=0,Fi=null,Ll(e,n,h,5);break;case 6:qe=0,Fi=null,Ll(e,n,h,6);break;case 8:P_(),gn=6;break t;default:throw Error(a(462))}}Jw();break}catch(st){oM(e,st)}while(!0);return Sr=no=null,Pt.H=o,Pt.A=c,He=r,Ae!==null?0:(tn=null,Ce=0,vf(),gn)}function Jw(){for(;Ae!==null&&!Bt();)fM(Ae)}function fM(e){var n=Ry(e.alternate,e,Ar);e.memoizedProps=e.pendingProps,n===null?hh(e):Ae=n}function hM(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=Sy(r,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=Sy(r,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:Xm(n);var o=n;o===Ln&&(be?(Tf(o),o.tag===5&&o.stateNode!=null&&(en=o.stateNode)):(Tf(o),be=!0));default:wy(r,n),n=Ae=eS(n,Ar),n=Ry(r,n,Ar)}e.memoizedProps=e.pendingProps,n===null?hh(e):Ae=n}function Ll(e,n,r,o){Sr=no=null,Xm(n),vl=null,Fu=0;var c=n.return;try{if(Fw(e,c,n,r,Ce)){gn=1,kf(e,Qi(r,e.current)),Ae=null;return}}catch(h){if(c!==null)throw Ae=c,h;gn=1,kf(e,Qi(r,e.current)),Ae=null;return}n.flags&32768?(be||o===1?e=!0:Al||(Ce&536870912)!==0?e=!1:(ps=e=!0,(o===2||o===9||o===3||o===6)&&(o=qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),dM(n,e)):hh(n)}function hh(e){var n=e;do{if((n.flags&32768)!==0){dM(n,ps);return}e=n.return;var r=Xw(n.alternate,n,Ar);if(r!==null){Ae=r;return}if(n=n.sibling,n!==null){Ae=n;return}Ae=n=e}while(n!==null);gn===0&&(gn=5)}function dM(e,n){do{var r=kw(e.alternate,e);if(r!==null){r.flags&=32767,Ae=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=r}while(e!==null);gn=6,Ae=null}function pM(e,n,r,o,c,h,S,b,F,K,st,gt){e.cancelPendingCommit=null;do dh();while(dn!==0);if((He&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));e===tn&&(Ae=tn=null,Ce=0),_o=n,Ma=e,Za=r,O_=c,iM=o,$w(e,n,r,S,b,F,gt)}}function $w(e,n,r,o,c,h,S){var b=n.lanes|n.childLanes;if(L_=b,b|=gm,pr(e,r,b,o,c,h),wl=null,(r&335544064)===r?(Dl=Rw(e),o=10262):(Dl=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,rD(Et,function(){return H_(),null})):(e.callbackNode=null,e.callbackPriority=0),Jf=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=Pt.T,Pt.T=null,c=zt.p,zt.p=2,h=He,He|=4;try{qw(e,n,r)}finally{He=h,zt.p=c,Pt.T=o}}dn=1,Jf?Cl=bD(S,e.containerInfo,Dl,I_,B_,eD,F_,H_,tD):(I_(),B_(),F_())}function tD(e){if(dn!==0){var n=Ma.onRecoverableError;n(e,{componentStack:null})}}function eD(){dn===3&&(dn=0,Ky(_o,Ma),dn=4)}function I_(){if(dn===1){dn=0;var e=Ma,n=_o,r=Za,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=Pt.T,Pt.T=null;var c=zt.p;zt.p=2;var h=He;He|=4;try{Qu=eh=!1,Zy(n,e,r),r=J_;var S=qx(e.containerInfo),b=r.focusedElem,F=r.selectionRange;if(S!==b&&b&&b.ownerDocument&&kx(b.ownerDocument.documentElement,b)){if(F!==null&&hm(b)){var K=F.start,st=F.end;if(st===void 0&&(st=K),"selectionStart"in b)b.selectionStart=K,b.selectionEnd=Math.min(st,b.value.length);else{var gt=b.ownerDocument||document,W=gt&&gt.defaultView||window;if(W.getSelection){var nt=W.getSelection(),Ht=b.textContent.length,ne=Math.min(F.start,Ht),ye=F.end===void 0?ne:Math.min(F.end,Ht);!nt.extend&&ne>ye&&(S=ye,ye=ne,ne=S);var Z=Xx(b,ne),q=Xx(b,ye);if(Z&&q&&(nt.rangeCount!==1||nt.anchorNode!==Z.node||nt.anchorOffset!==Z.offset||nt.focusNode!==q.node||nt.focusOffset!==q.offset)){var tt=gt.createRange();tt.setStart(Z.node,Z.offset),nt.removeAllRanges(),ne>ye?(nt.addRange(tt),nt.extend(q.node,q.offset)):(tt.setEnd(q.node,q.offset),nt.addRange(tt))}}}}for(gt=[],nt=b;nt=nt.parentNode;)nt.nodeType===1&&gt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var _t=gt[b];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Gl=!!Q_,J_=Q_=null}finally{He=h,zt.p=c,Pt.T=o}}e.current=n,dn=2}}function B_(){if(dn===2){dn=0;var e=Ma,n=_o,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=Pt.T,Pt.T=null;var o=zt.p;zt.p=2;var c=He;He|=4;try{Vy(e,n.alternate,n)}finally{He=c,zt.p=o,Pt.T=r}}dn=3}}function F_(){if(dn===4||dn===3){dn=0;var e=Cl;Cl=null,pe();var n=Ma,r=_o,o=Za,c=iM,h=(o&335544064)===o?10262:10256;if((r.subtreeFlags&h)!==0||(r.flags&h)!==0?dn=5:(dn=0,_o=Ma=null,mM(n,n.pendingLanes)),h=n.pendingLanes,h===0&&(_s=null),J(o),r=r.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(Te,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=Pt.T,h=zt.p,zt.p=2,Pt.T=null;try{for(var S=n.onRecoverableError,b=0;b<c.length;b++){var F=c[b];S(F.value,{componentStack:F.stack})}}finally{Pt.T=r,zt.p=h}}if(c=wl,S=Dl,Dl=null,c!==null&&(wl=null,S===null&&(S=[]),e!==null))for(F=0;F<c.length;F++)r=(0,c[F])(S),r!==void 0&&e.finished.finally(r);(Za&3)!==0&&dh(),ja(n),h=n.pendingLanes,(o&261930)!==0&&(h&42)!==0?n===uh?ec++:(ec=0,uh=n):(ec=0,uh=null),nc(0)}}function mM(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,zu(n)))}function dh(){return Cl!==null&&(Cl.skipTransition(),Cl=null),I_(),B_(),F_(),H_()}function H_(){if(dn!==5)return!1;var e=Ma,n=L_;L_=0;var r=J(Za),o=Pt.T,c=zt.p;try{zt.p=32>r?32:r,Pt.T=null,r=O_,O_=null;var h=Ma,S=Za;if(dn=0,_o=Ma=null,Za=0,(He&6)!==0)throw Error(a(331));var b=He;if(He|=4,tM(h.current),Qy(h,h.current,S,r),He=b,nc(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(Te,h)}catch{}return!0}finally{zt.p=c,Pt.T=o,mM(e,n)}}function _M(e,n,r){n=Qi(r,n),n=i_(e.stateNode,n,2),e=ls(e,n,2),e!==null&&(Ia(e,2),ja(e))}function Ye(e,n,r){if(e.tag===3)_M(e,e,r);else for(;n!==null;){if(n.tag===3){_M(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(_s===null||!_s.has(o))){e=Qi(r,e),r=hy(2),o=ls(n,r,2),o!==null&&(dy(r,o,n,e),Ia(o,2),ja(o));break}}n=n.return}}function G_(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Zw;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(U_=!0,c.add(r),e=nD.bind(null,e,n,r),n.then(e,e))}function nD(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,tn===e&&(Ce&r)===r&&((gn===4||gn===3&&(Ce&62914560)===Ce&&300>k()-sh)&&(He&2)===0?Nl(e,0):rh|=r,Rl===Ce&&(Rl=0)),ja(e)}function gM(e,n){n===0&&(n=Qr()),e=$s(e,n),e!==null&&(Ia(e,n),ja(e))}function iD(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),gM(e,r)}function aD(e,n){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),gM(e,r)}function rD(e,n){return ue(e,n)}var Ol=null,Pl=null,V_=!1,ph=!1,X_=!1,vs=0;function ja(e){e!==Pl&&e.next===null&&(Pl===null?Ol=Pl=e:Pl=Pl.next=e),ph=!0,V_||(V_=!0,oD())}function nc(e,n){if(!X_&&ph){X_=!0;do for(var r=!1,o=Ol;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var S=o.suspendedLanes,b=o.pingedLanes;h=(1<<31-fn(42|e)+1)-1,h&=c&~(S&~b),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,yM(o,h))}else h=Ce,h=za(o,o===tn?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||pa(o,h)||(r=!0,yM(o,h));o=o.next}while(r);X_=!1}}function sD(){vM()}function vM(){ph=V_=!1;var e=0;vs!==0&&vD()&&(e=vs);for(var n=k(),r=null,o=Ol;o!==null;){var c=o.next,h=xM(o,n);h===0?(o.next=null,r===null?Ol=c:r.next=c,c===null&&(Pl=r)):(r=o,(e!==0||(h&3)!==0)&&(ph=!0)),o=c}dn!==0&&dn!==5||nc(e),vs!==0&&(vs=0)}function xM(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-fn(h),b=1<<S,F=c[S];F===-1?((b&r)===0||(b&o)!==0)&&(c[S]=el(b,n)):F<=n&&(e.expiredLanes|=b),h&=~b}if(n=tn,r=Ce,r=za(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&te(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||pa(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&te(o),J(r)){case 2:case 8:r=Zt;break;case 32:r=Et;break;case 268435456:r=ee;break;default:r=Et}return o=SM.bind(null,e),r=ue(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&te(o),e.callbackPriority=2,e.callbackNode=null,2}function SM(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(dh()&&e.callbackNode!==r)return null;var o=Ce;return o=za(e,e===tn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(rM(e,o,n),xM(e,k()),e.callbackNode!=null&&e.callbackNode===r?SM.bind(null,e):null)}function yM(e,n){if(dh())return null;rM(e,n,!0)}function oD(){SD(function(){(He&6)!==0?ue(Nt,sD):vM()})}function k_(){if(vs===0){var e=ro;e===0&&(e=Oa,Oa<<=1,(Oa&261888)===0&&(Oa=256)),vs=e}return vs}function MM(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cf(e)}function lD(e,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var h=MM((c[et]||null).action),S=o.submitter;S&&(n=(n=S[et]||null)?MM(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var b=new pf("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(vs!==0){var F=new FormData(c,S);Jm(r,{pending:!0,data:F,method:c.method,action:h},null,F)}}else typeof h=="function"&&(b.preventDefault(),F=new FormData(c,S),Jm(r,{pending:!0,data:F,method:c.method,action:h},h,F))},currentTarget:c}]})}}for(var q_=0;q_<_m.length;q_++){var Y_=_m[q_],uD=Y_.toLowerCase(),cD=Y_[0].toUpperCase()+Y_.slice(1);va(uD,"on"+cD)}va(Zx,"onAnimationEnd"),va(jx,"onAnimationIteration"),va(Kx,"onAnimationStart"),va("dblclick","onDoubleClick"),va("focusin","onFocus"),va("focusout","onBlur"),va(xw,"onTransitionRun"),va(Sw,"onTransitionStart"),va(yw,"onTransitionCancel"),va(Qx,"onTransitionEnd"),$e("onMouseEnter",["mouseout","mouseover"]),$e("onMouseLeave",["mouseout","mouseover"]),$e("onPointerEnter",["pointerout","pointerover"]),$e("onPointerLeave",["pointerout","pointerover"]),hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ic="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fD=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ic));function EM(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var b=o[S],F=b.instance,K=b.currentTarget;if(b=b.listener,F!==h&&c.isPropagationStopped())break t;h=b,c.currentTarget=K;try{h(c)}catch(st){gf(st)}c.currentTarget=null,h=F}else for(S=0;S<o.length;S++){if(b=o[S],F=b.instance,K=b.currentTarget,b=b.listener,F!==h&&c.isPropagationStopped())break t;h=b,c.currentTarget=K;try{h(c)}catch(st){gf(st)}c.currentTarget=null,h=F}}}}function Re(e,n){var r=n[Mt];r===void 0&&(r=n[Mt]=new Set);var o=e+"__bubble";r.has(o)||(TM(n,e,2,!1),r.add(o))}function W_(e,n,r){var o=0;n&&(o|=4),TM(r,e,o,n)}var mh="_reactListening"+Math.random().toString(36).slice(2);function Z_(e){if(!e[mh]){e[mh]=!0,Fe.forEach(function(r){r!=="selectionchange"&&(fD.has(r)||W_(r,!1,e),W_(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mh]||(n[mh]=!0,W_("selectionchange",!1,n))}}function TM(e,n,r,o){switch(dE(n)){case 2:var c=i3;break;case 8:c=a3;break;default:c=pg}r=c.bind(null,n,r,e),c=void 0,!nm||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,r,{capture:!0,passive:c}):e.addEventListener(n,r,!0):c!==void 0?e.addEventListener(n,r,{passive:c}):e.addEventListener(n,r,!1)}function j_(e,n,r,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===c)break;if(S===4)for(S=o.return;S!==null;){var F=S.tag;if((F===3||F===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;b!==null;){if(S=re(b),S===null)return;if(F=S.tag,F===5||F===6||F===26||F===27){o=h=S;continue t}b=b.parentNode}}o=o.return}Tx(function(){var K=h,st=tm(r),gt=[];t:{var W=Jx.get(e);if(W!==void 0){var nt=pf,Ht=e;switch(e){case"keypress":if(hf(r)===0)break t;case"keydown":case"keyup":nt=j2;break;case"focusin":Ht="focus",nt=sm;break;case"focusout":Ht="blur",nt=sm;break;case"beforeblur":case"afterblur":nt=sm;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=Rx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=I2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=tw;break;case Zx:case jx:case Kx:nt=H2;break;case Qx:nt=nw;break;case"scroll":case"scrollend":nt=P2;break;case"wheel":nt=aw;break;case"copy":case"cut":case"paste":nt=V2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=wx;break;case"submit":nt=J2;break;case"toggle":case"beforetoggle":nt=sw}var ne=(n&4)!==0,ye=!ne&&(e==="scroll"||e==="scrollend"),Z=ne?W!==null?W+"Capture":null:W;ne=[];for(var q=K,tt;q!==null;){var _t=q;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||Z===null||(_t=bu(q,Z),_t!=null&&ne.push(ac(q,_t,tt))),ye)break;q=q.return}0<ne.length&&(W=new nt(W,Ht,null,r,st),gt.push({event:W,listeners:ne}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",nt&&r!==$p&&(Ht=r.relatedTarget||r.fromElement)&&(re(Ht)||Ht[ft]))break t;(W||nt)&&(Ht=st.window===st?st:(nt=st.ownerDocument)?nt.defaultView||nt.parentWindow:window,W?(nt=r.relatedTarget||r.toElement,W=K,nt=nt?re(nt):null,nt!==null&&(ye=u(nt),ne=nt.tag,nt!==ye||ne!==5&&ne!==27&&ne!==6)&&(nt=null)):(W=null,nt=K),W!==nt&&(ne=Rx,_t="onMouseLeave",Z="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(ne=wx,_t="onPointerLeave",Z="onPointerEnter",q="pointer"),ye=W==null?Ht:sn(W),tt=nt==null?Ht:sn(nt),Ht=new ne(_t,q+"leave",W,r,st),Ht.target=ye,Ht.relatedTarget=tt,_t=null,re(st)===K&&(ne=new ne(Z,q+"enter",nt,r,st),ne.target=tt,ne.relatedTarget=ye,_t=ne),ye=_t,ne=W&&nt?P(W,nt,hD):null,W!==null&&bM(gt,Ht,W,ne,!1),nt!==null&&ye!==null&&bM(gt,ye,nt,ne,!0)))}t:{if(W=K?sn(K):window,nt=W.nodeName&&W.nodeName.toLowerCase(),nt==="select"||nt==="input"&&W.type==="file")var $t=Ix;else if(Px(W))if(Bx)$t=_w;else{$t=pw;var we=dw}else nt=W.nodeName,!nt||nt.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?K&&Jp(K.elementType)&&($t=Ix):$t=mw;if($t&&($t=$t(e,K))){zx(gt,$t,r,st);break t}we&&we(e,W,K)}switch(we=K?sn(K):window,e){case"focusin":(Px(we)||we.contentEditable==="true")&&(ul=we,dm=K,Lu=null);break;case"focusout":Lu=dm=ul=null;break;case"mousedown":pm=!0;break;case"contextmenu":case"mouseup":case"dragend":pm=!1,Yx(gt,r,st);break;case"selectionchange":if(vw)break;case"keydown":case"keyup":Yx(gt,r,st)}var le;if(lm)t:{switch(e){case"compositionstart":var de="onCompositionStart";break t;case"compositionend":de="onCompositionEnd";break t;case"compositionupdate":de="onCompositionUpdate";break t}de=void 0}else ll?Lx(e,r)&&(de="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(de="onCompositionStart");de&&(Dx&&r.locale!=="ko"&&(ll||de!=="onCompositionStart"?de==="onCompositionEnd"&&ll&&(le=bx()):($r=st,im="value"in $r?$r.value:$r.textContent,ll=!0)),we=_h(K,de),0<we.length&&(de=new Cx(de,e,null,r,st),gt.push({event:de,listeners:we}),le?de.data=le:(le=Ox(r),le!==null&&(de.data=le)))),(le=lw?uw(e,r):cw(e,r))&&(de=_h(K,"onBeforeInput"),0<de.length&&(we=new Cx("onBeforeInput","beforeinput",null,r,st),gt.push({event:we,listeners:de}),we.data=le)),lD(gt,e,K,r,st)}EM(gt,n)})}function ac(e,n,r){return{instance:e,listener:n,currentTarget:r}}function _h(e,n){for(var r=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=bu(e,r),c!=null&&o.unshift(ac(e,c,h)),c=bu(e,n),c!=null&&o.push(ac(e,c,h))),e.tag===3)return o;e=e.return}return[]}function hD(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bM(e,n,r,o,c){for(var h=n._reactName,S=[];r!==null&&r!==o;){var b=r,F=b.alternate,K=b.stateNode;if(b=b.tag,F!==null&&F===o)break;b!==5&&b!==26&&b!==27||K===null||(F=K,c?(K=bu(r,h),K!=null&&S.unshift(ac(r,K,F))):c||(K=bu(r,h),K!=null&&S.push(ac(r,K,F)))),r=r.return}S.length!==0&&e.push({event:n,listeners:S})}var dD=/\r\n?/g,pD=/\u0000|\uFFFD/g;function AM(e){return(typeof e=="string"?e:""+e).replace(dD,`
`).replace(pD,"")}function RM(e,n){return n=AM(n),AM(e)===n}function We(e,n,r,o,c,h){switch(r){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||rl(e,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&rl(e,""+o);else return;break;case"className":nl(e,"class",o);break;case"tabIndex":nl(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":nl(e,r,o);break;case"style":Mx(e,o,h);return;case"data":if(n!=="object"){nl(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=cf(o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&We(e,n,"name",c.name,c,null),We(e,n,"formEncType",c.formEncType,c,null),We(e,n,"formMethod",c.formMethod,c,null),We(e,n,"formTarget",c.formTarget,c,null)):(We(e,n,"encType",c.encType,c,null),We(e,n,"method",c.method,c,null),We(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=cf(o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=Fa);return;case"onScroll":o!=null&&Re("scroll",e);return;case"onScrollEnd":o!=null&&Re("scrollend",e);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));h?.__html!==r&&(e.innerHTML=r)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=cf(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":Re("beforetoggle",e),Re("toggle",e),Ks(e,"popover",o);break;case"xlinkActuate":_a(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":_a(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":_a(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":_a(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":_a(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":_a(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":_a(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":_a(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":_a(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ks(e,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")r=L2.get(r)||r,Ks(e,r,o);else return}Oe=!0}function K_(e,n,r,o,c,h){switch(r){case"style":Mx(e,o,h);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));h?.__html!==r&&(e.innerHTML=r)}}break;case"children":if(typeof o=="string")rl(e,o);else if(typeof o=="number"||typeof o=="bigint")rl(e,""+o);else return;break;case"onScroll":o!=null&&Re("scroll",e);return;case"onScrollEnd":o!=null&&Re("scrollend",e);return;case"onClick":o!=null&&(e.onclick=Fa);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Vn.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),h=r.slice(2,c?r.length-7:void 0),n=e[et]||null,n=n!=null?n[r]:null,typeof n=="function"&&e.removeEventListener(h,n,c),typeof o=="function")){typeof n!="function"&&n!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(h,o,c);break t}Oe=!0,r in e?e[r]=o:o===!0?e.setAttribute(r,""):Ks(e,r,o)}return}Oe=!0}function Zn(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var o=!1,c=!1,h;for(h in r)if(r.hasOwnProperty(h)){var S=r[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:We(e,n,h,S,r,null)}}c&&We(e,n,"srcSet",r.srcSet,r,null),o&&We(e,n,"src",r.src,r,null);return;case"input":Re("invalid",e);var b=h=S=c=null,F=null,K=null;for(o in r)if(r.hasOwnProperty(o)){var st=r[o];if(st!=null)switch(o){case"name":c=st;break;case"type":S=st;break;case"checked":F=st;break;case"defaultChecked":K=st;break;case"value":h=st;break;case"defaultValue":b=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,n));break;default:We(e,n,o,st,r,null)}}vi(e,h,b,F,K,S,c,!1);return;case"select":Re("invalid",e),o=S=h=null;for(c in r)if(r.hasOwnProperty(c)&&(b=r[c],b!=null))switch(c){case"value":h=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:We(e,n,c,b,r,null)}n=h,r=S,e.multiple=!!o,n!=null?ji(e,!!o,n,!1):r!=null&&ji(e,!!o,r,!0);return;case"textarea":Re("invalid",e),h=c=o=null;for(S in r)if(r.hasOwnProperty(S)&&(b=r[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":c=b;break;case"children":h=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:We(e,n,S,b,r,null)}Sx(e,o,c,h);return;case"option":for(F in r)r.hasOwnProperty(F)&&(o=r[F],o!=null)&&(F==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":We(e,n,F,o,r,null));return;case"dialog":Re("beforetoggle",e),Re("toggle",e),Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(o=0;o<ic.length;o++)Re(ic[o],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in r)if(r.hasOwnProperty(K)&&(o=r[K],o!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:We(e,n,K,o,r,null)}return;default:if(Jp(n)){for(st in r)r.hasOwnProperty(st)&&(o=r[st],o!==void 0&&K_(e,n,st,o,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(o=r[b],o!=null&&We(e,n,b,o,r,null))}var mD={};function _D(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,S=null,b=null,F=null,K=null,st=null;for(nt in r){var gt=r[nt];if(r.hasOwnProperty(nt)&&gt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":F=gt;default:o.hasOwnProperty(nt)||We(e,n,nt,null,o,gt)}}for(var W in o){var nt=o[W];if(gt=r[W],o.hasOwnProperty(W)&&(nt!=null||gt!=null))switch(W){case"type":nt!==gt&&(Oe=!0),h=nt;break;case"name":nt!==gt&&(Oe=!0),c=nt;break;case"checked":nt!==gt&&(Oe=!0),K=nt;break;case"defaultChecked":nt!==gt&&(Oe=!0),st=nt;break;case"value":nt!==gt&&(Oe=!0),S=nt;break;case"defaultValue":nt!==gt&&(Oe=!0),b=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(a(137,n));break;default:nt!==gt&&We(e,n,W,nt,o,gt)}}al(e,S,b,F,K,st,h,c);return;case"select":nt=S=b=W=null;for(h in r)if(F=r[h],r.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":nt=F;default:o.hasOwnProperty(h)||We(e,n,h,null,o,F)}for(c in o)if(h=o[c],F=r[c],o.hasOwnProperty(c)&&(h!=null||F!=null))switch(c){case"value":h!==F&&(Oe=!0),W=h;break;case"defaultValue":h!==F&&(Oe=!0),b=h;break;case"multiple":h!==F&&(Oe=!0),S=h;default:h!==F&&We(e,n,c,h,o,F)}n=b,r=S,o=nt,W!=null?ji(e,!!r,W,!1):!!o!=!!r&&(n!=null?ji(e,!!r,n,!0):ji(e,!!r,r?[]:"",!1));return;case"textarea":nt=W=null;for(b in r)if(c=r[b],r.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:We(e,n,b,null,o,c)}for(S in o)if(c=o[S],h=r[S],o.hasOwnProperty(S)&&(c!=null||h!=null))switch(S){case"value":c!==h&&(Oe=!0),W=c;break;case"defaultValue":c!==h&&(Oe=!0),nt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==h&&We(e,n,S,c,o,h)}xx(e,W,nt);return;case"option":for(var Ht in r)W=r[Ht],r.hasOwnProperty(Ht)&&W!=null&&!o.hasOwnProperty(Ht)&&(Ht==="selected"?e.selected=!1:We(e,n,Ht,null,o,W));for(F in o)W=o[F],nt=r[F],o.hasOwnProperty(F)&&W!==nt&&(W!=null||nt!=null)&&(F==="selected"?(W!==nt&&(Oe=!0),e.selected=W&&typeof W!="function"&&typeof W!="symbol"):We(e,n,F,W,o,nt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in r)W=r[ne],r.hasOwnProperty(ne)&&W!=null&&!o.hasOwnProperty(ne)&&We(e,n,ne,null,o,W);for(K in o)if(W=o[K],nt=r[K],o.hasOwnProperty(K)&&W!==nt&&(W!=null||nt!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(a(137,n));break;default:We(e,n,K,W,o,nt)}return;default:if(Jp(n)){for(var ye in r)W=r[ye],r.hasOwnProperty(ye)&&W!==void 0&&!o.hasOwnProperty(ye)&&K_(e,n,ye,void 0,o,W);for(st in o)W=o[st],nt=r[st],!o.hasOwnProperty(st)||W===nt||W===void 0&&nt===void 0||K_(e,n,st,W,o,nt);return}}for(var Z in r)W=r[Z],r.hasOwnProperty(Z)&&W!=null&&!o.hasOwnProperty(Z)&&We(e,n,Z,null,o,W);for(gt in o)W=o[gt],nt=r[gt],!o.hasOwnProperty(gt)||W===nt||W==null&&nt==null||We(e,n,gt,W,o,nt)}function CM(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gD(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var c=r[o],h=c.transferSize,S=c.initiatorType,b=c.duration;if(h&&b&&CM(S)){for(S=0,b=c.responseEnd,o+=1;o<r.length;o++){var F=r[o],K=F.startTime;if(K>b)break;var st=F.transferSize,gt=F.initiatorType;st&&CM(gt)&&(F=F.responseEnd,S+=st*(F<b?1:(b-K)/(F-K)))}if(--o,n+=8*(h+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Q_=null,J_=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function wM(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function DM(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function UM(e,n,r,o){return r=rc(r).createElement(e),r[Ot]=o,r[et]=n,Zn(r,e,n),ge(r),r}function $_(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var tg=null;function vD(){var e=window.event;return e&&e.type==="popstate"?e===tg?!1:(tg=e,!0):(tg=null,!1)}var eg=typeof setTimeout=="function"?setTimeout:void 0,xD=typeof clearTimeout=="function"?clearTimeout:void 0,NM=typeof Promise=="function"?Promise:void 0,LM=typeof requestAnimationFrame=="function"?requestAnimationFrame:eg,SD=typeof queueMicrotask=="function"?queueMicrotask:typeof NM<"u"?function(e){return NM.resolve(null).then(e).catch(yD)}:eg;function yD(e){setTimeout(function(){throw e})}function xs(e){return e==="head"}function OM(e,n){var r=n,o=0;do{var c=r.nextSibling;if(e.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(c),Vl(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")ug(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,ug(r);for(var h=r.firstChild;h;){var S=h.nextSibling,b=h.nodeName;h[ce]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=S}}else r==="body"&&ug(e.ownerDocument.body);r=c}while(r);Vl(n)}function PM(e,n){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function zM(e,n,r){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,r!=null&&(e.style.viewTransitionClass=r),r=getComputedStyle(e),r.display==="inline"){if(n=e.getClientRects(),n.length===1)var o=1;else for(var c=o=0;c<n.length;c++){var h=n[c];0<h.width&&0<h.height&&o++}o===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+r.paddingTop,e.marginBottom="-"+r.paddingBottom)}}function IM(e,n){e=e.style,n=n.style;var r=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=r==null||typeof r=="boolean"?"":(""+r).trim(),r=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=r==null||typeof r=="boolean"?"":(""+r).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(r=n.display,e.display=r==null||typeof r=="boolean"?"":r,r=n.margin,r!=null?e.margin=r:(r=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=r==null||typeof r=="boolean"?"":r,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function MD(e,n,r){return r=r.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=r.innerHeight&&e.left<=r.innerWidth}}function ng(e){var n=e.getBoundingClientRect(),r=getComputedStyle(e);return MD(n,r,e)}function ED(e){return e.documentElement.clientHeight}function TD(e){this.addEventListener("load",e),this.addEventListener("error",e)}function bD(e,n,r,o,c,h,S,b,F){var K=n.nodeType===9?n:n.ownerDocument;try{var st=K.startViewTransition({update:function(){var W=K.defaultView,nt=W.navigation&&W.navigation.transition,Ht=K.fonts.status;o();var ne=[];if(Ht==="loaded"&&(ED(K),K.fonts.status==="loading"&&ne.push(K.fonts.ready)),Ht=ne.length,e!==null)for(var ye=e.suspenseyImages,Z=0,q=0;q<ye.length;q++){var tt=ye[q];if(!tt.complete){var _t=tt.getBoundingClientRect();if(0<_t.bottom&&0<_t.right&&_t.top<W.innerHeight&&_t.left<W.innerWidth){if(Z+=aE(tt),Z>xh){ne.length=Ht;break}tt=new Promise(TD.bind(tt)),ne.push(tt)}}}if(0<ne.length)return W=Promise.race([Promise.all(ne),new Promise(function($t){return setTimeout($t,500)})]).then(c,c),(nt?Promise.allSettled([nt.finished,W]):W).then(h,h);if(c(),nt)return nt.finished.then(h,h);h()},types:r});K.__reactViewTransition=st;var gt=[];return st.ready.then(function(){for(var W=K.documentElement.getAnimations({subtree:!0}),nt=0;nt<W.length;nt++){var Ht=W[nt],ne=Ht.effect,ye=ne.pseudoElement;if(ye!=null&&ye.startsWith("::view-transition")){gt.push(Ht),Ht=ne.getKeyframes();for(var Z=ye=void 0,q=!0,tt=0;tt<Ht.length;tt++){var _t=Ht[tt],$t=_t.width;if(ye===void 0)ye=$t;else if(ye!==$t){q=!1;break}if($t=_t.height,Z===void 0)Z=$t;else if(Z!==$t){q=!1;break}delete _t.width,delete _t.height,_t.transform==="none"&&delete _t.transform}q&&ye!==void 0&&Z!==void 0&&(ne.setKeyframes(Ht),q=getComputedStyle(ne.target,ne.pseudoElement),q.width!==ye||q.height!==Z)&&(q=Ht[0],q.width=ye,q.height=Z,q=Ht[Ht.length-1],q.width=ye,q.height=Z,ne.setKeyframes(Ht))}}S()},function(W){K.__reactViewTransition===st&&(K.__reactViewTransition=null);try{typeof W=="object"&&W!==null&&W.name==="InvalidStateError"&&(W.message==="View transition was skipped because document visibility state is hidden."||W.message==="Skipping view transition because document visibility state has become hidden."||W.message==="Skipping view transition because viewport size changed."||W.message==="Transition was aborted because of invalid state")&&(W=null),W!==null&&F(W)}finally{o(),c(),S()}}),st.finished.finally(function(){for(var W=0;W<gt.length;W++)gt[W].cancel();K.__reactViewTransition===st&&(K.__reactViewTransition=null),b()}),st}catch{return o(),c(),S(),null}}function go(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}go.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:N({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},go.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,r=e.getAnimations({subtree:!0}),o=[],c=0;c<r.length;c++){var h=r[c].effect;h!==null&&h.target===e&&h.pseudoElement===n&&o.push(r[c])}return o},go.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function BM(e){return{name:e,group:new go("group",e),imagePair:new go("image-pair",e),old:new go("old",e),new:new go("new",e)}}function Vi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Vi.prototype.addEventListener=function(e,n,r){var o=null,c=null;if(!(r!=null&&typeof r!="boolean"&&(o=r.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var h=this._eventListeners;if(HM(h,e,n,r)===-1){var S=this,b=n;r!=null&&typeof r!="boolean"&&r.once===!0&&(b=function(F){S.removeEventListener(e,n,r),typeof n=="function"?n.call(this,F):n.handleEvent(F)}),o!==null&&(c=S.removeEventListener.bind(S,e,n,r),o.addEventListener("abort",c,{once:!0}),c=o.removeEventListener.bind(o,"abort",c)),o=zl(r),h.push({type:e,listener:n,optionsOrUseCapture:r,attachedListener:b,cleanup:c}),g(this._fragmentFiber.child,!1,AD,e,b,o)}this._eventListeners=h}};function AD(e,n,r,o){return M(e).addEventListener(n,r,o),!1}Vi.prototype.removeEventListener=function(e,n,r){var o=this._eventListeners;if(o!==null&&(n=HM(o,e,n,r),n!==-1)){var c=o[n];r=c.attachedListener;var h=c.cleanup;c=zl(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,RD,e,r,c),o.splice(n,1),h!==null&&h()}};function RD(e,n,r,o){return M(e).removeEventListener(n,r,o),!1}function zl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function FM(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function HM(e,n,r,o){if(e.length===0)return-1;o=FM(o);for(var c=0;c<e.length;c++){var h=e[c];if(h.type===n&&h.listener===r&&FM(h.optionsOrUseCapture)===o)return c}return-1}Vi.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var r=this._eventListeners;if(r!==null&&0<r.length||!e.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(r)for(var c=0;c<r.length;c++){var h=r[c];o.addEventListener(h.type,h.attachedListener,zl(h.optionsOrUseCapture))}if(n.appendChild(o),e=o.dispatchEvent(e),r)for(c=0;c<r.length;c++)h=r[c],o.removeEventListener(h.type,h.attachedListener,zl(h.optionsOrUseCapture));return n.removeChild(o),e}return n.dispatchEvent(e)},Vi.prototype.focus=function(e){g(this._fragmentFiber.child,!0,GM,e,void 0,void 0)};function GM(e,n){return e.tag===6?!1:(e=M(e),FD(e,n))}Vi.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,ig,n,void 0,void 0);for(var r=n.length-1;0<=r&&!GM(n[r],e);r--);};function ig(e,n){return n.push(e),!1}Vi.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=M(e),e=rc(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,CD,e,void 0,void 0))};function CD(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}Vi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,wD,e,void 0,void 0)};function wD(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}Vi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,DD,e,void 0,void 0);for(var r=n=0;r<Ea.length;r++){var o=Ea[r];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):Ea[n++]=o}Ea.length=n}};function DD(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Ea=[],ag=!1;function UD(e,n,r){Ea.push({fragmentInstance:e,observer:n,instance:r}),ag||(ag=!0,HD(function(){ag=!1;var o=Ea;Ea=[];for(var c=0;c<o.length;c++){var h=o[c];h.observer.unobserve(h.instance)}}))}Vi.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,ND,e,void 0,void 0),e};function ND(e,n){if(e.tag===6){e=e.stateNode;var r=e.ownerDocument.createRange();r.selectNodeContents(e),n.push.apply(n,r.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}Vi.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},Vi.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var r=[];g(this._fragmentFiber.child,!1,ig,r,void 0,void 0);var o=M(n);if(r.length===0){if(r=o,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(r=n)}n=this._fragmentFiber;var c=o=r.compareDocumentPosition(e);return r===e?c=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(r=T(n)[1],r===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(r).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(r[0]),c=M(r[r.length-1]);var h=y(this._fragmentFiber)?n.parentElement:o;if(h==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=h.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,h=h.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=n.compareDocumentPosition(e),b=c.compareDocumentPosition(e),F=S&Node.DOCUMENT_POSITION_CONTAINED_BY||b&Node.DOCUMENT_POSITION_CONTAINED_BY;return b=o&&h&&S&Node.DOCUMENT_POSITION_FOLLOWING&&b&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===e||h&&c===e||F||b?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===e||!h&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||LD(n,this._fragmentFiber,r[0],r[r.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function LD(e,n,r,o,c){var h=re(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(r=!!h)t:{for(;h!==null;){if(h.tag===7&&(h===n||h.alternate===n)){r=!0;break t}h=h.return}r=!1}return r}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(h===null)return h=c.ownerDocument,c===h||c===h.documentElement||c===h.body;t:{for(h=n,n=v(n);h!==null;){if(!(h.tag!==5&&h.tag!==3&&h.tag!==27||h!==n&&h.alternate!==n)){h=!0;break t}h=h.return}h=!1}return h}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!h)&&!(n=h===r)&&(n=P(r,h,O),n===null?n=!1:(g(n,!0,U,h,r),h=x,x=null,n=h!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!h)&&!(n=h===o)&&(n=P(o,h,O),n===null?n=!1:(g(n,!0,C,h,o),h=x,L=x=null,n=h!==null)),n):!1}function VM(e,n){var r=e.ownerDocument.createRange();r.selectNodeContents(e),e=r.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Vi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(a(566));var n=[];g(this._fragmentFiber.child,!1,ig,n,void 0,void 0);var r=e!==!1;if(n.length===0){var o=T(this._fragmentFiber);if(o=r?o[1]||o[0]||v(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=M(o),VM(e,r);return}if(o=M(o),o.nodeType!==9){if(o.nodeType===11){r="host"in o?o.host:null,r!==null&&r.scrollIntoView(e);return}o.scrollIntoView(e)}}for(o=r?n.length-1:0;o!==(r?-1:n.length);){var c=n[o];c.tag===6?(c=M(c),VM(c,r)):M(c).scrollIntoView(e),o+=r?-1:1}};function OD(e,n){return e=M(e),XM(e,n),!1}function XM(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function kM(e,n){var r=n._eventListeners;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];e.addEventListener(c.type,c.attachedListener,zl(c.optionsOrUseCapture))}e.nodeType!==3&&(r=n._observers,r!==null&&r.forEach(function(h){for(var S=0,b=0;b<Ea.length;b++){var F=Ea[b];(F.fragmentInstance!==n||F.observer!==h||F.instance!==e)&&(Ea[S++]=F)}Ea.length=S,h.observe(e)}),XM(e,n))}function PD(e,n){var r=n._eventListeners;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];e.removeEventListener(c.type,c.attachedListener,zl(c.optionsOrUseCapture))}e.nodeType!==3&&(r=n._observers,r!==null&&r.forEach(function(h){typeof h.rootMargin=="string"?UD(n,h,e):h.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function rg(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":rg(r),jt(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function zD(e,n,r,o){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ce])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=na(e.nextSibling),e===null)break}return null}function ID(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=na(e.nextSibling),e===null))return null;return e}function qM(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=na(e.nextSibling),e===null))return null;return e}function sg(e){return e.data==="$?"||e.data==="$~"}function og(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function BD(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function na(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var lg=null;function YM(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return na(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function WM(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function FD(e,n){function r(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",r,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",r,!0)}return o}function HD(e){LM(function(){LM(function(n){return e(n)})})}function ZM(e,n,r){switch(n=rc(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function jM(e,n,r){for(var o in r){var c=r[o];r.hasOwnProperty(o)&&c!=null&&We(e,n,o,null,mD,c)}r.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Fa&&(e.onclick=null),jt(e)}function ug(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);jt(e)}var ia=new Map,KM=new Set;function sc(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Rr=zt.d;zt.d={f:GD,r:VD,D:XD,C:kD,L:qD,m:YD,X:ZD,S:WD,M:jD};function GD(){var e=Rr.f(),n=ch();return e||n}function VD(e){var n=oe(e);n!==null&&n.tag===5&&n.type==="form"?JS(n):Rr.r(e)}var Il=typeof document>"u"?null:document;function QM(e,n,r){var o=Il;if(o&&typeof n=="string"&&n){var c=ti(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),KM.has(c)||(KM.add(c),e={rel:e,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Zn(n,"link",e),ge(n),o.head.appendChild(n)))}}function XD(e){Rr.D(e),QM("dns-prefetch",e,null)}function kD(e,n){Rr.C(e,n),QM("preconnect",e,n)}function qD(e,n,r){Rr.L(e,n,r);var o=Il;if(o&&e&&n){var c='link[rel="preload"][as="'+ti(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+ti(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+ti(r.imageSizes)+'"]')):c+='[href="'+ti(e)+'"]';var h=c;switch(n){case"style":h=Bl(e);break;case"script":h=Fl(e)}if(!(ia.has(h)||(e=N({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),ia.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(oc(h))||n==="script"&&o.querySelector(lc(h))))){var S=o.createElement("link");Zn(S,"link",e),n==="style"&&(S[Jt]=!0,S.onload=S.onerror=function(){ai(S)}),ge(S),o.head.appendChild(S)}}}function YD(e,n){Rr.m(e,n);var r=Il;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ti(o)+'"][href="'+ti(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Fl(e)}if(!ia.has(h)&&(e=N({rel:"modulepreload",href:e},n),ia.set(h,e),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(lc(h)))return}o=r.createElement("link"),Zn(o,"link",e),ge(o),r.head.appendChild(o)}}}function WD(e,n,r){Rr.S(e,n,r);var o=Il;if(o&&e){var c=_e(o).hoistableStyles,h=Bl(e);n=n||"default";var S=c.get(h);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(oc(h)))b.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":n},r),(r=ia.get(h))&&cg(e,r);var F=S=o.createElement("link");ge(F),Zn(F,"link",e),F._p=new Promise(function(K,st){F.onload=K,F.onerror=st}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,gh(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:b},c.set(h,S)}}}function ZD(e,n){Rr.X(e,n);var r=Il;if(r&&e){var o=_e(r).hoistableScripts,c=Fl(e),h=o.get(c);h||(h=r.querySelector(lc(c)),h||(e=N({src:e,async:!0},n),(n=ia.get(c))&&fg(e,n),h=r.createElement("script"),ge(h),Zn(h,"link",e),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function jD(e,n){Rr.M(e,n);var r=Il;if(r&&e){var o=_e(r).hoistableScripts,c=Fl(e),h=o.get(c);h||(h=r.querySelector(lc(c)),h||(e=N({src:e,async:!0,type:"module"},n),(n=ia.get(c))&&fg(e,n),h=r.createElement("script"),ge(h),Zn(h,"link",e),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function JM(e,n,r,o){var c=(c=Ne.current)?sc(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(r=Bl(r.href),n=_e(c).hoistableStyles,o=n.get(r),o||(o={type:"style",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Bl(r.href);var h=_e(c).hoistableStyles,S=h.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=c.querySelector(oc(e)))?h._p||(S.instance=h,S.state.loading=5):(h=ia.get(e),h||(h={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ia.set(e,h)),KD(c,e,h,S.state))),n&&o===null)throw Error(a(528,""));return S}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(r=Fl(r),n=_e(c).hoistableScripts,o=n.get(r),o||(o={type:"script",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Bl(e){return'href="'+ti(e)+'"'}function oc(e){return'link[rel="stylesheet"]['+e+"]"}function $M(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function KD(e,n,r,o){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Jt]!==!0){o.loading=1;return}}else n=e.createElement("link"),n[Jt]=!0,n.onload=n.onerror=ai.bind(null,n),Zn(n,"link",r),ge(n),e.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function Fl(e){return'[src="'+ti(e)+'"]'}function lc(e){return"script[async]"+e}function tE(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ti(r.href)+'"]');if(o)return n.instance=o,ge(o),o;var c=N({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ge(o),Zn(o,"style",c),gh(o,r.precedence,e),n.instance=o;case"stylesheet":c=Bl(r.href);var h=e.querySelector(oc(c));if(h)return n.state.loading|=4,n.instance=h,ge(h),h;o=$M(r),(c=ia.get(c))&&cg(o,c),h=(e.ownerDocument||e).createElement("link"),ge(h);var S=h;return S._p=new Promise(function(b,F){S.onload=b,S.onerror=F}),Zn(h,"link",o),n.state.loading|=4,gh(h,r.precedence,e),n.instance=h;case"script":return h=Fl(r.src),(c=e.querySelector(lc(h)))?(n.instance=c,ge(c),c):(o=r,(c=ia.get(h))&&(o=N({},r),fg(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),ge(c),Zn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,gh(o,r.precedence,e));return n.instance}function gh(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===n)h=b;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function cg(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function fg(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var vh=null;function eE(e,n,r){if(vh===null){var o=new Map,c=vh=new Map;c.set(r,o)}else c=vh,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var h=r[c];if(!(h[ce]||h[Ot]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var b=o.get(S);b?b.push(h):o.set(S,[h])}}return o}function hg(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function QD(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function nE(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function iE(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function aE(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function rE(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=aE(n),e.suspenseyImages.push(n)),e=t3.bind(e),n.decode().then(e,e))}function JD(e,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var c=Bl(o.href),h=n.querySelector(oc(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=uc.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=h,ge(h);return}h=n.ownerDocument||n,o=$M(o),(c=ia.get(c))&&cg(o,c),h=h.createElement("link"),ge(h);var S=h;S._p=new Promise(function(b,F){S.onload=b,S.onerror=F}),Zn(h,"link",o),r.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=uc.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var xh=0;function $D(e,n){return e.stylesheets&&e.count===0&&yh(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&yh(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&xh===0&&(xh=62500*gD());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yh(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>xh?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function sE(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)yh(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function uc(){this.count--,sE(this)}function t3(){this.imgCount--,sE(this)}var Sh=null;function yh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Sh=new Map,n.forEach(e3,e),Sh=null,uc.call(e))}function e3(e,n){if(!(n.state.loading&4)){var r=Sh.get(e);if(r)var o=r.get(null);else{r=new Map,Sh.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var S=c[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),o=S)}o&&r.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),h=r.get(S)||o,h===o&&r.set(null,c),r.set(S,c),this.count++,o=uc.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Hl={$$typeof:ot,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function n3(e,n,r,o,c,h,S,b,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=js(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.hiddenUpdates=js(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.transitionTypes=null,this.incompleteTransitions=new Map}function oE(e,n,r,o,c,h,S,b,F,K,st,gt){return e=new n3(e,n,r,S,F,K,st,gt,b),n=1,h===!0&&(n|=24),h=xi(3,null,null,n),e.current=h,h.stateNode=e,n=Rm(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},Um(h),e}function lE(e){return e?(e=hl,e):hl}function uE(e,n,r,o,c,h){c=lE(c),o.context===null?o.context=c:o.pendingContext=c,o=os(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=ls(e,o,n),r!==null&&(Ei(r,e,n),Hu(r,e,n))}function cE(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function dg(e,n){cE(e,n),(e=e.alternate)&&cE(e,n)}function fE(e){if(e.tag===13||e.tag===31){var n=$s(e,67108864);n!==null&&Ei(n,e,67108864),dg(e,67108864)}}function hE(e){if(e.tag===13||e.tag===31){var n=Gi();n=ut(n);var r=$s(e,n);r!==null&&Ei(r,e,n),dg(e,n)}}var Gl=!0;function i3(e,n,r,o){var c=Pt.T;Pt.T=null;var h=zt.p;try{zt.p=2,pg(e,n,r,o)}finally{zt.p=h,Pt.T=c}}function a3(e,n,r,o){var c=Pt.T;Pt.T=null;var h=zt.p;try{zt.p=8,pg(e,n,r,o)}finally{zt.p=h,Pt.T=c}}function pg(e,n,r,o){if(Gl){var c=mg(o);if(c===null)j_(e,n,o,Mh,r),pE(e,o);else if(s3(c,e,n,r,o))o.stopPropagation();else if(pE(e,o),n&4&&-1<r3.indexOf(e)){for(;c!==null;){var h=oe(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Gn(h.pendingLanes);if(S!==0){var b=h;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var F=1<<31-fn(S);b.entanglements[1]|=F,S&=~F}ja(h),(He&6)===0&&(oh=k()+500,nc(0))}}break;case 31:case 13:b=$s(h,2),b!==null&&Ei(b,h,2),ch(),dg(h,2)}if(h=mg(o),h===null&&j_(e,n,o,Mh,r),h===c)break;c=h}c!==null&&o.stopPropagation()}else j_(e,n,o,null,r)}}function mg(e){return e=tm(e),_g(e)}var Mh=null;function _g(e){if(Mh=null,e=re(e),e!==null){var n=u(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===31){if(e=d(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Mh=e,null}function dE(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case Nt:return 2;case Zt:return 8;case Et:case vt:return 32;case ee:return 268435456;default:return 32}default:return 32}}var gg=!1,Ss=null,ys=null,Ms=null,cc=new Map,fc=new Map,Es=[],r3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pE(e,n){switch(e){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":ys=null;break;case"mouseover":case"mouseout":Ms=null;break;case"pointerover":case"pointerout":cc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fc.delete(n.pointerId)}}function hc(e,n,r,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=oe(n),n!==null&&fE(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function s3(e,n,r,o,c){switch(n){case"focusin":return Ss=hc(Ss,e,n,r,o,c),!0;case"dragenter":return ys=hc(ys,e,n,r,o,c),!0;case"mouseover":return Ms=hc(Ms,e,n,r,o,c),!0;case"pointerover":var h=c.pointerId;return cc.set(h,hc(cc.get(h)||null,e,n,r,o,c)),!0;case"gotpointercapture":return h=c.pointerId,fc.set(h,hc(fc.get(h)||null,e,n,r,o,c)),!0}return!1}function mE(e){var n=re(e.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,Vt(e.priority,function(){hE(r)});return}}else if(n===31){if(n=d(r),n!==null){e.blockedOn=n,Vt(e.priority,function(){hE(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eh(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=mg(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);$p=o,r.target.dispatchEvent(o),$p=null}else return n=oe(r),n!==null&&fE(n),e.blockedOn=r,!1;n.shift()}return!0}function _E(e,n,r){Eh(e)&&r.delete(n)}function o3(){gg=!1,Ss!==null&&Eh(Ss)&&(Ss=null),ys!==null&&Eh(ys)&&(ys=null),Ms!==null&&Eh(Ms)&&(Ms=null),cc.forEach(_E),fc.forEach(_E)}function Th(e,n){e.blockedOn===n&&(e.blockedOn=null,gg||(gg=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,o3)))}var bh=null;function gE(e){bh!==e&&(bh=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){bh===e&&(bh=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(_g(o||r)===null)continue;break}var h=oe(r);h!==null&&(e.splice(n,3),n-=3,Jm(h,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function Vl(e){function n(F){return Th(F,e)}Ss!==null&&Th(Ss,e),ys!==null&&Th(ys,e),Ms!==null&&Th(Ms,e),cc.forEach(n),fc.forEach(n);for(var r=0;r<Es.length;r++){var o=Es[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Es.length&&(r=Es[0],r.blockedOn===null);)mE(r),r.blockedOn===null&&Es.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],h=r[o+1],S=c[et]||null;if(typeof h=="function")S||gE(r);else if(S){var b=null;if(h&&h.hasAttribute("formAction")){if(c=h,S=h[et]||null)b=S.formAction;else if(_g(c)!==null)continue}else b=S.action;typeof b=="function"?r[o+1]=b:(r.splice(o,3),o-=3),gE(r)}}}function vE(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function vg(e){this._internalRoot=e}Ah.prototype.render=vg.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=Gi();uE(r,o,e,n,null,null)},Ah.prototype.unmount=vg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;uE(e.current,2,null,e,null,null),ch(),n[ft]=null}};function Ah(e){this._internalRoot=e}Ah.prototype.unstable_scheduleHydration=function(e){if(e){var n=At();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Es.length&&n!==0&&n<Es[r].priority;r++);Es.splice(r,0,e),r===0&&mE(e)}};var xE=t.version;if(xE!=="19.3.0")throw Error(a(527,xE,"19.3.0"));zt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var l3={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Pt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rh.isDisabled&&Rh.supportsFiber)try{Te=Rh.inject(l3),je=Rh}catch{}}return kl.createRoot=function(e,n){if(!s(e))throw Error(a(299));var r=!1,o="",c=ly,h=uy,S=cy;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=oE(e,1,!1,null,null,r,o,null,c,h,S,vE),e[ft]=n.current,Z_(e),new vg(n)},kl.hydrateRoot=function(e,n,r){if(!s(e))throw Error(a(299));var o=!1,c="",h=ly,S=uy,b=cy,F=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.formState!==void 0&&(F=r.formState)),n=oE(e,1,!0,n,r??null,o,c,F,h,S,b,vE),n.context=lE(null),r=n.current,o=Gi(),o=ut(o),c=os(o),c.callback=null,ls(r,c,o),r=o,n.current.lanes=r,Ia(n,r),ja(n),e[ft]=n.current,Z_(e),new Ah(n)},kl.version="19.3.0",kl}var Cg;function CE(){if(Cg)return wh.exports;Cg=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),wh.exports=RE(),wh.exports}var wE=CE();function Ka(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function wg(l,t){l.prototype=Object.create(t.prototype),l.prototype.constructor=l,l.__proto__=t}var Ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ql={duration:.5,overwrite:!1,delay:0},Ph,In,rn,ki=1e8,Qe=1/ki,zh=Math.PI*2,DE=zh/4,UE=0,Dg=Math.sqrt,NE=Math.cos,LE=Math.sin,Un=function(t){return typeof t=="string"},pn=function(t){return typeof t=="function"},Qa=function(t){return typeof t=="number"},Ih=function(t){return typeof t>"u"},Ta=function(t){return typeof t=="object"},ui=function(t){return t!==!1},Bh=function(){return typeof window<"u"},dc=function(t){return pn(t)||Un(t)},Ug=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,OE=/random\([^)]+\)/g,PE=/,\s*/g,Ng=/(?:-?\.?\d|\.)+/gi,Lg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Og=/[+-]=-?[.\d]+/,zE=/[^,'"\[\]\s]+/gi,IE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ln,ba,Hh,Gh,bi={},pc={},Pg,zg=function(t){return(pc=So(t,bi))&&di},Vh=function(t,i){return console.warn("Invalid property",t,"set to",i,"Missing plugin? gsap.registerPlugin()")},Yl=function(t,i){return!i&&console.warn(t)},Ig=function(t,i){return t&&(bi[t]=i)&&pc&&(pc[t]=i)||bi},Wl=function(){return 0},BE={suppressEvents:!0,isStart:!0,kill:!1},mc={suppressEvents:!0,kill:!1},FE={suppressEvents:!0},Xh={},Cr=[],kh={},Bg,Ai={},qh={},Fg=30,_c=[],Yh="",Wh=function(t){var i=t[0],a,s;if(Ta(i)||pn(i)||(t=[t]),!(a=(i._gsap||{}).harness)){for(s=_c.length;s--&&!_c[s].targetTest(i););a=_c[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new h0(t[s],a)))||t.splice(s,1);return t},bs=function(t){return t._gsap||Wh(Yi(t))[0]._gsap},Hg=function(t,i,a){return(a=t[i])&&pn(a)?t[i]():Ih(a)&&t.getAttribute&&t.getAttribute(i)||a},ci=function(t,i){return(t=t.split(",")).forEach(i)||t},vn=function(t){return Math.round(t*1e5)/1e5||0},un=function(t){return Math.round(t*1e7)/1e7||0},xo=function(t,i){var a=i.charAt(0),s=parseFloat(i.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},HE=function(t,i){for(var a=i.length,s=0;t.indexOf(i[s])<0&&++s<a;);return s<a},gc=function(){var t=Cr.length,i=Cr.slice(0),a,s;for(kh={},Cr.length=0,a=0;a<t;a++)s=i[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Zh=function(t){return!!(t._initted||t._startAt||t.add)},Gg=function(t,i,a,s){Cr.length&&!In&&gc(),t.render(i,a,!!(In&&i<0&&Zh(t))),Cr.length&&!In&&gc()},Vg=function(t){var i=parseFloat(t);return(i||i===0)&&(t+"").match(zE).length<2?i:Un(t)?t.trim():t},Xg=function(t){return t},Ri=function(t,i){for(var a in i)a in t||(t[a]=i[a]);return t},GE=function(t){return function(i,a){for(var s in a)s in i||s==="duration"&&t||s==="ease"||(i[s]=a[s])}},So=function(t,i){for(var a in i)t[a]=i[a];return t},kg=function l(t,i){for(var a in i)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=Ta(i[a])?l(t[a]||(t[a]={}),i[a]):i[a]);return t},vc=function(t,i){var a={},s;for(s in t)s in i||(a[s]=t[s]);return a},Zl=function(t){var i=t.parent||ln,a=t.keyframes?GE(jn(t.keyframes)):Ri;if(ui(t.inherit))for(;i;)a(t,i.vars.defaults),i=i.parent||i._dp;return t},VE=function(t,i){for(var a=t.length,s=a===i.length;s&&a--&&t[a]===i[a];);return a<0},qg=function(t,i,a,s,u){var f=t[s],d;if(u)for(d=i[u];f&&f[u]>d;)f=f._prev;return f?(i._next=f._next,f._next=i):(i._next=t[a],t[a]=i),i._next?i._next._prev=i:t[s]=i,i._prev=f,i.parent=i._dp=t,i},xc=function(t,i,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var u=i._prev,f=i._next;u?u._next=f:t[a]===i&&(t[a]=f),f?f._prev=u:t[s]===i&&(t[s]=u),i._next=i._prev=i.parent=null},wr=function(t,i){t.parent&&(!i||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},As=function(t,i){if(t&&(!i||i._end>t._dur||i._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},XE=function(t){for(var i=t.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return t},jh=function(t,i,a,s){return t._startAt&&(In?t._startAt.revert(mc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(i,!0,s))},kE=function l(t){return!t||t._ts&&l(t.parent)},Yg=function(t){return t._repeat?yo(t._tTime,t=t.duration()+t._rDelay)*t:0},yo=function(t,i){var a=Math.floor(t=un(t/i));return t&&a===t?a-1:a},Sc=function(t,i){return(t-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},yc=function(t){return t._end=un(t._start+(t._tDur/Math.abs(t._ts||t._rts||Qe)||0))},Mc=function(t,i){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=un(a._time-(t._ts>0?i/t._ts:((t._dirty?t.totalDuration():t._tDur)-i)/-t._ts)),yc(t),a._dirty||As(a,t)),t},Wg=function(t,i){var a;if((i._time||!i._dur&&i._initted||i._start<t._time&&(i._dur||!i.add))&&(a=Sc(t.rawTime(),i),(!i._dur||Kl(0,i.totalDuration(),a)-i._tTime>Qe)&&i.render(a,!0)),As(t,i)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-Qe}},Aa=function(t,i,a,s){return i.parent&&wr(i),i._start=un((Qa(a)?a:a||t!==ln?qi(t,a,i):t._time)+i._delay),i._end=un(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),qg(t,i,"_first","_last",t._sort?"_start":0),Kh(i)||(t._recent=i),s||Wg(t,i),t._ts<0&&Mc(t,t._tTime),t},Zg=function(t,i){return(bi.ScrollTrigger||Vh("scrollTrigger",i))&&bi.ScrollTrigger.create(i,t)},jg=function(t,i,a,s,u){if(rd(t,i,u),!t._initted)return 1;if(!a&&t._pt&&!In&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Bg!==wi.frame)return Cr.push(t),t._lazy=[u,s],1},qE=function l(t){var i=t.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||l(i))},Kh=function(t){var i=t.data;return i==="isFromStart"||i==="isStart"},YE=function(t,i,a,s){var u=t.ratio,f=i<0||!i&&(!t._start&&qE(t)&&!(!t._initted&&Kh(t))||(t._ts<0||t._dp._ts<0)&&!Kh(t))?0:1,d=t._rDelay,m=0,p,_,g;if(d&&t._repeat&&(m=Kl(0,t._tDur,i),_=yo(m,d),t._yoyo&&_&1&&(f=1-f),_!==yo(t._tTime,d)&&(u=1-f,t.vars.repeatRefresh&&t._initted&&t.invalidate())),f!==u||In||s||t._zTime===Qe||!i&&t._zTime){if(!t._initted&&jg(t,i,s,a,m))return;for(g=t._zTime,t._zTime=i||(a?Qe:0),a||(a=i&&!g),t.ratio=f,t._from&&(f=1-f),t._time=0,t._tTime=m,p=t._pt;p;)p.r(f,p.d),p=p._next;i<0&&jh(t,i,a,!0),t._onUpdate&&!a&&Ci(t,"onUpdate"),m&&t._repeat&&!a&&t.parent&&Ci(t,"onRepeat"),(i>=t._tDur||i<0)&&t.ratio===f&&(f&&wr(t,1),!a&&!In&&(Ci(t,f?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=i)},WE=function(t,i,a){var s;if(a>i)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>i)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<i)return s;s=s._prev}},Mo=function(t,i,a,s){var u=t._repeat,f=un(i)||0,d=t._tTime/t._tDur;return d&&!s&&(t._time*=f/t._dur),t._dur=f,t._tDur=u?u<0?1e10:un(f*(u+1)+t._rDelay*u):f,d>0&&!s&&Mc(t,t._tTime=t._tDur*d),t.parent&&yc(t),a||As(t.parent,t),t},Kg=function(t){return t instanceof fi?As(t):Mo(t,t._dur)},ZE={_start:0,endTime:Wl,totalDuration:Wl},qi=function l(t,i,a){var s=t.labels,u=t._recent||ZE,f=t.duration()>=ki?u.endTime(!1):t._dur,d,m,p;return Un(i)&&(isNaN(i)||i in s)?(m=i.charAt(0),p=i.substr(-1)==="%",d=i.indexOf("="),m==="<"||m===">"?(d>=0&&(i=i.replace(/=/,"")),(m==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(i.substr(1))||0)*(p?(d<0?u:a).totalDuration()/100:1)):d<0?(i in s||(s[i]=f),s[i]):(m=parseFloat(i.charAt(d-1)+i.substr(d+1)),p&&a&&(m=m/100*(jn(a)?a[0]:a).totalDuration()),d>1?l(t,i.substr(0,d-1),a)+m:f+m)):i==null?f:+i},jl=function(t,i,a){var s=Qa(i[1]),u=(s?2:1)+(t<2?0:1),f=i[u],d,m;if(s&&(f.duration=i[1]),f.parent=a,t){for(d=f,m=a;m&&!("immediateRender"in d);)d=m.vars.defaults||{},m=ui(m.vars.inherit)&&m.parent;f.immediateRender=ui(d.immediateRender),t<2?f.runBackwards=1:f.startAt=i[u-1]}return new yn(i[0],f,i[u+1])},Dr=function(t,i){return t||t===0?i(t):i},Kl=function(t,i,a){return a<t?t:a>i?i:a},Kn=function(t,i){return!Un(t)||!(i=IE.exec(t))?"":i[1]},jE=function(t,i,a){return Dr(a,function(s){return Kl(t,i,s)})},Qh=[].slice,Qg=function(t,i){return t&&Ta(t)&&"length"in t&&(!i&&!t.length||t.length-1 in t&&Ta(t[0]))&&!t.nodeType&&t!==ba},KE=function(t,i,a){return a===void 0&&(a=[]),t.forEach(function(s){var u;return Un(s)&&!i||Qg(s,1)?(u=a).push.apply(u,Yi(s)):a.push(s)})||a},Yi=function(t,i,a){return rn&&!i&&rn.selector?rn.selector(t):Un(t)&&!a&&(Hh||!To())?Qh.call((i||Gh).querySelectorAll(t),0):jn(t)?KE(t,a):Qg(t)?Qh.call(t,0):t?[t]:[]},Jh=function(t){return t=Yi(t)[0]||Yl("Invalid scope")||{},function(i){var a=t.current||t.nativeElement||t;return Yi(i,a.querySelectorAll?a:a===t?Yl("Invalid scope")||Gh.createElement("div"):t)}},Jg=function(t){return t.sort(function(){return .5-Math.random()})},$g=function(t){if(pn(t))return t;var i=Ta(t)?t:{each:t},a=Rs(i.ease),s=i.from||0,u=parseFloat(i.base)||0,f={},d=s>0&&s<1,m=isNaN(s)||d,p=i.axis,_=s,g=s;return Un(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!d&&m&&(_=s[0],g=s[1]),function(v,y,T){var E=(T||i).length,M=f[E],x,L,U,C,O,P,N,B,A;if(!M){if(A=i.grid==="auto"?0:(i.grid||[1,ki])[1],!A){for(N=-ki;N<(N=T[A++].getBoundingClientRect().left)&&A<E;);A<E&&A--}for(M=f[E]=[],x=m?Math.min(A,E)*_-.5:s%A,L=A===ki?0:m?E*g/A-.5:s/A|0,N=0,B=ki,P=0;P<E;P++)U=P%A-x,C=L-(P/A|0),M[P]=O=p?Math.abs(p==="y"?C:U):Dg(U*U+C*C),O>N&&(N=O),O<B&&(B=O);s==="random"&&Jg(M),M.max=N-B,M.min=B,M.v=E=(parseFloat(i.amount)||parseFloat(i.each)*(A>E?E-1:p?p==="y"?E/A:A:Math.max(A,E/A))||0)*(s==="edges"?-1:1),M.b=E<0?u-E:u,M.u=Kn(i.amount||i.each)||0,a=a&&E<0?uT(a):a}return E=(M[v]-M.min)/M.max||0,un(M.b+(a?a(E):E)*M.v)+M.u}},$h=function(t){var i=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=un(Math.round(parseFloat(a)/t)*t*i);return(s-s%1)/i+(Qa(a)?0:Kn(a))}},t0=function(t,i){var a=jn(t),s,u;return!a&&Ta(t)&&(s=a=t.radius||ki,t.values?(t=Yi(t.values),(u=!Qa(t[0]))&&(s*=s)):t=$h(t.increment)),Dr(i,a?pn(t)?function(f){return u=t(f),Math.abs(u-f)<=s?u:f}:function(f){for(var d=parseFloat(u?f.x:f),m=parseFloat(u?f.y:0),p=ki,_=0,g=t.length,v,y;g--;)u?(v=t[g].x-d,y=t[g].y-m,v=v*v+y*y):v=Math.abs(t[g]-d),v<p&&(p=v,_=g);return _=!s||p<=s?t[_]:f,u||_===f||Qa(f)?_:_+Kn(f)}:$h(t))},e0=function(t,i,a,s){return Dr(jn(t)?!i:a===!0?!!(a=0):!s,function(){return jn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(i-t+a*.99))/a)*a*s)/s})},QE=function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return function(s){return i.reduce(function(u,f){return f(u)},s)}},JE=function(t,i){return function(a){return t(parseFloat(a))+(i||Kn(a))}},$E=function(t,i,a){return i0(t,i,0,1,a)},n0=function(t,i,a){return Dr(a,function(s){return t[~~i(s)]})},tT=function l(t,i,a){var s=i-t;return jn(t)?n0(t,l(0,t.length),i):Dr(a,function(u){return(s+(u-t)%s)%s+t})},eT=function l(t,i,a){var s=i-t,u=s*2;return jn(t)?n0(t,l(0,t.length-1),i):Dr(a,function(f){return f=(u+(f-t)%u)%u||0,t+(f>s?u-f:f)})},Ql=function(t){return t.replace(OE,function(i){var a=i.indexOf("[")+1,s=i.substring(a||7,a?i.indexOf("]"):i.length-1).split(PE);return e0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},i0=function(t,i,a,s,u){var f=i-t,d=s-a;return Dr(u,function(m){return a+((m-t)/f*d||0)})},nT=function l(t,i,a,s){var u=isNaN(t+i)?0:function(y){return(1-y)*t+y*i};if(!u){var f=Un(t),d={},m,p,_,g,v;if(a===!0&&(s=1)&&(a=null),f)t={p:t},i={p:i};else if(jn(t)&&!jn(i)){for(_=[],g=t.length,v=g-2,p=1;p<g;p++)_.push(l(t[p-1],t[p]));g--,u=function(T){T*=g;var E=Math.min(v,~~T);return _[E](T-E)},a=i}else s||(t=So(jn(t)?[]:{},t));if(!_){for(m in i)id.call(d,t,m,"get",i[m]);u=function(T){return ld(T,d)||(f?t.p:t)}}}return Dr(a,u)},a0=function(t,i,a){var s=t.labels,u=ki,f,d,m;for(f in s)d=s[f]-i,d<0==!!a&&d&&u>(d=Math.abs(d))&&(m=f,u=d);return m},Ci=function(t,i,a){var s=t.vars,u=s[i],f=rn,d=t._ctx,m,p,_;if(u)return m=s[i+"Params"],p=s.callbackScope||t,a&&Cr.length&&gc(),d&&(rn=d),_=m?u.apply(p,m):u.call(p),rn=f,_},Jl=function(t){return wr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!In),t.progress()<1&&Ci(t,"onInterrupt"),t},Eo,r0=[],s0=function(t){if(t)if(t=!t.name&&t.default||t,Bh()||t.headless){var i=t.name,a=pn(t),s=i&&!a&&t.init?function(){this._props=[]}:t,u={init:Wl,render:ld,add:id,kill:xT,modifier:vT,rawVars:0},f={targetTest:0,get:0,getSetter:od,aliases:{},register:0};if(To(),t!==s){if(Ai[i])return;Ri(s,Ri(vc(t,u),f)),So(s.prototype,So(u,vc(t,f))),Ai[s.prop=i]=s,t.targetTest&&(_c.push(s),Xh[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}Ig(i,s),t.register&&t.register(di,s,hi)}else r0.push(t)},Je=255,$l={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},td=function(t,i,a){return t+=t<0?1:t>1?-1:0,(t*6<1?i+(a-i)*t*6:t<.5?a:t*3<2?i+(a-i)*(2/3-t)*6:i)*Je+.5|0},o0=function(t,i,a){var s=t?Qa(t)?[t>>16,t>>8&Je,t&Je]:0:$l.black,u,f,d,m,p,_,g,v,y,T;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),$l[t])s=$l[t];else if(t.charAt(0)==="#"){if(t.length<6&&(u=t.charAt(1),f=t.charAt(2),d=t.charAt(3),t="#"+u+u+f+f+d+d+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Je,s&Je,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Je,t&Je]}else if(t.substr(0,3)==="hsl"){if(s=T=t.match(Ng),!i)m=+s[0]%360/360,p=+s[1]/100,_=+s[2]/100,f=_<=.5?_*(p+1):_+p-_*p,u=_*2-f,s.length>3&&(s[3]*=1),s[0]=td(m+1/3,u,f),s[1]=td(m,u,f),s[2]=td(m-1/3,u,f);else if(~t.indexOf("="))return s=t.match(Lg),a&&s.length<4&&(s[3]=1),s}else s=t.match(Ng)||$l.transparent;s=s.map(Number)}return i&&!T&&(u=s[0]/Je,f=s[1]/Je,d=s[2]/Je,g=Math.max(u,f,d),v=Math.min(u,f,d),_=(g+v)/2,g===v?m=p=0:(y=g-v,p=_>.5?y/(2-g-v):y/(g+v),m=g===u?(f-d)/y+(f<d?6:0):g===f?(d-u)/y+2:(u-f)/y+4,m*=60),s[0]=~~(m+.5),s[1]=~~(p*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},l0=function(t){var i=[],a=[],s=-1;return t.split(Ur).forEach(function(u){var f=u.match(vo)||[];i.push.apply(i,f),a.push(s+=f.length+1)}),i.c=a,i},u0=function(t,i,a){var s="",u=(t+s).match(Ur),f=i?"hsla(":"rgba(",d=0,m,p,_,g;if(!u)return t;if(u=u.map(function(v){return(v=o0(v,i,1))&&f+(i?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=l0(t),m=a.c,m.join(s)!==_.c.join(s)))for(p=t.replace(Ur,"1").split(vo),g=p.length-1;d<g;d++)s+=p[d]+(~m.indexOf(d)?u.shift()||f+"0,0,0,0)":(_.length?_:u.length?u:a).shift());if(!p)for(p=t.split(Ur),g=p.length-1;d<g;d++)s+=p[d]+u[d];return s+p[g]},Ur=(function(){var l="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in $l)l+="|"+t+"\\b";return new RegExp(l+")","gi")})(),iT=/hsl[a]?\(/,c0=function(t){var i=t.join(" "),a;if(Ur.lastIndex=0,Ur.test(i))return a=iT.test(i),t[1]=u0(t[1],a),t[0]=u0(t[0],a,l0(t[1])),!0},tu,wi=(function(){var l=Date.now,t=500,i=33,a=l(),s=a,u=1e3/240,f=u,d=[],m,p,_,g,v,y,T=function E(M){var x=l()-s,L=M===!0,U,C,O,P;if((x>t||x<0)&&(a+=x-i),s+=x,O=s-a,U=O-f,(U>0||L)&&(P=++g.frame,v=O-g.time*1e3,g.time=O=O/1e3,f+=U+(U>=u?4:u-U),C=1),L||(m=p(E)),C)for(y=0;y<d.length;y++)d[y](O,v,P,M)};return g={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(M){return v/(1e3/(M||60))},wake:function(){Pg&&(!Hh&&Bh()&&(ba=Hh=window,Gh=ba.document||{},bi.gsap=di,(ba.gsapVersions||(ba.gsapVersions=[])).push(di.version),zg(pc||ba.GreenSockGlobals||!ba.gsap&&ba||{}),r0.forEach(s0)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,m&&g.sleep(),p=_||function(M){return setTimeout(M,f-g.time*1e3+1|0)},tu=1,T(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(m),tu=0,p=Wl},lagSmoothing:function(M,x){t=M||1/0,i=Math.min(x||33,t)},fps:function(M){u=1e3/(M||240),f=g.time*1e3+u},add:function(M,x,L){var U=x?function(C,O,P,N){M(C,O,P,N),g.remove(U)}:M;return g.remove(M),d[L?"unshift":"push"](U),To(),U},remove:function(M,x){~(x=d.indexOf(M))&&d.splice(x,1)&&y>=x&&y--},_listeners:d},g})(),To=function(){return!tu&&wi.wake()},De={},aT=/^[\d.\-M][\d.\-,\s]/,rT=/["']/g,sT=function(t){for(var i={},a=t.substr(1,t.length-3).split(":"),s=a[0],u=1,f=a.length,d,m,p;u<f;u++)m=a[u],d=u!==f-1?m.lastIndexOf(","):m.length,p=m.substr(0,d),i[s]=isNaN(p)?p.replace(rT,"").trim():+p,s=m.substr(d+1).trim();return i},oT=function(t){var i=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",i);return t.substring(i,~s&&s<a?t.indexOf(")",a+1):a)},lT=function(t){var i=(t+"").split("("),a=De[i[0]];return a&&i.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[sT(i[1])]:oT(t).split(",").map(Vg)):De._CE&&aT.test(t)?De._CE("",t):a},uT=function(t){return function(i){return 1-t(1-i)}},Rs=function(t,i){return t&&(pn(t)?t:De[t]||lT(t))||i},Cs=function(t,i,a,s){a===void 0&&(a=function(m){return 1-i(1-m)}),s===void 0&&(s=function(m){return m<.5?i(m*2)/2:1-i((1-m)*2)/2});var u={easeIn:i,easeOut:a,easeInOut:s},f;return ci(t,function(d){De[d]=bi[d]=u,De[f=d.toLowerCase()]=a;for(var m in u)De[f+(m==="easeIn"?".in":m==="easeOut"?".out":".inOut")]=De[d+"."+m]=u[m]}),u},f0=function(t){return function(i){return i<.5?(1-t(1-i*2))/2:.5+t((i-.5)*2)/2}},ed=function l(t,i,a){var s=i>=1?i:1,u=(a||(t?.3:.45))/(i<1?i:1),f=u/zh*(Math.asin(1/s)||0),d=function(_){return _===1?1:s*Math.pow(2,-10*_)*LE((_-f)*u)+1},m=t==="out"?d:t==="in"?function(p){return 1-d(1-p)}:f0(d);return u=zh/u,m.config=function(p,_){return l(t,p,_)},m},nd=function l(t,i){i===void 0&&(i=1.70158);var a=function(f){return f?--f*f*((i+1)*f+i)+1:0},s=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:f0(a);return s.config=function(u){return l(t,u)},s};ci("Linear,Quad,Cubic,Quart,Quint,Strong",function(l,t){var i=t<5?t+1:t;Cs(l+",Power"+(i-1),t?function(a){return Math.pow(a,i)}:function(a){return a},function(a){return 1-Math.pow(1-a,i)},function(a){return a<.5?Math.pow(a*2,i)/2:1-Math.pow((1-a)*2,i)/2})}),De.Linear.easeNone=De.none=De.Linear.easeIn,Cs("Elastic",ed("in"),ed("out"),ed()),(function(l,t){var i=1/t,a=2*i,s=2.5*i,u=function(d){return d<i?l*d*d:d<a?l*Math.pow(d-1.5/t,2)+.75:d<s?l*(d-=2.25/t)*d+.9375:l*Math.pow(d-2.625/t,2)+.984375};Cs("Bounce",function(f){return 1-u(1-f)},u)})(7.5625,2.75),Cs("Expo",function(l){return Math.pow(2,10*(l-1))*l+l*l*l*l*l*l*(1-l)}),Cs("Circ",function(l){return-(Dg(1-l*l)-1)}),Cs("Sine",function(l){return l===1?1:-NE(l*DE)+1}),Cs("Back",nd("in"),nd("out"),nd()),De.SteppedEase=De.steps=bi.SteppedEase={config:function(t,i){t===void 0&&(t=1);var a=1/t,s=t+(i?0:1),u=i?1:0,f=1-Qe;return function(d){return((s*Kl(0,f,d)|0)+u)*a}}},ql.ease=De["quad.out"],ci("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(l){return Yh+=l+","+l+"Params,"});var h0=function(t,i){this.id=UE++,t._gsap=this,this.target=t,this.harness=i,this.get=i?i.get:Hg,this.set=i?i.getSetter:od},eu=(function(){function l(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,Mo(this,+i.duration,1,1),this.data=i.data,rn&&(this._ctx=rn,rn.data.push(this)),tu||wi.wake()}var t=l.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Mo(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(To(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(Mc(this,a),!u._dp||u.parent||Wg(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&Aa(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Qe||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),Gg(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+Yg(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+Yg(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,s):this._repeat?yo(this._tTime,u)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-Qe?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?Sc(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Qe?0:this._rts,this.totalTime(Kl(-Math.abs(this._delay),this.totalDuration(),u),s!==!1),yc(this),XE(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(To(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qe&&(this._tTime-=Qe)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=un(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Aa(s,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ui(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sc(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=FE);var s=In;return In=a,Zh(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),In=s,this},t.globalTime=function(a){for(var s=this,u=arguments.length?a:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,Kg(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,Kg(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(qi(this,a),ui(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ui(s)),this._dur||(this._zTime=-Qe),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Qe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qe,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=s&&u<this.endTime(!0)-Qe)},t.eventCallback=function(a,s,u){var f=this.vars;return arguments.length>1?(s?(f[a]=s,u&&(f[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=s)):delete f[a],this):f[a]},t.then=function(a){var s=this,u=s._prom;return new Promise(function(f){var d=pn(a)?a:Xg,m=function(){var _=s.then;s.then=null,u&&u(),pn(d)&&(d=d(s))&&(d.then||d===s)&&(s.then=_),f(d),s.then=_};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?m():s._prom=m})},t.kill=function(){Jl(this)},l})();Ri(eu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qe,_prom:0,_ps:!1,_rts:1});var fi=(function(l){wg(t,l);function t(a,s){var u;return a===void 0&&(a={}),u=l.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=ui(a.sortChildren),ln&&Aa(a.parent||ln,Ka(u),s),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&Zg(Ka(u),a.scrollTrigger),u}var i=t.prototype;return i.to=function(s,u,f){return jl(0,arguments,this),this},i.from=function(s,u,f){return jl(1,arguments,this),this},i.fromTo=function(s,u,f,d){return jl(2,arguments,this),this},i.set=function(s,u,f){return u.duration=0,u.parent=this,Zl(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new yn(s,u,qi(this,f),1),this},i.call=function(s,u,f){return Aa(this,yn.delayedCall(0,s,u),f)},i.staggerTo=function(s,u,f,d,m,p,_){return f.duration=u,f.stagger=f.stagger||d,f.onComplete=p,f.onCompleteParams=_,f.parent=this,new yn(s,f,qi(this,m)),this},i.staggerFrom=function(s,u,f,d,m,p,_){return f.runBackwards=1,Zl(f).immediateRender=ui(f.immediateRender),this.staggerTo(s,u,f,d,m,p,_)},i.staggerFromTo=function(s,u,f,d,m,p,_,g){return d.startAt=f,Zl(d).immediateRender=ui(d.immediateRender),this.staggerTo(s,u,d,m,p,_,g)},i.render=function(s,u,f){var d=this._time,m=this._dirty?this.totalDuration():this._tDur,p=this._dur,_=s<=0?0:un(s),g=this._zTime<0!=s<0&&(this._initted||!p),v,y,T,E,M,x,L,U,C,O,P,N;if(this!==ln&&_>m&&s>=0&&(_=m),_!==this._tTime||f||g){if(d!==this._time&&p&&(_+=this._time-d,s+=this._time-d),v=_,C=this._start,U=this._ts,x=!U,g&&(p||(d=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,M=p+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(M*100+s,u,f);if(v=un(_%M),_===m?(E=this._repeat,v=p):(O=un(_/M),E=~~O,E&&E===O&&(v=p,E--),v>p&&(v=p)),O=yo(this._tTime,M),!d&&this._tTime&&O!==E&&this._tTime-O*M-this._dur<=0&&(O=E),P&&E&1&&(v=p-v,N=1),E!==O&&!this._lock){var B=P&&O&1,A=B===(P&&E&1);if(E<O&&(B=!B),d=B?0:_%p?p:_,this._lock=1,this.render(d||(N?0:un(E*M)),u,!p)._lock=0,this._tTime=_,!u&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1,O=E),d&&d!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,m=this._tDur,A&&(this._lock=2,d=B?p:-1e-4,this.render(d,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(L=WE(this,un(d),un(v)),L&&(_-=v-(v=L._start))),this._tTime=_,this._time=v,this._act=!!U,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,d=0),!d&&_&&p&&!u&&!O&&(Ci(this,"onStart"),this._tTime!==_))return this;if(v>=d&&s>=0)for(y=this._first;y;){if(T=y._next,(y._act||v>=y._start)&&y._ts&&L!==y){if(y.parent!==this)return this.render(s,u,f);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,u,f),v!==this._time||!this._ts&&!x){L=0,T&&(_+=this._zTime=-Qe);break}}y=T}else{y=this._last;for(var w=s<0?s:v;y;){if(T=y._prev,(y._act||w<=y._end)&&y._ts&&L!==y){if(y.parent!==this)return this.render(s,u,f);if(y.render(y._ts>0?(w-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(w-y._start)*y._ts,u,f||In&&Zh(y)),v!==this._time||!this._ts&&!x){L=0,T&&(_+=this._zTime=w?-Qe:Qe);break}}y=T}}if(L&&!u&&(this.pause(),L.render(v>=d?0:-Qe)._zTime=v>=d?1:-1,this._ts))return this._start=C,yc(this),this.render(s,u,f);this._onUpdate&&!u&&Ci(this,"onUpdate",!0),(_===m&&this._tTime>=this.totalDuration()||!_&&d)&&(C===this._start||Math.abs(U)!==Math.abs(this._ts))&&(this._lock||((s||!p)&&(_===m&&this._ts>0||!_&&this._ts<0)&&wr(this,1),!u&&!(s<0&&!d)&&(_||d||!m)&&(Ci(this,_===m&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<m&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(s,u){var f=this;if(Qa(u)||(u=qi(this,u,s)),!(s instanceof eu)){if(jn(s))return s.forEach(function(d){return f.add(d,u)}),this;if(Un(s))return this.addLabel(s,u);if(pn(s))s=yn.delayedCall(0,s);else return this}return this!==s?Aa(this,s,u):this},i.getChildren=function(s,u,f,d){s===void 0&&(s=!0),u===void 0&&(u=!0),f===void 0&&(f=!0),d===void 0&&(d=-ki);for(var m=[],p=this._first;p;)p._start>=d&&(p instanceof yn?u&&m.push(p):(f&&m.push(p),s&&m.push.apply(m,p.getChildren(!0,u,f)))),p=p._next;return m},i.getById=function(s){for(var u=this.getChildren(1,1,1),f=u.length;f--;)if(u[f].vars.id===s)return u[f]},i.remove=function(s){return Un(s)?this.removeLabel(s):pn(s)?this.killTweensOf(s):(s.parent===this&&xc(this,s),s===this._recent&&(this._recent=this._last),As(this))},i.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=un(wi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),l.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},i.addLabel=function(s,u){return this.labels[s]=qi(this,u),this},i.removeLabel=function(s){return delete this.labels[s],this},i.addPause=function(s,u,f){var d=yn.delayedCall(0,u||Wl,f);return d.data="isPause",this._hasPause=1,Aa(this,d,qi(this,s))},i.removePause=function(s){var u=this._first;for(s=qi(this,s);u;)u._start===s&&u.data==="isPause"&&wr(u),u=u._next},i.killTweensOf=function(s,u,f){for(var d=this.getTweensOf(s,f),m=d.length;m--;)Nr!==d[m]&&d[m].kill(s,u);return this},i.getTweensOf=function(s,u){for(var f=[],d=Yi(s),m=this._first,p=Qa(u),_;m;)m instanceof yn?HE(m._targets,d)&&(p?(!Nr||m._initted&&m._ts)&&m.globalTime(0)<=u&&m.globalTime(m.totalDuration())>u:!u||m.isActive())&&f.push(m):(_=m.getTweensOf(d,u)).length&&f.push.apply(f,_),m=m._next;return f},i.tweenTo=function(s,u){u=u||{};var f=this,d=qi(f,s),m=u,p=m.startAt,_=m.onStart,g=m.onStartParams,v=m.immediateRender,y,T=yn.to(f,Ri({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:d,overwrite:"auto",duration:u.duration||Math.abs((d-(p&&"time"in p?p.time:f._time))/f.timeScale())||Qe,onStart:function(){if(f.pause(),!y){var M=u.duration||Math.abs((d-(p&&"time"in p?p.time:f._time))/f.timeScale());T._dur!==M&&Mo(T,M,0,1).render(T._time,!0,!0),y=1}_&&_.apply(T,g||[])}},u));return v?T.render(0):T},i.tweenFromTo=function(s,u,f){return this.tweenTo(u,Ri({startAt:{time:qi(this,s)}},f))},i.recent=function(){return this._recent},i.nextLabel=function(s){return s===void 0&&(s=this._time),a0(this,qi(this,s))},i.previousLabel=function(s){return s===void 0&&(s=this._time),a0(this,qi(this,s),1)},i.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Qe)},i.shiftChildren=function(s,u,f){f===void 0&&(f=0);var d=this._first,m=this.labels,p;for(s=un(s);d;)d._start>=f&&(d._start+=s,d._end+=s),d=d._next;if(u)for(p in m)m[p]>=f&&(m[p]+=s);return As(this)},i.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return l.prototype.invalidate.call(this,s)},i.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,f;u;)f=u._next,this.remove(u),u=f;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),As(this)},i.totalDuration=function(s){var u=0,f=this,d=f._last,m=ki,p,_,g;if(arguments.length)return f.timeScale((f._repeat<0?f.duration():f.totalDuration())/(f.reversed()?-s:s));if(f._dirty){for(g=f.parent;d;)p=d._prev,d._dirty&&d.totalDuration(),_=d._start,_>m&&f._sort&&d._ts&&!f._lock?(f._lock=1,Aa(f,d,_-d._delay,1)._lock=0):m=_,_<0&&d._ts&&(u-=_,(!g&&!f._dp||g&&g.smoothChildTiming)&&(f._start+=un(_/f._ts),f._time-=_,f._tTime-=_),f.shiftChildren(-_,!1,-1/0),m=0),d._end>u&&d._ts&&(u=d._end),d=p;Mo(f,f===ln&&f._time>u?f._time:u,1,1),f._dirty=0}return f._tDur},t.updateRoot=function(s){if(ln._ts&&(Gg(ln,Sc(s,ln)),Bg=wi.frame),wi.frame>=Fg){Fg+=Ti.autoSleep||120;var u=ln._first;if((!u||!u._ts)&&Ti.autoSleep&&wi._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||wi.sleep()}}},t})(eu);Ri(fi.prototype,{_lock:0,_hasPause:0,_forcing:0});var cT=function(t,i,a,s,u,f,d){var m=new hi(this._pt,t,i,0,1,v0,null,u),p=0,_=0,g,v,y,T,E,M,x,L;for(m.b=a,m.e=s,a+="",s+="",(x=~s.indexOf("random("))&&(s=Ql(s)),f&&(L=[a,s],f(L,t,i),a=L[0],s=L[1]),v=a.match(Fh)||[];g=Fh.exec(s);)T=g[0],E=s.substring(p,g.index),y?y=(y+1)%5:E.substr(-5)==="rgba("&&(y=1),T!==v[_++]&&(M=parseFloat(v[_-1])||0,m._pt={_next:m._pt,p:E||_===1?E:",",s:M,c:T.charAt(1)==="="?xo(M,T)-M:parseFloat(T)-M,m:y&&y<4?Math.round:0},p=Fh.lastIndex);return m.c=p<s.length?s.substring(p,s.length):"",m.fp=d,(Og.test(s)||x)&&(m.e=0),this._pt=m,m},id=function(t,i,a,s,u,f,d,m,p,_){pn(s)&&(s=s(u||0,t,f));var g=t[i],v=a!=="get"?a:pn(g)?p?t[i.indexOf("set")||!pn(t["get"+i.substr(3)])?i:"get"+i.substr(3)](p):t[i]():g,y=pn(g)?p?mT:_0:sd,T;if(Un(s)&&(~s.indexOf("random(")&&(s=Ql(s)),s.charAt(1)==="="&&(T=xo(v,s)+(Kn(v)||0),(T||T===0)&&(s=T))),!_||v!==s||ad)return!isNaN(v*s)&&s!==""?(T=new hi(this._pt,t,i,+v||0,s-(v||0),typeof g=="boolean"?gT:g0,0,y),p&&(T.fp=p),d&&T.modifier(d,this,t),this._pt=T):(!g&&!(i in t)&&Vh(i,s),cT.call(this,t,i,v,s,y,m||Ti.stringFilter,p))},fT=function(t,i,a,s,u){if(pn(t)&&(t=nu(t,u,i,a,s)),!Ta(t)||t.style&&t.nodeType||jn(t)||Ug(t))return Un(t)?nu(t,u,i,a,s):t;var f={},d;for(d in t)f[d]=nu(t[d],u,i,a,s);return f},d0=function(t,i,a,s,u,f){var d,m,p,_;if(Ai[t]&&(d=new Ai[t]).init(u,d.rawVars?i[t]:fT(i[t],s,u,f,a),a,s,f)!==!1&&(a._pt=m=new hi(a._pt,u,t,0,1,d.render,d,0,d.priority),a!==Eo))for(p=a._ptLookup[a._targets.indexOf(u)],_=d._props.length;_--;)p[d._props[_]]=m;return d},Nr,ad,rd=function l(t,i,a){var s=t.vars,u=s.ease,f=s.startAt,d=s.immediateRender,m=s.lazy,p=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,y=s.autoRevert,T=t._dur,E=t._startAt,M=t._targets,x=t.parent,L=x&&x.data==="nested"?x.vars.targets:M,U=t._overwrite==="auto"&&!Ph,C=t.timeline,O=s.easeReverse||g,P,N,B,A,w,z,rt,Q,$,ot,X,it,Y;if(C&&(!v||!u)&&(u="none"),t._ease=Rs(u,ql.ease),t._rEase=O&&(Rs(O)||t._ease),t._from=!C&&!!s.runBackwards,t._from&&(t.ratio=1),!C||v&&!s.stagger){if(Q=M[0]?bs(M[0]).harness:0,it=Q&&s[Q.prop],P=vc(s,Xh),E&&(E._zTime<0&&E.progress(1),i<0&&_&&d&&!y?E.render(-1,!0):E.revert(_&&T?mc:BE),E._lazy=0),f){if(wr(t._startAt=yn.set(M,Ri({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!E&&ui(m),startAt:null,delay:0,onUpdate:p&&function(){return Ci(t,"onUpdate")},stagger:0},f))),t._startAt._dp=0,t._startAt._sat=t,i<0&&(In||!d&&!y)&&t._startAt.revert(mc),d&&T&&i<=0&&a<=0){i&&(t._zTime=i);return}}else if(_&&T&&!E){if(i&&(d=!1),B=Ri({overwrite:!1,data:"isFromStart",lazy:d&&!E&&ui(m),immediateRender:d,stagger:0,parent:x},P),it&&(B[Q.prop]=it),wr(t._startAt=yn.set(M,B)),t._startAt._dp=0,t._startAt._sat=t,i<0&&(In?t._startAt.revert(mc):t._startAt.render(-1,!0)),t._zTime=i,!d)l(t._startAt,Qe,Qe);else if(!i)return}for(t._pt=t._ptCache=0,m=T&&ui(m)||m&&!T,N=0;N<M.length;N++){if(w=M[N],rt=w._gsap||Wh(M)[N]._gsap,t._ptLookup[N]=ot={},kh[rt.id]&&Cr.length&&gc(),X=L===M?N:L.indexOf(w),Q&&($=new Q).init(w,it||P,t,X,L)!==!1&&(t._pt=A=new hi(t._pt,w,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(xt){ot[xt]=A}),$.priority&&(z=1)),!Q||it)for(B in P)Ai[B]&&($=d0(B,P,t,X,w,L))?$.priority&&(z=1):ot[B]=A=id.call(t,w,B,"get",P[B],X,L,0,s.stringFilter);t._op&&t._op[N]&&t.kill(w,t._op[N]),U&&t._pt&&(Nr=t,ln.killTweensOf(w,ot,t.globalTime(i)),Y=!t.parent,Nr=0),t._pt&&m&&(kh[rt.id]=1)}z&&x0(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!Y,v&&i<=0&&C.render(ki,!0,!0)},hT=function(t,i,a,s,u,f,d,m){var p=(t._pt&&t._ptCache||(t._ptCache={}))[i],_,g,v,y;if(!p)for(p=t._ptCache[i]=[],v=t._ptLookup,y=t._targets.length;y--;){if(_=v[y][i],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==i&&_.fp!==i;)_=_._next;if(!_)return ad=1,t.vars[i]="+=0",rd(t,d),ad=0,m?Yl(i+" not eligible for reset. Try splitting into individual properties"):1;p.push(_)}for(y=p.length;y--;)g=p[y],_=g._pt||g,_.s=(s||s===0)&&!u?s:_.s+(s||0)+f*_.c,_.c=a-_.s,g.e&&(g.e=vn(a)+Kn(g.e)),g.b&&(g.b=_.s+Kn(g.b))},dT=function(t,i){var a=t[0]?bs(t[0]).harness:0,s=a&&a.aliases,u,f,d,m;if(!s)return i;u=So({},i);for(f in s)if(f in u)for(m=s[f].split(","),d=m.length;d--;)u[m[d]]=u[f];return u},pT=function(t,i,a,s){var u=i.ease||s||"power1.inOut",f,d;if(jn(i))d=a[t]||(a[t]=[]),i.forEach(function(m,p){return d.push({t:p/(i.length-1)*100,v:m,e:u})});else for(f in i)d=a[f]||(a[f]=[]),f==="ease"||d.push({t:parseFloat(t),v:i[f],e:u})},nu=function(t,i,a,s,u){return pn(t)?t.call(i,a,s,u):Un(t)&&~t.indexOf("random(")?Ql(t):t},p0=Yh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",m0={};ci(p0+",id,stagger,delay,duration,paused,scrollTrigger",function(l){return m0[l]=1});var yn=(function(l){wg(t,l);function t(a,s,u,f){var d;typeof s=="number"&&(u.duration=s,s=u,u=null),d=l.call(this,f?s:Zl(s))||this;var m=d.vars,p=m.duration,_=m.delay,g=m.immediateRender,v=m.stagger,y=m.overwrite,T=m.keyframes,E=m.defaults,M=m.scrollTrigger,x=s.parent||ln,L=(jn(a)||Ug(a)?Qa(a[0]):"length"in s)?[a]:Yi(a),U,C,O,P,N,B,A,w;if(d._targets=L.length?Wh(L):Yl("GSAP target "+a+" not found. https://gsap.com",!Ti.nullTargetWarn)||[],d._ptLookup=[],d._overwrite=y,T||v||dc(p)||dc(_)){s=d.vars;var z=s.easeReverse||s.yoyoEase;if(U=d.timeline=new fi({data:"nested",defaults:E||{},targets:x&&x.data==="nested"?x.vars.targets:L}),U.kill(),U.parent=U._dp=Ka(d),U._start=0,v||dc(p)||dc(_)){if(P=L.length,A=v&&$g(v),Ta(v))for(N in v)~p0.indexOf(N)&&(w||(w={}),w[N]=v[N]);for(C=0;C<P;C++)O=vc(s,m0),O.stagger=0,z&&(O.easeReverse=z),w&&So(O,w),B=L[C],O.duration=+nu(p,Ka(d),C,B,L),O.delay=(+nu(_,Ka(d),C,B,L)||0)-d._delay,!v&&P===1&&O.delay&&(d._delay=_=O.delay,d._start+=_,O.delay=0),U.to(B,O,A?A(C,B,L):0),U._ease=De.none;U.duration()?p=_=0:d.timeline=0}else if(T){Zl(Ri(U.vars.defaults,{ease:"none"})),U._ease=Rs(T.ease||s.ease||"none");var rt=0,Q,$,ot;if(jn(T))T.forEach(function(X){return U.to(L,X,">")}),U.duration();else{O={};for(N in T)N==="ease"||N==="easeEach"||pT(N,T[N],O,T.easeEach);for(N in O)for(Q=O[N].sort(function(X,it){return X.t-it.t}),rt=0,C=0;C<Q.length;C++)$=Q[C],ot={ease:$.e,duration:($.t-(C?Q[C-1].t:0))/100*p},ot[N]=$.v,U.to(L,ot,rt),rt+=ot.duration;U.duration()<p&&U.to({},{duration:p-U.duration()})}}p||d.duration(p=U.duration())}else d.timeline=0;return y===!0&&!Ph&&(Nr=Ka(d),ln.killTweensOf(L),Nr=0),Aa(x,Ka(d),u),s.reversed&&d.reverse(),s.paused&&d.paused(!0),(g||!p&&!T&&d._start===un(x._time)&&ui(g)&&kE(Ka(d))&&x.data!=="nested")&&(d._tTime=-Qe,d.render(Math.max(0,-_)||0)),M&&Zg(Ka(d),M),d}var i=t.prototype;return i.render=function(s,u,f){var d=this._time,m=this._tDur,p=this._dur,_=s<0,g=s>m-Qe&&!_?m:s<Qe?0:s,v,y,T,E,M,x,L,U;if(!p)YE(this,s,u,f);else if(g!==this._tTime||!s||f||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,U=this.timeline,this._repeat){if(E=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(E*100+s,u,f);if(v=un(g%E),g===m?(T=this._repeat,v=p):(M=un(g/E),T=~~M,T&&T===M?(v=p,T--):v>p&&(v=p)),x=this._yoyo&&T&1,x&&(v=p-v),M=yo(this._tTime,E),v===d&&!f&&this._initted&&T===M)return this._tTime=g,this;T!==M&&this.vars.repeatRefresh&&!x&&!this._lock&&v!==E&&this._initted&&(this._lock=f=1,this.render(un(E*T),!0).invalidate()._lock=0)}if(!this._initted){if(jg(this,_?s:v,f,u,g))return this._tTime=0,this;if(d!==this._time&&!(f&&this.vars.repeatRefresh&&T!==M))return this;if(p!==this._dur)return this.render(s,u,f)}if(this._rEase){var C=v<d;if(C!==this._inv){var O=C?d:p-d;this._inv=C,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=d,this._invRecip=O?(C?-1:1)/O:0,this._invScale=C?-this.ratio:1-this.ratio,this._invEase=C?this._rEase:this._ease}this.ratio=L=this._invRatio+this._invScale*this._invEase((v-this._invTime)*this._invRecip)}else this.ratio=L=this._ease(v/p);if(this._from&&(this.ratio=L=1-L),this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),!d&&g&&!u&&!M&&(Ci(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(L,y.d),y=y._next;U&&U.render(s<0?s:U._dur*U._ease(v/this._dur),u,f)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(_&&jh(this,s,u,f),Ci(this,"onUpdate")),this._repeat&&T!==M&&this.vars.onRepeat&&!u&&this.parent&&Ci(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&jh(this,s,!0,!0),(s||!p)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&wr(this,1),!u&&!(_&&!d)&&(g||d||x)&&(Ci(this,g===m?"onComplete":"onReverseComplete",!0),this._prom&&!(g<m&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),l.prototype.invalidate.call(this,s)},i.resetTo=function(s,u,f,d,m){tu||wi.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||rd(this,p),_=this._ease(p/this._dur),hT(this,s,u,f,d,_,p,m)?this.resetTo(s,u,f,d,1):(Mc(this,0),this.parent||qg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?Jl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!In),this;if(this.timeline){var f=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,Nr&&Nr.vars.overwrite!==!0)._first||Jl(this),this.parent&&f!==this.timeline.totalDuration()&&Mo(this,this._dur*this.timeline._tDur/f,0,1),this}var d=this._targets,m=s?Yi(s):d,p=this._ptLookup,_=this._pt,g,v,y,T,E,M,x;if((!u||u==="all")&&VE(d,m))return u==="all"&&(this._pt=0),Jl(this);for(g=this._op=this._op||[],u!=="all"&&(Un(u)&&(E={},ci(u,function(L){return E[L]=1}),u=E),u=dT(d,u)),x=d.length;x--;)if(~m.indexOf(d[x])){v=p[x],u==="all"?(g[x]=u,T=v,y={}):(y=g[x]=g[x]||{},T=u);for(E in T)M=v&&v[E],M&&((!("kill"in M.d)||M.d.kill(E)===!0)&&xc(this,M,"_pt"),delete v[E]),y!=="all"&&(y[E]=1)}return this._initted&&!this._pt&&_&&Jl(this),this},t.to=function(s,u){return new t(s,u,arguments[2])},t.from=function(s,u){return jl(1,arguments)},t.delayedCall=function(s,u,f,d){return new t(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:f,onReverseCompleteParams:f,callbackScope:d})},t.fromTo=function(s,u,f){return jl(2,arguments)},t.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new t(s,u)},t.killTweensOf=function(s,u,f){return ln.killTweensOf(s,u,f)},t})(eu);Ri(yn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ci("staggerTo,staggerFrom,staggerFromTo",function(l){yn[l]=function(){var t=new fi,i=Qh.call(arguments,0);return i.splice(l==="staggerFromTo"?5:4,0,0),t[l].apply(t,i)}});var sd=function(t,i,a){return t[i]=a},_0=function(t,i,a){return t[i](a)},mT=function(t,i,a,s){return t[i](s.fp,a)},_T=function(t,i,a){return t.setAttribute(i,a)},od=function(t,i){return pn(t[i])?_0:Ih(t[i])&&t.setAttribute?_T:sd},g0=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e6)/1e6,i)},gT=function(t,i){return i.set(i.t,i.p,!!(i.s+i.c*t),i)},v0=function(t,i){var a=i._pt,s="";if(!t&&i.b)s=i.b;else if(t===1&&i.e)s=i.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=i.c}i.set(i.t,i.p,s,i)},ld=function(t,i){for(var a=i._pt;a;)a.r(t,a.d),a=a._next},vT=function(t,i,a,s){for(var u=this._pt,f;u;)f=u._next,u.p===s&&u.modifier(t,i,a),u=f},xT=function(t){for(var i=this._pt,a,s;i;)s=i._next,i.p===t&&!i.op||i.op===t?xc(this,i,"_pt"):i.dep||(a=1),i=s;return!a},ST=function(t,i,a,s){s.mSet(t,i,s.m.call(s.tween,a,s.mt),s)},x0=function(t){for(var i=t._pt,a,s,u,f;i;){for(a=i._next,s=u;s&&s.pr>i.pr;)s=s._next;(i._prev=s?s._prev:f)?i._prev._next=i:u=i,(i._next=s)?s._prev=i:f=i,i=a}t._pt=u},hi=(function(){function l(i,a,s,u,f,d,m,p,_){this.t=a,this.s=u,this.c=f,this.p=s,this.r=d||g0,this.d=m||this,this.set=p||sd,this.pr=_||0,this._next=i,i&&(i._prev=this)}var t=l.prototype;return t.modifier=function(a,s,u){this.mSet=this.mSet||this.set,this.set=ST,this.m=a,this.mt=u,this.tween=s},l})();ci(Yh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(l){return Xh[l]=1}),bi.TweenMax=bi.TweenLite=yn,bi.TimelineLite=bi.TimelineMax=fi,ln=new fi({sortChildren:!1,defaults:ql,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Ti.stringFilter=c0;var ws=[],Ec={},yT=[],S0=0,MT=0,ud=function(t){return(Ec[t]||yT).map(function(i){return i()})},cd=function(){var t=Date.now(),i=[];t-S0>2&&(ud("matchMediaInit"),ws.forEach(function(a){var s=a.queries,u=a.conditions,f,d,m,p;for(d in s)f=ba.matchMedia(s[d]).matches,f&&(m=1),f!==u[d]&&(u[d]=f,p=1);p&&(a.revert(),m&&i.push(a))}),ud("matchMediaRevert"),i.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),S0=t,ud("matchMedia"))},y0=(function(){function l(i,a){this.selector=a&&Jh(a),this.data=[],this._r=[],this.isReverted=!1,this.id=MT++,i&&this.add(i)}var t=l.prototype;return t.add=function(a,s,u){pn(a)&&(u=s,s=a,a=pn);var f=this,d=function(){var p=rn,_=f.selector,g;return p&&p!==f&&p.data.push(f),u&&(f.selector=Jh(u)),rn=f,g=s.apply(f,arguments),pn(g)&&f._r.push(g),rn=p,f.selector=_,f.isReverted=!1,g};return f.last=d,a===pn?d(f,function(m){return f.add(null,m)}):a?f[a]=d:d},t.ignore=function(a){var s=rn;rn=null,a(this),rn=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof l?a.push.apply(a,s.getTweens()):s instanceof yn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var u=this;if(a?(function(){for(var d=u.getTweens(),m=u.data.length,p;m--;)p=u.data[m],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(_){return d.splice(d.indexOf(_),1)}));for(d.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),m=u.data.length;m--;)p=u.data[m],p instanceof fi?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof yn)&&p.revert&&p.revert(a);u._r.forEach(function(_){return _(a,u)}),u.isReverted=!0})():this.data.forEach(function(d){return d.kill&&d.kill()}),this.clear(),s)for(var f=ws.length;f--;)ws[f].id===this.id&&ws.splice(f,1)},t.revert=function(a){this.kill(a||{})},l})(),ET=(function(){function l(i){this.contexts=[],this.scope=i,rn&&rn.data.push(this)}var t=l.prototype;return t.add=function(a,s,u){Ta(a)||(a={matches:a});var f=new y0(0,u||this.scope),d=f.conditions={},m,p,_;rn&&!f.selector&&(f.selector=rn.selector),this.contexts.push(f),s=f.add("onMatch",s),f.queries=a;for(p in a)p==="all"?_=1:(m=ba.matchMedia(a[p]),m&&(ws.indexOf(f)<0&&ws.push(f),(d[p]=m.matches)&&(_=1),m.addListener?m.addListener(cd):m.addEventListener("change",cd)));return _&&s(f,function(g){return f.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},l})(),Tc={registerPlugin:function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];i.forEach(function(s){return s0(s)})},timeline:function(t){return new fi(t)},getTweensOf:function(t,i){return ln.getTweensOf(t,i)},getProperty:function(t,i,a,s){Un(t)&&(t=Yi(t)[0]);var u=bs(t||{}).get,f=a?Xg:Vg;return a==="native"&&(a=""),t&&(i?f((Ai[i]&&Ai[i].get||u)(t,i,a,s)):function(d,m,p){return f((Ai[d]&&Ai[d].get||u)(t,d,m,p))})},quickSetter:function(t,i,a){if(t=Yi(t),t.length>1){var s=t.map(function(_){return di.quickSetter(_,i,a)}),u=s.length;return function(_){for(var g=u;g--;)s[g](_)}}t=t[0]||{};var f=Ai[i],d=bs(t),m=d.harness&&(d.harness.aliases||{})[i]||i,p=f?function(_){var g=new f;Eo._pt=0,g.init(t,a?_+a:_,Eo,0,[t]),g.render(1,g),Eo._pt&&ld(1,Eo)}:d.set(t,m);return f?p:function(_){return p(t,m,a?_+a:_,d,1)}},quickTo:function(t,i,a){var s,u=di.to(t,Ri((s={},s[i]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),f=function(m,p,_){return u.resetTo(i,m,p,_)};return f.tween=u,f},isTweening:function(t){return ln.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Rs(t.ease,ql.ease)),kg(ql,t||{})},config:function(t){return kg(Ti,t||{})},registerEffect:function(t){var i=t.name,a=t.effect,s=t.plugins,u=t.defaults,f=t.extendTimeline;(s||"").split(",").forEach(function(d){return d&&!Ai[d]&&!bi[d]&&Yl(i+" effect requires "+d+" plugin.")}),qh[i]=function(d,m,p){return a(Yi(d),Ri(m||{},u),p)},f&&(fi.prototype[i]=function(d,m,p){return this.add(qh[i](d,Ta(m)?m:(p=m)&&{},this),p)})},registerEase:function(t,i){De[t]=Rs(i)},parseEase:function(t,i){return arguments.length?Rs(t,i):De},getById:function(t){return ln.getById(t)},exportRoot:function(t,i){t===void 0&&(t={});var a=new fi(t),s,u;for(a.smoothChildTiming=ui(t.smoothChildTiming),ln.remove(a),a._dp=0,a._time=a._tTime=ln._time,s=ln._first;s;)u=s._next,(i||!(!s._dur&&s instanceof yn&&s.vars.onComplete===s._targets[0]))&&Aa(a,s,s._start-s._delay),s=u;return Aa(ln,a,0),a},context:function(t,i){return t?new y0(t,i):rn},matchMedia:function(t){return new ET(t)},matchMediaRefresh:function(){return ws.forEach(function(t){var i=t.conditions,a,s;for(s in i)i[s]&&(i[s]=!1,a=1);a&&t.revert()})||cd()},addEventListener:function(t,i){var a=Ec[t]||(Ec[t]=[]);~a.indexOf(i)||a.push(i)},removeEventListener:function(t,i){var a=Ec[t],s=a&&a.indexOf(i);s>=0&&a.splice(s,1)},utils:{wrap:tT,wrapYoyo:eT,distribute:$g,random:e0,snap:t0,normalize:$E,getUnit:Kn,clamp:jE,splitColor:o0,toArray:Yi,selector:Jh,mapRange:i0,pipe:QE,unitize:JE,interpolate:nT,shuffle:Jg},install:zg,effects:qh,ticker:wi,updateRoot:fi.updateRoot,plugins:Ai,globalTimeline:ln,core:{PropTween:hi,globals:Ig,Tween:yn,Timeline:fi,Animation:eu,getCache:bs,_removeLinkedListItem:xc,reverting:function(){return In},context:function(t){return t&&rn&&(rn.data.push(t),t._ctx=rn),rn},suppressOverwrites:function(t){return Ph=t}}};ci("to,from,fromTo,delayedCall,set,killTweensOf",function(l){return Tc[l]=yn[l]}),wi.add(fi.updateRoot),Eo=Tc.to({},{duration:0});var TT=function(t,i){for(var a=t._pt;a&&a.p!==i&&a.op!==i&&a.fp!==i;)a=a._next;return a},bT=function(t,i){var a=t._targets,s,u,f;for(s in i)for(u=a.length;u--;)f=t._ptLookup[u][s],f&&(f=f.d)&&(f._pt&&(f=TT(f,s)),f&&f.modifier&&f.modifier(i[s],t,a[u],s))},fd=function(t,i){return{name:t,headless:1,rawVars:1,init:function(s,u,f){f._onInit=function(d){var m,p;if(Un(u)&&(m={},ci(u,function(_){return m[_]=1}),u=m),i){m={};for(p in u)m[p]=i(u[p]);u=m}bT(d,u)}}}},di=Tc.registerPlugin({name:"attr",init:function(t,i,a,s,u){var f,d,m;this.tween=a;for(f in i)m=t.getAttribute(f)||"",d=this.add(t,"setAttribute",(m||0)+"",i[f],s,u,0,0,f),d.op=f,d.b=m,this._props.push(f)},render:function(t,i){for(var a=i._pt;a;)In?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,i){for(var a=i.length;a--;)this.add(t,a,t[a]||0,i[a],0,0,0,0,0,1)}},fd("roundProps",$h),fd("modifiers"),fd("snap",t0))||Tc;yn.version=fi.version=di.version="3.15.0",Pg=1,Bh()&&To(),De.Power0,De.Power1,De.Power2,De.Power3,De.Power4,De.Linear,De.Quad,De.Cubic,De.Quart,De.Quint,De.Strong,De.Elastic,De.Back,De.SteppedEase,De.Bounce,De.Sine,De.Expo,De.Circ;var M0,Lr,bo,hd,Ds,E0,dd,AT=function(){return typeof window<"u"},Ja={},Us=180/Math.PI,Ao=Math.PI/180,Ro=Math.atan2,T0=1e8,pd=/([A-Z])/g,RT=/(left|right|width|margin|padding|x)/i,CT=/[\s,\(]\S/,Ra={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},md=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},wT=function(t,i){return i.set(i.t,i.p,t===1?i.e:Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},DT=function(t,i){return i.set(i.t,i.p,t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},UT=function(t,i){return i.set(i.t,i.p,t===1?i.e:t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},NT=function(t,i){var a=i.s+i.c*t;i.set(i.t,i.p,~~(a+(a<0?-.5:.5))+i.u,i)},b0=function(t,i){return i.set(i.t,i.p,t?i.e:i.b,i)},A0=function(t,i){return i.set(i.t,i.p,t!==1?i.b:i.e,i)},LT=function(t,i,a){return t.style[i]=a},OT=function(t,i,a){return t.style.setProperty(i,a)},PT=function(t,i,a){return t._gsap[i]=a},zT=function(t,i,a){return t._gsap.scaleX=t._gsap.scaleY=a},IT=function(t,i,a,s,u){var f=t._gsap;f.scaleX=f.scaleY=a,f.renderTransform(u,f)},BT=function(t,i,a,s,u){var f=t._gsap;f[i]=a,f.renderTransform(u,f)},cn="transform",pi=cn+"Origin",FT=function l(t,i){var a=this,s=this.target,u=s.style,f=s._gsap;if(t in Ja&&u){if(this.tfm=this.tfm||{},t!=="transform")t=Ra[t]||t,~t.indexOf(",")?t.split(",").forEach(function(d){return a.tfm[d]=$a(s,d)}):this.tfm[t]=f.x?f[t]:$a(s,t),t===pi&&(this.tfm.zOrigin=f.zOrigin);else return Ra.transform.split(",").forEach(function(d){return l.call(a,d,i)});if(this.props.indexOf(cn)>=0)return;f.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(pi,i,"")),t=cn}(u||i)&&this.props.push(t,i,u[t])},R0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},HT=function(){var t=this.props,i=this.target,a=i.style,s=i._gsap,u,f;for(u=0;u<t.length;u+=3)t[u+1]?t[u+1]===2?i[t[u]](t[u+2]):i[t[u]]=t[u+2]:t[u+2]?a[t[u]]=t[u+2]:a.removeProperty(t[u].substr(0,2)==="--"?t[u]:t[u].replace(pd,"-$1").toLowerCase());if(this.tfm){for(f in this.tfm)s[f]=this.tfm[f];s.svg&&(s.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),u=dd(),(!u||!u.isStart)&&!a[cn]&&(R0(a),s.zOrigin&&a[pi]&&(a[pi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},C0=function(t,i){var a={target:t,props:[],revert:HT,save:FT};return t._gsap||di.core.getCache(t),i&&t.style&&t.nodeType&&i.split(",").forEach(function(s){return a.save(s)}),a},w0,_d=function(t,i){var a=Lr.createElementNS?Lr.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Lr.createElement(t);return a&&a.style?a:Lr.createElement(t)},Di=function l(t,i,a){var s=getComputedStyle(t);return s[i]||s.getPropertyValue(i.replace(pd,"-$1").toLowerCase())||s.getPropertyValue(i)||!a&&l(t,Co(i)||i,1)||""},D0="O,Moz,ms,Ms,Webkit".split(","),Co=function(t,i,a){var s=i||Ds,u=s.style,f=5;if(t in u&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);f--&&!(D0[f]+t in u););return f<0?null:(f===3?"ms":f>=0?D0[f]:"")+t},gd=function(){AT()&&window.document&&(M0=window,Lr=M0.document,bo=Lr.documentElement,Ds=_d("div")||{style:{}},_d("div"),cn=Co(cn),pi=cn+"Origin",Ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",w0=!!Co("perspective"),dd=di.core.reverting,hd=1)},U0=function(t){var i=t.ownerSVGElement,a=_d("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),u;s.style.display="block",a.appendChild(s),bo.appendChild(a);try{u=s.getBBox()}catch{}return a.removeChild(s),bo.removeChild(a),u},N0=function(t,i){for(var a=i.length;a--;)if(t.hasAttribute(i[a]))return t.getAttribute(i[a])},L0=function(t){var i,a;try{i=t.getBBox()}catch{i=U0(t),a=1}return i&&(i.width||i.height)||a||(i=U0(t)),i&&!i.width&&!i.x&&!i.y?{x:+N0(t,["x","cx","x1"])||0,y:+N0(t,["y","cy","y1"])||0,width:0,height:0}:i},O0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&L0(t))},Or=function(t,i){if(i){var a=t.style,s;i in Ja&&i!==pi&&(i=cn),a.removeProperty?(s=i.substr(0,2),(s==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),a.removeProperty(s==="--"?i:i.replace(pd,"-$1").toLowerCase())):a.removeAttribute(i)}},Pr=function(t,i,a,s,u,f){var d=new hi(t._pt,i,a,0,1,f?A0:b0);return t._pt=d,d.b=s,d.e=u,t._props.push(a),d},P0={deg:1,rad:1,turn:1},GT={grid:1,flex:1},zr=function l(t,i,a,s){var u=parseFloat(a)||0,f=(a+"").trim().substr((u+"").length)||"px",d=Ds.style,m=RT.test(i),p=t.tagName.toLowerCase()==="svg",_=(p?"client":"offset")+(m?"Width":"Height"),g=100,v=s==="px",y=s==="%",T,E,M,x;if(s===f||!u||P0[s]||P0[f])return u;if(f!=="px"&&!v&&(u=l(t,i,a,"px")),x=t.getCTM&&O0(t),(y||f==="%")&&(Ja[i]||~i.indexOf("adius")))return T=x?t.getBBox()[m?"width":"height"]:t[_],vn(y?u/T*g:u/100*T);if(d[m?"width":"height"]=g+(v?f:s),E=s!=="rem"&&~i.indexOf("adius")||s==="em"&&t.appendChild&&!p?t:t.parentNode,x&&(E=(t.ownerSVGElement||{}).parentNode),(!E||E===Lr||!E.appendChild)&&(E=Lr.body),M=E._gsap,M&&y&&M.width&&m&&M.time===wi.time&&!M.uncache)return vn(u/M.width*g);if(y&&(i==="height"||i==="width")){var L=t.style[i];t.style[i]=g+s,T=t[_],L?t.style[i]=L:Or(t,i)}else(y||f==="%")&&!GT[Di(E,"display")]&&(d.position=Di(t,"position")),E===t&&(d.position="static"),E.appendChild(Ds),T=Ds[_],E.removeChild(Ds),d.position="absolute";return m&&y&&(M=bs(E),M.time=wi.time,M.width=E[_]),vn(v?T*u/g:T&&u?g/T*u:0)},$a=function(t,i,a,s){var u;return hd||gd(),i in Ra&&i!=="transform"&&(i=Ra[i],~i.indexOf(",")&&(i=i.split(",")[0])),Ja[i]&&i!=="transform"?(u=au(t,s),u=i!=="transformOrigin"?u[i]:u.svg?u.origin:Ac(Di(t,pi))+" "+u.zOrigin+"px"):(u=t.style[i],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=bc[i]&&bc[i](t,i,a)||Di(t,i)||Hg(t,i)||(i==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?zr(t,i,u,a)+a:u},VT=function(t,i,a,s){if(!a||a==="none"){var u=Co(i,t,1),f=u&&Di(t,u,1);f&&f!==a?(i=u,a=f):i==="borderColor"&&(a=Di(t,"borderTopColor"))}var d=new hi(this._pt,t.style,i,0,1,v0),m=0,p=0,_,g,v,y,T,E,M,x,L,U,C,O;if(d.b=a,d.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Di(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(E=t.style[i],t.style[i]=s,s=Di(t,i)||s,E?t.style[i]=E:Or(t,i)),_=[a,s],c0(_),a=_[0],s=_[1],v=a.match(vo)||[],O=s.match(vo)||[],O.length){for(;g=vo.exec(s);)M=g[0],L=s.substring(m,g.index),T?T=(T+1)%5:(L.substr(-5)==="rgba("||L.substr(-5)==="hsla(")&&(T=1),M!==(E=v[p++]||"")&&(y=parseFloat(E)||0,C=E.substr((y+"").length),M.charAt(1)==="="&&(M=xo(y,M)+C),x=parseFloat(M),U=M.substr((x+"").length),m=vo.lastIndex-U.length,U||(U=U||Ti.units[i]||C,m===s.length&&(s+=U,d.e+=U)),C!==U&&(y=zr(t,i,E,U)||0),d._pt={_next:d._pt,p:L||p===1?L:",",s:y,c:x-y,m:T&&T<4||i==="zIndex"?Math.round:0});d.c=m<s.length?s.substring(m,s.length):""}else d.r=i==="display"&&s==="none"?A0:b0;return Og.test(s)&&(d.e=0),this._pt=d,d},z0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},XT=function(t){var i=t.split(" "),a=i[0],s=i[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),i[0]=z0[a]||a,i[1]=z0[s]||s,i.join(" ")},kT=function(t,i){if(i.tween&&i.tween._time===i.tween._dur){var a=i.t,s=a.style,u=i.u,f=a._gsap,d,m,p;if(u==="all"||u===!0)s.cssText="",m=1;else for(u=u.split(","),p=u.length;--p>-1;)d=u[p],Ja[d]&&(m=1,d=d==="transformOrigin"?pi:cn),Or(a,d);m&&(Or(a,cn),f&&(f.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",au(a,1),f.uncache=1,R0(s)))}},bc={clearProps:function(t,i,a,s,u){if(u.data!=="isFromStart"){var f=t._pt=new hi(t._pt,i,a,0,0,kT);return f.u=s,f.pr=-10,f.tween=u,t._props.push(a),1}}},iu=[1,0,0,1,0,0],I0={},B0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},F0=function(t){var i=Di(t,cn);return B0(i)?iu:i.substr(7).match(Lg).map(vn)},vd=function(t,i){var a=t._gsap||bs(t),s=t.style,u=F0(t),f,d,m,p;return a.svg&&t.getAttribute("transform")?(m=t.transform.baseVal.consolidate().matrix,u=[m.a,m.b,m.c,m.d,m.e,m.f],u.join(",")==="1,0,0,1,0,0"?iu:u):(u===iu&&!t.offsetParent&&t!==bo&&!a.svg&&(m=s.display,s.display="block",f=t.parentNode,(!f||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,d=t.nextElementSibling,bo.appendChild(t)),u=F0(t),m?s.display=m:Or(t,"display"),p&&(d?f.insertBefore(t,d):f?f.appendChild(t):bo.removeChild(t))),i&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},xd=function(t,i,a,s,u,f){var d=t._gsap,m=u||vd(t,!0),p=d.xOrigin||0,_=d.yOrigin||0,g=d.xOffset||0,v=d.yOffset||0,y=m[0],T=m[1],E=m[2],M=m[3],x=m[4],L=m[5],U=i.split(" "),C=parseFloat(U[0])||0,O=parseFloat(U[1])||0,P,N,B,A;a?m!==iu&&(N=y*M-T*E)&&(B=C*(M/N)+O*(-E/N)+(E*L-M*x)/N,A=C*(-T/N)+O*(y/N)-(y*L-T*x)/N,C=B,O=A):(P=L0(t),C=P.x+(~U[0].indexOf("%")?C/100*P.width:C),O=P.y+(~(U[1]||U[0]).indexOf("%")?O/100*P.height:O)),s||s!==!1&&d.smooth?(x=C-p,L=O-_,d.xOffset=g+(x*y+L*E)-x,d.yOffset=v+(x*T+L*M)-L):d.xOffset=d.yOffset=0,d.xOrigin=C,d.yOrigin=O,d.smooth=!!s,d.origin=i,d.originIsAbsolute=!!a,t.style[pi]="0px 0px",f&&(Pr(f,d,"xOrigin",p,C),Pr(f,d,"yOrigin",_,O),Pr(f,d,"xOffset",g,d.xOffset),Pr(f,d,"yOffset",v,d.yOffset)),t.setAttribute("data-svg-origin",C+" "+O)},au=function(t,i){var a=t._gsap||new h0(t);if("x"in a&&!i&&!a.uncache)return a;var s=t.style,u=a.scaleX<0,f="px",d="deg",m=getComputedStyle(t),p=Di(t,pi)||"0",_,g,v,y,T,E,M,x,L,U,C,O,P,N,B,A,w,z,rt,Q,$,ot,X,it,Y,xt,yt,wt,Wt,xe,H,V;return _=g=v=E=M=x=L=U=C=0,y=T=1,a.svg=!!(t.getCTM&&O0(t)),m.translate&&((m.translate!=="none"||m.scale!=="none"||m.rotate!=="none")&&(s[cn]=(m.translate!=="none"?"translate3d("+(m.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(m.rotate!=="none"?"rotate("+m.rotate+") ":"")+(m.scale!=="none"?"scale("+m.scale.split(" ").join(",")+") ":"")+(m[cn]!=="none"?m[cn]:"")),s.scale=s.rotate=s.translate="none"),N=vd(t,a.svg),a.svg&&(a.uncache?(Y=t.getBBox(),p=a.xOrigin-Y.x+"px "+(a.yOrigin-Y.y)+"px",it=""):it=!i&&t.getAttribute("data-svg-origin"),xd(t,it||p,!!it||a.originIsAbsolute,a.smooth!==!1,N)),O=a.xOrigin||0,P=a.yOrigin||0,N!==iu&&(z=N[0],rt=N[1],Q=N[2],$=N[3],_=ot=N[4],g=X=N[5],N.length===6?(y=Math.sqrt(z*z+rt*rt),T=Math.sqrt($*$+Q*Q),E=z||rt?Ro(rt,z)*Us:0,L=Q||$?Ro(Q,$)*Us+E:0,L&&(T*=Math.abs(Math.cos(L*Ao))),a.svg&&(_-=O-(O*z+P*Q),g-=P-(O*rt+P*$))):(V=N[6],xe=N[7],yt=N[8],wt=N[9],Wt=N[10],H=N[11],_=N[12],g=N[13],v=N[14],B=Ro(V,Wt),M=B*Us,B&&(A=Math.cos(-B),w=Math.sin(-B),it=ot*A+yt*w,Y=X*A+wt*w,xt=V*A+Wt*w,yt=ot*-w+yt*A,wt=X*-w+wt*A,Wt=V*-w+Wt*A,H=xe*-w+H*A,ot=it,X=Y,V=xt),B=Ro(-Q,Wt),x=B*Us,B&&(A=Math.cos(-B),w=Math.sin(-B),it=z*A-yt*w,Y=rt*A-wt*w,xt=Q*A-Wt*w,H=$*w+H*A,z=it,rt=Y,Q=xt),B=Ro(rt,z),E=B*Us,B&&(A=Math.cos(B),w=Math.sin(B),it=z*A+rt*w,Y=ot*A+X*w,rt=rt*A-z*w,X=X*A-ot*w,z=it,ot=Y),M&&Math.abs(M)+Math.abs(E)>359.9&&(M=E=0,x=180-x),y=vn(Math.sqrt(z*z+rt*rt+Q*Q)),T=vn(Math.sqrt(X*X+V*V)),B=Ro(ot,X),L=Math.abs(B)>2e-4?B*Us:0,C=H?1/(H<0?-H:H):0),a.svg&&(it=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!B0(Di(t,cn)),it&&t.setAttribute("transform",it))),Math.abs(L)>90&&Math.abs(L)<270&&(u?(y*=-1,L+=E<=0?180:-180,E+=E<=0?180:-180):(T*=-1,L+=L<=0?180:-180)),i=i||a.uncache,a.x=_-((a.xPercent=_&&(!i&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+f,a.y=g-((a.yPercent=g&&(!i&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+f,a.z=v+f,a.scaleX=vn(y),a.scaleY=vn(T),a.rotation=vn(E)+d,a.rotationX=vn(M)+d,a.rotationY=vn(x)+d,a.skewX=L+d,a.skewY=U+d,a.transformPerspective=C+f,(a.zOrigin=parseFloat(p.split(" ")[2])||!i&&a.zOrigin||0)&&(s[pi]=Ac(p)),a.xOffset=a.yOffset=0,a.force3D=Ti.force3D,a.renderTransform=a.svg?YT:w0?H0:qT,a.uncache=0,a},Ac=function(t){return(t=t.split(" "))[0]+" "+t[1]},Sd=function(t,i,a){var s=Kn(i);return vn(parseFloat(i)+parseFloat(zr(t,"x",a+"px",s)))+s},qT=function(t,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,H0(t,i)},Ns="0deg",ru="0px",Ls=") ",H0=function(t,i){var a=i||this,s=a.xPercent,u=a.yPercent,f=a.x,d=a.y,m=a.z,p=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,y=a.skewY,T=a.scaleX,E=a.scaleY,M=a.transformPerspective,x=a.force3D,L=a.target,U=a.zOrigin,C="",O=x==="auto"&&t&&t!==1||x===!0;if(U&&(g!==Ns||_!==Ns)){var P=parseFloat(_)*Ao,N=Math.sin(P),B=Math.cos(P),A;P=parseFloat(g)*Ao,A=Math.cos(P),f=Sd(L,f,N*A*-U),d=Sd(L,d,-Math.sin(P)*-U),m=Sd(L,m,B*A*-U+U)}M!==ru&&(C+="perspective("+M+Ls),(s||u)&&(C+="translate("+s+"%, "+u+"%) "),(O||f!==ru||d!==ru||m!==ru)&&(C+=m!==ru||O?"translate3d("+f+", "+d+", "+m+") ":"translate("+f+", "+d+Ls),p!==Ns&&(C+="rotate("+p+Ls),_!==Ns&&(C+="rotateY("+_+Ls),g!==Ns&&(C+="rotateX("+g+Ls),(v!==Ns||y!==Ns)&&(C+="skew("+v+", "+y+Ls),(T!==1||E!==1)&&(C+="scale("+T+", "+E+Ls),L.style[cn]=C||"translate(0, 0)"},YT=function(t,i){var a=i||this,s=a.xPercent,u=a.yPercent,f=a.x,d=a.y,m=a.rotation,p=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,y=a.target,T=a.xOrigin,E=a.yOrigin,M=a.xOffset,x=a.yOffset,L=a.forceCSS,U=parseFloat(f),C=parseFloat(d),O,P,N,B,A;m=parseFloat(m),p=parseFloat(p),_=parseFloat(_),_&&(_=parseFloat(_),p+=_,m+=_),m||p?(m*=Ao,p*=Ao,O=Math.cos(m)*g,P=Math.sin(m)*g,N=Math.sin(m-p)*-v,B=Math.cos(m-p)*v,p&&(_*=Ao,A=Math.tan(p-_),A=Math.sqrt(1+A*A),N*=A,B*=A,_&&(A=Math.tan(_),A=Math.sqrt(1+A*A),O*=A,P*=A)),O=vn(O),P=vn(P),N=vn(N),B=vn(B)):(O=g,B=v,P=N=0),(U&&!~(f+"").indexOf("px")||C&&!~(d+"").indexOf("px"))&&(U=zr(y,"x",f,"px"),C=zr(y,"y",d,"px")),(T||E||M||x)&&(U=vn(U+T-(T*O+E*N)+M),C=vn(C+E-(T*P+E*B)+x)),(s||u)&&(A=y.getBBox(),U=vn(U+s/100*A.width),C=vn(C+u/100*A.height)),A="matrix("+O+","+P+","+N+","+B+","+U+","+C+")",y.setAttribute("transform",A),L&&(y.style[cn]=A)},WT=function(t,i,a,s,u){var f=360,d=Un(u),m=parseFloat(u)*(d&&~u.indexOf("rad")?Us:1),p=m-s,_=s+p+"deg",g,v;return d&&(g=u.split("_")[1],g==="short"&&(p%=f,p!==p%(f/2)&&(p+=p<0?f:-f)),g==="cw"&&p<0?p=(p+f*T0)%f-~~(p/f)*f:g==="ccw"&&p>0&&(p=(p-f*T0)%f-~~(p/f)*f)),t._pt=v=new hi(t._pt,i,a,s,p,wT),v.e=_,v.u="deg",t._props.push(a),v},G0=function(t,i){for(var a in i)t[a]=i[a];return t},ZT=function(t,i,a){var s=G0({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",f=a.style,d,m,p,_,g,v,y,T;s.svg?(p=a.getAttribute("transform"),a.setAttribute("transform",""),f[cn]=i,d=au(a,1),Or(a,cn),a.setAttribute("transform",p)):(p=getComputedStyle(a)[cn],f[cn]=i,d=au(a,1),f[cn]=p);for(m in Ja)p=s[m],_=d[m],p!==_&&u.indexOf(m)<0&&(y=Kn(p),T=Kn(_),g=y!==T?zr(a,m,p,T):parseFloat(p),v=parseFloat(_),t._pt=new hi(t._pt,d,m,g,v-g,md),t._pt.u=T||0,t._props.push(m));G0(d,s)};ci("padding,margin,Width,Radius",function(l,t){var i="Top",a="Right",s="Bottom",u="Left",f=(t<3?[i,a,s,u]:[i+u,i+a,s+a,s+u]).map(function(d){return t<2?l+d:"border"+d+l});bc[t>1?"border"+l:l]=function(d,m,p,_,g){var v,y;if(arguments.length<4)return v=f.map(function(T){return $a(d,T,p)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(_+"").split(" "),y={},f.forEach(function(T,E){return y[T]=v[E]=v[E]||v[(E-1)/2|0]}),d.init(m,y,g)}});var V0={name:"css",register:gd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,i,a,s,u){var f=this._props,d=t.style,m=a.vars.startAt,p,_,g,v,y,T,E,M,x,L,U,C,O,P,N,B,A;hd||gd(),this.styles=this.styles||C0(t),B=this.styles.props,this.tween=a;for(E in i)if(E!=="autoRound"&&(_=i[E],!(Ai[E]&&d0(E,i,a,s,t,u)))){if(y=typeof _,T=bc[E],y==="function"&&(_=_.call(a,s,t,u),y=typeof _),y==="string"&&~_.indexOf("random(")&&(_=Ql(_)),T)T(this,t,E,_,a)&&(N=1);else if(E.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(E)+"").trim(),_+="",Ur.lastIndex=0,Ur.test(p)||(M=Kn(p),x=Kn(_),x?M!==x&&(p=zr(t,E,p,x)+x):M&&(_+=M)),this.add(d,"setProperty",p,_,s,u,0,0,E),f.push(E),B.push(E,0,d[E]);else if(y!=="undefined"){if(m&&E in m?(p=typeof m[E]=="function"?m[E].call(a,s,t,u):m[E],Un(p)&&~p.indexOf("random(")&&(p=Ql(p)),Kn(p+"")||p==="auto"||(p+=Ti.units[E]||Kn($a(t,E))||""),(p+"").charAt(1)==="="&&(p=$a(t,E))):p=$a(t,E),v=parseFloat(p),L=y==="string"&&_.charAt(1)==="="&&_.substr(0,2),L&&(_=_.substr(2)),g=parseFloat(_),E in Ra&&(E==="autoAlpha"&&(v===1&&$a(t,"visibility")==="hidden"&&g&&(v=0),B.push("visibility",0,d.visibility),Pr(this,d,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),E!=="scale"&&E!=="transform"&&(E=Ra[E],~E.indexOf(",")&&(E=E.split(",")[0]))),U=E in Ja,U){if(this.styles.save(E),A=_,y==="string"&&_.substring(0,6)==="var(--"){if(_=Di(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var w=t.style.perspective;t.style.perspective=_,_=Di(t,"perspective"),w?t.style.perspective=w:Or(t,"perspective")}g=parseFloat(_)}if(C||(O=t._gsap,O.renderTransform&&!i.parseTransform||au(t,i.parseTransform),P=i.smoothOrigin!==!1&&O.smooth,C=this._pt=new hi(this._pt,d,cn,0,1,O.renderTransform,O,0,-1),C.dep=1),E==="scale")this._pt=new hi(this._pt,O,"scaleY",O.scaleY,(L?xo(O.scaleY,L+g):g)-O.scaleY||0,md),this._pt.u=0,f.push("scaleY",E),E+="X";else if(E==="transformOrigin"){B.push(pi,0,d[pi]),_=XT(_),O.svg?xd(t,_,0,P,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==O.zOrigin&&Pr(this,O,"zOrigin",O.zOrigin,x),Pr(this,d,E,Ac(p),Ac(_)));continue}else if(E==="svgOrigin"){xd(t,_,1,P,0,this);continue}else if(E in I0){WT(this,O,E,v,L?xo(v,L+_):_);continue}else if(E==="smoothOrigin"){Pr(this,O,"smooth",O.smooth,_);continue}else if(E==="force3D"){O[E]=_;continue}else if(E==="transform"){ZT(this,_,t);continue}}else E in d||(E=Co(E)||E);if(U||(g||g===0)&&(v||v===0)&&!CT.test(_)&&E in d)M=(p+"").substr((v+"").length),g||(g=0),x=Kn(_)||(E in Ti.units?Ti.units[E]:M),M!==x&&(v=zr(t,E,p,x)),this._pt=new hi(this._pt,U?O:d,E,v,(L?xo(v,L+g):g)-v,!U&&(x==="px"||E==="zIndex")&&i.autoRound!==!1?NT:md),this._pt.u=x||0,U&&A!==_?(this._pt.b=p,this._pt.e=A,this._pt.r=UT):M!==x&&x!=="%"&&(this._pt.b=p,this._pt.r=DT);else if(E in d)VT.call(this,t,E,p,L?L+_:_);else if(E in t)this.add(t,E,p||t[E],L?L+_:_,s,u);else if(E!=="parseTransform"){Vh(E,_);continue}U||(E in d?B.push(E,0,d[E]):typeof t[E]=="function"?B.push(E,2,t[E]()):B.push(E,1,p||t[E])),f.push(E)}}N&&x0(this)},render:function(t,i){if(i.tween._time||!dd())for(var a=i._pt;a;)a.r(t,a.d),a=a._next;else i.styles.revert()},get:$a,aliases:Ra,getSetter:function(t,i,a){var s=Ra[i];return s&&s.indexOf(",")<0&&(i=s),i in Ja&&i!==pi&&(t._gsap.x||$a(t,"x"))?a&&E0===a?i==="scale"?zT:PT:(E0=a||{})&&(i==="scale"?IT:BT):t.style&&!Ih(t.style[i])?LT:~i.indexOf("-")?OT:od(t,i)},core:{_removeProperty:Or,_getMatrix:vd}};di.utils.checkPrefix=Co,di.core.getStyleSaver=C0,(function(l,t,i,a){var s=ci(l+","+t+","+i,function(u){Ja[u]=1});ci(t,function(u){Ti.units[u]="deg",I0[u]=1}),Ra[s[13]]=l+","+t,ci(a,function(u){var f=u.split(":");Ra[f[1]]=s[f[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),ci("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(l){Ti.units[l]="px"}),di.registerPlugin(V0);var Bn=di.registerPlugin(V0)||di;Bn.core.Tween;var Fn=Lh();const yd="179",jT=0,X0=1,KT=2,k0=1,QT=2,tr=3,Ir=0,mi=1,er=2,Br=0,wo=1,q0=2,Y0=3,W0=4,JT=5,Os=100,$T=101,t1=102,e1=103,n1=104,i1=200,a1=201,r1=202,s1=203,Md=204,Ed=205,o1=206,l1=207,u1=208,c1=209,f1=210,h1=211,d1=212,p1=213,m1=214,Td=0,bd=1,Ad=2,Do=3,Rd=4,Cd=5,wd=6,Dd=7,Z0=0,_1=1,g1=2,Fr=0,v1=1,x1=2,S1=3,y1=4,M1=5,E1=6,T1=7,j0=300,Uo=301,No=302,Ud=303,Nd=304,Rc=306,Ld=1e3,Ps=1001,Od=1002,aa=1003,b1=1004,Cc=1005,ra=1006,Pd=1007,Hr=1008,nr=1009,K0=1010,Q0=1011,su=1012,zd=1013,zs=1014,ir=1015,ou=1016,Id=1017,Bd=1018,lu=1020,J0=35902,$0=1021,tv=1022,sa=1023,uu=1026,cu=1027,ev=1028,Fd=1029,nv=1030,Hd=1031,Gd=1033,wc=33776,Dc=33777,Uc=33778,Nc=33779,Vd=35840,Xd=35841,kd=35842,qd=35843,Yd=36196,Wd=37492,Zd=37496,jd=37808,Kd=37809,Qd=37810,Jd=37811,$d=37812,tp=37813,ep=37814,np=37815,ip=37816,ap=37817,rp=37818,sp=37819,op=37820,lp=37821,Lc=36492,up=36494,cp=36495,iv=36283,fp=36284,hp=36285,dp=36286,A1=3200,R1=3201,C1=0,w1=1,Gr="",Ui="srgb",Lo="srgb-linear",Oc="linear",Ze="srgb",Oo=7680,av=519,D1=512,U1=513,N1=514,rv=515,L1=516,O1=517,P1=518,z1=519,sv=35044,ov="300 es",Ca=2e3,Pc=2001;class Po{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const u=s.indexOf(i);u!==-1&&s.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const a=i[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let u=0,f=s.length;u<f;u++)s[u].call(this,t);t.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pp=Math.PI/180,mp=180/Math.PI;function fu(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Qn[l&255]+Qn[l>>8&255]+Qn[l>>16&255]+Qn[l>>24&255]+"-"+Qn[t&255]+Qn[t>>8&255]+"-"+Qn[t>>16&15|64]+Qn[t>>24&255]+"-"+Qn[i&63|128]+Qn[i>>8&255]+"-"+Qn[i>>16&255]+Qn[i>>24&255]+Qn[a&255]+Qn[a>>8&255]+Qn[a>>16&255]+Qn[a>>24&255]).toLowerCase()}function Ue(l,t,i){return Math.max(t,Math.min(i,l))}function I1(l,t){return(l%t+t)%t}function _p(l,t,i){return(1-i)*l+i*t}function hu(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function _i(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(t=0,i=0){Ge.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,s=t.elements;return this.x=s[0]*i+s[3]*a+s[6],this.y=s[1]*i+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ue(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(Ue(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),s=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*a-f*s+t.x,this.y=u*s+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class du{constructor(t=0,i=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=s}static slerpFlat(t,i,a,s,u,f,d){let m=a[s+0],p=a[s+1],_=a[s+2],g=a[s+3];const v=u[f+0],y=u[f+1],T=u[f+2],E=u[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d===1){t[i+0]=v,t[i+1]=y,t[i+2]=T,t[i+3]=E;return}if(g!==E||m!==v||p!==y||_!==T){let M=1-d;const x=m*v+p*y+_*T+g*E,L=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const O=Math.sqrt(U),P=Math.atan2(O,x*L);M=Math.sin(M*P)/O,d=Math.sin(d*P)/O}const C=d*L;if(m=m*M+v*C,p=p*M+y*C,_=_*M+T*C,g=g*M+E*C,M===1-d){const O=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=O,p*=O,_*=O,g*=O}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,a,s,u,f){const d=a[s],m=a[s+1],p=a[s+2],_=a[s+3],g=u[f],v=u[f+1],y=u[f+2],T=u[f+3];return t[i]=d*T+_*g+m*y-p*v,t[i+1]=m*T+_*v+p*g-d*y,t[i+2]=p*T+_*y+d*v-m*g,t[i+3]=_*T-d*g-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,s){return this._x=t,this._y=i,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const a=t._x,s=t._y,u=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(a/2),_=d(s/2),g=d(u/2),v=m(a/2),y=m(s/2),T=m(u/2);switch(f){case"XYZ":this._x=v*_*g+p*y*T,this._y=p*y*g-v*_*T,this._z=p*_*T+v*y*g,this._w=p*_*g-v*y*T;break;case"YXZ":this._x=v*_*g+p*y*T,this._y=p*y*g-v*_*T,this._z=p*_*T-v*y*g,this._w=p*_*g+v*y*T;break;case"ZXY":this._x=v*_*g-p*y*T,this._y=p*y*g+v*_*T,this._z=p*_*T+v*y*g,this._w=p*_*g-v*y*T;break;case"ZYX":this._x=v*_*g-p*y*T,this._y=p*y*g+v*_*T,this._z=p*_*T-v*y*g,this._w=p*_*g+v*y*T;break;case"YZX":this._x=v*_*g+p*y*T,this._y=p*y*g+v*_*T,this._z=p*_*T-v*y*g,this._w=p*_*g-v*y*T;break;case"XZY":this._x=v*_*g-p*y*T,this._y=p*y*g-v*_*T,this._z=p*_*T+v*y*g,this._w=p*_*g+v*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],s=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],v=a+d+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-m)*y,this._y=(u-p)*y,this._z=(f-s)*y}else if(a>d&&a>g){const y=2*Math.sqrt(1+a-d-g);this._w=(_-m)/y,this._x=.25*y,this._y=(s+f)/y,this._z=(u+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-a-g);this._w=(u-p)/y,this._x=(s+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-a-d);this._w=(f-s)/y,this._x=(u+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,i/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,s=t._y,u=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=a*_+f*d+s*p-u*m,this._y=s*_+f*m+u*d-a*p,this._z=u*_+f*p+a*m-s*d,this._w=f*_-a*d-s*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,s=this._y,u=this._z,f=this._w;let d=f*t._w+a*t._x+s*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=a,this._y=s,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*a+i*this._x,this._y=y*s+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),g=Math.sin((1-i)*_)/p,v=Math.sin(i*_)/p;return this._w=f*g+this._w*v,this._x=a*g+this._x*v,this._y=s*g+this._y*v,this._z=u*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ht{constructor(t=0,i=0,a=0){ht.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(lv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(lv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*i+u[3]*a+u[6]*s,this.y=u[1]*i+u[4]*a+u[7]*s,this.z=u[2]*i+u[5]*a+u[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,s=this.z,u=t.elements,f=1/(u[3]*i+u[7]*a+u[11]*s+u[15]);return this.x=(u[0]*i+u[4]*a+u[8]*s+u[12])*f,this.y=(u[1]*i+u[5]*a+u[9]*s+u[13])*f,this.z=(u[2]*i+u[6]*a+u[10]*s+u[14])*f,this}applyQuaternion(t){const i=this.x,a=this.y,s=this.z,u=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*s-d*a),_=2*(d*i-u*s),g=2*(u*a-f*i);return this.x=i+m*p+f*g-d*_,this.y=a+m*_+d*p-u*g,this.z=s+m*g+u*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*i+u[4]*a+u[8]*s,this.y=u[1]*i+u[5]*a+u[9]*s,this.z=u[2]*i+u[6]*a+u[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ue(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,s=t.y,u=t.z,f=i.x,d=i.y,m=i.z;return this.x=s*m-u*d,this.y=u*f-a*m,this.z=a*d-s*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return gp.copy(this).projectOnVector(t),this.sub(gp)}reflect(t){return this.sub(gp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(Ue(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return i*i+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const s=Math.sin(i)*t;return this.x=s*Math.sin(a),this.y=Math.cos(i)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=s,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(t),this.y=i,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gp=new ht,lv=new du;class Me{constructor(t,i,a,s,u,f,d,m,p){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,s,u,f,d,m,p)}set(t,i,a,s,u,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=s,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=a,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,s=i.elements,u=this.elements,f=a[0],d=a[3],m=a[6],p=a[1],_=a[4],g=a[7],v=a[2],y=a[5],T=a[8],E=s[0],M=s[3],x=s[6],L=s[1],U=s[4],C=s[7],O=s[2],P=s[5],N=s[8];return u[0]=f*E+d*L+m*O,u[3]=f*M+d*U+m*P,u[6]=f*x+d*C+m*N,u[1]=p*E+_*L+g*O,u[4]=p*M+_*U+g*P,u[7]=p*x+_*C+g*N,u[2]=v*E+y*L+T*O,u[5]=v*M+y*U+T*P,u[8]=v*x+y*C+T*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],s=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-a*u*_+a*d*m+s*u*p-s*f*m}invert(){const t=this.elements,i=t[0],a=t[1],s=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*f-d*p,v=d*m-_*u,y=p*u-f*m,T=i*g+a*v+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=g*E,t[1]=(s*p-_*a)*E,t[2]=(d*a-s*f)*E,t[3]=v*E,t[4]=(_*i-s*m)*E,t[5]=(s*u-d*i)*E,t[6]=y*E,t[7]=(a*m-p*i)*E,t[8]=(f*i-a*u)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,s,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(a*m,a*p,-a*(m*f+p*d)+f+t,-s*p,s*m,-s*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(vp.makeScale(t,i)),this}rotate(t){return this.premultiply(vp.makeRotation(-t)),this}translate(t,i){return this.premultiply(vp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let s=0;s<9;s++)if(i[s]!==a[s])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vp=new Me;function uv(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function zc(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function B1(){const l=zc("canvas");return l.style.display="block",l}const cv={};function zo(l){l in cv||(cv[l]=!0,console.warn(l))}function F1(l,t,i){return new Promise(function(a,s){function u(){switch(l.clientWaitSync(t,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:s();break;case l.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:a()}}setTimeout(u,i)})}const fv=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hv=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H1(){const l={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(s,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ze&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(s.applyMatrix3(this.spaces[u].toXYZ),s.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ze&&(s.r=Io(s.r),s.g=Io(s.g),s.b=Io(s.b))),s},workingToColorSpace:function(s,u){return this.convert(s,this.workingColorSpace,u)},colorSpaceToWorking:function(s,u){return this.convert(s,u,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gr?Oc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,u=this.workingColorSpace){return s.fromArray(this.spaces[u].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,u,f){return s.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,u){return zo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),l.workingToColorSpace(s,u)},toWorkingColorSpace:function(s,u){return zo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),l.colorSpaceToWorking(s,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return l.define({[Lo]:{primaries:t,whitePoint:a,transfer:Oc,toXYZ:fv,fromXYZ:hv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:t,whitePoint:a,transfer:Ze,toXYZ:fv,fromXYZ:hv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}}),l}const Ie=H1();function ar(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Io(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let Bo;class G1{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Bo===void 0&&(Bo=zc("canvas")),Bo.width=t.width,Bo.height=t.height;const s=Bo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=Bo}return a.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=zc("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),u=s.data;for(let f=0;f<u.length;f++)u[f]=ar(u[f]/255)*255;return a.putImageData(s,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(ar(i[a]/255)*255):i[a]=ar(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let V1=0;class xp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=fu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let u;if(Array.isArray(s)){u=[];for(let f=0,d=s.length;f<d;f++)s[f].isDataTexture?u.push(Sp(s[f].image)):u.push(Sp(s[f]))}else u=Sp(s);a.url=u}return i||(t.images[this.uuid]=a),a}}function Sp(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?G1.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X1=0;const yp=new ht;class ni extends Po{constructor(t=ni.DEFAULT_IMAGE,i=ni.DEFAULT_MAPPING,a=Ps,s=Ps,u=ra,f=Hr,d=sa,m=nr,p=ni.DEFAULT_ANISOTROPY,_=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=fu(),this.name="",this.source=new xp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yp).x}get height(){return this.source.getSize(yp).y}get depth(){return this.source.getSize(yp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const s=this[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==j0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ld:t.x=t.x-Math.floor(t.x);break;case Ps:t.x=t.x<0?0:1;break;case Od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ld:t.y=t.y-Math.floor(t.y);break;case Ps:t.y=t.y<0?0:1;break;case Od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null,ni.DEFAULT_MAPPING=j0,ni.DEFAULT_ANISOTROPY=1;class xn{constructor(t=0,i=0,a=0,s=1){xn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,s){return this.x=t,this.y=i,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,s=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*a+f[8]*s+f[12]*u,this.y=f[1]*i+f[5]*a+f[9]*s+f[13]*u,this.z=f[2]*i+f[6]*a+f[10]*s+f[14]*u,this.w=f[3]*i+f[7]*a+f[11]*s+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,s,u;const m=t.elements,p=m[0],_=m[4],g=m[8],v=m[1],y=m[5],T=m[9],E=m[2],M=m[6],x=m[10];if(Math.abs(_-v)<.01&&Math.abs(g-E)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+E)<.1&&Math.abs(T+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,C=(y+1)/2,O=(x+1)/2,P=(_+v)/4,N=(g+E)/4,B=(T+M)/4;return U>C&&U>O?U<.01?(a=0,s=.707106781,u=.707106781):(a=Math.sqrt(U),s=P/a,u=N/a):C>O?C<.01?(a=.707106781,s=0,u=.707106781):(s=Math.sqrt(C),a=P/s,u=B/s):O<.01?(a=.707106781,s=.707106781,u=0):(u=Math.sqrt(O),a=N/u,s=B/u),this.set(a,s,u,i),this}let L=Math.sqrt((M-T)*(M-T)+(g-E)*(g-E)+(v-_)*(v-_));return Math.abs(L)<.001&&(L=1),this.x=(M-T)/L,this.y=(g-E)/L,this.z=(v-_)/L,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this.w=Ue(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this.w=Ue(this.w,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ue(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k1 extends Po{constructor(t=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ra,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=a.depth,this.scissor=new xn(0,0,t,i),this.scissorTest=!1,this.viewport=new xn(0,0,t,i);const s={width:t,height:i,depth:a.depth},u=new ni(s);this.textures=[];const f=a.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const i={minFilter:ra,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let s=0,u=this.textures.length;s<u;s++)this.textures[s].image.width=t,this.textures[s].image.height=i,this.textures[s].image.depth=a,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const s=Object.assign({},t.textures[i].image);this.textures[i].source=new xp(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends k1{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class dv extends ni{constructor(t=null,i=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:s},this.magFilter=aa,this.minFilter=aa,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class q1 extends ni{constructor(t=null,i=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:s},this.magFilter=aa,this.minFilter=aa,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pu{constructor(t=new ht(1/0,1/0,1/0),i=new ht(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(oa.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(oa.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=oa.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,oa):oa.fromBufferAttribute(u,f),oa.applyMatrix4(t.matrixWorld),this.expandByPoint(oa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ic.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ic.copy(a.boundingBox)),Ic.applyMatrix4(t.matrixWorld),this.union(Ic)}const s=t.children;for(let u=0,f=s.length;u<f;u++)this.expandByObject(s[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oa),oa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mu),Bc.subVectors(this.max,mu),Fo.subVectors(t.a,mu),Ho.subVectors(t.b,mu),Go.subVectors(t.c,mu),Xr.subVectors(Ho,Fo),kr.subVectors(Go,Ho),Is.subVectors(Fo,Go);let i=[0,-Xr.z,Xr.y,0,-kr.z,kr.y,0,-Is.z,Is.y,Xr.z,0,-Xr.x,kr.z,0,-kr.x,Is.z,0,-Is.x,-Xr.y,Xr.x,0,-kr.y,kr.x,0,-Is.y,Is.x,0];return!Mp(i,Fo,Ho,Go,Bc)||(i=[1,0,0,0,1,0,0,0,1],!Mp(i,Fo,Ho,Go,Bc))?!1:(Fc.crossVectors(Xr,kr),i=[Fc.x,Fc.y,Fc.z],Mp(i,Fo,Ho,Go,Bc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const rr=[new ht,new ht,new ht,new ht,new ht,new ht,new ht,new ht],oa=new ht,Ic=new pu,Fo=new ht,Ho=new ht,Go=new ht,Xr=new ht,kr=new ht,Is=new ht,mu=new ht,Bc=new ht,Fc=new ht,Bs=new ht;function Mp(l,t,i,a,s){for(let u=0,f=l.length-3;u<=f;u+=3){Bs.fromArray(l,u);const d=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),m=t.dot(Bs),p=i.dot(Bs),_=a.dot(Bs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Y1=new pu,_u=new ht,Ep=new ht;class Tp{constructor(t=new ht,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):Y1.setFromPoints(t).getCenter(a);let s=0;for(let u=0,f=t.length;u<f;u++)s=Math.max(s,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_u.subVectors(t,this.center);const i=_u.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),s=(a-this.radius)*.5;this.center.addScaledVector(_u,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ep.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_u.copy(t.center).add(Ep)),this.expandByPoint(_u.copy(t.center).sub(Ep))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sr=new ht,bp=new ht,Hc=new ht,qr=new ht,Ap=new ht,Gc=new ht,Rp=new ht;class W1{constructor(t=new ht,i=new ht(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sr)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=sr.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(sr.copy(this.origin).addScaledVector(this.direction,i),sr.distanceToSquared(t))}distanceSqToSegment(t,i,a,s){bp.copy(t).add(i).multiplyScalar(.5),Hc.copy(i).sub(t).normalize(),qr.copy(this.origin).sub(bp);const u=t.distanceTo(i)*.5,f=-this.direction.dot(Hc),d=qr.dot(this.direction),m=-qr.dot(Hc),p=qr.lengthSq(),_=Math.abs(1-f*f);let g,v,y,T;if(_>0)if(g=f*m-d,v=f*d-m,T=u*_,g>=0)if(v>=-T)if(v<=T){const E=1/_;g*=E,v*=E,y=g*(g+f*v+2*d)+v*(f*g+v+2*m)+p}else v=u,g=Math.max(0,-(f*v+d)),y=-g*g+v*(v+2*m)+p;else v=-u,g=Math.max(0,-(f*v+d)),y=-g*g+v*(v+2*m)+p;else v<=-T?(g=Math.max(0,-(-f*u+d)),v=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+v*(v+2*m)+p):v<=T?(g=0,v=Math.min(Math.max(-u,-m),u),y=v*(v+2*m)+p):(g=Math.max(0,-(f*u+d)),v=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+v*(v+2*m)+p);else v=f>0?-u:u,g=Math.max(0,-(f*v+d)),y=-g*g+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(bp).addScaledVector(Hc,v),y}intersectSphere(t,i){sr.subVectors(t.center,this.origin);const a=sr.dot(this.direction),s=sr.dot(sr)-a*a,u=t.radius*t.radius;if(s>u)return null;const f=Math.sqrt(u-s),d=a-f,m=a+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,s,u,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,s=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,s=(t.min.x-v.x)*p),_>=0?(u=(t.min.y-v.y)*_,f=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,f=(t.min.y-v.y)*_),a>f||u>s||((u>a||isNaN(a))&&(a=u),(f<s||isNaN(s))&&(s=f),g>=0?(d=(t.min.z-v.z)*g,m=(t.max.z-v.z)*g):(d=(t.max.z-v.z)*g,m=(t.min.z-v.z)*g),a>m||d>s)||((d>a||a!==a)&&(a=d),(m<s||s!==s)&&(s=m),s<0)?null:this.at(a>=0?a:s,i)}intersectsBox(t){return this.intersectBox(t,sr)!==null}intersectTriangle(t,i,a,s,u){Ap.subVectors(i,t),Gc.subVectors(a,t),Rp.crossVectors(Ap,Gc);let f=this.direction.dot(Rp),d;if(f>0){if(s)return null;d=1}else if(f<0)d=-1,f=-f;else return null;qr.subVectors(this.origin,t);const m=d*this.direction.dot(Gc.crossVectors(qr,Gc));if(m<0)return null;const p=d*this.direction.dot(Ap.cross(qr));if(p<0||m+p>f)return null;const _=-d*qr.dot(Rp);return _<0?null:this.at(_/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rn{constructor(t,i,a,s,u,f,d,m,p,_,g,v,y,T,E,M){Rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,s,u,f,d,m,p,_,g,v,y,T,E,M)}set(t,i,a,s,u,f,d,m,p,_,g,v,y,T,E,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=a,x[12]=s,x[1]=u,x[5]=f,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=T,x[11]=E,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rn().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,s=1/Vo.setFromMatrixColumn(t,0).length(),u=1/Vo.setFromMatrixColumn(t,1).length(),f=1/Vo.setFromMatrixColumn(t,2).length();return i[0]=a[0]*s,i[1]=a[1]*s,i[2]=a[2]*s,i[3]=0,i[4]=a[4]*u,i[5]=a[5]*u,i[6]=a[6]*u,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,s=t.y,u=t.z,f=Math.cos(a),d=Math.sin(a),m=Math.cos(s),p=Math.sin(s),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const v=f*_,y=f*g,T=d*_,E=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+T*p,i[5]=v-E*p,i[9]=-d*m,i[2]=E-v*p,i[6]=T+y*p,i[10]=f*m}else if(t.order==="YXZ"){const v=m*_,y=m*g,T=p*_,E=p*g;i[0]=v+E*d,i[4]=T*d-y,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-d,i[2]=y*d-T,i[6]=E+v*d,i[10]=f*m}else if(t.order==="ZXY"){const v=m*_,y=m*g,T=p*_,E=p*g;i[0]=v-E*d,i[4]=-f*g,i[8]=T+y*d,i[1]=y+T*d,i[5]=f*_,i[9]=E-v*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const v=f*_,y=f*g,T=d*_,E=d*g;i[0]=m*_,i[4]=T*p-y,i[8]=v*p+E,i[1]=m*g,i[5]=E*p+v,i[9]=y*p-T,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,y=f*p,T=d*m,E=d*p;i[0]=m*_,i[4]=E-v*g,i[8]=T*g+y,i[1]=g,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*g+T,i[10]=v-E*g}else if(t.order==="XZY"){const v=f*m,y=f*p,T=d*m,E=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=v*g+E,i[5]=f*_,i[9]=y*g-T,i[2]=T*g-y,i[6]=d*_,i[10]=E*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Z1,t,j1)}lookAt(t,i,a){const s=this.elements;return Ni.subVectors(t,i),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),Yr.crossVectors(a,Ni),Yr.lengthSq()===0&&(Math.abs(a.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),Yr.crossVectors(a,Ni)),Yr.normalize(),Vc.crossVectors(Ni,Yr),s[0]=Yr.x,s[4]=Vc.x,s[8]=Ni.x,s[1]=Yr.y,s[5]=Vc.y,s[9]=Ni.y,s[2]=Yr.z,s[6]=Vc.z,s[10]=Ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,s=i.elements,u=this.elements,f=a[0],d=a[4],m=a[8],p=a[12],_=a[1],g=a[5],v=a[9],y=a[13],T=a[2],E=a[6],M=a[10],x=a[14],L=a[3],U=a[7],C=a[11],O=a[15],P=s[0],N=s[4],B=s[8],A=s[12],w=s[1],z=s[5],rt=s[9],Q=s[13],$=s[2],ot=s[6],X=s[10],it=s[14],Y=s[3],xt=s[7],yt=s[11],wt=s[15];return u[0]=f*P+d*w+m*$+p*Y,u[4]=f*N+d*z+m*ot+p*xt,u[8]=f*B+d*rt+m*X+p*yt,u[12]=f*A+d*Q+m*it+p*wt,u[1]=_*P+g*w+v*$+y*Y,u[5]=_*N+g*z+v*ot+y*xt,u[9]=_*B+g*rt+v*X+y*yt,u[13]=_*A+g*Q+v*it+y*wt,u[2]=T*P+E*w+M*$+x*Y,u[6]=T*N+E*z+M*ot+x*xt,u[10]=T*B+E*rt+M*X+x*yt,u[14]=T*A+E*Q+M*it+x*wt,u[3]=L*P+U*w+C*$+O*Y,u[7]=L*N+U*z+C*ot+O*xt,u[11]=L*B+U*rt+C*X+O*yt,u[15]=L*A+U*Q+C*it+O*wt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],s=t[8],u=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],v=t[10],y=t[14],T=t[3],E=t[7],M=t[11],x=t[15];return T*(+u*m*g-s*p*g-u*d*v+a*p*v+s*d*y-a*m*y)+E*(+i*m*y-i*p*v+u*f*v-s*f*y+s*p*_-u*m*_)+M*(+i*p*g-i*d*y-u*f*g+a*f*y+u*d*_-a*p*_)+x*(-s*d*_-i*m*g+i*d*v+s*f*g-a*f*v+a*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=i,s[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],s=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],v=t[10],y=t[11],T=t[12],E=t[13],M=t[14],x=t[15],L=g*M*p-E*v*p+E*m*y-d*M*y-g*m*x+d*v*x,U=T*v*p-_*M*p-T*m*y+f*M*y+_*m*x-f*v*x,C=_*E*p-T*g*p+T*d*y-f*E*y-_*d*x+f*g*x,O=T*g*m-_*E*m-T*d*v+f*E*v+_*d*M-f*g*M,P=i*L+a*U+s*C+u*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return t[0]=L*N,t[1]=(E*v*u-g*M*u-E*s*y+a*M*y+g*s*x-a*v*x)*N,t[2]=(d*M*u-E*m*u+E*s*p-a*M*p-d*s*x+a*m*x)*N,t[3]=(g*m*u-d*v*u-g*s*p+a*v*p+d*s*y-a*m*y)*N,t[4]=U*N,t[5]=(_*M*u-T*v*u+T*s*y-i*M*y-_*s*x+i*v*x)*N,t[6]=(T*m*u-f*M*u-T*s*p+i*M*p+f*s*x-i*m*x)*N,t[7]=(f*v*u-_*m*u+_*s*p-i*v*p-f*s*y+i*m*y)*N,t[8]=C*N,t[9]=(T*g*u-_*E*u-T*a*y+i*E*y+_*a*x-i*g*x)*N,t[10]=(f*E*u-T*d*u+T*a*p-i*E*p-f*a*x+i*d*x)*N,t[11]=(_*d*u-f*g*u-_*a*p+i*g*p+f*a*y-i*d*y)*N,t[12]=O*N,t[13]=(_*E*s-T*g*s+T*a*v-i*E*v-_*a*M+i*g*M)*N,t[14]=(T*d*s-f*E*s-T*a*m+i*E*m+f*a*M-i*d*M)*N,t[15]=(f*g*s-_*d*s+_*a*m-i*g*m-f*a*v+i*d*v)*N,this}scale(t){const i=this.elements,a=t.x,s=t.y,u=t.z;return i[0]*=a,i[4]*=s,i[8]*=u,i[1]*=a,i[5]*=s,i[9]*=u,i[2]*=a,i[6]*=s,i[10]*=u,i[3]*=a,i[7]*=s,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,s))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),s=Math.sin(i),u=1-a,f=t.x,d=t.y,m=t.z,p=u*f,_=u*d;return this.set(p*f+a,p*d-s*m,p*m+s*d,0,p*d+s*m,_*d+a,_*m-s*f,0,p*m-s*d,_*m+s*f,u*m*m+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,s,u,f){return this.set(1,a,u,0,t,1,f,0,i,s,1,0,0,0,0,1),this}compose(t,i,a){const s=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,_=f+f,g=d+d,v=u*p,y=u*_,T=u*g,E=f*_,M=f*g,x=d*g,L=m*p,U=m*_,C=m*g,O=a.x,P=a.y,N=a.z;return s[0]=(1-(E+x))*O,s[1]=(y+C)*O,s[2]=(T-U)*O,s[3]=0,s[4]=(y-C)*P,s[5]=(1-(v+x))*P,s[6]=(M+L)*P,s[7]=0,s[8]=(T+U)*N,s[9]=(M-L)*N,s[10]=(1-(v+E))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,i,a){const s=this.elements;let u=Vo.set(s[0],s[1],s[2]).length();const f=Vo.set(s[4],s[5],s[6]).length(),d=Vo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(u=-u),t.x=s[12],t.y=s[13],t.z=s[14],la.copy(this);const p=1/u,_=1/f,g=1/d;return la.elements[0]*=p,la.elements[1]*=p,la.elements[2]*=p,la.elements[4]*=_,la.elements[5]*=_,la.elements[6]*=_,la.elements[8]*=g,la.elements[9]*=g,la.elements[10]*=g,i.setFromRotationMatrix(la),a.x=u,a.y=f,a.z=d,this}makePerspective(t,i,a,s,u,f,d=Ca,m=!1){const p=this.elements,_=2*u/(i-t),g=2*u/(a-s),v=(i+t)/(i-t),y=(a+s)/(a-s);let T,E;if(m)T=u/(f-u),E=f*u/(f-u);else if(d===Ca)T=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===Pc)T=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,a,s,u,f,d=Ca,m=!1){const p=this.elements,_=2/(i-t),g=2/(a-s),v=-(i+t)/(i-t),y=-(a+s)/(a-s);let T,E;if(m)T=1/(f-u),E=f/(f-u);else if(d===Ca)T=-2/(f-u),E=-(f+u)/(f-u);else if(d===Pc)T=-1/(f-u),E=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let s=0;s<16;s++)if(i[s]!==a[s])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const Vo=new ht,la=new Rn,Z1=new ht(0,0,0),j1=new ht(1,1,1),Yr=new ht,Vc=new ht,Ni=new ht,pv=new Rn,mv=new du;class or{constructor(t=0,i=0,a=0,s=or.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,s=this._order){return this._x=t,this._y=i,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const s=t.elements,u=s[0],f=s[4],d=s[8],m=s[1],p=s[5],_=s[9],g=s[2],v=s[6],y=s[10];switch(i){case"XYZ":this._y=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ue(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ue(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return pv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pv,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return mv.setFromEuler(this),this.setFromQuaternion(mv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let K1=0;const gv=new ht,Xo=new du,lr=new Rn,Xc=new ht,gu=new ht,Q1=new ht,J1=new du,vv=new ht(1,0,0),xv=new ht(0,1,0),Sv=new ht(0,0,1),yv={type:"added"},$1={type:"removed"},ko={type:"childadded",child:null},Cp={type:"childremoved",child:null};class Li extends Po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=fu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Li.DEFAULT_UP.clone();const t=new ht,i=new or,a=new du,s=new ht(1,1,1);function u(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(u),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rn},normalMatrix:{value:new Me}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=Li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Xo.setFromAxisAngle(t,i),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(t,i){return Xo.setFromAxisAngle(t,i),this.quaternion.premultiply(Xo),this}rotateX(t){return this.rotateOnAxis(vv,t)}rotateY(t){return this.rotateOnAxis(xv,t)}rotateZ(t){return this.rotateOnAxis(Sv,t)}translateOnAxis(t,i){return gv.copy(t).applyQuaternion(this.quaternion),this.position.add(gv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(vv,t)}translateY(t){return this.translateOnAxis(xv,t)}translateZ(t){return this.translateOnAxis(Sv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?Xc.copy(t):Xc.set(t,i,a);const s=this.parent;this.updateWorldMatrix(!0,!1),gu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(gu,Xc,this.up):lr.lookAt(Xc,gu,this.up),this.quaternion.setFromRotationMatrix(lr),s&&(lr.extractRotation(s.matrixWorld),Xo.setFromRotationMatrix(lr),this.quaternion.premultiply(Xo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yv),ko.child=t,this.dispatchEvent(ko),ko.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent($1),Cp.child=t,this.dispatchEvent(Cp),Cp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),lr.multiply(t.parent.matrixWorld)),t.applyMatrix4(lr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yv),ko.child=t,this.dispatchEvent(ko),ko.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,s=this.children.length;a<s;a++){const f=this.children[a].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const s=this.children;for(let u=0,f=s.length;u<f;u++)s[u].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gu,t,Q1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gu,J1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const s=this.children;for(let u=0,f=s.length;u<f;u++)s[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));s.material=d}else s.material=u(t.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];s.animations.push(u(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),g=f(t.shapes),v=f(t.skeletons),y=f(t.animations),T=f(t.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),T.length>0&&(a.nodes=T)}return a.object=s,a;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}Li.DEFAULT_UP=new ht(0,1,0),Li.DEFAULT_MATRIX_AUTO_UPDATE=!0,Li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ua=new ht,ur=new ht,wp=new ht,cr=new ht,qo=new ht,Yo=new ht,Mv=new ht,Dp=new ht,Up=new ht,Np=new ht,Lp=new xn,Op=new xn,Pp=new xn;class ca{constructor(t=new ht,i=new ht,a=new ht){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,s){s.subVectors(a,i),ua.subVectors(t,i),s.cross(ua);const u=s.lengthSq();return u>0?s.multiplyScalar(1/Math.sqrt(u)):s.set(0,0,0)}static getBarycoord(t,i,a,s,u){ua.subVectors(s,i),ur.subVectors(a,i),wp.subVectors(t,i);const f=ua.dot(ua),d=ua.dot(ur),m=ua.dot(wp),p=ur.dot(ur),_=ur.dot(wp),g=f*p-d*d;if(g===0)return u.set(0,0,0),null;const v=1/g,y=(p*m-d*_)*v,T=(f*_-d*m)*v;return u.set(1-y-T,T,y)}static containsPoint(t,i,a,s){return this.getBarycoord(t,i,a,s,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(t,i,a,s,u,f,d,m){return this.getBarycoord(t,i,a,s,cr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,cr.x),m.addScaledVector(f,cr.y),m.addScaledVector(d,cr.z),m)}static getInterpolatedAttribute(t,i,a,s,u,f){return Lp.setScalar(0),Op.setScalar(0),Pp.setScalar(0),Lp.fromBufferAttribute(t,i),Op.fromBufferAttribute(t,a),Pp.fromBufferAttribute(t,s),f.setScalar(0),f.addScaledVector(Lp,u.x),f.addScaledVector(Op,u.y),f.addScaledVector(Pp,u.z),f}static isFrontFacing(t,i,a,s){return ua.subVectors(a,i),ur.subVectors(t,i),ua.cross(ur).dot(s)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,s){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,i,a,s){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ua.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),ua.cross(ur).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ca.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ca.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,a,s,u){return ca.getInterpolation(t,this.a,this.b,this.c,i,a,s,u)}containsPoint(t){return ca.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ca.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,s=this.b,u=this.c;let f,d;qo.subVectors(s,a),Yo.subVectors(u,a),Dp.subVectors(t,a);const m=qo.dot(Dp),p=Yo.dot(Dp);if(m<=0&&p<=0)return i.copy(a);Up.subVectors(t,s);const _=qo.dot(Up),g=Yo.dot(Up);if(_>=0&&g<=_)return i.copy(s);const v=m*g-_*p;if(v<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(a).addScaledVector(qo,f);Np.subVectors(t,u);const y=qo.dot(Np),T=Yo.dot(Np);if(T>=0&&y<=T)return i.copy(u);const E=y*p-m*T;if(E<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(a).addScaledVector(Yo,d);const M=_*T-y*g;if(M<=0&&g-_>=0&&y-T>=0)return Mv.subVectors(u,s),d=(g-_)/(g-_+(y-T)),i.copy(s).addScaledVector(Mv,d);const x=1/(M+E+v);return f=E*x,d=v*x,i.copy(a).addScaledVector(qo,f).addScaledVector(Yo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},kc={h:0,s:0,l:0};function zp(l,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?l+(t-l)*6*i:i<1/2?t:i<2/3?l+(t-l)*6*(2/3-i):l}class ke{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,i),this}setRGB(t,i,a,s=Ie.workingColorSpace){return this.r=t,this.g=i,this.b=a,Ie.colorSpaceToWorking(this,s),this}setHSL(t,i,a,s=Ie.workingColorSpace){if(t=I1(t,1),i=Ue(i,0,1),a=Ue(a,0,1),i===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+i):a+i-a*i,f=2*a-u;this.r=zp(f,u,t+1/3),this.g=zp(f,u,t),this.b=zp(f,u,t-1/3)}return Ie.colorSpaceToWorking(this,s),this}setStyle(t,i=Ui){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=s[1],d=s[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=s[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ui){const a=Ev[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ui){return Ie.workingToColorSpace(Jn.copy(this),t),Math.round(Ue(Jn.r*255,0,255))*65536+Math.round(Ue(Jn.g*255,0,255))*256+Math.round(Ue(Jn.b*255,0,255))}getHexString(t=Ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ie.workingColorSpace){Ie.workingToColorSpace(Jn.copy(this),i);const a=Jn.r,s=Jn.g,u=Jn.b,f=Math.max(a,s,u),d=Math.min(a,s,u);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=_<=.5?g/(f+d):g/(2-f-d),f){case a:m=(s-u)/g+(s<u?6:0);break;case s:m=(u-a)/g+2;break;case u:m=(a-s)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ie.workingColorSpace){return Ie.workingToColorSpace(Jn.copy(this),i),t.r=Jn.r,t.g=Jn.g,t.b=Jn.b,t}getStyle(t=Ui){Ie.workingToColorSpace(Jn.copy(this),t);const i=Jn.r,a=Jn.g,s=Jn.b;return t!==Ui?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,i,a){return this.getHSL(Wr),this.setHSL(Wr.h+t,Wr.s+i,Wr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(Wr),t.getHSL(kc);const a=_p(Wr.h,kc.h,i),s=_p(Wr.s,kc.s,i),u=_p(Wr.l,kc.l,i);return this.setHSL(a,s,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,s=this.b,u=t.elements;return this.r=u[0]*i+u[3]*a+u[6]*s,this.g=u[1]*i+u[4]*a+u[7]*s,this.b=u[2]*i+u[5]*a+u[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new ke;ke.NAMES=Ev;let tb=0;class qc extends Po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=fu(),this.name="",this.type="Material",this.blending=wo,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=Ed,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const s=this[i];if(s===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(a.blending=this.blending),this.side!==Ir&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Md&&(a.blendSrc=this.blendSrc),this.blendDst!==Ed&&(a.blendDst=this.blendDst),this.blendEquation!==Os&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==av&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Oo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Oo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=s(t.textures),f=s(t.images);u.length>0&&(a.textures=u),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const s=i.length;a=new Array(s);for(let u=0;u!==s;++u)a[u]=i[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ip extends qc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=Z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Mn=new ht,Yc=new Ge;let eb=0;class wa{constructor(t,i,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=sv,this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let s=0,u=this.itemSize;s<u;s++)this.array[t+s]=i.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Yc.fromBufferAttribute(this,i),Yc.applyMatrix3(t),this.setXY(i,Yc.x,Yc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=hu(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=_i(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=hu(i,this.array)),i}setX(t,i){return this.normalized&&(i=_i(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=hu(i,this.array)),i}setY(t,i){return this.normalized&&(i=_i(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=hu(i,this.array)),i}setZ(t,i){return this.normalized&&(i=_i(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=hu(i,this.array)),i}setW(t,i){return this.normalized&&(i=_i(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=_i(i,this.array),a=_i(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,s){return t*=this.itemSize,this.normalized&&(i=_i(i,this.array),a=_i(a,this.array),s=_i(s,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,i,a,s,u){return t*=this.itemSize,this.normalized&&(i=_i(i,this.array),a=_i(a,this.array),s=_i(s,this.array),u=_i(u,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sv&&(t.usage=this.usage),t}}class Tv extends wa{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class bv extends wa{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class Fs extends wa{constructor(t,i,a){super(new Float32Array(t),i,a)}}let nb=0;const Wi=new Rn,Bp=new Li,Wo=new ht,Oi=new pu,vu=new pu,Nn=new ht;class Hs extends Po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=fu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uv(t)?bv:Tv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new Me().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wi.makeRotationFromQuaternion(t),this.applyMatrix4(Wi),this}rotateX(t){return Wi.makeRotationX(t),this.applyMatrix4(Wi),this}rotateY(t){return Wi.makeRotationY(t),this.applyMatrix4(Wi),this}rotateZ(t){return Wi.makeRotationZ(t),this.applyMatrix4(Wi),this}translate(t,i,a){return Wi.makeTranslation(t,i,a),this.applyMatrix4(Wi),this}scale(t,i,a){return Wi.makeScale(t,i,a),this.applyMatrix4(Wi),this}lookAt(t){return Bp.lookAt(t),Bp.updateMatrix(),this.applyMatrix4(Bp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wo).negate(),this.translate(Wo.x,Wo.y,Wo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let s=0,u=t.length;s<u;s++){const f=t[s];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Fs(a,3))}else{const a=Math.min(t.length,i.count);for(let s=0;s<a;s++){const u=t[s];i.setXYZ(s,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ht(-1/0,-1/0,-1/0),new ht(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,s=i.length;a<s;a++){const u=i[a];Oi.setFromBufferAttribute(u),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,Oi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,Oi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(Oi.min),this.boundingBox.expandByPoint(Oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ht,1/0);return}if(t){const a=this.boundingSphere.center;if(Oi.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];vu.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(Oi.min,vu.min),Oi.expandByPoint(Nn),Nn.addVectors(Oi.max,vu.max),Oi.expandByPoint(Nn)):(Oi.expandByPoint(vu.min),Oi.expandByPoint(vu.max))}Oi.getCenter(a);let s=0;for(let u=0,f=t.count;u<f;u++)Nn.fromBufferAttribute(t,u),s=Math.max(s,a.distanceToSquared(Nn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Nn.fromBufferAttribute(d,p),m&&(Wo.fromBufferAttribute(t,p),Nn.add(Wo)),s=Math.max(s,a.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,s=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wa(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let B=0;B<a.count;B++)d[B]=new ht,m[B]=new ht;const p=new ht,_=new ht,g=new ht,v=new Ge,y=new Ge,T=new Ge,E=new ht,M=new ht;function x(B,A,w){p.fromBufferAttribute(a,B),_.fromBufferAttribute(a,A),g.fromBufferAttribute(a,w),v.fromBufferAttribute(u,B),y.fromBufferAttribute(u,A),T.fromBufferAttribute(u,w),_.sub(p),g.sub(p),y.sub(v),T.sub(v);const z=1/(y.x*T.y-T.x*y.y);isFinite(z)&&(E.copy(_).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(z),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(z),d[B].add(E),d[A].add(E),d[w].add(E),m[B].add(M),m[A].add(M),m[w].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let B=0,A=L.length;B<A;++B){const w=L[B],z=w.start,rt=w.count;for(let Q=z,$=z+rt;Q<$;Q+=3)x(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const U=new ht,C=new ht,O=new ht,P=new ht;function N(B){O.fromBufferAttribute(s,B),P.copy(O);const A=d[B];U.copy(A),U.sub(O.multiplyScalar(O.dot(A))).normalize(),C.crossVectors(P,A);const z=C.dot(m[B])<0?-1:1;f.setXYZW(B,U.x,U.y,U.z,z)}for(let B=0,A=L.length;B<A;++B){const w=L[B],z=w.start,rt=w.count;for(let Q=z,$=z+rt;Q<$;Q+=3)N(t.getX(Q+0)),N(t.getX(Q+1)),N(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new wa(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const s=new ht,u=new ht,f=new ht,d=new ht,m=new ht,p=new ht,_=new ht,g=new ht;if(t)for(let v=0,y=t.count;v<y;v+=3){const T=t.getX(v+0),E=t.getX(v+1),M=t.getX(v+2);s.fromBufferAttribute(i,T),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),_.subVectors(f,u),g.subVectors(s,u),_.cross(g),d.fromBufferAttribute(a,T),m.fromBufferAttribute(a,E),p.fromBufferAttribute(a,M),d.add(_),m.add(_),p.add(_),a.setXYZ(T,d.x,d.y,d.z),a.setXYZ(E,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)s.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),_.subVectors(f,u),g.subVectors(s,u),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,v=new p.constructor(m.length*_);let y=0,T=0;for(let E=0,M=m.length;E<M;E++){d.isInterleavedBufferAttribute?y=m[E]*d.data.stride+d.offset:y=m[E]*_;for(let x=0;x<_;x++)v[T++]=p[y++]}return new wa(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Hs,a=this.index.array,s=this.attributes;for(const d in s){const m=s[d],p=t(m,a);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,g=p.length;_<g;_++){const v=p[_],y=t(v,a);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const s={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(s[m]=_,u=!0)}u&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const p in s){const _=s[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Av=new Rn,Gs=new W1,Wc=new Tp,Rv=new ht,Zc=new ht,jc=new ht,Kc=new ht,Fp=new ht,Qc=new ht,Cv=new ht,Jc=new ht;class fa extends Li{constructor(t=new Hs,i=new Ip){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const s=i[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=s.length;u<f;u++){const d=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const a=this.geometry,s=a.attributes.position,u=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(s,t);const d=this.morphTargetInfluences;if(u&&d){Qc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],g=u[m];_!==0&&(Fp.fromBufferAttribute(g,t),f?Qc.addScaledVector(Fp,_):Qc.addScaledVector(Fp.sub(i),_))}i.add(Qc)}return i}raycast(t,i){const a=this.geometry,s=this.material,u=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Wc.copy(a.boundingSphere),Wc.applyMatrix4(u),Gs.copy(t.ray).recast(t.near),!(Wc.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(Wc,Rv)===null||Gs.origin.distanceToSquared(Rv)>(t.far-t.near)**2))&&(Av.copy(u).invert(),Gs.copy(t.ray).applyMatrix4(Av),!(a.boundingBox!==null&&Gs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,Gs)))}_computeIntersections(t,i,a){let s;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,v=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,E=v.length;T<E;T++){const M=v[T],x=f[M.materialIndex],L=Math.max(M.start,y.start),U=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let C=L,O=U;C<O;C+=3){const P=d.getX(C),N=d.getX(C+1),B=d.getX(C+2);s=$c(this,x,t,a,p,_,g,P,N,B),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=M.materialIndex,i.push(s))}}else{const T=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let M=T,x=E;M<x;M+=3){const L=d.getX(M),U=d.getX(M+1),C=d.getX(M+2);s=$c(this,f,t,a,p,_,g,L,U,C),s&&(s.faceIndex=Math.floor(M/3),i.push(s))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,E=v.length;T<E;T++){const M=v[T],x=f[M.materialIndex],L=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let C=L,O=U;C<O;C+=3){const P=C,N=C+1,B=C+2;s=$c(this,x,t,a,p,_,g,P,N,B),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=M.materialIndex,i.push(s))}}else{const T=Math.max(0,y.start),E=Math.min(m.count,y.start+y.count);for(let M=T,x=E;M<x;M+=3){const L=M,U=M+1,C=M+2;s=$c(this,f,t,a,p,_,g,L,U,C),s&&(s.faceIndex=Math.floor(M/3),i.push(s))}}}}function ib(l,t,i,a,s,u,f,d){let m;if(t.side===mi?m=a.intersectTriangle(f,u,s,!0,d):m=a.intersectTriangle(s,u,f,t.side===Ir,d),m===null)return null;Jc.copy(d),Jc.applyMatrix4(l.matrixWorld);const p=i.ray.origin.distanceTo(Jc);return p<i.near||p>i.far?null:{distance:p,point:Jc.clone(),object:l}}function $c(l,t,i,a,s,u,f,d,m,p){l.getVertexPosition(d,Zc),l.getVertexPosition(m,jc),l.getVertexPosition(p,Kc);const _=ib(l,t,i,a,Zc,jc,Kc,Cv);if(_){const g=new ht;ca.getBarycoord(Cv,Zc,jc,Kc,g),s&&(_.uv=ca.getInterpolatedAttribute(s,d,m,p,g,new Ge)),u&&(_.uv1=ca.getInterpolatedAttribute(u,d,m,p,g,new Ge)),f&&(_.normal=ca.getInterpolatedAttribute(f,d,m,p,g,new ht),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new ht,materialIndex:0};ca.getNormal(Zc,jc,Kc,v.normal),_.face=v,_.barycoord=g}return _}class xu extends Hs{constructor(t=1,i=1,a=1,s=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:s,heightSegments:u,depthSegments:f};const d=this;s=Math.floor(s),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],_=[],g=[];let v=0,y=0;T("z","y","x",-1,-1,a,i,t,f,u,0),T("z","y","x",1,-1,a,i,-t,f,u,1),T("x","z","y",1,1,t,a,i,s,f,2),T("x","z","y",1,-1,t,a,-i,s,f,3),T("x","y","z",1,-1,t,i,a,s,u,4),T("x","y","z",-1,-1,t,i,-a,s,u,5),this.setIndex(m),this.setAttribute("position",new Fs(p,3)),this.setAttribute("normal",new Fs(_,3)),this.setAttribute("uv",new Fs(g,2));function T(E,M,x,L,U,C,O,P,N,B,A){const w=C/N,z=O/B,rt=C/2,Q=O/2,$=P/2,ot=N+1,X=B+1;let it=0,Y=0;const xt=new ht;for(let yt=0;yt<X;yt++){const wt=yt*z-Q;for(let Wt=0;Wt<ot;Wt++){const xe=Wt*w-rt;xt[E]=xe*L,xt[M]=wt*U,xt[x]=$,p.push(xt.x,xt.y,xt.z),xt[E]=0,xt[M]=0,xt[x]=P>0?1:-1,_.push(xt.x,xt.y,xt.z),g.push(Wt/N),g.push(1-yt/B),it+=1}}for(let yt=0;yt<B;yt++)for(let wt=0;wt<N;wt++){const Wt=v+wt+ot*yt,xe=v+wt+ot*(yt+1),H=v+(wt+1)+ot*(yt+1),V=v+(wt+1)+ot*yt;m.push(Wt,xe,V),m.push(xe,H,V),Y+=6}d.addGroup(y,Y,A),y+=Y,v+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zo(l){const t={};for(const i in l){t[i]={};for(const a in l[i]){const s=l[i][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=s.clone():Array.isArray(s)?t[i][a]=s.slice():t[i][a]=s}}return t}function ii(l){const t={};for(let i=0;i<l.length;i++){const a=Zo(l[i]);for(const s in a)t[s]=a[s]}return t}function ab(l){const t=[];for(let i=0;i<l.length;i++)t.push(l[i].clone());return t}function wv(l){const t=l.getRenderTarget();return t===null?l.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const rb={clone:Zo,merge:ii};var sb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ob=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends qc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sb,this.fragmentShader=ob,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zo(t.uniforms),this.uniformsGroups=ab(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const s in this.uniforms){const f=this.uniforms[s].value;f&&f.isTexture?i.uniforms[s]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[s]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[s]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[s]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[s]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[s]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[s]={type:"m4",value:f.toArray()}:i.uniforms[s]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class Dv extends Li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=Ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new ht,Uv=new Ge,Nv=new Ge;class ha extends Dv{constructor(t=50,i=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=mp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pp*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mp*2*Math.atan(Math.tan(pp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,a){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zr.x,Zr.y).multiplyScalar(-t/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Zr.x,Zr.y).multiplyScalar(-t/Zr.z)}getViewSize(t,i){return this.getViewBounds(t,Uv,Nv),i.subVectors(Nv,Uv)}setViewOffset(t,i,a,s,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(pp*.5*this.fov)/this.zoom,a=2*i,s=this.aspect*a,u=-.5*s;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*s/m,i-=f.offsetY*a/p,s*=f.width/m,a*=f.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+s,i,i-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const jo=-90,Ko=1;class lb extends Li{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ha(jo,Ko,t,i);s.layers=this.layers,this.add(s);const u=new ha(jo,Ko,t,i);u.layers=this.layers,this.add(u);const f=new ha(jo,Ko,t,i);f.layers=this.layers,this.add(f);const d=new ha(jo,Ko,t,i);d.layers=this.layers,this.add(d);const m=new ha(jo,Ko,t,i);m.layers=this.layers,this.add(m);const p=new ha(jo,Ko,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,s,u,f,d,m]=i;for(const p of i)this.remove(p);if(t===Ca)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Pc)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(i,u),t.setRenderTarget(a,1,s),t.render(i,f),t.setRenderTarget(a,2,s),t.render(i,d),t.setRenderTarget(a,3,s),t.render(i,m),t.setRenderTarget(a,4,s),t.render(i,p),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,s),t.render(i,_),t.setRenderTarget(g,v,y),t.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class Lv extends ni{constructor(t=[],i=Uo,a,s,u,f,d,m,p,_){super(t,i,a,s,u,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ub extends Vr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new Lv(s),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xu(5,5,5),u=new fr({name:"CubemapFromEquirect",uniforms:Zo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:mi,blending:Br});u.uniforms.tEquirect.value=i;const f=new fa(s,u),d=i.minFilter;return i.minFilter===Hr&&(i.minFilter=ra),new lb(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,a=!0,s=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,a,s);t.setRenderTarget(u)}}class tf extends Li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cb={type:"move"};class Hp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ht,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ht),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ht,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ht),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let s=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const E of t.hand.values()){const M=i.getJointPose(E,a),x=this._getHandJoint(p,E);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,T=.005;p.inputState.pinching&&v>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,a),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(s=i.getPose(t.targetRaySpace,a),s===null&&u!==null&&(s=u),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(cb)))}return d!==null&&(d.visible=s!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new tf;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}class Ov extends Li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Gp=new ht,fb=new ht,hb=new Me;class Vs{constructor(t=new ht(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,s){return this.normal.set(t,i,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const s=Gp.subVectors(a,i).cross(fb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const a=t.delta(Gp),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/s;return u<0||u>1?null:i.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||hb.getNormalMatrix(t),s=this.coplanarPoint(Gp).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new Tp,db=new Ge(.5,.5),ef=new ht;class Pv{constructor(t=new Vs,i=new Vs,a=new Vs,s=new Vs,u=new Vs,f=new Vs){this.planes=[t,i,a,s,u,f]}set(t,i,a,s,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(a),d[3].copy(s),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=Ca,a=!1){const s=this.planes,u=t.elements,f=u[0],d=u[1],m=u[2],p=u[3],_=u[4],g=u[5],v=u[6],y=u[7],T=u[8],E=u[9],M=u[10],x=u[11],L=u[12],U=u[13],C=u[14],O=u[15];if(s[0].setComponents(p-f,y-_,x-T,O-L).normalize(),s[1].setComponents(p+f,y+_,x+T,O+L).normalize(),s[2].setComponents(p+d,y+g,x+E,O+U).normalize(),s[3].setComponents(p-d,y-g,x-E,O-U).normalize(),a)s[4].setComponents(m,v,M,C).normalize(),s[5].setComponents(p-m,y-v,x-M,O-C).normalize();else if(s[4].setComponents(p-m,y-v,x-M,O-C).normalize(),i===Ca)s[5].setComponents(p+m,y+v,x+M,O+C).normalize();else if(i===Pc)s[5].setComponents(m,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const i=db.distanceTo(t.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const i=this.planes,a=t.center,s=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const s=i[a];if(ef.x=s.normal.x>0?t.max.x:t.min.x,ef.y=s.normal.y>0?t.max.y:t.min.y,ef.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ef)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zv extends ni{constructor(t,i,a=zs,s,u,f,d=aa,m=aa,p,_=uu,g=1){if(_!==uu&&_!==cu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:g};super(v,s,u,f,d,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Qo extends Hs{constructor(t=1,i=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:s};const u=t/2,f=i/2,d=Math.floor(a),m=Math.floor(s),p=d+1,_=m+1,g=t/d,v=i/m,y=[],T=[],E=[],M=[];for(let x=0;x<_;x++){const L=x*v-f;for(let U=0;U<p;U++){const C=U*g-u;T.push(C,-L,0),E.push(0,0,1),M.push(U/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let L=0;L<d;L++){const U=L+p*x,C=L+p*(x+1),O=L+1+p*(x+1),P=L+1+p*x;y.push(U,C,P),y.push(C,O,P)}this.setIndex(y),this.setAttribute("position",new Fs(T,3)),this.setAttribute("normal",new Fs(E,3)),this.setAttribute("uv",new Fs(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.width,t.height,t.widthSegments,t.heightSegments)}}class pb extends qc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mb extends qc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Vp extends Dv{constructor(t=-1,i=1,a=1,s=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=s,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,s,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let u=a-t,f=a+t,d=s+i,m=s-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _b extends ha{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Iv(l,t,i,a){const s=gb(a);switch(i){case $0:return l*t;case ev:return l*t/s.components*s.byteLength;case Fd:return l*t/s.components*s.byteLength;case nv:return l*t*2/s.components*s.byteLength;case Hd:return l*t*2/s.components*s.byteLength;case tv:return l*t*3/s.components*s.byteLength;case sa:return l*t*4/s.components*s.byteLength;case Gd:return l*t*4/s.components*s.byteLength;case wc:case Dc:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Uc:case Nc:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Xd:case qd:return Math.max(l,16)*Math.max(t,8)/4;case Vd:case kd:return Math.max(l,8)*Math.max(t,8)/2;case Yd:case Wd:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Zd:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case jd:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((l+4)/5)*Math.floor((t+3)/4)*16;case Qd:return Math.floor((l+4)/5)*Math.floor((t+4)/5)*16;case Jd:return Math.floor((l+5)/6)*Math.floor((t+4)/5)*16;case $d:return Math.floor((l+5)/6)*Math.floor((t+5)/6)*16;case tp:return Math.floor((l+7)/8)*Math.floor((t+4)/5)*16;case ep:return Math.floor((l+7)/8)*Math.floor((t+5)/6)*16;case np:return Math.floor((l+7)/8)*Math.floor((t+7)/8)*16;case ip:return Math.floor((l+9)/10)*Math.floor((t+4)/5)*16;case ap:return Math.floor((l+9)/10)*Math.floor((t+5)/6)*16;case rp:return Math.floor((l+9)/10)*Math.floor((t+7)/8)*16;case sp:return Math.floor((l+9)/10)*Math.floor((t+9)/10)*16;case op:return Math.floor((l+11)/12)*Math.floor((t+9)/10)*16;case lp:return Math.floor((l+11)/12)*Math.floor((t+11)/12)*16;case Lc:case up:case cp:return Math.ceil(l/4)*Math.ceil(t/4)*16;case iv:case fp:return Math.ceil(l/4)*Math.ceil(t/4)*8;case hp:case dp:return Math.ceil(l/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gb(l){switch(l){case nr:case K0:return{byteLength:1,components:1};case su:case Q0:case ou:return{byteLength:2,components:1};case Id:case Bd:return{byteLength:2,components:4};case zs:case zd:case ir:return{byteLength:4,components:1};case J0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${l}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);function Bv(){let l=null,t=!1,i=null,a=null;function s(u,f){i(u,f),a=l.requestAnimationFrame(s)}return{start:function(){t!==!0&&i!==null&&(a=l.requestAnimationFrame(s),t=!0)},stop:function(){l.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){l=u}}}function vb(l){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,v=l.createBuffer();l.bindBuffer(m,v),l.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=l.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=l.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=l.HALF_FLOAT:y=l.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=l.SHORT;else if(p instanceof Uint32Array)y=l.UNSIGNED_INT;else if(p instanceof Int32Array)y=l.INT;else if(p instanceof Int8Array)y=l.BYTE;else if(p instanceof Uint8Array)y=l.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function a(d,m,p){const _=m.array,g=m.updateRanges;if(l.bindBuffer(p,d),g.length===0)l.bufferSubData(p,0,_);else{g.sort((y,T)=>y.start-T.start);let v=0;for(let y=1;y<g.length;y++){const T=g[v],E=g[y];E.start<=T.start+T.count+1?T.count=Math.max(T.count,E.start+E.count-T.start):(++v,g[v]=E)}g.length=v+1;for(let y=0,T=g.length;y<T;y++){const E=g[y];l.bufferSubData(p,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(l.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:s,remove:u,update:f}}var xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sb=`#ifdef USE_ALPHAHASH
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
#endif`,yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bb=`#ifdef USE_AOMAP
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
#endif`,Ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rb=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ub=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nb=`#ifdef USE_IRIDESCENCE
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
#endif`,Lb=`#ifdef USE_BUMPMAP
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
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vb=`#define PI 3.141592653589793
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
} // validated`,Xb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kb=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,tA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eA=`#ifdef USE_ENVMAP
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
#endif`,nA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sA=`#ifdef USE_GRADIENTMAP
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
}`,oA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cA=`uniform bool receiveShadow;
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
#endif`,fA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
#endif`,hA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_A=`PhysicalMaterial material;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
}`,vA=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xA=`#if defined( RE_IndirectDiffuse )
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
#endif`,SA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CA=`#if defined( USE_POINTS_UV )
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
#endif`,wA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OA=`#ifdef USE_MORPHTARGETS
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
#endif`,PA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GA=`#ifdef USE_NORMALMAP
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
#endif`,VA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ZA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$A=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iR=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,aR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rR=`#ifdef USE_SKINNING
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
#endif`,sR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oR=`#ifdef USE_SKINNING
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
#endif`,lR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hR=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dR=`#ifdef USE_TRANSMISSION
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
#endif`,pR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ee={alphahash_fragment:xb,alphahash_pars_fragment:Sb,alphamap_fragment:yb,alphamap_pars_fragment:Mb,alphatest_fragment:Eb,alphatest_pars_fragment:Tb,aomap_fragment:bb,aomap_pars_fragment:Ab,batching_pars_vertex:Rb,batching_vertex:Cb,begin_vertex:wb,beginnormal_vertex:Db,bsdfs:Ub,iridescence_fragment:Nb,bumpmap_pars_fragment:Lb,clipping_planes_fragment:Ob,clipping_planes_pars_fragment:Pb,clipping_planes_pars_vertex:zb,clipping_planes_vertex:Ib,color_fragment:Bb,color_pars_fragment:Fb,color_pars_vertex:Hb,color_vertex:Gb,common:Vb,cube_uv_reflection_fragment:Xb,defaultnormal_vertex:kb,displacementmap_pars_vertex:qb,displacementmap_vertex:Yb,emissivemap_fragment:Wb,emissivemap_pars_fragment:Zb,colorspace_fragment:jb,colorspace_pars_fragment:Kb,envmap_fragment:Qb,envmap_common_pars_fragment:Jb,envmap_pars_fragment:$b,envmap_pars_vertex:tA,envmap_physical_pars_fragment:fA,envmap_vertex:eA,fog_vertex:nA,fog_pars_vertex:iA,fog_fragment:aA,fog_pars_fragment:rA,gradientmap_pars_fragment:sA,lightmap_pars_fragment:oA,lights_lambert_fragment:lA,lights_lambert_pars_fragment:uA,lights_pars_begin:cA,lights_toon_fragment:hA,lights_toon_pars_fragment:dA,lights_phong_fragment:pA,lights_phong_pars_fragment:mA,lights_physical_fragment:_A,lights_physical_pars_fragment:gA,lights_fragment_begin:vA,lights_fragment_maps:xA,lights_fragment_end:SA,logdepthbuf_fragment:yA,logdepthbuf_pars_fragment:MA,logdepthbuf_pars_vertex:EA,logdepthbuf_vertex:TA,map_fragment:bA,map_pars_fragment:AA,map_particle_fragment:RA,map_particle_pars_fragment:CA,metalnessmap_fragment:wA,metalnessmap_pars_fragment:DA,morphinstance_vertex:UA,morphcolor_vertex:NA,morphnormal_vertex:LA,morphtarget_pars_vertex:OA,morphtarget_vertex:PA,normal_fragment_begin:zA,normal_fragment_maps:IA,normal_pars_fragment:BA,normal_pars_vertex:FA,normal_vertex:HA,normalmap_pars_fragment:GA,clearcoat_normal_fragment_begin:VA,clearcoat_normal_fragment_maps:XA,clearcoat_pars_fragment:kA,iridescence_pars_fragment:qA,opaque_fragment:YA,packing:WA,premultiplied_alpha_fragment:ZA,project_vertex:jA,dithering_fragment:KA,dithering_pars_fragment:QA,roughnessmap_fragment:JA,roughnessmap_pars_fragment:$A,shadowmap_pars_fragment:tR,shadowmap_pars_vertex:eR,shadowmap_vertex:nR,shadowmask_pars_fragment:iR,skinbase_vertex:aR,skinning_pars_vertex:rR,skinning_vertex:sR,skinnormal_vertex:oR,specularmap_fragment:lR,specularmap_pars_fragment:uR,tonemapping_fragment:cR,tonemapping_pars_fragment:fR,transmission_fragment:hR,transmission_pars_fragment:dR,uv_pars_fragment:pR,uv_pars_vertex:mR,uv_vertex:_R,worldpos_vertex:gR,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},kt={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},Da={basic:{uniforms:ii([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:ii([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:ii([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:ii([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:ii([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:ii([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:ii([kt.points,kt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:ii([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:ii([kt.common,kt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:ii([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:ii([kt.sprite,kt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:ii([kt.common,kt.displacementmap,{referencePosition:{value:new ht},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:ii([kt.lights,kt.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Da.physical={uniforms:ii([Da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const nf={r:0,b:0,g:0},ks=new or,vR=new Rn;function xR(l,t,i,a,s,u,f){const d=new ke(0);let m=u===!0?0:1,p,_,g=null,v=0,y=null;function T(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?i:t).get(C)),C}function E(U){let C=!1;const O=T(U);O===null?x(d,m):O&&O.isColor&&(x(O,1),C=!0);const P=l.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,f):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(l.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function M(U,C){const O=T(C);O&&(O.isCubeTexture||O.mapping===Rc)?(_===void 0&&(_=new fa(new xu(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:Zo(Da.backgroundCube.uniforms),vertexShader:Da.backgroundCube.vertexShader,fragmentShader:Da.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(P,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),ks.copy(C.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(vR.makeRotationFromEuler(ks)),_.material.toneMapped=Ie.getTransfer(O.colorSpace)!==Ze,(g!==O||v!==O.version||y!==l.toneMapping)&&(_.material.needsUpdate=!0,g=O,v=O.version,y=l.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new fa(new Qo(2,2),new fr({name:"BackgroundMaterial",uniforms:Zo(Da.background.uniforms),vertexShader:Da.background.vertexShader,fragmentShader:Da.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Ie.getTransfer(O.colorSpace)!==Ze,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||v!==O.version||y!==l.toneMapping)&&(p.material.needsUpdate=!0,g=O,v=O.version,y=l.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,C){U.getRGB(nf,wv(l)),a.buffers.color.setClear(nf.r,nf.g,nf.b,C,f)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,C=1){d.set(U),m=C,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,x(d,m)},render:E,addToRenderList:M,dispose:L}}function SR(l,t){const i=l.getParameter(l.MAX_VERTEX_ATTRIBS),a={},s=v(null);let u=s,f=!1;function d(w,z,rt,Q,$){let ot=!1;const X=g(Q,rt,z);u!==X&&(u=X,p(u.object)),ot=y(w,Q,rt,$),ot&&T(w,Q,rt,$),$!==null&&t.update($,l.ELEMENT_ARRAY_BUFFER),(ot||f)&&(f=!1,C(w,z,rt,Q),$!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function m(){return l.createVertexArray()}function p(w){return l.bindVertexArray(w)}function _(w){return l.deleteVertexArray(w)}function g(w,z,rt){const Q=rt.wireframe===!0;let $=a[w.id];$===void 0&&($={},a[w.id]=$);let ot=$[z.id];ot===void 0&&(ot={},$[z.id]=ot);let X=ot[Q];return X===void 0&&(X=v(m()),ot[Q]=X),X}function v(w){const z=[],rt=[],Q=[];for(let $=0;$<i;$++)z[$]=0,rt[$]=0,Q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:rt,attributeDivisors:Q,object:w,attributes:{},index:null}}function y(w,z,rt,Q){const $=u.attributes,ot=z.attributes;let X=0;const it=rt.getAttributes();for(const Y in it)if(it[Y].location>=0){const yt=$[Y];let wt=ot[Y];if(wt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(wt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(wt=w.instanceColor)),yt===void 0||yt.attribute!==wt||wt&&yt.data!==wt.data)return!0;X++}return u.attributesNum!==X||u.index!==Q}function T(w,z,rt,Q){const $={},ot=z.attributes;let X=0;const it=rt.getAttributes();for(const Y in it)if(it[Y].location>=0){let yt=ot[Y];yt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor));const wt={};wt.attribute=yt,yt&&yt.data&&(wt.data=yt.data),$[Y]=wt,X++}u.attributes=$,u.attributesNum=X,u.index=Q}function E(){const w=u.newAttributes;for(let z=0,rt=w.length;z<rt;z++)w[z]=0}function M(w){x(w,0)}function x(w,z){const rt=u.newAttributes,Q=u.enabledAttributes,$=u.attributeDivisors;rt[w]=1,Q[w]===0&&(l.enableVertexAttribArray(w),Q[w]=1),$[w]!==z&&(l.vertexAttribDivisor(w,z),$[w]=z)}function L(){const w=u.newAttributes,z=u.enabledAttributes;for(let rt=0,Q=z.length;rt<Q;rt++)z[rt]!==w[rt]&&(l.disableVertexAttribArray(rt),z[rt]=0)}function U(w,z,rt,Q,$,ot,X){X===!0?l.vertexAttribIPointer(w,z,rt,$,ot):l.vertexAttribPointer(w,z,rt,Q,$,ot)}function C(w,z,rt,Q){E();const $=Q.attributes,ot=rt.getAttributes(),X=z.defaultAttributeValues;for(const it in ot){const Y=ot[it];if(Y.location>=0){let xt=$[it];if(xt===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor)),xt!==void 0){const yt=xt.normalized,wt=xt.itemSize,Wt=t.get(xt);if(Wt===void 0)continue;const xe=Wt.buffer,H=Wt.type,V=Wt.bytesPerElement,dt=H===l.INT||H===l.UNSIGNED_INT||xt.gpuType===zd;if(xt.isInterleavedBufferAttribute){const ct=xt.data,Ut=ct.stride,Rt=xt.offset;if(ct.isInstancedInterleavedBuffer){for(let Ft=0;Ft<Y.locationSize;Ft++)x(Y.location+Ft,ct.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ft=0;Ft<Y.locationSize;Ft++)M(Y.location+Ft);l.bindBuffer(l.ARRAY_BUFFER,xe);for(let Ft=0;Ft<Y.locationSize;Ft++)U(Y.location+Ft,wt/Y.locationSize,H,yt,Ut*V,(Rt+wt/Y.locationSize*Ft)*V,dt)}else{if(xt.isInstancedBufferAttribute){for(let ct=0;ct<Y.locationSize;ct++)x(Y.location+ct,xt.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ct=0;ct<Y.locationSize;ct++)M(Y.location+ct);l.bindBuffer(l.ARRAY_BUFFER,xe);for(let ct=0;ct<Y.locationSize;ct++)U(Y.location+ct,wt/Y.locationSize,H,yt,wt*V,wt/Y.locationSize*ct*V,dt)}}else if(X!==void 0){const yt=X[it];if(yt!==void 0)switch(yt.length){case 2:l.vertexAttrib2fv(Y.location,yt);break;case 3:l.vertexAttrib3fv(Y.location,yt);break;case 4:l.vertexAttrib4fv(Y.location,yt);break;default:l.vertexAttrib1fv(Y.location,yt)}}}}L()}function O(){B();for(const w in a){const z=a[w];for(const rt in z){const Q=z[rt];for(const $ in Q)_(Q[$].object),delete Q[$];delete z[rt]}delete a[w]}}function P(w){if(a[w.id]===void 0)return;const z=a[w.id];for(const rt in z){const Q=z[rt];for(const $ in Q)_(Q[$].object),delete Q[$];delete z[rt]}delete a[w.id]}function N(w){for(const z in a){const rt=a[z];if(rt[w.id]===void 0)continue;const Q=rt[w.id];for(const $ in Q)_(Q[$].object),delete Q[$];delete rt[w.id]}}function B(){A(),f=!0,u!==s&&(u=s,p(u.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:B,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:M,disableUnusedAttributes:L}}function yR(l,t,i){let a;function s(p){a=p}function u(p,_){l.drawArrays(a,p,_),i.update(_,a,1)}function f(p,_,g){g!==0&&(l.drawArraysInstanced(a,p,_,g),i.update(_,a,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,_,0,g);let y=0;for(let T=0;T<g;T++)y+=_[T];i.update(y,a,1)}function m(p,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)f(p[T],_[T],v[T]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,_,0,v,0,g);let T=0;for(let E=0;E<g;E++)T+=_[E]*v[E];i.update(T,a,1)}}this.setMode=s,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function MR(l,t,i,a){let s;function u(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=l.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function f(N){return!(N!==sa&&a.convert(N)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const B=N===ou&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==nr&&a.convert(N)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ir&&!B)}function m(N){if(N==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),T=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=l.getParameter(l.MAX_TEXTURE_SIZE),M=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),x=l.getParameter(l.MAX_VERTEX_ATTRIBS),L=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),U=l.getParameter(l.MAX_VARYING_VECTORS),C=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),O=T>0,P=l.getParameter(l.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:T,maxTextureSize:E,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:O,maxSamples:P}}function ER(l){const t=this;let i=null,a=0,s=!1,u=!1;const f=new Vs,d=new Me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||s;return s=v,a=g.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,y){const T=g.clippingPlanes,E=g.clipIntersection,M=g.clipShadows,x=l.get(g);if(!s||T===null||T.length===0||u&&!M)u?_(null):p();else{const L=u?0:a,U=L*4;let C=x.clippingState||null;m.value=C,C=_(T,v,U,y);for(let O=0;O!==U;++O)C[O]=i[O];x.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,y,T){const E=g!==null?g.length:0;let M=null;if(E!==0){if(M=m.value,T!==!0||M===null){const x=y+E*4,L=v.matrixWorldInverse;d.getNormalMatrix(L),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,C=y;U!==E;++U,C+=4)f.copy(g[U]).applyMatrix4(L,d),f.normal.toArray(M,C),M[C+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,M}}function TR(l){let t=new WeakMap;function i(f,d){return d===Ud?f.mapping=Uo:d===Nd&&(f.mapping=No),f}function a(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ud||d===Nd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new ub(m.height);return p.fromEquirectangularTexture(l,f),t.set(f,p),f.addEventListener("dispose",s),i(p.texture,f.mapping)}else return null}}return f}function s(f){const d=f.target;d.removeEventListener("dispose",s);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}const Jo=4,Fv=[.125,.215,.35,.446,.526,.582],qs=20,Xp=new Vp,Hv=new ke;let kp=null,qp=0,Yp=0,Wp=!1;const Ys=(1+Math.sqrt(5))/2,$o=1/Ys,Gv=[new ht(-Ys,$o,0),new ht(Ys,$o,0),new ht(-$o,0,Ys),new ht($o,0,Ys),new ht(0,Ys,-$o),new ht(0,Ys,$o),new ht(-1,1,-1),new ht(1,1,-1),new ht(-1,1,1),new ht(1,1,1)],bR=new ht;class Vv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,s=100,u={}){const{size:f=256,position:d=bR}=u;kp=this._renderer.getRenderTarget(),qp=this._renderer.getActiveCubeFace(),Yp=this._renderer.getActiveMipmapLevel(),Wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,s,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kp,qp,Yp),this._renderer.xr.enabled=Wp,t.scissorTest=!1,af(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Uo||t.mapping===No?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kp=this._renderer.getRenderTarget(),qp=this._renderer.getActiveCubeFace(),Yp=this._renderer.getActiveMipmapLevel(),Wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:ra,minFilter:ra,generateMipmaps:!1,type:ou,format:sa,colorSpace:Lo,depthBuffer:!1},s=Xv(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xv(t,i,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AR(u)),this._blurMaterial=RR(u,t,i)}return s}_compileMaterial(t){const i=new fa(this._lodPlanes[0],t);this._renderer.compile(i,Xp)}_sceneToCubeUV(t,i,a,s,u){const m=new ha(90,1,i,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Hv),g.toneMapping=Fr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null));const E=new Ip({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1}),M=new fa(new xu,E);let x=!1;const L=t.background;L?L.isColor&&(E.color.copy(L),t.background=null,x=!0):(E.color.copy(Hv),x=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[U],u.y,u.z)):C===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[U]));const O=this._cubeSize;af(s,C*O,U>2?O:0,O,O),g.setRenderTarget(s),x&&g.render(M,m),g.render(t,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=v,t.background=L}_textureToCubeUV(t,i){const a=this._renderer,s=t.mapping===Uo||t.mapping===No;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kv());const u=s?this._cubemapMaterial:this._equirectMaterial,f=new fa(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;af(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(f,Xp)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const s=this._lodPlanes.length;for(let u=1;u<s;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Gv[(s-u-1)%Gv.length];this._blur(t,u-1,u,f,d)}i.autoClear=a}_blur(t,i,a,s,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,a,s,"latitudinal",u),this._halfBlur(f,t,a,a,s,"longitudinal",u)}_halfBlur(t,i,a,s,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new fa(this._lodPlanes[s],p),v=p.uniforms,y=this._sizeLods[a]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*qs-1),E=u/T,M=isFinite(u)?1+Math.floor(_*E):qs;M>qs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${qs}`);const x=[];let L=0;for(let N=0;N<qs;++N){const B=N/E,A=Math.exp(-B*B/2);x.push(A),N===0?L+=A:N<M&&(L+=2*A)}for(let N=0;N<x.length;N++)x[N]=x[N]/L;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:U}=this;v.dTheta.value=T,v.mipInt.value=U-a;const C=this._sizeLods[s],O=3*C*(s>U-Jo?s-U+Jo:0),P=4*(this._cubeSize-C);af(i,O,P,3*C,2*C),m.setRenderTarget(i),m.render(g,Xp)}}function AR(l){const t=[],i=[],a=[];let s=l;const u=l-Jo+1+Fv.length;for(let f=0;f<u;f++){const d=Math.pow(2,s);i.push(d);let m=1/d;f>l-Jo?m=Fv[f-l+Jo-1]:f===0&&(m=0),a.push(m);const p=1/(d-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,T=6,E=3,M=2,x=1,L=new Float32Array(E*T*y),U=new Float32Array(M*T*y),C=new Float32Array(x*T*y);for(let P=0;P<y;P++){const N=P%3*2/3-1,B=P>2?0:-1,A=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];L.set(A,E*T*P),U.set(v,M*T*P);const w=[P,P,P,P,P,P];C.set(w,x*T*P)}const O=new Hs;O.setAttribute("position",new wa(L,E)),O.setAttribute("uv",new wa(U,M)),O.setAttribute("faceIndex",new wa(C,x)),t.push(O),s>Jo&&s--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function Xv(l,t,i){const a=new Vr(l,t,i);return a.texture.mapping=Rc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function af(l,t,i,a,s){l.viewport.set(t,i,a,s),l.scissor.set(t,i,a,s)}function RR(l,t,i){const a=new Float32Array(qs),s=new ht(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zp(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function kv(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zp(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function qv(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Zp(){return`

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
	`}function CR(l){let t=new WeakMap,i=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ud||m===Nd,_=m===Uo||m===No;if(p||_){let g=t.get(d);const v=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new Vv(l)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&s(y)?(i===null&&(i=new Vv(l)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function s(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function wR(l){const t={};function i(a){if(t[a]!==void 0)return t[a];let s;switch(a){case"WEBGL_depth_texture":s=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=l.getExtension(a)}return t[a]=s,s}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const s=i(a);return s===null&&zo("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function DR(l,t,i,a){const s={},u=new WeakMap;function f(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",f),delete s[v.id];const y=u.get(v);y&&(t.remove(y),u.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(g,v){return s[v.id]===!0||(v.addEventListener("dispose",f),s[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const y in v)t.update(v[y],l.ARRAY_BUFFER)}function p(g){const v=[],y=g.index,T=g.attributes.position;let E=0;if(y!==null){const L=y.array;E=y.version;for(let U=0,C=L.length;U<C;U+=3){const O=L[U+0],P=L[U+1],N=L[U+2];v.push(O,P,P,N,N,O)}}else if(T!==void 0){const L=T.array;E=T.version;for(let U=0,C=L.length/3-1;U<C;U+=3){const O=U+0,P=U+1,N=U+2;v.push(O,P,P,N,N,O)}}else return;const M=new(uv(v)?bv:Tv)(v,1);M.version=E;const x=u.get(g);x&&t.remove(x),u.set(g,M)}function _(g){const v=u.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function UR(l,t,i){let a;function s(v){a=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function m(v,y){l.drawElements(a,y,u,v*f),i.update(y,a,1)}function p(v,y,T){T!==0&&(l.drawElementsInstanced(a,y,u,v*f,T),i.update(y,a,T))}function _(v,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,u,v,0,T);let M=0;for(let x=0;x<T;x++)M+=y[x];i.update(M,a,1)}function g(v,y,T,E){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/f,y[x],E[x]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,u,v,0,E,0,T);let x=0;for(let L=0;L<T;L++)x+=y[L]*E[L];i.update(x,a,1)}}this.setMode=s,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function NR(l){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,f,d){switch(i.calls++,f){case l.TRIANGLES:i.triangles+=d*(u/3);break;case l.LINES:i.lines+=d*(u/2);break;case l.LINE_STRIP:i.lines+=d*(u-1);break;case l.LINE_LOOP:i.lines+=d*u;break;case l.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function s(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:s,update:a}}function LR(l,t,i){const a=new WeakMap,s=new xn;function u(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(d);if(v===void 0||v.count!==g){let A=function(){N.dispose(),a.delete(d),d.removeEventListener("dispose",A)};v!==void 0&&v.texture.dispose();const y=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;y===!0&&(U=1),T===!0&&(U=2),E===!0&&(U=3);let C=d.attributes.position.count*U,O=1;C>t.maxTextureSize&&(O=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*O*4*g),N=new dv(P,C,O,g);N.type=ir,N.needsUpdate=!0;const B=U*4;for(let w=0;w<g;w++){const z=M[w],rt=x[w],Q=L[w],$=C*O*4*w;for(let ot=0;ot<z.count;ot++){const X=ot*B;y===!0&&(s.fromBufferAttribute(z,ot),P[$+X+0]=s.x,P[$+X+1]=s.y,P[$+X+2]=s.z,P[$+X+3]=0),T===!0&&(s.fromBufferAttribute(rt,ot),P[$+X+4]=s.x,P[$+X+5]=s.y,P[$+X+6]=s.z,P[$+X+7]=0),E===!0&&(s.fromBufferAttribute(Q,ot),P[$+X+8]=s.x,P[$+X+9]=s.y,P[$+X+10]=s.z,P[$+X+11]=Q.itemSize===4?s.w:1)}}v={count:g,texture:N,size:new Ge(C,O)},a.set(d,v),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(l,"morphTexture",f.morphTexture,i);else{let y=0;for(let E=0;E<p.length;E++)y+=p[E];const T=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(l,"morphTargetBaseInfluence",T),m.getUniforms().setValue(l,"morphTargetInfluences",p)}m.getUniforms().setValue(l,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(l,"morphTargetsTextureSize",v.size)}return{update:u}}function OR(l,t,i,a){let s=new WeakMap;function u(m){const p=a.render.frame,_=m.geometry,g=t.get(m,_);if(s.get(g)!==p&&(t.update(g),s.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),s.get(m)!==p&&(i.update(m.instanceMatrix,l.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,l.ARRAY_BUFFER),s.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;s.get(v)!==p&&(v.update(),s.set(v,p))}return g}function f(){s=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const Yv=new ni,Wv=new zv(1,1),Zv=new dv,jv=new q1,Kv=new Lv,Qv=[],Jv=[],$v=new Float32Array(16),tx=new Float32Array(9),ex=new Float32Array(4);function tl(l,t,i){const a=l[0];if(a<=0||a>0)return l;const s=t*i;let u=Qv[s];if(u===void 0&&(u=new Float32Array(s),Qv[s]=u),t!==0){a.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,l[f].toArray(u,d)}return u}function Cn(l,t){if(l.length!==t.length)return!1;for(let i=0,a=l.length;i<a;i++)if(l[i]!==t[i])return!1;return!0}function wn(l,t){for(let i=0,a=t.length;i<a;i++)l[i]=t[i]}function rf(l,t){let i=Jv[t];i===void 0&&(i=new Int32Array(t),Jv[t]=i);for(let a=0;a!==t;++a)i[a]=l.allocateTextureUnit();return i}function PR(l,t){const i=this.cache;i[0]!==t&&(l.uniform1f(this.addr,t),i[0]=t)}function zR(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Cn(i,t))return;l.uniform2fv(this.addr,t),wn(i,t)}}function IR(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Cn(i,t))return;l.uniform3fv(this.addr,t),wn(i,t)}}function BR(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Cn(i,t))return;l.uniform4fv(this.addr,t),wn(i,t)}}function FR(l,t){const i=this.cache,a=t.elements;if(a===void 0){if(Cn(i,t))return;l.uniformMatrix2fv(this.addr,!1,t),wn(i,t)}else{if(Cn(i,a))return;ex.set(a),l.uniformMatrix2fv(this.addr,!1,ex),wn(i,a)}}function HR(l,t){const i=this.cache,a=t.elements;if(a===void 0){if(Cn(i,t))return;l.uniformMatrix3fv(this.addr,!1,t),wn(i,t)}else{if(Cn(i,a))return;tx.set(a),l.uniformMatrix3fv(this.addr,!1,tx),wn(i,a)}}function GR(l,t){const i=this.cache,a=t.elements;if(a===void 0){if(Cn(i,t))return;l.uniformMatrix4fv(this.addr,!1,t),wn(i,t)}else{if(Cn(i,a))return;$v.set(a),l.uniformMatrix4fv(this.addr,!1,$v),wn(i,a)}}function VR(l,t){const i=this.cache;i[0]!==t&&(l.uniform1i(this.addr,t),i[0]=t)}function XR(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Cn(i,t))return;l.uniform2iv(this.addr,t),wn(i,t)}}function kR(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Cn(i,t))return;l.uniform3iv(this.addr,t),wn(i,t)}}function qR(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Cn(i,t))return;l.uniform4iv(this.addr,t),wn(i,t)}}function YR(l,t){const i=this.cache;i[0]!==t&&(l.uniform1ui(this.addr,t),i[0]=t)}function WR(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Cn(i,t))return;l.uniform2uiv(this.addr,t),wn(i,t)}}function ZR(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Cn(i,t))return;l.uniform3uiv(this.addr,t),wn(i,t)}}function jR(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Cn(i,t))return;l.uniform4uiv(this.addr,t),wn(i,t)}}function KR(l,t,i){const a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(l.uniform1i(this.addr,s),a[0]=s);let u;this.type===l.SAMPLER_2D_SHADOW?(Wv.compareFunction=rv,u=Wv):u=Yv,i.setTexture2D(t||u,s)}function QR(l,t,i){const a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(l.uniform1i(this.addr,s),a[0]=s),i.setTexture3D(t||jv,s)}function JR(l,t,i){const a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(l.uniform1i(this.addr,s),a[0]=s),i.setTextureCube(t||Kv,s)}function $R(l,t,i){const a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(l.uniform1i(this.addr,s),a[0]=s),i.setTexture2DArray(t||Zv,s)}function tC(l){switch(l){case 5126:return PR;case 35664:return zR;case 35665:return IR;case 35666:return BR;case 35674:return FR;case 35675:return HR;case 35676:return GR;case 5124:case 35670:return VR;case 35667:case 35671:return XR;case 35668:case 35672:return kR;case 35669:case 35673:return qR;case 5125:return YR;case 36294:return WR;case 36295:return ZR;case 36296:return jR;case 35678:case 36198:case 36298:case 36306:case 35682:return KR;case 35679:case 36299:case 36307:return QR;case 35680:case 36300:case 36308:case 36293:return JR;case 36289:case 36303:case 36311:case 36292:return $R}}function eC(l,t){l.uniform1fv(this.addr,t)}function nC(l,t){const i=tl(t,this.size,2);l.uniform2fv(this.addr,i)}function iC(l,t){const i=tl(t,this.size,3);l.uniform3fv(this.addr,i)}function aC(l,t){const i=tl(t,this.size,4);l.uniform4fv(this.addr,i)}function rC(l,t){const i=tl(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,i)}function sC(l,t){const i=tl(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,i)}function oC(l,t){const i=tl(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,i)}function lC(l,t){l.uniform1iv(this.addr,t)}function uC(l,t){l.uniform2iv(this.addr,t)}function cC(l,t){l.uniform3iv(this.addr,t)}function fC(l,t){l.uniform4iv(this.addr,t)}function hC(l,t){l.uniform1uiv(this.addr,t)}function dC(l,t){l.uniform2uiv(this.addr,t)}function pC(l,t){l.uniform3uiv(this.addr,t)}function mC(l,t){l.uniform4uiv(this.addr,t)}function _C(l,t,i){const a=this.cache,s=t.length,u=rf(i,s);Cn(a,u)||(l.uniform1iv(this.addr,u),wn(a,u));for(let f=0;f!==s;++f)i.setTexture2D(t[f]||Yv,u[f])}function gC(l,t,i){const a=this.cache,s=t.length,u=rf(i,s);Cn(a,u)||(l.uniform1iv(this.addr,u),wn(a,u));for(let f=0;f!==s;++f)i.setTexture3D(t[f]||jv,u[f])}function vC(l,t,i){const a=this.cache,s=t.length,u=rf(i,s);Cn(a,u)||(l.uniform1iv(this.addr,u),wn(a,u));for(let f=0;f!==s;++f)i.setTextureCube(t[f]||Kv,u[f])}function xC(l,t,i){const a=this.cache,s=t.length,u=rf(i,s);Cn(a,u)||(l.uniform1iv(this.addr,u),wn(a,u));for(let f=0;f!==s;++f)i.setTexture2DArray(t[f]||Zv,u[f])}function SC(l){switch(l){case 5126:return eC;case 35664:return nC;case 35665:return iC;case 35666:return aC;case 35674:return rC;case 35675:return sC;case 35676:return oC;case 5124:case 35670:return lC;case 35667:case 35671:return uC;case 35668:case 35672:return cC;case 35669:case 35673:return fC;case 5125:return hC;case 36294:return dC;case 36295:return pC;case 36296:return mC;case 35678:case 36198:case 36298:case 36306:case 35682:return _C;case 35679:case 36299:case 36307:return gC;case 35680:case 36300:case 36308:case 36293:return vC;case 36289:case 36303:case 36311:case 36292:return xC}}class yC{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=tC(i.type)}}class MC{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=SC(i.type)}}class EC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const s=this.seq;for(let u=0,f=s.length;u!==f;++u){const d=s[u];d.setValue(t,i[d.id],a)}}}const jp=/(\w+)(\])?(\[|\.)?/g;function nx(l,t){l.seq.push(t),l.map[t.id]=t}function TC(l,t,i){const a=l.name,s=a.length;for(jp.lastIndex=0;;){const u=jp.exec(a),f=jp.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===s){nx(i,p===void 0?new yC(d,l,t):new MC(d,l,t));break}else{let g=i.map[d];g===void 0&&(g=new EC(d),nx(i,g)),i=g}}}class sf{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const u=t.getActiveUniform(i,s),f=t.getUniformLocation(i,u.name);TC(u,f,this)}}setValue(t,i,a,s){const u=this.map[i];u!==void 0&&u.setValue(t,a,s)}setOptional(t,i,a){const s=i[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,i,a,s){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=a[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,s)}}static seqWithValue(t,i){const a=[];for(let s=0,u=t.length;s!==u;++s){const f=t[s];f.id in i&&a.push(f)}return a}}function ix(l,t,i){const a=l.createShader(t);return l.shaderSource(a,i),l.compileShader(a),a}const bC=37297;let AC=0;function RC(l,t){const i=l.split(`
`),a=[],s=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=s;f<u;f++){const d=f+1;a.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return a.join(`
`)}const ax=new Me;function CC(l){Ie._getMatrix(ax,Ie.workingColorSpace,l);const t=`mat3( ${ax.elements.map(i=>i.toFixed(4))} )`;switch(Ie.getTransfer(l)){case Oc:return[t,"LinearTransferOETF"];case Ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",l),[t,"LinearTransferOETF"]}}function rx(l,t,i){const a=l.getShaderParameter(t,l.COMPILE_STATUS),u=(l.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+RC(l.getShaderSource(t),d)}else return u}function wC(l,t){const i=CC(t);return[`vec4 ${l}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function DC(l,t){let i;switch(t){case v1:i="Linear";break;case x1:i="Reinhard";break;case S1:i="Cineon";break;case y1:i="ACESFilmic";break;case E1:i="AgX";break;case T1:i="Neutral";break;case M1:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+l+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const of=new ht;function UC(){Ie.getLuminanceCoefficients(of);const l=of.x.toFixed(4),t=of.y.toFixed(4),i=of.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NC(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Su).join(`
`)}function LC(l){const t=[];for(const i in l){const a=l[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function OC(l,t){const i={},a=l.getProgramParameter(t,l.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const u=l.getActiveAttrib(t,s),f=u.name;let d=1;u.type===l.FLOAT_MAT2&&(d=2),u.type===l.FLOAT_MAT3&&(d=3),u.type===l.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:l.getAttribLocation(t,f),locationSize:d}}return i}function Su(l){return l!==""}function sx(l,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ox(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const PC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kp(l){return l.replace(PC,IC)}const zC=new Map;function IC(l,t){let i=Ee[t];if(i===void 0){const a=zC.get(t);if(a!==void 0)i=Ee[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Kp(i)}const BC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lx(l){return l.replace(BC,FC)}function FC(l,t,i,a){let s="";for(let u=parseInt(t);u<parseInt(i);u++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return s}function ux(l){let t=`precision ${l.precision} float;
	precision ${l.precision} int;
	precision ${l.precision} sampler2D;
	precision ${l.precision} samplerCube;
	precision ${l.precision} sampler3D;
	precision ${l.precision} sampler2DArray;
	precision ${l.precision} sampler2DShadow;
	precision ${l.precision} samplerCubeShadow;
	precision ${l.precision} sampler2DArrayShadow;
	precision ${l.precision} isampler2D;
	precision ${l.precision} isampler3D;
	precision ${l.precision} isamplerCube;
	precision ${l.precision} isampler2DArray;
	precision ${l.precision} usampler2D;
	precision ${l.precision} usampler3D;
	precision ${l.precision} usamplerCube;
	precision ${l.precision} usampler2DArray;
	`;return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function HC(l){let t="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===k0?t="SHADOWMAP_TYPE_PCF":l.shadowMapType===QT?t="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===tr&&(t="SHADOWMAP_TYPE_VSM"),t}function GC(l){let t="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case Uo:case No:t="ENVMAP_TYPE_CUBE";break;case Rc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function VC(l){let t="ENVMAP_MODE_REFLECTION";return l.envMap&&l.envMapMode===No&&(t="ENVMAP_MODE_REFRACTION"),t}function XC(l){let t="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case Z0:t="ENVMAP_BLENDING_MULTIPLY";break;case _1:t="ENVMAP_BLENDING_MIX";break;case g1:t="ENVMAP_BLENDING_ADD";break}return t}function kC(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function qC(l,t,i,a){const s=l.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=HC(i),p=GC(i),_=VC(i),g=XC(i),v=kC(i),y=NC(i),T=LC(u),E=s.createProgram();let M,x,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Su).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Su).join(`
`),x.length>0&&(x+=`
`)):(M=[ux(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Su).join(`
`),x=[ux(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fr?"#define TONE_MAPPING":"",i.toneMapping!==Fr?Ee.tonemapping_pars_fragment:"",i.toneMapping!==Fr?DC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,wC("linearToOutputTexel",i.outputColorSpace),UC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Su).join(`
`)),f=Kp(f),f=sx(f,i),f=ox(f,i),d=Kp(d),d=sx(d,i),d=ox(d,i),f=lx(f),d=lx(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=L+M+f,C=L+x+d,O=ix(s,s.VERTEX_SHADER,U),P=ix(s,s.FRAGMENT_SHADER,C);s.attachShader(E,O),s.attachShader(E,P),i.index0AttributeName!==void 0?s.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function N(z){if(l.debug.checkShaderErrors){const rt=s.getProgramInfoLog(E)||"",Q=s.getShaderInfoLog(O)||"",$=s.getShaderInfoLog(P)||"",ot=rt.trim(),X=Q.trim(),it=$.trim();let Y=!0,xt=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(Y=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(s,E,O,P);else{const yt=rx(s,O,"vertex"),wt=rx(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ot+`
`+yt+`
`+wt)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(X===""||it==="")&&(xt=!1);xt&&(z.diagnostics={runnable:Y,programLog:ot,vertexShader:{log:X,prefix:M},fragmentShader:{log:it,prefix:x}})}s.deleteShader(O),s.deleteShader(P),B=new sf(s,E),A=OC(s,E)}let B;this.getUniforms=function(){return B===void 0&&N(this),B};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(E,bC)),w},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=AC++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=O,this.fragmentShader=P,this}let YC=0;class WC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(i),u=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(s)===!1&&(f.add(s),s.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new ZC(t),i.set(t,a)),a}}class ZC{constructor(t){this.id=YC++,this.code=t,this.usedTimes=0}}function jC(l,t,i,a,s,u,f){const d=new _v,m=new WC,p=new Set,_=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,w,z,rt,Q){const $=rt.fog,ot=Q.geometry,X=A.isMeshStandardMaterial?rt.environment:null,it=(A.isMeshStandardMaterial?i:t).get(A.envMap||X),Y=it&&it.mapping===Rc?it.image.height:null,xt=T[A.type];A.precision!==null&&(y=s.getMaxPrecision(A.precision),y!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const yt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,wt=yt!==void 0?yt.length:0;let Wt=0;ot.morphAttributes.position!==void 0&&(Wt=1),ot.morphAttributes.normal!==void 0&&(Wt=2),ot.morphAttributes.color!==void 0&&(Wt=3);let xe,H,V,dt;if(xt){const Te=Da[xt];xe=Te.vertexShader,H=Te.fragmentShader}else xe=A.vertexShader,H=A.fragmentShader,m.update(A),V=m.getVertexShaderID(A),dt=m.getFragmentShaderID(A);const ct=l.getRenderTarget(),Ut=l.state.buffers.depth.getReversed(),Rt=Q.isInstancedMesh===!0,Ft=Q.isBatchedMesh===!0,Pt=!!A.map,zt=!!A.matcap,G=!!it,ze=!!A.aoMap,ae=!!A.lightMap,qt=!!A.bumpMap,Xt=!!A.normalMap,se=!!A.displacementMap,Lt=!!A.emissiveMap,he=!!A.metalnessMap,Ne=!!A.roughnessMap,Le=A.anisotropy>0,I=A.clearcoat>0,R=A.dispersion>0,at=A.iridescence>0,pt=A.sheen>0,St=A.transmission>0,mt=Le&&!!A.anisotropyMap,Kt=I&&!!A.clearcoatMap,Dt=I&&!!A.clearcoatNormalMap,It=I&&!!A.clearcoatRoughnessMap,Qt=at&&!!A.iridescenceMap,Tt=at&&!!A.iridescenceThicknessMap,Gt=pt&&!!A.sheenColorMap,ue=pt&&!!A.sheenRoughnessMap,te=!!A.specularMap,Bt=!!A.specularColorMap,pe=!!A.specularIntensityMap,k=St&&!!A.transmissionMap,bt=St&&!!A.thicknessMap,Nt=!!A.gradientMap,Zt=!!A.alphaMap,Et=A.alphaTest>0,vt=!!A.alphaHash,ee=!!A.extensions;let me=Fr;A.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(me=l.toneMapping);const Be={shaderID:xt,shaderType:A.type,shaderName:A.name,vertexShader:xe,fragmentShader:H,defines:A.defines,customVertexShaderID:V,customFragmentShaderID:dt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ft,batchingColor:Ft&&Q._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&Q.instanceColor!==null,instancingMorph:Rt&&Q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ct===null?l.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Lo,alphaToCoverage:!!A.alphaToCoverage,map:Pt,matcap:zt,envMap:G,envMapMode:G&&it.mapping,envMapCubeUVHeight:Y,aoMap:ze,lightMap:ae,bumpMap:qt,normalMap:Xt,displacementMap:v&&se,emissiveMap:Lt,normalMapObjectSpace:Xt&&A.normalMapType===w1,normalMapTangentSpace:Xt&&A.normalMapType===C1,metalnessMap:he,roughnessMap:Ne,anisotropy:Le,anisotropyMap:mt,clearcoat:I,clearcoatMap:Kt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:It,dispersion:R,iridescence:at,iridescenceMap:Qt,iridescenceThicknessMap:Tt,sheen:pt,sheenColorMap:Gt,sheenRoughnessMap:ue,specularMap:te,specularColorMap:Bt,specularIntensityMap:pe,transmission:St,transmissionMap:k,thicknessMap:bt,gradientMap:Nt,opaque:A.transparent===!1&&A.blending===wo&&A.alphaToCoverage===!1,alphaMap:Zt,alphaTest:Et,alphaHash:vt,combine:A.combine,mapUv:Pt&&E(A.map.channel),aoMapUv:ze&&E(A.aoMap.channel),lightMapUv:ae&&E(A.lightMap.channel),bumpMapUv:qt&&E(A.bumpMap.channel),normalMapUv:Xt&&E(A.normalMap.channel),displacementMapUv:se&&E(A.displacementMap.channel),emissiveMapUv:Lt&&E(A.emissiveMap.channel),metalnessMapUv:he&&E(A.metalnessMap.channel),roughnessMapUv:Ne&&E(A.roughnessMap.channel),anisotropyMapUv:mt&&E(A.anisotropyMap.channel),clearcoatMapUv:Kt&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:ue&&E(A.sheenRoughnessMap.channel),specularMapUv:te&&E(A.specularMap.channel),specularColorMapUv:Bt&&E(A.specularColorMap.channel),specularIntensityMapUv:pe&&E(A.specularIntensityMap.channel),transmissionMapUv:k&&E(A.transmissionMap.channel),thicknessMapUv:bt&&E(A.thicknessMap.channel),alphaMapUv:Zt&&E(A.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(Xt||Le),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ot.attributes.uv&&(Pt||Zt),fog:!!$,useFog:A.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ut,skinning:Q.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Wt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:l.shadowMap.enabled&&z.length>0,shadowMapType:l.shadowMap.type,toneMapping:me,decodeVideoTexture:Pt&&A.map.isVideoTexture===!0&&Ie.getTransfer(A.map.colorSpace)===Ze,decodeVideoTextureEmissive:Lt&&A.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(A.emissiveMap.colorSpace)===Ze,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===er,flipSided:A.side===mi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ee&&A.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&A.extensions.multiDraw===!0||Ft)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function x(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)w.push(z),w.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(L(w,A),U(w,A),w.push(l.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function L(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function U(A,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),A.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),A.push(d.mask)}function C(A){const w=T[A.type];let z;if(w){const rt=Da[w];z=rb.clone(rt.uniforms)}else z=A.uniforms;return z}function O(A,w){let z;for(let rt=0,Q=_.length;rt<Q;rt++){const $=_[rt];if($.cacheKey===w){z=$,++z.usedTimes;break}}return z===void 0&&(z=new qC(l,w,A,u),_.push(z)),z}function P(A){if(--A.usedTimes===0){const w=_.indexOf(A);_[w]=_[_.length-1],_.pop(),A.destroy()}}function N(A){m.remove(A)}function B(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:C,acquireProgram:O,releaseProgram:P,releaseShaderCache:N,programs:_,dispose:B}}function KC(){let l=new WeakMap;function t(f){return l.has(f)}function i(f){let d=l.get(f);return d===void 0&&(d={},l.set(f,d)),d}function a(f){l.delete(f)}function s(f,d,m){l.get(f)[d]=m}function u(){l=new WeakMap}return{has:t,get:i,remove:a,update:s,dispose:u}}function QC(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.z!==t.z?l.z-t.z:l.id-t.id}function cx(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function fx(){const l=[];let t=0;const i=[],a=[],s=[];function u(){t=0,i.length=0,a.length=0,s.length=0}function f(g,v,y,T,E,M){let x=l[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:T,renderOrder:g.renderOrder,z:E,group:M},l[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=T,x.renderOrder=g.renderOrder,x.z=E,x.group=M),t++,x}function d(g,v,y,T,E,M){const x=f(g,v,y,T,E,M);y.transmission>0?a.push(x):y.transparent===!0?s.push(x):i.push(x)}function m(g,v,y,T,E,M){const x=f(g,v,y,T,E,M);y.transmission>0?a.unshift(x):y.transparent===!0?s.unshift(x):i.unshift(x)}function p(g,v){i.length>1&&i.sort(g||QC),a.length>1&&a.sort(v||cx),s.length>1&&s.sort(v||cx)}function _(){for(let g=t,v=l.length;g<v;g++){const y=l[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:a,transparent:s,init:u,push:d,unshift:m,finish:_,sort:p}}function JC(){let l=new WeakMap;function t(a,s){const u=l.get(a);let f;return u===void 0?(f=new fx,l.set(a,[f])):s>=u.length?(f=new fx,u.push(f)):f=u[s],f}function i(){l=new WeakMap}return{get:t,dispose:i}}function $C(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ht,color:new ke};break;case"SpotLight":i={position:new ht,direction:new ht,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ht,color:new ke,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ht,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":i={color:new ke,position:new ht,halfWidth:new ht,halfHeight:new ht};break}return l[t.id]=i,i}}}function t2(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=i,i}}}let e2=0;function n2(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function i2(l){const t=new $C,i=t2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ht);const s=new ht,u=new Rn,f=new Rn;function d(p){let _=0,g=0,v=0;for(let A=0;A<9;A++)a.probe[A].set(0,0,0);let y=0,T=0,E=0,M=0,x=0,L=0,U=0,C=0,O=0,P=0,N=0;p.sort(n2);for(let A=0,w=p.length;A<w;A++){const z=p[A],rt=z.color,Q=z.intensity,$=z.distance,ot=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=rt.r*Q,g+=rt.g*Q,v+=rt.b*Q;else if(z.isLightProbe){for(let X=0;X<9;X++)a.probe[X].addScaledVector(z.sh.coefficients[X],Q);N++}else if(z.isDirectionalLight){const X=t.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const it=z.shadow,Y=i.get(z);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,a.directionalShadow[y]=Y,a.directionalShadowMap[y]=ot,a.directionalShadowMatrix[y]=z.shadow.matrix,L++}a.directional[y]=X,y++}else if(z.isSpotLight){const X=t.get(z);X.position.setFromMatrixPosition(z.matrixWorld),X.color.copy(rt).multiplyScalar(Q),X.distance=$,X.coneCos=Math.cos(z.angle),X.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),X.decay=z.decay,a.spot[E]=X;const it=z.shadow;if(z.map&&(a.spotLightMap[O]=z.map,O++,it.updateMatrices(z),z.castShadow&&P++),a.spotLightMatrix[E]=it.matrix,z.castShadow){const Y=i.get(z);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,a.spotShadow[E]=Y,a.spotShadowMap[E]=ot,C++}E++}else if(z.isRectAreaLight){const X=t.get(z);X.color.copy(rt).multiplyScalar(Q),X.halfWidth.set(z.width*.5,0,0),X.halfHeight.set(0,z.height*.5,0),a.rectArea[M]=X,M++}else if(z.isPointLight){const X=t.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),X.distance=z.distance,X.decay=z.decay,z.castShadow){const it=z.shadow,Y=i.get(z);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,Y.shadowCameraNear=it.camera.near,Y.shadowCameraFar=it.camera.far,a.pointShadow[T]=Y,a.pointShadowMap[T]=ot,a.pointShadowMatrix[T]=z.shadow.matrix,U++}a.point[T]=X,T++}else if(z.isHemisphereLight){const X=t.get(z);X.skyColor.copy(z.color).multiplyScalar(Q),X.groundColor.copy(z.groundColor).multiplyScalar(Q),a.hemi[x]=X,x++}}M>0&&(l.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=kt.LTC_FLOAT_1,a.rectAreaLTC2=kt.LTC_FLOAT_2):(a.rectAreaLTC1=kt.LTC_HALF_1,a.rectAreaLTC2=kt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const B=a.hash;(B.directionalLength!==y||B.pointLength!==T||B.spotLength!==E||B.rectAreaLength!==M||B.hemiLength!==x||B.numDirectionalShadows!==L||B.numPointShadows!==U||B.numSpotShadows!==C||B.numSpotMaps!==O||B.numLightProbes!==N)&&(a.directional.length=y,a.spot.length=E,a.rectArea.length=M,a.point.length=T,a.hemi.length=x,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=C+O-P,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=N,B.directionalLength=y,B.pointLength=T,B.spotLength=E,B.rectAreaLength=M,B.hemiLength=x,B.numDirectionalShadows=L,B.numPointShadows=U,B.numSpotShadows=C,B.numSpotMaps=O,B.numLightProbes=N,a.version=e2++)}function m(p,_){let g=0,v=0,y=0,T=0,E=0;const M=_.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const U=p[x];if(U.isDirectionalLight){const C=a.directional[g];C.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(M),g++}else if(U.isSpotLight){const C=a.spot[y];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const C=a.rectArea[T];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),f.identity(),u.copy(U.matrixWorld),u.premultiply(M),f.extractRotation(u),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),T++}else if(U.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),v++}else if(U.isHemisphereLight){const C=a.hemi[E];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(M),E++}}}return{setup:d,setupView:m,state:a}}function hx(l){const t=new i2(l),i=[],a=[];function s(_){p.camera=_,i.length=0,a.length=0}function u(_){i.push(_)}function f(_){a.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function a2(l){let t=new WeakMap;function i(s,u=0){const f=t.get(s);let d;return f===void 0?(d=new hx(l),t.set(s,[d])):u>=f.length?(d=new hx(l),f.push(d)):d=f[u],d}function a(){t=new WeakMap}return{get:i,dispose:a}}const r2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s2=`uniform sampler2D shadow_pass;
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
}`;function o2(l,t,i){let a=new Pv;const s=new Ge,u=new Ge,f=new xn,d=new pb({depthPacking:R1}),m=new mb,p={},_=i.maxTextureSize,g={[Ir]:mi,[mi]:Ir,[er]:er},v=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:r2,fragmentShader:s2}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const T=new Hs;T.setAttribute("position",new wa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new fa(T,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k0;let x=this.type;this.render=function(P,N,B){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;const A=l.getRenderTarget(),w=l.getActiveCubeFace(),z=l.getActiveMipmapLevel(),rt=l.state;rt.setBlending(Br),rt.buffers.depth.getReversed()?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const Q=x!==tr&&this.type===tr,$=x===tr&&this.type!==tr;for(let ot=0,X=P.length;ot<X;ot++){const it=P[ot],Y=it.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const xt=Y.getFrameExtents();if(s.multiply(xt),u.copy(Y.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(u.x=Math.floor(_/xt.x),s.x=u.x*xt.x,Y.mapSize.x=u.x),s.y>_&&(u.y=Math.floor(_/xt.y),s.y=u.y*xt.y,Y.mapSize.y=u.y)),Y.map===null||Q===!0||$===!0){const wt=this.type!==tr?{minFilter:aa,magFilter:aa}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Vr(s.x,s.y,wt),Y.map.texture.name=it.name+".shadowMap",Y.camera.updateProjectionMatrix()}l.setRenderTarget(Y.map),l.clear();const yt=Y.getViewportCount();for(let wt=0;wt<yt;wt++){const Wt=Y.getViewport(wt);f.set(u.x*Wt.x,u.y*Wt.y,u.x*Wt.z,u.y*Wt.w),rt.viewport(f),Y.updateMatrices(it,wt),a=Y.getFrustum(),C(N,B,Y.camera,it,this.type)}Y.isPointLightShadow!==!0&&this.type===tr&&L(Y,B),Y.needsUpdate=!1}x=this.type,M.needsUpdate=!1,l.setRenderTarget(A,w,z)};function L(P,N){const B=t.update(E);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Vr(s.x,s.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,l.setRenderTarget(P.mapPass),l.clear(),l.renderBufferDirect(N,null,B,v,E,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,l.setRenderTarget(P.map),l.clear(),l.renderBufferDirect(N,null,B,y,E,null)}function U(P,N,B,A){let w=null;const z=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)w=z;else if(w=B.isPointLight===!0?m:d,l.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const rt=w.uuid,Q=N.uuid;let $=p[rt];$===void 0&&($={},p[rt]=$);let ot=$[Q];ot===void 0&&(ot=w.clone(),$[Q]=ot,N.addEventListener("dispose",O)),w=ot}if(w.visible=N.visible,w.wireframe=N.wireframe,A===tr?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:g[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const rt=l.properties.get(w);rt.light=B}return w}function C(P,N,B,A,w){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===tr)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const Q=t.update(P),$=P.material;if(Array.isArray($)){const ot=Q.groups;for(let X=0,it=ot.length;X<it;X++){const Y=ot[X],xt=$[Y.materialIndex];if(xt&&xt.visible){const yt=U(P,xt,A,w);P.onBeforeShadow(l,P,N,B,Q,yt,Y),l.renderBufferDirect(B,null,Q,yt,P,Y),P.onAfterShadow(l,P,N,B,Q,yt,Y)}}}else if($.visible){const ot=U(P,$,A,w);P.onBeforeShadow(l,P,N,B,Q,ot,null),l.renderBufferDirect(B,null,Q,ot,P,null),P.onAfterShadow(l,P,N,B,Q,ot,null)}}const rt=P.children;for(let Q=0,$=rt.length;Q<$;Q++)C(rt[Q],N,B,A,w)}function O(P){P.target.removeEventListener("dispose",O);for(const B in p){const A=p[B],w=P.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const l2={[Td]:bd,[Ad]:wd,[Rd]:Dd,[Do]:Cd,[bd]:Td,[wd]:Ad,[Dd]:Rd,[Cd]:Do};function u2(l,t){function i(){let k=!1;const bt=new xn;let Nt=null;const Zt=new xn(0,0,0,0);return{setMask:function(Et){Nt!==Et&&!k&&(l.colorMask(Et,Et,Et,Et),Nt=Et)},setLocked:function(Et){k=Et},setClear:function(Et,vt,ee,me,Be){Be===!0&&(Et*=me,vt*=me,ee*=me),bt.set(Et,vt,ee,me),Zt.equals(bt)===!1&&(l.clearColor(Et,vt,ee,me),Zt.copy(bt))},reset:function(){k=!1,Nt=null,Zt.set(-1,0,0,0)}}}function a(){let k=!1,bt=!1,Nt=null,Zt=null,Et=null;return{setReversed:function(vt){if(bt!==vt){const ee=t.get("EXT_clip_control");vt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),bt=vt;const me=Et;Et=null,this.setClear(me)}},getReversed:function(){return bt},setTest:function(vt){vt?ct(l.DEPTH_TEST):Ut(l.DEPTH_TEST)},setMask:function(vt){Nt!==vt&&!k&&(l.depthMask(vt),Nt=vt)},setFunc:function(vt){if(bt&&(vt=l2[vt]),Zt!==vt){switch(vt){case Td:l.depthFunc(l.NEVER);break;case bd:l.depthFunc(l.ALWAYS);break;case Ad:l.depthFunc(l.LESS);break;case Do:l.depthFunc(l.LEQUAL);break;case Rd:l.depthFunc(l.EQUAL);break;case Cd:l.depthFunc(l.GEQUAL);break;case wd:l.depthFunc(l.GREATER);break;case Dd:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}Zt=vt}},setLocked:function(vt){k=vt},setClear:function(vt){Et!==vt&&(bt&&(vt=1-vt),l.clearDepth(vt),Et=vt)},reset:function(){k=!1,Nt=null,Zt=null,Et=null,bt=!1}}}function s(){let k=!1,bt=null,Nt=null,Zt=null,Et=null,vt=null,ee=null,me=null,Be=null;return{setTest:function(Te){k||(Te?ct(l.STENCIL_TEST):Ut(l.STENCIL_TEST))},setMask:function(Te){bt!==Te&&!k&&(l.stencilMask(Te),bt=Te)},setFunc:function(Te,je,an){(Nt!==Te||Zt!==je||Et!==an)&&(l.stencilFunc(Te,je,an),Nt=Te,Zt=je,Et=an)},setOp:function(Te,je,an){(vt!==Te||ee!==je||me!==an)&&(l.stencilOp(Te,je,an),vt=Te,ee=je,me=an)},setLocked:function(Te){k=Te},setClear:function(Te){Be!==Te&&(l.clearStencil(Te),Be=Te)},reset:function(){k=!1,bt=null,Nt=null,Zt=null,Et=null,vt=null,ee=null,me=null,Be=null}}}const u=new i,f=new a,d=new s,m=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,y=[],T=null,E=!1,M=null,x=null,L=null,U=null,C=null,O=null,P=null,N=new ke(0,0,0),B=0,A=!1,w=null,z=null,rt=null,Q=null,$=null;const ot=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,it=0;const Y=l.getParameter(l.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=it>=2);let xt=null,yt={};const wt=l.getParameter(l.SCISSOR_BOX),Wt=l.getParameter(l.VIEWPORT),xe=new xn().fromArray(wt),H=new xn().fromArray(Wt);function V(k,bt,Nt,Zt){const Et=new Uint8Array(4),vt=l.createTexture();l.bindTexture(k,vt),l.texParameteri(k,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(k,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let ee=0;ee<Nt;ee++)k===l.TEXTURE_3D||k===l.TEXTURE_2D_ARRAY?l.texImage3D(bt,0,l.RGBA,1,1,Zt,0,l.RGBA,l.UNSIGNED_BYTE,Et):l.texImage2D(bt+ee,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,Et);return vt}const dt={};dt[l.TEXTURE_2D]=V(l.TEXTURE_2D,l.TEXTURE_2D,1),dt[l.TEXTURE_CUBE_MAP]=V(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[l.TEXTURE_2D_ARRAY]=V(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),dt[l.TEXTURE_3D]=V(l.TEXTURE_3D,l.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ct(l.DEPTH_TEST),f.setFunc(Do),qt(!1),Xt(X0),ct(l.CULL_FACE),ze(Br);function ct(k){_[k]!==!0&&(l.enable(k),_[k]=!0)}function Ut(k){_[k]!==!1&&(l.disable(k),_[k]=!1)}function Rt(k,bt){return g[k]!==bt?(l.bindFramebuffer(k,bt),g[k]=bt,k===l.DRAW_FRAMEBUFFER&&(g[l.FRAMEBUFFER]=bt),k===l.FRAMEBUFFER&&(g[l.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ft(k,bt){let Nt=y,Zt=!1;if(k){Nt=v.get(bt),Nt===void 0&&(Nt=[],v.set(bt,Nt));const Et=k.textures;if(Nt.length!==Et.length||Nt[0]!==l.COLOR_ATTACHMENT0){for(let vt=0,ee=Et.length;vt<ee;vt++)Nt[vt]=l.COLOR_ATTACHMENT0+vt;Nt.length=Et.length,Zt=!0}}else Nt[0]!==l.BACK&&(Nt[0]=l.BACK,Zt=!0);Zt&&l.drawBuffers(Nt)}function Pt(k){return T!==k?(l.useProgram(k),T=k,!0):!1}const zt={[Os]:l.FUNC_ADD,[$T]:l.FUNC_SUBTRACT,[t1]:l.FUNC_REVERSE_SUBTRACT};zt[e1]=l.MIN,zt[n1]=l.MAX;const G={[i1]:l.ZERO,[a1]:l.ONE,[r1]:l.SRC_COLOR,[Md]:l.SRC_ALPHA,[f1]:l.SRC_ALPHA_SATURATE,[u1]:l.DST_COLOR,[o1]:l.DST_ALPHA,[s1]:l.ONE_MINUS_SRC_COLOR,[Ed]:l.ONE_MINUS_SRC_ALPHA,[c1]:l.ONE_MINUS_DST_COLOR,[l1]:l.ONE_MINUS_DST_ALPHA,[h1]:l.CONSTANT_COLOR,[d1]:l.ONE_MINUS_CONSTANT_COLOR,[p1]:l.CONSTANT_ALPHA,[m1]:l.ONE_MINUS_CONSTANT_ALPHA};function ze(k,bt,Nt,Zt,Et,vt,ee,me,Be,Te){if(k===Br){E===!0&&(Ut(l.BLEND),E=!1);return}if(E===!1&&(ct(l.BLEND),E=!0),k!==JT){if(k!==M||Te!==A){if((x!==Os||C!==Os)&&(l.blendEquation(l.FUNC_ADD),x=Os,C=Os),Te)switch(k){case wo:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case q0:l.blendFunc(l.ONE,l.ONE);break;case Y0:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case W0:l.blendFuncSeparate(l.DST_COLOR,l.ONE_MINUS_SRC_ALPHA,l.ZERO,l.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case wo:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case q0:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE,l.ONE,l.ONE);break;case Y0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case W0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}L=null,U=null,O=null,P=null,N.set(0,0,0),B=0,M=k,A=Te}return}Et=Et||bt,vt=vt||Nt,ee=ee||Zt,(bt!==x||Et!==C)&&(l.blendEquationSeparate(zt[bt],zt[Et]),x=bt,C=Et),(Nt!==L||Zt!==U||vt!==O||ee!==P)&&(l.blendFuncSeparate(G[Nt],G[Zt],G[vt],G[ee]),L=Nt,U=Zt,O=vt,P=ee),(me.equals(N)===!1||Be!==B)&&(l.blendColor(me.r,me.g,me.b,Be),N.copy(me),B=Be),M=k,A=!1}function ae(k,bt){k.side===er?Ut(l.CULL_FACE):ct(l.CULL_FACE);let Nt=k.side===mi;bt&&(Nt=!Nt),qt(Nt),k.blending===wo&&k.transparent===!1?ze(Br):ze(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const Zt=k.stencilWrite;d.setTest(Zt),Zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Lt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(l.SAMPLE_ALPHA_TO_COVERAGE):Ut(l.SAMPLE_ALPHA_TO_COVERAGE)}function qt(k){w!==k&&(k?l.frontFace(l.CW):l.frontFace(l.CCW),w=k)}function Xt(k){k!==jT?(ct(l.CULL_FACE),k!==z&&(k===X0?l.cullFace(l.BACK):k===KT?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):Ut(l.CULL_FACE),z=k}function se(k){k!==rt&&(X&&l.lineWidth(k),rt=k)}function Lt(k,bt,Nt){k?(ct(l.POLYGON_OFFSET_FILL),(Q!==bt||$!==Nt)&&(l.polygonOffset(bt,Nt),Q=bt,$=Nt)):Ut(l.POLYGON_OFFSET_FILL)}function he(k){k?ct(l.SCISSOR_TEST):Ut(l.SCISSOR_TEST)}function Ne(k){k===void 0&&(k=l.TEXTURE0+ot-1),xt!==k&&(l.activeTexture(k),xt=k)}function Le(k,bt,Nt){Nt===void 0&&(xt===null?Nt=l.TEXTURE0+ot-1:Nt=xt);let Zt=yt[Nt];Zt===void 0&&(Zt={type:void 0,texture:void 0},yt[Nt]=Zt),(Zt.type!==k||Zt.texture!==bt)&&(xt!==Nt&&(l.activeTexture(Nt),xt=Nt),l.bindTexture(k,bt||dt[k]),Zt.type=k,Zt.texture=bt)}function I(){const k=yt[xt];k!==void 0&&k.type!==void 0&&(l.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function R(){try{l.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{l.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{l.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{l.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{l.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{l.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{l.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{l.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(){try{l.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{l.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(k){xe.equals(k)===!1&&(l.scissor(k.x,k.y,k.z,k.w),xe.copy(k))}function ue(k){H.equals(k)===!1&&(l.viewport(k.x,k.y,k.z,k.w),H.copy(k))}function te(k,bt){let Nt=p.get(bt);Nt===void 0&&(Nt=new WeakMap,p.set(bt,Nt));let Zt=Nt.get(k);Zt===void 0&&(Zt=l.getUniformBlockIndex(bt,k.name),Nt.set(k,Zt))}function Bt(k,bt){const Zt=p.get(bt).get(k);m.get(bt)!==Zt&&(l.uniformBlockBinding(bt,Zt,k.__bindingPointIndex),m.set(bt,Zt))}function pe(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),f.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),_={},xt=null,yt={},g={},v=new WeakMap,y=[],T=null,E=!1,M=null,x=null,L=null,U=null,C=null,O=null,P=null,N=new ke(0,0,0),B=0,A=!1,w=null,z=null,rt=null,Q=null,$=null,xe.set(0,0,l.canvas.width,l.canvas.height),H.set(0,0,l.canvas.width,l.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ct,disable:Ut,bindFramebuffer:Rt,drawBuffers:Ft,useProgram:Pt,setBlending:ze,setMaterial:ae,setFlipSided:qt,setCullFace:Xt,setLineWidth:se,setPolygonOffset:Lt,setScissorTest:he,activeTexture:Ne,bindTexture:Le,unbindTexture:I,compressedTexImage2D:R,compressedTexImage3D:at,texImage2D:Qt,texImage3D:Tt,updateUBOMapping:te,uniformBlockBinding:Bt,texStorage2D:Dt,texStorage3D:It,texSubImage2D:pt,texSubImage3D:St,compressedTexSubImage2D:mt,compressedTexSubImage3D:Kt,scissor:Gt,viewport:ue,reset:pe}}function c2(l,t,i,a,s,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ge,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,R){return y?new OffscreenCanvas(I,R):zc("canvas")}function E(I,R,at){let pt=1;const St=Le(I);if((St.width>at||St.height>at)&&(pt=at/Math.max(St.width,St.height)),pt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const mt=Math.floor(pt*St.width),Kt=Math.floor(pt*St.height);g===void 0&&(g=T(mt,Kt));const Dt=R?T(mt,Kt):g;return Dt.width=mt,Dt.height=Kt,Dt.getContext("2d").drawImage(I,0,0,mt,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+mt+"x"+Kt+")."),Dt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),I;return I}function M(I){return I.generateMipmaps}function x(I){l.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?l.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function U(I,R,at,pt,St=!1){if(I!==null){if(l[I]!==void 0)return l[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let mt=R;if(R===l.RED&&(at===l.FLOAT&&(mt=l.R32F),at===l.HALF_FLOAT&&(mt=l.R16F),at===l.UNSIGNED_BYTE&&(mt=l.R8)),R===l.RED_INTEGER&&(at===l.UNSIGNED_BYTE&&(mt=l.R8UI),at===l.UNSIGNED_SHORT&&(mt=l.R16UI),at===l.UNSIGNED_INT&&(mt=l.R32UI),at===l.BYTE&&(mt=l.R8I),at===l.SHORT&&(mt=l.R16I),at===l.INT&&(mt=l.R32I)),R===l.RG&&(at===l.FLOAT&&(mt=l.RG32F),at===l.HALF_FLOAT&&(mt=l.RG16F),at===l.UNSIGNED_BYTE&&(mt=l.RG8)),R===l.RG_INTEGER&&(at===l.UNSIGNED_BYTE&&(mt=l.RG8UI),at===l.UNSIGNED_SHORT&&(mt=l.RG16UI),at===l.UNSIGNED_INT&&(mt=l.RG32UI),at===l.BYTE&&(mt=l.RG8I),at===l.SHORT&&(mt=l.RG16I),at===l.INT&&(mt=l.RG32I)),R===l.RGB_INTEGER&&(at===l.UNSIGNED_BYTE&&(mt=l.RGB8UI),at===l.UNSIGNED_SHORT&&(mt=l.RGB16UI),at===l.UNSIGNED_INT&&(mt=l.RGB32UI),at===l.BYTE&&(mt=l.RGB8I),at===l.SHORT&&(mt=l.RGB16I),at===l.INT&&(mt=l.RGB32I)),R===l.RGBA_INTEGER&&(at===l.UNSIGNED_BYTE&&(mt=l.RGBA8UI),at===l.UNSIGNED_SHORT&&(mt=l.RGBA16UI),at===l.UNSIGNED_INT&&(mt=l.RGBA32UI),at===l.BYTE&&(mt=l.RGBA8I),at===l.SHORT&&(mt=l.RGBA16I),at===l.INT&&(mt=l.RGBA32I)),R===l.RGB&&at===l.UNSIGNED_INT_5_9_9_9_REV&&(mt=l.RGB9_E5),R===l.RGBA){const Kt=St?Oc:Ie.getTransfer(pt);at===l.FLOAT&&(mt=l.RGBA32F),at===l.HALF_FLOAT&&(mt=l.RGBA16F),at===l.UNSIGNED_BYTE&&(mt=Kt===Ze?l.SRGB8_ALPHA8:l.RGBA8),at===l.UNSIGNED_SHORT_4_4_4_4&&(mt=l.RGBA4),at===l.UNSIGNED_SHORT_5_5_5_1&&(mt=l.RGB5_A1)}return(mt===l.R16F||mt===l.R32F||mt===l.RG16F||mt===l.RG32F||mt===l.RGBA16F||mt===l.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function C(I,R){let at;return I?R===null||R===zs||R===lu?at=l.DEPTH24_STENCIL8:R===ir?at=l.DEPTH32F_STENCIL8:R===su&&(at=l.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===zs||R===lu?at=l.DEPTH_COMPONENT24:R===ir?at=l.DEPTH_COMPONENT32F:R===su&&(at=l.DEPTH_COMPONENT16),at}function O(I,R){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==aa&&I.minFilter!==ra?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function P(I){const R=I.target;R.removeEventListener("dispose",P),B(R),R.isVideoTexture&&_.delete(R)}function N(I){const R=I.target;R.removeEventListener("dispose",N),w(R)}function B(I){const R=a.get(I);if(R.__webglInit===void 0)return;const at=I.source,pt=v.get(at);if(pt){const St=pt[R.__cacheKey];St.usedTimes--,St.usedTimes===0&&A(I),Object.keys(pt).length===0&&v.delete(at)}a.remove(I)}function A(I){const R=a.get(I);l.deleteTexture(R.__webglTexture);const at=I.source,pt=v.get(at);delete pt[R.__cacheKey],f.memory.textures--}function w(I){const R=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(R.__webglFramebuffer[pt]))for(let St=0;St<R.__webglFramebuffer[pt].length;St++)l.deleteFramebuffer(R.__webglFramebuffer[pt][St]);else l.deleteFramebuffer(R.__webglFramebuffer[pt]);R.__webglDepthbuffer&&l.deleteRenderbuffer(R.__webglDepthbuffer[pt])}else{if(Array.isArray(R.__webglFramebuffer))for(let pt=0;pt<R.__webglFramebuffer.length;pt++)l.deleteFramebuffer(R.__webglFramebuffer[pt]);else l.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&l.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&l.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pt=0;pt<R.__webglColorRenderbuffer.length;pt++)R.__webglColorRenderbuffer[pt]&&l.deleteRenderbuffer(R.__webglColorRenderbuffer[pt]);R.__webglDepthRenderbuffer&&l.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const at=I.textures;for(let pt=0,St=at.length;pt<St;pt++){const mt=a.get(at[pt]);mt.__webglTexture&&(l.deleteTexture(mt.__webglTexture),f.memory.textures--),a.remove(at[pt])}a.remove(I)}let z=0;function rt(){z=0}function Q(){const I=z;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),z+=1,I}function $(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function ot(I,R){const at=a.get(I);if(I.isVideoTexture&&he(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&at.__version!==I.version){const pt=I.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(at,I,R);return}}else I.isExternalTexture&&(at.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(l.TEXTURE_2D,at.__webglTexture,l.TEXTURE0+R)}function X(I,R){const at=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&at.__version!==I.version){dt(at,I,R);return}i.bindTexture(l.TEXTURE_2D_ARRAY,at.__webglTexture,l.TEXTURE0+R)}function it(I,R){const at=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&at.__version!==I.version){dt(at,I,R);return}i.bindTexture(l.TEXTURE_3D,at.__webglTexture,l.TEXTURE0+R)}function Y(I,R){const at=a.get(I);if(I.version>0&&at.__version!==I.version){ct(at,I,R);return}i.bindTexture(l.TEXTURE_CUBE_MAP,at.__webglTexture,l.TEXTURE0+R)}const xt={[Ld]:l.REPEAT,[Ps]:l.CLAMP_TO_EDGE,[Od]:l.MIRRORED_REPEAT},yt={[aa]:l.NEAREST,[b1]:l.NEAREST_MIPMAP_NEAREST,[Cc]:l.NEAREST_MIPMAP_LINEAR,[ra]:l.LINEAR,[Pd]:l.LINEAR_MIPMAP_NEAREST,[Hr]:l.LINEAR_MIPMAP_LINEAR},wt={[D1]:l.NEVER,[z1]:l.ALWAYS,[U1]:l.LESS,[rv]:l.LEQUAL,[N1]:l.EQUAL,[P1]:l.GEQUAL,[L1]:l.GREATER,[O1]:l.NOTEQUAL};function Wt(I,R){if(R.type===ir&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===ra||R.magFilter===Pd||R.magFilter===Cc||R.magFilter===Hr||R.minFilter===ra||R.minFilter===Pd||R.minFilter===Cc||R.minFilter===Hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(I,l.TEXTURE_WRAP_S,xt[R.wrapS]),l.texParameteri(I,l.TEXTURE_WRAP_T,xt[R.wrapT]),(I===l.TEXTURE_3D||I===l.TEXTURE_2D_ARRAY)&&l.texParameteri(I,l.TEXTURE_WRAP_R,xt[R.wrapR]),l.texParameteri(I,l.TEXTURE_MAG_FILTER,yt[R.magFilter]),l.texParameteri(I,l.TEXTURE_MIN_FILTER,yt[R.minFilter]),R.compareFunction&&(l.texParameteri(I,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(I,l.TEXTURE_COMPARE_FUNC,wt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===aa||R.minFilter!==Cc&&R.minFilter!==Hr||R.type===ir&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||a.get(R).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");l.texParameterf(I,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),a.get(R).__currentAnisotropy=R.anisotropy}}}function xe(I,R){let at=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",P));const pt=R.source;let St=v.get(pt);St===void 0&&(St={},v.set(pt,St));const mt=$(R);if(mt!==I.__cacheKey){St[mt]===void 0&&(St[mt]={texture:l.createTexture(),usedTimes:0},f.memory.textures++,at=!0),St[mt].usedTimes++;const Kt=St[I.__cacheKey];Kt!==void 0&&(St[I.__cacheKey].usedTimes--,Kt.usedTimes===0&&A(R)),I.__cacheKey=mt,I.__webglTexture=St[mt].texture}return at}function H(I,R,at){return Math.floor(Math.floor(I/at)/R)}function V(I,R,at,pt){const mt=I.updateRanges;if(mt.length===0)i.texSubImage2D(l.TEXTURE_2D,0,0,0,R.width,R.height,at,pt,R.data);else{mt.sort((Tt,Gt)=>Tt.start-Gt.start);let Kt=0;for(let Tt=1;Tt<mt.length;Tt++){const Gt=mt[Kt],ue=mt[Tt],te=Gt.start+Gt.count,Bt=H(ue.start,R.width,4),pe=H(Gt.start,R.width,4);ue.start<=te+1&&Bt===pe&&H(ue.start+ue.count-1,R.width,4)===Bt?Gt.count=Math.max(Gt.count,ue.start+ue.count-Gt.start):(++Kt,mt[Kt]=ue)}mt.length=Kt+1;const Dt=l.getParameter(l.UNPACK_ROW_LENGTH),It=l.getParameter(l.UNPACK_SKIP_PIXELS),Qt=l.getParameter(l.UNPACK_SKIP_ROWS);l.pixelStorei(l.UNPACK_ROW_LENGTH,R.width);for(let Tt=0,Gt=mt.length;Tt<Gt;Tt++){const ue=mt[Tt],te=Math.floor(ue.start/4),Bt=Math.ceil(ue.count/4),pe=te%R.width,k=Math.floor(te/R.width),bt=Bt,Nt=1;l.pixelStorei(l.UNPACK_SKIP_PIXELS,pe),l.pixelStorei(l.UNPACK_SKIP_ROWS,k),i.texSubImage2D(l.TEXTURE_2D,0,pe,k,bt,Nt,at,pt,R.data)}I.clearUpdateRanges(),l.pixelStorei(l.UNPACK_ROW_LENGTH,Dt),l.pixelStorei(l.UNPACK_SKIP_PIXELS,It),l.pixelStorei(l.UNPACK_SKIP_ROWS,Qt)}}function dt(I,R,at){let pt=l.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pt=l.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pt=l.TEXTURE_3D);const St=xe(I,R),mt=R.source;i.bindTexture(pt,I.__webglTexture,l.TEXTURE0+at);const Kt=a.get(mt);if(mt.version!==Kt.__version||St===!0){i.activeTexture(l.TEXTURE0+at);const Dt=Ie.getPrimaries(Ie.workingColorSpace),It=R.colorSpace===Gr?null:Ie.getPrimaries(R.colorSpace),Qt=R.colorSpace===Gr||Dt===It?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,R.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,R.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let Tt=E(R.image,!1,s.maxTextureSize);Tt=Ne(R,Tt);const Gt=u.convert(R.format,R.colorSpace),ue=u.convert(R.type);let te=U(R.internalFormat,Gt,ue,R.colorSpace,R.isVideoTexture);Wt(pt,R);let Bt;const pe=R.mipmaps,k=R.isVideoTexture!==!0,bt=Kt.__version===void 0||St===!0,Nt=mt.dataReady,Zt=O(R,Tt);if(R.isDepthTexture)te=C(R.format===cu,R.type),bt&&(k?i.texStorage2D(l.TEXTURE_2D,1,te,Tt.width,Tt.height):i.texImage2D(l.TEXTURE_2D,0,te,Tt.width,Tt.height,0,Gt,ue,null));else if(R.isDataTexture)if(pe.length>0){k&&bt&&i.texStorage2D(l.TEXTURE_2D,Zt,te,pe[0].width,pe[0].height);for(let Et=0,vt=pe.length;Et<vt;Et++)Bt=pe[Et],k?Nt&&i.texSubImage2D(l.TEXTURE_2D,Et,0,0,Bt.width,Bt.height,Gt,ue,Bt.data):i.texImage2D(l.TEXTURE_2D,Et,te,Bt.width,Bt.height,0,Gt,ue,Bt.data);R.generateMipmaps=!1}else k?(bt&&i.texStorage2D(l.TEXTURE_2D,Zt,te,Tt.width,Tt.height),Nt&&V(R,Tt,Gt,ue)):i.texImage2D(l.TEXTURE_2D,0,te,Tt.width,Tt.height,0,Gt,ue,Tt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){k&&bt&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Zt,te,pe[0].width,pe[0].height,Tt.depth);for(let Et=0,vt=pe.length;Et<vt;Et++)if(Bt=pe[Et],R.format!==sa)if(Gt!==null)if(k){if(Nt)if(R.layerUpdates.size>0){const ee=Iv(Bt.width,Bt.height,R.format,R.type);for(const me of R.layerUpdates){const Be=Bt.data.subarray(me*ee/Bt.data.BYTES_PER_ELEMENT,(me+1)*ee/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,Et,0,0,me,Bt.width,Bt.height,1,Gt,Be)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,Et,0,0,0,Bt.width,Bt.height,Tt.depth,Gt,Bt.data)}else i.compressedTexImage3D(l.TEXTURE_2D_ARRAY,Et,te,Bt.width,Bt.height,Tt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Nt&&i.texSubImage3D(l.TEXTURE_2D_ARRAY,Et,0,0,0,Bt.width,Bt.height,Tt.depth,Gt,ue,Bt.data):i.texImage3D(l.TEXTURE_2D_ARRAY,Et,te,Bt.width,Bt.height,Tt.depth,0,Gt,ue,Bt.data)}else{k&&bt&&i.texStorage2D(l.TEXTURE_2D,Zt,te,pe[0].width,pe[0].height);for(let Et=0,vt=pe.length;Et<vt;Et++)Bt=pe[Et],R.format!==sa?Gt!==null?k?Nt&&i.compressedTexSubImage2D(l.TEXTURE_2D,Et,0,0,Bt.width,Bt.height,Gt,Bt.data):i.compressedTexImage2D(l.TEXTURE_2D,Et,te,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Nt&&i.texSubImage2D(l.TEXTURE_2D,Et,0,0,Bt.width,Bt.height,Gt,ue,Bt.data):i.texImage2D(l.TEXTURE_2D,Et,te,Bt.width,Bt.height,0,Gt,ue,Bt.data)}else if(R.isDataArrayTexture)if(k){if(bt&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Zt,te,Tt.width,Tt.height,Tt.depth),Nt)if(R.layerUpdates.size>0){const Et=Iv(Tt.width,Tt.height,R.format,R.type);for(const vt of R.layerUpdates){const ee=Tt.data.subarray(vt*Et/Tt.data.BYTES_PER_ELEMENT,(vt+1)*Et/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,vt,Tt.width,Tt.height,1,Gt,ue,ee)}R.clearLayerUpdates()}else i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Gt,ue,Tt.data)}else i.texImage3D(l.TEXTURE_2D_ARRAY,0,te,Tt.width,Tt.height,Tt.depth,0,Gt,ue,Tt.data);else if(R.isData3DTexture)k?(bt&&i.texStorage3D(l.TEXTURE_3D,Zt,te,Tt.width,Tt.height,Tt.depth),Nt&&i.texSubImage3D(l.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Gt,ue,Tt.data)):i.texImage3D(l.TEXTURE_3D,0,te,Tt.width,Tt.height,Tt.depth,0,Gt,ue,Tt.data);else if(R.isFramebufferTexture){if(bt)if(k)i.texStorage2D(l.TEXTURE_2D,Zt,te,Tt.width,Tt.height);else{let Et=Tt.width,vt=Tt.height;for(let ee=0;ee<Zt;ee++)i.texImage2D(l.TEXTURE_2D,ee,te,Et,vt,0,Gt,ue,null),Et>>=1,vt>>=1}}else if(pe.length>0){if(k&&bt){const Et=Le(pe[0]);i.texStorage2D(l.TEXTURE_2D,Zt,te,Et.width,Et.height)}for(let Et=0,vt=pe.length;Et<vt;Et++)Bt=pe[Et],k?Nt&&i.texSubImage2D(l.TEXTURE_2D,Et,0,0,Gt,ue,Bt):i.texImage2D(l.TEXTURE_2D,Et,te,Gt,ue,Bt);R.generateMipmaps=!1}else if(k){if(bt){const Et=Le(Tt);i.texStorage2D(l.TEXTURE_2D,Zt,te,Et.width,Et.height)}Nt&&i.texSubImage2D(l.TEXTURE_2D,0,0,0,Gt,ue,Tt)}else i.texImage2D(l.TEXTURE_2D,0,te,Gt,ue,Tt);M(R)&&x(pt),Kt.__version=mt.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function ct(I,R,at){if(R.image.length!==6)return;const pt=xe(I,R),St=R.source;i.bindTexture(l.TEXTURE_CUBE_MAP,I.__webglTexture,l.TEXTURE0+at);const mt=a.get(St);if(St.version!==mt.__version||pt===!0){i.activeTexture(l.TEXTURE0+at);const Kt=Ie.getPrimaries(Ie.workingColorSpace),Dt=R.colorSpace===Gr?null:Ie.getPrimaries(R.colorSpace),It=R.colorSpace===Gr||Kt===Dt?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,R.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,R.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Qt=R.isCompressedTexture||R.image[0].isCompressedTexture,Tt=R.image[0]&&R.image[0].isDataTexture,Gt=[];for(let vt=0;vt<6;vt++)!Qt&&!Tt?Gt[vt]=E(R.image[vt],!0,s.maxCubemapSize):Gt[vt]=Tt?R.image[vt].image:R.image[vt],Gt[vt]=Ne(R,Gt[vt]);const ue=Gt[0],te=u.convert(R.format,R.colorSpace),Bt=u.convert(R.type),pe=U(R.internalFormat,te,Bt,R.colorSpace),k=R.isVideoTexture!==!0,bt=mt.__version===void 0||pt===!0,Nt=St.dataReady;let Zt=O(R,ue);Wt(l.TEXTURE_CUBE_MAP,R);let Et;if(Qt){k&&bt&&i.texStorage2D(l.TEXTURE_CUBE_MAP,Zt,pe,ue.width,ue.height);for(let vt=0;vt<6;vt++){Et=Gt[vt].mipmaps;for(let ee=0;ee<Et.length;ee++){const me=Et[ee];R.format!==sa?te!==null?k?Nt&&i.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee,0,0,me.width,me.height,te,me.data):i.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Nt&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee,0,0,me.width,me.height,te,Bt,me.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee,pe,me.width,me.height,0,te,Bt,me.data)}}}else{if(Et=R.mipmaps,k&&bt){Et.length>0&&Zt++;const vt=Le(Gt[0]);i.texStorage2D(l.TEXTURE_CUBE_MAP,Zt,pe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Tt){k?Nt&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Gt[vt].width,Gt[vt].height,te,Bt,Gt[vt].data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pe,Gt[vt].width,Gt[vt].height,0,te,Bt,Gt[vt].data);for(let ee=0;ee<Et.length;ee++){const Be=Et[ee].image[vt].image;k?Nt&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee+1,0,0,Be.width,Be.height,te,Bt,Be.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee+1,pe,Be.width,Be.height,0,te,Bt,Be.data)}}else{k?Nt&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,te,Bt,Gt[vt]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pe,te,Bt,Gt[vt]);for(let ee=0;ee<Et.length;ee++){const me=Et[ee];k?Nt&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee+1,0,0,te,Bt,me.image[vt]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee+1,pe,te,Bt,me.image[vt])}}}M(R)&&x(l.TEXTURE_CUBE_MAP),mt.__version=St.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function Ut(I,R,at,pt,St,mt){const Kt=u.convert(at.format,at.colorSpace),Dt=u.convert(at.type),It=U(at.internalFormat,Kt,Dt,at.colorSpace),Qt=a.get(R),Tt=a.get(at);if(Tt.__renderTarget=R,!Qt.__hasExternalTextures){const Gt=Math.max(1,R.width>>mt),ue=Math.max(1,R.height>>mt);St===l.TEXTURE_3D||St===l.TEXTURE_2D_ARRAY?i.texImage3D(St,mt,It,Gt,ue,R.depth,0,Kt,Dt,null):i.texImage2D(St,mt,It,Gt,ue,0,Kt,Dt,null)}i.bindFramebuffer(l.FRAMEBUFFER,I),Lt(R)?d.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,pt,St,Tt.__webglTexture,0,se(R)):(St===l.TEXTURE_2D||St>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,pt,St,Tt.__webglTexture,mt),i.bindFramebuffer(l.FRAMEBUFFER,null)}function Rt(I,R,at){if(l.bindRenderbuffer(l.RENDERBUFFER,I),R.depthBuffer){const pt=R.depthTexture,St=pt&&pt.isDepthTexture?pt.type:null,mt=C(R.stencilBuffer,St),Kt=R.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Dt=se(R);Lt(R)?d.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Dt,mt,R.width,R.height):at?l.renderbufferStorageMultisample(l.RENDERBUFFER,Dt,mt,R.width,R.height):l.renderbufferStorage(l.RENDERBUFFER,mt,R.width,R.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,Kt,l.RENDERBUFFER,I)}else{const pt=R.textures;for(let St=0;St<pt.length;St++){const mt=pt[St],Kt=u.convert(mt.format,mt.colorSpace),Dt=u.convert(mt.type),It=U(mt.internalFormat,Kt,Dt,mt.colorSpace),Qt=se(R);at&&Lt(R)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,Qt,It,R.width,R.height):Lt(R)?d.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Qt,It,R.width,R.height):l.renderbufferStorage(l.RENDERBUFFER,It,R.width,R.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ft(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(l.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=a.get(R.depthTexture);pt.__renderTarget=R,(!pt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ot(R.depthTexture,0);const St=pt.__webglTexture,mt=se(R);if(R.depthTexture.format===uu)Lt(R)?d.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,St,0,mt):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,St,0);else if(R.depthTexture.format===cu)Lt(R)?d.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,St,0,mt):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Pt(I){const R=a.get(I),at=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){const pt=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),pt){const St=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,pt.removeEventListener("dispose",St)};pt.addEventListener("dispose",St),R.__depthDisposeCallback=St}R.__boundDepthTexture=pt}if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const pt=I.texture.mipmaps;pt&&pt.length>0?Ft(R.__webglFramebuffer[0],I):Ft(R.__webglFramebuffer,I)}else if(at){R.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(l.FRAMEBUFFER,R.__webglFramebuffer[pt]),R.__webglDepthbuffer[pt]===void 0)R.__webglDepthbuffer[pt]=l.createRenderbuffer(),Rt(R.__webglDepthbuffer[pt],I,!1);else{const St=I.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,mt=R.__webglDepthbuffer[pt];l.bindRenderbuffer(l.RENDERBUFFER,mt),l.framebufferRenderbuffer(l.FRAMEBUFFER,St,l.RENDERBUFFER,mt)}}else{const pt=I.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(l.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(l.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=l.createRenderbuffer(),Rt(R.__webglDepthbuffer,I,!1);else{const St=I.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,mt=R.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,mt),l.framebufferRenderbuffer(l.FRAMEBUFFER,St,l.RENDERBUFFER,mt)}}i.bindFramebuffer(l.FRAMEBUFFER,null)}function zt(I,R,at){const pt=a.get(I);R!==void 0&&Ut(pt.__webglFramebuffer,I,I.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),at!==void 0&&Pt(I)}function G(I){const R=I.texture,at=a.get(I),pt=a.get(R);I.addEventListener("dispose",N);const St=I.textures,mt=I.isWebGLCubeRenderTarget===!0,Kt=St.length>1;if(Kt||(pt.__webglTexture===void 0&&(pt.__webglTexture=l.createTexture()),pt.__version=R.version,f.memory.textures++),mt){at.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(R.mipmaps&&R.mipmaps.length>0){at.__webglFramebuffer[Dt]=[];for(let It=0;It<R.mipmaps.length;It++)at.__webglFramebuffer[Dt][It]=l.createFramebuffer()}else at.__webglFramebuffer[Dt]=l.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){at.__webglFramebuffer=[];for(let Dt=0;Dt<R.mipmaps.length;Dt++)at.__webglFramebuffer[Dt]=l.createFramebuffer()}else at.__webglFramebuffer=l.createFramebuffer();if(Kt)for(let Dt=0,It=St.length;Dt<It;Dt++){const Qt=a.get(St[Dt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=l.createTexture(),f.memory.textures++)}if(I.samples>0&&Lt(I)===!1){at.__webglMultisampledFramebuffer=l.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(l.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Dt=0;Dt<St.length;Dt++){const It=St[Dt];at.__webglColorRenderbuffer[Dt]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,at.__webglColorRenderbuffer[Dt]);const Qt=u.convert(It.format,It.colorSpace),Tt=u.convert(It.type),Gt=U(It.internalFormat,Qt,Tt,It.colorSpace,I.isXRRenderTarget===!0),ue=se(I);l.renderbufferStorageMultisample(l.RENDERBUFFER,ue,Gt,I.width,I.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Dt,l.RENDERBUFFER,at.__webglColorRenderbuffer[Dt])}l.bindRenderbuffer(l.RENDERBUFFER,null),I.depthBuffer&&(at.__webglDepthRenderbuffer=l.createRenderbuffer(),Rt(at.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(l.FRAMEBUFFER,null)}}if(mt){i.bindTexture(l.TEXTURE_CUBE_MAP,pt.__webglTexture),Wt(l.TEXTURE_CUBE_MAP,R);for(let Dt=0;Dt<6;Dt++)if(R.mipmaps&&R.mipmaps.length>0)for(let It=0;It<R.mipmaps.length;It++)Ut(at.__webglFramebuffer[Dt][It],I,R,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,It);else Ut(at.__webglFramebuffer[Dt],I,R,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(R)&&x(l.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Dt=0,It=St.length;Dt<It;Dt++){const Qt=St[Dt],Tt=a.get(Qt);let Gt=l.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Gt=I.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(Gt,Tt.__webglTexture),Wt(Gt,Qt),Ut(at.__webglFramebuffer,I,Qt,l.COLOR_ATTACHMENT0+Dt,Gt,0),M(Qt)&&x(Gt)}i.unbindTexture()}else{let Dt=l.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Dt=I.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(Dt,pt.__webglTexture),Wt(Dt,R),R.mipmaps&&R.mipmaps.length>0)for(let It=0;It<R.mipmaps.length;It++)Ut(at.__webglFramebuffer[It],I,R,l.COLOR_ATTACHMENT0,Dt,It);else Ut(at.__webglFramebuffer,I,R,l.COLOR_ATTACHMENT0,Dt,0);M(R)&&x(Dt),i.unbindTexture()}I.depthBuffer&&Pt(I)}function ze(I){const R=I.textures;for(let at=0,pt=R.length;at<pt;at++){const St=R[at];if(M(St)){const mt=L(I),Kt=a.get(St).__webglTexture;i.bindTexture(mt,Kt),x(mt),i.unbindTexture()}}}const ae=[],qt=[];function Xt(I){if(I.samples>0){if(Lt(I)===!1){const R=I.textures,at=I.width,pt=I.height;let St=l.COLOR_BUFFER_BIT;const mt=I.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Kt=a.get(I),Dt=R.length>1;if(Dt)for(let Qt=0;Qt<R.length;Qt++)i.bindFramebuffer(l.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Qt,l.RENDERBUFFER,null),i.bindFramebuffer(l.FRAMEBUFFER,Kt.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+Qt,l.TEXTURE_2D,null,0);i.bindFramebuffer(l.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const It=I.texture.mipmaps;It&&It.length>0?i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Qt=0;Qt<R.length;Qt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(St|=l.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(St|=l.STENCIL_BUFFER_BIT)),Dt){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,Kt.__webglColorRenderbuffer[Qt]);const Tt=a.get(R[Qt]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,Tt,0)}l.blitFramebuffer(0,0,at,pt,0,0,at,pt,St,l.NEAREST),m===!0&&(ae.length=0,qt.length=0,ae.push(l.COLOR_ATTACHMENT0+Qt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ae.push(mt),qt.push(mt),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,qt)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(l.READ_FRAMEBUFFER,null),i.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),Dt)for(let Qt=0;Qt<R.length;Qt++){i.bindFramebuffer(l.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Qt,l.RENDERBUFFER,Kt.__webglColorRenderbuffer[Qt]);const Tt=a.get(R[Qt]).__webglTexture;i.bindFramebuffer(l.FRAMEBUFFER,Kt.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+Qt,l.TEXTURE_2D,Tt,0)}i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const R=I.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[R])}}}function se(I){return Math.min(s.maxSamples,I.samples)}function Lt(I){const R=a.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function he(I){const R=f.render.frame;_.get(I)!==R&&(_.set(I,R),I.update())}function Ne(I,R){const at=I.colorSpace,pt=I.format,St=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||at!==Lo&&at!==Gr&&(Ie.getTransfer(at)===Ze?(pt!==sa||St!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),R}function Le(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=rt,this.setTexture2D=ot,this.setTexture2DArray=X,this.setTexture3D=it,this.setTextureCube=Y,this.rebindTextures=zt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Lt}function f2(l,t){function i(a,s=Gr){let u;const f=Ie.getTransfer(s);if(a===nr)return l.UNSIGNED_BYTE;if(a===Id)return l.UNSIGNED_SHORT_4_4_4_4;if(a===Bd)return l.UNSIGNED_SHORT_5_5_5_1;if(a===J0)return l.UNSIGNED_INT_5_9_9_9_REV;if(a===K0)return l.BYTE;if(a===Q0)return l.SHORT;if(a===su)return l.UNSIGNED_SHORT;if(a===zd)return l.INT;if(a===zs)return l.UNSIGNED_INT;if(a===ir)return l.FLOAT;if(a===ou)return l.HALF_FLOAT;if(a===$0)return l.ALPHA;if(a===tv)return l.RGB;if(a===sa)return l.RGBA;if(a===uu)return l.DEPTH_COMPONENT;if(a===cu)return l.DEPTH_STENCIL;if(a===ev)return l.RED;if(a===Fd)return l.RED_INTEGER;if(a===nv)return l.RG;if(a===Hd)return l.RG_INTEGER;if(a===Gd)return l.RGBA_INTEGER;if(a===wc||a===Dc||a===Uc||a===Nc)if(f===Ze)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Dc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Uc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Nc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Vd||a===Xd||a===kd||a===qd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Vd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Xd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===kd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===qd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Yd||a===Wd||a===Zd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Yd||a===Wd)return f===Ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Zd)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===jd||a===Kd||a===Qd||a===Jd||a===$d||a===tp||a===ep||a===np||a===ip||a===ap||a===rp||a===sp||a===op||a===lp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===jd)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Kd)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Qd)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Jd)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===$d)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===tp)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ep)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===np)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ip)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ap)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===rp)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===sp)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===op)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===lp)return f===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Lc||a===up||a===cp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===Lc)return f===Ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===up)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===cp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===iv||a===fp||a===hp||a===dp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===Lc)return u.COMPRESSED_RED_RGTC1_EXT;if(a===fp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===hp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===dp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===lu?l.UNSIGNED_INT_24_8:l[a]!==void 0?l[a]:null}return{convert:i}}class dx extends ni{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const h2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d2=`
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

}`;class p2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const a=new dx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,a=new fr({vertexShader:h2,fragmentShader:d2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fa(new Qo(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m2 extends Po{constructor(t,i){super();const a=this;let s=null,u=1,f=null,d="local-floor",m=1,p=null,_=null,g=null,v=null,y=null,T=null;const E=new p2,M={},x=i.getContextAttributes();let L=null,U=null;const C=[],O=[],P=new Ge;let N=null;const B=new ha;B.viewport=new xn;const A=new ha;A.viewport=new xn;const w=[B,A],z=new _b;let rt=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let dt=C[V];return dt===void 0&&(dt=new Hp,C[V]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(V){let dt=C[V];return dt===void 0&&(dt=new Hp,C[V]=dt),dt.getGripSpace()},this.getHand=function(V){let dt=C[V];return dt===void 0&&(dt=new Hp,C[V]=dt),dt.getHandSpace()};function $(V){const dt=O.indexOf(V.inputSource);if(dt===-1)return;const ct=C[dt];ct!==void 0&&(ct.update(V.inputSource,V.frame,p||f),ct.dispatchEvent({type:V.type,data:V.inputSource}))}function ot(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",X);for(let V=0;V<C.length;V++){const dt=O[V];dt!==null&&(O[V]=null,C[V].disconnect(dt))}rt=null,Q=null,E.reset();for(const V in M)delete M[V];t.setRenderTarget(L),y=null,v=null,g=null,s=null,U=null,H.stop(),a.isPresenting=!1,t.setPixelRatio(N),t.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){u=V,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){d=V,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(V){p=V},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",X),x.xrCompatible!==!0&&await i.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(s,i)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Ut=null,Rt=null;x.depth&&(Rt=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=x.stencil?cu:uu,Ut=x.stencil?lu:zs);const Ft={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:u};v=g.createProjectionLayer(Ft),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new Vr(v.textureWidth,v.textureHeight,{format:sa,type:nr,depthTexture:new zv(v.textureWidth,v.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ct={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(s,i,ct),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Vr(y.framebufferWidth,y.framebufferHeight,{format:sa,type:nr,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await s.requestReferenceSpace(d),H.setContext(s),H.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function X(V){for(let dt=0;dt<V.removed.length;dt++){const ct=V.removed[dt],Ut=O.indexOf(ct);Ut>=0&&(O[Ut]=null,C[Ut].disconnect(ct))}for(let dt=0;dt<V.added.length;dt++){const ct=V.added[dt];let Ut=O.indexOf(ct);if(Ut===-1){for(let Ft=0;Ft<C.length;Ft++)if(Ft>=O.length){O.push(ct),Ut=Ft;break}else if(O[Ft]===null){O[Ft]=ct,Ut=Ft;break}if(Ut===-1)break}const Rt=C[Ut];Rt&&Rt.connect(ct)}}const it=new ht,Y=new ht;function xt(V,dt,ct){it.setFromMatrixPosition(dt.matrixWorld),Y.setFromMatrixPosition(ct.matrixWorld);const Ut=it.distanceTo(Y),Rt=dt.projectionMatrix.elements,Ft=ct.projectionMatrix.elements,Pt=Rt[14]/(Rt[10]-1),zt=Rt[14]/(Rt[10]+1),G=(Rt[9]+1)/Rt[5],ze=(Rt[9]-1)/Rt[5],ae=(Rt[8]-1)/Rt[0],qt=(Ft[8]+1)/Ft[0],Xt=Pt*ae,se=Pt*qt,Lt=Ut/(-ae+qt),he=Lt*-ae;if(dt.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(he),V.translateZ(Lt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Rt[10]===-1)V.projectionMatrix.copy(dt.projectionMatrix),V.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ne=Pt+Lt,Le=zt+Lt,I=Xt-he,R=se+(Ut-he),at=G*zt/Le*Ne,pt=ze*zt/Le*Ne;V.projectionMatrix.makePerspective(I,R,at,pt,Ne,Le),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function yt(V,dt){dt===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(dt.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let dt=V.near,ct=V.far;E.texture!==null&&(E.depthNear>0&&(dt=E.depthNear),E.depthFar>0&&(ct=E.depthFar)),z.near=A.near=B.near=dt,z.far=A.far=B.far=ct,(rt!==z.near||Q!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),rt=z.near,Q=z.far),z.layers.mask=V.layers.mask|6,B.layers.mask=z.layers.mask&3,A.layers.mask=z.layers.mask&5;const Ut=V.parent,Rt=z.cameras;yt(z,Ut);for(let Ft=0;Ft<Rt.length;Ft++)yt(Rt[Ft],Ut);Rt.length===2?xt(z,B,A):z.projectionMatrix.copy(B.projectionMatrix),wt(V,z,Ut)};function wt(V,dt,ct){ct===null?V.matrix.copy(dt.matrixWorld):(V.matrix.copy(ct.matrixWorld),V.matrix.invert(),V.matrix.multiply(dt.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(dt.projectionMatrix),V.projectionMatrixInverse.copy(dt.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=mp*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(V){m=V,v!==null&&(v.fixedFoveation=V),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=V)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(z)},this.getCameraTexture=function(V){return M[V]};let Wt=null;function xe(V,dt){if(_=dt.getViewerPose(p||f),T=dt,_!==null){const ct=_.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Ut=!1;ct.length!==z.cameras.length&&(z.cameras.length=0,Ut=!0);for(let zt=0;zt<ct.length;zt++){const G=ct[zt];let ze=null;if(y!==null)ze=y.getViewport(G);else{const qt=g.getViewSubImage(v,G);ze=qt.viewport,zt===0&&(t.setRenderTargetTextures(U,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(U))}let ae=w[zt];ae===void 0&&(ae=new ha,ae.layers.enable(zt),ae.viewport=new xn,w[zt]=ae),ae.matrix.fromArray(G.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(G.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(ze.x,ze.y,ze.width,ze.height),zt===0&&(z.matrix.copy(ae.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ut===!0&&z.cameras.push(ae)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){const zt=g.getDepthInformation(ct[0]);zt&&zt.isValid&&zt.texture&&E.init(zt,s.renderState)}if(Rt&&Rt.includes("camera-access")&&(t.state.unbindTexture(),g))for(let zt=0;zt<ct.length;zt++){const G=ct[zt].camera;if(G){let ze=M[G];ze||(ze=new dx,M[G]=ze);const ae=g.getCameraImage(G);ze.sourceTexture=ae}}}for(let ct=0;ct<C.length;ct++){const Ut=O[ct],Rt=C[ct];Ut!==null&&Rt!==void 0&&Rt.update(Ut,dt,p||f)}Wt&&Wt(V,dt),dt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:dt}),T=null}const H=new Bv;H.setAnimationLoop(xe),this.setAnimationLoop=function(V){Wt=V},this.dispose=function(){}}}const Ws=new or,_2=new Rn;function g2(l,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,wv(l)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function s(M,x,L,U,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),g(M,x)):x.isMeshPhongMaterial?(u(M,x),_(M,x)):x.isMeshStandardMaterial?(u(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,C)):x.isMeshMatcapMaterial?(u(M,x),T(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),E(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,L,U):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===mi&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===mi&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const L=t.get(x),U=L.envMap,C=L.envMapRotation;U&&(M.envMap.value=U,Ws.copy(C),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),M.envMapRotation.value.setFromMatrix4(_2.makeRotationFromEuler(Ws)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,L,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*L,M.scale.value=U*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,L){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===mi&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,x){x.matcap&&(M.matcap.value=x.matcap)}function E(M,x){const L=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function v2(l,t,i,a){let s={},u={},f=[];const d=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const C=U.program;a.uniformBlockBinding(L,C)}function p(L,U){let C=s[L.id];C===void 0&&(T(L),C=_(L),s[L.id]=C,L.addEventListener("dispose",M));const O=U.program;a.updateUBOMapping(L,O);const P=t.render.frame;u[L.id]!==P&&(v(L),u[L.id]=P)}function _(L){const U=g();L.__bindingPointIndex=U;const C=l.createBuffer(),O=L.__size,P=L.usage;return l.bindBuffer(l.UNIFORM_BUFFER,C),l.bufferData(l.UNIFORM_BUFFER,O,P),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,U,C),C}function g(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const U=s[L.id],C=L.uniforms,O=L.__cache;l.bindBuffer(l.UNIFORM_BUFFER,U);for(let P=0,N=C.length;P<N;P++){const B=Array.isArray(C[P])?C[P]:[C[P]];for(let A=0,w=B.length;A<w;A++){const z=B[A];if(y(z,P,A,O)===!0){const rt=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let $=0;for(let ot=0;ot<Q.length;ot++){const X=Q[ot],it=E(X);typeof X=="number"||typeof X=="boolean"?(z.__data[0]=X,l.bufferSubData(l.UNIFORM_BUFFER,rt+$,z.__data)):X.isMatrix3?(z.__data[0]=X.elements[0],z.__data[1]=X.elements[1],z.__data[2]=X.elements[2],z.__data[3]=0,z.__data[4]=X.elements[3],z.__data[5]=X.elements[4],z.__data[6]=X.elements[5],z.__data[7]=0,z.__data[8]=X.elements[6],z.__data[9]=X.elements[7],z.__data[10]=X.elements[8],z.__data[11]=0):(X.toArray(z.__data,$),$+=it.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(l.UNIFORM_BUFFER,rt,z.__data)}}}l.bindBuffer(l.UNIFORM_BUFFER,null)}function y(L,U,C,O){const P=L.value,N=U+"_"+C;if(O[N]===void 0)return typeof P=="number"||typeof P=="boolean"?O[N]=P:O[N]=P.clone(),!0;{const B=O[N];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return O[N]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function T(L){const U=L.uniforms;let C=0;const O=16;for(let N=0,B=U.length;N<B;N++){const A=Array.isArray(U[N])?U[N]:[U[N]];for(let w=0,z=A.length;w<z;w++){const rt=A[w],Q=Array.isArray(rt.value)?rt.value:[rt.value];for(let $=0,ot=Q.length;$<ot;$++){const X=Q[$],it=E(X),Y=C%O,xt=Y%it.boundary,yt=Y+xt;C+=xt,yt!==0&&O-yt<it.storage&&(C+=O-yt),rt.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=C,C+=it.storage}}}const P=C%O;return P>0&&(C+=O-P),L.__size=C,L.__cache={},this}function E(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function M(L){const U=L.target;U.removeEventListener("dispose",M);const C=f.indexOf(U.__bindingPointIndex);f.splice(C,1),l.deleteBuffer(s[U.id]),delete s[U.id],delete u[U.id]}function x(){for(const L in s)l.deleteBuffer(s[L]);f=[],s={},u={}}return{bind:m,update:p,dispose:x}}class x2{constructor(t={}){const{canvas:i=B1(),context:a=null,depth:s=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=f;const T=new Uint32Array(4),E=new Int32Array(4);let M=null,x=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let O=!1;this._outputColorSpace=Ui;let P=0,N=0,B=null,A=-1,w=null;const z=new xn,rt=new xn;let Q=null;const $=new ke(0);let ot=0,X=i.width,it=i.height,Y=1,xt=null,yt=null;const wt=new xn(0,0,X,it),Wt=new xn(0,0,X,it);let xe=!1;const H=new Pv;let V=!1,dt=!1;const ct=new Rn,Ut=new ht,Rt=new xn,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function zt(){return B===null?Y:1}let G=a;function ze(D,j){return i.getContext(D,j)}try{const D={alpha:!0,depth:s,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yd}`),i.addEventListener("webglcontextlost",Nt,!1),i.addEventListener("webglcontextrestored",Zt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),G===null){const j="webgl2";if(G=ze(j,D),G===null)throw ze(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ae,qt,Xt,se,Lt,he,Ne,Le,I,R,at,pt,St,mt,Kt,Dt,It,Qt,Tt,Gt,ue,te,Bt,pe;function k(){ae=new wR(G),ae.init(),te=new f2(G,ae),qt=new MR(G,ae,t,te),Xt=new u2(G,ae),qt.reversedDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),se=new NR(G),Lt=new KC,he=new c2(G,ae,Xt,Lt,qt,te,se),Ne=new TR(C),Le=new CR(C),I=new vb(G),Bt=new SR(G,I),R=new DR(G,I,se,Bt),at=new OR(G,R,I,se),Tt=new LR(G,qt,he),Dt=new ER(Lt),pt=new jC(C,Ne,Le,ae,qt,Bt,Dt),St=new g2(C,Lt),mt=new JC,Kt=new a2(ae),Qt=new xR(C,Ne,Le,Xt,at,y,m),It=new o2(C,at,qt),pe=new v2(G,se,qt,Xt),Gt=new yR(G,ae,se),ue=new UR(G,ae,se),se.programs=pt.programs,C.capabilities=qt,C.extensions=ae,C.properties=Lt,C.renderLists=mt,C.shadowMap=It,C.state=Xt,C.info=se}k();const bt=new m2(C,G);this.xr=bt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const D=ae.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ae.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(D){D!==void 0&&(Y=D,this.setSize(X,it,!1))},this.getSize=function(D){return D.set(X,it)},this.setSize=function(D,j,lt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=D,it=j,i.width=Math.floor(D*Y),i.height=Math.floor(j*Y),lt===!0&&(i.style.width=D+"px",i.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(X*Y,it*Y).floor()},this.setDrawingBufferSize=function(D,j,lt){X=D,it=j,Y=lt,i.width=Math.floor(D*lt),i.height=Math.floor(j*lt),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(wt)},this.setViewport=function(D,j,lt,ut){D.isVector4?wt.set(D.x,D.y,D.z,D.w):wt.set(D,j,lt,ut),Xt.viewport(z.copy(wt).multiplyScalar(Y).round())},this.getScissor=function(D){return D.copy(Wt)},this.setScissor=function(D,j,lt,ut){D.isVector4?Wt.set(D.x,D.y,D.z,D.w):Wt.set(D,j,lt,ut),Xt.scissor(rt.copy(Wt).multiplyScalar(Y).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(D){Xt.setScissorTest(xe=D)},this.setOpaqueSort=function(D){xt=D},this.setTransparentSort=function(D){yt=D},this.getClearColor=function(D){return D.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(D=!0,j=!0,lt=!0){let ut=0;if(D){let J=!1;if(B!==null){const At=B.texture.format;J=At===Gd||At===Hd||At===Fd}if(J){const At=B.texture.type,Vt=At===nr||At===zs||At===su||At===lu||At===Id||At===Bd,Yt=Qt.getClearColor(),Ot=Qt.getClearAlpha(),et=Yt.r,ft=Yt.g,Mt=Yt.b;Vt?(T[0]=et,T[1]=ft,T[2]=Mt,T[3]=Ot,G.clearBufferuiv(G.COLOR,0,T)):(E[0]=et,E[1]=ft,E[2]=Mt,E[3]=Ot,G.clearBufferiv(G.COLOR,0,E))}else ut|=G.COLOR_BUFFER_BIT}j&&(ut|=G.DEPTH_BUFFER_BIT),lt&&(ut|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Nt,!1),i.removeEventListener("webglcontextrestored",Zt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),Qt.dispose(),mt.dispose(),Kt.dispose(),Lt.dispose(),Ne.dispose(),Le.dispose(),at.dispose(),Bt.dispose(),pe.dispose(),pt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",an),bt.removeEventListener("sessionend",fn),da.stop()};function Nt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Zt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const D=se.autoReset,j=It.enabled,lt=It.autoUpdate,ut=It.needsUpdate,J=It.type;k(),se.autoReset=D,It.enabled=j,It.autoUpdate=lt,It.needsUpdate=ut,It.type=J}function Et(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function vt(D){const j=D.target;j.removeEventListener("dispose",vt),ee(j)}function ee(D){me(D),Lt.remove(D)}function me(D){const j=Lt.get(D).programs;j!==void 0&&(j.forEach(function(lt){pt.releaseProgram(lt)}),D.isShaderMaterial&&pt.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,lt,ut,J,At){j===null&&(j=Ft);const Vt=J.isMesh&&J.matrixWorld.determinant()<0,Yt=Zs(D,j,lt,ut,J);Xt.setMaterial(ut,Vt);let Ot=lt.index,et=1;if(ut.wireframe===!0){if(Ot=R.getWireframeAttribute(lt),Ot===void 0)return;et=2}const ft=lt.drawRange,Mt=lt.attributes.position;let Ct=ft.start*et,ie=(ft.start+ft.count)*et;At!==null&&(Ct=Math.max(Ct,At.start*et),ie=Math.min(ie,(At.start+At.count)*et)),Ot!==null?(Ct=Math.max(Ct,0),ie=Math.min(ie,Ot.count)):Mt!=null&&(Ct=Math.max(Ct,0),ie=Math.min(ie,Mt.count));const fe=ie-Ct;if(fe<0||fe===1/0)return;Bt.setup(J,ut,Yt,lt,Ot);let ce,Jt=Gt;if(Ot!==null&&(ce=I.get(Ot),Jt=ue,Jt.setIndex(ce)),J.isMesh)ut.wireframe===!0?(Xt.setLineWidth(ut.wireframeLinewidth*zt()),Jt.setMode(G.LINES)):Jt.setMode(G.TRIANGLES);else if(J.isLine){let jt=ut.linewidth;jt===void 0&&(jt=1),Xt.setLineWidth(jt*zt()),J.isLineSegments?Jt.setMode(G.LINES):J.isLineLoop?Jt.setMode(G.LINE_LOOP):Jt.setMode(G.LINE_STRIP)}else J.isPoints?Jt.setMode(G.POINTS):J.isSprite&&Jt.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)zo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Jt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Jt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const jt=J._multiDrawStarts,re=J._multiDrawCounts,oe=J._multiDrawCount,sn=Ot?I.get(Ot).bytesPerElement:1,_e=Lt.get(ut).currentProgram.getUniforms();for(let ge=0;ge<oe;ge++)_e.setValue(G,"_gl_DrawID",ge),Jt.render(jt[ge]/sn,re[ge])}else if(J.isInstancedMesh)Jt.renderInstances(Ct,fe,J.count);else if(lt.isInstancedBufferGeometry){const jt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,re=Math.min(lt.instanceCount,jt);Jt.renderInstances(Ct,fe,re)}else Jt.render(Ct,fe)};function Be(D,j,lt){D.transparent===!0&&D.side===er&&D.forceSinglePass===!1?(D.side=mi,D.needsUpdate=!0,Gn(D,j,lt),D.side=Ir,D.needsUpdate=!0,Gn(D,j,lt),D.side=er):Gn(D,j,lt)}this.compile=function(D,j,lt=null){lt===null&&(lt=D),x=Kt.get(lt),x.init(j),U.push(x),lt.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),D!==lt&&D.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const ut=new Set;return D.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const At=J.material;if(At)if(Array.isArray(At))for(let Vt=0;Vt<At.length;Vt++){const Yt=At[Vt];Be(Yt,lt,J),ut.add(Yt)}else Be(At,lt,J),ut.add(At)}),x=U.pop(),ut},this.compileAsync=function(D,j,lt=null){const ut=this.compile(D,j,lt);return new Promise(J=>{function At(){if(ut.forEach(function(Vt){Lt.get(Vt).currentProgram.isReady()&&ut.delete(Vt)}),ut.size===0){J(D);return}setTimeout(At,10)}ae.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Te=null;function je(D){Te&&Te(D)}function an(){da.stop()}function fn(){da.start()}const da=new Bv;da.setAnimationLoop(je),typeof self<"u"&&da.setContext(self),this.setAnimationLoop=function(D){Te=D,bt.setAnimationLoop(D),D===null?da.stop():da.start()},bt.addEventListener("sessionstart",an),bt.addEventListener("sessionend",fn),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(j),j=bt.getCamera()),D.isScene===!0&&D.onBeforeRender(C,D,j,B),x=Kt.get(D,U.length),x.init(j),U.push(x),ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),H.setFromProjectionMatrix(ct,Ca,j.reversedDepth),dt=this.localClippingEnabled,V=Dt.init(this.clippingPlanes,dt),M=mt.get(D,L.length),M.init(),L.push(M),bt.enabled===!0&&bt.isPresenting===!0){const At=C.xr.getDepthSensingMesh();At!==null&&La(At,j,-1/0,C.sortObjects)}La(D,j,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(xt,yt),Pt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Pt&&Qt.addToRenderList(M,D),this.info.render.frame++,V===!0&&Dt.beginShadows();const lt=x.state.shadowsArray;It.render(lt,D,j),V===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=M.opaque,J=M.transmissive;if(x.setupLights(),j.isArrayCamera){const At=j.cameras;if(J.length>0)for(let Vt=0,Yt=At.length;Vt<Yt;Vt++){const Ot=At[Vt];Oa(ut,J,D,Ot)}Pt&&Qt.render(D);for(let Vt=0,Yt=At.length;Vt<Yt;Vt++){const Ot=At[Vt];dr(M,D,Ot,Ot.viewport)}}else J.length>0&&Oa(ut,J,D,j),Pt&&Qt.render(D),dr(M,D,j);B!==null&&N===0&&(he.updateMultisampleRenderTarget(B),he.updateRenderTargetMipmap(B)),D.isScene===!0&&D.onAfterRender(C,D,j),Bt.resetDefaultState(),A=-1,w=null,U.pop(),U.length>0?(x=U[U.length-1],V===!0&&Dt.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?M=L[L.length-1]:M=null};function La(D,j,lt,ut){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)lt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||H.intersectsSprite(D)){ut&&Rt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ct);const Vt=at.update(D),Yt=D.material;Yt.visible&&M.push(D,Vt,Yt,lt,Rt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||H.intersectsObject(D))){const Vt=at.update(D),Yt=D.material;if(ut&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Rt.copy(D.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Rt.copy(Vt.boundingSphere.center)),Rt.applyMatrix4(D.matrixWorld).applyMatrix4(ct)),Array.isArray(Yt)){const Ot=Vt.groups;for(let et=0,ft=Ot.length;et<ft;et++){const Mt=Ot[et],Ct=Yt[Mt.materialIndex];Ct&&Ct.visible&&M.push(D,Vt,Ct,lt,Rt.z,Mt)}}else Yt.visible&&M.push(D,Vt,Yt,lt,Rt.z,null)}}const At=D.children;for(let Vt=0,Yt=At.length;Vt<Yt;Vt++)La(At[Vt],j,lt,ut)}function dr(D,j,lt,ut){const J=D.opaque,At=D.transmissive,Vt=D.transparent;x.setupLightsView(lt),V===!0&&Dt.setGlobalState(C.clippingPlanes,lt),ut&&Xt.viewport(z.copy(ut)),J.length>0&&Zi(J,j,lt),At.length>0&&Zi(At,j,lt),Vt.length>0&&Zi(Vt,j,lt),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Oa(D,j,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ut.id]===void 0&&(x.state.transmissionRenderTarget[ut.id]=new Vr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?ou:nr,minFilter:Hr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));const At=x.state.transmissionRenderTarget[ut.id],Vt=ut.viewport||z;At.setSize(Vt.z*C.transmissionResolutionScale,Vt.w*C.transmissionResolutionScale);const Yt=C.getRenderTarget(),Ot=C.getActiveCubeFace(),et=C.getActiveMipmapLevel();C.setRenderTarget(At),C.getClearColor($),ot=C.getClearAlpha(),ot<1&&C.setClearColor(16777215,.5),C.clear(),Pt&&Qt.render(lt);const ft=C.toneMapping;C.toneMapping=Fr;const Mt=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),x.setupLightsView(ut),V===!0&&Dt.setGlobalState(C.clippingPlanes,ut),Zi(D,lt,ut),he.updateMultisampleRenderTarget(At),he.updateRenderTargetMipmap(At),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let ie=0,fe=j.length;ie<fe;ie++){const ce=j[ie],Jt=ce.object,jt=ce.geometry,re=ce.material,oe=ce.group;if(re.side===er&&Jt.layers.test(ut.layers)){const sn=re.side;re.side=mi,re.needsUpdate=!0,Pa(Jt,lt,ut,jt,re,oe),re.side=sn,re.needsUpdate=!0,Ct=!0}}Ct===!0&&(he.updateMultisampleRenderTarget(At),he.updateRenderTargetMipmap(At))}C.setRenderTarget(Yt,Ot,et),C.setClearColor($,ot),Mt!==void 0&&(ut.viewport=Mt),C.toneMapping=ft}function Zi(D,j,lt){const ut=j.isScene===!0?j.overrideMaterial:null;for(let J=0,At=D.length;J<At;J++){const Vt=D[J],Yt=Vt.object,Ot=Vt.geometry,et=Vt.group;let ft=Vt.material;ft.allowOverride===!0&&ut!==null&&(ft=ut),Yt.layers.test(lt.layers)&&Pa(Yt,j,lt,Ot,ft,et)}}function Pa(D,j,lt,ut,J,At){D.onBeforeRender(C,j,lt,ut,J,At),D.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),J.onBeforeRender(C,j,lt,ut,D,At),J.transparent===!0&&J.side===er&&J.forceSinglePass===!1?(J.side=mi,J.needsUpdate=!0,C.renderBufferDirect(lt,j,ut,J,D,At),J.side=Ir,J.needsUpdate=!0,C.renderBufferDirect(lt,j,ut,J,D,At),J.side=er):C.renderBufferDirect(lt,j,ut,J,D,At),D.onAfterRender(C,j,lt,ut,J,At)}function Gn(D,j,lt){j.isScene!==!0&&(j=Ft);const ut=Lt.get(D),J=x.state.lights,At=x.state.shadowsArray,Vt=J.state.version,Yt=pt.getParameters(D,J.state,At,j,lt),Ot=pt.getProgramCacheKey(Yt);let et=ut.programs;ut.environment=D.isMeshStandardMaterial?j.environment:null,ut.fog=j.fog,ut.envMap=(D.isMeshStandardMaterial?Le:Ne).get(D.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,et===void 0&&(D.addEventListener("dispose",vt),et=new Map,ut.programs=et);let ft=et.get(Ot);if(ft!==void 0){if(ut.currentProgram===ft&&ut.lightsStateVersion===Vt)return pa(D,Yt),ft}else Yt.uniforms=pt.getUniforms(D),D.onBeforeCompile(Yt,C),ft=pt.acquireProgram(Yt,Ot),et.set(Ot,ft),ut.uniforms=Yt.uniforms;const Mt=ut.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Mt.clippingPlanes=Dt.uniform),pa(D,Yt),ut.needsLights=Qr(D),ut.lightsStateVersion=Vt,ut.needsLights&&(Mt.ambientLightColor.value=J.state.ambient,Mt.lightProbe.value=J.state.probe,Mt.directionalLights.value=J.state.directional,Mt.directionalLightShadows.value=J.state.directionalShadow,Mt.spotLights.value=J.state.spot,Mt.spotLightShadows.value=J.state.spotShadow,Mt.rectAreaLights.value=J.state.rectArea,Mt.ltc_1.value=J.state.rectAreaLTC1,Mt.ltc_2.value=J.state.rectAreaLTC2,Mt.pointLights.value=J.state.point,Mt.pointLightShadows.value=J.state.pointShadow,Mt.hemisphereLights.value=J.state.hemi,Mt.directionalShadowMap.value=J.state.directionalShadowMap,Mt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Mt.spotShadowMap.value=J.state.spotShadowMap,Mt.spotLightMatrix.value=J.state.spotLightMatrix,Mt.spotLightMap.value=J.state.spotLightMap,Mt.pointShadowMap.value=J.state.pointShadowMap,Mt.pointShadowMatrix.value=J.state.pointShadowMatrix),ut.currentProgram=ft,ut.uniformsList=null,ft}function za(D){if(D.uniformsList===null){const j=D.currentProgram.getUniforms();D.uniformsList=sf.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function pa(D,j){const lt=Lt.get(D);lt.outputColorSpace=j.outputColorSpace,lt.batching=j.batching,lt.batchingColor=j.batchingColor,lt.instancing=j.instancing,lt.instancingColor=j.instancingColor,lt.instancingMorph=j.instancingMorph,lt.skinning=j.skinning,lt.morphTargets=j.morphTargets,lt.morphNormals=j.morphNormals,lt.morphColors=j.morphColors,lt.morphTargetsCount=j.morphTargetsCount,lt.numClippingPlanes=j.numClippingPlanes,lt.numIntersection=j.numClipIntersection,lt.vertexAlphas=j.vertexAlphas,lt.vertexTangents=j.vertexTangents,lt.toneMapping=j.toneMapping}function Zs(D,j,lt,ut,J){j.isScene!==!0&&(j=Ft),he.resetTextureUnits();const At=j.fog,Vt=ut.isMeshStandardMaterial?j.environment:null,Yt=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Lo,Ot=(ut.isMeshStandardMaterial?Le:Ne).get(ut.envMap||Vt),et=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ft=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Mt=!!lt.morphAttributes.position,Ct=!!lt.morphAttributes.normal,ie=!!lt.morphAttributes.color;let fe=Fr;ut.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(fe=C.toneMapping);const ce=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Jt=ce!==void 0?ce.length:0,jt=Lt.get(ut),re=x.state.lights;if(V===!0&&(dt===!0||D!==w)){const $e=D===w&&ut.id===A;Dt.setState(ut,D,$e)}let oe=!1;ut.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==re.state.version||jt.outputColorSpace!==Yt||J.isBatchedMesh&&jt.batching===!1||!J.isBatchedMesh&&jt.batching===!0||J.isBatchedMesh&&jt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&jt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&jt.instancing===!1||!J.isInstancedMesh&&jt.instancing===!0||J.isSkinnedMesh&&jt.skinning===!1||!J.isSkinnedMesh&&jt.skinning===!0||J.isInstancedMesh&&jt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&jt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&jt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&jt.instancingMorph===!1&&J.morphTexture!==null||jt.envMap!==Ot||ut.fog===!0&&jt.fog!==At||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Dt.numPlanes||jt.numIntersection!==Dt.numIntersection)||jt.vertexAlphas!==et||jt.vertexTangents!==ft||jt.morphTargets!==Mt||jt.morphNormals!==Ct||jt.morphColors!==ie||jt.toneMapping!==fe||jt.morphTargetsCount!==Jt)&&(oe=!0):(oe=!0,jt.__version=ut.version);let sn=jt.currentProgram;oe===!0&&(sn=Gn(ut,j,J));let _e=!1,ge=!1,ai=!1;const Fe=sn.getUniforms(),Vn=jt.uniforms;if(Xt.useProgram(sn.program)&&(_e=!0,ge=!0,ai=!0),ut.id!==A&&(A=ut.id,ge=!0),_e||w!==D){Xt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Fe.setValue(G,"projectionMatrix",D.projectionMatrix),Fe.setValue(G,"viewMatrix",D.matrixWorldInverse);const mn=Fe.map.cameraPosition;mn!==void 0&&mn.setValue(G,Ut.setFromMatrixPosition(D.matrixWorld)),qt.logarithmicDepthBuffer&&Fe.setValue(G,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Fe.setValue(G,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,ge=!0,ai=!0)}if(J.isSkinnedMesh){Fe.setOptional(G,J,"bindMatrix"),Fe.setOptional(G,J,"bindMatrixInverse");const $e=J.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Fe.setValue(G,"boneTexture",$e.boneTexture,he))}J.isBatchedMesh&&(Fe.setOptional(G,J,"batchingTexture"),Fe.setValue(G,"batchingTexture",J._matricesTexture,he),Fe.setOptional(G,J,"batchingIdTexture"),Fe.setValue(G,"batchingIdTexture",J._indirectTexture,he),Fe.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&Fe.setValue(G,"batchingColorTexture",J._colorsTexture,he));const hn=lt.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Tt.update(J,lt,sn),(ge||jt.receiveShadow!==J.receiveShadow)&&(jt.receiveShadow=J.receiveShadow,Fe.setValue(G,"receiveShadow",J.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Vn.envMap.value=Ot,Vn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&j.environment!==null&&(Vn.envMapIntensity.value=j.environmentIntensity),ge&&(Fe.setValue(G,"toneMappingExposure",C.toneMappingExposure),jt.needsLights&&el(Vn,ai),At&&ut.fog===!0&&St.refreshFogUniforms(Vn,At),St.refreshMaterialUniforms(Vn,ut,Y,it,x.state.transmissionRenderTarget[D.id]),sf.upload(G,za(jt),Vn,he)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(sf.upload(G,za(jt),Vn,he),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Fe.setValue(G,"center",J.center),Fe.setValue(G,"modelViewMatrix",J.modelViewMatrix),Fe.setValue(G,"normalMatrix",J.normalMatrix),Fe.setValue(G,"modelMatrix",J.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const $e=ut.uniformsGroups;for(let mn=0,ma=$e.length;mn<ma;mn++){const Pi=$e[mn];pe.update(Pi,sn),pe.bind(Pi,sn)}}return sn}function el(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function Qr(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(D,j,lt){const ut=Lt.get(D);ut.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),Lt.get(D.texture).__webglTexture=j,Lt.get(D.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:lt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,j){const lt=Lt.get(D);lt.__webglFramebuffer=j,lt.__useDefaultFramebuffer=j===void 0};const js=G.createFramebuffer();this.setRenderTarget=function(D,j=0,lt=0){B=D,P=j,N=lt;let ut=!0,J=null,At=!1,Vt=!1;if(D){const Ot=Lt.get(D);if(Ot.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(G.FRAMEBUFFER,null),ut=!1;else if(Ot.__webglFramebuffer===void 0)he.setupRenderTarget(D);else if(Ot.__hasExternalTextures)he.rebindTextures(D,Lt.get(D.texture).__webglTexture,Lt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Mt=D.depthTexture;if(Ot.__boundDepthTexture!==Mt){if(Mt!==null&&Lt.has(Mt)&&(D.width!==Mt.image.width||D.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(D)}}const et=D.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Vt=!0);const ft=Lt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ft[j])?J=ft[j][lt]:J=ft[j],At=!0):D.samples>0&&he.useMultisampledRTT(D)===!1?J=Lt.get(D).__webglMultisampledFramebuffer:Array.isArray(ft)?J=ft[lt]:J=ft,z.copy(D.viewport),rt.copy(D.scissor),Q=D.scissorTest}else z.copy(wt).multiplyScalar(Y).floor(),rt.copy(Wt).multiplyScalar(Y).floor(),Q=xe;if(lt!==0&&(J=js),Xt.bindFramebuffer(G.FRAMEBUFFER,J)&&ut&&Xt.drawBuffers(D,J),Xt.viewport(z),Xt.scissor(rt),Xt.setScissorTest(Q),At){const Ot=Lt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ot.__webglTexture,lt)}else if(Vt){const Ot=j;for(let et=0;et<D.textures.length;et++){const ft=Lt.get(D.textures[et]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+et,ft.__webglTexture,lt,Ot)}}else if(D!==null&&lt!==0){const Ot=Lt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ot.__webglTexture,lt)}A=-1},this.readRenderTargetPixels=function(D,j,lt,ut,J,At,Vt,Yt=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(Ot=Ot[Vt]),Ot){Xt.bindFramebuffer(G.FRAMEBUFFER,Ot);try{const et=D.textures[Yt],ft=et.format,Mt=et.type;if(!qt.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-ut&&lt>=0&&lt<=D.height-J&&(D.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Yt),G.readPixels(j,lt,ut,J,te.convert(ft),te.convert(Mt),At))}finally{const et=B!==null?Lt.get(B).__webglFramebuffer:null;Xt.bindFramebuffer(G.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(D,j,lt,ut,J,At,Vt,Yt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(Ot=Ot[Vt]),Ot)if(j>=0&&j<=D.width-ut&&lt>=0&&lt<=D.height-J){Xt.bindFramebuffer(G.FRAMEBUFFER,Ot);const et=D.textures[Yt],ft=et.format,Mt=et.type;if(!qt.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ct),G.bufferData(G.PIXEL_PACK_BUFFER,At.byteLength,G.STREAM_READ),D.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Yt),G.readPixels(j,lt,ut,J,te.convert(ft),te.convert(Mt),0);const ie=B!==null?Lt.get(B).__webglFramebuffer:null;Xt.bindFramebuffer(G.FRAMEBUFFER,ie);const fe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await F1(G,fe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ct),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,At),G.deleteBuffer(Ct),G.deleteSync(fe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,j=null,lt=0){const ut=Math.pow(2,-lt),J=Math.floor(D.image.width*ut),At=Math.floor(D.image.height*ut),Vt=j!==null?j.x:0,Yt=j!==null?j.y:0;he.setTexture2D(D,0),G.copyTexSubImage2D(G.TEXTURE_2D,lt,0,0,Vt,Yt,J,At),Xt.unbindTexture()};const Ia=G.createFramebuffer(),pr=G.createFramebuffer();this.copyTextureToTexture=function(D,j,lt=null,ut=null,J=0,At=null){At===null&&(J!==0?(zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=J,J=0):At=0);let Vt,Yt,Ot,et,ft,Mt,Ct,ie,fe;const ce=D.isCompressedTexture?D.mipmaps[At]:D.image;if(lt!==null)Vt=lt.max.x-lt.min.x,Yt=lt.max.y-lt.min.y,Ot=lt.isBox3?lt.max.z-lt.min.z:1,et=lt.min.x,ft=lt.min.y,Mt=lt.isBox3?lt.min.z:0;else{const hn=Math.pow(2,-J);Vt=Math.floor(ce.width*hn),Yt=Math.floor(ce.height*hn),D.isDataArrayTexture?Ot=ce.depth:D.isData3DTexture?Ot=Math.floor(ce.depth*hn):Ot=1,et=0,ft=0,Mt=0}ut!==null?(Ct=ut.x,ie=ut.y,fe=ut.z):(Ct=0,ie=0,fe=0);const Jt=te.convert(j.format),jt=te.convert(j.type);let re;j.isData3DTexture?(he.setTexture3D(j,0),re=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(he.setTexture2DArray(j,0),re=G.TEXTURE_2D_ARRAY):(he.setTexture2D(j,0),re=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const oe=G.getParameter(G.UNPACK_ROW_LENGTH),sn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),_e=G.getParameter(G.UNPACK_SKIP_PIXELS),ge=G.getParameter(G.UNPACK_SKIP_ROWS),ai=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ce.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ce.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,et),G.pixelStorei(G.UNPACK_SKIP_ROWS,ft),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Mt);const Fe=D.isDataArrayTexture||D.isData3DTexture,Vn=j.isDataArrayTexture||j.isData3DTexture;if(D.isDepthTexture){const hn=Lt.get(D),$e=Lt.get(j),mn=Lt.get(hn.__renderTarget),ma=Lt.get($e.__renderTarget);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,mn.__webglFramebuffer),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let Pi=0;Pi<Ot;Pi++)Fe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Lt.get(D).__webglTexture,J,Mt+Pi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Lt.get(j).__webglTexture,At,fe+Pi)),G.blitFramebuffer(et,ft,Vt,Yt,Ct,ie,Vt,Yt,G.DEPTH_BUFFER_BIT,G.NEAREST);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||D.isRenderTargetTexture||Lt.has(D)){const hn=Lt.get(D),$e=Lt.get(j);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,Ia),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,pr);for(let mn=0;mn<Ot;mn++)Fe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hn.__webglTexture,J,Mt+mn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hn.__webglTexture,J),Vn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$e.__webglTexture,At,fe+mn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,$e.__webglTexture,At),J!==0?G.blitFramebuffer(et,ft,Vt,Yt,Ct,ie,Vt,Yt,G.COLOR_BUFFER_BIT,G.NEAREST):Vn?G.copyTexSubImage3D(re,At,Ct,ie,fe+mn,et,ft,Vt,Yt):G.copyTexSubImage2D(re,At,Ct,ie,et,ft,Vt,Yt);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Vn?D.isDataTexture||D.isData3DTexture?G.texSubImage3D(re,At,Ct,ie,fe,Vt,Yt,Ot,Jt,jt,ce.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(re,At,Ct,ie,fe,Vt,Yt,Ot,Jt,ce.data):G.texSubImage3D(re,At,Ct,ie,fe,Vt,Yt,Ot,Jt,jt,ce):D.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,At,Ct,ie,Vt,Yt,Jt,jt,ce.data):D.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,At,Ct,ie,ce.width,ce.height,Jt,ce.data):G.texSubImage2D(G.TEXTURE_2D,At,Ct,ie,Vt,Yt,Jt,jt,ce);G.pixelStorei(G.UNPACK_ROW_LENGTH,oe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,sn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,_e),G.pixelStorei(G.UNPACK_SKIP_ROWS,ge),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ai),At===0&&j.generateMipmaps&&G.generateMipmap(re),Xt.unbindTexture()},this.copyTextureToTexture3D=function(D,j,lt=null,ut=null,J=0){return zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,j,lt,ut,J)},this.initRenderTarget=function(D){Lt.get(D).__webglFramebuffer===void 0&&he.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?he.setTextureCube(D,0):D.isData3DTexture?he.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?he.setTexture2DArray(D,0):he.setTexture2D(D,0),Xt.unbindTexture()},this.resetState=function(){P=0,N=0,B=null,Xt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ie._getUnpackColorSpace()}}function px(...l){return l.filter(Boolean).join(" ")}class S2 extends Fn.Component{state={hasError:!1};static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){console.error("WebGL carousel error:",t)}render(){return this.state.hasError?this.props.fallback:this.props.children}}function mx({className:l,message:t}){return Xi.jsx("div",{role:"alert",className:px("flex items-center justify-center p-6 text-center text-sm text-neutral-600",l),children:t})}const Ua=3/4,jr=l=>`https://images.unsplash.com/photo-${l}?w=900&h=1200&q=85&auto=format&fit=crop`,y2=[{title:"Project One",src:jr("1600585154340-be6161a56a0c"),aspect:Ua},{title:"Project Two",src:jr("1514906689926-25ba6dcb584b"),aspect:Ua},{title:"Project Three",src:jr("1568557412756-7d219873dd11"),aspect:Ua},{title:"Project Four",src:jr("1581892805885-73bdd91beff0"),aspect:Ua},{title:"Project Five",src:jr("1482938289607-e9573fc25ebb"),aspect:Ua},{title:"Project Six",src:jr("1610846202780-b4d9837371ea"),aspect:Ua},{title:"Project Seven",src:jr("1527630941-4a229fd674ab"),aspect:Ua},{title:"Project Eight",src:jr("1603786420263-ad59136a7409"),aspect:Ua}],Ve={sizeX:.45,sizeY:.78,posX:.5,posY:.5,rotation:65,spin:0,zoom:0,dispersion:11,blur:0,glow:4.2,whiteGlow:0,novaSize:12,blueRing:6,ringRadius:.49,ringWidth:.014,shimmerFreq:12,shimmerSpeed:3.5,shimmerDepth:.12,rimStart:.578,rimTangential:.6,rimInward:0,rimFreq1:2,rimFreq2:1,blueColor:"#009dff",rimLine:0,rimLinePos:.488,rimLineWidth:.003,vignette:0,vignetteSize:.3,samples:16},gi={cardDuration:.7,focusDuration:.9,cardEase:"power4.out",focusEase:"power3.out",stagger:.06,dropDist:1.4,centerScale:1.18,lensFade:.85},Hn={delay:.5,startH:80,riseDuration:1,stagger:.07,riseEase:"power3.out",fromBelow:.9,growDelay:.25,growDuration:2.15,growEase:"expo.inOut",growStagger:.085,lensBloom:1.4,lensBloomEase:"power2.inOut"},M2=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,E2=`
#define PI 3.14159265
precision highp float;
varying vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uRes;
uniform vec2 uCenter;
uniform float uSizeX;
uniform float uSizeY;
uniform float uAspect;
uniform float uZoom;
uniform float uDispersion;
uniform float uBlur;
uniform float uGlow;
uniform float uWhiteGlow;
uniform float uNovaSize;
uniform float uBlueRing;
uniform float uRingRadius;
uniform float uRingWidth;
uniform float uShimmer;
uniform float uShimmerFreq;
uniform float uShimmerSpeed;
uniform float uShimmerDepth;
uniform float uTime;
uniform float uRimStart;
uniform float uRimTangential;
uniform float uRimInward;
uniform float uRimFreq1;
uniform float uRimFreq2;
uniform vec3 uBlueColor;
uniform float uRimLine;
uniform float uRimLinePos;
uniform float uRimLineWidth;
uniform float uVignette;
uniform float uVignetteSize;
uniform float uShape;
uniform float uSquareRound;
uniform float uRotation;
uniform int uSamples;

const int MAX_SAMPLES = 16;

float sdRoundBox(vec2 p, vec2 b, float r){
  vec2 q = abs(p) - b + r;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

vec3 linearToSrgb(vec3 color){
  vec3 linearPart = color * 12.92;
  vec3 srgbPart = 1.055 * pow(max(color, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055;
  vec3 useSrgb = step(vec3(0.0031308), color);
  return mix(linearPart, srgbPart, useSrgb);
}

vec3 discLens(vec2 center, float aspectCorrect, out float outA) {
  vec2 p = (vUv - center);
  p.x *= aspectCorrect;
  float ca = cos(uRotation), sa = sin(uRotation);
  p = mat2(ca, -sa, sa, ca) * p;
  vec2 halfSize = vec2(uSizeX, uSizeY);
  float dist = length(p / halfSize);
  outA = 0.0;

  float maskND;
  if (uShape > 0.5) {
    float corner = min(uSizeX, uSizeY) * clamp(uSquareRound, 0.0, 1.0);
    float sd = sdRoundBox(p, halfSize, corner);
    maskND = 1.0 + sd / min(uSizeX, uSizeY);
  } else {
    maskND = dist;
  }
  if (maskND > 1.0) return vec3(0.0);

  float shapeND = clamp(maskND, 0.0, 1.0);
  float nd = clamp(dist, 0.0, 1.0);
  vec2 offset = vUv - center;
  vec2 radialDir = normalize(offset + 1e-6);
  vec2 tangentDir = vec2(-radialDir.y, radialDir.x);
  float angle = atan(p.y, p.x);

  float pull = uZoom * 0.30 * (nd * nd);
  float rimStrength = smoothstep(uRimStart, 1.0, nd);
  // Static wave: depends only on the angle, never on time.
  float fluidWave = sin(angle * uRimFreq1) * 0.55 + sin(angle * uRimFreq2) * 0.25;
  float rScreen = (uSizeX + uSizeY) * 0.5;
  vec2 rimOff = tangentDir * fluidWave * rimStrength * rScreen * uRimTangential;
  vec2 rimPull = -radialDir * rimStrength * rScreen * uRimInward;

  vec2 baseUV = center + offset * (1.0 - pull) + rimOff + rimPull;

  float rimMask = smoothstep(0.55, 1.0, nd);
  vec2 dispDir = offset * uDispersion * 0.004 * rimMask;
  int N = uSamples;
  if (N < 2) N = 2;
  if (N > MAX_SAMPLES) N = MAX_SAMPLES;
  vec3 col = vec3(0.0);
  vec3 caW = vec3(0.0);
  for (int i = 0; i < MAX_SAMPLES; i++) {
    if (i >= N) break;
    float t = float(i) / float(N - 1);
    vec2 sUV = baseUV + dispDir * (t - 0.5);
    vec3 s = texture2D(uTex, sUV).rgb;
    vec3 w = vec3(
      exp(-pow((t - 0.00) / 0.38, 2.0)),
      exp(-pow((t - 0.50) / 0.38, 2.0)),
      exp(-pow((t - 1.00) / 0.38, 2.0))
    );
    col += s * w;
    caW += w;
  }
  col /= max(caW, vec3(0.001));

  float blurFade = 1.0 - smoothstep(0.72, 0.98, nd);
  if (uBlur > 0.01 && blurFade > 0.01) {
    vec2 blurRad = vec2(uBlur) / uRes * blurFade;
    vec3 bcol = vec3(0.0);
    float btw = 0.0;
    for (float a = 0.0; a < PI * 2.0; a += PI * 2.0 / 6.0) {
      for (float rr = 0.4; rr <= 1.001; rr += 0.3) {
        vec2 o = vec2(cos(a), sin(a)) * blurRad * rr;
        float w = 1.0 - rr * 0.38;
        bcol += texture2D(uTex, baseUV + o).rgb * w;
        btw += w;
      }
    }
    col = mix(bcol / btw, col, rimMask);
  }

  // Preserve source-image contrast and color; only the UVs above refract it.

  float r2 = shapeND * shapeND * 0.25;
  float gs = max(uNovaSize * uGlow * 0.003, 0.004);
  float nova = exp(-r2 / gs) + exp(-r2 / (gs * 7.0)) * 0.18;
  nova *= uWhiteGlow * (uGlow / 17.0) * 1.15;
  col += vec3(nova);

  float dC = shapeND * 0.5;
  float tR = clamp(uRingRadius, 0.1, 0.49);
  float rW = max(uRingWidth, 0.003);
  float ring = exp(-pow((dC - tR) / rW, 2.0));
  ring *= uBlueRing * (uGlow / 17.0) * 1.8;
  if (uShimmer > 0.5) ring *= sin(angle * uShimmerFreq + uTime * uShimmerSpeed) * uShimmerDepth + (1.0 - uShimmerDepth);
  float ringAura = exp(-pow((dC - tR) / (rW * 6.0), 2.0)) * 0.28 * uBlueRing * (uGlow / 17.0);
  col += uBlueColor * (ring + ringAura);
  col += vec3(exp(-pow((dC - uRimLinePos) / max(uRimLineWidth, 0.0001), 2.0)) * uRimLine);

  outA = smoothstep(1.0, 0.93, maskND);
  return col;
}

void main(){
  vec3 base = texture2D(uTex, vUv).rgb;
  vec3 outc = base;
  float a = 0.0;
  vec3 c = discLens(uCenter, uAspect, a);
  outc = mix(outc, c, a);
  if (uVignette > 0.001) {
    vec2 vc = vUv - 0.5;
    vc.x *= uAspect;
    float d = length(vc) / max(uVignetteSize, 0.0001);
    float vig = 1.0 - uVignette * smoothstep(0.5, 1.0, d);
    outc *= clamp(vig, 0.0, 1.0);
  }
  // The first pass is a linear render target; encode once for the screen.
  gl_FragColor = vec4(linearToSrgb(outc), 1.0);
}
`,_x=["uDispersion","uBlueRing","uRimLine","uVignette","uZoom","uRimTangential","uRimInward"],hr=4,T2=6,b2=12,A2=90;function Na(l,t){const i=l[t];if(i===void 0)throw new Error("Index out of range.");return i}function gx(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function R2(l){const t=l.trim();if(t.startsWith("#")&&(t.length===7||t.length===4)){const i=t.length===4?`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`:t,a=Number.parseInt(i.slice(1),16);return Number.isFinite(a)?a:16777215}return 16777215}function C2(l,t,i){const a=gx(),s=i.entry&&!a,u=i.items;if(u.length===0)return null;let f=Math.max(1,l.clientWidth),d=Math.max(1,l.clientHeight);const m=()=>Math.max(120,Math.min(i.panelHeight,Math.round(d*.52)));let p=m();const _=i.gap,g=a?.28:.09,v=a?.22:.05,y=1.4,T=1.6,E=1,M=.22,x=.865,L=120,U=60,C=.25,O=.06;let P;try{P=new x2({antialias:!0,alpha:!1})}catch{return null}const N=Math.min(window.devicePixelRatio||1,2);P.setPixelRatio(N),P.setSize(f,d),P.setClearColor(R2(i.background),1),P.domElement.style.display="block",P.domElement.style.width="100%",P.domElement.style.height="100%",P.domElement.style.touchAction="pan-y",P.domElement.style.userSelect="none",P.domElement.setAttribute("aria-hidden","true"),l.appendChild(P.domElement);const B=new Ov,A=new Vp(-f/2,f/2,d/2,-d/2,-100,100);A.position.z=10;const w=et=>{const ft=new ni(et);return ft.minFilter=Hr,ft.magFilter=ra,ft.generateMipmaps=!0,ft.anisotropy=P.capabilities.getMaxAnisotropy(),ft.colorSpace=Ui,ft.needsUpdate=!0,ft},z=u.map(et=>{const ft={tex:null,aspect:et.aspect||Ua,locked:et.aspect!=null},Mt=new Image,Ct=new URL(et.src,document.baseURI);return Ct.protocol!=="file:"&&Ct.origin!==window.location.origin&&(Mt.crossOrigin="anonymous"),Mt.onload=()=>{!ft.locked&&Mt.naturalWidth&&Mt.naturalHeight&&(ft.aspect=Mt.naturalWidth/Mt.naturalHeight),ft.tex=w(Mt),ot(),xe||(wt=X(0),Wt=wt)},Mt.onerror=()=>{console.error(`[Liquid Chromatic Carousel] Could not load image: ${Ct.href}`),ft.aspect=ft.aspect||Ua},Mt.src=Ct.href,ft});function rt(et){return Na(z,et).aspect*p+_}let Q=[],$=0;function ot(){Q=[];let et=0;for(let ft=0;ft<z.length;ft++)Q.push(et),et+=rt(ft);$=et}ot();function X(et){const ft=z.length,Mt=Math.floor(et/ft),Ct=(et%ft+ft)%ft;return Na(Q,Ct)+rt(Ct)/2-_/2+Mt*$}function it(et){if(!$)return 0;const ft=z.length;let Mt=0,Ct=1/0;for(let ie=0;ie<ft;ie++){const fe=Na(Q,ie)+rt(ie)/2-_/2,ce=Math.round((et-fe)/$),Jt=Math.abs(fe+ce*$-et);Jt<Ct&&(Ct=Jt,Mt=ie+ce*ft)}return Mt}function Y(et){if(!$)return 0;let ft=0,Mt=1/0;for(let Ct=0;Ct<z.length;Ct++){const ie=Na(Q,Ct)+rt(Ct)/2-_/2,fe=Math.round((et-ie)/$),ce=Math.abs(ie+fe*$-et);ce<Mt&&(Mt=ce,ft=Ct)}return ft}let xt=-1;const yt=[];for(let et=0;et<hr;et++)for(let ft=0;ft<z.length;ft++){const Mt=new Ip({color:16777215,opacity:0,transparent:!0}),Ct=new fa(new Qo(1,1,1,1),Mt);Ct.visible=!1,B.add(Ct),yt.push({mesh:Ct,mat:Mt,srcIndex:ft,bound:!1})}let wt=X(0),Wt=wt,xe=!1,H=0,V=0,dt=0,ct=null,Ut=performance.now(),Rt=!1;const Ft=new Vr(f*N,d*N),Pt=new Ov,zt=new Vp(-1,1,1,-1,0,1),G={uTex:{value:Ft.texture},uRes:{value:new Ge(f*N,d*N)},uCenter:{value:new Ge(.5,.5)},uSizeX:{value:Ve.sizeX},uSizeY:{value:Ve.sizeY},uShape:{value:0},uSquareRound:{value:0},uRotation:{value:0},uAspect:{value:f/d},uZoom:{value:Ve.zoom},uDispersion:{value:Ve.dispersion},uBlur:{value:Ve.blur},uGlow:{value:Ve.glow},uWhiteGlow:{value:Ve.whiteGlow},uNovaSize:{value:Ve.novaSize},uBlueRing:{value:Ve.blueRing},uRingRadius:{value:Ve.ringRadius},uRingWidth:{value:Ve.ringWidth},uShimmer:{value:0},uShimmerFreq:{value:Ve.shimmerFreq},uShimmerSpeed:{value:Ve.shimmerSpeed},uShimmerDepth:{value:Ve.shimmerDepth},uTime:{value:0},uRimStart:{value:Ve.rimStart},uRimTangential:{value:Ve.rimTangential},uRimInward:{value:Ve.rimInward},uRimFreq1:{value:Ve.rimFreq1},uRimFreq2:{value:Ve.rimFreq2},uBlueColor:{value:new ke(Ve.blueColor)},uRimLine:{value:Ve.rimLine},uRimLinePos:{value:Ve.rimLinePos},uRimLineWidth:{value:Ve.rimLineWidth},uVignette:{value:Ve.vignette},uVignetteSize:{value:Ve.vignetteSize},uSamples:{value:Ve.samples}},ze=new fr({uniforms:G,vertexShader:M2,fragmentShader:E2}),ae=new fa(new Qo(2,2),ze);Pt.add(ae);const qt={active:!1,srcIndex:-1,poolIdx:-1,lensFx:s?0:1,anim:null},Xt=new Array(hr*z.length).fill(0);let se=1;const Lt=new Array(hr*z.length),he=new Array(hr*z.length).fill(s?0:1);let Ne=s,Le=!1;const I=new Array(hr*z.length).fill(s?0:1);let R=null;const at={uDispersion:G.uDispersion.value,uBlueRing:G.uBlueRing.value,uRimLine:G.uRimLine.value,uVignette:G.uVignette.value,uZoom:G.uZoom.value,uRimTangential:G.uRimTangential.value,uRimInward:G.uRimInward.value};let pt=[],St=null;function mt(){pt=[],St=null;let et=1/0;const ft=f/2,Mt=p;yt.forEach((Ct,ie)=>{const fe=Math.floor(ie/z.length),ce=Ct.srcIndex,Jt=Na(z,ce);let re=Na(Q,ce)+rt(ce)/2-_/2-wt;re=(re%$+$)%$,re+=(fe-Math.floor(hr/2))*$,re>ft+$&&(re-=$*hr);const oe=re;if(!(Ne||Le)&&(oe<-ft-Mt||oe>ft+Mt)){Ct.mesh.visible=!1,Lt[ie]=void 0;return}Lt[ie]=oe;const _e=1-.25*dt,ge=p*_e,ai=Jt.aspect*p*_e;Jt.tex&&!Ct.bound&&(Ct.mat.map=Jt.tex,Ct.mat.color.set(16777215),Ct.mat.opacity=1,Ct.mat.needsUpdate=!0,Ct.bound=!0);let Fe=0;const Vn=qt.active&&qt.poolIdx===ie,hn=Xt[ie]||0;let $e=ai,mn=ge;Vn?($e=ai*se,mn=ge*se):hn>0&&(Fe=-hn*d*gi.dropDist),Ct.mesh.visible=!0;let ma=oe,Pi=Fe,uf=$e,Oe=mn;if(Ne||Le){const nl=he[ie]||0,_a=I[ie]||0,$n=Hn.startH+(mn-Hn.startH)*_a;Oe=$n,uf=$n*Jt.aspect;const Jr=Y(wt);let Ba=ce-Jr;Ba>z.length/2&&(Ba-=z.length),Ba<-z.length/2&&(Ba+=z.length);const Xn=z.length,Tu=Math.floor(hr/2);if(fe!==Tu){Ct.mesh.visible=!1,Lt[ie]=void 0;return}const il=vi=>{const ga=I[Tu*Xn+vi]||0;return Hn.startH+(p-Hn.startH)*ga};let ti=0;if(Ba>0)for(let vi=0;vi<Ba;vi++){const ga=((Jr+vi)%Xn+Xn)%Xn,ji=((Jr+vi+1)%Xn+Xn)%Xn;ti+=(Na(z,ga).aspect*il(ga)+Na(z,ji).aspect*il(ji))/2+_}else if(Ba<0)for(let vi=0;vi<-Ba;vi++){const ga=((Jr-vi)%Xn+Xn)%Xn,ji=((Jr-vi-1)%Xn+Xn)%Xn;ti-=(Na(z,ga).aspect*il(ga)+Na(z,ji).aspect*il(ji))/2+_}if(ma=ti,ma<-ft-Mt||ma>ft+Mt){Ct.mesh.visible=!1,Lt[ie]=void 0;return}const al=-d*Hn.fromBelow;Pi=al+(Fe-al)*nl}Ct.mesh.position.set(ma,Pi,0),Ct.mesh.scale.set(uf,Oe,1);const Eu=oe+f/2,Ks=d/2-Fe;pt.push({left:Eu-$e/2,right:Eu+$e/2,top:Ks-mn/2,bottom:Ks+mn/2,poolIdx:ie,srcIndex:ce,centerX:oe}),Math.abs(oe)<et&&(et=Math.abs(oe),St={srcIndex:ce,centerX:oe,wPx:ai,h:ge,poolIdx:ie})})}function Kt(et,ft){for(const Mt of pt)if(et>=Mt.left&&et<=Mt.right&&ft>=Mt.top&&ft<=Mt.bottom)return Mt;return null}function Dt(et){const ft=P.domElement.getBoundingClientRect();return{x:et.clientX-ft.left,y:et.clientY-ft.top}}const It=P.domElement;let Qt=!1,Tt=null,Gt=0,ue=0,te=0,Bt=0,pe=!1,k="mouse",bt=Number.NaN,Nt=Number.NaN,Zt=!1,Et="mouse";t&&Bn.set(t,{xPercent:20,yPercent:30,scale:0,autoAlpha:0});const vt=t?Bn.quickTo(t,"x",{duration:.5,ease:"power3.out"}):null,ee=t?Bn.quickTo(t,"y",{duration:.5,ease:"power3.out"}):null;let me=!1,Be=!1,Te="";function je(et){et!==Te&&(Te=et,It.style.cursor=et)}function an(){return qt.active||Ne||Le?je(""):je(Qt?"grabbing":Be?"grab":"")}function fn(et){Be=et,La(et)}function da(){if(!(!Zt||Et!=="mouse")&&Number.isFinite(bt)){if(qt.active){fn(!1);return}fn(Kt(bt,Nt)!==null)}}function La(et){if((Ne||Le)&&(et=!1),Qt&&(et=!1),et===me){an();return}me=et,an(),t&&(Bn.killTweensOf(t,"scale,autoAlpha,opacity,visibility"),Bn.to(t,{scale:et?1:0,autoAlpha:et?1:0,duration:et?.35:.25,ease:et?"power3.out":"power3.in"}))}function dr(){return qt.active||Ne||Le}function Oa(et){if(pt.length===0)return;const ft=Dt(et),Mt=Math.min(...pt.map(fe=>fe.top)),Ct=Math.max(...pt.map(fe=>fe.bottom)),ie=d*.09;if(!(ft.y<Mt-ie||ft.y>Ct+ie)){if(et.preventDefault(),qt.active){Qr();return}dr()||(xe=!0,ct=null,Wt+=(et.deltaY||et.deltaX)*y,Ut=performance.now(),Rt=!1)}}function Zi(et){if(pe=!1,dr()||Qt||et.button!==0&&et.pointerType==="mouse")return;Qt=!0,Tt=et.pointerId,k=et.pointerType||"mouse";try{It.setPointerCapture(et.pointerId)}catch{}const ft=Dt(et);Gt=ft.x,bt=ft.x,Nt=ft.y,ue=0,te=0,Bt=performance.now(),La(!1),H=0,ct=null,xe=!0,Rt=!1,Ut=Bt}function Pa(et){const ft=Dt(et);if(Qt&&et.pointerId===Tt){const Mt=k==="mouse"?T:E,Ct=ft.x-Gt;Gt=ft.x,ue+=Math.abs(Ct),Wt-=Ct*Mt,te=te*.6+-Ct*Mt*.4,Bt=performance.now(),Ut=Bt,Rt=!1}if(bt=ft.x,Nt=ft.y,Et=et.pointerType||"mouse",Zt=!0,et.pointerType==="mouse"){if(vt&&vt(ft.x),ee&&ee(ft.y),qt.active){fn(!1);return}fn(Kt(ft.x,ft.y)!==null)}}function Gn(et){if(Qt&&!(et&&Tt!==null&&et.pointerId!==Tt)){if(Qt=!1,Tt!==null){try{It.releasePointerCapture(Tt)}catch{}Tt=null}H=performance.now()-Bt>A2?0:te,te=0,Ut=performance.now(),Rt=!1,pe=ue>(k==="mouse"?T2:b2),k==="mouse"?fn(Kt(bt,Nt)!==null):an()}}function za(et){Zt=!0,Et=et.pointerType||"mouse"}function pa(){Zt=!1,fn(!1)}function Zs(et){if(pe){pe=!1;return}const ft=Dt(et),Mt=Kt(ft.x,ft.y);if(qt.active){(!Mt||Mt.poolIdx!==qt.poolIdx)&&Qr();return}if(!dr()&&Mt){if(St&&Mt.poolIdx===St.poolIdx){ct=null,el();return}xe=!0,H=0,Wt=X(it(wt+Mt.centerX)),Rt=!0,ct={srcIndex:Mt.srcIndex},La(!1)}}function el(){if(qt.active||!St||!z[St.srcIndex]?.tex)return;qt.active=!0,qt.srcIndex=St.srcIndex;const ft=St.poolIdx;qt.poolIdx=ft,Wt=X(it(wt));const Mt=Lt[ft]||0,Ct=yt.map((re,oe)=>({idx:oe,x:Lt[oe]})).filter(re=>re.idx!==ft&&re.x!==void 0).map(re=>({idx:re.idx,dist:Math.abs((re.x??0)-Mt)})).sort((re,oe)=>re.dist-oe.dist);let ie=0,fe=-1;const ce=Ct.map(re=>(fe>=0&&re.dist-fe>1&&(ie+=1),fe=re.dist,{idx:re.idx,rank:ie}));for(const re of _x)at[re]=G[re].value;qt.anim&&qt.anim.kill();const Jt={v:se},jt=Bn.timeline();jt.to(qt,{lensFx:0,duration:gi.lensFade,ease:"power3.out"},0),jt.to(Jt,{v:gi.centerScale,duration:gi.focusDuration,ease:gi.focusEase,onUpdate(){se=Jt.v}},0),ce.forEach(re=>{jt.to(Xt,{[re.idx]:1,duration:gi.cardDuration,ease:gi.cardEase},re.rank*gi.stagger)}),qt.anim=jt,La(!1),i.onFocusChange(!0)}function Qr(){if(!qt.active)return;qt.anim&&qt.anim.kill();const et=Lt[qt.poolIdx]||0,ft=yt.map((Jt,jt)=>({idx:jt,x:Lt[jt]})).filter(Jt=>Jt.x!==void 0&&(Xt[Jt.idx]||0)>0).map(Jt=>({idx:Jt.idx,dist:Math.abs((Jt.x??0)-et)})).sort((Jt,jt)=>jt.dist-Jt.dist);let Mt=0,Ct=-1;const ie=ft.map(Jt=>(Ct>=0&&Ct-Jt.dist>1&&(Mt+=1),Ct=Jt.dist,{idx:Jt.idx,rank:Mt}));i.onFocusChange(!1);const fe={v:se},ce=Bn.timeline({onComplete:()=>{qt.active=!1,qt.srcIndex=-1,an()}});ce.to(qt,{lensFx:1,duration:gi.lensFade*.8,ease:"power3.inOut"},0),ce.to(fe,{v:1,duration:gi.focusDuration*.85,ease:gi.focusEase,onUpdate(){se=fe.v}},0),ie.forEach(Jt=>{ce.to(Xt,{[Jt.idx]:0,duration:gi.cardDuration*.85,ease:gi.cardEase},Jt.rank*gi.stagger*.7)}),qt.anim=ce}function js(){if(!s){i.onEntryDone(!0);return}R&&R.kill();for(let _e=0;_e<he.length;_e++)he[_e]=0;Ne=!0,Le=!1,i.onEntryDone(!1);for(let _e=0;_e<I.length;_e++)I[_e]=0;qt.lensFx=0,Wt=X(it(wt)),wt=Wt,H=0,Rt=!0,mt();const et=[];for(let _e=0;_e<Lt.length;_e++)Lt[_e]!==void 0&&et.push(_e);const ft=Bn.timeline({delay:Hn.delay}),Mt=Hn.stagger*Math.max(et.length-1,1);let Ct=0;et.forEach(_e=>{const ge=Math.random()*Mt;Ct=Math.max(Ct,ge+Hn.riseDuration),ft.to(he,{[_e]:1,duration:Hn.riseDuration,ease:Hn.riseEase},ge)}),ft.call(()=>{Ne=!1,Le=!0},[],Ct);const ie=Y(wt),fe=z.length,ce=Math.floor(hr/2),Jt=[];let jt=0;for(let _e=0;_e<Lt.length;_e++){if(Lt[_e]===void 0||Math.floor(_e/fe)!==ce)continue;let ge=_e%fe-ie;ge>fe/2&&(ge-=fe),ge<-fe/2&&(ge+=fe);const ai=Math.abs(ge);jt=Math.max(jt,ai),Jt.push({idx:_e,rank:ai})}const re=Jt.map(_e=>({idx:_e.idx,rank:jt-_e.rank})),oe=Ct+Hn.growDelay;let sn=oe;ft.to(qt,{lensFx:1,duration:Hn.lensBloom,ease:Hn.lensBloomEase},oe),re.forEach(_e=>{const ge=oe+_e.rank*Hn.growStagger;sn=Math.max(sn,ge+Hn.growDuration),ft.to(I,{[_e.idx]:1,duration:Hn.growDuration,ease:Hn.growEase},ge)}),ft.call(()=>{Le=!1;for(let _e=0;_e<I.length;_e++)I[_e]=1;i.onEntryDone(!0),an()},[],sn),R=ft}function Ia(et){dr()||(xe=!0,H=0,ct=null,Wt=X(it(wt)+et),Rt=!0,Ut=performance.now())}It.addEventListener("wheel",Oa,{passive:!1}),It.addEventListener("pointerdown",Zi),It.addEventListener("pointermove",Pa),It.addEventListener("pointerup",Gn),It.addEventListener("pointercancel",Gn),It.addEventListener("pointerenter",za),It.addEventListener("pointerleave",pa),It.addEventListener("click",Zs);let pr=0,D=!0,j=!0;function lt(){if(!D)return;if(!j||document.hidden){pr=0;return}Qt||(Wt+=H,H*=x,Math.abs(H)<.05&&(H=0),!Rt&&!qt.active&&performance.now()-Ut>L&&(Wt=X(it(wt)),Rt=!0));const et=Qt&&k!=="mouse"?M:Rt&&!ct?v:g;wt+=(Wt-wt)*et;const ft=Y(wt);ft!==xt&&(xt=ft,i.onActiveChange(ft));const Mt=wt-V;V=wt;const Ct=Math.min(1,Math.abs(Mt)/Math.max(1,U)),ie=Ct>dt?C:O;if(dt+=(Ct-dt)*ie,mt(),da(),ct&&!qt.active&&Math.abs(Wt-wt)<.5){const Jt=ct;ct=null,St&&St.srcIndex===Jt.srcIndex&&el()}G.uCenter.value.set(Ve.posX,Ve.posY),G.uAspect.value=f/d,G.uTime.value=performance.now()*.001;const fe=Jt=>Jt*Math.PI/180;G.uRotation.value=fe(Ve.rotation)+fe(Ve.spin)*(performance.now()*.001);const ce=qt.lensFx;for(const Jt of _x)G[Jt].value=at[Jt]*ce;P.setRenderTarget(Ft),P.render(B,A),P.setRenderTarget(null),P.render(Pt,zt),pr=requestAnimationFrame(lt)}function ut(){!D||pr||(pr=requestAnimationFrame(lt))}ut(),s?js():i.onEntryDone(!0);function J(){f=Math.max(1,l.clientWidth),d=Math.max(1,l.clientHeight),p=m(),ot(),P.setSize(f,d),A.left=-f/2,A.right=f/2,A.top=d/2,A.bottom=-d/2,A.updateProjectionMatrix();const et=Math.min(window.devicePixelRatio||1,2);P.setPixelRatio(et),Ft.setSize(f*et,d*et),G.uRes.value.set(f*et,d*et),xe||(wt=X(0),Wt=wt)}const At=new ResizeObserver(J);At.observe(l);const Vt=new IntersectionObserver(([et])=>{const ft=et?.boundingClientRect;!ft||ft.width===0&&ft.height===0||(j=et?.isIntersecting??!0,j&&ut())});Vt.observe(l);const Yt=()=>{document.hidden||ut()};document.addEventListener("visibilitychange",Yt);function Ot(){D=!1,cancelAnimationFrame(pr),At.disconnect(),Vt.disconnect(),document.removeEventListener("visibilitychange",Yt),It.removeEventListener("wheel",Oa),It.removeEventListener("pointerdown",Zi),It.removeEventListener("pointermove",Pa),It.removeEventListener("pointerup",Gn),It.removeEventListener("pointercancel",Gn),It.removeEventListener("pointerenter",za),It.removeEventListener("pointerleave",pa),It.removeEventListener("click",Zs),qt.anim&&qt.anim.kill(),R&&R.kill(),t&&Bn.killTweensOf(t),P.dispose(),Ft.dispose(),ae.geometry.dispose(),ze.dispose(),yt.forEach(et=>{et.mesh.geometry.dispose(),et.mat.dispose()}),z.forEach(et=>{et.tex?.dispose()}),P.domElement.parentNode&&P.domElement.parentNode.removeChild(P.domElement)}return{closeFocus:Qr,next:()=>Ia(1),previous:()=>Ia(-1),destroy:Ot}}function lf(l){return String(l).padStart(2,"0")}function w2({items:l=y2,panelHeight:t=450,gap:i=12,background:a="#ffffff",entry:s=!0,className:u,style:f,onActiveChange:d,onFocusChange:m}){const p=Fn.useRef(null),_=Fn.useRef(null),g=Fn.useRef(null),v=Fn.useRef(null),y=Fn.useRef(null),T=Fn.useRef(!1),[E,M]=Fn.useState(0),[x,L]=Fn.useState(!1),[U,C]=Fn.useState(!s),[O,P]=Fn.useState(!1),N=Fn.useId(),B=Fn.useId(),A=l[E]??l[0],w=Fn.useRef(d),z=Fn.useRef(m);w.current=d,z.current=m,Fn.useEffect(()=>{const Q=p.current;if(!Q||l.length===0)return;const $=C2(Q,_.current,{items:l,panelHeight:t,gap:i,background:a,entry:s,onActiveChange:ot=>{M(ot),w.current?.(ot)},onFocusChange:ot=>{L(ot),z.current?.(ot)},onEntryDone:C});if(!$){P(!0);return}return g.current=$,()=>{$.destroy(),g.current=null}},[l,t,i,a,s]),Fn.useEffect(()=>{const Q=v.current,$=y.current;if(!Q||!$)return;const ot=gx();if(Bn.set(Q,{xPercent:-50}),Bn.set($,{xPercent:-50}),!U&&s&&!ot){Bn.set([Q,$],{autoAlpha:0}),T.current=!1;return}const X=x?window.innerHeight*-.05:0;if(U&&!x&&!T.current){T.current=!0,Bn.fromTo(Q,{autoAlpha:0},{autoAlpha:1,duration:ot?0:1.6,ease:"power2.out"}),Bn.fromTo($,{autoAlpha:0},{autoAlpha:1,duration:ot?0:1.6,ease:"power2.out",delay:ot?0:.18});return}Bn.to(Q,{y:X,autoAlpha:1,duration:ot?0:.4,ease:"power3.out"}),Bn.to($,{autoAlpha:x?0:1,duration:ot?0:.4,ease:"power3.out"})},[x,U,s]);const rt=Q=>{Q.key==="ArrowRight"?(Q.preventDefault(),g.current?.next()):Q.key==="ArrowLeft"?(Q.preventDefault(),g.current?.previous()):Q.key==="Escape"&&(Q.preventDefault(),g.current?.closeFocus())};return Xi.jsxs("div",{className:px("relative h-full min-h-[420px] w-full overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-black/20",u),style:{background:a,color:"#111111",...f},tabIndex:0,role:"region","aria-roledescription":"carousel","aria-labelledby":N,onKeyDown:rt,children:[Xi.jsx("p",{id:N,className:"sr-only",children:"Liquid chromatic project carousel"}),Xi.jsxs("p",{id:B,className:"sr-only","aria-live":"polite",children:[A?.title??"",", ",lf(E+1)," of ",lf(l.length),x?", focused":""]}),Xi.jsx(S2,{fallback:Xi.jsx(mx,{className:"absolute inset-0",message:"This carousel needs WebGL, which is unavailable in this browser."}),children:O?Xi.jsx(mx,{className:"absolute inset-0",message:"This carousel needs WebGL, which is unavailable in this browser."}):Xi.jsx("div",{ref:p,className:"absolute inset-0"})}),Xi.jsx("p",{ref:v,className:"pointer-events-none absolute left-1/2 top-[4.5%] z-10 m-0 text-center text-[15px] font-medium tracking-[-0.02em] text-black opacity-0 sm:text-[17px]",children:A?.title}),Xi.jsxs("p",{ref:y,className:"pointer-events-none absolute bottom-[6%] left-1/2 z-10 m-0 text-center text-[13px] font-medium tabular-nums tracking-[-0.02em] text-black opacity-0 sm:text-[15px]",children:[lf(E+1),"/",lf(l.length)]}),Xi.jsx("div",{ref:_,className:"pointer-events-none absolute left-0 top-0 z-20 text-[13px] font-medium text-black mix-blend-exclusion",children:"View"})]})}const D2=new URL("./",document.baseURI),Kr=l=>new URL(l,D2).href,U2=[{title:"IKKA",src:Kr("ikka.jpg")},{title:"Bela Waya Above",src:Kr("bela-waya-above.jpg")},{title:"Seedhe Maut",src:Kr("seedhe-maut.jpg")},{title:"1v1 Domination",src:Kr("thumbnail-1v1-domination.png")},{title:"Gen Z Podcaster",src:Kr("gen-z-podcaster.png")},{title:"AI",src:Kr("ai-thumbnail.png")},{title:"Chapri or Businessman",src:Kr("chapri-or-businessman.png")},{title:"Para Bhaiya",src:Kr("para-bhaiya-event-poster.png")}];let yu=null,Mu=null;function vx(){if(yu)try{yu.unmount()}catch{}yu=null,Mu=null}function Qp(){const l=document.getElementById("liquid-glass-carousel-root");!l||l===Mu||(vx(),Mu=l,yu=wE.createRoot(l),yu.render(Xi.jsx(w2,{items:U2})))}new MutationObserver(()=>{Mu&&!Mu.isConnected&&vx()}).observe(document.documentElement,{childList:!0,subtree:!0}),window.addEventListener("liquid-glass-carousel:mount",Qp),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Qp):Qp()})();
