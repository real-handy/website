import type { MetaFunction } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact | RealHandy" },
    { 
      name: "description", 
      content: "Get in touch with Sean to discuss your technical leadership needs. Start a conversation about fractional services, mentoring, or coaching." 
    },
  ];
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Let's Start a
            <span className="block text-primary">Conversation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you need fractional leadership, executive coaching, or want to explore 
            how technical expertise can transform your organization, I'm here to help. 
            Every great partnership begins with a simple conversation.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ways to Connect
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  Send me a detailed message about your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfect for detailed project descriptions or when you prefer written communication.
                </p>
                <Button variant="outline" className="w-full">
                  sean@realhandy.com
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <CardTitle>Discovery Call</CardTitle>
                <CardDescription>
                  Schedule a 30-minute conversation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's discuss your challenges and explore how we might work together.
                </p>
                <Button className="w-full">
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <CardTitle>LinkedIn</CardTitle>
                <CardDescription>
                  Connect professionally and stay updated
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Follow my insights on leadership and technology, or send a direct message.
                </p>
                <Button variant="outline" className="w-full">
                  Connect on LinkedIn
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Send a Message
            </h2>
            <p className="text-xl text-muted-foreground">
              Tell me about your situation and how I might be able to help
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>
                I'll respond within 24 hours during business days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@company.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Your Role (Optional)</Label>
                  <Input id="role" placeholder="e.g., CTO, VP Engineering, CEO" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Primary Interest</Label>
                  <select 
                    id="interest" 
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                  >
                    <option value="">Select your primary interest</option>
                    <option value="fractional">Fractional & Functional Services</option>
                    <option value="mentoring">Leadership Mentoring</option>
                    <option value="coaching">Executive Coaching</option>
                    <option value="consulting">General Consulting</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your situation, challenges, or what you're hoping to achieve. The more context you provide, the better I can understand how to help."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline (Optional)</Label>
                  <select 
                    id="timeline" 
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                  >
                    <option value="">When would you like to start?</option>
                    <option value="immediate">Immediately / ASAP</option>
                    <option value="1-2weeks">Within 1-2 weeks</option>
                    <option value="1month">Within 1 month</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="future">Future planning</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can we get started?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  It depends on the type of engagement and my current availability. For fractional work, 
                  I typically can start within 1-2 weeks. For coaching and mentoring, we can often begin 
                  immediately after our discovery call. I'll always be transparent about timing during our first conversation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included in a discovery call?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A 30-minute conversation where we explore your situation, challenges, and goals. 
                  I'll ask questions to understand your needs and share how I might be able to help. 
                  There's no obligation—it's simply a chance for us to see if we're a good fit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you work with remote teams?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Absolutely. I've been working with distributed teams for over a decade and have 
                  developed effective practices for remote collaboration. Whether your team is fully remote, 
                  hybrid, or in-person, I can adapt to your working style.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What industries do you work with?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I work with technology companies, traditional businesses undergoing digital transformation, 
                  startups scaling their operations, and non-profits leveraging technology for impact. 
                  The common thread is organizations that want to use technology thoughtfully and lead with humanity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's your approach to pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I believe in transparent, value-based pricing. Costs vary depending on the scope and type of engagement. 
                  I'll always discuss pricing openly during our discovery call and provide clear proposals 
                  with no hidden fees or surprises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Every great partnership begins with a conversation. 
            Let's explore how we can create something meaningful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule Discovery Call
            </Button>
            <Button variant="outline" size="lg">
              Send Email Instead
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
