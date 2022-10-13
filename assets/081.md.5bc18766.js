import{_ as s,c as e,o as a,a as n}from"./app.9c8c8bcd.js";const D=JSON.parse('{"title":"\u{1F525} (#81) Restricting Prop Values to a List","description":"","frontmatter":{"title":"\u{1F525} (#81) Restricting Prop Values to a List","head":[["link",{"rel":"canonical","href":"https://michaelnthiessen.com/weekly-081-october-05/"}]]},"headers":[{"level":2,"title":"\u{1F525} Restrict a prop to a list of types","slug":"\u{1F525}-restrict-a-prop-to-a-list-of-types"},{"level":2,"title":"\u{1F525} My favourite git commands","slug":"\u{1F525}-my-favourite-git-commands"},{"level":2,"title":"\u{1F4DC} Coding Better Composables: Options Object (5/5)","slug":"\u{1F4DC}-coding-better-composables-options-object-5-5"},{"level":2,"title":"\u{1F4AC} Bugs","slug":"\u{1F4AC}-bugs"},{"level":2,"title":"\u{1F9E0} Spaced-repetition: Flexible Arguments","slug":"\u{1F9E0}-spaced-repetition-flexible-arguments"},{"level":2,"title":"\u6765\u6E90","slug":"\u6765\u6E90"}],"relativePath":"081.md"}'),o={name:"081.md"},t=n(`<h1 id="\u{1F525}-81-restricting-prop-values-to-a-list" tabindex="-1">\u{1F525} (#81) Restricting Prop Values to a List <a class="header-anchor" href="#\u{1F525}-81-restricting-prop-values-to-a-list" aria-hidden="true">#</a></h1><p>October 2022</p><p>Hey!</p><p>Let me tell you a bit more about what you&#39;ll be learning with Mastering Nuxt 3.</p><p>Throughout the videos series you will build an online course platform from scratch, covering everything from the frontend to the backend. You&#39;ll use TailwindCSS for styling, and you&#39;ll even using Prisma with Supabase so you get a Postgres database with a nice TypeScript interface.</p><p>But the point of the course isn&#39;t to build an app.</p><p>The point is <em>to learn Nuxt 3</em>.</p><p>So you won&#39;t just learn <em>what</em> Nuxt can do, you&#39;ll also learn <em>how</em> Nuxt works and <em>why</em> you do things in certain ways.</p><p>This includes best practices, how to organize your code, and thinking about the architecture of your app.</p><p>If you&#39;ve never touched Nuxt before, by the end you&#39;ll be able to build your own app from scratch.</p><p>And if you&#39;ve been using Nuxt for years, you&#39;ll deepen your understanding of Nuxt 3.</p><p>Enjoy your tips for this week!</p><p>\u2014Michael</p><h2 id="\u{1F525}-restrict-a-prop-to-a-list-of-types" tabindex="-1">\u{1F525} Restrict a prop to a list of types <a class="header-anchor" href="#\u{1F525}-restrict-a-prop-to-a-list-of-types" aria-hidden="true">#</a></h2><p>Using the <code>validator</code> option in a prop definition you can restrict a prop to a specific set of values:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Image</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">src</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">validator</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">square</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rounded</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(s)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>This validator function takes in a prop and returns either <code>true</code> or <code>false</code> \u2014 if the prop is valid or not.</p><p>I often use this when I need more options than a <code>boolean</code> will allow but still want to restrict what can be set.</p><p>Button types or alert types (info, success, danger, warning) are some of the most common uses \u2014 at least in what I work on. Colours, too, are a really great use for this.</p><p>But there are many more!</p><h2 id="\u{1F525}-my-favourite-git-commands" tabindex="-1">\u{1F525} My favourite git commands <a class="header-anchor" href="#\u{1F525}-my-favourite-git-commands" aria-hidden="true">#</a></h2><p>Here are a few of my favourite git commands (is it weird to have favourite git commands?):</p><p>I&#39;m often jumping back and forth between different branches, and typing is annoying:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># Checkout the previous branch</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Sometimes I add new files, then realize I don&#39;t actually need them:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># Remove any files not tracked by git</span></span>
<span class="line"><span style="color:#A6ACCD;">git clean</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Or I completely broke everything and need to start over:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># Undo all changes to git and the working directory,</span></span>
<span class="line"><span style="color:#A6ACCD;"># going back to the most recent commit</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Github takes all of the commits on your PR branch and combines them into a single one when you merge. But sometimes you want to merge a branch, and you aren&#39;t ready for a PR just yet:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># Squash all commits from a branch into one commit</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge --squash &lt;branch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u{1F4DC}-coding-better-composables-options-object-5-5" tabindex="-1">\u{1F4DC} Coding Better Composables: Options Object (5/5) <a class="header-anchor" href="#\u{1F4DC}-coding-better-composables-options-object-5-5" aria-hidden="true">#</a></h2><p>I teamed up with Vue Mastery to create this series on coding better composables.</p><p>In this series we cover five different patterns.</p><p>For each, we show how you can implement it and then we see it in action with a composable from VueUse.</p><p>This fifth and final article of the series shows how we can use the Async Without Await pattern to simplify our composables.</p><p>Read it here: <a href="https://www.vuemastery.com/blog/coding-better-composables-5-of-5" target="_blank" rel="noopener noreferrer">Coding Better Composables: Options Object (5/5)</a></p><h2 id="\u{1F4AC}-bugs" tabindex="-1">\u{1F4AC} Bugs <a class="header-anchor" href="#\u{1F4AC}-bugs" aria-hidden="true">#</a></h2><p>&quot;If debugging is the process of removing software bugs, then programming must be the process of putting them in.&quot; \u2014Edsger Dijkstra</p><h2 id="\u{1F9E0}-spaced-repetition-flexible-arguments" tabindex="-1">\u{1F9E0} Spaced-repetition: Flexible Arguments <a class="header-anchor" href="#\u{1F9E0}-spaced-repetition-flexible-arguments" aria-hidden="true">#</a></h2><p><strong>The best way to commit something to long-term memory is to periodically review it, gradually increasing the time between reviews \u{1F468}\u200D\u{1F52C}</strong></p><p><strong>Actually remembering these tips is much more useful than just a quick distraction, so here&#39;s a tip from a couple weeks ago to jog your memory.</strong></p><p>Sometimes we have a <code>ref</code> that we want to use with our composable. Sometimes we just have the raw data.</p><p>Wouldn\u2019t it be nice if it didn\u2019t matter what we already had? Then we could use our composables and it would just <em>work</em>?</p><p>Here\u2019s an example using the <code>useTitle</code> composable from VueUse:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// We have a ref already</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> titleRef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is the title of the page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">useTitle</span><span style="color:#A6ACCD;">(titleRef)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// We just have the string</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is the title of the page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> titleRef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTitle</span><span style="color:#A6ACCD;">(title)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>We can do this by implementing the Flexible Arguments pattern:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTitle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">maybeRef</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">titleRef</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">maybeRef</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Use titleRef in the composable</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>ref</code> function will either create a <code>ref</code> for us, or return a <code>ref</code> if we give it one.</p><p>This means that we can pass it either type and we know we\u2019ll get a ref back.</p><p>The opposite is true with the <code>unref</code> function. If we need to use a raw primitive value rather than a <code>ref</code> in our composable, we can use <code>unref</code> to achieve a similar result.</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTitle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">maybeRef</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">titleString</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">unref</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">maybeRef</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Use titleString in the composable</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><em>p.s. I also have three courses: <a href="https://michaelnthiessen.com/vue-tips-collection" target="_blank" rel="noopener noreferrer">Vue Tips Collection</a>, <a href="https://michaelnthiessen.com/reusable-components" target="_blank" rel="noopener noreferrer">Reusable Components</a> and <a href="https://michaelnthiessen.com/clean-components" target="_blank" rel="noopener noreferrer">Clean Components</a></em></p><h2 id="\u6765\u6E90" tabindex="-1">\u6765\u6E90 <a class="header-anchor" href="#\u6765\u6E90" aria-hidden="true">#</a></h2><p>\u539F\u6587 <a href="https://michaelnthiessen.com/weekly-081-october-05/" target="_blank" rel="noopener noreferrer">https://michaelnthiessen.com/weekly-081-october-05/</a></p><p>\u672C\u4F5C\u54C1\u91C7\u7528<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">\u77E5\u8BC6\u5171\u4EAB\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 4.0 \u56FD\u9645\u8BB8\u53EF\u534F\u8BAE</a>\u8FDB\u884C\u8BB8\u53EF\u3002</p>`,55),p=[t];function l(r,c,i,y,h,d){return a(),e("div",null,p)}var m=s(o,[["render",l]]);export{D as __pageData,m as default};