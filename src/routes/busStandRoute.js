const express = require("express");
const db = require("../config/database_config");
const { success, failed } = require("../helpers/responses");
const route = express.Router();

route.get("/:name", (req, res) => {
  return res.send(`Hello ${req.params.name}`);
});

route.get("/", async (req, res) => {
  try {
    const [result] = await db.query("SELECT * FROM bus_route");
    return success({ res, payload: result ? result : [] });
  } catch (error) {
    return failed({ res, message: error });
  }
});

route.post("/add", async (req, res) => {
  try {
    const { routename, latitude, longitude } = req.body;

    if (!routename || !latitude || !longitude) {
      return failed({
        res: res,
        message: "Some of the required feilds are empty",
      });
    }
    const [result] = await db.query(
      "INSERT INTO bus_route(route_name,latitude,longitude)VALUE(?,?,?)",
      [routename, latitude, longitude]
    );

    if (result.affectedRows === 0) {
      return failed({ res, message: "un expected error occur during saving " });
    }

    return success({ res, payload: result.insertId });
  } catch (error) {
    if (error.coder == "ER_BAD_FIELD_ERROR") {
      console.log(error);
      return failed({ res, message: error });
    }
    console.log(error);
    return failed({ res, message: error.sqlMessage });
  }
});

route.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!id || isNaN(id))
      return failed({
        res,
        message: `${req.url} is not valid url please check it`,
      });

    const { routename, latitude, longitude } = req.body;

    if (!routename || !latitude || !longitude) {
      return failed({
        res: res,
        message: "Some of the required feilds are empty",
      });
    }

    const [result] = await db.query(
      "UPDATE bus_route SET route_name=?,latitude=?,longitude=? WHERE route_id=?",
      [routename, latitude, longitude, id]
    );

    if (result.affectedRows === 0) {
      return failed({ res, message: "un expected error occur during saving " });
    }

    console.log(result);
    return success({ res, payload: { id, routename, latitude, longitude } });
  } catch (error) {
    console.log(error);
    return failed({ res, message: "oops" });
  }
});

module.exports = route;
