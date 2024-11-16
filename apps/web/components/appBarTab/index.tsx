"use client";
import Link from "next/link";
import styles from "./appBarTab.module.scss";
// hooks
import { Tab } from "@/types";
import { NavContext, ReducerActionType } from "@/context/navContext";
import { useContext } from "react";

const AppBarTab = ({ tab }: { tab: Tab }) => {
  // custom hooks
  const { dispatch, isAuthUser } = useContext(NavContext);

  const handleTabClick = () => {
    if (tab.isAuthRequired && !isAuthUser) return;
    dispatch({ type: ReducerActionType.UPDATE, payload: tab.name });
  };

  return (
    <Link
      key={tab.name}
      href={tab?.to}
      onClick={handleTabClick}
      className={`${styles.wrapper} ${tab.isActive ? styles.active : ""}`}
    >
      {tab.name.includes("sign")
        ? tab.name.slice(0, 4) + " " + tab.name.slice(4)
        : tab.name}
    </Link>
  );
};

export default AppBarTab;
