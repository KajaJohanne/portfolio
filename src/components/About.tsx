export function About() {
  return (
    <section id="om-meg" className="p-6 md:p-12 bg-blue/20">
      <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
        <img
          src="/images/kaja.jpeg"
          alt="Portrett av Kaja"
          className="w-full max-w-sm object-cover md:w-96 rounded-r-4xl"
        />
        <div className="flex flex-col gap-6 font-general text-lg leading-relaxed max-w-md md:max-w-4xl">
          <h3 className="font-cabinet text-2xl">Om meg</h3>

          <p>
            Jeg er utdannet frontendutvikler og trives godt med å bygge og
            utvikle digitale løsninger. Jeg synes det er spesielt gøy å jobbe
            med frontend, å gjøre ideer og design om til fungerende
            løsninger, og å finne måter som gjør en løsning enkel og god å
            bruke.{" "}
          </p>
          <p>
            Nå tar jeg en master i tjenestedesign ved NTNU for å få et bredere
            perspektiv på utvikling, med mål om å kombinere den tekniske
            bakgrunnen min med design og brukerforståelse.{" "}
          </p>

          <p>
            Før jeg begynte å studere teknologi, jobbet jeg som sykepleier. Det
            har lært meg mye om å samarbeide med ulike mennesker, kommunisere
            tydelig, og tilpasse meg ulike situasjoner som raskt kan endre
            seg.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
