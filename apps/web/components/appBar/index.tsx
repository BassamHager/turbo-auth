"use client";
import React, { useContext } from "react";
import styles from "./appBar.module.scss";
// components
import SignInButton from "@/components/signInButton";
import AppBarTab from "../appBarTab";
import { NavContext } from "@/context/navContext";

const AppBar = () => {
  const { navTabs } = useContext(NavContext);

  return (
    <nav className={styles.wrapper}>
      {navTabs.slice(0, 3).map((tab) => (
        <AppBarTab key={tab.name} tab={tab} />
      ))}

      <SignInButton />
    </nav>
  );
};

export default AppBar;
