module.exports.validate = ({ res,id }) => {
  if (!id || isNaN(id))
    return failed({
      res,
      message: `${req.url} is not valid url please check it`,
    });
};
