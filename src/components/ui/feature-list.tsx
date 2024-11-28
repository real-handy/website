import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Tier, Section } from "@/types/roles";
import { getTierStatus } from "@/components/ui/tier-status";

interface FeatureListProps {
  section: Section;
  tiers: Tier[];
}

export const FeatureList: React.FC<FeatureListProps> = ({ section, tiers }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-1/4">Feature</TableHead>
        {tiers.map((tier) => (
          <TableHead 
            key={tier.id}
            className={cn(
              "text-center",
              tier.featured ? "text-indigo-600" : "text-gray-900"
            )}
          >
            {tier.name}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {section.features.map((feature) => (
        <TableRow key={feature.name}>
          <TableCell className="font-medium">{feature.name}</TableCell>
          {tiers.map((tier) => (
            <TableCell key={tier.id} className="text-center">
              {getTierStatus(tier, feature)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);