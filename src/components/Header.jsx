import "./css/header.css";
import React, { useState } from "react";
import { MenuButton } from "./MenuButton";
import { Navbar } from "./Navbar";

const Header = () => {
  // Este estado nos dira si el menu de despliega o no
  const [open, setOpen] = useState(false);

  const unfoldMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <h1>ReactJS📚</h1>
      <Navbar open={open} />
      <MenuButton unfoldMenu={unfoldMenu} open={open} />
    </header>
  );
};

export { Header };
