import Link from 'next/link';
import { EntryBand, Go, PageHead, PageNext, SectionHead } from '../components/Parts';
import { COMPANY, MEMBERS, MOVES_FROM, VOICES } from '../lib/content';

export const metadata = { title: '社員紹介' };

export default function Members() {
  return (
    <>
      <PageHead en="MEMBERS" title="社員紹介" lead="シートエフに、別の場所から来た人たちの話です。" img="/img/team.jpg" />

      <section className="ppl">
        <SectionHead en="INTERVIEW" title="3人のインタビュー" invert />
        <div className="ppl-list">
          {MEMBERS.map((p) => (
            <Link href={`/members/${p.slug}/`} key={p.slug} className="ppl-item">
              <p className="ppl-initial">{p.initial}</p>
              <p className="ppl-role">
                {p.role}／{p.age}歳
              </p>
              <p className="ppl-lead">{p.lead}</p>
              <p className="ppl-from">{p.from}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="sec">
        <SectionHead en="VOICES" title="先輩が感じた、シートエフの魅力" />
        <ul className="voices">
          {VOICES.map((v) => (
            <li key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec sec-accent two-col">
        <div>
          <SectionHead en="BEFORE" title="みんな、最初は未経験でした。" />
          <p>過去に採用した方の前職は、{MOVES_FROM.join('、')}など。在籍している社員は全員が中途入社です。</p>
        </div>
        <div>
          <SectionHead en="INSTAGRAM" title="日々の様子は、Instagramで。" />
          <p>社員インタビューや会社の様子を発信しています。</p>
          <div className="mt-go">
            <Go href={COMPANY.instagram} external>
              @recruit_ctof を見る
            </Go>
          </div>
        </div>
      </section>

      <PageNext current="/members/" />
      <EntryBand />
    </>
  );
}
