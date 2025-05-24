# RealHandy.tech Design System Guide

## Overview

RealHandy.tech uses a sophisticated RGB-based color system built on Tailwind CSS v4, featuring a strategic brown-purple color clash designed to create intentional visual hierarchy and user attention management. The system is architected in multiple layers for maximum flexibility and dark mode support.

## Strategic Color Philosophy

### The Brown-Purple Clash Strategy

RealHandy's color system intentionally leverages the **brown-purple color clash** as a strategic design tool:

- **Brown (Quicksand) - The Foundation**: Warm, earthy tones that naturally recede and provide grounding
- **Purple (Amethyst) - The Accent**: Cool, vibrant tones that advance visually and grab attention
- **Intentional Vibration**: The temperature conflict creates visual tension that generates energy and movement

This clash serves three strategic purposes:
1. **Clear Visual Hierarchy** - Users instantly know where to focus
2. **Emotional Engagement** - The vibration creates subconscious excitement
3. **Brand Differentiation** - Most competitors avoid "clashing" colors

## Color System Architecture

The RealHandy color system is implemented through four layers:

### 1. Named Color Palettes

Five distinct RGB-based color palettes provide the foundation:

```css
@theme {
  /* Amethyst - Strategic Purple Accent */
  --color-amethyst-400: #c589f7;  /* Primary accent - vibrates forward */
  
  /* Quicksand - Strategic Brown Foundation */
  --color-quicksand-900: #5f453d;  /* Primary - grounding, supportive */
  
  /* Alum - Neutral Grayscale System */
  --color-alum-200: rgb(229, 229, 229);  /* Primary background */
  --color-alum-950: rgb(10, 10, 10);     /* Dark mode background */
  
  /* Atomic Tangerine - Error/Destructive States */
  --color-atomic-tangerine-500: #fb4214;
  
  /* Cutty Sark - Supporting Teal (future use) */
  --color-cutty-sark-600: #455c5a;
}
```

### 2. RealHandy Brand Color Tokens

Strategic color assignments using named tokens:

```css
@theme {
  /* Light Mode Brand Colors */
  --realhandy-primary: var(--color-quicksand-900);     /* Brown foundation */
  --realhandy-accent: var(--color-amethyst-400);       /* Purple attention-grabber */
  --realhandy-background: var(--color-alum-50);        /* Clean, neutral base */
  --realhandy-destructive: var(--color-atomic-tangerine-500); /* Error states */
  
  /* Dark Mode Brand Colors */
  --realhandy-dark-primary: var(--color-quicksand-600);
  --realhandy-dark-accent: var(--color-amethyst-400);  /* Same purple - maintains brand */
  --realhandy-dark-background: var(--color-alum-950);
}
```

### 3. CSS Variable Mapping

Brand tokens are mapped to standard CSS variables for Tailwind integration:

```css
:root {
  --primary: var(--realhandy-primary);
  --accent: var(--realhandy-accent);
  --background: var(--realhandy-background);
  /* Additional mappings... */
}

.dark {
  --primary: var(--realhandy-dark-primary);
  --accent: var(--realhandy-dark-accent);
  --background: var(--realhandy-dark-background);
  /* Additional mappings... */
}
```

### 4. Tailwind Token Mapping

Tailwind's color tokens are mapped to the CSS variables in the inline theme:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-accent: var(--accent);
  /* Additional mappings... */
}
```

This four-layer approach ensures:
1. **Strategic Color Control** - Named palettes enable intentional color psychology
2. **Brand Consistency** - RealHandy tokens maintain strategic color relationships
3. **Dark Mode Support** - Both `.dark` class and `prefers-color-scheme` work correctly
4. **Developer Experience** - Standard Tailwind utilities work with custom colors

## Complete Color Palette Reference

### Amethyst (Strategic Purple)
The forward-advancing accent color that creates visual pop:

| Token | Value | Usage |
|-------|-------|-------|
| `amethyst-50` | `#faf5ff` | Subtle backgrounds |
| `amethyst-100` | `#f4e9fe` | Light backgrounds |
| `amethyst-200` | `#ebd7fd` | Borders, dividers |
| `amethyst-300` | `#dbb7fb` | Disabled states |
| `amethyst-400` | `#c589f7` | **Primary accent - CTA buttons, links** |
| `amethyst-500` | `#a649ef` | Hover states |
| `amethyst-600` | `#9b3ae3` | Active states |
| `amethyst-700` | `#8629c7` | Text on light backgrounds |
| `amethyst-800` | `#7026a3` | Dark text |
| `amethyst-900` | `#5c2083` | Darkest text |
| `amethyst-950` | `#3f0b60` | Deepest contrast |

