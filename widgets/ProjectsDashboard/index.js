import { useProjects } from "@/hooks/useProjects";
import styles from "./index.module.css";
import { ProjectItem } from "./ProjectItem";
import { ViewList } from "./ViewList";

export const ProjectsDashboard = () => {
  const { state, createProject, createView, setCurrentView } = useProjects();
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
  
    <ViewList 
      views={state.views}
      current_view_id={state.current_view_id}
      create={createView}
      setCurrentView={setCurrentView}
    />
    
    {state.list.map(project => (
      <ProjectItem key={project.id} project={project}/>
    ))}
  </div>
}