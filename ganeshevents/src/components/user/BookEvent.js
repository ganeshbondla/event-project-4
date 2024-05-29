import React from "react";
import "./../../style/Myfilestyle.css";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";

const BookEvent = () => {
  const events = [
    {
      id: 1,
      event_id: 123456,
      event_name: "HelloHYD",
      event_date: "28-05-2024",
      event_address: "Madhapur, Hyderabad",
      event_amount: 1000,
      event_status: 1,
      event_deleted: 0,
      rating: 4,
    },
    {
      id: 2,
      event_id: 123457,
      event_name: "HelloNZB",
      event_date: "28-05-2024",
      event_address: "Madhapur, Armoor",
      event_amount: 1200,
      event_status: 1,
      event_deleted: 0,
    },
    {
      id: 3,
      event_id: 123458,
      event_name: "HelloWRNGL",
      event_date: "28-05-2024",
      event_address: "Madhapur, WRNGL",
      event_amount: 800,
      event_status: 1,
      event_deleted: 0,
    },
    {
      id: 4,
      event_id: 123459,
      event_name: "HelloKRMR",
      event_date: "28-05-2024",
      event_address: "Madhapur, KRMR",
      event_amount: 900,
      event_status: 1,
      event_deleted: 0,
    },
  ];
  const { eventId } = useParams();

  const perticulerEvent = events.filter(
    (event) => event.event_id === parseInt(eventId)
  );

  return (
    <>
      <div className="container p-2">
        <Header />
        <div className="text-center mt-3">
          {perticulerEvent.length === 0 ? (
            <>
              <div className="alert alert-warning mt-3" role="alert">
                Event Details Not Found!
              </div>
            </>
          ) : (
            <>
              <h2>Book Event : {perticulerEvent[0].event_name}</h2>
              <hr />
              <b>Event ID : {perticulerEvent[0].event_id}</b>
              <br />
              <b>Event Amount : {perticulerEvent[0].event_amount}</b>
              <hr />
              <form className="mt-2">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    id="inputMobile"
                    placeholder="Enter Your Mobile Number"
                  />
                </div>
                <button type="submit" className="btn btn-block btn-primary">
                  Confirm My Booking
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BookEvent;
