import styles from "./ProjectItem.module.css";

export const ProjectItem = ({ project }) => {
  return (
    <div 
      key={project.id}
      className={styles.root}
    >
      <p>{project.name}</p>

    </div>
  )
}