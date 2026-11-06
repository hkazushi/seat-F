'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV } from '../lib/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle('is-locked', open);
    return () => document.documentElement.classList.remove('is-locked');
  }, [open]);

  const isCurrent = (n) =>
    pathname === n.href || n.children?.some((c) => c.href === pathname) || (n.href === '/members/' && pathname?.startsWith('/members/'));

  return (
    <>
      <header className="hd">
        <Link href="/" className="hd-logo" aria-label="シートエフ採用サイト トップへ">
          <img src="/img/logo.png" alt="" width="34" height="34" />
          <span>
            シートエフ
            <small>RECRUIT</small>
          </span>
        </Link>
        <nav className="hd-nav" aria-label="メインメニュー">
          {NAV.map((n) => (
            <div key={n.href} className={n.children ? 'hd-item has-drop' : 'hd-item'}>
              <Link href={n.href} aria-current={isCurrent(n) ? 'page' : undefined}>
                {n.label}
              </Link>
              {n.children && (
                <div className="hd-drop">
                  {n.children.map((c) => (
                    <Link key={c.href} href={c.href}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link href="/entry/?type=casual" className="hd-casual">
          カジュアル面談
        </Link>
        <Link href="/entry/" className="hd-entry">
          ENTRY
        </Link>
        <button
          type="button"
          className="hd-toggle"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={() => setOpen(!open)}
        >
          <i />
          <i />
        </button>
      </header>

      <div id="menu" className={`menu${open ? ' is-open' : ''}`} inert={!open}>
        {NAV.map((n) => (
          <div key={n.href}>
            <Link href={n.href}>
              <small>{n.en}</small>
              {n.label}
            </Link>
            {n.children && (
              <div className="menu-sub">
                {n.children.slice(1).map((c) => (
                  <Link key={c.href} href={c.href}>
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link href="/entry/?type=casual" className="menu-casual">
          <small>CASUAL TALK</small>
          カジュアル面談
        </Link>
        <Link href="/entry/" className="menu-entry">
          <small>ENTRY</small>
          エントリー
        </Link>
      </div>
    </>
  );
}
