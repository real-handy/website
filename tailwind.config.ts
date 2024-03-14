import { type Config } from "tailwindcss";
import type from "@tailwindcss/typography";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme:{
    extend:{},
  },
  plugins: [
    type
  ],
} satisfies Config;
