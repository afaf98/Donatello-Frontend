export interface IResponseProjects {
  sortedProjects: IProjectWithTags[];
}

export interface IProjectWithTags extends IProject {
  // projects: IProject;
  tags: ITag[];
}

export interface IProject {
  id: string;
  projectName: string;
  projectDescription: string;
  totalDonationAmount: number;
  totalDonationCount: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITag {
  tag: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProjectState {
  projects: IProjectWithTags[] | null;
}

// {
//             "id": "9848bc65-64c5-468f-a84b-053586774607",
//             "projectName": "expedite",
//             "projectDescription": "Customer-focused 5th generation analyzer",
//             "totalDonationAmount": 365,
//             "totalDonationCount": 1,
//             "userId": "d8e32435-bcc3-4cb8-a25e-39d9be6e145b",
//             "createdAt": "2020-08-30T15:40:52.998Z",
//             "updatedAt": "2021-05-24T09:07:25.159Z",
//             "tags": [
//                 {
//                     "tag": "Art&Music",
//                     "createdAt": "2021-05-24T09:07:24.432Z",
//                     "updatedAt": "2021-05-24T09:07:24.432Z",
//                     "ProjectTag": {
//                         "id": 6,
//                         "projectId": "9848bc65-64c5-468f-a84b-053586774607",
//                         "tagId": "c5deab14-ec3a-4700-a9d6-74dd8fb5daf2",
//                         "createdAt": "2021-05-24T09:07:26.307Z",
//                         "updatedAt": "2021-05-24T09:07:26.307Z"
//                     }
//                 }
//             ]
//         },
