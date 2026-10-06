/**
 * liver_visualizer.js - Modul Visualisasi Khusus Anatomi Hati & 4 Prosedur Selang Hepatobilier
 * =========================================================================================
 * Menyediakan visualisasi resolusi tinggi (HD) dan diagram interaktif untuk:
 * 1. Anatomi Normal Hati & Sistem Empedu
 * 2. Selang Sumbatan Saluran Empedu (PTBD / Percutaneous Transhepatic Biliary Drainage)
 * 3. Selang Penyedot Nanah Abses Hati (Pigtail Catheter for Liver Abscess)
 * 4. Selang Pengeluaran Cairan Perut / Asites Berat Sirosis Hepatis (Paracentesis)
 * 5. Selang Drainase Pasca-Bedah Hepatobilier (Jackson-Pratt / Hemovac Suction)
 */

const LIVER_PROCEDURES_DATA = {
  normal: {
    id: "normal",
    title: "Anatomi Hati Normal & Sistem Empedu Sehat",
    latinTitle: "Hepar Normale & Systema Biliare Physiologicum",
    badgeCls: "bg-emerald-100 text-emerald-800 border-emerald-300",
    summary: "Hati sehat berfungsi sebagai pabrik pengolah nutrisi, penyaring racun, dan produsen cairan empedu alami (800-1000 mL/hari) yang dialirkan ke usus untuk mencerna lemak.",
    whyNeeded: "Kondisi fisiologis normal tanpa adanya sumbatan, nanah, maupun kelebihan cairan di rongga perut.",
    tubeType: "Tidak ada selang (Saluran Empedu Alami Berkaliber 3-5 mm)",
    entrySite: "Organ berada terlindung di dalam rongga dada kanan bawah di balik tulang rusuk ke-7 hingga ke-11.",
    fluidColor: "Cairan empedu normal berwarna hijau keemasan jernih (golden-green) tanpa bau menyengat.",
    homeCareTips: [
      "Pertahankan pola makan rendah lemak jenuh dan batasi konsumsi gula pasir serta gorengan berlebih",
      "Hindari konsumsi alkohol dan hindari obat-obatan jamu tanpa izin BPOM yang membebani kerja hati",
      "Rutin berolahraga jalan kaki 30 menit per hari untuk mencegah perlemakan hati (fatty liver)"
    ],
    warningSigns: [
      "Mata atau kulit tampak menguning (ikterik)",
      "Air seni berwarna gelap pekat seperti teh dan tinja berwarna pucat seperti dempul",
      "Nyeri tumpul terus-menerus di bawah tulang rusuk kanan atas"
    ]
  },

  ptbd: {
    id: "ptbd",
    title: "1. Selang Sumbatan Empedu (PTBD - Drainase Bilier)",
    latinTitle: "Drainage Transhepatica Biliaris Percutanea (PTBD)",
    badgeCls: "bg-amber-100 text-amber-900 border-amber-300",
    summary: "Pemasangan selang kateter fleksibel dari kulit menembus jaringan hati langsung ke saluran empedu yang tersumbat agar cairan empedu tidak merembes ke darah dan meracuni tubuh.",
    whyNeeded: "Saluran empedu utama tersumbat oleh batu empedu keras (choledocholithiasis), penyempitan jaringan parut, atau tumor. Tekanan empedu di dalam hati meningkat tajam dan bilirubin tumpah ke aliran darah.",
    tubeType: "Kateter Bilier Perkutan (PTBD Catheter 8.5-10 French) dengan pengunci loop pigtail dan katup three-way stopcock.",
    entrySite: "Sela tulang rusuk kanan bawah (sela iga 8-10) menembus kulit, dipandu oleh USG dan rontgen fluoroskopi.",
    fluidColor: "Cairan empedu normal: kuning keemasan hingga hijau tua kental jernih. WASPADA jika cairan berwarna merah darah pekat segar atau keruh putih seperti susu.",
    homeCareTips: [
      "Gantung kantong drainase SELALU lebih rendah dari posisi perut/pinggang agar cairan mengalir lancar karena gaya gravitasi",
      "Kosongkan kantong saat terisi 1/2 hingga 2/3 penuh, lalu catat jumlah cairan (cc/mL) setiap 24 jam dalam buku catatan harian",
      "Jaga plester penutup di kulit tetap bersih dan kering; lapisi plastik tahan air saat mandi atas petunjuk dokter"
    ],
    warningSigns: [
      "Cairan di selang mendadak berhenti mengalir padahal kantong masih kosong (indikasi selang tersumbat endapan/tertekuk)",
      "Kulit dan mata kembali tampak menguning atau timbul rasa gatal-gatal hebat di seluruh badan",
      "Demam menggigil di atas 38°C atau nyeri hebat di perut kanan atas (tanda radang saluran empedu / kolangitis)",
      "Selang bergeser atau tercabut keluar (JANGAN PERNAH mendorong selang kembali ke dalam!)"
    ]
  },

  abses: {
    id: "abses",
    title: "2. Selang Sedot Nanah (Abses Hati / Liver Abscess)",
    latinTitle: "Drainage Abscessus Hepatis Percutanea cum Pigtail",
    badgeCls: "bg-rose-100 text-rose-900 border-rose-300",
    summary: "Pemasangan selang drainase khusus langsung ke tengah kantung nanah di jaringan hati untuk menyedot nanah keluar secara bertahap sampai rongga infeksi mengecil dan bersih.",
    whyNeeded: "Terjadi infeksi bakteri (Klebsiella) atau amuba yang merusak jaringan hati dan membentuk kantung berisi nanah (pus). Nanah ini bertekanan tinggi dan tidak bisa sembuh hanya dengan obat minum serta berisiko pecah mematikan.",
    tubeType: "Kateter Pigtail Drainase Radiologi Intervensi (Pigtail Catheter 10-14 French) dengan tali pengunci benang nilon agar tidak lepas dari kantung nanah.",
    entrySite: "Kulit dinding perut kanan atas langsung menuju rongga abses di dalam hati dengan panduan USG secara presisi.",
    fluidColor: "Cairan nanah: berwarna cokelat kemerahan (warna pasta ikan/anchovy paste pada abses amuba) atau kuning kehijauan keruh kental berbau pada abses bakteri.",
    homeCareTips: [
      "Pastikan selang tidak terlipat atau terjepit saat lansia tidur miring",
      "Dokter atau perawat mungkin menjadwalkan pembilasan selang (flushing) dengan cairan infus NaCl steril secara berkala",
      "Minum antibiotik yang diresepkan dokter sampai tuntas tanpa terputus untuk membasmi kuman tuntas"
    ],
    warningSigns: [
      "Demam tinggi mendadak menggigil kembali muncul",
      "Nyeri perut kanan sangat tajam seperti ditusuk yang menjalar ke bahu kanan",
      "Rembesan nanah atau darah banyak keluar membasahi kasa di sekitar lubang kulit penusukan",
      "Selang drainase terlepas keluar dari kulit"
    ]
  },

  asites: {
    id: "asites",
    title: "3. Selang Buang Cairan Perut (Asites Berat Sirosis Hati)",
    latinTitle: "Paracentesis Abdominalis & Drainage Ascitis Cirrhosis",
    badgeCls: "bg-amber-100 text-amber-900 border-amber-300",
    summary: "Pemasangan selang kateter di dinding perut bawah untuk mengalirkan kelebihan cairan asites yang menumpuk di rongga perut akibat pengerasan hati (sirosis).",
    whyNeeded: "Pada sirosis hati, aliran darah di vena porta terhambat (hipertensi porta) dan produksi protein albumin anjlok, menyebabkan cairan plasma merembes dan membanjiri rongga perut hingga membuncit keras dan menekan paru-paru hingga sesak napas.",
    tubeType: "Kateter Parasentesis Abdomen (Abdominal Paracentesis Catheter) terhubung ke botol vakum atau kantong drainase volume besar (2 - 5 Liter).",
    entrySite: "Dinding perut kiri atau kanan bawah (kuadran bawah lateral, sekitar 2-3 cm dari tulang panggul anterior).",
    fluidColor: "Cairan asites normal: kuning jerami jernih (clear straw-colored). WASPADA jika cairan berwarna keruh seperti susu (infeksi peritonitis) atau merah darah pekat.",
    homeCareTips: [
      "Setelah tindakan pengeluaran cairan dalam jumlah besar (>3-5 liter), dokter umumnya memberikan infus albumin pengganti untuk mencegah tekanan darah anjlok",
      "Batasi konsumsi garam dapur secara ketat (maksimal 2 gram atau 1/2 sendok teh per hari) untuk mencegah cairan cepat menumpuk kembali",
      "Timbang berat badan setiap pagi dan ukur lingkar perut dengan pita ukur untuk memantau akumulasi cairan"
    ],
    warningSigns: [
      "Tekanan darah anjlok drastis disertai pusing berkunang-kunang hebat, lemas lunglai, atau pingsan",
      "Cairan yang keluar mendadak keruh keruh berbau disertai nyeri tekan hebat di seluruh dinding perut (tanda peritonitis bakterial spontan / SBP)",
      "Lansia mendadak linglung, tidak mengenali keluarga, atau mengigau (tanda ensefalopati hepatikum)"
    ]
  },

  "pasca-operasi": {
    id: "pasca-operasi",
    title: "4. Selang Pasca-Operasi Hati & Empedu (Jackson-Pratt Drain)",
    latinTitle: "Drainage Post-Operativa Hepatobiliaris (JP Bulb Suction)",
    badgeCls: "bg-sky-100 text-sky-900 border-sky-300",
    summary: "Pemasangan selang drainase silikon sementara di ruang bawah hati untuk menyedot sisa rembesan darah, cairan luka bedah, atau rembesan empedu setelah operasi pengangkatan kantung empedu atau reseksi hati.",
    whyNeeded: "Mencegah terbentuknya kantung cairan darah (hematoma) atau tumpukan empedu (biloma) di rongga perut yang dapat menjadi sarang kuman dan memicu infeksi berat pascaoperasi.",
    tubeType: "Jackson-Pratt Drain (JP Drain) atau Hemovac: selang silikon pipih berlubang mikro terhubung ke bola penyedot vakum elastis berbentuk granat.",
    entrySite: "Satu lubang kecil terpisah di kulit perut kanan atas dekat luka sayatan operasi bedah.",
    fluidColor: "Hari 1-2: merah darah encer (serosanguineous). Hari ke-3 dan seterusnya: perlahan berubah menjadi merah muda encer lalu kuning jernih bening. Jumlah produksi cairan akan terus berkurang dari hari ke hari.",
    homeCareTips: [
      "Peras bola JP drain hingga pipih sebelum menutup tutupnya untuk menciptakan daya hisap vakum negatif yang menarik cairan keluar",
      "Sematkan kantong bola JP dengan peniti medis di pakaian atau celana lansia setinggi pinggang agar selang tidak tertarik",
      "Catat volume cairan yang dibuang setiap pagi dan sore hari (biasanya dokter akan mencabut selang jika cairan <25-30 mL/24 jam)"
    ],
    warningSigns: [
      "Cairan yang keluar mendadak berwarna hijau tua pekat dalam jumlah banyak (tanda kebocoran saluran empedu / bile leak)",
      "Darah segar merah kental mengucur cepat memenuhi bola JP dalam waktu singkat (perdarahan aktif)",
      "Demam menggigil tinggi di atas 38.5°C dengan area sekitar selang merah bengkak dan nyeri hebat"
    ]
  }
};

