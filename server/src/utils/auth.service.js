import jwt from "jsonwebtoken";

 export const genToken = async (user, res) => {
  try {
    const payload = { id: user_id };

    const token = await jwt.sign(payload.process.env.JWT_SECRET, {
      expireIn: "1d",
    });

    res.cookie("CravingToken", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
  } catch (error) {
    throw next(error);
  }
};
