const assets = {
  homeBackground: "assets/main page/main background.png",
  homeCards: {
    sutra: "assets/main page/platform sutra block.png",
    poetry: "assets/main page/cold mountain poemtry block.png",
    drama: "assets/main page/drama block.png",
  },
};

const works = {
  sutra: {
    route: "sutra",
    navLabel: "Sutra",
    accent: "#0d477b",
    heroImage: "assets/platform sutra/main background.png",
    detailImage: "assets/platform sutra/analysis background.png",
    citationImage: "assets/platform sutra/citation background.png",
    title: "The Platform Sutra of the Sixth Patriarch",
    kicker: "Sutra",
    subtitle: "Sudden Enlightenment and the Clarity of the Empty Mind",
    summary:
      "This page traces Huineng's transformation from ordinary layman to awakened patriarch through three phases of sudden insight and spiritual transmission.",
    pathTitle: "Huineng's Path to Enlightenment",
    pathSubtitle: "Three Phases of Sudden Awakening",
    aboutTitle: "About This Sutra",
    about:
      "A foundational Chan Buddhist text exploring how sudden awakening transforms identity and perception.",
    citation:
      "Bodhi originally has no tree; the bright mirror also has no stand.",
    themes: ["Empty Mind", "Sudden Awakening", "Non-Attachment", "No-Thought", "Identity Transformation"],
    phases: [
      {
        title: "Hearing the Sutra",
        image: "assets/platform sutra/section1.png",
        short: "A passing line from the Diamond Sutra awakens Huineng's insight.",
        quote: "When the mind is nowhere attached, the true mind appears.",
        literary:
          "The opening moment presents awakening as immediate recognition rather than gradual accumulation. A single phrase exposes the mind's habit of clinging.",
        psychological:
          "Huineng's insight begins when attention releases its fixed object. The mind becomes responsive, not possessive.",
      },
      {
        title: "No-Thought",
        image: "assets/platform sutra/section2.png",
        short: "Huineng rejects attachment to form and reveals the mind's original clarity.",
        quote: "Originally there is not a single thing; where can dust alight?",
        literary:
          "The famous verse redefines enlightenment as freedom from attachment to external forms. Clarity arises when the mind no longer clings to appearances.",
        psychological:
          "Non-attachment is presented as a cognitive shift: thoughts still arise, but the awakened mind does not identify with them.",
      },
      {
        title: "Transmission",
        image: "assets/platform sutra/section3.png",
        short: "The robe and Dharma are transmitted; the disciple becomes the Sixth Patriarch.",
        quote: "The Dharma is entrusted where insight is alive.",
        literary:
          "Transmission turns private insight into lineage. The robe becomes a sign of recognition, but the text warns against mistaking the sign for awakening itself.",
        psychological:
          "Identity changes when recognition is internalized. Huineng is no longer defined by origin, status, or social expectation.",
      },
    ],
  },
  poetry: {
    route: "poetry",
    navLabel: "Poetry",
    accent: "#184f85",
    heroImage: "assets/cold mountain poems/main background.png",
    detailImage: "assets/cold mountain poems/analyze background.png",
    citationImage: "assets/cold mountain poems/citation background.png",
    title: "Cold Mountain Poems",
    kicker: "Poetry",
    subtitle: "Tranquility, Paradox, and the Fluid Self",
    summary:
      "This page traces Cold Mountain's movement away from worldly life through three poetic phases of withdrawal, unstable tranquility, and shifting identity.",
    pathTitle: "Cold Mountain's Path of Detachment",
    pathSubtitle: "Three Phases of Poetic Withdrawal",
    aboutTitle: "About These Poems",
    about:
      "Cold Mountain's collected poems reflect a life of retreat, irreverence, and inward seeing, where paradox becomes the most truthful language of freedom.",
    citation:
      "The world is a meadow of dust; I walk alone, yet still hear its footsteps.",
    themes: ["Social Withdrawal", "Tranquil Mind", "Unstable Mind", "Paradox", "Fluid Identity"],
    phases: [
      {
        title: "Withdrawal",
        image: "assets/cold mountain poems/section1.png",
        short: "Cold Mountain turns away from worldly ambition and social life.",
        quote: "I left the dusty road and found a path of stone.",
        literary:
          "Withdrawal is not pure escape. The poems stage retreat as a chosen distance that clarifies how deeply society shapes desire.",
        psychological:
          "Detachment begins by changing the field of attention. The speaker steps away from praise, rank, and comparison.",
      },
      {
        title: "Paradoxical Tranquility",
        image: "assets/cold mountain poems/section2.png",
        short: "Peace appears, yet the mind remains unstable and reflective.",
        quote: "Among the cliffs I sit in silence, yet the dust of the world still follows the heart.",
        literary:
          "The poems blend serenity with irony and emotional fluctuation. Cold Mountain's voice shows the coexistence of clarity and confusion.",
        psychological:
          "Detachment here is not fixed peace but an oscillation between calm, memory, and residual social attachment.",
      },
      {
        title: "Fluid Identity",
        image: "assets/cold mountain poems/section3.png",
        short: "Poet, recluse, sage, and fool merge into a shifting self.",
        quote: "Ask who lives on Cold Mountain; the answer changes with the wind.",
        literary:
          "The speaker refuses a stable role. This shifting persona lets the poem resist both worldly identity and solemn spiritual performance.",
        psychological:
          "Freedom appears as loosened self-definition. The mind is less bound by a single story about who it must be.",
      },
    ],
  },
  drama: {
    route: "drama",
    navLabel: "Drama",
    accent: "#8d2f30",
    heroImage: "assets/drama/main background.png",
    detailImage: "assets/drama/analyze background.png",
    citationImage: "assets/drama/citebackground.png",
    title: "Chan Master Yu Has a Dream of Cuixiang",
    kicker: "Drama",
    subtitle: "Desire, Illusion, and Delayed Awakening",
    summary:
      "This page traces Chan Master Yu's psychological journey through dream, desire, rebirth, and eventual yet delayed realization.",
    pathTitle: "Yu's Psychological Journey",
    pathSubtitle: "Six Phases of Delusion and Awakening",
    aboutTitle: "About This Drama",
    about:
      "A seminal Chan Buddhist drama text exploring how delusion arises, identity shifts, and awakening is forever postponed until the self can see its own construction.",
    citation:
      "In dream, he chased what he loved. In waking, he found what he lost.",
    themes: ["Desire", "Illusion", "Reincarnation", "Identity Transformation", "Delayed Awakening"],
    phases: [
      {
        title: "Cultivation",
        image: "assets/drama/phase1.png",
        short: "Yu begins as a Chan monk committed to practice.",
        quote: "The mind that seeks still carries the seed of desire.",
        literary:
          "The drama opens with spiritual discipline, but the calm surface already contains unresolved attachment.",
        psychological:
          "Yu's identity depends on being a monk. That identity is stable, but it is also fragile because it has not yet faced temptation.",
      },
      {
        title: "Illusion Begins",
        image: "assets/drama/phase2.png",
        short: "Reality becomes unstable as dream logic enters the plot.",
        quote: "A dream opens where certainty closes.",
        literary:
          "Dream structure loosens ordinary causality. The drama uses theatrical illusion to question what counts as real.",
        psychological:
          "Perception becomes unreliable when hidden desire reshapes the world into an image of what the mind wants.",
      },
      {
        title: "Desire Forms",
        image: "assets/drama/phase3.png",
        short: "Attachment deepens and begins to organize Yu's perception.",
        quote: "What the eye follows, the heart invents.",
        literary:
          "Desire is staged as movement: the plot advances because Yu cannot remain still before the object of longing.",
        psychological:
          "Attachment narrows attention. Yu interprets events through craving, turning uncertainty into obsession.",
      },
      {
        title: "Identity Collapse",
        image: "assets/drama/phase4.png",
        short: "Yu is reborn as Cuixiang.",
        quote: "From a Chan master to a brothel woman, identity dissolves like a dream within a dream.",
        literary:
          "This pivotal turning point reveals the impermanence of self. Yu's rebirth as Cuixiang exposes how identity is a construct shaped by conditions, role, and perception.",
        psychological:
          "Yu's ego-identity collapses under the pull of desire and delusion. The psyche projects itself outward so completely that the dream self becomes indistinguishable from the waking self.",
      },
      {
        title: "Karmic Loop",
        image: "assets/drama/phase5.png",
        short: "Desire repeats across lives and roles.",
        quote: "What is not understood returns wearing another face.",
        literary:
          "The drama turns repetition into structure. Each return shows that desire survives the collapse of one identity.",
        psychological:
          "The mind repeats unresolved patterns until it recognizes them as patterns rather than destiny.",
      },
      {
        title: "Delayed Realization",
        image: "assets/drama/phase6.png",
        short: "Insight arrives too late, after the dream has already done its work.",
        quote: "Awakening comes, but never at the hour the self expects.",
        literary:
          "Realization is postponed to preserve dramatic tension. The delay makes enlightenment feel less like escape and more like recognition after loss.",
        psychological:
          "The awakened mind does not erase the dream. It understands how the dream was built from attachment, fear, and longing.",
      },
    ],
  },
};

