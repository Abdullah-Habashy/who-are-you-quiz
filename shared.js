/* shared.js — common data & logic */

var LENS={
S:{en:"The Time Traveler",emoji:"⏳",ar:"القصة والسيرة",
   blurb:"You’re pulled in by a good story. Real journeys, real people, and how it all turned out.",
   tip:"ابدأ الموضوع بقصة من السيرة أو قصص الأنبياء، واحكيها كمشهد فيه تشويق، وخلّي الدرس يطلع من القصة.",
   ex:"الهجرة كرحلة هروب ونجاة، قصة يوسف عليه السلام من البئر للعرش، غزوة الخندق كقصة تخطيط وصبر."},
H:{en:"The Champion",emoji:"🏆",ar:"الأبطال والشخصيات",
   blurb:"You notice the people who step up when it counts, and you remember what made them great.",
   tip:"قدّم الصحابة والأنبياء كأبطال حقيقيين، وقارنهم بالأبطال اللي بيحبهم في الرياضة أو الألعاب أو الأفلام.",
   ex:"خالد بن الوليد القائد اللي ما اتهزمش، ثبات بلال، شجاعة علي يوم الهجرة، مصعب بن عمير."},
C:{en:"The Stargazer",emoji:"🔭",ar:"العلم والكون",
   blurb:"You want to know how things really work, from tiny cells to giant galaxies.",
   tip:"ابدأ من آية كونية أو معلومة علمية مدهشة، ووصّلها للعقيدة والتفكر في عظمة الخالق.",
   ex:"آيات خلق السماوات والأرض، دقة الكون في سورة الملك، جسم الإنسان وحكمة الوضوء والصيام."},
Q:{en:"The Thinker",emoji:"🧠",ar:"الأسئلة الكبيرة والنقاش",
   blurb:"You don’t just accept things. You ask the questions most people skip.",
   tip:"ابدأ بسؤال مفتوح، واسمع رأيه قبل ما تقول الإجابة، وادّيله أدلة عقلية يقتنع بيها.",
   ex:"ليه خلقنا ربنا؟ ليه في شر في الدنيا؟ إزاي نعرف إن القرآن من عند الله؟"},
G:{en:"The Strategist",emoji:"🎯",ar:"التحدي واللعب",
   blurb:"Give you a challenge and a clock, and you’re in. You like to win, and you like to figure things out.",
   tip:"حوّل المحتوى لمسابقات وألغاز ونقاط وتحديات بوقت، والشرح يكون جوه اللعبة مش قبلها.",
   ex:"اعرف الصحابي من ٣ تلميحات، رتّب أحداث السيرة ضد الوقت، تحدي الأذكار والأدعية."},
P:{en:"The Navigator",emoji:"🧭",ar:"التطبيق في حياته",
   blurb:"You care about what actually works in real life: with friends, at school, out in the world.",
   tip:"ابدأ من موقف من حياته اليومية في المدرسة والأصحاب والنت، وبعدين اعرض الحل والتوجيه من الدين.",
   ex:"أخلاق التعامل مع الأصحاب، الأمانة في الامتحانات، أذكار ومواقف اليوم، التعامل مع الغضب."},
M:{en:"The Maker",emoji:"🛠️",ar:"الإبداع والصناعة",
   blurb:"You learn by building. Give you a blank page and you’ll make something worth showing.",
   tip:"خليه يصنع حاجة بنفسه في كل موضوع: رسمة، كوميك، فيديو قصير، خريطة، أو عرض.",
   ex:"يرسم خريطة الهجرة، يعمل بوستر لحديث، يكتب كوميك عن قصة نبي، يصمم بطاقة ذكر."}
};
var LORDER=["S","H","C","Q","G","P","M"];

