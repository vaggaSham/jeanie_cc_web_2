import * as React from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import { useSelector } from "react-redux";
import PageLoader from "../common/pageLoader";
type AppLayoutProps = {
  children: React.ReactNode;
};
export const AppLayout = ({ children }: AppLayoutProps) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const { isLoading } = useSelector((state: any) => state.common);
  return (
    <>
      {isLoggedIn && <Header />}
      {isLoggedIn && (
        <div className="bg-[#FFF] pt-[78px]">
          <div className="flex">
            <Sidebar />
            {isLoading && <PageLoader />}
            {children}
          </div>
        </div>
      )}
      {!isLoggedIn && children}
    </>
  );
};
