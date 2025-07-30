// Embedded CSV data
const facilitiesCSV = `Year,Facility Name,Organization,Capacity,Areafacility,Latitude,Longitude,Crop,Category,Cultivation,Tracking,Copyright,Picture,Logo
2024,Agri-PV Deutenkofen,Agrarbildungszentrum (Bezirk Niederbayern) Landshut-Schönbrunn,99.55,,48.554186,12.26979,,,,,Agrarbildungszentrum Landshut-Schönbrunn,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/ZEMmcdY8e6j8mxc?file=/&fileId=21637075&x=1920&y=1200&a=true&etag=f68bea75051ede9c76a378094a351208,https://nc.ise.fraunhofer.de/apps/photos/api/v1/preview/21114348?etag=6288b51f99647b6a9bb387327fad3f57&x=512&y=512
2023,HoPVen,AgrarEnergie GmbH & Co. KG,950.0,1.3,48.55406,11.67387,Hop,Overhead,Arable Farming,No,,,
2024,"SP AEN A1 + A2",AgrarEnergie GmbH & Co. KG,2499.0,1.3,48.554906,11.67433,,Overhead,,,,,
2024,Vino-PV Freiburg-Munzingen,badenovaWÄRMEPLUS GmbH & Co. KG,300.96,,47.972635,7.695385,,Overhead,Viticulture,,,,
2024,PV Lawitz,BEC - Energie Consult GmbH,13700.0,,52.114287,14.641998,,,,,,,
2021,APV-Obstbau am Bio-Obsthof Nachtwey (RLP),Bio Obsthof Nachtwey,258.3,0.36,50.58993,7.03273,Apple,Overhead,Horticulture,Yes,Bio Obsthof Nachtwey,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/BNiGySX9nZdFK3K?file=/&fileId=21637136&x=1920&y=1200&a=true&etag=b175f9e45c13a40f11b0e1f9afd0beb3,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/W43LoMbZY79sFyo?file=/&fileId=21637135&x=1920&y=1200&a=true&etag=55f83a84a0d0bc269809be0a062a9d64
2024,Agri-PV Anlage Fendt,Bürgerenergie Fendt eG (iG),5992.0,7.5,47.831852,11.057057,,Overhead,,,,,
2024,Agri-PV Anlage Ohlstadt,Bürgerenergie Ohlstadt eG (iG),2650.0,1.3,47.643621,11.220384,,Overhead,,,,,
2024,Agri-PV Anlage Roßlaich,Bürgerenergie Roßlaich eG (iG),4364.0,,47.803924,11.108859,,Overhead,,,,,
2024,Agri-PV Anlage Schongau,Bürgerenergie Schongau eG (iG),5992.0,7.5,47.802654,10.867834,,Overhead,,,,,
2024,"Agri PV Dettenberg","BürgerEnergiegenossenschaft Riss eG",1038.4,,48.145768,9.643787,,,,,,,
2020,,DoppelErnte GmbH,1890.0,4.7,48.23908,11.05246,"Corn, Oat, Spelt, Clover Grass",Interspace,"Arable Farming",Yes,DoppelErnte GmbH,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/KQA3PffjKqARkk4?file=/&fileId=21637082&x=1920&y=1200&a=true&etag=daa73608ce0ddf8512583f8a2a871a46,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/x2J2xRebGckBWAr?file=/&fileId=21637095&x=1920&y=1200&a=true&etag=2671666ac70ba5a92539f3f3ec36dad1
2024,,Dr. Kathrin Müller (Hof Fleming),,,52.70219,7.69494,,"Interspace",,No,,,
2023,"Agri PV HTW Dresden, Pillnitz",Dresden University of Applied Sciences - Hochschule für Technik und Wirtschaft Dresden,134.4,0.45,51.002968,13.891646,,Interspace,,,,,
2024,"Eckl_LTEC-AGRI-PV",Eckl Solarpark GmbH & Co. KG - Eckl Solarpark GmbH & Co. KG,1500.0,2.0,48.696859,12.878109,,Overhead,Arable Farming,,,,
2023,Forst-PV-Anlage,Emil Steidle GmbH &Co. KG,145.0,0.144,47.95667,9.17295,Fir,Overhead,Forstwirtschaft,No,,,
2024,Oberhamberg BA II,"FinRo EP 17 GmbH & Co. KG Harald Eder",1612.26,,48.25478,12.40413,,,,,,,
2022,Agri-PV-Anlage FZJ,Forschungszentrum Jülich,200.0,0.2,50.86334,6.53181,"Field Bean, Arnica, Dandelion",Overhead,Horticulture,No,Forschungszentrum Jülich,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/os9HJjzpzCoWomP?file=/&fileId=21637160&x=1920&y=1200&a=true&etag=89ec7d3920cf1a23da460f4c3ee31c32,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/iRAaakEqtf3e6SY?file=/&fileId=21637161&x=1920&y=1200&a=true&etag=2be0732dda01dcc110cd346fb59b02e4
2016,Agri-PV Anlage Heggelbach,"Fraunhofer ISE, Farm community APV RESOLA Heggelbach, BayWa r.e., EWS Schönau",194.4,0.25,47.8537,9.1366,"Potato, Wheat, Celery, Clover, Sweet Corn, Field Bean, Triticale, Beetroot",Overhead,Arable Farming,No,Farm community APV RESOLA Heggelbach,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/PNs9nmE3sMNTtWp?file=/&fileId=21637141&x=1920&y=1200&a=true&etag=ad96d93c4411562d33cc928776460e76,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/w3NyK5xQcn7B3f4?file=/&fileId=21637149&x=1920&y=1200&a=true&etag=c3129295e2ac043e089ed87926e163a6
2023,Agri-PV-Anlage KOB Bavendorf,"Fraunhofer ISE, Kompetenzzentrum Obstbau Bodensee, Technische Werke Schussental GmbH",227.0,0.38,47.767553,9.555375,Apple,Overhead,Horticulture,Yes,,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/EZKteW8Wqi8ZJbr?file=/&fileId=21637112&x=1920&y=1200&a=true&etag=97dbca8894f386a0ac5f02a79e3776e3,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/ZnMkffcYRGDzRQK?file=/&fileId=21637126&x=1920&y=1200&a=true&etag=6c391e621d9e3e638f96e9e08f403036
2023,Krinner Agri-PV Hyperfarm,"Fraunhofer ISE, Krinner Carport GmbH, HOFF, HSWT + 9",302.4,0.6,48.82568,12.74059,"Potatoes, Wheat, Barley, Cabbage",Overhead,Arable Farming,Yes,,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/P5WDS8f8YNQmSoR?file=/&fileId=21637163&x=1920&y=1200&a=true&etag=273b9a6f619b3ccf98bdf999048bc1dd,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/PBCNTTczWeNK6xc?file=/&fileId=21637173&x=1920&y=1200&a=true&etag=66377a58e9a2f8b47669537d66fd42fd
2023,Agri-PV-Anlage LTZ Augustenberg,"Fraunhofer ISE, LTZ Augustenberg",330.0,1.0,49.00368,8.49217,"Apple, Pear",Overhead,,Yes,LTZ Augustenberg,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/eCFQiKx99F2jRGo?file=/&fileId=21637053&x=1920&y=1200&a=true&etag=4cf198d2a6e2923fc2afe418d255d7fd,
2022,,"Fraunhofer ISE, Obsthof Bernhard, Kompetenzzentrum Obstbau Bodensee, Regionalwerk Bodensee",240.0,0.4,47.60136,9.60401,"Apple",Overhead,Horticulture,No,,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/PFcJJBsLH7SMZT8?file=/&fileId=21637107&x=1920&y=1200&a=true&etag=694793a98dc544488f13940b2d55e944,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/ZnMkffcYRGDzRQK?file=/&fileId=21637126&x=1920&y=1200&a=true&etag=6c391e621d9e3e638f96e9e08f403036
2023,,"Fraunhofer ISE, Obsthof Vollmer, LTZ Augustenberg, Intech GmbH",,,48.53837,8.01699,"Plum, Apple, Pear, Kiwi",Overhead,Horticulture,,,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/JH7bxJZqyfaSQri?file=/&fileId=21637056&x=1920&y=1200&a=true&etag=72d8c94fb5678e69ee4dc15e407f2f1f,
2023,,"Gebr. Schwarz GmbH",356.82,,48.199189,8.708322,,,,,,,
2023,PV Schulgarten/Hort,Gemeindeverwaltung Mittelherwigsdorf,3.7,,50.9165594358633,14.7585895607217,,Interspace,Horticulture,,,,
2022,,Heide Energie Projekt GmbH & Co. KG,540.0,5.0,51.45827,11.17467,,Interspace,"Arable Farming, Grassland",No,,,
2024,Agri PV Kruse Energie gr.,Henning Kruse Energie,6600.0,,53.154666,8.55961,,Interspace,,,,,
2024,Agri PV Kruse Energie kl.,"Henning Kruse Energie",3300.0,18.0,53.153878,8.562727,,Interspace,,,,,
2020,"Our Common Future | Agri - Photovoltaik
PiKE - Pflanzenbau im Zuge von Klimawandel und Energiewende","Hochschule für Technik, Wirtschaft und Kultur Leipzig ",0.4,0.23,51.31308,12.37276,"Garlic, Onion, Radish, Pea, Bush Bean",Overhead,Horticulture,No,,,
2020,"Our Common Future | Agri - Photovoltaik
PiKE - Pflanzenbau im Zuge von Klimawandel und Energiewende","Hochschule für Technik, Wirtschaft und Kultur Leipzig ",0.4,0.0008,51.31308,12.37276,"Garlic, Onion, Radish, Pea, Bush Bean",Interspace,Horticulture,No,,,
2023,VitiVoltaic HGU,Hochschule Geisenheim University,94.0,0.14,49.98673,7.9475,Riesling,Overhead,Viticulture,Yes,,,
2024,Agri-PV Blankenhornsberg,"Intech GmbH & Co. KG",268.0,0.14,48.0506777401027,7.6225842015514,,Overhead,Viticulture,,Intech GmbH & Co. KG,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/ZwtbEj8fAXWoR9p?file=/&fileId=21637080&x=1920&y=1200&a=true&etag=8d1bc3ee0e3c1c6cb6d4a13252f27c1b,
2020,Himbeere 8/I,"Josef Kneers (farmer), Burkhard Hesse (PV) - natürliche Person (ABR965597105654)",749.76,,51.585138,8.536989,"Blueberry, Raspberry, Strawberry, Apple, Grape",Overhead,,,,,
2020,Himbeere 10/I,"Josef Kneers (farmer), Burkhard Hesse (PV) - natürliche Person (ABR967417443496)",749.76,,51.58674,8.543319,"Blueberry, Raspberry, Strawberry, Apple, Grape",Overhead,Horticulture,,,,
2024,,"KMM, Kommunal Management Martin",14780.0,225.0,50.00443,10.78134,,Overhead,"Arable Farming, Horticulture",Yes,,,
2022,APV Beerenobst,LVWO Weinsberg,115.0,0.17,49.25221,9.22738,"Strawberry, Blackberry, Raspberry, Red Currant, Blueberry",Overhead,"Viticulture, Horticulture",No,LVWO Weinsberg,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/jGoLSgmnKKG2DYH?file=/&fileId=21637055&x=1920&y=1200&a=true&etag=baca33e550a6446c876040fa8b6391c6,
2022,APV Beerenobst,LVWO Weinsberg,225.0,0.23,49.25138,9.22685,Sweet Cherry,Overhead,"Viticulture, Horticulture",No,LVWO Weinsberg,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/jGoLSgmnKKG2DYH?file=/&fileId=21637055&x=1920&y=1200&a=true&etag=baca33e550a6446c876040fa8b6391c6,
2024,AGRI PV Solarpark Asbach,"natürliche Person (ABR904986384188)",298.8,,48.612965,12.860515,,,,,,,
2024,Agri-PV Johanniskirchen,natürliche Person (ABR909977513639),19000.0,,48.531602,12.898011,,Overhead,,,,,
2024,Agri-PV Rothenhahn,natürliche Person (ABR926081040691),776.16,,53.566374,8.294558,,,,,,,
2024,Agri PV Beyern,natürliche Person (ABR927888864916),566.0,,51.621457,13.206103,,,,,,,
2023,Zu den Gärten 4,natürliche Person (ABR951936056886),14.5,,53.095705,11.11778,,,,,,,
2023,2023 APV,"natürliche Person (ABR962397576691)",958.53,,51.862671,7.506169,,,,,,,
,Schwarzer Agri-PV GbR,natürliche Person (ABR968974678444),999.0,3.4,48.60821,12.80339,,Interspace,,,,,
2024,PV-Vogelherd,natürliche Person (ABR976444177694),4767.0,,48.955658,8.729013,,Overhead,,,,,
2024,Agri PV Stücker Weg,"natürliche Person (ABR978171978544)",13.35,,54.134031,9.610882,,,,,,,
2018,,Next2Sun,2400.0,7.1,49.413972,6.999131,,Interspace,"Grassland",No,,,
2022,,"Next2Sun",4654.0,10.0,49.45311,6.53399,,Interspace,"Arable Farming",No,Next2Sun,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/knFxXnSAtzkRpBy?file=/&fileId=21637052&x=1920&y=1200&a=true&etag=87dee4416236e836327f90dab6b2319a,
2024,,Next2Sun,31000.0,75.0,47.889,8.371,,Interspace,"Arable Farming, Grassland",No,,,
2024,Agri-Photovoltaik Epfendorf BA Inno,Next2Sun - Next2Sun Agri-PV Epfendorf GmbH & Co. KG,1499.3,,48.246829,8.613863,,Interspace,Grassland,,,,
2025,AgriPV1,"Next2Sun, Jörg Hussong - OEKOGENO Erste AgriPV GmbH & Co. KG",999.0,25.5,49.411793,7.21135,,Interspace,"Grassland, Arable Farming",,,,
2025,AgriPV2,"Next2Sun, Jörg Hussong - OEKOGENO Erste AgriPV GmbH & Co. KG",3700.0,24.5,49.4300556596351,7.11702206457082,,Interspace,"Arable Farming, Grassland",,,,
2024,,Nitsche Dietmar AgriPV,600.0,5.0,48.45037,12.06326,"Corn, Wheat, Barley, Triticale, Ryegrass, Rapeseed",Interspace,Arable Farming,No,,,
2024,PV-Park EDT Alpha,"Obermayer Energie GbR",800.0,4.0,48.09369,12.64746,"Wheat, Spelt, Emmer, Clover Grass, Brewing Barley, Rye, Flower Meadow, Oats",Interspace,Arable Farming,No,,,
2024,Agri PV 1,PSE-Solar eGbR,118.8,,48.147838,9.60761,,,,,,,
2024,Solarpark Steingaden,Raiffeisenbank Steingaden,8198.19,,47.739313,10.84048,,Overhead,,,,,
2024,Rossmann EcoPower AGRI PV BG1 Finkental Aufzucht (Dorfstr.),Rossmann EcoPower Agri-PV BG 1 GmbH,5357.0,,53.941167352622,12.7539023019083,,,,,,,
2024,Rossmann EcoPower AGRI PV BG4 Bresewitz 1,Rossmann EcoPower Agri-PV BG 4 GmbH,5357.0,3.7,53.677624,13.528637,,Overhead,,,,,
2023,Agri PV Bedburg,RWE Wind Onshore & PV Deutschland GmbH,3225.0,,51.037807,6.48904,,"Overhead, Interspace",,,,,
2024,Solarpark Imming,Solarpark Imming GmbH & Co.KG,6191.64,,48.352,12.365979,,,,,,,
2023,Todtenberg,Solarpark Todtenberg GmbH  Co. KG,4103.2,2.8,47.829165,10.338093,,Interspace,,,,,
2024,Wetzisreute APV BA1,solmotion project GmbH,1498.0,3.5,47.78277,9.70468,,Overhead,Arable Farming,Yes,,,
2021,,"Solverde Energiegenossenschaft, Next2Sun",4146.0,14.0,47.99473,8.5317,,Interspace,"Grassland, Arable Farming",No,,,
2024,Agri-PV Grub,"StMELF, StMB, StMWi, Next2Sun? - Bayerische Staatsgüter",941.87,,48.175914,11.775341,,"Overhead, Interspace",,,,,
2024,"Vattenfall Solar Tützpatz 1,2",Vattenfall GmbH,79310.0,25.0,53.713639334944,13.126843754344,,Interspace,Arable Farming,,,,
2024,"Vattenfall Solar Tützpatz 1,2",Vattenfall GmbH - Vattenfall Solar Tützpatz GmbH,,47.0,53.7178228099962,13.1218359608434,Organic free range eggs / farming,Interspace,,,,,
2024,wpd Solarpark Veringenstadt,wpd Solarpark Veringenstadt GmbH & Co. KG,8487.06,,48.169447,9.246771,,Overhead,,,wpd Solarpark Veringenstadt GmbH & Co. KG,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/aFJ554pj6QLT6Hk?file=/&fileId=21637057&x=1920&y=1200&a=true&etag=dedba9fb0e7b0a522bde70b0ed753c92,https://nc.ise.fraunhofer.de/apps/files_sharing/publicpreview/eiLXsH4638JLSnn?file=/&fileId=21637058&x=1920&y=1200&a=true&etag=d7932721168e4c8630126f938326f7d6
2024,,Ökostrom Saar GmbH,,,49.56147,6.84258,,,,,,,
2024,,,66.24,2.3,51.82348,11.7029,,,,No,,,
,,,134.0,0.4,51.03621,13.73559,,,,No,,,
,,,293.8,1.17,48.17259,11.7767,,,,Yes,,,
,,,1800.0,0.0,51.259056,14.957361,,,,No,,,
,,,12750.0,11.0,49.02994,10.84168,,,,No,,,
,,,6000.0,23.0,50.877,8.8338,,,,Yes,,,
,,,108.0,0.1,48.55633,12.27207,,,,No,,,`;

