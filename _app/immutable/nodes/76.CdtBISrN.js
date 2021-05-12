import{t as i,a as t,c as p}from"../chunks/DDEDx2Sc.js";import"../chunks/ZIXVROpa.js";import{f as o,s as e}from"../chunks/BAHzCZOW.js";import{h as l}from"../chunks/PNA3GBkg.js";import{l as g,s as _}from"../chunks/B5HJOU4F.js";import{L as f}from"../chunks/YlfwopGd.js";import{C as r}from"../chunks/DadXKrVg.js";const m={title:"Join",desc:"Join is a container for grouping multiple items, it can be used to group buttons, inputs, etc. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.",layout:"components",classnames:{component:[{class:"join",desc:"For grouping multiple items"},{class:"join-item",desc:"Item inside join. Can be a button, input, etc."}],direction:[{class:"join-vertical",desc:"Show items vertically"},{class:"join-horizontal",desc:"Show items horizontally"}]}},{title:q,desc:H,layout:K,classnames:M}=m;var B=i('<div class="join"><button class="btn join-item">Button</button> <button class="btn join-item">Button</button> <button class="btn join-item">Button</button></div>'),w=i('<div class="join join-vertical"><button class="btn join-item">Button</button> <button class="btn join-item">Button</button> <button class="btn join-item">Button</button></div>'),S=i('<div class="join join-vertical lg:join-horizontal"><button class="btn join-item">Button</button> <button class="btn join-item">Button</button> <button class="btn join-item">Button</button></div>'),z=i('<div class="join"><div><div><input class="input join-item w-[5.3rem] md:w-52" placeholder="Search"></div></div> <select class="select join-item w-[5.8rem] md:w-auto"><option disabled selected>Filter</option><option>Sci-fi</option><option>Drama</option><option>Action</option></select> <div class="indicator"><span class="indicator-item badge badge-secondary">new</span> <button class="btn join-item">Search</button></div></div>'),P=i('<div class="join"><input class="input join-item w-36 lg:w-52" placeholder="Email"> <button class="btn join-item rounded-r-full">Subscribe</button></div>'),R=i('<div class="join"><input class="join-item btn" type="radio" name="options" aria-label="Radio 1"> <input class="join-item btn" type="radio" name="options" aria-label="Radio 2"> <input class="join-item btn" type="radio" name="options" aria-label="Radio 3"></div>'),J=i("<!> <!> <!> <!> <!> <!>",1);function N($,b){const x=g(b,["children","$$slots","$$events","$$legacy"]);f($,_(()=>x,m,{children:(C,E)=>{var u=J(),v=o(u);r(v,{title:"Join",desc:"",html:a=>{var s=p(),n=o(s);l(n,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$btn $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Button</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$btn $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Button</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$btn $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Button</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),t(a,s)},children:(a,s)=>{var n=B();t(a,n)},$$slots:{html:!0,default:!0}});var h=e(v,2);r(h,{title:"Group items vertically",desc:"",html:a=>{var s=p(),n=o(s);l(n,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join $$join-vertical</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$btn $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Button</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$btn $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Button</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$btn $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Button</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),t(a,s)},children:(a,s)=>{var n=w();t(a,n)},$$slots:{html:!0,default:!0}});var k=e(h,2);r(k,{title:"Responsive: it’s vertical on small screen and horizontal on large screen",desc:"",html:a=>{var s=p(),n=o(s);l(n,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join $$join-vertical lg:$$join-horizontal</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$btn $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Button</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$btn $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Button</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$btn $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Button</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),t(a,s)},children:(a,s)=>{var n=S();t(a,n)},$$slots:{html:!0,default:!0}});var y=e(k,2);r(y,{title:"With extra elements in the group",desc:"Even if join-item is not a direct child of the group, it still gets the style",html:a=>{var s=p(),n=o(s);l(n,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;div></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">    &#x3C;div></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">      &#x3C;input</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$input $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> placeholder</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">Search</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)"> /></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">    &#x3C;/div></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;/div></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;select</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$select $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">    &#x3C;option</span><span style="color:var(--shiki-attr-name)"> disabled</span><span style="color:var(--shiki-attr-name)"> selected</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Filter</span><span style="color:var(--shiki-punctuation)">&#x3C;/option></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">    &#x3C;option></span><span style="color:var(--shiki-token)">Sci-fi</span><span style="color:var(--shiki-punctuation)">&#x3C;/option></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">    &#x3C;option></span><span style="color:var(--shiki-token)">Drama</span><span style="color:var(--shiki-punctuation)">&#x3C;/option></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">    &#x3C;option></span><span style="color:var(--shiki-token)">Action</span><span style="color:var(--shiki-punctuation)">&#x3C;/option></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;/select></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$indicator</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">    &#x3C;span</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$indicator-item $$badge $$badge-secondary</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">new</span><span style="color:var(--shiki-punctuation)">&#x3C;/span></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">    &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$btn $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Search</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;/div></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),t(a,s)},children:(a,s)=>{var n=z();t(a,n)},$$slots:{html:!0,default:!0}});var d=e(y,2);r(d,{title:"Custom border radius",desc:"",html:a=>{var s=p(),n=o(s);l(n,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;input</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$input $$join-item</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> placeholder</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">Email</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)"> /></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$btn $$join-item rounded-r-full</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Subscribe</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),t(a,s)},children:(a,s)=>{var n=P();t(a,n)},$$slots:{html:!0,default:!0}});var j=e(d,2);r(j,{title:"Join radio inputs with btn style",desc:"",html:a=>{var s=p(),n=o(s);l(n,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;input</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> type</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">radio</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> name</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">options</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> aria-label</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">Radio 1</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)"> /></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;input</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> type</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">radio</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> name</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">options</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> aria-label</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">Radio 2</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)"> /></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;input</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> type</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">radio</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> name</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">options</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> aria-label</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">Radio 3</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)"> /></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),t(a,s)},children:(a,s)=>{var n=R();t(a,n)},$$slots:{html:!0,default:!0}}),t(C,u)},$$slots:{default:!0}}))}export{N as component};
