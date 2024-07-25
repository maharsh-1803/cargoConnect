const mongoose = require('mongoose');
function getISTTime() {
    const istOffset = 5.5 * 60 *60 * 1000; // IST is UTC +5:30
    const now = new Date();
    const istTime = new Date(now.getTime() + istOffset);
    return istTime;
  }

const truckRouteSchema = new mongoose.Schema({
    AgencyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TruckAgency', 
        required: true
    },
    route: {
        type: String,
        required: true
    }
},{
    timestamps: {
      currentTime: () => getISTTime() 
    }
});

const TruckRoute = mongoose.model('TruckRoute', truckRouteSchema); // Capitalized model name
module.exports = TruckRoute;
