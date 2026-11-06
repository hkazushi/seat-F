import Link from 'next/link';
import { COMPANY, NAV } from '../lib/content';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-main">
        <div>
          <p className="ft-name">{COMPANY.name}</p>
          <p>{COMPANY.address}</p>
          <p>TEL {COMPANY.tel}</p>
        </div>
        <nav aria-label="採用サイト">
          <p className="ft-label">RECRUIT</p>
          <Link href="/">TOP</Link>
          {NAV.flatMap((n) => n.children || [n]).map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
          <Link href="/entry/">エントリー</Link>
        </nav>
        <nav aria-label="コーポレートサイト">
          <p className="ft-label">CORPORATE</p>
          <a href={COMPANY.url} target="_blank" rel="noopener">
            コーポレートサイト
          </a>
          <a href={COMPANY.companyUrl} target="_blank" rel="noopener">
            会社概要
          </a>
          <a href={COMPANY.serviceUrl} target="_blank" rel="noopener">
            事業内容
          </a>
          <a href={COMPANY.contactUrl} target="_blank" rel="noopener">
            お問い合わせ
          </a>
          <a href={COMPANY.instagram} target="_blank" rel="noopener">
            Instagram
          </a>
          <a href={COMPANY.privacy} target="_blank" rel="noopener">
            個人情報保護
          </a>
        </nav>
        <img className="ft-pmark" src="/img/p-mark.png" alt="プライバシーマーク 17004864" width="72" height="72" />
      </div>
      <div className="ft-bottom">
        <span>© {COMPANY.nameEn}</span>
      </div>
    </footer>
  );
}
