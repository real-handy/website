# GitHub Copilot Instructions

These instructions define how GitHub Copilot should assist with this TypeScript project. The goal is to ensure consistent, high-quality code generation aligned with TypeScript conventions, modern tooling, and our architecture standards.

## 🧠 Context

- **Project Type**: react-route v7
- **Language**: TypeScript
- **Framework / Libraries**: React Router v7 / Zod / drizzle 
- **Architecture**: Domain-Driven Design / cloudflare workers / cloudflare KV / cloudflare D1
- **State Management**: zustand
- **Styling**: Tailwind CSS v4
- **Testing Framework**: vitest

## 🔧 General Guidelines

- Use idiomatic TypeScript—always prefer type safety and inference.
- Use `interface` or `type` aliases to define data structures.
- Always enable `strict` mode and follow the project's `tsconfig.json`.
- Prefer named functions, especially for reuse and testability.
- Use `async/await` over raw Promises and avoid `.then().catch()` chains.
- Keep files small, focused, and well-organized.
- Use `const` and `let` instead of `var`.
- Use `import` statements for modules and avoid CommonJS `require`.
- Use `async` functions for asynchronous code and avoid callbacks.
- Use `async`/`await` for asynchronous code and avoid callbacks.
- Use `null` and `undefined` appropriately; prefer `undefined` for optional values.
- Use `===` and `!==` for comparisons instead of `==` and `!=`.
- Use `for...of` for iterating over arrays and `for...in` for objects
- Use tailwindcss v4 for styling. Use the `@apply` directive for reusable styles. There is no tailwind.config.js file in the project. Use tailwindcss classes directly in the component and the theme in the app.css
- Use `zod` for schema validation and type inference.
- Use `drizzle` for database interactions and migrations.
- Use `zustand` for state management.

## 📁 File Structure

Use this structure as a guide when creating or updating files:

```text
app/
  | components/
    | ui/
  | lib/
  | routes/
  public/
  service-design/
tests/
  unit/
  integration/
workers/
```
app/components/ui/ is where shadcn primative components are stored. We don't edit or create our own components in this folder. We only use the components from shadcn.

## 🧶 Patterns

### ✅ Patterns to Follow
- Use **Dependency Injection** and **Separation of Concerns**.
- Validate input using [Zod](https://zod.dev/) or class-validator.
- Use custom error classes for API and business logic errors.
- Handle errors with centralized middleware.
- Use `dotenv` or similar for config management.
- Prefer `axios` or `fetch` with interceptors for API calls.
- Structure logic around clear modules and services.

### 🚫 Patterns to Avoid
- Avoid using `any` unless explicitly needed.
- Don’t duplicate logic be DRY
- Avoid deeply nested callbacks or overly clever code.
- Do not commit hardcoded secrets or tokens.
- Avoid global state unless using scoped context providers (in React).

## 🧪 Testing Guidelines

- Use `Vitest` for unit and integration tests.
- Test business logic in services; mock dependencies using `ts-mockito` for unit tests.
- Follow TDD when feasible for critical features.
- Include coverage reports and snapshot testing for UI.

## 🔁 Iteration & Review

- Always review and refine Copilot output.
- If output doesn’t follow these conventions, rewrite the prompt or break the task into smaller pieces.
- Add a comment above your cursor with intent if Copilot is giving poor suggestions.
- Avoid merging Copilot-generated code without a review.

## 🎨 SVG and Asset Guidelines
- Always use inline SVGs rather than external SVG files when customization is needed
- For SVG components that need color customization, use inline SVG with direct prop-based color control
- Do not create external CSS files for SVG styling; customize via props and inline styles
- Set reasonable defaults that work with the theme variables from app.css
- Ensure all SVGs support dark mode through theme variables

## 🌙 Dark Mode Support
- Utilize CSS variables defined in app.css for theming
- Use Tailwind's dark mode utilities (`dark:`) consistently
- Follow the pattern of `--realhandy-{property}` for light mode and `--realhandy-dark-{property}` for dark mode variables
- Test components in both light and dark modes

## 🛣️ React Router Guidelines
- Route files should be placed in `app/routes/` directory
- Each route should export a default component and metadata
- Use loader/action pattern for data handling
- Nested routes should follow the folder structure
- Reusable UI elements should be in `app/components/`

## ♿ Accessibility Standards
- Ensure all interactive elements are keyboard accessible
- Use appropriate ARIA attributes and semantic HTML
- Maintain a minimum contrast ratio of 4.5:1 for text
- Provide text alternatives for non-text content
- Test with screen readers periodically

## ☁️ Cloudflare Integration
- Use type-safe bindings for Cloudflare services
- Implement proper error handling for all Cloudflare API calls
- Cache responses appropriately according to content type
- Follow the least privilege principle when setting up KV/D1 access
- Separate business logic from Cloudflare-specific implementation

## 🔬 Scope & Task Focus
- Focus on fully completing the current task before suggesting additional work
- Be curious through questions rather than preemptively solving problems that haven't been requested
- Work incrementally, especially for complex features
- When completing a task, ask specific questions about what to tackle next
- Prioritize quality of one solution over breadth of suggestions
- Use tools to gather context when needed, but stay focused on the specific problem

## 🛠️ Development Tooling
- Use **Biome** over ESLint for code linting and formatting
- Prefer **Lefthook** over GitHub Actions for pre-commit validation
- Validate code locally through linting/testing before committing
- Run formatting checks as part of the development workflow
- Fix issues at their source rather than relying on CI/CD to catch problems
- Set up appropriate Biome and Lefthook configurations to match project requirements

## 📚 References

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React Docs](https://react.dev/reference/react)
- [Zod Docs](https://zod.dev/)
- [Drizzle Docs](https://orm.drizzle.team/)
- [Zustand Docs](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [React Router Docs](https://reactrouter.com/en/main)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vitest Docs](https://vitest.dev/)
- [Shadcn UI Docs](https://ui.shadcn.com/docs)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Cloudflare KV Docs](https://developers.cloudflare.com/workers/runtime-apis/kv/)
- [Cloudflare D1 Docs](https://developers.cloudflare.com/d1/)
- [Biome Docs](https://biomejs.dev/guides/)
- [Lefthook Docs](https://github.com/evilmartians/lefthook)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Project Style Guide](https://ts.dev/style/)