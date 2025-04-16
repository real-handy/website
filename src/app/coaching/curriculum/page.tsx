import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Individual Coaching Curriculum | Real Handy",
  description: "Structured six-session coaching curriculum for technical leaders with actionable homework assignments between sessions.",
};

export default function CoachingCurriculumPage() {
  return (
    <>
      <Header 
        title="coaching curriculum" 
        navigation={[
          { label: "home", href: '/' },
          { label: "coaching", href: '/coaching' },
          { label: "mentoring", href: '/mentoring' },
          { label: "connect", href: '/#connect' },
        ]}
      />
      <main className="bg-slate-900 bg-center bg-repeat bg-[url('/bg.svg')]">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden pt-14">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8">
                Individual Coaching Curriculum
              </h1>
              <div className="h-2 w-40 bg-amber-500 mx-auto rounded-full mb-8"></div>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                Our structured six-session program designed to transform technical talent into effective leaders through focused learning and practical application.
              </p>
            </div>
          </div>
        </div>

        {/* Curriculum Overview */}
        <section className="relative bg-slate-800/70 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-8">
                Program Structure
              </h2>
              <p className="text-center text-slate-300 mb-12">
                Our coaching program alternates between in-depth coaching sessions and applied homework assignments, creating a rhythm of learning, reflection, and practical application.
              </p>
              
              <div className="relative py-8">
                {/* Timeline connector */}
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-amber-500/30 -translate-x-1/2" aria-hidden="true"></div>
                
                {/* Timeline sequence */}
                <div className="space-y-16">
                  <div className="relative flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/40 flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                  </div>
                  
                  <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="md:w-5/12 md:text-right space-y-4 md:pr-16">
                      <div className="bg-slate-900/60 p-6 rounded-lg border-r-4 border-indigo-500 md:ml-auto">
                        <h3 className="text-xl font-semibold text-indigo-400 mb-2">Session 1</h3>
                        <h4 className="text-white font-medium mb-3">Leadership Foundations & Assessment</h4>
                        <p className="text-slate-300 text-sm">
                          Initial assessment of current leadership strengths, growth areas, and personal style. We'll establish your leadership vision and identify key development goals.
                        </p>
                      </div>
                    </div>
                    <div className="w-0.5 h-10 bg-amber-500/30 md:hidden"></div>
                    <div className="md:w-5/12 space-y-4 md:pl-16">
                      <div className="bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500">
                        <h3 className="text-xl font-semibold text-amber-400 mb-2">Homework 1</h3>
                        <h4 className="text-white font-medium mb-3">Leadership Vision & 360° Feedback</h4>
                        <p className="text-slate-300 text-sm">
                          Collect anonymous 360° feedback from peers, reports, and managers. Draft your leadership vision statement and identify three key strengths to leverage and three growth areas to address.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/40 flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                  </div>
                  
                  <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="md:w-5/12 md:text-right space-y-4 md:pr-16">
                      <div className="bg-slate-900/60 p-6 rounded-lg border-r-4 border-indigo-500 md:ml-auto">
                        <h3 className="text-xl font-semibold text-indigo-400 mb-2">Session 2</h3>
                        <h4 className="text-white font-medium mb-3">Communication & Influence</h4>
                        <p className="text-slate-300 text-sm">
                          Develop techniques for effective technical and non-technical communication. Learn frameworks for building influence across your organization regardless of your role.
                        </p>
                      </div>
                    </div>
                    <div className="w-0.5 h-10 bg-amber-500/30 md:hidden"></div>
                    <div className="md:w-5/12 space-y-4 md:pl-16">
                      <div className="bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500">
                        <h3 className="text-xl font-semibold text-amber-400 mb-2">Homework 2</h3>
                        <h4 className="text-white font-medium mb-3">Influence Mapping & Communication Practice</h4>
                        <p className="text-slate-300 text-sm">
                          Create an influence map of key stakeholders. Prepare and deliver a technical concept to a non-technical audience, recording it for review. Practice asking powerful questions in three meetings.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/40 flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                  </div>
                  
                  <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="md:w-5/12 md:text-right space-y-4 md:pr-16">
                      <div className="bg-slate-900/60 p-6 rounded-lg border-r-4 border-indigo-500 md:ml-auto">
                        <h3 className="text-xl font-semibold text-indigo-400 mb-2">Session 3</h3>
                        <h4 className="text-white font-medium mb-3">Decision-Making & Prioritization</h4>
                        <p className="text-slate-300 text-sm">
                          Master frameworks for technical and organizational decision-making. Learn how to balance competing priorities and make tough calls with incomplete information.
                        </p>
                      </div>
                    </div>
                    <div className="w-0.5 h-10 bg-amber-500/30 md:hidden"></div>
                    <div className="md:w-5/12 space-y-4 md:pl-16">
                      <div className="bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500">
                        <h3 className="text-xl font-semibold text-amber-400 mb-2">Homework 3</h3>
                        <h4 className="text-white font-medium mb-3">Decision Framework Application</h4>
                        <p className="text-slate-300 text-sm">
                          Document a significant decision using a structured decision-making framework. Create a prioritization matrix for your current projects/responsibilities. Practice saying "no" constructively.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/40 flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                  </div>
                  
                  <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="md:w-5/12 md:text-right space-y-4 md:pr-16">
                      <div className="bg-slate-900/60 p-6 rounded-lg border-r-4 border-indigo-500 md:ml-auto">
                        <h3 className="text-xl font-semibold text-indigo-400 mb-2">Session 4</h3>
                        <h4 className="text-white font-medium mb-3">Team Development & Delegation</h4>
                        <p className="text-slate-300 text-sm">
                          Learn strategies for building high-performing teams. Master the art of effective delegation to grow your team while creating space for your strategic work.
                        </p>
                      </div>
                    </div>
                    <div className="w-0.5 h-10 bg-amber-500/30 md:hidden"></div>
                    <div className="md:w-5/12 space-y-4 md:pl-16">
                      <div className="bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500">
                        <h3 className="text-xl font-semibold text-amber-400 mb-2">Homework 4</h3>
                        <h4 className="text-white font-medium mb-3">Delegation & Team Growth Plan</h4>
                        <p className="text-slate-300 text-sm">
                          Identify three responsibilities to delegate using the delegation worksheet. Draft development plans for 2-3 team members. Create a team skill matrix to identify growth opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/40 flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-2xl font-bold text-white">5</span>
                    </div>
                  </div>
                  
                  <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="md:w-5/12 md:text-right space-y-4 md:pr-16">
                      <div className="bg-slate-900/60 p-6 rounded-lg border-r-4 border-indigo-500 md:ml-auto">
                        <h3 className="text-xl font-semibold text-indigo-400 mb-2">Session 5</h3>
                        <h4 className="text-white font-medium mb-3">Strategic Thinking & Vision</h4>
                        <p className="text-slate-300 text-sm">
                          Develop your ability to think strategically and create compelling technical visions. Learn to connect technology initiatives to business outcomes and stakeholder priorities.
                        </p>
                      </div>
                    </div>
                    <div className="w-0.5 h-10 bg-amber-500/30 md:hidden"></div>
                    <div className="md:w-5/12 space-y-4 md:pl-16">
                      <div className="bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500">
                        <h3 className="text-xl font-semibold text-amber-400 mb-2">Homework 5</h3>
                        <h4 className="text-white font-medium mb-3">Vision Creation & Roadmapping</h4>
                        <p className="text-slate-300 text-sm">
                          Draft a 12-month vision for your team or technology area. Create a strategic roadmap that aligns technical initiatives with business goals. Prepare a pitch for a key initiative.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/40 flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-2xl font-bold text-white">6</span>
                    </div>
                  </div>
                  
                  <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="md:w-5/12 md:text-right space-y-4 md:pr-16">
                      <div className="bg-slate-900/60 p-6 rounded-lg border-r-4 border-indigo-500 md:ml-auto">
                        <h3 className="text-xl font-semibold text-indigo-400 mb-2">Session 6</h3>
                        <h4 className="text-white font-medium mb-3">Ongoing Development & Next Steps</h4>
                        <p className="text-slate-300 text-sm">
                          Review progress against initial assessment. Create a sustainable self-development plan. Establish success metrics and accountability mechanisms for continued growth.
                        </p>
                      </div>
                    </div>
                    <div className="w-0.5 h-10 bg-amber-500/30 md:hidden"></div>
                    <div className="md:w-5/12 space-y-4 md:pl-16">
                      <div className="bg-slate-900/60 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-amber-400 mb-2">Program Completion</h3>
                        <h4 className="text-white font-medium mb-3">Leadership Development Portfolio</h4>
                        <p className="text-slate-300 text-sm">
                          Graduate with a comprehensive leadership development portfolio, including your vision statement, influence map, decision frameworks, team development plans, and strategic roadmap.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Session Details */}
        <section className="relative bg-indigo-900/40 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
                Session Methodology
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-900/60 p-6 rounded-lg">
                  <div className="h-14 w-14 bg-amber-500/30 rounded-lg mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Assessment-Based</h3>
                  <p className="text-slate-300 text-sm">
                    Each coaching journey begins with a thorough assessment of current skills, leadership style, and growth opportunities to ensure a tailored approach.
                  </p>
                </div>
                
                <div className="bg-slate-900/60 p-6 rounded-lg">
                  <div className="h-14 w-14 bg-amber-500/30 rounded-lg mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Interactive Dialogue</h3>
                  <p className="text-slate-300 text-sm">
                    Sessions feature a balance of instruction, questioning, reflection, and practice, creating a dynamic learning experience that adapts to your needs.
                  </p>
                </div>
                
                <div className="bg-slate-900/60 p-6 rounded-lg">
                  <div className="h-14 w-14 bg-amber-500/30 rounded-lg mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Results-Focused</h3>
                  <p className="text-slate-300 text-sm">
                    Each session builds toward specific, measurable outcomes that directly impact your leadership effectiveness and career trajectory.
                  </p>
                </div>
              </div>
              
              <div className="mt-16 bg-slate-900/60 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-6 text-center">Session Structure</h3>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/4">
                      <h4 className="text-amber-400 font-semibold">Progress Check</h4>
                      <p className="text-slate-400 text-sm">15 minutes</p>
                    </div>
                    <div className="w-full md:w-3/4">
                      <p className="text-slate-300">
                        Review of previous homework assignments, challenges encountered, and learnings. Celebration of wins and troubleshooting of obstacles.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/4">
                      <h4 className="text-amber-400 font-semibold">Concept Introduction</h4>
                      <p className="text-slate-400 text-sm">20 minutes</p>
                    </div>
                    <div className="w-full md:w-3/4">
                      <p className="text-slate-300">
                        Presentation of core leadership concepts, frameworks, and techniques tailored to your specific role and challenges.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/4">
                      <h4 className="text-amber-400 font-semibold">Application Discussion</h4>
                      <p className="text-slate-400 text-sm">30 minutes</p>
                    </div>
                    <div className="w-full md:w-3/4">
                      <p className="text-slate-300">
                        Interactive exploration of how to apply these concepts to your specific situation, with role-playing, scenario analysis, and tactical planning.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/4">
                      <h4 className="text-amber-400 font-semibold">Action Planning</h4>
                      <p className="text-slate-400 text-sm">25 minutes</p>
                    </div>
                    <div className="w-full md:w-3/4">
                      <p className="text-slate-300">
                        Development of specific action items and homework assignments that will translate learning into practical leadership growth.
                      </p>
                    </div>
                  </div>
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
                Ready to Begin Your Leadership Transformation?
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300 mb-8">
                Schedule a free 30-minute consultation to discuss how our coaching curriculum can be tailored to your specific leadership journey.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-amber-500 px-8 py-3 text-lg font-semibold text-slate-900 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                >
                  Book Your Consultation
                </a>
                <a href="/coaching" className="text-lg font-semibold leading-6 text-white hover:text-amber-300">
                  Back to Coaching <span aria-hidden="true">→</span>
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