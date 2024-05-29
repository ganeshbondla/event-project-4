import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/user/Home";
import Contact from "./components/user/Contact";
import EventsList from "./components/user/EventsList";
import EventDetails from "./components/user/EventDetails";
import BookEvent from "./components/user/BookEvent";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
