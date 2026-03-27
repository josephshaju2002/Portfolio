import motoImg from "../media2/moto.png";
import vrImg from "../media2/vrgame.png";
import trashImg from "../media2/trash.jpg";
import medipulseImg from "../media2/medipulse.png";
import ProjectCard from "./Projectcard";

export default function Projects() {
  return (
    <div id="projects" className="w-full bg-zinc-900 py-20 px-4">
      {/* Title */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl text-white font-bold">PROJECTS</h1>
        <div className="h-1 w-24 bg-orange-500 my-3 rounded-full"></div>
      </div>

      {/* First Row */}
      <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">
        <ProjectCard
          img={trashImg}
          title="Trash - Waste Management"
          desc="A full-stack waste management platform with React.js, Node.js, and MongoDB. Includes AI chatbot, Google auth, and social features."
          link="https://github.com/josephshaju2002/TrashApp"
          btnText="View Code"
        />

        <ProjectCard
          img={medipulseImg}
          title="Medipulse - Hospital Management"
          desc="A full-stack hospital management web application developed using React.js for the frontend and Node.js,
Express.js, MongoDB for the backend."
          link="https://github.com/josephshaju2002/hospitalManagementFrontend"
          btnText="View Code"
        />
      </div>
      {/* Second Row */}

      <div className="grid md:grid-cols-2 gap-10 mt-10 max-w-6xl mx-auto">
        <ProjectCard
          img={motoImg}
          title="MotoTorque"
          desc="A cinematic animation short film created using Blender 3D and rendered with Cycles. Post-processed in Premiere Pro and DaVinci Resolve for a tech fest promotion."
          link="https://www.instagram.com/reel/C3xgNtePLnW/"
          btnText="View Project"
        />

        <ProjectCard
          img={vrImg}
          title="An Immerscape VR"
          desc="An interactive VR game built using Unity3D where users can explore an open world and interact with objects."
          link="https://drive.google.com/drive/folders/14-ndTx7AzwN8VtlFkCPIagLp64aWa3S9"
          btnText="View Project"
        />
      </div>
    </div>
  );
}
