'use client';

import { useEffect, useState } from 'react';
import { COMPANY, JOBS } from '../lib/content';

const REVIEW = process.env.NEXT_PUBLIC_REVIEW === '1';

// 送信先は public/entry.php（静的サイトのためPHPでメール送信する）
export default function EntryForm() {
  const [failed, setFailed] = useState(false);
  const [type, setType] = useState('エントリー');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFailed(params.has('error'));
    if (params.get('type') === 'casual') setType('カジュアル面談');
  }, []);

  return (
    <form
      className="form"
      action="/entry.php"
      method="post"
      onSubmit={REVIEW ? (e) => e.preventDefault() : undefined}
    >
      {REVIEW && (
        <p className="form-error" role="note">
          確認用のページです。送信はできません。個人情報は入力しないでください。
        </p>
      )}
      {failed && (
        <p className="form-error" role="alert">
          送信できませんでした。入力内容をご確認のうえ、もう一度お試しください。
        </p>
      )}

      <fieldset className="field">
        <legend>
          ご希望<em>必須</em>
        </legend>
        <div className="radios">
          {['エントリー', 'カジュアル面談'].map((v) => (
            <label key={v}>
              <input type="radio" name="type" value={v} checked={type === v} onChange={() => setType(v)} required />
              <span>{v}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="field">
        <span>気になる仕事</span>
        <select name="job" defaultValue="">
          <option value="">まだ決めていない</option>
          {JOBS.map((j) => (
            <option key={j.id} value={j.title}>
              {j.title}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>
          お名前<em>必須</em>
        </span>
        <input type="text" name="name" autoComplete="name" required />
      </label>

      <label className="field">
        <span>
          フリガナ<em>必須</em>
        </span>
        <input type="text" name="furigana" required />
      </label>

      <label className="field">
        <span>
          電話番号<em>必須</em>
        </span>
        <input type="tel" name="tel" autoComplete="tel" required />
      </label>

      <label className="field">
        <span>
          メールアドレス<em>必須</em>
        </span>
        <input type="email" name="email" autoComplete="email" required />
      </label>

      <label className="field">
        <span>備考</span>
        <textarea name="message" rows="6" />
      </label>

      {/* ボット除け。人間には見えない */}
      <label className="form-hp" aria-hidden="true">
        website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="agree">
        <input type="checkbox" name="agreement" value="1" required />
        <span>
          <a href={COMPANY.privacy} target="_blank" rel="noopener">
            個人情報の取扱い
          </a>
          に同意する
        </span>
      </label>

      <button type="submit" className="go go-accent form-submit" disabled={REVIEW}>
        <span>{REVIEW ? '送信する（確認用のため無効）' : '送信する'}</span>
        <b aria-hidden="true">→</b>
      </button>
    </form>
  );
}
