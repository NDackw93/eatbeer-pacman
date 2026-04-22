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
      animFrom: '&#127806; Biertreber',
      animTo: '&#129514; Zutaten',
      text: 'Verwandle vorhandenen Biertreber in hochwertige Zutaten wie Proteine und Ballaststoffe für ernährungsphysiologische und funktionelle Anwendungen.'
    },
    {
      title: 'Verpackung aus Biertreber',
      icon: '&#128230;',
      animFrom: '&#127806; Biertreber',
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
      animFrom: '&#127866; Bierhefe',
      animTo: '&#129514; Zutaten',
      text: 'Verwandle Bierhefe in hochwertige Zutaten reich an Proteinen und funktionellen Verbindungen. Kombiniere sie mit Biertreber-Derivaten für erweiterte Anwendungen.'
    }
  ],
  en: [
    {
      title: "Brewer's Spent Grain as a valuable product",
      icon: '&#127806;',
      animFrom: '&#127806; BSG',
      animTo: '&#129514; Ingredients',
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
      animTo: '&#129514; Ingredients',
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
      name: 'ENERGIEVERSCHWENDUNG',
      icon: '&#9889;',
      challenge: 'Trifft deinen Gewinn\u2026',
      title: 'Energieverschwendung',
      text: 'Brauereien verbrauchen große Mengen thermischer und elektrischer Energie. Ineffizienzen beim Heizen, Trocknen und Kühlen erhöhen unnötig die Energiekosten und senken die Margen.',
      color: '#f39c12'
    },
    {
      name: 'PROZESSVERLUSTE',
      icon: '&#128465;',
      challenge: 'Begrenzen deine Kapazität\u2026',
      title: 'Prozessverluste',
      text: 'Überschüssiges Wasser, Wärme und Rohstoffe gehen im gesamten Brauprozess verloren \u2013 vom Maischen bis zur Abfüllung. Diese Verluste senken die Ausbeute und erhöhen die Kosten pro Charge.',
      color: '#27ae60'
    },
    {
      name: 'VERLORENER WERT',
      icon: '&#128201;',
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
      name: 'ENERGY BURN',
      icon: '&#9889;',
      challenge: 'Hits your bottom line\u2026',
      title: 'Energy Burn',
      text: 'Breweries consume large amounts of thermal and electrical energy. Inefficiencies in heating, drying, and cooling unnecessarily increase energy costs and reduce margins.',
      color: '#f39c12'
    },
    {
      name: 'PROCESS WASTE',
      icon: '&#128465;',
      challenge: 'Limits your capacity\u2026',
      title: 'Process Waste',
      text: 'Excess water, heat, and raw materials are wasted throughout the brewing process \u2014 from mashing to packaging. These losses reduce output and increase cost per batch.',
      color: '#27ae60'
    },
    {
      name: 'LOST VALUE',
      icon: '&#128201;',
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

// ── Inhalte: Game-Over-Popup ─────────────────────────────────
var EB_GAMEOVER_POPUP = {
  de: {
    icon: '&#128128;',
    title: 'Game Over!',
    text: 'Keine Sorge! Wir sind hier um zu helfen! Kontaktiere uns: support@eatbeer.com',
    btn: 'Neustart &#8594;'
  },
  en: {
    icon: '&#128128;',
    title: 'Game Over!',
    text: "Game over? Don't worry! We are here to help! Contact us: support@eatbeer.com",
    btn: 'Restart &#8594;'
  }
};

// ── Game Over Hook ────────────────────────────────────────────
google.pacManQuery = function () {
  var lang = window.ebLanguage || 'de';
  var data = EB_GAMEOVER_POPUP[lang];

  document.getElementById('eb-popup-icon').innerHTML   = data.icon;
  document.getElementById('eb-popup-title').textContent = data.title;
  document.getElementById('eb-popup-text').textContent  = data.text;
  document.getElementById('eb-popup-animation').innerHTML = '';
  document.getElementById('eb-popup-btn').innerHTML = data.btn;

  window.ebResumeCallback = function () {
    var l = window.ebLanguage || 'de';
    document.getElementById('eb-popup-btn').innerHTML = l === 'de' ? 'Weiter &#8594;' : 'Continue &#8594;';
    google.pacman.insertCoin();
  };

  document.getElementById('eb-overlay').classList.add('active');
};

// ── On-Screen D-Pad (Tablet) ─────────────────────────────────
function ebInitDpad() {
  var dpad = document.getElementById('eb-dpad');
  if (!dpad) return;

  var keys = {
    'eb-dpad-up':    38,
    'eb-dpad-down':  40,
    'eb-dpad-left':  37,
    'eb-dpad-right': 39
  };

  Object.keys(keys).forEach(function (id) {
    var btn = document.getElementById(id);
    if (!btn) return;
    var kc = keys[id];
    // iOS Safari setzt keyCode bei KeyboardEvent-Konstruktor auf 0 (WebKit-Bug).
    // Workaround: plain Event + Object.defineProperty erzwingt den richtigen Wert.
    btn.addEventListener('touchstart', function (e) {
      e.preventDefault();
      var evt = new Event('keydown', { bubbles: true, cancelable: true });
      Object.defineProperty(evt, 'keyCode', { get: function () { return kc; } });
      Object.defineProperty(evt, 'which',   { get: function () { return kc; } });
      document.dispatchEvent(evt);
    }, { passive: false });
  });
}

ebInitDpad();

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
