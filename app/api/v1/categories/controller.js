const Categories = require('./model');

const index = async (req, res, next) => {
    try {

    const resault = await Categories.find().select(' _id name ');
    res.status(200).json({
        data: resault
    });
        
    } catch (err) {
        next(err);
    }
};

const create = async (req, res, next) => {
    try {

     const { name } = req.body;
    
     const result = await Categories.create({ name });
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
    const resault = await Categories.findOne({_id: id})

    if(!resault) {
        return res.body(400).json({
            message: 'Id categpries tidak ditemukan'
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