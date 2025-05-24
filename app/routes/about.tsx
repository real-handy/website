import type { MetaFunction } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const meta: MetaFunction = () => {
  return [
    { title: "About Sean | RealHandy" },
    { 
      name: "description", 
      content: "Meet Sean, founder of RealHandy. 28 years of leadership experience bridging technical expertise with human wisdom for modern organizations." 
    },
  ];
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6">
                About Sean
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Technical Expertise
                <span className="block text-primary">Meets Human Wisdom</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                For 28 years, I've been bridging the gap between technical excellence and human leadership. 
                RealHandy represents everything I've learned about building technology that serves people 
                and leading teams that create extraordinary results.
              </p>
              <Button size="lg" className="mr-4">
                Work With Me
              </Button>
              <Button variant="outline" size="lg">
                Read My Story
              </Button>
            </div>
            <div className="relative">
              {/* Placeholder for Sean's photo */}
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Sean's Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The 28-Year Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              From teenage entrepreneur to servant leader—a path of continuous learning and growth
            </p>
          </div>

          <div className="space-y-12">
            {/* Early Years */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Beginning (1996)</h3>
                <p className="text-muted-foreground mb-4">
                  Started RealHandy as a teenager with a simple belief: technology should make life better, 
                  not more complicated. What began as a web design business became a journey into understanding 
                  how technology and humanity intersect.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• First website built for a local restaurant</li>
                  <li>• Learned that great technology starts with understanding people</li>
                  <li>• Discovered the power of making complex things simple</li>
                </ul>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🌱</div>
                    <h4 className="font-semibold mb-2">The Seed</h4>
                    <p className="text-sm text-muted-foreground">
                      Every great journey starts with a simple idea and the courage to begin.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Growth Years */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="md:order-2">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h4 className="font-semibold mb-2">The Growth</h4>
                    <p className="text-sm text-muted-foreground">
                      Learning to lead teams, scale systems, and balance growth with values.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold mb-4">Building & Learning (2000-2010)</h3>
                <p className="text-muted-foreground mb-4">
                  Grew RealHandy from a one-person shop to a team of talented professionals. 
                  Learned hard lessons about leadership, the importance of culture, 
                  and how technical solutions must always serve human needs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Built and led cross-functional teams</li>
                  <li>• Developed expertise in complex system architecture</li>
                  <li>• Learned that leadership is about serving others</li>
                </ul>
              </div>
            </div>

            {/* Maturity Years */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Wisdom & Service (2010-Present)</h3>
                <p className="text-muted-foreground mb-4">
                  The last decade has been about refining what really matters: helping organizations 
                  and leaders bridge the gap between technical capability and human flourishing. 
                  Every engagement is an opportunity to create lasting positive impact.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Focused on sustainable, values-driven solutions</li>
                  <li>• Developed servant leadership philosophy</li>
                  <li>• Committed to leaving every organization better than I found it</li>
                </ul>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🌟</div>
                    <h4 className="font-semibold mb-2">The Purpose</h4>
                    <p className="text-sm text-muted-foreground">
                      True success is measured by the positive impact we have on others.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What I Believe
            </h2>
            <p className="text-xl text-muted-foreground">
              Principles that guide every decision and every relationship
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Technology Should Serve Humanity</h3>
              <p className="text-muted-foreground">
                Every technical decision should make life better for real people. 
                If it doesn't serve human flourishing, it's not worth building.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Leadership Is Service</h3>
              <p className="text-muted-foreground">
                The best leaders don't command—they serve. They create conditions 
                where others can do their best work and grow into their potential.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Vulnerability Is Strength</h3>
              <p className="text-muted-foreground">
                Authentic leadership requires the courage to be vulnerable, to admit 
                when we don't know something, and to learn from others.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Continuous Learning Is Essential</h3>
              <p className="text-muted-foreground">
                The world changes too fast for anyone to stand still. 
                Every day is an opportunity to learn something new and grow.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Relationships Matter Most</h3>
              <p className="text-muted-foreground">
                All meaningful work happens through relationships. 
                Trust, respect, and genuine care for others are the foundation of everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Areas of Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              28 years of experience across technology and leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technical Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• System design & architecture</li>
                  <li>• Cloud & edge computing</li>
                  <li>• Modern development practices</li>
                  <li>• Performance optimization</li>
                  <li>• Security & reliability</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Leadership Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Servant leadership practices</li>
                  <li>• Team building & culture</li>
                  <li>• Emotional intelligence</li>
                  <li>• Conflict resolution</li>
                  <li>• Change management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Organizational Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Digital transformation</li>
                  <li>• Process optimization</li>
                  <li>• Technology strategy</li>
                  <li>• Innovation frameworks</li>
                  <li>• Agile methodologies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Executive Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Leadership transitions</li>
                  <li>• Executive presence</li>
                  <li>• Strategic thinking</li>
                  <li>• Performance optimization</li>
                  <li>• Career development</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technology Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Legacy system modernization</li>
                  <li>• API strategy & design</li>
                  <li>• Data architecture</li>
                  <li>• Integration patterns</li>
                  <li>• Platform engineering</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Business Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Culture transformation</li>
                  <li>• Operational excellence</li>
                  <li>• Innovation programs</li>
                  <li>• Scaling strategies</li>
                  <li>• Value creation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Side */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Beyond the Professional
            </h2>
            <p className="text-xl text-muted-foreground">
              The personal values and interests that shape how I work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Learning & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm constantly learning—whether it's new technologies, leadership philosophies, 
                  or simply listening to the wisdom of others. Every conversation is an opportunity to grow.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Reading (business, philosophy, science fiction)</li>
                  <li>• Podcasts on leadership and innovation</li>
                  <li>• Experimenting with new technologies</li>
                  <li>• Attending conferences and workshops</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Family & Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  My family keeps me grounded and reminds me what really matters. 
                  I believe in building strong communities where everyone can thrive.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Family time and adventures</li>
                  <li>• Community involvement</li>
                  <li>• Mentoring young professionals</li>
                  <li>• Supporting local businesses</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Let's Work Together */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Create Something Meaningful Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you need technical expertise, leadership development, or strategic guidance, 
            I'm here to help you achieve your goals while staying true to your values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start a Conversation
            </Button>
            <Button variant="outline" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
