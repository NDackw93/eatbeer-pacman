// ============================================================
// EAT BEER Pac-Man – Extensions
// Popup-System & Inhalte (DE/EN)
// Wird nach pacman.js geladen (via s.onload in index.html)
// ============================================================

// ── Globale Zustandsvariablen ────────────────────────────────
window.ebResumeCallback = null;

// ── Inhalte: Energizer-Popups (5 Stück, rotieren zyklisch) ──
var EB_ENERGIZER_POPUPS = {
  de: [
    {
      title: 'Biertreber trifft Pilzmyzel',
      icon: '&#127806;',
      animFrom: '&#127806; Biertreber',
      animTo: '&#129344; Protein-Biomasse',
      text: 'Durch gezielte Fermentation von Biertreber mit Pilzmyzel entstehen hochwertige vegane Proteine und Biomasse. EAT BEER verwandelt diesen Nebenstrom der Brauerei in einen wertvollen Rohstoff für nachhaltige Lebensmittel – statt ihn als Abfall zu entsorgen.'
    },
    {
      title: 'CO\u2082 als Ressource',
      icon: '&#127807;',
      animFrom: '&#128168; Brauerei-CO\u2082',
      animTo: '&#127807; Rohstoff',
      text: 'Bei der alkoholischen Gärung entstehen große Mengen CO\u2082. Anstatt dieses Treibhausgas in die Atmosphäre abzugeben, kann es gezielt aufgefangen und für Lebensmittel, Getränke oder Algenkultur genutzt werden – ein echter Kreislaufbeitrag.'
    },
    {
      title: 'Bierhefe als Superfood',
      icon: '&#128300;',
      animFrom: '&#127866; Heferückstand',
      animTo: '&#128138; N\u00e4hrstoffextrakt',
      text: 'Bierhefe enthält wertvolle B-Vitamine, Mineralstoffe und alle essenziellen Aminosäuren. EAT BEER erforscht, wie der Hefeüberschuss aus Brauereien zu hochwertigen Nahrungsergänzungsmitteln oder natürlichen Lebensmittelzutaten verarbeitet werden kann.'
    },
    {
      title: 'Verpackungen aus Treber',
      icon: '&#128230;',
      animFrom: '&#127806; Treber-Fasern',
      animTo: '&#9851; Biopackaging',
      text: 'Die Zellulosefasern im Biertreber eignen sich hervorragend für kompostierbare Verpackungsmaterialien. EAT BEER schließt damit den Kreislauf: vom Getreide über Bier bis zur nachhaltigen Verpackung – ohne fossile Rohstoffe.'
    },
    {
      title: 'Abwärme effizient nutzen',
      icon: '&#128293;',
      animFrom: '&#127777; Prozessw\u00e4rme',
      animTo: '&#9889; Nutzenergie',
      text: 'Sudanlagen erzeugen erhebliche Abwärme. Durch Wärmerückgewinnung kann diese Energie für Trocknungsprozesse, Pilzkultivierung oder Gebäudeheizung genutzt werden – ein wichtiger Schritt zur Energieautonomie der Brauerei.'
    }
  ],
  en: [
    {
      title: 'Spent Grain Meets Mycelium',
      icon: '&#127806;',
      animFrom: '&#127806; Spent Grain',
      animTo: '&#129344; Protein Biomass',
      text: 'Targeted fermentation of spent grain with mycelium creates high-quality vegan proteins and biomass. EAT BEER transforms this brewery by-product into a valuable raw material for sustainable foods – instead of discarding it as waste.'
    },
    {
      title: 'CO\u2082 as a Resource',
      icon: '&#127807;',
      animFrom: '&#128168; Brewery CO\u2082',
      animTo: '&#127807; Raw Material',
      text: 'Alcoholic fermentation produces large amounts of CO\u2082. Instead of releasing this greenhouse gas into the atmosphere, it can be captured for food, beverages, or algae cultivation – a true circular economy contribution.'
    },
    {
      title: 'Brewer\'s Yeast as Superfood',
      icon: '&#128300;',
      animFrom: '&#127866; Yeast Residue',
      animTo: '&#128138; Nutrient Extract',
      text: 'Brewer\'s yeast contains valuable B vitamins, minerals, and all essential amino acids. EAT BEER is researching how surplus yeast from breweries can become high-quality dietary supplements or natural food ingredients.'
    },
    {
      title: 'Packaging from Spent Grain',
      icon: '&#128230;',
      animFrom: '&#127806; Grain Fibers',
      animTo: '&#9851; Biopackaging',
      text: 'The cellulose fibers in spent grain are ideal for compostable packaging. EAT BEER closes the loop: from grain to beer to sustainable packaging – without fossil raw materials.'
    },
    {
      title: 'Utilizing Waste Heat',
      icon: '&#128293;',
      animFrom: '&#127777; Process Heat',
      animTo: '&#9889; Usable Energy',
      text: 'Brewing systems generate significant waste heat. Through heat recovery, this energy can be used for drying, mushroom cultivation, or building heating – a key step toward energy autonomy.'
    }
  ]
};

