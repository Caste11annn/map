// JavaScript Document

function fun(ID)
{
	$('.bg-modal').css('display','flex'); // делает параметр display у объекта flex
	switch(ID)
	{
		//  ЕСЛИ В HTML ЗАЙДЕШЬ, ТАМ УВИДЕШЬ, ГДЕ Я ID РАСТАВЛЯЛ
		case "b1":
			$('#Text1').html("LIFE COIN EXCHANGE");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Recruit:</strong> Whilst it controls this Racket, the gang may recruit two Hive Scum or one Bounty Hunter Hired Gun for free, including their equipment, prior to very battle.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Special:</strong> If the gang also controls both of the Linked Rackets, all of its members gain the Fearsome skill.");
			$('#Text8').html("");
			break;
		case "b2":
			$('#Text1').html("WHISPER BROKERS");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special:</strong> Whilst it controls this racket, the gang may choose an additional D3 Tactics cards in the pre-battle sequence.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Special:</strong> If the gang also controls one of the Linked Rackets, when challenged, the gang may choose the Racket that will be at stake in the battle, even though it would normally be chosen by the challenger.");
			$('#Text7').html("");
			$('#Text8').html("<strong>Special:</strong> If the gang also controls both of the Linked Rackets, when challenged for a Racket the gang controls, make an Intelligence check for the gang Leader. If the check is passed, the player of the gang may choose to play the Ambush scenario instead of rolling. They are automatically the attacker.");
			break;
		case "b3":
			$('#Text1').html("CORPSE GUILD BOND");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special:</strong> Whilst it controls this Racket, the gang can control no other Guild Bond Racket.");
			$('#Text4').html("");
			$('#Text5').html("");
			$('#Text6').html("<strong>Recruit:</strong> Whilst it controls this Racket, and if the gang is Law Abiding, it forms an automatic alliance with the Corpse Guild and may always add a Corpse Harvesting Party to a crew during any pre-battle sequence (see page 36 of <i>Necromunda: The Book of Peril</i>). Alternatively, or if this Racket is controlled by an Outlaw gang, the gang may recruit one Bounty Hunter and up to two Hive Scum for free during any prebattle sequence, including their equipment.");
			$('#Text7').html("<strong>Income:</strong> Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income. The result of the roll is increased by 1 for every other Racket the gang controls.");
			$('#Text8').html("");
			break;
		case "b4":
			$('#Text1').html("PEDDLERS OF FORBIDDEN LORE");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special:</strong> Whilst the gang controls this Racket, the controlling player may re-roll the dice when determining Priority.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang gains 2D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Special:</strong> Whilst the gang controls this Racket, its Leader and its all Champions gain a 4+ saving throw that cannot be modified by a weapon’s Armour Piercing value.");
			$('#Text8').html("");
			break;
		case "b5":
			$('#Text1').html("WYRD TRADE");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Equipment:</strong> Whilst it controls this Racket, the gang treats Ghast as a Common item.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang gains 2D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls both of the Linked Rackets, the gang gains 3D6x10 credits when they collect Income.");
			$('#Text8').html("");
			break;
		case "b6":
			$('#Text1').html("NARCO-DISTRIBUTION");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Income:</strong> The gang earns D6x10 credits when they collect Income.");
			$('#Text4').html("<strong>Special:</strong> Whilst it controls this Racket, the gang treats Chem-synth, Medicae Kit, Stimm-slug Stash, and any weapon with the Gas or Toxin trait as Common.");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang gains 3D6x10 credits when they collect Income.");
			$('#Text8').html("");
			break;
		case "b7":
			$('#Text1').html("THE RESSURECTION GAME");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special:</strong> Whilst it controls this Racket, the gang may ignore one Critical Injury or Memorable Death result on the Lasting Injury table per battle. When these results are rolled, the fighter simply goes Into Recovery.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong>  If the gang also controls one of the Linked Rackets, the gang gains 2D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Special:</strong> Any gang in the campaign may pay the gang controlling this Racket to return a dead fighter from the grave. This costs the original value of the fighter (including equipment) +100 credits. Roll 2D6. On a roll of 7-12 the fighter is resurrected and gains the Fearsome skill. On a roll of 3-6 the fighter is resurrected but suffers a permanent loss of 1 Toughness and gains the Fearsome skill if they don’t have it already. On a roll of 2, the resurrection fails.");
			$('#Text8').html("");
			break;
		case "b8":
			$('#Text1').html("GAMBLING EMPIRE");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Income:</strong> The player of the gang that controls this Racket chooses a suit of cards and then draws a card from a shuffled deck of playing cards. If they draw a card from the suit they chose, they earn income equal to the value of the card (Jack 11, Queen 12, King 13) x 10 credits. If they draw a card from a suit of the same colour, they earn income equal to the value of the card x 5 credits. If it is any other suit, they gain no income.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Special:</strong>  If the gang also controls one of the Linked Rackets, the gang’s player may nominate a single enemy fighter (but not a Leader or Champion) at the start of the battle. The gang has called in the fighter’s debts. The nominated fighter misses the battle.");
			$('#Text7').html("");
			$('#Text8').html("");
			break;
		case "b9":
			$('#Text1').html("GHAST PROSPECTING");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Equipment:</strong> Whilst it controls this Racket, three fighters in the gang gain a dose of Ghast each battle for free.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 4D6x10 credits when they collect Income.");
			$('#Text8').html("");
			break;
		case "b10":
			$('#Text1').html("OUT-HIVE SMUGGLING ROUTES");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Income:</strong> The gang earns D6x10 credits when they collect Income.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 3D6x10 credits when they collect Income.");
			$('#Text8').html("");
			break;
		case "b11":
			$('#Text1').html("XENOS BEAST TRAFFICKING");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Equipment</strong> Whilst it controls this Racket, the gang Leader may be equipped with either a Grapplehawk or a Gyrinx Cat from the Black Market free of charge.");
			$('#Text4').html("<strong>Special</strong> Whilst it controls this Racket, the gang treats Grapplehawks and Gyrinx Cats from the Black Market as Common.");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.");
			$('#Text8').html("");
			break;
		case "b12":
			$('#Text1').html("BLOOD PITS");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Recruit</strong> Whilst it controls this Racket, the gang may recruit up to two Hive Scum Hired Guns for free, including their equipment, prior to every battle.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Special:</strong> If the gang also controls one of the Linked Rackets, as a post-battle action a Leader or Champion may fight in the pits. Make a Weapon Skill check with a -1 modifier for them. If the check is passed, they permanently gain one random Combat or Brawn skill. If the check is failed, nothing happens. If however the check is failed on the roll of a 1, the fighter suffers one roll on the Lasting Injury table.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.");
			$('#Text8').html("");
			break;
		case "b13":
			$('#Text1').html("SLAVE GUILD BOND");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special:</strong> Whilst it controls this Racket, the gang can control no other Guild Bond Racket.");
			$('#Text4').html("");
			$('#Text5').html("");
			$('#Text6').html("<strong>Recruit:</strong> Whilst it controls this Racket, and if the gang is Law Abiding, it forms an automatic alliance with the Slave Guild and may always add a Slaver Entourage to a crew during any pre-battle sequence (see page 38 of <i>Necromunda: The Book of Peril</i>). Alternatively, or if this Racket is controlled by an Outlaw gang, the gang may recruit one Bounty Hunter and up to two Hive Scum for free during any prebattle sequence, including their equipment.");
			$('#Text7').html("<strong>Income:</strong> Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income. The result of the roll is increased by 1 for every other Racket the gang controls.");
			$('#Text8').html("");
			break;
		case "b14":
			$('#Text1').html("WITCH SEEKING");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special</strong> This Racket may only be controlled by a Law Abiding gang. If it is claimed by an Outlaw gang, it is converted into a Wyrd Trade Racket.");
			$('#Text4').html("<strong>Special</strong> Whilst it controls this Racket, all fighters in the gang may add the Shock trait to one of their weapons that has the Melee trait for free.");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang doubles the bounty it receives for any fighter that is a Psyker, even if that fighter has become a Psyker temporarily due to the effects of Ghast.");
			$('#Text7').html("<strong>Income:</strong>  If the gang also controls both of the Linked Rackets, the gang Leader may make an Intelligence check before claiming a bounty. If the check is passed, they identify the captive as a witch and receive double the bounty for them.");
			$('#Text8').html("");
			break;
		case "b15":
			$('#Text1').html("PRODUCTION SKIMMING");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Income:</strong> The gang earns D6x10 credits when they collect Income.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 3D6x10 credits when they collect Income.");
			$('#Text8').html("");
			break;
		case "b16":
			$('#Text1').html("CARAVAN ROUTE CONTROL");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Income:</strong> The gang earns D6x10 credits when they collect Income.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 3D6x10 credits when they collect Income.");
			$('#Text8').html("");
			break;
		case "b17":
			$('#Text1').html("COLD TRADE");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Equipment</strong> Whilst it controls this Racket, one member of the gang may have a single item from the Xenos Weapons section of the Black Market for free.");
			$('#Text4').html("<strong>Special</strong> Whilst it controls this Racket, the gang treats items from the Xenos Weapons section of the Black Market as Common.");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.");
			$('#Text8').html("");
			break;
		case "b18":
			$('#Text1').html("SPIRE PATRONAGE");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Income:</strong> Whilst it controls this Racket, the gang gains 2D6x10 credits when they collect Income if they won their battle.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Equipment:</strong> If the gang also controls one of the Linked Rackets, all of the gang’s Leader and Champions may each have one of the following Extravagant Goods for free: Gold-plated Gun, Exotic Furs, Opulent Jewellery, Uphive Raiments.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls both of the Linked Rackets, the gang’s Leader gains a Caryatid Exotic Beast for free. This Caryatid will not leave its master if the gang loses Reputation, but will leave if the gang loses control of this Racket.");
			$('#Text8').html("");
			break;
		case "b19":
			$('#Text1').html("BULLET CUTTING");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special</strong> Whilst it controls this Racket, all fighters in the gang may re-roll any failed Ammo checks.");
			$('#Text4').html("<strong>Equipment</strong> Whilst it controls this Racket, the gang treats all items from either the Trading Post or the Black Market with a Rarity of 9 or below as Common.");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.");
			$('#Text8').html("");
			break;
		case "b20":
			$('#Text1').html("SETTLEMENT PROTECTION");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Recruit</strong> Whilst it controls this Racket, the gang gains one Hanger-on of the controlling player’s choice for free.");
			$('#Text4').html("<strong>Income</strong> Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income.");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 3D6x10 credits when they collect Income.");
			$('#Text8').html("");
			break;
		case "b21":
			$('#Text1').html("REDEMPTIONIST BACKERS");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special</strong> Helot Cult, Genestealer Cult and Corpse Grinder Cult gangs may never claim this Racket. If they gain control of it, it becomes dormant until claimed by a different type of gang.");
			$('#Text4').html("<strong>Special</strong> Whilst it controls this Racket, all fighters in the gang may re-roll any failed Ammo checks for any weapon that has the Blaze trait.");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.");
			$('#Text8').html("");
			break;
		case "b22":
			$('#Text1').html("GUILD OF COIN");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special:</strong> Whilst it controls this Racket, the gang can control no other Guild Bond Racket.");
			$('#Text4').html("");
			$('#Text5').html("");
			$('#Text6').html("<strong>Recruit:</strong> Whilst it controls this Racket, and if the gang is Law Abiding, it forms an automatic alliance with the Guild of Coin and may always add Toll Collectors to a crew during any pre-battle sequence (see page 39 of <i>Necromunda: The Book of Peril</i>). Alternatively, or if this Racket is controlled by an Outlaw gang, the gang may recruit one Bounty Hunter and up to two Hive Scum for free during any prebattle sequence, including their equipment.");
			$('#Text7').html("<strong>Income:</strong> Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income. The result of the roll is increased by 1 for every other Racket the gang controls.");
			$('#Text8').html("");
			break;
		case "b23":
			$('#Text1').html("ARCHAEOTECH AUTIONNING");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Equipment</strong> Whilst it controls this Racket, one member of the gang may have a single item from the Imperial Weapons section of the Black Market for free.");
			$('#Text4').html("<strong>Income</strong> Whilst it controls this Racket, the gang gains 2D6x10 credits when they collect Income. If a double is rolled, they gain nothing.");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang gains 3D6x10 credits when they collect Income. However, if a double is rolled, they gain nothing.");
			$('#Text7').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang gains 4D6x10 credits when they collect Income. However, if a double is rolled, they gain nothing.");
			$('#Text8').html("");
			break;
		case "b24":
			$('#Text1').html("PROXIES OF THE OMNISSIAH");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special</strong> Whilst it controls this Racket, all fighters in the gang may re-roll any failed Ammo checks. Additionally, the gang treats all Bionics as Common.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("<strong>Income:</strong> If the gang also controls one of the Linked Rackets, the gang earns D6x10 credits when they collect Income.");
			$('#Text7').html("<strong>Special:</strong> If the gang also controls both of the Linked Rackets, all fighters in the gang may add either the Shock trait or the Seismic trait to one of their weapons for free. New weapons purchased later may also be given this Trait. These weapons also gain the Unstable trait. If the gang loses control of this Racket, the weapons that gained these additional Traits lose them.");
			$('#Text8').html("");
			break;
		case "b25":
			$('#Text1').html("PROMETIUM GUILD BOND");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special:</strong> Whilst it controls this Racket, the gang can control no other Guild Bond Racket.");
			$('#Text4').html("");
			$('#Text5').html("");
			$('#Text6').html("<strong>Recruit:</strong> Whilst it controls this Racket, and if the gang is Law Abiding, it forms an automatic alliance with the Promethium Guild and may always add a Pyromantic Conclave to a crew during any pre-battle sequence (see page 35 of <i>the Necromunda: The Book of Peril</i>). Alternatively, or if this Racket is controlled by an Outlaw gang, the gang may recruit one Bounty Hunter and up to two Hive Scum for free during any prebattle sequence, including their equipment.");
			$('#Text7').html("<strong>Income:</strong> Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income. The result of the roll is increased by 1 for every other Racket the gang controls.");
			$('#Text8').html("");
			break;
		case "b26":
			$('#Text1').html("WATER GUILD BOND");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special:</strong> Whilst it controls this Racket, the gang can control no other Guild Bond Racket.");
			$('#Text4').html("");
			$('#Text5').html("");
			$('#Text6').html("<strong>Recruit:</strong> Whilst it controls this Racket, and if the gang is Law Abiding, it forms an automatic alliance with the Water Guild and may always add a Nautican Syphoning Delegation to a crew during any pre-battle sequence (see page 34 of <i>the Necromunda: The Book of Peril</i>). Alternatively, or if this Racket is controlled by an Outlaw gang, the gang may recruit one Bounty Hunter and up to two Hive Scum for free during any prebattle sequence, including their equipment.");
			$('#Text7').html("<strong>Income:</strong> Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income. The result of the roll is increased by 1 for every other Racket the gang controls.");
			$('#Text8').html("");
			break;
		case "b27":
			$('#Text1').html("IRON GUILD BOND");
			$('#Text2').html("RACKET BOONS");
			$('#Text3').html("<strong>Special:</strong> Whilst it controls this Racket, the gang can control no other Guild Bond Racket.");
			$('#Text4').html("");
			$('#Text5').html("");
			$('#Text6').html("<strong>Recruit:</strong> Whilst it controls this Racket, and if the gang is Law Abiding, it forms an automatic alliance with the Iron Guild and may always add D3+2 Hive Scum to a crew during any pre-battle sequence (see page 61 of the Necromunda: Gangs of the Underhive). Alternatively, or if this Racket is controlled by an Outlaw gang, the gang may recruit one Bounty Hunter and up to two Hive Scum for free during any prebattle sequence, including their equipment.");
			$('#Text7').html("<strong>Income:</strong> Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income. The result of the roll is increased by 1 for every other Racket the gang controls.");
			$('#Text8').html("");
			break;
		case "b28":
			$('#Text1').html("SLUDGE SEE");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Equipment</strong> Whilst it controls this Territory, three fighters in the gang gain choke gas grenades for free.");
			$('#Text4').html("");
			$('#Text5').html("");
			$('#Text6').html("");
			$('#Text7').html("");
			$('#Text8').html("");
			break;
		case "b29":
			$('#Text1').html("WORKSHOP");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Recruit</strong> The gang may recruit an Ammo-jack Hanger-on for free.");
			$('#Text4').html("");
			$('#Text5').html("");
			$('#Text6').html("");
			$('#Text7').html("");
			$('#Text8').html("");
			break;
		case "b30":
			$('#Text1').html("COLLAPSED DOME");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Income</strong> When collecting Income from this Territory, the controlling player may choose to roll between 2D6x10 and 6D6x10. However, if a double is rolled, then no Income is generated and a random fighter from the gang suffers a Lasting Injury.");
			$('#Text4').html("");
			$('#Text5').html("");
			$('#Text6').html("");
			$('#Text7').html("");
			$('#Text8').html("");
			break;
		case "b31":
			$('#Text1').html("REFUSE DRIFT (CAWDOR)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Income</strong> The gang earns 2D6x5 credits from this Territory when collecting Income. However, if a double is rolled, a randomly determined fighter has a nasty encounter with a waste-lurker and must miss the next battle whilst they recover. No Income is lost");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("This Territory grants Cawdor gangs the following Boons:");
			$('#Text7').html("<strong>Reputation:</strong> Whilst it controls this Territory, the gang adds +1 to its Reputation.");
			$('#Text8').html("<strong>Income:</strong> The gang earns 2D6x5 credits from this Territory when collecting Income. A Cawdor gang has no risk of encountering a nasty waste-lurker.");
			break;
		case "b32":
			$('#Text1').html("CORPSE FARM (CAWDOR)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Income</strong> When collecting Income, the gang gains D6x10 credits for every fighter on either side that was deleted from their roster during the Update Roster step of the preceding battle.");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text4').html("");
			$('#Text6').html("This Territory grants Cawdor gangs the following Boons:");
			$('#Text7').html("<strong>Reputation:</strong> Whilst it controls this Territory, the gang adds +1 to its Reputation.");
			$('#Text8').html("<strong>Income:</strong> When collecting Income, the gang gains 2D6x10 credits for every fighter on either side that was deleted from their roster during the Update Roster step of the preceding battle.");
			break;
		case "b33":
			$('#Text1').html("BONE SHRINE (CAWDOR)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Income</strong> The gang earns 2D6x5 credits from this Territory when collecting Income.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("This Territory grants Cawdor gangs the following Boons:");
			$('#Text7').html("<strong>Reputation:</strong> Whilst it controls this Territory, the gang adds +2 to its Reputation.");
			$('#Text8').html("<strong>Income:</strong> The gang earns 4D6x5 credits from this Territory when collecting Income.");
			break;
		case "b34":
			$('#Text1').html("DRINKING HOLE (DELAQUE)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Reputation</strong> Whilst it controls this Territory, the gang adds +1 to its Reputation.");
			$('#Text4').html("<strong>Special</strong> Whilst it controls this Territory, any fighter in the gang may re-roll any failed Cool checks. If a fighter uses this option, place a marker on their card to show that they have hit the bottle. The marked fighters suffer a -1 to hit penalty for the rest of the battle.");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("This Territory grants Delaque gangs the following Boons:");
			$('#Text7').html("<strong>Reputation:</strong> Whilst it controls this Territory, the gang adds +2 to its Reputation.");
			$('#Text8').html("<strong>Special:</strong> A Delaque gang may not use the standard Boon. Instead, the player of the Delaque gang that controls this Territory may nominate three enemy fighters at the start of the battle and places an Intoxicated marker on each fighter's card to show that their drink was spiked. The marked fighters suffer -1 to all tests and checks for the duration of the battle.");
			break;
		case "b35":
			$('#Text1').html("GAMBLING DEN (DELAQUE)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Reputation</strong>  Whilst it controls this Territory, the gang adds +1 to its Reputation.");
			$('#Text4').html("<strong>Income</strong> The player chooses a suit of cards. The player then draws a card from a shuffled deck of playing cards that includes both Jokers. If they draw a card from the suit they chose, they earn Income to the value of the card (Jack 11, Queen 12, King 13, Ace 14) x1 O credits. If they draw a card from a suit of the same colour, then the Income is the value of the card x5 credits. If it is any other suit, they gain no Income from the Territory. If, however, they draw a Joker, they must pay all of the Income they earn in that post-battle sequence to a random gang taking part in the campaign, as determined by the Arbitrator.");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("This Territory grants Delaque gangs the following Boons:");
			$('#Text7').html("<strong>Reputation:</strong> Whilst it controls this Territory, the gang adds +2 to its Reputation.");
			$('#Text8').html("<strong>Special:</strong> The Delaque player that controls this Territory may nominate a single enemy fighter at the start of the battle. The Delaque have called in the fighter's debt marker, and in return for keeping all of their limbs intact, the fighter agrees to take no part in the coming battle. The nominated fighter misses the battle.");
			break;
		case "b36":
			$('#Text1').html("NEEDLE WAYS (DELAQUE)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Special</strong> Whilst it controls this Territory, the gang may infiltrate up to three fighters onto the battlefield ahead of any battle. Infiltrating fighters must be part of the crew for a battle, but instead of being set up on the battlefield, they are placed to one side. At the end of the first round, the controlling player nominates any spot on the ground surface of the battlefield and sets up each infiltrating fighter within 2&quot; of that spot.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("This Territory grants Delaque gangs the following Boons:");
			$('#Text7').html("<strong>Special:</strong> A Delaque gang that controls this Territory may infiltrate two groups of up to three fighters using the method detailed above. The fighters in each group must be specified before the battle.");
			$('#Text8').html("");
			break;
		case "b37":
			$('#Text1').html("STINGER MOULD SPRAWL (ESCHER)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Special</strong> During the post-battle sequence, the gang controlling this Territory may re-roll a single Lasting Injury roll on a fighter. Note that a Memorable Death result may not be re-rolled.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("This Territory grants Esher gangs the following Boons:");
			$('#Text7').html("<strong>Reputation:</strong> Whilst it controls this Territory, the gang adds +1 to its Reputation.");
			$('#Text8').html("<strong>Special:</strong> An Escher gang may either (1) remove a single existing Lasting Injury from a fighter, or (2) re-roll a single Lasting Injury roll on a fighter, including a Memorable Death result.");
			break;
		case "b38":
			$('#Text1').html("MINE WORKINGS (ORLOCK)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Income</strong> The gang earns D6x10 credits from this Territory when collecting Income. The gang may set Captured fighters to work in the mines rather than selling them to the Guilders. For every Captive working the mine, roll an additional D6 to generate Income. If the Territory changes control, all of the Captives remain working the mine. A Captive sent to the mines may not subsequently be Sold to the Guild. While a Captive is working the mine, their gang may attempt a Rescue Mission at any time.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("This Territory grants Orlock gangs the following Boons:");
			$('#Text7').html("<strong>Reputation:</strong> Whilst it controls this Territory, the gang adds +2 to its Reputation.");
			$('#Text8').html("");
			break;
		case "b39":
			$('#Text1').html("TUNNELS (ORLOCK)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Special</strong> Whilst it controls this Territory, the gang may choose to have up to three fighters deploy via tunnels ahead of any battle. These fighters must be part of the crew for the battle, but instead of being set up on the battlefield, they are placed to one side. During the deployment phase, the player sets up two 2%quot; wide tunnel entrance markers on any table edge on the ground surface of the battlefield. During the Priority phase of each turn, roll a D6. On a 4+, the group of fighters arrive on the battlefield. That turn they may be activated as a single group, and must move onto the battlefield from one of the tunnel entrance markers. The members of the group must all arrive through the same tunnel entrance. If the battle ends before the fighters arrive; they take no part in the battle.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("This Territory grants Orlock gangs the following Boons:");
			$('#Text7').html("<strong>Reputation:</strong> Whilst it controls this Territory, the gang adds +1 to its Reputation.");
			$('#Text8').html("<strong>Special:</strong> An Orlock gang may choose to deploy up to six fighters via tunnels using the method detailed above. The fighters in each group must be specified before the battle.");
			break;
		case "b40":
			$('#Text1').html("TOLL CROSSING (ORLOCK)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Income</strong> The gang earns D6x5 credits from this Territory when collecting Income.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("This Territory grants Orlock gangs the following Boons:");
			$('#Text7').html("<strong>Special:</strong> Whilst it controls this Territory, an Orlock gang has Priority in the first round of any battle. Any gang in the campaign may pay the Orlock gang 20 credits to gain the same benefit in a single battle against another gang.");
			$('#Text8').html("");
			break;
		case "b41":
			$('#Text1').html("GENERATORIUM (VAN SAAR)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Special</strong> If their gang controls this Territory, a player may choose to stall the generators, temporarily cutting the power to the area in which a battle is taking place and plunging it into darkness. The player may declare they will do this at the beginning of any Priority phase. before the roll for Priority. For the remainder of the battle, the Pitch Black rules (see page 120) are in effect. However, at the start of each End phase, there is a chance that the generators will automatically restart and the light flood back. At the start of each End phase, before making any Bottle tests, the player that controls this Territory rolls a D6. If the result is a 5 or more, the generators restart and the Pitch Black rules immediately cease to be in effect. If the roll is a 1-4, the generators stay silent.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("This Territory grants Van Saar gangs the following Boons:");
			$('#Text7').html("<strong>Reputation:</strong> Whilst it controls this Territory, the gang adds +1 to its Reputation.");
			$('#Text8').html("");
			break;
		case "b42":
			$('#Text1').html("TECH BAZAAR (VAN SAAR)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Income</strong> The gang earns D6x10 credits from this Territory when collecting Income. Equipment: Select one Leader or Champion to make a Haggle post-battle action. Roll 2D6. The gang may immediately choose one item from the Rare Trade chart with a Rare value equal to the result of the dice roll and add it to their Stash for half of its usual value, rounded down. If the roll is lower than 7, pick a Common weapon or piece of equipment to add to the gang's Stash for half of its usual value, rounded down. If the roll is 3 or lower, then the fighter proves to be very poor at haggling and no equipment is gained. If the fighter selected has Exotic Furs, add+1 to the result of the 2D6 dice roll.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("This Territory grants Van Saar gangs the following Boons:");
			$('#Text7').html("<strong>Reputation:</strong> Whilst it controls this Territory, the gang adds +1 to its Reputation.");
			$('#Text8').html("<strong>Income:</strong> The gang earns D6x10 credits from this Territory when collecting Income. If the gang also controls an Archaeotech Device, this is increased to 2D6x10.");
			break;	
		case "b43":
			$('#Text1').html("ARCHAEOTECH DEVICE (VAN SAAR)");
			$('#Text2').html("TERRITORY BOONS");
			$('#Text3').html("<strong>Special</strong> Any number of weapons owned by the gang may be given one of the following Traits for free: Blaze, Rad-phage, Seismic, or Shock. All weapons must be given the same Trait and new weapons purchased later may also be given this Trait. These weapons also gain the Unstable Trait. If the Territory is lost, the weapons lose these additional Traits.");
			$('#Text4').html("");
			$('#Text5').html("ENHANCED BOONS");
			$('#Text6').html("This Territory grants Van Saar gangs the following Boons:");
			$('#Text7').html("<strong>Special:</strong> Whilst it controls this Territory, the gang adds +2 to its Reputation.");
			$('#Text8').html("<strong>Income:</strong> A Van Saar gang may give any number of weapons it owns two of the following Traits for free: Blaze, Rad-phage, Seismic, or Shock. All weapons must be given the same Trait and new weapons purchased later may also be given these Traits. These weapons also gain the Unstable trait. If the Territory is lost, the weapons lose these additional Traits.");
			break;
	}
}


//бинд кнопки $('имя класса (.name) или id (#name)').bind('click',function(){})
$('.polyX').bind('click',function(){
	fun($(this).attr('id'));	
});
$('.stLock').bind('click',function(){
	fun($(this).attr('id'));	
});


$(document).on('keydown', function(event) {
       if (event.key == "Escape"){$('.bg-modal').css('display','none');}
});