const translationsCSV = `id,original_text,language_code,translated_text,category
1,Arable Farming,en,Arable Farming,cultivation_type
2,Arable Farming,de,Ackerbau,cultivation_type
3,Horticulture,en,Horticulture,cultivation_type
4,Horticulture,de,Gartenbau,cultivation_type
5,Viticulture,en,Viticulture,cultivation_type
6,Viticulture,de,Weinbau,cultivation_type
7,Grassland,en,Grassland,cultivation_type
8,Grassland,de,Grünland,cultivation_type
9,Forstwirtschaft,en,Forestry,cultivation_type
10,Forstwirtschaft,de,Forstwirtschaft,cultivation_type
11,Other,en,Other,cultivation_type
12,Other,de,Sonstige,cultivation_type
13,Overhead,en,Overhead,system_type
14,Overhead,de,Überdachung,system_type
15,Interspace,en,Interspace,system_type
16,Interspace,de,Zwischenraum,system_type
17,Apple,en,Apple,crop
18,Apple,de,Apfel,crop
19,Wheat,en,Wheat,crop
20,Wheat,de,Weizen,crop
21,Corn,en,Corn,crop
22,Corn,de,Mais,crop
23,Potato,en,Potato,crop
24,Potato,de,Kartoffel,crop
25,Barley,en,Barley,crop
26,Barley,de,Gerste,crop
27,Rye,en,Rye,crop
28,Rye,de,Roggen,crop
29,Oat,en,Oat,crop
30,Oat,de,Hafer,crop
31,Hop,en,Hop,crop
32,Hop,de,Hopfen,crop
33,Riesling,en,Riesling,crop
34,Riesling,de,Riesling,crop
35,Not specified,en,Not specified,general
36,Not specified,de,Nicht angegeben,general
37,Yes,en,Yes,general
38,Yes,de,Ja,general
39,No,en,No,general
40,No,de,Nein,general
41,Unknown,en,Unknown,general
42,Unknown,de,Unbekannt,general
43,Pear,en,Pear,crop
44,Pear,de,Birne,crop
45,Plum,en,Plum,crop
46,Plum,de,Pflaume,crop
47,Kiwi,en,Kiwi,crop
48,Kiwi,de,Kiwi,crop
49,Sweet Cherry,en,Sweet Cherry,crop
50,Sweet Cherry,de,Süßkirsche,crop
51,Grape,en,Grape,crop
52,Grape,de,Traube,crop
53,Strawberry,en,Strawberry,crop
54,Strawberry,de,Erdbeere,crop
55,Blueberry,en,Blueberry,crop
56,Blueberry,de,Blaubeere,crop
57,Raspberry,en,Raspberry,crop
58,Raspberry,de,Himbeere,crop
59,Blackberry,en,Blackberry,crop
60,Blackberry,de,Brombeere,crop
61,Red Currant,en,Red Currant,crop
62,Red Currant,de,Rote Johannisbeere,crop
63,Celery,en,Celery,crop
64,Celery,de,Sellerie,crop
65,Sweet Corn,en,Sweet Corn,crop
66,Sweet Corn,de,Zuckermais,crop
67,Field Bean,en,Field Bean,crop
68,Field Bean,de,Ackerbohne,crop
69,Bush Bean,en,Bush Bean,crop
70,Bush Bean,de,Buschbohne,crop
71,Pea,en,Pea,crop
72,Pea,de,Erbse,crop
73,Cabbage,en,Cabbage,crop
74,Cabbage,de,Kohl,crop
75,Beetroot,en,Beetroot,crop
76,Beetroot,de,Rote Bete,crop
77,Radish,en,Radish,crop
78,Radish,de,Radieschen,crop
79,Onion,en,Onion,crop
80,Onion,de,Zwiebel,crop
81,Garlic,en,Garlic,crop
82,Garlic,de,Knoblauch,crop
83,Spelt,en,Spelt,crop
84,Spelt,de,Dinkel,crop
85,Triticale,en,Triticale,crop
86,Triticale,de,Triticale,crop
87,Emmer,en,Emmer,crop
88,Emmer,de,Emmer,crop
89,Brewing Barley,en,Brewing Barley,crop
90,Brewing Barley,de,Braugerste,crop
91,Rapeseed,en,Rapeseed,crop
92,Rapeseed,de,Raps,crop
93,Clover,en,Clover,crop
94,Clover,de,Klee,crop
95,Clover Grass,en,Clover Grass,crop
96,Clover Grass,de,Kleegras,crop
97,Ryegrass,en,Ryegrass,crop
98,Ryegrass,de,Weidelgras,crop
99,Flower Meadow,en,Flower Meadow,crop
100,Flower Meadow,de,Blühwiese,crop
101,Fir,en,Fir,crop
102,Fir,de,Tanne,crop
103,Arnica,en,Arnica,crop
104,Arnica,de,Arnika,crop
105,Dandelion,en,Dandelion,crop
106,Dandelion,de,Löwenzahn,crop
107,Organic free range eggs / farming,en,Organic free range eggs / farming,crop
108,Organic free range eggs / farming,de,Bio-Freilandhaltung / Landwirtschaft,crop
109,Permanent grassland with mowing,en,Permanent grassland with mowing,cultivation_type
110,Permanent grassland with mowing,de,Dauergrünland mit Mahd,cultivation_type
111,Permanent grassland with livestock,en,Permanent grassland with livestock,cultivation_type
112,Permanent grassland with livestock,de,Dauergrünland mit Beweidung,cultivation_type
113,Unknown Organization,en,Unknown Organization,organization
114,Unknown Organization,de,Unbekannte Organisation,organization
115,Unknown Facility,en,Unknown Facility,facility
116,Unknown Facility,de,Unbekannte Anlage,facility
117,Potatoes,en,Potatoes,crop
118,Potatoes,de,Kartoffeln,crop
119,"Corn, Oat, Spelt, Clover Grass",en,"Corn, Oat, Spelt, Clover Grass",crop
120,"Field Bean, Arnica, Dandelion",en,"Field Bean, Arnica, Dandelion",crop
121,"Potato, Wheat, Celery, Clover, Sweet Corn, Field Bean, Triticale, Beetroot",en,"Potato, Wheat, Celery, Clover, Sweet Corn, Field Bean, Triticale, Beetroot",crop
122,"Potatoes, Wheat, Barley, Cabbage",en,"Potatoes, Wheat, Barley, Cabbage",crop
123,"Apple, Pear",en,"Apple, Pear",crop
124,"Plum, Apple, Pear, Kiwi",en,"Plum, Apple, Pear, Kiwi",crop
125,"Garlic, Onion, Radish, Pea, Bush Bean",en,"Garlic, Onion, Radish, Pea, Bush Bean",crop
126,"Blueberry, Raspberry, Strawberry, Apple, Grape",en,"Blueberry, Raspberry, Strawberry, Apple, Grape",crop
127,"Strawberry, Blackberry, Raspberry, Red Currant, Blueberry",en,"Strawberry, Blackberry, Raspberry, Red Currant, Blueberry",crop
128,"Corn, Wheat, Barley, Triticale, Ryegrass, Rapeseed",en,"Corn, Wheat, Barley, Triticale, Ryegrass, Rapeseed",crop
129,"Wheat, Spelt, Emmer, Clover Grass, Brewing Barley, Rye, Flower Meadow, Oats",en,"Wheat, Spelt, Emmer, Clover Grass, Brewing Barley, Rye, Flower Meadow, Oats",crop
130,"Overhead, Interspace",en,"Overhead, Interspace",system_type
131,"Arable Farming, Grassland",en,"Arable Farming, Grassland",cultivation_type
132,"Arable Farming, Horticulture",en,"Arable Farming, Horticulture",cultivation_type
133,"Viticulture, Horticulture",en,"Viticulture, Horticulture",cultivation_type
134,"Grassland, Arable Farming",en,"Grassland, Arable Farming",cultivation_type`;

