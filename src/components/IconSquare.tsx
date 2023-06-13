import { BiBot } from "react-icons/bi";
import { MdOutlineTimer } from "react-icons/md";
import { GiPlasticDuck } from "react-icons/gi";
// import { VscDebugConsole } from "react-icons/vsc";
import { FiTarget } from "react-icons/fi";
import { Link } from "react-router-dom";

interface IconSquareProps {
  icon: string;
  path: string;
}

function IconSquare({ icon, path }: IconSquareProps) {
  const getIcon = (str: string) => {
    switch (str) {
      case "bibot":
        return <BiBot />;
      case "mdoutlinetimer":
        return <MdOutlineTimer />;
      case "giplasticduck":
        return <GiPlasticDuck />;
      case "fitarget":
        return <FiTarget />;
      default:
        return;
    }
  };
  return (
    <Link
      to={path}
      className="group bg-[#333] w-[52px] h-[52px] lg:w-[70px] lg:h-[70px] flex items-center justify-center overflow-hidden text-white transition-all duration-300 hover:bg-[#8d839c]"
    >
      <div className="group-hover:animate-slide-from-top text-lg lg:text-xl">{getIcon(icon)}</div>
    </Link>
  );
}

export default IconSquare;
