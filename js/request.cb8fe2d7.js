(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["request"],{"293a":function(e,t,a){"use strict";a.r(t);a("99af"),a("b0c0");var s=a("7a23"),i=Object(s["G"])("data-v-3179d7bc");Object(s["t"])("data-v-3179d7bc");var n={class:"container-fluid p-0 position-relative"},r=Object(s["h"])("div",{class:"bgFilter"},null,-1),c={class:"innerContainer"},o={class:"chatBody p-3"},l={class:"sendBody"},d={class:"sendBody__text"},u={class:"form-floating formTextArea"},b=Object(s["h"])("label",{for:"floatingTextarea2"},"Xabar yuborish...",-1),h=Object(s["h"])("i",{class:"fas fa-arrow-circle-up"},null,-1);Object(s["r"])();var p=i((function(e,t,a,i,p,m){var f=Object(s["x"])("messageCard");return Object(s["q"])(),Object(s["d"])("div",n,[r,Object(s["h"])("div",c,[Object(s["h"])("div",o,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(p.messages,(function(e,t){return Object(s["q"])(),Object(s["d"])("div",{key:t,class:"message mt-1"},[Object(s["h"])(f,{userUs:e.id==p.user_id,vaqt:"".concat(e.vaqt.soat,":").concat(e.vaqt.minut),user:e.name,title:e.title},null,8,["userUs","vaqt","user","title"])])})),128))]),Object(s["h"])("div",l,[Object(s["h"])("div",d,[Object(s["h"])("div",u,[Object(s["E"])(Object(s["h"])("textarea",{onKeyup:t[1]||(t[1]=Object(s["F"])((function(){return m.pushMessage&&m.pushMessage.apply(m,arguments)}),["enter"])),"onUpdate:modelValue":t[2]||(t[2]=function(e){return p.newMessage=e}),type:"message",placeholder:"Xabar yuborish...",class:"form-control",id:"floatingTextarea2"},null,544),[[s["B"],p.newMessage]]),b]),Object(s["h"])("button",{onClick:t[3]||(t[3]=function(){return m.pushMessage&&m.pushMessage.apply(m,arguments)}),type:"submit",class:"btn btn-primary"},[h])])])])])})),m=Object(s["G"])("data-v-1d11e75e");Object(s["t"])("data-v-1d11e75e");var f={class:"px-3"};Object(s["r"])();var y=m((function(e,t,a,i,n,r){return Object(s["q"])(),Object(s["d"])("div",{class:{wrapper:a.userUs}},[Object(s["h"])("div",{class:{"messageCard-us border-success":a.userUs,"messageCard bg-light border-secondary":!a.userUs}},[Object(s["g"])(Object(s["z"])(r.chiqar())+" ",1),Object(s["E"])(Object(s["h"])("h6",{class:"px-3 py-2 m-0 text-success"},Object(s["z"])(a.user),513),[[s["C"],!a.userUs]]),Object(s["h"])("p",{class:[{"pt-2":a.userUs},"m-0 px-3"]},Object(s["z"])(a.title),3),Object(s["h"])("span",f,Object(s["z"])(a.vaqt),1)],2)],2)})),v=a("53ca"),O={created:function(){},props:{user:String,title:String,vaqt:String,userUs:Boolean},data:function(){return{}},methods:{chiqar:function(){console.log(Object(v["a"])(this.userUs))}}};a("618d");O.render=y,O.__scopeId="data-v-1d11e75e";var j=O,g=new Date,w={components:{messageCard:j},created:function(){},data:function(){return{user_id:15,newMessage:"",vaqtOnly:g,messages:[{id:12,name:"Foydalanuvchi nomi",vaqt:{yil:"2021",oy:"8",soat:"10",minut:"10"},title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, sed."},{id:13,name:"Foydalanuvchi nomi",vaqt:{yil:"2021",oy:"8",soat:"10",minut:"10"},title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, sed."},{id:15,name:"Foydalanuvchi nomi",vaqt:{yil:"2021",oy:"8",soat:"10",minut:"10"},title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, sed."},{id:10,name:"Foydalanuvchi nomi",vaqt:{yil:"2021",oy:"8",soat:"10",minut:"10"},title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, sed."},{id:10,name:"Foydalanuvchi nomi",vaqt:{yil:"2021",oy:"8",soat:"10",minut:"10"},title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, sed."},{id:15,name:"Foydalanuvchi nomi",vaqt:{yil:"2021",oy:"8",soat:"10",minut:"10"},title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, sed."}]}},props:{},methods:{pushMessage:function(){""!==this.newMessage&&(this.messages.unshift({id:this.user_id,name:"habibullo",vaqt:{yil:(new Date).getFullYear(),oy:(new Date).getMonth(),soat:(new Date).getHours(),minut:(new Date).getMinutes()},title:this.newMessage}),this.newMessage="")}}};a("7beb");w.render=p,w.__scopeId="data-v-3179d7bc";t["default"]=w},"41bd":function(e,t,a){"use strict";a.r(t);var s=a("7a23"),i=Object(s["G"])("data-v-543f272a");Object(s["t"])("data-v-543f272a");var n={class:"container-fluid d-flex align-items-center justify-content-center"},r={class:"cardSignUp container"},c=Object(s["f"])('<div class="lenta" data-v-543f272a><span class="span1" data-v-543f272a></span><span class="span2" data-v-543f272a></span><span class="span3" data-v-543f272a></span><h1 class="mt-4" data-v-543f272a>Elektrom pochtani ro&#39;yhatdan o&#39;tkazish</h1></div>',1),o=Object(s["h"])("div",{class:"alert alert-info mx-4 my-2",role:"alert"}," Ro'yhatdan o'tish uchun elektron pochtangizni kiriting, biz pochta manzilingizga tasdiqlash kodini jo'natamiz ",-1),l={class:"p-4"},d={class:"input-group mb-3"},u={key:0,class:"alert alert-success border-success my-2",role:"alert"},b={key:1,class:"alert alert-danger",role:"alert"},h={key:2,class:"alert alert-danger",role:"alert"},p={class:"input-group mb-3"},m={key:3,class:"alert alert-danger",role:"alert"},f=Object(s["g"])(" Davom etish");Object(s["r"])();var y=i((function(e,t,a,y,v,O){var j=Object(s["x"])("router-link");return Object(s["q"])(),Object(s["d"])("div",n,[Object(s["h"])("div",r,[c,o,Object(s["h"])("form",l,[Object(s["h"])("div",d,[Object(s["E"])(Object(s["h"])("input",{onKeyup:t[1]||(t[1]=Object(s["F"])((function(){return O.sendTo&&O.sendTo.apply(O,arguments)}),["enter"])),"onUpdate:modelValue":t[2]||(t[2]=function(e){return v.regEmail=e}),class:[{"is-valid":v.sendKey,"is-invalid":v.emailError||v.doubleEmail},"form-control"],disabled:v.sendKey&&!v.emailError&&!v.doubleEmail,type:"email",placeholder:"Elektron pochta","aria-label":"Elektron pochta","aria-describedby":"button-addon2"},null,42,["disabled"]),[[s["B"],v.regEmail]]),Object(s["h"])("button",{onClick:t[3]||(t[3]=function(){return O.sendTo&&O.sendTo.apply(O,arguments)}),class:[{"border-success":v.sendKey,"border-danger":v.emailError||v.doubleEmail},"btn btn-outline-secondary alert-success"],disabled:v.sendKey,type:"button",id:"button-addon2"}," Yuborish ",10,["disabled"])]),v.sendKey?(Object(s["q"])(),Object(s["d"])("div",u," Elektron pochtaga oraqali tasdiqlash kodi jo'natildi. Iltimos tasdiqlash kodini kiriting ")):Object(s["e"])("",!0),v.emailError?(Object(s["q"])(),Object(s["d"])("div",b," Elektron pochtani kiritishda xatolik! ")):Object(s["e"])("",!0),v.doubleEmail?(Object(s["q"])(),Object(s["d"])("div",h," Bunday elektron pochta allaqachon ro'yhatdan o'tgan ")):Object(s["e"])("",!0),Object(s["h"])("div",p,[Object(s["E"])(Object(s["h"])("input",{onKeyup:t[4]||(t[4]=Object(s["F"])((function(){return O.tekshirish&&O.tekshirish.apply(O,arguments)}),["enter"])),disabled:!v.sendKey||v.trueKey,"onUpdate:modelValue":t[5]||(t[5]=function(e){return v.getKey=e}),type:"text",class:[{"is-valid":v.trueKey,"is-invalid":v.falseKey},"form-control"],placeholder:"Tasdiqlash kodi","aria-label":"Tasdiqlash kodi","aria-describedby":"button-addon2"},null,42,["disabled"]),[[s["B"],v.getKey]]),Object(s["h"])("button",{disabled:!v.sendKey||v.trueKey,class:[{"border-danger":v.falseKey,"border-success":v.trueKey},"btn btn-outline-secondary alert-success"],onClick:t[6]||(t[6]=function(){return O.tekshirish&&O.tekshirish.apply(O,arguments)}),type:"button",id:"button-addon2"}," Tasdiqlash ",10,["disabled"])]),v.keyError?(Object(s["q"])(),Object(s["d"])("div",m," Tasdiqlash kodi xato, qayta urunib ko'ring ")):Object(s["e"])("",!0),Object(s["h"])(j,{to:"/sign_up",class:"btn btn-success"},{default:i((function(){return[f]})),_:1})])])])})),v=(a("4de4"),{name:"Test",created:function(){},data:function(){return{regEmail:"",getKey:"",doubleTest:!1,passwordSee:!0,tasdiqlashKodi:"1111",emailError:!1,doubleEmail:!1,keyError:!1,sendKey:!1,trueKey:!1,falseKey:!1,regList:[{email:"hrmxan@gmail.com"},{email:"hrmxanuzm@gmail.com"}]}},props:{},methods:{see1:function(){this.passwordSee=!this.passwordSee,this.passwordSee?this.$refs.inputP.type="password":this.$refs.inputP.type="text"},sendTo:function(){var e=this;if(-1!=this.regEmail.indexOf("@")&&-1!=this.regEmail.indexOf(".")){if(!(this.regEmail.indexOf(".")-this.regEmail.indexOf("@")>0))return;this.regList.filter((function(t){t.email==e.regEmail&&(e.doubleTest=!0)})),this.doubleTest?(this.doubleEmail=!0,this.emailError=!1):(this.sendKey=!0,this.emailError=!1,this.doubleEmail=!1)}else this.emailError=!0},tekshirish:function(){this.getKey==this.tasdiqlashKodi?(this.trueKey=!0,localStorage.setItem("onKey",!0),this.falseKey=!1):(this.trueKey=!1,this.falseKey=!0)}},watch:{regEmail:function(){this.doubleTest=!1},getKey:function(){this.trueKey=!1,this.falseKey=!1}}});a("6eda");v.render=y,v.__scopeId="data-v-543f272a";t["default"]=v},"420f":function(e,t,a){},"618d":function(e,t,a){"use strict";a("420f")},"6eda":function(e,t,a){"use strict";a("eb80")},"7beb":function(e,t,a){"use strict";a("a379")},8148:function(e,t,a){"use strict";a("8b34")},8418:function(e,t,a){"use strict";var s=a("c04e"),i=a("9bf2"),n=a("5c6c");e.exports=function(e,t,a){var r=s(t);r in e?i.f(e,r,n(0,a)):e[r]=a}},"8b34":function(e,t,a){},"99af":function(e,t,a){"use strict";var s=a("23e7"),i=a("d039"),n=a("e8b5"),r=a("861d"),c=a("7b0b"),o=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),b=a("b622"),h=a("2d00"),p=b("isConcatSpreadable"),m=9007199254740991,f="Maximum allowed index exceeded",y=h>=51||!i((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),v=u("concat"),O=function(e){if(!r(e))return!1;var t=e[p];return void 0!==t?!!t:n(e)},j=!y||!v;s({target:"Array",proto:!0,forced:j},{concat:function(e){var t,a,s,i,n,r=c(this),u=d(r,0),b=0;for(t=-1,s=arguments.length;t<s;t++)if(n=-1===t?r:arguments[t],O(n)){if(i=o(n.length),b+i>m)throw TypeError(f);for(a=0;a<i;a++,b++)a in n&&l(u,b,n[a])}else{if(b>=m)throw TypeError(f);l(u,b++,n)}return u.length=b,u}})},a379:function(e,t,a){},e6d1:function(e,t,a){"use strict";a.r(t);var s=a("7a23"),i=Object(s["G"])("data-v-a82799cc");Object(s["t"])("data-v-a82799cc");var n={class:"container-fluid d-flex align-items-center justify-content-center"},r={class:"cardSignUp container"},c=Object(s["f"])('<div class="lenta" data-v-a82799cc><span class="span1" data-v-a82799cc></span><span class="span2" data-v-a82799cc></span><span class="span3" data-v-a82799cc></span><h1 class="mt-4" data-v-a82799cc>ACCAUNT OCHISH UCHUN RO&#39;YHATDAN O&#39;TING</h1></div>',1),o={class:"p-4",style:{"text-align":"left"}},l=Object(s["h"])("div",{class:"mb-3"},[Object(s["h"])("label",{for:"name",class:"form-label"},"Foydalanuvchi nomingiz"),Object(s["h"])("input",{type:"text",class:"form-control",id:"name",placeholder:"Foydalanuvchi nomingiz"})],-1),d=Object(s["h"])("div",{class:"alert alert-danger",role:"alert"}," Mumkun bo'lmagan belgilar kiritildi ",-1),u={class:"mb-3 position-relative"},b=Object(s["h"])("label",{for:"password",class:"form-label"},"Parol yarating",-1),h={class:"position-relative"},p={ref:"inputP",type:"password",class:"form-control",id:"password"},m={class:"mb-3 position-relative"},f=Object(s["h"])("label",{for:"password_return",class:"form-label"},"Parolni takrorlang",-1),y={class:"position-relative"},v={ref:"inputPR",type:"password",class:"form-control",id:"password_return"},O=Object(s["h"])("div",{class:"alert alert-danger",role:"alert"}," Parolni qayta kiritishda xatolik ",-1),j=Object(s["g"])("Ro'yhatdan o'tish");Object(s["r"])();var g=i((function(e,t,a,g,w,k){var q=Object(s["x"])("router-link");return Object(s["q"])(),Object(s["d"])("div",n,[Object(s["h"])("div",r,[c,Object(s["h"])("form",o,[l,d,Object(s["h"])("div",u,[b,Object(s["h"])("div",h,[Object(s["h"])("input",p,null,512),Object(s["h"])("i",{class:{"fas fa-eye":!w.passwordSee,"fas fa-eye-slash":w.passwordSee},onClick:t[1]||(t[1]=function(){return k.see1&&k.see1.apply(k,arguments)})},null,2)])]),Object(s["h"])("div",m,[f,Object(s["h"])("div",y,[Object(s["h"])("input",v,null,512),Object(s["h"])("i",{class:{"fas fa-eye":!w.passwordSee2,"fas fa-eye-slash":w.passwordSee2},onClick:t[2]||(t[2]=function(){return k.see2&&k.see2.apply(k,arguments)})},null,2)])]),O,Object(s["h"])(q,{to:"/chat",class:"btn btn-success"},{default:i((function(){return[j]})),_:1})])])])})),w={name:"Test",created:function(){},data:function(){return{passwordSee:!0,passwordSee2:!0}},props:{},methods:{see1:function(){this.passwordSee=!this.passwordSee,this.passwordSee?this.$refs.inputP.type="password":this.$refs.inputP.type="text"},see2:function(){this.passwordSee2=!this.passwordSee2,this.passwordSee2?this.$refs.inputPR.type="password":this.$refs.inputPR.type="text"}}};a("8148");w.render=g,w.__scopeId="data-v-a82799cc";t["default"]=w},eb80:function(e,t,a){}}]);
//# sourceMappingURL=request.cb8fe2d7.js.map