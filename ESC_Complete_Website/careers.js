(() => {
  let currentLang = 'en';
  let showingAllJobs = false;
  let activeJobId = null;

  const jobs = [
    {
      id: 'bpa',
      featured: true,
      en: {
        title: 'Business Process Analyst',
        dept: 'Business Process Services',
        location: 'Trivandrum, IN',
        type: 'Full-time',
        badge: 'Sample Position',
        summary: 'Collaborate with Indo-German utility teams to analyse, optimise and document core operational processes across Energy, Gas and Water clients.',
        responsibilities: [
          'Map and evaluate end-to-end utility business processes and identify efficiency improvements.',
          'Coordinate closely with project stakeholders in India and Germany on requirements and deliverables.',
          'Support digitalisation, quality assurance and structured workflow transitions.'
        ],
        requirements: [
          'Bachelor’s degree in Business, Engineering, Information Systems or related discipline.',
          'Strong analytical mindset, structured documentation skills and clear English communication.',
          'Interest in utility-sector operations and cross-cultural Indo-German teamwork (German A1/A2 is a plus).'
        ]
      },
      de: {
        title: 'Business Process Analyst',
        dept: 'Geschäftsprozess-Services',
        location: 'Trivandrum, IN',
        type: 'Vollzeit',
        badge: 'Beispielstelle',
        summary: 'Arbeiten Sie mit deutsch-indischen Versorgungsteams zusammen, um zentrale Geschäftsprozesse für Energie-, Gas- und Wasserkunden zu analysieren und zu optimieren.',
        responsibilities: [
          'Erfassung und Bewertung von End-to-End-Prozessen in der Versorgungswirtschaft.',
          'Enge Abstimmung mit Projektpartnern in Indien und Deutschland zu Anforderungen und Ergebnissen.',
          'Unterstützung bei Digitalisierung, Qualitätssicherung und strukturierter Prozessoptimierung.'
        ],
        requirements: [
          'Abgeschlossenes Studium in Wirtschaft, Ingenieurwesen, Informatik oder einem verwandten Bereich.',
          'Analytische Denkweise, strukturierte Arbeitsweise und sichere Englischkenntnisse.',
          'Interesse an Versorgungsprozessen und deutsch-indischer Zusammenarbeit (Deutsch A1/A2 von Vorteil).'
        ]
      }
    },
    {
      id: 'swe',
      featured: true,
      en: {
        title: 'Software Engineer',
        dept: 'Application Development & AI',
        location: 'Trivandrum, IN',
        type: 'Full-time',
        badge: 'Sample Position',
        summary: 'Design, build and maintain scalable web applications, APIs and AI-assisted enterprise tools powering modern utility operations.',
        responsibilities: [
          'Develop reliable, secure full-stack software solutions using modern frameworks and cloud-ready architectures.',
          'Collaborate with product specialists and German client teams across agile sprint cycles.',
          'Write clean, maintainable code with automated testing and security best practices.'
        ],
        requirements: [
          '2+ years of experience with modern JavaScript/TypeScript, Python, Java or .NET.',
          'Experience building REST APIs, responsive user interfaces and relational databases.',
          'Strong problem-solving attitude and enthusiasm for clean software craftsmanship.'
        ]
      },
      de: {
        title: 'Software Engineer',
        dept: 'Anwendungsentwicklung & KI',
        location: 'Trivandrum, IN',
        type: 'Vollzeit',
        badge: 'Beispielstelle',
        summary: 'Entwickeln und pflegen Sie skalierbare Webanwendungen, Schnittstellen und KI-gestützte Unternehmenslösungen für moderne Versorgungsbetriebe.',
        responsibilities: [
          'Entwicklung zuverlässiger, sicherer Full-Stack-Softwarelösungen mit modernen Frameworks.',
          'Zusammenarbeit mit Fachspezialisten und deutschen Kundenteams in agilen Sprints.',
          'Erstellung wartbaren Codes inklusive automatisierter Tests und hoher Sicherheitsstandards.'
        ],
        requirements: [
          'Mindestens 2 Jahre Erfahrung mit JavaScript/TypeScript, Python, Java oder .NET.',
          'Erfahrung mit REST-APIs, modernen Benutzeroberflächen und relationalen Datenbanken.',
          'Ausgeprägte Problemlösungskompetenz und Freude an sauberer Softwareentwicklung.'
        ]
      }
    },
    {
      id: 'ai-eng',
      featured: false,
      en: {
        title: 'AI & Automation Engineer',
        dept: 'Technology & Innovation',
        location: 'Trivandrum, IN · Hybrid',
        type: 'Full-time',
        badge: 'Sample Position',
        summary: 'Build practical AI assistants, intelligent document processing pipelines and workflow automations tailored to enterprise utility data.',
        responsibilities: [
          'Prototype and deploy secure AI agents and automation workflows under ISO/IEC 27001 standards.',
          'Integrate LLM and OCR capabilities with legacy enterprise databases and portals.',
          'Evaluate model accuracy, governance controls and measurable operational ROI.'
        ],
        requirements: [
          'Hands-on experience with Python, automation tooling, NLP/LLM integration or data pipelines.',
          'Strong understanding of data privacy, access control and enterprise software engineering.',
          'Curiosity to turn emerging AI technologies into dependable everyday business solutions.'
        ]
      },
      de: {
        title: 'KI- & Automatisierungsingenieur',
        dept: 'Technologie & Innovation',
        location: 'Trivandrum, IN · Hybrid',
        type: 'Vollzeit',
        badge: 'Beispielstelle',
        summary: 'Entwickeln Sie praxisnahe KI-Assistenten, intelligente Dokumenten-Pipelines und Prozessautomatisierungen für Versorgungsunternehmen.',
        responsibilities: [
          'Entwicklung und Betrieb sicherer KI-Agenten und Automatisierungen nach ISO/IEC 27001.',
          'Integration von KI- und OCR-Funktionen in bestehende Unternehmenssysteme.',
          'Bewertung von Qualität, Governance und operativem Mehrwert.'
        ],
        requirements: [
          'Praktische Erfahrung mit Python, Automatisierung, NLP/LLM-Integration oder Datenpipelines.',
          'Fundiertes Verständnis von Datenschutz, Zugriffssteuerung und Software-Engineering.',
          'Begeisterung dafür, moderne KI-Technologien zuverlässig in den Arbeitsalltag zu bringen.'
        ]
      }
    },
    {
      id: 'sap-cons',
      featured: false,
      en: {
        title: 'SAP Technical Consultant',
        dept: 'SAP New Tech',
        location: 'Trivandrum, IN',
        type: 'Full-time',
        badge: 'Sample Position',
        summary: 'Support SAP landscape modernisation, system integration and utility-specific extensions for European energy and water enterprises.',
        responsibilities: [
          'Implement and enhance integrations connecting SAP modules with modern web and AI services.',
          'Support data migration, interface monitoring and technical troubleshooting for utility clients.',
          'Document architecture decisions and collaborate with Indo-German functional consultants.'
        ],
        requirements: [
          'Experience in SAP ABAP, SAP BTP, OData/API integration or SAP IS-U environments.',
          'Understanding of enterprise change management and clean technical documentation.',
          'Strong teamwork and communication skills across international project teams.'
        ]
      },
      de: {
        title: 'SAP Technical Consultant',
        dept: 'SAP New Tech',
        location: 'Trivandrum, IN',
        type: 'Vollzeit',
        badge: 'Beispielstelle',
        summary: 'Unterstützen Sie die Modernisierung von SAP-Landschaften, Systemintegrationen und Erweiterungen für europäische Versorgungsunternehmen.',
        responsibilities: [
          'Umsetzung und Erweiterung von Schnittstellen zwischen SAP-Modulen und modernen Web- sowie KI-Diensten.',
          'Begleitung von Datenmigrationen, Monitoring und technischem Support für Versorgungskunden.',
          'Technische Dokumentation und Zusammenarbeit mit deutsch-indischen Beraterteams.'
        ],
        requirements: [
          'Erfahrung in SAP ABAP, SAP BTP, OData/API-Integration oder SAP IS-U.',
          'Verständnis für strukturiertes Change-Management und saubere Dokumentation.',
          'Teamfähigkeit und klare Kommunikation in internationalen Projektteams.'
        ]
      }
    },
    {
      id: 'data-dig',
      featured: false,
      en: {
        title: 'Data Digitalisation Specialist',
        dept: 'Digitalisation & Process Management',
        location: 'Trivandrum, IN',
        type: 'Full-time',
        badge: 'Sample Position',
        summary: 'Transform legacy records and technical utility archives into structured, validated, searchable digital assets.',
        responsibilities: [
          'Execute structured capture, verification and cleansing of complex utility datasets.',
          'Follow strict ISO/IEC 27001 information security and data quality protocols.',
          'Collaborate with process leads to streamline recurring validation workflows.'
        ],
        requirements: [
          'High attention to detail, accuracy and familiarity with structured data tools or spreadsheets.',
          'Ability to work reliably with sensitive operational documentation.',
          'Willingness to learn German utility terminology and digitalisation platforms.'
        ]
      },
      de: {
        title: 'Spezialist für Datendigitalisierung',
        dept: 'Digitalisierung & Prozessmanagement',
        location: 'Trivandrum, IN',
        type: 'Vollzeit',
        badge: 'Beispielstelle',
        summary: 'Überführen Sie Bestandsakten und technische Versorgungsarchive in strukturierte, geprüfte und durchsuchbare digitale Datenbestände.',
        responsibilities: [
          'Strukturierte Erfassung, Prüfung und Bereinigung komplexer Versorgungsdatensätze.',
          'Einhaltung strenger ISO/IEC-27001-Informationssicherheits- und Qualitätsstandards.',
          'Zusammenarbeit mit Prozessverantwortlichen zur Optimierung wiederkehrender Prüfprozesse.'
        ],
        requirements: [
          'Hohe Sorgfalt, Genauigkeit und sicherer Umgang mit strukturierten Datentools.',
          'Zuverlässiger Umgang mit sensibler Betriebsdokumentation.',
          'Bereitschaft zur Einarbeitung in deutsche Versorgungsbegriffe und Digitalisierungsplattformen.'
        ]
      }
    },
    {
      id: 'qa-comp',
      featured: false,
      en: {
        title: 'Quality & Compliance Analyst',
        dept: 'Security & Compliance',
        location: 'Trivandrum, IN',
        type: 'Full-time',
        badge: 'Sample Position',
        summary: 'Champion information security, audit readiness and operational quality across ESC delivery teams in alignment with ISO/IEC 27001:2022.',
        responsibilities: [
          'Support internal quality reviews, compliance documentation and risk assessments.',
          'Track process KPIs and partner with operational teams on continuous improvement.',
          'Assist with Indo-German regulatory alignment and client audit preparations.'
        ],
        requirements: [
          'Experience in quality assurance, information security governance or process auditing.',
          'Familiarity with ISO 27001, GDPR principles or enterprise compliance frameworks.',
          'Clear written communication and a proactive, collaborative mindset.'
        ]
      },
      de: {
        title: 'Quality & Compliance Analyst',
        dept: 'Sicherheit & Compliance',
        location: 'Trivandrum, IN',
        type: 'Vollzeit',
        badge: 'Beispielstelle',
        summary: 'Fördern Sie Informationssicherheit, Audit-Bereitschaft und operative Qualität über alle ESC-Teams hinweg im Einklang mit ISO/IEC 27001:2022.',
        responsibilities: [
          'Begleitung interner Qualitätsprüfungen, Compliance-Dokumentationen und Risikobewertungen.',
          'Auswertung von Prozess-KPIs und Zusammenarbeit mit Fachbereichen zur kontinuierlichen Verbesserung.',
          'Unterstützung bei deutsch-indischen Compliance-Anforderungen und Kundenaudits.'
        ],
        requirements: [
          'Erfahrung in Qualitätssicherung, Informationssicherheit oder Prozessaudits.',
          'Kenntnisse in ISO 27001, DSGVO-Grundsätzen oder Compliance-Frameworks.',
          'Klare schriftliche Kommunikation und lösungsorientierte Arbeitsweise.'
        ]
      }
    }
  ];

  const uiText = {
    en: {
      viewAll: 'View All Open Positions',
      showFewer: 'Show Fewer Positions',
      responsibilities: 'Key Responsibilities',
      requirements: 'What We Look For',
      applyNow: 'Apply Now ↗',
      applyHeading: 'Prepare Your Application',
      nameLabel: 'Full Name *',
      emailLabel: 'Email Address *',
      noteLabel: 'Brief Note / LinkedIn or Portfolio Link',
      submitApply: 'Send Application via Email ↗',
      cancelApply: 'Back to Role Details',
      demoDisclaimer: 'Sample listing: clicking Submit opens your email client pre-addressed to ESC HR (support@esc-ind.com).'
    },
    de: {
      viewAll: 'Alle offenen Stellen ansehen',
      showFewer: 'Weniger Stellen anzeigen',
      responsibilities: 'Ihre Aufgaben',
      requirements: 'Ihr Profil',
      applyNow: 'Jetzt bewerben ↗',
      applyHeading: 'Bewerbung vorbereiten',
      nameLabel: 'Vollständiger Name *',
      emailLabel: 'E-Mail-Adresse *',
      noteLabel: 'Kurze Nachricht / LinkedIn- oder Portfolio-Link',
      submitApply: 'Bewerbung per E-Mail öffnen ↗',
      cancelApply: 'Zurück zu den Details',
      demoDisclaimer: 'Beispielstelle: Beim Absenden öffnet sich Ihr E-Mail-Programm voradressiert an ESC HR (support@esc-ind.com).'
    }
  };

  const pinSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>`;
  const bagSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M3 12h18"></path></svg>`;

  function buildJobCard(job) {
    const data = job[currentLang];
    return `
      <button class="job-card" type="button" data-job-id="${job.id}">
        <div class="job-card-info">
          <span class="job-card-title">${data.title}</span>
          <span class="job-card-meta">
            <span>${pinSvg}${data.location}</span>
            <span>${bagSvg}${data.type}</span>
          </span>
        </div>
        <span class="job-card-arrow" aria-hidden="true">→</span>
      </button>
    `;
  }

  function renderJobs() {
    const featuredGrid = document.getElementById('featuredJobsGrid');
    const extraGrid = document.getElementById('extraJobsGrid');
    if (!featuredGrid || !extraGrid) return;

    featuredGrid.innerHTML = jobs.filter(j => j.featured).map(buildJobCard).join('');
    extraGrid.innerHTML = jobs.filter(j => !j.featured).map(buildJobCard).join('');

    document.querySelectorAll('.job-card').forEach(card => {
      card.addEventListener('click', () => openJobModal(card.dataset.jobId));
    });

    const toggleLabel = document.getElementById('toggleAllJobsLabel');
    const toggleBtn = document.getElementById('toggleAllJobsBtn');
    if (toggleLabel && toggleBtn) {
      toggleLabel.textContent = showingAllJobs ? uiText[currentLang].showFewer : uiText[currentLang].viewAll;
      toggleBtn.setAttribute('aria-expanded', String(showingAllJobs));
      const arrow = toggleBtn.querySelector('.btn-arrow');
      if (arrow) arrow.textContent = showingAllJobs ? '↑' : '→';
    }
  }

  function renderJobModalContent(jobId, showForm = false) {
    const job = jobs.find(j => j.id === jobId);
    const body = document.getElementById('jobModalBody');
    if (!job || !body) return;
    const data = job[currentLang];
    const t = uiText[currentLang];

    if (!showForm) {
      body.innerHTML = `
        <div class="job-modal-head">
          <span class="job-modal-badge">${data.badge} · ${data.dept}</span>
          <h2 id="jobModalTitle">${data.title}</h2>
          <div class="job-modal-meta">
            <span>${pinSvg}${data.location}</span>
            <span>${bagSvg}${data.type}</span>
          </div>
        </div>
        <p class="job-modal-summary">${data.summary}</p>
        <div class="job-modal-list">
          <h3>${t.responsibilities}</h3>
          <ul>${data.responsibilities.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="job-modal-list">
          <h3>${t.requirements}</h3>
          <ul>${data.requirements.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="job-modal-actions">
          <button class="careers-btn-primary" id="startApplyBtn" type="button">${t.applyNow}</button>
        </div>
      `;
      document.getElementById('startApplyBtn')?.addEventListener('click', () => renderJobModalContent(jobId, true));
    } else {
      body.innerHTML = `
        <div class="job-modal-head">
          <span class="job-modal-badge">${data.badge} · ${data.title}</span>
          <h2 id="jobModalTitle">${t.applyHeading}</h2>
        </div>
        <form class="job-apply-form" id="jobApplyForm">
          <label>${t.nameLabel}<input name="name" required placeholder="Alex Weber" /></label>
          <label>${t.emailLabel}<input name="email" type="email" required placeholder="alex@example.com" /></label>
          <label>${t.noteLabel}<textarea name="note" rows="3" placeholder="..."></textarea></label>
          <div class="job-modal-actions">
            <button class="careers-btn-primary" type="submit">${t.submitApply}</button>
            <button class="job-btn-secondary" id="backToJobBtn" type="button">${t.cancelApply}</button>
          </div>
          <small class="job-apply-note">${t.demoDisclaimer}</small>
        </form>
      `;
      document.getElementById('backToJobBtn')?.addEventListener('click', () => renderJobModalContent(jobId, false));
      document.getElementById('jobApplyForm')?.addEventListener('submit', e => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const subject = encodeURIComponent(`ESC Careers Application – ${data.title}`);
        const msg = encodeURIComponent(
          `Position: ${data.title} (${data.location})\nName: ${fd.get('name')}\nEmail: ${fd.get('email')}\n\nNotes:\n${fd.get('note') || '-'}`
        );
        window.location.href = `mailto:support@esc-ind.com?subject=${subject}&body=${msg}`;
      });
    }
  }

  function openJobModal(jobId) {
    activeJobId = jobId;
    renderJobModalContent(jobId, false);
    const modal = document.getElementById('jobModal');
    if (modal && !modal.open) modal.showModal();
  }

  // Toggle all positions
  document.getElementById('toggleAllJobsBtn')?.addEventListener('click', () => {
    showingAllJobs = !showingAllJobs;
    const extraGrid = document.getElementById('extraJobsGrid');
    if (extraGrid) {
      extraGrid.hidden = !showingAllJobs;
    }
    renderJobs();
  });

  // Modal close handlers
  const jobModal = document.getElementById('jobModal');
  document.getElementById('closeJobModal')?.addEventListener('click', () => jobModal?.close());
  jobModal?.addEventListener('click', e => {
    if (e.target === jobModal) jobModal.close();
  });

  // Smooth scroll for hero CTA and back-to-top
  document.getElementById('heroPositionsBtn')?.addEventListener('click', e => {
    const target = document.getElementById('open-positions');
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  document.getElementById('backToTop')?.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile menu toggle
  document.getElementById('menu')?.addEventListener('click', () => {
    document.querySelector('.navrow nav')?.classList.toggle('open');
  });
  document.querySelectorAll('.navrow nav a').forEach(a => {
    a.addEventListener('click', () => document.querySelector('.navrow nav')?.classList.remove('open'));
  });

  // EN / DE language toggle
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      document.querySelectorAll('[data-lang]').forEach(x => x.classList.toggle('chosen', x === btn));
      document.documentElement.lang = currentLang;
      document.querySelectorAll('[data-en][data-de]').forEach(el => {
        el.innerHTML = el.dataset[currentLang];
      });
      renderJobs();
      if (jobModal?.open && activeJobId) {
        renderJobModalContent(activeJobId, false);
      }
    });
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderJobs();
})();
