const { Sequelize } = require("sequelize");
const sequelize = require("../util/db");
const Data = sequelize.define('cricketinfo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cricketerName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    pUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthPlace: {
        type: Sequelize.STRING,
        allowNull: false
    },
    carrer: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    NOM: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    Fifties: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    Centuries: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    Wickets: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    Average: {
        type: Sequelize.DECIMAL,
        allowNull: true
    }
})
module.exports = Data;