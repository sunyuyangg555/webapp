(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{706:function(t,e,r){"use strict";r.r(e);r(30),r(25);var n=r(5),o={components:{"card-info":r(573).a},data:function(){return{userdata:null}},methods:{viewusedata:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("patients/".concat(t.$route.params.id,"/")).then((function(e){t.userdata=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},reUpdateProfile:function(){this.viewusedata()}},created:function(){this.viewusedata()},computed:{username:function(){return null==this.userdata?"":this.userdata.name}}},c=r(60),l=r(73),d=r.n(l),f=r(508),v=r(545),h=r(565),m=r(210),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[null!=t.userdata?r("div",{staticClass:"breadcrumb"},[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("router-link",{attrs:{to:"/patients"}},[t._v("Patients")]),t._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/patients/"+this.$route.params.id}},[t._v(t._s(t.username))])],1):t._e(),t._v(" "),r("v-card",{staticClass:"mx-auto default"},[null!==t.userdata?r("div",[r("card-info",{attrs:{userdata:t.userdata},on:{"update-profile":t.reUpdateProfile}})],1):r("div",[r("div",{attrs:{height:"500",flat:""}},[r("v-layout",{attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[r("v-flex",{attrs:{row:"","align-center":""}},[r("v-progress-circular",{attrs:{indeterminate:"",size:50,color:"primary"}})],1)],1)],1)])])],1)}),[],!1,null,"ef257348",null);e.default=component.exports;d()(component,{VCard:f.a,VFlex:v.a,VLayout:h.a,VProgressCircular:m.a})}}]);