export interface ISignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  bankAccount: string;
}
export interface IUser {
  email: string;
  token?: string;
  password?: string;
  bankAccount: string;
  lastName: string;
  firstName: string;
  // updatedAt: string;
  // createdAt: string;
}
export interface ILogin {
  email: string;
  password: string;
}
export interface IToken {
  token: string;
}
export interface IUserState {
  token: string | null;
  user: IUser | null;
  message: string | null;
}
export interface IMassage {
  message: string;
}

export interface IResponse extends IUser, IMassage {}
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