// Parse CSV helper function
function parseCSV(csv) {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',');
    const result = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = [];
        let current = '';
        let inQuotes = false;
        
        for (let j = 0; j < lines[i].length; j++) {
            const char = lines[i][j];
            
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.trim());
        
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index] || '';
        });
        result.push(row);
    }
    
    return result;
}

// Convert CSV data to required format
function processFacilitiesData(csvData) {
    return csvData.map(row => ({
        name: row['Facility Name'],
        organization: row['Organization'],
        year_established: parseInt(row['Year']) || null,
        capacity: parseFloat(row['Capacity']) || 0,
        area: parseFloat(row['Areafacility']) || 0,
        latitude: parseFloat(row['Latitude']) || 0,
        longitude: parseFloat(row['Longitude']) || 0,
        crops: row['Crop'] ? row['Crop'].split(',').map(c => c.trim()) : [],
        system_types: row['Category'] ? row['Category'].split(',').map(c => c.trim()) : [],
        cultivation_types: row['Cultivation'] ? row['Cultivation'].split(',').map(c => c.trim()) : [],
        has_tracking: row['Tracking'] === 'Yes',
        copyright: row['Copyright'] || '',
        picture: row['Picture'] || '',
        logo: row['Logo'] || ''
    }));
}

// Process translations data
function processTranslationsData(csvData) {
    const translations = {
        cultivation_type: {},
        system_type: {},
        crop: {},
        organization: {}
    };
    
    csvData.forEach(row => {
        if (row.language_code === 'de' && row.category) {
            if (!translations[row.category]) {
                translations[row.category] = {};
            }
            translations[row.category][row.original_text] = row.translated_text;
        }
    });
    
    return translations;
}

