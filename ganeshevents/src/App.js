import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/user/Home";
import Contact from "./components/user/Contact";
import EventsList from "./components/user/EventsList";
import EventDetails from "./components/user/EventDetails";
import BookEvent from "./components/user/BookEvent";
import Login from "./components/user/Login";
import PrivateRoute from "./components/utils/PrivateRoute";
import Events from "./components/dashboard/Events";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/event/book-event/:eventId" element={<BookEvent />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user/events"
            element={
              <PrivateRoute>
                <Events />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
