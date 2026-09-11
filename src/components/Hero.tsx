import Typewriter from "typewriter-effect";

export function Hero() {
  return (
    <section
      id="hjem"
      className=" flex flex-col items-center justify-center text-center gap-4 min-h-screen p-6 md:p-12 bg-cream"
    >
      <p className="font-genereal text-sm text-ink-muted">Hei, jeg heter</p>
      <h1 className="font-cabinet text-8xl text-ink">Kaja Johanne Myrmel</h1>



      <div className="text-xl font-general mt-2 text-ink-muted">
        <Typewriter
          options={{
            strings: ["Frontend utvikler"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className="mt-16 flex flex-col gap:10 md:flex-row md:items-center md:justify-between md:gap-16">
        <p className="font-general text-lg leading-relaxed max-w-md md:max-w-sm">
          {" "}
          Jeg studerer nå en master i Design av tjenester, teknologi og samhandling ved NTNU.{" "}
        </p>
      </div>
    </section>
  );
}
