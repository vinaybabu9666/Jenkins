const USER_NAME = "userName";
const TOKEN_KEY = "token";
const User_Id = "userId";
const Role_Id = "roleId";
const Image = "profileImageUrl";

export const AuthService = {
  isLogon: function () {
    //debugger

    const token = localStorage.getItem(TOKEN_KEY);

    if (token !== null && token !== undefined) {
      return true;
    }
    return false;
  },

  LogOn: function (token, userName, roleId, userId, profileImageUrl) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(User_Id, userId);
    localStorage.setItem(USER_NAME, JSON.stringify(userName));
    localStorage.setItem(Role_Id, roleId);
    localStorage.setItem(Image, profileImageUrl);

    return true;
  },
  SSOLogOn: function (token, userName, roleId, userId, profileImageUrl) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(User_Id, userId);
    localStorage.setItem(USER_NAME, JSON.stringify(userName));
    localStorage.setItem(Role_Id, roleId);
    localStorage.setItem(Image, profileImageUrl);
    return true;
  },

  LogOut: function () {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_NAME);
    localStorage.removeItem(Role_Id);
    localStorage.removeItem(User_Id);
    localStorage.removeItem(Image);

    return true;
  },

  getUserData: function () {
    if (this.isLogon) {
      const userData = localStorage.getItem(USER_NAME);
      return JSON.parse(userData);
    }
  },
  getToken: function () {
    return localStorage.getItem(TOKEN_KEY);
  },
  getUserId: function () {
    return localStorage.getItem(User_Id);
  },
  getRoleId: function () {
    return localStorage.getItem(Role_Id);
  },
  getProfileImage: function () {
    return localStorage.getItem(Image);
  },
};
export default AuthService;
