import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { AnimatedBackground } from "./LeadershipAnimation";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  children?: ReactNode;
  showAnimation?: boolean;
}

const titles = [
  "Leadership",
  "Mentoring",
  "Coaching",
  "Design",
  "Technology",
  "Strategy",
];

export function Hero({
  title,
  description,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonLink = "/contact",
  children,
  showAnimation = true,
}: HeroProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % titles.length;
        return nextIndex;
      });
    }, 5000); // Change title every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation */}
      {showAnimation && <AnimatedBackground />}

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-50 dark:to-gray-300"
          >
            <div className="flex items-center justify-center gap-x-3">
              <div className="min-w-[200px] md:min-w-[280px] lg:min-w-[320px] text-center relative h-[80px] md:h-[100px] lg:h-[120px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={titles[currentTitleIndex]}
                    initial={{ 
                      opacity: 0, 
                      y: -200
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: 200
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="whitespace-nowrap text-4xl md:text-5xl lg:text-6xl font-medium text-amethyst-400 dark:text-amethyst-100">
                      {titles[currentTitleIndex]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
              <span className="flex-shrink-0">that transforms</span>
            </div>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground"
          >
            {description}
          </motion.p>
          
          {(primaryButtonText || secondaryButtonText) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            >
              {primaryButtonText && primaryButtonAction && (
                <Button 
                  size="lg" 
                  className="rounded-full px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all"
                  onClick={primaryButtonAction}
                >
                  {primaryButtonText}
                </Button>
              )}
              
              {secondaryButtonText && (
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 border-primary/20 hover:bg-primary/5 transition-all"
                  asChild
                >
                  <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
                </Button>
              )}
            </motion.div>
          )}
          
          {children}
        </div>
      </div>
    </section>
  );
}