var P1=[
{sec:"Sports and activities",ar:"الرياضة والأنشطة",qs:[
 {id:"a1",t:"What sports or activities do you do in your free time?",ar:"الرياضات والأنشطة اللي بيمارسها",type:"text"},
 {id:"a2",t:"Do you mostly play sports, or watch them?",ar:"بيلعب ولا بيتفرج؟",type:"one",opts:["I play","I watch","Both","Neither, not my thing"]},
 {id:"a3",t:"Which team do you support? Any sport counts.",ar:"بيشجع أنهي فريق",type:"text"},
 {id:"a4",t:"Who’s your favorite player or athlete, and what do you like about them?",ar:"لاعبه المفضل وليه",type:"text"},
 {id:"a5",t:"Any other hobbies? Drawing, cooking, coding, building, music, anything.",ar:"هوايات تانية",type:"text"},
 {id:"a6",t:"What’s something you’re really good at, or taught yourself?",ar:"حاجة بيعرف يعملها كويس أو علّمها لنفسه",type:"text"}]},
{sec:"Games",ar:"الألعاب",qs:[
 {id:"g1",t:"Which games do you play? List as many as you like.",ar:"أسماء الألعاب اللي بيلعبها",type:"text"},
 {id:"g2",t:"What’s your all-time favorite game?",ar:"لعبته المفضلة",type:"text"},
 {id:"g3",t:"Who do you usually play with?",ar:"بيلعب مع مين",type:"many",opts:["Alone","Friends online","Friends in person","My brother or sister","Family"]},
 {id:"g4",t:"Which game do you spend the most hours on?",ar:"اللعبة اللي بياخد فيها أكتر وقت",type:"text"},
 {id:"g5",t:"What do you love most in a game?",ar:"أكتر حاجة بيحبها في اللعب",type:"many",opts:["Winning and competing","The story","Building and creating","Exploring the world","Playing with friends","Strategy and planning"]}]},
{sec:"Shows, movies, and anime",ar:"المسلسلات والأفلام والأنمي",qs:[
 {id:"s1",t:"Name 3 or 4 series you love.",ar:"٣ أو ٤ مسلسلات بيحبها",type:"text"},
 {id:"s2",t:"Name 3 or 4 movies you love.",ar:"٣ أو ٤ أفلام بيحبها",type:"text"},
 {id:"s3",t:"Any anime? Name 3 or 4, or skip this one.",ar:"٣ أو ٤ أنمي",type:"text"},
 {id:"s4",t:"Your favorite character from any of them, and why?",ar:"شخصيته المفضلة وليه",type:"text"},
 {id:"s5",t:"A scene that really stuck with you or moved you. What happened?",ar:"لقطة أثّرت فيه",type:"text"},
 {id:"s6",t:"What kind of stuff do you go for most?",ar:"الأنواع اللي بيفضلها",type:"many",opts:["Action","Comedy","Mystery","Sci-fi","Fantasy","Drama","Sports","Documentary","Horror"]}]},
{sec:"Online and free time",ar:"النت ووقت الفراغ",qs:[
 {id:"o1",t:"What do you watch most on YouTube or TikTok?",ar:"بيتفرج على إيه على يوتيوب وتيك توك",type:"many",opts:["Gaming","Sports","Science and tech","Comedy","How-to and DIY","Anime edits","History","Cars","Music","Vlogs"]},
 {id:"o2",t:"Any favorite YouTuber or creator?",ar:"صانع محتوى مفضل",type:"text"},
 {id:"o3",t:"Walk me through a normal day off, from waking up to going to sleep.",ar:"يوم إجازة عادي من الصحيان للنوم",type:"text"},
 {id:"o4",t:"What do you usually listen to?",ar:"بيسمع إيه عادة",type:"many",opts:["Music","Podcasts","Quran or nasheeds","Audiobooks","Not much"]},
 {id:"o5",t:"A free Saturday and unlimited money. What do you do?",ar:"يوم سبت فاضي وفلوس بلا حدود، هيعمل إيه",type:"text"}]}
];