### Quicksand (Strategic Brown)
The grounding foundation color that supports without competing:

| Token | Value | Usage |
|-------|-------|-------|
| `quicksand-50` | `#faf7f6` | Subtle backgrounds |
| `quicksand-100` | `#f5edeb` | Light backgrounds |
| `quicksand-200` | `#eddfdb` | Borders, dividers |
| `quicksand-300` | `#e0c8c1` | Disabled states |
| `quicksand-400` | `#c59b8e` | Secondary text |
| `quicksand-500` | `#b8897b` | Medium text |
| `quicksand-600` | `#a17061` | **Dark mode primary** |
| `quicksand-700` | `#865c4f` | Strong text |
| `quicksand-800` | `#704e44` | Headers |
| `quicksand-900` | `#5f453d` | **Primary - main text, borders** |
| `quicksand-950` | `#32221d` | Deepest contrast |

### Alum (Neutral Grayscale)
The sophisticated neutral system with alum-200 as the strategic background:

| Token | Value | Usage |
|-------|-------|-------|
| `alum-50` | `rgb(250, 250, 250)` | Card backgrounds |
| `alum-100` | `rgb(245, 245, 245)` | Secondary backgrounds |
| `alum-200` | `rgb(229, 229, 229)` | **Primary background** |
| `alum-300` | `rgb(212, 212, 212)` | Borders, inputs |
| `alum-400` | `rgb(163, 163, 163)` | Placeholder text |
| `alum-500` | `rgb(115, 115, 115)` | Secondary text |
| `alum-600` | `rgb(82, 82, 82)` | Muted text |
| `alum-700` | `rgb(64, 64, 64)` | Strong text |
| `alum-800` | `rgb(38, 38, 38)` | Dark mode secondary |
| `alum-900` | `rgb(23, 23, 23)` | Primary text |
| `alum-950` | `rgb(10, 10, 10)` | **Dark mode background** |

### Atomic Tangerine (Error States)
Vibrant orange for error and destructive actions:

| Token | Value | Usage |
|-------|-------|-------|
| `atomic-tangerine-400` | `#fc693b` | Dark mode errors |
| `atomic-tangerine-500` | `#fb4214` | **Primary error color** |
| `atomic-tangerine-600` | `#ec270a` | Error hover states |

### Cutty Sark (Supporting Teal)
Reserved for future expansion and accent variations:

| Token | Value | Usage |
|-------|-------|-------|
| `cutty-sark-600` | `#455c5a` | Supporting elements |

## Strategic Color Usage Guidelines

### Primary Actions & Text
- **Use Quicksand-900** for primary text, buttons, and structural elements
- Creates the foundational layer that doesn't compete for attention
- Provides warmth and approachability while maintaining readability

### Accent & Attention
- **Use Amethyst-400** for CTAs, links, and elements requiring immediate attention
- The cool purple naturally advances against the warm brown foundation
- Creates the intentional "visual vibration" that drives user action

### Background Hierarchy
- **Primary**: Alum-200 for main page backgrounds
- **Secondary**: Alum-100 for card and section backgrounds
- **Tertiary**: Alum-50 for elevated elements like modals

### Error Handling
- **Use Atomic-tangerine-500** for error states and destructive actions
- Complements the brown-purple system without competing

## Color Theory Behind the Strategy

