export const UserRegister = async (req, res, next) => {
  try {
    const { email, mobileNumber } = req.body;
    // check if user already exists
    // if exists send error response
    // else create new user and send success response
    console.log("User Registerd Succesfully");
  } catch (error) {
    next(error);
  }
};

export const SendOTP = async (req, res, next) => {
  console.log("Send OTP Controller Hit !");
  try {
    const { identifier } = req.body;
    console.log(req.body);
    // check if user exists with given identifier
    // if not exists send error response
    // else generate OTP and send response
    console.log("OTP Sent Succesfully");
  } catch (error) {
    next(error);
  }
};
