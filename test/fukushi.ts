import { type InvalidTestCases, runTestOpenClose } from './testutil';

const validTestCases = [
  '田舎暮らしも案外悪くないものだ', // 案外
  '身体に悪いかどうかは一概には言えない', // 一概
  '主にカラ類が生息している', // 主に
  '給料日に飲むドクターペッパーは格別の味だ', // 格別
  '現に彼は到着していないではないか', // 現に
  '強いていうなら塩で食べるのが一番だ', // 強いて
  '徐々にアクセルを踏み込んでいった', // 徐々に
  'この森では鳥の声が絶えず聞こえてくる', // 絶えず
  '何しろ一番出汁だからな', // 何しろ
  '奮ってご参加ください', // 奮って
  '彼の軍勢は優に十万を超えている', // 優に
  '今日は彼の演奏が一段とよく聞こえる', // 一段と
  '決して後悔しないと誓えるか？', // 決して
  '少々お時間を頂いてもよろしいでしょうか', // 少々
  '結構いい感じになってきた', // 結構
];

const invalidTestCases: InvalidTestCases = [
  ['敢えてそうしなかった', 'あえてそうしなかった', [[[0, 1], '敢えて(アエテ)']]],
  ['後で先生に質問する', 'あとで先生に質問する', [[[0, 1], '後で(アトデ)']]],
  [
    '恰も体験したかのように語る',
    'あたかも体験したかのように語る',
    [[[0, 1], '恰も(アタカモ)', undefined, '宛も(アタカモ)|恰も(アタカモ)']],
    'both',
    'openOnly',
  ],
  [
    '剰え怪我をしてしまった',
    'あまつさえ怪我をしてしまった',
    [[[0, 1], '剰え(アマツサエ|アマッサエ)', undefined, '剰え(アマツサエ)']],
    'both',
    'closeOnly',
  ],
  ['余り乗り気ではない', 'あまり乗り気ではない', [[[0, 1], '余り(アマリ)']]],
  ['予め知らせておく', 'あらかじめ知らせておく', [[[0, 1], '予め(アラカジメ)']]],
  ['如何にも、私が静けさ卿だ', 'いかにも、私が静けさ卿だ', [[[0, 1], '如何にも(イカニモ)']]],
  [
    '些か驚きました',
    'いささか驚きました',
    [[[0, 1], '些か(イササカ)', undefined, '些か(イササカ)|聊か(イササカ)']],
    'openOnly',
    'openOnly',
  ],
  ['寒さが一層厳しくなる', '寒さがいっそう厳しくなる', [[[3, 4], '一層(イッソウ)']]],
  [
    '未だ道のりは遠い',
    'いまだ道のりは遠い',
    [[[0, 1], '未だ(イマダ|マダ)', undefined, '未だ(イマダ)']],
    'both',
    'closeOnly',
  ],
  [
    '苟もこれが事実ならば、早急に対処するべきだ',
    'いやしくもこれが事実ならば、早急に対処するべきだ',
    [[[0, 1], '苟も(イヤシクモ)']],
  ],
  ['色々試してみたい', 'いろいろ試してみたい', [[[0, 1], '色々(イロイロ)']]],
  [
    '況や全校生徒の前なんて',
    'いわんや全校生徒の前なんて',
    [[[0, 1], '況や(イワンヤ)', undefined, '況や(イワンヤ)|況んや(イワンヤ)']],
    'both',
    'openOnly',
  ],
  ['それは概ね正しい', 'それはおおむね正しい', [[[3, 4], '概ね(オオムネ)']]],
  ['誤解は自ずから解ける', '誤解はおのずから解ける', [[[3, 4], '自ずから(オノズカラ)']]],
  ['誤解は自ずと解ける', '誤解はおのずと解ける', [[[3, 4], '自ずと(オノズト)']]],
  ['徐に立ち上がる', 'おもむろに立ち上がる', [[[0, 1], '徐に(オモムロニ)']]],
  [
    '凡そ似ても似つかない',
    'およそ似ても似つかない',
    [[[0, 1], '凡そ(オヨソ|オオヨソ)', undefined, '凡そ(オヨソ)']],
    'both',
    'closeOnly',
  ],
  ['却って心配をかけてしまった', 'かえって心配をかけてしまった', [[[0, 1], '却って(カエッテ)']]],
  // ['畏くも神前にて祈りを捧げる', 'かしこくも神前にて祈りを捧げる', [[[0, 1], '畏くも(カシコモ)']]],
  ['寒さが極めて厳しくなる', '寒さがきわめて厳しくなる', [[[3, 4], '極めて(キワメテ)']]],
  ['奇しくも誕生日が同じだった', 'くしくも誕生日が同じだった', [[[0, 1], '奇しくも(クシクモ)']]],
  // ['隈無く探す', 'くまなく探す', [[[0, 1], '隈無く(クマナク)']]],
  [
    '尽く投げ打つ',
    'ことごとく投げ打つ',
    [[[0, 1], '尽く(コトゴトク)', undefined, '尽く(コトゴトク)|悉く(コトゴトク)']],
    'both',
    'openOnly',
  ],
  ['挙って出かける', 'こぞって出かける', [[[0, 1], '挙って(コゾッテ)']]],
  ['流石は高校生探偵ね', 'さすがは高校生探偵ね', [[[0, 1], '流石(サスガ)']]],
  ['嘸苦しかったろう', 'さぞ苦しかったろう', [[[0, 1], '嘸(サゾ)']]],
  ['嘸や苦しかったろう', 'さぞや苦しかったろう', [[[0, 1], '嘸や(サゾヤ)']]],
  ['宛ら滝のような雨', 'さながら滝のような雨', [[[0, 1], '宛ら(サナガラ)']]],
  ['然程問題にならない', 'さほど問題にならない', [[[0, 1], '然程(サホド)']]],
  ['更に戦う者たち', 'さらに戦う者たち', [[[0, 1], '更に(サラニ)']]],
  ['頻りに繰り返す', 'しきりに繰り返す', [[[0, 1], '頻りに(シキリニ)']]],
  [
    '確りした意見を持つ',
    'しっかりした意見を持つ',
    [[[0, 1], '確り(シッカリ)', undefined, '確り(シッカリ)|聢り(シッカリ)']],
    'openOnly',
    'openOnly',
  ],
  ['寒さが暫く厳しくなる', '寒さがしばらく厳しくなる', [[[3, 4], '暫く(シバラク)']]],
  ['寒さが随分と厳しくなった', '寒さがずいぶんと厳しくなった', [[[3, 4], '随分(ズイブン)']]],
  ['透かさず言い返した。', 'すかさず言い返した。', [[[0, 1], '透かさず(スカサズ)']]],
  ['頗る愉快だ', 'すこぶる愉快だ', [[[0, 1], '頗る(スコブル)']]],
  ['寒さは既に厳しい', '寒さはすでに厳しい', [[[3, 4], '既に(スデニ)']]],
  [
    '学生は須く学問を本文とすべし',
    '学生はすべからく学問を本文とすべし',
    [[[3, 4], '須く(スベカラク)', undefined, '須らく(スベカラク)|須く(スベカラク)']],
    'both',
    'openOnly',
  ],
  ['是非来年は寒くなってほしい', 'ぜひ来年は寒くなってほしい', [[[0, 1], '是非(ゼヒ)']]],
  ['折角だから俺はこの赤の扉を選ぶぜ', 'せっかくだから俺はこの赤の扉を選ぶぜ', [[[0, 1], '折角(セッカク)']]],
  ['大層寒さが厳しくなった', 'たいそう寒さが厳しくなった', [[[0, 1], '大層(タイソウ)']]],
  ['沢山食べてね', 'たくさん食べてね', [[[0, 1], '沢山(タクサン)']]],
  ['忽ち逃げ出す', 'たちまち逃げ出す', [[[0, 1], '忽ち(タチマチ)']]],
  ['仮令何があったとしても守り抜く', 'たとえ何があったとしても守り抜く', [[[0, 1], '仮令(タトエ)']]],
  ['丁度寒さが厳しい頃だ', 'ちょうど寒さが厳しい頃だ', [[[0, 1], '丁度(チョウド)']]],
  ['一寸考える', 'ちょっと考える', [[[0, 1], '一寸(チョット)']]],
  [
    '序に教えておく',
    'ついでに教えておく',
    [[[0, 1], '序に(ツイデニ)', undefined, '序に(ツイデニ)|終に(ツイニ)']],
    'openOnly',
    'openOnly',
  ],
  [
    '事の次第を具に報告する',
    '事の次第をつぶさに報告する',
    [[[5, 6], '具に(ツブサニ)', undefined, '具に(ツブサニ)|備に(ツブサニ)|悉に(ツブサニ)']],
    'both',
    'openOnly',
  ],
  ['疾うに過ぎたことだ', 'とうに過ぎたことだ', [[[0, 1], '疾うに(トウニ)']]],
  ['時々寒さが厳しいことがある', 'ときどき寒さが厳しいことがある', [[[0, 1], '時々(トキドキ)']]],
  ['篤とご覧あれ', 'とくとご覧あれ', [[[0, 1], '篤と(トクト)']]],
  ['咄嗟に走り出した', 'とっさに走り出した', [[[0, 1], '咄嗟に(トッサニ)']]],
  ['兎に角可愛い', 'とにかく可愛い', [[[0, 1], '兎に角(トニカク)']]],
  // ['尚このメッセージは3秒後に消失する', 'なおこのメッセージは3秒後に消失する', [[[0, 1], '尚(ナオ)', undefined, '尚(ナオ)|猶(ナオ)']], 'both', 'openOnly'],
  ['何故だか寒さが厳しいことがある', 'なぜだか寒さが厳しいことがある', [[[0, 1], '何故(ナゼ)']]],
  ['何故か寒さが厳しいことがある', 'なぜか寒さが厳しいことがある', [[[0, 1], '何故か(ナゼカ)']], 'openOnly', 'both'],
  ['何卒お許しください', 'なにとぞお許しください', [[[0, 1], '何卒(ナニトゾ)']]],
  ['甚だ遺憾だ', 'はなはだ遺憾だ', [[[0, 1], '甚だ(ハナハダ)']]],
  // ['只管考える', 'ひたすら考える', [[[0, 1], '只管(ヒタスラ)']]],
  ['偏に私の問題だ', 'ひとえに私の問題だ', [[[0, 1], '偏に(ヒトエニ)']]],
  ['一際厳しい寒さだ', 'ひときわ厳しい寒さだ', [[[0, 1], '一際(ヒトキワ)']]],
  ['殆ど面影が残っていない', 'ほとんど面影が残っていない', [[[0, 1], '殆ど(ホトンド)']]],
  [
    '仄仄した顔',
    'ほのぼのした顔',
    [[[0, 1], '仄仄(ホノボノ)', undefined, '仄々(ホノボノ)|仄仄(ホノボノ)']],
    'both',
    'openOnly',
  ],
  ['正に鬼の形相だった', 'まさに鬼の形相だった', [[[0, 1], '正に(マサニ)']]],
  ['先ず私より先に謝るべき人がいるよね', 'まず私より先に謝るべき人がいるよね', [[[0, 1], '先ず(マズ)']]],
  ['寧ろ感謝しているのは私のほうだ', 'むしろ感謝しているのは私のほうだ', [[[0, 1], '寧ろ(ムシロ)']]],
  ['勿論だとも', 'もちろんだとも', [[[0, 1], '勿論(モチロン)']]],
  ['専らの噂だ', 'もっぱらの噂だ', [[[0, 1], '専ら(モッパラ)']]],
  // ['元より失敗は覚悟の上だ', 'もとより失敗は覚悟の上だ', [[[0, 1], '基より(モトヨリ)', undefined, '元より(モトヨリ)|固より(モトヨリ)|素より(モトヨリ)']], 'both', 'openOnly'],
  ['最早これまで', 'もはやこれまで', [[[0, 1], '最早(モハヤ)']]],
  ['矢鱈喉が渇く', 'やたら喉が渇く', [[[0, 1], '矢鱈(ヤタラ)']]],
  ['漸く真実にたどり着いた', 'ようやく真実にたどり着いた', [[[0, 1], '漸く(ヨウヤク)']]],
  [
    '縦しんば正しくても嫌だ',
    'よしんば正しくても嫌だ',
    [[[0, 1], '縦しんば(ヨシンバ)', undefined, '縦しんば(ヨシンバ)|縦んば(ヨシンバ)']],
    'both',
    'openOnly',
  ],
  ['弟のこと、宜しく頼む', '弟のこと、よろしく頼む', [[[5, 6], '宜しく(ヨロシク)']]],
  ['態と負ける', 'わざと負ける', [[[0, 1], '態と(ワザト)']]],
];

runTestOpenClose('副詞', 'fukushi', validTestCases, invalidTestCases);
