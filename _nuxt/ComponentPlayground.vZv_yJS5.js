import{M as m,I as p,d as c,a9 as i,r as l,N as e,l as u}from"./entry.CIM0nG2F.js";import{u as d}from"./asyncData.B0W7_5fl.js";import f from"./Ellipsis.BtDNGi8x.js";import y from"./ComponentPlaygroundData.AnjRNWL_.js";import"./TabsHeader.DTSOPOAM.js";import"./ComponentPlaygroundProps.C2XdNdxw.js";import"./ProseH4.BeH67zS7.js";import"./ProseCodeInline.BIrexo45.js";import"./Badge.BHjWdjRq.js";import"./MDCSlot.JSd1MrzD.js";import"./slot.CunmOJ_e.js";import"./ProseP.CPCxuNTi.js";import"./index.CKZxDIqu.js";import"./ComponentPlaygroundSlots.vue.Djj7ci4T.js";import"./ComponentPlaygroundTokens.vue.Db989MWj.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-94dfdb3f"]]);export{V as default};
