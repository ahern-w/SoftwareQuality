const {SERVER_ERROR} = require('../utils/constants');

const {Company }= require('../models/company');
const {Customer}=require('../models/customer'); 
const { User} = require ('../models/user');

const getSpecifcCustomers = async(req,res)=>{
    try{
     const user = await User.findByPk (user.company_id);
     const company = await Company.findByPk(user.Company_id);
     const Client = await Customer.findByPk(user.cliente.id);
     res.json({
        ...user.dataValues,
        ...client.dataValues,
        ...company.dataValues

     });

}catch(e){
    console.log(e);
    res
        .status(500)
        .json(SERVER_ERROR);
}
};
module.exports = {
    getSpecifcCustomers
};
