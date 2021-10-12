'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "543b1e84061aa92d9958b59c8011e893",
".git/config": "86016230473a8bf64e4db66ae6b92539",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "620fa99dd348fcc3b9b55af7d470aea0",
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
".git/index": "bf6bd6aceb340ddc3a66178f325d649a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34625987e2e264f8c3a74e4a2960cfbd",
".git/logs/refs/heads/main": "006f4a1df6b91abf8b28ad1de4b13a59",
".git/logs/refs/remotes/origin/main": "c7bb36a93b8c0b67a8bbc923015580ed",
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
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1e/e1d310df303632d269200268101287651ccc3f": "079b93cfdbb02954745c4e81533d18c8",
".git/objects/22/f52d40bc51b09b5438348d62a81fc730853626": "f010936320ab4afbb8739c6593d1b7c1",
".git/objects/23/f09bd27ffa124f63d934158fa39c2a944a116e": "9ad79528a3d4734bb6bc7268926afbe7",
".git/objects/25/fa311f53d7a1add4ad6575616c2fbb1f387ac8": "ec4a4ae0491ae8d2885a1964b5c2bdcf",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/28/fbd7da94b3ee7e88b8ae47769a0aa2590143c0": "2bf354a8ed0a0f6def6e7b3f71816177",
".git/objects/29/616ce50946c0c39a9735345694e50288f7261e": "684bd2bc1ebddc79c52234546ce04a57",
".git/objects/29/6d149c74f702dc3f0e6f7ae6559ecd1eb59ebc": "62c371739c057ceafdd63323dbb1fa30",
".git/objects/2e/dd3a9065da1bc96fe8a46a11067f6ba8512841": "c3178722fd2c76ca4ae5afc2cef4657f",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/30/7b3b51603d9e12f0fbfe68c969e8a94b1fc8ea": "6531a73cb591832f3e95e5c9eb8bde43",
".git/objects/30/e4c507c232b42f260392fa2781ddf5b64a9379": "85daad7b0b7e973b7dab5e0c117b0727",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/38d1a32a0cfea10082c95e4a4c9235a2c000c3": "c2d54a284a5dd4014c4f6730f17e5924",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/37/437bcf468473938d4a431da199cec1c2366ab2": "bbe7afc71ee0e4669e6d2e72d86b466a",
".git/objects/39/64875919db64f4313712f23f40cc7e0dc322c7": "e315de7a342dc11725774fbb10d98f1c",
".git/objects/3c/2390de7d96a91c7ea7f7c56293c788c785b587": "9ddfed10cf39185477048b51951907e2",
".git/objects/3d/9061d2ccd1b2f3ba14dbc8f7c6a16ed62da00d": "c0d3439b24be560e902979cd584d3edb",
".git/objects/3f/ccf0f86c39faaf824c6487a7fd93d084d4fd55": "8ad0be2e641bc688c5ba069c721c3d37",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/42/e17d4eac50fd96e540565480515feb2d382e61": "cc57db94e1a7f365375e163cde6c6699",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/dec5beb4d27cebfe620ff22f4643e7bcd9eae4": "c50d3f704cc0d9b0c26d468a20b33a5a",
".git/objects/47/92c0e2af196e72cfb9bb66711c07626268406a": "fc4afaf96444862b76fc683cfe92d330",
".git/objects/48/5468de3a366e40f819811e64806cedffa144c8": "d00995b6fef46cf0e8f14f7330723799",
".git/objects/48/96b848abc5a74973933bdc900c3248dee981ca": "416cf345c0fa04ad367b465c81a304a9",
".git/objects/49/9193510f7ea6d67594fe32196fd9d77dba8103": "6dfc3caefaa58e4191c5e571f3e37dd3",
".git/objects/4a/a9a5014f3520fcedf0c602bab3d60d36985c10": "1e4e29b31418bcf75edcdcbcded7df14",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/53/28e12d065939a59168caa6aa75c28bff146e51": "941e880e18eeeabc386aa94d08ac5e34",
".git/objects/54/1bd4244b24588487e22461f8fb40f6166079f5": "0ebcd6edf9b299c59c6a3e7c7d97425b",
".git/objects/57/3cf176833e665c5d4f9a5aa1c94bd056eae792": "ef67fa6d235b3a0465f3c0f6f88b6375",
".git/objects/58/a567ac2e8fbb6f7eccc2733c4020e0f0afb91e": "7be0b9fa680836d025f8866125d26536",
".git/objects/5f/421c16e121ff468888db476c0c8c738523c289": "52e7e67eafdb36df72585394e59802ee",
".git/objects/60/17ef1271dc3e3ff2e64d580ec5ac53983d6718": "89c4ec60302534eefca5edefb68b04e6",
".git/objects/60/97514029ffbea510daa3885ff227d700f9e534": "f8bbd3210724351325c3d4e7c22d75a5",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/66/8d24967dc8ccfebbf90ea5c2e32b2054ba1e51": "5a1b873656e0cd28f1af3af288783765",
".git/objects/67/b6fc384da9d4117ae0e65dd10576c6ff2aeaff": "e8d1f77028f4a53c471f435b7b47aa84",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6a/7462635bdcee664652989a0edcabcbceeed85a": "9bdcf729438fd699a14a6a996b01f7de",
".git/objects/6e/6e4d7568fd44fa5e841c9e0c110077daf29f00": "4880bd8d994cd491a0e66bb0fe1fa7a4",
".git/objects/6f/59ee99587032f70577ef8d0782e5234281ac2f": "626ec358ee7fedf60f01538721858d9e",
".git/objects/6f/abbf62d014763f7f13b9347163fc4d31f83752": "231b4311298d624fc24dc3350a6e0fdd",
".git/objects/6f/f92ccdae8e2268fb3d57167eac7ac5528a783c": "ff198f339509395af07c397beaf3bedb",
".git/objects/70/0515ee8b2a65a5abebbbc64ac983f176f4c91e": "626a4e0493199c3c2a904b9cf87876d9",
".git/objects/72/c6dc07b233bea3fb8499dad80310f1cc40f694": "4ee19ed19331cb0d9b321f944a978194",
".git/objects/72/d2a760fe0ee6c850d710ea03b1deb4632bb34f": "73e54d6e1a09fa8ae24181f22346b8cd",
".git/objects/75/58ff7db539f0a9b710c8211c813bc2427be2c3": "efca20b50bc16cec0e5a1f78956879e4",
".git/objects/76/0122c52842322b9e3bdca906cb29a8b26bb23f": "a3f483e9eb994ed2fdddf83c90ea882b",
".git/objects/76/a5409edf420d8f181416c0b830ffaee8ffda67": "fe646269950c581828c2b558297bc459",
".git/objects/77/55b0ed8144e651769125eb983bb6ffec9f9ae5": "87122e81ca19e3a8236c4c2de116365b",
".git/objects/79/11735fa2d43d54e5a52141b6a1e4f882c9a0f5": "7b91b5658171155e841bfb483dd862c0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/348ffc584cd9c8f6286e3b820783fc05607806": "96db76379aa9aac5a5384040f0b13b84",
".git/objects/7a/4767ba7b502dc48fd41b7a853274e4b8e4222b": "59087f6fbf2f2ef64200b305b415cd4f",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7b/8bcc64a7232c6e5f1289045d265c6105857c2e": "c62a21581f23b07e2a66aaf0201eed6d",
".git/objects/7b/cb0e6d9c4cedec02daa3371c073a9dbe9386e9": "79aeac81883c5442a34b0b7a46630579",
".git/objects/81/ab978facfd685e840e0cff61ca1b58cd1d7a85": "d9f1d806d0f4e03e46ef29042a820d5e",
".git/objects/87/04cf037933d195c71fccb84604d081740a6a50": "d8426fe5efc14e9f651249acdc984d11",
".git/objects/8b/6415e9fe6694a37a4b31d6000eeab06f1033d5": "efefefb7f21702a1d4da4014d88ef1d4",
".git/objects/8b/8ce13cff94ff005db04fe945a031c274345c42": "661b1fc12ef42e413a2523fa1252fd1d",
".git/objects/8d/1b8ea9772594740cd59cbc127edd8ffafd8a05": "f61babd121374adcb8eb956b1de239b5",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8e/e468193fa8c57849ab7cf92b69ccafe4525f19": "1e91a814e097344144d6bff61e770674",
".git/objects/90/8814cc2435e192ef9489cdf745f13cd0e98250": "c7d6bbb091e3ac88f4feb1cc964aafcc",
".git/objects/90/f31ddf2091f370fb5446bc9b2a9c5b0585704a": "0cf80fbe9e19f6115ab439de2d5420b4",
".git/objects/90/f37b70e8c3a61ec58b18f8c2f7fea7e12af2f6": "7609ef8d86979d2e23375ca7c2eb4f0c",
".git/objects/91/d0d37ed524e44f58bcfaf849e0571c897507bc": "fb1b9e9e57c779e2d3b461ed2e791c52",
".git/objects/92/012a44329bcd09e72bbc0b877c8733347b036d": "f98a677d7b0ea8d88118ac74e1950c79",
".git/objects/92/2c5dbdd278bf96b6481d7d026686ebc3ccae7b": "73d799db835fbd36e63b02e572c44c67",
".git/objects/94/f64531ca4a6901403f704db2546d62c4be6661": "6f01f1cd34c640bb1922df7b2c531d0d",
".git/objects/95/7f3587c8bc50ca6dcf3833ad08e15a2c760631": "2b1dac680d14131f631ba1cd6f25cbc7",
".git/objects/96/a1f1be18e8c1a9d70b8bcd1fe167e2ea60d537": "2cebe09cd89efadb77aaabea116a4a0d",
".git/objects/98/6681be1493b0929ef89ca93faa8c76ca75c383": "ce2103bedeabb48995f07734124c001b",
".git/objects/99/38676ea567521f8483f31a35e019885a89e742": "42cc9de6a9758c9ac87395ef6190bb55",
".git/objects/9a/0956623c8179b2fec9e6af67c8fca0ef718c53": "60a7544819e111760f3a35d832982d87",
".git/objects/9a/47fdfa5be26b7ed97e29d9d5706ff255e1286d": "98d8c6d957308ffebeb12351da650d05",
".git/objects/9a/ea24eb69fd5a0a13efdcea61ba11811d09149d": "faf6c72860e72fd23a7d130ae83eea96",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/71ac0d28bef5990accf815708e503054ad6348": "62be11f4e16fa87352b4803247e2a0ad",
".git/objects/9c/f5ffa54a4e01a6fb8609db3268d4d583c9ba48": "58b1fdb0626b008912d60d6dd32d43bc",
".git/objects/9f/bc57639dfb8b73e06e508a128dfb6dd78ef442": "64c58254ff2a87151443b713bfa5d045",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e9e81bee769b9b7b9235c616a6f86ed7544045": "1fd3720b3447932958f6bfdf1176f6c7",
".git/objects/a3/2cf3cad7d6a4cc375fe293a5ab265112ccc9b0": "105ffe6ab9c1f8280e84524214cb416a",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/f5f455cb94bcdb1f09291f1e04839c5f15ceef": "f228d5b5952e93d0e6bc49bea115ce90",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/08871ba4744e92c4abe4b6d93269a20d46fecb": "6a2cefa7c5f413b870626f7e4b6d63e6",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/aa/8c4d122528be8137375350bd7e0ad3769ee423": "949397479fc1577c7e4be7be3f9cb22a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/20ee5298c648c30d4bb69a3caf9e133256c427": "2e4b74346e107cdf07fe08928b242b9e",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/af/db8003b46541cad93df4edb2308b8647f3b3ac": "441d5be62dca7594d2ef7ba0bc258b54",
".git/objects/b0/13b7bc33c90c993089d20536b8b9a3c3b7c150": "ba2a060e62240d043cd602bdf2e11aad",
".git/objects/b0/c4f22b9e8a12a09811c24f39fb9947139479b2": "5d82442adcd44b558fb7c8b5f3f85912",
".git/objects/b2/dd1b04bf5a2e38c3c63aa70314b6e7b09634cb": "0d86871f3f1105a99bed251a52cd9b8d",
".git/objects/b3/0c05e91864546063eb098fa3fcec7d6d4c5416": "8f6c161509529a1c3ccb834f64a8e049",
".git/objects/b5/d729935671f5a2aa579de7cba1c6fbcd5ce0b3": "b7422eb06748401a40e8fc1b99725763",
".git/objects/b8/2f6ad60e2916d8dcbcd492354cd173cd24e62c": "5fb5d1d2ed5875e73c76597dc1f0b8ab",
".git/objects/ba/6bb5b30040011ccf1362bda73c4848e01cc9b7": "7042ec7e0737a20ef755672e32dda087",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/aa15f38a2c9c83ca9682884c77cdc0ea33b6b4": "cbabde65edd6d1931bf18cdf84de0c70",
".git/objects/ba/cd4700cc1b5537b055e966710190a294439cde": "34c80013f8f70c345c6c1cdc3ae6a7e5",
".git/objects/ba/f9e3ce17bb7e5ca9c0fd3ec7c5e9e3b1066ac6": "79a7d7a7897f69acf14b804620a48960",
".git/objects/bb/1ae59012eda9b714adc878f62766a86653c5f6": "c66b603c878c5a8ee7d4f0aa7f047ef3",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bd/42c4f738b2778fd6eded909cbc22feecabf75b": "3156ed23e3caa3b93598bbfa2bdbeb5c",
".git/objects/bd/54b85da0e0eed9b499ea928dfad575f786189c": "6598b981e1ce404ebde99cb3d49f6a3e",
".git/objects/be/979190fddbd0c50ca92ffde657b4daac77ebd1": "f5991977db84dd2b14cd3593c54e544f",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c4/12207205ceb8c589cefabb16d513fedbc7daa2": "ce525ab244125dbc6ad93c2a4495b736",
".git/objects/c5/4658f0879774714b816499c140128807cd2cca": "c8bfc61b63240622173399f2255ca3b6",
".git/objects/c5/de3df61426daf680b3ec7f106783eb5513a0f3": "99ec45bad0b8315cb07d8955a3449b1c",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c7/df91cad03cc8a00a503e5878b83403c26318a4": "b45081f7a634c56be53d0a4de9f7f85e",
".git/objects/c8/7780ba0bc9c387b124e3bac2ce8d481ef0aeb0": "867d8dd7804fb9ec79eaecd40d66985b",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d2/25cf78b670bdd3acc3250128b52aef11315def": "4038035f44cb71248b37bed944f3fa6a",
".git/objects/d5/465afb22b0bad1f9736f6dc783922108a59434": "f7f95a369603ecac1d8a83d7e661bed2",
".git/objects/d5/bdd879231f9e29f23af2e4a182f0b7bdf3bbd4": "fec3ceecb4fa69aaf1107f13a7fd5ed9",
".git/objects/d5/f50e56de145f9a963cc508420c6589fe0a0ebd": "9875297b90d3e535bbec6c30e6206ef8",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d9/0784980460fc5c6102c0812ab13080b6ba4adf": "ac7fe11ab0d4ec9544b93bc3bd5ef2aa",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/dd/46b1105d19bde9ac45b3b9f2662df200fbfdb0": "a0dc828a2c63794dee07fddc286b946c",
".git/objects/dd/c6ea6087e09a4b297d9f316d43ae826b7cf625": "eb6a7fb92302f22871a271ea56afff7a",
".git/objects/de/ea452e841c229b6ff1d245e2b03bc530fb0dd4": "d95c4562bb1eef44efde813af4cc651d",
".git/objects/e1/5a9df586dea74765346519a7ee3cc755c921a9": "24628a37a7a156e126279408de5801ae",
".git/objects/e2/8646727eb8eaf1e77afc24d76441609d331f39": "54380d5ba1072ca5a0078695164cdd3d",
".git/objects/e3/dd3f44c564687eeb3b082aa2388255512692fe": "b6c873c67af0604f777f74c47b9d9305",
".git/objects/e4/20851a57ac4749b6dbc5653c065c1f827b01a8": "e74c380e2f4cee2db1836f141e0eacc3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/acc2a78263bfe6f6b979e646f09ea882eab062": "2006d8485950ae663f2d3ed2aa7339d3",
".git/objects/e5/c837191e06fa89372f5752564eab87bff82401": "5d99454582c72213233373325ebc67f9",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/eb/224f9c0f1b8c8bc387ad11fac455000ae1bb95": "be04c5e09b409759e756591e9cc08c74",
".git/objects/eb/6357225b080486b2e1004c7d67f74399832dff": "8ca7f0b0dc4ec835dfb3f4ad3fbc91e1",
".git/objects/eb/a16cf49deaf00295033916152ab37c00a9c81a": "d4ee33035437f947e8fead526074074d",
".git/objects/ee/5964e9be82520864a17d97b9e7afc2783971ab": "c07194f1b371247d08a07389bd3faf19",
".git/objects/ef/41579573e89d0731e5469e91d7ffa96c627a9b": "6f67df51fe0eedacac39a049768e1199",
".git/objects/ef/a838ae63de5fd6aa4bfe9039fd74878201e88c": "4adb60b1eb2de1123685115ef5bb1445",
".git/objects/f1/4920b0e35a9a2371f8694a23f62343cfd656c4": "63a28e98f74fdf76798943831367d92e",
".git/objects/f1/a54d0c7f89f4bc8e15bb16332910006d757ff1": "298839a0720c089f505dbe59fa9f4302",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/2c7fbcacce7b208ccd9394b5f559f8392966a2": "dd3290e638cf51e2177ee2511da4e618",
".git/objects/f6/333a7595025dae0a00615e8e39e12f2ce4c030": "edbbd954b2c3d8b9a5fc5343b317b8ee",
".git/objects/f7/8d684a7b46a503dc9f9732da45f79a1b4fd01c": "7220080499d86afb08fde62a99ee66c4",
".git/objects/f8/edf05e70e61070d08d43cecba57fc1c5a4a930": "5c64f2e607e657a53b70913a38434fe0",
".git/objects/f9/b102379484b0464ae7453ff077e69693430d06": "6bb0752da85e44b2d3e8708d144c58b7",
".git/objects/fa/5547597ad01de1ed5762a2c301cf72f459fa24": "e8667859a0dadbff03c29b2a38a75c8f",
".git/objects/fa/d6185533ef08aeed98f6cd6e0022986e58278c": "dca55ed8afddfc4b2fda39b61f46ef08",
".git/objects/fd/edef016b368eed79f2ad687d0dcdac0a5d24ba": "0c80f5ecb77f6cd036b883f3e53e2013",
".git/objects/ff/b80a1467cc56d0e248a1dcda40df725e1b0e0d": "2acdcdd6d704a6aa6af684d051115729",
".git/ORIG_HEAD": "557722dccca8a5a8205c84c93f34fddc",
".git/refs/heads/main": "557722dccca8a5a8205c84c93f34fddc",
".git/refs/remotes/origin/main": "557722dccca8a5a8205c84c93f34fddc",
"assets/AssetManifest.json": "aefbe90771d884b3e024e9baa624abad",
"assets/assets/images/adeline.jpg": "20e4b26f8cac606f7bb68a57a23a84d6",
"assets/assets/images/landing/01.png": "d0fbb408b07186efbaf22a11eca0aaf0",
"assets/assets/images/landing/02.png": "26cbe79dda13dd86d0435ffc37a291fe",
"assets/assets/images/landing/03.png": "41d05af0a96e77ef0daa9d081ab8eb1b",
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
"assets/assets/payment.html": "9e637322351c7affc36256d11d2dce2c",
"assets/assets/privacy-policy.html": "7754df5b929e90e50ba688f447779356",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3025c03c8a27130aa6679e464a3ab912",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"buildCopy": "10604d0a428dd621edf386ac48463d4a",
"favicon.png": "920e01e70326ff12804686006aa2b609",
"icons/Icon-192.png": "bfcf07227f0b91503971d763566ca4b5",
"icons/Icon-512.png": "62c8393b0791f8c98cf386d8c1988c07",
"index.html": "91421ae9c5a93eb50632e8b56429bcfa",
"/": "91421ae9c5a93eb50632e8b56429bcfa",
"main.dart.js": "f50fb1aecb4bd3efca9d736aa9655f86",
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
