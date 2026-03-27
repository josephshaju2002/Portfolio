import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-900 py-16 px-4 text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute w-72 h-72 bg-orange-500/10 blur-3xl rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Name */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 tracking-wide">
          Joseph Shaju
        </h1>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-6 text-sm md:text-base">
          {["home", "about", "skills", "projects", "education"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize text-zinc-400 hover:text-orange-400 transition duration-300 hover:scale-110"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a
            href="https://www.linkedin.com/in/joseph-shaju-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-orange-400 hover:scale-125 transition duration-300" />
          </a>

          <a
            href="https://github.com/josephshaju2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-orange-400 hover:scale-125 transition duration-300" />
          </a>

          <a
            href="https://www.instagram.com/j0se_ph_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="hover:text-orange-400 hover:scale-125 transition duration-300" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent my-6"></div>

        {/* Copyright */}
        <p className="text-zinc-500 text-sm">
          © 2025 Joseph Shaju. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
