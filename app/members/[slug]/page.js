import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EntryBand } from '../../components/Parts';
import { MEMBERS } from '../../lib/content';

export function generateStaticParams() {
  return MEMBERS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const person = MEMBERS.find((p) => p.slug === slug);
  return { title: person ? `${person.initial}｜社員紹介` : '社員紹介' };
}

export default async function Member({ params }) {
  const { slug } = await params;
  const index = MEMBERS.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const person = MEMBERS[index];
  const next = MEMBERS[(index + 1) % MEMBERS.length];

  return (
    <>
      <header className="pp">
        <p className="pp-initial" aria-hidden="true">
          {person.initial}
        </p>
        <div className="pp-text">
          <p className="pp-role">
            {person.initial}　{person.role}／{person.age}歳
          </p>
          <h1>{person.lead}</h1>
        </div>
      </header>

      <div className="pp-body">
        <aside className="pp-profile">
          <p className="sh-en">PROFILE</p>
          <p>{person.from}</p>
        </aside>
        <section className="qa">
          {person.qa.map(([q, a]) => (
            <article key={q}>
              <h2>{q}</h2>
              <p>{a}</p>
            </article>
          ))}
        </section>
      </div>

      <nav className="pp-next" aria-label="次のインタビュー">
        <Link href={`/members/${next.slug}/`}>
          <small>NEXT</small>
          {next.initial}　{next.role}
        </Link>
        <Link href="/members/">
          <small>LIST</small>
          一覧へ戻る
        </Link>
      </nav>

      <EntryBand />
    </>
  );
}
