import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const AuthProtect = async (req, res, next) => {
  try {
    const token = req.cookies.CravingToken;

    console.log(token);

    next();
  } catch (error) {
    console.log(error.message);
    const error = new Error("Unkown Error At MiddleWare");
    error.statusCode = 500;
    next(error);
  }
};
