import{_ as s,c as a,o as e,a as n}from"./app.74a67ed3.js";const A=JSON.parse('{"title":"\u{1F525} (#65) My custom PDF tool (with hot reloading)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F525} When ref and reactive work the same","slug":"\u{1F525}-when-ref-and-reactive-work-the-same"},{"level":2,"title":"\u{1F525} What are all these loops for?","slug":"\u{1F525}-what-are-all-these-loops-for"},{"level":2,"title":"\u{1F4DC} Vue.js + Astro \u2014Better Than a Vue SPA?","slug":"\u{1F4DC}-vue-js-astro-\u2014better-than-a-vue-spa"},{"level":2,"title":"\u{1F4AC} Humor","slug":"\u{1F4AC}-humor"},{"level":2,"title":"\u{1F9E0} Spaced-repetition: Shorthand for named slots","slug":"\u{1F9E0}-spaced-repetition-shorthand-for-named-slots"},{"level":2,"title":"\u6765\u6E90","slug":"\u6765\u6E90"}],"relativePath":"065.md"}'),o={name:"065.md"},l=n(`<h1 id="\u{1F525}-65-my-custom-pdf-tool-with-hot-reloading" tabindex="-1">\u{1F525} (#65) My custom PDF tool (with hot reloading) <a class="header-anchor" href="#\u{1F525}-65-my-custom-pdf-tool-with-hot-reloading" aria-hidden="true">#</a></h1><p>June 2022</p><p>Heyo!</p><p>Only a few days left until Vue Tips Collection launches on Monday, June 20th!</p><p>The early access has gone <em>extremely</em> well. All despite me <a href="https://twitter.com/MichaelThiessen/status/1536373043974610944?s=20&amp;t=bkuuJnZ_kuxH9hBIcafxhw" target="_blank" rel="noopener noreferrer">royally screwing it up</a>.</p><p>I&#39;ve also recorded a screencast showing the custom tooling I built to develop and write the book. <a href="https://twitter.com/MichaelThiessen/status/1537053019090604036?s=20&amp;t=ejuEVul6VLUBDLGsDSDy4g" target="_blank" rel="noopener noreferrer">Check that out here</a>.</p><p>I can&#39;t wait to drop this on Monday! I still have a bunch of loose ends I&#39;d like to wrap up by then, but I&#39;m more excited than anxious.</p><p>At least at this point. Ask me again Sunday night \u{1F602}</p><p>If you haven&#39;t yet, you can <a href="https://michaelnthiessen.com/vue-tips-collection" target="_blank" rel="noopener noreferrer">check out the book here</a>.</p><p>As always, thanks for being a loyal reader!</p><p>Here are your tips.</p><p>\u2014Michael</p><h2 id="\u{1F525}-when-ref-and-reactive-work-the-same" tabindex="-1">\u{1F525} When ref and reactive work the same <a class="header-anchor" href="#\u{1F525}-when-ref-and-reactive-work-the-same" aria-hidden="true">#</a></h2><p>It can be confusing to know whether or not to use <code>ref</code> or <code>reactive</code>.</p><p>Here are a few instances where they end up working basically the same.</p><p>When using <code>watchEffect</code> dependencies are tracked automatically, so there isn&#39;t much difference between <code>ref</code> and <code>reactive</code>:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Ref \u2014 just need to access through \`value\` property</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> refBurger </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">lettuce</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">watchEffect</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(refBurger</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lettuce);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Reactive</span></span>
<span class="line"><span style="color:#A6ACCD;">const reactiveBurger </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">lettuce</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#82AAFF;">watchEffect</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(reactiveBurger</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lettuce));</span></span>
<span class="line"></span></code></pre></div><p>Also, because <code>refs</code> are automatically unwrapped in the template, there is no difference there:</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Ref --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {{ burger.lettuce }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Reactive --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {{ burger.lettuce }}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>If you destructure an object you&#39;ll need to convert back to <code>refs</code> if you want reactivity:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Using \`ref\`</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> lettuce </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">toRefs</span><span style="color:#A6ACCD;">(burger</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Using \`reactive\`</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> lettuce </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">toRefs</span><span style="color:#A6ACCD;">(burger)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>But if you have to convert everything to <code>refs</code> anyway, why not just use them to begin with?</p><h2 id="\u{1F525}-what-are-all-these-loops-for" tabindex="-1">\u{1F525} What are all these loops for? <a class="header-anchor" href="#\u{1F525}-what-are-all-these-loops-for" aria-hidden="true">#</a></h2><p>I always forget this, so this tip is mostly for me \u2014 hopefully, I won&#39;t have to keep looking this up!</p><p>We have 3 types of <code>for</code> loops in Javascript:</p><ol><li><code>for...in</code></li><li><code>for...of</code></li><li><code>for</code></li></ol><p>But how do you know which one to use?</p><p>For iterating through <strong>properties</strong> of an object, use <code>for...in</code>:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> numbers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">one</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">two</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">three</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// We get the properties of the object, not the values</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> number </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> numbers) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">number</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Prints: &#39;one&#39; &#39;two&#39; &#39;three&#39;</span></span>
<span class="line"></span></code></pre></div><p>Items in a <strong>list</strong> (also called an iterable object) like an Array or Set, we use <code>for...of</code>:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> numbers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">one</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">two</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// We get each of the elements in the Array</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> number </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> numbers) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">number</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Prints: &#39;one&#39; &#39;two&#39; &#39;three&#39;</span></span>
<span class="line"></span></code></pre></div><p>You <em>can</em> use <code>for...in</code> with an Array since all the indices are just the object&#39;s properties. But you may not get them in the correct order, and you&#39;ll also get any other properties the Array has \u{1F615}</p><p>And you know how to use a regular old <code>for</code> loop, which lets you have a lot more control with some extra typing.</p><h2 id="\u{1F4DC}-vue-js-astro-\u2014better-than-a-vue-spa" tabindex="-1">\u{1F4DC} Vue.js + Astro \u2014Better Than a Vue SPA? <a class="header-anchor" href="#\u{1F4DC}-vue-js-astro-\u2014better-than-a-vue-spa" aria-hidden="true">#</a></h2><p>Astro has a unique approach to dealing with micro-frontend architecture. Worth taking a look at this high-level overview by Anthony.</p><p>Read it here: <a href="https://vuejsdevelopers.com/2021/10/26/vue-astro/" target="_blank" rel="noopener noreferrer">Vue.js + Astro \u2014Better Than a Vue SPA?</a></p><h2 id="\u{1F4AC}-humor" tabindex="-1">\u{1F4AC} Humor <a class="header-anchor" href="#\u{1F4AC}-humor" aria-hidden="true">#</a></h2><p>&quot;Code is like humor. When you have to explain it, it&#39;s bad.&quot; \u2014Cory House</p><h2 id="\u{1F9E0}-spaced-repetition-shorthand-for-named-slots" tabindex="-1">\u{1F9E0} Spaced-repetition: Shorthand for named slots <a class="header-anchor" href="#\u{1F9E0}-spaced-repetition-shorthand-for-named-slots" aria-hidden="true">#</a></h2><p><strong>The best way to commit something to long-term memory is to periodically review it, gradually increasing the time between reviews \u{1F468}\u200D\u{1F52C}</strong></p><p><strong>Actually remembering these tips is much more useful than just a quick distraction, so here&#39;s a tip from a couple weeks ago to jog your memory.</strong></p><p>Named slots also have a shorthand syntax, one that&#39;s much nicer to look at.</p><p>Instead of writing this:</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">DataTable</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-slot:header</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">TableHeader</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">DataTable</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>We can write this:</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">DataTable</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#header</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">TableHeader</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">DataTable</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Not a huge difference, but a little cleaner for sure. I think the <code>#</code> character is easier to pick out than <code>v-slot</code> when reading code.</p><p><em>p.s. I also have two courses: <a href="https://michaelnthiessen.com/reusable-components" target="_blank" rel="noopener noreferrer">Reusable Components</a> and <a href="https://michaelnthiessen.com/clean-components" target="_blank" rel="noopener noreferrer">Clean Components</a></em></p><h2 id="\u6765\u6E90" tabindex="-1">\u6765\u6E90 <a class="header-anchor" href="#\u6765\u6E90" aria-hidden="true">#</a></h2><p><a href="https://michaelnthiessen.com/weekly-065-june-15/" target="_blank" rel="noopener noreferrer">https://michaelnthiessen.com/weekly-065-june-15/</a></p>`,50),p=[l];function t(r,c,i,y,D,h){return e(),a("div",null,p)}var d=s(o,[["render",t]]);export{A as __pageData,d as default};
