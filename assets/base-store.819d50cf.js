import{i,az as s,aA as a,P as e}from"./index.95d3e413.js";import{u as o}from"./vue-i18n.runtime.552c50c0.js";function m(){return i(s)}const l=a("base",{state:()=>({theme:"light",links:[{title:"",icon:"rocket",link:"/info"},{title:"",icon:"satellite",link:"/ge"},{title:"+7 (727) 331 58 00",icon:"phone",link:"tel:+77273315800"},{title:"team@voix.io",icon:"mail",link:"mailto:team@voix.io"}]}),getters:{getTheme(){return this.theme=e.has("voix_page_theme")?e.get("voix_page_theme"):"light",this.theme}},actions:{setTheme(){e.has("voix_page_theme")?e.get("voix_page_theme")=="light"?(e.set("voix_page_theme","dark",{sameSite:"None",secure:!0}),this.theme="dark"):(e.set("voix_page_theme","light",{sameSite:"None",secure:!0}),this.theme="light"):(e.set("voix_page_theme","dark",{sameSite:"None",secure:!0}),this.theme="dark")},getLinks(){const{t}=o();return this.links[0].title=t("nav.info"),this.links[1].title=t("nav.ge"),this.links}}});export{m as a,l as u};
