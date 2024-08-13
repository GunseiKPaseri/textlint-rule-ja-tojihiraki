# textlint-rule-ja-tojihiraki

[![Node.js CI](https://github.com/GunseiKPaseri/textlint-rule-ja-tojihiraki/actions/workflows/ci.yml/badge.svg)](https://github.com/GunseiKPaseri/textlint-rule-ja-tojihiraki/actions/workflows/ci.yml)
[![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/) 

`textlint-rule-ja-tojihiraki` は漢字の開閉を統一するtextlintルールです。

漢字を「ひらく」というのは、漢字の読みや文字から受ける印象を考慮し一部をひらがなで表記することで、読みやすく誤読しにくい文章へと変えることです。「閉じる」はその逆です。
漢字とひらがな、どちらで書くかが統一されるので、表記揺れを減らすことにも繋がります。

例:

```
丁度良かった。色々話を聞いて頂きたいと思っていた所でした。
↓
ちょうどよかった。いろいろ話を聞いていただきたいと思っていたところでした。
```

## インストール

```bash
npm install -g textlint-rule-ja-tojihiraki
```

## 使い方

`.textlintrc.json` を利用する場合 (推奨):

```json
{
  "rules": {
    "ja-tojihiraki": true
  }
}
```

CLIから利用する場合:

```bash
textlint --rule ja-tojihiraki README.md
```

## 設定

閉じるか無視するか、各種例外を設定することができます。

デフォルトでは全てを開くべきとなっています。

```jsonc
{
  "rules": {
    "ja-tojihiraki": {
      ignore: [ "イタダキ" ], // 無視する値
      "force-close": [ "doushi", "jodoushi", "kandoushi", "meishi", "keiyoushi", "meishi" ], // 閉じるべき値
    },
  }
}
```

- `"all"`：全ての品詞を対象
- 形態素の格
  - `"daimeishi"`        : 代名詞 「貴方」等
  - `"fukugoukakujoshi"` : 複合格助詞 「を始め」
  - `"fukujoshi"`        : 副助詞 「程」等
  - `"fukushi"`          : 副詞 「余り」等
  - `"hojodoushi"`       : 補助動詞 「上げ」等
  - `"hojokeiyoushi"`    : 補助形容詞 「欲しい」等
  - `"keishikimeishi"`   : 形式名詞 「事」等
  - `"doushi`            : 動詞 「分かる」等
  - `"jodoushi"`         : 助動詞 「御座い」等
  - `"kandoushi"`        : 感動詞 「有難う」等
  - `"keiyoushi"`        : 形容詞 「有難い」等
  - `"meishi"`           : 名詞 「全て」等
  - `"rentaishi"`        : 連体詞 「色んな」等
  - `"setsuzokushi"`     : 接続詞 「或いは」等
- 各単語（読みのカタカナ）

## 開発

### ビルド

```bash
npm run build
```

### テスト

[textlint-tester](https://github.com/textlint/textlint-tester) を利用してテストします。

```bash
npm test
```

## 参考文献

開発するにあたり、以下の書籍やページを参考にさせていただきました。

- [＜新版＞日本語の作文技術 - 本多勝一](https://publications.asahi.com/ecs/detail/?item_id=17593)
- [「なぜ、“ひらく”のか」への考察 - 鷹野 雅弘](https://note.com/swwwitch/n/n105a095c0687)
- [【校正】ひらく漢字の決定版！常用漢字表（H22改正）ほか - ことばのよろず屋](https://kotobanoyorozuya.com/hiraku-ichiran/)
- [漢字の閉じ開きとは？漢字とひらがなを使い分けて読みやすい文章を作成しよう - ALTENAS](https://altenas.jp/blog/chinese-characters-close-up-or-open)
- [閉じるべき漢字・閉じたほうがいい漢字の見分け方【ひらがな→漢字】 - ライカツ](https://lifelikewriter.com/hiragana-kanji-rules/)
- [何でもわかる 日本語便利帳 - WORD-WISE WEB](https://dictionary.sanseido-publ.co.jp/dict/ssd36029)

このTextlintプロジェクトはakiomik氏の[textlint-rule-ja-hiraku](https://github.com/akiomik/textlint-rule-ja-hiraku)をベースとしております。
