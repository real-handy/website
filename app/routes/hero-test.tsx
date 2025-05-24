import { useState } from "react";
import { Hero } from "@/components/layout/Hero";
import { AnimatedBackground } from "@/components/layout/LeadershipAnimation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function meta() {
  return [
    { title: "Hero Animation Test" },
    { name: "description", content: "Testing the Hero animation component" },
  ];
}

export default function HeroTest() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [title, setTitle] = useState("Hero Animation Test");
  const [description, setDescription] = useState("A dedicated page for testing the animation of our Hero component");
  const [primaryButtonText, setPrimaryButtonText] = useState("Primary Action");
  const [secondaryButtonText, setSecondaryButtonText] = useState("Secondary Action");
  const [showIsolatedAnimation, setShowIsolatedAnimation] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="container mx-auto p-6 bg-card shadow-sm rounded-lg my-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold">Hero Component Test Suite</h1>
          <Button 
            variant="outline" 
            onClick={() => {
              const html = document.querySelector('html');
              if (html?.classList.contains('dark')) {
                html.classList.remove('dark');
              } else {
                html?.classList.add('dark');
              }
            }}
          >
            Toggle Theme
          </Button>
        </div>
        <p className="text-muted-foreground">
          This page provides a testing environment for the Hero component and its animations. 
          Use the controls below to customize the Hero and test different configurations.
        </p>
      </div>
      
      {/* Controls panel */}
      <div className="container mx-auto p-4 bg-card shadow-sm rounded-lg mb-8 z-20 relative">
        <h2 className="text-2xl font-semibold mb-4">Hero Component Test Controls</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Hero title"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Hero description"
                rows={3}
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="primaryBtn">Primary Button Text</Label>
              <Input 
                id="primaryBtn" 
                value={primaryButtonText} 
                onChange={(e) => setPrimaryButtonText(e.target.value)} 
                placeholder="Primary button text"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="secondaryBtn">Secondary Button Text</Label>
              <Input 
                id="secondaryBtn" 
                value={secondaryButtonText} 
                onChange={(e) => setSecondaryButtonText(e.target.value)} 
                placeholder="Secondary button text"
              />
            </div>
            
            <div className="flex flex-col space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <Label className="inline-flex items-center cursor-pointer">
                  <Input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={showAnimation} 
                    onChange={(e) => setShowAnimation(e.target.checked)}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  <span className="ms-3">Show Animation</span>
                </Label>

                <Label className="inline-flex items-center cursor-pointer">
                  <Input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={showIsolatedAnimation} 
                    onChange={(e) => setShowIsolatedAnimation(e.target.checked)}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  <span className="ms-3">Test Isolated Animation</span>
                </Label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <Button 
            variant="outline" 
            onClick={() => {
              setTitle("Hero Animation Test");
              setDescription("A dedicated page for testing the animation of our Hero component");
              setPrimaryButtonText("Primary Action");
              setSecondaryButtonText("Secondary Action");
              setShowAnimation(true);
              setShowIsolatedAnimation(false);
            }}
          >
            Reset to Defaults
          </Button>
          
          <Button 
            variant="default"
            onClick={() => {
              // Force a refresh of the animation by toggling it off and on
              setShowAnimation(false);
              setTimeout(() => setShowAnimation(true), 10);
            }}
          >
            Refresh Animation
          </Button>
        </div>
      </div>
      
      {/* Isolated Animation Testing */}
      {showIsolatedAnimation && (
        <div className="container mx-auto mb-16">
          <div className="p-6 bg-card shadow-sm rounded-lg relative min-h-[400px] overflow-hidden">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div>
                <h2 className="text-xl font-semibold">Isolated Animation Component</h2>
                <p className="text-muted-foreground">Testing the AnimatedBackground component in isolation</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => {
                    // Force a refresh of the isolated animation by toggling a class or state
                    const container = document.querySelector('.animation-container');
                    container?.classList.remove('animation-refresh');
                    setTimeout(() => {
                      container?.classList.add('animation-refresh');
                    }, 10);
                  }}
                >
                  Refresh Animation
                </Button>
              </div>
            </div>
            
            <div className="relative z-10 mb-6 space-y-2">
              <h3 className="text-md font-medium">Animation Details</h3>
              <ul className="list-disc pl-6 text-sm text-muted-foreground">
                <li>SVG-based animation with CSS transitions</li>
                <li>Animated background circles using CSS keyframes</li>
                <li>Gradient overlays for depth and visual interest</li>
                <li>Optimized for both light and dark modes</li>
                <li>Responsive scaling for different viewport sizes</li>
              </ul>
            </div>
            
            <div className="animation-container relative w-full h-[350px] border border-border rounded-lg overflow-hidden">
              <AnimatedBackground />
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Component Test */}
      <Hero
        title={title}
        description={description}
        primaryButtonText={primaryButtonText}
        primaryButtonAction={() => console.log('Primary action clicked')}
        secondaryButtonText={secondaryButtonText}
        secondaryButtonLink="/contact"
        showAnimation={showAnimation}
      />
      
      {/* Example Variations */}
      <div className="container mx-auto p-6 bg-card shadow-sm rounded-lg my-8">
        <h2 className="text-2xl font-semibold mb-4">Example Variations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div 
            className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col gap-2"
            onClick={() => {
              setTitle("Ready to Level Up Your Leadership?");
              setDescription("Transform your tech leadership with personalized coaching and fractional CTO services.");
              setPrimaryButtonText("Book a Session");
              setSecondaryButtonText("Learn More");
              setShowAnimation(true);
            }}
          >
            <h3 className="text-lg font-medium">Leadership Coaching</h3>
            <p className="text-muted-foreground text-sm">Focused on leadership coaching services</p>
            <div className="mt-auto pt-4">
              <Button size="sm" variant="outline" className="w-full">Apply</Button>
            </div>
          </div>
          
          <div 
            className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col gap-2"
            onClick={() => {
              setTitle("Technical Excellence on Demand");
              setDescription("Access fractional CTO services that scale with your business needs and budget.");
              setPrimaryButtonText("Get Started");
              setSecondaryButtonText("See Pricing");
              setShowAnimation(true);
            }}
          >
            <h3 className="text-lg font-medium">Fractional CTO</h3>
            <p className="text-muted-foreground text-sm">Highlighting fractional CTO services</p>
            <div className="mt-auto pt-4">
              <Button size="sm" variant="outline" className="w-full">Apply</Button>
            </div>
          </div>
          
          <div 
            className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col gap-2"
            onClick={() => {
              setTitle("Grow Your Team's Technical Skills");
              setDescription("Structured mentoring programs designed to level up your engineering talent.");
              setPrimaryButtonText("Schedule a Call");
              setSecondaryButtonText("View Programs");
              setShowAnimation(true);
            }}
          >
            <h3 className="text-lg font-medium">Technical Mentoring</h3>
            <p className="text-muted-foreground text-sm">Focus on developer mentoring programs</p>
            <div className="mt-auto pt-4">
              <Button size="sm" variant="outline" className="w-full">Apply</Button>
            </div>
          </div>
          
          <div 
            className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col gap-2"
            onClick={() => {
              setTitle("Minimal Hero Example");
              setDescription("A clean, minimalist hero section with no animation background.");
              setPrimaryButtonText("Primary Action");
              setSecondaryButtonText("");
              setShowAnimation(false);
            }}
          >
            <h3 className="text-lg font-medium">Minimal Version</h3>
            <p className="text-muted-foreground text-sm">No background animation, single button</p>
            <div className="mt-auto pt-4">
              <Button size="sm" variant="outline" className="w-full">Apply</Button>
            </div>
          </div>
          
          <div 
            className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col gap-2"
            onClick={() => {
              setTitle("Custom Content Hero");
              setDescription("A hero section with additional content blocks below the main description.");
              setPrimaryButtonText("");
              setSecondaryButtonText("");
              setShowAnimation(true);
            }}
          >
            <h3 className="text-lg font-medium">No Buttons Example</h3>
            <p className="text-muted-foreground text-sm">Hero with no action buttons</p>
            <div className="mt-auto pt-4">
              <Button size="sm" variant="outline" className="w-full">Apply</Button>
            </div>
          </div>
          
          <div 
            className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col gap-2"
            onClick={() => {
              setTitle("Reset to Default");
              setDescription("A dedicated page for testing the animation of our Hero component");
              setPrimaryButtonText("Primary Action");
              setSecondaryButtonText("Secondary Action");
              setShowAnimation(true);
            }}
          >
            <h3 className="text-lg font-medium">Default Settings</h3>
            <p className="text-muted-foreground text-sm">Reset to the original test configuration</p>
            <div className="mt-auto pt-4">
              <Button size="sm" variant="outline" className="w-full">Apply</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Documentation section */}
      <div className="container mx-auto p-6 bg-card shadow-sm rounded-lg my-8">
        <h2 className="text-2xl font-semibold mb-4">Component Documentation</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">Hero Component Props</h3>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li><code className="text-sm bg-muted p-1 rounded">title</code>: Main heading for the hero section</li>
              <li><code className="text-sm bg-muted p-1 rounded">description</code>: Subheading text</li>
              <li><code className="text-sm bg-muted p-1 rounded">primaryButtonText</code>: Text for the primary CTA button</li>
              <li><code className="text-sm bg-muted p-1 rounded">primaryButtonAction</code>: Callback function for primary button</li>
              <li><code className="text-sm bg-muted p-1 rounded">secondaryButtonText</code>: Text for the secondary button</li>
              <li><code className="text-sm bg-muted p-1 rounded">secondaryButtonLink</code>: Route for the secondary button</li>
              <li><code className="text-sm bg-muted p-1 rounded">children</code>: Optional additional content</li>
              <li><code className="text-sm bg-muted p-1 rounded">showAnimation</code>: Toggle to show/hide background animation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Animation Performance Notes</h3>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>The animation uses SVG elements with CSS animations for better performance</li>
              <li>All colors use CSS variables for theme compatibility (dark/light mode)</li>
              <li>Animation elements are designed to be lightweight on the DOM</li>
              <li>Background uses a combination of SVG and CSS gradients for depth</li>
              <li>The component uses gradient text for better visual impact</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Accessibility Considerations</h3>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>Animation can be disabled via the <code className="text-sm bg-muted p-1 rounded">showAnimation</code> prop for users who prefer reduced motion</li>
              <li>Color contrast ratios meet WCAG AA standards in both light and dark modes</li>
              <li>Interactive elements maintain proper focus states</li>
              <li>Text remains readable at various viewport sizes</li>
              <li>Background animations don't interfere with foreground content readability</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Integration Guidance</h3>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>Place the Hero component at the top of your page layout</li>
              <li>For best visual impact, avoid placing it within a container with padding</li>
              <li>The component is optimized for viewport heights of 90vh or greater</li>
              <li>When using with other components, ensure z-index values are properly coordinated</li>
              <li>The animation is optimized for performance but should be tested on lower-end devices</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}
