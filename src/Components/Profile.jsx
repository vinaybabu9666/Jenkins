import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import the jspdf-autotable plugin
//import "./styles.css"; // Make sure to define your CSS in this file
import AuthService from "./services/auth-service";
import { AdminUrl } from "./utilities/api";
import { CgProfile } from "react-icons/cg";
import UserModal from "../Components/UserModal";
import "./Responsive.css";

const Profile = () => {
  const [data, setData] = useState({
    transactionHistory: [],
    notifications: [],
    settings: {
      emailNotifications: false,
      smsNotifications: false,
      twoFactorAuthentication: false,
    },
  });
  const [activeTab, setActiveTab] = useState("user");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    roleId: "",
    password: "",
    designationId: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const token = AuthService.getToken();
  const UserId = AuthService.getUserId();
  const ProfileImage = AuthService.getProfileImage();

  const fetchUserData = async () => {
    try {
      const response = await fetch(AdminUrl.AllUsers, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json; charset=UTF-8",
        },
      });
      const result = await response.json();
      setUserData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const existingEmails = userData.map(user => user.email.toLowerCase());

  const fetchAdditionalData = async () => {
    try {
      const [transactionResponse, notificationResponse, settingsResponse] =
        await Promise.all([
          fetch(AdminUrl.TransactionHistory, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + token,
              "content-type": "application/json; charset=UTF-8",
            },
          }),
          fetch(AdminUrl.Notifications, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + token,
              "content-type": "application/json; charset=UTF-8",
            },
          }),
          fetch(AdminUrl.Settings, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + token,
              "content-type": "application/json; charset=UTF-8",
            },
          }),
        ]);

      const [transactionData, notificationData, settingsData] =
        await Promise.all([
          transactionResponse.json(),
          notificationResponse.json(),
          settingsResponse.json(),
        ]);

      setData({
        transactionHistory: transactionData,
        notifications: notificationData,
        settings: settingsData,
      });
    } catch (error) {
      console.error("Error fetching additional data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchAdditionalData();
  }, []);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedUserData = (userData) => {
    if (sortConfig.key) {
      return [...userData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return userData;
  };

  const sortedTransactionHistory = (transactionHistory) => {
    if (sortConfig.key) {
      return [...transactionHistory].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return transactionHistory;
  };

  const filterTransactionHistory = (transactionHistory) => {
    return transactionHistory.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      return (
        (!start || transactionDate >= start) && (!end || transactionDate <= end)
      );
    });
  };

  const downloadPDF = (data, filename) => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Transaction History", 14, 20);

    const headers = [
      "ID",
      "Date",
      "Description",
      "Amount",
      "Balance",
      "Type",
      "Account Id",
    ];
    const rows = data.map((transaction) => [
      transaction.id,
      transaction.date,
      transaction.description,
      transaction.amount,
      transaction.balance,
      transaction.type,
      transaction.account_id,
    ]);

    doc.autoTable({
      head: [headers],
      body: rows,
      startY: 30,
    });

    doc.save(filename);
  };

  const handleDownload = () => {
    const filteredTransactions = filterTransactionHistory(
      data.transactionHistory
    );
    downloadPDF(filteredTransactions, "transactions.pdf");
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSaveUser = async (user, userId) => {
    console.log(userId, "userId ");
    console.log(user, "user ");
    try {
      const url = userId
        ? `${AdminUrl.UpdateUser}?id=${userId}`
        : AdminUrl.CreateUser;
      const method = userId ? "PUT" : "POST";
      const formData = new FormData();
      formData.append("UserName", user.userName);
      formData.append("Email", user.email);
      formData.append("RoleId", user.roleId);
      formData.append("DesignationId", user.designationId);
      formData.append("Password", user.password);
      // if (profileImage) {
      //   formData.append("ProfileImage", profileImage);
      // }

      // Include the profile image only if it's new or changed
      // Include profile image only if a new image is selected
      if (profileImage) {
        // Append the selected profile image
        formData.append("ProfileImage", profileImage);
      } else if (userId) {
        // If no new image selected, handle existing image
        const existingUser = userData.find((u) => u.userId === userId);
        if (existingUser && existingUser.profileImageUrl) {
          // Extract the image file name from the URL
          const imageName = existingUser.profileImageUrl.split("/").pop();

          // Fetch the existing image as a file from the URL
          const response = await fetch(existingUser.profileImageUrl);
          const blob = await response.blob();

          // Append the image with its original name
          formData.append("ProfileImage", blob, imageName);
          // formData.append("ProfileImage", blob, existingUser.profileImageUrl.split("/").pop());
        }
      }
      await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      fetchUserData(); // Refresh the user list
      setIsModalOpen(false);
      setProfileImage(null); 
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };
  const renderUserImage = (imageUrl) => {
    if (!imageUrl) {
      return <span>No Image</span>;
    }

     // Force image refresh
    const imageSrc = `https://localhost:7052${imageUrl}?${new Date().getTime()}`;
    return (
      <img
        src={imageSrc}
        alt="User profile"
        style={{
          width: 50,
          height: 50,
          objectFit: "cover",
        }}
       
      />
    );
  };
  

  const handleDeleteUser = async (userId) => {
    try {
      await fetch(`${AdminUrl.DeleteUser}?id=${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      fetchUserData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  //--------  PAGINATION  --------//
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return (
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(number)}
              >
                {number}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case "user":
        const paginatedUsers = sortedUserData(userData).slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        return (
          <div className="parent-container">
            <div className="child-component">
              <div className="content">
                <div className="user-info">
                  <div>
                    <br></br>
                  </div>

                  <button
                    onClick={handleAddUser}
                    className="btn btn-md btn-info mr-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add User"
                  >
                    Add
                  </button>
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped">
                      <thead>
                        <tr>
                          <th onClick={() => handleSort("userId")}>
                            User ID
                            {sortConfig.key === "userId" &&
                              (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                          </th>
                          <th onClick={() => handleSort("userName")}>
                            User Name
                            {sortConfig.key === "userName" &&
                              (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                          </th>
                          <th onClick={() => handleSort("email")}>
                            Email
                            {sortConfig.key === "email" &&
                              (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                          </th>
                          <th onClick={() => handleSort("roleId")}>
                            RoleId
                            {sortConfig.key === "roleId" &&
                              (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                          </th>
                          <th onClick={() => handleSort("designationId")}>
                            Designation Id
                            {sortConfig.key === "roleNdesignationIdame" &&
                              (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                          </th>
                          <th>Profile Image</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedUsers &&
                          paginatedUsers.map((user) => (
                            <tr key={user.userId}>
                              <td>{user.userId}</td>
                              <td>{user.userName}</td>
                              <td>{user.email}</td>
                              <td>{user.roleId}</td>
                              <td>{user.designationId}</td>
                              <td>{renderUserImage(user.profileImageUrl)}</td>
                              {/* <td>
                                {user.profileImageUrl ? (
                                  <img
                                    src={`https://localhost:7052${user.profileImageUrl}`}
                                    alt={`${user.userName}'s profile`}
                                    style={{
                                      width: 50,
                                      height: 50,
                                      objectFit: "cover",
                                    }}
                                  />
                                ) : (
                                  <span>No Image</span>
                                )}
                              </td> */}
                              <td>
                                <button
                                  onClick={() => handleEditUser(user)}
                                  className="btn btn-md btn-info mr-1"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDeleteUser(user.userId)}
                                  className="btn btn-md btn-danger"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Delete"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  {renderPagination()}
                  <UserModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    user={selectedUser}
                    onSave={handleSaveUser}
                    setProfileImage={setProfileImage}
                    existingEmails={existingEmails} // Pass the existing emails
                  />
                </div>
              </div>
            </div>
            <footer></footer>
          </div>
        );
      case "transactionHistory":
        if (!data.transactionHistory) return <div>Loading...</div>;
        const sortedFilteredTransactions = sortedTransactionHistory(
          filterTransactionHistory(data.transactionHistory)
        );
        const paginatedTransactions = sortedFilteredTransactions.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        return (
          <div className="transaction-history">
            <h2>Transaction History</h2>
            <div className="filters">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start Date"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
              />
              <button
                onClick={() => {
                  setStartDate("");
                  setEndDate("");
                }}
              >
                Clear
              </button>
              <button onClick={handleDownload}>Download PDF</button>
            </div>
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th onClick={() => handleSort("id")}>
                    ID
                    {sortConfig.key === "id" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>
                  <th onClick={() => handleSort("date")}>
                    Date
                    {sortConfig.key === "date" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>
                  <th onClick={() => handleSort("description")}>
                    Description
                    {sortConfig.key === "description" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>
                  <th onClick={() => handleSort("amount")}>
                    Amount
                    {sortConfig.key === "amount" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>
                  <th onClick={() => handleSort("balance")}>
                    Balance
                    {sortConfig.key === "balance" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>
                  <th onClick={() => handleSort("type")}>
                    Type
                    {sortConfig.key === "type" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>
                  <th onClick={() => handleSort("account_id")}>
                    Account Id
                    {sortConfig.key === "account_id" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.balance}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.account_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              {Array.from(
                {
                  length: Math.ceil(
                    sortedFilteredTransactions.length / itemsPerPage
                  ),
                },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={currentPage === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>
          </div>
        );
      case "notifications":
        if (!data.notifications) return <div>Loading...</div>;
        return (
          <div className="notifications">
            <h2>Notifications</h2>
            <ul>
              {data.notifications.map((notification, index) => (
                <li key={index}>
                  {notification.message} - {notification.date}
                </li>
              ))}
            </ul>
          </div>
        );
      case "settings":
        if (!data.settings) return <div>Loading...</div>;
        return (
          <div className="settings">
            <h2>Settings</h2>
            <form>
              <label>
                Email Notifications
                <input
                  type="checkbox"
                  checked={data.settings.emailNotifications}
                  readOnly
                />
              </label>
              <label>
                SMS Notifications
                <input
                  type="checkbox"
                  checked={data.settings.smsNotifications}
                  readOnly
                />
              </label>
              <label>
                Two-Factor Authentication
                <input
                  type="checkbox"
                  checked={data.settings.twoFactorAuthentication}
                  readOnly
                />
              </label>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="visinpg" className="clearfix">
      <div className="container1">
        <br></br>
        <br></br>
      </div>

      <br />
      <section id="servicesin">
        <div className="container1">
          <div className="col-md-12 wow fadeInUp">
            <div className="about-col">
              <br />
              <div className="profile">
                <div className="sidebar">
                  <br></br>

                  <div className="profile-picture">
                    <img
                      src={`https://localhost:7052${ProfileImage}`}
                      alt={`${ProfileImage}'s profile`}
                    />
                  </div>
                  <ul className="side-tabs">
                    <li
                      className={activeTab === "user" ? "active" : ""}
                      onClick={() => setActiveTab("user")}
                    >
                      Users Info
                    </li>
                    <li
                      className={
                        activeTab === "transactionHistory" ? "active" : ""
                      }
                      onClick={() => setActiveTab("transactionHistory")}
                    >
                      Transaction History
                    </li>
                    <li
                      className={activeTab === "notifications" ? "active" : ""}
                      onClick={() => setActiveTab("notifications")}
                    >
                      Notifications
                    </li>
                    <li
                      className={activeTab === "settings" ? "active" : ""}
                      onClick={() => setActiveTab("settings")}
                    >
                      Settings
                    </li>
                  </ul>
                </div>
                <div className="content">{renderContent()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile;
