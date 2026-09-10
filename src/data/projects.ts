export const projects = [
  {
    id: "strikkeapp",
    title: "Strikkemønster-editor",
    tagline: "Et rutenett-verktøy for å designe strikkediagram.",
    category: "Personlig prosjekt",
    description:
      "Jeg er stor strikkentusiast, og ønsket meg en løsning hvor jeg kunne tegne opp egne mønstre til forskjellige strikkeprosjekter. I tillegg savnet jeg en enkel måte å følge med på progresjonen i mønsteret, og derfor laget jeg dette full-stack prosjektet som gjør begge deler.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "Prisma",
      "MySQL",
    ],
    repoUrl: "",
    image: "/images/knit-pattern-app/oppretteNyVott.png",
    video: "/videos/strikkeapp-demo.mp4",
    screenshots: [
      {
        image: "/images/knit-pattern-app/oversiktsside.png",
        caption:
          "Mønstrene lagres og hentes fra et eget API bygget med Express og Prisma, mot en MySQL database. Herfra kan jeg opprette nye mønstre eller åpne eksisterende.",
      },
      {
        image: "/images/knit-pattern-app/oppretteNyVott.png",
        caption:
          "Mønstermalen til votten genereres med et rutenett der noen celler er blokkerte, altså ikke mulig å redigere. Dette brukes til å forme selve vott- og tommelfasongen. Tommelen hat et eget, separat rutenett. Bestemte farger representerer fellinger og er forklart ved siden av rutenettet.",
      },
      {
        image: "/images/knit-pattern-app/egendefinertGrid.png",
        caption:
          "Det er også mulig å opprette et rutenett med selvvalgt størrelse, for tilfeller der jeg trenger et mønster til et større prosjekt.",
      },
      {
        image: "/images/knit-pattern-app/strikkedeRader.png",
        caption:
          "Når mønsteret er lagret, stenges det for redigering for å hindre at feil skjer underveis i strikkingen. Mønsteret kan fortsatt redigeres senere. Det er også mulig å markere rader som ferdig strikket, slik at det blir enklere å følge progresjonen. ",
      },
    ],
  },
  {
    id: "tekstapp",
    title: "Tekstapp",
    tagline:
      "Bachelorprosjekt i samarbeid med Statens vegvesen. Program for å opprette og håndtere tekstnøkler.",
    category: "Akademisk prosjekt",
    image: "images/tekstapp/tekstappOversikt.png",
    description:
      "Bachelorgruppen fikk i oppgave å lage en ny versjon av det interne verktøyet Tekstapp, som brukes for å opprette, strukturere og håndtere tekstnøkler for innhold på bokmål, nynorsk og engelsk. ",
    roleDescription:
      "Vi var fire studenter, og jeg hadde blant annet ansvar for utvikle flyten for opprettelse av nye applikasjoner. Løsningen er bygget i React og TypeScript, med lagring og autentisering via Firebase og Firestore.",

    process: [
      "Forstå dagens løsning",
      "Definere oppgaven",
      "Designsprint",
      "Prototyping",
      "Brukertesting",
      "Utvikling",
    ],
    processDescription:
      "Vi startet med å identifisere områder som kunne forbedres i dagens løsning. Dette dannet grunnlaget for å avgrense oppgaven og utvikle forslag til en ny løsning.",
    tech: ["React", "TypeScript", "Firebase"],
    repoUrl: "https://github.com/KajaJohanne/BAO304-Tekstapp",
    screenshots: [
      {
        image: "/images/tekstapp/tekstappFigmaApp.png",
        caption:
          "Figma-protoypen ble brukt til å utforske ideer og teste løsningen på ekte brukere før utvikling. Utsnittet viser del av opprettelsen av nye Applikasjoner. Denne flyten ble senere forenklet og justert under implementering.",
      },
      {
        image: "/images/tekstapp/tekstappOversikt.png",
        caption: "Eksisterende Applikasjoner hentes fra databasen og vises i en liste. Herfra kan man opprette ny applikasjon, navigere til listen over tekstnlkler, eller navigere inn i en spesifikk applikasjon."
      }
    ],
    formSteps: [
      {
        image: "/images/tekstapp/opprettSteg1.png",
        caption:
          "Nye applikasjoner opprettes gjennom en trestegsprosess som benytter React Hook Form for blant annet enkel validering.",
      },
      {
        image: "/images/tekstapp/opprettSteg2.png",
        caption:
          "Skjemaet validerer fortløpende og gir tilbakemelding dersom noe mangler, før man kan gå videre.",
      },
      {
        image: "/images/tekstapp/opprettSteg3.png",
        caption:
          "Siste steg oppsummerer det som er fylt inn, før applikasjonen faktisk opprettes.",
      },
    ],
    outcome: "Gjennom prosjektet fikk jeg praktisk erfaring med hele utviklingsløpet, fra brukerinnsikt og prototyping, til implementering i et team."

  },
  {
    id: "portfolio",
    title: "Denne siden",
    tagline: "Portefølje bygget med React, Tailwind og React Router",
    category: "Personlig prosjekt",
    image: "/images/placeholder.svg",
    tech: ["React", "TypeScript", "Tailwind"],
    repoUrl: "tba",
    screenshots: [
      {
        image: "/images/placeholder.svg",
        caption:
          "Selve rutenett-editoren, der hver rute representerer en maske. Fargevelgeren er bygget som en egen komponent.",
      },
      {
        image: "/images/placeholder.svg",
        caption: "Autolagring med debounce ..... ",
      },
    ],
  },
];
