import Link from 'next/link';
import { NAV, PAGE_ORDER } from '../lib/content';

export function Zebra() {
  return <div className="zebra" data-zebra aria-hidden="true" />;
}

export function Go({ href, children, tone = 'ink', external = false }) {
  const cls = `go go-${tone}`;
  const inner = (
    <>
      <span>{children}</span>
      <b aria-hidden="true">→</b>
    </>
  );
  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener">
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}

export function PageHead({ en, title, lead, img = '/img/crossing.jpg', sub = false, current }) {
  const children = NAV[0].children;
  return (
    <>
      <header className="ph">
        <div className="ph-text">
          <p className="ph-en" aria-hidden="true">
            {en}
          </p>
          <h1>{title}</h1>
          {lead && <p className="ph-lead">{lead}</p>}
        </div>
        <div className="ph-photo">
          <img src={img} alt="" />
        </div>
      </header>
      {sub && (
        <nav className="subnav" aria-label="私たちについて">
          {children.map((c) => (
            <Link key={c.href} href={c.href} aria-current={current === c.href ? 'page' : undefined}>
              {c.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}

export function SectionHead({ en, title, lead, invert = false }) {
  return (
    <header className={invert ? 'sh sh-invert' : 'sh'}>
      <p className="sh-en">{en}</p>
      <h2>{title}</h2>
      {lead && <p className="sh-lead">{lead}</p>}
    </header>
  );
}

export function Photo({ src, alt = '', accent = false }) {
  return (
    <div className={accent ? 'photo photo-accent' : 'photo'} data-wipe>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export function PageNext({ current }) {
  const index = PAGE_ORDER.findIndex((p) => p.href === current);
  const next = PAGE_ORDER[(index + 1) % PAGE_ORDER.length];
  return (
    <Link href={next.href} className="next">
      <small>NEXT</small>
      <span className="next-en">{next.en}</span>
      <span className="next-label">{next.label} →</span>
    </Link>
  );
}

export function EntryBand() {
  return (
    <section className="band">
      <video
        className="band-video"
        src="/video/crossing.mp4"
        poster="/img/crossing.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="band-body">
        <h2>
          渡るなら、
          <br />
          <span>青のうちに。</span>
        </h2>
        <p>
          まだ決めきれなくても大丈夫です。良いことも、リアルも、面談で全部話します。
          <br />
          応募から内定まで、最短1週間以内も可能です。
        </p>
        <div className="band-go">
          <Go href="/entry/" tone="accent">
            エントリーする
          </Go>
          <Go href="/entry/?type=casual" tone="white">
            カジュアル面談する
          </Go>
        </div>
      </div>
    </section>
  );
}
