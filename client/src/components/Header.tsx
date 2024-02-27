import { GolfSVGLogo } from "../assets/svgs/GolfSVG";
import { LogoutSVG } from "../assets/svgs/LogoutSVG";

export const Header = () => {
  return (
    <header className="bg-blue-500 flex items-center justify-between p-4">
      <GolfSVGLogo />
      <h1 className="text-3xl">Top Golf</h1>
      <LogoutSVG />
    </header>
  );
};
