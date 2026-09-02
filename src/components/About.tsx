export function About() {
  return (
    <section id="om-meg" className="p-6 md:p-12">
      <div className="mt-16 flex flex-col gap:10 md:flex-row md:items-center md:gap-16">
        <img
          src="/images/profilbildedaa.jpg"
          alt="Portrett av Kaja"
          className="w-full max-w-sm object-cover md:w-96"
        ></img>
        <div className="flex flex-col">
          <h3 className="font-cabinet text-2xl">Om meg</h3>
          <p className="font-general text-lg leading-relaxed max-w-md md:max-w-sm">
            {" "}
            blablabla her kommer det mer info{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
