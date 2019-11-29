function getRandom(v){
	v = Math.floor((Math.random()*v));
	return v;
}

function capitalize(v){
	return v[0].toUpperCase()+v.substring(1);
}

function choice(a){
	return a[getRandom(a.length)];
}


function getPrefix(){
	it = "";
	switch(getRandom(5)+1){
		case 1:
			it = choice(desc);
			break;
		case 2:
			it = choice(feeling);
			break;
		case 3:
			it = choice(item);
			break;

		case 4:
			if (getRandom(5) == 0){
				it = it+choice(owner)+"s";
				//space = true;
			} else {
				it = it+choice(owner);
			}
			break;
		case 5:
			it = it+choice(animal);
			break;
		default:
			it = "???";
	}
	return it;

}


function getSaid(){
	document.getElementById("Said").innerHTML = choice(said);
}

var space = false;

function getSettlement(){
	it = getPrefix();

	it = capitalize(it);

	it = getFinfSuffic(it, settlement);
	document.getElementById("Settlement").innerHTML = it+", "+getTerritory();
}


function getTerritory(){
	it = getPrefix();

	it = capitalize(it);

	it = getFinfSuffic(it, area);
	return it;
}

function getFort(){
	it = getPrefix();

	it = capitalize(it);

	it = getFinfSuffic(it, fort);

	document.getElementById("Fort").innerHTML = it+", "+getTerritory();
}

function getTemple(){
	it = getPrefix();

	it = capitalize(it);

	it = getFinfSuffic(it, temple);

	document.getElementById("Temple").innerHTML = it+", "+getTerritory();
}


function getTravel(){
	it = getPrefix();

	it = capitalize(it);

	it = getFinfSuffic(it, travel);




	document.getElementById("Travel").innerHTML = it;
}

function getFinfSuffic(pre, suf){

	n = choice(suf);

	if (space == true){
		n = capitalize(suf);
		space = false;
	}

	if (pre[pre.length-1]==n[0]){
		pre = pre+n.substring(1);
	} else{
		pre = pre+n;
	}

	return pre;
}


desc = ["able", "acorn", "air", "ancient", "apple", "ash", "autumn", "bald", "barrow", "battle", "bearded", "big", "bitter", "black", "blaze", "bloody", "blue", "bone", "break", "broad", "broken", "brown", "buckle", "burial", "burning", "cabbage", "clayey", "constant", "corn", "curly", "dead", "deep", "down", "dread", "drift", "dung", "dungeon", "early", "earth", "east", "eight", "elbow", "emerald", "fat", "feast", "fever", "fire", "first", "five", "flat", "flinty", "forge", "fork", "fortune", "four", "gift", "golden", "grassy", "grave", "gray", "great", "green", "hairy", "hearth", "high", "hollow", "honey", "horn", "huge", "icy", "iron", "joust", "last", "late", "little", "lonely", "long", "low", "merry", "mill", "moon", "muddy", "narrow", "new", "nine", "north", "oak", "old", "one", "orange", "perfect", "pink", "purple", "quiet", "rock", "round", "ruby", "rush", "safe", "sapphire", "seven", "shallow", "sharp", "shaven", "silent", "silver", "six", "sky", "small", "snow", "south", "spring", "star", "stone", "strong", "summer", "sun", "sweet", "swollen", "sworn", "thicket", "three", "tiny", "tooth", "two", "upp", "vine", "violet", "watch", "water", "weak", "wedding", "west", "white", "winter", "wooden", "yellow", "young", "red", "straight", "stern", "naked", "bast", "bog", "timber", "pine", "alder", "aspen", "beech", "birch", "cherry", "chestnut", "ebony", "hazel", "pearl", "plum", "maple", "walnut", "willow", "hundred", "thousand", "reed", "kiss", "border", "cloth", "army", "home"];


feeling = ["angry", "awe", "courage", "cruel", "desire", "despair", "bore", "ecstasy", "envy", "fear", "gratitude", "greed", "grief", "guilt", "happy", "hatred", "hope", "horror", "lous", "joy", "kind", "lony", "love", "lust", "passion", "pity", "delight", "pride","rage", "regret", "sad", "confident", "shame", "shock", "shy", "sorrow", "suffering", "trust", "wonder", "worry", "bane", "terror", "accursed", "forsaken", "affable", "fair", "avenged", "good", "bad", "bare", "bliss", "blessed", "bold", "brave", "brash", "candid", "careless", "chaste", "lustful", "insane", "crazy", "mad", "cruel", "damned", "sluggard", "indolent", "gentle", "grim", "holy", "lame", "lisp", "elegant", "hidden", "cold", "warm"];

