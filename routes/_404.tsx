import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Uhoooh FOURohFOUR</title>
      </Head>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="it is RANDY!"
          />
          <h1 class="text-4xl text-blue-400 font-bold">404 - Page not found</h1>
          <p class="my-4 text-blue-100">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" class="underline text-blue-600">Go back home</a>
        </div>
      </div>
    </>
  );
}
