export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">🚀 ClawApps</h1>
          <a
            href="/dashboard"
            className="text-gray-400 hover:text-white text-sm border border-gray-700 px-3 py-1 rounded"
          >
            Dashboard →
          </a>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-2xl">
          <h2 className="text-5xl font-bold mb-4">
            Turn any agent into a{' '}
            <span className="text-blue-400">product</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Import your OpenClaw skill, get a hosted chat UI with auth, rate limiting,
            and billing. Ship in minutes.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/dashboard"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors"
            >
              Create Your First App
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold">Import</div>
              <div className="text-gray-500 text-sm mt-1">Paste a skill URL or upload files</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Host</div>
              <div className="text-gray-500 text-sm mt-1">Gateway + chat UI deployed automatically</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Bill</div>
              <div className="text-gray-500 text-sm mt-1">Stripe subscriptions built in</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
