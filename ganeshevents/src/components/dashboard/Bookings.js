import React from "react";
import Header from "./Header";

const Bookings = () => {
  return (
    <div className="container p-2">
      <Header activeMenu="Bookings" />
      <h3 className="text-center mt-2">My Bookings</h3>
      <hr />
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Event Id</th>
            <th scope="col">Event Name</th>
            <th scope="col">Booked Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
