import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Intent: From Pain to Purpose | Real Handy",
  description: "How to transform personal pain points into targeted business intent and frame your venture for success.",
};

export default function SmartIntentPage() {
  return (
    <>
      <Header 
        title="smart intent" 
        navigation={[
          { label: "home", href: '/' },
          { label: "roles", href: '/#roles' },
          { label: "conversations", href: '/#conversations' },
          { label: "connect", href: '/#connect' },
        ]}
      />
      <main className="bg-slate-900 bg-center bg-repeat bg-[url('/bg.svg')]">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden pt-14">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8">
                Smart Intent
              </h1>
              <div className="h-2 w-40 bg-emerald-500 mx-auto rounded-full mb-8"></div>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                Transforming personal pain into focused business purpose
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="relative bg-slate-800/70 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                From Pain to Purpose
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                The most compelling ventures don&apos;t begin with dreams of unicorn status or elaborate business plans. They begin with pain—real, personal pain points that demand a solution. Smart Intent is about transforming these pain points into focused business purpose, then framing them in ways that make exploration and validation possible.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Pain Section */}
        <section className="relative bg-emerald-900/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">
                Start With Your Pain
              </h2>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-emerald-500/40 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">💡</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-6">
                    Personal Experience as Your North Star
                  </h3>
                  <p className="text-lg text-slate-300 mb-4">
                    The most authentic business ideas emerge from personal frustration or unmet needs you&apos;ve directly experienced. When you&apos;ve lived with a problem, you understand its nuances in ways market research alone can&apos;t reveal.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-emerald-400 mt-8 mb-2">Signs Your Pain Point Has Potential:</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>You&apos;ve tried existing solutions and found them all inadequate</li>
                    <li>You&apos;ve improvised workarounds that others might also need</li>
                    <li>You find yourself repeatedly explaining the problem to others</li>
                    <li>The frustration has persisted over time rather than being momentary</li>
                    <li>Other people express similar frustrations when you mention the problem</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12 mb-16">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-emerald-500/40 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">🔍</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-6">
                    Examine Your Expertise
                  </h3>
                  <p className="text-lg text-slate-300 mb-4">
                    Your experience gives you domain knowledge that&apos;s valuable and hard to replicate. Consider where your professional background, hobbies, or lived experience have given you unique insights others might lack.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-emerald-400 mt-8 mb-2">Questions to Consider:</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>What problems do people in your field consistently complain about?</li>
                    <li>What inefficiencies have you noticed that others seem to accept?</li>
                    <li>Where have you developed specialized knowledge or shortcuts?</li>
                    <li>What tasks do people regularly ask for your help with?</li>
                    <li>Which problems have you solved for yourself that might help others?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Framing Intent Section */}
        <section className="relative bg-slate-800/60 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">
                Frame Your Intent Small and Smart
              </h2>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-emerald-500/40 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">🎯</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-6">
                    Narrow Your Focus
                  </h3>
                  <p className="text-lg text-slate-300 mb-4">
                    The most common mistake founders make is trying to solve too much at once. Smart intent means identifying the smallest, most specific version of your solution that still delivers value.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-emerald-400 mt-8 mb-2">Techniques for Narrowing Focus:</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Focus on a single user persona with an acute need</li>
                    <li>Address one critical aspect of a larger problem</li>
                    <li>Target a specific sub-niche or vertical first</li>
                    <li>Remove all features that aren&apos;t essential to solving the core pain</li>
                    <li>Define success in small, measurable terms</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12 mb-16">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-emerald-500/40 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">📝</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-6">
                    Craft a Problem Statement
                  </h3>
                  <p className="text-lg text-slate-300 mb-4">
                    Turn your insight into a clear, testable hypothesis. A well-framed problem statement creates focus and makes validation possible.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-emerald-400 mt-8 mb-2">Elements of a Powerful Problem Statement:</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li><strong>Who:</strong> Identify the specific user experiencing the pain</li>
                    <li><strong>What:</strong> Describe the actual struggle or frustration</li>
                    <li><strong>Why:</strong> Explain the impact of this pain point</li>
                    <li><strong>When:</strong> Note when and how often this problem occurs</li>
                    <li><strong>How:</strong> Outline how they currently attempt to solve it</li>
                  </ul>
                  
                  <div className="bg-slate-700/50 p-6 mt-8 rounded-lg">
                    <h5 className="text-lg font-semibold text-white mb-2">Example Problem Statement:</h5>
                    <p className="text-slate-300 italic">
                      &ldquo;Freelance designers (who) struggle to get timely, actionable feedback on their work (what) because clients send fragmented comments across multiple channels (how). This leads to revision confusion and project delays (why) during critical approval phases of projects (when).&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Validation Section */}
        <section className="relative bg-emerald-900/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">
                Validate With Minimal Investment
              </h2>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-emerald-500/40 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">🔬</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-6">
                    Create Lightweight Experiments
                  </h3>
                  <p className="text-lg text-slate-300 mb-4">
                    Before building anything, design small experiments to test your assumptions. The goal is to learn whether your understanding of the problem matches reality.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-emerald-400 mt-8 mb-2">Validation Approaches:</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Conduct problem interviews with potential users</li>
                    <li>Create a landing page describing your solution to gauge interest</li>
                    <li>Build a paper prototype or mockup for feedback</li>
                    <li>Try to solve the problem manually for a few customers</li>
                    <li>Use existing tools to cobble together a rough solution</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12 mb-16">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-emerald-500/40 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">⚡</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-6">
                    Learn Fast, Pivot Early
                  </h3>
                  <p className="text-lg text-slate-300 mb-4">
                    Your initial frame is just a starting point. Be prepared to refine your understanding as you gather feedback and learn more about the problem space.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-emerald-400 mt-8 mb-2">Signs You&apos;re on the Right Track:</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>People eagerly share their experiences with the problem</li>
                    <li>Potential users offer to pay for your solution before it&apos;s built</li>
                    <li>You discover the problem is even more painful than you thought</li>
                    <li>The same pain points come up repeatedly in conversations</li>
                    <li>You identify patterns that weren&apos;t visible before you started</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* From Vision to Venture Section */}
        <section className="relative bg-slate-800/60 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-12">
                From Vision to Venture: The Complete Journey
              </h2>
              
              <p className="text-lg text-slate-300 mb-12">
                Smart Intent is just one part of the founder&apos;s journey from initial vision to successful venture. Explore our complete framework to understand the entire process:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-700/50 p-6 rounded-lg text-left hover:bg-slate-700/70 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Common Mistakes</h3>
                  <p className="text-slate-300 mb-4">
                    Identify and avoid the pitfalls that derail early-stage ventures before they can gain traction.
                  </p>
                  <div className="mt-4">
                    <a href="/common-mistakes" className="text-emerald-400 hover:text-emerald-300">
                      Learn more →
                    </a>
                  </div>
                </div>
                
                <div className="bg-emerald-900/40 p-6 rounded-lg text-left ring-2 ring-emerald-500/50 hover:bg-emerald-900/50 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Smart Intent</h3>
                  <p className="text-slate-300 mb-4">
                    Transform personal pain into focused business intent, framed in a way that enables efficient exploration.
                  </p>
                  <div className="mt-4">
                    <a href="/smart-intent" className="text-emerald-400 hover:text-emerald-300">
                      You are here
                    </a>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 p-6 rounded-lg text-left hover:bg-slate-700/70 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Question Everything</h3>
                  <p className="text-slate-300 mb-4">
                    Discover how continuous questioning and user feedback leads to product-market fit.
                  </p>
                  <div className="mt-4">
                    <a href="/question-everything" className="text-emerald-400 hover:text-emerald-300">
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
                Your Pain Is Your Advantage
              </h2>
              <p className="text-lg leading-8 text-slate-300 mb-8">
                The most innovative solutions often come from founders who were trying to scratch their own itch. By starting with personal pain and framing your intent in small, smart ways, you create a foundation for exploration that&apos;s both authentic and efficient. 
              </p>
              <p className="text-xl italic text-emerald-400 border-l-4 border-emerald-500 pl-6 py-4 text-left">
                &ldquo;The pain you&apos;ve experienced isn&apos;t just motivation—it&apos;s market intelligence. When you solve your own problem in a focused way, you&apos;re likely solving it for others too.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Pain Into Purpose?
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300 mb-8">
                At Real Handy, we help founders navigate the journey from initial pain points to validated business models. Our technical leadership team can guide you through framing your intent and building the right foundation for your venture.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-emerald-500 px-8 py-3 text-lg font-semibold text-slate-900 shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                >
                  Schedule a Call
                </a>
                <a href="/#roles" className="text-lg font-semibold leading-6 text-white hover:text-emerald-300">
                  Learn about our services <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}