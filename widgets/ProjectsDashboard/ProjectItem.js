import styles from "./ProjectItem.module.css";

export const ProjectItem = ({ project }) => {
  return (
    <div 
      key={project.id}
      className={styles.root}
    >
      <label>
        <input 
          value={project.name}
        />
      </label>

    </div>
  )
}