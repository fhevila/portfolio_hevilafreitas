import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-7xl text-rosaRosa mb-10">About Me</h2>
      <p className="font-special text-2xl">
        Olá, Sou Hevila Freitas, estudante de Engenharia da Computação na Universidade Estadual do Maranhão,
        com experiência em análise de dados e machine learning. Tive a oportunidade de trabalhar em projetos inovadores,
        como o Acordo de Cooperação com o Tribunal de Justiça do Maranhão, focado na automação de processos judiciais.
        Além disso, participei da Jornada Marandu em parceria com a Vale, desenvolvendo uam solução de reconhecimento por imagem nos trilhos. 
        Busco sempre aplicar minhas habilidades para resolver problemas reais, com foco em eficiência, inovação e transformação digital.
      </p>
      <button className="border border-rosaFraco rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-rosaRosa transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-white transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