let state = {
  route: "home",
  phaseIndex: 0,
};

const app = document.querySelector("#app");
const navigationButtons = document.querySelectorAll("[data-route]");

function cssImage(path) {
  return `url('${path}')`;
}

function getRouteFromHash() {
  const hash = window.location.hash.replace("#", "");
  const [route, phase] = hash.split("-");

  if (works[route]) {
    return {
      route,
      phaseIndex: Math.max(0, Number.parseInt(phase ?? "1", 10) - 1),
    };
  }

  if (route === "about" || route === "method") {
    return { route, phaseIndex: 0 };
  }

  return { route: "home", phaseIndex: 0 };
}

function setRoute(route, phaseIndex = 0) {
  const hash = works[route] ? `${route}-${phaseIndex + 1}` : route;
  state = { route, phaseIndex };

  const nextHash = hash === "home" ? "" : `#${hash}`;
  if (window.location.hash !== nextHash) {
    window.location.hash = nextHash;
  } else {
    render();
  }
}

function updateActiveNavigation() {
  navigationButtons.forEach((button) => {
    const isActive = button.dataset.route === state.route;
    button.classList.toggle("is-active", isActive);
  });
}

function renderHero({ image, kicker, title, subtitle, summary, question, accent, compact = false }) {
  return `
    <section class="hero ${compact ? "is-compact" : ""}" style="--hero-image: ${cssImage(image)}; --active: ${accent ?? "var(--blue)"}">
      <div>
        ${kicker ? `<p class="hero-kicker">${kicker}</p>` : ""}
        <h1>${title}</h1>
        ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ""}
        ${question ? `<p class="home-question">${question}</p>` : ""}
        ${summary ? `<p class="summary">${summary}</p>` : ""}
      </div>
    </section>
  `;
}

