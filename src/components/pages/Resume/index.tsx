import React from "react";
import CardContainer from "@/components/CardContainer";
import Header from "@/components/Header/Index";
import ProfileAside from "@/components/ProfileAside";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";
import WorkskillsSection from "@/components/WorkSkillsSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import type { ResumeProps } from "./resume";

const education: ResumeProps[] = [
  {
    year: "2020 - 2021",
    title: "Software Development",
    place: "Moringa School",
  },
  {
    year: "2020 - 2021",
    title: "Software Development",
    place: "Moringa School",
  },
];

const experience: ResumeProps[] = [
  {
    year: "2022 - Present",
    title: "Technical Mentor",
    place: "Moringa School",
  },
  {
    year: "2022 - Present",
    title: "Technical Mentor",
    place: "Moringa School",
  },
];

function Section({
  Icon,
  title,
  items,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  items: ResumeProps[];
}) {
  return (
    <section
      className={`flex flex-col w-[100%] items-center md:flex-col md:w-[100%]`}
    >
      <div className={`flex gap-4 my-[2rem]`}>
        <Icon size={30} className={`text-ligthbrown`} />
        <h3 className={`text-white font-poppins text-[2rem]`}>{title}</h3>
      </div>
      {items.map((el, i) => (
        <CardContainer
          key={i}
          icon={<HiOutlineArrowRight size={28} />}
          title1={el.year}
          title2={el.title}
          title3={el.place}
        />
      ))}
    </section>
  );
}

function Resume() {
  return (
    <div>
      <Header />
      <main
        className={`flex mt-50 max-w-[1280px] h-[90%] m-auto gap-8 pb-18 max-[1024px]:flex-col`}
      >
        <ProfileAside />
        <div
          className={`flex flex-col h-[100%] items-center justify-between bg-[#232120] rounded-3xl m-auto w-[80vw] sm:w-[70vw] md:w-[60vw] lg:mt-[8rem] lg:w-[65vw] lg:h-[100rem] xl:w-[65vw]`}
        >
          <header className={`flex flex-col items-center`}>
            <h2
              className={`font-poppins text-[3.2rem] text-ligthbrown m-[1.5rem] opacity-75`}
            >
              RESUMO
            </h2>
            <hr className={`bg-[#232120] h-[2px] w-[12rem]`} />
          </header>

          <div
            className={`flex items-center w-[100%] lg:mt-[2rem] max-[1024px]:flex-col`}
          >
            <Section
              Icon={RiGraduationCapFill}
              title="Educação"
              items={education}
            />
            <Section
              Icon={MdWorkHistory}
              title="Experiência"
              items={experience}
            />
          </div>

          <div
            className={`flex flex-col h-[20%] gap-[2rem] pb-[1.5rem] mt-[2rem] items-center justify-between 
              bg-[#232120] rounded-3xl w-[80vw] m-auto sm:w-[100%] md:px-[2rem]`}
          >
            <WorkskillsSection />
            <SoftSkillsSection />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resume;
