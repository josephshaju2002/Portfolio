export default function Education() {
  return (
    <section id="education" className="w-full bg-zinc-900 py-24 px-4">
      {/* Title */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl text-white font-bold">EDUCATION</h1>
        <div className="h-1 w-24 bg-orange-500 my-3 rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto mt-16">
        {/* Center Line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-orange-500 h-full rounded-full"></div>

        {/* Item 1 */}
        <TimelineItem
          side="left"
          title="Bachelor of Computer Science and Design"
          place="Viswajyothi College Of Engineering and Technology"
          year="2021 - 2025"
          extra="CGPA : 7.13"
          desc="Graduated with first class, specializing in web technologies and software development."
        />

        {/* Item 2 */}
        <TimelineItem
          side="right"
          title="Higher Secondary Education"
          place="St. Sebastians HSS, Anicadu"
          year="2019 - 2021"
          extra="Percentage: 94%"
          desc="Science stream with Biology as elective."
        />

        {/* Item 3 */}
        <TimelineItem
          side="left"
          title="High School Education"
          place="Nirmala HSS, Muvattupuzha"
          year="2016 - 2019"
          extra="Percentage: 95%"
          desc="Completed with an excellent academic record."
        />
      </div>
    </section>
  );
}

////////////////////////////////////////////////////////

//  Timeline Item
function TimelineItem({ side, title, place, year, extra, desc }) {
  const isLeft = side === "left";

  return (
    <div className="relative flex flex-col md:flex-row items-center mb-16">
      {/* LEFT */}
      <div
        className={`w-full md:w-1/2 ${isLeft ? "md:pr-8 md:text-right" : "md:order-2 md:pl-8"}`}
      >
        <Card
          title={title}
          place={place}
          year={year}
          extra={extra}
          desc={desc}
        />
      </div>

      {/* CENTER DOT */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-orange-500 rounded-full border-4 border-zinc-900 z-10 shadow-md"></div>
      {/* RIGHT EMPTY */}
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  );
}

////////////////////////////////////////////////////////

//  Card
function Card({ title, place, year, extra, desc }) {
  return (
    <div
      className="bg-zinc-950/80 backdrop-blur-md border border-orange-500/30 
      rounded-2xl p-8 md:p-10 
      shadow-lg hover:shadow-orange-500/20 transition duration-300 
      max-w-[550px]"
    >
      <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h2>

      <h3 className="text-orange-400 font-semibold text-lg mb-3">{place}</h3>

      <p className="text-zinc-400 text-sm md:text-base">{year}</p>
      <p className="text-zinc-300 text-sm md:text-base mb-3">{extra}</p>

      <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
