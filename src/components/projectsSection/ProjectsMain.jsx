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
    link: "https://www.tjma.jus.br/midia/portal/noticia/514851/tjma-e-uema-lancam-inteligencia-artificial-robo-maria-firmina",
  },
  {
    name: "Modelo de Previsão de Vendas",
    year: "Julho de 2025",
    align: "left",
    image: "/images/pulseminds.jpeg",
    link: "https://pulseminds.vercel.app/",
  },
  {
    name: "Guia Maranhão",
    year: "Julho de 2025",
    align: "right",
    image: "/images/buscasaude.jpeg",
    link: "https://buscasaudema.vercel.app",
  },
  {
    name: "Sistema de Identificação de Defeitos nos Trilhos Ferroviarios da Vale",
    year: "Maio de 2025",
    align: "left",
    image: "/images/vale.jpeg",
    link: "https://www.uema.br/2025/01/uema-realiza-demoday-da-jornada-marandu-em-parceria-com-a-vale/",
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
              link={project.link}  // Passando o link para o componente SingleProject
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