### Why Brown-Purple Creates Effective Tension

1. **Temperature Conflict**: Warm brown vs. cool purple creates visual energy
2. **Saturation Imbalance**: High-saturation purple pops against muted brown
3. **Psychological Dissonance**: Unexpected combination holds attention longer
4. **Optical Vibration**: Colors appear to "move" against each other

### Strategic Benefits

- **Instant Hierarchy**: Purple elements immediately draw focus
- **Memorable Brand**: Unexpected combinations increase brand recall
- **Conversion Optimization**: Clear visual priority guides user actions
- **Reduced Decision Fatigue**: Obvious visual cues simplify user choices

## Usage in Components

The RealHandy color system is applied globally through Tailwind CSS v4's theming system. Use the strategic color assignments to create effective visual hierarchy:

### Strategic Color Application

```tsx
// Primary content using the brown foundation
<div className="bg-background text-foreground">
  <h1 className="text-primary">Grounding Headline</h1>
  <p className="text-foreground">Supporting content that doesn't compete</p>
</div>

// Accent elements that demand attention
<button className="bg-accent text-accent-foreground hover:bg-accent/90">
  Call to Action  {/* Purple - advances visually */}
</button>

// Error states with complementary orange
<div className="bg-destructive text-destructive-foreground">
  Error message
</div>
```

### Color Hierarchy in Practice

```tsx
// Page-level hierarchy
<main className="bg-background">
  {/* Primary content layer - brown foundation */}
  <section className="bg-secondary">
    <h2 className="text-primary">Service Overview</h2>
    <p className="text-muted-foreground">Descriptive content</p>
    
    {/* Accent layer - purple for attention */}
    <button className="bg-accent text-accent-foreground">
      Get Started
    </button>
  </section>
</main>
```

### Dark Mode Behavior

The system automatically handles dark mode transitions while maintaining the strategic color relationships:

```tsx
// Automatically adapts to dark mode
<div className="bg-background text-foreground">
  {/* Light: alum-50 background, alum-900 text */}
  {/* Dark: alum-950 background, alum-50 text */}
  
  <button className="bg-primary text-primary-foreground">
    {/* Light: quicksand-900 bg, quicksand-100 text */}
    {/* Dark: quicksand-600 bg, quicksand-50 text */}
    Primary Action
  </button>
  
  <button className="bg-accent text-accent-foreground">
    {/* Same amethyst-400 in both modes - maintains brand recognition */}
    Accent Action
  </button>
</div>
```

## Typography

RealHandy uses a dual type treatment for the brand name:

- "Real" - Regular font weight
- "Handy" - Bold font weight
- ".tech" - Accent color

Example:
```tsx
<div className="realhandy">
  <h1 className="font-sans text-foreground">
    <span className="font-normal">Real</span><span className="font-bold">Handy</span>
    <span className="text-accent">.tech</span>
  </h1>
</div>
```

## Components

The design system uses shadcn UI components with custom styling applied through the RealHandy theme variables.

### Welcome Component

The Welcome component showcases the dual type treatment for the RealHandy brand. It features:
- A large hero text with "Real" in normal weight and "Handy" in bold
- The ".tech" suffix in accent color
- A subheading with a description of services
- A prominent call-to-action button

```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-sans text-foreground">
  <span className="font-normal">Real</span><span className="font-bold">Handy</span>
  <span className="text-accent">.tech</span>
</h1>
```

### Services Component

The Services component displays service offerings in a responsive grid layout:
- Card-based design with consistent padding and spacing
- Accent-colored icons for visual interest
- Consistent typography using the RealHandy dual type treatment
- Responsive grid that adjusts from 1 to 4 columns based on screen size

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {services.map((service, index) => (
    <ServiceItem 
      key={index} 
      title={service.title} 
      description={service.description} 
      icon={service.icon} 
    />
  ))}
