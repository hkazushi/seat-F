import { Go, PageHead, Photo, SectionHead, Zebra } from '../components/Parts';
import { FAQ, FLOW, HONEST, JOBS, REQUIREMENTS } from '../lib/content';

export const metadata = { title: '採用情報' };

export default function Recruit() {
  return (
    <>
      <PageHead en="RECRUIT" title="採用情報" lead="好きをシゴトにしませんか？" img="/img/crossing.jpg" />

      <nav className="subnav" aria-label="ページ内">
        <a href="#creator">動画編集・Webデザイナー</a>
        <a href="#marketer">Webデザイナー・マーケター</a>
        <a href="#requirements">募集要項</a>
        <a href="#flow">選考の流れ</a>
        <a href="#faq">よくある質問</a>
      </nav>

      {JOBS.map((j) => (
        <section className="split sec job" id={j.id} key={j.id}>
          <Photo src={j.img} />
          <div>
            <SectionHead en={j.no} title={j.title} lead={j.catch} />
            <p>{j.body}</p>
            <dl className="spec spec-tight">
              <div>
                <dt>研修</dt>
                <dd>{j.training}</dd>
              </div>
              <div>
                <dt>こんな方に</dt>
                <dd>
                  {j.wants.map((w) => (
                    <span key={w} className="spec-line">
                      {w}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="mt-go">
              <Go href={`/work/#${j.id}`}>仕事と研修を詳しく見る</Go>
            </div>
          </div>
        </section>
      ))}

      <section className="sec sec-gray" id="requirements">
        <SectionHead en="REQUIREMENTS" title="募集要項" lead="2職種共通です。" />
        <dl className="spec">
          {REQUIREMENTS.map((r) => (
            <div key={r.label}>
              <dt>{r.label}</dt>
              <dd>
                {r.lines.map((l) => (
                  <span key={l} className="spec-line">
                    {l}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="sec">
        <SectionHead en="HONESTLY" title="入社前に、知っておいてほしいこと。" />
        <ul className="honest honest-light">
          {HONEST.map((h) => (
            <li key={h.title}>
              <h3>{h.title}</h3>
              <p>{h.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <Zebra />

      <section className="sec sec-ink" id="flow">
        <SectionHead en="FLOW" title="選考の流れ" invert />
        <ol className="flow">
          {FLOW.map((f) => (
            <li key={f.no}>
              <span className="flow-no">{f.no}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </li>
          ))}
        </ol>
        <p className="data-note">
          カジュアル面談も相談できます。結果は合否に関わらずご連絡します。応募の秘密は厳守します。応募書類は返却できません。
        </p>
        <div className="band-go mt-go">
          <Go href="/entry/" tone="accent">
            エントリーする
          </Go>
          <Go href="/entry/?type=casual" tone="white">
            カジュアル面談する
          </Go>
        </div>
      </section>

      <section className="sec" id="faq">
        <SectionHead en="FAQ" title="よくある質問" />
        <div className="faq">
          {FAQ.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
