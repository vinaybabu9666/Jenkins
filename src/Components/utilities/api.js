/*
URL Contants
*/
// const isDev = false;

//export const BaseUrl = "https://kflwebsiteapi.azurewebsites.net/api";
export const BaseUrl = "https://localhost:7052/api";

//const isDev = process.env.NODE_ENV === 'development';

// export const BaseUrl = isDev
//   ? process.env.REACT_APP_BASE_URL // Use the development URL
//   : process.env.REACT_APP_BASE_URL; // Use the production URL

//console.log(process.env.REACT_APP_BASE_URL, "dev")

export const AuthUrl = {
  LogOn: BaseUrl + "/Auth/login",
  //ForgotPassword: BaseUrl + "/Account/ForgotPassword",
};
export const AdminUrl = {
  AllUsers: BaseUrl + "/UserData/GetAllUsers",
  UserById: BaseUrl + "/UserData/GetUserById",
  CreateUser: BaseUrl + "/UserData/CreateUser",
  UpdateUser: BaseUrl + "/UserData/UpdateUser",
  DeleteUser: BaseUrl + "/UserData/DeleteUser",
  GetEventItemUserTasks: BaseUrl + "/Dashboard/GetEventItemUserTasks",
  GetEventItemTaskApprovals: BaseUrl + "/Dashboard/GetEventItemTaskApprovals",
  AddEditTaskResourceAssociations:
    BaseUrl + "/Dashboard/AddEditTaskResourceAssociations",
  GetTaskAssociatedResources: BaseUrl + "/Dashboard/GetTaskAssociatedResources",
};
