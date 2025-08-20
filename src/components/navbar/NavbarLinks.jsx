import { Link } from "react-scroll";

const links = [
  { link: "Sobre mim", section: "about" },
  { link: "Habilidades", section: "skills" },
  { link: "Experiências", section: "experience" },
  { link: "Projetos", section: "projects" },
  { link: "Contato", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-verdeEscuro/50 backdrop-blur-lg lg:bg-rosaEscuro sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-verdeEscuro transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-verdeEscuro w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
