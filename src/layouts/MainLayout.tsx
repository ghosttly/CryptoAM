import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col sm:pt-24 bg-cyan-1 pb-10 px-4 sm:px-12">
      {children}
    </div>
  );
};
