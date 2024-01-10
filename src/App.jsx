import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
debugger;
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //We use undefined(no project yet), null(no project selected) and id for selected project
    projects: [],
  });
  function handleStartAddProject() {
    // here we want to also get the previous state because pur proious state will have the list of objects
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(savedData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...savedData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  console.log(projectsState);
  let content;
  if (projectsState.selectedProjectId === null)
    content = <NewProject addProject={handleAddProject} />;
  else if (projectsState.selectedProjectId === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