/**
 * Generator SVG Anatomi Hati Resolusi Tinggi dengan 5 Mode Tampilan Selang
 */
function generateLiverDetailSvg(mode = 'ptbd') {
  const isNormal = mode === 'normal';
  const isPtbd = mode === 'ptbd';
  const isAbses = mode === 'abses';
  const isAsites = mode === 'asites';
  const isPostOp = mode === 'pasca-operasi';

  return `
    <svg viewBox="0 0 500 520" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Gradients Hati -->
        <linearGradient id="hd-grad-liver-normal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b91c1c" />
          <stop offset="60%" stop-color="#991b1b" />
          <stop offset="100%" stop-color="#7f1d1d" />
        </linearGradient>

        <linearGradient id="hd-grad-liver-cirrhotic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d97706" />
          <stop offset="50%" stop-color="#b45309" />
          <stop offset="100%" stop-color="#78350f" />
        </linearGradient>

        <linearGradient id="hd-grad-gallbladder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4ade80" />
          <stop offset="60%" stop-color="#22c55e" />
          <stop offset="100%" stop-color="#15803d" />
        </linearGradient>

        <linearGradient id="hd-grad-bile-bag" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="40%" stop-color="#eab308" />
          <stop offset="100%" stop-color="#ca8a04" />
        </linearGradient>

        <linearGradient id="hd-grad-pus-bag" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fef9c3" />
          <stop offset="60%" stop-color="#fde047" />
          <stop offset="100%" stop-color="#a16207" />
        </linearGradient>

        <linearGradient id="hd-grad-ascites-fluid" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.7" />
          <stop offset="100%" stop-color="#fde68a" stop-opacity="0.9" />
        </linearGradient>

        <linearGradient id="hd-grad-jp-bulb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fecdd3" />
          <stop offset="60%" stop-color="#fda4af" />
          <stop offset="100%" stop-color="#f43f5e" />
        </linearGradient>

        <!-- Filter Glow untuk Selang Aktif -->
        <filter id="tube-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#0284c7" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Background Silhouette Torso Lembut & Dinding Perut -->
      <path d="M 50 500 C 40 380 40 240 60 140 C 70 80 120 40 180 30 L 250 30 C 310 40 360 80 370 140 C 390 240 390 380 380 500 Z" 
            fill="#f8fafc" stroke="#e2e8f0" stroke-width="2.5" opacity="0.65" />

      <!-- Garis Tulang Rusuk Kanan Pelindung Hati (Costae 7-10) Samar -->
      <g opacity="0.25" stroke="#94a3b8" stroke-width="6" stroke-linecap="round" fill="none">
        <path d="M 80 100 C 140 120 220 120 280 100" />
        <path d="M 75 140 C 140 165 240 165 300 140" />
        <path d="M 70 180 C 140 210 260 210 320 180" />
        <path d="M 70 220 C 130 250 240 250 300 220" />
      </g>

      <!-- Diafragma Kubah di Atas Hati -->
      <path d="M 70 120 Q 200 65 330 115" stroke="#fdba74" stroke-width="3" stroke-dasharray="4 3" fill="none" opacity="0.7" />
      <text x="200" y="80" font-size="9" font-weight="bold" fill="#ea580c" text-anchor="middle" opacity="0.8">Diafragma (Batas Rongga Dada & Perut)</text>

      <!-- PEMBULUH DARAH BESAR DI BELAKANG HATI -->
      <!-- Vena Kava Inferior (Biru) -->
      <rect x="250" y="70" width="22" height="230" rx="6" fill="#38bdf8" stroke="#0284c7" stroke-width="2" opacity="0.85" />
      <text x="261" y="95" font-size="8" font-weight="bold" fill="#0369a1" text-anchor="middle">V. Kava</text>

      <!-- Aorta Abdominalis (Merah) -->
      <rect x="276" y="70" width="16" height="230" rx="5" fill="#f87171" stroke="#dc2626" stroke-width="1.8" opacity="0.85" />

      <!-- Duodenum (Usus 12 Jari Tempat Muara Saluran Empedu) -->
      <path d="M 235 250 C 235 230 280 230 285 260 C 290 290 260 320 230 320 C 210 320 200 340 200 360" 
            fill="none" stroke="#fed7aa" stroke-width="18" stroke-linecap="round" />
      <path d="M 235 250 C 235 230 280 230 285 260 C 290 290 260 320 230 320 C 210 320 200 340 200 360" 
            fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" />
      <text x="310" y="275" font-size="8" font-weight="bold" fill="#c2410c">Duodenum (Usus Halus)</text>

      <!-- ORGAN HATI (HEPAR) HD -->
      ${isAsites ? `
        <!-- HATI SIROSIS (Kecil, Mengerut, Berbenjol-benjol Nodul Kasar) -->
        <g id="liver-organ-cirrhotic">
          <path d="M 125 140 C 170 135 240 140 260 160 C 270 175 250 205 230 220 C 190 230 145 225 120 205 C 105 185 110 150 125 140 Z" 
                fill="url(#hd-grad-liver-cirrhotic)" stroke="#78350f" stroke-width="3" stroke-linejoin="round" />
          <!-- Nodul-nodul Parut Kasar Sirosis -->
          <circle cx="140" cy="160" r="6" fill="#92400e" opacity="0.8" />
          <circle cx="165" cy="155" r="7" fill="#92400e" opacity="0.8" />
          <circle cx="190" cy="165" r="8" fill="#92400e" opacity="0.8" />
          <circle cx="215" cy="160" r="6" fill="#92400e" opacity="0.8" />
          <circle cx="240" cy="175" r="7" fill="#92400e" opacity="0.8" />
          <circle cx="150" cy="185" r="8" fill="#92400e" opacity="0.8" />
          <circle cx="180" cy="195" r="9" fill="#92400e" opacity="0.8" />
          <circle cx="210" cy="190" r="7" fill="#92400e" opacity="0.8" />
          <circle cx="130" cy="180" r="5" fill="#92400e" opacity="0.8" />
        </g>
      ` : `
        <!-- HATI NORMAL / BESAR HD (Lobus Kanan & Lobus Kiri) -->
        <g id="liver-organ-hd">
          <!-- Lobus Kanan & Kiri Bersatu -->
          <path d="M 100 135 C 160 120 270 125 295 155 C 310 175 290 225 240 245 C 180 260 125 255 90 220 C 75 190 80 150 100 135 Z" 
                fill="url(#hd-grad-liver-normal)" stroke="#7f1d1d" stroke-width="2.8" />
          
          <!-- Ligamentum Falciforme (Pemisah Lobus Kanan & Kiri) -->
          <path d="M 215 126 C 220 155 210 190 205 240" fill="none" stroke="#fecdd3" stroke-width="3.5" stroke-linecap="round" opacity="0.9" />
          <path d="M 215 126 C 220 155 210 190 205 240" fill="none" stroke="#e11d48" stroke-width="1.2" stroke-linecap="round" />

          <!-- Label Lobus Kanan & Kiri -->
          <text x="145" y="165" font-size="10" font-weight="extrabold" fill="#ffffff" text-anchor="middle" opacity="0.95">Lobus Kanan (80%)</text>
          <text x="255" y="160" font-size="9" font-weight="extrabold" fill="#ffffff" text-anchor="middle" opacity="0.95">Lobus Kiri</text>
        </g>
      `}

      <!-- SISTEM KANTUNG EMPEDU & SALURAN EMPEDU (BILIARY TREE) -->
      <g id="biliary-tree-hd">
        <!-- Percabangan Saluran Empedu Dalam Hati (Duktus Hepatikus Dextra & Sinistra) -->
        <path d="M 155 175 Q 185 190 205 205 M 245 175 Q 225 190 205 205" 
              fill="none" stroke="${isPtbd ? '#eab308' : '#22c55e'}" stroke-width="${isPtbd ? '5' : '3'}" stroke-linecap="round" />
        
        <!-- Duktus Hepatikus Komunis Turun -->
        <path d="M 205 205 L 205 230" fill="none" stroke="${isPtbd ? '#eab308' : '#22c55e'}" stroke-width="${isPtbd ? '5.5' : '3.5'}" />

        <!-- Kantung Empedu (Gallbladder) - Hijau Buah Pir -->
        ${!isPostOp ? `
          <g id="gallbladder-pear">
            <path d="M 175 225 C 160 230 150 255 160 275 C 170 290 190 290 195 270 C 200 250 195 230 185 225 Z" 
                  fill="url(#hd-grad-gallbladder)" stroke="#14532d" stroke-width="2" />
            <!-- Duktus Sistikus (Penghubung leher kantung empedu ke saluran utama) -->
            <path d="M 183 230 Q 195 220 205 228" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" />
            <text x="175" y="265" font-size="7.5" font-weight="bold" fill="#ffffff" text-anchor="middle">Kantung Empedu</text>
          </g>
        ` : `
          <!-- Tanda Bekas Operasi Pengangkatan Kantung Empedu (Cholecystectomy Bed) -->
          <g id="cholecystectomy-bed">
            <ellipse cx="178" cy="245" rx="18" ry="14" fill="#fee2e2" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 2" />
            <!-- Klip Jahitan Bedah Logam (Surgical Clips) -->
            <line x1="170" y1="238" x2="186" y2="238" stroke="#475569" stroke-width="2.5" />
            <line x1="168" y1="248" x2="188" y2="248" stroke="#475569" stroke-width="2.5" />
            <text x="178" y="270" font-size="7.5" font-weight="extrabold" fill="#b91c1c" text-anchor="middle">Luka Bekas Bedah</text>
          </g>
        `}

        <!-- Saluran Empedu Utama (Duktus Koledokus / Common Bile Duct) -->
        <path d="M 205 230 C 210 245 225 260 235 275" 
              fill="none" stroke="${isPtbd ? '#ca8a04' : '#15803d'}" stroke-width="${isPtbd ? '6' : '3.5'}" stroke-linecap="round" />

        <!-- BATU EMPEDU PENYUMBAT (Pada Mode PTBD) -->
        ${isPtbd ? `
          <g id="gallstone-obstruction">
            <!-- Batu Empedu Hitam Menyumbat Saluran Koledokus -->
            <circle cx="228" cy="265" r="7.5" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
            <circle cx="226" cy="263" r="2" fill="#94a3b8" />
            <!-- Efek Saluran Melebar Bengkak Karena Cairan Terbendung -->
            <path d="M 198 200 Q 205 215 198 230" stroke="#facc15" stroke-width="2" stroke-dasharray="2 2" fill="none" />
            <text x="270" y="240" font-size="8.5" font-weight="extrabold" fill="#b45309">Sumbatan Batu Empedu</text>
            <line x1="236" y1="262" x2="265" y2="244" stroke="#b45309" stroke-width="1.5" />
          </g>
        ` : ''}
      </g>

      <!-- ================================================================= -->
      <!-- OVERLAY PATOLOGI & SELANG SPESIFIK BERDASARKAN MODE -->
      <!-- ================================================================= -->

      <!-- MODE 2: SELANG DRAINASE BILIER PERKUTAN (PTBD) -->
      ${isPtbd ? `
        <g id="tube-system-ptbd">
          <!-- Penampang Kulit Perut Kanan Samping Luar -->
          <path d="M 35 150 L 35 280" stroke="#cbd5e1" stroke-width="12" stroke-linecap="round" />
          <path d="M 35 150 L 35 280" stroke="#f97316" stroke-width="3" stroke-linecap="round" />
          <text x="25" y="140" font-size="8" font-weight="bold" fill="#ea580c">Kulit Dinding Perut</text>

          <!-- Selang Kateter PTBD (Menembus Kulit -> Jaringan Hati -> Saluran Empedu Kanan) -->
          <path d="M 35 210 C 60 210 90 200 120 190 C 145 180 170 185 185 190" 
                fill="none" stroke="#0284c7" stroke-width="5" stroke-linecap="round" filter="url(#tube-glow)" />
          <path d="M 35 210 C 60 210 90 200 120 190 C 145 180 170 185 185 190" 
                fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2" />

          <!-- Lubang Multi-Perforasi di Ujung Selang (Menyerap Empedu) -->
          <circle cx="185" cy="190" r="3" fill="#0369a1" />
          <circle cx="175" cy="187" r="2" fill="#ffffff" />
          <circle cx="165" cy="185" r="2" fill="#ffffff" />
          <circle cx="155" cy="183" r="2" fill="#ffffff" />

          <!-- Bantalan Plester Fiksasi Kulit Kupu-kupu (Wing Fixation) -->
          <rect x="26" y="200" width="18" height="20" rx="3" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
          <line x1="28" y1="210" x2="42" y2="210" stroke="#0284c7" stroke-width="2" />

          <!-- Sambungan Selang Fleksibel Keluar ke Kantong Eksternal -->
          <path d="M 35 210 C 25 210 20 230 20 260 L 20 330 C 20 350 40 360 55 365" 
                fill="none" stroke="#0284c7" stroke-width="4" stroke-linecap="round" />
          
          <!-- Kran Three-Way Stopcock -->
          <rect x="15" y="275" width="10" height="10" rx="2" fill="#ffffff" stroke="#0369a1" stroke-width="1.5" />
          <line x1="12" y1="280" x2="28" y2="280" stroke="#0284c7" stroke-width="2" />
          
          <!-- Kantong Drainase Empedu Eksternal (Biliary Drainage Bag) -->
          <g transform="translate(45, 345)">
            <!-- Badan Kantong Transparan Berisi Empedu Kuning Emas -->
            <rect x="0" y="0" width="55" height="85" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
            <rect x="3" y="25" width="49" height="56" rx="5" fill="url(#hd-grad-bile-bag)" opacity="0.9" />
            
            <!-- Garis Skala Mililiter (Graduasi) -->
            <line x1="8" y1="35" x2="20" y2="35" stroke="#713f12" stroke-width="1.5" />
            <text x="24" y="37" font-size="6" font-weight="bold" fill="#713f12">300ml</text>
            <line x1="8" y1="50" x2="20" y2="50" stroke="#713f12" stroke-width="1.5" />
            <text x="24" y="52" font-size="6" font-weight="bold" fill="#713f12">200ml</text>
            <line x1="8" y1="65" x2="20" y2="65" stroke="#713f12" stroke-width="1.5" />
            <text x="24" y="67" font-size="6" font-weight="bold" fill="#713f12">100ml</text>
            
            <text x="27" y="16" font-size="7" font-weight="extrabold" fill="#0369a1" text-anchor="middle">BILE DRAIN</text>
            <!-- Kran Pembuangan Bawah -->
            <rect x="23" y="85" width="9" height="10" fill="#0284c7" rx="1.5" />
          </g>

          <!-- Label Callout PTBD -->
          <line x1="120" y1="185" x2="120" y2="105" stroke="#0284c7" stroke-width="2" />
          <rect x="40" y="85" width="160" height="22" rx="4" fill="#0284c7" />
          <text x="120" y="100" font-size="9" font-weight="extrabold" fill="#ffffff" text-anchor="middle">Selang Kateter PTBD Masuk ke Hati</text>
        </g>
      ` : ''}

      <!-- MODE 3: SELANG PENYEDOT NANAH (ABSES HATI) -->
      ${isAbses ? `
        <g id="tube-system-abses">
          <!-- Kantung Abses Nanah Besar di Lobus Kanan Hati -->
          <circle cx="150" cy="180" r="32" fill="#fef08a" stroke="#dc2626" stroke-width="3.5" />
          <circle cx="150" cy="180" r="28" fill="#ca8a04" opacity="0.6" />
          <circle cx="150" cy="180" r="20" fill="#facc15" opacity="0.75" />
          <!-- Reaksi Inflamasi Radang Sekitar Abses -->
          <circle cx="150" cy="180" r="36" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3 2" />

          <!-- Ujung Kateter Melingkar (Pigtail Curl Loop) di Dalam Kantung Nanah -->
          <path d="M 150 180 C 160 170 165 185 155 190 C 145 195 135 175 150 168" 
                fill="none" stroke="#0284c7" stroke-width="4.5" stroke-linecap="round" />
          
          <!-- Selang Keluar Menembus Hati Menuju Kulit Dinding Perut -->
          <path d="M 150 168 C 130 160 80 180 35 200" 
                fill="none" stroke="#0284c7" stroke-width="5" stroke-linecap="round" filter="url(#tube-glow)" />
          <path d="M 150 168 C 130 160 80 180 35 200" 
                fill="none" stroke="#ffffff" stroke-width="1.8" stroke-dasharray="4 2" />

          <!-- Plester Fiksasi Kulit -->
          <rect x="25" y="190" width="18" height="20" rx="3" fill="#ffffff" stroke="#0284c7" stroke-width="2" />

          <!-- Selang Lanjut ke Tabung Penampung Nanah Tertutup -->
          <path d="M 35 200 C 15 210 15 250 15 320 L 45 350" 
                fill="none" stroke="#0284c7" stroke-width="4" stroke-linecap="round" />

          <!-- Tabung / Botol Penampung Nanah Abses -->
          <g transform="translate(45, 345)">
            <rect x="0" y="0" width="55" height="85" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2" />
            <rect x="3" y="30" width="49" height="51" rx="4" fill="url(#hd-grad-pus-bag)" opacity="0.95" />
            <line x1="8" y1="45" x2="20" y2="45" stroke="#78350f" stroke-width="1.5" />
            <text x="24" y="47" font-size="6" font-weight="bold" fill="#78350f">Pus 150ml</text>
            <line x1="8" y1="60" x2="20" y2="60" stroke="#78350f" stroke-width="1.5" />
            <text x="24" y="62" font-size="6" font-weight="bold" fill="#78350f">Pus 50ml</text>
            <text x="27" y="16" font-size="7" font-weight="extrabold" fill="#b45309" text-anchor="middle">PUS DRAIN</text>
          </g>

          <!-- Label Callout Abses & Pigtail -->
          <line x1="150" y1="150" x2="150" y2="90" stroke="#dc2626" stroke-width="2" />
          <rect x="70" y="70" width="160" height="22" rx="4" fill="#dc2626" />
          <text x="150" y="85" font-size="9" font-weight="extrabold" fill="#ffffff" text-anchor="middle">Kantung Nanah (Abses Hati)</text>

          <line x1="135" y1="175" x2="20" y2="120" stroke="#0284c7" stroke-width="1.8" />
          <rect x="5" y="105" width="115" height="18" rx="3" fill="#0284c7" />
          <text x="62" y="118" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Ujung Selang Pigtail Loop</text>
        </g>
      ` : ''}

      <!-- MODE 4: SELANG PENGELUARAN CAIRAN PERUT (ASITES SIROSIS) -->
      ${isAsites ? `
        <g id="tube-system-asites">
          <!-- Rongga Perut Membuncit Berisi Genangan Cairan Asites Kuning Jerami -->
          <path d="M 60 250 C 40 320 40 400 70 450 C 130 480 270 480 330 450 C 360 400 360 320 340 250 C 310 320 200 320 60 250 Z" 
                fill="url(#hd-grad-ascites-fluid)" stroke="#f59e0b" stroke-width="2.5" />
          <text x="200" y="380" font-size="11" font-weight="extrabold" fill="#92400e" text-anchor="middle" opacity="0.85">Genangan Cairan Asites Perut (3-5 Liter)</text>

          <!-- Kateter Parasentesis Menembus Perut Bawah -->
          <path d="M 330 430 L 260 410" stroke="#0284c7" stroke-width="5" stroke-linecap="round" filter="url(#tube-glow)" />
          <path d="M 330 430 L 260 410" stroke="#ffffff" stroke-width="1.8" stroke-dasharray="3 2" />
          <circle cx="260" cy="410" r="3.5" fill="#0369a1" />

          <!-- Plester Fiksasi Kulit -->
          <rect x="325" y="420" width="16" height="18" rx="2" fill="#ffffff" stroke="#0284c7" stroke-width="1.8" />

          <!-- Selang Lanjut ke Tabung Botol Vakum Besar -->
          <path d="M 335 430 C 360 435 390 410 400 370 L 400 320" 
                fill="none" stroke="#0284c7" stroke-width="4.5" stroke-linecap="round" />

          <!-- Botol Vakum Parasentesis Volume Besar (Vacuum Paracentesis Bottle) -->
          <g transform="translate(370, 230)">
            <rect x="0" y="0" width="60" height="95" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2.5" />
            <rect x="3" y="25" width="54" height="66" rx="5" fill="#fef08a" opacity="0.9" />
            <line x1="8" y1="40" x2="22" y2="40" stroke="#92400e" stroke-width="1.5" />
            <text x="26" y="42" font-size="6.5" font-weight="bold" fill="#92400e">3000 mL</text>
            <line x1="8" y1="55" x2="22" y2="55" stroke="#92400e" stroke-width="1.5" />
            <text x="26" y="57" font-size="6.5" font-weight="bold" fill="#92400e">2000 mL</text>
            <line x1="8" y1="70" x2="22" y2="70" stroke="#92400e" stroke-width="1.5" />
            <text x="26" y="72" font-size="6.5" font-weight="bold" fill="#92400e">1000 mL</text>
            <text x="30" y="16" font-size="7" font-weight="extrabold" fill="#b45309" text-anchor="middle">ASITES VAKUM</text>
          </g>

          <!-- Label Callout Asites -->
          <line x1="280" y1="410" x2="280" y2="470" stroke="#0284c7" stroke-width="2" />
          <rect x="180" y="470" width="200" height="22" rx="4" fill="#0284c7" />
          <text x="280" y="485" font-size="9" font-weight="extrabold" fill="#ffffff" text-anchor="middle">Kateter Drainase Parasentesis Abdomen</text>
        </g>
      ` : ''}

      <!-- MODE 5: SELANG PASCA-OPERASI (JACKSON-PRATT / HEMOVAC) -->
      ${isPostOp ? `
        <g id="tube-system-postop">
          <!-- Selang Silikon Pipih Berlubang di Dasar Bawah Hati (Subhepatic Space) -->
          <path d="M 180 248 C 160 252 130 255 100 245 C 75 235 55 240 35 250" 
                fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" />
          <path d="M 180 248 C 160 252 130 255 100 245 C 75 235 55 240 35 250" 
                fill="none" stroke="#f43f5e" stroke-width="4.5" stroke-linecap="round" filter="url(#tube-glow)" />

          <!-- Lubang-lubang Serapan di Selang Silikon Pipih -->
          <circle cx="170" cy="249" r="1.5" fill="#ffffff" />
          <circle cx="155" cy="251" r="1.5" fill="#ffffff" />
          <circle cx="140" cy="252" r="1.5" fill="#ffffff" />
          <circle cx="125" cy="250" r="1.5" fill="#ffffff" />
          <circle cx="110" cy="248" r="1.5" fill="#ffffff" />

          <!-- Plester Jahitan Keluar Kulit -->
          <rect x="25" y="240" width="18" height="20" rx="3" fill="#ffffff" stroke="#f43f5e" stroke-width="2" />

          <!-- Selang Lanjut Turun ke Bola JP Vakum -->
          <path d="M 35 250 C 15 260 15 300 20 340 L 45 365" 
                fill="none" stroke="#f43f5e" stroke-width="3.5" stroke-linecap="round" />

          <!-- Bola JP Drain Silikon Elastis (Jackson-Pratt Suction Bulb) -->
          <g transform="translate(45, 345)">
            <!-- Bentuk Bola Labu JP -->
            <path d="M 25 5 L 25 15 C 10 20 0 35 0 52 C 0 72 12 85 27 85 C 42 85 54 72 54 52 C 54 35 44 20 29 15 L 29 5 Z" 
                  fill="url(#hd-grad-jp-bulb)" stroke="#be123c" stroke-width="2" />
            <!-- Tutup Plug Penutup Port -->
            <rect x="23" y="0" width="8" height="7" fill="#ffffff" stroke="#be123c" stroke-width="1.5" rx="1.5" />
            <!-- Skala Mililiter di Bola JP -->
            <line x1="14" y1="42" x2="22" y2="42" stroke="#ffffff" stroke-width="1.5" />
            <text x="26" y="44" font-size="6" font-weight="bold" fill="#ffffff">75ml</text>
            <line x1="14" y1="56" x2="22" y2="56" stroke="#ffffff" stroke-width="1.5" />
            <text x="26" y="58" font-size="6" font-weight="bold" fill="#ffffff">50ml</text>
            <line x1="14" y1="70" x2="22" y2="70" stroke="#ffffff" stroke-width="1.5" />
            <text x="26" y="72" font-size="6" font-weight="bold" fill="#ffffff">25ml</text>
            <text x="27" y="32" font-size="6.5" font-weight="extrabold" fill="#ffffff" text-anchor="middle">JP DRAIN</text>
          </g>

          <!-- Label Callout JP Drain -->
          <line x1="140" y1="252" x2="140" y2="310" stroke="#f43f5e" stroke-width="2" />
          <rect x="60" y="310" width="180" height="22" rx="4" fill="#f43f5e" />
          <text x="150" y="325" font-size="9" font-weight="extrabold" fill="#ffffff" text-anchor="middle">Selang Silikon Subhepatik (JP Drain)</text>

          <line x1="72" y1="390" x2="160" y2="390" stroke="#f43f5e" stroke-width="1.8" />
          <rect x="160" y="378" width="150" height="22" rx="4" fill="#9f1239" />
          <text x="235" y="393" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">Bola Sedot Vakum JP Bulb</text>
        </g>
      ` : ''}

      <!-- Indikator Mode Aktif Badge di Kanan Atas SVG -->
      <g transform="translate(320, 30)">
        <rect x="0" y="0" width="165" height="32" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" filter="url(#tube-glow)" />
        <circle cx="16" cy="16" r="6" fill="${isNormal ? '#10b981' : isPtbd ? '#f59e0b' : isAbses ? '#ef4444' : isAsites ? '#f97316' : '#ec4899'}" />
        <text x="30" y="20" font-size="9.5" font-weight="extrabold" fill="#1e293b">
          ${isNormal ? 'Anatomi Normal' : isPtbd ? 'Mode Selang PTBD' : isAbses ? 'Mode Selang Abses' : isAsites ? 'Mode Selang Asites' : 'Mode Selang Bedah'}
        </text>
      </g>
    </svg>
  `;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LIVER_PROCEDURES_DATA,
    generateLiverDetailSvg
  };
}

