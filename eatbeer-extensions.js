// ============================================================
// EAT BEER Pac-Man – Extensions
// Popup-System & Inhalte (DE/EN)
// Wird nach pacman.js geladen (via s.onload in index.html)
// ============================================================

// ── Globale Zustandsvariablen ────────────────────────────────
window.ebResumeCallback = null;

// ── Inhalte: Energizer-Popups (4 Stück, rotieren zyklisch) ──
var EB_ENERGIZER_POPUPS = {
  de: [
    {
      title: 'Biertreber als wertvolles Produkt',
      icon: '&#127806;',
      animFrom: '&#127806; BSG',
      animTo: '&#127859; Zutaten',
      text: 'Verwandle vorhandenen Biertreber in hochwertige Zutaten wie Proteine und Ballaststoffe für ernährungsphysiologische und funktionelle Anwendungen.'
    },
    {
      title: 'Verpackung aus Biertreber',
      icon: '&#128230;',
      animFrom: '&#127806; BSG',
      animTo: '&#9851; Biobasierte Rohstoffe',
      text: 'Konvertiere minderwertige Fasern in biobasierte Verbindungen und nachhaltige fossilfreie Anwendungen.'
    },
    {
      title: 'CO\u2082 als Ressource',
      icon: '&#127807;',
      animFrom: '&#128168; Brauerei-CO\u2082',
      animTo: '&#127807; Rohstoff',
      text: 'Erfasse, verarbeite und verwende CO\u2082 als Rohstoff, anstatt es freizusetzen.'
    },
    {
      title: 'Bierhefe als wertvolles Produkt',
      icon: '&#128300;',
      animFrom: '&#127866; BSY',
      animTo: '&#127859; Zutaten',
      text: 'Verwandle Bierhefe in hochwertige Zutaten reich an Proteinen und funktionellen Verbindungen. Kombiniere sie mit Biertreber-Derivaten für erweiterte Anwendungen.'
    }
  ],
  en: [
    {
      title: "Brewer's Spent Grain as a valuable product",
      icon: '&#127806;',
      animFrom: '&#127806; BSG',
      animTo: '&#127859; Ingredients',
      text: 'Turn the existent BSG into high-value ingredients as proteins and fibers for nutritional and functional applications.'
    },
    {
      title: 'Packaging from Spent Grain',
      icon: '&#128230;',
      animFrom: '&#127806; BSG',
      animTo: '&#9851; Biobased Raw Materials',
      text: 'Convert low-value fibers into biobased compounds and sustainable fossil-free applications.'
    },
    {
      title: 'CO\u2082 as a Resource',
      icon: '&#127807;',
      animFrom: '&#128168; Brewery CO\u2082',
      animTo: '&#127807; Raw Material',
      text: 'Capture, process and reuse CO\u2082 as a raw material instead of releasing it.'
    },
    {
      title: "Brewer's Spent Yeast as a valuable product",
      icon: '&#128300;',
      animFrom: '&#127866; BSY',
      animTo: '&#127859; Ingredients',
      text: 'Turn BSY into high-value ingredients rich in proteins and functional compounds. Combine with BSG derivatives for enhanced applications.'
    }
  ]
};

