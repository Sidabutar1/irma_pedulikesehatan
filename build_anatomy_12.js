const fs = require('fs');
const vm = require('vm');

// Load clinical_data.js to verify all disease IDs exist
const clinicalCode = fs.readFileSync('clinical_data.js', 'utf8');
const clinicalData = vm.runInNewContext(clinicalCode + '; DEEP_CLINICAL_DATA;');
console.log('Loaded clinical dossiers count:', Object.keys(clinicalData).length);

// Now define the new systems data
const NEW_SYSTEMS = {
  skeletal: {
    title: "1. Rangka (Kerangka)",
    latinTitle: "Systema Skeletale (206 Tulang)",
    systemBadgeColor: "bg-slate-100 text-slate-800",
    organs: [
      {
        id: "tulang-leher",
        name: "Vertebra Servikal (Tulang Leher)",
        latinName: "Vertebrae Cervicales (C1 - C7)",
        analogy: "Tulang leher ibarat pilar penyangga menara yang menahan bola seberat 5 kilogram (kepala kita) dan mampu berputar bebas ke segala arah.",
        mainFunction: "Menopang beban biomekanis kranium (kepala), melindungi sumsum tulang belakang leher dan arteri vertebralis, serta memberikan fleksibilitas gerakan menoleh, mendongak, dan menunduk.",
        healthFact: "Hampir 85% lansia di atas 60 tahun mengalami keausan bantalan leher akibat gravitasi puluhan tahun dan postur menunduk lama, yang dapat menjepit saraf leher hingga ke jemari tangan.",
        diseases: [
          {
            id: "spondilosis-servikal",
            name: "Spondilosis Servikal (Pengapuran Bantalan Leher)",
            category: "Faktor Usia/Degeneratif",
            summary: "Proses degeneratif penuaan pada diskus dan sendi faset leher yang memicu pembentukan taji tulang (osteofit) dan penyempitan saluran saraf leher.",
            symptoms: [
              "Kaku dan pegal tajam di tengkuk leher terutama saat bangun tidur",
              "Sensasi kesemutan, baal, atau ngilu menjalar dari leher ke bahu, lengan, hingga jari tangan (radikulopati)",
              "Sakit kepala tegang di area belakang kepala (servikogenik)",
              "Bunyi gemeretak ('krek-krek') saat menolehkan kepala"
            ],
            causes: [
              "Dehidrasi dan penipisan bantalan intervertebral servikal seiring bertambahnya usia",
              "Pembentukan taji tulang (osteofit) yang mempersempit foramen saraf",
              "Kebiasaan postur leher menunduk (text-neck) atau tidur dengan bantal yang terlalu tinggi"
            ],
            warningSigns: [
              "Kelemahan mendadak pada genggaman tangan (sering menjatuhkan benda/sendok)",
              "Jalan menjadi limbung atau kaku seperti robot (tanda mielopati servikal)",
              "Gangguan buang air kecil atau buang air besar yang menyertai keluhan leher"
            ],
            careTips: [
              "Gunakan bantal ergonomis berkontur leher (cervical pillow) yang menopang lekukan alami leher",
              "Lakukan senam peregangan leher lembut (chin-tuck dan rotasi perlahan) setiap pagi",
              "Hindari memutar atau membunyikan leher secara paksa (manipulasi kasar) karena berbahaya bagi saraf medula spinalis"
            ]
          }
        ]
      },
      {
        id: "tulang-punggung",
        name: "Tulang Belakang (Torakalis & Lumbalis)",
        latinName: "Columna Vertebralis (Torakalis & Lumbalis)",
        analogy: "Tulang belakang ibarat tiang utama fondasi rumah bertingkat. Jika semennya keropos (kalsium berkurang), tiang bisa retak dan ambles perlahan.",
        mainFunction: "Tiang poros penopang postur tubuh tegak, jangkar tempat melekatnya tulang rusuk dan otot punggung, serta pelindung kanalis spinalis.",
        healthFact: "Osteoporosis sering dijuluki 'pencuri senyap' (silent thief) karena pengeroposan massa tulang terjadi tanpa rasa sakit sampai tulang tiba-tiba amblas atau patah saat batuk keras.",
        diseases: [
          {
            id: "osteoporosis-vertebra",
            name: "Osteoporosis Vertebra & Fraktur Kompresi",
            category: "Faktor Usia/Degeneratif",
            summary: "Penurunan densitas massa tulang belakang drastis yang membuat korpus vertebra rapuh dan rentan amblas (fraktur kompresi) hanya karena beban harian.",
            symptoms: [
              "Nyeri punggung mendadak yang memburuk saat berdiri atau berjalan dan mereda saat berbaring",
              "Tinggi badan berkurang lebih dari 3-4 cm dibandingkan usia muda",
              "Postur tubuh makin bungkuk ke depan (punuk kyphosis / dowager's hump)",
              "Perut terasa begah karena rongga dada dan perut memendek tertekan"
            ],
            causes: [
              "Penurunan drastis hormon estrogen pascamenopause atau penurunan testosteron pada pria lanjut usia",
              "Asupan kalsium dan vitamin D harian yang tidak mencukupi selama bertahun-tahun",
              "Gaya hidup sedenter (kurang gerak) atau riwayat konsumsi obat kortikosteroid jangka panjang"
            ],
            warningSigns: [
              "Nyeri punggung bawah sangat tajam dan melumpuhkan setelah batuk keras atau terpeleset ringan",
              "Ketidakmampuan berdiri tegak mandiri disertai mati rasa di kedua tungkai",
              "Gangguan kontrol berkemih atau buang air besar mendadak"
            ],
            careTips: [
              "Cukupi asupan kalsium (1200 mg/hari) dan vitamin D3 (800-2000 IU/hari) atas anjuran dokter",
              "Berjemur sinar matahari pagi 15-20 menit dan lakukan jalan santai beban tubuh (weight-bearing exercise)",
              "Cegah risiko jatuh: pasang pegangan dinding di kamar mandi dan singkirkan karpet licin di rumah"
            ]
          }
        ]
      },
      {
        id: "tulang-panggul",
        name: "Panggul & Sendi Koksa (Pelvis)",
        latinName: "Pelvis & Articulatio Coxae",
        analogy: "Panggul ibarat mangkuk fondasi penopang tubuh bagian atas dan engsel kokoh yang menyalurkan seluruh berat badan ke kedua kaki.",
        mainFunction: "Meneruskan berat badan dari kolumna vertebralis ke ekstremitas bawah, melindungi organ pelvis (kandung kemih, organ reproduksi), dan memfasilitasi gerakan lokomosi.",
        healthFact: "Patah tulang panggul (fraktur leher paha) merupakan salah satu kondisi kegawatdaruratan geriatri tertinggi karena memicu imobilisasi lama yang meningkatkan risiko komplikasi.",
        diseases: [
          {
            id: "osteoartritis-panggul",
            name: "Osteoartritis Panggul (Coxarthrosis)",
            category: "Faktor Usia/Degeneratif",
            summary: "Keausan kronis tulang rawan pada sendi panggul (pertemuan mangkuk asetabulum dan kepala tulang paha) yang menimbulkan nyeri pangkal paha dan langkah pincang.",
            symptoms: [
              "Nyeri tumpul atau ngilu di lipat paha (selangkangan), bokong, atau paha bagian depan",
              "Sendi panggul terasa kaku berat saat pertama kali bangun dari kursi atau tempat tidur",
              "Kesulitan memakai kaus kaki, memotong kuku kaki, atau mengikat tali sepatu",
              "Jalan menjadi pincang condong ke satu sisi (gaya jalan Trendelenburg)"
            ],
            causes: [
              "Penipisan matriks kondrosit dan cairan sinovial sendi panggul akibat beban biomekanis puluhan tahun",
              "Kelebihan berat badan yang memberikan beban kompresi berlebih pada asetabulum",
              "Riwayat trauma mikro berulang atau kelainan bentuk panggul bawaan ringan"
            ],
            warningSigns: [
              "Ketidakmampuan menumpu berat badan sama sekali pada satu kaki setelah terpeleset",
              "Kaki tampak memendek dan memuntir ke arah luar (tanda curiga patah tulang panggul)",
              "Nyeri hebat terus-menerus bahkan saat beristirahat di malam hari"
            ],
            careTips: [
              "Gunakan tongkat penyangga di sisi tangan yang berlawanan dengan panggul yang sakit untuk mengurangi beban 30-50%",
              "Jaga berat badan ideal guna mengurangi beban kompresi mekanis harian sendi",
              "Lakukan latihan fleksibilitas panggul non-impak seperti bersepeda statis atau senam air"
            ]
          }
        ]
      },
      {
        id: "tulang-sendi-lutut",
        name: "Sendi Lutut (Articulatio Genu)",
        latinName: "Articulatio Genu & Patella",
        analogy: "Sendi lutut ibarat engsel pintu utama dengan bantalan busa peredam kejut (meniskus) dan oli pelumas alami (cairan sendi).",
        mainFunction: "Menahan beban hentakan langkah, melipat dan meluruskan kaki saat berjalan, jongkok, bangkit berdiri, dan menaiki tangga.",
        healthFact: "Osteoartritis sendi lutut adalah penyebab utama disabilitas gerak pada lansia di Asia Tenggara, di mana gesekan antartulang dapat memicu pembengkakan efusi lutut.",
        diseases: [
          {
            id: "osteoartritis-lutut",
            name: "Osteoartritis Lutut (Gonarthrosis)",
            category: "Peradangan",
            summary: "Peradangan dan kerusakan progresif tulang rawan hialin sendi lutut yang menyebabkan penyempitan celah sendi, krepitasi, dan deformitas bentuk kaki 'O' atau 'X'.",
            symptoms: [
              "Nyeri lutut saat menuruni tangga atau berdiri dari posisi jongkok/duduk rendah",
              "Bunyi gemeretak ('kretek-kretek') berpasir saat lutut ditekuk dan diluruskan (krepitasi)",
              "Kaku sendi lutut di pagi hari yang membaik setelah digerakkan 15-30 menit",
              "Lutut tampak membengkak, terasa hangat, atau bentuk kaki mulai melengkung menyerupai huruf O (varus)"
            ],
            causes: [
              "Degenerasi kondrosit dan penurunan produksi asam hialuronat pada cairan pelumas sendi",
              "Tekanan kompresi akibat obesitas (setiap kenaikan 1 kg berat badan memberi beban 4 kg pada lutut)",
              "Kelemahan otot paha depan (quadriceps femoris) yang gagal menyerap getaran langkah"
            ],
            warningSigns: [
              "Lutut mendadak terkunci tidak bisa ditekuk atau diluruskan sama sekali",
              "Lutut merah membara, sangat bengkak berisi cairan tegang disertai demam (curiga artritis septik)",
              "Sensasi lutut 'goyah' atau 'lolos' yang memicu risiko jatuh tersungkur"
            ],
            careTips: [
              "Latihan penguatan otot paha depan (isometric quad set / straight leg raise) tanpa membebani sendi",
              "Hindari duduk bersila di lantai, jongkok, atau naik turun tangga yang curam secara berulang",
              "Kompres hangat untuk meredakan kaku kronis, atau kompres dingin jika lutut sedang meradang bengkak"
            ]
          }
        ]
      },
      {
        id: "sendi-ekstremitas",
        name: "Sendi Perifer & Jari Kaki",
        latinName: "Articulationes Periphericae & Metatarsophalangea",
        analogy: "Sendi jari kaki ibarat engsel halus presisi. Jika timbul tumpukan kristal asam urat, rasanya seperti engsel ditaburi serpihan jarum kaca runcing.",
        mainFunction: "Mendistribusikan titik tumpu pijakan kaki saat melangkah, membantu keseimbangan dinamis, dan memfasilitasi cengkeraman jari kaki.",
        healthFact: "Serangan gout akut paling sering terjadi pada dini hari di pangkal jempol kaki (podagra) karena suhu tubuh di ujung jari kaki lebih dingin sehingga kristal urat mudah mengendap.",
        diseases: [
          {
            id: "artritis-gout",
            name: "Artritis Gout (Asam Urat Akut & Kronis)",
            category: "Gaya Hidup/Pola Makan",
            summary: "Artritis inflamasi metabolik yang dipicu oleh penumpukan kristal monosodium urat pada rongga sendi akibat kadar asam urat darah tinggi (hiperurisemia).",
            symptoms: [
              "Nyeri sendi luar biasa hebat yang muncul mendadak di tengah malam atau subuh",
              "Pangkal jempol kaki (atau pergelangan kaki/lutut) bengkak besar, merah mengilap, dan terasa panas",
              "Sendi sangat sensitif hingga tidak tahan bahkan hanya disentuh selimut tipis",
              "Muncul benjolan keras putih kapur di bawah kulit dekat sendi atau daun telinga (tofus) pada fase kronis"
            ],
            causes: [
              "Konsumsi makanan tinggi purin (jeroan, emping melinjo, seafood kepiting/kerang, kuah daging kental)",
              "Penurunan fungsi ekskresi ginjal dalam membuang asam urat lewat air seni pada usia lanjut",
              "Efek samping obat diuretik tensi (cth: hidroklorotiazid) atau dehidrasi kurang minum air"
            ],
            warningSigns: [
              "Demam menggigil tinggi disertai kemerahan yang meluas ke seluruh tungkai kaki",
              "Benjolan tofus pecah dan mengeluarkan cairan putih seperti kapur pasta gigi",
              "Serangan gout terjadi berulang lebih dari 3 kali dalam setahun atau menyerang banyak sendi sekaligus"
            ],
            careTips: [
              "Banyak minum air putih minimal 2 liter sehari guna membantu ginjal membilas asam urat",
              "Batasi ketat jeroan, ekstrak kaldu kental, tape ketan/alkohol, dan makanan manis tinggi sirup jagung fruktosa",
              "Rutin kontrol kadar asam urat darah dan minum obat penurun urat (allopurinol/febuxostat) sesuai resep dokter"
            ]
          }
        ]
      }
    ]
  },

  cardiovascular: {
    title: "3. Peredaran Darah (Kardiovaskular)",
    latinTitle: "Systema Cardiovasculare (Cor & Vasa Sanguinea)",
    systemBadgeColor: "bg-red-100 text-red-800",
    organs: [
      {
        id: "jantung-koroner",
        name: "Otot & Arteri Koroner Jantung",
        latinName: "Myocardium & Arteriae Coronariae",
        analogy: "Arteri koroner ibarat pipa selang bensin khusus yang menyuplai bahan bakar ke mesin pompa jantung itu sendiri agar tidak mogok.",
        mainFunction: "Memberikan pasokan darah segar kaya oksigen dan nutrisi langsung ke otot jantung (miokardium) yang bekerja non-stop 100.000 detakan sehari.",
        healthFact: "Pada orang tua dan penderita diabetes, serangan jantung sering kali TIDAK ditandai nyeri dada menusuk, melainkan hanya rasa lemas mendadak, keringat dingin, atau sesak napas (silent ischemia).",
        diseases: [
          {
            id: "penyakit-jantung-koroner",
            name: "Penyakit Jantung Koroner (PJK & Serangan Jantung)",
            category: "Gaya Hidup/Pola Makan",
            summary: "Penyempitan atau penyumbatan pembuluh darah utama penyuplai otot jantung akibat tumpukan plak kolesterol (aterosklerosis) yang memicu iskemia miokard.",
            symptoms: [
              "Rasa dada tertekan berat, terhimpit benda berat, atau rasa panas terbakar di tengah dada (angina)",
              "Nyeri dada menjalar ke bahu kiri, leher, rahang, atau tembus hingga ke punggung belakang",
              "Napas tersengal disertai keringat dingin mengucur deras walau sedang istirahat",
              "Gejala atipikal lansia: mendadak lemas lunglai, mual lambung hebat, atau pusing melayang tanpa nyeri dada"
            ],
            causes: [
              "Penumpukan plak ateroma kolesterol LDL yang mengalami kalsifikasi pada dinding lumen koroner",
              "Hipertensi menahun yang merusak lapisan endotel pembuluh darah jantung",
              "Riwayat merokok, diabetes mellitus yang tidak terkontrol, serta faktor genetika keluarga"
            ],
            warningSigns: [
              "Nyeri dada tertekan berat tidak kunjung hilang lebih dari 15-20 menit meski sudah istirahat",
              "Lansia tiba-tiba pingsan (sinkop) atau bibir membiru disertai sesak napas berat",
              "Irama detak jantung terasa sangat cepat, kacau, atau melemah drastis"
            ],
            careTips: [
              "Segera bawa ke UGD terdekat dalam 'golden hour' (di bawah 12 jam) bila curiga serangan jantung",
              "Konsumsi obat pengencer darah (aspirin/clopidogrel) dan penurun kolesterol (statin) tepat waktu sesuai resep",
              "Terapkan diet rendah lemak jenuh/trans, kurangi garam, dan berhenti merokok total"
            ]
          }
        ]
      },
      {
        id: "ventrikel-jantung",
        name: "Ventrikel Kiri Jantung (Ruang Pompa Utama)",
        latinName: "Ventriculus Sinister Cordis",
        analogy: "Ventrikel kiri ibarat mesin pompa jet air berkekuatan tinggi yang mendorong air bersih naik ke seluruh penjuru gedung bertingkat.",
        mainFunction: "Menerima darah kaya oksigen dari atrium kiri lalu memompanya dengan kontraksi kuat melewati katup aorta menuju seluruh jaringan tubuh.",
        healthFact: "Seiring usia, dinding ventrikel kiri lansia cenderung menebal dan kaku (gagal jantung diastolik/HFpEF), sehingga rongga jantung sulit terisi penuh dan darah terbendung balik ke paru-paru.",
        diseases: [
          {
            id: "gagal-jantung",
            name: "Gagal Jantung Kongestif Geriatri (HFpEF & HFrEF)",
            category: "Faktor Usia/Degeneratif",
            summary: "Ketidakmampuan otot ventrikel memompa atau mengisi darah secara adekuat untuk memenuhi kebutuhan metabolik tubuh, menyebabkan bendungan cairan di paru dan tungkai.",
            symptoms: [
              "Sesak napas saat berjalan datar atau beraktivitas ringan yang sebelumnya mampu dilakukan",
              "Sesak napas saat berbaring telentang, sehingga butuh tidur dengan ditopang 2-3 bantal tinggi (ortopnea)",
              "Terbangun tengah malam karena sesak napas seperti tercekik air (paroxysmal nocturnal dyspnea)",
              "Kedua punggung kaki dan pergelangan kaki bengkak (edema) dan cekung bila ditekan jari"
            ],
            causes: [
              "Hipertensi lama yang memaksa ventrikel memompa melawan resistensi tinggi sehingga dindingnya kaku",
              "Kerusakan jaringan otot jantung pascaserangan jantung koroner sebelumnya",
              "Kekakuan serat kolagen miokardium terkait proses penuaan degeneratif intrinsik"
            ],
            warningSigns: [
              "Kenaikan berat badan mendadak lebih dari 2 kg dalam 2-3 hari (tanda retensi cairan hebat)",
              "Batuk berbusa merah muda (pink frothy sputum) disertai napas megap-megap (edema paru akut)",
              "Ujung jari dan bibir pucat membiru dingin disertai penurunan kesadaran"
            ],
            careTips: [
              "Batasi ketat asupan garam dapur (maksimal setengah sendok teh per hari) dan pantau jumlah minum cairan",
              "Timbang berat badan setiap pagi setelah buang air kecil untuk mendeteksi penumpukan cairan dini",
              "Rutin minum obat diuretik dan ACE-inhibitor/ARNI sesuai instruksi dokter spesialis jantung"
            ]
          }
        ]
      },
      {
        id: "sistem-konduksi-jantung",
        name: "Sistem Listrik Jantung (Nodus SA & Atrium)",
        latinName: "Systema Conducens Cordis & Atrium Cordis",
        analogy: "Nodus SA ibarat dirigen orkestra atau busi listrik yang memercikkan ritme detak jantung agar ketukannya stabil 60 sampai 100 kali per menit.",
        mainFunction: "Menghasilkan impuls bioelektrik terkoordinasi secara ritmis dari nodus sinoatrial melewati nodus AV menuju serat Purkinje untuk memicu detak jantung.",
        healthFact: "Fibrilasi atrium adalah gangguan irama jantung nomor satu pada lansia. Atrium tidak berdenyut teratur melainkan hanya bergetar kacau, memicu pembentukan bekuan darah yang dapat lepas ke otak memicu stroke.",
        diseases: [
          {
            id: "fibrilasi-atrium",
            name: "Fibrilasi Atrium (Aritmia Detak Jantung Kacau)",
            category: "Faktor Usia/Degeneratif",
            summary: "Gangguan irama listrik bilik atas jantung (atrium) yang bergetar cepat dan kacau tanpa koordinasi, menyebabkan detak ventrikel menjadi tidak teratur.",
            symptoms: [
              "Sensasi jantung berdebar kencang, berdegup tidak beraturan seperti burung mengepakkan sayap di dada",
              "Rasa melayang, limbung, atau kliyengan terutama saat bangkit berdiri",
              "Cepat lelah dan stamina turun drastis saat berjalan",
              "Bisa tanpa gejala berdebar sama sekali pada lansia (hanya terdeteksi saat periksa tensi atau EKG)"
            ],
            causes: [
              "Fibrosis dan degenerasi sel-sel konduksi listrik nodus SA akibat proses penuaan",
              "Peregangan dinding atrium kiri akibat hipertensi lama atau penyakit katup jantung mitral",
              "Penyakit tiroid, infeksi paru akut, atau gangguan keseimbangan elektrolit kalium/magnesium"
            ],
            warningSigns: [
              "Kelumpuhan separuh badan mendadak atau bicara pelo (tanda bekuan darah lepas memicu stroke emboli)",
              "Denyut nadi teraba sangat cepat di atas 130 kali/menit disertai nyeri dada dan sesak napas",
              "Pingsan tiba-tiba (hilang kesadaran)"
            ],
            careTips: [
              "Pelajari teknik MENARI (MEnraba NAdi SendiRI) di pergelangan tangan untuk mendeteksi ketidakteraturan ketukan",
              "Konsumsi obat antikoagulan (pengencer darah DOAC) secara disiplin untuk mencegah stroke bekuan darah",
              "Hindari konsumsi kafein berlebih, rokok, dan alkohol yang dapat memicu ledakan aritmia"
            ]
          }
        ]
      },
      {
        id: "pembuluh-arteri",
        name: "Aorta & Arteri Sistemik",
        latinName: "Aorta & Arteriae Systemicae",
        analogy: "Arteri ibarat pipa elastis bertekanan tinggi. Di usia muda lentur seperti selang karet baru, di usia tua mengeras seperti pipa paralon kaku.",
        mainFunction: "Mengalirkan darah bertekanan tinggi dari jantung menuju seluruh organ tubuh dan meredam lonjakan tekanan sistolik.",
        healthFact: "Kekakuan dinding arteri pada lansia menyebabkan fenomena Hipertensi Sistolik Terisolasi, di mana tensi atas tinggi (>150 mmHg) namun tensi bawah normal atau rendah (<70 mmHg).",
        diseases: [
          {
            id: "hipertensi-geriatri",
            name: "Hipertensi Geriatri & Kekakuan Arteri",
            category: "Faktor Usia/Degeneratif",
            summary: "Peningkatan tekanan darah persisten pada lansia yang didorong oleh hilangnya elastisitas elastin dinding pembuluh arteri besar dan peningkatan resistensi vaskular perifer.",
            symptoms: [
              "Sering kali tanpa keluhan sama sekali (dijuluki 'silent killer')",
              "Pusing berputar atau rasa tegang kaku di pangkal leher belakang",
              "Mudah lelah, telinga berdenging (tinnitus), atau pandangan kabur sesaat",
              "Tekanan darah sistolik di atas 140 mmHg saat diukur dalam kondisi tenang"
            ],
            causes: [
              "Kekakuan dinding aorta akibat hilangnya serat elastin dan bertambahnya jaringan kolagen fibrotik",
              "Peningkatan kepekaan ginjal lansia terhadap asupan garam dapur",
              "Penurunan sensitivitas refleks baroreseptor leher dalam menstabilkan tekanan darah"
            ],
            warningSigns: [
              "Tekanan darah melonjak di atas 180/110 mmHg (krisis hipertensi)",
              "Sakit kepala hebat disertai muntah menyembur, mimisan deras, atau penglihatan ganda",
              "Nyeri dada tajam merobek atau kelemahan anggota gerak"
            ],
            careTips: [
              "Pantau tekanan darah mandiri di rumah secara rutin dengan tensimeter digital terkalibrasi",
              "Terapkan pola makan DASH (kaya sayur, buah, biji-bijian, dan rendah natrium garam)",
              "Bangkit berdiri secara perlahan dari tempat tidur untuk mencegah pusing penurunan tensi mendadak (hipotensi ortostatik)"
            ]
          }
        ]
      },
      {
        id: "pembuluh-vena",
        name: "Pembuluh Balik (Vena Dalam Tungkai)",
        latinName: "Venae Profundae Extremitatis Inferioris",
        analogy: "Vena tungkai ibarat pipa drainase bawah tanah yang dilengkapi katup satu arah agar aliran air tidak jatuh merembes balik ke bawah.",
        mainFunction: "Mengalirkan darah deoksigenasi dari tungkai kaki kembali ke atas menuju jantung kanan melawan gaya gravitasi bumi.",
        healthFact: "Tirah baring lama di kasur atau duduk statis di kursi roda membuat aliran darah vena melambat dan rentan menggumpal membentuk bekuan darah (thrombus).",
        diseases: [
          {
            id: "trombosis-dvt",
            name: "Trombosis Vena Dalam (DVT & Emboli Paru)",
            category: "Faktor Usia/Degeneratif",
            summary: "Pembentukan bekuan darah (trombus) di dalam pembuluh darah vena dalam tungkai (paha atau betis) yang berisiko lepas dan menyumbat arteri paru-paru.",
            symptoms: [
              "Satu sisi betis atau paha mendadak bengkak lebih besar daripada sisi lainnya (asimetris)",
              "Kulit betis terasa hangat, tegang, dan memerah mengilat",
              "Nyeri tumpul atau rasa kram hebat pada betis saat menapakkan kaki",
              "Nyeri bertambah saat telapak kaki ditarik ke atas ke arah lutut (tanda Homan positif)"
            ],
            causes: [
              "Imobilisasi lama (berbaring sakit, pascaoperasi tulang panggul, atau perjalanan jauh berjam-jam)",
              "Perubahan faktor pembekuan darah lansia yang menjadi lebih kental (hiperkoagulabilitas)",
              "Kerusakan katup vena dalam atau dehidrasi berat yang memperlambat sirkulasi darah"
            ],
            warningSigns: [
              "Sesak napas mendadak hebat tanpa sebab yang jelas (tanda bekuan darah lepas menyumbat paru / emboli paru)",
              "Nyeri dada tajam menusuk yang memburuk saat menarik napas dalam",
              "Batuk berdarah, denyut jantung berdegup kencang, dan pingsan"
            ],
            careTips: [
              "Lakukan gerakan memompa pergelangan kaki (ankle pumping) secara teratur bagi lansia yang tirah baring",
              "Gunakan stoking kompresi elastis medis sesuai anjuran dokter",
              "Jaga hidrasi cairan cukup dan hindari duduk menekuk kaki terlalu lama tanpa jeda bergerak"
            ]
          }
        ]
      }
    ]
  },

  endocrine: {
    title: "7. Sistem Endokrin",
    latinTitle: "Systema Endocrinum (Glandulae Hormonales)",
    systemBadgeColor: "bg-teal-100 text-teal-800",
    organs: [
      {
        id: "kelenjar-tiroid",
        name: "Kelenjar Tiroid (Glandula Thyroidea)",
        latinName: "Glandula Thyroidea",
        analogy: "Tiroid ibarat pedal gas pembakaran mesin tubuh. Mengatur seberapa cepat atau lambat sel-sel membakar energi dan menghasilkan panas.",
        mainFunction: "Memproduksi hormon tiroksin (T4) dan triiodotironin (T3) untuk mengendalikan laju metabolisme basal, suhu tubuh, detak jantung, dan fungsi pencernaan.",
        healthFact: "Hipotiroidisme pada lansia sering dijuluki 'penyamar ulung' karena gejalanya (lemas, pelupa, sembelit, kulit kering) sering disalahartikan sebagai tanda ketuaan wajar.",
        diseases: [
          {
            id: "hipotiroidisme-geriatri",
            name: "Hipotiroidisme Geriatri (Penurunan Hormon Tiroid)",
            category: "Faktor Usia/Degeneratif",
            summary: "Kondisi defisiensi hormon tiroid akibat atrofi kelenjar tiroid atau tiroiditis autoimun (Hashimoto) yang memperlambat metabolisme seluruh tubuh.",
            symptoms: [
              "Tubuh terasa sangat lamban, lemas berkepanjangan, dan mudah kedinginan saat orang lain kepanasan",
              "Daya ingat menurun drastis, bicara lambat, dan sulit konsentrasi (menyerupai gejala demensia)",
              "Kulit sangat kering, rambut rontok, suara serak parau, dan wajah tampak sembab",
              "Sembelit kronis yang sulit diatasi dan kenaikan berat badan tanpa banyak makan"
            ],
            causes: [
              "Penyakit autoimun tiroiditis Hashimoto yang merusak jaringan folikel tiroid secara bertahap",
              "Atrofi dan fibrosis kelenjar tiroid akibat proses penuaan degeneratif intrinsik",
              "Riwayat operasi pengangkatan tiroid atau terapi radiasi leher di masa lalu"
            ],
            warningSigns: [
              "Suhu tubuh turun drastis di bawah 35°C (hipotermia berat) disertai kantuk luar biasa",
              "Denyut jantung melambat ekstrem di bawah 45 kali/menit (bradikardia berat)",
              "Koma miksedema (penurunan kesadaran darurat akibat kadar hormon tiroid anjlok)"
            ],
            careTips: [
              "Pemeriksaan darah berkala kadar TSH sensitif dan Free T4 di laboratorium",
              "Konsumsi obat hormon pengganti levotiroksin secara rutin saat perut kosong di pagi hari",
              "Gunakan pakaian hangat dan pelembap kulit untuk mencegah kulit lansia pecah-pecah"
            ]
          }
        ]
      },
      {
        id: "kelenjar-adrenal",
        name: "Kelenjar Adrenal (Glandula Suprarenalis)",
        latinName: "Glandulae Suprarenales",
        analogy: "Adrenal ibarat generator darurat penyedia hormon stres (kortisol) agar tubuh tetap kuat bertahan saat terserang infeksi, sakit, atau dehidrasi.",
        mainFunction: "Memproduksi hormon kortisol (glukokortikoid) untuk regulasi glukosa dan stres, aldosteron untuk keseimbangan garam dan tekanan darah, serta androgen adrenal.",
        healthFact: "Banyak lansia mengalami kegagalan adrenal mendadak karena kebiasaan mengonsumsi jamu pegal linu tanpa izin edar yang ternyata dicampur obat deksametason/steroid dosis tinggi.",
        diseases: [
          {
            id: "insufisiensi-adrenal",
            name: "Insufisiensi Adrenal & Krisis Addisonian",
            category: "Faktor Usia/Degeneratif",
            summary: "Ketidakmampuan korteks adrenal memproduksi hormon kortisol dan aldosteron yang cukup, memicu gangguan elektrolit parah dan syok hipotensi.",
            symptoms: [
              "Rasa lelah ekstrem yang melumpuhkan, badan tidak bertenaga sama sekali",
              "Tekanan darah sangat rendah (hipotensi) disertai pusing berkunang-kunang hebat saat bangkit berdiri",
              "Nafsu makan hilang total, mual muntah, dan berat badan merosot drastis",
              "Sensasi menginginkan makanan asin (salt craving) akibat kadar natrium darah anjlok"
            ],
            causes: [
              "Penghentian mendadak konsumsi obat steroid (prednison/deksametason) atau jamu kimiawi pereda nyeri",
              "Kerusakan autoimun pada korteks kelenjar adrenal (penyakit Addison)",
              "Infeksi tuberkulosis adrenal atau metastasis tumor ke kelenjar suprarenal"
            ],
            warningSigns: [
              "Tekanan darah anjlok drastis tidak merespons infus cairan biasa (syok krisis adrenal)",
              "Nyeri perut melilit hebat menyerupai radang usus buntu disertai muntah hebat",
              "Penurunan kesadaran mendadak dengan hasil laboratorium natrium sangat rendah dan kalium tinggi"
            ],
            careTips: [
              "JANGAN PERNAH menghentikan obat steroid secara mendadak tanpa panduan tapering-off dari dokter",
              "Waspadai jamu instan atau serbuk tanpa nomor izin BPOM resmi yang mengklaim sembuhkan pegal linu instan",
              "Bawa kartu peringatan medis steroid bagi pasien yang menjalani terapi sulih hormon kortikosteroid"
            ]
          }
        ]
      },
      {
        id: "kelenjar-pankreas-endokrin",
        name: "Pulau Langerhans Pankreas",
        latinName: "Insulae Pancreaticae (Cellulae Beta)",
        analogy: "Pulau Langerhans ibarat gerbang penjaga gudang gula yang memproduksi kunci 'insulin' agar gula darah bisa masuk diserap sel dan tidak menumpuk di darah.",
        mainFunction: "Memproduksi hormon insulin dari sel beta untuk menurunkan glukosa darah dan hormon glukagon dari sel alfa untuk menaikkan glukosa darah bila lapar.",
        healthFact: "Pada usia lanjut, sel-sel tubuh menjadi kurang peka terhadap insulin (resistensi insulin) dan pelepasan insulin melambat, sehingga lonjakan gula darah pascamakan sering tidak disadari.",
        diseases: [
          {
            id: "diabetes-tipe-2",
            name: "Diabetes Melitus Tipe 2 Geriatri",
            category: "Gaya Hidup/Pola Makan",
            summary: "Gangguan metabolisme karbohidrat kronis yang ditandai dengan hiperglikemia akibat kombinasi resistensi insulin perifer dan penurunan sekresi insulin pankreas.",
            symptoms: [
              "Sering buang air kecil di malam hari (nokturia) hingga mengganggu tidur",
              "Mudah haus dan sering merasa lapar walau sudah cukup makan",
              "Luka di kaki lambat sembuh atau sering gatal di area lipatan paha",
              "Pandangan mata buram berkabut dan kesemutan tebal di ujung jari kaki"
            ],
            causes: [
              "Penurunan massa otot (sarkopenia) yang mengurangi tempat penyerapan glukosa terbesar tubuh",
              "Pola makan tinggi karbohidrat olahan sederhana dan gaya hidup kurang gerak selama puluhan tahun",
              "Faktor penuaan degeneratif sel beta pulau Langerhans pankreas"
            ],
            warningSigns: [
              "Gula darah melonjak di atas 600 mg/dL disertai dehidrasi berat dan linglung (koma hiperosmolar HHS)",
              "Keringat dingin gemetaran akibat gula darah drop di bawah 70 mg/dL (hipoglikemia berbahaya)",
              "Luka koreng hitam pada jari kaki yang baal tidak terasa sakit (ulkus diabetik gangren)"
            ],
            careTips: [
              "Pantau gula darah puasa dan HbA1c secara berkala (target HbA1c lansia disesuaikan 7.5-8.0%)",
              "Periksa telapak kaki setiap hari dengan cermin untuk memastikan tidak ada lecet atau luka kecil",
              "Konsumsi makanan dengan indeks glikemik rendah dan tetap aktif jalan kaki ringan setelah makan"
            ]
          }
        ]
      }
    ]
  },

  excretory: {
    title: "8. Ekskresi / Urinaria",
    latinTitle: "Systema Urinarium (Renes & Tractus Urinarius)",
    systemBadgeColor: "bg-blue-100 text-blue-800",
    organs: [
      {
        id: "ginjal",
        name: "Ginjal Bilateral (Ren Dextra & Sinistra)",
        latinName: "Renes (Ginjal Kanan & Kiri)",
        analogy: "Ginjal ibarat pabrik penyaring air limbah super canggih yang membersihkan 180 liter darah setiap hari dan membuang ampas racun lewat urine.",
        mainFunction: "Filtrasi limbah nitrogen (ureum, kreatinin), mengatur keseimbangan cairan dan elektrolit tubuh, memproduksi hormon eritropoietin pembentuk darah, dan mengontrol tekanan darah.",
        healthFact: "Laju penyaringan ginjal lansia (eGFR) turun alami sekitar 1 mL/menit per tahun setelah usia 40 tahun, membuat lansia sangat peka terhadap dehidrasi dan efek samping obat pereda nyeri.",
        diseases: [
          {
            id: "gagal-ginjal-kronis",
            name: "Penyakit Ginjal Kronis (PGK Geriatri)",
            category: "Faktor Usia/Degeneratif",
            summary: "Kerusakan struktural dan penurunan fungsi filtrasi ginjal progresif yang berlangsung lebih dari 3 bulan, memicu penumpukan racun uremik di dalam darah.",
            symptoms: [
              "Kelopak mata sembab di pagi hari dan kedua tungkai kaki membengkak",
              "Mual, nafsu makan hilang, lidah terasa pahit berasa logam (uremic fetor)",
              "Kulit terasa sangat gatal, kering pucat kekuningan, dan mudah memar",
              "Frekuensi buang air kecil berkurang drastis atau air seni berbusa tebal"
            ],
            causes: [
              "Kerusakan pembuluh darah glomerulus akibat diabetes mellitus dan hipertensi menahun",
              "Kebiasaan mengonsumsi obat anti-nyeri NSAID (asam mefenamat, diklofenak) tanpa kontrol dokter",
              "Riwayat batu ginjal atau pembesaran prostat yang menyumbat aliran kemih menahun"
            ],
            warningSigns: [
              "Napas tersengal cepat dan berbau pesing disertai penurunan kesadaran (ensefalopati uremik)",
              "Kadar kalium darah melonjak tinggi yang memicu detak jantung berhenti mendadak",
              "Sesak napas berat saat berbaring karena paru-paru terendam cairan (edema paru)"
            ],
            careTips: [
              "Kendalikan tekanan darah (<130/80 mmHg) dan kadar gula darah secara ketat",
              "Hindari konsumsi jamu kimiawi dan obat pereda nyeri anti-inflamasi non-steroid sembarangan",
              "Konsultasikan diet rendah protein dan pembatasan asupan kalium/fosfat dengan dokter nefrologi"
            ]
          }
        ]
      },
      {
        id: "ureter",
        name: "Saluran Ureter Bilateral",
        latinName: "Ureteres (Saluran Kemih Atas)",
        analogy: "Ureter ibarat pipa pembuangan air dari tangki penyaring ginjal menuju ember penampungan kandung kemih di bawah.",
        mainFunction: "Menyalurkan cairan air seni yang diproduksi ginjal menuju kandung kemih melalui kontraksi gelombang peristaltik otot polos ureter.",
        healthFact: "Batu ginjal yang meluncur turun dan tersangkut di lumen sempit ureter memicu kontraksi kejang otot polos yang menimbulkan nyeri kolik ureter luar biasa melilit.",
        diseases: [
          {
            id: "batu-saluran-kemih",
            name: "Batu Saluran Kemih (Urolithiasis & Kolik Ureter)",
            category: "Gaya Hidup/Pola Makan",
            summary: "Pembentukan endapan mineral keras (kalsium oksalat, asam urat) yang tersangkut di saluran ureter dan menyumbat aliran urine dari ginjal.",
            symptoms: [
              "Nyeri pinggang sangat hebat melilit hilang timbul yang menjalar ke perut bawah hingga selangkangan (kolik)",
              "Air seni berwarna keruh kemerahan atau bercampur darah (hematuria)",
              "Mual muntah hebat dan gelisah tidak bisa menemukan posisi duduk yang nyaman",
              "Sensasi ingin kencing terus-menerus namun yang keluar hanya beberapa tetes"
            ],
            causes: [
              "Kurang minum air putih yang menyebabkan air seni menjadi sangat pekat (supersaturasi urin)",
              "Asupan tinggi garam, oksalat (teh pekat, kacang-kacangan berlebih), atau asam urat tinggi",
              "Imobilisasi lama pada lansia yang memicu pelepasan kalsium berlebih dari tulang ke urin"
            ],
            warningSigns: [
              "Nyeri pinggang hebat disertai demam tinggi menggigil (tanda infeksi ginjal tersumbat / urosepsis)",
              "Air seni berhenti keluar sama sekali (anuria total akibat sumbatan bilateral)",
              "Lansia tampak sangat lemas mengigau dengan tekanan darah menurun"
            ],
            careTips: [
              "Cukupi asupan cairan dengan minum air putih bening minimal 2 - 2,5 liter per hari",
              "Batasi konsumsi garam dapur berlebih dan kurangi minuman bersoda/berkafein",
              "Segera periksakan USG saluran kemih bila merasakan nyeri pinggang berulang"
            ]
          }
        ]
      },
      {
        id: "kandung-kemih",
        name: "Kandung Kemih (Vesika Urinaria)",
        latinName: "Vesica Urinaria",
        analogy: "Kandung kemih ibarat balon penampung elastis berdinding otot yang bisa membesar menampung air dan mengecil memeras air keluar.",
        mainFunction: "Menampung 300-500 mL urine secara temporer tanpa bocor, lalu mengosongkannya secara tuntas melalui koordinasi otot detrusor saat berkemih.",
        healthFact: "Pada usia lanjut, elastisitas dinding kandung kemih berkurang dan refleks sarafnya menjadi terlalu peka, memicu rasa ingin pipis mendadak yang tidak tertahankan (beser/OAB).",
        diseases: [
          {
            id: "beser-inkontinensia",
            name: "Kandung Kemih Overaktif & Inkontinensia Urin",
            category: "Faktor Usia/Degeneratif",
            summary: "Ketidakmampuan menahan keluarnya air kemih secara sadar akibat kontraksi otot detrusor kandung kemih yang hiperaktif atau kelemahan sfingter panggul.",
            symptoms: [
              "Rasa ingin buang air kecil mendadak yang sangat kuat dan sering ngompol sebelum sampai toilet (urge incontinence)",
              "Air kencing merembes keluar saat batuk, bersin, tertawa, atau mengangkat barang (stress incontinence)",
              "Frekuensi kencing sangat sering (lebih dari 8 kali di siang hari dan lebih dari 2 kali saat tidur malam)",
              "Rasa tidak puas atau tidak tuntas setelah buang air kecil"
            ],
            causes: [
              "Pelemahan otot dasar panggul pascamelahirkan pada wanita atau efek pascaoperasi prostat pada pria",
              "Kekakuan dinding detrusor kandung kemih dan neuropati terkait penuaan atau diabetes",
              "Efek samping konsumsi obat diuretik atau infeksi saluran kemih ringan yang tidak bergejala"
            ],
            warningSigns: [
              "Sama sekali tidak bisa buang air kecil disertai perut bawah membesar kencang (retensi urin akut)",
              "Air seni berbau busuk tajam, berdarah, atau terasa panas membakar",
              "Keluarnya urin memicu iritasi luka kulit dan lecet di lipatan paha lansia"
            ],
            careTips: [
              "Rutin lakukan latihan senam Kegel untuk memperkuat otot dasar panggul penahan urin",
              "Jadwalkan waktu berkemih setiap 2-3 jam sekali (bladder training) tanpa menunggu kebelet hebat",
              "Hindari minum air terlalu banyak menjelang jam tidur malam dan kurangi konsumsi kopi/teh pekat"
            ]
          }
        ]
      },
      {
        id: "saluran-kemih-bawah",
        name: "Saluran Uretra & Muara Kemih",
        latinName: "Urethra",
        analogy: "Uretra ibarat pipa keran pembuangan akhir yang dilengkapi cincin karet penahan agar air tidak merembes bocor keluar sembarangan.",
        mainFunction: "Saluran akhir keluarnya air kencing dari kandung kemih menuju luar tubuh, serta mempertahankan barier pertahanan terhadap invasi kuman dari luar.",
        healthFact: "Pada pria lansia uretra rentan terhimpit pembesaran prostat, sedangkan pada wanita lansia uretra rentan kemasukan bakteri karena jaraknya yang sangat pendek ke anus.",
        diseases: [
          {
            id: "striktur-uretra",
            name: "Striktur Uretra (Penyempitan Saluran Kencing)",
            category: "Peradangan",
            summary: "Penyempitan lumen saluran kencing akibat terbentuknya jaringan parut fibrotik pascaradang atau trauma kateterisasi.",
            symptoms: [
              "Pancaran air seni mengecil, membelah dua, atau menetes lemah",
              "Butuh mengejan lama dan waktu kencing menjadi sangat panjang",
              "Rasa perih panas saat air kemih melewati saluran uretra",
              "Sering timbul infeksi saluran kemih berulang"
            ],
            causes: [
              "Riwayat pemasangan selang kateter urin jangka panjang di rumah sakit",
              "Peradangan kronis uretra (uretritis) atau riwayat cedera jatuh mengangkang",
              "Jaringan parut pascaoperasi prostat atau saluran kemih"
            ],
            warningSigns: [
              "Aliran kemih tersumbat total dan kandung kemih mengeras seperti batu di bawah pusar",
              "Demam tinggi menggigil disertai nanah yang keluar dari muara saluran kencing",
              "Rembesan urin ke kantung buah zakar (ekstravasasi urin)"
            ],
            careTips: [
              "Segera periksakan diri ke dokter spesialis urologi bila pancaran kencing mulai mengecil",
              "Hindari menahan buang air kecil terlalu lama yang meningkatkan tekanan saluran kemih",
              "Jaga kebersihan area muara kemih dengan membilas air bersih mengalir"
            ]
          },
          {
            id: "isk-pria",
            name: "Infeksi Saluran Kemih Pria Geriatri",
            category: "Infeksi",
            summary: "Kolonisasi bakteri patogen pada traktus urinarius pria lanjut usia yang umumnya bersifat komplikasi akibat sumbatan prostat atau kateter.",
            symptoms: [
              "Anyang-anyangan dan rasa panas terbakar saat berkemih",
              "Air seni keruh, berbau tajam menyengat, atau berwarna kemerahan",
              "Nyeri tumpul di area panggul bawah atau di belakang kantung zakar",
              "Gejala khas lansia: mendadak bingung linglung (delirium) tanpa disertai demam tinggi"
            ],
            causes: [
              "Sisa air seni yang tertahan di kandung kemih akibat himpitan prostat (stasis urin)",
              "Penggunaan selang kateter urin menetap yang menjadi sarang biofilm kuman E. coli",
              "Penurunan daya tahan tubuh lokal mukosa urogenital di usia lanjut"
            ],
            warningSigns: [
              "Demam tinggi menggigil disertai tekanan darah drop (urosepsis membahayakan nyawa)",
              "Lansia mengigau hebat, tidak mengenali keluarga, atau mengantuk berat",
              "Nyeri pinggang tajam menyertai keluhan anyang-anyangan (infeksi naik ke ginjal)"
            ],
            careTips: [
              "Pastikan lansia minum air putih cukup agar aliran urin membilas kuman secara alami",
              "Ganti selang kateter urine secara berkala dengan teknik steril di fasilitas kesehatan",
              "Tuntaskan pengobatan antibiotik sesuai resep dokter spesialis urologi/geriatri"
            ]
          }
        ]
      }
    ]
  },

  immune: {
    title: "9. Sistem Kekebalan (Imun)",
    latinTitle: "Systema Immunitatis (Pertahanan Tubuh)",
    systemBadgeColor: "bg-emerald-100 text-emerald-800",
    organs: [
      {
        id: "sumsum-tulang-imun",
        name: "Sumsum Tulang & Sel Imun Sistemik",
        latinName: "Medulla Ossium Rubra & Systema Immunitatis",
        analogy: "Sumsum tulang ibarat barak akademi militer yang melahirkan pasukan tentara sel darah putih (leukosit, sel B, sel T) untuk menjaga keamanan tubuh.",
        mainFunction: "Pusat hematopoiesis dan produksi sel induk limfoid dan mieloid, pembentukan antibodi pelindung, dan eliminasi patogen mikroba.",
        healthFact: "Penuaan sistem imun (immunosenescence) menurunkan produksi sel T baru dan antibodi berkualitas tinggi, sehingga respon lansia terhadap infeksi baru atau vaksin menjadi lebih lambat.",
        diseases: [
          {
            id: "immunosenescence",
            name: "Immunosenescence (Penuaan Sistem Kekebalan Tubuh)",
            category: "Faktor Usia/Degeneratif",
            summary: "Kemunduran fungsi kekebalan tubuh adaptif dan bawaan akibat penuaan yang disertai keadaan peradangan sistemik derajat rendah kronis (inflammaging).",
            symptoms: [
              "Sangat mudah tertular batuk pilek, flu, atau diare dan butuh waktu pemulihan berminggu-minggu",
              "Tubuh terasa sering meriang pegal tanpa demam tinggi yang jelas (respon suhu tubuh tumpul)",
              "Luka kecil atau lecet kulit membutuhkan waktu lama untuk menutup dan sembuh",
              "Kelelahan kronis dan penurunan stamina fisik secara menyeluruh"
            ],
            causes: [
              "Penyusutan kelenjar timus (involusi timus) yang menurunkan jumlah sel T naif",
              "Akumulasi sel-sel imun tua (senescent cells) yang terus mengeluarkan sitokin inflamasi",
              "Penurunan cadangan sel punca hematopoietik di dalam rongga sumsum tulang merah"
            ],
            warningSigns: [
              "Infeksi bakteri ringan cepat berkembang menjadi sepsis atau pneumonia berat",
              "Suhu tubuh justru turun di bawah normal (hipotermia) saat sedang mengalami infeksi berat",
              "Penurunan kesadaran, disorientasi tempat dan waktu (delirium) sebagai respon infeksi"
            ],
            careTips: [
              "Lakukan vaksinasi lansia secara teratur (vaksin influenza tahunan, vaksin pneumonia PCV/PPSV, vaksin herpes zoster)",
              "Konsumsi makanan padat nutrisi tinggi protein, zink, vitamin C, dan vitamin D3",
              "Jaga kebersihan diri, cuci tangan dengan sabun, dan hindari kontak dekat dengan orang yang sedang flu"
            ]
          }
        ]
      },
      {
        id: "sistem-imun-penghubung",
        name: "Jaringan Imun & Autoantibodi Sendi",
        latinName: "Synovium & Systema Autoimmunitatis",
        analogy: "Sistem imun autoimun ibarat radar keamanan yang salah mengira lapisan sendi tubuh sendiri sebagai penyusup, lalu membombardirnya dengan zat radang.",
        mainFunction: "Membedakan zat milik tubuh sendiri (self) dari benda asing (non-self) serta mempertahankan toleransi imunologis terhadap jaringan normal.",
        healthFact: "Pada artritis reumatoid lanjut usia (EORA / Elderly-Onset Rheumatoid Arthritis), serangan radang sendi sering kali muncul mendadak pada sendi-sendi besar seperti bahu dan panggul.",
        diseases: [
          {
            id: "reumatoid-artritis",
            name: "Artritis Reumatoid Geriatri (EORA)",
            category: "Peradangan",
            summary: "Penyakit autoimun sistemik kronis di mana sistem kekebalan tubuh menyerang membran sinovial sendi secara simetris, menyebabkan erosi tulang dan deformitas sendi.",
            symptoms: [
              "Kaku sendi hebat di pagi hari yang berlangsung lebih dari 1 jam sebelum sendi bisa digerakkan leluasa",
              "Kedua pergelangan tangan, sendi jari-jari tangan, atau kedua bahu membengkak dan terasa hangat simetris",
              "Sendi terasa ngilu berdenyut terutama saat bangun tidur",
              "Bentuk jari tangan perlahan berubah melengkung menyamping (deformitas deviasi ulnar)"
            ],
            causes: [
              "Kerusakan toleransi imunologis yang memicu produksi antibodi autoimun (Rheumatoid Factor dan Anti-CCP)",
              "Aktivasi berlebih sitokin inflamasi TNF-alfa dan Interleukin-6 yang mengikis tulang rawan",
              "Interaksi faktor kerentanan genetik dengan faktor lingkungan (riwayat merokok)"
            ],
            warningSigns: [
              "Demam subfebris berkepanjangan disertai penurunan berat badan drastis tanpa sebab jelas",
              "Mati rasa tebal atau lemas mendadak pada pergelangan tangan (sindrom carpal tunnel akibat jepitan radang)",
              "Sesak napas akibat komplikasi peradangan autoimun pada jaringan paru (penyakit paru interstitial)"
            ],
            careTips: [
              "Segera konsultasi ke dokter spesialis reumatologi untuk mendapatkan obat pengatur imun (DMARDs)",
              "Lakukan fisioterapi gerak sendi lembut di dalam air hangat untuk menjaga kelenturan sendi",
              "Gunakan alat bantu pegangan berdiameter besar untuk mengurangi tekanan pada sendi-sendi jari tangan"
            ]
          }
        ]
      }
    ]
  },

  lymphatic: {
    title: "10. Sistem Limfatik",
    latinTitle: "Systema Lymphoideum (Penyaring Racun & Cairan Getah Bening)",
    systemBadgeColor: "bg-lime-100 text-lime-800",
    organs: [
      {
        id: "kelenjar-getah-bening",
        name: "Kelenjar Getah Bening (Nodus Limfatikus)",
        latinName: "Nodi Lymphoidei (Servikal, Aksila, Inguinal)",
        analogy: "Kelenjar limfa ibarat pos pemeriksaan keamanan polisi di perbatasan yang menyaring dan menghancurkan kuman yang lewat di aliran getah bening.",
        mainFunction: "Filtrasi partikel kuman, sel kanker, dan debu asing dari cairan limfa, serta menjadi tempat berkumpul dan pematangan sel limfosit B dan T.",
        healthFact: "Pembesaran kelenjar getah bening pada lansia yang tidak terasa nyeri dan teraba keras padat harus selalu diperiksakan ke dokter untuk menyingkirkan kemungkinan limfoma atau metastasis.",
        diseases: [
          {
            id: "limfedema-kronis",
            name: "Limfedema & Pembengkakan Kelenjar Limfa",
            category: "Faktor Usia/Degeneratif",
            summary: "Penumpukan cairan kaya protein di jaringan lunak akibat gangguan aliran drainase saluran limfatik atau kerusakan kelenjar getah bening.",
            symptoms: [
              "Satu sisi lengan atau tungkai kaki membengkak perlahan dan terasa berat seperti membawa beban",
              "Kulit di area bengkak terasa kencang tegang, kaku, dan perhiasan/cincin terasa mendadak sempit",
              "Tekstur kulit lama kelamaan menebal, kasar, dan mengeras seperti kulit jeruk (peau d'orange)",
              "Gerakan sendi di area yang bengkak menjadi terbatas dan kaku"
            ],
            causes: [
              "Penyumbatan atau kerusakan kelenjar limfa pascaoperasi kanker atau pascaterapi radiasi",
              "Infeksi bakteri berulang pada kulit (selulitis/erisipelas) yang merusak pembuluh limfa halus",
              "Insufisiensi vena kronis berat yang membebani kapasitas sirkulasi sistem limfatik tungkai"
            ],
            warningSigns: [
              "Kulit mendadak merah padam, sangat panas, dan nyeri hebat disertai demam tinggi (selulitis akut)",
              "Keluar cairan bening atau kekuningan merembes dari pori-pori kulit yang meregang",
              "Bengkak membesar sangat cepat dan meluas ke bagian dada atau perut"
            ],
            careTips: [
              "Terapkan perawatan Dekongestif Kompleks (CDT) meliputi pemijatan drainase limfatik manual oleh fisioterapis",
              "Gunakan perban elastis kompresi atau stoking lengan/kaki kompresi medis khusus limfedema",
              "Jaga kulit tetap bersih dan lembap, serta hindari suntikan atau pengambilan darah di lengan yang mengalami limfedema"
            ]
          }
        ]
      },
      {
        id: "pembuluh-limfa",
        name: "Saluran & Pembuluh Limfatik",
        latinName: "Vasa Lymphatica & Ductus Thoracicus",
        analogy: "Pembuluh limfa ibarat jaringan selokan pembuangan air sekunder di bawah tanah yang menyedot kelebihan becek air di sela-sela sel tubuh agar tidak banjir.",
        mainFunction: "Menyerap kembali kelebihan cairan interstisial dan molekul protein besar dari jaringan untuk dikembalikan ke peredaran darah vena di vena subklavia.",
        healthFact: "Pembuluh getah bening tidak memiliki pompa jantung sendiri, melainkan mengandalkan kontraksi otot-otot tubuh saat kita bergerak dan melangkah untuk mendorong cairannya mengalir.",
        diseases: [
          {
            id: "limfedema-kronis",
            name: "Limfedema Kronis & Insufisiensi Limfatik",
            category: "Faktor Usia/Degeneratif",
            summary: "Kegagalan transport mikrosirkulasi limfatik yang menyebabkan akumulasi cairan interstitial dan hipertrofi jaringan adiposa fibrotik pada tungkai lansia.",
            symptoms: [
              "Pembengkakan tungkai bawah yang tidak sepenuhnya kempes meski sudah diganjal bantal tinggi semalaman",
              "Rasa berat dan pegal saat berdiri atau berjalan",
              "Jari kaki tampak bengkak seperti sosis dan lipatan kulit di pangkal jari menebal (tanda Stemmer positif)",
              "Rentan timbul infeksi jamur dan kuman di sela-sela jari kaki"
            ],
            causes: [
              "Degenerasi katup pembuluh limfa seiring usia tua",
              "Kurangnya aktivitas fisik dan mobilitas otot tungkai pada lansia yang sering duduk statis",
              "Kerusakan mikrovaskular akibat obesitas berat atau komplikasi pascatrauma"
            ],
            warningSigns: [
              "Luka lecet di kulit bengkak tidak kunjung sembuh dan mulai berbau",
              "Timbul lenting-lenting cairan getah bening di permukaan kulit yang mudah pecah",
              "Demam menggigil mendadak dengan garis merah menjalar di sepanjang kulit paha (limfangitis)"
            ],
            careTips: [
              "Ganjal tungkai kaki lebih tinggi dari posisi dada saat berbaring istirahat di siang hari",
              "Lakukan senam gerak kaki ringan dan latihan napas dalam secara berkala untuk memompa cairan limfa",
              "Gunakan alas kaki yang nyaman, tidak menekan, dan selalu kering"
            ]
          }
        ]
      }
    ]
  },

  integumentary: {
    title: "11. Sistem Integumen (Kulit & Kuku)",
    latinTitle: "Systema Integumentarium (Cutis, Pili, Ungues)",
    systemBadgeColor: "bg-orange-100 text-orange-800",
    organs: [
      {
        id: "kulit-epidermis-dermis",
        name: "Lapisan Kulit (Epidermis & Dermis)",
        latinName: "Integumentum Commune (Epidermis & Dermis)",
        analogy: "Kulit ibarat mantel tahan air dan baju zirah terluar tubuh yang melindungi organ dalam dari kuman, debu, gesekan, dan terik panas matahari.",
        mainFunction: "Barier pertahanan fisik dan mikrobiologis terluar, organ indra peraba sensasi suhu/nyeri, termoregulasi keringat, dan sintesis vitamin D alami.",
        healthFact: "Kulit lansia kehilangan hingga 20% ketebalannya, berkurang kadar kolagen dan minyak alaminya, menjadikannya setipis 'kertas minyak' dan sangat rentan robek akibat tekanan kasur (ulkus dekubitus).",
        diseases: [
          {
            id: "ulkus-dekubitus",
            name: "Ulkus Dekubitus (Luka Robek Baring Tekan)",
            category: "Faktor Usia/Degeneratif",
            summary: "Kerusakan jaringan kulit dan struktur di bawahnya akibat tekanan mekanis berkepanjangan pada area tonjolan tulang (tulang ekor, tumit, pinggul) pada pasien tirah baring.",
            symptoms: [
              "Area kulit di atas tulang ekor (sakrum) atau tumit memerah dan tidak memutih saat ditekan jari (Stadium 1)",
              "Kulit melepuh, melepuh pecah, atau tampak luka lecet dangkal seperti terkelupas (Stadium 2)",
              "Luka kawah menganga dalam menembus lapisan lemak bawah kulit (Stadium 3)",
              "Luka sangat dalam hingga terlihat dasar tendon, otot, atau tulang yang menghitam berbau (Stadium 4)"
            ],
            causes: [
              "Tekanan konstan tanpa henti antara permukaan kasur keras dan tonjolan tulang lansia yang memutus aliran kapiler darah",
              "Gaya gesek saat lansia merosot di tempat tidur atau gesekan seprai yang kusut",
              "Kelembapan berlebih akibat ompol air seni atau keringat yang membuat kulit maserasi rapuh"
            ],
            warningSigns: [
              "Luka bernanah kuning kehijauan, berbau sangat busuk, dan dikelilingi kulit merah bengkak panas",
              "Demam tinggi dan tanda infeksi menyebar ke aliran darah (sepsis)",
              "Luka meluas dengan cepat dan dasar luka menghitam pekat (nekrosis jaringan mati)"
            ],
            careTips: [
              "UBAH POSISI MIRING KANAN - MIRING KIRI setiap 2 jam sekali secara konsisten bagi lansia tirah baring",
              "Gunakan kasur udara bertekanan dinamis (kasur angin anti-dekubitus)",
              "Jaga kulit selalu bersih dan kering, gunakan krim pelindung barier kulit (zinc oxide), dan penuhi nutrisi tinggi protein untuk penyembuhan luka"
            ]
          }
        ]
      },
      {
        id: "folikel-dan-kuku",
        name: "Saraf Kulit & Folikel Kutaneus",
        latinName: "Dermatom & Radix Nervi Cutanei",
        analogy: "Saraf kulit ibarat kabel kawat sensor alarm di bawah permukaan kulit yang menyampaikan rasa sentuhan, panas, dingin, dan nyeri ke otak.",
        mainFunction: "Menerima rangsangan sensorik taktil dan melindungi folikel rambut serta bantalan kuku dari gesekan dan trauma luar.",
        healthFact: "Virus cacar air yang pernah diderita di masa kanak-kanak tidak pernah mati, melainkan 'tidur' di simpul saraf tulang belakang. Saat daya tahan tubuh lansia melemah, virus ini terbangun memicu Cacar Api (Herpes Zoster).",
        diseases: [
          {
            id: "herpes-zoster",
            name: "Herpes Zoster (Cacar Ular / Api & Nyeri Pasca-Herpes)",
            category: "Infeksi",
            summary: "Reaktivasi virus Varicella-Zoster dorman pada ganglion saraf sensorik yang menimbulkan ruam lenting berair bergerombol melingkar separuh badan dan nyeri saraf hebat.",
            symptoms: [
              "Nyeri terbakar, kesemutan, atau rasa ngilu tertusuk jarum di satu sisi tubuh (dada, perut, atau wajah) beberapa hari sebelum ruam muncul",
              "Muncul bintil-bintil merah yang cepat berubah menjadi lenting berisi cairan bening bergerombol mengikuti garis saraf (dermatomal)",
              "Ruam tegas HANYA ada di separuh badan kiri atau kanan (tidak menyeberang garis tengah tubuh)",
              "Nyeri saraf menusuk yang menetap berbulan-bulan bahkan setelah lenting mengering sembuh (Neuralgia Pasca-Herpes / PHN)"
            ],
            causes: [
              "Penurunan kekebalan seluler spesifik terhadap virus Varicella-Zoster akibat proses penuaan (immunosenescence)",
              "Stres fisik berat, kelelahan parah, atau penyakit kronis yang menurunkan daya tahan tubuh lansia",
              "Riwayat pernah terkena cacar air di masa muda"
            ],
            warningSigns: [
              "Lenting muncul di area dahi, hidung, atau dekat bola mata (risiko kerusakan kornea dan kebutaan zoster oftalmikus)",
              "Lenting bernanah tebal akibat infeksi bakteri sekunder",
              "Nyeri saraf sangat hebat yang membuat lansia tidak bisa tidur berhari-hari atau timbul depresi"
            ],
            careTips: [
              "SEGERA berikan obat antivirus (Asiklovir / Valasiklovir) dalam 72 jam pertama sejak bintil muncul atas resep dokter",
              "Jaga lenting tetap bersih dan kering, jangan menggaruk atau memecahkan lenting dengan sengaja",
              "Pertimbangkan vaksinasi herpes zoster (vaksin rekombinan) untuk mencegah kekambuhan dan nyeri saraf berkepanjangan"
            ]
          }
        ]
      }
    ]
  }
};

console.log('NEW_SYSTEMS keys:', Object.keys(NEW_SYSTEMS));
// Verify disease IDs in new systems
let totalDiseases = 0;
for (const [sysKey, sys] of Object.entries(NEW_SYSTEMS)) {
  for (const organ of sys.organs) {
    for (const dis of organ.diseases) {
      totalDiseases++;
      if (!clinicalData[dis.id]) {
        console.error(`ERROR: Disease ${dis.id} in system ${sysKey} not found in DEEP_CLINICAL_DATA!`);
      } else {
        console.log(`Verified ${dis.id} -> ${clinicalData[dis.id].medicalTerminology.icd10}`);
      }
    }
  }
}
console.log(`Total new diseases verified: ${totalDiseases}`);

