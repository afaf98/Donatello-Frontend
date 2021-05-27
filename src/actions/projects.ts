import { IProjectWithTags } from "../models/projects.interface";

interface IGetProjects {
  type: "GET_PROJECTS";
  payload: IProjectWithTags[];
}

export const getProjects = (projects: IProjectWithTags[]): IGetProjects => ({
  type: "GET_PROJECTS",
  payload: projects,
});

export type TProjectsActions = IGetProjects; // in case you want to add more action use union type and name function
