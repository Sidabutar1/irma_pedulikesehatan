const fs = require('fs');
const vm = require('vm');

const currentCode = fs.readFileSync('clinical_data.js', 'utf8');
const clinicalData = vm.runInNewContext(currentCode + '; DEEP_CLINICAL_DATA;');

const dossiersPart2 = {
  // === ENDOKRIN ===
  "hipotiroidisme-geriatri": {
    "pathophysiology": {
      "cellularMechanism": "Penurunan produksi hormon tiroksin (T4) dan triiodotironin (T3) oleh folikel kelenjar tiroid, umumnya akibat tiroiditis autoimun kronis (Hashimoto) atau atrofi idiopatik. Penurunan hormon tiroid memperlambat laju metabolisme basal di seluruh sel tubuh, menurunkan ekspresi reseptor LDL di hepar, dan memicu akumulasi glikosaminoglikan di jaringan interstisial (miksedema).",
      "geriatricFactor": "Penurunan konversi T4 menjadi T3 perifer dan tingginya prevalensi antibodi anti-TPO pada lansia wanita (>15-20%).",
      "organImpact": "Bradikardia kardiak, penurunan motilitas usus (konstipasi berat/ileus), hiperkolesterolemia sekunder, hipotermia, dan koma miksedema letal jika terpapar stres dingin atau infeksi."
    },
    "geriatricSymptoms": {
      "classical": "Kenaikan berat badan, kulit kering kasar, tidak tahan udara dingin (cold intolerance), suara serak berat, konstipasi, rambut rontok.",
      "atypicalGeriatric": "Sering disangka murni tanda penuaan atau kepikunan! Muncul sebagai kelambatan berpikir dan daya ingat menurun drastis (pseudodementia tiroid), kelelahan lemas berkepanjangan (letargi), depresi geriatri, kiprah jalan lambat sempoyongan, dan muka sembab bengkak.",
      "whyDifferent": "Penurunan metabolisme menyeluruh pada lansia membuat gejala hipotiroid menyatu dengan stereotip proses penuaan normal sehingga sering tidak terdiagnosis."
    },
    "staging": {
      "scoreName": "Klasifikasi Disfungsi Tiroid Laboratoris",
      "stages": [
        { "level": "Hipotiroidisme Subklinis", "criteria": "TSH meningkat (4.5 - 10.0 mIU/L) dengan kadar Free T4 normal.", "risk": "Pantau berkala; terapi Levotiroksin jika TSH >10 mIU/L atau antibodi anti-TPO tinggi." },
        { "level": "Hipotiroidisme Overt (Nyata)", "criteria": "TSH meningkat tinggi (>10 mIU/L) disertai penurunan kadar Free T4 di bawah normal.", "risk": "Indikasi substitusi hormon Levotiroksin oral seumur hidup." },
        { "level": "Koma Miksedema (Krisis Kedaruratan)", "criteria": "Penurunan kesadaran koma, hipotermia berat (<35°C), bradikardia ekstrem, hipoventilasi.", "risk": "Mortalitas tinggi (>30-50%) - Rawat ICU dengan Levotiroksin intravena dan hidrokortison." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "TSH Sensitif (sTSH) & Free T4 (FT4)", "param": "BAKU EMAS: TSH tinggi dengan FT4 rendah mengonfirmasi hipotiroid primer kelenjar tiroid." },
        { "test": "Antibodi Anti-TPO (Thyroid Peroxidase)", "param": "Positif kuat pada tiroiditis autoimun kronis Hashimoto." }
      ],
      "imaging": "USG Tiroid memperlihatkan parenkim kelenjar tiroid mengecil atrofi atau hipoekoik difus heterogen.",
      "goldStandard": "Panel hormon tiroid serum (sTSH dan FT4 kuantitatif)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Substitusi Hormon: Levotiroksin (L-T4) oral dimulai dengan prinsip 'Start Low, Go Slow' dosis awal 12.5 - 25 mcg/hari diminum pagi hari saat perut kosong 30-60 menit sebelum sarapan, dititrasi bertahap tiap 6-8 minggu.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI memulai Levotiroksin dosis penuh (misal langsung 100 mcg) pada lansia karena dapat memicu iskemia miokard akut, angina pektoris, atau infark jantung akibat beban metabolisme yang melonjak mendadak!",
      "monitoring": "Evaluasi kadar TSH tiap 6-8 minggu hingga dosis stabil, kemudian tiap 6-12 bulan."
    },
    "clinicalNutrition": {
      "macroMicro": "Kecukupan iodium dan selenium alami (kofaktor enzim deiodinase), diet cukup serat untuk mencegah konstipasi.",
      "recommendedFoods": "Garam beriodium standar, telur rebus, ikan laut, kacang brazil (kaya selenium), sayuran matang, oatmeal.",
      "contraindicatedFoods": "Konsumsi berlebih sayuran goitrogenik mentah dalam jumlah sangat besar (kubis, kembang kol mentah), serta hindari minum suplemen kalsium/besi bersamaan dengan obat Levotiroksin (jarakkan minimal 4 jam)."
    },
    "emergency": {
      "immediateTriggers": "Suhu tubuh anjlok sangat dingin (<35°C), napas sangat lambat dan dangkal, denyut jantung <40 kali/menit, lansia tidak sadar/koma (Koma Miksedema).",
      "firstAidHome": "Hangatkan tubuh lansia secara pasif dengan selimut tebal (hindari pemanas listrik aktif yang memicu vasodilatasi syok), SEGERA bawa ke IGD rumah sakit."
    },
    "rehabilitation": {
      "physicalExercises": "Jalan santai pagi hari dan latihan gerak sendi aktif perlahan seiring pulihnya energi metabolisme tubuh pasca-terapi hormon.",
      "homeModifications": "Pastikan suhu kamar tidur nyaman hangat dan sediakan pakaian berlapis hangat saat cuaca dingin."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Kelenjar Tiroid (Endokrin), Otak (Kognisi) & Metabolisme Lemak Hati",
      "biologicalMechanism": "Hormon tiroid mengatur kecepatan sintesis neurotransmiter otak dan reseptor LDL di hati. Hipotiroidisme memperlambat transmisi sinaps memicu kepikunan semu (pseudodementia) dan menaikkan kolesterol jahat LDL drastis yang mempercepat serangan jantung.",
      "clinicalImpact": "Banyak lansia yang dicap pikun permanen ternyata kembali pulih daya ingatnya setelah kadar hormon tiroidnya dinormalkan dengan obat murah Levotiroksin.",
      "prevention": "Pemeriksaan skrining TSH berkala pada seluruh lansia dengan keluhan lemas, depresi, atau penurunan daya ingat baru."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Hypothyreoidismus Primarius Geriatricus & Morbus Hashimoto",
      "icd10": "E03.9 / E06.3",
      "latinTerms": [
        { "term": "Hypothyreoidismus", "meaning": "Kondisi defisiensi produksi hormon kelenjar tiroid yang memperlambat metabolisme tubuh." },
        { "term": "Myxoedema", "meaning": "Penebalan kulit dan jaringan lunak akibat penumpukan cairan gelatinosa lendir protein mucin." },
        { "term": "Coma Myxoedematosum", "meaning": "Komplikasi darurat kegagalan tiroid tahap akhir dengan hipotermia dan penurunan kesadaran koma." },
        { "term": "Pseudodementia Thyreoidea", "meaning": "Gangguan fungsi memori dan kelambatan berpikir akibat kekurangan hormon tiroid yang menyerupai demensia." },
        { "term": "Thyroxinum (Levothyroxine)", "meaning": "Hormon tiroksin sintetik bioidentik untuk menggantikan kekurangan hormon alami tubuh." }
      ]
    }
  },

  "insufisiensi-adrenal": {
    "pathophysiology": {
      "cellularMechanism": "Kegagalan korteks kelenjar adrenal memproduksi hormon glukokortikoid (Kortisol) dan mineralokortikoid (Aldosteron). Umumnya merupakan insufisiensi adrenal sekunder akibat atrofi korteks adrenal pasca-penghentian mendadak terapi kortikosteroid oral/jamu pegal linu (steroid withdrawal) atau penyakit autoimun primer (Addison). Defisiensi kortisol memicu gangguan glukoneogenesis, hilangnya tonus vaskular terhadap katekolamin, dan deplesi volume plasma.",
      "geriatricFactor": "Penggunaan jamu tradisional 'pegal linu' atau obat rematik racikan yang dicampur diam-diam dengan deksametason/prednison (BKO steroid) yang menekan aksis Hipotalamus-Pituitari-Adrenal (HPA).",
      "organImpact": "Hipotensi ortostatik parah, hipoglikemia, hiponatremia, hiperkalemia, dan kolaps kardiovaskular saat stres infeksi (Krisis Adrenal)."
    },
    "geriatricSymptoms": {
      "classical": "Kelemahan otot ekstrem (fatigue), penurunan berat badan drastis, mual muntah, pusing berputar saat berdiri, hiperpigmentasi kulit cokelat pada lipatan tubuh (pada tipe primer).",
      "atypicalGeriatric": "Sering tersamar sebagai anoreksia penuaan, nafsu makan hilang total, kebingungan delirium, hipotensi refrakter yang tidak merespons obat pengurang tensi, dan jatuh berulang tanpa demam.",
      "whyDifferent": "Kerapuhan homeostasis lansia membuat defisiensi kortisol cepat memicu dehidrasi hiperkalemik dan kebingungan akut."
    },
    "staging": {
      "scoreName": "Klasifikasi Derajat Insufisiensi Adrenal",
      "stages": [
        { "level": "Insufisiensi Kronis Terkompensasi", "criteria": "Kortisol serum pagi hari rendah-moderat, gejala lemas intermiten.", "risk": "Terapi substitusi Hidrokortison fisiologis oral harian." },
        { "level": "Krisis Adrenal Akut (Addisonian Crisis)", "criteria": "Syok hipotensi refrakter, muntah profus, hipoglikemia berat, demam/hipotermia.", "risk": "KEDARURATAN MEDIS FATAL - Hidrokortison intravena dosis tinggi bolus segera dan cairan salin normal." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Kortisol Serum Pagi (Pukul 08.00)", "param": "Kadar kortisol pagi <3 mcg/dL mengonfirmasi insufisiensi adrenal; >15-18 mcg/dL menyingkirkan diagnosis." },
        { "test": "Elektrolit Darah (Natrium & Kalium)", "param": "Hiponatremia (<130 mEq/L) dan hiperkalemia (>5.0 mEq/L) khas pada defisiensi aldosteron." }
      ],
      "imaging": "CT-Scan Kelenjar Adrenal untuk melihat kalsifikasi, pembesaran, atau atrofi kelenjar suprarenalis.",
      "goldStandard": "Uji Stimulasi ACTH Pendek (Synacthen Test / Cosyntropin 250 mcg)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Substitusi Fisiologis: Hidrokortison oral 15-20 mg/hari terbagi (10 mg pagi, 5 mg siang, 2.5 mg sore meniru ritme sirkadian alami); atau Fludrokortison 0.05-0.1 mg/hari jika defisiensi mineralokortikoid.",
      "beersCriteria": "Edukasi penting aturan 'Sick Day Rules': DOSIS HARUS DILIPAT-GANDAKAN 2-3 KALI LIPAT saat lansia mengalami demam infeksi, cabut gigi, atau stres operasi untuk mencegah krisis adrenal fatal!",
      "monitoring": "Pantau tekanan darah duduk dan berdiri, kadar natrium/kalium darah, dan berat badan."
    },
    "clinicalNutrition": {
      "macroMicro": "Asupan cairan cukup dan tidak membatasi garam natrium pada insufisiensi adrenal primer (berbeda dengan pasien hipertensi).",
      "recommendedFoods": "Kaldu bergaram sedang, pisang (pantau kalium), telur, kentang, sup ayam, makanan berkarbohidrat kompleks mencegah hipoglikemia.",
      "contraindicatedFoods": "Puasa berkepanjangan tanpa asupan kalori teratur, makanan berpengawet kimiawi tak terstandar."
    },
    "emergency": {
      "immediateTriggers": "Mual muntah hebat terus menerus, nyeri perut hebat mendadak, tekanan darah anjlok <80/50 mmHg tidak naik dengan cairan biasa, penurunan kesadaran koma (Krisis Adrenal).",
      "firstAidHome": "Suntikkan Hidrokortison darurat intramuskular (100 mg IM) jika keluarga memiliki emergency kit, SEGERA larikan ke IGD rumah sakit."
    },
    "rehabilitation": {
      "physicalExercises": "Aktivitas fisik ringan bertahap dengan istirahat cukup; hindari kelelahan fisik ekstrem yang memicu lonjakan kebutuhan hormon.",
      "homeModifications": "Pakai gelang medis penanda darurat (Medical Alert Bracelet: 'Insufisiensi Adrenal - Perlu Steroid Saat Darurat') pada lansia."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Kelenjar Adrenal (Endokrin), Tekanan Darah (Kardiovaskular) & Imunitas",
      "biologicalMechanism": "Kortisol sangat dibutuhkan untuk mempertahankan respons pembuluh darah terhadap noradrenalin. Tanpa kortisol, pembuluh darah melemas total memicu syok vaskular fatal yang tidak mempan obat vasopresor biasa.",
      "clinicalImpact": "Banyak kematian lansia akibat 'masuk angin berat' sebetulnya merupakan krisis adrenal akibat berhentinya konsumsi jamu pegal linu steroid secara tiba-tiba.",
      "prevention": "Hindari konsumsi jamu tradisional pegal linu ilegal tanpa izin BPOM, jangan menghentikan obat kortikosteroid dokter secara mendadak."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Insufficientia Corticis Adrenalis & Crisis Addisoniana",
      "icd10": "E27.1 / E27.2",
      "latinTerms": [
        { "term": "Crisis Addisoniana", "meaning": "Kedaruratan mematikan akibat kekurangan hormon kortisol akut yang memicu kolaps tekanan darah dan syok." },
        { "term": "Cortex Glandulae Suprarenalis", "meaning": "Lapisan luar kelenjar anak ginjal yang memproduksi hormon kortisol, aldosteron, dan androgen." },
        { "term": "Hyponatraemia & Hyperkalaemia", "meaning": "Penurunan kadar natrium darah disertai lonjakan kadar kalium darah akibat kekurangan aldosteron." },
        { "term": "Atrophia Corticalis Iatrogenica", "meaning": "Penyusutan kelenjar adrenal akibat konsumsi obat steroid antinyeri dari luar jangka panjang." },
        { "term": "Hydrocortisonum", "meaning": "Hormon kortisol sintetik pengganti untuk mempertahankan kelangsungan hidup pasien." }
      ]
    }
  },

  // === EKSKRESI / URINARIA ===
  "gagal-ginjal-kronis": {
    "pathophysiology": {
      "cellularMechanism": "Kerusakan progresif dan ireversibel pada nefron ginjal selama >3 bulan. Hiperfiltrasi adaptif pada nefron yang tersisa memicu glomerulosklerosis fokal, fibrosis tubulointerstisial, dan penumpukan racun uremik dalam darah. Ginjal kehilangan kemampuan mengekskresi limbah nitrogen (ureum, kreatinin), mengatur keseimbangan elektrolit (K, P, Ca), memproduksi eritropoietin (EPO), dan mengaktifkan vitamin D.",
      "geriatricFactor": "Penuaan ginjal alami (penurunan GFR fisiologis sekitar 1 mL/min/tahun setelah usia 40 tahun) diperparah oleh hipertensi dan diabetes melitus puluhan tahun.",
      "organImpact": "Sindrom Uremia multiorgan: perikarditis uremikum, ensefalopati uremikum linglung, anemia normositer normokromik berat, osteodistrofi renal, dan edema paru asidosis metabolik."
    },
    "geriatricSymptoms": {
      "classical": "Kencing berkurang (oliguria), bengkak kedua kelopak mata saat pagi hari dan bengkak kaki, mual muntah, sesak napas, gatal-gatal di seluruh kulit (uremic pruritus).",
      "atypicalGeriatric": "Sering tanpa penurunan jumlah kencing nyata di awal! Gejala dominan berupa kelemahan lemas ekstrem pucat (anemia berat), nafsu makan hilang disangka depresi, cegukan terus menerus (singultus uremik), kulit berwarna kuning keabuan kering (uremic frost), dan linglung disorientasi.",
      "whyDifferent": "Penurunan massa otot pada lansia membuat kreatinin serum sering tampak normal atau hanya naik sedikit padahal laju filtrasi ginjal (eGFR) sudah anjlok parah."
    },
    "staging": {
      "scoreName": "Stadium Penyakit Ginjal Kronis KDIGO (Berdasarkan eGFR)",
      "stages": [
        { "level": "Stadium G3a - G3b (Penurunan Sedang)", "criteria": "eGFR 30 - 59 mL/min/1.73m2.", "risk": "Manajemen agresif memperlambat progresi (SGLT2-i, ACE-i/ARB), penyesuaian dosis seluruh obat." },
        { "level": "Stadium G4 (Penurunan Berat)", "criteria": "eGFR 15 - 29 mL/min/1.73m2.", "risk": "Persiapan terapi pengganti ginjal (edukasi akses vaskular AV Fistula cimino / CAPD)." },
        { "level": "Stadium G5 (Gagal Ginjal Terminal / ESRD)", "criteria": "eGFR < 15 mL/min/1.73m2 atau memerlukan dialisis rutin.", "risk": "Indikasi Terapi Pengganti Ginjal (Hemodialisis reguler / CAPD) atau Terapi Konservatif Komprehensif Paliatif." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "eGFR (CKD-EPI) & Ureum/Kreatinin Serum", "param": "Evaluasi laju filtrasi ginjal terstandar luas permukaan tubuh." },
        { "test": "Urinalisis Mikroalbuminuria / UACR & Elektrolit (K, Ca, P)", "param": "Albuminuria menandakan kerusakan barier glomerulus; waspadai hiperkalemia K >5.5 mEq/L." }
      ],
      "imaging": "USG Ginjal bilateral memperlihatkan ukuran ginjal mengecil mengerut (<9 cm), peningkatan ekogenisitas korteks, dan hilangnya diferensiasi kortikomedular.",
      "goldStandard": "Penetapan laju eGFR persisten <60 mL/min/1.73m2 selama minimal 3 bulan dengan bukti kerusakan ginjal struktural."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Nefroproteksi: SGLT-2 Inhibitor (Dapagliflozin 10 mg - terbukti melambatkan laju kerusakan ginjal) dan/atau ARB (Candesartan) dengan kontrol ketat; Injeksi Erythropoietin (EPO) untuk koreksi anemia; Pengikat Fosfat (Kalsium Karbonat saat makan).",
      "beersCriteria": "KRITERIA BEERS: KONTRAINDIKASI MUTLAK analgesik NSAID (Asam Mefenamat, Natrium Diklofenak) karena memicu gagal ginjal akut anuria seketika; sesuaikan dosis antibiotik dan obat diabetes (hindari Metformin jika eGFR <30)!",
      "monitoring": "Pantau kadar kalium darah, hemoglobin, dan klirens kreatinin tiap 1-3 bulan."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet Rendah Protein Terkontrol (0.6 - 0.8 g/kgBB/hari pada pra-dialisis untuk mengurangi beban ureum; ditingkatkan ke 1.2 g/kgBB jika sudah hemodialisis rutin), restriksi kalium, fosfat, dan natrium.",
      "recommendedFoods": "Putih telur rebus, nasi tim, minyak jagung, apel, pir, mentimun, kembang kol kukus.",
      "contraindicatedFoods": "Makanan sangat tinggi kalium (pisang, alpukat, air kelapa, kurma - jika K >5.0), makanan tinggi fosfat (jeroan, keju, minuman bersoda gelap), dan garam dapur berlebih."
    },
    "emergency": {
      "immediateTriggers": "Sesak napas hebat mengorok tercekik cairan (edema paru akut uremikum), jantung berdetak sangat lambat dan tidak teratur (Hiperkalemia mematikan K >6.5 mEq/L pemicu henti jantung!), kejang koma (ensefalopati uremik).",
      "firstAidHome": "Bawa segera ke IGD rumah sakit rujukan dengan fasilitas cuci darah (Hemodialisis darurat / cito HD) dan terapi koreksi hiperkalemia intravena (Kalsium Glukonat + Insulin Dextrose)."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan aktivitas fisik aerobik ringan (jalan kaki 20 menit) untuk mempertahankan massa otot dan mencegah sindrom sarkopenia uremik.",
      "homeModifications": "Rawat lengan akses cimino (AV shunt) dengan baik: jangan gunakan lengan yang memiliki cimino untuk mengukur tensi, mengambil darah, atau menjinjing barang berat."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Ginjal (Ekskresi), Sumsum Tulang (Anemia) & Jantung",
      "biologicalMechanism": "Ginjal yang rusak tidak mampu memproduksi hormon eritropoietin (EPO), memicu sumsum tulang mogok memproduksi sel darah merah (Anemia Renal). Jantung terpaksa memompa lebih keras mengompensasi kekurangan oksigen (kardiomiopati uremik), memicu gagal jantung terminal.",
      "clinicalImpact": "Lebih dari 50% pasien gagal ginjal kronis meninggal bukan karena uremia semata, melainkan akibat komplikasi serangan jantung dan stroke.",
      "prevention": "Kontrol ketat gula darah pada penderita diabetes, kontrol tensi <130/80 mmHg, dan hindari minum obat antinyeri tanpa resep dokter."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Morbus Renalis Chronicus (CKD Stadium 3-5) & Uraemia",
      "icd10": "N18.9 / N18.5",
      "latinTerms": [
        { "term": "Insufficientia Renalis Chronica", "meaning": "Penurunan kapasitas penyaringan racun dan pengaturan cairan ginjal yang bersifat menahun ireversibel." },
        { "term": "Glomerulosclerosis", "meaning": "Pengerasan dan jaringan parut pada saringan darah mikroskopis ginjal (glomerulus)." },
        { "term": "Uraemia", "meaning": "Sindrom keracunan darah akibat penumpukan produk limbah sisa metabolisme protein tubuh." },
        { "term": "Hyperkalaemia", "meaning": "Kadar elektrolit kalium darah melonjak berbahaya di atas batas aman yang dapat menghentikan detak jantung." },
        { "term": "Haemodialysis", "meaning": "Prosedur cuci darah menggunakan mesin ginjal buatan untuk membersihkan racun dan kelebihan cairan tubuh." }
      ]
    }
  },

  // === IMUN & KEKEBALAN ===
  "immunosenescence": {
    "pathophysiology": {
      "cellularMechanism": "Penurunan fungsi sistem kekebalan tubuh terkait proses penuaan biologis intrinsik. Melibatkan atrofi kelenjar timus (involusi timus) yang mengurangi produksi sel T naif baru, pergeseran ke arah sel T memori terdisregulasi, pemendekan telomer sel imun, penurunan fagositosis makrofag/neutrofil, serta fenotipe sekresi terkait penuaan (SASP) yang memicu peradangan kronis steril derajat rendah di seluruh tubuh (*Inflammaging*).",
      "geriatricFactor": "Menurunnya pembentukan antibodi protektif pasca-vaksinasi dan melemahnya sistem pengawasan imunologis (immunosurveillance) terhadap kuman patogen dan sel kanker.",
      "organImpact": "Peningkatan kerentanan ekstrem terhadap infeksi berat (pneumonia, sepsis, herpes zoster), reaktivasi infeksi laten (TBC, cacar ular), dan tingginya insiden neoplasma keganasan pada usia lanjut."
    },
    "geriatricSymptoms": {
      "classical": "Mudah terserang flu berulang yang lama sembuh, luka di kulit lambat menutup, kelemahan umum bertahap.",
      "atypicalGeriatric": "INFEKSI BERAT TANPA GEJALA RADANG KLASIK! Saat terserang infeksi paru atau kencing yang parah, lansia sering TIDAK DEMAM sama sekali (suhu tubuh tetap normal atau justru hipotermia), tidak mengeluh nyeri, melainkan bermanifestasi sebagai delirium akut (linglung mendadak), nafsu makan lenyap (anoreksia total), lemas terkulai di tempat tidur, dan jatuh tersungkur.",
      "whyDifferent": "Penurunan pelepasan pirogen endogen (IL-1, TNF-α) dan tumpulnya termoregulasi hipotalamus meredam respons demam protektif."
    },
    "staging": {
      "scoreName": "Penilaian Status Kerapuhan Imunologi Geriatri (Frailty Index & Biomarker)",
      "stages": [
        { "level": "Imunokompeten Lansia Fit", "criteria": "Respons memadai terhadap vaksinasi, biomarker inflamasi basal (CRP <3 mg/L) stabil.", "risk": "Pemeliharaan imunitas melalui nutrisi mikro dan vaksinasi rutin." },
        { "level": "Immunosenescence Sedang (Pre-Frail)", "criteria": "Rasio CD4/CD8 terbalik (<1.0), episode infeksi berulang 2-3 kali/tahun.", "risk": "Perlu suplemen imunonutrisi, skrining infeksi tersembunyi, dan vaksinasi booster terarah." },
        { "level": "Imunodefisiensi Senilis Berat (Frail)", "criteria": "Limfopenia kronis, anergia kulit total, inflamasi kronis persisten (CRP >10 mg/L), kaheksia.", "risk": "Risiko sepsis fulminan dan mortalitas tinggi - Kewaspadaan klinis ketat terhadap setiap perubahan perilaku." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Hitung Limfosit Total (TLC) & CD4/CD8 Ratio", "param": "Limfopenia (limfosit <1200-1500 sel/uL) dan rasio CD4/CD8 terbalik menunjukkan kelelahan sel T imun." },
        { "test": "High-Sensitivity CRP (hs-CRP) & Albumin Darah", "param": "hs-CRP meningkat menetap mengonfirmasi status 'Inflammaging' sistemik." }
      ],
      "imaging": "Foto Rontgen Toraks berkala saat ada perubahan klinis untuk mendeteksi pneumonia terselubung tanpa batuk.",
      "goldStandard": "Evaluasi komprehensif profil limfosit darah perifer, biomarker inflamasi, dan riwayat infeksi klinis berulang."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Strategi Pencegahan Vaksinasi Geriatri Aktif: Vaksin Pneumokokus (PCV13 / PPSV23), Vaksin Influenza tahunan dosis tinggi (High-Dose Flu Vaccine), dan Vaksin Herpes Zoster Rekombinan (Shingrix); terapi antibiotik empiris dini berspektrum tepat saat infeksi dicurigai.",
      "beersCriteria": "HINDARI penggunaan antibiotik jangka panjang tanpa indikasi definitif yang merusak mikrobioma usus dan memicu kolitis Clostridioides difficile yang mematikan pada lansia!",
      "monitoring": "Pantau suhu tubuh dasar harian lansia (kenaikan suhu 1.1°C dari suhu dasar lansia sudah merupakan kriteria demam medis geriatri!)."
    },
    "clinicalNutrition": {
      "macroMicro": "Imunonutrisi terarah: Protein berkualitas 1.2-1.5 g/kgBB/hari, Seng (Zinc) 15-20 mg/hari, Vitamin D3 1000-2000 IU/hari (modulator imunitas seluler), Vitamin C dan probiotik usus.",
      "recommendedFoods": "Telur ayam rebus, sup kaldu ayam kampung, yogurt probiotik alami, buah jeruk, pepaya, jamur tiram (sumber beta-glukan), kacang kenari.",
      "contraindicatedFoods": "Gula pasir olahan dan sirup fruktosa (glukosa tinggi melumpuhkan fagositosis neutrofil hingga beberapa jam), makanan basi/kurang higienis."
    },
    "emergency": {
      "immediateTriggers": "Lansia mendadak linglung tidak mengenali keluarga, napas tersengal cepat >24 kali/menit, tekanan darah sistolik anjlok <90 mmHg, suhu tubuh turun dingin <36°C dengan ujung jari pucat kebiruan (Tanda Sepsis Geriatri Darurat!).",
      "firstAidHome": "SEGERA panggil ambulans IGD RS (setiap jam penundaan antibiotik pada sepsis lansia meningkatkan risiko kematian sebesar 7-8%), jangan berikan minum saat pasien linglung."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan aktivitas fisik moderat rutin (jalan santai pagi hari 30 menit sambil berjemur matahari) yang terbukti memobilisasi sel pembunuh alami (Natural Killer cells) ke aliran darah.",
      "homeModifications": "Pastikan sirkulasi udara kamar tidur lancar dengan jendela ventilasi baik, anggota keluarga yang sedang flu wajib memakai masker saat berinteraksi dengan lansia."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Sistem Imun, Paru-paru & Otak (Ensefalopati Sepsis)",
      "biologicalMechanism": "Pelemahan imun membuat kuman paru atau saluran kencing berkembang biak tanpa perlawanan. Saat infeksi meluas, pelepasan endotoksin memicu badai sitokin yang menembus barier darah-otak (Blood-Brain Barrier), memicu peradangan saraf mikroglia dan Ensefalopati Delirium Akut.",
      "clinicalImpact": "Linglung mendadak pada lansia seringkali merupakan 'sinyal SOS' pertama dari sistem imun bahwa tubuhnya sedang diserang infeksi bakteri parah.",
      "prevention": "Vaksinasi lengkap sesuai jadwal geriatri, jaga kebersihan diri, dan skrining berkala status gizi protein tubuh."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Immunosenescentia & Syndroma Inflammaging Geriatricum",
      "icd10": "D84.9 / R54",
      "latinTerms": [
        { "term": "Immunosenescentia", "meaning": "Penurunan kapasitas fungsional sel kekebalan tubuh akibat proses penuaan biologis alami." },
        { "term": "Inflammaging", "meaning": "Status peradangan kronis steril derajat rendah yang menetap di seluruh tubuh akibat penuaan sistem imun." },
        { "term": "Involutio Thymi", "meaning": "Penyusutan alami jaringan kelenjar timus seiring usia yang membatasi pembentukan sel T pelindung baru." },
        { "term": "Anergia Cutanea", "meaning": "Hilangnya respons peradangan kulit saat diuji alergen/tuberkulin tanda kelemahan imunitas seluler." },
        { "term": "Immunovaccinatio", "meaning": "Pemberian vaksin pelindung antigen khusus untuk melatih kembali memori sel imun lansia." }
      ]
    }
  },

  "reumatoid-artritis": {
    "pathophysiology": {
      "cellularMechanism": "Penyakit autoimun sistemik kronis yang ditandai dengan sinovitis inflamasi destruktif simetris. Hilangnya toleransi imunologis memicu pembentukan autoantibodi (Rheumatoid Factor / RF dan Anti-CCP). Infiltrasi sel T CD4+, sel B, dan makrofag ke membran sinovial memicu hiperplasia sinovium membentuk jaringan invasif kaya pembuluh darah (Pannus). Pannus melepaskan sitokin TNF-α, IL-1, dan RANKL yang mengikis tulang rawan artikular dan melisiskan tulang subkondral.",
      "geriatricFactor": "Late-Onset Rheumatoid Arthritis (LORA / Awitan Usia Lanjut ≥60-65 tahun): awitan seringkali lebih akut dan mendadak, lebih sering menyerang sendi-sendi besar proksimal (bahu dan panggul) daripada sendi kecil jari tangan.",
      "organImpact": "Destruksi sendi ireversibel dengan subluksasi dan deformitas sendi (swan-neck, boutonniere, ulnar deviation), nodul reumatoid di bawah kulit, vaskulitis reumatoid, dan fibrosis paru interstisial (ILD)."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri dan bengkak sendi simetris (kedua tangan/kaki), kaku sendi pagi hari berlangsung lama (>1 jam), kelelahan kronis lemas, demam subfebris.",
      "atypicalGeriatric": "Pada lansia (LORA) sering bermanifestasi mirip Polimialgia Reumatika: nyeri dan kekakuan hebat mendadak pada kedua pundak dan panggul, penurunan berat badan drastis, serta LED/CRP yang melonjak sangat tinggi dengan faktor reumatoid yang seringkali negatif (seronegatif).",
      "whyDifferent": "Karakteristik klinis LORA melibatkan sendi proksimal besar dengan gejala konstitusional sistemik yang lebih menonjol dibanding pasien muda."
    },
    "staging": {
      "scoreName": "Kriteria Klasifikasi ACR/EULAR 2010 & Skor Aktivitas DAS28",
      "stages": [
        { "level": "Remisi Klinis (DAS28 < 2.6)", "criteria": "Tidak ada sendi bengkak aktif, inflamasi terkontrol baik.", "risk": "Pertahankan terapi DMARD dosis rumatan minimal." },
        { "level": "Aktivitas Sedang (DAS28 3.2 - 5.1)", "criteria": "Nyeri dan bengkak pada beberapa sendi, kaku pagi hari menetap.", "risk": "Eskalasi terapi kombinasi DMARD konvensional sintetik." },
        { "level": "Aktivitas Berat (DAS28 > 5.1)", "criteria": "Inflamasi sendi luas multipel, erosi radiologis progresif, gangguan fungsi harian.", "risk": "Risiko kecacatan permanen - Pertimbangkan agen biologis (Anti-TNF / Anti-IL-6) atau Targeted Synthetic DMARD (JAK Inhibitor)." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Anti-Cyclic Citrullinated Peptide (Anti-CCP / ACPA)", "param": "Spesifisitas sangat tinggi (>95-98%) untuk konfirmasi artritis reumatoid destruktif." },
        { "test": "Rheumatoid Factor (RF) Kuantitatif & LED/CRP", "param": "Peningkatan titer RF dan lonjakan tajam penanda inflamasi akut (LED >50-100 mm/jam)." }
      ],
      "imaging": "Foto Rontgen Tangan & Kaki AP/Obliq memperlihatkan osteopenia periartikular, penyempitan celah sendi simetris, dan lesi erosi marginal tulang; USG Muskuloskeletal mendeteksi hipervaskularisasi pannus (Power Doppler sinovitis).",
      "goldStandard": "Kombinasi skor klasifikasi ACR/EULAR ≥6 poin dengan pemeriksaan Anti-CCP dan erosi tulang radiologis."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Disease-Modifying Antirheumatic Drugs (DMARDs) Lini Pertama: Metotreksat (dimulai dosis rendah pada geriatri: 7.5 - 15 mg sekali seminggu disertai Asam Folat 5 mg/minggu); dikombinasikan dengan jembatan steroid dosis rendah (Metilprednisolon 4-8 mg/hari tappering-off).",
      "beersCriteria": "KRITERIA BEERS: Waspadai toksisitas Metotreksat pada lansia dengan penurunan fungsi ginjal (wajib periksa eGFR!); HINDARI penggunaan kortikosteroid oral dosis tinggi jangka panjang tanpa proteksi tulang karena memicu osteoporosis fraktur katastropik!",
      "monitoring": "Pantau Darah Lengkap (leukosit/trombosit), Enzim Hati (SGOT/SGPT), dan Kreatinin tiap 1-3 bulan selama terapi DMARD."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet Mediterania anti-inflamasi kaya polifenol dan asam lemak omega-3 rantai panjang (EPA/DHA), kalsium 1200 mg dan vitamin D3 pencegah osteoporosis steroid.",
      "recommendedFoods": "Minyak zaitun extra virgin, ikan sarden/salmon, biji chia, teh hijau, kunyit, buah beri, sayuran brokoli.",
      "contraindicatedFoods": "Gorengan minyak jelantah tinggi asam arakidonat pemicu prostaglandin radang, daging merah olahan, makanan ultra-proses."
    },
    "emergency": {
      "immediateTriggers": "Lansia dengan artritis reumatoid menahun mendadak mengalami leher kaku nyeri hebat disertai kebas kesemutan atau kelumpuhan pada keempat anggota gerak (Tanda Subluksasi Atlantoaksial C1-C2 Tulang Leher mengancam jiwa!), atau sesak napas berat mendadak (Pleuritis/Fibrosis Paru).",
      "firstAidHome": "Pasang penyangga leher kaku, JANGAN menggerakkan atau memutar leher lansia, segera larikan ke IGD bedah saraf."
    },
    "rehabilitation": {
      "physicalExercises": "Fisioterapi sendi aktif-lingkup gerak sendi (Range of Motion), latihan penguatan otot isometrik tanpa membebani sendi yang sedang radang akut, kompres hangat pagi hari untuk melenturkan sendi yang kaku.",
      "homeModifications": "Gunakan alat bantu makan berpegangan tebal (thick-handled cutlery), pembuka toples otomatis, pasang kran air model tuas dorong (bukan putar)."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Imunitas Sendi (Rangka), Pembuluh Darah Jantung & Tulang",
      "biologicalMechanism": "Sitokin radang TNF-α dan IL-6 yang diproduksi di sendi meluap ke sirkulasi darah sistemik, memicu aterosklerosis pembuluh darah koroner dini dan mengaktifkan osteoklas di seluruh kerangka tulang memicu osteoporosis sistemik sekunder.",
      "clinicalImpact": "Pasien artritis reumatoid memiliki risiko kematian akibat serangan jantung 2 kali lipat lebih tinggi dibanding populasi umum akibat vaskulitis inflamasi sistemik.",
      "prevention": "Kontrol aktivitas penyakit reumatoid sedini mungkin hingga mencapai target remisi klinis (Treat-to-Target strategy)."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Arthritis Rheumatoides Seropositiva & Synovitis Destructiva",
      "icd10": "M05.9 / M06.9",
      "latinTerms": [
        { "term": "Synovitis Rheumatoidea", "meaning": "Peradangan kronis selaput pelumas sendi yang memicu proliferasi jaringan abnormal." },
        { "term": "Pannus Articularis", "meaning": "Jaringan granulasi radang invasif tebal yang mengikis dan menghancurkan tulang rawan sendi." },
        { "term": "Deformitas Digitorum", "meaning": "Perubahan bentuk jari jemari tangan melengkung abnormal seperti leher angsa (swan-neck deformity)." },
        { "term": "Subluxatio Atlantoaxialis", "meaning": "Pergeseran longgar berbahaya antara tulang leher pertama (atlas) dan kedua (axis) akibat erosi ligamen." },
        { "term": "Nodulus Rheumatoideus", "meaning": "Benjolan kenyal subkutan di bawah kulit di sekitar siku atau sendi akibat endapan kompleks imun." }
      ]
    }
  },

  // === LIMFATIK ===
  "limfedema-kronis": {
    "pathophysiology": {
      "cellularMechanism": "Gangguan drainase cairan limfe interstisial akibat kerusakan atau hipoplasia pembuluh limfe (insufisiensi limfatik mekanik). Akumulasi cairan limfe yang kaya protein di ruang interstisial memicu aktivasi fibroblas, pelepasan faktor pertumbuhan TGF-β, dan diferensiasi sel lemak (adipogenesis). Terjadi fibrosis kulit yang padat non-pitting dan hipertrofi jaringan adiposa subkutan yang ireversibel.",
      "geriatricFactor": "Imobilisasi gravitasi (stasis dependensi kursi roda), riwayat operasi pengangkatan kelenjar getah bening atau radioterapi kanker masa lalu, dan komorbiditas insufisiensi vena berat.",
      "organImpact": "Pembengkakan masif ekstremitas (tungkai kaki gajah / elephantiasis), penipisan barier pertahanan kulit yang memicu infeksi bakteri berulang (selulitis/erisipelas), dan kehilangan mobilitas gerak mandiri."
    },
    "geriatricSymptoms": {
      "classical": "Pembengkakan tungkai kaki atau lengan yang tidak simetris (biasanya satu sisi lebih besar), rasa berat mengganjal dan tegang, kulit menebal mengeras seperti kulit jeruk (peau d'orange), tidak meninggalkan lekukan saat ditekan pada stadium lanjut (non-pitting).",
      "atypicalGeriatric": "Sering disangka bengkak akibat penyakit jantung biasa; datang dengan komplikasi infeksi kulit selulitis berulang disertai demam menggigil hebat, atau cairan getah bening merembes bocor menetes dari pori-pori kulit (limforea).",
      "whyDifferent": "Penumpukan jaringan lemak fibrotik subkutan pada lansia membuat bengkak limfedema tidak lagi mengempis meskipun kaki ditinggikan semalaman."
    },
    "staging": {
      "scoreName": "Stadium Klinis Limfedema International Society of Lymphology (ISL)",
      "stages": [
        { "level": "Stadium 0 (Subklinis / Laten)", "criteria": "Aliran limfe terganggu namun belum ada pembengkakan yang kasat mata.", "risk": "Edukasi pencegahan trauma dan infeksi kulit." },
        { "level": "Stadium 1 (Reversibel Awal)", "criteria": "Edema masih berupa pitting (meninggalkan lekukan), mengecil atau mengempis saat tungkai ditinggikan.", "risk": "Terapi kompresi elastis dini dan elevasi tungkai." },
        { "level": "Stadium 2 - 3 (Fibrosis Spontan & Elephantiasis)", "criteria": "Stadium 2: Jaringan mengeras fibrotik non-pitting; Stadium 3: Kulit kasar berbenjol (papilomatosis), deformitas masif 'kaki gajah'.", "risk": "Kompleks Decongestive Therapy (CDT) intensif oleh terapis limfatik bersertifikat." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Darah Lengkap & Albumin Serum", "param": "Membedakan pembengkakan sistemik hipoalbuminemia dari limfedema murni." },
        { "test": "Kultur Swab Eksudat Kulit", "param": "Jika terjadi kebocoran cairan limfe atau infeksi selulitis sekunder." }
      ],
      "imaging": "USG Vaskular Duplex menyingkirkan Deep Vein Thrombosis (DVT); Tanda Stemmer Positif (ketidakmampuan mencubit lipatan kulit di pangkal jari kaki kedua merupakan tanda patognomonik limfedema).",
      "goldStandard": "Limfoskintigrafi Kuantitatif Radionuklida (Lymphoscintigraphy) memperlihatkan keterlambatan klirens dan refluks dermal cairan limfe."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Limfedema TIDAK DAPAT DISEMBUHKAN DENGAN OBAT DIURETIK KENCING! Obat diuretik justru memperparah fibrosis dengan memekatkan protein interstisial. Terapi utama bersifat mekanis (CDT); obat hanya berupa antibiotik bakterisidal segera (Amoksisilin-Klavulanat / Sefaleksin) jika timbul infeksi selulitis bakteri akut.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI pemberian rutin Furosemid jangka panjang untuk mengobati limfedema karena tidak efektif dan memicu dehidrasi berat, hipotensi, serta gagal ginjal akut pada lansia!",
      "monitoring": "Ukur lingkar tungkai berkala pada titik anatomis tetap (pergelangan kaki, betis, paha) menggunakan pita ukur non-elastis."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet seimbang menjaga berat badan ideal (obesitas memperparah gangguan aliran limfatik), hidrasi cairan air putih normal, kurangi garam olahan.",
      "recommendedFoods": "Sayuran hijau kaya bioflavonoid alami, buah jeruk, ikan kukus, minyak zaitun, air putih hangat teratur.",
      "contraindicatedFoods": "Garam berlebih yang menarik cairan, makanan ultra-proses tinggi pengawet, minuman manis pemicu kenaikan lemak tubuh."
    },
    "emergency": {
      "immediateTriggers": "Tungkai yang bengkak mendadak memerah cerah panas membara meluas dengan cepat disertai garis merah menjalar ke selangkangan (limfangitis), demam menggigil tinggi >38.5°C, racau linglung (Tanda Selulitis Akut Sepsis Limfatik!).",
      "firstAidHome": "Bawa segera ke IGD rumah sakit untuk pemberian antibiotik intravena darurat sebelum kuman menginvasi aliran darah sistemik."
    },
    "rehabilitation": {
      "physicalExercises": "Complete Decongestive Therapy (CDT): (1) Manual Lymph Drainage (MLD - pijat drainase limfe lembut khusus); (2) Pembalutan multi-lapis pendek regang (Short-stretch compression bandaging); (3) Senam dekongestif limfatik terarah.",
      "homeModifications": "Rawat kulit kaki dengan pelembap setiap hari untuk mencegah retakan mikro pintu masuk kuman, potong kuku kaki lurus hati-hati, jangan berjalan bertelanjang kaki."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Saluran Limfe, Kulit (Integumen) & Sistem Imun",
      "biologicalMechanism": "Cairan getah bening kaya protein yang mandek di bawah kulit merupakan media biakan kuman bakteri yang sempurna. Sementara sel kekebalan pengawas (sel dendritik) tidak dapat bermigrasi ke kelenjar getah bening, melumpuhkan pertahanan lokal dan memicu lingkaran setan infeksi selulitis berulang.",
      "clinicalImpact": "Setiap episode infeksi selulitis merusak pembuluh limfe lebih lanjut, membuat kaki semakin membengkak permanen dan menurunkan kemandirian lansia.",
      "prevention": "Perawatan higienitas kulit kaki harian yang disiplin dan pemakaian stocking kompresi medis limfedema setiap hari."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Lymphaedema Extremitatum Chronicum & Elephantiasis Nostras",
      "icd10": "I89.0 / Q82.0",
      "latinTerms": [
        { "term": "Lymphaedema", "meaning": "Pembengkakan jaringan lunak akibat penumpukan cairan getah bening kaya protein yang tersumbat." },
        { "term": "Signum Stemmer Positivum", "meaning": "Ketidakmampuan mencubit lipatan kulit di pangkal jari kaki akibat penebalan fibrosis kulit." },
        { "term": "Lymphangitis", "meaning": "Peradangan infeksi akut pada saluran pembuluh getah bening yang tampak sebagai garis merah di kulit." },
        { "term": "Elephantiasis Nostras Verrucosa", "meaning": "Pembesaran ekstremitas masif menyerupai kaki gajah dengan permukaan kulit berbenjol kutil." },
        { "term": "Drainage Lymphatica Manualis (MLD)", "meaning": "Teknik manipulasi pemijatan ritmik lembut terarah untuk mengalirkan cairan limfe ke kelenjar sehat." }
      ]
    }
  },

  // === INTEGUMEN (KULIT, RAMBUT, KUKU) ===
  "ulkus-dekubitus": {
    "pathophysiology": {
      "cellularMechanism": "Kerusakan jaringan kulit dan struktur subkutan di bawahnya yang terlokalisir akibat tekanan mekanis eksternal berkepanjangan (melebihi tekanan penutupan kapiler arteri >32 mmHg), gaya geser (shear forces), dan friksi pada area tonjolan tulang (sakrum, tumit, trokanter panggul). Iskemia mikrovaskular memicu hipoksia seluler, penumpukan metabolit toksik, nekrosis jaringan lunak, dan ulserasi menggaung menembus lapisan fasia hingga tulang.",
      "geriatricFactor": "Penipisan lapisan dermis, hilangnya bantalan lemak subkutan pelindung, penurunan persepsi sensorik neuropatik, serta imobilisasi tirah baring total pascastroke/fraktur panggul.",
      "organImpact": "Luka borok terbuka yang dalam dapat terinfeksi bakteri resisten, memicu osteomielitis tulang sakrum, bakteremia, dan sepsis luka dekubitus yang mengancam nyawa."
    },
    "geriatricSymptoms": {
      "classical": "Kemerahan menetap pada kulit di atas tonjolan tulang (sakrum/bokong atau tumit) yang tidak memutih saat ditekan (non-blanchable erythema), lepuh luka melepuh, atau borok berlubang menggaung dengan dasar luka kekuningan/kehitaman.",
      "atypicalGeriatric": "Sering TANPA keluhan nyeri sama sekali pada lansia dengan stroke atau demensia! Luka sering tersembunyi di balik popok dewasa dan baru diketahui keluarga saat mencium bau busuk atau melihat rembesan nanah/darah di sprei tempat tidur.",
      "whyDifferent": "Neuropati sensorik dan penurunan kesadaran kognitif membuat lansia tidak merasakan sinyal nyeri peringatan iskemia jaringan."
    },
    "staging": {
      "scoreName": "Stadium Ulkus Dekubitus NPUAP / EPUAP (National Pressure Injury Advisory Panel)",
      "stages": [
        { "level": "Stadium 1 (Kemerahan Non-Blanchable)", "criteria": "Kulit utuh dengan area kemerahan menetap yang tidak memutih saat ditekan ibu jari.", "risk": "Reversibel cepat jika tekanan segera dihilangkan; gunakan bantalan pelindung." },
        { "level": "Stadium 2 (Kehilangan Sebagian Kulit)", "criteria": "Luka dangkal dengan dasar luka merah muda bersih atau gelembung lepuh berisi cairan serosa.", "risk": "Perawatan luka balutan modern moist wound dressing (hidrogel/hidrokoloid)." },
        { "level": "Stadium 3 - 4 (Borok Dalam Menembus Otot/Tulang)", "criteria": "Stadium 3: Lemak subkutan tampak; Stadium 4: Tulang, tendo, atau otot tampak jelas dengan jaringan mati hitam (slough/eschar).", "risk": "Risiko osteomielitis dan sepsis tinggi - Debridemen bedah dan penanganan luka spesialis." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Darah Lengkap & Albumin Serum", "param": "Hipoalbuminemia (<2.5-3.0 g/dL) sangat menghambat penyembuhan luka dan meningkatkan kerapuhan kulit." },
        { "test": "Kultur Jaringan Dasar Luka (Bukan Swab Permukaan)", "param": "Mendeteksi infeksi bakteri polimikrobial invasif (Pseudomonas, MRSA, kuman anaerob)." }
      ],
      "imaging": "Foto Rontgen atau MRI Tulang Sakrum / Panggul untuk mendeteksi Osteomielitis (infeksi tulang di dasar luka borok).",
      "goldStandard": "Evaluasi klinis inspeksi luka menyeluruh dengan Skala Penilaian Risiko Dekubitus Braden (Skor Braden <12 = Risiko Sangat Tinggi)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Perawatan Luka Modern (Moist Wound Healing): Balutan hidrokoloid, busa poliuretan (foam dressing) untuk menyerap eksudat, dan salep enzimatis autolitik debridemen; antibiotik sistemik HANYA diberikan jika terdapat tanda selulitis luas atau sepsis osteomielitis.",
      "beersCriteria": "HINDARI penggunaan antiseptik sitotoksik keras (Povidone Iodine pekat, Hidrogen Peroksida murni, atau Alkohol) langsung pada dasar luka granula karena membunuh sel fibroblas muda yang sedang tumbuh!",
      "monitoring": "Evaluasi luas ukuran luka (panjang, lebar, kedalaman) dan derajat eksudat tiap minggu (skor PUSH - Pressure Ulcer Scale for Healing)."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet Tinggi Kalori Tinggi Protein (TKTP) 1.5 - 2.0 g protein/kgBB/hari untuk sintesis kolagen granulasi luka, suplemen Seng (Zinc) 20 mg/hari, Vitamin C 500-1000 mg/hari, dan asam amino L-Arginin.",
      "recommendedFoods": "Putih telur rebus (3-4 butir/hari), ikan gabus (tinggi albumin alami), kaldu tulang, daging ayam cincang, puree alpukat.",
      "contraindicatedFoods": "Gula berlebih yang menghambat fagositosis sel darah putih, makanan rendah gizi yang memperparah kaheksia."
    },
    "emergency": {
      "immediateTriggers": "Luka mengeluarkan cairan nanah sangat berbau busuk bangkai melimpah, kulit di sekitar luka membengkak merah ungu panas menjalar, lansia demam menggigil tinggi, tekanan darah anjlok linglung apatis (Sepsis Luka Borok Dekubitus!).",
      "firstAidHome": "Tutup luka dengan kassa steril bersih, SEGERA bawa ke IGD rumah sakit untuk resusitasi cairan, antibiotik intravena, dan debridemen bedah darurat."
    },
    "rehabilitation": {
      "physicalExercises": "Protokol Reposisi Miring Kanan - Miring Kiri SETIAP 2 JAM SEKALI secara terjadwal sepanjang siang dan malam bagi lansia tirah baring di kasur.",
      "homeModifications": "Wajib gunakan Kasur Angin Anti-Dekubitus Bertekanan Selang-Seling (Alternating Pressure Air Mattress / Ripple Mattress), gunakan bantal busa penyangga di antara kedua lutut dan di bawah tumit agar tumit melayang (heel offloading)."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Kulit (Integumen), Tulang Rangka & Sistem Saraf (Imobilisasi)",
      "biologicalMechanism": "Penyakit stroke atau patah tulang panggul melumpuhkan kemampuan gerak lansia. Tulang yang menonjol menekan kulit ke kasur tanpa henti, memutus aliran darah kapiler dan memicu kematian seluler kulit. Infeksi borok kulit merembes ke tulang memicu osteomielitis kronis yang merusak kerangka panggul.",
      "clinicalImpact": "Dekubitus merupakan 'bencana penderitaan' yang sangat membebani keluarga dan sering menjadi pintu masuk infeksi sepsis fatal pada lansia tirah baring.",
      "prevention": "Pencegahan adalah kunci utama: miringkan tubuh tiap 2 jam, jaga kulit selalu bersih dan kering dari popok basah, dan gunakan barrier cream seng oksida."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Ulcus ex Decubitu Sacralis Gradus I-IV & Necrosis Cutis",
      "icd10": "L89.15 / L89.9",
      "latinTerms": [
        { "term": "Ulcus Decubitus", "meaning": "Luka borok pada kulit akibat tekanan fisik dan gaya gesek berkepanjangan pada bagian tubuh yang menonjol." },
        { "term": "Erythema Non-Blanchable", "meaning": "Kemerahan pada kulit yang tidak memucat saat ditekan jari tanda kerusakan mikrovaskular awal." },
        { "term": "Eschar Necroticus", "meaning": "Keropeng jaringan kulit dan lemak mati berwarna hitam keras di dasar luka yang harus dibuang." },
        { "term": "Osteomyelitis Subjacens", "meaning": "Infeksi bakteri yang merambat masuk menginfeksi tulang di bawah dasar luka borok yang dalam." },
        { "term": "Debridementum Chirurgicum", "meaning": "Tindakan pembedahan pengangkatan jaringan mati dan nanah untuk merangsang penyembuhan luka baru." }
      ]
    }
  },

  "herpes-zoster": {
    "pathophysiology": {
      "cellularMechanism": "Reaktivasi virus Varicella-Zoster (VZV) yang dorman (tidur) di ganglion radiks dorsalis saraf sensorik tulang belakang sejak infeksi cacar air di masa kecil. Penurunan imunitas seluler spesifik VZV memicu replikasi virus, migrasi virus menyusuri serabut saraf sensorik menuju dermis kulit, memicu inflamasi nekrotik ganglion saraf, demielinisasi serabut saraf, dan timbulnya erupsi vesikuler bergerombol sesuai dermatom saraf.",
      "geriatricFactor": "Penurunan imunitas sel T terkait usia (immunosenescence) melipatgandakan risiko herpes zoster pada usia >60 tahun dan memicu komplikasi Nyeri Pasca-Herpes (Postherpetic Neuralgia / PHN) pada >30-50% kasus geriatri.",
      "organImpact": "Kerusakan serabut saraf sensorik kronis memicu sensitisasi sentral medula spinalis dengan nyeri neuropatik berat yang menetap berbulan-bulan hingga bertahun-tahun setelah luka kulit sembuh."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri pedih menyengat terbakar atau seperti tersengat listrik pada satu sisi tubuh (unilateral), diikuti munculnya bruntusan lenting berair (vesikel) bergerombol di atas dasar kemerahan sesuai alur dermatom saraf (paling sering melingkar separuh dada atau dahi/wajah).",
      "atypicalGeriatric": "Nyeri neuropatik hebat mendahului munculnya bintik kulit hingga 4-7 hari (sering salah didiagnosis sebagai serangan jantung jika di dada kiri atau batu empedu jika di perut kanan); atau pada herpes zoster oftamikus mengenai cabang saraf mata (N. V1) yang memicu kebutaan.",
      "whyDifferent": "Kekuatan regenerasi saraf lansia yang lambat membuat kerusakan saraf jauh lebih parah dan rasa nyeri neuropatik bertahan sangat lama."
    },
    "staging": {
      "scoreName": "Fase Klinis Infeksi Varicella-Zoster & Skala Nyeri PHN",
      "stages": [
        { "level": "Fase Pre-Eruptif (Prodromal 1-5 hari)", "criteria": "Nyeri terbakar, hiperestesia, pegal linu unilateral tanpa ruam kulit.", "risk": "Kecurigaan klinis tinggi memungkinkan inisiasi antivirus segera saat bintik pertama muncul." },
        { "level": "Fase Eruptif Akut (Hari 1 - 14)", "criteria": "Vesikel melepuh bergerombol, pecah membentuk keropeng krusta.", "risk": "Periode jendela emas antivirus oral (dalam 72 jam pertama awitan ruam)." },
        { "level": "Neuralgia Pasca-Herpes (PHN Kronis)", "criteria": "Nyeri neuropatik menusuk membakar menetap >3 bulan setelah luka kulit sembuh total.", "risk": "Nyeri kronis berat yang menurunkan kualitas hidup - Terapi multimodal nyeri neuropatik geriatri." }
      ]
    },
    "diagnostic": {
      "labTests": [
        { "test": "Tzanck Smear / Kerokan Dasar Vesikel", "param": "Memperlihatkan sel raksasa berinti banyak (multinucleated giant cells) khas infeksi herpes virus." },
        { "test": "PCR DNA Varicella-Zoster Virus (VZV)", "param": "Konfirmasi definitif materi genetik virus pada kasus atipikal atau zoster tanpa ruam (zoster sine herpete)." }
      ],
      "imaging": "Pemeriksaan slit-lamp mata oleh dokter spesialis mata jika ruam mengenai dahi atau cuping hidung (tanda Hutchinson positif tanda keterlibatan saraf mata).",
      "goldStandard": "Diagnosis klinis berbasis karakteristik ruam vesikuler unilateral dermatomal dikombinasikan dengan PCR VZV."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Antivirus Oral Segera dalam 72 Jam Pertama: Valasiklovir 3x1000 mg/hari atau Asiklovir 5x800 mg/hari selama 7 hari penuh; Analgesik Nyeri Neuropatik: Gabapentin (100-300 mg malam hari dititrasi pelan) atau Pregabalin 50-75 mg malam; Salep anestesi lidokain topikal patch 5% pada kulit yang sudah menutup.",
      "beersCriteria": "KRITERIA BEERS: HINDARI analgesik opioid berat dan hindari Amitriptilin dosis tinggi pada lansia karena efek antikolinergik kuat; sesuaikan dosis Asiklovir/Valasiklovir dengan fungsi ginjal (eGFR) lansia untuk mencegah neurotoksisitas halusinasi!",
      "monitoring": "Pantau fungsi ginjal (hidrasi cukup mencegah kristalisasi asiklovir di ginjal) dan pantau tajam penglihatan jika zoster di wajah."
    },
    "clinicalNutrition": {
      "macroMicro": "Nutrisi kaya vitamin B-kompleks (terutama B1, B6, B12 neurotropik) untuk mendukung pemulihan selubung mielin saraf, protein cukup.",
      "recommendedFoods": "Telur rebus, ikan laut, alpukat, pisang, sayuran hijau kukus, daging ayam rebus, air putih hangat 2 liter/hari.",
      "contraindicatedFoods": "Makanan sangat pedas, makanan gorengan minyak jelantah yang memicu inflamasi, minuman manis berenergi tinggi kafein."
    },
    "emergency": {
      "immediateTriggers": "Bintik lenting herpes muncul di dahi, kelopak mata, atau ujung cuping hidung disertai mata merah sangat perih silau (Herpes Zoster Ophthalmicus - Risiko Kebutaan Permanen!), atau muncul kelumpuhan otot wajah mencong dan telinga sakit berdenging (Sindrom Ramsay Hunt).",
      "firstAidHome": "Jangan menggaruk atau memecahkan lenting air di kulit, SEGERA bawa ke dokter spesialis mata/THT dan kulit dalam 24 jam pertama."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan desensitisasi kulit lembut (menyentuhkan kain sutra halus di area bekas luka untuk mengurangi hipersensitivitas allodynia), latihan relaksasi pernapasan untuk mengelola stres nyeri kronis.",
      "homeModifications": "Gunakan pakaian longgar berbahan katun sutra halus agar tidak bergesekan dengan kulit yang sakit, kompres kassa dingin larutan NaCl pada lepuh akut."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Sistem Imun (VZV), Kulit (Integumen) & Sistem Saraf Sensorik",
      "biologicalMechanism": "Pelemahan sistem imun lansia memberi kesempatan virus cacar air di ganglion saraf untuk bangkit kembali. Virus menggerogoti kabel serabut saraf sensorik dari dalam hingga tembus ke kulit luar. Setelah kulit sembuh, serabut saraf yang rusak terus menembakkan sinyal listrik nyeri palsu ke otak (Neuralgia Pasca-Herpes).",
      "clinicalImpact": "Nyeri pasca-herpes pada lansia terkenal sangat menyiksa, memicu depresi berat, keputusasaan, dan insomnia kronis selama bertahun-tahun.",
      "prevention": "Vaksinasi Herpes Zoster Rekombinan (Shingrix 2 dosis) sangat dianjurkan untuk semua orang berusia ≥50 tahun guna mencegah timbulnya zoster dan komplikasi nyeri saraf kronis."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Herpes Zoster Dermatomal & Neuralgia Post-Herpetica (PHN)",
      "icd10": "B02.9 / B02.2",
      "latinTerms": [
        { "term": "Herpes Zoster (Zona)", "meaning": "Reaktivasi infeksi virus cacar air yang menyerang serabut saraf dan kulit sesuai alur persarafan." },
        { "term": "Dermatoma Sensoricum", "meaning": "Area bidang permukaan kulit tubuh yang dipersarafi oleh satu akar serabut saraf tulang belakang tunggal." },
        { "term": "Neuralgia Post-Herpetica (PHN)", "meaning": "Rasa nyeri menusuk terbakar kronis yang menetap lama setelah lenting cacar ular sembuh." },
        { "term": "Allodynia", "meaning": "Kondisi abnormal di mana rangsangan bukan nyeri (seperti hembusan angin atau gesekan baju tipis) memicu rasa sakit menyiksa." },
        { "term": "Herpes Zoster Ophthalmicus", "meaning": "Komplikasi infeksi herpes yang menyerang cabang saraf mata yang dapat merusak kornea dan memicu kebutaan." }
      ]
    }
  }
};

// Merge part 2 into clinicalData
const finalMerged = Object.assign({}, clinicalData, dossiersPart2);
console.log('Final merged clinical dossiers count:', Object.keys(finalMerged).length);

const fullHeader = `/**
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

fs.writeFileSync('clinical_data.js', fullHeader + JSON.stringify(finalMerged, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote clinical_data.js! Total size:', fs.statSync('clinical_data.js').size, 'bytes');

