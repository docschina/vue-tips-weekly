import{_ as s,c as e,o as n,a as o}from"./app.92446402.js";const D=JSON.parse('{"title":"\u{1F525} (#77) Flatten Nuxt Content Routes","description":"","frontmatter":{"title":"\u{1F525} (#77) Flatten Nuxt Content Routes","head":[["link",{"rel":"canonical","href":"https://michaelnthiessen.com/weekly-077-september-07/"}]]},"headers":[{"level":2,"title":"\u{1F4DC} Forcing Vue to Re-Render","slug":"\u{1F4DC}-forcing-vue-to-re-render"},{"level":2,"title":"\u{1F525} How to Fix the TypeScript Intellisense Template Error in Vue","slug":"\u{1F525}-how-to-fix-the-typescript-intellisense-template-error-in-vue"},{"level":2,"title":"\u{1F525} Flatten Nuxt Content Routes","slug":"\u{1F525}-flatten-nuxt-content-routes"},{"level":2,"title":"\u{1F4DC} Coding Better Composables: Options Object (3/5)","slug":"\u{1F4DC}-coding-better-composables-options-object-3-5"},{"level":2,"title":"\u{1F4AC} Principles of Programmer Productivity","slug":"\u{1F4AC}-principles-of-programmer-productivity"},{"level":2,"title":"\u{1F9E0} Spaced-repetition: The CSS Unselector","slug":"\u{1F9E0}-spaced-repetition-the-css-unselector"},{"level":2,"title":"\u6765\u6E90","slug":"\u6765\u6E90"}],"relativePath":"077.md"}'),a={name:"077.md"},t=o(`<h1 id="\u{1F525}-77-flatten-nuxt-content-routes" tabindex="-1">\u{1F525} (#77) Flatten Nuxt Content Routes <a class="header-anchor" href="#\u{1F525}-77-flatten-nuxt-content-routes" aria-hidden="true">#</a></h1><p>September 2022</p><p>Hey!</p><p>I&#39;m currently in the thick of working on Mastering Nuxt 3, but I&#39;m still taking some time to create other content, too.</p><p>It&#39;s a busy time for me, but I&#39;m glad I get to work on exciting things!</p><p>I&#39;ve also been migrating my blog over from Gridsome to Nuxt 3. It&#39;s a big, complicated project because there&#39;s lots of stuff happening with my site. But working with Nuxt is always a joy!</p><p>Should I write some posts about that migration?</p><p>My world is entirely Nuxt, so today, we&#39;re going with two Nuxt tips.</p><p>Have a great week!</p><p>\u2014 Michael</p><h2 id="\u{1F4DC}-forcing-vue-to-re-render" tabindex="-1">\u{1F4DC} Forcing Vue to Re-Render <a class="header-anchor" href="#\u{1F4DC}-forcing-vue-to-re-render" aria-hidden="true">#</a></h2><p>I originally wrote this article 4 years ago, so it was certainly time for an update.</p><p>It was one of the first articles I ever wrote, and has been wildly popular with well over 500,000 people reading it.</p><p>Now I&#39;ve updated it for Vue 3 and expanded it a bit.</p><p><a href="https://michaelnthiessen.com/force-re-render" target="_blank" rel="noopener noreferrer">Read the article here</a>.</p><h2 id="\u{1F525}-how-to-fix-the-typescript-intellisense-template-error-in-vue" tabindex="-1">\u{1F525} How to Fix the TypeScript Intellisense Template Error in Vue <a class="header-anchor" href="#\u{1F525}-how-to-fix-the-typescript-intellisense-template-error-in-vue" aria-hidden="true">#</a></h2><p>I recently got this error while working on a Vue 3 project:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">TypeScript intellisense is disabled on template. To enable, configure \`&quot;jsx&quot;: &quot;preserve&quot;\` in the \`&quot;compilerOptions&quot;\` property of tsconfig or jsconfig. To disable this prompt instead, configure \`&quot;experimentalDisableTemplateSupport&quot;: true\` in \`&quot;vueCompilerOptions&quot;\` property.volar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>No need to panic, just disable this Volar message <a href="https://github.com/johnsoncodehk/volar/issues/1219#issuecomment-1104548432" target="_blank" rel="noopener noreferrer">exactly how it says</a>.</p><p>In your <code>.tsconfig</code> file you need to add <code>&quot;jsx&quot;: &quot;preserve&quot;</code> in the <code>compilerOptions</code> section:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">jsx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">preserve</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>I\u2019m using Nuxt 3, so my TypeScript config file looks a little different:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // https://v3.nuxtjs.org/concepts/typescript</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;extends&quot;: &quot;./.nuxt/tsconfig.json&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;jsx&quot;: &quot;preserve&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>If you\u2019re using a <a href="https://code.visualstudio.com/docs/languages/jsconfig#_jsconfig-options" target="_blank" rel="noopener noreferrer">jsconfig</a> file instead, it may look closer to this:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;module&quot;: &quot;commonjs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;target&quot;: &quot;es6&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;jsx&quot;: &quot;preserve&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;include&quot;: [&quot;src/**/*&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The <code>jsx</code> option on the <code>.tsconfig</code> <a href="https://www.typescriptlang.org/tsconfig#jsx" target="_blank" rel="noopener noreferrer">controls how ts transforms and outputs</a> <code>.tsx</code> files, but this error happens on <code>.vue</code> files with no <code>tsx</code> extension.</p><p>So changing this option to silence the warning has no real effect on our projects. In Vue we are only using TypeScript for type checking so this option doesn\u2019t affect anything that we\u2019re doing.</p><p>This issue is likely happening because of the TypeScript Language Server that VS Code uses to provide the Intellisense feature. Volar hooks into this server, but unfortunately, has no control over it.</p><h2 id="\u{1F525}-flatten-nuxt-content-routes" tabindex="-1">\u{1F525} Flatten Nuxt Content Routes <a class="header-anchor" href="#\u{1F525}-flatten-nuxt-content-routes" aria-hidden="true">#</a></h2><p>I wanted to organize my blog content into several folders:</p><ul><li>Articles: <code>content/articles/</code></li><li>Newsletters: <code>content/newsletters/</code></li></ul><p>By default though, Nuxt Content would set up these routes to include those prefixes. But I want all of my routes to be at the root level:</p><ul><li>Articles: <a href="http://michaelnthiessen.com/my-latest-article" target="_blank" rel="noopener noreferrer">michaelnthiessen.com/my-latest-article</a></li><li>Newsletters: <a href="http://michaelnthiessen.com/most-recent-newsletter" target="_blank" rel="noopener noreferrer">michaelnthiessen.com/most-recent-newsletter</a></li></ul><p>We can do this manually for each Markdown file by overriding the <code>_path</code> property through it&#39;s frontmatter:</p><div class="language-markdown"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">My Latest Article</span></span>
<span class="line"><span style="color:#F07178;">date</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">today</span></span>
<span class="line"><span style="color:#F07178;">_path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/my-latest-article</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div><p>This is extremely tedious, error-prone, and generally annoying.</p><p>Luckily, we can write a simple Nitro plugin that will do this transform automatically.</p><p>Create a <code>content.ts</code> file in <code>server/plugins/</code>:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineNitroPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nitroApp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">nitroApp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hooks</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hook</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content:file:afterParse</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prefix</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/articles</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/newsletters</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startsWith</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">prefix</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Keep the prefix so we can query based on it still</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_original_dir</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prefix</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Remove prefix from path</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_path</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">prefix</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Nitro is the server that Nuxt uses internally. We can hook into it&#39;s processing pipeline and do a bit of tweaking.</p><p>However, doing this breaks <code>queryContent</code> calls if we&#39;re filtering based on the path, since <code>queryContent</code> is looking at the <code>_path</code> property we&#39;ve just modified. This is why we want to keep that original directory around.</p><p>We can modify our <code>queryContent</code> calls to filter on this new <code>_original_dir</code> property:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Before</span></span>
<span class="line"><span style="color:#82AAFF;">queryContent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/articles</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// After</span></span>
<span class="line"><span style="color:#82AAFF;">queryContent</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">where</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">_original_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">$eq</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/articles</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Pro tip: use <code>nuxi clean</code> to force Nuxt Content to re-fetch and re-transform all of your content.</p><h2 id="\u{1F4DC}-coding-better-composables-options-object-3-5" tabindex="-1">\u{1F4DC} Coding Better Composables: Options Object (3/5) <a class="header-anchor" href="#\u{1F4DC}-coding-better-composables-options-object-3-5" aria-hidden="true">#</a></h2><p>I teamed up with Vue Mastery to create this series on coding better composables.</p><p>In this series we cover five different patterns.</p><p>For each, we show how you can implement it and then we see it in action with a composable from VueUse.</p><p>This third article shows a simple way of making your return values more useful.</p><p>Read it here: <a href="https://www.vuemastery.com/blog/coding-better-composables-3-of-5" target="_blank" rel="noopener noreferrer">Coding Better Composables: Options Object (3/5)</a></p><h2 id="\u{1F4AC}-principles-of-programmer-productivity" tabindex="-1">\u{1F4AC} Principles of Programmer Productivity <a class="header-anchor" href="#\u{1F4AC}-principles-of-programmer-productivity" aria-hidden="true">#</a></h2><p>&quot;What one programmer can do in one month, two programmers can do in two months.&quot; \u2014Fred Brooks</p><h2 id="\u{1F9E0}-spaced-repetition-the-css-unselector" tabindex="-1">\u{1F9E0} Spaced-repetition: The CSS Unselector <a class="header-anchor" href="#\u{1F9E0}-spaced-repetition-the-css-unselector" aria-hidden="true">#</a></h2><p><strong>The best way to commit something to long-term memory is to periodically review it, gradually increasing the time between reviews \u{1F468}\u200D\u{1F52C}</strong></p><p><strong>Actually remembering these tips is much more useful than just a quick distraction, so here&#39;s a tip from a couple weeks ago to jog your memory.</strong></p><p>With CSS we often focus on how to get selectors to apply to only the specific elements that we\u2019re targeting.</p><p>Part of this process is making sure the selector <em>does not</em> select the wrong elements. This is often the hardest part!</p><p>My blog uses Vue Router, which applies the class <code>.router-link-active</code> to any link that links to the current route (the page we\u2019re on right now). I then use this class to change the colour of the current link, to help the user know where they\u2019re at.</p><p>But I wanted to make sure that all links <em>within</em> the page do not get highlighted in the same way.</p><p>For example, a table of contents at the beginning of an article should have normal looking links, not the changed colour.</p><p>To do this I needed to avoid selecting all of the links with a <code>#</code> in the <code>href</code> attribute:</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">router-link-active</span><span style="color:#A6ACCD;">: not(</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">href</span><span style="color:#A6ACCD;"> * </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span></code></pre></div><p>I\u2019m using a <code>:not</code> query, but then using an attribute selector inside of that.</p><p>My actual code is even more fun, because there are a few other things going on that I need to account for:</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">nav-link</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">router-link-exact-active</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">not</span><span style="color:#89DDFF;">(.</span><span style="color:#FFCB6B;">site-title</span><span style="color:#89DDFF;">):</span><span style="color:#C792EA;">not</span><span style="color:#89DDFF;">([</span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">*=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span></span>
<span class="line"></span></code></pre></div><p><em>p.s. I also have three courses: <a href="https://michaelnthiessen.com/vue-tips-collection" target="_blank" rel="noopener noreferrer">Vue Tips Collection</a>, <a href="https://michaelnthiessen.com/reusable-components" target="_blank" rel="noopener noreferrer">Reusable Components</a> and <a href="https://michaelnthiessen.com/clean-components" target="_blank" rel="noopener noreferrer">Clean Components</a></em></p><h2 id="\u6765\u6E90" tabindex="-1">\u6765\u6E90 <a class="header-anchor" href="#\u6765\u6E90" aria-hidden="true">#</a></h2><p>\u539F\u6587 <a href="https://michaelnthiessen.com/weekly-077-september-07/" target="_blank" rel="noopener noreferrer">https://michaelnthiessen.com/weekly-077-september-07/</a></p><p>\u672C\u4F5C\u54C1\u91C7\u7528<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">\u77E5\u8BC6\u5171\u4EAB\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 4.0 \u56FD\u9645\u8BB8\u53EF\u534F\u8BAE</a>\u8FDB\u884C\u8BB8\u53EF\u3002</p>`,69),l=[t];function p(r,c,i,y,h,u){return n(),e("div",null,l)}var F=s(a,[["render",p]]);export{D as __pageData,F as default};