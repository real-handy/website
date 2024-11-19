import { Check, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Tier, Feature } from "@/types/roles";

export const getTierStatus = (tier: Tier, feature: Feature): React.ReactNode => {
  const status = feature.tiers[tier.name];
  if (typeof status === 'string') {
    return (
      <span className={cn(
        "text-sm font-medium",
        tier.featured ? "text-indigo-600" : "text-gray-900"
      )}>
        {status}
      </span>
    );
  }
  return (
    <>
      {status ? (
        <Check className="h-5 w-5 text-indigo-600 mx-auto" aria-hidden="true" />
      ) : (
        <X className="h-5 w-5 text-gray-400 mx-auto" aria-hidden="true" />
      )}
      <span className="sr-only">{status ? 'Yes' : 'No'}</span>
    </>
  );
};