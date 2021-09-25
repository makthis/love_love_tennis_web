'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5810e9c2e0580d8c5fc36139b7d2d6ae",
".git/config": "86016230473a8bf64e4db66ae6b92539",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "42922ba051cf48be9f0ac1201db48453",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c9705ddd71b424cfd610458e15017c06",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1277e758e5ee97a682b6b69ad13ab3ba",
".git/logs/refs/heads/main": "203b349023e2056200cfcea2476bf3f5",
".git/logs/refs/remotes/origin/main": "2a4b14b5d74738cece41074a20df3c36",
".git/objects/00/2c542d9d16ed0f816971b0f3db7aa04038ad3f": "2e1b26e50034ee65bbbf5c1978d0ab49",
".git/objects/02/8403e73146cc8e4a6ad974230cb1e725801b31": "ad83d989019aac23e293d077a444707b",
".git/objects/06/7b3094edccb3ea44ec0b3d71d8fcdfeded3270": "6d555b4786d2f44af9831fa12087d549",
".git/objects/06/c46acb6c8e85b432aeb05d4a617196adec99ed": "c87192c42d0de823ba4265038d36b108",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/0a/c32fe9b4f1c8862ea1b1099a91735164d6d0f4": "e2fd9e2ec70c356b4d79f8508105d1d3",
".git/objects/0a/ea8e2a1b16835e894a185010f16a4ffee25c6b": "fcf4d1ee023727b636f4db2bd2c954af",
".git/objects/10/2370879ce2188935e7ceb3a12730c7b688a553": "ef88713365660649f9deb2f96b9007e8",
".git/objects/10/6b6452619fa8b651b17cc210791a7c66325bd0": "88b0015fdc37ef9ab09a49fcd9e3bf58",
".git/objects/10/a35fe47e19d8f09f7b0848977bf15eee44e06c": "6bcb8b2ab13cf7a5e10485e2eae1786c",
".git/objects/12/9fb0c2e9874f6aa8f7664ba67dfdf79c08267e": "0f2c484a1074709afbc1d6befa43777d",
".git/objects/15/cd3e17c6aff45b6f4a6ec975dbec55a9e38ec5": "2806b96cb67cb2fc76d41b35bc346fe7",
".git/objects/16/cc9071b41ed2953b184949d18f37f87f814416": "6afdc9caebf8cffa78bc9aa7fab87b93",
".git/objects/18/f39df5e6dc0531f3eab8c5a30e360402faea88": "d4be77f3e71d91b4d35c59344358175b",
".git/objects/18/f48fb0f3ca980a3ab0dfbd840e3c29c5d04e94": "9b0ffe8edbf18c3690b8d9647ff9c193",
".git/objects/1c/5537e798b577f834fddad6dc3af4b46aa585ec": "cc3e892e13828ad60912bb55c141b032",
".git/objects/1e/e1d310df303632d269200268101287651ccc3f": "079b93cfdbb02954745c4e81533d18c8",
".git/objects/22/f52d40bc51b09b5438348d62a81fc730853626": "f010936320ab4afbb8739c6593d1b7c1",
".git/objects/23/f09bd27ffa124f63d934158fa39c2a944a116e": "9ad79528a3d4734bb6bc7268926afbe7",
".git/objects/25/fa311f53d7a1add4ad6575616c2fbb1f387ac8": "ec4a4ae0491ae8d2885a1964b5c2bdcf",
".git/objects/28/fbd7da94b3ee7e88b8ae47769a0aa2590143c0": "2bf354a8ed0a0f6def6e7b3f71816177",
".git/objects/29/616ce50946c0c39a9735345694e50288f7261e": "684bd2bc1ebddc79c52234546ce04a57",
".git/objects/29/6d149c74f702dc3f0e6f7ae6559ecd1eb59ebc": "62c371739c057ceafdd63323dbb1fa30",
".git/objects/2e/dd3a9065da1bc96fe8a46a11067f6ba8512841": "c3178722fd2c76ca4ae5afc2cef4657f",
".git/objects/30/7b3b51603d9e12f0fbfe68c969e8a94b1fc8ea": "6531a73cb591832f3e95e5c9eb8bde43",
".git/objects/30/e4c507c232b42f260392fa2781ddf5b64a9379": "85daad7b0b7e973b7dab5e0c117b0727",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/38d1a32a0cfea10082c95e4a4c9235a2c000c3": "c2d54a284a5dd4014c4f6730f17e5924",
".git/objects/39/64875919db64f4313712f23f40cc7e0dc322c7": "e315de7a342dc11725774fbb10d98f1c",
".git/objects/3c/2390de7d96a91c7ea7f7c56293c788c785b587": "9ddfed10cf39185477048b51951907e2",
".git/objects/3d/9061d2ccd1b2f3ba14dbc8f7c6a16ed62da00d": "c0d3439b24be560e902979cd584d3edb",
".git/objects/3f/ccf0f86c39faaf824c6487a7fd93d084d4fd55": "8ad0be2e641bc688c5ba069c721c3d37",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/92c0e2af196e72cfb9bb66711c07626268406a": "fc4afaf96444862b76fc683cfe92d330",
".git/objects/48/5468de3a366e40f819811e64806cedffa144c8": "d00995b6fef46cf0e8f14f7330723799",
".git/objects/48/96b848abc5a74973933bdc900c3248dee981ca": "416cf345c0fa04ad367b465c81a304a9",
".git/objects/49/9193510f7ea6d67594fe32196fd9d77dba8103": "6dfc3caefaa58e4191c5e571f3e37dd3",
".git/objects/4a/a9a5014f3520fcedf0c602bab3d60d36985c10": "1e4e29b31418bcf75edcdcbcded7df14",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/53/28e12d065939a59168caa6aa75c28bff146e51": "941e880e18eeeabc386aa94d08ac5e34",
".git/objects/54/1bd4244b24588487e22461f8fb40f6166079f5": "0ebcd6edf9b299c59c6a3e7c7d97425b",
".git/objects/57/3cf176833e665c5d4f9a5aa1c94bd056eae792": "ef67fa6d235b3a0465f3c0f6f88b6375",
".git/objects/58/a567ac2e8fbb6f7eccc2733c4020e0f0afb91e": "7be0b9fa680836d025f8866125d26536",
".git/objects/5f/421c16e121ff468888db476c0c8c738523c289": "52e7e67eafdb36df72585394e59802ee",
".git/objects/60/17ef1271dc3e3ff2e64d580ec5ac53983d6718": "89c4ec60302534eefca5edefb68b04e6",
".git/objects/60/97514029ffbea510daa3885ff227d700f9e534": "f8bbd3210724351325c3d4e7c22d75a5",
".git/objects/6a/7462635bdcee664652989a0edcabcbceeed85a": "9bdcf729438fd699a14a6a996b01f7de",
".git/objects/6e/6e4d7568fd44fa5e841c9e0c110077daf29f00": "4880bd8d994cd491a0e66bb0fe1fa7a4",
".git/objects/6f/f92ccdae8e2268fb3d57167eac7ac5528a783c": "ff198f339509395af07c397beaf3bedb",
".git/objects/70/0515ee8b2a65a5abebbbc64ac983f176f4c91e": "626a4e0493199c3c2a904b9cf87876d9",
".git/objects/72/c6dc07b233bea3fb8499dad80310f1cc40f694": "4ee19ed19331cb0d9b321f944a978194",
".git/objects/72/d2a760fe0ee6c850d710ea03b1deb4632bb34f": "73e54d6e1a09fa8ae24181f22346b8cd",
".git/objects/76/0122c52842322b9e3bdca906cb29a8b26bb23f": "a3f483e9eb994ed2fdddf83c90ea882b",
".git/objects/76/a5409edf420d8f181416c0b830ffaee8ffda67": "fe646269950c581828c2b558297bc459",
".git/objects/77/55b0ed8144e651769125eb983bb6ffec9f9ae5": "87122e81ca19e3a8236c4c2de116365b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/348ffc584cd9c8f6286e3b820783fc05607806": "96db76379aa9aac5a5384040f0b13b84",
".git/objects/7b/8bcc64a7232c6e5f1289045d265c6105857c2e": "c62a21581f23b07e2a66aaf0201eed6d",
".git/objects/7b/cb0e6d9c4cedec02daa3371c073a9dbe9386e9": "79aeac81883c5442a34b0b7a46630579",
".git/objects/81/ab978facfd685e840e0cff61ca1b58cd1d7a85": "d9f1d806d0f4e03e46ef29042a820d5e",
".git/objects/87/04cf037933d195c71fccb84604d081740a6a50": "d8426fe5efc14e9f651249acdc984d11",
".git/objects/8b/6415e9fe6694a37a4b31d6000eeab06f1033d5": "efefefb7f21702a1d4da4014d88ef1d4",
".git/objects/8b/8ce13cff94ff005db04fe945a031c274345c42": "661b1fc12ef42e413a2523fa1252fd1d",
".git/objects/8d/1b8ea9772594740cd59cbc127edd8ffafd8a05": "f61babd121374adcb8eb956b1de239b5",
".git/objects/8e/e468193fa8c57849ab7cf92b69ccafe4525f19": "1e91a814e097344144d6bff61e770674",
".git/objects/90/8814cc2435e192ef9489cdf745f13cd0e98250": "c7d6bbb091e3ac88f4feb1cc964aafcc",
".git/objects/90/f31ddf2091f370fb5446bc9b2a9c5b0585704a": "0cf80fbe9e19f6115ab439de2d5420b4",
".git/objects/90/f37b70e8c3a61ec58b18f8c2f7fea7e12af2f6": "7609ef8d86979d2e23375ca7c2eb4f0c",
".git/objects/91/d0d37ed524e44f58bcfaf849e0571c897507bc": "fb1b9e9e57c779e2d3b461ed2e791c52",
".git/objects/92/012a44329bcd09e72bbc0b877c8733347b036d": "f98a677d7b0ea8d88118ac74e1950c79",
".git/objects/94/f64531ca4a6901403f704db2546d62c4be6661": "6f01f1cd34c640bb1922df7b2c531d0d",
".git/objects/95/7f3587c8bc50ca6dcf3833ad08e15a2c760631": "2b1dac680d14131f631ba1cd6f25cbc7",
".git/objects/96/a1f1be18e8c1a9d70b8bcd1fe167e2ea60d537": "2cebe09cd89efadb77aaabea116a4a0d",
".git/objects/98/6681be1493b0929ef89ca93faa8c76ca75c383": "ce2103bedeabb48995f07734124c001b",
".git/objects/99/38676ea567521f8483f31a35e019885a89e742": "42cc9de6a9758c9ac87395ef6190bb55",
".git/objects/9a/0956623c8179b2fec9e6af67c8fca0ef718c53": "60a7544819e111760f3a35d832982d87",
".git/objects/9a/47fdfa5be26b7ed97e29d9d5706ff255e1286d": "98d8c6d957308ffebeb12351da650d05",
".git/objects/9a/ea24eb69fd5a0a13efdcea61ba11811d09149d": "faf6c72860e72fd23a7d130ae83eea96",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e9e81bee769b9b7b9235c616a6f86ed7544045": "1fd3720b3447932958f6bfdf1176f6c7",
".git/objects/a3/2cf3cad7d6a4cc375fe293a5ab265112ccc9b0": "105ffe6ab9c1f8280e84524214cb416a",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/08871ba4744e92c4abe4b6d93269a20d46fecb": "6a2cefa7c5f413b870626f7e4b6d63e6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/db8003b46541cad93df4edb2308b8647f3b3ac": "441d5be62dca7594d2ef7ba0bc258b54",
".git/objects/b0/13b7bc33c90c993089d20536b8b9a3c3b7c150": "ba2a060e62240d043cd602bdf2e11aad",
".git/objects/b0/c4f22b9e8a12a09811c24f39fb9947139479b2": "5d82442adcd44b558fb7c8b5f3f85912",
".git/objects/b3/0c05e91864546063eb098fa3fcec7d6d4c5416": "8f6c161509529a1c3ccb834f64a8e049",
".git/objects/b5/d729935671f5a2aa579de7cba1c6fbcd5ce0b3": "b7422eb06748401a40e8fc1b99725763",
".git/objects/b8/2f6ad60e2916d8dcbcd492354cd173cd24e62c": "5fb5d1d2ed5875e73c76597dc1f0b8ab",
".git/objects/ba/6bb5b30040011ccf1362bda73c4848e01cc9b7": "7042ec7e0737a20ef755672e32dda087",
".git/objects/ba/aa15f38a2c9c83ca9682884c77cdc0ea33b6b4": "cbabde65edd6d1931bf18cdf84de0c70",
".git/objects/ba/cd4700cc1b5537b055e966710190a294439cde": "34c80013f8f70c345c6c1cdc3ae6a7e5",
".git/objects/bb/1ae59012eda9b714adc878f62766a86653c5f6": "c66b603c878c5a8ee7d4f0aa7f047ef3",
".git/objects/bd/42c4f738b2778fd6eded909cbc22feecabf75b": "3156ed23e3caa3b93598bbfa2bdbeb5c",
".git/objects/bd/54b85da0e0eed9b499ea928dfad575f786189c": "6598b981e1ce404ebde99cb3d49f6a3e",
".git/objects/be/979190fddbd0c50ca92ffde657b4daac77ebd1": "f5991977db84dd2b14cd3593c54e544f",
".git/objects/c4/12207205ceb8c589cefabb16d513fedbc7daa2": "ce525ab244125dbc6ad93c2a4495b736",
".git/objects/c5/4658f0879774714b816499c140128807cd2cca": "c8bfc61b63240622173399f2255ca3b6",
".git/objects/c5/de3df61426daf680b3ec7f106783eb5513a0f3": "99ec45bad0b8315cb07d8955a3449b1c",
".git/objects/c7/df91cad03cc8a00a503e5878b83403c26318a4": "b45081f7a634c56be53d0a4de9f7f85e",
".git/objects/c8/7780ba0bc9c387b124e3bac2ce8d481ef0aeb0": "867d8dd7804fb9ec79eaecd40d66985b",
".git/objects/d5/465afb22b0bad1f9736f6dc783922108a59434": "f7f95a369603ecac1d8a83d7e661bed2",
".git/objects/d5/bdd879231f9e29f23af2e4a182f0b7bdf3bbd4": "fec3ceecb4fa69aaf1107f13a7fd5ed9",
".git/objects/d5/f50e56de145f9a963cc508420c6589fe0a0ebd": "9875297b90d3e535bbec6c30e6206ef8",
".git/objects/d9/0784980460fc5c6102c0812ab13080b6ba4adf": "ac7fe11ab0d4ec9544b93bc3bd5ef2aa",
".git/objects/dd/46b1105d19bde9ac45b3b9f2662df200fbfdb0": "a0dc828a2c63794dee07fddc286b946c",
".git/objects/dd/c6ea6087e09a4b297d9f316d43ae826b7cf625": "eb6a7fb92302f22871a271ea56afff7a",
".git/objects/de/ea452e841c229b6ff1d245e2b03bc530fb0dd4": "d95c4562bb1eef44efde813af4cc651d",
".git/objects/e1/5a9df586dea74765346519a7ee3cc755c921a9": "24628a37a7a156e126279408de5801ae",
".git/objects/e2/8646727eb8eaf1e77afc24d76441609d331f39": "54380d5ba1072ca5a0078695164cdd3d",
".git/objects/e3/dd3f44c564687eeb3b082aa2388255512692fe": "b6c873c67af0604f777f74c47b9d9305",
".git/objects/e4/20851a57ac4749b6dbc5653c065c1f827b01a8": "e74c380e2f4cee2db1836f141e0eacc3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/c837191e06fa89372f5752564eab87bff82401": "5d99454582c72213233373325ebc67f9",
".git/objects/eb/224f9c0f1b8c8bc387ad11fac455000ae1bb95": "be04c5e09b409759e756591e9cc08c74",
".git/objects/eb/6357225b080486b2e1004c7d67f74399832dff": "8ca7f0b0dc4ec835dfb3f4ad3fbc91e1",
".git/objects/ee/5964e9be82520864a17d97b9e7afc2783971ab": "c07194f1b371247d08a07389bd3faf19",
".git/objects/ef/41579573e89d0731e5469e91d7ffa96c627a9b": "6f67df51fe0eedacac39a049768e1199",
".git/objects/ef/a838ae63de5fd6aa4bfe9039fd74878201e88c": "4adb60b1eb2de1123685115ef5bb1445",
".git/objects/f1/4920b0e35a9a2371f8694a23f62343cfd656c4": "63a28e98f74fdf76798943831367d92e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/333a7595025dae0a00615e8e39e12f2ce4c030": "edbbd954b2c3d8b9a5fc5343b317b8ee",
".git/objects/f7/8d684a7b46a503dc9f9732da45f79a1b4fd01c": "7220080499d86afb08fde62a99ee66c4",
".git/objects/f8/edf05e70e61070d08d43cecba57fc1c5a4a930": "5c64f2e607e657a53b70913a38434fe0",
".git/objects/f9/b102379484b0464ae7453ff077e69693430d06": "6bb0752da85e44b2d3e8708d144c58b7",
".git/objects/fa/5547597ad01de1ed5762a2c301cf72f459fa24": "e8667859a0dadbff03c29b2a38a75c8f",
".git/ORIG_HEAD": "4a5ca599638c4a67de496d8b1e523106",
".git/refs/heads/main": "bf97f47dab882213bc9297ed0a3d6e77",
".git/refs/remotes/origin/main": "bf97f47dab882213bc9297ed0a3d6e77",
"assets/AssetManifest.json": "6d791a1fd7ba08eb628fb61869c6fcaa",
"assets/assets/images/adeline.jpg": "20e4b26f8cac606f7bb68a57a23a84d6",
"assets/assets/images/naomi_osaka.png": "73bba983fd83cceadd0865aad227a112",
"assets/assets/images/tennis_court1.png": "4bc75a9b88e157836ddb71e82cba27c0",
"assets/assets/images/tennis_court2.jpg": "089907b170d1af133f677585519645b7",
"assets/assets/logo/add_scores.png": "dffe65a06e0847e25877be2c8ef810f0",
"assets/assets/logo/boutique.png": "0c4d1504bdcf560d6ef5cd35b533536f",
"assets/assets/logo/love_notes.png": "d7b747cd4dc02a4a851cb11c149654ad",
"assets/assets/logo/main_logo.png": "af1ee841858957321529dddace99e559",
"assets/assets/logo/my_schedule.png": "820ef360dff5106979ab092812981291",
"assets/assets/logo/play_tennis.png": "93d9002df0d9a925072c009ab17a3ada",
"assets/assets/logo/results.png": "74c213d185772a2d61625869c3786e14",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "94d7f0889f5d4b44ff1cfe91c80dd687",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"buildCopy": "10604d0a428dd621edf386ac48463d4a",
"favicon.png": "920e01e70326ff12804686006aa2b609",
"icons/Icon-192.png": "bfcf07227f0b91503971d763566ca4b5",
"icons/Icon-512.png": "62c8393b0791f8c98cf386d8c1988c07",
"index.html": "d8bc68d2d8bcfe748f56a02615353e0f",
"/": "d8bc68d2d8bcfe748f56a02615353e0f",
"main.dart.js": "01366fe732b7b2d5d86d48a3c74014ca",
"manifest.json": "bc285b1ae467d3ace39a21b43ce385a2",
"README.md": "147fd8bef738bef99206bdf3d5b0b5bc",
"ui-debug.log": "65f7db9389e9ec9ab89eb1799a8dd15b",
"version.json": "b766e645505ca813c5758ab00b87e2ad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
