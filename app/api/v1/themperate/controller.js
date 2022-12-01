const Themperate = require('./model');

const index = async (req, res, next) => {
    try {
    const resault = await Themperate.find().select( '_id themperature pressure altitude' );
    res.status(200).json({
        data: resault
    });     
    } catch (err) {
        next(err);
    }
};

const create = async (req, res, next) => {
    try {
     const { themperature, pressure, altitude } = req.body;  
     const result = await Themperate.create({ themperature, pressure, altitude });
     res.status(201).json({
        result
     });
    } catch(err){
        next(err)
    }
};

const find = async (req, res, next) => {
    try {
    const { id } = req.params;
    const resault = await Themperate.findOne({_id: id})
    if(!resault) {
        return res.body(400).json({
            message: 'Id themperature tidak ditemukan'
        });
    }
    res.status(200).json({
        data: resault
    });
        
    } catch (err) {
        next(err);
    }
};

module.exports = {
   index, create, find
}