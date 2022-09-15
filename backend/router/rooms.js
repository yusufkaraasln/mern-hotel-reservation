const { createRoom, updateRoom, deleteRoom, getRoom, getRooms, updateRoomAvailable } = require("../controllers/room");
const { verifyAdmin } = require("../utils/verifyToken");

const router = require("express").Router();

router.post("/:id", verifyAdmin,createRoom)
router.put("/:id", verifyAdmin,updateRoom)
router.put("/available/:id", updateRoomAvailable )
router.delete("/:id/:roomId", verifyAdmin,deleteRoom)

router.get("/:id", verifyAdmin,getRoom)
router.get("/", verifyAdmin,getRooms)








module.exports = router