function renderHome() {
  app.innerHTML = `
    ${renderHero({
      image: assets.homeBackground,
      title: "The Harmony & Dissonance of Non-Attachment",
      subtitle: "A Psychological Exploration of Mind, Desire, and Enlightenment in Chinese Zen Texts",
      question: "If enlightenment requires non-attachment, why does the human mind remain attached?",
      accent: "#0d477b",
    })}
    <section class="content-shell">
      <p class="intro-text">
        This project investigates the theme of non-attachment across three classic Chinese Zen texts,
        each revealing a distinct psychological landscape of the mind's struggle toward liberation.
        Through comparative reading and conceptual analysis, the project traces the tension between
        awakening and attachment at the heart of human experience.
      </p>
      <div class="work-grid" aria-label="Featured works">
        ${Object.values(works)
          .map(
            (work) => `
              <button class="work-card" type="button" data-route="${work.route}" style="--active: ${work.accent}">
                <img src="${assets.homeCards[work.route]}" alt="${work.title}" />
                <span>Enter ${work.navLabel}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderWork(work) {
  const phase = work.phases[state.phaseIndex] ?? work.phases[0];
  state.phaseIndex = work.phases.indexOf(phase);

  app.innerHTML = `
    ${renderHero({
      image: work.heroImage,
      kicker: work.kicker,
      title: work.title,
      subtitle: work.subtitle,
      summary: work.summary,
      accent: work.accent,
      compact: true,
    })}
    <section class="content-shell" style="--active: ${work.accent}">
      <p class="section-kicker">${work.pathTitle}</p>
      <div class="work-layout">
        <div>
          <div class="phase-track" style="--phase-count: ${Math.min(work.phases.length, 6)}">
            ${work.phases
              .map(
                (item, index) => `
                  <button class="phase-card ${index === state.phaseIndex ? "is-active" : ""}" type="button" data-phase="${index}">
                    <span class="phase-number">${index + 1}</span>
                    <img src="${item.image}" alt="${item.title}" />
                    <h3>${item.title}</h3>
                    <p>${item.short}</p>
                    <small>View details</small>
                  </button>
                `,
              )
              .join("")}
          </div>

          <div class="about-row">
            <div class="citation-card" style="--citation-image: ${cssImage(work.citationImage)}">
              "${work.citation}"<br />
              <small>- ${work.title}</small>
            </div>
            <div class="about-strip" style="--citation-image: ${cssImage(work.citationImage)}">
              <h3>${work.aboutTitle}</h3>
              <p>${work.about}</p>
            </div>
          </div>
        </div>

        <article class="detail-panel" style="--detail-image: ${cssImage(work.detailImage)}">
          <p class="phase-label">Phase ${state.phaseIndex + 1} of ${work.phases.length}</p>
          <h2>${phase.title}</h2>
          <p>${phase.short}</p>
          <blockquote class="quote">${phase.quote}</blockquote>
          <div class="meaning-block">
            <article>
              <h3>Literary Meaning</h3>
              <p>${phase.literary}</p>
            </article>
            <article>
              <h3>Psychological Interpretation</h3>
              <p>${phase.psychological}</p>
            </article>
          </div>
        </article>

        <aside class="theme-panel">
          <h3>Key Themes</h3>
          <ul class="theme-list">
            ${work.themes
              .map(
                (theme, index) => `
                  <li>
                    <span class="theme-icon">${index + 1}</span>
                    <span>${theme}</span>
                  </li>
                `,
              )
              .join("")}
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function renderTextPage(type) {
  const isAbout = type === "about";

  app.innerHTML = `
    ${renderHero({
      image: assets.homeBackground,
      kicker: isAbout ? "About" : "Method",
      title: isAbout ? "A Comparative Study of Attachment" : "Reading Method",
      subtitle: isAbout
        ? "How three Zen works stage the same inner problem in different forms."
        : "A literary and psychological approach to Zen texts.",
      accent: "#0d477b",
      compact: true,
    })}
    <section class="text-page">
      <article class="text-panel">
        ${
          isAbout
            ? `
              <h2>About the Project</h2>
              <p>
                This website compares a sutra, a poetry collection, and a drama to ask why non-attachment
                remains so difficult even when enlightenment is described as clear, immediate, or already present.
              </p>
              <p>
                Each work is organized as a sequence of clickable phases. The structure highlights how the mind
                moves from attachment toward insight, but also how desire, memory, role, and identity interrupt that movement.
              </p>
            `
            : `
              <h2>Method</h2>
              <p>
                The reading method combines close literary analysis with psychological interpretation. Each section
                identifies a key narrative or poetic moment, then explains how that moment represents a state of mind.
              </p>
              <p>
                The comparison is not meant to flatten the texts into one argument. Instead, it shows how sudden
                enlightenment, poetic withdrawal, and dramatic delusion each expose a different pressure point in the problem of attachment.
              </p>
            `
        }
      </article>
    </section>
  `;
}

function render() {
  updateActiveNavigation();
  document.documentElement.style.setProperty("--active", works[state.route]?.accent ?? "#0d477b");

  if (state.route === "home") {
    renderHome();
  } else if (works[state.route]) {
    renderWork(works[state.route]);
  } else {
    renderTextPage(state.route);
  }

  app.focus({ preventScroll: true });
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  const phaseButton = event.target.closest("[data-phase]");

  if (phaseButton) {
    const phaseIndex = Number.parseInt(phaseButton.dataset.phase, 10);
    setRoute(state.route, phaseIndex);
    return;
  }

  if (routeButton) {
    setRoute(routeButton.dataset.route);
  }
});

window.addEventListener("hashchange", () => {
  state = getRouteFromHash();
  render();
});

state = getRouteFromHash();
render();
