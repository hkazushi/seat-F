import { EntryBand, PageHead, PageNext, Photo, SectionHead } from '../components/Parts';
import { FEATURES, HONEST, VOICES } from '../lib/content';

export const metadata = { title: '特徴・強み' };

const IMAGES = ['/img/learn.jpg', '/img/talk.jpg', '/img/position.jpg', '/img/city.jpg', '/img/hand.jpg'];

export default function Features() {
  return (
    <>
      <PageHead en="FEATURES" title="特徴・強み" lead="未経験から、あなたの「なりたい」を叶えるために。" img="/img/team.jpg" sub current="/features/" />

      <section className="reasons">
        {FEATURES.map((f, i) => (
          <article key={f.title} className="reason">
            <Photo src={IMAGES[i]} />
            <div>
              <p className="reason-no">REASON {String(i + 1).padStart(2, '0')}</p>
              <h2>{f.title}</h2>
              <p>{f.body}</p>
              <p className="reason-tags">{f.tags.join('／')}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="sec sec-ink">
        <SectionHead en="HONESTLY" title="入社前に、知っておいてほしいこと。" lead="良いことばかり書く求人は、やめました。" invert />
        <ul className="honest">
          {HONEST.map((h) => (
            <li key={h.title}>
              <h3>{h.title}</h3>
              <p>{h.body}</p>
            </li>
          ))}
        </ul>
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

      <PageNext current="/features/" />
      <EntryBand />
    </>
  );
}
