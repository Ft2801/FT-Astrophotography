const translations = {
    it: {
        // Navigation (Global)
        "nav.home": "Home",
        "nav.gallery": "Galleria",
        "nav.software": "Software",
        "nav.tutorials": "Tutorial",
        "nav.about": "La mia Storia",

        // Footer (Global)
        "footer.brand.desc": "Ingegneria Informatica applicata all'Astronomia. Sviluppo di tecnologie avanzate per l'imaging scientifico.",
        "footer.nav.title": "Navigazione",
        "footer.connect.title": "Connettiti",
        "footer.rights": "© 2026 Fabio Tempera. All rights reserved.",

        // Homepage - Hero
        "hero.subtitle": "Esplora l'universo attraverso l'arte e la scienza dell'imaging astronomico.",
        "hero.btn.gallery": "Visita la Galleria",
        "hero.btn.scroll": "Scorri in Basso ↓",
        "hero.lang.switch": "English Version",

        // Homepage - Latest Shots
        "latest.title": "Ultimi Scatti",
        "latest.subtitle": "Una selezione dei miei lavori più recenti dal profondo cielo.",
        "latest.view_all": "Vedi tutti →",
        "card.orion_horse": "Orione e Testa di Cavallo",
        "card.andromeda": "Galassia Andromeda",
        "card.pleiades": "Le Pleiadi",

        // Homepage - Story
        "story.title": "La Mia Storia",
        "story.text": "Il mio percorso unisce rigore scientifico ed espressione artistica attraverso tre grandi passioni: l'Informatica, la Fotografia e l'Astrofotografia. Come Ingegnere Informatico con un background in Elettronica, affronto ogni sfida con un approccio analitico e strutturato, spaziando dallo sviluppo software all'analisi dati. La fotografia è il mio mezzo per catturare l'istante, mentre l'astrofotografia rappresenta la sintesi perfetta tra tecnica e meraviglia, permettendomi di esplorare e rivelare la bellezza nascosta del cosmo profondo.",
        "story.btn": "Leggi la Bio Completa",

        // Homepage - Software
        "software.label": "SOFTWARE PROPRIETARIO",
        "software.text": "Una potente piattaforma di elaborazione immagini basata su C++17 e Qt6. Progettata per controllo totale sui dati grezzi lineari e risultati di grado scientifico.",
        "software.li1": "• Architettura C++17 & Qt6",
        "software.li2": "• Gestione MDI Flessibile",
        "software.li3": "• AI Noise Reduction",
        "software.btn": "Scopri TStar",

        // Homepage - Tutorials
        "tutorial.title": "Condividere la Conoscenza",
        "tutorial.text": "Credo fermamente che la condivisione sia alla base della crescita scientifica e tecnica. Nella sezione Tutorial troverai guide approfondite sulle mie tecniche di acquisizione ed elaborazione, dalla calibrazione dei file grezzi all'utilizzo avanzato di TStar e altri software di imaging, per aiutarti a ottenere il massimo dai tuoi dati astronomici.",
        "tutorial.btn": "Vai ai Tutorial",

        // Homepage - Partners
        "partner.title": "Partner",
        "partner.gaspra.title": "Gruppo Astrofili Pescaresi \"RA\"",
        "partner.gaspra.text": "Una comunità di appassionati di astronomia e astrofotografia dedicata alla ricerca, alla condivisione delle conoscenze e all'osservazione del cielo notturno dalla costa adriatica.",

        // Page: Gallery
        "gallery.title": "Galleria Fotografica",
        "gallery.desc": "Una collezione dei miei migliori scatti del profondo cielo. Ogni immagine è il risultato di ore di esposizione e post-produzione.",
        "gallery.card.andromeda": "Galassia di Andromeda",
        "gallery.card.orion": "Nebulosa di Orione",
        "gallery.card.orion_belt": "Cintura di Orione",
        "gallery.card.orion_horse": "Orione e Testa di Cavallo",
        "gallery.card.pleiades": "Le Pleiadi",
        "gallery.card.rho": "Rho Ophiuchi",
        "gallery.card.milkyway": "Via Lattea",

        // Page: About
        "about.header.title": "Dietro l'Obiettivo",
        "about.header.subtitle": "Fabio Tempera (Ft2801)",
        "about.intro.p1": "Ingegnere informatico con una solida formazione accademica in ingegneria elettronica. Il percorso di studi ha permesso l'acquisizione di competenze tecniche trasversali e di un metodo di analisi strutturato, orientato alla risoluzione di problematiche complesse.",
        "about.intro.p2": "Durante la formazione ho maturato esperienza nella gestione di progetti software e nell'analisi dei dati, sviluppando una propensione all'organizzazione efficiente delle risorse. L'obiettivo professionale è l'applicazione delle conoscenze informatiche in contesti aziendali strutturati, contribuendo allo sviluppo di soluzioni efficienti e scalabili.",
        "about.card.location": "Località",
        "about.card.location.val": "Pescara (PE)",
        "about.card.born": "Nascita",
        "about.card.born.val": "2 Agosto 2001",
        "about.card.edu": "Formazione",
        "about.card.edu.val": "Laurea Magistrale",
        "about.card.uni": "Università",
        "about.card.uni.val": "UNIVPM - Ancona",
        "about.skills.title": "Competenze Astrofotografiche",
        "about.skills.instr.title": "Strumentazione",
        "about.skills.instr.li1": "Telescopi e Ottiche",
        "about.skills.instr.li2": "Montature Equatoriali",
        "about.skills.instr.li3": "Camere CCD/CMOS Deep Sky",
        "about.skills.instr.li4": "Filtri Narrowband & LRGB",
        "about.skills.instr.li5": "Sistemi di Guida Automatica",
        "about.skills.soft.title": "Software",
        "about.skills.oss.title": "Sviluppo OSS",
        "about.skills.oss.text": "Contributore attivo per software astronomici open source. Sviluppo di moduli C++ per l'analisi e l'elaborazione delle immagini e ottimizzazione di algoritmi di stacking e calibrazione.",
        "about.quote": "\"Unendo le competenze di ingegneria del software e analisi dei segnali, ho sviluppato TStar per colmare il divario tra la complessità dei dati astronomici e la bellezza visuale, rendendo l'astrofotografia una scienza accessibile.\"",
        "about.btn.portfolio": "Portfolio Web",
        "about.btn.github": "GitHub Profile",

        // Page: Software
        "software.page.title": "TStar",
        "software.page.btn": "Vedi su GitHub",
        "software.page.p1": "TStar si distingue come una potente piattaforma di elaborazione immagini basata su architettura C++17 e Qt6, progettata esplicitamente per rispondere alle esigenze dell'astrofotografia moderna e produrre risultati di grado scientifico. Il software offre un ambiente di lavoro MDI (Multi-Document Interface) estremamente flessibile che garantisce la piena compatibilità con file FITS/XISF/TIFF a 8, 16 e 32 bit, sia interi che in virgola mobile, permettendo un controllo totale sui dati grezzi lineari.",
        "software.page.p2": "Il cuore del flusso di lavoro in TStar risiede nella sua capacità di trasformare il segnale lineare in immagini visibili con estrema precisione: grazie a strumenti all'avanguardia come il Generalized Hyperbolic Stretch (GHS) e l'ArcSinh Stretch, è possibile gestire in modo indipendente ombre, mezzitoni e luci, preservando la saturazione e i dettagli più fini. La fedeltà cromatica è assicurata dalla Calibrazione Colore Fotometrica (PCC), che risolve astrometricamente l'immagine e calibra i colori basandosi sui cataloghi stellari Gaia e APASS, affiancata da efficaci strumenti per la rimozione dei gradienti luminosi e delle dominanti di fondo.",
        "software.page.p3": "Un aspetto distintivo di TStar è l'integrazione nativa di tecnologie basate sull'Intelligenza Artificiale per il restauro dell'immagine. Il modulo Cosmic Clarity sfrutta il Deep Learning per la riduzione del rumore e lo sharpening, mentre la compatibilità con StarNet++ e GraXpert facilita operazioni complesse come la rimozione delle stelle e l'estrazione avanzata dei gradienti. A completare il quadro tecnico vi sono funzionalità avanzate per la composizione in banda stretta (con palette artistiche personalizzabili), un potente motore PixelMath per operazioni aritmetiche tra immagini e un sistema di mascheratura sofisticato che permette di isolare luminanza, crominanza o specifiche caratteristiche stellari per interventi localizzati di alta precisione.",

        // Page: Tutorials
        "tutorials.title": "Tutorial & Risorse",
        "tutorials.desc": "Guide pratiche per migliorare le tue tecniche di acquisizione ed elaborazione.",
        "tutorials.card.postproc.title": "Guida al Post Processing",
        "tutorials.card.postproc.desc": "Tecniche avanzate di elaborazione per astrofotografia.",
        "tutorials.card.postproc.btn": "Scarica Guida (PDF)",
        "tutorials.card.tstar.title": "Manuale Utente TStar",
        "tutorials.card.tstar.desc": "Documentazione ufficiale per il software TStar.",
        "tutorials.card.tstar.btn": "Scarica Manuale (PDF)",

        // Detail Pages Common
        "detail.back": "← Torna alla Galleria",
        "detail.story.title": "La Storia",
        "detail.tech.title": "Dati Tecnici",
        "detail.label.camera": "Camera:",
        "detail.label.mount": "Montatura:",
        "detail.label.integration": "Integrazione:",
        "detail.label.software": "Software:",
        "detail.label.telescope": "Telescopio:",
        "detail.label.date": "Data:",

        // Detail: Andromeda
        "andromeda.title": "Galassia di Andromeda",
        "andromeda.subtitle": "M31",
        "andromeda.p1": "Uno degli oggetti più iconici del cielo profondo, la Galassia di Andromeda (Messier 31) domina il Gruppo Locale insieme alla nostra Via Lattea. Situata a circa 2,5 milioni di anni luce di distanza, M31 è una maestosa spirale barrata che si estende per oltre 220.000 anni luce di diametro, contenendo circa mille miliardi di stelle.",
        "andromeda.p2": "La sua struttura rivela intricati bracci di polvere scura che si avvolgono attorno a un nucleo luminoso denso di stelle antiche e gialle, mentre le regioni esterne brillano della luce blu di giovani ammassi stellari in formazione. Nell'immagine sono chiaramente visibili anche le sue due galassie satelliti principali: M32, una compatta ellittica situata proprio sopra il disco, e M110, una galassia ellittica nana più diffusa posizionata sotto i bracci della spirale principale.",
        "andromeda.p3": "L'osservazione e l'analisi di Andromeda sono fondamentali per comprendere l'evoluzione galattica, essendo destinata a fondersi con la Via Lattea tra circa 4,5 miliardi di anni.",

        // Detail: Orion
        "orion.title": "Grande Nebulosa di Orione",
        "orion.subtitle": "M42",
        "orion.p1": "Uno dei gioielli più splendenti dell'astrofotografia, la Grande Nebulosa di Orione (M42) è un'immensa regione di formazione stellare visibile anche ad occhio nudo come una macchia nebbiosa nella 'spada' del Cacciatore. Posta a circa 1.350 anni luce dalla Terra, questa fornace cosmica è il luogo di nascita di migliaia di stelle.",
        "orion.p2": "Il cuore luminoso della nebulosa ospita il 'Trapezio', un ammasso giovane e compatto di stelle massicce la cui intensa radiazione ultravioletta scava cavità nel gas circostante e lo illumina dall'interno. Le complesse volute di gas e polveri mostrano una chimica ricca e dinamica, dove l'idrogeno ionizzato emette una caratteristica luce rosata mescolata alle tonalità bluastre della luce stellare riflessa dalle polveri.",
        "orion.p3": "Studiare M42 permette agli astronomi di osservare direttamente i dischi protoplanetari e i getti energetici emessi da stelle nascenti, offrendo una finestra privilegiata sui processi che hanno portato alla formazione del nostro stesso Sistema Solare.",

        // Detail: Orion Belt
        "orion_belt.title": "Cintura di Orione",
        "orion_belt.subtitle": "Alnitak, Alnilam e Mintaka",
        "orion_belt.p1": "L'asterismo più riconoscibile del cielo notturno, la Cintura di Orione, è composto da tre supergiganti blu allineate: Alnitak (a est), Alnilam (al centro) e Mintaka (a ovest). Immersa in un vasto complesso di nubi molecolari, questa regione rivela molto più delle sole lucenti stelle guida.",
        "orion_belt.p2": "Le lunghe esposizioni svelano le tenui nebulosità che pervadono l'intera area, residui di antiche esplosioni stellari e materiale primordiale non ancora condensato. La radiazione energetica di queste tre stelle caldissime e massicce interagisce costantemente con il mezzo interstellare, scolpendo le nubi e innescando processi di eccitazione chimica visibili solo attraverso la fotografia a lunga posa.",
        "orion_belt.p3": "Questa inquadratura ad ampio campo contestualizza la potente influenza gravitazionale e radiativa che questi astri esercitano sull'ambiente circostante, fungendo da fari nel cuore della costellazione.",

        // Detail: Orion Horse
        "orion_horse.title": "Orione e Testa di Cavallo",
        "orion_horse.subtitle": "Barnard 33 & M42",
        "orion_horse.p1": "Questa straordinaria composizione rivela due delle nebulose più celebri del Complesso Molecolare di Orione. La Testa di Cavallo (Barnard 33) si staglia come una silhouette scura di polvere densa e gas freddo, sovrapposta al bagliore rosso ionizzato dell'idrogeno (H-alpha) emesso dalla nebulosa IC 434 alle sue spalle. È una regione di attiva formazione stellare dove i venti stallari delle stelle massicce vicine stanno lentamente erodendo la nube oscura.",
        "orion_horse.p2": "Accanto ad essa risplende la Nebulosa Fiamma, la cui struttura intricata è tagliata da bande di polvere oscura che nascondono un ammasso di stelle giovani e calde al suo interno. L'energia ultravioletta di queste stelle, tra cui la brillante Alnitak (Zeta Orionis) - la stella più orientale della Cintura di Orione visibile nell'immagine - ionizza i gas circostanti facendoli brillare.",
        "orion_horse.p3": "L'immagine cattura la drammatica interazione tra radiazione ad alta energia e materia interstellare in una delle regioni più studiate e affascinanti del cielo invernale.",

        // Detail: Pleiades
        "pleiades.title": "Le Pleiadi",
        "pleiades.subtitle": "M45",
        "pleiades.p1": "Le Pleiadi (Messier 45), conosciute anche come 'Le Sette Sorelle', costituiscono l'ammasso aperto più famoso e luminoso del cielo. Situate nella costellazione del Toro a circa 440 anni luce di distanza, queste stelle blu caldissime (classe spettrale B) sono relativamente giovani, essendosi formate circa 100 milioni di anni fa.",
        "pleiades.p2": "L'aspetto più affascinante in astrofotografia è la nebulosa a riflessione azzurra che avvolge le stelle principali. Contrariamente a quanto creduto in passato, questa nebulosità non è il residuo della nube molecolare che ha generato l'ammasso, ma una nube di polvere interstellare indipendente che le Pleiadi stanno attraversando casualmente nel loro moto galattico. La luce delle stelle viene diffusa dalle particelle di polvere, creando il caratteristico alone etereo.",
        "pleiades.p3": "Contenente oltre 1.000 membri confermati, l'ammasso dominerà il cielo per altri 250 milioni di anni prima di disperdersi a causa delle interazioni gravitazionali con il resto della galassia.",

        // Detail: Rho Ophiuchi
        "rho.title": "Rho Ophiuchi",
        "rho.subtitle": "Complesso nebulare molecolare",
        "rho.p1": "Il complesso nebulare di Rho Ophiuchi è una delle regioni più colorate e spettacolari del cielo notturno, situato a soli 460 anni luce dalla Terra. Questa vicinanza lo rende una delle zone di formazione stellare più prossime al nostro Sistema Solare, permettendo un dettaglio osservativo eccezionale.",
        "rho.p2": "L'immagine è un tripudio di colori generati da processi fisici diversi: il rosso delle nebulose a emissione (idrogeno ionizzato dalla vicina stella Sigma Scorpii), il blu delle nebulose a riflessione che circondano la stella Rho Ophiuchi stessa, e il giallo-arancio della luce stellare riflessa dalle polveri più dense vicino ad Antares, la supergigante rossa nel cuore dello Scorpione.",
        "rho.p3": "Le vene scure che attraversano il campo sono 'Dark Nebulae', polveri così dense da bloccare completamente la luce retrostante. Questa regione è un laboratorio naturale per lo studio delle primissime fasi di vita stellare e dei dischi protoplanetari.",

        // Detail: Milky Way
        "milkyway.title": "La Via Lattea",
        "milkyway.subtitle": "Il centro galattico",
        "milkyway.p1": "Questa panoramica cattura il nucleo denso e luminoso della nostra galassia, la Via Lattea, come appare nei cieli estivi dell'emisfero boreale. Guardando verso la costellazione del Sagittario, osserviamo la regione più popolata della nostra casa cosmica, distante circa 26.000 anni luce, dove risiede il buco nero supermassiccio Sagittarius A*.",
        "milkyway.p2": "La banda luminosa è solcata da complesse 'Rift' oscure, come la Fenditura del Cigno: non vuoti di stelle, ma enormi nubi di polvere interstellare fredda che assorbono la luce visibile delle stelle retrostanti. Il contrasto tra le nubi stellari dorate del nucleo e le regioni oscure crea una struttura tridimensionale mozzafiato.",
        "milkyway.p3": "Catturare la Via Lattea richiede cieli estremamente bui e tecniche di post-produzione capaci di separare il segnale galattico dall'airglow atmosferico, rivelando la maestosità di un disco stellare che contiene tra i 100 e i 400 miliardi di stelle.",

    },
    en: {
        // Navigation (Global)
        "nav.home": "Home",
        "nav.gallery": "Gallery",
        "nav.software": "Software",
        "nav.tutorials": "Tutorials",
        "nav.about": "My Story",

        // Footer (Global)
        "footer.brand.desc": "Computer Engineering applied to Astronomy. Development of advanced technologies for scientific imaging.",
        "footer.nav.title": "Navigation",
        "footer.connect.title": "Connect",
        "footer.rights": "© 2026 Fabio Tempera. All rights reserved.",

        // Homepage - Hero
        "hero.subtitle": "Explore the universe through the art and science of astronomical imaging.",
        "hero.btn.gallery": "Visit Gallery",
        "hero.btn.scroll": "Scroll Down ↓",
        "hero.lang.switch": "Versione Italiana",

        // Homepage - Latest Shots
        "latest.title": "Latest Shots",
        "latest.subtitle": "A selection of my most recent deep sky works.",
        "latest.view_all": "View all →",
        "card.orion_horse": "Orion and Horsehead",
        "card.andromeda": "Andromeda Galaxy",
        "card.pleiades": "The Pleiades",

        // Homepage - Story
        "story.title": "My Story",
        "story.text": "My journey combines scientific rigor and artistic expression through three great passions: Computer Science, Photography, and Astrophotography. As a Computer Engineer with an Electronics background, I approach every challenge with an analytical and structured mindset, ranging from software development to data analysis. Photography is my medium to capture the moment, while astrophotography represents the perfect synthesis of technique and wonder, allowing me to explore and reveal the hidden beauty of the deep cosmos.",
        "story.btn": "Read Full Bio",

        // Homepage - Software
        "software.label": "PROPRIETARY SOFTWARE",
        "software.text": "A powerful image processing platform based on C++17 and Qt6. Designed for total control over linear raw data and scientific-grade results.",
        "software.li1": "• C++17 & Qt6 Architecture",
        "software.li2": "• Flexible MDI Management",
        "software.li3": "• AI Noise Reduction",
        "software.btn": "Discover TStar",

        // Homepage - Tutorials
        "tutorial.title": "Sharing Knowledge",
        "tutorial.text": "I firmly believe that sharing is the foundation of scientific and technical growth. In the Tutorials section, you will find in-depth guides on my acquisition and processing techniques, from raw file calibration to advanced use of TStar and other imaging software, to help you get the most out of your astronomical data.",
        "tutorial.btn": "Go to Tutorials",

        // Homepage - Partners
        "partner.title": "Partners",
        "partner.gaspra.title": "Gruppo Astrofili Pescaresi \"RA\"",
        "partner.gaspra.text": "A community of astronomy and astrophotography enthusiasts dedicated to research, knowledge sharing, and night sky observation from the Adriatic coast.",

        // Page: Gallery
        "gallery.title": "Photo Gallery",
        "gallery.desc": "A collection of my best deep sky shots. Each image is the result of hours of exposure and post-production.",
        "gallery.card.andromeda": "Andromeda Galaxy",
        "gallery.card.orion": "Orion Nebula",
        "gallery.card.orion_belt": "Orion's Belt",
        "gallery.card.orion_horse": "Orion and Horsehead",
        "gallery.card.pleiades": "The Pleiades",
        "gallery.card.rho": "Rho Ophiuchi",
        "gallery.card.milkyway": "Milky Way",

        // Page: About
        "about.header.title": "Behind the Lens",
        "about.header.subtitle": "Fabio Tempera (Ft2801)",
        "about.intro.p1": "Computer Engineer with a solid academic background in electronics engineering. My studies have enabled the acquisition of transversal technical skills and a structured analysis method, oriented towards solving complex problems.",
        "about.intro.p2": "During my training, I gained experience in software project management and data analysis, developing a propensity for efficient resource organization. My professional goal is to apply IT knowledge in structured business contexts, contributing to the development of efficient and scalable solutions.",
        "about.card.location": "Location",
        "about.card.location.val": "Pescara (PE), Italy",
        "about.card.born": "Born",
        "about.card.born.val": "August 2, 2001",
        "about.card.edu": "Education",
        "about.card.edu.val": "Master's Degree",
        "about.card.uni": "University",
        "about.card.uni.val": "UNIVPM - Ancona",
        "about.skills.title": "Astrophotography Skills",
        "about.skills.instr.title": "Instrumentation",
        "about.skills.instr.li1": "Telescopes & Optics",
        "about.skills.instr.li2": "Equatorial Mounts",
        "about.skills.instr.li3": "Deep Sky CCD/CMOS Cameras",
        "about.skills.instr.li4": "Narrowband & LRGB Filters",
        "about.skills.instr.li5": "Autoguiding Systems",
        "about.skills.soft.title": "Software",
        "about.skills.oss.title": "OSS Development",
        "about.skills.oss.text": "Active contributor for open source astronomical software. Development of C++ modules for image analysis and processing, and optimization of stacking and calibration algorithms.",
        "about.quote": "\"Combining software engineering skills with signal analysis, I developed TStar to bridge the gap between the complexity of astronomical data and visual beauty, making astrophotography an accessible science.\"",
        "about.btn.portfolio": "Web Portfolio",
        "about.btn.github": "GitHub Profile",

        // Page: Software
        "software.page.title": "TStar",
        "software.page.btn": "View on GitHub",
        "software.page.p1": "TStar stands out as a powerful image processing platform based on C++17 and Qt6 architecture, explicitly designed to meet the needs of modern astrophotography and produce scientific-grade results. The software offers an extremely flexible MDI (Multi-Document Interface) environment that ensures full compatibility with 8, 16, and 32-bit integer and floating-point FITS/XISF/TIFF files, allowing total control over linear raw data.",
        "software.page.p2": "The heart of TStar's workflow lies in its ability to transform linear signals into visible images with extreme precision: thanks to cutting-edge tools such as Generalized Hyperbolic Stretch (GHS) and ArcSinh Stretch, it is possible to independently manage shadows, midtones, and highlights, preserving saturation and fine details. Color fidelity is ensured by Photometric Color Calibration (PCC), which astrometrically solves the image and calibrates colors based on Gaia and APASS star catalogs, supported by effective tools for removing light gradients and background casts.",
        "software.page.p3": "A distinctive aspect of TStar is the native integration of AI-based technologies for image restoration. The Cosmic Clarity module uses Deep Learning for noise reduction and sharpening, while compatibility with StarNet++ and GraXpert facilitates complex operations such as star removal and advanced gradient extraction. Completing the technical picture are advanced features for narrowband composition (with customizable artistic palettes), a powerful PixelMath engine for arithmetic operations between images, and a sophisticated masking system that allows isolation of luminance, chrominance, or specific stellar features for high-precision localized interventions.",

        // Page: Tutorials
        "tutorials.title": "Tutorials & Resources",
        "tutorials.desc": "Practical guides to improve your acquisition and processing techniques.",
        "tutorials.card.postproc.title": "Post Processing Guide",
        "tutorials.card.postproc.desc": "Advanced processing techniques for astrophotography.",
        "tutorials.card.postproc.btn": "Download Guide (PDF)",
        "tutorials.card.tstar.title": "TStar User Manual",
        "tutorials.card.tstar.desc": "Official documentation for TStar software.",
        "tutorials.card.tstar.btn": "Download Manual (PDF)",

        // Detail Pages Common
        "detail.back": "← Back to Gallery",
        "detail.story.title": "The Story",
        "detail.tech.title": "Technical Data",
        "detail.label.camera": "Camera:",
        "detail.label.mount": "Mount:",
        "detail.label.integration": "Integration:",
        "detail.label.software": "Software:",
        "detail.label.telescope": "Telescope:",
        "detail.label.date": "Date:",

        // Detail: Andromeda
        "andromeda.title": "Andromeda Galaxy",
        "andromeda.subtitle": "M31",
        "andromeda.p1": "One of the most iconic deep-sky objects, the Andromeda Galaxy (Messier 31) dominates the Local Group along with our Milky Way. Located about 2.5 million light-years away, M31 is a majestic barred spiral extending over 220,000 light-years in diameter, containing roughly one trillion stars.",
        "andromeda.p2": "Its structure reveals intricate lanes of dark dust winding around a bright core dense with ancient yellow stars, while the outer regions glow with the blue light of young star clusters in formation. The image also clearly shows its two main satellite galaxies: M32, a compact elliptical located right above the disk, and M110, a more diffuse dwarf elliptical positioned below the arms of the main spiral.",
        "andromeda.p3": "The observation and analysis of Andromeda are fundamental to understanding galactic evolution, as it is destined to merge with the Milky Way in about 4.5 billion years.",

        // Detail: Orion
        "orion.title": "Great Orion Nebula",
        "orion.subtitle": "M42",
        "orion.p1": "One of the brightest jewels of astrophotography, the Great Orion Nebula (M42) is an immense star-forming region visible even to the naked eye as a fuzzy patch in the Hunter's 'sword'. Located about 1,350 light-years from Earth, this cosmic furnace is the birthplace of thousands of stars.",
        "orion.p2": "The bright heart of the nebula hosts the 'Trapezium', a young and compact cluster of massive stars whose intense ultraviolet radiation carves cavities in the surrounding gas and illuminates it from within. The complex swirls of gas and dust show a rich and dynamic chemistry, where ionized hydrogen emits a characteristic pinkish light mixed with the bluish hues of starlight reflected by dust.",
        "orion.p3": "Studying M42 allows astronomers to directly observe protoplanetary disks and energetic jets emitted by nascent stars, offering a privileged window into the processes that led to the formation of our own Solar System.",

        // Detail: Orion Belt
        "orion_belt.title": "Orion's Belt",
        "orion_belt.subtitle": "Alnitak, Alnilam, and Mintaka",
        "orion_belt.p1": "The most recognizable asterism in the night sky, Orion's Belt, is composed of three aligned blue supergiants: Alnitak (east), Alnilam (center), and Mintaka (west). Immersed in a vast complex of molecular clouds, this region reveals much more than just the bright guide stars.",
        "orion_belt.p2": "Long exposures reveal the faint nebulosity that pervades the entire area, remnants of ancient stellar explosions and primordial material not yet condensed. The energetic radiation of these three very hot and massive stars constantly interacts with the interstellar medium, sculpting the clouds and triggering chemical excitation processes visible only through long-exposure photography.",
        "orion_belt.p3": "This wide-field view contextualizes the powerful gravitational and radiative influence these stars exert on the surrounding environment, acting as beacons in the heart of the constellation.",

        // Detail: Orion Horse
        "orion_horse.title": "Orion and Horsehead",
        "orion_horse.subtitle": "Barnard 33 & M42",
        "orion_horse.p1": "This extraordinary composition reveals two of the most famous nebulae in the Orion Molecular Complex. The Horsehead (Barnard 33) stands out as a dark silhouette of dense dust and cold gas, superimposed on the ionized red glow of hydrogen (H-alpha) emitted by the nebula IC 434 behind it. It is a region of active star formation where stellar winds from nearby massive stars are slowly eroding the dark cloud.",
        "orion_horse.p2": "Beside it shines the Flame Nebula, whose intricate structure is cut by bands of dark dust hiding a cluster of young, hot stars within. The ultraviolet energy of these stars, including the bright Alnitak (Zeta Orionis) - the easternmost star of Orion's Belt visible in the image - ionizes the surrounding gases, causing them to glow.",
        "orion_horse.p3": "The image captures the dramatic interaction between high-energy radiation and interstellar matter in one of the most studied and fascinating regions of the winter sky.",

        // Detail: Pleiades
        "pleiades.title": "The Pleiades",
        "pleiades.subtitle": "M45",
        "pleiades.p1": "The Pleiades (Messier 45), also known as 'The Seven Sisters', form the most famous and brightest open cluster in the sky. Located in the constellation Taurus about 440 light-years away, these very hot blue stars (spectral type B) are relatively young, having formed about 100 million years ago.",
        "pleiades.p2": "The most fascinating aspect in astrophotography is the blue reflection nebula that surrounds the main stars. Contrary to past beliefs, this nebulosity is not the remnant of the molecular cloud that generated the cluster, but an independent cloud of interstellar dust that the Pleiades are passing through casually in their galactic motion. The starlight is scattered by dust particles, creating the characteristic ethereal halo.",
        "pleiades.p3": "Containing over 1,000 confirmed members, the cluster will dominate the sky for another 250 million years before dispersing due to gravitational interactions with the rest of the galaxy.",

        // Detail: Rho Ophiuchi
        "rho.title": "Rho Ophiuchi",
        "rho.subtitle": "Molecular Cloud Complex",
        "rho.p1": "The Rho Ophiuchi cloud complex is one of the most colorful and spectacular regions of the night sky, located just 460 light-years from Earth. This proximity makes it one of the closest star-forming zones to our Solar System, allowing for exceptional observational detail.",
        "rho.p2": "The image is a riot of colors generated by different physical processes: the red of emission nebulae (hydrogen ionized by the nearby star Sigma Scorpii), the blue of reflection nebulae surrounding the star Rho Ophiuchi itself, and the yellow-orange of starlight reflected by denser dust near Antares, the red supergiant in the heart of Scorpius.",
        "rho.p3": "The dark veins crossing the field are 'Dark Nebulae', dust so dense it completely blocks the background light. This region is a natural laboratory for studying the very early stages of stellar life and protoplanetary disks.",

        // Detail: Milky Way
        "milkyway.title": "The Milky Way",
        "milkyway.subtitle": "The Galactic Center",
        "milkyway.p1": "This panorama captures the dense and bright core of our galaxy, the Milky Way, as it appears in the summer skies of the Northern Hemisphere. Looking towards the constellation Sagittarius, we observe the most populated region of our cosmic home, about 26,000 light-years away, where the supermassive black hole Sagittarius A* resides.",
        "milkyway.p2": "The bright band is furrowed by complex dark 'Rifts', like the Cygnus Rift: not voids of stars, but huge clouds of cold interstellar dust that absorb the visible light of background stars. The contrast between the golden star clouds of the core and the dark regions creates a breathtaking three-dimensional structure.",
        "milkyway.p3": "Capturing the Milky Way requires extremely dark skies and post-production techniques capable of separating the galactic signal from atmospheric airglow, revealing the majesty of a stellar disk containing between 100 and 400 billion stars.",

    }
};
