'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 動きはここに集約する。
// gsap.from() だけを使い、JS が動かなくても全要素が見える状態を初期値にする。
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // フレームが遅れても実時間で終わらせる（既定の補正だと重い端末でヒーローが空白のまま残る）
    gsap.ticker.lagSmoothing(0);
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // ヒーロー: 文字を下からせり上げ、映像は縞のように開く
      gsap.from('[data-hero-line]', { yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.14, delay: 0.1 });
      gsap.from('[data-hero-video]', { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'power4.inOut' });

      gsap.to('[data-drift="left"]', {
        xPercent: -14,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('[data-drift="right"]', {
        xPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      // 写真: 横一閃で開く
      gsap.utils.toArray('[data-wipe]').forEach((el) => {
        gsap.from(el, {
          clipPath: 'inset(0 100% 0 0)',
          duration: 0.9,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
        });
      });

      // 横断歩道の縞: スクロールに合わせて流れる
      gsap.utils.toArray('[data-zebra]').forEach((el) => {
        gsap.to(el, {
          backgroundPositionX: '+=320px',
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    });

    // STEP の横スクロールはデスクトップのみ。モバイルは縦積みのまま
    mm.add('(min-width: 960px) and (prefers-reduced-motion: no-preference)', () => {
      const wrap = document.querySelector('[data-stages]');
      const track = document.querySelector('[data-stages-track]');
      if (!wrap || !track) return;
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);

    return () => mm.revert();
  }, [pathname]);

  return null;
}
