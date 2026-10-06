const fs = require('fs');
const vm = require('vm');

console.log('=== STARTING COMPLETE 12 SYSTEMS INTEGRATION ===');

// 1. Load FULL_ANATOMY
const FULL_ANATOMY = JSON.parse(fs.readFileSync('generated_anatomy_12.json', 'utf8'));
console.log('Loaded FULL_ANATOMY systems:', Object.keys(FULL_ANATOMY).length);

// 2. Load SVGs
const svgs = require('./build_svgs_12.js');
console.log('Loaded new SVGs:', Object.keys(svgs));

// 3. Load catalog
const CATALOG = JSON.parse(fs.readFileSync('generated_table_catalog_12.json', 'utf8'));
console.log('Loaded TABLE_CATALOG_DATA entries:', CATALOG.length);

// ----------------------------------------------------------------------------
// A. UPDATE APP.JS
// ----------------------------------------------------------------------------
let appJs = fs.readFileSync('app.js', 'utf8');

// 1. Replace ANATOMY_DATA
const anatomyDataStr = 'const ANATOMY_DATA = ' + JSON.stringify(FULL_ANATOMY, null, 2) + ';\n';
const anatomyStart = appJs.indexOf('const ANATOMY_DATA = {');
const anatomyEndComment = appJs.indexOf('// 2. SVG VECTOR ARTWORKS GENERATOR');
const anatomyEndSemi = appJs.lastIndexOf('};', anatomyEndComment) + 2;

appJs = appJs.slice(0, anatomyStart) + anatomyDataStr + '\n' + appJs.slice(anatomyEndComment);
console.log('1. Replaced ANATOMY_DATA in app.js');

// 2. Add new SVGs to SVG_GENERATOR
// Let's inspect where SVG_GENERATOR begins and ends
const svgGenStart = appJs.indexOf('const SVG_GENERATOR = {');
const svgGenEndComment = appJs.indexOf('// ============================================================================', svgGenStart);
const svgGenEndSemi = appJs.lastIndexOf('};', svgGenEndComment) + 2;

// We will inject the new methods into SVG_GENERATOR
const newSvgMethods = `
  // 1. Rangka (Kerangka) SVG
  skeletal: () => \`${svgs.skeletal.trim()}\`,

  // 3. Peredaran Darah (Kardiovaskular) SVG
  cardiovascular: () => \`${svgs.cardiovascular.trim()}\`,

  // 7. Sistem Endokrin SVG
  endocrine: () => \`${svgs.endocrine.trim()}\`,

  // 8. Ekskresi / Urinaria SVG
  excretory: () => \`${svgs.excretory.trim()}\`,

  // 9. Sistem Kekebalan (Imun) SVG
  immune: () => \`${svgs.immune.trim()}\`,

  // 10. Sistem Limfatik SVG
  lymphatic: () => \`${svgs.lymphatic.trim()}\`,

  // 11. Sistem Integumen (Kulit & Kuku) SVG
  integumentary: () => \`${svgs.integumentary.trim()}\`,

  // Alias & Reproduksi
  muscular: () => SVG_GENERATOR.muscularFat(),
  reproductiveMale: () => SVG_GENERATOR.urologyMale(),
  reproductiveFemale: () => SVG_GENERATOR.urologyFemale(),
`;

// Insert before the closing `};` of SVG_GENERATOR
const svgGenClosing = appJs.lastIndexOf('};', svgGenEndComment);
appJs = appJs.slice(0, svgGenClosing) + newSvgMethods + '\n' + appJs.slice(svgGenClosing);
console.log('2. Injected 12 SVGs into SVG_GENERATOR in app.js');

// 3. Update getDefaultOrganForSystem
const oldGetDefaultOrgan = appJs.slice(appJs.indexOf('function getDefaultOrganForSystem'), appJs.indexOf('function getOrgansListForActiveSystem'));
const newGetDefaultOrgan = `function getDefaultOrganForSystem(systemId, gender = 'male') {
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

`;
appJs = appJs.replace(oldGetDefaultOrgan, newGetDefaultOrgan);
console.log('3. Updated getDefaultOrganForSystem in app.js');

// 4. Update getOrgansListForActiveSystem
const oldGetOrgansList = appJs.slice(appJs.indexOf('function getOrgansListForActiveSystem()'), appJs.indexOf('// ============================================================================', appJs.indexOf('function getOrgansListForActiveSystem()')));
const newGetOrgansList = `function getOrgansListForActiveSystem() {
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

`;
appJs = appJs.replace(oldGetOrgansList, newGetOrgansList);
console.log('4. Updated getOrgansListForActiveSystem in app.js');

