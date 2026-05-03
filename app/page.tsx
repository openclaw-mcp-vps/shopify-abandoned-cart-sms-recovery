export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Shopify SMS Recovery
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Recover Abandoned Carts with{' '}
          <span className="text-[#58a6ff]">AI-Timed SMS</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          CartPulse connects to your Shopify store, detects abandoned carts, and sends personalized SMS messages at the exact moment customers are most likely to buy — powered by AI.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Recovering Carts — $19/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">No credit card required for 14-day trial. Cancel anytime.</p>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-white">15%</p>
            <p className="text-sm text-[#8b949e] mt-1">Avg. recovery rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">2 min</p>
            <p className="text-sm text-[#8b949e] mt-1">Setup time</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">10x</p>
            <p className="text-sm text-[#8b949e] mt-1">Average ROI</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#30363d] rounded-2xl p-8 bg-[#161b22] text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited abandoned cart detection',
              'AI-optimized SMS send timing',
              'Personalized message templates',
              'Twilio SMS integration included',
              'Real-time recovery dashboard',
              'Shopify webhook sync',
              'Email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started Free
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">14-day free trial. No credit card needed.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does CartPulse connect to my Shopify store?</h3>
            <p className="text-[#8b949e] text-sm">CartPulse uses Shopify webhooks. After subscribing, you install our app from the Shopify App Store or paste a single webhook URL into your store settings — setup takes under 2 minutes.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the AI decide when to send the SMS?</h3>
            <p className="text-[#8b949e] text-sm">Our AI analyzes each customer's browsing behavior, time zone, past purchase history, and cart value to predict the window when they're most likely to convert — maximizing recovery without being intrusive.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is SMS compliance handled automatically?</h3>
            <p className="text-[#8b949e] text-sm">Yes. CartPulse only messages customers who have opted in to SMS marketing on your Shopify store and automatically honors opt-outs, keeping you fully TCPA and GDPR compliant.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} CartPulse. All rights reserved.
      </footer>
    </main>
  )
}