owner = ["almoner", "abbot", "angel", "apostate", "astrologer", "avenger", "baker", "bandit", "barber", "bastard", "bather", "battler", "beer", "beggar", "bleacher", "brigand", "builder", "butcher", "carpenter", "carrier", "carver", "caulker", "chamberlain", "chandler", "child", "clerk", "clerk", "confessor", "conqueror", "constable", "cook", "cooper", "coper", "crone", "crusader", "dame", "damsel", "deacon", "debonair", "devil", "doer", "drunkard", "executioner", "exile", "farmer", "fighter", "fowler", "fisher", "franklin", "friar", "furrier", "gaoler", "god", "harlot", "hunter", "husband", "impaler", "jeweler", "judge", "keeper", "knight", "liberator", "lord", "maiden", "master", "mender", "mercer", "merchant", "miller", "monger", "monk", "mummer", "nun", "outlaw", "painter", "pardoner", "parson", "physician", "pirate", "plaster", "prayer", "prince", "prior", "queen", "reeve", "robber", "roofer", "saddler", "sailor", "sculptor", "servant", "sheriff", "shipman", "smith", "squire", "steward", "summoner", "tailor", "tanner", "thief", "treasurer", "virgin", "walker", "warrior", "weaver", "whore", "wife", "wright", "king", "ravager", "father", "mother", "brother", "sister", "witch", "hook", "page", "gardner", "beauty", "elf", "dwarf"];


animal = ["ant", "avalerion", "basilisk", "bear", "bee", "boar", "bull", "cock", "corvus", "crab", "crake", "deer", "dog", "dove", "dragon", "eagle", "fox", "griffin", "harpy", "hind", "hound", "lamb", "leopard", "lion", "mare", "martlet", "mermaid", "ox", "panther", "pegasus", "phoenix", "ram", "salamander", "seal", "serpent", "spider", "stag", "stallion", "swan", "unicorn", "widow", "wolf", "snail", "spider", "slug", "fish", "chicken", "crow", "duck", "goose", "hawk", "owl", "pigeon", "raven", "rooster", "frog", "beetle", "roach", "mantis", "worm", "seagull", "snake", "bird"];


item = ["spear", "bow", "arrow", "sling", "shield", "sword", "dagger", "sickle", "knife", "axe", "club", "mace", "hammer", "pick", "bill", "glaive", "glave", "catcher", "pike", "fork", "staff", "cleaver", "scythe", "drill", "dart", "saw", "plough", "chekan", "nail", "flail", "drill", "rod", "halberd", "gift", "flower", "charcoal", "grail", "stick"];

settlement = ["hall", "house", "gate", "point", "town", "harbor", "port", "cross", "city", "stream", "market", "cottage", "farm", "ford", "village", "croft"];


area = ["land", "island", "ground", "valley", "field", "earth", "soil", "acres", "yard", "fall", "steam", "hill", "wood", "mire", "mountain", "shore", "den", "ridge", "meadow", "grove", "beach"];

temple = ["site", "temple", "church", "shrine", "asylum", "cliff"];

fort = ["motte", "fort", "tower", "hold", "castle", "camp", "wall", "guard", "citadel", "keep", "mansion"];

water_area = ["pool", "river", "lake", "sea"];

travel = ["road", "way", "bridge", "path", "crossing", "stop", "pass"];


