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
    image: "images/placeholder.svg",
    tech: ["React", "TypeScript"],
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
