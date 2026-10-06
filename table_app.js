/**
 * table_app.js - Pengendali Katalog & Tabel Matriks Medis Komprehensif
 * ====================================================================
 * Berisi katalog seluruh organ dan penyakit beserta tabel sub-konten klinis:
 * - Patofisiologi & Seluler
 * - Komparasi Gejala Klasik vs Atipikal Lansia (Geriatric Giants)
 * - Sistem Skor & Stadium Medis
 * - Diagnostic Workup (Baku Emas Lab & Radiologi)
 * - Farmakoterapi & Peringatan Kriteria Beers
 * - Protokol Nutrisi Klinis
 * - Kriteria Triase Merah IGD
 * - Rehabilitasi & Prosedur Khusus (Termasuk Selang Hati PTBD / Abses / Asites)
 */

// ============================================================================
// 1. DATA KATALOG LENGKAP PENYAKIT & ORGAN
// ============================================================================
const TABLE_CATALOG_DATA = [
  {
    "id": "spondilosis-servikal",
    "name": "Spondilosis Servikal (Pengapuran Bantalan Leher)",
    "organId": "tulang-leher",
    "organName": "Vertebra Servikal (Tulang Leher)",
    "latinName": "Vertebrae Cervicales (C1 - C7)",
    "systemId": "skeletal",
    "systemLabel": "1. Rangka (Kerangka)",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Tulang leher ibarat pilar penyangga menara yang menahan bola seberat 5 kilogram (kepala kita) dan mampu berputar bebas ke segala arah.",
    "summary": "Proses degeneratif penuaan pada diskus dan sendi faset leher yang memicu pembentukan taji tulang (osteofit) dan penyempitan saluran saraf leher."
  },
  {
    "id": "osteoporosis-vertebra",
    "name": "Osteoporosis Vertebra & Fraktur Kompresi",
    "organId": "tulang-punggung",
    "organName": "Tulang Belakang (Torakalis & Lumbalis)",
    "latinName": "Columna Vertebralis (Torakalis & Lumbalis)",
    "systemId": "skeletal",
    "systemLabel": "1. Rangka (Kerangka)",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Tulang belakang ibarat tiang utama fondasi rumah bertingkat. Jika semennya keropos (kalsium berkurang), tiang bisa retak dan ambles perlahan.",
    "summary": "Penurunan densitas massa tulang belakang drastis yang membuat korpus vertebra rapuh dan rentan amblas (fraktur kompresi) hanya karena beban harian."
  },
  {
    "id": "osteoartritis-panggul",
    "name": "Osteoartritis Panggul (Coxarthrosis)",
    "organId": "tulang-panggul",
    "organName": "Panggul & Sendi Koksa (Pelvis)",
    "latinName": "Pelvis & Articulatio Coxae",
    "systemId": "skeletal",
    "systemLabel": "1. Rangka (Kerangka)",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Panggul ibarat mangkuk fondasi penopang tubuh bagian atas dan engsel kokoh yang menyalurkan seluruh berat badan ke kedua kaki.",
    "summary": "Keausan kronis tulang rawan pada sendi panggul (pertemuan mangkuk asetabulum dan kepala tulang paha) yang menimbulkan nyeri pangkal paha dan langkah pincang."
  },
  {
    "id": "osteoartritis-lutut",
    "name": "Osteoartritis Lutut (Gonarthrosis)",
    "organId": "tulang-sendi-lutut",
    "organName": "Sendi Lutut (Articulatio Genu)",
    "latinName": "Articulatio Genu & Patella",
    "systemId": "skeletal",
    "systemLabel": "1. Rangka (Kerangka)",
    "category": "Peradangan",
    "analogy": "Sendi lutut ibarat engsel pintu utama dengan bantalan busa peredam kejut (meniskus) dan oli pelumas alami (cairan sendi).",
    "summary": "Peradangan dan kerusakan progresif tulang rawan hialin sendi lutut yang menyebabkan penyempitan celah sendi, krepitasi, dan deformitas bentuk kaki 'O' atau 'X'."
  },
  {
    "id": "artritis-gout",
    "name": "Artritis Gout (Asam Urat Akut & Kronis)",
    "organId": "sendi-ekstremitas",
    "organName": "Sendi Perifer & Jari Kaki",
    "latinName": "Articulationes Periphericae & Metatarsophalangea",
    "systemId": "skeletal",
    "systemLabel": "1. Rangka (Kerangka)",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Sendi jari kaki ibarat engsel halus presisi. Jika timbul tumpukan kristal asam urat, rasanya seperti engsel ditaburi serpihan jarum kaca runcing.",
    "summary": "Artritis inflamasi metabolik yang dipicu oleh penumpukan kristal monosodium urat pada rongga sendi akibat kadar asam urat darah tinggi (hiperurisemia)."
  },
  {
    "id": "sarkopenia",
    "name": "Sarkopenia (Penyusutan Massa & Kekuatan Otot)",
    "organId": "otot-rangka",
    "organName": "Otot Rangka Utama (Muskuloskeletal)",
    "latinName": "Musculi Sceleti",
    "systemId": "muscular",
    "systemLabel": "2. Otot (Muskular)",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Otot rangka ibarat mesin pendorong dan rangka pelindung tubuh. Otot menopang tulang kita berdiri tegak, memompa darah saat melangkah, dan menjadi tangki penyerap gula terbesar tubuh.",
    "summary": "Kehilangan massa, kualitas, dan kekuatan otot rangka yang membuat lansia mudah lelah, lambat berjalan, dan rentan jatuh."
  },
  {
    "id": "kram-otot-nokturnal",
    "name": "Kram Otot Kaki Malam Hari (Nocturnal Leg Cramps)",
    "organId": "otot-rangka",
    "organName": "Otot Rangka Utama (Muskuloskeletal)",
    "latinName": "Musculi Sceleti",
    "systemId": "muscular",
    "systemLabel": "2. Otot (Muskular)",
    "category": "Peradangan",
    "analogy": "Otot rangka ibarat mesin pendorong dan rangka pelindung tubuh. Otot menopang tulang kita berdiri tegak, memompa darah saat melangkah, dan menjadi tangki penyerap gula terbesar tubuh.",
    "summary": "Kejang otot betis atau telapak kaki yang mendadak mengeras kaku dan sangat menyakitkan di tengah tidur malam."
  },
  {
    "id": "polimialgia-reumatika",
    "name": "Polimialgia Reumatika (Nyeri Kaku Otot Bahu & Panggul)",
    "organId": "otot-rangka",
    "organName": "Otot Rangka Utama (Muskuloskeletal)",
    "latinName": "Musculi Sceleti",
    "systemId": "muscular",
    "systemLabel": "2. Otot (Muskular)",
    "category": "Peradangan",
    "analogy": "Otot rangka ibarat mesin pendorong dan rangka pelindung tubuh. Otot menopang tulang kita berdiri tegak, memompa darah saat melangkah, dan menjadi tangki penyerap gula terbesar tubuh.",
    "summary": "Penyakit peradangan autoimun pada lansia yang memicu nyeri hebat dan rasa kaku berat pada otot bahu, leher, dan pinggul."
  },
  {
    "id": "obesitas-viseral",
    "name": "Obesitas Viseral (Penumpukan Lemak Perut Dalam)",
    "organId": "lemak-viseral",
    "organName": "Lemak Viseral (Rongga Perut Dalam)",
    "latinName": "Adeps Visceralis",
    "systemId": "muscular",
    "systemLabel": "2. Otot (Muskular)",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Lemak viseral adalah lemak yang membungkus organ dalam di balik dinding perut. Ibarat bantalan peredam kejut alami, namun jika berlebih akan berubah menjadi pabrik racun pemicu radang pembuluh darah.",
    "summary": "Penumpukan sel lemak aktif di sekitar organ dalam perut yang memicu sindrom metabolik, fatty liver, dan penyakit jantung."
  },
  {
    "id": "obesitas-sarkopenik",
    "name": "Obesitas Sarkopenik (Penipisan Otot Tertutup Lemak)",
    "organId": "lemak-subkutan",
    "organName": "Lemak Subkutan & Komposisi Tubuh",
    "latinName": "Adeps Subcutaneus",
    "systemId": "muscular",
    "systemLabel": "2. Otot (Muskular)",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Lemak subkutan adalah lapisan selimut lemak lembut tepat di bawah kulit. Lapisan ini menjaga suhu tubuh tetap hangat dan menjadi cadangan energi darurat.",
    "summary": "Kombinasi berbahaya ketika massa otot tubuh telah habis menyusut, namun tertutup oleh lapisan lemak tubuh yang tebal menggelambir."
  },
  {
    "id": "penyakit-jantung-koroner",
    "name": "Penyakit Jantung Koroner (PJK & Serangan Jantung)",
    "organId": "jantung-koroner",
    "organName": "Otot & Arteri Koroner Jantung",
    "latinName": "Myocardium & Arteriae Coronariae",
    "systemId": "cardiovascular",
    "systemLabel": "3. Peredaran Darah (Kardiovaskular)",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Arteri koroner ibarat pipa selang bensin khusus yang menyuplai bahan bakar ke mesin pompa jantung itu sendiri agar tidak mogok.",
    "summary": "Penyempitan atau penyumbatan pembuluh darah utama penyuplai otot jantung akibat tumpukan plak kolesterol (aterosklerosis) yang memicu iskemia miokard."
  },
  {
    "id": "gagal-jantung",
    "name": "Gagal Jantung Kongestif Geriatri (HFpEF & HFrEF)",
    "organId": "ventrikel-jantung",
    "organName": "Ventrikel Kiri Jantung (Ruang Pompa Utama)",
    "latinName": "Ventriculus Sinister Cordis",
    "systemId": "cardiovascular",
    "systemLabel": "3. Peredaran Darah (Kardiovaskular)",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Ventrikel kiri ibarat mesin pompa jet air berkekuatan tinggi yang mendorong air bersih naik ke seluruh penjuru gedung bertingkat.",
    "summary": "Ketidakmampuan otot ventrikel memompa atau mengisi darah secara adekuat untuk memenuhi kebutuhan metabolik tubuh, menyebabkan bendungan cairan di paru dan tungkai."
  },
  {
    "id": "fibrilasi-atrium",
    "name": "Fibrilasi Atrium (Aritmia Detak Jantung Kacau)",
    "organId": "sistem-konduksi-jantung",
    "organName": "Sistem Listrik Jantung (Nodus SA & Atrium)",
    "latinName": "Systema Conducens Cordis & Atrium Cordis",
    "systemId": "cardiovascular",
    "systemLabel": "3. Peredaran Darah (Kardiovaskular)",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Nodus SA ibarat dirigen orkestra atau busi listrik yang memercikkan ritme detak jantung agar ketukannya stabil 60 sampai 100 kali per menit.",
    "summary": "Gangguan irama listrik bilik atas jantung (atrium) yang bergetar cepat dan kacau tanpa koordinasi, menyebabkan detak ventrikel menjadi tidak teratur."
  },
  {
    "id": "hipertensi-geriatri",
    "name": "Hipertensi Geriatri & Kekakuan Arteri",
    "organId": "pembuluh-arteri",
    "organName": "Aorta & Arteri Sistemik",
    "latinName": "Aorta & Arteriae Systemicae",
    "systemId": "cardiovascular",
    "systemLabel": "3. Peredaran Darah (Kardiovaskular)",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Arteri ibarat pipa elastis bertekanan tinggi. Di usia muda lentur seperti selang karet baru, di usia tua mengeras seperti pipa paralon kaku.",
    "summary": "Peningkatan tekanan darah persisten pada lansia yang didorong oleh hilangnya elastisitas elastin dinding pembuluh arteri besar dan peningkatan resistensi vaskular perifer."
  },
  {
    "id": "trombosis-dvt",
    "name": "Trombosis Vena Dalam (DVT & Emboli Paru)",
    "organId": "pembuluh-vena",
    "organName": "Pembuluh Balik (Vena Dalam Tungkai)",
    "latinName": "Venae Profundae Extremitatis Inferioris",
    "systemId": "cardiovascular",
    "systemLabel": "3. Peredaran Darah (Kardiovaskular)",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Vena tungkai ibarat pipa drainase bawah tanah yang dilengkapi katup satu arah agar aliran air tidak jatuh merembes balik ke bawah.",
    "summary": "Pembentukan bekuan darah (trombus) di dalam pembuluh darah vena dalam tungkai (paha atau betis) yang berisiko lepas dan menyumbat arteri paru-paru."
  },
  {
    "id": "gerd",
    "name": "GERD (Penyakit Asam Lambung Naik)",
    "organId": "mulut-esofagus",
    "organName": "Mulut & Kerongkongan (Esofagus)",
    "latinName": "Cavum Oris & Oesophagus",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Kerongkongan ibarat pipa perosotan berpintu katup satu arah. Makanan diremas turun ke lambung, dan katup di bawahnya mencegah asam naik kembali.",
    "summary": "Kelemahan pada klep bawah kerongkongan membuat asam lambung berbalik naik ke atas, menimbulkan rasa panas terbakar di dada."
  },
  {
    "id": "disfagia",
    "name": "Disfagia (Sulit Menelan pada Lansia)",
    "organId": "mulut-esofagus",
    "organName": "Mulut & Kerongkongan (Esofagus)",
    "latinName": "Cavum Oris & Oesophagus",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Kerongkongan ibarat pipa perosotan berpintu katup satu arah. Makanan diremas turun ke lambung, dan katup di bawahnya mencegah asam naik kembali.",
    "summary": "Kelemahan saraf atau otot tenggorokan yang membuat proses menelan makanan atau obat menjadi sulit dan berisiko tersedak."
  },
  {
    "id": "maag-gastritis",
    "name": "Maag (Gastritis / Radang Lambung)",
    "organId": "lambung",
    "organName": "Lambung (Gaster)",
    "latinName": "Gaster / Stomach",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Peradangan",
    "analogy": "Lambung ibarat panci masak berasam kuat yang mengaduk dan menghancurkan makanan padat menjadi bubur halus sebelum disalurkan ke usus.",
    "summary": "Iritasi dan peradangan pada dinding bagian dalam lambung, menimbulkan rasa perih dan kembung."
  },
  {
    "id": "tukak-lambung",
    "name": "Tukak Lambung (Luka Dinding Lambung)",
    "organId": "lambung",
    "organName": "Lambung (Gaster)",
    "latinName": "Gaster / Stomach",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Peradangan",
    "analogy": "Lambung ibarat panci masak berasam kuat yang mengaduk dan menghancurkan makanan padat menjadi bubur halus sebelum disalurkan ke usus.",
    "summary": "Luka atau borok terbuka pada lapisan dalam dinding lambung akibat terkikis oleh asam lambung yang berlebih."
  },
  {
    "id": "batu-empedu",
    "name": "Batu Empedu (Kolelitiasis)",
    "organId": "hati-empedu",
    "organName": "Hati & Kantung Empedu",
    "latinName": "Hepar & Vesica Fellea",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Hati ibarat pabrik penyaring racun dan pembersih darah terbesar, sedangkan kantung empedu adalah botol semprot pengencer lemak makanan.",
    "summary": "Pengendapan kolesterol atau garam empedu di dalam kantung empedu hingga membentuk butiran batu keras yang menyumbat saluran."
  },
  {
    "id": "fatty-liver",
    "name": "Perlemakan Hati (Fatty Liver)",
    "organId": "hati-empedu",
    "organName": "Hati & Kantung Empedu",
    "latinName": "Hepar & Vesica Fellea",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Hati ibarat pabrik penyaring racun dan pembersih darah terbesar, sedangkan kantung empedu adalah botol semprot pengencer lemak makanan.",
    "summary": "Penumpukan sel lemak berlebih di dalam jaringan hati yang dapat memicu peradangan dan pengerasan jaringan hati jika dibiarkan."
  },
  {
    "id": "drainase-selang-hati",
    "name": "Pemasangan Selang Hati & Drainase Empedu (PTBD, Abses & Asites)",
    "organId": "hati-empedu",
    "organName": "Hati & Kantung Empedu",
    "latinName": "Hepar & Vesica Fellea",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Peradangan",
    "analogy": "Hati ibarat pabrik penyaring racun dan pembersih darah terbesar, sedangkan kantung empedu adalah botol semprot pengencer lemak makanan.",
    "summary": "Pemasangan selang kateter drainase khusus pada area hati/kantung empedu karena ada cairan yang tersumbat, menumpuk, atau terinfeksi yang harus segera dialirkan keluar agar tidak merusak organ hati dan membahayakan nyawa."
  },
  {
    "id": "diabetes-tipe-2",
    "name": "Diabetes Melitus Tipe 2 (Disfungsi Pankreas)",
    "organId": "pankreas",
    "organName": "Pankreas",
    "latinName": "Pancreas",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Pankreas ibarat kunci pengatur energi tubuh. Organ ini menghasilkan enzim cerna dan hormon insulin agar gula darah tidak melonjak tinggi.",
    "summary": "Penurunan produksi dan resistensi kerja hormon insulin pankreas, membuat kadar gula menumpuk berbahaya di pembuluh darah."
  },
  {
    "id": "pankreatitis",
    "name": "Pankreatitis (Radang Kelenjar Pankreas)",
    "organId": "pankreas",
    "organName": "Pankreas",
    "latinName": "Pancreas",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Peradangan",
    "analogy": "Pankreas ibarat kunci pengatur energi tubuh. Organ ini menghasilkan enzim cerna dan hormon insulin agar gula darah tidak melonjak tinggi.",
    "summary": "Peradangan serius pada kelenjar pankreas akibat enzim pencernaan aktif terlalu dini dan merusak jaringan pankreas itu sendiri."
  },
  {
    "id": "malabsorpsi",
    "name": "Malabsorpsi Nutrisi & Diare Kronis",
    "organId": "usus-halus",
    "organName": "Usus Halus",
    "latinName": "Intestinum Tenue",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Usus halus ibarat lorong penyerap sari makanan terpanjang (panjang sekitar 6 meter). Dindingnya penuh jonjot halus yang menyedot vitamin, protein, dan tenaga untuk tubuh.",
    "summary": "Kegagalan dinding usus halus dalam menyerap nutrisi makanan, menyebabkan tinja berminyak, penurunan berat badan, dan anemia."
  },
  {
    "id": "sembelit-kronis",
    "name": "Sembelit / Konstipasi Kronis Lansia",
    "organId": "usus-besar",
    "organName": "Usus Besar & Rektum",
    "latinName": "Colon & Rectum",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Usus besar ibarat tempat pengeringan dan penampungan akhir. Organ ini menyerap kelebihan air dari ampas makanan lalu membentuk tinja yang padat dan rapi.",
    "summary": "Kotoran menjadi sangat keras dan kering sehingga sulit dikeluarkan, buang air besar kurang dari 3 kali dalam seminggu."
  },
  {
    "id": "divertikulitis",
    "name": "Divertikulitis (Radang Kantung Usus)",
    "organId": "usus-besar",
    "organName": "Usus Besar & Rektum",
    "latinName": "Colon & Rectum",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Peradangan",
    "analogy": "Usus besar ibarat tempat pengeringan dan penampungan akhir. Organ ini menyerap kelebihan air dari ampas makanan lalu membentuk tinja yang padat dan rapi.",
    "summary": "Terbentuknya kantung-kantung kecil menonjol pada dinding usus besar lansia yang kemudian meradang atau terinfeksi kotoran yang terjebak."
  },
  {
    "id": "apendisitis",
    "name": "Radang Usus Buntu (Apendisitis)",
    "organId": "apendiks",
    "organName": "Usus Buntu (Apendiks)",
    "latinName": "Appendix Vermiformis",
    "systemId": "digestive",
    "systemLabel": "Saluran Pencernaan",
    "category": "Peradangan",
    "analogy": "Usus buntu ibarat pipa buntuk kecil seukuran jari kelingking di pertemuan usus halus dan usus besar. Meski kecil, jika tersumbat ampas keras dapat meradang hebat.",
    "summary": "Penyumbatan dan peradangan mendadak pada umbai cacing usus buntu yang membutuhkan tindakan medis segera."
  },
  {
    "id": "ispa",
    "name": "ISPA (Infeksi Saluran Pernapasan Akut)",
    "organId": "rongga-hidung",
    "organName": "Rongga Hidung & Faring",
    "latinName": "Cavum Nasi & Pharynx",
    "systemId": "respiratory",
    "systemLabel": "Saluran Pernapasan",
    "category": "Infeksi",
    "analogy": "Rongga hidung ibarat mesin AC dan penyaring udara alami. Bulu halus dan lendir di dalamnya menghangatkan, melembapkan, dan menjerat debu kotor sebelum udara masuk ke paru-paru.",
    "summary": "Infeksi mendadak pada hidung, sinus, atau tenggorokan yang disebabkan oleh virus flu atau bakteri."
  },
  {
    "id": "rinitis-alergi",
    "name": "Rinitis Alergi & Sinusitis",
    "organId": "rongga-hidung",
    "organName": "Rongga Hidung & Faring",
    "latinName": "Cavum Nasi & Pharynx",
    "systemId": "respiratory",
    "systemLabel": "Saluran Pernapasan",
    "category": "Peradangan",
    "analogy": "Rongga hidung ibarat mesin AC dan penyaring udara alami. Bulu halus dan lendir di dalamnya menghangatkan, melembapkan, dan menjerat debu kotor sebelum udara masuk ke paru-paru.",
    "summary": "Peradangan pada rongga hidung dan rongga sinus akibat sensitivitas berlebih terhadap debu rumah, serbuk sari, atau udara dingin."
  },
  {
    "id": "trakeitis-laringitis",
    "name": "Laringitis & Radang Batang Tenggorok",
    "organId": "trakea",
    "organName": "Tenggorokan (Trakea)",
    "latinName": "Trachea",
    "systemId": "respiratory",
    "systemLabel": "Saluran Pernapasan",
    "category": "Peradangan",
    "analogy": "Trakea ibarat pipa saluran utama yang kokoh dengan cincin tulang rawan pelindung. Saluran ini menjaga jalan napas tetap terbuka lebar setiap saat.",
    "summary": "Peradangan pada pita suara dan pipa napas trakea yang menyebabkan suara serak parau hingga batuk menggonggong."
  },
  {
    "id": "bronkitis",
    "name": "Bronkitis (Radang Saluran Bronkus)",
    "organId": "bronkus",
    "organName": "Bronkus (Percabangan Saluran Napas)",
    "latinName": "Bronchi",
    "systemId": "respiratory",
    "systemLabel": "Saluran Pernapasan",
    "category": "Peradangan",
    "analogy": "Bronkus ibarat cabang dan ranting pohon yang menyalurkan udara ke bagian kanan dan kiri paru-paru secara merata.",
    "summary": "Peradangan dan pembengkakan pada dinding bronkus yang memicu produksi lendir dahak berlebihan."
  },
  {
    "id": "asma",
    "name": "Asma Bronkial",
    "organId": "bronkus",
    "organName": "Bronkus (Percabangan Saluran Napas)",
    "latinName": "Bronchi",
    "systemId": "respiratory",
    "systemLabel": "Saluran Pernapasan",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Bronkus ibarat cabang dan ranting pohon yang menyalurkan udara ke bagian kanan dan kiri paru-paru secara merata.",
    "summary": "Penyempitan dan pembengkakan saluran bronkus yang bersifat kambuhan jika terkena pemicu tertentu."
  },
  {
    "id": "pneumonia",
    "name": "Pneumonia (Radang Paru-paru Basah)",
    "organId": "paru-paru",
    "organName": "Paru-paru & Alveolus",
    "latinName": "Pulmo & Alveoli",
    "systemId": "respiratory",
    "systemLabel": "Saluran Pernapasan",
    "category": "Infeksi",
    "analogy": "Paru-paru ibarat sepasang spons ajaib berpori jutaan (alveolus). Spons ini menyerap oksigen bersih ke dalam aliran darah dan membuang gas kotor keluar.",
    "summary": "Kantung udara (alveolus) meradang dan terisi cairan atau nanah. Salah satu penyebab rawat inap terbanyak pada lansia."
  },
  {
    "id": "ppok",
    "name": "PPOK (Penyakit Paru Obstruktif Kronis)",
    "organId": "paru-paru",
    "organName": "Paru-paru & Alveolus",
    "latinName": "Pulmo & Alveoli",
    "systemId": "respiratory",
    "systemLabel": "Saluran Pernapasan",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Paru-paru ibarat sepasang spons ajaib berpori jutaan (alveolus). Spons ini menyerap oksigen bersih ke dalam aliran darah dan membuang gas kotor keluar.",
    "summary": "Kerusakan menahun pada kantung udara paru dan saluran napas akibat paparan zat beracun jangka panjang yang membuat napas tersengal permanen."
  },
  {
    "id": "stroke",
    "name": "Stroke (Iskemik & Hemoragik)",
    "organId": "otak-besar",
    "organName": "Otak Besar (Serebrum)",
    "latinName": "Cerebrum",
    "systemId": "nervous",
    "systemLabel": "Sistem Saraf",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Otak besar ibarat kantor pusat komputer utama tubuh yang mengendalikan pikiran, memori ingatan, ucapan, emosi, dan seluruh perintah gerakan anggota tubuh.",
    "summary": "Kematian sel-sel otak akibat sumbatan gumpalan darah atau pecahnya pembuluh darah di otak, memicu kelumpuhan mendadak."
  },
  {
    "id": "alzheimer-demensia",
    "name": "Penyakit Alzheimer & Demensia Geriatri",
    "organId": "otak-besar",
    "organName": "Otak Besar (Serebrum)",
    "latinName": "Cerebrum",
    "systemId": "nervous",
    "systemLabel": "Sistem Saraf",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Otak besar ibarat kantor pusat komputer utama tubuh yang mengendalikan pikiran, memori ingatan, ucapan, emosi, dan seluruh perintah gerakan anggota tubuh.",
    "summary": "Kerusakan progresif sel saraf otak yang memicu penurunan daya ingat, kemampuan berpikir, dan perubahan perilaku lansia."
  },
  {
    "id": "parkinson",
    "name": "Penyakit Parkinson (Gangguan Gerak & Keseimbangan)",
    "organId": "otak-kecil",
    "organName": "Otak Kecil (Serebelum)",
    "latinName": "Cerebellum",
    "systemId": "nervous",
    "systemLabel": "Sistem Saraf",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Otak kecil ibarat alat penyeimbang (gyroscope) tubuh kita. Organ ini menjaga kita tetap seimbang saat berjalan, tidak oleng, dan membuat gerakan tangan kita halus dan tepat sasaran.",
    "summary": "Kerusakan neuron penghasil dopamin yang memicu gemetar saat istirahat, kekakuan otot, dan kelambatan bergerak."
  },
  {
    "id": "delirium-geriatri",
    "name": "Delirium Akut Geriatri (Kebingungan Mendadak)",
    "organId": "batang-otak",
    "organName": "Batang Otak & Pusat Otonom",
    "latinName": "Truncus Encephali",
    "systemId": "nervous",
    "systemLabel": "Sistem Saraf",
    "category": "Infeksi",
    "analogy": "Batang otak ibarat mesin pembangkit listrik otomatis 24 jam. Organ ini menjaga napas kita tetap berhembus, jantung berdenyut, dan refleks menelan makanan berjalan aman saat kita tidur.",
    "summary": "Kondisi linglung dan disorientasi mendadak pada lansia yang dipicu oleh infeksi tubuh (seperti ISK atau radang paru) atau ketidakseimbangan obat."
  },
  {
    "id": "hnp-saraf-kejepit",
    "name": "HNP / Saraf Kejepit Tulang Belakang",
    "organId": "medula-spinalis",
    "organName": "Sumsum Tulang Belakang (Medula Spinalis)",
    "latinName": "Medulla Spinalis",
    "systemId": "nervous",
    "systemLabel": "Sistem Saraf",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Sumsum tulang belakang ibarat kabel transmisi serat optik utama di dalam ruas tulang punggung. Kabel ini menyalurkan perintah gerak dari otak ke kaki-tangan dan membawa rasa raba kembali ke otak.",
    "summary": "Bantalan sendi tulang belakang yang bergeser atau menonjol keluar dan menjepit serabut saraf di punggung bawah atau leher."
  },
  {
    "id": "neuropati-perifer",
    "name": "Neuropati Perifer (Kerusakan Saraf Kaki & Tangan)",
    "organId": "saraf-tepi",
    "organName": "Saraf Tepi & Jaringan Perifer",
    "latinName": "Systema Nervosum Periphericum",
    "systemId": "nervous",
    "systemLabel": "Sistem Saraf",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Saraf tepi ibarat kabel-kabel listrik kecil yang menyebar ke seluruh ujung jari tangan dan telapak kaki, mendeteksi suhu panas-dingin, sentuhan, dan rasa nyeri.",
    "summary": "Kerusakan serabut saraf tepi yang menyebabkan telapak kaki mati rasa, kesemutan, atau nyeri seperti terbakar."
  },
  {
    "id": "hipotiroidisme-geriatri",
    "name": "Hipotiroidisme Geriatri (Penurunan Hormon Tiroid)",
    "organId": "kelenjar-tiroid",
    "organName": "Kelenjar Tiroid (Glandula Thyroidea)",
    "latinName": "Glandula Thyroidea",
    "systemId": "endocrine",
    "systemLabel": "7. Sistem Endokrin",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Tiroid ibarat pedal gas pembakaran mesin tubuh. Mengatur seberapa cepat atau lambat sel-sel membakar energi dan menghasilkan panas.",
    "summary": "Kondisi defisiensi hormon tiroid akibat atrofi kelenjar tiroid atau tiroiditis autoimun (Hashimoto) yang memperlambat metabolisme seluruh tubuh."
  },
  {
    "id": "insufisiensi-adrenal",
    "name": "Insufisiensi Adrenal & Krisis Addisonian",
    "organId": "kelenjar-adrenal",
    "organName": "Kelenjar Adrenal (Glandula Suprarenalis)",
    "latinName": "Glandulae Suprarenales",
    "systemId": "endocrine",
    "systemLabel": "7. Sistem Endokrin",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Adrenal ibarat generator darurat penyedia hormon stres (kortisol) agar tubuh tetap kuat bertahan saat terserang infeksi, sakit, atau dehidrasi.",
    "summary": "Ketidakmampuan korteks adrenal memproduksi hormon kortisol dan aldosteron yang cukup, memicu gangguan elektrolit parah dan syok hipotensi."
  },
  {
    "id": "diabetes-tipe-2",
    "name": "Diabetes Melitus Tipe 2 Geriatri",
    "organId": "kelenjar-pankreas-endokrin",
    "organName": "Pulau Langerhans Pankreas",
    "latinName": "Insulae Pancreaticae (Cellulae Beta)",
    "systemId": "endocrine",
    "systemLabel": "7. Sistem Endokrin",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Pulau Langerhans ibarat gerbang penjaga gudang gula yang memproduksi kunci 'insulin' agar gula darah bisa masuk diserap sel dan tidak menumpuk di darah.",
    "summary": "Gangguan metabolisme karbohidrat kronis yang ditandai dengan hiperglikemia akibat kombinasi resistensi insulin perifer dan penurunan sekresi insulin pankreas."
  },
  {
    "id": "gagal-ginjal-kronis",
    "name": "Penyakit Ginjal Kronis (PGK Geriatri)",
    "organId": "ginjal",
    "organName": "Ginjal Bilateral (Ren Dextra & Sinistra)",
    "latinName": "Renes (Ginjal Kanan & Kiri)",
    "systemId": "excretory",
    "systemLabel": "8. Ekskresi / Urinaria",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Ginjal ibarat pabrik penyaring air limbah super canggih yang membersihkan 180 liter darah setiap hari dan membuang ampas racun lewat urine.",
    "summary": "Kerusakan struktural dan penurunan fungsi filtrasi ginjal progresif yang berlangsung lebih dari 3 bulan, memicu penumpukan racun uremik di dalam darah."
  },
  {
    "id": "batu-saluran-kemih",
    "name": "Batu Saluran Kemih (Urolithiasis & Kolik Ureter)",
    "organId": "ureter",
    "organName": "Saluran Ureter Bilateral",
    "latinName": "Ureteres (Saluran Kemih Atas)",
    "systemId": "excretory",
    "systemLabel": "8. Ekskresi / Urinaria",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Ureter ibarat pipa pembuangan air dari tangki penyaring ginjal menuju ember penampungan kandung kemih di bawah.",
    "summary": "Pembentukan endapan mineral keras (kalsium oksalat, asam urat) yang tersangkut di saluran ureter dan menyumbat aliran urine dari ginjal."
  },
  {
    "id": "beser-inkontinensia",
    "name": "Kandung Kemih Overaktif & Inkontinensia Urin",
    "organId": "kandung-kemih",
    "organName": "Kandung Kemih (Vesika Urinaria)",
    "latinName": "Vesica Urinaria",
    "systemId": "excretory",
    "systemLabel": "8. Ekskresi / Urinaria",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Kandung kemih ibarat balon penampung elastis berdinding otot yang bisa membesar menampung air dan mengecil memeras air keluar.",
    "summary": "Ketidakmampuan menahan keluarnya air kemih secara sadar akibat kontraksi otot detrusor kandung kemih yang hiperaktif atau kelemahan sfingter panggul."
  },
  {
    "id": "striktur-uretra",
    "name": "Striktur Uretra (Penyempitan Saluran Kencing)",
    "organId": "saluran-kemih-bawah",
    "organName": "Saluran Uretra & Muara Kemih",
    "latinName": "Urethra",
    "systemId": "excretory",
    "systemLabel": "8. Ekskresi / Urinaria",
    "category": "Peradangan",
    "analogy": "Uretra ibarat pipa keran pembuangan akhir yang dilengkapi cincin karet penahan agar air tidak merembes bocor keluar sembarangan.",
    "summary": "Penyempitan lumen saluran kencing akibat terbentuknya jaringan parut fibrotik pascaradang atau trauma kateterisasi."
  },
  {
    "id": "isk-pria",
    "name": "Infeksi Saluran Kemih Pria Geriatri",
    "organId": "saluran-kemih-bawah",
    "organName": "Saluran Uretra & Muara Kemih",
    "latinName": "Urethra",
    "systemId": "excretory",
    "systemLabel": "8. Ekskresi / Urinaria",
    "category": "Infeksi",
    "analogy": "Uretra ibarat pipa keran pembuangan akhir yang dilengkapi cincin karet penahan agar air tidak merembes bocor keluar sembarangan.",
    "summary": "Kolonisasi bakteri patogen pada traktus urinarius pria lanjut usia yang umumnya bersifat komplikasi akibat sumbatan prostat atau kateter."
  },
  {
    "id": "immunosenescence",
    "name": "Immunosenescence (Penuaan Sistem Kekebalan Tubuh)",
    "organId": "sumsum-tulang-imun",
    "organName": "Sumsum Tulang & Sel Imun Sistemik",
    "latinName": "Medulla Ossium Rubra & Systema Immunitatis",
    "systemId": "immune",
    "systemLabel": "9. Sistem Kekebalan (Imun)",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Sumsum tulang ibarat barak akademi militer yang melahirkan pasukan tentara sel darah putih (leukosit, sel B, sel T) untuk menjaga keamanan tubuh.",
    "summary": "Kemunduran fungsi kekebalan tubuh adaptif dan bawaan akibat penuaan yang disertai keadaan peradangan sistemik derajat rendah kronis (inflammaging)."
  },
  {
    "id": "reumatoid-artritis",
    "name": "Artritis Reumatoid Geriatri (EORA)",
    "organId": "sistem-imun-penghubung",
    "organName": "Jaringan Imun & Autoantibodi Sendi",
    "latinName": "Synovium & Systema Autoimmunitatis",
    "systemId": "immune",
    "systemLabel": "9. Sistem Kekebalan (Imun)",
    "category": "Peradangan",
    "analogy": "Sistem imun autoimun ibarat radar keamanan yang salah mengira lapisan sendi tubuh sendiri sebagai penyusup, lalu membombardirnya dengan zat radang.",
    "summary": "Penyakit autoimun sistemik kronis di mana sistem kekebalan tubuh menyerang membran sinovial sendi secara simetris, menyebabkan erosi tulang dan deformitas sendi."
  },
  {
    "id": "limfedema-kronis",
    "name": "Limfedema & Pembengkakan Kelenjar Limfa",
    "organId": "kelenjar-getah-bening",
    "organName": "Kelenjar Getah Bening (Nodus Limfatikus)",
    "latinName": "Nodi Lymphoidei (Servikal, Aksila, Inguinal)",
    "systemId": "lymphatic",
    "systemLabel": "10. Sistem Limfatik",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Kelenjar limfa ibarat pos pemeriksaan keamanan polisi di perbatasan yang menyaring dan menghancurkan kuman yang lewat di aliran getah bening.",
    "summary": "Penumpukan cairan kaya protein di jaringan lunak akibat gangguan aliran drainase saluran limfatik atau kerusakan kelenjar getah bening."
  },
  {
    "id": "limfedema-kronis",
    "name": "Limfedema Kronis & Insufisiensi Limfatik",
    "organId": "pembuluh-limfa",
    "organName": "Saluran & Pembuluh Limfatik",
    "latinName": "Vasa Lymphatica & Ductus Thoracicus",
    "systemId": "lymphatic",
    "systemLabel": "10. Sistem Limfatik",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Pembuluh limfa ibarat jaringan selokan pembuangan air sekunder di bawah tanah yang menyedot kelebihan becek air di sela-sela sel tubuh agar tidak banjir.",
    "summary": "Kegagalan transport mikrosirkulasi limfatik yang menyebabkan akumulasi cairan interstitial dan hipertrofi jaringan adiposa fibrotik pada tungkai lansia."
  },
  {
    "id": "ulkus-dekubitus",
    "name": "Ulkus Dekubitus (Luka Robek Baring Tekan)",
    "organId": "kulit-epidermis-dermis",
    "organName": "Lapisan Kulit (Epidermis & Dermis)",
    "latinName": "Integumentum Commune (Epidermis & Dermis)",
    "systemId": "integumentary",
    "systemLabel": "11. Sistem Integumen (Kulit & Kuku)",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Kulit ibarat mantel tahan air dan baju zirah terluar tubuh yang melindungi organ dalam dari kuman, debu, gesekan, dan terik panas matahari.",
    "summary": "Kerusakan jaringan kulit dan struktur di bawahnya akibat tekanan mekanis berkepanjangan pada area tonjolan tulang (tulang ekor, tumit, pinggul) pada pasien tirah baring."
  },
  {
    "id": "herpes-zoster",
    "name": "Herpes Zoster (Cacar Ular / Api & Nyeri Pasca-Herpes)",
    "organId": "folikel-dan-kuku",
    "organName": "Saraf Kulit & Folikel Kutaneus",
    "latinName": "Dermatom & Radix Nervi Cutanei",
    "systemId": "integumentary",
    "systemLabel": "11. Sistem Integumen (Kulit & Kuku)",
    "category": "Infeksi",
    "analogy": "Saraf kulit ibarat kabel kawat sensor alarm di bawah permukaan kulit yang menyampaikan rasa sentuhan, panas, dingin, dan nyeri ke otak.",
    "summary": "Reaktivasi virus Varicella-Zoster dorman pada ganglion saraf sensorik yang menimbulkan ruam lenting berair bergerombol melingkar separuh badan dan nyeri saraf hebat."
  },
  {
    "id": "batu-saluran-kemih",
    "name": "Batu Saluran Kemih (Urolitiasis)",
    "organId": "ginjal-ureter-pria",
    "organName": "Ginjal & Saluran Kemih Atas",
    "latinName": "Ren & Ureter",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Ginjal ibarat mesin penyaring air ultra murni 24 jam sehari. Organ ini menyaring darah dari sisa ampas racun tubuh dan membuangnya dalam bentuk air seni.",
    "summary": "Pengkristalan mineral dan garam kalsium atau asam urat di ginjal yang turun dan menyumbat saluran kencing."
  },
  {
    "id": "isk-pria",
    "name": "ISK (Infeksi Saluran Kemih Pria Lansia)",
    "organId": "kandung-kemih-pria",
    "organName": "Kandung Kemih (Pria)",
    "latinName": "Vesica Urinaria",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Infeksi",
    "analogy": "Kandung kemih ibarat balon penampung urine sementara. Dindingnya lentur mengembang saat terisi dan memompa saat kita berkemih.",
    "summary": "Masuk dan berkembang biaknya kuman bakteri di kandung kemih, sering kali dipicu oleh aliran urine yang tidak lancar akibat prostat."
  },
  {
    "id": "bph",
    "name": "BPH (Pembesaran Prostat Jinak / Anyang-anyangan Lansia)",
    "organId": "prostat",
    "organName": "Kelenjar Prostat",
    "latinName": "Prostata",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Prostat ibarat cincin penyangga seukuran buah kenari yang melingkari selang kencing (uretra) tepat di bawah kandung kemih pria.",
    "summary": "Membesarnya ukuran kelenjar prostat yang menjepit saluran pipa kencing sehingga aliran urine tersumbat dan tidak lancar."
  },
  {
    "id": "prostatitis",
    "name": "Prostatitis (Radang Kelenjar Prostat)",
    "organId": "prostat",
    "organName": "Kelenjar Prostat",
    "latinName": "Prostata",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Peradangan",
    "analogy": "Prostat ibarat cincin penyangga seukuran buah kenari yang melingkari selang kencing (uretra) tepat di bawah kandung kemih pria.",
    "summary": "Peradangan dan pembengkakan pada jaringan kelenjar prostat, bisa disertai infeksi bakteri."
  },
  {
    "id": "striktur-uretra",
    "name": "Striktur Uretra (Penyempitan Saluran Kencing)",
    "organId": "uretra-pria",
    "organName": "Saluran Kemih Keluar (Uretra Pria)",
    "latinName": "Urethra Masculina",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Uretra ibarat selang pembuangan akhir yang mengalirkan air seni dari kandung kemih menembus prostat hingga ke ujung penis.",
    "summary": "Menyempitnya rongga saluran kencing akibat terbentuknya jaringan parut, membuat aliran kencing bercabang atau mengecil drastis."
  },
  {
    "id": "hidrokel-hernia",
    "name": "Hidrokel & Hernia Inguinalis (Turun Berok)",
    "organId": "testis",
    "organName": "Testis & Skrotum",
    "latinName": "Testis & Scrotum",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Testis ibarat pabrik hormon vitalitas dan kejantanan pria yang tersimpan aman di dalam kantung skrotum elastis.",
    "summary": "Penumpukan cairan di selaput pembungkus testis (hidrokel) atau mencuatnya usus ke kantung buah zakar akibat dinding perut melemah (hernia)."
  },
  {
    "id": "batu-ginjal-wanita",
    "name": "Batu Ginjal & Penurunan Fungsi Ginjal",
    "organId": "ginjal-ureter-wanita",
    "organName": "Ginjal & Saluran Kemih Atas",
    "latinName": "Ren & Ureter",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Gaya Hidup/Pola Makan",
    "analogy": "Ginjal ibarat mesin penyaring air ultra murni 24 jam sehari yang membuang racun ampas sisa metabolisme keluar dari tubuh.",
    "summary": "Pengendapan kristal mineral di saluran ginjal yang dapat memicu peradangan atau penurunan fungsi filtrasi pada lansia."
  },
  {
    "id": "isk-wanita",
    "name": "ISK (Infeksi Saluran Kemih Lansia Wanita)",
    "organId": "kandung-kemih-wanita",
    "organName": "Kandung Kemih & Uretra Wanita",
    "latinName": "Vesica Urinaria & Urethra Feminina",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Infeksi",
    "analogy": "Kandung kemih wanita ibarat balon penampung air seni. Saluran keluarnya (uretra) relatif pendek (hanya sekitar 4 cm), sehingga kuman lebih mudah masuk dari luar.",
    "summary": "Infeksi bakteri (terutama E. coli) pada kandung kemih dan uretra. Sangat sering berulang pada wanita lanjut usia."
  },
  {
    "id": "beser-inkontinensia",
    "name": "Beser / Kandung Kemih Overaktif (Inkontinensia Urine)",
    "organId": "kandung-kemih-wanita",
    "organName": "Kandung Kemih & Uretra Wanita",
    "latinName": "Vesica Urinaria & Urethra Feminina",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Kandung kemih wanita ibarat balon penampung air seni. Saluran keluarnya (uretra) relatif pendek (hanya sekitar 4 cm), sehingga kuman lebih mudah masuk dari luar.",
    "summary": "Otot kandung kemih yang berkontraksi tiba-tiba di luar kendali, menyebabkan urine bocor atau mengompol tanpa disengaja."
  },
  {
    "id": "prolaps-uteri",
    "name": "Prolaps Uteri (Turun Peranakan pada Lansia)",
    "organId": "rahim",
    "organName": "Rahim (Uterus)",
    "latinName": "Uterus",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Rahim ibarat kantung buah pir terbalik berotot kuat di tengah rongga panggul yang disangga oleh jalinan ligamen dan otot panggul.",
    "summary": "Kelemahan ligamen dan otot dasar panggul yang membuat rahim melorot turun ke arah lubang vagina."
  },
  {
    "id": "miom-uteri",
    "name": "Miom Uteri (Fibroid Rahim)",
    "organId": "rahim",
    "organName": "Rahim (Uterus)",
    "latinName": "Uterus",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Peradangan",
    "analogy": "Rahim ibarat kantung buah pir terbalik berotot kuat di tengah rongga panggul yang disangga oleh jalinan ligamen dan otot panggul.",
    "summary": "Tumor jinak dari jaringan otot dinding rahim. Sering mengecil setelah menopause, namun tetap perlu dipantau jika ada perdarahan."
  },
  {
    "id": "servisitis-polip",
    "name": "Radang & Polip Leher Rahim",
    "organId": "serviks",
    "organName": "Leher Rahim (Serviks)",
    "latinName": "Cervix Uteri",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Peradangan",
    "analogy": "Serviks ibarat pintu gerbang pembatas antara liang kewanitaan dan rongga rahim bagian dalam.",
    "summary": "Peradangan pada leher rahim atau pertumbuhan benjolan bertangkai kecil (polip) jinak yang mudah berdarah."
  },
  {
    "id": "kista-ovarium",
    "name": "Kista Ovarium Pascamenopause",
    "organId": "ovarium",
    "organName": "Indung Telur (Ovarium) & Tuba Falopi",
    "latinName": "Ovarium & Tuba Fallopii",
    "systemId": "reproductive",
    "systemLabel": "12. Sistem Reproduksi",
    "category": "Faktor Usia/Degeneratif",
    "analogy": "Ovarium ibarat sepasang lumbung kecil seukuran buah almond di kanan dan kiri panggul yang memproduksi hormon wanita.",
    "summary": "Kantung berisi cairan yang tumbuh di ovarium. Pada wanita lansia, setiap benjolan ovarium perlu dipantau ketat."
  }
];

