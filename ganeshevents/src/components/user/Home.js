import React, { useEffect, useState } from "react";
import "./../../style/Myfilestyle.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { apiEndPoint } from "../utils/ApiService";

const Home = () => {
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

  const top3 = events.map((event, index) => {
    return (
      <div className="col-4 col-md-4 col-lg-4 p-2" key={`HomeEvent_${index}`}>
        <div className="card">
          <img className="card-img-top" src={`./img/eventOne.jpg`} alt="logo" />
          <div className="card-body">
            <h5 className="card-title">
              {event.event_name} (<b>{event.event_id}</b>)
            </h5>
            <p className="card-text">
              {event.event_address} [INR : {event.event_price}]
            </p>
            <Link to="#" className="btn btn-primary">
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
        <Header activeMenu="Home" />
        <div className="text-center mt-3">
          <h2>Ganesh Events</h2>
        </div>
        <hr />
        <p className="poetsen-one-regular">
          Hey India, get set 'cause Alan Walker's tour is about to hit you like
          a storm!
          <br />
          Kolkata, Shillong, Delhi NCR, Ahmedabad, Bengaluru, Kochi, Chennai,
          Pune, Mumbai and Hyderabad.
          <br />
          Imagine nights where "Faded" isn't just a track, but the anthem of
          your memories, where every "Alone" moment feels like a shared pulse
          with thousands.
          <br />
          This tour is your playlist come to life. Feel the "Spectre" of beats
          haunting every corner of your mind, and when "Darkside" hits, that’s
          when you know it’s real – the music, the crowd, the energy.
          <br />
          Join the movement, feel the music, be the beat. Alan Walker is
          calling, and this is the journey you don’t wanna miss!
          <br />
          Book your Tickets Now!
        </p>
        <hr />
        <div className="row">{top3}</div>
      </div>
    </>
  );
};

export default Home;
