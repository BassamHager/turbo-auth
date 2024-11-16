import { useContext, useEffect, useState } from "react";
import styles from "./signInButton.module.scss";
// lib
import { getSession, Session } from "@/lib/session";
import { NavContext } from "@/context/navContext";
import AppBarTab from "../appBarTab";

const SignInButton = () => {
  const [session, setSession] = useState<Session | null>();
  // hooks
  const { navTabs } = useContext(NavContext);

  useEffect(() => {
    const getServerSession = async () => {
      const sessionData = await getSession();
      if (sessionData?.user.name) {
        setSession(sessionData);
      }
    };
    getServerSession();
  }, []);

  return (
    <div className={styles.wrapper}>
      {!session || !session.user ? (
        <>
          {navTabs
            ?.slice(3, 5)
            .map((tab) => <AppBarTab key={tab.name} tab={tab} />)}
          {/* <Link href={"/auth/signin"}>Sign In</Link>
          <Link href={"/auth/signup"}>Sign Up</Link> */}
        </>
      ) : (
        <>
          <p>{session.user.name}</p>
          <a href={"/api/auth/signout"}>Sign Out</a>
        </>
      )}
    </div>
  );
};

export default SignInButton;
