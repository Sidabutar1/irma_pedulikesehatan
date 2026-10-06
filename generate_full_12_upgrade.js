const fs = require('fs');
const vm = require('vm');

console.log('--- Step 1: Loading current clinical and anatomy data ---');
const clinicalCode = fs.readFileSync('clinical_data.js', 'utf8');
const clinicalData = vm.runInNewContext(clinicalCode + '; DEEP_CLINICAL_DATA;');
console.log('Clinical dossiers count:', Object.keys(clinicalData).length);

const svgs = require('./build_svgs_12.js');
console.log('New SVGs ready:', Object.keys(svgs));

// Load current app.js
let appJs = fs.readFileSync('app.js', 'utf8');

const start = appJs.indexOf('const ANATOMY_DATA = {');
const endComment = appJs.indexOf('// 2. SVG VECTOR ARTWORKS GENERATOR');
const endSemi = appJs.lastIndexOf('};', endComment) + 2;
const anatomySnippet = appJs.slice(start, endSemi);
const existingAnatomy = vm.runInNewContext(anatomySnippet + '\nANATOMY_DATA;');
console.log('Existing anatomy keys:', Object.keys(existingAnatomy));

// Load new systems from build_anatomy_12.js
const buildAnatomyCode = fs.readFileSync('build_anatomy_12.js', 'utf8');
const newSystems = vm.runInNewContext(buildAnatomyCode + '; NEW_SYSTEMS;', { require, console });

const FULL_ANATOMY = {
  skeletal: newSystems.skeletal,
  muscular: {
    title: "2. Otot (Muskular)",
    latinTitle: "Systema Musculare & Textus Adiposus",
    systemBadgeColor: "bg-rose-100 text-rose-800",
    organs: existingAnatomy.muscularFat.organs
  },
  cardiovascular: newSystems.cardiovascular,
  digestive: existingAnatomy.digestive,
  respiratory: existingAnatomy.respiratory,
  nervous: existingAnatomy.nervous,
  endocrine: newSystems.endocrine,
  excretory: newSystems.excretory,
  immune: newSystems.immune,
  lymphatic: newSystems.lymphatic,
  integumentary: newSystems.integumentary,
  reproductive: {
    title: "12. Sistem Reproduksi",
    latinTitle: "Systema Genitale (Pria & Wanita)",
    systemBadgeColor: "bg-purple-100 text-purple-800",
    maleOrgans: existingAnatomy.urology.maleOrgans,
    femaleOrgans: existingAnatomy.urology.femaleOrgans
  }
};

// Aliases for backwards compatibility
FULL_ANATOMY.urology = FULL_ANATOMY.reproductive;
FULL_ANATOMY.muscularFat = FULL_ANATOMY.muscular;

console.log('FULL_ANATOMY systems count:', Object.keys(FULL_ANATOMY).length);

// Verify that all diseases in FULL_ANATOMY exist in DEEP_CLINICAL_DATA
let totalDiseasesInAnatomy = 0;
const allAnatomyDiseaseIds = new Set();
for (const [sysKey, sys] of Object.entries(FULL_ANATOMY)) {
  if (sysKey === 'urology' || sysKey === 'muscularFat') continue;
  const organList = sys.organs || [...(sys.maleOrgans || []), ...(sys.femaleOrgans || [])];
  for (const organ of organList) {
    for (const dis of organ.diseases) {
      totalDiseasesInAnatomy++;
      allAnatomyDiseaseIds.add(dis.id);
      if (!clinicalData[dis.id]) {
        console.error(`MISSING DOSSIER FOR: ${dis.id} in system ${sysKey}`);
      }
    }
  }
}
console.log(`Verified ${totalDiseasesInAnatomy} total disease instances across all 12 systems (${allAnatomyDiseaseIds.size} unique IDs).`);

// Save verified FULL_ANATOMY to disk as JSON
fs.writeFileSync('generated_anatomy_12.json', JSON.stringify(FULL_ANATOMY, null, 2), 'utf8');
console.log('Saved generated_anatomy_12.json successfully.');