// ============================================================================
// 2. STATE APLIKASI TABEL MEDIS
// ============================================================================
const TableState = {
  currentSystemFilter: 'all',  // 'all' | 'respiratory' | 'digestive' | 'urology-male' | 'urology-female'
  currentCategoryFilter: 'all',// 'all' | 'Infeksi' | 'Peradangan' | 'Gaya Hidup/Pola Makan' | 'Faktor Usia/Degeneratif'
  searchQuery: '',
  fontSize: 'md',
  highContrast: false
};

// ============================================================================
// 3. INISIALISASI
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTablePreferences();
  initTableFilters();
  initTableSearch();
  renderMasterTable();
  handleHashNavigation();
  initTableFloatingTop();
});

function handleHashNavigation() {
  if (!window.location.hash) return;
  const hash = window.location.hash;
  setTimeout(() => {
    const targetElem = document.querySelector(hash);
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      targetElem.classList.add('ring-4', 'ring-teal-500', 'ring-offset-4');
      setTimeout(() => {
        targetElem.classList.remove('ring-4', 'ring-teal-500', 'ring-offset-4');
      }, 3500);
    }
  }, 250);
}

window.addEventListener('hashchange', handleHashNavigation);

function initTablePreferences() {
  const savedFont = localStorage.getItem('anatomi_font_size') || 'md';
  const savedContrast = localStorage.getItem('anatomi_contrast') === 'true';

  setTableFontSize(savedFont);
  if (savedContrast) {
    toggleTableContrast(true);
  }

  // Font sizer buttons
  document.getElementById('table-btn-font-sm').addEventListener('click', () => setTableFontSize('sm'));
  document.getElementById('table-btn-font-md').addEventListener('click', () => setTableFontSize('md'));
  document.getElementById('table-btn-font-lg').addEventListener('click', () => setTableFontSize('lg'));

  // High contrast button
  document.getElementById('table-btn-contrast').addEventListener('click', () => {
    toggleTableContrast(!TableState.highContrast);
  });

  // Print button
  document.getElementById('table-btn-print').addEventListener('click', () => {
    window.print();
  });
}

