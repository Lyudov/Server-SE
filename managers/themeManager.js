const Theme = require("../models/Theme");

exports.delete = (themeId) => Theme.findByIdAndDelete(themeId);

exports.update = (themeId, themeData) =>
  Theme.findByIdAndUpdate(themeId, themeData);

exports.getOne = (themeId) => Theme.findById(themeId);

exports.getAll = async (qs) => {
  let query = Theme.find();

  // if (qs.where) {
  //   const [fieldName, ownerId] = qs.where.split("=");
  //   ownerId = ownerId.replaceAll('"', "");
  //   query = query.find({ _ownerId: ownerId });
  // }

  const result = await query;
  return result;
};
exports.create = (themeData) => Theme.create(themeData);
