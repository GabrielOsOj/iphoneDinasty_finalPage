import{a as k}from"./chunk-462B7C5C.js";import{a as A,b as j}from"./chunk-E434NUDV.js";import{a as B}from"./chunk-YTVH4632.js";import"./chunk-USXJB6JH.js";import{a as F,b as T}from"./chunk-FF55KK2U.js";import{$ as l,A as r,B as d,G as c,I as _,J as y,K as M,L as o,M as i,N as p,Q as O,T as a,U as x,aa as w,ea as D,g as P,ga as S,h as v,j as g,m as b,n as m,qa as E,ua as I,w as C,wa as q,xa as z,y as f}from"./chunk-YQY7S4CO.js";var R=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["app-spacer"]],standalone:!0,features:[l],decls:1,vars:0,consts:[[1,"ultSpacer"]],template:function(t,s){t&1&&p(0,"div",0)},styles:[".ultSpacer[_ngcontent-%COMP%]{height:50px}"]})}}return e})();var X=()=>["/product","iPhone 16"],V=(()=>{class e{constructor(n){this.route=n,this._changeDetector=b(S),this._applicationRef=b(D),this.imgs={url:"/static_imgs/banners/banner_light.png",name:"Banner White",alt:"Lighting banner"},this.phones=[{url:"/bannersAllPictures/ip14_midnight_special.webp",name:"iphone16",alt:"iphone14"},{url:"/bannersAllPictures/all_colors_ip12.webp",name:"iphone15",alt:"ipone12"},{url:"/bannersAllPictures/ip14_pro_gold_backSide.webp",name:"iphone16",alt:"ipone16ProMax"}],this.index=0,this.counter=0,this._applicationRef.isStable.pipe(v(t=>t)).subscribe(()=>{P(1e3).subscribe(()=>{this.timerAdmin()})})}timerAdmin(){this.counter==10&&(this.nextImg(),this.counter=0),this.counter++}nextImg(){this.index=(this.index+1)%this.phones.length,this._changeDetector.detectChanges()}restartClock(){this.counter=0}goToIp16(){console.log("algo"),this.route.navigate(["/","product",""])}static{this.\u0275fac=function(t){return new(t||e)(d(q))}}static{this.\u0275cmp=m({type:e,selectors:[["app-banner"]],standalone:!0,features:[l],decls:8,vars:2,consts:[[1,"banner"],[1,"banner-title"],[1,"banner-subtitle"],[1,"banner-button",3,"routerLink"]],template:function(t,s){t&1&&(o(0,"div",0)(1,"h1",1),a(2,"iPhone 16"),i(),o(3,"p",2),a(4,"Consulta la disponibilidad del nuevo IPhone 16"),i(),o(5,"button",3)(6,"a"),a(7,"ver mas"),i()()()),t&2&&(r(5),c("routerLink",w(1,X)))},dependencies:[z],styles:[".banner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;height:100vh;padding:20px;background:url(/banner_ip16_mediana.jpg) no-repeat center center;background-size:cover}.banner-title[_ngcontent-%COMP%]{font-size:5.5rem;font-weight:700;color:#fff;margin-bottom:250px}.banner-subtitle[_ngcontent-%COMP%]{font-size:1.8rem;color:#dcdcdc;margin:10px 0}.banner-button[_ngcontent-%COMP%]{background-color:#4424fc;color:#fff;font-size:1rem;font-weight:700;padding:10px 20px;border:none;border-radius:20px;cursor:pointer;transition:background-color .3s ease}.banner-button[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.banner-button[_ngcontent-%COMP%]:hover{background-color:#006bcc}@media (min-width: 834px) and (max-width: 1194px){.banner-title[_ngcontent-%COMP%]{margin-bottom:350px}}@media (min-width: 1194px) and (max-width: 834px){.banner-title[_ngcontent-%COMP%]{margin-bottom:350px}}@media (min-width: 1024px) and (max-width: 1366px){.banner-title[_ngcontent-%COMP%]{margin-bottom:250px}.banner-subtitle[_ngcontent-%COMP%]{margin-bottom:10px}.banner-button[_ngcontent-%COMP%]{margin-bottom:100px}}@media (min-width: 1366px) and (max-width: 1024px){.banner-title[_ngcontent-%COMP%]{margin-bottom:350px}}@media (max-width: 768px){.banner-title[_ngcontent-%COMP%]{font-size:3rem}.banner-subtitle[_ngcontent-%COMP%]{font-size:1.3rem}.banner-button[_ngcontent-%COMP%]{font-size:1.3rem;padding:8px 16px}}@media (max-width: 480px){.banner-title[_ngcontent-%COMP%]{font-size:3rem}.banner-subtitle[_ngcontent-%COMP%]{font-size:1.3rem}.banner-button[_ngcontent-%COMP%]{font-size:1.3rem;padding:6px 12px}}@media (max-width: 480px){.banner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;height:70vh;padding:20px;background-size:cover}}"]})}}return e})();var G=(()=>{class e{constructor(n){this.route=n,this.bannerVi=C.required()}ngAfterViewInit(){}onVideoEnd(n){n.target.pause()}static{this.\u0275fac=function(t){return new(t||e)(d(I))}}static{this.\u0275cmp=m({type:e,selectors:[["app-video-full"]],inputs:{bannerVi:[1,"bannerVi"]},standalone:!0,features:[l],decls:3,vars:4,consts:[[1,"banner-container"],[1,"banner-video",3,"autoplay","muted","playsInline"],["type","video/mp4",3,"src"]],template:function(t,s){t&1&&(o(0,"div",0)(1,"video",1),p(2,"source",2),i()()),t&2&&(r(),c("autoplay",!0)("muted",!0)("playsInline",!0),r(),c("src",s.bannerVi().url,f))},dependencies:[E],styles:[".banner-container[_ngcontent-%COMP%]{width:100%;height:85vh;overflow:hidden;position:relative}.banner-video[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;background-color:#000}@media (max-width: 600px){.banner-container[_ngcontent-%COMP%]{display:none}.banner-container[_ngcontent-%COMP%]{height:50vh}.banner-video[_ngcontent-%COMP%]{object-fit:contain}}"]})}}return e})();var L=(()=>{class e{constructor(){this.url="icons/info-section/",this.Icons=[{url:this.url+"bank.webp",name:"bank"},{url:this.url+"box.webp",name:"box"},{url:this.url+"shield.webp",name:"shield"},{url:this.url+"customer-support.webp",name:"customer-support"}]}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["app-info"]],standalone:!0,features:[l],decls:30,vars:4,consts:[[1,"info-seccion"],[1,"info-grid"],[1,"info-item"],["loading","lazy","alt","M\xE9todos de Pago",1,"info-icon",3,"src"],["loading","lazy","alt","Opciones de Env\xEDo",1,"info-icon",3,"src"],["loading","lazy","alt","Garant\xEDa",1,"info-icon",3,"src"],["loading","lazy","alt","Soporte",1,"info-icon",3,"src"]],template:function(t,s){t&1&&(o(0,"section",0)(1,"div",1)(2,"div",2),p(3,"img",3),o(4,"h3"),a(5,"M\xFAltiples M\xE9todos de Pago"),i(),o(6,"p"),a(7,"Aceptamos pagos con tarjetas de cr\xE9dito, USD, efectivo, d\xE9bito, transferencias bancarias y USDT."),i()(),o(8,"div",2),p(9,"img",4),o(10,"h3"),a(11,"Env\xEDo a Todo el Pa\xEDs"),i(),o(12,"p"),a(13,"Enviamos a todas las regiones del pa\xEDs. "),p(14,"br"),a(15," (via Andreani)"),i()(),o(16,"div",2),p(17,"img",5),o(18,"h3"),a(19,"Garant\xEDa"),i(),o(20,"p"),a(21,"Nuestros productos cuentan con garant\xEDa de devoluci\xF3n y cambio (Salvo los usados). Compra con total seguridad."),i()(),o(22,"div",2),p(23,"img",6),o(24,"h3"),a(25,"Soporte"),i(),o(26,"p"),a(27,"Estamos disponibles para ayudarte, (lunes a viernes de 10am. a 18pm. "),p(28,"br"),a(29," y sabados de 10am. a 13pm.) "),i()()()()),t&2&&(r(3),c("src",s.Icons[0].url,f),r(6),c("src",s.Icons[1].url,f),r(8),c("src",s.Icons[2].url,f),r(6),c("src",s.Icons[3].url,f))},styles:[".info-seccion[_ngcontent-%COMP%]{text-align:center;padding:40px 20px;background-color:#faf8f8}.info-seccion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:40px;color:#333}.info-grid[_ngcontent-%COMP%]{width:90vw;margin:auto;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}.info-item[_ngcontent-%COMP%]{flex:1;padding:20px;border-radius:10px;text-align:center;margin:5px}.info-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin:20px 0;color:#333}.info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#666}.info-icon[_ngcontent-%COMP%]{width:6.25rem;height:auto}@media (max-width: 768px){.info-grid[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.info-item[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}}"]})}}return e})();var U=[{question:"\xBFQu\xE9 modelos de iPhone est\xE1n disponibles?",answer:"Tenemos disponibles los modelos iPhone 12, iPhone 13, iPhone 14, iPhone 15, iPhone 16 y sus versiones Plus y Pro."},{question:"\xBFCu\xE1nto tiempo de garant\xEDa tiene mi iPhone?",answer:"Nuestros iPhones sellados tienen una garant\xEDa de un a\xF1o, mientras que los tester premium selecionados cuentan con 30 dias de garantia. (Solo los equipos usados no cuentan con dicha garantia)"},{question:"\xBFEl iPhone es desbloqueado?",answer:"S\xED, todos nuestros iPhones son desbloqueados y son compatibles con cualquier operador m\xF3vil."},{question:"\xBFEl iPhone incluye accesorios?",answer:"El iPhone incluye un cable de carga. Los accesorios adicionales como fundas, aud\xEDfonos y otros, deben ser comprados por separado."},{question:"\xBFCu\xE1nto tiempo tarda en llegar mi pedido?",answer:"El tiempo de entrega depende de tu ubicaci\xF3n. Generalmente, los pedidos se entregan en un plazo de 3 a 5 d\xEDas h\xE1biles (via Andreani) o podes retirarlo en nuestra oficina."},{question:"\xBFSolamente venden telefonos?",answer:"Tambi\xE9n contamos con una amplia gama de productos dise\xF1ados para complementar tu experiencia. Desde MacBooks, hasta AirPods Pro y Max, iPads, Apple Watch , y cargadores."}];var H=(()=>{class e{constructor(){}fnGetFaqData(){return U}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function te(e,$){if(e&1&&(o(0,"details")(1,"summary"),a(2),i(),o(3,"p"),a(4),i()()),e&2){let n=$.$implicit;r(2),x(n.question),r(2),x(n.answer)}}var W=(()=>{class e{constructor(n){this.faqSv=n,this.faqData=[],this.faqData=this.faqSv.fnGetFaqData()}static{this.\u0275fac=function(t){return new(t||e)(d(H))}}static{this.\u0275cmp=m({type:e,selectors:[["app-faq"]],standalone:!0,features:[l],decls:5,vars:0,consts:[[1,"faq-section"]],template:function(t,s){t&1&&(o(0,"section",0)(1,"h2"),a(2,"Respondemos tus dudas"),i(),y(3,te,5,2,"details",null,_),i()),t&2&&(r(3),M(s.faqData))},styles:['.faq-section[_ngcontent-%COMP%]{max-width:70%;margin:40px auto;padding:30px;border-radius:1px;transition:box-shadow .3s ease}.faq-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-size:2em;color:#222;margin-bottom:40px;letter-spacing:.5px;text-transform:uppercase}details[_ngcontent-%COMP%]{margin-bottom:20px;padding:15px 20px;border-bottom:1px solid #eeeeee;transition:background-color .3s ease,border .3s ease}details[open][_ngcontent-%COMP%]{border-color:#ccc}details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{font-size:1.3em;font-weight:700;color:#333;cursor:pointer;padding-right:30px;position:relative;transition:color .3s ease;text-align:start}details[_ngcontent-%COMP%]:hover   summary[_ngcontent-%COMP%]{color:#007bff}details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:after{content:"\\2795";font-size:1.2em;position:absolute;right:0;top:50%;transform:translateY(-50%);color:#007bff;transition:transform .3s ease,color .3s ease}details[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:after{content:"\\2796";color:#d9534f}details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px;font-size:1.2em;color:#666;line-height:1.6;padding-left:20px;border-left:3px solid #007bff;text-align:start}@media screen and (max-width: 768px){.faq-section[_ngcontent-%COMP%]{max-width:95%;padding:20px}details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{font-size:1.2em}details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1em}}@media screen and (max-width: 480px){.faq-section[_ngcontent-%COMP%]{padding:15px}details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{font-size:1.1em}details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em}}']})}}return e})();var h=[{title:"Dinastia iPhone",text:"En nuestra tienda encontrar\xE1s la mejor selecci\xF3n de iPhones, desde modelos nuevos sellados hasta tester premium seleccionados y usados, ideales para cada necesidad. Ofrecemos ventas tanto minoristas como mayoristas, con m\xFAltiples m\xE9todos de pago y opciones de env\xEDo por Andreani o retiro en sucursal. Para consultas minoristas, cont\xE1ctanos por Instagram, y para mayoristas, escr\xEDbenos por WhatsApp. \xA1Te esperamos!",urlImg:"/bannersAllPictures/all_colors_ip12.webp"},{title:"iPhone 13 Potencia y Eficiencia",text:"Conoce el iPhone 13, con el eficiente chip A15 Bionic, duraci\xF3n de bater\xEDa mejorada y un sistema de c\xE1maras avanzado para capturar cada momento.",urlImg:"/bannersAllPictures/ip13_blue_front.png"},{title:"iPhone 14 Tecnolog\xEDa de \xDAltima Generaci\xF3n",text:"El iPhone 14 mantiene el dise\xF1o similar al 13, pero con mejoras significativas en el sistema de c\xE1maras y la duraci\xF3n de la bater\xEDa. Tambi\xE9n introduce el sistema de emergencias por sat\xE9lite para situaciones cr\xEDticas donde no hay cobertura celular.",urlImg:"/bannersAllPictures/ip14_midnight_special.webp"},{title:"\xA1Mucho m\xE1s que iPhones!",text:" Tambi\xE9n contamos con una amplia gama de productos dise\xF1ados para complementar tu experiencia. Desde MacBooks, hasta AirPods Pro y Max, iPads, Apple Watch , y cargadores.",urlImg:"/bannersAllPictures/ip15_yelow_back.jpg"},{title:"iPhone 16 Futuro en tus Manos",text:"Con el iPhone 16, disfruta de un dise\xF1o revolucionario, tecnolog\xEDa de \xFAltima generaci\xF3n y el chip A17 para el m\xE1ximo rendimiento.",urlImg:"/bannersAllPictures/ip16_proMax_desertTitanium_front.jpg"}];var N=(()=>{class e{constructor(){}fnGetRandomData(){return h[this.getRandomData(h.length)]}fnGetManyRandomData(n){return h.slice(0,n)}fnGetPhoneData(n){return h[n]}getRandomData(n){return Math.floor(Math.random()*n)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Q=[{name:"ip16_home",url:"/videos/ip16_presentation.mp4"},{name:"ip12",url:""},{name:"ip16",url:""},{name:"ip16",url:""}];var Y=(()=>{class e{constructor(){}fnGetBannerViData(){return Q}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Ae=(()=>{class e{constructor(n,t){this.bannerData=n,this.videoBanner=t,this.bannersDataL=[],this.videoT={},this.bannersDataL[0]=n.fnGetPhoneData(0),this.bannersDataL[1]=n.fnGetPhoneData(2),this.bannersDataL[2]=n.fnGetPhoneData(3),this.videoT=this.videoBanner.fnGetBannerViData()[0]}goTo(n){document.getElementById(n)?.scrollIntoView({behavior:"smooth",block:"end"})}static{this.\u0275fac=function(t){return new(t||e)(d(N),d(Y))}}static{this.\u0275cmp=m({type:e,selectors:[["app-home-component"]],standalone:!0,features:[l],decls:13,vars:6,consts:[[3,"goToEmitter","isPageOnMain"],["id","top"],[3,"toRight","bannerDataToLoad"],["id","allProducts"],[3,"bannerVi"],["id","info"],["id","faq"]],template:function(t,s){t&1&&(o(0,"app-header",0),O("goToEmitter",function(J){return s.goTo(J)}),i(),p(1,"app-banner",1)(2,"app-spacer")(3,"app-img-text",2)(4,"app-family-carrousel",3)(5,"app-spacer")(6,"app-img-text",2)(7,"app-back-top")(8,"app-video-full",4)(9,"app-info",5)(10,"app-faq",6)(11,"app-wss")(12,"app-footer")),t&2&&(c("isPageOnMain",!0),r(3),c("toRight",!1)("bannerDataToLoad",s.bannersDataL[0]),r(3),c("toRight",!0)("bannerDataToLoad",s.bannersDataL[1]),r(2),c("bannerVi",s.videoT))},dependencies:[F,T,R,V,k,B,L,W,A,G,j]})}}return e})();export{Ae as HomeComponentComponent};
