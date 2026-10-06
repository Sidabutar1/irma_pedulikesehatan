/**
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

const DEEP_CLINICAL_DATA = {
  "pneumonia": {
    "pathophysiology": {
      "cellularMechanism": "Invasi patogen (Streptococcus pneumoniae, Klebsiella, atau aspirasi flora anaerob orofaring) menembus barier mukosiliar dan mengkolonisasi ruang alveolar. Makrofag alveolar melepaskan sitokin pro-inflamatori (IL-1, IL-6, TNF-α) yang memicu vasodilatasi kapiler paru dan peningkatan permeabilitas endotel. Eksudat kaya protein, neutrofil, dan eritrosit memenuhi alveoli (fase hepatisasi merah disusul hepatisasi kelabu), menyebabkan ketidakcocokan ventilasi-perfusi (V/Q mismatch), shunt intrapulmonal, dan hipoksemia refrakter.",
      "geriatricFactor": "Immunosenescence (penurunan fagositosis makrofag dan penurunan fungsi sel T helper) berpadu dengan penurunan refleks batuk (disfungsi medula oblongata/disfagia subklinis) dan penurunan elastisitas toraks. Lansia sering mengalami 'silent aspiration' saat tidur.",
      "organImpact": "Konsolidasi parenkim paru mengurangi compliance paru drastis, meningkatkan beban kerja otot bantu napas, dan dapat memicu gagal napas tipe 1 atau berkembang menjadi Acute Respiratory Distress Syndrome (ARDS) serta sepsis berat."
    },
    "geriatricSymptoms": {
      "classical": "Demam menggigil tinggi (>38.5°C), batuk produktif dahak mukopurulen/berkarat (rust-colored), nyeri dada pleuritik menusuk saat inspirasi.",
      "atypicalGeriatric": "Demam sering TIDAK ADA (suhu normal bahkan hipotermia <36°C). Gejala utama berupa delirium akut (linglung mendadak), penurunan nafsu makan mendadak (anoreksia total), kelemahan umum (letargi ekstrem), jatuh tanpa sebab jelas, dan takikardia/takipnea tanpa keluhan sesak subjektif.",
      "whyDifferent": "Penurunan respons pirogenik di hipotalamus, respons leukositosis yang melambat akibat penuaan sumsum tulang, dan ambang batas persepsi nyeri viseral yang menurun."
    },
    "staging": {
      "scoreName": "Stratifikasi Risiko CURB-65 & PORT / Pneumonia Severity Index (PSI)",
      "stages": [
        {
          "level": "CURB-65 Skor 0 - 1",
          "criteria": "Confusion (-), Urea ≤7 mmol/L, RR <30x/m, BP: SBP ≥90 & DBP ≥60, Usia ≥65 (+1)",
          "risk": "Mortalitas rendah (<3%) - Rawat jalan dengan antibiotik oral terkontrol dan pemantauan harian."
        },
        {
          "level": "CURB-65 Skor 2",
          "criteria": "Memenuhi 2 kriteria CURB-65 (misal Usia ≥65 dan Takipnea RR ≥30x/m)",
          "risk": "Mortalitas sedang (9%) - Indikasi rawat inap bangsal untuk terapi antibiotik parenteral."
        },
        {
          "level": "CURB-65 Skor 3 - 5",
          "criteria": "Memenuhi 3 atau lebih kriteria (misal Delirium, Urea >7 mmol/L, Hipotensi)",
          "risk": "Mortalitas tinggi (15-40%) - Pertimbangkan perawatan intensif (ICU/HCU) dengan monitor hemodinamik invasif."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Darah Lengkap (CBC)",
          "param": "Leukositosis (>12.000/µL) atau Leukopenia berat (<4.000/µL, prognosis buruk pada lansia), rasio neutrofil-limfosit meningkat."
        },
        {
          "test": "Biomarker Inflamasi",
          "param": "C-Reactive Protein (CRP) kuantitatif (>50 mg/L) & Procalcitonin (PCT >0.5 ng/mL untuk konfirmasi etiologi bakterial vs viral)."
        },
        {
          "test": "Analisis Gas Darah (AGD)",
          "param": "PaO2 <60 mmHg, PaO2/FiO2 <300, asidosis respiratorik terkompensasi atau alkalosis respiratorik awal."
        },
        {
          "test": "Kultur Dahak & Darah",
          "param": "Pewarnaan Gram dahak, kultur mikroorganisme & uji resistensi antimikroba (AST) sebelum inisiasi antibiotik."
        }
      ],
      "imaging": "Rontgen Toraks PA/Lateral (Infiltrat alveolar, konsolidasi lobaris dengan air bronchogram, atau infiltrat basal bilateral khas aspirasi); HRCT Toraks bila rontgen inkonklusif.",
      "goldStandard": "Kombinasi infiltrat baru pada pencitraan radiologi toraks dengan minimal 2 tanda klinis infeksi (takipnea, ronki basah kasar, lekositosis atau sputum purulen)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Antibiotik empiris: Kombinasi Beta-laktam intravena (Ceftriaxone 1-2g/24j atau Ampicillin-Sulbactam) PLUS Makrolida (Azithromycin 500mg) atau Fluorokuinolon respirasi (Levofloxacin 750mg intravena/oral).",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Hati-hati penggunaan Fluorokuinolon (Levofloxacin/Ciprofloxacin) pada lansia karena risiko delirium, perpanjangan interval QTc, ruptur tendon Achilles, dan hipoglikemia. Hindari obat batuk penekan refleks (antitusif opioid seperti Kodein) yang dapat menahan retensi sekret kental di alveoli.",
      "monitoring": "Fungsi ginjal (Kreatinin serum & eGFR) untuk penyesuaian dosis aminoglikosida/beta-laktam; Elektrolit serum serial; Saturasi perifer (SpO2)."
    },
    "clinicalNutrition": {
      "macroMicro": "Tinggi protein (1.2 - 1.5 g/kgBB/hari untuk melawan katabolisme infeksi) dan densitas energi tinggi (30 - 35 kkal/kgBB/hari). Asupan cairan terhidrasi 30 mL/kgBB kecuali terdapat gagal jantung/ginjal.",
      "recommendedFoods": "Kaldu tulang kaya asam amino, telur rebus lumat, ikan gabus (albumin tinggi), bubur saring dengan suplementasi omega-3 dan vitamin D3 (1000-2000 IU/hari).",
      "contraindicatedFoods": "Cairan encer bebas bila pasien memiliki gangguan menelan (risiko tinggi mikroaspirasi ulang - gunakan cairan pengental/thickener), produk susu tinggi laktosa bila diare."
    },
    "emergency": {
      "immediateTriggers": "SpO2 <90% dengan oksigen ruangan, laju napas >32 kali/menit, tekanan darah sistolik <90 mmHg (syok septik), sianosis sentral, delirium hipoaktif/koma.",
      "firstAidHome": "Posisikan setengah duduk (Fowler 45-60 derajat), pasang oksigen nasal kanul 2-4 Lpm jika tersedia, JANGAN memberi makan/minum saat pasien linglung, segera hubungi ambulans gawat darurat."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan pembersihan jalan napas (Active Cycle of Breathing Technique - ACBT), teknik huffing untuk memobilisasi sputum tanpa memicu kelelahan toraks, mobilisasi dini miring kanan-kiri tiap 2 jam.",
      "homeModifications": "Ketinggian tempat tidur dengan sandaran kepala adjustable, suction portable bila dahak melimpah, desinfeksi alat nebulizer secara berkala."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Sistem Saraf (Disfagia & Refleks Batuk) & Otot Pernapasan",
      "biologicalMechanism": "Penurunan fungsi medula oblongata atau defisit pascastroke melumpuhkan koordinasi menelan (disfagia), memicu aspirasi mikro silent saliva dan kuman lambung ke alveoli. Kelemahan otot diafragma dan interkostal geriatri (sarkopenia respiratori) menurunkan daya dorong batuk untuk membersihkan dahak, sehingga infeksi terjebak di segmen paru basah.",
      "clinicalImpact": "Pneumonia aspirasi merupakan penyebab mortalitas tertinggi pada pasien demensia dan stroke; infeksi memicu badai sitokin yang merusak barier darah-otak dan memicu delirium sekunder.",
      "prevention": "Skrining uji menelan gugus air (Water Swallow Test), posisi duduk tegak 90° saat makan hingga 30 menit setelahnya, fisioterapi dada dan latihan penguatan otot pernapasan (Inspiratory Muscle Training)."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Pneumonia Communitiatis (CAP) / Bronchopneumonia Aspirativa",
      "icd10": "J18.9 / J69.0",
      "latinTerms": [
        {
          "term": "Consolidatio Pulmonalis",
          "meaning": "Kondisi jaringan parenkim paru memadat akibat rongga alveoli terisi eksudat radang, neutrofil, dan fibrin."
        },
        {
          "term": "Dyspnea & Tachypnea",
          "meaning": "Sensasi sesak napas subjektif dan peningkatan frekuensi napas (>24-30 kali/menit) khas pada lansia."
        },
        {
          "term": "Silent Microaspiration",
          "meaning": "Masuknya tetesan saliva atau cairan lambung ke saluran napas bawah tanpa memicu refleks batuk."
        },
        {
          "term": "V/Q Mismatch (Ventilatio-Perfusio)",
          "meaning": "Ketidakseimbangan rasio ventilasi udara alveolar dengan perfusi darah kapiler paru."
        },
        {
          "term": "Rhonchi Humidi Basales",
          "meaning": "Suara napas tambahan berderak basah kasar pada basal paru akibat akumulasi cairan di bronkiolus."
        }
      ]
    }
  },
  "ppok": {
    "pathophysiology": {
      "cellularMechanism": "Inhalasi kronis partikel asap tembakau atau biomassa memicu aktivasi makrofag alveolar dan neutrofil yang melepaskan protease (neutrofil elastase, MMP-9, MMP-12) melebihi kapasitas antiprotease (Alpha-1 Antitrypsin). Terjadi destruksi ireversibel dinding alveolar (emfisema) dan hipertrofi kelenjar submukosa dengan hiperplasia sel goblet di saluran napas kecil (bronkiolitis obstruktif kronis). Berkurangnya recoil elastis paru menyebabkan *air trapping*, hiperinflasi statis/dinamis, dan peningkatan Residual Volume (RV).",
      "geriatricFactor": "Penuaan fisiologis paru ('senile lung') yang mengalami penurunan luas permukaan difusi gas dan kalsifikasi sendi kostokondral memperberat restriksi mekanik toraks.",
      "organImpact": "Hipertensi pulmonal akibat vasokonstriksi hipoksik kronis dan renovaskular remodeling, yang berujung pada *Cor Pulmonale* (gagal jantung kanan sekunder)."
    },
    "geriatricSymptoms": {
      "classical": "Batuk kronis berdahak pagi hari, sesak napas progresif saat aktivitas, mengi ekspiratori.",
      "atypicalGeriatric": "Sarkopenia berat (penurunan massa otot ekstremitas), kelelahan kronis tanpa mengeluhkan sesak napas (lansia membatasi aktivitas fisik sendiri), barrel chest (dada tong), pernapasan pursed-lip spontan, dan penurunan berat badan cepat (*pulmonary cachexia*).",
      "whyDifferent": "Lansia sering menganggap sesak napas adalah konsekuensi wajar dari usia tua (*under-reporting*), sehingga baru berobat saat stadium akhir."
    },
    "staging": {
      "scoreName": "Klasifikasi Obstruksi Spirometri GOLD (1-4) & Kelompok Gejala A-B-E (2024 Update)",
      "stages": [
        {
          "level": "GOLD 1 (Ringan) & GOLD 2 (Sedang)",
          "criteria": "FEV1/FVC < 0.70 post-bronkodilator. GOLD 1: FEV1 ≥ 80% prediksi. GOLD 2: 50% ≤ FEV1 < 80% prediksi.",
          "risk": "Eksaserbasi jarang, penurunan toleransi gerak ringan."
        },
        {
          "level": "GOLD 3 (Berat) & GOLD 4 (Sangat Berat)",
          "criteria": "GOLD 3: 30% ≤ FEV1 < 50%. GOLD 4: FEV1 < 30% prediksi atau FEV1 < 50% disertai gagal napas kronis.",
          "risk": "Risiko gagal napas akut, ketergantungan oksigen rumah jangka panjang."
        },
        {
          "level": "Kelompok GOLD 'E' (Exacerbator)",
          "criteria": "≥ 2 eksaserbasi moderat per tahun ATAU ≥ 1 eksaserbasi yang memerlukan rawat inap.",
          "risk": "Indikasi terapi inhaler kombinasi ganda atau tripel (LABA + LAMA + ICS bila eosinofil darah ≥300)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Spirometri Pasca-Bronkodilator",
          "param": "FEV1/FVC < 0.70 (rasio tetap) mengonfirmasi keterbatasan aliran udara persisten yang tidak sepenuhnya reversibel."
        },
        {
          "test": "Hitung Eosinofil Darah",
          "param": "Digunakan sebagai panduan penambahan Inhaled Corticosteroid (ICS) bila ≥300 sel/µL."
        },
        {
          "test": "Kadar Alpha-1 Antitrypsin (AAT)",
          "param": "Eksklusi defisiensi enzimatik bawaan terutama pada riwayat keluarga."
        },
        {
          "test": "Analisis Gas Darah (AGD)",
          "param": "Evaluasi hiperkapnia kronis (PaCO2 >45 mmHg) dan hipoksemia (PaO2 <55 mmHg)."
        }
      ],
      "imaging": "Rontgen Toraks (Diafragma mendatar rendah, ruang retrosternal melebar, hiperlusen parenkim paru, corakan vaskular perifer meramping); HRCT untuk karakterisasi emfisema sentrilobular vs panlobular.",
      "goldStandard": "Pemeriksaan Spirometri dengan uji reversibilitas bronkodilator."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Lini utama: LAMA (Long-Acting Muscarinic Antagonist, misal Tiotropium) + LABA (Long-Acting Beta-2 Agonist, misal Indacaterol/Formoterol). Terapi tripel (+ ICS seperti Fluticasone) untuk kelompok eksaserbasi sering dengan eosinofil tinggi.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Hindari obat sedatif/hipnotik golongan Benzodiazepin (Diazepam, Alprazolam) karena risiko depresi pusat napas akut yang fatal pada retensi CO2. Hati-hati pemakaian beta-blocker non-selektif.",
      "monitoring": "Teknik inhalasi lansia (sering salah memakai MDI - gunakan spacer atau DPI yang memerlukan inspirasi adekuat); Oksimetri harian."
    },
    "clinicalNutrition": {
      "macroMicro": "Tinggi lemak baik (30-45% kalori total) dan kontrol karbohidrat proporsional karena metabolisme karbohidrat menghasilkan Respiratory Quotient (RQ) tinggi yang memproduksi lebih banyak gas CO2.",
      "recommendedFoods": "Alpukat, minyak zaitun, ikan salmon, kacang almond, telur omega-3, porsi kecil tapi sering (5-6 kali sehari) agar diafragma tidak tertekan oleh lambung kenyang.",
      "contraindicatedFoods": "Makanan penghasil gas berlebih (kol, brokoli mentah, soda) yang mendorong diafragma ke atas dan mempersempit rongga dada."
    },
    "emergency": {
      "immediateTriggers": "Eksaserbasi Akut PPOK (AECOPD): Peningkatan sesak napas berat, peningkatan volume sputum, dan sputum berubah menjadi purulen (Kriteria Anthonisen Tipe 1).",
      "firstAidHome": "Gunakan nebulizer bronkodilator kerja cepat (SABA + SAMA: Salbutamol + Ipratropium), posisikan duduk tripod (condong ke depan bersandar meja), jangan berikan oksigen aliran tinggi >2 Lpm tanpa pengawasan (risiko narcosis CO2)."
    },
    "rehabilitation": {
      "physicalExercises": "Pursed-Lip Breathing (tarik napas via hidung 2 hitungan, hembuskan via bibir mengerucut 4 hitungan), Latihan pernapasan diafragma, Latihan jalan 6 menit (6-Minute Walk Test) terpantau.",
      "homeModifications": "Bebas dari asap rokok, dupa, dan obat nyamuk bakar 100%; pasang penyaring udara HEPA; gunakan oksigen konsentrator bersertifikat medis."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Paru-paru <-> Otot Rangka (Sarkopenia Kaheksia) & Saraf Pusat",
      "biologicalMechanism": "Hipoksia kronis dan inflamasi sistemik (TNF-α, IL-6) merangsang jalur degradasi protein ubiquitin-proteasome pada otot rangka, menyebabkan atrofi otot perifer berat (terutama kuadrisep paha) hingga 40% massa otot lenyap. Penurunan ventilasi menyebabkan retensi CO2 kronis (hiperkapnia) yang menekan susunan saraf pusat, memicu enselofati respiratori dan disfungsi kognitif.",
      "clinicalImpact": "Kehilangan massa otot kuadrisep menurunkan kapasitas fungsional jalan secara drastis, meningkatkan risiko jatuh 3 kali lipat, dan mempercepat ketergantungan oksigen.",
      "prevention": "Kombinasi rehabilitasi paru dengan latihan beban perifer terukur, suplementasi asam amino esensial tinggi leusin, serta pemantauan saturasi SpO2 dan analisis gas darah berkala."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Morbus Pulmonalis Obstructivus Chronicus (COPD) / Emphysema Pulmonum",
      "icd10": "J44.9 / J43.9",
      "latinTerms": [
        {
          "term": "Hyperinflatio Pulmonalis",
          "meaning": "Pemerangkapan udara berlebih di alveoli (air trapping) akibat hilangnya elastisitas rekoil paru."
        },
        {
          "term": "Emphysema Centrilobulare",
          "meaning": "Destruksi permanen dinding septum alveolar yang memperbesar kantung udara secara patologis."
        },
        {
          "term": "Cachexia Respiratoria",
          "meaning": "Penyusutan massa otot rangka ekstrem akibat pengeluaran energi pernapasan dan sitokin katabolik."
        },
        {
          "term": "Cor Pulmonale Chronicum",
          "meaning": "Hipertrofi dan disfungsi ventrikel kanan jantung sekunder terhadap hipertensi vaskular paru."
        },
        {
          "term": "Hypoxemia & Hypercapnia",
          "meaning": "Kadar PaO2 darah yang rendah disertai retensi karbon dioksida PaCO2 tinggi refrakter."
        }
      ]
    }
  },
  "asma": {
    "pathophysiology": {
      "cellularMechanism": "Inflamasi saluran napas heterogen yang dimediasi oleh limfosit Th2, sel mast, dan eosinofil (pada asma eosinofilik) atau neutrofil (pada asma lanjut). Pelepasan mediator histamin, leukotrien C4/D4, dan prostaglandin D2 memicu spasme otot polos bronkus akut, edema dinding bronkial, dan hipersekresi mukus tebal yang menyumbat lumen jalan napas.",
      "geriatricFactor": "Penurunan persepsi bronkokonstriksi pada lansia membuat mereka lambat menyadari bronkospasme berat. Sering bertumpang tindih dengan PPOK (Asthma-COPD Overlap / ACO).",
      "organImpact": "Remodeling saluran napas jangka panjang berupa penebalan membran basal, fibrosis subepitelial, dan hipertrofi otot polos ireversibel."
    },
    "geriatricSymptoms": {
      "classical": "Mengi berulang yang dapat terdengar dari jauh, batuk malam hari, rasa dada tertekan berat, sesak paroksismal reversibel.",
      "atypicalGeriatric": "Batuk malam hari terisolasi (cough-variant asthma) yang sering disalahartikan sebagai gagal jantung kiri (*cardiac asthma*), penurunan toleransi jalan santai.",
      "whyDifferent": "Penurunan elastisitas dinding dada lansia menutupi variabilitas fluktuasi puncak aliran ekspirasi."
    },
    "staging": {
      "scoreName": "Tingkat Kontrol Asma Menurut GINA (Global Initiative for Asthma)",
      "stages": [
        {
          "level": "Terkontrol Baik",
          "criteria": "Gejala siang hari ≤2x/minggu, tanpa terbangun malam, tanpa keterbatasan aktivitas, pelega ≤2x/minggu.",
          "risk": "Risiko eksaserbasi minimal."
        },
        {
          "level": "Terkontrol Sebagian",
          "criteria": "Terdapat 1-2 kriteria di atas dalam seminggu.",
          "risk": "Perlu evaluasi teknik inhaler dan peningkatan dosis bertahap."
        },
        {
          "level": "Tidak Terkontrol",
          "criteria": "≥3 kriteria ditemukan dalam satu minggu.",
          "risk": "Risiko tinggi serangan asma fatal dan kunjungan IGD mendesak."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Hitung Eosinofil & IgE Total",
          "param": "Eosinofilia darah perifer (>300 sel/µL) dan kadar Imunoglobulin E spesifik."
        },
        {
          "test": "Fraksi Nitrik Oksida Terhembus (FeNO)",
          "param": "Kadar FeNO >50 ppb menandakan inflamasi eosinofilik aktif pada saluran napas."
        },
        {
          "test": "Uji Reversibilitas Bronkodilator",
          "param": "Peningkatan FEV1 >12% dan >200 mL setelah inhalasi 400 mcg salbutamol."
        }
      ],
      "imaging": "Rontgen toraks biasanya normal di luar serangan, berguna menyingkirkan pneumotoraks, gagal jantung, atau neoplasma bronkogenik.",
      "goldStandard": "Pemeriksaan Spirometri dengan bukti variabilitas aliran ekspirasi berlebih yang reversibel."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Terapi Lini Pertama GINA: Kombinasi ICS-Formoterol dosis rendah sebagai pengontrol harian sekaligus pelega (MART - Maintenance and Reliever Therapy).",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Waspadai penggunaan obat tetes mata glaukoma golongan beta-blocker non-selektif (Timolol) yang dapat diserap sistemik dan memicu bronkospasme fatal pada lansia!",
      "monitoring": "Peak Expiratory Flow (PEF) meter mandiri di rumah; Pemeriksaan jamur mulut (kandidiasis oral) pasca-inhalasi steroid."
    },
    "clinicalNutrition": {
      "macroMicro": "Kaya antioksidan vitamin C, vitamin E, magnesium (relaksasi otot polos bronkus), dan asam lemak omega-3 anti-inflamasi.",
      "recommendedFoods": "Buah beri, brokoli kukus, ikan kembung, biji chia, kuaci labu kaya magnesium.",
      "contraindicatedFoods": "Makanan mengandung pengawet sulfit (buah kering kemasan, anggur fermentasi, makanan kaleng olahan)."
    },
    "emergency": {
      "immediateTriggers": "Status Asmatikus: Pasien tidak mampu mengucapkan kalimat utuh dalam satu napas, retraksi otot interkostal dan supraklavikula dalam, mengi mendadak menghilang (*silent chest* - tanda kolaps napas total).",
      "firstAidHome": "Segera berikan 4-10 semprot inhaler pelega dengan spacer (1 semprot tiap 30-60 detik), dudukkan tegak, bawa ke IGD tanpa menunda."
    },
    "rehabilitation": {
      "physicalExercises": "Senam asma teratur berintensitas rendah, latihan pernapasan Buteyko untuk mengurangi hiperventilasi.",
      "homeModifications": "Bungkus kasur & bantal dengan pelindung anti-tungau (mite-proof), cuci seprai air panas >60°C seminggu sekali, hindari pembersih aerosol beraroma tajam."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saluran Napas <-> Sistem Saraf Otonom & Lambung (GERD)",
      "biologicalMechanism": "Hiperreaktivitas saraf parasimpatis kolinergik (nervus vagus) melepaskan asetilkolin berlebih ke reseptor muskarinik M3 di otot polos bronkus, memicu bronkospasme hebat terutama malam hari saat tonus vagal dominan. Sebaliknya, refluks asam lambung (GERD) merangsang reseptor sensorik vagal esofagus bawah, memicu refleks batuk dan spasme bronkus silang (vagally mediated bronchoconstriction).",
      "clinicalImpact": "Eksaserbasi asma malam hari sering tidak mempan inhaler biasa karena dipicu stimulus vagal dan mikroaspirasi asam lambung tak terdeteksi.",
      "prevention": "Pengendalian asam lambung dengan elevasi kepala saat tidur, hindari makan 3 jam sebelum tidur, serta terapi inhalasi kombinasi kortikosteroid dan agonis beta-2 jangka panjang (LABA/ICS)."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Asthma Bronchiale Geriatrica / Hyperreactivitas Bronchialis",
      "icd10": "J45.9",
      "latinTerms": [
        {
          "term": "Bronchospasmus Reversibilis",
          "meaning": "Penyempitan spasmodik otot polos bronkus yang dapat pulih spontan atau dengan bronkodilator."
        },
        {
          "term": "Hyperreactivitas Muscularis",
          "meaning": "Sensitivitas berlebih reseptor kolinergik M3 otot polos bronkial terhadap stimulus iritan."
        },
        {
          "term": "Remodeling Bronchiale",
          "meaning": "Penebalan membrana retikularis basalis dan hiperplasia kelenjar submukosa kronis."
        },
        {
          "term": "Wheezing Sibilantes",
          "meaning": "Suara mengi bernada tinggi saat ekspirasi akibat aliran udara melewati lumen saluran napas sempit."
        },
        {
          "term": "Status Asthmaticus",
          "meaning": "Serangan spasme bronkial berat berkepanjangan yang refrakter terhadap terapi inhaler standar."
        }
      ]
    }
  },
  "bronkitis": {
    "pathophysiology": {
      "cellularMechanism": "Iritasi berkelanjutan atau infeksi virus (Influenza, RSV) pada epitel pseudostratified ciliated dinding bronkus memicu infiltrasi sel plasma dan neutrofil. Terjadi edema mukosa, hiperemia vaskular, dan hipersekresi kelenjar mukus yang menyebabkan sputum tebal obstruktif.",
      "geriatricFactor": "Penurunan klirens mukosiliar pada lansia memicu retensi dahak statis yang menjadi media ideal bagi superinfeksi bakteri sekunder (H. influenzae, Moraxella catarrhalis).",
      "organImpact": "Penyempitan lumen bronkial temporer atau permanen bila berkembang menjadi bronkitis kronis."
    },
    "geriatricSymptoms": {
      "classical": "Batuk produktif menetap >5 hari hingga 3 minggu, dahak berwarna, nyeri substernal terbakar saat batuk.",
      "atypicalGeriatric": "Batuk paroksismal yang memicu inkontinensia urin luapan (mengompol saat batuk), sinkop akibat batuk (*cough syncope*), atau fraktur iga osteoporotik akibat tekanan batuk keras.",
      "whyDifferent": "Kerapuhan tulang (osteopenia/osteoporosis) dan kelemahan sfingter uretra pada wanita lansia."
    },
    "staging": {
      "scoreName": "Kriteria Klinis Bronkitis Akut vs Bronkitis Kronis Eksaserbasi",
      "stages": [
        {
          "level": "Bronkitis Akut",
          "criteria": "Batuk berlangsung 1 hingga 3 minggu tanpa riwayat penyakit paru kronis sebelumnya.",
          "risk": "Self-limiting (umumnya viral 90%), jarang memerlukan antibiotik rutin."
        },
        {
          "level": "Bronkitis Kronis",
          "criteria": "Batuk berdahak minimal 3 bulan berturut-turut dalam 2 tahun berturut-turut.",
          "risk": "Merupakan komponen utama PPOK dengan risiko kerusakan struktural jalan napas."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "CRP & Procalcitonin",
          "param": "Diferensiasi infeksi viral (<0.25 ng/mL) vs bakterial (>0.5 ng/mL)."
        },
        {
          "test": "Pewarnaan Gram & Kultur Sputum",
          "param": "Bila batuk menetap >2 minggu atau pada lansia dengan komorbiditas."
        }
      ],
      "imaging": "Rontgen Toraks untuk menyingkirkan komplikasi pneumonia fokal (tidak boleh ada infiltrat pada bronkitis murni).",
      "goldStandard": "Diagnosis klinis eksklusi setelah pneumonia, asma, dan sinus post-nasal drip disingkirkan."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Mukolitik pengencer dahak (N-Asetilsistein 600mg/hari atau Erdosteine), bronkodilator inhalasi jangka pendek (Salbutamol) jika terdapat bronkospasme.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Hindari antihistamin generasi pertama (seperti CTM/Diphenhydramine) karena efek antikolinergiknya mengentalkan sekret bronkus dan memicu delirium serta retensi urin.",
      "monitoring": "Tanda-tanda superinfeksi pneumonia (ronki basah halus baru atau demam muncul kembali)."
    },
    "clinicalNutrition": {
      "macroMicro": "Hidrasi cairan hangat 2 - 2.5 liter per hari untuk melarutkan ikatan mukopolisakarida dahak.",
      "recommendedFoods": "Sup ayam jahe hangat, air madu lemon alami, teh hijau antioksidan.",
      "contraindicatedFoods": "Gorengan minyak jelantah, makanan pedas berminyak yang memicu batuk refleks vagal."
    },
    "emergency": {
      "immediateTriggers": "Batuk disertai darah segar (hemoptisis), sesak napas berat saat berbaring lurus, penurunan kesadaran.",
      "firstAidHome": "Bantu posisi duduk tegak, berikan minum air hangat sedikit demi sedikit, siapkan wadah sputum steril untuk pemeriksaan dokter."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan batuk efektif 3 tahap (tarik napas dalam, tahan 2 detik, batukkan 2 kali berturut-turut dari diafragma).",
      "homeModifications": "Humidifier ruangan untuk menjaga kelembapan udara kamar 50-60%."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saluran Bronkus <-> Kardiovaskular & Otot Toraks",
      "biologicalMechanism": "Peradangan kronis saluran bronkial memicu spasme arteriol paru dan hipertrofi tunika media vaskular paru, meningkatkan resistensi vaskular paru (hipertensi pulmonal). Beban kerja ventrikel kanan melonjak hingga terjadi gagal jantung kanan (Kor Pulmonale). Kelelahan otot bantu napas leher dan dada memperparah hipoksia sistemik.",
      "clinicalImpact": "Disfungsi silang memicu bengkak kedua tungkai (edema perifer), pembengkakan vena leher, dan asites sekunder gagal jantung kanan pada pasien bronkitis kronis.",
      "prevention": "Fisioterapi pembersihan jalan napas (autogenic drainage), vaksinasi influenza dan pneumokokus tahunan, serta pemantauan ekokardiografi berkala."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Bronchitis Chronica Exacerbata / Tracheobronchitis Acuta",
      "icd10": "J42 / J20.9",
      "latinTerms": [
        {
          "term": "Hyperplasia Glandularis",
          "meaning": "Pertumbuhan berlebih kelenjar mukus bronkus yang memproduksi lendir mukopurulen berlebihan."
        },
        {
          "term": "Ciliostasis Mukosiliar",
          "meaning": "Kelumpuhan gerakan silia epitel pernapasan sehingga mekanisme pembersihan dahak gagal."
        },
        {
          "term": "Exacerbatio Acuta",
          "meaning": "Pemburukan mendadak gejala batuk, volume dahak, dan sesak napas di atas variasi harian normal."
        },
        {
          "term": "Hypoventilatio Alveolaris",
          "meaning": "Penurunan ventilasi alveoli paru yang memicu hipoksia sianosis sentral (Blue Bloater)."
        },
        {
          "term": "Hypertensio Pulmonalis",
          "meaning": "Peningkatan resistensi dan tekanan vaskular arteri pulmonalis akibat vasokonstriksi hipoksik."
        }
      ]
    }
  },
  "ispa": {
    "pathophysiology": {
      "cellularMechanism": "Replikasi virus influenza, rhinovirus, atau adenovirus pada sel epitel silia nasofaring. Induksi interferon dan pelepasan bradikinin/sitokin menyebabkan vasodilatasi pleksus vena mukosa hidung, edema konka, dan eksudasi cairan serosa.",
      "geriatricFactor": "Atrofi mukosa hidung (*rhinitis atrophica*) dan penurunan lisozim sekretori membuat gerbang napas atas lansia lebih rapuh terhadap infeksi.",
      "organImpact": "Disfungsi tuba eustachius dan oklusi ostium sinus paranasal."
    },
    "geriatricSymptoms": {
      "classical": "Hidung tersumbat, bersin, hidung beringus, tenggorokan perih, demam ringan.",
      "atypicalGeriatric": "Malaise berat, kebingungan mental akut, penurunan asupan cairan yang memicu dehidrasi hipernatremik mendadak.",
      "whyDifferent": "Pusat haus hipotalamus lansia kurang sensitif, mempercepat komplikasi dehidrasi."
    },
    "staging": {
      "scoreName": "Klasifikasi Saluran Napas Atas (Nasofaringitis vs Rinosinusitis)",
      "stages": [
        {
          "level": "ISPA Viral Biasa",
          "criteria": "Gejala berlangsung <10 hari dengan intensitas puncak di hari ke-3 sampai ke-5.",
          "risk": "Resolusi spontan dengan terapi simtomatik suportif."
        },
        {
          "level": "Rinosinusitis Bakterial Akut",
          "criteria": "Gejala >10 hari tanpa perbaikan, ATAU perburukan ganda ('double sickening').",
          "risk": "Memerlukan antibiotik lini pertama (Amoxicillin-Clavulanate)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Swab Antigen/PCR Respiratorik",
          "param": "Eksklusi Influenza A/B, SARS-CoV-2, atau RSV."
        }
      ],
      "imaging": "Tidak diindikasikan rutin; CT Scan sinus hanya jika dicurigai komplikasi orbital atau intrakranial.",
      "goldStandard": "Evaluasi rinoskopi anterior dan klinis komprehensif."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Parasetamol untuk analgesik/antipiretik, semprot hidung saline (NaCl 0.9%) isotonik/hipertonik.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Dekongestan oral (Pseudoephedrine/Phenylephrine) SANGAT BERBAHAYA untuk lansia karena dapat melonjakkan tekanan darah (hipertensi urgensi) dan memicu retensi urin akut pada pria dengan prostat membesar!",
      "monitoring": "Tekanan darah dan frekuensi denyut nadi harian."
    },
    "clinicalNutrition": {
      "macroMicro": "Asupan vitamin C alami 500mg, seng (Zinc) 20mg/hari, dan cairan elektrolit seimbang.",
      "recommendedFoods": "Jeruk manis segar, sup wortel bening, kaldu hangat.",
      "contraindicatedFoods": "Minuman dingin berpemanis buatan yang memicu iritasi faring."
    },
    "emergency": {
      "immediateTriggers": "Stridor (napas berbunyi mengorok saat menarik napas), pembengkakan mata/kelopak mata merah (selulitis periorbital), leher kaku.",
      "firstAidHome": "Kompres hangat dahi, inhalasi uap air panas mandiri, segera ke klinik terdekat."
    },
    "rehabilitation": {
      "physicalExercises": "Irigasi nasal (cuci hidung) dengan spuit 20cc dan cairan infus steril NaCl 0.9% secara lembut.",
      "homeModifications": "Kamar tidur hangat berventilasi bebas dari kipas angin yang meniup langsung ke arah wajah."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saluran Napas Atas <-> Saraf Kranial & Telinga Tengah",
      "biologicalMechanism": "Edema mukosa hidung dan nasofaring menyumbat muara tuba Eustachius, memicu tekanan negatif dan penumpukan efusi di kavum timpani telinga tengah (otitis media akut). Infeksi virus juga mengiritasi cabang saraf sensorik nervus trigeminus dan olfaktorius, memicu anosmia sementara dan nyeri kepala alih (referred headache).",
      "clinicalImpact": "Pada lansia, gangguan pendengaran mendadak akibat ISPA memperparah disorientasi spasial, isolasi sosial, dan risiko jatuh.",
      "prevention": "Dekongestan hidung topikal jangka pendek terkontrol, irigasi hidung larutan salin isotonik steril, dan hidrasi hangat adekuat."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Infectio Systematis Respiratorii Superioris Acuta / Rhinosinusitis",
      "icd10": "J06.9 / J01.9",
      "latinTerms": [
        {
          "term": "Rhinorrhea & Congestio",
          "meaning": "Produksi sekret hidung berlebih dan pembengkakan mukosa konka yang menyumbat jalan napas."
        },
        {
          "term": "Pharyngitis Erythematosa",
          "meaning": "Hiperemia dan peradangan eksudatif pada dinding mukosa faring posterior."
        },
        {
          "term": "Salpingitis Eustachii",
          "meaning": "Sumbatan edema pada muara tuba Eustachius penghubung nasofaring ke telinga tengah."
        },
        {
          "term": "Anosmia / Hyposmia",
          "meaning": "Penurunan atau hilangnya daya hantar saraf olfaktorius dalam mengenali aroma bau."
        },
        {
          "term": "Lymphadenopathia Cervicalis",
          "meaning": "Pembesaran reaktif kelenjar getah bening leher akibat respons proliferasi sel limfosit imun."
        }
      ]
    }
  },
  "gerd": {
    "pathophysiology": {
      "cellularMechanism": "Ketidakmampuan Lower Esophageal Sphincter (LES) mempertahankan tekanan istirahat basal (>10-30 mmHg) berpadu dengan relaksasi LES transien (TLESR) yang berlebihan. Asam lambung (HCl pekat pH 1.5-2) bersama enzim pepsin dan garam empedu merefluks ke esofagus, merusak barier taut kedap (*tight junctions*) sel epitel gepeng berlapis, memicu inflamasi mukosa, erosi, dan stimulasi nosiseptor saraf vagal.",
      "geriatricFactor": "Penurunan motilitas pembersihan esofagus (*esophageal clearance*), berkurangnya kapasitas bikarbonat air liur geriatri, serta tingginya insiden hernia hiatus diafragma pada usia lanjut.",
      "organImpact": "Esofagitis erosif kronis, pembentukan striktur peptik sikatrikial (penyempitan esofagus), dan metaplasia intestinal (*Barrett's Esophagus* - lesi pra-kanker adenokarsinoma)."
    },
    "geriatricSymptoms": {
      "classical": "Heartburn (rasa panas terbakar di balik tulang dada), regurgitasi cairan asam/pahit ke mulut, bersendawa asam.",
      "atypicalGeriatric": "Heartburn sering TIDAK DIKELUHKAN akibat penurunan sensasi nyeri esofagus. Gejala utama berupa disfagia (tersedak makanan padat), batuk kronis malam hari, suara serak persisten (Laryngopharyngeal Reflux - LPR), nyeri dada non-kardiak, atau anemia defisiensi besi tersembunyi.",
      "whyDifferent": "Kerusakan barier mukosa pada lansia seringkali lebih parah (Grade C/D) meskipun rasa nyeri yang dirasakan minimal."
    },
    "staging": {
      "scoreName": "Klasifikasi Esofagitis Los Angeles (Grade A - D)",
      "stages": [
        {
          "level": "Grade A",
          "criteria": "Satu atau lebih kerusakan mukosa berukuran ≤ 5 mm, tidak memanjang antar puncak lipatan.",
          "risk": "Kerusakan ringan, respons sangat baik dengan terapi PPI standar 4-8 minggu."
        },
        {
          "level": "Grade B",
          "criteria": "Satu atau lebih kerusakan mukosa > 5 mm, tidak bersambung antar dua lipatan mukosa.",
          "risk": "Risiko kambuh moderat pasca penghentian obat."
        },
        {
          "level": "Grade C",
          "criteria": "Kerusakan mukosa bersambung antar puncak lipatan, namun mencakup < 75% lingkar esofagus.",
          "risk": "Memerlukan terapi pemeliharaan jangka panjang dan evaluasi endoskopi berkala."
        },
        {
          "level": "Grade D",
          "criteria": "Kerusakan mukosa mencakup minimal 75% dari seluruh lingkar lumen esofagus.",
          "risk": "Komplikasi tinggi berupa striktur ulseratif, perdarahan masif, dan Barrett's Esophagus."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Darah Lengkap & Ferritin",
          "param": "Eksklusi anemia mikrositik hipokromik akibat perdarahan mikro esofagus."
        },
        {
          "test": "Biomarker Jantung (Troponin & EKG)",
          "param": "WAJIB dievaluasi pertama kali untuk menyingkirkan sindrom koroner akut (serangan jantung)."
        }
      ],
      "imaging": "Esofagogastroduodenoskopi (EGD / Teropong Lambung) dengan biopsi jaringan; Manometri esofagus resolusi tinggi; Pemantauan pH-impedansi 24 jam.",
      "goldStandard": "Pemeriksaan EGD (Endoskopi) untuk bukti esofagitis erosif dan pemantauan pH-metri intraluminal."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Penghambat Pompa Proton (PPI: Omeprazole 20mg, Lansoprazole 30mg, atau Esomeprazole 40mg sekali sehari 30-60 menit sebelum makan pagi). Alternatif: Kalium-Competitive Acid Blocker (P-CAB: Vonoprazan).",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Penggunaan PPI jangka panjang (>8-12 minggu tanpa indikasi kuat) pada lansia meningkatkan risiko fraktur tulang pinggul (penurunan absorpsi kalsium), infeksi usus Clostridioides difficile, defisiensi Vitamin B12, dan hipomagnesemia. Tappering-off berkala dianjurkan.",
      "monitoring": "Kadar Magnesium, Kalsium, dan densitas tulang (DEXA scan) bila terapi PPI melebihi 1 tahun."
    },
    "clinicalNutrition": {
      "macroMicro": "Rendah lemak jenuh, batasi makanan asam (pH <4.5), dan hindari stimulan relaksasi sfingter LES.",
      "recommendedFoods": "Oatmeal gandum utuh, pisang kepok matang, daging dada ayam kukus tanpa kulit, melon, sayur labu siam rebus.",
      "contraindicatedFoods": "Cokelat pekat, kopi hitam berkafein, saus tomat, sambal cabai pedas, daun mint, santan kental berulang, dan minuman bersoda."
    },
    "emergency": {
      "immediateTriggers": "Nyeri dada hebat menjalar ke rahang/lengan kiri (anggap serangan jantung hingga terbukti bukan!), muntah darah merah segar, makanan tersangkut total di dada (*food bolus impaction*).",
      "firstAidHome": "Bila nyeri dada, segera istirahat tegak dan hubungi ambulans; jangan paksakan minum air banyak jika tersedak makanan padat."
    },
    "rehabilitation": {
      "physicalExercises": "Peninggian kepala tempat tidur 15-20 cm (bukan sekadar menumpuk bantal, melainkan meninggikan kaki ranjang bagian kepala / baji bantal wedge).",
      "homeModifications": "Makan malam terakhir minimal 3 jam penuh sebelum berbaring tidur; kenakan pakaian longgar di area perut."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saluran Cerna <-> Saluran Napas & Sistem Saraf Vagus",
      "biologicalMechanism": "Asam lambung dan pepsin yang refluks melewati sfingter esofagus atas mengiritasi mukosa pita suara dan trakeobronkial (Laryngopharyngeal Reflux). Mikroaspirasi droplet asam merangsang cabang aferen nervus vagus di esofagus, memicu refleks bronkokonstriksi spasme paru tanpa riwayat asma sebelumnya, serta merusak enamel gigi dan memicu laringitis kronis.",
      "clinicalImpact": "Pasien lansia sering salah didiagnosis menderita bronkitis atau batuk kronis bertahun-tahun yang sebetulnya bersumber dari refluks lambung tanpa sensasi terbakar (silent GERD).",
      "prevention": "Posisi tidur elevasi baji 30 derajat, kurangi volume porsi makan per sesi, hindari makanan relaksan sfingter (kafein, cokelat, mint), dan terapi supresi asam PPI."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Reflux Gastroesophagealis cum Oesophagite / Laryngopharyngeal Reflux (LPR)",
      "icd10": "K21.0 / K21.9",
      "latinTerms": [
        {
          "term": "Incompetentia Sphincter Cardiae (LES)",
          "meaning": "Kelemahan tonus sfingter esofagus bawah yang gagal mencegah arus balik asam lambung."
        },
        {
          "term": "Pyrosis Retrosternalis (Heartburn)",
          "meaning": "Sensasi terbakar retrosternal menusuk dari ulu hati menjalar ke arah dada dan leher."
        },
        {
          "term": "Regurgitatio Acida",
          "meaning": "Kembalinya cairan asam lambung atau bolus makanan ke faring tanpa diawali mual atau muntah."
        },
        {
          "term": "Esophagitis Erosiva",
          "meaning": "Erosi dan defek mukosa epitel skuamosa esofagus akibat korosi asam HCl dan pepsin."
        },
        {
          "term": "Metaplasia Barrett",
          "meaning": "Transformasi sel epitel skuamosa menjadi epitel kolumnar intestinalis (lesi prakanker)."
        }
      ]
    }
  },
  "maag-gastritis": {
    "pathophysiology": {
      "cellularMechanism": "Ketidakseimbangan faktor agresif (HCl, pepsin, infeksi kuman Helicobacter pylori, asam empedu) melawan faktor defensif mukosa (lapisan mukus kaya musin, sekresi bikarbonat, aliran darah mikrosirkulasi mukosa, dan prostaglandin E2). Infeksi H. pylori memproduksi enzim urease yang menghasilkan amonia sitotoksik dan menginduksi gastritis atrofi, sementara NSAID menghambat sintesis enzim COX-1 yang mematikan produksi prostaglandin pelindung lambung.",
      "geriatricFactor": "Penipisan alami mukosa lambung (*atrophic gastritis*) dan penurunan aliran darah lambung pada usia senja membuat mukosa lansia sangat rapuh terhadap iritasi kimiawi obat rematik.",
      "organImpact": "Ulkus peptikum yang menembus lapisan muskularis mukosa, berisiko komplikasi perforasi dinding lambung atau erosi arteri gastroduodenalis (perdarahan masif)."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri ulu hati seperti ditusuk/terbakar, mual, muntah, kembung begah setelah makan.",
      "atypicalGeriatric": "Silent ulcer: 50% lansia dengan tukak lambung TIDAK merasakan nyeri perut sama sekali! Gejala awal seringkali langsung berupa perdarahan hebat (BAB hitam seperti aspal / melena), syok hipovolemik, atau penurunan Hb drastis tanpa keluhan nyeri.",
      "whyDifferent": "Neuropati otonom usia lanjut dan pemakaian analgesik bersamaan yang menutupi sensasi nyeri lambung."
    },
    "staging": {
      "scoreName": "Klasifikasi Forrest untuk Perdarahan Tukak Lambung (Endoskopik)",
      "stages": [
        {
          "level": "Forrest Ia & Ib",
          "criteria": "Perdarahan aktif memancar (spurting) atau merembes (oozing).",
          "risk": "Risiko perdarahan ulang sangat tinggi (55-90%) - Memerlukan hemostasis endoskopi segera."
        },
        {
          "level": "Forrest IIa & IIb",
          "criteria": "Pembuluh darah tampak menonjol tanpa perdarahan (visible vessel) atau bekuan darah melekat (adherent clot).",
          "risk": "Risiko perdarahan ulang tinggi (25-50%) - Terapi PPI dosis ganda intravena."
        },
        {
          "level": "Forrest III",
          "criteria": "Tukak dengan dasar bersih tertutup fibrin putih tanpa tanda perdarahan.",
          "risk": "Risiko rendah (<5%) - Pasien dapat beralih ke terapi oral dan rawat jalan."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Urea Breath Test (UBT) / Antigen Feses",
          "param": "Deteksi akurat infeksi aktif Helicobacter pylori (hentikan PPI 2 minggu sebelumnya)."
        },
        {
          "test": "Darah Lengkap & Profil Koagulasi",
          "param": "Penurunan Hemoglobin/Hematokrit, evaluasi trombosit dan INR."
        },
        {
          "test": "Fecal Occult Blood Test (FOBT/FIT)",
          "param": "Deteksi darah samar dalam kotoran buang air besar."
        }
      ],
      "imaging": "Esofagogastroduodenoskopi (EGD) merupakan baku emas untuk visualisasi lokasi tukak, biopsi histopatologi eksklusi keganasan, dan intervensi hemostasis.",
      "goldStandard": "Pemeriksaan EGD (Endoskopi) dengan biopsi cepat urease (CLO test)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "PPI terapeutik (Pantoprazole / Esomeprazole 40mg 2x/hari) + Sukralfat suspensi. Jika positif H. pylori: Terapi eradikasi 14 hari (PPI dosis ganda + Clarithromycin + Amoxicillin / Metronidazole).",
      "beersCriteria": "PERINGATAN KRITERIA BEERS KRITIS: Golongan NSAID non-selektif (Ketorolac, Piroxicam, Indomethacin, Asam Mefenamat) merupakan penyebab kematian saluran cerna terbanyak pada lansia! Jika lansia mutlak membutuhkan antinyeri sendi, gunakan Parasetamol lini pertama, atau Celecoxib (COX-2 selektif) DITAMBAH ko-peresepan PPI pelindung lambung.",
      "monitoring": "Pemeriksaan Hemoglobin berkala dan evaluasi warna feses setiap hari."
    },
    "clinicalNutrition": {
      "macroMicro": "Tekstur lunak, mudah cerna, frekuensi sering porsi kecil, kaya seng (zinc carnosine) untuk regenerasi epitel mukosa.",
      "recommendedFoods": "Bubur ayam tanpa santan, tahu sutra rebus, kentang tumbuk (mashed potato), jus lidah buaya murni, brokoli kaya sulforaphane.",
      "contraindicatedFoods": "Kopi, minuman alkohol, rempah pedas, cuka masam, gorengan berlemak jenuh tinggi."
    },
    "emergency": {
      "immediateTriggers": "Muntah cairan hitam seperti ampas bubuk kopi (*hematemesis*), buang air besar hitam lengket berbau amis busuk (*melena*), perut kaku keras seperti papan (*perforasi peritonitis*).",
      "firstAidHome": "Puasakan pasien dari makanan dan minuman, baringkan dengan posisi kaki lebih tinggi jika tensi drop, bawa ke IGD rumah sakit segera."
    },
    "rehabilitation": {
      "physicalExercises": "Jalan santai pascamakan, hindari langsung duduk membungkuk atau menekan area perut.",
      "homeModifications": "Buang seluruh persediaan obat antinyeri bebas di kotak obat lansia untuk mencegah konsumsi mandiri tanpa resep."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Lambung <-> Sistem Saraf (Gut-Brain Axis) & Darah/Hematologi",
      "biologicalMechanism": "Sumbu Otak-Usus (Gut-Brain Axis): Stres psikologis dan disregulasi saraf otonom meningkatkan pelepasan hormon kortisol dan stimulasi vagal simpatis, merusak barier mukus protektif prostaglandin lambung dan melipatgandakan sekresi asam HCl. Kerusakan sel parietal lambung kronis mematikan produksi Intrinsic Factor, sehingga vitamin B12 tidak dapat diserap di ileum, berujung pada Anemia Pernisiosa dan kerusakan mielin saraf perifer (Subacute Combined Degeneration).",
      "clinicalImpact": "Gastritis atrofik lansia sering berujung pada komplikasi neuropati kesemutan kebas tangan-kaki dan penurunan daya ingat akibat defisiensi vitamin B12 yang luput diperiksa.",
      "prevention": "Skrining kadar vitamin B12 serum dan ferritin pada lansia dengan maag menahun; suplementasi B12 intramuskular bila atrofi lambung terkonfirmasi; manajemen stres relaksasi napas dalam."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Gastritis Chronica Atrophica / Ulcus Pepticum Gaster",
      "icd10": "K29.4 / K25.9",
      "latinTerms": [
        {
          "term": "Atrophia Mucosae Gastricae",
          "meaning": "Penyusutan sel epitel dan kelenjar lambung disertai penipisan barier prostaglandin protektif."
        },
        {
          "term": "Deficientia Factoris Intrinsici",
          "meaning": "Hilangnya sekresi faktor intrinsik sel parietal lambung yang memicu gagal serap vitamin B12."
        },
        {
          "term": "Epigastralgia Postprandialis",
          "meaning": "Rasa nyeri perih tumpul menusuk di regio ulu hati yang tercetus atau mereda setelah makan."
        },
        {
          "term": "Hematemesis & Melena",
          "meaning": "Muntah darah kehitaman dan feses hitam pekat seperti ter akibat perdarahan saluran cerna atas."
        },
        {
          "term": "Helicobacter pylori Colonisatio",
          "meaning": "Infeksi bakteri spiral mikroaerofilik yang mensekresi enzim urease perusak mukosa lambung."
        }
      ]
    }
  },
  "batu-empedu": {
    "pathophysiology": {
      "cellularMechanism": "Ketidakseimbangan komposisi cairan empedu berupa supersaturasi kolesterol relatif terhadap garam empedu dan fosfolipid (lesitin). Terjadi nukleasi kristal kolesterol monohidrat yang beragregasi membentuk kalkulus (batu kolesterol) atau batu pigmen kalsium bilirubinat. Hipomotilitas kantung empedu memperlambat pengosongan, memperbesar batu. Saat batu menyumbat duktus sistikus, terjadi stasis empedu, proliferasi bakteri usus, dan pelepasan fosfolipase A2 yang memicu kolesistitis akut.",
      "geriatricFactor": "Sintesis asam empedu hepatik menurun pada penuaan sementara sekresi kolesterol empedu meningkat, menciptakan empedu litogenik alami pada lansia.",
      "organImpact": "Hidrops vesika fellea, empiema empedu (kantung empedu bernanah), gangren perforasi kantung empedu, atau batu bermigrasi menyumbat duktus koledokus (koledokolitiasis & kolangitis asenden)."
    },
    "geriatricSymptoms": {
      "classical": "Kolik bilier: nyeri hebat mendadak di perut kanan atas menjalar ke belikat/bahu kanan pascamakan berlemak, mual, muntah.",
      "atypicalGeriatric": "Nyeri bilier sering tumpul atau minimal; lansia sering datang hanya dengan keluhan delirium, syok septik tanpa fokus infeksi jelas, atau ikterus (mata kuning) tanpa rasa sakit (*painless jaundice*).",
      "whyDifferent": "Penurunan persarafan aferen simpatis splanknikus pada lansia meredam intensitas nyeri kolik."
    },
    "staging": {
      "scoreName": "Kriteria Tokyo Guidelines (TG18) untuk Kolesistitis Akut",
      "stages": [
        {
          "level": "Grade I (Ringan)",
          "criteria": "Kolesistitis akut pada pasien sehat tanpa disfungsi organ, perubahan inflamasi ringan.",
          "risk": "Kolesistektomi laparoskopi dini aman dilakukan."
        },
        {
          "level": "Grade II (Sedang)",
          "criteria": "Disertai leukositosis >18.000/µL, massa teraba di kuadran kanan atas, durasi keluhan >72 jam.",
          "risk": "Tindakan operasi darurat atau drainase perkutan jika risiko anestesi tinggi."
        },
        {
          "level": "Grade III (Berat)",
          "criteria": "Disertai disfungsi minimal satu organ sistemik (kardiovaskular, saraf, pernapasan, ginjal, hepar, koagulasi).",
          "risk": "Kondisi gawat darurat sepsis - Perlu drainase kandung empedu darurat (PTGBD)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Fungsi Hati & Bilirubin",
          "param": "Peningkatan Bilirubin Total/Direk, Gamma-GT, dan Fosfatase Alkali (ALP) menandakan sumbatan bilier ekstrahepatik."
        },
        {
          "test": "Amilase & Lipase Serum",
          "param": "Wajib dievaluasi untuk menyingkirkan komplikasi pankreatitis bilier akut."
        },
        {
          "test": "Darah Lengkap & CRP",
          "param": "Leukositosis dengan shift to the left dan peningkatan tajam CRP."
        }
      ],
      "imaging": "USG Abdomen Kuadran Kanan Atas (Akurasi >95% mendeteksi batu, penebalan dinding empedu >4 mm, double contour, dan Murphy's sign sonografik positif); MRCP (Magnetic Resonance Cholangiopancreatography) untuk visualisasi saluran empedu.",
      "goldStandard": "USG Abdomen kuadran kanan atas."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Antibiotik spektrum luas gram negatif & anaerob (Ceftriaxone + Metronidazole atau Piperacillin-Tazobactam), antispasmodik analgesik (Parasetamol IV, NSAID IV hati-hati, atau Tramadol).",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Hindari analgesik Meperidine (Pethidine) karena metabolit normeperidine menumpuk pada lansia dan memicu kejang serta toksisitas SSP. Hindari obat antispasmodik antikolinergik dosis tinggi.",
      "monitoring": "Tanda-tanda kolangitis (Trias Charcot: demam menggigil, nyeri kanan atas, dan ikterus)."
    },
    "clinicalNutrition": {
      "macroMicro": "Sangat rendah lemak (<20-30 gram lemak per hari) untuk mencegah stimulasi pelepasan hormon kolesistokinin (CCK) yang memicu kontraksi empedu.",
      "recommendedFoods": "Nasi tim, kentang kukus, dada ayam rebus tanpa kulit, sup bayam jagung bening, apel, pepaya.",
      "contraindicatedFoods": "Gorengan minyak dalam (deep fried), santan kental, kuning telur, mentega, keju, jeroan, daging kambing/sapi berlemak."
    },
    "emergency": {
      "immediateTriggers": "Trias Charcot atau Pentada Reynolds (Trias Charcot + Hipotensi + Penurunan Kesadaran - Kolangitis Supuratif Akut: Kematian tinggi jika tidak didekompresi dalam hitungan jam!).",
      "firstAidHome": "Segera bawa ke IGD rumah sakit besar dengan fasilitas dokter spesialis bedah digestif dan endoskopi ERCP."
    },
    "rehabilitation": {
      "physicalExercises": "Mobilisasi bertahap pasca-tindakan bedah, latihan pernapasan dalam untuk mencegah atelektasis pasca-operasi perut atas.",
      "homeModifications": "Penjadwalan menu diet rendah lemak harian yang diawasi keluarga."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Kantung Empedu <-> Hati & Pankreas (Saluran Bersama Vater)",
      "biologicalMechanism": "Batu empedu yang lolos dari kantung empedu turun ke duktus koledokus dan menyumbat Ampula Vater (saluran muara bersama empedu dan enzim pankreas). Sumbatan ini membalikkan aliran enzim tripsinogen aktif kembali ke parenkim pankreas, memicu autodigesti masif jaringan pankreas (Pankreatitis Bilier Akut). Aliran empedu ke hati terblokir, memicu kolangitis bakterial dan nekrosis hepatosit.",
      "clinicalImpact": "Pankreatitis bilier akut adalah kedaruratan bedah dengan angka kematian geriatri mencapai 20-30% akibat sindrom respons inflamasi sistemik (SIRS) dan gagal ginjal akut.",
      "prevention": "USG abdomen teratur bagi pemilik riwayat batu empedu simptomatik; konsultasi kolesistektomi laparoskopi terencana sebelum terjadi komplikasi migrasi batu ke ampula."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Cholelithiasis / Cholecystitis Calculosa Acuta",
      "icd10": "K80.2 / K81.0",
      "latinTerms": [
        {
          "term": "Supersaturatio Cholestheroli",
          "meaning": "Kondisi konsentrasi kolesterol melebihi kapasitas solubilisasi garam empedu hingga membentuk kristal batu."
        },
        {
          "term": "Colica Biliaris",
          "meaning": "Serangan nyeri spasmodik hebat di perut kanan atas menjalar ke skapula kanan akibat spasme duktus sistikus."
        },
        {
          "term": "Choledocholithiasis",
          "meaning": "Migrasi batu empedu yang turun dan menyumbat saluran utama duktus koledokus."
        },
        {
          "term": "Icterus Obstructivus",
          "meaning": "Kondisi kulit dan sklera mata menguning akibat penumpukan bilirubin direk terkonjugasi di darah."
        },
        {
          "term": "Signum Murphy Positivus",
          "meaning": "Penghentian inspirasi napas mendadak saat palpasi dalam di kuadran kanan atas abdomen akibat nyeri kantung empedu."
        }
      ]
    }
  },
  "drainase-selang-hati": {
    "pathophysiology": {
      "cellularMechanism": "Pemasangan selang kateter drainase perkutan pada area hepar/bilier diindikasikan pada 4 kondisi patofisiologis utama: 1. Sumbatan Bilier Akut (PTBD - Percutaneous Transhepatic Biliary Drainage): Tekanan intraluminal duktus biliaris melonjak >30 cmH2O akibat impaksi batu koledokus, striktur, atau tumor karsinoma hepar/pankreas. Kolestasis memicu stasis empedu, nekrosis hepatosit, dan translokasi kuman enterik menembus taut hepatoseluler ke pembuluh darah sinusoid (kolangitis supuratif). Dekompresi kateter eksternal menurunkan tekanan intrabilier seketika. 2. Abses Hati (Liver Abscess): Infiltrasi neutrofil masif dan nekrosis likuefaktif jaringan parenkim hepar membentuk rongga nanah avaskular yang resisten terhadap antibiotik sistemik tanpa evakuasi drainase. 3. Asites Refrakter Sirosis (Parasentesis / PleurX): Hipertensi portal sinusoidal (gradient >10 mmHg) dan vasodilatasi splanknikus memicu akumulasi cairan transudat masif di kavum peritoneum yang menekan diafragma. 4. Pasca-Operasi Bedah Hepatobilier: Selang T-Tube / drain bedah dipasang untuk dekompresi duktus koledokus dan mencegah biloma serta peritonitis kimiawi pascaoperasi.",
      "geriatricFactor": "Penurunan massa hati fungsional geriatri (atrofi hepar 20-30%), koagulopati tersembunyi (penurunan sintesis faktor pembekuan darah vitamin K-dependent), serta kerapuhan kapsul Glisson meningkatkan risiko perdarahan subkapsular dan infeksi kateter.",
      "organImpact": "Mencegah gagal hati fulminan obstruktif, sepsis bakterial gram negatif, ruptur abses hepar ke rongga peritoneum, dan sindrom kompartemen abdomen pada asites tegang."
    },
    "geriatricSymptoms": {
      "classical": "Ikterus (kulit dan mata kuning pekat), pruritus hebat akibat penumpukan garam empedu, nyeri perut kanan atas, demam menggigil spiking fever, perut membesar tegang (asites).",
      "atypicalGeriatric": "Ensefalopati hepatikum dini (linglung, disorientasi, bicara meracau, asterixis / tremor kepak tangan samar), sepsis tanpa demam (hipotermia <36°C), gagal napas restriktif mendadak akibat diafragma terdorong asites masif, penurunan nafsu makan total.",
      "whyDifferent": "Sawar darah otak lansia sangat rentan terhadap akumulasi toksin amonia dan asam empedu hidrofobik."
    },
    "staging": {
      "scoreName": "Sistem Skor Child-Turcotte-Pugh & Kriteria Intervensi Drainase Bilier/Abses",
      "stages": [
        {
          "level": "Child-Pugh Kelas A (Skor 5 - 6)",
          "criteria": "Fungsi kompensasi hepar baik, tanpa asites/ensefalopati, bilirubin <2 mg/dL, albumin >3.5 g/dL.",
          "risk": "Toleransi prosedur intervensi drainase sangat baik, mortalitas perioperatif minimal (<10%)."
        },
        {
          "level": "Child-Pugh Kelas B (Skor 7 - 9)",
          "criteria": "Disfungsi hepatik moderat, asites ringan-sedang terkontrol diuretik, bilirubin 2-3 mg/dL.",
          "risk": "Risiko dekompensasi sedang - Memerlukan dukungan albumin peri-prosedur."
        },
        {
          "level": "Child-Pugh Kelas C (Skor 10 - 15)",
          "criteria": "Dekompenasi hepar berat, asites refrakter masif, ensefalopati kronis, bilirubin >3 mg/dL, INR memanjang.",
          "risk": "Kondisi kritis - Pemasangan selang drainase merupakan tindakan penyelamat nyawa (salvage therapy) darurat."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Bilirubin Fraksionasi & Enzim Kolestasis",
          "param": "Bilirubin Direk melonjak tinggi (>50% dari total), peningkatan tajam ALP (Alkaline Phosphatase) dan Gamma-GT."
        },
        {
          "test": "Faal Koagulasi (PT / INR & Trombosit)",
          "param": "WAJIB dievaluasi sebelum penusukan selang; koreksi dengan Fresh Frozen Plasma (FFP) atau Vitamin K1 jika INR >1.5 atau trombosit <50.000/µL."
        },
        {
          "test": "Kultur Cairan Drainase & Sensitivitas",
          "param": "Pewarnaan Gram, kultur kuman aerob/anaerob cairan empedu atau nanah abses."
        },
        {
          "test": "Analisis Cairan Asites (Bila Parasentesis)",
          "param": "Hitung neutrofil PMN >250/µL menandakan Spontaneous Bacterial Peritonitis (SBP); SAAG ≥1.1 g/dL mengonfirmasi hipertensi portal."
        }
      ],
      "imaging": "USG Abdomen Doppler Real-Time dan Fluoroskopi (pemandu presisi penusukan jarum Chiba dan pemasangan kateter pigtail 8.5-10.2 French); CT Triphasic Abdomen untuk lokalisasi kantung abses dan vaskularisasi hepar.",
      "goldStandard": "Kolangiografi Perkutan (PTC) terkonfirmasi keluarnya cairan empedu/nanah aktif melalui selang drainase."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Antibiotik spektrum luas penetrasi bilier kuat: Piperacillin-Tazobactam 4.5g IV per 8 jam ATAU Ceftriaxone 2g IV + Metronidazole 500mg IV. Infus Albumin 20% (8 gram per 1 liter cairan yang dikeluarkan) pada parasentesis asites volume besar untuk mencegah kolaps sirkulasi.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI obat sedatif penenang Benzodiazepin (Diazepam, Lorazepam) pada pasien dengan selang hati/kolestasis karena dapat MEMICU KOMA ENSEFALOPATI HEPATIKUM FATAL! Hindari analgesik NSAID karena memperburuk retensi natrium asites dan memicu gagal ginjal Hepatorenal Syndrome.",
      "monitoring": "Volume cairan drainase per 24 jam; Nilai INR dan Hemoglobin serial (waspadai perdarahan internal hemobilia)."
    },
    "clinicalNutrition": {
      "macroMicro": "Energi 30-35 kkal/kgBB/hari, protein tinggi 1.2-1.5 g/kgBB/hari (utamakan protein nabati/telur dan asam amino rantai cabang BCAA untuk melawan sarkopenia tanpa memicu ensefalopati). Restriksi ketat natrium (<2000 mg garam/hari pada asites).",
      "recommendedFoods": "Putih telur kukus (sumber albumin murni), ikan gabus rebus, tahu sutra, sari tempe, buah pisang kaya kalium, sup labu siam bening.",
      "contraindicatedFoods": "Garam dapur berlebih, makanan kaleng tinggi pengawet natrium, makanan berlemak santan kental, makanan mentah/setengah matang."
    },
    "emergency": {
      "immediateTriggers": "1. Cairan selang drainase mendadak berubah menjadi DARAH MERAH SEGAR >100 mL/jam. 2. Selang drainase tercabut/terlepas keluar dari perut. 3. Demam menggigil tinggi disertai nyeri perut kaku keras seperti papan (peritonitis bilier). 4. Penurunan kesadaran mendadak / koma.",
      "firstAidHome": "JANGAN PERNAH mendorong kembali selang yang terlepas ke dalam perut! Tutup luka tusukan dengan kassa steril kering dan tekan lembut jika berdarah; klem selang bila ada rembesan cairan ke kulit; segera bawa ke IGD rumah sakit terdekat."
    },
    "rehabilitation": {
      "physicalExercises": "Mobilisasi miring kanan-kiri perlahan di tempat tidur; fiksasi selang dengan plester khusus penahan (drain lock) pada kulit perut untuk mencegah tarikan mekanik; jalan santai ringan di dalam kamar dengan kantung drainase dijinjing aman.",
      "homeModifications": "Gantung kantung drainase selalu DI BAWAH KETINGGIAN PINGGANG (jangan diletakkan di lantai kamar mandi untuk mencegah naiknya kuman); gunakan kancing baju depan longgar; pasang perlak pelindung kasur tahan air."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Hati <-> Saluran Empedu, Ginjal (Sindrom Hepatorenal) & Darah",
      "biologicalMechanism": "Pemasangan selang drainase bilier (PTBD) atau drainase abses/asites memotong tekanan intrakapsular hati yang ekstrem. Kehilangan cairan empedu eksternal dalam jumlah masif dapat menguras natrium dan cairan empedu enterohepatik, mengganggu penyerapan vitamin larut lemak (A, D, E, K). Penurunan vitamin K melumpuhkan sintesis faktor pembekuan darah hati (faktor II, VII, IX, X), memperburuk koagulopati dan memicu perdarahan. Bila perfusi hepar anjlok, stimulasi vasokonstriksi ginjal masif memicu Gagal Ginjal Akut (Sindrom Hepatorenal).",
      "clinicalImpact": "Selang drainase yang macet atau terlipat dapat memicu sepsis bilier fulminan dalam 6 jam; sementara pengeluaran cairan asites berlebih tanpa albumin memicu kolaps sirkulasi pascaparasentesis (PICD).",
      "prevention": "Pemberian infus Albumin 20% saat drainase asites >5 liter; pemantauan profil koagulasi (PT/INR) dan elektrolit serial; pembilasan selang kateter steril berkala dengan NaCl 0.9%."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Drainage Transhepatica Biliaris Percutanea (PTBD) / Abscessus Hepatis",
      "icd10": "Z98.89 / K75.0 / R18.0",
      "latinTerms": [
        {
          "term": "Cholangitis Purulenta Acuta",
          "meaning": "Infeksi bakteri supuratif di saluran empedu intrahepatik yang memicu pus bernanah dan sepsis."
        },
        {
          "term": "Decompressio Biliaris",
          "meaning": "Tindakan pelepasan tekanan intrakapsular saluran empedu hepar menggunakan kateter perkutan steril."
        },
        {
          "term": "Ascites Refractaria",
          "meaning": "Penumpukan transudat bebas masif di kavum peritoneum yang gagal merespons terapi diuretik dosis tinggi."
        },
        {
          "term": "Paracentesis Abdominalis",
          "meaning": "Aspirasi terapeutik pengeluaran cairan asites peritoneal melalui tusukan jarum/kateter dinding perut."
        },
        {
          "term": "Coagulopathia Hepatica",
          "meaning": "Gangguan pembekuan darah akibat kegagalan sintesis faktor pembekuan II, VII, IX, X oleh hepatosit hepar."
        }
      ]
    }
  },
  "diabetes-tipe-2": {
    "pathophysiology": {
      "cellularMechanism": "Penurunan progresif fungsi sekresi insulin sel beta pankreas berpadu dengan resistensi insulin jaringan perifer (otot rangka, adiposa, hepar). Penumpukan amiloid pulau Langerhans (islet amyloid polypeptide) mempercepat apoptosis sel beta. Kegagalan supresi glukoneogenesis hepatik memicu hiperglikemia puasa, glukotoksisitas, lipotoksisitas, dan stres oksidatif mitokondria yang merusak endotel pembuluh darah mikro dan makro.",
      "geriatricFactor": "Sarkopenia geriatri (penurunan massa otot rangka sebagai tempat pembuangan glukosa utama) dan peningkatan adipositas viseral memperparah resistensi insulin.",
      "organImpact": "Mikroangiopati (retinopati diabetik, nefropati, neuropati otonom/perifer) dan Makroangiopati (Penyakit Jantung Koroner, Stroke Iskemik, Peripheral Artery Disease / PAD kaki diabetik)."
    },
    "geriatricSymptoms": {
      "classical": "Trias klasik: Poliuria (banyak kencing), Polidipsia (banyak haus), Polifagia (banyak makan), penurunan berat badan.",
      "atypicalGeriatric": "Trias klasik sering TIDAK MUNCUL karena ambang batas ginjal untuk glukosa meningkat seiring penuaan. Gejala utama: inkontinensia urin baru, infeksi jamur berulang (kandidiasis kulit/selangkangan), pandangan kabur berfluktuasi, kelelahan kronis, luka lecet di telapak kaki yang tidak terasa nyeri (mati rasa neuropati), atau langsung jatuh koma hiperosmolar.",
      "whyDifferent": "Ambang filtrasi ginjal terhadap glukosa naik dari 180 mg/dL menjadi >250 mg/dL pada lansia, sehingga glukosuria dan poliuria baru muncul pada kadar gula yang sangat tinggi."
    },
    "staging": {
      "scoreName": "Target Kontrol Glikemik Geriatri (Konsensus ADA / PERKENI)",
      "stages": [
        {
          "level": "Kategori Lansia Bugar (Healthy)",
          "criteria": "Sedikit penyakit kronis penyerta, status kognitif & fungsional utuh.",
          "risk": "Target HbA1c < 7.0 - 7.5%, Gula Darah Puasa 80-130 mg/dL."
        },
        {
          "level": "Kategori Lansia Kompleks / Sedang",
          "criteria": "Terdapat ≥3 penyakit kronis, gangguan kognitif ringan, atau ketergantungan ADL ringan.",
          "risk": "Target HbA1c < 8.0%, Gula Darah Puasa 90-150 mg/dL (prioritas hindari hipoglikemia)."
        },
        {
          "level": "Kategori Lansia Sangat Rentan (Very Complex/Poor Health)",
          "criteria": "Penyakit kronis stadium akhir, demensia moderat-berat, ketergantungan ADL total.",
          "risk": "Target HbA1c < 8.5% atau fokus pada kenyamanan gejala bebas dehidrasi & hiperglikemia simtomatik."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "HbA1c (Hemoglobin Terglikasi)",
          "param": "≥ 6.5% mengonfirmasi diagnosis diabetes (pantau pengaruh anemia/transfusi pada lansia)."
        },
        {
          "test": "Gula Darah Puasa (GDP) & 2 Jam PP",
          "param": "GDP ≥ 126 mg/dL atau GD 2 Jam PP ≥ 200 mg/dL."
        },
        {
          "test": "Urine Albumin-Creatinine Ratio (uACR)",
          "param": "Skrining nefropati dini (Mikroalbuminuria: 30-300 mg/g kreatinin)."
        },
        {
          "test": "Profil Lipid & eGFR",
          "param": "Evaluasi risiko aterosklerosis kardiovaskular dan penyesuaian dosis obat antidiabetes."
        }
      ],
      "imaging": "Foto polos kaki (pedis) bila terdapat ulkus/curiga osteomielitis; USG Doppler vaskular tungkai untuk sirkulasi distal.",
      "goldStandard": "Kriteria Laboratorium ADA: Gula Darah Puasa ≥126 mg/dL atau HbA1c ≥6.5% terkonfirmasi."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Metformin (hati-hati jika eGFR <30 mL/mnt); Penghambat SGLT-2 (Empagliflozin/Dapagliflozin - proteksi ginjal & jantung); Penghambat DPP-4 (Linagliptin - aman tanpa penyesuaian dosis ginjal).",
      "beersCriteria": "PERINGATAN KRITERIA BEERS SANGAT KRITIS: HINDARI sulfonilurea kerja panjang (Glibenclamide / Glyburide)! Obat ini memiliki waktu paruh sangat panjang pada lansia dan memicu HIPOGLIKEMIA BERKEPANJANGAN yang dapat menyebabkan kerusakan otak permanen, aritmia fatal, dan kematian! Jika butuh sulfonilurea, gunakan Gliclazide atau Glimepiride dosis terendah.",
      "monitoring": "Pemantauan Gula Darah Mandiri (BGM) harian; Waspadai gejala hipoglikemia atipikal (bingung, mengantuk, bukan gemetar)."
    },
    "clinicalNutrition": {
      "macroMicro": "Prinsip 3J (Jadwal, Jumlah, Jenis). Karbohidrat kompleks serat tinggi 45-50%, protein 1.2 g/kgBB, batasi gula sederhana.",
      "recommendedFoods": "Nasi merah/beras cokelat, jagung manis rebus, tempe bacem tanpa gula pasir, sayur kacang panjang, pepaya mengkal berindeks glikemik rendah.",
      "contraindicatedFoods": "Sirup, madu olahan berlebih, kue basah manis, camilan gorengan bertepung terigu, minuman saset manis."
    },
    "emergency": {
      "immediateTriggers": "Hipoglikemia (<70 mg/dL): Lemas mendadak, keringat dingin, linglung, tidak sadar. Atau Hyperosmolar Hyperglycemic State (HHS - Gula darah >600 mg/dL tanpa ketonuria berat, dehidrasi parah, koma).",
      "firstAidHome": "Jika sadar dan hipoglikemia: berikan 15-20 gram glukosa murni (1 sendok makan gula pasir larut air), cek ulang 15 menit. JIKA PASIEN TIDAK SADAR: JANGAN MEMASUKKAN APAPUN KE MULUT (risiko tersedak fatal!), segera larikan ke IGD!"
    },
    "rehabilitation": {
      "physicalExercises": "Senam kaki diabetes harian untuk merangsang sirkulasi mikrovaskular telapak kaki; jalan santai 30 menit 5 kali seminggu.",
      "homeModifications": "Gunakan sandal kamar empuk khusus diabetes di dalam rumah (JANGAN bertelanjang kaki!); periksa telapak kaki setiap sore menggunakan cermin kecil."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Pankreas <-> Otot Rangka, Lemak Viseral, Saraf & Ginjal",
      "biologicalMechanism": "Otot rangka adalah organ pembuangan glukosa terbesar tubuh (menyerap >80% glukosa pascamakan via transporter GLUT-4). Pada lansia, kehilangan massa otot (sarkopenia) berpadu dengan timbunan lemak viseral perut yang melepaskan asam lemak bebas dan TNF-α memicu resistensi insulin ekstrem. Glukosa darah kronis meracuni endotel pembuluh darah mikro, merusak suplai darah saraf (Vasa Nervorum) dan memicu Neuropati Perifer serta Nefropati Diabetik.",
      "clinicalImpact": "Sarkopenia mempercepat lonjakan gula darah diabetes; sebaliknya, diabetes mempercepat atrofi otot (lingkaran setan Sarko-Diabetes), meningkatkan risiko luka kaki diabetik tanpa rasa sakit yang berujung amputasi.",
      "prevention": "Latihan beban (resistance training) 2-3 kali seminggu untuk memperbesar tangki penyerapan glukosa otot; pengendalian lingkar pinggang; pemantauan berkala sensasi raba kaki monofilamen 10g."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Diabetes Mellitus Typus 2 Geriatrica / Polyneuropathia Diabetica",
      "icd10": "E11.9 / E11.4",
      "latinTerms": [
        {
          "term": "Resistentia Insulini Systemica",
          "meaning": "Penurunan respons biologis reseptor sel target perifer (terutama miosit otot) terhadap hormon insulin."
        },
        {
          "term": "Glucotoxicitas Endothelialis",
          "meaning": "Kerusakan stres oksidatif pada endotel pembuluh darah kapiler akibat kadar glukosa darah tinggi menahun."
        },
        {
          "term": "Syndroma Hyperosmolaris (HHS)",
          "meaning": "Krisis hiperglikemia ekstrem (>600 mg/dL) disertai hiperosmolaritas serum dan dehidrasi berat tanpa ketoasidosis nyata."
        },
        {
          "term": "Microangiopathia & Macroangiopathia",
          "meaning": "Penebalan membrana basalis kapiler (ginjal, retina, saraf) dan percepatan aterosklerosis arteri besar."
        },
        {
          "term": "End-Stage Renal Disease (ESRD)",
          "meaning": "Gagal ginjal terminal stadium 5 sekunder glomerulosklerosis interkapiler Kimmelstiel-Wilson."
        }
      ]
    }
  },
  "sembelit-kronis": {
    "pathophysiology": {
      "cellularMechanism": "Penurunan densitas pleksus mienterikus (pleksus Auerbach) pada dinding kolon dan penurunan pelepasan neurotransmiter asetilkolin. Terjadi perlambatan waktu transit kolon (*slow-transit constipation*) dan penurunan koordinasi otot dasar panggul serta sfingter ani eksterna (*dyssynergic defecation*). Penyerapan air berlebih di kolon menyebabkan massa tinja menjadi skibala keras membatu.",
      "geriatricFactor": "Penurunan asupan serat/cairan, imobilitas fisik, kelemahan otot abdomen penekan, dan polifarmasi obat-obatan rutin geriatri.",
      "organImpact": "Impaksi fekal (sumbatan tinja batu di rektum), ulserasi stercoral dinding usus, fisura ani berdarah, dan hemoroid derajat lanjut."
    },
    "geriatricSymptoms": {
      "classical": "BAB <3 kali per minggu, tinja keras berbongkah (Bristol tipe 1-2), mengejan kuat, rasa tidak tuntas.",
      "atypicalGeriatric": "Diare paradoksikal / Overflow diarrhea (tinja cair merembes di sekitar batu tinja keras yang menyumbat rektum - sering salah diobati dengan obat antidiare!), delirium akut, retensi urin sekunder akibat rektum padat menekan kandung kemih.",
      "whyDifferent": "Massa fekal yang menyumbat rektum memicu iritasi mukosa yang menghasilkan lendir cair yang mengalir keluar di celah sumbatan."
    },
    "staging": {
      "scoreName": "Skala Bentuk Tinja Bristol (Bristol Stool Form Scale) Tipe 1 - 7",
      "stages": [
        {
          "level": "Tipe 1 & 2 (Konstipasi Berat)",
          "criteria": "Tipe 1: Bulatan keras terpisah mirip kotoran kambing. Tipe 2: Berbentuk sosis namun bergumpal-gumpal keras.",
          "risk": "Risiko tinggi impaksi fekal dan luka rektum."
        },
        {
          "level": "Tipe 3 & 4 (Bentuk Ideal Normal)",
          "criteria": "Tipe 3: Seperti sosis dengan retakan di permukaan. Tipe 4: Seperti sosis halus dan lembut.",
          "risk": "Fungsi transit kolon optimal."
        },
        {
          "level": "Tipe 5, 6, 7 (Kecenderungan Diare)",
          "criteria": "Tipe 5: Butiran lunak tepi jelas. Tipe 6: Potongan lembek tepi kasar. Tipe 7: Cair seluruhnya.",
          "risk": "Evaluasi malabsorpsi atau diare luapan bila didahului sembelit lama."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Elektrolit & Kalsium Serum",
          "param": "Eksklusi hipokalemia dan hiperkalsemia sebagai pemicu atonia usus."
        },
        {
          "test": "Kadar TSH (Fungsi Tiroid)",
          "param": "Eksklusi hipotiroidisme geriatri yang melumpuhkan peristaltik usus."
        }
      ],
      "imaging": "Foto Polos Abdomen 3 Posisi (BNO) untuk melihat akumulasi massa fekal masif di kolon dan menyingkirkan ileus obstruktif; Kolonoskopi untuk menyingkirkan massa polip/keganasan kolorektal.",
      "goldStandard": "Pemeriksaan Colok Dubur (Digital Rectal Examination - DRE) untuk menilai tonus sfingter dan ada tidaknya impaksi fekal."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Lini pertama: Laksatif osmotik (Polietilen Glikol / PEG atau Laktulosa 15-30 mL/hari). Lini kedua: Stimulan laksatif jangka pendek (Bisacodyl / Senna). Pelunak tinja: Docusate sodium.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Waspadai penggunaan obat rutin lansia yang menyebabkan sembelit berat: Suplemen Zat Besi dosis tinggi, Kalsium karbonat, Antasida aluminium hidroksida, Obat batuk opioid, Antidepresan trisiklik (Amitriptyline), dan Antagonis kalsium antihipertensi (Verapamil/Diltiazem)!",
      "monitoring": "Keseimbangan cairan dan elektrolit bila menggunakan laksatif jangka panjang."
    },
    "clinicalNutrition": {
      "macroMicro": "Serat pangan larut dan tidak larut bertahap 25-30 gram/hari disertai air minum minimal 1.5 - 2 liter per hari (serat tanpa air justru memperparah sumbatan!).",
      "recommendedFoods": "Pepaya matang, buah naga merah, buah plum/prune kering, oatmeal, agar-agar rumput laut, air hangat saat bangun pagi.",
      "contraindicatedFoods": "Jambu biji, buah salak berlebih, makanan cepat saji rendah serat, teh kental pekat (tinggi tanin pengikat usus)."
    },
    "emergency": {
      "immediateTriggers": "Tidak bisa buang air besar dan tidak bisa buang angin sama sekali disertai muntah hijau kekuningan dan perut membuncit tegang (Ileus Obstruktif Total).",
      "firstAidHome": "Segera bawa ke IGD; JANGAN memaksakan minum obat pencahar oral saat perut tegang dan muntah (risiko perforasi usus!)."
    },
    "rehabilitation": {
      "physicalExercises": "Pijat perut searah jarum jam (pijatan kolon I-L-U) selama 10 menit pagi hari; Latihan posisi jongkok saat BAB (gunakan dingklik kecil penopang kaki setinggi 20 cm di toilet duduk).",
      "homeModifications": "Kamar mandi dekat dengan kamar tidur lansia, pegangan tangan kokoh di dinding toilet."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Usus Besar <-> Sistem Saraf Otonom, Saraf Enterik & Saluran Kemih",
      "biologicalMechanism": "Degenerasi pleksus mienterikus Auerbach di dinding kolon dan penurunan tonus saraf parasimpatis sakral melambatkan waktu transit tinja. Penumpukan massa feses keras membatu di rektum (fekalom / impaksi fekal) menekan leher kandung kemih dan uretra secara mekanis ke tulang pubis, memicu retensi urine akut dan inkontinensia paradoksal. Distensi kolon masif juga merangsang saraf vagus, memicu sinkop vasovagal (pingsan saat mengejan).",
      "clinicalImpact": "Impaksi fekal yang tidak terdeteksi sering menjadi penyebab tersembunyi retensi urine akut, delirium geriatri, serta perforasi sterkoral usus besar yang mematikan.",
      "prevention": "Rehidrasi teratur, asupan serat larut air (psyllium husk), hindari mengejan berlebihan dengan pijakan bangku toilet kecil (squatting stool), evaluasi evakuasi manual bila ada impaksi fekal."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Obstipatio Chronica / Fecaloma Rektal / Dyssynergia Pelvica",
      "icd10": "K59.0 / K56.41",
      "latinTerms": [
        {
          "term": "Transit-Time Prolongatus",
          "meaning": "Perlambatan waktu perjalanan masa feses melewati kolon lumen akibat hipomotilitas pleksus mienterikus."
        },
        {
          "term": "Impactio Faecalis (Fecaloma)",
          "meaning": "Pengerasan massa tinja membatu di ampula rekti yang tidak mampu dievakuasi spontan."
        },
        {
          "term": "Dyssynergia Musculi Puborectalis",
          "meaning": "Kegagalan relaksasi paradoksal otot dasar panggul puborektalis saat manuver mengejan buang air besar."
        },
        {
          "term": "Megacolon Acquisitum",
          "meaning": "Dilatasi kronis lumen usus besar disertai penurunan elastisitas dinding muskularis kolon."
        },
        {
          "term": "Syncope Vasovagalis",
          "meaning": "Episode pingsan penurunan curah jantung mendadak akibat stimulasi saraf vagus saat mengejan keras."
        }
      ]
    }
  },
  "bph": {
    "pathophysiology": {
      "cellularMechanism": "Proliferasi sel stroma dan sel epitelial kelenjar prostat di zona transisi (periuretral). Enzim 5-alpha-reduktase tipe 2 intraseluler mengonversi hormon testosteron menjadi Dihidrotestosteron (DHT) yang memiliki afinitas 5 kali lebih tinggi terhadap reseptor androgen. Ikatan DHT memicu pelepasan faktor pertumbuhan (FGF, TGF-β, IGF) yang menghambat apoptosis seluler. Pembesaran kelenjar prostat menimbulkan obstruksi mekanik statis, sementara peningkatan tonus otot polos prostat yang dimediasi adrenoseptor alfa-1A memicu obstruksi dinamis pada leher kandung kemih dan uretra.",
      "geriatricFactor": "Penurunan rasio testosteron terhadap estrogen pada penuaan meningkatkan sensitivitas reseptor androgen di prostat.",
      "organImpact": "Hipertrofi detrusor kompensatorik (trabekulasi dan pembentukan divertikel kandung kemih), disusul kelelahan otot detrusor, retensi urin kronis, hidroureter, hidronefrosis bilateral, hingga gagal ginjal pasca-renal."
    },
    "geriatricSymptoms": {
      "classical": "Gejala Obstruktif (Voiding): Pancaran urin melemah, menetes di akhir kencing (*terminal dribbling*), harus mengejan, aliran kencing terputus-putus (*intermittency*). Gejala Iritatif (Storage): Sering kencing (*frequency*), terbangun malam hari kencing >2 kali (*nocturia*), rasa tidak bisa menahan kencing (*urgency*).",
      "atypicalGeriatric": "Lansia seringkali tidak mengeluhkan pancaran lemah karena sudah terbiasa selama bertahun-tahun. Datang langsung dengan inkontinensia paradoksikal (mengompol terus menerus karena kandung kemih kepenuhan meluber), infeksi saluran kemih berat berulang, atau gagal ginjal tanpa nyeri dengan kenaikan ureum/kreatinin tinggi.",
      "whyDifferent": "Dekomposisi bertahap otot detrusor menutupi sensasi distensi kandung kemih."
    },
    "staging": {
      "scoreName": "Skor Gejala Prostat Internasional (International Prostate Symptom Score - IPSS)",
      "stages": [
        {
          "level": "Gejala Ringan (Skor IPSS 0 - 7)",
          "criteria": "Pancaran sedikit berkurang, nokturia 1-2 kali, kualitas hidup belum terganggu.",
          "risk": "Terapi konservatif 'Watchful Waiting' dengan modifikasi gaya hidup."
        },
        {
          "level": "Gejala Sedang (Skor IPSS 8 - 19)",
          "criteria": "Pancaran kencing terganggu nyata, nokturia 2-4 kali, rasa tidak tuntas sering.",
          "risk": "Indikasi terapi medikamentosa farmakologis kombinasi."
        },
        {
          "level": "Gejala Berat (Skor IPSS 20 - 35)",
          "criteria": "Kencing sangat sulit, retensi urin berulang, kualitas hidup sangat terganggu.",
          "risk": "Pertimbangan kuat intervensi bedah endourologi (TURP / HoLEP)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Prostate-Specific Antigen (PSA Total)",
          "param": "Nilai rujukan normal <4 ng/mL. PSA 4-10 ng/mL (zona abu-abu): periksa rasio Free/Total PSA untuk membedakan BPH vs Kanker Prostat."
        },
        {
          "test": "Urinalisis & Sedimen Urin",
          "param": "Eksklusi leukosituria (infeksi saluran kemih) dan hematuria mikroskopik."
        },
        {
          "test": "Kreatinin Serum & eGFR",
          "param": "Deteksi dini gagal ginjal pasca-renal akibat obstruksi saluran kemih bawah."
        }
      ],
      "imaging": "USG Transabdominal / Transrektal (TRUS) untuk mengukur volume prostat (normal <20-25 gram) dan Post-Void Residual (PVR / sisa urin setelah kencing, abnormal jika >50-100 mL); Uroflowmetri (Qmax <10 mL/detik menandakan obstruksi bermakna).",
      "goldStandard": "Pemeriksaan Colok Dubur (DRE) untuk konsistensi kenyal tanpa nodul keras, dikombinasikan dengan Uroflowmetri & USG PVR."
    },
    "pharmacotherapy": {
      "primaryDrugs": "1. Alfa-1 Blocker (Tamsulosin 0.4mg/hari atau Silodosin): Merelaksasi otot polos leher kandung kemih (efek cepat 48 jam). 2. 5-Alpha Reductase Inhibitor (5-ARI: Dutasteride 0.5mg atau Finasteride 5mg/hari): Mengecilkan volume prostat hingga 25% dalam 6 bulan. Kombinasi keduanya terbukti paling efektif mencegah retensi urin akut.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Waspadai efek HIPOTENSI ORTOSTATIK dari obat alfa-bloker non-selektif (seperti Terazosin / Doxazosin) yang meningkatkan risiko pingsan dan jatuh patah tulang pada lansia! Gunakan Tamsulosin yang lebih uro-selektif dan konsumsi tepat sebelum tidur malam. Waspadai obat flu yang mengandung dekongestan atau antihistamin yang memicu retensi urin akut!",
      "monitoring": "Kadar PSA berkala (perhatian: obat 5-ARI menurunkan nilai PSA hingga 50%, sehingga nilai terukur harus dikalikan 2 saat evaluasi kanker!)."
    },
    "clinicalNutrition": {
      "macroMicro": "Tinggi fitonutrien likopen, beta-sitosterol, seng, dan antioksidan polifenol.",
      "recommendedFoods": "Tomat matang kukus (kaya likopen bioavailabel tinggi), biji labu kuning (pumpkin seeds), teh hijau murni, brokoli, kacang kedelai edamame.",
      "contraindicatedFoods": "Minum air dalam jumlah besar sekaligus di malam hari, kopi, alkohol, dan makanan terlalu pedas yang mengiritasi leher kandung kemih."
    },
    "emergency": {
      "immediateTriggers": "Retensi Urin Akut Total: Sama sekali tidak bisa mengeluarkan air seni, kandung kemih teraba membesar kencang di bawah pusar, nyeri panggul luar biasa (kondisi darurat memerlukan kateterisasi uretra segera).",
      "firstAidHome": "JANGAN menekan perut bawah lansia dengan paksa (risiko ruptur kandung kemih); segera bawa ke IGD rumah sakit terdekat untuk pemasangan selang kateter urin steril."
    },
    "rehabilitation": {
      "physicalExercises": "Teknik Double Voiding (kencing sampai selesai, tunggu rileks 20-30 detik di toilet, lalu kencing sekali lagi untuk mengosongkan sisa urin).",
      "homeModifications": "Hentikan minum cairan 2 jam sebelum waktu tidur malam; letakkan urinal botol di samping tempat tidur lansia untuk mencegah risiko jatuh saat terbangun malam."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Prostat <-> Ginjal (Nefropati Obstruktif) & Kandung Kemih",
      "biologicalMechanism": "Pembesaran adenoma zona transisi prostat menyempitkan uretra pars prostatika, memaksa otot detrusor kandung kemih bekerja hipertrofik hingga terbentuk trabekulasi dan divertikel. Bila dekompensasi terjadi, tekanan balik urine menjalar naik ke ureter (hidroureter) dan calyx ginjal (hidronefrosis bilateral), merusak nefron glomerulus dan memicu Gagal Ginjal Post-Renal kronis.",
      "clinicalImpact": "Banyak lansia pria datang ke rumah sakit dalam kondisi gagal ginjal stadium akhir dan anemia berat tanpa keluhan nyeri, hanya karena mengabaikan kencing yang menetes lambat selama bertahun-tahun.",
      "prevention": "Pemeriksaan USG ginjal dan sisa urine pascaberkemih (Post-Void Residual / PVR) serta tes fungsi ginjal kreatinin serum berkala pada setiap penderita BPH; terapi alfa-blocker atau reseksi TURP tepat waktu."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Hyperplasia Prostatae Benigna (BPH) / Uropathia Obstructiva",
      "icd10": "N40.1 / N13.8",
      "latinTerms": [
        {
          "term": "Hyperplasia Adenomatosa Transisional",
          "meaning": "Proliferasi jinak sel stroma dan kelenjar epitel di zona transisi periuretral kelenjar prostat."
        },
        {
          "term": "Lower Urinary Tract Symptoms (LUTS)",
          "meaning": "Kumpulan keluhan berkemih: frekuensi, nokturia, urgensi, pancaran lemah, dan mengejan."
        },
        {
          "term": "Trabeculatio Vesicae Urinariae",
          "meaning": "Penebalan serat otot detrusor kandung kemih yang membentuk pola berkas akibat tekanan obstruksi kronis."
        },
        {
          "term": "Hydronephrosis Bilateralis",
          "meaning": "Pelebaran kaliks dan pelvis ginjal akibat arus balik urine (refluks vesikoureteral) yang gagal keluar."
        },
        {
          "term": "Post-Void Residual (PVR) Urine",
          "meaning": "Volume air kencing yang masih tertinggal di rongga kandung kemih segera setelah miksi selesai."
        }
      ]
    }
  },
  "isk-pria": {
    "pathophysiology": {
      "cellularMechanism": "Pada pria, ISK hampir selalu dianggap sebagai 'ISK Komplikata' karena saluran uretra pria panjang dan memiliki barier bakterisidal alami dari cairan prostat. Infeksi terjadi jika terdapat stasis urin akibat BPH, kateterisasi, atau striktur. Bakteri uropatogenik (E. coli, Proteus mirabilis penghasil urease, Klebsiella) menempel pada sel uroepitelium dengan fimbria tipe 1, membentuk biofilm intraluminal, dan memicu kaskade sitokin inflamasi pirogenik.",
      "geriatricFactor": "Penurunan sekresi zink antibakterial dari kelenjar prostat lansia dan tingginya prevalensi residu urin post-miksi.",
      "organImpact": "Pielonefritis akut, prostatitis bakterial kronis, abses prostat, dan urosepsis gram negatif dengan angka mortalitas tinggi."
    },
    "geriatricSymptoms": {
      "classical": "Disuria (kencing perih panas), frekuensi tinggi, anyang-anyangan, nyeri suprapubik, urin keruh berbau busuk.",
      "atypicalGeriatric": "Sering TANPA disuria! Gejala dominan adalah Delirium Akut (linglung, mengamuk, atau justru tidur terus-menerus), anoreksia, instabilitas gait (sempoyongan dan jatuh berulang), serta hipotensi tanpa demam.",
      "whyDifferent": "Toksin bakteri dan sitokin IL-6 mudah menembus sawar darah otak lansia yang mengalami mikroangiopati serebral."
    },
    "staging": {
      "scoreName": "Klasifikasi EAU untuk Infeksi Saluran Kemih",
      "stages": [
        {
          "level": "ISK Tanpa Komplikasi",
          "criteria": "Sangat jarang pada pria; hanya jika tanpa kelainan anatomi dan fungsi saluran kemih.",
          "risk": "Risiko komplikasi rendah."
        },
        {
          "level": "ISK Komplikata Pria",
          "criteria": "Seluruh kasus ISK pada pria dengan kelainan struktural/fungsional (BPH, batu, kateter).",
          "risk": "Tinggi risiko urosepsis dan kekambuhan - Memerlukan antibiotik terapeutik minimal 7-14 hari."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Urinalisis Lengkap",
          "param": "Leukosit esterase positif, nitrit positif (kuman gram negatif), leukosituria (>5-10/LPB), hematuria."
        },
        {
          "test": "Kultur Urin & Resistensi (Urine C&S)",
          "param": "Baku emas: Pertumbuhan koloni kuman bermakna (≥10^3 hingga ≥10^5 CFU/mL)."
        },
        {
          "test": "Kadar Laktat Darah & Prokalsitonin",
          "param": "Skrining dini urosepsis bila terdapat tanda syok atau delirium."
        }
      ],
      "imaging": "USG Ginjal dan Kandung Kemih (menilai hidronefrosis, batu saluran kemih, volume prostat, dan sisa urin residu); CT Urografi non-kontras bila dicurigai batu saluran kemih.",
      "goldStandard": "Kultur Urin kuantitatif dengan identifikasi mikroorganisme spesifik."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Antibiotik terarah: Nitrofurantoin (hanya jika eGFR >30 mL/mnt dan ISK bawah murni), Fosfomycin trometamol, Ceftriaxone intravena, atau Cefixime oral. Pada kecurigaan keterlibatan prostat: Fluorokuinolon (Ciprofloxacin/Levofloxacin) jika sensitif.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Hati-hati pemakaian Nitrofurantoin jangka panjang pada lansia karena risiko toksisitas paru (fibrosis paru ireversibel) dan neuropati perifer terutama bila fungsi ginjal menurun (eGFR <30 mL/mnt).",
      "monitoring": "Kultur urin ulangan 1-2 minggu pasca-terapi antibiotik untuk memastikan eradikasi total kuman."
    },
    "clinicalNutrition": {
      "macroMicro": "Hidrasi optimal 2 liter per hari (urine target >1.5 L/24 jam) untuk membilas bakteri secara mekanik.",
      "recommendedFoods": "Jus cranberry murni tanpa gula (proantosianidin mencegah perlekatan fimbria bakteri ke dinding uroepitel), air rebusan barley/jali-jali, buah pir.",
      "contraindicatedFoods": "Minuman beralkohol, kopi, minuman berkarbonasi yang meningkatkan iritabilitas kandung kemih."
    },
    "emergency": {
      "immediateTriggers": "Urosepsis: Suhu >38.5°C atau <36°C, denyut nadi >100x/m, laju napas >22x/m, tekanan darah sistolik <90 mmHg, penurunan kesadaran mendadak.",
      "firstAidHome": "Segera panggil ambulans atau bawa ke IGD; jangan tunda dengan pengobatan herbal mandiri jika lansia sudah tampak lemas atau linglung."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan miksi terjadwal setiap 3 jam untuk mencegah stasis urin di kandung kemih.",
      "homeModifications": "Pastikan kebersihan genetalia eksterna harian; ganti kateter urin secara berkala (maksimal 2-4 minggu) dengan teknik aseptik ketat bila menggunakan kateter menetap."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saluran Kemih <-> Kelenjar Prostat & Ginjal",
      "biologicalMechanism": "Pada pria, ISK hampir selalu merupakan ISK terkomplikasi (complicated UTI). Bakteri uropatogenik dari uretra bermigrasi mundur ke dalam asinus prostat, membentuk mikroabses yang terlindung kapsul prostat (Prostatitis Bakterial). Dari prostat, kuman dapat naik lewat lumen ureter menuju parenkim ginjal, memicu Pielonefritis Akut dan invasi ke sirkulasi darah (Urosepsis).",
      "clinicalImpact": "Urosepsis pada lansia memiliki mortalitas 25-40% dengan tanda awal berupa disorientasi mental (delirium) dan penurunan tensi mendadak (syok septik).",
      "prevention": "Kultur urine dan sensitivitas antibiotik wajib dilakukan; hindari kateterisasi menetap bila memungkinkan (gunakan kateter intermiten bersih); tuntaskan antibiotik sesuai panduan penetrasi jaringan prostat (fluorokuinolon atau kotrimoksazol)."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Infectio Systematis Urinarii Complicata / Prostatitis Acuta",
      "icd10": "N39.0 / N41.0",
      "latinTerms": [
        {
          "term": "Colonizatio Uropathogenica",
          "meaning": "Invasi bakteri patogen (seperti E. coli uropatogenik atau Klebsiella) menembus saluran uretra."
        },
        {
          "term": "Prostatitis Suppurativa",
          "meaning": "Penetrasi mikroba ke jaringan tubuloalveolar prostat yang membentuk fokus mikroabses intraseluler."
        },
        {
          "term": "Pyelonephritis Ascendens",
          "meaning": "Penyebaran infeksi bakteri dari saluran kemih bawah merambat naik ke parenkim ginjal."
        },
        {
          "term": "Urosepsis Bacteriemica",
          "meaning": "Sindrom respons inflamasi sistemik dengan bakteriemia yang bersumber dari saluran kemih, memicu syok septik."
        },
        {
          "term": "Dysuria & Stranguria",
          "meaning": "Nyeri panas menyengat saat berkemih disertai sensasi kencing yang menetes sedikit-sedikit tak tuntas."
        }
      ]
    }
  },
  "prolaps-uteri": {
    "pathophysiology": {
      "cellularMechanism": "Kerusakan dan degradasi matriks ekstraseluler pada jaringan ikat penyangga panggul (ligamentum kardinale dan uterosakralis) serta kelemahan otot levator ani. Penurunan kadar estrogen pascamenopause menurunkan sintesis kolagen tipe I dan III serta meningkatkan aktivitas enzim matriks metalloproteinase (MMP-2 dan MMP-9). Tekanan intra-abdomen kronis yang tinggi secara bertahap mendorong uterus dan apeks vagina turun melewati hiatus genitalis.",
      "geriatricFactor": "Hipoestrogenisme kronis pascamenopause, riwayat paritas multipara (melahirkan normal berulang kali), dan atrofi otot skelet terkait usia.",
      "organImpact": "Sistokel (penonjolan kandung kemih ke dinding anterior vagina), rektokel (penonjolan rektum ke dinding posterior), ulserasi dekubitus serviks yang menonjol keluar, dan obstruksi saluran kemih sekunder."
    },
    "geriatricSymptoms": {
      "classical": "Sensasi adanya ganjalan atau benjolan yang keluar dari liang vagina, rasa berat di panggul, nyeri punggung bawah yang membaik saat berbaring.",
      "atypicalGeriatric": "Kesulitan berkemih yang mengharuskan lansia memasukkan benjolan dengan jari tangan terlebih dahulu agar air kencing bisa memancar (*splinting/digitasi*), infeksi saluran kemih berulang akibat retensi urin kronis, atau luka lecet berdarah pada pakaian dalam.",
      "whyDifferent": "Banyak wanita lansia merasa malu untuk mengeluhkan kondisi ini ke keluarga (*silent suffering*), sehingga baru terdeteksi saat terjadi infeksi atau luka berdarah."
    },
    "staging": {
      "scoreName": "Sistem Klasifikasi POP-Q (Pelvic Organ Prolapse Quantification) Stadium I - IV",
      "stages": [
        {
          "level": "Stadium I",
          "criteria": "Bagian organ prolaps paling distal berada >1 cm di atas cincin himen.",
          "risk": "Sering tanpa gejala, intervensi senam dasar panggul."
        },
        {
          "level": "Stadium II",
          "criteria": "Bagian organ paling distal berada antara 1 cm di atas hingga 1 cm di bawah cincin himen.",
          "risk": "Gejala ganjalan mulai terasa nyata terutama sore hari."
        },
        {
          "level": "Stadium III",
          "criteria": "Bagian organ paling distal berada >1 cm di bawah cincin himen namun tidak melebihi 2 cm dari panjang vagina total.",
          "risk": "Benjolan menonjol keluar permanen saat berdiri/berjalan."
        },
        {
          "level": "Stadium IV (Prosidensia Total)",
          "criteria": "Eversi total organ panggul: seluruh rahim dan vagina berada di luar introitus vagina.",
          "risk": "Luka ulkus dekubitus, infeksi, dan retensi urin berat."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Urinalisis & Kultur Urin",
          "param": "Eksklusi ISK berulang akibat stasis urin sistokel."
        },
        {
          "test": "Fungsi Ginjal (Ureum/Kreatinin)",
          "param": "Eksklusi hidronefrosis bila prolaps stadium III-IV menjepit ureter."
        }
      ],
      "imaging": "USG Ginjal dan Pelvis (menyingkirkan komplikasi hidronefrosis sekunder); Evaluasi residu urin pasca-miksi (PVR).",
      "goldStandard": "Pemeriksaan Ginekologi Pelvis dengan spekulum Sims dalam posisi litotomi dan manuver Valsalva."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Krim Estrogen Topikal (Estriol/Estradiol krim intravagina 2-3 kali seminggu) untuk meregenerasi vaskularisasi dan ketebalan epitel mukosa vagina serta menyembuhkan ulkus luka lecet.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Terapi estrogen sistemik oral (pil) TIDAK DIANJURKAN untuk prolaps pada wanita lansia karena risiko stroke, trombosis vena dalam (DVT), dan kanker endometrium. Selalu pilih preparat estrogen lokal topikal yang minim penyerapan sistemik.",
      "monitoring": "Inspeksi rutin mukosa vagina bila menggunakan cincin pesarium (tiap 3-6 bulan)."
    },
    "clinicalNutrition": {
      "macroMicro": "Tinggi serat dan cairan teratur untuk mencegah mengejan kronis akibat sembelit (musuh utama prolaps).",
      "recommendedFoods": "Pepaya, buah naga, oat, sayur bayam bening, air putih hangat 1.5 - 2 liter per hari.",
      "contraindicatedFoods": "Makanan pemicu konstipasi (makanan olahan kering bertepung, kurang serat)."
    },
    "emergency": {
      "immediateTriggers": "Benjolan rahim yang keluar mengalami pembengkakan akut berwarna kehitaman/sangat nyeri (strangulasi jaringan), perdarahan banyak dari ulkus serviks, atau tidak bisa kencing sama sekali.",
      "firstAidHome": "Baringkan lansia dengan panggul diganjal bantal lebih tinggi, kompres dingin lembut di area benjolan, segera bawa ke dokter spesialis obstetri ginekologi (uroginekologi)."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan Senam Kegel (kontraksi otot dasar panggul 5 detik, rileks 5 detik, 10 kali pengulangan, 3 sesi sehari) - sangat efektif untuk Stadium I-II; Pemasangan cincin pesarium silikon non-bedah untuk lansia berisiko operasi tinggi.",
      "homeModifications": "HINDARI mengangkat barang berat (termasuk menggendong cucu); pasang kloset duduk dengan pegangan tangan; atasi batuk kronis segera."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Rahim <-> Otot Dasar Panggul, Saraf Pudendus & Saluran Kemih",
      "biologicalMechanism": "Denervasi neuropatik pada saraf pudendus (akibat riwayat persalinan multipara) berpadu dengan atrofi sarkopenia otot levator ani pascamenopause meruntuhkan penyangga diafragma pelvis. Turunnya korpus uteri menarik trigonum kandung kemih ke bawah (sistokel) dan menekuk ureter ke arah inferior, menyebabkan obstruksi aliran urine fungsional, stasis urin, dan hidronefrosis ginjal kronis.",
      "clinicalImpact": "Lansia dengan prolaps stadium lanjut kerap menderita ISK rekuren dan kesulitan berkemih yang harus dibantu memasukkan tonjolan rahim dengan jari secara manual.",
      "prevention": "Fisioterapi senam Kegel penguatan dasar panggul sejak dini; pemakaian cincin pesarium silikon ginekologi; pencegahan konstipasi kronis dan batuk menahun yang meningkatkan tekanan intraabdomen."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Prolapsus Organorum Pelvicorum (POP) / Prolapsus Uteri Totalis",
      "icd10": "N81.3 / N81.4",
      "latinTerms": [
        {
          "term": "Atrophia Musculi Levatoris Ani",
          "meaning": "Penyusutan massa dan kelemahan fasia endopelvis penyangga diafragma pelvis pascamenopause."
        },
        {
          "term": "Cystocele & Rectocele",
          "meaning": "Penonjolan dinding kandung kemih ke dinding depan vagina, atau tonjolan rektum ke dinding belakang vagina."
        },
        {
          "term": "Procidentia Uteri",
          "meaning": "Turunnya seluruh korpus uteri dan serviks melewati introitus vagina keluar rongga panggul."
        },
        {
          "term": "Denervatio Nervi Pudendi",
          "meaning": "Kerusakan neuropatik pada serabut saraf pudendus akibat trauma persalinan masa lampau atau penuaan."
        },
        {
          "term": "Ulceratio Decubitalis Mucosae",
          "meaning": "Luka lecet peradangan pada dinding mukosa leher rahim yang menonjol keluar akibat gesekan pakaian dalam."
        }
      ]
    }
  },
  "miom-uteri": {
    "pathophysiology": {
      "cellularMechanism": "Miom uteri (leiomioma) adalah tumor monoklonal jinak dari sel otot polos miometrium yang kaya akan matriks ekstraseluler kolagen. Pertumbuhannya sangat bergantung pada hormon estrogen dan progesteron. Setelah menopause, penurunan drastis hormon ovarium secara fisiologis menyebabkan miom mengalami regresi involutif, atrofi hialin, dan kalsifikasi.",
      "geriatricFactor": "Pada wanita lansia yang sudah menopause, miom SEHARUSNYA mengecil. Jika miom ditemukan MEMBESAR CEPAT atau mengeluarkan darah baru pascamenopause, harus dicurigai transformasi ganas menjadi Leiosarkoma atau lesi neoplastik endometrium!",
      "organImpact": "Penekanan kandung kemih (gejala miksi frekuen/urgensi), penekanan rektum (sembelit), atau perdarahan uterus abnormal pascamenopause."
    },
    "geriatricSymptoms": {
      "classical": "Pada usia subur: menstruasi sangat banyak (menoragia), nyeri haid hebat, perut membesar.",
      "atypicalGeriatric": "PERDARAHAN VAGINA PASCAMENOPAUSE (Post-Menopausal Bleeding - PMB) berupa bercak flek atau darah cair baru. Merupakan tanda 'RED FLAG' ginekologi geriatri yang wajib diinvestigasi tuntas!",
      "whyDifferent": "Wanita lansia normal tidak boleh mengalami perdarahan dari liang kewanitaan sama sekali."
    },
    "staging": {
      "scoreName": "Klasifikasi FIGO untuk Lokasi Leiomioma Uteri (Tipe 0 - 8)",
      "stages": [
        {
          "level": "Submukosa (FIGO 0, 1, 2)",
          "criteria": "Menonjol ke dalam kavum uteri.",
          "risk": "Penyebab utama perdarahan abnormal."
        },
        {
          "level": "Intramural (FIGO 3, 4, 5)",
          "criteria": "Berada di dalam ketebalan dinding miometrium.",
          "risk": "Dapat memicu pembesaran uterus menyeluruh."
        },
        {
          "level": "Subserosa (FIGO 6, 7) & Lainnya",
          "criteria": "Menonjol ke arah luar rongga peritoneum atau bertangkai.",
          "risk": "Penyebab utama gejala penekanan organ sekitar (kandung kemih/usus)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Biopsi Endometrium (Pipelle Biopsy)",
          "param": "WAJIB pada setiap perdarahan pascamenopause untuk menyingkirkan hiperplasia atipik atau adenokarsinoma endometrium."
        },
        {
          "test": "Kadar Hemoglobin & Ferritin",
          "param": "Evaluasi anemia defisiensi besi akibat perdarahan tersembunyi."
        }
      ],
      "imaging": "USG Transvaginal (TVS) untuk mengukur ketebalan garis endometrium (normal pascamenopause <4-5 mm tanpa terapi hormon) dan vaskularisasi massa miom; MRI Pelvis bila batas massa meragukan.",
      "goldStandard": "Pemeriksaan Biopsi Histopatologi endometrium / miomektomi."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Pada lansia pascamenopause tanpa gejala, terapi obat hormonal biasanya tidak diperlukan (cukup observasi serial USG). Jika ada perdarahan: asam traneksamat simtomatik sambil menunggu biopsi.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Waspadai penggunaan suplemen herbal 'fitoestrogen' bebas (seperti ekstrak kedelai dosis tinggi, black cohosh) tanpa pengawasan medis, karena dapat merangsang pertumbuhan tumor hormon-dependen pada wanita lansia.",
      "monitoring": "USG transvaginal serial setiap 6 bulan untuk memastikan ukuran massa stabil atau mengecil."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet kaya antioksidan polifenol, serat pangan, dan pembatasan daging merah berlemak tinggi.",
      "recommendedFoods": "Sayuran krusifera (brokoli, kubis kaya indole-3-carbinol untuk metabolisme estrogen sehat), teh hijau (EGCG), ikan laut dalam.",
      "contraindicatedFoods": "Daging merah olahan (sosis, kornet), makanan cepat saji tinggi lemak jenuh."
    },
    "emergency": {
      "immediateTriggers": "Perdarahan hebat dari jalan lahir yang membasahi lebih dari 2 pembalut dalam 1 jam, disertai pusing berkunang-kunang dan pucat pasi.",
      "firstAidHome": "Baringkan pasien, segera hubungi dokter atau bawa ke IGD rumah sakit."
    },
    "rehabilitation": {
      "physicalExercises": "Aktivitas fisik aerobik ringan secara rutin untuk menjaga berat badan ideal (jaringan lemak berlebih memproduksi estrogen estron via enzim aromatase).",
      "homeModifications": "Pencatatan harian bila ada keluhan bercak flek atau keputihan abnormal pada kalender kesehatan keluarga."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Rahim <-> Kandung Kemih & Sistem Hematologi (Anemia)",
      "biologicalMechanism": "Miom subserosa berukuran besar menekan dinding posterior kandung kemih secara mekanis, memperkecil kapasitas fungsional penampungan urine sehingga menimbulkan keluhan beser frekuensi tinggi dan retensi urine parsial. Miom submukosa menyebabkan menoragia kronis yang menguras cadangan besi sumsum tulang, memicu Anemia Defisiensi Besi berat yang membebani kinerja jantung (Anemic Heart Failure).",
      "clinicalImpact": "Kombinasi anemia berat dan gangguan miksi menurunkan perfusi organ vital, memicu pusing kliyengan saat berdiri (hipotensi ortostatik) dan memicu risiko jatuh patah tulang panggul pada wanita lansia.",
      "prevention": "Pemeriksaan darah rutin Hb dan cadangan feritin; USG panggul serial; suplementasi zat besi oral/intravena; evaluasi histerektomi atau embolisasi arteri uterina bila menekan organ sekitar."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Leiomyoma Uteri / Fibroma Uteri Degenerativa",
      "icd10": "D25.9",
      "latinTerms": [
        {
          "term": "Neoplasma Monoclonale Benignum",
          "meaning": "Tumor jinak padat yang berasal dari satu sel punca otot polos miometrium uterus."
        },
        {
          "term": "Leiomyoma Subserosum & Submucosum",
          "meaning": "Lokasi tumor miom di bawah lapisan serosa luar rahim atau menonjol ke dalam rongga endometrium."
        },
        {
          "term": "Menorrhagia & Metrorrhagia",
          "meaning": "Perdarahan haid yang sangat banyak berlebihan atau perdarahan di luar siklus (atau pascamenopause)."
        },
        {
          "term": "Anemia Sideropenica",
          "meaning": "Anemia defisiensi besi berat akibat kehilangan eritrosit kronis yang menguras cadangan feritin sumsum tulang."
        },
        {
          "term": "Degeneratio Carnosa / Hyalina",
          "meaning": "Nekrosis iskemik jaringan miom akibat pembesaran ukuran yang melampaui pasokan pembuluh darah."
        }
      ]
    }
  },
  "isk-wanita": {
    "pathophysiology": {
      "cellularMechanism": "Kekurangan estrogen pascamenopause menyebabkan atrofi epitel vagina dan uretra (Sindrom Genitourinari Menopause - GSM). Lapisan sel superfisial yang kaya glikogen menipis, memicu kepunahan bakteri baik Lactobacillus doderlein. pH vagina melonjak dari asam (pH 3.8-4.5) menjadi basa (>5.5). Hilangnya barier keasaman memungkinkan bakteri koliform tinja (Uropathogenic E. coli) mengkolonisasi introitus vagina, lalu menaiki uretra wanita yang pendek (hanya 3.5 - 4 cm) menuju kandung kemih.",
      "geriatricFactor": "Penurunan tonus sfingter uretra, prolaps organ panggul yang menyisakan residu urin, dan imunodefisiensi mukosa lokal.",
      "organImpact": "Sistitis hemoragika, pielonefritis akut ascendens, dan pembentukan abses ginjal pada penderita diabetes melitus."
    },
    "geriatricSymptoms": {
      "classical": "Disuria tajam seperti disayat saat berkemih, polakisuria, urgensi kencing, nyeri suprapubik, hematuria.",
      "atypicalGeriatric": "DELIRIUM AKUT & HIPOAKTIF (gejala nomor satu ISK lansia: pasien mendadak bengong, tidak mau diajak bicara, atau disorientasi waktu dan tempat). Gejala lain berupa mengompol baru, kelemahan tungkai mendadak yang memicu jatuh, tanpa demam dan tanpa keluhan nyeri kencing.",
      "whyDifferent": "Penurunan persepsi aferen sensorik trigonum vesika dan respons imun sistemik yang tumpul."
    },
    "staging": {
      "scoreName": "Kriteria ISK Rekuren pada Wanita Lansia",
      "stages": [
        {
          "level": "Episode Tunggal ISK",
          "criteria": "Infeksi akut terisolasi dengan resolusi lengkap.",
          "risk": "Terapi antibiotik jangka pendek terarah."
        },
        {
          "level": "ISK Rekuren (Recurrent UTI)",
          "criteria": "≥ 2 episode dalam 6 bulan ATAU ≥ 3 episode dalam 12 bulan.",
          "risk": "Memerlukan evaluasi faktor risiko struktural (USG residu urin) dan profilaksis non-antibiotik."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Urinalisis Kateter / Midstream Bersih",
          "param": "Piuria (>10 leukosit/LPB), Nitrit positif, dan bakteriuria bermakna."
        },
        {
          "test": "Kultur Urin & Uji Sensitivitas (Urine C&S)",
          "param": "Pertumbuhan bakteri tunggal ≥10^5 CFU/mL (atau ≥10^3 CFU/mL pada urin kateter)."
        },
        {
          "test": "Elektrolit & Gula Darah",
          "param": "Eksklusi dekompensasi hiperglikemik pemicu infeksi jamur."
        }
      ],
      "imaging": "USG Pelvis & Saluran Kemih untuk mengukur volume residu urin post-miksi (PVR) dan menyingkirkan divertikel uretra atau batu buli-buli.",
      "goldStandard": "Kultur Urin kuantitatif."
    },
    "pharmacotherapy": {
      "primaryDrugs": "1. Terapi Akut: Fosfomycin trometamol 3g dosis tunggal saset, atau Nitrofurantoin monohidrat 100mg 2x/hari selama 5 hari (jika eGFR >30). 2. Pencegahan Jangka Panjang: Estrogen vagina lokal topikal (Estriol krim 0.5mg).",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Hindari antibiotik profilaksis harian jangka panjang tanpa henti karena memicu resistensi bakteri kuman Multidrug-Resistant (ESBL / CRE) dan infeksi usus C. difficile yang mengancam nyawa lansia! Gunakan krim estrogen topikal sebagai lini pertama pemulihan flora alami.",
      "monitoring": "Kadar eGFR berkala dan hidrasi harian."
    },
    "clinicalNutrition": {
      "macroMicro": "Konsumsi D-Mannose (2 gram/hari) yang bekerja mengikat fimbria bakteri E. coli agar terbuang bersama urin, dan hidrasi teratur.",
      "recommendedFoods": "Jus cranberry murni tanpa gula tambahan, yogurt probiotik tanpa pemanis buatan, air kelapa muda segar kaya elektrolit.",
      "contraindicatedFoods": "Minuman berkafein, teh manis pekat, pemanis buatan aspartam yang mengiritasi mukosa kandung kemih."
    },
    "emergency": {
      "immediateTriggers": "Urosepsis / Pielonefritis Akut: Nyeri ketok pinggang belakang hebat (CVA tenderness positif), demam menggigil, tensi drop, delirium berat.",
      "firstAidHome": "Segera bawa ke instalasi gawat darurat rumah sakit untuk pemberian antibiotik intravena spektrum luas dan rehidrasi cairan infus."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan miksi terjadwal setiap 2.5 - 3 jam di siang hari; edukasi cara membasuh area intim dari DEPAN KE BELAKANG (bukan dari belakang ke depan) setelah buang air.",
      "homeModifications": "Gunakan celana dalam katun longgar yang menyerap keringat; hindari penggunaan sabun antiseptik beraroma wangi keras untuk mencuci vagina."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saluran Kemih <-> Sistem Saraf Pusat (Pemicu Utama Delirium Geriatri)",
      "biologicalMechanism": "Infeksi mukosa uretra dan vesika urinaria memicu pelepasan sitokin pro-inflamatori sistemik (IL-1β, IL-6, TNF-α) dalam jumlah besar. Sitokin ini menembus sawar darah-otak yang menipis pada lansia, mengaktifkan sel mikroglia serebral, dan memicu gangguan neurotransmisi kolinergik sentral secara akut. Akibatnya, lansia mengalami Delirium Hipoaktif (linglung mendadak, bingung, bicara melantur, atau tertidur terus-menerus) TANPA KELUHAN NYERI KENCING ATAU DEMAM.",
      "clinicalImpact": "Delirium akibat ISK sering disalahartikan keluarga sebagai penyakit pikun / demensia yang mendadak memburuk, menunda diagnosis antibiotik hingga terjadi sepsis sistemik fatal.",
      "prevention": "Tes urin lengkap dan kultur urin wajib dilakukan pada setiap lansia yang mendadak linglung atau perilakunya berubah dalam hitungan jam/hari; hidrasi cukup; estrogen topikal vagina pascamenopause untuk memulihkan keasaman mukosa."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Infectio Tractus Urinarii Recurrens / Atrophia Urogenitalis",
      "icd10": "N39.0 / N95.2",
      "latinTerms": [
        {
          "term": "Syndroma Genitourinarium Menopausis",
          "meaning": "Penipisan mukosa vulvovaginal dan uretra akibat penurunan tajam hormon estrogen pascamenopause."
        },
        {
          "term": "Depletio Lactobacilli",
          "meaning": "Hilangnya koloni bakteri baik Lactobacillus yang mempertahankan pH asam protektif di liang kewanitaan."
        },
        {
          "term": "Delirium Hypoactivum Secundarium",
          "meaning": "Manifestasi kebingungan mental mendadak tanpa demam akibat badai sitokin ISK menembus sawar darah-otak."
        },
        {
          "term": "Pollakisuria & Nycturia",
          "meaning": "Frekuensi buang air kecil yang sangat sering di siang hari dan sering terbangun kencing malam hari (>2-3 kali)."
        },
        {
          "term": "Bacteriuria Asymptomatica",
          "meaning": "Keberadaan koloni bakteri bermakna dalam urin tanpa disertai gejala disuria lokal (sering pada lansia)."
        }
      ]
    }
  },
  "stroke": {
    "pathophysiology": {
      "cellularMechanism": "Oklusi tromboemboli pada arteri serebral (Stroke Iskemik 85%) atau ruptur pembuluh darah mikroaneurisma Charcot-Bouchard (Stroke Hemoragik 15%) memutus perfusi oksigen dan glukosa ke jaringan parenkim otak. Dalam hitungan menit, pompa ion Na+/K+-ATPase sel neuron gagal, memicu depolarisasi anoksik masif, pelepasan glutamat eksitotoksik ke celah sinaps, influks kalsium intraseluler tak terkendali, aktivasi enzim kalpain dan fosfolipase, serta pembentukan radikal bebas ROS. Kerusakan meluas dari inti iskemik (ischemic core) yang nekrotik menuju area penumbra iskemik yang berpotensi diselamatkan.",
      "geriatricFactor": "Penurunan elastisitas vaskular serebral (lipohialinosis arterioler), penurunan cadangan perfusi kolateral otak, serta tingginya prevalensi fibrilasi atrium geriatri yang memicu kardioemboli masif.",
      "organImpact": "Kematian jutaan neuron per menit yang memicu defisit neurologis fokal permanen (hemiparesis, afasia, disfagia), edema serebri sitotoksik, herniasi unkus, dan kematian."
    },
    "geriatricSymptoms": {
      "classical": "Kelumpuhan separuh badan mendadak (hemiplegia), mulut mencong (asimetri wajah), bicara pelo/pelo atau tidak bisa bicara (afasia), baal separuh tubuh.",
      "atypicalGeriatric": "DELIRIUM HIPOAKTIF MENDADAK (lansia mendadak linglung, tidak responsif, atau tertidur terus menerus), serangan vertigo berat disertai hilangnya keseimbangan (stroke sirkulasi posterior/batang otak), jatuh mendadak tanpa sebab jelas (drop attacks), atau cegukan tak kunjung henti (singultus obstinat akibat lesi medula oblongata).",
      "whyDifferent": "Atrofi otak geriatri menyediakan ruang cadangan intrakranial sehingga tanda tekanan tinggi intrakranial (seperti nyeri kepala hebat) sering kali tidak muncul jelas di awal."
    },
    "staging": {
      "scoreName": "Skala Stroke National Institutes of Health (NIHSS) & Triase FAST",
      "stages": [
        {
          "level": "Stroke Ringan (NIHSS 1 - 4)",
          "criteria": "Defisit motorik atau sensorik minor, kesadaran penuh, bicara relatif jelas.",
          "risk": "Kandidat trombolisis IV / perawatan bangsal stroke akut, mortalitas rendah."
        },
        {
          "level": "Stroke Sedang (NIHSS 5 - 15)",
          "criteria": "Hemiparesis bermakna, afasia parsial, gangguan lapang pandang hemianopsia.",
          "risk": "Risiko komplikasi tirah baring (pneumonia, DVT), perlu neurorehabilitasi intensif."
        },
        {
          "level": "Stroke Berat (NIHSS 16 - 20) & Sangat Berat (>20)",
          "criteria": "Hemiplegia total, afasia global, penurunan kesadaran somnolen-sopor.",
          "risk": "Mortalitas tinggi, risiko edema serebri maligna dan herniasi otak; butuh ICU/Stroke Unit."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Gula Darah Sewaktu (GDS)",
          "param": "WAJIB CITO untuk menyingkirkan hipoglikemia yang meniru gejala stroke (stroke mimic)."
        },
        {
          "test": "Faal Hemostasis (PT/INR, aPTT)",
          "param": "Syarat mutlak sebelum terapi trombolisis r-tPA (INR harus ≤ 1.7)."
        },
        {
          "test": "Panel Kardiovaskular (Troponin, Lipid, EKG)",
          "param": "Deteksi fibrilasi atrium paroksismal dan komorbiditas infark miokard silent."
        }
      ],
      "imaging": "CT Scan Kepala Non-Kontras CITO (membedakan perdarahan vs iskemia dalam golden period <4.5 jam); MRI Diffusion-Weighted Imaging (DWI) untuk deteksi iskemia hiperakut dalam hitungan menit.",
      "goldStandard": "MRI Brain DWI / CT Angiografi Serebral."
    },
    "pharmacotherapy": {
      "primaryDrugs": "1. Fase Hiperakut (<4.5 jam): Alteplase (r-tPA) IV 0.9 mg/kgBB pada stroke iskemik tanpa kontraindikasi. 2. Fase Akut: Aspirin 80-160 mg/hari + Clopidogrel 75 mg/hari (Dual Antiplatelet 21 hari pertama pada TIA/stroke minor). 3. Atorvastatin 40-80 mg/hari untuk stabilisasi plak aterosklerotik.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI penurunan tekanan darah agresif mendadak di fase akut! Menurunkan tensi >15-20% dalam 24 jam pertama dapat memperluas infark penumbra iskemik akibat hipoperfusi otak! Hindari sedatif kuat yang mengaburkan pemantauan skor GCS kesadaran.",
      "monitoring": "Skor neurologis NIHSS serial, tekanan darah berkala, dan fungsi menelan via tes menelan gugus air (water swallow test)."
    },
    "clinicalNutrition": {
      "macroMicro": "Energi 25-30 kkal/kgBB/hari, protein 1.2-1.5 g/kgBB/hari untuk melawan katabolisme pascastroke; pasang selang NGT dalam 24-48 jam jika skrining disfagia gagal.",
      "recommendedFoods": "Makanan bertekstur bubur saring lembut atau cairan yang dikentalkan (thickened liquid) untuk mencegah cairan meluncur ke saluran napas; ikan kaya omega-3 DHA.",
      "contraindicatedFoods": "Cairan encer biasa (air putih bening tanpa pengental) pada penderita disfagia karena memicu refleks tersedak ke paru-paru; garam berlebih (>2 g/hari)."
    },
    "emergency": {
      "immediateTriggers": "Prinsip FAST (Face drooping, Arm weakness, Speech difficulty, Time to call ER) terjadi mendadak, penurunan kesadaran tiba-tiba, kejang, atau muntah proyektil.",
      "firstAidHome": "Posisikan kepala dan leher lurus elevasi 30 derajat; JANGAN BERI MINUM ATAU MAKAN APAPUN (risiko tersedak fatal); segera panggil ambulans atau bawa ke RS dengan fasilitas CT Scan 24 jam dalam Golden Period (<3 jam)."
    },
    "rehabilitation": {
      "physicalExercises": "Mobilisasi dini di tempat tidur dalam 24-48 jam (miring kiri-kanan berkala tiap 2 jam untuk cegah luka dekubitus); fisioterapi pasif dan aktif anggota gerak; terapi wicara-menelan.",
      "homeModifications": "Pasang pegangan dinding di samping tempat tidur dan kamar mandi; singkirkan karpet licin; sediakan kursi roda atau walker beroda."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saraf <-> Pernapasan & Otot Rangka",
      "biologicalMechanism": "Kerusakan pusat menelan di batang otak dan korteks motorik melumpuhkan otot faring dan laring (disfagia neurologis). Akibatnya, air liur, makanan, dan kuman lambung masuk ke trakea dan alveolus, memicu Pneumonia Aspirasi (penyebab kematian nomor satu pascastroke). Selain itu, hilangnya sinyal saraf motorik ke ekstremitas memicu atrofi otot disuse masif (Sarkopenia Akut) dalam hitungan minggu.",
      "clinicalImpact": "Pasien stroke yang tidak diskrining fungsi menelannya memiliki risiko 4 kali lipat mengalami gagal napas infeksi paru dan imobilitas permanen.",
      "prevention": "Wajib uji telan (Swallow Test) sebelum pasien diberi makan per oral pertama kali; pasang selang NGT jika batuk saat menelan; fisioterapi gerak pasif harian untuk menjaga massa otot."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Apoplexia Cerebri / Cerebrovascular Accident (CVA) / Ischemia Serebri",
      "icd10": "I63.9 / I61.9",
      "latinTerms": [
        {
          "term": "Penumbra Ischaemica",
          "meaning": "Zona jaringan parenkim otak di sekitar inti infark yang masih viabel dan dapat diselamatkan bila perfusi pulih cepat."
        },
        {
          "term": "Excitotoxicitas Glutamatergica",
          "meaning": "Pelepasan glutamat masif ke celah sinaps akibat anoksia yang memicu influks kalsium intraseluler toksik."
        },
        {
          "term": "Hemiparesis & Hemiplegia",
          "meaning": "Kelemahan parsial atau kelumpuhan motorik total pada separuh sisi tubuh kontralateral terhadap lesi otak."
        },
        {
          "term": "Aphasia Broca / Wernicke",
          "meaning": "Gangguan pusat bahasa motorik (sulit bicara artikulatif) atau sensorik (hilang pemahaman makna kata)."
        },
        {
          "term": "Dysphagia Neurogenica",
          "meaning": "Kelumpuhan koordinasi neuromuskular refleks menelan akibat lesi kortikobulbar atau nukleus batang otak."
        }
      ]
    }
  },
  "alzheimer-demensia": {
    "pathophysiology": {
      "cellularMechanism": "Akumulasi abnormal peptida amiloid-beta ekstraseluler membentuk plak senilis (neuritic plaques) berpadu dengan hiperfosforilasi protein tau intraseluler yang membentuk kekusutan neurofibriler (neurofibrillary tangles). Kerusakan berawal dari area hipokampus dan korteks entorhinal yang bertanggung jawab atas konsolidasi memori, lalu menyebar ke seluruh neokorteks. Terjadi degenerasi neuron kolinergik basal Forebrain (nucleus basalis Meynert), penurunan drastis neurotransmiter asetilkolin (ACh), hilangnya sinapsis sinaptik, dan aktivasi mikroglia kronis yang memicu neuroinflamasi destruktif.",
      "geriatricFactor": "Penurunan klirens glimfatik otak selama tidur pada lansia, disfungsi barier sawar darah otak, dan penurunan plastisitas sinapsis terkait usia.",
      "organImpact": "Atrofi kortikal serebral difus progresif dengan pembesaran ventrikel otak (ventriculomegaly), hilangnya fungsi eksekutif harian, kepikunan berat, hingga hilangnya otonomi hidup."
    },
    "geriatricSymptoms": {
      "classical": "Lupa ingatan jangka pendek baru (amnesia anterograd), mengulang-ulang pertanyaan yang sama, tersesat di tempat yang sudah sangat dikenal.",
      "atypicalGeriatric": "Sundowning Syndrome (gelisah, mondar-mandir, dan delirium memberat di sore hingga malam hari), agnosia (tidak mengenali wajah anak atau pasangan sendiri), perubahan kepribadian drastis (mudah curiga, menuduh barangnya dicuri orang), hilangnya inisiatif (apatis total).",
      "whyDifferent": "Kerusakan sirkuit prefrontal dan amigdala menumpulkan kendali emosi dan orientasi ruang-waktu lansia."
    },
    "staging": {
      "scoreName": "Skala Penilaian Kognitif Mini-Mental State Examination (MMSE) & CDR",
      "stages": [
        {
          "level": "Gangguan Kognitif Ringan (MCI / MMSE 21 - 25)",
          "criteria": "Lupa nama atau janji temu, masih mampu mandiri dalam aktivitas dasar harian (ADL).",
          "risk": "Konversi ke demensia sekitar 10-15% per tahun; butuh stimulasi kognitif aktif."
        },
        {
          "level": "Demensia Derajat Sedang (MMSE 11 - 20)",
          "criteria": "Butuh bantuan memilih pakaian, tersesat di lingkungan luar, disorientasi tanggal/musim.",
          "risk": "Risiko berkeliaran ke luar rumah (wandering) dan bahaya kebakaran dapur; butuh pendamping keluarga 24 jam."
        },
        {
          "level": "Demensia Derajat Berat (MMSE 0 - 10)",
          "criteria": "Inkontinensia urin dan fekal, kehilangan kemampuan berbicara, tidak mampu makan sendiri.",
          "risk": "Tirah baring total (bedridden), komplikasi malnutrisi berat dan infeksi pneumonia aspirasi."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Skrining Demensia Reversibel (B12 & TSH)",
          "param": "WAJIB: Eksklusi defisiensi vitamin B12 dan hipotiroidisme yang sering meniru gejala kepikunan."
        },
        {
          "test": "Elektrolit & Fungsi Ginjal/Hepar",
          "param": "Menyingkirkan ensefalopati metabolik uremik atau hepatikum."
        },
        {
          "test": "Biomarker Cairan Serebrospinal / Darah (Aβ42/40, p-tau181)",
          "param": "Rasio Aβ42/40 menurun dan p-tau meningkat tajam (baku konfirmasi molekuler modern)."
        }
      ],
      "imaging": "MRI Otak Volumetrik: Atrofi lobus temporalis medial dan hipokampus bilateral (MTA Score ≥ 2-3); PET Scan Otak FDG: Hipometabolisme temporoparietal bilateral.",
      "goldStandard": "Evaluasi neuropsikologi komprehensif berpadu dengan MRI hipokampus."
    },
    "pharmacotherapy": {
      "primaryDrugs": "1. Inhibitor Kolinesterase (Donepezil 5-10 mg 1x/hari malam ATAU Rivastigmine patch transdermal) untuk meningkatkan kadar asetilkolin. 2. Antagonis Reseptor NMDA: Memantine 10-20 mg/hari pada derajat sedang-berat untuk melindungi neuron dari eksitotoksisitas glutamat.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI KERAS obat antikolinergik (misal antihistamin CTM, antipsikotik sedatif lama, obat batuk pilek bebas) karena obat antikolinergik MELAWAN EFEK OBAT ALZHEIMER dan MEMPERCEPAT KEMUNDURAN OTAK SECARA DRASTIS! Hindari antipsikotik tipikal (Haloperidol) dosis rutin untuk mengatasi gelisah karena meningkatkan mortalitas kardiovaskular lansia.",
      "monitoring": "Denyut jantung (Donepezil dapat memicu bradikardia dan sinkop) serta evaluasi skor MMSE tiap 6 bulan."
    },
    "clinicalNutrition": {
      "macroMicro": "Pola diet MIND / Mediterania: Kaya antioksidan polifenol, asam folat, vitamin E, asam lemak tak jenuh ganda PUFA (DHA & EPA) untuk integritas membran neuron.",
      "recommendedFoods": "Buah beri (blueberry, stroberi), kacang kenari (walnut), ikan kembung/salmon, minyak zaitun extra virgin, sayuran hijau gelap (bayam, brokoli).",
      "contraindicatedFoods": "Gula pasir berlebih, makanan cepat saji berlemak jenuh tinggi (lemak jenuh memperparah penumpukan plak amiloid di otak)."
    },
    "emergency": {
      "immediateTriggers": "Pasien hilang/berkeliaran di luar rumah (wandering), gaduh gelisah ekstrem membahayakan diri sendiri atau orang lain, penolakan total makan dan minum selama >24 jam.",
      "firstAidHome": "Jaga nada suara tetap tenang dan ramah (jangan mendebat atau menyalahkan lansia); alihkan perhatian ke foto keluarga atau musik lembut favorit; pastikan pintu pagar terkunci aman."
    },
    "rehabilitation": {
      "physicalExercises": "Jalan pagi santai 30 menit setiap hari (meningkatkan faktor neurotropik BDNF otak); latihan stimulasi otak (mengingat foto keluarga, menyusun puzzle sederhana, mendengarkan lagu nostalgia).",
      "homeModifications": "Beri label tulisan besar pada pintu kamar mandi dan lemari; pasang gelang identitas berisi nama dan nomor telepon keluarga di tangan lansia; kunci kompor gas dengan aman."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saraf <-> Saluran Pencernaan (Gut-Brain Axis) & Urologi",
      "biologicalMechanism": "Penurunan asetilkolin dan neurodegenerasi batang otak mengganggu persarafan otonom saraf vagus ke saluran cerna, menyebabkan perlambatan motilitas usus parah (Sembelit Kronis Geriatri). Selain itu, hilangnya kontrol kortikal lobus frontal terhadap pusat miksi sakral memicu ketidakmampuan menahan kencing (Inkontinensia Urin Urgensi & Fungsional). Sembelit dan feses yang membatu di usus dapat menekan leher kandung kemih, memperburuk retensi urin dan memicu infeksi saluran kemih (ISK) rekuren.",
      "clinicalImpact": "Infeksi saluran kemih atau sembelit pada lansia Alzheimer sering kali memicu 'Delirium Bertingkat' yang membuat pasien mendadak berhalusinasi atau mengamuk tanpa keluhan fisik yang jelas.",
      "prevention": "Jaga mikrobioma usus dengan serat dan cairan cukup; terapkan jadwal buang air kecil rutin tiap 2 jam (toilet training) tanpa menunggu lansia meminta."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Morbus Alzheimer (AD) / Dementia Senilis Degenerativa",
      "icd10": "G30.9 / F00.9",
      "latinTerms": [
        {
          "term": "Depositiones Beta-Amyloidi",
          "meaning": "Akumulasi plak senilis ekstraseluler peptida Aβ42 yang merusak transmisi sinaptik antar-neuron."
        },
        {
          "term": "Neurofibrillary Tangles (NFT)",
          "meaning": "Kekusutan benang sitoskeleton intraseluler akibat hiperfosforilasi abnormal protein tau mikrotubulus."
        },
        {
          "term": "Atrophia Corticalis Hipocampalis",
          "meaning": "Penyusutan progresif lobus temporalis medial dan hipokampus pusat konsolidasi memori."
        },
        {
          "term": "Syndroma Crepuscularis (Sundowning)",
          "meaning": "Eksaserbasi delirium, agitasi motorik, dan kebingungan neuropsikiatri saat menjelang matahari terbenam."
        },
        {
          "term": "Agnosia & Apraxia",
          "meaning": "Hilangnya kemampuan mengenali wajah/objek familiar dan ketidakmampuan menjalankan gerakan motorik purposif terampil."
        }
      ]
    }
  },
  "parkinson": {
    "pathophysiology": {
      "cellularMechanism": "Kematian progresif neuron dopaminergik pada area Substansia Nigra pars kompakta di batang otak tengah. Patologi seluler ditandai dengan pembentukan inklusi protein intraseluler berupa Lewy Bodies yang berkomposisi utama agregat protein alfa-sinuklein terlipat abnormal. Hilangnya dopamin mengacaukan keseimbangan sirkuit motorik Ganglia Basalis (jalur langsung eksitatori vs jalur tidak langsung inhibitori), menyebabkan hipoaktivitas korteks motorik yang memicu perlambatan gerak, kekakuan tonus otot, dan tremor ritmis saat istirahat.",
      "geriatricFactor": "Penurunan alami jumlah neuron dopaminergik sebesar 5-8% per dekade usia lanjut dan kerentanan mitokondria neuron terhadap stres oksidatif.",
      "organImpact": "Gangguan kendali motorik halus dan kasar, instabilitas postur tubuh pemicu jatuh fatal, disartria, dan disfagia orofaringeal progresif."
    },
    "geriatricSymptoms": {
      "classical": "Tremor ritmis saat istirahat (resting tremor 'pill-rolling' 4-6 Hz), kekakuan otot seperti roda gigi (cogwheel rigidity), kelambatan gerakan (bradikinesia), ekspresi wajah kaku seperti topeng (mask-like face).",
      "atypicalGeriatric": "Langkah kaki pendek terseret-seret yang mendadak membeku di tempat (freezing of gait), hilangnya ayunan lengan saat berjalan, suara mengecil parau (hipofonia), tulisan tangan mengecil drastis (mikrografia), gangguan tidur REM (berteriak dan menendang saat mimpi), serta hipotensi ortostatik (pusing melayang saat berdiri).",
      "whyDifferent": "Kerusakan neuron otonom medula spinalis mendahului gejala motorik, memicu disfungsi tekanan darah dan keringat."
    },
    "staging": {
      "scoreName": "Klasifikasi Derajat Keparahan Hoehn and Yahr (H&Y)",
      "stages": [
        {
          "level": "Stadium 1 (Gejala Unilateral)",
          "criteria": "Tremor atau kaku hanya pada satu sisi tubuh, fungsi kemandirian harian masih utuh.",
          "risk": "Respons sangat baik terhadap terapi levodopa; kualitas hidup prima."
        },
        {
          "level": "Stadium 2 & 3 (Gejala Bilateral & Instabilitas Postur)",
          "criteria": "Gejala menyerang kedua sisi tubuh; refleks keseimbangan mulai terganggu tapi belum butuh bantuan fisik.",
          "risk": "Risiko jatuh meningkat nyata saat berputar arah; butuh modifikasi lingkungan rumah."
        },
        {
          "level": "Stadium 4 & 5 (Ketergantungan Berat & Kursi Roda)",
          "criteria": "Sangat sulit berdiri sendiri, tidak mampu berjalan tanpa bantuan alat atau harus di kursi roda/tempat tidur.",
          "risk": "Risiko fraktur panggul fatal, ulkus dekubitus, dan komplikasi infeksi paru."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Pemeriksaan Panel Darah Lengkap & Elektrolit",
          "param": "Eksklusi gangguan elektrolit atau disfungsi tiroid."
        },
        {
          "test": "Skrining Tembaga Serum & Seruloplasmin",
          "param": "Eksklusi penyakit Wilson pada kasus onset sebelum usia 60 tahun."
        }
      ],
      "imaging": "MRI Otak 3-Tesla (eksklusi hidrosefalus tekanan normal/NPH atau stroke lakunar ganglia basalis); DaTscan SPECT (Single-Photon Emission CT) menunjukkan hilangnya transporter dopamin presinaptik di striatum.",
      "goldStandard": "Diagnosis klinis berbasis kriteria UK Parkinson's Disease Society Brain Bank dengan respons positif nyata terhadap Levodopa."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Levodopa + Benserazide ATAU Levodopa + Carbidopa (lini pertama baku emas). Agonis dopamin (Pramipexole) digunakan sangat hati-hati pada usia lanjut karena efek samping halusinasi.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI antipsikotik antagonis reseptor D2 tipikal (seperti Haloperidol, Metoclopramide / Primperan untuk mual) karena OBAT-OBAT INI MEMBLOKIR DOPAMIN DAN AKAN MEMBUAT PASIEN PARKINSON MENGALAMI KAKU OTOT TOTAL HINGGA HENTI GERAK (Parkinsonian Crisis)! Gunakan Domperidone untuk mual, dan Quetiapine dosis sangat rendah bila ada halusinasi.",
      "monitoring": "Waspadai fluktuasi motorik 'on-off' dan gerakan involunter diskinesia akibat akumulasi levodopa jangka panjang."
    },
    "clinicalNutrition": {
      "macroMicro": "Interaksi Protein-Levodopa: Asam amino dari makanan protein bersaing dengan Levodopa untuk diserap di usus halus dan menembus sawar darah otak.",
      "recommendedFoods": "Minum obat Levodopa 30-45 menit SEBELUM MAKAN atau 1 jam setelah makan; konsumsi serat tinggi dari pepaya matang dan oatmeal untuk mengatasi sembelit; air putih 1.5 - 2 liter/hari.",
      "contraindicatedFoods": "Makan steak daging merah atau susu tinggi protein bersamaan persis saat menelan pil Levodopa (akan menggagalkan penyerapan obat)."
    },
    "emergency": {
      "immediateTriggers": "Krisis Akinesia Akut / Sindrom Neuroleptik Maligna: Kekakuan otot ekstrem mendadak seperti patung, demam tinggi mendadak, perubahan kesadaran, atau tidak bisa menelan sama sekali.",
      "firstAidHome": "Jangan menghentikan obat Parkinson secara tiba-tiba (abrupt withdrawal); segera bawa ke IGD rumah sakit."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan berjalan berirama (auditory cueing dengan musik metronom atau garis lantai visual untuk mengatasi freezing of gait); latihan peregangan fleksibilitas tulang belakang; latihan bicara kencang (LSVT LOUD).",
      "homeModifications": "Pasang garis plester kontras di lantai lorong rumah; pasang handrail kokoh di kamar mandi; gunakan kursi dengan sandaran tegak dan bantal dudukan keras agar mudah berdiri."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saraf <-> Sistem Otot & Saluran Pencernaan",
      "biologicalMechanism": "Hilangnya dopamin otak merusak koordinasi motorik, memicu kekakuan otot menyeluruh (rigiditas otot) yang mempercepat pengecilan massa otot akibat kurang gerak (Sarkopenia Sekunder). Di saluran cerna, patologi Lewy Body alfa-sinuklein sering kali bermula di pleksus saraf usus (nervus vagus) bertahun-tahun sebelum menyerang otak, memicu Sembelit Kronis Atonik yang sangat parah dan gangguan menelan (Disfagia) yang meningkatkan risiko Pneumonia Aspirasi.",
      "clinicalImpact": "Kekakuan otot berpadu dengan ketidakstabilan saraf keseimbangan membuat penderita Parkinson memiliki risiko jatuh dan patah tulang leher paha hingga 5 kali lipat lebih tinggi.",
      "prevention": "Kombinasi senam fleksibilitas otot teratur, konsumsi serat dan air terukur untuk menjaga fungsi usus, serta evaluasi rutin kemampuan menelan makanan."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Morbus Parkinson / Paralysis Agitans / Syndroma Extrapyramidale",
      "icd10": "G20",
      "latinTerms": [
        {
          "term": "Corpora Lewy (Inclusio Alpha-Synuclein)",
          "meaning": "Agregasi inklusi sitoplasma neuron berupa protein alfa-sinuklein terlipat toksik di Substansia Nigra."
        },
        {
          "term": "Bradikinesia & Akinesia",
          "meaning": "Perlambatan ekstrem dalam menginisiasi dan mengeksekusi gerakan volunter tubuh sehari-hari."
        },
        {
          "term": "Rigiditas Roda Gigi (Cogwheel Rigidity)",
          "meaning": "Tahanan hipertonia otot yang tersentak-sentak ritmis saat anggota gerak digerakkan secara pasif."
        },
        {
          "term": "Tremor Quiescens (Resting Tremor)",
          "meaning": "Gemetar ritmis 4-6 Hz pada tangan saat istirahat yang mereda sesaat ketika tangan digerakkan sadar."
        },
        {
          "term": "Hypomimia (Facies Amimica)",
          "meaning": "Ekspresi wajah kaku tanpa mimik ekspresi emosi (mask face) akibat hipokinesia otot ekspresi wajah."
        }
      ]
    }
  },
  "neuropati-perifer": {
    "pathophysiology": {
      "cellularMechanism": "Hiperglikemia kronis dan penuaan mikrovaskular mengaktifkan jalur poliol (akumulasi sorbitol intraseluler neuron), penumpukan Advanced Glycation End-products (AGEs), aktivasi Protein Kinase C (PKC), dan lonjakan stres oksidatif mitokondria. Hal ini merusak selubung mielin dan akson saraf perifer (aksonopati distal 'dying-back'). Vasokonstriksi dan penebalan membrana basalis pembuluh darah kapiler pemberi makan saraf (vasa nervorum) memicu iskemia saraf fokal, memutus hantaran impuls saraf sensorik, motorik, dan otonom pada ekstremitas terjauh (kaki dan tangan).",
      "geriatricFactor": "Penurunan kepadatan serat saraf epidermal intraepitelial dan penurunan kecepatan hantar saraf (KHS) hingga 15-20% pada usia di atas 70 tahun.",
      "organImpact": "Hilangnya sensasi protektif kaki (mati rasa), atrofi otot intrinsik telapak kaki (claw toes), pembentukan kapalan tebal (kalus), ulkus diabetik kronis, osteomielitis, dan risiko amputasi tungkai."
    },
    "geriatricSymptoms": {
      "classical": "Sensasi kesemutan, rasa kebas tebal seperti memakai kaus kaki tebal (glove and stocking distribution), nyeri menusuk-nusuk atau rasa terbakar (burning feet) yang memburuk di malam hari.",
      "atypicalGeriatric": "Hilangnya sensasi keseimbangan saat memejamkan mata atau saat mandi (sensory ataxia), kelemahan mengangkat ujung jempol kaki sehingga kaki sering tersandung ujung lantai (foot drop), kulit telapak kaki sangat kering pecah-pecah tanpa keringat sama sekali (neuropati otonom sudorimotor), atau luka borok yang sudah bernanah tanpa terasa sakit sama sekali.",
      "whyDifferent": "Kerusakan serabut saraf tipe A-alfa dan A-beta menghilangkan propriosepsi (rasa posisi sendi di ruang)."
    },
    "staging": {
      "scoreName": "Skala Skrining Neuropati Michigan (MNSI) & Klasifikasi Toronto",
      "stages": [
        {
          "level": "Neuropati Subklinis",
          "criteria": "Tanpa keluhan gejala, namun uji refleks tendon Achilles menurun atau penurunan sensasi getar tuning fork 128 Hz.",
          "risk": "Perlu edukasi dini perawatan kaki mandiri dan kontrol gula darah ketat."
        },
        {
          "level": "Neuropati Simptomatik Ringan-Sedang",
          "criteria": "Keluhan kesemutan, baal, nyeri terbakar intermiten, uji monofilamen 10g gagal di 1-2 titik.",
          "risk": "Risiko terbentuknya luka gesekan sepatu tanpa disadari; butuh alas kaki ortotik khusus."
        },
        {
          "level": "Neuropati Berat dengan Komplikasi",
          "criteria": "Hilangnya sensasi protektif total (LOPS), deformitas kaki Charcot arthropathy, riwayat ulkus/amputasi.",
          "risk": "Risiko osteomielitis infeksi tulang dan amputasi mayor ekstremitas bawah."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "HbA1c & Glukosa Darah Puasa/2 Jam PP",
          "param": "Evaluasi kendali glikemik pemicu kerusakan mikrovaskular."
        },
        {
          "test": "Vitamin B12 Serum & Asam Metilmalonat",
          "param": "Eksklusi neuropati akibat defisiensi vitamin B12 (terutama pada lansia pengguna Metformin jangka panjang)."
        },
        {
          "test": "Fungsi Tiroid (TSH) & Kreatinin",
          "param": "Eksklusi neuropati uremik atau hipotiroid."
        }
      ],
      "imaging": "Uji Elektromiografi (EMG) dan Kecepatan Hantar Saraf (KHS / Nerve Conduction Velocity) mengonfirmasi penurunan amplitudo potensial aksi sensorik (SNAP).",
      "goldStandard": "Pemeriksaan Fisik Kaki Komprehensif (Uji Semmes-Weinstein Monofilament 10-gram + Garputala 128 Hz)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "1. Terapi Nyeri Neuropatik: Pregabalin 50-75 mg/hari (titrasi perlahan) ATAU Gabapentin 100-300 mg/hari ATAU Duloxetine 30-60 mg/hari. 2. Neuroprotektor: Vitamin B kompleks terarah (B1, B6, B12 metilkobalamin) dan Asam Alfa Lipoat (ALA 600 mg/hari).",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI antispasmodik atau antidepresan trisiklik dosis tua (seperti Amitriptyline) untuk nyeri neuropatik pada lansia karena efek antikolinergik kuat (memicu retensi urin, glaukoma akut, hipotensi ortostatik, dan jatuh)! Hindari analgesik narkotik jangka panjang.",
      "monitoring": "Evaluasi eGFR ginjal (dosis Pregabalin dan Gabapentin WAJIB diturunkan sesuai klirens ginjal lansia) dan inspeksi visual telapak kaki setiap hari."
    },
    "clinicalNutrition": {
      "macroMicro": "Kontrol glikemik stabil: Karbohidrat kompleks indeks glikemik rendah, mikronutrien antioksidan (asam alfa lipoat, seng, magnesium).",
      "recommendedFoods": "Ikan kembung, telur rebus, bayam hijau, kacang almond, alpukat, beras merah pulen berserat.",
      "contraindicatedFoods": "Gula pasir murni, kue manis basah, sirup manis, minuman bersoda (lonjakan glukosa akut memicu kerusakan membran sel schwann saraf)."
    },
    "emergency": {
      "immediateTriggers": "Ditemukan luka tusuk paku/benda tajam atau luka borok hitam berbau busuk di telapak kaki, kaki bengkak merah hangat menjalar ke betis (selulitis/flegmon), demam menggigil.",
      "firstAidHome": "JANGAN mencuci luka dengan alkohol atau air panas; tutup luka dengan kassa steril kering; segera bawa ke klinik luka diabetik atau IGD rumah sakit untuk debridemen."
    },
    "rehabilitation": {
      "physicalExercises": "Senam kaki diabetes rutin (gerakan memutar pergelangan kaki, mencengkeram koran dengan jari kaki untuk melatih otot intrinsik kaki); latihan keseimbangan dengan berpegangan kursi.",
      "homeModifications": "Gunakan sandal berbusa tebal empuk BAHKAN DI DALAM RUMAH (jangan pernah bertelanjang kaki di atas ubin); periksa bagian dalam sepatu sebelum dipakai; sediakan cermin di lantai untuk melihat telapak kaki."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saraf Tepi <-> Otot Rangka & Mobilitas",
      "biologicalMechanism": "Hilangnya sensasi sensorik posisi kaki (proprioseptif) membuat otak tidak mengetahui orientasi pijakan kaki di lantai secara presisi. Hal ini berpadu dengan kelemahan otot intrinsik kaki dan betis akibat denervasi saraf motorik, merusak refleks keseimbangan dinamis lansia. Lansia menjadi sangat mudah tersandung ujung karpet atau lantai licin, memicu Jatuh Fatal yang berakibat patah tulang panggul dan tirah baring permanen.",
      "clinicalImpact": "Neuropati perifer adalah penyumbang lebih dari 40% kasus jatuh pada pasien geriatri dengan diabetes melitus.",
      "prevention": "Pemeriksaan monofilamen kaki berkala setiap 6 bulan, pemakaian alas kaki khusus berujung lebar dan sol empuk, serta latihan stabilitas proprioseptif terarah."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Polyneuropathia Peripherica Diabetica / Axonopathia Distalis",
      "icd10": "G62.9 / E11.40",
      "latinTerms": [
        {
          "term": "Ischaemia Vasa Nervorum",
          "meaning": "Penyempitan dan oklusi mikrovaskular kapiler arteri kecil yang memberi makan selubung serabut saraf."
        },
        {
          "term": "Paresthesia & Hypesthesia",
          "meaning": "Sensasi kesemutan abnormal atau penurunan sensitivitas rasa raba protektif pada kulit tungkai."
        },
        {
          "term": "Allodynia Neuropathica",
          "meaning": "Sensasi nyeri hebat yang terpicu oleh stimulus non-nyeri (seperti sentuhan lembut sprei kasur pada kaki)."
        },
        {
          "term": "Ataxia Sensorica",
          "meaning": "Kehilangan keseimbangan berjalan akibat putusnya persepsi proprioseptif posisi sendi dari telapak kaki ke otak."
        },
        {
          "term": "Arthropathia Neurogenica (Charcot Foot)",
          "meaning": "Kerusakan destruktif sendi dan tulang telapak kaki tanpa nyeri akibat mati rasa saraf perifer kronis."
        }
      ]
    }
  },
  "sarkopenia": {
    "pathophysiology": {
      "cellularMechanism": "Penyusutan massa, kualitas, dan kekuatan otot rangka terkait usia (Sarkopenia Primer). Terjadi ketidakseimbangan antara sintesis protein otot (anabolisme) dan degradasi protein otot (katabolisme). Faktor pemicu meliputi penurunan hormon anabolik (testosteron, GH, IGF-1), resistensi anabolik otot terhadap asupan protein makanan, disfungsi bioenergetika mitokondria serat otot, apoptosis miosit, hilangnya motoneuron alfa korda spinalis, serta infiltrasi lemak intramuskular (miosteatosis). Serat otot tipe II (fast-twitch fibres yang bertanggung jawab atas kekuatan ledak dan koreksi jatuh) menyusut dan digantikan oleh jaringan ikat fibrosa.",
      "geriatricFactor": "Penurunan massa otot 1-2% per tahun dan penurunan kekuatan otot 3% per tahun setelah usia 60 tahun; inaktivitas fisik (sedentary lifestyle) mempercepat kerusakan hingga 5 kali lipat.",
      "organImpact": "Sindrom Kerapuhan (Frailty), hilangnya kemandirian harian (disabilitas mobilitas), penurunan kapasitas metabolik pembuangan glukosa, dan risiko kematian dini."
    },
    "geriatricSymptoms": {
      "classical": "Tubuh tampak kurus kering dengan otot lengan dan paha yang mengendur menggelambir, sulit membuka tutup toples, tidak kuat menjinjing belanjaan ringan.",
      "atypicalGeriatric": "Berjalan sangat lambat tertatih-tatih (kecepatan jalan <0.8 m/detik), membutuhkan bantuan dorongan kedua tangan pada lutut untuk bisa berdiri dari kursi (chair stand test gagal), kelelahan ekstrem yang tidak pulih setelah istirahat (fatigue kronis), sering terpeleset dan jatuh berulang tanpa pusing.",
      "whyDifferent": "Penurunan kekuatan otot mendahului penyusutan ukuran fisik otot secara kasat mata."
    },
    "staging": {
      "scoreName": "Konsensus Kelompok Kerja Sarkopenia Eropa (EWGSOP2)",
      "stages": [
        {
          "level": "Probable Sarcopenia (Dicurigai)",
          "criteria": "Kekuatan genggaman tangan (Handgrip Strength) rendah (<27 kg pada pria, <16 kg pada wanita) ATAU chair stand test >15 detik.",
          "risk": "Indikasi intervensi latihan beban dan nutrisi protein segera."
        },
        {
          "level": "Confirmed Sarcopenia (Terkonfirmasi)",
          "criteria": "Kekuatan otot rendah DISERTAI massa otot rendah (dikonfirmasi via BIA atau DEXA scan).",
          "risk": "Risiko disabilitas fisik nyata dan gangguan metabolik resistensi insulin."
        },
        {
          "level": "Severe Sarcopenia (Sarkopenia Berat)",
          "criteria": "Kekuatan otot rendah + massa otot rendah + performa fisik buruk (kecepatan jalan ≤ 0.8 m/detik).",
          "risk": "Sindrom Frailty penuh; risiko jatuh, fraktur tulang panggul, rawat inap, dan mortalitas tinggi."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Albumin & Prealbumin Serum",
          "param": "Evaluasi status nutrisi protein visceral (albumin <3.5 g/dL menandakan malnutrisi kronis)."
        },
        {
          "test": "Kadar Vitamin D 25(OH)D",
          "param": "Kekurangan vitamin D (<20 ng/mL) melemahkan kekuatan kontraksi serat otot rangka."
        },
        {
          "test": "Kreatinin Serum & Cystatin-C",
          "param": "Perhitungan rasio Kreatinin/Cystatin C sebagai penanda massa otot."
        }
      ],
      "imaging": "Dual-energy X-ray Absorptiometry (DEXA) mengukur Appendicular Skeletal Muscle Mass (ASMM); Bioelectrical Impedance Analysis (BIA) portabel; USG Otot Kuadrisep untuk mengukur ketebalan m. vastus lateralis.",
      "goldStandard": "DEXA Scan Tubuh Total + Dinamometri Handgrip."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Hingga saat ini TIDAK ADA obat farmakologis kimiawi tunggal yang disetujui menggantikan latihan fisik. 1. Suplementasi Vitamin D3 (1000 - 2000 IU/hari) jika kadar serum rendah. 2. Terapi substitusi asam amino rantai cabang (BCAA) kaya Leusin.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI pemberian steroid anabolik sembarangan pada lansia karena memicu toksisitas hepar, retensi cairan, hipertrofi prostat, dan serangan jantung! Hindari tirah baring (bed rest) berkepanjangan tanpa indikasi medis mendesak karena tirah baring 3 hari menghilangkan massa otot setara 10 tahun penuaan alami!",
      "monitoring": "Evaluasi kekuatan genggaman tangan berkala tiap 3 bulan dan berat badan tanpa lemak."
    },
    "clinicalNutrition": {
      "macroMicro": "Protein Tinggi: 1.2 hingga 1.5 gram per kg berat badan per hari (dibagi rata minimal 25-30 gram protein per waktu makan untuk memicu sintesis protein otot via stimulasi mTORC1). Suplementasi Asam Amino Leusin 2.5-3 gram/kali makan.",
      "recommendedFoods": "Putih telur ayam rebus, dada ayam fillet kukus, ikan air tawar/laut, tempe dan tahu kukus, susu whey protein khusus geriatri.",
      "contraindicatedFoods": "Diet rendah protein ekstrem, asupan karbohidrat olahan berlebih tanpa sumber protein yang memadai."
    },
    "emergency": {
      "immediateTriggers": "Pasien jatuh di lantai dan tidak mampu bangkit sendiri selama berjam-jam (long-lie), dicurigai fraktur tulang leher paha (tungkai memendek dan berputar ke luar), atau tanda dehidrasi/rhabdomyolysis.",
      "firstAidHome": "Jangan langsung menarik paksa pasien berdiri; periksa apakah ada nyeri hebat di panggul; selimuti tubuh agar tidak hipotermia; segera hubungi tim medis gawat darurat."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan Penguatan Beban Progresif (Progressive Resistance Training / PRT) 2-3 kali seminggu (misal: squat dengan berpegangan meja, leg extensions dengan resistance band karet elastis); latihan keseimbangan berdiri satu kaki.",
      "homeModifications": "Tinggikan dudukan kloset dengan toilet seat riser; sediakan kursi berbusa dengan sandaran lengan kokoh; pasang lantai antilicin di seluruh ruangan."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Otot Rangka <-> Pankreas (Diabetes) & Hati",
      "biologicalMechanism": "Otot rangka adalah organ metabolik terbesar penampung lebih dari 75-80% pembuangan glukosa yang dirangsang insulin dalam tubuh. Ketika massa otot menyusut drastis pada sarkopenia, wadah penampung gula darah hilang, memicu lonjakan hiperglikemia puasa dan Resistensi Insulin Berat yang memicu Diabetes Melitus Tipe 2. Kelebihan glukosa yang tidak bisa diserap otot kemudian dialihkan ke hepar, diubah menjadi trigliserida, dan memicu Perlemakan Hati Metabolik (MASLD).",
      "clinicalImpact": "Lansia dengan sarkopenia memiliki risiko 3 kali lipat lebih tinggi mengalami diabetes melitus tipe 2 yang sulit terkontrol meskipun porsi makannya sedikit.",
      "prevention": "Latihan beban teratur untuk mempertahankan 'wadah gula' otot rangka berpadu dengan asupan protein berleusin tinggi."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Sarcopenia Primaria Geriatrica / Syndroma Frailty Senilis",
      "icd10": "M62.84 / R54",
      "latinTerms": [
        {
          "term": "Atrophia Myofibrillarum Typus II",
          "meaning": "Penyusutan selektif serabut otot rangka cepat (tipe IIb/fast-twitch) penopang kekuatan dan reaksi koreksi jatuh."
        },
        {
          "term": "Resistentia Anabolica Muscularis",
          "meaning": "Ketumpulan respons sintesis protein otot rangka miosit terhadap asam amino makanan dan stimulasi insulin."
        },
        {
          "term": "Myosteatosis Intramuscularis",
          "meaning": "Infiltrasi lemak ektopik yang menyusup di antara berkas serat otot sehingga menurunkan kualitas kontraksi otot."
        },
        {
          "term": "Dynapenia",
          "meaning": "Kehilangan kekuatan dan tenaga ledak otot fungsional yang terjadi lebih cepat dibanding penyusutan ukuran fisik otot."
        },
        {
          "term": "Syndroma Fragilitas (Frailty)",
          "meaning": "Sindrom kerapuhan fisiologis geriatri dengan kerentanan ekstrem terhadap stresor fisik minor."
        }
      ]
    }
  },
  "obesitas-viseral": {
    "pathophysiology": {
      "cellularMechanism": "Akumulasi lemak berlebih di dalam rongga perut yang membungkus organ dalam (mesenterium, omentum, dan sekitar hepar/ginjal). Adiposit viseral mengalami hipertrofi patologis, hipoksia seluler, dan infiltrasi makrofag pro-inflamasi M1. Jaringan lemak viseral berubah menjadi organ endokrin toksik (Adiposopati) yang memproduksi sitokin pro-inflamasi berlebih (TNF-α, IL-6, Resistin) dan menurunkan hormon pelindung Adiponektin. Aliran lipolisis lemak viseral melepaskan Asam Lemak Bebas (Free Fatty Acids - FFA) dalam jumlah masif langsung ke sistem sirkulasi vena porta hepatika, membanjiri sel hepar dengan racun lipid (Lipotoksisitas).",
      "geriatricFactor": "Pergeseran redistribusi lemak tubuh pada lansia dari bawah kulit (subkutan) menuju rongga perut dalam (viseral) akibat penurunan hormon seks (estrogen/testosteron) dan penurunan metabolisme basal.",
      "organImpact": "Perlemakan hati kronis (MASLD), aterosklerosis pembuluh darah koroner dan serebral, sleep apnea obstruktif, dan inflamasi sistemik derajat rendah kronis (inflammaging)."
    },
    "geriatricSymptoms": {
      "classical": "Perut buncit membuncit padat (lingkar pinggang >90 cm pada pria Asia, >80 cm pada wanita Asia), napas memburu dan terengah-engah saat jalan datar, dengkuran keras saat tidur.",
      "atypicalGeriatric": "Mengantuk berat di siang hari (daytime somnolence), sering terbangun tercekik di malam hari (Obstructive Sleep Apnea), kaki bengkak akibat tekanan rongga perut pada vena cava inferior, hipertensi yang kebal obat (hipertensi resisten).",
      "whyDifferent": "Banyak lansia memiliki berat badan normal pada timbangan (IMT normal) namun perutnya buncit menggelambir (Normal-Weight Visceral Obesity)."
    },
    "staging": {
      "scoreName": "Kriteria Sindrom Metabolik NCEP-ATP III & Rasio Lingkar Pinggang",
      "stages": [
        {
          "level": "Obesitas Viseral Terisolasi",
          "criteria": "Lingkar pinggang >90 cm (pria) atau >80 cm (wanita), tekanan darah dan gula darah masih normal.",
          "risk": "Risiko transformasi ke sindrom metabolik dalam 3-5 tahun; butuh intervensi gaya hidup."
        },
        {
          "level": "Sindrom Metabolik Penuh (MetS)",
          "criteria": "Lingkar pinggang abnormal DISERTAI minimal 2 kriteria: Trigliserida ≥150 mg/dL, HDL rendah, Tensi ≥130/85 mmHg, Gula Darah Puasa ≥100 mg/dL.",
          "risk": "Risiko Penyakit Jantung Koroner dan Stroke Iskemik meningkat 2-3 kali lipat; risiko fatty liver sirosis."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Profil Lipid Lengkap",
          "param": "Trigliserida tinggi (>150 mg/dL), Kolesterol HDL rendah (<40 pria, <50 wanita), Rasio Trigliserida/HDL >3.0 menandakan resistensi insulin."
        },
        {
          "test": "HOMA-IR & Insulin Puasa",
          "param": "Skor HOMA-IR >2.5 mengonfirmasi resistensi insulin berat."
        },
        {
          "test": "Enzim Hati (SGPT/ALT) & hs-CRP",
          "param": "Peningkatan penanda inflamasi sistemik dan deteksi steatohepatitis dini."
        }
      ],
      "imaging": "USG Abdomen (peningkatan ekogenisitas hepar 'bright liver' akibat infiltrasi lemak); CT Scan Abdomen mengukur luas area lemak viseral (Visceral Fat Area >100 cm²).",
      "goldStandard": "Pengukuran Lingkar Pinggang terstandar + Profil Lipid & HOMA-IR."
    },
    "pharmacotherapy": {
      "primaryDrugs": "1. Terapi Sindrom Metabolik: Metformin (meningkatkan sensitivitas insulin dan menurunkan glukoneogenesis hepar). 2. Terapi Dislipidemia: Statin (Atorvastatin/Rosuvastatin) untuk menurunkan risiko aterosklerosis pembuluh darah. 3. Agonis Reseptor GLP-1 (bila ada indikasi diabetes).",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI obat pelangsing diuretik atau laksatif pencahar yang dijual bebas karena MEMICU DEHIDRASI AKUT, HIPOKALEMIA, GANGGUAN IRAMA JANTUNG, DAN SYOK PADA LANSIA! Penurunan berat badan lansia harus bertahap dan terukur agar tidak mengorbankan massa otot.",
      "monitoring": "Lingkar pinggang serial, tekanan darah, dan enzim SGOT/SGPT berkala."
    },
    "clinicalNutrition": {
      "macroMicro": "Restriksi Kalori Moderat: Defisit 300-500 kkal/hari dengan proteksi protein tinggi (cegah sarcopenia); kurangi karbohidrat olahan sederhana dan fruktosa cair.",
      "recommendedFoods": "Sayuran berserat tinggi (labu siam, brokoli, daun kelor), beras cokelat, kacang merah, ikan air tawar kaya protein rendah lemak.",
      "contraindicatedFoods": "Gorengan minyak jelantah, makanan bersantan kental, minuman berpemanis sirup fruktosa (sirup fruktosa langsung diubah menjadi lemak viseral di hati)."
    },
    "emergency": {
      "immediateTriggers": "Nyeri dada seperti tertindih benda berat menjalar ke rahang/lengan kiri (Infark Jantung Akut), sesak napas mendadak saat tidur dengan bibir membiru, tensi melonjak >180/110 mmHg.",
      "firstAidHome": "Baringkan pasien setengah duduk; jangan berikan makanan atau minuman; segera telepon ambulans IGD."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan Kardio Intensitas Sedang (jalan cepat 30 menit sehari, 5 hari seminggu) berpadu dengan latihan kekuatan otot inti (core strengthening ringan); hindari duduk diam berjam-jam.",
      "homeModifications": "Gunakan kasur dengan kemiringan kepala 15-20 derajat untuk mengurangi sleep apnea; sediakan meteran lingkar pinggang di rumah."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Lemak Viseral <-> Hati, Kardiovaskular & Saluran Pernapasan",
      "biologicalMechanism": "Lemak viseral mengalirkan asam lemak bebas (FFA) langsung ke vena porta hepar, memicu Perlemakan Hati Metabolik (MASLD). Sitokin racun yang dilepaskan lemak perut merusak dinding arteri karotis dan koroner, melipatgandakan risiko Serangan Jantung & Stroke Iskemik. Selain itu, timbunan lemak viseral yang besar di perut mendorong diafragma ke atas saat berbaring, mempersempit volume rongga dada paru dan memperparah sesak napas pada lansia (Obesity Hypoventilation Syndrome).",
      "clinicalImpact": "Obesitas viseral adalah episentrum yang menyatukan komplikasi gagal organ multipel: fatty liver, diabetes tipe 2, sleep apnea, dan stroke.",
      "prevention": "Pola makan rendah lemak jenuh dan tinggi serat berpadu dengan jalan kaki rutin harian untuk mengikis timbunan lemak rongga perut secara bertahap."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Adipositas Visceralis / Syndroma Metabolica / Dyslipidemia Aterogenica",
      "icd10": "E66.9 / E88.81",
      "latinTerms": [
        {
          "term": "Adiposopathia Omentalis",
          "meaning": "Disfungsi metabolik dan endokrin jaringan lemak mesenterium yang melepaskan sitokin racun (TNF-α, IL-6, resistin)."
        },
        {
          "term": "Lipotoxicitas Hepatica Portalis",
          "meaning": "Banjir asam lemak bebas (FFA) langsung ke vena porta yang memicu penumpukan trigliserida hepatosit (MASLD)."
        },
        {
          "term": "Atherosclerosis Arterialis",
          "meaning": "Pembentukan plak lipid fibroateroma pada dinding tunika intima pembuluh darah koroner dan karotis."
        },
        {
          "term": "Syndroma Hypoventilationis Obesitatis",
          "meaning": "Penurunan ventilasi alveolar akibat desakan mekanik timbunan lemak viseral terhadap kubah diafragma."
        },
        {
          "term": "Apnea Obstructiva Nocturna (OSA)",
          "meaning": "Episode henti napas berulang saat tidur akibat kolaps dinding faring tertekan jaringan adiposa leher."
        }
      ]
    }
  },
  "delirium-geriatri": {
    "pathophysiology": {
      "cellularMechanism": "Disfungsi akut neurotransmiter global serebral yang dipicu oleh defisiensi kolinergik sentral akut berpadu dengan hiperaktivitas dopaminergik, glutamatergik, dan noradrenergik. Kerusakan barier sawar darah otak (blood-brain barrier) akibat stresor perifer (seperti ISK, pneumonia, atau hiponatremia) memfasilitasi influks sitokin inflamasi (IL-1, IL-6, TNF-α) ke parenkim otak. Mikroglia serebral teraktivasi memicu neuroinflamasi, disfungsi mitokondria neuron, dan gangguan konektivitas jaras retikuler pengaktivasi kesadaran (ARAS / Ascending Reticular Activating System) di batang otak dan talamus.",
      "geriatricFactor": "Penurunan cadangan fisiologis neuronal (diminished brain reserve), neurodegenerasi subklinis, serta sensitivitas hipersensitif terhadap obat-obatan antikolinergik dan perubahan elektrolit pada lansia.",
      "organImpact": "Kegagalan kognitif akut berfluktuasi, disorientasi waktu-tempat-orang, gangguan siklus tidur-bangun, risiko penurunan status fungsional permanen, dan peningkatan mortalitas rumah sakit 2-3 kali lipat."
    },
    "geriatricSymptoms": {
      "classical": "Gelisah mondar-mandir, mencabuti selang infus atau oksigen, berteriak-teriak histeris, berhalusinasi visual melihat serangga atau orang asing (Delirium Hiperaktif 25%).",
      "atypicalGeriatric": "DELIRIUM HIPOAKTIF (75% KASUS GERIATRI): Lansia tampak sangat tenang, pendiam, tertidur terus-menerus, kontak mata kosong, gerakan lambat, dan tidak merespons panggilan (sering salah didiagnosis sebagai depresi atau sekadar 'lelah'). Gejala berfluktuasi tajam (siang relatif tenang, malam mengamuk).",
      "whyDifferent": "Lansia lebih rentan mengalami respons neurobehavioral hipoaktif yang tersembunyi dibandingkan respons hiperaktif."
    },
    "staging": {
      "scoreName": "Metode Penilaian Kebingungan / Confusion Assessment Method (CAM) & 4AT",
      "stages": [
        {
          "level": "Skor 4AT 1 - 3 (Kemungkinan Gangguan Kognitif Ringan)",
          "criteria": "Perubahan kesadaran ringan, perhatian berfluktuasi ringan.",
          "risk": "Evaluasi faktor pemicu metabolik dini; risiko memburuk bila tidak diintervensi."
        },
        {
          "level": "Skor 4AT ≥ 4 (Konfirmasi Delirium Akut)",
          "criteria": "Onset akut & berfluktuasi, inatensi nyata, penurunan tingkat kesadaran atau disorganisasi berpikir.",
          "risk": "Kedaruratan medis geriatri; risiko mortalitas rawat inap tinggi; cari pemicu infeksi/obat."
        },
        {
          "level": "Delirium Refrakter dengan Komplikasi",
          "criteria": "Delirium menetap >72 jam meski pemicu diobati, agitasi ekstrem atau stupor.",
          "risk": "Risiko intubasi, aspirasi pneumonia, ulkus dekubitus, dan transisi ke demensia permanen."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Urinalisis Lengkap & Kultur Urin",
          "param": "Wajib untuk mendeteksi ISK tanpa gejala nyeri sebagai pemicu nomor satu delirium."
        },
        {
          "test": "Elektrolit Lengkap (Na, K, Cl, Ca) & Gula Darah",
          "param": "Deteksi hiponatremia akut (<130 mEq/L) dan hipoglikemia/hiperglikemia."
        },
        {
          "test": "Analisis Gas Darah & Laktat",
          "param": "Deteksi hipoksemia serebral silent dan asidosis sepsis."
        }
      ],
      "imaging": "Rontgen Toraks (menyingkirkan pneumonia aspirasi tanpa demam); CT Scan Kepala Non-Kontras jika ada riwayat jatuh/trauma kepala (singkirkan hematoma subdural kronis) atau defisit neurologis fokal baru.",
      "goldStandard": "Kriteria Diagnostik CAM (Confusion Assessment Method) + Investigasi Etiologi Komprehensif (PINCH ME: Pain, Infection, Nutrition, Constipation, Hydration, Medication, Environment)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "PRINSIP UTAMA: NON-FARMAKOLOGIS ADALAH LINI PERTAMA! Cari dan atasi penyebab dasar (antibiotik untuk infeksi, hidrasi untuk dehidrasi). Terapi obat hanya digunakan bila pasien membahayakan keselamatan diri: Haloperidol dosis sangat rendah (0.25 - 0.5 mg oral) atau Quetiapine 12.5 - 25 mg oral jangka pendek (<3 hari).",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI BENZODIAZEPINE (Diazepam, Alprazolam, Lorazepam) KECUALI PADA DELIRIUM AKIBAT WITHDRAWAL ALKOHOL! Benzodiazepine justru memicu PARADOXICAL AGITATION, memperburuk delirium, memicu depresi napas, dan meningkatkan risiko jatuh 4 kali lipat! Hentikan seluruh obat beraktivitas antikolinergik.",
      "monitoring": "Re-evaluasi skor CAM serial tiap 8 jam; pantau saturasi oksigen, bising usus, dan miksi urine."
    },
    "clinicalNutrition": {
      "macroMicro": "Hidrasi cairan terukur (30 mL/kgBB) untuk memperbaiki perfusi serebral; koreksi elektrolit bertahap; makanan lunak padat nutrisi tinggi protein.",
      "recommendedFoods": "Kaldu sayur hangat bergaram seimbang, air kelapa murni, sup ikan lumat, sari buah segar non-asam.",
      "contraindicatedFoods": "Kopi pekat, minuman berenergi, makanan tinggi garam tanpa cairan memadai."
    },
    "emergency": {
      "immediateTriggers": "Pasien mendadak tidak responsif (stupor/koma), mencoba melompat dari tempat tidur berulang kali, muntah menyemprot, atau demam tinggi dengan kaku kuduk.",
      "firstAidHome": "Jangan mengikat tangan atau kaki pasien (restraint fisik memperparah panik delirium); ciptakan suasana tenang dengan lampu remang di malam hari; dampingi dengan wajah familiar keluarga; segera bawa ke IGD."
    },
    "rehabilitation": {
      "physicalExercises": "Mobilisasi dini bertahap di siang hari; ajak pasien duduk di tepi ranjang; fisioterapi gerak sendi pasif.",
      "homeModifications": "Pasang jam dinding besar dan kalender dengan tulisan jelas di hadapan ranjang; hadirkan barang atau foto keluarga yang familier; pasang lampu tidur malam berwarna kuning hangat."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saraf Pusat (Batang Otak & ARAS) <-> Saluran Kemih & Paru-paru",
      "biologicalMechanism": "Delirium adalah 'organ shock' pada otak akibat penyakit di organ tubuh lain. Infeksi saluran kemih (ISK) atau pneumonia mengeluarkan sitokin pro-inflamasi ke aliran darah yang membocorkan sawar darah-otak dan mematikan fungsi neurotransmisi asetilkolin. Sebaliknya, saat lansia mengalami delirium, pusat refleks menelan dan batuk di batang otak tertekan, memicu Pneumonia Aspirasi sekunder dan retensi urin fungsional (inkontinensia overflow).",
      "clinicalImpact": "Delirium yang terlambat dikenali meningkatkan risiko kematian rumah sakit hingga 40% dan mempercepat onset kepikunan permanen.",
      "prevention": "Deteksi dini perubahan perilaku sekecil apapun pada lansia berpenyakit infeksi; rehidrasi adekuat; hindari kateter urin menetap yang tidak perlu."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Encephalopathia Acuta Toxico-Metabolica / Delirium Geriatricum",
      "icd10": "F05.9",
      "latinTerms": [
        {
          "term": "Deficientia Cholinergica Centralis",
          "meaning": "Penurunan akut ketersediaan neurotransmiter asetilkolin di jaras retikuler pengaktivasi kesadaran (ARAS)."
        },
        {
          "term": "Permeabilitas Sawar Darah-Otak (BBB)",
          "meaning": "Kebocoran sawar pembatas mikrovaskular serebral yang membiarkan sitokin pro-inflamasi perifer menyerang neuron."
        },
        {
          "term": "Delirium Hypoactivum",
          "meaning": "Subtipe delirium geriatri yang tenang, ditandai penurunan kesadaran, letargi, dan inatensi tanpa kegaduhan motorik."
        },
        {
          "term": "Inattentio & Disorientatio",
          "meaning": "Ketidakmampuan memfokuskan atau mengalihkan perhatian pikiran disertai hilangnya orientasi waktu dan ruang."
        },
        {
          "term": "Agitatio Paradoxalis",
          "meaning": "Reaksi lonjakan amuk atau gelisah berlawanan yang terpicu saat lansia delirium diberi obat penenang."
        }
      ]
    }
  },
  "hnp-saraf-kejepit": {
    "pathophysiology": {
      "cellularMechanism": "Degenerasi anulus fibrosus diskus intervertebralis lumbalis (L4-L5, L5-S1) atau servikalis (C5-C6) akibat dehidrasi proteoglikan dan hilangnya elastisitas kolagen penuaan. Tekanan aksial memicu robekan serat anulus sehingga nukleus pulposus yang gelatinosa mengalami herniasi ke kanalis spinalis atau foramen intervertebralis. Tonjolan ini menekan radiks saraf spinalis secara mekanik DISERTAI pelepasan fosfolipase A2, asam glutamat, dan sitokin inflamasi (TNF-α, IL-1) dari material nukleus. Hal ini memicu iskemia mikrovaskular radiks, edema selubung saraf, dan hipereksitabilitas ektopik saraf sensorik/motorik (radikulopati).",
      "geriatricFactor": "Penyempitan ruang kanalis spinalis sekunder spondilosis lumbalis, hipertrofi ligamen flavum, dan pembentukan osteofit taji tulang pada sendi faset tulang belakang lansia.",
      "organImpact": "Nyeri saraf menjalar ekstrem (iskialgia / sciatica), parestesia dermatomik, kelemahan motorik tungkai (paresis foot drop), dan risiko Sindrom Kauda Ekuina dengan hilangnya kontrol berkemih dan BAB."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri pinggang bawah tajam menusuk yang menjalar ke bokong, paha belakang, betis, hingga telapak kaki (sciatica), bertambah hebat saat batuk atau mengejan.",
      "atypicalGeriatric": "Klaudikasio Neurogenik: Kedua kaki terasa tebal, berat, dan lemas seperti lumpuh setelah berjalan 50-100 meter, namun langsung mereda saat membungkuk ke depan atau duduk (Shopping Cart Sign). Pada lansia, nyeri pinggang sering minimal namun keluhan utama berupa kaki lemas dan sering jatuh.",
      "whyDifferent": "Stenosis kanalis spinalis geriatri menutupi herniasi diskus akut, memicu iskemia cauda equina postural saat berdiri tegak."
    },
    "staging": {
      "scoreName": "Klasifikasi Radikulopati Lumbal & Kriteria Kedaruratan Cauda Equina",
      "stages": [
        {
          "level": "Derajat 1 (Nyeri Radikuler Tanpa Defisit Motorik)",
          "criteria": "Lasegue test positif (>30°), sensasi kebas dermatomik, kekuatan motorik masih 5/5.",
          "risk": "Kandidat terapi konservatif, fisioterapi, dan analgetik neuropatik terarah."
        },
        {
          "level": "Derajat 2 (Radikulopati dengan Defisit Motorik Fokal)",
          "criteria": "Kelemahan dorsofleksi jempol kaki (L5 paresis) atau refleks Achilles hilang (S1).",
          "risk": "Risiko atrofi otot permanen; pertimbangkan evaluasi bedah saraf dekompresi."
        },
        {
          "level": "Derajat 3 (Sindrom Cauda Equina - Triase Darurat)",
          "criteria": "Saddle anesthesia (baal di selangkangan/anus), retensi urin akut, inkontinensia alvi.",
          "risk": "KEDARURATAN BEDAH SARAF CITO (<24-48 jam) untuk mencegah kelumpuhan dan inkontinensia permanen!"
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "LED (Laju Endap Darah) & CRP",
          "param": "Eksklusi spondilodisis infeksi bakteri atau tuberkulosis tulang (Spondilitis TB / Pott's disease)."
        },
        {
          "test": "Alkaline Phosphatase (ALP) & Kalsium Darah",
          "param": "Eksklusi metastasis tulang atau penyakit Paget tulang."
        }
      ],
      "imaging": "MRI Tulang Belakang Lumbal/Servikal Tanpa Kontras: Baku emas visualisasi herniasi diskus, derajat kompresi radiks saraf, dan luas penyempitan kanalis spinalis.",
      "goldStandard": "MRI Lumbal T2-Weighted Sagital & Aksial berpadu dengan Pemeriksaan Neurologis Motorik-Sensorik Radikuler."
    },
    "pharmacotherapy": {
      "primaryDrugs": "1. Terapi Nyeri Neuropatik Akut: Pregabalin (50-75 mg malam) ATAU Gabapentin (100-300 mg malam). 2. Analgetik: Parasetamol 500-1000 mg tiap 8 jam. 3. Relaksan Otot jangka pendek (Eperisone 50 mg). 4. Injeksi Epidural Steroid (ESI) fluoroskopi bila nyeri refrakter.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI NSAID dosis tinggi (seperti Ketorolac, Piroxicam, Diclofenac) berkepanjangan pada lansia karena merusak ginjal akut, memicu tukak lambung berdarah, dan memperparah hipertensi! HINDARI relaksan otot sedatif kuat seperti Diazepam atau Carisoprodol karena memicu ataksia dan jatuh patah tulang.",
      "monitoring": "Pantau fungsi berkemih (retensi urin post-void residual) dan kekuatan dorsofleksi kaki."
    },
    "clinicalNutrition": {
      "macroMicro": "Suplementasi Kalsium 1000 mg + Vitamin D3 2000 IU harian untuk densitas tulang; antioksidan kurkumin dan asam lemak omega-3 untuk meredakan inflamasi radiks.",
      "recommendedFoods": "Ikan teri basah, susu skim kalsium tinggi, sayur brokoli kukus, tahu tempe, kunyit asam segar.",
      "contraindicatedFoods": "Makanan tinggi purin, garam berlebih, minuman manis yang mempercepat osteopenia."
    },
    "emergency": {
      "immediateTriggers": "Tiba-tiba tidak bisa buang air kecil (kencing tertahan macet total), feses BAB keluar sendiri tanpa terasa, kedua kaki mendadak lumpuh lunglai terkulai tidak bisa digerakkan.",
      "firstAidHome": "Baringkan pasien di atas permukaan datar yang keras (matras ortopedi padat); JANGAN DIPIJAT ATAU DIURUT PINGGANGNYA SECARA KERAS (bisa meremukkan serabut cauda equina); bawa segera ke IGD RS bedah saraf."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan fleksi William (membungkuk lutut ke dada saat berbaring untuk membuka kanalis spinalis); berenang gaya dada di air hangat (mengurangi beban kompresi gravitasi); latihan core stability transverse abdominis.",
      "homeModifications": "Gunakan kasur ortopedi medium-firm (hindari kasur busa empuk yang melengkung); gunakan kursi dengan penopang pinggang (lumbar roll); jangan membungkuk saat mengambil benda di lantai (tekuk lutut jongkok)."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Medula Spinalis & Radiks Saraf <-> Sistem Urologi (Kandung Kemih) & Otot Tungkai",
      "biologicalMechanism": "Jepitan mekanik pada serabut saraf parasimpatis sakral (S2-S4) di kanalis spinalis mematikan refleks persarafan motorik otot detrusor kandung kemih dan sfingter uretra eksterna. Hal ini memicu Neurogenic Bladder (kandung kemih meregang besar tanpa sensasi ingin berkemih hingga terjadi kebocoran overflow). Pada otot, denervasi radiks L4-L5 melumpuhkan otot tibialis anterior, memicu 'foot drop' yang membuat ujung kaki terseret dan memicu jatuh.",
      "clinicalImpact": "Penyakit saraf terjepit lumbal yang diabaikan dapat berkembang menjadi kerusakan ginjal permanen akibat refluks urin hidronefrosis dan disabilitas lumpuh gerak.",
      "prevention": "Segera lakukan pemeriksaan saraf bila nyeri pinggang disertai rasa kebas di area selangkangan atau kesulitan kencing; hindari mengangkat beban berat sambil memutar badan."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Hernia Nuclei Pulposi (HNP) / Radiculopathia Lumbosacralis",
      "icd10": "M51.26 / M54.16",
      "latinTerms": [
        {
          "term": "Protrusio Nuclei Pulposi",
          "meaning": "Penonjolan materi gelatinosa inti diskus intervertebralis melewati robekan cincin anulus fibrosus."
        },
        {
          "term": "Ischialgia (Radiculopathia Sciatica)",
          "meaning": "Nyeri saraf tajam menusuk yang menjalar mengikuti dermatom saraf iskiadikus dari bokong ke telapak kaki."
        },
        {
          "term": "Claudicatio Neurogenica",
          "meaning": "Kelemahan dan rasa tebal kedua tungkai saat berjalan tegak akibat stenosis kanalis spinalis postural."
        },
        {
          "term": "Syndroma Cauda Equina",
          "meaning": "Kompresi darurat serabut saraf sakral cauda equina yang mematikan kontrol sfingter kandung kemih dan rektum."
        },
        {
          "term": "Paresis Extensoris Digitorum (Foot Drop)",
          "meaning": "Ketidakmampuan mengangkat ujung jempol dan punggung kaki saat melangkah akibat kelumpuhan radiks saraf L5."
        }
      ]
    }
  },
  "kram-otot-nokturnal": {
    "pathophysiology": {
      "cellularMechanism": "Kontraksi involunter spasmodik yang sangat menyakitkan pada otot rangka betis (m. gastrocnemius dan m. soleus) atau telapak kaki saat malam hari. Patofisiologinya melibatkan hipereksitabilitas motor end-plate neuron motorik alfa perifer. Faktor pemicu meliputi gangguan pompa kalsium-ATP intraseluler, penumpukan metabolit laktat, ketidakseimbangan elektrolit kation (hipomagnesemia, hipokalsemia, hipokalemia), dehidrasi kompartemen interstisial, serta penurunan perfusi mikrosirkulasi perifer selama tidur malam akibat vasokonstriksi suhu dingin.",
      "geriatricFactor": "Penurunan elastisitas tendon Achilles, pemendekan serat otot intrinsik geriatri, tingginya penggunaan obat diuretik tensi yang menguras elektrolit, dan penyakit vaskular perifer (PAD).",
      "organImpact": "Nyeri hebat mendadak yang memecah tidur malam, trauma spasme serat otot (micro-tears), nyeri otot persisten keesokan harinya, kecemasan tidur (insomnia nokturnal), dan penurunan kualitas hidup geriatri."
    },
    "geriatricSymptoms": {
      "classical": "Betis mendadak mengeras kaku seperti batu di tengah malam, jari-jari kaki menekuk kaku ke bawah (plantar fleksi kuat), nyeri tajam menyiksa selama beberapa detik hingga beberapa menit.",
      "atypicalGeriatric": "Otot betis terasa pegal linu berdenyut-denyut sepanjang hari berikutnya tanpa kaku jelas, kaki mendadak kaku saat bangkit turun dari ranjang di pagi hari memicu hilang keseimbangan dan jatuh terbentur.",
      "whyDifferent": "Lansia sering mengalami kram nokturnal sekunder akibat polifarmasi (terutama obat diuretik tensi dan statin) yang bercampur dengan insufisiensi vena kronis."
    },
    "staging": {
      "scoreName": "Skala Frekuensi & Dampak Kram Nokturnal Geriatri",
      "stages": [
        {
          "level": "Derajat Ringan (Intermiten)",
          "criteria": "Kram terjadi <1 kali per minggu, durasi <1 menit, mereda cepat dengan peregangan mandiri.",
          "risk": "Cukup intervensi hidrasi malam dan peregangan betis sebelum tidur."
        },
        {
          "level": "Derajat Sedang (Sering)",
          "criteria": "Kram 2-4 kali seminggu, mengganggu siklus tidur nyenyak, betis pegal berhari-hari.",
          "risk": "Evaluasi elektrolit serum dan efek samping obat diuretik/statin."
        },
        {
          "level": "Derajat Berat (Kronis Refrakter)",
          "criteria": "Kram terjadi setiap malam, menyerang kedua tungkai, memicu insomnia berat dan takut tidur.",
          "risk": "Risiko jatuh malam hari saat buru-buru bangun menahan kram; butuh evaluasi vaskular dan neurologis komprehensif."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Elektrolit Lengkap Serum (Mg, Ca, K, Na)",
          "param": "Deteksi hipomagnesemia (<1.8 mg/dL) dan hipokalemia/hipokalsemia pemicu hipereksitabilitas miosit."
        },
        {
          "test": "Kreatin Kinase (CK) & Fungsi Ginjal",
          "param": "Eksklusi miositis atau rhabdomyolysis pada lansia pengguna obat statin kolesterol."
        },
        {
          "test": "Gula Darah Puasa & HbA1c",
          "param": "Deteksi neuropati motorik diabetik sebagai pemicu kram."
        }
      ],
      "imaging": "USG Doppler Vaskular Tungkai Bawah jika dicurigai penyakit arteri perifer (PAD) atau insufisiensi vena dalam kronis.",
      "goldStandard": "Evaluasi Klinis + Panel Elektrolit Magnesium-Kalsium-Kalium Serum."
    },
    "pharmacotherapy": {
      "primaryDrugs": "1. Suplementasi Magnesium: Magnesium Sitrat / Glisinat 200-300 mg malam hari (membantu relaksasi membran miosit). 2. Suplementasi Vitamin B kompleks (terutama B1 & B6) untuk stabilisasi transmisi neuromuskular.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: JANGAN MENGGUNAKAN KININ / QUININE SULFATE UNTUK KRAM KAKI PADA LANSIA! Kinin memiliki peringatan Black Box FDA karena memicu trombositopenia fatal, aritmia ventrikel jantung (Torsades de Pointes), dan kebutaan! Waspadai obat diuretik HCTZ/Furosemid yang menguras kalium dan magnesium.",
      "monitoring": "Kadar magnesium dan kalium darah; evaluasi apakah kram membaik setelah titrasi dosis diuretik."
    },
    "clinicalNutrition": {
      "macroMicro": "Asupan mineral relaksan otot: Magnesium (300 mg/hari), Kalium (3000 mg/hari), hidrasi malam cukup (1 gelas air putih hangat 1 jam sebelum tidur).",
      "recommendedFoods": "Pisang ambon matang, alpukat, biji labu (pumpkin seeds), kacang merah, bayam bening, susu hangat kaya kalsium.",
      "contraindicatedFoods": "Kopi dan teh pekat di malam hari (efek diuretik mempercepat dehidrasi sel otot saat tidur), alkohol."
    },
    "emergency": {
      "immediateTriggers": "Betis bengkak kemerahan, terasa sangat panas dan nyeri saat disentuh (tanda DVT / Trombosis Vena Dalam yang menyerupai kram), atau air kencing berwarna gelap pekat seperti teh (rhabdomyolysis).",
      "firstAidHome": "SAAT KRAM TERJADI: Tarik ujung jari kaki ke arah atas (ke arah tulang kering) secara perlahan untuk meregangkan otot betis; kompres hangat pada betis yang kaku; jangan dipukul-pukul keras."
    },
    "rehabilitation": {
      "physicalExercises": "Peregangan otot betis dinding (wall calf stretch) selama 3 x 30 detik setiap malam tepat sebelum naik ke tempat tidur (terbukti secara klinis menurunkan frekuensi kram hingga 60%); senam pompa pergelangan kaki (ankle pumps).",
      "homeModifications": "Jaga kehangatan kaki dengan memakai kaus kaki katun longgar saat tidur; jangan menyelipkan selimut terlalu ketat di ujung kasur yang memaksa telapak kaki menekuk ke bawah."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Otot Rangka <-> Sistem Saraf Perifer, Elektrolit & Ginjal",
      "biologicalMechanism": "Penurunan fungsi filtrasi ginjal geriatri dan pemakaian obat antihipertensi diuretik menguras simpanan ion magnesium dan kalium tubuh. Hipomagnesemia menurunkan ambang rangsang membran saraf motorik perifer, memicu letupan potensial aksi spontan di neuromuscular junction yang memicu spasme serat otot rangka betis. Selain itu, penderita kram malam yang panik sering melompat turun dari ranjang dalam kondisi gelap, memicu Hipotensi Ortostatik, kehilangan keseimbangan, dan Jatuh Fraktur.",
      "clinicalImpact": "Kram otot nokturnal adalah salah satu pemicu utama gangguan tidur geriatri dan insiden jatuh dari tempat tidur di malam hari.",
      "prevention": "Peregangan betis 3 menit setiap malam sebelum tidur, koreksi elektrolit rutin pada pemakai obat tensi, dan pencahayaan lampu lantai otomatis di samping ranjang."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Spasmus Musculorum Nocturnus / Crampus Cruris Nocturnus",
      "icd10": "R25.2",
      "latinTerms": [
        {
          "term": "Hyperexcitabilitas Motor End-Plate",
          "meaning": "Letupan potensial aksi spontan abnormal pada taut transmisi neuromuskular saraf motorik alfa ke serabut otot."
        },
        {
          "term": "Contractura Spasmodica Involuntaria",
          "meaning": "Kontraksi tetanik memendek yang sangat keras pada m. gastrocnemius tanpa perintah sadar otak."
        },
        {
          "term": "Hypomagnesaemia & Hypokalaemia",
          "meaning": "Kekurangan ion magnesium dan kalium serum yang menstabilkan polaritas potensial membran miosit."
        },
        {
          "term": "Ischaemia Muscularis Transitoria",
          "meaning": "Penurunan aliran mikrosirkulasi darah kapiler otot betis selama imobilitas tidur malam hari."
        },
        {
          "term": "Rhabdomyolysis Spasmodica",
          "meaning": "Risiko kerusakan mikroskopis serat miosit otot disertai pelepasan enzim mioglobin ke sirkulasi darah."
        }
      ]
    }
  },
  "polimialgia-reumatika": {
    "pathophysiology": {
      "cellularMechanism": "Penyakit inflamasi sistemik autoimun geriatri yang ditandai oleh sinovitis proksimal, bursitis subakromial-subdeltoid, bicipital tenosynovitis pada gelang bahu, serta bursitis trokanterika dan trokanteritis pada gelang panggul. Patogenesis melibatkan disregulasi imunitas bawaan (innate immunity), aktivasi monosit dan sel dendritik via Toll-Like Receptor (TLR), pelepasan masif interleukin-6 (IL-6) dari jaringan sinovial ke sirkulasi darah, serta vaskulitis mikroarteriol subklinis. Karakteristik khas PMR adalah nyeri otot parah tanpa disertai kerusakan serat otot miosit intrinsik (kadar enzim CPK normal, berbeda dengan miositis).",
      "geriatricFactor": "Penyakit ini HAMPIR EKSKLUSIF MENYERANG USIA DI ATAS 50 TAHUN (puncaknya usia 70-80 tahun). Proses immunosenescence dan penuaan sel dendritik memicu respons hiperinflamasi autoimun IL-6.",
      "organImpact": "Kekakuan sendi-otot bahu dan panggul ekstrem yang melumpuhkan aktivitas mandiri pagi hari, penurunan berat badan, depresi sekunder akibat nyeri konstan, serta risiko komplikasi kebutaan permanen bila terkait Arteritis Sel Raksasa (Giant Cell Arteritis / GCA)."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri dan kekakuan hebat simetris pada kedua bahu, leher, dan panggul yang SANGAT KAKU DI PAGI HARI (>45 menit hingga beberapa jam), sulit menyisir rambut sendiri, tidak mampu memakai baju kaos melewati kepala, sulit bangun dari ranjang.",
      "atypicalGeriatric": "Penurunan berat badan drastis tanpa sebab jelas (>5 kg), demam subfebris meriang berkepanjangan, depresi mendadak dan kehilangan nafsu makan total, nyeri rahang saat mengunyah makanan (jaw claudication) atau nyeri pelipis tajam.",
      "whyDifferent": "Tingginya kadar sitokin IL-6 memicu sindrom inflamasi sistemik yang menyerupai keganasan kanker tersembunyi pada lansia."
    },
    "staging": {
      "scoreName": "Kriteria Klasifikasi EULAR/ACR untuk Polimialgia Reumatika (PMR)",
      "stages": [
        {
          "level": "PMR Tanpa Keterlibatan Arteri Kranial",
          "criteria": "Nyeri dan kaku bahu bilateral pagi hari >45 menit, LED/CRP tinggi, tanpa keluhan sakit kepala atau gangguan mata.",
          "risk": "Respons dramatis dalam 48-72 jam terhadap kortikosteroid oral dosis rendah."
        },
        {
          "level": "PMR dengan Artritis Perifer",
          "criteria": "Kekakuan proksimal disertai bengkak sendi lutut atau pergelangan tangan (tenosinovitis perifer).",
          "risk": "Perlu pemantauan jangka panjang untuk membedakan dengan Late-Onset Rheumatoid Arthritis."
        },
        {
          "level": "PMR dengan Koeksistensi Arteritis Sel Raksasa (GCA) - DARURAT",
          "criteria": "Disertai nyeri pelipis berdenyut, pembuluh darah pelipis menebal keras, gangguan penglihatan kabur/gelap mendadak.",
          "risk": "KEDARURATAN MEDIS MUTLAK: Risiko KEBUTAAN PERMANEN CITO akibat iskemia arteri oftalmika; butuh steroid dosis tinggi segera!"
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Laju Endap Darah (LED / ESR)",
          "param": "Peningkatan ekstrem (seringkali >50 mm/jam bahkan >100 mm/jam khas penanda hiperinflamasi)."
        },
        {
          "test": "C-Reactive Protein (CRP kuantitatif)",
          "param": "Tinggi (>20-50 mg/L), merupakan penanda paling sensitif untuk pemantauan terapi."
        },
        {
          "test": "Kreatin Kinase (CK / CPK) & Rheumatoid Factor (RF)",
          "param": "Enzim CK NORMAL (membedakan dari polimiositis); RF dan anti-CCP negatif (membedakan dari RA)."
        }
      ],
      "imaging": "USG Muskuloskeletal Bahu & Panggul: Menunjukkan efusi cairan bilateral pada bursa subakromial-subdeltoid dan tenosinovitis kaput longum m. biseps.",
      "goldStandard": "Kriteria Klinis EULAR/ACR + Peningkatan Tajam LED/CRP + Respons Dramatis terhadap Terapi Percobaan Steroid Dosis Rendah dalam 72 Jam."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Prednison oral dosis rendah (12.5 - 15 mg per hari sebagai dosis awal tunggal pagi). Gejala klinis biasanya mereda dramatis dalam 3-5 hari. Tapering off (penurunan dosis bertahap) dilakukan sangat lambat selama 1-2 tahun.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: Waspadai komplikasi terapi steroid jangka panjang pada lansia: Osteoporosis fraktur kompresi tulang belakang, katarak, glaukoma, kenaikan gula darah diabetes, dan penipisan kulit! WAJIB diberi terapi profilaksis Bifosfonat (Alendronat), Kalsium, dan Vitamin D.",
      "monitoring": "LED dan CRP serial tiap bulan saat penurunan dosis steroid; tes kepadatan tulang (DEXA scan); pemantauan tekanan darah dan gula darah."
    },
    "clinicalNutrition": {
      "macroMicro": "Pola makan anti-inflamasi: Asam lemak omega-3 dosis tinggi, antioksidan polifenol, proteksi tulang (Kalsium 1200 mg/hari + Vitamin D 2000 IU/hari).",
      "recommendedFoods": "Ikan salmon, makerel, minyak zaitun extra virgin, buah beri, sayuran kubis-kubisan, yogurt kaya kalsium.",
      "contraindicatedFoods": "Makanan olahan tinggi gula dan natrium (memperburuk retensi cairan steroid), lemak trans."
    },
    "emergency": {
      "immediateTriggers": "Mata mendadak kabur atau hilang penglihatan separuh (amaurosis fugax), nyeri kepala pelipis baru yang sangat tajam, nyeri rahang hebat saat mengunyah.",
      "firstAidHome": "JANGAN DITUNDA: Segera bawa ke IGD rumah sakit mata atau umum karena menandakan keterlibatan Arteritis Temporalis yang dapat membutakan mata dalam hitungan jam jika tidak diberi steroid dosis tinggi injeksi."
    },
    "rehabilitation": {
      "physicalExercises": "Fisioterapi gerakan sendi bahu pasif dan aktif perlahan (latihan pendulum Codman) untuk mencegah komplikasi 'Frozen Shoulder' (kapsulitis adhesif); jalan kaki ringan harian.",
      "homeModifications": "Gunakan baju dengan kancing depan atau ritsleting (hindari baju kaos leher sempit); pasang dudukan toilet tinggi; gunakan alat bantu jangkau (reacher/grabber) untuk mengambil barang tinggi."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Sistem Otot Rangka <-> Sistem Imun, Pembuluh Darah & Penglihatan",
      "biologicalMechanism": "Badai sitokin sistemik IL-6 memicu inflamasi hebat di bursa dan selubung tendon otot bahu dan panggul, melumpuhkan mobilitas fisik dasar lansia. Yang paling berbahaya, inflamasi vaskulitis dapat menjalar ke arteri kranial berdiameter sedang (Arteri Karotis Eksterna dan Arteri Oftalmika). Oklusi arteri oftalmika memutus perfusi darah ke saraf optik mata, memicu Neuropati Optik Iskemik Anterior yang menyebabkan Kebutaan Permanen Mendadak pada satu atau kedua mata.",
      "clinicalImpact": "Sekitar 15-20% penderita PMR menderita Arteritis Sel Raksasa (GCA) yang mengancam fungsi penglihatan dan memicu stroke iskemik vaskulitis serebral.",
      "prevention": "Edukasi pasien PMR untuk segera melapor bila muncul sakit kepala di pelipis atau pandangan kabur; pemantauan LED/CRP berkala; perlindungan tulang dari osteoporosis steroid."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Polymyalgia Rheumatica (PMR) / Arteritis Temporalis Coexistens",
      "icd10": "M35.3 / M31.5",
      "latinTerms": [
        {
          "term": "Bursitis Subacromialis & Trochanterica",
          "meaning": "Inflamasi eksudatif pada kantung bursa pelumas sendi bahu bilateral dan trokanter mayor panggul."
        },
        {
          "term": "Hyperinterleukinaemia-6 (IL-6)",
          "meaning": "Peningkatan masif sitokin pro-inflamasi IL-6 dalam plasma yang memicu respons reaktan fase akut (LED/CRP tinggi)."
        },
        {
          "term": "Arteritis Temporalis (Giant Cell Arteritis)",
          "meaning": "Vaskulitis granulomatosa pada arteri kranial yang mengancam iskemia arteri oftalmika dan kebutaan."
        },
        {
          "term": "Claudicatio Masticatoria",
          "meaning": "Nyeri lelah hebat pada otot rahang saat mengunyah akibat insufisiensi aliran darah arteri maksilaris."
        },
        {
          "term": "Amaurosis Fugax",
          "meaning": "Kehilangan penglihatan mendadak sementara pada satu mata yang menjadi tanda bahaya iskemia saraf optik."
        }
      ]
    }
  },
  "obesitas-sarkopenik": {
    "pathophysiology": {
      "cellularMechanism": "Kombinasi patologis ganda yang mematikan pada geriatri: Kehilangan massa dan fungsi otot rangka (Sarkopenia) yang terjadi bersamaan dengan akumulasi kelebihan jaringan lemak tubuh (Obesitas). Terjadi infiltrasi lemak masif ke dalam serat otot rangka (Miosteatosis - Intermuscular and Intramuscular Adipose Tissue / IMAT). Adiposopati jaringan lemak melepaskan sitokin toksik TNF-α dan IL-6 yang merusak mitokondria serat otot dan memicu resistensi insulin miotik. Sebaliknya, hilangnya massa otot mengurangi laju metabolisme basal (BMR) dan menurunkan sekresi miokin pelindung (seperti irisin dan IL-15), memicu lingkaran setan penumpukan lemak yang semakin cepat memusnahkan sisa otot.",
      "geriatricFactor": "Penurunan sekresi hormon anabolik (GH, testosteron, DHEA) berpadu dengan inaktivitas fisik pensiun dan pola makan tinggi karbohidrat olahan rendah protein.",
      "organImpact": "Beban mekanik sendi ekstrem akibat berat badan yang ditanggung oleh otot yang sangat lemah, memicu osteoartritis lutut parah, disabilitas mobilitas ganda, sindrom metabolik refrakter, dan mortalitas kardiovaskular tertinggi di antara semua subtipe obesitas geriatri."
    },
    "geriatricSymptoms": {
      "classical": "Lengan dan paha berukuran tampak besar namun sangat lembek bergelambir (hanya berupa lapisan lemak tanpa otot padat), sangat cepat lelah saat menaiki beberapa anak tangga, napas terengah-engah.",
      "atypicalGeriatric": "Ketidakmampuan bangkit dari lantai setelah jongkok atau sujud, nyeri lutut bilateral hebat saat berdiri tegak (gonartrosis genu), kecepatan jalan melambat drastis menyerupai penderita pascastroke padahal tanpa riwayat stroke, sesak napas saat tidur telentang.",
      "whyDifferent": "Timbangan berat badan sering kali menyamarkan kondisi ini: berat badan tampak 'stabil' karena penyusutan massa otot tertutupi persis oleh pertambahan bobot lemak tubuh."
    },
    "staging": {
      "scoreName": "Konsensus ESPEN dan EASO untuk Definisi & Staging Obesitas Sarkopenik (SO)",
      "stages": [
        {
          "level": "Stadium 1 (Obesitas Sarkopenik Tanpa Komplikasi Klinis)",
          "criteria": "IMT tinggi / Lemak tubuh >30% pria, >40% wanita DISERTAI penurunan handgrip strength atau chair stand test gagal, tanpa disabilitas mobilitas.",
          "risk": "Kandidat utama intervensi diet defisit moderat berprotein tinggi dan latihan kekuatan beban."
        },
        {
          "level": "Stadium 2 (Obesitas Sarkopenik dengan Komplikasi Klinis)",
          "criteria": "Kriteria di atas DISERTAI penyakit kardiovaskular, osteoartritis sendi lutut berat, diabetes tipe 2, atau disabilitas aktivitas harian (ADL).",
          "risk": "Risiko rawat inap tinggi, amputasi gerak, dan kematian kardiovaskular dini; butuh tim geriatri multidisiplin."
        },
        {
          "level": "Stadium Terminal / Imobilitas Total",
          "criteria": "Pasien tidak mampu menopang bobot tubuh sendiri akibat otot kaki atrofi total, tirah baring permanen.",
          "risk": "Ulkus dekubitus berat, pneumonia hipostatik, trombosis vena dalam (DVT)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Panel Metabolik Komprehensif (HbA1c, HOMA-IR)",
          "param": "Deteksi resistensi insulin derajat berat akibat hilangnya wadah glukosa otot dan infiltrasi lemak."
        },
        {
          "test": "Profil Lipid & Enzim Hati (SGPT)",
          "param": "Deteksi dislipidemia aterogenik dan perlemakan hati metabolik (MASLD)."
        },
        {
          "test": "hs-CRP & Kadar Vitamin D",
          "param": "Penanda inflamasi derajat rendah kronis (inflammaging) dan defisiensi vitamin D."
        }
      ],
      "imaging": "DEXA Body Composition Scan (mengukur secara terpisah massa lemak tubuh total dan appendicular skeletal muscle mass / ASMM); CT Scan Paha (Cross-Sectional CT) memperlihatkan atrofi kuadrisep dengan infiltrasi lemak intramuskular miosteatosis.",
      "goldStandard": "Kriteria ESPEN/EASO: Komposisi Tubuh via DEXA/BIA + Uji Kekuatan Otot Dinamometri Handgrip."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Fokus utama: Perbaikan metabolisme tanpa mengorbankan otot. 1. Agonis Reseptor GLP-1 (bila ada indikasi diabetes/obesitas, WAJIB didampingi latihan beban agar tidak membuang sisa otot rangka). 2. Suplementasi Vitamin D3 (2000-4000 IU/hari).",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI DIET KETAT LAPAR EKSTREM ATAU PEMBERIAN OBAT PENURUN NAFSU MAKAN SENTRAL PADA LANSIA! Penurunan berat badan drastis tanpa latihan beban pada lansia akan MEMBUANG MASSA OTOT (bukan lemak), sehingga saat berat badan naik kembali, tubuh hanya terisi lemak 100% dan kondisi sarkopenia menjadi jauh lebih buruk (Yo-Yo Sarcopenia)! Hentikan obat penenang.",
      "monitoring": "Evaluasi komposisi tubuh (massa otot vs massa lemak) berkala, bukan hanya angka timbangan berat badan."
    },
    "clinicalNutrition": {
      "macroMicro": "Strategi Nutrisi Presisi Geriatri: Defisit kalori sangat moderat (hanya 200-400 kkal/hari) DENGAN ASUPAN PROTEIN SANGAT TINGGI (1.5 gram/kgBB/hari) untuk memproteksi serat otot dari katabolisme; suplementasi Leusin 3 gram/hari.",
      "recommendedFoods": "Dada ayam tanpa kulit kukus, putih telur rebus, ikan laut kaya asam lemak omega-3, edamame, tahu tempe, brokoli dan buncis kukus.",
      "contraindicatedFoods": "Makanan cepat saji, gorengan tepung terigu, minuman sirup manis, cemilan manis berlemak trans."
    },
    "emergency": {
      "immediateTriggers": "Pasien terjatuh dan tidak mampu berdiri kembali karena otot kaki tidak sanggup mengangkat beban badan, nyeri sendi lutut hebat mendadak dengan pembengkakan panas, sesak napas berat saat tidur telentang.",
      "firstAidHome": "Bantu pasien dengan alat bantu jalan roda (walker); jangan biarkan lansia berbaring seharian penuh di tempat tidur; bawa ke klinik fisioterapi geriatri."
    },
    "rehabilitation": {
      "physicalExercises": "Terapi Latihan Beban di Air / Hidroterapi (Aquatic Resistance Training): Daya apung air mengurangi beban kompresi pada sendi lutut yang aus sambil memberikan tahanan alami untuk melatih kekuatan otot; latihan sepeda statis beban rendah-sedang.",
      "homeModifications": "Gunakan kursi dengan dudukan agak tinggi dan pegangan tangan kokoh; pasang lift tangga (stair lift) bila ada tangga di rumah; pasang pegangan dinding di kamar mandi."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Jaringan Lemak & Otot <-> Sendi Tulang (Osteoartritis), Pankreas & Jantung",
      "biologicalMechanism": "Obesitas sarkopenik adalah kombinasi paling merusak dalam kedokteran metabolik. Beban bobot lemak berlebih menekan tulang rawan sendi lutut dan panggul, sementara otot penyangga sendi telah lenyap, memicu Osteoartritis Destruktif yang melumpuhkan kemampuan berjalan. Pada saat yang sama, hilangnya penyerapan gula oleh otot berpadu dengan racun sitokin lemak memicu Resistensi Insulin Ekstrem, Gagal Jantung Kongestif dengan Ejeksi Fraksi Terjaga (HFpEF), dan Sindrom Hipoventilasi Obesitas Paru.",
      "clinicalImpact": "Penderita obesitas sarkopenik memiliki angka mortalitas dan kecacatan 2 kali lebih tinggi dibanding lansia dengan obesitas biasa atau sarkopenia biasa.",
      "prevention": "Prioritaskan latihan mempertahankan kekuatan otot di atas sekadar menurunkan angka timbangan; pastikan asupan protein tinggi harian terlindungi."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Adipositas Sarcopenica / Myosteatosis Degenerativa",
      "icd10": "E66.8 / M62.84",
      "latinTerms": [
        {
          "term": "Infiltratio Adiposa Intramuscularis (IMAT)",
          "meaning": "Penyusupan jaringan lemak ektopik ke dalam fasikulus otot rangka yang melumpuhkan daya kontraksi."
        },
        {
          "term": "Gonarthrosis Destructiva Bilateralis",
          "meaning": "Pengapuran dan kerusakan rawan sendi lutut berat akibat beban tubuh berlebih tanpa penyangga otot adekuat."
        },
        {
          "term": "Hyposecretio Myokinorum",
          "meaning": "Penurunan sekresi hormon pelindung miokin (irisin dan IL-15) dari otot rangka yang mempercepat akumulasi lemak."
        },
        {
          "term": "Disabilitas Lokomotorica Duplex",
          "meaning": "Kombinasi disabilitas gerak ganda: tubuh terlalu berat untuk digerakkan oleh otot yang terlalu lemah."
        },
        {
          "term": "Syndroma Kardiometabolica Senilis",
          "meaning": "Peningkatan risiko gagal jantung ejeksi fraksi terjaga (HFpEF) dan mortalitas vaskular dini."
        }
      ]
    }
  },
  "rinitis-alergi": {
    "pathophysiology": {
      "cellularMechanism": "Paparan alergen inhalan (debu rumah, tungau, serbuk) memicu reaksi hipersensitivitas tipe 1 yang dimediasi oleh IgE pada mukosa kavum nasi. Degranulasi sel mast melepaskan histamin, leukotrien C4/D4, dan prostaglandin D2, memicu vasodilatasi pleksus vena konka nasalis, ekstravasasi plasma, serta hipersekresi kelenjar goblet seromukosa.",
      "geriatricFactor": "Mukosa kavum nasi lansia mengalami atrofi kelenjar seromukosa (rhinitis sicca/atrofika) dan penurunan vaskularisasi mikrosirkulasi. Hal ini membuat epitel lebih rentan luka, krusta, mimisan (epistaksis anterior pleksus Kiesselbach), dan infeksi bakteri sekunder.",
      "organImpact": "Kongesti konka inferior yang persisten menyumbat ostium sinus paranasal, memicu retensi mukus anaerobik dan berkembang menjadi rinosinusitis kronis dengan poliposis nasi."
    },
    "geriatricSymptoms": {
      "classical": "Bersin beruntun (>5 kali saat bangun pagi), rinorea cair jernih (hidung meler), mata berair dan gatal pada konjungtiva.",
      "atypicalGeriatric": "Post-nasal drip kronis (lendir mengalir ke tenggorokan belakang) yang memicu batuk kering malam hari persisten, gangguan tidur obstruktif (obstructive sleep apnea), sakit kepala tumpul di area dahi dan pipi, serta penurunan sensasi rasa makan (anosmia/ageusia) yang memicu malnutrisi.",
      "whyDifferent": "Penurunan tonus simpatis mukosa hidung lansia menyebabkan respon vasodilatasi pasif lebih dominan daripada degranulasi histamin akut."
    },
    "staging": {
      "scoreName": "Klasifikasi ARIA (Allergic Rhinitis and its Impact on Asthma)",
      "stages": [
        {
          "level": "Intermiten Ringan",
          "criteria": "Gejala timbul <4 hari per minggu atau <4 minggu berturut-turut, tidak mengganggu tidur dan aktivitas harian.",
          "risk": "Terkontrol baik - Antihistamin generasi kedua oral saat timbul gejala."
        },
        {
          "level": "Persisten Sedang",
          "criteria": "Gejala >4 hari per minggu dan >4 minggu berturut-turut, mulai mengganggu kualitas tidur atau memicu batuk malam.",
          "risk": "Perlu kortikosteroid semprot hidung dosis rendah harian dan irigasi larutan garam fisiologis."
        },
        {
          "level": "Persisten Berat / Sinusitis Sekunder",
          "criteria": "Obstruksi hidung total bilateral, anosmia komplit, nyeri tekan sinus maksilaris/frontalis, ingus mukopurulen kental berbau.",
          "risk": "Risiko infeksi intrakranial atau perluasan ke orbita - Rujukan spesialis THT untuk nasoendoskopi."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Kadar IgE Total & Spesifik Serum",
          "param": "Peningkatan kadar IgE kuantitatif untuk konfirmasi atopi alergi inhalan."
        },
        {
          "test": "Hitung Eosinofil Darah Lengkap",
          "param": "Eosinofilia (>400-500 sel/uL) menandakan aktivasi jalur inflamasi Th2 aktif."
        }
      ],
      "imaging": "Foto rontgen posisi Waters atau CT-scan sinus paranasal non-kontras untuk mendeteksi penebalan mukosa dan air-fluid level sinus.",
      "goldStandard": "Pemeriksaan Nasoendoskopi fleksibel rigid oleh dokter spesialis THT untuk visualisasi meatus medius dan konka."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Kortikosteroid nasal topikal (Mometasone furoate atau Fluticasone furoate 1 spray/lubang hidung/hari) dikombinasikan dengan cuci hidung larutan NaCl 0.9% hangat 2 kali sehari.",
      "beersCriteria": "KRITERIA BEERS: HINDARI antihistamin generasi pertama oral (Difenhidramin, Klorfeniramin/CTM) karena efek antikolinergik kuat yang memicu delirium akut, retensi urin akut pada lansia BPH, glaukoma sudut tertutup, dan risiko jatuh!",
      "monitoring": "Evaluasi mukosa hidung dari risiko iritasi atau epistaksis topikal; ganti dengan saline spray jika mukosa sangat kering."
    },
    "clinicalNutrition": {
      "macroMicro": "Asupan cairan cukup 2 liter/hari untuk mengencerkan lendir, vitamin C 500 mg, dan seng (zinc) 15 mg/hari.",
      "recommendedFoods": "Sup kaldu hangat rempah jahe, teh herbal kamomil tanpa gula, buah beri kaya bioflavonoid (antioksidan kuersetin alami).",
      "contraindicatedFoods": "Minuman es dingin, makanan tinggi histamin fermentasi basi, dan susu olahan berlemak tinggi yang mengentalkan mukus."
    },
    "emergency": {
      "immediateTriggers": "Epistaksis masif posterior yang tidak berhenti setelah ditekan 15 menit, bengkak dan kemerahan hebat pada kelopak mata (selulitis periorbita), atau demam tinggi disertai kaku kuduk.",
      "firstAidHome": "Posisikan duduk condong ke depan (jangan menengadah), jepit cuping hidung kuat-kuat selama 10-15 menit menggunakan ibu jari dan telunjuk sambil bernapas lewat mulut, kompres es di pangkal hidung."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan teknik cuci hidung mandiri dengan semprotan spuit 20 cc atau neti pot menggunakan garam fisiologis steril secara lembut.",
      "homeModifications": "Gunakan sarung bantal anti-tungau (dust-mite proof), cuci sprei dengan air panas 60°C tiap minggu, hindari pemakaian karpet tebal berbulu dan boneka di kamar lansia, gunakan air purifier dengan filter HEPA."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saluran Napas Atas & Bawah (United Airway Disease) serta Sistem Saraf",
      "biologicalMechanism": "Inflamasi mukosa hidung melepaskan sitokin ke sirkulasi sistemik yang memperburuk reaktivitas bronkial paru (memicu eksaserbasi asma). Kongesti hidung kronis memaksa pernapasan lewat mulut (mouth breathing) yang mengeringkan faring dan memicu mikroaspirasi bakteri mulut ke paru.",
      "clinicalImpact": "Pasien lansia dengan rinitis alergi yang tidak ditangani mengalami perburukan kualitas tidur, penurunan kognisi akibat hipoksia intermiten nokturnal, dan risiko infeksi pneumonia sekunder.",
      "prevention": "Kontrol alergen lingkungan ketat, irigasi hidung teratur sebelum tidur, dan vaksinasi influenza tahunan."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Rhinitis Allergica Chronica & Sinusitis Maxillaris",
      "icd10": "J30.4 / J32.0",
      "latinTerms": [
        {
          "term": "Hypertrophia Conchae",
          "meaning": "Pembengkakan bantalan daging rongga hidung yang menyumbat aliran udara napas."
        },
        {
          "term": "Rhinorrhea Mucopurulenta",
          "meaning": "Keluarnya cairan lendir kental dari hidung akibat peradangan mukosa."
        },
        {
          "term": "Pruritus Nasi",
          "meaning": "Sensasi gatal menggelitik hebat di hidung yang memicu bersin berulang."
        },
        {
          "term": "Sinusitis Maxillaris",
          "meaning": "Radang pada rongga udara tulang pipi yang memicu rasa tertekan di wajah."
        },
        {
          "term": "Anosmia / Hyposmia",
          "meaning": "Penurunan atau hilangnya kepekaan indra penciuman."
        }
      ]
    }
  },
  "trakeitis-laringitis": {
    "pathophysiology": {
      "cellularMechanism": "Infeksi virus parainfluenza, influenza, atau kuman atipikal menginvasi epitel silindris bersilia laring dan trakea. Terjadi infiltrasi leukosit PMN, edema submukosa pita suara (plika vokalis) dan ruang subglotis, serta produksi lendir kental yang mengering menjadi krusta trakeal (tracheal crusting).",
      "geriatricFactor": "Kalsifikasi tulang rawan tiroid dan krikoid serta atrofi otot-otot intrinsik laring (presbifonia) menurunkan elastisitas pita suara dan mempersempit diameter lumen trakea.",
      "organImpact": "Edema subglotis sebesar 1 mm pada lansia dapat mempersempit luas penampang jalan napas hingga lebih dari 35%, memicu peningkatan resistensi aliran udara napas secara eksponensial."
    },
    "geriatricSymptoms": {
      "classical": "Suara serak mendadak (disfonia), nyeri tenggorokan tajam saat berbicara, batuk kering menggonggong.",
      "atypicalGeriatric": "Kehilangan suara total mendadak (afonia) tanpa nyeri mencolok, sesak napas saat istirahat dengan bunyi ngik kasar saat menarik napas (stridor inspiratorius), kesulitan menelan saliva, dan retraksi suprasternal.",
      "whyDifferent": "Menurunnya persepsi nyeri laringeal pada lansia membuat pasien sering datang terlambat saat lumen trakea sudah menyempit kritis."
    },
    "staging": {
      "scoreName": "Klasifikasi Obstruksi Jalan Napas Atas (Skor Westley Modifikasi)",
      "stages": [
        {
          "level": "Derajat 1 (Ringan)",
          "criteria": "Suara serak, batuk menggonggong intermiten, tidak ada stridor saat istirahat.",
          "risk": "Terapi rawat jalan - Istirahat suara total, hidrasi hangat, humidifikasi udara."
        },
        {
          "level": "Derajat 2 (Sedang)",
          "criteria": "Stridor terdengar jelas saat istirahat tenang, retraksi dinding dada ringan.",
          "risk": "Perlu observasi IGD - Terapi nebulisasi kortikosteroid/epinefrin dan oksigenasi."
        },
        {
          "level": "Derajat 3 (Berat / Mengancam Nyawa)",
          "criteria": "Stridor inspiratorius dan ekspiratorius keras, takipnea berat, sianosis bibir, agitasi/letargi.",
          "risk": "Kegagalan napas akut darurat - Siapkan intubasi endotrakeal terencana atau trakeostomi darurat."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Analisis Gas Darah (AGD)",
          "param": "Hipoksemia (PaO2 <60 mmHg) dan hiperkapnia (PaCO2 >45 mmHg) menandakan hipoventilasi alveolar kritis."
        },
        {
          "test": "Kultur Swab Laring / Trakea",
          "param": "Identifikasi bakteri patogen spesifik (Staphylococcus aureus, Streptococcus grup A)."
        }
      ],
      "imaging": "Foto rontgen leher anteroposterior (AP) memperlihatkan 'Steeple Sign' (penyempitan konus subglotis meruncing seperti menara gereja).",
      "goldStandard": "Laringoskopi serat optik fleksibel (Fiberoptic Laryngoscopy) langsung melihat edema dan mobilitas pita suara."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Kortikosteroid sistemik (Deksametason IV 0.15-0.6 mg/kgBB) atau nebulisasi Budesonid 1-2 mg untuk mengurangi edema laringeal cepat; antibiotik jika dicurigai trakeitis bakterialis.",
      "beersCriteria": "HINDARI obat penekan batuk narkotik berbasis kodein dosis tinggi pada lansia yang memicu retensi mukus trakea dan sedasi pernapasan berat.",
      "monitoring": "Pantau saturasi oksigen berkelanjutan (pulse oximetry) dan tanda kelelahan otot pernapasan."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet cair lembut non-iritatif suhu ruang, cairan elektrolit hangat 2000-2500 mL/hari.",
      "recommendedFoods": "Kaldu ayam bening, puding lunak berbahan susu almond, air madu hangat suam-suam kuku.",
      "contraindicatedFoods": "Gorengan kering berminyak, kerupuk bertekstur tajam, makanan pedas bersambal, dan minuman berkafein tinggi."
    },
    "emergency": {
      "immediateTriggers": "Stridor yang semakin keras saat bernapas, ketidakmampuan menelan ludah (drooling), napas cuping hidung, gelisah ekstrem atau penurunan kesadaran.",
      "firstAidHome": "Duduk tegak jangan dibaringkan, bawa lansia menghirup uap air hangat dari baskom, hindari memeriksa tenggorokan dengan sendok/tongue spatel di rumah, segera larikan ke IGD RS terdekat."
    },
    "rehabilitation": {
      "physicalExercises": "Vocal rest total (hindari berbisik keras karena berbisik justru meregangkan pita suara lebih kuat daripada berbicara biasa).",
      "homeModifications": "Pasang cool-mist humidifier di samping tempat tidur lansia untuk melembapkan saluran napas semalaman."
    },
    "systemCrossTalk": {
      "primaryLink": "Hubungan Saluran Napas, Pita Suara & Saluran Cerna Atas (Refluks Asam)",
      "biologicalMechanism": "Penyakit asam lambung (GERD/LPR) mengalirkan asam lambung dan pepsin mikroskopis ke laring dan trakea (silent reflux), membakar mukosa pita suara secara kimiawi dan memicu trakeolaringitis steril berulang.",
      "clinicalImpact": "Spasme laringeal nokturnal akibat iritasi asam dapat memicu henti napas sesaat (laryngospasm) dan kepanikan akut pada lansia.",
      "prevention": "Jangan berbaring dalam waktu 3 jam setelah makan, gunakan bantal baji (wedge pillow) elevasi 30 derajat."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Laryngotracheitis Infectiosa Acuta & Presbyphonia",
      "icd10": "J04.2",
      "latinTerms": [
        {
          "term": "Dysphonia / Aphonia",
          "meaning": "Kondisi suara parau, serak berat, hingga hilang sama sekali."
        },
        {
          "term": "Stridor Inspiratorius",
          "meaning": "Bunyi napas melengking kasar saat menarik napas tanda penyempitan pipa napas."
        },
        {
          "term": "Tussis Canina",
          "meaning": "Batuk keras menggonggong akibat getaran pita suara yang bengkak."
        },
        {
          "term": "Oedema Laryngeale",
          "meaning": "Pembengkakan jaringan lunak pita suara yang menyempitkan lumen pipa napas."
        },
        {
          "term": "Odynophagia",
          "meaning": "Rasa nyeri menusuk saat menelan ludah atau makanan."
        }
      ]
    }
  },
  "disfagia": {
    "pathophysiology": {
      "cellularMechanism": "Disfungsi koordinasi neuromuskular pada fase orofaringeal atau esofageal proses menelan. Kegagalan relaksasi sfingter esofagus atas (otot krikofaringeus), pelemahan peristalsis korpus esofagus, atau penyempitan anatomis lumen esofagus (striktur cincin Schatzki) menghambat transit bolus makanan dari mulut menuju lambung.",
      "geriatricFactor": "Presbifagia: atrofi otot lidah, otot konstriktor faring, berkurangnya kelenjar saliva (xerostomia), serta penurunan elastisitas jaringan ikat esofagus akibat penuaan.",
      "organImpact": "Stagnasi bolus di valekula atau sinus piriformis berisiko meluap masuk ke laring, memicu pneumonia aspirasi berulang yang merusak parenkim paru."
    },
    "geriatricSymptoms": {
      "classical": "Sensasi makanan tersangkut di belakang tulang dada (retrosternal), rasa nyeri saat menelan (odinofagia), batuk tersedak saat makan nasi.",
      "atypicalGeriatric": "Penurunan berat badan progresif tanpa keluhan lapar, waktu makan yang sangat lama (>45 menit per porsi), suara berubah 'basah' bergelembung (wet voice) setelah minum air, dan pneumonia berulang tanpa demam.",
      "whyDifferent": "Penurunan refleks sensorik saraf kranial IX (Glosofaringeus) dan X (Vagus) menyebabkan hilangnya batuk protektif saat makanan masuk ke laring."
    },
    "staging": {
      "scoreName": "Skala Disfagia DOSS (Dysphagia Outcome and Severity Scale)",
      "stages": [
        {
          "level": "Tingkat 1 - 2 (Disfagia Berat)",
          "criteria": "Tidak aman untuk asupan oral; aspirasi masif >10% bolus pada semua konsistensi.",
          "risk": "Puasa oral total - Nutrisi enteral via selang lambung (NGT) atau gastrostomi endoskopi perkutan (PEG)."
        },
        {
          "level": "Tingkat 3 - 5 (Disfagia Sedang)",
          "criteria": "Asupan oral dengan modifikasi tekstur ketat (makanan blender halus / bubur saring) dan cairan kental (thickened liquids).",
          "risk": "Perlu pendampingan ketat oleh terapis wicara dan pengawasan saat makan."
        },
        {
          "level": "Tingkat 6 - 7 (Disfagia Ringan / Normal)",
          "criteria": "Mampu menelan makanan lunak padat dengan teknik kompensasi (head turn, chin tuck).",
          "risk": "Nutrisi oral mandiri dengan kewaspadaan."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Albumin & Prealbumin Serum",
          "param": "Evaluasi derajat keparahan malnutrisi kalori-protein akibat ketidakmampuan menelan."
        },
        {
          "test": "Elektrolit Serum Lengkap",
          "param": "Mendeteksi dehidrasi hipernatremik akibat kesulitan menelan cairan."
        }
      ],
      "imaging": "Barium Swallow / Esofagografi fluoroskopi untuk menilai motilitas esofagus dan menyingkirkan divertikulum Zenker.",
      "goldStandard": "Videofluoroscopic Swallowing Study (VFSS) atau Fiberoptic Endoscopic Evaluation of Swallowing (FEES)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Koreksi xerostomia dengan saliva buatan (carboxymethylcellulose spray); terapi prokinetik esofagus bila terdapat hipomotilitas lambung-esofagus.",
      "beersCriteria": "HINDARI obat antikolinergik (Oksibutinin, Amitriptilin) yang menyebabkan mulut kering parah dan melumpuhkan peristalsis saluran cerna atas.",
      "monitoring": "Pantau berat badan mingguan dan status hidrasi kulit membran mukosa."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet tinggi kalori tinggi protein (TKTP) 1.5 g protein/kgBB dalam bentuk bubur saring bertekstur madu/nektar (level IDDSI 3-4).",
      "recommendedFoods": "Puree alpukat, bubur sumsum telur, sup krim kental berkalori tinggi dengan bahan pengental (food thickener).",
      "contraindicatedFoods": "Air putih encer tanpa pengental, kacang-kacangan keras, daging liat berserat panjang, biskuit renyah yang mudah hancur berhamburan."
    },
    "emergency": {
      "immediateTriggers": "Tersedak akut dengan tanda choking universal (memegang leher), tidak bisa bernapas atau bersuara, bibir membiru (asfiksia bolus).",
      "firstAidHome": "Lakukan manuver Heimlich bila lansia sadar, atau kompresi dada resusitasi jika pingsan; jangan memasukkan jari membabi buta ke tenggorokan."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan menelan manuver Mendelsohn, latihan fleksi leher (Shaker Exercise), dan teknik postur menelan 'Chin-Tuck' (menundukkan dagu ke dada saat menelan).",
      "homeModifications": "Gunakan cangkir khusus dysphasia cup (nose cut-out cup) agar lansia tidak perlu menengadahkan kepala saat minum."
    },
    "systemCrossTalk": {
      "primaryLink": "Interaksi Sistem Saraf Pusat (Stroke/Parkinson), Otot Deglutisi & Saluran Napas",
      "biologicalMechanism": "Penyakit neurodegeneratif (Parkinson/Demensia) atau infark batang otak melumpuhkan koordinasi fase faringeal menelan. Otot orofaring yang lumpuh menyebabkan cairan dan bakteri flora mulut bocor ke bronkus, memicu radang paru basah aspirasi.",
      "clinicalImpact": "Disfagia merupakan jembatan patologis utama antara penyakit saraf degeneratif dan kematian akibat pneumonia aspirasi pada geriatri.",
      "prevention": "Skrining rutin uji menelan air 30 mL (GUSS test) pada semua pasien pascastroke dan demensia sebelum pemberian makan oral."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Dysphagia Oesophagea & Presbyphagia Geriatrica",
      "icd10": "R13.10",
      "latinTerms": [
        {
          "term": "Presbyphagia",
          "meaning": "Penurunan alami kekuatan otot dan refleks menelan akibat proses penuaan."
        },
        {
          "term": "Aspiratio Pulmonum",
          "meaning": "Masuknya bolus makanan atau cairan ke paru-paru yang memicu infeksi basah."
        },
        {
          "term": "Deglutitio Obstructiva",
          "meaning": "Sensasi tersangkut atau terganjalnya makanan di kerongkongan dada atas."
        },
        {
          "term": "Xerostomia",
          "meaning": "Kekeringan rongga mulut ekstrem akibat atrofi kelenjar ludah pada lansia."
        },
        {
          "term": "Peristaltis Oesophagei Deficiens",
          "meaning": "Pelemahan gerakan memeras kerongkongan untuk mendorong makanan ke lambung."
        }
      ]
    }
  },
  "tukak-lambung": {
    "pathophysiology": {
      "cellularMechanism": "Ketidakseimbangan antara faktor agresif (asam klorida HCl, pepsin, kolonisasi Helicobacter pylori) dan faktor defensif barier mukosa lambung (lapisan mukus bikarbonat, prostaglandin E2/I2, aliran darah mikrosirkulasi mukosa). Kerusakan menembus lapisan muskularis mukosa membentuk ulkus berbatas tegas.",
      "geriatricFactor": "Penurunan sintesis prostaglandin endogen di lambung lansia diperparah oleh tingginya konsumsi obat antinyeri pegal linu (NSAID non-steroid) dan aspirin pencegah stroke/jantung tanpa pelindung lambung.",
      "organImpact": "Erosi pembuluh darah submukosa dapat memicu perdarahan saluran cerna bagian atas masif (hematemesis/melena) atau perforasi dinding lambung yang menumpahkan asam ke rongga peritoneum."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri ulu hati pedih menusuk (epigastric pain) 1-3 jam setelah makan, rasa terbakar di dada, mual muntah.",
      "atypicalGeriatric": "Sering bersifat 'Silent Ulcer' (tanpa nyeri perut sama sekali). Datang langsung dengan tanda anemia defisiensi besi berat (lemas ekstrem, pucat, pusing melayang saat berdiri), tinja hitam pekat seperti aspal (melena), atau syncope (pingsan mendadak).",
      "whyDifferent": "Penurunan nosiseptif viseral dan neuropati otonom geriatri membuat ulkus luas tidak memicu respon nyeri klasik."
    },
    "staging": {
      "scoreName": "Klasifikasi Endoskopi Forrest (Risiko Perdarahan Ulang)",
      "stages": [
        {
          "level": "Forrest I (Perdarahan Aktif)",
          "criteria": "Ia: Perdarahan memancar arterial (spurting); Ib: Perdarahan merembes (oozing).",
          "risk": "Risiko tinggi perdarahan ulang (90%) - Terapi hemostatik endoskopi segera (klip hemostatik / koagulasi termal)."
        },
        {
          "level": "Forrest II (Stigmata Perdarahan Baru)",
          "criteria": "IIa: Pembuluh darah tampak menonjol (visible vessel); IIb: Bekuan darah melekat (adherent clot); IIc: Bercak hitam hematin.",
          "risk": "Risiko perdarahan ulang sedang (30-50%) - PPI dosis tinggi intravena berkelanjutan."
        },
        {
          "level": "Forrest III (Ulkus Dasar Bersih)",
          "criteria": "Dasar ulkus tertutup fibrin putih bersih tanpa stigmata vaskular.",
          "risk": "Risiko perdarahan ulang rendah (<5%) - Terapi oral rawat jalan terkontrol."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Hemoglobin & Hematokrit Serial",
          "param": "Penurunan Hb drastis (<8-9 g/dL) mendeteksi perdarahan aktif lambung tersembunyi."
        },
        {
          "test": "Urea Breath Test (UBT) / Fecal H. pylori Antigen",
          "param": "Konfirmasi infeksi bakteri Helicobacter pylori sebagai etiologi kausatif."
        }
      ],
      "imaging": "Foto rontgen abdomen 3 posisi tegak melihat udara bebas subdiafragma (pneumoperitoneum) bila terjadi perforasi lambung.",
      "goldStandard": "Esofagogastroduodenoskopi (EGD) fleksibel dengan biopsi mukosa tepi ulkus untuk menyingkirkan adenokarsinoma lambung."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Penghambat Pompa Proton (PPI: Esomeprazole 40 mg atau Pantoprazole 40 mg 2x/hari) sebelum makan; regimen eradikasi H. pylori (Klaritromisin + Amoksisilin + PPI) selama 14 hari bila positif.",
      "beersCriteria": "KRITERIA BEERS: Waspadai penggunaan NSAID jangka panjang (Ketorolak, Piroksikam, Diklofenak) pada lansia. Jika obat antinyeri mutlak diperlukan, gunakan Parasetamol atau pertimbangkan celecoxib dosis minimal disertai PPI gastroprotektif.",
      "monitoring": "Pantau feses darah samar (FOBT) dan kadar hemoglobin berkala."
    },
    "clinicalNutrition": {
      "macroMicro": "Porsi makan kecil tetapi sering (small frequent meals 5-6 kali/hari) bertekstur lunak rendah asam dan rendah lemak jenuh.",
      "recommendedFoods": "Bubur beras halus, ikan kukus tanpa bumbu tajam, tahu sutra rebus, pisang ambon matang, labu kuning kukus.",
      "contraindicatedFoods": "Kopi hitam berkafein, alkohol, jamu tradisional pegal linu berpencampur kimia obat (BKO steroid), cabai pedas, dan cuka."
    },
    "emergency": {
      "immediateTriggers": "Muntah darah merah segar atau cairan hitam seperti ampas kopi, BAB hitam pekat lengket berbau bangkai amis (melena), perut mengeras kaku seperti papan kayu (peritonitis perforasi), tekanan darah sistolik anjlok <90 mmHg.",
      "firstAidHome": "Baringkan datar tinggikan tungkai kaki 30 derajat (posisi syok), jangan berikan minum atau obat per oral, segera bawa ke IGD rumah sakit menggunakan ambulans."
    },
    "rehabilitation": {
      "physicalExercises": "Hindari olahraga mengejan berat atau mengangkat beban yang meningkatkan tekanan intra-abdomen; jalan santai pagi hari 15 menit.",
      "homeModifications": "Simpan obat-obatan antinyeri keras di tempat terpisah agar lansia tidak salah meminumnya secara mandiri saat merasa pegal sendi."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Lambung, Sistem Sirkulasi Darah & Ginjal (NSAID Toxicity)",
      "biologicalMechanism": "Obat NSAID yang dikonsumsi untuk nyeri sendi (osteoartritis) menghambat enzim COX-1 di lambung yang memicu tukak berdarah. Perdarahan masif memicu hipovolemia, menurunkan perfusi darah ke ginjal, dan memicu Gagal Ginjal Akut (Acute Kidney Injury) serta dekompensasi jantung pada lansia.",
      "clinicalImpact": "Trias komorbiditas geriatri: Nyeri sendi -> Penggunaan NSAID sembarangan -> Perdarahan lambung -> Gagal ginjal akut dan syok kardiogenik.",
      "prevention": "Edukasi keluarga untuk tidak memberikan jamu pegal linu tanpa izin dokter dan wajib menambahkan PPI saat lansia meminum aspirin preventif kardiovaskular."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Ulcus Pepticum Gastricum cum Haemorrhagia Interna",
      "icd10": "K25.4 / K25.9",
      "latinTerms": [
        {
          "term": "Erosio Mucosae Gastricae",
          "meaning": "Kerusakan barier mukosa lambung yang mengikis lapisan submukosa hingga dinding otot."
        },
        {
          "term": "Haematemesis",
          "meaning": "Muntah darah merah segar atau kehitaman akibat perdarahan pembuluh darah lambung."
        },
        {
          "term": "Melaena",
          "meaning": "Buang air besar hitam pekat seperti aspal dan berbau amis khas darah tercerna."
        },
        {
          "term": "Helicobacter Pylori",
          "meaning": "Bakteri spiral yang merusak dinding lambung dan memicu tukak lambung kronis."
        },
        {
          "term": "Perforatio Ventriculi",
          "meaning": "Robek atau bocornya dinding lambung yang memicu peritonitis akut darurat bedah."
        }
      ]
    }
  },
  "fatty-liver": {
    "pathophysiology": {
      "cellularMechanism": "Resistensi insulin perifer memicu lipolisis berlebih di jaringan adiposa viseral, membanjiri hepar dengan asam lemak bebas (FFA). Hepatosis mengalami akumulasi trigliserida intraseluler (>5% bobot hepar). Lipotoksisitas memicu stres retikulum endoplasma, disfungsi mitokondria, dan pembentukan Reactive Oxygen Species (ROS), mendorong transisi dari perlemakan sederhana (steatosis) menjadi peradangan nekrotik (Steatohepatitis / MASH/NASH) yang mengaktifkan sel stelata hepar menjadi miofibroblas penghasil kolagen parut.",
      "geriatricFactor": "Penurunan massa otot rangka (sarkopenia) pada lansia mengurangi tempat penyimpanan glukosa terbesar, memperburuk resistensi insulin dan mempercepat penumpukan lemak hati bahkan pada lansia berbobot tubuh normal (lean NAFLD).",
      "organImpact": "Fibrosis hepar progresif merusak vaskularisasi sinusoid hepar, menyebabkan hipertensi porta, splenomegali, varises esofagus, dan sirosis hati stadium akhir."
    },
    "geriatricSymptoms": {
      "classical": "Sering asimtomatik (tanpa keluhan). Sebagian merasakan rasa penuh tumpul tidak nyaman di perut kanan atas (hipokondrium kanan).",
      "atypicalGeriatric": "Kelelahan kronis berkepanjangan (fatigue), penurunan daya ingat dan konsentrasi (brain fog geriatri), pembesaran perut akibat penumpukan cairan asites ringan, dan pembengkakan tungkai kaki bawah bilateral.",
      "whyDifferent": "Ketiadaan serabut saraf sensorik nyeri di dalam parenkim hepar membuat peradangan berlangsung diam-diam (silent killer) hingga terjadi kerusakan struktural luas."
    },
    "staging": {
      "scoreName": "Skor Non-Invasif Fibrosis-4 (FIB-4 Index)",
      "stages": [
        {
          "level": "FIB-4 < 1.30 (Pada Usia ≥65 Thn <2.0)",
          "criteria": "Skor rendah dihitung dari: [Usia x AST] / [Trombosit x akar ALT].",
          "risk": "Fibrosis lanjut (F3-F4) dapat disingkirkan dengan nilai prediksi negatif >90% - Modifikasi gaya hidup."
        },
        {
          "level": "FIB-4 Indeterminate (2.0 - 2.67)",
          "criteria": "Kategori abu-abu; risiko fibrosis sedang.",
          "risk": "Perlu evaluasi pencitraan elastografi hepar (FibroScan) lanjutan."
        },
        {
          "level": "FIB-4 > 2.67",
          "criteria": "Skor tinggi menandakan kemungkinan besar fibrosis hati lanjut hingga sirosis.",
          "risk": "Rujukan ke konsultan Gastroenterohepatologi; skrining varises esofagus dan USG hepar berkala untuk karsinoma hepatoseluler (HCC)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Panel Enzim Hepar (SGOT/AST & SGPT/ALT)",
          "param": "Peningkatan rasio AST/ALT >1 pada lansia mengindikasikan progresi ke arah fibrosis lanjut."
        },
        {
          "test": "Profil Lipid & Hemoglobin A1c (HbA1c)",
          "param": "Trigliserida tinggi (>150 mg/dL), HDL rendah (<40 mg/dL), dan HbA1c >6.5% mendasari sindrom metabolik."
        }
      ],
      "imaging": "USG Abdomen menunjukkan peningkatan ekogenisitas difus parenkim hepar ('Bright Liver') dan pelemahan akustik posterior.",
      "goldStandard": "Biopsi hepar perkutan atau Transient Elastography (FibroScan) dengan parameter CAP (Controlled Attenuation Parameter)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Optimasi kontrol metabolik: Vitamin E (d-alpha-tocopherol 800 IU/hari pada non-diabetes), agonis reseptor GLP-1 (Semaglutide), atau obat SGLT-2 inhibitor yang memperbaiki steatosis hepar.",
      "beersCriteria": "Hindari konsumsi suplemen herbal pembersih liver tak terstandar yang sering mengandung zat hepatotoksik (Drug-Induced Liver Injury) pada lansia.",
      "monitoring": "USG hepar dan penanda tumor alfa-fetoprotein (AFP) tiap 6 bulan bila sudah terdapat fibrosis lanjut."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet Mediterania: karbohidrat kompleks indeks glikemik rendah, lemak tak jenuh ganda (PUFA/MUFA), restriksi fruktosa murni.",
      "recommendedFoods": "Minyak zaitun extra virgin, ikan kembung/salmon kaya omega-3, brokoli kukus, kacang kenari, kopi hitam tanpa gula 1-2 cangkir/hari (efek hepatoprotektif).",
      "contraindicatedFoods": "Minuman berpemanis sirup jagung fruktosa tinggi (minuman kemasan), gorengan lemak trans, dan daging olahan tinggi nitrat."
    },
    "emergency": {
      "immediateTriggers": "Munculnya penyakit kuning (mata dan kulit ikterik gelap), muntah darah segar, perut membuncit tegang dalam beberapa hari (asites akut), atau bicara melantur linglung (ensefalopati hepatikum).",
      "firstAidHome": "Bawa segera ke IGD rumah sakit, jangan berikan obat penenang tidur saat pasien melantur, posisikan kepala tempat tidur sedikit terangkat."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan ketahanan fisik aerobik (jalan cepat 30 menit 5 kali/minggu) dikombinasikan dengan latihan beban ringan untuk membangun massa otot rangka penyerap glukosa.",
      "homeModifications": "Timbangan berat badan digital dan pita ukur lingkar pinggang di rumah untuk memantau reduksi lemak viseral bertahap (target penurunan 7-10% berat badan)."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Jaringan Lemak Viseral, Otot Rangka (Sarkopenia) & Organ Hati",
      "biologicalMechanism": "Lemak viseral di sekitar organ perut melepaskan sitokin racun (TNF-α, IL-6) langsung ke vena porta hepar. Sementara sarkopenia pada lansia memperparah resistensi insulin, menciptakan lingkaran setan penumpukan lemak hati, dislipidemia, dan aterosklerosis pembuluh darah koroner jantung.",
      "clinicalImpact": "Penyebab kematian nomor 1 pada pasien Fatty Liver bukanlah gagal hati, melainkan serangan jantung koroner dan stroke iskemik.",
      "prevention": "Kombinasi latihan fisik resistensi untuk mencegah sarkopenia dan diet rendah karbohidrat sederhana secara konsisten."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Steatosis Hepatis Non-Alcoholica & Steatohepatitis (MASLD / MASH)",
      "icd10": "K76.0",
      "latinTerms": [
        {
          "term": "Steatosis Hepatis",
          "meaning": "Penumpukan droplet lemak trigliserida melebihi 5% dari berat total organ hati."
        },
        {
          "term": "Steatohepatitis (MASH)",
          "meaning": "Fase peradangan aktif dan kematian sel hati yang dipicu penumpukan lemak beracun."
        },
        {
          "term": "Hepatomegalia",
          "meaning": "Pembesaran ukuran organ hati yang teraba tumpul di bawah lengkung iga kanan."
        },
        {
          "term": "Fibrogenesis Hepatis",
          "meaning": "Pembentukan jaringan parut kolagen yang merusak arsitektur hepar normal."
        },
        {
          "term": "Resistentia Insulini",
          "meaning": "Ketidakmampuan sel merespons hormon insulin sehingga metabolisme lemak terganggu."
        }
      ]
    }
  },
  "pankreatitis": {
    "pathophysiology": {
      "cellularMechanism": "Aktivasi prematur zimogen enzim pencernaan (terutama tripsinogen menjadi tripsin aktif) di dalam sel asinar pankreas, bukan di rongga duodenum. Terjadi proses autodigesti jaringan kelenjar pankreas sendiri, nekrosis sel lemak peripankreatik, kerusakan dinding vaskular kapiler lokal, serta pelepasan masif elastase dan fosfolipase A2 yang memicu sindrom respons inflamasi sistemik (SIRS).",
      "geriatricFactor": "Prevalensi batu empedu mikrolitiasis yang tinggi pada lansia, disfungsi sfingter Oddi, dan aterosklerosis arteri pankreatikoduodenalis meningkatkan kerentanan iskemia pankreas.",
      "organImpact": "Nekrosis pankreas dapat terinfeksi membentuk abses peripankreatik, pseudokista pankreas, atau merembes memicu efusi pleura kiri dan gagal napas ARDS."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri perut ulu hati hebat mendadak tembus ke punggung belakang (band-like pain), membaik saat duduk condong ke depan, muntah terus menerus.",
      "atypicalGeriatric": "Nyeri perut seringkali samar atau ringan; bermanifestasi utama sebagai hipotensi mendadak tak terjelaskan (syok sirkulasi), delirium akut, distensi perut akibat paralisis usus (ileus paralitik), dan takikardia tanpa demam tinggi.",
      "whyDifferent": "Penurunan inervasi sensorik splanknikus pada usia lanjut meredam persepsi nyeri hebat khas pankreatitis."
    },
    "staging": {
      "scoreName": "Klasifikasi Atlanta Revisi & Kriteria Ranson",
      "stages": [
        {
          "level": "Pankreatitis Akut Ringan",
          "criteria": "Tidak ada kegagalan organ fungsional dan tidak ada komplikasi lokal sistemik.",
          "risk": "Resolusi dalam 3-5 hari dengan resusitasi cairan dan nutrisi bertahap."
        },
        {
          "level": "Pankreatitis Akut Sedang",
          "criteria": "Kegagalan organ sementara (<48 jam) atau adanya komplikasi lokal (penumpukan cairan peripankreas akut).",
          "risk": "Perlu perawatan intensif menengah dan pemantauan elektrolit ketat."
        },
        {
          "level": "Pankreatitis Akut Berat",
          "criteria": "Kegagalan organ persisten (>48 jam: kardiovaskular, ginjal, atau paru).",
          "risk": "Mortalitas geriatri mencapai 30-50% - Rawat ICU dengan terapi suportif multiorgan agresif."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Amilase & Lipase Serum",
          "param": "Kadar enzim lipase serum meningkat >3 kali lipat batas atas nilai normal (lebih spesifik dan bertahan lebih lama daripada amilase)."
        },
        {
          "test": "Kalsium Serum & Hematokrit",
          "param": "Hipokalsemia (<8.0 mg/dL akibat saponifikasi lemak) dan hemokonsentrasi (Ht >44%) menandakan kebocoran plasma parah."
        }
      ],
      "imaging": "USG Abdomen untuk mengevaluasi etiologi batu empedu di duktus koledokus; Rontgen toraks mendeteksi efusi pleura basal kiri.",
      "goldStandard": "CT-Scan Abdomen Kontras (CECT) dengan Balthazar Computed Tomography Severity Index (CTSI)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Resusitasi cairan kristaloid dini terarah (Ringer Laktat 5-10 mL/kgBB/jam dengan target urine >0.5 mL/kg/jam), analgesik kuat non-morfin (Fentanil/Parasetamol IV), dan enzim pankreas pengganti (Kreon) pada fase kronis.",
      "beersCriteria": "HINDARI Meperidin (Petidin) pada lansia karena penumpukan metabolit normeperidin yang memicu kejang dan delirium kognitif.",
      "monitoring": "Pantau ketat tanda kelebihan cairan (overload/edema paru geriatri) saat resusitasi cairan kristaloid agresif."
    },
    "clinicalNutrition": {
      "macroMicro": "Pemberian nutrisi enteral dini (dalam 24-48 jam) via selang nasojejunal atau oral cair rendah lemak jika mual mereda.",
      "recommendedFoods": "Kaldu bening tanpa lemak, bubur tepung beras halus, putih telur kukus, sari buah apel encer.",
      "contraindicatedFoods": "Gorengan santan kental, daging kambing/sapi berlemak, mentega, kuning telur, dan minuman beralkohol."
    },
    "emergency": {
      "immediateTriggers": "Bercak memar kebiruan di sekitar pusar (Cullen's sign) atau di area pinggang panggul (Grey Turner's sign) tanda perdarahan retroperitoneal, sesak napas berat, tekanan darah <90/60 mmHg, produksi urine terhenti (anuria).",
      "firstAidHome": "Segera hubungi ambulans IGD, puasakan lansia dari makanan dan minuman per oral untuk mengistirahatkan pankreas, baringkan dengan posisi miring meringkuk."
    },
    "rehabilitation": {
      "physicalExercises": "Mobilisasi pasif di tempat tidur disusul latihan duduk bertahap untuk mencegah tromboemboli vena (DVT) dan atelektasis paru.",
      "homeModifications": "Edukasi keluarga tentang kepatuhan konsumsi kapsul enzim pencernaan saat suapan pertama makan jika berkembang menjadi pankreatitis kronis."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Saluran Empedu (Batu Empedu), Pankreas & Sistem Kardiorespirasi",
      "biologicalMechanism": "Batu empedu yang turun menyumbat muara bersama (ampula Vateri) memicu refluks empedu ke duktus pankreatikus. Enzim tripsin yang bocor ke sirkulasi darah merusak membran kapiler paru, memicu sindrom gagal napas akut ARDS dan syok distributif.",
      "clinicalImpact": "Pankreatitis bilier pada lansia sering memicu kegagalan multiorgan ganda: Gagal ginjal akut + ARDS paru + Gagal sirkulasi kardiogenik.",
      "prevention": "Tindakan ERCP dini (dalam 24-72 jam) untuk ekstraksi batu empedu yang tersangkut di saluran empedu utama."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Pancreatitis Acuta Biliaris & Necroticans",
      "icd10": "K85.1 / K85.9",
      "latinTerms": [
        {
          "term": "Autodigestio Pancreatis",
          "meaning": "Proses organ pankreas mencerna dirinya sendiri akibat enzim aktif prematur di dalam kelenjar."
        },
        {
          "term": "Nekrosis Pancreatica",
          "meaning": "Kematian jaringan kelenjar pankreas akibat inflamasi parah yang melepaskan tripsin."
        },
        {
          "term": "Steatorrhea",
          "meaning": "Tinja berminyak, mengapung, dan berbau busuk tajam akibat kekurangan enzim lipase."
        },
        {
          "term": "Hyperlipasaemia",
          "meaning": "Peningkatan kadar enzim lipase dalam serum darah hingga >3 kali batas atas normal."
        },
        {
          "term": "Insufficientia Exocrina",
          "meaning": "Ketidakmampuan pankreas menghasilkan enzim pencerna karbohidrat, protein, dan lemak."
        }
      ]
    }
  },
  "malabsorpsi": {
    "pathophysiology": {
      "cellularMechanism": "Gangguan pencernaan intraluminal, penyerapan mukosa sel epitel enterosit usus halus, atau pengangkutan limfatik pasca-mukosa. Kerusakan vili usus (blunting/atrofi) mengurangi luas permukaan absorptif, menurunkan ekspresi enzim disakaridase di brush border, dan memicu translokasi bakteri usus.",
      "geriatricFactor": "Penuaan fisiologis usus halus (penurunan aliran darah mesenterika, penurunan motilitas usus, dan pertumbuhan bakteri berlebih di usus halus / SIBO) memperparah penurunan kapasitas absorpsi mikronutrien penting seperti Vitamin B12, Kalsium, dan Folat.",
      "organImpact": "Defisiensi nutrisi kronis memicu anemia megaloblastik/defisiensi besi, osteomalasia rapuh tulang, penurunan albumin darah, dan edema anasarka."
    },
    "geriatricSymptoms": {
      "classical": "Diare kronis berbusa atau berminyak (steatorea), perut kembung begah berbunyi gemuruh (borborigmi), penurunan berat badan drastis.",
      "atypicalGeriatric": "Sering tanpa diare nyata! Muncul sebagai kelemahan otot ekstrem dan mudah jatuh (sarkopenia), rasa kesemutan tebal di telapak kaki (neuropati defisiensi B12), memar-memar kulit tanpa benturan (defisiensi vitamin K), dan linglung/depresi geriatri.",
      "whyDifferent": "Transit usus yang lambat pada lansia membuat feses tetap berbentuk padat meskipun penyerapan mikronutrien telah gagal total."
    },
    "staging": {
      "scoreName": "Penilaian Malnutrisi Geriatri MNA (Mini Nutritional Assessment)",
      "stages": [
        {
          "level": "Status Gizi Normal (Skor 24 - 30)",
          "criteria": "Asupan nutrisi adekuat, berat badan stabil, tidak ada gangguan pencernaan bermakna.",
          "risk": "Skrining tahunan rutin."
        },
        {
          "level": "Berisiko Malnutrisi (Skor 17 - 23.5)",
          "criteria": "Penurunan berat badan 1-3 kg dalam 3 bulan, nafsu makan berkurang ringan, diare intermiten.",
          "risk": "Intervensi dietetik dan suplemen mikronutrien oral terarah."
        },
        {
          "level": "Malnutrisi Berat (Skor < 17)",
          "criteria": "Penurunan BB >3 kg, albumin serum <3.0 g/dL, lingkar betis <31 cm, kelemahan umum tirah baring.",
          "risk": "Risiko infeksi dan mortalitas tinggi - Terapi nutrisi klinis enteral/parenteral agresif."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Kadar Vitamin B12, Folat, & Ferritin Serum",
          "param": "Penurunan bermakna mengindikasikan defisiensi penyerapan ileum terminal dan duodenum."
        },
        {
          "test": "Albumin & Elektrolit Serum (Kalium, Kalsium, Magnesium)",
          "param": "Hipoalbuminemia (<3.0 g/dL) dan hipokalsemia/hipomagnesemia refrakter."
        }
      ],
      "imaging": "Uji Napas Hidrogen (Hydrogen Breath Test) dengan substrat laktulosa untuk mengonfirmasi Small Intestinal Bacterial Overgrowth (SIBO).",
      "goldStandard": "Biopsi mukosa duodenum distal via endoskopi atas untuk analisis histopatologi vili usus (klasifikasi Marsh)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Koreksi SIBO dengan antibiotik non-absorbable (Rifaximin 550 mg 3x/hari selama 14 hari); substitusi vitamin B12 intramuskular (Sianokobalamin 1000 mcg), vitamin D3 dosis tinggi, dan suplemen seng/kalsium.",
      "beersCriteria": "HINDARI obat antidiare penghambat motilitas kuat (Loperamid) dosis tinggi pada malabsorpsi terinfeksi yang dapat memicu megakolon toksik pada lansia.",
      "monitoring": "Pantau lingkar betis, kekuatan genggaman tangan (handgrip dynamometry), dan kadar albumin serum."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet bebas laktosa dan rendah FODMAP sementara, asam lemak rantai menengah (Medium Chain Triglycerides - MCT oil) yang mudah diserap tanpa bantuan lipase.",
      "recommendedFoods": "Dada ayam rebus cincang, telur orak-arik, kaldu tulang kaya kolagen, santan encer olahan MCT, pepaya matang, tempe rebus.",
      "contraindicatedFoods": "Susu sapi tinggi laktosa, pemanis buatan sorbitol/manitol, makanan tinggi gluten gandum jika dicurigai enteropati gluten, sayuran mentah tinggi serat kasar."
    },
    "emergency": {
      "immediateTriggers": "Kelemahan otot ekstrem hingga tidak mampu menopang kepala atau bernapas (hipokalemia berat K <2.5 mEq/L), kejang akibat hipokalsemia akut (tetani), atau dehidrasi syok dengan kesadaran delirium apatis.",
      "firstAidHome": "Segera bawa ke instalasi gawat darurat rumah sakit untuk koreksi elektrolit intravena terukur; jangan memberikan cairan gula pekat yang memperburuk diare osmotik."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan fisioterapi fungsional duduk-ke-berdiri (sit-to-stand exercises) untuk mempertahankan kekuatan otot kuadrisep paha selama pemulihan gizi.",
      "homeModifications": "Sediakan kursi mandi (shower chair) di kamar mandi karena lansia malnutrisi sangat mudah lemas pusing saat mandi berdiri."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Usus Halus (Nutrisi), Sumsum Tulang (Hematopoiesis) & Sistem Saraf",
      "biologicalMechanism": "Malabsorpsi di ileum memutus penyerapan Vitamin B12. Defisiensi B12 merusak sintesis mielin di medula spinalis (Subacute Combined Degeneration) dan memicu neuropati perifer, ataksia gerak, serta anemia pernisiosa dengan kelelahan seluler sistemik.",
      "clinicalImpact": "Pasien lansia sering salah didiagnosis menderita demensia Alzheimer atau stroke padahal sebenarnya menderita disfungsi neurologis akibat malabsorpsi B12 yang dapat disembuhkan.",
      "prevention": "Pemeriksaan rutin kadar B12 dan asam folat pada seluruh lansia dengan penurunan berat badan atau riwayat konsumsi metformin/PPI jangka panjang."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Syndroma Malabsorptionis Intestinalis & Enteropathia Geriatrica",
      "icd10": "K90.9",
      "latinTerms": [
        {
          "term": "Atrophia Villorum Intestinalis",
          "meaning": "Penyusutan jonjot halus usus penyerap nutrisi sehingga luas area absorpsi berkurang."
        },
        {
          "term": "Dysbiosis Intestinalis",
          "meaning": "Ketidakseimbangan mikrobioma bakteri baik di usus halus dan usus besar."
        },
        {
          "term": "Hypoalbuminaemia",
          "meaning": "Kadar protein albumin darah sangat rendah yang memicu penumpukan cairan bengkak di kaki."
        },
        {
          "term": "Steatorrhoea",
          "meaning": "Tinja berlemak berminyak akibat kegagalan absorpsi lipid di lumen usus."
        },
        {
          "term": "Deficientia Cobalamini (B12)",
          "meaning": "Kekurangan vitamin B12 yang memicu anemia megaloblastik dan kerusakan selubung saraf."
        }
      ]
    }
  },
  "divertikulitis": {
    "pathophysiology": {
      "cellularMechanism": "Herniasi mukosa dan submukosa menembus lapisan muskularis sirkular dinding kolon pada titik-titik lemah tempat penetrasi arteria rektal (arteri vasa rekta), membentuk kantung divertikel (divertikulosis). Obstruksi leher divertikel oleh fekalit keras memicu proliferasi bakteri anaerob, iskemia dinding kantung, dan mikroperforasi fokal yang memicu peradangan peridivertikular.",
      "geriatricFactor": "Penurunan elastisitas serat elastin dan kolagen di dinding usus besar lansia berpadu dengan kebiasaan sembelit menahun (tekanan intraluminal kolon sigmoid sangat tinggi saat mengejan).",
      "organImpact": "Mikroperforasi yang tidak terlokalisir dapat berkembang menjadi abses pericolic, pembentukan fistula kolonovesikal (fistula ke kandung kemih), obstruksi lumen usus besar, atau peritonitis fekal umum."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri perut kuadran kiri bawah tajam menusuk (fossa iliaka sinistra), demam menggigil, leukositosis, mual muntah.",
      "atypicalGeriatric": "Nyeri perut samar atau menyebar ke seluruh perut bawah tanpa demam tinggi; bermanifestasi utama sebagai perut kembung tidak bisa buang angin (ileus), buang air kecil berbuih atau bercampur udara (pneumaturia akibat fistula ke kandung kemih), dan linglung akut (delirium).",
      "whyDifferent": "Dinding usus lansia lebih tipis sehingga perforasi dapat terjadi lebih dini dengan respons nyeri peritoneum yang teredam."
    },
    "staging": {
      "scoreName": "Klasifikasi Hinchey Modifikasi (Stadium Divertikulitis)",
      "stages": [
        {
          "level": "Hinchey Ia - Ib",
          "criteria": "Ia: Inflamasi perikolik fokal; Ib: Abses perikolik terlokalisir (<4-5 cm).",
          "risk": "Terapi konservatif antibiotik oral/intravena dan istirahat usus (diet cair)."
        },
        {
          "level": "Hinchey II",
          "criteria": "Abses pelvis jauh atau abses intraabdomen retroperitoneal.",
          "risk": "Perlu drainase abses perkutan dengan panduan CT-scan dan antibiotik parenteral."
        },
        {
          "level": "Hinchey III - IV",
          "criteria": "III: Peritonitis purulen umum; IV: Peritonitis fekal (tinja bocor ke rongga perut).",
          "risk": "Mortalitas tinggi darurat bedah - Operasi laparotomi reseksi kolon sigmoid (prosedur Hartmann)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Leukosit Darah Lengkap & CRP Kuantitatif",
          "param": "Leukositosis dengan pergeseran ke kiri (neutrofilia) dan CRP >50-100 mg/L menandakan inflamasi/abses aktif."
        },
        {
          "test": "Urinalisis Lengkap & Kultur Urine",
          "param": "Mendeteksi bakteriuria polimikrobial (E. coli, anaerob) jika terdapat kecurigaan fistula enterovesikal."
        }
      ],
      "imaging": "KONTRAINDIKASI Kolonoskopi pada fase akut (risiko perforasi iatrogenik tinggi); Foto rontgen abdomen untuk melihat ileus atau pneumoperitoneum.",
      "goldStandard": "CT-Scan Abdomen & Pelvis dengan kontras intravena (melihat penebalan dinding kolon >4 mm, fat stranding perikolik, dan abses)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Antibiotik spektrum luas mencakup bakteri gram negatif dan anaerob: Siprofloksasin oral + Metronidazol, atau Seftriakson IV + Metronidazol IV selama 7-10 hari pada kasus terkomplikasi.",
      "beersCriteria": "HINDARI analgesik opioid berat (Morfin) yang memperparah konstipasi dan meningkatkan tekanan lumen kolon; hindari pula antispasmodik antikolinergik kuat.",
      "monitoring": "Evaluasi perbaikan klinis nyeri perut dan penurunan demam dalam 48-72 jam pasca-antibiotik."
    },
    "clinicalNutrition": {
      "macroMicro": "Fase akut: diet cair jernih rendah serat untuk mengistirahatkan usus. Fase pemulihan: transisi bertahap ke diet tinggi serat larut (25-30 gram/hari) dan hidrasi 2 liter/hari.",
      "recommendedFoods": "Fase akut: kaldu bening, teh manis encer. Fase pemulihan: oat gandum halus, pepaya masak, pir rebus, brokoli kukus lunak.",
      "contraindicatedFoods": "Fase akut: makanan padat kasar berserat tinggi, biji-bijian keras, jagung pipil, daging liat, dan makanan pedas."
    },
    "emergency": {
      "immediateTriggers": "Perut mendadak tegang kaku seperti papan (peritonitis), demam menggigil tinggi disertai disorientasi linglung, tekanan darah turun <90 mmHg (sepsis intra-abdomen), keluarnya kencing bercampur feses atau udara.",
      "firstAidHome": "Jangan berikan kompres panas di perut (dapat memicu pecahnya abses), puasakan dari makanan dan minuman, segera hubungi ambulans IGD."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan defekasi teratur: biasakan BAB di waktu yang sama setiap pagi, gunakan pijakan kaki kecil (toilet stool) untuk mengoptimalkan sudut anorektal tanpa mengejan keras.",
      "homeModifications": "Pasang bidet toilet semprot air hangat untuk kenyamanan higienis pasca-BAB bagi lansia."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Usus Besar (Sigmoid), Kandung Kemih (Sistem Urologi) & Rongga Perut",
      "biologicalMechanism": "Peradangan kronis divertikel sigmoid yang menempel pada dinding kandung kemih mengikis jaringan, membentuk saluran abnormal (Fistula Kolonovesikal). Bakteri tinja dan gas usus mengalir langsung ke kandung kemih, memicu Infeksi Saluran Kemih (ISK) berat berulang dan urosepsis.",
      "clinicalImpact": "Pasien lansia sering berulang kali berobat untuk infeksi kencing tanpa disadari sumber kumannya berasal dari divertikulitis usus besar yang bocor.",
      "prevention": "Pencegahan konstipasi dengan konsumsi serat larut dan air yang cukup, evaluasi kolonoskopi 6-8 minggu setelah fase akut divertikulitis mereda."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Diverticulitis Coli Sigmoidei cum Peridiverticulitide",
      "icd10": "K57.92 / K57.32",
      "latinTerms": [
        {
          "term": "Diverticulosis Coli",
          "meaning": "Kantung-kantung kecil abnormal yang menonjol keluar menembus dinding usus besar."
        },
        {
          "term": "Microperforatio Diverticuli",
          "meaning": "Robekan mikroskopis pada dinding kantung akibat sumbatan feses keras yang memicu radang."
        },
        {
          "term": "Nyeri Fossa Iliaca Sinistra",
          "meaning": "Nyeri menusuk khas di perut kiri bawah tempat usus sigmoid berada."
        },
        {
          "term": "Abscessus Pericolicus",
          "meaning": "Kumpulan nanah terbungkus di sekitar dinding usus besar yang memerlukan drainase."
        },
        {
          "term": "Obstipatio Chronica",
          "meaning": "Sembelit berkepanjangan dengan tekanan mengejan tinggi yang memicu timbulnya kantung divertikel."
        }
      ]
    }
  },
  "apendisitis": {
    "pathophysiology": {
      "cellularMechanism": "Obstruksi lumen apendiks vermiformis oleh fekalit mengeras (apendikolit), hiperplasia jaringan limfoid submukosa, atau striktur. Obstruksi menyebabkan penumpukan sekresi mukus, peningkatan tekanan intraluminal drastis (>60 cmH2O), trombosis vena mural, iskemia jaringan apendiks, dan invasi bakteri transluminal yang memicu nekrosis gangrenosa dan perforasi.",
      "geriatricFactor": "Atrofi alami jaringan limfoid apendiks dan aterosklerosis arteri apendikularis pada lansia menyebabkan dinding usus buntu lebih tipis dan aliran darah lebih cepat tersumbat, mempercepat terjadinya perforasi dini dalam waktu kurang dari 24 jam.",
      "organImpact": "Perforasi dinding apendiks melepaskan nanah dan kuman anaerob ke rongga peritoneum bebas, memicu peritonitis difus atau abses fosa iliaka dekstra yang mengancam nyawa."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri tumpul epigastrium/periumbilikal yang berpindah ke perut kanan bawah (titik McBurney) dalam 12-24 jam, mual muntah, demam ringan, anoreksia.",
      "atypicalGeriatric": "Sangat atipikal! Nyeri seringkali samar-samar ringan di seluruh perut bawah tanpa riwayat perpindahan nyeri; demam sering TIDAK ADA; leukositosis sering normal; bermanifestasi sebagai diare ringan, perut kembung tidak bisa BAB (disangka sembelit biasa), kelemahan umum, dan delirium akut.",
      "whyDifferent": "Penurunan elastisitas peritoneum dan ambang rasa nyeri viseral geriatri meredam keluhan klasik; omentum mayus yang menyusut gagal melokalisir infeksi."
    },
    "staging": {
      "scoreName": "Skor Alvarado Modifikasi / AIR Score (Appendicitis Inflammatory Response)",
      "stages": [
        {
          "level": "Skor Rendah (Alvarado 1 - 4)",
          "criteria": "Gejala tidak khas, leukositosis minimal, tidak ada nyeri tekan lepas.",
          "risk": "Apendisitis tidak mungkin (<5%) - Observasi klinis rawat jalan dengan instruksi tanda bahaya."
        },
        {
          "level": "Skor Sedang (Alvarado 5 - 6)",
          "criteria": "Nyeri tekan kuadran kanan bawah, leukositosis ringan.",
          "risk": "Probabilitas sedang - Indikasi pemeriksaan pencitraan CT-scan abdomen segera."
        },
        {
          "level": "Skor Tinggi (Alvarado 7 - 10)",
          "criteria": "Nyeri McBurney nyata, demam, leukositosis tinggi dengan pergeseran ke kiri.",
          "risk": "Probabilitas tinggi (>90%) - Konsultasi spesialis bedah segera untuk tindakan apendektomi."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Darah Lengkap & Hitung Jenis Leukosit",
          "param": "Leukositosis (>10.000-15.000/uL) dengan neutrofilia >75% (meski pada 30% lansia leukosit dapat tetap normal)."
        },
        {
          "test": "C-Reactive Protein (CRP) & Laktat Serum",
          "param": "Peningkatan CRP >50 mg/L dan hiperlaktatemia menandakan nekrosis jaringan dan iskemia usus."
        }
      ],
      "imaging": "USG Abdomen kuadran kanan bawah menunjukkan apendiks non-kompresibel dengan diameter luar >6 mm, target sign, atau fekalit akustik shadow.",
      "goldStandard": "CT-Scan Abdomen & Pelvis dengan kontras IV (sensitivitas & spesifisitas >95% pada geriatri, melihat penebalan dinding, abses, dan perforasi)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Antibiotik profilaksis perioperatif intravena spektrum luas (Seftriakson 2g IV + Metronidazol 500mg IV) dan analgesia terarah non-sedatif.",
      "beersCriteria": "HINDARI pemberian obat pencahar (laksatif/enema) pada lansia dengan kecurigaan apendisitis karena dapat memicu peningkatan tekanan intraluminal dan mempercepat pecahnya apendiks!",
      "monitoring": "Pantau tanda-tanda vital hemodinamik, produksi urine kateter, dan tanda kekakuan dinding perut."
    },
    "clinicalNutrition": {
      "macroMicro": "Puasa total (NPO) segera saat dicurigai apendisitis untuk persiapan pembedahan darurat; pasang cairan infus dekstrosa/elektrolit Ringer Laktat.",
      "recommendedFoods": "Pascaoperasi: bertahap dari minum air putih sendok demi sendok setelah bising usus pulih, sup kaldu jernih, bubur saring lembut.",
      "contraindicatedFoods": "Segala makanan dan minuman per oral sebelum evaluasi dokter bedah; hindari makanan pedas dan berserat keras pascaoperasi."
    },
    "emergency": {
      "immediateTriggers": "Nyeri perut yang mendadak hilang sesaat (tanda apendiks baru saja pecah) lalu berubah menjadi nyeri hebat merata di seluruh perut disertai perut keras tegang seperti papan (peritonitis), demam tinggi menggigil, syok septik.",
      "firstAidHome": "Bawa lansia secepatnya ke IGD RS yang memiliki fasilitas kamar operasi bedah; JANGAN kompres perut dengan air panas dan JANGAN berikan obat antinyeri sendiri di rumah sebelum diperiksa dokter."
    },
    "rehabilitation": {
      "physicalExercises": "Mobilisasi dini: miring kanan-kiri 6 jam pascaoperasi, duduk di tepi ranjang hari ke-1, berjalan perlahan hari ke-2 untuk mencegah ileus paralitik pascaoperasi.",
      "homeModifications": "Perawatan luka operasi kering bersih di rumah, pasang pegangan ranjang untuk membantu lansia bangkit tanpa mengejan otot perut."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Saluran Cerna (Apendiks), Selaput Peritoneum & Sirkulasi Vaskular (Sepsis)",
      "biologicalMechanism": "Pecahnya apendiks menumpahkan bakteri anaerob ke rongga peritoneum, memicu pelepasan endotoksin masif ke sirkulasi darah vena porta hepar (pileflebitis). Sitokin pro-inflamasi melumpuhkan tonus vaskular sistemik, memicu syok septik dan kegagalan fungsi ginjal akut.",
      "clinicalImpact": "Tingkat mortalitas apendisitis pada lansia meningkat hingga 8 kali lipat dibanding dewasa muda akibat keterlambatan diagnosis dan tingginya angka perforasi (>50% kasus).",
      "prevention": "Kewaspadaan tinggi keluarga: setiap nyeri perut baru pada lansia harus dicurigai dan diperiksakan ke dokter tanpa menunggu gejala demam tinggi."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Appendicitis Acuta Gangraenosa cum Perforatione",
      "icd10": "K35.80 / K35.2",
      "latinTerms": [
        {
          "term": "Obstructio Luminis Appendicis",
          "meaning": "Tersumbatnya rongga usus buntu oleh feses mengeras (fekalit) atau jaringan parut."
        },
        {
          "term": "Tanda McBurney Positif",
          "meaning": "Nyeri tekan tajam maksimal pada titik sepertiga dari pusar ke tulang panggul kanan depan."
        },
        {
          "term": "Defens Musculaire",
          "meaning": "Kekakuan dinding otot perut seperti papan akibat rangsangan radang selaput peritoneum."
        },
        {
          "term": "Appendicitis Gangraenosa",
          "meaning": "Kematian jaringan usus buntu dengan pembusukan akibat terputusnya aliran darah arteri."
        },
        {
          "term": "Perforatio Appendicis",
          "meaning": "Pecahnya usus buntu yang menumpahkan nanah ke rongga perut lansia."
        }
      ]
    }
  },
  "batu-saluran-kemih": {
    "pathophysiology": {
      "cellularMechanism": "Supersaturasi zat terlarut dalam urine (kalsium oksalat, asam urat, atau kalsium fosfat) melebihi kapasitas solubilitas urine, diperparah oleh penurunan inhibitor kristalisasi alami (sitrat, magnesium, nefrookalsin). Kristal mengalami nukleasi, agregasi, dan fiksasi pada plak Randall di papila ginjal hingga membentuk konkresi batu padat yang bermigrasi menyumbat kaliks, piala ginjal, atau ureter.",
      "geriatricFactor": "Penurunan fungsi pemekatan ginjal, dehidrasi kronis akibat berkurangnya rasa haus (hipodipsia geriatri), imobilisasi berkepanjangan yang memicu resorpsi kalsium tulang (hiperkalsiuria resorptif), dan stasis urine akibat pembesaran prostat (BPH).",
      "organImpact": "Obstruksi akut aliran urine memicu peningkatan tekanan hidrostatik retrograd ke ginjal, dilatasi pelvis renalis (hidronefrosis), iskemia parenkim ginjal, dan atrofi nefron ireversibel jika sumbatan berlangsung >2-4 minggu."
    },
    "geriatricSymptoms": {
      "classical": "Kolik ginjal tajam melilit hebat hilang-timbul di pinggang menjalar ke selangkangan/testis, kencing berdarah (hematuria), mual muntah.",
      "atypicalGeriatric": "Sering TANPA nyeri kolik hebat! Bermanifestasi sebagai nyeri pinggang tumpul samar yang disangka pegal linu encok biasa, kencing keruh berbau menyengat, kelemahan umum ekstrem (letargi), anoreksia, atau penurunan fungsi ginjal akut (ureum/kreatinin melonjak) yang terdeteksi saat tes darah rutin.",
      "whyDifferent": "Penurunan elastisitas dinding ureter dan penurunan konduksi serabut saraf sensorik C visceral pada geriatri meredam spasme otot polos ureter."
    },
    "staging": {
      "scoreName": "Klasifikasi Ukuran & Derajat Hidronefrosis (EAU Guidelines)",
      "stages": [
        {
          "level": "Batu Kecil (<5 mm) Non-Obstruktif",
          "criteria": "Batu berada di ureter distal, tidak ada infeksi sistemik, hidronefrosis derajat 1.",
          "risk": "Peluang keluar spontan tinggi (70-80%) - Terapi ekspulsi medis (MET) rawat jalan."
        },
        {
          "level": "Batu Sedang (5 - 10 mm) Obstruktif",
          "criteria": "Sumbatan menetap di ureter, hidronefrosis derajat 2-3, nyeri intermiten.",
          "risk": "Peluang keluar spontan rendah - Perlu tindakan ESWL (gelombang kejut) atau URS (ureteroskopi laser)."
        },
        {
          "level": "Batu Besar (>10-20 mm) / Batu Staghorn Cetak Ginjal",
          "criteria": "Batu mengisi piala ginjal atau kaliks multipel, infeksi saluran kemih persisten.",
          "risk": "Risiko gagal ginjal permanen dan sepsis - Indikasi tindakan PCNL (bedah lubang kunci ginjal) atau operasi terbuka."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Urinalisis Lengkap & Sedimen Urine",
          "param": "Hematuria mikroskopis (eritrosit >5/LPB), kristaluria kalsium oksalat, dan piuria/leukosituria jika disertai infeksi."
        },
        {
          "test": "Fungsi Ginjal (Kreatinin Serum & eGFR) serta Asam Urat",
          "param": "Mengevaluasi penurunan filtrasi ginjal akut akibat uropati obstruktif bilateral atau ginjal soliter."
        }
      ],
      "imaging": "USG Ginjal dan Saluran Kemih melihat pembesaran ginjal (hidronefrosis) dan bayangan hiperekoik dengan acoustic shadow di piala ginjal.",
      "goldStandard": "Non-Contrast Helical CT Scan Abdomen-Pelvis (CT Urografi Non-Kontras) dengan sensitivitas 98% mendeteksi semua jenis batu termasuk asam urat."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Terapi Ekspulsi Medis (Medical Expulsive Therapy - MET: Tamsulosin 0.4 mg/hari untuk merelaksasi otot polos ureter bawah); hidrasi terkontrol; analgesik Parasetamol IV / Tramadol.",
      "beersCriteria": "KRITERIA BEERS: HINDARI analgesik NSAID (Ketorolak, Ibuprofen) pada lansia dengan penurunan fungsi ginjal (eGFR <60 mL/min) karena memicu gagal ginjal akut iskemik berat!",
      "monitoring": "Pantau produksi urine harian dan kadar kreatinin serum tiap 48 jam selama fase obstruksi."
    },
    "clinicalNutrition": {
      "macroMicro": "Asupan cairan terdistribusi rata sepanjang hari minimal 2.5 - 3 liter/hari (target volume urine >2 liter/hari jernih), natrium rendah (<2000 mg/hari).",
      "recommendedFoods": "Air putih hangat dengan perasan jeruk nipis/lemon segar (kaya sitrat alami penghambat batu), sayuran hijau rendah oksalat (selada, mentimun), tahu kedelai organik.",
      "contraindicatedFoods": "Makanan sangat tinggi oksalat (bayam pekat, cokelat hitam, kacang tanah, teh hitam kental), jeroan kaya purin, dan konsumsi suplemen vitamin C dosis megadose (>1000 mg/hari yang diubah menjadi oksalat)."
    },
    "emergency": {
      "immediateTriggers": "Batu saluran kemih yang disertai demam menggigil tinggi (>38.5°C), menggigil gemetar, linglung, tekanan darah anjlok (tanda Urosepsis Obstruktif mengancam nyawa!), atau lansia sama sekali tidak bisa kencing selama >12 jam (anuria total).",
      "firstAidHome": "DARURAT MEDIS MUTLAK: Segera bawa ke IGD RS dengan fasilitas urologi; dokter perlu segera melakukan dekompresi darurat memasang kateter DJ Stent ke ureter atau nefrostomi perkutan untuk mengalirkan nanah/urine yang tersumbat."
    },
    "rehabilitation": {
      "physicalExercises": "Mobilisasi jalan kaki ringan teratur untuk membantu gravitasi menggerakkan batu kecil yang sudah berada di ureter distal.",
      "homeModifications": "Gunakan saringan urine (urine strainer) saat buang air kecil di rumah untuk menangkap batu yang keluar spontan agar dapat dianalisis laboratorium jenis kimianya."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Ginjal, Kelenjar Prostat (Sistem Reproduksi Pria) & Tulang",
      "biologicalMechanism": "Pembesaran prostat (BPH) menyebabkan sumbatan pengosongan kandung kemih, memicu stasis urine kronis dan pembentukan batu kandung kemih serta batu ureter sekunder. Resorpsi kalsium tulang akibat osteoporosis geriatri membanjiri sirkulasi darah dan ginjal dengan kalsium berlebih.",
      "clinicalImpact": "Siklus komplikasi: BPH -> Retensi urine -> Batu saluran kemih -> Infeksi urosepsis -> Gagal ginjal kronis stadium akhir.",
      "prevention": "Penanganan tuntas pembesaran prostat sejak dini, hidrasi teratur minum 1 gelas air tiap 2 jam, dan evaluasi berkala fungsi ginjal."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Urolithiasis & Calculus Systematis Urinarii cum Hydronephrosi",
      "icd10": "N20.1 / N21.9",
      "latinTerms": [
        {
          "term": "Colica Renalis",
          "meaning": "Nyeri melilit hebat hilang-timbul di pinggang menjalar ke selangkangan akibat sumbatan batu."
        },
        {
          "term": "Haematuria Macroscopica",
          "meaning": "Air kencing berwarna kemerahan atau berdarah akibat gesekan kristal batu pada saluran kemih."
        },
        {
          "term": "Calculus Calcii Oxalatis",
          "meaning": "Kristalisasi endapan kalsium oksalat yang mengeras menjadi batu di saluran kencing."
        },
        {
          "term": "Hydronephrosis",
          "meaning": "Pembengkakan ginjal terisi air seni yang tertahan akibat batu menyumbat ureter."
        },
        {
          "term": "Stranguria",
          "meaning": "Keluarnya air kencing sedikit-sedikit disertai rasa perih membakar dan sensasi tercekik."
        }
      ]
    }
  },
  "prostatitis": {
    "pathophysiology": {
      "cellularMechanism": "Refluks intraprostatik urine terinfeksi dari uretra posterior ke dalam duktus kelenjar prostat. Bakteri uropatogen (terutama Escherichia coli, Klebsiella, Proteus) mengkolonisasi asinus prostat, membentuk biofilm pelindung yang resisten terhadap penetrasi antibiotik, memicu infiltrasi leukosit PMN dan mikroabses kelenjar prostat.",
      "geriatricFactor": "Kalsifikasi prostat (korpora amilasea yang mengeras menjadi kalkuli prostat) dan distorsi anatomi uretra prostatika akibat BPH menghambat drainase sekret prostat alami, menjadi sarang infeksi kuman persisten.",
      "organImpact": "Pembengkakan inflamasi parenkim prostat menekan leher kandung kemih dan uretra, memicu retensi urine akut total (tidak bisa kencing) atau berkembang menjadi abses prostat dan urosepsis sistemik."
    },
    "geriatricSymptoms": {
      "classical": "Demam tinggi menggigil, nyeri hebat di perineum (antara buah zakar dan anus), nyeri saat buang air kecil (disuria), kencing menetes, nyeri ejakulasi.",
      "atypicalGeriatric": "Sering tanpa demam tinggi; bermanifestasi sebagai rasa tidak nyaman tumpul di pinggang bawah atau panggul yang disangka saraf kejepit, frekuensi kencing malam hari sangat sering (>4-5 kali semalam / nokturia), mengompol di celana (incontinentia overflow), kelemahan tubuh ekstrem, dan linglung akut.",
      "whyDifferent": "Penurunan respons termoregulasi geriatri dan pengaburan gejala akibat sudah adanya keluhan pembesaran prostat (BPH) sebelumnya."
    },
    "staging": {
      "scoreName": "Klasifikasi Sindrom Prostatitis National Institutes of Health (NIH)",
      "stages": [
        {
          "level": "Kategori I (Prostatitis Bakterial Akut)",
          "criteria": "Infeksi bakteri akut berat dengan demam tinggi, piuria nyata, uretra tersumbat.",
          "risk": "Indikasi rawat inap segera - Terapi antibiotik bakterisidal parenteral dosis tinggi."
        },
        {
          "level": "Kategori II (Prostatitis Bakterial Kronis)",
          "criteria": "Infeksi bakteri kambuhan (>3 bulan) dengan kuman yang sama di cairan prostat (EPS).",
          "risk": "Perlu terapi antibiotik berspektrum penetrasi jaringan prostat selama 4-6 minggu penuh."
        },
        {
          "level": "Kategori III (Chronic Pelvic Pain Syndrome - CPPS)",
          "criteria": "Nyeri panggul/perineum kronis tanpa ditemukannya bakteri pada kultur standar.",
          "risk": "Terapi multimodal: alfa-blocker, anti-inflamasi, fisioterapi dasar panggul."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Urinalisis Lengkap & Kultur Urine Pancar Tengah (MSU)",
          "param": "Piuria (leukosit >10/LPB), nitrit positif, dan isolasi bakteri gram negatif >10^5 CFU/mL."
        },
        {
          "test": "Prostate Specific Antigen (PSA) Serum",
          "param": "PSA dapat melonjak tinggi sementara (>10-20 ng/mL) akibat peradangan akut; hindari biopsi prostat saat fase radang!"
        }
      ],
      "imaging": "USG Transrektal (TRUS) atau USG panggul untuk menyingkirkan abses prostat tersembunyi bila demam tidak turun setelah 48 jam terapi.",
      "goldStandard": "Pemeriksaan Colok Dubur (DRE) yang sangat hati-hati: prostat teraba sangat nyeri tekan, membengkak hangat tegang (KONTRAINDIKASI pijat prostat keras pada fase akut karena risiko sepsis!)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Antibiotik dengan kelarutan lemak tinggi dan penetrasi membran prostat yang baik: Fluorokuinolon (Levofloksasin 500 mg 1x/hari atau Siprofloksasin 500 mg 2x/hari) atau Trimetoprim-Sulfametoksazol selama minimal 4-6 minggu; dikombinasikan dengan alfa-blocker (Tamsulosin 0.4 mg) untuk melancarkan kencing.",
      "beersCriteria": "Waspadai efek samping Fluorokuinolon pada lansia: risiko tendinitis/ruptur tendo Achilles, disorientasi SSP, dan perpanjangan interval QT jantung.",
      "monitoring": "Kultur urine evaluasi ulang pasca-pengobatan untuk memastikan kuman telah tereradikasi tuntas."
    },
    "clinicalNutrition": {
      "macroMicro": "Hidrasi adekuat 2-2.5 liter air putih hangat per hari untuk membilas saluran kencing secara konstan.",
      "recommendedFoods": "Tomat masak kaya likopen (antioksidan prostat kuat), teh hijau kaya epigallocationchin gallate, biji labu kaya seng (zinc), ikan salmon.",
      "contraindicatedFoods": "Minuman beralkohol, kopi hitam berkafein tinggi, rempah cabai pedas, dan makanan asam yang mengiritasi leher kandung kemih."
    },
    "emergency": {
      "immediateTriggers": "Sama sekali tidak bisa buang air kecil (retensi urine akut total) dengan perut bawah membuncit sangat nyeri tegang (distensi vesika), demam menggigil hebat dengan tensi turun <90 mmHg (syok urosepsis).",
      "firstAidHome": "Bawa segera ke IGD RS; JANGAN mencoba memasukkan selang kateter biasa secara paksa di rumah (dapat merobek prostat yang bengkak rapuh); dokter akan memasang kateter suprapubik menembus dinding perut bawah jika kateter uretra tertahan."
    },
    "rehabilitation": {
      "physicalExercises": "Berendam air hangat (Sitz bath) setinggi pinggul selama 15-20 menit 2 kali sehari untuk merelaksasi otot dasar panggul dan melancarkan sirkulasi perineum.",
      "homeModifications": "Gunakan bantal duduk berlubang di tengah (doughnut cushion / bantal ambeien) saat duduk agar tidak menekan area perineum prostat."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Kelenjar Prostat, Kandung Kemih & Fungsi Saraf Panggul",
      "biologicalMechanism": "Peradangan kronis prostat memicu sensitisasi saraf sensorik panggul (nervus pudendus), menyebabkan nyeri alih kronis ke pinggang bawah, selangkangan, dan paha dalam. Obstruksi leher kandung kemih merusak elastisitas otot detrusor kandung kemih secara permanen.",
      "clinicalImpact": "Pasien lansia sering mengalami depresi geriatri dan isolasi sosial akibat rasa nyeri duduk yang konstan dan ketakutan mengompol.",
      "prevention": "Pengobatan tuntas setiap episode infeksi saluran kemih, hindari menahan kencing terlalu lama, dan hindari duduk diam di kursi keras >1-2 jam berturut-turut."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Prostatitis Chronica Bacterialis & Pelvic Pain Syndrome",
      "icd10": "N41.1 / N41.0",
      "latinTerms": [
        {
          "term": "Inflamatio Parenchymatis Prostatae",
          "meaning": "Peradangan jaringan kelenjar prostat yang membesar dan menekan leher kandung kemih."
        },
        {
          "term": "Dysuria",
          "meaning": "Sensasi perih, panas membakar, dan tersendat saat buang air kecil."
        },
        {
          "term": "Nyeri Perineum",
          "meaning": "Rasa nyeri mengganjal di antara buah zakar dan anus yang memburuk saat duduk lama."
        },
        {
          "term": "Pollakisuria Nocturna",
          "meaning": "Frekuensi kencing malam hari berulang yang mengganggu kualitas tidur lansia."
        },
        {
          "term": "Bakteriuria Recurrens",
          "meaning": "Infeksi bakteri yang bersarang menahun di dalam asinus prostat sulit ditembus antibiotik biasa."
        }
      ]
    }
  },
  "striktur-uretra": {
    "pathophysiology": {
      "cellularMechanism": "Cedera epitel uretra atau korpus spongiosum (akibat riwayat pemasangan selang kateter urine, infeksi menular masa lalu, atau trauma instrumen endoskopi). Proses penyembuhan luka yang abnormal memicu proliferasi fibroblas berlebih dan deposisi kolagen tipe I yang padat dan kaku (spongiofibrosis), menyebabkan penyempitan lumen saluran kencing.",
      "geriatricFactor": "Penurunan elastisitas jaringan uretra dan tingginya riwayat instrumentasi medis urologi berulang (kateterisasi transuretra saat rawat inap) pada lansia.",
      "organImpact": "Peningkatan resistensi aliran keluar kandung kemih yang kronis memicu trabekulasi dinding kandung kemih, pembentukan divertikel buli, hipertrofi otot detrusor, hingga akhirnya dekompensasi buli dan refluks vesikoureter ke ginjal."
    },
    "geriatricSymptoms": {
      "classical": "Pancaran air seni mengecil halus dan memanjang, aliran kencing bercabang dua atau menyemprot, harus mengejan kuat agar kencing keluar, rasa tidak puas setelah kencing.",
      "atypicalGeriatric": "Sering disangka murni gejala pembesaran prostat (BPH); datang dengan infeksi saluran kemih (ISK) berulang yang sulit sembuh, kencing menetes terus-menerus tanpa sadar di celana (paradoxical overflow incontinence), atau pembengkakan kantung buah zakar akibat fistula uretrokutan.",
      "whyDifferent": "Proses penyempitan terjadi perlahan selama bertahun-tahun sehingga lansia menganggap aliran kencing yang lemah sebagai hal wajar akibat faktor usia."
    },
    "staging": {
      "scoreName": "Klasifikasi Striktur Uretra Berdasarkan Lokasi & Panjang (SIU/ICUD)",
      "stages": [
        {
          "level": "Striktur Pendek (<1 cm) Anterior",
          "criteria": "Penyempitan fokal di uretra bulbaris tanpa spongiofibrosis dalam.",
          "risk": "Pilihan awal: Uretrotomi interna optik (Sachse laser) atau dilatasi uretra berkala."
        },
        {
          "level": "Striktur Panjang (1 - 3 cm)",
          "criteria": "Penyempitan melibatkan segmen lebih panjang dengan jaringan parut padat.",
          "risk": "Angka kekambuhan tinggi dengan sayatan endoskopi biasa - Perlu tindakan rekonstruksi bedah uretroplasti bertahap."
        },
        {
          "level": "Striktur Kompleks / Panuretra (>3 cm)",
          "criteria": "Melibatkan hampir seluruh panjang uretra, sering disertai fistula atau riwayat operasi gagal berkali-kali.",
          "risk": "Risiko retensi urine permanen dan gagal ginjal - Rekonstruksi uretroplasti dengan cangkok mukosa pipi (buccal mucosa graft)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Uroflowmetri (Pancaran Urine)",
          "param": "Grafik aliran datar berbentuk dataran tinggi (plateau curve) dengan laju pancaran puncak Qmax sangat rendah (<10-12 mL/detik)."
        },
        {
          "test": "Urinalisis & Kultur Urine",
          "param": "Mendeteksi infeksi sekunder dan hematuria mikroskopis."
        }
      ],
      "imaging": "USG Kandung Kemih pasca-berkemih (Post-Void Residual / PVR) menunjukkan sisa urine melimpah (>150-200 mL).",
      "goldStandard": "Uretrografi Bipolar: Kombinasi Retrograde Urethrography (RGU) dan Voiding Cystourethrography (VCUG) untuk memetakan secara presisi lokasi, kaliber, dan panjang striktur."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Striktur uretra adalah masalah mekanis struktural yang TIDAK DAPAT disembuhkan dengan obat minum saja; terapi medikamentosa hanya sebagai pendukung (antibiotik saat infeksi, analgesik, dan alfa-blocker untuk relaksasi leher buli).",
      "beersCriteria": "HINDARI obat flu dekongestan simpatomimetik (Pseudoefedrin) dan antihistamin generasi pertama pada lansia dengan striktur uretra karena dapat memicu penutupan total leher buli secara mendadak!",
      "monitoring": "Pantau grafik pancaran kencing berkala pascatindakan dilatasi untuk mendeteksi kekambuhan dini."
    },
    "clinicalNutrition": {
      "macroMicro": "Hidrasi seimbang teratur 2 liter/hari untuk mencegah kristalisasi urine yang dapat menggores jaringan parut uretra.",
      "recommendedFoods": "Air putih bersuhu ruang, jus buah cranberry murni tanpa gula (mencegah penempelan bakteri E. coli), sayuran berserat lunak agar tidak perlu mengejan keras saat BAB.",
      "contraindicatedFoods": "Minuman beralkohol, kopi pekat, dan soda yang mengiritasi mukosa uretra yang menyempit."
    },
    "emergency": {
      "immediateTriggers": "Sama sekali tidak bisa buang air kecil disertai perut bawah membesar kencang kesakitan, teraba massa keras hangat nyeri di kantung buah zakar atau selangkangan (abses periuretra / ekstravasasi urine).",
      "firstAidHome": "Bawa segera ke IGD; PERINGATAN: Jangan memaksa memasukkan selang kateter karet via penis di rumah karena dapat menciptakan jalan palsu (false passage) dan perdarahan hebat! Dokter urologi akan melakukan punksi sistostomi suprapubik darurat."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan kateterisasi mandiri bersih berkala (Clean Intermittent Catheterization - CIC) menggunakan pelumas gel anestesi steril bila direkomendasikan dokter untuk mencegah striktur menutup kembali pascadilatasi.",
      "homeModifications": "Sediakan urinal portabel di samping tempat tidur lansia agar tidak perlu terburu-buru ke toilet saat ada desakan kencing."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Pipa Saluran Kemih (Uretra), Kandung Kemih & Ginjal",
      "biologicalMechanism": "Penyempitan uretra memaksa kandung kemih memompa dengan tekanan tinggi (high-pressure bladder). Tekanan tinggi diteruskan kembali ke atas menuju ureter dan ginjal (refluks vesikoureter), menghancurkan nefron penyaring ginjal dan memicu Gagal Ginjal Kronis.",
      "clinicalImpact": "Striktur uretra yang diabaikan pada lansia sering berakhir dengan cuci darah (hemodialisis) permanen akibat uropati obstruktif bilateral.",
      "prevention": "Hindari pemasangan selang kateter yang tidak perlu saat rawat inap; gunakan selalu teknik aseptik dan ukuran kateter yang sesuai (fr 14-16) dengan pelumasan adekuat."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Strictura Urethrae Geriatrica & Spongiofibrosis",
      "icd10": "N35.9 / N35.1",
      "latinTerms": [
        {
          "term": "Strictura Fibrosa",
          "meaning": "Pembentukan jaringan parut fibrotik yang mempersempit kaliber saluran pipa kencing."
        },
        {
          "term": "Fluctus Urinae Attenuatus",
          "meaning": "Pancaran air seni mengecil halus, bercabang, atau menetes lemah membutuhkan mengejan."
        },
        {
          "term": "Retentio Urinae Incompleta",
          "meaning": "Ketidakmampuan mengosongkan kandung kemih secara tuntas menyisakan residu urine tinggi."
        },
        {
          "term": "Urethrographia Retrograda (RGU)",
          "meaning": "Pemeriksaan foto rontgen dengan kontras untuk memetakan panjang dan lokasi penyempitan uretra."
        },
        {
          "term": "Urethrotomia Interna (Sachse)",
          "meaning": "Prosedur sayatan endoskopi minimal invasif untuk membuka jaringan parut yang menyempit."
        }
      ]
    }
  },
  "hidrokel-hernia": {
    "pathophysiology": {
      "cellularMechanism": "Hernia: Kelemahan dinding otot aponeurosis abdomen (fascia transversalis pada segitiga Hesselbach untuk hernia direk, atau patensi anulus inguinalis internus untuk hernia indirek) memungkinkan usus atau omentum menonjol keluar ke kanalis inguinalis hingga skrotum. Hidrokel: Ketidakseimbangan antara produksi dan reabsorpsi cairan serosa oleh tunika vaginalis testis, menyebabkan penumpukan cairan intra-skrotal.",
      "geriatricFactor": "Degenerasi serat kolagen dan atrofi otot dinding abdomen anterior akibat penuaan, diperparah oleh peningkatan tekanan intra-abdomen kronis akibat batuk lama (PPOK), mengejan kencing (BPH), atau sembelit menahun.",
      "organImpact": "Hernia yang tidak ditangani berisiko mengalami inkarserasi (usus terjepit tidak bisa kembali) dan strangulasi (terputusnya aliran darah arteri mesenterika ke usus), memicu nekrosis usus, perforasi, dan peritonitis fatal."
    },
    "geriatricSymptoms": {
      "classical": "Benjolan di lipat paha atau kantung buah zakar yang membesar saat berdiri, batuk, atau mengejan dan mengecil/menghilang saat berbaring telentang; rasa berat mengganjal di selangkangan.",
      "atypicalGeriatric": "Sering diabaikan lansia karena dianggap hanya 'turun berok biasa'; datang mendadak dengan benjolan yang mengeras tidak bisa dimasukkan kembali, kulit skrotum memerah gelap, perut kembung mual muntah (ileus obstruktif), dan nyeri hebat yang berubah menjadi mati rasa (tanda usus sudah mati nekrotik!).",
      "whyDifferent": "Kekuatan otot yang lemah membuat cincin hernia pada lansia seringkali lebar, sehingga strangulasi bisa terjadi diam-diam tanpa nyeri spasmodik hebat di awal."
    },
    "staging": {
      "scoreName": "Klasifikasi Hernia Inguinalis Nyhus",
      "stages": [
        {
          "level": "Tipe I - II (Hernia Indirek Sederhana)",
          "criteria": "Anulus internus normal atau melebar ringan, dinding dasar kanalis inguinalis masih utuh.",
          "risk": "Operasi elektif terencana dengan pemasangan jala penguat (Mesh Hernioplasty)."
        },
        {
          "level": "Tipe III (Defek Dinding Posterior)",
          "criteria": "IIIa: Hernia direk; IIIb: Hernia indirek masif merusak dasar kanalis; IIIc: Hernia femoralis.",
          "risk": "Tipe paling sering pada lansia; wajib diperbaiki dengan teknik bebas tegangan (Lichtenstein repair)."
        },
        {
          "level": "Tipe IV (Hernia Kambuhan / Strangulata)",
          "criteria": "Hernia kambuh pascaoperasi sebelumnya atau terdapat tanda sumbatan usus terjepit iskemik.",
          "risk": "KEDARURATAN BEDAH - Laparotomi eksplorasi dan reseksi usus nekrotik segera."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Leukosit Darah Lengkap & Laktat Serum",
          "param": "Leukositosis tinggi (>15.000/uL) dan laktat serum meningkat menandakan telah terjadi strangulasi iskemia usus."
        },
        {
          "test": "Elektrolit Serum & Fungsi Ginjal",
          "param": "Mendeteksi dehidrasi dan hipokalemia akibat muntah pada obstruksi usus mekanik."
        }
      ],
      "imaging": "Uji Transluminasi Skrotum: cahaya senter tembus terang pada hidrokel (cairan murni), sedangkan pada hernia usus cahaya tidak tembus (opak).",
      "goldStandard": "USG Inguinoskrotal Doppler berwarna untuk mengevaluasi aliran darah vaskular testis dan membedakan kantung cairan hidrokel dari peristalsis lengkung usus hernia."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Hernia dan hidrokel adalah defek anatomis murni yang MEMERLUKAN tindakan pembedahan (Hernioplasti mesh dan Hidrokelektomi); obat hanya bersifat simtomatik (analgesik pascaoperasi dan pelunak feses).",
      "beersCriteria": "Hindari pemakaian sabuk penahan hernia (truss belt) yang terlalu ketat tanpa pengawasan dokter karena tekanan konstan sabuk dapat mengikis dinding usus dan mempercepat perlengketan inkarserasi.",
      "monitoring": "Pantau tanda-tanda vital hemodinamik dan tanda kekakuan perut pasca-reduksi hernia."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet tinggi serat larut dan air cukup untuk mencegah sembelit pascaoperasi (agar lansia tidak mengejan saat BAB).",
      "recommendedFoods": "Pepaya manis, sup sayur bening, beras merah tumbuk, jus plum, air putih hangat 2 liter/hari.",
      "contraindicatedFoods": "Makanan yang memicu gas kembung (kol, durian, nangka, minuman bersoda) dan makanan pemicu batuk kronis."
    },
    "emergency": {
      "immediateTriggers": "Benjolan di lipat paha atau buah zakar mendadak tegang sangat nyeri, tidak bisa didorong masuk kembali saat berbaring (inkarserasi), disertai mual muntah hijau, perut membuncit tidak bisa buang angin atau BAB sama sekali.",
      "firstAidHome": "JANGAN memijat atau mengurut paksa benjolan 'turun berok' ke dukun pijat (sangat berbahaya, dapat memecahkan usus di dalam!); segera bawa ke IGD rumah sakit dalam waktu <6 jam untuk mencegah pembusukan usus."
    },
    "rehabilitation": {
      "physicalExercises": "Hindari mengangkat beban berat (>3-5 kg), hindari mengejan kuat, dan tahan batuk dengan menekan bantal lembut di area luka operasi selama 6-8 minggu pertama pasca-pemasangan mesh.",
      "homeModifications": "Gunakan celana penyangga skrotum (scrotal support / suspensory bandage) pasca-operasi hidrokel untuk mengurangi pembengkakan cairan gravitasi."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Saluran Cerna (Lengkung Usus Halus), Dinding Perut & Sistem Urologi Pria",
      "biologicalMechanism": "Penyakit batuk menahun (PPOK paru) atau kesulitan buang air kecil akibat prostat (BPH urologi) memaksa lansia mengejan setiap saat. Tekanan intra-abdomen kronis ini menjebol titik lemah dinding paha, mendorong usus halus turun ke kantung buah zakar.",
      "clinicalImpact": "Operasi hernia pada lansia seringkali gagal dan kambuh kembali jika penyakit dasarnya (BPH prostat atau batuk PPOK) tidak diobati terlebih dahulu secara bersamaan.",
      "prevention": "Obati pembesaran prostat (BPH) dan batuk kronis secara tuntas, obati sembelit dengan serat dan hidrasi cukup."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Hernia Inguinalis Incarcerata & Hydrocele Tunicae Vaginalis",
      "icd10": "K40.30 / N43.3",
      "latinTerms": [
        {
          "term": "Hernia Inguinalis Reponibilis",
          "meaning": "Keluarnya usus menembus dinding perut bawah ke lipat paha yang masih bisa masuk kembali."
        },
        {
          "term": "Hernia Strangulata",
          "meaning": "Terjepitnya usus pada cincin hernia dengan gangguan aliran darah arteri, darurat operasi bedah."
        },
        {
          "term": "Hydrocele Tunicae Vaginalis",
          "meaning": "Penumpukan cairan serosa jernih di dalam kantung pembungkus buah zakar yang membesar lunak."
        },
        {
          "term": "Transilluminatio Positiva",
          "meaning": "Tembusnya cahaya senter saat disinari pada kantung testis yang membedakan cairan dari massa padat."
        },
        {
          "term": "Hernioplasty Mesh Lichtenstein",
          "meaning": "Tindakan operasi pengembalian usus dan pemasangan jala penguat dinding perut."
        }
      ]
    }
  },
  "batu-ginjal-wanita": {
    "pathophysiology": {
      "cellularMechanism": "Supersaturasi kalsium, fosfat, atau asam urat di dalam piala ginjal (pelvis renalis) wanita pascamenopause. Infeksi berulang oleh bakteri penghasil urease (Proteus mirabilis, Klebsiella) menghidrolisis urea menjadi amonium, meningkatkan pH urine (>7.2), dan memicu presipitasi kristal magnesium amonium fosfat membentuk batu struvit bercabang (Staghorn stone).",
      "geriatricFactor": "Penurunan hormon estrogen pascamenopause mempercepat resorpsi kalsium tulang (osteoporosis), meningkatkan ekskresi kalsium dalam urine (hiperkalsiuria). Penipisan mukosa uretra wanita memudahkan kolonisasi bakteri enterik ke saluran kemih atas.",
      "organImpact": "Batu cetak staghorn yang mengisi seluruh kaliks ginjal menyebabkan destruksi parenkim nefron ginjal perlahan, hidronefrosis, pionefrosis (ginjal terisi nanah), dan gagal ginjal kronis stadium akhir."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri pinggang tumpul menjalar ke perut bawah, kencing berpasir atau berdarah (hematuria), infeksi saluran kemih berulang.",
      "atypicalGeriatric": "Sering 'Silent Stone' tanpa nyeri hebat! Bermanifestasi sebagai kelelahan kronis pucat (anemia penyakit kronis), nafsu makan turun drastis, mual di pagi hari, gatal-gatal di seluruh kulit (uremia), dan penurunan fungsi kognitif/linglung akibat penumpukan racun ginjal.",
      "whyDifferent": "Batu staghorn ginjal seringkali tidak bergerak dan tidak menyumbat ureter secara spasmodik sehingga tidak memicu kolik akut."
    },
    "staging": {
      "scoreName": "Klasifikasi Penyakit Ginjal Kronis (CKD KDIGO) Akibat Nefrolitiasis",
      "stages": [
        {
          "level": "Stadium G1 - G2 (Fungsi Ginjal Normal / Turun Ringan)",
          "criteria": "eGFR ≥60 mL/min/1.73m2 dengan bukti batu ginjal pada pencitraan.",
          "risk": "Terapi pembuangan batu terencana (ESWL / PNL) untuk mencegah kerusakan nefron lebih lanjut."
        },
        {
          "level": "Stadium G3a - G3b (Penurunan Fungsi Ginjal Sedang)",
          "criteria": "eGFR 30 - 59 mL/min/1.73m2, terdapat hidronefrosis atau penipisan korteks ginjal.",
          "risk": "Perlu penyesuaian dosis seluruh obat-obatan harian lansia dan konsultasi nefrologi."
        },
        {
          "level": "Stadium G4 - G5 (Gagal Ginjal Berat / Terminal)",
          "criteria": "eGFR <30 mL/min (G5 <15 mL/min), uremia berat, asidosis metabolik, hiperkalemia.",
          "risk": "Indikasi persiapan terapi pengganti ginjal (hemodialisis / cuci darah)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Kreatinin Serum, Ureum, & eGFR (CKD-EPI)",
          "param": "Evaluasi derajat penurunan laju filtrasi glomerulus ginjal secara berkala."
        },
        {
          "test": "Urinalisis pH & Kultur Mikrobiologi Urine",
          "param": "pH urine alkalis (>7.0) dengan piuria dan isolasi bakteri Proteus mengonfirmasi batu infeksi struvit."
        }
      ],
      "imaging": "Foto Rontgen BNO (Abdomen Datar) memperlihatkan bayangan radioopak besar berbentuk tanduk rusa di proyeksi ginjal kanan/kiri.",
      "goldStandard": "CT-Urografi Non-Kontras 3 Dimensi untuk pemetaan volume batu, densitas Hounsfield Unit (HU), dan anatomi kaliks."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Eradikasi infeksi dengan antibiotik terarah hasil kultur; alkalinisasi urine dengan Kalium Sitrat pada batu asam urat; atau asam asetohidroksamat (inhibitor urease) pada batu struvit.",
      "beersCriteria": "HINDARI analgesik NSAID dosis tinggi dan suplemen kalsium karbonat mandiri tanpa vitamin D terkontrol pada wanita lansia berisiko batu ginjal.",
      "monitoring": "Pantau elektrolit darah (K, Na, Ca), bikarbonat, dan fungsi ginjal tiap 3-6 bulan."
    },
    "clinicalNutrition": {
      "macroMicro": "Hidrasi air putih minimal 2.5 liter per hari; restriksi natrium (<2 g/hari) dan restriksi protein hewani berlebih (0.8 g/kgBB/hari jika eGFR <60).",
      "recommendedFoods": "Air perasan jeruk nipis/lemon kaya sitrat alami, sayuran kukus rendah kalium (jika ginjal lanjut), nasi tim, putih telur.",
      "contraindicatedFoods": "Garam dapur berlebih, jeroan dan daging merah olahan, kaldu kental tinggi purin, minuman teh pekat botolan."
    },
    "emergency": {
      "immediateTriggers": "Demam menggigil tinggi disertai linglung dan nyeri ketok pinggang hebat (pionefrosis/urosepsis ginjal), sesak napas berat akibat penumpukan cairan asam (asidosis uremikum), atau produksi urine terhenti sama sekali.",
      "firstAidHome": "Segera larikan ke IGD rumah sakit; dokter akan melakukan nefrostomi perkutan darurat memasang selang langsung ke ginjal untuk mengalirkan nanah dan urine yang tersumbat."
    },
    "rehabilitation": {
      "physicalExercises": "Aktivitas fisik berjalan santai pagi hari 20-30 menit untuk melancarkan sirkulasi dan mencegah stasis urine di ginjal.",
      "homeModifications": "Sediakan wadah ukur tampung kencing (measuring jug) di toilet untuk memantau apakah produksi urine harian lansia mencapai minimal 1.5 - 2 liter."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Ginjal, Keseimbangan Hormon Estrogen & Tulang (Osteoporosis)",
      "biologicalMechanism": "Defisiensi estrogen pascamenopause memicu pelepasan kalsium masif dari tulang ke darah (resorpsi osteoklas). Beban kalsium tinggi yang disaring ginjal mengendap membentuk batu ginjal, merusak nefron dan memicu hipertensi sekunder serta gagal ginjal.",
      "clinicalImpact": "Wanita lansia seringkali mengalami komplikasi ganda: tulang keropos patah (osteoporosis) sekaligus ginjal rusak terisi batu (nefrolitiasis).",
      "prevention": "Skrining terpadu kepadatan tulang (DEXA scan) dan USG ginjal berkala pada wanita pascamenopause, hidrasi cukup, dan kurangi asupan garam."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Nephrolithiasis Bilateralis Staghorn & Insufficientia Renalis Chronica",
      "icd10": "N20.0 / N18.9",
      "latinTerms": [
        {
          "term": "Calculus Staghorn",
          "meaning": "Batu ginjal bercabang menyerupai tanduk rusa yang mengisi seluruh piala ginjal (pelvis renalis)."
        },
        {
          "term": "Nefrolitiasis Asymptomatica",
          "meaning": "Batu ginjal yang membesar tanpa nyeri khas namun perlahan merusak nefron fungsional ginjal."
        },
        {
          "term": "Glomerulosclerosis",
          "meaning": "Penebalan dan pengerasan unit penyaring darah ginjal akibat penuaan dan tekanan balik urine."
        },
        {
          "term": "Uraemia",
          "meaning": "Penumpukan racun ureum dalam darah akibat kegagalan ekskresi ginjal yang memicu mual dan linglung."
        },
        {
          "term": "Lithotripsy Percutanea (PCNL)",
          "meaning": "Tindakan pemecahan dan pengangkatan batu ginjal melalui lubang kunci kecil di punggung."
        }
      ]
    }
  },
  "beser-inkontinensia": {
    "pathophysiology": {
      "cellularMechanism": "Disfungsi penyimpanan dan pengosongan urine pada kandung kemih wanita. Terbagi atas: (1) Inkontinensia Urgensi / Overactive Bladder (OAB) akibat hiperaktivitas otot detrusor yang berkontraksi involunter; (2) Inkontinensia Tekanan (Stress Incontinence) akibat kelemahan sfingter uretra interna dan otot dasar panggul (levator ani); dan (3) Inkontinensia Luapan (Overflow) akibat atoni buli.",
      "geriatricFactor": "Penurunan hormon estrogen memicu atrofi mukosa uretra dan trigonum kandung kemih (sindrom genitourinari menopause). Penurunan kapasitas fungsional kandung kemih dan gangguan mobilitas fisik (sulit berjalan cepat ke toilet) memperparah inkontinensia fungsional.",
      "organImpact": "Paparan urine konstan pada kulit vulva dan perineum menyebabkan maserasi kulit, dermatitis inkontinensia (IAD), infeksi jamur Candida, dan ulkus dekubitus sekunder."
    },
    "geriatricSymptoms": {
      "classical": "Rasa ingin kencing mendadak yang tidak tertahankan hingga bocor di celana sebelum sampai ke toilet (urge), atau urine menetes saat batuk, bersin, tertawa, atau mengangkat beban (stress).",
      "atypicalGeriatric": "Seringkali menolak minum air putih karena takut sering kencing (memicu dehidrasi berat dan konstipasi), menarik diri dari pergaulan sosial/pengajian karena malu berbau pesing (depresi isolasi), dan jatuh terpeleset di malam hari saat terburu-buru ke toilet (nokturia fall).",
      "whyDifferent": "Kombinasi kerapuhan fisik geriatri (frailty) dan gangguan mobilitas mengubah keluhan kandung kemih lokal menjadi faktor risiko utama cedera patah tulang panggul."
    },
    "staging": {
      "scoreName": "Kuesioner Derajat Keparahan ICIQ-UI Short Form",
      "stages": [
        {
          "level": "Derajat Ringan (Skor 1 - 5)",
          "criteria": "Kebocoran urine seminggu sekali atau tetesan kecil saat bersin keras.",
          "risk": "Latihan otot dasar panggul (Senam Kegel) dan pengaturan jadwal berkemih (bladder training)."
        },
        {
          "level": "Derajat Sedang (Skor 6 - 12)",
          "criteria": "Kebocoran terjadi setiap hari, memerlukan pembalut/pantyliner khusus inkontinensia.",
          "risk": "Kombinasi fisioterapi dasar panggul dan farmakoterapi lini pertama."
        },
        {
          "level": "Derajat Berat (Skor 13 - 21)",
          "criteria": "Kebocoran volume besar tanpa kontrol siang dan malam hari, memicu iritasi kulit luas.",
          "risk": "Evaluasi urodinamik lengkap; pertimbangkan intervensi lanjutan (toksin botulinum buli / neuromodulasi sakral)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Urinalisis Lengkap & Kultur Urine",
          "param": "Menyingkirkan Infeksi Saluran Kemih (ISK) akut sebagai pemicu sementara iritabilitas kandung kemih."
        },
        {
          "test": "Catatan Harian Berkemih (Bladder Diary 3 Hari)",
          "param": "Mencatat frekuensi asupan cairan, waktu berkemih, volume urine, dan episode kebocoran."
        }
      ],
      "imaging": "USG Kandung Kemih untuk mengukur Post-Void Residual (PVR): jika residu urine >100-200 mL, waspadai inkontinensia luapan (overflow incontinence).",
      "goldStandard": "Pemeriksaan Urodinamik Lengkap (Urodynamic Study) untuk membedakan hiperaktivitas detrusor dari defisiensi sfingter intrinsik."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Agonis beta-3 adrenergik (Mirabegron 25-50 mg/hari - pilihan utama pada lansia karena tidak mengganggu fungsi kognitif); atau krim estrogen topikal vaginal (Estradiol) untuk meremajakan mukosa uretra.",
      "beersCriteria": "PERINGATAN KRITERIA BEERS: HINDARI obat antimuskarinik/antikolinergik generasi lama (Oksibutinin oral) pada lansia karena risiko tinggi memicu penurunan memori kognitif, delirium, mulut kering parah, dan konstipasi berat!",
      "monitoring": "Pantau tekanan darah berkala pada penggunaan Mirabegron dan evaluasi volume residu urine PVR."
    },
    "clinicalNutrition": {
      "macroMicro": "Asupan cairan tetap dipertahankan 1500 - 2000 mL/hari (jangan membatasi minum!), tetapi atur waktu minum: batasi minum 2 jam sebelum tidur malam.",
      "recommendedFoods": "Air putih bersuhu ruang, sup bening, buah tinggi serat (pepaya, pisang) untuk mencegah konstipasi yang menekan kandung kemih.",
      "contraindicatedFoods": "Kopi, teh pekat, cokelat, minuman bersoda, pemanis buatan aspartam, dan alkohol yang bersifat diuretik dan iritan kandung kemih."
    },
    "emergency": {
      "immediateTriggers": "Lansia mendadak tidak bisa buang air kecil sama sekali disertai nyeri hebat perut bawah (retensi urine akut), kencing keluar darah segar disertai nyeri panggul, atau demam tinggi dengan mengompol keruh bau menyengat.",
      "firstAidHome": "Bawa ke fasilitas medis untuk pemasangan selang kateter sementara atau evaluasi infeksi urosepsis."
    },
    "rehabilitation": {
      "physicalExercises": "Latihan Penguatan Otot Dasar Panggul (Pelvic Floor Muscle Training / Senam Kegel) 3 set per hari di bawah bimbingan fisioterapis; latihan berkemih terjadwal (Timed Voiding tiap 2-3 jam sekali).",
      "homeModifications": "Sediakan pispot toilet samping ranjang (commode chair), pasang lampu tidur otomatis menuju kamar mandi, singkirkan keset licin di lantai untuk mencegah lansia jatuh saat tergesa-gesa."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Kandung Kemih, Otot Dasar Panggul & Sistem Saraf Pusat (Delirium/Demensia)",
      "biologicalMechanism": "Pusat miksi di lobus frontalis otak mengatur kontrol sadar buang air kecil. Pada lansia dengan stroke atau demensia, rem inhibisi frontalis melemah, memicu refleks berkemih involunter tak terkontrol. Sembelit kronis di rektum juga menekan leher buli secara anatomis.",
      "clinicalImpact": "Inkontinensia urine merupakan salah satu penyebab utama keluarga memutuskan menitipkan lansia ke panti jompo (caregiver burnout) dan memicu risiko luka lecet dekubitus.",
      "prevention": "Dukungan penuh keluarga, penggunaan popok dewasa berdaya serap tinggi dengan penggantian rutin tiap 4 jam, dan pemakaian barrier cream seng oksida pada kulit."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Incontinentia Urinae Geriatrica & Vesica Hyperactiva (OAB)",
      "icd10": "R32 / N32.81",
      "latinTerms": [
        {
          "term": "Urge Incontinence",
          "meaning": "Ketidakmampuan menahan kencing disertai rasa ingin kencing mendadak yang tak tertahankan."
        },
        {
          "term": "Stress Incontinence",
          "meaning": "Keluarnya tetesan urine tanpa disengaja saat batuk, bersin, tertawa, atau mengejan."
        },
        {
          "term": "Hyperactivitas Musculi Detrusoris",
          "meaning": "Kontraksi otot dinding kandung kemih yang tidak terkontrol sebelum kandung kemih penuh."
        },
        {
          "term": "Dermatitis Incontinentia",
          "meaning": "Iritasi lecet dan peradangan kulit lipat paha akibat paparan air seni lembap berkepanjangan."
        },
        {
          "term": "Exercitium Musculorum Pelvis",
          "meaning": "Latihan pengencangan otot dasar panggul (senam Kegel) untuk memperkuat katup sfingter."
        }
      ]
    }
  },
  "servisitis-polip": {
    "pathophysiology": {
      "cellularMechanism": "Inflamasi kronis mukosa endoserviks dan ektoserviks serta hiperplasia fokal stroma vaskular endoserviks. Penurunan tajam estrogen menyebabkan hilangnya glikogen intraseluler pada sel epitel gepeng serviks, punahnya kolonisasi Lactobacillus pelindung, peningkatan pH vagina (>5.5), dan proliferasi flora campuran anaerob. Hiperplasia fokal epitel kolumnar kelenjar membentuk massa polipoid bertangkai yang rapuh dan mudah berdarah.",
      "geriatricFactor": "Sindrom Genitourinari Menopause (GSM): penipisan drastis epitel skuamosa serviks (atrofi servikovaginal), stenosis ostium uteri eksternum, dan kerapuhan kapiler submukosa.",
      "organImpact": "Meskipun sebagian besar polip bersifat jinak (benigna), perdarahan kontak atau keputihan kronis berisiko menyamarkan lesi prakanker atau karsinoma sel skuamosa serviks yang berkembang diam-diam."
    },
    "geriatricSymptoms": {
      "classical": "Keputihan mukopurulen berbau tidak sedap, nyeri panggul dalam, perdarahan bercak flek pascamenopause (Postmenopausal Bleeding - PMB).",
      "atypicalGeriatric": "Sering asimtomatik (ditemukan kebetulan saat pemeriksaan spekulum rutin); bermanifestasi sebagai sensasi mengganjal di liang vagina, keputihan encer kekuningan yang menyebabkan gatal hebat pada vulva (pruritus vulvae), atau bercak darah samar di celana dalam yang disangka dari saluran kemih.",
      "whyDifferent": "Stenosis ostium serviks pada wanita tua dapat menyebabkan darah atau nanah terjebak di dalam kavum uteri (piometra/hematometra) tanpa keluarnya cairan per vaginam."
    },
    "staging": {
      "scoreName": "Klasifikasi Sitologi Serviks Sistem Bethesda & Evaluasi Polip",
      "stages": [
        {
          "level": "NILM (Negative for Intraepithelial Lesion/Malignancy)",
          "criteria": "Perubahan reaktif radang atrofi tanpa atipia seluler; polip endoserviks jinak.",
          "risk": "Eksisi polipektomi sederhana di poliklinik dan terapi estrogen topikal."
        },
        {
          "level": "ASC-US / LSIL (Lesi Intraepitel Skuamosa Derajat Rendah)",
          "criteria": "Atipia sel skuamosa dengan makna belum jelas atau infeksi HPV persisten.",
          "risk": "Perlu pemeriksaan DNA HPV Onkogenik dan kolposkopi terarah."
        },
        {
          "level": "HSIL / Adenokarsinoma Serviks",
          "criteria": "Displasia sel derajat tinggi atau keganasan invasif.",
          "risk": "Risiko tinggi - Rujukan Onkologi Ginekologi untuk biopsi serviks fraksional dan staging bedah."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Pap Smear Berbasis Cairan (Liquid-Based Cytology - LBC)",
          "param": "Evaluasi sitologi seluler serviks untuk menyingkirkan lesi displasia displastik."
        },
        {
          "test": "Pewarnaan Gram & Kultur Sekret Serviks",
          "param": "Identifikasi infeksi bakteri anaerob atau jamur pada sekret keputihan."
        }
      ],
      "imaging": "USG Transvaginal (TVS) untuk mengukur ketebalan endometrium (jika ketebalan endometrium >4-5 mm pada wanita menopause berdarah, wajib biopsi endometrium).",
      "goldStandard": "Pemeriksaan Spekulum Ginekologi langsung visualisasi serviks dan Ekstirpasi Polipektomi dengan Analisis Histopatologi jaringan."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Krim Estrogen Topikal (Estriol / Estradiol krim 0.5 mg 2x/minggu diaplikasikan ke vagina) untuk meremajakan epitel atrofi dan memulihkan flora alami; antibiotik atau antijamur topikal/oral terarah.",
      "beersCriteria": "HINDARI terapi hormon estrogen oral sistemik dosis tinggi pada wanita lansia lanjut tanpa indikasi ketat karena risiko tromboemboli vena dan stroke.",
      "monitoring": "Pemeriksaan spekulum berkala 6 bulan pasca-polipektomi untuk memastikan tidak ada pertumbuhan polip baru."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet seimbang kaya fitoestrogen alami (isoflavon kedelai) dan antioksidan vitamin A, C, dan E untuk integritas mukosa epitel.",
      "recommendedFoods": "Tahu tempe organik rebus, susu kedelai tanpa gula, yogurt berprobiotik aktif (Lactobacillus), buah pepaya matang, sayuran hijau kukus.",
      "contraindicatedFoods": "Gula pasir olahan berlebih yang memicu pertumbuhan ragi jamur Candida, makanan berpengawet tinggi nitrat."
    },
    "emergency": {
      "immediateTriggers": "Perdarahan pervaginam masif bergumpal-gumpal, keluarnya cairan nanah berbau sangat busuk dari jalan lahir disertai demam tinggi menggigil dan perut bawah tegang sangat nyeri (piometra pecah / sepsis ginekologi).",
      "firstAidHome": "Bawa segera ke IGD rumah sakit ginekologi; jangan mencuci liang vagina dengan cairan sirih/antiseptik keras di rumah yang dapat memperparah iritasi mukosa."
    },
    "rehabilitation": {
      "physicalExercises": "Hindari berendam di bak air kotor; latihan berjalan santai untuk menjaga sirkulasi panggul.",
      "homeModifications": "Gunakan pakaian dalam berbahan katun longgar yang menyerap keringat, hindari sabun pencuci vagina berpewangi kimia (feminine wash) yang merusak pH alami vulva."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Serviks/Vagina, Saluran Kemih Bawah & Keseimbangan Hormonal",
      "biologicalMechanism": "Karena serviks, vagina, dan uretra wanita berasal dari embriologi urogenital yang sama, atrofi servikovaginal akibat defisiensi estrogen selalu berjalan beriringan dengan atrofi uretra. Hal ini memicu sindrom ganda: keputihan perih kronis sekaligus infeksi saluran kemih (ISK) kambuhan.",
      "clinicalImpact": "Setiap perdarahan bercak pascamenopause pada lansia HARUS dianggap ganas (kanker serviks/endometrium) hingga dibuktikan sebaliknya oleh biopsi patologi.",
      "prevention": "Pemeriksaan ginekologi teratur pada lansia wanita, jangan menganggap keputihan atau flek darah sebagai hal normal akibat penuaan."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Cervicitis Chronica Atrophica & Polypus Endocervicalis",
      "icd10": "N72 / N84.1",
      "latinTerms": [
        {
          "term": "Atrophia Epithelii Cervicis",
          "meaning": "Penipisan drastis sel epitel leher rahim akibat penurunan tajam hormon estrogen pascamenopause."
        },
        {
          "term": "Polypus Endocervicis",
          "meaning": "Pertumbuhan tonjolan daging bertangkai jinak dari dinding saluran leher rahim yang rapuh."
        },
        {
          "term": "Fluor Albus / Leukorrhea",
          "meaning": "Keluarnya cairan lendir keputihan kekuningan yang mengiritasi liang kewanitaan."
        },
        {
          "term": "Perdarahan Pascamenopause",
          "meaning": "Bercak darah flek dari jalan lahir pada wanita yang sudah menopause, wajib diperiksa dokter."
        },
        {
          "term": "Exstirpatio Polyporum",
          "meaning": "Tindakan pembedahan pengangkatan polip serviks untuk biopsi histopatologi."
        }
      ]
    }
  },
  "kista-ovarium": {
    "pathophysiology": {
      "cellularMechanism": "Kista ovarium pascamenopause timbul di luar siklus ovulasi fisiologis. Dapat berupa kista serosa/musinosa sederhana (kistadenoma), kista inklusi germinal epitelial, kista endometriotik lama, atau neoplasma ovarium epitelial. Akumulasi cairan di dalam stroma ovarium yang diselubungi kapsul fibrosa dapat membesar mendesak organ viseral panggul.",
      "geriatricFactor": "Pada wanita pascamenopause, indung telur (ovarium) seharusnya mengecil (atrofi fisiologis) dan menjadi tenang. Adanya massa kistik yang menetap atau membesar pada masa lansia memiliki indeks kecurigaan keganasan (malignansi) jauh lebih tinggi (>30% berisiko ganas dibanding usia reproduksi).",
      "organImpact": "Massa ovarium berisiko mengalami puntiran pada tangkai vaskularnya (Torsio Ovarii) yang memicu iskemia nekrotik akut, ruptur kista dengan hemoperitoneum, atau penyebaran karsinomatosis peritoneal dengan asites masif."
    },
    "geriatricSymptoms": {
      "classical": "Nyeri panggul tumpul satu sisi, rasa tertekan di perut bawah, benjolan teraba di perut, perubahan pola buang air besar/kencing.",
      "atypicalGeriatric": "Seringkali 'The Disease That Whispers': gejala awal sangat samar menyerupai gangguan pencernaan biasa berupa perut cepat terasa begah dan kembung (early satiety), sering bersendawa, perut membuncit pakaian terasa menyempit (akibat cairan asites), penurunan berat badan paradoksal (badan kurus kering tapi perut buncit), dan kelemahan umum letargi.",
      "whyDifferent": "Rongga panggul dan perut yang lapang memungkinkan tumor ovarium membesar hingga berdiameter >10-15 cm tanpa memicu rasa sakit tajam di awal."
    },
    "staging": {
      "scoreName": "Indeks Risiko Keganasan RMI (Risk of Malignancy Index) & Staging FIGO",
      "stages": [
        {
          "level": "RMI Rendah (<25)",
          "criteria": "Kista unilokular dinding tipis berdiameter <5 cm, CA-125 normal, skor USG 0-1.",
          "risk": "Risiko keganasan rendah (<3%) - Observasi USG serial berkala tiap 3-6 bulan."
        },
        {
          "level": "RMI Sedang (25 - 200)",
          "criteria": "Kista multilokular tanpa komponen padat nyata, CA-125 sedikit meningkat.",
          "risk": "Pertimbangkan operasi eksplorasi laparoskopi kistektomi/ooforektomi terencana."
        },
        {
          "level": "RMI Tinggi (>200)",
          "criteria": "Terdapat komponen padat, septa tebal >3 mm, asites, metastasis, CA-125 melonjak tinggi.",
          "risk": "Risiko keganasan sangat tinggi (>75%) - Rujukan ke Konsultan Onkologi Ginekologi untuk operasi laparotomi staging radikal."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Biomarker Tumor CA-125 & HE4 Serum",
          "param": "Kombinasi CA-125 dan HE4 (algoritma ROMA) membedakan kista jinak dari karsinoma epitel ovarium dengan spesifisitas tinggi."
        },
        {
          "test": "Darah Lengkap & Fungsi Hati/Ginjal",
          "param": "Mengevaluasi status inflamasi, anemia penyakit kronis, dan fungsi organ sebelum operasi."
        }
      ],
      "imaging": "USG Transvaginal (TVS) Doppler Berwarna mengevaluasi morfologi kista (dinding, septa, papilaritas, dan resistensi vaskularisasi neovaskularisasi).",
      "goldStandard": "CT-Scan atau MRI Pelvis-Abdomen dengan kontras untuk evaluasi stadium jaringan, disusul Laparotomi Eksplorasi dan Biopsi Potong Beku (Frozen Section)."
    },
    "pharmacotherapy": {
      "primaryDrugs": "Kista ovarium pascamenopause TIDAK RESPONSIF terhadap pil KB hormonal; terapi utama adalah pembedahan pengangkatan indung telur (Ooforektomi / Salpingo-ooforektomi bilateral). Obat kemoterapi (Karboplatin + Paklitaksel) diberikan jika terbukti ganas.",
      "beersCriteria": "Hindari pemakaian terapi sulih hormon (HRT) tanpa pengawasan pada lansia dengan riwayat massa ovarium atau riwayat keluarga kanker payudara/ovarium.",
      "monitoring": "Pantau kadar CA-125 berkala pasca-operasi untuk mendeteksi kekambuhan dini."
    },
    "clinicalNutrition": {
      "macroMicro": "Diet tinggi protein berkualitas (1.2-1.5 g/kgBB/hari), antioksidan tinggi, porsi kecil tapi sering jika perut terasa begah dan tertekan.",
      "recommendedFoods": "Ikan salmon/tenggiri, kaldu sup bergizi, tahu tempe rebus, buah bit, wortel kukus, alpukat.",
      "contraindicatedFoods": "Makanan yang menghasilkan gas berlebih di lambung/usus (kubis, lobak, nangka, soda), makanan berminyak jelantah, dan makanan olahan manis tinggi gula."
    },
    "emergency": {
      "immediateTriggers": "Nyeri perut bawah hebat mendadak menjalar ke paha disertai mual muntah prostrasi dan pingsan (Torsio Ovarii akut / puntiran kista yang memutus pasokan darah!), atau perut membuncit keras sangat tegang disertai sesak napas berat.",
      "firstAidHome": "Bawa secepatnya ke IGD rumah sakit dalam waktu <4-6 jam untuk operasi laparoskopi darurat sebelum jaringan ovarium mengalami kematian gangrenosa."
    },
    "rehabilitation": {
      "physicalExercises": "Mobilisasi dini pasca-operasi ginekologi: latihan napas dalam diafragma dan jalan santai bertahap untuk mencegah perlengketan usus.",
      "homeModifications": "Hindari mengangkat beban berat dan mengejan keras selama 6-8 minggu pasca-operasi laparotomi."
    },
    "systemCrossTalk": {
      "primaryLink": "Keterkaitan Organ Indung Telur, Rongga Peritoneum Usus & Paru-paru",
      "biologicalMechanism": "Cairan dari kista ovarium yang bocor atau keganasan ovarium menyebar ke selaput peritoneum rongga perut, menghasilkan cairan asites melimpah. Cairan asites dapat merembes melalui celah diafragma kanan ke rongga pleura (Sindrom Meigs), memicu sesak napas parah akibat penumpukan cairan di paru-paru.",
      "clinicalImpact": "Lansia seringkali datang berobat ke dokter paru karena sesak napas dan batuk, padahal penyebab utamanya adalah tumor kista di indung telur panggul bawah.",
      "prevention": "Pemeriksaan USG kandungan rutin pada wanita lansia meskipun sudah tidak mengalami menstruasi, jangan abaikan perut yang kembung membuncit kronis."
    },
    "medicalTerminology": {
      "formalDiagnosis": "Cyste Ovarii Pascamenopausalis & Neoplasma Ovarii",
      "icd10": "N83.20 / D27.9",
      "latinTerms": [
        {
          "term": "Cyste Ovarii Simplex",
          "meaning": "Kantung berisi cairan berdinding tipis di indung telur yang berdiameter beberapa sentimeter."
        },
        {
          "term": "Torsio Ovarii",
          "meaning": "Kondisi puntiran indung telur pada tangkainya yang memutus aliran darah arteri, darurat operasi."
        },
        {
          "term": "Biomarker Tumor CA-125",
          "meaning": "Pemeriksaan penanda biologis dalam darah untuk menilai kecurigaan keganasan ovarium."
        },
        {
          "term": "Meteorismus & Distensio Abdominis",
          "meaning": "Sensasi perut cepat begah, kembung membesar, dan terasa mengganjal di panggul bawah."
        },
        {
          "term": "Oophorectomia Bilateralis",
          "meaning": "Tindakan pembedahan pengangkatan kedua indung telur untuk biopsi patologi dan mencegah komplikasi."
        }
      ]
    }
  },
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
        {
          "level": "Derajat Ringan (Skor 15 - 17)",
          "criteria": "Kelemahan motorik jari tangan minimal, masih mampu berjalan mandiri tanpa bantuan.",
          "risk": "Terapi konservatif: fisioterapi servikal, traksi leher, dan neck collar saat bepergian."
        },
        {
          "level": "Derajat Sedang (Skor 12 - 14)",
          "criteria": "Kesulitan mengancingkan baju, membutuhkan tongkat atau pegangan saat berjalan jauh.",
          "risk": "Perlu evaluasi MRI servikal berkala; pertimbangkan intervensi bedah dekompresi elektif."
        },
        {
          "level": "Derajat Berat (Skor < 12)",
          "criteria": "Tidak mampu berjalan mandiri, tetraparesis spastik, gangguan miksi/defekasi.",
          "risk": "Risiko kecacatan permanen - Indikasi bedah laminoplasti / ACDF (Anterior Cervical Discectomy and Fusion) segera."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Biomarker Inflamasi (LED & CRP)",
          "param": "Biasanya normal; membantu menyingkirkan spondilodistitis infeksius atau metastasis tulang."
        },
        {
          "test": "Kadar Kalsium & Vitamin D 25(OH)D",
          "param": "Menilai status mineralisasi tulang rangka servikal."
        }
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
        {
          "term": "Osteophytosis Cervicalis",
          "meaning": "Pembentukan taji tulang abnormal pada tepi korpus tulang leher akibat pengapuran degeneratif."
        },
        {
          "term": "Stenosis Canalis Vertebralis",
          "meaning": "Penyempitan rongga pipa tulang belakang tempat berjalannya sumsum saraf medula spinalis."
        },
        {
          "term": "Radiculopathia Brachialis",
          "meaning": "Penjepit serabut akar saraf leher yang memicu nyeri menjalar ke bahu hingga jemari tangan."
        },
        {
          "term": "Myelopathia Compressiva",
          "meaning": "Kerusakan struktural sumsum tulang leher akibat jepitan kronis yang melumpuhkan koordinasi kaki."
        },
        {
          "term": "Signum Lhermitte",
          "meaning": "Sensasi sengatan listrik mendadak di punggung saat menekuk leher ke bawah tanda iritasi medula."
        }
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
        {
          "level": "Kerapuhan Tulang Normal",
          "criteria": "T-Score BMD ≥ -1.0 SD (standar deviasi dewasa muda).",
          "risk": "Risiko fraktur rendah - Pertahankan nutrisi kalsium dan aktivitas fisik harian."
        },
        {
          "level": "Osteopenia (Pelemahan Tulang)",
          "criteria": "T-Score antara -1.0 SD hingga -2.5 SD.",
          "risk": "Risiko fraktur sedang - Suplementasi kalsium, vitamin D3, dan latihan menahan beban."
        },
        {
          "level": "Osteoporosis Berat / Established",
          "criteria": "T-Score ≤ -2.5 SD disertai adanya satu atau lebih riwayat fraktur kerapuhan (fraktur vertebra/panggul).",
          "risk": "Risiko tinggi fraktur berulang - Terapi farmakologis anti-resorptif / anabolik tulang intensif."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Kadar Vitamin D 25(OH)D Total",
          "param": "Defisiensi berat jika <20 ng/mL; target terapi osteoporosis >30-50 ng/mL."
        },
        {
          "test": "Biomarker Resorpsi Tulang (CTX / C-Terminal Telopeptide)",
          "param": "Peningkatan CTX darah menunjukkan perombakan tulang berlebih."
        }
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
        {
          "term": "Fractura Compressiva Vertebrae",
          "meaning": "Runtuhnya ketinggian korpus tulang belakang akibat kerapuhan struktur matriks tulang."
        },
        {
          "term": "Kyphosis Senilis",
          "meaning": "Kelengkungan tulang belakang membungkuk ke depan akibat penumpukan fraktur baji korpus vertebra."
        },
        {
          "term": "Trabecula Ossea Rara",
          "meaning": "Penipisan dan pelemahan jaring-jaring tulang spongiosa penyangga kekuatan tulang belakang."
        },
        {
          "term": "Resorptio Ossea Osteoclastica",
          "meaning": "Aktivitas sel pemakan tulang (osteoklas) yang berlebihan melampaui pembentukan tulang baru."
        },
        {
          "term": "Kyphoplastia Percutanea",
          "meaning": "Prosedur intervensi penyuntikan semen tulang khusus (PMMA) ke dalam korpus vertebra yang patah."
        }
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
        {
          "level": "Derajat 1 (Meragukan)",
          "criteria": "Penyempitan celah sendi minimal dan osteofit marjinal meragukan.",
          "risk": "Modifikasi aktivitas, penurunan berat badan, latihan penguatan otot abduktor panggul."
        },
        {
          "level": "Derajat 2 - 3 (Ringan - Sedang)",
          "criteria": "Osteofit definitif nyata, penyempitan celah sendi panggul jelas, sklerosis subkondral.",
          "risk": "Farmakoterapi analgesik, fisioterapi, penggunaan tongkat jalan di sisi kontralateral."
        },
        {
          "level": "Derajat 4 (Berat / Tulang Bertemu Tulang)",
          "criteria": "Hilangnya celah sendi komplit, deformitas kaput femur, kista tulang subkondral besar.",
          "risk": "Nyeri konstan saat istirahat dan disabilitas berat - Indikasi operasi Penggantian Sendi Panggul Total (Total Hip Arthroplasty / THA)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Darah Lengkap & LED/CRP",
          "param": "Normal pada osteoartritis murni; membantu menyingkirkan artritis reumatoid atau infeksi sendi septik."
        }
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
        {
          "term": "Coxarthrosis Degenerativa",
          "meaning": "Pengapuran dan pengikisan tulang rawan sendi panggul yang membatasi pergerakan melangkah."
        },
        {
          "term": "Caput Femoris",
          "meaning": "Kepala bulat tulang paha yang bersendi ke dalam mangkuk asetabulum tulang panggul."
        },
        {
          "term": "Sclerosis Subchondralis",
          "meaning": "Penebalan dan pengerasan tulang di bawah lapisan rawan sendi akibat beban gesekan langsung."
        },
        {
          "term": "Gait Antalgicus",
          "meaning": "Pola langkah jalan pincang untuk meminimalkan waktu menumpu beban pada panggul yang sakit."
        },
        {
          "term": "Arthroplastica Totalis Coxae (THA)",
          "meaning": "Operasi penggantian sendi panggul total menggunakan implan prostetik metal dan polietilen."
        }
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
        {
          "level": "Derajat 1 (Awal)",
          "criteria": "Penyempitan celah sendi meragukan, kemungkinan taji osteofit kecil.",
          "risk": "Latihan penguatan kuadrisep, koreksi alas kaki empuk, manajemen berat badan."
        },
        {
          "level": "Derajat 2 - 3 (Sedang)",
          "criteria": "Osteofit definitif nyata, penyempitan celah sendi medial nyata, sklerosis subkondral sedang.",
          "risk": "Fisioterapi modalitas (TENS, ultrasound), penyangga lutut (knee brace), analgesik terarah."
        },
        {
          "level": "Derajat 4 (Berat / Kering Total)",
          "criteria": "Celah sendi lenyap (tulang saling bergesekan), deformitas varus berat, erosi tulang luas.",
          "risk": "Disabilitas fungsional berat - Indikasi operasi Penggantian Sendi Lutut Total (Total Knee Arthroplasty / TKA)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Analisis Cairan Sinovial Lutut (Arstrosentesis)",
          "param": "Cairan jernih kental kekuningan dengan leukosit <2000 sel/uL (non-inflamasi) membedakan OA dari artritis septik (>50.000 sel/uL) atau asam urat."
        },
        {
          "test": "Kadar Asam Urat Serum",
          "param": "Menyingkirkan komorbiditas artritis gout pada lutut bengkak."
        }
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
        {
          "term": "Gonarthrosis Genu",
          "meaning": "Penyakit pengapuran dan kerusakan degeneratif pada tulang rawan sendi lutut."
        },
        {
          "term": "Crepitatio Articularis",
          "meaning": "Suara gemeretak berderak kasar saat sendi lutut ditekuk atau diluruskan akibat gesekan tulang."
        },
        {
          "term": "Deformitas Genua Vara",
          "meaning": "Kelainan bentuk tungkai bawah melengkung ke luar menyerupai huruf O akibat ausnya kompartemen dalam."
        },
        {
          "term": "Effusio Sinovialis",
          "meaning": "Penumpukan cairan radang berlebih di dalam rongga sendi yang membuat lutut tampak bengkak kencang."
        },
        {
          "term": "Arthroplastica Totalis Genu (TKA)",
          "meaning": "Operasi penggantian permukaan sendi lutut yang aus dengan bantalan logam prostetik presisi."
        }
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
        {
          "level": "Stadium 1 (Hiperurisemia Asimtomatik)",
          "criteria": "Asam urat >7 mg/dL tanpa pernah ada serangan radang sendi atau tofus.",
          "risk": "Modifikasi diet rendah purin dan hidrasi cukup; belum diindikasikan obat penurun asam urat rutin."
        },
        {
          "level": "Stadium 2 (Artritis Gout Akut & Interkritis)",
          "criteria": "Serangan radang sendi akut hilang timbul dengan masa bebas gejala di antaranya.",
          "risk": "Terapi anti-inflamasi fase akut; inisiasi obat penurun asam urat (ULT) pasca-akut."
        },
        {
          "level": "Stadium 3 (Gout Kronis Bertofus)",
          "criteria": "Endapan tofus padat di sendi multipel, nyeri persisten, destruksi tulang pada rontgen.",
          "risk": "Risiko kecacatan sendi dan gagal ginjal - Target asam urat serum agresif <5 mg/dL jangka panjang."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Kadar Asam Urat Serum",
          "param": "Dapat normal palsu saat serangan akut karena asam urat berpindah ke jaringan sendi; ulangi 2 minggu pasca-serangan (target <6 mg/dL)."
        },
        {
          "test": "Analisis Cairan Sendi (Mikroskop Polarisasi)",
          "param": "BAKU EMAS: Ditemukannya kristal monosodium urat berbentuk jarum dengan birefringence negatif kuat."
        }
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
        {
          "term": "Podagra",
          "meaning": "Serangan peradangan nyeri hebat akut pada sendi metatarsofalangeal pertama (pangkal ibu jari kaki)."
        },
        {
          "term": "Tophus Gouty",
          "meaning": "Benjolan timbunan kristal kapur monosodium urat padat di bawah kulit dan sekitar persendian."
        },
        {
          "term": "Hyperuricaemia",
          "meaning": "Peningkatan kadar asam urat dalam plasma darah melebihi batas kelarutan normal (>6.8-7.0 mg/dL)."
        },
        {
          "term": "Birefringence Negativa",
          "meaning": "Sifat optik khas kristal urat yang tampak bersinar kuning sejajar sumbu saat dilihat mikroskop polarisasi."
        },
        {
          "term": "Erosio Punched-Out",
          "meaning": "Kerusakan tulang tepi sendi berbentuk lubang cekung khas dengan batas tepi menggantung pada foto rontgen."
        }
      ]
    }
  },
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
        {
          "level": "Killip I",
          "criteria": "Infark miokard tanpa tanda gagal jantung kongestif atau ronki basah.",
          "risk": "Mortalitas rumah sakit rendah (6%) - Terapi revaskularisasi dini dan DAPT."
        },
        {
          "level": "Killip II - III",
          "criteria": "Killip II: Ronki basah halus di basal paru, S3 gallop; Killip III: Edema paru akut luas.",
          "risk": "Mortalitas sedang hingga tinggi (17-38%) - Diuretik intravena, vasodilator, oksigenasi ketat."
        },
        {
          "level": "Killip IV (Syok Kardiogenik)",
          "criteria": "Tekanan darah sistolik <90 mmHg, oliguria, akral dingin, penurunan kesadaran.",
          "risk": "Mortalitas sangat tinggi (>60-80%) - Intervensi Koroner Perkutan (PCI) primer darurat dan obat inotropik/IABP."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Cardiac Troponin I / T Kuantitatif (hs-cTn)",
          "param": "Peningkatan kurva troponin melonjak tinggi di atas persentil 99 batas atas normal menandakan nekrosis miosit akut."
        },
        {
          "test": "CK-MB & Profil Elektrolit (Kalium, Magnesium)",
          "param": "Memantau perluasan infark dan mencegah aritmia letal hipokalemia."
        }
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
        {
          "term": "Infarctus Myocardii",
          "meaning": "Kematian jaringan otot dinding jantung akibat putusnya aliran pasokan darah arteri koroner."
        },
        {
          "term": "Atherosclerosis Coronaria",
          "meaning": "Penumpukan plak kolesterol dan kalsium yang menyumbat lumen pipa pembuluh darah jantung."
        },
        {
          "term": "Angina Pectoris",
          "meaning": "Sensasi nyeri dada tercekik atau tertindih beban berat akibat ketidakseimbangan pasokan oksigen miokard."
        },
        {
          "term": "Angiographia Coronaria",
          "meaning": "Pemeriksaan rontgen kontras pembuluh darah jantung via kateterisasi selang lipat paha atau lengan."
        },
        {
          "term": "Interventio Coronaria Percutanea (PCI)",
          "meaning": "Prosedur pemasangan cincin ring/stent jantung minimal invasif untuk membuka kembali arteri yang tersumbat."
        }
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
        {
          "level": "NYHA Kelas I (Stadium B)",
          "criteria": "Penyakit jantung struktural tanpa batasan aktivitas fisik biasa; tidak memicu sesak/lelah berlebih.",
          "risk": "Terapi pencegahan: ACE-i/ARB dan beta-blocker."
        },
        {
          "level": "NYHA Kelas II (Stadium C Ringan)",
          "criteria": "Batasan aktivitas fisik ringan: nyaman saat istirahat, namun aktivitas fisik biasa (naik tangga) memicu sesak napas.",
          "risk": "Terapi 4 pilar gagal jantung komprehensif (ARNI, Beta-blocker, MRA, SGLT2-i)."
        },
        {
          "level": "NYHA Kelas III - IV (Stadium C Berat - D)",
          "criteria": "Kelas III: Gejala muncul pada aktivitas sangat ringan; Kelas IV: Sesak napas bahkan saat istirahat tidur di ranjang.",
          "risk": "Risiko rawat inap berulang dan mortalitas tinggi - Diuretik loop intravena, restriksi cairan ketat, perawatan paliatif kardiologi."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Biomarker NT-proBNP / BNP Serum",
          "param": "BAKU EMAS: Peningkatan NT-proBNP >300-450 pg/mL (pada lansia >900-1800 pg/mL) mengonfirmasi gagal jantung akut dengan akurasi sangat tinggi."
        },
        {
          "test": "Fungsi Ginjal (Kreatinin, eGFR) & Elektrolit (Na, K)",
          "param": "Memantau sindrom kardiorenal dan memandu titrasi obat diuretik."
        }
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
        {
          "term": "Insufficientia Cordis",
          "meaning": "Ketidakmampuan pompa jantung memompa atau mengisi darah secara adekuat untuk tubuh."
        },
        {
          "term": "Orthopnea",
          "meaning": "Sensasi sesak napas berat yang muncul saat berbaring datar dan membaik saat duduk tegak."
        },
        {
          "term": "Oedema Pretibiale Bilateralis",
          "meaning": "Pembengkakan berisi cairan pada kedua tungkai tulang kering yang meninggalkan lekukan saat ditekan."
        },
        {
          "term": "Oedema Pulmonum Acutum",
          "meaning": "Perembesan cairan darah ke dalam kantung udara paru-paru akibat tekanan balik jantung kiri yang gagal."
        },
        {
          "term": "Cardiomegalia",
          "meaning": "Pembesaran ukuran ruang atau massa otot jantung yang terdeteksi pada pemeriksaan radiologi toraks."
        }
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
        {
          "level": "CHA2DS2-VASc Skor 0 - 1",
          "criteria": "Usia muda tanpa faktor risiko mayor.",
          "risk": "Risiko stroke rendah - Tidak wajib antikoagulan oral."
        },
        {
          "level": "CHA2DS2-VASc Skor ≥ 2 (Pria) / ≥ 3 (Wanita)",
          "criteria": "Lansia usia ≥65-75 tahun (+1 hingga +2), Hipertensi (+1), Diabetes (+1), Stroke terdahulu (+2).",
          "risk": "Risiko stroke kardioemboli TINGGI (>5-10% per tahun) - INDIKASI MUTLAK Antikoagulan Oral Baru (NOAC/DOAC)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Fungsi Tiroid (TSH & Free T4)",
          "param": "Menyingkirkan tirotoksikosis/hipertiroidisme apatetik lansia sebagai pemicu aritmia AF."
        },
        {
          "test": "Fungsi Ginjal (eGFR) & Hemostasis",
          "param": "Panduan penyesuaian dosis antikoagulan DOAC/NOAC."
        }
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
        {
          "term": "Fibrillatio Atriorum",
          "meaning": "Kekacauan irama listrik serambi jantung yang bergetar cepat tanpa pompa mekanik yang teratur."
        },
        {
          "term": "Arythmia Irregulariter Irregularis",
          "meaning": "Pola denyut nadi yang sama sekali tidak beraturan baik dalam tempo maupun kekuatannya."
        },
        {
          "term": "Thrombus Auriculae Sinistrae",
          "meaning": "Gumpalan bekuan darah yang terbentuk di kantung aurikula serambi kiri jantung akibat stasis darah."
        },
        {
          "term": "Cardioembolismus Cerebri",
          "meaning": "Terlepasnya bekuan darah dari jantung yang menyumbat arteri otak memicu stroke iskemik akut."
        },
        {
          "term": "Anticoagulans Oralis Directus (DOAC)",
          "meaning": "Golongan obat pengencer darah modern penghambat faktor pembekuan darah terarah."
        }
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
        {
          "level": "Optimal / Terkontrol Lansia",
          "criteria": "Tekanan Sistolik 130 - 139 mmHg dan Diastolik 70 - 79 mmHg.",
          "risk": "Target aman lansia fit (hindari penurunan diastolik <60-65 mmHg agar perfusi koroner terjaga)."
        },
        {
          "level": "Hipertensi Derajat 1",
          "criteria": "Sistolik 140 - 159 mmHg dan/atau Diastolik 90 - 99 mmHg.",
          "risk": "Modifikasi gaya hidup dan monoterapi antihipertensi lini pertama dosis rendah."
        },
        {
          "level": "Hipertensi Derajat 2 - 3 / Krisis",
          "criteria": "Sistolik ≥160 - 180 mmHg; Krisis Hipertensi jika Sistolik >180 mmHg dengan kerusakan organ akut.",
          "risk": "Kombinasi 2 obat antihipertensi sinergis; rujukan IGD segera jika terdapat krisis hipertensi emergensi."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Urinalisis Mikroalbuminuria (UACR)",
          "param": "Mendeteksi kerusakan vaskular glomerulus ginjal dini akibat tekanan darah tinggi kronis."
        },
        {
          "test": "Kreatinin Serum & Profil Lipid Lengkap",
          "param": "Menilai fungsi ekskresi ginjal dan risiko aterosklerosis kardiovaskular total."
        }
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
        {
          "term": "Hypertensio Systolica Isolata (ISH)",
          "meaning": "Kondisi tekanan darah sistolik melonjak tinggi (≥140) sementara tekanan diastolik normal (<90)."
        },
        {
          "term": "Stiffness Arterialis",
          "meaning": "Kekakuan dan hilangnya kelenturan dinding pipa pembuluh darah arteri besar akibat penuaan kolagen."
        },
        {
          "term": "Hypotensio Orthostatica",
          "meaning": "Penurunan tekanan darah sistolik >20 mmHg saat posisi tubuh berubah mendadak dari tidur ke berdiri."
        },
        {
          "term": "Hypertrophia Ventriculi Sinistri (LVH)",
          "meaning": "Penebalan otot dinding bilik kiri jantung akibat beban kerja memompa melawan tekanan tinggi."
        },
        {
          "term": "Retinopathia Hypertensiva",
          "meaning": "Kerusakan mikrosirkulasi pembuluh darah saraf retina mata akibat paparan tekanan darah tinggi menahun."
        }
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
        {
          "level": "Skor Wells ≤ 0 (Risiko Rendah)",
          "criteria": "Probabilitas DVT rendah (<5%).",
          "risk": "Uji D-Dimer darah; jika D-Dimer normal, diagnosis DVT dapat disingkirkan tanpa USG."
        },
        {
          "level": "Skor Wells 1 - 2 (Risiko Sedang)",
          "criteria": "Terdapat pembengkakan betis unilateral >3 cm, pitting edema terlokalisir.",
          "risk": "Indikasi pemeriksaan USG Vaskular Doppler vena tungkai segera."
        },
        {
          "level": "Skor Wells ≥ 3 (Risiko Tinggi)",
          "criteria": "Kanker aktif, tirah baring >3 hari, seluruh tungkai bengkak, nyeri vena profunda.",
          "risk": "Probabilitas DVT tinggi (>70%) - USG Doppler segera dan inisiasi antikoagulan terapeutik."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "D-Dimer Kuantitatif Plasma",
          "param": "Peningkatan D-Dimer (>500 ng/mL / age-adjusted cut-off: Usia x 10 ng/mL pada lansia >50 tahun) menandakan lisis bekuan fibrin aktif."
        }
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
        {
          "term": "Thrombosis Venae Profundae",
          "meaning": "Pembentukan bekuan darah menyumbat pembuluh darah balik dalam pada tungkai kaki."
        },
        {
          "term": "Embolismus Pulmonalis",
          "meaning": "Penyumbatan pembuluh darah arteri paru-paru oleh bekuan darah yang terlepas dari tungkai kaki."
        },
        {
          "term": "Trias Virchow",
          "meaning": "Tiga faktor pemicu penggumpalan darah: aliran lambat (stasis), dinding luka (endotel), dan darah kental."
        },
        {
          "term": "Phlegmasia Cerulea Dolens",
          "meaning": "Kondisi darurat sumbatan vena total yang membuat seluruh tungkai membengkak ungu kebiruan dingin."
        },
        {
          "term": "Syndroma Post-Thromboticum",
          "meaning": "Komplikasi menahun kerusakan katup vena pasca-DVT yang memicu luka ulkus borok di mata kaki."
        }
      ]
    }
  },
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
        {
          "level": "Hipotiroidisme Subklinis",
          "criteria": "TSH meningkat (4.5 - 10.0 mIU/L) dengan kadar Free T4 normal.",
          "risk": "Pantau berkala; terapi Levotiroksin jika TSH >10 mIU/L atau antibodi anti-TPO tinggi."
        },
        {
          "level": "Hipotiroidisme Overt (Nyata)",
          "criteria": "TSH meningkat tinggi (>10 mIU/L) disertai penurunan kadar Free T4 di bawah normal.",
          "risk": "Indikasi substitusi hormon Levotiroksin oral seumur hidup."
        },
        {
          "level": "Koma Miksedema (Krisis Kedaruratan)",
          "criteria": "Penurunan kesadaran koma, hipotermia berat (<35°C), bradikardia ekstrem, hipoventilasi.",
          "risk": "Mortalitas tinggi (>30-50%) - Rawat ICU dengan Levotiroksin intravena dan hidrokortison."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "TSH Sensitif (sTSH) & Free T4 (FT4)",
          "param": "BAKU EMAS: TSH tinggi dengan FT4 rendah mengonfirmasi hipotiroid primer kelenjar tiroid."
        },
        {
          "test": "Antibodi Anti-TPO (Thyroid Peroxidase)",
          "param": "Positif kuat pada tiroiditis autoimun kronis Hashimoto."
        }
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
        {
          "term": "Hypothyreoidismus",
          "meaning": "Kondisi defisiensi produksi hormon kelenjar tiroid yang memperlambat metabolisme tubuh."
        },
        {
          "term": "Myxoedema",
          "meaning": "Penebalan kulit dan jaringan lunak akibat penumpukan cairan gelatinosa lendir protein mucin."
        },
        {
          "term": "Coma Myxoedematosum",
          "meaning": "Komplikasi darurat kegagalan tiroid tahap akhir dengan hipotermia dan penurunan kesadaran koma."
        },
        {
          "term": "Pseudodementia Thyreoidea",
          "meaning": "Gangguan fungsi memori dan kelambatan berpikir akibat kekurangan hormon tiroid yang menyerupai demensia."
        },
        {
          "term": "Thyroxinum (Levothyroxine)",
          "meaning": "Hormon tiroksin sintetik bioidentik untuk menggantikan kekurangan hormon alami tubuh."
        }
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
        {
          "level": "Insufisiensi Kronis Terkompensasi",
          "criteria": "Kortisol serum pagi hari rendah-moderat, gejala lemas intermiten.",
          "risk": "Terapi substitusi Hidrokortison fisiologis oral harian."
        },
        {
          "level": "Krisis Adrenal Akut (Addisonian Crisis)",
          "criteria": "Syok hipotensi refrakter, muntah profus, hipoglikemia berat, demam/hipotermia.",
          "risk": "KEDARURATAN MEDIS FATAL - Hidrokortison intravena dosis tinggi bolus segera dan cairan salin normal."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Kortisol Serum Pagi (Pukul 08.00)",
          "param": "Kadar kortisol pagi <3 mcg/dL mengonfirmasi insufisiensi adrenal; >15-18 mcg/dL menyingkirkan diagnosis."
        },
        {
          "test": "Elektrolit Darah (Natrium & Kalium)",
          "param": "Hiponatremia (<130 mEq/L) dan hiperkalemia (>5.0 mEq/L) khas pada defisiensi aldosteron."
        }
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
        {
          "term": "Crisis Addisoniana",
          "meaning": "Kedaruratan mematikan akibat kekurangan hormon kortisol akut yang memicu kolaps tekanan darah dan syok."
        },
        {
          "term": "Cortex Glandulae Suprarenalis",
          "meaning": "Lapisan luar kelenjar anak ginjal yang memproduksi hormon kortisol, aldosteron, dan androgen."
        },
        {
          "term": "Hyponatraemia & Hyperkalaemia",
          "meaning": "Penurunan kadar natrium darah disertai lonjakan kadar kalium darah akibat kekurangan aldosteron."
        },
        {
          "term": "Atrophia Corticalis Iatrogenica",
          "meaning": "Penyusutan kelenjar adrenal akibat konsumsi obat steroid antinyeri dari luar jangka panjang."
        },
        {
          "term": "Hydrocortisonum",
          "meaning": "Hormon kortisol sintetik pengganti untuk mempertahankan kelangsungan hidup pasien."
        }
      ]
    }
  },
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
        {
          "level": "Stadium G3a - G3b (Penurunan Sedang)",
          "criteria": "eGFR 30 - 59 mL/min/1.73m2.",
          "risk": "Manajemen agresif memperlambat progresi (SGLT2-i, ACE-i/ARB), penyesuaian dosis seluruh obat."
        },
        {
          "level": "Stadium G4 (Penurunan Berat)",
          "criteria": "eGFR 15 - 29 mL/min/1.73m2.",
          "risk": "Persiapan terapi pengganti ginjal (edukasi akses vaskular AV Fistula cimino / CAPD)."
        },
        {
          "level": "Stadium G5 (Gagal Ginjal Terminal / ESRD)",
          "criteria": "eGFR < 15 mL/min/1.73m2 atau memerlukan dialisis rutin.",
          "risk": "Indikasi Terapi Pengganti Ginjal (Hemodialisis reguler / CAPD) atau Terapi Konservatif Komprehensif Paliatif."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "eGFR (CKD-EPI) & Ureum/Kreatinin Serum",
          "param": "Evaluasi laju filtrasi ginjal terstandar luas permukaan tubuh."
        },
        {
          "test": "Urinalisis Mikroalbuminuria / UACR & Elektrolit (K, Ca, P)",
          "param": "Albuminuria menandakan kerusakan barier glomerulus; waspadai hiperkalemia K >5.5 mEq/L."
        }
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
        {
          "term": "Insufficientia Renalis Chronica",
          "meaning": "Penurunan kapasitas penyaringan racun dan pengaturan cairan ginjal yang bersifat menahun ireversibel."
        },
        {
          "term": "Glomerulosclerosis",
          "meaning": "Pengerasan dan jaringan parut pada saringan darah mikroskopis ginjal (glomerulus)."
        },
        {
          "term": "Uraemia",
          "meaning": "Sindrom keracunan darah akibat penumpukan produk limbah sisa metabolisme protein tubuh."
        },
        {
          "term": "Hyperkalaemia",
          "meaning": "Kadar elektrolit kalium darah melonjak berbahaya di atas batas aman yang dapat menghentikan detak jantung."
        },
        {
          "term": "Haemodialysis",
          "meaning": "Prosedur cuci darah menggunakan mesin ginjal buatan untuk membersihkan racun dan kelebihan cairan tubuh."
        }
      ]
    }
  },
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
        {
          "level": "Imunokompeten Lansia Fit",
          "criteria": "Respons memadai terhadap vaksinasi, biomarker inflamasi basal (CRP <3 mg/L) stabil.",
          "risk": "Pemeliharaan imunitas melalui nutrisi mikro dan vaksinasi rutin."
        },
        {
          "level": "Immunosenescence Sedang (Pre-Frail)",
          "criteria": "Rasio CD4/CD8 terbalik (<1.0), episode infeksi berulang 2-3 kali/tahun.",
          "risk": "Perlu suplemen imunonutrisi, skrining infeksi tersembunyi, dan vaksinasi booster terarah."
        },
        {
          "level": "Imunodefisiensi Senilis Berat (Frail)",
          "criteria": "Limfopenia kronis, anergia kulit total, inflamasi kronis persisten (CRP >10 mg/L), kaheksia.",
          "risk": "Risiko sepsis fulminan dan mortalitas tinggi - Kewaspadaan klinis ketat terhadap setiap perubahan perilaku."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Hitung Limfosit Total (TLC) & CD4/CD8 Ratio",
          "param": "Limfopenia (limfosit <1200-1500 sel/uL) dan rasio CD4/CD8 terbalik menunjukkan kelelahan sel T imun."
        },
        {
          "test": "High-Sensitivity CRP (hs-CRP) & Albumin Darah",
          "param": "hs-CRP meningkat menetap mengonfirmasi status 'Inflammaging' sistemik."
        }
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
        {
          "term": "Immunosenescentia",
          "meaning": "Penurunan kapasitas fungsional sel kekebalan tubuh akibat proses penuaan biologis alami."
        },
        {
          "term": "Inflammaging",
          "meaning": "Status peradangan kronis steril derajat rendah yang menetap di seluruh tubuh akibat penuaan sistem imun."
        },
        {
          "term": "Involutio Thymi",
          "meaning": "Penyusutan alami jaringan kelenjar timus seiring usia yang membatasi pembentukan sel T pelindung baru."
        },
        {
          "term": "Anergia Cutanea",
          "meaning": "Hilangnya respons peradangan kulit saat diuji alergen/tuberkulin tanda kelemahan imunitas seluler."
        },
        {
          "term": "Immunovaccinatio",
          "meaning": "Pemberian vaksin pelindung antigen khusus untuk melatih kembali memori sel imun lansia."
        }
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
        {
          "level": "Remisi Klinis (DAS28 < 2.6)",
          "criteria": "Tidak ada sendi bengkak aktif, inflamasi terkontrol baik.",
          "risk": "Pertahankan terapi DMARD dosis rumatan minimal."
        },
        {
          "level": "Aktivitas Sedang (DAS28 3.2 - 5.1)",
          "criteria": "Nyeri dan bengkak pada beberapa sendi, kaku pagi hari menetap.",
          "risk": "Eskalasi terapi kombinasi DMARD konvensional sintetik."
        },
        {
          "level": "Aktivitas Berat (DAS28 > 5.1)",
          "criteria": "Inflamasi sendi luas multipel, erosi radiologis progresif, gangguan fungsi harian.",
          "risk": "Risiko kecacatan permanen - Pertimbangkan agen biologis (Anti-TNF / Anti-IL-6) atau Targeted Synthetic DMARD (JAK Inhibitor)."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Anti-Cyclic Citrullinated Peptide (Anti-CCP / ACPA)",
          "param": "Spesifisitas sangat tinggi (>95-98%) untuk konfirmasi artritis reumatoid destruktif."
        },
        {
          "test": "Rheumatoid Factor (RF) Kuantitatif & LED/CRP",
          "param": "Peningkatan titer RF dan lonjakan tajam penanda inflamasi akut (LED >50-100 mm/jam)."
        }
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
        {
          "term": "Synovitis Rheumatoidea",
          "meaning": "Peradangan kronis selaput pelumas sendi yang memicu proliferasi jaringan abnormal."
        },
        {
          "term": "Pannus Articularis",
          "meaning": "Jaringan granulasi radang invasif tebal yang mengikis dan menghancurkan tulang rawan sendi."
        },
        {
          "term": "Deformitas Digitorum",
          "meaning": "Perubahan bentuk jari jemari tangan melengkung abnormal seperti leher angsa (swan-neck deformity)."
        },
        {
          "term": "Subluxatio Atlantoaxialis",
          "meaning": "Pergeseran longgar berbahaya antara tulang leher pertama (atlas) dan kedua (axis) akibat erosi ligamen."
        },
        {
          "term": "Nodulus Rheumatoideus",
          "meaning": "Benjolan kenyal subkutan di bawah kulit di sekitar siku atau sendi akibat endapan kompleks imun."
        }
      ]
    }
  },
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
        {
          "level": "Stadium 0 (Subklinis / Laten)",
          "criteria": "Aliran limfe terganggu namun belum ada pembengkakan yang kasat mata.",
          "risk": "Edukasi pencegahan trauma dan infeksi kulit."
        },
        {
          "level": "Stadium 1 (Reversibel Awal)",
          "criteria": "Edema masih berupa pitting (meninggalkan lekukan), mengecil atau mengempis saat tungkai ditinggikan.",
          "risk": "Terapi kompresi elastis dini dan elevasi tungkai."
        },
        {
          "level": "Stadium 2 - 3 (Fibrosis Spontan & Elephantiasis)",
          "criteria": "Stadium 2: Jaringan mengeras fibrotik non-pitting; Stadium 3: Kulit kasar berbenjol (papilomatosis), deformitas masif 'kaki gajah'.",
          "risk": "Kompleks Decongestive Therapy (CDT) intensif oleh terapis limfatik bersertifikat."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Darah Lengkap & Albumin Serum",
          "param": "Membedakan pembengkakan sistemik hipoalbuminemia dari limfedema murni."
        },
        {
          "test": "Kultur Swab Eksudat Kulit",
          "param": "Jika terjadi kebocoran cairan limfe atau infeksi selulitis sekunder."
        }
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
        {
          "term": "Lymphaedema",
          "meaning": "Pembengkakan jaringan lunak akibat penumpukan cairan getah bening kaya protein yang tersumbat."
        },
        {
          "term": "Signum Stemmer Positivum",
          "meaning": "Ketidakmampuan mencubit lipatan kulit di pangkal jari kaki akibat penebalan fibrosis kulit."
        },
        {
          "term": "Lymphangitis",
          "meaning": "Peradangan infeksi akut pada saluran pembuluh getah bening yang tampak sebagai garis merah di kulit."
        },
        {
          "term": "Elephantiasis Nostras Verrucosa",
          "meaning": "Pembesaran ekstremitas masif menyerupai kaki gajah dengan permukaan kulit berbenjol kutil."
        },
        {
          "term": "Drainage Lymphatica Manualis (MLD)",
          "meaning": "Teknik manipulasi pemijatan ritmik lembut terarah untuk mengalirkan cairan limfe ke kelenjar sehat."
        }
      ]
    }
  },
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
        {
          "level": "Stadium 1 (Kemerahan Non-Blanchable)",
          "criteria": "Kulit utuh dengan area kemerahan menetap yang tidak memutih saat ditekan ibu jari.",
          "risk": "Reversibel cepat jika tekanan segera dihilangkan; gunakan bantalan pelindung."
        },
        {
          "level": "Stadium 2 (Kehilangan Sebagian Kulit)",
          "criteria": "Luka dangkal dengan dasar luka merah muda bersih atau gelembung lepuh berisi cairan serosa.",
          "risk": "Perawatan luka balutan modern moist wound dressing (hidrogel/hidrokoloid)."
        },
        {
          "level": "Stadium 3 - 4 (Borok Dalam Menembus Otot/Tulang)",
          "criteria": "Stadium 3: Lemak subkutan tampak; Stadium 4: Tulang, tendo, atau otot tampak jelas dengan jaringan mati hitam (slough/eschar).",
          "risk": "Risiko osteomielitis dan sepsis tinggi - Debridemen bedah dan penanganan luka spesialis."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Darah Lengkap & Albumin Serum",
          "param": "Hipoalbuminemia (<2.5-3.0 g/dL) sangat menghambat penyembuhan luka dan meningkatkan kerapuhan kulit."
        },
        {
          "test": "Kultur Jaringan Dasar Luka (Bukan Swab Permukaan)",
          "param": "Mendeteksi infeksi bakteri polimikrobial invasif (Pseudomonas, MRSA, kuman anaerob)."
        }
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
        {
          "term": "Ulcus Decubitus",
          "meaning": "Luka borok pada kulit akibat tekanan fisik dan gaya gesek berkepanjangan pada bagian tubuh yang menonjol."
        },
        {
          "term": "Erythema Non-Blanchable",
          "meaning": "Kemerahan pada kulit yang tidak memucat saat ditekan jari tanda kerusakan mikrovaskular awal."
        },
        {
          "term": "Eschar Necroticus",
          "meaning": "Keropeng jaringan kulit dan lemak mati berwarna hitam keras di dasar luka yang harus dibuang."
        },
        {
          "term": "Osteomyelitis Subjacens",
          "meaning": "Infeksi bakteri yang merambat masuk menginfeksi tulang di bawah dasar luka borok yang dalam."
        },
        {
          "term": "Debridementum Chirurgicum",
          "meaning": "Tindakan pembedahan pengangkatan jaringan mati dan nanah untuk merangsang penyembuhan luka baru."
        }
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
        {
          "level": "Fase Pre-Eruptif (Prodromal 1-5 hari)",
          "criteria": "Nyeri terbakar, hiperestesia, pegal linu unilateral tanpa ruam kulit.",
          "risk": "Kecurigaan klinis tinggi memungkinkan inisiasi antivirus segera saat bintik pertama muncul."
        },
        {
          "level": "Fase Eruptif Akut (Hari 1 - 14)",
          "criteria": "Vesikel melepuh bergerombol, pecah membentuk keropeng krusta.",
          "risk": "Periode jendela emas antivirus oral (dalam 72 jam pertama awitan ruam)."
        },
        {
          "level": "Neuralgia Pasca-Herpes (PHN Kronis)",
          "criteria": "Nyeri neuropatik menusuk membakar menetap >3 bulan setelah luka kulit sembuh total.",
          "risk": "Nyeri kronis berat yang menurunkan kualitas hidup - Terapi multimodal nyeri neuropatik geriatri."
        }
      ]
    },
    "diagnostic": {
      "labTests": [
        {
          "test": "Tzanck Smear / Kerokan Dasar Vesikel",
          "param": "Memperlihatkan sel raksasa berinti banyak (multinucleated giant cells) khas infeksi herpes virus."
        },
        {
          "test": "PCR DNA Varicella-Zoster Virus (VZV)",
          "param": "Konfirmasi definitif materi genetik virus pada kasus atipikal atau zoster tanpa ruam (zoster sine herpete)."
        }
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
        {
          "term": "Herpes Zoster (Zona)",
          "meaning": "Reaktivasi infeksi virus cacar air yang menyerang serabut saraf dan kulit sesuai alur persarafan."
        },
        {
          "term": "Dermatoma Sensoricum",
          "meaning": "Area bidang permukaan kulit tubuh yang dipersarafi oleh satu akar serabut saraf tulang belakang tunggal."
        },
        {
          "term": "Neuralgia Post-Herpetica (PHN)",
          "meaning": "Rasa nyeri menusuk terbakar kronis yang menetap lama setelah lenting cacar ular sembuh."
        },
        {
          "term": "Allodynia",
          "meaning": "Kondisi abnormal di mana rangsangan bukan nyeri (seperti hembusan angin atau gesekan baju tipis) memicu rasa sakit menyiksa."
        },
        {
          "term": "Herpes Zoster Ophthalmicus",
          "meaning": "Komplikasi infeksi herpes yang menyerang cabang saraf mata yang dapat merusak kornea dan memicu kebutaan."
        }
      ]
    }
  }
};
