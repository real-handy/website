import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { Button } from "@/components/ui/button";
import { Footer } from "../footer/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Fractional & Functional - RealHandy" },
    { name: "description", content: "Embedded technical and organizational leadership" },
  ];
}

export default function FractionalPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🏢</span>
              </div>
              <h1 className="text-4xl font-bold mb-6 text-foreground">
                Fractional & Functional
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Embedded technical and organizational leadership. Not a consultant — 
                a fractional employee committed to your organization's success.
              </p>
            </div>
          </div>
        </section>

        {/* The Difference Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              The Difference: Fractional Employee vs. Traditional Consultant
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Traditional Consultant */}
              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-8 border-2 border-red-200 dark:border-red-800">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-800 dark:text-red-200">Traditional Consultant</h3>
                  <p className="text-red-600 dark:text-red-300 text-sm">The IBM Drone Approach</p>
                </div>
                
                <ul className="space-y-3 text-sm text-red-700 dark:text-red-300">
                  <li>• Billable hours mindset</li>
                  <li>• Generic solutions and frameworks</li>
                  <li>• Limited organizational integration</li>
                  <li>• Short-term engagement focus</li>
                  <li>• PowerPoint over implementation</li>
                  <li>• Expensive and detached</li>
                </ul>
                
                <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/30 rounded border-l-4 border-red-400">
                  <p className="text-sm text-red-800 dark:text-red-200 italic">
                    "Here's your 200-slide deck. That'll be $200,000. Good luck with implementation!"
                  </p>
                </div>
              </div>

              {/* Fractional Employee */}
              <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-8 border-2 border-green-200 dark:border-green-800">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-200">Fractional Employee</h3>
                  <p className="text-green-600 dark:text-green-300 text-sm">The RealHandy Approach</p>
                </div>
                
                <ul className="space-y-3 text-sm text-green-700 dark:text-green-300">
                  <li>• Outcome-focused partnership</li>
                  <li>• Custom solutions for your context</li>
                  <li>• Deep organizational embedding</li>
                  <li>• Long-term relationship building</li>
                  <li>• Hands-on implementation</li>
                  <li>• Cost-effective and committed</li>
                </ul>
                
                <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 rounded border-l-4 border-green-400">
                  <p className="text-sm text-green-800 dark:text-green-200 italic">
                    "Let's build this together. I'm here until we get it right."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Organizational Leadership Areas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Technical Leadership</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Architecture strategy and decision-making</li>
                    <li>• Technology stack evaluation and selection</li>
                    <li>• Engineering team structure and processes</li>
                    <li>• Technical debt management</li>
                    <li>• Code quality and standards</li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Organizational Design</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Team structure optimization</li>
                    <li>• Cross-functional collaboration</li>
                    <li>• Communication frameworks</li>
                    <li>• Decision-making processes</li>
                    <li>• Scaling strategies</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Personal Leadership</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Executive coaching and development</li>
                    <li>• Leadership skill building</li>
                    <li>• Emotional intelligence training</li>
                    <li>• Strategic thinking development</li>
                    <li>• Conflict resolution</li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Culture Architecture</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Values definition and implementation</li>
                    <li>• Psychological safety frameworks</li>
                    <li>• Remote/hybrid culture design</li>
                    <li>• Performance and feedback systems</li>
                    <li>• Continuous learning culture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Approach */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              How Integration Works
            </h2>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-blue-800">
                    1
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Deep Dive Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    Understanding your organization, culture, challenges, and goals
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-content font-bold text-blue-800">
                    2
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Strategic Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Embedding within your team structure and decision-making processes
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-blue-800">
                    3
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Continuous Evolution</h4>
                  <p className="text-sm text-muted-foreground">
                    Ongoing refinement and adaptation as your organization grows
                  </p>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border text-center">
                <h4 className="font-semibold text-foreground mb-4">The Commitment</h4>
                <p className="text-muted-foreground mb-6">
                  This isn't about delivering a project and leaving. It's about becoming 
                  part of your organization's growth story and ensuring sustainable success.
                </p>
                <Link to="/contact">
                  <Button>
                    Start a Conversation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex justify-between items-center">
              <Link to="/services">
                <Button variant="outline">
                  ← Back to Services
                </Button>
              </Link>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Next: Team Development</p>
                <Link to="/mentoring">
                  <Button>
                    Mentoring →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
