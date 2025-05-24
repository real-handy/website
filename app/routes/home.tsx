import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Footer } from "../footer/footer";

export function meta() {
  return [
    { title: "RealHandy" },
    { name: "description", content: "Strategic technology vision & execution" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE || "Hello from Cloudflare!" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow">
        <Welcome message={loaderData.message} />
      </div>
      <Footer />
    </div>
  );
}
