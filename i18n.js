/* English / Khmer language switch.
   English stays in index.html; this file holds the Khmer copy.
   Static text: elements with data-i18n="key" (innerHTML) and data-i18n-attr="attr=key;attr=key".
   Dynamic text (filters, gallery, inquiry): window.i18n.t(key, ...args). */
(function(){
const STORE='mg-lang';
const KH_DIGITS='០១២៣៤៥៦៧៨៩';
const kmNum=v=>String(v).replace(/\d/g,d=>KH_DIGITS[d]);
const pad=n=>String(n).padStart(2,'0');

/* ---------- Static page copy (Khmer) ---------- */
const KM={
 skip:'រំលងទៅគម្រោង',
 mast_loc:'ភ្នំពេញ · កម្ពុជា',
 nav_work:'ស្នាដៃ',
 nav_studio:'អំពីយើង',
 nav_start:'ចាប់ផ្តើមគម្រោង ↗',
 hero_micro:'ស្ថាបត្យកម្ម និងការរចនាផ្ទៃក្នុង',
 hero_h1:'ក្តីស្រមៃរបស់អ្នក<br><em>ក្លាយជាការពិត។</em>',
 hero_desc:'ស្ថាបត្យកម្ម និងការរចនាផ្ទៃក្នុង ដែលរៀបចំឡើងសម្រាប់ជីវិតរបស់អ្នក។',
 cta_consult:'ស្នើសុំការពិគ្រោះយោបល់ <span>↗</span>',
 hero_explore:'មើលគម្រោងរបស់យើង ↓',
 loc_pp_caps:'ភ្នំពេញ',
 hero_foot:'ផ្ទះរបស់អ្នក។ ជំនាញរបស់យើង។',
 hero_discover:'ស្វែងយល់ពីស្នាដៃ <span>↓</span>',
 feat_micro:'រចនាដោយយកចិត្តទុកដាក់ ពិសេសសម្រាប់អ្នក',
 feat_p:'ពីកន្លែងស្នាក់នៅ<br>ដល់កន្លែង<em>រីកចម្រើន។</em>',
 feat_homes:'លំនៅដ្ឋានមានអត្តសញ្ញាណ <b>↗</b>',
 feat_business:'ទីតាំងអាជីវកម្ម <b>↗</b>',
 feat_escape:'កន្លែងសម្រាកលំហែ <b>↗</b>',
 work_h2:'គម្រោង<em>ឆ្នើម។</em>',
 work_micro:'គម្រោងសរុប ២៨',
 search_label:'ស្វែងរកគម្រោងតាមឈ្មោះ ទីតាំង ប្រភេទ ឬវិសាលភាព',
 search_ph:'ស្វែងរកគម្រោង ទីតាំង ឬគំនិត…',
 search_clear:'សម្អាតការស្វែងរក',
 legend_type:'ប្រភេទគម្រោង',
 legend_loc:'ទីតាំង',
 all_types:'គ្រប់ប្រភេទគម្រោង',
 all_locs:'គ្រប់ទីតាំង',
 reset_filters:'កំណត់ឡើងវិញ ↺',
 index_hint:'ចុចលើគម្រោង ដើម្បីមើលរូបភាព',
 empty_micro:'រកមិនឃើញ',
 empty_h3:'សាកល្បងមើលពីទស្សនៈផ្សេង?',
 empty_p:'សូមស្វែងរកតាមឈ្មោះគម្រោង ទីក្រុង ឬជ្រើសរើសឲ្យទូលំទូលាយជាងនេះ។',
 empty_reset:'បង្ហាញគម្រោងទាំងអស់ <span>↗</span>',
 bridge_micro:'ឃើញអ្វីដែលត្រូវចិត្តអ្នកទេ?',
 bridge_h2:'តោះធ្វើឲ្យវា<em>ក្លាយជារបស់អ្នក។</em>',
 bridge_cta:'ប្រាប់យើងពីគំនិតរបស់អ្នក ↗',
 exp_h2:'យកចិត្តទុកដាក់គ្រប់<em>ទំហំគម្រោង។</em>',
 exp_p:'ស្ថាបត្យកម្ម ផ្ទៃក្នុង និងគ្រប់ព័ត៌មានលម្អិត ដែលធ្វើឲ្យលំហមួយក្លាយជារបស់អ្នក។',
 exp_summary:'ស្វែងយល់ពីជំនាញរបស់យើង <span aria-hidden="true">+</span>',
 exp1_h:'ការរចនាស្ថាបត្យកម្ម',exp1_p:'រូបរាង សមាមាត្រ និងលំហដែលប្រើប្រាស់បានល្អ។',
 exp2_h:'ការរចនា និងតុបតែងផ្ទៃក្នុង',exp2_p:'សម្ភារៈ ពន្លឺ និងអត្តចរិតនៃបន្ទប់នីមួយៗ។',
 exp3_h:'ការរចនាតាមតម្រូវការពេញផ្ទះ',exp3_p:'ទូ និងគ្រឿងសង្ហារិម រចនាឡើងជាមួយគ្នាយ៉ាងសុខដុម។',
 exp4_h:'សេវាកម្មគ្រប់ជ្រុងជ្រោយ',exp4_p:'សម្របសម្រួលចាប់ពីគំនិតដំបូង រហូតដល់បញ្ចប់។',
 exp5_h:'ការរចនាប្រកបដោយនិរន្តរភាព និងឆ្លាតវៃ',exp5_p:'សម្ភារៈដែលបានគិតគូរ និងបច្ចេកវិទ្យាទំនើប។',
 proc_micro:'ចាប់ពីគំនិតដំបូង រហូតដល់ការប្រគល់ជូន',
 proc_h2:'ដំណើរការ<em>ការងាររបស់យើង។</em>',
 proc_p:'ចក្ខុវិស័យរួមគ្នា។ ជំហានបន្ទាប់ច្បាស់លាស់។<br>ការរចនាយកចិត្តទុកដាក់ អនុវត្តដល់ទីបញ្ចប់។',
 proc1_h:'ការពិគ្រោះយោបល់ដំបូង',proc1_p:'ស្វែងយល់ពីចក្ខុវិស័យ ទីតាំង និងតម្រូវការរបស់អ្នក។',
 proc2_h:'ការរចនា និងរៀបចំផែនការ',proc2_p:'រៀបចំប្លង់ស្ថាបត្យកម្ម និងផ្ទៃក្នុង ដោយផ្តោតលើមុខងារ សោភ័ណភាព និងនិរន្តរភាព។',
 proc3_h:'ការជ្រើសរើសសម្ភារៈ និងការកែសម្រួល',proc3_p:'ជ្រើសរើសសម្ភារៈ ផ្ទៃបញ្ចប់ និងព័ត៌មានលម្អិត ឲ្យស្របតាមរចនាប័ទ្ម និងអាទិភាពរបស់អ្នក។',
 proc4_h:'ការអនុវត្ត និងគ្រប់គ្រងគម្រោង',proc4_p:'សម្របសម្រួលការទិញសម្ភារៈ ការដំឡើង និងការប្រគល់ ដើម្បីអនុវត្តការរចនាឲ្យបានពេញលេញ។',
 proc5_h:'ការកែលម្អចុងក្រោយ និងប្រគល់ជូន',proc5_p:'កែលម្អព័ត៌មានលម្អិត ត្រួតពិនិត្យគុណភាព និងបញ្ចប់លំហរបស់អ្នកឲ្យបានល្អឥតខ្ចោះ។',
 proc_cta:'ចាប់ផ្តើមដោយការពិភាក្សា ↗',
 rec_micro:'អ្នករចនានៅពីក្រោយលំហរបស់អ្នក',
 rec_h2:'អ្នករចនាទទួលបានពានរង្វាន់។<br><em>យកចិត្តទុកដាក់ផ្ទាល់។</em>',
 rec_p:'ស្ថាបនិក និងប្រធានស្ថាបត្យករ នៃ MG Design & Co.។ បង្កើតលំហដែលមានមុខងារ និងផ្តល់ការបំផុសគំនិត រួមជាមួយក្រុមស្ថាបត្យករ អ្នករចនា និងអ្នកគ្រប់គ្រងគម្រោង។',
 rec1_tag:'២០២០ · ទទួលការកោតសរសើរខ្ពស់',
 rec1_title:'Women of the Future Awards អាស៊ីអាគ្នេយ៍',
 rec1_sub:'ផ្នែកអចលនទ្រព្យ ហេដ្ឋារចនាសម្ព័ន្ធ និងសំណង់ ↗',
 rec2_tag:'២០១៩ · ការទទួលស្គាល់ពីទស្សនាវដ្តី',
 rec2_title:'ការរចនា និងស្ថាបត្យកម្ម',
 rec2_sub:'ជាប់ក្នុងចំណោមស្ថាបត្យករអាស៊ីអាគ្នេយ៍ដែលគួរតាមដាន ↗',
 rec_cta:'ពិភាក្សាពីចក្ខុវិស័យរបស់អ្នកជាមួយ MG Design ↗',
 tt_micro:'តាមដានដំណើរការងារនៅលើ TikTok',
 tt_h2:'គន្លឹះរចនា ការចុះការដ្ឋាន និង<em>រឿងនៅពីក្រោយឆាក។</em>',
 tt_p:'Muygech ចែករំលែកគន្លឹះរចនាដែលអាចយកទៅប្រើបានភ្លាមៗ ការណែនាំគម្រោងពិតៗ និងជីវិតប្រចាំថ្ងៃនៅការដ្ឋាន។',
 tt_bio:'ស្ថាបត្យករ · ស្ថាបនិក · ម្តាយ | កម្ពុជា',
 tt_followers:'អ្នកតាមដាន',
 tt_likes:'ចូលចិត្ត',
 tt_follow:'តាមដាននៅលើ TikTok',
 tt_v1:'រឿង ៣ ដែលខ្ញុំមិនដែលធ្វើ ពេលរចនាផ្ទះបាយ',
 tt_v2:'សួនកុមារសាធារណៈថ្មីក្នុងទីក្រុង',
 tt_v3:'ដំណើរអាជីពរបស់ខ្ញុំ',
 tt_v4:'SY Modern Villa · EP02 តំបន់សេវាកម្ម',
 tt_v5:'មួយថ្ងៃរវល់នៅការដ្ឋាន',
 tt_v6:'ទស្សនាវីឡាទំនើបជាមួយ Muygech',
 tt_more:'មើលវីដេអូទាំងអស់ ↗',
 inq_micro:'ជំពូកថ្មីរបស់អ្នក',
 inq_h2:'លំហដ៏ល្អ ចាប់ផ្តើមពី<br><em>ការសន្ទនា។</em>',
 inq_p:'កំពុងគ្រោងសាងសង់ផ្ទះ ទីតាំងអាជីវកម្ម ឬរចនាផ្ទៃក្នុងថ្មីមែនទេ? ប្រាប់យើងបន្តិចអំពីគម្រោងរបស់អ្នក ហើយស្នើសុំការពិគ្រោះយោបល់។',
 cc_title:'ទាក់ទងមកយើង',
 cc_follow:'តាមដានយើង',
 cc_call:'ទូរស័ព្ទមកយើង',
 cc_telegram:'ផ្ញើសារតាម Telegram',
 cc_messenger:'ផ្ញើសារតាម Messenger',
 cc_note:'ចង់និយាយគ្នាជាមុនសិន? ទូរស័ព្ទ ឬផ្ញើសារមកយើងដោយផ្ទាល់។',
 form_h3:'ប្រាប់យើងអំពីគម្រោងរបស់អ្នក',
 form_sub:'ចាប់ផ្តើមជាមួយព័ត៌មានសំខាន់ៗ។',
 f_inspired:'បំផុសគំនិតពី',
 f_inspired_clear:'លុបគម្រោងគំរូចេញ',
 f_name:'ឈ្មោះរបស់អ្នក',
 f_name_ph:'ឈ្មោះរបស់អ្នក',
 f_type:'ប្រភេទគម្រោង',
 f_type_ph:'ជ្រើសរើសប្រភេទ',
 f_type_home:'ផ្ទះ ឬវីឡា',
 f_type_retail:'ហាង ឬការិយាល័យ',
 f_type_hotel:'សណ្ឋាគារ ឬបដិសណ្ឋារកិច្ច',
 f_type_interior:'រចនាផ្ទៃក្នុង ឬគ្រឿងសង្ហារិម',
 f_type_dev:'គម្រោងអភិវឌ្ឍន៍អចលនទ្រព្យ',
 f_type_explore:'កំពុងស្វែងយល់នៅឡើយ',
 f_loc:'ទីតាំងគម្រោង',
 f_loc_ph:'ទីក្រុង ឬតំបន់',
 f_date:'កាលបរិច្ឆេទពិគ្រោះដែលចង់បាន',
 optional:'ស្រេចចិត្ត',
 f_details:'តើអ្នកមានគំនិតអ្វីខ្លះ?',
 f_details_ph:'លំហ អាទិភាព ទំហំប្រហាក់ប្រហែល ថវិកា ឬពេលវេលា…',
 f_date_note:'សូមស្នើកាលបរិច្ឆេទដែលសមស្របសម្រាប់អ្នក។ ក្រុមការងាររបស់យើងនឹងបញ្ជាក់ពេលវេលាជាមួយអ្នកវិញ។',
 f_submit:'រៀបចំសំណើរបស់ខ្ញុំ <span>↗</span>',
 f_submit_note:'ពិនិត្យសាររបស់អ្នក រួចផ្ញើទៅ MG Design តាម Telegram។',
 rv_h3:'សាររបស់អ្នករួចរាល់ហើយ',
 rv_sub:'សូមពិនិត្យ រួចបន្តទៅ Telegram ដើម្បីផ្ញើ។',
 rv_label:'សំណើរបស់អ្នក',
 rv_send:'បន្តទៅ Telegram ↗',
 rv_copy:'ចម្លងសារ',
 rv_status:'សំណើរបស់អ្នកមិនទាន់ត្រូវបានផ្ញើទេ រហូតដល់អ្នកផ្ញើវាក្នុង Telegram។ ការណាត់ជួបនឹងត្រូវបញ្ជាក់ដោយក្រុមការងាររបស់យើង។',
 rv_edit:'កែប្រែព័ត៌មានរបស់ខ្ញុំ',
 foot_top:'ត្រឡប់ទៅខាងលើ',
 foot_cta:'ស្នើសុំការពិគ្រោះយោបល់ ↗',
 foot_follow:'តាមដាន MG Design',
 g_close:'បិទ <span>×</span>',
 g_close_aria:'បិទវិចិត្រសាលគម្រោង',
 g_prev:'រូបភាពមុន',
 g_next:'រូបភាពបន្ទាប់',
 g_convert:'ស្រមៃមើលលំហបែបនេះសម្រាប់អ្នក។',
 g_inquire:'ពិភាក្សាពីគម្រោងស្រដៀងនេះ ↗',
 g_thumbs:'ជ្រើសរើសរូបភាពគម្រោង',
 dock_explore:'មើលគម្រោង',
 dock_cta:'ពិគ្រោះយោបល់ ↗',
 lang_group:'ភាសា',
 cat_Residential:'លំនៅដ្ឋាន',cat_Retail:'ពាណិជ្ជកម្ម',cat_Hospitality:'បដិសណ្ឋារកិច្ច',cat_Development:'គម្រោងអភិវឌ្ឍន៍',cat_Furnishing:'គ្រឿងសង្ហារិម',
 loc_PP:'ភ្នំពេញ',loc_Kampot:'កំពត',loc_Kandal:'កណ្ដាល',loc_KohKong:'កោះកុង',loc_SiemReap:'សៀមរាប',loc_Kep:'កែប',loc_Poipet:'ប៉ោយប៉ែត'
};

/* ---------- Project data (Khmer) ---------- */
const CATEGORY={Residential:'លំនៅដ្ឋាន',Retail:'ពាណិជ្ជកម្ម',Hospitality:'បដិសណ្ឋារកិច្ច',Development:'គម្រោងអភិវឌ្ឍន៍',Furnishing:'គ្រឿងសង្ហារិម'};
const PLACE={'Phnom Penh':'ភ្នំពេញ','Koh Pich, Phnom Penh':'កោះពេជ្រ ភ្នំពេញ','Kampot':'កំពត','Boeung Baitong, Phnom Penh':'បឹងបៃតង ភ្នំពេញ','Siem Reap':'សៀមរាប','Olympia, Phnom Penh':'អូឡាំពិច ភ្នំពេញ','Norodom Boulevard, Phnom Penh':'មហាវិថីព្រះនរោត្តម ភ្នំពេញ','Koh Kong':'កោះកុង','Toul Pongro, Phnom Penh':'ទួលពង្រ ភ្នំពេញ','Kandal':'កណ្ដាល','Kep':'កែប','Ring Road 30m':'ផ្លូវ ៣០ម៉ែត្រ','Chamchao, Phnom Penh':'ចោមចៅ ភ្នំពេញ','Poipet':'ប៉ោយប៉ែត'};
const LABEL={'The arrival':'ច្រកចូល','The garden elevation':'មុខអគារខាងសួនច្បារ','Interior detail':'ព័ត៌មានលម្អិតផ្ទៃក្នុង','The street perspective':'ទិដ្ឋភាពពីផ្លូវ','A classical welcome':'ការស្វាគមន៍បែបបុរាណ','Proportion and presence':'សមាមាត្រ និងភាពលេចធ្លោ','A private courtyard':'ទីធ្លាឯកជន','The formal dining room':'បន្ទប់បរិភោគអាហារផ្លូវការ','Light-filled living':'បន្ទប់ទទួលភ្ញៀវពោរពេញដោយពន្លឺ','The master suite':'បន្ទប់គេងមេ','Crafted storage':'ទូដាក់ឥវ៉ាន់រចនាពិសេស','Living by the water':'ការរស់នៅក្បែរទឹក','The street entrance':'ច្រកចូលពីផ្លូវ','Garden connections':'ការតភ្ជាប់ទៅសួនច្បារ','A riverside perspective':'ទិដ្ឋភាពមាត់ទន្លេ','Warmth and light':'ភាពកក់ក្តៅ និងពន្លឺ','Gather around':'ជួបជុំគ្នា','A private retreat':'ទីសម្រាកឯកជន','A softer palette':'ពណ៌ទន់ភ្លន់','Space for play':'កន្លែងលេងកម្សាន្ត','The urban facade':'មុខអគារក្នុងទីក្រុង','A place to welcome':'កន្លែងស្វាគមន៍','A space to meet':'កន្លែងប្រជុំ','Room to gather':'កន្លែងជួបជុំ','The arrival at dusk':'ច្រកចូលពេលព្រលប់','Architecture in the landscape':'ស្ថាបត្យកម្មក្នុងទេសភាព','The pool-facing elevation':'មុខអគារបែរទៅអាងហែលទឹក','The pool house':'ផ្ទះអាងហែលទឹក','A shaded veranda':'រានហាលមានម្លប់'};
const PROJECT={
 'pool-ii':['ផ្ទះអាងហែលទឹក II','ដំបូលអណ្តែត និងរនាំងឈើ ព័ទ្ធជុំវិញផ្ទះដែលភ្ជាប់ទៅនឹងពន្លឺ ខ្យល់ និងទឹក។'],
 'alice':['លំនៅដ្ឋាន Alice','សមាមាត្របែបបុរាណ បង្អួចក្លោង និងច្រកចូលដ៏ធំទូលាយ។ លំនៅដ្ឋានទំហំ ១.៥០០ ម៉ែត្រការ៉េ នៅភ្នំពេញ ដែលរចនាឡើងដោយផ្តោតលើភាពស្កឹមស្កៃ និងផាសុកភាព។'],
 'koh':['វីឡាកោះពេជ្រ','ស្ថាបត្យកម្មបែបនីអូក្លាស៊ីក ជួបនឹងផាសុកភាពសម័យទំនើប។ ច្រកចូលដ៏លេចធ្លោ នាំទៅកាន់លំហរស់នៅធំទូលាយ ផ្ទៃក្នុងរចនាយ៉ាងល្អិតល្អន់ និងទីធ្លាឯកជន។'],
 'kampot':['ផ្ទះវិស្សមកាលកំពត','ទីសម្រាកលំហែនៅមាត់ព្រែកកំពត។ ទម្រង់ធរណីមាត្រស្អាតបើកចំហទៅកាន់ទឹក និងបៃតង ខណៈផ្ទៃក្នុងកក់ក្តៅ និងលំហខាងក្រៅមានម្លប់ បង្កើតកន្លែងសម្រាប់សម្រាកដោយស្ងប់ស្ងាត់។'],
 'boeung':['អគារបឹងបៃតង','វត្តមានដ៏សុខដុមក្នុងទីក្រុង។ មុខអគារមានចង្វាក់ យ៉រដាំដើមឈើ និងមុខសូរ៉ូមធំទូលាយ ភ្ជាប់អគារទៅនឹងផ្លូវ។'],
 'private':['លំនៅដ្ឋានឯកជន','ធរណីមាត្រដិតដាម កញ្ចក់ធំទូលាយ និងរុក្ខជាតិត្រូពិក នាំមកនូវតុល្យភាពរវាងភាពឯកជន និងភាពបើកចំហ។ លំហខាងក្រៅមានម្លប់ និងទឹក ភ្ជាប់ផ្ទះទៅនឹងបរិស្ថានជុំវិញ។'],
 'kimly-siem':['ហាងគ្រឿងអលង្ការ Than Kimly, សៀមរាប','សសរមានស្នាមបន្ទាត់ ពណ៌មាសកក់ក្តៅ និងធ្នើតាំងបង្ហាញពន្លឺទន់ បង្កើតបរិយាកាសស្និទ្ធស្នាលសម្រាប់គ្រឿងអលង្ការដ៏ប្រណីត។'],
 'kimly-olympia':['ហាងគ្រឿងអលង្ការ Than Kimly, អូឡាំពិច','ច្រកចូលរាងក្លោង និងមុខអគារប្រហោងតូចៗ នាំទៅកាន់ពិភពនៃការតាំងបង្ហាញ និងសិប្បកម្មដែលរៀបចំយ៉ាងល្អិតល្អន់។'],
 'kimly-norodom':['ហាងគ្រឿងអលង្ការ Than Kimly, ព្រះនរោត្តម','មុខអគារភ្លឺស្វាងក្នុងទីក្រុង ផ្តល់វត្តមានពិសេសដល់ម៉ាកយីហោ ជាមួយសូរ៉ូមប្រណីត និងលំហជួបជុំឯកជននៅខាងក្នុង។'],
 'soho-shop':['ហាងគ្រឿងអគ្គិសនី SOHO','ប្លង់ហាងច្បាស់លាស់ ផ្គូផ្គងធ្នើតាំងផលិតផលដែលមានពន្លឺ ជាមួយឈើកក់ក្តៅ និងផ្ទៃខាងក្រោយពណ៌បៃតងជាសញ្ញាសម្គាល់។'],
 'cest':['ហាង C’est La Vie','ផ្ទៃផ្ទុយគ្នា ឈើកក់ក្តៅ និងការតាំងបង្ហាញដែលបានគិតគូរ នាំមកនូវភាពច្បាស់លាស់ និងអត្តចរិតដល់ហាងគ្រឿងសម្អាង។'],
 'mtt':['ការិយាល័យ ម៉ៅសេទុង','កន្លែងធ្វើការសម័យទំនើប រចនាឡើងសម្រាប់លំហការងារប្រកបដោយផលិតភាព កិច្ចសហការ និងវត្តមានដ៏សុខដុមនៅតាមផ្លូវ។'],
 'community':['ផ្សារទំនើប The Community','កន្លែងជួបជុំក្នុងសហគមន៍ ដែលភ្ជាប់ការដើរទិញឥវ៉ាន់ ជីវិតសង្គម និងលំហបើកចំហ។'],
 'cafe':['ហាងកាហ្វេកំពត','បរិយាកាសហាងកាហ្វេដ៏ស្ងប់ស្ងាត់ ដែលស្ថាបត្យកម្មសម័យទំនើបជួបនឹងសម្ភារៈធម្មជាតិ និងបៃតង។'],
 'apartment':['ការរចនាមុខអគារអាផាតមិនឡើងវិញ','មុខអគារក្នុងទីក្រុងដែលបានកែលម្អថ្មី ប្រើបន្ទាត់សម័យទំនើប និងចង្វាក់ស្ថាបត្យកម្មច្បាស់លាស់។'],
 'joli':['សណ្ឋាគារ JOLI Boutique','ជម្រកស្ងប់ស្ងាត់ក្នុងទីក្រុង ជាមួយផ្ទៃក្នុងស្វាគមន៍ អាងហែលទឹកលើដំបូល និងលំហសម្រាប់សម្រាកលំហែ។'],
 'getaway':['វីឡា Getaway កំពត','ទីសម្រាកលំហែនៅមាត់ទឹក ជាមួយលំហរស់នៅបើកចំហ ទេសភាពធំទូលាយ និងសម្ភារៈពណ៌កក់ក្តៅ។'],
 'farm':['ផ្ទះចម្ការ','ទីសម្រាកលំហែសម័យទំនើប ដែលបំផុសគំនិតពីភាពសាមញ្ញបែបប្រពៃណី បើកជីវិតប្រចាំថ្ងៃឆ្ពោះទៅកាន់ធម្មជាតិ។'],
 'kep':['លំនៅដ្ឋានកែប','លំនៅដ្ឋាននៅលើជម្រាលភ្នំ រចនាឡើងជុំវិញទេសភាពសមុទ្រ ការរស់នៅឯកជន និងទំនាក់ទំនងជិតស្និទ្ធជាមួយធម្មជាតិជុំវិញ។'],
 'tkl':['អាផាតមិន TKL','អគារលំនៅដ្ឋានសម័យទំនើប ជាមួយផ្ទៃក្នុងដែលរៀបចំយ៉ាងល្អិតល្អន់ និងរូបរាងបញ្ឈរដ៏លេចធ្លោ។'],
 'combowit':['Combowit, The Future 30m','គម្រោងអភិវឌ្ឍន៍ចម្រុះ ដែលភ្ជាប់លំនៅដ្ឋាន លំហពាណិជ្ជកម្ម និងអត្តសញ្ញាណស្ថាបត្យកម្មតែមួយ។'],
 'soho-residence':['លំនៅដ្ឋាន SOHO','គម្រោងអភិវឌ្ឍន៍លំនៅដ្ឋាន ដែលប្រមូលផ្តុំផ្ទះសម័យទំនើប និងបរិយាកាសសហគមន៍ដែលបានគិតគូរ។'],
 'th':['លំនៅដ្ឋាន TH','គម្រោងអភិវឌ្ឍន៍ចម្រុះ ដែលនាំជីវិតលំនៅដ្ឋាន និងពាណិជ្ជកម្ម មកក្នុងប្លង់ទីក្រុងរួមមួយ។'],
 'shh':['ផ្ទះល្វែង SHH','ការបកស្រាយបែបសម័យទំនើបនៃផ្ទះល្វែង ដែលភ្ជាប់អាជីវកម្មនៅជាន់ផ្ទាល់ដី ជាមួយការរស់នៅជាន់ខាងលើ។'],
 'chveang':['លំនៅដ្ឋាន Chveang Elite','សហគមន៍លំនៅដ្ឋានមានរបងការពារ ជាមួយស្ថាបត្យកម្មបុរាណបែបទំនើប និងលំហសាធារណៈដែលបានគិតគូរ។'],
 'casino':['កាស៊ីណូ ប៉ោយប៉ែត','មុខអគារបដិសណ្ឋារកិច្ចទ្រង់ទ្រាយធំ ជាមួយចង្វាក់ស្ថាបត្យកម្មរឹងមាំ និងច្រកចូលដ៏លេចធ្លោ។'],
 'park-city':['ផ្ទះគំរូ The Park City','គ្រឿងសង្ហារិមសម័យទំនើប វាយនភាពទន់ និងពន្លឺធម្មជាតិ បង្កើតផ្ទះគំរូដ៏គួរឲ្យទាក់ទាញ។'],
 'future-showroom':['សូរ៉ូម The Future 30m','សូរ៉ូមដែលបំពាក់គ្រឿងសង្ហារិម បង្ហាញពីសម្ភារៈ ព័ត៌មានលម្អិតផ្ទៃក្នុង និងលំហសម្រាប់ការរស់នៅប្រចាំថ្ងៃ។']
};

/* ---------- Dynamic strings ---------- */
const S={
 en:{
  projects:n=>n+' '+(n===1?'project':'projects'),
  groupCount:n=>pad(n)+' '+(n===1?'project':'projects'),
  allTypes:'All project types',allLocations:'All locations',
  cardMeta:n=>pad(n)+' views <span aria-hidden="true">·</span> Open gallery',
  cardAria:(name,n)=>`Open ${name} gallery, ${n} images`,
  viewN:(i,l)=>`View ${i}: ${l}`,
  copied:'Message copied. Paste it into your conversation with MG Design on Telegram.',
  copyFallback:'Select and copy the message above, then paste it into Telegram.',
  msgHello:'Hello MG Design, I would like to request a consultation.',
  msgName:'Name: ',msgType:'Project type: ',msgLocation:'Location: ',
  msgDate:d=>'Preferred date: '+d+' (Cambodia time)',msgDateTbd:'Preferred date: To discuss',
  msgInspired:'Inspired by: ',msgBrief:'Project brief: ',
  msgClose:'Please let me know the next steps and consultation availability.',
  title:'MG Design & Co. | Considered spaces'
 },
 km:{
  projects:n=>'គម្រោង '+kmNum(n),
  groupCount:n=>'គម្រោង '+kmNum(pad(n)),
  allTypes:KM.all_types,allLocations:KM.all_locs,
  cardMeta:n=>kmNum(pad(n))+' រូបភាព <span aria-hidden="true">·</span> បើកមើល',
  cardAria:(name,n)=>`បើកមើលរូបភាព ${name} (${kmNum(n)} រូប)`,
  viewN:(i,l)=>`មើលរូបទី ${kmNum(i)}៖ ${l}`,
  copied:'បានចម្លងសារ។ សូមបិទភ្ជាប់វាក្នុងការសន្ទនាជាមួយ MG Design នៅលើ Telegram។',
  copyFallback:'សូមជ្រើសរើស និងចម្លងសារខាងលើ រួចបិទភ្ជាប់ក្នុង Telegram។',
  msgHello:'សួស្តី MG Design ខ្ញុំចង់ស្នើសុំការពិគ្រោះយោបល់។',
  msgName:'ឈ្មោះ៖ ',msgType:'ប្រភេទគម្រោង៖ ',msgLocation:'ទីតាំង៖ ',
  msgDate:d=>'កាលបរិច្ឆេទដែលចង់បាន៖ '+d+' (ម៉ោងកម្ពុជា)',msgDateTbd:'កាលបរិច្ឆេទដែលចង់បាន៖ ពិភាក្សាបន្ថែម',
  msgInspired:'បំផុសគំនិតពី៖ ',msgBrief:'ព័ត៌មានគម្រោង៖ ',
  msgClose:'សូមជូនដំណឹងពីជំហានបន្ទាប់ និងពេលវេលាទំនេរសម្រាប់ការពិគ្រោះយោបល់។ អរគុណ!',
  title:'MG Design & Co. | ស្ថាបត្យកម្ម និងការរចនាផ្ទៃក្នុង'
 }
};

let lang='en';
try{const q=new URLSearchParams(location.search).get('lang');lang=(q==='km'||q==='en')?q:(localStorage.getItem(STORE)==='km'?'km':'en')}catch(e){}

const isKm=()=>lang==='km';
const t=(key,...args)=>{const v=(S[lang][key]!==undefined?S[lang]:S.en)[key];return typeof v==='function'?v(...args):v};
const category=c=>isKm()&&CATEGORY[c]||c;
const place=p=>isKm()&&PLACE[p]||p;
const label=l=>{if(!isKm())return l;const m=/^Portfolio view (\d+)$/.exec(l);return m?'រូបភាពទី '+kmNum(m[1]):(LABEL[l]||l)};
const project=(p,field)=>{if(!p)return '';if(isKm()&&PROJECT[p.id]){if(field==='name')return PROJECT[p.id][0];if(field==='story')return PROJECT[p.id][1];if(field==='place')return place(p.place);if(field==='category')return category(p.category)}return p[field]||''};
/* Khmer text for search, regardless of the current language */
const searchText=p=>PROJECT[p.id]?[PROJECT[p.id][0],PROJECT[p.id][1],PLACE[p.place]||'',CATEGORY[p.category]||''].join(' '):'';

/* ---------- Apply to the page ---------- */
const textNodes=[...document.querySelectorAll('[data-i18n]')];
textNodes.forEach(el=>{el.dataset.en=el.innerHTML});
const attrNodes=[...document.querySelectorAll('[data-i18n-attr]')];
attrNodes.forEach(el=>{el._i18n=el.dataset.i18nAttr.split(';').map(pair=>{const [attr,key]=pair.split('=');return {attr,key,en:el.getAttribute(attr)}})});
const cards=[...document.querySelectorAll('.project-choice')];
cards.forEach(card=>{const name=card.querySelector('.choice-name'),meta=card.querySelector('.choice-meta');card._en={name:name.textContent,meta:meta.innerHTML,aria:card.getAttribute('aria-label'),count:parseInt(meta.textContent,10)}});
const metaDesc=document.querySelector('meta[name="description"]'),metaDescEn=metaDesc&&metaDesc.content;
const META_KM='ស្ថាបត្យកម្ម ការរចនាផ្ទៃក្នុង និងលំហសម្រាប់ការរស់នៅ។ ស្វែងយល់ពីស្នាដៃរបស់ MG Design & Co. ទាំងលំនៅដ្ឋាន ហាង សណ្ឋាគារ និងច្រើនទៀត។';

function apply(){
 const km=isKm();
 document.documentElement.lang=km?'km':'en';
 document.title=t('title');
 if(metaDesc)metaDesc.content=km?META_KM:metaDescEn;
 textNodes.forEach(el=>{const v=km?KM[el.dataset.i18n]:undefined;el.innerHTML=v!==undefined?v:el.dataset.en});
 attrNodes.forEach(el=>el._i18n.forEach(({attr,key,en})=>el.setAttribute(attr,km&&KM[key]!==undefined?KM[key]:en)));
 cards.forEach(card=>{const en=card._en,id=card.dataset.id,name=km&&PROJECT[id]?PROJECT[id][0]:en.name;card.querySelector('.choice-name').textContent=name;card.querySelector('.choice-meta').innerHTML=km?t('cardMeta',en.count):en.meta;card.setAttribute('aria-label',km?t('cardAria',name,en.count):en.aria)});
 document.querySelectorAll('.lang-toggle button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
}
function setLang(next){
 if(next!=='km')next='en';
 if(next===lang)return;
 lang=next;
 try{localStorage.setItem(STORE,lang)}catch(e){}
 apply();
 document.dispatchEvent(new CustomEvent('langchange',{detail:{lang}}));
}
document.querySelectorAll('.lang-toggle button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));

window.i18n={t,isKm,lang:()=>lang,setLang,category,place,label,project,searchText,num:v=>isKm()?kmNum(v):String(v)};
apply();
})();
