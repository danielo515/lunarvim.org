import{r as s,o as t,c as l,a as n,b as a,w as i,F as p,e as o,d as e}from"./app.77420ab3.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const u={},h=o(`<h1 id="colorscheme" tabindex="-1"><a class="header-anchor" href="#colorscheme" aria-hidden="true">#</a> Colorscheme</h1><h2 id="switching-colors" tabindex="-1"><a class="header-anchor" href="#switching-colors" aria-hidden="true">#</a> Switching colors</h2><p>To switch color schemes on the fly, type the following command:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>Telescope <span class="token keyword">colorscheme</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>You can also press <code>Space</code> <code>s</code> <code>p</code> to cycle through colorschemes with a preview.</p><p>To change the color scheme permanently, modify <code>config.lua</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>colorscheme <span class="token operator">=</span> <span class="token string">&#39;desert&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="installing-colorschemes" tabindex="-1"><a class="header-anchor" href="#installing-colorschemes" aria-hidden="true">#</a> Installing colorschemes</h2>`,8),m=e("You can add any colorscheme you like. Just add a plugin with the colorscheme of your choice. For more information on installing plugins "),g=e("look here. "),b={href:"https://github.com/rockerBOO/awesome-neovim#colorscheme",target:"_blank",rel:"noopener noreferrer"},_=e("This is a list"),k=e(" of colorschemes with tree-sitter support"),v=o(`<h2 id="transparent-windows" tabindex="-1"><a class="header-anchor" href="#transparent-windows" aria-hidden="true">#</a> Transparent Windows</h2><p>If you&#39;re using transparent windows enable this setting</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>transparent_window <span class="token operator">=</span> <span class="token keyword">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>That enables the following settings</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>cmd <span class="token string">&quot;au ColorScheme * hi Normal ctermbg=none guibg=none&quot;</span>
cmd <span class="token string">&quot;au ColorScheme * hi SignColumn ctermbg=none guibg=none&quot;</span>
cmd <span class="token string">&quot;au ColorScheme * hi NormalNC ctermbg=none guibg=none&quot;</span>
cmd <span class="token string">&quot;au ColorScheme * hi MsgArea ctermbg=none guibg=none&quot;</span>
cmd <span class="token string">&quot;au ColorScheme * hi TelescopeBorder ctermbg=none guibg=none&quot;</span>
cmd <span class="token string">&quot;au ColorScheme * hi NvimTreeNormal ctermbg=none guibg=none&quot;</span>
cmd <span class="token string">&quot;let &amp;fcs=&#39;eob: &#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,5);function f(w,x){const r=s("RouterLink"),c=s("ExternalLinkIcon");return t(),l(p,null,[h,n("p",null,[m,a(r,{to:"/plugins/"},{default:i(()=>[g]),_:1})]),n("p",null,[n("a",b,[_,a(c)]),k]),v],64)}var y=d(u,[["render",f]]);export{y as default};
