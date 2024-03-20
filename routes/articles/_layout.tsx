import { FreshContext } from "$fresh/server.ts"
import Header from "../../islands/Header.tsx" 

export default async function Layout(req: Request, ctx: FreshContext) {

  return (
    <main class="bg-gray-900 bg-center bg-repeat bg-[url('bg.svg')]">
      <Header />
      <ctx.Component/>
    </main>
  );
}