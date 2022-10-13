import{_ as s,c as n,o as a,a as e}from"./app.9c8c8bcd.js";const u=JSON.parse('{"title":"\u{1F525} (#77) \u6241\u5E73\u5316 Nuxt Content \u8DEF\u7531","description":"","frontmatter":{"title":"\u{1F525} (#77) \u6241\u5E73\u5316 Nuxt Content \u8DEF\u7531","head":[["link",{"rel":"canonical","href":"https://michaelnthiessen.com/weekly-077-september-07/"}]]},"headers":[{"level":2,"title":"\u{1F4DC} \u5F3A\u5236 Vue \u91CD\u65B0\u6E32\u67D3","slug":"\u{1F4DC}-\u5F3A\u5236-vue-\u91CD\u65B0\u6E32\u67D3"},{"level":2,"title":"\u{1F525} \u5982\u4F55\u4FEE\u590D Vue \u4E2D\u7684 TypeScript Intellisense Template \u9519\u8BEF","slug":"\u{1F525}-\u5982\u4F55\u4FEE\u590D-vue-\u4E2D\u7684-typescript-intellisense-template-\u9519\u8BEF"},{"level":2,"title":"\u{1F525} \u6241\u5E73\u5316 Nuxt Content \u8DEF\u7531","slug":"\u{1F525}-\u6241\u5E73\u5316-nuxt-content-\u8DEF\u7531"},{"level":2,"title":"\u{1F4DC} \u66F4\u597D\u5730\u7F16\u5199\u7EC4\u5408\u903B\u8F91\uFF1A\u9009\u9879\u5BF9\u8C61 (3/5)","slug":"\u{1F4DC}-\u66F4\u597D\u5730\u7F16\u5199\u7EC4\u5408\u903B\u8F91\uFF1A\u9009\u9879\u5BF9\u8C61-3-5"},{"level":2,"title":"\u{1F4AC} \u7A0B\u5E8F\u5458\u751F\u4EA7\u529B\u7684\u539F\u5219 Principles of Programmer Productivity","slug":"\u{1F4AC}-\u7A0B\u5E8F\u5458\u751F\u4EA7\u529B\u7684\u539F\u5219-principles-of-programmer-productivity"},{"level":2,"title":"\u{1F9E0} \u95F4\u9694\u91CD\u590D\uFF1AThe CSS Unselector","slug":"\u{1F9E0}-\u95F4\u9694\u91CD\u590D\uFF1Athe-css-unselector"},{"level":2,"title":"\u6765\u6E90","slug":"\u6765\u6E90"}],"relativePath":"077.md"}'),o={name:"077.md"},p=e(`<h1 id="\u{1F525}-77-\u6241\u5E73\u5316-nuxt-content-\u8DEF\u7531" tabindex="-1">\u{1F525} (#77) \u6241\u5E73\u5316 Nuxt Content \u8DEF\u7531 <a class="header-anchor" href="#\u{1F525}-77-\u6241\u5E73\u5316-nuxt-content-\u8DEF\u7531" aria-hidden="true">#</a></h1><p>2022 \u5E74 9 \u6708</p><p>Hey!</p><p>\u6211\u76EE\u524D\u6B63\u5FD9\u4E8E\u7F16\u5199\u300AMastering Nuxt 3\u300B\uFF0C\u4F46\u6211\u4ECD\u7136\u4F1A\u62BD\u51FA\u4E00\u4E9B\u65F6\u95F4\u6765\u521B\u4F5C\u5176\u4ED6\u5185\u5BB9\u3002</p><p>\u8FD9\u6BB5\u65F6\u95F4\u5BF9\u6211\u6765\u8BF4\u5F88\u5FD9\uFF0C\u4F46\u6211\u5F88\u9AD8\u5174\u80FD\u4ECE\u4E8B\u6FC0\u52A8\u4EBA\u5FC3\u7684\u5DE5\u4F5C\uFF01</p><p>\u6211\u4E5F\u5728\u8FC1\u79FB\u6211\u7684\u7F51\u7AD9\uFF0C\u4ECE Gridsome \u8FC1\u79FB\u5230 Nuxt 3 \u4E0A\u3002\u8FD9\u662F\u4E00\u4E2A\u5F88\u5927\u5F88\u590D\u6742\u7684\u9879\u76EE\uFF0C\u56E0\u4E3A\u6211\u7684\u7F51\u7AD9\u6709\u5F88\u591A\u4E8B\u60C5\u53D1\u751F\u3002\u4F46\u4E0E Nuxt \u5408\u4F5C\u603B\u662F\u5F88\u6109\u5FEB\u7684\uFF01</p><p>\u6216\u8BB8\u6211\u5E94\u8BE5\u5199\u4E00\u4E9B\u5173\u4E8E\u8FC1\u79FB\u7684\u5E16\u5B50\uFF1F</p><p>\u6211\u73B0\u5728\u6C89\u6D78\u5728 Nuxt \u91CC \uFF0C\u6240\u4EE5\u4ECA\u5929\uFF0C\u6211\u4EEC\u8981\u7528\u4E24\u4E2A Nuxt \u6280\u5DE7\u3002</p><p>\u795D\u4F60\u6709\u4E00\u4E2A\u6109\u5FEB\u7684\u4E00\u5468!</p><p>\u2014 Michael</p><h2 id="\u{1F4DC}-\u5F3A\u5236-vue-\u91CD\u65B0\u6E32\u67D3" tabindex="-1">\u{1F4DC} \u5F3A\u5236 Vue \u91CD\u65B0\u6E32\u67D3 <a class="header-anchor" href="#\u{1F4DC}-\u5F3A\u5236-vue-\u91CD\u65B0\u6E32\u67D3" aria-hidden="true">#</a></h2><p>\u6211\u6700\u521D\u5199\u8FD9\u7BC7\u6587\u7AE0\u662F\u5728 4 \u5E74\u524D\uFF0C\u6240\u4EE5\u73B0\u5728\u662F\u65F6\u5019\u66F4\u65B0\u4E86\u3002</p><p>\u8FD9\u662F\u6211\u6700\u65E9\u5199\u7684\u6587\u7AE0\u4E4B\u4E00\uFF0C\u800C\u4E14\u4E00\u76F4\u5F88\u53D7\u6B22\u8FCE\uFF0C\u6709\u8D85\u8FC7 50 \u4E07\u9605\u8BFB\u7684\u9605\u8BFB\u91CF\u3002</p><p>\u73B0\u5728\u6211\u9488\u5BF9 Vue 3 \u8FDB\u884C\u4E86\u66F4\u65B0\uFF0C\u5E76\u5BF9\u5B83\u8FDB\u884C\u4E86\u4E00\u4E9B\u6269\u5C55\u3002</p><p><a href="https://michaelnthiessen.com/force-re-render" target="_blank" rel="noopener noreferrer">\u5728\u8FD9\u91CC\u9605\u8BFB\u6587\u7AE0</a>\u3002</p><h2 id="\u{1F525}-\u5982\u4F55\u4FEE\u590D-vue-\u4E2D\u7684-typescript-intellisense-template-\u9519\u8BEF" tabindex="-1">\u{1F525} \u5982\u4F55\u4FEE\u590D Vue \u4E2D\u7684 TypeScript Intellisense Template \u9519\u8BEF <a class="header-anchor" href="#\u{1F525}-\u5982\u4F55\u4FEE\u590D-vue-\u4E2D\u7684-typescript-intellisense-template-\u9519\u8BEF" aria-hidden="true">#</a></h2><p>\u6211\u6700\u8FD1\u5728\u505A\u4E00\u4E2A Vue 3 \u9879\u76EE\u7684\u65F6\u5019\u9047\u5230\u4E86\u8FD9\u4E2A\u9519\u8BEF\u3002</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">TypeScript intellisense is disabled on template. To enable, configure \`&quot;jsx&quot;: &quot;preserve&quot;\` in the \`&quot;compilerOptions&quot;\` property of tsconfig or jsconfig. To disable this prompt instead, configure \`&quot;experimentalDisableTemplateSupport&quot;: true\` in \`&quot;vueCompilerOptions&quot;\` property.volar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0D\u5FC5\u60CA\u614C\uFF0C\u53EA\u8981\u7981\u7528\u8FD9\u4E2A Volar \u4FE1\u606F\uFF1A<a href="https://github.com/johnsoncodehk/volar/issues/1219#issuecomment-1104548432" target="_blank" rel="noopener noreferrer">\u95EE\u9898\u7EC6\u8282</a>\u3002</p><p>\u5728\u4F60\u7684 <code>.tsconfig</code> \u6587\u4EF6\u4E2D\uFF0C\u4F60\u9700\u8981\u6DFB\u52A0 <code>&quot;jsx&quot;: &quot;preserve&quot;</code> \u5728 <code>compilerOptions</code> \u90E8\u5206\u3002</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">jsx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">preserve</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4F7F\u7528\u7684\u662F Nuxt 3\uFF0C\u6240\u4EE5\u6211\u7684 TypeScript \u914D\u7F6E\u6587\u4EF6\u770B\u8D77\u6765\u6709\u70B9\u4E0D\u540C\u3002</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// https://v3.nuxtjs.org/concepts/typescript</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">extends</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./.nuxt/tsconfig.json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">jsx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">preserve</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F <a href="https://code.visualstudio.com/docs/languages/jsconfig#_jsconfig-options" target="_blank" rel="noopener noreferrer">jsconfig</a> \u6587\u4EF6\uFF0C\u5B83\u53EF\u80FD\u770B\u8D77\u6765\u66F4\u63A5\u8FD1\u4E8E\u8FD9\u6837\u3002</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">commonjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">es6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">jsx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">preserve</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">include</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/**/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>.tsconfig</code> \u4E0A\u7684 <code>jsx</code> \u9009\u9879 <a href="https://www.typescriptlang.org/tsconfig#jsx" target="_blank" rel="noopener noreferrer">\u63A7\u5236 ts \u5982\u4F55\u8F6C\u6362\u548C\u8F93\u51FA</a> <code>.tsx</code> \u6587\u4EF6\uFF0C\u4F46\u8FD9\u4E2A\u9519\u8BEF\u53D1\u751F\u5728\u6CA1\u6709 <code>tsx</code> \u6269\u5C55\u540D\u7684 <code>.vue</code> \u6587\u4EF6\u3002</p><p>\u56E0\u6B64\uFF0C\u6539\u53D8\u8FD9\u4E2A\u9009\u9879\u4EE5\u6D88\u9664\u8B66\u544A\u5BF9\u6211\u4EEC\u7684\u9879\u76EE\u6CA1\u6709\u5B9E\u9645\u5F71\u54CD\u3002\u5728 Vue \u4E2D\uFF0C\u6211\u4EEC\u53EA\u4F7F\u7528 TypeScript \u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u9009\u9879\u5E76\u4E0D\u5F71\u54CD\u6211\u4EEC\u6B63\u5728\u505A\u7684\u4EFB\u4F55\u4E8B\u60C5\u3002</p><p>\u8FD9\u4E2A\u95EE\u9898\u53EF\u80FD\u662F\u56E0\u4E3A VS Code \u7528\u6765\u63D0\u4F9B Intellisense \u529F\u80FD\u7684 TypeScript \u8BED\u8A00\u670D\u52A1\u800C\u53D1\u751F\u7684\u3002Volar \u4F7F\u7528\u8FD9\u9879\u670D\u52A1\uFF0C\u4F46\u4E0D\u5E78\u7684\u662F\uFF0C\u5B83\u6CA1\u6709\u63A7\u5236\u6743\u3002</p><h2 id="\u{1F525}-\u6241\u5E73\u5316-nuxt-content-\u8DEF\u7531" tabindex="-1">\u{1F525} \u6241\u5E73\u5316 Nuxt Content \u8DEF\u7531 <a class="header-anchor" href="#\u{1F525}-\u6241\u5E73\u5316-nuxt-content-\u8DEF\u7531" aria-hidden="true">#</a></h2><p>\u6211\u60F3\u628A\u6211\u7684\u535A\u5BA2\u5185\u5BB9\u7EC4\u7EC7\u6210\u51E0\u4E2A\u6587\u4EF6\u5939\uFF1A</p><ul><li>\u6587\u7AE0\uFF1A<code>content/articles/</code></li><li>Newsletters\uFF1A<code>content/newsletters/</code></li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CNuxt Content \u4F1A\u5C06\u8FD9\u4E9B\u8DEF\u7531\u8BBE\u7F6E\u4E3A\u5305\u62EC\u8FD9\u4E9B\u524D\u7F00\u3002\u4F46\u6211\u5E0C\u671B\u6211\u6240\u6709\u7684\u8DEF\u7531\u90FD\u662F\u5728\u6839\u7EA7\u522B\uFF1A</p><ul><li>\u6587\u7AE0: <a href="http://michaelnthiessen.com/my-latest-article" target="_blank" rel="noopener noreferrer">michaelnthiessen.com/my-latest-article</a></li><li>Newsletters\uFF1A\uFF1A<a href="http://michaelnthiessen.com/most-recent-newsletter" target="_blank" rel="noopener noreferrer">michaelnthiessen.com/most-recent-newsletter</a></li></ul><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8986\u76D6 <code>_path</code> \u5C5E\u6027\uFF0C\u4E3A\u6BCF\u4E2A Markdown \u6587\u4EF6\u624B\u52A8\u505A\u5230\u8FD9\u4E00\u70B9\uFF0C\u901A\u8FC7\u8BBE\u7F6E frontmatter\uFF1A</p><div class="language-markdown"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">My Latest Article</span></span>
<span class="line"><span style="color:#F07178;">date</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">today</span></span>
<span class="line"><span style="color:#F07178;">_path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/my-latest-article</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u662F\u5F88\u7E41\u7410\u7684\uFF0C\u5BB9\u6613\u51FA\u9519\u7684\uFF0C\u800C\u4E14\u4E00\u822C\u6765\u8BF4\u5F88\u70E6\u4EBA\u3002</p><p>\u5E78\u8FD0\u7684\u662F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5199\u4E00\u4E2A\u7B80\u5355\u7684 Nitro \u63D2\u4EF6\uFF0C\u81EA\u52A8\u5B8C\u6210\u8FD9\u4E00\u8F6C\u6362\u3002</p><p>\u5728 <code>server/plugins/</code> \u521B\u5EFA\u4E00\u4E2A <code>content.ts</code> \u6587\u4EF6\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineNitroPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nitroApp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
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
<span class="line"></span></code></pre></div><p>Nitro \u662F Nuxt \u5185\u90E8\u4F7F\u7528\u7684\u670D\u52A1\u5668\u3002\u6211\u4EEC\u53EF\u4EE5\u8FDB\u5165\u5904\u7406\u8FC7\u7A0B\uFF0C\u505A\u4E00\u4E9B\u8C03\u6574\u3002</p><p>\u5982\u679C\u6211\u4EEC\u6839\u636E\u8DEF\u5F84\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u8FD9\u6837\u505A\u4F1A\u7834\u574F <code>queryContent</code> \u7684\u8C03\u7528\uFF0C\u56E0\u4E3A<code>queryContent</code> \u6B63\u5728\u67E5\u770B\u6211\u4EEC\u521A\u521A\u4FEE\u6539\u7684 <code>_path</code> \u5C5E\u6027\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u6211\u4EEC\u8981\u4FDD\u7559\u90A3\u4E2A\u539F\u59CB\u76EE\u5F55\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u4FEE\u6539\u6211\u4EEC\u7684 <code>queryContent</code> \u8C03\u7528\u6765\u8FC7\u6EE4\u8FD9\u4E2A\u65B0\u7684 <code>_original_dir</code> \u5C5E\u6027\u3002</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Before</span></span>
<span class="line"><span style="color:#82AAFF;">queryContent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/articles</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// After</span></span>
<span class="line"><span style="color:#82AAFF;">queryContent</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">where</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">_original_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">$eq</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/articles</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u63D0\u793A\uFF1A\u4F7F\u7528 <code>nuxi clean</code> \u6765\u5F3A\u5236 Nuxt Content \u91CD\u65B0\u83B7\u53D6\u5E76\u91CD\u65B0\u8F6C\u6362\u4F60\u7684\u6240\u6709\u5185\u5BB9\u3002</p><h2 id="\u{1F4DC}-\u66F4\u597D\u5730\u7F16\u5199\u7EC4\u5408\u903B\u8F91\uFF1A\u9009\u9879\u5BF9\u8C61-3-5" tabindex="-1">\u{1F4DC} \u66F4\u597D\u5730\u7F16\u5199\u7EC4\u5408\u903B\u8F91\uFF1A\u9009\u9879\u5BF9\u8C61 (3/5) <a class="header-anchor" href="#\u{1F4DC}-\u66F4\u597D\u5730\u7F16\u5199\u7EC4\u5408\u903B\u8F91\uFF1A\u9009\u9879\u5BF9\u8C61-3-5" aria-hidden="true">#</a></h2><p>\u6211\u4E0E Vue Mastery \u5408\u4F5C\uFF0C\u521B\u5EFA\u4E86\u8FD9\u4E2A\u5982\u4F55\u66F4\u597D\u5730\u7F16\u5199\u53EF\u7EC4\u5408\u903B\u8F91\u7684\u7CFB\u5217\u4E13\u680F\u3002</p><p>\u5728\u8FD9\u4E2A\u7CFB\u5217\u4E2D\uFF0C\u6211\u4EEC\u6DB5\u76D6\u4E86\u4E94\u4E2A\u4E0D\u540C\u7684\u6A21\u5F0F\u3002</p><p>\u5BF9\u4E8E\u6BCF\u4E00\u79CD\u6A21\u5F0F\uFF0C\u6211\u4EEC\u90FD\u5C55\u793A\u4E86\u5982\u4F55\u5B9E\u73B0\u5B83\uFF0C\u7136\u540E\u6211\u4EEC\u770B\u5230\u5B83\u5728 VueUse \u7684\u53EF\u7EC4\u5408\u903B\u8F91\u4E2D\u8FD0\u884C\u3002</p><p>\u8FD9\u7B2C\u4E09\u7BC7\u6587\u7AE0\u5C55\u793A\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u65B9\u6CD5\uFF0C\u4F7F\u4F60\u7684\u8FD4\u56DE\u503C\u66F4\u6709\u7528\u3002</p><p>\u5728\u8FD9\u91CC\u9605\u8BFB\u5B83\u3002<a href="https://www.vuemastery.com/blog/coding-better-composables-3-of-5" target="_blank" rel="noopener noreferrer">\u66F4\u597D\u5730\u7F16\u5199\u7EC4\u5408\u903B\u8F91\uFF1A\u9009\u9879\u5BF9\u8C61\uFF083/5\uFF09</a>\u3002</p><p>&quot;What one programmer can do in one month, two programmers can do in two months.&quot;</p><h2 id="\u{1F4AC}-\u7A0B\u5E8F\u5458\u751F\u4EA7\u529B\u7684\u539F\u5219-principles-of-programmer-productivity" tabindex="-1">\u{1F4AC} \u7A0B\u5E8F\u5458\u751F\u4EA7\u529B\u7684\u539F\u5219 Principles of Programmer Productivity <a class="header-anchor" href="#\u{1F4AC}-\u7A0B\u5E8F\u5458\u751F\u4EA7\u529B\u7684\u539F\u5219-principles-of-programmer-productivity" aria-hidden="true">#</a></h2><p>&quot;\u4E00\u4E2A\u7A0B\u5E8F\u5458\u4E00\u4E2A\u6708\u80FD\u505A\u7684\u4E8B\uFF0C\u4E24\u4E2A\u7A0B\u5E8F\u5458\u4E24\u4E2A\u6708\u5C31\u80FD\u5B8C\u6210\u3002&quot; \u2014Fred Brooks</p><p>&quot;What one programmer can do in one month, two programmers can do in two months.&quot; \u2014Fred Brooks</p><h2 id="\u{1F9E0}-\u95F4\u9694\u91CD\u590D\uFF1Athe-css-unselector" tabindex="-1">\u{1F9E0} \u95F4\u9694\u91CD\u590D\uFF1AThe CSS Unselector <a class="header-anchor" href="#\u{1F9E0}-\u95F4\u9694\u91CD\u590D\uFF1Athe-css-unselector" aria-hidden="true">#</a></h2><p><strong>\u60F3\u8981\u957F\u65F6\u95F4\u7262\u7262\u8BB0\u4F4F\u67D0\u4E9B\u4E8B\u60C5\uFF0C\u6700\u597D\u65B9\u5F0F\u5C31\u662F\u5B9A\u671F\u56DE\u987E\uFF0C\u9010\u6E10\u589E\u52A0\u56DE\u987E\u7684\u95F4\u9694 \u{1F468}\u200D\u{1F52C}</strong></p><p><strong>\u5B9E\u9645\u4E0A\uFF0C\u8BB0\u4F4F\u8FD9\u4E9B tips \u6BD4\u53D1\u5446\u6709\u7528\u5F97\u591A\uFF0C\u8FD9\u662F\u51E0\u5468\u524D\u7684\u4E00\u4E2A tip \u53EF\u4EE5\u5524\u8D77\u4F60\u7684\u8BB0\u5FC6\u3002</strong></p><p>\u63D0\u8D77 CSS \u6211\u4EEC\u901A\u5E38\u8BA8\u8BBA\u7684\u662F\u5982\u4F55\u901A\u8FC7\u9009\u62E9\u5668\u6765\u9009\u62E9\u5177\u4F53\u5143\u7D20\u3002</p><p>\u8981\u786E\u4FDD\u9009\u5BF9\u4E86\u5143\u7D20\uFF0C\u8FD9\u5F88\u96BE\u3002</p><p>\u6211\u7684\u535A\u5BA2\u4F7F\u7528\u4E86 Vue Router \u63D0\u4F9B\u7684 <code>.router-link-active</code> \u6765\u8BA9\u94FE\u63A5\u5F53\u524D\u7684\u9875\u9762\u3002\u6211\u4F1A\u6539\u53D8\u5F53\u524D\u94FE\u63A5\u7684\u989C\u8272\uFF0C\u8BA9\u7528\u6237\u77E5\u9053\u6D4F\u89C8\u4F4D\u7F6E\u3002</p><p>\u6211\u60F3\u786E\u4FDD\u9875\u9762\u91CC\u7684\u94FE\u63A5\u4E0D\u4F1A\u4F7F\u7528\u540C\u6837\u7684\u65B9\u5F0F\u7A81\u51FA\u5C55\u793A\u3002</p><p>\u4F8B\u5982\uFF0C\u4E00\u7BC7\u6587\u7AE0\u5F00\u5934\u7684\u76EE\u5F55\u5E94\u8BE5\u6709\u6B63\u5E38\u5916\u89C2\u7684\u94FE\u63A5\uFF0C\u800C\u4E0D\u662F\u6539\u53D8\u989C\u8272\u3002</p><p>\u4E3A\u4E86\u505A\u5230\u8FD9\u4E00\u70B9\uFF0C\u6211\u9700\u8981\u907F\u514D\u9009\u62E9\u6240\u6709\u5728 <code>href</code> \u5C5E\u6027\u4E2D\u5E26\u6709 <code>#</code> \u7684\u94FE\u63A5\u3002</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">router-link-active</span><span style="color:#A6ACCD;">: not(</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">href</span><span style="color:#A6ACCD;"> * </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u6B63\u5728\u4F7F\u7528\u4E00\u4E2A <code>:not</code> \u67E5\u8BE2\uFF0C\u4F46\u5728\u5176\u4E2D\u4F7F\u7528\u4E00\u4E2A\u5C5E\u6027\u9009\u62E9\u5668\u3002</p><p>\u6211\u7684\u5B9E\u9645\u4EE3\u7801\u751A\u81F3\u66F4\u6709\u8DA3\uFF0C\u56E0\u4E3A\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u7684\u4E8B\u60C5\u9700\u8981\u6211\u8003\u8651\u3002</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">nav-link</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">router-link-exact-active</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">not</span><span style="color:#89DDFF;">(.</span><span style="color:#FFCB6B;">site-title</span><span style="color:#89DDFF;">):</span><span style="color:#C792EA;">not</span><span style="color:#89DDFF;">([</span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">*=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span></span>
<span class="line"></span></code></pre></div><p><em>p.s. I also have three courses: <a href="https://michaelnthiessen.com/vue-tips-collection" target="_blank" rel="noopener noreferrer">Vue Tips Collection</a>, <a href="https://michaelnthiessen.com/reusable-components" target="_blank" rel="noopener noreferrer">Reusable Components</a> and <a href="https://michaelnthiessen.com/clean-components" target="_blank" rel="noopener noreferrer">Clean Components</a></em></p><h2 id="\u6765\u6E90" tabindex="-1">\u6765\u6E90 <a class="header-anchor" href="#\u6765\u6E90" aria-hidden="true">#</a></h2><p>\u539F\u6587 <a href="https://michaelnthiessen.com/weekly-077-september-07/" target="_blank" rel="noopener noreferrer">https://michaelnthiessen.com/weekly-077-september-07/</a></p><p>\u672C\u4F5C\u54C1\u91C7\u7528<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">\u77E5\u8BC6\u5171\u4EAB\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 4.0 \u56FD\u9645\u8BB8\u53EF\u534F\u8BAE</a>\u8FDB\u884C\u8BB8\u53EF\u3002</p>`,71),l=[p];function t(r,c,D,F,y,i){return a(),n("div",null,l)}var d=s(o,[["render",t]]);export{u as __pageData,d as default};