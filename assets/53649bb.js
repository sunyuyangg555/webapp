(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{514:function(t,e,n){"use strict";n(11),n(8),n(9),n(40),n(145),n(104),n(324),n(22),n(17),n(18),n(12),n(20),n(37),n(43),n(78),n(74),n(10),n(48);var r=n(1),o=(n(323),n(3)),c=n(49),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],O=y.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=y.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),v=y.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(O),offset:Object.keys(m),order:Object.keys(v)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=h(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},515:function(t,e,n){"use strict";n(11),n(29),n(8),n(9),n(40),n(145),n(324),n(17),n(18),n(12),n(20),n(37),n(66),n(43),n(78),n(10),n(48);var r=n(1),o=(n(323),n(3)),c=n(49),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],O=["start","end","center"];function m(t,e){return y.reduce((function(n,r){return n[t+Object(l.G)(r)]=e(),n}),{})}var v=function(t){return[].concat(O,["baseline","stretch"]).includes(t)},j=m("align",(function(){return{type:String,default:null,validator:v}})),h=function(t){return[].concat(O,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:h}})),S=function(t){return[].concat(O,["space-between","space-around","stretch"]).includes(t)},P=m("alignContent",(function(){return{type:String,default:null,validator:S}})),k={align:Object.keys(j),justify:Object.keys(w),alignContent:Object.keys(P)},C={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var D=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},j),{},{justify:{type:String,default:null,validator:h}},w),{},{alignContent:{type:String,default:null,validator:S}},P),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=D.get(l);return d||function(){var t,e;for(e in d=[],k)k[e].forEach((function(t){var r=n[t],o=x(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),D.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},556:function(t,e,n){var content=n(608);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("251703cc",content,!0,{sourceMap:!1})},607:function(t,e,n){"use strict";n(556)},608:function(t,e,n){(e=n(14)(!1)).push([t.i,'#app{font-family:"Lato",sans-serif}.routeLink{text-decoration:none}',""]),t.exports=e},681:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{clipped:!1,drawer:!0,fixed:!1,picture:!0,dark:!1,sync:!1,pagetitle:"Administrator Dashboard",admins:[["label.titles.usersmanagement","mdi-account-multiples-outline","/settings/users"],["label.titles.settings","mdi-cog-outline","/settings/admin"]],cruds:[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete"]],settings:[{title:"label.titles.medicalstock",icon:"mdi-store",menus:[{title:"label.titles.pharmacy",to:"/inventory/",icon:"mdi-pharmacy"},{title:"label.titles.medicine",to:"/inventory/medicine",icon:"mdi-pill"},{title:"label.titles.bloodbank",to:"/inventory/bloods",icon:"mdi-blood-bag"}]},{title:"label.titles.wardandbeds",icon:"mdi-home-group",menus:[{title:"label.titles.wards",to:"/inventory/ward",icon:"mdi-home-floor-1"},{title:"label.titles.beds",to:"/inventory/bed",icon:"mdi-bunk-bed-outline"}]}]}},head:function(){return{title:"Home Page"}},beforeMount:function(){},methods:{toggledrawer:function(){this.drawer=!this.drawer}}},o=(n(607),n(60)),c=n(73),l=n.n(c),f=n(514),d=n(497),y=n(515),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12"}},[e("nuxt-child",{key:this.$router.currentRoute.name})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a,VContainer:d.a,VRow:y.a})}}]);