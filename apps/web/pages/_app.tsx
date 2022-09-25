import { AppProps } from 'next/app';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="app">
        <div className="md:flex">
          <div className="mt-4 md:mt-0 md:ml-6">
            <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
              Marketing
            </div>
            <a
              href="/get-started"
              className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-600">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>

        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
