import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Question Everything | Real Handy",
  description: "Mastering the art of asking the right questions as a technical leader.",
};

export default function QuestionEverythingPage() {
  return (
    <>
      <Header 
        title="question everything" 
        navigation={[
          { label: "home", href: '/' },
          { label: "approach", href: '#approach' },
          { label: "examples", href: '#examples' },
          { label: "benefits", href: '#benefits' },
        ]}
      />
      <main className="bg-slate-900 bg-center bg-repeat bg-[url('/bg.svg')]">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden pt-14">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8">
                Question Everything
              </h1>
              <div className="h-2 w-40 bg-teal-500 mx-auto rounded-full mb-8"></div>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                The most powerful tool in a technical leader&apos;s arsenal is the right question at the right time
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="relative bg-slate-800/70 py-16" id="approach">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The Power of Effective Questioning
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                As technical leaders, our instinct is often to provide answers. Yet the most impactful leaders know that asking the right questions—at the right time, in the right way—is more powerful than providing solutions. It unlocks collective intelligence, builds ownership, and leads to better outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Questioning Mindset Sections */}
        <section className="relative bg-slate-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">
                Developing a Questioning Mindset
              </h2>
              
              <div className="space-y-16 mt-12">
                {questioningMindset.map((item) => (
                  <div key={item.title} className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-teal-500/30 flex items-center justify-center">
                      <span className="text-2xl text-teal-300">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-lg text-slate-300 mb-4">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Question Types Section */}
        <section className="relative bg-teal-900/30 py-24" id="examples">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Types of Questions That Drive Results
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Different situations call for different types of questions. Master these categories to unlock insight and drive action.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {questionTypes.map((type) => (
                <div key={type.title} className="bg-slate-800/50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-teal-300 mb-4">{type.title}</h3>
                  <p className="text-slate-300 mb-6">{type.description}</p>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Example Questions:</h4>
                    <ul className="space-y-2 text-slate-300">
                      {type.examples.map((example, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-teal-400 flex-shrink-0">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">When to Use:</h4>
                    <p className="text-slate-300">{type.whenToUse}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real-world Examples */}
        <section className="relative bg-slate-800/70 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Real-world Examples
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                See how effective questioning transforms common technical leadership scenarios.
              </p>
            </div>

            <div className="space-y-12 max-w-4xl mx-auto">
              {realWorldExamples.map((example, i) => (
                <div key={i} className="bg-slate-800/50 rounded-lg overflow-hidden">
                  <div className="bg-teal-900/50 p-6">
                    <h3 className="text-xl font-bold text-white">{example.scenario}</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-teal-300 mb-2">Ineffective Approach:</h4>
                    <p className="text-slate-300 mb-6">{example.ineffective}</p>
                    
                    <h4 className="font-semibold text-teal-300 mb-2">Effective Questioning Approach:</h4>
                    <p className="text-slate-300 mb-4">{example.effective.approach}</p>
                    
                    <div className="bg-slate-700/50 p-4 rounded-lg mt-4">
                      <h5 className="font-semibold text-white mb-2">Key Questions:</h5>
                      <ul className="space-y-2 text-slate-300">
                        {example.effective.questions.map((question, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-teal-400 flex-shrink-0">→</span>
                            <span>{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/50 p-4 rounded-lg mt-4">
                      <h5 className="font-semibold text-white mb-2">Outcome:</h5>
                      <p className="text-slate-300">{example.effective.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative bg-teal-900/30 py-24" id="benefits">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The Impact of a Questioning Culture
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                When technical leaders master the art of questioning, entire organizations transform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-slate-800/50 rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-teal-500/30 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-teal-300">{benefit.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="relative bg-slate-800/60 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
                How We Help Technical Leaders Master the Art of Questioning
              </h2>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {howWeHelp.map((item) => (
                  <div key={item.title} className="bg-slate-800/50 p-6 rounded-lg text-left">
                    <h3 className="text-xl font-bold text-teal-300 mb-4">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16">
                <a href="/#conversations" className="inline-block rounded-md bg-teal-500 px-8 py-3 text-lg font-semibold text-slate-900 shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
                Ready to Transform Your Approach to Technical Leadership?
              </h2>
              <p className="text-lg leading-8 text-slate-300 mb-12">
                Mastering the art of questioning doesn&apos;t happen overnight. It&apos;s a practice that evolves through conscious application and reflection. We&apos;re here to guide you on that journey.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="/#roles" className="group relative overflow-hidden rounded-lg bg-slate-800 p-6 hover:bg-slate-700 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Explore Our Approach</h3>
                  <p className="text-slate-300">Discover how we work with technical leaders to build transformative skills.</p>
                  <div className="mt-4 text-teal-400 group-hover:text-teal-300">Learn more →</div>
                </a>
                
                <a href="/smart-intent" className="group relative overflow-hidden rounded-lg bg-slate-800 p-6 hover:bg-slate-700 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Smart Intent Framework</h3>
                  <p className="text-slate-300">Explore our leadership framework for navigating complex decisions.</p>
                  <div className="mt-4 text-teal-400 group-hover:text-teal-300">Discover →</div>
                </a>
                
                <a href="/#connect" className="group relative overflow-hidden rounded-lg bg-teal-800 p-6 hover:bg-teal-700 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Start a Conversation</h3>
                  <p className="text-slate-200">Ready to take the next step? Let&apos;s discuss how we can help.</p>
                  <div className="mt-4 text-white group-hover:text-slate-200">Connect now →</div>
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

// Data arrays for the page content

const questioningMindset = [
  {
    icon: "🔄",
    title: "Shift from Solving to Enabling",
    description: "Technical leaders often feel pressure to have all the answers. By shifting focus from providing solutions to asking thoughtful questions, you activate the collective intelligence of your team and build their capability to solve problems."
  },
  {
    icon: "💭",
    title: "Curiosity Before Judgment",
    description: "When faced with ideas or approaches that seem flawed, resist the urge to immediately critique. Instead, get curious about the thinking behind them. Questions like 'What led you to this approach?' yield more insight than immediate evaluation."
  },
  {
    icon: "🧠",
    title: "Psychological Safety First",
    description: "Questions can feel threatening if team members fear judgment. Establish clear norms that questions are meant to explore and understand, not to test or criticize. Your tone, body language, and follow-up response are as important as the question itself."
  },
  {
    icon: "⏱️",
    title: "Create Space for Reflection",
    description: "In our action-oriented tech culture, we rarely pause to reflect. Powerful questions create that pause, allowing deeper thinking to emerge. Don&apos;t rush to fill silence after asking an important question."
  },
  {
    icon: "🎯",
    title: "Question with Purpose",
    description: "Different types of questions serve different purposes. Clarifying questions build understanding, while perspective-shifting questions challenge assumptions. Be intentional about which type of question will best serve the moment."
  }
];

const questionTypes = [
  {
    title: "Clarifying Questions",
    description: "These questions help establish a shared understanding of the current situation or problem.",
    examples: [
      "What data do we have that supports this conclusion?",
      "Can you help me understand the core problem we&apos;re trying to solve?",
      "How does this approach align with our architectural principles?"
    ],
    whenToUse: "Use early in discussions to ensure everyone has a common foundation before proceeding to solutions."
  },
  {
    title: "Assumption-Testing Questions",
    description: "These questions surface and challenge the beliefs and assumptions that might be limiting thinking.",
    examples: [
      "What are we assuming about user behavior that might not be true?",
      "If we knew that X wasn&apos;t a constraint, what approach might we take?",
      "Are we overestimating the difficulty of a different approach?"
    ],
    whenToUse: "Use when the team seems locked into a particular perspective or when solutions seem too narrow."
  },
  {
    title: "Implication Questions",
    description: "These questions explore the potential consequences and ripple effects of decisions or approaches.",
    examples: [
      "How might this solution affect our ability to scale in the future?",
      "What parts of our system will be most impacted by this change?",
      "If we implement this, what becomes easier or harder for other teams?"
    ],
    whenToUse: "Use when evaluating solutions to ensure thorough consideration of second-order effects and longer-term impacts."
  },
  {
    title: "Perspective-Shifting Questions",
    description: "These questions help view the situation from different angles or stakeholder viewpoints.",
    examples: [
      "How would our users describe this problem?",
      "If we were a smaller/larger company, would we approach this differently?",
      "What would our most junior engineer find challenging about this approach?"
    ],
    whenToUse: "Use when the team needs to break out of limited thinking patterns or consider impacts beyond their immediate context."
  },
  {
    title: "Decision-Quality Questions",
    description: "These questions assess whether a decision is being made with appropriate rigor and consideration.",
    examples: [
      "What would cause us to revisit this decision?",
      "How will we know if this approach is successful?",
      "What information would make us more confident in this decision?"
    ],
    whenToUse: "Use when approaching key decision points to ensure appropriate deliberation and to establish clear success criteria."
  },
  {
    title: "Action-Oriented Questions",
    description: "These questions drive clarity on next steps and ownership.",
    examples: [
      "What specific actions would make the most impact in the next week?",
      "Who should be responsible for each part of this solution?",
      "What dependencies need to be resolved before we can proceed?"
    ],
    whenToUse: "Use toward the end of discussions to ensure clarity on execution and to prevent ambiguity about follow-through."
  }
];

const realWorldExamples = [
  {
    scenario: "Team proposing a major architectural change",
    ineffective: "Immediately diving into implementation details or expressing skepticism: 'That sounds too risky. How long will this take? How much will it cost?'",
    effective: {
      approach: "Use questioning to understand the drivers and explore implications thoroughly before jumping to execution details.",
      questions: [
        "What specific problems does this architectural change solve that our current approach doesn&apos;t?",
        "What alternatives did you consider, and what led you to prefer this approach?",
        "How might this change affect our ability to deliver other priorities?",
        "What parts of the system are most at risk during this transition?",
        "How would we validate that the new architecture is achieving our goals?"
      ],
      outcome: "The team refines their proposal with more thorough consideration of alternatives and risks. The final approach incorporates elements of both the original architecture and the proposed changes, with clearer success metrics."
    }
  },
  {
    scenario: "Addressing persistent quality issues",
    ineffective: "Focusing only on the immediate fix: 'Just add more tests and code reviews to catch these bugs.'",
    effective: {
      approach: "Use questioning to identify root causes and systemic factors rather than just symptoms.",
      questions: [
        "Beyond this specific bug, what patterns are we seeing in our quality issues?",
        "What pressures or constraints make it difficult for the team to maintain quality?",
        "How do our development processes help or hinder quality?",
        "What feedback loops are missing that would help us catch these issues earlier?",
        "If we could change one thing about how we work to improve quality, what would have the biggest impact?"
      ],
      outcome: "Instead of just adding more quality checks, the team identifies structural issues in how requirements are communicated and how work is planned. Changes to these upstream processes lead to more sustainable quality improvements."
    }
  },
  {
    scenario: "Team member proposing a new technology",
    ineffective: "Binary approval/rejection based on personal preference: 'I don&apos;t think we need another tool in our stack. Let&apos;s stick with what we know.'",
    effective: {
      approach: "Use questioning to evaluate the proposal objectively and ensure thorough consideration of benefits and costs.",
      questions: [
        "What specific capabilities does this technology provide that our current tools don&apos;t?",
        "How does adopting this technology align with our technical strategy?",
        "What's the learning curve for the team, and how would we manage that?",
        "What risks or maintenance costs might come with introducing this technology?",
        "How would we measure success if we adopted this?"
      ],
      outcome: "The team develops clearer criteria for technology adoption. In this case, they decide to use the proposed technology for a limited pilot to better evaluate its benefits and costs before wider adoption."
    }
  }
];

const benefits = [
  {
    icon: "🌱",
    title: "Accelerated Development",
    description: "Team members develop faster when questions guide them to discover solutions rather than being told what to do."
  },
  {
    icon: "🔄",
    title: "Increased Innovation",
    description: "Thoughtful questioning opens space for creative thinking and challenges status quo assumptions."
  },
  {
    icon: "🤝",
    title: "Stronger Alignment",
    description: "Questions that explore purpose and impact create deeper understanding of the 'why' behind technical decisions."
  },
  {
    icon: "🧩",
    title: "Better Problem Definition",
    description: "Questions ensure the team is solving the right problem, not just implementing the first solution."
  },
  {
    icon: "📈",
    title: "Higher Quality Decisions",
    description: "Questions that explore alternatives, assumptions, and implications lead to more robust technical choices."
  },
  {
    icon: "🛡️",
    title: "Greater Resilience",
    description: "Teams that regularly question their approach are better prepared to adapt when circumstances change."
  }
];

const howWeHelp = [
  {
    title: "Leadership Coaching",
    description: "One-on-one coaching focused on developing your questioning skills and applying them to your specific leadership challenges."
  },
  {
    title: "Team Workshops",
    description: "Interactive sessions that build your team's collective ability to ask better questions and create a culture of inquiry."
  },
  {
    title: "Decision Process Design",
    description: "We help you integrate effective questioning into your technical decision-making processes, from architecture reviews to retrospectives."
  },
  {
    title: "Real-time Facilitation",
    description: "We facilitate key technical discussions, modeling effective questioning and helping your team reach better outcomes on critical decisions."
  }
];