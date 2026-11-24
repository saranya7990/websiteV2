(() => {
  // Articles Data Store for Modal View
  const articlesData = {
    iso27001: {
      tag: "Company News",
      tagDe: "Unternehmens-News",
      date: "Nov 20, 2026",
      dateDe: "20. Nov 2026",
      title: "ESC Achieves ISO/IEC 27001:2022 Certification",
      titleDe: "ESC erhält ISO/IEC 27001:2022 Zertifizierung",
      image: "assets/esc-reception.jpg",
      bodyHtmlEn: `
        <p class="modal-lead">We are pleased to announce that ESC Utility Services Pvt. Ltd. is now ISO/IEC 27001:2022 certified, reaffirming our commitment to information security, data protection, and operational excellence.</p>
        <p>This internationally recognized standard confirms that our Information Security Management System (ISMS) meets the most rigorous global benchmarks for safeguarding sensitive client data, intellectual property, and enterprise IT infrastructure.</p>
        <p>Operating from Technopark Trivandrum in close partnership with ISI Management Consulting GmbH in Düsseldorf, Germany, ESC provides critical business process management and digital transformation services to leading European utility providers. Compliance with ISO/IEC 27001:2022, alongside EU GDPR and German BDSG regulations, guarantees end-to-end security across all service engagements.</p>
        <div class="modal-highlights">
          <h4>Key Pillars of Our Certification:</h4>
          <ul>
            <li><strong>Data Protection & Privacy:</strong> Comprehensive controls ensuring confidential client utility data is shielded at rest and in transit.</li>
            <li><strong>Continuous Risk Management:</strong> Proactive threat identification, regular vulnerability assessments, and penetration testing.</li>
            <li><strong>Governance & Compliance:</strong> Strict alignment with German and European compliance standards for municipal and regional utilities.</li>
          </ul>
        </div>
      `,
      bodyHtmlDe: `
        <p class="modal-lead">Wir freuen uns bekannt zu geben, dass die ESC Utility Services Pvt. Ltd. nach ISO/IEC 27001:2022 zertifiziert wurde – eine Bestätigung unseres kontinuierlichen Engagements für Informationssicherheit, Datenschutz und operative Exzellenz.</p>
        <p>Dieser international anerkannte Standard bestätigt, dass unser Informationssicherheits-Managementsystem (ISMS) den strengsten globalen Maßstäben zum Schutz sensibler Kundendaten, geistigen Eigentums und betrieblicher IT-Infrastrukturen entspricht.</p>
        <p>Von unserem Standort im Technopark Trivandrum aus und in enger Partnerschaft mit der ISI Management Consulting GmbH in Düsseldorf bietet ESC kritische Geschäftsprozess- und Digitalisierungsdienstleistungen für führende europäische Versorgungsunternehmen. Die ISO/IEC 27001:2022-Zertifizierung garantiert in Verbindung mit der EU-DSGVO und dem deutschen BDSG lückenlose Sicherheit bei allen Projekten.</p>
        <div class="modal-highlights">
          <h4>Wesentliche Säulen unserer Zertifizierung:</h4>
          <ul>
            <li><strong>Datenschutz & Privatsphäre:</strong> Ganzheitliche Kontrollmechanismen zum Schutz vertraulicher Versorgerdaten in Ruhe und bei der Übertragung.</li>
            <li><strong>Kontinuierliches Risikomanagement:</strong> Proaktive Bedrohungserkennung, regelmäßige Schwachstellenanalysen und Penetrationstests.</li>
            <li><strong>Governance & Compliance:</strong> Strikte Übereinstimmung mit deutschen und europäischen Sicherheitsstandards für Stadtwerke und Regionalversorger.</li>
          </ul>
        </div>
      `
    },
    hackathon: {
      tag: "News · Company",
      tagDe: "News · Unternehmen",
      date: "Nov 12, 2026",
      dateDe: "12. Nov 2026",
      title: "ESC Participates in Generative AI & Agentic AI Hackathon",
      titleDe: "ESC nimmt am Generative AI & Agentic AI Hackathon teil",
      image: "assets/news-hackathon.jpg",
      bodyHtmlEn: `
        <p class="modal-lead">Our engineering and innovation teams showcased cutting-edge AI use cases designed to address real-world business challenges across the utility sector.</p>
        <p>During the intensive Generative AI & Agentic AI Hackathon, ESC engineers designed and built prototype autonomous agent frameworks capable of orchestrating complex utility clearing, customer communication, and network incident management workflows.</p>
        <p>Among our top presentations was <em>Community Connect</em>, a hyper-local platform pairing intelligent agent routing with community service discovery to boost local workforce engagement and economic transparency.</p>
        <div class="modal-highlights">
          <h4>Innovation Highlights:</h4>
          <ul>
            <li><strong>Multi-Agent Coordination:</strong> Autonomous agent pipelines managing parallel data verification tasks.</li>
            <li><strong>Natural Language Querying:</strong> Real-time conversion of unstructured service requests into structured ERP actions.</li>
            <li><strong>Utility-Grade Security:</strong> Private vector models with zero data leakage to external providers.</li>
          </ul>
        </div>
      `,
      bodyHtmlDe: `
        <p class="modal-lead">Unsere Entwicklungs- und Innovationsteams präsentierten zukunftsweisende KI-Anwendungsfälle, die gezielt reale betriebliche Herausforderungen im Versorgungssektor lösen.</p>
        <p>Während des intensiven Generative AI & Agentic AI Hackathons entwickelten ESC-Entwickler autonome Agenten-Frameworks zur Orchestrierung komplexer Abrechnungs-, Kundenkommunikations- und Netzstörungs-Prozesse.</p>
        <p>Zu den herausragenden Präsentationen gehörte <em>Community Connect</em>, eine Plattform, die intelligentes Agenten-Routing mit lokaler Dienstleister-Vermittlung kombiniert.</p>
        <div class="modal-highlights">
          <h4>Innovations-Highlights:</h4>
          <ul>
            <li><strong>Multi-Agenten-Koordination:</strong> Autonome Agenten-Pipelines für parallele Datenprüfungen.</li>
            <li><strong>Verarbeitung natürlicher Sprache:</strong> Echtzeit-Transformation unstrukturierter Anfragen in strukturierte ERP-Aktionen.</li>
            <li><strong>Unternehmenssicherheit:</strong> Private Vektormodelle ohne Datenabfluss an externe Schnittstellen.</li>
          </ul>
        </div>
      `
    },
    "sap-ai": {
      tag: "Blog · SAP",
      tagDe: "Blog · SAP",
      date: "Oct 28, 2026",
      dateDe: "28. Okt 2026",
      title: "Integrating AI into SAP Business Workflows",
      titleDe: "Integration von KI in SAP-Geschäftsprozesse",
      image: "assets/blog-sap-ai.jpg",
      bodyHtmlEn: `
        <p class="modal-lead">A practical look at how AI can enhance SAP processes, enabling faster, smarter, and more efficient operations for modern utility companies.</p>
        <p>Enterprise systems like SAP IS-U manage immense volumes of meter readings, billing runs, and tariff modifications. By integrating intelligent algorithmic pre-validation and natural-language copilot agents, utilities can drastically reduce exception queues.</p>
        <p>At ESC, our SAP specialists bridge classical ABAP and integration architectures with cutting-edge machine learning services, empowering European municipal utilities (Stadtwerke) to process high volumes with up to 99.8% first-pass accuracy.</p>
        <div class="modal-highlights">
          <h4>Core Benefits:</h4>
          <ul>
            <li><strong>Automated Plausibility Checks:</strong> Anomaly detection flagging incorrect meter reads before billing runs occur.</li>
            <li><strong>Clearing Acceleration:</strong> Sub-24h turnaround times on complex market communication exceptions.</li>
            <li><strong>Seamless Compatibility:</strong> Zero disruption to legacy SAP data models and enterprise governance.</li>
          </ul>
        </div>
      `,
      bodyHtmlDe: `
        <p class="modal-lead">Ein praxisnaher Einblick, wie künstliche Intelligenz SAP-Prozesse erweitert und schnellere, intelligentere sowie fehlerfreie Abläufe ermöglicht.</p>
        <p>Unternehmenssysteme wie SAP IS-U bewältigen enorme Mengen an Zählerständen, Abrechnungsläufen und Tarifanpassungen. Durch die Integration intelligenter algorithmischer Vorprüfungen und KI-gestützter Copilot-Agenten können Versorger manuelle Klärfalllisten drastisch reduzieren.</p>
        <p>Bei ESC verknüpfen unsere SAP-Spezialisten klassische ABAP- und Integrationsarchitekturen mit modernen Machine-Learning-Diensten, um Stadtwerken eine First-Pass-Genauigkeit von bis zu 99,8 % zu ermöglichen.</p>
        <div class="modal-highlights">
          <h4>Zentrale Vorteile:</h4>
          <ul>
            <li><strong>Automatisierte Plausibilitätsprüfungen:</strong> Anomalieerkennung meldet unplausible Zählerwerte vor dem Rechnungslauf.</li>
            <li><strong>Schnellere Klärfallbearbeitung:</strong> Bearbeitungszeiten unter 24 Stunden bei komplexen Marktkommunikations-Fällen.</li>
            <li><strong>Nahtlose Kompatibilität:</strong> Keine Störung bestehender SAP-Datenmodelle und Sicherheitsrichtlinien.</li>
          </ul>
        </div>
      `
    },
    "ai-utilities": {
      tag: "Blog · Technology",
      tagDe: "Blog · Technologie",
      date: "Oct 15, 2026",
      dateDe: "15. Okt 2026",
      title: "How AI Is Transforming Utility Operations",
      titleDe: "Wie KI den Versorgerbetrieb transformiert",
      image: "assets/blog-ai-utilities.jpg",
      bodyHtmlEn: `
        <p class="modal-lead">Explore how artificial intelligence can automate tasks, improve operational decision-making, and create greater efficiency across Energy, Gas, and Water operations.</p>
        <p>The energy transition and regulatory market clearing requirements demand unprecedented agility from utility operators. Autonomous telemetry inspection, predictive pipe maintenance, and intelligent document digitization are transforming municipal service delivery.</p>
        <p>From converting millions of legacy paper grid plans into GIS-compatible spatial digital twins to conversational assistants querying live water network telemetry, applied AI is providing utilities with the tools needed to remain resilient and sustainable.</p>
        <div class="modal-highlights">
          <h4>Key Transformation Areas:</h4>
          <ul>
            <li><strong>Grid Digital Twins:</strong> Converting physical network schemas into high-accuracy GIS vector layers.</li>
            <li><strong>Predictive Maintenance:</strong> Sensor telemetry alerting field engineers before leaks or outages escalate.</li>
            <li><strong>Intelligent Document AI (IDA):</strong> Instant semantic document retrieval with pinpoint citations across millions of technical pages.</li>
          </ul>
        </div>
      `,
      bodyHtmlDe: `
        <p class="modal-lead">Erfahren Sie, wie künstliche Intelligenz operative Aufgaben automatisiert, Entscheidungsfindungen präzisiert und Effizienz in Strom-, Gas- und Wasserbetrieben steigert.</p>
        <p>Die Energiewende und regulatorische Marktanforderungen verlangen von Versorgungsunternehmen beispiellose Agilität. Autonome Telemetrieanalysen, vorausschauende Netzwartung und intelligente Dokumentendigitalisierung revolutionieren kommunale Dienstleistungen.</p>
        <p>Von der Vektorisierung historischer Papier-Leitungspläne in GIS-fähige digitale Zwillinge bis hin zu Sprachassistenten für Rohrnetzdaten liefert angewandte KI Versorgern die Werkzeuge für zukunftssichere Infrastrukturen.</p>
        <div class="modal-highlights">
          <h4>Schwerpunkte der Transformation:</h4>
          <ul>
            <li><strong>Digitale Netz-Zwillinge:</strong> Umwandlung physischer Pläne in hochpräzise GIS-Vektorebenen.</li>
            <li><strong>Präventive Instandhaltung:</strong> Frühzeitige Sensorwarnungen vor Leckagen oder Ausfällen.</li>
            <li><strong>Intelligent Document AI (IDA):</strong> Semantische Volltextsuche mit exakten Seitenzitaten über Millionen technische Seiten.</li>
          </ul>
        </div>
      `
    }
  };

  // --- 1. CATEGORY FILTERING ---
  const filterButtons = document.querySelectorAll(".news-filter-btn");
  const featuredCard = document.querySelector(".featured-news-card");
  const noResultsMsg = document.getElementById("noResultsMsg");
  const btnResetFilter = document.getElementById("btnResetFilter");

  // The featured (latest) item is always shown above the filters and is never
  // filtered. If the same article also appears in the grid, drop that duplicate.
  const featuredArticleId = featuredCard?.querySelector(".modal-open-btn")?.dataset.article;
  const articleCards = Array.from(document.querySelectorAll(".news-article-card")).filter(card => {
    const cardId = card.querySelector(".modal-open-btn")?.dataset.article;
    if (featuredArticleId && cardId === featuredArticleId) {
      card.remove();
      return false;
    }
    return true;
  });

  function applyFilter(category) {
    category = category.toLowerCase().trim();

    // Update active filter button styling
    filterButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === category);
    });

    let visibleCardsCount = 0;

    // Filter Grid Cards only (the featured card stays visible for every filter)
    articleCards.forEach(card => {
      const type = (card.dataset.type || "").toLowerCase();
      const cat = (card.dataset.category || "").toLowerCase();
      const tags = (card.dataset.tags || "").toLowerCase().split(" ");

      let match = false;
      if (category === "all") {
        match = true;
      } else if (category === "news" && type === "news") {
        match = true;
      } else if (category === "blogs" && type === "blogs") {
        match = true;
      } else if (cat === category) {
        match = true;
      } else if (tags.includes(category)) {
        match = true;
      }

      if (match) {
        card.style.display = "";
        setTimeout(() => { card.style.opacity = "1"; }, 10);
        visibleCardsCount++;
      } else {
        card.style.display = "none";
        card.style.opacity = "0";
      }
    });

    // Check if any card is visible
    if (noResultsMsg) {
      if (visibleCardsCount === 0) {
        noResultsMsg.style.display = "block";
      } else {
        noResultsMsg.style.display = "none";
      }
    }
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      applyFilter(btn.dataset.filter);
    });
  });

  btnResetFilter?.addEventListener("click", () => {
    applyFilter("all");
  });

  // --- 2. ARTICLE MODAL DIALOG ---
  const modal = document.getElementById("articleModal");
  const modalContent = document.getElementById("articleModalContent");
  const closeModalBtn = document.getElementById("closeArticleModal");

  function openArticleModal(articleId) {
    const data = articlesData[articleId];
    if (!data || !modal || !modalContent) return;

    const currentLang = document.documentElement.lang || "en";
    const isDe = currentLang === "de";

    const tag = isDe ? data.tagDe : data.tag;
    const date = isDe ? data.dateDe : data.date;
    const title = isDe ? data.titleDe : data.title;
    const body = isDe ? data.bodyHtmlDe : data.bodyHtmlEn;

    modalContent.innerHTML = `
      <div class="modal-article-header">
        <span class="badge-tag badge-tag-rose">${tag}</span>
        <span class="modal-date">📅 ${date}</span>
      </div>
      <h2 class="modal-title">${title}</h2>
      <div class="modal-banner-img-wrap">
        <img src="${data.image}" alt="${title}" class="modal-banner-img" />
      </div>
      <div class="modal-article-prose">
        ${body}
      </div>
      <div class="modal-footer-actions">
        <a href="contact.html" class="btn-modal-contact" data-en="Contact ESC Team →" data-de="ESC Team kontaktieren →">${isDe ? "ESC Team kontaktieren →" : "Contact ESC Team →"}</a>
      </div>
    `;

    modal.showModal();
    document.body.style.overflow = "hidden";
  }

  function closeArticleModal() {
    if (modal) {
      modal.close();
      document.body.style.overflow = "";
    }
  }

  document.querySelectorAll(".modal-open-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      openArticleModal(btn.dataset.article);
    });
  });

  closeModalBtn?.addEventListener("click", closeArticleModal);
  modal?.addEventListener("click", e => {
    if (e.target === modal) closeArticleModal();
  });
  modal?.addEventListener("close", () => {
    document.body.style.overflow = "";
  });

  // Open a specific article when linked as news-and-blogs.html?article=<id>
  const linkedArticle = new URLSearchParams(window.location.search).get("article");
  if (linkedArticle && articlesData[linkedArticle]) {
    openArticleModal(linkedArticle);
  }

  // --- 3. BILINGUAL LANGUAGE SWITCHING ---
  const langButtons = document.querySelectorAll("[data-lang]");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const chosenLang = btn.dataset.lang;
      langButtons.forEach(b => b.classList.toggle("chosen", b === btn));
      document.documentElement.lang = chosenLang;

      // Update all data-en / data-de elements
      document.querySelectorAll("[data-en][data-de]").forEach(el => {
        el.innerHTML = el.dataset[chosenLang];
      });
    });
  });

  // --- 4. MOBILE MENU TOGGLE ---
  const menuBtn = document.getElementById("menu");
  const nav = document.querySelector(".navrow nav");
  menuBtn?.addEventListener("click", () => {
    nav?.classList.toggle("open");
  });
  nav?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });

  // Footer Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
