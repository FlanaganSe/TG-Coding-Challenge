import { GolfSVGLogo } from "../assets/svgs/GolfSVG";
import { LogoutSVG } from "../assets/svgs/LogoutSVG";

// Source for adding style with tailwind: https://cssf1.com/snippet/add-text-shadow-with-tailwind-css
export const Header = () => {
  return (
    <header className="flex items-center justify-between pb-4">
      <a href="/">
        <GolfSVGLogo className="h-8 md:h-14 transition hover:scale-110 duration-300" />
      </a>
      <h1 className="text-xl md:text-3xl [text-shadow:1px_1px_var(--tw-shadow-color)] shadow-red-200 italic">
        TG: Where Excitement Begins
      </h1>
      <LogoutSVG />
    </header>
  );
};
