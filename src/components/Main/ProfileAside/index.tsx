import profileImage from "@/assets/profileImage.jpg";
import { Button } from "@/components/ui/button";

function ProfileAside() {
  return (
    <div
      className={`flex flex-col w-[30%] h-[90vh] bg-[#232120] rounded-3xl items-center`}
    >
      <div>
        <img
          src={profileImage}
          alt="profile image"
          className={`w-[60%] mt-[-25%] rounded-3xl m-auto`}
        />
      </div>
      <div className={`flex flex-col items-center justify-center`}>
        <p className={`font-poppins text-[3rem] mt-[3.6rem] text-ligthbrown`}>
          Thiago da Silva
        </p>
        <p
          className={`font-poppins text-[1.6rem] mt-[1rem] text-ligthbrown font-extralight`}
        >
          Front End Developer
        </p>
      </div>
      <div className={`flex gap-1`}>
        <Button
          className={`w-[7rem] h-[6rem] flex items-center justify-center bg-[#232120] rounded-l-2xl
                border border-white/5 shadow-[5px_5px_15px_rgba(0,0,0,0.4),-1px_-1px_2px_rgba(255,255,255,0.05)]
                text-gray-400 hover:text-[#dcc7a1] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5)]`}
        >
          teste
        </Button>
        <Button
          className={`w-[6rem] h-[6rem] flex items-center justify-center bg-[#232120] 
                border border-white/5 shadow-[5px_5px_15px_rgba(0,0,0,0.4),-1px_-1px_2px_rgba(255,255,255,0.05)]
                text-gray-400 hover:text-[#dcc7a1] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5)]`}
        >
          teste
        </Button>
        <Button
          className={`w-[6rem] h-[6rem] flex items-center justify-center bg-[#232120] 
                border border-white/5 shadow-[5px_5px_15px_rgba(0,0,0,0.4),-1px_-1px_2px_rgba(255,255,255,0.05)]
                text-gray-400 hover:text-[#dcc7a1] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5)]`}
        >
          teste
        </Button>
        <Button
          className={`w-[7rem] h-[6rem] flex items-center justify-center bg-[#232120] rounded-r-2xl
                border border-white/5 shadow-[5px_5px_15px_rgba(0,0,0,0.4),-1px_-1px_2px_rgba(255,255,255,0.05)]
                text-gray-400 hover:text-[#dcc7a1] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5)]`}
        >
          teste
        </Button>
      </div>
    </div>
  );
}

export default ProfileAside;
