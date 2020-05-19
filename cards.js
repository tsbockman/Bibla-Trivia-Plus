'use strict';

let cardsJSON = `[
	{
		"name": "torah",
		"title": "Torah",
		"deck": [
			{
				"question": "God said 'let there be light' on which of the first six days?",
				"questionTags": [ "day", "<=6" ],
				"answer": "The First Day",
				"answerTags": [ "time" ],
				"reference": "Genesis 1:3-5"
			},
			{
				"question": "God created the expanse of the heavens on which of the first six days?",
				"questionTags": [ "day", "<=6" ],
				"answer": "The Second Day",
				"answerTags": [ "time" ],
				"reference": "Genesis 1:6-8"
			},
			{
				"question": "God created vegetation on which of the first six days?",
				"questionTags": [ "day", "<=6" ],
				"answer": "The Third Day",
				"answerTags": [ "time" ],
				"reference": "Genesis 1:11-13"
			},
			{
				"question": "God created lights in the expanse of the heavens on which of the first six days?",
				"questionTags": [ "day", "<=6" ],
				"answer": "The Fourth Day",
				"answerTags": [ "time" ],
				"reference": "Genesis 1:14-19"
			},
			{
				"question": "God created living creatures in the waters and skies on which of the first six days?",
				"questionTags": [ "day", "<=6" ],
				"answer": "The Fifth Day",
				"answerTags": [ "time" ],
				"reference": "Genesis 1:20-23"
			},
			{
				"question": "God created Adam on which of the first six days?",
				"questionTags": [ "day", "<=6" ],
				"answer": "The Sixth Day",
				"answerTags": [ "time" ],
				"reference": "Genesis 1:26-31"
			},
			{
				"question": "God rested on which day of the first week?",
				"questionTags": [ "day" ],
				"answer": "The Seventh Day",
				"answerTags": [ "time" ],
				"reference": "Genesis 2:1-3"
			},
			{
				"question": "What rivers were in the garden of Eden?",
				"questionTags": [],
				"answer": "Pishon - Gihon - Tigris - Euphrates",
				"answerTags": [],
				"reference": "Genesis 2:10-14"
			},
			{
				"question": "In Genesis - what is the first thing that God says is 'not good'?",
				"questionTags": [],
				"answer": "that man should not be alone",
				"answerTags": [],
				"reference": "Genesis 2:18"
			},
			{
				"question": "What were the first four words of the serpent in Genesis?",
				"questionTags": [],
				"answer": "Did God actually say",
				"answerTags": [],
				"reference": "Genesis 3:1"
			},
			{
				"question": "What is the first mention of animal death in the Bible?",
				"questionTags": [],
				"answer": "The animal skins used to cover Adam and Eve",
				"answerTags": [],
				"reference": "Genesis 3:21"
			},
			{
				"question": "Why did God banish Adam and Eve from Eden after eating forbiden fruit?",
				"questionTags": [],
				"answer": "So they couldn't eat from the tree of life and live forever",
				"answerTags": [],
				"reference": "Genesis 3:22"
			},
			{
				"question": "Who was the first son of Adam and Eve?",
				"questionTags": [ "person", "male" ],
				"answer": "Cain",
				"answerTags": [],
				"reference": "Genesis 4:1"
			},
			{
				"question": "Who was the first man to practice polygomy in the Bible?",
				"questionTags": [],
				"answer": "Lamech",
				"answerTags": [],
				"reference": "Genesis 4:19"
			},
			{
				"question": "How many years did Adam live?",
				"questionTags": [],
				"answer": "930 years",
				"answerTags": [],
				"reference": "Genesis 5:5"
			},
			{
				"question": "The oldest man in the Bible lived 969 years. What was his name?",
				"questionTags": [],
				"answer": "Methuselah - the son of Enoch",
				"answerTags": [],
				"reference": "Genesis 5:27"
			},
			{
				"question": "What were the names of Noah's sons?",
				"questionTags": [],
				"answer": "Shem - Ham - Japheth",
				"answerTags": [],
				"reference": "Genesis 5:32"
			},
			{
				"question": "Naoh's ark was made from what type of wood?",
				"questionTags": [],
				"answer": "Gopher/Cypress",
				"answerTags": [],
				"reference": "Genesis 6:14"
			},
			{
				"question": "How long was Noah's ark?",
				"questionTags": [],
				"answer": "300 cubits/450 feet",
				"answerTags": [],
				"reference": "Genesis 6:15"
			},
			{
				"question": "How old was Noah when God flooded the earth?",
				"questionTags": [],
				"answer": "600 years",
				"answerTags": [],
				"reference": "Genesis 7:6"
			},
			{
				"question": "How long did the waters prevail during the great flood?",
				"questionTags": [],
				"answer": "150 days",
				"answerTags": [],
				"reference": "Genesis 7:24"
			},
			{
				"question": "What Mountains did the Noah's ark come to rest upon?",
				"questionTags": [],
				"answer": "The Mountains of Ararat",
				"answerTags": [],
				"reference": "Genesis 8:4"
			},
			{
				"question": "Noah's dove returned with a leaf from which tree after the flood?",
				"questionTags": [],
				"answer": "Olive Tree",
				"answerTags": [],
				"reference": "Genesis 8:11"
			},
			{
				"question": "Who did God make a covenant with to never strike down all living creatures again?",
				"questionTags": [ "person" ],
				"answer": "Noah",
				"answerTags": [ "male" ],
				"reference": "Genesis 8:21"
			},
			{
				"question": "When did God official allow people to eat animals?",
				"questionTags": [],
				"answer": "After the great flood",
				"answerTags": [],
				"reference": "Genesis 9:3"
			},
			{
				"question": "When God allowed people to eat animals he forbade them from eating it with what part?",
				"questionTags": [],
				"answer": "The blood",
				"answerTags": [],
				"reference": "Genesis 9:4"
			},
			{
				"question": "Who was the first man on earth to be a mighty man after the flood?",
				"questionTags": [],
				"answer": "Nimrod - king of Babel",
				"answerTags": [],
				"reference": "Genesis 10:8"
			},
			{
				"question": "Why did God confuse humans with multiple languages?",
				"questionTags": [],
				"answer": "They decided to make a tower with it's top in the heavens",
				"answerTags": [],
				"reference": "Genesis 11:1-9"
			},
			{
				"question": "Which son of Noah did Abraham descend from?",
				"questionTags": [],
				"answer": "Shem",
				"answerTags": [],
				"reference": "Genesis 11:10-26"
			},
			{
				"question": "How old was Abram when God told him to leave Haran?",
				"questionTags": [],
				"answer": "75 years",
				"answerTags": [],
				"reference": "Genesis 12:4"
			},
			{
				"question": "Beside his wife - who did Abram take with him when he left Haran?",
				"questionTags": [],
				"answer": "Lot - his brother's son",
				"answerTags": [],
				"reference": "Genesis 12:5"
			},
			{
				"question": "What was the name of the land that God gave to Abraham?",
				"questionTags": [],
				"answer": "Canaan",
				"answerTags": [],
				"reference": "Genesis 12:5"
			},
			{
				"question": "Who on earth gave Abraham his wealth?",
				"questionTags": [],
				"answer": "Pharaoh of Egypt",
				"answerTags": [],
				"reference": "Genesis 12:15-16"
			},
			{
				"question": "Why did Abraham and Lot separate and go different ways?",
				"questionTags": [],
				"answer": "The land could not support both of their peoples dwelling together",
				"answerTags": [],
				"reference": "Genesis 13:6"
			},
			{
				"question": "When Abram and Lot went separate ways where did Lot settle?",
				"questionTags": [],
				"answer": "Sodom",
				"answerTags": [],
				"reference": "Genesis 13:12"
			},
			{
				"question": "Who was the priest that blessed Abram after he rescued Lot?",
				"questionTags": [],
				"answer": "Melchizedek",
				"answerTags": [],
				"reference": "Genesis 14:17"
			},
			{
				"question": "What two things did Melchizedek bring out to Abram after he defeated Chedorlaomer?",
				"questionTags": [],
				"answer": "Bread and wine",
				"answerTags": [],
				"reference": "Genesis 14:18"
			},
			{
				"question": "What city was Melchizedek the king of?",
				"questionTags": [],
				"answer": "Salem",
				"answerTags": [],
				"reference": "Genesis 14:18"
			},
			{
				"question": "Who was the heir of Abram before God gave him a child?",
				"questionTags": [],
				"answer": "Eliezer of Damascus",
				"answerTags": [],
				"reference": "Genesis 15:2"
			},
			{
				"question": "Why did God consider Abram righteous?",
				"questionTags": [],
				"answer": "Abram believed God's promise",
				"answerTags": [],
				"reference": "Genesis 15:5-6"
			},
			{
				"question": "During the sacrifice that established the Abrahamic Covenant what passed between the animal pieces?",
				"questionTags": [],
				"answer": "A flaming torch",
				"answerTags": [],
				"reference": "Genesis 15:17"
			},
			{
				"question": "Sarai gave her servant to Abram as a wife. What was her name?",
				"questionTags": [],
				"answer": "Hagar - the Egyptian",
				"answerTags": [],
				"reference": "Genesis 16:3"
			},
			{
				"question": "What was the name of Abram's first son?",
				"questionTags": [],
				"answer": "Ishmael",
				"answerTags": [],
				"reference": "Genesis 16:15"
			},
			{
				"question": "How old was Abraham when he was circumcised?",
				"questionTags": [],
				"answer": "99 years",
				"answerTags": [],
				"reference": "Genesis 17:24"
			},
			{
				"question": "At first - how many righteous people did Abraham ask God to spare Sodom for?",
				"questionTags": [],
				"answer": "50",
				"answerTags": [],
				"reference": "Genesis 18:24"
			},
			{
				"question": "The two angels struck the perverted men of Sodom with what sickness?",
				"questionTags": [],
				"answer": "Blindness",
				"answerTags": [],
				"reference": "Genesis 19:11"
			},
			{
				"question": "Who's wife became a pillar of salt?",
				"questionTags": [],
				"answer": "Lot",
				"answerTags": [],
				"reference": "Genesis 19:26"
			},
			{
				"question": "Who is the second king that tried to take Sarai as their wife?",
				"questionTags": [],
				"answer": "Abimelech",
				"answerTags": [],
				"reference": "Genesis 20:2"
			},
			{
				"question": "What does the name Isaac mean?",
				"questionTags": [],
				"answer": "To laugh",
				"answerTags": [],
				"reference": "Genesis 21:6"
			},
			{
				"question": "God provided Abraham with what as a sacrificial substitute for Isaac?",
				"questionTags": [],
				"answer": "Ram",
				"answerTags": [],
				"reference": "Genesis 22:13"
			},
			{
				"question": "What three things were Promised to Abraham in his covenant with God?",
				"questionTags": [],
				"answer": "Innumerable descendants - the promise land - and blessings to all nations through his offspring",
				"answerTags": [],
				"reference": "Genesis 22:15-18"
			},
			{
				"question": "Which people group sold Abraham land to burry Sarah after she died?",
				"questionTags": [],
				"answer": "Hittites",
				"answerTags": [],
				"reference": "Genesis 23:1-18"
			},
			{
				"question": "What was the Name of Isaac's wife?",
				"questionTags": [],
				"answer": "Rebekah",
				"answerTags": [],
				"reference": "Genesis 24:51"
			},
			{
				"question": "What two characteristics were mentioned about Esau at his birth?",
				"questionTags": [],
				"answer": "Red and hairy",
				"answerTags": [],
				"reference": "Genesis 25:25"
			},
			{
				"question": "Esau sells his birth right to Isaac for what thing?",
				"questionTags": [],
				"answer": "Lentil stew",
				"answerTags": [],
				"reference": "Genesis 25:29-34"
			},
			{
				"question": "How was Jacob related his wife Rachel beyond marriage?",
				"questionTags": [],
				"answer": "They were cousins",
				"answerTags": [],
				"reference": "Genesis 28:2"
			},
			{
				"question": "How long did Jacob wait to for Rachel?",
				"questionTags": [],
				"answer": "7 years and 1 week",
				"answerTags": [],
				"reference": "Genesis 29:20-30"
			},
			{
				"question": "How long did Jacob actually serve Laben to gain Rachel as his wife?",
				"questionTags": [],
				"answer": "14 years",
				"answerTags": [],
				"reference": "Genesis 29:20-30"
			},
			{
				"question": "What are the names of Jacob's twelve sons?",
				"questionTags": [],
				"answer": "Reuben - Simeon - Levi - Judah - Issachar - Dan - Naphtali - Gad - Asher - Issachar - Zebulun - Joseph - Benjamin",
				"answerTags": [],
				"reference": "Genesis 29-30"
			},
			{
				"question": "What are the names of the four women that Jacob had children with?",
				"questionTags": [],
				"answer": "Leah - Bilhah - Zilpah - Rachel",
				"answerTags": [],
				"reference": "Genesis 29-30"
			},
			{
				"question": "After Jacob wrestles with God for his blessing - what is his name changed to?",
				"questionTags": [],
				"answer": "Israel",
				"answerTags": [],
				"reference": "Genesis 32:28"
			},
			{
				"question": "What was Joseph's supernatural ability from God?",
				"questionTags": [],
				"answer": "Interpreting dreams",
				"answerTags": [],
				"reference": "Genesis 37; 40; 41"
			},
			{
				"question": "Joseph became the ruler of what country?",
				"questionTags": [],
				"answer": "Egypt",
				"answerTags": [],
				"reference": "Genesis 41:39-42"
			},
			{
				"question": "When Pharaoh made Joseph the ruler over Egypt what did he place on his hand?",
				"questionTags": [],
				"answer": "His signet ring",
				"answerTags": [],
				"reference": "Genesis 41:42"
			},
			{
				"question": "What were the names of Joseph's two sons?",
				"questionTags": [],
				"answer": "Manasseh and Ephriam",
				"answerTags": [],
				"reference": "Genesis 41:51-52"
			},
			{
				"question": "What is the most well known gift Jacob gave to Joseph?",
				"questionTags": [],
				"answer": "A multi-colored robe",
				"answerTags": [],
				"reference": "Genesis 37:3"
			},
			{
				"question": "What warning did Joseph find in Pharaoh's dreams?",
				"questionTags": [],
				"answer": "Seven years of plenty followed by seven years of severe famine",
				"answerTags": [],
				"reference": "Genesis 41:29-30"
			}
		]
	},
	{
		"name": "history",
		"title": "History",
		"deck": [
			{
				"question": "history question sample 1",
				"questionTags": [],
				"answer": "answer sample 1",
				"answerTags": [],
				"reference": "reference sample 1"
			},
			{
				"question": "history question sample 2",
				"questionTags": [],
				"answer": "answer sample 2",
				"answerTags": [],
				"reference": "reference sample 2"
			},
			{
				"question": "history question sample 3",
				"questionTags": [],
				"answer": "answer sample 3",
				"answerTags": [],
				"reference": "reference sample 3"
			},
			{
				"question": "history question sample 4",
				"questionTags": [],
				"answer": "answer sample 4",
				"answerTags": [],
				"reference": "reference sample 4"
			}
		]
	},
	{
		"name": "wisdom",
		"title": "Wisdom",
		"deck": [
			{
				"question": "It is better to go to the house of _________ than to go to the house of feasting",
				"questionTags": [],
				"answer": "mourning",
				"answerTags": [],
				"reference": "Ecclesiastes 7:2"
			},
			{
				"question": "The ____ of the LORD is the beginning of knowledge.",
				"questionTags": [],
				"answer": "fear",
				"answerTags": [],
				"reference": "Proverbs 1:7"
			},
			{
				"question": "Be not ____ in your own eyes; fear the LORD and turn away from evil.",
				"questionTags": [],
				"answer": "wise",
				"answerTags": [],
				"reference": "Proverbs 3:7"
			},
			{
				"question": "wisdom question sample 1",
				"questionTags": [],
				"answer": "answer sample 1",
				"answerTags": [],
				"reference": "reference sample 1"
			}
		]
	},
	{
		"name": "prophets",
		"title": "Prophets",
		"deck": [
			{
				"question": "prophets question sample 1",
				"questionTags": [],
				"answer": "answer sample 1",
				"answerTags": [],
				"reference": "reference sample 1"
			},
			{
				"question": "prophets question sample 2",
				"questionTags": [],
				"answer": "answer sample 2",
				"answerTags": [],
				"reference": "reference sample 2"
			},
			{
				"question": "prophets question sample 3",
				"questionTags": [],
				"answer": "answer sample 3",
				"answerTags": [],
				"reference": "reference sample 3"
			},
			{
				"question": "prophets question sample 4",
				"questionTags": [],
				"answer": "answer sample 4",
				"answerTags": [],
				"reference": "reference sample 4"
			}
		]
	},
	{
		"name": "gospels",
		"title": "Gospels",
		"deck": [
			{
				"question": "gospels question sample 1",
				"questionTags": [],
				"answer": "answer sample 1",
				"answerTags": [],
				"reference": "reference sample 1"
			},
			{
				"question": "gospels question sample 2",
				"questionTags": [],
				"answer": "answer sample 2",
				"answerTags": [],
				"reference": "reference sample 2"
			},
			{
				"question": "gospels question sample 3",
				"questionTags": [],
				"answer": "answer sample 3",
				"answerTags": [],
				"reference": "reference sample 3"
			},
			{
				"question": "gospels question sample 4",
				"questionTags": [],
				"answer": "answer sample 4",
				"answerTags": [],
				"reference": "reference sample 4"
			}
		]
	},
	{
		"name": "acts",
		"title": "Acts",
		"deck": [
			{
				"question": "acts question sample 1",
				"questionTags": [],
				"answer": "answer sample 1",
				"answerTags": [],
				"reference": "reference sample 1"
			},
			{
				"question": "acts question sample 2",
				"questionTags": [],
				"answer": "answer sample 2",
				"answerTags": [],
				"reference": "reference sample 2"
			},
			{
				"question": "acts question sample 3",
				"questionTags": [],
				"answer": "answer sample 3",
				"answerTags": [],
				"reference": "reference sample 3"
			},
			{
				"question": "acts question sample 4",
				"questionTags": [],
				"answer": "answer sample 4",
				"answerTags": [],
				"reference": "reference sample 4"
			}
		]
	},
	{
		"name": "paul",
		"title": "Paul",
		"deck": [
			{
				"question": "paul question sample 1",
				"questionTags": [],
				"answer": "answer sample 1",
				"answerTags": [],
				"reference": "reference sample 1"
			},
			{
				"question": "paul question sample 2",
				"questionTags": [],
				"answer": "answer sample 2",
				"answerTags": [],
				"reference": "reference sample 2"
			},
			{
				"question": "paul question sample 3",
				"questionTags": [],
				"answer": "answer sample 3",
				"answerTags": [],
				"reference": "reference sample 3"
			},
			{
				"question": "paul question sample 4",
				"questionTags": [],
				"answer": "answer sample 4",
				"answerTags": [],
				"reference": "reference sample 4"
			}
		]
	},
	{
		"name": "epistles",
		"title": "Epistles of the New Testament",
		"deck": [
			{
				"question": "epistles question sample 1",
				"questionTags": [],
				"answer": "answer sample 1",
				"answerTags": [],
				"reference": "reference sample 1"
			},
			{
				"question": "epistles question sample 2",
				"questionTags": [],
				"answer": "answer sample 2",
				"answerTags": [],
				"reference": "reference sample 2"
			},
			{
				"question": "epistles question sample 3",
				"questionTags": [],
				"answer": "answer sample 3",
				"answerTags": [],
				"reference": "reference sample 3"
			},
			{
				"question": "epistles question sample 4",
				"questionTags": [],
				"answer": "answer sample 4",
				"answerTags": [],
				"reference": "reference sample 4"
			}
		]
	}
]`;
