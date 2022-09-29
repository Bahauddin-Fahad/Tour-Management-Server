const Tour = require("../models/Tour");
const {
  getToursService,
  createTourService,
  getTourByIdService,
  updateTourByIdService,
  getTrendingToursService,
  getCheapestToursService,
} = require("../services/tour.services");

exports.getTours = async (req, res, next) => {
  try {
    const queries = {};
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }
    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }
    const tours = await getToursService(queries);
    res.status(200).send({
      status: "Success",
      message: "Data found successfully",
      data: tours,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: "No data found",
      error: error.message,
    });
  }
};

exports.createTour = async (req, res, next) => {
  try {
    const tour = await createTourService(req.body);
    const result = await tour.save();
    res.status(200).send({
      status: "Success",
      message: "Data is saved",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: "Data is not saved",
      error: error.message,
    });
  }
};

exports.getTourById = async (req, res, next) => {
  try {
    const tour = await getTourByIdService(req.params.id);
    res.status(200).send({
      status: "Success",
      message: "Data found successfully",
      data: tour,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: "No data found",
      error: error.message,
    });
  }
};

exports.updateTourById = async (req, res, next) => {
  try {
    const tour = await updateTourByIdService(req.params.id, req.body);
    res.status(200).send({
      status: "Success",
      message: "Data found successfully",
      data: tour,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: "No data found",
      error: error.message,
    });
  }
};
exports.getTrendingTours = async (req, res, next) => {
  try {
    const tours = await getTrendingToursService();
    res.status(200).send({
      status: "Success",
      message: "Data found successfully",
      data: tours,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: "No data found",
      error: error.message,
    });
  }
};
exports.getCheapestTours = async (req, res, next) => {
  try {
    const tours = await getCheapestToursService();
    res.status(200).send({
      status: "Success",
      message: "Data found successfully",
      data: tours,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: "No data found",
      error: error.message,
    });
  }
};
