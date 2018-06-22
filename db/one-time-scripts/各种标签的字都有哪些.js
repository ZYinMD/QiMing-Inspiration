const chars = require('../one-time-data/just-chars-with-labels.json');
const output = ('../../client/src/Components/Articles/各种标签的字都有哪些.json');
const dataStorage = {
  无标签: '',
  有意思: '',
  优先: '',
  男孩用: '',
  女孩用: '',
  很土: '',
  略土: '',
  很俗: '',
  略俗: '',
  无趣: '',
  略生僻: '',
  难搭配: '',
  很难搭配: '',
  多音字: '',
  不适用于人名: '',
  很生僻: '',
  第三级字表: '',
  玉类: '',
  否定: '',
  不真实: '',
  小气: '',
};

const labels = Object.keys(dataStorage);
for (let char in chars) {
  if (chars[char].length == 0) {
    dataStorage.无标签 += char;
    continue;
  }
  for (let label of labels) {
    if (chars[char].includes(label)) {
      dataStorage[label] += char;
    }
  }
}

add三级字();

const fs = require('fs');
fs.writeFileSync(output, JSON.stringify(dataStorage, null, 2));

function add三级字() {
  dataStorage.第三级字表 += '亍尢彳卬殳𠙶毌邘戋圢氕伋仝冮氿汈氾忉宄訏讱扞圲圫芏芃朳朸𨙸邨吒吖屼屾辿钆仳伣伈癿甪邠犴冱邡闫澫汋䜣讻詝孖紃纩玒玓玘玚刬塸坜坉扽埨坋扺㧑毐芰芣苊苉芘芴芠蔿芤杕杙杄杧杩尪尨轪軏坒芈旴旵呙㕮岍㠣岠岜呇冏觃岙伾㑇伭佖伲佁飏狃闶汧汫𣲘𣲗沄沘浿汭㳇沇忮忳忺諓祃诇邲诎诐屃彄岊阽䢺阼妧妘𨚕纮驲馼纻紞駃纼玤玞玱玟邽邿坥坰坬坽弆耵䢼𦭜茋苧苾苠枅㭎枘枍矼矻匼軝暐晛旿昇昄昒昈咉咇咍岵岽岨岞峂㟃囷釴钐钔钖牥佴垈侁侹佸佺隹㑊侂佽侘郈舠郐郃攽肭肸肷狉狝饳忞於炌炆泙沺泂泜泃泇怊峃穸祋祊詷詪鄩鸤弢弨陑隑陎隮卺乸妭姈娙迳叕駓驵駉䌹驺䮄绋绐砉耔㛃玶珇珅瓅珋玹珌玿韨垚垯垙垲埏垍耇垎垴垟垞挓垵垏拶荖荁荙荛茈茽荄茺蔄荓茳𦰡茛荭㭕柷柃柊枹栐柖郚剅䴓迺厖砆砑砄耏奓䶮轵轷轹轺昺睍昽盷咡咺昳昣哒昤昫昡咥昪虷虸哃峘耑峛峗峧帡钘鈇钜鋹釿錀钪钬钭矧秬俫舁俜俙俍垕衎舣弇侴鸧䏡胠𦙶胈胩胣朏飐訄饻庤疢炣炟㶲洭洘洓洿㳚泚浈浉洸洑洢洈洚洺洨浐㳘洴洣恔宬窀扂袆祏祐祕叚陧陞娀姞姱姤姶姽枲绖骃絪駪綎綖彖骉恝珪珛珹琊玼珖勣珽珦珫珒璕珢珕珝𡑍埗垾垺埆垿埌埇莰茝䓣鄀莶莝莙栻桠梜桄梠栴梴栒酎酏頍砵砠砫砬硁恧翃郪𨐈辀辁剕赀哢晅晊唝哳哱冔晔晐晖畖蚄蚆鄳帱崁峿輋崄帨崀赆鉥钷鑪鉮鉊鉧眚甡笫倻倴脩倮倕倞僤倓倧衃虒舭舯舥瓞鬯鸰脎朓胲虓鱽狴峱狻眢餗勍痄疰痃竘羖羓桊敉烠烔烶烻燖涍浡浭浬涄涢涐浰浟浛浼浲涘悈悃悢礐宧窅窊窎扅扆袪袗袯祧隺堲疍𨺙陴烝砮㛚哿翀翂剟駼絺绤骍綄䂮琎珸珵琄琈琀珺掭堎堐埼掎埫堌晢墠掞埪壸㙍聍菝萚菥莿䓫勚䓬萆菂菍菼萣䓨菉䓛梼梽桲梾桯梣梌桹敔厣硔䃮硙硚硊硍勔龁逴唪啫翈㫰晙畤頔趼跂蛃蚲蝀蚺啴䎃崧崟崞崒崌崡铏銈鉷铕鐽铖铘铚铞铥铴牻牿稆笱笯偰偡鸺偭偲偁鄅偓徛衒舳舲鸼悆鄃瓻䝙脶脞脟䏲鱾猇猊猄觖庱庼庳痓䴔竫堃阌羝羕焆烺焌淏漍淟淜淴淯湴涴璗㥄惛惔悰惙寁逭諲諴袼裈祲諟謏谞艴弸弶隤隃婞娵婼媖婳婍婌婫婤婘婠綪綝騑騊绹綡綧骕騄絜珷琲琡琟琔琭堾堼揕㙘堧喆堨塅堠絷塿𡎚葜惎萳葙靬葴蒇蒈鄚蒉蓇萩蒐葰葎鄑蒎葖蒄萹棤棽棫椓椑櫍鹀椆棓棬棪椀楗鵏甦酦觌奡皕硪欹詟輗辌棐龂齘黹牚睎晫晪晱𧿹蛑畯斝喤崶嵁嵽崾嵅崿嵚翙顗圌圐赑淼赒䥑铹𨧀铽𨱇鋗锊锍锎鋐锓犇颋稌筀筘筜筥筅傃傉翛傒傕舾畬頫脿腘䐃腙腒頠鲃猰鵟猯㺄馉凓鄗廞廋廆鄌粢遆旐闉焞燀欻𣸣溚溁湝渰湓㴔渟溠渼溇湣湑溞愐愃敩甯棨扊裣祼婻媆媞㛹媓媂媄毵矞騞騠缊缐骙瑃瑓瑅瑆䴖瑖瑝瑔瑀𤧛瑳瑂嶅瑑遘髢塥堽赪摛塝搒搌蒱蒨蓏蔀蓢蓂蒻蓣椹楪榃榅楒楞楩榇椸楙歅醲碃碏碈䃅硿鄠辒輶輮龆觜䣘暕鹍噁㬊暅跱蜐蜎嵲赗骱锖錤锘锳锧锪錞锫锬𨨏稑稙䅟篢筻筼筶筦筤傺鹎僇艅艉谼貆腽腨腯鲉鲊鲌䲟鮈鮀鲏雊猺飔觟𦝼馌裛廒瘀瘅鄘鹒鄜麀鄣阘闑煁煃煴煋煟煓滠溍溹滆滉溦溵漷滧滘滍愭慥慆塱襀裼禋禔禘禒谫鹔頵愍嫄媱戤勠戣騵騱缞耤瑧璊瑨瑱瑷瑢斠摏墕墈墐墘摴銎𡐓墚撖靽鞁蔌蔈蓰蔹蔊嘏榰榑槚𣗋槜榍疐鶠酺酾酲酴碶䃎碨𥔲碹碥劂鮆夥瞍鹖㬎跽蜾幖嶍圙𨱏锺锼锽鍭锾锿镃镄镅馝鹙箨箖劄僬僦僔僎槃㙦鲒鲕鰤鲖鲗鲘鲙鮡鮠𩽾夐獍飗鸑凘廑廙瘗瘥瘕鲝鄫熇漹漖潆漤潩漼漴㽏漈漋漻慬窬窭㮾譓褕禛禚隩嫕嫭嫜嫪縯㻬麹璆漦叇墣墦墡劐薁蕰蔃鼒槱鹝磏磉殣慭霅暵暲暶踦踣䗖蝘蝲蝤噇噂噀罶嶲嶓㠇嶟嶒镆镈镋镎鎓镕稹儇皞皛艎艏鹟𩾃鲦鲪鲬橥觭鹠鹡糇糈翦鹢鹣熛潖潵㵐澂澛瑬潽潾潏憭憕鶱戭褯禤譞嫽遹驎璥璲璒憙擐鄹薳鞔黇蘋蕗薢蕹橞橑橦醑觱磡𥕢磜豮䡵齮齯鹾虤暿曌曈㬚蹅踶䗛螗疁㠓幪巘嶦鏏𨱑䥕馞穄篚篯簉鼽衠盦螣縢鲭鲯鲰鲺鲹饘亸癀瘭鷟羱糒燋熻燊燚燏濩濋澪澽澴澭澼憷憺懔黉嬛鹨翯繶璱𤩽璬璮髽擿薿薸檑櫆檞醨繄磹磻瞫瞵蹐蟏㘎𨭎镤𨭆鐇镥镨鏻𨱔鐩鐍矰穙穜穟簕簃簏儦魋斶艚鷭谿䲠鯻鲾鰊鲿鳁鳂鳈鳉獯䗪馘襕襚鱀螱甓嬬嬥𦈡纁瓀釐鬶爇鞳鞮虉藟藦藨鹲檫黡礞礌𥖨蹢蹜蟫䗴嚚髃镮镱酂馧簠簝簰鼫鼩皦臑䲢鳑鳒鹱鹯癗𦒍旞翷冁䎖瀔瀍瀌襜纆嚭㰀鬷醭蹯蠋翾鳘儳儴鼗鰶𩾌鳚鳛麑麖蠃彟嬿鬒蘘欂醵颥甗𨟠巇酅髎犨鱚𨭉㸌爔瀱瀹瀼瀵襫孅骦纕耰𤫉瓖鬘趯齼罍鼱鳠鳡鳣爟爚灈韂糵蘼礵鹴躔皭龢鳤亹籥鼷鱲玃醾齇觿蠼';
}