</div>
```

### Testimonials Component

The Testimonials component showcases client feedback in a visually appealing way:
- Clean card design with subtle border and shadow effects
- Large quote icon in accent color for visual impact
- Consistent typography with the RealHandy brand treatment
- Responsive grid layout that adjusts based on screen size

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {testimonials.map((testimonial, index) => (
    <Testimonial 
      key={index} 
      quote={testimonial.quote}
      author={testimonial.author}
      role={testimonial.role}
      company={testimonial.company}
    />
  ))}
</div>
```

### Contact Component

The Contact component provides a user-friendly way for clients to get in touch:
- Two-column layout with contact information and form
- Consistent use of accent color for icons and interactive elements
- Responsive design that stacks columns on mobile devices
- Form inputs with proper focus states using the theme's ring color

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
    {/* Contact information */}
  </div>
  
  <form className="bg-card p-8 rounded-lg border border-border shadow-sm">
    {/* Contact form */}
  </form>
</div>
```

### Footer Component

The Footer component provides site navigation and brand reinforcement:
- Four-column layout that stacks on mobile devices
- Consistent use of the RealHandy dual type treatment
- Subtle border to create visual separation
- Hover effects using the accent color for interactive elements

```tsx
<footer className="bg-card text-card-foreground py-8 px-4 border-t border-border">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Footer columns */}
    </div>
    
    <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
      {/* Copyright and social links */}
    </div>
  </div>
</footer>
```

## Layout Guidelines

The RealHandy design system follows strategic layout principles that support the brown-purple color hierarchy:

### Visual Hierarchy Principles

1. **Foundation First**: Use brown (primary) colors for structural elements that provide context
2. **Accent Sparingly**: Reserve purple (accent) for 1-2 key actions per view
3. **Neutral Support**: Use alum grays for content that shouldn't compete
4. **Strategic Contrast**: Leverage the color clash to guide user attention

### Layout Patterns

- **Clean, minimalist layouts** with strategic color placement
- **Full-width sections** for visual impact without color overwhelm
- **Grid-based layouts** that use color to create visual rhythm
- **Ample white space** (alum backgrounds) to let colors breathe
- **Strategic testimonial placement** using muted colors between vibrant sections

#### 1. Header Section with Strategic Color Hierarchy
```tsx
<header className="bg-background">
  <h1 className="text-foreground">
    {/* Foundation text - doesn't compete */}
    <span className="font-normal">Real</span>
    <span className="font-bold">Handy</span>
    <span className="text-accent">.tech</span> {/* Accent - draws attention */}
  </h1>
  <p className="text-muted-foreground">Supporting description</p>
  <button className="bg-accent text-accent-foreground">
    Get Started {/* Single accent action */}
  </button>
</header>
```

#### 2. Content Sections with Color Rhythm
```tsx
<main>
  {/* Primary content - brown foundation */}
  <section className="bg-background text-foreground">
    <h2 className="text-primary">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Cards use muted colors for content */}
      <div className="bg-secondary border border-border">
        <h3 className="text-foreground">Service Title</h3>
        <p className="text-muted-foreground">Description</p>
      </div>
    </div>
  </section>
  
  {/* Accent section - single purple CTA */}
  <section className="bg-muted py-16 text-center">
    <h2 className="text-foreground mb-8">Ready to Get Started?</h2>
    <button className="bg-accent text-accent-foreground px-8 py-4">
      Contact Us {/* Strategic accent placement */}
    </button>
  </section>
</main>
```

#### 3. Navigation with Color Hierarchy
```tsx
<nav className="bg-background border-b border-border">
  <div className="flex items-center justify-between">
    <div className="text-primary font-bold">RealHandy.tech</div>
    <div className="space-x-6">
      <a href="#" className="text-muted-foreground hover:text-foreground">
        About
      </a>
      <a href="#" className="text-muted-foreground hover:text-foreground">
        Services
      </a>
      <button className="bg-accent text-accent-foreground px-4 py-2">
        Contact {/* Single accent action in nav */}
      </button>
    </div>
  </div>
