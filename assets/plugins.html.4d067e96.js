import{o as p,c as e,a as s,t,F as o,e as a,d as c}from"./app.77420ab3.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const l={},i=a(`<h2 id="extended-configurations" tabindex="-1"><a class="header-anchor" href="#extended-configurations" aria-hidden="true">#</a> Extended Configurations</h2><p>Core plugins come pre-configured. Sometimes you may want to extend the configuration of these plugins to enable additional functionality. For example, if you want have autopairs automatically close your function definitions, you need to specify endwise rules.</p><p>LunarVim provides a way to extend the default configurations by adding the following to your configuration file. This specifies code to run after the configuration for autopairs has completed.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>autopairs<span class="token punctuation">.</span>on_config_done <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span>
   <span class="token comment">--  YOUR_VALID_CONFIG_HERE</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>To complete our example. This is what our endwise rule might look like. When the trigger is typed <code>def</code>, autopairs will add a corresponding <code>end</code>.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>autopairs<span class="token punctuation">.</span>on_config_done <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span>
  <span class="token keyword">local</span> endwise <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;nvim-autopairs.ts-rule&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>endwise
  module<span class="token punctuation">.</span><span class="token function">add_rules</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
    <span class="token function">endwise</span><span class="token punctuation">(</span><span class="token string">&#39;def&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span><span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>The <code>module</code> variable contains the result of <code>require(&quot;nvim-autopairs&quot;)</code></p><h2 id="configuring-debug-adapters" tabindex="-1"><a class="header-anchor" href="#configuring-debug-adapters" aria-hidden="true">#</a> Configuring debug adapters</h2><p>Here is a sample configuration for setting up a debugger for cpp</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>dap<span class="token punctuation">.</span>on_config_done <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>dap<span class="token punctuation">)</span>
    dap<span class="token punctuation">.</span>adapters<span class="token punctuation">.</span>lldb <span class="token operator">=</span> <span class="token punctuation">{</span>
      type <span class="token operator">=</span> <span class="token string">&#39;executable&#39;</span><span class="token punctuation">,</span>
      command <span class="token operator">=</span> <span class="token string">&#39;/usr/bin/lldb-vscode&#39;</span><span class="token punctuation">,</span>
      name <span class="token operator">=</span> <span class="token string">&quot;lldb&quot;</span>
    <span class="token punctuation">}</span>

    dap<span class="token punctuation">.</span>configurations<span class="token punctuation">.</span>cpp <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token punctuation">{</span>
            name <span class="token operator">=</span> <span class="token string">&quot;Launch&quot;</span><span class="token punctuation">,</span>
            type <span class="token operator">=</span> <span class="token string">&quot;lldb&quot;</span><span class="token punctuation">,</span>
            request <span class="token operator">=</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
            program <span class="token operator">=</span> <span class="token string">&quot;\${workspaceFolder}/build/binary_name&quot;</span><span class="token punctuation">,</span>
            cwd <span class="token operator">=</span> <span class="token string">&quot;\${workspaceFolder}/build&quot;</span><span class="token punctuation">,</span>
            stopOnEntry <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span>
            args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            runInTerminal <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    dap<span class="token punctuation">.</span>configurations<span class="token punctuation">.</span>c <span class="token operator">=</span> dap<span class="token punctuation">.</span>configurations<span class="token punctuation">.</span>cpp
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="configuring-toggleterm" tabindex="-1"><a class="header-anchor" href="#configuring-toggleterm" aria-hidden="true">#</a> Configuring ToggleTerm</h2><p>You can specify terminal applications to run with a keybind. LazyGit is the only command set up by default.</p><p>To set up an executable to run add the following to your <code>config.lua</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>terminal<span class="token punctuation">.</span>execs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;lazygit&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;gg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LazyGit&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;gdb&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GNU Debugger&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,14),r=c("The table structure is "),d=a(`<p>You can also do the following to append an executable</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>terminal<span class="token punctuation">.</span>execs<span class="token punctuation">[</span><span class="token operator">#</span>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>terminal<span class="token punctuation">.</span>execs<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;gdb&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GNU Debugger&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2);function k(n,b){return p(),e(o,null,[i,s("p",null,[r,s("code",null,t(n.exec_path,n.keymap,n.name),1)]),d],64)}var f=u(l,[["render",k]]);export{f as default};
