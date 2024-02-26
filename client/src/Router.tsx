import { HomePage } from "./pages/Home/Home.page";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Aside } from "./components/Aside";

/*
  A router could go here but the app only has one page. 
  If there are multiple routers (e.g. authenticated vs unauthenticated users)
  then I would prefer putting routers in a separate directory rather in 
  the root of /src. 
*/
export const Router = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Aside />
      <Footer />
    </div>
  );
};
