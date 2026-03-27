export default function About() {
  return (
    <section id="about" className="bg-zinc-900 py-24 px-4 flex justify-center">
      <div className="max-w-5xl w-full bg-zinc-950/80 backdrop-blur-md border border-orange-500/30 rounded-3xl p-8 md:p-12 shadow-xl">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            ABOUT ME
          </h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            I am a{" "}
            <span className="text-orange-400 font-semibold">
              versatile full-stack developer
            </span>{" "}
            specializing in the{" "}
            <span className="text-orange-400 font-semibold">MERN stack</span>,
            with experience building scalable web applications. My expertise in{" "}
            <span className="text-white font-medium">
              MongoDB, Express.js, React, and Node.js
            </span>{" "}
            allows me to create robust and responsive solutions for real-world
            problems.
          </p>

          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            I enjoy exploring new technologies and continuously improving my
            skills to stay aligned with modern development practices.
          </p>

          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            I believe in{" "}
            <span className="text-orange-400 font-medium">
              consistency, focus, and continuous learning
            </span>{" "}
            to grow as a developer and contribute to impactful projects.
          </p>
        </div>

        {/* Bottom Accent */}
        <div className="mt-10 flex justify-center">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
