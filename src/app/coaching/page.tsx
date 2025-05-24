import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Leadership Coaching | Real Handy",
  description: "Structured coaching for tech executives and teams. Transform your organization with expert guidance and actionable frameworks.",
};

export default function CoachingPage() {
  return (
    <>
      <Header 
        title="coaching" 
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
                Tech Organization Coaching
              </h1>
              <div className="h-2 w-40 bg-amber-500 mx-auto rounded-full mb-8"></div>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                Transform your technology organization with structured coaching that creates lasting behavioral change and measurable results.
              </p>
            </div>
          </div>
        </div>

        {/* Coaching vs. Mentoring */}
        <section className="relative bg-slate-800/70 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
                Coaching vs. Mentoring
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-slate-900/60 p-8 rounded-lg border-l-4 border-amber-500">
                  <h3 className="text-xl font-semibold text-amber-500 mb-4">Our Coaching Approach</h3>
                  <p className="text-slate-300 mb-4">
                    Coaching provides structure, accountability, and frameworks to solve specific organizational challenges. We focus on:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Organizational development & team dynamics</li>
                    <li>Process improvement & operational excellence</li>
                    <li>Metrics-driven transformation programs</li>
                    <li>Aligning multiple stakeholders toward common goals</li>
                  </ul>
                </div>
                
                <div className="bg-slate-900/60 p-8 rounded-lg border-l-4 border-indigo-500">
                  <h3 className="text-xl font-semibold text-indigo-500 mb-4">Our Mentoring Approach</h3>
                  <p className="text-slate-300 mb-4">
                    Mentoring focuses on individual growth and development as a leader. We emphasize:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Personal leadership development</li>
                    <li>Transferring knowledge & best practices</li>
                    <li>Career advancement strategies</li>
                    <li>Decision-making support for complex situations</li>
                  </ul>
                  <div className="mt-6">
                    <a href="/mentoring" className="text-indigo-400 hover:text-indigo-300">
                      Learn about our mentoring program →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Programs Overview */}
        <section className="relative bg-indigo-900/40 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Our Coaching Programs
              </h2>
              <p className="text-slate-300 text-lg">
                We offer specialized coaching tailored to both individuals and teams, addressing unique challenges at every level of technical leadership.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Individual Coaching Card */}
              <div className="bg-slate-800/60 p-8 rounded-lg border border-amber-500/30 flex flex-col">
                <div className="h-16 w-16 bg-amber-600/30 rounded-full mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Individual Coaching</h3>
                <p className="text-slate-300 mb-6">
                  Personalized development for technical leaders at every career stage, from emerging managers to senior technical leaders.
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-8">
                  <li>Emerging Leaders Program</li>
                  <li>Staff+ Engineer Excellence</li>
                  <li>1:1 executive coaching</li>
                  <li>Career transition support</li>
                </ul>
                <div className="mt-auto">
                  <a href="#individual-coaching" className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium">
                    <span>Explore Individual Coaching</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Team Coaching Card */}
              <div className="bg-slate-800/60 p-8 rounded-lg border border-indigo-500/30 flex flex-col">
                <div className="h-16 w-16 bg-indigo-600/30 rounded-full mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Team & Organizational Coaching</h3>
                <p className="text-slate-300 mb-6">
                  Comprehensive programs for leadership teams and departments focused on organizational effectiveness and transformation.
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-8">
                  <li>Leadership team alignment</li>
                  <li>Department transformation</li>
                  <li>Engineering effectiveness</li>
                  <li>Organizational design</li>
                </ul>
                <div className="mt-auto">
                  <a href="#team-coaching" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium">
                    <span>Explore Team Coaching</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Coaching Section */}
        <section id="individual-coaching" className="relative bg-slate-800/70 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-8">
                Individual Coaching for Technical Leaders
              </h2>
              <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
                Personalized coaching for technical professionals at every stage of their leadership journey.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-indigo-900/30 p-8 rounded-lg border border-indigo-500/30">
                  <div className="h-16 w-16 bg-indigo-600/40 rounded-lg mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-200">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Emerging Leaders Program</h3>
                  <p className="text-slate-300 mb-4">
                    Tailored for high-potential engineers transitioning into their first leadership roles.
                    This program bridges the technical-to-management gap with focused skill development.
                  </p>
                  <h4 className="text-amber-500 font-semibold mb-2">Perfect for:</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 mb-6">
                    <li>New Engineering Managers</li>
                    <li>Team Leads & Tech Leads</li>
                    <li>Recently promoted leaders</li>
                    <li>High-potential ICs preparing for leadership</li>
                  </ul>
                  <h4 className="text-amber-500 font-semibold mb-2">Focus areas include:</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    <li>People management fundamentals</li>
                    <li>Effective technical communication</li>
                    <li>Balancing coding and management</li>
                    <li>Building influence beyond authority</li>
                    <li>Managing former peers</li>
                  </ul>
                </div>
                
                <div className="bg-amber-900/30 p-8 rounded-lg border border-amber-500/30">
                  <div className="h-16 w-16 bg-amber-600/40 rounded-lg mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-200">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Staff+ Engineer Excellence</h3>
                  <p className="text-slate-300 mb-4">
                    Specialized coaching for senior technical contributors navigating the unique challenges of 
                    staff-level positions where influence and technical leadership are paramount.
                  </p>
                  <h4 className="text-amber-500 font-semibold mb-2">Perfect for:</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 mb-6">
                    <li>Staff Engineers</li>
                    <li>Principal Engineers</li>
                    <li>Architects</li>
                    <li>Technical Fellows</li>
                  </ul>
                  <h4 className="text-amber-500 font-semibold mb-2">Focus areas include:</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    <li>Expanding technical scope and influence</li>
                    <li>Strategic technical communication</li>
                    <li>Leading without direct authority</li>
                    <li>Technical vision development</li>
                    <li>Mentoring and growing other engineers</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-16 bg-slate-900/60 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Individual Coaching Process</h3>
                <p className="text-slate-300 mb-6">
                  Our individual coaching programs blend personalized 1:1 sessions with practical application and measurement:
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="h-12 w-12 bg-indigo-600/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="text-amber-400 font-semibold mb-2">Assessment & Planning</h4>
                    <p className="text-slate-300 text-sm">Initial 360° feedback, skills assessment, and personalized development roadmap</p>
                  </div>
                  <div>
                    <div className="h-12 w-12 bg-indigo-600/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="text-amber-400 font-semibold mb-2">Guided Implementation</h4>
                    <p className="text-slate-300 text-sm">Bi-weekly coaching sessions, practical tools, and real-world application</p>
                  </div>
                  <div>
                    <div className="h-12 w-12 bg-indigo-600/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="text-amber-400 font-semibold mb-2">Measurement & Refinement</h4>
                    <p className="text-slate-300 text-sm">Progress tracking, feedback collection, and approach adjustments</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <a href="#individual-packages" className="inline-flex items-center text-amber-400 hover:text-amber-300">
                    <span>Learn more about our individual coaching packages</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div id="individual-packages" className="mt-16 grid md:grid-cols-2 gap-8">
                <div className="bg-slate-900/80 p-8 rounded-lg border border-indigo-500/30">
                  <h3 className="text-xl font-bold text-white mb-2">Career Accelerator</h3>
                  <p className="text-amber-500 font-semibold mb-4">3-month program</p>
                  <p className="text-slate-300 mb-4">
                    Intensive coaching focused on developing specific leadership capabilities and addressing immediate challenges.
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-8">
                    <li>Initial skills assessment</li>
                    <li>6 bi-weekly coaching sessions</li>
                    <li>Customized development plan</li>
                    <li>Practical leadership tools</li>
                    <li>Progress measurement</li>
                  </ul>
                  <div className="mt-auto">
                    <a href="#" className="block text-center w-full py-3 px-4 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                      Learn More
                    </a>
                  </div>
                </div>
                
                <div className="bg-slate-900/80 p-8 rounded-lg border border-amber-500/30">
                  <h3 className="text-xl font-bold text-white mb-2">Leadership Transformation</h3>
                  <p className="text-amber-500 font-semibold mb-4">6-month program</p>
                  <p className="text-slate-300 mb-4">
                    Comprehensive coaching for sustained leadership development and lasting behavioral change.
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-8">
                    <li>360° leadership assessment</li>
                    <li>12 bi-weekly coaching sessions</li>
                    <li>Customized leadership framework</li>
                    <li>Stakeholder feedback integration</li>
                    <li>Leadership style development</li>
                    <li>Long-term growth roadmap</li>
                  </ul>
                  <div className="mt-auto">
                    <a href="#" className="block text-center w-full py-3 px-4 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700 transition">
                      Request Information
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Coaching Section */}
        <section id="team-coaching" className="relative bg-indigo-800/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-8">
                Team & Organizational Coaching
              </h2>
              <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
                Comprehensive coaching programs that transform technology teams and organizations through structured change and measurable improvements.
              </p>
              
              <div className="bg-slate-900/60 p-8 rounded-lg mb-16">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Who Our Team Coaching Serves</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-slate-800/60 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-amber-500 mb-4">Tech Leadership Teams</h3>
                    <p className="text-slate-300">
                      Create alignment between CTO, VP Engineering, Product, and other technology leaders. Develop shared vision and cohesive operating models.
                    </p>
                  </div>
                  
                  <div className="bg-slate-800/60 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-amber-500 mb-4">Engineering Departments</h3>
                    <p className="text-slate-300">
                      Improve delivery capability, reduce technical debt, and establish processes that scale with your organization&apos;s growth.
                    </p>
                  </div>
                  
                  <div className="bg-slate-800/60 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-amber-500 mb-4">Companies in Transition</h3>
                    <p className="text-slate-300">
                      Navigate acquisitions, rapid growth, tech modernization, or leadership changes with clear frameworks and implementation plans.
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Team Coaching Process</h3>
              <div className="space-y-16 mb-16">
                <div className="relative">
                  <div className="absolute left-8 top-0 h-full w-0.5 bg-amber-500/30" aria-hidden="true"></div>
                  <div className="relative flex flex-col md:flex-row gap-6">
                    <div className="w-16 h-16 rounded-full bg-amber-500/40 flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <div className="md:pt-3">
                      <h3 className="text-xl font-semibold text-white mb-4">Organizational Assessment</h3>
                      <p className="text-slate-300 mb-4">
                        We begin with a thorough analysis of your current state, including:
                      </p>
                      <ul className="list-disc list-inside text-slate-300 space-y-2">
                        <li>Stakeholder interviews across all levels</li>
                        <li>Process and documentation review</li>
                        <li>Current performance metrics evaluation</li>
                        <li>Alignment with business objectives assessment</li>
                      </ul>
                      <p className="text-slate-300 mt-4">
                        This phase results in a detailed diagnostic report that identifies key opportunity areas.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-8 top-0 h-full w-0.5 bg-amber-500/30" aria-hidden="true"></div>
                  <div className="relative flex flex-col md:flex-row gap-6">
                    <div className="w-16 h-16 rounded-full bg-amber-500/40 flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <div className="md:pt-3">
                      <h3 className="text-xl font-semibold text-white mb-4">Tailored Transformation Plan</h3>
                      <p className="text-slate-300 mb-4">
                        Based on assessment findings, we develop a customized coaching plan that includes:
                      </p>
                      <ul className="list-disc list-inside text-slate-300 space-y-2">
                        <li>Specific organizational goals and outcomes</li>
                        <li>Clear metrics to measure progress</li>
                        <li>Timeline with key milestones</li>
                        <li>Resource requirements and stakeholder responsibilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-8 top-0 h-full w-0.5 bg-amber-500/30" aria-hidden="true"></div>
                  <div className="relative flex flex-col md:flex-row gap-6">
                    <div className="w-16 h-16 rounded-full bg-amber-500/40 flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <div className="md:pt-3">
                      <h3 className="text-xl font-semibold text-white mb-4">Implementation & Coaching</h3>
                      <p className="text-slate-300 mb-4">
                        Active coaching and support throughout implementation:
                      </p>
                      <ul className="list-disc list-inside text-slate-300 space-y-2">
                        <li>Regular leadership team coaching sessions</li>
                        <li>Workshops to build new capabilities</li>
                        <li>Process development and documentation</li>
                        <li>Change management support</li>
                        <li>Real-time problem-solving as challenges arise</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-16 h-16 rounded-full bg-amber-500/40 flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <div className="md:pt-3">
                      <h3 className="text-xl font-semibold text-white mb-4">Measurement & Sustainability</h3>
                      <p className="text-slate-300 mb-4">
                        Ensuring lasting change and measurable results:
                      </p>
                      <ul className="list-disc list-inside text-slate-300 space-y-2">
                        <li>Regular progress reviews against defined metrics</li>
                        <li>Knowledge transfer to internal champions</li>
                        <li>Process refinement based on results</li>
                        <li>Development of maintenance plans</li>
                        <li>Final assessment and recommendations for continued growth</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Focus Areas for Team Coaching</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-slate-900/60 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-500 mb-4">Engineering Effectiveness</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Delivery process optimization</li>
                    <li>Technical debt management strategies</li>
                    <li>Quality and testing frameworks</li>
                    <li>Developer experience improvement</li>
                  </ul>
                </div>
                
                <div className="bg-slate-900/60 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-500 mb-4">Organizational Design</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Team structure optimization</li>
                    <li>Roles and responsibilities clarification</li>
                    <li>Communication patterns and practices</li>
                    <li>Career ladder development</li>
                  </ul>
                </div>
                
                <div className="bg-slate-900/60 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-500 mb-4">Leadership Alignment</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Vision and strategy development</li>
                    <li>Cross-functional collaboration models</li>
                    <li>Decision-making frameworks</li>
                    <li>Stakeholder management approaches</li>
                  </ul>
                </div>
                
                <div className="bg-slate-900/60 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-500 mb-4">Technology Strategy</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Architecture evolution planning</li>
                    <li>Technology selection frameworks</li>
                    <li>Build vs. buy decision processes</li>
                    <li>Technical roadmap development</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-8 text-center">Team Coaching Packages</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-900/80 p-8 rounded-lg border border-indigo-500/30">
                  <h3 className="text-xl font-bold text-white mb-2">Strategic Assessment</h3>
                  <p className="text-amber-500 text-lg font-semibold mb-6">Starting at $15,000</p>
                  <p className="text-slate-300 mb-4">
                    A comprehensive 4-week diagnostic of your technology organization that identifies key opportunities, challenges, and recommendations.
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-3 mb-8">
                    <li>Stakeholder interviews (up to 10)</li>
                    <li>Process and documentation review</li>
                    <li>Current state analysis</li>
                    <li>Detailed findings report</li>
                    <li>Prioritized recommendations</li>
                    <li>Executive presentation</li>
                  </ul>
                  <div className="mt-auto">
                    <a href="#" className="block text-center w-full py-3 px-4 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                      Learn More
                    </a>
                  </div>
                </div>
                
                <div className="bg-slate-900/80 p-8 rounded-lg border border-amber-500/30">
                  <h3 className="text-xl font-bold text-white mb-2">Transformation Program</h3>
                  <p className="text-amber-500 text-lg font-semibold mb-6">Custom Pricing</p>
                  <p className="text-slate-300 mb-4">
                    A tailored 3-6 month coaching program designed to address specific organizational challenges and drive measurable improvement.
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-3 mb-8">
                    <li>Comprehensive organizational assessment</li>
                    <li>Custom transformation roadmap</li>
                    <li>Bi-weekly leadership team coaching</li>
                    <li>Process development workshops</li>
                    <li>Implementation support</li>
                    <li>Progress measurement and reporting</li>
                    <li>Knowledge transfer to internal champions</li>
                  </ul>
                  <div className="mt-auto">
                    <a href="#" className="block text-center w-full py-3 px-4 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700 transition">
                      Request Proposal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="relative bg-slate-800/60 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
                Success Stories
              </h2>
              <div className="grid gap-12">
                <div className="bg-slate-900/60 p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <div className="h-20 w-20 bg-indigo-600/30 rounded-lg flex-shrink-0"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Fintech Scale-Up</h3>
                      <p className="text-amber-500">Engineering Effectiveness Transformation</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-white">Challenge:</strong> A fintech company with 40+ engineers was struggling with missed deadlines, quality issues, and increasing technical debt as they scaled.
                  </p>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-white">Approach:</strong> Three-month coaching program focused on delivery process redesign, quality gates implementation, and technical debt measurement framework.
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-white">Results:</strong> 35% reduction in deployment failures, 42% increase in on-time delivery, and clear visibility into technical debt with dedicated remediation sprints.
                  </p>
                </div>
                
                <div className="bg-slate-900/60 p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <div className="h-20 w-20 bg-amber-600/30 rounded-lg flex-shrink-0"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Enterprise SaaS Provider</h3>
                      <p className="text-amber-500">Leadership Team Alignment</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-white">Challenge:</strong> Following an acquisition, the merged technology leadership team struggled with conflicting priorities, different working styles, and unclear decision-making processes.
                  </p>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-white">Approach:</strong> Six-month coaching program with the leadership team, focusing on operating model development, communication frameworks, and collaborative strategic planning.
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-white">Results:</strong> Unified technology roadmap, clear governance structure, 60% reduction in escalated conflicts, and successful integration of the acquired engineering team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Tech Organization?
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300 mb-8">
                Schedule a free consultation to discuss your challenges and how our coaching programs can help your team achieve breakthrough results.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-amber-500 px-8 py-3 text-lg font-semibold text-slate-900 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                >
                  Book a Strategy Call
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