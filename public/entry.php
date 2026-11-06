<?php
/**
 * シートエフ 採用サイト エントリーフォーム送信処理
 *
 * 動作: POST受信 → バリデーション → メール送信 → /entry/thanks/ へリダイレクト
 * メール送信先: 下記 $to を編集してください。
 */

mb_language('Japanese');
mb_internal_encoding('UTF-8');
date_default_timezone_set('Asia/Tokyo');

// ===== 設定 =====
$to           = 'info@ctof.co.jp';                                // 受信先メールアドレス
$from_address = 'noreply@' . ($_SERVER['HTTP_HOST'] ?? 'ctof.co.jp'); // 送信元（サーバドメイン推奨）
$from_name    = 'シートエフ 採用サイト';
$thanks_url   = '/entry/thanks/';
$error_url    = '/entry/?error=1';

// ===== POSTのみ受付 =====
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /entry/');
    exit;
}

// ===== ハニーポット（bot判定） =====
if (!empty($_POST['website'] ?? '')) {
    header('Location: ' . $thanks_url);
    exit;
}

// ===== 入力取得・サニタイズ =====
function clean($v) {
    if (!is_string($v)) return '';
    $v = trim($v);
    // ヘッダインジェクション対策
    $v = str_replace(["\r", "\n", "%0a", "%0d"], '', $v);
    return $v;
}

$type      = clean($_POST['type'] ?? '');
$job       = clean($_POST['job'] ?? '');
$name      = clean($_POST['name'] ?? '');
$furigana  = clean($_POST['furigana'] ?? '');
$email     = clean($_POST['email'] ?? '');
$tel       = clean($_POST['tel'] ?? '');
$message   = is_string($_POST['message'] ?? null) ? trim($_POST['message']) : '';
$agreement = $_POST['agreement'] ?? '';

// ===== バリデーション =====
if (
    !in_array($type, ['エントリー', 'カジュアル面談'], true)
    || $name === ''
    || $furigana === ''
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || $tel === ''
    || !$agreement
) {
    header('Location: ' . $error_url);
    exit;
}

// ===== メール本文作成 =====
$submitted_at = date('Y-m-d H:i:s');
$subject = "[シートエフ採用] {$type} / {$name}様";

$body = <<<EOT
シートエフ採用サイトのフォームから新規の送信がありました。

────────────────────────────────────────
■ ご希望         : {$type}
■ 気になる仕事   : {$job}
■ お名前         : {$name}
■ フリガナ       : {$furigana}
■ メールアドレス : {$email}
■ 電話番号       : {$tel}
────────────────────────────────────────

■ 備考
────────────────────────────────────────
{$message}
────────────────────────────────────────

[送信日時] {$submitted_at}
EOT;

// ===== メール送信 =====
$headers   = [];
$headers[] = 'From: ' . mb_encode_mimeheader($from_name) . " <{$from_address}>";
$headers[] = "Reply-To: {$email}";

$mail_sent = mb_send_mail($to, $subject, $body, implode("\r\n", $headers));

header('Location: ' . ($mail_sent ? $thanks_url : $error_url));
exit;
