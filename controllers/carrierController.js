const fs = require('fs');
const { json } = require('stream/consumers');

const carriers = JSON.parse(fs.readFileSync('./data/carrier-data.json'));

exports.getAllCarrierData = (req, res) => {
  
    if(!carriers){
        res.status(404).json({
            status: "fail",
            message: "not found",
        });
        return;
    }

    res.status(200).json({
        status: "success",
        data: carriers,
    });

};

exports.getDistance = (req, res) => {

    const {pickup_postcode, delivery_postcode, vehicle} = req.body;

    const pickup = parseInt(pickup_postcode);
    const delivery = parseInt(delivery_postcode);
    
    const distance = Math.abs(pickup - delivery);

    const price =  (distance * 0.2).toFixed(2);
    let finalPrice = price;
    
    switch(vehicle) {
        case "bicycle":
          finalPrice *= 1.1;
          break;
        case "motorbike":
          finalPrice *=1.15;
          break;
        case "parcel_car":
            finalPrice *=1.2;
        break;
        case "small_van":
            finalPrice *=1.3
        break;
        case "large_van":
            finalPrice *= 1.4;
        break;
        default:
          finalPrice *=1.4;
      }


    res.status(200).json({
        status: "success",
        data: {
            pickup_postcode,
            delivery_postcode,
            distance,
            vehicle,
            finalPrice,
        },
    });

};

exports.getBestPrice = (req, res) => {
    
    const {pickup_postcode, delivery_postcode, carrier_name } = req.body;
    
    const carrier = carriers.find(one => one.carrier_name === carrier_name);
    const base_price = carrier.base_price;

    res.status(200).json({
        status: "success",
        data: {
            pickup_postcode,
            delivery_postcode,
            carrier_name,
            base_price,
        }
    });

};