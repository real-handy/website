import { useState, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/layout/Hero";
import { Services } from "@/components/layout/Services";

export function Welcome({ message }: { message: string }) {
  // Create refs for each section including the intro
  const introSectionRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  // Setup for intersection observer to track which section is visible
  const [activeSection, setActiveSection] = useState(-1);
  
  // Handle scroll dot navigation
  const scrollToSection = (index: number) => {
    if (index === -1 && introSectionRef.current) {
      introSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-background">
      <Navbar />
      
      {/* Intro Section */}
      <section ref={introSectionRef}>
        <Hero
          title="Leadership"
          description="RealHandy offers a suite of services that mold to your organization's unique needs"
          primaryButtonText="Explore Our Services"
          primaryButtonAction={() => scrollToSection(0)}
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
        />
      </section>
      
      {/* Service sections with modern design */}
      <Services 
        sectionRefs={sectionRefs}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        introSectionRef={introSectionRef}
      />
      
      {/* Summary cards above footer */}
      <section className="py-24 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-50 dark:to-gray-300">
              Why Choose RealHandy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience-driven leadership solutions with a proven track record of success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--realhandy-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V16" stroke="var(--realhandy-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="var(--realhandy-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Experience That Matters</h3>
                <p className="text-muted-foreground mb-6">
                  Decades of hands-on leadership experience across startups, scale-ups, and enterprise organizations.
                </p>
                <div className="mt-auto">
                  <Button variant="ghost" size="sm" className="text-primary" asChild>
                    <Link to="/about">Learn about our approach</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="var(--realhandy-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="var(--realhandy-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="var(--realhandy-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="var(--realhandy-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Servant Leadership</h3>
                <p className="text-muted-foreground mb-6">
                  We believe in servant leadership principles that put your organization's needs at the forefront.
                </p>
                <div className="mt-auto">
                  <Button variant="ghost" size="sm" className="text-primary" asChild>
                    <Link to="/services">Explore our philosophy</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="var(--realhandy-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="var(--realhandy-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Measurable Results</h3>
                <p className="text-muted-foreground mb-6">
                  We focus on driving tangible outcomes with clear metrics and accountability frameworks.
                </p>
                <div className="mt-auto">
                  <Button variant="ghost" size="sm" className="text-primary" asChild>
                    <Link to="/contact">Discuss your needs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