// 5. Update loadSystem
const oldLoadSystemStart = appJs.indexOf('function loadSystem(systemId, organIdToSelect, diseaseIdToSelect) {');
const oldLoadSystemEnd = appJs.indexOf('// ============================================================================', oldLoadSystemStart);
const oldLoadSystemCode = appJs.slice(oldLoadSystemStart, oldLoadSystemEnd);

const newLoadSystemCode = `function loadSystem(systemId, organIdToSelect, diseaseIdToSelect) {
  // Normalisasi id backward compatibility
  if (systemId === 'urology') systemId = 'reproductive';
  if (systemId === 'muscularFat') systemId = 'muscular';
  AppState.currentSystem = systemId;
  
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

`;
appJs = appJs.replace(oldLoadSystemCode, newLoadSystemCode);
console.log('5. Updated loadSystem in app.js');

// 6. Update findOrganById
const oldFindOrgan = appJs.slice(appJs.indexOf('function findOrganById(organId) {'), appJs.indexOf('// ============================================================================', appJs.indexOf('function findOrganById(organId) {')));
const newFindOrgan = `function findOrganById(organId) {
  for (const [key, sys] of Object.entries(ANATOMY_DATA)) {
    if (key === 'urology' || key === 'muscularFat') continue;
    const list = sys.organs || [...(sys.maleOrgans || []), ...(sys.femaleOrgans || [])];
    const found = list.find(o => o.id === organId);
    if (found) return found;
  }
  return null;
}

`;
appJs = appJs.replace(oldFindOrgan, newFindOrgan);
console.log('6. Updated findOrganById in app.js');

// 7. Update getSystemLabel
const oldGetSystemLabel = appJs.slice(appJs.indexOf('function getSystemLabel(systemId, gender) {'), appJs.indexOf('function renderSearchResults'));
const newGetSystemLabel = `function getSystemLabel(systemId, gender) {
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

`;
appJs = appJs.replace(oldGetSystemLabel, newGetSystemLabel);
console.log('7. Updated getSystemLabel in app.js');

// 8. Update performSearch
const oldPerformSearchStart = appJs.indexOf('function performSearch(query) {');
const oldPerformSearchEnd = appJs.indexOf('function findMatchingSnippet', oldPerformSearchStart);
const oldPerformSearch = appJs.slice(oldPerformSearchStart, oldPerformSearchEnd);

const newPerformSearch = `function performSearch(query) {
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

`;
appJs = appJs.replace(oldPerformSearch, newPerformSearch);
console.log('8. Updated performSearch in app.js');

// 9. Update initGenderSwitcher in app.js
const oldInitGenderSwitcher = appJs.slice(appJs.indexOf('function initGenderSwitcher() {'), appJs.indexOf('function getDefaultOrganForSystem'));
const newInitGenderSwitcher = `function initGenderSwitcher() {
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

`;
appJs = appJs.replace(oldInitGenderSwitcher, newInitGenderSwitcher);
console.log('9. Updated initGenderSwitcher in app.js');

// Save updated app.js
fs.writeFileSync('app.js', appJs, 'utf8');
console.log('Successfully saved app.js');


// ----------------------------------------------------------------------------
// B. UPDATE TABLE_APP.JS
// ----------------------------------------------------------------------------
let tableAppJs = fs.readFileSync('table_app.js', 'utf8');

// Replace TABLE_CATALOG_DATA
const catalogStart = tableAppJs.indexOf('const TABLE_CATALOG_DATA = [');
const catalogEnd = tableAppJs.indexOf('// ============================================================================', catalogStart);
const catalogEndSemi = tableAppJs.lastIndexOf('];', catalogEnd) + 2;

const newCatalogCode = 'const TABLE_CATALOG_DATA = ' + JSON.stringify(CATALOG, null, 2) + ';\n\n';
tableAppJs = tableAppJs.slice(0, catalogStart) + newCatalogCode + tableAppJs.slice(catalogEnd);

// Update filter matching in renderMasterTable
const oldFilterSysBlock = `    // 1. Filter System
    if (TableState.currentSystemFilter !== 'all') {
      if (item.systemId !== TableState.currentSystemFilter) return false;
    }`;

