import { getSession } from "@/lib/session";
import styles from "./page.module.css";

export default async function Home() {
  const session = await getSession();
  console.log({ session });

  return (
    <div className={styles.page}>
      <h1>Hala from Next</h1>
    </div>
  );
}
