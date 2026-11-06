import { EntryBand, Go, PageHead, PageNext, Photo, SectionHead, Zebra } from '../components/Parts';
import { CAREERS, FITS, MARKETER_PROJECTS, MARKETER_STEPS, PROJECTS, STAGES } from '../lib/content';

export const metadata = { title: '仕事と研修' };

export default function Work() {
  return (
    <>
      <PageHead en="WORK" title="仕事と研修" lead="働きながら、自分のペースで。ゼロから仕事にするまでの道のりです。" img="/img/learn.jpg" />

      <nav className="subnav" aria-label="ページ内">
        <a href="#creator">動画編集・Webデザイナー</a>
        <a href="#marketer">Webデザイナー・マーケター</a>
        <a href="#career">キャリア</a>
      </nav>

      <section className="sec" id="creator">
        <SectionHead en="JOB 01" title="動画編集・Webデザイナーの研修" lead="働きながら自分のペースで学べる、約1年の研修です。" />
        {STAGES.map((s) => (
          <article key={s.no} className="step">
            <p className="stage-no">{s.no}</p>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              {s.tools && (
                <ul>
                  {s.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="sec-flush">
        <div className="sec-pad">
          <SectionHead en="PROJECTS" title="お任せするプロジェクト例" />
        </div>
        <ol className="pj-list">
          {PROJECTS.map((p, i) => (
            <li key={p.title}>
              <span className="pj-no">{String(i + 1).padStart(2, '0')}</span>
              <span className="pj-title">{p.title}</span>
              <img src={p.img} alt="" loading="lazy" />
            </li>
          ))}
        </ol>
      </section>

      <Zebra />

      <section className="sec sec-ink" id="marketer">
        <SectionHead
          en="JOB 02"
          title="Webデザイナー・マーケターの研修"
          lead="子育てが落ち着いた今、私のキャリアをもう一度。最大1年のリスキリング研修で、分からないことは何度でも聞けます。"
          invert
        />
        {MARKETER_STEPS.map((s) => (
          <article key={s.no} className="step step-invert">
            <p className="stage-no">{s.no}</p>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </article>
        ))}
        <h3 className="sub-title">お任せするプロジェクト例</h3>
        <ul className="big-list big-list-sm big-list-invert">
          {MARKETER_PROJECTS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <section className="split sec" id="career">
        <Photo src="/img/jobchange.jpg" />
        <div>
          <SectionHead en="CAREER" title="進む先は、ひとつじゃない。" />
          <p>定期面談で、やってみたい案件や目指すキャリアを聞きます。実現の方法は代表・役員も一緒に考えます。経験を積めば、フリーランスや独立も目指せます。</p>
          <ul className="big-list big-list-sm">
            {CAREERS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec-accent">
        <SectionHead en="WANTED" title="きっかけは、それで十分。" lead="「デザインを仕事にしてみたい」「動画編集に興味がある」。今のスキルより、これからの成長意欲を見ています。" />
        <ul className="big-list big-list-sm">
          {FITS.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="mt-go">
          <Go href="/recruit/">募集要項を見る</Go>
        </div>
      </section>

      <PageNext current="/work/" />
      <EntryBand />
    </>
  );
}
