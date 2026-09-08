export function About() {
  return (
    <section id="om-meg" className="p-6 md:p-12">
      <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
        <img
          src="/images/kaja.jpeg"
          alt="Portrett av Kaja"
          className="w-full max-w-sm object-cover md:w-96 rounded-r-4xl"
        />
        <div className="flex flex-col gap-6 font-general text-lg leading-relaxed max-w-md md:max-w-4xl">
          <h3 className="font-cabinet text-2xl">Om meg</h3>

          <p>
            Jeg heter Kaja og er frontendutvikler med en bachelorgrad i
            frontend- og mobilutvikling . Nå tar jeg en master i design av
            tjenester, teknologi og samhandling ved NTNU.
          </p>

          <p>
            Jeg trives med å jobbe i skjæringspunktet mellom teknologi, design
            og mennesker. Jeg liker spesielt godt å jobbe med frontend, og er
            nysgjerrig på hvordan løsningene oppleves for personen som skal
            bruke dem. Masteren min gir meg derfor et bredere perspektiv på
            utvikling, der jeg får kombinere den tekniske bakgrunnen min med
            design og brukerforståelse.{" "}
          </p>

          <p>
            Før jeg begynte å studere teknologi, jobbet jeg som sykepleier. Det
            har lært meg mye om å samarbeide med ulike mennesker, kommunisere
            tydelig og tilpasse meg forskjellige situasjoner.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
