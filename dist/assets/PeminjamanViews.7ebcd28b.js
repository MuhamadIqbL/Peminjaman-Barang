import{_ as T,o as y,a as U,w as s,c as n,i as g,d as A,e as h,b as r,l as m,ar as w,as as D,a5 as E,h as x,at as P,aq as f}from"./index.773df6ec.js";import{V as v,a as c,b as j}from"./VTextField.f6c847e2.js";import{V as O}from"./VTable.d66a8581.js";import{V as _}from"./VSelect.aaaa18bc.js";const S={data(){return{dialog2:!1,dialog3:!1,EditAddOk:!1,EditAddGagal:!1,peminjaman:null,barang:null,pengembalian:null,totalpeminjaman:null,item_barang:null,item_operator:null,totalpengembalian:null,tanggal_pinjam:null,id:"Otomatis",status:"Belum Dikembalikan",nama_operator:"",nama_barang:"",form_brg:{id:"",nama_brg:"",jenis_brg:"",stock:""},form:{id:"",nama_brg:"",nama_operator:"",nama_peminjam:"",kelas_peminjam:"",jurusan_peminjam:"",tanggal_pinjam:"",status:""}}},mounted(){this.GetData()},methods:{GetData(){fetch("http://localhost:3000/peminjaman/").then(a=>a.json()).then(a=>{this.peminjaman=a,this.totalpeminjaman=a.length;const e=new Date,d=e.getFullYear();let o=e.getMonth()+1,t=e.getDate();t<10&&(t="0"+t),o<10&&(o="0"+o);const i=t+"-"+o+"-"+d;this.tanggal_pinjam=i}).catch(a=>{console.error(a)}),fetch("http://localhost:3000/pengembalian").then(a=>a.json()).then(a=>{this.pengembalian=a,this.totalpengembalian=a.length}).catch(a=>{console.error(a)}),fetch("http://localhost:3000/barang/").then(a=>a.json()).then(a=>{this.item_barang=a}).catch(a=>{console.error(a)}),fetch("http://localhost:3000/operator/").then(a=>a.json()).then(a=>{this.item_operator=a}).catch(a=>{console.error(a)})},GetDataId(a){this.dialog2=!0,this.form.id=a.id,this.form.nama_brg=a.nama_brg,this.form.nama_operator=a.nama_operator,this.form.nama_peminjam=a.nama_peminjam,this.form.kelas_peminjam=a.kelas_peminjam,this.form.jurusan_peminjam=a.jurusan_peminjam,this.form.tanggal_pinjam=a.tanggal_pinjam,this.form.status=a.status,fetch("http://localhost:3000/barang/?nama_brg="+a.nama_brg).then(e=>e.json()).then(e=>{this.barang=e[0],this.form_brg.id=this.barang.id,this.form_brg.nama_brg=this.barang.nama_brg,this.form_brg.jenis_brg=this.barang.jenis_brg,this.form_brg.stock=this.barang.stock}).catch(e=>{console.error(e)})},Update(a,e){const d=new Headers;d.append("Content-Type","application/x-www-form-urlencoded");const o=new URLSearchParams;o.append("nama_brg",a.nama_brg),o.append("nama_operator",a.nama_operator),o.append("nama_peminjam",a.nama_peminjam),o.append("kelas_peminjam",a.kelas_peminjam),o.append("jurusan_peminjam",a.jurusan_peminjam),o.append("tanggal_pinjam",a.tanggal_pinjam),o.append("status",a.status);const t={method:"PUT",headers:d,body:o};fetch("http://localhost:3000/peminjaman/"+a.id,t).then(i=>{console.log(i.statusText),this.EditAddOk=!0,this.GetData(),a.status=="Sudah Dikembalikan"&&this.AddPengembalian(a,e)}).catch(i=>{console.error(i),this.EditAddGagal=!0})},Add(a,e){const d=this.totalpeminjaman+1,o=this.status,t=this.nama_barang,i=this.tanggal_pinjam,l=new Headers;l.append("Content-Type","application/x-www-form-urlencoded");const u=new URLSearchParams;u.append("id",d),u.append("nama_brg",t),u.append("nama_operator",a.nama_operator),u.append("nama_peminjam",a.nama_peminjam),u.append("kelas_peminjam",a.kelas_peminjam),u.append("jurusan_peminjam",a.jurusan_peminjam),u.append("tanggal_pinjam",i),u.append("status",o),fetch("http://localhost:3000/peminjaman/",{method:"POST",headers:l,body:u}).then(p=>{console.log(p.statusText),this.EditAddOk=!0,this.GetData(),fetch("http://localhost:3000/barang/?nama_brg="+t).then(b=>b.json()).then(b=>{this.barang=b[0],this.form_brg.id=this.barang.id,this.form_brg.nama_brg=this.barang.nama_brg,this.form_brg.jenis_brg=this.barang.jenis_brg,this.form_brg.stock=this.barang.stock,this.KurangStokBarang(e)}).catch(b=>{console.error(b)})}).catch(p=>{this.EditAddGagal=!0,console.error(p)})},Delete(a){const e=this.form.id=a.id,d={method:"DELETE"};fetch("http://localhost:3000/peminjaman/"+e,d).then(o=>{console.log(o.statusText),this.GetData(),this.EditAddOk=!0}).catch(o=>{this.EditAddGagal=!0,console.error(o)})},AddPengembalian(a,e){const d=this.totalpengembalian+1,o=new Date,t=o.getFullYear();let i=o.getMonth()+1,l=o.getDate();l<10&&(l="0"+l),i<10&&(i="0"+i);const u=l+"-"+i+"-"+t,k=new Headers;k.append("Content-Type","application/x-www-form-urlencoded");const p=new URLSearchParams;p.append("id",d),p.append("nama_brg",a.nama_brg),p.append("nama_operator",a.nama_operator),p.append("nama_peminjam",a.nama_peminjam),p.append("kelas_peminjam",a.kelas_peminjam),p.append("jurusan_peminjam",a.jurusan_peminjam),p.append("tanggal_pinjam",a.tanggal_pinjam),p.append("tanggal_kembali",u),fetch("http://localhost:3000/pengembalian/",{method:"POST",headers:k,body:p}).then(V=>{console.log(V.statusText),this.GetData(),this.TambahStokBarang(e)}).catch(V=>{console.error(V)})},KurangStokBarang(a){const e=this.form_brg.stock-1,d=new Headers;d.append("Content-Type","application/x-www-form-urlencoded");const o=new URLSearchParams;o.append("id",a.id),o.append("nama_brg",a.nama_brg),o.append("jenis_brg",a.jenis_brg),o.append("stock",e);const t={method:"PUT",headers:d,body:o};fetch("http://localhost:3000/barang/"+a.id,t).then(i=>{console.log(i.statusText),this.EditAddOk=!0,this.GetData()}).catch(i=>{console.error(i),this.EditAddGagal=!0})},TambahStokBarang(a){const e=parseInt(this.form_brg.stock)+1,d=new Headers;d.append("Content-Type","application/x-www-form-urlencoded");const o=new URLSearchParams;o.append("id",a.id),o.append("nama_brg",a.nama_brg),o.append("jenis_brg",a.jenis_brg),o.append("stock",e);const t={method:"PUT",headers:d,body:o};fetch("http://localhost:3000/barang/"+a.id,t).then(i=>{console.log(i.statusText),this.EditAddOk=!0,this.GetData()}).catch(i=>{console.error(i),this.EditAddGagal=!0})}}},C=m("h2",{class:"mt-2"},"Data Peminjaman",-1),G=m("thead",null,[m("tr",null,[m("th",{class:"text-left",style:{"background-color":"#6246ea"}},"No"),m("th",{class:"text-left",style:{"background-color":"#6246ea"}}," Nama Barang "),m("th",{class:"text-left",style:{"background-color":"#6246ea"}}," Nama Operator "),m("th",{class:"text-left",style:{"background-color":"#6246ea"}}," Nama Peminjam "),m("th",{class:"text-left",style:{"background-color":"#6246ea"}}," Kelas Peminjam "),m("th",{class:"text-left",style:{"background-color":"#6246ea"}}," Jurusan Peminjam "),m("th",{class:"text-left",style:{"background-color":"#6246ea"}}," Tanggal Peminjam "),m("th",{class:"text-left",style:{"background-color":"#6246ea"}},"Status"),m("th",{class:"text-left",style:{"background-color":"#6246ea"}},"Opsi")])],-1),B=m("h2",null,"Tambah Peminjaman",-1),N=m("h2",null,"Edit Peminjaman",-1);function H(a,e,d,o,t,i){return y(),U(v,{style:{"background-color":"#fffffe"}},{default:s(()=>[C,n(r,{class:"d-flex justify-end mb-2",flat:"",tile:"",style:{"background-color":"#fffffe"}},{default:s(()=>[n(g,{style:{"background-color":"#58e45e"},onClick:e[0]||(e[0]=l=>t.dialog3=!0)},{default:s(()=>[n(A,{style:{color:"#2b2c34"},left:""},{default:s(()=>[h(" mdi-plus-thick ")]),_:1}),h(" Tambah Peminjaman ")]),_:1})]),_:1}),n(r,null,{default:s(()=>[n(O,{"fixed-header":"",height:"448",style:{"background-color":"rgb(196, 200, 253)"}},{default:s(()=>[G,m("tbody",null,[(y(!0),w(E,null,D(t.peminjaman,l=>(y(),w("tr",{key:l.id},[m("td",null,f(l.id),1),m("td",null,f(l.nama_brg),1),m("td",null,f(l.nama_operator),1),m("td",null,f(l.nama_peminjam),1),m("td",null,f(l.kelas_peminjam),1),m("td",null,f(l.jurusan_peminjam),1),m("td",null,f(l.tanggal_pinjam),1),m("td",null,f(l.status),1),m("td",null,[n(g,{onClick:u=>i.GetDataId(l),color:"#58e45e",style:{color:"#2b2c34"},width:"85",class:"mt-1"},{default:s(()=>[h(" EDIT ")]),_:2},1032,["onClick"]),n(g,{onClick:u=>i.Delete(l),class:"mt-1",color:"#ff3232",style:{color:"#2b2c34"}},{default:s(()=>[h(" HAPUS ")]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1}),n(j,{modelValue:t.dialog3,"onUpdate:modelValue":e[10]||(e[10]=l=>t.dialog3=l),width:"700"},{default:s(()=>[n(r,{flat:"",color:"#6246EA",class:"pa-5 mx-auto",width:"650",height:"auto"},{default:s(()=>[n(x,null,{default:s(()=>[B,n(P)]),_:1}),m("div",null,[n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(_,{class:"ml-3 mr-3",items:t.item_barang,"item-title":"nama_brg",modelValue:t.nama_barang,"onUpdate:modelValue":e[1]||(e[1]=l=>t.nama_barang=l),label:"Nama Barang"},null,8,["items","modelValue"])]),_:1}),n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(_,{class:"ml-3 mr-3",items:t.item_operator,"item-title":"username",modelValue:t.form.nama_operator,"onUpdate:modelValue":e[2]||(e[2]=l=>t.form.nama_operator=l),label:"Nama Operator"},null,8,["items","modelValue"])]),_:1}),n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(c,{modelValue:t.form.nama_peminjam,"onUpdate:modelValue":e[3]||(e[3]=l=>t.form.nama_peminjam=l),label:"Nama Peminjam",class:"ml-3 mr-3"},null,8,["modelValue"])]),_:1}),n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(c,{modelValue:t.form.kelas_peminjam,"onUpdate:modelValue":e[4]||(e[4]=l=>t.form.kelas_peminjam=l),label:"Kelas Peminjam",class:"ml-3 mr-3"},null,8,["modelValue"])]),_:1}),n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(c,{modelValue:t.form.jurusan_peminjam,"onUpdate:modelValue":e[5]||(e[5]=l=>t.form.jurusan_peminjam=l),label:"Jurusan Peminjam",class:"ml-3 mr-3"},null,8,["modelValue"])]),_:1}),n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(c,{modelValue:t.tanggal_pinjam,"onUpdate:modelValue":e[6]||(e[6]=l=>t.tanggal_pinjam=l),label:"Tanggal Peminjam",class:"ml-3 mr-3",disabled:""},null,8,["modelValue"])]),_:1}),n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(c,{modelValue:t.status,"onUpdate:modelValue":e[7]||(e[7]=l=>t.status=l),label:"Status",class:"ml-3 mr-3",disabled:""},null,8,["modelValue"])]),_:1}),n(g,{class:"mt-2",width:"200",type:"submit",color:"#58e45e",style:{color:"#2b2c34"},onClick:e[8]||(e[8]=l=>i.Add(t.form,t.form_brg))},{default:s(()=>[h(" Simpan ")]),_:1}),n(g,{class:"mt-2 ml-2",width:"150",color:"#ff3232",style:{color:"#2b2c34"},onClick:e[9]||(e[9]=l=>t.dialog3=!1)},{default:s(()=>[h(" Kembali ")]),_:1})])]),_:1})]),_:1},8,["modelValue"]),n(j,{modelValue:t.dialog2,"onUpdate:modelValue":e[20]||(e[20]=l=>t.dialog2=l),width:"700"},{default:s(()=>[n(r,{flat:"",color:"#6246EA",class:"pa-5 mx-auto",width:"650",height:"auto"},{default:s(()=>[n(x,null,{default:s(()=>[N,n(P)]),_:1}),m("div",null,[n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(_,{class:"ml-3 mr-3",items:t.item_barang,"item-title":"nama_brg",modelValue:t.form.nama_brg,"onUpdate:modelValue":e[11]||(e[11]=l=>t.form.nama_brg=l),label:"Nama Barang",hint:"Note : Merubah Nama Pinjaman Barang Yang Dipinjam Tidak Akan Mengurangi Stok Barang"},null,8,["items","modelValue"])]),_:1}),n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(_,{class:"ml-3 mr-3",items:t.item_operator,"item-title":"username",modelValue:t.form.nama_operator,"onUpdate:modelValue":e[12]||(e[12]=l=>t.form.nama_operator=l),label:"Nama Operator"},null,8,["items","modelValue"])]),_:1}),n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(c,{modelValue:t.form.nama_peminjam,"onUpdate:modelValue":e[13]||(e[13]=l=>t.form.nama_peminjam=l),label:"Nama Peminjam",class:"ml-3 mr-3"},null,8,["modelValue"])]),_:1}),n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(c,{modelValue:t.form.kelas_peminjam,"onUpdate:modelValue":e[14]||(e[14]=l=>t.form.kelas_peminjam=l),label:"Kelas Peminjam",class:"ml-3 mr-3"},null,8,["modelValue"])]),_:1}),n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(c,{modelValue:t.form.jurusan_peminjam,"onUpdate:modelValue":e[15]||(e[15]=l=>t.form.jurusan_peminjam=l),label:"Jurusan Peminjam",class:"ml-3 mr-3"},null,8,["modelValue"])]),_:1}),n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(c,{modelValue:t.form.tanggal_pinjam,"onUpdate:modelValue":e[16]||(e[16]=l=>t.form.tanggal_pinjam=l),label:"Tanggal Peminjam",class:"ml-3 mr-3"},null,8,["modelValue"])]),_:1}),n(r,{tile:"",elevation:"4",class:"mt-2 rounded d-flex justify-center",width:"100%"},{default:s(()=>[n(_,{class:"ml-3 mr-3",modelValue:t.form.status,"onUpdate:modelValue":e[17]||(e[17]=l=>t.form.status=l),items:["Sudah Dikembalikan","Belum Dikembalikan"],label:"Status"},null,8,["modelValue"])]),_:1}),n(g,{class:"mt-2",width:"200",type:"submit",color:"#58e45e",style:{color:"#2b2c34"},onClick:e[18]||(e[18]=l=>i.Update(t.form,t.form_brg))},{default:s(()=>[h(" Simpan ")]),_:1}),n(g,{class:"mt-2 ml-2",width:"150",color:"#ff3232",style:{color:"#2b2c34"},onClick:e[19]||(e[19]=l=>t.dialog2=!1)},{default:s(()=>[h(" Kembali ")]),_:1})])]),_:1})]),_:1},8,["modelValue"]),n(j,{modelValue:t.EditAddOk,"onUpdate:modelValue":e[22]||(e[22]=l=>t.EditAddOk=l),width:"auto"},{default:s(()=>[n(g,{class:"ma-4",width:"60",height:"60",color:"#58e45e",icon:"mdi-check",onClick:e[21]||(e[21]=l=>(t.EditAddOk=!1,t.dialog2=!1,t.dialog3=!1))})]),_:1},8,["modelValue"]),n(j,{modelValue:t.EditAddGagal,"onUpdate:modelValue":e[24]||(e[24]=l=>t.EditAddGagal=l),width:"auto"},{default:s(()=>[n(g,{class:"ma-4",width:"60",height:"60",color:"#ff3232",icon:"mdi-cancel",onClick:e[23]||(e[23]=l=>(t.EditAddGagal=!1,t.dialog2=!1,t.dialog3=!1))})]),_:1},8,["modelValue"])]),_:1})}const R=T(S,[["render",H]]);export{R as default};
