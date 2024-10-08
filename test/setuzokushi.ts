import { type InvalidTestCases, runTestOpenClose } from './testutil';

const invalidTestCases: InvalidTestCases = [
  ['或いはテトラの片隅で', 'あるいはテトラの片隅で', [[[0, 1], '或いは(アルイハ)']]],
  [
    'グレートブリテン及び北アイルランド連合王国',
    'グレートブリテンおよび北アイルランド連合王国',
    [[[8, 9], '及び(オヨビ)']],
  ],
  [
    'A且つBならばC又はD',
    'AかつBならばCまたはD',
    [
      [[1, 2], '且つ(カツ)'],
      [[8, 9], '又は(マタハ)'],
    ],
  ],
  ['然しそんなことがあるだろうか', 'しかしそんなことがあるだろうか', [[[0, 1], '然し(シカシ)']]],
  ['従ってこの契約は無効である', 'したがってこの契約は無効である', [[[0, 1], '従って(シタガッテ)']]],
  [
    '即ち文字には、頂、透く、香と書きて、とうちんこうと申す',
    'すなわち文字には、頂、透く、香と書きて、とうちんこうと申す',
    [[[0, 1], '即ち(スナワチ)']],
  ],
  ['但しこの契約は有効である', 'ただしこの契約は有効である', [[[0, 1], '但し(タダシ)']]],
  ['因みに風邪もひきました', 'ちなみに風邪もひきました', [[[0, 1], '因みに(チナミニ)']]],
  ['尚この契約は有効である', 'なおこの契約は有効である', [[[0, 1], '尚(ナオ)']]],
  ['お客様並びに関係者の皆様へ', 'お客様ならびに関係者の皆様へ', [[[3, 4], '並びに(ナラビニ)']]],
  ['並びにこの契約は有効である', 'ならびにこの契約は有効である', [[[0, 1], '並びに(ナラビニ)']]],
  ['又、伊勢御参宮の折おりからは', 'また、伊勢御参宮の折おりからは', [[[0, 1], '又(マタ)']]],
  ['又は伊勢御参宮の折おりからは', 'または伊勢御参宮の折おりからは', [[[0, 1], '又は(マタハ)']]],
  ['二千年若しくは二万年後の君へ', '二千年もしくは二万年後の君へ', [[[3, 4], '若しくは(モシクハ)']]],
  ['尤もそれだけが原因ではないが。', 'もっともそれだけが原因ではないが。', [[[0, 1], '尤も(モットモ)']]],
  ['愛故に苦しまねばならぬ', '愛ゆえに苦しまねばならぬ', [[[1, 2], '故に(ユエニ)']]],
  [
    'その上リベレーターにそっくりだ',
    'そのうえリベレーターにそっくりだ',
    [[[0, 1], 'その上(ソノウエ)']],
    'closeOnly',
    'both',
  ],
];

runTestOpenClose('接続詞', 'setuzokushi', [], invalidTestCases);
