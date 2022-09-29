const {DataTypes} = require ('sequelize');
const{db_connection}= require('../database/connection');

const {Company }= require('./company');
const {Customer}=require('./customer'); 
const { User} = require ("./user")
const {Account} = require ("./account")
const { Auth} = require ("./auth")
const { Rol} = require ("./role")

const user = db_connection.define('user',{
    email:{
        type:DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    },
    lastName:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.BOOLEAN
    },
    isconfirmed:{
        type:DataTypes.BOOLEAN
    },  
    registeredBy:{
        type:DataTypes.INTEGER
    },
    Role_id:{
        type:DataTypes.INTEGER
    },
    Client_id:{
        type:DataTypes.INTEGER,
        references:{
            model:Customer,
            key:'id'
        }

    },
    Company_id:{
        type:DataTypes.STRING,
        references:{
            model:Company ,
            key:'id'
        }
    }},{
        freezeTableName:true,
        tablaName: ' user'

    });
    
module.exports = { User};