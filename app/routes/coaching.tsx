import type { MetaFunction } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const meta: MetaFunction = () => {
  return [
    { title: "Executive Coaching | RealHandy" },
    { 
      name: "description", 
      content: "From little league to the big show. Executive coaching that bridges the gap between where you are and where you're meant to be in leadership." 
    },
  ];
};

export default function Coaching() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            Executive Coaching
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            From Little League
            <span className="block text-primary">to the Big Show</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Every great leader has untapped potential. Executive coaching bridges the gap 
            between where you are and where you're meant to be—helping you step up to 
            the big leagues of leadership with confidence and authenticity.
          </p>
          <Button size="lg" className="mr-4">
            Start Your Coaching Journey
          </Button>
          <Button variant="outline" size="lg">
            Book Assessment Call
          </Button>
        </div>
      </section>

      {/* The Journey Metaphor */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Every Champion Started Somewhere
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The difference between playing in the little leagues and the big show isn't just talent—
              it's having the right coach to unlock your potential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Little League */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Little League</CardTitle>
                <CardDescription className="text-center">
                  Learning the fundamentals
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4 text-4xl">⚾</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Everyone starts here—building basic skills, understanding the game, 
                  making mistakes, and discovering what they're capable of.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li>• Learning the rules</li>
                  <li>• Building confidence</li>
                  <li>• Making mistakes safely</li>
                  <li>• Discovering strengths</li>
                </ul>
              </CardContent>
            </Card>

            {/* The Journey */}
            <Card className="relative border-primary/20">
              <CardHeader>
                <CardTitle className="text-center text-primary">The Journey</CardTitle>
                <CardDescription className="text-center">
                  Bridging the gap with coaching
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4 text-4xl">🚀</div>
                <p className="text-sm text-muted-foreground mb-4">
                  The gap between potential and performance is where coaching lives. 
                  This is where transformation happens.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li>• Skill refinement</li>
                  <li>• Mental game mastery</li>
                  <li>• Leadership development</li>
                  <li>• Performance optimization</li>
                </ul>
              </CardContent>
            </Card>

            {/* Big Show */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">The Big Show</CardTitle>
                <CardDescription className="text-center">
                  Leading at the highest level
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4 text-4xl">🏆</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Operating at the highest levels of leadership—where your decisions 
                  impact not just results, but lives and legacies.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li>• Executive presence</li>
                  <li>• Strategic thinking</li>
                  <li>• Inspirational leadership</li>
                  <li>• Legacy building</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Coach Makes the Difference
            </h2>
            <p className="text-xl text-muted-foreground">
              Great athletes have great coaches. Great leaders need great coaches too.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What Great Coaches Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">See potential you can't see in yourself</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Challenge you to reach higher levels</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Provide tools for breakthrough performance</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Support you through difficult transitions</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">What Makes Our Coaching Different</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">28 years of real-world leadership experience</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Technical background meets human wisdom</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Focus on authentic, sustainable leadership</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Practical tools for immediate impact</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Areas */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Executive Coaching Focus Areas
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive leadership development for the modern executive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Executive Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Develop the gravitas, authenticity, and influence that commands respect 
                  and inspires confidence in any room.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Authentic confidence building</li>
                  <li>• Communication mastery</li>
                  <li>• Influence without authority</li>
                  <li>• Board-level presentation skills</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Strategic Thinking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn to think and act strategically, seeing the bigger picture 
                  while making decisions that create long-term value.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Systems thinking development</li>
                  <li>• Long-term perspective</li>
                  <li>• Complex problem solving</li>
                  <li>• Strategic decision-making</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Leadership Transitions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Navigate career transitions with confidence—from new manager 
                  to C-suite, or pivoting to entirely new leadership challenges.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Role transition planning</li>
                  <li>• First 90 days strategy</li>
                  <li>• Stakeholder management</li>
                  <li>• Team integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Unlock peak performance through better habits, clearer priorities, 
                  and systematic approaches to personal and professional excellence.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Energy management</li>
                  <li>• Priority optimization</li>
                  <li>• Productivity systems</li>
                  <li>• Work-life integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Team & Culture Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foregoing mb-4">
                  Build high-performing teams and positive cultures that drive results 
                  while developing people and creating sustainable success.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Team dynamics optimization</li>
                  <li>• Culture transformation</li>
                  <li>• Talent development</li>
                  <li>• Succession planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Crisis & Change Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Lead with confidence through uncertainty, crisis, and major organizational 
                  changes while maintaining team morale and business momentum.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Crisis communication</li>
                  <li>• Change management</li>
                  <li>• Stakeholder alignment</li>
                  <li>• Resilience building</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coaching Process */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Path to the Big Show
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven coaching process that creates lasting transformation
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Assessment & Goal Setting</h3>
                <p className="text-muted-foreground">
                  Comprehensive leadership assessment using proven tools, 360-degree feedback, 
                  and goal-setting that aligns with your personal and professional aspirations.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Customized Development Plan</h3>
                <p className="text-muted-foreground">
                  Create a personalized coaching plan that targets your specific growth areas, 
                  leverages your strengths, and accelerates your leadership development.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Active Coaching & Practice</h3>
                <p className="text-muted-foreground">
                  Regular coaching sessions with real-world application, immediate feedback, 
                  and continuous refinement of your leadership approach and skills.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Integration & Mastery</h3>
                <p className="text-muted-foreground">
                  Integrate new capabilities into your daily leadership practice, 
                  build sustainable habits, and develop the confidence to lead at the highest levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Success in the Big Show
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from executives who made the leap
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold">From Manager to Director</h3>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  "Coaching helped me develop the strategic thinking and executive presence 
                  needed to lead at the director level. The promotion came 6 months early."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-semibold">Startup to Scale-up CEO</h3>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  "The coaching helped me transition from founder mode to CEO mode. 
                  We successfully raised Series B and scaled from 50 to 200 employees."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h3 className="font-semibold">Technical Expert to VP</h3>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  "I learned to lead people, not just technology. The leadership skills 
                  I developed opened doors I never thought possible."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for the Big Show?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Every great leader had a coach who believed in their potential. 
            Let's unlock yours and take your leadership to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Executive Coaching
            </Button>
            <Button variant="outline" size="lg">
              Schedule Assessment Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
