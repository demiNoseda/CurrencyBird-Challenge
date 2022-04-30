const checkAuth = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1] === "CurrencyBird-Challenge"
  ) {
    return next();
  } else {
    const error = new Error("Unauthorized");
    return res.status(401).json({ msg: error.message });
  }
};

export default checkAuth;
