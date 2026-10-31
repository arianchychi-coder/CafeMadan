const connectMongo = require("../config/mongo_config");

async function increaseVisit() {
    const db = await connectMongo();

    const result = await db.collection("visits").findOneAndUpdate(
        { _id: "site_visits" },
        { $inc: { count: 1 } },
        {
            upsert: true,
            returnDocument: "after"
        }
    );

    return result.count;
}

async function getVisits() {
    const db = await connectMongo();

    const result = await db.collection("visits").findOne({
        _id: "site_visits"
    });

    return result?.count || 0;
}

module.exports = {
    increaseVisit,
    getVisits
};