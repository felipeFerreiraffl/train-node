const notFoundHandler = (req, res, next) => {
  const err = new Error("Não encontrado");
  err.status = 404;
  return next(err);
};

export default notFoundHandler;
