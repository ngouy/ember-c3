"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/c3-chart",["exports","ember","ember-c3/components/c3-chart"],function(e,t,a){e["default"]=a["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/instance-initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e){if(!r){var d=n(e.toString());a["default"].libraries.register(d,t["default"].APP.version),r=!0}}}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return{columns:[["data1",30,20,50,40,60,50],["data2",200,130,90,240,130,220],["data3",300,200,160,400,250,250],["data4",200,130,90,240,130,220],["data5",130,120,150,140,160,150],["data6",90,70,20,50,60,120]],type:"bar",types:{data3:"spline",data4:"line",data6:"area"},groups:[["data1","data2"]]}}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5",loc:{source:null,start:{line:1,column:0},end:{line:3,column:6}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","container"),e.setAttribute(a,"id","main");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[0]),1,1),n},statements:[["content","outlet",["loc",[null,[2,2],[2,12]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5",loc:{source:null,start:{line:1,column:0},end:{line:36,column:0}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h1");e.setAttribute(n,"class","");var r=e.createTextNode("Welcome to Ember C3");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/Glavin001/ember-c3"),e.setAttribute(n,"target","_blank");var r=e.createTextNode("Source");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/Glavin001/ember-c3/issues"),e.setAttribute(n,"target","_blank");var r=e.createTextNode("Issues/Suggestions");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("br");e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("h2"),r=e.createTextNode("Generated Chart");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("See the ");e.appendChild(n,r);var r=e.createElement("strong"),d=e.createTextNode("data");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode(" in the JSON editor below.");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("Usage In Ember");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("See ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","https://github.com/Glavin001/ember-c3/tree/master/app"),e.setAttribute(r,"target","_blank");var d=e.createTextNode("example app source code on GitHub");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode(".");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","well");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createTextNode("{{c3-chart data=model}}\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  \n");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[0]),13,13),n},statements:[["inline","c3-chart",[],["data",["subexpr","@mut",[["get","model",["loc",[null,[12,18],[12,23]]]]],[],[]]],["loc",[null,[12,2],[12,25]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-c3",version:"0.0.0+0c95bae9"});