import { EntryBand, Go, PageHead, PageNext, Photo, SectionHead, Zebra } from '../components/Parts';
import { BUSINESSES, CLIENT_FIELDS, COMPANY, CONCEPT, GOALS } from '../lib/content';

export const metadata = { title: '企業理念' };

export default function Philosophy() {
  return (
    <>
      <PageHead en="PHILOSOPHY" title="企業理念" lead="思いをつなぎ、未来をつくる。" img="/img/town.jpg" sub current="/philosophy/" />

      <section className="sec concept">
        <SectionHead en="CONCEPT" title={CONCEPT.lead} />
        <p className="concept-body">{CONCEPT.body}</p>
      </section>

      <section className="mvv">
        <dl>
          <div>
            <dt>MISSION</dt>
            <dd>思いをつなぎ未来をつくる</dd>
            <dd className="mvv-en">connecting to the future</dd>
          </div>
          <div>
            <dt>VISION</dt>
            <dd>各々が思い描く人財を創出する</dd>
            <dd className="mvv-en">Becoming the talent each of us envisions</dd>
          </div>
          <div>
            <dt>VALUE</dt>
            <dd>成長の機会を常に提供し続ける</dd>
            <dd className="mvv-en">Always provide opportunities for growth</dd>
          </div>
        </dl>
      </section>

      <section className="split sec">
        <div>
          <SectionHead en="MESSAGE" title="一人ひとりの成長スピードに合わせて、思い描く自分になるまで支える。" />
          <p>
            シートエフが大事にしているのは、成長につながるチャンスを渡すことです。社員のスキルアップのためにリスキリング制度を入れ、年齢に関係なくマネジメントを任せています。
          </p>
          <p>
            社員のほとんどは未経験からのスタートです。入社後は研修と経験豊富な先輩が支えます。入社1年でマネージャーになった社員も、未経験からIT業界にデビューした社員もいます。
          </p>
          <p className="msg-name">{COMPANY.ceo}</p>
        </div>
        <Photo src="/img/city.jpg" />
      </section>

      <section className="goals">
        <SectionHead en="VISION FOR THE FUTURE" title="これから、大きくしていく会社です。" lead="事業も人材派遣だけでなく、IT事業や有料職業紹介、女性教育セミナー事業へと広げていく予定です。将来海外でも活躍できるグローバル人材やクリエイターの育成にも力を入れています。" />
        <dl>
          {GOALS.map((g) => (
            <div key={g.label}>
              <dt>{g.label}</dt>
              <dd>
                {g.value}
                <small>{g.unit}</small>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <Zebra />

      <section className="sec">
        <SectionHead en="BUSINESS" title="やっていること" />
        <div className="biz-list">
          {BUSINESSES.map((b) => (
            <article key={b.title}>
              <Photo src={b.img} />
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </article>
          ))}
        </div>
        <h3 className="sub-title">取引先の業界</h3>
        <p className="line-list">{CLIENT_FIELDS.join('／')}</p>
      </section>

      <section className="sec sec-gray">
        <SectionHead en="COMPANY" title="会社概要" />
        <dl className="spec">
          <div>
            <dt>会社名</dt>
            <dd>
              {COMPANY.name}（{COMPANY.nameEn}）
            </dd>
          </div>
          <div>
            <dt>代表者</dt>
            <dd>{COMPANY.ceo}</dd>
          </div>
          <div>
            <dt>設立</dt>
            <dd>{COMPANY.founded}</dd>
          </div>
          <div>
            <dt>資本金</dt>
            <dd>{COMPANY.capital}</dd>
          </div>
          <div>
            <dt>従業員数</dt>
            <dd>{COMPANY.employees}</dd>
          </div>
          <div>
            <dt>事業内容</dt>
            <dd>{COMPANY.business.join('／')}</dd>
          </div>
          <div>
            <dt>所在地</dt>
            <dd>
              {COMPANY.address}
              <br />
              {COMPANY.access}
            </dd>
          </div>
          <div>
            <dt>連絡先</dt>
            <dd>
              TEL {COMPANY.tel}
              <br />
              {COMPANY.mail}
            </dd>
          </div>
          <div>
            <dt>許認可</dt>
            <dd>
              {COMPANY.licenses.map((l) => (
                <span key={l} className="spec-line">
                  {l}
                </span>
              ))}
            </dd>
          </div>
        </dl>
        <div className="mt-go">
          <Go href={COMPANY.url} external>
            コーポレートサイトを見る
          </Go>
        </div>
      </section>

      <PageNext current="/philosophy/" />
      <EntryBand />
    </>
  );
}
