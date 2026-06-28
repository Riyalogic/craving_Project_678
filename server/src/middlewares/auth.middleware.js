export const AuthProtect = async (req, res, next) => {
  try {
    next();
  } catch (error) {
    console.log(error.message);
    const error = new Error("Unkown Error At MiddleWare");
    error.statusCode = 500;
    next(error);
  }
};
