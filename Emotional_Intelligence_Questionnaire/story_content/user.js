function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6XRg6JRtPyo":
        Script1();
        break;
      case "5oA4BklQYqN":
        Script2();
        break;
      case "6odkd3v3kjj":
        Script3();
        break;
      case "6mg6AYQoVWW":
        Script4();
        break;
      case "6VC4X1Hjje8":
        Script5();
        break;
      case "6eWwftkuXOh":
        Script6();
        break;
      case "5kz74qLu9gl":
        Script7();
        break;
  }
}

function Script1()
{
  //Copy and paste this entire script into a JavaScript trigger in your Storyline file (best to do this at the very beginning of the file)

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script);
}

function Script2()
{
  var player = GetPlayer();

function findLMSAPI(win) {
// look in this window
if (win.hasOwnProperty("GetStudentID")) return win;

// all done if no parent
else if (win.parent == win) return null;

// climb up to parent window & look there
else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
var myName = lmsAPI.GetStudentName();
var array = myName.split(',');
var newName = array[1] + ' ' + array[0];
player.SetVar("learnerName", newName);
}

function Script3()
{
  var player = GetPlayer();

// Feedback text to be referenced later
var jsSelfAw_1 = ["Low Self Awareness", "This indicates that you pay little attention to your own emotions and how they are affected by and impact those around you. You may have an unrealistic concept of your own abilities and a lack of self confidence."];
var jsSelfAw_2 = ["Below Average Self Awareness", "This indicates that your sense of how you are feeling about yourself and the situations you encounter is a bit hit and miss. This has a negative influence on your self confidence and how you view your abilities."];
var jsSelfAw_3 = ["Moderate Self Awareness", "You have a moderate sense of how you are feeling about yourself and the situations you encounter. This awareness corresponds to how you view your abilities and your sense of self confidence."];
var jsSelfAw_4 = ["Above Average Self Awareness", "This indicates that you have a keen sense of how you are feeling about yourself and the situations you encounter. This generally has a positive influence on your self confidence and how you view your abilities."];
var jsSelfAw_5 = ["High Self Awareness", "This indicates that you are acutely aware of how your emotions are affected by, and affect, others. You have an accurate concept of your strengths and weakenesses and a strong positive sense of self confidence. "];

var jsSelfMan_1 = ["Low Self Management", "This means that you are often overwhelmed by your emotions. As a result your emotional state frequently hijacks how you react to circumstances leading to inconsistency in approach and lack of adaptibility."];
var jsSelfMan_2 = ["Below Average Self Management", "This means that you struggle to control your emotions. As a result your emotions sometimes influence how you react, impeding your ability to be consistent in your approach and adabtable to changing circumstances."];
var jsSelfMan_3 = ["Moderate Self Management", "This means that you have an ability to control your emotions and act more objectively in some situations. This helps you to be more consistent in your approach and adaptable to changing circumstances."];
var jsSelfMan_4 = ["Above Average Self Management", "This means that you are frequently able to control your emotions. As a result you are often able to act more objectively. This helps you to be consistent in your approach and adaptable to changing circumstances and opportunities."];
var jsSelfMan_5 = ["High Self Management", "This means that you can effectively control your emotions. You can distance yourself from how you 'feel' about things and act more objectively, enabling you to be consistent in your approach and adaptable to changing circumstances, seeking opportunities."];

var jsSocAw_1 = ["Low Social Awareness", "This means that you struggle to read social cues and orientate yourself appropriately. This impairs your ability to empathise with others' emotions and recognise their needs, or read and negotiate your way through workplace politics."];
var jsSocAw_2 = ["Below Average Social Awareness", "This means that your ability to read social cues is a bit hit and miss. This negatively affects your ability to empathise with others and recognise their needs. You find negotiating your way through workplace politics challenging."];
var jsSocAw_3 = ["Moderate Social Awareness", "This means that you have skills to read social cues and orientate yourself accordingly. You can generally empathise with others and recognise their needs, as well as understand workplace politics and your position within them."];
var jsSocAw_4 = ["Above Average Social Awareness", "This means that you are skilled at reading social cues and orientate yourself appropriately. You can empathise with others and recognise their needs and effectively navigate workplace politics."];
var jsSocAw_5 = ["High Social Awareness", "This means that you are adept at reading social cues and orientate yourself well. You are skilled at empathising with others emotions and recognising their needs. You are highly aware of work place politics and negotiate them accordingly."];

var jsSocSk_1 = ["Low Social Skill", "You lack ability to communicate effectively and make meaningful connections with people. This impedes collaboration, as well as how you manage others and deal with conflicts."];
var jsSocSk_2 = ["Below Average Social Skill", "You don't always communicate effectively. Collaboration can be challenging particularly when it comes to managing others and dealing with conflicts."];
var jsSocSk_3 = ["Moderate Social Skill", "You are moderately skilled in communication and make meaningful connections. You can manage others and deal with conflicts. With the right audience you are influential and inspiring."];
var jsSocSk_4 = ["Above Average Social Skill", "You are a good communicator and make meaningful connections in most circumstances. You can manage people and conflicts, improving collaboration. You can be influential and inspiring."];
var jsSocSk_5 = ["High Social Skill", "You communicate effectively and easily make meaningful connections. This enhances how you collaborate, manage others and deal with conflicts. You are influential and inspiring."];

var jsSelfAw_ASA_1 = ["Poor Self Assessment", "Your ability to self assess your strengths and weakenesses is often inaccurate."];
var jsSelfAw_ASA_2 = ["Reliable Self Assessment", "Your ability to self assess your strengths and weakenesses is quite accurate most of the time."];
var jsSelfAw_ASA_3 = ["Accurate Self Assessment", "Your ability to self assess your strengths and weakenesses is usually accurate."];
var jsSelfAw_EA_1 = ["Low Emotional Awareness", "You can find it difficult to recognise your emotions and  how they impact your behaviour and others."];
var jsSelfAw_EA_2 = ["Some Emotional Awareness", "You can generally recognise your emotions and  how they impact your behaviour and others."];
var jsSelfAw_EA_3 = ["High Emotional Awareness", "You are keenly aware of your emotions and  how they impact your behaviour and others."];
var jsSelfAw_SCf_1 = ["Low Self Confidence", "Possibly due to lack of belief in your own value and abilities."];
var jsSelfAw_SCf_2 = ["Quite Self Confident", "You generally believe in your own intrinsic value and abilities."];
var jsSelfAw_SCf_3 = ["Very Self Confident", "You believe strongly in your own value and abilities."];
var jsSelfMan_A_1 = ["Not very Adaptable", "You don't respond well to changing circumstances."];
var jsSelfMan_A_2 = ["Quite Adaptable", "You respond fairly well to changing circumstances and associated obstacles."];
var jsSelfMan_A_3 = ["Highly Adaptable", "You respond very effectively to changing circumstances overcoming obstacles and difficulties."];
var jsSelfMan_Cn_1 = ["Not very Conscientious", "You struggle to manage yourself and your responsibilities."];
var jsSelfMan_Cn_2 = ["Quite Conscientious", "You are generally able to manage yourself and your responsibilities effectively."];
var jsSelfMan_Cn_3 = ["Very Conscientious", "You usually manage yourself and your responsibilities effectively."];
var jsSelfMan_D_1 = ["Low level of Drive", "You generally demonstrate a lack of motivation and will to get things done."];
var jsSelfMan_D_2 = ["Moderately Driven", "You demonstrate a moderate level of motivation and enjoy achieving things."];
var jsSelfMan_D_3 = ["Highly Driven", "You demonstrate a high level of motivation and thrive on achieving things."];
var jsSelfMan_It_1 = ["Low Initiative", "You don't tend to look for or act on opportunities."];
var jsSelfMan_It_2 = ["Moderate Initiative", "You act on opportunities when there is a good chance of success."];
var jsSelfMan_It_3 = ["High Initiative", "You are always on the look out for opportunities and tend to act quickly."];
var jsSelfMan_SCt_1 = ["Low Self Control", "You are often overwhelmed by disruptive emotions, diminishing your freedom of choice in how to act."];
var jsSelfMan_SCt_2 = ["Moderate Self Control", "You can generally keep disruptive emotions in check giving you more choice in how you act."];
var jsSelfMan_SCt_3 = ["High Self Control", "You are very rarely overwhelmed by disruptive emotions, giving you freedom of choice in how you act."];
var jsSelfMan_Tr_1 = ["Low Trustworthiness", "You are inconsistent in demonstrating honesty and integrity and this can be seen as being unreliable."];
var jsSelfMan_Tr_2 = ["Quite Trustworthy", "You are fairly consistent in demonstrating honesty and integrity and are seen as being reliable in most circumstances."];
var jsSelfMan_Tr_3 = ["Very Trustworthy", "You are highly consistent in demonstrating honesty and integrity and are seen as being highly reliable and dependable."];
var jsSocAw_E_1 = ["Low Empathy", "You don't often pick up on how other people are feeling or act accordingly."];
var jsSocAw_E_2 = ["Quite Empathetic", "You pick up on how other people are feeling and take an active interest."];
var jsSocAw_E_3 = ["Very Empathetic", "You are sensitive to other people's emotions and respond quickly and effectively."];
var jsSocAw_OA_1 = ["Not Organisationally Aware", "You don't read the hierarchy and politics within your organisation as a matter of course."];
var jsSocAw_OA_2 = ["Quite Organisationally Aware", "You read the hierarchy and politics within your organisation and position yourself accordingly."];
var jsSocAw_OA_3 = ["Very Organisationally Aware", "You are tuned into the hierarchy and politics of your organisation and negotiate them skillfully."];
var jsSocAw_SO_1 = ["Not Service Orientated", "You don’t tend to engage with the needs of customers."];
var jsSocAw_SO_2 = ["Quite Service Orientated", "You recognise customers' needs and respond appropriately where possible."];
var jsSocAw_SO_3 = ["Very Service Orientated", "You take a keen interest in understanding customers and meeting their needs."];
var jsSocSk_BB_1 = ["Seldom Build Bonds", "You don't tend to take the initiative with maintaining existing relationships or expanding your network."];
var jsSocSk_BB_2 = ["Sometimes Build Bonds", "You maintain existing relationships and sometimes take the initiative in expanding your network."];
var jsSocSk_BB_3 = ["Proactively Build Bonds", "You actively cultivate existing relationships and take the initiative in expanding your network."];
var jsSocSk_CC_1 = ["Not a Change Catalyst", "You don't tend to initiate new ideas and take the lead."];
var jsSocSk_CC_2 = ["Sporadic Change Catalyst", "In certain circumastances you'll see an opportunity for change and take the lead."];
var jsSocSk_CC_3 = ["Effective Change Catalyst", "You're highly skilled at seeing opportunities for change and taking the lead."];
var jsSocSk_Cm_1 = ["Limited Communicator", "Your ability to listen actively and respond in a clear convincing manner could be developed."];
var jsSocSk_Cm_2 = ["Adequate Communicator", "You are able to use active listening and get your message across effectively in most circumstances."];
var jsSocSk_Cm_3 = ["Good Communicator", "You are skilled both at active listening and getting your message over in clear, convincing and appropriate ways."];
var jsSocSk_CMn_1 = ["Poor Conflict Manager", "You demonstrate a limited ability to diffuse conflicts and achieve satisfactory resolutions."];
var jsSocSk_CMn_2 = ["Adequate Conflict Manager", "You have the capability to diffuse conflicts and achieve satisfactory resolutions in certain circumstances."];
var jsSocSk_CMn_3 = ["Good Conflict Manager", "You are highly adept at resolving conflicts and reaching satisfactory outcomes in most circumstances."];
var jsSocSk_DO_1 = ["Rarely Develop Others", "You seldom provide feedback and guidance designed to support the development of others."];
var jsSocSk_DO_2 = ["Sometimes Develop Others", "You sometimes provide feedback and guidance designed to support the development of others."];
var jsSocSk_DO_3 = ["Frequently Develop Others", "You frequently provide feedback and guidance designed to support the development of others."];
var jsSocSk_If_1 = ["Low Influence", "You demonstrate a limited ability to persuade or influence others."];
var jsSocSk_If_2 = ["Moderately Influential", "You have a range a means at your disposal to persuade or influence others."];
var jsSocSk_If_3 = ["Highly Influential", "You are highly skilled at persuading and influencing others."];
var jsSocSk_TC_1 = ["Reticent in Collaboration", "You take a fairly passive approach to teamwork and collaboration."];
var jsSocSk_TC_2 = ["Active in Collaboration", "You engage fully in teamwork and collaboration and appreciate its value."];
var jsSocSk_TC_3 = ["Promote Collaboration", "You actively promote teamwork and collaboration and take a lead role."];
var jsSocSk_VL_1 = ["Low Visonary Leadership", "You demonstrate little aptitude for inpiring people with a compelling vision."];
var jsSocSk_VL_2 = ["Some Visionary Leadership", "You have ability to convey a vision and inspire people to action."];
var jsSocSk_VL_3 = ["High Visionary Leadership", "You are skilled at inspiring people to action by communicating a compelling vision."];

//variables to refer to competency levels - low, medium high
var low = 1;
var med = 2;
var high = 3;

//alert("start getting question results");
// Get question results and combine to get a score from 2-10 for each competency
var jsSelfAw_ASA = player.GetVar("SelfAw_ASA_Q1") + player.GetVar("SelfAw_ASA_Q2");
var jsSelfAw_EA = player.GetVar("SelfAw_EA_Q1") + player.GetVar("SelfAw_EA_Q2");
var jsSelfAw_SCf = player.GetVar("SelfAw_SCf_Q1") + player.GetVar("SelfAw_SCf_Q2");
var jsSelfMan_A = player.GetVar("SelfMan_A_Q1") + player.GetVar("SelfMan_A_Q2");
var jsSelfMan_Cn = player.GetVar("SelfMan_Cn_Q1") + player.GetVar("SelfMan_Cn_Q2");
var jsSelfMan_D = player.GetVar("SelfMan_D_Q1") + player.GetVar("SelfMan_D_Q2");
var jsSelfMan_It = player.GetVar("SelfMan_It_Q1") + player.GetVar("SelfMan_It_Q2");
var jsSelfMan_SCt = player.GetVar("SelfMan_SCt_Q1") + player.GetVar("SelfMan_SCt_Q2");
var jsSelfMan_Tr = player.GetVar("SelfMan_Tr_Q1") + player.GetVar("SelfMan_Tr_Q2");
var jsSocAw_E = player.GetVar("SocAw_E_Q1") + player.GetVar("SocAw_E_Q2");
var jsSocAw_OA = player.GetVar("SocAw_OA_Q1") + player.GetVar("SocAw_OA_Q2");
var jsSocAw_SO = player.GetVar("SocAw_SO_Q1") + player.GetVar("SocAw_SO_Q2");
var jsSocSk_BB = player.GetVar("SocSk_BB_Q1") + player.GetVar("SocSk_BB_Q2");
var jsSocSk_CC = player.GetVar("SocSk_CC_Q1") + player.GetVar("SocSk_CC_Q2");
var jsSocSk_Cm = player.GetVar("SocSk_Cm_Q1") + player.GetVar("SocSk_Cm_Q2");
var jsSocSk_CMn = player.GetVar("SocSk_CMn_Q1") + player.GetVar("SocSk_CMn_Q2");
var jsSocSk_DO = player.GetVar("SocSk_DO_Q1") + player.GetVar("SocSk_DO_Q2");
var jsSocSk_If = player.GetVar("SocSk_If_Q1") + player.GetVar("SocSk_If_Q2");
var jsSocSk_TC = player.GetVar("SocSk_TC_Q1") + player.GetVar("SocSk_TC_Q2");
var jsSocSk_VL = player.GetVar("SocSk_VL_Q1") + player.GetVar("SocSk_VL_Q2");

//alert("calculate scoring");

// Function to remap percentage from range 20 to 100, to range 0 to 100; DECIDED NOT TO USE
function reMap( value, r1, r2 ) { 
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

var r2 = [0, 100];

// Calculate scoring for each domain and express as a percentage
var jsSelfAw = Math.round(((jsSelfAw_ASA + jsSelfAw_EA + jsSelfAw_SCf) /30) * 100);
var jsSelfMan = Math.round(((jsSelfMan_A + jsSelfMan_Cn + jsSelfMan_D + jsSelfMan_It + jsSelfMan_SCt + jsSelfMan_Tr) /60) *100);
var jsSocAw = Math.round(((jsSocAw_E + jsSocAw_OA + jsSocAw_SO) /30) * 100);
var jsSocSk = Math.round(((jsSocSk_BB + jsSocSk_CC + jsSocSk_Cm + jsSocSk_CMn + jsSocSk_DO + jsSocSk_If + jsSocSk_TC + jsSocSk_VL) /80) * 100); 


// Calculate scoring for each leadership type and express as a percentage
var jsCoercive = Math.round(((jsSelfAw_EA + jsSelfAw_ASA + jsSelfAw_SCf + jsSelfMan_SCt + jsSelfMan_Cn + jsSelfMan_D + jsSelfMan_It + jsSocAw_E + jsSocSk_Cm) /90) * 100);
var jsPaceSetting = Math.round(((jsSelfAw_EA + jsSelfAw_ASA + jsSelfAw_SCf + jsSelfMan_SCt + jsSelfMan_Cn + jsSelfMan_A + jsSelfMan_D + jsSelfMan_It + jsSocAw_E) /90) * 100);
var jsAuthoritative = Math.round(((jsSelfAw_EA + jsSelfAw_ASA + jsSelfAw_SCf + jsSelfMan_Tr + jsSelfMan_D + jsSocAw_E + jsSocAw_SO + jsSocSk_Cm + jsSocSk_VL + jsSocSk_CC) /100) *100);
var jsAffiliative = Math.round(((jsSelfAw_EA + jsSocSk_Cm + jsSelfMan_Tr + jsSocAw_E + jsSocAw_OA + jsSocSk_If + jsSocSk_VL + jsSocSk_CMn + jsSocSk_BB + jsSocSk_TC) /100) *100);
var jsDemocratic = Math.round(((jsSocSk_VL + jsSelfAw_SCf + jsSelfMan_SCt + jsSelfMan_A + jsSocAw_E + jsSocAw_OA + jsSocSk_If + jsSocSk_Cm + jsSocSk_CMn + jsSocSk_TC) /100) *100);
var jsCoaching = Math.round(((jsSelfAw_EA + jsSelfAw_ASA + jsSelfMan_SCt + jsSelfMan_Tr +  jsSelfMan_A + jsSocAw_E + jsSocSk_DO + jsSocSk_Cm + jsSocSk_BB) /90) *100);

// Add domain scores to an array and sort
var jsDomScores = [{ key: 'Self Awareness', value: jsSelfAw }, { key: 'Self Management', value: jsSelfMan }, { key: 'Social Awareness', key: jsSocAw }, { key: 'Social Skills', value: jsSocSk }];
jsDomScores.sort(function(obj1, obj2) {
return obj1.value - obj2.value;
});

// Add leadership types to an array and sort
var jsLeadership = [{ key: 'Coercive', value: jsCoercive }, { key: 'Pacesetting', value: jsPaceSetting }, { key: 'Authoritative', key: jsAuthoritative }, { key: 'Affiliative', value: jsAffiliative }, { key: 'Democratic', value: jsDemocratic }, { key: 'Coaching', value: jsCoaching }];
jsLeadership.sort(function(obj1, obj2) {
return obj1.value - obj2.value;
});

// Set feedback text and bullets according to score
if (jsSelfAw >= 20 && jsSelfAw <= 35) {
player.SetVar("SelfAwHeader", jsSelfAw_1[0]);
player.SetVar("SelfAwFB", jsSelfAw_1[1]);
} else if (jsSelfAw >= 36 && jsSelfAw <= 51) {
player.SetVar("SelfAwHeader", jsSelfAw_2[0]);
player.SetVar("SelfAwFB", jsSelfAw_2[1]);
} else if (jsSelfAw >= 52 && jsSelfAw <= 67) {
player.SetVar("SelfAwHeader", jsSelfAw_3[0]);
player.SetVar("SelfAwFB", jsSelfAw_3[1]);
} else if (jsSelfAw >= 68 && jsSelfAw <= 83) {
player.SetVar("SelfAwHeader", jsSelfAw_4[0]);
player.SetVar("SelfAwFB", jsSelfAw_4[1]);
} else if (jsSelfAw >= 84 && jsSelfAw<= 100) {
player.SetVar("SelfAwHeader", jsSelfAw_5[0]);
player.SetVar("SelfAwFB", jsSelfAw_5[1]);
}

if (jsSelfMan >= 20 && jsSelfMan <= 35) {
player.SetVar("SelfManHeader", jsSelfMan_1[0]);
player.SetVar("SelfManFB", jsSelfMan_1[1]);
} else if (jsSelfMan >= 36 && jsSelfMan <= 51) {
player.SetVar("SelfManHeader", jsSelfMan_2[0]);
player.SetVar("SelfManFB", jsSelfMan_2[1]);
} else if (jsSelfMan >= 52 && jsSelfMan <= 67) {
player.SetVar("SelfManHeader", jsSelfMan_3[0]);
player.SetVar("SelfManFB", jsSelfMan_3[1]);
} else if (jsSelfMan >= 68 && jsSelfMan <= 83) {
player.SetVar("SelfManHeader", jsSelfMan_4[0]);
player.SetVar("SelfManFB", jsSelfMan_4[1]);
} else if (jsSelfMan >= 84 && jsSelfMan <= 100) {
player.SetVar("SelfManHeader", jsSelfMan_5[0]);
player.SetVar("SelfManFB", jsSelfMan_5[1]);
}

if (jsSocAw >= 20 && jsSocAw <= 35) {
player.SetVar("SocAwHeader", jsSocAw_1[0]);
player.SetVar("SocAwFB", jsSocAw_1[1]);
} else if (jsSocAw >= 36 && jsSocAw <= 51) {
player.SetVar("SocAwHeader", jsSocAw_2[0]);
player.SetVar("SocAwFB", jsSocAw_2[1]);
} else if (jsSelfMan >= 52 && jsSocAw <= 67) {
player.SetVar("SocAwHeader", jsSocAw_3[0]);
player.SetVar("SocAwFB", jsSocAw_3[1]);
} else if (jsSocAw >= 68 && jsSocAw <= 83) {
player.SetVar("SocAwHeader", jsSocAw_4[0]);
player.SetVar("SocAwFB", jsSocAw_4[1]);
} else if (jsSocAw >= 84 && jsSocAw <= 100) {
player.SetVar("SocAwHeader", jsSocAw_5[0]);
player.SetVar("SocAwFB", jsSocAw_5[1]);
}

if (jsSocSk >= 20 && jsSocSk <= 35) {
player.SetVar("SocSkHeader", jsSocSk_1[0]);
player.SetVar("SocSkFB", jsSocSk_1[1]);
} else if (jsSocSk >= 36 && jsSocSk<= 51) {
player.SetVar("SocSkHeader", jsSocSk_2[0]);
player.SetVar("SocSkFB", jsSocSk_2[1]);
} else if (jsSocSk >= 52 && jsSocSk <= 67) {
player.SetVar("SocSkHeader", jsSocSk_3[0]);
player.SetVar("SocSkFB", jsSocSk_3[1]);
} else if (jsSocSk >= 68 && jsSocSk <= 83) {
player.SetVar("SocSkHeader", jsSocSk_4[0]);
player.SetVar("SocSkFB", jsSocSk_4[1]);
} else if (jsSocSk >= 84 && jsSocSk <= 100) {
player.SetVar("SocSkHeader", jsSocSk_5[0]);
player.SetVar("SocSkFB", jsSocSk_5[1]);
}

if (jsSelfAw_ASA >= 2 && jsSelfAw_ASA <=4) {
player.SetVar("SelfAw_ASA_b", jsSelfAw_ASA_1[0]);
player.SetVar("SelfAw_ASA_e", jsSelfAw_ASA_1[1]);
player.SetVar("SelfAw_ASA_level", 1);
} else if (jsSelfAw_ASA >= 5 && jsSelfAw_ASA <=7) {
player.SetVar("SelfAw_ASA_b", jsSelfAw_ASA_2[0]);
player.SetVar("SelfAw_ASA_e", jsSelfAw_ASA_2[1]);
player.SetVar("SelfAw_ASA_level", 2);
} else if (jsSelfAw_ASA >= 8 && jsSelfAw_ASA <=10) {
player.SetVar("SelfAw_ASA_b", jsSelfAw_ASA_3[0]);
player.SetVar("SelfAw_ASA_e", jsSelfAw_ASA_3[1]);
player.SetVar("SelfAw_ASA_level", 3);
}

if (jsSelfAw_EA >= 2 && jsSelfAw_EA <=4) {
player.SetVar("SelfAw_EA_b", jsSelfAw_EA_1[0]);
player.SetVar("SelfAw_EA_e", jsSelfAw_EA_1[1]);
player.SetVar("SelfAw_EA_level", low);
} else if (jsSelfAw_EA >= 5 && jsSelfAw_EA <=7) {
player.SetVar("SelfAw_EA_b", jsSelfAw_EA_2[0]);
player.SetVar("SelfAw_EA_e", jsSelfAw_EA_2[1]);
player.SetVar("SelfAw_EA_level", med);
} else if (jsSelfAw_EA >= 8 && jsSelfAw_EA <=10) {
player.SetVar("SelfAw_EA_b", jsSelfAw_EA_3[0]);
player.SetVar("SelfAw_EA_e", jsSelfAw_EA_3[1]);
player.SetVar("SelfAw_EA_level", high);
}

if (jsSelfAw_SCf >= 2 && jsSelfAw_SCf <=4) {
player.SetVar("SelfAw_SCf_b", jsSelfAw_SCf_1[0]);
player.SetVar("SelfAw_SCf_e", jsSelfAw_SCf_1[1]);
player.SetVar("SelfAw_SCf_level", low);
} else if (jsSelfAw_SCf >= 5 && jsSelfAw_SCf <=7) {
player.SetVar("SelfAw_SCf_b", jsSelfAw_SCf_2[0]);
player.SetVar("SelfAw_SCf_e", jsSelfAw_SCf_2[1]);
player.SetVar("SelfAw_SCf_level", med);
} else if (jsSelfAw_SCf >= 8 && jsSelfAw_SCf <=10) {
player.SetVar("SelfAw_SCf_b", jsSelfAw_SCf_3[0]);
player.SetVar("SelfAw_SCf_e", jsSelfAw_SCf_3[1]);
player.SetVar("SelfAw_SCf_level", high);
}

if (jsSelfMan_A >= 2 && jsSelfMan_A <=4) {
player.SetVar("SelfMan_A_b", jsSelfMan_A_1[0]);
player.SetVar("SelfMan_A_e", jsSelfMan_A_1[1]);
player.SetVar("SelfMan_A_level", low);
} else if (jsSelfMan_A >= 5 && jsSelfMan_A <=7) {
player.SetVar("SelfMan_A_b", jsSelfMan_A_2[0]);
player.SetVar("SelfMan_A_e", jsSelfMan_A_2[1]);
player.SetVar("SelfMan_A_level", med);
} else if (jsSelfMan_A >= 8 && jsSelfMan_A <=10) {
player.SetVar("SelfMan_A_b", jsSelfMan_A_3[0]);
player.SetVar("SelfMan_A_e", jsSelfMan_A_3[1]);
player.SetVar("SelfMan_A_level", high);
}

if (jsSelfMan_Cn >= 2 && jsSelfMan_Cn <=4) {
player.SetVar("SelfMan_Cn_b", jsSelfMan_Cn_1[0]);
player.SetVar("SelfMan_Cn_e", jsSelfMan_Cn_1[1]);
player.SetVar("SelfMan_Cn_level", low);
} else if (jsSelfMan_Cn >= 5 && jsSelfMan_Cn <=7) {
player.SetVar("SelfMan_Cn_b", jsSelfMan_Cn_2[0]);
player.SetVar("SelfMan_Cn_e", jsSelfMan_Cn_2[1]);
player.SetVar("SelfMan_Cn_level", med);
} else if (jsSelfMan_Cn >= 8 && jsSelfMan_Cn <=10) {
player.SetVar("SelfMan_Cn_b", jsSelfMan_Cn_3[0]);
player.SetVar("SelfMan_Cn_e", jsSelfMan_Cn_3[1]);
player.SetVar("SelfMan_Cn_level", high);
}

if (jsSelfMan_D >= 2 && jsSelfMan_D <=4) {
player.SetVar("SelfMan_D_b", jsSelfMan_D_1[0]);
player.SetVar("SelfMan_D_e", jsSelfMan_D_1[1]);
player.SetVar("SelfMan_D_level", low);
} else if (jsSelfMan_D >= 5 && jsSelfMan_D <=7) {
player.SetVar("SelfMan_D_b", jsSelfMan_D_2[0]);
player.SetVar("SelfMan_D_e", jsSelfMan_D_2[1]);
player.SetVar("SelfMan_D_level", med);
} else if (jsSelfMan_D >= 8 && jsSelfMan_D <=10) {
player.SetVar("SelfMan_D_b", jsSelfMan_D_3[0]);
player.SetVar("SelfMan_D_e", jsSelfMan_D_3[1]);
player.SetVar("SelfMan_D_level", high);
}

if (jsSelfMan_It >= 2 && jsSelfMan_It <=4) {
player.SetVar("SelfMan_It_b", jsSelfMan_It_1[0]);
player.SetVar("SelfMan_It_e", jsSelfMan_It_1[1]);
player.SetVar("SelfMan_It_level", low);
} else if (jsSelfMan_It >= 5 && jsSelfMan_It <=7) {
player.SetVar("SelfMan_It_b", jsSelfMan_It_2[0]);
player.SetVar("SelfMan_It_e", jsSelfMan_It_2[1]);
player.SetVar("SelfMan_It_level", med);
} else if (jsSelfMan_It >= 8 && jsSelfMan_It <=10) {
player.SetVar("SelfMan_It_b", jsSelfMan_It_3[0]);
player.SetVar("SelfMan_It_e", jsSelfMan_It_3[1]);
player.SetVar("SelfMan_It_level", high);
}

if (jsSelfMan_SCt >= 2 && jsSelfMan_SCt <=4) {
player.SetVar("SelfMan_SCt_b", jsSelfMan_SCt_1[0]);
player.SetVar("SelfMan_SCt_e", jsSelfMan_SCt_1[1]);
player.SetVar("SelfMan_SCt_level", low);
} else if (jsSelfMan_SCt >= 5 && jsSelfMan_SCt <=7) {
player.SetVar("SelfMan_SCt_b", jsSelfMan_SCt_2[0]);
player.SetVar("SelfMan_SCt_e", jsSelfMan_SCt_2[1]);
player.SetVar("SelfMan_SCt_level", med);
} else if (jsSelfMan_SCt >= 8 && jsSelfMan_SCt <=10) {
player.SetVar("SelfMan_SCt_b", jsSelfMan_SCt_3[0]);
player.SetVar("SelfMan_SCt_e", jsSelfMan_SCt_3[1]);
player.SetVar("SelfMan_SCt_level", high);
}

if (jsSelfMan_Tr >= 2 && jsSelfMan_Tr <=4) {
player.SetVar("SelfMan_Tr_b", jsSelfMan_Tr_1[0]);
player.SetVar("SelfMan_Tr_e", jsSelfMan_Tr_1[1]);
player.SetVar("SelfMan_Tr_level", low);
} else if (jsSelfMan_Tr >= 5 && jsSelfMan_Tr <=7) {
player.SetVar("SelfMan_Tr_b", jsSelfMan_Tr_2[0]);
player.SetVar("SelfMan_Tr_e", jsSelfMan_Tr_2[1]);
player.SetVar("SelfMan_Tr_level", med);
} else if (jsSelfMan_Tr >= 8 && jsSelfMan_Tr <=10) {
player.SetVar("SelfMan_Tr_b", jsSelfMan_Tr_3[0]);
player.SetVar("SelfMan_Tr_e", jsSelfMan_Tr_3[1]);
player.SetVar("SelfMan_Tr_level", high);
}

if (jsSocAw_E >= 2 && jsSocAw_E <=4) {
player.SetVar("SocAw_E_b", jsSocAw_E_1[0]);
player.SetVar("SocAw_E_e", jsSocAw_E_1[1]);
player.SetVar("SocAw_E_level", low);
} else if (jsSocAw_E >= 5 && jsSocAw_E <=7) {
player.SetVar("SocAw_E_b", jsSocAw_E_2[0]);
player.SetVar("SocAw_E_e", jsSocAw_E_2[1]);
player.SetVar("SocAw_E_level", med);
} else if (jsSocAw_E >= 8 && jsSocAw_E <=10) {
player.SetVar("SocAw_E_b", jsSocAw_E_3[0]);
player.SetVar("SocAw_E_e", jsSocAw_E_3[1]);
player.SetVar("SocAw_E_level", high);
}

if (jsSocAw_OA >= 2 && jsSocAw_OA <=4) {
player.SetVar("SocAw_OA_b", jsSocAw_OA_1[0]);
player.SetVar("SocAw_OA_e", jsSocAw_OA_1[1]);
player.SetVar("SocAw_OA_level", low);
} else if (jsSocAw_OA >= 5 && jsSocAw_OA <=7) {
player.SetVar("SocAw_OA_b", jsSocAw_OA_2[0]);
player.SetVar("SocAw_OA_e", jsSocAw_OA_2[1]);
player.SetVar("SocAw_OA_level", med);
} else if (jsSocAw_OA >= 8 && jsSocAw_OA <=10) {
player.SetVar("SocAw_OA_b", jsSocAw_OA_3[0]);
player.SetVar("SocAw_OA_e", jsSocAw_OA_3[1]);
player.SetVar("SocAw_OA_level", high);
}

if (jsSocAw_SO >= 2 && jsSocAw_SO <=4) {
player.SetVar("SocAw_SO_b", jsSocAw_SO_1[0]);
player.SetVar("SocAw_SO_e", jsSocAw_SO_1[1]);
player.SetVar("SocAw_SO_level", low);
} else if (jsSocAw_SO >= 5 && jsSocAw_SO <=7) {
player.SetVar("SocAw_SO_b", jsSocAw_SO_2[0]);
player.SetVar("SocAw_SO_e", jsSocAw_SO_2[1]);
player.SetVar("SocAw_SO_level", med);
} else if (jsSocAw_SO >= 8 && jsSocAw_SO <=10) {
player.SetVar("SocAw_SO_b", jsSocAw_SO_3[0]);
player.SetVar("SocAw_SO_e", jsSocAw_SO_3[1]);
player.SetVar("SocAw_SO_level", high);
}

if (jsSocSk_BB >= 2 && jsSocSk_BB <=4) {
player.SetVar("SocSk_BB_b", jsSocSk_BB_1[0]);
player.SetVar("SocSk_BB_e", jsSocSk_BB_1[1]);
player.SetVar("SocSk_BB_level", low);
} else if (jsSocSk_BB >= 5 && jsSocSk_BB <=7) {
player.SetVar("SocSk_BB_b", jsSocSk_BB_2[0]);
player.SetVar("SocSk_BB_e", jsSocSk_BB_2[1]);
player.SetVar("SocSk_BB_level", med);
} else if (jsSocSk_BB >= 8 && jsSocSk_BB <=10) {
player.SetVar("SocSk_BB_b", jsSocSk_BB_3[0]);
player.SetVar("SocSk_BB_e", jsSocSk_BB_3[1]);
player.SetVar("SocSk_BB_level", high);
}

if (jsSocSk_CC >= 2 && jsSocSk_CC <=4) {
player.SetVar("SocSk_CC_b", jsSocSk_CC_1[0]);
player.SetVar("SocSk_CC_e", jsSocSk_CC_1[1]);
player.SetVar("SocSk_CC_level", low);
} else if (jsSocSk_CC >= 5 && jsSocSk_CC <=7) {
player.SetVar("SocSk_CC_b", jsSocSk_CC_2[0]);
player.SetVar("SocSk_CC_e", jsSocSk_CC_2[1]);
player.SetVar("SocSk_CC_level", med);
} else if (jsSocSk_CC >= 8 && jsSocSk_CC <=10) {
player.SetVar("SocSk_CC_b", jsSocSk_CC_3[0]);
player.SetVar("SocSk_CC_e", jsSocSk_CC_3[1]);
player.SetVar("SocSk_CC_level", high);
}

if (jsSocSk_Cm >= 2 && jsSocSk_Cm <=4) {
player.SetVar("SocSk_Cm_b", jsSocSk_Cm_1[0]);
player.SetVar("SocSk_Cm_e", jsSocSk_Cm_1[1]);
player.SetVar("SocSk_Cm_level", low);
} else if (jsSocSk_Cm >= 5 && jsSocSk_Cm <=7) {
player.SetVar("SocSk_Cm_b", jsSocSk_Cm_2[0]);
player.SetVar("SocSk_Cm_e", jsSocSk_Cm_2[1]);
player.SetVar("SocSk_Cm_level", med);
} else if (jsSocSk_Cm >= 8 && jsSocSk_Cm <=10) {
player.SetVar("SocSk_Cm_b", jsSocSk_Cm_3[0]);
player.SetVar("SocSk_Cm_e", jsSocSk_Cm_3[1]);
player.SetVar("SocSk_Cm_level", high);
}

if (jsSocSk_CMn >= 2 && jsSocSk_CMn <=4) {
player.SetVar("SocSk_CMn_b", jsSocSk_CMn_1[0]);
player.SetVar("SocSk_CMn_e", jsSocSk_CMn_1[1]);
player.SetVar("SocSk_CMn_level", low);
} else if (jsSocSk_CMn >= 5 && jsSocSk_CMn <=7) {
player.SetVar("SocSk_CMn_b", jsSocSk_CMn_2[0]);
player.SetVar("SocSk_CMn_e", jsSocSk_CMn_2[1]);
player.SetVar("SocSk_CMn_level", med);
} else if (jsSocSk_CMn >= 8 && jsSocSk_CMn <=10) {
player.SetVar("SocSk_CMn_b", jsSocSk_CMn_3[0]);
player.SetVar("SocSk_CMn_e", jsSocSk_CMn_3[1]);
player.SetVar("SocSk_CMn_level", high);
}

if (jsSocSk_DO >= 2 && jsSocSk_DO <=4) {
player.SetVar("SocSk_DO_b", jsSocSk_DO_1[0]);
player.SetVar("SocSk_DO_e", jsSocSk_DO_1[1]);
player.SetVar("SocSk_DO_level", low);
} else if (jsSocSk_DO >= 5 && jsSocSk_DO <=7) {
player.SetVar("SocSk_DO_b", jsSocSk_DO_2[0]);
player.SetVar("SocSk_DO_e", jsSocSk_DO_2[1]);
player.SetVar("SocSk_DO_level", med);
} else if (jsSocSk_DO >= 8 && jsSocSk_DO <=10) {
player.SetVar("SocSk_DO_b", jsSocSk_DO_3[0]);
player.SetVar("SocSk_DO_e", jsSocSk_DO_3[1]);
player.SetVar("SocSk_DO_level", high);
}

if (jsSocSk_If >= 2 && jsSocSk_If <=4) {
player.SetVar("SocSk_If_b", jsSocSk_If_1[0]);
player.SetVar("SocSk_If_e", jsSocSk_If_1[1]);
player.SetVar("SocSk_If_level", low);
} else if (jsSocSk_If >= 5 && jsSocSk_If <=7) {
player.SetVar("SocSk_If_b", jsSocSk_If_2[0]);
player.SetVar("SocSk_If_e", jsSocSk_If_2[1]);
player.SetVar("SocSk_If_level", med);
} else if (jsSocSk_If >= 8 && jsSocSk_If <=10) {
player.SetVar("SocSk_If_b", jsSocSk_If_3[0]);
player.SetVar("SocSk_If_e", jsSocSk_If_3[1]);
player.SetVar("SocSk_If_level", high);
}

if (jsSocSk_TC >= 2 && jsSocSk_TC<=4) {
player.SetVar("SocSk_TC_b", jsSocSk_TC_1[0]);
player.SetVar("SocSk_TC_e", jsSocSk_TC_1[1]);
player.SetVar("SocSk_TC_level", low);
} else if (jsSocSk_TC >= 5 && jsSocSk_TC <=7) {
player.SetVar("SocSk_TC_b", jsSocSk_TC_2[0]);
player.SetVar("SocSk_TC_e", jsSocSk_TC_2[1]);
player.SetVar("SocSk_TC_level", med);
} else if (jsSocSk_TC >= 8 && jsSocSk_TC <=10) {
player.SetVar("SocSk_TC_b", jsSocSk_TC_3[0]);
player.SetVar("SocSk_TC_e", jsSocSk_TC_3[1]);
player.SetVar("SocSk_TC_level", high);
}

if (jsSocSk_VL >= 2 && jsSocSk_VL <=4) {
player.SetVar("SocSk_VL_b", jsSocSk_VL_1[0]);
player.SetVar("SocSk_VL_e", jsSocSk_VL_1[1]);
player.SetVar("SocSk_VL_level", low);
} else if (jsSocSk_VL >= 5 && jsSocSk_VL <=7) {
player.SetVar("SocSk_VL_b", jsSocSk_VL_2[0]);
player.SetVar("SocSk_VL_e", jsSocSk_VL_2[1]);
player.SetVar("SocSk_VL_level", med);
} else if (jsSocSk_VL >= 8 && jsSocSk_VL <=10) {
player.SetVar("SocSk_VL_b", jsSocSk_VL_3[0]);
player.SetVar("SocSk_VL_e", jsSocSk_VL_3[1]);
player.SetVar("SocSk_VL_level", high);
}

const roundToNearest5 = x => Math.round(x/5)*5

player.SetVar("SelfAwScore", roundToNearest5(jsSelfAw));
player.SetVar("SelfManScore", roundToNearest5(jsSelfMan));
player.SetVar("SocAwScore", roundToNearest5(jsSocAw));
player.SetVar("SocSkScore", roundToNearest5(jsSocSk));
player.SetVar("CoerciveScore", roundToNearest5(jsCoercive));
player.SetVar("PacesettingScore", roundToNearest5(jsPaceSetting));
player.SetVar("AuthoritativeScore", roundToNearest5(jsAuthoritative));
player.SetVar("AffiliativeScore", roundToNearest5(jsAffiliative));
player.SetVar("DemocraticScore", roundToNearest5(jsDemocratic));
player.SetVar("CoachingScore", roundToNearest5(jsCoaching));

//alert("script 1 run");
}

function Script4()
{
  var player = GetPlayer();

// Set leadership overview text for use later
var allHigh = ["Your competencies indicate that you may have a propensity to use all the leadership styles. This is quite unusual and if you think it’s inaccurate, you may wish to retake the questionnaire by clicking the retry button.", "The key to good leadership is taking the right approach at the right time. Beware of using the Coercive and Pacesetting styles, as these styles can be counterproductive if overused."];
var coerciveHigh = ["Your competencies indicate that you may have a propensity to use the Coercive style. Beware as, like the Pacesetting style,it can be counterproductive if overused.", "The key to good leadership is taking the right approach at the right time and it is best to be able to use all the different styles appropriately. Consider which styles you'd like to develop and then refer back to see which competencies you could improve and how."];
var pacesettingHigh = ["Your competencies indicate that you may have a propensity to use the Pacesetting style. Beware as, like the Coercive style, it can be counterproductive if overused.", "The key to good leadership is taking the right approach at the right time and it is best to be able to use all the different styles appropriately. Consider which styles you'd like to develop and then refer back to see which competencies you could improve and how."];
var cAndPHigh = ["Your competencies indicate that you may have a propensity to use both the Coercive and Pacesetting styles. Beware of overusing them as these styles can be counterproductive.", "The key to good leadership is taking the right approach at the right time and it is best to be able to use all the different styles appropriately. Consider which styles you'd like to develop then refer back to see which competencies you could improve and how."];
var goodSpread = ["Your competencies indicate that you can take a flexible approach to using the different leadership styles, and keep use of the Coercive and Pacesetting styles to a minimum, ideal!", "Whilst this already shows a significant ability, if you'd like to further develop any particular styles, refer back to the appropriate domains to see which competencies you could improve and how."];
var allLow = ["Your competencies indicate that you don't have a propensity to use any of the leadership styles. The key to good leadership is taking the right approach at the right time and it is best to be able to use all the different styles as appropriate.", "Consider which styles you'd like to develop and then refer back to see which competencies you could improve and how. Coercive and Pacesetting are most limited so it's best not to prioritise them."];
var generalMix = ["You've shown a fairly flexible approach to using the different leadership styles, with some room for improvement.", "The key to good leadership is taking the right approach at the right time and it is best to be able to use all the different styles appropriately. Pacesetting and Coercive styles should be used sparingly, so consider which of the others to develop then refer back to see which competencies to improve and how."];

// Set leadership styles feedback for use later
var coerciveFB_low = "Your score in associated competencies indicates a low Coercive Leadership ability. Even though it's only appropriate in certain circumstances (such as a crisis or when dealing with a problem employee) some ability using the Coercive style can be useful. Try improving your competencies in the relevant domains.";
var coerciveFB_med = "Your score in associated competencies indicates that you have some Coercive Leadership ability. The Coercive style has limited application so you may not wish to prioritise developing in this area.";
var coerciveFB_high = "Your score in associated competencies indicates that you have strong Coercive Leadership ability. Remember that the Coercive style can negatively impact creativity, innovation and motivation, so you should avoid overusing it.";
var pacesettingFB_low = "Your score in associated competencies indicates a low Pacesetting Leadership ability. Remember that the Pacesetting style is only useful with competent and motivated employees. Whilst not a priority, some ability in this style can be useful. Try improving your competencies in the relevant domains.";
var pacesettingFB_med = "Your score in associated competencies indicates that you have some Pacesetting Leadership ability. Remember that the Pacesetting style has limited application so you may not wish to prioritise developing in this area.";
var pacesettingFB_high = "Your score in associated competencies indicates that you have strong Pacesetting Leadership ability. Remember that overuse of the Pacesetting style can lead to resentment and lack of motivation, so it shouldn't be your 'go to' style.";
var authoritativeFB_low = "Your score in associated competencies indicates a low Authoritative  Leadership ability. The Authoritative style is applicable to almost any business situation, so you should consider developing in this area by working on your competencies in the relevant domains.";
var authoritativeFB_med = "Your score in associated competencies indicates that you have some Authoritative Leadership ability. The Authoritative style is particularly effective in times of change and when a shared sense of direction and purpose is critical for success. Continue to work on improving your competencies in the relevant domains.";
var authoritativeFB_high = "Your score in associated competencies indicates that you have strong Authoritative Leadership ability. Whilst it can be used in most circumstances, remember that the Authoritative style can be overbearing where the team is already very competent.";
var affiliativeFB_low = "Your score in associated competencies indicates a low Affiliative Leadership ability. The Affiliative style is useful in a wide range of situations, so you should consider developing in this area by working on your competencies in the relevant domains.";
var affiliativeFB_med = "Your score in associated competencies indicates that you have some Affiliative Leadership ability. The Affiliative style is particularly effective at forging new teams, healing rifts, raising morale and creating a sense of belonging. Continue to work on your competencies in the relevant domains.";
var affiliativeFB_high = "Your score in associated competencies indicates that you have strong Affiliative Leadership ability. Whilst it can be useful in many circumstances, remember that if you only use the Affiliative style, there is a danger that poor performance can go uncorrected.";
var democraticFB_low = "Your score in associated competencies indicates a low Democratic  Leadership ability. The Democratic style encourages engagement and makes team members feel valued, so you should consider developing in this area by improving your competencies in the relevant domains.";
var democraticFB_med = "Your score in associated competencies indicates that you have some Democratic Leadership ability. The Democratic style encourages engagement and is particularly useful for achieving buy-in to a new approach. Continue to work on improving your competencies in the relevant domains.";
var democraticFB_high = "Your score in associated competencies indicates that you have strong Democratic Leadership ability. Whilst it can be useful in many circumstances, remember that collaboration takes time, and may lead to frustration at a lack of decisiveness and seemingly endless meetings.";
var coachingFB_low = "Your score in associated competencies indicates a low Coaching Leadership ability. The Coaching style develops people for the future and aims to secure longer term performance, so you should consider developing in this area by working on your competencies in the relevant domains.";
var coachingFB_med = "Your score in associated competencies indicates that you have some Coaching Leadership ability. The Coaching style encourages engagement and is particularly useful for achieving buy-in to a new approach. Continue to work on improving your competencies in the relevant domains.";
var coachingFB_high = "Your score in associated competencies indicates that you have strong Coaching Leadership ability. Remember that Coaching delivers delayed benefits, so is unlikely to be helpful in a crisis situation.";

var jsCoerciveScore = player.GetVar("CoerciveScore");
var jsPacesettingScore = player.GetVar("PacesettingScore");
var jsAuthoritativeScore = player.GetVar("AuthoritativeScore");
var jsAffiliativeScore = player.GetVar("AffiliativeScore");
var jsDemocraticScore = player.GetVar("DemocraticScore");
var jsCoachingScore = player.GetVar("CoachingScore");

// Set general leadership styles FB by score
if (jsCoerciveScore >= 80 && jsPacesettingScore <= 79 && jsAuthoritativeScore <= 79 && jsAffiliativeScore <= 79 && jsDemocraticScore <= 79 && jsCoachingScore <= 79) {
player.SetVar("leadershipFBp1", coerciveHigh[0]);
player.SetVar("leadershipFBp2", coerciveHigh[1]);
} 

else if (jsPacesettingScore >= 80 && jsCoerciveScore <= 79 && jsAuthoritativeScore <= 79 && jsAffiliativeScore <= 79 && jsDemocraticScore <= 79 && jsCoachingScore <= 79) {
player.SetVar("leadershipFBp1", pacesettingHigh[0]);
player.SetVar("leadershipFBp2", pacesettingHigh[1]);
} 

else if (jsPacesettingScore >= 80 && jsCoerciveScore >= 80 && jsAuthoritativeScore <= 79 && jsAffiliativeScore <= 79 && jsDemocraticScore <= 79 && jsCoachingScore <= 79) {
player.SetVar("leadershipFBp1", cAndPHigh[0]);
player.SetVar("leadershipFBp2", cAndPHigh[1]);
} 

else if (jsPacesettingScore >= 80 && jsCoerciveScore >= 80 && jsAuthoritativeScore >= 80 && jsAffiliativeScore >= 80 && jsDemocraticScore >= 80 && jsCoachingScore >= 80) {
player.SetVar("leadershipFBp1", allHigh[0]);
player.SetVar("leadershipFBp2", allHigh[1]);
} 

else if (jsPacesettingScore <= 79 && jsCoerciveScore <= 79) {
player.SetVar("leadershipFBp1", generalMix[0]);
player.SetVar("leadershipFBp2", generalMix[1]);
} 

else if (jsPacesettingScore <= 49 && jsCoerciveScore <= 49 && jsAuthoritativeScore <= 49 && jsAffiliativeScore <= 49 && jsDemocraticScore <= 49 && jsCoachingScore <= 49) {
player.SetVar("leadershipFBp1", allLow[0]);
player.SetVar("leadershipFBp2", allLow[1]);
} 

else if (jsPacesettingScore <= 49 && jsCoerciveScore <= 49 && jsAuthoritativeScore >= 50 && jsAffiliativeScore >= 50 && jsDemocraticScore >= 50 && jsCoachingScore >= 50) {
player.SetVar("leadershipFBp1", goodSpread[0]);
player.SetVar("leadershipFBp2", goodSpread[1]);
} 

// Set specific leadership styles FB by score
if (jsCoerciveScore <= 49) {
player.SetVar("coerciveFB", coerciveFB_low);
} else if (jsCoerciveScore >= 50 && jsCoerciveScore <= 79) {
player.SetVar("coerciveFB", coerciveFB_med);
} else if  (jsCoerciveScore >= 80) {
player.SetVar("coerciveFB", coerciveFB_high);
}

if (jsPacesettingScore <= 49) {
player.SetVar("pacesettingFB", pacesettingFB_low);
} else if (jsPacesettingScore >= 50 && jsPacesettingScore <= 79) {
player.SetVar("pacesettingFB", pacesettingFB_med);
} else if  (jsPacesettingScore >= 80) {
player.SetVar("pacesettingFB", pacesettingFB_high);
}

if (jsAuthoritativeScore <= 49) {
player.SetVar("authoritativeFB", authoritativeFB_low);
} else if (jsAuthoritativeScore >= 50 && jsAuthoritativeScore <= 79) {
player.SetVar("authoritativeFB", authoritativeFB_med);
} else if  (jsAuthoritativeScore >= 80) {
player.SetVar("authoritativeFB", authoritativeFB_high);
}

if (jsAffiliativeScore <= 49) {
player.SetVar("affiliativeFB", affiliativeFB_low);
} else if (jsAffiliativeScore >= 50 && jsAffiliativeScore <= 79) {
player.SetVar("affiliativeFB", affiliativeFB_med);
} else if  (jsAffiliativeScore >= 80) {
player.SetVar("affiliativeFB", affiliativeFB_high);
}

if (jsDemocraticScore <= 49) {
player.SetVar("democraticFB", democraticFB_low);
} else if (jsDemocraticScore >= 50 && jsDemocraticScore <= 79) {
player.SetVar("democraticFB", democraticFB_med);
} else if  (jsDemocraticScore >= 80) {
player.SetVar("democraticFB", democraticFB_high);
}

if (jsCoachingScore <= 49) {
player.SetVar("coachingFB", coachingFB_low);
} else if (jsCoachingScore >= 50 && jsCoachingScore <= 79) {
player.SetVar("coachingFB", coachingFB_med);
} else if  (jsCoachingScore >= 80) {
player.SetVar("coachingFB", coachingFB_high);
}

//alert("leadership styles fb set");
//alert("script 2 run"); 
}

function Script5()
{
  var player = GetPlayer();

// Set competencies tip text for use later
var jsSelfAw_ASA_1_tip = "Seek feedback from others and reflect on that feedback asking yourself whether this is confirming something you already knew, even if you didn’t like to acknowledge it.";
var jsSelfAw_ASA_2_tip = "Dedicate short periods of time for regular reflection and stick to it. Whether things went well or badly, consider what you did, and what attitudes drove your actions.";
var jsSelfAw_ASA_3_tip = "Practice ongoing self reflection and contrast this with feedback solicited from others. How do they compare? By contrasting different points of view, you can adjust and dynamically refine your self assessment.";
var jsSelfAw_EA_1_tip = "Take a moment each day to do nothing, and resist the natural tendency to look for distractions. This can give emotions a chance to arise, and a chance for you to notice them.";
var jsSelfAw_EA_2_tip = "Whenever you feel negative emotions arising, ask yourself 'What is this emotion telling me?'. Emotions can generate physical sensations and change our breathing patterns. Try to be aware of these physical changes.";
var jsSelfAw_EA_3_tip = "Emotions can be felt physically. Practicing mindfulness daily can help to generate very high levels of emotional awareness through observing the breath or sensations.";
var jsSelfAw_SCf_1_tip = "Self-criticism, and making mistakes are both essential ways that we learn and grow. When reflecting on the past it's natural to focus on what could have been better, but also focus on good effort, what went well.";
var jsSelfAw_SCf_2_tip = "If you don't feel confident about something that truly matters to you, seek to change it. Create a plan for developing your skills through new experiences, and give yourself plenty of preparation time before each one.";
var jsSelfAw_SCf_3_tip = "Continue to challenge yourself but be careful not to feel superior or come across as overconfident. Ask others for feedback aimed at how you could be even more effective.";
var jsSelfMan_A_1_tip = "Coping with change is habitual, so try to proactively identify a change you would like to make and then follow it through. Resistance is often driven by the fear of potential impacts of change that may never happen.";
var jsSelfMan_A_2_tip = "Coping with change is habitual, so try to proactively identify a change you would like to make and then follow it through. You'll know you're embracing change when you are excited by the prospect of adventure.";
var jsSelfMan_A_3_tip = "Significant changes or potential changes that we cannot control can still be difficult to manage, so be aware that although you may be adaptable, your may find some changes need patience to get yourself through them.";
var jsSelfMan_Cn_1_tip = "First check your motivation, do you know why delivering against your responsibilities matters to you? Then adopt systematic approaches to goal setting and time management. Plan and review your workload.";
var jsSelfMan_Cn_2_tip = "Which areas could you prioritise more effectively? Appraise the importance and urgency of each task before prioritising, this will avoid getting caught up in firefighting.";
var jsSelfMan_Cn_3_tip = "Your motivation and focus on the important factors is a strength. Be aware that your conscientiousness doesn't have detrimental knock-on effects though. Check, do you have a health work-llife balance?";
var jsSelfMan_D_1_tip = "Goals are important to motivation, and most powerful when aligned to our values and strengths. Can you set yourself a goal that align with your interests and the needs of your organisation?";
var jsSelfMan_D_2_tip = "Goals are important to motivation, and most powerful when aligned to our values and strengths. Can you set yourself goals that align with your interests and the needs of your organisation?";
var jsSelfMan_D_3_tip = "Harness your drive by expressing interest and enthusiasm towards other's goals, your drive could be contagious.";
var jsSelfMan_It_1_tip = "Can you identify problems that you could have an impact on? These are opportunities for you to show initiative, just choose one that's relatively straightforward and start to involve the appropriate people to make a difference.";
var jsSelfMan_It_2_tip = "Look for an opportunity to do something that you feel is important even if it's not identified elsewhere in the organisation, then try to bring others onboard at the apporpriate time.";
var jsSelfMan_It_3_tip = "Think about your initiatives in a strategic sense. How do they fit within the wider strategy of your department or the organisation? You may be able to leverage even more benefit by ensuring a 'joined up' approach.";
var jsSelfMan_SCt_1_tip = "Whenever you feel yourself reacting emotionally to a situation, try to take 3 slow intentional breaths, then clarify to yourself or explain to others what you would like the outcome of the situation to be.";
var jsSelfMan_SCt_2_tip = "Whenever you feel yourself reacting emotionally to a situation, try to take 3 slow intentional breaths. Then if you feel calm enough, explain to others what you would like the outcome of the situation to be. ";
var jsSelfMan_SCt_3_tip = "Use your high levels of self-control around others, potentially to difuse situations and promote rational debate. Be wary of not to ignore your emotions though. Healthy self-control is based on high emotional awareness.";
var jsSelfMan_Tr_1_tip = "Write down your top 5 values, then think about how your actions stack up. If your values and your actions align then people will find it easier to understand your motives. - Ensure that you don't promise what you can't deliver.";
var jsSelfMan_Tr_2_tip = "Try to be aware of where you 'bend the rules'. People find it easy to trust others whose behaviours and words are consistent. - Ensure that you manage expectations, and don't promise what you can't deliver.";
var jsSelfMan_Tr_3_tip = "People find it easy to trust others whose behaviours and words are consistent. Being assertive and realistic when promising to deliver is also important so that people aren't disappointed by overly high expectations.";
var jsSocAw_E_1_tip = "Be curious about other people. When you meet someone, ask them about themselves. Actively listen and try to be aware in a general sense of non verbal cues such as tone of voice and body language. ";
var jsSocAw_E_2_tip = "Be curious about other people. When you meet someone, ask them about themselves. Actively listen and try to be aware of non verbal cues such as tone of voice , micro expressions and body language. ";
var jsSocAw_E_3_tip = "If you find there are certain people you empathise with less, try to spend more time with them. Getting to know people who are different from us increases empathy and can help us to avoid jumping to conclusions and making judgements.";
var jsSocAw_OA_1_tip = "Be curious as to what's going on around you. List the key stakeholders in your sphere of influence, and ask yourself how their relationships are developing? Who makes the important decisions, and who influences them?";
var jsSocAw_OA_2_tip = "How are the realtionships of key stakeholders developing? Who makes the important decisions, and who influences them? Can you use your insight to influence situations to generate a cohesive and aligned approach in your organisation?";
var jsSocAw_OA_3_tip = "How are the realtionships of key stakeholders developing? Who makes the important decisions, and who influences them? Can you use your insight to influence situations to generate a cohesive and aligned approach in your organisation?";
var jsSocAw_SO_1_tip = "Whether or not you deal with customers directly, their satisfaction is vital to the success of the business. Identify a way in which you can see the customers experience either directly, or through data.";
var jsSocAw_SO_2_tip = "Try to ensure you have a good knowledge of the wider service provision so you can proactively work with customers to develop relationships and enhance their experience.";
var jsSocAw_SO_3_tip = "Try to engage with customers to develop strategies for improvement that are mutually beneficial. This could be achieved through reviewing customer engagement data or via personal relationships with key stakeholders.";
var jsSocSk_BB_1_tip = "Find an opportunity perhaps just before a meeting to try making small talk with someone you don't know well. Open up and tell a little about yourself, but also ask open questions to encourage the other person to engage with you.";
var jsSocSk_BB_2_tip = "Ask open questions and make a point of remembering significant things people have told you. Communicate a genuine interest through open body language and eye contact.";
var jsSocSk_BB_3_tip = "Ask open questions and make a point of remembering significant things people have told you. If rapport is building, try sharing something about your feelings or values to deepen the connection.";
var jsSocSk_CC_1_tip = "Consider your normal working activities and identify something that could be improved. Start small to build-up momentum and get others involved at the earliest opportunity. Being a Change Catalyst doesn't mean doing it yourself.";
var jsSocSk_CC_2_tip = "Consider opportunities for innovation. Start small to build-up momentum and get others involved at the earliest opportunity. Being a Change Catalyst doesn't mean doing it yourself.";
var jsSocSk_CC_3_tip = "Taking the initiative takes courage and is usually based on a consideration of risk vs reward, often based on intuition. Try assessing the level of risk against the reward of a potential change to increase objectivity.";
var jsSocSk_Cm_1_tip = "Try to use Active Listening. This means focusing fully on what the other person is saying and making sure you understand before responding. This will naturally enhance your ability to respond in an enagaged and relevant way.";
var jsSocSk_Cm_2_tip = "Try using open questions to get people to talk more freely, then actively listen and pay full attention what is being said. This will help you to empathise with what they're saying and respond appropriately.";
var jsSocSk_Cm_3_tip = "Do your facial expressions, eye contact and body language support the words you are saying? You may need to vary these cues according to who you are talking to and the cultural context.";
var jsSocSk_CMn_1_tip = "Try to identify whether you need to be more assertive, being clearer about your needs, or more cooperative, gaining greater understanding of others' needs. Try to balance out this tendency the next time that conflict arises.";
var jsSocSk_CMn_2_tip = "Use Active Listening to demonstrate your desire to understand peoples' point of view, and then calmly and assertively outline your perspective to seek a compromise, or a collaborative 'win-win' outcome. ";
var jsSocSk_CMn_3_tip = "Balancing assertiveness and cooperation to collaboratively generate a 'win-win' outcome is desirable in most cases. Demonstrate these skills openly to inspire conflict resolution in others.";
var jsSocSk_DO_1_tip = "Are you motivated to support others and see them grow rather than hold them back? If your motivation is to support their development, practice providing feedback, especially positive reinforcement when you see a job well done.";
var jsSocSk_DO_2_tip = "Can you enhance the support you give to others? Try to give feedback when you see or become aware of a specific action or behaviour, make it timely and specific, it should focus on the effects of the person's behaviour.";
var jsSocSk_DO_3_tip = "Is there an individual that would benefit from coaching or mentoring that you could offer? Remember that developing others is a lot about helping them to help themselves.";
var jsSocSk_If_1_tip = "The best influencers have an infectious enthusiasm for what they're trying to achieve. Think about an area of work that excites you and that you'd like to receive more attention. Talk to others about it, can you enthuse them too?";
var jsSocSk_If_2_tip = "Remember that influencing is a two-way street, you have to give people space to get onboard. Next time that you need to influence, present yourself confidently, be prepared and energetic but don't oversell it.";
var jsSocSk_If_3_tip = "Challenge yourself to influence someone who often doesn't want to listen. Help them to recognise how the decision your looking for aligns with their views and decisions they've made in the past, highlighting the opportunities.";
var jsSocSk_TC_1_tip = "Good relationships are the building blocks of effective organisations. Try to give yourself and others the opportunity to collaborate, share views and build consensus without necessarily focusing on a particular task.";
var jsSocSk_TC_2_tip = "Foster rapid development of team identity by putting time and effort into sharing views and building consensus upfront, without focusing immediately on a particular task.";
var jsSocSk_TC_3_tip = "Regularly review team dynamics. Are there any team members who could benefit from being given the opportunity to collaborate, or individuals who's skills are under-utilised and would benefit from additional responsibility?";
var jsSocSk_VL_1_tip = "Think of a vision for change in your organisation that inspires you. Then write a statement using clear plain language, outlining what you and your team are aiming at, and why this matters. Learn this statement to refer to in conversation.";
var jsSocSk_VL_2_tip = "Think of a vision for change in your organisation that inspires you. Then write a statement using clear plain language, outlining what you and your team are aiming at, and why this matters. Ensure that it has both logical and emtional pull.";
var jsSocSk_VL_3_tip = "A compelling vision doesn't have to have all the answers, but it does need to be meaningful to everyone. Ask colleagues to explain the vision to you to find out if any aspects particularly inspire them.";

// Pull in competency levels from SL (set by previous JS trigger)
var jsSelfAw_ASA_level = player.GetVar("SelfAw_ASA_level");
var jsSelfAw_EA_level = player.GetVar("SelfAw_EA_level");
var jsSelfAw_SCf_level = player.GetVar("SelfAw_SCf_level");
var jsSelfMan_A_level = player.GetVar("SelfMan_A_level");
var jsSelfMan_Cn_level = player.GetVar("SelfMan_Cn_level");
var jsSelfMan_D_level = player.GetVar("SelfMan_D_level");
var jsSelfMan_It_level = player.GetVar("SelfMan_It_level");
var jsSelfMan_SCt_level = player.GetVar("SelfMan_SCt_level");
var jsSelfMan_Tr_level = player.GetVar("SelfMan_Tr_level");
var jsSocAw_E_level = player.GetVar("SocAw_E_level");
var jsSocAw_OA_level = player.GetVar("SocAw_OA_level");
var jsSocAw_SO_level = player.GetVar("SocAw_SO_level");
var jsSocSk_BB_level = player.GetVar("SocSk_BB_level");
var jsSocSk_CC_level = player.GetVar("SocSk_CC_level");
var jsSocSk_Cm_level = player.GetVar("SocSk_Cm_level");
var jsSocSk_CMn_level = player.GetVar("SocSk_CMn_level");
var jsSocSk_DO_level = player.GetVar("SocSk_DO_level");
var jsSocSk_If_level = player.GetVar("SocSk_If_level");
var jsSocSk_TC_level = player.GetVar("SocSk_TC_level");
var jsSocSk_VL_level = player.GetVar("SocSk_VL_level");

// Set competency tips text based on level

if (jsSelfAw_ASA_level == 1) {
player.SetVar("SelfAw_ASA_tip", jsSelfAw_ASA_1_tip);
} else if (jsSelfAw_ASA_level == 2) {
player.SetVar("SelfAw_ASA_tip", jsSelfAw_ASA_2_tip);
} else if (jsSelfAw_ASA_level == 3) {
player.SetVar("SelfAw_ASA_tip", jsSelfAw_ASA_3_tip);
}

if (jsSelfAw_EA_level == 1) {
player.SetVar("SelfAw_EA_tip", jsSelfAw_EA_1_tip);
} else if (jsSelfAw_EA_level == 2) {
player.SetVar("SelfAw_EA_tip", jsSelfAw_EA_2_tip);
} else if (jsSelfAw_EA_level == 3) {
player.SetVar("SelfAw_EA_tip", jsSelfAw_EA_3_tip);
}

if (jsSelfAw_SCf_level == 1) {
player.SetVar("SelfAw_SCf_tip", jsSelfAw_SCf_1_tip);
} else if (jsSelfAw_SCf_level == 2) {
player.SetVar("SelfAw_SCf_tip", jsSelfAw_SCf_2_tip);
} else if (jsSelfAw_SCf_level == 3) {
player.SetVar("SelfAw_SCf_tip", jsSelfAw_SCf_3_tip);
}

if (jsSelfMan_A_level == 1) {
player.SetVar("SelfMan_A_tip", jsSelfMan_A_1_tip);
} else if (jsSelfMan_A_level == 2) {
player.SetVar("SelfMan_A_tip", jsSelfMan_A_2_tip);
} else if (jsSelfMan_A_level == 3) {
player.SetVar("SelfMan_A_tip", jsSelfMan_A_3_tip);
}

if (jsSelfMan_Cn_level == 1) {
player.SetVar("SelfMan_Cn_tip", jsSelfMan_Cn_1_tip);
} else if (jsSelfMan_Cn_level == 2) {
player.SetVar("SelfMan_Cn_tip", jsSelfMan_Cn_2_tip);
} else if (jsSelfMan_Cn_level == 3) {
player.SetVar("SelfMan_Cn_tip", jsSelfMan_Cn_3_tip);
}

if (jsSelfMan_D_level == 1) {
player.SetVar("SelfMan_D_tip", jsSelfMan_D_1_tip);
} else if (jsSelfMan_D_level == 2) {
player.SetVar("SelfMan_D_tip", jsSelfMan_D_2_tip);
} else if (jsSelfMan_D_level == 3) {
player.SetVar("SelfMan_D_tip", jsSelfMan_D_3_tip);
}

if (jsSelfMan_It_level == 1) {
player.SetVar("SelfMan_It_tip", jsSelfMan_It_1_tip);
} else if (jsSelfMan_It_level == 2) {
player.SetVar("SelfMan_It_tip", jsSelfMan_It_2_tip);
} else if (jsSelfMan_It_level == 3) {
player.SetVar("SelfMan_It_tip", jsSelfMan_It_3_tip);
}

if (jsSelfMan_SCt_level == 1) {
player.SetVar("SelfMan_SCt_tip", jsSelfMan_SCt_1_tip);
} else if (jsSelfMan_SCt_level == 2) {
player.SetVar("SelfMan_SCt_tip", jsSelfMan_SCt_2_tip);
} else if (jsSelfMan_SCt_level == 3) {
player.SetVar("SelfMan_SCt_tip", jsSelfMan_SCt_3_tip);
}

if (jsSelfMan_Tr_level == 1) {
player.SetVar("SelfMan_Tr_tip", jsSelfMan_Tr_1_tip);
} else if (jsSelfMan_Tr_level == 2) {
player.SetVar("SelfMan_Tr_tip", jsSelfMan_Tr_2_tip);
} else if (jsSelfMan_Tr_level == 3) {
player.SetVar("SelfMan_Tr_tip", jsSelfMan_Tr_3_tip);
}

if (jsSocAw_E_level == 1) {
player.SetVar("SocAw_E_tip", jsSocAw_E_1_tip);
} else if (jsSocAw_E_level == 2) {
player.SetVar("SocAw_E_tip", jsSocAw_E_2_tip);
} else if (jsSocAw_E_level == 3) {
player.SetVar("SocAw_E_tip", jsSocAw_E_3_tip);
}

if (jsSocAw_OA_level == 1) {
player.SetVar("SocAw_OA_tip", jsSocAw_OA_1_tip);
} else if (jsSocAw_OA_level == 2) {
player.SetVar("SocAw_OA_tip", jsSocAw_OA_2_tip);
} else if (jsSocAw_OA_level == 3) {
player.SetVar("SocAw_OA_tip", jsSocAw_OA_3_tip);
}

if (jsSocAw_SO_level == 1) {
player.SetVar("SocAw_SO_tip", jsSocAw_SO_1_tip);
} else if (jsSocAw_SO_level == 2) {
player.SetVar("SocAw_SO_tip", jsSocAw_SO_2_tip);
} else if (jsSocAw_SO_level == 3) {
player.SetVar("SocAw_SO_tip", jsSocAw_SO_3_tip);
}

if (jsSocSk_BB_level == 1) {
player.SetVar("SocSk_BB_tip", jsSocSk_BB_1_tip);
} else if (jsSocSk_BB_level == 2) {
player.SetVar("SocSk_BB_tip", jsSocSk_BB_2_tip);
} else if (jsSocSk_BB_level == 3) {
player.SetVar("SocSk_BB_tip", jsSocSk_BB_3_tip);
}

if (jsSocSk_CC_level == 1) {
player.SetVar("SocSk_CC_tip", jsSocSk_CC_1_tip);
} else if (jsSocSk_CC_level == 2) {
player.SetVar("SocSk_CC_tip", jsSocSk_CC_2_tip);
} else if (jsSocSk_CC_level == 3) {
player.SetVar("SocSk_CC_tip", jsSocSk_CC_3_tip);
}

if (jsSocSk_Cm_level == 1) {
player.SetVar("SocSk_Cm_tip", jsSocSk_Cm_1_tip);
} else if (jsSocSk_Cm_level == 2) {
player.SetVar("SocSk_Cm_tip", jsSocSk_Cm_2_tip);
} else if (jsSocSk_Cm_level == 3) {
player.SetVar("SocSk_Cm_tip", jsSocSk_Cm_3_tip);
}

if (jsSocSk_CMn_level == 1) {
player.SetVar("SocSk_CMn_tip", jsSocSk_CMn_1_tip);
} else if (jsSocSk_CMn_level == 2) {
player.SetVar("SocSk_CMn_tip", jsSocSk_CMn_2_tip);
} else if (jsSocSk_CMn_level == 3) {
player.SetVar("SocSk_CMn_tip", jsSocSk_CMn_3_tip);
}

if (jsSocSk_DO_level == 1) {
player.SetVar("SocSk_DO_tip", jsSocSk_DO_1_tip);
} else if (jsSocSk_DO_level == 2) {
player.SetVar("SocSk_DO_tip", jsSocSk_DO_2_tip);
} else if (jsSocSk_DO_level == 3) {
player.SetVar("SocSk_DO_tip", jsSocSk_DO_3_tip);
}

if (jsSocSk_If_level == 1) {
player.SetVar("SocSk_If_tip", jsSocSk_If_1_tip);
} else if (jsSocSk_If_level == 2) {
player.SetVar("SocSk_If_tip", jsSocSk_If_2_tip);
} else if (jsSocSk_If_level == 3) {
player.SetVar("SocSk_If_tip", jsSocSk_If_3_tip);
}

if (jsSocSk_TC_level == 1) {
player.SetVar("SocSk_TC_tip", jsSocSk_TC_1_tip);
} else if (jsSocSk_TC_level == 2) {
player.SetVar("SocSk_TC_tip", jsSocSk_TC_2_tip);
} else if (jsSocSk_TC_level == 3) {
player.SetVar("SocSk_TC_tip", jsSocSk_TC_3_tip);
}

if (jsSocSk_VL_level == 1) {
player.SetVar("SocSk_VL_tip", jsSocSk_VL_1_tip);
} else if (jsSocSk_VL_level == 2) {
player.SetVar("SocSk_VL_tip", jsSocSk_VL_2_tip);
} else if (jsSocSk_VL_level == 3) {
player.SetVar("SocSk_VL_tip", jsSocSk_VL_3_tip);
}
//alert("script 3 run");
}

function Script6()
{
  //Add the web app url from your Google sheet, in addition to your variable names from Storyline.

var player = GetPlayer();

WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxy3D9cKP3LU2lQAONHyAvgfNGi-L-tsa_TTlR78VQedHP9I1IX/exec";
 
//Copy & paste Storyline variables
//Use a comma if you use multiple Storyline variables

storyline =
{
// output competency scores

 "SelfAw_EA_Q1" : player.GetVar("SelfAw_EA_Q1"),
 "SelfAw_EA_Q2" : player.GetVar("SelfAw_EA_Q2"),
 "SelfAw_ASA_Q1" : player.GetVar("SelfAw_ASA_Q1"),
 "SelfAw_ASA_Q2" : player.GetVar("SelfAw_ASA_Q2"),
 "SelfAw_SCf_Q1" : player.GetVar("SelfAw_SCf_Q1"),
 "SelfAw_SCf_Q2" : player.GetVar("SelfAw_SCf_Q2"),
 "SelfMan_SCt_Q1" : player.GetVar("SelfMan_SCt_Q1"),
 "SelfMan_SCt_Q2" : player.GetVar("SelfMan_SCt_Q2"),
 "SelfMan_Tr_Q1" : player.GetVar("SelfMan_Tr_Q1"),
 "SelfMan_Tr_Q2" : player.GetVar("SelfMan_Tr_Q2"),
 "SelfMan_Cn_Q1" : player.GetVar("SelfMan_Cn_Q1"),
 "SelfMan_Cn_Q2" : player.GetVar("SelfMan_Cn_Q2"),
 "SelfMan_A_Q1" : player.GetVar("SelfMan_A_Q1"),
 "SelfMan_A_Q2" : player.GetVar("SelfMan_A_Q2"),
 "SelfMan_D_Q1" : player.GetVar("SelfMan_D_Q1"),
 "SelfMan_D_Q2" : player.GetVar("SelfMan_D_Q2"),
 "SelfMan_It_Q1" : player.GetVar("SelfMan_It_Q1"),
 "SelfMan_It_Q2" : player.GetVar("SelfMan_It_Q2"),
 "SocAw_E_Q1" : player.GetVar("SocAw_E_Q1"),
 "SocAw_E_Q2" : player.GetVar("SocAw_E_Q2"),
 "SocAw_SO_Q1" : player.GetVar("SocAw_SO_Q1"),
 "SocAw_SO_Q2" : player.GetVar("SocAw_SO_Q2"),
 "SocAw_OA_Q1" : player.GetVar("SocAw_OA_Q1"),
 "SocAw_OA_Q2" : player.GetVar("SocAw_OA_Q2"),
 "SocSk_DO_Q1" : player.GetVar("SocSk_DO_Q1"),
 "SocSk_DO_Q2" : player.GetVar("SocSk_DO_Q2"), 
 "SocSk_If_Q1" : player.GetVar("SocSk_If_Q1"),
 "SocSk_If_Q2" : player.GetVar("SocSk_If_Q2"),
 "SocSk_Cm_Q1" : player.GetVar("SocSk_Cm_Q1"),
 "SocSk_Cm_Q2" : player.GetVar("SocSk_Cm_Q2"),
 "SocSk_VL_Q1" : player.GetVar("SocSk_VL_Q1"),
 "SocSk_VL_Q2" : player.GetVar("SocSk_VL_Q2"),
 "SocSk_CC_Q1" : player.GetVar("SocSk_CC_Q1"),
 "SocSk_CC_Q2" : player.GetVar("SocSk_CC_Q2"),
 "SocSk_BB_Q1" : player.GetVar("SocSk_BB_Q1"),
 "SocSk_BB_Q2" : player.GetVar("SocSk_BB_Q2"),
 "SocSk_TC_Q1" : player.GetVar("SocSk_TC_Q1"),
 "SocSk_TC_Q2" : player.GetVar("SocSk_TC_Q2"),
 "SocSk_CMn_Q1" : player.GetVar("SocSk_CMn_Q1"),
 "SocSk_CMn_Q2" : player.GetVar("SocSk_CMn_Q2"),

// output competency bullets & explanations

 "SelfAw_EA_b" : player.GetVar("SelfAw_EA_b"),
 "SelfAw_EA_e" : player.GetVar("SelfAw_EA_e"),
 "SelfAw_ASA_b" : player.GetVar("SelfAw_ASA_b"),
 "SelfAw_ASA_e" : player.GetVar("SelfAw_ASA_e"),
 "SelfAw_SCf_b" : player.GetVar("SelfAw_SCf_b"),
 "SelfAw_SCf_e" : player.GetVar("SelfAw_SCf_e"),
 "SelfMan_SCt_b" : player.GetVar("SelfMan_SCt_b"),
 "SelfMan_SCt_e" : player.GetVar("SelfMan_SCt_e"),
 "SelfMan_Tr_b" : player.GetVar("SelfMan_Tr_b"),
 "SelfMan_Tr_e" : player.GetVar("SelfMan_Tr_e"),
 "SelfMan_Cn_b" : player.GetVar("SelfMan_Cn_b"),
 "SelfMan_Cn_e" : player.GetVar("SelfMan_Cn_e"),
 "SelfMan_A_b" : player.GetVar("SelfMan_A_b"),
 "SelfMan_A_e" : player.GetVar("SelfMan_A_e"),
 "SelfMan_D_b" : player.GetVar("SelfMan_D_b"),
 "SelfMan_D_e" : player.GetVar("SelfMan_D_e"),
 "SelfMan_It_b" : player.GetVar("SelfMan_It_b"),
 "SelfMan_It_e" : player.GetVar("SelfMan_It_e"),
 "SocAw_E_b" : player.GetVar("SocAw_E_b"),
 "SocAw_E_e" : player.GetVar("SocAw_E_e"),
 "SocAw_SO_b" : player.GetVar("SocAw_SO_b"),
 "SocAw_SO_e" : player.GetVar("SocAw_SO_e"),
 "SocAw_OA_b" : player.GetVar("SocAw_OA_b"),
 "SocAw_OA_e" : player.GetVar("SocAw_OA_e"),
 "SocSk_DO_b" : player.GetVar("SocSk_DO_b"),
 "SocSk_DO_e" : player.GetVar("SocSk_DO_e"), 
 "SocSk_If_b" : player.GetVar("SocSk_If_b"),
 "SocSk_If_e" : player.GetVar("SocSk_If_e"),
 "SocSk_Cm_b" : player.GetVar("SocSk_Cm_b"),
 "SocSk_Cm_e" : player.GetVar("SocSk_Cm_e"),
 "SocSk_VL_b" : player.GetVar("SocSk_VL_b"),
 "SocSk_VL_e" : player.GetVar("SocSk_VL_e"),
 "SocSk_CC_b" : player.GetVar("SocSk_CC_b"),
 "SocSk_CC_e" : player.GetVar("SocSk_CC_e"),
 "SocSk_BB_b" : player.GetVar("SocSk_BB_b"),
 "SocSk_BB_e" : player.GetVar("SocSk_BB_e"),
 "SocSk_TC_b" : player.GetVar("SocSk_TC_b"),
 "SocSk_TC_e" : player.GetVar("SocSk_TC_e"),
 "SocSk_CMn_b" : player.GetVar("SocSk_CMn_b"),
 "SocSk_CMn_e" : player.GetVar("SocSk_CMn_e"),

// output competency tips & levels

 "SelfAw_EA_tip" : player.GetVar("SelfAw_EA_tip"),
 "SelfAw_EA_level" : player.GetVar("SelfAw_EA_level"),
 "SelfAw_ASA_tip" : player.GetVar("SelfAw_ASA_tip"),
 "SelfAw_ASA_level" : player.GetVar("SelfAw_ASA_level"),
 "SelfAw_SCf_tip" : player.GetVar("SelfAw_SCf_tip"),
 "SelfAw_SCf_level" : player.GetVar("SelfAw_SCf_level"),
 "SelfMan_SCt_tip" : player.GetVar("SelfMan_SCt_tip"),
 "SelfMan_SCt_level" : player.GetVar("SelfMan_SCt_level"),
 "SelfMan_Tr_tip" : player.GetVar("SelfMan_Tr_tip"),
 "SelfMan_Tr_level" : player.GetVar("SelfMan_Tr_level"),
 "SelfMan_Cn_tip" : player.GetVar("SelfMan_Cn_tip"),
 "SelfMan_Cn_level" : player.GetVar("SelfMan_Cn_level"),
 "SelfMan_A_tip" : player.GetVar("SelfMan_A_tip"),
 "SelfMan_A_level" : player.GetVar("SelfMan_A_level"),
 "SelfMan_D_tip" : player.GetVar("SelfMan_D_tip"),
 "SelfMan_D_level" : player.GetVar("SelfMan_D_level"),
 "SelfMan_It_tip" : player.GetVar("SelfMan_It_tip"),
 "SelfMan_It_level" : player.GetVar("SelfMan_It_level"),
 "SocAw_E_tip" : player.GetVar("SocAw_E_tip"),
 "SocAw_E_level" : player.GetVar("SocAw_E_level"),
 "SocAw_SO_tip" : player.GetVar("SocAw_SO_tip"),
 "SocAw_SO_level" : player.GetVar("SocAw_SO_level"),
 "SocAw_OA_tip" : player.GetVar("SocAw_OA_tip"),
 "SocAw_OA_level" : player.GetVar("SocAw_OA_level"),
 "SocSk_DO_tip" : player.GetVar("SocSk_DO_tip"),
 "SocSk_DO_level" : player.GetVar("SocSk_DO_level"), 
 "SocSk_If_tip" : player.GetVar("SocSk_If_tip"),
 "SocSk_If_level" : player.GetVar("SocSk_If_level"),
 "SocSk_Cm_tip" : player.GetVar("SocSk_Cm_tip"),
 "SocSk_Cm_level" : player.GetVar("SocSk_Cm_level"),
 "SocSk_VL_tip" : player.GetVar("SocSk_VL_tip"),
 "SocSk_VL_level" : player.GetVar("SocSk_VL_level"),
 "SocSk_CC_tip" : player.GetVar("SocSk_CC_tip"),
 "SocSk_CC_level" : player.GetVar("SocSk_CC_level"),
 "SocSk_BB_tip" : player.GetVar("SocSk_BB_tip"),
 "SocSk_BB_level" : player.GetVar("SocSk_BB_level"),
 "SocSk_TC_tip" : player.GetVar("SocSk_TC_tip"),
 "SocSk_TC_level" : player.GetVar("SocSk_TC_level"),
 "SocSk_CMn_tip" : player.GetVar("SocSk_CMn_tip"),
 "SocSk_CMn_level" : player.GetVar("SocSk_CMn_level"),

// output domain headers and feedback
 "SelfAwHeader" : player.GetVar("SelfAwHeader"),
 "SelfAwFB" : player.GetVar("SelfAwFB"),
 "SelfManHeader" : player.GetVar("SelfManHeader"),
 "SelfManFB" : player.GetVar("SelfManFB"),
 "SocAwHeader" : player.GetVar("SocAwHeader"),
 "SocAwFB" : player.GetVar("SocAwFB"),
 "SocSkHeader" : player.GetVar("SocSkHeader"),
 "SocSkFB" : player.GetVar("SocSkFB"),

// output leadership styles overview
 "leadershipFBp1" : player.GetVar("leadershipFBp1"),
 "leadershipFBp2" : player.GetVar("leadershipFBp2"),

// output leadership styles feedback
 "coerciveFB" : player.GetVar("coerciveFB"),
 "pacesettingFB" : player.GetVar("pacesettingFB"),
 "authoritativeFB" : player.GetVar("authoritativeFB"),
 "affiliativeFB" : player.GetVar("affiliativeFB"),
 "democraticFB" : player.GetVar("democraticFB"),
 "coachingFB" : player.GetVar("coachingFB"),

 "SelfAwScore" : player.GetVar("SelfAwScore"),
 "SelfManScore" : player.GetVar("SelfManScore"),
 "SocAwScore" : player.GetVar("SocAwScore"),
 "SocSkScore" : player.GetVar("SocSkScore"),
 "CoerciveScore" : player.GetVar("CoerciveScore"),
 "PacesettingScore" : player.GetVar("PacesettingScore"),
 "AuthoritativeScore" : player.GetVar("AuthoritativeScore"),
 "AffiliativeScore" : player.GetVar("AffiliativeScore"),
 "DemocraticScore" : player.GetVar("DemocraticScore"),
 "CoachingScore" : player.GetVar("CoachingScore"),
 "learnerName" : player.GetVar("learnerName")

}

//Don't edit below this line, you're all set :)
$.ajax(
  {
    url: WEB_APP_URL,
    type: "POST",
    data: storyline,
    success: function(data)
    {
      console.log(data);
    },
    error: function(err)
    {
      console.log('Error:', err);
    }
  });
  return false;
}

function Script7()
{
  var player = GetPlayer();
//alert("the script has begun");

// Get question results and combine to get a score from 2-10 for each competency
var jsSelfAw_ASA = player.GetVar("SelfAw_ASA_Q1") + player.GetVar("SelfAw_ASA_Q2");



player.SetVar("TEST_VAL",jsSelfAw_ASA);


//alert("the script has run");
//alert(jsSuppStylesList);
}

