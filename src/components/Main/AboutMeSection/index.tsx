function AboutMeSection() {
  return (
    <div className={`div-about-me bg-[#FFE3BF] h-[40%] mt-[2.5rem]`}>
      <div className={`flex flex-col items-center`}>
        <h2 className={`font-poppins text-[3.2rem] text-[#232120] m-[1.5rem] opacity-75`}>
          ABOUT ME
        </h2>
        <hr className={`bg-[#232120] h-[2px] w-[12rem]`} />
      </div>
      <div>
        <p
          className={`p-about-me text-[#232120]`}
        >
          Novo na área de tecnologia e em constante evolução. Recentemente, fiz
          uma transição de carreira de professor de Educação Física para o universo da
          programação. Por que? Porque acredito que a tecnologia é a ferramenta
          mais poderosa para transformar ideias em realidade. Ser um
          profissional Júnior para mim significa ter 'mente de principiante':
          estou sempre disposto a aprender, aceitar feedbacks e testar novas
          formas de chegar a um resultado. Dedico meus dias a aperfeiçoar minhas
          habilidades. Estou pronto para somar em uma equipe que valorize a
          vontade de crescer e o compromisso com a entrega."
        </p>
      </div>
    </div>
  );
}

export default AboutMeSection;
