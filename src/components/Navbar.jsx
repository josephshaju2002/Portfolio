import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-zinc-950 border-b border-zinc-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-white font-bold text-xl">&lt; JOSEPH SHAJU &gt;</h1>

        {/* Desktop */}
        <div className="hidden sm:flex space-x-6 text-white">
          {["home", "about", "skills", "projects", "education"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:bg-gray-800 px-3 py-2 rounded"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-white text-2xl"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden bg-zinc-950 px-4 pb-4 space-y-2 text-white">
          {["home", "about", "skills", "projects", "education"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block hover:bg-gray-800 px-3 py-2 rounded"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
