(this["webpackJsonpweek22-hw1"]=this["webpackJsonpweek22-hw1"]||[]).push([[0],{30:function(n,t,e){},31:function(n,t,e){},41:function(n,t,e){"use strict";e.r(t);var r,c,o,a,i,s,u,b,p,d,j,l,x,f,h,O,g,v,m,k,w,y,P,S,z,C,E,L,M,R,N,A,B,F,_,I,T,D,J,U,H,W,Y,q,G,K,Q,V,X,Z,$,nn,tn,en,rn,cn,on,an,sn=e(1),un=e.n(sn),bn=e(18),pn=e.n(bn),dn=(e(30),e(31),e(8)),jn=e(7),ln=e(2),xn=e(3),fn=e(17),hn=e(6),On=e.n(hn),gn=e(9),vn="token",mn=function(n){localStorage.setItem(vn,n)},kn=function(n){return localStorage.getItem(vn)},wn="https://student-json-api.lidemy.me",yn=function(){var n=Object(gn.a)(On.a.mark((function n(){var t;return On.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(wn,"/posts?_sort=createdAt&_order=desc&_expand=user"));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Pn=function(){var n=Object(gn.a)(On.a.mark((function n(t,e){var r;return On.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(wn,"/posts?_sort=createdAt&_order=desc&_page=").concat(t,"&_limit=").concat(e,"&_expand=user"));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),Sn=function(){var n=Object(gn.a)(On.a.mark((function n(t,e){var r;return On.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(wn,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:e})});case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),zn=function(){var n=Object(gn.a)(On.a.mark((function n(){var t,e;return On.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=kn(),n.next=3,fetch("".concat(wn,"/me"),{headers:{authorization:"Bearer ".concat(t)}});case 3:return e=n.sent,n.abrupt("return",e.json());case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Cn=function(){var n=Object(gn.a)(On.a.mark((function n(t){var e,r;return On.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=kn(),n.next=3,fetch("".concat(wn,"/posts/").concat(t),{method:"DELETE",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)}});case 3:return r=n.sent,n.abrupt("return",r.json());case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),En=function(){var n=Object(gn.a)(On.a.mark((function n(t,e){var r,c;return On.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=kn(),n.next=3,fetch("".concat(wn,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(r)},body:JSON.stringify({title:t,body:e})});case 3:return c=n.sent,n.abrupt("return",c.json());case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),Ln=function(){var n=Object(gn.a)(On.a.mark((function n(t,e){var r,c,o,a;return On.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.editedTitle,c=e.editedBody,o=kn(),n.next=4,fetch("".concat(wn,"/posts/").concat(t),{method:"PATCH",headers:{"content-type":"application/json",authorization:"Bearer ".concat(o)},body:JSON.stringify({title:r,body:c})});case 4:return a=n.sent,n.abrupt("return",a.json());case 6:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),Mn=function(){var n=Object(gn.a)(On.a.mark((function n(t,e,r){var c;return On.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(wn,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,nickname:e,password:r})});case 2:return c=n.sent,n.abrupt("return",c.json());case 4:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),Rn=Object(fn.b)({name:"user",initialState:{user:null,errorMsg:null},reducers:{setUser:function(n,t){n.user=t.payload},setErrorMsg:function(n,t){n.errorMsg=t.payload}}}),Nn=Rn.actions,An=Nn.setUser,Bn=Nn.setErrorMsg,Fn=function(n,t){return function(e){return Sn(n,t).then((function(n){return 0===n.ok?e(Bn(n.message)):(mn(n.token),n)})).catch((function(n){e(Bn(n))}))}},_n=function(){return function(n){return zn().then((function(t){return 1!==t.ok?(mn(null),n(Bn(t.message))):(n(An(t.data)),t)})).catch((function(t){n(Bn(t))}))}},In=function(n,t,e){return function(r){return Mn(n,t,e).then((function(n){return 1!==n.ok?r(Bn(n.message)):(mn(n.token),n)})).catch((function(n){r(Bn(n))}))}},Tn=Rn.reducer,Dn=e(4),Jn=e(0),Un=xn.a.header(r||(r=Object(ln.a)(["\n  height:64px;\n  display:flex;\n  justify-content:space-around;\n  align-items:center;\n  padding:20px 0;\n"]))),Hn=xn.a.div(c||(c=Object(ln.a)(["\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n"]))),Wn=Object(xn.a)(dn.b)(o||(o=Object(ln.a)(["\n  font-size:32px;\n  font-weight:bold;\n  color:rgba(0,0,0, 0.6);\n  text-decoration:none;\n"]))),Yn=Object(xn.a)(dn.b)(a||(a=Object(ln.a)(["\n  font-size:18px;\n  font-weight:300;\n  color:rgba(0,0,0, 0.6);\n  margin-top:12px;\n  text-decoration:none;\n\n"]))),qn=xn.a.div(i||(i=Object(ln.a)(["\n  display:flex;\n"]))),Gn=Object(xn.a)(dn.b)(s||(s=Object(ln.a)(["\n  font-weight:bold;\n  font-size:18px;\n  color:rgba(0,0,0, 0.6);\n  text-decoration:none;\n\n  &+& {\n    margin-left:12px;\n  }\n"]))),Kn=function(){var n=Object(Dn.b)(),t=Object(Dn.c)((function(n){return n.user.user}));return Object(Jn.jsxs)(Un,{children:[Object(Jn.jsxs)(Hn,{children:[Object(Jn.jsx)(Wn,{to:"/",children:"Lidemy Blog"}),Object(Jn.jsx)(Yn,{to:"/about",children:"Welcome to the blog of Lidemy-Yang"})]}),Object(Jn.jsxs)(qn,{children:[Object(Jn.jsx)(Gn,{to:"/posts-list",children:"\u6240\u6709\u6587\u7ae0"}),t&&Object(Jn.jsx)(Gn,{to:"/new-post",children:"\u767c\u4f48\u65b0\u6587\u7ae0"}),!t&&Object(Jn.jsx)(Gn,{to:"/login",children:"\u767b\u5165"}),t&&Object(Jn.jsx)(Gn,{to:"/",onClick:function(){n((function(n){mn(""),n(An(null))}))},children:"\u767b\u51fa"})]})]})},Qn=Object(fn.b)({name:"posts",initialState:{isLoadingPost:!0,post:[],newPostResponse:null,posts:[],postErrorMsg:null,patchPostResponse:null,currentPageNum:1},reducers:{setIsLoginPost:function(n,t){n.isLoadingPost=t.payload},setPost:function(n,t){n.post=t.payload},setNewPostResponse:function(n,t){n.newPostResponse=t.payload},setAllPosts:function(n,t){n.posts=t.payload},setPostErrorMsg:function(n,t){n.postErrorMsg=t.payload},setPatchPostResponse:function(n,t){n.patchPostResponse=t.payload},setCurrentPageNum:function(n,t){n.currentPageNum=t.payload}}}),Vn=Qn.actions,Xn=Vn.setIsLoginPost,Zn=Vn.setPost,$n=Vn.setNewPostResponse,nt=Vn.setAllPosts,tt=(Vn.setPostErrorMsg,Vn.setPatchPostResponse),et=Vn.setCurrentPageNum,rt=function(n){return function(t){t(Xn(!0)),function(n){return fetch("".concat(wn,"/posts/").concat(n,"?_expand=user")).then((function(n){return n.json()}))}(n).then((function(n){t(Zn(n)),t(Xn(!1))})).catch((function(n){console.log(n)}))}},ct=function(n,t){return function(e){return En(n,t).then((function(n){return e($n(n)),n}))}},ot=function(){return function(n){n(Xn(!0)),yn().then((function(t){n(nt(t)),n(Xn(!1))})).catch((function(n){console.log(n)}))}},at=function(n){return function(t){return Cn(n).then((function(n){return n})).catch((function(n){console.log(n)}))}},it=function(n,t){return function(e){return e(Xn(!0)),Ln(n,t).then((function(n){return e(tt(n)),e(Xn(!1)),n})).catch((function(n){console.log(n)}))}},st=function(n,t){return function(e){e(Xn(!0)),Pn(n,t).then((function(n){e(nt(n)),e(Xn(!1))})).catch((function(n){console.log(n)}))}},ut=Qn.reducer,bt=xn.a.main(u||(u=Object(ln.a)(["\n  max-width:960px;\n  margin:30px auto;\n"]))),pt=xn.a.div(b||(b=Object(ln.a)(["\n  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);\n  padding:30px ;\n  background:#fff;\n  & + & {\n    margin-top:20px;\n  }\n  position:relative;\n"]))),dt=Object(xn.a)(dn.b)(p||(p=Object(ln.a)(["\n  font-size:28px;\n  color:#000;\n  text-decoration:none;\n  overflow: hidden;\n    white-space: nowrap;\n    width: 80%;\n    text-overflow: ellipsis;\n    display: block;\n"]))),jt=xn.a.div(d||(d=Object(ln.a)(["\n  display:flex;\n  margin-top:12px;\n"]))),lt=xn.a.div(j||(j=Object(ln.a)(["\n  margin-right:12px;\n"]))),xt=xn.a.div(l||(l=Object(ln.a)(["\n  font-weight:300;\n  color:rgba(0,0,0,0.6);\n  font-size:16px;\n"]))),ft=xn.a.div(x||(x=Object(ln.a)(["\n  margin-top:30px;\n  font-size:18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n"]))),ht=Object(xn.a)(dn.b)(f||(f=Object(ln.a)(["\n  margin-top:30px;\n  display:inline-block;\n  color:rgba(0,0,0,0.6);\n  text-decoration:none;\n  border:1px solid #ccc;\n  padding:8px 24px;\n  background:#fff;\n  cursor:pointer;\n  transition: background 0.2s;\n  &:hover{\n    background:#ccc;\n  }\n  & + & {\n    margin-left:8px;\n  }\n"]))),Ot=xn.a.div(h||(h=Object(ln.a)(["\n  font-size:18px;\n"]))),gt=xn.a.div(O||(O=Object(ln.a)(["\n  display:flex;\n  align-items:center;\n  margin-bottom:40px;\n  justify-content:center;\n"]))),vt=xn.a.button(g||(g=Object(ln.a)(["\n  border:0;\n  text-decoration:underline;\n  margin:0 12px;\n  cursor:pointer;\n  opacity:0.5;\n  transition: opacity .5s;\n  &:hover{\n    opacity:1;\n  }\n"]))),mt=xn.a.div(v||(v=Object(ln.a)(["\n  position:absolute;\n  right: 30px;\n  bottom: 30px;\n"]))),kt=xn.a.button(m||(m=Object(ln.a)(["\n  margin-top:30px;\n  margin-left:8px;\n  display:inline-block;\n  color:rgba(0,0,0,0.6);\n  text-decoration:none;\n  border:1px solid #ccc;\n  padding:8px 24px;\n  background:#fff;\n  cursor:pointer;\n  transition: background 0.2s;\n  &:hover{\n    background:#ccc;\n  }\n  \n"]))),wt=function(){var n=Object(Dn.b)(),t=Object(Dn.c)((function(n){return n.posts.posts})),e=Object(Dn.c)((function(n){return n.posts.currentPageNum})),r=Object(Dn.c)((function(n){return n.posts.isLoadingPost}));Object(sn.useEffect)((function(){n(st(e,10))}),[n,e]);var c=function(t){var r=t.post,c=r.title,o=r.createdAt,a=r.id,i=r.body,s=r.userId,u=Object(Dn.c)((function(n){return n.user.user}));return Object(Jn.jsx)(Jn.Fragment,{children:Object(Jn.jsxs)(pt,{children:[Object(Jn.jsx)(dt,{to:"/posts/".concat(a),children:c}),Object(Jn.jsxs)(jt,{children:[Object(Jn.jsx)(lt,{children:r.user.nickname}),Object(Jn.jsx)(xt,{children:new Date(o).toLocaleString()})]}),Object(Jn.jsx)(ft,{children:i}),Object(Jn.jsx)(ht,{to:"/posts/".concat(a),children:"Read More"}),u&&u.id===s&&Object(Jn.jsxs)(mt,{children:[Object(Jn.jsx)(dn.b,{to:"/edit-post/".concat(a),children:Object(Jn.jsx)(kt,{children:"Edit"})}),Object(Jn.jsx)(kt,{onClick:function(){return function(t){n(at(t)).then((function(t){return n(st(e,10))}))}(a)},children:"Delete"})]})]})})};return Object(Jn.jsx)(Jn.Fragment,{children:r?Object(Jn.jsx)("div",{children:"Loading..."}):Object(Jn.jsxs)(Jn.Fragment,{children:[Object(Jn.jsx)(bt,{children:t.map((function(n){return Object(Jn.jsx)(c,{post:n},n.id)}))}),Object(Jn.jsxs)(gt,{children:[e>1&&Object(Jn.jsx)(vt,{onClick:function(){e>1&&n(et(e-1))},children:"pre"}),Object(Jn.jsx)(Ot,{children:e}),10===t.length&&Object(Jn.jsx)(vt,{onClick:function(){n(et(e+1))},children:"next"})]})]})})},yt=e(10),Pt=xn.a.form(k||(k=Object(ln.a)(["\n  max-width:960px;\n  margin:30px auto;\n  box-shadow:0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);\n  text-align:center;\n  padding:30px 0;\n  background-color:#fff;\n\n  & div + div {\n    margin-top:20px;\n  }\n"]))),St=xn.a.button(w||(w=Object(ln.a)(["\n  margin-top:60px;\n  padding:8px 24px;\n  border:1px solid #ccc;\n  cursor:pointer;\n  background-color:#fff;\n  border-radius:4px;\n  font-weight:bold;\n  font-size:18px;\n  color:rgba(0,0,0, 0.6);\n  transition:background-color 0.2s;\n  margin-left:20px;\n\n  &:hover {\n    background-color:#ccc;\n  }\n\n"]))),zt=xn.a.label(y||(y=Object(ln.a)(["\n  font-weight:bold;\n  font-size:18px;\n  color:rgba(0,0,0, 0.6);\n  & input{\n    margin:0 12px;\n  }\n"]))),Ct=xn.a.div(P||(P=Object(ln.a)(["\n  margin-top:20px;\n  color:#ef4a52;\n"]))),Et=function(){var n=Object(sn.useState)(""),t=Object(yt.a)(n,2),e=t[0],r=t[1],c=Object(sn.useState)(""),o=Object(yt.a)(c,2),a=o[0],i=o[1],s=Object(Dn.c)((function(n){return n.user.errorMsg})),u=Object(jn.f)(),b=Object(Dn.b)();Object(sn.useEffect)((function(){return function(){return b(Bn(null))}}),[b]);var p=function(){var n=Object(gn.a)(On.a.mark((function n(t){return On.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(b(Bn(null)),e&&a){n.next=3;break}return n.abrupt("return",b(Bn("\u8acb\u586b\u5165\u5b8c\u6574\u8cc7\u6599")));case 3:return n.prev=3,n.next=6,b(Fn(e,a));case 6:if(n.sent.token){n.next=9;break}return n.abrupt("return");case 9:return n.next=11,b(_n());case 11:n.sent.data&&u.push("/"),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(3),b(Bn("\u8acb\u7a0d\u5f8c\u518d\u767b\u5165\u770b\u770b"));case 18:case"end":return n.stop()}}),n,null,[[3,15]])})));return function(t){return n.apply(this,arguments)}}();return Object(Jn.jsxs)(Pt,{onSubmit:p,children:[Object(Jn.jsx)("div",{children:Object(Jn.jsxs)(zt,{children:["username",Object(Jn.jsx)("input",{value:e,onChange:function(n){return r(n.target.value)}})]})}),Object(Jn.jsx)("div",{children:Object(Jn.jsxs)(zt,{children:["password",Object(Jn.jsx)("input",{type:"password",value:a,onChange:function(n){return i(n.target.value)}})]})}),Object(Jn.jsx)(St,{type:"submit",children:"Login"}),Object(Jn.jsx)(dn.b,{to:"/register",children:Object(Jn.jsx)(St,{type:"button",children:"Register"})}),s&&Object(Jn.jsx)(Ct,{children:s})]})},Lt=xn.a.div(S||(S=Object(ln.a)(["\n  max-width:960px;\n  margin:60px auto;\n"]))),Mt=xn.a.div(z||(z=Object(ln.a)(["\n  font-size:30px;\n  color:#777;\n  text-align:center;\n"]))),Rt=xn.a.p(C||(C=Object(ln.a)(["\n  margin-top:50px;\n  padding:0 20px;\n  color:#888;\n  line-height:2;\n"]))),Nt=function(){return Object(Jn.jsx)(Jn.Fragment,{children:Object(Jn.jsxs)(Lt,{children:[Object(Jn.jsx)(Mt,{children:"ABOUT ME"}),Object(Jn.jsx)(Rt,{children:"\u9019\u662f\u5728 Lidemy \u7a0b\u5f0f\u5c0e\u5e2b\u8a08\u756b\u7684\u6700\u5f8c\u4e00\u500b\u5be6\u4f5c\u4f5c\u696d\uff0c\u6b64\u523b\u7684\u6211\u4e5f\u958b\u59cb\u6295\u5c65\u6b77\u4e86\uff0c11/19 \u6709\u500b\u9762\u8a66\uff0c\u5e0c\u671b\u4e00\u5207\u9806\u5229\u3002 \u4e5f\u5f88\u611f\u8b1d\u9019\u534a\u5e74\u966a\u4f34\u7684\u540c\u5b78\uff0c\u52a9\u6559\u9084\u6709 Huli\uff0c\u4e0d\u7ba1\u662f\u6280\u8853\u65b9\u9762\uff0c\u9019\u8a08\u756b\u9023\u5fc3\u7406\u5c64\u9762\u4e5f\u90fd\u6709\u5e6b\u6211\u4e0a\u4e86\u4e00\u5802\u8ab2\uff0c\u4e0d\u7ba1\u6700\u5f8c\u5de5\u4f5c\u662f\u5426\u6709\u9806\u5229\u627e\u5230\uff0c\u9019\u6bb5\u65e5\u5b50\u90fd\u662f\u6211\u4eba\u751f\u4e2d\u91cd\u8981\u7684\u6b77\u7a0b\u4e4b\u4e00\u3002"})]})})},At=xn.a.div(E||(E=Object(ln.a)(["\n  max-width:960px;\n  min-height:60vh;\n  margin:30px auto;\n  padding:10px;\n  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);\n  padding:30px ;\n  background:#fff;\n\n  position:relative;\n"]))),Bt=xn.a.h2(L||(L=Object(ln.a)([""]))),Ft=xn.a.div(M||(M=Object(ln.a)(["\n  display:flex;\n  margin-top:12px;\n"]))),_t=xn.a.div(R||(R=Object(ln.a)(["\n  margin-right:12px;\n"]))),It=xn.a.div(N||(N=Object(ln.a)(["\n  font-weight:300;\n  color:rgba(0,0,0,0.6);\n  font-size:16px;\n"]))),Tt=xn.a.div(A||(A=Object(ln.a)(["\n  margin-top:80px;\n  font-size:18px;\n  padding:20px;\n  line-height:2em;\n"]))),Dt=xn.a.div(B||(B=Object(ln.a)(["\n  position:absolute;\n  right: 10px;\n  bottom: 10px;\n"]))),Jt=xn.a.button(F||(F=Object(ln.a)(["\n  margin-top:30px;\n  margin-left:8px;\n  display:inline-block;\n  color:rgba(0,0,0,0.6);\n  text-decoration:none;\n  border:1px solid #ccc;\n  padding:8px 24px;\n  background:#fff;\n  cursor:pointer;\n  transition: background 0.2s;\n  &:hover{\n    background:#ccc;\n  }\n  \n"]))),Ut=function(){var n=Object(jn.g)().id,t=Object(jn.f)(),e=Object(Dn.b)(),r=Object(Dn.c)((function(n){return n.posts.isLoadingPost})),c=Object(Dn.c)((function(n){return n.posts.post})),o=Object(Dn.c)((function(n){return n.user.user})),a=c.title,i=c.body,s=c.createdAt,u=c.userId;Object(sn.useEffect)((function(){e(rt(n))}),[n,e]);return Object(Jn.jsx)(Jn.Fragment,{children:r?Object(Jn.jsx)("div",{children:"loading ..."}):Object(Jn.jsx)(Jn.Fragment,{children:Object(Jn.jsxs)(At,{children:[Object(Jn.jsx)(Bt,{children:a}),Object(Jn.jsxs)(Ft,{children:[Object(Jn.jsx)(_t,{children:c.user.nickname}),Object(Jn.jsx)(It,{children:new Date(s).toLocaleString()})]}),Object(Jn.jsx)(Tt,{children:i}),o&&o.id===u&&Object(Jn.jsxs)(Dt,{children:[Object(Jn.jsx)(dn.b,{to:"/edit-post/".concat(n),children:Object(Jn.jsx)(Jt,{children:"Edit"})}),Object(Jn.jsx)(Jt,{onClick:function(){e(at(n)),t.push("/posts-list")},children:"Delete"})]})]})})})},Ht=xn.a.form(_||(_=Object(ln.a)(["\n  max-width:960px;\n  margin:30px auto;\n  box-shadow:0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);\n  padding:30px 20px;\n  background-color:#fff;\n  text-align:center;\n\n  & div + div {\n    margin:40px auto;\n  }\n"]))),Wt=xn.a.button(I||(I=Object(ln.a)(["\n  margin-top:60px;\n  padding:8px 24px;\n  border:1px solid #ccc;\n  cursor:pointer;\n  background-color:#fff;\n  border-radius:4px;\n  font-weight:bold;\n  font-size:18px;\n  color:rgba(0,0,0, 0.6);\n  transition:background-color 0.2s;\n  \n  & + & {\n    margin-left:20px;\n  }\n\n  &:hover {\n    background-color:#ccc;\n  }\n"]))),Yt=xn.a.label(T||(T=Object(ln.a)(["\n  font-weight:bold;\n  font-size:18px;\n  color:rgba(0,0,0, 0.6);\n  \n  & input{\n    display:block;\n    margin:20px  auto;\n    width:80%;\n  }\n\n  & textarea{\n    display:block;\n    margin:20px auto;\n    width:80%;\n  }\n"]))),qt=xn.a.div(D||(D=Object(ln.a)(["\n  text-align: center;\n"]))),Gt=xn.a.div(J||(J=Object(ln.a)(["\n  margin-top:20px;\n  color:#ef4a52;\n"]))),Kt=function(){var n=Object(sn.useState)(""),t=Object(yt.a)(n,2),e=t[0],r=t[1],c=Object(sn.useState)(""),o=Object(yt.a)(c,2),a=o[0],i=o[1],s=Object(sn.useState)(),u=Object(yt.a)(s,2),b=u[0],p=u[1],d=Object(jn.f)(),j=Object(Dn.b)(),l=function(){var n=Object(gn.a)(On.a.mark((function n(){var t;return On.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(p(null),e&&a){n.next=3;break}return n.abrupt("return",p("\u8acb\u586b\u5165\u5b8c\u6574\u5167\u5bb9"));case 3:return n.prev=3,n.next=6,j(ct(e,a));case 6:if(0!==(t=n.sent).ok){n.next=9;break}return n.abrupt("return",p(t.message));case 9:d.push("/posts/"+t.id),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(3),p("\u8acb\u7a0d\u5f8c\u518d\u8a66\u8a66\u770b");case 15:case"end":return n.stop()}}),n,null,[[3,12]])})));return function(){return n.apply(this,arguments)}}();return Object(Jn.jsxs)(Ht,{onSubmit:l,children:[Object(Jn.jsx)("div",{children:Object(Jn.jsxs)(Yt,{children:["\u6587\u7ae0\u6a19\u984c",Object(Jn.jsx)("input",{value:e,onChange:function(n){return r(n.target.value)}})]})}),Object(Jn.jsx)("div",{children:Object(Jn.jsxs)(Yt,{children:["\u6587\u7ae0\u5167\u5bb9",Object(Jn.jsx)("textarea",{value:a,rows:"10",onChange:function(n){return i(n.target.value)}})]})}),Object(Jn.jsxs)(qt,{children:[Object(Jn.jsx)(Wt,{type:"submit",children:"\u65b0\u589e\u6587\u7ae0"}),Object(Jn.jsx)(Wt,{type:"button",onClick:function(){r(""),i(""),p("")},children:"\u91cd\u65b0\u586b\u5beb"}),b&&Object(Jn.jsx)(Gt,{children:b})]})]})},Qt=xn.a.form(U||(U=Object(ln.a)(["\n  max-width:960px;\n  margin:30px auto;\n  box-shadow:0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);\n  text-align:center;\n  padding:30px 0;\n  background-color:#fff;\n\n  & div + div {\n    margin-top:20px;\n  }\n"]))),Vt=xn.a.button(H||(H=Object(ln.a)(["\n  margin-top:60px;\n  padding:8px 24px;\n  border:1px solid #ccc;\n  cursor:pointer;\n  background-color:#fff;\n  border-radius:4px;\n  font-weight:bold;\n  font-size:18px;\n  color:rgba(0,0,0, 0.6);\n  transition:background-color 0.2s;\n  margin-left:20px;\n  \n  &:hover {\n    background-color:#ccc;\n  }\n\n"]))),Xt=xn.a.label(W||(W=Object(ln.a)(["\n  font-weight:bold;\n  font-size:18px;\n  color:rgba(0,0,0, 0.6);\n  & input{\n    margin:0 12px;\n  }\n"]))),Zt=xn.a.div(Y||(Y=Object(ln.a)(["\n  margin-top:20px;\n  color:#ef4a52;\n"]))),$t=function(){var n=Object(sn.useState)(""),t=Object(yt.a)(n,2),e=t[0],r=t[1],c=Object(sn.useState)(""),o=Object(yt.a)(c,2),a=o[0],i=o[1],s=Object(sn.useState)(""),u=Object(yt.a)(s,2),b=u[0],p=u[1],d=Object(sn.useState)(""),j=Object(yt.a)(d,2),l=j[0],x=j[1],f=Object(Dn.c)((function(n){return n.user.errorMsg})),h=Object(Dn.b)(),O=Object(jn.f)();Object(sn.useEffect)((function(){return function(){return h(Bn(null))}}),[h]);var g=function(){var n=Object(gn.a)(On.a.mark((function n(t){var r,c;return On.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&a&&b&&l){n.next=2;break}return n.abrupt("return",h(Bn("\u8acb\u586b\u5165\u5b8c\u6574\u8cc7\u6599")));case 2:if(b===l){n.next=4;break}return n.abrupt("return",h(Bn("\u8acb\u78ba\u8a8d\u5169\u6b21\u5bc6\u78bc\u662f\u5426\u76f8\u7b26")));case 4:return n.prev=4,n.next=7,h(In(e,a,b));case 7:return r=n.sent,n.next=10,h(_n());case 10:c=n.sent,console.log(1===r.ok&&1===c.ok),1===r.ok&&1===c.ok&&O.push("/"),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(4),h(Bn("\u8acb\u7a0d\u5f8c\u518d\u767b\u5165\u770b\u770b"));case 18:case"end":return n.stop()}}),n,null,[[4,15]])})));return function(t){return n.apply(this,arguments)}}();return Object(Jn.jsxs)(Qt,{onSubmit:g,children:[Object(Jn.jsx)("div",{children:Object(Jn.jsxs)(Xt,{children:["username",Object(Jn.jsx)("input",{value:e,onChange:function(n){return r(n.target.value)}})]})}),Object(Jn.jsx)("div",{children:Object(Jn.jsxs)(Xt,{children:["nickname",Object(Jn.jsx)("input",{value:a,onChange:function(n){return i(n.target.value)}})]})}),Object(Jn.jsx)("div",{children:Object(Jn.jsxs)(Xt,{children:["password",Object(Jn.jsx)("input",{type:"password",value:b,onChange:function(n){return p(n.target.value)}})]})}),Object(Jn.jsx)("div",{children:Object(Jn.jsxs)(Xt,{children:["comfirm password",Object(Jn.jsx)("input",{type:"password",value:l,onChange:function(n){return x(n.target.value)}})]})}),Object(Jn.jsx)(Vt,{type:"reset",onClick:function(){h(Bn(null)),r(""),i(""),p(""),x("")},children:"Reset"}),Object(Jn.jsx)(Vt,{type:"submit",children:"Register"}),f&&Object(Jn.jsx)(Zt,{children:f})]})},ne=xn.a.main(q||(q=Object(ln.a)(["\n  max-width:960px;\n  margin:30px auto;\n"]))),te=xn.a.div(G||(G=Object(ln.a)(["\n  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);\n  padding:30px ;\n  background:#fff;\n  & + & {\n    margin-top:20px;\n  }\n  position:relative;\n"]))),ee=Object(xn.a)(dn.b)(K||(K=Object(ln.a)(["\n  font-size:28px;\n  color:#000;\n  text-decoration:none;\n  overflow: hidden;\n    white-space: nowrap;\n    width: 80%;\n    text-overflow: ellipsis;\n    display: block;\n"]))),re=xn.a.div(Q||(Q=Object(ln.a)(["\n  display:flex;\n  margin-top:12px;\n"]))),ce=xn.a.div(V||(V=Object(ln.a)(["\n  margin-right:12px;\n"]))),oe=xn.a.div(X||(X=Object(ln.a)(["\n  font-weight:300;\n  color:rgba(0,0,0,0.6);\n  font-size:16px;\n"]))),ae=xn.a.div(Z||(Z=Object(ln.a)(["\n  margin-top:30px;\n  font-size:18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n"]))),ie=Object(xn.a)(dn.b)($||($=Object(ln.a)(["\n  margin-top:30px;\n  display:inline-block;\n  color:rgba(0,0,0,0.6);\n  text-decoration:none;\n  border:1px solid #ccc;\n  padding:8px 24px;\n  background:#fff;\n  cursor:pointer;\n  transition: background 0.2s;\n  &:hover{\n    background:#ccc;\n  }\n"]))),se=xn.a.div(nn||(nn=Object(ln.a)(["\n  position:absolute;\n  right: 30px;\n  bottom: 30px;\n"]))),ue=xn.a.button(tn||(tn=Object(ln.a)(["\n  margin-top:30px;\n  margin-left:8px;\n  display:inline-block;\n  color:rgba(0,0,0,0.6);\n  text-decoration:none;\n  border:1px solid #ccc;\n  padding:8px 24px;\n  background:#fff;\n  cursor:pointer;\n  transition: background 0.2s;\n  &:hover{\n    background:#ccc;\n  }\n  \n"]))),be=function(){var n=Object(Dn.b)(),t=Object(Dn.c)((function(n){return n.posts.isLoadingPost})),e=Object(Dn.c)((function(n){return n.posts.posts})),r=Object(Dn.c)((function(n){return n.user.user}));Object(sn.useEffect)((function(){n(ot())}),[n]);var c=function(t){var e=t.post,c=e.title,o=e.createdAt,a=e.id,i=e.body,s=e.userId;return Object(Jn.jsx)(Jn.Fragment,{children:Object(Jn.jsxs)(te,{children:[Object(Jn.jsx)(ee,{to:"/posts/".concat(a),children:c}),Object(Jn.jsxs)(re,{children:[Object(Jn.jsx)(ce,{children:e.user.nickname}),Object(Jn.jsx)(oe,{children:new Date(o).toLocaleString()})]}),Object(Jn.jsx)(ae,{children:i}),Object(Jn.jsx)(ie,{to:"/posts/".concat(a),children:"Read More"}),r&&r.id===s&&Object(Jn.jsxs)(se,{children:[Object(Jn.jsx)(dn.b,{to:"/edit-post/".concat(a),children:Object(Jn.jsx)(ue,{children:"Edit"})}),Object(Jn.jsx)(dn.b,{to:"/posts-list",replace:!0,children:Object(Jn.jsx)(ue,{onClick:function(){return function(t){n(at(t)).then((function(t){return n(ot())}))}(a)},children:"Delete"})})]})]})})};return Object(Jn.jsx)(Jn.Fragment,{children:t?Object(Jn.jsx)("div",{children:"Loading..."}):Object(Jn.jsx)(ne,{children:e.map((function(n){return Object(Jn.jsx)(c,{post:n},n.id)}))})})},pe=xn.a.form(en||(en=Object(ln.a)(["\n  max-width:960px;\n  margin:30px auto;\n  box-shadow:0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);\n  padding:30px 20px;\n  background-color:#fff;\n  text-align:center;\n\n  & div + div {\n    margin:40px auto;\n  }\n"]))),de=xn.a.button(rn||(rn=Object(ln.a)(["\n  margin-top:60px;\n  padding:8px 24px;\n  border:1px solid #ccc;\n  cursor:pointer;\n  background-color:#fff;\n  border-radius:4px;\n  font-weight:bold;\n  font-size:18px;\n  color:rgba(0,0,0, 0.6);\n  transition:background-color 0.2s;\n  \n  & + & {\n    margin-left:20px;\n  }\n\n  &:hover {\n    background-color:#ccc;\n  }\n"]))),je=xn.a.label(cn||(cn=Object(ln.a)(["\n  font-weight:bold;\n  font-size:18px;\n  color:rgba(0,0,0, 0.6);\n  \n  & input{\n    display:block;\n    margin:20px  auto;\n    width:80%;\n  }\n\n  & textarea{\n    display:block;\n    margin:20px auto;\n    width:80%;\n  }\n"]))),le=xn.a.div(on||(on=Object(ln.a)(["\n  text-align: center;\n"]))),xe=xn.a.div(an||(an=Object(ln.a)(["\n  margin-top:20px;\n  color:#ef4a52;\n"]))),fe=function(){var n=Object(sn.useState)(),t=Object(yt.a)(n,2),e=t[0],r=t[1],c=Object(sn.useState)(""),o=Object(yt.a)(c,2),a=o[0],i=o[1],s=Object(sn.useState)(""),u=Object(yt.a)(s,2),b=u[0],p=u[1],d=Object(jn.f)(),j=Object(jn.g)().id,l=Object(Dn.b)(),x=Object(Dn.c)((function(n){return n.posts.isLoadingPost})),f=Object(Dn.c)((function(n){return n.posts.post}));Object(sn.useEffect)((function(){l(rt(j))}),[j,l]);var h=function(){var n=Object(gn.a)(On.a.mark((function n(){var t;return On.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(null),a&&b){n.next=3;break}return n.abrupt("return",r("\u8acb\u586b\u5165\u5b8c\u6574\u5167\u5bb9"));case 3:return n.prev=3,n.next=6,l(it(j,{editedTitle:a,editedBody:b}));case 6:t=n.sent,d.push("/posts/"+t.id),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),r("\u8acb\u7a0d\u5f8c\u518d\u8a66\u8a66\u770b");case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(){return n.apply(this,arguments)}}();return Object(Jn.jsx)(Jn.Fragment,{children:x?Object(Jn.jsx)("div",{children:"Loading..."}):Object(Jn.jsxs)(pe,{onSubmit:h,children:[Object(Jn.jsx)("div",{children:Object(Jn.jsxs)(je,{children:["\u6587\u7ae0\u6a19\u984c",Object(Jn.jsx)("input",{value:a,onChange:function(n){return i(n.target.value)},placeholder:f.title})]})}),Object(Jn.jsx)("div",{children:Object(Jn.jsxs)(je,{children:["\u6587\u7ae0\u5167\u5bb9",Object(Jn.jsx)("textarea",{value:b,rows:"10",onChange:function(n){return p(n.target.value)},placeholder:f.body})]})}),Object(Jn.jsxs)(le,{children:[Object(Jn.jsx)(de,{type:"submit",children:"\u78ba\u5b9a\u4fee\u6539"}),Object(Jn.jsx)(de,{type:"button",onClick:function(){i(""),p(""),r("")},children:"\u91cd\u65b0\u586b\u5beb"}),e&&Object(Jn.jsx)(xe,{children:e})]})]})})},he=function(){var n=Object(Dn.b)();return Object(sn.useEffect)((function(){kn()&&n(_n())}),[n]),Object(Jn.jsxs)(dn.a,{children:[Object(Jn.jsx)(Kn,{}),Object(Jn.jsxs)(jn.c,{children:[Object(Jn.jsx)(jn.a,{exact:!0,path:"/",children:Object(Jn.jsx)(wt,{})}),Object(Jn.jsx)(jn.a,{path:"/about",children:Object(Jn.jsx)(Nt,{})}),Object(Jn.jsx)(jn.a,{path:"/login",children:Object(Jn.jsx)(Et,{})}),Object(Jn.jsx)(jn.a,{path:"/posts/:id",children:Object(Jn.jsx)(Ut,{})}),Object(Jn.jsx)(jn.a,{path:"/posts-list",children:Object(Jn.jsx)(be,{})}),Object(Jn.jsx)(jn.a,{path:"/new-post",children:Object(Jn.jsx)(Kt,{})}),Object(Jn.jsx)(jn.a,{path:"/edit-post/:id",children:Object(Jn.jsx)(fe,{})}),Object(Jn.jsx)(jn.a,{path:"/register",children:Object(Jn.jsx)($t,{})})]})]})},Oe=Object(fn.a)({reducer:{posts:ut,user:Tn}});pn.a.render(Object(Jn.jsx)(un.a.StrictMode,{children:Object(Jn.jsx)(Dn.a,{store:Oe,children:Object(Jn.jsx)(he,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.c5a4f46a.chunk.js.map