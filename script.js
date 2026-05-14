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
    defaultPhaseIndex: 2,
    heroImage: "assets/platform sutra/main background.png",
    detailImage: "assets/platform sutra/analysis background.png",
    citationImage: "assets/platform sutra/citation background.png",
    title: "The Platform Sutra of the Sixth Patriarch",
    kicker: "Sutra",
    subtitle: "Sudden Enlightenment and the Clarity of the Empty Mind",
    summary:
      "This page traces Huineng's transformation from ordinary layman to the Sixth Patriarch through five sections of sudden insight, equal Buddha nature, verse competition, mind-to-mind transmission, and non-dual teaching.",
    pathTitle: "Huineng's Path to Enlightenment",
    pathSubtitle: "Five Sections of Sudden Awakening",
    aboutTitle: "About This Sutra",
    about:
      "A foundational Chan Buddhist text exploring how sudden awakening transforms identity, perception, and attachment. Huineng's teaching rejects gradual purification and reveals enlightenment as the direct realization of the mind's original clarity.",
    citation:
      "Bodhi originally has no tree;\nThe mirror also has no stand.\nBuddha nature is always clean and pure;\nWhere is there room for dust?",
    thoughtTitle: "Yinfu's thoughts",
    thought:
      "After close-reading Hui-neng's last verse, I interpret his warning of the dangers of epistemic and dualistic ideologies as an obstacle to sudden enlightenment that entraps beings in the endless cycle of reincarnation. In particular, I was drawn to his doctrine that detachment from the form leads to the perception of truth. Hence, the non-dualism between no-thought and true reality leads to enlightenment. Also, I realized that non-attachment is closely related to his argument that enlightenment is a dynamic state, inseparable from a straightforward mind. I found his emphasis on true wisdom, arising from the awakening of the \"Buddha seed,\" resonates with Hui-neng's awakened mind upon listening to the Diamond Sutra, revealing the intrinsic and sudden nature of enlightenment. Therefore, instead of rejecting the importance of teaching as an external trigger of enlightenment, Hui-neng suggests that Dharma is transmitted mind-to-mind beyond the physical form of language.",
    themes: [
      { label: "Non-attachment", phases: [2, 4] },
      { label: "Sudden enlightenment", phases: [0, 3] },
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
          "The language of the mind becoming \"clear\" and \"awakened\" suggests Huineng's intrinsic tendency toward enlightenment. The scene gives the Diamond Sutra a purifying power that works through hearing as well as reading.",
        psychological:
          "Even though Huineng is illiterate, his awakening suggests that enlightenment is not dependent on textual mastery. The Dharma becomes an external trigger for a sudden inward transformation.",
      },
      {
        title: "First Exchange",
        image: "assets/platform sutra/section2.png",
        short: "Huineng denies the spiritual difference between north and south.",
        scene:
          "Huineng's first exchange with the Fifth Patriarch challenges the idea that geography or social identity can limit Buddha nature.",
        quote:
          "Although people from the south and people from the north differ, there is no north and south in Buddha nature.",
        literary:
          "Huineng demonstrates his perception of the Buddha's equalitarian salvation by denying the difference between \"north and south in Buddha nature.\"",
        psychological:
          "This exchange shows non-attachment at the level of identity. Huineng refuses to let geographic stereotypes, social hierarchy, or the label of \"barbarian\" define spiritual possibility.",
      },
      {
        title: "Verse Competition",
        image: "assets/platform sutra/section2.png",
        short: "Huineng's verse rejects gradual polishing and reveals original purity.",
        scene:
          "Shenxiu and Huineng compete through mind-verses, revealing two sharply different models of enlightenment.",
        quote:
          "Bodhi originally has no tree,\nThe mirror also has no stand.\nBuddha nature is always clean and pure;\nWhere is there room for dust?",
        literary:
          "By denying the Bodhi tree and mirror, Huineng realizes that the intrinsic purity of Buddha nature liberates the spirit from effortful cleansing. His verse expresses non-attachment and the potential for sudden enlightenment.",
        psychological:
          "Huineng perceives enlightenment as the sudden realization of an empty and non-attached mind, rather than as gradual cultivation or thought suppression.",
        evidenceItems: [
          {
            label: "Shenxiu's Mental Turmoil",
            quote:
              "At midnight, without letting anyone see him, he went to write his mind-verse on the central section of the south corridor wall, hoping to gain the Dharma.",
            analysis:
              "Shenxiu experiences mental turmoil while imagining Huang-jen's response to his verse. His spiritual entanglement in success and karmic obstruction reflects attachment rather than Buddhist emptiness.",
          },
        ],
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
          "Huineng's \"immediate awakening\" reinforces the Zen emphasis on the sudden and non-gradual nature of enlightenment. The statement that \"none of the others knew\" underscores that awakening is an internal transformation inaccessible to external verification.",
        psychological:
          "Although the robe introduces lineage and legitimacy, the Dharma is transmitted \"mind-to-mind.\" Enlightenment is not the acquisition of knowledge, but an ineffable moment of realization inspired by the teaching of the Dharma.",
      },
      {
        title: "Huineng's Teaching",
        image: "assets/platform sutra/section3.png",
        short: "Meditation, straightforward mind, and no-thought clarify his non-dual Dharma.",
        scene:
          "Huineng's later teaching crystallizes the Dharma of Zen Buddhism by warning against attachment to form, doctrine, truth, and dualistic thinking.",
        quote:
          "Nowhere is there anything true;\nDon't try to see the True in any way.\nIf you try to see the True,\nYour seeing will be in no way true.\nIf you yourself would gain the True,\nSeparate from the false; there the mind is true.",
        literary:
          "Huineng's verse warns that even the search for truth can become an attachment. The Dharma is not grasped by fixing the mind on a concept of the truth, but by separating from false forms without turning truth itself into an object.",
        psychological:
          "His final teaching presents enlightenment as a dynamic, non-dual state inseparable from straightforward mind. The awakened mind does not reject teaching, but receives Dharma beyond the physical form of language in mind-to-mind transmission.",
        evidenceItems: [
          {
            label: "Meditation and Wisdom",
            quote:
              "Meditation itself is the substance of wisdom; wisdom itself is the function of meditation. At the very moment when there is wisdom, then meditation exists in wisdom.",
            analysis:
              "Huineng argues for the non-duality between meditation and wisdom. Enlightenment is not achieved after the pathway; it occurs simultaneously with the pathway.",
          },
          {
            label: "Straightforward Mind",
            quote:
              "The samadhi of oneness is straightforward mind at all times, walking, staying, sitting, and lying... in all things having no attachments whatsoever.",
            analysis:
              "Huineng perceives straightforward mind as direct, non-clinging, and non-obstructive. By liberating the mind from deluding forms, he prevents attachment even to the idea of non-attachment.",
          },
          {
            label: "No-Thought",
            quote:
              "No is the separation from the dualism that produces the passions. Thought means thinking of the original nature of True Reality. True Reality is the substance of thoughts.",
            analysis:
              "No-thought is not blankness. It is a non-dual and non-attached way of thinking in which true reality is foreseen within no-thought itself rather than reached through suppression.",
          },
        ],
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
      "Hanshan exemplifies enlightenment as an unstable state that oscillates between serenity of non-attachment and bewilderment caused by earthly entanglement.",
    pathTitle: "Cold Mountain's Path of Detachment",
    pathSubtitle: "Three Phases of Clarity, Detachment, and Instability",
    aboutTitle: "About These Poems",
    about:
      "Cold Mountain's poems reflect a life of retreat, irony, and inward seeing. They present non-attachment not as stable peace, but as an oscillation between clarity, social withdrawal, emotional unrest, and sudden moments of insight.",
    citation:
      "My mind's the autumn moon,\nshining in the blue-green pool,\nreflecting glistening, clear and pure.",
    thoughtTitle: "Yinfu's thoughts",
    thought:
      "My favorite Hanshan poem is Poem 52:\n\nWhen the stupidest folks read my poems,\nthey snort in incomprehension . . .\nWhen the middling sort read my poems,\nthey think them over and pronounce them deep . . .\nWhen a sage reads a poem of mine,\nhis face breaks into a great big smile.\n\nI like this poem the best because Hanshan humorously encapsulates three levels of Zen understanding by describing different reactions to his poems. The incomprehension of the stupidest folks suggests a complete lack of Zen perception and the incapacity to be awakened. The middling readers' act of thinking over and pronouncing the poems deep represents attachment to analysis and gradual accumulation of knowledge rather than sudden realization. The sage's great big smile implies immediate, penetrating insight into the Dharma and a detached, perceptive humor. I think I belong to the second category, because all the content displayed on our website relies on close reading and analysis. Clearly, Hanshan refuses such diligent effort, as it is a form of attachment that distances one from enlightenment.",
    finalInsight:
      "Unlike Huineng's sudden awakening, Hanshan's non-attachment is lyrical, unstable, and repeatedly tested by memory, poverty, irony, and grief.",
    themes: [
      { label: "Inner serenity", phases: [0] },
      { label: "bewilderment", phases: [1] },
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
        title: "Clarity and Tranquility",
        image: "assets/cold mountain poems/section2.png",
        short: "Moon imagery reveals a clear, reflective, and non-dual mind.",
        scene:
          "Hanshan describes enlightenment through moonlight, clear water, and the settled stillness of Cold Mountain.",
        quote:
          "My mind's the autumn moon,\nshining in the blue-green pool,\nreflecting glistening, clear and pure . . .\nThere's nothing to compare it to,\nwhat else can I say?",
        literary:
          "The narrator compares his mind to the autumn moon, suggesting an aesthetic and philosophical serenity in Zen. The \"blue-green pool\" and \"glistening, clear, and pure\" represent mental transparency, in which the mind reflects truth without distortion.",
        psychological:
          "His mind is not a fixed inner entity, but a reflective non-dual awareness. The rhetorical question \"what else can I say?\" reflects both contentment and the ineffability of this state, implying that such clarity exceeds conceptual articulation.",
        evidenceItems: [
          {
            label: "Poem 7: Moon as the Pivot of the Heart",
            quote:
              "I sit beneath the cliff, quiet and alone.\nRound moon in the middle of the sky's a bird ablaze:\nall things are seen mere shadows in its brilliance,\nthat single wheel of perfect light . . .\nAlone, its spirit naturally comes clear.\nSwallowed in emptiness in this cave of darkest mystery,\nbecause of the finger pointing, I saw the moon.\nThat moon became the pivot of my heart.",
            analysis:
              "The round moon as a bird ablaze reflects the dynamic and fluid nature of a Zen mind. The contrast between perfect light and darkest mystery reveals transitory mental images, while the moon becoming the pivot of the heart marks a reorganization of self-awareness upon enlightenment.",
          },
          {
            label: "Poem 82: Being and Nothingness",
            quote:
              "My life's grown from old roots on Cold Mountain,\non the stone cliffs, perched, heart breathing free.\nAt the end no mere image ever leaves scars:\nI'm settled in to watch this universe flow by.\nTime's light and shadows rise, a flutter of brilliance,\nshining where my heart dwells.\nBeing, and nothingness, one dharma before me.\nThe tool I use shines from the Pearl of Wisdom.\nWhen you know the use of the method\nthat is no method at all, then every single place\nis perfect.",
            analysis:
              "Hanshan moves from rootedness to non-attachment. His settled stillness beside the universe's flow suggests calm openness to impermanence, and the unity of being and nothingness presents non-dual Zen philosophy as the ground of his detachment.",
          },
        ],
      },
      {
        title: "Rejection of Materialism Without Social Seclusion",
        image: "assets/cold mountain poems/section1.png",
        short: "Hanshan refuses material success without fully leaving society.",
        scene:
          "Hanshan meets worldly comparison, poverty, poetry, wine, and domestic discomfort without letting them define spiritual value.",
        quote:
          "My old landlady\ngot rich a couple years ago.\nUsed to be poorer than me.\nNow she laughs that I don't have money.\nShe laughs that I've fallen behind.\nI laugh that she's gotten ahead.\nBoth of us laughing, no stopping us.\nLady of the Land, and the Lord of the West.",
        literary:
          "The mutual laughter between Hanshan and the landlady juxtaposes secular success with spiritual detachment. The contrast between \"fallen behind\" and \"gotten ahead\" turns social comparison into humor rather than resentment.",
        psychological:
          "Hanshan does not completely withdraw from society; instead, he refuses to be restrained by its judgments. His laughter shows that he recognizes social hierarchy without becoming emotionally trapped by it.",
        evidenceItems: [
          {
            label: "Poem 41: Poverty and Openness",
            quote:
              "A scroll full of poems by poets of talent,\nand big pot full of wine fit for saints.\nI love to walk out to watch the young bull calves;\nsitting, I'd rather stay close to home.\nFrost and dew can soak through thatch,\nbut the moon flowers white\nthrough the window made of old bottles;\nI'm poor, but I can build more windows now,\na couple more cups, to go\nwith the chanting of two or three new poems.",
            analysis:
              "Hanshan presents the paradoxical relationship between economic deprivation and intellectual richness. The transition from frost and dew soaking through thatch to moonlight flowering through old-bottle windows transforms poverty into openness, mental transparency, and spiritual fulfillment.",
          },
        ],
      },
      {
        title: "Spiritual Instability",
        image: "assets/cold mountain poems/section3.png",
        short: "Earthly entanglement returns as restlessness, grief, and renewed retreat.",
        scene:
          "Hanshan remembers misguided pursuits, confronts mortality, and returns again to Cold Mountain for purification.",
        quote:
          "Why's my heart always, always spinning?\nA human's life is just a mushroom's life,\nfinished in a morning.",
        literary:
          "The rhetorical question \"why is my heart always, always spinning\" represents restlessness and mental turmoil. His recognition of the ephemeral nature of human life does not immediately lead to non-attachment.",
        psychological:
          "Instead, Hanshan experiences unbearable frustration and misery upon contemplating the inevitable loss of his family and friends. Enlightenment therefore appears as a dynamic and unstable mental state, not a permanent condition of calm.",
        evidenceItems: [
          {
            label: "Poem 47: Return to Cold Mountain",
            quote:
              "I was born just thirty years ago,\nbut I've wandered a million miles already.\nAlong the River through the green grass on the banks,\nout to the borderlands, where the red dust roils.\nChewed herbs, cooked up alchemical elixirs,\ntrying to become an Immortal.\nRead all the Writings, chanted the Histories aloud,\ntrying to learn them all by heart . . .\nToday I'm on my way\nhome to Cold Mountain.\nThere, I'll bed down in the creek, just to wash out\nmy ears.",
            analysis:
              "The metaphor of wandering a million miles represents a prolonged and strenuous search, while alchemy and memorized writings reveal the futility of goal-oriented approaches to enlightenment. Returning to Cold Mountain becomes both physical and spiritual reorientation, and washing out the ears clears away obsession with doctrines.",
          },
          {
            label: "Poem 87: Grief and Return",
            quote:
              "How to bear that in two decades at the most\nmy family, all my friends, will be gone cold and fallen down.\nThese thoughts weigh on my heart, and so of course I grieve,\na grief like love, unbearable.\nWhat to do, what should I do?\nTake this body home\ninto my mountain shade.",
            analysis:
              "Hanshan's recognition of impermanence does not immediately produce non-attachment. He feels grief like love, unbearable, showing that enlightenment remains dynamic and unstable while social obligation continues to weigh on the mind.",
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
    thoughtTitle: "Tianle's thoughts",
    thought:
      "In Chan Master Yu's Dream of Cuixiang, he thinks of the drama as a rethinking of non-attachment. In the story, although Yutong has been practicing non-attachment in pursuit of enlightenment, he is still seduced by Red Lotus and overwhelmed by anger and desire. At this moment, he becomes “attached.” He reincarnates as Liu Cui to destroy Liu Xuanjiao's family reputation. Yet after indulging in the illusions of the pleasure world, Liu Cui can still be enlightened by the Moonlight Monk’s inspiration and becomes aware of her identity as the reincarnation of Yutong. She wears monk clothing and returns to her spiritual identity after her own awakening. Tianle therefore argues that Chan Master Yu's Dream of Cuixiang is a strong example of how Chan teaching views the fragility of enlightenment and awakening.",
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
        title: "Original Identity and Collapse",
        image: "assets/drama/phase1.png",
        short: "Yutong's monastic identity is revealed, then broken by desire.",
        detailPairs: [
          {
            quote:
              "Having now lived here over twenty years, I realize I haven't much time left to reach the final level of spiritual attainment.",
            analysis:
              "Liu Cui's hidden origin is Yutong, a monk who has spent decades pursuing enlightenment. This also paves the way for the later reincarnation of her.",
          },
          {
            quote: "That's it! I'm finished! I fell into this beast's snare!",
            analysis:
              "Yutong's discipline collapses when he is seduced by Red Lotus. It shows that Yutong's status in non-attachment was fragile even after years of practice.",
          },
          {
            quote:
              "I have no choice but to turn head over heels and be reborn into the womb of Liu Xuanjiao's wife.",
            analysis:
              "Instead of releasing his anger, Yutong chooses reincarnation as revenge. He wants to destroy the life and reputation of Liu Xuanjiao.",
          },
        ],
      },
      {
        title: "Reincarnation and Identity Split",
        image: "assets/drama/phase2.png",
        short: "Yutong becomes Liu Cui through revenge, gender transformation, and memory loss.",
        detailPairs: [
          {
            quote:
              "I'll be his daughter and grow up to be a prostitute, and I will destroy the family's reputation.",
            analysis:
              "Liu Cui's female and courtesan identity is deliberately produced as punishment. Gender becomes an important factor in the story because the new body is designed as a role of revenge.",
          },
          {
            quote: "...is reborn with no memory of his former identity.",
            analysis:
              "Liu Cui forgets that she was Yutong. Her identity is split between a hidden spiritual origin and a present worldly life. Is Liucui still Yutong when all the memories are gone, and the identity grows completely independent of Yutong?",
          },
          {
            quote:
              "Ever since I fell from high status into prostitution,\nI've lived for some years as a Little Su in Qiantang.",
            analysis:
              "Liu Cui enters the world of desire through social decline. Her life is shaped by class loss and sexuality, which strongly distinguishes her present identity from Yutong's original monastic identity.",
          },
        ],
      },
      {
        title: "Worldly Attachment",
        image: "assets/drama/phase3.png",
        short: "Before awakening, Liu Cui is absorbed in desire, routine, and ordinary perception.",
        detailPairs: [
          {
            quote: "Countless ones have I entertained upon pleasure boats.",
            analysis:
              "She survives by performing pleasure for male clients. At this point, Liu Cui is clearly attached to the world of desire and erotic exchange.",
          },
          {
            quote:
              "Today we have planned to look at the peach blossoms on the lake... Here I am, but where is he?",
            analysis:
              "Her ordinary courtesan routine is interrupted by Moonlight Monk. This interruption marks the beginning of the awakening process.",
          },
          {
            quote: "You mean that you are from the Western Heavens? What nonsense!",
            analysis:
              "Liu Cui first rejects Moonlight Monk's signs as absurd. Her mind is still trapped in ordinary worldly perception.",
          },
        ],
      },
      {
        title: "Recognition Through Performance",
        image: "assets/drama/phase4.png",
        short: "Moonlight Monk begins awakening Liu Cui through gesture, costume, and pantomime.",
        detailPairs: [
          {
            quote: "...it must mean that this is a way of saying 'reincarnation.'",
            analysis:
              "She begins to decode the monk's gestures. Awakening becomes a process rather than a single sudden event.",
          },
          {
            quote: "Though he is a mad monk, there's something strange about it.",
            analysis:
              "Her skepticism turns into curiosity. This marks the first psychological opening toward enlightenment.",
          },
          {
            quote:
              "He takes out the gauze hat... puts on the female mask... He puts on the monk's cap...",
            analysis:
              "Moonlight Monk performs Yutong's past to Liucui to awaken her. ",
          },
        ],
      },
      {
        title: "Misreading and Revelation",
        image: "assets/drama/phase5.png",
        short: "Liu Cui misreads the performance before gradually recognizing herself.",
        detailPairs: [
          {
            quote:
              "This shiny bald calabash presses on this girl in red... Grinding and grinding until the juice comes out.",
            analysis:
              "Since Liu Cui is still deeply attached, her interpretation of the monk's behavior moves in the wrong direction. Her identity as a courtesan shapes how she understands the world.",
          },
          {
            quote: "...an official who is sending that woman off on some kind of dirty business?",
            analysis:
              "She begins to reconstruct the plot behind Yutong's fall. Memory returns gradually, raising again the question of who Liu Cui is after passing through these experiences.",
          },
          {
            quote: "...it must be that I, too, created this grievance and enmity!",
            analysis:
              "She assumes she is involved in a sexual or karmic debt. Liu Cui's interpretation is still shaped by guilt, desire, and worldly causality.",
          },
          {
            quote:
              "Red Lotus made a monkey out of me,\nSo I shall hide for a springtime in the skin of a Green Willow.",
            analysis:
              "Moonlight Monk directly reveals Yutong's hidden identity inside Liu Cui. \"Green Willow\" links Liu Cui's body to Yutong's revenge plot.",
          },
          {
            quote: "I get it! I get it!",
            analysis:
              "Liu Cui fully realizes that she is Yutong's reincarnation. This is the turning point from confusion to enlightenment.",
          },
        ],
      },
      {
        title: "Non-Dual Enlightenment",
        image: "assets/drama/phase6.png",
        short: "Liu Cui sheds gendered identity and moves beyond dualistic oppositions.",
        detailPairs: [
          {
            quote:
              "female lead throws down her hair bun and acts out taking off her women's clothes.",
            analysis:
              "She abandons the visual signs of femininity and courtesan identity. Enlightenment is staged as the removal of a deluded self, raising the question of whether the awakening belongs to Liu Cui or Yutong.",
          },
          {
            quote: "...giving them to female lead to put on.",
            analysis:
              "By putting on monk's clothing, Liu Cui returns to Yutong's spiritual identity. The custum change here is a representation of the transformation of the inner identity.",
          },
          {
            quote: "Younger Brother,\nYou finished this scene in an instant.",
            analysis:
              "Moonlight Monk addresses Liu Cui as Yutong again. Her courtesan identity disappears, replaced by brotherhood and spiritual recognition.",
          },
          {
            quote: "Combine moving on and not moving on to make one way.",
            analysis:
              "The play moves beyond simple oppositions: male/female, monk/courtesan, purity/desire, motion/stillness. It suggests that regardless of identity, gender, or experience, anyone can move toward enlightenment and become non-attached.",
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
      title: " The Harmony & Dissonance of Non-Attachment",
      subtitle: "A Psychological Analysis of Chinese Zen Buddhism Texts",
      accent: "#0d477b",
    })}
    <section class="content-shell">
      <p class="intro-text">
        While the sutra presents non-attachment as a sudden enlightenment, other texts reveal it to be a gradual, unstable spiritual development. In particular, the sutra articulates a model of sudden awakening exemplified by Huineng, while the poems portray a constant practice and a fluid representation of detachment. In contrast, the play exposes how desire prevents such spiritual liberation through karmic retribution, suggesting that non-attachment requires continuous wrestling with worldly cravings.
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
            <div class="thought-card" style="--citation-image: ${cssImage(work.citationImage)}">
              <h3>${work.thoughtTitle ?? "Reflections"}</h3>
              <p>${preserveLines(work.thought ?? work.about)}</p>
            </div>
          </div>
        </div>

        <article class="detail-panel" style="--detail-image: ${cssImage(work.detailImage)}">
          <p class="phase-label">Phase ${state.phaseIndex + 1} of ${work.phases.length}</p>
          <h2>${phase.title}</h2>
          <p>${phase.short}</p>
          ${
            phase.detailPairs
              ? `
                <div class="quote-analysis-list">
                  ${phase.detailPairs
                    .map(
                      (item) => `
                        <article class="quote-analysis">
                          <h3>Quotation</h3>
                          <blockquote>${preserveLines(item.quote)}</blockquote>
                          <h3>Analysis</h3>
                          <p>${item.analysis}</p>
                        </article>
                      `,
                    )
                    .join("")}
                </div>
              `
              : `
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
              `
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
                The code is available on <a href="https://github.com/dale1213/zen-mind-project" target="_blank">GitHub</a>.
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
