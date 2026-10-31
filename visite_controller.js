const Visit = require("../models/visite_model");

exports.addVisit = async (req, res, next) => {
    try {
        const count = await Visit.increaseVisit();

        res.status(200).json(count);
    } catch (error) {
        next(error);
    }
};

exports.getVisit = async (req, res, next) => {
    try {
        const count = await Visit.getVisits();

        res.status(200).json(count);
    } catch (error) {
        next(error);
    }
};