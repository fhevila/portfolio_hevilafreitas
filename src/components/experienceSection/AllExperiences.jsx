import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Monitora Residência TIC UEMA",
    company: "Brisa e UEMA",
    date: "2025",
    responsibilities: [
      "Apoio aos alunos.",
      "Assistência ao professor de Ead.",
      "Gestão de registros de incidentes.",
      "Monitoramento de e-mails de suporte.",
    ],
  },
  {
    job: "Estagiária",
    company: "APAE",
    date: "2024",
    responsibilities: [
      "Suporte nas atividades necessárias.",
    ],
  },
  {
    job: "Jornada Marandu UEMA E Vale ",
    company: "Vale e UEMA",
    date: "2024-2025",
    responsibilities: [
      "Desenvolvimento solução de Reconhecimento por Imagem para Identificação de Defeitos nos Trilhos.",
      "Apresentação de Pitch.",
      "Escrita de formulários técnicos.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-white lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
