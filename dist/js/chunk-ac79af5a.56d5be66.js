(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac79af5a"],{"0187":function(t,e,r){"use strict";r.d(e,"e",(function(){return i})),r.d(e,"i",(function(){return o})),r.d(e,"a",(function(){return u})),r.d(e,"l",(function(){return c})),r.d(e,"m",(function(){return l})),r.d(e,"d",(function(){return d})),r.d(e,"c",(function(){return f})),r.d(e,"j",(function(){return h})),r.d(e,"h",(function(){return p})),r.d(e,"b",(function(){return b})),r.d(e,"f",(function(){return m})),r.d(e,"g",(function(){return g})),r.d(e,"k",(function(){return y}));var n=r("b775"),a={page:"/common/page/portal.t_sys_role",roleListAll:"/role/listAll",add:"/role/add",update:"/role/update",delete:"/role/delete",assignUsers:"/role/assignUsers",getUsers:"/role/getUsers",listAll:"/user/listAll",assignMenus:"/role/assignMenus",role:"/role"},s="role_id,role_name,create_date,create_by,remark,status,security";function i(t){return Object(n["b"])({url:a.roleListAll,method:"post",params:t})}function o(t){t.fields=s;var e=[];if(t.role_name){var r={col:"role_name"};r.value="%"+t.role_name+"%",r.opt="like",e.push(r)}if(t.status){var i={col:"status"};i.value=t.status,i.opt="=",e.push(i)}return e.length>0&&(t.wheres=JSON.stringify([e])),t.orderBy="create_date desc,role_id desc",Object(n["b"])({url:a.page,method:"post",params:t})}function u(t){return Object(n["b"])({url:a.add,method:"post",params:t})}function c(t){var e={role_name:t.role_name,status:t.status,security:t.security,remark:t.remark};t.set=JSON.stringify(e);var r=[];if(t.role_id){var s={col:"role_id"};s.value=t.role_id,s.opt="=",r.push(s)}return r.length>0&&(t.wheres=JSON.stringify(r)),Object(n["b"])({url:a.update,method:"post",params:t})}function l(t){var e={status:t.status};t.set=JSON.stringify(e);var r=[];if(t.role_id){var s={col:"role_id"};s.value=t.role_id,s.opt="=",r.push(s)}return r.length>0&&(t.wheres=JSON.stringify(r)),Object(n["b"])({url:a.update,method:"post",params:t})}function d(t){var e={role_id:t.role_id};return Object(n["b"])({url:a.delete,method:"post",params:e})}function f(t){return Object(n["b"])({url:a.assignUsers,method:"post",data:t})}function h(t){return Object(n["b"])({url:a.getUsers,method:"get",params:t})}function p(t){return Object(n["b"])({url:a.listAll,method:"get",params:t})}function b(t){return Object(n["b"])({url:a.assignMenus,method:"post",params:t})}function m(t){t.fields="menu_id";var e=[];if(t.role_id){var r={col:"role_id"};r.value=t.role_id,r.opt="=",e.push(r)}return e.length>0&&(t.wheres=JSON.stringify([e])),Object(n["b"])({url:"common/query/portal.t_sys_role_menu",method:"post",params:t})}function g(t){t.fields="id";var e=[];if(t.menu_name){var r={col:"status",value:1,opt:"="};e.push(r)}return e.length>0&&(t.wheres=JSON.stringify([e])),Object(n["b"])({url:"common/query/portal.t_sys_sub_system",method:"post",params:t})}function y(t){return Object(n["b"])({url:"role/isAllowDelete",method:"post",params:t})}},"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("ac1f"),r("25f0"),r("3ca3");var n=r("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},2909:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("6b75");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=r("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||s(t)||Object(i["a"])(t)||o()}},"4a12":function(t,e,r){"use strict";r("a952")},"53a2":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:700,bodyStyle:{maxHeight:"400px",minHeight:"360px",overflow:"auto"},visible:t.visible},on:{cancel:t.handleCancel}},[e("template",{slot:"footer"},[e("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("取消")]),e("a-button",{key:"submit",attrs:{type:"primary",loading:t.loading},on:{click:t.handleSubmit}},[t._v(" 提交 ")])],1),e("a-spin",{attrs:{spinning:t.Loading}},[t.isReset?e("a-transfer",{attrs:{"data-source":t.dataSource,"show-search":"","filter-option":t.filterOption,"target-keys":t.targetKeys,selectedKeys:t.selectedKeys,render:function(t){return t.title},listStyle:{height:"300px",flex:1}},on:{selectChange:t.handleSelectChange,change:t.handleChange,search:t.handleSearch}}):t._e()],1)],2)},a=[],s=r("2909"),i=r("5530"),o=(r("99af"),r("d81d"),r("d3b7"),r("07ac"),r("159b"),r("5880")),u=r("0187"),c={name:"AssignUsersTransfer",data:function(){return{Loading:!1,isReset:!1,visible:!1,title:"",loading:!1,selectedKeys:[],dataSource:[],targetKeys:[],roleId:null,roleUserId:[]}},computed:Object(i["a"])({},Object(o["mapGetters"])(["userInfo"])),created:function(){this.selfDeptId=this.userInfo.dept_id,this.account=this.userInfo.account,this.getTreeData(this.selfDeptId)},methods:{show:function(t){},add:function(t){var e=this;this.isReset=!1,this.roleId=t.role_id,this.targetKeys=[],this.selectedKeys=[],this.getUser(),this.title="分配用户",this.$nextTick((function(){e.isReset=!0})),this.visible=!0},handleCancel:function(){this.visible=!1},handleSubmit:function(t){var e=this;t.preventDefault(),this.loading=!0;var r={role_id:this.roleId,users:this.targetKeys};Object(u["c"])(r).then((function(t){e.loading=!1,"ok"===t.state&&(e.visible=!1)}))},filterOption:function(t,e){return e.title.indexOf(t)>-1},handleChange:function(t,e,r){this.targetKeys=t},handleSelectChange:function(t,e){this.selectedKeys=[].concat(Object(s["a"])(t),Object(s["a"])(e))},handleSearch:function(t,e){},onChange:function(t){this.targetKeys=t},getTreeData:function(){var t=this;Object(u["h"])().then((function(e){if("ok"===e.state){var r={};e.data.forEach((function(t){r[t.user_id]={key:t.user_id+"",title:"".concat(t.user_name," - ").concat(t.account," - ").concat(t.dept_name),description:t.account,deptName:t.dept_name,chosen:!1}})),t.dataSource=Object.values(r)}}))},getUser:function(){var t=this;this.Loading=!0,Object(u["j"])({roleId:this.roleId}).then((function(e){t.Loading=!1,"ok"===e.state&&(t.targetKeys=e.users.map((function(t){return t.user_id+""})))}))}}},l=c,d=(r("4a12"),r("2877")),f=Object(d["a"])(l,n,a,!1,null,"d7a669fc",null);e["default"]=f.exports},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},a952:function(t,e,r){}}]);