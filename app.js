/**
 * app.js - Logika Interaktif & Data Medis AnatomiSehat (Ramah Lansia)
 * ====================================================================
 * Fitur:
 * 1. Data Anatomi & Penyakit 3 Sistem (Respirasi, Pencernaan, Reproduksi/Urologi Pria & Wanita)
 * 2. Visual SVG Interaktif dengan Efek Glow, Hover Tooltip, & Pin Label
 * 3. Filter Kategori Penyakit (Infeksi, Peradangan, Pola Makan, Faktor Usia)
 * 4. Pencarian Instan Organ & Gejala
 * 5. Fitur Aksesibilitas: Pengatur Ukuran Huruf, Kontras Tinggi, & Pembaca Suara (Text-to-Speech)
 */

// ============================================================================
// 1. DATA MASTER ANATOMI & PENYAKIT (BAHASA INDONESIA RAMAH AWAM & LANSIA)
// ============================================================================
const ANATOMY_DATA = {
  "skeletal": {
    "title": "1. Rangka (Kerangka)",
    "latinTitle": "Systema Skeletale (206 Tulang)",
    "systemBadgeColor": "bg-slate-100 text-slate-800",
    "organs": [
      {
        "id": "tulang-leher",
        "name": "Vertebra Servikal (Tulang Leher)",
        "latinName": "Vertebrae Cervicales (C1 - C7)",
        "analogy": "Tulang leher ibarat pilar penyangga menara yang menahan bola seberat 5 kilogram (kepala kita) dan mampu berputar bebas ke segala arah.",
        "mainFunction": "Menopang beban biomekanis kranium (kepala), melindungi sumsum tulang belakang leher dan arteri vertebralis, serta memberikan fleksibilitas gerakan menoleh, mendongak, dan menunduk.",
        "healthFact": "Hampir 85% lansia di atas 60 tahun mengalami keausan bantalan leher akibat gravitasi puluhan tahun dan postur menunduk lama, yang dapat menjepit saraf leher hingga ke jemari tangan.",
        "diseases": [
          {
            "id": "spondilosis-servikal",
            "name": "Spondilosis Servikal (Pengapuran Bantalan Leher)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Proses degeneratif penuaan pada diskus dan sendi faset leher yang memicu pembentukan taji tulang (osteofit) dan penyempitan saluran saraf leher.",
            "symptoms": [
              "Kaku dan pegal tajam di tengkuk leher terutama saat bangun tidur",
              "Sensasi kesemutan, baal, atau ngilu menjalar dari leher ke bahu, lengan, hingga jari tangan (radikulopati)",
              "Sakit kepala tegang di area belakang kepala (servikogenik)",
              "Bunyi gemeretak ('krek-krek') saat menolehkan kepala"
            ],
            "causes": [
              "Dehidrasi dan penipisan bantalan intervertebral servikal seiring bertambahnya usia",
              "Pembentukan taji tulang (osteofit) yang mempersempit foramen saraf",
              "Kebiasaan postur leher menunduk (text-neck) atau tidur dengan bantal yang terlalu tinggi"
            ],
            "warningSigns": [
              "Kelemahan mendadak pada genggaman tangan (sering menjatuhkan benda/sendok)",
              "Jalan menjadi limbung atau kaku seperti robot (tanda mielopati servikal)",
              "Gangguan buang air kecil atau buang air besar yang menyertai keluhan leher"
            ],
            "careTips": [
              "Gunakan bantal ergonomis berkontur leher (cervical pillow) yang menopang lekukan alami leher",
              "Lakukan senam peregangan leher lembut (chin-tuck dan rotasi perlahan) setiap pagi",
              "Hindari memutar atau membunyikan leher secara paksa (manipulasi kasar) karena berbahaya bagi saraf medula spinalis"
            ]
          }
        ]
      },
      {
        "id": "tulang-punggung",
        "name": "Tulang Belakang (Torakalis & Lumbalis)",
        "latinName": "Columna Vertebralis (Torakalis & Lumbalis)",
        "analogy": "Tulang belakang ibarat tiang utama fondasi rumah bertingkat. Jika semennya keropos (kalsium berkurang), tiang bisa retak dan ambles perlahan.",
        "mainFunction": "Tiang poros penopang postur tubuh tegak, jangkar tempat melekatnya tulang rusuk dan otot punggung, serta pelindung kanalis spinalis.",
        "healthFact": "Osteoporosis sering dijuluki 'pencuri senyap' (silent thief) karena pengeroposan massa tulang terjadi tanpa rasa sakit sampai tulang tiba-tiba amblas atau patah saat batuk keras.",
        "diseases": [
          {
            "id": "osteoporosis-vertebra",
            "name": "Osteoporosis Vertebra & Fraktur Kompresi",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Penurunan densitas massa tulang belakang drastis yang membuat korpus vertebra rapuh dan rentan amblas (fraktur kompresi) hanya karena beban harian.",
            "symptoms": [
              "Nyeri punggung mendadak yang memburuk saat berdiri atau berjalan dan mereda saat berbaring",
              "Tinggi badan berkurang lebih dari 3-4 cm dibandingkan usia muda",
              "Postur tubuh makin bungkuk ke depan (punuk kyphosis / dowager's hump)",
              "Perut terasa begah karena rongga dada dan perut memendek tertekan"
            ],
            "causes": [
              "Penurunan drastis hormon estrogen pascamenopause atau penurunan testosteron pada pria lanjut usia",
              "Asupan kalsium dan vitamin D harian yang tidak mencukupi selama bertahun-tahun",
              "Gaya hidup sedenter (kurang gerak) atau riwayat konsumsi obat kortikosteroid jangka panjang"
            ],
            "warningSigns": [
              "Nyeri punggung bawah sangat tajam dan melumpuhkan setelah batuk keras atau terpeleset ringan",
              "Ketidakmampuan berdiri tegak mandiri disertai mati rasa di kedua tungkai",
              "Gangguan kontrol berkemih atau buang air besar mendadak"
            ],
            "careTips": [
              "Cukupi asupan kalsium (1200 mg/hari) dan vitamin D3 (800-2000 IU/hari) atas anjuran dokter",
              "Berjemur sinar matahari pagi 15-20 menit dan lakukan jalan santai beban tubuh (weight-bearing exercise)",
              "Cegah risiko jatuh: pasang pegangan dinding di kamar mandi dan singkirkan karpet licin di rumah"
            ]
          }
        ]
      },
      {
        "id": "tulang-panggul",
        "name": "Panggul & Sendi Koksa (Pelvis)",
        "latinName": "Pelvis & Articulatio Coxae",
        "analogy": "Panggul ibarat mangkuk fondasi penopang tubuh bagian atas dan engsel kokoh yang menyalurkan seluruh berat badan ke kedua kaki.",
        "mainFunction": "Meneruskan berat badan dari kolumna vertebralis ke ekstremitas bawah, melindungi organ pelvis (kandung kemih, organ reproduksi), dan memfasilitasi gerakan lokomosi.",
        "healthFact": "Patah tulang panggul (fraktur leher paha) merupakan salah satu kondisi kegawatdaruratan geriatri tertinggi karena memicu imobilisasi lama yang meningkatkan risiko komplikasi.",
        "diseases": [
          {
            "id": "osteoartritis-panggul",
            "name": "Osteoartritis Panggul (Coxarthrosis)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Keausan kronis tulang rawan pada sendi panggul (pertemuan mangkuk asetabulum dan kepala tulang paha) yang menimbulkan nyeri pangkal paha dan langkah pincang.",
            "symptoms": [
              "Nyeri tumpul atau ngilu di lipat paha (selangkangan), bokong, atau paha bagian depan",
              "Sendi panggul terasa kaku berat saat pertama kali bangun dari kursi atau tempat tidur",
              "Kesulitan memakai kaus kaki, memotong kuku kaki, atau mengikat tali sepatu",
              "Jalan menjadi pincang condong ke satu sisi (gaya jalan Trendelenburg)"
            ],
            "causes": [
              "Penipisan matriks kondrosit dan cairan sinovial sendi panggul akibat beban biomekanis puluhan tahun",
              "Kelebihan berat badan yang memberikan beban kompresi berlebih pada asetabulum",
              "Riwayat trauma mikro berulang atau kelainan bentuk panggul bawaan ringan"
            ],
            "warningSigns": [
              "Ketidakmampuan menumpu berat badan sama sekali pada satu kaki setelah terpeleset",
              "Kaki tampak memendek dan memuntir ke arah luar (tanda curiga patah tulang panggul)",
              "Nyeri hebat terus-menerus bahkan saat beristirahat di malam hari"
            ],
            "careTips": [
              "Gunakan tongkat penyangga di sisi tangan yang berlawanan dengan panggul yang sakit untuk mengurangi beban 30-50%",
              "Jaga berat badan ideal guna mengurangi beban kompresi mekanis harian sendi",
              "Lakukan latihan fleksibilitas panggul non-impak seperti bersepeda statis atau senam air"
            ]
          }
        ]
      },
      {
        "id": "tulang-sendi-lutut",
        "name": "Sendi Lutut (Articulatio Genu)",
        "latinName": "Articulatio Genu & Patella",
        "analogy": "Sendi lutut ibarat engsel pintu utama dengan bantalan busa peredam kejut (meniskus) dan oli pelumas alami (cairan sendi).",
        "mainFunction": "Menahan beban hentakan langkah, melipat dan meluruskan kaki saat berjalan, jongkok, bangkit berdiri, dan menaiki tangga.",
        "healthFact": "Osteoartritis sendi lutut adalah penyebab utama disabilitas gerak pada lansia di Asia Tenggara, di mana gesekan antartulang dapat memicu pembengkakan efusi lutut.",
        "diseases": [
          {
            "id": "osteoartritis-lutut",
            "name": "Osteoartritis Lutut (Gonarthrosis)",
            "category": "Peradangan",
            "summary": "Peradangan dan kerusakan progresif tulang rawan hialin sendi lutut yang menyebabkan penyempitan celah sendi, krepitasi, dan deformitas bentuk kaki 'O' atau 'X'.",
            "symptoms": [
              "Nyeri lutut saat menuruni tangga atau berdiri dari posisi jongkok/duduk rendah",
              "Bunyi gemeretak ('kretek-kretek') berpasir saat lutut ditekuk dan diluruskan (krepitasi)",
              "Kaku sendi lutut di pagi hari yang membaik setelah digerakkan 15-30 menit",
              "Lutut tampak membengkak, terasa hangat, atau bentuk kaki mulai melengkung menyerupai huruf O (varus)"
            ],
            "causes": [
              "Degenerasi kondrosit dan penurunan produksi asam hialuronat pada cairan pelumas sendi",
              "Tekanan kompresi akibat obesitas (setiap kenaikan 1 kg berat badan memberi beban 4 kg pada lutut)",
              "Kelemahan otot paha depan (quadriceps femoris) yang gagal menyerap getaran langkah"
            ],
            "warningSigns": [
              "Lutut mendadak terkunci tidak bisa ditekuk atau diluruskan sama sekali",
              "Lutut merah membara, sangat bengkak berisi cairan tegang disertai demam (curiga artritis septik)",
              "Sensasi lutut 'goyah' atau 'lolos' yang memicu risiko jatuh tersungkur"
            ],
            "careTips": [
              "Latihan penguatan otot paha depan (isometric quad set / straight leg raise) tanpa membebani sendi",
              "Hindari duduk bersila di lantai, jongkok, atau naik turun tangga yang curam secara berulang",
              "Kompres hangat untuk meredakan kaku kronis, atau kompres dingin jika lutut sedang meradang bengkak"
            ]
          }
        ]
      },
      {
        "id": "sendi-ekstremitas",
        "name": "Sendi Perifer & Jari Kaki",
        "latinName": "Articulationes Periphericae & Metatarsophalangea",
        "analogy": "Sendi jari kaki ibarat engsel halus presisi. Jika timbul tumpukan kristal asam urat, rasanya seperti engsel ditaburi serpihan jarum kaca runcing.",
        "mainFunction": "Mendistribusikan titik tumpu pijakan kaki saat melangkah, membantu keseimbangan dinamis, dan memfasilitasi cengkeraman jari kaki.",
        "healthFact": "Serangan gout akut paling sering terjadi pada dini hari di pangkal jempol kaki (podagra) karena suhu tubuh di ujung jari kaki lebih dingin sehingga kristal urat mudah mengendap.",
        "diseases": [
          {
            "id": "artritis-gout",
            "name": "Artritis Gout (Asam Urat Akut & Kronis)",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Artritis inflamasi metabolik yang dipicu oleh penumpukan kristal monosodium urat pada rongga sendi akibat kadar asam urat darah tinggi (hiperurisemia).",
            "symptoms": [
              "Nyeri sendi luar biasa hebat yang muncul mendadak di tengah malam atau subuh",
              "Pangkal jempol kaki (atau pergelangan kaki/lutut) bengkak besar, merah mengilap, dan terasa panas",
              "Sendi sangat sensitif hingga tidak tahan bahkan hanya disentuh selimut tipis",
              "Muncul benjolan keras putih kapur di bawah kulit dekat sendi atau daun telinga (tofus) pada fase kronis"
            ],
            "causes": [
              "Konsumsi makanan tinggi purin (jeroan, emping melinjo, seafood kepiting/kerang, kuah daging kental)",
              "Penurunan fungsi ekskresi ginjal dalam membuang asam urat lewat air seni pada usia lanjut",
              "Efek samping obat diuretik tensi (cth: hidroklorotiazid) atau dehidrasi kurang minum air"
            ],
            "warningSigns": [
              "Demam menggigil tinggi disertai kemerahan yang meluas ke seluruh tungkai kaki",
              "Benjolan tofus pecah dan mengeluarkan cairan putih seperti kapur pasta gigi",
              "Serangan gout terjadi berulang lebih dari 3 kali dalam setahun atau menyerang banyak sendi sekaligus"
            ],
            "careTips": [
              "Banyak minum air putih minimal 2 liter sehari guna membantu ginjal membilas asam urat",
              "Batasi ketat jeroan, ekstrak kaldu kental, tape ketan/alkohol, dan makanan manis tinggi sirup jagung fruktosa",
              "Rutin kontrol kadar asam urat darah dan minum obat penurun urat (allopurinol/febuxostat) sesuai resep dokter"
            ]
          }
        ]
      }
    ]
  },
  "muscular": {
    "title": "2. Otot (Muskular)",
    "latinTitle": "Systema Musculare & Textus Adiposus",
    "systemBadgeColor": "bg-rose-100 text-rose-800",
    "organs": [
      {
        "id": "otot-rangka",
        "name": "Otot Rangka Utama (Muskuloskeletal)",
        "latinName": "Musculi Sceleti",
        "analogy": "Otot rangka ibarat mesin pendorong dan rangka pelindung tubuh. Otot menopang tulang kita berdiri tegak, memompa darah saat melangkah, dan menjadi tangki penyerap gula terbesar tubuh.",
        "mainFunction": "Menghasilkan tenaga gerak lokomotor, mempertahankan postur tegak tubuh, menyerap glukosa darah (wadah gula), dan memproduksi zat kimia peremaja (miokin).",
        "healthFact": "Tanpa latihan gerak aktif, tubuh kehilangan sekitar 30-40% massa otot antara usia 50 hingga 80 tahun. Menjaga otot paha dan betis adalah kunci utama lansia tidak mudah jatuh.",
        "diseases": [
          {
            "id": "sarkopenia",
            "name": "Sarkopenia (Penyusutan Massa & Kekuatan Otot)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kehilangan massa, kualitas, dan kekuatan otot rangka yang membuat lansia mudah lelah, lambat berjalan, dan rentan jatuh.",
            "symptoms": [
              "Otot lengan dan paha tampak mengecil dan mengendur menggelambir",
              "Sulit bangkit berdiri dari kursi tanpa bertumpu kedua tangan pada lutut atau meja",
              "Langkah kaki sangat lambat tertatih-tatih dan mudah hilang keseimbangan",
              "Kekuatan genggaman tangan melemah (sulit membuka toples atau memeras kain)"
            ],
            "causes": [
              "Kurangnya aktivitas gerak fisik dan kebiasaan duduk/tiduran seharian",
              "Kurang asupan makanan sumber protein hewani/nabati berkualitas tinggi",
              "Penurunan alami hormon pertumbuhan dan penyerapan asam amino pada usia lanjut"
            ],
            "warningSigns": [
              "Jatuh di lantai dan tidak mampu bangun sendiri selama berjam-jam",
              "Kaki tidak sanggup lagi menopang berat badan saat berdiri",
              "Berat badan menyusut drastis disertai badan sangat lemah lunglai"
            ],
            "careTips": [
              "Latihan beban ringan teratur 2-3 kali seminggu (misal: squat berpegangan meja, dorong dinding)",
              "Konsumsi protein cukup 1.2 gram/kg berat badan setiap hari (telur rebus, ikan, tempe, tahu)",
              "Berjemur matahari pagi 15-20 menit untuk mencukupi kebutuhan vitamin D otot"
            ]
          },
          {
            "id": "kram-otot-nokturnal",
            "name": "Kram Otot Kaki Malam Hari (Nocturnal Leg Cramps)",
            "category": "Peradangan",
            "summary": "Kejang otot betis atau telapak kaki yang mendadak mengeras kaku dan sangat menyakitkan di tengah tidur malam.",
            "symptoms": [
              "Otot betis mendadak mengeras kaku seperti batu saat tidur tengah malam",
              "Jari-jari kaki tertarik menekuk kaku ke bawah dan sangat sulit diluruskan",
              "Rasa nyeri tajam menyiksa yang membuat terbangun kaget dari tidur nyenyak",
              "Otot betis terasa pegal dan berdenyut linu keesokan harinya"
            ],
            "causes": [
              "Kekurangan cairan (dehidrasi ringan) dan ketidakseimbangan mineral (magnesium/kalium)",
              "Efek samping obat diuretik kencing untuk darah tinggi yang menguras garam tubuh",
              "Otot betis kedinginan saat tidur terpapar AC/kipas angin langsung atau sirkulasi darah melambat"
            ],
            "warningSigns": [
              "Betis bengkak merah hangat dan terasa sangat nyeri (waspadai bekuan darah DVT)",
              "Kram terjadi setiap malam dan tidak membaik dengan peregangan",
              "Air kencing berwarna gelap kecokelatan seperti teh pekat"
            ],
            "careTips": [
              "Saat kram terjadi: TARIK ujung jari kaki ke arah atas (ke arah tulang kering) secara perlahan",
              "Lakukan peregangan betis menempel di dinding selama 3 menit setiap malam sebelum tidur",
              "Kenakan kaus kaki katun longgar saat tidur malam dan minum segelas air hangat sebelum tidur"
            ]
          },
          {
            "id": "polimialgia-reumatika",
            "name": "Polimialgia Reumatika (Nyeri Kaku Otot Bahu & Panggul)",
            "category": "Peradangan",
            "summary": "Penyakit peradangan autoimun pada lansia yang memicu nyeri hebat dan rasa kaku berat pada otot bahu, leher, dan pinggul.",
            "symptoms": [
              "Bahu dan leher terasa sangat kaku dan pegal hebat di pagi hari (berlangsung >45 menit)",
              "Sangat sulit menyisir rambut, memakai kaos melewati kepala, atau mengenakan jaket",
              "Sulit bangkit berdiri dari ranjang atau mobil akibat kaku pada otot panggul",
              "Badan meriang subfebris, nafsu makan turun, dan berat badan menyusut"
            ],
            "causes": [
              "Peradangan autoimun pada kantung pelumas sendi bahu dan panggul (bursitis)",
              "Lonjakan zat peradangan interleukin-6 (IL-6) akibat penuaan sistem imun",
              "Paling sering menyerang pria dan wanita di atas usia 65 tahun"
            ],
            "warningSigns": [
              "Mata mendadak kabur atau hilang penglihatan separuh (amaurosis fugax)",
              "Nyeri kepala pelipis baru yang sangat tajam dan berdenyut kencang",
              "Nyeri rahang hebat saat mengunyah makanan (tanda bahaya radang pembuluh darah pelipis)"
            ],
            "careTips": [
              "Segera periksakan ke dokter spesialis penyakit dalam (biasanya mereda dramatis dengan steroid dosis rendah)",
              "Gunakan pakaian dengan kancing depan atau ritsleting agar tidak perlu mengangkat tangan tinggi",
              "Latihan gerak sendi bahu memutar perlahan setiap pagi untuk mencegah sendi membeku"
            ]
          }
        ]
      },
      {
        "id": "lemak-viseral",
        "name": "Lemak Viseral (Rongga Perut Dalam)",
        "latinName": "Adeps Visceralis",
        "analogy": "Lemak viseral adalah lemak yang membungkus organ dalam di balik dinding perut. Ibarat bantalan peredam kejut alami, namun jika berlebih akan berubah menjadi pabrik racun pemicu radang pembuluh darah.",
        "mainFunction": "Bantalan pelindung mekanik organ rongga perut, namun bila berlebih memicu pelepasan asam lemak bebas toksik langsung ke hati dan pembuluh darah.",
        "healthFact": "Setelah usia 60 tahun, lemak tubuh secara alami berpindah dari bawah kulit ke rongga perut dalam, memicu perut buncit meskipun timbangan berat badan tampak normal.",
        "diseases": [
          {
            "id": "obesitas-viseral",
            "name": "Obesitas Viseral (Penumpukan Lemak Perut Dalam)",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Penumpukan sel lemak aktif di sekitar organ dalam perut yang memicu sindrom metabolik, fatty liver, dan penyakit jantung.",
            "symptoms": [
              "Perut tampak membuncit padat dan lingkar pinggang membesar (>90 cm pria, >80 cm wanita)",
              "Napas gampang memburu terengah-engah saat berjalan atau naik tangga sedikit saja",
              "Tidur mendengkur keras dan sering terbangun tercekik di malam hari (sleep apnea)",
              "Sering mengantuk berat di siang hari dan badan terasa lesu tidak bertenaga"
            ],
            "causes": [
              "Kebiasaan mengonsumsi gorengan minyak jelantah, makanan bersantan kental, dan gula pasir",
              "Kurangnya aktivitas jalan kaki setelah masa pensiun",
              "Penurunan hormon seks alami tubuh dan penurunan kecepatan metabolisme basal"
            ],
            "warningSigns": [
              "Nyeri dada kiri seperti tertindih benda berat yang menjalar ke leher/lengan kiri",
              "Tekanan darah melonjak tinggi >180/100 mmHg",
              "Sesak napas hebat saat berbaring lurus telentang"
            ],
            "careTips": [
              "Jalan kaki santai 30 menit setiap pagi untuk mengikis timbunan lemak rongga perut",
              "Kurangi konsumsi tepung terigu olahan, sirup manis, dan makanan bersantan pekat",
              "Perbanyak sayuran berserat tinggi (labu siam, daun kelor, brokoli) dan beras merah"
            ]
          }
        ]
      },
      {
        "id": "lemak-subkutan",
        "name": "Lemak Subkutan & Komposisi Tubuh",
        "latinName": "Adeps Subcutaneus",
        "analogy": "Lemak subkutan adalah lapisan selimut lemak lembut tepat di bawah kulit. Lapisan ini menjaga suhu tubuh tetap hangat dan menjadi cadangan energi darurat.",
        "mainFunction": "Isolasi termal penahan suhu dingin, bantalan empuk pelindung tulang dari benturan, dan penyimpan energi jangka panjang.",
        "healthFact": "Pada usia lanjut, penipisan otot yang tertutup lapisan lemak bawah kulit (obesitas sarkopenik) sering mengecoh keluarga karena tubuh tampak gemuk padahal ototnya sangat keropos rapuh.",
        "diseases": [
          {
            "id": "obesitas-sarkopenik",
            "name": "Obesitas Sarkopenik (Penipisan Otot Tertutup Lemak)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kombinasi berbahaya ketika massa otot tubuh telah habis menyusut, namun tertutup oleh lapisan lemak tubuh yang tebal menggelambir.",
            "symptoms": [
              "Lengan dan paha tampak besar namun sangat lembek bergelambir tanpa otot padat",
              "Lutut terasa sangat nyeri dan linu saat berdiri menahan beban tubuh (pengapuran sendi)",
              "Sangat sulit bangkit dari lantai setelah duduk bersila atau sujud",
              "Berat badan pada timbangan tampak normal atau sedikit gemuk, padahal ototnya sangat lemah"
            ],
            "causes": [
              "Pola diet salah yang memangkas makan tanpa olahraga beban (membuang otot, bukan lemak)",
              "Infiltrasi sel lemak yang menyusup masuk ke dalam serabut otot rangka (miosteatosis)",
              "Kurang gerak bertahun-tahun berpadu dengan penuaan metabolisme"
            ],
            "warningSigns": [
              "Lutut mendadak lemas terkulai hingga jatuh terbentur",
              "Nyeri sendi lutut hebat disertai bengkak panas yang melumpuhkan kemampuan berjalan",
              "Gula darah melonjak tinggi kebal obat karena tidak ada lagi otot untuk menyerap gula"
            ],
            "careTips": [
              "UTAMAKAN latihan penguatan otot (sepeda statis, jalan di kolam renang) daripada diet lapar ekstrem",
              "Pastikan asupan protein tinggi tetap tercukupi (jangan membatasi protein pada lansia)",
              "Gunakan alat bantu jalan seperti tongkat atau walker roda untuk mengamankan langkah"
            ]
          }
        ]
      }
    ]
  },
  "cardiovascular": {
    "title": "3. Peredaran Darah (Kardiovaskular)",
    "latinTitle": "Systema Cardiovasculare (Cor & Vasa Sanguinea)",
    "systemBadgeColor": "bg-red-100 text-red-800",
    "organs": [
      {
        "id": "jantung-koroner",
        "name": "Otot & Arteri Koroner Jantung",
        "latinName": "Myocardium & Arteriae Coronariae",
        "analogy": "Arteri koroner ibarat pipa selang bensin khusus yang menyuplai bahan bakar ke mesin pompa jantung itu sendiri agar tidak mogok.",
        "mainFunction": "Memberikan pasokan darah segar kaya oksigen dan nutrisi langsung ke otot jantung (miokardium) yang bekerja non-stop 100.000 detakan sehari.",
        "healthFact": "Pada orang tua dan penderita diabetes, serangan jantung sering kali TIDAK ditandai nyeri dada menusuk, melainkan hanya rasa lemas mendadak, keringat dingin, atau sesak napas (silent ischemia).",
        "diseases": [
          {
            "id": "penyakit-jantung-koroner",
            "name": "Penyakit Jantung Koroner (PJK & Serangan Jantung)",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Penyempitan atau penyumbatan pembuluh darah utama penyuplai otot jantung akibat tumpukan plak kolesterol (aterosklerosis) yang memicu iskemia miokard.",
            "symptoms": [
              "Rasa dada tertekan berat, terhimpit benda berat, atau rasa panas terbakar di tengah dada (angina)",
              "Nyeri dada menjalar ke bahu kiri, leher, rahang, atau tembus hingga ke punggung belakang",
              "Napas tersengal disertai keringat dingin mengucur deras walau sedang istirahat",
              "Gejala atipikal lansia: mendadak lemas lunglai, mual lambung hebat, atau pusing melayang tanpa nyeri dada"
            ],
            "causes": [
              "Penumpukan plak ateroma kolesterol LDL yang mengalami kalsifikasi pada dinding lumen koroner",
              "Hipertensi menahun yang merusak lapisan endotel pembuluh darah jantung",
              "Riwayat merokok, diabetes mellitus yang tidak terkontrol, serta faktor genetika keluarga"
            ],
            "warningSigns": [
              "Nyeri dada tertekan berat tidak kunjung hilang lebih dari 15-20 menit meski sudah istirahat",
              "Lansia tiba-tiba pingsan (sinkop) atau bibir membiru disertai sesak napas berat",
              "Irama detak jantung terasa sangat cepat, kacau, atau melemah drastis"
            ],
            "careTips": [
              "Segera bawa ke UGD terdekat dalam 'golden hour' (di bawah 12 jam) bila curiga serangan jantung",
              "Konsumsi obat pengencer darah (aspirin/clopidogrel) dan penurun kolesterol (statin) tepat waktu sesuai resep",
              "Terapkan diet rendah lemak jenuh/trans, kurangi garam, dan berhenti merokok total"
            ]
          }
        ]
      },
      {
        "id": "ventrikel-jantung",
        "name": "Ventrikel Kiri Jantung (Ruang Pompa Utama)",
        "latinName": "Ventriculus Sinister Cordis",
        "analogy": "Ventrikel kiri ibarat mesin pompa jet air berkekuatan tinggi yang mendorong air bersih naik ke seluruh penjuru gedung bertingkat.",
        "mainFunction": "Menerima darah kaya oksigen dari atrium kiri lalu memompanya dengan kontraksi kuat melewati katup aorta menuju seluruh jaringan tubuh.",
        "healthFact": "Seiring usia, dinding ventrikel kiri lansia cenderung menebal dan kaku (gagal jantung diastolik/HFpEF), sehingga rongga jantung sulit terisi penuh dan darah terbendung balik ke paru-paru.",
        "diseases": [
          {
            "id": "gagal-jantung",
            "name": "Gagal Jantung Kongestif Geriatri (HFpEF & HFrEF)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Ketidakmampuan otot ventrikel memompa atau mengisi darah secara adekuat untuk memenuhi kebutuhan metabolik tubuh, menyebabkan bendungan cairan di paru dan tungkai.",
            "symptoms": [
              "Sesak napas saat berjalan datar atau beraktivitas ringan yang sebelumnya mampu dilakukan",
              "Sesak napas saat berbaring telentang, sehingga butuh tidur dengan ditopang 2-3 bantal tinggi (ortopnea)",
              "Terbangun tengah malam karena sesak napas seperti tercekik air (paroxysmal nocturnal dyspnea)",
              "Kedua punggung kaki dan pergelangan kaki bengkak (edema) dan cekung bila ditekan jari"
            ],
            "causes": [
              "Hipertensi lama yang memaksa ventrikel memompa melawan resistensi tinggi sehingga dindingnya kaku",
              "Kerusakan jaringan otot jantung pascaserangan jantung koroner sebelumnya",
              "Kekakuan serat kolagen miokardium terkait proses penuaan degeneratif intrinsik"
            ],
            "warningSigns": [
              "Kenaikan berat badan mendadak lebih dari 2 kg dalam 2-3 hari (tanda retensi cairan hebat)",
              "Batuk berbusa merah muda (pink frothy sputum) disertai napas megap-megap (edema paru akut)",
              "Ujung jari dan bibir pucat membiru dingin disertai penurunan kesadaran"
            ],
            "careTips": [
              "Batasi ketat asupan garam dapur (maksimal setengah sendok teh per hari) dan pantau jumlah minum cairan",
              "Timbang berat badan setiap pagi setelah buang air kecil untuk mendeteksi penumpukan cairan dini",
              "Rutin minum obat diuretik dan ACE-inhibitor/ARNI sesuai instruksi dokter spesialis jantung"
            ]
          }
        ]
      },
      {
        "id": "sistem-konduksi-jantung",
        "name": "Sistem Listrik Jantung (Nodus SA & Atrium)",
        "latinName": "Systema Conducens Cordis & Atrium Cordis",
        "analogy": "Nodus SA ibarat dirigen orkestra atau busi listrik yang memercikkan ritme detak jantung agar ketukannya stabil 60 sampai 100 kali per menit.",
        "mainFunction": "Menghasilkan impuls bioelektrik terkoordinasi secara ritmis dari nodus sinoatrial melewati nodus AV menuju serat Purkinje untuk memicu detak jantung.",
        "healthFact": "Fibrilasi atrium adalah gangguan irama jantung nomor satu pada lansia. Atrium tidak berdenyut teratur melainkan hanya bergetar kacau, memicu pembentukan bekuan darah yang dapat lepas ke otak memicu stroke.",
        "diseases": [
          {
            "id": "fibrilasi-atrium",
            "name": "Fibrilasi Atrium (Aritmia Detak Jantung Kacau)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Gangguan irama listrik bilik atas jantung (atrium) yang bergetar cepat dan kacau tanpa koordinasi, menyebabkan detak ventrikel menjadi tidak teratur.",
            "symptoms": [
              "Sensasi jantung berdebar kencang, berdegup tidak beraturan seperti burung mengepakkan sayap di dada",
              "Rasa melayang, limbung, atau kliyengan terutama saat bangkit berdiri",
              "Cepat lelah dan stamina turun drastis saat berjalan",
              "Bisa tanpa gejala berdebar sama sekali pada lansia (hanya terdeteksi saat periksa tensi atau EKG)"
            ],
            "causes": [
              "Fibrosis dan degenerasi sel-sel konduksi listrik nodus SA akibat proses penuaan",
              "Peregangan dinding atrium kiri akibat hipertensi lama atau penyakit katup jantung mitral",
              "Penyakit tiroid, infeksi paru akut, atau gangguan keseimbangan elektrolit kalium/magnesium"
            ],
            "warningSigns": [
              "Kelumpuhan separuh badan mendadak atau bicara pelo (tanda bekuan darah lepas memicu stroke emboli)",
              "Denyut nadi teraba sangat cepat di atas 130 kali/menit disertai nyeri dada dan sesak napas",
              "Pingsan tiba-tiba (hilang kesadaran)"
            ],
            "careTips": [
              "Pelajari teknik MENARI (MEnraba NAdi SendiRI) di pergelangan tangan untuk mendeteksi ketidakteraturan ketukan",
              "Konsumsi obat antikoagulan (pengencer darah DOAC) secara disiplin untuk mencegah stroke bekuan darah",
              "Hindari konsumsi kafein berlebih, rokok, dan alkohol yang dapat memicu ledakan aritmia"
            ]
          }
        ]
      },
      {
        "id": "pembuluh-arteri",
        "name": "Aorta & Arteri Sistemik",
        "latinName": "Aorta & Arteriae Systemicae",
        "analogy": "Arteri ibarat pipa elastis bertekanan tinggi. Di usia muda lentur seperti selang karet baru, di usia tua mengeras seperti pipa paralon kaku.",
        "mainFunction": "Mengalirkan darah bertekanan tinggi dari jantung menuju seluruh organ tubuh dan meredam lonjakan tekanan sistolik.",
        "healthFact": "Kekakuan dinding arteri pada lansia menyebabkan fenomena Hipertensi Sistolik Terisolasi, di mana tensi atas tinggi (>150 mmHg) namun tensi bawah normal atau rendah (<70 mmHg).",
        "diseases": [
          {
            "id": "hipertensi-geriatri",
            "name": "Hipertensi Geriatri & Kekakuan Arteri",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Peningkatan tekanan darah persisten pada lansia yang didorong oleh hilangnya elastisitas elastin dinding pembuluh arteri besar dan peningkatan resistensi vaskular perifer.",
            "symptoms": [
              "Sering kali tanpa keluhan sama sekali (dijuluki 'silent killer')",
              "Pusing berputar atau rasa tegang kaku di pangkal leher belakang",
              "Mudah lelah, telinga berdenging (tinnitus), atau pandangan kabur sesaat",
              "Tekanan darah sistolik di atas 140 mmHg saat diukur dalam kondisi tenang"
            ],
            "causes": [
              "Kekakuan dinding aorta akibat hilangnya serat elastin dan bertambahnya jaringan kolagen fibrotik",
              "Peningkatan kepekaan ginjal lansia terhadap asupan garam dapur",
              "Penurunan sensitivitas refleks baroreseptor leher dalam menstabilkan tekanan darah"
            ],
            "warningSigns": [
              "Tekanan darah melonjak di atas 180/110 mmHg (krisis hipertensi)",
              "Sakit kepala hebat disertai muntah menyembur, mimisan deras, atau penglihatan ganda",
              "Nyeri dada tajam merobek atau kelemahan anggota gerak"
            ],
            "careTips": [
              "Pantau tekanan darah mandiri di rumah secara rutin dengan tensimeter digital terkalibrasi",
              "Terapkan pola makan DASH (kaya sayur, buah, biji-bijian, dan rendah natrium garam)",
              "Bangkit berdiri secara perlahan dari tempat tidur untuk mencegah pusing penurunan tensi mendadak (hipotensi ortostatik)"
            ]
          }
        ]
      },
      {
        "id": "pembuluh-vena",
        "name": "Pembuluh Balik (Vena Dalam Tungkai)",
        "latinName": "Venae Profundae Extremitatis Inferioris",
        "analogy": "Vena tungkai ibarat pipa drainase bawah tanah yang dilengkapi katup satu arah agar aliran air tidak jatuh merembes balik ke bawah.",
        "mainFunction": "Mengalirkan darah deoksigenasi dari tungkai kaki kembali ke atas menuju jantung kanan melawan gaya gravitasi bumi.",
        "healthFact": "Tirah baring lama di kasur atau duduk statis di kursi roda membuat aliran darah vena melambat dan rentan menggumpal membentuk bekuan darah (thrombus).",
        "diseases": [
          {
            "id": "trombosis-dvt",
            "name": "Trombosis Vena Dalam (DVT & Emboli Paru)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Pembentukan bekuan darah (trombus) di dalam pembuluh darah vena dalam tungkai (paha atau betis) yang berisiko lepas dan menyumbat arteri paru-paru.",
            "symptoms": [
              "Satu sisi betis atau paha mendadak bengkak lebih besar daripada sisi lainnya (asimetris)",
              "Kulit betis terasa hangat, tegang, dan memerah mengilat",
              "Nyeri tumpul atau rasa kram hebat pada betis saat menapakkan kaki",
              "Nyeri bertambah saat telapak kaki ditarik ke atas ke arah lutut (tanda Homan positif)"
            ],
            "causes": [
              "Imobilisasi lama (berbaring sakit, pascaoperasi tulang panggul, atau perjalanan jauh berjam-jam)",
              "Perubahan faktor pembekuan darah lansia yang menjadi lebih kental (hiperkoagulabilitas)",
              "Kerusakan katup vena dalam atau dehidrasi berat yang memperlambat sirkulasi darah"
            ],
            "warningSigns": [
              "Sesak napas mendadak hebat tanpa sebab yang jelas (tanda bekuan darah lepas menyumbat paru / emboli paru)",
              "Nyeri dada tajam menusuk yang memburuk saat menarik napas dalam",
              "Batuk berdarah, denyut jantung berdegup kencang, dan pingsan"
            ],
            "careTips": [
              "Lakukan gerakan memompa pergelangan kaki (ankle pumping) secara teratur bagi lansia yang tirah baring",
              "Gunakan stoking kompresi elastis medis sesuai anjuran dokter",
              "Jaga hidrasi cairan cukup dan hindari duduk menekuk kaki terlalu lama tanpa jeda bergerak"
            ]
          }
        ]
      }
    ]
  },
  "digestive": {
    "systemName": "Saluran Pencernaan",
    "systemBadgeColor": "bg-amber-100 text-amber-800",
    "organs": [
      {
        "id": "mulut-esofagus",
        "name": "Mulut & Kerongkongan (Esofagus)",
        "latinName": "Cavum Oris & Oesophagus",
        "analogy": "Kerongkongan ibarat pipa perosotan berpintu katup satu arah. Makanan diremas turun ke lambung, dan katup di bawahnya mencegah asam naik kembali.",
        "mainFunction": "Mengunyah makanan dengan gigi dan air liur, lalu meremas bolus makanan turun ke lambung melalui gerakan gelombang peristaltik.",
        "healthFact": "Produksi air liur lansia berkurang (mulut kering) dan refleks katup kerongkongan bawah melemah, mempermudah naiknya asam lambung.",
        "diseases": [
          {
            "id": "gerd",
            "name": "GERD (Penyakit Asam Lambung Naik)",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Kelemahan pada klep bawah kerongkongan membuat asam lambung berbalik naik ke atas, menimbulkan rasa panas terbakar di dada.",
            "symptoms": [
              "Dada terasa panas seperti terbakar (heartburn) di balik tulang dada",
              "Mulut terasa asam atau pahit di pagi hari",
              "Sering bersendawa dan rasa mengganjal di tenggorokan",
              "Batuk kering di malam hari atau suara serak tanpa pilek"
            ],
            "causes": [
              "Langsung tidur atau rebahan setelah makan",
              "Sering makan porsi besar sekaligus atau makanan pedas, berminyak, kopi kental, dan cokelat",
              "Kelemahan katup esofagus bawah akibat penuaan dan obesitas"
            ],
            "warningSigns": [
              "Nyeri dada hebat yang menjalar ke lengan kiri atau rahang (harus dibedakan dengan serangan jantung!)",
              "Kesulitan menelan makanan padat atau makanan terasa tersangkut di dada",
              "Muntah darah atau buang air besar hitam seperti aspal"
            ],
            "careTips": [
              "Tunggu minimal 2-3 jam setelah makan sebelum berbaring atau tidur",
              "Tidur dengan bantal lebih tinggi atau miringkan tempat tidur 15-20 derajat",
              "Makan dengan porsi kecil tapi sering (4-5 kali sehari dengan porsi sedang)"
            ]
          },
          {
            "id": "disfagia",
            "name": "Disfagia (Sulit Menelan pada Lansia)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kelemahan saraf atau otot tenggorokan yang membuat proses menelan makanan atau obat menjadi sulit dan berisiko tersedak.",
            "symptoms": [
              "Tersedak atau batuk setiap kali minum air putih atau makan sup",
              "Perlu waktu sangat lama untuk menyelesaikan satu porsi makan",
              "Makanan terasa menumpuk di dasar tenggorokan",
              "Suara terdengar basah atau 'gurgly' setelah menelan makanan"
            ],
            "causes": [
              "Pelemahan otot menelan alami seiring usia (presbifagia)",
              "Riwayat stroke ringan, penyakit Parkinson, atau demensia",
              "Gigi palsu yang tidak pas atau gigi tanggal banyak"
            ],
            "warningSigns": [
              "Penurunan berat badan drastis karena takut tersedak saat makan",
              "Demam mendadak disertai batuk setelah peristiwa tersedak (tanda radang paru aspirasi)"
            ],
            "careTips": [
              "Modifikasi tekstur makanan menjadi lebih lembut, cincang, atau lumat",
              "Minum air dengan posisi kepala agak menunduk (chin tuck) saat menelan",
              "Pastikan lansia makan dalam suasana tenang tanpa diajak mengobrol saat mengunyah"
            ]
          }
        ]
      },
      {
        "id": "lambung",
        "name": "Lambung (Gaster)",
        "latinName": "Gaster / Stomach",
        "analogy": "Lambung ibarat panci masak berasam kuat yang mengaduk dan menghancurkan makanan padat menjadi bubur halus sebelum disalurkan ke usus.",
        "mainFunction": "Mencerna makanan secara mekanik dengan remasan dinding otot lambung dan kimiawi dengan enzim pepsin serta asam lambung pekat (HCl).",
        "healthFact": "Lapisan lendir pelindung dinding lambung menipis pada usia tua, membuat lambung lansia lebih sensitif terhadap obat pereda nyeri sendi.",
        "diseases": [
          {
            "id": "maag-gastritis",
            "name": "Maag (Gastritis / Radang Lambung)",
            "category": "Peradangan",
            "summary": "Iritasi dan peradangan pada dinding bagian dalam lambung, menimbulkan rasa perih dan kembung.",
            "symptoms": [
              "Nyeri ulu hati yang terasa perih, melilit, atau panas",
              "Perut terasa begah, kembung, dan cepat kenyang meski baru makan sedikit",
              "Mual, ingin muntah, dan sering bersendawa",
              "Nafsu makan menurun drastis"
            ],
            "causes": [
              "Pola makan tidak teratur atau sering terlambat makan",
              "Konsumsi obat pereda nyeri rematik/sendi (NSAID seperti asam mefenamat, piroksikam) tanpa resep dokter",
              "Infeksi bakteri Helicobacter pylori",
              "Stres fisik atau pikiran"
            ],
            "warningSigns": [
              "Muntah cairan hitam kecokelatan seperti ampas bubuk kopi",
              "Buang air besar berwarna hitam pekat lengket dan berbau amis busuk",
              "Nyeri ulu hati hebat mendadak tembus ke punggung belakang"
            ],
            "careTips": [
              "Makan tepat waktu secara teratur dengan porsi tidak berlebihan",
              "Hindari makanan pemicu: sambal pedas, cuka masam, santan kental, kopi, dan soda",
              "Jangan minum obat antinyeri sendi dalam keadaan perut kosong; selalu konsultasikan ke dokter"
            ]
          },
          {
            "id": "tukak-lambung",
            "name": "Tukak Lambung (Luka Dinding Lambung)",
            "category": "Peradangan",
            "summary": "Luka atau borok terbuka pada lapisan dalam dinding lambung akibat terkikis oleh asam lambung yang berlebih.",
            "symptoms": [
              "Nyeri ulu hati terasa perih menyengat terutama saat perut kosong",
              "Rasa terbakar yang berkurang sesaat setelah makan tapi kambuh lagi 1-2 jam kemudian",
              "Perut terasa kembung, mual, dan berat badan menurun bertahap",
              "Cepat merasa kenyang saat makan"
            ],
            "causes": [
              "Penggunaan rutin obat antinyeri sendi/rematik (aspirin, ibuprofen, kalium diklofenak)",
              "Infeksi bakteri Helicobacter pylori yang merusak lapisan lendir pelindung lambung",
              "Stres fisik berat dan kebiasaan merokok"
            ],
            "warningSigns": [
              "Buang air besar berwarna hitam pekat lengket seperti ter (melena)",
              "Muntah bercampur darah merah segar atau hitam",
              "Nyeri perut hebat mendadak yang membuat tubuh membungkuk menahan sakit"
            ],
            "careTips": [
              "Hindari minum obat antinyeri bebas tanpa resep dan pelindung lambung",
              "Konsumsi makanan bertekstur lunak dan tidak merangsang dinding lambung",
              "Konsultasikan ke dokter spesialis untuk tes endoskopi bila nyeri ulu hati tidak kunjung membaik"
            ]
          }
        ]
      },
      {
        "id": "hati-empedu",
        "name": "Hati & Kantung Empedu",
        "latinName": "Hepar & Vesica Fellea",
        "analogy": "Hati ibarat pabrik penyaring racun dan pembersih darah terbesar, sedangkan kantung empedu adalah botol semprot pengencer lemak makanan.",
        "mainFunction": "Menyaring racun darah, memproses zat gizi, memproduksi cairan empedu untuk mencerna lemak, dan menyimpan cadangan energi glikogen.",
        "healthFact": "Volume dan aliran darah ke hati menurun sekitar 30% pada usia senja, sehingga tubuh lansia memecah obat-obatan lebih lambat.",
        "diseases": [
          {
            "id": "batu-empedu",
            "name": "Batu Empedu (Kolelitiasis)",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Pengendapan kolesterol atau garam empedu di dalam kantung empedu hingga membentuk butiran batu keras yang menyumbat saluran.",
            "symptoms": [
              "Nyeri hebat mendadak di perut kanan atas yang menjalar ke bahu atau belikat kanan",
              "Nyeri biasanya muncul 1-2 jam setelah mengonsumsi makanan berminyak atau santan",
              "Mual muntah hebat dan perut terasa kembung begah",
              "Rasa tidak nyaman saat duduk tegak"
            ],
            "causes": [
              "Pola makan tinggi lemak jenuh, santan, dan kolesterol",
              "Pergerakan kantung empedu yang melambat pada lansia",
              "Penurunan berat badan yang terlalu cepat atau obesitas"
            ],
            "warningSigns": [
              "Mata dan kulit mulai tampak menguning (ikterus)",
              "Demam tinggi menggigil bersamaan dengan sakit perut kanan atas hebat",
              "Warna air kencing pekat seperti air teh tua dan kotoran BAB berwarna pucat seperti dempul"
            ],
            "careTips": [
              "Batasi makanan bersantan kental, jeroan, gorengan berulang kali pakai minyak jelantah",
              "Perbanyak konsumsi serat dari buah pepaya, apel, dan sayur bening",
              "Lakukan USG perut secara berkala jika sering mengalami kembung setelah makan berminyak"
            ]
          },
          {
            "id": "fatty-liver",
            "name": "Perlemakan Hati (Fatty Liver)",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Penumpukan sel lemak berlebih di dalam jaringan hati yang dapat memicu peradangan dan pengerasan jaringan hati jika dibiarkan.",
            "symptoms": [
              "Sering tanpa gejala di awal (silent condition)",
              "Badan terasa gampang lelah dan lesu tanpa sebab jelas",
              "Rasa mengganjal atau pegal tumpul di perut bagian kanan atas"
            ],
            "causes": [
              "Kadar kolesterol, trigliserida, atau gula darah tinggi (Diabetes Tipe 2)",
              "Kurang aktivitas gerak fisik di usia pensiun",
              "Konsumsi karbohidrat olahan dan gula pasir berlebih"
            ],
            "warningSigns": [
              "Perut mulai membuncit kencang berisi cairan (asites)",
              "Kaki bengkak dan mudah memar tanpa terbentur"
            ],
            "careTips": [
              "Jalan kaki santai 20-30 menit setiap pagi untuk membantu membakar timbunan lemak hati",
              "Kurangi konsumsi kue manis, sirup, dan tepung terigu olahan",
              "Periksa fungsi enzim hati (SGOT/SGPT) saat medical check up rutin"
            ]
          },
          {
            "id": "drainase-selang-hati",
            "name": "Pemasangan Selang Hati & Drainase Empedu (PTBD, Abses & Asites)",
            "category": "Peradangan",
            "summary": "Pemasangan selang kateter drainase khusus pada area hati/kantung empedu karena ada cairan yang tersumbat, menumpuk, atau terinfeksi yang harus segera dialirkan keluar agar tidak merusak organ hati dan membahayakan nyawa.",
            "symptoms": [
              "Badan dan bagian putih mata tampak menguning pekat (ikterus/jaundice)",
              "Rasa gatal-gatal hebat di seluruh kulit akibat penumpukan cairan empedu dan bilirubin di darah",
              "Perut membuncit kencang terisi cairan (asites berat) yang menyebabkan begah dan sesak napas saat berbaring",
              "Demam tinggi menggigil disertai nyeri berdenyut di perut kanan atas (tanda abses nanah di dalam jaringan hati)",
              "Air kencing berwarna gelap seperti air teh tua dan kotoran BAB berwarna pucat seperti dempul"
            ],
            "causes": [
              "1. Sumbatan Saluran Empedu (Drainase Bilier / PTBD): Batu empedu, penyempitan saluran (striktur), atau tumor menyumbat empedu sehingga cairan menumpuk dan merembes ke darah.",
              "2. Abses Hati (Penumpukan Nanah): Infeksi bakteri atau parasit di dalam jaringan hati yang membentuk kantung nanah (liver abscess) dan tidak bisa hilang hanya dengan obat minum.",
              "3. Penumpukan Cairan di Rongga Perut (Asites Berat): Kerusakan hati kronis (sirosis) menghambat aliran darah hepar sehingga cairan merembes ke rongga perut (parasentesis / selang drainase).",
              "4. Pasca Operasi Hati atau Kantung Empedu: Pemasangan selang drainase sementara (seperti T-Tube atau drain bedah) untuk mengeluarkan sisa rembesan darah, nanah, atau cairan empedu pascaoperasi."
            ],
            "warningSigns": [
              "Cairan yang mengalir ke kantung selang MENDADAK BERUBAH MENJADI DARAH MERAH SEGAR dalam jumlah banyak (>100 mL/jam)",
              "Selang drainase tersumbat total, bocor, atau terlepas/tercabut keluar dari dinding perut (JANGAN mencoba mendorong masuk kembali!)",
              "Demam tinggi menggigil mendadak disertai perut mengeras kaku seperti papan dan nyeri hebat (tanda peritonitis akibat kebocoran empedu ke rongga perut)",
              "Kulit di sekitar tusukan selang membengkak merah, panas, dan mengeluarkan nanah berbau busuk"
            ],
            "careTips": [
              "Posisikan kantong penampung cairan selang drainase selalu LEBIH RENDAH dari perut agar cairan mengalir lancar karena gaya gravitasi",
              "Catat volume (mililiter) dan amati warna cairan yang keluar setiap hari pada buku catatan khusus untuk dilaporkan ke dokter",
              "Jaga kassa penutup luka tusukan tetap kering; ganti balutan steril secara rutin sesuai anjuran perawat dan jangan biarkan terkena air saat mandi",
              "Hindari gerakan memutar badan mendadak atau mengenakan pakaian ketat yang dapat menarik atau menjepit selang drainase"
            ]
          }
        ]
      },
      {
        "id": "pankreas",
        "name": "Pankreas",
        "latinName": "Pancreas",
        "analogy": "Pankreas ibarat kunci pengatur energi tubuh. Organ ini menghasilkan enzim cerna dan hormon insulin agar gula darah tidak melonjak tinggi.",
        "mainFunction": "Memproduksi hormon insulin dan glukagon untuk mengatur kadar gula darah, serta memproduksi enzim amilase, lipase, dan tripsin untuk mencerna makanan.",
        "healthFact": "Produksi insulin oleh sel beta pankreas berkurang alami di usia senja, menyebabkan lansia sangat rentan terkena diabetes melitus tipe 2.",
        "diseases": [
          {
            "id": "diabetes-tipe-2",
            "name": "Diabetes Melitus Tipe 2 (Disfungsi Pankreas)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Penurunan produksi dan resistensi kerja hormon insulin pankreas, membuat kadar gula menumpuk berbahaya di pembuluh darah.",
            "symptoms": [
              "Sering buang air kecil di malam hari (bisa 4-6 kali terbangun)",
              "Sering merasa haus luar biasa dan tenggorokan kering",
              "Cepat lapar namun berat badan justru menyusut",
              "Luka pada kulit atau kaki lama sembuh, kesemutan di ujung telapak kaki"
            ],
            "causes": [
              "Penuaan sel pankreas yang memproduksi insulin",
              "Riwayat keluarga dengan diabetes",
              "Berat badan berlebih dan gaya hidup jarang berolahraga"
            ],
            "warningSigns": [
              "Lansia tampak mengantuk berat, linglung, napas berbau manis buah (tanda koma diabetik)",
              "Luka di telapak kaki yang menghitam atau bernanah tanpa rasa sakit",
              "Pandangan mata kabur mendadak"
            ],
            "careTips": [
              "Rutin cek gula darah puasa dan HbA1c minimal setiap 3-6 bulan",
              "Ganti nasi putih porsi besar dengan kombinasi nasi merah atau kentang rebus dan perbanyak sayur serat",
              "Periksa telapak kaki setiap hari untuk memastikan tidak ada lecet atau luka tersembunyi"
            ]
          },
          {
            "id": "pankreatitis",
            "name": "Pankreatitis (Radang Kelenjar Pankreas)",
            "category": "Peradangan",
            "summary": "Peradangan serius pada kelenjar pankreas akibat enzim pencernaan aktif terlalu dini dan merusak jaringan pankreas itu sendiri.",
            "symptoms": [
              "Nyeri perut tengah atas yang tembus menusuk hingga ke punggung belakang",
              "Rasa sakit bertambah buruk setelah makan makanan berminyak",
              "Mual muntah hebat dan perut terasa sangat tegang",
              "Detak jantung cepat dan demam meriang"
            ],
            "causes": [
              "Sumbatan batu empedu yang tersangkut di saluran muara pankreas (batu empedu menyumbat ampula)",
              "Kadar trigliserida (lemak darah) yang sangat tinggi",
              "Konsumsi alkohol atau efek samping obat-obatan tertentu"
            ],
            "warningSigns": [
              "Nyeri perut luar biasa yang tidak mereda dengan posisi apapun",
              "Mata tampak kuning, napas sesak, dan tensi darah turun mendadak (kondisi gawat darurat!)"
            ],
            "careTips": [
              "Hindari makanan berlemak tinggi dan gorengan",
              "Segera periksakan diri ke dokter bila memiliki riwayat batu empedu",
              "Jangan mengonsumsi suplemen atau obat tanpa petunjuk dokter spesialis"
            ]
          }
        ]
      },
      {
        "id": "usus-halus",
        "name": "Usus Halus",
        "latinName": "Intestinum Tenue",
        "analogy": "Usus halus ibarat lorong penyerap sari makanan terpanjang (panjang sekitar 6 meter). Dindingnya penuh jonjot halus yang menyedot vitamin, protein, dan tenaga untuk tubuh.",
        "mainFunction": "Tempat utama pencernaan kimiawi dan penyerapan 90% sari-sari makanan, vitamin, asam amino, dan mineral ke dalam aliran darah.",
        "healthFact": "Kemampuan vili usus halus menyerap kalsium dan vitamin B12 menurun pada lansia, meningkatkan risiko pengeroposan tulang (osteoporosis) dan anemia.",
        "diseases": [
          {
            "id": "malabsorpsi",
            "name": "Malabsorpsi Nutrisi & Diare Kronis",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kegagalan dinding usus halus dalam menyerap nutrisi makanan, menyebabkan tinja berminyak, penurunan berat badan, dan anemia.",
            "symptoms": [
              "Buang air besar cair atau lembek berbusa, bau sangat tajam",
              "Berat badan lansia merosot meski porsi makan normal",
              "Badan lemas, pucat, dan mudah pusing (akibat kekurangan zat besi)",
              "Perut berbunyi gemuruh kencang setelah makan"
            ],
            "causes": [
              "Penurunan enzim pencernaan di dinding usus pada lansia",
              "Pertumbuhan bakteri berlebih di usus halus (SIBO)",
              "Intoleransi laktosa (tidak kuat susu sapi murni di usia tua)"
            ],
            "warningSigns": [
              "Diare terus menerus lebih dari 3 hari dengan tanda dehidrasi (mata cekung, bibir pecah, mengigau)",
              "Kram otot parah akibat ketidakseimbangan elektrolit kalsium dan kalium"
            ],
            "careTips": [
              "Pilih susu khusus lansia bebas laktosa atau susu kedelai jika perut kembung setelah minum susu",
              "Konsumsi makanan matang yang mudah dicerna seperti bubur ayam, sup ikan, dan telur rebus",
              "Pastikan suplementasi vitamin B kompleks dan kalsium atas petunjuk dokter"
            ]
          }
        ]
      },
      {
        "id": "usus-besar",
        "name": "Usus Besar & Rektum",
        "latinName": "Colon & Rectum",
        "analogy": "Usus besar ibarat tempat pengeringan dan penampungan akhir. Organ ini menyerap kelebihan air dari ampas makanan lalu membentuk tinja yang padat dan rapi.",
        "mainFunction": "Menyerap kembali cairan dan elektrolit dari sisa pencernaan, membusukkan sisa makanan dengan bantuan bakteri baik, dan mendorong feses ke rektum.",
        "healthFact": "Gerakan peristaltik usus besar melambat signifikan pada lansia, dan otot panggul melemah sehingga sembelit menjadi keluhan nomor satu.",
        "diseases": [
          {
            "id": "sembelit-kronis",
            "name": "Sembelit / Konstipasi Kronis Lansia",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Kotoran menjadi sangat keras dan kering sehingga sulit dikeluarkan, buang air besar kurang dari 3 kali dalam seminggu.",
            "symptoms": [
              "Harus mengejan kuat hingga muka merah saat buang air besar",
              "Tinja berbentuk keras bulat-bulat kecil seperti kotoran kambing",
              "Perut bagian bawah terasa penuh, kencang, dan tidak tuntas",
              "Nafsu makan berkurang dan sering kentut berbau busuk"
            ],
            "causes": [
              "Kurang minum air putih dan asupan sayur/buah berserat",
              "Kurang bergerak aktif (banyak duduk atau berbaring)",
              "Efek samping obat-obatan rutin lansia (obat hipertensi, obat antinyeri, suplemen zat besi, obat lambung antasida)"
            ],
            "warningSigns": [
              "Tidak bisa buang air besar maupun buang angin sama sekali lebih dari 4 hari disertai muntah hijau (tanda sumbatan usus ileus)",
              "Keluarnya darah segar saat buang air besar",
              "Perut membesar kencang dan sangat sakit saat ditekan"
            ],
            "careTips": [
              "Perbanyak minum air hangat minimal 1,5 - 2 liter sehari (jika tidak dibatasi oleh dokter jantung/ginjal)",
              "Konsumsi pepaya matang, buah naga, oat, atau agar-agar rumput laut setiap hari",
              "Lakukan jalan santai pagi untuk merangsang kontraksi usus alami"
            ]
          },
          {
            "id": "divertikulitis",
            "name": "Divertikulitis (Radang Kantung Usus)",
            "category": "Peradangan",
            "summary": "Terbentuknya kantung-kantung kecil menonjol pada dinding usus besar lansia yang kemudian meradang atau terinfeksi kotoran yang terjebak.",
            "symptoms": [
              "Nyeri perut kiri bawah yang menetap dan terasa menusuk",
              "Demam meriang dan badan menggigil",
              "Mual, kembung, dan perubahan pola BAB dari sembelit menjadi diare"
            ],
            "causes": [
              "Kebiasaan sembelit menahun akibat kurang serat, menyebabkan tekanan tinggi di dalam usus besar",
              "Pelemahan alami dinding otot usus seiring pertambahan usia"
            ],
            "warningSigns": [
              "Nyeri perut kiri bawah yang mendadak sangat hebat dan perut kaku seperti papan",
              "Muntah berulang dan demam tinggi di atas 39°C"
            ],
            "careTips": [
              "Terapkan diet tinggi serat bertahap untuk menjaga kotoran tetap lembut",
              "Hindari menahan buang air besar saat dorongan BAB muncul",
              "Segera periksa ke dokter spesialis bedah/penyakit dalam saat perut kiri bawah sakit hebat"
            ]
          }
        ]
      },
      {
        "id": "apendiks",
        "name": "Usus Buntu (Apendiks)",
        "latinName": "Appendix Vermiformis",
        "analogy": "Usus buntu ibarat pipa buntuk kecil seukuran jari kelingking di pertemuan usus halus dan usus besar. Meski kecil, jika tersumbat ampas keras dapat meradang hebat.",
        "mainFunction": "Tempat cadangan bakteri baik usus dan bagian dari sistem kekebalan jaringan limfoid saluran cerna bagian bawah.",
        "healthFact": "Pada orang tua, lubang usus buntu menyempit secara alami. Gejala radang usus buntu pada lansia seringkali TIDAK khas (jarang demam tinggi), sehingga sering terlambat disadari.",
        "diseases": [
          {
            "id": "apendisitis",
            "name": "Radang Usus Buntu (Apendisitis)",
            "category": "Peradangan",
            "summary": "Penyumbatan dan peradangan mendadak pada umbai cacing usus buntu yang membutuhkan tindakan medis segera.",
            "symptoms": [
              "Awalnya nyeri tumpul di sekitar pusar, lalu berpindah ke perut kanan bawah",
              "Nyeri semakin tajam saat berjalan, batuk, atau saat kaki kanan diangkat",
              "Nafsu makan hilang mendadak, disertai mual dan perut kembung",
              "Pada lansia: rasa pegal di perut kanan bawah yang tidak kunjung reda"
            ],
            "causes": [
              "Sumbatan ampas feses keras membatu (fekalit)",
              "Pembengkakan kelenjar getah bening usus akibat infeksi virus",
              "Infeksi bakteri usus"
            ],
            "warningSigns": [
              "Nyeri perut kanan bawah yang mendadak hilang tetapi perut menjadi kaku dan lansia demam menggigil (TANDA USUS BUNTU PECAH/PERFORASI)",
              "Detak nadi menjadi sangat cepat dan tekanan darah drop",
              "Kondisi darurat: SEGERA KE IGD RUMAH SAKIT TERDEKAT!"
            ],
            "careTips": [
              "JANGAN memberikan obat pencahar atau kompres air panas di perut saat dicurigai usus buntu",
              "Jangan beri makan atau minum jika hendak dibawa ke IGD untuk persiapan tindakan dokter",
              "Cegah tinja keras dengan rutin mengonsumsi serat dan cairan cukup"
            ]
          }
        ]
      }
    ]
  },
  "respiratory": {
    "systemName": "Saluran Pernapasan",
    "systemBadgeColor": "bg-sky-100 text-sky-800",
    "organs": [
      {
        "id": "rongga-hidung",
        "name": "Rongga Hidung & Faring",
        "latinName": "Cavum Nasi & Pharynx",
        "analogy": "Rongga hidung ibarat mesin AC dan penyaring udara alami. Bulu halus dan lendir di dalamnya menghangatkan, melembapkan, dan menjerat debu kotor sebelum udara masuk ke paru-paru.",
        "mainFunction": "Gerbang utama masuknya udara pernapasan, menyaring partikel debu/kuman, menghangatkan suhu udara, dan meneruskan udara ke tenggorokan.",
        "healthFact": "Pada usia lanjut, selaput lendir hidung cenderung lebih kering dan tipis, sehingga lansia lebih gampang bersin atau mengalami mimisan ringan saat cuaca dingin.",
        "diseases": [
          {
            "id": "ispa",
            "name": "ISPA (Infeksi Saluran Pernapasan Akut)",
            "category": "Infeksi",
            "summary": "Infeksi mendadak pada hidung, sinus, atau tenggorokan yang disebabkan oleh virus flu atau bakteri.",
            "symptoms": [
              "Hidung tersumbat, beringus encer hingga kental",
              "Tenggorokan gatal, perih saat menelan",
              "Batuk kering atau berdahak ringan",
              "Badan pegal linu, meriang, dan kepala pusing"
            ],
            "causes": [
              "Penularan virus influenza atau rhinovirus lewat percikan batuk/bersin",
              "Penurunan daya tahan tubuh (imunitas) di usia senja",
              "Perubahan cuaca dingin atau paparan polusi udara"
            ],
            "warningSigns": [
              "Napas tersengal-sengal atau berbunyi grok-grok",
              "Demam di atas 38,5°C yang tidak turun setelah 3 hari",
              "Lansia tampak sangat lemas, sulit makan, atau kehilangan kesadaran"
            ],
            "careTips": [
              "Istirahat cukup dan banyak minum air putih hangat minimal 6-8 gelas sehari",
              "Kumur air garam hangat untuk meredakan nyeri tenggorokan",
              "Gunakan masker saat berada di keramaian atau saat ada anggota keluarga yang batuk pilek"
            ]
          },
          {
            "id": "rinitis-alergi",
            "name": "Rinitis Alergi & Sinusitis",
            "category": "Peradangan",
            "summary": "Peradangan pada rongga hidung dan rongga sinus akibat sensitivitas berlebih terhadap debu rumah, serbuk sari, atau udara dingin.",
            "symptoms": [
              "Bersin berulang kali di pagi hari",
              "Hidung gatal dan mengeluarkan ingus bening",
              "Rasa tertekan atau nyeri tumpul di sekitar dahi dan pipi",
              "Penciuman agak berkurang"
            ],
            "causes": [
              "Tungau debu pada kasur/bantal kapuk atau bulu hewan peliharaan",
              "Perubahan suhu mendadak dari ruang ber-AC ke luar ruangan",
              "Riwayat alergi turunan"
            ],
            "warningSigns": [
              "Keluar cairan hidung berwarna hijau pekat dan berbau tidak sedap",
              "Nyeri hebat di area mata atau dahi disertai demam tinggi"
            ],
            "careTips": [
              "Cuci seprai dan sarung bantal dengan air panas seminggu sekali",
              "Hindari karpet tebal berdebu di kamar tidur lansia",
              "Bisa melakukan cuci hidung dengan larutan saline (cairan infus steril NaCl 0,9%) atas anjuran dokter"
            ]
          }
        ]
      },
      {
        "id": "trakea",
        "name": "Tenggorokan (Trakea)",
        "latinName": "Trachea",
        "analogy": "Trakea ibarat pipa saluran utama yang kokoh dengan cincin tulang rawan pelindung. Saluran ini menjaga jalan napas tetap terbuka lebar setiap saat.",
        "mainFunction": "Menjadi pipa penghubung udara dari pita suara ke paru-paru, serta memiliki rambut getar (silia) untuk menyapu debu keluar lewat refleks batuk.",
        "healthFact": "Otot tenggorokan pada orang tua sedikit mengendur, yang menyebabkan refleks menelan melambat sehingga lebih rentan tersedak jika makan terburu-buru.",
        "diseases": [
          {
            "id": "trakeitis-laringitis",
            "name": "Laringitis & Radang Batang Tenggorok",
            "category": "Peradangan",
            "summary": "Peradangan pada pita suara dan pipa napas trakea yang menyebabkan suara serak parau hingga batuk menggonggong.",
            "symptoms": [
              "Suara serak mendadak bahkan hilang (hanya berbisik)",
              "Tenggorokan terasa kering, gatal, dan perih",
              "Batuk kering berulang yang mengganjal di dada atas",
              "Sensasi nyeri saat menelan atau berbicara panjang"
            ],
            "causes": [
              "Terlalu banyak berbicara kencang atau bernyanyi",
              "Paparan asap rokok atau polusi asap pembakaran sampah",
              "Asam lambung yang naik ke atas (LPR / Silent Reflux)"
            ],
            "warningSigns": [
              "Kesulitan bernapas yang terdengar bunyi 'ngik' saat menarik napas (stridor)",
              "Sulit menelan air ludah sendiri",
              "Bibir tampak kebiruan"
            ],
            "careTips": [
              "Istirahatkan suara (hindari berbisik keras atau berteriak)",
              "Minum air hangat dan jauhi gorengan serta makanan berminyak",
              "Hindari merokok dan jauhi asap rokok di rumah"
            ]
          }
        ]
      },
      {
        "id": "bronkus",
        "name": "Bronkus (Percabangan Saluran Napas)",
        "latinName": "Bronchi",
        "analogy": "Bronkus ibarat cabang dan ranting pohon yang menyalurkan udara ke bagian kanan dan kiri paru-paru secara merata.",
        "mainFunction": "Membagi aliran udara dari trakea ke paru-paru kanan dan kiri, serta menyaring kotoran lebih lanjut dengan memproduksi lendir alami.",
        "healthFact": "Daya sapu rambut getar (silia) bronkus berkurang seiring usia, membuat pembersihan lendir pada lansia butuh bantuan batuk efektif.",
        "diseases": [
          {
            "id": "bronkitis",
            "name": "Bronkitis (Radang Saluran Bronkus)",
            "category": "Peradangan",
            "summary": "Peradangan dan pembengkakan pada dinding bronkus yang memicu produksi lendir dahak berlebihan.",
            "symptoms": [
              "Batuk berdahak tebal (putih, kuning, atau abu-abu kehijauan)",
              "Dada terasa berat, perih, atau tidak nyaman",
              "Napas berbunyi lirih (mengi ringan)",
              "Badan cepat lelah dan meriang"
            ],
            "causes": [
              "Paparan asap rokok aktif maupun pasif selama bertahun-tahun",
              "Kelanjutan dari infeksi flu atau pilek yang tidak kunjung sembuh",
              "Polusi udara, asap dapur berbahan bakar kayu/arang"
            ],
            "warningSigns": [
              "Batuk berdahak berdarah atau berlangsung lebih dari 3 minggu",
              "Sesak napas bertambah saat berjalan beberapa langkah saja",
              "Kaki mulai tampak bengkak"
            ],
            "careTips": [
              "Latihan batuk efektif untuk mengeluarkan dahak tanpa menguras tenaga",
              "Minum air putih hangat untuk mengencerkan lendir dahak",
              "Pastikan sirkulasi udara kamar tidur lancar dengan membuka jendela pagi hari"
            ]
          },
          {
            "id": "asma",
            "name": "Asma Bronkial",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Penyempitan dan pembengkakan saluran bronkus yang bersifat kambuhan jika terkena pemicu tertentu.",
            "symptoms": [
              "Sesak napas tiba-tiba terutama di malam hari atau subuh",
              "Napas berbunyi menciut-ciut ('ngik-ngik' / mengi)",
              "Dada terasa seperti diikat kencang dengan tali",
              "Batuk kering tanpa henti saat terpapar udara dingin"
            ],
            "causes": [
              "Pemicu alergen: debu, bulu hewan, serbuk bunga, atau kecoa",
              "Udara dingin malam hari atau perubahan cuaca drastis",
              "Stres emosional, kecemasan, atau kelelahan fisik",
              "Zat pengawet makanan atau obat pereda nyeri tertentu"
            ],
            "warningSigns": [
              "Obat semprot pelega napas (inhaler) tidak lagi meringankan sesak",
              "Lansia kesulitan berbicara satu kalimat utuh tanpa terengah-engah",
              "Ujung jari atau bibir mulai terlihat membiru pucat"
            ],
            "careTips": [
              "Selalu bawa obat semprot (inhaler) ke mana pun lansia bepergian",
              "Gunakan jaket tebal dan syal saat bepergian di cuaca dingin",
              "Hindari memelihara hewan berbulu di dalam kamar tidur"
            ]
          }
        ]
      },
      {
        "id": "paru-paru",
        "name": "Paru-paru & Alveolus",
        "latinName": "Pulmo & Alveoli",
        "analogy": "Paru-paru ibarat sepasang spons ajaib berpori jutaan (alveolus). Spons ini menyerap oksigen bersih ke dalam aliran darah dan membuang gas kotor keluar.",
        "mainFunction": "Pusat utama pertukaran gas pernapasan: memasukkan oksigen (O2) ke sel darah merah dan membuang karbondioksida (CO2) ke luar tubuh.",
        "healthFact": "Kapasitas rongga dada dan kelenturan spons paru lansia menyusut sekitar 20%, sehingga lansia wajar jika napasnya lebih pendek saat naik tangga.",
        "diseases": [
          {
            "id": "pneumonia",
            "name": "Pneumonia (Radang Paru-paru Basah)",
            "category": "Infeksi",
            "summary": "Kantung udara (alveolus) meradang dan terisi cairan atau nanah. Salah satu penyebab rawat inap terbanyak pada lansia.",
            "symptoms": [
              "Demam tinggi menggigil, atau pada lansia justru SUHU RENDAH (hipotermia)",
              "Batuk berdahak kental warna kuning, cokelat kemerahan, atau hijau",
              "Napas pendek dan cepat, dada nyeri saat menarik napas dalam",
              "Gejala khas lansia: MENDADAK LINGLUNG, bingung, hilang nafsu makan, atau jatuh"
            ],
            "causes": [
              "Infeksi bakteri Streptococcus pneumoniae atau virus influenza",
              "Aspirasi (tersedak makanan atau minuman masuk ke paru-paru)",
              "Daya tahan tubuh lansia yang menurun atau komorbid kencing manis/jantung"
            ],
            "warningSigns": [
              "Laju napas lebih dari 25 kali per menit saat istirahat",
              "Kadar saturasi oksigen (SpO2 pada oximeter) turun di bawah 93%",
              "Lansia tampak sangat mengantuk, tidak mau diajak bicara, atau meracau"
            ],
            "careTips": [
              "Dapatkan vaksinasi pneumonia (PCV/PPSV) dan vaksin flu tahunan sesuai anjuran dokter",
              "Pastikan lansia duduk tegak saat makan/minum dan jangan langsung berbaring setelah makan",
              "Jaga kebersihan gigi dan mulut lansia untuk mencegah kuman mulut terhirup ke paru"
            ]
          },
          {
            "id": "ppok",
            "name": "PPOK (Penyakit Paru Obstruktif Kronis)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kerusakan menahun pada kantung udara paru dan saluran napas akibat paparan zat beracun jangka panjang yang membuat napas tersengal permanen.",
            "symptoms": [
              "Sesak napas kronis yang bertambah buruk saat aktivitas ringan",
              "Batuk berdahak berkepanjangan setiap pagi (dikenal batuk perokok)",
              "Dada terasa kaku dan mengembang kembung seperti tong (barrel chest)",
              "Penurunan berat badan dan otot tubuh melemah"
            ],
            "causes": [
              "Kebiasaan merokok aktif bertahun-tahun di masa muda",
              "Paparan asap kayu bakar, asap pabrik, atau asap pembakaran sampah",
              "Penuaan alami jaringan elastis paru (degeneratif)"
            ],
            "warningSigns": [
              "Bibir biru, kuku membiru, atau sesak napas berat saat sedang duduk santai",
              "Bengkak pada kedua pergelangan kaki (tanda beban jantung kanan meningkat)",
              "Batuk dahak berubah warna menjadi pekat dengan demam"
            ],
            "careTips": [
              "Berhenti merokok sepenuhnya dan hindari tempat berasap rokok",
              "Lakukan senam pernapasan ringan (pursed-lip breathing: tarik napas hidung, hembuskan perlahan lewat bibir mengerucut)",
              "Gunakan terapi oksigen sesuai resep dokter spesialis paru"
            ]
          }
        ]
      }
    ]
  },
  "nervous": {
    "systemName": "Sistem Saraf",
    "systemBadgeColor": "bg-cyan-100 text-cyan-800",
    "organs": [
      {
        "id": "otak-besar",
        "name": "Otak Besar (Serebrum)",
        "latinName": "Cerebrum",
        "analogy": "Otak besar ibarat kantor pusat komputer utama tubuh yang mengendalikan pikiran, memori ingatan, ucapan, emosi, dan seluruh perintah gerakan anggota tubuh.",
        "mainFunction": "Pusat kesadaran tertinggi, proses berpikir dan ingatan, persepsi panca indra, pengaturan gerakan sadar, dan fungsi eksekutif mental.",
        "healthFact": "Volume otak mengalami penyusutan alami sekitar 5% per dekade setelah usia 40 tahun. Lansia membutuhkan stimulasi kognitif aktif agar koneksi antarsel saraf tetap terjaga kuat.",
        "diseases": [
          {
            "id": "stroke",
            "name": "Stroke (Iskemik & Hemoragik)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kematian sel-sel otak akibat sumbatan gumpalan darah atau pecahnya pembuluh darah di otak, memicu kelumpuhan mendadak.",
            "symptoms": [
              "Kelumpuhan atau kelemahan separuh badan (tangan dan kaki lemas mendadak)",
              "Bibir mencong ke satu sisi dan senyum tidak simetris",
              "Bicara pelo, tidak jelas, atau sulit memahami perkataan orang",
              "Pandangan kabur mendadak pada satu atau kedua mata"
            ],
            "causes": [
              "Penyumbatan plak kolesterol pada pembuluh darah leher/otak (aterosklerosis)",
              "Tekanan darah tinggi menahun yang tidak terkontrol (memicu pembuluh darah pecah)",
              "Gangguan irama jantung (Fibrilasi Atrium) yang melempar bekuan darah ke otak"
            ],
            "warningSigns": [
              "Prinsip FAST (Face, Arm, Speech, Time) muncul mendadak",
              "Penurunan kesadaran mendadak atau tertidur terus menerus",
              "Nyeri kepala terhebat seumur hidup disertai muntah menyemprot"
            ],
            "careTips": [
              "SEGERA bawa ke rumah sakit dalam Golden Period (<3-4.5 jam) untuk menyelamatkan jaringan otak",
              "Kontrol tekanan darah, gula darah, dan kolesterol secara disiplin setiap bulan",
              "Jalani fisioterapi rehabilitasi motorik dini dalam 24-48 jam pascastroke stabil"
            ]
          },
          {
            "id": "alzheimer-demensia",
            "name": "Penyakit Alzheimer & Demensia Geriatri",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kerusakan progresif sel saraf otak yang memicu penurunan daya ingat, kemampuan berpikir, dan perubahan perilaku lansia.",
            "symptoms": [
              "Sering lupa hal yang baru saja terjadi dan mengulang pertanyaan yang sama",
              "Tersesat di lingkungan yang sudah dikenal atau lupa jalan pulang ke rumah",
              "Kesulitan mengurus keuangan, berhitung, atau memasak resep yang biasa dibuat",
              "Perubahan emosi mendadak (mudah curiga, cemas, atau menuduh barangnya dicuri)"
            ],
            "causes": [
              "Penumpukan plak protein amiloid dan kekusutan tau di sel neuron otak",
              "Penyusutan bertahap pada pusat memori otak (hipokampus)",
              "Faktor usia lanjut dan penurunan vaskularisasi mikrosirkulasi otak"
            ],
            "warningSigns": [
              "Lansia berkeliaran keluar rumah sendirian dan hilang tidak tahu arah (wandering)",
              "Gelisah ekstrem atau delirium saat sore-malam hari (Sundowning Syndrome)",
              "Menolak makan dan minum total hingga mengalami dehidrasi berat"
            ],
            "careTips": [
              "Beri label tulisan besar pada pintu kamar mandi dan perabotan penting di rumah",
              "Ajak lansia bernostalgia melihat foto keluarga, mendengarkan musik lama, dan jalan pagi",
              "Jaga nada bicara tetap tenang, ramah, dan jangan mendebat saat lansia keliru"
            ]
          }
        ]
      },
      {
        "id": "otak-kecil",
        "name": "Otak Kecil (Serebelum)",
        "latinName": "Cerebellum",
        "analogy": "Otak kecil ibarat alat penyeimbang (gyroscope) tubuh kita. Organ ini menjaga kita tetap seimbang saat berjalan, tidak oleng, dan membuat gerakan tangan kita halus dan tepat sasaran.",
        "mainFunction": "Mengatur koordinasi gerakan motorik halus, keseimbangan tubuh dinamis, postur tegak, dan ketepatan ayunan langkah.",
        "healthFact": "Kecepatan koordinasi otak kecil melambat seiring usia, membuat lansia butuh waktu sedetik lebih lama untuk mengoreksi posisi tubuh saat terpeleset.",
        "diseases": [
          {
            "id": "parkinson",
            "name": "Penyakit Parkinson (Gangguan Gerak & Keseimbangan)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kerusakan neuron penghasil dopamin yang memicu gemetar saat istirahat, kekakuan otot, dan kelambatan bergerak.",
            "symptoms": [
              "Gemetar halus pada jemari tangan saat istirahat (seperti menggulung pil / pill-rolling)",
              "Gerakan tubuh melambat drastis (langkah kaki memendek terseret-seret)",
              "Badan terasa kaku seperti robot dan ekspresi wajah kaku tanpa senyum (mask face)",
              "Kaki mendadak terasa menempel kaku di lantai tidak bisa melangkah (freezing of gait)"
            ],
            "causes": [
              "Kematian sel penghasil dopamin di Substansia Nigra batang otak",
              "Penumpukan gumpalan protein alfa-sinuklein (Lewy Bodies) di saraf",
              "Kerentanan genetik berpadu dengan penuaan alami sistem ekstrapiramidal"
            ],
            "warningSigns": [
              "Jatuh berulang ke arah belakang (instabilitas postural berat)",
              "Sulit menelan makanan hingga tersedak dan batuk terus-menerus",
              "Kekakuan otot total mendadak disertai demam tinggi"
            ],
            "careTips": [
              "Minum obat Levodopa tepat waktu 30-45 menit sebelum jam makan",
              "Pasang garis plester kontras di lantai untuk memandu langkah kaki saat freezing",
              "Latihan senam peregangan sendi dan terapi suara (bicara kencang) setiap hari"
            ]
          }
        ]
      },
      {
        "id": "batang-otak",
        "name": "Batang Otak & Pusat Otonom",
        "latinName": "Truncus Encephali",
        "analogy": "Batang otak ibarat mesin pembangkit listrik otomatis 24 jam. Organ ini menjaga napas kita tetap berhembus, jantung berdenyut, dan refleks menelan makanan berjalan aman saat kita tidur.",
        "mainFunction": "Pusat pengatur napas otomatis, denyut jantung, tekanan darah, refleks menelan, batuk, muntah, serta jalur penghubung otak ke saraf tubuh.",
        "healthFact": "Penurunan sensitivitas refleks batuk di batang otak pada lansia sering memicu aspirasi makanan atau air liur ke saluran napas tanpa disadari (silent aspiration).",
        "diseases": [
          {
            "id": "delirium-geriatri",
            "name": "Delirium Akut Geriatri (Kebingungan Mendadak)",
            "category": "Infeksi",
            "summary": "Kondisi linglung dan disorientasi mendadak pada lansia yang dipicu oleh infeksi tubuh (seperti ISK atau radang paru) atau ketidakseimbangan obat.",
            "symptoms": [
              "Mendadak bingung, tidak tahu berada di mana, atau lupa siapa orang di sekitarnya",
              "Lansia tampak sangat tertidur pulas terus menerus dan tidak mau merespons (tipe hipoaktif)",
              "Atau sebaliknya: gelisah mondar-mandir dan berhalusinasi melihat benda aneh di malam hari",
              "Gejala timbul cepat dalam hitungan jam hingga 1-2 hari dan berfluktuasi naik-turun"
            ],
            "causes": [
              "Infeksi saluran kemih (ISK) tanpa keluhan demam atau batuk (pemicu nomor 1)",
              "Dehidrasi dan gangguan kadar garam/natrium dalam darah",
              "Efek samping obat tidur, obat penenang, atau obat pereda nyeri tertentu"
            ],
            "warningSigns": [
              "Penurunan kesadaran yang semakin dalam hingga tidak bisa dibangunkan",
              "Mencoba mencabut selang infus atau melompat dari ranjang",
              "Napas tersengal-sengal cepat"
            ],
            "careTips": [
              "JANGAN langsung memarahi atau mengikat tangan lansia yang sedang linglung",
              "Segera periksakan air kencing dan darah ke dokter untuk mencari infeksi tersembunyi",
              "Temani dengan wajah familiar anggota keluarga dan pasang lampu tidur remang"
            ]
          }
        ]
      },
      {
        "id": "medula-spinalis",
        "name": "Sumsum Tulang Belakang (Medula Spinalis)",
        "latinName": "Medulla Spinalis",
        "analogy": "Sumsum tulang belakang ibarat kabel transmisi serat optik utama di dalam ruas tulang punggung. Kabel ini menyalurkan perintah gerak dari otak ke kaki-tangan dan membawa rasa raba kembali ke otak.",
        "mainFunction": "Jalur kabel hantaran sinyal motorik dan sensorik utama antara otak dan anggota gerak tubuh, serta pusat busur refleks gerak cepat.",
        "healthFact": "Bantalan tulang belakang (diskus) lansia mengering dan memipih, mempersempit lubang saraf dan memicu jepitan saraf punggung bawah (HNP / stenosis spinal).",
        "diseases": [
          {
            "id": "hnp-saraf-kejepit",
            "name": "HNP / Saraf Kejepit Tulang Belakang",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Bantalan sendi tulang belakang yang bergeser atau menonjol keluar dan menjepit serabut saraf di punggung bawah atau leher.",
            "symptoms": [
              "Nyeri tajam menusuk di pinggang bawah yang menjalar ke bokong, paha belakang, hingga betis",
              "Rasa kesemutan, baal, atau sensasi tersengat listrik di sepanjang kaki",
              "Nyeri semakin bertambah saat batuk, bersin, atau duduk lama di kursi",
              "Kedua kaki terasa berat dan lemas saat berjalan 50-100 meter"
            ],
            "causes": [
              "Penuaan bantalan sendi tulang belakang yang mengering dan retak",
              "Kebiasaan mengangkat beban berat dengan membungkuk bukan jongkok",
              "Penyempitan saluran saraf akibat pengapuran tulang belakang (spondilosis)"
            ],
            "warningSigns": [
              "Mendadak tidak bisa buang air kecil (kencing macet tertahan di kandung kemih)",
              "Buang air besar keluar sendiri tanpa terasa (inkontinensia fekal)",
              "Mati rasa tebal di selangkangan dan kedua kaki lumpuh lunglai"
            ],
            "careTips": [
              "Gunakan kasur dengan kepadatan medium-firm (jangan kasur busa yang terlalu melengkung)",
              "Hindari memijat atau mengurut pinggang yang sarafnya sedang terjepit",
              "Latihan penguatan otot perut dan punggung (core stability) serta berenang gaya dada"
            ]
          }
        ]
      },
      {
        "id": "saraf-tepi",
        "name": "Saraf Tepi & Jaringan Perifer",
        "latinName": "Systema Nervosum Periphericum",
        "analogy": "Saraf tepi ibarat kabel-kabel listrik kecil yang menyebar ke seluruh ujung jari tangan dan telapak kaki, mendeteksi suhu panas-dingin, sentuhan, dan rasa nyeri.",
        "mainFunction": "Menerima rangsangan sensorik raba, suhu, dan nyeri dari kulit serta menyalurkan perintah motorik kontraksi ke otot-otot kaki dan tangan.",
        "healthFact": "Kecepatan hantar saraf tepi menurun sekitar 15-20% pada usia senja. Akibatnya, sensasi rasa di telapak kaki sering berkurang tebal seperti memakai kaus kaki tebal.",
        "diseases": [
          {
            "id": "neuropati-perifer",
            "name": "Neuropati Perifer (Kerusakan Saraf Kaki & Tangan)",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Kerusakan serabut saraf tepi yang menyebabkan telapak kaki mati rasa, kesemutan, atau nyeri seperti terbakar.",
            "symptoms": [
              "Telapak kaki terasa tebal dan baal seperti menginjak kapuk atau memakai kaus kaki tebal",
              "Sensasi kesemutan, ditusuk-tusuk jarum, atau rasa panas terbakar terutama di malam hari",
              "Ujung jempol kaki sering tersandung lantai karena sulit diangkat saat melangkah",
              "Kulit telapak kaki sangat kering, pecah-pecah, dan tidak mengeluarkan keringat"
            ],
            "causes": [
              "Kadar gula darah tinggi menahun pada penderita Diabetes Melitus",
              "Kekurangan vitamin B12 (terutama pada lansia pengguna obat maag atau metformin menahun)",
              "Penurunan aliran darah pembuluh kapiler yang memberi makan saraf kaki"
            ],
            "warningSigns": [
              "Muncul luka lecet atau borok di telapak kaki yang bernanah TANPA TERASA NYERI",
              "Kaki bengkak merah hangat menjalar ke betis (infeksi selulitis)",
              "Jari kaki menghitam dingin (tanda gangren pembuluh darah)"
            ],
            "careTips": [
              "SELALU gunakan sandal busa empuk di dalam rumah dan periksa bagian dalam sepatu sebelum dipakai",
              "Periksa telapak kaki setiap hari menggunakan cermin untuk memastikan tidak ada luka",
              "Jaga kadar gula darah dan konsumsi makanan kaya vitamin B kompleks (ikan, telur, bayam)"
            ]
          }
        ]
      }
    ]
  },
  "endocrine": {
    "title": "7. Sistem Endokrin",
    "latinTitle": "Systema Endocrinum (Glandulae Hormonales)",
    "systemBadgeColor": "bg-teal-100 text-teal-800",
    "organs": [
      {
        "id": "kelenjar-tiroid",
        "name": "Kelenjar Tiroid (Glandula Thyroidea)",
        "latinName": "Glandula Thyroidea",
        "analogy": "Tiroid ibarat pedal gas pembakaran mesin tubuh. Mengatur seberapa cepat atau lambat sel-sel membakar energi dan menghasilkan panas.",
        "mainFunction": "Memproduksi hormon tiroksin (T4) dan triiodotironin (T3) untuk mengendalikan laju metabolisme basal, suhu tubuh, detak jantung, dan fungsi pencernaan.",
        "healthFact": "Hipotiroidisme pada lansia sering dijuluki 'penyamar ulung' karena gejalanya (lemas, pelupa, sembelit, kulit kering) sering disalahartikan sebagai tanda ketuaan wajar.",
        "diseases": [
          {
            "id": "hipotiroidisme-geriatri",
            "name": "Hipotiroidisme Geriatri (Penurunan Hormon Tiroid)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kondisi defisiensi hormon tiroid akibat atrofi kelenjar tiroid atau tiroiditis autoimun (Hashimoto) yang memperlambat metabolisme seluruh tubuh.",
            "symptoms": [
              "Tubuh terasa sangat lamban, lemas berkepanjangan, dan mudah kedinginan saat orang lain kepanasan",
              "Daya ingat menurun drastis, bicara lambat, dan sulit konsentrasi (menyerupai gejala demensia)",
              "Kulit sangat kering, rambut rontok, suara serak parau, dan wajah tampak sembab",
              "Sembelit kronis yang sulit diatasi dan kenaikan berat badan tanpa banyak makan"
            ],
            "causes": [
              "Penyakit autoimun tiroiditis Hashimoto yang merusak jaringan folikel tiroid secara bertahap",
              "Atrofi dan fibrosis kelenjar tiroid akibat proses penuaan degeneratif intrinsik",
              "Riwayat operasi pengangkatan tiroid atau terapi radiasi leher di masa lalu"
            ],
            "warningSigns": [
              "Suhu tubuh turun drastis di bawah 35°C (hipotermia berat) disertai kantuk luar biasa",
              "Denyut jantung melambat ekstrem di bawah 45 kali/menit (bradikardia berat)",
              "Koma miksedema (penurunan kesadaran darurat akibat kadar hormon tiroid anjlok)"
            ],
            "careTips": [
              "Pemeriksaan darah berkala kadar TSH sensitif dan Free T4 di laboratorium",
              "Konsumsi obat hormon pengganti levotiroksin secara rutin saat perut kosong di pagi hari",
              "Gunakan pakaian hangat dan pelembap kulit untuk mencegah kulit lansia pecah-pecah"
            ]
          }
        ]
      },
      {
        "id": "kelenjar-adrenal",
        "name": "Kelenjar Adrenal (Glandula Suprarenalis)",
        "latinName": "Glandulae Suprarenales",
        "analogy": "Adrenal ibarat generator darurat penyedia hormon stres (kortisol) agar tubuh tetap kuat bertahan saat terserang infeksi, sakit, atau dehidrasi.",
        "mainFunction": "Memproduksi hormon kortisol (glukokortikoid) untuk regulasi glukosa dan stres, aldosteron untuk keseimbangan garam dan tekanan darah, serta androgen adrenal.",
        "healthFact": "Banyak lansia mengalami kegagalan adrenal mendadak karena kebiasaan mengonsumsi jamu pegal linu tanpa izin edar yang ternyata dicampur obat deksametason/steroid dosis tinggi.",
        "diseases": [
          {
            "id": "insufisiensi-adrenal",
            "name": "Insufisiensi Adrenal & Krisis Addisonian",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Ketidakmampuan korteks adrenal memproduksi hormon kortisol dan aldosteron yang cukup, memicu gangguan elektrolit parah dan syok hipotensi.",
            "symptoms": [
              "Rasa lelah ekstrem yang melumpuhkan, badan tidak bertenaga sama sekali",
              "Tekanan darah sangat rendah (hipotensi) disertai pusing berkunang-kunang hebat saat bangkit berdiri",
              "Nafsu makan hilang total, mual muntah, dan berat badan merosot drastis",
              "Sensasi menginginkan makanan asin (salt craving) akibat kadar natrium darah anjlok"
            ],
            "causes": [
              "Penghentian mendadak konsumsi obat steroid (prednison/deksametason) atau jamu kimiawi pereda nyeri",
              "Kerusakan autoimun pada korteks kelenjar adrenal (penyakit Addison)",
              "Infeksi tuberkulosis adrenal atau metastasis tumor ke kelenjar suprarenal"
            ],
            "warningSigns": [
              "Tekanan darah anjlok drastis tidak merespons infus cairan biasa (syok krisis adrenal)",
              "Nyeri perut melilit hebat menyerupai radang usus buntu disertai muntah hebat",
              "Penurunan kesadaran mendadak dengan hasil laboratorium natrium sangat rendah dan kalium tinggi"
            ],
            "careTips": [
              "JANGAN PERNAH menghentikan obat steroid secara mendadak tanpa panduan tapering-off dari dokter",
              "Waspadai jamu instan atau serbuk tanpa nomor izin BPOM resmi yang mengklaim sembuhkan pegal linu instan",
              "Bawa kartu peringatan medis steroid bagi pasien yang menjalani terapi sulih hormon kortikosteroid"
            ]
          }
        ]
      },
      {
        "id": "kelenjar-pankreas-endokrin",
        "name": "Pulau Langerhans Pankreas",
        "latinName": "Insulae Pancreaticae (Cellulae Beta)",
        "analogy": "Pulau Langerhans ibarat gerbang penjaga gudang gula yang memproduksi kunci 'insulin' agar gula darah bisa masuk diserap sel dan tidak menumpuk di darah.",
        "mainFunction": "Memproduksi hormon insulin dari sel beta untuk menurunkan glukosa darah dan hormon glukagon dari sel alfa untuk menaikkan glukosa darah bila lapar.",
        "healthFact": "Pada usia lanjut, sel-sel tubuh menjadi kurang peka terhadap insulin (resistensi insulin) dan pelepasan insulin melambat, sehingga lonjakan gula darah pascamakan sering tidak disadari.",
        "diseases": [
          {
            "id": "diabetes-tipe-2",
            "name": "Diabetes Melitus Tipe 2 Geriatri",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Gangguan metabolisme karbohidrat kronis yang ditandai dengan hiperglikemia akibat kombinasi resistensi insulin perifer dan penurunan sekresi insulin pankreas.",
            "symptoms": [
              "Sering buang air kecil di malam hari (nokturia) hingga mengganggu tidur",
              "Mudah haus dan sering merasa lapar walau sudah cukup makan",
              "Luka di kaki lambat sembuh atau sering gatal di area lipatan paha",
              "Pandangan mata buram berkabut dan kesemutan tebal di ujung jari kaki"
            ],
            "causes": [
              "Penurunan massa otot (sarkopenia) yang mengurangi tempat penyerapan glukosa terbesar tubuh",
              "Pola makan tinggi karbohidrat olahan sederhana dan gaya hidup kurang gerak selama puluhan tahun",
              "Faktor penuaan degeneratif sel beta pulau Langerhans pankreas"
            ],
            "warningSigns": [
              "Gula darah melonjak di atas 600 mg/dL disertai dehidrasi berat dan linglung (koma hiperosmolar HHS)",
              "Keringat dingin gemetaran akibat gula darah drop di bawah 70 mg/dL (hipoglikemia berbahaya)",
              "Luka koreng hitam pada jari kaki yang baal tidak terasa sakit (ulkus diabetik gangren)"
            ],
            "careTips": [
              "Pantau gula darah puasa dan HbA1c secara berkala (target HbA1c lansia disesuaikan 7.5-8.0%)",
              "Periksa telapak kaki setiap hari dengan cermin untuk memastikan tidak ada lecet atau luka kecil",
              "Konsumsi makanan dengan indeks glikemik rendah dan tetap aktif jalan kaki ringan setelah makan"
            ]
          }
        ]
      }
    ]
  },
  "excretory": {
    "title": "8. Ekskresi / Urinaria",
    "latinTitle": "Systema Urinarium (Renes & Tractus Urinarius)",
    "systemBadgeColor": "bg-blue-100 text-blue-800",
    "organs": [
      {
        "id": "ginjal",
        "name": "Ginjal Bilateral (Ren Dextra & Sinistra)",
        "latinName": "Renes (Ginjal Kanan & Kiri)",
        "analogy": "Ginjal ibarat pabrik penyaring air limbah super canggih yang membersihkan 180 liter darah setiap hari dan membuang ampas racun lewat urine.",
        "mainFunction": "Filtrasi limbah nitrogen (ureum, kreatinin), mengatur keseimbangan cairan dan elektrolit tubuh, memproduksi hormon eritropoietin pembentuk darah, dan mengontrol tekanan darah.",
        "healthFact": "Laju penyaringan ginjal lansia (eGFR) turun alami sekitar 1 mL/menit per tahun setelah usia 40 tahun, membuat lansia sangat peka terhadap dehidrasi dan efek samping obat pereda nyeri.",
        "diseases": [
          {
            "id": "gagal-ginjal-kronis",
            "name": "Penyakit Ginjal Kronis (PGK Geriatri)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kerusakan struktural dan penurunan fungsi filtrasi ginjal progresif yang berlangsung lebih dari 3 bulan, memicu penumpukan racun uremik di dalam darah.",
            "symptoms": [
              "Kelopak mata sembab di pagi hari dan kedua tungkai kaki membengkak",
              "Mual, nafsu makan hilang, lidah terasa pahit berasa logam (uremic fetor)",
              "Kulit terasa sangat gatal, kering pucat kekuningan, dan mudah memar",
              "Frekuensi buang air kecil berkurang drastis atau air seni berbusa tebal"
            ],
            "causes": [
              "Kerusakan pembuluh darah glomerulus akibat diabetes mellitus dan hipertensi menahun",
              "Kebiasaan mengonsumsi obat anti-nyeri NSAID (asam mefenamat, diklofenak) tanpa kontrol dokter",
              "Riwayat batu ginjal atau pembesaran prostat yang menyumbat aliran kemih menahun"
            ],
            "warningSigns": [
              "Napas tersengal cepat dan berbau pesing disertai penurunan kesadaran (ensefalopati uremik)",
              "Kadar kalium darah melonjak tinggi yang memicu detak jantung berhenti mendadak",
              "Sesak napas berat saat berbaring karena paru-paru terendam cairan (edema paru)"
            ],
            "careTips": [
              "Kendalikan tekanan darah (<130/80 mmHg) dan kadar gula darah secara ketat",
              "Hindari konsumsi jamu kimiawi dan obat pereda nyeri anti-inflamasi non-steroid sembarangan",
              "Konsultasikan diet rendah protein dan pembatasan asupan kalium/fosfat dengan dokter nefrologi"
            ]
          }
        ]
      },
      {
        "id": "ureter",
        "name": "Saluran Ureter Bilateral",
        "latinName": "Ureteres (Saluran Kemih Atas)",
        "analogy": "Ureter ibarat pipa pembuangan air dari tangki penyaring ginjal menuju ember penampungan kandung kemih di bawah.",
        "mainFunction": "Menyalurkan cairan air seni yang diproduksi ginjal menuju kandung kemih melalui kontraksi gelombang peristaltik otot polos ureter.",
        "healthFact": "Batu ginjal yang meluncur turun dan tersangkut di lumen sempit ureter memicu kontraksi kejang otot polos yang menimbulkan nyeri kolik ureter luar biasa melilit.",
        "diseases": [
          {
            "id": "batu-saluran-kemih",
            "name": "Batu Saluran Kemih (Urolithiasis & Kolik Ureter)",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Pembentukan endapan mineral keras (kalsium oksalat, asam urat) yang tersangkut di saluran ureter dan menyumbat aliran urine dari ginjal.",
            "symptoms": [
              "Nyeri pinggang sangat hebat melilit hilang timbul yang menjalar ke perut bawah hingga selangkangan (kolik)",
              "Air seni berwarna keruh kemerahan atau bercampur darah (hematuria)",
              "Mual muntah hebat dan gelisah tidak bisa menemukan posisi duduk yang nyaman",
              "Sensasi ingin kencing terus-menerus namun yang keluar hanya beberapa tetes"
            ],
            "causes": [
              "Kurang minum air putih yang menyebabkan air seni menjadi sangat pekat (supersaturasi urin)",
              "Asupan tinggi garam, oksalat (teh pekat, kacang-kacangan berlebih), atau asam urat tinggi",
              "Imobilisasi lama pada lansia yang memicu pelepasan kalsium berlebih dari tulang ke urin"
            ],
            "warningSigns": [
              "Nyeri pinggang hebat disertai demam tinggi menggigil (tanda infeksi ginjal tersumbat / urosepsis)",
              "Air seni berhenti keluar sama sekali (anuria total akibat sumbatan bilateral)",
              "Lansia tampak sangat lemas mengigau dengan tekanan darah menurun"
            ],
            "careTips": [
              "Cukupi asupan cairan dengan minum air putih bening minimal 2 - 2,5 liter per hari",
              "Batasi konsumsi garam dapur berlebih dan kurangi minuman bersoda/berkafein",
              "Segera periksakan USG saluran kemih bila merasakan nyeri pinggang berulang"
            ]
          }
        ]
      },
      {
        "id": "kandung-kemih",
        "name": "Kandung Kemih (Vesika Urinaria)",
        "latinName": "Vesica Urinaria",
        "analogy": "Kandung kemih ibarat balon penampung elastis berdinding otot yang bisa membesar menampung air dan mengecil memeras air keluar.",
        "mainFunction": "Menampung 300-500 mL urine secara temporer tanpa bocor, lalu mengosongkannya secara tuntas melalui koordinasi otot detrusor saat berkemih.",
        "healthFact": "Pada usia lanjut, elastisitas dinding kandung kemih berkurang dan refleks sarafnya menjadi terlalu peka, memicu rasa ingin pipis mendadak yang tidak tertahankan (beser/OAB).",
        "diseases": [
          {
            "id": "beser-inkontinensia",
            "name": "Kandung Kemih Overaktif & Inkontinensia Urin",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Ketidakmampuan menahan keluarnya air kemih secara sadar akibat kontraksi otot detrusor kandung kemih yang hiperaktif atau kelemahan sfingter panggul.",
            "symptoms": [
              "Rasa ingin buang air kecil mendadak yang sangat kuat dan sering ngompol sebelum sampai toilet (urge incontinence)",
              "Air kencing merembes keluar saat batuk, bersin, tertawa, atau mengangkat barang (stress incontinence)",
              "Frekuensi kencing sangat sering (lebih dari 8 kali di siang hari dan lebih dari 2 kali saat tidur malam)",
              "Rasa tidak puas atau tidak tuntas setelah buang air kecil"
            ],
            "causes": [
              "Pelemahan otot dasar panggul pascamelahirkan pada wanita atau efek pascaoperasi prostat pada pria",
              "Kekakuan dinding detrusor kandung kemih dan neuropati terkait penuaan atau diabetes",
              "Efek samping konsumsi obat diuretik atau infeksi saluran kemih ringan yang tidak bergejala"
            ],
            "warningSigns": [
              "Sama sekali tidak bisa buang air kecil disertai perut bawah membesar kencang (retensi urin akut)",
              "Air seni berbau busuk tajam, berdarah, atau terasa panas membakar",
              "Keluarnya urin memicu iritasi luka kulit dan lecet di lipatan paha lansia"
            ],
            "careTips": [
              "Rutin lakukan latihan senam Kegel untuk memperkuat otot dasar panggul penahan urin",
              "Jadwalkan waktu berkemih setiap 2-3 jam sekali (bladder training) tanpa menunggu kebelet hebat",
              "Hindari minum air terlalu banyak menjelang jam tidur malam dan kurangi konsumsi kopi/teh pekat"
            ]
          }
        ]
      },
      {
        "id": "saluran-kemih-bawah",
        "name": "Saluran Uretra & Muara Kemih",
        "latinName": "Urethra",
        "analogy": "Uretra ibarat pipa keran pembuangan akhir yang dilengkapi cincin karet penahan agar air tidak merembes bocor keluar sembarangan.",
        "mainFunction": "Saluran akhir keluarnya air kencing dari kandung kemih menuju luar tubuh, serta mempertahankan barier pertahanan terhadap invasi kuman dari luar.",
        "healthFact": "Pada pria lansia uretra rentan terhimpit pembesaran prostat, sedangkan pada wanita lansia uretra rentan kemasukan bakteri karena jaraknya yang sangat pendek ke anus.",
        "diseases": [
          {
            "id": "striktur-uretra",
            "name": "Striktur Uretra (Penyempitan Saluran Kencing)",
            "category": "Peradangan",
            "summary": "Penyempitan lumen saluran kencing akibat terbentuknya jaringan parut fibrotik pascaradang atau trauma kateterisasi.",
            "symptoms": [
              "Pancaran air seni mengecil, membelah dua, atau menetes lemah",
              "Butuh mengejan lama dan waktu kencing menjadi sangat panjang",
              "Rasa perih panas saat air kemih melewati saluran uretra",
              "Sering timbul infeksi saluran kemih berulang"
            ],
            "causes": [
              "Riwayat pemasangan selang kateter urin jangka panjang di rumah sakit",
              "Peradangan kronis uretra (uretritis) atau riwayat cedera jatuh mengangkang",
              "Jaringan parut pascaoperasi prostat atau saluran kemih"
            ],
            "warningSigns": [
              "Aliran kemih tersumbat total dan kandung kemih mengeras seperti batu di bawah pusar",
              "Demam tinggi menggigil disertai nanah yang keluar dari muara saluran kencing",
              "Rembesan urin ke kantung buah zakar (ekstravasasi urin)"
            ],
            "careTips": [
              "Segera periksakan diri ke dokter spesialis urologi bila pancaran kencing mulai mengecil",
              "Hindari menahan buang air kecil terlalu lama yang meningkatkan tekanan saluran kemih",
              "Jaga kebersihan area muara kemih dengan membilas air bersih mengalir"
            ]
          },
          {
            "id": "isk-pria",
            "name": "Infeksi Saluran Kemih Pria Geriatri",
            "category": "Infeksi",
            "summary": "Kolonisasi bakteri patogen pada traktus urinarius pria lanjut usia yang umumnya bersifat komplikasi akibat sumbatan prostat atau kateter.",
            "symptoms": [
              "Anyang-anyangan dan rasa panas terbakar saat berkemih",
              "Air seni keruh, berbau tajam menyengat, atau berwarna kemerahan",
              "Nyeri tumpul di area panggul bawah atau di belakang kantung zakar",
              "Gejala khas lansia: mendadak bingung linglung (delirium) tanpa disertai demam tinggi"
            ],
            "causes": [
              "Sisa air seni yang tertahan di kandung kemih akibat himpitan prostat (stasis urin)",
              "Penggunaan selang kateter urin menetap yang menjadi sarang biofilm kuman E. coli",
              "Penurunan daya tahan tubuh lokal mukosa urogenital di usia lanjut"
            ],
            "warningSigns": [
              "Demam tinggi menggigil disertai tekanan darah drop (urosepsis membahayakan nyawa)",
              "Lansia mengigau hebat, tidak mengenali keluarga, atau mengantuk berat",
              "Nyeri pinggang tajam menyertai keluhan anyang-anyangan (infeksi naik ke ginjal)"
            ],
            "careTips": [
              "Pastikan lansia minum air putih cukup agar aliran urin membilas kuman secara alami",
              "Ganti selang kateter urine secara berkala dengan teknik steril di fasilitas kesehatan",
              "Tuntaskan pengobatan antibiotik sesuai resep dokter spesialis urologi/geriatri"
            ]
          }
        ]
      }
    ]
  },
  "immune": {
    "title": "9. Sistem Kekebalan (Imun)",
    "latinTitle": "Systema Immunitatis (Pertahanan Tubuh)",
    "systemBadgeColor": "bg-emerald-100 text-emerald-800",
    "organs": [
      {
        "id": "sumsum-tulang-imun",
        "name": "Sumsum Tulang & Sel Imun Sistemik",
        "latinName": "Medulla Ossium Rubra & Systema Immunitatis",
        "analogy": "Sumsum tulang ibarat barak akademi militer yang melahirkan pasukan tentara sel darah putih (leukosit, sel B, sel T) untuk menjaga keamanan tubuh.",
        "mainFunction": "Pusat hematopoiesis dan produksi sel induk limfoid dan mieloid, pembentukan antibodi pelindung, dan eliminasi patogen mikroba.",
        "healthFact": "Penuaan sistem imun (immunosenescence) menurunkan produksi sel T baru dan antibodi berkualitas tinggi, sehingga respon lansia terhadap infeksi baru atau vaksin menjadi lebih lambat.",
        "diseases": [
          {
            "id": "immunosenescence",
            "name": "Immunosenescence (Penuaan Sistem Kekebalan Tubuh)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kemunduran fungsi kekebalan tubuh adaptif dan bawaan akibat penuaan yang disertai keadaan peradangan sistemik derajat rendah kronis (inflammaging).",
            "symptoms": [
              "Sangat mudah tertular batuk pilek, flu, atau diare dan butuh waktu pemulihan berminggu-minggu",
              "Tubuh terasa sering meriang pegal tanpa demam tinggi yang jelas (respon suhu tubuh tumpul)",
              "Luka kecil atau lecet kulit membutuhkan waktu lama untuk menutup dan sembuh",
              "Kelelahan kronis dan penurunan stamina fisik secara menyeluruh"
            ],
            "causes": [
              "Penyusutan kelenjar timus (involusi timus) yang menurunkan jumlah sel T naif",
              "Akumulasi sel-sel imun tua (senescent cells) yang terus mengeluarkan sitokin inflamasi",
              "Penurunan cadangan sel punca hematopoietik di dalam rongga sumsum tulang merah"
            ],
            "warningSigns": [
              "Infeksi bakteri ringan cepat berkembang menjadi sepsis atau pneumonia berat",
              "Suhu tubuh justru turun di bawah normal (hipotermia) saat sedang mengalami infeksi berat",
              "Penurunan kesadaran, disorientasi tempat dan waktu (delirium) sebagai respon infeksi"
            ],
            "careTips": [
              "Lakukan vaksinasi lansia secara teratur (vaksin influenza tahunan, vaksin pneumonia PCV/PPSV, vaksin herpes zoster)",
              "Konsumsi makanan padat nutrisi tinggi protein, zink, vitamin C, dan vitamin D3",
              "Jaga kebersihan diri, cuci tangan dengan sabun, dan hindari kontak dekat dengan orang yang sedang flu"
            ]
          }
        ]
      },
      {
        "id": "sistem-imun-penghubung",
        "name": "Jaringan Imun & Autoantibodi Sendi",
        "latinName": "Synovium & Systema Autoimmunitatis",
        "analogy": "Sistem imun autoimun ibarat radar keamanan yang salah mengira lapisan sendi tubuh sendiri sebagai penyusup, lalu membombardirnya dengan zat radang.",
        "mainFunction": "Membedakan zat milik tubuh sendiri (self) dari benda asing (non-self) serta mempertahankan toleransi imunologis terhadap jaringan normal.",
        "healthFact": "Pada artritis reumatoid lanjut usia (EORA / Elderly-Onset Rheumatoid Arthritis), serangan radang sendi sering kali muncul mendadak pada sendi-sendi besar seperti bahu dan panggul.",
        "diseases": [
          {
            "id": "reumatoid-artritis",
            "name": "Artritis Reumatoid Geriatri (EORA)",
            "category": "Peradangan",
            "summary": "Penyakit autoimun sistemik kronis di mana sistem kekebalan tubuh menyerang membran sinovial sendi secara simetris, menyebabkan erosi tulang dan deformitas sendi.",
            "symptoms": [
              "Kaku sendi hebat di pagi hari yang berlangsung lebih dari 1 jam sebelum sendi bisa digerakkan leluasa",
              "Kedua pergelangan tangan, sendi jari-jari tangan, atau kedua bahu membengkak dan terasa hangat simetris",
              "Sendi terasa ngilu berdenyut terutama saat bangun tidur",
              "Bentuk jari tangan perlahan berubah melengkung menyamping (deformitas deviasi ulnar)"
            ],
            "causes": [
              "Kerusakan toleransi imunologis yang memicu produksi antibodi autoimun (Rheumatoid Factor dan Anti-CCP)",
              "Aktivasi berlebih sitokin inflamasi TNF-alfa dan Interleukin-6 yang mengikis tulang rawan",
              "Interaksi faktor kerentanan genetik dengan faktor lingkungan (riwayat merokok)"
            ],
            "warningSigns": [
              "Demam subfebris berkepanjangan disertai penurunan berat badan drastis tanpa sebab jelas",
              "Mati rasa tebal atau lemas mendadak pada pergelangan tangan (sindrom carpal tunnel akibat jepitan radang)",
              "Sesak napas akibat komplikasi peradangan autoimun pada jaringan paru (penyakit paru interstitial)"
            ],
            "careTips": [
              "Segera konsultasi ke dokter spesialis reumatologi untuk mendapatkan obat pengatur imun (DMARDs)",
              "Lakukan fisioterapi gerak sendi lembut di dalam air hangat untuk menjaga kelenturan sendi",
              "Gunakan alat bantu pegangan berdiameter besar untuk mengurangi tekanan pada sendi-sendi jari tangan"
            ]
          }
        ]
      }
    ]
  },
  "lymphatic": {
    "title": "10. Sistem Limfatik",
    "latinTitle": "Systema Lymphoideum (Penyaring Racun & Cairan Getah Bening)",
    "systemBadgeColor": "bg-lime-100 text-lime-800",
    "organs": [
      {
        "id": "kelenjar-getah-bening",
        "name": "Kelenjar Getah Bening (Nodus Limfatikus)",
        "latinName": "Nodi Lymphoidei (Servikal, Aksila, Inguinal)",
        "analogy": "Kelenjar limfa ibarat pos pemeriksaan keamanan polisi di perbatasan yang menyaring dan menghancurkan kuman yang lewat di aliran getah bening.",
        "mainFunction": "Filtrasi partikel kuman, sel kanker, dan debu asing dari cairan limfa, serta menjadi tempat berkumpul dan pematangan sel limfosit B dan T.",
        "healthFact": "Pembesaran kelenjar getah bening pada lansia yang tidak terasa nyeri dan teraba keras padat harus selalu diperiksakan ke dokter untuk menyingkirkan kemungkinan limfoma atau metastasis.",
        "diseases": [
          {
            "id": "limfedema-kronis",
            "name": "Limfedema & Pembengkakan Kelenjar Limfa",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Penumpukan cairan kaya protein di jaringan lunak akibat gangguan aliran drainase saluran limfatik atau kerusakan kelenjar getah bening.",
            "symptoms": [
              "Satu sisi lengan atau tungkai kaki membengkak perlahan dan terasa berat seperti membawa beban",
              "Kulit di area bengkak terasa kencang tegang, kaku, dan perhiasan/cincin terasa mendadak sempit",
              "Tekstur kulit lama kelamaan menebal, kasar, dan mengeras seperti kulit jeruk (peau d'orange)",
              "Gerakan sendi di area yang bengkak menjadi terbatas dan kaku"
            ],
            "causes": [
              "Penyumbatan atau kerusakan kelenjar limfa pascaoperasi kanker atau pascaterapi radiasi",
              "Infeksi bakteri berulang pada kulit (selulitis/erisipelas) yang merusak pembuluh limfa halus",
              "Insufisiensi vena kronis berat yang membebani kapasitas sirkulasi sistem limfatik tungkai"
            ],
            "warningSigns": [
              "Kulit mendadak merah padam, sangat panas, dan nyeri hebat disertai demam tinggi (selulitis akut)",
              "Keluar cairan bening atau kekuningan merembes dari pori-pori kulit yang meregang",
              "Bengkak membesar sangat cepat dan meluas ke bagian dada atau perut"
            ],
            "careTips": [
              "Terapkan perawatan Dekongestif Kompleks (CDT) meliputi pemijatan drainase limfatik manual oleh fisioterapis",
              "Gunakan perban elastis kompresi atau stoking lengan/kaki kompresi medis khusus limfedema",
              "Jaga kulit tetap bersih dan lembap, serta hindari suntikan atau pengambilan darah di lengan yang mengalami limfedema"
            ]
          }
        ]
      },
      {
        "id": "pembuluh-limfa",
        "name": "Saluran & Pembuluh Limfatik",
        "latinName": "Vasa Lymphatica & Ductus Thoracicus",
        "analogy": "Pembuluh limfa ibarat jaringan selokan pembuangan air sekunder di bawah tanah yang menyedot kelebihan becek air di sela-sela sel tubuh agar tidak banjir.",
        "mainFunction": "Menyerap kembali kelebihan cairan interstisial dan molekul protein besar dari jaringan untuk dikembalikan ke peredaran darah vena di vena subklavia.",
        "healthFact": "Pembuluh getah bening tidak memiliki pompa jantung sendiri, melainkan mengandalkan kontraksi otot-otot tubuh saat kita bergerak dan melangkah untuk mendorong cairannya mengalir.",
        "diseases": [
          {
            "id": "limfedema-kronis",
            "name": "Limfedema Kronis & Insufisiensi Limfatik",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kegagalan transport mikrosirkulasi limfatik yang menyebabkan akumulasi cairan interstitial dan hipertrofi jaringan adiposa fibrotik pada tungkai lansia.",
            "symptoms": [
              "Pembengkakan tungkai bawah yang tidak sepenuhnya kempes meski sudah diganjal bantal tinggi semalaman",
              "Rasa berat dan pegal saat berdiri atau berjalan",
              "Jari kaki tampak bengkak seperti sosis dan lipatan kulit di pangkal jari menebal (tanda Stemmer positif)",
              "Rentan timbul infeksi jamur dan kuman di sela-sela jari kaki"
            ],
            "causes": [
              "Degenerasi katup pembuluh limfa seiring usia tua",
              "Kurangnya aktivitas fisik dan mobilitas otot tungkai pada lansia yang sering duduk statis",
              "Kerusakan mikrovaskular akibat obesitas berat atau komplikasi pascatrauma"
            ],
            "warningSigns": [
              "Luka lecet di kulit bengkak tidak kunjung sembuh dan mulai berbau",
              "Timbul lenting-lenting cairan getah bening di permukaan kulit yang mudah pecah",
              "Demam menggigil mendadak dengan garis merah menjalar di sepanjang kulit paha (limfangitis)"
            ],
            "careTips": [
              "Ganjal tungkai kaki lebih tinggi dari posisi dada saat berbaring istirahat di siang hari",
              "Lakukan senam gerak kaki ringan dan latihan napas dalam secara berkala untuk memompa cairan limfa",
              "Gunakan alas kaki yang nyaman, tidak menekan, dan selalu kering"
            ]
          }
        ]
      }
    ]
  },
  "integumentary": {
    "title": "11. Sistem Integumen (Kulit & Kuku)",
    "latinTitle": "Systema Integumentarium (Cutis, Pili, Ungues)",
    "systemBadgeColor": "bg-orange-100 text-orange-800",
    "organs": [
      {
        "id": "kulit-epidermis-dermis",
        "name": "Lapisan Kulit (Epidermis & Dermis)",
        "latinName": "Integumentum Commune (Epidermis & Dermis)",
        "analogy": "Kulit ibarat mantel tahan air dan baju zirah terluar tubuh yang melindungi organ dalam dari kuman, debu, gesekan, dan terik panas matahari.",
        "mainFunction": "Barier pertahanan fisik dan mikrobiologis terluar, organ indra peraba sensasi suhu/nyeri, termoregulasi keringat, dan sintesis vitamin D alami.",
        "healthFact": "Kulit lansia kehilangan hingga 20% ketebalannya, berkurang kadar kolagen dan minyak alaminya, menjadikannya setipis 'kertas minyak' dan sangat rentan robek akibat tekanan kasur (ulkus dekubitus).",
        "diseases": [
          {
            "id": "ulkus-dekubitus",
            "name": "Ulkus Dekubitus (Luka Robek Baring Tekan)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kerusakan jaringan kulit dan struktur di bawahnya akibat tekanan mekanis berkepanjangan pada area tonjolan tulang (tulang ekor, tumit, pinggul) pada pasien tirah baring.",
            "symptoms": [
              "Area kulit di atas tulang ekor (sakrum) atau tumit memerah dan tidak memutih saat ditekan jari (Stadium 1)",
              "Kulit melepuh, melepuh pecah, atau tampak luka lecet dangkal seperti terkelupas (Stadium 2)",
              "Luka kawah menganga dalam menembus lapisan lemak bawah kulit (Stadium 3)",
              "Luka sangat dalam hingga terlihat dasar tendon, otot, atau tulang yang menghitam berbau (Stadium 4)"
            ],
            "causes": [
              "Tekanan konstan tanpa henti antara permukaan kasur keras dan tonjolan tulang lansia yang memutus aliran kapiler darah",
              "Gaya gesek saat lansia merosot di tempat tidur atau gesekan seprai yang kusut",
              "Kelembapan berlebih akibat ompol air seni atau keringat yang membuat kulit maserasi rapuh"
            ],
            "warningSigns": [
              "Luka bernanah kuning kehijauan, berbau sangat busuk, dan dikelilingi kulit merah bengkak panas",
              "Demam tinggi dan tanda infeksi menyebar ke aliran darah (sepsis)",
              "Luka meluas dengan cepat dan dasar luka menghitam pekat (nekrosis jaringan mati)"
            ],
            "careTips": [
              "UBAH POSISI MIRING KANAN - MIRING KIRI setiap 2 jam sekali secara konsisten bagi lansia tirah baring",
              "Gunakan kasur udara bertekanan dinamis (kasur angin anti-dekubitus)",
              "Jaga kulit selalu bersih dan kering, gunakan krim pelindung barier kulit (zinc oxide), dan penuhi nutrisi tinggi protein untuk penyembuhan luka"
            ]
          }
        ]
      },
      {
        "id": "folikel-dan-kuku",
        "name": "Saraf Kulit & Folikel Kutaneus",
        "latinName": "Dermatom & Radix Nervi Cutanei",
        "analogy": "Saraf kulit ibarat kabel kawat sensor alarm di bawah permukaan kulit yang menyampaikan rasa sentuhan, panas, dingin, dan nyeri ke otak.",
        "mainFunction": "Menerima rangsangan sensorik taktil dan melindungi folikel rambut serta bantalan kuku dari gesekan dan trauma luar.",
        "healthFact": "Virus cacar air yang pernah diderita di masa kanak-kanak tidak pernah mati, melainkan 'tidur' di simpul saraf tulang belakang. Saat daya tahan tubuh lansia melemah, virus ini terbangun memicu Cacar Api (Herpes Zoster).",
        "diseases": [
          {
            "id": "herpes-zoster",
            "name": "Herpes Zoster (Cacar Ular / Api & Nyeri Pasca-Herpes)",
            "category": "Infeksi",
            "summary": "Reaktivasi virus Varicella-Zoster dorman pada ganglion saraf sensorik yang menimbulkan ruam lenting berair bergerombol melingkar separuh badan dan nyeri saraf hebat.",
            "symptoms": [
              "Nyeri terbakar, kesemutan, atau rasa ngilu tertusuk jarum di satu sisi tubuh (dada, perut, atau wajah) beberapa hari sebelum ruam muncul",
              "Muncul bintil-bintil merah yang cepat berubah menjadi lenting berisi cairan bening bergerombol mengikuti garis saraf (dermatomal)",
              "Ruam tegas HANYA ada di separuh badan kiri atau kanan (tidak menyeberang garis tengah tubuh)",
              "Nyeri saraf menusuk yang menetap berbulan-bulan bahkan setelah lenting mengering sembuh (Neuralgia Pasca-Herpes / PHN)"
            ],
            "causes": [
              "Penurunan kekebalan seluler spesifik terhadap virus Varicella-Zoster akibat proses penuaan (immunosenescence)",
              "Stres fisik berat, kelelahan parah, atau penyakit kronis yang menurunkan daya tahan tubuh lansia",
              "Riwayat pernah terkena cacar air di masa muda"
            ],
            "warningSigns": [
              "Lenting muncul di area dahi, hidung, atau dekat bola mata (risiko kerusakan kornea dan kebutaan zoster oftalmikus)",
              "Lenting bernanah tebal akibat infeksi bakteri sekunder",
              "Nyeri saraf sangat hebat yang membuat lansia tidak bisa tidur berhari-hari atau timbul depresi"
            ],
            "careTips": [
              "SEGERA berikan obat antivirus (Asiklovir / Valasiklovir) dalam 72 jam pertama sejak bintil muncul atas resep dokter",
              "Jaga lenting tetap bersih dan kering, jangan menggaruk atau memecahkan lenting dengan sengaja",
              "Pertimbangkan vaksinasi herpes zoster (vaksin rekombinan) untuk mencegah kekambuhan dan nyeri saraf berkepanjangan"
            ]
          }
        ]
      }
    ]
  },
  "reproductive": {
    "title": "12. Sistem Reproduksi",
    "latinTitle": "Systema Genitale (Pria & Wanita)",
    "systemBadgeColor": "bg-purple-100 text-purple-800",
    "maleOrgans": [
      {
        "id": "ginjal-ureter-pria",
        "name": "Ginjal & Saluran Kemih Atas",
        "latinName": "Ren & Ureter",
        "analogy": "Ginjal ibarat mesin penyaring air ultra murni 24 jam sehari. Organ ini menyaring darah dari sisa ampas racun tubuh dan membuangnya dalam bentuk air seni.",
        "mainFunction": "Menyaring darah, membuang zat amonia/urea, menjaga keseimbangan cairan & tekanan darah, serta memproduksi hormon sel darah merah.",
        "healthFact": "Laju penyaringan ginjal (eGFR) menurun sekitar 1% setiap tahun setelah usia 40 tahun. Lansia lebih rentan mengalami dehidrasi atau beban kerja ginjal berat.",
        "diseases": [
          {
            "id": "batu-saluran-kemih",
            "name": "Batu Saluran Kemih (Urolitiasis)",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Pengkristalan mineral dan garam kalsium atau asam urat di ginjal yang turun dan menyumbat saluran kencing.",
            "symptoms": [
              "Nyeri pinggang hilang timbul yang sangat tajam (kolik ginjal)",
              "Nyeri menjalar dari pinggang ke perut bawah hingga selangkangan",
              "Air kencing berwarna kemerahan atau kecokelatan (bercampur darah)",
              "Rasa mual dan anyang-anyangan saat buang air kecil"
            ],
            "causes": [
              "Kebiasaan kurang minum air putih bertahun-tahun",
              "Tingginya kadar asam urat atau kalsium dalam darah",
              "Kebiasaan menahan kencing dan konsumsi makanan tinggi purin (emping, jeroan)"
            ],
            "warningSigns": [
              "Sama sekali tidak bisa buang air kecil meski kandung kemih terasa penuh mau pecah",
              "Demam tinggi menggigil disertai nyeri pinggang hebat (infeksi ginjal akut)",
              "Muntah terus menerus"
            ],
            "careTips": [
              "Biasakan minum air putih minimal 2 liter per hari agar air kencing selalu berwarna kuning jernih",
              "Batasi makanan yang memicu asam urat tinggi seperti jeroan, kuah daging kental, dan tape",
              "Jangan membiasakan menahan buang air kecil"
            ]
          }
        ]
      },
      {
        "id": "kandung-kemih-pria",
        "name": "Kandung Kemih (Pria)",
        "latinName": "Vesica Urinaria",
        "analogy": "Kandung kemih ibarat balon penampung urine sementara. Dindingnya lentur mengembang saat terisi dan memompa saat kita berkemih.",
        "mainFunction": "Menampung air seni yang dialirkan dari kedua ginjal sampai volume tertentu sebelum dikeluarkan ke luar tubuh.",
        "healthFact": "Kapasitas elastis kandung kemih lansia berkurang, dan saraf perasanya menjadi lebih sensitif sehingga lansia merasa ingin kencing meski isi belum penuh.",
        "diseases": [
          {
            "id": "isk-pria",
            "name": "ISK (Infeksi Saluran Kemih Pria Lansia)",
            "category": "Infeksi",
            "summary": "Masuk dan berkembang biaknya kuman bakteri di kandung kemih, sering kali dipicu oleh aliran urine yang tidak lancar akibat prostat.",
            "symptoms": [
              "Sensasi panas terbakar atau perih saat buang air kecil",
              "Kencing sedikit-sedikit tapi sering (anyang-anyangan)",
              "Air kencing berbau menyengat, keruh, atau kemerahan",
              "Pada lansia: perubahan perilaku mendadak, gelisah, atau linglung"
            ],
            "causes": [
              "Air kencing tidak tuntas keluar akibat pembesaran prostat, menjadi sarang kuman",
              "Kurang menjaga kebersihan area kemih",
              "Penggunaan kateter urine atau penyakit kencing manis yang tidak terkontrol"
            ],
            "warningSigns": [
              "Demam tinggi menggigil dan nyeri di area pinggang (kuman naik ke ginjal)",
              "Lansia kehilangan kesadaran atau tekanan darah menurun drastis (sepsis urologi)"
            ],
            "careTips": [
              "Banyak minum air putih untuk membantu membilas kuman keluar dari saluran kencing",
              "Habiskan seluruh antibiotik yang diresepkan dokter sampai tuntas",
              "Jaga kebersihan pakaian dalam dan hindari celana yang terlalu sempit dan lembap"
            ]
          }
        ]
      },
      {
        "id": "prostat",
        "name": "Kelenjar Prostat",
        "latinName": "Prostata",
        "analogy": "Prostat ibarat cincin penyangga seukuran buah kenari yang melingkari selang kencing (uretra) tepat di bawah kandung kemih pria.",
        "mainFunction": "Memproduksi cairan semen pelindung sperma dan membantu memompa cairan saat proses ejakulasi.",
        "healthFact": "Kelenjar prostat membesar secara alami pada lebih dari 70% pria berusia di atas 60 tahun karena perubahan hormon androgen (testosteron).",
        "diseases": [
          {
            "id": "bph",
            "name": "BPH (Pembesaran Prostat Jinak / Anyang-anyangan Lansia)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Membesarnya ukuran kelenjar prostat yang menjepit saluran pipa kencing sehingga aliran urine tersumbat dan tidak lancar.",
            "symptoms": [
              "Pancaran air kencing melemah, menetes di akhir kencing",
              "Harus mengejan atau menunggu beberapa saat sebelum air seni mulai mengalir",
              "Sering terbangun di malam hari hanya untuk buang air kecil (nokturia 3-5 kali)",
              "Merasa kencing belum tuntas atau ingin kencing lagi sesaat setelah keluar dari toilet"
            ],
            "causes": [
              "Perubahan keseimbangan hormon seksual pria alami seiring proses penuaan",
              "Faktor genetik/riwayat keluarga",
              "Pola hidup kurang olahraga dan sindrom metabolik"
            ],
            "warningSigns": [
              "Retensi urine total: sama sekali tidak bisa mengeluarkan air kencing padat dan perut bawah membesar kencang (DARURAT: butuh pemasangan selang kateter segera di IGD)",
              "Kencing bercampur darah merah segar (hematuria)",
              "Infeksi saluran kemih berulang"
            ],
            "careTips": [
              "Batasi minum air 2 jam sebelum tidur malam agar tidak sering terbangun kencing",
              "Hindari minuman berkafein (kopi, teh pekat) dan alkohol yang merangsang kandung kemih",
              "Kencing dengan posisi duduk santai dan lakukan 'double voiding' (tunggu 20 detik setelah kencing lalu coba kencing sekali lagi)",
              "Konsultasikan ke dokter spesialis Urologi untuk pemeriksaan USG prostat dan tes darah PSA"
            ]
          },
          {
            "id": "prostatitis",
            "name": "Prostatitis (Radang Kelenjar Prostat)",
            "category": "Peradangan",
            "summary": "Peradangan dan pembengkakan pada jaringan kelenjar prostat, bisa disertai infeksi bakteri.",
            "symptoms": [
              "Nyeri atau rasa pegal di area antara anus dan buah zakar (perineum)",
              "Nyeri saat buang air kecil atau saat ejakulasi",
              "Pegal di punggung bawah dan pangkal paha"
            ],
            "causes": [
              "Infeksi bakteri dari saluran kemih yang merembet ke kelenjar prostat",
              "Duduk terlalu lama di permukaan keras (misal sopir atau bersepeda jauh)",
              "Stres dan ketegangan otot panggul"
            ],
            "warningSigns": [
              "Demam tinggi mendadak menggigil disertai sulit kencing",
              "Nyeri luar biasa di area kemih"
            ],
            "careTips": [
              "Rendam bokong dalam air hangat (sitz bath) selama 15 menit untuk meredakan nyeri",
              "Gunakan bantal empuk saat duduk di kursi kerja atau mobil",
              "Minum obat anti-inflamasi dan antibiotik sesuai instruksi dokter"
            ]
          }
        ]
      },
      {
        "id": "uretra-pria",
        "name": "Saluran Kemih Keluar (Uretra Pria)",
        "latinName": "Urethra Masculina",
        "analogy": "Uretra ibarat selang pembuangan akhir yang mengalirkan air seni dari kandung kemih menembus prostat hingga ke ujung penis.",
        "mainFunction": "Saluran ganda pada pria untuk mengeluarkan air kencing dan cairan reproduksi secara bergantian.",
        "healthFact": "Jaringan dinding uretra dapat mengalami pembentukan jaringan parut seiring usia jika pernah terinfeksi atau dipasang kateter.",
        "diseases": [
          {
            "id": "striktur-uretra",
            "name": "Striktur Uretra (Penyempitan Saluran Kencing)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Menyempitnya rongga saluran kencing akibat terbentuknya jaringan parut, membuat aliran kencing bercabang atau mengecil drastis.",
            "symptoms": [
              "Pancaran air kencing menjadi sangat kecil seperti benang atau bercabang dua",
              "Perlu waktu lama untuk menyelesaikan kencing",
              "Sensasi nyeri dan perih saat air kencing keluar",
              "Sering terjadi infeksi saluran kemih berulang"
            ],
            "causes": [
              "Bekas luka dari pemasangan selang kateter urin sebelumnya",
              "Riwayat benturan pada area selangkangan (jatuh terduduk)",
              "Riwayat infeksi saluran kencing di masa lalu"
            ],
            "warningSigns": [
              "Air seni hanya menetes dan tidak bisa memancar sama sekali",
              "Perut bawah membuncit kencang dan nyeri hebat"
            ],
            "careTips": [
              "Hindari menahan buang air kecil",
              "Konsultasikan ke dokter spesialis urologi untuk pemeriksaan uretrografi atau tindakan pelebaran uretra yang aman"
            ]
          }
        ]
      },
      {
        "id": "testis",
        "name": "Testis & Skrotum",
        "latinName": "Testis & Scrotum",
        "analogy": "Testis ibarat pabrik hormon vitalitas dan kejantanan pria yang tersimpan aman di dalam kantung skrotum elastis.",
        "mainFunction": "Memproduksi hormon testosteron untuk mempertahankan massa otot dan kekuatan tulang, serta memproduksi sperma.",
        "healthFact": "Kadar hormon testosteron menurun bertahap sekitar 1% per tahun pada lansia pria (disebut andropause), yang memengaruhi stamina dan kepadatan tulang.",
        "diseases": [
          {
            "id": "hidrokel-hernia",
            "name": "Hidrokel & Hernia Inguinalis (Turun Berok)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Penumpukan cairan di selaput pembungkus testis (hidrokel) atau mencuatnya usus ke kantung buah zakar akibat dinding perut melemah (hernia).",
            "symptoms": [
              "Benjolan atau pembengkakan pada salah satu buah zakar tanpa rasa nyeri tajam",
              "Kantung buah zakar terasa berat saat berdiri lama atau berjalan",
              "Pada hernia: benjolan di selangkangan tampak membesar saat batuk/mengejan dan mengecil saat berbaring santai"
            ],
            "causes": [
              "Kelemahan otot dinding perut bawah pada lansia akibat faktor usia",
              "Sering mengejan kuat karena sembelit atau prostat membesar",
              "Riwayat sering mengangkat beban berat tanpa teknik yang benar"
            ],
            "warningSigns": [
              "Benjolan di selangkangan mendadak terasa SANGAT NYERI, berwarna merah/kehitaman, dan tidak bisa masuk lagi (HERNIA TERJEPIT / INKARSARATA - DARURAT MEDIS!)",
              "Disertai muntah-muntah dan tidak bisa buang angin"
            ],
            "careTips": [
              "Gunakan celana dalam penyangga yang nyaman dan pas",
              "Atasi sembelit dan batuk kronis agar tidak sering mengejan keras",
              "Hindari mengangkat beban berat melebihi kapasitas tubuh lansia"
            ]
          }
        ]
      }
    ],
    "femaleOrgans": [
      {
        "id": "ginjal-ureter-wanita",
        "name": "Ginjal & Saluran Kemih Atas",
        "latinName": "Ren & Ureter",
        "analogy": "Ginjal ibarat mesin penyaring air ultra murni 24 jam sehari yang membuang racun ampas sisa metabolisme keluar dari tubuh.",
        "mainFunction": "Menyaring darah, membuang zat racun tubuh, mengatur keseimbangan cairan, mineral kalsium, dan menjaga kestabilan tekanan darah.",
        "healthFact": "Penyusutan fungsi ginjal pada lansia wanita seringkali diperberat oleh osteoporosis atau pemakaian suplemen kalsium berlebih tanpa air yang cukup.",
        "diseases": [
          {
            "id": "batu-ginjal-wanita",
            "name": "Batu Ginjal & Penurunan Fungsi Ginjal",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Pengendapan kristal mineral di saluran ginjal yang dapat memicu peradangan atau penurunan fungsi filtrasi pada lansia.",
            "symptoms": [
              "Nyeri pinggang tumpul atau hilang timbul tajam",
              "Air kencing berbusa atau berwarna keruh kemerahan",
              "Kaki mulai tampak bengkak di sore hari saat duduk lama",
              "Badan cepat lelah, mual ringan, dan nafsu makan berkurang"
            ],
            "causes": [
              "Kurang asupan cairan harian",
              "Riwayat tekanan darah tinggi (hipertensi) atau diabetes yang tidak terkontrol",
              "Konsumsi obat antinyeri rematik tanpa pengawasan dokter"
            ],
            "warningSigns": [
              "Air seni sama sekali tidak keluar dalam 12 jam",
              "Sesak napas karena penumpukan cairan di paru-paru",
              "Kelopak mata dan seluruh wajah tampak bengkak sembab"
            ],
            "careTips": [
              "Minum air putih merata sepanjang hari (hindari minum sekaligus banyak dalam satu waktu)",
              "Kontrol tekanan darah dan gula darah secara teratur",
              "Batasi makanan yang terlalu asin atau gurih tinggi natrium"
            ]
          }
        ]
      },
      {
        "id": "kandung-kemih-wanita",
        "name": "Kandung Kemih & Uretra Wanita",
        "latinName": "Vesica Urinaria & Urethra Feminina",
        "analogy": "Kandung kemih wanita ibarat balon penampung air seni. Saluran keluarnya (uretra) relatif pendek (hanya sekitar 4 cm), sehingga kuman lebih mudah masuk dari luar.",
        "mainFunction": "Menampung urine dan mengeluarkannya ke luar tubuh melalui uretra secara terkontrol.",
        "healthFact": "Setelah menopause, kadar hormon estrogen turun drastis, membuat dinding saluran kencing menipis dan kehilangan keasaman alaminya sehingga bakteri mudah bersarang.",
        "diseases": [
          {
            "id": "isk-wanita",
            "name": "ISK (Infeksi Saluran Kemih Lansia Wanita)",
            "category": "Infeksi",
            "summary": "Infeksi bakteri (terutama E. coli) pada kandung kemih dan uretra. Sangat sering berulang pada wanita lanjut usia.",
            "symptoms": [
              "Rasa perih menyengat atau panas saat buang air kecil",
              "Sering ingin kencing tapi hanya keluar beberapa tetes (anyang-anyangan)",
              "Rasa tidak nyaman atau pegal di perut bagian bawah (di atas tulang kemaluan)",
              "Air seni berbau menyengat, keruh, atau bercampur sedikit darah",
              "Pada wanita lansia: MENDADAK LINGLUNG atau bingung tanpa keluhan nyeri jelas"
            ],
            "causes": [
              "Saluran uretra wanita pendek sehingga bakteri dari usus/anus mudah menjalar",
              "Penurunan hormon estrogen pascamenopause yang melemahkan daya tahan lokal",
              "Kebiasaan membersihkan area kewanitaan dari arah belakang ke depan",
              "Kurang minum air putih"
            ],
            "warningSigns": [
              "Demam menggigil dan nyeri pinggang (tanda infeksi sudah naik ke ginjal / pielonefritis)",
              "Lansia lemas lunglai tidak berdaya"
            ],
            "careTips": [
              "Biasakan membilas area kewanitaan dari ARAH DEPAN KE BELAKANG (bukan sebaliknya!)",
              "Segera buang air kecil dan jangan menahan kencing saat ada dorongan",
              "Banyak minum air putih hangat dan hindari memakai sabun pembersih kewanitaan berpewangi keras"
            ]
          },
          {
            "id": "beser-inkontinensia",
            "name": "Beser / Kandung Kemih Overaktif (Inkontinensia Urine)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Otot kandung kemih yang berkontraksi tiba-tiba di luar kendali, menyebabkan urine bocor atau mengompol tanpa disengaja.",
            "symptoms": [
              "Air kencing bocor atau keluar sedikit saat batuk, bersin, tertawa, atau mengangkat barang",
              "Dorongan kencing yang begitu mendadak hingga tidak sempat sampai ke toilet",
              "Harus bolak-balik ke kamar mandi lebih dari 8 kali sehari"
            ],
            "causes": [
              "Kelemahan otot dasar panggul akibat riwayat melahirkan dan penuaan",
              "Otot dinding kandung kemih yang kaku dan terlalu sensitif",
              "Efek obat darah tinggi golongan diuretik (peluruh kencing)"
            ],
            "warningSigns": [
              "Kulit di area selangkangan lecet merah atau infeksi jamur parah akibat sering basah",
              "Risiko jatuh di kamar mandi karena terburu-buru mengejar toilet"
            ],
            "careTips": [
              "Lakukan latihan senam Kegel secara rutin (latihan mengencangkan otot panggul bawah)",
              "Buat jadwal kencing teratur setiap 2-3 jam sekali (bladder training)",
              "Pasang pegangan tangan di kamar mandi dan pastikan lantai tidak licin untuk mencegah lansia terpeleset"
            ]
          }
        ]
      },
      {
        "id": "rahim",
        "name": "Rahim (Uterus)",
        "latinName": "Uterus",
        "analogy": "Rahim ibarat kantung buah pir terbalik berotot kuat di tengah rongga panggul yang disangga oleh jalinan ligamen dan otot panggul.",
        "mainFunction": "Tempat perkembangan janin selama masa subur. Setelah menopause, rahim menyusut dan beristirahat secara alami.",
        "healthFact": "Otot-otot penyangga panggul yang mengendur di usia tua dapat membuat rahim turun dari posisi aslinya ke liang kewanitaan (turun peranakan).",
        "diseases": [
          {
            "id": "prolaps-uteri",
            "name": "Prolaps Uteri (Turun Peranakan pada Lansia)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kelemahan ligamen dan otot dasar panggul yang membuat rahim melorot turun ke arah lubang vagina.",
            "symptoms": [
              "Sensasi seperti ada benjolan atau ganjalan yang keluar di jalan lahir",
              "Rasa berat atau pegal di punggung bawah dan panggul saat berdiri lama",
              "Kesulitan buang air kecil atau buang air besar terasa terhalang",
              "Rasa tidak nyaman seperti duduk di atas bola kecil"
            ],
            "causes": [
              "Pelemahan jaringan penyangga akibat penuaan dan penurunan estrogen",
              "Riwayat melahirkan normal beberapa kali di masa muda",
              "Tekanan perut tinggi yang kronis akibat batuk lama, sembelit menahun, atau sering angkat beban berat"
            ],
            "warningSigns": [
              "Benjolan rahim yang keluar mengalami lecet, berdarah, atau infeksi",
              "Sama sekali tidak bisa buang air kecil"
            ],
            "careTips": [
              "Hindari mengangkat barang-barang berat di rumah",
              "Atasi sembelit agar tidak mengejan keras saat buang air besar",
              "Konsultasikan ke dokter spesialis kandungan; ada opsi cincin penyangga (pesarium) tanpa perlu operasi jika lansia rentan"
            ]
          },
          {
            "id": "miom-uteri",
            "name": "Miom Uteri (Fibroid Rahim)",
            "category": "Peradangan",
            "summary": "Tumor jinak dari jaringan otot dinding rahim. Sering mengecil setelah menopause, namun tetap perlu dipantau jika ada perdarahan.",
            "symptoms": [
              "Perut bagian bawah terasa penuh, membesar seperti hamil muda",
              "Tekanan pada kandung kemih yang membuat sering ingin kencing",
              "Nyeri panggul tumpul",
              "CATATAN: Perdarahan vagina setelah masa menopause BUKAN hal normal!"
            ],
            "causes": [
              "Pertumbuhan sel otot rahim berlebih yang dipengaruhi hormon estrogen di masa subur",
              "Faktor keturunan"
            ],
            "warningSigns": [
              "KELUAR DARAH DARI JALAN LAHIR SETELAH MENOPAUSE (harus segera diperiksakan untuk menyingkirkan keganasan dinding rahim!)",
              "Lansia pucat dan lemas akibat anemia perdarahan"
            ],
            "careTips": [
              "Lakukan pemeriksaan USG ginekologi berkala jika memiliki riwayat miom",
              "Jaga berat badan ideal dan konsumsi makanan kaya antioksidan",
              "Jangan pernah menyepelekan flek atau bercak darah pada wanita yang sudah menopause"
            ]
          }
        ]
      },
      {
        "id": "serviks",
        "name": "Leher Rahim (Serviks)",
        "latinName": "Cervix Uteri",
        "analogy": "Serviks ibarat pintu gerbang pembatas antara liang kewanitaan dan rongga rahim bagian dalam.",
        "mainFunction": "Pintu masuk pelindung rahim yang memproduksi lendir alami untuk mencegah kuman luar naik ke dalam rongga perut.",
        "healthFact": "Lapisan sel leher rahim menipis dan mengering setelah menopause, membuatnya lebih mudah lecet saat pemeriksaan fisik.",
        "diseases": [
          {
            "id": "servisitis-polip",
            "name": "Radang & Polip Leher Rahim",
            "category": "Peradangan",
            "summary": "Peradangan pada leher rahim atau pertumbuhan benjolan bertangkai kecil (polip) jinak yang mudah berdarah.",
            "symptoms": [
              "Keputihan yang berwarna kekuningan, berbau tidak sedap, atau bercampur sedikit darah",
              "Rasa tidak nyaman atau nyeri pegal di panggul bawah",
              "Keluar bercak darah setelah bersenggama atau saat aktivitas berat"
            ],
            "causes": [
              "Iritasi akibat penurunan kelembapan alami pascamenopause",
              "Infeksi bakteri atau jamur",
              "Pertumbuhan jaringan mukosa berlebih membentuk polip"
            ],
            "warningSigns": [
              "Keputihan berbau busuk tajam bercampur darah cair",
              "Perdarahan vagina yang bertambah banyak"
            ],
            "careTips": [
              "Jaga kebersihan area organ intim tetap kering dan bersih",
              "Lakukan pemeriksaan Pap Smear atau IVA secara rutin bila masih dianjurkan dokter",
              "Hindari pemakaian sabun wangi pembersih kewanitaan yang merusak flora normal"
            ]
          }
        ]
      },
      {
        "id": "ovarium",
        "name": "Indung Telur (Ovarium) & Tuba Falopi",
        "latinName": "Ovarium & Tuba Fallopii",
        "analogy": "Ovarium ibarat sepasang lumbung kecil seukuran buah almond di kanan dan kiri panggul yang memproduksi hormon wanita.",
        "mainFunction": "Memproduksi sel telur dan hormon wanita (estrogen & progesteron) di masa reproduksi aktif.",
        "healthFact": "Setelah menopause, ovarium berhenti melepas sel telur dan menyusut. Benjolan kista baru yang muncul pada ovarium wanita lansia memerlukan evaluasi cermat oleh dokter spesialis.",
        "diseases": [
          {
            "id": "kista-ovarium",
            "name": "Kista Ovarium Pascamenopause",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kantung berisi cairan yang tumbuh di ovarium. Pada wanita lansia, setiap benjolan ovarium perlu dipantau ketat.",
            "symptoms": [
              "Perut terasa kembung, begah, atau terasa penuh terus menerus",
              "Nyeri tumpul di perut bagian bawah sebelah kanan atau kiri",
              "Cepat merasa kenyang saat makan walau baru sedikit",
              "Sering ingin buang air kecil karena kista menekan kandung kemih"
            ],
            "causes": [
              "Perubahan sel jaringan ovarium pada masa pascamenopause",
              "Riwayat kista sebelumnya",
              "Faktor hormonal atau genetik"
            ],
            "warningSigns": [
              "Nyeri perut bawah yang MENDADAK SANGAT HEBAT (bisa menandakan kista terpuntir / torsi ovarium)",
              "Perut membesar cepat dan keras disertai penurunan berat badan drastis",
              "Mual muntah hebat dan pingsan"
            ],
            "careTips": [
              "Lakukan USG perut / transvaginal berkala untuk memantau ukuran kista",
              "Tes penanda tumor (CA-125) sesuai anjuran dokter spesialis kandungan",
              "Konsumsi makanan bernutrisi tinggi dan hindari makanan berpengawet berlebih"
            ]
          }
        ]
      }
    ]
  },
  "urology": {
    "title": "12. Sistem Reproduksi",
    "latinTitle": "Systema Genitale (Pria & Wanita)",
    "systemBadgeColor": "bg-purple-100 text-purple-800",
    "maleOrgans": [
      {
        "id": "ginjal-ureter-pria",
        "name": "Ginjal & Saluran Kemih Atas",
        "latinName": "Ren & Ureter",
        "analogy": "Ginjal ibarat mesin penyaring air ultra murni 24 jam sehari. Organ ini menyaring darah dari sisa ampas racun tubuh dan membuangnya dalam bentuk air seni.",
        "mainFunction": "Menyaring darah, membuang zat amonia/urea, menjaga keseimbangan cairan & tekanan darah, serta memproduksi hormon sel darah merah.",
        "healthFact": "Laju penyaringan ginjal (eGFR) menurun sekitar 1% setiap tahun setelah usia 40 tahun. Lansia lebih rentan mengalami dehidrasi atau beban kerja ginjal berat.",
        "diseases": [
          {
            "id": "batu-saluran-kemih",
            "name": "Batu Saluran Kemih (Urolitiasis)",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Pengkristalan mineral dan garam kalsium atau asam urat di ginjal yang turun dan menyumbat saluran kencing.",
            "symptoms": [
              "Nyeri pinggang hilang timbul yang sangat tajam (kolik ginjal)",
              "Nyeri menjalar dari pinggang ke perut bawah hingga selangkangan",
              "Air kencing berwarna kemerahan atau kecokelatan (bercampur darah)",
              "Rasa mual dan anyang-anyangan saat buang air kecil"
            ],
            "causes": [
              "Kebiasaan kurang minum air putih bertahun-tahun",
              "Tingginya kadar asam urat atau kalsium dalam darah",
              "Kebiasaan menahan kencing dan konsumsi makanan tinggi purin (emping, jeroan)"
            ],
            "warningSigns": [
              "Sama sekali tidak bisa buang air kecil meski kandung kemih terasa penuh mau pecah",
              "Demam tinggi menggigil disertai nyeri pinggang hebat (infeksi ginjal akut)",
              "Muntah terus menerus"
            ],
            "careTips": [
              "Biasakan minum air putih minimal 2 liter per hari agar air kencing selalu berwarna kuning jernih",
              "Batasi makanan yang memicu asam urat tinggi seperti jeroan, kuah daging kental, dan tape",
              "Jangan membiasakan menahan buang air kecil"
            ]
          }
        ]
      },
      {
        "id": "kandung-kemih-pria",
        "name": "Kandung Kemih (Pria)",
        "latinName": "Vesica Urinaria",
        "analogy": "Kandung kemih ibarat balon penampung urine sementara. Dindingnya lentur mengembang saat terisi dan memompa saat kita berkemih.",
        "mainFunction": "Menampung air seni yang dialirkan dari kedua ginjal sampai volume tertentu sebelum dikeluarkan ke luar tubuh.",
        "healthFact": "Kapasitas elastis kandung kemih lansia berkurang, dan saraf perasanya menjadi lebih sensitif sehingga lansia merasa ingin kencing meski isi belum penuh.",
        "diseases": [
          {
            "id": "isk-pria",
            "name": "ISK (Infeksi Saluran Kemih Pria Lansia)",
            "category": "Infeksi",
            "summary": "Masuk dan berkembang biaknya kuman bakteri di kandung kemih, sering kali dipicu oleh aliran urine yang tidak lancar akibat prostat.",
            "symptoms": [
              "Sensasi panas terbakar atau perih saat buang air kecil",
              "Kencing sedikit-sedikit tapi sering (anyang-anyangan)",
              "Air kencing berbau menyengat, keruh, atau kemerahan",
              "Pada lansia: perubahan perilaku mendadak, gelisah, atau linglung"
            ],
            "causes": [
              "Air kencing tidak tuntas keluar akibat pembesaran prostat, menjadi sarang kuman",
              "Kurang menjaga kebersihan area kemih",
              "Penggunaan kateter urine atau penyakit kencing manis yang tidak terkontrol"
            ],
            "warningSigns": [
              "Demam tinggi menggigil dan nyeri di area pinggang (kuman naik ke ginjal)",
              "Lansia kehilangan kesadaran atau tekanan darah menurun drastis (sepsis urologi)"
            ],
            "careTips": [
              "Banyak minum air putih untuk membantu membilas kuman keluar dari saluran kencing",
              "Habiskan seluruh antibiotik yang diresepkan dokter sampai tuntas",
              "Jaga kebersihan pakaian dalam dan hindari celana yang terlalu sempit dan lembap"
            ]
          }
        ]
      },
      {
        "id": "prostat",
        "name": "Kelenjar Prostat",
        "latinName": "Prostata",
        "analogy": "Prostat ibarat cincin penyangga seukuran buah kenari yang melingkari selang kencing (uretra) tepat di bawah kandung kemih pria.",
        "mainFunction": "Memproduksi cairan semen pelindung sperma dan membantu memompa cairan saat proses ejakulasi.",
        "healthFact": "Kelenjar prostat membesar secara alami pada lebih dari 70% pria berusia di atas 60 tahun karena perubahan hormon androgen (testosteron).",
        "diseases": [
          {
            "id": "bph",
            "name": "BPH (Pembesaran Prostat Jinak / Anyang-anyangan Lansia)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Membesarnya ukuran kelenjar prostat yang menjepit saluran pipa kencing sehingga aliran urine tersumbat dan tidak lancar.",
            "symptoms": [
              "Pancaran air kencing melemah, menetes di akhir kencing",
              "Harus mengejan atau menunggu beberapa saat sebelum air seni mulai mengalir",
              "Sering terbangun di malam hari hanya untuk buang air kecil (nokturia 3-5 kali)",
              "Merasa kencing belum tuntas atau ingin kencing lagi sesaat setelah keluar dari toilet"
            ],
            "causes": [
              "Perubahan keseimbangan hormon seksual pria alami seiring proses penuaan",
              "Faktor genetik/riwayat keluarga",
              "Pola hidup kurang olahraga dan sindrom metabolik"
            ],
            "warningSigns": [
              "Retensi urine total: sama sekali tidak bisa mengeluarkan air kencing padat dan perut bawah membesar kencang (DARURAT: butuh pemasangan selang kateter segera di IGD)",
              "Kencing bercampur darah merah segar (hematuria)",
              "Infeksi saluran kemih berulang"
            ],
            "careTips": [
              "Batasi minum air 2 jam sebelum tidur malam agar tidak sering terbangun kencing",
              "Hindari minuman berkafein (kopi, teh pekat) dan alkohol yang merangsang kandung kemih",
              "Kencing dengan posisi duduk santai dan lakukan 'double voiding' (tunggu 20 detik setelah kencing lalu coba kencing sekali lagi)",
              "Konsultasikan ke dokter spesialis Urologi untuk pemeriksaan USG prostat dan tes darah PSA"
            ]
          },
          {
            "id": "prostatitis",
            "name": "Prostatitis (Radang Kelenjar Prostat)",
            "category": "Peradangan",
            "summary": "Peradangan dan pembengkakan pada jaringan kelenjar prostat, bisa disertai infeksi bakteri.",
            "symptoms": [
              "Nyeri atau rasa pegal di area antara anus dan buah zakar (perineum)",
              "Nyeri saat buang air kecil atau saat ejakulasi",
              "Pegal di punggung bawah dan pangkal paha"
            ],
            "causes": [
              "Infeksi bakteri dari saluran kemih yang merembet ke kelenjar prostat",
              "Duduk terlalu lama di permukaan keras (misal sopir atau bersepeda jauh)",
              "Stres dan ketegangan otot panggul"
            ],
            "warningSigns": [
              "Demam tinggi mendadak menggigil disertai sulit kencing",
              "Nyeri luar biasa di area kemih"
            ],
            "careTips": [
              "Rendam bokong dalam air hangat (sitz bath) selama 15 menit untuk meredakan nyeri",
              "Gunakan bantal empuk saat duduk di kursi kerja atau mobil",
              "Minum obat anti-inflamasi dan antibiotik sesuai instruksi dokter"
            ]
          }
        ]
      },
      {
        "id": "uretra-pria",
        "name": "Saluran Kemih Keluar (Uretra Pria)",
        "latinName": "Urethra Masculina",
        "analogy": "Uretra ibarat selang pembuangan akhir yang mengalirkan air seni dari kandung kemih menembus prostat hingga ke ujung penis.",
        "mainFunction": "Saluran ganda pada pria untuk mengeluarkan air kencing dan cairan reproduksi secara bergantian.",
        "healthFact": "Jaringan dinding uretra dapat mengalami pembentukan jaringan parut seiring usia jika pernah terinfeksi atau dipasang kateter.",
        "diseases": [
          {
            "id": "striktur-uretra",
            "name": "Striktur Uretra (Penyempitan Saluran Kencing)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Menyempitnya rongga saluran kencing akibat terbentuknya jaringan parut, membuat aliran kencing bercabang atau mengecil drastis.",
            "symptoms": [
              "Pancaran air kencing menjadi sangat kecil seperti benang atau bercabang dua",
              "Perlu waktu lama untuk menyelesaikan kencing",
              "Sensasi nyeri dan perih saat air kencing keluar",
              "Sering terjadi infeksi saluran kemih berulang"
            ],
            "causes": [
              "Bekas luka dari pemasangan selang kateter urin sebelumnya",
              "Riwayat benturan pada area selangkangan (jatuh terduduk)",
              "Riwayat infeksi saluran kencing di masa lalu"
            ],
            "warningSigns": [
              "Air seni hanya menetes dan tidak bisa memancar sama sekali",
              "Perut bawah membuncit kencang dan nyeri hebat"
            ],
            "careTips": [
              "Hindari menahan buang air kecil",
              "Konsultasikan ke dokter spesialis urologi untuk pemeriksaan uretrografi atau tindakan pelebaran uretra yang aman"
            ]
          }
        ]
      },
      {
        "id": "testis",
        "name": "Testis & Skrotum",
        "latinName": "Testis & Scrotum",
        "analogy": "Testis ibarat pabrik hormon vitalitas dan kejantanan pria yang tersimpan aman di dalam kantung skrotum elastis.",
        "mainFunction": "Memproduksi hormon testosteron untuk mempertahankan massa otot dan kekuatan tulang, serta memproduksi sperma.",
        "healthFact": "Kadar hormon testosteron menurun bertahap sekitar 1% per tahun pada lansia pria (disebut andropause), yang memengaruhi stamina dan kepadatan tulang.",
        "diseases": [
          {
            "id": "hidrokel-hernia",
            "name": "Hidrokel & Hernia Inguinalis (Turun Berok)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Penumpukan cairan di selaput pembungkus testis (hidrokel) atau mencuatnya usus ke kantung buah zakar akibat dinding perut melemah (hernia).",
            "symptoms": [
              "Benjolan atau pembengkakan pada salah satu buah zakar tanpa rasa nyeri tajam",
              "Kantung buah zakar terasa berat saat berdiri lama atau berjalan",
              "Pada hernia: benjolan di selangkangan tampak membesar saat batuk/mengejan dan mengecil saat berbaring santai"
            ],
            "causes": [
              "Kelemahan otot dinding perut bawah pada lansia akibat faktor usia",
              "Sering mengejan kuat karena sembelit atau prostat membesar",
              "Riwayat sering mengangkat beban berat tanpa teknik yang benar"
            ],
            "warningSigns": [
              "Benjolan di selangkangan mendadak terasa SANGAT NYERI, berwarna merah/kehitaman, dan tidak bisa masuk lagi (HERNIA TERJEPIT / INKARSARATA - DARURAT MEDIS!)",
              "Disertai muntah-muntah dan tidak bisa buang angin"
            ],
            "careTips": [
              "Gunakan celana dalam penyangga yang nyaman dan pas",
              "Atasi sembelit dan batuk kronis agar tidak sering mengejan keras",
              "Hindari mengangkat beban berat melebihi kapasitas tubuh lansia"
            ]
          }
        ]
      }
    ],
    "femaleOrgans": [
      {
        "id": "ginjal-ureter-wanita",
        "name": "Ginjal & Saluran Kemih Atas",
        "latinName": "Ren & Ureter",
        "analogy": "Ginjal ibarat mesin penyaring air ultra murni 24 jam sehari yang membuang racun ampas sisa metabolisme keluar dari tubuh.",
        "mainFunction": "Menyaring darah, membuang zat racun tubuh, mengatur keseimbangan cairan, mineral kalsium, dan menjaga kestabilan tekanan darah.",
        "healthFact": "Penyusutan fungsi ginjal pada lansia wanita seringkali diperberat oleh osteoporosis atau pemakaian suplemen kalsium berlebih tanpa air yang cukup.",
        "diseases": [
          {
            "id": "batu-ginjal-wanita",
            "name": "Batu Ginjal & Penurunan Fungsi Ginjal",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Pengendapan kristal mineral di saluran ginjal yang dapat memicu peradangan atau penurunan fungsi filtrasi pada lansia.",
            "symptoms": [
              "Nyeri pinggang tumpul atau hilang timbul tajam",
              "Air kencing berbusa atau berwarna keruh kemerahan",
              "Kaki mulai tampak bengkak di sore hari saat duduk lama",
              "Badan cepat lelah, mual ringan, dan nafsu makan berkurang"
            ],
            "causes": [
              "Kurang asupan cairan harian",
              "Riwayat tekanan darah tinggi (hipertensi) atau diabetes yang tidak terkontrol",
              "Konsumsi obat antinyeri rematik tanpa pengawasan dokter"
            ],
            "warningSigns": [
              "Air seni sama sekali tidak keluar dalam 12 jam",
              "Sesak napas karena penumpukan cairan di paru-paru",
              "Kelopak mata dan seluruh wajah tampak bengkak sembab"
            ],
            "careTips": [
              "Minum air putih merata sepanjang hari (hindari minum sekaligus banyak dalam satu waktu)",
              "Kontrol tekanan darah dan gula darah secara teratur",
              "Batasi makanan yang terlalu asin atau gurih tinggi natrium"
            ]
          }
        ]
      },
      {
        "id": "kandung-kemih-wanita",
        "name": "Kandung Kemih & Uretra Wanita",
        "latinName": "Vesica Urinaria & Urethra Feminina",
        "analogy": "Kandung kemih wanita ibarat balon penampung air seni. Saluran keluarnya (uretra) relatif pendek (hanya sekitar 4 cm), sehingga kuman lebih mudah masuk dari luar.",
        "mainFunction": "Menampung urine dan mengeluarkannya ke luar tubuh melalui uretra secara terkontrol.",
        "healthFact": "Setelah menopause, kadar hormon estrogen turun drastis, membuat dinding saluran kencing menipis dan kehilangan keasaman alaminya sehingga bakteri mudah bersarang.",
        "diseases": [
          {
            "id": "isk-wanita",
            "name": "ISK (Infeksi Saluran Kemih Lansia Wanita)",
            "category": "Infeksi",
            "summary": "Infeksi bakteri (terutama E. coli) pada kandung kemih dan uretra. Sangat sering berulang pada wanita lanjut usia.",
            "symptoms": [
              "Rasa perih menyengat atau panas saat buang air kecil",
              "Sering ingin kencing tapi hanya keluar beberapa tetes (anyang-anyangan)",
              "Rasa tidak nyaman atau pegal di perut bagian bawah (di atas tulang kemaluan)",
              "Air seni berbau menyengat, keruh, atau bercampur sedikit darah",
              "Pada wanita lansia: MENDADAK LINGLUNG atau bingung tanpa keluhan nyeri jelas"
            ],
            "causes": [
              "Saluran uretra wanita pendek sehingga bakteri dari usus/anus mudah menjalar",
              "Penurunan hormon estrogen pascamenopause yang melemahkan daya tahan lokal",
              "Kebiasaan membersihkan area kewanitaan dari arah belakang ke depan",
              "Kurang minum air putih"
            ],
            "warningSigns": [
              "Demam menggigil dan nyeri pinggang (tanda infeksi sudah naik ke ginjal / pielonefritis)",
              "Lansia lemas lunglai tidak berdaya"
            ],
            "careTips": [
              "Biasakan membilas area kewanitaan dari ARAH DEPAN KE BELAKANG (bukan sebaliknya!)",
              "Segera buang air kecil dan jangan menahan kencing saat ada dorongan",
              "Banyak minum air putih hangat dan hindari memakai sabun pembersih kewanitaan berpewangi keras"
            ]
          },
          {
            "id": "beser-inkontinensia",
            "name": "Beser / Kandung Kemih Overaktif (Inkontinensia Urine)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Otot kandung kemih yang berkontraksi tiba-tiba di luar kendali, menyebabkan urine bocor atau mengompol tanpa disengaja.",
            "symptoms": [
              "Air kencing bocor atau keluar sedikit saat batuk, bersin, tertawa, atau mengangkat barang",
              "Dorongan kencing yang begitu mendadak hingga tidak sempat sampai ke toilet",
              "Harus bolak-balik ke kamar mandi lebih dari 8 kali sehari"
            ],
            "causes": [
              "Kelemahan otot dasar panggul akibat riwayat melahirkan dan penuaan",
              "Otot dinding kandung kemih yang kaku dan terlalu sensitif",
              "Efek obat darah tinggi golongan diuretik (peluruh kencing)"
            ],
            "warningSigns": [
              "Kulit di area selangkangan lecet merah atau infeksi jamur parah akibat sering basah",
              "Risiko jatuh di kamar mandi karena terburu-buru mengejar toilet"
            ],
            "careTips": [
              "Lakukan latihan senam Kegel secara rutin (latihan mengencangkan otot panggul bawah)",
              "Buat jadwal kencing teratur setiap 2-3 jam sekali (bladder training)",
              "Pasang pegangan tangan di kamar mandi dan pastikan lantai tidak licin untuk mencegah lansia terpeleset"
            ]
          }
        ]
      },
      {
        "id": "rahim",
        "name": "Rahim (Uterus)",
        "latinName": "Uterus",
        "analogy": "Rahim ibarat kantung buah pir terbalik berotot kuat di tengah rongga panggul yang disangga oleh jalinan ligamen dan otot panggul.",
        "mainFunction": "Tempat perkembangan janin selama masa subur. Setelah menopause, rahim menyusut dan beristirahat secara alami.",
        "healthFact": "Otot-otot penyangga panggul yang mengendur di usia tua dapat membuat rahim turun dari posisi aslinya ke liang kewanitaan (turun peranakan).",
        "diseases": [
          {
            "id": "prolaps-uteri",
            "name": "Prolaps Uteri (Turun Peranakan pada Lansia)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kelemahan ligamen dan otot dasar panggul yang membuat rahim melorot turun ke arah lubang vagina.",
            "symptoms": [
              "Sensasi seperti ada benjolan atau ganjalan yang keluar di jalan lahir",
              "Rasa berat atau pegal di punggung bawah dan panggul saat berdiri lama",
              "Kesulitan buang air kecil atau buang air besar terasa terhalang",
              "Rasa tidak nyaman seperti duduk di atas bola kecil"
            ],
            "causes": [
              "Pelemahan jaringan penyangga akibat penuaan dan penurunan estrogen",
              "Riwayat melahirkan normal beberapa kali di masa muda",
              "Tekanan perut tinggi yang kronis akibat batuk lama, sembelit menahun, atau sering angkat beban berat"
            ],
            "warningSigns": [
              "Benjolan rahim yang keluar mengalami lecet, berdarah, atau infeksi",
              "Sama sekali tidak bisa buang air kecil"
            ],
            "careTips": [
              "Hindari mengangkat barang-barang berat di rumah",
              "Atasi sembelit agar tidak mengejan keras saat buang air besar",
              "Konsultasikan ke dokter spesialis kandungan; ada opsi cincin penyangga (pesarium) tanpa perlu operasi jika lansia rentan"
            ]
          },
          {
            "id": "miom-uteri",
            "name": "Miom Uteri (Fibroid Rahim)",
            "category": "Peradangan",
            "summary": "Tumor jinak dari jaringan otot dinding rahim. Sering mengecil setelah menopause, namun tetap perlu dipantau jika ada perdarahan.",
            "symptoms": [
              "Perut bagian bawah terasa penuh, membesar seperti hamil muda",
              "Tekanan pada kandung kemih yang membuat sering ingin kencing",
              "Nyeri panggul tumpul",
              "CATATAN: Perdarahan vagina setelah masa menopause BUKAN hal normal!"
            ],
            "causes": [
              "Pertumbuhan sel otot rahim berlebih yang dipengaruhi hormon estrogen di masa subur",
              "Faktor keturunan"
            ],
            "warningSigns": [
              "KELUAR DARAH DARI JALAN LAHIR SETELAH MENOPAUSE (harus segera diperiksakan untuk menyingkirkan keganasan dinding rahim!)",
              "Lansia pucat dan lemas akibat anemia perdarahan"
            ],
            "careTips": [
              "Lakukan pemeriksaan USG ginekologi berkala jika memiliki riwayat miom",
              "Jaga berat badan ideal dan konsumsi makanan kaya antioksidan",
              "Jangan pernah menyepelekan flek atau bercak darah pada wanita yang sudah menopause"
            ]
          }
        ]
      },
      {
        "id": "serviks",
        "name": "Leher Rahim (Serviks)",
        "latinName": "Cervix Uteri",
        "analogy": "Serviks ibarat pintu gerbang pembatas antara liang kewanitaan dan rongga rahim bagian dalam.",
        "mainFunction": "Pintu masuk pelindung rahim yang memproduksi lendir alami untuk mencegah kuman luar naik ke dalam rongga perut.",
        "healthFact": "Lapisan sel leher rahim menipis dan mengering setelah menopause, membuatnya lebih mudah lecet saat pemeriksaan fisik.",
        "diseases": [
          {
            "id": "servisitis-polip",
            "name": "Radang & Polip Leher Rahim",
            "category": "Peradangan",
            "summary": "Peradangan pada leher rahim atau pertumbuhan benjolan bertangkai kecil (polip) jinak yang mudah berdarah.",
            "symptoms": [
              "Keputihan yang berwarna kekuningan, berbau tidak sedap, atau bercampur sedikit darah",
              "Rasa tidak nyaman atau nyeri pegal di panggul bawah",
              "Keluar bercak darah setelah bersenggama atau saat aktivitas berat"
            ],
            "causes": [
              "Iritasi akibat penurunan kelembapan alami pascamenopause",
              "Infeksi bakteri atau jamur",
              "Pertumbuhan jaringan mukosa berlebih membentuk polip"
            ],
            "warningSigns": [
              "Keputihan berbau busuk tajam bercampur darah cair",
              "Perdarahan vagina yang bertambah banyak"
            ],
            "careTips": [
              "Jaga kebersihan area organ intim tetap kering dan bersih",
              "Lakukan pemeriksaan Pap Smear atau IVA secara rutin bila masih dianjurkan dokter",
              "Hindari pemakaian sabun wangi pembersih kewanitaan yang merusak flora normal"
            ]
          }
        ]
      },
      {
        "id": "ovarium",
        "name": "Indung Telur (Ovarium) & Tuba Falopi",
        "latinName": "Ovarium & Tuba Fallopii",
        "analogy": "Ovarium ibarat sepasang lumbung kecil seukuran buah almond di kanan dan kiri panggul yang memproduksi hormon wanita.",
        "mainFunction": "Memproduksi sel telur dan hormon wanita (estrogen & progesteron) di masa reproduksi aktif.",
        "healthFact": "Setelah menopause, ovarium berhenti melepas sel telur dan menyusut. Benjolan kista baru yang muncul pada ovarium wanita lansia memerlukan evaluasi cermat oleh dokter spesialis.",
        "diseases": [
          {
            "id": "kista-ovarium",
            "name": "Kista Ovarium Pascamenopause",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kantung berisi cairan yang tumbuh di ovarium. Pada wanita lansia, setiap benjolan ovarium perlu dipantau ketat.",
            "symptoms": [
              "Perut terasa kembung, begah, atau terasa penuh terus menerus",
              "Nyeri tumpul di perut bagian bawah sebelah kanan atau kiri",
              "Cepat merasa kenyang saat makan walau baru sedikit",
              "Sering ingin buang air kecil karena kista menekan kandung kemih"
            ],
            "causes": [
              "Perubahan sel jaringan ovarium pada masa pascamenopause",
              "Riwayat kista sebelumnya",
              "Faktor hormonal atau genetik"
            ],
            "warningSigns": [
              "Nyeri perut bawah yang MENDADAK SANGAT HEBAT (bisa menandakan kista terpuntir / torsi ovarium)",
              "Perut membesar cepat dan keras disertai penurunan berat badan drastis",
              "Mual muntah hebat dan pingsan"
            ],
            "careTips": [
              "Lakukan USG perut / transvaginal berkala untuk memantau ukuran kista",
              "Tes penanda tumor (CA-125) sesuai anjuran dokter spesialis kandungan",
              "Konsumsi makanan bernutrisi tinggi dan hindari makanan berpengawet berlebih"
            ]
          }
        ]
      }
    ]
  },
  "muscularFat": {
    "title": "2. Otot (Muskular)",
    "latinTitle": "Systema Musculare & Textus Adiposus",
    "systemBadgeColor": "bg-rose-100 text-rose-800",
    "organs": [
      {
        "id": "otot-rangka",
        "name": "Otot Rangka Utama (Muskuloskeletal)",
        "latinName": "Musculi Sceleti",
        "analogy": "Otot rangka ibarat mesin pendorong dan rangka pelindung tubuh. Otot menopang tulang kita berdiri tegak, memompa darah saat melangkah, dan menjadi tangki penyerap gula terbesar tubuh.",
        "mainFunction": "Menghasilkan tenaga gerak lokomotor, mempertahankan postur tegak tubuh, menyerap glukosa darah (wadah gula), dan memproduksi zat kimia peremaja (miokin).",
        "healthFact": "Tanpa latihan gerak aktif, tubuh kehilangan sekitar 30-40% massa otot antara usia 50 hingga 80 tahun. Menjaga otot paha dan betis adalah kunci utama lansia tidak mudah jatuh.",
        "diseases": [
          {
            "id": "sarkopenia",
            "name": "Sarkopenia (Penyusutan Massa & Kekuatan Otot)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kehilangan massa, kualitas, dan kekuatan otot rangka yang membuat lansia mudah lelah, lambat berjalan, dan rentan jatuh.",
            "symptoms": [
              "Otot lengan dan paha tampak mengecil dan mengendur menggelambir",
              "Sulit bangkit berdiri dari kursi tanpa bertumpu kedua tangan pada lutut atau meja",
              "Langkah kaki sangat lambat tertatih-tatih dan mudah hilang keseimbangan",
              "Kekuatan genggaman tangan melemah (sulit membuka toples atau memeras kain)"
            ],
            "causes": [
              "Kurangnya aktivitas gerak fisik dan kebiasaan duduk/tiduran seharian",
              "Kurang asupan makanan sumber protein hewani/nabati berkualitas tinggi",
              "Penurunan alami hormon pertumbuhan dan penyerapan asam amino pada usia lanjut"
            ],
            "warningSigns": [
              "Jatuh di lantai dan tidak mampu bangun sendiri selama berjam-jam",
              "Kaki tidak sanggup lagi menopang berat badan saat berdiri",
              "Berat badan menyusut drastis disertai badan sangat lemah lunglai"
            ],
            "careTips": [
              "Latihan beban ringan teratur 2-3 kali seminggu (misal: squat berpegangan meja, dorong dinding)",
              "Konsumsi protein cukup 1.2 gram/kg berat badan setiap hari (telur rebus, ikan, tempe, tahu)",
              "Berjemur matahari pagi 15-20 menit untuk mencukupi kebutuhan vitamin D otot"
            ]
          },
          {
            "id": "kram-otot-nokturnal",
            "name": "Kram Otot Kaki Malam Hari (Nocturnal Leg Cramps)",
            "category": "Peradangan",
            "summary": "Kejang otot betis atau telapak kaki yang mendadak mengeras kaku dan sangat menyakitkan di tengah tidur malam.",
            "symptoms": [
              "Otot betis mendadak mengeras kaku seperti batu saat tidur tengah malam",
              "Jari-jari kaki tertarik menekuk kaku ke bawah dan sangat sulit diluruskan",
              "Rasa nyeri tajam menyiksa yang membuat terbangun kaget dari tidur nyenyak",
              "Otot betis terasa pegal dan berdenyut linu keesokan harinya"
            ],
            "causes": [
              "Kekurangan cairan (dehidrasi ringan) dan ketidakseimbangan mineral (magnesium/kalium)",
              "Efek samping obat diuretik kencing untuk darah tinggi yang menguras garam tubuh",
              "Otot betis kedinginan saat tidur terpapar AC/kipas angin langsung atau sirkulasi darah melambat"
            ],
            "warningSigns": [
              "Betis bengkak merah hangat dan terasa sangat nyeri (waspadai bekuan darah DVT)",
              "Kram terjadi setiap malam dan tidak membaik dengan peregangan",
              "Air kencing berwarna gelap kecokelatan seperti teh pekat"
            ],
            "careTips": [
              "Saat kram terjadi: TARIK ujung jari kaki ke arah atas (ke arah tulang kering) secara perlahan",
              "Lakukan peregangan betis menempel di dinding selama 3 menit setiap malam sebelum tidur",
              "Kenakan kaus kaki katun longgar saat tidur malam dan minum segelas air hangat sebelum tidur"
            ]
          },
          {
            "id": "polimialgia-reumatika",
            "name": "Polimialgia Reumatika (Nyeri Kaku Otot Bahu & Panggul)",
            "category": "Peradangan",
            "summary": "Penyakit peradangan autoimun pada lansia yang memicu nyeri hebat dan rasa kaku berat pada otot bahu, leher, dan pinggul.",
            "symptoms": [
              "Bahu dan leher terasa sangat kaku dan pegal hebat di pagi hari (berlangsung >45 menit)",
              "Sangat sulit menyisir rambut, memakai kaos melewati kepala, atau mengenakan jaket",
              "Sulit bangkit berdiri dari ranjang atau mobil akibat kaku pada otot panggul",
              "Badan meriang subfebris, nafsu makan turun, dan berat badan menyusut"
            ],
            "causes": [
              "Peradangan autoimun pada kantung pelumas sendi bahu dan panggul (bursitis)",
              "Lonjakan zat peradangan interleukin-6 (IL-6) akibat penuaan sistem imun",
              "Paling sering menyerang pria dan wanita di atas usia 65 tahun"
            ],
            "warningSigns": [
              "Mata mendadak kabur atau hilang penglihatan separuh (amaurosis fugax)",
              "Nyeri kepala pelipis baru yang sangat tajam dan berdenyut kencang",
              "Nyeri rahang hebat saat mengunyah makanan (tanda bahaya radang pembuluh darah pelipis)"
            ],
            "careTips": [
              "Segera periksakan ke dokter spesialis penyakit dalam (biasanya mereda dramatis dengan steroid dosis rendah)",
              "Gunakan pakaian dengan kancing depan atau ritsleting agar tidak perlu mengangkat tangan tinggi",
              "Latihan gerak sendi bahu memutar perlahan setiap pagi untuk mencegah sendi membeku"
            ]
          }
        ]
      },
      {
        "id": "lemak-viseral",
        "name": "Lemak Viseral (Rongga Perut Dalam)",
        "latinName": "Adeps Visceralis",
        "analogy": "Lemak viseral adalah lemak yang membungkus organ dalam di balik dinding perut. Ibarat bantalan peredam kejut alami, namun jika berlebih akan berubah menjadi pabrik racun pemicu radang pembuluh darah.",
        "mainFunction": "Bantalan pelindung mekanik organ rongga perut, namun bila berlebih memicu pelepasan asam lemak bebas toksik langsung ke hati dan pembuluh darah.",
        "healthFact": "Setelah usia 60 tahun, lemak tubuh secara alami berpindah dari bawah kulit ke rongga perut dalam, memicu perut buncit meskipun timbangan berat badan tampak normal.",
        "diseases": [
          {
            "id": "obesitas-viseral",
            "name": "Obesitas Viseral (Penumpukan Lemak Perut Dalam)",
            "category": "Gaya Hidup/Pola Makan",
            "summary": "Penumpukan sel lemak aktif di sekitar organ dalam perut yang memicu sindrom metabolik, fatty liver, dan penyakit jantung.",
            "symptoms": [
              "Perut tampak membuncit padat dan lingkar pinggang membesar (>90 cm pria, >80 cm wanita)",
              "Napas gampang memburu terengah-engah saat berjalan atau naik tangga sedikit saja",
              "Tidur mendengkur keras dan sering terbangun tercekik di malam hari (sleep apnea)",
              "Sering mengantuk berat di siang hari dan badan terasa lesu tidak bertenaga"
            ],
            "causes": [
              "Kebiasaan mengonsumsi gorengan minyak jelantah, makanan bersantan kental, dan gula pasir",
              "Kurangnya aktivitas jalan kaki setelah masa pensiun",
              "Penurunan hormon seks alami tubuh dan penurunan kecepatan metabolisme basal"
            ],
            "warningSigns": [
              "Nyeri dada kiri seperti tertindih benda berat yang menjalar ke leher/lengan kiri",
              "Tekanan darah melonjak tinggi >180/100 mmHg",
              "Sesak napas hebat saat berbaring lurus telentang"
            ],
            "careTips": [
              "Jalan kaki santai 30 menit setiap pagi untuk mengikis timbunan lemak rongga perut",
              "Kurangi konsumsi tepung terigu olahan, sirup manis, dan makanan bersantan pekat",
              "Perbanyak sayuran berserat tinggi (labu siam, daun kelor, brokoli) dan beras merah"
            ]
          }
        ]
      },
      {
        "id": "lemak-subkutan",
        "name": "Lemak Subkutan & Komposisi Tubuh",
        "latinName": "Adeps Subcutaneus",
        "analogy": "Lemak subkutan adalah lapisan selimut lemak lembut tepat di bawah kulit. Lapisan ini menjaga suhu tubuh tetap hangat dan menjadi cadangan energi darurat.",
        "mainFunction": "Isolasi termal penahan suhu dingin, bantalan empuk pelindung tulang dari benturan, dan penyimpan energi jangka panjang.",
        "healthFact": "Pada usia lanjut, penipisan otot yang tertutup lapisan lemak bawah kulit (obesitas sarkopenik) sering mengecoh keluarga karena tubuh tampak gemuk padahal ototnya sangat keropos rapuh.",
        "diseases": [
          {
            "id": "obesitas-sarkopenik",
            "name": "Obesitas Sarkopenik (Penipisan Otot Tertutup Lemak)",
            "category": "Faktor Usia/Degeneratif",
            "summary": "Kombinasi berbahaya ketika massa otot tubuh telah habis menyusut, namun tertutup oleh lapisan lemak tubuh yang tebal menggelambir.",
            "symptoms": [
              "Lengan dan paha tampak besar namun sangat lembek bergelambir tanpa otot padat",
              "Lutut terasa sangat nyeri dan linu saat berdiri menahan beban tubuh (pengapuran sendi)",
              "Sangat sulit bangkit dari lantai setelah duduk bersila atau sujud",
              "Berat badan pada timbangan tampak normal atau sedikit gemuk, padahal ototnya sangat lemah"
            ],
            "causes": [
              "Pola diet salah yang memangkas makan tanpa olahraga beban (membuang otot, bukan lemak)",
              "Infiltrasi sel lemak yang menyusup masuk ke dalam serabut otot rangka (miosteatosis)",
              "Kurang gerak bertahun-tahun berpadu dengan penuaan metabolisme"
            ],
            "warningSigns": [
              "Lutut mendadak lemas terkulai hingga jatuh terbentur",
              "Nyeri sendi lutut hebat disertai bengkak panas yang melumpuhkan kemampuan berjalan",
              "Gula darah melonjak tinggi kebal obat karena tidak ada lagi otot untuk menyerap gula"
            ],
            "careTips": [
              "UTAMAKAN latihan penguatan otot (sepeda statis, jalan di kolam renang) daripada diet lapar ekstrem",
              "Pastikan asupan protein tinggi tetap tercukupi (jangan membatasi protein pada lansia)",
              "Gunakan alat bantu jalan seperti tongkat atau walker roda untuk mengamankan langkah"
            ]
          }
        ]
      }
    ]
  }
};

// 2. SVG VECTOR ARTWORKS GENERATOR
//    Menyediakan gambar anatomi realistis dan lembut untuk tiap sistem
// ============================================================================

const SVG_GENERATOR = {
  // Saluran Pernapasan SVG
  respiratory: () => `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Gradients -->
        <linearGradient id="grad-lung-l" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#bae6fd" />
          <stop offset="100%" stop-color="#38bdf8" />
        </linearGradient>
        <linearGradient id="grad-lung-r" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#0284c7" />
        </linearGradient>
        <linearGradient id="grad-trachea" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#fde047" />
        </linearGradient>
      </defs>

      <!-- Silhouette Badan Halus (Torso) -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            class="body-silhouette" />

      <!-- Diafragma Dome -->
      <path d="M 130 420 Q 220 375 310 420 Q 220 440 130 420 Z" fill="#fed7aa" opacity="0.6" stroke="#f97316" stroke-width="1.5" />

      <!-- ORGAN 1: RONGGA HIDUNG & FARING -->
      <g class="organ-interactive" id="svg-rongga-hidung" data-organ-id="rongga-hidung">
        <path d="M 220 25 C 235 25 245 35 240 45 C 235 55 228 62 226 75 C 220 75 214 75 214 65 C 214 55 205 45 220 25 Z" 
              fill="#fda4af" stroke="#e11d48" stroke-width="2" />
        <circle cx="225" cy="42" r="5" fill="#f43f5e" opacity="0.8" />
        <path d="M 220 30 Q 230 45 224 60" stroke="#be123c" stroke-width="2" stroke-linecap="round" fill="none" />
      </g>

      <!-- ORGAN 2: TENGGOROKAN / TRAKEA -->
      <g class="organ-interactive" id="svg-trakea" data-organ-id="trakea">
        <!-- Tabung Trakea -->
        <rect x="211" y="80" width="18" height="95" rx="5" fill="url(#grad-trachea)" stroke="#ca8a04" stroke-width="2" />
        <!-- Cincin Tulang Rawan Trakea -->
        <line x1="211" y1="92" x2="229" y2="92" stroke="#a16207" stroke-width="2" />
        <line x1="211" y1="104" x2="229" y2="104" stroke="#a16207" stroke-width="2" />
        <line x1="211" y1="116" x2="229" y2="116" stroke="#a16207" stroke-width="2" />
        <line x1="211" y1="128" x2="229" y2="128" stroke="#a16207" stroke-width="2" />
        <line x1="211" y1="140" x2="229" y2="140" stroke="#a16207" stroke-width="2" />
        <line x1="211" y1="152" x2="229" y2="152" stroke="#a16207" stroke-width="2" />
        <line x1="211" y1="164" x2="229" y2="164" stroke="#a16207" stroke-width="2" />
      </g>

      <!-- ORGAN 4: PARU-PARU KANAN & KIRI (Background dari Bronkus) -->
      <g class="organ-interactive" id="svg-paru-paru" data-organ-id="paru-paru">
        <!-- Paru Kanan (3 Lobus) -->
        <path d="M 205 185 C 175 190 140 215 135 270 C 130 330 140 380 195 400 C 205 402 210 395 210 380 C 210 340 210 260 205 185 Z" 
              fill="url(#grad-lung-r)" stroke="#0284c7" stroke-width="2.5" opacity="0.95" />
        <!-- Garis Fisura Lobus Paru Kanan -->
        <path d="M 140 280 Q 180 285 208 275" stroke="#0369a1" stroke-width="1.5" stroke-dasharray="3 2" fill="none" />
        <path d="M 145 345 Q 175 350 209 330" stroke="#0369a1" stroke-width="1.5" stroke-dasharray="3 2" fill="none" />

        <!-- Paru Kiri (2 Lobus dengan lekukan jantung / cardiac notch) -->
        <path d="M 235 185 C 265 190 300 215 305 270 C 310 330 300 380 245 400 C 235 402 230 395 230 380 C 228 350 220 320 227 280 C 230 260 230 220 235 185 Z" 
              fill="url(#grad-lung-l)" stroke="#0284c7" stroke-width="2.5" opacity="0.95" />
        <!-- Garis Fisura Paru Kiri -->
        <path d="M 233 260 Q 270 290 302 330" stroke="#0369a1" stroke-width="1.5" stroke-dasharray="3 2" fill="none" />

        <!-- Alveolus Inset Bubble (Zoom mini) -->
        <g transform="translate(295, 360)">
          <circle cx="25" cy="25" r="24" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
          <circle cx="20" cy="18" r="6" fill="#f43f5e" opacity="0.8" />
          <circle cx="30" cy="20" r="5.5" fill="#f43f5e" opacity="0.8" />
          <circle cx="24" cy="28" r="6" fill="#f43f5e" opacity="0.8" />
          <circle cx="16" cy="27" r="5" fill="#f43f5e" opacity="0.8" />
          <circle cx="32" cy="29" r="5" fill="#f43f5e" opacity="0.8" />
          <text x="25" y="44" font-size="7" font-weight="bold" fill="#0369a1" text-anchor="middle">Alveoli</text>
        </g>
      </g>

      <!-- ORGAN 3: BRONKUS (Percabangan Saluran Napas) -->
      <g class="organ-interactive" id="svg-bronkus" data-organ-id="bronkus">
        <!-- Bronkus Kanan -->
        <path d="M 215 175 C 205 185 190 200 175 220 M 185 205 L 165 210 M 175 220 L 160 245 M 175 220 L 180 250" 
              stroke="#eab308" stroke-width="3.5" stroke-linecap="round" fill="none" />
        <!-- Bronkus Kiri -->
        <path d="M 225 175 C 235 185 250 200 265 220 M 255 205 L 275 210 M 265 220 L 280 245 M 265 220 L 260 250" 
              stroke="#eab308" stroke-width="3.5" stroke-linecap="round" fill="none" />
      </g>

      <!-- LABEL CALLOUT PINS (Bisa On/Off via Tombol) -->
      <g class="organ-pin-group">
        <!-- Pin Rongga Hidung -->
        <line x1="240" y1="40" x2="340" y2="40" class="organ-pin-line" />
        <rect x="290" y="28" width="135" height="24" class="organ-pin-bg" />
        <text x="357" y="44" class="organ-pin-badge" text-anchor="middle">Rongga Hidung / Faring</text>

        <!-- Pin Trakea -->
        <line x1="210" y1="120" x2="80" y2="120" class="organ-pin-line" />
        <rect x="20" y="108" width="120" height="24" class="organ-pin-bg" />
        <text x="80" y="124" class="organ-pin-badge" text-anchor="middle">Trakea (Tenggorokan)</text>

        <!-- Pin Bronkus -->
        <line x1="250" y1="210" x2="350" y2="180" class="organ-pin-line" />
        <rect x="300" y="168" width="120" height="24" class="organ-pin-bg" />
        <text x="360" y="184" class="organ-pin-badge" text-anchor="middle">Cabang Bronkus</text>

        <!-- Pin Paru-paru -->
        <line x1="150" y1="320" x2="70" y2="320" class="organ-pin-line" />
        <rect x="15" y="308" width="135" height="24" class="organ-pin-bg" />
        <text x="82" y="324" class="organ-pin-badge" text-anchor="middle">Paru-paru & Alveolus</text>
      </g>
    </svg>
  `,

  // Saluran Pencernaan SVG
  digestive: () => `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-liver" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b91c1c" />
          <stop offset="100%" stop-color="#991b1b" />
        </linearGradient>
        <linearGradient id="grad-stomach" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f87171" />
          <stop offset="100%" stop-color="#ef4444" />
        </linearGradient>
      </defs>

      <!-- Silhouette Badan Halus -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            class="body-silhouette" />

      <!-- ORGAN 1: MULUT & ESOFAGUS (KERONGKONGAN) -->
      <g class="organ-interactive" id="svg-mulut-esofagus" data-organ-id="mulut-esofagus">
        <!-- Mulut -->
        <ellipse cx="220" cy="48" rx="14" ry="9" fill="#fb7185" stroke="#e11d48" stroke-width="2" />
        <!-- Pipa Esofagus -->
        <path d="M 217 56 L 217 210 Q 217 218 222 222 L 227 222 Q 223 218 223 210 L 223 56 Z" 
              fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
      </g>

      <!-- ORGAN 3: HATI & KANTUNG EMPEDU (HEPAR & GALLBLADDER) -->
      <g class="organ-interactive" id="svg-hati-empedu" data-organ-id="hati-empedu">
        <!-- Hati (Wedge Shape Besar Kanan Atas) -->
        <path d="M 160 210 C 200 205 240 215 245 230 C 248 245 220 270 190 275 C 160 280 145 255 150 230 Z" 
              fill="url(#grad-liver)" stroke="#7f1d1d" stroke-width="2" />
        <!-- Kantung Empedu (Hijau Muda di bawah tepi hati) -->
        <path d="M 200 265 C 205 265 212 272 210 280 C 208 285 200 287 197 282 Z" 
              fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
        <!-- Kateter Selang Drainase Hati / PTBD (Keluar dari hepar ke kantong penampung) -->
        <g id="svg-liver-drain-tube" opacity="0.95">
          <path d="M 185 245 C 165 250 130 255 110 280 L 95 330" 
                fill="none" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="3 1.5" />
          <circle cx="185" cy="245" r="3" fill="#0369a1" />
          <!-- Kantung Drainase Cairan Empedu / Abses (Bile Drainage Bag) -->
          <rect x="80" y="330" width="30" height="42" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
          <rect x="82" y="348" width="26" height="22" rx="2" fill="#eab308" opacity="0.8" />
          <line x1="88" y1="354" x2="102" y2="354" stroke="#a16207" stroke-width="1" />
          <line x1="88" y1="360" x2="102" y2="360" stroke="#a16207" stroke-width="1" />
          <text x="95" y="342" font-size="6" font-weight="bold" fill="#713f12" text-anchor="middle">DRAIN</text>
        </g>
      </g>

      <!-- ORGAN 4: PANKREAS (Di belakang lambung) -->
      <g class="organ-interactive" id="svg-pankreas" data-organ-id="pankreas">
        <!-- Pankreas (Bentuk Bulir Kuning Memanjang) -->
        <path d="M 205 265 C 220 260 255 265 265 272 C 260 280 230 282 210 278 Z" 
              fill="#facc15" stroke="#ca8a04" stroke-width="2" />
      </g>

      <!-- ORGAN 2: LAMBUNG (GASTER) -->
      <g class="organ-interactive" id="svg-lambung" data-organ-id="lambung">
        <!-- Lambung Bentuk Huruf J -->
        <path d="M 223 218 C 240 215 270 230 268 265 C 265 295 225 305 200 295 C 195 290 195 282 205 280 C 220 285 245 280 248 258 C 250 240 230 230 220 225 Z" 
              fill="url(#grad-stomach)" stroke="#b91c1c" stroke-width="2.5" />
      </g>

      <!-- ORGAN 6: USUS BESAR (KOLON - BINGKAI LUAR) -->
      <g class="organ-interactive" id="svg-usus-besar" data-organ-id="usus-besar">
        <!-- Kolon Asenden (Kanan), Transversum (Atas), Desenden (Kiri), Rektum (Bawah) -->
        <path d="M 160 380 L 160 320 C 160 305 180 305 220 305 C 260 305 280 305 280 320 L 280 395 C 280 415 260 415 250 425 L 225 425 L 225 455 L 215 455 L 215 425 L 205 425 C 190 415 160 415 160 380 Z" 
              fill="#fed7aa" stroke="#ea580c" stroke-width="12" stroke-linejoin="round" opacity="0.65" />
        <!-- Garis Ruas Kolon (Haustra) -->
        <path d="M 160 380 L 160 320 C 160 305 180 305 220 305 C 260 305 280 305 280 320 L 280 395 C 280 415 260 415 250 425 L 225 425 L 225 455" 
              fill="none" stroke="#c2410c" stroke-width="2" stroke-linecap="round" />
      </g>

      <!-- ORGAN 7: USUS BUNTU (APENDIKS) -->
      <g class="organ-interactive" id="svg-apendiks" data-organ-id="apendiks">
        <!-- Usus Buntu Menjuntai di sudut kanan bawah kolon asenden -->
        <path d="M 158 395 C 152 405 145 410 148 418 C 151 422 156 418 156 410" 
              fill="none" stroke="#dc2626" stroke-width="4.5" stroke-linecap="round" />
        <circle cx="150" cy="416" r="3" fill="#ef4444" />
      </g>

      <!-- ORGAN 5: USUS HALUS (INTESTINUM TENUE - DI DALAM BINGKAI KOLON) -->
      <g class="organ-interactive" id="svg-usus-halus" data-organ-id="usus-halus">
        <!-- Gulungan Usus Halus -->
        <path d="M 185 335 Q 215 325 245 335 Q 255 350 230 355 Q 195 350 185 365 Q 215 375 250 368 Q 255 385 225 390 Q 195 385 185 400 Q 215 405 235 400" 
              fill="none" stroke="#fb923c" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- LABEL CALLOUT PINS -->
      <g class="organ-pin-group">
        <!-- Pin Mulut & Esofagus -->
        <line x1="220" y1="120" x2="80" y2="120" class="organ-pin-line" />
        <rect x="15" y="108" width="135" height="24" class="organ-pin-bg" />
        <text x="82" y="124" class="organ-pin-badge" text-anchor="middle">Mulut & Kerongkongan</text>

        <!-- Pin Hati & Empedu -->
        <line x1="170" y1="230" x2="70" y2="210" class="organ-pin-line" />
        <rect x="15" y="198" width="135" height="24" class="organ-pin-bg" />
        <text x="82" y="214" class="organ-pin-badge" text-anchor="middle">Hati & Kantung Empedu</text>

        <!-- Pin Selang Drainase Hati -->
        <line x1="95" y1="330" x2="45" y2="330" class="organ-pin-line" />
        <rect x="5" y="318" width="70" height="24" class="organ-pin-bg" />
        <text x="40" y="334" class="organ-pin-badge font-bold" fill="#0369a1" text-anchor="middle">Selang PTBD</text>

        <!-- Pin Lambung -->
        <line x1="260" y1="240" x2="350" y2="220" class="organ-pin-line" />
        <rect x="300" y="208" width="120" height="24" class="organ-pin-bg" />
        <text x="360" y="224" class="organ-pin-badge" text-anchor="middle">Lambung (Gaster)</text>

        <!-- Pin Pankreas -->
        <line x1="250" y1="275" x2="350" y2="275" class="organ-pin-line" />
        <rect x="310" y="263" width="110" height="24" class="organ-pin-bg" />
        <text x="365" y="279" class="organ-pin-badge" text-anchor="middle">Pankreas</text>

        <!-- Pin Usus Besar -->
        <line x1="280" y1="360" x2="355" y2="360" class="organ-pin-line" />
        <rect x="310" y="348" width="115" height="24" class="organ-pin-bg" />
        <text x="367" y="364" class="organ-pin-badge" text-anchor="middle">Usus Besar (Kolon)</text>

        <!-- Pin Usus Halus -->
        <line x1="220" y1="370" x2="220" y2="475" class="organ-pin-line" />
        <rect x="165" y="465" width="110" height="24" class="organ-pin-bg" />
        <text x="220" y="481" class="organ-pin-badge" text-anchor="middle">Usus Halus</text>

        <!-- Pin Usus Buntu -->
        <line x1="150" y1="415" x2="70" y2="440" class="organ-pin-line" />
        <rect x="15" y="428" width="135" height="24" class="organ-pin-bg" />
        <text x="82" y="444" class="organ-pin-badge" text-anchor="middle">Usus Buntu (Apendiks)</text>
      </g>
    </svg>
  `,

  // Saluran Reproduksi & Urologi (Pria) SVG
  urologyMale: () => `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-kidney" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b91c1c" />
          <stop offset="100%" stop-color="#7f1d1d" />
        </linearGradient>
      </defs>

      <!-- Silhouette Panggul & Badan -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            class="body-silhouette" />

      <!-- ORGAN 1: GINJAL & URETER (PRIA) -->
      <g class="organ-interactive" id="svg-ginjal-ureter-pria" data-organ-id="ginjal-ureter-pria">
        <!-- Ginjal Kanan -->
        <path d="M 160 230 C 145 240 145 270 160 280 C 175 290 185 275 180 255 C 178 240 170 230 160 230 Z" 
              fill="url(#grad-kidney)" stroke="#450a0a" stroke-width="2" />
        <!-- Ginjal Kiri (Sedikit lebih tinggi dari kanan) -->
        <path d="M 280 220 C 295 230 295 260 280 270 C 265 280 255 265 260 245 C 262 230 270 220 280 220 Z" 
              fill="url(#grad-kidney)" stroke="#450a0a" stroke-width="2" />
        
        <!-- Saluran Ureter Kanan & Kiri -->
        <path d="M 175 265 C 185 300 190 330 205 365" stroke="#f59e0b" stroke-width="2.5" fill="none" />
        <path d="M 265 255 C 255 295 250 330 235 365" stroke="#f59e0b" stroke-width="2.5" fill="none" />
      </g>

      <!-- ORGAN 2: KANDUNG KEMIH (PRIA) -->
      <g class="organ-interactive" id="svg-kandung-kemih-pria" data-organ-id="kandung-kemih-pria">
        <!-- Kandung Kemih Oval -->
        <path d="M 195 365 C 195 345 245 345 245 365 C 245 390 228 400 220 400 C 212 400 195 390 195 365 Z" 
              fill="#fef08a" stroke="#ca8a04" stroke-width="2.5" />
      </g>

      <!-- ORGAN 3: PROSTAT (Tepat di bawah leher kandung kemih) -->
      <g class="organ-interactive" id="svg-prostat" data-organ-id="prostat">
        <!-- Kelenjar Prostat Cincin Buah Kenari -->
        <ellipse cx="220" cy="410" rx="16" ry="11" fill="#c084fc" stroke="#7e22ce" stroke-width="2.5" />
        <line x1="220" y1="400" x2="220" y2="420" stroke="#581c87" stroke-width="2" />
      </g>

      <!-- ORGAN 4: SALURAN URETRA (PRIA) -->
      <g class="organ-interactive" id="svg-uretra-pria" data-organ-id="uretra-pria">
        <!-- Uretra memanjang ke bawah -->
        <path d="M 220 420 L 220 475" stroke="#3b82f6" stroke-width="4.5" stroke-linecap="round" fill="none" />
      </g>

      <!-- ORGAN 5: TESTIS & SKROTUM -->
      <g class="organ-interactive" id="svg-testis" data-organ-id="testis">
        <!-- Kantung Skrotum -->
        <path d="M 200 465 C 190 490 210 505 220 505 C 230 505 250 490 240 465 Z" 
              fill="#fed7aa" stroke="#ea580c" stroke-width="1.5" opacity="0.8" />
        <!-- Testis Kanan & Kiri -->
        <ellipse cx="212" cy="485" rx="7" ry="9" fill="#f472b6" stroke="#db2777" stroke-width="1.8" />
        <ellipse cx="228" cy="485" rx="7" ry="9" fill="#f472b6" stroke="#db2777" stroke-width="1.8" />
      </g>

      <!-- LABEL CALLOUT PINS -->
      <g class="organ-pin-group">
        <!-- Pin Ginjal -->
        <line x1="150" y1="255" x2="60" y2="255" class="organ-pin-line" />
        <rect x="15" y="243" width="130" height="24" class="organ-pin-bg" />
        <text x="80" y="259" class="organ-pin-badge" text-anchor="middle">Ginjal & Ureter</text>

        <!-- Pin Kandung Kemih -->
        <line x1="245" y1="365" x2="330" y2="350" class="organ-pin-line" />
        <rect x="290" y="338" width="135" height="24" class="organ-pin-bg" />
        <text x="357" y="354" class="organ-pin-badge" text-anchor="middle">Kandung Kemih Pria</text>

        <!-- Pin Prostat -->
        <line x1="236" y1="410" x2="330" y2="410" class="organ-pin-line" />
        <rect x="290" y="398" width="135" height="24" class="organ-pin-bg" />
        <text x="357" y="414" class="organ-pin-badge font-bold" fill="#7e22ce" text-anchor="middle">Kelenjar Prostat</text>

        <!-- Pin Uretra -->
        <line x1="220" y1="445" x2="100" y2="445" class="organ-pin-line" />
        <rect x="20" y="433" width="130" height="24" class="organ-pin-bg" />
        <text x="85" y="449" class="organ-pin-badge" text-anchor="middle">Saluran Uretra</text>

        <!-- Pin Testis -->
        <line x1="240" y1="485" x2="330" y2="485" class="organ-pin-line" />
        <rect x="295" y="473" width="130" height="24" class="organ-pin-bg" />
        <text x="360" y="489" class="organ-pin-badge" text-anchor="middle">Testis & Skrotum</text>
      </g>
    </svg>
  `,

  // Saluran Reproduksi & Urologi (Wanita) SVG
  urologyFemale: () => `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-uterus" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f472b6" />
          <stop offset="100%" stop-color="#e11d48" />
        </linearGradient>
      </defs>

      <!-- Silhouette Badan & Panggul Wanita -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            class="body-silhouette" />

      <!-- ORGAN 1: GINJAL & URETER (WANITA) -->
      <g class="organ-interactive" id="svg-ginjal-ureter-wanita" data-organ-id="ginjal-ureter-wanita">
        <path d="M 160 230 C 145 240 145 270 160 280 C 175 290 185 275 180 255 C 178 240 170 230 160 230 Z" 
              fill="#b91c1c" stroke="#450a0a" stroke-width="2" />
        <path d="M 280 220 C 295 230 295 260 280 270 C 265 280 255 265 260 245 C 262 230 270 220 280 220 Z" 
              fill="#b91c1c" stroke="#450a0a" stroke-width="2" />
        <path d="M 175 265 C 185 300 190 330 205 355" stroke="#f59e0b" stroke-width="2.5" fill="none" />
        <path d="M 265 255 C 255 295 250 330 235 355" stroke="#f59e0b" stroke-width="2.5" fill="none" />
      </g>

      <!-- ORGAN 2: KANDUNG KEMIH & URETRA (WANITA) -->
      <g class="organ-interactive" id="svg-kandung-kemih-wanita" data-organ-id="kandung-kemih-wanita">
        <!-- Kandung Kemih (Di depan/bawah rahim) -->
        <path d="M 198 355 C 198 335 242 335 242 355 C 242 375 226 385 220 385 C 214 385 198 375 198 355 Z" 
              fill="#fef08a" stroke="#ca8a04" stroke-width="2" opacity="0.85" />
        <!-- Uretra pendek wanita (hanya 4 cm) -->
        <line x1="220" y1="385" x2="220" y2="400" stroke="#3b82f6" stroke-width="4.5" stroke-linecap="round" />
      </g>

      <!-- ORGAN 5: OVARIUM & TUBA FALOPI (WANITA) -->
      <g class="organ-interactive" id="svg-ovarium" data-organ-id="ovarium">
        <!-- Tuba Falopi Kanan & Kiri -->
        <path d="M 200 415 Q 165 410 155 425" stroke="#db2777" stroke-width="3" fill="none" />
        <path d="M 240 415 Q 275 410 285 425" stroke="#db2777" stroke-width="3" fill="none" />
        <!-- Ovarium Kanan & Kiri (Bentuk Oval Kacang Almond) -->
        <ellipse cx="150" cy="428" rx="9" ry="6" fill="#fbcfe8" stroke="#be185d" stroke-width="2" />
        <ellipse cx="290" cy="428" rx="9" ry="6" fill="#fbcfe8" stroke="#be185d" stroke-width="2" />
      </g>

      <!-- ORGAN 3: RAHIM (UTERUS) -->
      <g class="organ-interactive" id="svg-rahim" data-organ-id="rahim">
        <!-- Rahim Bentuk Pir Terbalik -->
        <path d="M 195 410 C 195 395 245 395 245 410 C 245 435 230 450 220 455 C 210 450 195 435 195 410 Z" 
              fill="url(#grad-uterus)" stroke="#9f1239" stroke-width="2.5" />
      </g>

      <!-- ORGAN 4: SERVIKS (LEHER RAHIM) -->
      <g class="organ-interactive" id="svg-serviks" data-organ-id="serviks">
        <!-- Leher Rahim di bagian bawah rahim -->
        <rect x="212" y="455" width="16" height="15" rx="3" fill="#fda4af" stroke="#be123c" stroke-width="2" />
        <!-- Saluran Vagina -->
        <path d="M 212 470 L 212 495 L 228 495 L 228 470" fill="#fed7aa" stroke="#e11d48" stroke-width="1.8" />
      </g>

      <!-- LABEL CALLOUT PINS -->
      <g class="organ-pin-group">
        <!-- Pin Ginjal -->
        <line x1="150" y1="255" x2="60" y2="255" class="organ-pin-line" />
        <rect x="15" y="243" width="130" height="24" class="organ-pin-bg" />
        <text x="80" y="259" class="organ-pin-badge" text-anchor="middle">Ginjal & Saluran Kemih</text>

        <!-- Pin Kandung Kemih -->
        <line x1="242" y1="355" x2="330" y2="340" class="organ-pin-line" />
        <rect x="290" y="328" width="135" height="24" class="organ-pin-bg" />
        <text x="357" y="344" class="organ-pin-badge" text-anchor="middle">Kandung Kemih</text>

        <!-- Pin Ovarium -->
        <line x1="145" y1="428" x2="60" y2="428" class="organ-pin-line" />
        <rect x="15" y="416" width="130" height="24" class="organ-pin-bg" />
        <text x="80" y="432" class="organ-pin-badge" text-anchor="middle">Ovarium & Tuba</text>

        <!-- Pin Rahim -->
        <line x1="245" y1="425" x2="330" y2="425" class="organ-pin-line" />
        <rect x="290" y="413" width="135" height="24" class="organ-pin-bg" />
        <text x="357" y="429" class="organ-pin-badge font-bold" fill="#be123c" text-anchor="middle">Rahim (Uterus)</text>

        <!-- Pin Serviks -->
        <line x1="228" y1="462" x2="330" y2="475" class="organ-pin-line" />
        <rect x="290" y="463" width="135" height="24" class="organ-pin-bg" />
        <text x="357" y="479" class="organ-pin-badge" text-anchor="middle">Serviks & Vagina</text>
      </g>
    </svg>
  `,

  // Sistem Saraf SVG
  nervous: () => `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-cerebrum" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#a5b4fc" />
          <stop offset="100%" stop-color="#6366f1" />
        </linearGradient>
        <linearGradient id="grad-cerebellum" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#0284c7" />
        </linearGradient>
        <linearGradient id="grad-brainstem" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fde047" />
          <stop offset="100%" stop-color="#f59e0b" />
        </linearGradient>
        <linearGradient id="grad-spinal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#34d399" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
      </defs>

      <!-- Silhouette Torso & Head -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            class="body-silhouette" />

      <!-- ORGAN 5: SARAF TEPI / PERIFER -->
      <g class="organ-interactive" id="svg-saraf-tepi" data-organ-id="saraf-tepi">
        <!-- Pleksus Brakialis ke Lengan Kiri & Kanan -->
        <path d="M 215 150 C 180 160 145 190 120 250 M 120 250 L 105 320 M 105 320 L 95 380" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.85" />
        <path d="M 225 150 C 260 160 295 190 320 250 M 320 250 L 335 320 M 335 320 L 345 380" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.85" />
        <!-- Cabang Torakal / Interkostal -->
        <path d="M 216 200 Q 170 215 140 230 M 224 200 Q 270 215 300 230" stroke="#22d3ee" stroke-width="1.8" stroke-dasharray="3 2" fill="none" opacity="0.8" />
        <path d="M 216 240 Q 170 255 145 270 M 224 240 Q 270 255 295 270" stroke="#22d3ee" stroke-width="1.8" stroke-dasharray="3 2" fill="none" opacity="0.8" />
        <path d="M 216 280 Q 170 295 150 310 M 224 280 Q 270 295 290 310" stroke="#22d3ee" stroke-width="1.8" stroke-dasharray="3 2" fill="none" opacity="0.8" />
        <!-- Pleksus Lumbosakral & Saraf Iskiadikus ke Kaki -->
        <path d="M 216 350 C 195 380 175 430 165 520 M 165 430 L 150 520" stroke="#0891b2" stroke-width="2.8" stroke-linecap="round" fill="none" opacity="0.9" />
        <path d="M 224 350 C 245 380 265 430 275 520 M 275 430 L 290 520" stroke="#0891b2" stroke-width="2.8" stroke-linecap="round" fill="none" opacity="0.9" />
        <!-- Node Sinapsis Ujung Ekstremitas -->
        <circle cx="95" cy="380" r="4.5" fill="#06b6d4" />
        <circle cx="345" cy="380" r="4.5" fill="#06b6d4" />
        <circle cx="165" cy="520" r="5" fill="#0891b2" />
        <circle cx="275" cy="520" r="5" fill="#0891b2" />
      </g>

      <!-- ORGAN 4: MEDULA SPINALIS (Sumsum Tulang Belakang) -->
      <g class="organ-interactive" id="svg-medula-spinalis" data-organ-id="medula-spinalis">
        <!-- Kolom Sumsum Tulang Belakang -->
        <rect x="214" y="115" width="12" height="240" rx="5" fill="url(#grad-spinal)" stroke="#047857" stroke-width="2" />
        <!-- Segmen Radiks Saraf Spinalis -->
        <line x1="210" y1="135" x2="230" y2="135" stroke="#065f46" stroke-width="1.5" />
        <line x1="210" y1="160" x2="230" y2="160" stroke="#065f46" stroke-width="1.5" />
        <line x1="210" y1="185" x2="230" y2="185" stroke="#065f46" stroke-width="1.5" />
        <line x1="210" y1="210" x2="230" y2="210" stroke="#065f46" stroke-width="1.5" />
        <line x1="210" y1="235" x2="230" y2="235" stroke="#065f46" stroke-width="1.5" />
        <line x1="210" y1="260" x2="230" y2="260" stroke="#065f46" stroke-width="1.5" />
        <line x1="210" y1="285" x2="230" y2="285" stroke="#065f46" stroke-width="1.5" />
        <line x1="210" y1="310" x2="230" y2="310" stroke="#065f46" stroke-width="1.5" />
        <line x1="210" y1="335" x2="230" y2="335" stroke="#065f46" stroke-width="1.5" />
        <path d="M 220 355 L 217 385 M 220 355 L 223 385 M 220 355 L 220 390" stroke="#059669" stroke-width="2" stroke-linecap="round" />
      </g>

      <!-- ORGAN 3: BATANG OTAK (Brainstem) -->
      <g class="organ-interactive" id="svg-batang-otak" data-organ-id="batang-otak">
        <path d="M 214 75 Q 212 95 215 115 L 225 115 Q 228 95 226 75 Z" fill="url(#grad-brainstem)" stroke="#d97706" stroke-width="2" />
        <ellipse cx="220" cy="90" rx="9" ry="7" fill="#fbbf24" stroke="#b45309" stroke-width="1.5" />
        <path d="M 216 97 Q 220 100 224 97 L 223 115 L 217 115 Z" fill="#f59e0b" stroke="#b45309" stroke-width="1" />
      </g>

      <!-- ORGAN 2: OTAK KECIL (Cerebellum) -->
      <g class="organ-interactive" id="svg-otak-kecil" data-organ-id="otak-kecil">
        <ellipse cx="203" cy="80" rx="14" ry="12" fill="url(#grad-cerebellum)" stroke="#0369a1" stroke-width="2" />
        <ellipse cx="237" cy="80" rx="14" ry="12" fill="url(#grad-cerebellum)" stroke="#0369a1" stroke-width="2" />
        <path d="M 193 76 Q 203 72 213 76 M 194 82 Q 203 78 212 82 M 196 88 Q 203 84 210 88" stroke="#0284c7" stroke-width="1.2" fill="none" />
        <path d="M 227 76 Q 237 72 247 76 M 228 82 Q 237 78 246 82 M 230 88 Q 237 84 244 88" stroke="#0284c7" stroke-width="1.2" fill="none" />
      </g>

      <!-- ORGAN 1: OTAK BESAR (Cerebrum) -->
      <g class="organ-interactive" id="svg-otak-besar" data-organ-id="otak-besar">
        <path d="M 220 18 C 190 18 175 32 175 50 C 175 68 185 78 200 80 C 205 80 210 75 220 75 C 230 75 235 80 240 80 C 255 78 265 68 265 50 C 265 32 250 18 220 18 Z" 
              fill="url(#grad-cerebrum)" stroke="#4338ca" stroke-width="2.5" />
        <line x1="220" y1="20" x2="220" y2="74" stroke="#312e81" stroke-width="2" stroke-linecap="round" />
        <path d="M 190 28 Q 205 32 195 44 Q 210 46 200 58 Q 215 62 208 72" stroke="#4338ca" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <path d="M 250 28 Q 235 32 245 44 Q 230 46 240 58 Q 225 62 232 72" stroke="#4338ca" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <path d="M 180 45 Q 192 48 185 58" stroke="#4338ca" stroke-width="1.6" stroke-linecap="round" fill="none" />
        <path d="M 260 45 Q 248 48 255 58" stroke="#4338ca" stroke-width="1.6" stroke-linecap="round" fill="none" />
      </g>

      <!-- PINS CALLOUT -->
      <g class="organ-pin-group">
        <g class="pin-item" data-target="otak-besar">
          <line x1="175" y1="40" x2="90" y2="30" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="2 2" />
          <circle cx="90" cy="30" r="3" fill="#6366f1" />
          <rect x="15" y="18" width="72" height="22" rx="6" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.2" />
          <text x="51" y="32" font-size="9" font-weight="bold" fill="#3730a3" text-anchor="middle">Otak Besar</text>
        </g>
        <g class="pin-item" data-target="otak-kecil">
          <line x1="250" y1="80" x2="340" y2="70" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2 2" />
          <circle cx="340" cy="70" r="3" fill="#0284c7" />
          <rect x="340" y="58" width="70" height="22" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2" />
          <text x="375" y="72" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">Otak Kecil</text>
        </g>
        <g class="pin-item" data-target="batang-otak">
          <line x1="214" y1="95" x2="110" y2="105" stroke="#d97706" stroke-width="1.5" stroke-dasharray="2 2" />
          <circle cx="110" cy="105" r="3" fill="#d97706" />
          <rect x="35" y="93" width="72" height="22" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.2" />
          <text x="71" y="107" font-size="9" font-weight="bold" fill="#92400e" text-anchor="middle">Batang Otak</text>
        </g>
        <g class="pin-item" data-target="medula-spinalis">
          <line x1="226" y1="210" x2="325" y2="210" stroke="#059669" stroke-width="1.5" stroke-dasharray="2 2" />
          <circle cx="325" cy="210" r="3" fill="#059669" />
          <rect x="325" y="198" width="85" height="22" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="1.2" />
          <text x="367" y="212" font-size="9" font-weight="bold" fill="#065f46" text-anchor="middle">Medula Spinalis</text>
        </g>
        <g class="pin-item" data-target="saraf-tepi">
          <line x1="165" y1="460" x2="80" y2="470" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="2 2" />
          <circle cx="80" cy="470" r="3" fill="#0891b2" />
          <rect x="25" y="458" width="70" height="22" rx="6" fill="#cffafe" stroke="#0891b2" stroke-width="1.2" />
          <text x="60" y="472" font-size="9" font-weight="bold" fill="#155e75" text-anchor="middle">Saraf Tepi</text>
        </g>
      </g>
    </svg>
  `,

  // Sistem Otot & Jaringan Lemak SVG
  muscularFat: () => `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-muscle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fb7185" />
          <stop offset="100%" stop-color="#e11d48" />
        </linearGradient>
        <linearGradient id="grad-visceral-fat" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047" />
          <stop offset="100%" stop-color="#eab308" />
        </linearGradient>
        <linearGradient id="grad-subcut-fat" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#facc15" />
        </linearGradient>
      </defs>

      <!-- Silhouette Torso & Legs -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            class="body-silhouette" />

      <!-- ORGAN 3: LEMAK SUBKUTAN -->
      <g class="organ-interactive" id="svg-lemak-subkutan" data-organ-id="lemak-subkutan">
        <path d="M 125 240 C 110 270 105 320 122 360 C 135 350 138 290 135 250 Z" 
              fill="url(#grad-subcut-fat)" stroke="#ca8a04" stroke-width="1.8" opacity="0.8" />
        <path d="M 315 240 C 330 270 335 320 318 360 C 305 350 302 290 305 250 Z" 
              fill="url(#grad-subcut-fat)" stroke="#ca8a04" stroke-width="1.8" opacity="0.8" />
        <path d="M 130 380 C 120 420 120 460 135 500 C 142 470 142 420 140 390 Z" 
              fill="url(#grad-subcut-fat)" stroke="#ca8a04" stroke-width="1.5" opacity="0.75" />
        <path d="M 310 380 C 320 420 320 460 305 500 C 298 470 298 420 300 390 Z" 
              fill="url(#grad-subcut-fat)" stroke="#ca8a04" stroke-width="1.5" opacity="0.75" />
      </g>

      <!-- ORGAN 1: OTOT RANGKA UTAMA -->
      <g class="organ-interactive" id="svg-otot-rangka" data-organ-id="otot-rangka">
        <path d="M 215 150 C 185 150 155 165 145 190 C 145 210 175 220 215 210 Z" 
              fill="url(#grad-muscle)" stroke="#be123c" stroke-width="2" />
        <path d="M 225 150 C 255 150 285 165 295 190 C 295 210 265 220 225 210 Z" 
              fill="url(#grad-muscle)" stroke="#be123c" stroke-width="2" />
        <path d="M 145 155 C 130 165 120 185 120 210 C 128 220 140 215 145 190 Z" 
              fill="url(#grad-muscle)" stroke="#9f1239" stroke-width="1.5" />
        <path d="M 295 155 C 310 165 320 185 320 210 C 312 220 300 215 295 190 Z" 
              fill="url(#grad-muscle)" stroke="#9f1239" stroke-width="1.5" />
        <ellipse cx="118" cy="250" rx="10" ry="25" fill="url(#grad-muscle)" stroke="#9f1239" stroke-width="1.8" />
        <ellipse cx="322" cy="250" rx="10" ry="25" fill="url(#grad-muscle)" stroke="#9f1239" stroke-width="1.8" />
        <path d="M 160 380 C 150 410 145 450 160 480 C 175 480 185 440 185 390 Z" 
              fill="url(#grad-muscle)" stroke="#be123c" stroke-width="2" />
        <path d="M 280 380 C 290 410 295 450 280 480 C 265 480 255 440 255 390 Z" 
              fill="url(#grad-muscle)" stroke="#be123c" stroke-width="2" />
        <path d="M 160 485 C 150 495 148 515 155 530 C 165 530 172 515 170 488 Z" 
              fill="url(#grad-muscle)" stroke="#9f1239" stroke-width="1.5" />
        <path d="M 280 485 C 290 495 292 515 285 530 C 275 530 268 515 270 488 Z" 
              fill="url(#grad-muscle)" stroke="#9f1239" stroke-width="1.5" />
        <line x1="165" y1="175" x2="200" y2="195" stroke="#ffe4e6" stroke-width="1.2" opacity="0.6" />
        <line x1="275" y1="175" x2="240" y2="195" stroke="#ffe4e6" stroke-width="1.2" opacity="0.6" />
        <line x1="165" y1="410" x2="170" y2="455" stroke="#ffe4e6" stroke-width="1.2" opacity="0.6" />
        <line x1="275" y1="410" x2="270" y2="455" stroke="#ffe4e6" stroke-width="1.2" opacity="0.6" />
      </g>

      <!-- ORGAN 2: LEMAK VISERAL (Rongga Perut Dalam) -->
      <g class="organ-interactive" id="svg-lemak-viseral" data-organ-id="lemak-viseral">
        <path d="M 175 240 C 150 255 145 305 170 340 C 200 355 240 355 270 340 C 295 305 290 255 265 240 C 240 230 200 230 175 240 Z" 
              fill="url(#grad-visceral-fat)" stroke="#ca8a04" stroke-width="2.2" opacity="0.9" />
        <circle cx="190" cy="265" r="9" fill="#facc15" stroke="#a16207" stroke-width="1.2" />
        <circle cx="210" cy="258" r="10" fill="#facc15" stroke="#a16207" stroke-width="1.2" />
        <circle cx="232" cy="262" r="9.5" fill="#facc15" stroke="#a16207" stroke-width="1.2" />
        <circle cx="250" cy="272" r="8.5" fill="#facc15" stroke="#a16207" stroke-width="1.2" />
        <circle cx="180" cy="285" r="9" fill="#facc15" stroke="#a16207" stroke-width="1.2" />
        <circle cx="202" cy="285" r="11" fill="#fde047" stroke="#a16207" stroke-width="1.4" />
        <circle cx="225" cy="288" r="11" fill="#fde047" stroke="#a16207" stroke-width="1.4" />
        <circle cx="248" cy="292" r="9" fill="#facc15" stroke="#a16207" stroke-width="1.2" />
        <circle cx="195" cy="312" r="9.5" fill="#facc15" stroke="#a16207" stroke-width="1.2" />
        <circle cx="218" cy="315" r="10.5" fill="#fde047" stroke="#a16207" stroke-width="1.4" />
        <circle cx="240" cy="315" r="9.5" fill="#facc15" stroke="#a16207" stroke-width="1.2" />
        <text x="220" y="340" font-size="7.5" font-weight="900" fill="#854d0e" text-anchor="middle">LEMAK RONGGA PERUT</text>
      </g>

      <!-- PINS CALLOUT -->
      <g class="organ-pin-group">
        <g class="pin-item" data-target="otot-rangka">
          <line x1="145" y1="180" x2="65" y2="160" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="2 2" />
          <circle cx="65" cy="160" r="3" fill="#e11d48" />
          <rect x="10" y="148" width="75" height="22" rx="6" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.2" />
          <text x="47" y="162" font-size="9" font-weight="bold" fill="#9f1239" text-anchor="middle">Otot Rangka</text>
        </g>
        <g class="pin-item" data-target="lemak-viseral">
          <line x1="270" y1="285" x2="345" y2="285" stroke="#ca8a04" stroke-width="1.5" stroke-dasharray="2 2" />
          <circle cx="345" cy="285" r="3" fill="#ca8a04" />
          <rect x="335" y="273" width="90" height="22" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.2" />
          <text x="380" y="287" font-size="9" font-weight="bold" fill="#854d0e" text-anchor="middle">Lemak Viseral</text>
        </g>
        <g class="pin-item" data-target="lemak-subkutan">
          <line x1="115" y1="310" x2="45" y2="330" stroke="#eab308" stroke-width="1.5" stroke-dasharray="2 2" />
          <circle cx="45" cy="330" r="3" fill="#eab308" />
          <rect x="5" y="318" width="90" height="22" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="1.2" />
          <text x="50" y="332" font-size="9" font-weight="bold" fill="#713f12" text-anchor="middle">Lemak Subkutan</text>
        </g>
      </g>
    </svg>
  `,


  // 1. Rangka (Kerangka) SVG
  skeletal: () => `<svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-bone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f8fafc" />
          <stop offset="100%" stop-color="#cbd5e1" />
        </linearGradient>
        <linearGradient id="grad-joint" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e2e8f0" />
          <stop offset="100%" stop-color="#94a3b8" />
        </linearGradient>
      </defs>

      <!-- Silhouette Badan Lembut -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            class="body-silhouette" />

      <!-- Kranium / Tengkorak Kepala (Non-interaktif pelindung otak) -->
      <g opacity="0.85">
        <ellipse cx="220" cy="50" rx="32" ry="38" fill="url(#grad-bone)" stroke="#64748b" stroke-width="2" />
        <path d="M 205 75 Q 220 85 235 75" fill="none" stroke="#64748b" stroke-width="2" />
        <!-- Mandibula (Rahang) -->
        <path d="M 200 70 L 204 88 Q 220 96 236 88 L 240 70 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5" />
      </g>

      <!-- ORGAN 1: TULANG LEHER (VERTEBRA SERVIKAL C1-C7) -->
      <g class="organ-interactive" id="svg-tulang-leher" data-organ-id="tulang-leher">
        <rect x="212" y="94" width="16" height="34" rx="4" fill="#38bdf8" opacity="0.3" stroke="#0284c7" stroke-width="2" stroke-dasharray="3 2" />
        <!-- 7 Ruas Servikal -->
        <rect x="213" y="96" width="14" height="4" rx="1.5" fill="#f1f5f9" stroke="#475569" stroke-width="1.2" />
        <rect x="213" y="101" width="14" height="4" rx="1.5" fill="#f1f5f9" stroke="#475569" stroke-width="1.2" />
        <rect x="213" y="106" width="14" height="4" rx="1.5" fill="#f1f5f9" stroke="#475569" stroke-width="1.2" />
        <rect x="213" y="111" width="14" height="4" rx="1.5" fill="#f1f5f9" stroke="#475569" stroke-width="1.2" />
        <rect x="213" y="116" width="14" height="4" rx="1.5" fill="#f1f5f9" stroke="#475569" stroke-width="1.2" />
        <rect x="213" y="121" width="14" height="4" rx="1.5" fill="#f1f5f9" stroke="#475569" stroke-width="1.2" />
      </g>

      <!-- ORGAN 2: TULANG PUNGGUNG & TULANG RUSUK (TORAKALIS & LUMBALIS) -->
      <g class="organ-interactive" id="svg-tulang-punggung" data-organ-id="tulang-punggung">
        <!-- Kolumna Vertebralis Tengah -->
        <rect x="211" y="132" width="18" height="155" rx="5" fill="#e2e8f0" stroke="#475569" stroke-width="1.8" />
        <!-- Garis Ruas Tulang Belakang -->
        <line x1="211" y1="145" x2="229" y2="145" stroke="#64748b" stroke-width="1.5" />
        <line x1="211" y1="160" x2="229" y2="160" stroke="#64748b" stroke-width="1.5" />
        <line x1="211" y1="175" x2="229" y2="175" stroke="#64748b" stroke-width="1.5" />
        <line x1="211" y1="190" x2="229" y2="190" stroke="#64748b" stroke-width="1.5" />
        <line x1="211" y1="205" x2="229" y2="205" stroke="#64748b" stroke-width="1.5" />
        <line x1="211" y1="220" x2="229" y2="220" stroke="#64748b" stroke-width="1.5" />
        <line x1="211" y1="235" x2="229" y2="235" stroke="#64748b" stroke-width="1.5" />
        <line x1="211" y1="250" x2="229" y2="250" stroke="#64748b" stroke-width="1.5" />
        <line x1="211" y1="265" x2="229" y2="265" stroke="#64748b" stroke-width="1.5" />

        <!-- Sangkar Rusuk (Rib Cage / Costae) Kiri & Kanan -->
        <path d="M 211 150 C 170 150 145 170 150 195 C 155 210 180 220 211 220" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" />
        <path d="M 229 150 C 270 150 295 170 290 195 C 285 210 260 220 229 220" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" />
        <path d="M 211 170 C 160 170 135 195 140 220 C 145 235 180 245 211 245" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" />
        <path d="M 229 170 C 280 170 305 195 300 220 C 295 235 260 245 229 245" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" />
        <path d="M 211 190 C 165 190 145 215 150 238 C 155 250 185 260 211 260" fill="none" stroke="#94a3b8" stroke-width="2.2" stroke-linecap="round" />
        <path d="M 229 190 C 275 190 295 215 290 238 C 285 250 255 260 229 260" fill="none" stroke="#94a3b8" stroke-width="2.2" stroke-linecap="round" />
      </g>

      <!-- ORGAN 3: PANGGUL & SENDI KOKSA (PELVIS) -->
      <g class="organ-interactive" id="svg-tulang-panggul" data-organ-id="tulang-panggul">
        <!-- Sayap Tulang Panggul Kiri & Kanan (Ilium) -->
        <path d="M 220 288 C 190 288 160 295 155 320 C 150 345 180 365 200 365 L 220 350 L 240 365 C 260 365 290 345 285 320 C 280 295 250 288 220 288 Z" 
              fill="url(#grad-bone)" stroke="#475569" stroke-width="2.2" />
        <!-- Foramen Obturatum (Lubang Panggul) -->
        <circle cx="195" cy="345" r="9" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <circle cx="245" cy="345" r="9" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <!-- Sendi Koksa (Hip Joint Socket) Kiri & Kanan -->
        <circle cx="165" cy="345" r="8" fill="#cbd5e1" stroke="#0284c7" stroke-width="2" />
        <circle cx="275" cy="345" r="8" fill="#cbd5e1" stroke="#0284c7" stroke-width="2" />
      </g>

      <!-- Tulang Paha (Femur) Batang Penghubung -->
      <path d="M 165 353 L 175 420" stroke="#94a3b8" stroke-width="7" stroke-linecap="round" />
      <path d="M 275 353 L 265 420" stroke="#94a3b8" stroke-width="7" stroke-linecap="round" />

      <!-- ORGAN 4: SENDI LUTUT (ARTICULATIO GENU & PATELLA) -->
      <g class="organ-interactive" id="svg-tulang-sendi-lutut" data-organ-id="tulang-sendi-lutut">
        <!-- Sendi Lutut Kanan Pasien (Kiri Layar) -->
        <ellipse cx="175" cy="428" rx="14" ry="10" fill="#f1f5f9" stroke="#0284c7" stroke-width="2" />
        <circle cx="175" cy="428" r="5" fill="#38bdf8" />
        <!-- Sendi Lutut Kiri Pasien (Kanan Layar) -->
        <ellipse cx="265" cy="428" rx="14" ry="10" fill="#f1f5f9" stroke="#0284c7" stroke-width="2" />
        <circle cx="265" cy="428" r="5" fill="#38bdf8" />
      </g>

      <!-- Tulang Kering (Tibia & Fibula) -->
      <path d="M 175 438 L 175 490" stroke="#94a3b8" stroke-width="6" stroke-linecap="round" />
      <path d="M 265 438 L 265 490" stroke="#94a3b8" stroke-width="6" stroke-linecap="round" />

      <!-- ORGAN 5: SENDI PERIFER & JARI KAKI -->
      <g class="organ-interactive" id="svg-sendi-ekstremitas" data-organ-id="sendi-ekstremitas">
        <!-- Kaki Kanan Pasien -->
        <ellipse cx="170" cy="502" rx="16" ry="9" fill="#f8fafc" stroke="#dc2626" stroke-width="2" />
        <circle cx="162" cy="503" r="3" fill="#ef4444" />
        <!-- Kaki Kiri Pasien -->
        <ellipse cx="270" cy="502" rx="16" ry="9" fill="#f8fafc" stroke="#dc2626" stroke-width="2" />
        <circle cx="278" cy="503" r="3" fill="#ef4444" />
      </g>

      <!-- LABEL CALLOUT PINS -->
      <g class="organ-pin-group">
        <!-- Pin Tulang Leher -->
        <line x1="228" y1="110" x2="340" y2="105" class="organ-pin-line" />
        <rect x="290" y="93" width="140" height="24" class="organ-pin-bg" />
        <text x="360" y="109" class="organ-pin-badge" text-anchor="middle">Vertebra Servikal (Leher)</text>

        <!-- Pin Tulang Punggung -->
        <line x1="210" y1="200" x2="80" y2="200" class="organ-pin-line" />
        <rect x="15" y="188" width="145" height="24" class="organ-pin-bg" />
        <text x="87" y="204" class="organ-pin-badge" text-anchor="middle">Vertebra Torakal & Lumbal</text>

        <!-- Pin Tulang Panggul -->
        <line x1="275" y1="330" x2="350" y2="330" class="organ-pin-line" />
        <rect x="300" y="318" width="130" height="24" class="organ-pin-bg" />
        <text x="365" y="334" class="organ-pin-badge" text-anchor="middle">Panggul & Sendi Koksa</text>

        <!-- Pin Sendi Lutut -->
        <line x1="175" y1="428" x2="80" y2="428" class="organ-pin-line" />
        <rect x="15" y="416" width="135" height="24" class="organ-pin-bg" />
        <text x="82" y="432" class="organ-pin-badge" text-anchor="middle">Sendi Lutut (Genu)</text>

        <!-- Pin Sendi Perifer -->
        <line x1="270" y1="502" x2="350" y2="495" class="organ-pin-line" />
        <rect x="295" y="483" width="135" height="24" class="organ-pin-bg" />
        <text x="362" y="499" class="organ-pin-badge" text-anchor="middle">Sendi Ekstremitas Kaki</text>
      </g>
    </svg>`,

  // 3. Peredaran Darah (Kardiovaskular) SVG
  cardiovascular: () => `<svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-artery" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f87171" />
          <stop offset="100%" stop-color="#dc2626" />
        </linearGradient>
        <linearGradient id="grad-vein" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#60a5fa" />
          <stop offset="100%" stop-color="#2563eb" />
        </linearGradient>
        <linearGradient id="grad-heart" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e" />
          <stop offset="100%" stop-color="#9f1239" />
        </linearGradient>
      </defs>

      <!-- Silhouette Badan Lembut -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            class="body-silhouette" />

      <!-- ORGAN 4: PEMBULUH ARTERI (AORTA & ARTERI SISTEMIK) -->
      <g class="organ-interactive" id="svg-pembuluh-arteri" data-organ-id="pembuluh-arteri">
        <!-- Arkus Aorta Melengkung -->
        <path d="M 215 190 C 215 140 235 130 245 145 C 252 155 250 180 230 210 L 230 340 L 205 400 M 230 340 L 255 400" 
              fill="none" stroke="url(#grad-artery)" stroke-width="6.5" stroke-linecap="round" />
        <!-- Arteri Karotis ke Leher & Kepala -->
        <path d="M 226 142 L 210 70 M 238 142 L 245 70" stroke="#ef4444" stroke-width="3" stroke-linecap="round" />
        <!-- Arteri Brakialis Lengan -->
        <path d="M 226 148 L 150 200 M 245 152 L 310 200" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" />
      </g>

      <!-- Vena Kava Superior & Inferior (Non-interaktif pelengkap) -->
      <path d="M 205 140 L 205 340 L 185 400 M 205 340 L 225 400" fill="none" stroke="url(#grad-vein)" stroke-width="5.5" stroke-linecap="round" opacity="0.8" />

      <!-- ORGAN 1: OTOT & ARTERI KORONER JANTUNG -->
      <g class="organ-interactive" id="svg-jantung-koroner" data-organ-id="jantung-koroner">
        <!-- Massa Jantung Utama (Miokardium) -->
        <path d="M 220 185 C 200 170 175 190 185 220 C 195 245 220 270 235 280 C 255 270 270 235 260 210 C 255 190 235 175 220 185 Z" 
              fill="url(#grad-heart)" stroke="#881337" stroke-width="2.5" />
        <!-- Percabangan Arteri Koroner Kiri (LAD) & Kanan (RCA) -->
        <path d="M 222 195 Q 215 220 226 245 Q 230 258 235 275" fill="none" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" />
        <path d="M 218 215 L 205 228 M 225 235 L 235 245 M 224 248 L 215 260" stroke="#fbbf24" stroke-width="1.8" stroke-linecap="round" />
      </g>

      <!-- ORGAN 2: VENTRIKEL KIRI JANTUNG (RUANG POMPA) -->
      <g class="organ-interactive" id="svg-ventrikel-jantung" data-organ-id="ventrikel-jantung">
        <!-- Ruang Ventrikel Kiri (Apex Jantung) -->
        <path d="M 225 230 C 225 230 215 255 232 278 C 248 268 255 245 250 230 Z" 
              fill="#be123c" stroke="#ffe4e6" stroke-width="1.5" opacity="0.95" />
        <!-- Katup Aorta Mini Glow -->
        <circle cx="230" cy="225" r="4" fill="#ffffff" stroke="#e11d48" stroke-width="1.5" />
      </g>

      <!-- ORGAN 3: SISTEM LISTRIK JANTUNG (NODUS SA & ATRIUM) -->
      <g class="organ-interactive" id="svg-sistem-konduksi-jantung" data-organ-id="sistem-konduksi-jantung">
        <!-- Nodus SA (Pacemaker Alami di Atrium Kanan) -->
        <circle cx="198" cy="195" r="7" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
        <circle cx="198" cy="195" r="3" fill="#ffffff" />
        <!-- Jalur Konduksi Internodal & Nodus AV -->
        <path d="M 201 198 Q 210 212 215 222" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="2 2" />
        <circle cx="215" cy="222" r="4.5" fill="#fef08a" stroke="#b45309" stroke-width="1.5" />
      </g>

      <!-- ORGAN 5: PEMBULUH BALIK (VENA DALAM TUNGKAI / DVT) -->
      <g class="organ-interactive" id="svg-pembuluh-vena" data-organ-id="pembuluh-vena">
        <!-- Vena Dalam Femoralis & Poplitea Tungkai Kanan & Kiri -->
        <path d="M 195 400 L 180 470 L 175 510" fill="none" stroke="url(#grad-vein)" stroke-width="4.5" stroke-linecap="round" />
        <path d="M 245 400 L 260 470 L 265 510" fill="none" stroke="url(#grad-vein)" stroke-width="4.5" stroke-linecap="round" />
        <!-- Katup Vena Satu Arah & Titik Rawan Trombus di Betis Kiri -->
        <circle cx="260" cy="465" r="6" fill="#1e3a8a" stroke="#93c5fd" stroke-width="1.5" />
        <line x1="256" y1="465" x2="264" y2="465" stroke="#ffffff" stroke-width="1.5" />
      </g>

      <!-- LABEL CALLOUT PINS -->
      <g class="organ-pin-group">
        <!-- Pin Listrik Nodus SA -->
        <line x1="198" y1="195" x2="80" y2="160" class="organ-pin-line" />
        <rect x="15" y="148" width="135" height="24" class="organ-pin-bg" />
        <text x="82" y="164" class="organ-pin-badge" text-anchor="middle">Nodus SA (Listrik Jantung)</text>

        <!-- Pin Aorta -->
        <line x1="240" y1="140" x2="340" y2="130" class="organ-pin-line" />
        <rect x="290" y="118" width="140" height="24" class="organ-pin-bg" />
        <text x="360" y="134" class="organ-pin-badge" text-anchor="middle">Aorta & Arteri Sistemik</text>

        <!-- Pin Arteri Koroner -->
        <line x1="205" y1="230" x2="80" y2="230" class="organ-pin-line" />
        <rect x="15" y="218" width="135" height="24" class="organ-pin-bg" />
        <text x="82" y="234" class="organ-pin-badge" text-anchor="middle">Arteri Koroner Jantung</text>

        <!-- Pin Ventrikel Kiri -->
        <line x1="245" y1="260" x2="340" y2="260" class="organ-pin-line" />
        <rect x="290" y="248" width="140" height="24" class="organ-pin-bg" />
        <text x="360" y="264" class="organ-pin-badge" text-anchor="middle">Ventrikel Kiri (Pompa)</text>

        <!-- Pin Vena Tungkai -->
        <line x1="260" y1="465" x2="340" y2="465" class="organ-pin-line" />
        <rect x="295" y="453" width="135" height="24" class="organ-pin-bg" />
        <text x="362" y="469" class="organ-pin-badge" text-anchor="middle">Vena Dalam Tungkai (DVT)</text>
      </g>
    </svg>`,

  // 7. Sistem Endokrin SVG
  endocrine: () => `<svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-thyroid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c084fc" />
          <stop offset="100%" stop-color="#7e22ce" />
        </linearGradient>
        <linearGradient id="grad-adrenal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047" />
          <stop offset="100%" stop-color="#ca8a04" />
        </linearGradient>
        <linearGradient id="grad-islets" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#5eead4" />
          <stop offset="100%" stop-color="#0f766e" />
        </linearGradient>
      </defs>

      <!-- Silhouette Badan Lembut -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            class="body-silhouette" />

      <!-- Kelenjar Hipofisis / Pituitari di Kepala (Master Gland) -->
      <g opacity="0.8">
        <circle cx="220" cy="55" r="6" fill="#f472b6" stroke="#db2777" stroke-width="1.5" />
        <text x="220" y="44" font-size="8" font-weight="bold" fill="#be185d" text-anchor="middle">Hipofisis</text>
      </g>

      <!-- ORGAN 1: KELENJAR TIROID -->
      <g class="organ-interactive" id="svg-kelenjar-tiroid" data-organ-id="kelenjar-tiroid">
        <!-- Bentuk Kupu-Kupu Kelenjar Tiroid di Pangkal Leher -->
        <path d="M 220 108 C 210 100 198 102 195 115 C 192 128 205 135 214 122 C 217 118 223 118 226 122 C 235 135 248 128 245 115 C 242 102 230 100 220 108 Z" 
              fill="url(#grad-thyroid)" stroke="#6b21a8" stroke-width="2" />
        <!-- Isthmus Penghubung Tengah -->
        <rect x="216" y="112" width="8" height="6" rx="2" fill="#d8b4fe" />
      </g>

      <!-- Kontur Ginjal Samar sebagai Penopang Kelenjar Adrenal -->
      <path d="M 165 260 C 150 270 150 295 165 310 C 180 320 190 305 185 285 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5" />
      <path d="M 275 260 C 290 270 290 295 275 310 C 260 320 250 305 255 285 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5" />

      <!-- ORGAN 2: KELENJAR ADRENAL (ANAK GINJAL) -->
      <g class="organ-interactive" id="svg-kelenjar-adrenal" data-organ-id="kelenjar-adrenal">
        <!-- Topi Piramida Adrenal Kanan -->
        <path d="M 162 258 C 165 245 180 242 188 250 C 185 258 175 263 162 258 Z" 
              fill="url(#grad-adrenal)" stroke="#a16207" stroke-width="2" />
        <!-- Topi Piramida Adrenal Kiri -->
        <path d="M 278 258 C 275 245 260 242 252 250 C 255 258 265 263 278 258 Z" 
              fill="url(#grad-adrenal)" stroke="#a16207" stroke-width="2" />
      </g>

      <!-- ORGAN 3: PULAU LANGERHANS PANKREAS (ENDOKRIN) -->
      <g class="organ-interactive" id="svg-kelenjar-pankreas-endokrin" data-organ-id="kelenjar-pankreas-endokrin">
        <!-- Bentuk Organ Pankreas -->
        <path d="M 200 295 C 190 295 185 305 195 315 C 215 320 245 310 260 295 C 255 290 230 290 200 295 Z" 
              fill="url(#grad-islets)" stroke="#115e59" stroke-width="2" />
        <!-- Kluster Sel Beta Pulau Langerhans (Glow Dots) -->
        <circle cx="205" cy="305" r="3" fill="#ffffff" />
        <circle cx="218" cy="307" r="3.5" fill="#fef08a" stroke="#ca8a04" stroke-width="1" />
        <circle cx="232" cy="304" r="3" fill="#ffffff" />
        <circle cx="245" cy="301" r="2.5" fill="#fef08a" />
      </g>

      <!-- LABEL CALLOUT PINS -->
      <g class="organ-pin-group">
        <!-- Pin Tiroid -->
        <line x1="235" y1="115" x2="340" y2="105" class="organ-pin-line" />
        <rect x="290" y="93" width="135" height="24" class="organ-pin-bg" />
        <text x="357" y="109" class="organ-pin-badge" text-anchor="middle">Kelenjar Tiroid (Leher)</text>

        <!-- Pin Adrenal -->
        <line x1="175" y1="248" x2="80" y2="248" class="organ-pin-line" />
        <rect x="15" y="236" width="140" height="24" class="organ-pin-bg" />
        <text x="85" y="252" class="organ-pin-badge" text-anchor="middle">Kelenjar Adrenal (Kortisol)</text>

        <!-- Pin Pulau Langerhans -->
        <line x1="240" y1="305" x2="340" y2="305" class="organ-pin-line" />
        <rect x="290" y="293" width="140" height="24" class="organ-pin-bg" />
        <text x="360" y="309" class="organ-pin-badge" text-anchor="middle">Pulau Langerhans (Insulin)</text>
      </g>
    </svg>`,

  // 8. Ekskresi / Urinaria SVG
  excretory: () => `<svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-kidney" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f87171" />
          <stop offset="100%" stop-color="#991b1b" />
        </linearGradient>
        <linearGradient id="grad-bladder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fed7aa" />
          <stop offset="100%" stop-color="#f97316" />
        </linearGradient>
      </defs>

      <!-- Silhouette Badan Lembut -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            class="body-silhouette" />

      <!-- Pembuluh Darah Renal (Aorta & Vena Kava Cabang) -->
      <path d="M 220 220 L 220 340" stroke="#ef4444" stroke-width="4" opacity="0.6" />
      <path d="M 210 220 L 210 340" stroke="#3b82f6" stroke-width="4" opacity="0.6" />
      <path d="M 215 265 L 185 270 M 215 270 L 245 275" stroke="#ef4444" stroke-width="2.5" opacity="0.7" />

      <!-- ORGAN 1: GINJAL BILATERAL (REN DEXTRA & SINISTRA) -->
      <g class="organ-interactive" id="svg-ginjal" data-organ-id="ginjal">
        <!-- Ginjal Kanan Pasien (Kiri Layar) -->
        <path d="M 185 245 C 160 245 150 265 155 295 C 160 320 180 325 185 305 C 190 285 185 270 180 265 C 182 255 185 245 185 245 Z" 
              fill="url(#grad-kidney)" stroke="#7f1d1d" stroke-width="2.2" />
        <!-- Ginjal Kiri Pasien (Kanan Layar, Posisi Lebih Tinggi) -->
        <path d="M 245 240 C 270 240 280 260 275 290 C 270 315 250 320 245 300 C 240 280 245 265 250 260 C 248 250 245 240 245 240 Z" 
              fill="url(#grad-kidney)" stroke="#7f1d1d" stroke-width="2.2" />
      </g>

      <!-- ORGAN 2: SALURAN URETER BILATERAL -->
      <g class="organ-interactive" id="svg-ureter" data-organ-id="ureter">
        <!-- Ureter Kanan -->
        <path d="M 180 295 C 185 330 195 365 210 395" fill="none" stroke="#eab308" stroke-width="3" stroke-linecap="round" />
        <!-- Ureter Kiri -->
        <path d="M 250 290 C 245 325 235 365 220 395" fill="none" stroke="#eab308" stroke-width="3" stroke-linecap="round" />
      </g>

      <!-- ORGAN 3: KANDUNG KEMIH (VESIKA URINARIA) -->
      <g class="organ-interactive" id="svg-kandung-kemih" data-organ-id="kandung-kemih">
        <!-- Kubah Vesika Urinaria -->
        <path d="M 200 395 C 190 405 195 425 215 435 C 235 425 240 405 230 395 C 220 390 210 390 200 395 Z" 
              fill="url(#grad-bladder)" stroke="#c2410c" stroke-width="2.2" />
        <ellipse cx="215" cy="412" rx="12" ry="8" fill="#fef08a" opacity="0.6" />
      </g>

      <!-- ORGAN 4: SALURAN KEMIH BAWAH (URETRA) -->
      <g class="organ-interactive" id="svg-saluran-kemih-bawah" data-organ-id="saluran-kemih-bawah">
        <!-- Tabung Uretra -->
        <path d="M 215 435 L 215 465" stroke="#ea580c" stroke-width="4.5" stroke-linecap="round" />
        <!-- Sfingter Uretra Eksternal -->
        <ellipse cx="215" cy="445" rx="6" ry="2.5" fill="#ffffff" stroke="#c2410c" stroke-width="1.5" />
      </g>

      <!-- LABEL CALLOUT PINS -->
      <g class="organ-pin-group">
        <!-- Pin Ginjal -->
        <line x1="165" y1="280" x2="80" y2="260" class="organ-pin-line" />
        <rect x="15" y="248" width="135" height="24" class="organ-pin-bg" />
        <text x="82" y="264" class="organ-pin-badge" text-anchor="middle">Ginjal Bilateral (Renes)</text>

        <!-- Pin Ureter -->
        <line x1="240" y1="330" x2="340" y2="330" class="organ-pin-line" />
        <rect x="290" y="318" width="135" height="24" class="organ-pin-bg" />
        <text x="357" y="334" class="organ-pin-badge" text-anchor="middle">Saluran Ureter Bilateral</text>

        <!-- Pin Kandung Kemih -->
        <line x1="200" y1="412" x2="80" y2="412" class="organ-pin-line" />
        <rect x="15" y="400" width="140" height="24" class="organ-pin-bg" />
        <text x="85" y="416" class="organ-pin-badge" text-anchor="middle">Kandung Kemih (Vesika)</text>

        <!-- Pin Uretra -->
        <line x1="220" y1="450" x2="340" y2="450" class="organ-pin-line" />
        <rect x="290" y="438" width="135" height="24" class="organ-pin-bg" />
        <text x="357" y="454" class="organ-pin-badge" text-anchor="middle">Uretra & Muara Kemih</text>
      </g>
    </svg>`,

  // 9. Sistem Kekebalan (Imun) SVG
  immune: () => `<svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-thymus" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#86efac" />
          <stop offset="100%" stop-color="#16a34a" />
        </linearGradient>
        <linearGradient id="grad-marrow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fca5a5" />
          <stop offset="100%" stop-color="#dc2626" />
        </linearGradient>
      </defs>

      <!-- Silhouette Badan Lembut -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            class="body-silhouette" />

      <!-- ORGAN 2: SISTEM IMUN PENGHUBUNG & JARINGAN AUTOANTIBODI -->
      <g class="organ-interactive" id="svg-sistem-imun-penghubung" data-organ-id="sistem-imun-penghubung">
        <!-- Kelenjar Timus di Dada Atas -->
        <path d="M 215 140 C 205 140 200 155 208 170 C 215 178 225 178 232 170 C 240 155 235 140 225 140 Z" 
              fill="url(#grad-thymus)" stroke="#15803d" stroke-width="2" />
        <!-- Limpa (Lien / Spleen) di Sisi Kiri Tubuh -->
        <path d="M 265 230 C 255 235 255 255 268 265 C 280 260 285 240 275 232 Z" 
              fill="#b91c1c" stroke="#7f1d1d" stroke-width="2" />
        <!-- Antibodi Y-Shaped Mengambang -->
        <g transform="translate(150, 190) scale(0.8)">
          <path d="M 10 5 L 15 15 L 15 25 M 20 5 L 15 15" stroke="#059669" stroke-width="2.5" stroke-linecap="round" fill="none" />
        </g>
        <g transform="translate(280, 180) scale(0.8)">
          <path d="M 10 5 L 15 15 L 15 25 M 20 5 L 15 15" stroke="#059669" stroke-width="2.5" stroke-linecap="round" fill="none" />
        </g>
      </g>

      <!-- ORGAN 1: SUMSUM TULANG & SEL IMUN SISTEMIK -->
      <g class="organ-interactive" id="svg-sumsum-tulang-imun" data-organ-id="sumsum-tulang-imun">
        <!-- Potongan Tulang Femur dengan Rongga Sumsum Merah -->
        <path d="M 170 340 L 170 440" stroke="#cbd5e1" stroke-width="14" stroke-linecap="round" />
        <path d="M 170 345 L 170 435" stroke="url(#grad-marrow)" stroke-width="8" stroke-linecap="round" />
        <!-- Sel Darah Putih (Leukosit) Tunas Baru -->
        <circle cx="170" cy="360" r="3" fill="#ffffff" />
        <circle cx="170" cy="385" r="3.5" fill="#fef08a" />
        <circle cx="170" cy="410" r="3" fill="#ffffff" />

        <!-- Sisi Femur Kiri Pasien -->
        <path d="M 270 340 L 270 440" stroke="#cbd5e1" stroke-width="14" stroke-linecap="round" />
        <path d="M 270 345 L 270 435" stroke="url(#grad-marrow)" stroke-width="8" stroke-linecap="round" />
        <circle cx="270" cy="370" r="3" fill="#ffffff" />
        <circle cx="270" cy="400" r="3.5" fill="#fef08a" />
      </g>

      <!-- LABEL CALLOUT PINS -->
      <g class="organ-pin-group">
        <!-- Pin Timus & Antibodi -->
        <line x1="230" y1="155" x2="340" y2="140" class="organ-pin-line" />
        <rect x="290" y="128" width="140" height="24" class="organ-pin-bg" />
        <text x="360" y="144" class="organ-pin-badge" text-anchor="middle">Timus, Limpa & Antibodi</text>

        <!-- Pin Sumsum Tulang -->
        <line x1="170" y1="390" x2="80" y2="390" class="organ-pin-line" />
        <rect x="15" y="378" width="140" height="24" class="organ-pin-bg" />
        <text x="85" y="394" class="organ-pin-badge" text-anchor="middle">Sumsum Tulang (Sel Imun)</text>
      </g>
    </svg>`,

  // 10. Sistem Limfatik SVG
  lymphatic: () => `<svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-lymph" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#bef264" />
          <stop offset="100%" stop-color="#65a30d" />
        </linearGradient>
      </defs>

      <!-- Silhouette Badan Lembut -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            class="body-silhouette" />

      <!-- ORGAN 2: SALURAN & PEMBULUH LIMFATIK -->
      <g class="organ-interactive" id="svg-pembuluh-limfa" data-organ-id="pembuluh-limfa">
        <!-- Ductus Thoracicus Utama -->
        <path d="M 215 110 L 215 320" stroke="#84cc16" stroke-width="3" stroke-dasharray="4 2" fill="none" />
        <!-- Jaringan Saluran Limfa Lengan & Dada -->
        <path d="M 215 150 C 180 160 160 180 140 210 M 215 150 C 250 160 270 180 300 210" 
              stroke="#84cc16" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Jaringan Saluran Limfa Tungkai Bawah -->
        <path d="M 215 320 L 185 410 L 180 490 M 215 320 L 245 410 L 250 490" 
              stroke="#84cc16" stroke-width="2.5" stroke-dasharray="3 2" fill="none" />
      </g>

      <!-- ORGAN 1: KELENJAR GETAH BENING (NODUS LIMFATIKUS) -->
      <g class="organ-interactive" id="svg-kelenjar-getah-bening" data-organ-id="kelenjar-getah-bening">
        <!-- Nodus Servikal (Leher) -->
        <circle cx="205" cy="95" r="4.5" fill="url(#grad-lymph)" stroke="#4d7c0f" stroke-width="1.5" />
        <circle cx="235" cy="95" r="4.5" fill="url(#grad-lymph)" stroke="#4d7c0f" stroke-width="1.5" />
        <circle cx="202" cy="110" r="4.5" fill="url(#grad-lymph)" stroke="#4d7c0f" stroke-width="1.5" />
        <circle cx="238" cy="110" r="4.5" fill="url(#grad-lymph)" stroke="#4d7c0f" stroke-width="1.5" />

        <!-- Nodus Aksila (Ketiak Kiri & Kanan) -->
        <circle cx="150" cy="175" r="5" fill="url(#grad-lymph)" stroke="#4d7c0f" stroke-width="1.5" />
        <circle cx="145" cy="190" r="5.5" fill="url(#grad-lymph)" stroke="#4d7c0f" stroke-width="1.5" />
        <circle cx="290" cy="175" r="5" fill="url(#grad-lymph)" stroke="#4d7c0f" stroke-width="1.5" />
        <circle cx="295" cy="190" r="5.5" fill="url(#grad-lymph)" stroke="#4d7c0f" stroke-width="1.5" />

        <!-- Nodus Inguinal (Lipat Paha) -->
        <circle cx="190" cy="335" r="5" fill="url(#grad-lymph)" stroke="#4d7c0f" stroke-width="1.5" />
        <circle cx="180" cy="350" r="6" fill="url(#grad-lymph)" stroke="#4d7c0f" stroke-width="1.5" />
        <circle cx="240" cy="335" r="5" fill="url(#grad-lymph)" stroke="#4d7c0f" stroke-width="1.5" />
        <circle cx="250" cy="350" r="6" fill="url(#grad-lymph)" stroke="#4d7c0f" stroke-width="1.5" />
      </g>

      <!-- LABEL CALLOUT PINS -->
      <g class="organ-pin-group">
        <!-- Pin Kelenjar Leher -->
        <line x1="235" y1="100" x2="340" y2="85" class="organ-pin-line" />
        <rect x="290" y="73" width="135" height="24" class="organ-pin-bg" />
        <text x="357" y="89" class="organ-pin-badge" text-anchor="middle">Kelenjar Limfa Servikal</text>

        <!-- Pin Kelenjar Ketiak -->
        <line x1="145" y1="185" x2="70" y2="185" class="organ-pin-line" />
        <rect x="15" y="173" width="135" height="24" class="organ-pin-bg" />
        <text x="82" y="189" class="organ-pin-badge" text-anchor="middle">Kelenjar Aksila (Ketiak)</text>

        <!-- Pin Pembuluh Limfa -->
        <line x1="215" y1="260" x2="340" y2="260" class="organ-pin-line" />
        <rect x="290" y="248" width="135" height="24" class="organ-pin-bg" />
        <text x="357" y="264" class="organ-pin-badge" text-anchor="middle">Pembuluh Limfa & Duktus</text>

        <!-- Pin Kelenjar Lipat Paha -->
        <line x1="180" y1="350" x2="70" y2="350" class="organ-pin-line" />
        <rect x="15" y="338" width="135" height="24" class="organ-pin-bg" />
        <text x="82" y="354" class="organ-pin-badge" text-anchor="middle">Kelenjar Inguinal (Paha)</text>
      </g>
    </svg>`,

  // 11. Sistem Integumen (Kulit & Kuku) SVG
  integumentary: () => `<svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-epidermis" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fdba74" />
          <stop offset="100%" stop-color="#fb923c" />
        </linearGradient>
        <linearGradient id="grad-dermis" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fca5a5" />
          <stop offset="100%" stop-color="#f87171" />
        </linearGradient>
        <linearGradient id="grad-fat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#fde047" />
        </linearGradient>
      </defs>

      <!-- Silhouette Badan Luar Berlapis Kulit (Integumen) -->
      <path d="M 120 520 C 110 400 110 300 120 220 C 130 180 150 140 180 130 L 195 90 C 185 85 180 65 180 40 C 180 20 200 10 220 10 C 240 10 260 20 260 40 C 260 65 255 85 245 90 L 260 130 C 290 140 310 180 320 220 C 330 300 330 400 320 520 Z" 
            fill="#ffedd5" stroke="#ea580c" stroke-width="3" opacity="0.4" />

      <!-- INSET PENAMPANG LAPISAN KULIT MIKROSKOPIS (KOTAK DETAIL) -->
      <rect x="135" y="150" width="170" height="210" rx="12" fill="#ffffff" stroke="#ea580c" stroke-width="2.5" />

      <!-- ORGAN 1: LAPISAN KULIT (EPIDERMIS & DERMIS) -->
      <g class="organ-interactive" id="svg-kulit-epidermis-dermis" data-organ-id="kulit-epidermis-dermis">
        <!-- Lapisan 1: Stratum Korneum & Epidermis Terluar -->
        <rect x="140" y="160" width="160" height="30" rx="4" fill="url(#grad-epidermis)" stroke="#c2410c" stroke-width="1.5" />
        <text x="145" y="178" font-size="9" font-weight="bold" fill="#7c2d12">1. Epidermis (Barier)</text>

        <!-- Lapisan 2: Dermis (Kolagen, Pembuluh Darah & Elastin) -->
        <rect x="140" y="195" width="160" height="95" rx="4" fill="url(#grad-dermis)" stroke="#b91c1c" stroke-width="1.5" />
        <text x="145" y="215" font-size="9" font-weight="bold" fill="#7f1d1d">2. Dermis (Kolagen)</text>
        <!-- Anyaman Kapiler Darah di Dermis -->
        <path d="M 150 250 Q 165 235 180 260 Q 200 240 220 265" stroke="#dc2626" stroke-width="2" fill="none" />
        <path d="M 155 260 Q 175 245 195 270 Q 215 250 235 275" stroke="#2563eb" stroke-width="1.8" fill="none" />

        <!-- Lapisan 3: Subkutan (Hipodermis / Lemak) -->
        <rect x="140" y="295" width="160" height="55" rx="4" fill="url(#grad-fat)" stroke="#ca8a04" stroke-width="1.5" />
        <text x="145" y="315" font-size="9" font-weight="bold" fill="#713f12">3. Subkutan (Lemak)</text>
      </g>

      <!-- ORGAN 2: SARAF KULIT & FOLIKEL KUTANEUS (HERPES ZOSTER) -->
      <g class="organ-interactive" id="svg-folikel-dan-kuku" data-organ-id="folikel-dan-kuku">
        <!-- Folikel Rambut Menembus Kulit -->
        <path d="M 245 140 L 250 210 C 250 225 265 225 265 210 L 260 140" fill="#fde68a" stroke="#d97706" stroke-width="1.8" />
        <ellipse cx="257" cy="218" rx="7" ry="9" fill="#b45309" />
        <!-- Serabut Saraf Sensorik & Garis Ruam Dermatomal -->
        <path d="M 257 227 Q 275 250 280 290" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Ruam Lenting Herpes Zoster pada Permukaan Kulit -->
        <circle cx="210" cy="155" r="4.5" fill="#ef4444" stroke="#991b1b" stroke-width="1.2" />
        <circle cx="222" cy="153" r="4" fill="#ef4444" stroke="#991b1b" stroke-width="1.2" />
        <circle cx="202" cy="158" r="3.5" fill="#f87171" stroke="#991b1b" stroke-width="1" />
      </g>

      <!-- LABEL CALLOUT PINS -->
      <g class="organ-pin-group">
        <!-- Pin Epidermis & Dermis -->
        <line x1="140" y1="210" x2="60" y2="210" class="organ-pin-line" />
        <rect x="10" y="198" width="135" height="24" class="organ-pin-bg" />
        <text x="77" y="214" class="organ-pin-badge" text-anchor="middle">Lapisan Epidermis & Dermis</text>

        <!-- Pin Folikel & Saraf Zoster -->
        <line x1="260" y1="150" x2="350" y2="150" class="organ-pin-line" />
        <rect x="295" y="138" width="140" height="24" class="organ-pin-bg" />
        <text x="365" y="154" class="organ-pin-badge" text-anchor="middle">Saraf Sensorik & Folikel</text>

        <!-- Pin Bantalan Subkutan -->
        <line x1="140" y1="320" x2="60" y2="320" class="organ-pin-line" />
        <rect x="10" y="308" width="135" height="24" class="organ-pin-bg" />
        <text x="77" y="324" class="organ-pin-badge" text-anchor="middle">Subkutan (Area Dekubitus)</text>
      </g>
    </svg>`,

  // Alias & Reproduksi
  muscular: () => SVG_GENERATOR.muscularFat(),
  reproductiveMale: () => SVG_GENERATOR.urologyMale(),
  reproductiveFemale: () => SVG_GENERATOR.urologyFemale(),

};

// ============================================================================
// 3. STATE MANAJEMEN APLIKASI
// ============================================================================
const AppState = {
  currentSystem: 'skeletal',
  visualViewMode: 'torso',          // 'torso' | 'liver-hd'
  liverProcedureMode: 'ptbd',      // 'normal' | 'ptbd' | 'abses' | 'asites' | 'pasca-operasi',    // 'respiratory' | 'digestive' | 'urology'
  currentGender: 'male',           // 'male' | 'female' (untuk urology)
  currentOrganId: 'tulang-leher',      // ID organ aktif
  currentDiseaseId: 'spondilosis-servikal',   // ID penyakit aktif
  activeCategoryFilter: 'all',     // 'all' | 'Infeksi' | 'Peradangan' | 'Gaya Hidup/Pola Makan' | 'Faktor Usia/Degeneratif'
  labelsVisible: true,             // Label pin aktif atau sembunyi
  currentFontSize: 'md',           // 'sm' | 'md' | 'lg'
  highContrast: false,             // Mode kontras tinggi
  isSpeaking: false,               // Status text-to-speech
  infoMode: 'simple',              // 'simple' | 'deep'
  activeDeepTab: 'pathophysiology' // 'pathophysiology' | 'geriatric-symptoms' | 'staging' | 'diagnostic' | 'pharmacotherapy' | 'clinical-nutrition' | 'emergency' | 'rehabilitation'
};

// ============================================================================
// 4. INISIALISASI & EVENT LISTENERS
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initAccessibilityPreferences();
  initSystemTabs();
  initCategoryFilters();
  initGenderSwitcher();
  initModeSwitcher();
  initSearch();
  initSpeechSynthesis();
  initModalAndPrint();
  initFloatingTopButton();
  initLiverVisualizer();
  
  // Baca URL Search Parameters jika dibuka dari tautan tabel-medis.html
  const urlParams = new URLSearchParams(window.location.search);
  const paramSystem = urlParams.get('system');
  const paramOrgan = urlParams.get('organ');
  const paramDisease = urlParams.get('disease');
  const paramGender = urlParams.get('gender');
  const paramMode = urlParams.get('mode');

  if (paramGender === 'male' || paramGender === 'female') {
    AppState.currentGender = paramGender;
  }

  const validSystems = [
    'skeletal', 'muscular', 'cardiovascular', 'digestive',
    'respiratory', 'nervous', 'endocrine', 'excretory',
    'immune', 'lymphatic', 'integumentary', 'reproductive',
    'urology', 'muscularFat'
  ];

  let initialSystem = (paramSystem && validSystems.includes(paramSystem)) 
                        ? paramSystem 
                        : 'skeletal';
  if (initialSystem === 'urology') initialSystem = 'reproductive';
  if (initialSystem === 'muscularFat') initialSystem = 'muscular';
  
  const defaultOrgan = getDefaultOrganForSystem(initialSystem, AppState.currentGender);
  const initialOrgan = paramOrgan || (defaultOrgan ? defaultOrgan.id : 'tulang-leher');
  const initialDisease = paramDisease || null;

  loadSystem(initialSystem, initialOrgan, initialDisease);

  if (paramMode === 'deep') {
    switchMode('deep');
  }
});

// Inisialisasi preferensi ukuran huruf & kontras dari LocalStorage
function initAccessibilityPreferences() {
  const savedFont = localStorage.getItem('anatomi_font_size') || 'md';
  const savedContrast = localStorage.getItem('anatomi_contrast') === 'true';

  setFontSize(savedFont);
  if (savedContrast) {
    toggleHighContrast(true);
  }

  // Tombol pengatur font
  document.getElementById('btn-font-sm').addEventListener('click', () => setFontSize('sm'));
  document.getElementById('btn-font-md').addEventListener('click', () => setFontSize('md'));
  document.getElementById('btn-font-lg').addEventListener('click', () => setFontSize('lg'));

  // Tombol Kontras Tinggi
  document.getElementById('btn-high-contrast').addEventListener('click', () => {
    toggleHighContrast(!AppState.highContrast);
  });

  // Tombol Toggle Label Organ
  document.getElementById('btn-toggle-labels').addEventListener('click', toggleOrganLabels);

  // Tombol Reset Tampilan
  document.getElementById('btn-reset-view').addEventListener('click', () => {
    const defaultOrgan = getDefaultOrganForSystem(AppState.currentSystem, AppState.currentGender);
    selectOrgan(defaultOrgan.id);
  });
}

function setFontSize(size) {
  AppState.currentFontSize = size;
  document.documentElement.classList.remove('font-size-sm', 'font-size-md', 'font-size-lg');
  document.documentElement.classList.add(`font-size-${size}`);

  // Update visual tombol aktif
  const buttons = {
    sm: document.getElementById('btn-font-sm'),
    md: document.getElementById('btn-font-md'),
    lg: document.getElementById('btn-font-lg')
  };

  Object.keys(buttons).forEach(k => {
    if (k === size) {
      buttons[k].className = "px-2.5 py-1 rounded text-sm font-bold bg-teal-600 text-white shadow-sm transition";
    } else {
      buttons[k].className = "px-2.5 py-1 rounded text-xs font-semibold hover:bg-teal-700 transition";
    }
  });

  localStorage.setItem('anatomi_font_size', size);
}

function toggleHighContrast(forceState) {
  AppState.highContrast = forceState !== undefined ? forceState : !AppState.highContrast;
  if (AppState.highContrast) {
    document.body.classList.add('high-contrast');
  } else {
    document.body.classList.remove('high-contrast');
  }
  localStorage.setItem('anatomi_contrast', AppState.highContrast);
}

function toggleOrganLabels() {
  AppState.labelsVisible = !AppState.labelsVisible;
  const svgStage = document.getElementById('svg-stage');
  const labelText = document.getElementById('label-toggle-text');

  if (AppState.labelsVisible) {
    svgStage.classList.remove('labels-hidden');
    labelText.textContent = 'Label: Aktif';
  } else {
    svgStage.classList.add('labels-hidden');
    labelText.textContent = 'Label: Sembunyi';
  }
}

// ============================================================================
// 5. SISTEM TABS & GENDER SWITCHER
// ============================================================================
function initSystemTabs() {
  const tabs = document.querySelectorAll('.sys-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const systemId = tab.dataset.system;
      if (systemId === AppState.currentSystem) return;

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Tentukan organ awal untuk sistem yang baru
      const defaultOrgan = getDefaultOrganForSystem(systemId, AppState.currentGender);
      loadSystem(systemId, defaultOrgan.id);
    });
  });
}

function initGenderSwitcher() {
  const btnMale = document.getElementById('btn-gender-male');
  const btnFemale = document.getElementById('btn-gender-female');

  if (btnMale) {
    btnMale.addEventListener('click', () => {
      if (AppState.currentGender === 'male') return;
      btnMale.classList.add('active');
      btnFemale.classList.remove('active');
      AppState.currentGender = 'male';
      loadSystem('reproductive', 'prostat');
    });
  }

  if (btnFemale) {
    btnFemale.addEventListener('click', () => {
      if (AppState.currentGender === 'female') return;
      btnFemale.classList.add('active');
      btnMale.classList.remove('active');
      AppState.currentGender = 'female';
      loadSystem('reproductive', 'rahim');
    });
  }
}

function getDefaultOrganForSystem(systemId, gender = 'male') {
  if (systemId === 'skeletal') return ANATOMY_DATA.skeletal.organs[0];
  if (systemId === 'muscular' || systemId === 'muscularFat') return ANATOMY_DATA.muscular.organs[0];
  if (systemId === 'cardiovascular') return ANATOMY_DATA.cardiovascular.organs[0];
  if (systemId === 'digestive') return ANATOMY_DATA.digestive.organs.find(o => o.id === 'lambung') || ANATOMY_DATA.digestive.organs[0];
  if (systemId === 'respiratory') return ANATOMY_DATA.respiratory.organs.find(o => o.id === 'paru-paru') || ANATOMY_DATA.respiratory.organs[0];
  if (systemId === 'nervous') return ANATOMY_DATA.nervous.organs.find(o => o.id === 'otak-besar') || ANATOMY_DATA.nervous.organs[0];
  if (systemId === 'endocrine') return ANATOMY_DATA.endocrine.organs[0];
  if (systemId === 'excretory') return ANATOMY_DATA.excretory.organs[0];
  if (systemId === 'immune') return ANATOMY_DATA.immune.organs[0];
  if (systemId === 'lymphatic') return ANATOMY_DATA.lymphatic.organs[0];
  if (systemId === 'integumentary') return ANATOMY_DATA.integumentary.organs[0];
  if (systemId === 'reproductive' || systemId === 'urology') {
    return gender === 'male'
      ? (ANATOMY_DATA.reproductive.maleOrgans.find(o => o.id === 'prostat') || ANATOMY_DATA.reproductive.maleOrgans[0])
      : (ANATOMY_DATA.reproductive.femaleOrgans.find(o => o.id === 'rahim') || ANATOMY_DATA.reproductive.femaleOrgans[0]);
  }
  return null;
}

function getOrgansListForActiveSystem() {
  const sys = AppState.currentSystem;
  if (sys === 'reproductive' || sys === 'urology') {
    return AppState.currentGender === 'male' ? ANATOMY_DATA.reproductive.maleOrgans : ANATOMY_DATA.reproductive.femaleOrgans;
  }
  if (ANATOMY_DATA[sys] && ANATOMY_DATA[sys].organs) {
    return ANATOMY_DATA[sys].organs;
  }
  if (sys === 'muscularFat' && ANATOMY_DATA.muscular) {
    return ANATOMY_DATA.muscular.organs;
  }
  return [];
}

// ============================================================================
// 6. LOAD SYSTEM & RENDER SVG
// ============================================================================
function loadSystem(systemId, organIdToSelect, diseaseIdToSelect) {
  // Normalisasi id backward compatibility
  if (systemId === 'urology') systemId = 'reproductive';
  if (systemId === 'muscularFat') systemId = 'muscular';
  AppState.currentSystem = systemId;
  
  // Jika berpindah ke sistem di luar pencernaan, kembalikan ke visual torso
  if (systemId !== 'digestive' && AppState.visualViewMode === 'liver-hd') {
    AppState.visualViewMode = 'torso';
    const btnTorso = document.getElementById('btn-view-torso');
    const btnLiver = document.getElementById('btn-view-liver-hd');
    if (btnTorso && btnLiver) {
      btnTorso.classList.add('active');
      btnLiver.classList.remove('active');
    }
    const procBar = document.getElementById('liver-procedures-bar');
    const procCard = document.getElementById('liver-procedure-info-card');
    const modeTag = document.getElementById('visual-mode-indicator');
    if (procBar) { procBar.classList.add('hidden'); procBar.classList.remove('flex'); }
    if (procCard) procCard.classList.add('hidden');
    if (modeTag) modeTag.classList.add('hidden');
  }
  
  // Tampilkan/sembunyikan gender switcher (hanya aktif pada sistem reproduksi / urologi)
  const genderContainer = document.getElementById('gender-switch-container');
  const visualTag = document.getElementById('visual-system-tag');

  if (systemId === 'reproductive') {
    genderContainer.classList.remove('hidden');
    genderContainer.classList.add('flex');
    visualTag.textContent = AppState.currentGender === 'male' ? '12. Reproduksi Pria' : '12. Reproduksi Wanita';
    visualTag.className = 'text-xs font-extrabold uppercase tracking-wide text-purple-700 bg-purple-100 px-2.5 py-1 rounded-md';
  } else {
    genderContainer.classList.add('hidden');
    genderContainer.classList.remove('flex');

    const meta = {
      skeletal: { text: '1. Rangka (Kerangka)', cls: 'text-slate-800 bg-slate-200' },
      muscular: { text: '2. Otot (Muskular)', cls: 'text-rose-700 bg-rose-100' },
      cardiovascular: { text: '3. Peredaran Darah', cls: 'text-red-700 bg-red-100' },
      digestive: { text: '4. Saluran Pencernaan', cls: 'text-amber-800 bg-amber-100' },
      respiratory: { text: '5. Saluran Pernapasan', cls: 'text-sky-700 bg-sky-100' },
      nervous: { text: '6. Sistem Saraf', cls: 'text-violet-700 bg-violet-100' },
      endocrine: { text: '7. Sistem Endokrin', cls: 'text-teal-800 bg-teal-100' },
      excretory: { text: '8. Ekskresi / Urinaria', cls: 'text-blue-700 bg-blue-100' },
      immune: { text: '9. Sistem Kekebalan (Imun)', cls: 'text-emerald-700 bg-emerald-100' },
      lymphatic: { text: '10. Sistem Limfatik', cls: 'text-lime-800 bg-lime-100' },
      integumentary: { text: '11. Sistem Integumen', cls: 'text-orange-700 bg-orange-100' }
    };

    if (meta[systemId]) {
      visualTag.textContent = meta[systemId].text;
      visualTag.className = 'text-xs font-extrabold uppercase tracking-wide ' + meta[systemId].cls + ' px-2.5 py-1 rounded-md';
    } else {
      visualTag.textContent = 'Sistem Anatomi Tubuh';
      visualTag.className = 'text-xs font-extrabold uppercase tracking-wide text-teal-800 bg-teal-100 px-2.5 py-1 rounded-md';
    }
  }

  // Sinkronisasi status visual tombol tab sistem
  document.querySelectorAll('.sys-tab-btn').forEach(tab => {
    const tabSys = tab.dataset.system;
    if (tabSys === systemId || 
       (systemId === 'reproductive' && tabSys === 'urology') ||
       (systemId === 'muscular' && tabSys === 'muscularFat')) {
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    } else {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    }
  });

  // Sinkronisasi status tombol gender reproduksi
  if (systemId === 'reproductive') {
    const btnMale = document.getElementById('btn-gender-male');
    const btnFemale = document.getElementById('btn-gender-female');
    if (btnMale && btnFemale) {
      if (AppState.currentGender === 'male') {
        btnMale.classList.add('active');
        btnFemale.classList.remove('active');
      } else {
        btnFemale.classList.add('active');
        btnMale.classList.remove('active');
      }
    }
  }

  // Render SVG yang tepat
  const svgStage = document.getElementById('svg-stage');
  if (systemId === 'reproductive') {
    svgStage.innerHTML = AppState.currentGender === 'male' ? SVG_GENERATOR.reproductiveMale() : SVG_GENERATOR.reproductiveFemale();
  } else if (typeof SVG_GENERATOR[systemId] === 'function') {
    svgStage.innerHTML = SVG_GENERATOR[systemId]();
  } else {
    svgStage.innerHTML = SVG_GENERATOR.respiratory();
  }

  // Terapkan status visibility label pin
  if (!AppState.labelsVisible) {
    svgStage.classList.add('labels-hidden');
  } else {
    svgStage.classList.remove('labels-hidden');
  }

  // Pasang Event Listener Interaktif pada elemen organ SVG
  attachSvgOrganListeners();

  // Render tombol pintas organ di bawah visual
  renderOrganQuickPills();

  // Pilih organ
  const organsList = getOrgansListForActiveSystem();
  const targetOrganId = organIdToSelect || (organsList.length > 0 ? organsList[0].id : null);
  if (targetOrganId) {
    selectOrgan(targetOrganId, diseaseIdToSelect);
  }

  // Terapkan filter kategori jika ada yang aktif
  applyCategoryFilter();
}

// ============================================================================
// 7. INTERAKSI SVG & TOOLTIPS
// ============================================================================
function attachSvgOrganListeners() {
  const organElements = document.querySelectorAll('#svg-stage .organ-interactive');
  const tooltip = document.getElementById('organ-hover-tooltip');
  const tooltipTitle = document.getElementById('tooltip-title');
  const tooltipSubtitle = document.getElementById('tooltip-subtitle');

  organElements.forEach(el => {
    const organId = el.dataset.organId;
    const organData = findOrganById(organId);
    if (!organData) return;

    // Klik Organ
    el.addEventListener('click', () => {
      selectOrgan(organId);
    });

    // Hover Masuk: Tampilkan Tooltip
    el.addEventListener('mouseenter', (e) => {
      tooltipTitle.textContent = organData.name;
      tooltipSubtitle.textContent = `${organData.diseases.length} Penyakit Terkait - Klik untuk Detail`;
      tooltip.classList.remove('hidden');
      positionTooltip(e);
    });

    // Hover Gerak: Geser Tooltip
    el.addEventListener('mousemove', (e) => {
      positionTooltip(e);
    });

    // Hover Keluar: Sembunyikan Tooltip
    el.addEventListener('mouseleave', () => {
      tooltip.classList.add('hidden');
    });
  });
}

function positionTooltip(event) {
  const tooltip = document.getElementById('organ-hover-tooltip');
  const svgStage = document.getElementById('svg-stage');
  const stageRect = svgStage.getBoundingClientRect();

  const mouseX = event.clientX - stageRect.left;
  const mouseY = event.clientY - stageRect.top;

  tooltip.style.left = `${mouseX}px`;
  tooltip.style.top = `${mouseY}px`;
}

// Render Tombol Cepat Pemilihan Organ di bawah SVG
function renderOrganQuickPills() {
  const container = document.getElementById('organ-quick-pills');
  container.innerHTML = '';

  const organs = getOrgansListForActiveSystem();
  organs.forEach(organ => {
    const pill = document.createElement('button');
    pill.className = `quick-organ-pill ${organ.id === AppState.currentOrganId ? 'active' : ''}`;
    pill.textContent = organ.name;
    pill.dataset.organId = organ.id;

    pill.addEventListener('click', () => {
      selectOrgan(organ.id);
    });

    container.appendChild(pill);
  });
}

// ============================================================================
// 8. PEMILIHAN ORGAN & UPDATE DETAIL PANEL
// ============================================================================
function selectOrgan(organId, targetDiseaseId) {
  const organ = findOrganById(organId);
  if (!organ) return;

  AppState.currentOrganId = organId;

  // 1. Update status visual pada SVG
  document.querySelectorAll('#svg-stage .organ-interactive').forEach(el => {
    if (el.dataset.organId === organId) {
      el.classList.add('is-selected');
    } else {
      el.classList.remove('is-selected');
    }
  });

  // 2. Update status tombol cepat
  document.querySelectorAll('.quick-organ-pill').forEach(pill => {
    if (pill.dataset.organId === organId) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  // 3. Update Label Indikator Organ Terpilih di Bawah Visual
  document.getElementById('active-organ-label').textContent = organ.name;

  // 4. Update Header Detail Organ
  document.getElementById('detail-organ-name').textContent = organ.name;
  document.getElementById('detail-latin-name').textContent = organ.latinName;
  document.getElementById('detail-analogy').textContent = `"${organ.analogy}"`;
  document.getElementById('detail-main-function').textContent = organ.mainFunction;
  document.getElementById('detail-health-fact').textContent = organ.healthFact;

  // Update Badge Sistem
  const badge = document.getElementById('detail-system-badge');
  if (AppState.currentSystem === 'respiratory') {
    badge.textContent = 'Saluran Pernapasan';
    badge.className = 'px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-100 text-sky-800';
  } else if (AppState.currentSystem === 'digestive') {
    badge.textContent = 'Saluran Pencernaan';
    badge.className = 'px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800';
  } else {
    badge.textContent = AppState.currentGender === 'male' ? 'Reproduksi & Urologi Pria' : 'Reproduksi & Urologi Wanita';
    badge.className = 'px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800';
  }

  // 5. Render Daftar Penyakit Terkait Organ Ini
  renderDiseaseTabsForOrgan(organ, targetDiseaseId);

  // Jika sedang membaca suara, hentikan suara lama
  if (window.speechSynthesis && window.speechSynthesis.speaking) {
    stopSpeaking();
  }
}

function findOrganById(organId) {
  for (const [key, sys] of Object.entries(ANATOMY_DATA)) {
    if (key === 'urology' || key === 'muscularFat') continue;
    const list = sys.organs || [...(sys.maleOrgans || []), ...(sys.femaleOrgans || [])];
    const found = list.find(o => o.id === organId);
    if (found) return found;
  }
  return null;
}

// ============================================================================
// 9. RENDER DAFTAR PENYAKIT & DETAIL KARTU PENYAKIT
// ============================================================================
function renderDiseaseTabsForOrgan(organ, diseaseIdToSelect) {
  const container = document.getElementById('disease-tab-buttons');
  container.innerHTML = '';

  // Filter penyakit jika ada kategori aktif
  let diseases = organ.diseases;
  if (AppState.activeCategoryFilter !== 'all') {
    // Cari yang cocok
    const filtered = diseases.filter(d => d.category === AppState.activeCategoryFilter);
    // Jika tidak ada yang cocok di organ ini, tetap tampilkan semua tapi beri penanda
    if (filtered.length > 0) {
      diseases = filtered;
    }
  }

  // Tentukan penyakit yang aktif
  let activeDisease = diseases[0];
  if (diseaseIdToSelect) {
    const found = organ.diseases.find(d => d.id === diseaseIdToSelect);
    if (found) activeDisease = found;
  }

  diseases.forEach(disease => {
    const btn = document.createElement('button');
    btn.className = `disease-tab-pill ${disease.id === activeDisease.id ? 'active' : ''}`;
    
    // Warna dot kategori
    let dotColor = 'bg-slate-400';
    if (disease.category === 'Infeksi') dotColor = 'bg-rose-500';
    if (disease.category === 'Peradangan') dotColor = 'bg-amber-500';
    if (disease.category === 'Gaya Hidup/Pola Makan') dotColor = 'bg-emerald-500';
    if (disease.category === 'Faktor Usia/Degeneratif') dotColor = 'bg-indigo-500';

    btn.innerHTML = `
      <span class="w-2 h-2 rounded-full ${dotColor}"></span>
      <span>${disease.name}</span>
    `;

    btn.addEventListener('click', () => {
      document.querySelectorAll('.disease-tab-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      displayDiseaseDetails(disease);
    });

    container.appendChild(btn);
  });

  // Tampilkan detail penyakit pertama
  displayDiseaseDetails(activeDisease);
}

function displayDiseaseDetails(disease) {
  if (!disease) return;
  AppState.currentDiseaseId = disease.id;

  // Title & Category Badge
  document.getElementById('disease-title').textContent = disease.name;
  
  const catBadge = document.getElementById('disease-category-badge');
  catBadge.textContent = `Kategori: ${disease.category}`;
  
  // Style warna badge kategori
  if (disease.category === 'Infeksi') {
    catBadge.className = 'px-3 py-1 rounded-full text-xs font-extrabold bg-rose-100 text-rose-800 border border-rose-300';
  } else if (disease.category === 'Peradangan') {
    catBadge.className = 'px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800 border border-amber-300';
  } else if (disease.category === 'Gaya Hidup/Pola Makan') {
    catBadge.className = 'px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300';
  } else {
    catBadge.className = 'px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-100 text-indigo-800 border border-indigo-300';
  }

  // Summary
  document.getElementById('disease-summary').textContent = disease.summary;

  // Retrieve clinical dossier
  const dossier = getClinicalDossier(disease.id);

  // Render Nomenklatur Medis Resmi & Kode ICD-10 Badge
  const medNomenclature = document.getElementById('disease-medical-nomenclature');
  if (medNomenclature) {
    if (dossier && dossier.medicalTerminology) {
      medNomenclature.innerHTML = `
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-900 border border-indigo-200 shadow-2xs">
          <i class="fa-solid fa-stethoscope text-indigo-600"></i>
          <span>Nomenklatur Medis: <em class="font-extrabold not-italic text-indigo-950">${dossier.medicalTerminology.formalDiagnosis}</em></span>
        </span>
        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-purple-100 text-purple-900 border border-purple-300 shadow-2xs">
          <i class="fa-solid fa-barcode text-purple-700"></i>
          <span>ICD-10: ${dossier.medicalTerminology.icd10}</span>
        </span>
      `;
    } else {
      medNomenclature.innerHTML = '';
    }
  }

  // 1. Gejala Khas
  const symptomsList = document.getElementById('disease-symptoms-list');
  symptomsList.innerHTML = disease.symptoms.map(s => `
    <li class="flex items-start gap-2.5">
      <span class="text-amber-600 mt-1 flex-shrink-0 text-sm"><i class="fa-solid fa-check"></i></span>
      <span>${s}</span>
    </li>
  `).join('');

  // 2. Penyebab Umum
  const causesList = document.getElementById('disease-causes-list');
  causesList.innerHTML = disease.causes.map(c => `
    <li class="flex items-start gap-2.5">
      <span class="text-slate-400 mt-1 flex-shrink-0 text-xs"><i class="fa-solid fa-circle"></i></span>
      <span>${c}</span>
    </li>
  `).join('');

  // 3. Tanda Bahaya (Ke Dokter)
  const warningList = document.getElementById('disease-warning-list');
  warningList.innerHTML = disease.warningSigns.map(w => `
    <li class="flex items-start gap-2.5">
      <span class="text-rose-600 mt-1 flex-shrink-0 text-sm"><i class="fa-solid fa-circle-exclamation"></i></span>
      <span>${w}</span>
    </li>
  `).join('');

  // 4. Perawatan & Gaya Hidup Sehat
  const careList = document.getElementById('disease-care-list');
  careList.innerHTML = disease.careTips.map(t => `
    <li class="flex items-start gap-2.5">
      <span class="text-emerald-600 mt-1 flex-shrink-0 text-sm"><i class="fa-solid fa-heart-pulse"></i></span>
      <span>${t}</span>
    </li>
  `).join('');

  // 5. Render Keterkaitan Lintas Sistem (Cross-Talk) pada Tampilan Ringkas
  const crossTalkContainer = document.getElementById('disease-crosstalk-simple');
  if (crossTalkContainer) {
    const ct = (dossier && dossier.systemCrossTalk) ? dossier.systemCrossTalk : null;
    if (ct) {
      crossTalkContainer.innerHTML = `
        <div class="space-y-2.5">
          <div class="p-2.5 rounded-lg bg-indigo-100/80 text-indigo-950 font-bold text-xs sm:text-sm flex items-center gap-2">
            <i class="fa-solid fa-arrows-split-up-and-left text-indigo-700 text-sm"></i>
            <span><strong>Hubungan Utama:</strong> ${ct.primaryLink}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            <strong>Mekanisme Silang:</strong> ${ct.biologicalMechanism}
          </p>
          <div class="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-950">
            <strong>Dampak Klinis Multiorgan:</strong> ${ct.clinicalImpact}
          </div>
          <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950">
            <strong>Pencegahan & Perlindungan:</strong> ${ct.prevention}
          </div>
        </div>
      `;
    } else {
      crossTalkContainer.innerHTML = `<p class="text-xs sm:text-sm text-slate-600">Interaksi lintas sistem tubuh dipantau secara klinis.</p>`;
    }
  }

  // 6. Render Istilah Medis Kunci & Terjemahan Awam (Kamus Dokter) pada Tampilan Ringkas
  const medTermsSimple = document.getElementById('disease-medical-terms-simple');
  if (medTermsSimple) {
    if (dossier && dossier.medicalTerminology && dossier.medicalTerminology.latinTerms && dossier.medicalTerminology.latinTerms.length > 0) {
      medTermsSimple.innerHTML = dossier.medicalTerminology.latinTerms.map((t, idx) => `
        <div class="p-2.5 rounded-lg bg-white border border-purple-100 shadow-2xs">
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded text-[11px] font-black uppercase tracking-wider bg-purple-100 text-purple-900 border border-purple-200 font-mono">
              ${idx + 1}. ${t.term}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            ${t.meaning}
          </p>
        </div>
      `).join('');
    } else {
      medTermsSimple.innerHTML = `<p class="text-xs sm:text-sm text-slate-600">Istilah medis dan nomenklatur tercatat dalam rekam medis klinis.</p>`;
    }
  }

  // Cek apakah penyakit atau organ ini berkaitan dengan Hati / Drainase Selang
  const currentOrgan = findOrganById(AppState.currentOrganId);
  const isLiverRelated = (currentOrgan && currentOrgan.id === 'hati-empedu') || 
                         ['drainase-selang-hati', 'batu-empedu', 'fatty-liver'].includes(disease.id);

  let liverBannerEl = document.getElementById('liver-spotlight-banner');
  if (isLiverRelated) {
    if (!liverBannerEl) {
      liverBannerEl = document.createElement('div');
      liverBannerEl.id = 'liver-spotlight-banner';
      liverBannerEl.className = 'p-3.5 bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-700 text-white rounded-2xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-4 border border-amber-300/40';
      const container = document.getElementById('detail-panel');
      if (container) {
        container.insertBefore(liverBannerEl, container.firstChild.nextSibling);
      }
    }

    let defaultProc = 'ptbd';
    let bannerTitle = 'Visualisasi Detail Hati & Prosedur Selang (HD)';
    let bannerSub = 'Buka diagram pembesaran organ hati, posisi selang PTBD, sedot abses, asites, dan JP drain.';

    if (disease.id === 'drainase-selang-hati') {
      defaultProc = 'ptbd';
      bannerTitle = '🔍 Lihat Simulasi 4 Macam Pemasangan Selang Hati';
      bannerSub = 'Amati posisi selang PTBD, kateter abses hati, cairan asites perut, dan JP drain pascaoperasi.';
    } else if (disease.id === 'batu-empedu') {
      defaultProc = 'ptbd';
      bannerTitle = '🔍 Lihat Sumbatan Batu Empedu & Selang PTBD';
      bannerSub = 'Amati bagaimana batu empedu menyumbat saluran dan selang PTBD dipasang untuk mengalirkan empedu.';
    }

    liverBannerEl.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-amber-200 text-lg flex-shrink-0 shadow-inner">
          <i class="fa-solid fa-microscope"></i>
        </span>
        <div>
          <h4 class="text-xs sm:text-sm font-extrabold text-white">${bannerTitle}</h4>
          <p class="text-[11px] text-amber-100 mt-0.5 leading-snug">${bannerSub}</p>
        </div>
      </div>
      <button id="btn-trigger-liver-spotlight" class="px-3.5 py-2 rounded-xl bg-white text-slate-900 font-extrabold text-xs shadow-md hover:bg-amber-50 transition flex items-center justify-center gap-1.5 flex-shrink-0 active:scale-95">
        <i class="fa-solid fa-arrow-up text-amber-600 text-xs"></i>
        <span>Buka Visual Hati HD</span>
      </button>
    `;

    const btnSpotlight = document.getElementById('btn-trigger-liver-spotlight');
    if (btnSpotlight) {
      btnSpotlight.addEventListener('click', () => {
        switchVisualViewMode('liver-hd', defaultProc);
        const visualCard = document.getElementById('visual-card');
        if (visualCard) {
          visualCard.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  } else {
    if (liverBannerEl) {
      if (typeof liverBannerEl.remove === 'function') liverBannerEl.remove();
      else if (liverBannerEl.parentNode) liverBannerEl.parentNode.removeChild(liverBannerEl);
    }
  }

  // Update link to table matrix page
  const btnMatrix = document.getElementById('btn-view-table-matrix');
  if (btnMatrix) {
    btnMatrix.href = `tabel-medis.html#card-${disease.id}`;
  }

  // Render Konten Medis Mendalam (jika tab mendalam aktif atau mode deep)
  renderDeepTabContent();
}

// ============================================================================
// 9B. MODE SWITCHER & KONTEN MEDIS MENDALAM (CLINICAL DOSSIER)
// ============================================================================
function switchMode(mode) {
  const btnSimple = document.getElementById('btn-mode-simple');
  const btnDeep = document.getElementById('btn-mode-deep');
  const viewSimple = document.getElementById('view-mode-simple');
  const viewDeep = document.getElementById('view-mode-deep');

  if (!btnSimple || !btnDeep || !viewSimple || !viewDeep) return;

  if (mode === 'deep') {
    AppState.infoMode = 'deep';
    btnDeep.className = "px-3 py-1.5 rounded-md text-xs font-bold transition flex items-center gap-1.5 active bg-indigo-600 text-white shadow-xs";
    btnSimple.className = "px-3 py-1.5 rounded-md text-xs font-bold text-slate-600 hover:text-slate-900 transition flex items-center gap-1.5";
    viewSimple.classList.add('hidden');
    viewDeep.classList.remove('hidden');
    renderDeepTabContent();
  } else {
    AppState.infoMode = 'simple';
    btnSimple.className = "px-3 py-1.5 rounded-md text-xs font-bold transition flex items-center gap-1.5 active bg-teal-600 text-white shadow-xs";
    btnDeep.className = "px-3 py-1.5 rounded-md text-xs font-bold text-slate-600 hover:text-slate-900 transition flex items-center gap-1.5";
    viewSimple.classList.remove('hidden');
    viewDeep.classList.add('hidden');
  }
}

function initModeSwitcher() {
  const btnSimple = document.getElementById('btn-mode-simple');
  const btnDeep = document.getElementById('btn-mode-deep');

  if (btnSimple) {
    btnSimple.addEventListener('click', () => switchMode('simple'));
  }
  if (btnDeep) {
    btnDeep.addEventListener('click', () => switchMode('deep'));
  }

  // Listener untuk Sub-Tab Navigasi di Mode Medis Mendalam
  const deepTabButtons = document.querySelectorAll('.deep-tab-btn');
  deepTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      deepTabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.activeDeepTab = btn.dataset.deeptab;
      renderDeepTabContent();
    });
  });
}

function getClinicalDossier(diseaseId) {
  if (typeof DEEP_CLINICAL_DATA !== 'undefined' && DEEP_CLINICAL_DATA[diseaseId]) {
    return DEEP_CLINICAL_DATA[diseaseId];
  }

  // Fallback sintesis medis terarah
  const currentOrgan = findOrganById(AppState.currentOrganId);
  const dis = currentOrgan ? currentOrgan.diseases.find(d => d.id === diseaseId) : null;
  const name = dis ? dis.name : "Kondisi Medis";

  return {
    pathophysiology: {
      cellularMechanism: `Proses patofisiologi pada ${name} melibatkan aktivasi jalur kaskade inflamasi jaringan lokal, pelepasan sitokin pro-inflamatori (IL-1, TNF-α), peningkatan permeabilitas endotel kapiler, serta kerusakan progresif barier epitel pada organ ${currentOrgan ? currentOrgan.name : 'terkait'}.`,
      geriatricFactor: `Proses penuaan intrinsik (immunosenescence, berkurangnya cadangan fisiologis organ / homeostenosis, dan penurunan klirens mikrovaskular) membuat respon perbaikan seluler lansia melambat nyata.`,
      organImpact: `Penurunan kapasitas adaptasi struktural organ yang memicu risiko dekompensasi akut bila terpapar stresor fisik atau infeksi sekunder.`
    },
    geriatricSymptoms: {
      classical: dis ? dis.symptoms.slice(0, 2).join("; ") : "Gejala khas organ terkait",
      atypicalGeriatric: "Sering bermanifestasi sebagai 'Geriatric Giants': Delirium akut (linglung mendadak), anoreksia berat, kelemahan umum ekstrem (letargi), dan risiko jatuh berulang tanpa demam atau nyeri yang mencolok.",
      whyDifferent: "Penurunan sensitivitas termoregulasi pirogenik di hipotalamus dan neuropati otonom sensorik geriatri meredam keluhan klasik."
    },
    staging: {
      scoreName: `Klasifikasi Derajat Keparahan Medis: ${name}`,
      stages: [
        { level: "Stadium 1 (Ringan / Terkompensasi)", criteria: "Gejala intermiten, parameter fungsional organ masih dalam batas adaptif normal.", risk: "Risiko komplikasi rendah - Terapi konservatif rawat jalan." },
        { level: "Stadium 2 (Sedang / Progresif)", criteria: "Gejala mengganggu fungsi harian, terdapat kelainan biomarker laboratorium/radiologi nyata.", risk: "Risiko eksaserbasi - Memerlukan penyesuaian medikamentosa ketat." },
        { level: "Stadium 3 (Berat / Dekompensata)", criteria: "Disfungsi organ bermakna, penurunan drastis kualitas hidup, risiko kegagalan multiorgan.", risk: "Risiko mortalitas tinggi - Indikasi rawat inap dan intervensi spesialis segera." }
      ]
    },
    diagnostic: {
      labTests: [
        { test: "Darah Lengkap & Biomarker Inflamasi", param: "Leukositosis/leukopenia, Laju Endap Darah (LED), dan C-Reactive Protein (CRP kuantitatif) untuk memantau intensitas inflamasi." },
        { test: "Fungsi Ginjal & Elektrolit", param: "Ureum, Kreatinin serum, eGFR (formula CKD-EPI), dan elektrolit (Na, K, Cl) untuk panduan penyesuaian dosis obat." }
      ],
      imaging: `Pencitraan radiologi USG / Rontgen toraks-abdomen terarah untuk menilai integritas parenkim organ ${currentOrgan ? currentOrgan.name : ''}.`,
      goldStandard: "Evaluasi klinis terintegrasi dengan pemeriksaan penunjang baku emas laboratorium dan radiologi."
    },
    pharmacotherapy: {
      primaryDrugs: `Farmakoterapi terarah sesuai pedoman klinis untuk ${name} (agen anti-inflamasi, pengatur tonus otot polos, atau antibiotik terarah).`,
      beersCriteria: "PERINGATAN KRITERIA BEERS: Waspadai polifarmasi geriatri! Hindari analgesik NSAID non-selektif dosis tinggi dan obat antikolinergik kuat yang memicu delirium, gagal ginjal akut, perdarahan lambung, atau retensi urin.",
      monitoring: "Pemantauan rutin fungsi ginjal (Kreatinin/eGFR), fungsi hepar (SGOT/SGPT), dan tekanan darah ortostatik."
    },
    clinicalNutrition: {
      macroMicro: "Energi 30 kkal/kgBB/hari, protein berkualitas tinggi 1.2 g/kgBB/hari (kecuali restriksi ginjal), mikronutrien antioksidan, dan cairan 30 mL/kgBB terukur.",
      recommendedFoods: "Ikan laut dalam (omega-3), kaldu tulang, telur rebus, sayuran hijau kukus, pepaya matang, dan beras merah tumbuk.",
      contraindicatedFoods: "Makanan ultra-proses tinggi garam (natrium >2000 mg/hari), gorengan minyak jelantah, dan minuman pemanis buatan."
    },
    emergency: {
      immediateTriggers: dis ? dis.warningSigns.join("; ") : "Penurunan kesadaran mendadak, sesak napas berat (SpO2 <92%), hipotensi (tensi sistolik <90 mmHg), atau nyeri hebat tak tertahankan.",
      firstAidHome: "Posisikan lansia setengah duduk, pastikan jalan napas bebas, jangan berikan makanan/cairan per oral saat linglung, segera hubungi ambulans IGD."
    },
    rehabilitation: {
      physicalExercises: "Mobilisasi dini bertahap, latihan pernapasan diafragma teratur, dan latihan penguatan otot postural untuk mencegah sarkopenia.",
      homeModifications: "Penerangan kamar tidur cukup di malam hari, pasang pegangan dinding (grab bars) di toilet, dan singkirkan karpet licin di lantai."
    },
    systemCrossTalk: {
      primaryLink: "Interaksi Sistemik Multi-Organ",
      biologicalMechanism: `Interaksi antara organ ${currentOrgan ? currentOrgan.name : ''} dengan sistem saraf pusat, pernapasan, pencernaan, metabolik dan muskuloskeletal.`,
      clinicalImpact: "Risiko sindrom kerapuhan (frailty syndrome) dan kegagalan kompensasi multiorgan pada lansia.",
      prevention: "Evaluasi klinis menyeluruh dan pendekatan multidisiplin geriatri terintegrasi."
    },
    medicalTerminology: {
      formalDiagnosis: `${name} (Nomenklatur Klinis Standar)`,
      icd10: "R69",
      latinTerms: [
        { term: "Pathologia Organi", meaning: `Gangguan struktur atau fungsi pada organ tubuh ${currentOrgan ? currentOrgan.name : ''}.` },
        { term: "Aetiologia", meaning: "Penyebab mendasar timbulnya penyakit atau kondisi klinis." },
        { term: "Prognosis", meaning: "Perkiraan perkembangan dan pemulihan kondisi kesehatan pasien di masa depan." },
        { term: "Homeostasis", meaning: "Keseimbangan fisiologis dinamis dalam tubuh manusia yang terganggu saat sakit." },
        { term: "Syndroma Geriatrica", meaning: "Kumpulan gejala khas pada usia lanjut akibat penurunan cadangan fungsional tubuh." }
      ]
    }
  };
}

function renderDeepTabContent() {
  const container = document.getElementById('deep-tab-content-area');
  if (!container) return;

  const dossier = getClinicalDossier(AppState.currentDiseaseId);
  const tab = AppState.activeDeepTab;

  if (tab === 'pathophysiology') {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="clinical-card border-l-4 border-l-teal-600 bg-teal-50/30">
          <span class="clinical-badge bg-teal-100 text-teal-800 mb-2">
            <i class="fa-solid fa-dna"></i> Mekanisme Seluler & Molekuler
          </span>
          <p class="text-sm sm:text-base text-slate-800 leading-relaxed font-medium mt-1">
            ${dossier.pathophysiology.cellularMechanism}
          </p>
        </div>

        <div class="clinical-card border-l-4 border-l-indigo-600 bg-indigo-50/30">
          <span class="clinical-badge bg-indigo-100 text-indigo-800 mb-2">
            <i class="fa-solid fa-user-clock"></i> Faktor Kerentanan Geriatri (Immunosenescence & Penuaan)
          </span>
          <p class="text-sm sm:text-base text-slate-800 leading-relaxed font-medium mt-1">
            ${dossier.pathophysiology.geriatricFactor}
          </p>
        </div>

        <div class="clinical-card border-l-4 border-l-slate-600 bg-slate-50/50">
          <span class="clinical-badge bg-slate-200 text-slate-800 mb-2">
            <i class="fa-solid fa-lungs-virus"></i> Dampak Struktural Organ & Kompensasi Sistemik
          </span>
          <p class="text-sm sm:text-base text-slate-800 leading-relaxed font-medium mt-1">
            ${dossier.pathophysiology.organImpact}
          </p>
        </div>
      </div>
    `;
  } else if (tab === 'geriatric-symptoms') {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="clinical-card border-2 border-slate-200 bg-white">
            <span class="clinical-badge bg-slate-100 text-slate-800 mb-2">
              <i class="fa-solid fa-user"></i> Gejala Klasik (Dewasa Muda)
            </span>
            <p class="text-sm text-slate-700 leading-relaxed font-medium mt-2">
              ${dossier.geriatricSymptoms.classical}
            </p>
          </div>

          <div class="clinical-card border-2 border-sky-300 bg-sky-50/40">
            <span class="clinical-badge bg-sky-100 text-sky-900 mb-2 font-black">
              <i class="fa-solid fa-user-doctor"></i> Gejala Khas & Atipikal Lansia (Geriatric Giants)
            </span>
            <p class="text-sm text-sky-950 leading-relaxed font-bold mt-2">
              ${dossier.geriatricSymptoms.atypicalGeriatric}
            </p>
          </div>
        </div>

        <div class="clinical-card border-l-4 border-l-amber-500 bg-amber-50/40">
          <span class="clinical-badge bg-amber-100 text-amber-900 mb-1">
            <i class="fa-solid fa-circle-question"></i> Mengapa Gejala pada Lansia Berbeda?
          </span>
          <p class="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium mt-1">
            ${dossier.geriatricSymptoms.whyDifferent}
          </p>
        </div>
      </div>
    `;
  } else if (tab === 'staging') {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-3 bg-amber-100/70 border border-amber-300 rounded-xl text-xs sm:text-sm font-bold text-amber-950 flex items-center gap-2">
          <i class="fa-solid fa-chart-line text-amber-700 text-base"></i>
          <span>${dossier.staging.scoreName}</span>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table class="diag-table">
            <thead>
              <tr>
                <th class="w-1/4">Tingkat / Stadium</th>
                <th class="w-1/2">Kriteria Klinis & Diagnostik</th>
                <th class="w-1/4">Tingkat Risiko & Rekomendasi</th>
              </tr>
            </thead>
            <tbody>
              ${dossier.staging.stages.map(s => `
                <tr>
                  <td class="font-bold text-teal-900 bg-teal-50/20">${s.level}</td>
                  <td class="text-slate-800 leading-relaxed font-medium">${s.criteria}</td>
                  <td class="text-xs text-rose-800 font-semibold bg-rose-50/30">${s.risk}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (tab === 'diagnostic') {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="clinical-card border-l-4 border-l-purple-600 bg-purple-50/20">
          <span class="clinical-badge bg-purple-100 text-purple-900 mb-2">
            <i class="fa-solid fa-vial"></i> Panel Pemeriksaan Laboratorium & Nilai Kritis
          </span>
          <div class="space-y-2.5 mt-2">
            ${dossier.diagnostic.labTests.map(l => `
              <div class="p-2.5 rounded-lg bg-white border border-purple-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs sm:text-sm">
                <strong class="text-purple-950 font-bold">${l.test}:</strong>
                <span class="text-slate-700 font-medium">${l.param}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="clinical-card border-l-4 border-l-blue-600 bg-blue-50/20">
          <span class="clinical-badge bg-blue-100 text-blue-900 mb-2">
            <i class="fa-solid fa-x-ray"></i> Pemeriksaan Radiologi & Pencitraan
          </span>
          <p class="text-sm text-slate-800 leading-relaxed font-medium mt-1">
            ${dossier.diagnostic.imaging}
          </p>
        </div>

        <div class="p-3.5 rounded-xl bg-emerald-50 border-2 border-emerald-300 text-emerald-950 text-xs sm:text-sm font-bold flex items-center gap-2.5">
          <i class="fa-solid fa-award text-emerald-600 text-lg"></i>
          <div>
            <span class="block text-xs uppercase tracking-wide text-emerald-800">Baku Emas Diagnosis (Gold Standard):</span>
            <span class="text-sm font-extrabold text-emerald-950">${dossier.diagnostic.goldStandard}</span>
          </div>
        </div>
      </div>
    `;
  } else if (tab === 'pharmacotherapy') {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="clinical-card border-l-4 border-l-teal-600 bg-white">
          <span class="clinical-badge bg-teal-100 text-teal-900 mb-2">
            <i class="fa-solid fa-prescription-bottle-medical"></i> Regimen Farmakoterapi Lini Pertama
          </span>
          <p class="text-sm sm:text-base text-slate-800 leading-relaxed font-medium mt-1">
            ${dossier.pharmacotherapy.primaryDrugs}
          </p>
        </div>

        <div class="beers-warning-box shadow-xs">
          <div class="flex items-start gap-2.5">
            <span class="text-amber-600 text-lg flex-shrink-0 mt-0.5"><i class="fa-solid fa-triangle-exclamation"></i></span>
            <div>
              <strong class="text-xs sm:text-sm font-black text-amber-950 uppercase tracking-wide block">
                Peringatan Polifarmasi & Kriteria Beers Geriatri (Beers Criteria Alert):
              </strong>
              <p class="text-xs sm:text-sm text-amber-950 leading-relaxed font-semibold mt-1">
                ${dossier.pharmacotherapy.beersCriteria}
              </p>
            </div>
          </div>
        </div>

        <div class="clinical-card border-l-4 border-l-slate-500 bg-slate-50">
          <span class="clinical-badge bg-slate-200 text-slate-800 mb-1">
            <i class="fa-solid fa-heart-pulse"></i> Parameter Pemantauan Rutin (Safety Monitoring)
          </span>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mt-1">
            ${dossier.pharmacotherapy.monitoring}
          </p>
        </div>
      </div>
    `;
  } else if (tab === 'clinical-nutrition') {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="clinical-card border-l-4 border-l-emerald-600 bg-emerald-50/20">
          <span class="clinical-badge bg-emerald-100 text-emerald-900 mb-2">
            <i class="fa-solid fa-scale-balanced"></i> Pedoman Makro & Mikronutrien Terarah
          </span>
          <p class="text-sm text-slate-800 leading-relaxed font-medium mt-1">
            ${dossier.clinicalNutrition.macroMicro}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="clinical-card border-2 border-emerald-300 bg-emerald-50/40">
            <span class="clinical-badge bg-emerald-200 text-emerald-900 mb-2 font-bold">
              <i class="fa-solid fa-check"></i> Makanan Terapeutik yang Dianjurkan
            </span>
            <p class="text-xs sm:text-sm text-emerald-950 leading-relaxed font-semibold mt-1">
              ${dossier.clinicalNutrition.recommendedFoods}
            </p>
          </div>

          <div class="clinical-card border-2 border-rose-300 bg-rose-50/40">
            <span class="clinical-badge bg-rose-200 text-rose-900 mb-2 font-bold">
              <i class="fa-solid fa-ban"></i> Makanan Pantangan Mutlak (Kontraindikasi)
            </span>
            <p class="text-xs sm:text-sm text-rose-950 leading-relaxed font-semibold mt-1">
              ${dossier.clinicalNutrition.contraindicatedFoods}
            </p>
          </div>
        </div>
      </div>
    `;
  } else if (tab === 'emergency') {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-4 rounded-xl border-2 border-rose-500 bg-rose-50 shadow-xs">
          <div class="flex items-start gap-3">
            <div class="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center text-lg flex-shrink-0 mt-0.5">
              <i class="fa-solid fa-truck-medical"></i>
            </div>
            <div>
              <h5 class="text-sm sm:text-base font-black text-rose-950 uppercase tracking-wide">
                Kriteria Triase Merah / Indikasi Rujukan Segera ke IGD:
              </h5>
              <p class="text-sm text-rose-950 leading-relaxed font-bold mt-1.5">
                ${dossier.emergency.immediateTriggers}
              </p>
            </div>
          </div>
        </div>

        <div class="clinical-card border-l-4 border-l-amber-600 bg-amber-50/30">
          <span class="clinical-badge bg-amber-100 text-amber-900 mb-2">
            <i class="fa-solid fa-kit-medical"></i> Protokol Pertolongan Pertama di Rumah oleh Keluarga
          </span>
          <p class="text-sm text-slate-800 leading-relaxed font-medium mt-1">
            ${dossier.emergency.firstAidHome}
          </p>
        </div>
      </div>
    `;
  } else if (tab === 'rehabilitation') {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="clinical-card border-l-4 border-l-blue-600 bg-blue-50/20">
          <span class="clinical-badge bg-blue-100 text-blue-900 mb-2">
            <i class="fa-solid fa-person-walking"></i> Latihan Fisik & Fisioterapi Terarah
          </span>
          <p class="text-sm sm:text-base text-slate-800 leading-relaxed font-medium mt-1">
            ${dossier.rehabilitation.physicalExercises}
          </p>
        </div>

        <div class="clinical-card border-l-4 border-l-teal-600 bg-teal-50/20">
          <span class="clinical-badge bg-teal-100 text-teal-900 mb-2">
            <i class="fa-solid fa-house-chimney-medical"></i> Modifikasi Lingkungan & Keselamatan Rumah
          </span>
          <p class="text-sm sm:text-base text-slate-800 leading-relaxed font-medium mt-1">
            ${dossier.rehabilitation.homeModifications}
          </p>
        </div>
      </div>
    `;
  } else if (tab === 'cross-talk') {
    const ct = dossier.systemCrossTalk || {
      primaryLink: "Interaksi Sistemik Multi-Organ",
      biologicalMechanism: "Interaksi timbal balik antara sistem saraf, pernapasan, pencernaan, urologi, metabolik dan muskuloskeletal.",
      clinicalImpact: "Penyakit pada satu organ berisiko memicu kaskade kerapuhan komplikasi multiorgan.",
      prevention: "Evaluasi holistik menyeluruh dan penanganan geriatri multidisiplin terintegrasi."
    };
    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-3.5 bg-indigo-100 border border-indigo-300 rounded-xl text-xs sm:text-sm font-extrabold text-indigo-950 flex items-center gap-2.5">
          <i class="fa-solid fa-network-wired text-indigo-700 text-lg"></i>
          <div>
            <span class="block text-[11px] uppercase tracking-wider text-indigo-700">Hubungan Primer Antar-Sistem:</span>
            <span class="text-sm font-black text-indigo-950">${ct.primaryLink}</span>
          </div>
        </div>

        <div class="clinical-card border-l-4 border-l-indigo-600 bg-white">
          <span class="clinical-badge bg-indigo-100 text-indigo-900 mb-2">
            <i class="fa-solid fa-dna"></i> Mekanisme Biologis & Kaskade Patofisiologi Silang
          </span>
          <p class="text-sm sm:text-base text-slate-800 leading-relaxed font-medium mt-1">
            ${ct.biologicalMechanism}
          </p>
        </div>

        <div class="clinical-card border-l-4 border-l-rose-600 bg-rose-50/30">
          <span class="clinical-badge bg-rose-100 text-rose-900 mb-2 font-bold">
            <i class="fa-solid fa-triangle-exclamation"></i> Dampak Klinis & Bahaya Penyakit Ganda
          </span>
          <p class="text-sm sm:text-base text-rose-950 leading-relaxed font-semibold mt-1">
            ${ct.clinicalImpact}
          </p>
        </div>

        <div class="clinical-card border-l-4 border-l-emerald-600 bg-emerald-50/30">
          <span class="clinical-badge bg-emerald-100 text-emerald-900 mb-2 font-bold">
            <i class="fa-solid fa-shield-heart"></i> Strategi Pencegahan & Kolaborasi Multidisiplin
          </span>
          <p class="text-sm sm:text-base text-emerald-950 leading-relaxed font-semibold mt-1">
            ${ct.prevention}
          </p>
        </div>
      </div>
    `;
  } else if (tab === 'medical-terminology') {
    const med = dossier.medicalTerminology || {
      formalDiagnosis: "Diagnosis Klinis Umum",
      icd10: "R69",
      latinTerms: []
    };
    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-4 bg-purple-100/80 border-2 border-purple-300 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-2xs">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center text-lg flex-shrink-0 mt-0.5">
              <i class="fa-solid fa-file-medical"></i>
            </div>
            <div>
              <span class="block text-xs uppercase tracking-wider text-purple-700 font-bold">Nomenklatur Diagnosis Klinis Resmi (Latin / Internasional):</span>
              <h5 class="text-base sm:text-lg font-black text-purple-950">${med.formalDiagnosis}</h5>
            </div>
          </div>
          <div class="flex-shrink-0 self-start sm:self-center">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-black bg-purple-900 text-white border border-purple-800 shadow-xs">
              <i class="fa-solid fa-barcode text-purple-300"></i>
              <span>Kode ICD-10: ${med.icd10}</span>
            </span>
          </div>
        </div>

        <div class="clinical-card border-l-4 border-l-purple-600 bg-white">
          <span class="clinical-badge bg-purple-100 text-purple-900 mb-2 font-bold">
            <i class="fa-solid fa-book-bookmark"></i> Matriks Nomenklatur Latin, Yunani & Terminologi Patologi
          </span>
          <p class="text-xs sm:text-sm text-slate-600 mb-3 font-medium">
            Berikut adalah istilah medis resmi yang digunakan dokter dalam rekam medis, rujukan spesialis, dan laporan laboratorium, beserta penjelasan artinya dalam bahasa yang mudah dipahami keluarga:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${med.latinTerms.map((t, idx) => `
              <div class="p-3 rounded-xl border border-purple-200 bg-purple-50/30 hover:bg-purple-50/60 transition shadow-2xs">
                <div class="flex items-center justify-between gap-2 mb-1.5">
                  <span class="text-xs font-black text-purple-900 font-mono tracking-tight bg-purple-200/80 px-2 py-0.5 rounded border border-purple-300">
                    ${idx + 1}. ${t.term}
                  </span>
                  <span class="text-[10px] font-bold text-purple-600 uppercase">Terminologi Medis</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  ${t.meaning}
                </p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium flex items-center gap-2.5">
          <i class="fa-solid fa-circle-info text-indigo-600 text-base flex-shrink-0"></i>
          <span>
            <strong>Manfaat untuk Keluarga Lansia:</strong> Mengetahui istilah medis dan kode ICD-10 membantu keluarga saat berkonsultasi dengan dokter spesialis, mengurus klaim asuransi kesehatan (BPJS/Swasta), dan membaca ringkasan pulang (resume medis).
          </span>
        </div>
      </div>
    `;
  }
}

// ============================================================================
// 10. FILTER KATEGORI PENYAKIT (INFEKSI, PERADANGAN, DLL.)
// ============================================================================
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.cat-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      AppState.activeCategoryFilter = btn.dataset.category;
      applyCategoryFilter();
    });
  });
}

function applyCategoryFilter() {
  const filterCat = AppState.activeCategoryFilter;
  const currentOrgans = getOrgansListForActiveSystem();
  const matchBadge = document.getElementById('disease-category-match-badge');

  if (filterCat === 'all') {
    matchBadge.classList.add('hidden');
    // Normalisasi semua organ di SVG
    document.querySelectorAll('#svg-stage .organ-interactive').forEach(el => {
      el.classList.remove('is-dimmed', 'is-category-match');
    });
    return;
  }

  // Tampilkan badge filter aktif
  matchBadge.textContent = `Menyaring Kategori: ${filterCat}`;
  matchBadge.classList.remove('hidden');

  let firstMatchingOrganId = null;

  // Periksa tiap organ di sistem aktif
  currentOrgans.forEach(organ => {
    const hasMatchingDisease = organ.diseases.some(d => d.category === filterCat);
    const organSvgEl = document.getElementById(`svg-${organ.id}`);

    if (organSvgEl) {
      if (hasMatchingDisease) {
        organSvgEl.classList.remove('is-dimmed');
        organSvgEl.classList.add('is-category-match');
        if (!firstMatchingOrganId) firstMatchingOrganId = organ.id;
      } else {
        organSvgEl.classList.remove('is-category-match');
        organSvgEl.classList.add('is-dimmed');
      }
    }
  });

  // Refresh tab penyakit di organ aktif saat ini
  const currentOrgan = findOrganById(AppState.currentOrganId);
  if (currentOrgan) {
    renderDiseaseTabsForOrgan(currentOrgan);
  }
}

// ============================================================================
// 11. PENCARIAN INSTAN GEJALA & ORGAN
// ============================================================================
function initSearch() {
  const searchInput = document.getElementById('search-input');
  const resultsDropdown = document.getElementById('search-results-dropdown');
  const btnClear = document.getElementById('btn-clear-search');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query.length < 2) {
      resultsDropdown.classList.add('hidden');
      btnClear.classList.add('hidden');
      return;
    }

    btnClear.classList.remove('hidden');
    const matches = performSearch(query);
    renderSearchResults(matches, query);
  });

  btnClear.addEventListener('click', () => {
    searchInput.value = '';
    btnClear.classList.add('hidden');
    resultsDropdown.classList.add('hidden');
    searchInput.focus();
  });

  // Tutup dropdown jika klik di luar
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !resultsDropdown.contains(e.target)) {
      resultsDropdown.classList.add('hidden');
    }
  });
}

function performSearch(query) {
  const results = [];
  const systemConfigs = [
    { id: 'skeletal', organs: ANATOMY_DATA.skeletal.organs, gender: 'male' },
    { id: 'muscular', organs: ANATOMY_DATA.muscular.organs, gender: 'male' },
    { id: 'cardiovascular', organs: ANATOMY_DATA.cardiovascular.organs, gender: 'male' },
    { id: 'digestive', organs: ANATOMY_DATA.digestive.organs, gender: 'male' },
    { id: 'respiratory', organs: ANATOMY_DATA.respiratory.organs, gender: 'male' },
    { id: 'nervous', organs: ANATOMY_DATA.nervous.organs, gender: 'male' },
    { id: 'endocrine', organs: ANATOMY_DATA.endocrine.organs, gender: 'male' },
    { id: 'excretory', organs: ANATOMY_DATA.excretory.organs, gender: 'male' },
    { id: 'immune', organs: ANATOMY_DATA.immune.organs, gender: 'male' },
    { id: 'lymphatic', organs: ANATOMY_DATA.lymphatic.organs, gender: 'male' },
    { id: 'integumentary', organs: ANATOMY_DATA.integumentary.organs, gender: 'male' },
    { id: 'reproductive', organs: ANATOMY_DATA.reproductive.maleOrgans, gender: 'male' },
    { id: 'reproductive', organs: ANATOMY_DATA.reproductive.femaleOrgans, gender: 'female' }
  ];

  systemConfigs.forEach(sys => {
    sys.organs.forEach(organ => {
      // Cek Nama Organ & Analogi
      if (organ.name.toLowerCase().includes(query) || organ.analogy.toLowerCase().includes(query)) {
        results.push({
          type: 'organ',
          title: organ.name,
          subtitle: 'Organ pada ' + getSystemLabel(sys.id, sys.gender),
          systemId: sys.id,
          gender: sys.gender,
          organId: organ.id,
          diseaseId: organ.diseases[0].id
        });
      }

      // Cek Tiap Penyakit, Gejala, & Data Klinis Mendalam
      organ.diseases.forEach(dis => {
        const matchesName = dis.name.toLowerCase().includes(query);
        const matchesSymptom = dis.symptoms.some(s => s.toLowerCase().includes(query));
        const matchesSummary = dis.summary.toLowerCase().includes(query);

        let matchesDeep = false;
        let deepNote = '';
        if (typeof DEEP_CLINICAL_DATA !== 'undefined' && DEEP_CLINICAL_DATA[dis.id]) {
          const cd = DEEP_CLINICAL_DATA[dis.id];
          const cdStr = JSON.stringify(cd).toLowerCase();
          if (cdStr.includes(query)) {
            matchesDeep = true;
            deepNote = 'Protokol Klinis / Lab / ICD-10: "' + query + '" cocok';
          }
        }

        if (matchesName || matchesSymptom || matchesSummary || matchesDeep) {
          let sub = 'Penyakit di organ ' + organ.name;
          if (matchesSymptom) {
            sub = 'Gejala cocok: "' + findMatchingSnippet(dis.symptoms, query) + '"';
          } else if (matchesDeep) {
            sub = deepNote;
          }

          results.push({
            type: 'disease',
            title: dis.name,
            subtitle: sub,
            systemId: sys.id,
            gender: sys.gender,
            organId: organ.id,
            diseaseId: dis.id
          });
        }
      });
    });
  });

  return results;
}

function findMatchingSnippet(symptoms, query) {
  const match = symptoms.find(s => s.toLowerCase().includes(query));
  return match ? (match.length > 55 ? match.substring(0, 52) + '...' : match) : '';
}

function getSystemLabel(systemId, gender) {
  const map = {
    skeletal: '1. Rangka (Kerangka)',
    muscular: '2. Otot (Muskular)',
    muscularFat: '2. Otot (Muskular)',
    cardiovascular: '3. Peredaran Darah',
    digestive: '4. Saluran Pencernaan',
    respiratory: '5. Saluran Pernapasan',
    nervous: '6. Sistem Saraf',
    endocrine: '7. Sistem Endokrin',
    excretory: '8. Ekskresi / Urinaria',
    immune: '9. Sistem Kekebalan (Imun)',
    lymphatic: '10. Sistem Limfatik',
    integumentary: '11. Sistem Integumen',
    reproductive: (gender === 'male' ? '12. Reproduksi Pria' : '12. Reproduksi Wanita'),
    urology: (gender === 'male' ? '12. Reproduksi Pria' : '12. Reproduksi Wanita')
  };
  return map[systemId] || 'Sistem Tubuh';
}

function renderSearchResults(matches, query) {
  const dropdown = document.getElementById('search-results-dropdown');
  if (matches.length === 0) {
    dropdown.innerHTML = `
      <div class="p-4 text-center text-sm text-slate-500">
        <i class="fa-solid fa-magnifying-glass mb-1 text-slate-400 block text-lg"></i>
        Tidak ditemukan keluhan dengan kata kunci "<strong>${query}</strong>". Coba kata lain seperti <em>sesak, lambung, batuk, ginjal</em>.
      </div>
    `;
    dropdown.classList.remove('hidden');
    return;
  }

  dropdown.innerHTML = matches.map(item => `
    <div class="search-result-item p-3 border-b border-slate-100 last:border-0 hover:bg-teal-50/70 cursor-pointer transition flex items-start gap-3" 
         data-system="${item.systemId}" data-gender="${item.gender}" data-organ="${item.organId}" data-disease="${item.diseaseId}">
      <span class="w-7 h-7 rounded-lg ${item.type === 'organ' ? 'bg-sky-100 text-sky-700' : 'bg-rose-100 text-rose-700'} flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
        <i class="fa-solid ${item.type === 'organ' ? 'fa-lungs' : 'fa-stethoscope'}"></i>
      </span>
      <div>
        <strong class="text-sm text-slate-900 block font-bold">${item.title}</strong>
        <span class="text-xs text-slate-500 leading-tight">${item.subtitle}</span>
      </div>
    </div>
  `).join('');

  dropdown.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('click', () => {
      const sys = el.dataset.system;
      const gen = el.dataset.gender;
      const org = el.dataset.organ;
      const dis = el.dataset.disease;

      // Update Tab Sistem
      document.querySelectorAll('.sys-tab-btn').forEach(btn => {
        if (btn.dataset.system === sys) {
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
        } else {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        }
      });

      // Update Gender jika Urologi
      if (sys === 'urology') {
        AppState.currentGender = gen;
        const btnMale = document.getElementById('btn-gender-male');
        const btnFemale = document.getElementById('btn-gender-female');
        if (gen === 'male') {
          btnMale.classList.add('active');
          btnFemale.classList.remove('active');
        } else {
          btnFemale.classList.add('active');
          btnMale.classList.remove('active');
        }
      }

      loadSystem(sys, org, dis);
      dropdown.classList.add('hidden');
      document.getElementById('search-input').value = '';
      document.getElementById('btn-clear-search').classList.add('hidden');

      // Scroll halus ke kartu detail
      document.getElementById('detail-panel').scrollIntoView({ behavior: 'smooth' });
    });
  });

  dropdown.classList.remove('hidden');
}

// ============================================================================
// 12. TEXT-TO-SPEECH (PEMBACA SUARA INDONESIA UNTUK LANSIA)
// ============================================================================
function initSpeechSynthesis() {
  const btnSpeak = document.getElementById('btn-speak-organ');
  if (!('speechSynthesis' in window)) {
    btnSpeak.title = 'Fitur suara tidak didukung pada browser ini';
    return;
  }

  btnSpeak.addEventListener('click', () => {
    if (AppState.isSpeaking) {
      stopSpeaking();
    } else {
      startSpeaking();
    }
  });
}

function startSpeaking() {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel(); // Bersihkan antrean lama

  const organ = findOrganById(AppState.currentOrganId);
  if (!organ) return;

  const currentDisease = organ.diseases.find(d => d.id === AppState.currentDiseaseId) || organ.diseases[0];

  // Susun teks narasi ramah telinga
  const textNarrative = `
    Penjelasan organ ${organ.name}.
    Analogi sederhana: ${organ.analogy}.
    Fungsi utama: ${organ.mainFunction}.
    Penyakit terkait yang sering terjadi: ${currentDisease.name}.
    Gejalanya meliputi: ${currentDisease.symptoms.slice(0, 2).join(', dan ')}.
    Kapan harus ke dokter: ${currentDisease.warningSigns.slice(0, 2).join(', serta ')}.
  `;

  const utterance = new SpeechSynthesisUtterance(textNarrative);
  utterance.lang = 'id-ID';
  utterance.rate = 0.9; // Sedikit lebih lambat agar jelas untuk lansia
  utterance.pitch = 1.0;

  // Coba cari suara berbahasa Indonesia
  const voices = window.speechSynthesis.getVoices();
  const idVoice = voices.find(v => v.lang === 'id-ID' || v.lang.startsWith('id'));
  if (idVoice) {
    utterance.voice = idVoice;
  }

  utterance.onstart = () => {
    AppState.isSpeaking = true;
    updateTtsUi(true);
  };

  utterance.onend = () => {
    AppState.isSpeaking = false;
    updateTtsUi(false);
  };

  utterance.onerror = () => {
    AppState.isSpeaking = false;
    updateTtsUi(false);
  };

  window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  AppState.isSpeaking = false;
  updateTtsUi(false);
}

function updateTtsUi(isSpeaking) {
  const btnSpeak = document.getElementById('btn-speak-organ');
  const ttsIcon = document.getElementById('tts-icon');
  const ttsLabel = document.getElementById('tts-label');

  if (isSpeaking) {
    btnSpeak.classList.add('tts-speaking');
    ttsIcon.className = 'fa-solid fa-volume-xmark text-base text-amber-300';
    ttsLabel.textContent = 'Hentikan Suara';
  } else {
    btnSpeak.classList.remove('tts-speaking');
    ttsIcon.className = 'fa-solid fa-volume-high text-base text-white';
    ttsLabel.textContent = 'Dengarkan Suara';
  }
}

// ============================================================================
// 13. MODAL PETUNJUK & CETAK RINGKASAN
// ============================================================================
function initModalAndPrint() {
  // Modal Petunjuk
  const helpModal = document.getElementById('help-modal');
  const btnOpenHelp = document.getElementById('btn-open-help');
  const btnCloseHelp = document.getElementById('btn-close-help');
  const btnUnderstood = document.getElementById('btn-understood');

  btnOpenHelp.addEventListener('click', () => helpModal.classList.remove('hidden'));
  btnCloseHelp.addEventListener('click', () => helpModal.classList.add('hidden'));
  btnUnderstood.addEventListener('click', () => helpModal.classList.add('hidden'));

  // Cetak Ringkasan untuk Dokter
  document.getElementById('btn-print-summary').addEventListener('click', () => {
    const organ = findOrganById(AppState.currentOrganId);
    const disease = organ ? (organ.diseases.find(d => d.id === AppState.currentDiseaseId) || organ.diseases[0]) : null;

    if (!organ || !disease) return;

    const dossier = getClinicalDossier(disease.id);

    // Masukkan data ke print-sheet
    const printSheet = document.getElementById('print-sheet');
    printSheet.innerHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 850px; margin: auto; padding: 20px; color: #1e293b;">
        <div style="border-bottom: 2px solid #0d9488; padding-bottom: 10px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <h1 style="color: #0f766e; margin: 0; font-size: 22px;">AnatomiSehat - Lembar Ringkasan Edukasi & Klinis Geriatri</h1>
            <p style="color: #64748b; margin: 4px 0 0; font-size: 12px;">Bahan Konsultasi Dokter, Edukasi Keluarga, & Pemantauan Perawatan Pasien Lansia.</p>
          </div>
          <span style="font-size: 11px; color: #0f766e; font-weight: bold; border: 1px solid #0d9488; padding: 3px 8px; border-radius: 4px;">Edisi Medis Terpadu</span>
        </div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 15px;">
          <h2 style="font-size: 18px; color: #0f172a; margin: 0 0 4px;">Organ: ${organ.name} <span style="font-size: 13px; color: #64748b; font-style: italic;">(${organ.latinName})</span></h2>
          <p style="font-size: 13px; color: #b45309; margin: 0 0 6px;"><strong>Analogi Awam:</strong> "${organ.analogy}"</p>
          <p style="font-size: 12px; color: #334155; margin: 0;"><strong>Fungsi Utama:</strong> ${organ.mainFunction}</p>
        </div>

        <div style="border-left: 4px solid #ef4444; padding-left: 10px; margin-bottom: 15px;">
          <h3 style="font-size: 17px; color: #b91c1c; margin: 0 0 4px;">
            Masalah / Diagnosis: ${disease.name} <span style="font-size: 12px; background: #fee2e2; color: #991b1b; padding: 2px 6px; border-radius: 4px;">Kategori: ${disease.category}</span>
          </h3>
          <p style="font-size: 13px; color: #334155; margin: 0; line-height: 1.5;">${disease.summary}</p>
        </div>

        <!-- Patofisiologi & Mekanisme -->
        <div style="background: #f0fdfa; border: 1px solid #99f6e4; border-radius: 6px; padding: 10px; margin-bottom: 12px; font-size: 12px; line-height: 1.5;">
          <strong style="color: #0f766e; display: block; margin-bottom: 3px;">🔬 Patofisiologi & Kerentanan Geriatri:</strong>
          <p style="margin: 0 0 4px;">${dossier.pathophysiology.cellularMechanism}</p>
          <p style="margin: 0; color: #047857;"><strong>Faktor Lansia:</strong> ${dossier.pathophysiology.geriatricFactor}</p>
        </div>

        <!-- Perbandingan Gejala Klasik vs Lansia -->
        <div style="display: flex; gap: 10px; margin-bottom: 12px;">
          <div style="flex: 1; border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; font-size: 12px;">
            <strong style="color: #334155; display: block; margin-bottom: 4px;">Gejala Klasik (Dewasa Muda):</strong>
            <p style="margin: 0; color: #475569;">${dossier.geriatricSymptoms.classical}</p>
          </div>
          <div style="flex: 1; border: 1px solid #7dd3fc; background: #f0f9ff; border-radius: 6px; padding: 10px; font-size: 12px;">
            <strong style="color: #0369a1; display: block; margin-bottom: 4px;">⚠️ Gejala Khas/Atipikal Lansia (Geriatric Giants):</strong>
            <p style="margin: 0; color: #0c4a6e; font-weight: bold;">${dossier.geriatricSymptoms.atypicalGeriatric}</p>
          </div>
        </div>

        <!-- Stadium Klinis -->
        <div style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px; margin-bottom: 12px; font-size: 12px;">
          <strong style="color: #b45309; display: block; margin-bottom: 4px;">📊 ${dossier.staging.scoreName}:</strong>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.5;">
            ${dossier.staging.stages.map(s => `<li><strong>${s.level}:</strong> ${s.criteria} <em>(${s.risk})</em></li>`).join('')}
          </ul>
        </div>

        <!-- Kriteria Beers & Farmakoterapi -->
        <div style="background: #fffbeb; border: 1.5px solid #f59e0b; border-radius: 6px; padding: 10px; margin-bottom: 12px; font-size: 12px;">
          <strong style="color: #78350f; display: block; margin-bottom: 3px;">💊 Peringatan Polifarmasi & Kriteria Beers Geriatri:</strong>
          <p style="margin: 0 0 4px; color: #92400e; font-weight: bold;">${dossier.pharmacotherapy.beersCriteria}</p>
          <p style="margin: 0; color: #451a03;"><strong>Lini Terapi Utama:</strong> ${dossier.pharmacotherapy.primaryDrugs}</p>
        </div>

        <!-- Tanda Bahaya IGD -->
        <div style="background: #fff1f2; border: 1.5px solid #f43f5e; border-radius: 6px; padding: 10px; margin-bottom: 12px; font-size: 12px;">
          <strong style="color: #9f1239; display: block; margin-bottom: 3px;">🚨 Tanda Bahaya - Kriteria Triase Merah IGD Segera:</strong>
          <p style="margin: 0; color: #881337; font-weight: bold;">${dossier.emergency.immediateTriggers}</p>
        </div>

        <!-- Nutrisi & Tips Rawat Rumah -->
        <div style="display: flex; gap: 10px; margin-bottom: 15px; font-size: 12px;">
          <div style="flex: 1; border: 1px solid #a7f3d0; background: #ecfdf5; border-radius: 6px; padding: 8px;">
            <strong style="color: #065f46;">🥗 Nutrisi yang Dianjurkan:</strong>
            <p style="margin: 3px 0 0; color: #047857;">${dossier.clinicalNutrition.recommendedFoods}</p>
          </div>
          <div style="flex: 1; border: 1px solid #fecdd3; background: #fff1f2; border-radius: 6px; padding: 8px;">
            <strong style="color: #9f1239;">🚫 Makanan Pantangan Mutlak:</strong>
            <p style="margin: 3px 0 0; color: #be123c;">${dossier.clinicalNutrition.contraindicatedFoods}</p>
          </div>
        </div>

        <div style="margin-top: 20px; border-top: 1px dashed #94a3b8; padding-top: 10px; font-size: 11px; color: #64748b; display: flex; justify-content: space-between;">
          <span>Nama Pasien Lansia: ..............................................................</span>
          <span>Tanggal Periksa: .............................</span>
          <span>Tanda Tangan Dokter: .............................</span>
        </div>
      </div>
    `;

    window.print();
  });
}

function initFloatingTopButton() {
  const btn = document.getElementById('btn-floating-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// ============================================================================
// 12. PENGENDALI VISUALISASI KHUSUS HATI & 4 PROSEDUR SELANG HEPATOBILIER
// ============================================================================
function initLiverVisualizer() {
  const btnTorso = document.getElementById('btn-view-torso');
  const btnLiver = document.getElementById('btn-view-liver-hd');

  if (btnTorso) {
    btnTorso.addEventListener('click', () => {
      switchVisualViewMode('torso');
    });
  }

  if (btnLiver) {
    btnLiver.addEventListener('click', () => {
      switchVisualViewMode('liver-hd', AppState.liverProcedureMode || 'ptbd');
    });
  }

  // Listener untuk Tombol-tombol Prosedur Selang Hati
  const procButtons = document.querySelectorAll('.liver-proc-btn');
  procButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const proc = btn.dataset.proc;
      renderLiverStudio(proc);
    });
  });
}

function switchVisualViewMode(mode, procId) {
  AppState.visualViewMode = mode;
  const btnTorso = document.getElementById('btn-view-torso');
  const btnLiver = document.getElementById('btn-view-liver-hd');
  const procBar = document.getElementById('liver-procedures-bar');
  const procCard = document.getElementById('liver-procedure-info-card');
  const modeTag = document.getElementById('visual-mode-indicator');
  const instructionText = document.getElementById('visual-instruction-text');
  const activeOrganLabel = document.getElementById('active-organ-label');

  if (mode === 'liver-hd') {
    if (btnLiver && btnTorso) {
      btnLiver.classList.add('active');
      btnTorso.classList.remove('active');
    }
    if (procBar) {
      procBar.classList.remove('hidden');
      procBar.classList.add('flex');
    }
    if (procCard) procCard.classList.remove('hidden');
    if (modeTag) modeTag.classList.remove('hidden');
    if (instructionText) {
      instructionText.innerHTML = '<i class="fa-solid fa-microscope text-amber-600 mr-1"></i>Diagram Pembesaran Hati & 4 Jenis Selang Drainase';
    }

    // Jika belum berada di pencernaan, pindahkan ke sistem pencernaan
    if (AppState.currentSystem !== 'digestive') {
      AppState.currentSystem = 'digestive';
      document.querySelectorAll('.sys-tab-btn').forEach(t => {
        if (t.dataset.system === 'digestive') {
          t.classList.add('active');
          t.setAttribute('aria-selected', 'true');
        } else {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        }
      });
      const visualTag = document.getElementById('visual-system-tag');
      if (visualTag) {
        visualTag.textContent = '4. Saluran Pencernaan';
        visualTag.className = 'text-xs font-extrabold uppercase tracking-wide text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md';
      }
    }

    renderLiverStudio(procId || AppState.liverProcedureMode || 'ptbd');
  } else {
    // Mode Torso
    if (btnTorso && btnLiver) {
      btnTorso.classList.add('active');
      btnLiver.classList.remove('active');
    }
    if (procBar) {
      procBar.classList.add('hidden');
      procBar.classList.remove('flex');
    }
    if (procCard) procCard.classList.add('hidden');
    if (modeTag) modeTag.classList.add('hidden');
    if (instructionText) {
      instructionText.innerHTML = '<i class="fa-regular fa-hand-pointer text-teal-600 mr-1"></i>Klik organ untuk melihat penjelasan';
    }

    loadSystem(AppState.currentSystem, AppState.currentOrganId, AppState.currentDiseaseId);
  }
}

function renderLiverStudio(procId) {
  AppState.liverProcedureMode = procId;

  // Sinkronisasi status tombol prosedur
  document.querySelectorAll('.liver-proc-btn').forEach(btn => {
    if (btn.dataset.proc === procId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Render SVG Pembesaran Hati HD
  const svgStage = document.getElementById('svg-stage');
  if (svgStage && typeof generateLiverDetailSvg === 'function') {
    svgStage.innerHTML = generateLiverDetailSvg(procId);
  }

  // Update Active Organ Label
  const activeOrganLabel = document.getElementById('active-organ-label');
  if (activeOrganLabel) {
    const titles = {
      normal: 'Hati & Saluran Empedu Sehat (Normal)',
      ptbd: 'Hati: Selang PTBD (Sumbatan Empedu)',
      abses: 'Hati: Selang Abses Nanah (Pigtail)',
      asites: 'Hati: Selang Asites Perut (Sirosis)',
      'pasca-operasi': 'Hati: Selang Bedah JP Drain'
    };
    activeOrganLabel.textContent = titles[procId] || 'Hati & Kantung Empedu (HD)';
  }

  // Render Info Card Prosedur Selang di Bawah Gambar
  const procCard = document.getElementById('liver-procedure-info-card');
  if (procCard && typeof LIVER_PROCEDURES_DATA !== 'undefined' && LIVER_PROCEDURES_DATA[procId]) {
    const d = LIVER_PROCEDURES_DATA[procId];
    procCard.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/60 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-md text-xs font-black uppercase tracking-wide ${d.badgeCls} border shadow-2xs">
            ${d.title}
          </span>
        </div>
        <span class="text-[11px] font-mono text-slate-500 italic font-semibold">
          ${d.latinTitle}
        </span>
      </div>

      <p class="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
        ${d.summary}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-1">
        <div class="p-2.5 rounded-xl bg-white border border-amber-200 shadow-2xs">
          <span class="text-[11px] font-extrabold uppercase text-amber-800 flex items-center gap-1.5 mb-1">
            <i class="fa-solid fa-circle-question text-amber-600"></i>
            Mengapa Selang Dipasang?
          </span>
          <p class="text-xs text-slate-700 leading-relaxed font-medium">
            ${d.whyNeeded}
          </p>
        </div>

        <div class="p-2.5 rounded-xl bg-white border border-blue-200 shadow-2xs">
          <span class="text-[11px] font-extrabold uppercase text-blue-800 flex items-center gap-1.5 mb-1">
            <i class="fa-solid fa-droplet text-blue-600"></i>
            Ciri Cairan yang Keluar
          </span>
          <p class="text-xs text-slate-700 leading-relaxed font-medium">
            ${d.fluidColor}
          </p>
        </div>
      </div>

      <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
        <span class="text-xs font-extrabold uppercase flex items-center gap-1.5 mb-1.5 text-emerald-900">
          <i class="fa-solid fa-heart-circle-check text-emerald-600"></i>
          Panduan Perawatan di Rumah untuk Lansia & Keluarga:
        </span>
        <ul class="text-xs space-y-1 font-medium">
          ${d.homeCareTips.map(t => `<li class="flex items-start gap-1.5"><i class="fa-solid fa-check text-emerald-600 mt-0.5 text-[10px]"></i><span>${t}</span></li>`).join('')}
        </ul>
      </div>

      <div class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-950">
        <span class="text-xs font-extrabold uppercase flex items-center gap-1.5 mb-1.5 text-rose-900">
          <i class="fa-solid fa-triangle-exclamation text-rose-600"></i>
          Kapan Harus Segera ke UGD / Dokter?
        </span>
        <ul class="text-xs space-y-1 font-medium">
          ${d.warningSigns.map(w => `<li class="flex items-start gap-1.5"><i class="fa-solid fa-exclamation text-rose-600 mt-0.5 text-[10px]"></i><span>${w}</span></li>`).join('')}
        </ul>
      </div>
    `;
  }
}
