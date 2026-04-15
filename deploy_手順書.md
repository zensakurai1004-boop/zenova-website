# GitHub × Netlify 連携セットアップ手順

> ターミナルで上から順にコピペして実行してください。
> ※ `$` から始まる行がコマンドです。

---

## STEP 1：GitHubアカウントの確認

まだGitHubアカウントがない場合は、先にブラウザで作成してください。
https://github.com/signup

---

## STEP 2：GitHub CLI（gh）をインストール

```bash
brew install gh
```

※ Homebrewが入っていない場合は先にこちらを実行：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

## STEP 3：GitHubにログイン

```bash
gh auth login
```

対話形式で聞かれるので、以下のように選択：
- `GitHub.com`
- `HTTPS`
- `Login with a web browser`（ブラウザが開くので認証する）

---

## STEP 4：zenova-website フォルダに移動

```bash
cd ~/ZENOVA_warkspace/ZENOVA-Company/engineering/projects/zenova-website
```

※ パスが違う場合は自分の環境に合わせて変更

---

## STEP 5：Gitリポジトリを初期化

```bash
git init
git add .
git commit -m "Initial commit: ZENOVA portfolio site"
```

---

## STEP 6：GitHubにリポジトリを作成してプッシュ

```bash
gh repo create zenova-website --public --source=. --remote=origin --push
```

これで以下が自動的に行われます：
- GitHubに `zenova-website` リポジトリ作成
- ローカルとリモートを接続
- コードをプッシュ

---

## STEP 7：Netlifyと連携

ここからはブラウザで操作します。

1. https://app.netlify.com にログイン
2. 左メニューの「Sites」から `zenova1004zen` のサイトを選択
3. 「Site configuration」→「Build & deploy」→「Continuous deployment」に進む
4. 「Link site to Git」をクリック
5. 「GitHub」を選択して認証
6. リポジトリ一覧から `zenova-website` を選択
7. 設定はデフォルトでOK：
   - Branch: `main`
   - Build command: （空欄のまま）
   - Publish directory: `.`（または `/`）
8. 「Deploy site」をクリック

---

## STEP 8：動作確認

連携完了後、今後はコードを変更してプッシュするだけで自動デプロイされます。

```bash
# 今後の更新手順（例）
cd ~/ZENOVA_warkspace/ZENOVA-Company/engineering/projects/zenova-website
git add .
git commit -m "更新内容のメモ"
git push
```

サイトを確認：
https://zenova1004zen.netlify.app/

---

*作成: ZENOVA CEO | 2026-04-15*
