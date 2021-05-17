export interface body {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  bankAccount?: string;
}
export interface responseBody extends body {
  id: string;
  updatedAt: string;
  createdAt: string;
}
export interface login {
  email: string;
  password: string;
}
export interface token {
  token: string;
}
/*
{
    "id": "8fa83801-c4a4-41d2-b5a2-1d0812c363e6",
    "firstName": "afaf",
    "lastName": "bla",
    "email": "email@email.com",
    "bankAccount": "NL91ABNA0417164300",
    "password": "12345678",
    "updatedAt": "2021-05-14T12:44:48.897Z",
    "createdAt": "2021-05-14T12:44:48.897Z"
}
*/
