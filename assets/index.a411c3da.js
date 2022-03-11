var w=Object.defineProperty,B=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var E=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))O.call(t,n)&&E(e,n,t[n]);if(S)for(var n of S(t))R.call(t,n)&&E(e,n,t[n]);return e},y=(e,t)=>B(e,D(t));import{j as P,r as c,s as m,W as M,L as U,u as _,a as A,R as q,b as H,B as J,c as W,d as k}from"./vendor.5d3b926d.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};G();const r=P.exports.jsx,p=P.exports.jsxs,z=P.exports.Fragment,I=c.exports.createContext([[],()=>{}]);function K({children:e}){const[t,n]=c.exports.useState([]);function u(){fetch("https://jsonplaceholder.typicode.com/posts").then(o=>o.json()).then(o=>{n(o)})}return c.exports.useLayoutEffect(()=>{u()},[]),r(I.Provider,{value:[t,n],children:e})}function v(){return c.exports.useContext(I)}const j=m.form`
  display: flex;
  flex-direction: column;
  padding: var(--size-2);
  margin-bottom: 20px;

  div {
    display: flex;
    width: 100%;
  }

  input {
    flex: 1;
    border: var(--border-size-1) var(--gray-9) solid;
    border-radius: var(--radius-2);
  }

  label {
    width: var(--size-9);
  }

  input,
  label {
    margin: var(--size-1);
  }

  button {
    border: var(--border-size-1) var(--gray-9) solid;
    border-radius: var(--radius-2);
  }
`;function Q(){const[e,t]=v(),[n,u]=c.exports.useState(""),[o,a]=c.exports.useState(""),[f,i]=c.exports.useState("");return p(j,{onSubmit:l=>{l.preventDefault(),fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:n,body:o,userId:f}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(d=>d.json()).then(({title:d,id:b})=>{t([{id:b,userId:parseInt(f),body:o,title:d},...e]),u(""),a(""),i("")}).catch(console.error)},children:[p("div",{children:[r("label",{htmlFor:"title",children:"Title"}),r("input",{type:"text",name:"title",id:"title",value:n,onChange:l=>{var d;u((d=l.target.value)!=null?d:"")}})]}),p("div",{children:[r("label",{htmlFor:"body",children:"Body"}),r("input",{type:"text",name:"body",id:"body",value:o,onChange:l=>{a(l.target.value)}})]}),p("div",{children:[r("label",{htmlFor:"userId",children:"UserId"}),r("input",{type:"text",name:"userId",id:"userId",value:f,onChange:l=>{var d;i((d=l.target.value)!=null?d:"")}})]}),r("br",{}),r("button",{children:"submit"})]})}const V=M`
  :root {
    --link: var(--gray-9)
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--surface-0);
    font-family: "Roboto", sans-serif;
  }
`,N=c.exports.createContext([0,()=>{}]);function X({children:e}){const[t,n]=c.exports.useState(0);return r(N.Provider,{value:[t,n],children:e})}function C(){return c.exports.useContext(N)}const Y=m.button`
  background-color: var(
    --${({color:e,intensity:t})=>(e!=null?e:"gray")+"-"+(t!=null?t:5)}
  );
  color: var(--gray-${({intensity:e})=>9-(e!=null?e:6)>=5?9:1});
  transition: background-color 0.1s;

  ${({bottom_left:e})=>e?"border-bottom-left-radius: var(--radius-2);":""}
  ${({top_left:e})=>e?"border-top-left-radius: var(--radius-2);":""}
  ${({top_rigth:e})=>e?"border-top-rigth-radius: var(--radius-2);":""}
  ${({bottom_rigth:e})=>e?"border-bottom-rigth-radius: var(--radius-2);":""}
  
  &:hover {
    background-color: var(
      --${({color:e,intensity:t})=>e+"-"+((t!=null?t:5)+1)}
    );
    color: var(
      --gray-${({intensity:e})=>9-(e!=null?e:6)-1>=5?9:1}
    );
  }
`,T=m.div`
  display: flex;
  width: 100%;
  flex-direction: ${({direction:e})=>e!=null?e:"initial"};
`;m(T)`
  align-items: center;
  justify-content: center;
`;const Z=m(j)`
  margin: var(--size-2);
  background-color: var(--surface-2);
  border: var(--border-size-1) var(--gray-9) solid;
  flex: 1;

  label {
    width: var(--size-8);
  }
