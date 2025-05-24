import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("services", "routes/services.tsx"),
  route("fractional", "routes/fractional.tsx"),
  route("mentoring", "routes/mentoring.tsx"),
  route("coaching", "routes/coaching.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("testimonials", "testimonials/testimonials.tsx"),
  route("hero-test", "routes/hero-test.tsx"),
] satisfies RouteConfig;
