import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PricingData, Tier } from "@/types/roles";
import { FeatureList } from "./feature-list";

interface TierCardProps {
  tier: Tier;
  pricing: PricingData;
}

export const TierCard: React.FC<TierCardProps> = ({ tier, pricing }) => (
  <Card className={cn(
    "w-full",
    tier.featured && "border-indigo-600"
  )}>
    <CardHeader>
      <CardTitle className={cn(
        "text-lg",
        tier.featured ? "text-indigo-600" : "text-gray-900"
      )}>
        {tier.name}
      </CardTitle>
      <CardDescription>{tier.description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      {pricing.sections.map((section) => (
        <FeatureList key={section.name} section={section} tiers={[tier]} />
      ))}
    </CardContent>
  </Card>
);