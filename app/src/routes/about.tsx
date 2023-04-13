import { A, useLocation } from 'solid-start';
import Counter from '~/components/Counter';

export default function About() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? 'border-sky-600'
      : 'border-transparent hover:border-sky-600';

  return (
    <main class="text-center mx-auto text-gray-700">
      <nav class="bg-sky-800">
        <ul class="container flex items-center p-3 text-gray-200">
          <li class={`border-b-2 ${active('/')} mx-1.5 sm:mx-6`}>
            <A href="/">Home</A>
          </li>
          <li class={`border-b-2 ${active('/about')} mx-1.5 sm:mx-6`}>
            <A href="/about">About</A>
          </li>
        </ul>
      </nav>
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        About Page
      </h1>
      <Counter />
      <p class="mt-8">
        Visit{' '}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {' - '}
        <span>About Page</span>
      </p>
    </main>
  );
}