`;function ee({post:e}){const[t,n]=v(),[,u]=C(),[o,a]=c.exports.useState(e.title),[f,i]=c.exports.useState(e.body);function g(){fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"PUT",body:JSON.stringify(y(x({},e),{title:o,body:f})),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(l=>l.json()).then(l=>{n(t.map(d=>d.id===e.id?y(x({},e),{title:o,body:f}):d)),u(0)})}return p(T,{children:[p(Z,{onSubmit:l=>{l.preventDefault(),g()},children:[p("div",{children:[r("label",{htmlFor:"titlePost",children:"Title"}),r("input",{type:"text",name:"title",id:"titlePost",value:o,onChange:l=>{var d;a((d=l.target.value)!=null?d:"")}})]}),p("div",{children:[r("label",{htmlFor:"bodyPost",children:"Body"}),r("input",{type:"text",name:"body",id:"bodyPost",value:f,onChange:l=>{var d;i((d=l.target.value)!=null?d:"")}})]}),r("button",{children:"submit"})]}),r(Y,{color:"gray",intensity:5,top_left:!0,bottom_left:!0,onClick:()=>{u(0)},children:"cancel"})]})}const te=m.div`
  display: flex;
  align-items: center;
  border: var(--border-size-1) solid var(--gray-9);
  border-radius: var(--radius-2);
  margin: var(--size-2);
  background-color: var(--surface-2);

  div.flex {
    flex: 1;
    margin: var(--size-2);

    h1 {
      font-size: var(--font-size-3);
      max-inline-size: 100%;
    }

    p {
      font-size: var(--font-size-1);
      max-inline-size: 100%;
    }
  }

  div.buttons {
    display: flex;
    flex-direction: column;
    height: 100%;

    button,
    a {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      width: var(--size-10);
      color: var(--gray-1);
      margin: auto;
      transition: background-color 0.1s;
    }

    button.delete {
      border-top-right-radius: var(--radius-2);
      background-color: var(--red-5);
      &:hover {
        background-color: var(--red-6);
      }
    }

    a {
      background-color: var(--green-5);
      &:hover {
        background-color: var(--green-6);
      }
    }

    button.edit {
      border-bottom-right-radius: var(--radius-2);
      background-color: var(--blue-5);
      &:hover {
        background-color: var(--blue-6);
      }
    }
  }
`;function re({post:e,onDelete:t}){const[n,u]=C();return n===e.id?r(ee,{post:e}):p(te,{children:[p("div",{className:"flex",children:[r("h1",{children:e.title}),r("p",{children:e.body})]}),p("div",{className:"buttons",children:[r("button",{className:"delete",onClick:()=>{t(e.id)},children:"delete"}),r(U,{to:`/post/${e.id}`,children:"post"}),r("button",{className:"edit",onClick:()=>{n!==e.id&&u(e.id)},children:"edit"})]})]})}var $=c.exports.memo(re);const oe=m.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  height: 70vh;
  margin-bottom: 1rem;
  overflow: auto;
`,ne=m.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: transparent;
    color: var(--gray-7);
    border: none;
    font-size: var(--font-size-1);

    &:hover {
      color: #111;
      transform: scale(1.1);
    }
  }
`;function se(){const[e,t]=_(),[,n]=C(),[u,o]=c.exports.useState(0),[a,f]=v(),[i,g]=c.exports.useState(()=>{var h;const s=parseInt((h=e.get("page"))!=null?h:"1");return isNaN(s)?1:s}),l=5,d=c.exports.useCallback(()=>{const s=a.length/l;return s>Math.floor(s)?Math.floor(s)+1:Math.floor(s)},[a,l]);function b(){g(i+1)}function F(){g(i-1)}function L(s){fetch(`https://jsonplaceholder.typicode.com/posts/${s}`,{method:"DELETE"}).then(()=>{f(a.filter(h=>h.id!==s))}).catch(()=>{alert("N\xE3o foi possivel remover o post")})}return c.exports.useEffect(()=>{var h;n(0);const s=parseInt((h=e.get("page"))!=null?h:"1");i!==s&&t({page:i.toString()})},[i]),c.exports.useEffect(()=>{var h;const s=parseInt((h=e.get("page"))!=null?h:"1");isNaN(s)||i!==s&&g(s)},[e]),c.exports.useEffect(()=>{const s=d();o(s),g(s!==0?i>s?s:i:1)},[a]),p(z,{children:[r(oe,{children:a.filter((s,h)=>h>=(i-1)*l&&h<i*l).map(s=>r($,{post:s,onDelete:L},s.id))}),p(ne,{children:[i>1?r("button",{onClick:F,children:"<"}):null,i,i<u?r("button",{onClick:b,children:">"}):null]})]})}function ae(){var f;const t=(f=A().id)!=null?f:"0",[n,u]=v(),[o]=n.filter(i=>i.id==parseInt(t));function a(i){fetch(`https://jsonplaceholder.typicode.com/posts/${i}`,{method:"DELETE"}).then(()=>{u(n.filter(g=>g.id!==i))}).catch(()=>{alert("N\xE3o foi possivel remover o post")})}return c.exports.useMemo(()=>o?r($,{post:o,onDelete:a}):r(z,{}),[o])}q.render(p(H.StrictMode,{children:[r(V,{}),r(K,{children:p(J,{children:[r(Q,{}),r(X,{children:p(W,{children:[r(k,{path:"/",element:r(se,{})}),r(k,{path:"/post/:id",element:r(ae,{})})]})})]})})]}),document.getElementById("root"));
