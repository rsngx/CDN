(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21dbb9"],{d30d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"用户名称"}},[t("a-input",{attrs:{placeholder:""},model:{value:e.queryItem.user_name,callback:function(t){e.$set(e.queryItem,"user_name",t)},expression:"queryItem.user_name"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"模块"}},[t("a-input",{attrs:{placeholder:""},model:{value:e.queryItem.module,callback:function(t){e.$set(e.queryItem,"module",t)},expression:"queryItem.module"}})],1)],1),t("a-col",{attrs:{md:e.advanced?24:8,sm:24}},[t("span",{staticClass:"table-page-search-submitButtons",style:e.advanced&&{float:"right",overflow:"hidden"}||{}},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.table.refresh(!0)}}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return e.queryItem={}}}},[e._v("重置")])],1)])],1)],1)],1),t("s-table",{ref:"table",attrs:{size:"default",rowKey:function(e){return e.id},columns:e.columns,data:e.loadData}})],1)},n=[],s=a("2af9"),l=a("b775");function u(e){return Object(l["b"])({url:"/common/page/portal.t_sys_logs",method:"post",params:e})}var o={name:"LogList",components:{STable:s["l"]},data:function(){var e=this;return{mdl:{},advanced:!1,queryParam:{fields:"*"},queryItem:{},columns:[{title:"时间",dataIndex:"create_date",key:"create_date"},{title:"用户账户",dataIndex:"account",key:"account"},{title:"用户名称",dataIndex:"user_name",key:"user_name"},{title:"IP",dataIndex:"sys_ip_port",key:"sys_ip_port"},{title:"模块",dataIndex:"module",key:"module"},{title:"参数",dataIndex:"parameters",key:"parameters"},{title:"备注",dataIndex:"ext1",key:"ext1"}],loadData:function(t){var a=e.queryItem.user_name,r=e.queryItem.module,n=[];a&&n.push({col:"user_name",value:"%"+a+"%",opt:" like"}),r&&n.push({col:"module",value:"%"+r+"%",opt:" like"});var s=Object.assign(t,e.queryParam,{orderBy:"create_date desc"});return u(n.length>0?Object.assign(s,{wheres:JSON.stringify(n)}):s).then((function(e){return e.result}))}}}},d=o,c=a("2877"),i=Object(c["a"])(d,r,n,!1,null,null,null);t["default"]=i.exports}}]);