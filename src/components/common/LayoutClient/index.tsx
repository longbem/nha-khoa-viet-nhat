import React, { FC } from "react";
import FooterClient from "./Footer";
import HeaderClient from "./Header";
import CTASectionClient from "./CTASection";

interface LayoutClientProps {
  children: React.ReactNode;
}

const LayoutClient: FC<LayoutClientProps> = ({ children }) => {
  return (
    <>
      <HeaderClient />
      {children}
      <CTASectionClient />
      <FooterClient />
    </>
  );
};

export default LayoutClient;
