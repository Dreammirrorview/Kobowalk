(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{94120:function(t,e,n){"use strict";n.r(e),n.d(e,{ERROR_API_KEY_EXPIRED:function(){return w},ERROR_API_KEY_INVALID:function(){return O},ERROR_API_KEY_MISSING:function(){return m},ERROR_BAD_REQUEST_FORMAT:function(){return g},ERROR_BAD_RESPONSE_FORMAT:function(){return s},ERROR_CLIENT_TIMEOUT:function(){return a},ERROR_CSP_BLOCK:function(){return d},ERROR_FORBIDDEN_ENDPOINT:function(){return _},ERROR_FORBIDDEN_HEADER:function(){return y},ERROR_FORBIDDEN_ORIGIN:function(){return P},ERROR_GENERAL_SERVER_FAILURE:function(){return I},ERROR_INSTALLATION_METHOD_RESTRICTED:function(){return E},ERROR_INTEGRATION_FAILURE:function(){return h},ERROR_INVALID_ENDPOINT:function(){return R},ERROR_NETWORK_ABORT:function(){return u},ERROR_NETWORK_CONNECTION:function(){return c},ERROR_RATE_LIMIT:function(){return N},ERROR_SCRIPT_LOAD_FAIL:function(){return L},ERROR_SERVER_TIMEOUT:function(){return T},ERROR_SUBSCRIPTION_NOT_ACTIVE:function(){return f},ERROR_TOKEN_EXPIRED:function(){return b},ERROR_TOKEN_INVALID:function(){return A},ERROR_TOKEN_MISSING:function(){return S},ERROR_UNSUPPORTED_VERSION:function(){return v},ERROR_WRONG_REGION:function(){return p},default:function(){return Z},defaultEndpoint:function(){return o},defaultScriptUrlPattern:function(){return V},defaultTlsEndpoint:function(){return l},load:function(){return C}});var i=n(70655);function r(t){for(var e="",n=0;n<t.length;++n)if(n>0){var i=t[n].toLowerCase();i!==t[n]?e+=" ".concat(i):e+=t[n]}else e+=t[n].toUpperCase();return e}var o={default:"endpoint"},l={default:"tlsEndpoint"},a="Client timeout",c="Network connection error",u="Network request aborted",s="Response cannot be parsed",d="Blocked by CSP",R="The endpoint parameter is not a valid URL",p=r("WrongRegion"),f=r("SubscriptionNotActive"),v=r("UnsupportedVersion"),E=r("InstallationMethodRestricted"),_=r("HostnameRestricted"),h=r("IntegrationFailed"),m="API key required",O="API key not found",w="API key expired",g="Request cannot be parsed",I="Request failed",T="Request failed to process",N="Too many requests, rate limit exceeded",P="Not available for this origin",y="Not available with restricted header",S=m,A=O,b=w,D="9319";var M="https://fpnpmcdn.net/v<version>/<apiKey>/loader_v<loaderVersion>.js",V=M,L="Failed to load the JS script of the agent";function C(t){var e;t.scriptUrlPattern;var n=t.token,r=t.apiKey,o=void 0===r?n:r,l=(0,i.__rest)(t,["scriptUrlPattern","token","apiKey"]),a=null!==(e=function(t,e){return function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(t,e)?t[e]:void 0}(t,"scriptUrlPattern"))&&void 0!==e?e:M;return Promise.resolve().then((function(){if(!o||"string"!=typeof o)throw new Error(m);return function(t,e){var n=[];return function(t,e){var n,r,o,l=(r=t,o=(0,i.__spreadArray)([],r,!0),{current:function(){return o[0]},postpone:function(){var t=o.shift();void 0!==t&&o.push(t)},exclude:function(){o.shift()}}),a=(n=0,function(){return Math.random()*Math.min(3e3,100*Math.pow(2,n++))}),c=l.current();if(void 0===c)return Promise.reject(new TypeError("The list of script URL patterns is empty"));var u=function(t,n){return e(t).catch((function(t){if(n+1>=5)throw t;!function(t){if(!(t instanceof Error))return!1;var e=t.message;return e===d||e===D}(t)?l.postpone():l.exclude();var e,i=l.current();if(void 0===i)throw t;return(e=a(),new Promise((function(t){return setTimeout(t,e)}))).then((function(){return u(i,n+1)}))}))};return u(c,0)}(t,(function(t){var i=new Date,r=function(){return n.push({url:t,startedAt:i,finishedAt:new Date})},o=e(t);return o.then(r,r),o})).then((function(t){return[t,{attempts:n}]}))}(function(t,e){return(Array.isArray(t)?t:[t]).map((function(t){return function(t,e){var n=encodeURIComponent;return t.replace(/<[^<>]+>/g,(function(t){return"<version>"===t?"3":"<apiKey>"===t?n(e):"<loaderVersion>"===t?n("3.8.3"):t}))}(String(t),e)}))}(a,o),H).catch(x)})).then((function(t){var e=t[0],n=t[1];return e.load((0,i.__assign)((0,i.__assign)({},l),{ldi:n}))}))}function H(t){return function(t,e,n,i){var r,o=document,l="securitypolicyviolation",a=function(e){var n=new URL(t,location.href),i=e.blockedURI;i!==n.href&&i!==n.protocol.slice(0,-1)&&i!==n.origin||(r=e,c())};o.addEventListener(l,a);var c=function(){return o.removeEventListener(l,a)};return Promise.resolve().then(e).then((function(t){return c(),t}),(function(t){return new Promise((function(t){return setTimeout(t)})).then((function(){if(c(),r)return function(){throw new Error(d)}();throw t}))}))}(t,(function(){return function(t){return new Promise((function(e,n){var i=document.createElement("script"),r=function(){var t;return null===(t=i.parentNode)||void 0===t?void 0:t.removeChild(i)},o=document.head||document.getElementsByTagName("head")[0];i.onload=function(){r(),e()},i.onerror=function(){r(),n(new Error(L))},i.async=!0,i.src=t,o.appendChild(i)}))}(t)})).then(B)}function B(){var t=window,e="__fpjs_p_l_b",n=t[e];if(function(t,e){var n,i=null===(n=Object.getOwnPropertyDescriptor)||void 0===n?void 0:n.call(Object,t,e);(null==i?void 0:i.configurable)?delete t[e]:i&&!i.writable||(t[e]=void 0)}(t,e),"function"!=typeof(null==n?void 0:n.load))throw new Error(D);return n}function x(t){throw t instanceof Error&&t.message===D?new Error(L):t}var Z={load:C,defaultScriptUrlPattern:M,ERROR_SCRIPT_LOAD_FAIL:L,ERROR_API_KEY_EXPIRED:w,ERROR_API_KEY_INVALID:O,ERROR_API_KEY_MISSING:m,ERROR_BAD_REQUEST_FORMAT:g,ERROR_BAD_RESPONSE_FORMAT:s,ERROR_CLIENT_TIMEOUT:a,ERROR_CSP_BLOCK:d,ERROR_FORBIDDEN_ENDPOINT:_,ERROR_FORBIDDEN_HEADER:y,ERROR_FORBIDDEN_ORIGIN:P,ERROR_GENERAL_SERVER_FAILURE:I,ERROR_INSTALLATION_METHOD_RESTRICTED:E,ERROR_INTEGRATION_FAILURE:h,ERROR_INVALID_ENDPOINT:R,ERROR_NETWORK_ABORT:u,ERROR_NETWORK_CONNECTION:c,ERROR_RATE_LIMIT:N,ERROR_SERVER_TIMEOUT:T,ERROR_SUBSCRIPTION_NOT_ACTIVE:f,ERROR_TOKEN_EXPIRED:w,ERROR_TOKEN_INVALID:O,ERROR_TOKEN_MISSING:m,ERROR_UNSUPPORTED_VERSION:v,ERROR_WRONG_REGION:p,defaultEndpoint:o,defaultTlsEndpoint:l}},10354:function(t,e,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(e,n);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,r)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),r=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||i(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(n(10655),e);var o=n(62764);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.SimplicityProvider}})},15011:function(t,e,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(e,n);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,r)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),r=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return r(e,t),e},l=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function l(t){try{c(i.next(t))}catch(e){o(e)}}function a(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,a)}c((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.SimplicityDataProviderImpl=void 0;const a=o(n(94120));e.SimplicityDataProviderImpl=class{constructor(t){this.options=t,(null===t||void 0===t?void 0:t.lazyInitialize)||"undefined"===typeof window||(this.initSimplicityPromise=this.loadSimplicity(),this.loadFingerprint())}loadSimplicity(){return new Promise((t=>{var e;window.onSimplicityDataAvailable=e=>t(e);const n=document.getElementsByTagName("script")[0],i=document.createElement("script");i.src=(null===(e=this.options)||void 0===e?void 0:e.simplicityScriptUrl)||"https://simplicity.trustpilot.com/simplicity.js",i.onerror=e=>{var n;(null===(n=this.options)||void 0===n?void 0:n.onError)&&this.options.onError(e),t("")},n&&n.parentNode&&n.parentNode.insertBefore(i,n)}))}getSimplicity(t=5e3){return l(this,void 0,void 0,(function*(){this.initSimplicityPromise||(this.initSimplicityPromise=this.loadSimplicity());const e=Date.now();return Promise.race([this.initSimplicityPromise,new Promise((n=>{setTimeout((()=>{var t;(null===(t=this.options)||void 0===t?void 0:t.onTimeout)&&this.options.onTimeout(Date.now()-e),n("")}),Math.max(0,t))}))])}))}loadFingerprint(){this.initFingerprintPromise=new Promise((t=>a.load({region:"eu",endpoint:["https://fp.trustpilot.com",a.defaultEndpoint],tlsEndpoint:["https://fptls.trustpilot.com",a.defaultTlsEndpoint],apiKey:"4bhpfCxkCrdBIJkus95S"}).then((e=>{t(e)})).catch((t=>{throw t}))))}getFingerprint(t=5e3){return l(this,void 0,void 0,(function*(){this.initFingerprintPromise||this.loadFingerprint();const e=new Promise((t=>{var e;null===(e=this.initFingerprintPromise)||void 0===e||e.then((e=>{e.get().then((e=>{t(JSON.stringify(e))})).catch((e=>t("")))})).catch((e=>t("")))})),n=Date.now();return Promise.race([e,new Promise((e=>{setTimeout((()=>{var t;(null===(t=this.options)||void 0===t?void 0:t.onTimeout)&&this.options.onTimeout(Date.now()-n),e("")}),Math.max(0,t))}))])}))}getSimplicityData(t=5e3){return l(this,void 0,void 0,(function*(){const e=yield Promise.all([this.getSimplicity(t),this.getFingerprint(t)]),n=e[0],i=e[1],r=n&&""!==n?JSON.parse(n):{},o=i&&""!==i?JSON.parse(i):{},l=Object.assign(Object.assign({},r),{fingerprint:o});return JSON.stringify(l)}))}}},62764:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SimplicityProvider=void 0;const i=n(15011);e.SimplicityProvider=class{constructor(){this.alreadyBuilt=!1}get instance(){if(!this._instance)throw new TypeError("This instance has not been built yet - Please call .build() before .instance");return this._instance}withOptions(t){return this._options=t,this}build(){if(this.alreadyBuilt)throw new TypeError("This instance has already been built");return this._instance=new i.SimplicityDataProviderImpl(this._options),this.alreadyBuilt=!0,this._instance}}},10655:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},68200:function(t,e,n){"use strict";n.d(e,{_:function(){return c}});var i=n(67294),r=n(53671),o=n(65550),l=n.n(o);const a=()=>i.createElement("svg",{viewBox:"0 0 198 149",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-testid":"businessunitprofile-fallback",className:l().fallbackImage},i.createElement("path",{d:"M0 8C0 3.58172 3.58172 0 8 0H190C194.418 0 198 3.58172 198 8V141C198 145.418 194.418 149 190 149H8C3.58172 149 0 145.418 0 141V8Z",fill:r.Jv.yW8}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M100 70.5H89.5V68.5H100V70.5Z",fill:r.Jv.z5T}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M94 82.5H89.5V80.5H94V82.5Z",fill:r.Jv.z5T}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M94 76.5H89.5V74.5H94V76.5Z",fill:r.Jv.z5T}),i.createElement("path",{d:"M99 76.5H101V78.5H99V76.5Z",fill:r.Jv.z5T}),i.createElement("path",{d:"M99 80.5H101V82.5H99V80.5Z",fill:r.Jv.z5T}),i.createElement("path",{d:"M105.5 76.5H107.5V78.5H105.5V76.5Z",fill:r.Jv.z5T}),i.createElement("path",{d:"M105.5 80.5H107.5V82.5H105.5V80.5Z",fill:r.Jv.z5T}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M110.5 74.5H96V84.5H110.5V74.5ZM94 72.5V86.5H112.5V72.5H94Z",fill:r.Jv.z5T}),i.createElement("path",{d:"M87.5 64.5H102V72.5H104V62.5H85.5V86.5H94V84.5H87.5V64.5Z",fill:r.Jv.z5T})),c=t=>{let{src:e,srcSet:n}=t;const[r,o]=i.useState(e);return r?i.createElement("picture",{className:l().containmentWrapper},n&&n.avif&&i.createElement("source",{srcSet:n.avif,type:"image/avif"}),n&&n.jpg&&i.createElement("source",{srcSet:n.jpg,type:"image/jpeg"}),i.createElement("img",{className:l().image,src:r,alt:"",ref:t=>{t&&(t.src=t.src,t.onerror=()=>{o(null)})}})):i.createElement("span",{className:l().containmentWrapper},i.createElement(a,null))}},65550:function(t){t.exports={containmentWrapper:"business-profile-image_containmentWrapper__wu_Tp",image:"business-profile-image_image__jCBDc",fallbackImage:"business-profile-image_fallbackImage__liQ2_"}},80950:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="trustpilot-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.404 1.904A6.5 6.5 0 0 1 14.5 6.5v.01c0 .194 0 .396-.029.627l-.004.03-.023.095c-.267 2.493-1.844 4.601-3.293 6.056a18.723 18.723 0 0 1-2.634 2.19 11.015 11.015 0 0 1-.234.154l-.013.01-.004.002h-.002L8 15.25l-.261.426h-.002l-.004-.003-.014-.009a13.842 13.842 0 0 1-.233-.152 18.388 18.388 0 0 1-2.64-2.178c-1.46-1.46-3.05-3.587-3.318-6.132l-.003-.026v-.068c-.025-.2-.025-.414-.025-.591V6.5a6.5 6.5 0 0 1 1.904-4.596ZM8 15.25l-.261.427.263.16.262-.162L8 15.25Zm-.002-.598a17.736 17.736 0 0 0 2.444-2.04c1.4-1.405 2.79-3.322 3.01-5.488l.004-.035.026-.105c.018-.153.018-.293.018-.484a5.5 5.5 0 0 0-11 0c0 .21.001.371.02.504l.005.035v.084c.24 2.195 1.632 4.109 3.029 5.505a17.389 17.389 0 0 0 2.444 2.024Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM4.5 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"/></svg>'},50141:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="trustpilot-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12.244a4.5 4.5 0 1 1 0-8.487A5.489 5.489 0 0 0 5 8c0 1.708.779 3.235 2 4.244Zm1-.502A4.496 4.496 0 0 1 6 8c0-1.56.794-2.935 2-3.742C9.206 5.065 10 6.44 10 8s-.794 2.935-2 3.742ZM8 12.9a5.5 5.5 0 1 1 0-9.8 5.5 5.5 0 1 1 0 9.8Zm1-9.144a4.5 4.5 0 1 1 0 8.487A5.489 5.489 0 0 0 11 8a5.489 5.489 0 0 0-2-4.244Z"/></svg>'},13127:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="trustpilot-icon"><path d="m15 7.431-4.353-4.356-.707.707 3.145 3.146H4.5c-.545 0-1.393.099-2.124.519C1.61 7.887 1 8.669 1 9.928c0 1.205.619 1.98 1.368 2.43.723.433 1.568.57 2.132.57v-1c-.436 0-1.09-.112-1.618-.428-.5-.3-.882-.776-.882-1.572 0-.869.39-1.336.874-1.614.52-.298 1.17-.386 1.626-.386h8.588L9.94 11.075l.707.707 4.354-4.35Z"/></svg>'},73345:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="trustpilot-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.36 1.528v3.48c3.46.124 5.38 1.531 6.403 3.316 1.04 1.817 1.097 3.938 1.097 5.176v1.914l-.936-1.67c-1.048-1.869-2.15-2.778-3.278-3.24-1.012-.415-2.09-.49-3.286-.502v3.47L0 7.5l8.36-5.972ZM8.024 6H7.36V3.472L1.72 7.5l5.64 4.028V9h.5c1.384 0 2.808.023 4.165.578.977.4 1.893 1.064 2.747 2.135-.109-.942-.35-1.97-.877-2.891C13.042 7.332 11.387 6.04 8.024 6Z"/></svg>'},75849:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="trustpilot-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-3 2a3 3 0 1 1 .583 1.778L5.867 7.115a3 3 0 0 1 0 1.77l4.716 2.337a3 3 0 1 1-.45.893L5.417 9.778a3 3 0 1 1 0-3.556l4.716-2.337A3.002 3.002 0 0 1 10 3ZM1 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/></svg>'},8081:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="trustpilot-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="m8.003 10.289 5.617-6.557.76.65-6.377 7.444L1.62 4.383l.76-.651 5.623 6.557Z"/></svg>'},8706:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="trustpilot-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.94.94A1.5 1.5 0 0 1 10.5 2a20.774 20.774 0 0 1-.384 4H14.5A1.5 1.5 0 0 1 16 7.5v.066l-1.845 6.9-.094.095A1.5 1.5 0 0 1 13 15H9c-.32 0-.685-.078-1.038-.174-.357-.097-.743-.226-1.112-.349l-.008-.003c-.378-.126-.74-.246-1.067-.335C5.44 14.047 5.18 14 5 14v.941l-5 .625V6h5v.788c.913-.4 1.524-1.357 1.926-2.418A10.169 10.169 0 0 0 7.5 1.973 1.5 1.5 0 0 1 7.94.939ZM8 2l.498.045v.006l-.002.013a4.507 4.507 0 0 1-.026.217 11.166 11.166 0 0 1-.609 2.443C7.396 5.951 6.541 7.404 5 7.851V13c.32 0 .685.078 1.038.174.357.097.743.226 1.112.349l.008.003c.378.126.74.246 1.067.335.335.092.594.139.775.139h4a.5.5 0 0 0 .265-.076l1.732-6.479A.5.5 0 0 0 14.5 7H8.874l.138-.61c.326-1.44.49-2.913.488-4.39a.5.5 0 0 0-1 0v.023l-.002.022L8 2ZM4 7H1v7.434l3-.375V7Zm-1.5 5.75a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5Zm-.75-.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"/></svg>'}}]);
//# sourceMappingURL=351-48192d50e7ea0fab.js.map