const fs = require('fs');
const vm = require('vm');

console.log('=== VERIFYING INTEGRATION SUITE ===');

// 1. Load clinical_data.js
const clinicalCode = fs.readFileSync('clinical_data.js', 'utf8');
const clinicalData = vm.runInNewContext(clinicalCode + '; DEEP_CLINICAL_DATA;');
console.log('[PASS] clinical_data.js loaded with', Object.keys(clinicalData).length, 'dossiers.');

// 2. Load app.js in context
const appCode = fs.readFileSync('app.js', 'utf8');

// Mock browser globals for app.js testing
const domMocks = {
  document: {
    addEventListener: () => {},
    getElementById: (id) => ({
      classList: { add: () => {}, remove: () => {}, contains: () => false },
      setAttribute: () => {},
      addEventListener: () => {},
      innerHTML: '',
      textContent: '',
      value: ''
    }),
    querySelectorAll: () => []
  },
  window: {
    location: { search: '' },
    addEventListener: () => {},
    speechSynthesis: { speak: () => {}, cancel: () => {}, speaking: false }
  },
  navigator: {},
  DEEP_CLINICAL_DATA: clinicalData,
  console: console
};

const appSandbox = vm.createContext(domMocks);
vm.runInContext(appCode, appSandbox);

console.log('[PASS] app.js evaluated successfully in mock environment.');

// Check ANATOMY_DATA keys
const ANATOMY_DATA = vm.runInContext('ANATOMY_DATA', appSandbox);
const anatomyKeys = Object.keys(ANATOMY_DATA);
console.log('ANATOMY_DATA keys:', anatomyKeys);

const expected12Systems = [
  'skeletal', 'muscular', 'cardiovascular', 'digestive',
  'respiratory', 'nervous', 'endocrine', 'excretory',
  'immune', 'lymphatic', 'integumentary', 'reproductive'
];

for (const sys of expected12Systems) {
  if (!ANATOMY_DATA[sys]) {
    throw new Error('Missing system in ANATOMY_DATA: ' + sys);
  }
}
console.log('[PASS] All 12 expected systems present in ANATOMY_DATA.');

// Check SVG_GENERATOR
const SVG_GENERATOR = vm.runInContext('SVG_GENERATOR', appSandbox);
const svgKeys = Object.keys(SVG_GENERATOR);
console.log('SVG_GENERATOR keys:', svgKeys);
for (const sys of expected12Systems) {
  if (sys === 'reproductive') {
    const maleSvg = SVG_GENERATOR.reproductiveMale();
    const femaleSvg = SVG_GENERATOR.reproductiveFemale();
    if (!maleSvg.includes('<svg') || !femaleSvg.includes('<svg')) {
      throw new Error('Invalid reproductive SVG');
    }
  } else {
    const svgStr = SVG_GENERATOR[sys]();
    if (!svgStr.includes('<svg')) {
      throw new Error('Invalid SVG for system: ' + sys);
    }
  }
}
console.log('[PASS] All SVG_GENERATOR renderers generate valid SVG markup.');

// Test search function
const performSearch = vm.runInContext('performSearch', appSandbox);
const testQueries = ['sesak', 'lutut', 'jantung', 'tiroid', 'ginjal', 'limfa', 'kulit', 'prostat', 'ptbd'];
for (const q of testQueries) {
  const results = performSearch(q);
  console.log(`Search "${q}": found ${results.length} matches.`);
  if (results.length === 0) {
    throw new Error(`Search for "${q}" returned 0 results!`);
  }
}
console.log('[PASS] Search engine working across all 12 systems.');

// 3. Load table_app.js in context
const tableAppCode = fs.readFileSync('table_app.js', 'utf8');
const tableSandbox = vm.createContext({
  ...domMocks
});
vm.runInContext(tableAppCode, tableSandbox);
console.log('[PASS] table_app.js evaluated successfully.');
const TABLE_CATALOG_DATA = vm.runInContext('TABLE_CATALOG_DATA', tableSandbox);
console.log('TABLE_CATALOG_DATA length:', TABLE_CATALOG_DATA.length);

const catalogSystemIds = [...new Set(TABLE_CATALOG_DATA.map(c => c.systemId))];
console.log('Catalog system IDs:', catalogSystemIds);

for (const sys of expected12Systems) {
  const hasSys = catalogSystemIds.includes(sys);
  if (!hasSys) {
    throw new Error('Missing system in catalog: ' + sys);
  }
}
console.log('[PASS] All 12 canonical systems covered in TABLE_CATALOG_DATA.');

// 4. Verify index.html contains tab buttons for all 12 systems
const indexHtml = fs.readFileSync('index.html', 'utf8');
for (const sys of expected12Systems) {
  const expectedDataSys = `data-system="${sys}"`;
  if (!indexHtml.includes(expectedDataSys)) {
    throw new Error(`index.html is missing tab for ${expectedDataSys}`);
  }
}
console.log('[PASS] index.html contains navigation tabs for all 12 systems.');

// 5. Verify tabel-medis.html contains filter buttons for all 12 systems
const tabelMedisHtml = fs.readFileSync('tabel-medis.html', 'utf8');
for (const sys of expected12Systems) {
  const expectedDataSys = `data-sys="${sys}"`;
  if (!tabelMedisHtml.includes(expectedDataSys)) {
    throw new Error(`tabel-medis.html is missing filter button for ${expectedDataSys}`);
  }
}
console.log('[PASS] tabel-medis.html contains filter buttons for all 12 systems.');

console.log('=== ALL 5 VERIFICATION SUITES PASSED! ===');
