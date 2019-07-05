define("dummy/initializers/ajax",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const{get:t}=Ember
var o=function(e){let o=t(this,"fastboot.request.protocol")
if(/^\/\//.test(e.url))e.url=o+e.url
else if(!/^https?:\/\//.test(e.url))try{e.url=o+"//"+t(this,"fastboot.request.host")+e.url}catch(r){throw new Error("You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: "+r.message)}if(!najax)throw new Error("najax does not seem to be defined in your app. Did you override it via `addOrOverrideSandboxGlobals` in the fastboot server?")
najax(e)},r={name:"ajax-service",initialize:function(e){e.register("ajax:node",o,{instantiate:!1}),e.inject("adapter","_ajaxRequest","ajax:node"),e.inject("adapter","fastboot","service:fastboot")}}
e.default=r}),define("dummy/initializers/error-handler",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"error-handler",initialize:function(){Ember.onerror||(Ember.onerror=function(e){const t="There was an error running your app in fastboot. More info about the error: \n ".concat(e.stack||e)
console.error(t)})}}
e.default=t}),define("dummy/instance-initializers/setup-fetch",["exports","fetch"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o={name:"fetch",initialize:function(e){const o=e.lookup("service:fastboot").get("request"),r="undefined:"===o.protocol?"http:":o.protocol;(0,t.setupFastboot)(r,o.get("host"))}}
e.default=o})
