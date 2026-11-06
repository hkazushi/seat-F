import { EntryBand, PageHead, PageNext, Photo, SectionHead, Zebra } from '../components/Parts';
import { BENEFIT_TILES, EVENTS, PERKS, SYSTEM_TILES } from '../lib/content';

export const metadata = { title: '制度・福利厚生' };

function Tiles({ items }) {
  return (
    <ul className="tiles">
      {items.map((t) => (
        <li key={t.name}>
          <img src={t.img} alt="" loading="lazy" />
          <h3>{t.name}</h3>
        </li>
      ))}
    </ul>
  );
}

export default function Benefits() {
  return (
    <>
      <PageHead en="BENEFITS" title="制度・福利厚生" lead="学ぶことと、暮らすことの両方を支えます。" img="/img/room.jpg" />

      <section className="split sec">
        <Photo src="/img/room.jpg" />
        <div>
          <SectionHead en="SHARE HOUSE" title="上京支援シェアハウス" />
          <p>家具付きで、電気・ガス・水道・Wi-Fiも完備。駅チカの物件に格安で住めます。初めての上京でも、ここから始められます。</p>
          <p className="line-list">物件の例：桜木町／富士見台／本鵠沼／志村三丁目</p>
        </div>
      </section>

      <section className="sec sec-gray">
        <SectionHead en="SYSTEM" title="社内の制度" lead="チームで動き、先輩に相談しながら、職種を変えることにも挑戦できます。" />
        <Tiles items={SYSTEM_TILES} />
      </section>

      <section className="sec">
        <SectionHead en="BENEFITS" title="福利厚生" />
        <Tiles items={BENEFIT_TILES} />
        <h3 className="sub-title">そのほかの待遇</h3>
        <ul className="big-list big-list-sm">
          {PERKS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <Zebra />

      <section className="sec sec-ink two-col">
        <div>
          <SectionHead en="BRAND" title="人気ブランド品を、特別価格で。" invert />
          <p>コーチ、バーバリー、ポーター、グッチ、プラダなどの人気ブランド品を、特別価格で購入できる制度があります。</p>
        </div>
        <div>
          <SectionHead en="EVENTS" title="社内イベント" invert />
          <p className="line-list">{EVENTS.join('／')}</p>
          <p>参加は任意です。</p>
        </div>
      </section>

      <PageNext current="/benefits/" />
      <EntryBand />
    </>
  );
}
