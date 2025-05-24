import React from 'react';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company }) => {
  return (
    <div className="flex flex-col p-8 bg-card text-card-foreground rounded-lg border border-border shadow-sm">
      <div className="mb-6 text-accent">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>
      <blockquote className="text-lg font-light text-muted-foreground italic mb-6">{quote}</blockquote>
      <div className="mt-auto">
        <p className="font-medium text-foreground">
          <span className="font-normal">Real</span><span className="font-bold">Handy</span> client
        </p>
        <p className="text-sm text-muted-foreground">{author}, {role}, {company}</p>
      </div>
    </div>
  );
};

export function Testimonials() {
  const testimonials = [
    {
      quote: "The team at RealHandy delivered exceptional results for our digital transformation project. Their strategic approach and technical expertise made all the difference.",
      author: "Alex Johnson",
      role: "CTO",
      company: "TechForward Inc."
    },
    {
      quote: "Working with RealHandy was refreshingly straightforward. They understood our needs perfectly and delivered a solution that exceeded our expectations.",
      author: "Samantha Lee",
      role: "Product Director",
      company: "Innovate Labs"
    },
    {
      quote: "What impressed me most about RealHandy was their ability to translate complex technical concepts into clear business value. A true partner in our digital journey.",
      author: "Marcus Chen",
      role: "CEO",
      company: "Nexus Solutions"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans text-foreground mb-4">
            <span className="font-normal">Client</span> <span className="font-bold">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't take our word for it — hear what our clients have to say
          </p>
        </div>
        
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
      </div>
    </section>
  );
}
