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

const getRoutesByAgencyId = async(req,res)=>{
    try {
        const {id} = req.params;
        const truckRoutes = await TruckRoute.find({AgencyId:id})
        if(!TruckRoute){
            return res.status(404).send({message:"route not found"})
        }
        return res.status(200).json({
            message:"routes retrived successfully",
            routes:truckRoutes
        })
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports = {
    addRoute,
    getRoutesByAgencyId
};