var P2=[
{t:"Would you rather…",ar:"يكشف الميل للقصص والأبطال الحقيقيين مقابل التحدي والألغاز.",o:[["Watch a movie about a real-life hero",{H:2,S:1}],["Play a game where you solve a mystery",{G:2,Q:1}]]},
{t:"Pick a superpower.",ar:"يكشف القيم والاهتمام.",o:[["Time travel",{S:2}],["Knowing the answer to any question",{Q:2,C:1}],["Super strength",{H:2,G:1}],["Reading minds",{P:2}],["Creating anything you imagine",{M:2}]]},
{t:"Pizza or burger?",decoy:1,o:[["Pizza",{}],["Burger",{}],["Both, please",{}]]},
{t:"Your friend says: “Religion is just a list of rules.” What’s closest to your reaction?",ar:"يقيس موقفه الحقيقي من الدين.",o:[["Kind of true, honestly",{att:-2},"شايف الدين قواعد وبس. ركّز على المعنى والرحمة والهدف قبل الأحكام."],["Rules are fine if someone explains why",{W:2}],["No, there’s more to it than that",{att:2,E:1}],["I never really thought about it",{}]]},
{t:"“I like knowing the why behind things before I do them.”",tf:1,ar:"هل يحتاج يعرف الحكمة قبل الحكم.",o:[["Of course",{W:2,Q:1}],["I don’t think so",{P:1}]]},
{t:"A character is lost in the desert at night. Pick the ending you like best.",ar:"يكشف الميل للعلم أو العلاقات أو المغامرة أو التأمل.",o:[["He finds his way using the stars",{C:2}],["A stranger shows up and helps him",{P:2}],["He stumbles on a hidden treasure",{G:2}],["He learns something about himself",{Q:1,E:2}]]},
{t:"How long can you watch a video before you skip it?",ar:"يحدد الطول المناسب لكل جزء في الحصة.",o:[["Under a minute",{span:1}],["2 to 5 minutes",{span:2}],["10 minutes or more, if it’s good",{span:3}]]},
{t:"You get a new game. What do you do first?",ar:"يكشف طريقته في التعلم.",o:[["Jump in and figure it out",{G:2,P:1}],["Watch someone else play it",{H:1,S:1}],["Read the guide or wiki",{C:1,W:1}],["Ask a friend to teach me",{soc:1}]]},
{t:"Cats or dogs?",decoy:1,o:[["Cats",{}],["Dogs",{}],["Neither",{}]]},
{t:"In a group project, you’re usually the one who…",ar:"يكشف دوره الطبيعي في المجموعة.",o:[["Takes charge",{H:1,cmp:1}],["Comes up with the ideas",{M:2}],["Makes it look good",{M:1}],["Does the research",{C:2,W:1}],["Keeps everyone getting along",{P:2,soc:1}],["Lets the others handle it",{},"صريح إنه بيسيب الشغل لغيره. محتاج مهام صغيرة وواضحة."]]},
{t:"“I get bored when someone talks for more than five minutes.”",tf:1,ar:"يؤكد قدرته على متابعة الشرح الطويل.",o:[["True",{spanAdj:-1}],["False",{}]]},
{t:"You can only visit one room in a museum. Which one?",ar:"يكشف المجال الأقرب لاهتمامه.",o:[["Dinosaurs and outer space",{C:2}],["Ancient kingdoms and great battles",{S:2,H:1}],["Inventions you can touch and try",{M:2,G:1}],["Stories of famous people",{H:2}],["Unsolved mysteries",{Q:2,G:1}]]},
{t:"A teacher asks a hard question nobody knows. You…",ar:"يكشف المنافسة أو التفكير أو الانسحاب.",o:[["Guess anyway. A win is a win",{G:2,cmp:1}],["Think it through quietly",{Q:2}],["Wait for someone else to answer",{}],["Ask why the question even matters",{W:2}]]},
{t:"“Sometimes I wonder what the point of life is.”",tf:1,ar:"يكشف انشغاله بسؤال الغاية من الحياة.",o:[["True",{Q:2},"بيفكر في معنى الحياة. موضوع الغاية من الخلق هيلمسه جداً."],["False",{P:1}]]},
{t:"Pick a book by its cover.",ar:"يكشف المدخل المفضل.",o:[["A ship in a huge storm",{S:2}],["A galaxy full of stars",{C:2}],["A maze seen from above",{G:2}],["A notebook called “How to Handle Anything”",{P:2}],["A blank sketchbook",{M:2}]]},
{t:"What’s the best part of a good movie?",ar:"يكشف إيه اللي بيشده في أي قصة.",o:[["The plot twist",{Q:1,G:1}],["The hero’s comeback",{H:2}],["The friendship",{P:2,soc:1}],["The world and the visuals",{C:1,M:1}],["The funny moments",{}]]},
{t:"Morning person or night owl?",decoy:1,o:[["Morning person",{}],["Night owl",{}],["Depends on the day",{}]]},
{t:"Someone at school says: “Muslims are way too strict.” You’d most likely…",ar:"يكشف اعتزازه بهويته.",o:[["Explain what I know, calmly",{att:1,W:1}],["Change the subject",{},"بيتهرب من الموضوع. ممكن يكون محرج من دينه قدام أصحابه."],["Kind of agree, a little",{att:-1},"متأثر جزئياً بفكرة إن الإسلام متشدد."],["Not be sure what to say",{Q:1},"مش عارف يرد. محتاج إجابات بسيطة يقدر يقولها."]]},
{t:"“I’d rather do something with my hands than listen to someone explain it.”",tf:1,ar:"يكشف هل بيتعلم بالعمل.",o:[["True",{M:2,P:1}],["False",{S:1}]]},
{t:"Pick a reward.",ar:"يكشف الحافز الأقوى عنده.",o:[["Points and a spot on the leaderboard",{G:2,cmp:1}],["A mind-blowing fact",{C:2}],["A great story to tell my friends",{S:2}],["A skill I can actually use",{P:2}],["Making something I can show off",{M:2}]]},
{t:"Some people say they feel calm after praying. Have you felt that?",ar:"يقيس الأثر الروحي للعبادة.",o:[["Yes, often",{att:2,E:2}],["Sometimes",{att:1,E:1}],["Not really",{att:-1},"مش حاسس بأثر روحي للعبادة لسه. ابدأ بمعنى الصلاة ومشاعرها."],["Never thought about it",{}]]},
{t:"You can follow only one person online. Who?",ar:"يكشف نوع القدوة اللي بيشده.",o:[["An astronaut",{C:2}],["A top athlete",{H:2,G:1}],["A world traveler",{S:1,C:1}],["An inventor or builder",{M:2}],["Someone who helps people in need",{P:2,E:1}]]},
{t:"Sweet or salty?",decoy:1,o:[["Sweet",{}],["Salty",{}],["Spicy",{}]]},
{t:"When things get tough, what helps you most?",ar:"يكشف المدخل الأنسب لموضوعات الصبر.",o:[["Hearing about someone who went through the same",{S:2,H:1}],["A clear step-by-step plan",{P:2}],["Talking to someone I trust",{soc:1,E:1}],["Figuring out why it happened",{Q:2,W:1}],["Taking my mind off it with a game",{G:1}]]},
{t:"“I enjoy a good debate, even if I lose.”",tf:1,ar:"يكشف هل النقاش أسلوب مناسب له.",o:[["True",{Q:2,cmp:1}],["False",{}]]},
{t:"A kid finds an old map in the attic. What happens next?",ar:"يكشف الميل للمغامرة أو الجماعة أو الإبداع.",o:[["He follows it alone",{G:1}],["He brings his friends along",{soc:1,P:1}],["He researches where it came from",{C:1,W:1}],["He draws his own map",{M:2}],["It belonged to his great-grandfather",{S:2}]]},
{t:"“Stories from history feel far away. They’re not really about me.”",tf:1,ar:"يقيس مدى تقبّله للسيرة والتاريخ.",o:[["True",{S:-2},"التاريخ بعيد عنه. لو هتحكي سيرة، اربطها بموقف من حياته الحالية."],["False",{S:2}]]},
{t:"Choose your challenge.",ar:"يكشف نوع النشاط اللي هيتحمس له.",o:[["Memorize 10 things in one minute",{G:2}],["Build a bridge out of paper",{M:2}],["Solve a tricky riddle",{Q:2}],["Guess a famous person from clues",{H:1,G:1}],["Plan the perfect trip",{P:2}]]},
{t:"Your ideal class is…",ar:"يكشف شكل الحصة المفضل.",o:[["Short, with lots of games",{G:2,spanAdj:-0.5}],["One really good story",{S:2}],["A discussion where I share my opinion",{Q:2}],["A real project I build",{M:2,P:1}],["Packed with amazing facts",{C:2}]]},
{t:"“If I don’t see why something matters, I stop listening.”",tf:1,ar:"هل لازم يشوف أهمية الموضوع قبل ما يتابع.",o:[["True",{W:2,P:1}],["False",{}]]},
{t:"Summer or winter?",decoy:1,o:[["Summer",{}],["Winter",{}]]},
{t:"Your friend asks: “Why believe in something you can’t see?” What do you think?",ar:"يكشف علاقته بأسئلة الإيمان.",o:[["Good question. I’ve wondered too",{Q:2},"عنده تساؤلات حقيقية عن الإيمان. ده باب ممتاز لحصص عقيدة بالنقاش."],["There are signs everywhere if you look",{C:2,att:1}],["Some things you just feel",{E:2,att:1}],["I’d rather not get into that",{att:-1},"بيتجنب أسئلة الإيمان العميقة."]]}
];

