import{t as C,a as V}from"../chunks/DDEDx2Sc.js";import"../chunks/ZIXVROpa.js";import{f as H,c as d,s as t,r as o,b as _}from"../chunks/BAHzCZOW.js";import{h as l}from"../chunks/PNA3GBkg.js";import{l as F,s as B}from"../chunks/B5HJOU4F.js";import{L as T}from"../chunks/_mV2h0Bs.js";import{T as e}from"../chunks/XW6xbX-8.js";const b={title:"Utility classes and CSS variables",desc:"daisyUI provides a few useful utility classes and CSS variables to help you use the library more effectively."},{title:R,desc:q}=b;var $=C('<h2 id=""><!></h2> <p>All daisyUI colors can be used as utility classes. Just like any other Tailwind CSS color.<br> For example you can use <code>primary</code> color with any of Tailwind CSS color utilities.</p> <p>Read more about <a href="/docs/colors">color names</a>.</p> <table><thead><tr><th>Class Name</th><th>Description</th></tr></thead><tbody><tr><td><code>bg-primary</code></td><td>Sets the background color to the primary color</td></tr><tr><td><code>to-primary</code></td><td>Sets the ending color for a gradient to the primary color</td></tr><tr><td><code>via-primary</code></td><td>Sets the middle color for a gradient to the primary color</td></tr><tr><td><code>from-primary</code></td><td>Sets the starting color for a gradient to the primary color</td></tr><tr><td><code>text-primary</code></td><td>Sets the text color to the primary color</td></tr><tr><td><code>ring-primary</code></td><td>Sets the ring color to the primary color</td></tr><tr><td><code>fill-primary</code></td><td>Sets the fill color for SVG elements to the primary color</td></tr><tr><td><code>caret-primary</code></td><td>Sets the caret color to the primary color</td></tr><tr><td><code>stroke-primary</code></td><td>Sets the stroke color for SVG elements to the primary color</td></tr><tr><td><code>border-primary</code></td><td>Sets the border color to the primary color</td></tr><tr><td><code>divide-primary</code></td><td>Sets the color for dividing borders to the primary color</td></tr><tr><td><code>accent-primary</code></td><td>Sets the accent color to the primary color</td></tr><tr><td><code>shadow-primary</code></td><td>Sets the shadow color to the primary color</td></tr><tr><td><code>outline-primary</code></td><td>Sets the outline color to the primary color</td></tr><tr><td><code>decoration-primary</code></td><td>Sets the text decoration color to the primary color</td></tr><tr><td><code>placeholder-primary</code></td><td>Sets the placeholder text color to the primary color</td></tr><tr><td><code>ring-offset-primary</code></td><td>Sets the ring offset color to the primary color</td></tr></tbody></table> <p>You can use <code>bg-primary</code> to set the background color to the primary color and <code>text-primary-content</code> to set the text color to the primary color.</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><!></div> <p>You can also control the opacity of the color like</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><!></div> <h2 id="-1"><a aria-hidden="true" tabindex="-1" href="#-1"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><!></h2> <p>Tailwind CSS provides fixed values for border radius, such as <code>rounded-sm</code>, <code>rounded-lg</code>, <code>rounded-xl</code>, etc.<br> daisyUI provides a few more border radius values which are tokenized for components and can be customized based on the theme.</p> <p>Change the theme to see the border radius changes:</p> <div class="grid sm:grid-cols-3 gap-4"><div class="grid place-content-center text-xs py-10 bg-base-content text-base-100 rounded-box">rounded-box</div> <div class="grid place-content-center text-xs py-10 bg-base-content text-base-100 rounded-field">rounded-field</div> <div class="grid place-content-center text-xs py-10 bg-base-content text-base-100 rounded-selector">rounded-selector</div></div> <table><thead><tr><th>Class Name</th><th>CSS Variable</th><th>Description</th></tr></thead><tbody><tr><td><code>rounded-box</code></td><td><code>var(--radius-box)</code></td><td>For large sized components like card, modal, alert, etc.</td></tr><tr><td><code>rounded-field</code></td><td><code>var(--radius-field)</code></td><td>For medium sized components like button, input, select, tab, etc.</td></tr><tr><td><code>rounded-selector</code></td><td><code>var(--radius-selector)</code></td><td>For small sized components like checkbox, toggle, badge, etc.</td></tr></tbody></table> <h2 id="-2"><a aria-hidden="true" tabindex="-1" href="#-2"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><!></h2> <p><code>glass</code> creates a glass effect on the element.</p> <div class="rounded-box p-10 " style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"><div class="glass h-40 rounded-box grid place-content-center">Glass</div></div> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><!></div> <h2 id="theme-css-variables"><a aria-hidden="true" tabindex="-1" href="#theme-css-variables"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>Theme CSS variables</h2> <p>These CSS variables can be customized for each themes. Read more about <a href="/docs/colors">color names</a>.</p> <table><thead><tr><th>CSS Variable</th><th>Description</th></tr></thead><tbody><tr><td><code>--color-primary</code></td><td>Primary brand color</td></tr><tr><td><code>--color-primary-content</code></td><td>Foreground content color to use on primary color</td></tr><tr><td><code>--color-secondary</code></td><td>Secondary brand color</td></tr><tr><td><code>--color-secondary-content</code></td><td>Foreground content color to use on secondary color</td></tr><tr><td><code>--color-accent</code></td><td>Accent brand color</td></tr><tr><td><code>--color-accent-content</code></td><td>Foreground content color to use on accent color</td></tr><tr><td><code>--color-neutral</code></td><td>Neutral dark color</td></tr><tr><td><code>--color-neutral-content</code></td><td>Foreground content color to use on neutral color</td></tr><tr><td><code>--color-base-100</code></td><td>Base color of page, used for blank backgrounds</td></tr><tr><td><code>--color-base-200</code></td><td>Base color, darker shade</td></tr><tr><td><code>--color-base-300</code></td><td>Base color, even more darker shade</td></tr><tr><td><code>--color-base-content</code></td><td>Foreground content color to use on base color</td></tr><tr><td><code>--color-info</code></td><td>Info color</td></tr><tr><td><code>--color-info-content</code></td><td>Foreground content color to use on info color</td></tr><tr><td><code>--color-success</code></td><td>Success color</td></tr><tr><td><code>--color-success-content</code></td><td>Foreground content color to use on success color</td></tr><tr><td><code>--color-warning</code></td><td>Warning color</td></tr><tr><td><code>--color-warning-content</code></td><td>Foreground content color to use on warning color</td></tr><tr><td><code>--color-error</code></td><td>Error color</td></tr><tr><td><code>--color-error-content</code></td><td>Foreground content color to use on error color</td></tr><tr><td><code>--radius-selector</code></td><td>Border radius for selectors like checkbox, toggle, badge, etc</td></tr><tr><td><code>--radius-field</code></td><td>Border radius for fields like input, select, tab, etc</td></tr><tr><td><code>--radius-box</code></td><td>Border radius for boxes like card, modal, alert, etc</td></tr><tr><td><code>--size-selector</code></td><td>Base scale size for selectors like checkbox, toggle, badge, etc</td></tr><tr><td><code>--size-field</code></td><td>Base scale size for fields like input, select, tab, etc</td></tr><tr><td><code>--border</code></td><td>Border width of all components</td></tr><tr><td><code>--depth</code></td><td>(binary) Adds a depth effect for relevant components</td></tr><tr><td><code>--noise</code></td><td>(binary) Adds a background noise effect for relevant components</td></tr></tbody></table> <h2 id="-3"><a aria-hidden="true" tabindex="-1" href="#-3"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><!></h2> <p>For advanced use: These CSS variables are being used internally for a specific components. You probably won’t need to customize them, but you can if you want to.</p> <p>If you are using a prefix for daisyUI, these CSS variables will be prefixed with that prefix as well. For example if prefix is <code>daisy-</code>, The <code>--alert-color</code> CSS variable will be <code>--daisy-alert-color</code>.</p> <blockquote class="alert not-italic items-start text-xs leading-loose *:m-0!"><p><svg class="size-4 ms-2 inline-block text-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" stroke-width="2"></circle></g></svg></p> <p>These variables are for internal use. They are not subject of semantic versioning and some of them may be modified or removed in future minor versions, in which case your custom styles might lose their effect, so if you want to modify these variables and your UI really depends on the customized value, make sure you are using a fixed version of daisyUI, not the latest version.</p></blockquote> <table><thead><tr><th>Component</th><th>CSS Variable</th><th>Description</th></tr></thead><tbody><tr><td>Alert</td><td><code>--alert-color</code></td><td>color of the alert</td></tr><tr><td>Badge</td><td><code>--badge-color</code></td><td>color of the badge</td></tr><tr><td></td><td><code>--size</code></td><td>size of the badge</td></tr><tr><td>Button</td><td><code>--btn-color</code></td><td>background color of the button</td></tr><tr><td></td><td><code>--btn-fg</code></td><td>foreground color of the button</td></tr><tr><td></td><td><code>--btn-shadow</code></td><td>shadow of the button</td></tr><tr><td></td><td><code>--btn-noise</code></td><td>noise background of the button if enabled</td></tr><tr><td></td><td><code>--btn-p</code></td><td>padding of the button</td></tr><tr><td></td><td><code>--size</code></td><td>size of the button</td></tr><tr><td>Card</td><td><code>--card-p</code></td><td>padding of the card body</td></tr><tr><td></td><td><code>--card-fs</code></td><td>font size of the card body</td></tr><tr><td></td><td><code>--cardtitle-fs</code></td><td>font size of the card title</td></tr><tr><td>Checkbox</td><td><code>--size</code></td><td>size of the checkbox</td></tr><tr><td>Countdown</td><td><code>--value</code></td><td>value of the countdown</td></tr><tr><td>Divider</td><td><code>--divider-m</code></td><td>margin of the divider</td></tr><tr><td>Dropdown</td><td><code>--anchor-v</code></td><td>vertical position of the anchor</td></tr><tr><td></td><td><code>--anchor-h</code></td><td>horizontal position of the anchor</td></tr><tr><td>File input</td><td><code>--input-color</code></td><td>color of the file input</td></tr><tr><td></td><td><code>--size</code></td><td>size of the file input</td></tr><tr><td>Indicator</td><td><code>--indicator-t</code></td><td>top position of the indicator</td></tr><tr><td></td><td><code>--indicator-b</code></td><td>bottom position of the indicator</td></tr><tr><td></td><td><code>--indicator-s</code></td><td>start position of the indicator</td></tr><tr><td></td><td><code>--indicator-e</code></td><td>end position of the indicator</td></tr><tr><td></td><td><code>--indicator-y</code></td><td>vertical position of the indicator</td></tr><tr><td></td><td><code>--indicator-x</code></td><td>horizontal position of the indicator</td></tr><tr><td>Input</td><td><code>--input-color</code></td><td>color of the input</td></tr><tr><td></td><td><code>--size</code></td><td>size of the input</td></tr><tr><td>Kbd</td><td><code>--size</code></td><td>size of the kbd</td></tr><tr><td>List</td><td><code>--list-grid-cols</code></td><td>grid columns of the list</td></tr><tr><td>Menu</td><td><code>--menu-active-fg</code></td><td>foreground color of the active menu item</td></tr><tr><td></td><td><code>--menu-active-bg</code></td><td>background color of the active menu item</td></tr><tr><td>Modal</td><td><code>--modal-tl</code></td><td>top left border radius of the modal</td></tr><tr><td></td><td><code>--modal-tr</code></td><td>top right border radius of the modal</td></tr><tr><td></td><td><code>--modal-bl</code></td><td>bottom left border radius of the modal</td></tr><tr><td></td><td><code>--modal-br</code></td><td>bottom right border radius of the modal</td></tr><tr><td>Radial progress</td><td><code>--value</code></td><td>value of the radial progress</td></tr><tr><td></td><td><code>--size</code></td><td>size of the radial progress</td></tr><tr><td></td><td><code>--thickness</code></td><td>thickness of the radial progress</td></tr><tr><td></td><td><code>--radialprogress</code></td><td>for calculating the radial progress position</td></tr><tr><td>Radio</td><td><code>--size</code></td><td>size of the radio</td></tr><tr><td>Range</td><td><code>--range-bg</code></td><td>background color of the range slider thumb</td></tr><tr><td></td><td><code>--range-thumb</code></td><td>color of the range slider thumb</td></tr><tr><td></td><td><code>--range-thumb-size</code></td><td>size of the range slider thumb</td></tr><tr><td></td><td><code>--range-progress</code></td><td>color of the range slider progress</td></tr><tr><td></td><td><code>--range-fill</code></td><td>binary, whether to fill the range slider progress or not</td></tr><tr><td></td><td><code>--range-p</code></td><td>padding of the range slider thumb</td></tr><tr><td></td><td><code>--size</code></td><td>size of the range slider</td></tr><tr><td>Select</td><td><code>--input-color</code></td><td>color of the input</td></tr><tr><td></td><td><code>--size</code></td><td>size of the select</td></tr><tr><td>Tab</td><td><code>--tabs-height</code></td><td>height of the tabs</td></tr><tr><td></td><td><code>--tabs-direction</code></td><td>direction of the tabs</td></tr><tr><td></td><td><code>--tab-p</code></td><td>padding of the tab</td></tr><tr><td></td><td><code>--tab-bg</code></td><td>background color of the tab</td></tr><tr><td></td><td><code>--tab-border-color</code></td><td>border color of the tab</td></tr><tr><td></td><td><code>--tab-radius-ss</code></td><td>start start border radius of the tab</td></tr><tr><td></td><td><code>--tab-radius-se</code></td><td>start end border radius of the tab</td></tr><tr><td></td><td><code>--tab-radius-es</code></td><td>end start border radius of the tab</td></tr><tr><td></td><td><code>--tab-radius-ee</code></td><td>end end border radius of the tab</td></tr><tr><td></td><td><code>--tab-order</code></td><td>Order of the tab</td></tr><tr><td></td><td><code>--tab-radius-min</code></td><td>minimum border radius of the lift tab</td></tr><tr><td></td><td><code>--tab-paddings</code></td><td>all padding values of the lift tab</td></tr><tr><td></td><td><code>--tab-border-colors</code></td><td>all border color values of the lift tab</td></tr><tr><td></td><td><code>--tab-corner-width</code></td><td>corner width of the lift tab</td></tr><tr><td></td><td><code>--tab-corner-height</code></td><td>corner height of the lift tab</td></tr><tr><td></td><td><code>--tab-corner-width</code></td><td>corner width of the lift tab</td></tr><tr><td></td><td><code>--tab-corner-position</code></td><td>corner position of the lift tab</td></tr><tr><td></td><td><code>--tab-inset</code></td><td>inset position of the lift tab</td></tr><tr><td></td><td><code>--radius-start</code></td><td>border radius for the corner of the lift tab</td></tr><tr><td></td><td><code>--radius-end</code></td><td>border radius for the corner of the lift tab</td></tr><tr><td></td><td><code>--tabcontent-margin</code></td><td>margin of the tab content</td></tr><tr><td></td><td><code>--tabcontent-radius-ss</code></td><td>start start border radius of the tab content</td></tr><tr><td></td><td><code>--tabcontent-radius-se</code></td><td>start end border radius of the tab content</td></tr><tr><td></td><td><code>--tabcontent-radius-es</code></td><td>end start border radius of the tab content</td></tr><tr><td></td><td><code>--tabcontent-radius-ee</code></td><td>end end border radius of the tab content</td></tr><tr><td></td><td><code>--tabcontent-order</code></td><td>order of the tab content</td></tr><tr><td>Textarea</td><td><code>--input-color</code></td><td>color of the input</td></tr><tr><td></td><td><code>--size</code></td><td>size of the textarea</td></tr><tr><td>Timeline</td><td><code>--timeline-row-start</code></td><td>start position of the timeline row</td></tr><tr><td></td><td><code>--timeline-row-end</code></td><td>end position of the timeline row</td></tr><tr><td></td><td><code>--timeline-col-start</code></td><td>start position of the timeline column</td></tr><tr><td></td><td><code>--timeline-col-end</code></td><td>end position of the timeline column</td></tr><tr><td>Toast</td><td><code>--toast-x</code></td><td>horizontal position of the toast</td></tr><tr><td></td><td><code>--toast-y</code></td><td>vertical position of the toast</td></tr><tr><td>Toggle</td><td><code>--toggle-p</code></td><td>padding of the toggle</td></tr><tr><td></td><td><code>--size</code></td><td>size of the toggle</td></tr><tr><td>Tooltip</td><td><code>--tt-bg</code></td><td>background color of the tooltip</td></tr><tr><td></td><td><code>--tt-off</code></td><td>offset of the tooltip</td></tr><tr><td></td><td><code>--tt-tailw</code></td><td>position of the tooltip tail</td></tr><tr><td>Glass</td><td><code>--glass-blur</code></td><td>blur of the glass effect</td></tr><tr><td></td><td><code>--glass-opacity</code></td><td>opacity of the glass effect</td></tr><tr><td></td><td><code>--glass-reflect-degree</code></td><td>degree of the glass reflection</td></tr><tr><td></td><td><code>--glass-reflect-opacity</code></td><td>opacity of the glass reflection</td></tr><tr><td></td><td><code>--glass-border-opacity</code></td><td>opacity of the glass border</td></tr><tr><td></td><td><code>--glass-text-shadow-opacity</code></td><td>opacity of the glass text shadow</td></tr><tr><td>Join</td><td><code>--join-ss</code></td><td>start start border radius of the join</td></tr><tr><td></td><td><code>--join-se</code></td><td>start end border radius of the join</td></tr><tr><td></td><td><code>--join-es</code></td><td>end start border radius of the join</td></tr><tr><td></td><td><code>--join-ee</code></td><td>end end border radius of the join</td></tr></tbody></table>',1);function P(u,f){const m=F(f,["children","$$slots","$$events","$$legacy"]);T(u,B(()=>m,b,{children:(g,j)=>{var h=$(),r=H(h),v=d(r);e(v,{text:"Color utility classes"}),o(r);var a=t(r,10),y=d(a);l(y,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">bg-primary text-primary-content</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Primary color</span><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>'),o(a);var c=t(a,4),k=d(c);l(k,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">bg-primary text-primary-content/60</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Primary-content color with 60% opacity</span><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>'),o(c);var i=t(c,2),x=t(d(i));e(x,{text:"Border radius"}),o(i);var s=t(i,10),w=t(d(s));e(w,{text:"Glass"}),o(s);var n=t(s,6),S=d(n);l(S,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">glass</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Glass</span><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>'),o(n);var p=t(n,8),z=t(d(p));e(z,{text:"Component specific CSS variables"}),o(p),_(8),V(g,h)},$$slots:{default:!0}}))}export{P as component};
