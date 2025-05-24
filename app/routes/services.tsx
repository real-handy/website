import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Footer } from "../footer/footer";

export function meta() {
  return [
    { title: "RealHandy - Services" },
    { name: "description", content: "Technical Leadership That Actually Works" },
  ];
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-6 text-foreground">
              Technical Leadership That Actually Works
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From organizational strategy to individual growth. Three focused approaches 
              to building better leaders, teams, and cultures in technology.
            </p>
            <div className="text-sm text-muted-foreground mb-12">
              <em>"Boss" comes from the Dutch word for "master" — it's a slave word that has no place in modern leadership.</em>
            </div>
          </div>
        </section>

        {/* Services Flow */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Fractional & Functional */}
              <div className="bg-card rounded-lg p-8 border border-border hover:border-accent transition-colors">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Fractional & Functional</h3>
                  <p className="text-muted-foreground">Organizational Leadership</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground">
                    Embedded leadership in technology and people management. Not a consultant — 
                    a fractional employee committed to your organization's success.
                  </p>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Technical & Personal Leadership</li>
                    <li>• Organizational Design</li>
                    <li>• Culture Architecture</li>
                    <li>• Strategic Integration</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <Link to="/fractional">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Mentoring */}
              <div className="bg-card rounded-lg p-8 border border-border hover:border-accent transition-colors">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Mentoring</h3>
                  <p className="text-muted-foreground">Team & Cultural Development</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground">
                    Building individual and team skills through vulnerable, compassionate, 
                    and brutally honest servant leadership principles.
                  </p>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Servant Leadership Training</li>
                    <li>• No-Nonsense Skill Building</li>
                    <li>• Vulnerable Leadership</li>
                    <li>• Cultural Transformation</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <Link to="/mentoring">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Coaching */}
              <div className="bg-card rounded-lg p-8 border border-border hover:border-accent transition-colors">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Coaching</h3>
                  <p className="text-muted-foreground">Individual Growth</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground">
                    From little league to the big show. Building goals, creating plans, 
                    and finding pathways to achieve individual excellence.
                  </p>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Goal Setting & Planning</li>
                    <li>• Individual Skill Development</li>
                    <li>• Career Progression</li>
                    <li>• Performance Excellence</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <Link to="/coaching">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Flow */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">The Natural Progression</h2>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h4 className="font-semibold text-foreground">Organization</h4>
                <p className="text-sm text-muted-foreground">Structure & Strategy</p>
              </div>
              
              <div className="hidden md:block text-2xl text-muted-foreground">→</div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="font-semibold text-foreground">Teams</h4>
                <p className="text-sm text-muted-foreground">Culture & Skills</p>
              </div>
              
              <div className="hidden md:block text-2xl text-muted-foreground">→</div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="font-semibold text-foreground">Individuals</h4>
                <p className="text-sm text-muted-foreground">Growth & Achievement</p>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-muted-foreground mb-6">
                Each level builds on the previous one. You can't coach individuals effectively 
                without strong mentoring principles, and you can't mentor teams without 
                organizational support.
              </p>
              <Link to="/about">
                <Button>
                  Learn About Our Approach
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
