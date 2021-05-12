import{t as A,a as S}from"../chunks/DDEDx2Sc.js";import"../chunks/ZIXVROpa.js";import{s as a,f as I,c as s,r as t}from"../chunks/BAHzCZOW.js";import{h as e}from"../chunks/PNA3GBkg.js";import{l as Z,s as R}from"../chunks/B5HJOU4F.js";import{L as $}from"../chunks/_mV2h0Bs.js";const m={title:"Install daisyUI for Rails",desc:"How to install Tailwind CSS and daisyUI in a Rails project"},{title:P,desc:L}=m;var U=A('<h3 id="1-create-a-new-rails-project"><a aria-hidden="true" tabindex="-1" href="#1-create-a-new-rails-project"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>1. Create a new Rails project</h3> <p>Install Ruby on Rails according to the <a href="https://guides.rubyonrails.org/getting_started.html" rel="nofollow" target="_blank">official Rails guide</a>.</p> <p>Create a new Rails project</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <h3 id="2-install-tailwind-css-for-rails"><a aria-hidden="true" tabindex="-1" href="#2-install-tailwind-css-for-rails"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>2. Install Tailwind CSS for Rails</h3> <p>Install <a href="https://github.com/rails/tailwindcss-rails" rel="nofollow" target="_blank">Tailwind CSS 4 gem</a> for Rails</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <h3 id="3-add-daisyui"><a aria-hidden="true" tabindex="-1" href="#3-add-daisyui"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>3. Add daisyUI</h3> <h4 id="option-a-install-daisyui-as-a-node-dependency"><a aria-hidden="true" tabindex="-1" href="#option-a-install-daisyui-as-a-node-dependency"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>Option A. Install daisyUI as a Node dependency</h4> <p>Initialize a package.json (if you don’t have one) and install daisyUI</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <p>Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app/assets/tailwind/application.css</div><!></div> <h4 id="option-b-use-daisyui-from-cdn"><a aria-hidden="true" tabindex="-1" href="#option-b-use-daisyui-from-cdn"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>Option B. Use daisyUI from CDN</h4> <p>Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app/assets/tailwind/application.css</div><!></div> <ul><li>You can <a href="/docs/cdn/">choose the parts you need</a></li> <li>You can <a href="https://cdn.jsdelivr.net/npm/daisyui@5/chunks.css" rel="nofollow" target="_blank">import small CSS files separately</a></li> <li>You can <a href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="nofollow" target="_blank">import all themes</a> or <a href="https://cdn.jsdelivr.net/npm/daisyui@5/theme/light.css" rel="nofollow" target="_blank">specific themes</a></li></ul> <h3 id="4-create-a-homepage-in-rails"><a aria-hidden="true" tabindex="-1" href="#4-create-a-homepage-in-rails"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>4. Create a homepage in Rails</h3> <p>Now you can use daisyUI class names! Let’s create a simple page and try a button</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app/controllers/pages_controller.rb</div><!></div> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">config/routes.rb</div><!></div> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app/views/pages/home.html.erb</div><!></div> <h3 id="5-start-rails"><a aria-hidden="true" tabindex="-1" href="#5-start-rails"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>5. Start Rails</h3> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div>',1);function N(u,y){const g=Z(y,["children","$$slots","$$events","$$legacy"]);$(u,R(()=>g,m,{children:(b,j)=>{var h=U(),i=a(I(h),6),k=a(s(i));e(k,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">rails</span><span style="color:var(--shiki-attr-value)"> new</span><span style="color:var(--shiki-attr-value)"> my-app</span></span>
<span class="line"><span style="color:#0DB9D7">cd</span><span style="color:var(--shiki-attr-value)"> my-app</span></span></code></pre>`),t(i);var o=a(i,6),w=a(s(o));e(w,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">./bin/bundle</span><span style="color:var(--shiki-attr-value)"> add</span><span style="color:var(--shiki-attr-value)"> tailwindcss-rails</span><span style="color:#E0AF68"> --version</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">4.0.0</span><span style="color:var(--shiki-punctuation)">"</span></span>
<span class="line"><span style="color:#C0CAF5">./bin/rails</span><span style="color:var(--shiki-attr-value)"> tailwindcss:install</span></span></code></pre>`),t(o);var n=a(o,8),x=a(s(n));e(x,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">npm</span><span style="color:var(--shiki-attr-value)"> init</span><span style="color:#E0AF68"> -y</span></span>
<span class="line"><span style="color:#C0CAF5">npm</span><span style="color:var(--shiki-attr-value)"> install</span><span style="color:var(--shiki-attr-value)"> daisyui@latest</span></span></code></pre>`),t(n);var r=a(n,4),f=a(s(r));e(f,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import </span><span style="color:var(--shiki-attr-value)">"tailwindcss"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin </span><span style="color:var(--shiki-attr-value)">"daisyui"</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),t(r);var l=a(r,6),V=a(s(l));e(V,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import </span><span style="color:var(--shiki-attr-value)">"tailwindcss"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@import </span><span style="color:var(--shiki-attr-value)">"https://cdn.jsdelivr.net/npm/daisyui@5"</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),t(l);var p=a(l,8),H=a(s(p));e(H,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">class</span><span style="color:#FF9E64"> PagesController</span><span style="color:var(--shiki-attr-name)"> &#x3C;</span><span style="color:#FF9E64"> ApplicationController</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">  def</span><span style="color:#7AA2F7"> home</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">  end</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">end</span></span></code></pre>`),t(p);var c=a(p,2),C=a(s(c));e(C,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#0DB9D7">Rails</span><span style="color:var(--shiki-punctuation)">.</span><span style="color:#7AA2F7">application</span><span style="color:var(--shiki-punctuation)">.</span><span style="color:#7AA2F7">routes</span><span style="color:var(--shiki-punctuation)">.</span><span style="color:#7AA2F7">draw</span><span style="color:var(--shiki-attr-name)"> do</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  root </span><span style="color:#FF9E64">to:</span><span style="color:var(--shiki-punctuation)"> '</span><span style="color:var(--shiki-attr-value)">pages#home</span><span style="color:var(--shiki-punctuation)">'</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">end</span></span></code></pre>`),t(c);var d=a(c,2),_=a(s(d));e(_,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">btn btn-primary</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Hello daisyUI!</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span></code></pre>'),t(d);var v=a(d,4),F=a(s(v));e(F,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">./bin/dev</span></span></code></pre>'),t(v),S(b,h)},$$slots:{default:!0}}))}export{N as component};
