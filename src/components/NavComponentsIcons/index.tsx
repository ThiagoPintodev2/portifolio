import type { MenuNavProps } from "./MenuNavProps";

function NavComponentesIcons({ path, value, img }: MenuNavProps) {
  console.log( window.location.pathname);
  console.log(path);
  return (
    <div
      className={`${path + "portfolio" === window.location.pathname && "bg-[#FFE3BF] text-[#232120] "} 
      flex flex-col w-[6rem] h-[6rem] gap-2 items-center justify-center
    rounded-2xl bg-bgdark2 border-1 border-mediumbrown shadow-xl/50 
    hover:bg-[#FFE3BF] hover:text-[#232120] transition-colors duration-300`}
    >
      {img}
      <p className={`font-raleway text-[1.2rem] sm:text-[1.2rem]`}>{value}</p>
    </div>
  );
}

export default NavComponentesIcons;

