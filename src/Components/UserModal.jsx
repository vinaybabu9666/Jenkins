import React, { useState, useEffect } from "react";
import AuthService from "./services/auth-service";

const UserModal = ({ isOpen, onClose, user, onSave, setProfileImage,existingEmails= []   }) => {
  console.log(existingEmails,'existingEmails');
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    roleId: "",
    password: "",
    designationId: "",
    //profileImageUrl: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [emailError, setEmailError] = useState("");
  
  const RoleID = AuthService.getRoleId();
  useEffect(() => {
    //if (isOpen) {
    if (user) {
      setFormData({
        userName: user.userName || "",
        email: user.email || "",
        roleId: user.roleId || "",
        password: user.password || "",
        designationId: user.designationId || "",
        // profileImageUrl: user.profileImageUrl || ''
      });
    } else {
      setFormData({
        userName: "",
        email: "",
        roleId: "",
        password: "",
        designationId: "",
        profileImageUrl: "",
      });
    }
    //}
  }, [user]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      // Check if the email already exists
      const isDuplicate = existingEmails.includes(value.toLowerCase());
      if (isDuplicate) {
        setEmailError("This email is already taken. Please use a different email.");
      } else {
        setEmailError("");
      }
    }
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData, user?.userId);
  };
  if (!isOpen) return null;

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          {/* <h2><strong style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{user ? "EDIT " : "ADD "}</strong></h2> */}
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
          <form>
            <label>
              User Name
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            </label>
            <label>
              RoleId
              <input
                type="number"
                name="roleId"
                value={formData.roleId}
                onChange={handleChange}
                readOnly={RoleID !== "1"}
                min={1} // Set the minimum value
                max={17}
              />
            </label>
            <label>
              DesignationId
              <input
                type="number"
                name="designationId"
                value={formData.designationId}
                onChange={handleChange}
                readOnly={RoleID !== "1"}
                min={1} // Set the minimum value
                max={4}
              />
            </label>
            
            <label>
              Profile Image:
              <input type="file" onChange={handleImageChange} />
            </label>
            {/* <lable>
          {user.profileImageUrl ? (
                        <img
                          src={`https://localhost:7052${user.profileImageUrl}`}
                          alt={`${user.userName}'s profile`}
                          style={{ width: 50, height: 50, objectFit: 'cover' }}
                        />
                      ) : (
                        <span>No Image</span>
                      )}
          </lable>
          <br></br> */}
            <button type="button" onClick={handleSubmit}>
              {user ? "Update" : "Add"}
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default UserModal;
