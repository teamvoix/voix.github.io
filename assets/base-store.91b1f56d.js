import{V as rt,r as q,o as me,w as F,c as d,M as at,g as P,i as Xe,z as O,ah as ut,I as st,ai as Ye,p as Ee,x as ve,K as Te,L as ct,h as c,v as X,Q as J,aj as dt,l as W,E as ke,k as he,ak as ft,al as vt,am as mt,an as ht,ao as gt,ap as pt,aq as de,a as bt,ar as yt,as as wt,at as qt,au as Ze,av as Ct,aw as Re,n as _t,C as L,ax as $e,B as H,ay as xt,G as St,az as kt,aA as Bt,P as A}from"./index.a2bf09ba.js";let qe,ie=0;const _=new Array(256);for(let e=0;e<256;e++)_[e]=(e+256).toString(16).substring(1);const Et=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let l=t;l>0;l--)o.push(Math.floor(Math.random()*256));return o}})(),Ae=4096;function Be(){(qe===void 0||ie+16>Ae)&&(ie=0,qe=Et(Ae));const e=Array.prototype.slice.call(qe,ie,ie+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,_[e[0]]+_[e[1]]+_[e[2]]+_[e[3]]+"-"+_[e[4]]+_[e[5]]+"-"+_[e[6]]+_[e[7]]+"-"+_[e[8]]+_[e[9]]+"-"+_[e[10]]+_[e[11]]+_[e[12]]+_[e[13]]+_[e[14]]+_[e[15]]}function Tt(e){return e==null?null:e}function Le(e,t){return e==null?t===!0?`f_${Be()}`:null:e}function Vt({getValue:e,required:t=!0}={}){if(rt.value===!0){const o=e!==void 0?q(Tt(e())):q(null);return t===!0&&o.value===null&&me(()=>{o.value=`f_${Be()}`}),e!==void 0&&F(e,l=>{o.value=Le(l,t)}),o}return e!==void 0?d(()=>Le(e(),t)):q(`f_${Be()}`)}const He=/^on[A-Z]/;function Ft(){const{attrs:e,vnode:t}=P(),o={listeners:q({}),attributes:q({})};function l(){const r={},a={};for(const i in e)i!=="class"&&i!=="style"&&He.test(i)===!1&&(r[i]=e[i]);for(const i in t.props)He.test(i)===!0&&(a[i]=t.props[i]);o.attributes.value=r,o.listeners.value=a}return at(l),l(),o}const Ve={dark:{type:Boolean,default:null}};function Fe(e,t){return d(()=>e.dark===null?t.dark.isActive:e.dark)}function Pt({validate:e,resetValidation:t,requiresQForm:o}){const l=Xe(ut,!1);if(l!==!1){const{props:r,proxy:a}=P();Object.assign(a,{validate:e,resetValidation:t}),F(()=>r.disable,i=>{i===!0?(typeof t=="function"&&t(),l.unbindComponent(a)):l.bindComponent(a)}),me(()=>{r.disable!==!0&&l.bindComponent(a)}),O(()=>{r.disable!==!0&&l.unbindComponent(a)})}else o===!0&&console.error("Parent QForm not found on useFormChild()!")}const Me=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,De=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Ie=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,re=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ae=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Ce={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Me.test(e),hexaColor:e=>De.test(e),hexOrHexaColor:e=>Ie.test(e),rgbColor:e=>re.test(e),rgbaColor:e=>ae.test(e),rgbOrRgbaColor:e=>re.test(e)||ae.test(e),hexOrRgbColor:e=>Me.test(e)||re.test(e),hexaOrRgbaColor:e=>De.test(e)||ae.test(e),anyColor:e=>Ie.test(e)||re.test(e)||ae.test(e)},Rt=[!0,!1,"ondemand"],$t={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Rt.includes(e)}};function At(e,t){const{props:o,proxy:l}=P(),r=q(!1),a=q(null),i=q(!1);Pt({validate:T,resetValidation:x});let u=0,v;const p=d(()=>o.rules!==void 0&&o.rules!==null&&o.rules.length!==0),g=d(()=>o.disable!==!0&&p.value===!0&&t.value===!1),b=d(()=>o.error===!0||r.value===!0),B=d(()=>typeof o.errorMessage=="string"&&o.errorMessage.length!==0?o.errorMessage:a.value);F(()=>o.modelValue,()=>{i.value=!0,g.value===!0&&o.lazyRules===!1&&s()});function E(){o.lazyRules!=="ondemand"&&g.value===!0&&i.value===!0&&s()}F(()=>o.reactiveRules,C=>{C===!0?v===void 0&&(v=F(()=>o.rules,E,{immediate:!0,deep:!0})):v!==void 0&&(v(),v=void 0)},{immediate:!0}),F(()=>o.lazyRules,E),F(e,C=>{C===!0?i.value=!0:g.value===!0&&o.lazyRules!=="ondemand"&&s()});function x(){u++,t.value=!1,i.value=!1,r.value=!1,a.value=null,s.cancel()}function T(C=o.modelValue){if(o.disable===!0||p.value===!1)return!0;const f=++u,V=t.value!==!0?()=>{i.value=!0}:()=>{},R=(y,S)=>{y===!0&&V(),r.value=y,a.value=S||null,t.value=!1},$=[];for(let y=0;y<o.rules.length;y++){const S=o.rules[y];let w;if(typeof S=="function"?w=S(C,Ce):typeof S=="string"&&Ce[S]!==void 0&&(w=Ce[S](C)),w===!1||typeof w=="string")return R(!0,w),!1;w!==!0&&w!==void 0&&$.push(w)}return $.length===0?(R(!1),!0):(t.value=!0,Promise.all($).then(y=>{if(y===void 0||Array.isArray(y)===!1||y.length===0)return f===u&&R(!1),!0;const S=y.find(w=>w===!1||typeof w=="string");return f===u&&R(S!==void 0,S),S===void 0},y=>(f===u&&(console.error(y),R(!0)),!1)))}const s=st(T,0);return O(()=>{v!==void 0&&v(),s.cancel()}),Object.assign(l,{resetValidation:x,validate:T}),Ye(l,"hasError",()=>b.value),{isDirtyModel:i,hasRules:p,hasError:b,errorMessage:B,validate:T,resetValidation:x}}let D=[],ee=[];function Je(e){ee=ee.filter(t=>t!==e)}function Lt(e){Je(e),ee.push(e)}function ze(e){Je(e),ee.length===0&&D.length!==0&&(D[D.length-1](),D=[])}function et(e){ee.length===0?e():D.push(e)}function Ht(e){D=D.filter(t=>t!==e)}function Mt(e){return e!=null&&(""+e).length!==0}const bo={...Ve,...$t,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},yo=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function wo({requiredForAttr:e=!0,tagProp:t}={}){const{props:o,proxy:l}=P(),r=Fe(o,l.$q),a=Vt({required:e,getValue:()=>o.for});return{requiredForAttr:e,tag:t===!0?d(()=>o.tag):{value:"label"},isDark:r,editable:d(()=>o.disable!==!0&&o.readonly!==!0),innerLoading:q(!1),focused:q(!1),hasPopupOpen:!1,splitAttrs:Ft(),targetUid:a,rootRef:q(null),targetRef:q(null),controlRef:q(null)}}function qo(e){const{props:t,emit:o,slots:l,attrs:r,proxy:a}=P(),{$q:i}=a;let u=null;e.hasValue===void 0&&(e.hasValue=d(()=>Mt(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{o("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:te,onFocusout:oe}),Object.assign(e,{clearValue:le,onControlFocusin:te,onControlFocusout:oe,focus:S}),e.computedCounter===void 0&&(e.computedCounter=d(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:v,hasRules:p,hasError:g,errorMessage:b,resetValidation:B}=At(e.focused,e.innerLoading),E=e.floatingLabel!==void 0?d(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):d(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),x=d(()=>t.bottomSlots===!0||t.hint!==void 0||p.value===!0||t.counter===!0||t.error!==null),T=d(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),s=d(()=>`q-field row no-wrap items-start q-field--${T.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(E.value===!0?" q-field--float":"")+(f.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(g.value===!0?" q-field--error":"")+(g.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&x.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),C=d(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(g.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),f=d(()=>t.labelSlot===!0||t.label!==void 0),V=d(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&g.value!==!0?` text-${t.labelColor}`:"")),R=d(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:E.value,modelValue:t.modelValue,emitValue:e.emitValue})),$=d(()=>{const n={};return e.targetUid.value&&(n.for=e.targetUid.value),t.disable===!0&&(n["aria-disabled"]="true"),n});function y(){const n=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(n===null||n.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==n&&m.focus({preventScroll:!0}))}function S(){et(y)}function w(){Ht(y);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function te(n){u!==null&&(clearTimeout(u),u=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,o("focus",n))}function oe(n,m){u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,o("blur",n)),m!==void 0&&m())})}function le(n){Ee(n),i.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),o("update:modelValue",null),o("clear",t.modelValue),ve(()=>{const m=v.value;B(),v.value=m})}function Q(){const n=[];return l.prepend!==void 0&&n.push(c("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},l.prepend())),n.push(c("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ge())),g.value===!0&&t.noErrorIcon===!1&&n.push(K("error",[c(J,{name:i.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(K("inner-loading-append",l.loading!==void 0?l.loading():[c(dt,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(K("inner-clearable-append",[c(J,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||i.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:le})])),l.append!==void 0&&n.push(c("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},l.append())),e.getInnerAppend!==void 0&&n.push(K("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function ge(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(c("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):l.rawControl!==void 0?n.push(l.rawControl()):l.control!==void 0&&n.push(c("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},l.control(R.value))),f.value===!0&&n.push(c("div",{class:V.value},W(l.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(c("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(W(l.default))}function pe(){let n,m;g.value===!0?b.value!==null?(n=[c("div",{role:"alert"},b.value)],m=`q--slot-error-${b.value}`):(n=W(l.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[c("div",t.hint)],m=`q--slot-hint-${t.hint}`):(n=W(l.hint),m="q--slot-hint"));const j=t.counter===!0||l.counter!==void 0;if(t.hideBottomSpace===!0&&j===!1&&n===void 0)return;const G=c("div",{key:m,class:"q-field__messages col"},n);return c("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?G:c(ke,{name:"q-transition--field-message"},()=>G),j===!0?c("div",{class:"q-field__counter"},l.counter!==void 0?l.counter():e.computedCounter.value):null])}function K(n,m){return m===null?null:c("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}let ne=!1;return Te(()=>{ne=!0}),ct(()=>{ne===!0&&t.autofocus===!0&&a.focus()}),t.autofocus===!0&&me(()=>{a.focus()}),O(()=>{u!==null&&clearTimeout(u)}),Object.assign(a,{focus:S,blur:w}),function(){const m=e.getControl===void 0&&l.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...$.value}:$.value;return c(e.tag.value,{ref:e.rootRef,class:[s.value,r.class],style:r.style,...m},[l.before!==void 0?c("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},l.before()):null,c("div",{class:"q-field__inner relative-position col self-stretch"},[c("div",{ref:e.controlRef,class:C.value,tabindex:-1,...e.controlEvents},Q()),x.value===!0?pe():null]),l.after!==void 0?c("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},l.after()):null])}}const Dt={xs:8,sm:10,md:14,lg:20,xl:24};var Co=he({name:"QChip",props:{...Ve,...ft,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=P(),r=Fe(e,l),a=vt(e,Dt),i=d(()=>e.selected===!0||e.icon!==void 0),u=d(()=>e.selected===!0?e.iconSelected||l.iconSet.chip.selected:e.icon),v=d(()=>e.iconRemove||l.iconSet.chip.remove),p=d(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),g=d(()=>{const s=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(s?` text-${s} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(p.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(r.value===!0?" q-chip--dark q-dark":"")}),b=d(()=>{const s=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},C={...s,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||l.lang.label.remove};return{chip:s,remove:C}});function B(s){s.keyCode===13&&E(s)}function E(s){e.disable||(o("update:selected",!e.selected),o("click",s))}function x(s){(s.keyCode===void 0||s.keyCode===13)&&(Ee(s),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function T(){const s=[];p.value===!0&&s.push(c("div",{class:"q-focus-helper"})),i.value===!0&&s.push(c(J,{class:"q-chip__icon q-chip__icon--left",name:u.value}));const C=e.label!==void 0?[c("div",{class:"ellipsis"},[e.label])]:void 0;return s.push(c("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},ht(t.default,C))),e.iconRight&&s.push(c(J,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&s.push(c(J,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:v.value,...b.value.remove,onClick:x,onKeyup:x})),s}return()=>{if(e.modelValue===!1)return;const s={class:g.value,style:a.value};return p.value===!0&&Object.assign(s,b.value.chip,{onClick:E,onKeyup:B}),mt("div",s,T(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[gt,e.ripple]])}}});const It={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},zt=["beforeShow","show","beforeHide","hide"];function Ot({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:r,processOnMount:a}){const i=P(),{props:u,emit:v,proxy:p}=i;let g;function b(f){e.value===!0?x(f):B(f)}function B(f){if(u.disable===!0||f!==void 0&&f.qAnchorHandled===!0||t!==void 0&&t(f)!==!0)return;const V=u["onUpdate:modelValue"]!==void 0;V===!0&&(v("update:modelValue",!0),g=f,ve(()=>{g===f&&(g=void 0)})),(u.modelValue===null||V===!1)&&E(f)}function E(f){e.value!==!0&&(e.value=!0,v("beforeShow",f),l!==void 0?l(f):v("show",f))}function x(f){if(u.disable===!0)return;const V=u["onUpdate:modelValue"]!==void 0;V===!0&&(v("update:modelValue",!1),g=f,ve(()=>{g===f&&(g=void 0)})),(u.modelValue===null||V===!1)&&T(f)}function T(f){e.value!==!1&&(e.value=!1,v("beforeHide",f),r!==void 0?r(f):v("hide",f))}function s(f){u.disable===!0&&f===!0?u["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!1):f===!0!==e.value&&(f===!0?E:T)(g)}F(()=>u.modelValue,s),o!==void 0&&pt(i)===!0&&F(()=>p.$route.fullPath,()=>{o.value===!0&&e.value===!0&&x()}),a===!0&&me(()=>{s(u.modelValue)});const C={show:B,hide:x,toggle:b};return Object.assign(p,C),C}const fe=[];function _o(e){return fe.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Qt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return de(e)}else if(e.__qPortal===!0){const o=de(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=de(e)}while(e!=null)}function xo(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=Qt(e,t);continue}e.hide(t)}e=de(e)}}const Kt=he({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function jt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ut(e,t,o,l){const r=q(!1),a=q(!1);let i=null;const u={},v=l==="dialog"&&jt(e);function p(b){if(b===!0){ze(u),a.value=!0;return}a.value=!1,r.value===!1&&(v===!1&&i===null&&(i=wt(!1,l)),r.value=!0,fe.push(e.proxy),Lt(u))}function g(b){if(a.value=!1,b!==!0)return;ze(u),r.value=!1;const B=fe.indexOf(e.proxy);B!==-1&&fe.splice(B,1),i!==null&&(qt(i),i=null)}return bt(()=>{g(!0)}),e.proxy.__qPortal=!0,Ye(e.proxy,"contentEl",()=>t.value),{showPortal:p,hidePortal:g,portalIsActive:r,portalIsAccessible:a,renderPortal:()=>v===!0?o():r.value===!0?[c(yt,{to:i},c(Kt,o))]:void 0}}const Wt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Nt(e,t=()=>{},o=()=>{}){return{transitionProps:d(()=>{const l=`q-transition--${e.transitionShow||t()}`,r=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${r}-leave-from`,leaveActiveClass:`${r}-leave-active`,leaveToClass:`${r}-leave-to`}}),transitionStyle:d(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Gt(){let e;const t=P();function o(){e=void 0}return Te(o),O(o),{removeTick:o,registerTick(l){e=l,ve(()=>{e===l&&(Ze(t)===!1&&e(),e=void 0)})}}}function Xt(){let e=null;const t=P();function o(){e!==null&&(clearTimeout(e),e=null)}return Te(o),O(o),{removeTimeout:o,registerTimeout(l,r){o(),Ze(t)===!1&&(e=setTimeout(()=>{e=null,l()},r))}}}const Yt=[null,document,document.body,document.scrollingElement,document.documentElement];function So(e,t){let o=Ct(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return Yt.includes(o)?window:o}function Zt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Jt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ue;function ko(){if(ue!==void 0)return ue;const e=document.createElement("p"),t=document.createElement("div");Re(e,{width:"100%",height:"200px"}),Re(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let l=e.offsetWidth;return o===l&&(l=t.clientWidth),t.remove(),ue=o-l,ue}function eo(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const I=[];let N;function to(e){N=e.keyCode===27}function oo(){N===!0&&(N=!1)}function lo(e){N===!0&&(N=!1,_t(e,27)===!0&&I[I.length-1](e))}function tt(e){window[e]("keydown",to),window[e]("blur",oo),window[e]("keyup",lo),N=!1}function no(e){L.is.desktop===!0&&(I.push(e),I.length===1&&tt("addEventListener"))}function Oe(e){const t=I.indexOf(e);t!==-1&&(I.splice(t,1),I.length===0&&tt("removeEventListener"))}const z=[];function ot(e){z[z.length-1](e)}function io(e){L.is.desktop===!0&&(z.push(e),z.length===1&&document.body.addEventListener("focusin",ot))}function Qe(e){const t=z.indexOf(e);t!==-1&&(z.splice(t,1),z.length===0&&document.body.removeEventListener("focusin",ot))}function ro(e,t,o){let l;function r(){l!==void 0&&($e.remove(l),l=void 0)}return O(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){l={condition:()=>o.value===!0,handler:t},$e.add(l)}}}let Y=0,_e,xe,Z,Se=!1,Ke,je,Ue,M=null;function ao(e){uo(e)&&Ee(e)}function uo(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=xt(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=o||l?e.deltaY:e.deltaX;for(let a=0;a<t.length;a++){const i=t[a];if(eo(i,l))return l?r<0&&i.scrollTop===0?!0:r>0&&i.scrollTop+i.clientHeight===i.scrollHeight:r<0&&i.scrollLeft===0?!0:r>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function We(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function se(e){Se!==!0&&(Se=!0,requestAnimationFrame(()=>{Se=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(Z===void 0||t!==window.innerHeight)&&(Z=o-t,document.scrollingElement.scrollTop=l),l>Z&&(document.scrollingElement.scrollTop-=Math.ceil((l-Z)/8))}))}function Ne(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:r}=window.getComputedStyle(t);_e=Jt(window),xe=Zt(window),Ke=t.style.left,je=t.style.top,Ue=window.location.href,t.style.left=`-${_e}px`,t.style.top=`-${xe}px`,r!=="hidden"&&(r==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,L.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",se,H.passiveCapture),window.visualViewport.addEventListener("scroll",se,H.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",We,H.passiveCapture))}L.is.desktop===!0&&L.is.mac===!0&&window[`${e}EventListener`]("wheel",ao,H.notPassive),e==="remove"&&(L.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",se,H.passiveCapture),window.visualViewport.removeEventListener("scroll",se,H.passiveCapture)):window.removeEventListener("scroll",We,H.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Ke,t.style.top=je,window.location.href===Ue&&window.scrollTo(_e,xe),Z=void 0)}function so(e){let t="add";if(e===!0){if(Y++,M!==null){clearTimeout(M),M=null;return}if(Y>1)return}else{if(Y===0||(Y--,Y>0))return;if(t="remove",L.is.ios===!0&&L.is.nativeMobile===!0){M!==null&&clearTimeout(M),M=setTimeout(()=>{Ne(t),M=null},100);return}}Ne(t)}function co(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,so(t))}}}let ce=0;const fo={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Ge={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Bo=he({name:"QDialog",inheritAttrs:!1,props:{...It,...Wt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...zt,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:l}){const r=P(),a=q(null),i=q(!1),u=q(!1);let v=null,p=null,g,b;const B=d(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:E}=co(),{registerTimeout:x}=Xt(),{registerTick:T,removeTick:s}=Gt(),{transitionProps:C,transitionStyle:f}=Nt(e,()=>Ge[e.position][0],()=>Ge[e.position][1]),V=d(()=>f.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:R,hidePortal:$,portalIsAccessible:y,renderPortal:S}=Ut(r,a,it,"dialog"),{hide:w}=Ot({showing:i,hideOnRouteChange:B,handleShow:K,handleHide:ne,processOnMount:!0}),{addToHistory:te,removeFromHistory:oe}=ro(i,w,B),le=d(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${fo[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),Q=d(()=>i.value===!0&&e.seamless!==!0),ge=d(()=>e.autoClose===!0?{onClick:lt}:{}),pe=d(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${Q.value===!0?"modal":"seamless"}`,l.class]);F(()=>e.maximized,h=>{i.value===!0&&be(h)}),F(Q,h=>{E(h),h===!0?(io(ye),no(j)):(Qe(ye),Oe(j))});function K(h){te(),p=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,be(e.maximized),R(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),T(n)):s(),x(()=>{if(r.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:k,bottom:U}=document.activeElement.getBoundingClientRect(),{innerHeight:Pe}=window,we=window.visualViewport!==void 0?window.visualViewport.height:Pe;k>0&&U>we/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-we,U>=Pe?1/0:Math.ceil(document.scrollingElement.scrollTop+U-we/2))),document.activeElement.scrollIntoView()}b=!0,a.value.click(),b=!1}R(!0),u.value=!1,o("show",h)},e.transitionDuration)}function ne(h){s(),oe(),G(!0),u.value=!0,$(),p!==null&&(((h&&h.type.indexOf("key")===0?p.closest('[tabindex]:not([tabindex^="-"])'):void 0)||p).focus(),p=null),x(()=>{$(!0),u.value=!1,o("hide",h)},e.transitionDuration)}function n(h){et(()=>{let k=a.value;if(k!==null){if(h!==void 0){const U=k.querySelector(h);if(U!==null){U.focus({preventScroll:!0});return}}k.contains(document.activeElement)!==!0&&(k=k.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||k.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||k.querySelector("[autofocus], [data-autofocus]")||k,k.focus({preventScroll:!0}))}})}function m(h){h&&typeof h.focus=="function"?h.focus({preventScroll:!0}):n(),o("shake");const k=a.value;k!==null&&(k.classList.remove("q-animate--scale"),k.classList.add("q-animate--scale"),v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,a.value!==null&&(k.classList.remove("q-animate--scale"),n())},170))}function j(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&m():(o("escapeKey"),w()))}function G(h){v!==null&&(clearTimeout(v),v=null),(h===!0||i.value===!0)&&(be(!1),e.seamless!==!0&&(E(!1),Qe(ye),Oe(j))),h!==!0&&(p=null)}function be(h){h===!0?g!==!0&&(ce<1&&document.body.classList.add("q-body--dialog"),ce++,g=!0):g===!0&&(ce<2&&document.body.classList.remove("q-body--dialog"),ce--,g=!1)}function lt(h){b!==!0&&(w(h),o("click",h))}function nt(h){e.persistent!==!0&&e.noBackdropDismiss!==!0?w(h):e.noShake!==!0&&m()}function ye(h){e.allowFocusOutside!==!0&&y.value===!0&&St(a.value,h.target)!==!0&&n('[tabindex]:not([tabindex="-1"])')}Object.assign(r.proxy,{focus:n,shake:m,__updateRefocusTarget(h){p=h||null}}),O(G);function it(){return c("div",{role:"dialog","aria-modal":Q.value===!0?"true":"false",...l,class:pe.value},[c(ke,{name:"q-transition--fade",appear:!0},()=>Q.value===!0?c("div",{class:"q-dialog__backdrop fixed-full",style:V.value,"aria-hidden":"true",tabindex:-1,onClick:nt}):null),c(ke,C.value,()=>i.value===!0?c("div",{ref:a,class:le.value,style:f.value,tabindex:-1,...ge.value},W(t.default)):null)])}return S}});const Eo={name:String};function To(e){return d(()=>e.name||e.for)}const vo=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,mo=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ho=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,go=/[a-z0-9_ -]$/i;function Vo(e){return function(o){if(o.type==="compositionend"||o.type==="change"){if(o.target.qComposing!==!0)return;o.target.qComposing=!1,e(o)}else o.type==="compositionupdate"&&o.target.qComposing!==!0&&typeof o.data=="string"&&(L.is.firefox===!0?go.test(o.data)===!1:vo.test(o.data)===!0||mo.test(o.data)===!0||ho.test(o.data)===!0)===!0&&(o.target.qComposing=!0)}}var Fo=he({name:"QCard",props:{...Ve,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=P(),l=Fe(e,o),r=d(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>c(e.tag,{class:r.value},W(t.default))}});function Po(){return Xe(kt)}const Ro=Bt("base",{state:()=>({theme:"light",links:[{title:"+7 (727) 331 58 00",icon:"phone",link:"tel:+77273315800"},{title:"team@voix.io",icon:"mail",link:"mailto:team@voix.io"},{title:"Almaty, 151 Minbayev st, office 35",icon:"location_on",link:"https://go.2gis.com/m8u4qg"}],menuLinks:[{label:"homepage",link:"nav.homepage",icon:"home"},{label:"info",link:"nav.info",icon:"info"},{label:"ge",link:"nav.ge",icon:"view_timeline"}],iconsInfo:[{icon:"preview"},{icon:"how_to_reg"},{icon:"build_circle"}],iconsGE:[{icon:"scale"},{icon:"table_rows"},{icon:"view_timeline"},{icon:"hourglass_top"},{icon:"payments"},{icon:"public"}],sectionChoice:"homepage"}),getters:{getTheme(){return this.theme=A.has("voix_page_theme")?A.get("voix_page_theme"):"light",this.theme},getAltTheme(){return this.theme=A.has("voix_page_theme")?A.get("voix_page_theme"):"light",this.theme=="light"?"dark":"light"},getMenuLinks(){return this.menuLinks},getIconsInfo(){return this.iconsInfo},getIconsGE(){return this.iconsGE},getSectionChoice(){return this.sectionChoice}},actions:{setTheme(){A.has("voix_page_theme")?A.get("voix_page_theme")=="light"?(A.set("voix_page_theme","dark",{sameSite:"None",secure:!0}),this.theme="dark"):(A.set("voix_page_theme","light",{sameSite:"None",secure:!0}),this.theme="light"):(A.set("voix_page_theme","dark",{sameSite:"None",secure:!0}),this.theme="dark")},getLinks(){return this.links},setSectionChoice(e){this.sectionChoice=e}}});export{Bo as A,Vo as B,Zt as C,Jt as D,_o as E,xo as F,Ro as G,Po as H,Fo as I,Co as Q,yo as a,qo as b,wo as c,Ve as d,Fe as e,It as f,ko as g,Wt as h,zt as i,Gt as j,Xt as k,Nt as l,Ot as m,Ut as n,io as o,fe as p,Oe as q,Qe as r,So as s,et as t,bo as u,Qt as v,no as w,Eo as x,To as y,Mt as z};
