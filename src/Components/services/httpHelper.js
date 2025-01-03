import PropTypes from "prop-types";
import { DocumentUrl } from "../utilities/api";
import { trackPromise } from "react-promise-tracker";
import AuthService from "./auth-service";

var token = AuthService.getToken();
export const HttpPost = ({
  url,
  data,
  successCallBack,
  errorCallBack = (error) => {
    console.log("Error: ", error);
    if (error.status === 401) {
      if (AuthService.isLogon()) {
        AuthService.LogOut();
        window.location = "/sessionexpired";
      } else {
        window.location = "/unauthorized";
      }
    }
  },
}) => {
  trackPromise(
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (response.ok) return response.json();

        return Promise.reject(response);
      })
      .then(function (result) {
        successCallBack(result);
      })
      .catch(function (error) {
        errorCallBack(error);
      })
  );
};

export const HttpGet = ({
  url,
  successCallBack,
  errorCallBack = (error) => {
    console.log("Error: ", error);
    if (error.status === 401) {
      if (AuthService.isLogon()) {
        AuthService.LogOut();
        window.location = "/sessionexpired";
      } else {
        window.location = "/sessionexpired";
      }
    }
  },
}) => {
  trackPromise(
    fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + token,
        "content-type": "application/json; charset=UTF-8",
      }),
    })
      .then(function (response) {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then(function (result) {
        successCallBack(result);
      })
      .catch(function (error) {
        errorCallBack(error);
      })
  );
};

export const HttpPostFormData = ({
  url,
  data,
  successCallBack,
  errorCallBack = (error) => {
    console.log("Error: ", error);
    if (error.status === 401) {
      if (AuthService.isLogon()) {
        AuthService.LogOut();
        window.location = "/sessionexpired";
      } else {
        window.location = "/unauthorized";
      }
    }
  },
}) => {
  trackPromise(
    fetch(url, {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + token,
      }),
      body: data,
    })
      .then(function (response) {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then(function (result) {
        successCallBack(result);
      })
      .catch(function (error) {
        errorCallBack(error);
      })
  );
};

export const RedirectTo = (
  controller,
  action,
  routeval,
  isQuerystring = false
) => {
  if (!isQuerystring) {
    window.location = "/" + controller + "/" + action;
  } else {
    window.location = "/" + controller + "/" + action + "/" + routeval;
  }
};

// export const ShowPDFDocumentsWindow = (
//   fileName,
//   entityTypeId = null,
//   entityInstanceId = null,
//   associatedEntiTypeId = null,
//   associatedInstanceId = null,
//   statusId = null,
//   typeOfProcess = null
// ) => {
//   var Url =
//     DocumentUrl.ShowPDFDocument +
//     "?fileName=" +
//     fileName +
//     "&entityTypeId=" +
//     entityTypeId +
//     "&entityInstanceId=" +
//     entityInstanceId +
//     "&associatedEntiTypeId=" +
//     associatedEntiTypeId +
//     "&associatedInstanceId=" +
//     associatedInstanceId +
//     "&statusId=" +
//     statusId +
//     "&typeOfProcess=" +
//     typeOfProcess;
//   window.open(Url, "_blank");
// };

HttpPost.propTypes = {
  url: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  successCallBack: PropTypes.func.isRequired,
  errorCallBack: PropTypes.func,
};

HttpGet.propTypes = {
  url: PropTypes.string.isRequired,
  successCallBack: PropTypes.func.isRequired,
  errorCallBack: PropTypes.func,
};

export default HttpPost;
