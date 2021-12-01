(function(t){function e(e){for(var r,c,a=e[0],s=e[1],o=e[2],l=0,f=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(d,c)&&d[c]&&f.push(d[c][0]),d[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);i&&i(e);while(f.length)f.shift()();return u.push.apply(u,o||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==d[s]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},d={app:0},u=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var o=0;o<a.length;o++)e(a[o]);var i=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),d={id:"app"};function u(t,e,n,u,c,a){var s=Object(r["m"])("new-student-form"),o=Object(r["m"])("student-table"),i=Object(r["m"])("student-message");return Object(r["i"])(),Object(r["e"])("div",d,[Object(r["g"])(s,{onStudentAdded:a.newStudentAdded},null,8,["onStudentAdded"]),Object(r["g"])(o,{students:c.students,onStudentArrivedOrLeft:a.studentArrivedOrLeft,onDeleteStudent:a.studentDeleted},null,8,["students","onStudentArrivedOrLeft","onDeleteStudent"]),Object(r["g"])(i,{student:c.mostRecentStudent},null,8,["student"])])}n("a15b");var c={key:0,class:"alert alert-danger"},a={class:"card add-student m-2 p-2"},s=Object(r["f"])("h4",{class:"card-title"},"Add new student",-1),o={class:"form-group"},i=Object(r["f"])("label",{for:"name"},"Name",-1),l={class:"form-group"},f=Object(r["f"])("label",{for:"starID"},"Star ID",-1);function b(t,e,n,d,u,b){return Object(r["i"])(),Object(r["e"])("div",null,[u.errors.length>0?(Object(r["i"])(),Object(r["e"])("div",c,[Object(r["f"])("ul",null,[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(u.errors,(function(t){return Object(r["i"])(),Object(r["e"])("li",null,Object(r["n"])(t),1)})),256))])])):Object(r["d"])("",!0),Object(r["f"])("div",a,[s,Object(r["f"])("div",o,[i,Object(r["r"])(Object(r["f"])("input",{id:"name",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return u.newStudentName=t})},null,512),[[r["p"],u.newStudentName,void 0,{trim:!0}]])]),Object(r["f"])("div",l,[f,Object(r["r"])(Object(r["f"])("input",{id:"starID",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return u.newStarID=t})},null,512),[[r["p"],u.newStarID,void 0,{trim:!0}]])]),Object(r["f"])("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=function(){return b.addStudent&&b.addStudent.apply(b,arguments)})},"Add")])])}var O={name:"NewStudentForm",emits:["student-added"],data:function(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName||this.errors.push("Student name required"),this.newStarID||this.errors.push("StarID required"),0==this.errors.length){var t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}},p=n("6b0d"),j=n.n(p);const h=j()(O,[["render",b]]);var m=h,S=(n("b0c0"),{key:0}),v={key:0,class:"alert alert-info"},A={key:1,class:"alert alert-success"};function g(t,e,n,d,u,c){return Object(r["i"])(),Object(r["e"])("div",null,[n.student.name?(Object(r["i"])(),Object(r["e"])("div",S,[n.student.present?(Object(r["i"])(),Object(r["e"])("div",v," Welcome, "+Object(r["n"])(n.student.name),1)):(Object(r["i"])(),Object(r["e"])("div",A," Goodbye, "+Object(r["n"])(n.student.name)+". See you later. ",1))])):Object(r["d"])("",!0)])}var w={name:"StudentMessage",props:{student:Object}};const y=j()(w,[["render",g]]);var D=y,k={class:"card student-list m-2 p-2"},I=Object(r["f"])("h4",{class:"card-title"},"Student List",-1),L={class:"edit-table-toggle form-check"},N=Object(r["f"])("label",{for:"edit-table",class:"form-check-label"},"Edit table?",-1),B={id:"student-table"},U={class:"table"},x=Object(r["f"])("th",null,"Name",-1),M=Object(r["f"])("th",null,"StarID",-1),V=Object(r["f"])("th",null,"Present?",-1);function K(t,e,n,d,u,c){var a=Object(r["m"])("student-row");return Object(r["i"])(),Object(r["e"])("div",null,[Object(r["f"])("div",k,[I,Object(r["f"])("div",L,[Object(r["r"])(Object(r["f"])("input",{id:"edit-table",type:"checkbox",class:"form-check-input","onUpdate:modelValue":e[0]||(e[0]=function(t){return u.editTable=t})},null,512),[[r["o"],u.editTable]]),N]),Object(r["f"])("div",B,[Object(r["f"])("table",U,[Object(r["f"])("tr",null,[x,M,V,Object(r["r"])(Object(r["f"])("th",null,"Delete",512),[[r["q"],u.editTable]])]),(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(n.students,(function(t){return Object(r["i"])(),Object(r["c"])(a,{student:t,key:t.starID,edit:u.editTable,onStudentArrivedOrLeft:c.arrivedOrLeft,onDeleteStudent:c.deleteStudent},null,8,["student","edit","onStudentArrivedOrLeft","onDeleteStudent"])})),128))])])])])}var R=n("ed3a"),T=n.n(R),C=["checked"];function G(t,e,n,d,u,c){return Object(r["i"])(),Object(r["e"])("tr",{class:Object(r["h"])({present:n.student.present,absent:!n.student.present})},[Object(r["f"])("td",null,Object(r["n"])(n.student.name),1),Object(r["f"])("td",null,Object(r["n"])(n.student.starID),1),Object(r["f"])("td",null,[Object(r["f"])("input",{type:"checkbox",checked:n.student.present,onChange:e[0]||(e[0]=function(t){return c.arrivedOrLeft(n.student,t.target.checked)})},null,40,C)]),Object(r["r"])(Object(r["f"])("td",null,[Object(r["f"])("img",{onClick:e[1]||(e[1]=function(){return c.deleteStudent&&c.deleteStudent.apply(c,arguments)}),src:T.a})],512),[[r["q"],n.edit]])],2)}var Y={name:"StudentRow",emits:["student-arrived-or-left","delete-student"],props:{student:Object,edit:Boolean},methods:{arrivedOrLeft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(){confirm("Delete ".concat(this.student.name,"?"))&&this.$emit("delete-student",this.student)}}};n("6c72");const F=j()(Y,[["render",G],["__scopeId","data-v-7fc042d3"]]);var J=F,P={name:"StudentTable",components:{StudentRow:J},emits:["student-arrived-or-left","delete-student"],props:{students:Array},data:function(){return{editTable:!1}},methods:{arrivedOrLeft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(t){this.$emit("delete-student",t)}}};const q=j()(P,[["render",K]]);var E=q,z={name:"App",components:{NewStudentForm:m,StudentMessage:D,StudentTable:E},data:function(){return{students:[],mostRecentStudent:{}}},mounted:function(){this.updateStudents()},methods:{updateStudents:function(){var t=this;this.$student_api.getAllStudents().then((function(e){return t.students=e})).catch((function(){return alert("Unable to fetch student list")}))},newStudentAdded:function(t){var e=this;this.$student_api.addStudent(t).then((function(){e.updateStudents()})).catch((function(t){var e=t.response.data.join(",");alert("Error adding student\n"+e)}))},studentArrivedOrLeft:function(t,e){var n=this;t.present=e,this.$student_api.updateStudent(t).then((function(){n.mostRecentStudent=t,n.updateStudents()})).catch((function(){return alert("Unable to update student")}))},studentDeleted:function(t){var e=this;this.$student_api.deleteStudent(t.id).then((function(){e.updateStudents(),e.mostRecentStudent={}})).catch((function(){return alert("Unable to delete student")}))}}};n("c990");const H=j()(z,[["render",u]]);var X=H,Q=n("bc3a"),_=n.n(Q),W="/api/students",$={getAllStudents:function(){return _.a.get(W).then((function(t){return t.data}))},addStudent:function(t){return _.a.post(W,t).then((function(t){return t.data}))},updateStudent:function(t){return _.a.patch("".concat(W,"/").concat(t.id),t).then((function(t){return t.data}))},deleteStudent:function(t){return _.a.delete("".concat(W,"/").concat(t)).then((function(t){return t.data}))}},Z=Object(r["b"])(X);Z.config.globalProperties.$student_api=$,Z.mount("#app")},"6c72":function(t,e,n){"use strict";n("70be")},"70be":function(t,e,n){},"8d02":function(t,e,n){},c990:function(t,e,n){"use strict";n("8d02")},ed3a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALBSURBVEiJrZVLaFRJFIa/U/duxk60W9zFkExEHPfamkUWdkSIio4bN7pREfGV6EJ8gGIQfCAIDoOozMAsZpbDjJqAommDM746uBYFWxujcRNjbBMEq+q4SGw6Sd/bGvOvilOnvv+cqrq3hBiNrlpa76ysF2ENKo2I1gOg8hLhuUJ34Lgyq/dhfxRDKoIzzXVO7DFBtgJhXBGAF+Fv48MDP2TvFaoajKxYvk6N/xOorQKerKKobkpk+66VB82EjJXpvWr8P9OAA9SqyL/FTHpPebDUwUhmSZuKuQYE04CXy4s3GxK3H1wtGYxmmuu8uMdMr/JKei+h+ylx49GAGbN0nTMIB5jtrTkOIKOrltZ7J8+psDUm3YxpyeB+v4C+G5owJ8kUwbZd+P+y+Nz9SibWaNAYOi8/S8S+m5YMZmUbsnAR9lBHyUSSKcLT55GGJlCNMgid2PVGVNqi+nS/XUBf5JGGJsKzvyJz5yFzUoSnxuDaX8D9cSlqOYKslg+t6afAwsiksmq1kB+LjY/Lu4rQExlpTRcVauKyZM64SWMTANpfwB5sR98Oxi1D4INR0NisuOVVpOANMBCLSaYIz4xVr4U8Wsgj8xsIT55DkqlqHq8MyLNI+KQDtUf2Yw92TDn4GOWNQnfUbLB9d6lye2AP+nYQHR7CHu4odRJs2RHdvdIVHG2YP6CGdib9+ACwn8Ba3NkTE2/Lx4/o/71IMoW/k0VfV3wOrCHYJQDFzLLLIro9rtdvlQoXa2/ldhoAE4THgeIM8ofFaieMb0vi5t3XoBsBNwNwL7C5prfvTckAoKan77oq+wD/PXBF2hM9ua4vgalPZmt6rcJfwOxvhA+LsClxKzfhVk65OYmeXJd3bgHIL4D9CrBV9LKEbvFkOFT53kczzXXO2HWCrEX5UaAeQOElkFfR7sCHV2dl77+KYnwGjDIa1okuKMYAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.614e0a63.js.map