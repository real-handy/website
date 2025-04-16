import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common Mistakes That Cause Tech Startup Failures | Real Handy",
  description: "Explore six critical pitfalls that lead to tech startup failures and how to avoid them.",
};

export default function CommonMistakesPage() {
  return (
    <>
      <Header 
        title="common mistakes" 
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
                Why Tech Startups Fail
              </h1>
              <div className="h-2 w-40 bg-amber-500 mx-auto rounded-full mb-8"></div>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                Learn the six most common mistakes that lead to tech startup failures and how to navigate around these pitfalls for sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="relative bg-slate-800/70 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The Hard Truth About Tech Startups
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Over 90% of tech startups fail. While failure can teach valuable lessons, 
                it's better to learn from others' experiences. Here are six critical mistakes
                that repeatedly sink promising tech ventures, backed by data and real-world examples.
              </p>
            </div>
          </div>
        </div>

        {/* Mistake 1: Overengineering Solutions */}
        <section className="relative bg-indigo-900/40 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-amber-500/40 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">1</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                    Overengineering Solutions
                  </h2>
                  <p className="text-lg text-slate-300 mb-4">
                    Many founders fall in love with their solution rather than being obsessed with the problem. 
                    They build elaborate products with excessive features that don't address a significant market need.
                  </p>
                  <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-2">Warning Signs:</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Difficulty articulating who your customer is and what problem you're solving</li>
                    <li>Building features without customer validation</li>
                    <li>Low engagement metrics after launch</li>
                    <li>Engineering team focused on technical elegance rather than user value</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-2">The Solution:</h3>
                  <p className="text-lg text-slate-300 mb-4">
                    Begin with collaborative service design that brings together all disciplines: engineering, 
                    product, sales, and business stakeholders. Map the entire user journey and focus on 
                    validating the core problem before committing to specific solutions.
                  </p>
                  <p className="text-lg text-slate-300">
                    Interview at least 50 potential users before writing a single line of code. 
                    Create a simple MVP to test your assumptions, and be ready to adapt based on real feedback. 
                    Remember that a working solution to a real problem is always better than a perfect solution 
                    to a non-existent one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mistake 2: Premature Scaling */}
        <section className="relative bg-slate-900/80 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-indigo-500/40 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">2</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                    Premature Scaling
                  </h2>
                  <p className="text-lg text-slate-300 mb-4">
                    Spending money too quickly before validating product-market fit is a death sentence. 
                    Many startups hire too many people, build complex infrastructure, or overspend on 
                    marketing before having a repeatable business model.
                  </p>
                  <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-2">Warning Signs:</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>High burn rate with limited traction</li>
                    <li>Hiring specialists for future problems</li>
                    <li>Overbuilding technology infrastructure</li>
                    <li>Customer acquisition costs exceed lifetime value</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-2">The Solution:</h3>
                  <p className="text-lg text-slate-300">
                    Focus on the metrics that matter earliest in your journey: retention and engagement 
                    rather than user count. Maintain a lean team until you have clear product-market fit.
                    Outsource or use fractional resources for specialized needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mistake 3: Technical Debt Overload */}
        <section className="relative bg-amber-900/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 rounded-full bg-slate-500/20 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-slate-500/40 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">3</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                    Technical Debt Overload
                  </h2>
                  <p className="text-lg text-slate-300 mb-4">
                    In the race to build quickly, many startups accumulate crippling technical debt. 
                    Short-term decisions create long-term problems that eventually stall innovation
                    and make the codebase unmaintainable.
                  </p>
                  <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-2">Warning Signs:</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Simple features taking increasingly longer to implement</li>
                    <li>High bug rate and regression issues</li>
                    <li>Developer turnover due to frustration</li>
                    <li>No automated testing or deployment processes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-2">The Solution:</h3>
                  <p className="text-lg text-slate-300 mb-4">
                    Start with proper service design that involves all company disciplines: engineering, 
                    sales, and business stakeholders. Cross-functional collaboration early in the 
                    development process helps identify potential technical challenges before they become debt.
                  </p>
                  <p className="text-lg text-slate-300">
                    Aim for the right balance between speed and quality. Allocate 20% of development time 
                    to refactoring and paying down technical debt. Implement basic DevOps practices early, 
                    including automated testing and continuous integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mistake 4: Poor Team Dynamics */}
        <section className="relative bg-slate-800/60 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-amber-500/40 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">4</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                    Poor Team Dynamics
                  </h2>
                  <p className="text-lg text-slate-300 mb-4">
                    Co-founder conflicts and poor team dynamics are responsible for 23% of startup failures.
                    The stress of startup life magnifies interpersonal issues and can lead to toxic culture.
                  </p>
                  <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-2">Warning Signs:</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Unclear decision-making processes</li>
                    <li>Misaligned incentives among founders</li>
                    <li>Communication breakdowns between tech and business teams</li>
                    <li>Avoidance of difficult conversations</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-2">The Solution:</h3>
                  <p className="text-lg text-slate-300">
                    Create clear governance structures and decision-making frameworks early. 
                    Have regular founder check-ins separate from operational meetings.
                    Consider working with a startup coach or advisor to navigate team dynamics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mistake 5: Ignoring User Feedback */}
        <section className="relative bg-indigo-800/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 rounded-full bg-slate-500/20 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-slate-500/40 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">5</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                    Ignoring User Feedback
                  </h2>
                  <p className="text-lg text-slate-300 mb-4">
                    Many founders fall into the trap of confirmation bias, only hearing feedback that 
                    confirms their preexisting beliefs. They filter out negative signals that could 
                    help them course-correct.
                  </p>
                  <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-2">Warning Signs:</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>No systematic process for collecting user feedback</li>
                    <li>Dismissing criticism as "users don't understand our vision"</li>
                    <li>Building features based on internal opinions rather than data</li>
                    <li>High churn rates without understanding the root causes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-2">The Solution:</h3>
                  <p className="text-lg text-slate-300">
                    Implement regular user interviews and feedback sessions. Create a culture where negative 
                    feedback is valued. Tie product decisions to user metrics and observed behaviors, not 
                    just what users say they want.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mistake 6: Overlooking Regulatory and Compliance Issues */}
        <section className="relative bg-slate-900/70 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-indigo-500/40 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">6</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                    Overlooking Regulatory and Compliance Issues
                  </h2>
                  <p className="text-lg text-slate-300 mb-4">
                    Technology startups often encounter unexpected regulatory hurdles that derail their 
                    business model. From data privacy laws to industry-specific regulations, compliance 
                    issues can stop a promising startup in its tracks.
                  </p>
                  <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-2">Warning Signs:</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>No legal counsel specialized in your industry</li>
                    <li>Collecting sensitive data without proper protocols</li>
                    <li>Entering regulated markets without understanding the landscape</li>
                    <li>Rapid international expansion without considering local laws</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-2">The Solution:</h3>
                  <p className="text-lg text-slate-300">
                    Engage with regulatory experts early in your journey. Build compliance into your 
                    product architecture from the beginning. Stay informed about regulatory changes in 
                    your industry and allocate resources for compliance as you scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Don't Navigate These Challenges Alone
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300 mb-8">
                At Real Handy, we've helped dozens of startups avoid these critical mistakes. 
                Our fractional CTO and technical leadership services provide the expertise you 
                need without the full-time executive cost.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-amber-500 px-8 py-3 text-lg font-semibold text-slate-900 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                >
                  Schedule a Call
                </a>
                <a href="/#roles" className="text-lg font-semibold leading-6 text-white hover:text-amber-300">
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