said = ["accused", "acknowledged", "acquiesced", "added", "added", "addressed", "admitted", "affirmed", "agreed", "alliterated", "announced", "answered", "apologized", "appealed", "approved", "argued", "articulated", "aside", "asked", "asserted", "assured", "avowed", "babbled", "badgered", "barked", "bawled", "beamed", "began", "begged", "bellowed", "beseeched", "bet", "bewailed", "bickered", "bleated", "blubbered", "blurted", "boasted", "boomed", "bragged", "breathed", "", "bubbled", "burst", "cackled", "cajoled", "called", "cautioned", "challenged", "chastised", "chatted", "chattered", "cheered", "chided", "chimed in", "chirped", "chortled", "chorused", "chuckled", "claimed", "clarified", "coached", "coaxed", "comforted", "commanded", "commented", "complained", "complimented", "conceded", "concluded", "concurred", "condemned", "confessed", "confided", "confirmed", "congratulated", "considered", "consoled", "continued", "contributed", "conversed", "convinced", "cooed", "corrected", "countered", "cried", "cringed", "croaked", "crowed", "cursed", "dared", "deadpanned", "debated", "decided", "declared", "defended", "deflected", "demanded", "demurred", "denied", "denounced", "described", "directed", "disagreed", "disclosed", "disputed", "divulged", "doubted", "drawled", "dvised", "echoed", "effused", "emphasized", "encouraged", "ended", "entreated", "exasperated", "exclaimed", "explained", "exploded", "expressed", "exulted", "faltered", "finished", "flattered", "flirted", "forgave", "fretted", "fumed", "gasped", "gibed", "giggled", "gloated", "goaded", "greeted", "grinned", "griped", "groaned", "groggily", "groused", "growled", "grumbled", "grunted", "guessed", "gulped", "gurgled", "gushed", "heaved", "hesitated", "hinted", "hissed", "hollered", "howled", "huffed", "hummed", "hypothesized", "imitated", "implied", "implored", "informed", "inquired", "insinuated", "insisted", "insisted", "instructed", "insulted", "interjected", "interrupted", "intoned", "jabbered", "jeered", "jested", "joked", "joked", "lamented", "lectured", "lethargically", "lied", "lisped", "listlessly", "maintained", "marveled", "mentioned", "mimicked", "moaned", "mocked", "monotoned", "motioned", "mouthed", "mumbled", "mumbled", "murmured", "mused", "muttered", "nagged", "needled", "nodded", "notified", "observed", "offered", "opined", "ordered", "panted", "peeped", "peppered", "perplexed", "pestered", "piped", "pleaded", "pointed out", "pondered", "praised", "prattled", "prayed", "pressed", "proclaimed", "prodded", "professed", "promised", "prompted", "prompted", "pronounced", "proposed", "protested", "provoked", "purred", "put in", "puzzled", "quavered", "queried", "questioned", "quipped", "quizzed", "quoted", "raged", "rambled", "ranted", "rasped", "rattled on", "read", "reasoned", "reassured", "recalled", "recited", "reckoned", "recounted", "refused", "reiterated", "rejoined", "related", "remarked", "remembered", "reminded", "repeated", "replied", "reported", "requested", "resounded", "responded", "restated", "retaliated", "retorted", "revealed", "rhymed", "ridiculed", "roared", "sang", "sassed", "scoffed", "scolded", "scowled", "screamed", "screeched", "seethed", "shivered", "shot", "shouted", "shrieked", "shrilled", "shuddered", "sibilated", "sighed", "simpered", "sleepily", "slurred", "smiled", "smirked", "snapped", "snarled", "sneered", "sneezed", "snickered", "sniffed", "sniffled", "snorted", "sobbed", "somnolently", "speculated", "spilled", "spluttered", "spoke", "sputtered", "squeaked", "squealed", "squealed", "stammered", "started", "stated", "stormed", "stressed", "stumbled", "stuttered", "suggested", "surmised", "swooned", "swore", "sympathized", "tartly", "taunted", "teased", "tempted", "tested", "thanked", "thought outloud", "threatened", "told", "trilled", "urged", "uttered", "vacillated", "ventured", "volunteered", "vowed", "wailed", "warned", "wearily", "went on", "wept", "wheezed", "whimpered", "whined", "whispered", "whooped", "wished", "worried", "yakked", "yapped", "yawned", "yelled", "yelped"];

var poss = desc.length+feeling.length+owner.length+animal.length+item.length;

document.getElementById("SettlementP").innerHTML = poss*settlement.length;
document.getElementById("FortP").innerHTML = poss*fort.length;
document.getElementById("TempleP").innerHTML = poss*temple.length;
document.getElementById("TravelP").innerHTML = poss*travel.length;
getSettlement();
