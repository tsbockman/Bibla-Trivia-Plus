'use strict';

var cards_csv = `
torah,God said 'let there be light' on which of the first six days?,The First Day,Genesis 1:3-5
torah,God created the expanse of the heavens on which of the first six days?,The Second Day,Genesis 1:6-8
torah,God created vegetation on which of the first six days?,The Third Day,Genesis 1:11-13
torah,God created lights in the expanse of the heavens on which of the first six days?,The Fourth Day,Genesis 1:14-19
torah,God created living creatures in the waters and skies on which of the first six days?,The Fifth Day,Genesis 1:20-23
torah,God created Adam on which of the first six days?,The Sixth Day,Genesis 1:26-31
torah,God rested on which day of the first week?,The Seventh Day,Genesis 2:1-3
torah,What rivers were in the garden of Eden?,Pishon - Gihon - Tigris - Euphrates,Genesis 2:10-14
torah,In Genesis - what is the first thing that God says is 'not good'?,that man should not be alone,Genesis 2:18
torah,What were the first four words of the serpent in Genesis?,Did God actually say,Genesis 3:1
torah,What is the first mention of animal death in the Bible?,The animal skins used to cover Adam and Eve,Genesis 3:21
torah,Why did God banish Adam and Eve from Eden after eating forbiden fruit?,So they couldn't eat from the tree of life and live forever,Genesis 3:22
torah,Who was the first son of Adam and Eve?,Cain,Genesis 4:1
torah,Who was the first man to practice polygomy in the Bible?,Lamech,Genesis 4:19
torah,How many years did Adam live?,930 years,Genesis 5:5
torah,The oldest man in the Bible lived 969 years. What was his name?,Methuselah - the son of Enoch,Genesis 5:27
torah,What were the names of Noah's sons?,Shem - Ham - Japheth,Genesis 5:32
torah,Naoh's ark was made from what type of wood?,Gopher/Cypress,Genesis 6:14
torah,How long was Noah's ark?,300 cubits/450 feet,Genesis 6:15
torah,How old was Noah when God flooded the earth?,600 years,Genesis 7:6
torah,How long did the waters prevail during the great flood?,150 days,Genesis 7:24
torah,What Mountains did the Noah's ark come to rest upon?,The Mountains of Ararat,Genesis 8:4
torah,Noah's dove returned with a leaf from which tree after the flood?,Olive Tree,Genesis 8:11
torah,Who did God make a covenant with to never strike down all living creatures again?,Noah,Genesis 8:21
torah,When did God official allow people to eat animals?,After the great flood,Genesis 9:3
torah,When God allowed people to eat animals he forbade them from eating it with what part?,The blood,Genesis 9:4
torah,Who was the first man on earth to be a mighty man after the flood?,Nimrod - king of Babel,Genesis 10:8
torah,Why did God confuse humans with multiple languages?,They decided to make a tower with it's top in the heavens,Genesis 11:1-9
torah,Which son of Noah did Abraham descend from?,Shem,Genesis 11:10-26
torah,How old was Abram when God told him to leave Haran?,75 years,Genesis 12:4
torah,Beside his wife - who did Abram take with him when he left Haran?,Lot - his brother's son,Genesis 12:5
torah,What was the name of the land that God gave to Abraham?,Canaan,Genesis 12:5
torah,Who on earth gave Abraham his wealth?,Pharaoh of Egypt,Genesis 12:15-16
torah,Why did Abraham and Lot separate and go different ways?,The land could not support both of their peoples dwelling together,Genesis 13:6
torah,When Abram and Lot went separate ways where did Lot settle?,Sodom,Genesis 13:12
torah,Who was the priest that blessed Abram after he rescued Lot?,Melchizedek,Genesis 14:17
torah,What two things did Melchizedek bring out to Abram after he defeated Chedorlaomer?,Bread and wine,Genesis 14:18
torah,What city was Melchizedek the king of?,Salem,Genesis 14:18
torah,Who was the heir of Abram before God gave him a child?,Eliezer of Damascus,Genesis 15:2
torah,Why did God consider Abram righteous?,Abram believed God's promise,Genesis 15:5-6
torah,During the sacrifice that established the Abrahamic Covenant what passed between the animal pieces?,A flaming torch,Genesis 15:17
torah,Sarai gave her servant to Abram as a wife. What was her name?,Hagar - the Egyptian,Genesis 16:3
torah,What was the name of Abram's first son?,Ishmael,Genesis 16:15
torah,How old was Abraham when he was circumcised?,99 years,Genesis 17:24
torah,At first - how many righteous people did Abraham ask God to spare Sodom for?,50,Genesis 18:24
torah,The two angels struck the perverted men of Sodom with what sickness?,Blindness,Genesis 19:11
torah,Who's wife became a pillar of salt?,Lot,Genesis 19:26
torah,Who is the second king that tried to take Sarai as their wife?,Abimelech,Genesis 20:2
torah,What does the name Isaac mean?,To laugh,Genesis 21:6
torah,God provided Abraham with what as a sacrificial substitute for Isaac?,Ram,Genesis 22:13
torah,What three things were Promised to Abraham in his covenant with God?,Innumerable descendants - the promise land - and blessings to all nations through his offspring,Genesis 22:15-18
torah,Which people group sold Abraham land to burry Sarah after she died?,Hittites,Genesis 23:1-18
torah,What was the Name of Isaac's wife?,Rebekah,Genesis 24:51
torah,What two characteristics were mentioned about Esau at his birth?,Red and hairy,Genesis 25:25
torah,Esau sells his birth right to Isaac for what thing?,Lentil stew,Genesis 25:29-34
torah,How was Jacob related his wife Rachel beyond marriage?,They were cousins,Genesis 28:2
torah,How long did Jacob wait to for Rachel?,7 years and 1 week,Genesis 29:20-30
torah,How long did Jacob actually serve Laben to gain Rachel as his wife?,14 years,Genesis 29:20-30
torah,What are the names of Jacob's twelve sons?,Reuben - Simeon - Levi - Judah - Issachar - Dan - Naphtali - Gad - Asher - Issachar - Zebulun - Joseph - Benjamin,Genesis 29-30
torah,What are the names of the four women that Jacob had children with?,Leah - Bilhah - Zilpah - Rachel,Genesis 29-30
torah,After Jacob wrestles with God for his blessing - what is his name changed to?,Israel,Genesis 32:28
torah,What was Joseph's supernatural ability from God?,Interpreting dreams,Genesis 37; 40; 41
torah,Joseph became the ruler of what country?,Egypt,Genesis 41:39-42
torah,When Pharaoh made Joseph the ruler over Egypt what did he place on his hand?,His signet ring,Genesis 41:42
torah,What were the names of Joseph's two sons?,Manasseh and Ephriam,Genesis 41:51-52
torah,What is the most well known gift Jacob gave to Joseph?,A multi-colored robe,Genesis 37:3
torah,What warning did Joseph find in Pharaoh's dreams?,Seven years of plenty followed by seven years of severe famine,Genesis 41:29-30
history,history question sample 1,answer sample 1,reference sample 1
history,history question sample 2,answer sample 2,reference sample 2
wisdom,It is better to go to the house of _________ than to go to the house of feasting,mourning ,Ecclesiastes 7:2
wisdom,The ____ of the LORD is the beginning of knowledge.,fear,Proverbs 1:7
wisdom,Be not ____ in your own eyes; fear the LORD and turn away from evil.,wise,Proverbs 3:7
history,history question sample 1,answer sample 1,reference sample 1
history,history question sample 2,answer sample 2,reference sample 2
prophets,prophets question sample 1,answer sample 1,reference sample 1
prophets,prophets question sample 2,answer sample 2,reference sample 2
gospels,gospels question sample 1,answer sample 1,reference sample 1
gospels,gospels question sample 2,answer sample 2,reference sample 2
acts,acts question sample 1,answer sample 1,reference sample 1
acts,acts question sample 2,answer sample 2,reference sample 2
paul,paul question sample 1,answer sample 1,reference sample 1
paul,paul question sample 2,answer sample 2,reference sample 2
epistles,epistles question sample 1,answer sample 1,reference sample 1
epistles,epistles question sample 2,answer sample 2,reference sample 2
`;