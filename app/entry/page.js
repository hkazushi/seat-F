import { PageHead } from '../components/Parts';
import { COMPANY, FLOW } from '../lib/content';
import EntryForm from './EntryForm';

export const metadata = { title: 'エントリー' };

export default function Entry() {
  return (
    <>
      <PageHead en="ENTRY" title="エントリー" lead="良いことも、リアルも、面談で全部話します。" img="/img/crossing.jpg" />
      <section className="form-wrap">
        <EntryForm />
        <aside className="form-side">
          <h2>応募後の流れ</h2>
          <ol>
            {FLOW.map((f) => (
              <li key={f.no}>
                <b>{f.no}</b>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <h2>お問い合わせ</h2>
          <p>
            TEL {COMPANY.tel}
            <br />
            {COMPANY.mail}
          </p>
        </aside>
      </section>
    </>
  );
}