</nav>
```

### Advanced Layout Patterns

The RealHandy design system implements several sophisticated layout patterns that leverage the strategic color system:

#### 1. Hero Section with Color Progression
- **Background**: Alum-200 (neutral foundation)
- **Primary Text**: Quicksand-900 (grounding headline)
- **Accent Element**: Amethyst-400 (single CTA that pops)
- **Supporting Text**: Alum-600 (doesn't compete)

```tsx
<section className="bg-background py-20">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-6xl text-primary mb-6">
      Transform Your Business
    </h1>
    <p className="text-xl text-muted-foreground mb-8">
      Expert leadership coaching and technical guidance
    </p>
    <button className="bg-accent text-accent-foreground px-8 py-4 text-lg">
      Start Your Journey
    </button>
  </div>
</section>
```

#### 2. Services Grid with Strategic Color Distribution
- **Card Backgrounds**: Alum-100 (secondary level)
- **Content Text**: Alum-700 (readable without competing)
- **Icons**: Amethyst-400 (small accent touches)
- **No primary CTA**: Avoids color competition

```tsx
<section className="bg-muted py-16">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl text-center text-primary mb-12">
      Our Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div key={service.id} className="bg-background p-6 rounded-lg">
          <div className="text-accent mb-4">{service.icon}</div>
          <h3 className="text-xl text-foreground mb-3">{service.title}</h3>
          <p className="text-muted-foreground">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

#### 3. Testimonial Section with Neutral Emphasis
- **Background**: Slightly darker alum for contrast
- **Quotes**: Foreground text for readability
- **Attribution**: Muted colors to de-emphasize
- **No competing accents**: Lets content speak

```tsx
<section className="bg-secondary py-16">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl text-center text-primary mb-12">
      Client Success Stories
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-background p-6 rounded-lg">
          <blockquote className="text-foreground mb-4">
            "{testimonial.quote}"
          </blockquote>
          <cite className="text-muted-foreground">
            — {testimonial.author}, {testimonial.company}
          </cite>
        </div>
      ))}
    </div>
  </div>
</section>
```

#### 4. Contact Section with Strategic CTA Placement
- **Two-column layout**: Information vs. action
- **Single accent CTA**: Form submit button only
- **Supporting information**: Neutral colors
- **Clear hierarchy**: One obvious next action

```tsx
<section className="bg-background py-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div>
      <h2 className="text-3xl text-primary mb-6">Get In Touch</h2>
      <p className="text-muted-foreground mb-6">
        Ready to transform your business? Let's discuss your needs.
      </p>
      <div className="space-y-4 text-muted-foreground">
        <div>📧 hello@realhandy.tech</div>
        <div>📞 (555) 123-4567</div>
      </div>
    </div>
    
    <form className="bg-secondary p-8 rounded-lg">
      <div className="space-y-4">
        <input 
          className="w-full p-3 border border-border rounded"
          placeholder="Your Name"
        />
        <input 
          className="w-full p-3 border border-border rounded"
          placeholder="Your Email"
        />
        <textarea 
          className="w-full p-3 border border-border rounded h-32"
          placeholder="Your Message"
        />
        <button className="w-full bg-accent text-accent-foreground py-3 rounded">
          Send Message
        </button>
      </div>
    </form>
  </div>
</section>
```

#### 5. Footer with Brand Reinforcement
- **Subtle background**: Maintains hierarchy
- **Brand prominence**: RealHandy dual treatment
- **Supporting links**: Muted to not compete
- **No accent colors**: Footer is informational, not actionable

```tsx
<footer className="bg-secondary border-t border-border py-12">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="text-primary font-bold text-xl mb-4">
          <span className="font-normal">Real</span>
          <span className="font-bold">Handy</span>
          <span className="text-accent">.tech</span>
        </div>
        <p className="text-muted-foreground">
          Expert leadership coaching and technical guidance.
        </p>
      </div>
      
      <div>
        <h4 className="text-foreground font-semibold mb-4">Services</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li><a href="#" className="hover:text-foreground">Leadership Coaching</a></li>
          <li><a href="#" className="hover:text-foreground">Technical Guidance</a></li>
          <li><a href="#" className="hover:text-foreground">Team Development</a></li>
        </ul>
      </div>
      
      {/* Additional footer columns... */}
    </div>
  </div>
</footer>
```

