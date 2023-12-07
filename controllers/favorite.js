const express = require('express')

const Favorite = require('../models/MealUser')

const getAllFavorite = async(req, res) => {
    try {
        const meals = await Favorite.find()
        res.json({success: true, meals})
    } catch (error) {
        console.log(error)
    }
}

const createFavorite = async(req, res) => {
    const data = req.body
    try {
        const newMeal = new Favorite(data)
        await newMeal.save()
        res.json({ success: true, newMeal })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllMeal, createMeal }