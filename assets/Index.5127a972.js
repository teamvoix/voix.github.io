import{c as $,k as oe,r as T,_ as we,o as re,h as j,J as Se,l as ke,ao as Me,w as Z,au as ee,g as se,B as J,Y as pe,D as Ce,an as _e,X as ue,a1 as Ve,O as Fe,S as Re,q as de,am as $e,a7 as Ee,d as qe,aB as ae,a8 as ce,a9 as fe,aa as W,ah as v,ad as L,ag as ne,ab as Te,j as P,aC as ie,ac as Ae}from"./index.4f257558.js";import{i as me,u as ze,v as Be,a as Ie,w as Pe,c as Ne,b as je,x as ge,q as xe,y as De,Q as Oe}from"./use-key-composition.53ef1d14.js";import{Q as he}from"./QCard.caecf407.js";import{Q as Qe}from"./QCardSection.d8dd6ac8.js";import{Q as Le}from"./QPage.2d299644.js";import{u as Ke,a as Ze}from"./base-store.e59482d8.js";import"./vue-i18n.runtime.11d1a52e.js";const Ue={ratio:[String,Number]};function He(e,d){return $(()=>{const p=Number(e.ratio||(d!==void 0?d.value:void 0));return isNaN(p)!==!0&&p>0?{paddingBottom:`${100/p}%`}:null})}const Ye=1.7778;var We=oe({name:"QImg",props:{...Ue,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ye},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:d,emit:p}){const F=T(e.initialRatio),u=He(e,F),c=se(),{registerTimeout:g,removeTimeout:E}=me(),{registerTimeout:D,removeTimeout:k}=me(),b=$(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),f=$(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),B=[T(null),T(b.value)],o=T(0),S=T(!1),A=T(!1),O=$(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),U=$(()=>({width:e.width,height:e.height})),z=$(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),x=$(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function R(){if(k(),e.loadingShowDelay===0){S.value=!0;return}D(()=>{S.value=!0},e.loadingShowDelay)}function C(){k(),S.value=!1}function N({target:t}){ee(c)===!1&&(E(),F.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,q(t,1))}function q(t,r){r===1e3||ee(c)===!0||(t.complete===!0?X(t):g(()=>{q(t,r+1)},50))}function X(t){ee(c)!==!0&&(o.value=o.value^1,B[o.value].value=null,C(),t.getAttribute("__qerror")!=="true"&&(A.value=!1),p("load",t.currentSrc||t.src))}function i(t){E(),C(),A.value=!0,B[o.value].value=f.value,B[o.value^1].value=b.value,p("error",t)}function n(t){const r=B[t].value,s={key:"img_"+t,class:z.value,style:x.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...r};return o.value===t?Object.assign(s,{class:s.class+"current",onLoad:N,onError:i}):s.class+="loaded",j("div",{class:"q-img__container absolute-full",key:"img"+t},j("img",s))}function l(){return S.value===!1?j("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},ke(d[A.value===!0?"error":"default"])):j("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},d.loading!==void 0?d.loading():e.noSpinner===!0?void 0:[j(Me,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){Z(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,r=>{E(),A.value=!1,r===null?(C(),B[o.value^1].value=b.value):R(),B[o.value].value=r},{immediate:!0})};we.value===!0?re(t):t()}return()=>{const t=[];return u.value!==null&&t.push(j("div",{key:"filler",style:u.value})),B[0].value!==null&&t.push(n(0)),B[1].value!==null&&t.push(n(1)),t.push(j(Se,{name:"q-transition--fade"},l)),j("div",{key:"main",class:O.value,style:U.value,role:"img","aria-label":e.alt},t)}}});const ve={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},be=Object.keys(te);be.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const Je=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+be.join("")+"])|(.)","g"),ye=/[.*+?^${}()|[\]\\]/g,_=String.fromCharCode(1),Xe={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ge(e,d,p,F){let u,c,g,E,D,k;const b=T(null),f=T(o());function B(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}Z(()=>e.type+e.autogrow,A),Z(()=>e.mask,i=>{if(i!==void 0)O(f.value,!0);else{const n=q(f.value);A(),e.modelValue!==n&&d("update:modelValue",n)}}),Z(()=>e.fillMask+e.reverseFillMask,()=>{b.value===!0&&O(f.value,!0)}),Z(()=>e.unmaskedValue,()=>{b.value===!0&&O(f.value)});function o(){if(A(),b.value===!0){const i=C(q(e.modelValue));return e.fillMask!==!1?X(i):i}return e.modelValue}function S(i){if(i<u.length)return u.slice(-i);let n="",l=u;const t=l.indexOf(_);if(t!==-1){for(let r=i-l.length;r>0;r--)n+=_;l=l.slice(0,t)+n+l.slice(t)}return l}function A(){if(b.value=e.mask!==void 0&&e.mask.length!==0&&B(),b.value===!1){E=void 0,u="",c="";return}const i=ve[e.mask]===void 0?e.mask:ve[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",l=n.replace(ye,"\\$&"),t=[],r=[],s=[];let M=e.reverseFillMask===!0,m="",h="";i.replace(Je,(V,a,w,K,Q)=>{if(K!==void 0){const I=te[K];s.push(I),h=I.negate,M===!0&&(r.push("(?:"+h+"+)?("+I.pattern+"+)?(?:"+h+"+)?("+I.pattern+"+)?"),M=!1),r.push("(?:"+h+"+)?("+I.pattern+")?")}else if(w!==void 0)m="\\"+(w==="\\"?"":w),s.push(w),t.push("([^"+m+"]+)?"+m+"?");else{const I=a!==void 0?a:Q;m=I==="\\"?"\\\\\\\\":I.replace(ye,"\\\\$&"),s.push(I),t.push("([^"+m+"]+)?"+m+"?")}});const Y=new RegExp("^"+t.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),H=r.length-1,y=r.map((V,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+l+"*"+V):a===H?new RegExp("^"+V+"("+(h===""?".":h)+"+)?"+(e.reverseFillMask===!0?"$":l+"*")):new RegExp("^"+V));g=s,E=V=>{const a=Y.exec(e.reverseFillMask===!0?V:V.slice(0,s.length+1));a!==null&&(V=a.slice(1).join(""));const w=[],K=y.length;for(let Q=0,I=V;Q<K;Q++){const G=y[Q].exec(I);if(G===null)break;I=I.slice(G.shift().length),w.push(...G)}return w.length!==0?w.join(""):V},u=s.map(V=>typeof V=="string"?V:_).join(""),c=u.split(_).join(n)}function O(i,n,l){const t=F.value,r=t.selectionEnd,s=t.value.length-r,M=q(i);n===!0&&A();const m=C(M),h=e.fillMask!==!1?X(m):m,Y=f.value!==h;t.value!==h&&(t.value=h),Y===!0&&(f.value=h),document.activeElement===t&&J(()=>{if(h===c){const y=e.reverseFillMask===!0?c.length:0;t.setSelectionRange(y,y,"forward");return}if(l==="insertFromPaste"&&e.reverseFillMask!==!0){const y=t.selectionEnd;let V=r-1;for(let a=D;a<=V&&a<y;a++)u[a]!==_&&V++;z.right(t,V);return}if(["deleteContentBackward","deleteContentForward"].indexOf(l)!==-1){const y=e.reverseFillMask===!0?r===0?h.length>m.length?1:0:Math.max(0,h.length-(h===c?0:Math.min(m.length,s)+1))+1:r;t.setSelectionRange(y,y,"forward");return}if(e.reverseFillMask===!0)if(Y===!0){const y=Math.max(0,h.length-(h===c?0:Math.min(m.length,s+1)));y===1&&r===1?t.setSelectionRange(y,y,"forward"):z.rightReverse(t,y)}else{const y=h.length-s;t.setSelectionRange(y,y,"backward")}else if(Y===!0){const y=Math.max(0,u.indexOf(_),Math.min(m.length,r)-1);z.right(t,y)}else{const y=r-1;z.right(t,y)}});const H=e.unmaskedValue===!0?q(h):h;String(e.modelValue)!==H&&(e.modelValue!==null||H!=="")&&p(H,!0)}function U(i,n,l){const t=C(q(i.value));n=Math.max(0,u.indexOf(_),Math.min(t.length,n)),D=n,i.setSelectionRange(n,l,"forward")}const z={left(i,n){const l=u.slice(n-1).indexOf(_)===-1;let t=Math.max(0,n-1);for(;t>=0;t--)if(u[t]===_){n=t,l===!0&&n++;break}if(t<0&&u[n]!==void 0&&u[n]!==_)return z.right(i,0);n>=0&&i.setSelectionRange(n,n,"backward")},right(i,n){const l=i.value.length;let t=Math.min(l,n+1);for(;t<=l;t++)if(u[t]===_){n=t;break}else u[t-1]===_&&(n=t);if(t>l&&u[n-1]!==void 0&&u[n-1]!==_)return z.left(i,l);i.setSelectionRange(n,n,"forward")},leftReverse(i,n){const l=S(i.value.length);let t=Math.max(0,n-1);for(;t>=0;t--)if(l[t-1]===_){n=t;break}else if(l[t]===_&&(n=t,t===0))break;if(t<0&&l[n]!==void 0&&l[n]!==_)return z.rightReverse(i,0);n>=0&&i.setSelectionRange(n,n,"backward")},rightReverse(i,n){const l=i.value.length,t=S(l),r=t.slice(0,n+1).indexOf(_)===-1;let s=Math.min(l,n+1);for(;s<=l;s++)if(t[s-1]===_){n=s,n>0&&r===!0&&n--;break}if(s>l&&t[n-1]!==void 0&&t[n-1]!==_)return z.leftReverse(i,l);i.setSelectionRange(n,n,"forward")}};function x(i){d("click",i),k=void 0}function R(i){if(d("keydown",i),pe(i)===!0||i.altKey===!0)return;const n=F.value,l=n.selectionStart,t=n.selectionEnd;if(i.shiftKey||(k=void 0),i.keyCode===37||i.keyCode===39){i.shiftKey&&k===void 0&&(k=n.selectionDirection==="forward"?l:t);const r=z[(i.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(i.preventDefault(),r(n,k===l?t:l),i.shiftKey){const s=n.selectionStart;n.setSelectionRange(Math.min(k,s),Math.max(k,s),"forward")}}else i.keyCode===8&&e.reverseFillMask!==!0&&l===t?(z.left(n,l),n.setSelectionRange(n.selectionStart,t,"backward")):i.keyCode===46&&e.reverseFillMask===!0&&l===t&&(z.rightReverse(n,t),n.setSelectionRange(l,n.selectionEnd,"forward"))}function C(i){if(i==null||i==="")return"";if(e.reverseFillMask===!0)return N(i);const n=g;let l=0,t="";for(let r=0;r<n.length;r++){const s=i[l],M=n[r];if(typeof M=="string")t+=M,s===M&&l++;else if(s!==void 0&&M.regex.test(s))t+=M.transform!==void 0?M.transform(s):s,l++;else return t}return t}function N(i){const n=g,l=u.indexOf(_);let t=i.length-1,r="";for(let s=n.length-1;s>=0&&t!==-1;s--){const M=n[s];let m=i[t];if(typeof M=="string")r=M+r,m===M&&t--;else if(m!==void 0&&M.regex.test(m))do r=(M.transform!==void 0?M.transform(m):m)+r,t--,m=i[t];while(l===s&&m!==void 0&&M.regex.test(m));else return r}return r}function q(i){return typeof i!="string"||E===void 0?typeof i=="number"?E(""+i):i:E(i)}function X(i){return c.length-i.length<=0?i:e.reverseFillMask===!0&&i.length!==0?c.slice(0,-i.length)+i:i+c.slice(i.length)}return{innerValue:f,hasMask:b,moveCursorForPaste:U,updateMaskValue:O,onMaskedKeydown:R,onMaskedClick:x}}function et(e,d){function p(){const F=e.modelValue;try{const u="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(F)===F&&("length"in F?Array.from(F):[F]).forEach(c=>{u.items.add(c)}),{files:u.files}}catch{return{files:void 0}}}return d===!0?$(()=>{if(e.type==="file")return p()}):$(p)}var le=oe({name:"QInput",inheritAttrs:!1,props:{...ze,...Xe,...Be,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ie,"paste","change","keydown","click","animationend"],setup(e,{emit:d,attrs:p}){const{proxy:F}=se(),{$q:u}=F,c={};let g=NaN,E,D,k=null,b;const f=T(null),B=Pe(e),{innerValue:o,hasMask:S,moveCursorForPaste:A,updateMaskValue:O,onMaskedKeydown:U,onMaskedClick:z}=Ge(e,d,m,f),x=et(e,!0),R=$(()=>ge(o.value)),C=De(s),N=Ne(),q=$(()=>e.type==="textarea"||e.autogrow===!0),X=$(()=>q.value===!0||["text","search","url","tel","password"].includes(e.type)),i=$(()=>{const a={...N.splitAttrs.listeners.value,onInput:s,onPaste:r,onChange:Y,onBlur:H,onFocus:ue};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=C,S.value===!0&&(a.onKeydown=U,a.onClick=z),e.autogrow===!0&&(a.onAnimationend=M),a}),n=$(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:B.value,...N.splitAttrs.attributes.value,id:N.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return q.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});Z(()=>e.type,()=>{f.value&&(f.value.value=e.modelValue)}),Z(()=>e.modelValue,a=>{if(S.value===!0){if(D===!0&&(D=!1,String(a)===g))return;O(a)}else o.value!==a&&(o.value=a,e.type==="number"&&c.hasOwnProperty("value")===!0&&(E===!0?E=!1:delete c.value));e.autogrow===!0&&J(h)}),Z(()=>e.autogrow,a=>{a===!0?J(h):f.value!==null&&p.rows>0&&(f.value.style.height="auto")}),Z(()=>e.dense,()=>{e.autogrow===!0&&J(h)});function l(){xe(()=>{const a=document.activeElement;f.value!==null&&f.value!==a&&(a===null||a.id!==N.targetUid.value)&&f.value.focus({preventScroll:!0})})}function t(){f.value!==null&&f.value.select()}function r(a){if(S.value===!0&&e.reverseFillMask!==!0){const w=a.target;A(w,w.selectionStart,w.selectionEnd)}d("paste",a)}function s(a){if(!a||!a.target)return;if(e.type==="file"){d("update:modelValue",a.target.files);return}const w=a.target.value;if(a.target.qComposing===!0){c.value=w;return}if(S.value===!0)O(w,!1,a.inputType);else if(m(w),X.value===!0&&a.target===document.activeElement){const{selectionStart:K,selectionEnd:Q}=a.target;K!==void 0&&Q!==void 0&&J(()=>{a.target===document.activeElement&&w.indexOf(a.target.value)===0&&a.target.setSelectionRange(K,Q)})}e.autogrow===!0&&h()}function M(a){d("animationend",a),h()}function m(a,w){b=()=>{k=null,e.type!=="number"&&c.hasOwnProperty("value")===!0&&delete c.value,e.modelValue!==a&&g!==a&&(g=a,w===!0&&(D=!0),d("update:modelValue",a),J(()=>{g===a&&(g=NaN)})),b=void 0},e.type==="number"&&(E=!0,c.value=a),e.debounce!==void 0?(k!==null&&clearTimeout(k),c.value=a,k=setTimeout(b,e.debounce)):b()}function h(){requestAnimationFrame(()=>{const a=f.value;if(a!==null){const w=a.parentNode.style,{scrollTop:K}=a,{overflowY:Q,maxHeight:I}=u.platform.is.firefox===!0?{}:window.getComputedStyle(a),G=Q!==void 0&&Q!=="scroll";G===!0&&(a.style.overflowY="hidden"),w.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",G===!0&&(a.style.overflowY=parseInt(I,10)<a.scrollHeight?"auto":"hidden"),w.marginBottom="",a.scrollTop=K}})}function Y(a){C(a),k!==null&&(clearTimeout(k),k=null),b!==void 0&&b(),d("change",a.target.value)}function H(a){a!==void 0&&ue(a),k!==null&&(clearTimeout(k),k=null),b!==void 0&&b(),E=!1,D=!1,delete c.value,e.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=o.value!==void 0?o.value:"")})}function y(){return c.hasOwnProperty("value")===!0?c.value:o.value!==void 0?o.value:""}Ce(()=>{H()}),re(()=>{e.autogrow===!0&&h()}),Object.assign(N,{innerValue:o,fieldClass:$(()=>`q-${q.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:$(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:f,emitValue:m,hasValue:R,floatingLabel:$(()=>R.value===!0&&(e.type!=="number"||isNaN(o.value)===!1)||ge(e.displayValue)),getControl:()=>j(q.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...i.value,...e.type!=="file"?{value:y()}:x.value}),getShadowControl:()=>j("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(q.value===!0?"":" text-no-wrap")},[j("span",{class:"invisible"},y()),j("span",e.shadowText)])});const V=je(N);return Object.assign(F,{focus:l,select:t,getNativeElement:()=>f.value}),_e(F,"nativeEl",()=>f.value),V}}),tt=oe({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:d,emit:p}){const F=se(),u=T(null);let c=0;const g=[];function E(o){const S=typeof o=="boolean"?o:e.noErrorFocus!==!0,A=++c,O=(x,R)=>{p("validation"+(x===!0?"Success":"Error"),R)},U=x=>{const R=x.validate();return typeof R.then=="function"?R.then(C=>({valid:C,comp:x}),C=>({valid:!1,comp:x,err:C})):Promise.resolve({valid:R,comp:x})};return(e.greedy===!0?Promise.all(g.map(U)).then(x=>x.filter(R=>R.valid!==!0)):g.reduce((x,R)=>x.then(()=>U(R).then(C=>{if(C.valid===!1)return Promise.reject(C)})),Promise.resolve()).catch(x=>[x])).then(x=>{if(x===void 0||x.length===0)return A===c&&O(!0),!0;if(A===c){const{comp:R,err:C}=x[0];if(C!==void 0&&console.error(C),O(!1,R),S===!0){const N=x.find(({comp:q})=>typeof q.focus=="function"&&ee(q.$)===!1);N!==void 0&&N.comp.focus()}}return!1})}function D(){c++,g.forEach(o=>{typeof o.resetValidation=="function"&&o.resetValidation()})}function k(o){o!==void 0&&de(o);const S=c+1;E().then(A=>{S===c&&A===!0&&(e.onSubmit!==void 0?p("submit",o):o!==void 0&&o.target!==void 0&&typeof o.target.submit=="function"&&o.target.submit())})}function b(o){o!==void 0&&de(o),p("reset"),J(()=>{D(),e.autofocus===!0&&e.noResetFocus!==!0&&f()})}function f(){xe(()=>{if(u.value===null)return;const o=u.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),S=>S.tabIndex!==-1);o!=null&&o.focus({preventScroll:!0})})}Ve($e,{bindComponent(o){g.push(o)},unbindComponent(o){const S=g.indexOf(o);S!==-1&&g.splice(S,1)}});let B=!1;return Fe(()=>{B=!0}),Re(()=>{B===!0&&e.autofocus===!0&&f()}),re(()=>{e.autofocus===!0&&f()}),Object.assign(F.proxy,{validate:E,resetValidation:D,submit:k,reset:b,focus:f,getValidationComponents:()=>g}),()=>j("form",{class:"q-form",ref:u,onSubmit:k,onReset:b},ke(d.default))}});const at=Ke(),nt=qe({name:"Index",setup(){Ze();const e=$(()=>at.getTheme);return{slide:T(1),autoplay:T(!0),isFullHeight:T(),enrollDialog:T(!1),name:T(""),phone:T(""),text:T(""),theme:e}},methods:{async submitForm(){try{if(this.name==""||this.phone==""||this.text==""){await ae.create({message:this.$t("dialog.empty"),position:"center"});return}const e="6409688318:AAF-CjpBJuT2exP2oZQ7r4cUHyR6orIaiD0",d="@voixfeedbacks",p=`\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ${this.name} \u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C ${this.phone} \u043E\u0441\u0442\u0430\u0432\u0438\u043B \u0437\u0430\u044F\u0432\u043A\u0443. \u0422\u0435\u043A\u0441\u0442: ${this.text}.`;await this.$api.post(`https://api.telegram.org/bot${e}/sendMessage`,{chat_id:d,text:p}),this.name="",this.phone="",this.text="",await ae.create({message:this.$t("dialog.sent"),position:"center"})}catch(e){throw ae.create({message:`${e.message}`,position:"center"}),e}}}}),it={id:"about"},lt={class:"article-content"},ot=v("div",{class:"image-container",style:{"max-width":"600px","margin-bottom":"20px","margin-inline":"10px"}},[v("img",{src:"/images/about.jpeg",alt:"\u0424\u043E\u043D\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",ratio:16/9,style:{"border-radius":"10px","max-width":"100%"}})],-1),rt={class:"text-container",style:{"max-width":"800px"}},st={style:{"font-size":"40px","margin-top":"10px"}},ut={style:{"font-size":"23px"}},dt={class:"row",style:{display:"flex","flex-wrap":"wrap","justify-content":"center"}},ct={class:"custom-item text-center"},ft={style:{"font-size":"30px","font-weight":"bold","margin-top":"15px","margin-bottom":"10px"}},mt={style:{"font-size":"20px","white-space":"pre-line"}},gt={class:"custom-item text-center"},ht={style:{"font-size":"30px","font-weight":"bold","margin-top":"15px","margin-bottom":"10px"}},vt={style:{"font-size":"20px","white-space":"pre-line"}},yt={class:"custom-item text-center"},kt={style:{"font-size":"30px","font-weight":"bold","margin-top":"15px","margin-bottom":"10px"}},xt={style:{"font-size":"20px","white-space":"pre-line"}},bt=v("hr",{style:{margin:"40px","margin-top":"0px"}},null,-1),wt={id:"content"},St={class:"q-md row d-flex justify-center",style:{margin:"auto","margin-top":"20px"}},Mt={class:"q-md col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center",style:{padding:"10px"}},pt={class:"absolute-center",style:{background:"rgba(33, 33, 33, 0.8)"}},Ct={style:{"font-size":"large","font-weight":"bold"}},_t={style:{"font-size":"large"}},Vt={style:{"font-size":"medium","font-weight":"bold","text-shadow":"1px rgb(35, 35, 35)"}},Ft={class:"text-center"},Rt={class:"q-pa-md row items-start q-gutter-md"};function $t(e,d,p,F,u,c){return ce(),fe(Le,null,{default:W(()=>[v("section",it,[v("div",lt,[ot,v("div",rt,[v("p",st,L(e.$t("about.title")),1),v("p",ut,L(e.$t("about.text")),1),e.$q.platform.is.mobile?(ce(),fe(ne,{key:0,outline:"",rounded:"",style:{"font-size":"20px"},href:"/info",label:e.$t("about.infoLink")},null,8,["label"])):Te("",!0)])])]),v("div",dt,[v("div",ct,[P(ie,{size:"200px",icon:"dvr"}),v("p",ft,L(e.$t("list.title1")),1),v("p",mt,L(e.$t("list.text1")),1)]),v("div",gt,[P(ie,{size:"200px",icon:"public"}),v("p",ht,L(e.$t("list.title2")),1),v("p",vt,L(e.$t("list.text2")),1)]),v("div",yt,[P(ie,{size:"200px",icon:"web"}),v("p",kt,L(e.$t("list.title3")),1),v("p",xt,L(e.$t("list.text3")),1)])]),bt,v("section",wt,[v("div",St,[v("div",Mt,[P(he,{dark:"",class:"my-card"},{default:W(()=>[P(We,{src:"/images/feedback.jpeg",alt:"\u0424\u043E\u043D\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",ratio:16/12,style:{"border-radius":"10px"}},{default:W(()=>[v("div",pt,[v("p",Ct,L(e.$t("content.title")),1),v("p",_t,L(e.$t("content.text")),1),v("p",Vt,[P(ne,{outline:"",rounded:"",color:"white",onClick:d[0]||(d[0]=g=>e.enrollDialog=!0),label:e.$t("content.show")},null,8,["label"])])])]),_:1})]),_:1})])])]),P(Oe,{modelValue:e.enrollDialog,"onUpdate:modelValue":d[4]||(d[4]=g=>e.enrollDialog=g)},{default:W(()=>[P(he,{style:{background:"radial-gradient(circle, #ff9d67 0%, #fa9760 100%)"}},{default:W(()=>[v("div",Ft,[P(Qe,{style:{"font-size":"30px"}},{default:W(()=>[Ae(L(e.$t("dialog.title")),1)]),_:1}),v("div",Rt,[P(tt,{onSubmit:e.submitForm,class:"q-gutter-md",style:{"max-width":"600px",margin:"0 auto"}},{default:W(()=>[P(le,{modelValue:e.name,"onUpdate:modelValue":d[1]||(d[1]=g=>e.name=g),square:"",filled:"",type:"text",label:e.$t("dialog.name"),outlined:""},null,8,["modelValue","label"]),P(le,{modelValue:e.phone,"onUpdate:modelValue":d[2]||(d[2]=g=>e.phone=g),square:"",filled:"",type:"tel",label:e.$t("dialog.phone"),outlined:""},null,8,["modelValue","label"]),P(le,{modelValue:e.text,"onUpdate:modelValue":d[3]||(d[3]=g=>e.text=g),square:"",filled:"",type:"textarea",label:e.$t("dialog.text"),outlined:""},null,8,["modelValue","label"]),P(ne,{type:"submit",label:e.$t("dialog.button"),size:"large",class:"q-mt-md",style:{"background-color":"#000000",color:"#ffffff"},dense:"",flat:""},null,8,["label"])]),_:1},8,["onSubmit"])])])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Pt=Ee(nt,[["render",$t]]);export{Pt as default};
