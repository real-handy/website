import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Common Startup Mistakes | Real Handy",
  description: "Learn about the most common mistakes first-time founders make and how to avoid them.",
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
                Common Mistakes
              </h1>
              <div className="h-2 w-40 bg-indigo-500 mx-auto rounded-full mb-8"></div>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                What we&apos;ve learned from helping hundreds of startups avoid costly errors
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="relative bg-slate-800/70 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The Path Is Full of Pitfalls
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Starting a new venture is exhilarating, but it&apos;s also fraught with challenges that can derail even the most promising ideas. After working with hundreds of early-stage founders, we&apos;ve identified the most common mistakes that trip up first-time entrepreneurs. Understanding these pitfalls won&apos;t guarantee success, but it will significantly improve your odds.
              </p>
            </div>
          </div>
        </div>

        {/* Mistake Groups Section */}
        <section className="relative py-24 bg-indigo-900/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                {mistakeGroups.map((group) => (
                  <div key={group.title} className="bg-slate-800 bg-opacity-70 p-8 rounded-lg">
                    <div className="aspect-[3/2] overflow-hidden rounded-lg">
                      <Image
                        src={group.image}
                        alt={group.title}
                        className="h-full w-full object-cover object-center"
                        width={400}
                        height={266}
                      />
                    </div>
                    <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">
                      {group.title}
                    </h3>
                    <p className="mt-4 text-lg text-gray-300">
                      {group.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Building Mistakes Section */}
        <section className="relative py-24 bg-slate-800/60">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">
                Building Mistakes
              </h2>
              
              {buildingMistakes.map((mistake, i) => (
                <div key={mistake.title} className="mb-16 border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {i + 1}. {mistake.title}
                  </h3>
                  <p className="text-lg text-slate-300 mb-6">
                    {mistake.description}
                  </p>
                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-indigo-400 mb-3">
                      Better Approach:
                    </h4>
                    <p className="text-slate-300">
                      {mistake.betterApproach}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GTM Mistakes Section */}
        <section className="relative py-24 bg-indigo-900/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">
                Go-to-Market Mistakes
              </h2>
              
              {gtmMistakes.map((mistake, i) => (
                <div key={mistake.title} className="mb-16 border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {i + 1}. {mistake.title}
                  </h3>
                  <p className="text-lg text-slate-300 mb-6">
                    {mistake.description}
                  </p>
                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-indigo-400 mb-3">
                      Better Approach:
                    </h4>
                    <p className="text-slate-300">
                      {mistake.betterApproach}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Funding Mistakes Section */}
        <section className="relative py-24 bg-slate-800/60">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">
                Funding Mistakes
              </h2>
              
              {fundingMistakes.map((mistake, i) => (
                <div key={mistake.title} className="mb-16 border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {i + 1}. {mistake.title}
                  </h3>
                  <p className="text-lg text-slate-300 mb-6">
                    {mistake.description}
                  </p>
                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-indigo-400 mb-3">
                      Better Approach:
                    </h4>
                    <p className="text-slate-300">
                      {mistake.betterApproach}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative bg-slate-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <figure className="mt-10">
                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    &ldquo;The difference between successful people and very successful people is that very successful people say &apos;no&apos; to almost everything.&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <div className="font-semibold text-white">Warren Buffett</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Navigate Your Journey More Wisely
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300 mb-8">
                Every successful founder makes mistakes along the way. The goal isn&apos;t to eliminate all errors—it&apos;s to avoid the most costly ones and learn quickly from the rest. At Real Handy, we provide the guidance and technical leadership to help you navigate these challenges with greater confidence.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-8 py-3 text-lg font-semibold text-slate-900 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Schedule a Call
                </a>
                <a href="/#roles" className="text-lg font-semibold leading-6 text-white hover:text-indigo-300">
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

// Data arrays for the page content
const mistakeGroups = [
  {
    title: "Building Mistakes",
    description: "Errors in product development that lead to wasted time, resources, and opportunity cost.",
    image: "/images/building.jpg"
  },
  {
    title: "Go-to-Market Mistakes",
    description: "Missteps in launching and positioning your product that limit traction and growth.",
    image: "/images/gtm.jpg"
  },
  {
    title: "Funding Mistakes",
    description: "Poor decisions about when, how, and from whom to raise capital that compromise long-term success.",
    image: "/images/funding.jpg"
  },
  {
    title: "Team Mistakes",
    description: "Hiring and structure issues that create inefficiency, conflict, and eventual team breakdown.",
    image: "/images/team.jpg"
  }
];

const buildingMistakes = [
  {
    title: "Building in Stealth for Too Long",
    description: "Many first-time founders spend months or even years building their product in isolation, afraid that someone will steal their idea. They emerge with something that doesn&apos;t address actual market needs.",
    betterApproach: "Get feedback early and often. Start with a minimal version that addresses the core problem, and iterate based on user input. Remember that execution matters more than the idea itself."
  },
  {
    title: "Perfectionism Before Launch",
    description: "Obsessing over every feature and detail before launch, often causing significant delays and burning through cash reserves.",
    betterApproach: "Embrace the concept of a Minimum Viable Product (MVP). Focus on solving the core problem exceptionally well, and plan to add refinements after you&apos;ve validated market interest."
  },
  {
    title: "Feature Creep",
    description: "Continuously adding &quot;nice-to-have&quot; features that dilute focus and complicate the user experience.",
    betterApproach: "Maintain a relentless focus on your core value proposition. For every new feature, ask whether it directly contributes to solving your primary user problem. If not, put it on the backlog."
  },
  {
    title: "Premature Scaling",
    description: "Building complex infrastructure and systems before you&apos;ve validated product-market fit.",
    betterApproach: "Use existing tools and services in the early stages. Focus technical resources on the unique aspects of your solution rather than rebuilding what&apos;s already available off-the-shelf."
  }
];

const gtmMistakes = [
  {
    title: "Targeting Too Broad a Market",
    description: "Trying to appeal to everyone results in appealing to no one. Products that attempt to serve too broad a market often lack the specificity needed to solve any particular user&apos;s problem effectively.",
    betterApproach: "Start with a clearly defined niche where you can deliver exceptional value. Once you&apos;ve established a foothold, you can expand to adjacent markets."
  },
  {
    title: "Underinvesting in Customer Discovery",
    description: "Assuming you understand customer needs without thorough research, leading to products that miss the mark.",
    betterApproach: "Invest time in customer interviews before and during development. Develop detailed personas and use cases based on actual conversations, not assumptions."
  },
  {
    title: "Weak Differentiation",
    description: "Failing to clearly articulate why your solution is meaningfully different from alternatives, resulting in difficulty gaining traction against established competitors.",
    betterApproach: "Identify and emphasize your unique value proposition. Be specific about which aspect of the problem you solve better than anyone else, even if your overall solution has fewer features."
  },
  {
    title: "Overcomplicating the Message",
    description: "Creating complex messaging that fails to quickly communicate your core value proposition.",
    betterApproach: "Refine your pitch until you can explain what you do and why it matters in one or two sentences. Test your messaging with people outside your industry to ensure clarity."
  }
];

const fundingMistakes = [
  {
    title: "Raising Too Much Too Soon",
    description: "Taking on more capital than necessary in early stages, which dilutes founder ownership and creates unrealistic growth expectations before product-market fit.",
    betterApproach: "Raise only what you need to reach your next meaningful milestone. Consider alternative funding sources like revenue-based financing, grants, or strategic partnerships."
  },
  {
    title: "Optimizing for Valuation Over Partner Quality",
    description: "Choosing investors based primarily on valuation rather than their ability to add value beyond capital.",
    betterApproach: "Select investors who bring relevant expertise, connections, and support for your specific industry and stage. A slightly lower valuation from the right partner is often worth the trade-off."
  },
  {
    title: "Neglecting Runway Management",
    description: "Poor cash flow planning that results in urgent fundraising from a position of weakness.",
    betterApproach: "Maintain a detailed financial model with regular updates. Plan fundraising to begin at least 6-9 months before you&apos;ll need capital, so you&apos;re negotiating from a position of strength."
  },
  {
    title: "Ignoring Alternative Growth Paths",
    description: "Assuming venture capital is the only viable path to growth, when many successful businesses bootstrap or use alternative funding models.",
    betterApproach: "Consider whether your business model could support customer-funded growth. Not every successful company needs venture capital, and many thrive with alternative approaches."
  }
];