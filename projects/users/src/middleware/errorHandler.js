const errorHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ msg: err.message });
  } else {
    res.status(500).json({ msg: "Internal Server Error 500" });
  }
};

export default errorHandler;