// Parse the CSV data
const facilitiesRawData = parseCSV(facilitiesCSV);
const translationsRawData = parseCSV(translationsCSV);

// Process into required format
let facilitiesData = processFacilitiesData(facilitiesRawData);
let dataTranslations = {};

// Global variables
let currentLanguage = 'en';
let map;
let markers = [];
let cultivationChart = null;
let systemChart = null;
let capacityTimeChart = null;

// Static UI translations
const staticUITranslations = {
    en: {
        filter: "Filter",
        graphs: "Graphs",
        capacity: "Capacity",
        area: "Area",
        yearEstablished: "Year Established",
        systemType: "System Type", 
        tracking: "Tracking",
        cultivationType: "Cultivation Type",
        crops: "Crops",
        currentSelection: "Current Selection",
        facilities: "Facilities",
        facilityGraphs: "Facility Graphs",
        filterFacilities: "Filter Facilities",
        cultivationTypes: "Cultivation Types",
        systemTypes: "System Types",
        cumulativeCapacity: "Cumulative Capacity Over Time",
        showOnlyTracking: "Show only tracking systems",
        notSpecified: "Not specified",
        facilityPhoto: "Facility Photo",
        organization: "Organization",
        errorServer: "Error reaching server. Please try again later.",
        loadingData: "Loading map data...",
        surveyText: "Would you like to see your facility on our map?",
        surveyLink: "Online survey"
    },
    de: {
        filter: "Filter",
        graphs: "Diagramme", 
        capacity: "Kapazität",
        area: "Fläche",
        yearEstablished: "Gründungsjahr",
        systemType: "Systemtyp",
        tracking: "Nachführung",
        cultivationType: "Anbautyp", 
        crops: "Nutzpflanzen",
        currentSelection: "Aktuelle Auswahl",
        facilities: "Anlagen",
        facilityGraphs: "Anlagen-Diagramme",
        filterFacilities: "Anlagen filtern",
        cultivationTypes: "Anbautypen",
        systemTypes: "Systemtypen", 
        cumulativeCapacity: "Kumulative Kapazität über Zeit",
        showOnlyTracking: "Nur Anlagen mit Nachführung anzeigen",
        notSpecified: "Nicht angegeben",
        facilityPhoto: "Anlagenfoto",
        organization: "Organisation",
        errorServer: "Fehler beim Erreichen des Servers. Bitte versuchen Sie es später erneut.",
        loadingData: "Lade Kartendaten...",
        surveyText: "Möchten Sie Ihre Anlage auf unserer Karte sehen?",
        surveyLink: "Online-Umfrage"
    }
};