function setTableFontSize(size) {
  TableState.fontSize = size;
  document.documentElement.classList.remove('font-size-sm', 'font-size-md', 'font-size-lg');
  document.documentElement.classList.add(`font-size-${size}`);

  const buttons = {
    sm: document.getElementById('table-btn-font-sm'),
    md: document.getElementById('table-btn-font-md'),
    lg: document.getElementById('table-btn-font-lg')
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

function toggleTableContrast(forceState) {
  TableState.highContrast = forceState !== undefined ? forceState : !TableState.highContrast;
  if (TableState.highContrast) {
    document.body.classList.add('high-contrast');
  } else {
    document.body.classList.remove('high-contrast');
  }
  localStorage.setItem('anatomi_contrast', TableState.highContrast);
}

// ============================================================================
// 4. FILTER SISTEM & KATEGORI
// ============================================================================
function initTableFilters() {
  // System buttons
  const sysBtns = document.querySelectorAll('.table-sys-filter-btn');
  sysBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sysBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      TableState.currentSystemFilter = btn.dataset.sys;
      renderMasterTable();
    });
  });

  // Category buttons
  const catBtns = document.querySelectorAll('#table-cat-filters .cat-filter-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      TableState.currentCategoryFilter = btn.dataset.cat;
      renderMasterTable();
    });
  });
}

