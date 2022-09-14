const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const register = async (req, res, next) => {
  try {
    const { password } = req.body;
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const passwordValidation = await bcryptjs.compare(
      req.body.password,
      user.password
    );
    !user && next(createError(404, "User not found"));
    if (!passwordValidation) {
      return next(createError(401, "Password is not correct"));
    }

    const { password, __v, isAdmin,...others } = user._doc;

    res.status(200).json(others);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
