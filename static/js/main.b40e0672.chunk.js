(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=(a(16),a(6)),i=a(2),m=a(1),u=function(e){var t=e.color,a=e.text,n=e.onClick;return r.a.createElement("button",{onClick:n,style:{backgroundColor:t},className:"btn"},a)};u.defaultProps={color:"#005"};var d=u,s=function(e){e.title;var t=e.onAdd,a=e.showAdd;return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"RBSL To-do-list Tracker"),r.a.createElement(d,{text:a?"Close":"Add Tasks",color:a?"red":"green",onClick:t}))};s.defaultProps={title:"Hello Elcid To-Do-List Tracker"};var f=s,b=a(5),p=function(e){var t=e.task,a=e.onDelete,n=e.onToggle;return r.a.createElement("div",{className:"task ".concat(t.reminder?"activeReminder":""),onDoubleClick:function(){return n(t.id)}},r.a.createElement("h3",{className:"animate__animated animate__rubberBand"},r.a.createElement(b.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return a(t.id)}}),t.text),r.a.createElement("p",null,t.day))},k=function(e){var t=e.tasks,a=e.onDelete,n=e.onToggle;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(p,{key:e.id,task:e,onDelete:a,onToggle:n})}))},v=function(e){var t=e.onAdd,a=Object(n.useState)(""),c=Object(m.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(""),u=Object(m.a)(i,2),d=u[0],s=u[1],f=Object(n.useState)(!1),b=Object(m.a)(f,2),p=b[0],k=b[1];return r.a.createElement("form",{className:"form form--add",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:d,reminder:p}),l(""),s(""),k(!1)):alert("Please add task!")}},r.a.createElement("div",{className:"form__controller"},r.a.createElement("label",{className:"form__label"},"Task"),r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Add New Task",value:o,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form__controller"},r.a.createElement("label",{className:"form--label"},"Day & Time"),r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Add Day & Time",value:d,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"form__controller--check"},r.a.createElement("label",{className:"form__label--check"},"Save Reminder"),r.a.createElement("input",{className:"form__input--check",type:"checkbox",checked:p,value:p,onChange:function(e){return k(e.currentTarget.checked)}})),r.a.createElement("input",{className:"btn btn--block",type:"submit",value:"Save Task"}))};var E=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([{id:1,text:"Meeting at work appointment",day:"Nov 22 at 8:00am",reminder:!0},{id:2,text:"Appointment with dentist",day:"Nov 22 at 11:00am",reminder:!0},{id:3,text:"Buy grocery items",day:"Nov 22 at 8:00am",reminder:!1}]),u=Object(m.a)(o,2),d=u[0],s=u[1];return r.a.createElement("div",{className:"container animate__heartBeat"},r.a.createElement(f,{onAdd:function(){return c(!a)},showAdd:a}),a&&r.a.createElement(v,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,a=Object(i.a)({id:t},e);s([].concat(Object(l.a)(d),[a]))}}),d.length>0?r.a.createElement(k,{tasks:d,onDelete:function(e){s(d.filter(function(t){return t.id!==e}))},onToggle:function(e){s(d.map(function(t){return t.id===e?Object(i.a)({},t,{reminder:!t.reminder}):t}))}}):"No tasks to accomplish")},g=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,20)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null))),g()},7:function(e,t,a){e.exports=a(19)}},[[7,3,2]]]);
//# sourceMappingURL=main.b40e0672.chunk.js.map