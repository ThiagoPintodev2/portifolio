import type { CardContainerProps } from "./CardContainer";

function CardConatiner({ icon, title1, title2, title3 }: CardContainerProps) {
  return (
    <div
      className={`flex flex-col w-[90%] mb-[2rem] shadow-xl/20 
        border-white/5 border-1 text-ligthbrown bg-[#1f1d1d] rounded-2xl lg:w-[90%] lg:mt-[2rem]`}
    >
      <div className={`flex items-center pl-[2rem]`}>
      {icon}
        <p
        className={`font-raleway text-[1.2rem] pl-8 pb-5 mt-6 max-[639px]:text-[2rem] 
          sm:text-[2rem] md:text-[2rem] lg:text-[2rem] xl:text-[2.2rem]`}
          >
        {title1}
      </p>
      </div>
      <p
        className={`font-raleway text-[1.2rem] pl-8 pb-3 font-semibold min-[639px]:text-[1.4rem] 
          sm:text-[1.6rem] md:text-[1.8rem] lg:text-[1.6rem] xl:text-[2.2rem]`}
      >
        {title2}
      </p>
      <p
        className={`font-raleway text-[1.2rem] pl-8 font-medium mb-6 min-[639px]:text-[1.4rem] 
          sm:text-[1.6rem] md:text-[1.8rem] lg:text-[rem] xl:text-[2.2rem]`}
      >
        {title3}
      </p>
    </div>
  );
}

export default CardConatiner;
