import styles from "./index.module.css";

export const Navbar = () => {
  return (
  <nav
    className={styles.root}
  >
    <button>Home</button>
    <button>Projects</button>
    <button>Tasks</button>
  </nav>
  )
}