const newFilterSysBlock = `    // 1. Filter System (12 Sistem Tubuh)
    if (TableState.currentSystemFilter !== 'all') {
      const curSys = TableState.currentSystemFilter;
      if (curSys === 'reproductive') {
        if (item.systemId !== 'reproductive' && item.systemId !== 'urology-male' && item.systemId !== 'urology-female') return false;
      } else if (curSys === 'muscular') {
        if (item.systemId !== 'muscular' && item.systemId !== 'muscularFat') return false;
      } else {
        if (item.systemId !== curSys) return false;
      }
    }`;

tableAppJs = tableAppJs.replace(oldFilterSysBlock, newFilterSysBlock);

fs.writeFileSync('table_app.js', tableAppJs, 'utf8');
console.log('Successfully saved table_app.js');


// ----------------------------------------------------------------------------
// C. UPDATE INDEX.HTML (System Navigation Tabs)
// ----------------------------------------------------------------------------
let indexHtml = fs.readFileSync('index.html', 'utf8');

const oldTablistStart = indexHtml.indexOf('<div class="flex items-center gap-1.5 p-1 bg-white rounded-xl shadow-xs border border-slate-200 overflow-x-auto" role="tablist">');
const oldTablistEnd = indexHtml.indexOf('</div>', oldTablistStart) + 6;

const newTablistHtml = `<div class="flex items-center gap-1.5 p-1 bg-white rounded-xl shadow-xs border border-slate-200 overflow-x-auto touch-pan-x" role="tablist">
        <button 
          id="tab-skeletal" 
          role="tab" 
          aria-selected="true" 
          class="sys-tab-btn active flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-sm font-bold text-slate-700 transition flex-shrink-0"
          data-system="skeletal"
        >
          <span class="w-6 h-6 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center text-xs">
            <i class="fa-solid fa-bone"></i>
          </span>
          <span>1. Rangka</span>
        </button>

        <button 
          id="tab-muscular" 
          role="tab" 
          aria-selected="false" 
          class="sys-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-sm font-bold text-slate-700 transition flex-shrink-0"
          data-system="muscular"
        >
          <span class="w-6 h-6 rounded-md bg-rose-100 text-rose-700 flex items-center justify-center text-xs">
            <i class="fa-solid fa-person-walking"></i>
          </span>
          <span>2. Otot</span>
        </button>

        <button 
          id="tab-cardiovascular" 
          role="tab" 
          aria-selected="false" 
          class="sys-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-sm font-bold text-slate-700 transition flex-shrink-0"
          data-system="cardiovascular"
        >
          <span class="w-6 h-6 rounded-md bg-red-100 text-red-700 flex items-center justify-center text-xs">
            <i class="fa-solid fa-heart-pulse"></i>
          </span>
          <span>3. Peredaran Darah</span>
        </button>

        <button 
          id="tab-digestive" 
          role="tab" 
          aria-selected="false" 
          class="sys-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-sm font-bold text-slate-700 transition flex-shrink-0"
          data-system="digestive"
        >
          <span class="w-6 h-6 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center text-xs">
            <i class="fa-solid fa-utensils"></i>
          </span>
          <span>4. Pencernaan</span>
        </button>

        <button 
          id="tab-respiratory" 
          role="tab" 
          aria-selected="false" 
          class="sys-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-sm font-bold text-slate-700 transition flex-shrink-0"
          data-system="respiratory"
        >
          <span class="w-6 h-6 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center text-xs">
            <i class="fa-solid fa-lungs"></i>
          </span>
          <span>5. Pernapasan</span>
        </button>

        <button 
          id="tab-nervous" 
          role="tab" 
          aria-selected="false" 
          class="sys-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-sm font-bold text-slate-700 transition flex-shrink-0"
          data-system="nervous"
        >
          <span class="w-6 h-6 rounded-md bg-violet-100 text-violet-700 flex items-center justify-center text-xs">
            <i class="fa-solid fa-brain"></i>
          </span>
          <span>6. Saraf</span>
        </button>

        <button 
          id="tab-endocrine" 
          role="tab" 
          aria-selected="false" 
          class="sys-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-sm font-bold text-slate-700 transition flex-shrink-0"
          data-system="endocrine"
        >
          <span class="w-6 h-6 rounded-md bg-teal-100 text-teal-700 flex items-center justify-center text-xs">
            <i class="fa-solid fa-dna"></i>
          </span>
          <span>7. Endokrin</span>
        </button>

        <button 
          id="tab-excretory" 
          role="tab" 
          aria-selected="false" 
          class="sys-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-sm font-bold text-slate-700 transition flex-shrink-0"
          data-system="excretory"
        >
          <span class="w-6 h-6 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center text-xs">
            <i class="fa-solid fa-faucet-drip"></i>
          </span>
          <span>8. Ekskresi / Urinaria</span>
        </button>

        <button 
          id="tab-immune" 
          role="tab" 
          aria-selected="false" 
          class="sys-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-sm font-bold text-slate-700 transition flex-shrink-0"
          data-system="immune"
        >
          <span class="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">
            <i class="fa-solid fa-shield-halved"></i>
          </span>
          <span>9. Imun</span>
        </button>

        <button 
          id="tab-lymphatic" 
          role="tab" 
          aria-selected="false" 
          class="sys-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-sm font-bold text-slate-700 transition flex-shrink-0"
          data-system="lymphatic"
        >
          <span class="w-6 h-6 rounded-md bg-lime-100 text-lime-700 flex items-center justify-center text-xs">
            <i class="fa-solid fa-network-wired"></i>
          </span>
          <span>10. Limfatik</span>
        </button>

        <button 
          id="tab-integumentary" 
          role="tab" 
          aria-selected="false" 
          class="sys-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-sm font-bold text-slate-700 transition flex-shrink-0"
          data-system="integumentary"
        >
          <span class="w-6 h-6 rounded-md bg-orange-100 text-orange-700 flex items-center justify-center text-xs">
            <i class="fa-solid fa-hand-dots"></i>
          </span>
          <span>11. Integumen</span>
        </button>

        <button 
          id="tab-reproductive" 
          role="tab" 
          aria-selected="false" 
          class="sys-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-sm font-bold text-slate-700 transition flex-shrink-0"
          data-system="reproductive"
        >
          <span class="w-6 h-6 rounded-md bg-purple-100 text-purple-700 flex items-center justify-center text-xs">
            <i class="fa-solid fa-venus-mars"></i>
          </span>
          <span>12. Reproduksi</span>
        </button>
      </div>`;