// ── Inhalte: Ghost-Danger-Popups (4 Geister) ────────────────
// Geister-IDs: 0=Blinky(rot), 1=Pinky(rosa), 2=Inky(cyan), 3=Clyde(orange)
var EB_GHOST_POPUPS = {
  de: [
    {
      name: 'ROHSTOFFVERLUST',
      icon: '&#127806;',
      challenge: 'Jedes verlorene 1\u202f% schmälert die Marge\u2026',
      title: 'Rohstoffverlust',
      text: 'Wertvolle Extrakte und Feststoffe gehen im gesamten Brauprozess verloren \u2013 vom Läutern bis zur Separation. Diese kleinen Verluste summieren sich schnell und erhöhen die Rohstoffkosten pro Hektoliter.',
      color: '#e74c3c'
    },
    {
      name: 'STEIGENDER ENERGIEVERBRAUCH',
      icon: '&#9889;',
      challenge: 'Trifft deinen Gewinn\u2026',
      title: 'Steigender Energieverbrauch',
      text: 'Brauereien verbrauchen große Mengen thermischer und elektrischer Energie. Ineffizienzen beim Heizen, Trocknen und Kühlen erhöhen unnötig die Energiekosten und senken die Margen.',
      color: '#f39c12'
    },
    {
      name: 'BETRIEBLICHE EFFIZIENZ',
      icon: '&#9881;',
      challenge: 'Begrenzt deine Kapazität\u2026',
      title: 'Betriebliche Effizienz',
      text: 'Prozesse laufen unter optimaler Leistung \u2013 verbrauchen mehr Zeit, Wasser und Kapazität als nötig. Dies führt zu Engpässen und erhöht die Betriebskosten.',
      color: '#27ae60'
    },
    {
      name: 'VERLORENER WERT',
      icon: '&#128200;',
      challenge: 'Was du Abfall nennst, könnte Umsatz sein.',
      title: 'Verlorener Wert',
      text: 'Nebenprodukte wie Biertreber und Bierhefe werden oft zu einem niedrigen Wert verkauft oder nicht vollständig genutzt. Das führt zu verpassten Chancen, zusätzliche Umsatzströme zu erschließen.',
      color: '#8e44ad'
    }
  ],
  en: [
    {
      name: 'RAW MATERIAL LOSS',
      icon: '&#127806;',
      challenge: 'Every 1\u202f% LOST is margin gone\u2026',
      title: 'Raw Material Loss',
      text: 'Valuable extract and solids are lost across the brewing process \u2014 from lautering to separation. These small losses add up fast and increase raw material cost per hectoliter.',
      color: '#e74c3c'
    },
    {
      name: 'RISING ENERGY CONSUMPTION',
      icon: '&#9889;',
      challenge: 'Hits your bottom line\u2026',
      title: 'Rising Energy Consumption',
      text: 'Breweries consume large amounts of thermal and electrical energy. Inefficiencies in heating, drying, and cooling unnecessarily increase energy costs and reduce margins.',
      color: '#f39c12'
    },
    {
      name: 'OPERATIONAL EFFICIENCY',
      icon: '&#9881;',
      challenge: 'Limits your capacity\u2026',
      title: 'Operational Efficiency',
      text: 'Processes run below optimal performance \u2014 using more time, water, and capacity than needed. This creates bottlenecks and increases operational cost.',
      color: '#27ae60'
    },
    {
      name: 'LOST VALUE',
      icon: '&#128200;',
      challenge: 'What you call WASTE could be REVENUE.',
      title: 'Lost Value',
      text: 'By-products like BSG and BSY are often sold at low value or not fully utilized. This results in missed opportunities to unlock additional revenue streams.',
      color: '#8e44ad'
    }
  ]
};

// ── Popup anzeigen: Energizer ────────────────────────────────
window.ebHookEnergizerEaten = function (energizerIdx, resumeFn) {
  var lang = window.ebLanguage || 'de';
  var popups = EB_ENERGIZER_POPUPS[lang];
  var data = popups[energizerIdx % popups.length];
  window.ebResumeCallback = resumeFn;

  document.getElementById('eb-popup-icon').innerHTML   = data.icon;
  document.getElementById('eb-popup-title').textContent = data.title;
  document.getElementById('eb-popup-text').textContent  = data.text;
  document.getElementById('eb-popup-animation').innerHTML =
    '<span>' + data.animFrom + '</span>' +
    '<span class="eb-anim-arrow">&#8594;</span>' +
    '<span class="eb-anim-target">' + data.animTo + '</span>';

  document.getElementById('eb-overlay').classList.add('active');
};

// ── Popup anzeigen: Ghost tötet Spieler ─────────────────────
window.ebHookPlayerDied = function (ghostId, resumeFn) {
  var lang = window.ebLanguage || 'de';
  var data = EB_GHOST_POPUPS[lang][ghostId] || EB_GHOST_POPUPS[lang][0];
  window.ebResumeCallback = resumeFn;

  document.getElementById('eb-popup-icon').innerHTML  = data.icon;
  document.getElementById('eb-popup-title').innerHTML =
    '<span style="color:' + data.color + '">' + data.name + '</span>';
  document.getElementById('eb-popup-text').textContent  = data.text;
  document.getElementById('eb-popup-animation').innerHTML =
    '<span style="display:inline-block;background:rgba(232,150,15,0.15);border:1px solid #e8960f;' +
    'border-radius:6px;padding:5px 14px;color:#e8960f;font-size:13px;font-style:italic;">' +
    data.challenge + '</span>';

  document.getElementById('eb-overlay').classList.add('active');
};
