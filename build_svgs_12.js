/**
 * build_svgs_12.js - Generator SVG untuk seluruh 12 sistem anatomi
 */

const SVGS = {
  // 1. RANGKA (KERANGKA)
  skeletal: `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>
  `,

  // 3. PEREDARAN DARAH (KARDIOVASKULAR)
  cardiovascular: `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>
  `,

  // 7. SISTEM ENDOKRIN
  endocrine: `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>
  `,

  // 8. EKSKRESI / URINARIA
  excretory: `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>
  `,

  // 9. SISTEM KEKEBALAN (IMUN)
  immune: `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>
  `,

  // 10. SISTEM LIMFATIK
  lymphatic: `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>
  `,

  // 11. SISTEM INTEGUMEN (KULIT & KUKU)
  integumentary: `
    <svg viewBox="0 0 440 540" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>
  `
};

console.log('SVG keys ready:', Object.keys(SVGS));
module.exports = SVGS;

