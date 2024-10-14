module.exports.success = function ({res, payload}) {
  const response = { status: 1, payload: payload };
  res.status(200).send(response);
};

module.exports.failed = function ({ res, message }) {
  const response = { status: 0, message };
  res.status(400).send(response);
};
