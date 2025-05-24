import { useRef } from 'react';
import type { RefObject, Dispatch, SetStateAction } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { fractionalContent } from "@/welcome/service-content/fractional-content";
import { mentoringContent } from "@/welcome/service-content/mentoring-content";
import { coachingContent } from "@/welcome/service-content/coaching-content";

interface ServicesProps {
  sectionRefs: RefObject<(HTMLElement | null)[]>;
  scrollToSection: (index: number) => void;
  activeSection: number;
  setActiveSection: Dispatch<SetStateAction<number>>;
  introSectionRef: RefObject<HTMLElement | null>;
}

const services = [
    {
      id: "fractional",
      title: "Fractional Leadership",
      description: "The power of experienced leadership, exactly when you need it",
      gradientFrom: "from-blue-50/40 dark:from-blue-950/40",
      gradientTo: "to-blue-100/40 dark:to-blue-900/40",
      accentColor: "border-blue-400/20 dark:border-blue-400/10",
      textAccent: "text-blue-700 dark:text-blue-300",
      headingClass: "from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-500",
      sectionColor: "border-l-blue-400 dark:border-l-blue-500",
      content: fractionalContent
    },
    {
      id: "mentoring",
      title: "Leadership Mentoring",
      description: "Developing your authentic leadership presence",
      gradientFrom: "from-purple-50/40 dark:from-purple-950/40",
      gradientTo: "to-purple-100/40 dark:to-purple-900/40",
      accentColor: "border-purple-400/20 dark:border-purple-400/10",
      textAccent: "text-purple-700 dark:text-purple-300",
      headingClass: "from-purple-700 to-purple-500 dark:from-purple-300 dark:to-purple-500",
      sectionColor: "border-l-purple-400 dark:border-l-purple-500",
      content: mentoringContent
    },
    {
      id: "coaching",
      title: "Executive Coaching",
      description: "Elevating your impact and effectiveness",
      gradientFrom: "from-green-50/40 dark:from-green-950/40",
      gradientTo: "to-green-100/40 dark:to-green-900/40",
      accentColor: "border-green-400/20 dark:border-green-400/10",
      textAccent: "text-green-700 dark:text-green-300", 
      headingClass: "from-green-700 to-green-500 dark:from-green-300 dark:to-green-500",
      sectionColor: "border-l-green-400 dark:border-l-green-500",
      content: coachingContent
    }
  ];

