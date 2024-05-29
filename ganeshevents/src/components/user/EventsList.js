import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const EventsList = () => {
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

  const eventsview = events.map((event, index) => {
    return (
      <div className="col-3 col-md-3 col-lg-3 p-2" key={index}>
        <div className="card">
          <img className="card-img-top" src="./img/Login.gif" alt="event" />
          <div className="card-body">
            <h5 className="card-title">{event.event_name}</h5>
            <p className="card-text">
              {event.event_address} [INR : {event.event_amount}]
            </p>
            <Link to={`/event/${event.event_id}`} className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container p-2">
        <Header activeMenu="Events" />
        <div className="mt-3 text-center">
          <h2>All Events</h2>
        </div>
        <div className="row mt-3">{eventsview}</div>
      </div>
    </>
  );
};

export default EventsList;
