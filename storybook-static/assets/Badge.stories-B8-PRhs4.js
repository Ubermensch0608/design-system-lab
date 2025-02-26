import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-DmM0KDA7.js";const r=_.forwardRef(({theme:W="primary",backgroundColor:o,borderColor:c,color:t,borderWidth:m,size:T="medium",radius:k="circle",children:q,className:N,style:D,...I},L)=>{const M={...o&&{backgroundColor:o},...c&&{borderColor:c},...t&&{color:t},...m&&{borderWidth:m},...D},P=["badge",!o&&!t?`badge-theme-${W}`:"",`badge-${T}`,`badge-radius-${k}`,N].filter(Boolean).join(" ");return e.jsx("span",{ref:L,className:P,style:M,...I,children:q})});r.displayName="Badge";r.__docgenInfo={description:`Badge 컴포넌트

상태나 카테고리를 표시하기 위한 작은 요소입니다.
정보 표시 목적으로만 사용되며, 인터랙션 기능은 없습니다.`,methods:[],displayName:"Badge",props:{theme:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "danger"
| "info"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"info"'}]},description:`뱃지의 테마
@default 'primary'`,defaultValue:{value:'"primary"',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"뱃지의 배경색 (theme prop보다 우선 적용)"},borderColor:{required:!1,tsType:{name:"string"},description:"뱃지의 테두리 색상"},color:{required:!1,tsType:{name:"string"},description:"뱃지의 텍스트 색상"},borderWidth:{required:!1,tsType:{name:"string"},description:`뱃지의 테두리 두께
@default '1px'`},size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:`뱃지의 크기
@default 'medium'`,defaultValue:{value:'"medium"',computed:!1}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "100" | "200" | "300" | "circle"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"100"'},{name:"literal",value:'"200"'},{name:"literal",value:'"300"'},{name:"literal",value:'"circle"'}]},description:`뱃지의 모서리 둥글기
@default 'circle'`,defaultValue:{value:'"circle"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"뱃지의 내용"}}};const X={title:"Components/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{radius:{control:{type:"select"},options:["none","100","200","300","circle"]},theme:{control:{type:"select"},options:["primary","secondary","success","warning","danger","info"]},size:{control:{type:"select"},options:["x-small","small","medium","large"]},backgroundColor:{control:"color"},borderColor:{control:"color"},color:{control:"color"},borderWidth:{control:"text"}}},a={args:{children:"기본 뱃지",theme:"primary",size:"medium",radius:"circle"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{radius:"none",children:"None"}),e.jsx(r,{radius:"100",children:"100"}),e.jsx(r,{radius:"200",children:"200"}),e.jsx(r,{radius:"300",children:"300"}),e.jsx(r,{radius:"circle",children:"Circle"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(r,{theme:"primary",children:"Primary"}),e.jsx(r,{theme:"secondary",children:"Secondary"}),e.jsx(r,{theme:"success",children:"Success"}),e.jsx(r,{theme:"warning",children:"Warning"}),e.jsx(r,{theme:"danger",children:"Danger"}),e.jsx(r,{theme:"info",children:"Info"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(r,{size:"x-small",children:"X-Small"}),e.jsx(r,{size:"small",children:"Small"}),e.jsx(r,{size:"medium",children:"Medium"}),e.jsx(r,{size:"large",children:"Large"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(r,{backgroundColor:"#8B5CF6",color:"white",children:"커스텀 배경색"}),e.jsx(r,{backgroundColor:"transparent",borderColor:"#8B5CF6",color:"#8B5CF6",children:"커스텀 테두리"}),e.jsx(r,{backgroundColor:"#FFFBEB",color:"#F59E0B",borderColor:"#F59E0B",children:"커스텀 조합"}),e.jsx(r,{backgroundColor:"#FEF2F2",color:"#EF4444",borderWidth:"2px",borderColor:"#EF4444",children:"두꺼운 테두리"}),e.jsx(r,{style:{background:"linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)"},color:"white",children:"그라데이션"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(r,{theme:"primary",size:"small",radius:"100",children:"Small Primary Rounded"}),e.jsx(r,{theme:"success",size:"medium",radius:"200",children:"Medium Success Rounded"}),e.jsx(r,{theme:"danger",size:"large",radius:"300",children:"Large Danger Rounded"}),e.jsx(r,{theme:"warning",size:"medium",radius:"circle",children:"Warning Circle"})]})};var u,g,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "기본 뱃지",
    theme: "primary",
    size: "medium",
    radius: "circle"
  }
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var B,x,h;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px"
  }}>
      <Badge radius="none">None</Badge>
      <Badge radius="100">100</Badge>
      <Badge radius="200">200</Badge>
      <Badge radius="300">300</Badge>
      <Badge radius="circle">Circle</Badge>
    </div>
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,f,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      <Badge theme="primary">Primary</Badge>
      <Badge theme="secondary">Secondary</Badge>
      <Badge theme="success">Success</Badge>
      <Badge theme="warning">Warning</Badge>
      <Badge theme="danger">Danger</Badge>
      <Badge theme="info">Info</Badge>
    </div>
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var v,C,F;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    alignItems: "center"
  }}>
      <Badge size="x-small">X-Small</Badge>
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
    </div>
}`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var b,S,w;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      <Badge backgroundColor="#8B5CF6" color="white">
        커스텀 배경색
      </Badge>
      <Badge backgroundColor="transparent" borderColor="#8B5CF6" color="#8B5CF6">
        커스텀 테두리
      </Badge>
      <Badge backgroundColor="#FFFBEB" color="#F59E0B" borderColor="#F59E0B">
        커스텀 조합
      </Badge>
      <Badge backgroundColor="#FEF2F2" color="#EF4444" borderWidth="2px" borderColor="#EF4444">
        두꺼운 테두리
      </Badge>
      <Badge style={{
      background: "linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)"
    }} color="white">
        그라데이션
      </Badge>
    </div>
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,E,R;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      <Badge theme="primary" size="small" radius="100">
        Small Primary Rounded
      </Badge>
      <Badge theme="success" size="medium" radius="200">
        Medium Success Rounded
      </Badge>
      <Badge theme="danger" size="large" radius="300">
        Large Danger Rounded
      </Badge>
      <Badge theme="warning" size="medium" radius="circle">
        Warning Circle
      </Badge>
    </div>
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const O=["Default","Radius","Themes","Sizes","CustomStyles","Combinations"];export{i as Combinations,l as CustomStyles,a as Default,n as Radius,d as Sizes,s as Themes,O as __namedExportsOrder,X as default};
