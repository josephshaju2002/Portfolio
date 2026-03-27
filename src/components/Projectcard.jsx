export default function ProjectCard({ img, title, desc, link, btnText, featured }) {
  return (
    <div className={`bg-neutral-800 rounded-3xl overflow-hidden 
      hover:shadow-2xl hover:shadow-orange-400/30 transition duration-300 group
      ${featured ? "md:col-span-1 md:scale-[1.02]" : ""}`}>

      {/* Image */}
      <div className={`w-full ${featured ? "h-56" : "h-44"} overflow-hidden`}>
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        <h2 className="text-orange-500 text-xl font-bold mb-2">
          {title}
        </h2>

        <p className="text-neutral-300 text-sm md:text-base mb-4">
          {desc}
        </p>

        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="bg-orange-500 px-5 py-2 rounded-xl font-semibold 
            hover:bg-orange-700 hover:scale-105 transition duration-300">
            {btnText}
          </button>
        </a>

      </div>
    </div>
  );
}