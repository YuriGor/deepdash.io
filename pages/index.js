import Link from 'next/link';
import Header from '../components/header';

export default () => (
  <main>
    <Header />
    <section>
      <Link href="/about">
        <a>Go to About Me (test Now For GitHub deployment)</a>
      </Link>
    </section>
  </main>
);
