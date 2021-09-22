//gets the admin page
exports.getadmin = async (req, res, next) => {
  return res.json({
    msg: "Admin page",
  });
};
