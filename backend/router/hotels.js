const { createHotel, getHotel, updateHotel, getHotels, deleteHotel } = require("../controllers/hotel");
const Hotel = require("../models/Hotel");

const router = require("express").Router();

router.post("/", createHotel);

router.put("/:id", updateHotel );

router.get("/",getHotels);

//get a hotel
router.get("/:id", getHotel);

router.delete("/:id",deleteHotel);

module.exports = router;
