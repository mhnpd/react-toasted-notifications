(this["webpackJsonpreact-toasted-notifications"]=this["webpackJsonpreact-toasted-notifications"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var s=c(1),o=c(0),i=c.n(o),n=c(11),r=c.n(n),a=c(2),l=c(4),j=c(7),d={warning:{title:"Warning",message:"Choose more strong password",type:"warning"},info:{title:"Information",message:"You can always visit help section",type:"info"},error:{title:"Error",message:"Operation is not permitted",type:"error"},success:{title:"Success",message:"Operation is completed successfully.",type:"success"}};c(33);var b=function(){var e=Object(j.useNotification)(),t=Object(l.a)(e,2)[1],c=Object(o.useState)("success"),i=Object(l.a)(c,2),n=i[0],r=i[1],b=Object(o.useState)("topRight"),h=Object(l.a)(b,2),p=h[0],O=h[1];return Object(s.jsxs)("div",{className:"App container card p-5",children:[Object(s.jsx)("h3",{children:" Settings"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"row mt-3",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h5",{children:"Notification type"}),Object(s.jsxs)("select",{onChange:function(e){r(e.target.value)},className:"form-control",id:"exampleFormControlSelect1",defaultValue:"success",children:[Object(s.jsx)("option",{children:"info"}),Object(s.jsx)("option",{children:"warning"}),Object(s.jsx)("option",{children:"error"}),Object(s.jsx)("option",{children:"success"})]})]})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h5",{children:"Location on the screen"}),Object(s.jsxs)("select",{onChange:function(e){O(e.target.value)},className:"form-control",id:"exampleFormControlSelect1",defaultValue:"topRight",children:[Object(s.jsx)("option",{children:"topLeft"}),Object(s.jsx)("option",{children:"bottomLeft"}),Object(s.jsx)("option",{children:"topRight"}),Object(s.jsx)("option",{children:"bottomRight"})]})]})})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:function(e){e.preventDefault();var c=d[n];t.addNotification(Object(a.a)({},c))},className:"btn btn-primary ml-2",children:"Show Notification"})}),Object(s.jsx)(j.Notification,{position:p,timeout:"5000"})]})};c(34);r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.140abc9c.chunk.js.map