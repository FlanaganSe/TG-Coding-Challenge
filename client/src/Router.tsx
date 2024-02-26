import { HomePage } from "./pages/Home/Home.page";

/*
  A router could go here but the app only has one page. 
  If there are multiple routers (e.g. authenticated vs unauthenticated users)
  then I would recommend putting routers in a separate directory rather in 
  the root of /src. 
*/
export const Router = () => {
  return <HomePage />;
};