// ── Inhalte: Ghost-Danger-Popups (4 Geister) ────────────────
// Geister-IDs: 0=Blinky(rot), 1=Pinky(rosa), 2=Inky(cyan), 3=Clyde(orange)
var EB_GHOST_POPUPS = {
  de: [
    {
      name: 'KONKURRENZ',
      icon: '&#9876;',
      title: 'Wachsender Wettbewerb',
      text: 'Der Bier Markt wächst rasant. Neue Mikrobrauereien und Getränke-Startups drängen mit innovativen Konzepten in den Markt. Nur Betriebe mit klarer Differenzierung und nachhaltigen Alleinstellungsmerkmalen können sich langfristig behaupten.',
      color: '#e74c3c'
    },
    {
      name: 'ENERGIEKOSTEN',
      icon: '&#9889;',
      title: 'Steigende Energiepreise',
      text: 'Brauereien gehören zu den energieintensivsten Lebensmittelbetrieben. Explodierende Strom- und Gaskosten belasten die Margen erheblich. Wer frühzeitig in Energieeffizienz und erneuerbare Quellen investiert, sichert seine Wettbewerbsfähigkeit.',
      color: '#f39c12'
    },
    {
      name: 'ROHSTOFFMANGEL',
      icon: '&#127806;',
      title: 'Rohstoffknappheit',
      text: 'Der Klimawandel bedroht Gersten- und Hopfenernten in Europa. Extremwetterereignisse, Dürreperioden und neue Schädlinge lassen Erträge einbrechen. Brauereien müssen Lieferketten diversifizieren und Nebenströme als Hauptstom neudenken.',
      color: '#27ae60'
    },
    {
      name: 'REGULIERUNG',
      icon: '&#128203;',
      title: 'Regulatorischer Druck',
      text: 'Strengere Lebensmittelgesetze, CO\u2082-Bepreisung und wachsende Nachhaltigkeits-Berichtspflichten erhöhen den Compliance-Aufwand. Brauereien müssen frühzeitig in Prozessanpassungen investieren, um regulatorischen Anforderungen gewachsen zu sein.',
      color: '#8e44ad'
    }
  ],
  en: [
    {
      name: 'COMPETITION',
      icon: '&#9876;',
      title: 'Growing Competition',
      text: 'The beer market is growing rapidly. New microbreweries and beverage startups are entering with innovative concepts. Only businesses with clear differentiation and sustainable unique selling points can establish themselves long-term.',
      color: '#e74c3c'
    },
    {
      name: 'ENERGY COSTS',
      icon: '&#9889;',
      title: 'Rising Energy Prices',
      text: 'Breweries are among the most energy-intensive food businesses. Exploding electricity and gas costs significantly impact margins. Those who invest early in energy efficiency and renewable sources secure their competitiveness.',
      color: '#f39c12'
    },
    {
      name: 'RAW MATERIALS',
      icon: '&#127806;',
      title: 'Raw Material Scarcity',
      text: 'Climate change threatens barley and hop harvests in Europe. Extreme weather events, droughts, and new pests are causing crop failures. Breweries must diversify supply chains and rethink by-products as primary streams.',
      color: '#27ae60'
    },
    {
      name: 'REGULATION',
      icon: '&#128203;',
      title: 'Regulatory Pressure',
      text: 'Stricter food laws, CO\u2082 pricing, and growing sustainability reporting requirements increase compliance burdens. Breweries must invest early in process adaptations to meet regulatory requirements.',
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
    '<span style="color:' + data.color + '">' + data.name + '</span>: ' + data.title;
  document.getElementById('eb-popup-text').textContent  = data.text;
  document.getElementById('eb-popup-animation').innerHTML = '';

  document.getElementById('eb-overlay').classList.add('active');
};
