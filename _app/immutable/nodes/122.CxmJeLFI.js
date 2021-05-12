import{t as w,a as x}from"../chunks/DDEDx2Sc.js";import"../chunks/ZIXVROpa.js";import{s as a,f,c as s,r as t,b as H}from"../chunks/BAHzCZOW.js";import{h as i}from"../chunks/PNA3GBkg.js";import{l as V,s as C}from"../chunks/B5HJOU4F.js";import{L as S}from"../chunks/_mV2h0Bs.js";const c={title:"Use daisyUI with Tailwind CSS CLI",desc:"How to install and use daisyUI with Tailwind CSS CLI"},{title:L,desc:U}=c;var _=w('<h3 id="1-install"><a aria-hidden="true" tabindex="-1" href="#1-install"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>1. Install</h3> <p>Initialize a new Node project in the current directory using <code>npm init -y</code> if it’s not a Node project already.</p> <p>Install Tailwind CSS CLI and daisyUI</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <h3 id="2-add-tailwind-css-and-daisyui"><a aria-hidden="true" tabindex="-1" href="#2-add-tailwind-css-and-daisyui"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>2. Add Tailwind CSS and daisyUI</h3> <p>Add Tailwind CSS and daisyUI to your CSS file.<br> Address your HTML and other markup files in the <code>source</code> function.</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app.css</div><!></div> <h3 id="3-build-css"><a aria-hidden="true" tabindex="-1" href="#3-build-css"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>3. Build CSS</h3> <p>Add a script to your package.json to build the CSS.</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">package.json</div><!></div> <p>Run the script to build the CSS file</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <p>This command creates a <code>public/output.css</code> file with the compiled CSS. You can link this file to your HTML file.</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">public/index.html</div><!></div> <p>Now you can use daisyUI class names!</p>',1);function Z(d,h){const v=V(h,["children","$$slots","$$events","$$legacy"]);S(d,C(()=>v,c,{children:(u,A)=>{var l=_(),o=a(f(l),6),y=a(s(o));i(y,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">npm</span><span style="color:var(--shiki-attr-value)"> install</span><span style="color:var(--shiki-attr-value)"> tailwindcss@latest</span><span style="color:var(--shiki-attr-value)"> @tailwindcss/cli@latest</span><span style="color:var(--shiki-attr-value)"> daisyui@latest</span></span></code></pre>'),t(o);var n=a(o,6),m=a(s(n));i(m,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import </span><span style="color:var(--shiki-attr-value)">"tailwindcss"</span><span style="color:#0DB9D7"> source</span><span style="color:var(--shiki-punctuation)">(</span><span style="color:#FF9E64">none</span><span style="color:var(--shiki-punctuation)">);</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@source </span><span style="color:var(--shiki-attr-value)">"./public/*.&#123;html,js&#125;"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin </span><span style="color:var(--shiki-attr-value)">"daisyui"</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),t(n);var e=a(n,6),b=a(s(e));i(b,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#9ABDF5">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  "</span><span style="color:#7AA2F7">scripts</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">: </span><span style="color:#9ABDF5">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">    "</span><span style="color:#0DB9D7">build:css</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">: </span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">npx @tailwindcss/cli -i app.css -o public/output.css</span><span style="color:var(--shiki-punctuation)">"</span></span>
<span class="line"><span style="color:#9ABDF5">  &#125;</span><span style="color:var(--shiki-punctuation)">,</span></span>
<span class="line"><span style="color:#9ABDF5">&#125;</span></span></code></pre>`),t(e);var r=a(e,4),k=a(s(r));i(k,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">npm</span><span style="color:var(--shiki-attr-value)"> run</span><span style="color:var(--shiki-attr-value)"> build:css</span></span></code></pre>'),t(r);var p=a(r,4),g=a(s(p));i(g,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;link</span><span style="color:var(--shiki-attr-name)"> href</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">./output.css</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> rel</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">stylesheet</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span></code></pre>'),t(p),H(2),x(u,l)},$$slots:{default:!0}}))}export{Z as component};
