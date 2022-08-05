import{_ as e,c as s,o as n,a}from"./app.96b53f9b.js";const D=JSON.parse('{"title":"\u{1F525} (#72) \u{1F525} The CSS Unselector","description":"","frontmatter":{"title":"\u{1F525} (#72) \u{1F525} The CSS Unselector","head":[["link",{"rel":"canonical","href":"https://michaelnthiessen.com/weekly-071-july-27/"}]]},"headers":[{"level":2,"title":"\u{1F525} The CSS Unselector","slug":"\u{1F525}-the-css-unselector"},{"level":2,"title":"\u{1F525} Dynamic Returns","slug":"\u{1F525}-dynamic-returns"},{"level":2,"title":"\u{1F4DC} Invalidating Computed Props","slug":"\u{1F4DC}-invalidating-computed-props"},{"level":2,"title":"\u{1F4AC} Theory and Practice","slug":"\u{1F4AC}-theory-and-practice"},{"level":2,"title":"\u{1F9E0} Spaced-repetition: Why there must be one source of truth","slug":"\u{1F9E0}-spaced-repetition-why-there-must-be-one-source-of-truth"},{"level":2,"title":"\u6765\u6E90","slug":"\u6765\u6E90"}],"relativePath":"072.md"}'),t={name:"072.md"},o=a(`<p>\u5929\u54EA\uFF0C\u867D\u7136\u5DF2\u7ECF\u6301\u7EED\u53D1\u5E03\u4E86 71 \u5468\u7684\u5468\u520A\uFF0C\u6211\u4ECA\u5929\u5DEE\u70B9\u5FD8\u4E86\uFF01</p><p>\u65B0\u5468\u520A\u53D1\u4E86\uFF0C\u867D\u8FDF\u4F46\u5230\uFF01</p><p>\u8FD9\u662F\u672C\u5468\u7684 tips \u5185\u5BB9\uFF01</p><p>\u2014 Michael</p><h2 id="\u{1F525}-the-css-unselector" tabindex="-1">\u{1F525} The CSS Unselector <a class="header-anchor" href="#\u{1F525}-the-css-unselector" aria-hidden="true">#</a></h2><p>\u63D0\u8D77 CSS \u6211\u4EEC\u901A\u5E38\u8BA8\u8BBA\u7684\u662F\u5982\u4F55\u901A\u8FC7\u9009\u62E9\u5668\u6765\u9009\u62E9\u5177\u4F53\u5143\u7D20\u3002</p><p>Part of this process is making sure the selector does not select the wrong elements. This is often the hardest part!</p><p>\u8981\u786E\u4FDD\u9009\u5BF9\u4E86\u5143\u7D20\uFF0C\u8FD9\u5F88\u96BE\u3002</p><p>My blog uses Vue Router, which applies the class .router-link-active to any link that links to the current route (the page we\u2019re on right now). I then use this class to change the colour of the current link, to help the user know where they\u2019re at.</p><p>\u6211\u7684\u535A\u5BA2\u4F7F\u7528\u4E86 Vue Router \u63D0\u4F9B\u7684 <code>.router-link-active</code> \u6765\u8BA9\u94FE\u63A5\u5F53\u524D\u7684\u9875\u9762\u3002\u6211\u4F1A\u6539\u53D8\u5F53\u524D\u94FE\u63A5\u7684\u989C\u8272\uFF0C\u8BA9\u7528\u6237\u77E5\u9053\u6211\u4EEC\u5728\u54EA\u3002</p><p>But I wanted to make sure that all links within the page do not get highlighted in the same way.</p><p>For example, a table of contents at the beginning of an article should have normal looking links, not the changed colour.</p><p>To do this I needed to avoid selecting all of the links with a # in the href attribute:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.router-link-active:not([href*=&#39;#&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>I\u2019m using a :not query, but then using an attribute selector inside of that.</p><p>My actual code is even more fun, because there are a few other things going on that I need to account for:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.nav-link.router-link-exact-active:not(.site-title):not([href*=&#39;#&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u{1F525}-dynamic-returns" tabindex="-1">\u{1F525} Dynamic Returns <a class="header-anchor" href="#\u{1F525}-dynamic-returns" aria-hidden="true">#</a></h2><p>A composable can either return a single value or an object of values. Typically, these values are refs.</p><p>But we can also dynamically switch between the two depending on what we want to use the composable for:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Grab only the single value</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> now </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useNow</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Get more granular access to the composable</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> now</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pause</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> resume </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useNow</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">controls</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>This is great because we may only need a single value most of the time. So why complicate the interface for the main use case?</p><p>But by dynamically providing the full object of refs, we allow for more advanced use cases as well. Even if they are rarely used.</p><p>Here is how we might implement that:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useNow</span><span style="color:#A6ACCD;">(opts) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">const {</span></span>
<span class="line"><span style="color:#A6ACCD;">  controls </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> opts</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Do some things in your composable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (controls) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">now</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pause</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">resume</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">now</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F4DC}-invalidating-computed-props" tabindex="-1">\u{1F4DC} Invalidating Computed Props <a class="header-anchor" href="#\u{1F4DC}-invalidating-computed-props" aria-hidden="true">#</a></h2><p>How do you force a computed prop to update? And why would you ever find yourself in that situation to begin with?</p><p>In this article, Abdelrahman shows us a really clever solution to this very interesting problem he encountered with computed props.</p><p>Read it now: Invalidating Computed with the Composition API</p><h2 id="\u{1F4AC}-theory-and-practice" tabindex="-1">\u{1F4AC} Theory and Practice <a class="header-anchor" href="#\u{1F4AC}-theory-and-practice" aria-hidden="true">#</a></h2><p>&quot;Theory is when you know something, but it doesn\u2019t work. Practice is when something works, but you don\u2019t know why. Programmers combine theory and practice: Nothing works and they don\u2019t know why.&quot; \u2014 Unknown</p><h2 id="\u{1F9E0}-spaced-repetition-why-there-must-be-one-source-of-truth" tabindex="-1">\u{1F9E0} Spaced-repetition: Why there must be one source of truth <a class="header-anchor" href="#\u{1F9E0}-spaced-repetition-why-there-must-be-one-source-of-truth" aria-hidden="true">#</a></h2><p><strong>\u60F3\u8981\u957F\u65F6\u95F4\u7262\u7262\u8BB0\u4F4F\u67D0\u4E9B\u4E8B\u60C5\uFF0C\u6700\u597D\u65B9\u5F0F\u5C31\u662F\u5B9A\u671F\u56DE\u987E\uFF0C\u9010\u6E10\u589E\u52A0\u56DE\u987E\u7684\u95F4\u9694 \u{1F468}\u200D\u{1F52C}</strong></p><p><strong>\u5B9E\u9645\u4E0A\uFF0C\u8BB0\u4F4F\u8FD9\u4E9B tips \u6BD4\u53D1\u5446\u6709\u7528\u5F97\u591A\uFF0C\u8FD9\u662F\u51E0\u5468\u524D\u7684\u4E00\u4E2A tip \u53EF\u4EE5\u5524\u8D77\u4F60\u7684\u8BB0\u5FC6\u3002</strong></p><p>This is the most critical principle of state management that I know:</p><p>Each piece of state has a single owner, a single source of truth.</p><p>No one else is allowed to modify the state. It&#39;s just borrowed temporarily.</p><p>If you have an array in a Vuex store, only that Vuex store can update it. Anywhere in your app that needs that value must get it from the store (directly or through another component).</p><p>If the state is owned by a component, only that component can modify it. This means other components must emit an event to that component, which can then decide what it wants to do.</p><p>Why?</p><p>If you allow state to be modified from anywhere, your code becomes a tangled mess.</p><p>With a single source of truth, you can easily understand what&#39;s happening.</p><p>The best code is easily understood.</p><p><em>p.s. I also have two courses: <a href="https://michaelnthiessen.com/reusable-components" target="_blank" rel="noopener noreferrer">Reusable Components</a> and <a href="https://michaelnthiessen.com/clean-components" target="_blank" rel="noopener noreferrer">Clean Components</a></em></p><h2 id="\u6765\u6E90" tabindex="-1">\u6765\u6E90 <a class="header-anchor" href="#\u6765\u6E90" aria-hidden="true">#</a></h2><p>\u539F\u6587 <a href="https://michaelnthiessen.com/weekly-071-july-27/" target="_blank" rel="noopener noreferrer">https://michaelnthiessen.com/weekly-071-july-27/</a></p><p>\u672C\u4F5C\u54C1\u91C7\u7528 <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">\u77E5\u8BC6\u5171\u4EAB\u7F72\u540D\u2014\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 4.0 \u56FD\u9645\u8BB8\u53EF\u534F\u8BAE</a> \u8FDB\u884C\u8BB8\u53EF\u3002</p>`,47),l=[o];function p(r,c,i,h,y,u){return n(),s("div",null,l)}var m=e(t,[["render",p]]);export{D as __pageData,m as default};