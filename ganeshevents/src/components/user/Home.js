import React from "react";
import "./../../style/Myfilestyle.css";
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => {
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
  ];
  const top3 = events.map((event, index) => {
    return (
      <div className="col-4 col-md-4 col-lg-4 p-2" key={`HomeEvent_${index}`}>
        <div className="card">
          <img className="card-img-top" src="./img/Login.gif" alt="logo" />
          <div className="card-body">
            <h5 className="card-title">{event.event_name}</h5>
            <p className="card-text">
              {event.event_address} [INR : {event.event_amount}]
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