var FINAL=[
{id:"f1",t:"If you could ask one question and get a true answer, what would you ask?",ar:"لو يقدر يسأل سؤال واحد ويعرف إجابته الحقيقية"},
{id:"f2",t:"Anything you’d like your teacher to know about you?",ar:"حاجة حابب المدرس يعرفها عنه"}
];

var P2_RANGES={A:{s:0,e:11},B:{s:11,e:22},C:{s:22,e:32}};

function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function arDigits(n){return String(n).replace(/\d/g,function(d){return"٠١٢٣٤٥٦٧٨٩"[d];});}

function getName(){try{return localStorage.getItem("lq_name")||"";}catch(e){return "";}}
function setName(n){try{localStorage.setItem("lq_name",n);}catch(e){}}

function encodePart(prefix,data){
  var json=JSON.stringify(data);
  var b64=btoa(unescape(encodeURIComponent(json))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
  return prefix+"-"+b64;
}
function decodePart(code){
  code=code.replace(/\s+/g,"");
  var dash=code.indexOf("-");
  if(dash<2)throw new Error("bad");
  var prefix=code.slice(0,dash);
  var b=code.slice(dash+1).replace(/-/g,"+").replace(/_/g,"/");
  while(b.length%4)b+="=";
  var data=JSON.parse(decodeURIComponent(escape(atob(b))));
  data._prefix=prefix;
  return data;
}

function mergeAll(codes){
  var merged={n:"",d:"",a:{},b:new Array(P2.length),c:{}};
  var parts=[];
  codes.forEach(function(raw){
    try{
      var d=decodePart(raw);
      if(d.n)merged.n=d.n;
      if(d.d)merged.d=d.d;
      if(d.a)Object.keys(d.a).forEach(function(k){merged.a[k]=d.a[k];});
      if(d.b&&d.off!=null)d.b.forEach(function(v,i){if(v!=null)merged.b[d.off+i]=v;});
      if(d.c&&d.off!=null)Object.keys(d.c).forEach(function(k){merged.c[d.off+parseInt(k)]=d.c[k];});
      parts.push(d._prefix);
    }catch(e){}
  });
  merged._parts=parts;
  return merged;
}

function score(d){
  var tot={},max={};LORDER.forEach(function(k){tot[k]=0;max[k]=0;});
  var x={att:0,W:0,E:0,cmp:0,soc:0,span:2,spanAdj:0},flags=[];
  P2.forEach(function(q,i){
    LORDER.forEach(function(k){var m=0;q.o.forEach(function(o){if((o[1][k]||0)>m)m=o[1][k];});max[k]+=m;});
    var c=d.b[i];if(c==null||!q.o[c])return;
    var s=q.o[c][1];
    LORDER.forEach(function(k){if(s[k])tot[k]+=s[k];});
    ["att","W","E","cmp","soc","spanAdj"].forEach(function(k){if(s[k])x[k]+=s[k];});
    if(s.span)x.span=s.span;
    if(q.o[c][2])flags.push(q.o[c][2]);
  });
  var g3=d.a.g3||[];if(g3.some(function(v){return v!=="Alone";}))x.soc+=1;
  var g5=d.a.g5||[];if(g5.indexOf("Winning and competing")>-1)x.cmp+=1;
  var pct={};LORDER.forEach(function(k){pct[k]=max[k]?Math.max(0,Math.round(tot[k]/max[k]*100)):0;});
  var rank=LORDER.slice().sort(function(a,b){return pct[b]-pct[a];});
  return{pct:pct,rank:rank,x:x,flags:flags};
}

function getPartState(key){try{var s=localStorage.getItem(key);return s?JSON.parse(s):null;}catch(e){return null;}}
function setPartState(key,st){try{localStorage.setItem(key,JSON.stringify(st));}catch(e){}}
function getPartCode(key){try{return localStorage.getItem(key+"_code")||"";}catch(e){return "";}}
function setPartCode(key,code){try{localStorage.setItem(key+"_code",code);}catch(e){}}
