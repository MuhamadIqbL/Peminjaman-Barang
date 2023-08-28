import{p as b,m as k,g as x,r as _,u as C,c as s,f as F,_ as j,o as P,a as R,w as t,V as U,b as f,d as L,e as c,h as p,i as w,j as B,k as D,l as T}from"./index.b8802049.js";import{m as A,c as N,V as S,a as V,b as q}from"./VTextField.e6b410fe.js";const z=b({...k(),...A()},"v-form"),E=x()({name:"VForm",props:z(),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,a){let{slots:u,emit:n}=a;const e=N(o),r=_();function l(i){i.preventDefault(),e.reset()}function g(i){const m=i,d=e.validate();m.then=d.then.bind(d),m.catch=d.catch.bind(d),m.finally=d.finally.bind(d),n("submit",m),m.defaultPrevented||d.then(v=>{var h;let{valid:y}=v;y&&((h=r.value)==null||h.submit())}),m.preventDefault()}return C(()=>{var i;return s("form",{ref:r,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:l,onSubmit:g},[(i=u.default)==null?void 0:i.call(u,e)])}),F(e,r)}}),G={name:"App",data(){return{dialog:!1,isvalid:!1,showPassword:!1,usernameRules:[o=>o!=""||"Username is required"],passwordRules:[o=>o!=""||"Password is required"],username:"",password:"",uname:null,pass:null,err:null}},methods:{handleclick(){this.showPassword=!this.showPassword},Login(){const o=this.username,a=this.password;this.uname;const u=this.pass;fetch("https://fake-json-api.vercel.app/admin/?username="+o).then(n=>n.json()).then(n=>{const e=n[0];this.uname=e.username,fetch("https://fake-json-api.vercel.app/operator/?password="+a).then(r=>r.json()).then(r=>{const l=r[0];this.pass=l.password,a==u&&this.$router.push("/Dashboard")}).catch(r=>{this.err=r,this.dialog=!0})}).catch(n=>{this.err=n,this.dialog=!0})}}},I=T("div",{class:""},"Username/Password Salah",-1);function H(o,a,u,n,e,r){return P(),R(U,{style:{"background-color":"#fffffe"}},{default:t(()=>[s(p,{class:"d-flex justify-center mt-16"},{default:t(()=>[s(f,{width:"400",height:"auto",style:{"background-color":"#6246ea"},class:"rounded-xl",flat:""},{default:t(()=>[s(S,{class:"d-flex justify-center"},{default:t(()=>[s(E,{modelValue:e.isvalid,"onUpdate:modelValue":a[3]||(a[3]=l=>e.isvalid=l)},{default:t(()=>[s(f,{flat:"",style:{"background-color":"#6246ea"},class:"ml-3 rounded-lg d-flex justify-center",width:"250"},{default:t(()=>[s(L,{style:{color:"#2b2c34"},size:"130"},{default:t(()=>[c("mdi-account")]),_:1})]),_:1}),s(f,{tile:"",elevation:"5",class:"ml-4 mt-5 rounded-lg d-flex justify-center",width:"250"},{default:t(()=>[s(V,{class:"ml-3 mr-3",rules:e.usernameRules,"prepend-icon":"mdi-account",modelValue:e.username,"onUpdate:modelValue":a[0]||(a[0]=l=>e.username=l)},null,8,["rules","modelValue"])]),_:1}),s(f,{tile:"",elevation:"5",class:"ml-4 mt-5 rounded-lg d-flex justify-center",width:"250"},{default:t(()=>[s(V,{class:"ml-3 mr-3",rules:e.passwordRules,type:e.showPassword?"text":"password","prepend-icon":e.showPassword?"mdi-eye":"mdi-eye-off","onClick:prepend":r.handleclick,modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=l=>e.password=l)},null,8,["rules","type","prepend-icon","onClick:prepend","modelValue"])]),_:1}),s(p,{class:"ml-2 mb-2 mt-4"},{default:t(()=>[s(w,{color:"#FFFFFE",style:{"background-color":"#58e45e"},onClick:a[2]||(a[2]=l=>r.Login()),width:"250"},{default:t(()=>[c("Login")]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(q,{modelValue:e.dialog,"onUpdate:modelValue":a[5]||(a[5]=l=>e.dialog=l),width:"auto"},{default:t(()=>[s(f,{class:"ml-2"},{default:t(()=>[s(B,{color:"error",title:"Login Gagal"}),s(D,null,{default:t(()=>[I]),_:1}),s(p,{class:"justify-end"},{default:t(()=>[s(w,{variant:"text",onClick:a[4]||(a[4]=l=>e.dialog=!1)},{default:t(()=>[c("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}const M=j(G,[["render",H]]);export{M as default};