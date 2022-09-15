const {
  createHotel,
  getHotel,
  updateHotel,
  getHotels,
  deleteHotel,
  countByCity,
  countByType,
} = require("../controllers/hotel");
const { getHotelRooms } = require("../controllers/room");

const { verifyAdmin } = require("../utils/verifyToken");

const router = require("express").Router();

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.get("/", getHotels);

//get a hotel
router.get("/find/:id", getHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

router.delete("/:id", verifyAdmin, deleteHotel);

module.exports = router;
