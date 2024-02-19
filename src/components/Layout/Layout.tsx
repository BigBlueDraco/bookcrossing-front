import { Outlet } from "react-router-dom";
import { BottomBar } from "../BottomBar/BottomBar";

export const Layout: React.FC = () => {
  return (
    <>
      <Outlet />
      <BottomBar />
    </>
  );
};
