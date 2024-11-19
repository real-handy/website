import React from 'react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { TierCard } from "@/components/ui/tier-card";
import { FeatureList } from "@/components/ui/feature-list";
import { pricingData } from "@/data/pricing";

export default function Roles() {
  return (
    <div className="bg-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-indigo-600 mb-4">Role Comparison</h1>
          <p className="text-gray-700">
            There are many reasons why it&#39;s best to hire leadership in-house, creating a permanent relationship and commitment. 
            There are times when fractional workers make sense. When part-time flexibility and pin-point role clarity is more 
            important than commitment.
          </p>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-8">
          {pricingData.tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} pricing={pricingData} />
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <Card className="p-6">
            <CardContent className="p-0">
              {pricingData.sections.map((section) => (
                <FeatureList key={section.name} section={section} tiers={pricingData.tiers} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}