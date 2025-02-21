const fs = require('fs');

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