indexHtml = indexHtml.slice(0, oldTablistStart) + newTablistHtml + indexHtml.slice(oldTablistEnd);
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Successfully saved index.html');


// ----------------------------------------------------------------------------
// D. UPDATE TABEL-MEDIS.HTML (System Filter Buttons)
// ----------------------------------------------------------------------------
let tabelMedisHtml = fs.readFileSync('tabel-medis.html', 'utf8');

const oldSysFiltersStart = tabelMedisHtml.indexOf('<div class="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0" id="table-system-filters">');
const oldSysFiltersEnd = tabelMedisHtml.indexOf('</div>', oldSysFiltersStart) + 6;

const newSysFiltersHtml = `<div class="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 touch-pan-x" id="table-system-filters">
        <button class="table-sys-filter-btn active" data-sys="all">
          <i class="fa-solid fa-border-all mr-1.5"></i>Semua Sistem
        </button>
        <button class="table-sys-filter-btn" data-sys="skeletal">
          <i class="fa-solid fa-bone mr-1.5 text-slate-600"></i>1. Rangka
        </button>
        <button class="table-sys-filter-btn" data-sys="muscular">
          <i class="fa-solid fa-person-walking mr-1.5 text-rose-600"></i>2. Otot
        </button>
        <button class="table-sys-filter-btn" data-sys="cardiovascular">
          <i class="fa-solid fa-heart-pulse mr-1.5 text-red-600"></i>3. Peredaran Darah
        </button>
        <button class="table-sys-filter-btn" data-sys="digestive">
          <i class="fa-solid fa-utensils mr-1.5 text-amber-600"></i>4. Pencernaan
        </button>
        <button class="table-sys-filter-btn" data-sys="respiratory">
          <i class="fa-solid fa-lungs mr-1.5 text-sky-600"></i>5. Pernapasan
        </button>
        <button class="table-sys-filter-btn" data-sys="nervous">
          <i class="fa-solid fa-brain mr-1.5 text-violet-600"></i>6. Saraf
        </button>
        <button class="table-sys-filter-btn" data-sys="endocrine">
          <i class="fa-solid fa-dna mr-1.5 text-teal-600"></i>7. Endokrin
        </button>
        <button class="table-sys-filter-btn" data-sys="excretory">
          <i class="fa-solid fa-faucet-drip mr-1.5 text-blue-600"></i>8. Ekskresi
        </button>
        <button class="table-sys-filter-btn" data-sys="immune">
          <i class="fa-solid fa-shield-halved mr-1.5 text-emerald-600"></i>9. Imun
        </button>
        <button class="table-sys-filter-btn" data-sys="lymphatic">
          <i class="fa-solid fa-network-wired mr-1.5 text-lime-600"></i>10. Limfatik
        </button>
        <button class="table-sys-filter-btn" data-sys="integumentary">
          <i class="fa-solid fa-hand-dots mr-1.5 text-orange-600"></i>11. Integumen
        </button>
        <button class="table-sys-filter-btn" data-sys="reproductive">
          <i class="fa-solid fa-venus-mars mr-1.5 text-purple-600"></i>12. Reproduksi
        </button>
      </div>`;

