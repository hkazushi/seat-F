import { EntryBand, PageHead, PageNext, SectionHead, Zebra } from '../components/Parts';
import { CLIENT_FIELDS, COMPARES, DATA, MOVES_FROM } from '../lib/content';

export const metadata = { title: 'データで見る当社' };

export default function Data() {
  return (
    <>
      <PageHead en="DATA" title="データで見る当社" lead="良いところも、そのままの数字で。" img="/img/city.jpg" sub current="/data/" />

      <section className="data-grid">
        {DATA.map((d, i) => (
          <article key={d.label} className={i === 0 ? 'stat stat-lead' : 'stat'}>
            <h2>{d.label}</h2>
            <p className="stat-value">
              {d.value}
              <small>{d.unit}</small>
            </p>
            {d.note && <p>{d.note}</p>}
          </article>
        ))}
      </section>

      <section className="sec sec-ink">
        <SectionHead en="COMPARE" title="全国平均と比べると。" invert />
        <div className="compare">
          {COMPARES.map((c) => (
            <article key={c.label}>
              <h3>{c.label}</h3>
              <div className="compare-row">
                <p>
                  <small>全国平均</small>
                  {c.others}
                  <i>{c.unit}</i>
                </p>
                <span aria-hidden="true">→</span>
                <p className="compare-ours">
                  <small>シートエフ</small>
                  {c.ours}
                  <i>{c.unit}</i>
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="data-note">女性社員の割合、平均残業時間、有給取得率は2026年7月時点の求人掲載データです。</p>
      </section>

      <Zebra />

      <section className="sec two-col">
        <div>
          <SectionHead en="BEFORE" title="前職は、さまざま。" />
          <ul className="big-list">
            {MOVES_FROM.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHead en="CLIENTS" title="取引先の業界" />
          <ul className="big-list big-list-sm">
            {CLIENT_FIELDS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <PageNext current="/data/" />
      <EntryBand />
    </>
  );
}
