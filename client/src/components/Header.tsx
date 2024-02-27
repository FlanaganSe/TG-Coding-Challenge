import { GolfSVGLogo } from "../assets/svgs/GolfSVG";
import { LogoutSVG } from "../assets/svgs/LogoutSVG";

export const Header = () => {
  return (
    <header className="bg-blue-500 flex items-center">
      <GolfSVGLogo height={50} width={50} />
      <h1>Heading</h1>
      <LogoutSVG height={24} width={24} />
    </header>
  );
};
