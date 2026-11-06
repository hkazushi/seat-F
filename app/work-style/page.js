import { EntryBand, PageHead, PageNext, Photo, SectionHead, Zebra } from '../components/Parts';
import { AREAS, COMPANY, HOLIDAYS, HOURS, WORK_STYLES } from '../lib/content';

export const metadata = { title: '働く環境' };

export default function WorkStyle() {
  return (
    <>
      <PageHead en="WORK STYLE" title="働く環境" lead="仕事はもちろん、プライベートも大事にしてほしいから。" img="/img/talk.jpg" />

      <section className="sec">
        <SectionHead en="STYLE" title="スキルがつくほど、選べるようになる。" />
        <div className="ws">
          {WORK_STYLES.map((w, i) => (
            <article key={w.title}>
              <p className="ws-no">{String(i + 1).padStart(2, '0')}</p>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </article>
          ))}
        </div>
        <p className="data-note">働き方はプロジェクトにより変わります。詳しくは面談でお伝えします。</p>
      </section>

      <section className="sec sec-ink two-col">
        <div>
          <SectionHead en="HOURS" title="勤務時間" lead="プロジェクトにより変わります。" invert />
          <ul className="hours">
            {HOURS.map((h) => (
              <li key={h.time}>
                <b>{h.time}</b>
                <span>{h.note}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHead en="HOLIDAY" title="年間休日128日" lead="プロジェクト先により変動する場合があります。" invert />
          <p className="line-list">{HOLIDAYS.join('／')}</p>
        </div>
      </section>

      <Zebra />

      <section className="split sec">
        <div>
          <SectionHead en="AREA" title="どこで働く？" lead="一都三県を中心に、希望を考慮して決めます。転勤はありません。各プロジェクトは最寄り駅から徒歩5分圏内です。" />
          <dl className="spec">
            <div>
              <dt>本社</dt>
              <dd>
                {COMPANY.address}
                <br />
                {COMPANY.access}
              </dd>
            </div>
            {AREAS.map((a) => (
              <div key={a.name}>
                <dt>{a.name}</dt>
                <dd>{a.list}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Photo src="/img/town.jpg" />
      </section>

      <PageNext current="/work-style/" />
      <EntryBand />
    </>
  );
}
