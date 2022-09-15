const Hotel = require("../models/Hotel");

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
  const { max, min, ...others } = req.query;
  try {
    const hotel = await Hotel.find({
      ...others,
      cheapestPrice: { $gte: min || 1, $lte: max || 99999999 },
    }).limit(req.query.limit);
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
const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
const countByType = async (req, res, next) => {
  try {
    const hotel = await Hotel.countDocuments({ type: "hotel" });
    const apartment = await Hotel.countDocuments({ type: "apartment" });
    const resort = await Hotel.countDocuments({ type: "resort" });
    const villa = await Hotel.countDocuments({ type: "villa" });
    const cabin = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { name: "hotel", value: hotel },
      { name: "apartment", value: apartment },
      { name: "resort", value: resort },
      { name: "villa", value: villa },
      { name: "cabin", value: cabin },
    ]);
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
  countByCity,
  countByType,
};
