import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import the jspdf-autotable plugin
//import "./styles.css"; // Make sure to define your CSS in this file
import AuthService from "./services/auth-service";
import { AdminUrl } from "./utilities/api";
import { CgProfile } from "react-icons/cg";
import UserModal from "./UserModal";
import { RiEdit2Fill } from "react-icons/ri";
import './UserResponsive.css';

const UserProfile = () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState();
  const [profileImage, setProfileImage] = useState(null);

  const token = AuthService.getToken();
  const UserId = AuthService.getUserId();
  const RoleID = AuthService.getRoleId();
  const ProfileImage = AuthService.getProfileImage();
  console.log(RoleID, "RoleID");
  console.log(UserId, "UserId");
  console.log(ProfileImage, "ProfileImage");

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${AdminUrl.UserById}?id=${UserId}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const result = await response.json();
      console.log(result, "Data by User Id");
      setUserData(result);
      //setImage(result.profileImageUrl);
     // setImage(result.profileImageUrl || ""); // Set image URL or empty string if undefined
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  const handleEditUser = (user) => {
    //console.log(user,"user");
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSaveUser = async (user, userId) => {
    console.log(userId, "userId ");
    console.log(user, "user ");
    try {
      const url = `${AdminUrl.UpdateUser}?id=${userId}`;
      const method = "PUT";
      const formData = new FormData();
      formData.append("UserName", user.userName);
      formData.append("Email", user.email);
      formData.append("RoleId", user.roleId);
      formData.append("DesignationId", user.designationId);
      formData.append("Password", user.password);

      //  if (profileImage) {
      //   formData.append("ProfileImage", profileImage);
      // } 

      // if (profileImage) {
      //   // Append the selected profile image
      //   formData.append("ProfileImage", profileImage);
      // } else {
      //   // If no new image selected, handle existing image
      //   if (userData && userData.profileImageUrl) {
      //     // Extract the image file name from the URL
      //     const imageName = userData.profileImageUrl.split('/').pop();
  
      //     // Fetch the existing image as a file from the URL
      //     const response = await fetch(userData.profileImageUrl);
      //     const blob = await response.blob();
          
      //     // Append the image with its original name
      //     formData.append("ProfileImage", blob, imageName);
      //   }
      // }
      if (profileImage) {
        formData.append("ProfileImage", profileImage);
      } else if (userData.profileImageUrl) {
        const imageName = userData.profileImageUrl.split('/').pop();
        const response = await fetch(userData.profileImageUrl);
        const blob = await response.blob();
        formData.append("ProfileImage", blob, imageName);
      }

      await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Content-Type': 'application/json',
        },
        //body: JSON.stringify(user), // Ensure this is the updated form data
        body: formData,
      });
      fetchUserData();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "user":
        return (
          <div className="user-info">
            <div>
              <br></br>
            </div>
            <div className="bio-screen">
              <div className="bio-header">
                <h1>
                  <strong>USER PROFILE</strong>
                  <button
                    onClick={() => handleEditUser(userData)}
                    //className="btn btn-md btn-info mr-1"
                    //className="fa fa-edit"
                    className="edit-icon-button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <RiEdit2Fill size={20} />
                  </button>
                </h1>
              </div>
              <div className="bio-content">
                <div className="bio-item">
                  <strong>User ID:</strong> {userData.userId}
                </div>
                <div className="bio-item">
                  <strong>User Name:</strong> {userData.userName}
                </div>
                <div className="bio-item">
                  <strong>Email:</strong> {userData.email}
                </div>
                <div className="bio-item">
                  <strong>Role Name:</strong> {userData.roleName}
                </div>
                <div className="bio-item">
                  <strong>Role ID:</strong> {userData.roleId}
                </div>
              </div>
            </div>
            <UserModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              user={selectedUser}
              onSave={handleSaveUser}
              setProfileImage={setProfileImage}
            />
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
      <div className="container">
        <br></br>
        <br></br>
      </div>

      <br />
      <section id="servicesin">
        <div className="container">
          <div className="col-md-12 wow fadeInUp">
            <div className="about-col">
              <br />
              <div className="profile">
                <div className="sidebar">
                  <br></br>

                  <div className="profile-picture">
                    {/* <CgProfile size={100} /> */}
                    {/* <img src={ProfileImage} alt="Profile" /> */}
                    {/* <img
                      src={`https://localhost:7052${userData.profileImageUrl}`}
                      alt={`${userData.profileImageUrl}'s profile`}
                    /> */}
                    <img
                      src={userData.profileImageUrl ? `https://localhost:7052${userData.profileImageUrl}` : 'default-profile.png'}
                      alt="Profile"
                      onError={(e) => e.target.src = 'default-profile.png'}
                    />
                  </div>
                  <ul className="side-tabs">
                    <li
                      className={activeTab === "user" ? "active" : ""}
                      onClick={() => setActiveTab("user")}
                    >
                      User Info
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

export default UserProfile;
