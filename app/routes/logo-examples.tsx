import type { MetaFunction } from "@remix-run/node";
import LogoExample from "~/components/LogoExample";

export const meta: MetaFunction = () => {
  return [
    { title: "RealHandy Logo Examples" },
    { name: "description", content: "Examples of customizable RealHandy logos" },
  ];
};

export default function LogoExamplesRoute() {
  return (
    <div className="container mx-auto py-8">
      <LogoExample />
    </div>
  );
}