### Color Application Best Practices

1. **One Accent Per View**: Use amethyst-400 sparingly - typically 1-2 elements maximum
2. **Brown Foundation**: Use quicksand colors for primary text and structural elements
3. **Neutral Support**: Use alum colors for content that shouldn't compete for attention
4. **Strategic Contrast**: Place accent colors against neutral backgrounds for maximum impact
5. **Consistent Hierarchy**: Maintain the same color relationships across all layouts

### Theme Application

The RealHandy theme is applied globally, so you can use the theme tokens directly throughout your components:

```tsx
// Using theme tokens at the page level
export default function Page() {
  return (
    <div>
      <Header />
      <main className="bg-background text-foreground">
        {/* All content in this page will use the RealHandy theme */}
        <Section />
        <TestimonialBlock />
      </main>
      <Footer />
    </div>
  );
}

// Using theme tokens at a section level
function ServiceSection() {
  return (
    <section className="bg-muted py-16">
      <h2 className="text-foreground text-3xl font-bold">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service cards will use RealHandy theme */}
      </div>
    </section>
  );
}

## Button Component System

The RealHandy design system uses shadcn/ui Button components that implement the Nielsen Norman Group's button state guidelines with our strategic color system.

### Button Variants & Strategic Usage

#### 1. **Default (Primary Action) - Strategic Purple**
```tsx
<Button>Get Started</Button>
<Button size="lg">Contact Us Today</Button>
```
- **Color**: Amethyst-400 (our strategic accent purple)
- **Usage**: 1-2 per view maximum - demands immediate attention
- **Purpose**: Primary conversions, key CTAs that drive business goals

#### 2. **Secondary - Strategic Brown**
```tsx
<Button variant="secondary">Learn More</Button>
<Button variant="secondary" size="lg">View Portfolio</Button>
```
- **Color**: Quicksand-900 (our grounding brown foundation)
- **Usage**: Important supporting actions that don't compete with primary
- **Purpose**: Secondary navigation, alternative paths

#### 3. **Outline - Neutral with Strategic Hover**
```tsx
<Button variant="outline">Maybe Later</Button>
<Button variant="outline">View Details</Button>
```
- **Color**: Border-only, reveals accent purple on hover
- **Usage**: Cancel actions, alternative options
- **Purpose**: Lower-commitment actions, "escape" options

#### 4. **Ghost - Minimal Presence**
```tsx
<Button variant="ghost">Skip</Button>
<Button variant="ghost" size="sm">Edit</Button>
```
- **Color**: Transparent background, text-only
- **Usage**: In-content actions that shouldn't dominate
- **Purpose**: Utility actions, less important navigation

#### 5. **Destructive - Warning Orange**
```tsx
<Button variant="destructive">Delete Account</Button>
<Button variant="destructive">Remove Project</Button>
```
- **Color**: Atomic-tangerine-500 (clear warning signal)
- **Usage**: Dangerous or irreversible actions
- **Purpose**: Clear visual warning for destructive operations

#### 6. **Link - Text-only**
```tsx
<Button variant="link">Read Documentation</Button>
<Button variant="link" size="sm">Terms of Service</Button>
```
- **Color**: Accent text with underline on hover
- **Usage**: In-content links, fine print actions
- **Purpose**: Seamless integration with text content

### Button States (NN/g Compliant)

Our buttons automatically implement all required interaction states:

#### **Enabled State** (High Contrast)
- Clear visual hierarchy with strategic colors
- Ready for immediate interaction
- Strong contrast ratios for accessibility

#### **Hover State** (150-200ms transition)
```css
/* Automatically applied */
hover:bg-accent/90  /* Slight darkening */
transition-all duration-150  /* Smooth transition */
```

#### **Focus State** (100-150ms transition)
```css
/* Keyboard navigation */
focus-visible:ring-ring/50
focus-visible:ring-[3px]
focus-visible:duration-100
```

#### **Active/Pressed State** (100-150ms feedback)
```css
/* Immediate visual feedback */
active:bg-accent/95
active:scale-[0.98]
active:duration-100
```

#### **Disabled State** (Muted appearance)
```css
/* Clear unavailability */
disabled:opacity-50
disabled:pointer-events-none
disabled:cursor-not-allowed
```

#### **Loading State**
```tsx
<Button disabled={isLoading}>
  {isLoading ? (
    <>
      <Loader2 className="size-4 animate-spin" />
      Sending...
    </>
  ) : (
    "Submit Form"
  )}
