const TruckRoute = require("../model/TruckRoute.model");

const addRoute = async (req, res) => {
    try {
        const { AgencyId, route } = req.body;

        const newData = new TruckRoute({
            AgencyId,
            route
        });

        await newData.save();

        return res.status(200).json({
            success: true,
            message: "Route added successfully",
            route: newData
        });

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = {
    addRoute
};
