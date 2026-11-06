# シートエフ 採用サイト（ctof-recruit）

株式会社シートエフ（CtoF）の採用専用サイト。コーポレートサイト（ctof.co.jp）は別で運用を続ける。
HP（コンヴェイス採用サイト）と同じ考え方・ページ構成。2026-11-06 新規作成。

GitHub: https://github.com/hkazushi/seat-F （**Public**）

## 技術構成

- Next.js（App Router）+ **JavaScript**（`jsconfig.json`）。HP と同じ構成
- GSAP + ScrollTrigger（動きは `app/components/Motion.js` に集約。layout で読み込む）
- **静的エクスポート**（`output: 'export'` / `trailingSlash: true`）
- フォームは `public/entry.php`（`mb_send_mail`）。PHP が動くサーバーが前提

### ディレクトリ

| パス | 役割 |
|---|---|
| `app/lib/content.js` | サイトの文言・募集条件。**文言の修正はまずここ** |
| `app/components/` | Header / Footer / Motion / 共通パーツ（Parts.js） |
| `app/globals.css` | 全スタイル（1ファイル） |
| `public/img`, `public/video` | コーポレートサイト素材をモノクロ加工したもの |
| `notes/content-sources.md` | 文言の出典、資料間の食い違い、掲載前の確認事項 |

### ページ

`/` `/philosophy` `/features` `/data` `/work` `/work-style` `/benefits` `/members`（+ `r-k` `c-i` `a-f`）`/recruit` `/entry` `/entry/thanks`

---

## 変更後の検証（必須）

```bash
npm run build    # 静的エクスポート（out/ が生成される）
```

TypeScript も lint も無いので、検証はビルドと実表示。**`out/` を配信して実際の表示を確認する**
（`comvace-work/.claude/launch.json` の `ctof-recruit-static` → http://localhost:4310）。

- 375 / 768 / 1440px で確認する。`document.documentElement.scrollWidth` が画面幅を超えないこと
- `entry.php` はローカルでは動かない（PHP 未導入 / `http.server` は POST 不可）。送信確認は公開先サーバーで行う

---

## デプロイ

**確認用（Vercel）**: https://seat-f.vercel.app 。`hkazushi/seat-F` の `main` にプッシュすると自動でデプロイされる。Vercel 上のビルドは `next.config.mjs` が自動で `NEXT_PUBLIC_REVIEW=1` にするので、フォーム送信が止まり noindex になる（PHP が動かないため）。`entry.php` は `.vercelignore` で除外している。

**本番（レンタルサーバー想定・未実施）**: 環境変数なしの `npm run build` で生成される `out/` の中身を、公開ディレクトリにアップロードする。

- **ドメイン直下かサブドメインに置く**（例: `recruit.example.jp`）。画像やリンクは `/img/...` の絶対パスなので、サブディレクトリに置くと壊れる
- `entry.php` の送信元は `noreply@アクセスされたドメイン`。レンタルサーバーによっては実在するアドレスでないと届かないので、公開後に実送信で確認する

---

## デザインの決まりごと

ユーザーの要望は「AI っぽくない」「シンプルでかっこいい」。ポップに振った版は「ポップすぎる」と却下された（2026-11-06）。

- 色は **黒 / 白 / 黄（#ffe100）だけ**。グラデーション、影、角丸、アイコン、絵文字、傾き、ステッカーは使わない
- 区切りは細い罫線。見出しはゴシック 900。極太の Dela Gothic はヒーロー、縦書き、エントリー帯だけ
- 写真は必ずモノクロ加工して使う。インタビューは顔写真でなくイニシャルの文字組み
- 全要素フェードインにしない。動かすのはヒーロー、写真のワイプ、横断歩道の縞、STEP の横スクロールだけ

---

## 過去に実際に踏んだ罠（再発防止）

- **トップからのリンクが全部「This page couldn't load」になる（2026-11-06）**: GSAP の `pin: true` が作る `pin-spacer` が DOM を包み、遷移時に React の `removeChild` が `NotFoundError` で落ちる。直接 URL なら開けるので気づきにくい。**`pin` は使わず CSS `sticky` で作る**。検証は必ずトップから各ページへ**クリックで**遷移して行う
- **ページ全体が横にはみ出す（2026-11-06）**: `.field input { width: 100% }` が、絶対配置で隠したラジオにも効いて幅が 562px に広がった。隠す input は `.field .radios input` の詳細度で `width: 1px` を指定する
- **ヒーローや写真が空白のまま残る（2026-11-06）**: フレームが極端に少ないと、GSAP 既定の `lagSmoothing` が経過時間を切り詰めて開始アニメが終わらない（Browser pane 非表示時に 12 秒以上真っ黒）。`gsap.ticker.lagSmoothing(0)` で実時間どおりに終わらせる。これを外さない
- **Next.js の脆弱性（2026-11-06）**: 16.2.1 と 16.2.12 は `npm audit` で critical。16.4.5 で 0 件。Vercel に上げる前に `npm audit --omit=dev` を確認する
- **求人原文を curl で取れない（2026-11-06）**: 女の転職type は curl だと 403。要約ツールも本文を落とす。ブラウザで開いて `document.body.innerText` を読む

---

## 秘密情報

`.env*` はコミットしない。API キーをコードやドキュメントに直書きしない。Public リポジトリなので特に注意。
