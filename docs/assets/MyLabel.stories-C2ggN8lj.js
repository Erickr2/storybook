import{j as S}from"./jsx-runtime-BZf_YgVj.js";import"./index-CEThVCg_.js";const b=({label:l,size:f="normal",allCaps:x=!1,color:v,fontColor:h})=>S.jsx("div",{className:`${f} ${v} `,style:{color:h},children:x?l.toUpperCase():l});b.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Color"},fontColor:{required:!1,tsType:{name:"string"},description:"Font color"}}};const A={title:"Atoms/MyLabel",component:b,tags:["autodocs"],argTypes:{size:{control:"inline-radio"}},parameters:{layout:"centered"}},e={args:{label:"Basic label"}},a={args:{label:"AllCaps"}},r={args:{label:"Secondary"}},s={args:{label:"CustomColor"}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'AllCaps'
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Secondary'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,g,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'CustomColor'
  }
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const z=["Basic","AllCaps","Secondary","CustomColors"];export{a as AllCaps,e as Basic,s as CustomColors,r as Secondary,z as __namedExportsOrder,A as default};
