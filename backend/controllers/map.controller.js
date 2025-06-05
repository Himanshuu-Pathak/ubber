const mapService = require('../service/maps.service');
const {validationResult} = require('express-validator');

module.exports.getCoordinates = async (req,res,next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {address} = req.query;

    try{
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates)

    }catch(err){
        res.status(404).json({
            message: 'Coordinate not found'
        })
    }
} 

module.exports.getDistanceTime = async (req,res,next) =>{
    try{

        const error = validationResult(req);
        if(!error.isEmpty()){
            res.status(400).json({
                errors: errors.array()
            });
        }

        const {origin, destination} = req.query;

        const distanceTime = await mapService.getDistanceTime(origin, destination);

        res.status(200).json(distanceTime);

    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

module.exports.getAutoCommpleteSuggestions = async (req, res, next) =>{
    try{
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
                error: error.array()
            });
        }
        const {input} = req.query;

        const suggestions = await mapService.getAutoCommpleteSuggestions(input);

        res.status(200).json(suggestions);

    }catch(err){
        console.error(err);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}