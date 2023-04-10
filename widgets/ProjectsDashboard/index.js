import { useProjects } from "@/hooks/useProjects";
import styles from "./index.module.css";
import { ProjectItem } from "./ProjectItem";
import { ViewList } from "./ViewList";

export const ProjectsDashboard = () => {
  const { state, createProject, createView } = useProjects();
  return <div 
    className={styles.root}
  >
    <h1>Projects Dashboard</h1>
    <button
      onClick={e => {
        e.preventDefault();
        createProject();
      }}
    >Create</button>
  
    <ViewList views={state.views} current_view={state.current_view} create={createView}/>
    
    {state.list.map(project => (
      <ProjectItem key={project.id} project={project}/>
    ))}
  </div>
}