</Button>
```

### Strategic Button Placement

#### **Hero Sections** (Single Primary Action)
```tsx
<section className="text-center">
  <h1 className="text-primary">Transform Your Leadership</h1>
  <p className="text-muted-foreground">Expert coaching and guidance</p>
  <div className="space-x-4">
    <Button size="lg">Start Your Journey</Button>  {/* ONE accent */}
    <Button variant="outline" size="lg">Learn More</Button>
  </div>
</section>
```

#### **Forms** (Clear Action Hierarchy)
```tsx
<form>
  {/* Form fields */}
  <div className="flex justify-between">
    <Button variant="ghost">Clear Form</Button>
    <Button>Send Message</Button>  {/* Primary action */}
  </div>
</form>
```

#### **Navigation** (Supporting Actions)
```tsx
<nav className="flex justify-between">
  <div className="space-x-4">
    <Button variant="ghost">About</Button>
    <Button variant="ghost">Services</Button>
    <Button variant="ghost">Portfolio</Button>
  </div>
  <Button>Contact Us</Button>  {/* Single CTA */}
</nav>
```

#### **Card Actions** (Contextual Choices)
```tsx
<div className="bg-card p-6">
  <h3 className="text-foreground">Service Package</h3>
  <p className="text-muted-foreground">Description</p>
  <div className="flex gap-2 mt-4">
    <Button variant="outline" size="sm">Learn More</Button>
    <Button size="sm">Choose Plan</Button>  {/* Conversion action */}
  </div>
</div>
```

### Accessibility Best Practices

1. **Keyboard Navigation**: All buttons support focus-visible states
2. **Screen Readers**: Use semantic `<button>` elements (never `<div>`)
3. **Color Independence**: Information isn't conveyed by color alone
4. **Loading States**: Provide clear feedback during async operations
5. **Error States**: Use `aria-invalid` for form validation feedback

### Testing Your Button Implementation

1. **Visual Hierarchy Test**: Can users identify the primary action within 3 seconds?
2. **Hover Test**: Do all hover states provide appropriate feedback?
3. **Keyboard Test**: Can you navigate and activate all buttons with Tab and Enter?
4. **Mobile Test**: Are touch targets at least 44px on mobile?
5. **Color Contrast Test**: Do all states meet WCAG AA standards?
6. **Loading Test**: Do async actions provide clear feedback?

### Common Anti-patterns to Avoid

❌ **Multiple Primary Actions**
```tsx
{/* DON'T - Competing accent buttons */}
<Button>Get Started</Button>
<Button>Contact Us</Button>
<Button>Learn More</Button>
```

✅ **Clear Hierarchy**
```tsx
{/* DO - Single primary with supporting actions */}
<Button>Get Started</Button>
<Button variant="outline">Contact Us</Button>
<Button variant="ghost">Learn More</Button>
```

❌ **Inconsistent States**
```tsx
{/* DON'T - Manual color overrides */}
<Button className="bg-red-500 hover:bg-red-600">
  Custom Button
</Button>
```

✅ **Use Semantic Variants**
```tsx
{/* DO - Use proper variant */}
<Button variant="destructive">
  Delete Item
