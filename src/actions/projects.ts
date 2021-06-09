import { IProjectWithTags } from "../models/projects.interface";
import { Project } from "../api/projects";

interface IGetProjects {
  type: "GET_PROJECTS";
  payload: IProjectWithTags[];
}

export const getProjects = (projects: IProjectWithTags[]): IGetProjects => ({
  type: "GET_PROJECTS",
  payload: projects,
});

export const fetchProjects = async (dispatch: any, getState: any) => {
  dispatch({ type: "APP_LOADING" });
  const response = await Project.getProjects();
  dispatch(getProjects(response.sortedProjects));
  dispatch({ type: "APP_DONE_LOADING" });
};

export type TProjectsActions = IGetProjects; // in case you want to add more action use union type and name function
