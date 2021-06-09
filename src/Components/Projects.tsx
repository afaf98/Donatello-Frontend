import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../actions/projects";
import { IProjectWithTags } from "../models/projects.interface";
import { selectProjects } from "../selectors/projects";

export default function Projects() {
  const projectsState = useSelector(selectProjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects);
  }, []);

  return (
    <div>
      {projectsState.projects &&
        projectsState.projects.map((project: IProjectWithTags) => {
          return (
            <div key={project.id}>
              ---------------------------------------------------------
              <h3>{project.projectName}</h3>
              <p>{project.projectDescription}</p>
              <b>Amount collected : {project.totalDonationAmount} </b>
              <div>Total donations : {project.totalDonationCount}</div>
              <div>
                Tags:
                {project.tags.map((tag) => {
                  return <div>{tag.tag}</div>;
                })}
              </div>
              <div> {moment(project.createdAt).fromNow(true)} ago</div>
            </div>
          );
        })}
    </div>
  );
}
