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
    defaultPhaseIndex: 1,
    heroImage: "assets/platform sutra/main background.png",
    detailImage: "assets/platform sutra/analysis background.png",
    citationImage: "assets/platform sutra/citation background.png",
    title: "The Platform Sutra of the Sixth Patriarch",
    kicker: "Sutra",
    subtitle: "Sudden Enlightenment and the Clarity of the Empty Mind",
    summary:
      "This page traces Huineng's transformation from ordinary layman to the Sixth Patriarch through three phases of sudden insight, non-attachment, and mind-to-mind transmission.",
    pathTitle: "Huineng's Path to Enlightenment",
    pathSubtitle: "Three Phases of Sudden Awakening",
    aboutTitle: "About This Sutra",
    about:
      "A foundational Chan Buddhist text exploring how sudden awakening transforms identity, perception, and attachment. Huineng's teaching rejects gradual purification and reveals enlightenment as the direct realization of the mind's original clarity.",
    citation:
      "Bodhi originally has no tree;\nThe mirror also has no stand.\nBuddha nature is always clean and pure;\nWhere is there room for dust?",
    themes: [
      { label: "Empty Mind", phases: [1] },
      { label: "Sudden Awakening", phases: [0, 2] },
      { label: "Non-Attachment", phases: [0, 1] },
      { label: "No-Thought", phases: [1] },
      { label: "Identity Transformation", phases: [2] },
      { label: "Mind-to-Mind Transmission", phases: [2] },
    ],
    overview: [
      {
        title: "Meditation and Wisdom as Non-Dual",
        text:
          "Meditation and wisdom are a unity, not two things. Enlightenment is not achieved after practice; instead, enlightenment occurs simultaneously with practice.",
      },
      {
        title: "Straightforward Mind",
        text:
          "The straightforward mind is direct, non-clinging, and non-obstructive. It allows thoughts to flow freely without stagnation.",
      },
      {
        title: "No-Thought and True Reality",
        text:
          "No-thought is not mental blankness. It means separating from the dualism that produces passions while thinking from the original nature of True Reality.",
      },
      {
        title: "Non-Attachment to Truth Itself",
        text:
          "Huineng warns that clinging to truth, doctrine, or disputation can itself become a form of attachment.",
      },
    ],
    phases: [
      {
        title: "Hearing the Sutra",
        image: "assets/platform sutra/section1.png",
        short: "A passing line from the Diamond Sutra awakens Huineng's mind.",
        scene:
          "Huineng's journey of enlightenment begins when he hears the Diamond Sutra recited by a disciple of the Fifth Patriarch.",
        quote: "Upon hearing it my mind became clear and I was awakened.",
        literary:
          "The diction \"clear\" and \"awakened\" suggests Huineng's intrinsic tendency toward enlightenment. The purifying effect of hearing the Diamond Sutra reveals that auditory exposure to Buddhist literature is as important as reading.",
        psychological:
          "Even though Huineng is illiterate, he can still understand the Dharma through hearing. Enlightenment therefore appears not as textual mastery, but as a sudden transformation of perception.",
        evidence: {
          label: "View More Evidence",
          quote:
            "Although people from the south and people from the north differ, there is no north and south in Buddha nature.",
          analysis:
            "By denying the difference between \"north and south in Buddha nature,\" Huineng demonstrates non-attachment from geographical stereotypes and social discrimination.",
        },
      },
      {
        title: "No-Thought",
        image: "assets/platform sutra/section2.png",
        short: "Huineng rejects attachment to form and reveals the mind's original clarity.",
        scene:
          "Huineng responds to Shenxiu's gradualist verse with a radically different understanding of enlightenment.",
        quote:
          "Bodhi originally has no tree,\nThe mirror also has no stand.\nBuddha nature is always clean and pure;\nWhere is there room for dust?",
        literary:
          "The repetition of \"no\" denies the physical form of the body and mind, suggesting Huineng's understanding of non-attachment. His realization of the intrinsic purity of Buddha nature liberates his spirit from constant spiritual cleansing.",
        psychological:
          "No-thought is not the absence of mental activity, but thinking without attachment to form and dualism. The awakened mind does not suppress thought; it no longer clings to thought.",
        comparison: {
          label: "Compare with Shenxiu",
          title: "Shenxiu's Verse",
          quote:
            "The body is the Bodhi tree,\nThe mind is like a clear mirror.\nAt all times we must strive to polish it,\nAnd must not let the dust collect.",
          analysis:
            "Shenxiu imagines enlightenment as gradual cleansing. The image of the Bodhi tree and the clear mirror implies that spiritual clarity depends on continuous polishing. This distances him from Huineng's model of sudden enlightenment.",
          contrast: [
            "Shenxiu: polish the mirror -> gradual cultivation",
            "Huineng: no tree, no stand -> sudden realization",
          ],
        },
      },
      {
        title: "Transmission",
        image: "assets/platform sutra/section3.png",
        short: "The robe and Dharma are transmitted; Huineng becomes the Sixth Patriarch.",
        scene:
          "At midnight, the Fifth Patriarch expounds the Diamond Sutra to Huineng. Hearing it once, Huineng is immediately awakened and receives the Dharma.",
        quote: "Hearing it but once, I was immediately awakened, and that night I received the Dharma.",
        literary:
          "Huineng's \"immediate awakening\" reinforces the Chan emphasis on the sudden and non-gradual nature of enlightenment. The statement that \"none of the others knew\" underscores that awakening is an internal transformation inaccessible to external verification.",
        psychological:
          "Although the robe introduces lineage and legitimacy, the Dharma is transmitted \"mind-to-mind.\" Enlightenment is not the acquisition of knowledge, but an ineffable moment of realization inspired by the teaching of the Dharma.",
      },
    ],
  },
  poetry: {
    route: "poetry",
    navLabel: "Poetry",
    accent: "#184f85",
    defaultPhaseIndex: 1,
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
      "Cold Mountain's poems reflect a life of retreat, irony, and inward seeing. They present non-attachment not as stable peace, but as an oscillation between clarity, social withdrawal, emotional unrest, and sudden moments of insight.",
    citation:
      "My mind's the autumn moon,\nshining in the blue-green pool,\nreflecting glistening, clear and pure.",
    finalInsight:
      "Unlike Huineng's sudden awakening, Hanshan's non-attachment is lyrical, unstable, and repeatedly tested by memory, poverty, irony, and grief.",
    themes: [
      { label: "Social Withdrawal", phases: [0] },
      { label: "Tranquil Mind", phases: [1] },
      { label: "Unstable Mind", phases: [2] },
      { label: "Paradox", phases: [1] },
      { label: "Fluid Identity", phases: [2] },
    ],
    overview: [
      {
        title: "Moon as Reflective Mind",
        text:
          "The moon is not only an external object, but the pivot of Hanshan's heart: a figure for clarified, non-dual perception.",
      },
      {
        title: "Ironic Detachment from Society",
        text:
          "Hanshan's laughter shows that he recognizes social hierarchy without becoming emotionally trapped by it.",
      },
      {
        title: "Critique of False Paths",
        text:
          "Hanshan rejects externalized or goal-oriented paths to enlightenment, including social prestige, doctrinal accumulation, and alchemical pursuit.",
      },
      {
        title: "Instability of Enlightenment",
        text:
          "Hanshan's clarity is never final; it coexists with anxiety, grief, and renewed retreat.",
      },
    ],
    phases: [
      {
        title: "Withdrawal",
        image: "assets/cold mountain poems/section1.png",
        short: "Cold Mountain turns away from worldly ambition and social life.",
        scene:
          "Hanshan reflects on a life once misguided by secular pursuits, learning, alchemy, and external quests for immortality.",
        quote:
          "Today I'm on my way\nhome to Cold Mountain.\nThere, I'll bed down in the creek,\njust to wash out my ears.",
        literary:
          "The metaphor \"wandered a million miles\" represents a prolonged and strenuous search, suggesting ascetic yet misdirected effort. His attempts at alchemical elixirs and memorized writings reveal the futility of attaining enlightenment through goal-oriented extrinsic approaches.",
        psychological:
          "The return to Cold Mountain marks both a physical and spiritual reorientation. \"Washing out my ears\" signifies not just purification, but the deliberate clearing away of inherited attachment to doctrines and distracting thoughts.",
        evidenceItems: [
          {
            label: "Poem 17: Ironic Detachment",
            quote:
              "Now she laughs that I don't have money.\nShe laughs that I've fallen behind.\nI laugh that she's gotten ahead.\nBoth of us laughing, no stopping us.",
            analysis:
              "Hanshan and the landlady's mutual laughter suggest the coexistence of two states: the pursuit of wealth and social status, and the denial of restraint by secular values without a complete withdrawal from society.",
          },
          {
            label: "Poem 37: False Paths",
            quote:
              "They throw out the gold and haul away the straw.\nBut fooling other folks, they've fooled themselves.",
            analysis:
              "Hanshan critiques people's delusion in being attached to external signs, forms, and practices of enlightenment.",
          },
        ],
      },
      {
        title: "Paradoxical Tranquility",
        image: "assets/cold mountain poems/section2.png",
        short: "Peace appears, yet the mind remains unstable and reflective.",
        scene:
          "Hanshan describes his mind through the image of the autumn moon reflected in a clear pool.",
        quote:
          "My mind's the autumn moon,\nshining in the blue-green pool,\nreflecting glistening, clear and pure . . .\nThere's nothing to compare it to,\nwhat else can I say?",
        literary:
          "The narrator compares his mind to the autumn moon, suggesting an aesthetic and philosophical serenity in Zen. The \"blue-green pool\" and \"glistening, clear, and pure\" represent mental transparency, in which the mind reflects truth without distortion.",
        psychological:
          "His mind is not a fixed inner entity, but a reflective non-dual awareness. The rhetorical question \"what else can I say?\" reflects both contentment and the ineffability of this state, implying that such clarity exceeds conceptual articulation.",
        evidenceItems: [
          {
            label: "Poem 7: Clarity and Mystery",
            quote:
              "Alone, its spirit naturally comes clear.\nSwallowed in emptiness in this cave of darkest mystery,\nbecause of the finger pointing, I saw the moon.\nThat moon became the pivot of my heart.",
            analysis:
              "The antithesis of \"perfect light\" and \"darkest mystery\" reveals ever-changing mental images, suggesting a state of non-attachment that reflects transformation clearly and truthfully.",
          },
          {
            label: "Poem 41: Poverty and Openness",
            quote:
              "Frost and dew can soak through thatch,\nbut the moon flowers white\nthrough the window made of old bottles;\nI'm poor, but I can build more windows now.",
            analysis:
              "Hanshan presents the paradoxical relationship between economic deprivation and intellectual richness. The transition from physical discomfort to the beauty of moonlight reveals detachment from material poverty.",
          },
          {
            label: "Poem 82: Settled Flow",
            quote:
              "I'm settled in to watch this universe flow by.\nBeing, and nothingness, one dharma before me.",
            analysis:
              "The juxtaposition between his settled stillness and the universe's dynamic flow suggests calm openness in allowing the world to change.",
          },
        ],
      },
      {
        title: "Fluid Identity",
        image: "assets/cold mountain poems/section3.png",
        short: "Poet, recluse, sage, and grieving human merge into a shifting self.",
        scene:
          "Hanshan confronts mortality, loss, family, friendship, and the emotional weight of impermanence.",
        quote:
          "Why's my heart always, always spinning?\nA human's life is just a mushroom's life,\nfinished in a morning.",
        literary:
          "The rhetorical question \"why is my heart always, always spinning\" represents restlessness and mental turmoil. His recognition of the ephemeral nature of human life does not immediately lead to non-attachment.",
        psychological:
          "Instead, Hanshan experiences unbearable frustration and misery upon contemplating the inevitable loss of his family and friends. Enlightenment therefore appears as a dynamic and unstable mental state, not a permanent condition of calm.",
        evidenceItems: [
          {
            label: "Poem 52: Readerly Insight",
            quote:
              "When a sage reads a poem of mine,\nhis face breaks into a great big smile.",
            analysis:
              "The sage's reaction with a \"great big smile\" implies immediate penetrating insight into the Dharma of Zen and a detached, perceptive humor.",
          },
          {
            label: "Poem 82: No Method",
            quote:
              "Being, and nothingness, one dharma before me.\nWhen you know the use of the method\nthat is no method at all,\nthen every single place is perfect.",
            analysis:
              "By portraying being and nothingness as \"one dharma,\" Hanshan shows a non-dualistic Zen philosophy as a hallmark of his non-attachment.",
          },
        ],
      },
    ],
  },
  drama: {
    route: "drama",
    navLabel: "Drama",
    accent: "#8d2f30",
    defaultPhaseIndex: 3,
    heroImage: "assets/drama/main background.png",
    detailImage: "assets/drama/analyze background.png",
    citationImage: "assets/drama/citebackground.png",
    title: "Chan Master Yu Has a Dream of Cuixiang",
    kicker: "Drama",
    subtitle: "Desire, Illusion, and Delayed Awakening",
    summary:
      "Liu Cui's awakening is not an immediate realization, but a staged process of recovering a forgotten karmic identity: from Yutong's failed non-attachment, through reincarnation and courtesan desire, to theatrical recognition and the casting off of bodily identity.",
    pathTitle: "Yu's Psychological Journey",
    pathSubtitle: "Six Phases of Identity Recovery and Karmic Awakening",
    aboutTitle: "About This Drama",
    about:
      "This drama presents non-attachment as a delayed and embodied process. Liu Cui's courtesan identity conceals Yutong's failed monastic discipline, while Moonlight Monk's performance reconstructs the forgotten past and reveals enlightenment as the recovery of vision beyond gender, desire, and bodily form.",
    citation:
      "You used the golden needle to remove the cataracts from both my eyes!",
    finalInsight:
      "Drama makes enlightenment delayed, embodied, theatrical, and dependent on recovering a forgotten karmic identity.",
    themes: [
      { label: "Desire", phases: [1, 3] },
      { label: "Illusion", phases: [3, 4] },
      { label: "Reincarnation", phases: [2] },
      { label: "Identity Transformation", phases: [2, 5] },
      { label: "Delayed Awakening", phases: [4, 5] },
      { label: "Theatrical Recognition", phases: [4] },
    ],
    overview: [
      {
        title: "Yutong's Failed Discipline",
        text:
          "The drama begins with a monk who has practiced for decades but remains vulnerable to desire, showing that religious duration alone does not secure non-attachment.",
      },
      {
        title: "Reincarnation as Revenge",
        text:
          "Rebirth is not purification here. Yutong chooses reincarnation through resentment, turning Liu Cui's life into a karmic continuation of unresolved attachment.",
      },
      {
        title: "Liu Cui's Courtesan Identity",
        text:
          "Liu Cui's visible identity is shaped by social fall, erotic performance, and emotional residue, while her spiritual origin remains hidden beneath the role.",
      },
      {
        title: "Moonlight Monk's Theatrical Revelation",
        text:
          "The forgotten past is recovered through objects, masks, costume changes, and gestures rather than through doctrinal explanation.",
      },
      {
        title: "Beyond Body and Dualism",
        text:
          "The ending casts off attachment to gender, body, and social role, moving beyond the oppositions of male and female, monk and courtesan, purity and desire.",
      },
    ],
    phases: [
      {
        title: "Previous Life",
        image: "assets/drama/phase1.png",
        short: "Yutong pursues enlightenment but has not yet reached final attainment.",
        scene:
          "Before becoming Liu Cui, the hidden self is Yutong, a monk who has spent decades pursuing enlightenment.",
        quote:
          "Having now lived here over twenty years, I realize I haven't much time left to reach the final level of spiritual attainment.",
        literary:
          "Liu Cui's hidden origin is Yutong, a monk who has spent decades pursuing enlightenment. Her later courtesan identity is therefore not permanent, but a temporary karmic disguise.",
        psychological:
          "The play begins by destabilizing identity: the visible self is not the complete self, and spiritual history can remain hidden beneath a worldly role.",
      },
      {
        title: "Spiritual Collapse",
        image: "assets/drama/phase2.png",
        short: "Yutong's discipline collapses when desire appears.",
        scene:
          "Yutong is seduced by Red Lotus, and his long-standing discipline breaks down.",
        quote: "That's it! I'm finished! I fell into this beast's snare!",
        literary:
          "Yutong's discipline collapses when he is seduced by Red Lotus. This shows that non-attachment remains fragile even after years of practice.",
        psychological:
          "Desire interrupts religious discipline and exposes the instability of non-attachment. The monk knows the path, but knowledge alone does not free the mind.",
      },
      {
        title: "Revenge Reincarnation",
        image: "assets/drama/phase3.png",
        short: "Yutong chooses rebirth not as release, but as punishment.",
        scene:
          "Instead of releasing his resentment, Yutong chooses to be reborn into Liu Xuanjiao's family as Liu Cui.",
        quote:
          "I have no choice but to turn head over heels and be reborn into the womb of Liu Xuanjiao's wife.",
        literary:
          "Instead of releasing his anger, Yutong chooses reincarnation as revenge. Liu Cui's existence begins with attachment, resentment, and karmic entanglement.",
        psychological:
          "Rebirth does not erase attachment. It relocates unresolved desire into a new body, where identity becomes split between hidden spiritual origin and present worldly life.",
        evidenceItems: [
          {
            label: "Courtesan Punishment",
            quote:
              "I'll be his daughter and grow up to be a prostitute, and I will destroy the family's reputation.",
            analysis:
              "Liu Cui's female and courtesan identity is deliberately produced as punishment. Gender becomes a theatrical role shaped by revenge.",
          },
          {
            label: "Loss of Memory",
            quote: "...is reborn with no memory of his former identity.",
            analysis:
              "Liu Cui forgets that she was Yutong. Her identity is split between a hidden spiritual origin and a present worldly life.",
          },
        ],
      },
      {
        title: "Courtesan Identity",
        image: "assets/drama/phase4.png",
        short: "Liu Cui lives within desire, performance, and social decline.",
        scene:
          "Liu Cui lives as a courtesan, performing pleasure for male clients while remaining emotionally vulnerable.",
        quote:
          "Ever since I fell from high status into prostitution,\nI've lived for some years as a Little Su in Qiantang.",
        literary:
          "Liu Cui enters the world of desire through social decline. Her life is shaped by class loss and sexuality.",
        psychological:
          "Her courtesan role turns identity into performance. She survives through erotic exchange, yet this performance also deepens her distance from her forgotten spiritual origin.",
        evidenceItems: [
          {
            label: "Life in Desire",
            quote: "Countless ones have I entertained upon pleasure boats.",
            analysis:
              "She survives by performing pleasure for male clients. This makes her a figure of attachment, performance, and erotic exchange.",
          },
          {
            label: "Emotional Residue",
            quote: "But seeing a peach blossom breaks my heart.",
            analysis:
              "Liu Cui projects her grief, longing, and emotional vulnerability toward the peach blossom.",
          },
          {
            label: "Initial Dismissal",
            quote: "You mean that you are from the Western Heavens? What nonsense!",
            analysis:
              "Liu Cui first rejects Moonlight Monk's signs as absurd. Her mind is still trapped in ordinary worldly perception.",
          },
        ],
      },
      {
        title: "Theatrical Recognition",
        image: "assets/drama/phase5.png",
        short: "Moonlight Monk reconstructs the past through performance.",
        scene:
          "Moonlight Monk does not explain Yutong's past through doctrine. He performs it through objects, masks, costumes, and gestures.",
        quote:
          "He takes out the gauze hat... puts on the female mask... He puts on the monk's cap...",
        literary:
          "Moonlight Monk reconstructs Yutong's past through performance rather than doctrine. Liu Cui's awakening is theatrical, visual, and embodied.",
        psychological:
          "Awakening begins through misreading, curiosity, and partial reconstruction. Liu Cui does not recover memory all at once; she gradually decodes signs until reincarnation becomes self-recognition.",
        sequence: ["Misreading", "Curiosity", "Decoding", "Self-Connection", "Revelation"],
        evidenceItems: [
          {
            label: "First Recognition",
            quote: "...it must mean that this is a way of saying 'reincarnation.'",
            analysis:
              "She begins to decode the monk's gestures. Awakening starts not as sudden realization, but as a partial interpretation.",
          },
          {
            label: "Awakening Curiosity",
            quote: "Though he is a mad monk, there's something strange about it.",
            analysis:
              "Her skepticism turns into curiosity. This marks the first psychological opening toward enlightenment.",
          },
          {
            label: "Erotic Misreading",
            quote:
              "This shiny bald calabash presses on this girl in red... Grinding and grinding until the juice comes out.",
            analysis:
              "Liu Cui interprets the scene through sexual imagery. Her present identity as a courtesan shapes how she understands spiritual truth.",
          },
          {
            label: "Self-Connection",
            quote: "Ah! Is it that this reincarnation is in my body?",
            analysis:
              "Liu Cui finally connects reincarnation to herself. Yet she still understands it through the body rather than through spiritual identity.",
          },
          {
            label: "Direct Revelation",
            quote:
              "Red Lotus made a monkey out of me,\nSo I shall hide for a springtime in the skin of a Green Willow.",
            analysis:
              "Moonlight Monk directly reveals Yutong's hidden identity inside Liu Cui. \"Green Willow\" links Liu Cui's body to Yutong's revenge plot.",
          },
        ],
      },
      {
        title: "Restored Awakening",
        image: "assets/drama/phase6.png",
        short: "Liu Cui casts off the body and returns to Yutong.",
        scene:
          "Liu Cui fully realizes that she is Yutong's reincarnation and sheds the visible signs of her feminine and courtesan identity.",
        quote: "You used the golden needle to remove the cataracts from both my eyes!",
        literary:
          "Liu Cui describes enlightenment as restored sight. She can finally see through illusion, desire, and her mistaken identity.",
        psychological:
          "Awakening is staged as the removal of a deluded self. By shedding feminine costume and reclaiming monk identity, Liu Cui moves beyond the dualisms of male/female, monk/courtesan, purity/desire, and body/spirit.",
        evidenceItems: [
          {
            label: "Full Awakening",
            quote: "I get it! I get it!",
            analysis:
              "Liu Cui fully realizes that she is Yutong's reincarnation. This is the turning point from confusion to enlightenment.",
          },
          {
            label: "Shedding Feminine Identity",
            quote:
              "female lead throws down her hair bun and acts out taking off her women's clothes.",
            analysis:
              "She abandons the visual signs of femininity and courtesan identity. Enlightenment is staged as the removal of a deluded self.",
          },
          {
            label: "Return to Yutong",
            quote: "Younger Brother,\nYou finished this scene in an instant.",
            analysis:
              "Moonlight Monk addresses Liu Cui as Yutong again. Her courtesan identity disappears, replaced by brotherhood and spiritual recognition.",
          },
          {
            label: "Beyond Dualism",
            quote: "Combine moving on and not moving on to make one way.",
            analysis:
              "The play moves beyond simple oppositions: male/female, monk/courtesan, purity/desire, motion/stillness. Enlightenment means seeing these dualities as unstable and transformative.",
          },
          {
            label: "Casting Off the Body",
            quote:
              "We have cast away this one skin sack full of stolen property.",
            analysis:
              "The body is finally treated as temporary and illusory. Liu Cui's transformation ends with a rejection of attachment to physical identity itself.",
          },
        ],
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

function preserveLines(text) {
  return text.replaceAll("\n", "<br />");
}

function getRouteFromHash() {
  const hash = window.location.hash.replace("#", "");
  const [route, phase] = hash.split("-");

  if (works[route]) {
    const defaultPhaseIndex = works[route].defaultPhaseIndex ?? 0;
    const phaseIndex = Number.isNaN(Number.parseInt(phase ?? "", 10))
      ? defaultPhaseIndex
      : Math.max(0, Number.parseInt(phase, 10) - 1);

    return {
      route,
      phaseIndex,
    };
  }

  if (route === "about" || route === "method") {
    return { route, phaseIndex: 0 };
  }

  return { route: "home", phaseIndex: 0 };
}

function setRoute(route, phaseIndex) {
  const nextPhaseIndex = works[route] && phaseIndex === undefined ? works[route].defaultPhaseIndex ?? 0 : phaseIndex;
  const hash = works[route] ? `${route}-${nextPhaseIndex + 1}` : route;
  state = { route, phaseIndex: nextPhaseIndex };

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
  const themes = work.themes.map((theme) => (typeof theme === "string" ? { label: theme, phases: [] } : theme));

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
          <p class="path-subtitle">${work.pathSubtitle}</p>
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
              "${preserveLines(work.citation)}"<br />
              <small>- ${work.title}</small>
            </div>
            <div class="about-strip" style="--citation-image: ${cssImage(work.citationImage)}">
              <h3>${work.aboutTitle}</h3>
              <p>${work.about}</p>
              ${
                work.overview
                  ? `
                    <details class="overview-details">
                      <summary>Read Scholarly Overview -></summary>
                      <div class="overview-grid">
                        ${work.overview
                          .map(
                            (item) => `
                              <article>
                                <h4>${item.title}</h4>
                                <p>${item.text}</p>
                              </article>
                            `,
                          )
                          .join("")}
                      </div>
                    </details>
                  `
                  : ""
              }
            </div>
          </div>
        </div>

        <article class="detail-panel" style="--detail-image: ${cssImage(work.detailImage)}">
          <p class="phase-label">Phase ${state.phaseIndex + 1} of ${work.phases.length}</p>
          <h2>${phase.title}</h2>
          <p>${phase.short}</p>
          <div class="meaning-block is-scene">
            ${
              phase.scene
                ? `
                  <article>
                    <h3>Scene</h3>
                    <p>${phase.scene}</p>
                  </article>
                `
                : ""
            }
          </div>
          <blockquote class="quote">${preserveLines(phase.quote)}</blockquote>
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
          ${
            phase.evidence
              ? `
                <details class="detail-toggle">
                  <summary>${phase.evidence.label}</summary>
                  <blockquote>${preserveLines(phase.evidence.quote)}</blockquote>
                  <p>${phase.evidence.analysis}</p>
                </details>
              `
              : ""
          }
          ${
            phase.evidenceItems
              ? phase.evidenceItems
                  .map(
                    (item) => `
                      <details class="detail-toggle">
                        <summary>${item.label}</summary>
                        <blockquote>${preserveLines(item.quote)}</blockquote>
                        <p>${item.analysis}</p>
                      </details>
                    `,
                  )
                  .join("")
              : ""
          }
          ${
            phase.sequence
              ? `
                <div class="sequence-strip" aria-label="Recognition sequence">
                  ${phase.sequence.map((item) => `<span>${item}</span>`).join("")}
                </div>
              `
              : ""
          }
          ${
            phase.comparison
              ? `
                <details class="detail-toggle comparison-toggle">
                  <summary>${phase.comparison.label}</summary>
                  <h3>${phase.comparison.title}</h3>
                  <blockquote>${preserveLines(phase.comparison.quote)}</blockquote>
                  <p>${phase.comparison.analysis}</p>
                  <div class="comparison-map">
                    ${phase.comparison.contrast.map((item) => `<span>${item}</span>`).join("")}
                  </div>
                </details>
              `
              : ""
          }
          ${work.finalInsight ? `<p class="final-insight">${work.finalInsight}</p>` : ""}
        </article>

        <aside class="theme-panel">
          <h3>Key Themes</h3>
          <ul class="theme-list">
            ${themes
              .map(
                (theme, index) => `
                  <li>
                    <span class="theme-icon">${index + 1}</span>
                    <button type="button" data-theme-phases="${theme.phases.join(",")}">${theme.label}</button>
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
  const themeButton = event.target.closest("[data-theme-phases]");

  if (themeButton) {
    const relatedPhases = themeButton.dataset.themePhases
      .split(",")
      .filter(Boolean)
      .map((phase) => Number.parseInt(phase, 10));

    document.querySelectorAll("[data-theme-phases]").forEach((button) => {
      button.classList.toggle("is-active", button === themeButton);
    });

    document.querySelectorAll("[data-phase]").forEach((button) => {
      const phaseIndex = Number.parseInt(button.dataset.phase, 10);
      button.classList.toggle("is-theme-related", relatedPhases.includes(phaseIndex));
    });

    return;
  }

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
