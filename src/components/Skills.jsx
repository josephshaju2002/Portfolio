import reactImg from "../media/react.svg";
import htmlImg from "../media/html5-badge-h-solo.png";
import cssImg from "../media/css.png";
import jsImg from "../media/JavaScript-logo.png";
import bootstrapImg from "../media/bootstrap-logo-shadow.png";
import nodeImg from "../media/node.png";
import expressImg from "../media/express-js.png";
import mongoImg from "../media/Mongodb-PNG-Image-HD.png";
import tailwindImg from "../media/free-tailwind-icon@2x.png";
import netlifyImg from "../media/netlify.jpg";
import blenderImg from "../media/blender_logo_no_socket_white.png";
import githubImg from "../media/github.jpg";
import vscodeImg from "../media/Visual_Studio_Code_1.35_icon.svg.png";
import figmaImg from "../media/figma-logo-512.webp";
import vercelImg from "../media/vercel.jpg";
import renderImg from "../media/render.png";
import PythonImg from "../media/python.png";
import muiImg from "../media/mui.png";

export default function Skills() {
  return (
    <div id="skills" className="w-full bg-zinc-900 py-20 px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl text-white font-bold">SKILLS</h1>
        <div className="h-1 w-20 bg-orange-500 my-3 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* WebDev */}
          <SkillCard title="Web Development">
            <SkillItem img={reactImg} name="React JS" />
            <SkillItem img={nodeImg} name="Node.JS" />
            <SkillItem img={expressImg} name="Express JS" />
            <SkillItem img={mongoImg} name="MongoDB" />
            <SkillItem img={htmlImg} name="HTML" />
            <SkillItem img={cssImg} name="CSS" />
            <SkillItem img={jsImg} name="JavaScript" />
            <SkillItem img={bootstrapImg} name="Bootstrap" />
            <SkillItem img={tailwindImg} name="Tailwind" />
          </SkillCard>

          {/* Others */}
          <SkillCard title="Tools & Others">
            <SkillItem img={githubImg} name="GitHub" />
            <SkillItem img={PythonImg} name="Python" />
            <SkillItem img={renderImg} name="Render" />
            <SkillItem img={netlifyImg} name="Netlify" />
            <SkillItem img={vercelImg} name="Vercel" />
            <SkillItem img={vscodeImg} name="VS Code" />
            <SkillItem img={figmaImg} name="Figma" />
            <SkillItem img={blenderImg} name="Blender" />
            <SkillItem img={muiImg} name="MUI" />
          </SkillCard>
        </div>
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////

// Card Wrapper
function SkillCard({ title, children }) {
  return (
    <div className="bg-zinc-950/80 backdrop-blur-md border border-orange-500/30 rounded-2xl p-8 shadow-lg hover:shadow-orange-500/20 transition duration-300">
      <h2 className="text-center text-xl md:text-2xl font-bold text-white mb-8 border border-orange-500 rounded-lg py-3">
        {title}
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-3 gap-8 place-items-center">
        {children}
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////

//  Skill Item
function SkillItem({ img, name }) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div
        className="w-16 h-16 md:w-18 md:h-18 flex items-center justify-center 
        bg-zinc-800 rounded-xl p-3 
        group-hover:bg-orange-500/20 transition duration-300"
      >
        <img
          src={img}
          alt={name}
          className="w-12 h-12 object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      <p className="text-white text-sm md:text-base mt-3 group-hover:text-orange-400 transition">
        {name}
      </p>
    </div>
  );
}
