(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{511:function(t,e,r){"use strict";r(11),r(8),r(177),r(9),r(178),r(22),r(17),r(18),r(12),r(10);var n=r(1),o=(r(512),r(122)),c=r(244),d=r(67),l=r(6);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(c.a,d.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},d.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},512:function(t,e,r){var content=r(513);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("e23b7040",content,!0,{sourceMap:!1})},513:function(t,e,r){(e=r(15)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},521:function(t,e,r){"use strict";var n={props:{services:{type:Array,default:null},title:{type:String,default:"Services"}},data:function(){return{search:null,headers:[{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Staff Name",value:"staffName"},{text:"Is Active?",value:"isActive"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}}},o=r(60),c=r(73),d=r.n(c),l=r(511),v=r(680),h=r(168),f=r(210),m=r(503),_=r(99),x=r(59),y=r(508),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto default "},[null==t.services.length?r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):r("div",{attrs:{md12:""}},[r("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.services,search:t.search,width:"100%"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("h2",[r("strong",[t._v(t._s(t.title))])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(e){return[e.item.isActive?r("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",o,!1),n),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),r("span",[t._v("Active")])]):r("div")]}},{key:"item.patientName",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(r.patientName)+" ( "+t._s(r.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(e){var n=e.item;return[null==n.staffName?r("p",[t._v("Unassigned")]):r("p",[t._v(t._s(n.staffName)+" ( "+t._s(n.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VCard:l.a,VDataTable:v.a,VIcon:h.a,VProgressCircular:f.a,VSpacer:m.a,VTextField:_.a,VToolbar:x.a,VTooltip:y.a})},534:function(t,e,r){var content=r(544);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("ab765cb8",content,!0,{sourceMap:!1})},543:function(t,e,r){"use strict";r(534)},544:function(t,e,r){(e=r(15)(!1)).push([t.i,".v-text-field__slot[data-v-b2f20140]{width:20px}",""]),t.exports=e},549:function(t,e,r){"use strict";r(105),r(30);var n={props:["datalist","pagetitle"],data:function(){return{dialog:!1,search:"",sortDesc:!1,headers:[{text:"Name",value:"name"},{text:"Gender",value:"gender",sortable:!1},{text:"Guardian",value:"guardianName"},{text:"Status",value:"isAdmitted",sortable:!0},{text:"Address",value:"address"},{text:"Phone",value:"phone",sortable:!0},{text:"Is Active?",value:"isActive"},{text:"Created On",value:"createdDate"},{text:"Updated On",value:"lastModifiedDate"},{text:"Created By",value:"createdBy"},{text:"Updated By",value:"lastModifiedBy"}],desserts:[],editedIndex:-1,editedItemId:"",editedItem:{name:"",phone:"",address:"",emailAddress:"",guardianName:"",height:"",weight:"",bloodPressure:"",age:"",bloodGroup:"",gender:0,isAdmitted:!1,symptoms:"",note:"",marriageStatus:""},defaultItem:{name:"",phone:"",address:"",emailAddress:"",guardianName:"",height:"",weight:"",bloodPressure:"",age:"",bloodGroup:"",gender:0,isAdmitted:!1,symptoms:"",note:"",marriageStatus:""},genderoptions:["Male","Female","Others"],body:{options:{page:1,itemsPerPage:5,sortBy:["name"]}}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},isAppointmentRoute:{get:function(){return"patients"===this.$router.currentRoute.name}}},watch:{dialog:function(t){t||this.close()}},created:function(){},methods:{editItem:function(t){this.editedIndex=this.datalist.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,this.editedItemId=t.id},handleClick:function(t){this.$router.push("/patients/"+t.id)},initialize:function(){},updatePagination:function(t){console.log(t)}},beforeMount:function(){this.$store.dispatch("retrievepatients")}},o=(r(543),r(60)),c=r(73),d=r.n(c),l=r(136),v=r(511),h=r(680),f=r(168),m=r(503),_=r(99),x=r(59),y=r(508),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-data-table",{staticClass:"default",attrs:{dense:"",headers:t.headers,items:t.datalist,search:t.search,options:t.body.options,"sort-by":"isActive","sort-desc":t.sortDesc,"mobile-breakpoint":"100"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"default",attrs:{flat:""}},[r("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("v-spacer"),t._v(" "),t.isAppointmentRoute?r("div",[t.isMdAndUp?r("v-btn",{staticClass:"primary",attrs:{medium:"",to:"/patients/add"}},[r("v-icon",[t._v("mdi-plus")]),t._v(t._s(t.$t("label.button.btnnewpatient")))],1):r("v-btn",{staticClass:"primary",attrs:{small:"",fab:"",to:"/patients/add"}},[r("v-icon",[t._v("mdi-plus")])],1)],1):t._e()],1)]},proxy:!0},{key:"item.gender",fn:function(e){var n=e.item;return["F"==n.gender?r("v-tooltip",{attrs:{top:"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-icon",t._g(t._b({attrs:{small:"",color:"green darken-2"}},"v-icon",o,!1),n),[t._v("mdi-gender-female\n          ")])]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.$t("label.tooltip.genderfemale")))])]):t._e(),t._v(" "),"M"==n.gender?r("v-tooltip",{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-icon",t._g(t._b({attrs:{small:"",color:"primary darken-2"}},"v-icon",o,!1),n),[t._v("mdi-gender-male\n          ")])]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.$t("label.tooltip.gendermale")))])]):t._e(),t._v(" "),"O"==n.gender?r("v-tooltip",{attrs:{top:"",color:"cyan"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-icon",t._g(t._b({attrs:{small:"",color:"cyan darken-2"}},"v-icon",o,!1),n),[t._v("mdi-gender-male-female\n          ")])]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.$t("label.tooltip.genderother")))])]):t._e()]}},{key:"item.isAdmitted",fn:function(e){return[e.item.isAdmitted?r("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-icon",t._g(t._b({attrs:{"x-small":""}},"v-icon",o,!1),n),[t._v("mdi-bed-outline")])]}}],null,!0)},[t._v(" "),r("span",[t._v("Admitted")])]):r("div")]}},{key:"item.isActive",fn:function(e){return[e.item.isActive?r("v-icon",{staticClass:" font-weight-black",attrs:{color:"primary"}},[t._v("\n        mdi-check\n      ")]):t._e()]}},{key:"no-data",fn:function(){return[r("h3",[t._v("No Data available ...")])]},proxy:!0}],null,!0)})],1)}),[],!1,null,"b2f20140",null);e.a=component.exports;d()(component,{VBtn:l.a,VCard:v.a,VDataTable:h.a,VIcon:f.a,VSpacer:m.a,VTextField:_.a,VToolbar:x.a,VTooltip:y.a})},590:function(t,e,r){var content=r(591);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5276b867",content,!0,{sourceMap:!1})},591:function(t,e,r){(e=r(15)(!1)).push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;margin:0 -2px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=e},681:function(t,e,r){"use strict";r.r(e);r(11),r(8),r(9),r(17),r(18),r(12),r(10);var n=r(1),o=r(549),c=r(521),d=r(76);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={components:{"patient-list":o.a,"servicescard-component":c.a},data:function(){return{dialog:!1,search:"",un_assigned_pagetitle:"Un-Assigned Patients",assigned_pagetitle:"Assigned Patients",all_pagetitle:"All Patients"}},created:function(){console.log(this.isAppointmentRoute)},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},isAppointmentRoute:{get:function(){return"appointments"===this.$router.path}}},Object(d.b)({datalist:"patients",assigned:"assigned",unassigned:"unassigned"})),beforeMount:function(){this.$store.dispatch("fetch_all_services")}},h=r(60),f=r(73),m=r.n(f),_=(r(22),r(138)),x=(r(590),r(168)),y=r(19),O=r(14),w=r(35),k=r(298),j=r(91),P=r(6),A=r(2);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var S=Object(P.a)(y.a,Object(j.b)(["left","bottom"]),O.a,w.a,k.a).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(A.g)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(A.s)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(x.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],r=[Object(A.s)(this)],n=this.$attrs,o=(n["aria-atomic"],n["aria-label"],n["aria-live"],n.role,n.title,Object(_.a)(n,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?r.unshift(e):r.push(e),t("span",{staticClass:"v-badge",attrs:o,class:this.classes},r)}}),B=r(674),$=r(724),I=r(717),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb "},[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/oppointemnts"}},[t._v("Appointments")])],1),t._v(" "),r("v-tabs",{attrs:{color:"deep-purple accent-4 pa-3",right:""}},[r("v-tab",[r("v-badge",{attrs:{color:"green",content:t.unassigned.length,value:t.unassigned.length}},[t._v("\n        Un-Assigned\n      ")])],1),t._v(" "),r("v-tab",{attrs:{ripple:""}},[r("v-badge",{staticClass:"lowercase",attrs:{color:"green",content:t.assigned.length,value:t.assigned.length}},[t._v("Assigned")])],1),t._v(" "),r("v-tab-item",[r("servicescard-component",{attrs:{services:t.unassigned,title:"Un-assigned services"}})],1),t._v(" "),r("v-tab-item",[r("servicescard-component",{attrs:{services:t.assigned,title:"Assigned services"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBadge:S,VTab:B.a,VTabItem:$.a,VTabs:I.a})}}]);