function initTableSearch() {
  const input = document.getElementById('table-search-input');
  const btnClear = document.getElementById('table-clear-search');

  input.addEventListener('input', () => {
    TableState.searchQuery = input.value.trim().toLowerCase();
    if (TableState.searchQuery.length > 0) {
      btnClear.classList.remove('hidden');
    } else {
      btnClear.classList.add('hidden');
    }
    renderMasterTable();
  });

  btnClear.addEventListener('click', () => {
    input.value = '';
    TableState.searchQuery = '';
    btnClear.classList.add('hidden');
    input.focus();
    renderMasterTable();
  });
}

// ============================================================================
// 5. RENDER MASTER TABLE DENGAN SUB-KONTEN LENGKAP
// ============================================================================
function renderMasterTable() {
  const container = document.getElementById('master-table-container');
  const counter = document.getElementById('table-search-counter');
  container.innerHTML = '';

  // Filter items
  const filtered = TABLE_CATALOG_DATA.filter(item => {
    // 1. Filter System (12 Sistem Tubuh)
    if (TableState.currentSystemFilter !== 'all') {
      const curSys = TableState.currentSystemFilter;
      if (curSys === 'reproductive') {
        if (item.systemId !== 'reproductive' && item.systemId !== 'urology-male' && item.systemId !== 'urology-female') return false;
      } else if (curSys === 'muscular') {
        if (item.systemId !== 'muscular' && item.systemId !== 'muscularFat') return false;
      } else {
        if (item.systemId !== curSys) return false;
      }
    }

    // 2. Filter Category
    if (TableState.currentCategoryFilter !== 'all') {
      if (item.category !== TableState.currentCategoryFilter) return false;
    }

    // 3. Filter Search Query
    if (TableState.searchQuery.length > 0) {
      const q = TableState.searchQuery;
      const dossier = (typeof DEEP_CLINICAL_DATA !== 'undefined' && DEEP_CLINICAL_DATA[item.id]) ? DEEP_CLINICAL_DATA[item.id] : null;
      const deepStr = dossier ? JSON.stringify(dossier).toLowerCase() : '';

      const matchBase = item.name.toLowerCase().includes(q) ||
                        item.organName.toLowerCase().includes(q) ||
                        item.summary.toLowerCase().includes(q) ||
                        item.category.toLowerCase().includes(q);

      return matchBase || deepStr.includes(q);
    }

    return true;
  });

  // Update counter
  counter.textContent = `Menampilkan ${filtered.length} dari ${TABLE_CATALOG_DATA.length} topik penyakit terdaftar`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-white rounded-2xl border border-slate-200 shadow-xs">
        <i class="fa-solid fa-notes-medical text-3xl text-slate-300 mb-2 block"></i>
        <h3 class="text-base font-bold text-slate-700">Tidak ada topik penyakit yang cocok</h3>
        <p class="text-xs text-slate-500 mt-1">Coba sesuaikan kata kunci pencarian atau reset filter sistem dan kategori.</p>
      </div>
    `;
    return;
  }

  // Render each disease card with comprehensive sub-content tables
  filtered.forEach(item => {
    const dossier = (typeof DEEP_CLINICAL_DATA !== 'undefined' && DEEP_CLINICAL_DATA[item.id]) 
                    ? DEEP_CLINICAL_DATA[item.id] 
                    : getFallbackDossier(item);

    // Build URL back to index.html with query parameters
    let spaSystem = item.systemId;
    let spaGender = item.gender || 'male';
    if (item.systemId === 'urology-male' || item.systemId === 'urology-female') {
      spaSystem = 'urology';
    }
    const spaUrl = `index.html?system=${spaSystem}&organ=${item.organId}&disease=${item.id}&gender=${spaGender}&mode=deep`;

    // Category badge color
    let catClass = 'bg-slate-100 text-slate-800 border-slate-300';
    if (item.category === 'Infeksi') catClass = 'bg-rose-100 text-rose-800 border-rose-300';
    if (item.category === 'Peradangan') catClass = 'bg-amber-100 text-amber-800 border-amber-300';
    if (item.category === 'Gaya Hidup/Pola Makan') catClass = 'bg-emerald-100 text-emerald-800 border-emerald-300';
    if (item.category === 'Faktor Usia/Degeneratif') catClass = 'bg-indigo-100 text-indigo-800 border-indigo-300';

    let organIcon = 'fa-lungs';
    if (spaSystem === 'digestive') organIcon = 'fa-utensils';
    if (spaSystem === 'urology') organIcon = (spaGender === 'female') ? 'fa-venus' : 'fa-mars';
    if (spaSystem === 'nervous') organIcon = 'fa-brain';
    if (spaSystem === 'muscularFat') organIcon = 'fa-person-walking';

    const card = document.createElement('article');
    card.id = `card-${item.id}`;
    card.className = "bg-white rounded-2xl border-2 border-slate-200/90 shadow-sm overflow-hidden transition hover:border-teal-500/80";

    card.innerHTML = `
      <!-- HEADER PENYAKIT & NAVIGASI CEPAT -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-slate-50 via-teal-50/20 to-white border-b border-slate-200 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-1.5">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wide bg-teal-100 text-teal-900 border border-teal-200">
              <i class="fa-solid ${organIcon} mr-1"></i>${item.organName}
            </span>
            <span class="text-xs italic text-slate-400">(${item.latinName})</span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold border ${catClass}">
              Kategori: ${item.category}
            </span>
            <span class="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
              ${item.systemLabel}
            </span>
            ${dossier.medicalTerminology ? `
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-100 text-purple-900 border border-purple-300">
              <i class="fa-solid fa-barcode mr-1 text-purple-700"></i>ICD-10: ${dossier.medicalTerminology.icd10}
            </span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-900 border border-indigo-200">
              <i class="fa-solid fa-stethoscope mr-1 text-indigo-600"></i><em>${dossier.medicalTerminology.formalDiagnosis}</em>
            </span>
            ` : ''}
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            ${item.name}
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 mt-1 font-medium max-w-4xl leading-relaxed">
            ${item.summary}
          </p>
        </div>

        <!-- Tombol Aksi: Buka di Visual SPA -->
        <div class="flex-shrink-0">
          <a href="${spaUrl}" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-xs transition hover:shadow active:scale-95">
            <i class="fa-regular fa-eye"></i>
            <span>Buka di Visual Anatomi (index.html)</span>
          </a>
        </div>
      </div>

      <!-- KOTAK ANALOGI AWAM -->
      <div class="p-3.5 mx-4 sm:mx-6 mt-4 rounded-xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-2.5 text-xs sm:text-sm text-amber-950">
        <i class="fa-solid fa-lightbulb text-amber-600 text-base flex-shrink-0 mt-0.5"></i>
        <div>
          <strong>Analogi Sederhana Ramah Lansia:</strong>
          <span class="font-semibold block mt-0.5">${item.analogy}</span>
        </div>
      </div>

      <!-- KUMPULAN TABEL SUB-KONTEN KLINIS -->
      <div class="p-4 sm:p-6 space-y-6">

        <!-- TABEL SUB-KONTEN 1: PATOFISIOLOGI & KERENTANAN GERIATRI -->
        <div class="rounded-xl border border-teal-200 bg-teal-50/20 overflow-hidden">
          <div class="bg-teal-900 text-white px-4 py-2 font-bold text-xs sm:text-sm flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-dna text-teal-300"></i>1. Tabel Patofisiologi, Seluler & Kerentanan Lansia</span>
            <span class="text-[11px] text-teal-200 font-normal">Mekanisme Biologis</span>
          </div>
          <div class="overflow-x-auto">
            <table class="diag-table bg-white">
              <thead>
                <tr>
                  <th class="w-1/3">Aspek Biologis</th>
                  <th class="w-2/3">Uraian Patofisiologi Klinis & Dampak Organ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-bold text-teal-900 bg-teal-50/40">Mekanisme Seluler & Molekuler</td>
                  <td class="text-slate-800 leading-relaxed font-medium">${dossier.pathophysiology.cellularMechanism}</td>
                </tr>
                <tr>
                  <td class="font-bold text-indigo-900 bg-indigo-50/30">Faktor Penuaan Geriatri (Immunosenescence)</td>
                  <td class="text-slate-800 leading-relaxed font-medium">${dossier.pathophysiology.geriatricFactor}</td>
                </tr>
                <tr>
                  <td class="font-bold text-slate-800 bg-slate-50">Dampak Struktural Organ & Sistemik</td>
                  <td class="text-slate-800 leading-relaxed font-medium">${dossier.pathophysiology.organImpact}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- TABEL SUB-KONTEN 2: KOMPARASI GEJALA (KLASIK VS GERIATRIC GIANTS) -->
        <div class="rounded-xl border border-sky-200 bg-sky-50/20 overflow-hidden">
          <div class="bg-sky-900 text-white px-4 py-2 font-bold text-xs sm:text-sm flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-user-doctor text-sky-300"></i>2. Tabel Komparasi Gejala: Dewasa Muda vs Geriatric Giants</span>
            <span class="text-[11px] text-sky-200 font-normal">Manifestasi Klinis</span>
          </div>
          <div class="overflow-x-auto">
            <table class="diag-table bg-white">
              <thead>
                <tr>
                  <th class="w-1/2">Gejala Klasik (Dewasa Muda)</th>
                  <th class="w-1/2 bg-sky-50 text-sky-950 font-black">Gejala Khas / Atipikal Lansia (Geriatric Giants)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-slate-700 leading-relaxed font-medium">${dossier.geriatricSymptoms.classical}</td>
                  <td class="text-sky-950 leading-relaxed font-bold bg-sky-50/30">${dossier.geriatricSymptoms.atypicalGeriatric}</td>
                </tr>
                <tr>
                  <td colspan="2" class="text-xs text-amber-950 bg-amber-50/60 p-2.5">
                    <strong>Mengapa Gejalanya Berbeda?</strong> ${dossier.geriatricSymptoms.whyDifferent}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- TABEL SUB-KONTEN 3: SISTEM SKOR MEDIS & STADIUM KLINIS -->
        <div class="rounded-xl border border-amber-200 bg-amber-50/20 overflow-hidden">
          <div class="bg-amber-900 text-white px-4 py-2 font-bold text-xs sm:text-sm flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-chart-line text-amber-300"></i>3. Tabel Sistem Skor & Kriteria Stadium: ${dossier.staging.scoreName}</span>
            <span class="text-[11px] text-amber-200 font-normal">Stratifikasi Risiko</span>
          </div>
          <div class="overflow-x-auto">
            <table class="diag-table bg-white">
              <thead>
                <tr>
                  <th class="w-1/4">Tingkat / Stadium</th>
                  <th class="w-1/2">Kriteria Diagnostik & Klinis</th>
                  <th class="w-1/4">Tingkat Risiko & Implikasi Klinis</th>
                </tr>
              </thead>
              <tbody>
                ${dossier.staging.stages.map(st => `
                  <tr>
                    <td class="font-bold text-teal-900 bg-teal-50/30">${st.level}</td>
                    <td class="text-slate-800 leading-relaxed font-medium">${st.criteria}</td>
                    <td class="text-xs text-rose-800 font-bold bg-rose-50/40">${st.risk}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- TABEL SUB-KONTEN 4: DIAGNOSTIC WORKUP (LABORATORIUM & RADIOLOGI) -->
        <div class="rounded-xl border border-purple-200 bg-purple-50/20 overflow-hidden">
          <div class="bg-purple-900 text-white px-4 py-2 font-bold text-xs sm:text-sm flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-flask-vial text-purple-300"></i>4. Tabel Diagnostic Workup: Panel Laboratorium & Pencitraan</span>
            <span class="text-[11px] text-purple-200 font-normal">Pemeriksaan Baku Emas</span>
          </div>
          <div class="overflow-x-auto">
            <table class="diag-table bg-white">
              <thead>
                <tr>
                  <th class="w-1/3">Modalitas Pemeriksaan</th>
                  <th class="w-2/3">Parameter Kritis & Karakteristik Temuan</th>
                </tr>
              </thead>
              <tbody>
                ${dossier.diagnostic.labTests.map(l => `
                  <tr>
                    <td class="font-bold text-purple-950 bg-purple-50/30">${l.test}</td>
                    <td class="text-slate-800 leading-relaxed font-medium">${l.param}</td>
                  </tr>
                `).join('')}
                <tr>
                  <td class="font-bold text-blue-950 bg-blue-50/30">Pencitraan & Radiologi</td>
                  <td class="text-slate-800 leading-relaxed font-medium">${dossier.diagnostic.imaging}</td>
                </tr>
                <tr>
                  <td class="font-black text-emerald-950 bg-emerald-100/50">Baku Emas Diagnosis (Gold Standard)</td>
                  <td class="text-emerald-950 font-extrabold bg-emerald-50/40">${dossier.diagnostic.goldStandard}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- TABEL SUB-KONTEN 5: FARMAKOTERAPI & KRITERIA BEERS GERIATRI -->
        <div class="rounded-xl border border-rose-200 bg-rose-50/20 overflow-hidden">
          <div class="bg-rose-900 text-white px-4 py-2 font-bold text-xs sm:text-sm flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-pills text-rose-300"></i>5. Tabel Farmakoterapi & Peringatan Polifarmasi (Kriteria Beers)</span>
            <span class="text-[11px] text-rose-200 font-normal">Keamanan Obat Geriatri</span>
          </div>
          <div class="overflow-x-auto">
            <table class="diag-table bg-white">
              <thead>
                <tr>
                  <th class="w-1/3">Komponen Terapi</th>
                  <th class="w-2/3">Panduan Farmakologi & Peringatan Keamanan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-bold text-slate-900 bg-slate-50">Regimen Lini Pertama</td>
                  <td class="text-slate-800 leading-relaxed font-medium">${dossier.pharmacotherapy.primaryDrugs}</td>
                </tr>
                <tr class="bg-amber-50/70 border-2 border-amber-300">
                  <td class="font-black text-amber-950 bg-amber-100">
                    <i class="fa-solid fa-triangle-exclamation text-amber-600 mr-1"></i>Peringatan Kriteria Beers (Geriatric Alert)
                  </td>
                  <td class="text-amber-950 font-bold leading-relaxed">${dossier.pharmacotherapy.beersCriteria}</td>
                </tr>
                <tr>
                  <td class="font-bold text-slate-800 bg-slate-50">Monitoring Organ Berkala</td>
                  <td class="text-slate-700 leading-relaxed font-medium">${dossier.pharmacotherapy.monitoring}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- TABEL SUB-KONTEN 6: PROTOKOL NUTRISI KLINIS -->
        <div class="rounded-xl border border-emerald-200 bg-emerald-50/20 overflow-hidden">
          <div class="bg-emerald-900 text-white px-4 py-2 font-bold text-xs sm:text-sm flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-carrot text-emerald-300"></i>6. Tabel Protokol Nutrisi Klinis & Terapi Diet</span>
            <span class="text-[11px] text-emerald-200 font-normal">Gizi Medis</span>
          </div>
          <div class="overflow-x-auto">
            <table class="diag-table bg-white">
              <thead>
                <tr>
                  <th class="w-1/3">Target Nutrisi & Makro/Mikro</th>
                  <th class="w-1/3 bg-emerald-50 text-emerald-950 font-bold">Makanan Terapeutik Dianjurkan</th>
                  <th class="w-1/3 bg-rose-50 text-rose-950 font-bold">Makanan Pantangan Mutlak</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-slate-800 leading-relaxed font-medium bg-slate-50/50">${dossier.clinicalNutrition.macroMicro}</td>
                  <td class="text-emerald-950 leading-relaxed font-semibold bg-emerald-50/20">${dossier.clinicalNutrition.recommendedFoods}</td>
                  <td class="text-rose-950 leading-relaxed font-semibold bg-rose-50/20">${dossier.clinicalNutrition.contraindicatedFoods}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- TABEL SUB-KONTEN 7: KEDARURATAN TRIASE MERAH IGD & REHABILITASI -->
        <div class="rounded-xl border border-red-300 bg-red-50/20 overflow-hidden">
          <div class="bg-red-900 text-white px-4 py-2 font-bold text-xs sm:text-sm flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-truck-medical text-red-300"></i>7. Tabel Kedaruratan Triase Merah IGD & Rehabilitasi Rumah</span>
            <span class="text-[11px] text-red-200 font-normal">Pertolongan Pertama & Rawat Mandiri</span>
          </div>
          <div class="overflow-x-auto">
            <table class="diag-table bg-white">
              <thead>
                <tr>
                  <th class="w-1/4">Aspek Kedaruratan & Pemulihan</th>
                  <th class="w-3/4">Rekomendasi Tindakan & Kriteria Klinis</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-rose-50/60">
                  <td class="font-black text-rose-950 bg-rose-100/60">Kriteria Triase Merah / Rujukan IGD</td>
                  <td class="text-rose-950 font-black leading-relaxed">${dossier.emergency.immediateTriggers}</td>
                </tr>
                <tr>
                  <td class="font-bold text-amber-900 bg-amber-50/30">Pertolongan Pertama di Rumah</td>
                  <td class="text-slate-800 leading-relaxed font-medium">${dossier.emergency.firstAidHome}</td>
                </tr>
                <tr>
                  <td class="font-bold text-blue-900 bg-blue-50/30">Latihan Fisik & Fisioterapi</td>
                  <td class="text-slate-800 leading-relaxed font-medium">${dossier.rehabilitation.physicalExercises}</td>
                </tr>
                <tr>
                  <td class="font-bold text-teal-900 bg-teal-50/30">Modifikasi Ergonomi Rumah</td>
                  <td class="text-slate-800 leading-relaxed font-medium">${dossier.rehabilitation.homeModifications}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- TABEL SUB-KONTEN 8: KETERKAITAN & DAMPAK SILANG ANTAR-SISTEM (CROSS-TALK) -->
        <div class="rounded-xl border border-indigo-200 bg-indigo-50/20 overflow-hidden">
          <div class="bg-indigo-900 text-white px-4 py-2 font-bold text-xs sm:text-sm flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-network-wired text-indigo-300"></i>8. Tabel Keterkaitan & Dampak Silang Antar-Sistem (Inter-System Cross-Talk)</span>
            <span class="text-[11px] text-indigo-200 font-normal">Kaskade Biologis Multiorgan</span>
          </div>
          <div class="overflow-x-auto">
            <table class="diag-table bg-white">
              <thead>
                <tr>
                  <th class="w-1/3">Aspek Interaksi Antar-Sistem</th>
                  <th class="w-2/3">Keterangan Biologis & Penanganan Terintegrasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-bold text-indigo-950 bg-indigo-50/50">Hubungan Primer Antar-Sistem</td>
                  <td class="text-indigo-950 font-black leading-relaxed bg-indigo-50/20">${(dossier.systemCrossTalk && dossier.systemCrossTalk.primaryLink) ? dossier.systemCrossTalk.primaryLink : "Interaksi Sistemik Multi-Organ"}</td>
                </tr>
                <tr>
                  <td class="font-bold text-slate-900 bg-slate-50">Mekanisme Biologis & Kaskade Silang</td>
                  <td class="text-slate-800 leading-relaxed font-medium">${(dossier.systemCrossTalk && dossier.systemCrossTalk.biologicalMechanism) ? dossier.systemCrossTalk.biologicalMechanism : "Interaksi timbal balik antara sistem organ terkait."}</td>
                </tr>
                <tr class="bg-rose-50/30">
                  <td class="font-bold text-rose-950 bg-rose-50/60">Dampak Klinis Multiorgan & Bahaya</td>
                  <td class="text-rose-950 font-bold leading-relaxed">${(dossier.systemCrossTalk && dossier.systemCrossTalk.clinicalImpact) ? dossier.systemCrossTalk.clinicalImpact : "Risiko kerapuhan fungsional dan komplikasi multiorgan."}</td>
                </tr>
                <tr class="bg-emerald-50/30">
                  <td class="font-bold text-emerald-950 bg-emerald-50/60">Pencegahan & Kolaborasi Multidisiplin</td>
                  <td class="text-emerald-950 font-bold leading-relaxed">${(dossier.systemCrossTalk && dossier.systemCrossTalk.prevention) ? dossier.systemCrossTalk.prevention : "Pemeriksaan holistik dan pemantauan klinis berkala."}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- TABEL SUB-KONTEN 9: ISTILAH MEDIS KUNCI, NOMENKLATUR LATIN & KODE ICD-10 -->
        <div class="rounded-xl border border-purple-300 bg-purple-50/20 overflow-hidden">
          <div class="bg-purple-900 text-white px-4 py-2 font-bold text-xs sm:text-sm flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-book-medical text-purple-300"></i>9. Tabel Istilah Medis Kunci, Nomenklatur Latin & Kode ICD-10</span>
            <span class="text-[11px] text-purple-200 font-normal">Kamus Klinis & Standar Diagnostik Internasional</span>
          </div>
          <div class="overflow-x-auto">
            <table class="diag-table bg-white">
              <thead>
                <tr>
                  <th class="w-1/4">Parameter Medis / Istilah Latin</th>
                  <th class="w-3/4">Nomenklatur Resmi & Definisi Klinis (Bahasa Awam & Rekam Medis)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-purple-50/70">
                  <td class="font-black text-purple-950 bg-purple-100/70">Diagnosis Klinis Resmi</td>
                  <td class="text-purple-950 font-black text-sm">${(dossier.medicalTerminology && dossier.medicalTerminology.formalDiagnosis) ? dossier.medicalTerminology.formalDiagnosis : item.name}</td>
                </tr>
                <tr class="bg-purple-50/40">
                  <td class="font-black text-purple-900 bg-purple-100/50">Kode Diagnosis ICD-10 (WHO)</td>
                  <td class="font-mono font-bold text-purple-900 bg-purple-50/30">${(dossier.medicalTerminology && dossier.medicalTerminology.icd10) ? dossier.medicalTerminology.icd10 : "R69"} <span class="text-xs font-normal text-slate-500 font-sans ml-2">(Standar Kode Diagnostik Internasional Rekam Medis & Klaim Asuransi)</span></td>
                </tr>
                ${(dossier.medicalTerminology && dossier.medicalTerminology.latinTerms && dossier.medicalTerminology.latinTerms.length > 0) ? dossier.medicalTerminology.latinTerms.map((t, idx) => `
                  <tr>
                    <td class="font-bold text-slate-900 bg-slate-50 font-mono text-xs sm:text-sm">
                      <span class="text-purple-700 font-black mr-1">${idx + 1}.</span> ${t.term}
                    </td>
                    <td class="text-slate-800 leading-relaxed font-medium">
                      ${t.meaning}
                    </td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td class="font-bold text-slate-900 bg-slate-50 font-mono text-xs sm:text-sm">Terminologia Clinica</td>
                    <td class="text-slate-800 leading-relaxed font-medium">Terminologi diagnosis tercatat secara formal dalam rekam medis klinis rumah sakit.</td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `;

    container.appendChild(card);
  });
}

// Fallback jika tidak ada di DEEP_CLINICAL_DATA
function getFallbackDossier(item) {
  return {
    systemCrossTalk: {
      primaryLink: "Interaksi Sistemik Multi-Organ",
      biologicalMechanism: `Interaksi antara organ ${item.organName} dengan sistem persarafan, pernapasan, pencernaan, metabolik dan muskuloskeletal.`,
      clinicalImpact: "Risiko kaskade sindrom kerapuhan multiorgan bila penyakit dasar tidak terkontrol.",
      prevention: "Evaluasi holistik menyeluruh dan penanganan geriatri multidisiplin terintegrasi."
    },
    pathophysiology: {
      cellularMechanism: `Inflamasi seluler lokal dan kerusakan jaringan epitelial organ ${item.organName} yang memicu gangguan homeostasis.`,
      geriatricFactor: `Immunosenescence dan penurunan cadangan fungsional organ terkait usia lanjut mempercepat progresivitas penyakit.`,
      organImpact: `Penurunan efisiensi organ fungsional yang berisiko komplikasi sistemik bila tidak terkontrol.`
    },
    geriatricSymptoms: {
      classical: "Gejala khas organ terkait",
      atypicalGeriatric: "Delirium hipoaktif mendadak, anoreksia, kelemahan umum ekstrem (letargi), dan risiko jatuh tanpa demam atau nyeri mencolok.",
      whyDifferent: "Penurunan respons termoregulasi pirogenik di hipotalamus dan neuropati otonom sensorik geriatri."
    },
    staging: {
      scoreName: `Klasifikasi Klinis: ${item.name}`,
      stages: [
        { level: "Derajat Ringan", criteria: "Gejala intermiten, fungsi organ kompensatif baik.", risk: "Risiko komplikasi rendah." },
        { level: "Derajat Sedang", criteria: "Gejala mengganggu fungsi harian, parameter lab abnormal.", risk: "Perlu medikamentosa ketat." },
        { level: "Derajat Berat", criteria: "Disfungsi organ bermakna, risiko gagal organ.", risk: "Indikasi rawat inap segera." }
      ]
    },
    diagnostic: {
      labTests: [
        { test: "Darah Lengkap & CRP", param: "Leukositosis, CRP kuantitatif untuk evaluasi intensitas infeksi/inflamasi." },
        { test: "Fungsi Ginjal & Elektrolit", param: "Kreatinin serum, eGFR, dan elektrolit lengkap." }
      ],
      imaging: `USG / Rontgen organ ${item.organName} sesuai indikasi medis.`,
      goldStandard: "Evaluasi klinis spesialis dan penunjang baku emas terarah."
    },
    pharmacotherapy: {
      primaryDrugs: `Farmakoterapi lini pertama spesifik untuk ${item.name}.`,
      beersCriteria: "PERINGATAN KRITERIA BEERS: Waspadai polifarmasi! Hindari NSAID dosis tinggi dan antikolinergik kuat pada lansia.",
      monitoring: "Fungsi ginjal (Kreatinin/eGFR) dan enzim hepar rutin."
    },
    clinicalNutrition: {
      macroMicro: "Energi 30 kkal/kgBB/hari, protein 1.2 g/kgBB, mikronutrien seimbang, hidrasi cukup.",
      recommendedFoods: "Ikan kaya omega-3, kaldu hangat, sayur bening, pepaya matang.",
      contraindicatedFoods: "Makanan olahan ultra-proses, makanan tinggi natrium, lemak jenuh tinggi."
    },
    emergency: {
      immediateTriggers: "Penurunan kesadaran mendadak, sesak napas berat, nyeri hebat, atau tanda syok.",
      firstAidHome: "Posisikan lansia setengah duduk, jangan beri makan saat linglung, segera bawa ke IGD."
    },
    rehabilitation: {
      physicalExercises: "Mobilisasi dini bertahap dan latihan napas diafragma.",
      homeModifications: "Penerangan kamar memadai, pasang pegangan dinding di toilet."
    },
    medicalTerminology: {
      formalDiagnosis: `${item.name} (Nomenklatur Klinis Standar)`,
      icd10: "R69",
      latinTerms: [
        { term: "Pathologia Organi", meaning: `Gangguan struktur atau fungsi pada organ tubuh ${item.organName}.` },
        { term: "Aetiologia", meaning: "Penyebab mendasar timbulnya penyakit atau kondisi klinis." },
        { term: "Prognosis", meaning: "Perkiraan perkembangan dan pemulihan kondisi kesehatan pasien di masa depan." },
        { term: "Homeostasis", meaning: "Keseimbangan fisiologis dinamis dalam tubuh manusia yang terganggu saat sakit." },
        { term: "Syndroma Geriatrica", meaning: "Kumpulan gejala khas pada usia lanjut akibat penurunan cadangan fungsional tubuh." }
      ]
    }
  };
}

function initTableFloatingTop() {
  const btn = document.getElementById('btn-floating-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
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
