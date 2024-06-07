import React from "react";
import Header from "./Header";

const Profile = () => {
  return (
    <div className="container p-2">
      <Header activeMenu="Profile" />
      <h3 className="text-center mt-2">My Profile</h3>
      <hr />
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <img src="../logo192.png" class="rounded r-50" alt="..." />
        </div>
        <div className="col-md-8 col-lg-8">
          <table className="table">
            <tr>
              <th>Name : </th>
              <td>Ganesh B</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
