import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { apiEndPoint } from "../utils/ApiService";

const EventsList = () => {
  const serviceUrl = apiEndPoint();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEventList = async () => {
      const endpoint = serviceUrl + "event/list";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      await fetch(endpoint, options)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            alert(res.statusText);
          }
        })
        .then((data) => {
          if (data.success === true) {
            setEvents(data.results);
          } else {
            alert(data.message);
          }
        });
    };
    fetchEventList();
  }, []);

  const eventsview = events.map((event, index) => {
    return (
      <div className="col-3 col-md-3 col-lg-3 p-2" key={index}>
        <div className="card">
          <img className="card-img-top" src="./img/eventTwo.jpg" alt="event" />
          <div className="card-body">
            <h5 className="card-title">{event.event_name}</h5>
            <p className="card-text">
              {event.event_address} [INR : {event.event_price}]
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
