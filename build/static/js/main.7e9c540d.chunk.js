(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{44:function(e,t,n){e.exports={TodoList__item:"Todolist_TodoList__item__2EtZr",TodoList__item_completed:"Todolist_TodoList__item_completed__1-0sW",TodoList__text:"Todolist_TodoList__text__1yDyd"}},45:function(e,t,n){e.exports={Contact__titleContainer:"ContactList_Contact__titleContainer__1_Cix",Contact__titleContainer_item:"ContactList_Contact__titleContainer_item__253Bt",ContactList__item:"ContactList_ContactList__item__3RV1Y"}},49:function(e,t,n){e.exports={section:"Section_section__1Fo3I",section__title:"Section_section__title__3wMMI"}},50:function(e,t,n){e.exports={section:"Section_section__3qrZX",section__title:"Section_section__title__1ndCG"}},51:function(e,t,n){e.exports={header:"Header_header__1R0ja"}},52:function(e,t,n){e.exports={main:"Main_main__1dkCw"}},53:function(e,t,n){e.exports={menu:"Menu_menu__1G6V9"}},56:function(e,t,n){e.exports={content:"Content_content__Hbvl-"}},57:function(e){e.exports=JSON.parse('[{"label":"red","color":"#F44336"},{"label":"green","color":"#4CAF50"},{"label":"blue","color":"#2196F3"},{"label":"grey","color":"#607D8B"},{"label":"pink","color":"#E91E63"},{"label":"indigo","color":"#3F51B5"}]')},58:function(e,t,n){e.exports={container:"Container_container__1odpE"}},59:function(e,t,n){e.exports={container:"Container_container__1JAJD"}},60:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56","gender":"female"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12","gender":"male"},{"id":"id-3","name":"Eden Clements","number":"645-17-79","gender":"male"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26","gender":"female"}]')},61:function(e,t,n){e.exports={footer:"Footer_footer__29inp"}},83:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(22),r=n.n(i),o=n(51),s=n.n(o),l=n(0),d=function(){return Object(l.jsx)("div",{className:s.a.header,children:"Header"})},j=n(52),u=n.n(j),h=function(e){var t=e.children;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:u.a.main,children:t})})},b=n(53),m=n.n(b),x=function(){return Object(l.jsxs)("div",{className:m.a.menu,children:[Object(l.jsx)("p",{children:"Menu"}),Object(l.jsx)("a",{href:"/products",children:"Products"}),Object(l.jsx)("a",{href:"/products/id-1",children:"Product Details"}),Object(l.jsx)("a",{href:"/cart",children:"Cart"}),Object(l.jsx)("a",{href:"/order",children:"Order"}),Object(l.jsx)("a",{href:"/profile",children:"Profile"}),Object(l.jsx)("a",{href:"/counter",children:"Counter"}),Object(l.jsx)("a",{href:"/dropdown",children:"Dropdown menu"}),Object(l.jsx)("a",{href:"/colorpicker",children:"Color picker"}),Object(l.jsx)("a",{href:"/todolist",children:"Todo List"}),Object(l.jsx)("a",{href:"/todoeditor",children:"Todo Editor"}),Object(l.jsx)("a",{href:"/form",children:"Form (get data)"}),Object(l.jsx)("a",{href:"/todosG",children:"Todos Gerry"}),Object(l.jsx)("a",{href:"/phonebook",children:"Phonebook"}),Object(l.jsx)("a",{href:"/contacts",children:"Contacts"})]})},O=n(47),p=n(41),f=n(7),v=n(8),g=n(10),_=n(9),C=n(62),y=n(114),k=n(113),S=n(55),N=n.n(S),F=n(112),I=n(40),w=Object(I.a)({itemAvailable:{backgroundColor:"green",outline:"3px solid #dceb10",display:"block",width:"20px",height:"20px"},itemNotAvailable:{backgroundColor:"red",outline:"3px solid #dceb10",display:"block",width:"20px",height:"20px"},item:{marginBottom:"5px",display:"flex","& p":{outline:function(e){return e>5?"2px solid grey":"2px solid red"}}},card:{padding:5}}),D=function(e){var t=e.item,n=w(7);return Object(l.jsxs)("li",{className:n.item,children:[Object(l.jsx)(F.a,{children:Object(l.jsx)(N.a,{})}),Object(l.jsx)(k.a,{className:n.card,children:Object(l.jsxs)(y.a,{children:[Object(l.jsxs)("p",{children:["Name: ",t.name]}),Object(l.jsxs)("p",{children:["Price: ",t.price]}),Object(l.jsxs)("p",{children:["Description: ",t.descr]}),Object(l.jsx)("span",{className:t.available?n.itemAvailable:n.itemNotAvailable})]})})]})},T=Object(I.a)({list:{listStyle:"none",margin:0,padding:[0,10,10,10]}}),L=function(e){var t=e.products,n=T();return Object(l.jsx)("ul",{className:n.list,children:t.map((function(e){return Object(l.jsx)(D,{item:e},"".concat(e.price,"_").concat(e.name))}))})},A=function(){var e=Object(c.useState)([{id:1,name:"Phone",price:5e3,descr:"It is a new one",available:!0}]),t=Object(C.a)(e,2),n=t[0];t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(L,{products:n})})},M=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{children:"Contacts"})})},P=n(56),B=n.n(P),E=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:t,children:"Increase by 1"}),Object(l.jsx)("button",{onClick:n,children:"Decrease by 1"})]})},G=function(e){Object(g.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(f.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={value:e.props.initialValue},e.handleIncrement=function(){e.setState((function(e){return{value:e.value+1}}))},e.handleDecrement=function(){e.setState((function(e){return{value:e.value-1}}))},e}return Object(v.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:this.state.value}),Object(l.jsx)(E,{onIncrement:this.handleIncrement,onDecrement:this.handleDecre})]})}}]),n}(a.a.Component);G.defaultProps={initialValue:0};var H=G,J=function(e){Object(g.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(f.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={visible:!1},e.toggle=function(){e.setState((function(e){return{visible:!e.visible}}))},e}return Object(v.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"button",onClick:this.toggle,children:this.state.visible?"Hide":"Show"}),this.state.visible&&Object(l.jsx)("div",{children:"Drop menu"})]})}}]),n}(c.Component),R=(n(83),n(39)),V=n.n(R),q=function(e){Object(g.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(f.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={activeOptionIdx:2},e.setActiveIndex=function(t){e.setState({activeOptionIdx:t})},e.makeOptionClassName=function(t){return V()("sets",{active:t===e.state.activeOptionIdx})},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this,t=this.props.options[this.state.activeOptionIdx].label;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Color picker"}),Object(l.jsxs)("p",{children:["Selected: ",t]}),Object(l.jsx)("div",{children:this.props.options.map((function(t,n){var c=t.label,a=t.color;return Object(l.jsx)("button",{className:e.makeOptionClassName(n),style:{backgroundColor:a},onClick:function(){return e.setActiveIndex(n)},children:a},c)}))})]})}}]),n}(c.Component),Y=n(57),Z=n(18),K=n(44),W=n.n(K),X=function(e){var t=e.todos,n=e.onDeleteTodo,c=e.onToggleCompleted,a=t.filter((function(e){return e.completed})),i=W.a.TodoList__item,r=W.a.TodoList__item_completed;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.text,o=e.completed;return Object(l.jsxs)("li",{className:V()(i,Object(Z.a)({},r,o)),children:[Object(l.jsx)("input",{type:"checkbox",checked:o,onChange:function(){return c(t)}}),Object(l.jsx)("p",{className:W.a.TodoList__text,children:a}),Object(l.jsx)("button",{onClick:function(){return n(t)},children:"Delete"})]},t)}))}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["Common tasks amount: ",t.length]}),Object(l.jsxs)("p",{children:["Amount of done tasks: ",a.length]})]})]})},z=function(e){Object(g.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(f.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={message:""},e.handleChange=function(t){e.setState({message:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.message),e.setState({message:""})},e}return Object(v.a)(n,[{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(l.jsx)("textarea",{value:this.state.message,onChange:this.handleChange}),Object(l.jsx)("button",{type:"submit",children:"Create"})]})})}}]),n}(c.Component),Q=function(e){var t=e.value,n=e.onChange;return Object(l.jsxs)("label",{children:["Filter by name:",Object(l.jsx)("input",{type:"text",value:t,onChange:n})]})},U=n(49),$=n.n(U),ee=n(58),te=n.n(ee),ne=function(e){var t=e.children;return Object(l.jsx)("div",{className:te.a.container,children:t})},ce=function(e){var t=e.children,n=e.title;e.className;return Object(l.jsx)("section",{className:$.a.section,children:Object(l.jsxs)(ne,{children:[n&&Object(l.jsx)("h2",{className:$.a.section__title,children:n}),t]})})},ae=n(16),ie=n.n(ae),re=function(e){Object(g.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(f.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={name:"",nick:"",experience:"junior",licence:!1},e.nameInputId=ie.a.generate(),e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(Z.a)({},c,a))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.handleLicenceChange=function(t){e.setState({licence:t.target.checked})},e.reset=function(){e.setState({name:"",nick:""})},e}return Object(v.a)(n,[{key:"render",value:function(){return Object(l.jsx)(ce,{title:"Form",children:Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(l.jsxs)("label",{htmlFor:this.nameInputId,children:["Name:",Object(l.jsx)("input",{id:this.nameInputId,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{children:["Nickname:",Object(l.jsx)("input",{type:"text",name:"nick",value:this.state.nick,onChange:this.handleChange})]}),Object(l.jsx)("p",{children:"Your level:"}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",name:"experience",value:"junior",onChange:this.handleChange,checked:"junior"===this.state.experience}),"Junior"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",name:"experience",value:"middle",onChange:this.handleChange,checked:"middle"===this.state.experience}),"Middle"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",name:"experience",value:"senior",onChange:this.handleChange,checked:"senior"===this.state.experience}),"Senior"]}),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",name:"licence",checked:this.state.licence,onChange:this.handleLicenceChange}),"Agree with the statement"]}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",disabled:!this.state.licence,children:"Send"})]})})}}]),n}(c.Component),oe=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Todos Gerry"})})},se=n(50),le=n.n(se),de=n(59),je=n.n(de),ue=function(e){var t=e.children;return Object(l.jsx)("div",{className:je.a.container,children:t})},he=function(e){var t=e.children,n=e.title;e.className;return Object(l.jsx)("section",{className:le.a.section,children:Object(l.jsxs)(ue,{children:[n&&Object(l.jsx)("h2",{className:le.a.section__title,children:n}),t]})})},be=(n(92),function(e){Object(g.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(f.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:""},e.nameInputId=ie.a.generate(),e.numberInputId=ie.a.generate(),e.handleChange=function(t){e.setState(Object(Z.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.getData(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:"",gender:""})},e}return Object(v.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(l.jsx)("h3",{children:"Phonebook"}),Object(l.jsxs)("label",{htmlFor:this.nameInputId,children:["Name:",Object(l.jsx)("input",{id:this.nameInputId,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{htmlFor:this.numberInputId,children:["Number:",Object(l.jsx)("input",{id:this.numberInputId,type:"tel",name:"number",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"Gender"}),Object(l.jsxs)("label",{htmlFor:"",children:["Male",Object(l.jsx)("input",{type:"radio",name:"gender",value:"male",onChange:this.handleChange,checked:"male"===this.state.gender})]}),Object(l.jsxs)("label",{htmlFor:"",children:["Female",Object(l.jsx)("input",{type:"radio",name:"gender",value:"female",onChange:this.handleChange,checked:"female"===this.state.gender})]}),Object(l.jsx)("button",{type:"submit",children:"Add"})]})}}]),n}(c.Component)),me=n(45),xe=n.n(me),Oe=function(e){var t=e.items,n=e.onDeleteContact;t.reduce((function(e,t){return"male"===t.gender?e+1:e}),0),t.reduce((function(e,t){return"female"===t.gender?e+1:e}),0);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:xe.a.Contact__titleContainer,children:Object(l.jsx)("h3",{className:xe.a.Contact__titleContainer_item,children:"ContactList"})}),t.map((function(e){return Object(l.jsxs)("li",{className:xe.a.ContactList__item,children:[Object(l.jsx)("p",{children:e.name}),Object(l.jsx)("p",{children:e.number}),Object(l.jsx)("button",{type:"button",onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))]})},pe=function(e){var t=e.valueState,n=e.filterByName;return Object(l.jsxs)("label",{children:["Filter by name:"," ",Object(l.jsx)("input",{type:"text",value:t,onChange:n})]})},fe=n(60),ve=function(e){Object(g.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(f.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={contacts:fe,filter:""},e.checkContactName=function(t){console.log("before"),console.log(e.state.contacts.find((function(e){return e.name===t?"ok":"not"}))),console.log("after")},e.getDataFromContactForm=function(t){var n=t.name,c=t.number;if(e.state.contacts.some((function(e){return e.name===n})))alert("".concat(n," is already in contacts."));else{var a={id:ie.a.generate(),name:n,number:c};e.setState((function(e){return{contacts:[a].concat(Object(p.a)(e.contacts))}}))}},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.target.value})},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this.state.filter.toLowerCase(),t=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(l.jsxs)(he,{children:[Object(l.jsx)(be,{getData:this.getDataFromContactForm}),Object(l.jsx)("br",{}),Object(l.jsx)(pe,{valueState:this.state.filter,filterByName:this.changeFilter}),Object(l.jsx)(Oe,{items:t,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component),ge=function(e){Object(g.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(f.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={todos:[{id:"id-1",text:"Learn React",completed:!1},{id:"id-2",text:"Find out about React Router",completed:!0},{id:"id-3",text:"Alive Redux",completed:!1}],filter:""},e.addTodo=function(t){var n={id:ie.a.generate(),text:t,completed:!1};e.setState((function(e){return{todos:[n].concat(Object(p.a)(e.todos))}}))},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.toggleCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(O.a)(Object(O.a)({},e),{},{completed:!e.completed}):e}))}}))},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.formSubmitHandler=function(e){console.log(e)},e}return Object(v.a)(n,[{key:"render",value:function(){var e=window.location.pathname,t=this.state,n=t.todos,c=t.filter,a=this.state.filter.toLowerCase(),i=n.filter((function(e){return e.text.toLowerCase().includes(a)}));return Object(l.jsxs)("div",{className:B.a.content,children:["/products"===e&&Object(l.jsx)(A,{}),"/contacts"===e&&Object(l.jsx)(M,{}),"/counter"===e&&Object(l.jsx)(H,{initialValue:10}),"/dropdown"===e&&Object(l.jsx)(J,{}),"/colorpicker"===e&&Object(l.jsx)(q,{options:Y}),"/todolist"===e&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(z,{onSubmit:this.addTodo}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(Q,{value:c,onChange:this.changeFilter}),Object(l.jsx)(X,{todos:i,onDeleteTodo:this.deleteTodo,onToggleCompleted:this.toggleCompleted})]}),"/todoeditor"===e&&Object(l.jsx)(z,{onSubmit:this.addTodo}),"/form"===e&&Object(l.jsx)(re,{onSubmit:this.formSubmitHandler}),"/todosG"===e&&Object(l.jsx)(oe,{}),"/phonebook"===e&&Object(l.jsx)(ve,{})]})}}]),n}(c.Component),_e=n(61),Ce=n.n(_e),ye=function(){return Object(l.jsx)("div",{className:Ce.a.footer,children:"Footer"})},ke=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(ge,{})]}),Object(l.jsx)(ye,{})]})};n(93);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(ke,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.7e9c540d.chunk.js.map