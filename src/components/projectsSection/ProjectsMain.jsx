import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Robô Maria Firmina",
    year: "Agosto de 2024",
    align: "right",
    image: "/images/robo_firmina.jpeg",
    link: "#",
  },
  {
    name: "Modelo de Previsão de Vendas",
    year: "Julho de 2025",
    align: "left",
    image: "/images/pulseminds.jpeg",
    link: "#",
  },
  {
    name: "Guia Maranhão",
    year: "Julho de 2025",
    align: "right",
    image: "/images/buscasaude.jpeg",
    link: "#",
  },
  {
    name: "Plataforma de Eventos UEMA",
    year: "Junho de 2024",
    align: "left",
    image: "/images/plataformauema.jpeg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
