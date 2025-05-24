// Strategic Button Usage Examples
// Following NN/g Button States + RealHandy Color Strategy

import { Button } from "@/components/ui/button";
import { Loader2, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export function ButtonExamples() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <h1 className="text-3xl font-bold text-foreground mb-8">
        Strategic Button Usage - NN/g Guidelines + RealHandy Colors
      </h1>

      {/* Primary Actions - Strategic Purple (Accent) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">
          Primary Actions (Strategic Purple - Demands Attention)
        </h2>
        <p className="text-muted-foreground">
          Use sparingly - only 1-2 per view. These grab attention with our strategic amethyst purple.
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Default variant = accent purple */}
          <Button>Get Started</Button>
          <Button size="lg">Contact Us Today</Button>
          <Button>
            <Mail className="size-4" />
            Send Message
          </Button>
          
          {/* Loading state */}
          <Button disabled={isLoading} onClick={handleSubmit}>
            {isLoading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Submit Form"
            )}
          </Button>
          
          {/* Disabled state */}
          <Button disabled>Disabled Primary</Button>
        </div>
      </section>

      {/* Secondary Actions - Strategic Brown (Primary) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">
          Secondary Actions (Strategic Brown - Supporting Foundation)
        </h2>
        <p className="text-muted-foreground">
          Use for important but supporting actions. Our grounding quicksand brown.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary">Learn More</Button>
          <Button variant="secondary" size="lg">View Portfolio</Button>
          <Button variant="secondary">
            <ArrowRight className="size-4" />
            Continue
          </Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
        </div>
      </section>

      {/* Outlined Actions - Neutral with Strategic Hover */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">
          Outlined Actions (Neutral with Purple Hover)
        </h2>
        <p className="text-muted-foreground">
          Neutral appearance that reveals strategic accent on interaction.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline">Cancel</Button>
          <Button variant="outline" size="lg">Maybe Later</Button>
          <Button variant="outline">
            View Details
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
        </div>
      </section>

      {/* Ghost Actions - Minimal Presence */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">
          Ghost Actions (Minimal Visual Weight)
        </h2>
        <p className="text-muted-foreground">
          For actions that shouldn't compete with primary content.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost">Skip</Button>
          <Button variant="ghost" size="sm">Edit</Button>
          <Button variant="ghost">
            More Options
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="ghost" disabled>Disabled Ghost</Button>
        </div>
      </section>

      {/* Destructive Actions - Strategic Orange */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">
          Destructive Actions (Atomic Tangerine - Clear Warning)
        </h2>
        <p className="text-muted-foreground">
          For dangerous actions that need clear visual warning.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="destructive">Delete Account</Button>
          <Button variant="destructive" size="lg">Remove Project</Button>
          <Button variant="destructive" disabled>Disabled Destructive</Button>
        </div>
      </section>

      {/* Link Actions - Minimal */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">
          Link Actions (Text-only with Strategic Accent)
        </h2>
        <p className="text-muted-foreground">
          For in-content links that should blend naturally.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="link">Read Documentation</Button>
          <Button variant="link" size="sm">Terms of Service</Button>
          <Button variant="link" disabled>Disabled Link</Button>
        </div>
      </section>

      {/* Strategic Usage Examples */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-primary">
          Strategic Layout Examples (Following NN/g + Color Strategy)
        </h2>
        
        {/* Hero CTA Section */}
        <div className="bg-background border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-2">Hero Section (Single Primary Action)</h3>
          <div className="text-center space-y-4">
            <h4 className="text-2xl text-foreground">Transform Your Leadership</h4>
            <p className="text-muted-foreground">Expert coaching and technical guidance</p>
            <div className="space-x-4">
              {/* Only ONE accent button per section */}
              <Button size="lg">Start Your Journey</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-background border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-2">Contact Form (Clear Action Hierarchy)</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input className="p-2 border border-border rounded" placeholder="Name" />
              <input className="p-2 border border-border rounded" placeholder="Email" />
            </div>
            <textarea className="w-full p-2 border border-border rounded" placeholder="Message" rows={3} />
            <div className="flex justify-between">
              <Button variant="ghost">Clear Form</Button>
              {/* Primary action - strategic accent */}
              <Button>Send Message</Button>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="bg-background border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-2">Navigation (Supporting Actions)</h3>
          <div className="flex justify-between items-center">
            <div className="space-x-4">
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Services</Button>
              <Button variant="ghost">Portfolio</Button>
            </div>
            {/* Single accent CTA in navigation */}
            <Button>Contact Us</Button>
          </div>
        </div>
      </section>

      {/* State Testing Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">
          Test All Button States (Hover, Focus, Active)
        </h2>
        <p className="text-muted-foreground">
          Try keyboard navigation (Tab), hover, and clicking to see all states in action.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button>Test Hover</Button>
          <Button>Test Focus (Tab)</Button>
          <Button>Test Active (Click)</Button>
          <Button variant="outline">Test Outline States</Button>
          <Button variant="secondary">Test Secondary States</Button>
          <Button variant="ghost">Test Ghost States</Button>
        </div>
      </section>
    </div>
  );
}
