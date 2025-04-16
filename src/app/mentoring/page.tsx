import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Mentoring Services | Real Handy",
  description: "Personalized tech mentorship for founders, CTOs, and tech leaders. Accelerate your growth with experienced guidance.",
};

export default function MentoringPage() {
  return (
    <>
      <Header 
        title="mentoring" 
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
                Tech Leadership Mentoring
              </h1>
              <div className="h-2 w-40 bg-amber-500 mx-auto rounded-full mb-8"></div>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                Accelerate your growth as a technical leader with personalized guidance from experienced industry veterans.
              </p>
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <section className="relative bg-slate-800/70 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
                Who Our Mentoring Serves
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-900/60 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-500 mb-4">First-Time CTOs</h3>
                  <p className="text-slate-300">
                    Navigate the transition from engineer to executive with confidence. Learn to balance technical decisions with business needs.
                  </p>
                </div>
                <div className="bg-slate-900/60 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-500 mb-4">Technical Founders</h3>
                  <p className="text-slate-300">
                    Build your startup on solid technical foundations. Make informed decisions about architecture, hiring, and tech strategy.
                  </p>
                </div>
                <div className="bg-slate-900/60 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-500 mb-4">Rising Tech Leaders</h3>
                  <p className="text-slate-300">
                    Prepare for your next leadership role. Develop the skills and perspective needed to succeed at higher levels of technical leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentoring Approach */}
        <section className="relative bg-indigo-900/40 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
                Our Mentoring Approach
              </h2>
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full bg-amber-500/40 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Tailored Development Plan</h3>
                    <p className="text-slate-300">
                      We begin with a thorough assessment of your current skills, challenges, and goals. 
                      Together, we&apos;ll create a personalized mentoring plan focused on your specific needs 
                      and the outcomes that matter most to your career and organization.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full bg-amber-500/40 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Regular 1:1 Sessions</h3>
                    <p className="text-slate-300">
                      Engage in structured bi-weekly sessions designed to provide both strategic guidance 
                      and tactical problem-solving. Each session blends mentoring on leadership principles 
                      with practical advice for your current challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full bg-amber-500/40 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Real-World Application</h3>
                    <p className="text-slate-300">
                      Between sessions, apply what you&apos;ve learned with specific actionable tasks. 
                      We focus on immediate application to your current role, ensuring the mentoring 
                      translates to tangible results and observable growth.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full bg-amber-500/40 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Ongoing Support & Resources</h3>
                    <p className="text-slate-300">
                      Access to your mentor between sessions for quick questions or urgent situations. 
                      Receive curated resources, frameworks, and tools tailored to your specific 
                      leadership challenges and development areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topics & Areas */}
        <section className="relative bg-slate-900/80 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
                Mentoring Focus Areas
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-800/60 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-500 mb-4">Technical Strategy</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Architecture decision-making</li>
                    <li>Technology selection & evaluation</li>
                    <li>Technical debt management</li>
                    <li>Scaling systems & teams</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/60 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-500 mb-4">Leadership Skills</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Building & motivating engineering teams</li>
                    <li>Communication with non-technical stakeholders</li>
                    <li>Managing up and across departments</li>
                    <li>Developing your leadership style</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/60 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-500 mb-4">Career Development</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Positioning yourself for advancement</li>
                    <li>Building your personal brand</li>
                    <li>Navigating organizational politics</li>
                    <li>Work-life balance as a leader</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/60 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-500 mb-4">Business Alignment</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Translating business goals to technical roadmaps</li>
                    <li>Budget planning and resource allocation</li>
                    <li>Building relationships with investors/board members</li>
                    <li>Metrics and KPIs for technical teams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative bg-amber-900/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
                What Our Mentees Say
              </h2>
              <div className="grid gap-8">
                <div className="bg-slate-900/60 p-8 rounded-lg">
                  <p className="text-slate-300 italic mb-6">
                    &ldquo;The mentoring I received was transformative. I went from constantly putting out fires to 
                    actually leading my team with confidence and vision. My mentor helped me see blind spots 
                    I didn&apos;t know I had and gave me practical strategies to address them.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-indigo-600/50 mr-4"></div>
                    <div>
                      <p className="font-semibold text-white">Jamie Chen</p>
                      <p className="text-sm text-slate-400">CTO at HealthTech Startup</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-900/60 p-8 rounded-lg">
                  <p className="text-slate-300 italic mb-6">
                    &ldquo;As a technical founder, I was struggling to balance coding with leading the company. 
                    My mentor helped me create systems that allowed me to step back from day-to-day 
                    development while still maintaining technical oversight. It&apos;s completely changed how 
                    I run my business.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-amber-600/50 mr-4"></div>
                    <div>
                      <p className="font-semibold text-white">Alex Rivera</p>
                      <p className="text-sm text-slate-400">Founder at DevTools Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Packages */}
        <section className="relative bg-slate-800/60 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
                Mentoring Packages
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-900/80 p-8 rounded-lg border border-indigo-500/30">
                  <h3 className="text-2xl font-bold text-white mb-2">3-Month Intensive</h3>
                  <p className="text-amber-500 text-lg font-semibold mb-6">$4,500</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-3 mb-8">
                    <li>6 bi-weekly 60-minute 1:1 sessions</li>
                    <li>Personalized development plan</li>
                    <li>Email support between sessions</li>
                    <li>Curated resources and frameworks</li>
                    <li>Optional 30-minute emergency calls</li>
                  </ul>
                  <div className="mt-auto">
                    <a href="#" className="block text-center w-full py-3 px-4 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                      Apply Now
                    </a>
                  </div>
                </div>
                
                <div className="bg-slate-900/80 p-8 rounded-lg border border-amber-500/30">
                  <h3 className="text-2xl font-bold text-white mb-2">6-Month Transformation</h3>
                  <p className="text-amber-500 text-lg font-semibold mb-6">$7,800</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-3 mb-8">
                    <li>12 bi-weekly 60-minute 1:1 sessions</li>
                    <li>Comprehensive skills assessment</li>
                    <li>Detailed growth roadmap</li>
                    <li>Unlimited email/Slack support</li>
                    <li>Access to leadership tools library</li>
                    <li>Monthly progress review and adjustment</li>
                  </ul>
                  <div className="mt-auto">
                    <a href="#" className="block text-center w-full py-3 px-4 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700 transition">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-center text-slate-400 mt-8">
                Custom packages available for teams and organizations. 
                <a href="#" className="text-amber-500 hover:text-amber-400 ml-2">Contact us</a> to discuss.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Accelerate Your Leadership Journey?
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300 mb-8">
                Schedule a free 30-minute consultation to discuss your goals and see if our mentoring program is the right fit for your needs.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-amber-500 px-8 py-3 text-lg font-semibold text-slate-900 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                >
                  Book Your Consultation
                </a>
                <a href="/#connect" className="text-lg font-semibold leading-6 text-white hover:text-amber-300">
                  Learn more <span aria-hidden="true">→</span>
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