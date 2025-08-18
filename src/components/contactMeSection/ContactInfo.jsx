import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="hevilafreitas2@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="(98) 98172-8986" Image={FiPhone} />
      <SingleInfo text="São Luis, Maranhão" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