// Cultivation type color mapping
const cultivationColors = {
    'Arable Farming': '#FFDE85',
    'Horticulture': '#F6BC86', 
    'Viticulture': '#F6BC86',
    'Grassland': '#D4E293',
    'Permanent grassland with mowing': '#D4E293',
    'Permanent grassland with livestock': '#D4E293',
    'Other': '#a6bbc8'
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
});

async function initializeMap() {
    try {
        // Show loading indicator
        showLoadingIndicator();
        
        // Initialize the map
        map = L.map('map').setView([51.1657, 10.4515], 6);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);

        // Load translations first
        await loadTranslations(currentLanguage);
        
        // Initialize UI
        initializeUI();
        createMarkersFromFacilities();
        populateFilters();
        updateTotals();
        createCharts();
        
        // Setup event listeners
        setupEventListeners();
        
        // Hide loading indicator
        hideLoadingIndicator();
        
    } catch (error) {
        console.error('Error initializing map:', error);
        hideLoadingIndicator();
        showErrorMessage(getUITranslation('errorServer'));
    }
}

// Load translations
async function loadTranslations(language) {
    try {
        if (language === 'de') {
            dataTranslations = processTranslationsData(translationsRawData);
        } else {
            dataTranslations = {};
        }
    } catch (error) {
        console.error('Error loading translations:', error);
        dataTranslations = {};
    }
}

// Get UI translation
function getUITranslation(key) {
    return staticUITranslations[currentLanguage]?.[key] || staticUITranslations['en'][key] || key;
}

// Get data translation
function getDataTranslation(originalText, category) {
    return dataTranslations[category]?.[originalText] || originalText;
}

// Initialize UI with translations
function initializeUI() {
    // Update static UI elements
    document.getElementById('filter-text').textContent = getUITranslation('filter');
    document.getElementById('graphs-text').textContent = getUITranslation('graphs');
    document.getElementById('filter-panel-title').textContent = getUITranslation('filterFacilities');
    document.getElementById('graphs-panel-title').textContent = getUITranslation('facilityGraphs');
    document.getElementById('current-selection-title').textContent = getUITranslation('currentSelection');
    document.getElementById('facilities-label').textContent = getUITranslation('facilities');
    document.getElementById('capacity-label').textContent = 'kWp ' + getUITranslation('capacity');
    document.getElementById('area-label').textContent = 'ha ' + getUITranslation('area');
    document.getElementById('capacity-filter-title').textContent = `${getUITranslation('capacity')} (kWp)`;
    document.getElementById('area-filter-title').textContent = `${getUITranslation('area')} (ha)`;
    document.getElementById('year-filter-title').textContent = getUITranslation('yearEstablished');
    document.getElementById('system-type-filter-title').textContent = getUITranslation('systemType');
    document.getElementById('tracking-filter-title').textContent = getUITranslation('tracking');
    document.getElementById('cultivation-type-filter-title').textContent = getUITranslation('cultivationType');
    document.getElementById('crops-filter-title').textContent = getUITranslation('crops');
    document.getElementById('legend-title').textContent = getUITranslation('cultivationTypes');
    document.getElementById('cultivation-chart-title').textContent = getUITranslation('cultivationTypes');
    document.getElementById('system-chart-title').textContent = getUITranslation('systemTypes');
    document.getElementById('capacity-chart-title').textContent = getUITranslation('cumulativeCapacity');
    document.getElementById('info-line1').textContent = getUITranslation('surveyText');
    document.getElementById('survey-link').textContent = getUITranslation('surveyLink');
    
    // Update legend labels with translations
    document.getElementById('legend-arable').textContent = getDataTranslation('Arable Farming', 'cultivation_type');
    document.getElementById('legend-horticulture').textContent = getDataTranslation('Horticulture', 'cultivation_type');
    document.getElementById('legend-grassland').textContent = getDataTranslation('Grassland', 'cultivation_type');
    document.getElementById('legend-other').textContent = getDataTranslation('Other', 'cultivation_type');
}

// Setup event listeners
function setupEventListeners() {
    // Language toggle
    document.getElementById('language-switch').addEventListener('change', async function() {
        currentLanguage = this.checked ? 'de' : 'en';
        
        // Show loading indicator while switching language
        showLoadingIndicator();
        
        try {
            // Reload translations
            await loadTranslations(currentLanguage);
            
            // Update UI
            initializeUI();
            
            // Recreate filters and charts with new language
            populateFilters();
            updateCharts();
            
            // Update existing markers' popups
            updateMarkersPopups();
            
        } catch (error) {
            console.error('Error switching language:', error);
            showErrorMessage(getUITranslation('errorServer'));
        } finally {
            hideLoadingIndicator();
        }
    });

    // Zoom controls
    document.getElementById('zoom-in').addEventListener('click', () => map.zoomIn());
    document.getElementById('zoom-out').addEventListener('click', () => map.zoomOut());
    document.getElementById('reset-zoom').addEventListener('click', () => {
        map.setView([51.1657, 10.4515], 6);
    });

    // Panel toggles
    document.getElementById('filter-toggle').addEventListener('click', function() {
        document.getElementById('filter-sidebar').classList.toggle('active');
    });
    
    document.getElementById('close-filter').addEventListener('click', function() {
        document.getElementById('filter-sidebar').classList.remove('active');
    });
    
    document.getElementById('graphs-toggle').addEventListener('click', function() {
        const sidebar = document.getElementById('graphs-sidebar');
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('active')) {
            updateCharts();
        }
    });
    
    document.getElementById('close-graphs').addEventListener('click', function() {
        document.getElementById('graphs-sidebar').classList.remove('active');
    });

    // Reset filters
    document.getElementById('reset-filter').addEventListener('click', resetAllFilters);
}

