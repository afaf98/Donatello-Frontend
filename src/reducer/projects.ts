import { AnyAction } from "@reduxjs/toolkit";
import { TProjectsActions } from "../actions/projects";
import { IProjectState } from "../models/projects.interface";

const initialState: IProjectState = {
  projects: null,
};

export default function reducer(
  state: IProjectState | undefined = initialState,
  action: TProjectsActions | AnyAction = { type: "NULL" }
) {
  switch (action.type) {
    case "GET_PROJECTS": {
      const newState = {
        ...state,
        projects: action.payload,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
