(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{509:function(t,e,n){"use strict";n(11),n(8),n(9),n(41),n(142),n(104),n(323),n(22),n(17),n(18),n(13),n(20),n(36),n(42),n(78),n(74),n(10),n(47);var r=n(1),o=(n(322),n(3)),l=n(48),c=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(c.G)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(c.G)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(m),offset:Object.keys(y),order:Object.keys(O)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var f in n)c+=String(n[f]);var d=w.get(c);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=h(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(c,d)}(),t(n.tag,Object(l.a)(data,{class:d}),o)}})},510:function(t,e,n){"use strict";n(11),n(29),n(8),n(9),n(41),n(142),n(323),n(17),n(18),n(13),n(20),n(36),n(66),n(42),n(78),n(10),n(47);var r=n(1),o=(n(322),n(3)),l=n(48),c=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(c.G)(r)]=e(),n}),{})}var O=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:O}})),h=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},w=y("justify",(function(){return{type:String,default:null,validator:h}})),S=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},k=y("alignContent",(function(){return{type:String,default:null,validator:S}})),C={align:Object.keys(j),justify:Object.keys(w),alignContent:Object.keys(k)},_={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,n){var r=_[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var x=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},j),{},{justify:{type:String,default:null,validator:h}},w),{},{alignContent:{type:String,default:null,validator:S}},k),render:function(t,e){var n=e.props,data=e.data,o=e.children,c="";for(var f in n)c+=String(n[f]);var d=x.get(c);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var r=n[t],o=P(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(c,d)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:d}),o)}})},564:function(t,e,n){var content=n(610);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("e28963cc",content,!0,{sourceMap:!1})},609:function(t,e,n){"use strict";n(564)},610:function(t,e,n){(e=n(14)(!1)).push([t.i,'#app{font-family:"Lato",sans-serif}.routeLink{text-decoration:none}',""]),t.exports=e},670:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{clipped:!1,drawer:!0,fixed:!1,picture:!0,dark:!1,sync:!1,pagetitle:"Administrator Dashboard",admins:[["label.titles.usersmanagement","mdi-account-multiples-outline","/settings/users"],["label.titles.settings","mdi-cog-outline","/settings/admin"]],cruds:[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete"]],settings:[{title:"label.titles.roleandpermissions",icon:"mdi-shield-lock-outline",menus:[{title:"label.titles.administrations",submenus:[{title:"label.titles.usersmanagement",to:"/settings/users",icon:"mdi-account-settings"},{title:"label.menu.rolesandprivileges",icon:"mdi-cog-outline",to:"/settings/roles"}]}]},{title:"label.titles.system",icon:"mdi-cog",menus:[{title:"label.titles.configurations",submenus:[{title:"label.titles.smsconfigurations",to:"/settings/sms",icon:"mdi-message-cog-outline"},{title:"label.titles.emailconfigurations",to:"#",icon:"mdi-mailbox-outline"}]}]}]}},head:function(){return{title:"Home Page"}},beforeMount:function(){},methods:{toggledrawer:function(){this.drawer=!this.drawer}}},o=(n(609),n(60)),l=n(73),c=n.n(l),f=n(509),d=n(493),v=n(208),m=n(163),y=n(209),O=n(210),j=n(134),h=n(32),w=n(510),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"breadcrumb "},[n("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/settings"}},[t._v("Setting & Configurations")])],1),t._v(" "),n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"3"}},[n("v-list",{attrs:{nav:"",dense:"",subheader:"",tile:""}},[t._l(t.settings,(function(e,r){return[n("v-list-group",{key:r,attrs:{value:!0,"prepend-icon":e.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v(t._s(t.$t(e.title)))])]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.menus,(function(menu,e){return[n("v-list-group",{key:menu.title,attrs:{value:!0,"no-action":"","sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t(menu.title)))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(menu.submenus,(function(sub,i){return[n("v-list-item",{key:sub.to,attrs:{to:sub.to}},[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{small:""},domProps:{innerHTML:t._s(sub.icon)}}),t._v("\n                          "+t._s(t.$t(sub.title))+"\n                        ")],1)],1)],1),t._v(" "),n("v-divider",{key:i,staticClass:"ml-12"})]}))],2)]}))],2)]}))],2)],1),t._v(" "),n("v-col",{staticClass:"ma-0 pa-2",attrs:{cols:"12",sm:"12",md:"9"}},[n("nuxt-child",{key:this.$router.currentRoute.name,staticClass:"ma-0 pa-0"})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:f.a,VContainer:d.a,VDivider:v.a,VIcon:m.a,VList:y.a,VListGroup:O.a,VListItem:j.a,VListItemContent:h.a,VListItemTitle:h.c,VRow:w.a})}}]);