// Create markers from facilities data
function createMarkersFromFacilities() {
    const allSystemTypes = new Set();
    const allCultivationTypes = new Set();
    const allCrops = new Set();
    let hasUnspecifiedSystemType = false;
    let hasUnspecifiedCultivation = false;
    let hasUnspecifiedCrops = false;

    // Calculate dynamic ranges for filters
    const capacityValues = facilitiesData.map(f => f.capacity).filter(c => c > 0);
    const areaValues = facilitiesData.map(f => f.area).filter(a => a > 0);
    const yearValues = facilitiesData.map(f => parseInt(f.year_established)).filter(y => !isNaN(y));
    
    const maxCapacity = Math.max(...capacityValues, 100);
    const maxArea = Math.max(...areaValues, 1);
    const minYear = Math.min(...yearValues, 2010);
    const maxYear = Math.max(...yearValues, new Date().getFullYear());
    
    // Update filter ranges
    updateFilterRanges(maxCapacity, maxArea, minYear, maxYear);

    facilitiesData.forEach(facility => {
        // Collect data for filters
        facility.system_types.forEach(type => allSystemTypes.add(type));
        facility.cultivation_types.forEach(type => allCultivationTypes.add(type));
        facility.crops.forEach(crop => allCrops.add(crop));
        
        if (facility.system_types.length === 0) hasUnspecifiedSystemType = true;
        if (facility.cultivation_types.length === 0) hasUnspecifiedCultivation = true;
        if (facility.crops.length === 0) hasUnspecifiedCrops = true;
        
        // Create marker
        const markerCultivationType = facility.cultivation_types[0] || 'Other';
        const marker = L.marker([facility.latitude, facility.longitude], {
            icon: createDropMarker(markerCultivationType)
        }).addTo(map);
        
        // Create popup content
        const popupContent = createPopupContent(facility);
        marker.bindPopup(popupContent);
        
        // Store marker with data
        markers.push({
            marker: marker,
            data: facility
        });
    });
    
    // Store sets for filter population
    window.allSystemTypes = allSystemTypes;
    window.allCultivationTypes = allCultivationTypes;
    window.allCrops = allCrops;
    window.hasUnspecifiedSystemType = hasUnspecifiedSystemType;
    window.hasUnspecifiedCultivation = hasUnspecifiedCultivation;
    window.hasUnspecifiedCrops = hasUnspecifiedCrops;
}

// Create popup content with copyright overlay
function createPopupContent(facility) {
    const systemTypesHtml = facility.system_types.length > 0 ? 
        facility.system_types.map(type => getDataTranslation(type, 'system_type')).join(', ') : 
        getUITranslation('notSpecified');
    
    const cultivationTypesHtml = facility.cultivation_types.length > 0 ? 
        facility.cultivation_types.map(type => getDataTranslation(type, 'cultivation_type')).join(', ') : 
        getUITranslation('notSpecified');
    
    const cropTagsHtml = facility.crops.length > 0 ?
        facility.crops.map(crop => 
            `<span class="crop-tag">${getDataTranslation(crop, 'crop')}</span>`
        ).join('') : getUITranslation('notSpecified');
    
    const organizationTranslated = getDataTranslation(facility.organization, 'organization');
    
    // Handle images with copyright
    const logoHtml = facility.logo ? 
        `<img src="${facility.logo}" alt="Logo" style="width: 60px; height: 60px; object-fit: contain;">` :
        `<div class="logo-placeholder"><i class="fas fa-image"></i></div>`;
    
    const imageHtml = facility.picture ? 
        `<div style="position: relative;">
            <img src="${facility.picture}" alt="Facility" style="width: 100%; height: 60px; object-fit: cover;">
            ${facility.copyright ? `<div class="copyright-overlay">© ${facility.copyright}</div>` : ''}
         </div>` :
        `<div class="image-placeholder">${getUITranslation('facilityPhoto')}</div>`;

    return `
        <div class="facility-info">
            <h3>${facility.name}</h3>
            
            <div class="facility-placeholders">
                ${logoHtml}
                ${imageHtml}
            </div>
            
            <p><strong>${getUITranslation('yearEstablished')}:</strong> ${facility.year_established || getUITranslation('notSpecified')}</p>
            <p><strong>${getUITranslation('organization')}:</strong> ${organizationTranslated}</p>
            <p><strong>${getUITranslation('capacity')}:</strong> ${facility.capacity.toLocaleString()} kWp</p>
            <p><strong>${getUITranslation('area')}:</strong> ${facility.area > 0 ? facility.area.toLocaleString() + ' ha' : getUITranslation('notSpecified')}</p>
            <p><strong>${getUITranslation('systemType')}:</strong> ${systemTypesHtml}</p>
            <p><strong>${getUITranslation('tracking')}:</strong> ${facility.has_tracking ? 'Yes' : 'No'}</p>
            <p><strong>${getUITranslation('cultivationType')}:</strong> ${cultivationTypesHtml}</p>
            <p><strong>${getUITranslation('crops')}:</strong> ${cropTagsHtml}</p>
        </div>
    `;
}

// Update markers' popups with new language
function updateMarkersPopups() {
    markers.forEach(item => {
        const newPopupContent = createPopupContent(item.data);
        item.marker.setPopupContent(newPopupContent);
    });
}

