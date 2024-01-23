"use strict";(self.webpackChunkcar_catalog=self.webpackChunkcar_catalog||[]).push([[857],{5020:(n,e,r)=>{r.d(e,{Z:()=>on});var o,t,l,i,a,s,d,c,p=r(4164),x=r(2791),h=(r(6699),r(168)),u=r(3974),g=r(985),b=r(2978);const m=b.ZP.li(o||(o=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 451px;\n  padding: 5px;\n  border-radius: 20px;\n  box-shadow: 1px 1px 4px lightgray;\n  position: relative;\n  & img {\n    height: 268px;\n    object-position: center;\n    object-fit: contain;\n    transform: scale(1.2);\n    transition: all 0.5s;\n\n    &:hover {\n      transform: scale(1);\n    }\n  }\n"]))),v=b.ZP.div(t||(t=(0,h.Z)(["\n  width: 100%;\n  height: 268px;\n  border-radius: 14px;\n  object-fit: cover;\n  overflow: hidden;\n  margin-bottom: 10px;\n"]))),f=b.ZP.h2(l||(l=(0,h.Z)(['\n  display: flex;\n  font-family: "Manrope-medium";\n  color: var(--name-text);\n  font-size: 16px;\n  margin-bottom: 20px;\n\n  & span:last-child {\n    margin-left: auto;\n  }\n']))),j=b.ZP.span(i||(i=(0,h.Z)(["\n  color: var(--accent-color);\n"]))),y=b.ZP.ul(a||(a=(0,h.Z)(['\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n\n  & li {\n    font-family: "Manrope-regular";\n    font-size: 12px;\n    line-height: 18px;\n  }\n']))),Z=b.ZP.span(s||(s=(0,h.Z)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  cursor: pointer;\n"]))),w=(0,b.ZP)(g.u)(d||(d=(0,h.Z)(["\n &#my-tooltip {\n    background-color: var(--main-bg);\n    border: 1px solid lightgray;\n    border-radius: 15px;\n    color: var(--tags-color);\n  }\n"]))),k=(0,b.ZP)(u.$aX)(c||(c=(0,h.Z)(["\n  &.heart {\n  }\n"])));var P,C,$=r(4420),z=r(1707),X=r(6351);const L=(0,b.F4)(P||(P=(0,h.Z)(["\n    from {\n        transform: translateX(-4em) skewX(-45deg);\n    }\n    to {\n        transform: translateX(335px) skewX(-45deg);\n    }\n"]))),S=b.ZP.button(C||(C=(0,h.Z)(["\n    width: 100%;\n    background-color: var(--accent-color);\n    color: white;\n    padding: 15px 100px;\n    border: none;\n    border-radius: 12px;\n    position: relative;\n    overflow: hidden;\n\n    &:before {\n        display: block;\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 50px;\n        height: 100%;\n        background-color: rgba(255, 255, 255, 0.2);\n        transform: translateX(-4em) skewX(-45deg);\n    }\n\n    &:hover:before {\n        animation: "," 0.5s;\n    }\n"])),L);var F=r(184);const I=n=>{let{title:e,onClick:r}=n;return(0,F.jsx)(S,{type:"button",onClick:r,children:e})},M=n=>{let{car:e}=n;const{img:r,photoLink:o,address:t,make:l,model:i,type:a,year:s,rentalPrice:d,rentalCompany:c,id:p,functionalities:h}=e||{},u=null===t||void 0===t?void 0:t.split(",").reverse().splice(0,2),g=(0,$.I0)(),b=(0,$.v9)(X.A1),[P,C]=(0,x.useState)((()=>null===b||void 0===b?void 0:b.some((n=>n.id===p))));return(0,F.jsxs)(m,{children:[(0,F.jsx)(v,{children:(0,F.jsx)("img",{src:r||o,alt:"car"})}),(0,F.jsxs)(f,{children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{children:l})," \xa0",(0,F.jsx)(j,{children:i}),", ",(0,F.jsx)("span",{children:s})," "]})," ",(0,F.jsx)("span",{children:d})]}),(0,F.jsxs)(y,{children:[null===u||void 0===u?void 0:u.map(((n,e)=>(0,F.jsxs)("li",{children:["\xa0 ",n," | "]},e))),(0,F.jsxs)("li",{children:["\xa0",c," | "]}),(0,F.jsxs)("li",{children:["\xa0 ",a," | "]}),(0,F.jsxs)("li",{children:["\xa0 ",l," | "]}),(0,F.jsxs)("li",{children:["\xa0",p," | "]}),(0,F.jsxs)("li",{children:["\xa0",h?h[0]:""," "]})]}),(0,F.jsx)(I,{title:"Learn more",onClick:()=>{return n=e,document.body.style.overflow="hidden",g((0,z.$)(!0)),void g((0,z.KI)(n));var n}}),(0,F.jsxs)(Z,{"data-tooltip-id":"my-tooltip","data-tooltip-content":P?"Remove from favorites":"Add to favorites",children:[(0,F.jsx)(w,{id:"my-tooltip"}),(0,F.jsx)(k,{className:"heart",size:"25px",onClick:()=>{g(P?(0,z.KV)(p):(0,z.uB)(e)),C(!P)},style:{fill:P&&"blue",color:P?"blue":"white"}})]})]})};var R,E,N,A,B,O,T,D,Q,V=r(4330);const q=b.ZP.div(R||(R=(0,h.Z)(['\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(18, 20, 23, 0.5);\n  backdrop-filter: blur(5px);\n\n  & article {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    position: relative;\n    width: 541px;\n    min-height: 752px;\n    margin: auto;\n    padding: 40px 35px;\n    background-color: var(--main-bg);\n    box-shadow: 1px 1px 4px lightgray;\n    border-radius: 24px;\n  }\n\n  & h2 {\n    font-family: "Manrope-medium";\n    color: var(--name-text);\n    font-size: 18px;\n  }\n\n  & ul {\n    margin-top: 8px;\n    margin-bottom: 8px;\n  }\n\n  & li {\n    display: inline-block;\n    font-family: "Manrope-regular";\n    font-size: 12px;\n    line-height: 16px;\n  }\n']))),K=b.ZP.div(E||(E=(0,h.Z)(["\n  width: 100%;\n  height: 33%;\n  border-radius: 14px;\n  overflow: hidden;\n  margin-bottom: 15px;\n\n  & img {\n    width: 100%;\n  }\n"]))),U=b.ZP.div(N||(N=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 65%;\n"]))),_=b.ZP.p(A||(A=(0,h.Z)(['\n  font-family: "Manrope-regular";\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--name-text);\n']))),J=b.ZP.ul(B||(B=(0,h.Z)(['\n  font-family: "Manrope-regular";\n  font-size: 14px;\n  line-height: 18px;\n  color: var(--name-text);\n\n  & li {\n    color: var(--tags-color);\n    line-height: 18px;\n  }\n']))),Y=b.ZP.ul(O||(O=(0,h.Z)(['\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  font-family: "Manrope-regular";\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--name-text);\n  margin-top: 0;\n\n  & li {\n    color: var(--tags-color);\n    line-height: 18px;\n  }\n']))),G=b.ZP.button(T||(T=(0,h.Z)(["\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  border: none;\n  background: transparent;\n"]))),H=b.ZP.span(D||(D=(0,h.Z)(["\nfont-size: var(--base-font-size);\nfont-weight: 700;\n  color: var(--accent-color);\n"]))),W=b.ZP.a(Q||(Q=(0,h.Z)(["\n  width: fit-content;\n  padding: 12px 50px;\n  background-color: var(--accent-color);\n  border: 1px solid transparent;\n  border-radius: 12px;\n  color: var(--description-text);\n  margin-top: 10px;\n  transition: all 0.5s;\n\n  &:hover {\n    background-color: var(--description-text);\n    color: var(--accent-color);\n    border: 1px solid blue;\n  }\n"]))),nn=()=>{const n=(0,$.v9)(X.ci),{address:e,mileage:r,type:o,id:t,img:l,photoLink:i,make:a,model:s,year:d,engineSize:c,fuelConsumption:p,rentalPrice:h,description:u,accessories:g,functionalities:b,rentalConditions:m}=n||{},v=[...m.split(/ (?=[A-Z])/),"Mileage: ".concat(r.toLocaleString("en")),"Price: ".concat(parseInt(h.replace(/\D/g,""),10),"$")],f=e.split(",").reverse().splice(0,2),j=(0,$.I0)();(0,x.useEffect)((()=>{const n=n=>{"Escape"===n.key&&(document.body.style.overflow="auto",j((0,z.$)(!1)))};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}}),[j]);const y=()=>{document.body.style.overflow="auto",j((0,z.$)(!1))};return(0,F.jsx)(q,{onClick:n=>!n.target.closest("article")&&y(),children:(0,F.jsxs)("article",{children:[(0,F.jsx)(K,{children:(0,F.jsx)("img",{src:l||i,alt:"car"})}),(0,F.jsxs)(U,{children:[(0,F.jsxs)("h2",{children:[a,"\xa0",(0,F.jsx)(H,{children:s}),", ",(0,F.jsx)("span",{children:d})]}),(0,F.jsxs)("ul",{children:[f.map(((n,e)=>(0,F.jsxs)("li",{children:["\xa0 ",n," | "]},e))),(0,F.jsxs)("li",{children:["\xa0 Id: ",t," | "]}),(0,F.jsxs)("li",{children:["\xa0 Year: ",d," | "]}),(0,F.jsxs)("li",{children:["\xa0 Type: ",o," | "]}),(0,F.jsxs)("li",{children:["\xa0 Fuel Consumption: ",p," | "]}),(0,F.jsxs)("li",{children:["\xa0 Engine Size: ",c," "]})]}),(0,F.jsx)(_,{children:u}),(0,F.jsxs)(J,{children:["Accessories and functionalities: ",(0,F.jsx)("br",{}),g.map(((n,e)=>(0,F.jsxs)("li",{children:["\xa0",n," |"]},e))),b.map(((n,e)=>(0,F.jsxs)("li",{children:["\xa0",n," ",e!==b.length-1&&"|"]},e)))]}),(0,F.jsxs)(Y,{children:["Rental Conditions: ",(0,F.jsx)("br",{}),v.map(((n,e)=>(0,F.jsx)("li",{children:n.split(/(\d+)/).map(((n,e)=>isNaN(Number(n))?(0,F.jsx)("span",{children:n},e):(0,F.jsx)(H,{children:n},e)))},e)))]}),(0,F.jsx)(W,{href:"tel:+380730000000",children:"Rental car"})]}),(0,F.jsx)(G,{onClick:y,type:"button",children:(0,F.jsx)(V.QAE,{size:"20"})})]})})};var en;const rn=b.ZP.ul(en||(en=(0,h.Z)(["\ndisplay: grid;\n  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));\n  gap: 29px;\n    margin-bottom: 50px;\n"]))),on=n=>{let{carsForRender:e}=n;const r=(0,$.v9)(X.gP);return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(rn,{children:[null===e||void 0===e?void 0:e.map((n=>(0,F.jsx)(M,{car:n},null===n||void 0===n?void 0:n.id))),r&&(0,p.createPortal)((0,F.jsx)(nn,{}),document.querySelector("#root"))]})})}},4252:(n,e,r)=>{r.r(e),r.d(e,{default:()=>X});var o,t,l,i,a=r(2791),s=r(4420),d=r(4023),c=r(6351),p=r(5020),x=r(1707),h=r(168),u=r(4680),g=r(2978);const b=(0,g.F4)(o||(o=(0,h.Z)(["\n    from {\n        transform: translateX(-150px) skewX(-45deg);\n    }\n    to {\n        transform: translateX(150px) skewX(-45deg);\n    }\n"]))),m=g.ZP.form(t||(t=(0,h.Z)(["\n  display: flex;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  justify-content: center;\n  gap: 18px;\n\n  & label {\n    display: block;\n    margin-bottom: 5px;\n  }\n\n  & input {\n    background-color: #f7f7fb;\n    border: none;\n    padding: 14px 20px;\n    border-radius: 10px;\n    &::placeholder {\n      color: black;\n    }\n  }\n\n  & button {\n    position: relative;\n    overflow: hidden;\n     &:hover:before {\n    animation: "," 0.2s;\n}\n  }\n\n  & button:before{\n    display: block;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100px;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.2);\n    transform: translateX(-150px) skewX(-45deg);\n"])),b),v=(0,g.ZP)(u.ZP)(l||(l=(0,h.Z)(["\n  width: 125px;\n  height: 48px;\n  border-radius: 10px;\n\n  & .css-13cymwt-control {\n    height: 48px;\n    border-radius: 10px;\n  }\n  & .css-1fdsijx-ValueContainer {\n    height: 48px;\n    border-radius: 15px;\n  }\n\n  & .css-1nmdiq5-menu {\n    border-radius: 14px;\n    padding: 14px 8px 14px 18px;\n  }\n"]))),f=g.ZP.button(i||(i=(0,h.Z)(["\n\n  align-self: flex-end;\n  height: 48px;\n  padding: 10px 44px;\n  background-color: var(--accent-color);\n  color: var(--description-text);\n  border: none;\n  border-radius: 15px;\n"])));var j=r(184);const y=[{value:"30",label:"30$"},{value:"40",label:"40$"},{value:"50",label:"50$"},{value:"60",label:"60$"},{value:"70",label:"70$"},{value:"80",label:"80$"},{value:"90",label:"90$"},{value:"100",label:"100$"},{value:"110",label:"110$"},{value:"120",label:"120$"},{value:"130",label:"130$"},{value:"140",label:"140$"},{value:"150",label:"150$"}],Z=()=>{const n=(0,s.I0)(),[e,r]=(0,a.useState)({value:"200"}),[o,t]=(0,a.useState)(""),[l,i]=(0,a.useState)(0),[d,c]=(0,a.useState)(5e5);return(0,j.jsxs)(m,{onSubmit:r=>{r.preventDefault(),n((0,x.P7)({brand:o,selectedOption:e,from:l,to:d}))},children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"#brand",children:" Car brand"}),(0,j.jsx)("input",{name:"brand",type:"text",id:"brand",onChange:n=>t(n.target.value),placeholder:"Enter the text"})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"#select",children:"Price/ 1 hour"}),(0,j.jsx)(v,{id:"select",defaultValue:e,onChange:n=>r(n),options:y,placeholder:"To $"})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"#miles",children:"Car mileage / km"}),(0,j.jsx)("input",{name:"from",type:"number",min:0,step:"10",onChange:n=>i(Number(n.target.value)),placeholder:"from",style:{borderRadius:"12px 2px 2px 12px",borderRight:"1px solid lightgray"}}),(0,j.jsx)("input",{name:"to",type:"number",min:0,step:"10",onChange:n=>c(Number(n.target.value)),placeholder:"to",style:{borderRadius:"2px 12px 12px 2px",borderLeft:"1px solid lightgray"}})]}),(0,j.jsx)(f,{type:"submit",children:"Search"})]})},w=()=>(0,j.jsx)("div",{children:"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043b\u0435 \u043d\u0430 \u0434\u0430\u043d\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456 \u043f\u0440\u043e\u043f\u043e\u0437\u0438\u0446\u0456\u0457 \u043f\u0440\u043e \u0437\u0434\u0430\u0447\u0443 \u0432 \u043e\u0440\u0435\u043d\u0434\u0443 \u0430\u0432\u0442\u043e, \u0449\u043e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u044e\u0442\u044c \u0432\u0430\u0448\u043e\u043c\u0443 \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0442\u0443"});var k,P,C=r(3623);const $=g.ZP.p(k||(k=(0,h.Z)(["\n    width: fit-content;\n    margin: 0 auto 50px;\n    color: var(--accent-color);\n    border-bottom: 1px solid var(--accent-color);\n    font-weight: 700;\n"]))),z=g.ZP.button(P||(P=(0,h.Z)(["\ndisplay: block;\n    border: none;\n    background: transparent;\n    color: var(--accent-color);\n    border-bottom: 1px solid var(--accent-color);\n    font-weight: 700;\n    margin: 0 auto 50px;\n"]))),X=()=>{const n=(0,s.I0)(),e=(0,s.v9)(c.Bb),r=(0,s.v9)(c.BT),o=(0,s.v9)(c.Nb),[t,l]=(0,a.useState)(2),i=(0,s.v9)(c.IQ);(0,a.useEffect)((()=>{e&&(n((0,x.tJ)(!1)),n((0,d.U)(1)),n((0,d.A)()))}),[n,e]);const h=(0,s.v9)(c.zy),u=i.filter((n=>{var e;return n.make.toLowerCase().includes(null===r||void 0===r||null===(e=r.brand)||void 0===e?void 0:e.toLowerCase())})).filter((n=>{var e;return parseInt(n.rentalPrice.replace(/\D/g,""),10)<=+(null===r||void 0===r||null===(e=r.selectedOption)||void 0===e?void 0:e.value)})).filter((n=>n.mileage>r.from&&n.mileage<r.to));return(0,j.jsxs)(C.Z,{children:[(0,j.jsx)(Z,{}),(0,j.jsx)(p.Z,{carsForRender:0===Object.keys(r).length?h:u}),0!==Object.keys(r).length&&0===u.length&&(0,j.jsx)(w,{}),h.length!==o&&(0,j.jsx)(z,{onClick:()=>{return e=t,l(t+1),void n((0,d.U)(e));var e},type:"button",children:"Load more"}),h.length===o&&(0,j.jsx)($,{children:"There are all the car rental offers we have for you today"})]})}},6351:(n,e,r)=>{r.d(e,{A1:()=>t,BT:()=>a,Bb:()=>d,IQ:()=>c,Nb:()=>s,ci:()=>i,gP:()=>l,zy:()=>o});const o=n=>n.catalog.generalList,t=n=>n.catalog.favoriteList,l=n=>n.catalog.isModalOpen,i=n=>n.catalog.carForModal,a=n=>n.catalog.filters,s=n=>n.catalog.amount,d=n=>n.catalog.isFirsRender,c=n=>n.catalog.allCars}}]);
//# sourceMappingURL=857.3fd7b2d2.chunk.js.map