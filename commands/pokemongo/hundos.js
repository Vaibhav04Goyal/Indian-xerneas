module.exports = {
	cooldown: 0,
	help: `Sets your PoGo raid list.`,
	permissions: 'none',
	commandFunction: function (Bot, room, time, by, args, client, isPM) {
		const CP_M = {
			"1": 0.094,
			"1.5": 0.1351374318,
			"2": 0.16639787,
			"2.5": 0.192650919,
			"3": 0.21573247,
			"3.5": 0.2365726613,
			"4": 0.25572005,
			"4.5": 0.2735303812,
			"5": 0.29024988,
			"5.5": 0.3060573775,
			"6": 0.3210876,
			"6.5": 0.3354450362,
			"7": 0.34921268,
			"7.5": 0.3624577511,
			"8": 0.3752356,
			"8.5": 0.387592416,
			"9": 0.39956728,
			"9.5": 0.4111935514,
			"10": 0.4225,
			"10.5": 0.4329264091,
			"11": 0.44310755,
			"11.5": 0.4530599591,
			"12": 0.4627984,
			"12.5": 0.472336093,
			"13": 0.48168495,
			"13.5": 0.4908558003,
			"14": 0.49985844,
			"14.5": 0.508701765,
			"15": 0.51739395,
			"15.5": 0.5259425113,
			"16": 0.5343543,
			"16.5": 0.5426357375,
			"17": 0.5507927,
			"17.5": 0.5588305862,
			"18": 0.5667545,
			"18.5": 0.5745691333,
			"19": 0.5822789,
			"19.5": 0.5898879072,
			"20": 0.5974,
			"20.5": 0.6048236651,
			"21": 0.6121573,
			"21.5": 0.6194041216,
			"22": 0.6265671,
			"22.5": 0.6336491432,
			"23": 0.64065295,
			"23.5": 0.6475809666,
			"24": 0.65443563,
			"24.5": 0.6612192524,
			"25": 0.667934,
			"25.5": 0.6745818959,
			"26": 0.6811649,
			"26.5": 0.6876849038,
			"27": 0.69414365,
			"27.5": 0.70054287,
			"28": 0.7068842,
			"28.5": 0.7131691091,
			"29": 0.7193991,
			"29.5": 0.7255756136,
			"30": 0.7317,
			"30.5": 0.7347410093,
			"31": 0.7377695,
			"31.5": 0.7407855938,
			"32": 0.74378943,
			"32.5": 0.7467812109,
			"33": 0.74976104,
			"33.5": 0.7527290867,
			"34": 0.7556855,
			"34.5": 0.7586303683,
			"35": 0.76156384,
			"35.5": 0.7644860647,
			"36": 0.76739717,
			"36.5": 0.7702972656,
			"37": 0.7731865,
			"37.5": 0.7760649616,
			"38": 0.77893275,
			"38.5": 0.7817900548,
			"39": 0.784637,
			"39.5": 0.7874736075,
			"40": 0.7903,
			"40.5": 0.792803968,
			"41": 0.79530001,
			"41.5": 0.797800015,
			"42": 0.8003,
			"42.5": 0.802799995,
			"43": 0.8053,
			"43.5": 0.8078,
			"44": 0.81029999,
			"44.5": 0.812799985,
			"45": 0.81529999,
			"45.5": 0.81779999,
			"46": 0.82029999,
			"46.5": 0.82279999,
			"47": 0.82529999,
			"47.5": 0.82779999,
			"48": 0.83029999,
			"48.5": 0.83279999,
			"49": 0.83529999,
			"49.5": 0.83779999,
			"50": 0.84029999,
			"50.5": 0.84279999,
			"51": 0.84529999
		};
		const shinies = {
			"abomasnow": true,
			"absol": true,
			"aerodactyl": true,
			"aipom": true,
			"alomomola": true,
			"altaria": true,
			"anorith": true,
			"arcanine": true,
			"aron": true,
			"azelf": true,
			"bagon": true,
			"barboach": true,
			"beedrill": true,
			"beldum": true,
			"bellsprout": true,
			"bidoof": true,
			"blastoise": true,
			"bonsly": true,
			"bronzor": true,
			"buizel": true,
			"bulbasaur": true,
			"bunnelby": true,
			"burmy": true,
			"carvanha": true,
			"castform": true,
			"castformrainy": true,
			"caterpie": true,
			"charizard": true,
			"charmander": true,
			"charmander": true,
			"chikorita": true,
			"chimchar": true,
			"chimchar": true,
			"chimecho": true,
			"chinchou": true,
			"clefairy": true,
			"cranidos": true,
			"cubchoo": true,
			"cyndaquil": true,
			"deino": true,
			"diglett": true,
			"diglettalola": true,
			"doduo": true,
			"dratini": true,
			"dunsparce": true,
			"durant": true,
			"duskull": true,
			"dwebble": true,
			"eevee": true,
			"electrike": true,
			"farfetchd": true,
			"farfetchdgalar": true,
			"feebas": true,
			"ferroseed": true,
			"fletchling": true,
			"fletchling": true,
			"gastly": true,
			"gastly": true,
			"gengar": true,
			"geodude": true,
			"geodudealola": true,
			"gible": true,
			"gible": true,
			"glameow": true,
			"gligar": true,
			"goldeen": true,
			"growlithe": true,
			"gyarados": true,
			"heatmor": true,
			"heracross": true,
			"hippopotas": true,
			"hitmonchan": true,
			"hitmonlee": true,
			"houndoom": true,
			"illumise": true,
			"jynx": true,
			"kabuto": true,
			"kangaskhan": true,
			"klink": true,
			"lapras": true,
			"larvitar": true,
			"ledyba": true,
			"lickitung": true,
			"lileep": true,
			"lillipup": true,
			"lotad": true,
			"lugia": true,
			"lunatone": true,
			"luvdisc": true,
			"machop": true,
			"machop": true,
			"magikarp": true,
			"magikarp": true,
			"magnemite": true,
			"makuhita": true,
			"manectric": true,
			"marill": true,
			"meditite": true,
			"meowth": true,
			"meowthgalar": true,
			"mesprit": true,
			"mimejr": true,
			"misdreavus": true,
			"mrmime": true,
			"mudkip": true,
			"murkrow": true,
			"natu": true,
			"nincada": true,
			"nosepass": true,
			"oddish": true,
			"omanyte": true,
			"onix": true,
			"pidgeot": true,
			"pidgey": true,
			"pidove": true,
			"pikachu": true,
			"pinsir": true,
			"piplup": true,
			"piplup": true,
			"poliwag": true,
			"ponyta": true,
			"ponytagalar": true,
			"poochyena": true,
			"porygon": true,
			"porygon": true,
			"psyduck": true,
			"qwilfish": true,
			"ralts": true,
			"rattataalola": true,
			"rhyhorn": true,
			"rhyhorn": true,
			"riolu": true,
			"roggenrola": true,
			"roselia": true,
			"roselia": true,
			"rufflet": true,
			"sableye": true,
			"sandshrewalola": true,
			"sawk": true,
			"scyther": true,
			"seedot": true,
			"seedot": true,
			"seedot": true,
			"seel": true,
			"sentret": true,
			"seviper": true,
			"shellder": true,
			"shieldon": true,
			"skarmory": true,
			"skitty": true,
			"skorupi": true,
			"slowbro": true,
			"slowpoke": true,
			"sneasel": true,
			"sneasel": true,
			"snorlax": true,
			"snorunt": true,
			"snover": true,
			"snubbull": true,
			"solrock": true,
			"spinda": true,
			"spoink": true,
			"squirtle": true,
			"stantler": true,
			"staryu": true,
			"stunfiskgalar": true,
			"sudowoodo": true,
			"sunkern": true,
			"swablu": true,
			"swablu": true,
			"swinub": true,
			"taillow": true,
			"tangela": true,
			"tauros": true,
			"tentacool": true,
			"throh": true,
			"timburr": true,
			"togepi": true,
			"torchic": true,
			"totodile": true,
			"trapinch": true,
			"treecko": true,
			"trubbish": true,
			"turtwig": true,
			"tympole": true,
			"unown": true,
			"uxie": true,
			"venonat": true,
			"venonat": true,
			"venusaur": true,
			"volbeat": true,
			"voltorb": true,
			"vulpix": true,
			"vulpixalola": true,
			"wailmer": true,
			"weedle": true,
			"weedle": true,
			"weezinggalar": true,
			"whismur": true,
			"wingull": true,
			"wobbuffet": true,
			"woobat": true,
			"wooper": true,
			"wurmple": true,
			"wynaut": true,
			"yanma": true,
			"zangoose": true,
			"zigzagoongalar": true,
			"zubat": true
		};
		let monID = toID(args.join(''));
		if (monID === 'constructor') return isPM ? Bot.pm(by, 'Kden') : Bot.roomReply(room, by, 'Haha very funny');
		const mon = data.pokedex[monID];
		if (!mon) return isPM ? Bot.pm(by, 'Uhh sorry I don\'t have that Pokemon in my Dex; try the base forme (or format the name the way it\'s seen on PS)?') : Bot.roomReply(room, by, 'Uhh sorry I don\'t have that Pokemon in my Dex; try the base forme (or format the name the way it\'s seen on PS)?');
		const ms = mon.baseStats;
		const atks = [ms.atk, ms.spa].sort((a, b) => b - a);
		const defs = [ms.def, ms.spd].sort((a, b) => b - a);
		const nerfMod = 0.91;
		const stats = {
			atk: 0,
			def: 0,
			sta: Math.floor(ms.hp * 1.75 + 50)
		};
		const speedMod = 1 + (ms.spe - 75) / 500;
		stats.atk = Math.round(Math.round(7 * atks[0] / 4 + 1 * atks[1] / 4) * speedMod);
		stats.def = Math.round(Math.round(5 * defs[0] / 4 + 3 * defs[1] / 4) * speedMod);
		const L40_CP = Math.floor((stats.atk + 15) * (stats.def + 15) ** 0.5 * (stats.sta + 15) ** 0.5 * CP_M[40] ** 2 / 10);
		if (L40_CP > 4000 && !(mon.forme?.startsWith('Mega') && mon.baseSpecies !== 'Mewtwo' && mon.baseSpecies !== 'Rayquaza') && mon.forme !== 'Primal') {
			stats.atk = Math.round(Math.round(7 * atks[0] / 4 + 1 * atks[1] / 4) * speedMod * nerfMod);
			stats.def = Math.round(Math.round(5 * defs[0] / 4 + 3 * defs[1] / 4) * speedMod * nerfMod);
			stats.sta = Math.round((ms.hp * 1.75 + 50) * nerfMod);
		}
		const cps = {
			'20': [Math.floor((stats.atk + 10) * (stats.def + 10) ** 0.5 * (stats.sta + 10) ** 0.5 * CP_M[20] ** 2 / 10), Math.floor((stats.atk + 15) * (stats.def + 15) ** 0.5 * (stats.sta + 15) ** 0.5 * CP_M[20] ** 2 / 10)],
			'25': [Math.floor((stats.atk + 10) * (stats.def + 10) ** 0.5 * (stats.sta + 10) ** 0.5 * CP_M[25] ** 2 / 10), Math.floor((stats.atk + 15) * (stats.def + 15) ** 0.5 * (stats.sta + 15) ** 0.5 * CP_M[25] ** 2 / 10)]
		};
		const output = `${mon.name} can have a CP of ${cps[20].join('-')} from raids (${cps[25].join('-')} if boosted), and can${shinies[monID] ? '' : "not"} be shiny.`;
		if (isPM) return Bot.pm(by, output);
		else if (tools.hasPermission(by, 'gamma', room)) return Bot.say(room, output);
		else Bot.roomReply(room, by, output);
	}
}
