import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/user/Home";
import Contact from "./components/user/Contact";
import EventsList from "./components/user/EventsList";
import EventDetails from "./components/user/EventDetails";
import UserEventDetails from "./components/dashboard/EventDetails";
import Login from "./components/user/Login";
import PrivateRoute from "./components/utils/PrivateRoute";
import Events from "./components/dashboard/Events";
import BookEvent from "./components/dashboard/BookEvent";
import Bookings from "./components/dashboard/Bookings";
import Profile from "./components/dashboard/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user/events"
            element={
              <PrivateRoute>
                <Events />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/event/:eventId"
            element={
              <PrivateRoute>
                <UserEventDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/event/book/:eventId"
            element={
              <PrivateRoute>
                <BookEvent />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/bookings"
            element={
              <PrivateRoute>
                <Bookings />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
