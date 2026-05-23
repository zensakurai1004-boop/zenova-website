# 🎨 ZENOVA サイト パステル・リブランド版 デプロイ手順

> **更新日**: 2026-05-24
> **変更内容**: 名刺v20と同じ「白×パステルブルー×パステルグリーン × Bodoni Moda + Noto Serif JP」に統一

---

## 変更したファイル

| ファイル | 変更内容 |
|---------|---------|
| `index.html` | `:root`変数（カラーパレット）を名刺パステル系に。Google Fonts に Noto Serif JP / Bodoni Moda 拡張版を読み込み |
| `assets/css/style.css` | `:root`変数を全面刷新（パステルブルー×グリーン基調）。ヒーロー暗背景→ライトに。ハードコード紫青色→ネイビー（#1C507D）に |

---

## デプロイ方法（簡単な順）

### 方法A：ターミナルから直接push（推奨）

サイトディレクトリで以下を実行：

```bash
cd "/Users/sakuraizen/ZENOVA_warkspace/ZENOVA-Company/06_開発と案件/案件/ZENOVAサイト"

# 初回のみ：Gitリポジトリ初期化
git init
git remote add origin https://github.com/zensakurai1004-boop/zenova-website.git
git fetch origin

# 変更を全部コミット
git add index.html assets/css/style.css
git commit -m "Rebrand: パステル × Bodoni Moda + Noto Serif JP に統一（名刺v20準拠）"

# 既存ブランチを取り込んでpush
git pull origin main --rebase --allow-unrelated-histories
git push origin HEAD:main
```

→ Netlifyが自動検知して数十秒〜数分で本番反映されます。
→ 反映後に https://zenova1004zen.netlify.app/ で確認。

---

### 方法B：GitHub のWeb UIで2ファイル差し替え

1. https://github.com/zensakurai1004-boop/zenova-website/ にログイン
2. `index.html` を開く → 鉛筆アイコン → 中身を全削除 → ローカルの新ファイルをペースト → Commit
3. `assets/css/style.css` も同様に差し替え
4. Netlifyが自動検知して反映

> ⚠️ ファイルサイズが大きいのでターミナル経由（方法A）の方が確実

---

### 方法C：Netlify CLI で直接デプロイ（Gitなし運用）

```bash
# 初回のみ
npm install -g netlify-cli
netlify login

# デプロイ
cd "/Users/sakuraizen/ZENOVA_warkspace/ZENOVA-Company/06_開発と案件/案件/ZENOVAサイト"
netlify deploy --prod --dir .
```

サイトIDの確認画面で `zenova1004zen` を選択 → 即時反映。

---

## デプロイ前のローカル確認

すでに `http://localhost:8765/` で動作確認済み（プレビューサーバー起動中）。
追加で確認したければブラウザでアクセスしてください。

---

## ロールバック方法

万一、見た目が崩れた場合：

```bash
cd "/Users/sakuraizen/ZENOVA_warkspace/ZENOVA-Company/06_開発と案件/案件/ZENOVAサイト"
git log --oneline | head -5   # 直近コミットを確認
git revert HEAD --no-edit     # 直前コミットを取り消し
git push
```

---

## 関連リソース

- **本番URL**: https://zenova1004zen.netlify.app
- **GitHubリポジトリ**: https://github.com/zensakurai1004-boop/zenova-website
- **Netlify管理画面**: https://app.netlify.com
- **名刺デザイン**: `06_開発と案件/案件/櫻井善_名刺ロゴ/03_納品物/`

---

*作成: ZENOVA CEO | 2026-05-24*
