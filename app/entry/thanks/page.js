import { Go, PageHead } from '../../components/Parts';

export const metadata = { title: '送信完了', robots: { index: false } };

export default function Thanks() {
  return (
    <>
      <PageHead en="THANKS" title="受け取りました。" lead="内容を確認して、担当者からご連絡します。" />
      <section className="form-wrap form-wrap-single">
        <Go href="/">トップへ戻る</Go>
      </section>
    </>
  );
}
