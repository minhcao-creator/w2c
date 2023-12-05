const express = require('express')

const Meal = require('../models/Meal')

const getAllMeal = async(res, req) => {
    try {
        const meals = await Meal.find()
        res.json({success: true, meals})
    } catch (error) {
        
    }
}

module.exports = {getAllMeal}