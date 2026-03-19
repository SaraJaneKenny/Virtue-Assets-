import { useWallet } from '@txnlab/use-wallet-react'
import { Link } from 'react-router-dom'

export default function Home() {
  const { activeAddress } = useWallet()

  return (
    <div className="bg-[#050510] text-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm font-semibold border border-pink-500/20 backdrop-blur">
            VIRTUE ASSETS • NEON GRID
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Real-World Assets,
            <br />
            Rewritten On-Chain
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A high-signal environment for experimenting with tokenized assets. Built for teams exploring the edge of finance and infrastructure.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tokenize"
              className={`px-8 py-3 rounded-lg font-semibold transition shadow-lg ${
                activeAddress
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 text-white'
                  : 'bg-slate-600 cursor-not-allowed text-white'
              }`}
            >
              Initialize Asset
            </Link>

            <a
              className="px-8 py-3 rounded-lg font-semibold border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 transition backdrop-blur"
              target="_blank"
              rel="noreferrer"
              href="https://dev.algorand.co/concepts/assets/overview/"
            >
              Protocol Specs
            </a>
          </div>

          {!activeAddress && (
            <p className="mt-6 text-sm text-slate-500">
              Connect wallet to access system functions.
            </p>
          )}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">
            Execution Flow
          </h2>
          <p className="mt-2 text-slate-400">
            A minimal path from configuration to live token.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[ 
            {
              step: '01',
              title: 'Authenticate',
              desc: 'Connect and authorize via supported wallets.',
            },
            {
              step: '02',
              title: 'Configure',
              desc: 'Define structure, supply, and permissions.',
            },
            {
              step: '03',
              title: 'Deploy',
              desc: 'Issue your asset onto Algorand TestNet.',
            },
            {
              step: '04',
              title: 'Operate',
              desc: 'Transfer and simulate real-world flows.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-purple-500/20 bg-[#0b0b1a] p-6 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-white font-bold text-sm shadow-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              System Capabilities
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 text-xl">▸</span>
                <span className="text-slate-300">
                  <strong>Control Layer:</strong> Maintain authority over asset configuration
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 text-xl">▸</span>
                <span className="text-slate-300">
                  <strong>Transfer Logic:</strong> Enable or restrict movement dynamically
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 text-xl">▸</span>
                <span className="text-slate-300">
                  <strong>Recovery Hooks:</strong> Implement clawback safeguards
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 text-xl">▸</span>
                <span className="text-slate-300">
                  <strong>Metadata Links:</strong> Attach external documentation
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#0b0b1a] border border-purple-500/20 rounded-xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <div className="bg-black/40 rounded border border-purple-500/20 p-6">
              <p className="text-xs text-purple-400 mb-4 font-mono">
                CONFIG SNAPSHOT
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-slate-500">Asset:</span>{' '}
                  <span className="text-white font-semibold">Real Estate Token</span>
                </div>
                <div>
                  <span className="text-slate-500">Symbol:</span>{' '}
                  <span className="text-white font-semibold">PROPERTY</span>
                </div>
                <div>
                  <span className="text-slate-500">Supply:</span>{' '}
                  <span className="text-white font-semibold">1,000,000</span>
                </div>
                <div>
                  <span className="text-slate-500">Decimals:</span>{' '}
                  <span className="text-white font-semibold">2</span>
                </div>
                <div>
                  <span className="text-slate-500">Manager:</span>{' '}
                  <span className="text-white font-semibold">Your Wallet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Enter the Asset Layer
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Deploy, test, and iterate on tokenized assets in a controlled, high-signal environment.
          </p>
          <Link
            to="/tokenize"
            className={`inline-block px-8 py-3 rounded-lg font-semibold transition shadow-lg ${
              activeAddress
                ? 'bg-black text-white hover:bg-slate-900'
                : 'bg-white/30 cursor-not-allowed text-white'
            }`}
          >
            Create Asset
          </Link>
        </div>
      </div>
    </div>
  )
}
