(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01fc0ad8"],{"0187":function(e,t,r){"use strict";r.d(t,"e",(function(){return a})),r.d(t,"i",(function(){return i})),r.d(t,"a",(function(){return u})),r.d(t,"l",(function(){return l})),r.d(t,"m",(function(){return c})),r.d(t,"d",(function(){return d})),r.d(t,"c",(function(){return f})),r.d(t,"j",(function(){return h})),r.d(t,"h",(function(){return p})),r.d(t,"b",(function(){return b})),r.d(t,"f",(function(){return m})),r.d(t,"g",(function(){return g})),r.d(t,"k",(function(){return y}));var n=r("b775"),o={page:"/common/page/portal.t_sys_role",roleListAll:"/role/listAll",add:"/role/add",update:"/role/update",delete:"/role/delete",assignUsers:"/role/assignUsers",getUsers:"/role/getUsers",listAll:"/user/listAll",assignMenus:"/role/assignMenus",role:"/role"},s="role_id,role_name,create_date,create_by,remark,status,security";function a(e){return Object(n["b"])({url:o.roleListAll,method:"post",params:e})}function i(e){e.fields=s;var t=[];if(e.role_name){var r={col:"role_name"};r.value="%"+e.role_name+"%",r.opt="like",t.push(r)}if(e.status){var a={col:"status"};a.value=e.status,a.opt="=",t.push(a)}return t.length>0&&(e.wheres=JSON.stringify([t])),e.orderBy="create_date desc,role_id desc",Object(n["b"])({url:o.page,method:"post",params:e})}function u(e){return Object(n["b"])({url:o.add,method:"post",params:e})}function l(e){var t={role_name:e.role_name,status:e.status,security:e.security,remark:e.remark};e.set=JSON.stringify(t);var r=[];if(e.role_id){var s={col:"role_id"};s.value=e.role_id,s.opt="=",r.push(s)}return r.length>0&&(e.wheres=JSON.stringify(r)),Object(n["b"])({url:o.update,method:"post",params:e})}function c(e){var t={status:e.status};e.set=JSON.stringify(t);var r=[];if(e.role_id){var s={col:"role_id"};s.value=e.role_id,s.opt="=",r.push(s)}return r.length>0&&(e.wheres=JSON.stringify(r)),Object(n["b"])({url:o.update,method:"post",params:e})}function d(e){var t={role_id:e.role_id};return Object(n["b"])({url:o.delete,method:"post",params:t})}function f(e){return Object(n["b"])({url:o.assignUsers,method:"post",data:e})}function h(e){return Object(n["b"])({url:o.getUsers,method:"get",params:e})}function p(e){return Object(n["b"])({url:o.listAll,method:"get",params:e})}function b(e){return Object(n["b"])({url:o.assignMenus,method:"post",params:e})}function m(e){e.fields="menu_id";var t=[];if(e.role_id){var r={col:"role_id"};r.value=e.role_id,r.opt="=",t.push(r)}return t.length>0&&(e.wheres=JSON.stringify([t])),Object(n["b"])({url:"common/query/portal.t_sys_role_menu",method:"post",params:e})}function g(e){e.fields="id";var t=[];if(e.menu_name){var r={col:"status",value:1,opt:"="};t.push(r)}return t.length>0&&(e.wheres=JSON.stringify([t])),Object(n["b"])({url:"common/query/portal.t_sys_sub_system",method:"post",params:e})}function y(e){return Object(n["b"])({url:"role/isAllowDelete",method:"post",params:e})}},"06c5":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("ac1f"),r("25f0"),r("3ca3");var n=r("6b75");function o(e,t){if(e){if("string"===typeof e)return Object(n["a"])(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(e,t):void 0}}},1216:function(e,t,r){"use strict";r.d(t,"g",(function(){return s})),r.d(t,"i",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"j",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return c})),r.d(t,"e",(function(){return d})),r.d(t,"b",(function(){return f})),r.d(t,"f",(function(){return h})),r.d(t,"h",(function(){return p}));var n=r("b775"),o={service:"/service",permissionNoPager:"/permission/no-pager",orgTree:"/org/getOrgTree",queryTree:"/org/queryOrgTree",add:"/org/add",update:"/org/update",delete:"/org/delete",subTree:"/org/getSubOrgTree"};function s(e){return Object(n["b"])({url:o.orgTree,method:"get",params:e})}function a(e){return Object(n["b"])({url:o.queryTree,method:"get",params:e})}function i(e){return Object(n["b"])({url:o.add,method:"post",params:e})}function u(e){return Object(n["b"])({url:o.update,method:"post",params:e})}function l(e){return Object(n["b"])({url:o.delete,method:"get",params:e})}function c(e){return Object(n["b"])({url:"org/assignRoles",method:"post",params:e})}function d(e){return Object(n["b"])({url:"/org/getRoles",method:"get",params:e})}function f(e){return Object(n["b"])({url:"role/assignOrgs",method:"post",params:e})}function h(e){e.fields="dept_id";var t=[];if(e.role_id){var r={col:"role_id"};r.value=e.role_id,r.opt="=",t.push(r)}return t.length>0&&(e.wheres=JSON.stringify([t])),Object(n["b"])({url:"common/query/portal.t_sys_role_dept",method:"post",params:e})}function p(e){return Object(n["b"])({url:"org/isAllowDelete",method:"post",params:e})}},"5a41":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("s-table",{ref:"table",attrs:{size:"default",rowKey:"key",columns:e.columns,data:e.loadData,alert:e.alert,rowSelection:e.rowSelection,showPagination:"auto"}})],1)],1)},o=[],s=r("5530"),a=r("b85c"),i=(r("d81d"),r("a9e3"),r("b64b"),r("d3b7"),r("25f0"),r("2af9")),u=r("0187"),l=r("1216"),c={name:"OrgRole",components:{STable:i["l"]},props:{orgRoleKey:{type:Number},checkedKeys:{type:Array,default:function(){return[]}}},data:function(){var e=this;return{columns:[{title:"角色ID",dataIndex:"role_id"},{title:"角色名称",dataIndex:"role_name"}],recordList:[],visible:!1,title:"",dept_id:this.orgRoleKey,confirmLoading:!1,selectedRowKeys:this.checkedKeys,selectedRows:[],alert:{show:!0,clear:function(){e.$refs.table.updateSelect([],[])}},rowSelection:{selectedRowKeys:this.selectedRowKeys,selectedRows:this.selectedRows,onChange:this.onSelectChange},optionAlertShow:!1}},created:function(){var e={pageNo:1,pageSize:10};this.loadData(e)},updated:function(){this.$refs.table.updateSelect(this.selectedRowKeys,this.selectedRows)},methods:{loadData:function(e){var t=this;return this.selectedRows=[],Object(u["i"])(Object.assign(e,{status:1})).then((function(e){var r,n=Object(a["a"])(e.result.data);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.key=o.role_id;var i=t.selectedRowKeys.indexOf(o.role_id)>-1;i&&t.selectedRows.push(o)}}catch(u){n.e(u)}finally{n.f()}return t.recordList=e.result.data.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{key:e.role_id})})),t.title="配置角色",t.visible=!0,e.result}))},add:function(e,t){this.dept_id=e.dept_id},getCheckedKeys:function(e){var t=this;return this.checkedKeys=[],Object(l["e"])(e).then((function(e){if(e.result){var r,n=JSON.parse(e.result),o=Object(a["a"])(n);try{for(o.s();!(r=o.n()).done;){var s=r.value;t.checkedKeys.push(s.role_id.toString())}}catch(i){o.e(i)}finally{o.f()}}t.selectedRowKeys=t.checkedKeys,t.rowSelection.selectedRowKeys=t.checkedKeys}))},onCheck:function(e){this.checkedKeys=e},getCheckboxProps:function(e){var t=this.selectedRowKeys.indexOf(e.role_id)>-1;return t&&this.selectedRows.push(e),{props:{defaultChecked:t}}},onSelectChange:function(e,t){this.selectedRows=t,this.selectedRowKeys=e,this.selectedRoleIds=[],this.selectedRoleIds.push(e)},handleSubmit:function(e){var t=this;e.preventDefault();var r={};return r.dept_id=this.dept_id,r.roles=this.selectedRowKeys,Object(l["c"])(Object.assign(r)).then((function(e){"ok"===e.state?(t.visible=!1,t.$emit("ok",r)):t.$error({title:"错误提示",content:e.msg})}))},handleCancel:function(){this.visible=!1}}},d=c,f=r("2877"),h=Object(f["a"])(d,n,o,!1,null,"97ae2ef2",null);t["default"]=h.exports},"6b75":function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},b85c:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");var n=r("06c5");function o(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=Object(n["a"])(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,s=function(){};return{s:s,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r["return"]||r["return"]()}finally{if(u)throw a}}}}}}]);