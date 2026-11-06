import Link from 'next/link';
import { EntryBand, Go, Photo, SectionHead, Zebra } from './components/Parts';
import { FEATURES, JOBS, MEMBERS, MOVES_FROM, NUMBERS, PROJECTS, STAGES } from './lib/content';

export default function Home() {
  return (
    <>
      <section className="hero">
        <video
          className="hero-video"
          data-hero-video
          src="/video/crossing.mp4"
          poster="/img/crossing.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <h1 className="hero-title">
          <span className="hero-mask" data-drift="left">
            <span data-hero-line>未経験、</span>
          </span>
          <span className="hero-mask hero-mask-end" data-drift="right">
            <span data-hero-line>上等。</span>
          </span>
        </h1>
        <div className="hero-meta">
          <p>動画編集・Webデザイナー／Webマーケター 募集中</p>
          <p>好きを、シゴトに。一生モノのスキルを、ここから。</p>
        </div>
      </section>

      <section className="stmt">
        <h2 className="stmt-v">
          <span>良いことばかり書く</span>
          <span>求人は、やめました。</span>
        </h2>
        <div className="stmt-body">
          <Photo src="/img/hand.jpg" />
          <p className="stmt-lead">
            「フルリモートOK」「自由な働き方が叶う」。
            <br />
            そんな求人、見たことありませんか。
          </p>
          <p>
            シートエフにもフルリモートの案件はあります。でも、誰でも最初から選べるわけじゃない。自由に働くには、それだけのスキルが必要だからです。
          </p>
          <p>
            だからまず、学ぶ。未経験からWebデザインや動画編集を学ぶ研修を用意しました。フルリモートも時短も、その先で選べるようになります。
          </p>
          <p className="stmt-mark">
            <mark>将来の自由のために、今はちゃんと学ぶ。</mark>
          </p>
          <Go href="/philosophy/">シートエフについて</Go>
        </div>
      </section>

      <section className="num">
        <div className="num-big">
          <p className="num-figure">
            {NUMBERS.inexperienced.value}
            <small>{NUMBERS.inexperienced.unit}</small>
          </p>
          <p className="num-cap">{NUMBERS.inexperienced.label}</p>
          <p className="moves">前職は、{MOVES_FROM.join('、')}など。</p>
        </div>
        <dl className="num-list">
          {NUMBERS.list.map((n) => (
            <div key={n.label}>
              <dt>{n.label}</dt>
              <dd>
                {n.value}
                <small>{n.unit}</small>
              </dd>
            </div>
          ))}
          <div className="num-more">
            <Link href="/data/">データで見る当社 →</Link>
          </div>
        </dl>
      </section>

      <section className="sec">
        <SectionHead en="FEATURES" title="シートエフが、選ばれる理由。" />
        <ol className="fe-list">
          {FEATURES.slice(0, 3).map((f, i) => (
            <li key={f.title}>
              <span className="fe-no">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <Go href="/features/">特徴・強みをもっと見る</Go>
      </section>

      <Zebra />

      <section className="stages" data-stages>
        <div className="stages-track" data-stages-track>
          <header className="stages-head">
            <p>TRAINING</p>
            <h2>
              触ったことない、
              <br />
              から現場まで。
            </h2>
          </header>
          {STAGES.map((s) => (
            <article className="stage" key={s.no}>
              <p className="stage-no">{s.no}</p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              {s.tools && (
                <ul>
                  {s.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
          <div className="stage-end">
            <Go href="/work/" tone="yellow">
              仕事と研修を見る
            </Go>
          </div>
        </div>
      </section>

      <section className="sec sec-flush">
        <div className="sec-pad">
          <SectionHead en="PROJECTS" title="たとえば、こんな仕事。" />
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

      <section className="split sec">
        <Photo src="/img/room.jpg" />
        <div>
          <SectionHead en="SHARE HOUSE" title="上京するなら、部屋はある。" />
          <p>
            家具付きで、電気・ガス・水道・Wi-Fiも完備のシェアハウスを用意しています。初めての上京でも、ここから始められます。同期入社も多いので、一緒に成長する仲間もできます。
          </p>
          <div className="mt-go">
            <Go href="/benefits/">制度・福利厚生を見る</Go>
          </div>
        </div>
      </section>

      <section className="ppl">
        <SectionHead en="MEMBERS" title="別の場所から、来た人たち。" invert />
        <div className="ppl-list">
          {MEMBERS.map((p) => (
            <Link href={`/members/${p.slug}/`} key={p.slug} className="ppl-item">
              <p className="ppl-initial">{p.initial}</p>
              <p className="ppl-role">
                {p.role}／{p.age}歳
              </p>
              <p className="ppl-lead">{p.lead}</p>
            </Link>
          ))}
        </div>
        <Go href="/members/" tone="yellow">
          社員紹介を見る
        </Go>
      </section>

      <section className="sec">
        <SectionHead en="RECRUIT" title="募集中の仕事" />
        <div className="job-links">
          {JOBS.map((j) => (
            <Link key={j.id} href={`/recruit/#${j.id}`} className="job-link">
              <small>{j.no}</small>
              <h3>{j.title}</h3>
              <p>{j.catch}</p>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <EntryBand />
    </>
  );
}
