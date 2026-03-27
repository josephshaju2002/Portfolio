import resume from "../media/Joseph Shaju_MERN Stack Developer.pdf";
import profile from "../media/Adobe Express - file.png";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-gradient-to-r from-neutral-950 via-neutral-900 to-zinc-800 overflow-hidden"
    >
      <div className="grid md:grid-cols-2 items-center px-6 md:px-20 py-20">
        {/* LEFT */}
        <div className="z-10 space-y-6">
          <p className="text-orange-400 text-lg tracking-wide">Hello, I'm</p>

          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
            JOSEPH SHAJU
          </h1>

          <h2 className="text-zinc-300 text-xl md:text-2xl">
            Jr MERN Stack Developer
          </h2>

          <p className="text-zinc-400 max-w-lg">
            I build scalable web applications with modern technologies, focusing
            on performance, clean design, and user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* Resume */}
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button
                className="px-6 py-2 rounded-full bg-orange-500 text-black font-semibold 
                hover:bg-orange-600 hover:scale-105 transition duration-300 shadow-lg shadow-orange-500/20"
              >
                RESUME
              </button>
            </a>

            {/* Projects */}
            <a href="#projects">
              <button
                className="px-6 py-2 rounded-full border border-orange-500 text-orange-400 font-semibold 
                hover:bg-orange-500 hover:text-black transition duration-300"
              >
                View Projects
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center md:justify-center md:pl-10 mt-10 md:mt-0">
          {/* Glow Background */}
          <div className="absolute w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

          {/* Profile Image */}
          <img
            src={profile}
            alt="profile"
            className="w-64 md:w-80 rounded-2xl shadow-2xl border border-orange-500/20 relative z-10"
          />

          {/* Social Icons */}
          <div
            className="absolute top-[350px] left-[] 
    md:top-1/2 md:right-0 md:translate-x-1/2 md:-translate-y-1/2
    flex md:flex-col gap-5 text-2xl md:text-3xl z-20"
          >
            <a
              href="https://www.linkedin.com/in/joseph-shaju-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white hover:text-orange-400 hover:scale-110 transition" />
            </a>

            <a
              href="https://github.com/josephshaju2002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white hover:text-orange-400 hover:scale-110 transition" />
            </a>

            <a
              href="https://www.instagram.com/j0se_ph_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="text-white hover:text-orange-400 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle background overlay for mobile */}
      {/* <img
        src={profile}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover opacity-10 md:hidden"
      /> */}
    </section>
  );
}
