import Footer from "../Footer";
import Navbar from "./Navbar";
import React from 'react';

type props = {
  children:JSX.Element[],
  setDark: React.Dispatch<React.SetStateAction<any>>,
}

const Layout = ({ children,setDark }:props) => {

  return (
    <>
      <Navbar setDark={setDark} />
        {children}
      <Footer />
    </>
  );
}

export default Layout;
