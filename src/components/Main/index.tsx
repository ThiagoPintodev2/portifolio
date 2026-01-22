import TecnologysSection from "../TecnologysSection";
import AboutMeSection from "./AboutMeSection";
import ProfileAside from "./ProfileAside";

function Main() {
  return (
    <div className="mt-50">
      <div className={`flex flex-col`}>
        <ProfileAside />
        <AboutMeSection />
        <TecnologysSection />
      </div>
    </div>
  );
}

export default Main;
