(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b026ef0e"],{"00d8":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var r=[],n=0;n<t.length;n+=3)for(var o=t[n]<<16|t[n+1]<<8|t[n+2],i=0;i<4;i++)8*n+6*i<=8*t.length?r.push(e.charAt(o>>>6*(3-i)&63)):r.push("=");return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,o=0;n<t.length;o=++n%4)0!=o&&r.push((e.indexOf(t.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|e.indexOf(t.charAt(n))>>>6-2*o);return r}};t.exports=r})()},"044b":function(t,e){function r(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&r(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||n(t)||!!t._isBuffer)}},"2b70":function(t,e,r){"use strict";r("86a1")},6821:function(t,e,r){(function(){var e=r("00d8"),n=r("9a634").utf8,o=r("044b"),i=r("9a634").bin,s=function(t,r){t.constructor==String?t=r&&"binary"===r.encoding?i.stringToBytes(t):n.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var a=e.bytesToWords(t),u=8*t.length,c=1732584193,l=-271733879,f=-1732584194,g=271733878,d=0;d<a.length;d++)a[d]=16711935&(a[d]<<8|a[d]>>>24)|4278255360&(a[d]<<24|a[d]>>>8);a[u>>>5]|=128<<u%32,a[14+(u+64>>>9<<4)]=u;var m=s._ff,h=s._gg,p=s._hh,b=s._ii;for(d=0;d<a.length;d+=16){var v=c,y=l,T=f,w=g;c=m(c,l,f,g,a[d+0],7,-680876936),g=m(g,c,l,f,a[d+1],12,-389564586),f=m(f,g,c,l,a[d+2],17,606105819),l=m(l,f,g,c,a[d+3],22,-1044525330),c=m(c,l,f,g,a[d+4],7,-176418897),g=m(g,c,l,f,a[d+5],12,1200080426),f=m(f,g,c,l,a[d+6],17,-1473231341),l=m(l,f,g,c,a[d+7],22,-45705983),c=m(c,l,f,g,a[d+8],7,1770035416),g=m(g,c,l,f,a[d+9],12,-1958414417),f=m(f,g,c,l,a[d+10],17,-42063),l=m(l,f,g,c,a[d+11],22,-1990404162),c=m(c,l,f,g,a[d+12],7,1804603682),g=m(g,c,l,f,a[d+13],12,-40341101),f=m(f,g,c,l,a[d+14],17,-1502002290),l=m(l,f,g,c,a[d+15],22,1236535329),c=h(c,l,f,g,a[d+1],5,-165796510),g=h(g,c,l,f,a[d+6],9,-1069501632),f=h(f,g,c,l,a[d+11],14,643717713),l=h(l,f,g,c,a[d+0],20,-373897302),c=h(c,l,f,g,a[d+5],5,-701558691),g=h(g,c,l,f,a[d+10],9,38016083),f=h(f,g,c,l,a[d+15],14,-660478335),l=h(l,f,g,c,a[d+4],20,-405537848),c=h(c,l,f,g,a[d+9],5,568446438),g=h(g,c,l,f,a[d+14],9,-1019803690),f=h(f,g,c,l,a[d+3],14,-187363961),l=h(l,f,g,c,a[d+8],20,1163531501),c=h(c,l,f,g,a[d+13],5,-1444681467),g=h(g,c,l,f,a[d+2],9,-51403784),f=h(f,g,c,l,a[d+7],14,1735328473),l=h(l,f,g,c,a[d+12],20,-1926607734),c=p(c,l,f,g,a[d+5],4,-378558),g=p(g,c,l,f,a[d+8],11,-2022574463),f=p(f,g,c,l,a[d+11],16,1839030562),l=p(l,f,g,c,a[d+14],23,-35309556),c=p(c,l,f,g,a[d+1],4,-1530992060),g=p(g,c,l,f,a[d+4],11,1272893353),f=p(f,g,c,l,a[d+7],16,-155497632),l=p(l,f,g,c,a[d+10],23,-1094730640),c=p(c,l,f,g,a[d+13],4,681279174),g=p(g,c,l,f,a[d+0],11,-358537222),f=p(f,g,c,l,a[d+3],16,-722521979),l=p(l,f,g,c,a[d+6],23,76029189),c=p(c,l,f,g,a[d+9],4,-640364487),g=p(g,c,l,f,a[d+12],11,-421815835),f=p(f,g,c,l,a[d+15],16,530742520),l=p(l,f,g,c,a[d+2],23,-995338651),c=b(c,l,f,g,a[d+0],6,-198630844),g=b(g,c,l,f,a[d+7],10,1126891415),f=b(f,g,c,l,a[d+14],15,-1416354905),l=b(l,f,g,c,a[d+5],21,-57434055),c=b(c,l,f,g,a[d+12],6,1700485571),g=b(g,c,l,f,a[d+3],10,-1894986606),f=b(f,g,c,l,a[d+10],15,-1051523),l=b(l,f,g,c,a[d+1],21,-2054922799),c=b(c,l,f,g,a[d+8],6,1873313359),g=b(g,c,l,f,a[d+15],10,-30611744),f=b(f,g,c,l,a[d+6],15,-1560198380),l=b(l,f,g,c,a[d+13],21,1309151649),c=b(c,l,f,g,a[d+4],6,-145523070),g=b(g,c,l,f,a[d+11],10,-1120210379),f=b(f,g,c,l,a[d+2],15,718787259),l=b(l,f,g,c,a[d+9],21,-343485551),c=c+v>>>0,l=l+y>>>0,f=f+T>>>0,g=g+w>>>0}return e.endian([c,l,f,g])};s._ff=function(t,e,r,n,o,i,s){var a=t+(e&r|~e&n)+(o>>>0)+s;return(a<<i|a>>>32-i)+e},s._gg=function(t,e,r,n,o,i,s){var a=t+(e&n|r&~n)+(o>>>0)+s;return(a<<i|a>>>32-i)+e},s._hh=function(t,e,r,n,o,i,s){var a=t+(e^r^n)+(o>>>0)+s;return(a<<i|a>>>32-i)+e},s._ii=function(t,e,r,n,o,i,s){var a=t+(r^(e|~n))+(o>>>0)+s;return(a<<i|a>>>32-i)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,r){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var n=e.wordsToBytes(s(t,r));return r&&r.asBytes?n:r&&r.asString?i.bytesToString(n):e.bytesToHex(n)}})()},"86a1":function(t,e,r){},"9a634":function(t,e){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r},ac2a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("a-form",{ref:"formLogin",staticClass:"user-layout-login",staticStyle:{"margin-top":"30px"},attrs:{id:"formLogin",form:t.form},on:{submit:t.handleSubmit}},[e("a-form-item",[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入帐户名"},{validator:t.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"[\n              'username',\n              {rules: [{ required: true, message: '请输入帐户名' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}\n            ]"}],attrs:{size:"large",type:"text",placeholder:"请输入账户"}},[e("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),e("a-form-item",[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}],validateTrigger:"blur"}],expression:"[\n              'password',\n              {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}\n            ]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"请输入密码"}},[e("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),e("a-form-item",{staticStyle:{margin:"24px 0 0 0"}},[e("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:t.state.loginBtn,disabled:t.state.loginBtn}},[t._v("确定")])],1)],1),t.isLoginError?e("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",showIcon:"",message:t.errorMsg}}):t._e()],1)},o=[],i=r("5530"),s=(r("d3b7"),r("ac1f"),r("6821")),a=r.n(s),u=r("5880"),c=r("ca00"),l=r("7ded"),f=r("8bbf"),g=r.n(f),d={data:function(){return{customActiveKey:"tab1",loginBtn:!1,loginType:0,isLoginError:!1,requiredTwoStepCaptcha:!1,stepCaptchaVisible:!1,form:this.$form.createForm(this),state:{time:60,loginBtn:!1,loginType:0,smsSendBtn:!1},errorMsg:""}},methods:Object(i["a"])(Object(i["a"])({},Object(u["mapActions"])(["Login","Logout"])),{},{handleUsernameOrEmail:function(t,e,r){var n=this.state,o=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;o.test(e)?n.loginType=0:n.loginType=1,r()},handleTabClick:function(t){this.customActiveKey=t},getCaptcha:function(t){var e=this;t.preventDefault();var r=this.form.validateFields,n=this.state;r(["mobile"],{force:!0},(function(t,r){if(!t){n.smsSendBtn=!0;var o=window.setInterval((function(){n.time--<=0&&(n.time=60,n.smsSendBtn=!1,window.clearInterval(o))}),1e3),i=e.$message.loading("验证码发送中..",0),s={};s.mobile=r.mobile,Object(l["b"])(s).then((function(t){t&&t.result&&1===t.result.code?(setTimeout(i,500),e.$notification["success"]({message:"提示",description:"验证码获取成功，请在10分钟内登录",duration:8})):(setTimeout(i,1),e.getSmsCaptchaFailed(t.result.msg))})).catch((function(t){return e.getSmsCaptchaFailed(t)}))}}))},getSmsCaptchaFailed:function(t){this.$message.error(t)},handleSubmit:function(t){var e=this;t.preventDefault();var r=this.form.validateFields,n=this.state,o=this.Login,s=this.customActiveKey;n.loginBtn=!0;var u="tab1"===s?["username","password"]:["mobile","captcha"];r(u,{force:!0},(function(t,r){if(t)setTimeout((function(){n.loginBtn=!1}),600);else{var s=Object(i["a"])({},r);delete s.username,s[n.loginType?"username":"email"]=r.username,s.password&&(s.password=a()(r.password)),o(s).then((function(t){return e.loginSuccess(t)})).catch((function(t){return e.requestFailed(t)})).finally((function(){n.loginBtn=!1}))}}))},loginSuccess:function(t){var e=this;g.a.ls.get("user").modifyPwd&&this.$message.warning("首次登录或密码时间使用超过90天后，请及时修改密码"),this.$router.push({path:"/"}),setTimeout((function(){e.$notification.success({message:"欢迎",description:"".concat(Object(c["a"])(),"，欢迎回来")})}),1e3),this.isLoginError=!1},requestFailed:function(t){this.errorMsg=t,this.isLoginError=!0,this.$notification["error"]({message:"错误",description:((t.response||{}).data||{}).message||t,duration:4})}}),mounted:function(){}},m=d,h=(r("2b70"),r("2877")),p=Object(h["a"])(m,n,o,!1,null,"762b151b",null);e["default"]=p.exports}}]);