tabelMedisHtml = tabelMedisHtml.slice(0, oldSysFiltersStart) + newSysFiltersHtml + tabelMedisHtml.slice(oldSysFiltersEnd);
fs.writeFileSync('tabel-medis.html', tabelMedisHtml, 'utf8');
console.log('Successfully saved tabel-medis.html');


// ----------------------------------------------------------------------------
// E. UPDATE STYLES.CSS (Organ Glow & Badges)
// ----------------------------------------------------------------------------
let stylesCss = fs.readFileSync('styles.css', 'utf8');

const newGlowStyles = `
/* Hover Glow Effect untuk 12 Sistem Anatomi Lengkap */
#svg-stage .organ-interactive[data-organ-id="tulang-leher"]:hover,
#svg-stage .organ-interactive[data-organ-id="tulang-punggung"]:hover,
#svg-stage .organ-interactive[data-organ-id="tulang-panggul"]:hover,
#svg-stage .organ-interactive[data-organ-id="tulang-sendi-lutut"]:hover,
#svg-stage .organ-interactive[data-organ-id="sendi-ekstremitas"]:hover {
  filter: drop-shadow(0 0 12px rgba(100, 116, 139, 0.85)) brightness(1.18);
}

#svg-stage .organ-interactive[data-organ-id="jantung-koroner"]:hover,
#svg-stage .organ-interactive[data-organ-id="ventrikel-jantung"]:hover,
#svg-stage .organ-interactive[data-organ-id="sistem-konduksi-jantung"]:hover,
#svg-stage .organ-interactive[data-organ-id="pembuluh-arteri"]:hover,
#svg-stage .organ-interactive[data-organ-id="pembuluh-vena"]:hover {
  filter: drop-shadow(0 0 12px rgba(220, 38, 38, 0.85)) brightness(1.18);
}

#svg-stage .organ-interactive[data-organ-id="kelenjar-tiroid"]:hover,
#svg-stage .organ-interactive[data-organ-id="kelenjar-adrenal"]:hover,
#svg-stage .organ-interactive[data-organ-id="kelenjar-pankreas-endokrin"]:hover {
  filter: drop-shadow(0 0 12px rgba(13, 148, 136, 0.85)) brightness(1.18);
}

#svg-stage .organ-interactive[data-organ-id="ginjal"]:hover,
#svg-stage .organ-interactive[data-organ-id="ureter"]:hover,
#svg-stage .organ-interactive[data-organ-id="kandung-kemih"]:hover,
#svg-stage .organ-interactive[data-organ-id="saluran-kemih-bawah"]:hover {
  filter: drop-shadow(0 0 12px rgba(37, 99, 235, 0.85)) brightness(1.18);
}

#svg-stage .organ-interactive[data-organ-id="sumsum-tulang-imun"]:hover,
#svg-stage .organ-interactive[data-organ-id="sistem-imun-penghubung"]:hover {
  filter: drop-shadow(0 0 12px rgba(16, 185, 129, 0.85)) brightness(1.18);
}

#svg-stage .organ-interactive[data-organ-id="kelenjar-getah-bening"]:hover,
#svg-stage .organ-interactive[data-organ-id="pembuluh-limfa"]:hover {
  filter: drop-shadow(0 0 12px rgba(132, 204, 22, 0.85)) brightness(1.18);
}

#svg-stage .organ-interactive[data-organ-id="kulit-epidermis-dermis"]:hover,
#svg-stage .organ-interactive[data-organ-id="folikel-dan-kuku"]:hover {
  filter: drop-shadow(0 0 12px rgba(249, 115, 22, 0.85)) brightness(1.18);
}
`;

if (!stylesCss.includes('tulang-leher')) {
  stylesCss += '\n' + newGlowStyles;
  fs.writeFileSync('styles.css', stylesCss, 'utf8');
  console.log('Successfully updated styles.css with 12 systems glow rules');
}

console.log('=== COMPLETE 12 SYSTEMS INTEGRATION FINISHED SUCCESSFULLY ===');

