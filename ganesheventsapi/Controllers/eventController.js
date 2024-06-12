const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
  const sampleObject = [
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

  res.status(200).json({
    status: true,
    data: sampleObject,
  });
});

module.exports = router;
