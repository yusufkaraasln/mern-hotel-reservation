const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

const getHotels = async (req, res, next) => {
  try {
    const hotel = await Hotel.find();
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

const updateHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      $set: req.body,
    });
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

const deleteHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: hotel._id + " has been deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
};
