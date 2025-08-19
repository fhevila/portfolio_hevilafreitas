import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/h%C3%A9vila-freitas-36344b203" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/fhevila" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;
