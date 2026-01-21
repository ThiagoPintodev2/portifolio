import { MdOutlinePhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

function ContactSection() {

  const contactData = [
    {
      title: 'Phone',
      value: '(22) 99968-7139',
      contactIcon: <MdOutlinePhoneIphone /> 
    },
    {
      title: 'Email',
      value: 'thiago.silvabz@hotmail.com',
      contactIcon: <AiOutlineMail  /> 
    },
    {
      title: 'Location',
      value: 'Rio de Janeito - Brasil',
      contactIcon: <IoLocationSharp /> 
    },
  ]


  return (
    <div
      className={`flex flex-col w-[100%] bg-[#1f1d1d] rounded-3xl text-ligthbrown font-raleway text-[2rem]`}
    >
      {
        contactData.map((el) => (
          <div className={`flex flex-col mt-[3rem] justify-center items-center text-center gap-3`}>
        <div
          className={`flex items-center justify-center w-[6.6rem] h-[6.6rem] bg-[#3c3730] rounded-2xl`}
        >
          {el.contactIcon}
        </div>
        <div className={`flex flex-col`}>
          {el.title}
          <p>{el.value}</p>
        </div>
        <div className={`bg-ligthbrown h-[0.1px] w-[85%] mt-[1.8rem]`}></div>
      </div>
        ))
      }     
    </div>
  );
}

export default ContactSection;
