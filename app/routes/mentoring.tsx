import type { MetaFunction } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "../footer/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Leadership Mentoring | RealHandy" },
    { 
      name: "description", 
      content: "Transform from traditional management to servant leadership. Break free from the 'boss = master' paradigm with vulnerable, compassionate leadership mentoring." 
    },
  ];
};

export default function Mentoring() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            Leadership Mentoring
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            The Boss ≠ Master
            <span className="block text-2xl md:text-3xl text-muted-foreground mt-4">
              Revelation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Most leaders were taught that being "the boss" means being "the master." 
            But servant leadership—where you serve your team, not the other way around—
            creates extraordinary results through vulnerable, compassionate leadership.
          </p>
          <Button size="lg" className="mr-4">
            Start Your Leadership Journey
          </Button>
          <Button variant="outline" size="lg">
            Book Discovery Call
          </Button>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Leadership Crisis Nobody Talks About
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional management creates fear, reduces innovation, and burns out both leaders and teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Leadership */}
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">Traditional "Boss = Master" Leadership</CardTitle>
                <CardDescription>
                  Command and control, hierarchy-based power structures
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Leaders feel they must have all the answers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Vulnerability is seen as weakness</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Decisions flow top-down with little input</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Team members become order-takers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Innovation suffers from fear of failure</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Servant Leadership */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Servant Leadership</CardTitle>
                <CardDescription>
                  Leading by serving, empowering others to excel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Leaders focus on serving their team's growth</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Vulnerability builds trust and connection</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Decisions emerge from collaborative wisdom</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Team members become empowered contributors</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Innovation thrives in psychological safety</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Revelation Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            The Revelation That Changes Everything
          </h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              <strong>The word "boss" comes from the Dutch word "baas," meaning master.</strong>
            </p>
            <p className="text-lg leading-relaxed mb-6">
              For centuries, we've unconsciously accepted that leadership means mastery over others. 
              But what if leadership was about serving others' mastery instead?
            </p>
            <p className="text-xl font-semibold text-primary">
              When leaders serve their teams, extraordinary things happen.
            </p>
          </div>
        </div>
      </section>

      {/* Mentoring Areas */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leadership Mentoring Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your leadership through vulnerable, compassionate practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vulnerable Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn to lead with authenticity, admitting when you don't know something, 
                  and creating psychological safety through honest communication.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Authentic communication</li>
                  <li>• Psychological safety creation</li>
                  <li>• Leading through uncertainty</li>
                  <li>• Building trust through openness</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Compassionate Decision-Making</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Make decisions that consider the human impact while achieving business objectives. 
                  Balance empathy with accountability.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Empathetic problem-solving</li>
                  <li>• Inclusive decision processes</li>
                  <li>• Balancing care and results</li>
                  <li>• Difficult conversations with grace</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Servant Leadership Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Develop daily practices that put your team's growth and success 
                  at the center of your leadership approach.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Team growth focus</li>
                  <li>• Obstacle removal</li>
                  <li>• Empowerment strategies</li>
                  <li>• Success amplification</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Emotional Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Develop deep self-awareness and the ability to understand, 
                  navigate, and positively influence emotions in yourself and others.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Self-awareness development</li>
                  <li>• Emotional regulation</li>
                  <li>• Social awareness</li>
                  <li>• Relationship management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Culture Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Build cultures where people feel valued, heard, and empowered to do 
                  their best work while growing as individuals.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Values-based culture</li>
                  <li>• Inclusive environment</li>
                  <li>• Growth mindset cultivation</li>
                  <li>• Recognition systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Leading Through Change</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Navigate organizational change with compassion while maintaining 
                  clear direction and supporting your team through transitions.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Change communication</li>
                  <li>• Uncertainty navigation</li>
                  <li>• Team support strategies</li>
                  <li>• Adaptive leadership</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Leadership Transformation Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven path from traditional management to servant leadership
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
                <h3 className="text-xl font-semibold mb-2">Self-Discovery & Awareness</h3>
                <p className="text-muted-foreground">
                  Understand your current leadership style, identify unconscious biases, 
                  and recognize the impact of traditional "boss = master" thinking on your leadership.
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
                <h3 className="text-xl font-semibold mb-2">Vulnerability Practice</h3>
                <p className="text-muted-foreground">
                  Learn to lead with authenticity, practice admitting uncertainty, 
                  and build trust through genuine human connection rather than positional authority.
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
                <h3 className="text-xl font-semibold mb-2">Compassionate Decision-Making</h3>
                <p className="text-muted-foreground">
                  Develop decision-making processes that consider both human impact and business results, 
                  creating sustainable solutions that honor the whole person.
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
                <h3 className="text-xl font-semibold mb-2">Service-Oriented Leadership</h3>
                <p className="text-muted-foreground">
                  Transform your role from commanding others to serving their growth, 
                  removing obstacles, and creating conditions for their success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Results of Servant Leadership
            </h2>
            <p className="text-xl text-muted-foreground">
              What happens when leaders serve instead of command
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <p className="text-sm text-muted-foreground">
                  Higher employee engagement in servant-led organizations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">3x</div>
                <p className="text-sm text-muted-foreground">
                  More innovation from psychologically safe teams
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">67%</div>
                <p className="text-sm text-muted-foreground">
                  Reduction in burnout for servant leaders
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <p className="text-sm text-muted-foreground">
                  Improvement in team performance metrics
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
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Break free from the "boss = master" paradigm and discover the power of servant leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Leadership Mentoring
            </Button>
            <Button variant="outline" size="lg">
              Schedule Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
      <Footer />
    </div>
  );
}
