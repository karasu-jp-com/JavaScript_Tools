const HankakuTable = {
	'　':' ', '！':'!', '”':'"', '＃':'#', '＄':'$', '％':'%', '＆':'&', '’':'\'',
	'（':'(', '）':')', '＊':'*', '＋':'+', '，':',', '－':'-', '．':'.', '／':'/', 
	'０':'0', '１':'1', '２':'2', '３':'3', '４':'4', '５':'5', '６':'6', '７':'7', 
	'８':'8', '９':'9', '：':':', '；':';', '＜':'<', '＝':'=', '＞':'>', '？':'?', 
	'＠':'@', 'Ａ':'A', 'Ｂ':'B', 'Ｃ':'C', 'Ｄ':'D', 'Ｅ':'E', 'Ｆ':'F', 'Ｇ':'G', 
	'Ｈ':'H', 'Ｉ':'I', 'Ｊ':'J', 'Ｋ':'K', 'Ｌ':'L', 'Ｍ':'M', 'Ｎ':'N', 'Ｏ':'O', 
	'Ｐ':'P', 'Ｑ':'Q', 'Ｒ':'R', 'Ｓ':'S', 'Ｔ':'T', 'Ｕ':'U', 'Ｖ':'V', 'Ｗ':'W', 
	'Ｘ':'X', 'Ｙ':'Y', 'Ｚ':'Z', '［':'[', '￥':'\\','＼':'\\','］':']', '＾':'^', 
	'＿':'_', '｀':'`', 'ａ':'a', 'ｂ':'b', 'ｃ':'c', 'ｄ':'d', 'ｅ':'e', 'ｆ':'f', 
	'ｇ':'g', 'ｈ':'h', 'ｉ':'i', 'ｊ':'j', 'ｋ':'k', 'ｌ':'l', 'ｍ':'m', 'ｎ':'n', 
	'ｏ':'o', 'ｐ':'p', 'ｑ':'q', 'ｒ':'r', 'ｓ':'s', 'ｔ':'t', 'ｕ':'u', 'ｖ':'v', 
	'ｗ':'w', 'ｘ':'x', 'ｙ':'y', 'ｚ':'z', '｛':'{', '｜':'|', '｝':'}', '￣':'~', 
	'。':'｡', '「':'｢', '」':'｣', '、':'､', '・':'･', 'ヲ':'ｦ', 'ァ':'ｧ', 'ィ':'ｨ', 
	'ゥ':'ｩ', 'ェ':'ｪ', 'ォ':'ｫ', 'ャ':'ｬ', 'ュ':'ｭ', 'ョ':'ｮ', 'ッ':'ｯ', 'ー':'ｰ', 
	'ア':'ｱ', 'イ':'ｲ', 'ウ':'ｳ', 'エ':'ｴ', 'オ':'ｵ', 'カ':'ｶ', 'キ':'ｷ', 'ク':'ｸ', 
	'ケ':'ｹ', 'コ':'ｺ', 'サ':'ｻ', 'シ':'ｼ', 'ス':'ｽ', 'セ':'ｾ', 'ソ':'ｿ', 'タ':'ﾀ', 
	'チ':'ﾁ', 'ツ':'ﾂ', 'テ':'ﾃ', 'ト':'ﾄ', 'ナ':'ﾅ', 'ニ':'ﾆ', 'ヌ':'ﾇ', 'ネ':'ﾈ', 
	'ノ':'ﾉ', 'ハ':'ﾊ', 'ヒ':'ﾋ', 'フ':'ﾌ', 'ヘ':'ﾍ', 'ホ':'ﾎ', 'マ':'ﾏ', 'ミ':'ﾐ', 
	'ム':'ﾑ', 'メ':'ﾒ', 'モ':'ﾓ', 'ヤ':'ﾔ', 'ユ':'ﾕ', 'ヨ':'ﾖ', 'ラ':'ﾗ', 'リ':'ﾘ', 
	'ル':'ﾙ', 'レ':'ﾚ', 'ロ':'ﾛ', 'ワ':'ﾜ', 'ン':'ﾝ', '゛':'ﾞ', '゜':'ﾟ', 'を':'ｦ', 
	'ぁ':'ｧ', 'ぃ':'ｨ', 'ぅ':'ｩ', 'ぇ':'ｪ', 'ぉ':'ｫ', 'ゃ':'ｬ', 'ゅ':'ｭ', 'ょ':'ｮ', 
	'っ':'ｯ', 'ー':'ｰ', 'あ':'ｱ', 'い':'ｲ', 'う':'ｳ', 'え':'ｴ', 'お':'ｵ', 'か':'ｶ', 
	'き':'ｷ', 'く':'ｸ', 'け':'ｹ', 'こ':'ｺ', 'さ':'ｻ', 'し':'ｼ', 'す':'ｽ', 'せ':'ｾ', 
	'そ':'ｿ', 'た':'ﾀ', 'ち':'ﾁ', 'つ':'ﾂ', 'て':'ﾃ', 'と':'ﾄ', 'な':'ﾅ', 'に':'ﾆ', 
	'ぬ':'ﾇ', 'ね':'ﾈ', 'の':'ﾉ', 'は':'ﾊ', 'ひ':'ﾋ', 'ふ':'ﾌ', 'へ':'ﾍ', 'ほ':'ﾎ', 
	'ま':'ﾏ', 'み':'ﾐ', 'む':'ﾑ', 'め':'ﾒ', 'も':'ﾓ', 'や':'ﾔ', 'ゆ':'ﾕ', 'よ':'ﾖ', 
	'ら':'ﾗ', 'り':'ﾘ', 'る':'ﾙ', 'れ':'ﾚ', 'ろ':'ﾛ', 'わ':'ﾜ', 'ん':'ﾝ', 'が':'ｶﾞ',
	'ぎ':'ｷﾞ','ぐ':'ｸﾞ','げ':'ｹﾞ','ご':'ｺﾞ','ざ':'ｻﾞ','じ':'ｼﾞ','ず':'ｽﾞ','ぜ':'ｾﾞ',
	'ぞ':'ｿﾞ','だ':'ﾀﾞ','ぢ':'ﾁﾞ','づ':'ﾂﾞ','で':'ﾃﾞ','ど':'ﾄﾞ','ば':'ﾊﾞ','ぱ':'ﾊﾟ',
	'び':'ﾋﾞ','ぴ':'ﾋﾟ','ぶ':'ﾌﾞ','ぷ':'ﾌﾟ','べ':'ﾍﾞ','ぺ':'ﾍﾟ','ぼ':'ﾎﾞ','ぽ':'ﾎﾟ',
	'ゎ':'ﾜ', 'わ':'ﾜ', 'ゐ':'ｲ', 'ゑ':'ｴ', 'ゔ':'ｳﾞ','ゕ':'ｶ', 'ゖ':'ｹ', 'ガ':'ｶﾞ',
	'ギ':'ｷﾞ','グ':'ｸﾞ','ゲ':'ｹﾞ','ゴ':'ｺﾞ','ザ':'ｻﾞ','ジ':'ｼﾞ','ズ':'ｽﾞ','ゼ':'ｾﾞ',
	'ゾ':'ｿﾞ','ダ':'ﾀﾞ','ヂ':'ﾁﾞ','ヅ':'ﾂﾞ','デ':'ﾃﾞ','ド':'ﾄﾞ','バ':'ﾊﾞ','パ':'ﾊﾟ',
	'ビ':'ﾋﾞ','ピ':'ﾋﾟ','ブ':'ﾌﾞ','プ':'ﾌﾟ','ベ':'ﾍﾞ','ペ':'ﾍﾟ','ボ':'ﾎﾞ','ポ':'ﾎﾟ',
	'ヮ':'ﾜ', 'ヰ':'ｲ', 'ヱ':'ｴ', 'ヴ':'ｳﾞ','ヵ':'ｶ', 'ヶ':'ｹ', 'ヷ':'ﾜﾞ','ヸ':'ｲﾞ',
	'ヹ':'ｴﾞ','ヺ':'ｦﾞ',
};
console.log('hankaku.js');

/**
 * 変換テーブルより文字列を変換する
 * @param {string} strIn - 変換元の文字列
 * @param {{key: string, Item: string}[]} table - 変換テーブル
 * @param {number} cursor = 0 - カーソル位置
 * @return {{strOut: string, cursor: number}}
 */
function ReflectsConversionTable(strIn, table, cursor = 0) {
	let result = {
		strOut: '',
		cursor: cursor,
	};
	let p = 0;

	[...strIn].forEach(function(s) {
		LoopBlock: {
			if(s in table) {
				// 変換元(Key)に対象となる文字が存在した場合
				result.strOut += table[s];
				if(p < cursor) {
					result.cursor += (table[s].length - 1);
				}
			} else {
				for(var key in table) {
					// 変換先(Value)に対象となる文字が存在した場合
					if(table[key] == s) {
						result.strOut += s;
						break LoopBlock;
					}
				}
				// 変換元・先共に対象となる文字が存在しない場合
				if(p < cursor) {
					result.cursor --;
				}
			}
		}
		p++;
	});

	return result;
}
