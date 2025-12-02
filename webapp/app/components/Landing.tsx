'use client';
import Link from "next/link";
import { useState } from "react";

export default function Landing() {
  const [copied, setCopied] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const copyInstall = () => {
    navigator.clipboard.writeText("go install yapi.run/cli/cmd/yapi@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const spinSheep = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-yapi-bg relative overflow-hidden font-sans text-yapi-fg selection:bg-yapi-accent selection:text-white">
      {/* --- Fun Layer: Background Grid & Noise --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Moving Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Glowing Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-yapi-accent/10 rounded-full blur-[120px] opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 px-6 py-6 border-b border-yapi-border/30 backdrop-blur-md bg-yapi-bg/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={spinSheep}
            className="flex items-center gap-3 group select-none transition-transform active:scale-95"
          >
            <span
              className="text-3xl transition-transform duration-700 ease-in-out"
              style={{ transform: `rotate(${clickCount * 360}deg)` }}
            >
              🐑
            </span>
            <span className="text-xl font-bold tracking-tight font-mono group-hover:text-yapi-accent transition-colors">yapi</span>
          </button>
          <div className="flex gap-6 items-center">
            <a href="https://github.com/jamierpond/yapi" className="text-sm font-medium text-yapi-fg-muted hover:text-yapi-fg transition-colors">
              GitHub
            </a>
            <Link
              href="/playground"
              className="hidden sm:block px-5 py-2 text-sm font-semibold rounded-lg bg-yapi-bg-elevated border border-yapi-border hover:border-yapi-accent hover:shadow-[0_0_15px_rgba(255,102,0,0.3)] transition-all duration-300"
            >
              Open Playground
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 relative z-10 flex flex-col items-center justify-center pt-20 pb-32 px-6">

        {/* The "Status Page" Shade */}
        <div className="mb-8 animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-help" title="Seriously, cloud tools are down all the time.">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-red-900/50 bg-red-950/30 backdrop-blur-sm shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            <div className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </div>
            <span className="text-xs font-mono text-red-200">
              <span className="line-through opacity-50">Localhost is down</span>
              <span className="ml-2 font-bold text-white">Localhost is offline-first.</span>
            </span>
          </div>
        </div>

        <div className="max-w-5xl w-full text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Why do you need a login <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-yapi-accent/20 blur-xl opacity-50"></span>
              <span className="relative bg-gradient-to-r from-yapi-accent via-orange-300 to-yapi-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-shine">
                to test localhost?
              </span>
            </span>
          </h1>

          <p className="text-xl text-yapi-fg-muted max-w-2xl mx-auto leading-relaxed">
            Your dev loop, unchained. <br/>
            <strong>yapi</strong> is the Go-powered, git-backed API client that makes you wonder how you ever shipped code without it.
          </p>

          <div className="flex flex-col items-center gap-4 pt-8">
            <button
              onClick={copyInstall}
              className="group relative px-6 py-4 bg-yapi-bg-elevated hover:bg-black border border-yapi-border hover:border-yapi-accent/50 rounded-xl transition-all duration-300 text-left flex items-center gap-4 font-mono text-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-yapi-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="text-yapi-accent mr-1 z-10 animate-pulse">{">"}</span>
              <span className="text-yapi-fg-muted z-10">$ <span className="text-yapi-fg">go install yapi.run/cli/cmd/yapi@latest</span></span>
              <span className={`text-yapi-fg-subtle group-hover:text-yapi-accent transition-all whitespace-nowrap z-10 ${copied ? 'scale-110 font-bold' : ''}`}>
                {copied ? "✓ Copied!" : "Copy"}
              </span>
            </button>
            <Link
              href="/playground"
              className="px-8 py-4 rounded-xl bg-yapi-accent hover:bg-yapi-accent-hover text-white font-bold transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,102,0,0.4)] hover:-translate-y-1 active:translate-y-0"
            >
              Try in Browser
            </Link>
          </div>
        </div>

        {/* The Comparison (Shade Section) */}
        <div className="max-w-5xl w-full mx-auto mt-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yapi-fg">The "Enterprise" Way</h3>
              <ul className="space-y-3 text-yapi-fg-muted">
                <li className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-red-500">✕</span>
                  <span>Forced cloud sync for local collections</span>
                </li>
                <li className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-red-500">✕</span>
                  <span>"Service Unavailable" means you stop working</span>
                </li>
                <li className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-red-500">✕</span>
                  <span>500MB RAM usage for a GET request</span>
                </li>
                <li className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-red-500">✕</span>
                  <span>Updates that move buttons for no reason</span>
                </li>
              </ul>
            </div>

            <div className="h-px w-full bg-yapi-border/50 md:hidden"></div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yapi-fg">Superpowers Unlocked</h3>
              <ul className="space-y-3 text-yapi-fg-muted">
                <li className="flex items-center gap-3">
                  <span className="text-yapi-success">✓</span>
                  <span>Version control your API calls. Review in PRs.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yapi-success">✓</span>
                  <span>Instant startup. One binary. Zero bloat.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yapi-success">✓</span>
                  <span>Stay in flow with TUI + LSP in your editor</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yapi-success">✓</span>
                  <span>Works on a plane, in a tunnel, anywhere.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Representation - Fun Terminal Window */}
          <div className="order-1 md:order-2 relative group perspective-1000">
             {/* Glow behind terminal */}
             <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-yapi-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

             <div className="relative bg-[#1e1e1e] border border-yapi-border rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]">
                {/* Terminal Header */}
                <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 cursor-pointer"></div>
                  </div>
                  <div className="flex-1 text-center font-mono text-xs text-yapi-fg-muted/60 ml-[-50px]">
                    yapi watch — 80x24
                  </div>
                </div>

                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto relative">
                  {/* Scanline effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-10 pointer-events-none bg-[length:100%_4px,6px_100%]"></div>

                  <code className="block text-yapi-fg relative z-20">
                    <div className="mb-4 text-yapi-fg-subtle border-b border-white/5 pb-2">
                      <span>$ cat config.yapi.yml</span>
                    </div>

                    <span className="text-yapi-accent">url</span>: http://localhost:8080<br/>
                    <span className="text-yapi-accent">method</span>: POST<br/>
                    <span className="text-yapi-accent">body</span>:<br/>
                    {"  "}status: "ready"<br/>
                    {"  "}deployment: "local"<br/>
                    <br/>
                    <div className="mb-2 text-yapi-fg-subtle border-t border-white/5 pt-4">
                       <span>$ yapi run config.yapi.yml</span>
                    </div>

                    <span className="text-yapi-success">200 OK</span> <span className="text-yapi-fg-muted">4ms</span><br/>
                    <span className="text-yellow-500">{`{`}</span><br/>
                    {"  "}<span className="text-blue-400">"message"</span>: <span className="text-green-400">"No login required."</span><br/>
                    <span className="text-yellow-500">{`}`}</span>
                    <span className="animate-pulse inline-block w-2 h-4 bg-yapi-accent ml-1 align-middle"></span>
                  </code>
                </div>

                {/* "Offline" Badge */}
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-yapi-success/10 border border-yapi-success/30 rounded text-[10px] text-yapi-success font-bold uppercase tracking-wider z-20 backdrop-blur-sm">
                  100% Offline
                </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-3 gap-6 mt-32">
          <FeatureCard
            icon="⚡"
            title="Go Native"
            desc="One binary. Starts in milliseconds. Uses almost no memory. This is how tools should feel."
          />
          <FeatureCard
            icon="📺"
            title="TUI & Watch Mode"
            desc="Edit your YAML, see results instantly. Never leave your terminal. Never break your flow."
          />
          <FeatureCard
            icon="🧠"
            title="LSP Integration"
            desc="Autocomplete, validation, and jump-to-definition in VS Code, Neovim, or whatever you use."
          />
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-yapi-border/50 bg-yapi-bg-elevated/30 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-yapi-fg-muted text-sm font-mono hover:text-yapi-accent transition-colors cursor-copy select-all">
            rm -rf postman && go install yapi
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/jamierpond/yapi" className="text-yapi-fg-subtle hover:text-yapi-accent transition-colors text-sm">Source Code</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        .animate-shine {
          animation: shine 4s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="group p-8 rounded-2xl bg-yapi-bg-elevated/50 border border-yapi-border backdrop-blur-sm hover:border-yapi-accent/30 hover:bg-yapi-bg-elevated/80 transition-all duration-300 hover:-translate-y-2">
      <div className="h-12 w-12 rounded-lg bg-yapi-bg-subtle flex items-center justify-center mb-6 text-2xl shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-mono group-hover:text-yapi-accent transition-colors">{title}</h3>
      <p className="text-yapi-fg-muted leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}
