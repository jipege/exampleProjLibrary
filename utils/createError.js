module.exports = (error, stack) => ({
  status: "unhandled",
  message: error,
  stack
});
