const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tour.controller");

router.route("/").get(tourController.getTours).post(tourController.createTour);
router.route("/trending").get(tourController.getTrendingTours);
router.route("/cheapest").get(tourController.getCheapestTours);
router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.updateTourById);
module.exports = router;
