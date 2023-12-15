import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('rule', rule, {
  valid: [
    'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
    '無謀な粗暴者は、可能なら毎ターン攻撃する。',
    'その店は通りに面している',
    '一様な乱数',
    '上の部屋にいます',
    '内なる本能',
    '事が起きる',
    '時が経つ',
    '先に中に入っています',
    '所変われば品変わる',
    '物を減らしたい',
    'バーベルを上げる',
    'バーベルを上げたい',
    'オフ会に行かないと',
    'オフ会に行きたい',
    'オフ会に行くべきだ',
    'オフ会に行け',
    'オフ会に行こうとした',
    'オフ会に行ったことがない',
    '勲章を頂かないと',
    '勲章を頂きたかった',
    '勲章を頂く',
    '勲章を頂けないか',
    '勲章を頂こうとした',
    '受話器を置かないと',
    '受話器を置きたい',
    '受話器を置く',
    '受話器を置けばいい',
    '受話器を置こうとした',
    '飲み物を下さい',
    '飲み物を下さって',
    '飲み物を下さらないと',
    '飲み物を下さる',
    '飲み物を下さればいいのに',
    '飲み物を下さろうとした',
    'オフ会に来い',
    'オフ会に来なかった',
    'オフ会に来たらいい',
    'オフ会に来ようとした',
    'オフ会に来られる',
    'オフ会に来る',
    'オフ会に来ればいいのに',
    '花火を見なかった',
    '花火を見よう',
    '花火を見られない',
    '花火を見る',
    '花火を見ればいい',
    '花火を見ろ',
    'キャンディーを貰う',
    'キャンディーを貰えない',
    'キャンディーを貰おう',
    'キャンディーを貰った',
    'キャンディーを貰わない',
  ],
  invalid: [
    {
      text: '僕がダンサーになった訳',
      output: '僕がダンサーになったわけ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [10, 11],
        },
      ],
    },
    // {
    //   text: 'そう考える方もいます',
    //   output: 'そう考えるかたもいます',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [5, 6],
    //     },
    //   ],
    // },
    {
      text: 'そうした方がよい',
      output: 'そうしたほうがよい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: 'そうする他ない',
      output: 'そうするほかない',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: '嵐の中で輝いて',
      output: '嵐のなかで輝いて',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
    {
      text: 'その上リベレーターにそっくりだ',
      output: 'そのうえリベレーターにそっくりだ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
    {
      text: 'その様にさせていただきます',
      output: 'そのようにさせていただきます',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
    {
      text: 'トークルーム毎に通知を設定する',
      output: 'トークルームごとに通知を設定する',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [6, 7],
        },
      ],
    },
    {
      text: '良いお年をお迎えください',
      output: 'よいお年をお迎えください',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '頭が良くなる習慣',
      output: '頭がよくなる習慣',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
    {
      text: 'その内じゃなくて今すぐがいいの',
      output: 'そのうちじゃなくて今すぐがいいの',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
    {
      text: '後で先生に質問する',
      output: 'あとで先生に質問する',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '可能性は無いに等しい',
      output: '可能性はないに等しい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: 'この世全ての悪',
      output: 'この世すべての悪',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: 'お飲み下さい',
      output: 'お飲みください',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて下さいました',
      output: '書いてくださいました',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて下さる',
      output: '書いてくださる',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて下さった',
      output: '書いてくださった',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて下さらないと困ります',
      output: '書いてくださらないと困ります',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて下さればいいのに',
      output: '書いてくださればいいのに',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて下さろうとした',
      output: '書いてくださろうとした',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: 'アムロ、上手くやれよ',
      output: 'アムロ、うまくやれよ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: '色々な色がある',
      output: 'いろいろな色がある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '色々試してみたい',
      output: 'いろいろ試してみたい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '色んな色がある',
      output: 'いろんな色がある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    // {
    //   text: '所謂オタサーである',
    //   output: 'いわゆるオタサーである',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [0, 1],
    //     },
    //   ],
    // },
    {
      text: 'オレに分かるように説明しろ',
      output: 'オレにわかるように説明しろ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: 'ぜんぜん分からない 俺たちは雰囲気で株をやっている',
      output: 'ぜんぜんわからない 俺たちは雰囲気で株をやっている',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: '分かり手',
      output: 'わかり手',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '分かろうとする努力が足りない',
      output: 'わかろうとする努力が足りない',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: 'お願いだから分かって欲しい',
      output: 'お願いだからわかって欲しい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [6, 7],
        },
      ],
    },
    // {
    //   text: '神様の言う通り',
    //   output: '神様の言う通り',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [5, 6],
    //     },
    //   ],
    // },
    {
      text: 'それは不味いことになったな',
      output: 'それはまずいことになったな',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: 'お書き頂く',
      output: 'お書きいただく',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて頂く',
      output: '書いていただく',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて頂かないわけにはいきませんね',
      output: '書いていただかないわけにはいきませんね',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて頂きます',
      output: '書いていただきます',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    // {
    //   text: '書いて頂けませんか',
    //   output: '書いて頂けませんか',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    {
      text: '書いて頂こうかと思っていたところでした',
      output: '書いていただこうかと思っていたところでした',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '彼女の為に必死に働いている',
      output: '彼女のために必死に働いている',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '沢山食べてね',
      output: 'たくさん食べてね',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: 'ひとりで出来るもん',
      output: 'ひとりでできるもん',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: 'ひとりで出来ないもん',
      output: 'ひとりでできないもん',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: 'みんなを一つに纏める',
      output: 'みんなを一つにまとめる',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [7, 8],
        },
      ],
    },
    {
      text: 'みんなを一つに纏めたい',
      output: 'みんなを一つにまとめたい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [7, 8],
        },
      ],
    },
    {
      text: 'みんなを一つに纏めようとした',
      output: 'みんなを一つにまとめようとした',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [7, 8],
        },
      ],
    },
    {
      text: '有難うございました',
      output: 'ありがとうございました',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '三日とろろ美味しゅう御座いました',
      output: '三日とろろ美味しゅうございました',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [10, 11],
        },
      ],
    },
    {
      text: '勿体ないおばけ',
      output: 'もったいないおばけ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: 'A且つBならばCまたはD',
      output: 'AかつBならばCまたはD',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [1, 2],
        },
      ],
    },
    // {
    //   text: "拘りスカーフ",
    //   output: "こだわりスカーフ",
    //   errors: [
    //     {
    //       message: "平仮名にひらいたほうが読みやすい漢字を使用しています。",
    //       range: [0, 1],
    //     },
    //   ],
    // },
    // {
    //   text: "機械を弄る",
    //   output: "機械をいじる",
    //   errors: [
    //     {
    //       message: "平仮名にひらいたほうが読みやすい漢字を使用しています。",
    //       range: [0, 1],
    //     },
    //   ],
    // },
    {
      text: '因みに風邪もひきました',
      output: 'ちなみに風邪もひきました',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '僅かに増加した',
      output: 'わずかに増加した',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: 'nostrを始めとする分散SNS',
      output: 'nostrをはじめとする分散SNS',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [6, 7],
        },
      ],
    },
    {
      text: 'nostrを初めとする分散SNS',
      output: 'nostrをはじめとする分散SNS',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [6, 7],
        },
      ],
    },
    {
      text: '韻が固い',
      output: '韻がかたい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
    {
      text: '韻が硬い',
      output: '韻がかたい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
    {
      text: '韻が堅い',
      output: '韻がかたい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
    {
      text: '焼き芋の他に銀杏も売っている',
      output: '焼き芋のほかに銀杏も売っている',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: '焼き芋を食べるなんてもっての外だ',
      output: '焼き芋を食べるなんてもってのほかだ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [10, 11],
        },
      ],
    },
    {
      text: '却って心配をかけてしまった',
      output: 'かえって心配をかけてしまった',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: 'そんな事もある',
      output: 'そんなこともある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: 'そんな時もある',
      output: 'そんなときもある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: 'そんな所もある',
      output: 'そんなところもある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: 'そんな物だ',
      output: 'そんなものだ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '又、伊勢御参宮の折おりからは',
      output: 'また、伊勢御参宮の折おりからは',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '又は伊勢御参宮の折おりからは',
      output: 'または伊勢御参宮の折おりからは',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '更に戦う者たち',
      output: 'さらに戦う者たち',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: 'お客様並びに関係者の皆様へ',
      output: 'お客様ならびに関係者の皆様へ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '寒さが一層厳しくなる',
      output: '寒さがいっそう厳しくなる',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '寒さが極めて厳しくなる',
      output: '寒さがきわめて厳しくなる',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '寒さが暫く厳しくなる',
      output: '寒さがしばらく厳しくなる',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '寒さが随分と厳しくなった',
      output: '寒さがずいぶんと厳しくなった',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '是非来年は寒くなって欲しい',
      output: 'ぜひ来年は寒くなって欲しい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '大層寒さが厳しくなった',
      output: 'たいそう寒さが厳しくなった',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '時々寒さが厳しいことがある',
      output: 'ときどき寒さが厳しいことがある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '何故だか寒さが厳しいことがある',
      output: 'なぜだか寒さが厳しいことがある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '何故か寒さが厳しいことがある',
      output: 'なぜか寒さが厳しいことがある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: 'グレートブリテン及び北アイルランド連合王国',
      output: 'グレートブリテンおよび北アイルランド連合王国',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [8, 9],
        },
      ],
    },
    {
      text: '従ってこの契約は無効である',
      output: 'したがってこの契約は無効である',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '但しこの契約は有効である',
      output: 'ただしこの契約は有効である',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '尚この契約は有効である',
      output: 'なおこの契約は有効である',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '並びにこの契約は有効である',
      output: 'ならびにこの契約は有効である',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: 'そろそろ到着する筈だ',
      output: 'そろそろ到着するはずだ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [8, 9],
        },
      ],
    },
    // {
    //   text: '書いて有る',
    //   output: '書いてある',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて有ります',
    //   output: '書いてあります',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて有ればいいのに',
    //   output: '書いてあればいいのに',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて居る',
    //   output: '書いている',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて居ます',
    //   output: '書いています',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて居ればいい',
    //   output: '書いていればいい',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて居よう',
    //   output: '書いていよう',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて居ろ',
    //   output: '書いていろ',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    {
      text: '書いて行く',
      output: '書いていく',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて行かなければならない',
      output: '書いていかなければならない',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて行きたい',
      output: '書いていきたい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて行けばいい',
      output: '書いていけばいい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて行こう',
      output: '書いていこう',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて行った',
      output: '書いていった',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて来る',
      output: '書いてくる',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて来たらいい',
      output: '書いてきたらいい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて来ればいい',
      output: '書いてくればいい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて来なければならない',
      output: '書いてこなければならない',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて来よう',
      output: '書いてこよう',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて来い',
      output: '書いてこい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    // {
    //   text: '書いて見る',
    //   output: '書いてみる',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて見なければならない',
    //   output: '書いてみなければならない',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて見ればいい',
    //   output: '書いてみればいい',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて見よう',
    //   output: '書いてみよう',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて見ろ',
    //   output: '書いてみろ',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて置く',
    //   output: '書いておく',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて置かなければならない',
    //   output: '書いておかなければならない',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて置きたい',
    //   output: '書いておきたい',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて置け。',
    //   output: '書いておけ。',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて置こう',
    //   output: '書いておこう',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて貰う',
    //   output: '書いてもらう',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて貰わないと',
    //   output: '書いてもらわないと',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて貰いたい',
    //   output: '書いてもらいたい',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて貰えない',
    //   output: '書いてもらえない',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて貰おう',
    //   output: '書いてもらおう',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    // {
    //   text: '書いて貰った',
    //   output: '書いてもらった',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [3, 4],
    //     },
    //   ],
    // },
    {
      text: '書いて上げる',
      output: '書いてあげる',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '書いて上げた',
      output: '書いてあげた',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '其の一',
      output: 'その一',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '此の前友達と会った',
      output: 'この前友達と会った',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '暑さ寒さも彼岸迄',
      output: '暑さ寒さも彼岸まで',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [7, 8],
        },
      ],
    },
    {
      text: 'あんた程の実力者がそういうのなら…',
      output: 'あんたほどの実力者がそういうのなら…',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '戦う度に強くなる',
      output: '戦うたびに強くなる',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
  ],
});
