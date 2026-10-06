const fs = require('fs');
const vm = require('vm');

// Load current clinical data
const currentCode = fs.readFileSync('clinical_data.js', 'utf8');
const clinicalData = vm.runInNewContext(currentCode + '; DEEP_CLINICAL_DATA;');

console.log('Existing clinical dossiers count:', Object.keys(clinicalData).length);

// New clinical dossiers for the comprehensive 12-system expansion
const additionalDossiers = {
  // === 1. SISTEM RANGKA (SKELETAL) ===
  "spondilosis-servikal": {
    "pathophysiology": {
      "cellularMechanism": "Degenerasi diskus intervertebralis servikalis akibat penurunan proteoglikan dan kadar air nukleus pulposus. Beban biomekanik abnormal memicu pembentukan osteofit (taji tulang) pada korpus vertebra dan sendi faset, menyebabkan hipertrofi ligamentum flavum dan penyempitan foramen intervertebralis serta kanalis spinalis servikalis.",
      "geriatricFactor": "Penuaan kolagen tipe II dan pengapuran ligamen servikalis menurunkan rentang gerak leher hingga 40%, meningkatkan kerapuhan kompresi mikrovaskular arteri spinalis anterior.",
      "organImpact": "Kompresi radiks saraf servikal (radikulopati C5-C7) atau kompresi medula spinalis leher (mielopati servikalis) yang memicu kelemahan spastik tungkai bawah, gangguan proprioseptif, dan disfungsi sfingter."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri leher menjalar ke bahu dan lengan (brakialgia), kesemutan di jari tangan, kaku leher saat menengok.",
      "atypicalGeriatric": "Sering tanpa nyeri leher hebat! Bermanifestasi sebagai tangan kaku kikuk (sulit mengancingkan baju, tulisan tangan memburuk), jalan sempoyongan seperti melayang di atas kasur busa (gait ataxia), dan sering menjatuhkan barang tanpa sadar.",
      "whyDifferent": "Degenerasi saraf proprioseptif servikal pada lansia membuat gangguan keseimbangan gerak lebih menonjol dibanding keluhan nyeri leher lokal."
    },
    "staging": {
      "scoreName": "Skor Mielopati Servikal JOA Modifikasi (mJOA Score)",
      "stages": [
        { "level": "Derajat Ringan (Skor 15 - 17)", "criteria": "Kelemahan motorik jari tangan minimal, masih mampu berjalan mandiri tanpa bantuan.", "risk": "Terapi konservatif: fisioterapi servikal, traksi leher, dan neck collar saat bepergian." },
        { "level": "Derajat Sedang (Skor 12 - 14)", "criteria": "Kesulitan mengancingkan baju, membutuhkan tongkat atau pegangan saat berjalan jauh.", "risk": "Perlu evaluasi MRI servikal berkala; pertimbangkan intervensi bedah dekompresi elektif." },
        { "level": "Derajat Berat (Skor < 12)", "criteria": "Tidak mampu berjalan mandiri, tetraparesis spastik, gangguan miksi/defekasi.", "risk": "Risiko kecacatan permanen - Indikasi bedah laminoplasti / ACDF (Anterior Cervical Discectomy and Fusion) segera." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Biomarker Inflamasi (LED & CRP)", "param": "Biasanya normal; membantu menyingkirkan spondilodistitis infeksius atau metastasis tulang." },
        { "test": "Kadar Kalsium & Vitamin D 25(OH)D", "param": "Menilai status mineralisasi tulang rangka servikal." }
      ],
      "imaging": "Foto Rontgen Servikal AP/Lateral/Obliq memperlihatkan penyempitan celah diskus dan osteofit foramen neural; MRI Servikal melihat kompresi medula (myelomalacia intramedular).",
      "goldStandard": "MRI Servikal 3 Tesla dengan T2-weighted sagittal & axial sequences menunjukkan sinyal hiperintens kompresi medula."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Analgesik lini pertama Parasetamol 3x500-1000 mg; Gabapentinoid (Gabapentin 100-300 mg malam atau Pregabalin 50-75 mg) untuk nyeri neuropatik radikular; relaksan otot Eperisone 3x50 mg jangka pendek.",
      "beersCriteria": "HINDARI analgesik NSAID dosis tinggi dan pelemas otot antikolinergik (Diazepam, Karisoprodol) yang meningkatkan risiko delirium dan jatuh pada lansia.",
      "monitoring": "Pantau kekuatan genggaman tangan, refleks Hoffmann, dan tanda babinski positif tiap bulan."
    },
    "clinicalNutrition": {
      "macroMicro": "Kalsium elemental 1200 mg/hari, Vitamin D3 1000-2000 IU/hari, magnesium 300 mg, dan asam lemak omega-3 anti-inflamasi.",
      "recommendedFoods": "Ikan teri basah, ikan sarden kaldu, susu tinggi kalsium rendah lemak, tahu tempe, brokoli kukus.",
      "contraindicatedFoods": "Garam berlebih (>2000 mg natrium/hari) yang memicu kalsiuria, minuman bersoda tinggi fosfat."
    },
    "emergency": {
      "immediateTriggers": "Kedua kaki mendadak lumpuh tidak bisa digerakkan (paraparesis akut), rasa kebas menjalar dari dada ke bawah, atau mendadak ngompol dan BAB tidak terasa (inkontinensia alvi/uri akut).",
      "firstAidHome": "Pasang penyangga leher kaku (cervical collar rigid) jika ada, JANGAN memijat atau memutar leher lansia, bawa segera ke IGD bedah saraf."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan retraksi leher (chin-tuck exercise), peregangan trapezius lembut, dan latihan koordinasi jari tangan (meremas bola busa terapi).",
      "homeModifications": "Gunakan bantal ergonomis berkontur leher (cervical contour pillow), hindari posisi menunduk lama melihat layar ponsel/TV."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Tulang Leher (Rangka), Saraf Pusat & Sistem Keseimbangan Otot",
      "biologicalMechanism": "Penyempitan kanalis tulang leher menjepit traktus kortikospinalis dan kolumna posterior di medula spinalis. Gangguan konduksi proprioseptif memutus informasi posisi kaki ke otak, melumpuhkan koordinasi otot postural dan memicu jatuh fraktur panggul.",
      "clinicalImpact": "Spondilosis servikal seringkali menjadi penyebab tersembunyi dari cedera jatuh berulang dan cedera kepala trauma pada lansia.",
      "prevention": "Perbaiki postur leher, hindari membawa beban berat di kepala/pundak, dan lakukan fisioterapi penguatan leher rutin."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Spondylosis Cervicalis cum Myelopathia & Radiculopathia",
      "icd10": "M47.812 / M47.12",
      "latinTerms": [
        { "term": "Osteophytosis Cervicalis", "meaning": "Pembentukan taji tulang abnormal pada tepi korpus tulang leher akibat pengapuran degeneratif." },
        { "term": "Stenosis Canalis Vertebralis", "meaning": "Penyempitan rongga pipa tulang belakang tempat berjalannya sumsum saraf medula spinalis." },
        { "term": "Radiculopathia Brachialis", "meaning": "Penjepit serabut akar saraf leher yang memicu nyeri menjalar ke bahu hingga jemari tangan." },
        { "term": "Myelopathia Compressiva", "meaning": "Kerusakan struktural sumsum tulang leher akibat jepitan kronis yang melumpuhkan koordinasi kaki." },
        { "term": "Signum Lhermitte", "meaning": "Sensasi sengatan listrik mendadak di punggung saat menekuk leher ke bawah tanda iritasi medula." }
      ]
    }
  },

  "osteoporosis-vertebra": {
    "pathophysiology": {
      "cellularMechanism": "Ketidakseimbangan remodel tulang: laju resorpsi tulang oleh osteoklas melampaui laju pembentukan matriks tulang baru oleh osteoblas. Terjadi penipisan trabekula tulang spongiosa korpus vertebra, mikro-fraktur trabekular berulang, dan hilangnya konektivitas arsitektur mikro tulang, menyebabkan vertebra rapuh dan runtuh di bawah beban tubuh fisiologis (fraktur kompresi).",
      "geriatricFactor": "Penurunan hormon estrogen (pada wanita pascamenopause) dan testosteron (pada pria), defisiensi kalsitriol (vitamin D aktif), serta penurunan aktivitas osteoblas geriatri.",
      "organImpact": "Runtuhnya korpus vertebra torakal/lumbal memicu deformitas tulang belakang membungkuk permanen (kifosis senilis / dowager's hump), penurunan tinggi badan (>3-5 cm), dan restriksi ekspansi rongga dada paru-paru."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri punggung bawah atau dada belakang mendadak tajam setelah membungkuk mengambil barang ringan atau batuk keras, nyeri memburuk saat berdiri/berjalan.",
      "atypicalGeriatric": "Sering terjadi tanpa nyeri akut (Silent Fracture)! Diketahui secara kebetulan karena tubuh makin membungkuk, perut tampak membuncit terlipat, tinggi badan menyusut bertahap, dan sesak napas saat berjalan akibat dada terhimpit.",
      "whyDifferent": "Mikrofraktur bertahap dapat terjadi tanpa robekan periosteum akut sehingga tidak memicu rangsangan nosiseptif tajam."
    },
    "staging": {
      "scoreName": "Kriteria Baku WHO T-Score Kepadatan Tulang (DEXA Scan)",
      "stages": [
        { "level": "Kerapuhan Tulang Normal", "criteria": "T-Score BMD ≥ -1.0 SD (standar deviasi dewasa muda).", "risk": "Risiko fraktur rendah - Pertahankan nutrisi kalsium dan aktivitas fisik harian." },
        { "level": "Osteopenia (Pelemahan Tulang)", "criteria": "T-Score antara -1.0 SD hingga -2.5 SD.", "risk": "Risiko fraktur sedang - Suplementasi kalsium, vitamin D3, dan latihan menahan beban." },
        { "level": "Osteoporosis Berat / Established", "criteria": "T-Score ≤ -2.5 SD disertai adanya satu atau lebih riwayat fraktur kerapuhan (fraktur vertebra/panggul).", "risk": "Risiko tinggi fraktur berulang - Terapi farmakologis anti-resorptif / anabolik tulang intensif." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Kadar Vitamin D 25(OH)D Total", "param": "Defisiensi berat jika <20 ng/mL; target terapi osteoporosis >30-50 ng/mL." },
        { "test": "Biomarker Resorpsi Tulang (CTX / C-Terminal Telopeptide)", "param": "Peningkatan CTX darah menunjukkan perombakan tulang berlebih." }
      ],
      "imaging": "Foto Rontgen Vertebra Torakolumbal Lateral menunjukkan penipisan korteks, gambaran 'picture-frame vertebra', dan deformitas baji (wedge compression fracture).",
      "goldStandard": "Dual-Energy X-ray Absorptiometry (DEXA Scan) pada tulang belakang lumbal (L1-L4) dan leher tulang paha (femoral neck)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Bisfosfonat lini pertama (Asam Zolendronat 5 mg infus 1x setahun atau Alendronat 70 mg oral 1x seminggu) dikombinasikan dengan Kalsium 1000 mg + Vitamin D3 1000-2000 IU harian; atau agen anabolik Teriparatide (PTH rekombinan) pada osteoporosis berat.",
      "beersCriteria": "KRITERIA BEERS: Waspadai esofagitis ulseratif pada Alendronat oral (pasien harus duduk tegak minimal 30 menit setelah minum dengan segelas air penuh); hindari NSAID jangka panjang pada lansia berisiko patah tulang.",
      "monitoring": "Evaluasi T-Score DEXA berkala tiap 1-2 tahun dan pantau fungsi ginjal (eGFR) sebelum pemberian bisfosfonat intravena."
    },
    "clinicalNutrition": {
      "macroMicro": "Kalsium elemental 1200 mg/hari, protein berkualitas tinggi 1.2 g/kgBB/hari untuk kekuatan matriks kolagen, vitamin K2 100 mcg (mengaktifkan osteokalsin).",
      "recommendedFoods": "Ikan teri, yogurt tanpa pemanis, keju cheddar, tahu kuning, kacang almond, telur rebus, bayam kukus.",
      "contraindicatedFoods": "Minuman kopi kafein tinggi (>3 cangkir/hari), minuman beralkohol, garam dapur berlebih (natrium tinggi menarik kalsium keluar lewat urin)."
    },
    "emergency": {
      "immediateTriggers": "Nyeri punggung hebat tak tertahankan setelah terpeleset ringan, ketidakmampuan menopang tubuh berdiri sama sekali, atau munculnya kebas/kelumpuhan pada kedua tungkai kaki.",
      "firstAidHome": "Baringkan datar di kasur keras yang nyaman, jangan memijat atau menginjak punggung yang sakit, segera panggil ambulans atau bawa ke IGD orthopedi."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan ekstensi punggung (isometric back strengthening), jalan santai 30 menit/hari, dan latihan keseimbangan postural Tai Chi untuk mencegah jatuh.",
      "homeModifications": "Pasang pegangan dinding di toilet, singkirkan karpet licin di lantai, pastikan penerangan kamar tidur malam hari terang, gunakan korset penyangga torakolumbal (TLSO brace)."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Tulang Belakang (Rangka), Rongga Dada Paru-paru & Saluran Cerna",
      "biologicalMechanism": "Fraktur kompresi vertebra multipel memicu kifosis bungkuk ekstrem (Dowager's hump). Rongga dada yang menciut menekan paru-paru (Penyakit Paru Restriktif) memicu hipoksia kronis; rongga perut yang tertekan menekan lambung memicu rasa begah kenyang dini, refluks asam, dan malnutrisi.",
      "clinicalImpact": "Osteoporosis tulang belakang yang parah dapat menyebabkan gagal napas restriktif dan penurunan kualitas hidup drastis.",
      "prevention": "Skrining DEXA scan rutin pada semua wanita usia ≥65 tahun dan pria usia ≥70 tahun, serta pencegahan jatuh proaktif."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Osteoporosis Senilis cum Fractura Compressiva Vertebrae",
      "icd10": "M80.08 / M81.0",
      "latinTerms": [
        { "term": "Fractura Compressiva Vertebrae", "meaning": "Runtuhnya ketinggian korpus tulang belakang akibat kerapuhan struktur matriks tulang." },
        { "term": "Kyphosis Senilis", "meaning": "Kelengkungan tulang belakang membungkuk ke depan akibat penumpukan fraktur baji korpus vertebra." },
        { "term": "Trabecula Ossea Rara", "meaning": "Penipisan dan pelemahan jaring-jaring tulang spongiosa penyangga kekuatan tulang belakang." },
        { "term": "Resorptio Ossea Osteoclastica", "meaning": "Aktivitas sel pemakan tulang (osteoklas) yang berlebihan melampaui pembentukan tulang baru." },
        { "term": "Kyphoplastia Percutanea", "meaning": "Prosedur intervensi penyuntikan semen tulang khusus (PMMA) ke dalam korpus vertebra yang patah." }
      ]
    }
  },

  "osteoartritis-panggul": {
    "pathophysiology": {
      "cellularMechanism": "Degenerasi progresif kartilago hialin sendi panggul (artikulasio koksa) akibat stres mekanik bertahun-tahun. Kondrosit melepaskan enzim matriks metaloproteinase (MMP-13) dan agrekanase yang mengikis proteoglikan tulang rawan. Tulang subkondral merespons dengan sklerosis eburnasi, pembentukan kista subkondral, dan osteofit marginal di sekitar asetabulum dan kaput femur.",
      "geriatricFactor": "Penurunan sintesis pelumas cairan sinovial (asam hialuronat) dan penurunan elastisitas ligamen sendi panggul geriatri, diperparah beban berat badan berlebih.",
      "organImpact": "Penyempitan celah sendi panggul total, pemendekan panjang tungkai fungsional, fiksasi deformitas fleksi-adduksi, dan kerapuhan kolum femur yang sangat rentan patah saat terpeleset."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri sendi lipat paha menjalar ke paha depan dan lutut saat melangkah, kaku sendi pagi hari <30 menit, pincang saat berjalan (antalgic gait).",
      "atypicalGeriatric": "Nyeri sering dirasakan HANYA di lutut atau bokong bawah (nyeri alih nervus obturatorius), kesulitan memakai kaos kaki atau memotong kuku kaki sendiri, langkah kaki menyeret, dan keengganan bangkit dari kursi.",
      "whyDifferent": "Nyeri alih panggul sering mengecoh keluarga dan dokter pemeriksa sehingga disangka sakit lutut murni."
    },
    "staging": {
      "scoreName": "Klasifikasi Radiografi Kellgren-Lawrence (Sendi Panggul)",
      "stages": [
        { "level": "Derajat 1 (Meragukan)", "criteria": "Penyempitan celah sendi minimal dan osteofit marjinal meragukan.", "risk": "Modifikasi aktivitas, penurunan berat badan, latihan penguatan otot abduktor panggul." },
        { "level": "Derajat 2 - 3 (Ringan - Sedang)", "criteria": "Osteofit definitif nyata, penyempitan celah sendi panggul jelas, sklerosis subkondral.", "risk": "Farmakoterapi analgesik, fisioterapi, penggunaan tongkat jalan di sisi kontralateral." },
        { "level": "Derajat 4 (Berat / Tulang Bertemu Tulang)", "criteria": "Hilangnya celah sendi komplit, deformitas kaput femur, kista tulang subkondral besar.", "risk": "Nyeri konstan saat istirahat dan disabilitas berat - Indikasi operasi Penggantian Sendi Panggul Total (Total Hip Arthroplasty / THA)." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Darah Lengkap & LED/CRP", "param": "Normal pada osteoartritis murni; membantu menyingkirkan artritis reumatoid atau infeksi sendi septik." }
      ],
      "imaging": "Foto Rontgen Pelvis AP dan Frog-leg lateral memperlihatkan penyempitan celah sendi koksa superior/aksial, sklerosis tulang subkondral, dan osteofit asetabulum.",
      "goldStandard": "Evaluasi radiografi polos pelvis beban (weight-bearing pelvic radiograph) dikombinasikan dengan pemeriksaan fisik rotasi internal sendi panggul terbatas."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Analgesik Parasetamol oral hingga 3 g/hari; Duloxetine 30-60 mg/hari untuk nyeri muskuloskeletal kronis; suntikan intra-artikular kortikosteroid dengan panduan USG untuk pereda nyeri temporer.",
      "beersCriteria": "HINDARI NSAID oral jangka panjang (Ketorolak, Piroksikam, Diklofenak) pada lansia karena risiko tinggi gagal ginjal akut, hipertensi tak terkontrol, dan perdarahan lambung.",
      "monitoring": "Pantau kemampuan ambulasi mandiri (skor Harris Hip Score) dan keseimbangan berdiri."
    },
    "clinicalNutrition": {
      "macroMicro": "Defisit kalori terarah jika lansia obesitas (penurunan 5-10% berat badan mengurangi beban sendi panggul drastis), glukosamin sulfat dan kondroitin, omega-3 antioksidan.",
      "recommendedFoods": "Kaldu ceker ayam kaya kolagen, ikan kembung/tuna, minyak zaitun, sayur bayam, kacang kedelai rebus.",
      "contraindicatedFoods": "Gorengan minyak jelantah tinggi asam lemak trans, makanan manis tinggi gula yang memicu inflamasi sistemik."
    },
    "emergency": {
      "immediateTriggers": "Lansia terjatuh terpeleset lalu tidak mampu berdiri sama sekali, tungkai kaki tampak memendek dan memuntir ke arah luar (eksorotasi) dengan nyeri hebat di pangkal paha (Tanda Fraktur Kolum Femur / Patah Tulang Leher Paha!).",
      "firstAidHome": "JANGAN mengangkat atau menarik kaki lansia yang patah, tahan posisi dengan bantal di kanan-kiri paha, segera hubungi ambulans IGD orthopedi untuk fiksasi bedah dalam 24-48 jam guna mencegah nekrosis avaskular."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan penguatan otot gluteus medius dan kuadrisep, bersepeda statis tanpa beban, senam air (hidroterapi) untuk melatih mobilitas panggul tanpa membebani sendi.",
      "homeModifications": "Gunakan dudukan kloset duduk yang ditinggikan (raised toilet seat), gunakan sendok sepatu bergagang panjang (long-handled shoehorn), pasang pegangan dinding di samping tempat tidur."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Sendi Panggul (Rangka), Pembuluh Darah Tungkai & Paru-paru (DVT/Emboli Paru)",
      "biologicalMechanism": "Nyeri panggul berat atau fraktur leher paha memaksa lansia tirah baring imobilisasi total di kasur. Aliran darah vena tungkai melambat drastis (stasis vena), memicu penggumpalan darah beku di vena dalam (DVT). Bekuan darah dapat lepas dan terbawa ke arteri paru memicu Emboli Paru Fatal.",
      "clinicalImpact": "Patah tulang panggul pada geriatri memiliki angka mortalitas tahun pertama mencapai 20-30% bukan karena patah tulangnya sendiri, melainkan komplikasi imobilisasi (DVT, emboli paru, pneumonia, dan dekubitus).",
      "prevention": "Mobilisasi dini secepat mungkin pasca-operasi panggul, penggunaan stocking kompresi anti-tromboemboli, dan antikoagulan profilaksis."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Coxarthrosis Primaria Bilateralis & Fractura Colli Femoris",
      "icd10": "M16.9 / S72.00",
      "latinTerms": [
        { "term": "Coxarthrosis Degenerativa", "meaning": "Pengapuran dan pengikisan tulang rawan sendi panggul yang membatasi pergerakan melangkah." },
        { "term": "Caput Femoris", "meaning": "Kepala bulat tulang paha yang bersendi ke dalam mangkuk asetabulum tulang panggul." },
        { "term": "Sclerosis Subchondralis", "meaning": "Penebalan dan pengerasan tulang di bawah lapisan rawan sendi akibat beban gesekan langsung." },
        { "term": "Gait Antalgicus", "meaning": "Pola langkah jalan pincang untuk meminimalkan waktu menumpu beban pada panggul yang sakit." },
        { "term": "Arthroplastica Totalis Coxae (THA)", "meaning": "Operasi penggantian sendi panggul total menggunakan implan prostetik metal dan polietilen." }
      ]
    }
  },

  "osteoartritis-lutut": {
    "pathophysiology": {
      "cellularMechanism": "Degenerasi menyeluruh sendi lutut (artikulasio genu) melibatkan kondromalasia tulang rawan artikular, sinovitis hipertrofik ringan, sklerosis tulang subkondral kondilus femur dan plateau tibia, serta penipisan meniskus. Enzim degradatif memecah kolagen tipe II, melepaskan serpihan rawan mikroskopis ke cairan sendi yang memicu efusi sinovial reaktif berulang.",
      "geriatricFactor": "Penurunan proprioception sendi lutut, kelemahan otot paha depan (kuadrisep), dan deformitas mekanik varus (kaki O) atau valgus (kaki X) seiring usia lanjut.",
      "organImpact": "Penyempitan kompartemen sendi lutut (terutama medial), instabilitas ligamen kolateral, krepitasi kasar saat ditekuk, dan pembentukan kista Baker di lipat belakang lutut."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri lutut saat berjalan jauh atau naik-turun tangga, bunyi gemeretak kasar saat ditekuk (krepitasi), kaku sendi pagi hari <30 menit, lutut tampak membesar bengkak.",
      "atypicalGeriatric": "Sensasi lutut mendadak lemas mau lepas (giving-way / buckle sensation) yang memicu jatuh tersungkur ke depan, kesulitan jongkok atau bangkit dari lantai saat sholat, dan bentuk kaki perlahan melengkung seperti huruf O (bow-legged).",
      "whyDifferent": "Kelemahan otot penyangga paha membuat ketidakstabilan mekanik lebih berbahaya memicu cedera jatuh daripada intensitas nyerinya."
    },
    "staging": {
      "scoreName": "Klasifikasi Kellgren-Lawrence (Lutut / Genu)",
      "stages": [
        { "level": "Derajat 1 (Awal)", "criteria": "Penyempitan celah sendi meragukan, kemungkinan taji osteofit kecil.", "risk": "Latihan penguatan kuadrisep, koreksi alas kaki empuk, manajemen berat badan." },
        { "level": "Derajat 2 - 3 (Sedang)", "criteria": "Osteofit definitif nyata, penyempitan celah sendi medial nyata, sklerosis subkondral sedang.", "risk": "Fisioterapi modalitas (TENS, ultrasound), penyangga lutut (knee brace), analgesik terarah." },
        { "level": "Derajat 4 (Berat / Kering Total)", "criteria": "Celah sendi lenyap (tulang saling bergesekan), deformitas varus berat, erosi tulang luas.", "risk": "Disabilitas fungsional berat - Indikasi operasi Penggantian Sendi Lutut Total (Total Knee Arthroplasty / TKA)." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Analisis Cairan Sinovial Lutut (Arstrosentesis)", "param": "Cairan jernih kental kekuningan dengan leukosit <2000 sel/uL (non-inflamasi) membedakan OA dari artritis septik (>50.000 sel/uL) atau asam urat." },
        { "test": "Kadar Asam Urat Serum", "param": "Menyingkirkan komorbiditas artritis gout pada lutut bengkak." }
      ],
      "imaging": "Foto Rontgen Sendi Lutut Posisi Berdiri Beban (Weight-Bearing AP dan Lateral) memperlihatkan penyempitan celah kompartemen medial dan osteofit patela.",
      "goldStandard": "Rontgen genu posisi weight-bearing bilateral (standing AP view)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Krim/gel NSAID topikal (Diklofenak gel 2-4 kali/hari dioleskan di lutut - pilihan sangat aman pada lansia karena absorpsi sistemik minimal <5%); Parasetamol oral; injeksi Asam Hialuronat intra-artikular (viscosupplementation) untuk melumasi sendi.",
      "beersCriteria": "KRITERIA BEERS: Utamakan selalu NSAID TOPIKAL (oles) dibanding tablet minum pada lansia guna mencegah toksisitas ginjal, lambung, dan komplikasi jantung!",
      "monitoring": "Pantau lingkar lutut dan jarak tempuh jalan 6 menit (6-minute walk test)."
    },
    "clinicalNutrition": {
      "macroMicro": "Penurunan berat badan: setiap penurunan 1 kg bobot tubuh mengurangi beban pada sendi lutut sebesar 4 kg saat melangkah!",
      "recommendedFoods": "Ikan kaya asam lemak omega-3, kunyit kuning (kurkumin anti-inflamasi alami), jahe, buah pepaya, kacang kedelai, kaldu tulang.",
      "contraindicatedFoods": "Gorengan berulang, makanan cepat saji tinggi garam dan MSG, minuman berpemanis sirup fruktosa tinggi."
    },
    "emergency": {
      "immediateTriggers": "Sendi lutut mendadak bengkak merah membara, sangat panas saat disentuh, nyeri hebat tak tertahankan disentuh sprei saja menjerit, disertai demam menggigil (Tanda Artritis Septik Infeksi Sendi Darurat!).",
      "firstAidHome": "Segera larikan ke IGD rumah sakit; dokter perlu melakukan punksi aspirasi jarum steril untuk mengeluarkan nanah sendi dan antibiotik intravena darurat agar tulang rawan tidak hancur permanen."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan Isometrik Kuadrisep (menekan bantal kecil di bawah lutut sambil telentang), latihan mengangkat tungkai lurus (straight leg raise), berenang gaya dada atau berjalan di kolam renang.",
      "homeModifications": "Hindari jongkok di toilet lantai (wajib gunakan kloset duduk), pasang pegangan dinding di tangga rumah, gunakan deker lutut elastis saat berjalan keluar rumah."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Sendi Lutut (Rangka), Otot Kuadrisep (Muskular) & Jaringan Lemak (Obesitas)",
      "biologicalMechanism": "Jaringan lemak berlebih pada lansia obesitas bukan hanya menambah beban mekanik kompresi lutut, melainkan juga memproduksi hormon sitokin adipokin (leptin, resistin) yang secara aktif merusak kondrosit tulang rawan lutut secara metabolik sistemik.",
      "clinicalImpact": "Lingkaran setan OA lutut: Lutut sakit -> Lansia enggan bergerak -> Berat badan makin naik & otot paha menyusut -> Lutut makin rusak parah dan timbul komplikasi diabetes/jantung.",
      "prevention": "Kombinasi kontrol berat badan, latihan penguatan otot paha depan, dan hindari kebiasaan duduk bersila atau jongkok terlalu lama."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Gonarthrosis Primaria Bilateralis cum Synovitide Reaciva",
      "icd10": "M17.9 / M17.0",
      "latinTerms": [
        { "term": "Gonarthrosis Genu", "meaning": "Penyakit pengapuran dan kerusakan degeneratif pada tulang rawan sendi lutut." },
        { "term": "Crepitatio Articularis", "meaning": "Suara gemeretak berderak kasar saat sendi lutut ditekuk atau diluruskan akibat gesekan tulang." },
        { "term": "Deformitas Genua Vara", "meaning": "Kelainan bentuk tungkai bawah melengkung ke luar menyerupai huruf O akibat ausnya kompartemen dalam." },
        { "term": "Effusio Sinovialis", "meaning": "Penumpukan cairan radang berlebih di dalam rongga sendi yang membuat lutut tampak bengkak kencang." },
        { "term": "Arthroplastica Totalis Genu (TKA)", "meaning": "Operasi penggantian permukaan sendi lutut yang aus dengan bantalan logam prostetik presisi." }
      ]
    }
  },

  "artritis-gout": {
    "pathophysiology": {
      "cellularMechanism": "Presipitasi kristal Monosodium Urat (MSU) di dalam cairan sinovial dan jaringan periartikular akibat hiperurisemia kronis (kadar asam urat serum melebihi titik jenuh >6.8 mg/dL). Kristal MSU difagositosis oleh makrofag sinovial, memicu aktivasi kaskade inflamasom NLRP3 yang melepaskan sitokin poten Interleukin-1β (IL-1β). Terjadi migrasi masif neutrofil dan vasodilatasi hebat yang memicu peradangan sinovium destruktif akut.",
      "geriatricFactor": "Penurunan laju filtrasi glomerulus ginjal (klirens asam urat berkurang) dan penggunaan rutin obat diuretik antihipertensi (Furosemid/HCT) pada lansia.",
      "organImpact": "Serangan berulang memicu pembentukan tofus (endapan kristal urat padat) di telinga, sendi jari, dan tendon, erosi tulang 'punched-out' periartikular, serta nefropati asam urat di ginjal."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri hebat mendadak tengah malam di pangkal ibu jari kaki (Podagra), sendi membengkak merah mengkilap, sangat panas, disentuh selimut tipis saja menjerit kesakitan.",
      "atypicalGeriatric": "Sering poliartikular (mengenai banyak sendi sekaligus: pergelangan tangan, siku, lutut, jari tangan) tanpa podagra klasik, awitan lebih lambat dan subakut yang menyerupai rematik biasa, serta ditemukannya benjolan tofus putih kapur di daun telinga atau punggung jari tanpa nyeri hebat.",
      "whyDifferent": "Penurunan respons kemotaksis neutrofil akut membuat serangan pada lansia cenderung kronis poliartikular ketimbang monoartikular eksplosif."
    },
    "staging": {
      "scoreName": "Stadium Klinis Penyakit Gout (ACR/EULAR)",
      "stages": [
        { "level": "Stadium 1 (Hiperurisemia Asimtomatik)", "criteria": "Asam urat >7 mg/dL tanpa pernah ada serangan radang sendi atau tofus.", "risk": "Modifikasi diet rendah purin dan hidrasi cukup; belum diindikasikan obat penurun asam urat rutin." },
        { "level": "Stadium 2 (Artritis Gout Akut & Interkritis)", "criteria": "Serangan radang sendi akut hilang timbul dengan masa bebas gejala di antaranya.", "risk": "Terapi anti-inflamasi fase akut; inisiasi obat penurun asam urat (ULT) pasca-akut." },
        { "level": "Stadium 3 (Gout Kronis Bertofus)", "criteria": "Endapan tofus padat di sendi multipel, nyeri persisten, destruksi tulang pada rontgen.", "risk": "Risiko kecacatan sendi dan gagal ginjal - Target asam urat serum agresif <5 mg/dL jangka panjang." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Kadar Asam Urat Serum", "param": "Dapat normal palsu saat serangan akut karena asam urat berpindah ke jaringan sendi; ulangi 2 minggu pasca-serangan (target <6 mg/dL)." },
        { "test": "Analisis Cairan Sendi (Mikroskop Polarisasi)", "param": "BAKU EMAS: Ditemukannya kristal monosodium urat berbentuk jarum dengan birefringence negatif kuat." }
      ],
      "imaging": "USG Sendi menunjukkan 'Double Contour Sign' (lapisan kristal urat hiperekoik di atas rawan sendi); Rontgen memperlihatkan lesi erosi 'overhanging edge' punched-out.",
      "goldStandard": "Aspirasi cairan sendi dengan visualisasi kristal MSU jarum polarisasi negatif."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Fase Akut: Kolkisin dosis rendah (0.5 mg 2 kali/hari dimulai dalam 12 jam pertama) atau Kortikosteroid oral (Metilprednisolon 16 mg/hari tappering-off 7-10 hari). Fase Kronis: Penghambat xantin oksidase Allopurinol (dimulai 50-100 mg/hari titrasi bertahap) atau Febuxostat.",
      "beersCriteria": "KRITERIA BEERS: HINDARI dosis tinggi Kolkisin (dapat memicu toksisitas neuromiopati fatal pada penurunan ginjal); HINDARI NSAID dosis tinggi pada lansia gout dengan penyakit ginjal atau jantung!",
      "monitoring": "Pantau fungsi ginjal (Kreatinin/eGFR), enzim hepar SGOT/SGPT, dan kadar asam urat serum berkala."
    },
    "clinicalNutrition": {
      "macroMicro": "Hidrasi air putih melimpah 2.5 liter/hari untuk mencegah kristalisasi asam urat di tubulus ginjal, restriksi purin tinggi.",
      "recommendedFoods": "Susu rendah lemak (efek urikosurik alami), buah ceri atau jus ceri tart (menurunkan asam urat), tahu tempe dalam porsi wajar (purin nabati aman), sayur bayam/kacang porsi moderat.",
      "contraindicatedFoods": "Jeroan (hati, babat, usus, otak), daging merah pekat kambing/sapi, emping melinjo, seafood kerang/kepiting, minuman bir/alkohol, dan minuman manis sirup fruktosa."
    },
    "emergency": {
      "immediateTriggers": "Bengkak sendi disertai demam tinggi menggigil, nanah keluar dari luka tofus yang pecah di kulit (infeksi tofus sekunder), atau lansia tidak bisa berkemih sama sekali (gagal ginjal akut nefropati urat).",
      "firstAidHome": "Kompres es dingin di sendi yang bengkak (JANGAN kompres air panas karena memperparah radang), istirahatkan tungkai kaki posisi lebih tinggi, segera bawa ke dokter."
    },
    "rehabilitation": {
      "physicalExercises": "Istirahatkan sendi total selama 24-48 jam pertama serangan; latihan mobilisasi sendi perlahan setelah nyeri mereda.",
      "homeModifications": "Gunakan alas kaki sandal berujung lebar dan bertelapak empuk agar tidak menekan tonjolan pangkal ibu jari kaki."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Sendi (Rangka), Ginjal (Sistem Urinaria) & Pembuluh Darah Jantung",
      "biologicalMechanism": "Kristal asam urat yang beredar dalam darah tidak hanya mengendap di sendi, melainkan juga mengkristal di tubulus ginjal memicu Batu Ginjal Asam Urat dan Nefropati Interstisial Kronis. Asam urat tinggi juga merusak endotel pembuluh darah, memicu hipertensi dan penyakit jantung koroner.",
      "clinicalImpact": "Pasien lansia dengan gout kronis yang tidak terkontrol memiliki risiko gagal ginjal dan serangan jantung 2 kali lipat lebih tinggi.",
      "prevention": "Kepatuhan minum obat Allopurinol setiap hari secara teratur tanpa putus bahkan saat sendi tidak terasa sakit."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Arthritis Gouty Acuta & Tophacea Chronica",
      "icd10": "M10.0 / M10.00",
      "latinTerms": [
        { "term": "Podagra", "meaning": "Serangan peradangan nyeri hebat akut pada sendi metatarsofalangeal pertama (pangkal ibu jari kaki)." },
        { "term": "Tophus Gouty", "meaning": "Benjolan timbunan kristal kapur monosodium urat padat di bawah kulit dan sekitar persendian." },
        { "term": "Hyperuricaemia", "meaning": "Peningkatan kadar asam urat dalam plasma darah melebihi batas kelarutan normal (>6.8-7.0 mg/dL)." },
        { "term": "Birefringence Negativa", "meaning": "Sifat optik khas kristal urat yang tampak bersinar kuning sejajar sumbu saat dilihat mikroskop polarisasi." },
        { "term": "Erosio Punched-Out", "meaning": "Kerusakan tulang tepi sendi berbentuk lubang cekung khas dengan batas tepi menggantung pada foto rontgen." }
      ]
    }
  },

  // === 2. SISTEM PEREDARAN DARAH (KARDIOVASKULAR) ===
  "penyakit-jantung-koroner": {
    "pathophysiology": {
      "cellularMechanism": "Ruptur atau erosi plak aterosklerotik pada arteri koronaria (LAD, LCx, atau RCA). Paparan kolagen subendotelial mengaktifkan adhesi dan agregasi trombosit, memicu kaskade koagulasi dan pembentukan trombus oklusif akut. Aliran darah miokardium terputus mendadak, menyebabkan iskemia seluler, kegagalan pompa ion Na+/K+-ATPase, deplesi ATP, nekrosis koagulatif miosit jantung, dan pelepasan troponin kardial ke sirkulasi.",
      "geriatricFactor": "Kalsifikasi berat arteri koroner (Mönckeberg sclerosis), kekakuan aorta (arterial stiffness), berkurangnya angiogenesis kolateral, dan tingginya prevalensi neuropati otonom diabetik.",
      "organImpact": "Nekrosis dinding ventrikel menurunkan fraksi ejeksi jantung akut, memicu disfungsi sistolik/diastolik, aritmia ventrikel letal (VF/VT), syok kardiogenik, atau gagal jantung kongestif menahun."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri dada retrosternal seperti tertimpa beban berat menjalar ke lengan kiri, leher, atau rahang bawah, berlangsung >20 menit disertai keringat dingin dan sesak napas.",
      "atypicalGeriatric": "SANGAT SERING 'SILENT INFARCTION' TANPA NYERI DADA (>40% kasus lansia)! Bermanifestasi sebagai sesak napas mendadak tak terjelaskan (anginal equivalent), rasa lemas lunglai ekstrem (fatigue akut), mual kembung disangka maag, pingsan tiba-tiba (sinkop), atau linglung mendadak (delirium kardial).",
      "whyDifferent": "Degenerasi serabut saraf aferen simpatis kardial dan tingginya angka neuropati otonom diabetes pada geriatri meredam sinyal nyeri ke korteks serebri."
    },
    "staging": {
      "scoreName": "Stratifikasi Risiko GRACE & Klasifikasi Killip (Infark Miokard Akut)",
      "stages": [
        { "level": "Killip I", "criteria": "Infark miokard tanpa tanda gagal jantung kongestif atau ronki basah.", "risk": "Mortalitas rumah sakit rendah (6%) - Terapi revaskularisasi dini dan DAPT." },
        { "level": "Killip II - III", "criteria": "Killip II: Ronki basah halus di basal paru, S3 gallop; Killip III: Edema paru akut luas.", "risk": "Mortalitas sedang hingga tinggi (17-38%) - Diuretik intravena, vasodilator, oksigenasi ketat." },
        { "level": "Killip IV (Syok Kardiogenik)", "criteria": "Tekanan darah sistolik <90 mmHg, oliguria, akral dingin, penurunan kesadaran.", "risk": "Mortalitas sangat tinggi (>60-80%) - Intervensi Koroner Perkutan (PCI) primer darurat dan obat inotropik/IABP." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Cardiac Troponin I / T Kuantitatif (hs-cTn)", "param": "Peningkatan kurva troponin melonjak tinggi di atas persentil 99 batas atas normal menandakan nekrosis miosit akut." },
        { "test": "CK-MB & Profil Elektrolit (Kalium, Magnesium)", "param": "Memantau perluasan infark dan mencegah aritmia letal hipokalemia." }
      ],
      "imaging": "EKG 12 Sandapan: Elevasi segmen ST (STEMI) atau depresi ST/inversi T (NSTEMI); Ekokardiografi Transtorakal (TTE) melihat kelainan gerak dinding ventrikel regional (RWMA) dan fraksi ejeksi (LVEF).",
      "goldStandard": "Angiografi Koroner Invasif (Kateterisasi Jantung / Catheterization Lab) untuk visualisasi langsung sumbatan arteri koroner."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Terapi Antiplatelet Ganda (DAPT: Aspirin 80-100 mg + Clopidogrel 75 mg); Statin intensitas tinggi (Atorvastatin 40-80 mg malam); ACE inhibitor/ARB; dan Beta-blocker kardioselektif (Bisoprolol dosis rendah titrasi).",
      "beersCriteria": "KRITERIA BEERS: Waspadai risiko perdarahan gastrointestinal pada DAPT geriatri (selalu sertakan PPI gastroprotektor); hindari Prasugrel pada usia ≥75 tahun karena risiko perdarahan intrakranial fatal!",
      "monitoring": "Pantau tekanan darah berkala, denyut nadi istirahat (target 55-65 bpm), dan fungsi ginjal/elektrolit."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet Rendah Garam (DASH diet) natrium <1500 mg/hari, lemak jenuh <7% kalori total, asam lemak omega-3, bebas lemak trans.",
      "recommendedFoods": "Ikan salmon/tenggiri, oatmeal gandum utuh (beta-glukan penurun kolesterol), minyak zaitun extra virgin, buah alpukat, sayuran hijau kukus.",
      "contraindicatedFoods": "Gorengan minyak jelantah, jeroan, santan kental, daging merah olahan (sosis/kornet), garam berlebih, minuman manis berenergi."
    },
    "emergency": {
      "immediateTriggers": "Sesak napas hebat mendadak disertai keringat dingin membasahi baju, dada terasa tertindih batu besar, pingsan tak sadarkan diri, atau nadi teraba sangat lemah/tidak teratur.",
      "firstAidHome": "Baringkan setengah duduk (Fowler), longgarkan pakaian leher, berikan tablet Aspirin kunyah 160-320 mg bila pasien sadar penuh dan tidak alergi, SEGERA hubungi ambulans IGD RS (Time is Muscle: target revaskularisasi <90-120 menit!)."
    },
    "rehabilitation": {
      "physicalExercises": "Rehabilitasi Jantung Fase II terstruktur: latihan jalan santai interval bertahap di bawah monitor EKG, hindari aktivitas mengejan (manuver Valsalva).",
      "homeModifications": "Sediakan tensimeter digital di rumah, catat tekanan darah dan denyut nadi setiap pagi, sediakan obat nitrat sublingual (ISDN) jika diresepkan dokter."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Jantung (Kardiovaskular), Paru-paru & Otak (Stroke)",
      "biologicalMechanism": "Gagal pompa bilik kiri jantung memicu tekanan balik retrograd ke vena pulmonalis, menyebabkan cairan merembes ke rongga kantung alveoli paru (Edema Paru Akut / Sesak Napas Kardial). Sumbatan koroner juga sering disertai aterosklerosis arteri karotis yang memicu stroke iskemik sekunder.",
      "clinicalImpact": "Penyakit Jantung Koroner merupakan penyebab kematian nomor 1 pada populasi usia lanjut di seluruh dunia.",
      "prevention": "Kontrol ketat tekanan darah (<130/80 mmHg), kadar kolesterol LDL (<55-70 mg/dL), dan berhenti merokok total."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Infarctus Myocardii Acutus (STEMI/NSTEMI) & Morbus Arteriae Coronariae",
      "icd10": "I21.9 / I25.10",
      "latinTerms": [
        { "term": "Infarctus Myocardii", "meaning": "Kematian jaringan otot dinding jantung akibat putusnya aliran pasokan darah arteri koroner." },
        { "term": "Atherosclerosis Coronaria", "meaning": "Penumpukan plak kolesterol dan kalsium yang menyumbat lumen pipa pembuluh darah jantung." },
        { "term": "Angina Pectoris", "meaning": "Sensasi nyeri dada tercekik atau tertindih beban berat akibat ketidakseimbangan pasokan oksigen miokard." },
        { "term": "Angiographia Coronaria", "meaning": "Pemeriksaan rontgen kontras pembuluh darah jantung via kateterisasi selang lipat paha atau lengan." },
        { "term": "Interventio Coronaria Percutanea (PCI)", "meaning": "Prosedur pemasangan cincin ring/stent jantung minimal invasif untuk membuka kembali arteri yang tersumbat." }
      ]
    }
  },

  "gagal-jantung": {
    "pathophysiology": {
      "cellularMechanism": "Sindrom klinis kompleks akibat ketidakmampuan jantung memompa darah secara adekuat untuk memenuhi kebutuhan metabolisme jaringan (disfungsi sistolik / HFrEF) atau ketidakmampuan relaksasi ventrikel untuk terisi darah pada tekanan normal akibat kekakuan miokardium (disfungsi diastolik / HFpEF). Aktivasi neurohormonal kronis (sistem renin-angiotensin-aldosteron / RAAS dan sistem saraf simpatis) memicu vasokonstriksi, retensi cairan, fibrosis interstisial, dan apoptosis miosit.",
      "geriatricFactor": "HFpEF (fraksi ejeksi terjaga) merupakan bentuk paling dominan pada geriatri (>70% kasus) akibat fibrosis miokardium fisiologis, kalsifikasi katup aorta/mitral, dan hipertensi menahun.",
      "organImpact": "Kongesti vena sistemik memicu pembengkakan kedua tungkai kaki (edema pretibial), pembesaran hati terisi darah stasis (hepatomegali kongestif), dan bendungan cairan di paru (edema paru)."
    },
    "geriatricSymptoms": {
      "classical": "Sesak napas saat beraktivitas (dyspnea on exertion), sesak napas saat berbaring telentang harus menggunakan 2-3 bantal (ortopnea), terbangun tengah malam tercekik batuk sesak (paroxysmal nocturnal dyspnea), bengkak kedua kaki.",
      "atypicalGeriatric": "Sering tanpa keluhan sesak napas mencolok! Muncul sebagai kelelahan ekstrem sepanjang hari, nafsu makan hilang mendadak (anoreksia kardiak), perut terasa penuh begah membesar (asites), penurunan daya ingat dan linglung (ensefalopati kardiogenik), dan nokturia (sering kencing di malam hari akibat reabsorpsi cairan edema tungkai saat berbaring).",
      "whyDifferent": "Aktivitas fisik lansia yang sudah terbatas membuat sesak saat beraktivitas jarang disadari; keluhan saluran cerna akibat kongesti hepar sering mendominasi."
    },
    "staging": {
      "scoreName": "Klasifikasi Fungsional NYHA (New York Heart Association) & Stadium ACC/AHA",
      "stages": [
        { "level": "NYHA Kelas I (Stadium B)", "criteria": "Penyakit jantung struktural tanpa batasan aktivitas fisik biasa; tidak memicu sesak/lelah berlebih.", "risk": "Terapi pencegahan: ACE-i/ARB dan beta-blocker." },
        { "level": "NYHA Kelas II (Stadium C Ringan)", "criteria": "Batasan aktivitas fisik ringan: nyaman saat istirahat, namun aktivitas fisik biasa (naik tangga) memicu sesak napas.", "risk": "Terapi 4 pilar gagal jantung komprehensif (ARNI, Beta-blocker, MRA, SGLT2-i)." },
        { "level": "NYHA Kelas III - IV (Stadium C Berat - D)", "criteria": "Kelas III: Gejala muncul pada aktivitas sangat ringan; Kelas IV: Sesak napas bahkan saat istirahat tidur di ranjang.", "risk": "Risiko rawat inap berulang dan mortalitas tinggi - Diuretik loop intravena, restriksi cairan ketat, perawatan paliatif kardiologi." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Biomarker NT-proBNP / BNP Serum", "param": "BAKU EMAS: Peningkatan NT-proBNP >300-450 pg/mL (pada lansia >900-1800 pg/mL) mengonfirmasi gagal jantung akut dengan akurasi sangat tinggi." },
        { "test": "Fungsi Ginjal (Kreatinin, eGFR) & Elektrolit (Na, K)", "param": "Memantau sindrom kardiorenal dan memandu titrasi obat diuretik." }
      ],
      "imaging": "Foto Rontgen Toraks memperlihatkan kardiomegali (CTR >50%), pelebaran vaskular hiler (cefalosasi), dan garis Kerley B; Ekokardiografi Doppler (TTE) mengukur fraksi ejeksi LVEF dan disfungsi diastolik E/e'.",
      "goldStandard": "Ekokardiografi Transtorakal komprehensif dikombinasikan dengan biomarker NT-proBNP serum."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Empat Pilar Farmakoterapi Modern (Guideline-Directed Medical Therapy - GDMT): (1) ARNI (Sacubitril/Valsartan) atau ACE-i/ARB; (2) Beta-blocker (Bisoprolol/Carvedilol); (3) MRA (Spironolakton 12.5-25 mg); (4) SGLT-2 Inhibitor (Dapagliflozin/Empagliflozin 10 mg/hari - efektif pada HFrEF maupun HFpEF!); ditambah Diuretik Loop (Furosemid) saat kongesti.",
      "beersCriteria": "KRITERIA BEERS: KONTRAINDIKASI NSAID (Ibuprofen, Meloksikam, Diklofenak) karena memicu retensi natrium parah yang memicu dekompensasi akut gagal jantung; waspadai Digoksin dosis >0.125 mg pada lansia karena toksisitas letal!",
      "monitoring": "Timbang berat badan setiap pagi (peringatan: kenaikan BB >1.5-2 kg dalam 2-3 hari menandakan retensi cairan dini sebelum sesak muncul!)."
    },
    "clinicalNutrition": {
      "macroMicro": "Restriksi natrium ketat <2000 mg/hari (kurangi garam dapur, hindari kecap/saus asin), pembatasan cairan 1.5 - 2 liter/hari jika terdapat edema atau hiponatremia.",
      "recommendedFoods": "Sayuran kukus tanpa garam, buah apel/pir, ikan air tawar rebus, beras merah, minyak kelapa murni, bumbu rempah alami pengganti garam (bawang putih, kunyit, ketumbar).",
      "contraindicatedFoods": "Makanan asin gurih tinggi garam, makanan kaleng olahan, kerupuk, kecap asin, mi instan, dan minuman berkafein berlebih."
    },
    "emergency": {
      "immediateTriggers": "Sesak napas hebat tersengal-sengal saat duduk istirahat, batuk mengeluarkan dahak berbusa warna merah muda (pink frothy sputum - tanda Edema Paru Akut!), bibir membiru, tensi anjlok <90 mmHg, penurunan kesadaran.",
      "firstAidHome": "Dudukkan lansia tegak dengan kaki menjuntai ke bawah ranjang (posisi duduk mengurangi aliran darah balik ke jantung), pasang oksigen tabung jika ada, SEGERA hubungi ambulans IGD RS."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan berjalan santai terukur 15-20 menit sehari saat kondisi kompensasi stabil; hindari latihan fisik berat saat fase bengkak.",
      "homeModifications": "Sediakan timbangan berat badan digital di kamar tidur, pasang beberapa bantal sandaran tidur bertingkat (wedge pillow) untuk posisi tidur semi-duduk."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Jantung (Kardiovaskular), Ginjal (Sindrom Kardiorenal) & Hati",
      "biologicalMechanism": "Penurunan curah jantung mengurangi aliran perfusi ke ginjal (hipoperfusi renal). Ginjal merespons dengan menahan air dan garam berlebih, yang justru semakin membebani jantung yang sudah lemah (Sindrom Kardiorenal Tipe 1 & 2). Tekanan balik vena cava juga memicu pembengkakan hati (sirosis kardiak).",
      "clinicalImpact": "Pengobatan gagal jantung pada lansia seringkali bagai buah simalakama: diuretik melancarkan sesak tetapi dapat menaikkan kreatinin ginjal, membutuhkan pemantauan dokter spesialis yang sangat cermat.",
      "prevention": "Penimbangan berat badan harian disiplin dan kepatuhan minum obat 4 pilar teratur tanpa mengurangi dosis sendiri."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Insufficientia Cordis Congestiva Geriatrica (HFpEF & HFrEF)",
      "icd10": "I50.9 / I50.30",
      "latinTerms": [
        { "term": "Insufficientia Cordis", "meaning": "Ketidakmampuan pompa jantung memompa atau mengisi darah secara adekuat untuk tubuh." },
        { "term": "Orthopnea", "meaning": "Sensasi sesak napas berat yang muncul saat berbaring datar dan membaik saat duduk tegak." },
        { "term": "Oedema Pretibiale Bilateralis", "meaning": "Pembengkakan berisi cairan pada kedua tungkai tulang kering yang meninggalkan lekukan saat ditekan." },
        { "term": "Oedema Pulmonum Acutum", "meaning": "Perembesan cairan darah ke dalam kantung udara paru-paru akibat tekanan balik jantung kiri yang gagal." },
        { "term": "Cardiomegalia", "meaning": "Pembesaran ukuran ruang atau massa otot jantung yang terdeteksi pada pemeriksaan radiologi toraks." }
      ]
    }
  },

  "fibrilasi-atrium": {
    "pathophysiology": {
      "cellularMechanism": "Aktivitas listrik atrium jantung yang kacau, cepat, dan tidak terkoordinasi (>300-600 denyut/menit di atrium), dipicu oleh fokus ektopik otomatis di sekitar muara vena pulmonalis. Disorganisasi elektrik ini melumpuhkan kontraksi mekanik atrium (kehilangan 'atrial kick' sekitar 20-30% curah jantung), menyebabkan aliran darah stasis di aurikula atrium kiri (LAA) yang memicu pembentukan trombus bekuan darah intrakardiak.",
      "geriatricFactor": "Fibrosis interstisial atrium progresif akibat usia (senile atrial amyloidosis), dilatasi atrium kiri, hipertensi menahun, dan penyakit katup mitral.",
      "organImpact": "Trombus di atrium kiri dapat terlepas (tromboemboli sistemik) dan mengalir langsung melalui arteri karotis ke otak, memicu Stroke Iskemik Kardioemboli yang masif dan fatal."
    },
    "geriatricSymptoms": {
      "classical": "Dada berdebar-debar kencang tidak teratur (palpitasi 'irama genderang rusak'), sesak napas saat jalan, rasa melayang di kepala (dizziness).",
      "atypicalGeriatric": "Sering ASIMTOMATIK (Silent Atrial Fibrillation)! Terdeteksi pertama kali saat lansia tiba-tiba mengalami stroke lumpuh separuh badan; atau mengeluh lemas lesu berkepanjangan tanpa menyadari denyut nadinya berdetak tidak teratur.",
      "whyDifferent": "Penurunan sensitivitas persepsi denyut jantung pada lansia membuat palpitasi sering tidak dirasakan."
    },
    "staging": {
      "scoreName": "Skor Stratifikasi Risiko Stroke CHA2DS2-VASc & Risiko Perdarahan HAS-BLED",
      "stages": [
        { "level": "CHA2DS2-VASc Skor 0 - 1", "criteria": "Usia muda tanpa faktor risiko mayor.", "risk": "Risiko stroke rendah - Tidak wajib antikoagulan oral." },
        { "level": "CHA2DS2-VASc Skor ≥ 2 (Pria) / ≥ 3 (Wanita)", "criteria": "Lansia usia ≥65-75 tahun (+1 hingga +2), Hipertensi (+1), Diabetes (+1), Stroke terdahulu (+2).", "risk": "Risiko stroke kardioemboli TINGGI (>5-10% per tahun) - INDIKASI MUTLAK Antikoagulan Oral Baru (NOAC/DOAC)." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Fungsi Tiroid (TSH & Free T4)", "param": "Menyingkirkan tirotoksikosis/hipertiroidisme apatetik lansia sebagai pemicu aritmia AF." },
        { "test": "Fungsi Ginjal (eGFR) & Hemostasis", "param": "Panduan penyesuaian dosis antikoagulan DOAC/NOAC." }
      ],
      "imaging": "EKG 12 Sandapan: Karakteristik 'Irregularly Irregular' (interval R-R tidak beraturan), tidak adanya gelombang P yang jelas, digantikan gelombang fibrilasi f halus; Ekokardiografi Transesofagus (TEE) mendeteksi trombus di aurikula atrium kiri.",
      "goldStandard": "EKG 12 Sandapan standar atau Holter Monitor 24-48 jam mendeteksi episode paroksismal."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Pencegahan Stroke: Antikoagulan Oral Langsung (DOAC/NOAC: Apixaban 2x5 mg atau Rivaroxaban 1x20 mg / Dabigatran - jauh lebih aman dari Warfarin pada geriatri!). Pengendalian Laju Denyut (Rate Control): Beta-blocker (Bisoprolol 2.5-5 mg) atau Diltiazem/Digoksin dengan target nadi istirahat <100-110 bpm.",
      "beersCriteria": "KRITERIA BEERS: HINDARI Amiodaron sebagai terapi lini pertama jangka panjang pada lansia karena toksisitas multiorgan berat (tiroid, paru, hati, mata); hindari pemberian Aspirin tunggal untuk pencegahan stroke AF karena tidak efektif dan tetap berisiko memicu perdarahan usus!",
      "monitoring": "Evaluasi risiko perdarahan (gusi berdarah, memar kulit, BAB hitam) dan evaluasi fungsi ginjal tiap 6 bulan."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet seimbang rendah stimulan kafein, kecukupan magnesium dan kalium untuk stabilitas membran elektrik miosit.",
      "recommendedFoods": "Pisang mas, air kelapa muda (sumber kalium alami), bayam kukus, ikan laut, tahu tempe, biji labu.",
      "contraindicatedFoods": "Kopi pekat berkafein tinggi, minuman penambah stamina berenergi, alkohol (Holiday Heart Syndrome), suplemen herbal pemicu aritmia (efedrin/ginseng dosis tinggi)."
    },
    "emergency": {
      "immediateTriggers": "Lansia mendadak bicara pelo tidak jelas, wajah mencong sebelah, lengan dan kaki separuh lumpuh mendadak (Tanda Stroke Kardioemboli Emboli Otak!), pingsan mendadak, atau denyut nadi berdegup >150 kali/menit disertai sesak napas berat dan nyeri dada.",
      "firstAidHome": "Catat jam tepat terjadinya gejala (Golden Period Stroke <4.5 jam!), jangan beri makan/minum, SEGERA bawa ke RS dengan fasilitas penanganan stroke dan kateterisasi jantung."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan teknik memeriksa denyut nadi mandiri (MENARI - Meraba Nadi Sendiri) selama 30 detik setiap pagi di pergelangan tangan untuk memantau keteraturan detak.",
      "homeModifications": "Gunakan jam tangan pintar / smartwatch berfitur deteksi EKG otomatis di rumah jika tersedia untuk deteksi dini episode AF kambuhan."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Irama Jantung (Kardiovaskular) & Pembuluh Darah Otak (Sistem Saraf)",
      "biologicalMechanism": "Atrium jantung yang hanya bergetar tanpa memompa memicu pembekuan darah di bilik atrium kiri. Bekuan darah (embolus) yang lepas langsung terlempar ke arteri karotis menuju arteri serebri media otak, menyumbat suplai darah secara mendadak dan memicu stroke iskemik berat.",
      "clinicalImpact": "Stroke akibat fibrilasi atrium terkenal sebagai stroke yang paling parah: angka kematian dan kecacatan permanen 2 kali lipat lebih tinggi dibanding stroke aterotrombotik biasa.",
      "prevention": "Kepatuhan minum obat pengencer darah antikoagulan (DOAC) setiap hari tanpa terlewat satu dosis pun."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Fibrillatio Atriorum Chronica & Thromboembolismus Systemicus",
      "icd10": "I48.91 / I48.2",
      "latinTerms": [
        { "term": "Fibrillatio Atriorum", "meaning": "Kekacauan irama listrik serambi jantung yang bergetar cepat tanpa pompa mekanik yang teratur." },
        { "term": "Arythmia Irregulariter Irregularis", "meaning": "Pola denyut nadi yang sama sekali tidak beraturan baik dalam tempo maupun kekuatannya." },
        { "term": "Thrombus Auriculae Sinistrae", "meaning": "Gumpalan bekuan darah yang terbentuk di kantung aurikula serambi kiri jantung akibat stasis darah." },
        { "term": "Cardioembolismus Cerebri", "meaning": "Terlepasnya bekuan darah dari jantung yang menyumbat arteri otak memicu stroke iskemik akut." },
        { "term": "Anticoagulans Oralis Directus (DOAC)", "meaning": "Golongan obat pengencer darah modern penghambat faktor pembekuan darah terarah." }
      ]
    }
  },

  "hipertensi-geriatri": {
    "pathophysiology": {
      "cellularMechanism": "Peningkatan resistensi vaskular sistemik akibat disfungsi endotel (penurunan bioavailabilitas Nitrik Oksida / NO, peningkatan endotelin-1) dan kekakuan dinding arteri besar (arterial stiffness). Degradasi serat elastin digantikan oleh deposisi kolagen kaku di tunika media aorta, menurunkan fungsi peredam kompensasi aorta (Windkessel effect).",
      "geriatricFactor": "Hipertensi Sistolik Terisolasi (Isolated Systolic Hypertension - ISH: Tekanan Sistolik ≥140 mmHg dengan Diastolik normal/rendah <80-90 mmHg) akibat hilangnya elastisitas aorta geriatri.",
      "organImpact": "Peningkatan tekanan nadi (Pulse Pressure yang lebar) memancarkan gelombang pulsasi bertekanan tinggi langsung ke mikrosirkulasi organ target: hipertrofi ventrikel kiri jantung (LVH), nefrosklerosis ginjal, retinopati hipertensi, dan stroke lakunar serebral."
    },
    "geriatricSymptoms": {
      "classical": "Sering asimtomatik (The Silent Killer); sakit kepala di tengkuk belakang leher saat bangun pagi, telinga berdenging (tinnitus), mata berkunang-kunang.",
      "atypicalGeriatric": "Sering terdeteksi saat jatuh pingsan akibat hipotensi ortostatik (tekanan darah anjlok saat berdiri mendadak dari tidur), mimisan spontan dari hidung (epistaksis), atau kebingungan kognitif dan disorientasi mendadak.",
      "whyDifferent": "Kerusakan barorefleks sinus karotikus geriatri menyebabkan fluktuasi tekanan darah ekstrem: sangat tinggi saat berbaring namun anjlok drastis saat berdiri."
    },
    "staging": {
      "scoreName": "Klasifikasi Tekanan Darah Konsensus Perhiper / ESC 2024 (Lansia)",
      "stages": [
        { "level": "Optimal / Terkontrol Lansia", "criteria": "Tekanan Sistolik 130 - 139 mmHg dan Diastolik 70 - 79 mmHg.", "risk": "Target aman lansia fit (hindari penurunan diastolik <60-65 mmHg agar perfusi koroner terjaga)." },
        { "level": "Hipertensi Derajat 1", "criteria": "Sistolik 140 - 159 mmHg dan/atau Diastolik 90 - 99 mmHg.", "risk": "Modifikasi gaya hidup dan monoterapi antihipertensi lini pertama dosis rendah." },
        { "level": "Hipertensi Derajat 2 - 3 / Krisis", "criteria": "Sistolik ≥160 - 180 mmHg; Krisis Hipertensi jika Sistolik >180 mmHg dengan kerusakan organ akut.", "risk": "Kombinasi 2 obat antihipertensi sinergis; rujukan IGD segera jika terdapat krisis hipertensi emergensi." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Urinalisis Mikroalbuminuria (UACR)", "param": "Mendeteksi kerusakan vaskular glomerulus ginjal dini akibat tekanan darah tinggi kronis." },
        { "test": "Kreatinin Serum & Profil Lipid Lengkap", "param": "Menilai fungsi ekskresi ginjal dan risiko aterosklerosis kardiovaskular total." }
      ],
      "imaging": "EKG 12 Sandapan melihat tanda hipertrofi ventrikel kiri (kriteria Sokolow-Lyon: SV1 + RV5 >35 mm); Foto Rontgen toraks melihat kalsifikasi arkus aorta; Funduskopi retina melihat penyempitan arteriol retina (Keith-Wagener-Barker I-IV).",
      "goldStandard": "Ambulatory Blood Pressure Monitoring (ABPM 24 Jam) atau Home Blood Pressure Monitoring (HBPM) 7 hari berturut-turut."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Kombinasi Lini Pertama Geriatri: Calcium Channel Blocker (Amlodipine 5-10 mg - sangat efektif melenturkan arteri kaku) dikombinasikan dengan ARB (Candesartan 8-16 mg atau Telmisartan 40 mg) atau Diuretik tiazid-like (Indapamide 1.5 mg SR).",
      "beersCriteria": "KRITERIA BEERS: HINDARI Clonidine (agonis alfa-2 sentral) karena efek sedasi berat dan hipotensi ortostatik; HINDARI alfa-1 blocker (Prazosin/Doxazosin) sebagai obat tunggal karena risiko jatuh sinkop saat berdiri!",
      "monitoring": "Selalu periksa tekanan darah dalam DUA POSISI: posisi duduk dan posisi berdiri setelah 1-3 menit untuk mendeteksi Hipotensi Ortostatik geriatri."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet DASH (Dietary Approaches to Stop Hypertension): kaya kalium (3500-4700 mg/hari dari makanan), kalsium, magnesium, dan restriksi ketat natrium (<1500-2000 mg garam/hari).",
      "recommendedFoods": "Pisang mas, kentang rebus beserta kulitnya, tomat segar, buah semangka, mentimun, yogurt tawar, bawang putih kukus.",
      "contraindicatedFoods": "Ikan asin, telur asin, keripik camilan gurih ber-MSG, kecap asin kental, makanan kalengan berpengawet natrium benzoat."
    },
    "emergency": {
      "immediateTriggers": "Tekanan darah mendadak melonjak >180/110 mmHg disertai sakit kepala berdenyut hebat luar biasa, muntah menyembur, pandangan kabur gelap, nyeri dada menusuk, atau kejang linglung (Krisis Hipertensi Emergensi / Ensefalopati Hipertensi).",
      "firstAidHome": "Baringkan tenang dengan kepala sedikit terangkat 30 derajat, jangan memberikan obat sublingual sembarangan tanpa resep dokter yang dapat membuat tensi anjlok drastis (risiko stroke iskemik iatrogenik), SEGERA bawa ke IGD rumah sakit."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan aerobik moderat teratur: jalan kaki santai 30 menit 5 kali seminggu, senam lansia, latihan pernapasan lambat relaksasi (slow deep breathing 6-10 napas/menit menurunkan simpatis).",
      "homeModifications": "Sediakan tensimeter digital lengan atas (arm cuff) terkalibrasi di rumah, buat buku catatan harian tekanan darah pagi dan malam."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Pembuluh Darah (Kardiovaskular), Otak (Demensia Vaskular) & Ginjal",
      "biologicalMechanism": "Pulsasi tekanan sistolik tinggi yang menghantam pembuluh darah mikro otak secara konstan merusak dinding arteriol serebral, memicu stroke lakunar multipel tersembunyi dan leukoaraiosis materi putih otak, bermuara pada Demensia Vaskular. Di ginjal, tekanan tinggi merusak membran filtrasi memicu gagal ginjal kronis.",
      "clinicalImpact": "Hipertensi yang tidak terkontrol pada usia paruh baya merupakan prediktor terkuat kepikunan demensia dan cuci darah di usia tua.",
      "prevention": "Pemeriksaan tensi rutin berkala, kurangi garam, dan minum obat antihipertensi setiap hari seumur hidup."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Hypertensio Arterialis Primaria Senilis & Hypertensio Systolica Isolata",
      "icd10": "I10 / I15.9",
      "latinTerms": [
        { "term": "Hypertensio Systolica Isolata (ISH)", "meaning": "Kondisi tekanan darah sistolik melonjak tinggi (≥140) sementara tekanan diastolik normal (<90)." },
        { "term": "Stiffness Arterialis", "meaning": "Kekakuan dan hilangnya kelenturan dinding pipa pembuluh darah arteri besar akibat penuaan kolagen." },
        { "term": "Hypotensio Orthostatica", "meaning": "Penurunan tekanan darah sistolik >20 mmHg saat posisi tubuh berubah mendadak dari tidur ke berdiri." },
        { "term": "Hypertrophia Ventriculi Sinistri (LVH)", "meaning": "Penebalan otot dinding bilik kiri jantung akibat beban kerja memompa melawan tekanan tinggi." },
        { "term": "Retinopathia Hypertensiva", "meaning": "Kerusakan mikrosirkulasi pembuluh darah saraf retina mata akibat paparan tekanan darah tinggi menahun." }
      ]
    }
  },

  "trombosis-dvt": {
    "pathophysiology": {
      "cellularMechanism": "Pembentukan trombus bekuan darah di dalam lumen vena profunda tungkai (vena poplitea, vena femoralis, atau vena iliaka), dipicu oleh Trias Virchow: (1) Stasis aliran darah vena (akibat imobilisasi, tirah baring, penerbangan panjang); (2) Cedera endotel vaskular (akibat pembedahan panggul/lutut, trauma); dan (3) Status hiperkoagulabilitas darah (peningkatan faktor VIII, fibrinogen, keganasan tersembunyi). Bekuan darah menyumbat aliran balik vena.",
      "geriatricFactor": "Inkompetensi katup vena akibat usia (insufisiensi vena kronis), kelemahan pompa otot betis (sarkopenia otot gastroknemius), dan imobilisasi pascasakit.",
      "organImpact": "Peningkatan tekanan hidrostatik vena tungkai masif memicu pembengkakan unilateral, nyeri betis, dan ulkus stasis vena; komplikasi paling mematikan terjadi jika trombus lepas melayang ke arteri paru memicu Emboli Paru (Pulmonary Embolism / PE)."
    },
    "geriatricSymptoms": {
      "classical": "Betis satu sisi (unilateral) membengkak mendadak, terasa hangat kencang tegang, memerah, dan nyeri saat ditekan atau saat telapak kaki ditekuk ke atas (Homans' sign positif).",
      "atypicalGeriatric": "Sering tanpa nyeri betis yang jelas! Hanya berupa pembengkakan tungkai satu sisi yang disangka pegal biasa; atau datang mendadak dengan sesak napas akut, nyeri dada pleuritik, dan batuk darah akibat trombus sudah bermigrasi ke paru-paru (Emboli Paru).",
      "whyDifferent": "Penurunan respons nosiseptif perifer dan pembengkakan bilateral yang sering rancu dengan edema gagal jantung atau hipoalbuminemia."
    },
    "staging": {
      "scoreName": "Skor Probabilitas Klinis Wells DVT (Wells Criteria for DVT)",
      "stages": [
        { "level": "Skor Wells ≤ 0 (Risiko Rendah)", "criteria": "Probabilitas DVT rendah (<5%).", "risk": "Uji D-Dimer darah; jika D-Dimer normal, diagnosis DVT dapat disingkirkan tanpa USG." },
        { "level": "Skor Wells 1 - 2 (Risiko Sedang)", "criteria": "Terdapat pembengkakan betis unilateral >3 cm, pitting edema terlokalisir.", "risk": "Indikasi pemeriksaan USG Vaskular Doppler vena tungkai segera." },
        { "level": "Skor Wells ≥ 3 (Risiko Tinggi)", "criteria": "Kanker aktif, tirah baring >3 hari, seluruh tungkai bengkak, nyeri vena profunda.", "risk": "Probabilitas DVT tinggi (>70%) - USG Doppler segera dan inisiasi antikoagulan terapeutik." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "D-Dimer Kuantitatif Plasma", "param": "Peningkatan D-Dimer (>500 ng/mL / age-adjusted cut-off: Usia x 10 ng/mL pada lansia >50 tahun) menandakan lisis bekuan fibrin aktif." }
      ],
      "imaging": "USG Vaskular Doppler Kompresi (Compression Ultrasound / CUS): Vena normal akan kolaps/menutup saat ditekan ujung probe USG; pada DVT vena tidak dapat dikompresi (non-compressible lumen) disertai tidak adanya aliran Doppler berwarna.",
      "goldStandard": "USG Duplex Doppler Kompresi Vena Tungkai Lengkap."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Antikoagulan Terapeutik Segera: DOAC (Rivaroxaban 2x15 mg selama 3 minggu dilanjutkan 1x20 mg; atau Apixaban 2x10 mg selama 7 hari dilanjutkan 2x5 mg) minimal 3-6 bulan; atau Low Molecular Weight Heparin (Enoxaparin subkutan).",
      "beersCriteria": "Waspadai risiko interaksi obat dan risiko perdarahan pada lansia dengan gangguan fungsi ginjal (sesuaikan dosis DOAC dengan eGFR); hindari pemasangan filter vena kava (IVC filter) kecuali terdapat kontraindikasi mutlak antikoagulan.",
      "monitoring": "Pantau lingkar betis harian dan tanda-tanda perdarahan sistemik."
    },
    "clinicalNutrition": {
      "macroMicro": "Hidrasi air putih yang cukup (minimal 2 liter/hari) untuk mencegah hemokonsentrasi darah kental yang memicu stasis vena.",
      "recommendedFoods": "Bawang putih, jahe, kunyit (antiplatelet/anti-inflamasi alami), air putih hangat, sayuran hijau segar, buah nanas (mengandung enzim bromelain).",
      "contraindicatedFoods": "Minuman beralkohol yang memicu dehidrasi, makanan tinggi lemak jenuh jeroan, dan konsumsi suplemen vitamin K megadose jika pasien menggunakan Warfarin."
    },
    "emergency": {
      "immediateTriggers": "Lansia dengan betis bengkak mendadak mengalami sesak napas hebat tercekik, nyeri dada tajam saat menarik napas, batuk berdarah, bibir biru sianosis, pingsan syok (TANDA EMBOLI PARU MASIF DARURAT MEMATIKAN!).",
      "firstAidHome": "Baringkan tenang, pasang oksigen segera jika tersedia, JANGAN MEMIJAT ATAU MENGURUT BETIS YANG BENGKAK (karena pijatan dapat melepaskan bekuan darah langsung melesat ke jantung dan paru!), SEGERA bawa ke IGD rumah sakit."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan pompa otot betis (ankle-pumping exercises: menggerakkan telapak kaki menekuk ke atas dan ke bawah 20 kali tiap jam saat duduk atau berbaring), mobilisasi jalan kaki bertahap dengan stocking kompresi elastis.",
      "homeModifications": "Gunakan stoking kompresi medis bertingkat (Graduated Compression Stockings kelas II: 20-30 mmHg) di kaki yang sakit, tinggikan ujung kaki tempat tidur 15 cm di atas level jantung saat tidur."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Pembuluh Balik Kaki (Kardiovaskular), Jantung Kanan & Paru-paru",
      "biologicalMechanism": "Gumpalan darah yang terbentuk di vena dalam betis lepas menjadi embolus. Embolus meluncur ke atas melalui vena kava inferior, melewati serambi dan bilik kanan jantung, lalu menyumbat cabang utama arteri pulmonalis di paru-paru (Emboli Paru), mematikan pasokan oksigen darah secara seketika.",
      "clinicalImpact": "DVT dan Emboli Paru merupakan penyebab kematian mendadak nomor satu yang paling dapat dicegah pada pasien rawat inap geriatri.",
      "prevention": "Hindari duduk diam tanpa gerak >2 jam, lakukan latihan pergelangan kaki secara rutin, dan kenakan stocking kompresi saat bepergian jauh."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Thrombosis Venae Profundae (DVT) & Embolismus Pulmonalis",
      "icd10": "I82.40 / I26.9",
      "latinTerms": [
        { "term": "Thrombosis Venae Profundae", "meaning": "Pembentukan bekuan darah menyumbat pembuluh darah balik dalam pada tungkai kaki." },
        { "term": "Embolismus Pulmonalis", "meaning": "Penyumbatan pembuluh darah arteri paru-paru oleh bekuan darah yang terlepas dari tungkai kaki." },
        { "term": "Trias Virchow", "meaning": "Tiga faktor pemicu penggumpalan darah: aliran lambat (stasis), dinding luka (endotel), dan darah kental." },
        { "term": "Phlegmasia Cerulea Dolens", "meaning": "Kondisi darurat sumbatan vena total yang membuat seluruh tungkai membengkak ungu kebiruan dingin." },
        { "term": "Syndroma Post-Thromboticum", "meaning": "Komplikasi menahun kerusakan katup vena pasca-DVT yang memicu luka ulkus borok di mata kaki." }
      ]
    }
  }
};

// Merge into existing clinicalData
const allUpdated = Object.assign({}, clinicalData, additionalDossiers);
console.log('Total merged dossiers count:', Object.keys(allUpdated).length);

// Save updated clinical_data.js
const header = `/**
 * clinical_data.js - Basis Data Riset Medis & Geriatri Mendalam (12 Sistem Tubuh Manusia)
 * ======================================================================================
 * Berisi dossier klinis komprehensif untuk seluruh 12 sistem anatomi tubuh manusia:
 * 1. Sistem Rangka (Kerangka / Skeletal System - 206 Tulang)
 * 2. Sistem Otot (Muskular / Muscular System - Otot Rangka, Polos, Jantung)
 * 3. Sistem Peredaran Darah (Kardiovaskular / Cardiovascular System)
 * 4. Sistem Saluran Pencernaan (Digestive System)
 * 5. Sistem Saluran Pernapasan (Respiratory System)
 * 6. Sistem Saraf (Nervous System - Otak & Saraf Tepi)
 * 7. Sistem Endokrin (Kelenjar Hormon & Metabolisme)
 * 8. Sistem Ekskresi / Urinaria (Ginjal & Saluran Pembuangan)
 * 9. Sistem Kekebalan (Imun / Immune System)
 * 10. Sistem Limfatik (Kelenjar Getah Bening & Limpa)
 * 11. Sistem Integumen (Kulit, Rambut, Kuku)
 * 12. Sistem Reproduksi (Pria & Wanita)
 */

const DEEP_CLINICAL_DATA = `;

fs.writeFileSync('clinical_data.js', header + JSON.stringify(allUpdated, null, 2) + ';\n', 'utf8');
console.log('Updated clinical_data.js successfully! New file size:', fs.statSync('clinical_data.js').size, 'bytes');

