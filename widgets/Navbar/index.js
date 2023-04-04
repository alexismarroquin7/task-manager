import { useRouter } from "next/router";
import styles from "./index.module.css";

export const Navbar = () => {
  const router = useRouter();

  return (
  <nav
    className={styles.root}
  >
    <button
      onClick={(e) => {
        e.preventDefault();
        router.push('/projects');
      }}
    >Projects</button>
    <button>Tasks</button>
  </nav>
  )
}