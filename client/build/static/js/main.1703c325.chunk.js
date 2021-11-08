(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{67:function(e,t,a){e.exports=a(97)},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),s=a.n(c),l=a(25),i=a(64),o=a(6),u=a.n(o),p=a(10),m=a(15),h=a(16),f=a(22),d=a(21),v=a(27),E=a(17),b=a(104),y=a(105),g=a(65),w=a(34),k=a(23),x=function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),c=a[0],s=a[1],l=function(){return s(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{disabled:e.success,variant:e.btn,size:"lg",block:!0,onClick:function(){return s(!0)}},e.title,e.icon),r.a.createElement(w.a,{show:c,onHide:l},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,null,e.title)),r.a.createElement(w.a.Body,null,e.children),r.a.createElement(w.a.Footer,null,r.a.createElement(k.a,{variant:"secondary",onClick:l},"Close"))))},C=a(31),j=a(11),O=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state=n.processPath(n.props.path),n}return Object(h.a)(a,[{key:"processPath",value:function(e){return{normalPath:e?e.replace(/--/g,"/"):"",apiPath:e?e.replace(/\//g,"--"):""}}},{key:"onChange",value:function(e){this.setState(this.processPath(e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement(j.a,null,r.a.createElement(j.a.Group,{controlId:"formBasicEmail"},r.a.createElement(j.a.Label,null,"Path"),r.a.createElement(j.a.Control,{type:"text",className:"mb-2",value:this.state.normalPath,onChange:function(t){return e.onChange(t)}}),r.a.createElement(C.b,{to:"/content/".concat(this.state.apiPath)},r.a.createElement(k.a,{size:"lg",variant:"primary",type:"submit"},"Jump"))))}}]),a}(n.Component),F=a(59),S=a(29),D=a(63),A=function(e){return r.a.createElement(D.a,{variant:e.alert.success?"success":"danger",onClose:e.onClose,dismissible:!0},e.alert.message)},N=a(58),P=a.n(N),T=new(function(){function e(){Object(m.a)(this,e),this.api=P.a.create({baseURL:"http://localhost:5000"})}return Object(h.a)(e,[{key:"apiCall",value:function(){var e=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return e.abrupt("return",e.sent.data);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return","error conexi\xf3n");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getContent",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiCall((function(){return a.api.get("/content/".concat(t))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"uploadFiles",value:function(){var e=Object(p.a)(u.a.mark((function e(t,a){var n=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiCall((function(){return n.api.post("/upload/".concat(t),a)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"mkDir",value:function(){var e=Object(p.a)(u.a.mark((function e(t,a){var n=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiCall((function(){return n.api.post("/dir/".concat(t),{name:a})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"rmFile",value:function(){var e=Object(p.a)(u.a.mark((function e(t,a,n){var r=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiCall((function(){return r.api.get("/remove?path=".concat(t,"&name=").concat(a,"&absolutePath=").concat(n))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"dwFile",value:function(){var e=Object(p.a)(u.a.mark((function e(t,a){var n=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiCall((function(){return n.api.get("/download?path=".concat(t,"&name=").concat(a),{responseType:"blob"})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}()),U=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={uploading:!1,showAlert:!1,alert:{}},n}return Object(h.a)(a,[{key:"preventAndStop",value:function(e){e.preventDefault(),e.stopPropagation()}},{key:"showAlert",value:function(e){var t=this;if(this.state.showAlert)return r.a.createElement(A,{alert:e,onClose:function(){return t.setState({showAlert:!1})}})}},{key:"onSubmit",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.preventAndStop(t),t.dataTransfer.files.length&&!this.state.uploading){e.next=3;break}return e.abrupt("return");case 3:for(this.setState({uploading:!0}),a={},e.prev=6,n=new FormData,r=0;r<t.dataTransfer.files.length;r++)n.append("file",t.dataTransfer.files[r]);return e.next=11,T.uploadFiles(this.props.uploadTo||"",n);case 11:a=e.sent,this.props.reload(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(6),a=e.t0,console.log(e.t0);case 19:this.setState({uploading:!1,alert:a,showAlert:!0});case 20:case"end":return e.stop()}}),e,this,[[6,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.showAlert(this.state.alert),this.props.success?r.a.createElement(S.a,null,r.a.createElement(S.a.Body,{className:"text-center"},"No directory.")):r.a.createElement(F.a,{style:{border:"2px dashed #aaa"},className:"m-0 p-0"},r.a.createElement("p",{onDrop:function(t){return e.onSubmit(t)},onDragEnter:function(t){return e.preventAndStop(t)},onDragLeave:function(t){return e.preventAndStop(t)},onDragOver:function(t){return e.preventAndStop(t)},style:{color:"#777",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},className:"m-0"},this.state.uploading?"Uploading file(s)...":"Drop File(s) Here to Upload")))}}]),a}(n.Component),z=a(60),B=a(61),L=function(e){return r.a.createElement(l.a,{className:"text-center mx-auto"},r.a.createElement("h5",null,e.title),r.a.createElement(B.a,{animation:"border",variant:"primary",className:"mx-auto"},r.a.createElement("span",{className:"sr-only"},e.text)))},I=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={files:[],uploading:!1,showAlert:!1,alert:{}},n}return Object(h.a)(a,[{key:"onChange",value:function(e){this.setState({files:e.target.files})}},{key:"showAlert",value:function(e){var t=this;if(this.state.showAlert)return r.a.createElement(A,{alert:e,onClose:function(){return t.setState({showAlert:!1})}})}},{key:"onSubmit",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),this.setState({uploading:!0}),a={},e.prev=3,n=new FormData,r=Object(z.a)(this.state.files);try{for(r.s();!(c=r.n()).done;)s=c.value,n.append("file",s)}catch(l){r.e(l)}finally{r.f()}return e.next=9,T.uploadFiles(this.props.uploadTo||"",n);case 9:a=e.sent,this.props.reload(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),a=e.t0,console.log(e.t0);case 17:this.setState({uploading:!1,alert:a,showAlert:!0});case 18:case"end":return e.stop()}}),e,this,[[3,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.uploading?r.a.createElement(L,{title:"Uploading files...",text:"Uploading"}):r.a.createElement(r.a.Fragment,null,this.showAlert(this.state.alert),r.a.createElement(j.a,{className:"mb-3",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(j.a.Label,null,"Upload File"),r.a.createElement(j.a.File,{multiple:!0,className:"mb-2",onChange:function(t){return e.onChange(t)}}),r.a.createElement(k.a,{variant:"primary",type:"submit"},"Upload")))}}]),a}(n.Component),H=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={name:"",creating:!1,showAlert:!1,alert:{}},n}return Object(h.a)(a,[{key:"onChange",value:function(e){this.setState({name:e.target.value})}},{key:"showAlert",value:function(e){var t=this;if(this.state.showAlert)return r.a.createElement(A,{alert:e,onClose:function(){return t.setState({showAlert:!1})}})}},{key:"onSubmit",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({creating:!0}),a={},e.prev=3,e.next=6,T.mkDir(this.props.path||"",this.state.name);case 6:a=e.sent,this.props.reload(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),a=e.t0,console.log(e.t0);case 14:this.setState({creating:!1,showAlert:!0,alert:a});case 15:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.creating?r.a.createElement(L,{title:"Creating directory...",text:"Creating directory..."}):r.a.createElement(r.a.Fragment,null,this.showAlert(this.state.alert),r.a.createElement(j.a,{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(j.a.Group,{controlId:"mkdir"},r.a.createElement(j.a.Label,null,"Name"),r.a.createElement(j.a.Control,{type:"text",className:"mb-2",placeholder:"Name",value:this.state.name,onChange:function(t){return e.onChange(t)}}),r.a.createElement(k.a,{size:"lg",variant:"success",type:"submit"},"Create"))))}}]),a}(n.Component),J=a(99),G=a(100),M=a(101),R=a(102),q=a(103),K=function(e){var t={color:"#61AFEF",size:30},a={color:"#0d9f39",size:30},n={color:"#dc3545",size:30},c=r.a.createElement(J.a,t);return e.isDirectory&&(c=r.a.createElement(G.a,t)),e.parentDirectory&&(c=r.a.createElement(M.a,t)),r.a.createElement(S.a,null,r.a.createElement(S.a.Body,null,r.a.createElement(l.a,null,r.a.createElement(v.a,null,r.a.createElement(E.a,{xs:e.isDirectory?"":8,style:{padding:0}},r.a.createElement(S.a.Text,{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}},c," ",e.name)),e.isDirectory?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{style:{padding:0,cursor:"pointer"},className:"d-flex flex-row-reverse",onClick:function(){return e.removeFile(e.path,e.name,e.absolutePath)}},r.a.createElement(R.a,n)),r.a.createElement(E.a,{style:{padding:0,cursor:"pointer"},className:"d-flex flex-row-reverse",onClick:function(){return e.downloadFile(e.path,e.name)}},r.a.createElement(q.a,a)))))))},Q=function(e){if(!e.isDirectory)return r.a.createElement(r.a.Fragment,null,e.children);var t="/content/".concat(e.name);return e.path&&(t="".concat(e.path,"--").concat(e.name)),e.parentDirectory&&(t=t.split("--").slice(0,-2).join("--")||"/content/"),r.a.createElement(C.b,{to:t,style:{textDecoration:"none"},className:"text-light"},e.children)},V=function(e){return!e.path&&e.parentDirectory?r.a.createElement(r.a.Fragment,null):r.a.createElement(E.a,{lg:4,xl:3,className:"mt-2"},r.a.createElement(Q,e,r.a.createElement(K,e)))},W=a(62),X=a.n(W),Y=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).removeFile=function(){var e=Object(p.a)(u.a.mark((function e(t,a,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.rmFile(t,a,r);case 2:e.sent.state&&n.loadContent();case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),n.downloadFile=function(){var e=Object(p.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.dwFile(t,a);case 2:n=e.sent,X()(n,a);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.state={loading:!0,success:!1,dir:{}},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.loadContent()}},{key:"reload",value:function(){this.setState({loading:!0}),this.loadContent()}},{key:"loadContent",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.getContent(this.props.match.params.path||"");case 3:(t=e.sent).success?this.setState({loading:!1,success:!0,dir:t}):this.setState({loading:!1,success:!1,dir:{}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({loading:!1,success:!1,dir:{}});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"fillEntries",value:function(){var e=this;if(this.state.loading)return r.a.createElement(L,{title:"Loading Files and Directories..."});if(this.state.loading||this.state.success){var t=this.state.dir.content,a=this.props.match.params.path,n=this.state.dir.absolutePath,c=[r.a.createElement(V,{name:"Up a dir...",key:"parent",isDirectory:!0,parentDirectory:!0,path:a})];t.directories.forEach((function(e){return c.push(r.a.createElement(V,{name:e,isDirectory:!0,key:e,path:a}))}));var s=t.files.map((function(t){return r.a.createElement(V,{name:t,key:t,path:a,removeFile:e.removeFile,downloadFile:e.downloadFile,absolutePath:n})}));return[].concat(c,Object(i.a)(s))}var l=this.props.match.params.path;return[].concat([r.a.createElement(V,{name:"Up a dir...",key:"parent",isDirectory:!0,parentDirectory:!0,path:l})])}},{key:"render",value:function(){var e=this,t={className:"mx-auto mb-3"},a={color:"#FFF",size:24,className:"ml-2"},n=this.props.match.params.path;return r.a.createElement(l.a,null,r.a.createElement(v.a,t,r.a.createElement(E.a,null,r.a.createElement(O,{path:n}))),r.a.createElement("h1",{className:"text-center"},"Content"),r.a.createElement(v.a,t,r.a.createElement(E.a,null,r.a.createElement(U,{success:!this.state.success,uploadTo:n,reload:function(){return e.reload()}}))),r.a.createElement(v.a,t,r.a.createElement(E.a,null,r.a.createElement(x,{success:!this.state.success,btn:"primary",title:"Upload Files",icon:r.a.createElement(b.a,a)},r.a.createElement(I,{uploadTo:n,reload:function(){return e.reload()}})))),r.a.createElement(v.a,t,r.a.createElement(E.a,null,r.a.createElement(x,{success:!this.state.success,btn:"success",title:"Create Directory",icon:r.a.createElement(y.a,a)},r.a.createElement(H,{path:n,reload:function(){return e.reload()}})))),r.a.createElement(v.a,t,this.fillEntries()))}}]),a}(n.Component),Z=a(7),$=function(){return r.a.createElement(C.a,null,r.a.createElement(l.a,{className:"mt-3"},r.a.createElement(Z.d,null,r.a.createElement(Z.b,{path:"/content/:path?",render:function(e){return r.a.createElement(Y,Object.assign({key:e.match.params.path},e))}}),r.a.createElement(Z.b,{path:"/"},r.a.createElement(Z.a,{to:"/content/"})))))};a(96);s.a.render(r.a.createElement($,null),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.1703c325.chunk.js.map