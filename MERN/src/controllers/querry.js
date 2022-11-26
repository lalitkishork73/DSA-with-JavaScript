const data = require('../temp/data');
const insert = require('../models/massadd');

const query = async (req, res) => {
    try {

        const finddata=await insert.find({})

        return res.status(200).send({ status: true, message: "hi lalit" });



    } catch (err) {
        return res.status(500).send(err.message);
    }
}
const queryAdd = async (req, res) => {
    try {


        const createdData = await insert.insertMany(data);
        if(createdData.length== 0){
            return res.status(404).send({ status: true, message: "not able to insert" });
        }
        return res.status(201).send({ status: true, message: "creted successfully",data: createdData });



    } catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports = { query, queryAdd };