export function Services({ 
  sectionRefs, 
  scrollToSection, 
  activeSection, 
  setActiveSection, 
  introSectionRef 
}: ServicesProps) {
  return (
      <div className="relative">
        {/* Section navigation dots */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
          <button 
            onClick={() => scrollToSection(-1)}
            className={`w-3 h-3 rounded-full transition-all ${activeSection === -1 ? 'bg-primary scale-125' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}`}
            aria-label="Scroll to intro"
          />
          {services.map((service, idx) => (
            <button
              key={`nav-${service.id}`}
              onClick={() => scrollToSection(idx)}
              className={`w-3 h-3 rounded-full transition-all ${activeSection === idx ? 'bg-primary scale-125' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}`}
              aria-label={`Scroll to ${service.title}`}
            />
          ))}
        </div>
        
        {services.map((service, index) => {
          const { ref, inView } = useInView({
            threshold: 0.3,
            onChange: (inView) => {
              if (inView) setActiveSection(index);
            }
          });
          
          return (
            <section 
              key={service.id}
              id={`section-${service.id}`}
              ref={(el) => {
                sectionRefs.current[index] = el;
                ref(el);
              }}
              className={`min-h-screen relative z-10 bg-gradient-to-b ${service.gradientFrom} ${service.gradientTo} transition-colors duration-700`}
            >
              {/* Sticky Title Header with minimalist design */}
              <div className="sticky top-0 z-30 pt-20 pb-6 backdrop-blur-sm bg-background/30 dark:bg-background/20 transition-all duration-500">
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="container mx-auto px-4"
                >
                  <div className="flex items-end gap-6 border-b border-gray-200/50 dark:border-gray-800/50 pb-4">
                    <h2 className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${service.headingClass}`}>
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg hidden md:block">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Content Container with modern spacing and reduced visual noise */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="container mx-auto px-4 py-12 mb-20"
              >
                {/* Service content based on id */}
                <div className="space-y-12">
                  <div className="space-y-6">
                    <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent ${service.headingClass}`}>
                      {service.content.subtitle}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {service.content.description}
                    </p>
                  </div>
                  
                  {/* Service specific content cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.id === "fractional" && (
                      <>
                        <Card className={`bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group ${service.accentColor}`}>
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              <Badge variant="outline" className={service.textAccent}>Featured</Badge>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Fractional CTO</h4>
                            <p className="text-muted-foreground mb-4">Strategic technology leadership to drive innovation and growth</p>
                            <div className="mt-auto pt-4">
                              <Link to="/fractional" className={`text-sm font-medium group-hover:underline ${service.textAccent}`}>
                                Learn more
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className={`bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group ${service.accentColor}`}>
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              <Badge variant="outline" className={service.textAccent}>Strategic</Badge>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Fractional COO</h4>
                            <p className="text-muted-foreground mb-4">Operational excellence and organizational effectiveness</p>
                            <div className="mt-auto pt-4">
                              <Link to="/fractional" className={`text-sm font-medium group-hover:underline ${service.textAccent}`}>
                                Learn more
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className={`bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group ${service.accentColor}`}>
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              <Badge variant="outline" className={service.textAccent}>Technical</Badge>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">VP Engineering</h4>
                            <p className="text-muted-foreground mb-4">Technical team leadership and engineering excellence</p>
                            <div className="mt-auto pt-4">
                              <Link to="/fractional" className={`text-sm font-medium group-hover:underline ${service.textAccent}`}>
                                Learn more
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      </>
                    )}
                    
                    {service.id === "mentoring" && (
                      <>
                        <Card className={`bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group ${service.accentColor}`}>
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              <Badge variant="outline" className={service.textAccent}>Individual</Badge>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Individual Mentoring</h4>
                            <p className="text-muted-foreground mb-4">Personalized leadership development for emerging leaders</p>
                            <div className="mt-auto pt-4">
                              <Link to="/mentoring" className={`text-sm font-medium group-hover:underline ${service.textAccent}`}>
                                Learn more
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className={`bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group ${service.accentColor}`}>
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              <Badge variant="outline" className={service.textAccent}>Program</Badge>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Team Mentoring</h4>
                            <p className="text-muted-foreground mb-4">Structured programs for leadership teams in transition</p>
                            <div className="mt-auto pt-4">
                              <Link to="/mentoring" className={`text-sm font-medium group-hover:underline ${service.textAccent}`}>
                                Learn more
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className={`bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group ${service.accentColor}`}>
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              <Badge variant="outline" className={service.textAccent}>Workshop</Badge>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Leadership Workshops</h4>
                            <p className="text-muted-foreground mb-4">Interactive workshops on servant leadership principles</p>
                            <div className="mt-auto pt-4">
                              <Link to="/mentoring" className={`text-sm font-medium group-hover:underline ${service.textAccent}`}>
                                Learn more
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      </>
                    )}
                    
                    {service.id === "coaching" && (
                      <>
                        <Card className={`bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group ${service.accentColor}`}>
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              <Badge variant="outline" className={service.textAccent}>Executive</Badge>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">1:1 Executive Coaching</h4>
                            <p className="text-muted-foreground mb-4">Personalized coaching for senior leaders facing complex challenges</p>
                            <div className="mt-auto pt-4">
                              <Link to="/coaching" className={`text-sm font-medium group-hover:underline ${service.textAccent}`}>
                                Learn more
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className={`bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group ${service.accentColor}`}>
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              <Badge variant="outline" className={service.textAccent}>Transition</Badge>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Career Transition</h4>
                            <p className="text-muted-foreground mb-4">Guidance for leaders in career transitions and advancement</p>
                            <div className="mt-auto pt-4">
                              <Link to="/coaching" className={`text-sm font-medium group-hover:underline ${service.textAccent}`}>
                                Learn more
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className={`bg-background/50 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group ${service.accentColor}`}>
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              <Badge variant="outline" className={service.textAccent}>Growth</Badge>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Leadership Development</h4>
                            <p className="text-muted-foreground mb-4">Focused programs for specific leadership skill development</p>
                            <div className="mt-auto pt-4">
                              <Link to="/coaching" className={`text-sm font-medium group-hover:underline ${service.textAccent}`}>
                                Learn more
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Next/Prev Navigation with updated design */}
                <div className="flex justify-between mt-20">
                  {index > 0 ? (
                    <Button 
                      variant="outline" 
                      className="group px-6 py-6 h-auto border-0 bg-gradient-to-r from-background/70 to-background/50 backdrop-blur-sm hover:bg-background/80 transition-all rounded-xl"
                      onClick={() => scrollToSection(index - 1)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-background to-background/80 flex items-center justify-center shadow-sm group-hover:-translate-x-1 transition-transform">
                          <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div className="text-left">
                          <p className="text-muted-foreground text-sm">Previous</p>
                          <p className="font-medium">{services[index - 1].title}</p>
                        </div>
                      </div>
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  {index < services.length - 1 ? (
                    <Button 
                      variant="outline" 
                      className="group px-6 py-6 h-auto border-0 bg-gradient-to-r from-background/70 to-background/50 backdrop-blur-sm hover:bg-background/80 transition-all rounded-xl"
                      onClick={() => scrollToSection(index + 1)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-muted-foreground text-sm">Next</p>
                          <p className="font-medium">{services[index + 1].title}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-background to-background/80 flex items-center justify-center shadow-sm group-hover:translate-x-1 transition-transform">
                          <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </div>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="group px-6 py-6 h-auto border-0 bg-gradient-to-r from-background/70 to-background/50 backdrop-blur-sm hover:bg-background/80 transition-all rounded-xl"
                      onClick={() => scrollToSection(-1)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-muted-foreground text-sm">Go Back</p>
                          <p className="font-medium">To Intro</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-background to-background/80 flex items-center justify-center shadow-sm group-hover:-translate-y-1 transition-transform">
                          <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 3C7.77614 3 8 3.22386 8 3.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 3.5C7 3.22386 7.22386 3 7.5 3Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" transform="rotate(180 7.5 8)"></path>
                          </svg>
                        </div>
                      </div>
                    </Button>
                  )}
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>
  )
}