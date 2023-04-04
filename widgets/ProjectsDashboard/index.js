import { useProjects } from "@/hooks/useProjects";
export const ProjectsDashboard = () => {
  const { state } = useProjects();
  console.log("state", state);
  return <div>
    <button>create project</button>
    {state.list.map(project => {
      return (
        <div 
          key={project.id}
          className="project"
        >
          {project.name}
        </div>
      )
    })}
  </div>
}