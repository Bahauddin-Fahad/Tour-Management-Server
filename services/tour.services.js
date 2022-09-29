const Tour = require("../models/Tour");

exports.getToursService = async (queries) => {
  const tours = await Tour.find({})
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);
  return tours;
};

exports.createTourService = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};
exports.getTourByIdService = async (id) => {
  const tour = await Tour.findById({ _id: id }, "-_id");
  const updatedTour = await Tour.findByIdAndUpdate(
    { _id: id },
    { viewCount: tour.viewCount + 1 },
    { new: true }
  );
  return updatedTour;
};
exports.updateTourByIdService = async (id, data) => {
  //   const tour = await Tour.findById({ _id: id }, "-_id");
  const updatedTour = await Tour.findByIdAndUpdate(
    { _id: id },
    { ...data },
    { new: true }
  );
  return updatedTour;
};
exports.getTrendingToursService = async () => {
  const tours = await Tour.find({}).sort({ viewCount: -1 }).limit(3);
  return tours;
};
exports.getCheapestToursService = async () => {
  const tours = await Tour.find({}).sort({ price: 1 }).limit(3);
  return tours;
};
