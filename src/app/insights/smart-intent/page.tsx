import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intent vs. Impact | Real Handy",
  description: "Understanding the difference between intent and impact in engineering leadership.",
};

export default function SmartIntentPage() {
  return (
    <>
      <Header 
        title="intent" 
        navigation={[
          { label: "home", href: '/' },
          { label: "roles", href: '/#roles' },
          { label: "conversations", href: '/#conversations' },
          { label: "connect", href: '/#connect' },
        ]}
      />
      <main className="bg-slate-900 bg-center bg-repeat bg-[url('/bg.svg')]">
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Smart Intent, <br />Dumb Impact
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Understanding the difference between intent and impact in engineering leadership
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-slate-800 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-xl font-semibold text-gray-200 mb-6">The best engineering leaders I know share a defining characteristic: they&apos;re obsessed with impact, not intent.</h2>
              
              <div className="space-y-12 text-gray-300 text-lg">
                <p>This might seem obvious. After all, who doesn&apos;t want to have impact? But when we examine our day-to-day behaviors, many of us reveal that we value intent far more than we realize.</p>
                
                <p>Consider how often we defend our decisions with statements like:</p>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>&quot;I was trying to unblock the team&quot;</li>
                  <li>&quot;My goal was to improve quality&quot;</li>
                  <li>&quot;I wanted to reduce technical debt&quot;</li>
                  <li>&quot;I was aiming to increase velocity&quot;</li>
                </ul>
                
                <p>These all focus on <span className="font-semibold">what we intended</span>, not <span className="font-semibold">what actually happened</span>.</p>

                <p>The hard truth: nobody cares about your intent. They care about results.</p>
                
                <p>Most people have good intentions. That&apos;s the baseline. What sets great leaders apart is their ability to produce the right outcomes consistently. While intentions exist only in your head, impact exists in the real world where it can be measured and felt.</p>
                
                <h3 className="text-xl font-bold text-white mt-16 mb-4">The Leadership Maturity Model: From Intent to Impact</h3>
                
                <p>I&apos;ve observed that engineering leaders typically progress through four stages of maturity in how they think about their work:</p>
                
                <div className="grid grid-cols-1 gap-6 mt-8">
                  <div className="border border-slate-700 rounded-lg p-6 bg-slate-800">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-red-900/30 rounded-full h-12 w-12 flex items-center justify-center">
                        <span className="text-xl font-bold text-red-400">1</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">Stage 1: Pure Intent</h4>
                    </div>
                    <p className="text-gray-300">&quot;I tried my best to help.&quot;</p>
                    <p className="text-gray-400 mt-2">Leaders at this stage judge themselves purely on their intentions and effort. They equate trying hard with doing well.</p>
                  </div>
                  
                  <div className="border border-slate-700 rounded-lg p-6 bg-slate-800">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-orange-900/30 rounded-full h-12 w-12 flex items-center justify-center">
                        <span className="text-xl font-bold text-orange-400">2</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">Stage 2: Activity Focus</h4>
                    </div>
                    <p className="text-gray-300">&quot;Look at all the things I&apos;m doing!&quot;</p>
                    <p className="text-gray-400 mt-2">Leaders at this stage shift from intentions to activities, but they&apos;re still not focused on outcomes. They measure success by busyness.</p>
                  </div>
                  
                  <div className="border border-slate-700 rounded-lg p-6 bg-slate-800">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-yellow-900/30 rounded-full h-12 w-12 flex items-center justify-center">
                        <span className="text-xl font-bold text-yellow-400">3</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">Stage 3: Output Orientation</h4>
                    </div>
                    <p className="text-gray-300">&quot;We shipped three features this sprint.&quot;</p>
                    <p className="text-gray-400 mt-2">Leaders at this stage focus on concrete outputs, but may not connect them to broader impact. They optimize for shipping velocity over value delivery.</p>
                  </div>
                  
                  <div className="border border-slate-700 rounded-lg p-6 bg-slate-800">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-green-900/30 rounded-full h-12 w-12 flex items-center justify-center">
                        <span className="text-xl font-bold text-green-400">4</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">Stage 4: Impact Obsession</h4>
                    </div>
                    <p className="text-gray-300">&quot;We reduced customer support tickets by 32% while increasing engagement by 18%.&quot;</p>
                    <p className="text-gray-400 mt-2">Leaders at this stage focus relentlessly on meaningful outcomes. They measure success by real-world impact, not inputs or outputs.</p>
                  </div>
                </div>
                
                <p className="mt-10">Moving from Stage 1 to Stage 4 represents the journey from being intent-focused to impact-focused. It&apos;s a transformation from judging yourself by what happens in your head to judging yourself by what happens in the world.</p>
                
                <h3 className="text-xl font-bold text-white mt-16 mb-4">The Intent-Impact Gap</h3>
                
                <p>The gap between our intentions and our impact is where most leadership failures occur. This gap exists for several reasons:</p>
                
                <ul className="list-disc pl-5 space-y-4 mt-6">
                  <li>
                    <span className="font-semibold text-white">We overestimate our clarity:</span> What seems clear in your head is rarely as clear to others. Your explanation of a technical approach may make perfect sense to you but leave your team confused.
                  </li>
                  <li>
                    <span className="font-semibold text-white">We underestimate system complexity:</span> Software engineering is complex. Your well-intended architecture change might solve one problem while creating three new ones.
                  </li>
                  <li>
                    <span className="font-semibold text-white">We fail to account for second-order effects:</span> Your decision to prioritize technical debt might improve code quality but delay a critical feature that customers are waiting for.
                  </li>
                  <li>
                    <span className="font-semibold text-white">We miss contextual factors:</span> Your push for a more rigorous code review process might improve quality but harm morale if the team is already feeling overwhelmed.
                  </li>
                </ul>
                
                <p>Smart people are particularly vulnerable to the intent-impact gap. Why? Because they&apos;re used to being right. They often trust their own judgment implicitly and may be less likely to seek feedback or validate their assumptions.</p>
                
                <p>The smarter you are, the more you need to guard against assuming your intent will translate into impact.</p>
                
                <h3 className="text-xl font-bold text-white mt-16 mb-4">Closing the Gap: From Smart Intent to Smart Impact</h3>
                
                <p>How do you shift from being intent-focused to impact-focused? Here are practical strategies:</p>
                
                <div className="space-y-8 mt-8">
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-2">1. Define success in terms of outcomes, not activities</h4>
                    <p>Instead of &quot;I&apos;ll implement a new CI pipeline,&quot; try &quot;I&apos;ll reduce build times by 40% and cut deploy failures in half.&quot;</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-2">2. Create feedback loops to measure impact</h4>
                    <p>Establish metrics that track the actual impact of your decisions. If you&apos;re refactoring code, measure how it affects development velocity or defect rates.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-2">3. Perform pre-mortems</h4>
                    <p>Before implementing a decision, imagine it&apos;s six months later and your approach failed. What went wrong? This helps identify potential gaps between intent and impact.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-2">4. Seek diverse perspectives</h4>
                    <p>Your intent passes through the filter of your experiences and biases. Getting input from people with different perspectives can help predict impacts you might miss.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-2">5. Start small and iterate</h4>
                    <p>When possible, test your ideas on a small scale first. This allows you to measure actual impact before committing fully.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-2">6. Practice intellectual humility</h4>
                    <p>Acknowledge that your intent doesn&apos;t guarantee impact. Be open to the possibility that your approach might not work as expected.</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mt-16 mb-4">The Ultimate Test: Taking Responsibility for Impact</h3>
                
                <p>The clearest sign of an impact-focused leader is how they respond when things go wrong.</p>
                
                <p>Intent-focused leaders say: &quot;But I was trying to help!&quot; or &quot;That wasn&apos;t what I meant to happen.&quot;</p>
                
                <p>Impact-focused leaders say: &quot;The outcome wasn&apos;t what we needed. Here&apos;s what I learned and how I&apos;ll approach it differently next time.&quot;</p>
                
                <p className="mt-8">Next time you find yourself defending your intent, pause and redirect your energy toward understanding the actual impact. That&apos;s where your growth as a leader truly happens—and it&apos;s how you&apos;ll ultimately deliver the results that matter.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}