// Create drop marker
function createDropMarker(cultivationType) {
    const color = getCultivationColor(cultivationType);
    
    const svgPin = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36">
        <path d="M12 0C5.4 0 0 5.4 0 12c0 7.2 12 24 12 24s12-16.8 12-24c0-6.6-5.4-12-12-12z" fill="${color}" stroke="#000" stroke-width="1"/>
    </svg>
    `;
    
    const svgDataUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgPin);
    
    return L.divIcon({
        className: 'marker-drop',
        html: `<div style="width: 24px; height: 36px; background-image: url('${svgDataUrl}'); background-size: contain; background-repeat: no-repeat; background-position: center;"></div>`,
        iconSize: [24, 36],
        iconAnchor: [12, 36],
        popupAnchor: [0, -36]
    });
}

// Get cultivation color
function getCultivationColor(cultivationType) {
    // Direct match
    if (cultivationColors[cultivationType]) {
        return cultivationColors[cultivationType];
    }
    
    // Check for grassland variants
    if (cultivationType && cultivationType.toLowerCase().includes('grassland')) {
        return cultivationColors['Grassland'];
    }
    
    // Check for viticulture (should use horticulture color)
    if (cultivationType && cultivationType.toLowerCase().includes('viticulture')) {
        return cultivationColors['Horticulture'];
    }
    
    // Default to 'Other' color
    return cultivationColors['Other'];
}

// Update filter ranges
function updateFilterRanges(maxCapacity, maxArea, minYear, maxYear) {
    const maxCapacityValue = Math.ceil(maxCapacity / 100) * 100;
    const maxAreaValue = Math.ceil(maxArea);
    
    // Set capacity range
    document.getElementById('capacity-min').max = maxCapacityValue;
    document.getElementById('capacity-max').max = maxCapacityValue;
    document.getElementById('capacity-max').value = maxCapacityValue;
    document.getElementById('capacity-max-value').textContent = maxCapacityValue.toLocaleString();
    
    // Set area range  
    document.getElementById('area-min').max = maxAreaValue;
    document.getElementById('area-max').max = maxAreaValue;
    document.getElementById('area-max').value = maxAreaValue;
    document.getElementById('area-max-value').textContent = maxAreaValue.toLocaleString();
    
    // Set year range
    document.getElementById('year-min').min = minYear;
    document.getElementById('year-min').max = maxYear;
    document.getElementById('year-min').value = minYear;
    document.getElementById('year-max').min = minYear;
    document.getElementById('year-max').max = maxYear;
    document.getElementById('year-max').value = maxYear;
    document.getElementById('year-min-value').textContent = minYear;
    document.getElementById('year-max-value').textContent = maxYear;
}

// Populate filters
function populateFilters() {
    populateSystemTypeFilters();
    populateCultivationTypeFilters();
    populateTrackingFilter();
    populateCropFilters();
    setupFilterEventListeners();
}

// Populate system type filters
function populateSystemTypeFilters() {
    const container = document.getElementById('systemtypes-group');
    container.innerHTML = '';
    
    Array.from(window.allSystemTypes).sort().forEach(type => {
        const translatedType = getDataTranslation(type, 'system_type');
        const div = document.createElement('div');
        div.className = 'checkbox-option';
        div.innerHTML = `
            <input type="checkbox" id="sys-${type.replace(/\s+/g, '')}" value="${type}" checked>
            <label for="sys-${type.replace(/\s+/g, '')}">${translatedType}</label>
        `;
        container.appendChild(div);
        div.querySelector('input').addEventListener('change', applyFilters);
    });
    
    if (window.hasUnspecifiedSystemType) {
        const div = document.createElement('div');
        div.className = 'checkbox-option';
        div.innerHTML = `
            <input type="checkbox" id="sys-notspecified" value="not-specified" checked>
            <label for="sys-notspecified">${getUITranslation('notSpecified')}</label>
        `;
        container.appendChild(div);
        div.querySelector('input').addEventListener('change', applyFilters);
    }
}

// Populate cultivation type filters
function populateCultivationTypeFilters() {
    const container = document.getElementById('cultivationtypes-group');
    container.innerHTML = '';
    
    Array.from(window.allCultivationTypes).sort().forEach(type => {
        const translatedType = getDataTranslation(type, 'cultivation_type');
        const div = document.createElement('div');
        div.className = 'checkbox-option';
        div.innerHTML = `
            <input type="checkbox" id="cult-${type.replace(/\s+/g, '')}" value="${type}" checked>
            <label for="cult-${type.replace(/\s+/g, '')}">${translatedType}</label>
        `;
        container.appendChild(div);
        div.querySelector('input').addEventListener('change', applyFilters);
    });
    
    if (window.hasUnspecifiedCultivation) {
        const div = document.createElement('div');
        div.className = 'checkbox-option';
        div.innerHTML = `
            <input type="checkbox" id="cult-notspecified" value="not-specified" checked>
            <label for="cult-notspecified">${getUITranslation('notSpecified')}</label>
        `;
        container.appendChild(div);
        div.querySelector('input').addEventListener('change', applyFilters);
    }
}

// Populate tracking filter
function populateTrackingFilter() {
    const container = document.getElementById('trackingtypes-group');
    container.innerHTML = '';
    
    const div = document.createElement('div');
    div.className = 'checkbox-option';
    div.innerHTML = `
        <input type="checkbox" id="tracking-only" value="tracking-only">
        <label for="tracking-only">${getUITranslation('showOnlyTracking')}</label>
    `;
    container.appendChild(div);
    div.querySelector('input').addEventListener('change', applyFilters);
}

// Populate crop filters
function populateCropFilters() {
    const container = document.getElementById('crops-group');
    container.innerHTML = '';
    
    Array.from(window.allCrops).sort().forEach(crop => {
        const translatedCrop = getDataTranslation(crop, 'crop');
        const div = document.createElement('div');
        div.className = 'tag-filter';
        div.dataset.crop = crop;
        div.textContent = translatedCrop;
        container.appendChild(div);
        
        div.addEventListener('click', function() {
            div.classList.toggle('highlighted');
            applyFilters();
        });
    });
    
    if (window.hasUnspecifiedCrops) {
        const div = document.createElement('div');
        div.className = 'tag-filter';
        div.dataset.crop = 'not-specified';
        div.textContent = getUITranslation('notSpecified');
        container.appendChild(div);
        
        div.addEventListener('click', function() {
            div.classList.toggle('highlighted');
            applyFilters();
        });
    }
}

// Setup filter event listeners
function setupFilterEventListeners() {
    // Range sliders
    ['capacity-min', 'capacity-max'].forEach(id => {
        document.getElementById(id).addEventListener('input', function() {
            updateCapacitySlider();
            applyFilters();
        });
    });
    
    ['area-min', 'area-max'].forEach(id => {
        document.getElementById(id).addEventListener('input', function() {
            updateAreaSlider();
            applyFilters();
        });
    });
    
    ['year-min', 'year-max'].forEach(id => {
        document.getElementById(id).addEventListener('input', function() {
            updateYearSlider();
            applyFilters();
        });
    });
}

// Update slider visuals
function updateCapacitySlider() {
    const min = document.getElementById('capacity-min');
    const max = document.getElementById('capacity-max');
    const track = document.getElementById('capacity-range');
    
    const percent1 = ((min.value - min.min) / (min.max - min.min)) * 100;
    const percent2 = ((max.value - max.min) / (max.max - max.min)) * 100;
    
    track.style.left = percent1 + '%';
    track.style.width = (percent2 - percent1) + '%';
    
    document.getElementById('capacity-min-value').textContent = parseInt(min.value).toLocaleString();
    document.getElementById('capacity-max-value').textContent = parseInt(max.value).toLocaleString();
}

function updateAreaSlider() {
    const min = document.getElementById('area-min');
    const max = document.getElementById('area-max');
    const track = document.getElementById('area-range');
    
    const percent1 = ((min.value - min.min) / (min.max - min.min)) * 100;
    const percent2 = ((max.value - max.min) / (max.max - max.min)) * 100;
    
    track.style.left = percent1 + '%';
    track.style.width = (percent2 - percent1) + '%';
    
    document.getElementById('area-min-value').textContent = parseFloat(min.value).toLocaleString();
    document.getElementById('area-max-value').textContent = parseFloat(max.value).toLocaleString();
}

function updateYearSlider() {
    const min = document.getElementById('year-min');
    const max = document.getElementById('year-max');
    const track = document.querySelector('.year-slider-range');
    
    const percent1 = ((min.value - min.min) / (min.max - min.min)) * 100;
    const percent2 = ((max.value - max.min) / (max.max - max.min)) * 100;
    
    track.style.left = percent1 + '%';
    track.style.width = (percent2 - percent1) + '%';
    
    document.getElementById('year-min-value').textContent = min.value;
    document.getElementById('year-max-value').textContent = max.value;
}

// Apply all filters
function applyFilters() {
    const minCapacity = parseInt(document.getElementById('capacity-min').value);
    const maxCapacity = parseInt(document.getElementById('capacity-max').value);
    const minArea = parseFloat(document.getElementById('area-min').value);
    const maxArea = parseFloat(document.getElementById('area-max').value);
    const minYear = parseInt(document.getElementById('year-min').value);
    const maxYear = parseInt(document.getElementById('year-max').value);
    
    const selectedSystemTypes = Array.from(
        document.querySelectorAll('#systemtypes-group input:checked')
    ).map(input => input.value);
    
    const selectedCultivationTypes = Array.from(
        document.querySelectorAll('#cultivationtypes-group input:checked')
    ).map(input => input.value);
    
    const trackingOnly = document.getElementById('tracking-only').checked;
    
    const highlightedCrops = Array.from(
        document.querySelectorAll('.tag-filter.highlighted')
    ).map(tag => tag.dataset.crop);
    
    markers.forEach(item => {
        const facility = item.data;
        const facilityYear = parseInt(facility.year_established);
        
        let visible = 
            facility.capacity >= minCapacity && facility.capacity <= maxCapacity &&
            facility.area >= minArea && facility.area <= maxArea &&
            (isNaN(facilityYear) || (facilityYear >= minYear && facilityYear <= maxYear));
        
        // System type filter
        if (visible) {
            if (facility.system_types.length === 0) {
                visible = selectedSystemTypes.includes('not-specified');
            } else {
                visible = facility.system_types.some(type => selectedSystemTypes.includes(type));
            }
        }
        
        // Cultivation type filter
        if (visible) {
            if (facility.cultivation_types.length === 0) {
                visible = selectedCultivationTypes.includes('not-specified');
            } else {
                visible = facility.cultivation_types.some(type => selectedCultivationTypes.includes(type));
            }
        }
        
        // Tracking filter
        if (visible && trackingOnly) {
            visible = facility.has_tracking;
        }
        
        // Crop filter
        if (visible && highlightedCrops.length > 0) {
            if (facility.crops.length === 0) {
                visible = highlightedCrops.includes('not-specified');
            } else {
                visible = facility.crops.some(crop => highlightedCrops.includes(crop));
            }
        }
        
        // Show/hide marker
        if (visible) {
            if (!map.hasLayer(item.marker)) {
                map.addLayer(item.marker);
            }
        } else {
            if (map.hasLayer(item.marker)) {
                map.removeLayer(item.marker);
            }
        }
    });
    
    updateTotals();
    updateCharts();
}

// Reset all filters
function resetAllFilters() {
    // Reset sliders
    document.getElementById('capacity-min').value = document.getElementById('capacity-min').min;
    document.getElementById('capacity-max').value = document.getElementById('capacity-max').max;
    document.getElementById('area-min').value = document.getElementById('area-min').min;
    document.getElementById('area-max').value = document.getElementById('area-max').max;
    document.getElementById('year-min').value = document.getElementById('year-min').min;
    document.getElementById('year-max').value = document.getElementById('year-max').max;
    
    updateCapacitySlider();
    updateAreaSlider();
    updateYearSlider();
    
    // Reset checkboxes
    document.querySelectorAll('#systemtypes-group input, #cultivationtypes-group input').forEach(checkbox => {
        checkbox.checked = true;
    });
    
    document.getElementById('tracking-only').checked = false;
    
    // Reset crop filters
    document.querySelectorAll('.tag-filter').forEach(tag => {
        tag.classList.remove('highlighted');
    });
    
    applyFilters();
}

// Update totals
function updateTotals() {
    const visibleMarkers = markers.filter(item => map.hasLayer(item.marker));
    
    const totalFacilities = visibleMarkers.length;
    const totalCapacity = visibleMarkers.reduce((sum, item) => sum + (parseFloat(item.data.capacity) || 0), 0);
    const totalArea = visibleMarkers.reduce((sum, item) => sum + (parseFloat(item.data.area) || 0), 0);
    
    // Round values to avoid floating-point precision issues
    const roundedCapacity = Math.round(totalCapacity);
    const roundedArea = Math.round(totalArea * 10) / 10; // Round to 1 decimal place
    
    document.getElementById('total-facilities').textContent = totalFacilities.toLocaleString();
    document.getElementById('total-capacity').textContent = roundedCapacity.toLocaleString();
    document.getElementById('total-area').textContent = roundedArea.toLocaleString();
}

// Create charts
function createCharts() {
    createCultivationChart();
    createSystemChart();
    createCapacityTimeChart();
    updateCharts();
}

// Create individual chart functions
function createCultivationChart() {
    const ctx = document.getElementById('cultivation-chart').getContext('2d');
    cultivationChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [],
                borderColor: '#ffffff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });
}

function createSystemChart() {
    const ctx = document.getElementById('system-chart').getContext('2d');
    systemChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: ['#5DA5DA', '#FAA43A', '#60BD68', '#F17CB0', '#B276B2'],
                borderColor: '#ffffff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });
}

function createCapacityTimeChart() {
    const ctx = document.getElementById('capacity-time-chart').getContext('2d');
    capacityTimeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: getUITranslation('capacity'),
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                pointRadius: 3,
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: getUITranslation('capacity') + ' (kWp)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Update charts
function updateCharts() {
    const visibleFacilities = markers
        .filter(item => map.hasLayer(item.marker))
        .map(item => item.data);
    
    updateCultivationChartData(visibleFacilities);
    updateSystemChartData(visibleFacilities);
    updateCapacityTimeChartData(visibleFacilities);
}

function updateCultivationChartData(facilities) {
    const cultivationCount = {};
    
    facilities.forEach(facility => {
        if (facility.cultivation_types.length === 0) {
            const label = getUITranslation('notSpecified');
            cultivationCount[label] = (cultivationCount[label] || 0) + 1;
        } else {
            facility.cultivation_types.forEach(type => {
                const translatedType = getDataTranslation(type, 'cultivation_type');
                cultivationCount[translatedType] = (cultivationCount[translatedType] || 0) + 1;
            });
        }
    });
    
    const labels = Object.keys(cultivationCount);
    const data = Object.values(cultivationCount);
    const colors = labels.map(label => {
        // Find original type for color mapping
        const originalType = Object.entries(dataTranslations.cultivation_type || {})
            .find(([orig, trans]) => trans === label)?.[0] || label;
        return getCultivationColor(originalType === getUITranslation('notSpecified') ? 'Other' : originalType);
    });
    
    cultivationChart.data.labels = labels;
    cultivationChart.data.datasets[0].data = data;
    cultivationChart.data.datasets[0].backgroundColor = colors;
    cultivationChart.update();
}

function updateSystemChartData(facilities) {
    const systemCount = {};
    
    facilities.forEach(facility => {
        if (facility.system_types.length === 0) {
            const label = getUITranslation('notSpecified');
            systemCount[label] = (systemCount[label] || 0) + 1;
        } else {
            facility.system_types.forEach(type => {
                const translatedType = getDataTranslation(type, 'system_type');
                systemCount[translatedType] = (systemCount[translatedType] || 0) + 1;
            });
        }
    });
    
    systemChart.data.labels = Object.keys(systemCount);
    systemChart.data.datasets[0].data = Object.values(systemCount);
    systemChart.update();
}

function updateCapacityTimeChartData(facilities) {
    const minYear = parseInt(document.getElementById('year-min').min);
    const maxYear = parseInt(document.getElementById('year-max').max);
    const yearData = {};
    
    // Initialize years
    for (let year = minYear; year <= maxYear; year++) {
        yearData[year] = 0;
    }
    
    // Add capacity for each facility
    facilities.forEach(facility => {
        const year = parseInt(facility.year_established);
        if (!isNaN(year) && yearData[year] !== undefined) {
            yearData[year] += (parseFloat(facility.capacity) || 0);
        }
    });
    
    // Calculate cumulative data
    const sortedYears = Object.keys(yearData).sort();
    const cumulativeData = [];
    let runningTotal = 0;
    
    sortedYears.forEach(year => {
        runningTotal += yearData[year];
        cumulativeData.push(runningTotal);
    });
    
    capacityTimeChart.data.labels = sortedYears;
    capacityTimeChart.data.datasets[0].data = cumulativeData;
    capacityTimeChart.update();
}

// Utility functions
function showLoadingIndicator() {
    const loadingDiv = document.getElementById('loading-indicator');
    if (loadingDiv) {
        loadingDiv.style.display = 'block';
    }
}

function hideLoadingIndicator() {
    const loadingDiv = document.getElementById('loading-indicator');
    if (loadingDiv) {
        loadingDiv.style.display = 'none';
    }
}

function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    // Remove after 5 seconds
    setTimeout(() => {
        if (errorDiv && errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
        }
    }, 5000);
}
