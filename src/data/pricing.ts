import { PricingData } from "@/types/roles";

export const pricingData: PricingData = {
  frequencies: [
    { value: 'monthly', label: 'Monthly' },
    { value: 'annually', label: 'Annually' },
  ],
  tiers: [
    {
      name: 'Employee',
      id: 'tier-employee',
      href: '#',
      featured: false,
      description: 'Traditional full time employee.',
      price: { monthly: '$18,750', annually: '$225,000+' },
      mainFeatures: ['Traditional', 'Long-Term', 'Deeper Culture Fit'],
    },
    {
      name: 'Fractional',
      id: 'tier-fractional',
      href: '#',
      featured: true,
      description: 'Align their actions with your company culture and long-term goals.',
      price: { monthly: '$60', annually: '$576' },
      mainFeatures: [
        'Specialized',
        'Flexibility',
        'Perspective',
        'Cost Effectiveness',
        'Mentorship',
        'Focused Tasks',
      ],
    },
    {
      name: 'Consultant',
      id: 'tier-consultant',
      href: '#',
      featured: false,
      description: 'Project specific, agreeing to accomplish tasks within set parameters.',
      price: { monthly: '$30', annually: '$288' },
      mainFeatures: ['Specialized', 'Objectivity', 'Project Based', 'No Commitment'],
    },
  ],
  sections: [
    {
      name: '',
      features: [
        { name: 'Experienced', tiers: { Employee: false, Fractional: true, Consultant: 'Sometimes' } },
        { name: 'Cost Savings', tiers: { Employee: false, Fractional: true, Consultant: 'Sometimes' } },
        { name: 'Targeted Scope', tiers: { Employee: false, Fractional: true, Consultant: true } },
        { name: 'Team Member', tiers: { Employee: true, Fractional: true, Consultant: false } },
        { name: 'Exclusive', tiers: { Employee: true, Fractional: false, Consultant: false } },
        { name: 'Mentorship', tiers: { Employee: false, Fractional: true, Consultant: 'Sometimes' } },
        { name: '3 months free advisor', tiers: { Employee: false, Fractional: true, Consultant: false } },
      ],
    },
  ],
};