</Button>
```

### Writing for Visual Hierarchy

- **Headlines**: Use concise, impactful text that works with brown (primary) colors
- **Supporting Text**: Write clear descriptions that don't compete with accent elements
- **CTAs**: Create compelling action phrases worthy of the purple accent treatment
- **Value Proposition**: Lead with clear benefits that justify the visual prominence

### Content-Color Relationships

1. **Primary Headlines** (Quicksand colors): Strong, foundational statements
2. **Supporting Content** (Alum colors): Informative but non-competing text
3. **Call-to-Action Text** (Amethyst colors): Compelling, action-oriented phrases
4. **Error Messages** (Atomic Tangerine): Clear, helpful guidance

### Strategic Content Placement

- **Single CTA per section**: Support the one-accent-per-view principle
- **Progressive disclosure**: Use color hierarchy to guide information consumption
- **Social proof**: Place testimonials in neutral colors to build trust without distraction
- **Contact information**: Present clearly without competing for primary action

## Development Guidelines

### Implementation Best Practices

1. **Use Semantic Color Names**: Always use `bg-accent` instead of `bg-amethyst-400`
2. **Respect the Hierarchy**: Don't create competing accent elements
3. **Test in Both Modes**: Verify color relationships work in light and dark themes
4. **Validate Contrast**: Ensure accessibility standards are met
5. **Document Deviations**: If you must break the pattern, document why

### Code Organization

```tsx
// ✅ Good - Uses semantic color tokens
<button className="bg-accent text-accent-foreground hover:bg-accent/90">
  Primary Action
</button>

// ❌ Avoid - Uses specific color values
<button className="bg-amethyst-400 text-white hover:bg-amethyst-500">
  Primary Action
</button>

// ✅ Good - Single accent per view
<section>
  <h2 className="text-primary">Section Title</h2>
  <p className="text-muted-foreground">Supporting content</p>
  <button className="bg-accent text-accent-foreground">One CTA</button>
</section>

// ❌ Avoid - Multiple competing accents
<section>
  <h2 className="text-accent">Section Title</h2>
  <p className="text-foreground">Supporting content</p>
  <button className="bg-accent text-accent-foreground">CTA One</button>
  <button className="bg-accent text-accent-foreground">CTA Two</button>
</section>
```

### Accessibility Considerations

The color system is designed with accessibility in mind:

- **Contrast Ratios**: All color combinations meet WCAG AA standards
- **Color Independence**: Information is never conveyed by color alone
- **Focus States**: Ring colors provide clear focus indication
- **Dark Mode**: Automatic adaptation maintains accessibility

### Testing Your Implementation

1. **Visual Hierarchy Test**: Can users immediately identify the primary action?
2. **Color Relationship Test**: Do brown and purple elements create the intended tension?
3. **Accessibility Test**: Do all colors meet contrast requirements?
4. **Dark Mode Test**: Does the strategic relationship hold in dark mode?
5. **Mobile Test**: Does the hierarchy work on smaller screens?

## Responsive Design

The color system adapts seamlessly across breakpoints while maintaining strategic relationships:

### Mobile-First Color Strategy

- **Preserve Accent Hierarchy**: Single CTA remains prominent on mobile
- **Readable Text Sizes**: Use appropriate text colors for smaller screens
- **Touch Targets**: Ensure accent-colored buttons meet touch guidelines
- **Simplified Layouts**: Reduce visual complexity while maintaining color strategy

### Responsive Modifiers

```tsx
// Responsive color application
<div className="bg-background md:bg-secondary">
  <h1 className="text-2xl md:text-4xl lg:text-6xl text-primary">
    Responsive Headline
  </h1>
  <button className="w-full md:w-auto bg-accent text-accent-foreground">
    Responsive CTA
  </button>
</div>
```

All components should maintain the strategic color relationships across:
- `sm:` Small screens (≥640px)
- `md:` Medium screens (≥768px)  
- `lg:` Large screens (≥1024px)
- `xl:` Extra large screens (≥1280px)
- `2xl:` Extra extra large screens (≥1536px)
