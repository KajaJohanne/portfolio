export function Hero() {
  return (
    <section id="hjem" className="p-6 md:p-12">
      <h1 className="font-cabinet text-8xl">Kaja Johanne Myrmel</h1>
      <p className="text-xl font-general mt-2">Frontend utvikler</p>

      <div className="mt-16 flex flex-col gap:10 md:flex-row md:items-center md:justify-between md:gap-16">
        <p className="font-general text-lg leading-relaxed max-w-md md:max-w-sm"> blablabla litt info her kommer venter i spenning </p>

        <img
          src="/images/profilbildedaa.jpg"
          alt="Portrett av Kaja"
          className="w-full max-w-sm object-cover md:w-96"
        ></img>
      </div>
    </section>
  );
}
