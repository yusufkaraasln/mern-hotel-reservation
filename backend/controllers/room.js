const Room = require("../models/room");
const Hotel = require("../models/Hotel");

const createRoom = async (req, res, next) => {
  const room = new Room(req.body);

  try {
    const savedRoom = await room.save();

    try {
      await Hotel.findByIdAndUpdate(req.params.id, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

const getRooms = async (req, res, next) => {
  try {
    const room = await Room.find();
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      $set: req.body,
    });
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

const deleteRoom = async (req, res, next) => {
  try {
    const deleted = await Room.findByIdAndDelete(req.params.roomId);

    try {
      await Hotel.findByIdAndUpdate(req.params.id, {
        $pull: { rooms: deleted._id },
      });
    } catch (error) {
      next(error);
    }

    res.status(200).json({
      message: deleted._id + " has been deleted",
    });
  } catch (error) {
    next(error);
  }
};

const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );

    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

const updateRoomAvailable = async (req, res, next) => {
  try {
    await Room.updateOne({
      "roomNumbers._id": req.params.id
    },
    {
      $push: {
        "roomNumbers.$.unavaibleDates": req.body.dates
      }
    }
    
    
    )
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateRoomAvailable,
  createRoom,
  getRooms,
  getRoom,
  updateRoom,
  deleteRoom,
  getHotelRooms,
};
